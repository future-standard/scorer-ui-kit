import React from 'react';
import {
  UtilityHeader,
} from 'scorer-ui-kit';

import styled from 'styled-components';
import { object, boolean } from '@storybook/addon-knobs';

export default {
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
  const backLink = object("Back Link", { label: "Back", link: "/" });
  const showBreadcrumbs = boolean("Show Breadcrumbs", true);
  const showHomeIcon = boolean("Show Home Icon", true);
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
      href:'#4'
    },
    {
      text:'Five', 
      href:'#5'
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