import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import PageTitle from '../atoms/PageTitle';
import IntroductionText from '../atoms/IntroductionText';
import Tag from '../../Misc/atoms/Tag';
import { deviceMediaQuery } from '../../theme/common';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const LeftPanel = styled.div`
`;

const RightPanel = styled.div<{iconLeftPanel: boolean}>`
    ${({iconLeftPanel}) => iconLeftPanel && css`
        padding-top: 32px;
    `};

    @media ${deviceMediaQuery.large} {
      padding-top: 0px;
    }

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
  iconColor?: string
  introductionText?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle?: boolean
  tagList?: IHeaderTag[]
  areaTitleBottom?: boolean
  rightContent?: React.ReactNode | React.FC | ReactElement;
}

const PageHeader: React.FC<IProps> = ({
  title,
  icon,
  iconColor='primary-9',
  introductionText,
  areaHref,
  areaTitle,
  updateDocTitle = true,
  hideAreaInDocTitle,
  tagList,
  areaTitleBottom,
  rightContent
}) => {

  return (
    <Container>
      <LeftPanel>
        <PageTitle iconColor={iconColor} {...{ title, icon, areaHref, areaTitle, updateDocTitle, hideAreaInDocTitle, areaTitleBottom }} />
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
      {rightContent ?
        <RightPanel iconLeftPanel={!!icon}>
          {rightContent}
        </RightPanel>
        : null
      }
    </Container>
  );
};

export default PageHeader;