// api key not needed for pokemon api

// First require the dotenv config file
// require('dotenv').config()
// console.log(process.env)

// Put secret key in a variable
// const api_key = process.env.SECRET_API_KEY;

// console.log(api_key);

// api key not needed for pokemon api

pokemon = [];

window.onload = function () {

}

//pulls random first character from API and appends it into an li element as well 
//as the picture for the character
const getPokemonA = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/snorlax')

        .then(res => res.json())
        .then(data => {
            pokemon.push(data)
            console.log(pokemon);
        })

        .then(data => {
            pokemonData = data;
            const A = document.getElementById("A");
            const pic = document.createElement("img");
            const li = document.createElement("li");
            
            pic.setAttribute("src", `${pokemon[0].sprites.front_shiny}`);
            const text = document.createTextNode(`Name: ${pokemon[0].species.name}, HP: ${pokemon[0].stats[1].base_stat}, Weight: ${pokemon[0].weight}`)
            
            li.appendChild(pic);
            li.appendChild(text)
            A.append(li)


        })
}
//pulls random second character from API and appends it into an li element as well 
//as the picture for the character
const getPokemonB = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff')
        .then(res => res.json())
        .then(data => {
            pokemon.push(data)
            console.log(pokemon);
        })
        .then(data => {
            pokemonData = data;
            const B = document.getElementById("B");
            const pic = document.createElement("img");
            const li = document.createElement("li");
            
            pic.setAttribute("src", `${pokemon[1].sprites.front_shiny}`);
            const text = document.createTextNode(`Name: ${pokemon[1].species.name}, HP: ${pokemon[1].stats[1].base_stat}, Weight: ${pokemon[1].weight}`)
            
            li.appendChild(pic);
            li.appendChild(text)
            B.append(li)
        })
}


const battle = () => {

    if ((pokemon[0].stats[1].base_stat) > (pokemon[1].stats[1].base_stat)) {
        winner = pokemon[0].species.name
    } else {
        winner = pokemon[1].species.name
    }
    const ul = document.getElementById('battleResults');
    const li = document.createElement('li');
    const text = document.createTextNode(`${winner} wins!`);
    li.appendChild(text);
    ul.append(li);
}

const reset = () => {
    let A = document.getElementById("A");
    let B = document.getElementById("B");
    let results = document.getElementById("battleResults");



    while (A.hasChildNodes()) {
        A.removeChild(A.firstChild)
    }
    while (B.hasChildNodes()) {
        B.removeChild(B.firstChild)
    }
    while (results.hasChildNodes()) {
        results.removeChild(results.firstChild)
    }
    pokemon = [];



}