const lista = document.querySelector(".lista");
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
};

  const getgeneros = async function(){
  const respuesta = await fetch ("https://movies-app1.p.rapidapi.com/api/genres", options);
  const data = await respuesta.json();
  const generos = data.results;
readMovies(generos);
 
  }

getgeneros();

  function readMovies(movies) {
    lista.innerHTML = "";
    movies.forEach((movie , index) => {
      lista.innerHTML += `<li>${movie.name}</li>`
    });
  }