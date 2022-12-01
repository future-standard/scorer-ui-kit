import React, { Fragment, useCallback, useState } from 'react';
import styled  from 'styled-components';
import { IUserDrawerMeta } from '..';
import { useCopyToClipboard } from '../../hooks';
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
  max-width: 130px;
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

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBox = styled.div`
  padding: 1px 5px 0 0;
`;

const CopyTextBox = styled.div`
  text-align: center;
  padding: 5px;
  font-size: 10px;
  line-height: 1.2;
  box-shadow: 2px 2px 4px (195deg 16% 72% / 72%);
  border: 1px solid hsl(195deg 5% 60% / 72%);
  background-color: #f8f9fa;
  border-radius: 5px;
  opacity: 0.76;
  font-size: 10px;
  font-weight: 500;
  color: #575757;
  margin-left: -5%;
  margin-top: -23px;
  position: absolute;
`;

const CopyBox = styled.div`
`;

interface IProps {
  item: IUserDrawerMeta;
  onUserDrawerMetaClick?:() => void;
  copyTitleAlso?: boolean;
  tooltipText?: string;
}

const UserDrawerMeta : React.FC<IProps> = ({item, onUserDrawerMetaClick, tooltipText, copyTitleAlso}) => {
  const { icon, title, subTitle, notes } = item;
  const { copyToClipboard } = useCopyToClipboard();
  const [ showCopyText, setShowCopyText ] = useState<boolean>(false);

  const onClickCopyText = useCallback((title , subTitle, notes)=>{
    let copyText;
    if(copyTitleAlso){
      copyText = title + '\n' + subTitle + '\n' + notes;
    } else {
      copyText = subTitle + '\n' + notes;
    }
    copyToClipboard(copyText);
    setShowCopyText(true);
    setTimeout(()=>{
      setShowCopyText(false);
    }, 400);
  },[copyTitleAlso, copyToClipboard]);

  return (
    <Fragment>
      {(title !== '' ) &&
        <Container onClick={onUserDrawerMetaClick}>
          <MetaConatiner>
            <TitleBox>
              <TitleContainer>
                <Icon icon={icon as string} size={10} color='dimmed' />
                <LabelTitle title={title}>{title}</LabelTitle>
              </TitleContainer>
              <CopyBox>
                {showCopyText &&
                  <CopyTextBox>
                    {tooltipText}
                  </CopyTextBox>}
                <IconBox onClick={() => onClickCopyText(title , subTitle, notes)}>
                  <Icon icon='Copy' size={12} />
                </IconBox>
              </CopyBox>  
            </TitleBox>
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