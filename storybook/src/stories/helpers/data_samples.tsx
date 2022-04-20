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
  created: Date
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
  {text: '注意', value: 'caution'},
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
    created: new Date(),
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
    created: new Date("8/1/21"),
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
    created: new Date("6/22/21"),
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
    created: new Date("5/2/21"),
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
    created: new Date("4/10/21"),
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
    created: new Date("2/1/21"),
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
    created: new Date("12/1/20"),
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
    created: new Date("8/1/20"),
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
    created: new Date("7/1/20"),
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
    created: new Date("5/1/20"),
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
    created: new Date("2/1/20"),
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
    created: new Date(),
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
    created: new Date("8/1/21"),
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
    created: new Date("6/22/21"),
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
    created: new Date("5/2/21"),
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
    created: new Date("4/10/21"),
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
    created: new Date("2/1/21"),
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
    created: new Date("12/1/20"),
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
    created: new Date("8/1/20"),
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
    created: new Date("7/1/20"),
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
    created: new Date("5/1/20"),
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
    created: new Date("2/1/20"),
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
    header: 'ステータス',
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
const genericLoadingJp = 'ローディング...';

const showMoreEng = 'Show More';
const showMoreJp = 'もっと見る';
const showLessEng = 'Show less';
const showLessJp = '折りたたむ';
const resultTextTemplateEng = 'Showing Results ([TOTAL_RESULTS]):';
const resultTextTemplateJp = '表示結果 ([TOTAL_RESULTS]):';

const clearEng = 'CLEAR ALL';
const clearJp = 'すべてクリア';

const jpMonths: string[] = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const jpDays: string[] = ['日', '月', '火', '水', '木', '金', '土'];

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
  genericLoadingJp,
  showMoreEng,
  showMoreJp,
  showLessEng,
  showLessJp,
  resultTextTemplateEng,
  resultTextTemplateJp,
  clearEng,
  clearJp,
  jpMonths,
  jpDays
};

export type { ITableSampleData };