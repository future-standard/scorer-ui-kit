import React, { Fragment } from 'react';
import styled  from 'styled-components';
import { IUserDrawerMeta } from '..';
import Icon from '../../Icons/Icon';

const MetaConatiner = styled.div`
  margin: 10px 10px;
  border: 1px solid #e2e2e380;
  background-color: #eeeded80;
  border-radius: 5px;
  &:active { 
    box-shadow: 4px 4px #eeeded80;
  }
`;

const LabelTitle = styled.div`
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  opacity: 0.76;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: #575757;
  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-top: 2px;
`;

const LabelContent = styled.div`
  font-size: 10px;
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 0 5px 0;
  user-select: none;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: rgba(87, 87, 87, 0.5);
`;

const LabelNotes = styled.div`
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0 8px 0;
  max-height: 23px;
  user-select: none;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: rgba(87, 87, 87, 0.5);
  font-family: ${({ theme }) => theme.fontFamily.ui};
`;

const TitleContainer = styled.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
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
    <Fragment>
      {(title !== '' ) &&
        <Container onClick={onUserDrawerMetaClick}>
          <MetaConatiner>
            <TitleContainer>
              <Icon icon={icon as string} size={10} color='dimmed' />
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
    </Fragment>
  );
};

export default UserDrawerMeta;