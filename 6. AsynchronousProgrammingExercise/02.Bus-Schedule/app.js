
function solve() {
    let stop = {
        next: 'depot'
    }
    const infoElement = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');


    function depart() {
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                stop = JSON.parse(JSON.stringify(data));
                infoElement.textContent = `Next stop ${stop.name}`;
            })
            .catch(error => {
                infoElement.textContent = "Error"
            });
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;

    }


    return {
        depart,
        arrive
    };
}

let result = solve();


// function solve() {
//     const getRef = type => document.querySelector(type);
//     const [infoRef, departRef, arriveRef] = [getRef('.info'), getRef('#depart'), getRef('#arrive')];
//     const [url, infoDiv] = ['http://localhost:3030/jsonstore/bus/schedule/', getRef('#info')];
//     let data = { next: 'depot' };
 
//     async function depart() {
//         try {
//             data = await (await fetch(url + data.next)).json();
//             infoRef.textContent = `Next stop ${data.name}`;
//             changeStatus(departRef, arriveRef);
//         } catch (error) {
//             changeStatus(departRef, arriveRef, true);
//             infoRef.textContent = 'Error';
//             infoDiv.style.backgroundColor = '#9C3107';
//         }
//     }
 
//     function arrive() {
//         infoRef.textContent = `Arriving at ${data.name}`;
//         changeStatus(departRef, arriveRef);
//     }
 
//     return { depart, arrive };
// }
 
// let result = solve();
 
// function changeStatus(x, y, both) {
//     x.disabled = both || !x.disabled;
//     y.disabled = both || !y.disabled;
// }




    // async function depart() {
    //     // console.log('Depart TODO...');
    //     // infoDiv.textContent = `Next stop ${currentStop}`;
    //     // try {
            
    //         departBtn.disabled = true;
    //         const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`);
    //         // if (response.status != 200) {
    //         //     throw new Error('Invalid data');
    //         // }
    //         stop = await response.json();

    //         infoDiv.textContent = `Next stop ${stop.name}`;
    //         arriveBtn.disabled = false;
    //     // }
    //     // catch {
    //     //     infoDiv.textContent = `Error`;
    //     //     departBtn.disabled = true;
    //     //     arriveBtn.disabled = true;
    //     // }
    // }

    // function arrive() {
    //     // console.log('Arrive TODO...');

    //     infoDiv.textContent = `Arriving at ${stop.name}`;
    //     departBtn.disabled = false;
    //     arriveBtn.disabled = true;
    // }
