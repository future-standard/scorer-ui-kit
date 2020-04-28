import React from 'react';
import styled from 'styled-components';

import { LineUI } from 'scorer-ui-kit'


const Container = styled.div`
  margin: auto;
  background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);
  background-repeat: no-repeat, repeat;
`

function App() {
  return (
    <Container >
      {/* <Header /> */}

      {/* <Footer /> */}
    </Container>
  );
}

export default App;
