const photos = [
    { src: 'ZergRush.jpg', description: 'Description for Photo 1' },
    { src: 'protoss.jpg', description: 'Description for Photo 2' },
    { src: 'Battle.jpg', description: 'Description for Photo 3' },
    { src: 'Marine.jpg', description: 'Description for Photo 4' },
];

let currentIndex = 0;
const mainPhoto = document.getElementById('mainPhoto');
const photoDescription = document.getElementById('photoDescription');
const thumbnailGallery = document.getElementById('thumbnailGallery');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateGallery(index) {
    mainPhoto.src = photos[index].src;
    photoDescription.textContent = photos[index].description;
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateGallery(currentIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

// Auto-switch photos every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateGallery(currentIndex);
}, 5000);