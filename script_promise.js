const demo_promise = document.getElementById('demo_promises');

// Common XHR function
function promise_xhr(method, url, data) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url, true);
		
		if(data) {
			xhr.send(data);
		} else {
			xhr.send();
		}
		
		xhr.onload = () => {
			if(xhr.status >= 200 && xhr.status < 300) resolve(xhr);
			reject({status: xhr.status, message: xhr.statusText})
		}
	})
	return promise;
}

// GET Request
function get_request_promise() {	
	promise_xhr("GET", "https://reqres.in/api/users")
	.then(value => {
		demo_promise.innerHTML =`<strong>status: ${value.status} <br> response: <br></strong>` +  value.response;
	})
	.catch(error => {
		demo_promise.style.color = "red";
		demo_promise.innerHTML = "error!! check console..";
		console.log(error);
	});
}

// POST Request
function post_request_promise() {
	let data = {
		name: "morpheus",
		job: "leader"
	};

	promise_xhr("POST", "https://reqres.in/api/users", JSON.stringify(data))
	.then(value => {
		demo_promise.innerHTML =`<strong>status: ${value.status} <br> response: <br></strong>` +  value.response;
	})
	.catch(error => {
		demo_promise.style.color = "red";
		demo_promise.innerHTML = "error!! check console..";
		console.log(error);
	});
}

// PATCH Request
function patch_request_promise() {
	let data = {
		name: "morpheus",
		job: "zio resident"
	};
	promise_xhr("PATCH", "https://reqres.in/api/users/2", JSON.stringify(data))
	.then(value => {
		demo_promise.innerHTML =`<strong>status: ${value.status} <br> response: <br></strong>` +  value.response;
	})
	.catch(error => {
		demo_promise.style.color = "red";
		demo_promise.innerHTML = "error!! check console..";
		console.log(error);
	});
}

// DELETE Request
function delete_request_promise() {
	promise_xhr("DELETE", "https://reqres.in/api/users/2")
	.then(value => {
		demo_promise.innerHTML =`<strong>status: ${value.status} <br> response: <br></strong>` +  value.response;
	})
	.catch(error => {
		demo_promise.style.color = "red";
		demo_promise.innerHTML = "error!! check console..";
		console.log(error);
	});
}