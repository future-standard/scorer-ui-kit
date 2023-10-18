
// Your theme colors and their corresponding CSS variable names
const themeColors = {
  '--white-a12': '#FFFFFFEB',
  '--white-a11': '#FFFFFF96',
  '--white-a10': '#FFFFFF71',
  '--white-a9': '#FFFFFF62',
  '--white-a8': '#FFFFFF3F',
  '--white-a7': '#FFFFFF2C',
  '--white-a6': '#FFFFFF1F',
  '--white-a5': '#FFFFFF15',
  '--white-a4': '#FFFFFF0E',
  '--white-a2': '#FFFFFF03',
  '--white-a1': '#00000000',
  '--white-12': '#FFFFFFEB',
  '--black-a11': '#00000090',
  '--black-a10': '#00000079',
  '--black-a9': '#0000006F',
  '--black-a8': '#00000038',
  '--black-a7': '#00000023',
  '--black-a6': '#0000001D',
  '--black-a5': '#00000016',
  '--black-a4': '#00000012',
  '--black-a3': '#0000000B',
  '--black-a2': '#00000006',
  '--black-a1': '#00000003',
  '--black-12': '#000000E8',
  '--black-11': '#00000090',
  '--black-10': '#00000079',
  '--black-9': '#0000006F',
  '--black-8': '#00000038',
  '--black-7': '#00000023',
  '--black-6': '#0000001D',
  '--info-a12': '#00221DEF',
  '--info-a11': '#00776BF9',
  '--info-a10': '#009281F1',
  '--info-a9': '#009E8CED',
  '--info-a8': '#009783AC',
  '--info-a7': '#01927A72',
  '--info-a6': '#00998050',
  '--info-a5': '#00A48938',
  '--info-a4': '#02AF8C26',
  '--info-a3': '#02C09718',
  '--info-a2': '#01C8A40E',
  '--info-a1': '#05CD9B05',
  '--info-12': '#10302B',
  '--info-11': '#067A6F',
  '--info-10': '#0E9888',
  '--info-9': '#12A594',
  '--info-8': '#53B9AB',
  '--info-7': '#8DCEC3',
  '--info-6': '#AFDFD7',
  '--info-5': '#C7EBE5',
  '--info-4': '#D9F3EE',
  '--info-3': '#E7F9F5',
  '--info-2': '#F1FCFA',
  '--info-1': '#FAFEFD',
  '--warning-a12': '#380E00EE',
  '--warning-a11': '#BC4800F9',
  '--warning-a10': '#ED5B00F9',
  '--warning-a9': '#F76300F7',
  '--warning-a8': '#F86300B1',
  '--warning-a7': '#FF66017E',
  '--warning-a6': '#FF6B0158',
  '--warning-a5': '#FF6B013C',
  '--warning-a4': '#FF6E0028',
  '--warning-a3': '#FF6C0318',
  '--warning-a2': '#E860050B',
  '--warning-a1': '#C0430504',
  '--warning-12': '#451E11',
  '--warning-11': '#BD4B00',
  '--warning-10': '#ED5F00',
  '--warning-9': '#F76808',
  '--warning-8': '#FA934E',
  '--warning-7': '#FFB381',
  '--warning-6': '#FFCCA7',
  '--warning-5': '#FFDCC3',
  '--warning-4': '#FFE8D7',
  '--warning-3': '#FFF1E7',
  '--warning-2': '#FEF8F4',
  '--error-a2': '#FF260508',
  '--error-a1': '#FF050503',
  '--error-12': '#341711',
  '--error-a6': '#EC230041',
  '--error-11': '#CA3214',
  '--error-10': '#DB4324',
  '--error-9': '#E54D2E',
  '--error-8': '#EA9280',
  '--error-7': '#F3B0A2',
  '--error-6': '#FAC7BE',
  '--error-5': '#FDD8D3',
  '--error-4': '#FFE6E2',
  '--error-3': '#FFF0EE',
  '--error-2': '#FFF8F7',
  '--error-1': '#FFFCFC',
  '--success-a12': '#002012EA',
  '--success-a11': '#006B3BE7',
  '--success-a10': '#008346D6',
  '--success-a9': '#008F4ACF',
  '--success-a8': '#00934CA4',
  '--black-4': '#00000012',
  '--success-a7': '#008C3D6D',
  '--warning-1': '#FEFCFB',
  '--success-a6': '#0193364B',
  '--error-a12': '#260600EE',
  '--success-a5': '#009B3633',
  '--error-a11': '#C62100EB',
  '--success-a4': '#01A63522',
  '--success-a3': '#02BA3C16',
  '--error-a9': '#DF2500D1',
  '--success-a2': '#00C43B0D',
  '--error-a8': '#D524017F',
  '--success-a1': '#05C04304',
  '--error-a7': '#DE25005D',
  '--success-12': '#153226',
  '--success-11': '#18794E',
  '--error-a5': '#F41D012C',
  '--success-10': '#299764',
  '--error-a4': '#FF22011D',
  '--success-9': '#30A46C',
  '--error-a3': '#FF1F0111',
  '--success-8': '#5BB98C',
  '--error-a10': '#D52400DB',
  '--success-7': '#92CEAC',
  '--primary-5': '#C4EAEF',
  '--grey-12': '#11181C',
  '--primary-4': '#D8F3F6',
  '--grey-11': '#687076',
  '--grey-10': '#7E868C',
  '--primary-2': '#F2FCFD',
  '--grey-9': '#889096',
  '--grey-6': '#DFE3E6',
  '--grey-5': '#E6E8EB',
  '--primary-a7': '#0097B27B',
  '--grey-2': '#F8F9FA',
  '--grey-1': '#FBFCFD',
  '--primary-a12': '#002D38F9',
  '--success-5': '#CCEBD7',
  '--white-3': '#FFFFFF08',
  '--primary-a10': '#0090B0F7',
  '--white-1': '#00000000',
  '--primary-a4': '#00B1C427',
  '--grey-a11': '#000E1897',
  '--success-4': '#DDF3E4',
  '--primary-a9': '#00A1C1F9',
  '--success-3': '#E9F9EE',
  '--primary-a8': '#00A3C0C2',
  '--white-5': '#FFFFFF15',
  '--primary-12': '#04313C',
  '--grey-a7': '#001A3328',
  '--grey-a12': '#00080CEE',
  '--black-a12': '#000000E8',
  '--primary-a5': '#01A4BA3B',
  '--success-6': '#B4DFC4',
  '--white-2': '#FFFFFF03',
  '--primary-a3': '#02C0D518',
  '--white-8': '#FFFFFF3F',
  '--primary-9': '#05A2C2',
  '--grey-a4': '#021C3713',
  '--black-2': '#00000006',
  '--grey-a9': '#00111E77',
  '--white-11': '#FFFFFF96',
  '--primary-a2': '#00C6D80D',
  '--primary-a11': '#00718DF3',
  '--grey-a5': '#02173519',
  '--white-a3': '#FFFFFF08',
  '--primary-10': '#0894B3',
  '--grey-4': '#ECEEF0',
  '--white-9': '#FFFFFF62',
  '--primary-8': '#3DB9CF',
  '--grey-a3': '#0025490E',
  '--black-3': '#0000000B',
  '--grey-a8': '#011E323E',
  '--white-4': '#FFFFFF0E',
  '--primary-a1': '#059BCD05',
  '--primary-1': '#FAFDFE',
  '--grey-8': '#C1C8CD',
  '--grey-a1': '#05448204',
  '--primary-6': '#AADEE6',
  '--success-1': '#FBFEFC',
  '--white-7': '#FFFFFF2C',
  '--primary-a6': '#019CB455',
  '--primary-3': '#E7F9FB',
  '--grey-a2': '#05294D07',
  '--success-2': '#F2FCF5',
  '--white-6': '#FFFFFF1F',
  '--primary-11': '#0C7792',
  '--white-10': '#FFFFFF71',
  '--primary-7': '#84CDDA',
  '--black-1': '#00000003',
  '--grey-a10': '#00101B81',
  '--grey-7': '#D7DBDF',
  '--grey-3': '#F1F3F5',
  '--black-5': '#00000016',
  '--grey-a6': '#01213920'
}

const fs = require('fs').promises;
const path = require('path');
const Color = require('color');

// Helper functions
const colorDifference = (color1, color2) => {
  const rDiff = color1.red() - color2.red();
  const gDiff = color1.green() - color2.green();
  const bDiff = color1.blue() - color2.blue();
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
};

const closestColorKey = (color, themeColors) => {
  let minDifference = Infinity;
  let closestKey = Object.keys(themeColors)[0];

  for (const key of Object.keys(themeColors)) {
    const themeColor = Color(themeColors[key]);
    const diff = colorDifference(color, themeColor);
    if (diff < minDifference) {
      minDifference = diff;
      closestKey = key;
    }
  }

  return closestKey;
};



const processFile = async (filePath) => {
  console.log(`Processing file: ${filePath}`);

  const content = await fs.readFile(filePath, 'utf-8');
  const colorRegex = /#([A-Fa-f0-9]{3}(?:[A-Fa-f0-9]{3})?)\b|rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([\d.]+))?\)|hsla?\(\s*(\d{1,3}(?:deg)?)\s*,\s*(\d{1,3}(?:\.\d+)?%)\s*,\s*(\d{1,3}(?:\.\d+)?%)\s*(?:,\s*([\d.]+))?\)/g;






  const newContent = content.replace(colorRegex, (match) => {
    const colorObj = Color(match);
    const closestKey = closestColorKey(colorObj, themeColors);
    return `var(${closestKey})`;
  });

  if (newContent !== content) {
    await fs.writeFile(filePath, newContent, 'utf-8');
    console.log(`Updated file: ${filePath}`);
  }
};

const processDirectory = async (dirPath) => {
  console.log(`Processing directory: ${dirPath}`);

  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const filePromises = entries.map((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return processDirectory(fullPath);
    } else {
      return processFile(fullPath);
    }
  });

  return Promise.all(filePromises);
};

// Start processing from the root directory of your codebase
processDirectory('../packages/ui-lib/src/')
  .then(() => console.log('Processing completed.'))
  .catch(error => {
    console.error('An error occurred:', error);
  });
