const fetchPeople = () => {
  const people = 'https://swapi.co/api/people/'
  fetch(people)
    .then(response => response.json())
    .then(json => console.log(json))
  }

const fetchPlanets = () => {
  const planets = 'https://swapi.co/api/planets/'
  fetch(planets)
    .then(response => response.json())
    .then(json => console.log(json))
  }

const fetchFilms = () => {
  const films = 'https://swapi.co/api/films/'
  fetch(films)
    .then(response => response.json())
    .then(json => console.log(json))
  }

const fetchSpecies = () => {
  const species = 'https://swapi.co/api/species/'
  fetch(species)
    .then(response => response.json())
    .then(json => console.log(json))
  }

const fetchVehicles = () => {
  const vehicles = 'https://swapi.co/api/vehicles/'
  fetch(vehicles)
    .then(response => response.json())
    .then(json => console.log(json))
  }

const fetchStarships = () => {
  const starships = 'https://swapi.co/api/starships/'
  fetch(starships)
    .then(response => response.json())
    .then(json => console.log(json))
  }

 document.getElementById('fetchPeople').addEventListener ('click', fetchPeople)
 document.getElementById('fetchPlanets').addEventListener ('click', fetchPlanets)
 document.getElementById('fetchFilms').addEventListener ('click', fetchFilms)
 document.getElementById('fetchSpecies').addEventListener ('click', fetchSpecies)
 document.getElementById('fetchVehicles').addEventListener ('click', fetchVehicles)
 document.getElementById('fetchStarships').addEventListener ('click', fetchStarships)
