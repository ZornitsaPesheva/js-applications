const section = document.getElementById("homeView");
section.remove();

export function showHome(ev) {
    ev.preventDefault();
    document.getElementById('main').replaceChildren(section);
}