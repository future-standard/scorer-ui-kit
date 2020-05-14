import React from 'react';
import styled from 'styled-components';
import FormPage from './pages/FormPage';


const Container = styled.div``


function App() {

  return (
    <Container>
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
