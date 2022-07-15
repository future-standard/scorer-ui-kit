import { colors } from './colors';

export const styles = {
    "global": {
        "mainMenu": {
            "background": {
                "boxShadow": "5px 0px 10px 0px hsla(205, 14%, 16.9%, 0.251)",
                "backgroundColor": "hsla(210, 7.9%, 14.9%, 1.000)"
            },
            "footerBackground": {
                "backgroundColor": "hsla(210, 7.9%, 14.9%, 0.800)"
            },
            "lines": {
                "backgroundColor": "hsla(225, 3.5%, 22.4%, 1.000)"
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
                "boxShadow": "5px 0px 10px 0px hsla(205, 14%, 16.9%, 0.251)",
                "backgroundColor": "hsla(210, 7.9%, 14.9%, 1.000)"
            }
        },
        "topBar": {
            "lines": {
                "backgroundColor": "hsla(225, 3.5%, 22.4%, 1.000)"
            }
        },
        "background": {
            "backgroundColor": "hsla(220, 4.2%, 13.9%, 1.000)",
            "backgroundImage": "linear-gradient(180.00deg, hsla(220, 4.2%, 13.9%, 1.000) 0%, hsla(220, 4.9%, 12%, 1.000) 100%)"
        }
    },
    "general": {
        "divider": {
            "backgroundColor": "hsla(213, 11.6%, 18.6%, 1.000)"
        }
    },
    "tables": {
        "loadingOverlay": {
            "backgroundColor": "hsla(220, 4.2%, 13.9%, 0.851)",
            "backgroundImage": "linear-gradient(180.00deg, hsla(220, 4.2%, 13.9%, 0.851) 0%, hsla(220, 4.2%, 13.9%, 1.000) 100%)"
        },
        "rows": {
            "divider": {
                "backgroundColor": colors.divider
            }
        },
        "header": {
            "groupLine": {
                "backgroundColor": "hsla(240, 4.7%, 25.1%, 1.000)"
            },
            "divider": {
                "backgroundColor": colors.divider
            },
            "sortable": {
                "default": {
                    "backgroundColor": "hsla(221, 15.9%, 38.2%, 0.000)"
                },
                "hover": {
                    "backgroundColor": "hsla(221, 15.9%, 38.2%, 1.000)"
                }
            }
        }
    },
    "filters": {
        "filterButton": {
            "hover": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(205, 86.8%, 70.4%, 1.000)",
                "borderColor": "hsla(205, 100%, 72%, 1.000)",
                "border": "hsla(205, 100%, 72%, 1.000) 1px solid",
                "textColor": "hsla(0, 0%, 100%, 1.000)"
            },
            "default": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                "borderColor": "hsla(210, 3.5%, 22.4%, 1.000)",
                "border": "hsla(210, 3.5%, 22.4%, 1.000) 1px solid",
                "textColor": "hsla(0, 0%, 86.3%, 1.000)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(205, 81.2%, 64.5%, 1.000)",
                "borderColor": "hsla(205, 100%, 72%, 1.000)",
                "border": "hsla(205, 100%, 72%, 1.000) 1px solid",
                "textColor": "hsla(0, 0%, 100%, 1.000)"
            }
        },
        "searchInput": {
            "default": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                "borderColor": "hsla(210, 3.5%, 22.4%, 1.000)",
                "border": "hsla(210, 3.5%, 22.4%, 1.000) 1px solid"
            },
            "focused": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(210, 14.3%, 19.2%, 1.000)",
                "borderColor": "hsla(207, 19.8%, 34.7%, 1.000)",
                "border": "hsla(207, 19.8%, 34.7%, 1.000) 1px solid"
            }
        },
        "dropdownContainer": {
            "topBorder": {
                "backgroundColor": "hsla(205, 100%, 72%, 1.000)"
            },
            "background": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                "borderColor": colors.divider,
                "border": colors.divider + " 1px solid"
            }
        }
    },
    "form": {
        "checkbox": {
            "unchecked": {
                "disabled": {
                  "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                  "borderColor": "hsla(208, 24.6%, 77.6%, 1.000)",
                  "border": "hsla(208, 24.6%, 77.6%, 1.000) 2px solid"
                },
                "default": {
                    "borderColor": "hsla(208, 24.6%, 77.6%, 1.000)",
                    "border": "hsla(208, 24.6%, 77.6%, 1.000) 2px solid"
                }
            },
            "checked": {
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(207, 95.3%, 66.5%, 1.000)"
                },
                "disabled": {
                  "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                  "backgroundColor": "hsla(207, 4.8%, 37.1%, 1.000)",
                },
            }
        },
        "button": {
            "secondary": {
                "hover": {
                    "backgroundColor": "hsla(205, 33.3%, 32.9%, 1.000)"
                },
                "disabled": {
                    "backgroundColor": "hsla(205, 12.8%, 18.4%, 1.000)"
                },
                "actionArea": {
                    "backgroundColor": "hsla(0, 0%, 94.9%, 0.302)"
                },
                "default": {
                    "backgroundColor": "hsla(205, 15.1%, 28.6%, 1.000)"
                },
                "divider": {
                    "backgroundColor": "hsla(204, 18.2%, 78.4%, 0.302)"
                },
                "active": {
                    "backgroundColor": "hsla(205, 56.9%, 28.2%, 1.000)"
                }
            }
        },
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(216, 3.4%, 28.8%, 1.000)",
                    "border": "hsla(216, 3.4%, 28.8%, 1.000) 1px solid"
                },
                "focused": {
                    "backgroundColor": "hsla(210, 14.3%, 19.2%, 1.000)",
                    "borderColor": "hsla(207, 19.8%, 34.7%, 1.000)",
                    "border": "hsla(207, 19.8%, 34.7%, 1.000) 1px solid",
                    "boxShadow": "0px 3px 7px 0px hsla(205, 68.4%, 7.5%, 0.071)"
                }
            },
            "required": {
                "normal": {
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)",
                    "border": "hsla(205, 58.9%, 71.4%, 1.000) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071)",
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)",
                    "border": "hsla(205, 58.9%, 71.4%, 1.000) 2px solid"
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(195, 67.8%, 35.3%, 0.071)",
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(195, 79.5%, 71.4%, 1.000)",
                    "border": "hsla(195, 79.5%, 71.4%, 1.000) 2px solid"
                },
                "normal": {
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(195, 79.5%, 71.4%, 1.000)",
                    "border": "hsla(195, 79.5%, 71.4%, 1.000) 1px solid"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "hsla(220, 3.6%, 16.3%, 1.000)",
                    "borderColor": "hsla(220, 2.9%, 20.6%, 1.000)",
                    "border": "hsla(220, 2.9%, 20.6%, 1.000) 1px solid"
                }
            },
            "valid": {
                "normal": {
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(120, 35.2%, 71.6%, 1.000)",
                    "border": "hsla(120, 35.2%, 71.6%, 1.000) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071)",
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(120, 35.2%, 71.6%, 1.000)",
                    "border": "hsla(120, 35.2%, 71.6%, 1.000) 2px solid"
                }
            },
            "invalid": {
                "normal": {
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)",
                    "border": "hsla(0, 78.8%, 70.4%, 1.000) 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(0, 100%, 50%, 0.102)",
                    "backgroundColor": "hsla(210, 4.3%, 18%, 1.000)",
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)",
                    "border": "hsla(0, 78.8%, 70.4%, 1.000) 2px solid"
                }
            }
        }
    },
    "indicators": {
        "spinner": {
            "secondary": {
                "top": {
                    "borderColor": "hsla(195, 59.4%, 72%, 1.000)",
                    "border": "hsla(195, 59.4%, 72%, 1.000) 3px solid"
                },
                "base": {
                    "borderColor": "hsla(0, 2%, 29.6%, 1.000)",
                    "border": "hsla(0, 2%, 29.6%, 1.000) 3px solid"
                }
            },
            "danger": {
                "base": {
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)",
                    "border": "hsla(0, 78.8%, 70.4%, 1.000) 3px solid"
                },
                "top": {
                    "borderColor": "hsla(0, 91.5%, 72.2%, 1.000)",
                    "border": "hsla(0, 91.5%, 72.2%, 1.000) 3px solid"
                }
            },
            "simple": {
                "base": {
                    "borderColor": "hsla(0, 0%, 76.9%, 0.329)",
                    "border": "hsla(0, 0%, 76.9%, 0.329) 3px solid"
                },
                "top": {
                    "borderColor": "hsla(0, 0%, 100%, 1.000)",
                    "border": "hsla(0, 0%, 100%, 1.000) 3px solid"
                }
            },
            "primary": {
                "base": {
                    "borderColor": "hsla(195, 54.1%, 30.8%, 1.000)",
                    "border": "hsla(195, 54.1%, 30.8%, 1.000) 3px solid"
                },
                "top": {
                    "borderColor": "hsla(210, 100%, 65.9%, 1.000)",
                    "border": "hsla(210, 100%, 65.9%, 1.000) 3px solid"
                }
            }
        }
    },
    "modal": {
        "container": {
            "boxShadow": "0px 10px 15px 0px hsla(205, 38.7%, 12.2%, 0.149)",
            "backgroundColor": "hsla(210, 17.1%, 13.7%, 1.000)",
            "borderColor": "hsla(206, 7.1%, 19.4%, 1.000)",
            "border": "hsla(206, 7.1%, 19.4%, 1.000) 1px solid"
        },
        "overlay": {
            "backgroundColor": "hsla(203, 100%, 4.7%, 0.647)"
        }
    }
};