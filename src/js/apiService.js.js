const apiKey = '20057686-8e7631fb38d8b126eb420f670';
let page = 1;

function fetchGallery(inputText) {
  page = 1;
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputText}&page=${page}&per_page=12&key=${apiKey}`;
  return fetch(baseUrl).then(res => res.json());
}

function loadMoreInfo(inputText) {
  page += 1;
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputText}&page=${page}&per_page=12&key=${apiKey}`;
  return fetch(baseUrl).then(res => res.json());
}

export { fetchGallery, loadMoreInfo };
