/* Random number generator */

let randomPerson = Math.floor((Math.random() * 88) + 1)
let randomPlanet = Math.floor((Math.random() * 61) + 1)
let randomFilm = Math.floor((Math.random() * 7) + 1)
let randomSpecies = Math.floor((Math.random() * 37) + 1)
let randomVehicle = Math.floor((Math.random() * 39) + 1)
let randomStarship = Math.floor((Math.random() * 37) + 1)

/* Event handling */

function addLoading() {
  const el = document.createElement('p')
  el.id = 'loading'
  el.textContent = 'Loading...'
  document.body.appendChild(el)
}

function removeLoading() {
  const el = document.querySelector('#loading')
  el.remove()
}

function errorMessage() {  
  name.innerText = "ERROR... You were the Chosen One! It was said you would destroy the Sith, not join them! Bring balance to the force, not leave it in darkness! - Obi-Wan Kenobi"
}

/* Generate people */

const fetchPeople = () => {
  const people = 'https://swapi.co/api/people/' + randomPerson
  addLoading()
  fetch(people)
    .then(response => response.json())
    .then(data => {
      removeLoading() 
      document.getElementById('name').textContent = data.name
      outputPeople(data)
  })
    .catch(err => { 
      errorMessage()
  })    
}

function outputPeople(data) {  
  name.innerText = data.name  
  height.innerText = `Height: ${data.height}`  
  mass.innerText = `Mass: ${data.mass}`  
  birthYear.innerText = `Birth Year: ${data.birth_year}`  
  gender.innerText = `Gender: ${data.gender}`
}

/* Generate planets */

const fetchPlanets = () => {
  const planets = 'https://swapi.co/api/planets/' + randomPlanet
  addLoading()
  fetch(planets)
    .then(response => response.json())
    .then(data => {
      removeLoading()  
      document.getElementById('name1').textContent = data.name
      outputPlanets(data)
  })
    .catch(err => { 
      errorMessage()
  }) 
}

function outputPlanets(data) {  
  name.innerText = data.name  
  rotationPeriod.innerText = `Rotation Period: ${data.rotation_period}`  
  orbitalPeriod.innerText = `Orbital Period: ${data.orbital_period}`  
  diameter.innerText = `Diameter: ${data.diameter}`  
  climate.innerText = `Climate: ${data.climate}`
}

/* Generate films */

const fetchFilms = () => {
  const films = 'https://swapi.co/api/films/' + randomFilm
  addLoading()
  fetch(films)
    .then(response => response.json())
    .then(data => {
      removeLoading()  
      document.getElementById('name2').textContent = data.title
      outputFilms(data)
  })
    .catch(err => { 
      errorMessage()
  }) 
}

function outputFilms(data) {  
  name.innerText = data.name  
  episodeId.innerText = `Episode: ${data.episode_id}`  
  director.innerText = `Director: ${data.director}`  
  producer.innerText = `Producer: ${data.producer}`  
  releaseDate.innerText = `Release Date: ${data.release_date}`
}

/* Generate species */

const fetchSpecies = () => {
  const species = 'https://swapi.co/api/species/' + randomSpecies
  addLoading()
  fetch(species)
    .then(response => response.json())
    .then(data => {
      removeLoading()  
      document.getElementById('name3').textContent = data.name
      outputSpecies(data)
  })
    .catch(err => { 
      errorMessage()
  }) 
}

function outputSpecies(data) {  
  name.innerText = data.name  
  classification.innerText = `Classification: ${data.classification}`  
  designation.innerText = `Designation: ${data.designation}`  
  averageLifespan.innerText = `Average Lifespan: ${data.average_lifespan}`  
  language.innerText = `Language: ${data.language}`
}

/* Generate vehicles */

const fetchVehicles = () => {
  const vehicles = 'https://swapi.co/api/vehicles/' + randomVehicle
  addLoading()
  fetch(vehicles)
    .then(response => response.json())
    .then(data => {
      removeLoading()  
      document.getElementById('name4').textContent = data.name
      outputVehicles(data)
  })
    .catch(err => { 
      errorMessage()
  }) 
}

function outputVehicles(data) {  
  name.innerText = data.name  
  model.innerText = `Model: ${data.model}`  
  costInCredits.innerText = `Cost in Credits: ${data.cost_in_credits}`  
  cargoCapacity.innerText = `Cargo Capacity: ${data.cargo_capacity}`  
  vehicleClass.innerText = `Vehicle Class: ${data.vehicle_class}`
}

/* Generate starships */

const fetchStarships = () => {
  const starships = 'https://swapi.co/api/starships/' + randomStarship
  addLoading()
  fetch(starships)
    .then(response => response.json())
    .then(data => {
      removeLoading()   
      document.getElementById('name5').textContent = data.name
      outputStarships(data)
  })
    .catch(err => { 
      errorMessage()
  })  
}

function outputStarships(data) {  
  name.innerText = data.name  
  model1.innerText = `Model: ${data.model}`  
  costInCredits1.innerText = `Cost in Credits: ${data.cost_in_credits}`  
  length1.innerText = `Length: ${data.length}`  
  hyperdriveRating.innerText = `Hyperdrive Rating: ${data.hyperdrive_rating}`
}

/* Buttons */

 document.getElementById('fetchPeople').addEventListener ('click', fetchPeople)
 document.getElementById('fetchPlanets').addEventListener ('click', fetchPlanets)
 document.getElementById('fetchFilms').addEventListener ('click', fetchFilms)
 document.getElementById('fetchSpecies').addEventListener ('click', fetchSpecies)
 document.getElementById('fetchVehicles').addEventListener ('click', fetchVehicles)
 document.getElementById('fetchStarships').addEventListener ('click', fetchStarships)
