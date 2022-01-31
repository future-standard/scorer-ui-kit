import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { TypeTable, PageHeader, Content, Label, RadioButton, IFilterItem, IMediaType, FilterBar, IFilterDropdownConfig, isFilterItem } from 'scorer-ui-kit';
import { IRowData, ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';
import i18n from '../locales/setup';
import { getTimeSince } from '../utils';
import { IFiltersSelections, ISearchFilter } from '../../../dist/Filters/FilterTypes';
import { useTranslation } from 'react-i18next';
import { useQueryParams } from '../hooks/useQueryParams';

const Container = styled.div`
  margin: 100px 200px;
`

const LangWrapper = styled.div`
  margin: 40px 0;
`;

const OptionsWrapper = styled.div`
  margin: 4px 0;
`

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  ${({ theme }) => css`
  font-family: ${theme.fontFamily.ui};
  color: ${theme.typography.pageHeader.mainTitle.color};
`}
`;

const SelectRows = styled.pre`
  color: #666;
  margin-top: 75px;
  background: #eee;
  padding: 10px;
  white-space: normal;
`;

const StyledFilterBar = styled(FilterBar)`
  margin: 40px 0;
`;

export const getStatusParams = (selected: IFilterItem[]): string => {
  return selected.reduce((result, filterItem, index) => {
    if (index === 0) {
      return `${filterItem.value}`;
    }

    return `${result}, ${filterItem.value}`;
  }, '')
}

export const filterByStatus = (data: ITableData[], selected: IFilterItem[]): ITableData[] => {
  const updatedData: ITableData[] = [];

  selected.forEach(({ value }: IFilterItem) => {
    data.forEach((item) => {
      if (item.status === value) {
        updatedData.push(item);
      }
    });
  })

  return updatedData;
}



export const filterByDeviceName = (data: ITableData[], selected: IFilterItem): ITableData[] => {
  return data.filter((item) => {
    const lowerValue = item.name.toLowerCase()
    return lowerValue.includes(selected.text.toLocaleLowerCase());
  })
}

export interface ITableData {
  id: string
  name: string
  image?: string
  mediaUrl?: string
  mediaType?: IMediaType
  status: string
  created: Date
  unitValue: number
  unitText: string
  price: number
  _checked?: boolean
}

const rawData: ITableData[] = [
  {
    id: 'device-id-1',
    name: 'Device Name',
    image: "https://i.picsum.photos/id/348/3872/2592.jpg?hmac=I51bqSjuTk6zKHgtJDpMLY3kSSfAXdB8AHGmWf-Eq1Q",
    mediaUrl: "/scorer-ui-kit/traffic.mp4",
    mediaType: 'video',
    status: 'ok',
    created: new Date(),
    unitValue: 242,
    unitText: 'mb',
    price: 20000
  },
  {
    id: 'device-id-2',
    name: 'Another Device',
    image: "https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw",
    mediaUrl: "https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw",
    mediaType: 'img',
    status: 'caution',
    created: new Date('10/1/19'),
    unitValue: 2.1,
    unitText: 'gb',
    price: 4000,
    _checked: true
  },
  {
    id: 'device-id-3',
    name: 'Old Device',
    image: "http://placekitten.com/1934/3102",
    mediaUrl: "http://placekitten.com/1934/3102",
    mediaType: 'img',
    status: 'offline',
    created: new Date('03/22/20'),
    unitValue: 2.1,
    unitText: 'tb',
    price: 7000
  },
  {
    id: 'device-id-4',
    name: 'Magic Edge Cloud',
    image: "http://placekitten.com/2934/3102",
    mediaUrl: "http://wrong-url-placekitten.com/2934/3102",
    mediaType: 'img',
    status: 'warning',
    created: new Date('04/02/20'),
    unitValue: 153,
    unitText: 'mb',
    price: 25000
  },
  {
    id: 'device-id-5',
    name: 'Special Camera',
    status: 'ok',
    created: new Date('06/16/20'),
    unitValue: 153,
    unitText: 'mb',
    price: 25000
  }
];

const initSelections: IFiltersSelections = {
  'status': {
    id: 'status',
    type: 'dropdown',
    selected: null,
    order: 1
  },
  'name': {
    id: 'name',
    type: 'search',
    selected: null,
    order: 2,
  }
}

export enum FILTER_PARAMS {
  status = 'status',
  name = 'name'
}

const TablePage: React.FC = () => {
  const [langSelect, setLangSelect] = useState('ja');
  const [filterValues, setFilerValues] = useState<IFiltersSelections>(initSelections);
  const { t } = useTranslation();
  const { getParam, updateParam } = useQueryParams();
  const statusParam = getParam('status');
  const nameParam = getParam('name');

  const generateRows = useCallback((data: ITableData[]): ITypeTableData => {

    const newRows: ITypeTableData = data.map(({ id, name, image, mediaUrl, mediaType, status, created, unitValue, unitText, price, _checked }) => {

      const row: IRowData = {
        _checked: _checked || false,
        id,
        header: { image, mediaUrl, mediaType },
        columns: [
          { text: name },
          { text: t(status) },
          { text: getTimeSince(created) },
          { text: `${unitValue}`, unit: unitText },
          { text: `¥${price}` }
        ]
      }
      return row;
    })

    return newRows;
  }, [t]);

  const [rows, setRows] = useState<ITypeTableData>(generateRows(rawData));

  const onLanguageChange = useCallback((newLang: string | number) => {
    if (typeof newLang === 'number') {
      return;
    }

    console.log('setting', newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    setLangSelect(newLang)
  }, []);

  const columnConfig: ITableColumnConfig[] = [
    {
      header: i18n.t('deviceName'),
      sortable: true,
      cellStyle: 'firstColumn',
    },
    {
      header: i18n.t('status'),
      sortable: false,
      cellStyle: 'lowImportance',
      alignment: 'center',
      hasCopyButton: true
    },
    {
      header: i18n.t('created'),
      sortable: false,
      cellStyle: 'lowImportance',
      alignment: 'center',
      hasCopyButton: true
    },
    {
      header: i18n.t('usage'),
      sortable: false,
      cellStyle: 'normalImportance',
      alignment: 'right',
      showUnit: true
    },
    {
      header: i18n.t('cost'),
      sortable: true,
      cellStyle: 'highImportance',
      alignment: 'right',
      hasCopyButton: true
    }
  ];

  const statusValues: IFilterItem[] = useMemo(() =>
    [
      { text: t('statusTypes.ok'), value: 'ok' },
      { text: t('statusTypes.caution'), value: 'caution' },
      { text: t('statusTypes.warning'), value: 'warning' },
      { text: t('statusTypes.offline'), value: 'offline' }
    ]
    , [t]);


  const dropdownsConfig: IFilterDropdownConfig[] = [
    {
      id: 'status',
      buttonText: i18n.t('status'),
      list: statusValues,
      buttonIcon: 'Camera',
      optionType: 'checkbox',
      searchPlaceholder: i18n.t('status'),
      searchResultText: i18n.t('searchPlaceholder')
    }
  ]

  const searchersConfig: ISearchFilter[] = [
    {
      id: 'name',
      placeholder: t('filterByName'),
      name: t('deviceName'),
    }
  ]

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

  const onChangeObjCallback = useCallback((currentSelected: IFiltersSelections) => {

    if (Object.keys(currentSelected).length > 0) {

      const updatedData: ITableData[] = Object.entries(currentSelected).map(([key, value]) => value).reduce((result, filterObj) => {
        const { id, selected } = filterObj;

        if (selected === null) {
          if (id in FILTER_PARAMS) {
            updateParam(id, '');
          }

          return result;
        };

        if (id === 'status' && Array.isArray(selected)) {
          if (id in FILTER_PARAMS) {
            updateParam(id, getStatusParams(selected));
          }
          return filterByStatus(result, selected)
        }

        if (id === 'name' && isFilterItem(selected)) {
          if (id in FILTER_PARAMS) {
            updateParam(id, selected.text);
          }

          return filterByDeviceName(result, selected);
        }

        return rawData;
      }, rawData);


      setRows(generateRows(updatedData));
    }
    setFilerValues(currentSelected);
  }, [generateRows, updateParam]);


  // Query params update is not working correctly, it overwrites the callbacks :(
  const reviewParamsChange = useCallback(() => {

    let hasStatusUpdated = false;
    let hasNameParaUpdated = false;
    const results: IFilterItem[] = [];

    const statusArray = statusParam.split('%2C+');

    const newStatusSelected = statusArray.reduce((result, statusVal) => {
      const foundItem = statusValues.find(({ value }) => statusVal === value);
      if (foundItem) {
        const newFilterItem: IFilterItem = { text: foundItem.text, value: foundItem.value }
        result.push(newFilterItem);
      }

      return result;

    }, results);

    if (filterValues['status'].selected === null && newStatusSelected.length > 0) {
      hasStatusUpdated = true;
    }

    if (Array.isArray(filterValues['status'].selected) && filterValues['status'].selected.length !== newStatusSelected.length) {
      hasStatusUpdated = true;
    }

    if (Array.isArray(filterValues['status'].selected)) {
      let equalLength = 0
      filterValues['status'].selected.forEach(({ value }) => {
        newStatusSelected.forEach((newItem) => {
          if (value === newItem.value) {
            equalLength++;
          }
        })
      })
      if (equalLength !== filterValues['status'].selected.length) {
        hasStatusUpdated = true;
      }
    }

    if (filterValues['name'].selected === null && nameParam.length > 0) {
      hasNameParaUpdated = true;
    }

    if (isFilterItem(filterValues['name'].selected) && (filterValues['name'].selected.text !== nameParam)) {
      hasNameParaUpdated = true;
    }

    if (!hasNameParaUpdated && !hasStatusUpdated) {
      console.log('*** nothing has updated ***')
      return;
    }

    const newFilterValues: IFiltersSelections = {};

    console.log('!!!! updating query params!!!!');
    if (hasNameParaUpdated) {
      const selected: IFilterItem | null = nameParam === '' ? null : { text: nameParam, value: nameParam };
      newFilterValues['name'] = { ...filterValues['name'], selected };
    } else {
      newFilterValues['name'] = { ...filterValues['name'] }
    }

    if (hasStatusUpdated) {
      const selected = newStatusSelected.length === 0 ? null : newStatusSelected;
      newFilterValues['status'] = { ...filterValues['status'], selected }
    } else {
      newFilterValues['status'] = { ...filterValues['status'] }
    }

    setFilerValues(newFilterValues);

  }, [filterValues, nameParam, statusParam, statusValues])


  useEffect(() => {
    reviewParamsChange();
  }, [nameParam, reviewParamsChange, statusParam]);

  return <Container>
    <Content>
      <PageHeader title="Table Example" areaTitle="Examples" areaHref={'/'} />
      <StyledFilterBar
        {...{ dropdownsConfig, searchersConfig, onChangeObjCallback }}
        controlledValue={filterValues}
        totalResults={rows.length}
        clearText={t('clearText')}
      />
      <TypeTable selectable={true} {...{ columnConfig, rows, selectCallback, toggleAllCallback, hasThumbnail: true }} />
      <SelectRows>Selected IDs: [{checkedRowIDs(rows).toString()}]</SelectRows>
      <LangWrapper>
        <Title>Update language</Title>
        <OptionsWrapper>
          <Label
            htmlFor="option1"
            labelText="Japanese"
            rightAlign
          >
            <RadioButton
              currentChecked={langSelect}
              id="option1"
              name="option1"
              onChangeCallback={onLanguageChange}
              value="ja"

            />
          </Label>
        </OptionsWrapper>
        <OptionsWrapper>
          <Label
            htmlFor="option2"
            labelText="English"
            rightAlign
          >
            <RadioButton
              currentChecked={langSelect}
              id="option2"
              name="option2"
              onChangeCallback={onLanguageChange}
              value="en"
            />
          </Label>
        </OptionsWrapper>
      </LangWrapper>
    </Content>
  </Container>
};

const checkedRowIDs = (rows: ITypeTableData) => {
  const ids: number | string[] = [];

  rows.forEach((row) => {
    if (row._checked && row.id) {
      ids.push(row.id.toString());
    }
  });

  return ids;

}

export default TablePage;