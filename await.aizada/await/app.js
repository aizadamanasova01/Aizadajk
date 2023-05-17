let url = "https://api.sampleapis.com"; // baseURL
let btns = document.querySelectorAll("button"); //8 button
//endpoint
//async await
let findMovie = [];
let div = document.querySelector("#root");
let h1 = document.querySelector("#info");
async function getMovies(byGenre = "animation") {
	try {
		const response = await fetch(url + `/movies/${byGenre}`);
		const movieArr = await response.json();
		h1.innerText = movieArr.length + ` ${byGenre}`;
		renderMovie(movieArr);
		for (const f of movieArr) {
			if (f.title.includes("Toy")) {
				findMovie.push(f);
				console.log(f, "f");
			}
		}
	} catch (error) {
		div.innerHTML = "Server Error " + error.message;
	}
}

getMovies();
let a = document.querySelector("a");
a.onclick = () => {
	renderMovie(findMovie);
};

function renderMovie(filmArr) {
	div.innerHTML = "";
	for (const film of filmArr) {
		div.innerHTML += `
		<div class="card" style="width: 18rem">
			<img src=${film.posterURL} class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">${film.title}</h5>
			</div>
		</div>`;
	}
}

btns.forEach(btn => {
	btn.onclick = () => {
		getMovies(btn.innerText);
	};
});
