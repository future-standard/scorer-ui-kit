import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {  boolean, text } from "@storybook/addon-knobs";
import {TableHeaderTitle} from 'scorer-ui-kit';

export default {
  title: 'Tables/atoms',
  component: TableHeaderTitle,
  decorators: []
};

const Container = styled.div`
  font-family: ${p => p.theme.fontFamily.data};
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`;

export const _TableHeaderTitle = () => {
  const [toggleSort, setToggleSort] = useState(true);
  const isSortActive = boolean('isSortActive', true);
  const sortable = boolean('sortable', toggleSort);
  const asc = boolean('ascending', toggleSort)
  const header = text('header', 'Device Name')

  useEffect(() => {
    setToggleSort(asc);
  }, [asc])

  const sortHandler = useCallback((indexKey: number) => {
    console.log('arriving', toggleSort);
    setToggleSort((prev) => !prev)
  },[toggleSort])

  return <Container>
      <TableHeaderTitle
          sortable={sortable}
          isSortActive= {isSortActive}
          ascending={toggleSort}
          columnId={'firstColumn'}
          indexKey={1}
          header={header}
          toggleSort={sortHandler}
        />
  </Container>

};