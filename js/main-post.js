//post-masonry
const mediaItems = [
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
  { type: 'video', src: 'images/102.mp4' },
  {
    type: 'image',
    src: 'images/44.jpeg',
    alt: 'Madhya Pradesh Art Festival',
  },
  { type: 'image', src: 'images/30.jpg', alt: '' },
  { type: 'video', src: 'images/101.mp4' },
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

// Get the gallery container
const gallery = document.getElementById('gallery');

// Generate gallery dynamically
mediaItems.forEach(item => {
  // Create a div for the post masonry
  const postMasonry = document.createElement('div');
  postMasonry.className = 'post-masonry col-12 col-sm-6 col-lg-4';

  // Create a div for the post thumb
  const postThumb = document.createElement('div');
  postThumb.className = 'post-thumb lh-0';

  // Check the media type and create the appropriate element
  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    postThumb.appendChild(img);
  } else if (item.type === 'video') {
    const video = document.createElement('video');
    video.width = '100%';
    video.height = 'auto';
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.controls = true;

    const source = document.createElement('source');
    source.src = item.src;
    source.type = 'video/mp4';

    video.appendChild(source);
    video.textContent = 'Your browser does not support the video tag.';
    postThumb.appendChild(video);
  }

  // Append post thumb to post masonry
  postMasonry.appendChild(postThumb);

  // Append post masonry to gallery container
  gallery.appendChild(postMasonry);
});
