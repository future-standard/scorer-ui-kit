import { colors } from './colors';

export const styles = {
    "generic": {
        "transparent": {}
    },
    "form": {
        "input": {
            "default": {
                "normal": {
                    "backgroundColor": "var(--white-1)",
                    "borderColor": colors.input.border.default,
                    "border": colors.input.border.default + " 1px solid"
                },
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--input-box-shadow-2)",
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--form-border)",
                    "border": "var(--form-border) 1px solid"
                }
            },
            "disabled": {
                "normal": {
                    "backgroundColor": "var(--form-disabled-bg)",
                    "borderColor": "var(--border-6)",
                    "border": "var(--border-6) 1px solid"
                }
            },
            "subdivision": {
                "backgroundColor": "var(--border-6)"
            },
            "required": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--input-box-shadow-3)",
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--form-border)",
                    "border": "var(--form-border) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--form-border)",
                    "border": "var(--form-border) 1px solid"
                }
            },
            "valid": {
                "focused": {
                    "boxShadow": "0px 3px 5px 0px var(--input-valid-box-shadow)",
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--form-valid-border)",
                    "border": "var(--form-valid-border) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--form-valid-border)",
                    "border": "var(--form-valid-border) 1px solid"
                }
            },
            "invalid": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--box-shadow-1)",
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--spinner-danger-border)",
                    "border": "var(--spinner-danger-border) 2px solid"
                },
                "normal": {
                    "borderColor": "var(--spinner-danger-border)",
                    "border": "var(--spinner-danger-border) 1px solid"
                }
            },
            "processing": {
                "focused": {
                    "boxShadow": "0px 3px 7px 0px var(--form-processing-box-shadow)",
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--input-primary)",
                    "border": "var(--input-primary) 2px solid"
                },
                "normal": {
                    "backgroundColor": "var(--white-1)",
                    "borderColor": "var(--input-primary)",
                    "border": "var(--input-primary) 1px solid"
                }
            },
            "seperatedValues": {
                "background": {
                    "backgroundColor": "var(--switch-off-default-inner-bg)",
                    "backgroundImage": "linear-gradient(315.00deg, var(--switch-off-default-inner-bg) 0%, var(--switch-off-default-inner-grad) 100%)"
                },
                "hoverHighlight": {
                    "backgroundColor": "var(--switch-default-grad)"
                }
            }
        },
        "button": {
            "primary": {
                "default": {
                    "backgroundColor": "var(--btn-primary-bg)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--btn-primary-bg) 0%, var(--btn-primary-grad) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--btn-primary-hover-bg)"
                },
                "active": {
                    "backgroundColor": "var(--input-primary)"
                },
                "divider": {
                    "backgroundColor": "var(--btn-primary-divider)"
                },
                "disabled": {
                    "backgroundColor": "var(--btn-primary-bg)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--btn-primary-bg) 0%, var(--btn-primary-grad) 100%)"
                },
                "actionArea": {
                    "backgroundColor": "var(--btn-primary-bg)",
                    "backgroundImage": "linear-gradient(135.00deg, var(--btn-primary-bg) 0%, var(--btn-primary-grad) 100%)"
                }
            },
            "secondary": {
                "default": {
                    "backgroundColor": "var(--btn-secondary-default-bg)"
                },
                "hover": {
                    "backgroundColor": "var(--btn-secondary-hover-bg)"
                },
                "active": {
                    "backgroundColor": "var(--btn-secondary-active)"
                },
                "disabled": {
                    "backgroundColor": "var(--btn-secondary-disabled)"
                },
                "divider": {
                    "backgroundColor": "var(--btn-secondary-divider)"
                },
                "actionArea": {
                    "backgroundColor": "var(--btn-secondary-action-area)"
                }
            },
            "danger": {
                "default": {
                    "backgroundColor": "var(--btn-danger-area)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--btn-danger-area) 0%, var(--btn-danger-grad-1) 100%)"
                },
                "hover": {
                    "backgroundColor": "var(--btn-danger-hover-bg)"
                },
                "active": {
                    "backgroundColor": "var(--spinner-danger-border)"
                },
                "disabled": {
                    "backgroundColor": "var(--switch-danger-disabled-border)"
                },
                "divider": {
                    "backgroundColor": "var(--btn-danger-divider)"
                },
                "actionArea": {
                    "backgroundColor": "var(--btn-danger-area)",
                    "backgroundImage": "linear-gradient(317.51deg, var(--btn-danger-area) 0%, var(--btn-danger-grad-1) 100%)"
                }
            }
        },
        "switch": {
            "off": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--switch-off-bg)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--switch-off-bg) 0%, var(--switch-off-default-outer-grad) 100%)",
                        "borderColor": "var(--switch-border-2)",
                        "border": "var(--switch-border-2) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--switch-off-default-inner-bg)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--switch-off-default-inner-bg) 0%, var(--switch-off-default-inner-grad) 100%)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--white-1)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--white-1) 0%, var(--input-disabled-bg) 100%)",
                        "borderColor": "var(--switch-border)",
                        "border": "var(--switch-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--border-6)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--switch-off-bg)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--switch-off-bg) 0%, var(--switch-off-default-outer-grad) 100%)",
                        "borderColor": "var(--switch-border-2)",
                        "border": "var(--switch-border-2) 1px solid"
                    }
                }
            },
            "on": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--switch-on-default-bg)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--switch-on-default-bg) 0%, var(--switch-on-default-grad) 100%)",
                        "borderColor": "var(--switch-on-default-border)",
                        "border": "var(--switch-on-default-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--switch-on-disabled-bg)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--switch-on-disabled-bg) 0%, var(--switch-on-disabled-grad-2) 100%)",
                        "borderColor": "var(--switch-on-disabled-border)",
                        "border": "var(--switch-on-disabled-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--switch-on-loading-bg)",
                        "backgroundImage": "linear-gradient(315.00deg, var(--switch-on-loading-bg) 0%, var(--switch-on-loading-grad) 100%)",
                        "borderColor": "var(--switch-on-loading-border)",
                        "border": "var(--switch-on-loading-border) 1px solid"
                    }
                }
            },
            "failure": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--switch-failure-default-bg)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--switch-failure-default-bg) 0%, var(--switch-failure-default-bg) 100%)",
                        "borderColor": "var(--switch-failure-default-border)",
                        "border": "var(--switch-failure-default-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--switch-failure-loading-bg)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--switch-failure-loading-bg) 0.4%, var(--switch-danger-loading-grad) 100%)",
                        "borderColor": "var(--switch-danger-loading-border)",
                        "border": "var(--switch-danger-loading-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                }
            },
            "danger": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--form-failure-text)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--form-failure-text) 0%, var(--switch-danger-default-grad) 100%)",
                        "borderColor": "var(--switch-danger-default-border)",
                        "border": "var(--switch-danger-default-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                },
                "loading": {
                    "outer": {
                        "backgroundColor": "var(--switch-danger-loading-bg)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--switch-danger-loading-bg) 0%, var(--switch-danger-loading-grad-2) 100%)",
                        "borderColor": "var(--switch-danger-loading-border)",
                        "border": "var(--switch-danger-loading-border) 1px solid"
                    }
                },
                "disabled": {
                    "outer": {
                        "backgroundColor": "var(--switch-danger-disabled-bg)",
                        "backgroundImage": "linear-gradient(317.51deg, var(--switch-danger-disabled-bg) 0%, var(--switch-on-disabled-grad) 100%)",
                        "borderColor": "var(--switch-danger-disabled-border)",
                        "border": "var(--switch-danger-disabled-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--white-1)"
                    }
                }
            },
            "locked": {
                "default": {
                    "outer": {
                        "backgroundColor": "var(--white-1)",
                        "backgroundImage": "linear-gradient(180.00deg, var(--white-1) 0%, var(--input-disabled-bg) 100%)",
                        "borderColor": "var(--switch-border)",
                        "border": "var(--switch-border) 1px solid"
                    },
                    "inner": {
                        "backgroundColor": "var(--border-3)"
                    }
                }
            }
        },
        "checkbox": {
            "unchecked": {
                "disabled": {
                    "backgroundColor": "var(--input-disabled-bg)",
                    "borderColor": "var(--checkbox-border)",
                    "border": "var(--checkbox-border) 2px solid"
                },
                "default": {
                    "borderColor": "var(--checkbox-unchecked-default-border)",
                    "border": "var(--checkbox-unchecked-default-border) 2px solid"
                },
                "hover": {
                    "borderColor": "var(--checkbox-unchecked-hover-border)",
                    "border": "var(--checkbox-unchecked-hover-border) 2px solid"
                }
            },
            "checked": {
                "disabled": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--checkbox-checked-box-shadow)",
                    "backgroundColor": "var(--checkbox-border)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--checkbox-checked-box-shadow)",
                    "backgroundColor": "var(--highlight)"
                },
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--checkbox-checked-box-shadow)",
                    "backgroundColor": "var(--checkbox-checked-hover-bg)"
                }
            },
            "indeterminate": {
                "hover": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--checkbox-checked-box-shadow)",
                    "backgroundColor": "var(--form-separated-values-hover)"
                },
                "default": {
                    "boxShadow": "inset 0px 1px 5px 0px var(--checkbox-checked-box-shadow)",
                    "backgroundColor": "var(--switch-indeterminate-default-bg)"
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
                "boxShadow": "5px 0px 10px 0px var(--global-box-shadow)",
                "backgroundColor": "var(--main-menu-bg)"
            },
            "lines": {
                "backgroundColor": "var(--border-5)"
            },
            "footerBackground": {
                "backgroundColor": "var(--footer-bg)"
            }
        },
        "background": {
            "backgroundColor": "var(--global-bg)",
            "backgroundImage": "linear-gradient(180.00deg, var(--global-bg) 0%, var(--global-grad) 100%)"
        },
        "drawer": {
            "background": {
                "boxShadow": "-5px 0px 10px 0px var(--global-box-shadow)",
                "backgroundColor": "var(--white-1)"
            }
        },
        "topBar": {
            "lines": {
                "backgroundColor": "var(--border-3)"
            }
        }
    },
    "indicators": {
        "spinner": {
            "danger": {
                "base": {
                    "borderColor": "var(--spinner-danger-border)",
                    "border": "var(--spinner-danger-border) 3px solid"
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
                    "borderColor": "var(--border-1)",
                    "border": "var(--border-1) 3px solid"
                }
            },
            "primary": {
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                },
                "base": {
                    "borderColor": "var(--spinner-primary-base-border)",
                    "border": "var(--spinner-primary-base-border) 3px solid"
                }
            },
            "simple": {
                "top": {
                    "borderColor": "var(--white-1)",
                    "border": "var(--white-1) 3px solid"
                },
                "base": {
                    "borderColor": "var(--border-2)",
                    "border": "var(--border-2) 3px solid"
                }
            }
        }
    },
    "filters": {
        "dropdownContainer": {
            "background": {
                "boxShadow": "0px 5px 25px 0px var(--filter-box-shadow-2)",
                "backgroundColor": "var(--white-1)",
                "borderColor": "var(--border-4)",
                "border": "var(--border-4) 1px solid"
            },
            "topBorder": {
                "backgroundColor": "var(--filter-border-1)"
            }
        },
        "filterButton": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--filter-box-shadow-1)",
                "backgroundColor": "var(--filter-btn-bg)",
                "borderColor": "var(--filter-border-2)",
                "border": "var(--filter-border-2) 1px solid",
                "textColor": "var(--text-14)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px var(--filter-box-shadow-1)",
                "backgroundColor": "var(--filter-border-1)",
                "borderColor": "var(--filter-border-1)",
                "border": "var(--filter-border-1) 1px solid",
                "textColor": "var(--white-1)"
            },
            "hover": {
                "boxShadow": "0px 4px 9px 0px var(--filter-box-shadow-1)",
                "backgroundColor": "var(--filter-btn-hover-bg)",
                "borderColor": "var(--filter-border-1)",
                "border": "var(--filter-border-1) 1px solid",
                "textColor": "var(--white-1)"
            }
        },
        "searchInput": {
            "default": {
                "boxShadow": "0px 4px 9px 0px var(--input-box-shadow)",
                "backgroundColor": "var(--white-1)",
                "borderColor": "var(--filter-border-2)",
                "border": "var(--filter-border-2) 1px solid"
            },
            "focused": {
                "boxShadow": "0px 4px 9px 0px var(--input-box-shadow)",
                "backgroundColor": "var(--white-1)",
                "borderColor": "var(--input-border)",
                "border": "var(--input-border) 1px solid"
            }
        }
    },
    "tables": {
        "loadingOverlay": {
            "backgroundColor": "var(--tables-loading-bg)",
            "backgroundImage": "linear-gradient(180.00deg, var(--tables-loading-bg) 0%, var(--global-grad) 100%)"
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
                    "backgroundColor": "var(--table-header-sortable-hover)"
                },
                "default": {
                    "backgroundColor": "var(--table-header-sortable-default)"
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
            "boxShadow": "0px 4px 9px 0px var(--filter-box-shadow-1)",
            "backgroundColor": "var(--filter-btn-bg)",
            "borderColor": "var(--filter-border-1)",
            "border": "var(--filter-border-1) 1px solid"
        }
    },
    "modal": {
        "overlay": {
            "backgroundColor": "var(--modal-bg)"
        },
        "container": {
            "boxShadow": "0px 10px 15px 0px var(--modal-box-shadow)",
            "backgroundColor": "var(--white-1)",
            "borderColor": "var(--modal-border)",
            "border": "var(--modal-border) 1px solid"
        }
    }
};