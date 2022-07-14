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

        const postId = target.id;
        showPost(postId);
    }
}

function showPost(postId) {
    document.getElementById('main').replaceChildren('Loading...');

    const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + postId);
    // const post = await res.json();
    // console.log(post)

    document.getElementById('main').replaceChildren(section);
}