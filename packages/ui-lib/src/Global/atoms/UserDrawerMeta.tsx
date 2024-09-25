import React, { Fragment, useCallback, useState } from 'react';
import styled from 'styled-components';
import { IUserDrawerMeta } from '..';
import { useCopyToClipboard } from '../../hooks';
import Icon from '../../Icons/Icon';

const MetaConatiner = styled.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`;

const LabelTitle = styled.div`
  max-width: 130px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.76;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  font-family: var(--font-ui);
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
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
`;

const LabelNotes = styled.div`
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0 8px 0;
  max-height: 23px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
  font-family: var(--font-data);
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
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`;

const CopyTextBox = styled.pre`
  padding: 5px;
  font-size: 10px;
  line-height: 1.2;
  box-shadow: 2px 2px 4px (195deg 16% 72% / 72%);
  border: 1px solid var(--grey-8);
  background-color: var(--grey-2);
  border-radius: 5px;
  opacity: 0.76;
  font-weight: 500;
  color: var(--grey-11);
  position: absolute;
  max-width: 170px;
  white-space: pre-wrap;
  font-family: var(--font-data);
  right:10px;
  margin-top: -23px;
`;

const CopyBox = styled.div`
`;

interface IProps {
  item: IUserDrawerMeta;
  onUserDrawerMetaClick?:() => void;
  includeCopyTitle?: boolean;
  copySuccessMessage?: string
}

const UserDrawerMeta : React.FC<IProps> = ({item, onUserDrawerMetaClick, copySuccessMessage, includeCopyTitle}) => {
  const { icon, title, subTitle, notes, hasCopyIcon } = item;
  const { copyToClipboard } = useCopyToClipboard();
  const [ showCopyText, setShowCopyText ] = useState<boolean>(false);
  const [onHoverColorValue, setOnHoverColorValue] = useState<'mono' | 'dimmed' | 'subtle' | 'inverse' | 'primary' | 'danger'>('dimmed');

  const onClickCopyText = useCallback((title , subTitle, notes)=>{
    let copyText;
    if(includeCopyTitle){
      copyText = (title ? title : '') + '\n' + (subTitle ? subTitle : '') + '\n' + (notes ? notes : '');
    } else {
      copyText = (subTitle ? subTitle : '') + '\n' + (notes ? notes : '');
    }
    copyToClipboard(copyText);
    setShowCopyText(true);
    setTimeout(()=>{
      setShowCopyText(false);
    }, 1500);
  },[includeCopyTitle, copyToClipboard]);

  const onHoverMetaInfo = useCallback(() => {
    setOnHoverColorValue('mono');
  }, []);

  const onLeaveMeatInfo = useCallback(() => {
    setOnHoverColorValue('dimmed');
  }, []);

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
                    {copySuccessMessage !== '' ? copySuccessMessage : 'Copied!'}
                  </CopyTextBox>}
                {(hasCopyIcon) ?
                  <IconBox onClick={() => onClickCopyText(title , subTitle, notes)} onMouseEnter={onHoverMetaInfo} onMouseLeave={onLeaveMeatInfo}>
                    <Icon icon='Copy' size={12} color={onHoverColorValue} />
                  </IconBox>:
                  null}
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