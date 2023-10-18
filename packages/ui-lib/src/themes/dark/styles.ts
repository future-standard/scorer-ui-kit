import { colors } from './colors';

export const styles = {
    "global": {
        "mainMenu": {
            "background": {
                "boxShadow": "5px 0px 10px 0px var(--success-12)",
                "backgroundColor": "var(--success-12)"
            },
            "footerBackground": {
                "backgroundColor": "var(--success-12)"
            },
            "lines": {
                "backgroundColor": "var(--success-12)"
            },
            "iconBackground": {
                "default": {
                    "backgroundColor": colors.menu.default
                },
                "hover": {
                    "backgroundColor": colors.menu.hover
                },
                "active": {
                    "backgroundColor": colors.menu.active
                }
            },
            "desktop": {
                "open": {}
            }
        },
        "drawer": {
            "background": {
                "boxShadow": "5px 0px 10px 0px var(--success-12)",
                "backgroundColor": "var(--success-12)"
            }
        },
        "topBar": {
            "lines": {
                "backgroundColor": "var(--success-12)"
            }
        },
        "background": {
            "backgroundColor": "var(--success-12)",
            "backgroundImage": "linear-gradient(180.00deg, var(--success-12) 0%, var(--grey-12) 100%)"
        }
    },
    "general": {
        "divider": {
            "backgroundColor": "var(--success-12)"
        }
    },
    "tables": {
        "loadingOverlay": {
            "backgroundColor": "var(--success-12)",
            "backgroundImage": "linear-gradient(180.00deg, var(--success-12) 0%, var(--success-12) 100%)"
        },
        "rows": {
            "divider": {
                "backgroundColor": colors.divider
            }
        },
        "header": {
            "groupLine": {
                "backgroundColor": "var(--success-12)"
            },
            "divider": {
                "backgroundColor": colors.divider
            },
            "sortable": {
                "default": {
                    "backgroundColor": "var(--grey-11)"
                },
                "hover": {
                    "backgroundColor": "var(--grey-11)"
                }
            }
        }
    },
    "filters": {
        "filterButton": {
            "hover": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--primary-7)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-a12)"
            },
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--success-12)",
                "borderColor": "var(--success-12)",
                "border": "var(--success-12) 1px solid",
                "textColor": "var(--grey-7)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--primary-8)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-a12)"
            }
        },
        "searchInput": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--success-12)",
                "borderColor": "var(--success-12)",
                "border": "var(--success-12) 1px solid"
            },
            "focused": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--success-12)",
                "borderColor": "var(--grey-11)",
                "border": "var(--grey-11) 1px solid"
            }
        },
        "dropdownContainer": {
            "topBorder": {
                "backgroundColor": "var(--primary-7)"
            },
            "background": {
                "boxShadow": "0px 4px 9px 0px var(--grey-a9)",
                "backgroundColor": "var(--success-12)",
                "borderColor": colors.divider,
                "border": colors.divider + " 1px solid"
            }
        }
    },
    "form": {
        "checkbox": {
            "unchecked": {
                "disabled": {
                  "backgroundColor": "var(--success-12)",
                  "borderColor": "var(--grey-8)",
                  "border": "var(--grey-8) 2px solid"
                },
                "default": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 2px solid"
                }
            },
            "checked": {
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-8)"
                },
                "disabled": {
                  "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                  "backgroundColor": "var(--grey-11)",
                },
            }
        },
        "button": {
            "secondary": {
                "hover": {
                    "backgroundColor": "var(--grey-11)"
                },
                "disabled": {
                    "backgroundColor": "var(--success-12)"
                },
                "actionArea": {
                    "backgroundColor": "var(--grey-3)"
                },
                "default": {
                    "backgroundColor": "var(--success-11)"
                },
                "divider": {
                    "backgroundColor": "var(--grey-8)"
                },
                "active": {
                    "backgroundColor": "var(--grey-a1)"
                }
            },
            "danger": {
              "disabled": {
                  "backgroundColor": "var(--error-11)"
              },
              "divider": {
                  "backgroundColor": "var(--grey-8)"
              }
          },
        },
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--grey-11)",
                    "border": "var(--grey-11) 1px solid"
                },
                "focused": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--grey-11)",
                    "border": "var(--grey-11) 1px solid",
                    "boxShadow": "0px 3px 7px 0px var(--grey-a9)"
                }
            },
            "required": {
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-11)",
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-11)",
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                },
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--success-12)",
                    "border": "var(--success-12) 1px solid"
                }
            },
            "valid": {
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 5px 0px var(--success-12)",
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 2px solid"
                }
            },
            "invalid": {
                "normal": {
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--error-8)",
                    "border": "var(--error-8) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--error-a1)",
                    "backgroundColor": "var(--success-12)",
                    "borderColor": "var(--error-8)",
                    "border": "var(--error-8) 2px solid"
                }
            }
        }
    },
    "indicators": {
        "spinner": {
            "secondary": {
                "top": {
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 3px solid"
                },
                "base": {
                    "borderColor": "var(--grey-11)",
                    "border": "var(--grey-11) 3px solid"
                }
            },
            "simple": {
                "base": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 3px solid"
                },
                "top": {
                    "borderColor": "var(--white-a12)",
                    "border": "var(--white-a12) 3px solid"
                }
            },
            "primary": {
                "base": {
                    "borderColor": "var(--info-11)",
                    "border": "var(--info-11) 3px solid"
                },
                "top": {
                    "borderColor": "var(--primary-8)",
                    "border": "var(--primary-8) 3px solid"
                }
            }
        }
    },
    "modal": {
        "container": {
            "boxShadow": "0px 10px 15px 0px var(--info-12)",
            "backgroundColor": "var(--success-12)",
            "borderColor": "var(--success-12)",
            "border": "var(--success-12) 1px solid"
        },
        "overlay": {
            "backgroundColor": "var(--grey-a11)"
        }
    }
};