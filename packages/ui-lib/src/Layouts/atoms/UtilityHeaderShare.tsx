import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import Icon from "../../Icons/Icon";
import { IUtilityHeaderLinkShare } from "..";
import { useCopyToClipboard } from "../../hooks";


const ExtraActionIcon = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;
const ExtraAction = styled.button`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;
  cursor: pointer;

  ${ExtraActionIcon}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${ExtraActionIcon}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`;

const UtilityHeaderShare : React.FC<IUtilityHeaderLinkShare> = ({show, link, label = 'Share', copiedLabel = 'Copied'}) => {
  
  const [ copyActionText, setCopyActionText ] = useState<string>(label);
  const {copyToClipboard} = useCopyToClipboard();
  
  const clickHandlerShareLink = useCallback(() => {
    // Copy to clip board and change UI for short period.
    copyToClipboard( link ? link : window.location.href);
    setCopyActionText(copiedLabel);
    setTimeout(() => setCopyActionText(copyActionText), 2000);
  }, [link, copiedLabel, copyActionText, copyToClipboard]);

  useEffect(() => {
    // Update the label if prop is updated.
    setCopyActionText(label);
  }, [label]);
  
  if(!show){ return null; }
  
  return(
    <ExtraAction onClick={ clickHandlerShareLink }>
      <ExtraActionIcon>
        <Icon icon="Link" size={16} color="grey-10" />
      </ExtraActionIcon>
      {copyActionText}
    </ExtraAction>
  );
  
};

export default UtilityHeaderShare;