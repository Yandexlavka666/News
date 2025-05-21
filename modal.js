const galleries = {
  vicecity: [
    'images/screen1.png',
    'images/screen2.png',
    'images/screen4.jpg'
  ],
};

let currentGallery = [];
let currentIndex = 0;

document.querySelectorAll('.open-gallery').forEach(button => {
  button.addEventListener('click', () => {
    const galleryName = button.dataset.gallery;
    currentGallery = galleries[galleryName] || [];
    if (currentGallery.length > 0) {
      currentIndex = 0;
      showImage();
      document.getElementById('galleryModal').style.display = 'block';
    }
  });
});

function showImage() {
  document.getElementById('modalImg').src = currentGallery[currentIndex];
}

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('galleryModal').style.display = 'none';
});

document.getElementById('galleryModal').addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage();
});
