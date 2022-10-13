import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IUserDetails } from '..';
import Icon from '../../Icons/Icon';
import { Label } from '../../Form';

const ExampleTitle = styled.div`
  min-height: 48px;
  margin: 10px 10px;
  border: 2px solid #e2e2e380;
  background-color: #eeeded80;
  border-radius: 5px;
`;

const LabelTitle = styled(Label)`
  font-size: 12px; 
  padding-top: 5px;
  margin-bottom: -4px;
  padding-left: 10px;
  font-weight: 600;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelContent = styled(Label)`
  font-size: 12px; 
  padding-bottom: 5px;
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelNotes = styled(Label)`
  font-size: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -25px;
  margin-bottom: -7px;
  overflow-wrap: anywhere;
`;

const TitleIcon = styled(Icon)`
  margin-top: 5px;
  margin-left: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
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
    <div onClick={onUserDetailsClick}>
      <ExampleTitle>
        <TitleContainer>
          <TitleIcon icon={icon} size={12} />
          <LabelTitle title={title}  htmlFor='' labelText={title as string}/>
        </TitleContainer>
        <LabelContent title={subTitle}  htmlFor='' labelText={subTitle as string} />
        <LabelNotes title={notes} htmlFor='' labelText={notes as string} />
      </ExampleTitle>
    </div>
  );
};

export default UserDetails;