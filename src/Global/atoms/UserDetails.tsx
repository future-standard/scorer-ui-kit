import React, { useRef, useEffect, useState } from 'react';
import styled, { css }  from 'styled-components';
import { IUserDetails } from '..';
import Icon from '../../Icons/Icon';

const ExampleTitle = styled.div`
  margin: 10px 10px;
  border: 2px solid #e2e2e380;
  background-color: #eeeded80;
  border-radius: 5px;
  &:active { 
    box-shadow: 4px 4px #eeeded80;;
  }
`;

const LabelTitle = styled.div`
  font-size: 12px; 
  padding-left: 10px;
  font-weight: 800;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #585858e6;
  opacity: 0.7;
`;

const LabelContent = styled.div`
  font-size: 12px; 
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0px;
  font-weight: 700;
  color: #585858e6;
  opacity: 0.7;
`;

const LabelNotes = styled.div`
  font-size: 10px;
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 5px 0;
  font-weight: 700;
  color: #585858e6;
  opacity: 0.7;
  max-height: 23px;
`;

const TitleIcon = styled(Icon)`
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 3px 10px;
`;

const Container = styled.div`
  cursor: pointer;
`;

interface IProps {
  item: IUserDetails;
  contextKey: number;
  onClickCallback?: (...args: any[]) => void;
  onUserDetailsClick?:() => void;
}

const UserDetails : React.FC<IProps> = ({item, contextKey, onClickCallback, onUserDetailsClick}) => {
  const { icon, title, subTitle, notes } = item;

  const refSubmenu = useRef<any>(null);
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);

  useEffect(() => {
    if(refSubmenu && refSubmenu.current && refSubmenu.current.clientHeight !== 0){
      setSubmenuHeight(refSubmenu.current.clientHeight);
    }

    // if(readyCallback){ readyCallback(contextKey); }
  }, [refSubmenu, setSubmenuHeight, contextKey]);

  return (
      <Container onClick={onUserDetailsClick}>
        <ExampleTitle>
          <TitleContainer>
            <TitleIcon icon={icon} size={12} />
            <LabelTitle title={title}>{title}</LabelTitle>
          </TitleContainer>
          {subTitle !=='' ?
            <LabelContent title={subTitle}>{subTitle}</LabelContent>
          : null}
          {notes !=='' ?
            <LabelNotes title={notes}>{notes}</LabelNotes>
          : null}
        </ExampleTitle>
      </Container>
  );
};

export default UserDetails;