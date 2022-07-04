async function getInfo() {
    // console.log("TODO...");

    const busStopId = document.getElementById('stopId').value;
    const stopNameDiv = document.getElementById('stopName');

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)

        if (response.of == false) {

        }
        const data = await response.json();
        console.log(data);
        stopNameDiv.textContent = data.name;
        
    }
    catch {
        
    }
    
}