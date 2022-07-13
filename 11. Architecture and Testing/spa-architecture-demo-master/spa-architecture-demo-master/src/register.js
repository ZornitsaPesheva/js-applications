import { post } from './api.js';
import { createSubmitHandler } from './util.js';


const section = document.getElementById('registerView');
const form = section.querySelector('form');
createSubmitHandler(form, onSubmit);
section.remove();
let ctx = null;

export function showRegister(inCtx) {
    ctx = inCtx;
    ctx.render(section);
}

async function onSubmit({email, password, repass}) {
    if (email == '' || password == '') {
        return alert('All fields are required!');
    }
    if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    const { accessToken, _id } = await post('/users/register', { email, password });
    const userData = {
        email,
        accessToken,
        id: _id
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));
    ctx.checkUserNav();
    ctx.goTo('homeBtn');
}