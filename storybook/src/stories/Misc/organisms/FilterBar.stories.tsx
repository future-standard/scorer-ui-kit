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
} from 'scorer-ui-kit';

import {
  tableData,
  tableDataJp,
  columnConfigSample,
  ITableSampleData,
  columnConfigSampleJp,
  statusValuesEng,
  statusValuesJp,
  loadingTagsEnglish,
  loadingTagsJapanese,
  searchPlaceholderEnglish,
  searchPlaceholderJapanese,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  costRangeEng,
  costRangeJap,
} from '../../data_samples';

import {
  sortDataBy,
  rowMaker,
  filterByStatus,
  filterByPrice,
  filterByName,
  filterByCreationDate
} from '../../helpers';
import { ITypeTableData } from '../../../../../dist/Tables';

export default {
  title: 'Misc/Organism',
  component: 'FilterBar',
  decorators: []
};

const Container = styled.div`
  margin: 20px 0;
`;

const dataInitialState = sortDataBy(tableData, 'deviceName', true);

export const _FilterBar = () => {
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const [data, setData] = useState<ITableSampleData[]>(dataInitialState);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(dataInitialState));

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

  useEffect(() => {
    const newData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    setData(newData);
  }, [language])

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data])

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
      loadingText: language === 'english' ? loadingTagsEnglish : loadingTagsJapanese,
      searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    },
    {
      id: 'priceFilter',
      canHide: true,
      buttonText: language === 'english' ? 'Cost' : '価格',
      list: language === 'english' ? costRangeEng : costRangeJap,
      buttonIcon: 'Usage',
      optionType: 'radio',
      loadingText: language === 'english' ? loadingTagsEnglish : loadingTagsJapanese,
      searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    }
  ]

  const hasShowMore = boolean('Has Show More', true);
  const searchersConfig = object('Search Filters', searchers);
  const dropdownsConfig = object('DropdownFilters', dropdowns);
  const filtersValues = action('onChangeCallback');

  const handleFilters = useCallback((currentSelected: IFilterResult[]) => {
    filtersValues(currentSelected);

    const localData = language === 'english' ? sortDataBy(tableData, 'deviceName', true) : sortDataBy(tableDataJp, 'deviceName', true);
    const tempData: ITableSampleData[] = [...localData];

    if (currentSelected.length === 0) {
      setData(localData);
    }

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

        if(currentFilter.id === 'inputForDate') {
          return filterByCreationDate(accumulator, currentFilter.selected);
        }

        return accumulator;
      }, tempData);

      setData(filteredData);
    }

  }, [filtersValues, language])

  return (
    <Container>
      <FilterBar
        {...{ searchersConfig, dropdownsConfig }}
        onChangeCallback={handleFilters}
        totalResults={rows.length}
        hasShowMore={hasShowMore}
        showMoreText={language === 'english' ? 'Show More' : 'もっと見る'}
        showLessText={language === 'english' ? 'Show less' : 'Show less'}
      />
      <TypeTable {...{ selectCallback, toggleAllCallback, rows, sortCallback, }}
        columnConfig={language === 'english' ? columnConfigSample : columnConfigSampleJp}
        hasStatus
        selectable
        hasThumbnail
        hasTypeIcon
        defaultAscending
        hasHeaderGroups
      />
    </Container>)
}
