export const BASE_URL = "https://pixabay.com/api/";
export const API_KEY = "46020556-902bd777cf965228c32d535d7";


export function getGallery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const fullUrl = `${BASE_URL}?${searchParams.toString()}`;

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data; 
    })
    .catch(error => {
      console.error(`There was an error with the fetch operation:`, error);
      throw error; 
    });
}