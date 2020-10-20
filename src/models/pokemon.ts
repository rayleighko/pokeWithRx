export interface Pokemon {
    url?: string
    name?: string
    sprites?: {
        front_default: string
    }
}

export interface Pokemons {
    url?: string
    results?: {
        name: string,
        url: string
    }[]
}