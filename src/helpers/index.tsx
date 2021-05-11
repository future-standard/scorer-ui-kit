import {ITimeUnit} from '../index';

export const isInsideRange = (value: number, min: number, max: number) : boolean => {
  if( value < min) {return false;}
  if(value > max) { return false;}
  return true;
};

/**
 * Helper for adding appropiate text to a time number
 * Default is hours
 */
export const getTextTimeUnit = (value: number, unit : ITimeUnit) => {
    switch (unit) {
      case 'seconds':
        return value < 2 ? `${value} Second` : `${value} Seconds`;

      case 'minutes':
        return value < 2 ? `${value} Minute` : `${value} Minutes`;
    
      default:
        return value < 2 ? `${value} Hour` : `${value} Hours`;
    }
};


export const getImageType = (img: HTMLImageElement) => {
  const dataType = img.src.substr(0, 20);
  if (dataType.includes('data')) {
    return dataType.split('/')[1].split(';')[0];
  }
  return 'image/jpeg';
};

export const isValidImage = (file: File) => {
  const acceptedImageTypes = ['image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file['type']);
};

export const clamp = (value: number, minValue: number, maxValue: number) => {
  return Math.min( Math.max(value, minValue), maxValue);
};