export const colors: {
  pureBase: string;
  pureTop: string;
  divider: string;
  icons: { [key: string]: string };
  menu: { [key: string]: string };
  feedback: { [key: string]: string };
  status: { [key: string]: string };
  transparent: string;
  input: { border: { [key: string]: string } };
} = {
  "pureBase": "var(--white-1)",
  "pureTop": "var(--black-1)",
  "divider": "var(--grey-6)",
  "icons": {
      "inverse": "var(--grey-1)",
      "mono": "var(--grey-12)",
      "dimmed": "var(--grey-11)",
      "subtle": "var(--grey-10)",
      "primary": "var(--primary-9)",
      "danger": "var(--warning-9)",
      "white": "var(--white-1)"
  },
  "menu": {
      "active": "var(--primary-9)",
      "hover": "var(--primary-8)",
      "default": "var(--grey-2)",
      "indicator": "var(--grey-a1)",
      "passive": "var(--primary-a7)"
  },
  "feedback": {
      "error": "var(--warning-8)",
      "info": "var(--primary-7)",
      "neutral": "var(--grey-9)",
      "success": "var(--success-8)",
      "warning": "var(--caution-10)"
  },
  "status": {
      "caution": "var(--caution-10)",
      "danger": "var(--warning-8)",
      "folder": "var(--primary-7)",
      "highlight": "var(--primary-7)",
      "good": "var(--success-7)",
      "neutral": "var(--grey-5)"
  },
  "transparent": "var(--black-a1)",
  "input": {
      "border": {
          "default": "var(--grey-7)"
      }
  }
};