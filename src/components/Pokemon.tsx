import React from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import HttpClient from '../apis/HttpClient'
import * as pokemonTypes from '../models/pokemon'

import Loading from './Loading'

const { Meta } = Card;

const Pokemon = ({ url }: React.PropsWithChildren<pokemonTypes.Pokemon>) => {
    const [pokemon, setPokemon] = React.useState<pokemonTypes.Pokemon>({
        url: '',
        name: '',
        sprites: {
            front_default: ''
        }
    })
    React.useEffect(() => {
        fetchPokemon()

        return () => {
            setPokemon({
                url: '',
                name: '',
                sprites: {
                    front_default: ''
                }
            })
        }
    }, [])

    const fetchPokemon = async () => {
        const { json } = await HttpClient.request({ url })

        setPokemon(json)
    }

    return (
        <Card
            style={{ width: 300, margin: 16 }}
            loading={Boolean(!pokemon)}
            cover={!pokemon ?
                <Loading /> :
                <img
                    alt={pokemon?.name}
                    src={pokemon?.sprites?.front_default}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={pokemon?.name}
                description="This is the description"
            />
        </Card>
    )
}

export default Pokemon