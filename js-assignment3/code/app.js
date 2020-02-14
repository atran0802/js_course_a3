let randomPerson = Math.floor((Math.random() * 88) + 1)
let randomPlanet = Math.floor((Math.random() * 61) + 1)
let randomFilm = Math.floor((Math.random() * 7) + 1)
let randomSpecies = Math.floor((Math.random() * 37) + 1)
let randomVehicle = Math.floor((Math.random() * 39) + 1)
let randomStarship = Math.floor((Math.random() * 37) + 1)

const fetchPeople = () => {
  const people = 'https://swapi.co/api/people/' + randomPerson
  fetch(people)
    .then(response => response.json())
    .then(data =>  
       document.getElementById('name').textContent = data.name
   )
}

function output(data) {  
  name.innerText = data.name  
  height.innerText = `Height: ${data.height}`  
  mass.innerText = `Mass: ${data.mass}`  
  birthYear.innerText = `Birth Year: ${data.birth_year}`  
  gender.innerHTML = `Gender: ${data.gender}`
}

function errorMessage() {  
  content.innerText = "ERROR... You were the Chosen One! It was said you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness!"
}

const fetchPlanets = () => {
  const planets = 'https://swapi.co/api/planets/' + randomPlanet
  fetch(planets)
    .then(response => response.json())
    .then(data =>  
      document.getElementById('name').textContent = data.name
  )
}

const fetchFilms = () => {
  const films = 'https://swapi.co/api/films/' + randomFilm
  fetch(films)
    .then(response => response.json())
    .then(data =>  
      document.getElementById('name').textContent = data.name
  )
}

const fetchSpecies = () => {
  const species = 'https://swapi.co/api/species/' + randomSpecies
  fetch(species)
    .then(response => response.json())
    .then(data =>  
      document.getElementById('name').textContent = data.name
  )
}

const fetchVehicles = () => {
  const vehicles = 'https://swapi.co/api/vehicles/' + randomVehicle
  fetch(vehicles)
    .then(response => response.json())
    .then(data =>  
      document.getElementById('name').textContent = data.name
  )
}

const fetchStarships = () => {
  const starships = 'https://swapi.co/api/starships/' + randomStarship
  fetch(starships)
    .then(response => response.json())
    .then(data =>  
      document.getElementById('name').textContent = data.name
  )
}

 document.getElementById('fetchPeople').addEventListener ('click', fetchPeople)
 document.getElementById('fetchPlanets').addEventListener ('click', fetchPlanets)
 document.getElementById('fetchFilms').addEventListener ('click', fetchFilms)
 document.getElementById('fetchSpecies').addEventListener ('click', fetchSpecies)
 document.getElementById('fetchVehicles').addEventListener ('click', fetchVehicles)
 document.getElementById('fetchStarships').addEventListener ('click', fetchStarships)
