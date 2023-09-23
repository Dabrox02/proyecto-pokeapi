import { getPokemons, getPokemonName } from "./modules/api.js";
import { cardPokemon } from "./modules/components.js";

const d = document;
let data = await getPokemonName("charmander");
let { sprites: {front_default} } = data;
console.log(data);
console.log(front_default);

let card = cardPokemon(data);
let grilla = d.querySelector("#pokemon-grill")
grilla.insertAdjacentElement("beforeend", card);
card = cardPokemon(data);
grilla.insertAdjacentElement("beforeend", card);
card = cardPokemon(data);
grilla.insertAdjacentElement("beforeend", card);
card = cardPokemon(data);
grilla.insertAdjacentElement("beforeend", card);




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