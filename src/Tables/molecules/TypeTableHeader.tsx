import React, { useState, useCallback, Fragment, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TypeCellAlignment, ITableColumnConfig } from '..';
import Checkbox from '../../Form/atoms/Checkbox';
import TableHeaderTitle from '../atoms/TableHeaderTitle';
import useBreakpoints from '../../hooks/useBreakpoints';

const HeaderRow = styled.div`
  display: table-row;
  height: 50px;
`;

const HeaderItem = styled.div<{ fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean, minWidth?: number, headerStyle: string, isSortActive?: boolean }>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${p => p.theme.fontFamily.ui};

  ${({ hasCopyButton }) => hasCopyButton && css`
    padding-right: 20px;
  `};

  ${({ theme, alignment, headerStyle }) => alignment ? css`
    ${theme.typography.table[headerStyle][alignment]};
  ` : css`
    ${theme.typography.table[headerStyle]['left']};
  `};

  ${p => p.fixedWidth && css`
    width: ${p.fixedWidth}px;
  `};

  ${({ minWidth }) => minWidth && css`
    min-width:${minWidth}px;
  `};

  ${({ headerStyle, isSortActive }) => headerStyle === 'subHeader' && css`
  padding-bottom: 15px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: hsl(0, 0%, 89%);
    left: ${isSortActive ? '-15px' : '0'};
    right: 0;
    width: ${isSortActive ? 'calc(100% + 15px)' : '100%'};
    bottom: 0px;
    position: absolute;
  }
`};
`;

// Default alignment is left//
const TitleItems = styled.div<{ alignment?: TypeCellAlignment }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ alignment }) => alignment && css`
      ${alignment === 'right' ? 'align-items: flex-end' : null};
      ${alignment === 'center' ? 'align-items: center' : null};
  `};
`;

const GroupTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`;

const Title = styled.div`
  padding-left: 2px;
  padding-right: 8px;
  color: hsla(210, 2%, 51%, 0.65);
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.3px;
  white-space: nowrap;
`;

// Keeps the height consistent with other rows
const EmptyTitle = styled.div`
  height: 20px;
`;

const MiddleLine = styled.div<{ isLastOfGroup?: boolean }>`
  height: 1px;
  background: hsl(0, 0%, 93%);
  flex: 1;
  ${({ isLastOfGroup }) => isLastOfGroup && css`
    margin-right: 15px;
  `};
`;

const renderGroupHeader = (columnConfig: ITableColumnConfig[], index: number) => {
  if (index < 0) { return null; }

  let isLastOfGroup: boolean = true;

  // Is Last of the group if the next is different
  if (index < (columnConfig.length - 1)) {
    isLastOfGroup = (columnConfig[index].groupTitle !== columnConfig[index + 1].groupTitle);
  }

  // if the column doesn't belong to any group
  if (!columnConfig[index].groupTitle) {
    return (
      <EmptyTitle />
    );
  }

  // has group, previous was equal
  if ((index !== 0) && (columnConfig[index - 1].groupTitle === columnConfig[index].groupTitle)) {
    return (
      <Fragment>
        <EmptyTitle />
        <MiddleLine {...{ isLastOfGroup }} />
      </Fragment>
    );
  }

  // New GroupTitle
  return (
    <Fragment>
      <Title>{columnConfig[index].groupTitle}</Title>
      <MiddleLine {...{ isLastOfGroup }} />
    </Fragment>
  );
};

interface ITableHeader {
  selectable?: boolean
  hasStatus: boolean
  hasThumbnail: boolean
  hasTypeIcon: boolean
  allChecked: boolean
  isEmptyTable: boolean
  isLoading: boolean
  hasHeaderGroups: boolean
  columnConfig: ITableColumnConfig[]
  defaultAscending: boolean
  toggleAllCallback?: (checked: boolean) => void
  sortCallback?: (ascending: boolean, columnId: string) => void
  handleHeightCallback?: (newHeight: number) => void
}

const TypeTableHeader: React.FC<ITableHeader> = ({
  selectable,
  hasStatus,
  hasThumbnail,
  hasTypeIcon,
  allChecked,
  isEmptyTable,
  isLoading,
  hasHeaderGroups,
  columnConfig,
  defaultAscending,
  toggleAllCallback = () => { },
  sortCallback = () => { },
  handleHeightCallback = () => { },
}) => {

  const [sortSpec, setSortSpec] = useState(columnConfig);
  const [ascendingState, setAscendingState] = useState(defaultAscending);

  const toggleAllCallbackWrapper = useCallback((checked: boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);


  /**
 * Rules for toggling ascending value
 * - Clicked column was active, toggle value of ascending.
 * - No column was sorted before, keep the sorting ascending.
 * - Clicked column was not active persist the last ascending option
 */
  const toggleSort = useCallback((indexKey: number, columnId?: string) => {

    if (sortSpec[indexKey] === undefined) { return; }
    if (!sortSpec[indexKey].sortable) { return; }

    const updatedSort = [...sortSpec];

    let lastActiveKey: number | null = null;
    updatedSort.forEach((col, key) => {
      if (col.sortActive) {
        lastActiveKey = key;
      }
      if (key === indexKey) {
        col.sortActive = true;
      } else {
        col.sortActive = false;
      }
    });

    const newAscending: boolean = (lastActiveKey === indexKey) ? !ascendingState : ascendingState;
    const colId: string = (columnId === undefined) ? `column_${indexKey}` : columnId;
    sortCallback(newAscending, colId);
    setSortSpec(updatedSort);
    setAscendingState(newAscending);
  }, [ascendingState, sortCallback, sortSpec]);

  const headerRef = useRef<HTMLDivElement>(null);
  const { activeScreen } = useBreakpoints();

  useEffect(() => {
    if (headerRef !== null && headerRef.current) {
      const newHeight = headerRef.current.getBoundingClientRect().height;
      if (newHeight) {
        handleHeightCallback(newHeight);
      }
    }
  }, [headerRef, activeScreen]);

  return (
    <HeaderRow ref={headerRef}>
      {selectable ? (
        <HeaderItem headerStyle='header' fixedWidth={30}>
          <Checkbox checked={allChecked} disabled={isEmptyTable || isLoading} onChangeCallback={toggleAllCallbackWrapper} />
        </HeaderItem>)
        : null}
      {hasStatus ? <HeaderItem headerStyle='header' fixedWidth={10} /> : null}
      {hasThumbnail ? <HeaderItem headerStyle='header' fixedWidth={70} /> : null}
      {hasTypeIcon ? <HeaderItem headerStyle='header' fixedWidth={35} /> : null}

      {columnConfig.map((column, key, allColls) => {
        const { header, alignment, hasCopyButton, sortActive, columnId, sortable, minWidth }: ITableColumnConfig = column;
        return (
          <HeaderItem
            key={key}
            {...{ alignment, hasCopyButton, minWidth }}
            headerStyle={hasHeaderGroups ? 'subHeader' : 'header'}
            isSortActive={sortActive}
          >
            <TitleItems {...{ alignment }}>
              {hasHeaderGroups &&
                <GroupTitle>
                  {hasHeaderGroups && renderGroupHeader(allColls, key)}
                </GroupTitle>}
              <TableHeaderTitle
                header={header}
                sortable={sortable}
                indexKey={key}
                columnId={columnId}
                isSortActive={sortActive}
                ascending={ascendingState}
                toggleSort={toggleSort}
              />
            </TitleItems>
          </HeaderItem>);
      })}
    </HeaderRow>
  );
};

export default TypeTableHeader;