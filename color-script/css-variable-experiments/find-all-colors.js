//finding colors
// object with all the colors
// structure has color, property name aligned too, file where it was found
// loop through all the files and find colors
// write a file with the found colors in a table format

// well formed RegExp maybe too much
// const hexRegex = /#[0-9a-fA-F]{6}/g; // hex color regex
// const rgbRegex = /rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)/g; // rgb color regex
// const rgbaRegex = /rgba\s?\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?,\s?0?\.\d+\s?\)/g; // rgba color regex
// const hslRegex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g; // hsl color regex



// Main declarations

let ColorsFound = {};
const allowedExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];
const readLine = require('readline');
const fs = require('fs');
const path = require('path');
const colorFiles = [];
const fileSrc = 'packages/ui-lib/src/themes/light';

const matchColors = (line, regex, filePath) => {
  const matches = line.match(regex);
  if (matches) {
    matches.forEach((match) => {
      if(!ColorsFound[match]) { ColorsFound[match] = [];} // if first found, create the array

      ColorsFound[match].push(`${line} in ${filePath}`);
      // console.log('Found color', match, 'at', filePath);
    });
  }
}

// Code matching color patterns without caring what is in the inside parenthesis
const findColors = (line, filePath) => {
  const colorsRegex = /hsl\(([^\)]+)\)|hsla\(([^\)]+)\)|rgb\(([^\)]+)\)|rgba\(([^\)]+)\)|#[0-9a-fA-F]{6}/g; // hex color regex
  matchColors(line, colorsRegex, filePath);
}

const isColorFile =((file) => {
  return allowedExtensions.some((ext) => file.endsWith(ext));
});

const colorFilePaths = (directory) => {
  const files = fs.readdirSync(directory);
  files.forEach((file) =>{
    const filePath = path.join(directory, file);

    if(filePath.includes('node_modules')) { return; }

    if(fs.statSync(filePath).isDirectory()) {
      colorFilePaths(filePath);
    } else if(isColorFile(file)) {
      colorFiles.push(filePath);
      // console.log('**FILE**', filePath, file);
    }
  })
}

/** Program starts here */

colorFilePaths(fileSrc);


const getColorsFromFile = (filepath) => {
  const f = fs.readFileSync(filepath, 'utf8');
  for (let line of f.split('\n')) {
    findColors(line, filepath);
  }
};

for (let file of colorFiles) {
  getColorsFromFile(file);
}

console.log('These are the colors found', ColorsFound);
const orderedColors = Object.keys(ColorsFound).sort().reduce(
  (obj, key) => {
    obj[key] = ColorsFound[key];
    return obj;
  },
  {}
);

const jsonFile = JSON.stringify(orderedColors, null, 2);
fs.writeFileSync('light-colors-paths.json', jsonFile);
fs.writeFileSync('light-colors.css', Object.keys(orderedColors).join('\n'));