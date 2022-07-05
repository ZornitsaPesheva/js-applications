function solve() {
    let stop = {
        next: 'depot'
    }
    const infoElement = document.getElementById('info');
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

    return {
        depart,
        arrive
    };
}

let result = solve();
