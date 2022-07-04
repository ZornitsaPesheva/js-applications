async function getInfo() {
    // console.log("TODO...");

    const busStopId = document.getElementById('stopId').value;
    const stopNameDiv = document.getElementById('stopName');
	const list = document.getElementById('buses');


    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)

        const data = await response.json();
        console.log(data);
        stopNameDiv.textContent = data.name;
        for (let busId in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
            list.appendChild(li);
        };
        
    }
    catch {
        stopNameDiv.textContent = "Error";
    }
    
}