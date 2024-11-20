import React from 'react';
import styled from 'styled-components';

import {AlertBar} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px;
`;

export default {
  component: AlertBar,
  title: 'Alerts/atoms'
}

export const _AlertBar = (args: any) => {

    return <Container><AlertBar {...args} ></AlertBar></Container>;

}

_AlertBar.argTypes = {
  message: {name:'Message', control: 'text' , defaultValue: 'Look Out!'},
  type: {
    name: 'Type',
    options: ['error', 'warning','info', 'success', 'neutral'],
    mapping: {
      error: 'error',
      warning: 'warning',
      info: 'info',
      success:'success',
      neutral:'neutral'
    },
    control: {
      type: 'select',
      labels: {
        error: 'Error',
        warning: 'Warning',
        info: 'Info',
        success:'Success',
        neutral:'Neutral'
      }
    }
  },
  hideCloseButton: false
}

_AlertBar.args = {
  message: 'Look Out!',
  type: 'warning',
  hideCloseButton: false
}
