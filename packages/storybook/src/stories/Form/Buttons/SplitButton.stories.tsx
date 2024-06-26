import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import React, { ReactElement, useEffect, useState } from "react";
import { ISplitButtonProps, ModalProvider, SplitButton, useModal } from 'scorer-ui-kit';
import styled from "styled-components";

export default {
  title: 'Form/Buttons',
  component: SplitButton,
  decorators: []
};

const Container = styled.div`
  margin: 100px;
`;

const customComponentExample : ReactElement = <h1>Main Action Modal</h1>;

const SplitExampleWithModal = (props : ISplitButtonProps) => {

  const [splitButtonProps, setSplitButtonProps] = useState(props);
  const { createModal } = useModal();

  const buttonClickA0 = action('Main pressed, modal opened');
  const buttonClickA1 = action('日本語の場合はランダム pressed');
  const buttonClickA2 = action('Save Action pressed');
  const buttonClickA3 = action('Download pressed');

  const openImageModal = () => {
    createModal({ customComponent: customComponentExample, padding: true, width: 'auto'})
    buttonClickA0();
  }

  const buttonList = [
    {id: 'a0', text: 'Main Action Open Modal', icon: 'Success',  onClickCallback: openImageModal },
    {id: 'a1', text: '日本語の場合はランダム', onClickCallback:  buttonClickA1 },
    {id: 'a2', text: 'Save Action', icon: 'Analyse', hasOnSelectLoading:true , onClickCallback: buttonClickA2 },
    {id: 'a3', text: 'Download Action', icon: 'Download', onClickCallback: buttonClickA3, disabled:true  },
  ]

  useEffect(() => {
    setSplitButtonProps(props);
  }, [props])

  return (
    <Container>
      <SplitButton
        {...splitButtonProps}
        buttonList={buttonList}
      />
    </Container>
  )
}

export const _SplitButton = () => {

  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger", Custom: "custom" }, "primary");
  const buttonDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");

  return (
    <ModalProvider>
      <SplitExampleWithModal
        mainButtonId={"a0"}
        design={buttonDesign}
        size={buttonSize}
        disabled={buttonDisabled}
        buttonList={[]} // this is replace with data on top
      />
    </ModalProvider>
  )
}