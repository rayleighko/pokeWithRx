import React from 'react'

import { Pagination } from 'antd';
import { Col } from 'antd'
import styled from 'styled-components'

import HttpClient from '../apis/HttpClient'
import Pokemons from './Pokemons'
import * as models from 'models/pokemon'

const PokeBookWrapper = styled(Col)`
margin: 0 auto;
`

const PokeBook = () => {
    const [state, setState] = React.useState<{
        total: number,
        current: number,
        pokemons: models.Pokemons,
        nextUrl: string,
        prevUrl: string,
    }>({
        total: 0,
        current: 1,
        pokemons: [],
        nextUrl: '',
        prevUrl: ''
    })

    React.useLayoutEffect(() => {
        fetchPokemons({ url: 'https://pokeapi.co/api/v2/pokemon' })

        return () => {
            setState({
                total: 0,
                current: 1,
                pokemons: [],
                nextUrl: '',
                prevUrl: ''
            })
        }
    }, [])

    // React.useEffect(() => {
    //     fetchPokemons({ url: 'https://pokeapi.co/api/v2/pokemon' })
    // }, [state.current])

    const fetchPokemons = async ({ url }: { url: string }) => {
        const { json } = await HttpClient.request({ url })

        setState({
            ...state,
            pokemons: json.results,
            total: json.count,
            nextUrl: json.next,
            prevUrl: json.previous
        })
    }

    const handleChange = (page: number) => {
        const perPage = 20;
        const offset = ((page - 1) * perPage)
        const limit = perPage
        fetchPokemons({ url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` })
    }

    return (
        <>
            <PokeBookWrapper>
                <Pokemons pokemons={state.pokemons} />
            </PokeBookWrapper>
            <PokeBookWrapper>
                <Pagination defaultCurrent={1} total={state.total} onChange={handleChange} showSizeChanger={false} />
            </PokeBookWrapper>
        </>
    )
}

export default PokeBook