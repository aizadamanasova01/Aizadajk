let url = "https://api.sampleapis.com"; // baseURL
let btns = document.querySelectorAll("button")
//endpoint

let api = {
	animation: "/movies/animation",
};
//async await
let div = document.querySelector("#root")
let h1 = document.querySelector("#info")
async function getMovies(byGenre = "animation") {
	try{
	const response = await fetch(url + `/movies/${byGenre}`);
	const movieArr = await response.json();
	h1.innerText = movieArr.length + `${byGenre}` 
	renderMovie(movieArr);
	} catch (error) {
		console.log(error);
		div.innerHTML = "Server Error"
	}
} 


getMovies();
// let div = document.querySelector("#root")
function renderMovie(filmArr) {
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
	btn.onclick = () =>{
		console.log(btn.innerText);
		getMovies(btn.innerText);
	};
});


