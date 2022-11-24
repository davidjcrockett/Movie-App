const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.API_BASE_URL;

const moviesEl = document.getElementById("movies")

function App() {

    export async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}


export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    moviesEl.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${config.image_base_url + movie?.poster_path}" class="img-fluid" >
        </div>
        `
    )
}

}

App();