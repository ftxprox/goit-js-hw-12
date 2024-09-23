export const BASE_URL = "https://pixabay.com/api/";
export const API_KEY = "46020556-902bd777cf965228c32d535d7";

export async function getGallery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const fullUrl = `${BASE_URL}?${searchParams.toString()}`;

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`There was an error with the fetch operation:`, error);
    throw error;
  }
}