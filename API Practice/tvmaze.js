"use strict"; // Enables strict mode for better error checking and performance

// jQuery selectors for DOM elements
const $showsList = $("#showsList");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#searchForm");

// Clear search input on page load
$(document).ready(function() {
  $("#searchForm-term").val("");
});

/** Given a search term, search for tv shows that match that query. */
async function getShowsByTerm(term) {
  // Make API request to TVMaze
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${term}`);
  // Map API response to desired format
  return response.data.map(result => {
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      // Use default image if not provided
      image: show.image ? show.image.medium : "https://tinyurl.com/tv-missing"
    };
  });
}

/** Populate episodes list for a given show */
function populateEpisodes(episodes) {
  const $episodesList = $("#episodesList");
  $episodesList.empty(); // Clear existing episodes
  
  // Create and append episode list items
  for (let episode of episodes) {
    let $item = $(`
      <li class="list-group-item episode-item">
        <span class="episode-number">S${episode.season.toString().padStart(2, '0')}E${episode.number.toString().padStart(2, '0')}</span>
        <span class="episode-name">${episode.name}</span>
      </li>
    `);
    $episodesList.append($item);
  }
  
  $("#episodesArea").show(); // Display episodes area
}

/** Handle click on show name */
$("#showsList").on("click", ".Show-getEpisodes", async function handleEpisodesClick(evt) {
  console.log("Episodes button clicked");
  const showId = $(evt.target).closest(".Show").data("show-id");
  console.log("Show ID:", showId);
  const episodes = await getEpisodesOfShow(showId);
  console.log("Episodes:", episodes);
  populateEpisodes(episodes);
});

/** Given list of shows, create markup for each and add to DOM */
function populateShows(shows) {
  $showsList.empty(); // Clear existing shows

  // Create and append show cards
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-6 col-lg-4 mb-4">
         <div class="card show-card">
           <img 
              src="${show.image}"
              alt="${show.name}"
              class="card-img-top show-img">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text show-summary">${show.summary ? show.summary.substring(0, 100) + '...' : 'No summary available.'}</p>
             <button class="btn btn-outline-primary btn-sm Show-getEpisodes">
               View Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}

/** Handle search form submission */
async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide(); // Hide episodes area
  populateShows(shows);
}

// Attach event listener to search form
$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

/** Given a show ID, get episodes from API */
async function getEpisodesOfShow(id) {
  console.log("Fetching episodes for show ID:", id);
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  console.log("API response:", response.data);
  // Map API response to desired format
  return response.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number
  }));
}
