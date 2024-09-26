document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('image-upload');
    const imagePreview = document.getElementById('image-preview');
    const topTextInput = document.getElementById('top-text-input');
    const bottomTextInput = document.getElementById('bottom-text-input');
    const generateButton = document.getElementById('generate-meme');
    const memesContainer = document.getElementById('memes-container');

    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '';
            imagePreview.style.display = 'none';
        }
    });

    generateButton.addEventListener('click', () => {
        const file = imageUpload.files[0];
        const topText = topTextInput.value.trim();
        const bottomText = bottomTextInput.value.trim();

        if (!file) {
            alert('Please upload an image first.');
            return;
        }

        if (!topText || !bottomText) {
            alert('Please enter both top and bottom text.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const meme = generateMeme(img, topText, bottomText);
                addMemeToContainer(meme);
                resetForm();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    function generateMeme(img, topText, bottomText) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set text style
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.font = `${canvas.height / 10}px Impact`;
        ctx.textAlign = 'center';

        // Draw top text
        ctx.fillText(topText, canvas.width / 2, canvas.height / 10);
        ctx.strokeText(topText, canvas.width / 2, canvas.height / 10);

        // Draw bottom text
        ctx.fillText(bottomText, canvas.width / 2, canvas.height * 0.9);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height * 0.9);

        return canvas.toDataURL();
    }

    function addMemeToContainer(memeDataUrl) {
        const memeItem = document.createElement('div');
        memeItem.className = 'meme-item';

        const memeContent = document.createElement('div');
        memeContent.className = 'meme-content';

        const memeImage = document.createElement('img');
        memeImage.src = memeDataUrl;
        memeImage.className = 'generated-meme';

        const removeButton = document.createElement('button');
        removeButton.innerHTML = '&times;'; // This creates an "×" symbol
        removeButton.className = 'remove-meme';
        removeButton.addEventListener('click', () => {
            memesContainer.removeChild(memeItem);
        });

        const shareLink = document.createElement('a');
        shareLink.href = memeDataUrl;
        shareLink.textContent = 'Share';
        shareLink.className = 'share-link';
        shareLink.setAttribute('download', 'meme.png'); // Optional: allow users to download the image

        memeContent.appendChild(memeImage);
        memeContent.appendChild(removeButton);
        memeItem.appendChild(memeContent);
        memeItem.appendChild(shareLink);
        memesContainer.appendChild(memeItem);
    }

    function resetForm() {
        imageUpload.value = '';
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        topTextInput.value = '';
        bottomTextInput.value = '';
    }
});