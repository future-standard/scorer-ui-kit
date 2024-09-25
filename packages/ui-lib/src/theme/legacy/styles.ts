import { colors } from './colors';

export const styles = {
    "generic": {
        "transparent": {}
    },
    "form": {
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": colors.input.border.default,
                    "border": colors.input.border.default + " 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-a2)",
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "var(--primary-2)",
                    "borderColor": "var(--grey-7)",
                    "border": "var(--grey-7) 1px solid"
                }
            },
            "subdivision": {
                "backgroundColor": "var(--grey-7)"
            },
            "required": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-a2)",
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid",
                    "backgroundColor": "var(--grey-1)",
                }
            },
            "valid": {
                "focused": {
                    "boxShadow": "0px 3px 5px 0px var(--success-a2)",
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 1px solid",
                    "backgroundColor": "var(--grey-1)",
                }
            },
            "invalid": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--warning-a2)",
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--warning-8)",
                    "border": "var(--warning-8) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--warning-8)",
                    "border": "var(--warning-8) 1px solid",
                    "backgroundColor": "var(--grey-1)",
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-a2)",
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                },
                "normal": {
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "seperatedValues": {
                "background": {
                    "backgroundColor": "var(--primary-7)",
                    "backgroundImage": "linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"
                },
                "hoverHighlight": {
                    "backgroundColor": "var(--primary-7)"
                }
            }
        },
        "button": {
            "primary": {
                "default": {
                    "backgroundColor": "var(--primary-9)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--primary-10)"
                },
                "active": {
                    "backgroundColor": "var(--primary-9)"
                },
                "divider": {
                    "backgroundColor": "var(--primary-a8)"
                },
                "disabled": {
                    "backgroundColor": "var(--primary-a10)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"
                },
                "actionArea": {
                    "backgroundColor": "var(--primary-9)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"
                }
            },
            "secondary": {
                "default": {
                    "backgroundColor": "var(--grey-9)"
                },
                "hover": {
                    "backgroundColor": "var(--grey-10)"
                },
                "active": {
                    "backgroundColor": "var(--grey-9)"
                },
                "disabled": {
                    "backgroundColor": "var(--grey-a10)"
                },
                "divider": {
                    "backgroundColor": "var(--grey-a8)"
                },
                "actionArea": {
                    "backgroundColor": "var(--grey-9)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--grey-9) 0%, var(--grey-8) 100%)"
                }
            },
            "danger": {
                "default": {
                    "backgroundColor": "var(--warning-9)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--warning-10)"
                },
                "active": {
                    "backgroundColor": "var(--warning-9)"
                },
                "disabled": {
                    "backgroundColor": "var(--warning-a10)"
                },
                "divider": {
                    "backgroundColor": "var(--warning-8)"
                },
                "actionArea": {
                    "backgroundColor": "var(--warning-9)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"
                }
            }
        },
        "switch": {
            "off": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--grey-3)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--primary-2) 0%, var(--primary-3) 100%)",
                        "borderColor": "var(--grey-a8)",
                        "border": "var(--grey-a8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--primary-7)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--grey-1)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--grey-1)0%, var(--grey-1) 100%)",
                        "borderColor": "var(--grey-a7)",
                        "border": "var(--grey-a7) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--grey-7)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--grey-3)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--grey-3) 0%, var(--primary-3) 100%)",
                        "borderColor": "var(--grey-a8)",
                        "border": "var(--grey-a8) 1px solid"
                    }
                }
            },
            "on": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--primary-7)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--primary-7) 0%, var(--primary-7) 100%)",
                        "borderColor": "var(--primary-8)",
                        "border": "var(--primary-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--primary-5)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--primary-5) 0%, var(--primary-5) 100%)",
                        "borderColor": "var(--primary-6)",
                        "border": "var(--primary-6) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--primary-a7)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--primary-a7) 0%, var(--primary-a7) 100%)",
                        "borderColor": "var(--primary-a8)",
                        "border": "var(--primary-a8) 1px solid"
                    }
                }
            },
            "failure": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--warning-9)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)",
                        "borderColor": "var(--warning-9)",
                        "border": "var(--warning-9) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--warning-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--warning-8) 0.4%, var(--warning-8) 100%)",
                        "borderColor": "var(--warning-8)",
                        "border": "var(--warning-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                }
            },
            "danger": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--warning-11)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--warning-11) 0%, var(--warning-8) 100%)",
                        "borderColor": "var(--warning-8)",
                        "border": "var(--warning-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--warning-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--warning-8) 0%, var(--warning-7) 100%)",
                        "borderColor": "var(--warning-8)",
                        "border": "var(--warning-8) 1px solid"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--warning-7)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--warning-7) 0%, var(--caution-6) 100%)",
                        "borderColor": "var(--warning-6)",
                        "border": "var(--warning-6) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                }
            },
            "locked": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--grey-1) ",
                        "backgroundImage": "linear-gradient(180.00deg, var(--grey-1) 0%, var(--grey-1) 100%)",
                        "borderColor": "var(--grey-a8)",
                        "border": "var(--grey-a8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--grey-8)"
                    }
                }
            }
        },
        "checkbox": {
            "unchecked": {
                "disabled": {
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--grey-6)",
                    "border": "var(--grey-6) 2px solid"
                },
                "default": {
                    "borderColor": "var(--grey-9)",
                    "border": "var(--grey-9) 2px solid"
                },
                "hover": {
                    "borderColor": "var(--primary-8)",
                    "border": "var(--primary-8) 2px solid"
                }
            },
            "checked": {
                "disabled": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--grey-6)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-8)"
                },
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-8)"
                }
            },
            "indeterminate": {
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-6)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-6)"
                }
            }
        }
    },
    "global": {
        "mainMenu": {
            "iconBackground": {
                "active": {
                    "backgroundColor": colors.menu.active
                },
                "hover": {
                    "backgroundColor": colors.menu.hover
                },
                "default": {
                    "backgroundColor": colors.menu.default
                }
            },
            "background": {
                "boxShadow": "5px 0px 10px 0px var(--white-a2)",
                "backgroundColor": "var(--grey-1)"
            },
            "lines": {
                "backgroundColor": "var(--grey-6)"
            }
        },
        "background": {
            "backgroundColor": "var(--grey-2)",
            "backgroundImage": "linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"
        },
        "drawer": {
            "background": {
                "boxShadow": "-5px 0px 10px 0px var(--white-a2)",
                "backgroundColor": "var(--grey-1)"
            }
        },
        "topBar": {
            "lines": {
                "backgroundColor": "var(--grey-6)"
            }
        }
    },
    "indicators": {
        "spinner": {
            "danger": {
                "base": {
                    "borderColor": "var(--warning-8)",
                    "border": "var(--warning-8) 3px solid"
                },
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                }
            },
            "secondary": {
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                },
                "base": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 3px solid"
                }
            },
            "primary": {
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                },
                "base": {
                    "borderColor": "var(--primary-6)",
                    "border": "var(--primary-6) 3px solid"
                }
            },
            "simple": {
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                },
                "base": {
                    "borderColor": "var(--grey-a8)",
                    "border": "var(--grey-a8) 3px solid"
                }
            }
        }
    },
    "filters": {
        "dropdownContainer": {
            "background": {
                "boxShadow": "0px 5px 25px 0px var(--primary-a1)",
                "backgroundColor": "var(--grey-1)",
                "borderColor": "var(--grey-6)",
                "border": "var(--grey-6) 1px solid"
            },
            "topBorder": {
                "backgroundColor": "var(--primary-7)"
            }
        },
        "filterButton": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--primary-a1)",
                "backgroundColor": "var(--grey-1)",
                "borderColor": "var(--grey-7)",
                "border": "var(--grey-7) 1px solid",
                "textColor": "var(--grey-11)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px var(--primary-a1)",
                "backgroundColor": "var(--primary-7)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-1)"
            },
            "hover": {
                "boxShadow": "0px 4px 9px 0px var(--primary-a1)",
                "backgroundColor": "var(--primary-7)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-1)"
            }
        },
        "searchInput": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--primary-a2)",
                "backgroundColor": "var(--grey-1)",
                "borderColor": "var(--grey-7)",
                "border": "var(--grey-7) 1px solid"
            },
            "focused": {
                "boxShadow": "0px 4px 9px 0px var(--primary-a2)",
                "backgroundColor": "var(--grey-1)",
                "borderColor": "var(--primary-6)",
                "border": "var(--primary-6) 1px solid"
            }
        }
    },
    "tables": {
        "loadingOverlay": {
            "backgroundColor": "var(--grey-2)",
            "backgroundImage": "linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"
        },
        "rows": {
            "divider": {
                "backgroundColor": colors.divider
            }
        },
        "header": {
            "groupLine": {
                "backgroundColor": colors.divider
            },
            "divider": {
                "backgroundColor": colors.divider
            },
            "sortable": {
                "hover": {
                    "backgroundColor": "var(--grey-4)"
                },
                "default": {
                    "backgroundColor": "var(--grey-2)"
                }
            }
        }
    },
    "general": {
        "divider": {
            "backgroundColor": colors.divider
        }
    },
    "feedbackBar": {
        "neutral": {
            "backgroundColor": colors.feedback.neutral
        },
        "error": {
            "backgroundColor": colors.feedback.error
        },
        "info": {
            "backgroundColor": colors.feedback.info
        },
        "success": {
            "backgroundColor": colors.feedback.success
        },
        "warning": {
            "backgroundColor": colors.feedback.warning
        }
    },
    "filterButton": {
        "active": {
            "boxShadow": "0px 4px 9px 0px var(--primary-a1)",
            "backgroundColor": "var(--grey-1)",
            "borderColor": "var(--primary-7)",
            "border": "var(--primary-7) 1px solid"
        }
    },
    "modal": {
        "overlay": {
            "backgroundColor": "var(--grey-a3)"
        },
        "container": {
            "boxShadow": "0px 10px 15px 0px var(--primary-a1)",
            "backgroundColor": "var(--grey-1)",
            "borderColor": "var(--grey-6)",
            "border": "var(--grey-6) 1px solid"
        }
    }
};