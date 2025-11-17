import React from 'react';
import {
  UtilityHeader,
} from 'scorer-ui-kit';

import styled from 'styled-components';
import { object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const UtilityHeaderStory = {
  title: 'Global/molecules',
  component: UtilityHeader,
  decorators: [
  ]
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`;

export const _UtilityHeader = () => {

  const returnAction = action('Return action');
  const backLink = object("Back Link", { label: "Back", onClick:returnAction });
  const showBreadcrumbs = boolean("Show Breadcrumbs", true);
  const showHomeIcon = boolean("Show Home Icon", true);
  const clickAction = action('The Breadcrumb is using a callback');
  
  const breadcrumbs = object("breadcrumbs", [
    {
      text: 'Examples', 
      href:'/'
    },
    {
      text:'Two', 
      href:'#2'
    },
    {
      text:'Three', 
      href:'#3'
    },
    {
      text:'Four', 
      onClick: clickAction
    },
    {
      text:'Five', //Last breadcrumb is current page so it will not be a link
    }
  ]);
  const shareLink = object("Share Link", { show: true, label: "Share", link: "https://www.example.com", copiedLabel: "Copied" });
  
  return (
    <Container>
      <UtilityHeader 
        back={backLink}
        showBreadcrumbs={showBreadcrumbs}
        breadcrumbs={breadcrumbs}
        showHomeIcon={showHomeIcon}
        share={shareLink}
      />
    </Container>
  )
}

export default UtilityHeaderStory;