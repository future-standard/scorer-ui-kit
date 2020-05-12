import React from 'react';
import styled from 'styled-components';

// import { LineUI } from 'scorer-ui-kit'
import FormPage from './pages/FormPage';


const Container = styled.div`
  margin: auto;
  background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);
  background-repeat: no-repeat, repeat;
`

function App() {
  return (
    <Container >
      {/* <Header /> */}

      {/* <LineContainer>
        <LineUI src="https://picsum.photos/640/480" lines={[{x: 0,y:0}, {x: 200, y: 200}]} />
      </LineContainer> */}

      <FormPage />

      {/* <Footer /> */}
    </Container>
  );
}

export default App;
