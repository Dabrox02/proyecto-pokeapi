import { getPokemons, getPokemonName, getCategories, getPokemonsType } from "./api.js";
const d = document;

const cardPokemon = (data) => {
    const imgTmp = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/96px-Pok%C3%A9_Ball_icon.svg.png";
    const { sprites: { front_default }, name } = data;
    return /*html*/`
    <div class="card card-pokemon p-2">
        <img src="${front_default ? front_default : imgTmp}" class="bg-white rounded bg-primary-hover" alt="${name}" loading="lazy">
        <div class="badge text-bg-dark text-capitalize">${name}</div>
    </div>
    `
}

export const grillaPokemon = async ({ URI = undefined, limit = 20, grilla }) => {
    let { previous: prevPage, next: nextPage, results: pokemons } = await getPokemons({ URI, limit });
    let grillaTmp = grilla.cloneNode();
    pokemons.forEach(async (e) => {
        let { name: pokemon } = e;
        let data = await getPokemonName(pokemon);
        let card = cardPokemon(data);
        grillaTmp.insertAdjacentHTML("beforeend", card);
    });
    grilla.replaceWith(grillaTmp);
    return { prevPage, nextPage };
}

export const grillaPokemonCateg = async ({ URI, grilla }) => {
    let { pokemon: pokemons } = await getPokemonsType(URI);
    let grillaTmp = grilla.cloneNode()
    pokemons.forEach(async (e) => {
        let { pokemon: { name } } = e;
        let data = await getPokemonName(name);
        let card = cardPokemon(data);
        grillaTmp.insertAdjacentHTML("beforeend", card);
    });
    grilla.replaceWith(grillaTmp);
}

export const statsPokemon = async (namePokemon) => {
    const imgTmp = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/227px-Pok%C3%A9_Ball_icon.svg.png";
    let data = await getPokemonName(namePokemon);
    let { stats, name, sprites: { front_default } } = data;
    Swal.fire({
        title: `${name.charAt(0).toUpperCase() + name.slice(1)}`,
        html: /*html*/`
        <div class="d-flex flex-column text-center">
            <img class="mx-auto" width="50%" src=${front_default || imgTmp} >
        </div>
        ${stats.map(e => /*html*/`
            <div class="d-flex flex-column">
                <input class="w-75 mx-auto" type="range" value="${e.base_stat}" data-stat="${e.stat.name}">
                <label class="w-75 mx-auto badge bg-secondary text-capitalize" data-stat="${e.stat.name}">
                    ${e.base_stat} ${e.stat.name}
                </label><br>
            </div>`
        ).join("")}
        <button id="enviar-pokemon" class="btn btn-warning">Ajustar</button> 
        `,
    });
}

export const categPokemon = async (grilla) => {
    let data = await getCategories();
    let { results: pokemons } = data;
    let grillaTmp = grilla.cloneNode();
    grillaTmp.insertAdjacentHTML("beforeend", /*html*/`
        <div class="p-1">
            <input id="pokemon-todos" type="radio" value="todos" name="type" checked>
            <label for="pokemon-todos" class="text-capitalize">Todos</label>
        </div>
    `);
    pokemons.forEach(async (e) => {
        let { name } = e;
        grillaTmp.insertAdjacentHTML("beforeend", /*html*/`
        <div class="p-1">
            <input id="pokemon-${name}" type="radio" value="${name}" name="type">
            <label for="pokemon-${name}" class="text-capitalize">${name}</label>
        </div>
        `);
    });
    grilla.replaceWith(grillaTmp);
}
