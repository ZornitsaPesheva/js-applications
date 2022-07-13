import { showHome } from './home.js';

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

export function onLogout() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': userData.accessToken
        }
    });
    sessionStorage.removeItem('userData');
    checkUserNav();
    showHome();
}