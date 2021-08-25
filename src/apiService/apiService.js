const API_KEY = "21806148-ef05846c07274d590c18cb52e";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

function getPictures(query, pageNumber) {
  const url = `${BASE_URL}?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error("No matches found. Please check your request.")
    );
  });
}

export default getPictures;
