import React from 'react';
import styled from 'styled-components';
import { BigIconsSummary } from 'scorer-ui-kit';
import { object, select, number } from "@storybook/addon-knobs";

export default {
  title: 'Misc/atoms',
  component: BigIconsSummary,
  decorators: []
};

const Container = styled.div`
`;

const defaultIcons: string[] = ['MonitoringProfile', 'RetryJob']

export const _BigIconsSummary = () => {

  const icons = object('Icons', defaultIcons);
  const color = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle", Inverse: "inverse", Primary: "primary" , Danger: "danger"}, "dimmed");
  const weight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy" }, "light");
  const size = number("Size", 72);

  return(
    <Container>
      <BigIconsSummary{...{icons, color, weight, size}} />
    </Container>
  )

}