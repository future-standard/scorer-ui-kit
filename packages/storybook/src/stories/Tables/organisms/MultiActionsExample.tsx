import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import photo from '../../assets/placeholder.jpg';
import {
  TypeTable,
  IconButtonData,
  ActionButtons,
  FilterBar,
  IFilterDatePicker,
  IFilterResult,
  isFilterItem,
  ActionsBar,
  useModal,
  ConfirmationModal
} from 'scorer-ui-kit';

import {
  IRowData,
  ITypeTableData,
} from 'scorer-ui-kit/dist/Tables';

import {
  tableData,
  ITableSampleData,
  columnActionsSample,
  resultTextTemplateEng,
  resultTextTemplateJp,
  clearEng,
  clearJp,
  tableDataJp,
  deleteMessageEn,
  deleteMessageJp,
  deleteFilesTitleEn,
  deleteFilesTitleJP
} from '../../helpers/data_samples';

import { filterByCreationDatePicker, sortDataBy } from '../../helpers/sample_table_helpers';
import { emptyCallbackForStory } from '../../helpers';
import { action } from '@storybook/addon-actions';

const SelectRows = styled.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`;

const TableBarWrapper = styled.div`
  margin: 38px 0 26px 0;
`;

const rowMaker = (rowData: ITableSampleData[], generateConfigButtons: Function): ITypeTableData => {
  const newRows: ITypeTableData = rowData.map(({
    id,
    created,
    totalTime,
    usage,
    usageUnit,
    cost
  }) => {

    const row: IRowData = ({
      id,
      header: {
        image: photo,
        mediaUrl: photo,
        mediaType: 'img',
      },
      columns: [
        { text: created.toDateString() },
        { text: totalTime },
        { text: `${usage}`, unit: usageUnit },
        { customComponent: <ActionButtons buttonsConfig={generateConfigButtons(id)} /> },
      ]
    })
    return row;
  })

  return newRows;
};

const getFilteredData = (currentSelected: IFilterResult[], data: ITableSampleData[]): ITableSampleData[] => {
  if (Array.isArray(currentSelected) && (currentSelected.length > 0)) {
    const filteredData: ITableSampleData[] = currentSelected.reduce((accumulator, currentFilter) => {
      if (currentFilter.selected === null) {
        return accumulator;
      };

      if (currentFilter.id === 'datePickerForRuntime' && !isFilterItem(currentFilter.selected) && !Array.isArray(currentFilter.selected)) {
        return filterByCreationDatePicker(accumulator, currentFilter.selected);
      }

      return accumulator;
    }, data);

    return filteredData;
  }

  return data;
}

const checkedRowIDs = (rows: ITypeTableData) => {
  const ids: number | string[] = [];

  rows.forEach((row) => {
    if (row._checked && row.id) {
      ids.push(row.id.toString());
    }
  });

  return ids;

}

interface IMultiActionsExample {
  language: string
}

const MultiActionsExample: React.FC<IMultiActionsExample> = ({ language }) => {

  const [data, setData] = useState<ITableSampleData[]>(tableDataJp);
  const [visibleBar, setVisibleBar] = useState('filterBar');
  const downloadAction = action('Downloading...');
  const deleteAction = action('Deleting...');

  const { createModal } = useModal();

  const openConfirmationModal = useCallback((deleteCallback: () => void) => {
    console.log('creating modal');

    createModal({
      isCloseEnable: false,
      customComponent: (
        <ConfirmationModal
          title={language === 'english' ? deleteFilesTitleEn : deleteFilesTitleJP}
          message={language === 'english' ? deleteMessageEn : deleteMessageJp}
          leftButtonText={language === 'english' ? 'Back' : '戻る'}
          rightButtonText={language === 'english' ? 'Permanently Delete' : '永久削除'}
          rightButtonDesign='danger'
          rightButtonCallback={deleteCallback}
        />
      )
    })
  }, [createModal, language])

  const handleDelete = useCallback((deviceId: string) => {
    const notDeletedData: ITableSampleData[] = data.filter(({ id }) => id !== deviceId);
    setData(notDeletedData);
    deleteAction(`Deleting ${deviceId}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]); // deps for with addon actions was looping

  const handleDownloadLogs = useCallback((deviceId: string) => {
    downloadAction(`Downloading ${deviceId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // deps with addon actions was looping

  const generateConfigButtons = useCallback((rowId: string): IconButtonData[] => {
    return (
      [
        {
          icon: 'Delete',
          onClick: () => { openConfirmationModal(() => handleDelete(rowId)) },
        },
        {
          icon: 'Download',
          onClick: () => { handleDownloadLogs(rowId) },
        }
      ]
    )
  }, [handleDelete, handleDownloadLogs, openConfirmationModal])

  const [rows, setRows] = useState<ITypeTableData>(rowMaker(tableDataJp, generateConfigButtons));

  const datePickers: IFilterDatePicker[] = [
    {
      id: 'datePickerForRuntime',
      dateMode: 'interval',
      timeMode: 'off',
      buttonText: language === 'english' ? 'Date Range' : '日付範囲',
      buttonIcon: 'DateTime',
      dateTimeTextUpper: language === 'english' ? 'From' : 'から',
      dateTimeTextLower: language === 'english' ? 'To' : 'まで',
      timeZoneTitle: language === 'english' ? 'Timezone' : '時間帯',
      lang: language === 'english' ? 'en' : 'ja'
    }
  ]

  const updateVisibleBar = useCallback((newRows: ITypeTableData) => {
    const areRowsSelected = newRows.some((row) => row._checked === true);
    setVisibleBar((prev) => {
      if ((prev !== 'actionsBar') && areRowsSelected) {
        return 'actionsBar';
      }

      if ((prev !== 'filterBar' && !areRowsSelected)) {
        return 'filterBar';
      }

      return prev;
    });
  }, [])

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {

    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id)
    newRows[targetRowIndex]._checked = checked;
    updateVisibleBar(newRows);
    setRows(newRows);
  }, [rows, updateVisibleBar]);

  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    updateVisibleBar(newRows);
    setRows(newRows);
  }, [rows, updateVisibleBar]);

  const handleActionsFinish = useCallback(() => {
    setVisibleBar('filterBar');
    toggleAllCallback(false);
  }, [toggleAllCallback])

  const sortCallback = useCallback((ascending: boolean, columnId: string) => {
    const unsortedData: ITableSampleData[] = [...data];

    const validKey = columnId as keyof ITableSampleData;
    const sortedData = sortDataBy(unsortedData, validKey, ascending);
    setData(sortedData);

  }, [data]);

  const handleFilters = useCallback((currentSelected: IFilterResult[]) => {
    const localData = language === 'english' ? tableData : tableDataJp
    const tempData: ITableSampleData[] = [...localData];

    if ((currentSelected.length === 0)) {
      setData(localData);
    } else {
      const filteredData = getFilteredData(currentSelected, tempData);
      setData(filteredData);
    }

  }, [language])

  const handleDeleteSelected = useCallback(() => {
    const rowsSelected = checkedRowIDs(rows);
    deleteAction(`Deleting ${rowsSelected}`);
    const notDeletedData: ITableSampleData[] = data.filter(({ id }) => !rowsSelected.includes(id))
    setData(notDeletedData);

  }, [data, deleteAction, rows]);

  const handleDownloadSelected = useCallback(() => {
    downloadAction(`Downloading: ${checkedRowIDs(rows).toString()}`)
  }, [downloadAction, rows])

  useEffect(() => {
    setRows(rowMaker(data, generateConfigButtons));
  }, [data, generateConfigButtons])

  return (
    <>
      <TableBarWrapper>
        {visibleBar === 'filterBar'
          && (
            <FilterBar
              searchersConfig={[]}
              dropdownsConfig={[]}
              datePickersConfig={datePickers}
              onChangeCallback={handleFilters}
              totalResults={rows.length}
              filtersTitle={language === 'english' ? 'Filters' : 'フィルター'}
              resultTextTemplate={language === 'english' ? resultTextTemplateEng : resultTextTemplateJp}
              clearText={language === 'english' ? clearEng : clearJp}
              resultsDateFormat='yyyy-MM-dd'
            />)}
        {visibleBar === 'actionsBar' && (
          <ActionsBar
            title={language === 'english' ? 'Actions' : 'アクション'}
            finishTextButton={language === 'english' ? 'Finish' : '為しおわる'}
            finishCallback={handleActionsFinish}
            selectedTemplate={language === 'english' ? 'Selected [SELECTED] of [TOTAL] Results' : '[SELECTED] 〜 [TOTAL]件'}
            totalAvailable={rows.length}
            totalSelected={checkedRowIDs(rows).length}
            actionButtons={[
              {
                icon: 'Delete',
                text: language === 'english' ? 'Delete' : '消す',
                onClick: () => { openConfirmationModal(handleDeleteSelected) }
              },
              {
                icon: 'Download',
                text: language === 'english' ? 'Download' : 'ダウンロード',
                onClick: () => { handleDownloadSelected() }
              }
            ]}
          />
        )}
      </TableBarWrapper>
      <TypeTable {...{
        columnConfig: columnActionsSample,
        selectable: true,
        rows,
        hasThumbnail: true,
        defaultAscending: true,
        hasHeaderGroups: true
      }}

        selectCallback={emptyCallbackForStory(selectCallback)}
        toggleAllCallback={emptyCallbackForStory(toggleAllCallback)}
        sortCallback={emptyCallbackForStory(sortCallback)}
      />
      <SelectRows>Selected IDs: [{checkedRowIDs(rows).toString()}]</SelectRows>
    </>
  );
};

export default MultiActionsExample;