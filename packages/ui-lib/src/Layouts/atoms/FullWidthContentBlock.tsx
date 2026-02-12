import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const FullWidthContainer = styled.div<{ $contentHeight: number }>`
  min-height: ${({$contentHeight}) => $contentHeight + 'px'};
`;

const FullWidthInner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`;

const FullWidthContentBlock : React.FC<React.PropsWithChildren> = ({children}) => {
  const innerElement = useRef<HTMLDivElement>(null);
  const [ contentHeight, setContentHeight ] = useState<number>(0);

  useEffect(() => {
    if(innerElement && innerElement.current){
      setContentHeight(innerElement.current.clientHeight);
    }
  }, [innerElement, children]);

  return <FullWidthContainer $contentHeight={contentHeight}>
    <FullWidthInner ref={innerElement}>
      {children}
    </FullWidthInner>
  </FullWidthContainer>;
};

export default FullWidthContentBlock;