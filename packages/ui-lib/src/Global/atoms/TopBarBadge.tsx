import React, { useEffect, useState, useRef, Fragment, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ITopBarBadge } from '..';
import { resetButtonStyles } from '../../common';

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

const InteractiveStyle = css<{themeColor?: string}>`
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
`;

const ContainerLinked = styled.div<{themeColor?: string}>`
  a {
    ${InteractiveStyle};
  }
`;

const ContainerButton = styled.div<{themeColor?: string}>`
  button {
    ${resetButtonStyles};
    ${InteractiveStyle};
  }
`;

const Container = styled.div<{ready: boolean, minWidth: number}>`
  ${({ready, minWidth}) => css`
    
    visibility: ${ready ? 'visible' : 'hidden'};
    opacity: ${ready ? '1' : '0'};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${DefaultText}, ${LinkText}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${ready && `min-width: ${minWidth}px;`};
    }
  `};
`;

const TopBarBadge: React.FC<ITopBarBadge> = ({text, color, linkHref, linkTo, linkText, onClick}) => {
  
  const defaultTextRef = useRef<HTMLSpanElement>(null);
  const linkTextRef = useRef<HTMLSpanElement>(null);

  const [ready, setReady] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [minWidth, setMinWidth] = useState<number>(0);

  useEffect(() => {
    setReady(false);
    const timeoutId = setTimeout(() => {
      const defaultWidth = defaultTextRef.current?.getBoundingClientRect().width ?? 0;
      const linkWidth = linkTextRef.current?.getBoundingClientRect().width ?? 0;
      const largestWidth = defaultWidth >= linkWidth ? defaultWidth : linkWidth;
      setMinWidth(Math.ceil(largestWidth));
      setReady(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [text, linkText]);

  const defaultTextElement = useMemo(() => <DefaultText ref={defaultTextRef}>{text}</DefaultText>,[text]);

  const linkTextElement = useMemo(
    () => onClick || linkTo || linkHref ? <LinkText ref={linkTextRef}>{linkText || text}</LinkText> : null,
    [onClick, linkTo, linkHref, linkText, text]
  );
  
  const renderContent = useMemo(
    () => (
      !ready ? (
        <Fragment>
          {defaultTextElement}
          {linkTextElement}
        </Fragment>
      ) : (
        <Fragment>
          {!hover ? defaultTextElement : linkTextElement}
        </Fragment>
      )
    ),
    [ready, hover, defaultTextElement, linkTextElement]
  );

  const badgeComponent = useMemo(() => {
    if(onClick){
      return <ContainerButton themeColor={color}>
        <button onClick={onClick} type="button">
          {renderContent}
        </button>
      </ContainerButton>;
    } else if(linkTo){
      return <ContainerLinked themeColor={color}>
        <Link to={linkTo}>
          {renderContent}
        </Link>
      </ContainerLinked>;
    } else if(linkHref){
      return <ContainerLinked themeColor={color}>
        <a href={linkHref}>
          {renderContent}
        </a>
      </ContainerLinked>;
    } else {
      return <ContainerStatic themeColor={color}>{defaultTextElement}</ContainerStatic>;
    }
  }, [onClick, linkTo, linkHref, color, renderContent, defaultTextElement]);
  
  return (
    <Container {...{ready, minWidth}} onPointerEnter={ () => ready && setHover(true) } onPointerLeave={ () => ready && setHover(false) }>
      { badgeComponent }
    </Container>
  );
};

export default TopBarBadge;