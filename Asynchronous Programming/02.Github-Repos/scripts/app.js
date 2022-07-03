async function loadRepos() {
	//  console.log("TODO...");
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	try {
		const response = await fetch(`https://api.github.com/users/${username}/repos`);
	
		if (response.ok == false) {
			throw new Error(`${response.status} ${response.statusText}`)
		}
		
		const data = await response.json();
	
		list.innerHTML = '';
		for (let repo of data) {
			list.innerHTML += 
			`<li>
			<a href="${repo.html_url}">
				${repo.full_name}
			</a>
		</li>`;
		}
	}
	catch (error) {
		list.innerHTML = `${error.message}`;
	}
}

// function loadRepos() {
// 	// console.log("TODO...");
// 	const username = document.getElementById('username').value;
// 	const list = document.getElementById('repos');

// 	fetch(`https://api.github.com/users/${username}/repos`)
// 	.then(handleResponse)
// 	.then(displayRepos)
// 	.catch(handleError);

// 	function handleResponse(response) {
// 		if (response.ok == false) {
// 			throw new Error(`${response.status} ${response.statusText}`)
// 		}

// 		return response.json();
// 	}

// 	function displayRepos(data) {
// 		list.innerHTML = '';
// 		for (let repo of data) {
// 			list.innerHTML += 
// 			`<li>
// 			<a href="${repo.html_url}">
// 				${repo.full_name}
// 			</a>
// 		</li>`;
// 		}
// 	}

// 	function handleError(error) {
// 		list.innerHTML = `${error.message}`
// 	}
// }