import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PageTitle, { IIconPos } from '../atoms/PageTitle';
import IntroductionText from '../atoms/IntroductionText';
import Tag from '../../Misc/atoms/Tag';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const LeftPanel = styled.div`
`;

const RightPanel = styled.div`
`;

const TagListWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
  margin-top: 29px;
`;

export type IHeaderTag = {
  label: string
  linkTo?: string
  icon?: string
}

interface IProps {
  title: string
  areaHref?: string
  areaTitle?: string
  icon?: string
  iconPosition?: IIconPos
  introductionText?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle?: boolean
  tagList?: IHeaderTag[]
  areaTitleBottom?: boolean
  customRight?: React.ReactNode | React.FC | ReactElement;
}

const PageHeader: React.FC<IProps> = ({ title, icon, introductionText, areaHref, areaTitle, updateDocTitle = true, hideAreaInDocTitle, tagList, iconPosition, areaTitleBottom, customRight }) => {

  return (
    <Container>
      <LeftPanel>
        <PageTitle iconColor='primary-9' {...{ title, icon, areaHref, areaTitle, updateDocTitle, hideAreaInDocTitle, iconPosition, areaTitleBottom }} />
        {!tagList ?
          null
          :
          <TagListWrapper>
            {
              tagList.map(({ icon, label, linkTo }) => (
                <Tag key={`tag-`} icon={icon || ''} noBorder={true} tagSize='compact' {...{ label, linkTo }} />
              ))
            }
          </TagListWrapper>
        }
        {introductionText ?
          <IntroductionText>{introductionText}</IntroductionText>
          : null
        }
      </LeftPanel>
      {customRight ?
        <RightPanel>
          {customRight}
        </RightPanel>
        : null
      }
    </Container>
  );
};

export default PageHeader;