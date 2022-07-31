let hostname = "http://localhost:3030";

async function request(url, options) {
    try {
        let response = await fetch(hostname, + url, options);
        if(response.ok == false) {
            let error = await response.json();
            throw new Error(error.message)
        }  
        if (response.status == 200) {
            return response
        } else {
            return response.json()
        }
    } catch (err) {
        alert(err.message)
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] ='appLocation/json';
        options.body = JSON.stringify(data);
    }

    let userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.tokenм
    }

    return options;
}