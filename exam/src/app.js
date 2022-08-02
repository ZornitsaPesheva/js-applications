import { html, render } from "../node_modules/lit-html/lit-html.js"
import { getUserData } from "./util.js"
import { page } from "../node_modules/page/page.mjs"
import { logout } from "./api/api";

let root = document.getElementById('site-content');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;
}

export function updateUserNav() {
    let userData = getUserData()
    if(userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
    }
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout()
    updateUserNav()
    page.redirect('/')
})

page(decorateContext)
updateUserNav()
page.start()