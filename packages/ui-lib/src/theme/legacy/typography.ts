import type {TypeCellAlignment } from '../../Tables';

type TypographyStyle = {
  textAlign?: string;
  fontStyle?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  textDecoration?: string;
  textTransform?: string;
  color?: string;
};

type AlignmentStyles = {
  [K in TypeCellAlignment]?: TypographyStyle;
} & {
  [key: string]: TypographyStyle | undefined;
};

type ColumnDataStyles = {
  firstColumn?: TypographyStyle;
  lowImportance?: AlignmentStyles;
  normalImportance?: AlignmentStyles;
  highImportance?: AlignmentStyles;
  unit?: TypographyStyle;
  [key: string]: AlignmentStyles | TypographyStyle | undefined;
};

type HeaderStyles = {
  [K in TypeCellAlignment]?: TypographyStyle;
} & {
  [key: string]: TypographyStyle | undefined;
}

type InputStyles = {
  label?: TypographyStyle;
  placeholder?: { [key: string]: TypographyStyle };
  value?: { [key: string]: TypographyStyle };
};

type SubOptionStyles = {
  label?: TypographyStyle;
  value?: TypographyStyle;
};

type DatepickerStyles = {
  metaHeader?: { [key: string]: TypographyStyle };
  calendar?: { [key: string]: TypographyStyle };
  monthLink?: { [key: string]: TypographyStyle };
  focusedMonth?: TypographyStyle;
  focusedYear?: TypographyStyle;
};

type FormTypography = {
  label?: { [key: string]: TypographyStyle };
  tip?: TypographyStyle;
  button?: { [key: string]: { [key: string]: TypographyStyle } };
  input?: InputStyles;
  labelInformation?: TypographyStyle;
  select?: { [key: string]: TypographyStyle };
  feedback?: { message?: TypographyStyle };
};

type ContentTypography = {
  'section-H2'?: TypographyStyle;
  sectionH3?: TypographyStyle;
  actionParagraph?: TypographyStyle;
  hyperlink?: { [key: string]: TypographyStyle };
};

type FilterTypography = {
  datepicker?: DatepickerStyles;
  value?: TypographyStyle;
  subOption?: SubOptionStyles;
  presetAction?: TypographyStyle;
  filterButton?: { [key: string]: TypographyStyle };
  searchInput?: { [key: string]: TypographyStyle };
};

type TableTypography = {
  columnData?: ColumnDataStyles;
  header?: HeaderStyles;
  subHeader?: HeaderStyles;
  [key: string]: ColumnDataStyles | HeaderStyles | undefined;
};

type MetaTypography = {
  tagList?: {
    emptyStates?: { [key: string]: TypographyStyle };
    item?: { [key: string]: TypographyStyle };
  };
};

export const typography: {
  pageHeader?: { [key: string]: TypographyStyle };
  form?: FormTypography;
  content?: ContentTypography;
  feedbackBar?: { message?: TypographyStyle };
  searchBar?: { [key: string]: TypographyStyle };
  meta?: MetaTypography;
  table?: TableTypography;
  filters?: FilterTypography;
  tables?: { [key: string]: TypographyStyle };
} = {
    // DEPRECATED: pageHeader
    "pageHeader": {
      "introduction": {
          "textAlign": "left",
          "fontStyle": "italic",
          "fontSize": "14px",
          "fontWeight": 300,
          "lineHeight": "25px",
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "areaTitle": {
          "textAlign": "left",
          "fontSize": "12px",
          "fontWeight": 400,
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "mainTitle": {
          "textAlign": "left",
          "fontSize": "26px",
          "fontWeight": 600,
          "textDecoration": "none",
          "color": "var(--grey-12)"
      }
  },
  "form": {
      "label": {
          "meta": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 300,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "default": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "disabled": {
              "textAlign": "left",
              "fontSize": "16px",
              "fontWeight": 300,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "failure": {
              "textAlign": "left",
              "fontSize": "16px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--warning-8)"
          },
          "meta(Selected)": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 600,
              "textDecoration": "none",
              "color": "var(--primary-8)"
          }
      },
      "tip": {
          "textAlign": "left",
          "fontStyle": "italic",
          "fontSize": "14px",
          "fontWeight": 500,
          "lineHeight": "25px",
          "textDecoration": "none",
          "color": "var(--primary-7)"
      },
      "button": {
          "secondary": {
              "normal": {
                  "textAlign": "center",
                  "fontSize": "16px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "large": {
                  "textAlign": "center",
                  "fontSize": "20px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "small": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "xsmall": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              }
          },
          "primary": {
              "large": {
                  "textAlign": "center",
                  "fontSize": "20px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "normal": {
                  "textAlign": "center",
                  "fontSize": "16px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "small": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "xsmall": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              }
          },
          "danger": {
              "large": {
                  "textAlign": "center",
                  "fontSize": "20px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "normal": {
                  "textAlign": "center",
                  "fontSize": "16px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "small": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "xsmall": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              }
          }
      },
      "input": {
          "label": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "placeholder": {
              "normal": {
                  "textAlign": "left",
                  "fontStyle": "italic",
                  "fontSize": "16px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              },
              "compact": {
                  "textAlign": "left",
                  "fontStyle": "italic",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "lineHeight": "15px",
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              }
          },
          "value": {
              "normal": {
                  "textAlign": "left",
                  "fontSize": "16px",
                  "fontWeight": 500,
                  "lineHeight": "25px",
                  "textDecoration": "none",
                  "color": "var(--grey-12)"
              },
              "compact": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "lineHeight": "15px",
                  "textDecoration": "none",
                  "color": "var(--grey-12)"
              }
          }
      },
      "labelInformation": {
          "textAlign": "left",
          "fontStyle": "italic",
          "fontSize": "14px",
          "fontWeight": 300,
          "lineHeight": "25px",
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "select": {
          "option": {
              "textAlign": "left",
              "fontSize": "16px",
              "fontWeight": 500,
              "lineHeight": "15px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "selectedValue": {
              "textAlign": "left",
              "fontSize": "16px",
              "fontWeight": 500,
              "lineHeight": "15px",
              "textDecoration": "none",
              "color": "var(--black-11)"
          },
          "option(Hover)": {
              "textAlign": "left",
              "fontSize": "16px",
              "fontWeight": 500,
              "lineHeight": "15px",
              "textDecoration": "none",
              "color": "var(--primary-11)"
          }
      },
      "feedback": {
          "message": {
              "textAlign": "left",
              "fontStyle": "italic",
              "fontSize": "14px",
              "fontWeight": 500,
              "lineHeight": "20px",
              "textDecoration": "none",
              "color": "var(--white-1)"
          }
      }
  },
  "content": {
      "section-H2": {
          "textAlign": "left",
          "fontSize": "20px",
          "fontWeight": 400,
          "textDecoration": "none",
          "color": "var(--grey-12)"
      },
      "sectionH3": {
          "textAlign": "left",
          "fontSize": "16px",
          "fontWeight": 400,
          "textDecoration": "none",
          "color": "var(--grey-12)"
      },
      "actionParagraph": {
          "textAlign": "left",
          "fontSize": "14px",
          "fontWeight": 300,
          "lineHeight": "25px",
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "hyperlink": {
          "hover": {
              "textAlign": "left",
              "fontStyle": "italic",
              "fontSize": "14px",
              "fontWeight": 500,
              "lineHeight": "25px",
              "textDecoration": "none",
              "color": "var(--primary-8)"
          },
          "base": {
              "textAlign": "left",
              "fontStyle": "italic",
              "fontSize": "14px",
              "fontWeight": 500,
              "lineHeight": "25px",
              "textDecoration": "none",
              "color": "var(--primary-9)"
          }
      }
  },
  "feedbackBar": {
      "message": {
          "textAlign": "left",
          "fontSize": "14px",
          "fontWeight": 400,
          "lineHeight": "15px",
          "letterSpacing": "-0.2px",
          "textDecoration": "none",
          "color": "var(--white-1)"
      }
  },
  "searchBar": {
      "placeholder": {
          "textAlign": "left",
          "fontStyle": "italic",
          "fontSize": "14px",
          "fontWeight": 700,
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "value": {
          "textAlign": "left",
          "fontSize": "14px",
          "fontWeight": 600,
          "textDecoration": "none",
          "color": "var(--grey-12)"
      }
  },
  "meta": {
      "tagList": {
          "emptyStates": {
              "normal": {
                  "textAlign": "left",
                  "fontStyle": "italic",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              },
              "small": {
                  "textAlign": "left",
                  "fontStyle": "italic",
                  "fontSize": "12px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              }
          },
          "item": {
              "normal": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              },
              "small": {
                  "textAlign": "left",
                  "fontSize": "12px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              }
          }
      }
  },
  "table": {
      "columnData": {
          "normalImportance": {
              "right": {
                  "textAlign": "right",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              },
              "left": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              },
              "center": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              }
          },
          "highImportance": {
              "right": {
                  "textAlign": "right",
                  "fontSize": "14px",
                  "fontWeight": 900,
                  "textDecoration": "none",
                  "color": "var(--grey-12)"
              },
              "center": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 900,
                  "textDecoration": "none",
                  "color": "var(--grey-12)"
              },
              "left": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 900,
                  "textDecoration": "none",
                  "color": "var(--grey-12)"
              }
          },
          "firstColumn": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 500,
              "textDecoration": "none",
              "color": "var(--grey-12)"
          },
          "lowImportance": {
              "right": {
                  "textAlign": "right",
                  "fontStyle": "italic",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              },
              "center": {
                  "textAlign": "center",
                  "fontStyle": "italic",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              },
              "left": {
                  "textAlign": "left",
                  "fontStyle": "italic",
                  "fontSize": "14px",
                  "fontWeight": 500,
                  "textDecoration": "none",
                  "color": "var(--grey-a11)"
              }
          },
          "unit": {
              "textAlign": "right",
              "fontStyle": "italic",
              "fontSize": "12px",
              "fontWeight": 500,
              "textDecoration": "none",
              "color": "var(--grey-a11)"
          }
      },
      "header": {
          "center": {
              "textAlign": "center",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "left": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "right": {
              "textAlign": "right",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          }
      },
      "subHeader": {
          "center": {
              "textAlign": "center",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "left": {
              "textAlign": "left",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "right": {
              "textAlign": "right",
              "fontSize": "14px",
              "fontWeight": 700,
              "letterSpacing": "0.4px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          }
      }
  },
  "filters": {
      "datepicker": {
          "metaHeader": {
              "default": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 300,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              },
              "active": {
                  "textAlign": "left",
                  "fontSize": "14px",
                  "fontWeight": 600,
                  "textDecoration": "none",
                  "color": "var(--primary-8)"
              }
          },
          "calendar": {
              "active": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 400,
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              },
              "otherMonth": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 400,
                  "textDecoration": "none",
                  "color": "var(--grey-a8)"
              },
              "default": {
                  "textAlign": "center",
                  "fontSize": "14px",
                  "fontWeight": 400,
                  "textDecoration": "none",
                  "color": "var(--grey-11)"
              },
              "header": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 700,
                  "textDecoration": "none",
                  "color": "var(--grey-a12)"
              }
          },
          "monthLink": {
              "default": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 700,
                  "lineHeight": "20px",
                  "textTransform": "uppercase",
                  "letterSpacing": "0.4px",
                  "textDecoration": "none",
                  "color": "var(--grey-9)"
              },
              "hover": {
                  "textAlign": "center",
                  "fontSize": "12px",
                  "fontWeight": 700,
                  "lineHeight": "20px",
                  "textTransform": "uppercase",
                  "letterSpacing": "0.4px",
                  "textDecoration": "none",
                  "color": "var(--white-1)"
              }
          },
          "focusedMonth": {
              "textAlign": "center",
              "fontSize": "20px",
              "fontWeight": 400,
              "lineHeight": "20px",
              "letterSpacing": "0.5px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "focusedYear": {
              "textAlign": "center",
              "fontSize": "10px",
              "fontWeight": 700,
              "lineHeight": "20px",
              "textTransform": "uppercase",
              "letterSpacing": "0.3333333px",
              "textDecoration": "none",
              "color": "var(--grey-11)"
          }
      },
      "value": {
          "textAlign": "left",
          "fontSize": "14px",
          "fontWeight": 500,
          "letterSpacing": "0.2px",
          "textDecoration": "none",
          "color": "var(--grey-11)"
      },
      "subOption": {
          "label": {
              "textAlign": "left",
              "fontSize": "12px",
              "fontWeight": 300,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "value": {
              "textAlign": "left",
              "fontSize": "13px",
              "fontWeight": 500,
              "textDecoration": "none",
              "color": "var(--grey-a12)"
          }
      },
      "presetAction": {
          "textAlign": "left",
          "fontSize": "13px",
          "fontWeight": 500,
          "textDecoration": "none",
          "color": "var(--grey-12)"
      },
      "filterButton": {
          "default": {
              "textAlign": "left",
              "fontSize": "12px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "active": {
              "textAlign": "left",
              "fontSize": "12px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--white-1)"
          },
          "hover": {
              "textAlign": "left",
              "fontSize": "12px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--white-1)"
          }
      },
      "searchInput": {
          "placeholder": {
              "textAlign": "left",
              "fontStyle": "italic",
              "fontSize": "12px",
              "fontWeight": 500,
              "textDecoration": "none",
              "color": "var(--grey-11)"
          },
          "value": {
              "textAlign": "left",
              "fontSize": "12px",
              "fontWeight": 400,
              "textDecoration": "none",
              "color": "var(--grey-12)"
          }
      }
  },
  "tables": {
      "groupName": {
          "textAlign": "left",
          "fontSize": "12px",
          "fontWeight": 400,
          "letterSpacing": "0.3px",
          "textDecoration": "none",
          "color": "var(--grey-a11)"
      }
  }
};