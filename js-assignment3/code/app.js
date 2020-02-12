const fetchStarWars = () => {
  const url = 'https://swapi.co/api/people/2'
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('name').innerHTML = data.name
      document.getElementById('height').innerHTML = data.height
      document.getElementById('mass').innerHTML = data.mass
      document.getElementById('hair_color').innerHTML = data.hair_color
    })
    
}

fetchStarWars()


document.getElementById('luke').addEventListener ('click', luke)
document.getElementById('c3po').addEventListener ('click', c3po)
document.getElementById('r2').addEventListener ('click', r2)