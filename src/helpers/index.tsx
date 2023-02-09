import {ITimeUnit} from '../index';

const isInsideRange = (value: number, min: number, max: number) : boolean => {
  if( value < min) {return false;}
  if(value > max) { return false;}
  return true;
};

// verifies if a number is inside a boundary if not updates it's value to the max or min boundary value.
const clamp = (value: number, minValue: number, maxValue: number) => {
  return Math.min( Math.max(value, minValue), maxValue);
};

/**
 * Helper for adding appropriate text to a time number
 * Default is hours
 */
const getTextTimeUnit = (value: number, unit : ITimeUnit) => {
    switch (unit) {
      case 'seconds':
        return value < 2 ? `Second` : `Seconds`;

      case 'minutes':
        return value < 2 ? `Minute` : `Minutes`;

      default:
        return value < 2 ? `Hour` : `Hours`;
    }
};

/**
 * Helper for adding appropriate text to a time number
 * Default is hours
 */
const getShortTextTimeUnit = (value: number, unit : string) => {
  switch (unit) {
    case 'seconds':
      return value < 2 ? `sec` : `secs`;

    case 'minutes':
      return value < 2 ? `min` : `mins`;

    default:
      return value < 2 ? `hr` : `hrs`;
  }
};

export const isTimeUnit = (value: any) => {
  switch(value) {
    case 'seconds':
    case 'minutes':
    case 'hours':
      return true;
    default:
      return false;
  }
};

const getTopLevelPath = (pathname: string) => {
  const parts = pathname.split('/').filter(String);
  return  parts.length > 0 ? "/" + parts[0] : "/";
};

const getImageType = (img: HTMLImageElement) => {
  const dataType = img.src.substr(0, 20);
  if (dataType.includes('data')) {
    return dataType.split('/')[1].split(';')[0];
  }
  return 'image/jpeg';
};

const isValidImage = (file: File) => {
  const acceptedImageTypes = ['image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file['type']);
};

const uniqueID = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(16)
  ).replace(/\./g, '');

const getFormatedTime = (value:string) =>{
  console.log(value, value.length, 'JHBVNJMK,MNJBNHJMKJNHBGH');
  if(value ==='0' || value ===''){
    return '00';
  }
  if(value?.length === 1){
    return('0' + value);
  } else {
    return value;
  }
};

export {
  clamp,
  isValidImage,
  getImageType,
  getTextTimeUnit,
  isInsideRange,
  getShortTextTimeUnit,
  getTopLevelPath,
  uniqueID,
  getFormatedTime
};