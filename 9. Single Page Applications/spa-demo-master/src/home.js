const section = document.getElementById('homeView');
section.remove();


export function showHome() {
    document.querySelector('main').replaceChildren(section);
}