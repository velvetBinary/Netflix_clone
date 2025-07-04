const posterData = {
  trending: ['trending1.jpg', 'trending2.jpg'],
  toprated: ['toprated1.jpg', 'toprated2.jpg'],
  action: ['action1.jpg', 'action2.jpg'],
  romcom: ['romcom1.jpg', 'romcom2.jpg'],
  comedy: ['comedy1.jpg', 'comedy2.jpg'],
  thriller: ['thriller1.jpg', 'thriller2.jpg'],
  documentary: ['doc1.jpg', 'doc2.jpg'],
};

for (const [category, images] of Object.entries(posterData)) {
  const container = document.getElementById(category);
  images.forEach(img => {
    const image = document.createElement('img');
    image.src = `assets/posters/${img}`;
    image.alt = category;
    container.appendChild(image);
  });
}
