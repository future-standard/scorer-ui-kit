import math
import re


class HSLA:
    def __init__(self, h, s, l, a):
        self.h = float(h)
        self.s = float(s)
        self.l = float(l)
        self.a = float(a)

    def to_str(self):
        return f"hsla({self.h}, {self.s}%, {self.l}%, {self.a});"


class RGB:
    def __init__(self, r, g, b, a=1):
        self.r = r
        self.g = g
        self.b = b
        self.a = a

    @staticmethod
    def from_hsla(hsla: HSLA):
        h = hsla.h
        s = hsla.s
        l = hsla.l
        a = hsla.a

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

        return RGB(r, g, b, alpha)

    @staticmethod
    def color_distance(e1, e2) -> float:
        rmean = float((e1.r + e2.r) / 2)
        r = float(e1.r - e2.r)
        g = float(e1.g - e2.g)
        b = float(e1.b - e2.b)
        left = int((512.0 + rmean) * r * r) >> 8
        middle = int(4 * g * g)
        right = int((767.0 - rmean) * b * b) >> 8
        return left + middle + right


def build_variables_dict(file_path):
    #well formed
    pattern = r"hsla\((\d+),\s*([0-9]+\.?[0-9]*%?),\s*([0-9]+\.?[0-9]*%?),\s*([0-9]+\.?[0-9]*)\);"
    #broad pattern
    #pattern = r"hsla\(([^\)]+)\);"
    color_variables = {}
    with open(file_path, "r") as file:
        for line in file.readlines():
            segments = [s.strip() for s in line.replace("\n", "").split(":")]
            if len(segments) < 2:
                continue
            hsla_str = segments[1].replace("%", "")
            variable_name = segments[0]
            key = segments[1].split(";")[0]
            hit = re.search(pattern, hsla_str)
            if hit:
                hsla = HSLA(*hit.groups())
                color_variables[key] = {
                    "variable": variable_name,
                    "hsla": hsla,
                    "rgb": RGB.from_hsla(hsla)
                }

    return color_variables

def find_and_replace_color_variables(file_path, source_dict):
    with open(file_path, "r") as file:
        new_content = ""
        for line in file.readlines():
            new_line = line
            for key in source_dict:
                var_template = 'var({color})'.format(color = source_dict[key]["variable"]);
                new_line = new_line.replace(key, var_template)
            new_content += new_line

    with open(f"{file_path}.new.ts", "w") as file:
        file.write(new_content)

#find_closest_variable(color, color_dict) -> color
#find_and_replace_color_variables(file_path, color_dict) -> None

# Load dictionary of color and variables
color_variables = build_variables_dict("./colors/theme-variables.css")

# Replace one file at the time
find_and_replace_color_variables("./target/colors.ts", color_variables)
find_and_replace_color_variables("./target/custom.ts", color_variables)
find_and_replace_color_variables("./target/styles.ts", color_variables)
find_and_replace_color_variables("./target/typography.ts", color_variables)

#packages/ui-lib/src/themes/light/color-script/script.py
#packages/ui-lib/src/themes/light/light.ts