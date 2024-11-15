import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ITopBarBadge } from '..';

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

  transition: opacity var(--speed-fast) var(--easing-primary-out);

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
    opacity: ${ready ? '1' : '0'};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${LinkText}{
      display: ${ready ? 'none' : 'inline-block'};;
    }

    ${DefaultText}, ${LinkText}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${ready ? `min-width: ${minWidth}px;` : 'position: absolute;'};
    }
  `};
`;

const TopBarBadge: React.FC<ITopBarBadge> = ({text, color, linkHref, linkTo, linkText}) => {
  
  const defaultTextRef = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const linkTextRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

  const [ready, setReady] = useState<boolean>(false);
  const [minWidth, setMinWidth] = useState<number>(0);

  useEffect(() => {
    setReady(false);
    setTimeout(() => {
      const defaultWidth = defaultTextRef.current.getBoundingClientRect().width;
      const linkWidth = linkTextRef.current?.getBoundingClientRect().width || 0;
      const largestWidth = defaultWidth >= linkWidth ? defaultWidth : linkWidth;
      setMinWidth(Math.ceil(largestWidth));
      setReady(true);
    }, 100);
  }, [defaultTextRef, linkTextRef, text, linkText, setMinWidth, setReady]);

  const defaultTextElement = <DefaultText ref={defaultTextRef}>{text}</DefaultText>;
  const linkTextElement = linkTo || linkHref ? <LinkText ref={linkTextRef}>{linkText || text}</LinkText> : null;
  
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

export default TopBarBadge;