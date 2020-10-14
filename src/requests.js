const API_KEY = "781614990fec763bcc09484ecfdc6da7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=781614990fec763bcc09484ecfdc6da7`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_keys=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_keys=${API_KEY}&with_genres=99`
}

export default requests;