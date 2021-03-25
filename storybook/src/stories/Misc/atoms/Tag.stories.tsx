import React from 'react';
import {select, boolean, text, number} from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Tag, IconSVGs} from 'scorer-ui-kit';

export default {
  title: 'Misc/atoms',
  component: Tag,
  decorators: []
};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

const Container = styled.div``;

const colorOptions = { EmtpyValue: "", Mono: "mono", Dimmed: "dimmed", Subtle: "subtle", Inverse: "inverse", Primary: "primary", Danger : "danger" };

export const _Tag = () => {
  const iconList = generateIconList();
  const tagText = text("Label", "Example")
  const iconName = select("Icon", iconList, 'MetaTags');
  const size = number('Size',14);
  const tagWeight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy" }, "regular");
  const color = select("Color",{...colorOptions}, "");
  const hoverColor = select("Hover Color",{...colorOptions}, "mono");
  const isHoverEnabled = boolean('enableHover', false);

  return (
    <Container>
      <Tag
        label={tagText}
        icon={iconName}
        enableHover={isHoverEnabled}
        size={size}
        color={color}
        hoverColor={hoverColor}
        weight={tagWeight}
      />
    </Container>
  )
}