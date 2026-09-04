import type React from 'react';
import { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../../Form/atoms/Checkbox';
import type { ITableColumnConfig, TypeCellAlignment } from '..';
import TableHeaderTitle from '../atoms/TableHeaderTitle';

const HeaderRow = styled.div`
  display: table-row;
  height: 50px;
`;

const HeaderItem = styled.div<{
  $fixedWidth?: number;
  $alignment?: TypeCellAlignment;
  $hasCopyButton?: boolean;
  $minWidth?: number;
  $headerStyle: 'header' | 'subHeader';
  $isSortActive?: boolean;
}>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${(p) => p.theme.fontFamily.ui};

  ${({ $hasCopyButton }) =>
    $hasCopyButton &&
    css`
    padding-right: 20px;
  `};

  ${({ theme, $alignment, $headerStyle }) =>
    $alignment
      ? css`
    ${theme.typography.table[$headerStyle][$alignment]};
  `
      : css`
    ${theme.typography.table[$headerStyle].left};
  `};

  ${(p) =>
    p.$fixedWidth &&
    css`
    width: ${p.$fixedWidth}px;
  `};

  ${({ $minWidth }) =>
    $minWidth &&
    css`
    min-width:${$minWidth}px;
  `};

  ${({ theme: { styles }, $headerStyle, $isSortActive }) =>
    $headerStyle === 'subHeader' &&
    css`
  padding-bottom: 15px;

  &::after {
    ${styles.tables.header.divider};
    content: '';
    display: block;
    height: 1px;
    left: ${$isSortActive ? '-15px' : '0'};
    right: 0;
    width: ${$isSortActive ? 'calc(100% + 15px)' : '100%'};
    bottom: 0px;
    position: absolute;
  }
`};
`;

// Default alignment is left//
const TitleItems = styled.div<{ $alignment?: TypeCellAlignment }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ $alignment }) =>
    $alignment &&
    css`
      ${$alignment === 'right' ? 'align-items: flex-end' : null};
      ${$alignment === 'center' ? 'align-items: center' : null};
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
  ${({ theme: { typography } }) => css`
    ${typography.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`;

// Keeps the height consistent with other rows
const EmptyTitle = styled.div`
  height: 20px;
`;

const MiddleLine = styled.div<{ $isLastOfGroup?: boolean }>`
  ${({ theme: { styles } }) => css`
    ${styles.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({ $isLastOfGroup }) =>
    $isLastOfGroup &&
    css`
    margin-right: 15px;
  `};
`;

/* A column's sort identity. columnId is optional, so position is the fallback - which is also the
   id toggleSort has always reported to sortCallback for a column without one. */
const columnKeyOf = (column: ITableColumnConfig, index: number) =>
  column.columnId ?? `column_${index}`;

const renderGroupHeader = (columnConfig: ITableColumnConfig[], index: number) => {
  if (index < 0) {
    return null;
  }

  let isLastOfGroup: boolean = true;

  // Is Last of the group if the next is different
  if (index < columnConfig.length - 1) {
    isLastOfGroup = columnConfig[index].groupTitle !== columnConfig[index + 1].groupTitle;
  }

  // if the column doesn't belong to any group
  if (!columnConfig[index].groupTitle) {
    return <EmptyTitle />;
  }

  // has group, previous was equal
  if (index !== 0 && columnConfig[index - 1].groupTitle === columnConfig[index].groupTitle) {
    return (
      <Fragment>
        <EmptyTitle />
        <MiddleLine $isLastOfGroup={isLastOfGroup} />
      </Fragment>
    );
  }

  // New GroupTitle
  return (
    <Fragment>
      <Title>{columnConfig[index].groupTitle}</Title>
      <MiddleLine $isLastOfGroup={isLastOfGroup} />
    </Fragment>
  );
};

interface ITableHeader {
  selectable?: boolean;
  hasStatus: boolean;
  hasThumbnail: boolean;
  hasTypeIcon: boolean;
  allChecked: boolean;
  disableAllChecked: boolean;
  hasHeaderGroups: boolean;
  columnConfig: ITableColumnConfig[];
  defaultAscending: boolean;
  toggleAllCallback?: (checked: boolean) => void;
  sortCallback?: (ascending: boolean, columnId: string) => void;
}

const TypeTableHeader: React.FC<ITableHeader> = ({
  selectable,
  hasStatus,
  hasThumbnail,
  hasTypeIcon,
  allChecked,
  disableAllChecked,
  hasHeaderGroups,
  columnConfig,
  defaultAscending,
  toggleAllCallback = () => {},
  sortCallback = () => {},
}) => {
  /* Which column the props declare active, as an identity rather than a snapshot of the config.
     Comparing this derived string is what lets a consumer hand over a fresh array every render
     without wiping out the column the user clicked. */
  const propActiveKey = useMemo(() => {
    const index = columnConfig.findIndex(({ sortActive }) => sortActive);
    return index === -1 ? null : columnKeyOf(columnConfig[index], index);
  }, [columnConfig]);

  const [activeKey, setActiveKey] = useState<string | null>(propActiveKey);
  const [ascending, setAscending] = useState(defaultAscending);

  // Adopt the props' answer whenever it changes; clicks own it in between.
  const lastPropActiveKey = useRef(propActiveKey);
  if (lastPropActiveKey.current !== propActiveKey) {
    lastPropActiveKey.current = propActiveKey;
    setActiveKey(propActiveKey);
  }

  /* defaultAscending is a default, not a control: it seeds the direction and a change still lands
     while the table is untouched, but once the user has sorted, adopting it would redirect the
     direction they are toggling and a second click on the active column would stop flipping. */
  const hasUserSorted = useRef(false);
  const lastDefaultAscending = useRef(defaultAscending);
  if (lastDefaultAscending.current !== defaultAscending) {
    lastDefaultAscending.current = defaultAscending;
    if (!hasUserSorted.current) {
      setAscending(defaultAscending);
    }
  }

  const toggleAllCallbackWrapper = useCallback(
    (checked: boolean) => {
      toggleAllCallback(checked);
    },
    [toggleAllCallback]
  );

  /**
   * Rules for toggling ascending value
   * - Clicked column was active, toggle value of ascending.
   * - No column was sorted before, keep the sorting ascending.
   * - Clicked column was not active persist the last ascending option
   */
  const toggleSort = useCallback(
    (indexKey: number, columnId?: string) => {
      const column = columnConfig[indexKey];
      if (column === undefined || !column.sortable) {
        return;
      }

      const key = columnKeyOf(column, indexKey);
      const newAscending: boolean = activeKey === key ? !ascending : ascending;

      hasUserSorted.current = true;
      setActiveKey(key);
      setAscending(newAscending);
      sortCallback(newAscending, columnId ?? key);
    },
    [activeKey, ascending, columnConfig, sortCallback]
  );

  return (
    <HeaderRow>
      {selectable ? (
        <HeaderItem $headerStyle='header' $fixedWidth={30}>
          <Checkbox
            checked={allChecked}
            disabled={disableAllChecked}
            onChangeCallback={toggleAllCallbackWrapper}
          />
        </HeaderItem>
      ) : null}
      {hasStatus ? <HeaderItem $headerStyle='header' $fixedWidth={10} /> : null}
      {hasThumbnail ? <HeaderItem $headerStyle='header' $fixedWidth={70} /> : null}
      {hasTypeIcon ? <HeaderItem $headerStyle='header' $fixedWidth={35} /> : null}

      {columnConfig.map((column, key, allColls) => {
        const {
          header,
          alignment,
          hasCopyButton,
          columnId,
          sortable,
          minWidth,
        }: ITableColumnConfig = column;
        const isSortActive = activeKey === columnKeyOf(column, key);
        return (
          <HeaderItem
            // biome-ignore lint/suspicious/noArrayIndexKey: ITableColumnConfig.columnId is optional; column position is the stable identity. #646.
            key={key}
            $alignment={alignment}
            $hasCopyButton={hasCopyButton}
            $minWidth={minWidth}
            $headerStyle={hasHeaderGroups ? 'subHeader' : 'header'}
            $isSortActive={isSortActive}
          >
            <TitleItems $alignment={alignment}>
              {hasHeaderGroups && (
                <GroupTitle>{hasHeaderGroups && renderGroupHeader(allColls, key)}</GroupTitle>
              )}
              <TableHeaderTitle
                header={header}
                sortable={sortable}
                indexKey={key}
                columnId={columnId}
                isSortActive={isSortActive}
                ascending={ascending}
                toggleSort={toggleSort}
              />
            </TitleItems>
          </HeaderItem>
        );
      })}
    </HeaderRow>
  );
};

export default TypeTableHeader;
