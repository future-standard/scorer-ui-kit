import React, {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const HiddenInput = styled.input``;


interface IMark {
  id: string
  value: number
}

interface OwnProps {
  min?: number
  max: number
  step?: number
  marks?: boolean | IMark[]
  defaultValue?: number
  value?: number
}

type ISlider = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const SliderInput : React.FC<ISlider> = ({...props}) => {
  return(
    <Container>
      <HiddenInput type="range" {...props}/>
    </Container>
  );
};

export default SliderInput;