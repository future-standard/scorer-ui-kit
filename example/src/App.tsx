import React from 'react';
import styled from 'styled-components';

import { LineUI } from 'scorer-ui-kit'


const Container = styled.div`
  margin: auto;
  background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);
  background-repeat: no-repeat, repeat;
  min-height: 100%;
`
const LineContainer = styled.div`
  width: 600px;
  margin: auto;
`

function App() {
  return (
    <Container >
      {/* <Header /> */}
      <LineContainer>
        <LineUI src="https://picsum.photos/640/480" lines={[]} />
      </LineContainer>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
