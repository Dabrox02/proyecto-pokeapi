const d = document;

export const cardPokemon = (data) => {
    const { sprites: { front_default } } = data;
    const cardDiv = document.createElement('div');
    cardDiv.className = "w-25 d-inline-block p-2";
    cardDiv.innerHTML = /*html*/`<img src="${front_default}" class="bg-white w-100 rounded">`
    return cardDiv;
}