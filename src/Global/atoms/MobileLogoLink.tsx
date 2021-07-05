import React, { useContext } from 'react';
import styled from 'styled-components';
import { TabContext, ContextProps } from '../../Tabs/Tabs';

import SvgLogoMark from '../../svg/LogoMark';
import {resetButtonStyles} from '../../common/index';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  ${resetButtonStyles};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`;
const LogoMark = styled.div`
  margin-right: 15px;
`;

const SVGObject = styled.object``;

interface ILogoLink {
  closeId: string
  logoMark?: string,
  home?: string,
}

const MobileLogoLink:  React.FC<ILogoLink> = ({
  home = "/",
  logoMark,
  closeId,
}) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  return(
    <Logo to={home} onClick={() => setSelected(closeId)}>
      <LogoMark>{logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}</LogoMark>
    </Logo>
  );
};

export default MobileLogoLink;