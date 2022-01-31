import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { TypeTable, PageHeader, Content, Label, RadioButton, IFilterItem, IMediaType, FilterBar, IFilterDropdownConfig } from 'scorer-ui-kit';
import { IRowData, ITableColumnConfig, ITypeTableData } from 'scorer-ui-kit/dist/Tables';
import i18n from '../locales/setup';
import { getTimeSince } from '../utils';


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

interface ITableData {
  id: string
  name: string
  image: string
  mediaUrl: string
  mediaType: IMediaType
  status: string
  created: Date
  unitValue: number
  unitText: string
  price: number
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
    price: 4000
  }
]

const initialRows: ITypeTableData = [
  {
    id: 'device-id-1',
    header: {
      image: "https://i.picsum.photos/id/348/3872/2592.jpg?hmac=I51bqSjuTk6zKHgtJDpMLY3kSSfAXdB8AHGmWf-Eq1Q",
      mediaUrl: "/scorer-ui-kit/traffic.mp4",
      mediaType: 'video',
    },
    columns:
      [
        { text: 'Device Name', href: '#' },
        { text: i18n.t('statusTypes.ok') },
        { text: 'Just Now' },
        { text: '242', unit: 'mb' },
        { text: '¥20,000' }
      ]
  },
  {
    _checked: true,
    id: 'device-id-2',
    header: {
      image: "https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw",
      mediaUrl: "https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw",
      mediaType: 'img',
    },
    columns:
      [
        { text: 'Another Device', href: '#' },
        { text: '1st October 2019' },
        { text: '2.1', unit: 'gb' },
        { text: '¥4,000' }
      ],
  },
  {
    id: 'device-id-3',
    header: {
      image: "http://placekitten.com/1934/3102",
      mediaUrl: "http://placekitten.com/1934/3102",
      mediaType: 'img'
    },
    columns:
      [
        { text: 'Old Device', href: '#' },
        { text: '22nd March 2020' },
        { text: '2.1', unit: 'tb' },
        { text: '¥7,000' }
      ],
  },
  {
    id: 'device-id-4',
    header: {
      image: "http://placekitten.com/2934/3102",
      mediaUrl: "http://wrong-url-placekitten.com/2934/3102",
      mediaType: 'img'
    },
    columns:
      [
        { text: 'Magic Edge Cloud', href: '#' },
        { text: '2nd April 2020' },
        { text: '153', unit: 'mb' },
        { text: '¥25,000' }
      ]
  },
  {
    id: 'device-id-5',
    columns:
      [
        { text: 'Special Camera', href: '#' },
        { text: '16th June 2020' },
        { text: '153', unit: 'mb' },
        { text: '¥25,000' }
      ]
  }
];


const generateRows = (data: ITableData[]): ITypeTableData => {

  const newRows: ITypeTableData = data.map(({ id, name, image, mediaUrl, mediaType, status, created, unitValue, unitText, price }) => {

    const row: IRowData = {
      id,
      header: { image, mediaUrl, mediaType },
      columns: [
        { text: name },
        { text: i18n.t(status) },
        { text: getTimeSince(created) },
        { text: `${unitValue}`, unit: unitText },
        { text: `¥${price}` }
      ]
    }
    return row;
  })

  return newRows;
};


const TablePage: React.FC = () => {
  const [langSelect, setLangSelect] = useState('ja');
  const [rows, setRows] = useState<ITypeTableData>(generateRows(rawData))


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

  const statusValues: IFilterItem[] = [
    { text: i18n.t('ok'), value: 'good' },
    { text: i18n.t('caution'), value: 'caution' },
    { text: i18n.t('warning'), value: 'danger' },
    { text: i18n.t('offline'), value: 'neutral' }
  ]

  const dropdownsConfig: IFilterDropdownConfig[] = [
    {
      id: 'filter-status',
      buttonText: i18n.t('status'),
      list: statusValues,
      buttonIcon: 'Camera',
      optionType: 'checkbox',
      searchPlaceholder: i18n.t('status'),
      searchResultText: i18n.t('searchPlaceholder')
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


  return <Container>
    <Content>
      <PageHeader title="Table Example" areaTitle="Examples" areaHref={'/'} />
      <StyledFilterBar
        {...{ dropdownsConfig }}
        totalResults={rows.length}
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