import { get } from './api.js';


export function checkUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('greeting').textContent = `Welcome, ${userData.email}!`;
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

export function onLogout(ctx) {
    get('/users/logout');
    sessionStorage.removeItem('userData');
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}

export function createSubmitHandler(form, callback) {
    form.addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        callback(Object.fromEntries([...formData.entries()]));
    }
}