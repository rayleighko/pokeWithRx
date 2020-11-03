import React from 'react';
import styled from 'styled-components'
import { Row } from 'antd'

import PokeBook from './components/PokeBook'

import 'antd/dist/antd.css'

const AppWrapper = styled(Row)`
  min-width: 360px
  max-width: 1440px
`

const App = () => {
  return (
    <AppWrapper>
      <PokeBook />
    </AppWrapper>
  );
}

export default App;
