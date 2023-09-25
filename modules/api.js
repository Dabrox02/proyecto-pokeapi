import config from "./config.js";

const d = document;

export const getPokemons = async ({ URI = undefined, limit = undefined }) => {
    try {
        const uri = URI ? URI : limit ? `${config.URI_POKEMON}pokemon/?limit=${limit}` : `${config.URI_POKEMON}pokemon/`;
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

export const getPokemonsType = async (URI) => {
    try {
        const response = await fetch(URI);
        if (!response.ok) {
            throw new Error(`No se pudo obtener la lista de Pokémon (${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener Pokémons:', error);
        throw error;
    }
};

export const getPokemonName = async (name) => {
    try {
        name = name.toLowerCase();
        const uri = `${config.URI_POKEMON}pokemon/${name}`;
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


export const getCategories = async () => {
    try {
        const uri = `${config.URI_POKEMON}type`;
        const response = await fetch(uri);
        if (!response.ok) {
            throw new Error(`No se pudo obtener lista de categorias: (${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener categorias:', error);
        throw error;
    }
}