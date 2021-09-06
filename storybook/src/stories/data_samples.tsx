import { IFilterItem } from 'scorer-ui-kit'
import {
  IDeviceStatus,
  ITableColumnConfig,
} from 'scorer-ui-kit/dist/Tables';

interface ITableSampleData  {
  id: string
  deviceName: string
  deviceLink: string
  status: IDeviceStatus
  statusText: string
  created: string
  totalTime: string
  usage: number
  usageUnit: string
  cost: number
}


const statusValuesEng: IFilterItem[] = [
  {text: 'OK', value: 'good'},
  {text: 'Caution', value: 'caution'},
  {text: 'Warning', value: 'danger'},
  {text: 'Offline', value: 'neutral'}
]

const statusValuesJp: IFilterItem[] = [
  {text: 'OKです。', value: 'good'},
  {text: '注意事項', value: 'caution'},
  {text: '警告', value: 'danger'},
  {text: 'オフライン', value: 'neutral'}
]

const costRangeEng: IFilterItem[] = [
  {text: 'Less than 5000', value: 5000},
  {text: 'Less than 10000', value: 10000},
  {text: 'Less than 20000', value: 20000}
]

const costRangeJap: IFilterItem[] = [
  {text: '以下 5000', value: 5000},
  {text: '以下 10000', value: 10000},
  {text: '以下 20000', value: 20000}
]

/** Imagine this data comes from Server :) */
const tableData : ITableSampleData[] = [
  {
    id: 'device-1',
    deviceName: 'Device Name',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: 'Just Now',
    totalTime: '00:10:10',
    usage: 242,
    usageUnit: 'mb',
    cost: 20000,
  },
  {
    id: 'device-2',
    deviceName: 'Another Device',
    deviceLink: '',
    status: 'danger',
    statusText: 'Warning',
    created: '1st October 2019',
    totalTime: '00:40:12',
    usage: 2.1,
    usageUnit: 'gb',
    cost: 4000,
  },
  {
    id: 'device-3',
    deviceName: 'Old Device',
    deviceLink: '#',
    status: 'danger',
    statusText: 'Warning',
    created: '22nd March 2020',
    totalTime: '00:70:00',
    usage: 2.1,
    usageUnit: 'tb',
    cost: 7000,
  },
  {
    id: 'device-4',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '00:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-5',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'caution',
    statusText: 'Caution',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-6',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-7',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-8',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'neutral',
    statusText: 'Offline',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-9',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-10',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    totalTime: '01:30:00',
    created: '2nd April 2020',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-11',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OK',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
];

/** Imagine this data comes from Server :) */
const tableDataJp : ITableSampleData[] = [
  {
    id: 'device-1',
    deviceName: 'Device Name',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    created: '今作られた',
    totalTime: '00:10:10',
    usage: 242,
    usageUnit: 'mb',
    cost: 20000,
  },
  {
    id: 'device-2',
    deviceName: 'Another Device',
    deviceLink: '',
    status: 'danger',
    statusText: '注意事項',
    created: '1st October 2019',
    totalTime: '00:40:12',
    usage: 2.1,
    usageUnit: 'gb',
    cost: 4000,
  },
  {
    id: 'device-3',
    deviceName: 'Old Device',
    deviceLink: '#',
    status: 'danger',
    statusText: '警告',
    created: '22nd March 2020',
    totalTime: '00:60:00',
    usage: 2.1,
    usageUnit: 'tb',
    cost: 7000,
  },
  {
    id: 'device-4',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです',
    created: '2nd April 2020',
    totalTime: '00:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-5',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'caution',
    statusText: '注意事項',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-6',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-7',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-8',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'neutral',
    statusText: 'オフライン',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-9',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
  {
    id: 'device-10',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    totalTime: '01:10:00',
    created: '4th May 2020',
    usage:  153,
    usageUnit: 'mb',
    cost: 18000,
  },
  {
    id: 'device-11',
    deviceName: 'Magic Edge Cloud',
    deviceLink: '#',
    status: 'good',
    statusText: 'OKです。',
    created: '2nd April 2020',
    totalTime: '01:30:00',
    usage:  153,
    usageUnit: 'mb',
    cost: 25000,
  },
];

const columnConfigSample : ITableColumnConfig[] = [
  {
    columnId: 'deviceName',
    groupTitle: 'Device',
    header: 'Device Name',
    sortable: true,
    sortActive: true,
    cellStyle: 'firstColumn',
  },
  {
    columnId: 'status',
    groupTitle: 'Device',
    header: 'Status',
    sortable: true,
    showStatus: true,
    cellStyle: 'normalImportance',
  },
  {
    columnId: 'created',
    groupTitle: 'Device',
    header: 'Created',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center',
    hasCopyButton: true
  },
  {
    columnId: 'run',
    groupTitle: 'Time',
    header: 'Total Run Time',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'left',
    hasCopyButton: true
  },
  {
    columnId: 'usage',
    header: 'Usage',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment: 'right',
    showUnit: true
  },
  {
    columnId: 'cost',
    header: 'Cost',
    sortable: true,
    cellStyle: 'highImportance',
    alignment: 'right',
    hasCopyButton: true
  }
];

const columnConfigSampleJp : ITableColumnConfig[] = [
  {
    columnId: 'deviceName',
    groupTitle: 'デバイス',
    header: 'デバイス名',
    sortable: true,
    sortActive: true,
    cellStyle: 'firstColumn',
  },
  {
    columnId: 'status',
    groupTitle: 'デバイス',
    header: 'Status',
    sortable: true,
    showStatus: true,
    cellStyle: 'normalImportance',
  },
  {
    columnId: 'created',
    groupTitle: 'デバイス',
    header: '作成時期',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'center',
    hasCopyButton: true
  },
  {
    columnId: 'run',
    groupTitle: '時間',
    header: 'ランタイム',
    sortable: false,
    cellStyle: 'lowImportance',
    alignment: 'left',
    hasCopyButton: true
  },
  {
    columnId: 'usage',
    header: '使用',
    sortable: false,
    cellStyle: 'normalImportance',
    alignment: 'right',
    showUnit: true
  },
  {
    columnId: 'cost',
    header: '価格',
    sortable: true,
    cellStyle: 'highImportance',
    alignment: 'right',
    hasCopyButton: true
  }
];

const searchTemplateResultEnglish = 'Showing [VISIBLE] of [TOTAL]';
const searchTemplateResultJapanese = '[VISIBLE] 〜 [TOTAL]件';

const searchPlaceholderJapanese = 'フィルタータグ...';
const searchPlaceholderEnglish = 'Filter tags...';

const loadingTagsEnglish = 'Loading Tags...';
const loadingTagsJapanese = 'ローディング...';

export {
  tableData,
  tableDataJp,
  columnConfigSample,
  columnConfigSampleJp,
  statusValuesEng,
  statusValuesJp,
  costRangeEng,
  costRangeJap,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  searchPlaceholderJapanese,
  searchPlaceholderEnglish,
  loadingTagsEnglish,
  loadingTagsJapanese,
};

export type { ITableSampleData };