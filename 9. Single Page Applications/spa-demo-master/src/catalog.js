const section = document.getElementById('catalogView');
const list = section.querySelector('ul');
section.remove();

export async function showCatalog() {
    document.querySelector('main').replaceChildren(section);

    list.replaceChildren('Loading...');

    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    const fragment = document.createDocumentFragment();

    movies.map(createMovieItem).forEach(c => fragment.appendChild(c));

    list.replaceChildren(fragment);
}

function createMovieItem(movie) {
    const li = document.createElement('li');
    li.textContent = movie.title;

    return li;
}