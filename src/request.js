const API_KEY = "b073e47fa0a6a5569754ca5f0c2d4a9c";

export const requests = {
    feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
    feactAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
    feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
