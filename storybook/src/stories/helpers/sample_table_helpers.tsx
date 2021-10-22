import { ITableSampleData } from "./data_samples";
import { IFilterValue, isFilterItem } from 'scorer-ui-kit';
import photo from '../assets/placeholder.jpg';
import { IRowData, ITypeTableData } from "../../../../dist/Tables";

const sortDataBy = (unsortedData: ITableSampleData[], columnId: keyof ITableSampleData, ascending: boolean) => {
  return unsortedData.sort((itemA, itemB) => {

    /** This is added because typescript complained about object keys */
    const valueA = itemA[columnId];
    const valueB = itemB[columnId];

    if (!valueA) { return 0; }
    if (!valueB) { return 0; }
    /** ---- */

    if (valueA > valueB) {
      return ascending ? 1 : -1;
    }
    return ascending ? -1 : 1;
  })
};

const rowMaker = (rowData: ITableSampleData[]): ITypeTableData => {
  const newRows: ITypeTableData = rowData.map(({
    id,
    deviceName,
    deviceLink,
    status,
    statusText,
    created,
    totalTime,
    usage,
    usageUnit,
    cost
  }) => {

    const yenCost = `¥${cost}`
    const row: IRowData = ({
      id,
      header: {
        image: photo,
        icon: 'Location',
        status,
      },
      columns: [
        { text: deviceName, href: deviceLink },
        { text: statusText, status },
        { text: created.toDateString() },
        { text: totalTime },
        { text: `${usage}`, unit: usageUnit },
        { text: yenCost },
      ]
    })
    return row;
  })

  return newRows;
};

const filterByStatus = (data: ITableSampleData[], filterVal: IFilterValue): ITableSampleData[] => {
  const newData: ITableSampleData[] = [];

  if (Array.isArray(filterVal)) {
    filterVal.forEach(({ value }) => {
      data.forEach((sample) => {
        if (sample.status === value) {
          newData.push(sample);
        }
      })
    })

  } else if (isFilterItem(filterVal)) {
    data.forEach((sample) => {
      if (sample.status === filterVal.value) {
        newData.push(sample);
      }
    })
  }

  return newData;
};

const filterByPrice = (data: ITableSampleData[], filterVal: IFilterValue): ITableSampleData[] => {

  if (isFilterItem(filterVal)) {
    return data.filter(sample => sample.cost <= filterVal.value);
  }

  return data;
};

const filterByName = (data: ITableSampleData[], filterVal: IFilterValue): ITableSampleData[] => {

  if (isFilterItem(filterVal)) {
    const newData = data.filter((sample) => {
      const lowerValue = sample.deviceName.toLowerCase()
      return lowerValue.includes(filterVal.text.toLocaleLowerCase());
    })

    return newData;
  }

  return data;
};

const filterByCreationDate = (data: ITableSampleData[], filterVal: IFilterValue): ITableSampleData[] => {

  if (isFilterItem(filterVal)) {
    const newData = data.filter((sample) => {
      const lowerValue = sample.created.toDateString().toLowerCase()
      return lowerValue.includes(filterVal.text.toLocaleLowerCase());
    })

    return newData;
  }

  return data;
};



export {
  sortDataBy,
  rowMaker,
  filterByStatus,
  filterByPrice,
  filterByName,
  filterByCreationDate
};