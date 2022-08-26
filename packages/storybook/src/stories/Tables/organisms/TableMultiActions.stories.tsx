
import React from "react";
import styled from "styled-components";
import MultiActionsExample from "./MultiActionsExample";
// import { select } from "@storybook/addon-knobs";
import {
  ModalProvider,
  TypeTable,
} from 'scorer-ui-kit';



const Container = styled.div`
  padding: 100px;
`;
export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: [],
  parameters: {
    jsx: { skip: 2 }
  }
};

// Story starts here o.o
export const _TableMultiActions = () => {
  // const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");

  // Provider should be at main Index level, it's here just for the example
  return null;
};