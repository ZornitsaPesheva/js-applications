const section = document.getElementById('detailsView');
section.remove();

export function showDetails(ev) {
    let target = ev.target;

    if (target.tagName == 'H2') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        console.log('clicked anchor');
        ev.preventDefault();
        showPost();
    }
}

function showPost(postId) {
    document.getElementById('main').replaceChildren(section);
    console.log(postId);
}