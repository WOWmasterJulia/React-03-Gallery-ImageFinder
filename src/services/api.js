import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com`;

export async function getImages(value, currentPage, signal) {
  const response = await axios.get('/api/', {
    signal,
    params: {
      q: value,
      key: '35792942-c738c06de8752e63923c1b94a',
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data;
}
