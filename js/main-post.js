//post-masonry
const mediaItems = [
  {
    type: 'image',
    src: 'images/101.jpg',
    alt: 'Madhya Pradesh Art Festival 2026',
  },
  { type: 'image', src: 'images/100.jpg', alt: 'Indore Tiger Festival 2025' },
  { type: 'image', src: 'images/99.jpg', alt: 'Indore Tiger Festival 2025' },
  { type: 'image', src: 'images/98.jpg', alt: '' },
  { type: 'image', src: 'images/97.jpg', alt: '' },
  { type: 'image', src: 'images/96.jpg', alt: '' },
  { type: 'image', src: 'images/95.jpg', alt: '' },
  { type: 'image', src: 'images/94.jpg', alt: '' },
  { type: 'image', src: 'images/93.jpg', alt: '' },
  { type: 'image', src: 'images/92.jpg', alt: '' },
  { type: 'image', src: 'images/91.jpg', alt: '' },
  { type: 'image', src: 'images/90.jpg', alt: '' },
  { type: 'image', src: 'images/89.jpg', alt: '' },
  { type: 'image', src: 'images/88.jpg', alt: '' },
  { type: 'image', src: 'images/87.jpg', alt: '' },
  { type: 'image', src: 'images/86.jpg', alt: '' },
  { type: 'image', src: 'images/85.jpg', alt: '' },
  { type: 'image', src: 'images/84.jpg', alt: '' },
  { type: 'image', src: 'images/83.jpg', alt: '' },
  {
    type: 'image',
    src: 'images/82.jpeg',
    alt: 'Madhya Pradesh Art Festival 3.0',
  },
  { type: 'image', src: 'images/81.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/80.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/79.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/78.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/77.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/76.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/75.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/74.jpg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/73.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/72.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/71.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/70.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/69.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/68.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/67.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/66.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/65.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/64.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/63.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/62.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/61.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/60.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/59.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/58.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/57.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/56.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/55.jpeg', alt: 'World ART DAY' },
  { type: 'image', src: 'images/54.jpeg', alt: 'World ART DAY' },
  {
    type: 'image',
    src: 'images/52.jpeg',
    alt: 'Madhya Pradesh Art Festival 2.0',
  },
  {
    type: 'image',
    src: 'images/47.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  {
    type: 'image',
    src: 'images/51.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  {
    type: 'image',
    src: 'images/48.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  {
    type: 'image',
    src: 'images/49.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  {
    type: 'image',
    src: 'images/50.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  {
    type: 'image',
    src: 'images/44.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  { type: 'image', src: 'images/30.jpg', alt: '' },
  { type: 'image', src: 'images/34.jpeg', alt: '' },
  { type: 'image', src: 'images/33.jpeg', alt: '' },
  { type: 'image', src: 'images/32.jpeg', alt: '' },
  { type: 'image', src: 'images/35.jpeg', alt: '' },
  { type: 'image', src: 'images/36.jpeg', alt: '' },
  { type: 'image', src: 'images/37.jpeg', alt: '' },
  { type: 'image', src: 'images/38.jpeg', alt: '' },
  { type: 'image', src: 'images/39.jpeg', alt: '' },
  { type: 'image', src: 'images/40.jpeg', alt: '' },
  { type: 'image', src: 'images/41.jpeg', alt: '' },
  { type: 'image', src: 'images/42.jpeg', alt: '' },
  { type: 'image', src: 'images/43.jpeg', alt: '' },
  { type: 'image', src: 'images/29.jpeg', alt: '' },
  { type: 'image', src: 'images/31.jpeg', alt: '' },
  { type: 'image', src: 'images/28.jpeg', alt: '' },
  { type: 'image', src: 'images/1.jpg', alt: '' },
  { type: 'image', src: 'images/2.jpg', alt: '' },
  { type: 'image', src: 'images/3.jpg', alt: '' },
  { type: 'image', src: 'images/4.jpg', alt: '' },
  { type: 'image', src: 'images/5.jpg', alt: '' },
  { type: 'image', src: 'images/6.jpg', alt: '' },
  { type: 'image', src: 'images/7.jpg', alt: '' },
  { type: 'image', src: 'images/8.jpg', alt: '' },
  { type: 'image', src: 'images/9.jpg', alt: '' },
  { type: 'image', src: 'images/10.jpg', alt: '' },
  { type: 'image', src: 'images/11.jpg', alt: '' },
  { type: 'image', src: 'images/12.jpg', alt: '' },
  { type: 'image', src: 'images/13.jpg', alt: '' },
  { type: 'image', src: 'images/14.jpg', alt: '' },
  { type: 'image', src: 'images/15.jpg', alt: '' },
  { type: 'image', src: 'images/16.jpg', alt: '' },
  { type: 'image', src: 'images/17.jpg', alt: '' },
  { type: 'image', src: 'images/18.jpg', alt: '' },
  { type: 'image', src: 'images/19.jpg', alt: '' },
  { type: 'image', src: 'images/20.jpg', alt: '' },
  { type: 'image', src: 'images/21.jpg', alt: '' },
  { type: 'image', src: 'images/22.jpg', alt: '' },
  { type: 'image', src: 'images/23.jpg', alt: '' },
];

mediaItems.forEach((item, index) => {
  // Create a div for the post masonry
  const postMasonry = document.createElement('div');
  postMasonry.className = 'post-masonry col-12 col-sm-6 col-lg-4';

  // Create a div for the post thumb
  const postThumb = document.createElement('div');
  postThumb.className = 'post-thumb lh-0';

  // Check the media type and create the appropriate element

  const link = document.createElement('a');
  link.href = `#img${index}`; // Lightbox link
  link.className = 'lightbox-trigger';

  const img = document.createElement('img');
  img.src = item.src;
  img.alt = item.alt;
  img.loading = 'lazy';

  link.appendChild(img);
  postThumb.appendChild(link);

  // Append post thumb to post masonry
  postMasonry.appendChild(postThumb);

  // Append post masonry to gallery container
  gallery.appendChild(postMasonry);
});

// Add lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Event delegation for images
gallery.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    const imgSrc = e.target.src;
    const imgAlt = e.target.alt;

    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.style.display = 'flex';

    history.pushState({ lightboxOpen: true }, '');
  }
});

// Close lightbox
lightbox.addEventListener('click', e => {
  if (e.target.className === 'close' || e.target === lightbox) {
    e.preventDefault(); // Prevent any default browser behavior
    e.stopPropagation(); // Prevent event bubbling
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightboxImg.alt = '';
    history.back();
  }
});

// Close lightbox on Escape key press
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    // Check if the Escape key was pressed
    // Hide the lightbox
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightboxImg.alt = '';
    history.back();
  }
});
