import React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'antd'

import PokemonList from './components/PokemonList'

import 'antd/dist/antd.css'

const AppWrapper = styled(Row)`
  min-width: 360px
  max-width: 1440px
`

const App = () => {
  return (
    <AppWrapper>
      <Col>
        <PokemonList url={'https://pokeapi.co/api/v2/pokemon'} />
      </Col>
    </AppWrapper>
  );
}

export default App;
