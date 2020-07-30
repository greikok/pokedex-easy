async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}
async function init(){
    const pokemon = await getPokemon(150)
    console.log(window.pokemon)
    updatePokemon(pokemon)
}
init()
function updatePokemon(pokemon){
    window.pokemon.textContent = pokemon.name
    window.image.setAttribute('src', pokemon.sprites.front_default)
}
window.search.addEventListener('keyup', async () =>{
    const pokemon = await getPokemon(window.search.value)
    console.log(window.pokemon)
    updatePokemon(pokemon)
})
