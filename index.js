import { getPokemons, getPokemonName, savePokemon } from "./modules/api.js";
import { grillaPokemon, statsPokemon, categPokemon, grillaPokemonCateg } from "./modules/components.js";

const d = document;
const prevBtn = d.querySelector("#prev-page");
const nextBtn = d.querySelector("#next-page");
var prevPage, nextPage;

addEventListener("DOMContentLoaded", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    let pages = await grillaPokemon({ grilla });
    prevPage = pages.prevPage;
    nextPage = pages.nextPage;
    const categorias = d.querySelector("#categorias");
    await categPokemon(categorias);
})

d.addEventListener("click", async (e) => {
    if (e.target.matches(".card-pokemon img")) {
        let pokemon = e.target.getAttribute("alt");
        await statsPokemon(pokemon);
    }

    if (e.target.matches("button#prev-page")) {
        const grilla = d.querySelector("#pokemon-grill");
        if (prevPage) {
            let pages = await grillaPokemon({ URI: prevPage, grilla });
            prevPage = pages.prevPage;
            nextPage = pages.nextPage;
        }
    }

    if (e.target.matches("button#next-page")) {
        const grilla = d.querySelector("#pokemon-grill");
        let pages = await grillaPokemon({ URI: nextPage, grilla });
        if (nextPage == null) {
            $("#limit-pokemons").value = "";
        }
        prevPage = pages.prevPage;
        nextPage = pages.nextPage;
    }

    if (e.target.matches("#enviar-pokemon")) {
        let inputs = d.querySelectorAll("#swal2-html-container input");
        let imgPokemon = d.querySelector(".img-pokemon");
        let keyStats = [...inputs].map((e) => e.dataset.stat);
        let valueStats = [...inputs].map((e) => e.value);
        let newStats = keyStats.reduce((obj, key, index) =>
            ({ ...obj, [key]: valueStats[index] }), {});
        let body = {
            "nombre": imgPokemon.getAttribute("alt"),
            "stats": newStats,
            "sprite-front": imgPokemon.getAttribute("src")
        }
        let res = await savePokemon(body);
        if (res.ok) {
            
        }
    }
});


d.addEventListener("input", async (e) => {
    if (e.target.matches("#limit-pokemons")) {
        let limit = Number(e.target.value);
        if (!isNaN(limit)) {
            if (limit > 0) {
                const grilla = d.querySelector("#pokemon-grill");
                let pages = await grillaPokemon({ grilla, limit });
                prevPage = pages.prevPage;
                nextPage = pages.nextPage;
            } else {
                const grilla = d.querySelector("#pokemon-grill");
                let pages = await grillaPokemon({ grilla, limit: 20 });
                prevPage = pages.prevPage;
                nextPage = pages.nextPage;
            }
        }
    }

    if (e.target.matches("#categorias input")) {
        if (!e.target.matches("#pokemon-todos")) {
            const grilla = d.querySelector("#pokemon-grill");
            grillaPokemonCateg({ URI: `https://pokeapi.co/api/v2/type/${e.target.value}`, grilla });
        } else {
            const grilla = d.querySelector("#pokemon-grill");
            let pages = await grillaPokemon({ grilla });
        }
    }


    if (e.target.matches("#swal2-html-container input")) {
        let nextLabel = e.target.nextElementSibling;
        nextLabel.textContent = `${e.target.value}/200 ${nextLabel.dataset.stat}`
    }
})


