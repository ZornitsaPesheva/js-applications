const section = document.getElementById('detailsView');
section.remove();

export function showDetails(postId) {
    document.getElementById('main').replaceChildren(section);
    console.log(postId);
}