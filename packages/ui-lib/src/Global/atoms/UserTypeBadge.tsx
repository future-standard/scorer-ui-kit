import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const CoreStyle = css`
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  border-radius: 3px;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 85.714% */
  white-space: nowrap;
`;

const ContainerStatic = styled.div<{themeColor?: string}>`
  ${CoreStyle};

  ${({themeColor}) => themeColor ? css`
    border: 2px solid var(--${themeColor}-9);
    color: var(--${themeColor}-11);
  ` : css`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`;

const DefaultText = styled.span`
  display: inline-block;
`;
const LinkText = styled.span``;

const ContainerLinked = styled.div<{themeColor?: string}>`
  a {
    ${CoreStyle};

    text-decoration: none;

    ${({themeColor}) => themeColor ? css`
      background-color: transparent;
      border: 2px solid var(--${themeColor}-9);
      color: var(--${themeColor}-11);
    ` : css`
      background-color: transparent;
      border: 2px solid var(--info-9);
      color: var(--info-11);
    `};

    &:hover {
      ${DefaultText}{
        display: none;
      }

      ${LinkText}{
        display: inline-block;
      }

      ${({themeColor}) => themeColor ? css`
        background-color: var(--${themeColor}-9);
        border: 2px solid var(--${themeColor}-9);
        color: var(--white-12);
      ` : css`
        background-color: var(--info-9);
        border: 2px solid var(--info-9);
        color: var(--white-12);
      `};
    }
  }
`;

const Container = styled.div<{ready: boolean, minWidth: number}>`
  ${({ready, minWidth}) => css`
    
    visibility: ${ready ? 'visible' : 'hidden'};
    
    ${LinkText}{
      display: ${ready ? 'none' : 'inline-block'};;
    }
    ${DefaultText}, ${LinkText}{
      min-width: ${minWidth}px;
    }
  `};
`;

interface IUserTypeBadge {
  text: string;
  color?: string;
  linkHref?: string;
  linkTo?: string;
  linkText?: string;
}

const UserTypeBadge: React.FC<IUserTypeBadge> = ({text, color, linkHref, linkTo = '/', linkText = 'Login'}) => {
  
  const defaultTextRef = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const linkTextRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

  const [ready, setReady] = useState<boolean>(false);
  const [minWidth, setMinWidth] = useState<number>(0);

  useEffect(() => {
    const defaultWidth = defaultTextRef.current.clientWidth;
    const linkWidth = linkTextRef.current.clientWidth;
    const largestWidth = defaultWidth > linkWidth ? defaultWidth : linkWidth;
    setMinWidth(largestWidth);
    setReady(true);
  }, []);

  const defaultTextElement = <DefaultText ref={defaultTextRef}>{text}</DefaultText>;
  const linkTextElement = <LinkText ref={linkTextRef}>{linkText}</LinkText>;
  
  let badgeComponent;

  if(linkTo){
    badgeComponent = <ContainerLinked themeColor={color}><Link to={linkTo}>{defaultTextElement}{linkTextElement}</Link></ContainerLinked>;
  } else if(linkHref){
    badgeComponent = <ContainerLinked themeColor={color}><a href={linkHref}>{defaultTextElement}{linkTextElement}</a></ContainerLinked>;
  } else {
    badgeComponent = <ContainerStatic themeColor={color}>{defaultTextElement}</ContainerStatic>;
  }
  
  return (
    <Container {...{ready, minWidth}}>
      { badgeComponent }
    </Container>
  );
};

export default UserTypeBadge;