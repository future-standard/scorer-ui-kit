## CSS variables replacement on a project

The purpose of this tool is to help to update projects to use the the same CSS variables as the UI KIT. This will also help to have better customization integration with the UI KIT library.

The reference of how to use the theming and the external css variables can be found [here](dark_light_mode_usage.md).

### Supported files

  The replacement script will look in all the folders and files of the provided path with the extensions `.ts, .tsx, .js, .jsx, .css, .scss`, to find color bases properties and values.

  The supported color values are `hexadecimal, rgb, rgba, hsl and hsla`.

  The script will not replace the files by default but the `overwrite` flag can be added if you prefer to review the changes with git or other version tool.

### Usage procedure

Copy the [replacement_app](color_replacer_app) folder to your local project

Run the the python script [color_replacer.py](color_replacer_app/color_replacer.py) using Python 3 the main arguments are, css, filepath and overwrite.

**css**: css variables file you will be using in your project. Also there is an available file in this folder named [dictionary.css](color_replacer_app/dictionary.css)

**filepath**: The file or folder you want to update.

**overwrite**: Optionally add this flag if you want to directly overwrite the file replacing the color values with the variables. If no `--overwrite` flag is sent a new file will be written with the *.new.extension format.

Run from console the
```python
  python3 color_replacer.py [css] [filepath] [--overwrite]

  ##Example

  python3 replacer_app/color_replacer.py --css replacer_app/dictionary.css --path src/
```

After running the script verify that the colors are replaced correctly by opening the [replacer_app.html](color_replacer_app/replacer_app.html) file on a browser.

This file will show the files that had colors replaced.
Visually verify that all the colors replaced are closer to the previous color.


Here is an example of what to expect in the replacer_app.html

<img width="847" alt="Screenshot 2024-02-22 at 16 46 06" src="https://github.com/future-standard/scorer-ui-kit/assets/10409078/e6a63d03-f2d8-46b5-aa6a-60f5e312bb6d">


If you agree with all the variable changes, review the files by comparing the original to the *.new.ext or incase it was replaced in the same file run the project to verify is still working as expected and if no conflicts are found commit your changes.

### Troubleshooting

If the replacement color provided is not similar to the variable try to visually compare the color with the list on the file (dictionary.html)[color_replacer_app/dictionary.html]. This file contains a reference of the colors variables of the css provided. In this case you might visually find an alternative color that want to have, please update the replacement variable in the source file manually.

<img width="1037" alt="Screenshot 2024-02-22 at 16 50 54" src="https://github.com/future-standard/scorer-ui-kit/assets/10409078/503ecf3b-4be4-4f31-9850-1d902a82f911">


If a color is really far from all options provided in the palette/dictionary/css file and you want to keep it, you can add the color variable for the project and either change the variable manually or run again the script from the start point.
