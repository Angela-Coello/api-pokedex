const pokeContainer = document.getElementById('poke-container');
const pokeImg = document.querySelector('.img-container img');
const pokeNumber = document.querySelector('.info .number');
const pokeName = document.querySelector('.info .name');//

function mifuncion(){
  const randomPokemonId = Math.floor(Math.random() * 30) + 1;


  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
    .then(response => response.json())
    .then(data => {
     console.log(data);
      pokeImg.src = data.sprites.front_default;
      pokeImg.alt = data.name;
      pokeNumber.textContent = data.id.toString().padStart(3, '0');
      pokeName.textContent = data.name;
    })
    .catch(error => {
      console.error('Error al obtener los datos del Pokémon:', error);
    });


}

mifuncion();

pokeContainer.addEventListener("click", ()=>mifuncion());







