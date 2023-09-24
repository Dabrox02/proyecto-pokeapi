import { getPokemons, getPokemonName } from "./api.js";
const d = document;

const cardPokemon = (data) => {
    const { sprites: { front_default }, name } = data;
    const cardDiv = document.createElement('div');
    cardDiv.className = `card-pokemon d-inline-block p-2`;
    cardDiv.innerHTML = /*html*/`<img src="${front_default}" class="bg-white w-100 rounded bg-primary-hover" alt="${name}" loading="lazy">`
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
    return { prevPage, nextPage };
}

export const statsPokemon = async (namePokemon) => {
    let data = await getPokemonName(namePokemon);
    let { stats, name, sprites: { front_default } } = data;
    console.log(data);
    console.log(stats, name, front_default);
    Swal.fire({
        title: `${name}`,
        text: "Modal with a custom image.",
        imageUrl: `${front_default ? front_default : imgTmp}`,
        html: `
        ${stats.map(e => `
            <input type="range" value="${e.base_stat}">
            <label class="badge bg-secondary">
                <b>${e.base_stat}</b> ${e.stat.name}
            </label><br>`
        ).join("")}
        `,
    });
}