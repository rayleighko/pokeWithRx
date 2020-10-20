import React from 'react'
import short from 'short-uuid'
import { Row, Col } from 'antd'

import HttpClient from '../apis/HttpClient'
import * as pokemonTypes from '../models/pokemon'
import Pokemon from './Pokemon'

const PokemonList = ({ url }: React.PropsWithChildren<pokemonTypes.Pokemons>) => {
    const [pokemons, setPokemons] = React.useState<pokemonTypes.Pokemons>({})
    React.useEffect(() => {
        fetchPokemons()
    }, [])

    const fetchPokemons = async () => {
        const { json } = await HttpClient.request({ url })
        setPokemons(json)
    }
    return (
        <Row justify="center">
            {pokemons.results?.map(({ url }: { url: string }) => (
                <Col key={short.uuid()}>
                    <Pokemon url={url} />
                </Col>
            ))}
        </Row>
    )
}

export default PokemonList