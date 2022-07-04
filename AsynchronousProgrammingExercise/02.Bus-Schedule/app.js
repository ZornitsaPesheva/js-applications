function solve() {
    let currentStop = 'depot';
    const infoDiv = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    async function depart() {
        // console.log('Depart TODO...');
        // infoDiv.textContent = `Next stop ${currentStop}`;
        try {
            
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop}`);
            
            data = await response.json();
            infoDiv.textContent = `Next stop ${data.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        }
        catch {

        }
    }

    async function arrive() {
        // console.log('Arrive TODO...');

        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStop}`);
        data = await response.json();

        departBtn.disabled = false;
        arriveBtn.disabled = true;
        currentStop = data.next;            

        infoDiv.textContent = `Arriving at ${data.name}`;


    }


    return {
        depart,
        arrive
    };
}

let result = solve();
