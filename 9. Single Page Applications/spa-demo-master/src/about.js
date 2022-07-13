const section = document.getElementById('aboutView');
section.remove();

export function showAbout() {
    document.querySelector('main').replaceChildren(section);
}