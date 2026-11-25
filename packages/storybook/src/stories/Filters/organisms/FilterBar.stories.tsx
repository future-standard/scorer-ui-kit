import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useCallback, useEffect, useMemo, useState } from 'react';
import {
  FilterBar,
  type IFilterDatePicker,
  type IFilterDropdownConfig,
  type IFilterResult,
  type ISearchFilter,
  type ITypeTableData,
  isFilterItem,
  TypeTable,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { sceneOnly, withDates } from '../../helpers';
import {
  clearEng,
  clearJp,
  columnConfigSample,
  columnConfigSampleJp,
  costRangeEng,
  costRangeJap,
  emptyResultsEnglish,
  emptyResultsJapanese,
  genericLoadingJp,
  type ITableSampleData,
  resultTextTemplateEng,
  resultTextTemplateJp,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  showLessEng,
  showLessJp,
  showMoreEng,
  showMoreJp,
  statusValuesEng,
  statusValuesJp,
  tableData,
  tableDataJp,
} from '../../helpers/data_samples';
import { dataContentDays, datesRange, InitialSelectedDate } from '../../helpers/datePicker_sample';
import {
  filterByCreationDate,
  filterByCreationDatePicker,
  filterByName,
  filterByPrice,
  filterByStatus,
  rowMaker,
  sortDataBy,
} from '../../helpers/sample_table_helpers';

const TypeTableWrapper = styled.div`
  margin: 60px 0 20px 0;
`;

const dataInitialState = sortDataBy(tableData, 'deviceName', true);

const getFilteredData = (
  currentSelected: IFilterResult[],
  data: ITableSampleData[]
): ITableSampleData[] => {
  if (Array.isArray(currentSelected) && currentSelected.length > 0) {
    const filteredData: ITableSampleData[] = currentSelected.reduce(
      (accumulator, currentFilter) => {
        if (currentFilter.selected === null) {
          return accumulator;
        }

        if (
          currentFilter.id === 'dropdownForStatus' &&
          (isFilterItem(currentFilter.selected) || Array.isArray(currentFilter.selected))
        ) {
          return filterByStatus(accumulator, currentFilter.selected);
        }

        if (currentFilter.id === 'priceFilter' && isFilterItem(currentFilter.selected)) {
          return filterByPrice(accumulator, currentFilter.selected);
        }

        if (currentFilter.id === 'inputForDeviceName' && isFilterItem(currentFilter.selected)) {
          return filterByName(accumulator, currentFilter.selected);
        }

        if (currentFilter.id === 'inputForDate' && isFilterItem(currentFilter.selected)) {
          return filterByCreationDate(accumulator, currentFilter.selected);
        }

        if (
          currentFilter.id === 'datePickerForRuntime' &&
          !isFilterItem(currentFilter.selected) &&
          !Array.isArray(currentFilter.selected)
        ) {
          return filterByCreationDatePicker(accumulator, currentFilter.selected);
        }

        return accumulator;
      },
      data
    );

    return filteredData;
  }

  return data;
};

const buildSearchers = (en: boolean): ISearchFilter[] => [
  {
    id: 'inputForDeviceName',
    placeholder: en ? 'Filter by Device Name...' : 'デバイス名前 フィルター',
    name: en ? 'Device Name' : 'デバイス名前',
  },
  {
    id: 'inputForDate',
    placeholder: en ? 'Filter by Date' : '年月日 フィルター',
    name: en ? 'Date' : '年月日',
    canHide: true,
    showFieldText: en ? 'Show Date Input' : '年月日 みる',
  },
];

const buildDropdowns = (en: boolean): IFilterDropdownConfig[] => {
  const footerTexts = {
    resetText: en ? 'Reset' : 'リセット',
    cancelText: en ? 'Cancel' : 'キャンセル',
    closeText: en ? 'Close' : '閉じる',
    applyText: en ? 'Apply' : '適用',
    descendingText: en ? 'Descending' : '降順',
    ascendingText: en ? 'Ascending' : '昇順',
    searchResultText: en ? searchTemplateResultEnglish : searchTemplateResultJapanese,
    emptyResultText: en ? emptyResultsEnglish : emptyResultsJapanese,
    hasReset: true,
    hasApply: true,
    isListAscending: true,
    hasOptionsFilter: true,
  };
  return [
    {
      id: 'dropdownForStatus',
      buttonText: en ? 'Status' : 'ステータス',
      list: en ? statusValuesEng : statusValuesJp,
      buttonIcon: 'Camera',
      optionType: 'checkbox',
      loadingText: en ? 'Loading Status ...' : genericLoadingJp,
      searchPlaceholder: en ? 'Status...' : 'ステータス...',
      ...footerTexts,
    },
    {
      id: 'priceFilter',
      canHide: true,
      buttonText: en ? 'Cost' : '価格',
      list: en ? costRangeEng : costRangeJap,
      buttonIcon: 'Usage',
      optionType: 'radio',
      loadingText: en ? 'Loading Cost...' : genericLoadingJp,
      searchPlaceholder: en ? 'Cost...' : '価格...',
      ...footerTexts,
    },
  ];
};

// valid formats - https://date-fns.org/v2.25.0/docs/format
const buildDatePickers = (en: boolean): IFilterDatePicker[] => [
  {
    id: 'datePickerForRuntime',
    dateMode: 'interval',
    buttonText: en ? 'Date Range' : '日付範囲',
    buttonIcon: 'DateTime',
    dateTimeTextUpper: en ? 'From' : 'から',
    dateTimeTextLower: en ? 'To' : 'まで',
    timeZoneTitle: en ? 'Timezone' : '時間帯',
    cancelText: en ? 'Cancel' : 'キャンセル',
    applyText: en ? 'Apply' : '完了',
    lang: en ? 'en' : 'ja',
    selected: InitialSelectedDate,
    availableRange: datesRange,
    contentDays: dataContentDays,
    hasApply: true,
  },
];

// Editing the object control turns the picker's Dates into ISO strings; restore them.
const withPickerDates = (pickers: IFilterDatePicker[] = []): IFilterDatePicker[] =>
  pickers.map((picker) => ({
    ...picker,
    selected: withDates(picker.selected),
    initialValue: withDates(picker.initialValue),
    availableRange: withDates(picker.availableRange),
    contentDays: withDates(picker.contentDays),
  }));

// Built once: rebuilding per render would hand FilterBar new config objects on every render.
const JA_SEARCHERS = buildSearchers(false);
const JA_DROPDOWNS = buildDropdowns(false);
const JA_DATE_PICKERS = buildDatePickers(false);

type Args = ComponentProps<typeof FilterBar> & {
  language: 'english' | 'japanese';
  onStatusReset: () => void;
  onStatusCancel: () => void;
  onPriceReset: () => void;
  onPriceCancel: () => void;
};

const Scene = ({
  language,
  onStatusReset,
  onStatusCancel,
  onPriceReset,
  onPriceCancel,
  searchersConfig,
  dropdownsConfig,
  datePickersConfig,
  filtersTitle,
  showMoreText,
  showLessText,
  resultTextTemplate,
  clearText,
  totalResults: _totalResults,
  onChangeCallback,
  ...filterBarProps
}: Args) => {
  const en = language === 'english';
  const localized = <T,>(argValue: T, jaValue: T) => (en ? argValue : jaValue);

  // The footer spies are attached here, not inside the config arg: an edit in the object control
  // re-creates nested functions as inert stubs that no longer log to the Actions panel.
  const dropdowns = useMemo(() => {
    const footer: Record<string, Partial<IFilterDropdownConfig>> = {
      dropdownForStatus: { onResetCallback: onStatusReset, onCancelCallback: onStatusCancel },
      priceFilter: { onResetCallback: onPriceReset, onCancelCallback: onPriceCancel },
    };
    return (en ? (dropdownsConfig ?? []) : JA_DROPDOWNS).map((dropdown) => ({
      ...dropdown,
      ...(footer[dropdown.id] ?? {}),
    }));
  }, [en, dropdownsConfig, onStatusReset, onStatusCancel, onPriceReset, onPriceCancel]);
  const datePickers = useMemo(
    () => (en ? withPickerDates(datePickersConfig) : JA_DATE_PICKERS),
    [en, datePickersConfig]
  );

  const [data, setData] = useState<ITableSampleData[]>(dataInitialState);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(dataInitialState));
  const [filters, setFilters] = useState<IFilterResult[]>([]);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, _checked: checked } : row))
    );
  }, []);

  const toggleAllCallback = useCallback((checked: boolean) => {
    setRows((current) => current.map((row) => ({ ...row, _checked: checked })));
  }, []);

  const sortCallback = useCallback(
    (ascending: boolean, columnId: string) => {
      const unsortedData: ITableSampleData[] = [...data];

      const validKey = columnId as keyof ITableSampleData;
      const sortedData = sortDataBy(unsortedData, validKey, ascending);
      setData(sortedData);
    },
    [data]
  );

  const handleFilters = useCallback(
    (currentSelected: IFilterResult[]) => {
      onChangeCallback?.(currentSelected);
      const localData = en
        ? sortDataBy(tableData, 'deviceName', true)
        : sortDataBy(tableDataJp, 'deviceName', true);
      const tempData: ITableSampleData[] = [...localData];

      if (currentSelected.length === 0) {
        setData(localData);
        setFilters([]);
      } else {
        const filteredData = getFilteredData(currentSelected, tempData);
        setData(filteredData);
        setFilters(currentSelected);
      }
    },
    [onChangeCallback, en]
  );

  useEffect(() => {
    const localizeData = en
      ? sortDataBy(tableData, 'deviceName', true)
      : sortDataBy(tableDataJp, 'deviceName', true);
    const newData = getFilteredData(filters, localizeData);
    setData(newData);
  }, [filters, en]);

  useEffect(() => {
    setRows(rowMaker(data));
  }, [data]);

  return (
    <>
      <FilterBar
        {...filterBarProps}
        searchersConfig={localized(searchersConfig, JA_SEARCHERS)}
        dropdownsConfig={dropdowns}
        datePickersConfig={datePickers}
        onChangeCallback={handleFilters}
        totalResults={rows.length}
        showMoreText={localized(showMoreText, showMoreJp)}
        showLessText={localized(showLessText, showLessJp)}
        filtersTitle={localized(filtersTitle, 'フィルター')}
        resultTextTemplate={localized(resultTextTemplate, resultTextTemplateJp)}
        clearText={localized(clearText, clearJp)}
      />
      <TypeTableWrapper>
        <TypeTable
          {...{ selectCallback, toggleAllCallback, rows, sortCallback }}
          columnConfig={en ? columnConfigSample : columnConfigSampleJp}
          hasStatus
          selectable
          hasThumbnail
          hasTypeIcon
          defaultAscending
          hasHeaderGroups
        />
      </TypeTableWrapper>
    </>
  );
};

const meta = {
  title: 'Filters/organisms/FilterBar',
  component: FilterBar,
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    totalResults: sceneOnly('Set by the scene: the rows left in the table below'),
    // FilterBar declares isLoading but never reads it and spreads the received props onto its container,
    // so a value here only reaches the DOM (React warning).
    isLoading: sceneOnly('Declared but unused by the component'),
  },
  args: {
    language: 'japanese',
    singleFilter: false,
    hasShowMore: true,
    resultsDateFormat: 'yyyy-MM-dd HH:mm',
    filtersTitle: 'Filters',
    showMoreText: showMoreEng,
    showLessText: showLessEng,
    resultTextTemplate: resultTextTemplateEng,
    clearText: clearEng,
    totalResults: 0,
    searchersConfig: buildSearchers(true),
    dropdownsConfig: buildDropdowns(true),
    datePickersConfig: buildDatePickers(true),
    onChangeCallback: fn(),
    onStatusReset: fn(),
    onStatusCancel: fn(),
    onPriceReset: fn(),
    onPriceCancel: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
