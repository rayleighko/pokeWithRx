type Pokemon = {
    url?: string
    name?: string
    sprites?: {
        front_default: string
    }
}

type Pokemons = Pokemon[]

export type { Pokemon, Pokemons }