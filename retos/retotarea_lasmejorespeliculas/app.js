
const container = document.querySelector(".container");
const urlMovies = "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

const getMovies = async function () {
  const respuesta = await fetch(urlMovies);
  const data = await respuesta.json();

  readMovies(data.entries);
  
};
getMovies();

function readMovies(Movies) {
  container.innerHTML = "";
  Movies.forEach((movie, index) => {
    container.innerHTML += `<div class="card">
        <img src=${movie.images.posterArt.url}alt="" />
        <div class="card-information">
        <h4>${movie.title}</h4>
        <p>
          ${movie.description}
        </p>
      </div>
      </div>
    `;
  });
}
