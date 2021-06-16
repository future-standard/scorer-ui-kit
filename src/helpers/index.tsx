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

const throttle = (func : Function , limit: number) => {
  let lastFunc : any;
  let lastRan : number;

  return function( this: any) {
    const context  = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export {
  clamp,
  isValidImage,
  getImageType,
  getTextTimeUnit,
  isInsideRange,
  getShortTextTimeUnit,
  throttle,
};