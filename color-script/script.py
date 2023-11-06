import math
import re

HSLA_PATTERN = r"hsla\((\d+),\s*([0-9]+\.?[0-9]*%?),\s*([0-9]+\.?[0-9]*%?),\s*([0-9]+\.?[0-9]*)\)"

class HSLA:
    def __init__(self, h = "", s  = "", l  = "", a  = ""):
        self.h = float(h.strip("%"))
        self.s = float(s.strip("%"))
        self.l = float(l.strip("%"))
        self.a = float(a.strip("%"))

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

        r = math.floor((r + m) * 255)
        g = math.floor((g + m) * 255)
        b = math.floor((b + m) * 255)
        alpha = math.floor(a * 255)

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
        self.r = r
        self.g = g
        self.b = b
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


def build_hsla_dict(file_path):
    color_variables = {}
    with open(file_path, "r") as file:
        for line in file.readlines():
            segments = [s.strip() for s in line.replace("\n", "").split(":")]
            if len(segments) < 2:
                continue
            hsla_str = segments[1].replace("%", "")
            variable_name = segments[0]
            key = segments[1].split(";")[0]
            hit = re.search(HSLA_PATTERN, hsla_str)
            if hit:
                hsla = HSLA(*hit.groups())
                #key = hsla.to_str()
                color_variables[key] = {
                    "variable": variable_name,
                    "hsla": hsla,
                    "rgba": hsla.to_rgba()
                }

    return color_variables

def build_hex_dict(file_path):
    dict = {}
    with open(file_path, "r") as file:
        for line in file.readlines():
            segments = [
                s.strip() for s in line
                  .replace("\n", "")
                  .replace(";", "")
                  .split(":")
                  ]

            if len(segments) != 2:
                continue

            if segments[0] == "" or segments[1] == "":
                continue

            variable_name = segments[0]
            hex_str = segments[1]
            hex = HEX(hex_str)
            rgba = hex.to_rgba()
            rgba_str = rgba.to_str()

            """
            {
              "255,255,255,0": {
                  "variable": "--white-a1",
                  "rgba": hex.to_rgba()
              }
            }
            """
            dict[rgba_str] = {
                "variable": variable_name,
                "rgba": rgba
            }

    return dict


def replace_color_variables(file_path, source_dict):
    with open(file_path, "r") as file:
        new_content = ""
        for line in file.readlines():
            new_line = line
            for key in source_dict:
                new_line = new_line.replace(key, source_dict[key]["variable"])
            new_content += new_line

    with open(f"{file_path}.new.ts", "w") as file:
        file.write(new_content)


def find_and_replace_color_variables(file_path, source_dict):
    closest_colors = {}
    new_content = ""
    with open(file_path, "r") as file:
        for line in file.readlines():
            # TODO: Extract ALL possible colors instead of just the first hit
            hit = re.search(HSLA_PATTERN, line) # Extract HLSA color from current line in file
            if hit is None:
                new_content += line
                continue
            text_to_replace = line[hit.span()[0]:hit.span()[1]]

            line_hsla = HSLA(*hit.groups()) # Create HSLA object from regular expression result
            line_hsla_name = line_hsla.to_str() # Use the HSLA name color as variable

            if line_hsla_name in source_dict: # If the HSLA name is a key in our source dictionary
                # Patch with exact match
                new_content += line.replace(text_to_replace, source_dict[line_hsla_name]["variable"])
                continue

            if line_hsla_name not in closest_colors: # If the color is not in our temporary dict
                prev_distance = None
                for key in source_dict: # Iterate source dict
                    line_rgba = line_hsla.to_rgba()
                    dict_rgba = source_dict[key]["rgba"]
                    distance = RGBA.color_distance(line_rgba, dict_rgba)

                    if prev_distance is None or distance < prev_distance:
                        prev_distance = distance
                        closest_colors[line_hsla_name] = source_dict[key]

            new_content += line.replace(text_to_replace, closest_colors[line_hsla_name]["variable"])

            #c = closest_colors[line_hsla_name]["hsla"].to_str()
            # print(f"{line_hsla_name} ~ {c}")

    with open(f"{file_path}.new.ts", "w") as file:
        file.write(new_content)


def replace_hsla_by_key_value(file_path, source_dict):
    new_file = ""
    with open(file_path, "r") as file:
        for line in file.readlines():
            content = line.replace("\n", "").replace(";", "").strip()
            hsla_str = content.replace("%", "")
            hit = re.search(HSLA_PATTERN, hsla_str)
            if hit is None:
                new_file += line
                continue

            hsla = HSLA(*hit.groups())
            rgba = hsla.to_rgba()
            rgba_str = rgba.to_str()

            if rgba_str in source_dict:
                variable_name = source_dict[rgba_str]["variable"]
                new_file += f"{variable_name}: {hsla.to_str()}\n"
                continue

            # Last resort, calculate closest
            prev_distance = None
            target_variable = None
            for key in source_dict:
                distance = RGBA.color_distance(
                    rgba, source_dict[key]["rgba"]
                )
                if prev_distance is None or distance < prev_distance:
                    prev_distance = distance
                    target_variable = source_dict[key]["variable"]

            new_file += f"{target_variable}: {hsla.to_str()}\n"

    with open(file_path + ".new.css", "w") as file:
        file.write(new_file)

# Create color variable dictionary (source)
#hsla_dict = build_hsla_dict("./colors/theme-variables.css")

# Find and replace colors using the source dictionary
#find_and_replace_color_variables("./target/styles.ts", color_variables)
# replace_color_variables("./target/styles.ts", color_variables)


hex_to_rgba_dict = build_hex_dict("./colors/light-variables.css")
replace_hsla_by_key_value("./target/old-light.css", hex_to_rgba_dict)