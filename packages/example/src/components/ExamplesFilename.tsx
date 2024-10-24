import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Icon } from 'scorer-ui-kit';

export const FilenameTag = styled.div`
  display: inline-block;
  padding: 0 4px;
  margin-top: 12px;
  border-radius: 3px;
  font-family: "Courier", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: var(--white);
  background: var(--primary-a9);
  border: 1px solid var(--primary-10);
  font-weight: 400;
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
  z-index: 100;
  
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0px;

  background-color: var(--grey-3);
  border-color: 1px solid var(--grey-a6);
  padding: 4px 4px;
  border-radius: 4px;
  
  ${FilenameTag}{
    margin: 0;
  }
`;

const BackButton = styled.div`
  flex: 1;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 4px;

  a {
    text-decoration: none;
    height: 16px;
    width: 16px;
    line-height: 16px;
    border-radius: 3px;
    color: var(--grey-10);
    svg {
      path {
        stroke: var(--grey-10);
      }
    }

    &:hover {
      svg {
        path {
          stroke: var(--primary-9);
        }
      }
    }
  }
`;

const ExamplesFilename : React.FC = ({ children }) => {
 return(
  <Container>
    <BackButton>
      <Link to={'/'}><Icon size={12} icon='Home' /></Link>
    </BackButton>
    <FilenameTag>{ children }</FilenameTag>
  </Container>
 ); 
};

export default ExamplesFilename;