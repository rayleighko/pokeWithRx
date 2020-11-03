import React from 'react'
import short from 'short-uuid'
import { Row, Col } from 'antd'

import HttpClient from '../apis/HttpClient'
import * as models from '../models/pokemon'
import Pokemon from './Pokemon'

const Pokemons = ({ pokemons, }: React.PropsWithChildren<{ pokemons: models.Pokemons }>) => {
    // const Pokemons = ({ pokemons }: any) => {
    return (
        <Row justify="center">
            {pokemons?.map(({ url }) => (
                <Col key={short.uuid()}>
                    <Pokemon url={url} />
                </Col>
            ))}
        </Row>
    )
}

export default Pokemons