import { getPokemons, getPokemonName } from "./modules/api.js";
import { grillaPokemon } from "./modules/components.js";

const d = document;
const grilla = d.querySelector("#pokemon-grill");
const nextBtn = d.querySelector("#next-page");
const limitPokemons = d.querySelector("#limit-pokemons");
var nextPage;

addEventListener("DOMContentLoaded", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    nextPage = await grillaPokemon({ grilla });
})

nextBtn.addEventListener("click", async (e) => {
    const grilla = d.querySelector("#pokemon-grill");
    nextPage = await grillaPokemon({ URI: nextPage, grilla });
})

limitPokemons.addEventListener("input", async (e) => {
    try {
        let limit = Number(e.target.value);
        if (!isNaN(limit)) {
            if (limit > 0) {
                const grilla = d.querySelector("#pokemon-grill");
                nextPage = await grillaPokemon({ grilla, limit });
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