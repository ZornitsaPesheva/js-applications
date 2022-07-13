import { get } from './api.js';

const section = document.getElementById('catalogView');
const list = section.querySelector('ul');
section.remove();

export async function showCatalog(ctx) {
    ctx.render(section);

    list.replaceChildren('Loading...');

    const movies = await get('/data/movies');

    const fragment = document.createDocumentFragment();

    movies.map(createMovieItem).forEach(c => fragment.appendChild(c));

    list.replaceChildren(fragment);
}

function createMovieItem(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;

    return li;
}