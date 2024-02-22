import re
import math
from pathlib import Path
import json
import os
import argparse

### HOW TO RUN
### python3 color_replacer.py [css file] [filepath] [--overwrite]

### Color classes

class HSLA:
    def __init__(self, h = "", s  = "", l  = "", a  = ""):
        self.h = float(h.strip("%"))
        self.s = float(s.strip("%"))
        self.l = float(l.strip("%"))

        if a == '':
          self.a = 1
        else :
          temp_a = round(float(a.strip("%")), 2)
          if temp_a > 1 and temp_a <= 100:
              self.a = temp_a / 100
              print('it was bigger than 1')
          else :
            self.a = temp_a

    def to_str(self):
        return f"hsla({self.h}, {self.s}%, {self.l}%, {self.a})"

    def to_rgba(self):
        h = self.h
        s = self.s
        l = self.l
        a = self.a

        s /= 100
        l /= 100

        c = (1 - abs(2 * l - 1)) * s
        x = c * (1 - abs((h / 60) % 2 - 1))
        m = l - c / 2

        if h < 60:
            r, g, b = c, x, 0
        elif h < 120:
            r, g, b = x, c, 0
        elif h < 180:
            r, g, b = 0, c, x
        elif h < 240:
            r, g, b = 0, x, c
        elif h < 300:
            r, g, b = x, 0, c
        else:
            r, g, b = c, 0, x

        temp_r = math.floor((r + m) * 255)
        temp_g = math.floor((g + m) * 255)
        temp_b = math.floor((b + m) * 255)
        r = temp_r if temp_r > 0 else 0
        g = temp_g if temp_g > 0 else 0
        b = temp_b if temp_b > 0 else 0
        alpha = a

        return RGBA(r, g, b, alpha)

class HEX:
    def __init__(self, value: str=""):
      self.value = value.replace("#", "")

    def to_rgba(self):
      r = int(self.value[0:2], 16)
      g = int(self.value[2:4], 16)
      b = int(self.value[4:6], 16)
      a = 1

      if len(self.value) > 6:
          a = round(int(self.value[6:8], 16) / 255, 2)

      return RGBA(r, g, b, a)


class RGBA:
    def __init__(self, r, g, b, a=1):
        self.r = int(r)
        self.g = int(g)
        self.b = int(b)
        self.a = round(float(a), 2)

    def to_str(self):
        return f"{self.r},{self.g},{self.b},{self.a}"

    @staticmethod
    def color_distance(e1, e2) -> float:
        """
        From: https://stackoverflow.com/a/9085524
        """

        rmean = float((e1.r + e2.r) / 2)
        r = float(e1.r - e2.r)
        g = float(e1.g - e2.g)
        b = float(e1.b - e2.b)
        # a = float(e1.a - e2.a)
        left = int((512.0 + rmean) * r * r) >> 8
        middle = int(4 * g * g)
        right = int((767.0 - rmean) * b * b) >> 8
        return left + middle + right



### given a variable name define the type (text, border, background)
def get_radix_type_by_name(variable_name):

  ONLY_NUMBER = r"\d{1,2}"

  found = re.search(ONLY_NUMBER, variable_name)
  variable_number = int(found.group(0))

  if variable_number >= 6 and variable_number <= 8:
    return "border"

  if variable_number == 11 or variable_number == 12:
    return "text"

  return "background"

def get_radix_type_by_property(line):

    formatted_line = line.lower()

    if 'color' in formatted_line:
        return 'text'

    if 'background' in formatted_line:
        return 'background'

    if 'border' in formatted_line:
        return 'text'

    return 'none'


### create radix dict

def build_radix_dict(file_path):
  dic = {}
  with open(file_path, "r") as file:
    for line in file.readlines():
      segments = [
        s.strip() for s in line
        .replace("\n","")
        .replace(";","")
        .split(":")
      ]

      if len(segments) != 2:
        continue

      if segments[0] == "" or segments[1] == "":
        continue
      variable_name = segments[0]
      radix_type = get_radix_type_by_name(variable_name)
      hex_str = segments[1]
      hex = HEX(hex_str)
      rgba = hex.to_rgba()
      rgba_str = rgba.to_str()
      has_alpha = color_has_alpha(hex_str)
      """
        "255,255,255,0" : {
          "variable" : "--white-a1",
          "hex": "#FFFFFF00",
          "rgba": rgba
          "radix_type": "text"
          "has_alpha": true
        }
      """
      dic[rgba_str] = {
        "variable": variable_name,
        "hex": hex_str,
        "rgba": rgba,
        "radix_type": radix_type,
        "has_alpha": has_alpha
      }

  return dic



def color_files_paths(path):
    allowedExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']

    if os.path.isdir(path):
      directory_path = Path(path)
      file_list = list(directory_path.rglob('*'))
      color_files = [
          str(file) for file in file_list
          if file.suffix in allowedExtensions and  "theme" not in file.name
          ]
      return color_files

    elif os.path.isfile(path):
        _base_name, extension = os.path.splitext(path)
        if extension.lower() in allowedExtensions:
          return [path]
        else:
            None
    else:
        print(f"{path} does not exist or is neither a file nor a directory.")
        return None



# hex_3dig = "#c2c" ## -> #CC22CCFF
# hex_4dig = "#2468" ## -> #22446688
# hex_6dig = "#336699" ## -> no modification
# hex_8dig = "#336699bb" ## -> no modification

def get_regular_hex(wild_hex_color):
    hex_len = len(wild_hex_color) - 1 ## #ccc -> 3
    hex = wild_hex_color.replace('#', '')

    if(hex_len == 3):
        return f"#{hex[0]}{hex[0]}{hex[1]}{hex[1]}{hex[2]}{hex[2]}"

    if(hex_len == 4):
        return f"#{hex[0]}{hex[0]}{hex[1]}{hex[1]}{hex[2]}{hex[2]}{hex[3]}{hex[3]}"

    return wild_hex_color

def get_rgba_color(wild_color):

    if 'hsla' in wild_color:
        clean_value = wild_color.strip("hsla()deg%").replace('%', '').replace('deg', '').split(',')
        split_value = clean_value[0].split(' ') if len(clean_value) == 1 else clean_value ## split when using spaces
        if len(split_value) < 3 or len(split_value) > 4 : return None
        new_hsla = HSLA(*split_value)
        return new_hsla.to_rgba()

    elif 'hsl' in wild_color:
        clean_value = wild_color.strip("hsl()deg%").replace('%', '').replace('deg', '').split(',')
        print(f'clean value hsl {len(clean_value)} +', clean_value)
        print(f'spaces split {len(clean_value[0].split(" "))}')
        split_value = clean_value[0].split(' ') if len(clean_value) == 1 else clean_value ## split when using spaces
        if len(split_value) < 3 or len(split_value) > 4 : return None
        new_hsla = HSLA(*split_value)
        return new_hsla.to_rgba()

    elif 'rgba' in wild_color:
        clean_value = wild_color.strip('rgba()').split(',')
        split_value = clean_value[0].split(' ') if len(clean_value) == 1 else clean_value ## split when using spaces
        if len(split_value) < 3 or len(split_value) > 4 : return None
        rgba = RGBA(*split_value)
        return rgba

    elif 'rgb' in wild_color:
        clean_value = wild_color.strip('rgb()').split(',')
        split_value = clean_value[0].split(' ') if len(clean_value) == 1 else clean_value ## split when using spaces
        if len(split_value) < 3 or len(split_value) > 4 : return None
        rgba = RGBA(*split_value)
        return rgba

    elif '#' in wild_color:
        regular_hex = get_regular_hex(wild_color)
        new_hex = HEX(regular_hex)
        return new_hex.to_rgba()

def color_has_alpha(wild_color):
    if 'hsla' in wild_color:
        [h,s,l,a] = wild_color.strip("hsla()deg%").replace('%', '').split(',')
        temp_a = round(float(a.strip("%")), 2)
        if temp_a == 100 or temp_a == 1:
            return False

        return True

    elif 'hsl' in wild_color:
          return False

    elif 'rgba' in wild_color:
          [r,g,b,a] = wild_color.strip('rgba()').split(',')
          temp_a = round(float(a.strip("%")), 2)
          if temp_a >= 0 and temp_a < 1:
            return True
          return False

    elif 'rgb' in wild_color:
          return False

    elif '#' in wild_color:
        value = wild_color.upper().replace("#", "")
        if len(value) > 6 and value[6:8] != "FF":
            return True
        elif len(value) == 4 and value[3] != "F":
            return True
        return False


def find_closest_variable(wild_color, wild_rgba, radix_dict, line) :
    closest_distance = None
    closest_variable = None
    wild_has_alpha = color_has_alpha(wild_color)

    ### wild_radix_type = get_radix_type_by_property(line) #### not really using :( performance comparison is worst with radix

    for key in radix_dict : #iterate all dictionary
      dict_rgba = radix_dict[key]["rgba"]

      if wild_has_alpha and (radix_dict[key]['has_alpha'] == False) :
          continue

      distance = RGBA.color_distance(wild_rgba, dict_rgba)

      if closest_distance is None or distance < closest_distance:
          closest_distance = distance
          closest_variable = radix_dict[key]['variable']
          closest_color = radix_dict[key]['hex']

    return [closest_variable, closest_color]

def replace_color(color_file, radix_dict, overwrite):
    updated_file = ""
    replaced_colors = []

    # replaced_colors JSON
    # foundColor: rgba(255,255,255,.8)
    # dictColor: rgba(255,255,255,0.8)
    # varColor: grey6

    COLORS_REGEX  = r'hsl\(([^\)]+)\)|hsla\(([^\)]+)\)|rgb\(([^\)]+)\)|rgba\(([^\)]+)\)|#[0-9a-fA-F]{3,8}'
    print('Replacing starts ..')
    with open(color_file, "r") as file:
        for line_number, line in enumerate(file, start=1):
            colors_matches = re.finditer(COLORS_REGEX, line)
            temp_line = line
            for match in colors_matches:
                wild_color = match.group()
                if wild_color == '' : continue

                wild_rgba = get_rgba_color(wild_color)
                if wild_rgba == None :
                    replaced_colors.append(
                        {
                            'foundColor' : wild_color,
                            'dictColor' : '#ff0000',
                            'varColor' : 'Format Not Supported - Not Replaced',
                            'lineText' : line,
                            'lineNumber': line_number
                        }
                    )
                    continue

                wild_rgba_str = wild_rgba.to_str()
                print(f'found_color: {wild_color} ~ RGB is: {wild_rgba_str}')

                if wild_rgba_str in radix_dict:
                    color_variable = f'var({radix_dict[wild_rgba_str]["variable"]})'
                    temp_line = temp_line.replace(wild_color, color_variable)
                    replaced_colors.append(
                        {
                            'foundColor' : wild_color,
                            'dictColor' : radix_dict[wild_rgba_str]['hex'],
                            'varColor' : radix_dict[wild_rgba_str]['variable'],
                            'lineText' : line,
                            'lineNumber': line_number
                        }
                    )

                else :
                  [closest_variable, closest_color] = find_closest_variable(wild_color, wild_rgba, radix_dict, line)
                  variable_replace_text = f'var({closest_variable})'
                  temp_line = temp_line.replace(wild_color, variable_replace_text)
                  replaced_colors.append(
                      {
                          'foundColor' : wild_color,
                          'dictColor' : closest_color,
                          'varColor' : closest_variable,
                          'lineText' : line,
                          'lineNumber': line_number
                      }
                  )

    # Creating updated File with variables
            if temp_line != line:
                updated_file += temp_line

            else :
                updated_file += line

    if len(replaced_colors) > 0 :
      if overwrite != None and overwrite.lower() == 'overwrite' :
        with open(color_file, "w") as file:
              file.write(updated_file)
      else:
        base_name, extension = os.path.splitext(color_file)
        with open(f"{base_name}.new{extension}", "w") as file:
              file.write(updated_file)

    return replaced_colors

def update_files(color_files, radix_dict, overwrite):
    all_replaced_colors = []
    for file in color_files:
      print(f'Processing: {file}')
      replaced_colors = replace_color(file, radix_dict, overwrite)
      if len(replaced_colors) > 0 :
        all_replaced_colors.append({
            file : replaced_colors
        })

    return all_replaced_colors

## PROGRAM STARTS HERE

parser = argparse.ArgumentParser(description='Arguments for Variable colors update')

# Optional argument
parser.add_argument('-C','--css', help='css colors file path')
parser.add_argument('-P','--path', help='Root path to update colors')
parser.add_argument('-O','--overwrite', help='If added file will be overwrite')


# Parse the command line arguments
arguments = parser.parse_args()

css_file = arguments.css
files_path = arguments.path
overwrite = arguments.overwrite  #if exists and is equal to replace, replace files instead of adding new

# new_dict = build_radix_dict('css-variable-experiments/light-pallette.css')
new_dict = build_radix_dict(css_file)

## Maybe this could be skipped if we just always provide the dictionary :/
colors_dic = {}
for key in new_dict:
    variable_name = new_dict[key]["variable"]
    hex = new_dict[key]["hex"]
    colors_dic[variable_name] = hex

# Write the Python object to a JSON file to print colors in html
with open('colors_dict.js', 'w') as json_file:
    json_file.write('const DICT =')
    json.dump(colors_dic, json_file, indent=2)


color_files = color_files_paths(files_path)

if color_files is None :
  print(f"Color file not supported, allowed extensions are:  .ts, .tsx, .js, .jsx, .css, .scss ")
  exit(1)

### iterate each file
### find color matches or is closer, files will be replaced
all_colors_replaced = update_files(color_files, new_dict, overwrite)

# Write the Python object to a JSON file with the replacements to show results in replacer_app.html
with open('all_colors_replaced.js', 'w') as json_file:
    json_file.write('const COLORS_FOUND =')
    json.dump(all_colors_replaced, json_file, indent=2)