import React from 'react';
import styled from 'styled-components';
import SliderInput, {ISlider} from '../atoms/SliderInput';

const Container = styled.div``;


interface IDurationSliderProps {

}

type IDurationSlider = IDurationSliderProps & ISlider;

const DurationSlider: React.FC<IDurationSlider> = ({...props}) => {
  return(
    <Container>
      <SliderInput {...props}/>
    </Container>
  );
};

export default DurationSlider;