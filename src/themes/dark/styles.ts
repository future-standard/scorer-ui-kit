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
            "backgroundImage": "linear-gradient(180.00deg, hsla(220, 4.2%, 13.9%, 1.000) 0%, hsla(220, 4.9%, 12%, 1.000) 100%)"
        }
    },
    "general": {
        "divider": {
            "backgroundColor": "hsla(213, 11.6%, 18.6%, 1.000)"
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
                "textColor": "hsla(0, 0%, 89.8%, 1.000)"
            },
            "active": {
                "boxShadow": "0px 4px 9px 0px hsla(205, 68.4%, 7.5%, 0.071)",
                "backgroundColor": "hsla(205, 81.2%, 64.5%, 1.000)",
                "borderColor": "hsla(205, 100%, 72%, 1.000)",
                "border": "hsla(205, 100%, 72%, 1.000) 1px solid",
                "textColor": "hsla(0, 0%, 100%, 1.000)"
            }
        }
    }
};