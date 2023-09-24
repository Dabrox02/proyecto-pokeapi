import { getPokemons, getPokemonName } from "./modules/api.js";
import { grillaPokemon, statsPokemon } from "./modules/components.js";

const d = document;
const prevBtn = d.querySelector("#prev-page");
const nextBtn = d.querySelector("#next-page");
const limitPokemons = d.querySelector("#limit-pokemons");
var prevPage, nextPage;

addEventListener("DOMContentLoaded", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    let pages = await grillaPokemon({ grilla });
    prevPage = pages.prevPage;
    nextPage = pages.nextPage;
})

d.addEventListener("click", async (e) => {
    if (e.target.matches(".card-pokemon img")) {
        let pokemon = e.target.getAttribute("alt");
        console.log(pokemon);
        await statsPokemon(pokemon )
    }

    if (e.target.matches("#prev-page")) {
        const grilla = d.querySelector("#pokemon-grill");
        if (prevPage) {
            let pages = await grillaPokemon({ URI: prevPage, grilla });
            prevPage = pages.prevPage;
            nextPage = pages.nextPage;
        }
    }

    if (e.target.matches("#next-page")) {
        const grilla = d.querySelector("#pokemon-grill");
        let pages = await grillaPokemon({ URI: nextPage, grilla });
        if (nextPage == null) {
            limitPokemons.value = "";
        }
        prevPage = pages.prevPage;
        nextPage = pages.nextPage;
    }
});

limitPokemons.addEventListener("input", async (e) => {
    try {
        let limit = Number(e.target.value);
        if (!isNaN(limit)) {
            if (limit > 0) {
                const grilla = d.querySelector("#pokemon-grill");
                let pages = await grillaPokemon({ grilla, limit });
                prevPage = pages.prevPage;
                nextPage = pages.nextPage;
            }
        }
    } catch (error) {
    }
})