function callback() {
    console.log('inside callback');
}

function executor(resolve, reject) {
    console.log('before');

    setTimeout(resolve, 2000);

    console.log('after')
}

function start(){
    const myPromise = new Promise(executor);
    // executor(onResolve, onReject);

    function onResolve() {
        console.log('operation successfull')
    }

    function onReject() {
        console.log('error encountered')
    }
}

start();