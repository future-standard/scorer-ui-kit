import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { boolean, select, text } from "@storybook/addon-knobs";
import {
  TypeTable,
  ModalProvider,
  IconButtonData,
  ActionButtons,
  FilterBar,
  IFilterDatePicker,
  IFilterResult,
  isFilterItem,
  ActionsBar
} from 'scorer-ui-kit';

import photo from '../../assets/placeholder.jpg';
import {
  IRowData,
  ITypeTableData,
} from 'scorer-ui-kit/dist/Tables';
import { tableData, ITableSampleData, columnActionsSample, resultTextTemplateEng, resultTextTemplateJp, clearEng, clearJp, tableDataJp } from '../../helpers/data_samples';
import { filterByCreationDatePicker, sortDataBy } from '../../helpers/sample_table_helpers';
import { emptyCallbackForStory } from '../../helpers';

const Container = styled.div`
  padding: 100px;
`;

const SelectRows = styled.pre`
  color: #666;
  margin-top: 75px;
  background: #eee;
  padding: 10px;
  white-space: normal;
`;

const TableBarWrapper = styled.div`
  margin: 38px 0 26px 0;
`;

export default {
  title: 'Tables/molecules',
  component: TypeTable,
  decorators: [],
  parameters: {
    jsx: { skip: 2 }
  }
};

/** Imagine this data comes from Server :) */
const defaultData: ITableSampleData[] = tableData;

const sortedByDeviceData = sortDataBy(defaultData, 'deviceName', true);

const handleDelete = (deviceId: string) => {
  console.log(`Running deleting job log for device:  ${deviceId}`);
};

const handleDownloadLogs = (deviceId: string) => {
  console.log(`Download job log for device:  ${deviceId}`);
};

const generateConfigButtons = (rowId: string): IconButtonData[] => {
  return (
    [
      {
        icon: 'Delete',
        onClick: () => { handleDelete(rowId) },
      },
      {
        icon: 'Download',
        onClick: () => { handleDownloadLogs(rowId) },
      }
    ]
  )
}


const rowMaker = (rowData: ITableSampleData[]): ITypeTableData => {
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

export const _TableMultiActions = () => {

  const [data, setData] = useState<ITableSampleData[]>(sortedByDeviceData);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(sortedByDeviceData));
  const [_filters, setFilters] = useState<IFilterResult[]>([]);
  const [visibleBar, setVisibleBar] = useState('filterBar');
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const resultsDateFormat = text('Results date format', 'yyyy-MM-dd');

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

  // To implement...
  const hasThumbnail = boolean("Has Thumbnail", true);
  const hasHeaderGroups = boolean("Has Header Groups", true);
  const selectable = boolean("Selectable Rows", true);


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
    const localData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const tempData: ITableSampleData[] = [...localData];

    if ((currentSelected.length === 0)) {
      setData(localData);
      setFilters([])
    } else {
      const filteredData = getFilteredData(currentSelected, tempData);
      setData(filteredData);
      setFilters(currentSelected);
    }

  }, [language])

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data])

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
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
                resultsDateFormat={resultsDateFormat}
              />)}
          {visibleBar === 'actionsBar' && (
            <ActionsBar
              title={language === 'english' ? 'Actions' : 'アクション'}
              finishTextButton={ language === 'english' ? 'Finish' : '為しおわる'}
              finishCallback={handleActionsFinish}
              selectedTemplate={ language === 'english' ? 'Finish' : '[SELECTED] 〜 [TOTAL]件'}
              actionButtons ={[
                {
                  icon:'Delete',
                  text: language === 'english' ? 'Delete' : '消す'
                },
                {
                  icon: 'Download',
                  text: language === 'english' ? 'Download': 'ダウンロード'
                }
                ]}
              />
          )}
        </TableBarWrapper>
        <TypeTable {...{
          columnConfig: columnActionsSample,
          selectable,
          rows,
          hasThumbnail,
          defaultAscending: true,
          hasHeaderGroups
        }}

          selectCallback={emptyCallbackForStory(selectCallback)}
          toggleAllCallback={emptyCallbackForStory(toggleAllCallback)}
          sortCallback={emptyCallbackForStory(sortCallback)}
        />
        <SelectRows>Selected IDs: [{checkedRowIDs(rows).toString()}]</SelectRows>
      </ModalProvider>
    </Container>
  );
};