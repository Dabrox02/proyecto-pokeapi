const d = document;
import { getPokemons, getPokemonName } from "./api.js";

export const cardPokemon = (data) => {
    const { sprites: { front_default }, name } = data;
    const cardDiv = document.createElement('div');
    cardDiv.className = "d-inline-block p-2";
    cardDiv.innerHTML = /*html*/`<img src="${front_default}" class="bg-white w-100 rounded" alt="${name}" loading="lazy">`
    return cardDiv;
}

export const grillaPokemon = async ({ URI = undefined, limit = 20, grilla }) => {
    let { previous: prevPage, next: nextPage, results: pokemons } = await getPokemons({ URI, limit });
    let grillaTmp = grilla.cloneNode()
    pokemons.forEach(async (e) => {
        let { name: pokemon } = e;
        let data = await getPokemonName(pokemon);
        let card = cardPokemon(data);
        grillaTmp.insertAdjacentElement("beforeend", card);
    });
    grilla.replaceWith(grillaTmp);
    return {prevPage, nextPage};
}