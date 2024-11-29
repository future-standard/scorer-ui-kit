import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { select, object, boolean, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import {
  FilterBar,
  ISearchFilter,
  TypeTable,
  IFilterDropdownConfig,
  IFilterResult,
  IFilterDatePicker,
  isFilterItem,
  DateInterval,
} from 'scorer-ui-kit'

import {
  tableData,
  tableDataJp,
  columnConfigSample,
  ITableSampleData,
  columnConfigSampleJp,
  statusValuesEng,
  statusValuesJp,
  genericLoadingJp,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  costRangeEng,
  costRangeJap,
  clearEng,
  clearJp,
  showLessEng,
  showLessJp,
  showMoreEng,
  showMoreJp,
  resultTextTemplateEng,
  resultTextTemplateJp,
} from '../../helpers/data_samples';

import {
  sortDataBy,
  rowMaker,
  filterByStatus,
  filterByPrice,
  filterByName,
  filterByCreationDate,
  filterByCreationDatePicker
} from '../../helpers/sample_table_helpers';
import { ITypeTableData } from 'scorer-ui-kit/dist/Tables';

export default {
  title: 'Filters/Organism',
  component: 'FilterBar',
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

const TypeTableWrapper = styled.div`
margin: 60px 0 20px 0
`;

// const today: Date = new Date();
const before: Date = new Date();
before.setDate(before.getDate() - 5);

const dataInitialState = sortDataBy(tableData, 'deviceName', true);

const getFilteredData = (currentSelected: IFilterResult[], data: ITableSampleData[]): ITableSampleData[] => {


  if (Array.isArray(currentSelected) && (currentSelected.length > 0)) {
    const filteredData: ITableSampleData[] = currentSelected.reduce((accumulator, currentFilter) => {
      if (currentFilter.selected === null) {
        return accumulator;
      };

      if (currentFilter.id === 'dropdownForStatus' && (isFilterItem(currentFilter.selected) || (Array.isArray(currentFilter.selected)))) {
        return filterByStatus(accumulator, currentFilter.selected);
      }

      if ((currentFilter.id === 'priceFilter') && isFilterItem(currentFilter.selected)) {
        return filterByPrice(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'inputForDeviceName' && isFilterItem(currentFilter.selected)) {
        return filterByName(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'inputForDate' && isFilterItem(currentFilter.selected)) {
        return filterByCreationDate(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'datePickerForRuntime' && !isFilterItem(currentFilter.selected) && !Array.isArray(currentFilter.selected)) {
        return filterByCreationDatePicker(accumulator, currentFilter.selected);
      }

      return accumulator;
    }, data);

    return filteredData;
  }

  return data;
}

/**
 * Filter Bar Story Starts
 */
export const _FilterBar = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const [data, setData] = useState<ITableSampleData[]>(dataInitialState);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(dataInitialState));
  const [filters, setFilters] = useState<IFilterResult[]>([]);

  /**
 * Story interaction section
 */
  const singleFilter = boolean('Single Filter', false);
  const hasShowMore = boolean('Has Show More', true);
  // valid formats - https://date-fns.org/v2.25.0/docs/format
  const resultsDateFormat = text('Results date format', 'yyyy-MM-dd HH:mm');

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id)
    newRows[targetRowIndex]._checked = checked;

    setRows(newRows);

  }, [rows, setRows]);


  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];

    newRows.forEach((row) => {
      row._checked = checked;
    });

    setRows(newRows);
  }, [rows, setRows]);

  const sortCallback = useCallback((ascending: boolean, columnId: string) => {
    const unsortedData: ITableSampleData[] = [...data];

    const validKey = columnId as keyof ITableSampleData;
    const sortedData = sortDataBy(unsortedData, validKey, ascending);
    setData(sortedData);

  }, [data]);

  const searchers: ISearchFilter[] = [
    {
      id: 'inputForDeviceName',
      placeholder: language === 'english' ? 'Filter by Device Name...' : 'デバイス名前 フィルター',
      name: language === 'english' ? 'Device Name' : 'デバイス名前',
      // selected: {text:'OK', value: 'OK'}
    },
    {
      id: 'inputForDate',
      placeholder: language === 'english' ? 'Filter by Date' : '年月日 フィルター',
      name: language === 'english' ? 'Date' : '年月日',
      canHide: true,
      showFieldText: language === 'english' ? 'Show Date Input' : '年月日 みる',
    }
  ]

  const dropdowns: IFilterDropdownConfig[] = [
    {
      id: 'dropdownForStatus',
      buttonText: language === 'english' ? 'Status' : 'ステータス',
      list: language === 'english' ? statusValuesEng : statusValuesJp,
      buttonIcon: 'Camera',
      optionType: 'checkbox',
      loadingText: language === 'english' ? 'Loading Status ...' : genericLoadingJp,
      searchPlaceholder: language === 'english' ? 'Status...' : 'ステータス...',
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
      // selected: {text: language === 'english'? 'OK' : 'OKです。', value: 'ok' }
    },
    {
      id: 'priceFilter',
      canHide: true,
      buttonText: language === 'english' ? 'Cost' : '価格',
      list: language === 'english' ? costRangeEng : costRangeJap,
      buttonIcon: 'Usage',
      optionType: 'radio',
      loadingText: language === 'english' ? 'Loading Cost...' : genericLoadingJp,
      searchPlaceholder: language === 'english' ? 'Cost...' : '価格...',
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    }
  ]


  const TODAY: Date = new Date();
  const TWO_WEEKS_BEFORE: Date = new Date();
  TWO_WEEKS_BEFORE.setDate(TODAY.getDate() - 15);


  // Selected example
  const myDate: DateInterval = {
  start: TWO_WEEKS_BEFORE,
  end: TODAY
  }

  const START_RANGE: Date = new Date();
  START_RANGE.setDate(0);
  START_RANGE.setDate(START_RANGE.getDate() - 20);
  const END_RANGE: Date = new Date();
  END_RANGE.setDate(1);
  END_RANGE.setDate(END_RANGE.getDate() + 60);

  const datesRange = {
  start: START_RANGE,
  end: END_RANGE
}


  const datePickers: IFilterDatePicker[] = [
    {
      id: 'datePickerForRuntime',
      dateMode: 'interval',
      buttonText: language === 'english' ? 'Date Range' : '日付範囲',
      buttonIcon: 'DateTime',
      dateTimeTextUpper: language === 'english' ? 'From' : 'から',
      dateTimeTextLower: language === 'english' ? 'To' : 'まで',
      timeZoneTitle: language === 'english' ? 'Timezone' : '時間帯',
      lang: language === 'english' ? 'en' : 'ja',
      selected: myDate,
      availableRange: datesRange,
    }
  ]

  /**
   * objects only for display
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const searchersConfig = object('Search Filters', searchers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dropdownsConfig = object('DropdownFilters', dropdowns);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const datePickersConfig = object('DatePickers', datePickers);
  const filtersValues = action('onChangeCallback');

  const handleFilters = useCallback((currentSelected: IFilterResult[]) => {
    filtersValues(currentSelected);
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

  }, [filtersValues, language])


  useEffect(() => {
    const localizeData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const newData = getFilteredData(filters, localizeData);
    setData(newData);
  }, [filters, language])

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data])

  return (
    <Container>
      <FilterBar
        {...{ singleFilter, hasShowMore }}
        searchersConfig={searchers}
        dropdownsConfig={dropdowns}
        datePickersConfig={datePickers}
        onChangeCallback={handleFilters}
        totalResults={rows.length}
        showMoreText={language === 'english' ? showMoreEng : showMoreJp}
        showLessText={language === 'english' ? showLessEng : showLessJp}
        filtersTitle={language === 'english' ? 'Filters' : 'フィルター'}
        resultTextTemplate={language === 'english' ? resultTextTemplateEng : resultTextTemplateJp}
        clearText={language === 'english' ? clearEng : clearJp}
        resultsDateFormat={resultsDateFormat}
      />
      <TypeTableWrapper>
        <TypeTable {...{ selectCallback, toggleAllCallback, rows, sortCallback, }}
          columnConfig={language === 'english' ? columnConfigSample : columnConfigSampleJp}
          hasStatus
          selectable
          hasThumbnail
          hasTypeIcon
          defaultAscending
          hasHeaderGroups
        />
      </TypeTableWrapper>
    </Container>)
}