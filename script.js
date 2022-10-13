const demo = document.querySelector("#demo");

// Common XHR function
function xhr(method, url, data) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	if(data) {
		xhr.send(data);	
	} else {
		xhr.send();
	}
	
	xhr.onload = () => {
		if(xhr.status >= 200 && xhr.status < 300) {
			demo.innerHTML =`<strong>status: ${xhr.status} <br> response: <br></strong>` +  xhr.response;
		} else {
			demo.style.color = "red";
			demo.innerHTML = "Error! check conole..";
		}
	}
}



// GET Request
function get_request() {
	xhr("GET", "https://reqres.in/api/users");
}


// POST Request
function post_request() {
	let data = {
		name: "morpheus",
		job: "leader"
	};
	xhr("POST", "https://reqres.in/api/users", JSON.stringify(data));
}

// PATCH Request
function patch_request() {
	let data = {
		name: "morpheus",
		job: "zio resident"
	};
	xhr("PATCH", "https://reqres.in/api/users/2", JSON.stringify(data));
}

// DELETE Request
function delete_request() {
	xhr("DELETE", "https://reqres.in/api/users/2");
}