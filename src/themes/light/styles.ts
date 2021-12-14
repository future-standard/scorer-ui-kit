export const styles = {
    "generic": {
        "transparent": {}
    },
    "filterBar": {
        "divider": {
            "backgroundColor": "hsla(0, 0%, 89.4%, 1.000)"
        }
    },
    "form": {
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(120, 1.3%, 85.3%, 1.000)"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "hsla(206, 36.8%, 96.3%, 1.000)",
                    "borderColor": "hsla(120, 1.3%, 85.3%, 1.000)"
                },
                "focused": {
                  "boxShadow": "0px 3px 7px 0px hsla(207, 65.8%, 31%, 0.078)",
                  "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                  "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)"
                },

            },
            "subdivision": {
                "backgroundColor": "hsla(120, 1.3%, 85.3%, 1.000)"
            },
            "required": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(207, 67.8%, 35.3%, 0.071)",
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)"
                },
                "normal": {
                    "borderColor": "hsla(205, 58.9%, 71.4%, 1.000)"
                }
            },
            "valid": {
                "focused": {
                    "boxShadow": "0px 3px 5px 0px hsla(120, 76.6%, 15.1%, 0.071)",
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(120, 35.2%, 71.6%, 1.000)"
                },
                "normal": {
                    "borderColor": "hsla(120, 35.2%, 71.6%, 1.000)"
                }
            },
            "invalid": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(0, 100%, 50%, 0.102)",
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)"
                },
                "normal": {
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)"
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px hsla(195, 67.8%, 35.3%, 0.071)",
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(195, 79.5%, 71.4%, 1.000)"
                },
                "normal": {
                    "backgroundColor": "hsla(0, 0%, 100%, 1.000)",
                    "borderColor": "hsla(195, 79.5%, 71.4%, 1.000)"
                }
            },
            "seperatedValues": {
                "background": {
                    "backgroundImage": "linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"
                },
                "hoverHighlight": {
                    "backgroundColor": "hsla(195, 84.3%, 67.5%, 1.000)"
                }
            }
        },
        "button": {
            "primary": {
                "default": {
                    "backgroundImage": "linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"
                },
                "hover": {
                    "backgroundColor": "hsla(207, 88.2%, 60%, 1.000)"
                },
                "active": {
                    "backgroundColor": "hsla(195, 79.5%, 71.4%, 1.000)"
                },
                "divider": {
                    "backgroundColor": "hsla(202, 70.4%, 62.9%, 1.000)"
                },
                "disabled": {
                    "backgroundImage": "linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"
                },
                "actionArea": {
                    "backgroundImage": "linear-gradient(135.00deg, hsla(200, 77.5%, 68.6%, 1.000) 0%, hsla(207, 80.2%, 64.3%, 1.000) 100%)"
                }
            },
            "secondary": {
                "default": {
                    "backgroundColor": "hsla(0, 0%, 94.9%, 1.000)"
                },
                "hover": {
                    "backgroundColor": "hsla(0, 0%, 85.9%, 1.000)"
                },
                "active": {
                    "backgroundColor": "hsla(204, 18.2%, 78.4%, 1.000)"
                },
                "disabled": {
                    "backgroundColor": "hsla(0, 0%, 97.3%, 1.000)"
                },
                "divider": {
                    "backgroundColor": "hsla(204, 18.2%, 78.4%, 0.302)"
                },
                "actionArea": {
                    "backgroundColor": "hsla(0, 0%, 94.9%, 0.302)"
                }
            },
            "danger": {
                "default": {
                    "backgroundImage": "linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"
                },
                "hover": {
                    "backgroundColor": "hsla(0, 88.4%, 66.3%, 1.000)"
                },
                "active": {
                    "backgroundColor": "hsla(0, 78.8%, 70.4%, 1.000)"
                },
                "disabled": {
                    "backgroundColor": "hsla(0, 78.7%, 85.3%, 1.000)"
                },
                "divider": {
                    "backgroundColor": "hsla(0, 62.1%, 61.8%, 1.000)"
                },
                "actionArea": {
                    "backgroundImage": "linear-gradient(317.51deg, hsla(0, 54%, 60.8%, 1.000) 0%, hsla(0, 71.4%, 67.1%, 1.000) 100%)"
                }
            }
        },
        "switch": {
            "off": {
                "default": {
                    "outer": {
                        "backgroundImage": "linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",
                        "borderColor": "hsla(208, 24.6%, 77.6%, 0.651)"
                    },
                    "inner": {
                        "backgroundImage": "linear-gradient(315.00deg, hsla(205, 82.4%, 64.3%, 1.000) 0%, hsla(195, 83.5%, 54.7%, 1.000) 100%)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundImage": "linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",
                        "borderColor": "hsla(208, 22.7%, 85.3%, 0.651)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(120, 1.3%, 85.3%, 1.000)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundImage": "linear-gradient(180.00deg, hsla(210, 30%, 96.1%, 1.000) 0%, hsla(203, 41.9%, 93.9%, 1.000) 100%)",
                        "borderColor": "hsla(208, 24.6%, 77.6%, 0.651)"
                    }
                }
            },
            "on": {
                "default": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(204, 78.4%, 72.7%, 1.000) 0%, hsla(195, 83.2%, 67.3%, 1.000) 100%)",
                        "borderColor": "hsla(205, 66.5%, 61.4%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundImage": "linear-gradient(180.00deg, hsla(205, 61.9%, 87.6%, 1.000) 0%, hsla(204, 45.5%, 84.9%, 1.000) 100%)",
                        "borderColor": "hsla(205, 89.5%, 85.1%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundImage": "linear-gradient(315.00deg, hsla(204, 68.3%, 72.7%, 0.647) 0%, hsla(195, 83.2%, 67.3%, 0.655) 100%)",
                        "borderColor": "hsla(205, 66.5%, 61.4%, 0.651)"
                    }
                }
            },
            "failure": {
                "default": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(0, 68.5%, 67.6%, 1.000) 0%, hsla(0, 69.1%, 65.7%, 1.000) 100%)",
                        "borderColor": "hsla(0, 66.5%, 61.4%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(0, 60.6%, 73.1%, 1.000) 0.4%, hsla(0, 57.9%, 73.9%, 1.000) 100%)",
                        "borderColor": "hsla(0, 54.2%, 67.5%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                }
            },
            "danger": {
                "default": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(0, 68%, 66.9%, 1.000) 0%, hsla(20, 81.2%, 64.5%, 1.000) 100%)",
                        "borderColor": "hsla(0, 51.2%, 60.6%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(0, 79.5%, 77.1%, 1.000) 0%, hsla(20, 96%, 80.4%, 1.000) 100%)",
                        "borderColor": "hsla(0, 62%, 73.1%, 1.000)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundImage": "linear-gradient(317.51deg, hsla(0, 57%, 81.8%, 1.000) 0%, hsla(19, 100%, 84.9%, 1.000) 100%)",
                        "borderColor": "hsla(0, 78.7%, 85.3%, 1.000)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
                    }
                }
            },
            "locked": {
                "default": {
                    "outer": {
                        "backgroundImage": "linear-gradient(180.00deg, hsla(0, 0%, 100%, 1.000) 0%, hsla(0, 0%, 98.8%, 1.000) 100%)",
                        "borderColor": "hsla(208, 22.7%, 85.3%, 0.651)"
                    },
                    "inner": {
                        "backgroundColor": "hsla(0, 0%, 89.4%, 1.000)"
                    }
                }
            }
        },
        "checkbox": {
            "unchecked": {
                "disabled": {
                    "backgroundColor": "hsla(0, 0%, 98.8%, 1.000)",
                    "borderColor": "hsla(210, 20%, 90.2%, 1.000)",
                },
                "default": {
                    "borderColor": "hsla(208, 24.6%, 77.6%, 1.000)"
                },
                "hover": {
                    "borderColor": "hsla(195, 94.2%, 66.1%, 1.000)"
                }
            },
            "checked": {
                "disabled": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(210, 20%, 90.2%, 1.000)",
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(207, 95.3%, 66.5%, 1.000)"
                },
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(195, 95.3%, 66.5%, 1.000)"
                }
            },
            "indeterminate": {
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(195, 85.4%, 73.1%, 1.000)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px hsla(205, 50.3%, 30%, 0.051)",
                    "backgroundColor": "hsla(205, 89.5%, 77.6%, 1.000)"
                }
            }
        }
    },
    "global": {
        "mainMenu": {
            "iconBackground": {
                "active": {
                    "backgroundColor": "hsla(215, 100%, 75.1%, 1.000)"
                },
                "hover": {
                    "backgroundColor": "hsla(200, 77.8%, 77.1%, 1.000)"
                },
                "default": {
                    "backgroundColor": "hsla(200, 77.8%, 77.1%, 0.000)"
                }
            },
            "background": {
                "boxShadow": "5px 0px 10px 0px hsla(205, 16%, 76.7%, 0.102)",
                "backgroundColor": "hsla(0, 0%, 99.6%, 1.000)"
            },
            "lines": {
                "backgroundColor": "hsla(0, 0%, 93.3%, 1.000)"
            },
            "footerBackground": {
                "backgroundColor": "hsla(0, 0%, 99.6%, 0.851)"
            }
        },
        "background": {
            "backgroundImage": "linear-gradient(180.00deg, hsla(210, 20%, 98%, 1.000) 0%, hsla(210, 20%, 96.1%, 1.000) 100%)"
        }
    },
    "indicators": {
        "spinner": {
            "danger": {
                "base": {
                    "borderColor": "hsla(0, 78.8%, 70.4%, 1.000)"
                },
                "top": {
                    "borderColor": "hsla(0, 0%, 100%, 1.000)"
                }
            },
            "secondary": {
                "top": {
                    "borderColor": "hsla(0, 0%, 100%, 1.000)"
                },
                "base": {
                    "borderColor": "hsla(0, 0%, 75.7%, 1.000)"
                }
            },
            "primary": {
                "top": {
                    "borderColor": "hsla(0, 0%, 100%, 1.000)"
                },
                "base": {
                    "borderColor": "hsla(195, 89.4%, 81.6%, 1.000)"
                }
            },
            "simple": {
                "top": {
                    "borderColor": "hsla(0, 0%, 100%, 1.000)"
                },
                "base": {
                    "borderColor": "hsla(0, 0%, 76.9%, 0.329)"
                }
            }
        }
    },
    "filters": {
        "dropdownContainer": {
            "background": {
                "boxShadow": "0px 5px 25px 0px hsla(210, 66.9%, 46.3%, 0.122)",
                "backgroundColor": "hsla(0, 0%, 100%, 1.000)"
            },
            "topBorder": {
                "backgroundColor": "hsla(205, 100%, 72%, 1.000)"
            }
        }
    },
    "general": {
        "divider": {
            "backgroundColor": "hsla(0, 0%, 93.3%, 1.000)"
        }
    },
    "feedbackBar": {
        "neutral": {
            "backgroundColor": "hsla(205, 22.1%, 66.3%, 1.000)"
        },
        "error": {
            "backgroundColor": "hsla(0, 78.8%, 70.4%, 1.000)"
        },
        "info": {
            "backgroundColor": "hsla(205, 77.4%, 63.5%, 1.000)"
        },
        "success": {
            "backgroundColor": "hsla(136, 49.5%, 57.3%, 1.000)"
        },
        "warning": {
            "backgroundColor": "hsla(30, 91%, 61%, 1.000)"
        }
    }
};