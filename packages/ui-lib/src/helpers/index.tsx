import { ITimeUnit } from '../index';

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


  // https://stackoverflow.com/questions/30314447/how-do-you-test-for-nan-in-javascript
  const isNotNumber = (value: string) => {
    const intValue = Number(value);

    // eslint-disable-next-line no-self-compare
    return intValue !== intValue;
  };

export {
  clamp,
  isValidImage,
  getImageType,
  getTextTimeUnit,
  getTopLevelPath,
  uniqueID,
  isNotNumber
};