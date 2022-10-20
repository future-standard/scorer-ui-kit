import React from 'react';
import styled  from 'styled-components';
import { IUserDrawerMeta } from '..';
import Icon from '../../Icons/Icon';

const MetaConatiner = styled.div`
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
  font-weight: 800;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #585858e6;
  opacity: 0.7;
  user-select: none;
  white-space: nowrap;
`;

const LabelContent = styled.div`
  font-size: 12px; 
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 3px 0 5px 0;
  font-weight: 700;
  color: #585858e6;
  opacity: 0.7;
  user-select: none;
  white-space: nowrap;
`;

const LabelNotes = styled.div`
  font-size: 10px;
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 0 4px 0;
  font-weight: 700;
  color: #585858e6;
  opacity: 0.7;
  max-height: 23px;
  user-select: none;
`;

const TitleContainer = styled.div`
  display: flex;
  gap:10px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 3px 10px;
`;

const Container = styled.div`
  cursor: pointer;
`;

interface IProps {
  item: IUserDrawerMeta;
  onUserDrawerMetaClick?:() => void;
}

const UserDrawerMeta : React.FC<IProps> = ({item, onUserDrawerMetaClick}) => {
  const { icon, title, subTitle, notes } = item;

  return (
    <div>
      {(notes !== '' ) &&
        <Container onClick={onUserDrawerMetaClick}>
          <MetaConatiner>
            <TitleContainer>
              <Icon icon={icon} size={12} />
              <LabelTitle title={title}>{title}</LabelTitle>
            </TitleContainer>
            {subTitle !=='' ?
              <LabelContent title={subTitle}>{subTitle}</LabelContent>
            : null}
            {notes !=='' ?
              <LabelNotes title={notes}>{notes}</LabelNotes>
            : null}
          </MetaConatiner>
        </Container>}
    </div>
  );
};

export default UserDrawerMeta;