const API_KEY = process.env.API_KEY;
const image_base_url = `https://image.tmdb.org/t/p/w1280`

const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const main_grid_title = document.querySelector('.favorites h1');
const main_grid = document.querySelector('.favorites .movies-grid');