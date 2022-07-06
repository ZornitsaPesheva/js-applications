async function getInfo() {
    // console.log("TODO...");

    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
	const timetableElement = document.getElementById('buses');
    
    const url = (`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

    try {
        stopNameElement.textContent = `Loading...`;
        timetableElement.replaceChildren();

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }

        const data = await res.json();
        stopNameElement.textContent= data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timetableElement.appendChild(liElement);
        })
        
    }
    catch {
        stopNameElement.textContent = "Error";
    }
    
}

// async function getInfo() {
//     // console.log("TODO...");

//     const busStopId = document.getElementById('stopId').value;
//     const stopNameDiv = document.getElementById('stopName');
// 	const list = document.getElementById('buses');


//     try {
//         const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)

//         const data = await response.json();
//         console.log(data);
//         stopNameDiv.textContent = data.name;
//         for (let busId in data.buses) {
//             let li = document.createElement('li');
//             li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
//             list.appendChild(li);
//         };
        
//     }
//     catch {
//         stopNameDiv.textContent = "Error";
//     }
    
// }