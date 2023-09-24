import config from "./config.js";

const d = document;

export const getPokemons = async ({ URI = undefined, limit = undefined }) => {
    try {
        const uri = URI ? URI : limit ? `${config.URI}pokemon/?limit=${limit}` : `${config.URI}pokemon/`;
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error(`No se pudo obtener la lista de Pokémon (${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener Pokémon:', error);
        throw error;
    }
};

export const getPokemonName = async (name) => {
    try {
        name = name.toLowerCase();
        const uri = `${config.URI}pokemon/${name}`;
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error(`No se pudo obtener Pokémon ${name}: (Error: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
