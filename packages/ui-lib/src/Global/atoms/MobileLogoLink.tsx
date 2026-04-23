import type React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { resetButtonStyles } from '../../common/index';
import SvgLogoMark from '../../svg/LogoMark';
import { type ContextProps, TabContext } from '../../Tabs/Tabs';

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
  closeId: string;
  logoMark?: string;
  home?: string;
}

const MobileLogoLink: React.FC<ILogoLink> = ({ home = '/', logoMark, closeId }) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  return (
    <Logo to={home} onClick={() => setSelected(closeId)}>
      <LogoMark>
        {logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}
      </LogoMark>
    </Logo>
  );
};

export default MobileLogoLink;
