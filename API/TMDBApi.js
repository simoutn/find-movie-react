// import API_TOKEN from '../Helpers/token'
const API_TOKEN = "600665608d3f7da6eda3b0c99f95660e"
export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }