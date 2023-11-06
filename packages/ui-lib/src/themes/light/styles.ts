import { colors } from './colors';

export const styles = {
    "generic": {
        "transparent": {}
    },
    "form": {
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "var(--white-12)",
                    "borderColor": colors.input.border.default,
                    "border": colors.input.border.default + " 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--grey-a1)",
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "var(--grey-3)",
                    "borderColor": "var(--grey-7)",
                    "border": "var(--grey-7) 1px solid"
                }
            },
            "subdivision": {
                "backgroundColor": "var(--grey-7)"
            },
            "required": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-11)",
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "valid": {
                "focused": {
                    "boxShadow": "0px 3px 5px 0px var(--success-12)",
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--success-7)",
                    "border": "var(--success-7) 1px solid"
                }
            },
            "invalid": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--error-a1)",
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--error-8)",
                    "border": "var(--error-8) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--error-8)",
                    "border": "var(--error-8) 1px solid"
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--primary-11)",
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                },
                "normal": {
                    "backgroundColor": "var(--white-12)",
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 1px solid"
                }
            },
            "seperatedValues": {
                "background": {
                    "backgroundColor": "var(--primary-8)",
                    "backgroundImage": "linear-gradient(315.00deg, var(--primary-8) 0%, var(--primary-8) 100%)"
                },
                "hoverHighlight": {
                    "backgroundColor": "var(--primary-7)"
                }
            }
        },
        "button": {
            "primary": {
                "default": {
                    "backgroundColor": "var(--primary-7)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--primary-8)"
                },
                "active": {
                    "backgroundColor": "var(--primary-7)"
                },
                "divider": {
                    "backgroundColor": "var(--primary-8)"
                },
                "disabled": {
                    "backgroundColor": "var(--primary-7)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"
                },
                "actionArea": {
                    "backgroundColor": "var(--primary-7)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"
                }
            },
            "secondary": {
                "default": {
                    "backgroundColor": "var(--grey-5)"
                },
                "hover": {
                    "backgroundColor": "var(--grey-5)"
                },
                "active": {
                    "backgroundColor": "var(--grey-8)"
                },
                "disabled": {
                    "backgroundColor": "var(--grey-2)"
                },
                "divider": {
                    "backgroundColor": "var(--grey-8)"
                },
                "actionArea": {
                    "backgroundColor": "var(--grey-3)"
                }
            },
            "danger": {
                "default": {
                    "backgroundColor": "var(--error-9)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--error-9) 0%, var(--error-8) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--error-9)"
                },
                "active": {
                    "backgroundColor": "var(--error-8)"
                },
                "disabled": {
                    "backgroundColor": "var(--error-6)"
                },
                "divider": {
                    "backgroundColor": "var(--error-9)"
                },
                "actionArea": {
                    "backgroundColor": "var(--error-9)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--error-9) 0%, var(--error-8) 100%)"
                }
            }
        },
        "switch": {
            "off": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--grey-3)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--grey-3) 0%, var(--grey-4) 100%)",
                        "borderColor": "var(--grey-8)",
                        "border": "var(--grey-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--primary-8)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--primary-8) 0%, var(--primary-8) 100%)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--white-12)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--white-12) 0%, var(--grey-1) 100%)",
                        "borderColor": "var(--grey-7)",
                        "border": "var(--grey-7) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--grey-7)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--grey-3)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--grey-3) 0%, var(--grey-4) 100%)",
                        "borderColor": "var(--grey-8)",
                        "border": "var(--grey-8) 1px solid"
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
                        "backgroundColor": "var(--white-12)"
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
                        "backgroundColor": "var(--white-12)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--primary-7)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-7) 100%)",
                        "borderColor": "var(--primary-8)",
                        "border": "var(--primary-8) 1px solid"
                    }
                }
            },
            "failure": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--error-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--error-8) 0%, var(--error-8) 100%)",
                        "borderColor": "var(--error-9)",
                        "border": "var(--error-9) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-12)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--error-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--error-8) 0.4%, var(--error-8) 100%)",
                        "borderColor": "var(--error-8)",
                        "border": "var(--error-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-12)"
                    }
                }
            },
            "danger": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--error-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--error-8) 0%, var(--warning-8) 100%)",
                        "borderColor": "var(--error-8)",
                        "border": "var(--error-8) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-12)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--error-8)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--error-8) 0%, var(--error-7) 100%)",
                        "borderColor": "var(--error-8)",
                        "border": "var(--error-8) 1px solid"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--error-7)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--error-7) 0%, var(--warning-6) 100%)",
                        "borderColor": "var(--error-6)",
                        "border": "var(--error-6) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-12)"
                    }
                }
            },
            "locked": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--white-12)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--white-12) 0%, var(--grey-1) 100%)",
                        "borderColor": "var(--grey-7)",
                        "border": "var(--grey-7) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--grey-6)"
                    }
                }
            }
        },
        "checkbox": {
            "unchecked": {
                "disabled": {
                    "backgroundColor": "var(--grey-1)",
                    "borderColor": "var(--grey-5)",
                    "border": "var(--grey-5) 2px solid"
                },
                "default": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 2px solid"
                },
                "hover": {
                    "borderColor": "var(--primary-7)",
                    "border": "var(--primary-7) 2px solid"
                }
            },
            "checked": {
                "disabled": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--grey-5)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-8)"
                },
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-7)"
                }
            },
            "indeterminate": {
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-7)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--grey-a1)",
                    "backgroundColor": "var(--primary-7)"
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
                "boxShadow": "5px 0px 10px 0px var(--grey-8)",
                "backgroundColor": "var(--warning-1)"
            },
            "lines": {
                "backgroundColor": "var(--grey-4)"
            },
            "footerBackground": {
                "backgroundColor": "var(--warning-1)"
            }
        },
        "background": {
            "backgroundColor": "var(--grey-2)",
            "backgroundImage": "linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"
        },
        "drawer": {
            "background": {
                "boxShadow": "-5px 0px 10px 0px var(--grey-8)",
                "backgroundColor": "var(--white-12)"
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
                    "borderColor": "var(--error-8)",
                    "border": "var(--error-8) 3px solid"
                },
                "top": {
                    "borderColor": "var(--white-12)",
                    "border": "var(--white-12) 3px solid"
                }
            },
            "secondary": {
                "top": {
                    "borderColor": "var(--white-12)",
                    "border": "var(--white-12) 3px solid"
                },
                "base": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 3px solid"
                }
            },
            "primary": {
                "top": {
                    "borderColor": "var(--white-12)",
                    "border": "var(--white-12) 3px solid"
                },
                "base": {
                    "borderColor": "var(--primary-6)",
                    "border": "var(--primary-6) 3px solid"
                }
            },
            "simple": {
                "top": {
                    "borderColor": "var(--white-12)",
                    "border": "var(--white-12) 3px solid"
                },
                "base": {
                    "borderColor": "var(--grey-8)",
                    "border": "var(--grey-8) 3px solid"
                }
            }
        }
    },
    "filters": {
        "dropdownContainer": {
            "background": {
                "boxShadow": "0px 5px 25px 0px var(--primary-10)",
                "backgroundColor": "var(--white-12)",
                "borderColor": "var(--grey-5)",
                "border": "var(--grey-5) 1px solid"
            },
            "topBorder": {
                "backgroundColor": "var(--primary-7)"
            }
        },
        "filterButton": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--info-7)",
                "backgroundColor": "var(--grey-2)",
                "borderColor": "var(--grey-7)",
                "border": "var(--grey-7) 1px solid",
                "textColor": "var(--grey-10)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px var(--info-7)",
                "backgroundColor": "var(--primary-7)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-12)"
            },
            "hover": {
                "boxShadow": "0px 4px 9px 0px var(--info-7)",
                "backgroundColor": "var(--primary-6)",
                "borderColor": "var(--primary-7)",
                "border": "var(--primary-7) 1px solid",
                "textColor": "var(--white-12)"
            }
        },
        "searchInput": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--info-7)",
                "backgroundColor": "var(--white-12)",
                "borderColor": "var(--grey-7)",
                "border": "var(--grey-7) 1px solid"
            },
            "focused": {
                "boxShadow": "0px 4px 9px 0px var(--info-7)",
                "backgroundColor": "var(--white-12)",
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
                    "backgroundColor": "var(--grey-4)"
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
            "boxShadow": "0px 4px 9px 0px var(--info-7)",
            "backgroundColor": "var(--grey-2)",
            "borderColor": "var(--primary-7)",
            "border": "var(--primary-7) 1px solid"
        }
    },
    "modal": {
        "overlay": {
            "backgroundColor": "var(--grey-3)"
        },
        "container": {
            "boxShadow": "0px 10px 15px 0px var(--info-8)",
            "backgroundColor": "var(--white-12)",
            "borderColor": "var(--grey-5)",
            "border": "var(--grey-5) 1px solid"
        }
    }
};