var url = 'https://api.icndb.com/jokes/random';
var paragraph = document.getElementById('joke');
var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
	getJoke();
});

function getJoke() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function () {
		let response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}
