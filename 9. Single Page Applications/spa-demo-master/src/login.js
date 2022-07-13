import { showHome } from './home.js';
import { checkUserNav } from './util.js';


const section = document.getElementById('loginView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.remove();

export function showLogin() {
    document.querySelector('main').replaceChildren(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (res.ok == false) {
            const error = await res.json();
            throw Error(error.message);
        }

        const data = await res.json();

        const userData = {
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        checkUserNav();
        showHome();

    } catch (err) {
        alert(err.message);
    }
}