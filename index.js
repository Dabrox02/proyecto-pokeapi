import { getPokemons, getPokemonName } from "./modules/api.js";
import { grillaPokemon } from "./modules/components.js";

const d = document;
const grilla = d.querySelector("#pokemon-grill");
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

nextBtn.addEventListener("click", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    let pages = await grillaPokemon({ URI: nextPage, grilla });
    if(nextPage == null){
        limitPokemons.value = "";
    }
    prevPage = pages.prevPage;
    nextPage = pages.nextPage;
})

prevBtn.addEventListener("click", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    if (prevPage) {
        let pages = await grillaPokemon({ URI: prevPage, grilla });
        prevPage = pages.prevPage;
        nextPage = pages.nextPage;
    }
})

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



// btnBuscar.addEventListener("click", async () => {
//   let res = await (
//     await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//   ).json();
//   let img = res.sprites.front_default;
//   let defaultImg =
//     "https://i.pinimg.com/originals/27/ae/5f/27ae5f34f585523fc884c2d479731e16.gif";

//   Swal.fire({
//     title: `${res.name}`,
//     text: "Modal with a custom image.",
//     imageUrl: `${img ? img : defaultImg}`,
//     html: `
//         ${res.stats.map(data => `<input type="range" value="${data.base_stat}"><label><b>${data.base_stat}</b> ${data.stat.name} </label><br>`
//           ).join("")}
//         `,
//     imageWidth: "80%",
//     imageHeight: "80%",
//   });
// });