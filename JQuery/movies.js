$(function() {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    function saveMovies() {
        localStorage.setItem('movies', JSON.stringify(movies));
    }

    function renderMovies() {
        $("#movie-list").empty();
        movies.forEach(function(movie, index) {
            let $newMovie = $("<li>").addClass("list-group-item d-flex justify-content-between align-items-center")
                .html(`${movie.title} - Rating: ${movie.rating.toFixed(1)}
                       <button class="btn btn-danger btn-sm delete-movie" data-index="${index}">Remove</button>`);
            $("#movie-list").append($newMovie);
        });
    }

    $("#movie-form").on("submit", function(e) {
        e.preventDefault();
        let title = $("#title").val().trim();
        let rating = parseFloat($("#rating").val());
        
        if (title.length < 2) {
            alert("Please enter a title with at least 2 characters.");
            return;
        }
        
        if (rating < 0 || rating > 10 || isNaN(rating)) {
            alert("Please enter a valid rating between 0 and 10.");
            return;
        }
        
        movies.push({ title, rating });
        saveMovies();
        renderMovies();
        $("#movie-form")[0].reset();
    });

    $("#movie-list").on("click", ".delete-movie", function() {
        let index = $(this).data('index');
        movies.splice(index, 1);
        saveMovies();
        renderMovies();
    });

    $("#sort-title").on("click", function() {
        movies.sort((a, b) => a.title.localeCompare(b.title));
        saveMovies();
        renderMovies();
    });

    $("#sort-rating").on("click", function() {
        movies.sort((a, b) => b.rating - a.rating);
        saveMovies();
        renderMovies();
    });

    // Initial render
    renderMovies();
});