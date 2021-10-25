import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { select, object, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import {
  FilterBar,
  ISearchFilter,
  TypeTable,
  IFilterDropdownConfig,
  IFilterResult,
  IFilterDatePicker,
} from 'scorer-ui-kit';

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
import { ITypeTableData } from '../../../../../dist/Tables';
import { IDatePickerResult } from '../../../../../dist/Filters/FilterTypes';

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

const dataInitialState = sortDataBy(tableData, 'deviceName', true);


const getFilteredData = (currentSelected: IFilterResult[], data: ITableSampleData[], datePickersSelected: IDatePickerResult[]): ITableSampleData[] => {


  if (Array.isArray(currentSelected) && (currentSelected.length > 0)) {
    const filteredData: ITableSampleData[] = currentSelected.reduce((accumulator, currentFilter) => {
      if (currentFilter.id === 'dropdownForStatus') {
        return filterByStatus(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'priceFilter') {
        return filterByPrice(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'inputForDeviceName') {
        return filterByName(accumulator, currentFilter.selected);
      }

      if (currentFilter.id === 'inputForDate') {
        return filterByCreationDate(accumulator, currentFilter.selected);
      }

      return accumulator;
    }, data);

    console.log('Picker value', (datePickersSelected !== undefined) && (datePickersSelected.length > 0));

    if ((datePickersSelected !== undefined) && (datePickersSelected.length > 0)) {

      const filteredByPickers: ITableSampleData[] = datePickersSelected.reduce((accumulator, currentPicker) => {
        if (currentPicker.id === 'datePickerForRuntime' && (currentPicker.selected !== null)) {
          return filterByCreationDatePicker(accumulator, currentPicker.selected);
        }
        return accumulator;
      }, filteredData);

      // finish the function with pickers filter
      return filteredByPickers;
    }

    return filteredData;
  } else if ((datePickersSelected !== undefined) && (datePickersSelected.length > 0)) {
    const filteredByPickers: ITableSampleData[] = datePickersSelected.reduce((accumulator, currentPicker) => {
      if (currentPicker.id === 'datePickerForRuntime' && (currentPicker.selected !== null)) {
        return filterByCreationDatePicker(accumulator, currentPicker.selected);
      }
      return accumulator;
    }, data);

    return filteredByPickers;
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
  const [dateFilters, setDateFilters] = useState<IDatePickerResult[]>([]);

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
      name: language === 'english' ? 'Device Name' : 'デバイス名前'
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

  const datePickers: IFilterDatePicker[] = [
    {
      id: 'datePickerForRuntime',
      dateMode: 'interval',
      timeMode: 'off',
      buttonText: 'Date Range',
      buttonIcon: 'DateTime'
    }
  ]

  const allowMultiFilter = boolean('Allow Multi Filter', false);
  const hasShowMore = boolean('Has Show More', true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const searchersConfig = object('Search Filters', searchers);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dropdownsConfig = object('DropdownFilters', dropdowns);
  const filtersValues = action('onChangeCallback');

  const handleFilters = useCallback((currentSelected: IFilterResult[], datePickersSelected?: IDatePickerResult[]) => {
    const change = datePickersSelected ? [...currentSelected, ...datePickersSelected] : currentSelected;
    filtersValues(change);


    const localData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const tempData: ITableSampleData[] = [...localData];

    console.log('datePickers', datePickersSelected);
    if ((currentSelected.length === 0) && datePickersSelected === undefined) {
      setData(localData);
      setFilters([])
      setDateFilters([])
    } else {
      const filteredData = datePickersSelected
        ? getFilteredData(currentSelected, tempData, datePickersSelected)
        : getFilteredData(currentSelected, tempData, []);

      setData(filteredData);
      setFilters(currentSelected);
      if (datePickersSelected) {
        setDateFilters(datePickersSelected);
      }
    }

  }, [filtersValues, language])


  useEffect(() => {
    const localizeData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const newData = getFilteredData(filters, localizeData, dateFilters);
    setData(newData);
  }, [dateFilters, filters, language])

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data])

  return (
    <Container>
      <FilterBar
        {...{ allowMultiFilter, hasShowMore }}
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
