const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            const error = await res.json();
            throw Error(error.message);
        }

        if (res.status == 204) {
            return res;
        } else {
            return await res.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function get(url) {
    return request('get', url);
}

export async function post(url, data) {
    return request('post', url, data);
}