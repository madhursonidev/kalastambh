//post-masonry
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryLoader = document.getElementById('gallery-loader');

if (!gallery || !lightbox || !lightboxImg || !galleryLoader) {
  throw new Error(
    'Gallery, lightbox, and loader elements are required to render the photo gallery.'
  );
}

const mediaItems = [
  {
    type: 'image',
    src: 'images/103.jpg',
    alt: 'Madhya Pradesh Art Festival 2026',
  },
  {
    type: 'image',
    src: 'images/102.jpeg',
    alt: 'Madhya Pradesh Art Festival 2026',
  },
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

let galleryItems = mediaItems.map((item, index) => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  const link = document.createElement('a');
  link.href = item.src;
  link.className = 'lightbox-trigger';
  link.setAttribute('aria-label', `Open image ${index + 1} in preview`);

  const img = document.createElement('img');
  img.src = item.src;
  img.alt = item.alt;
  img.loading = 'lazy';

  link.appendChild(img);
  galleryItem.appendChild(link);

  return galleryItem;
});

const targetRowHeight = 400;
const itemBorderWidth = 2;
const galleryGap = 24;

function getRowHeight(items, availableWidth) {
  const aspectRatioTotal = items.reduce((total, item) => {
    const img = item.querySelector('img');
    return total + img.naturalWidth / img.naturalHeight;
  }, 0);

  return (
    (availableWidth -
      galleryGap * (items.length - 1) -
      itemBorderWidth * items.length) /
    aspectRatioTotal
  );
}

function layoutGallery() {
  const availableWidth = gallery.clientWidth;
  if (!availableWidth) return;

  const rows = [];
  let row = [];

  galleryItems.forEach(item => {
    row.push(item);

    if (
      row.length > 1 &&
      getRowHeight(row, availableWidth) <= targetRowHeight
    ) {
      const previousRow = row.slice(0, -1);
      if (
        Math.abs(targetRowHeight - getRowHeight(previousRow, availableWidth)) <
        Math.abs(getRowHeight(row, availableWidth) - targetRowHeight)
      ) {
        rows.push(previousRow);
        row = [item];
      } else {
        rows.push(row);
        row = [];
      }
    }
  });

  if (row.length) rows.push(row);

  const galleryLayout = document.createDocumentFragment();
  rows.forEach((items, rowIndex) => {
    const galleryRow = document.createElement('div');
    galleryRow.className = 'gallery-row';

    const rowHeight =
      rowIndex === rows.length - 1
        ? Math.min(targetRowHeight, getRowHeight(items, availableWidth))
        : getRowHeight(items, availableWidth);

    items.forEach(item => {
      const img = item.querySelector('img');
      // Fall back to a default aspect ratio for images that haven't loaded yet
      // (lazy-loaded offscreen images). Corrected via the 'load' listener above.
      const aspectRatio =
        img.naturalWidth && img.naturalHeight
          ? img.naturalWidth / img.naturalHeight
          : 4 / 5;
      item.style.width = `${aspectRatio * rowHeight + itemBorderWidth}px`;
      item.style.height = `${rowHeight + itemBorderWidth}px`;
      galleryRow.appendChild(item);
    });

    galleryLayout.appendChild(galleryRow);
  });
  gallery.replaceChildren(galleryLayout);
}

// Deferred layout so the loader never gets stuck on offscreen lazy images.
setTimeout(() => {
  layoutGallery();
  window.addEventListener('resize', layoutGallery);
  galleryLoader.classList.add('is-hidden');
  galleryLoader.setAttribute('aria-hidden', 'true');
}, 100);

// Re-layout the justified grid whenever an image finishes loading
// (covers lazy-loaded images that come into view on scroll).
galleryItems.forEach(item => {
  const img = item.querySelector('img');
  img.addEventListener('load', () => layoutGallery());
  img.addEventListener('error', () => layoutGallery());
});

gallery.addEventListener('click', e => {
  if (e.target instanceof HTMLImageElement) {
    e.preventDefault();
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
  }
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox || e.target.classList.contains('close')) {
    e.preventDefault();
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxImg.alt = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxImg.alt = '';
  }
});
