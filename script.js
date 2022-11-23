const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.API_BASE_URL;

const mainEl = document.getElementById("#main");
const formEl = document.getElementById("#form");
const searchEl = document.getElementById("#search");

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