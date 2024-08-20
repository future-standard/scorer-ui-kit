
import { createGlobalStyle } from 'styled-components';
import { layoutVariables } from './variables/Layout';


const GlobalStyle = createGlobalStyle`

  ${layoutVariables};

  :root {
    --font-ui: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;
    --font-data: Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;

    --font-size: 14px;

    --button-font-size: 14px;
    --button-height: 32px;
    --button-h-padding: 8px;
    --button-lift-default-x: 0px;
    --button-lift-default-y: 2px;
    --button-lift-default-blur: 4px;
    --button-lift-default-spread: 2px;

    --button-icon-size: 14px;
    --button-icon-h-padding: 8px;

    --input-height: 40px;
  }

  .button-small {
    --button-font-size: 12px;
    --button-height: 24px;
    --button-h-padding: 4px;
    --button-icon-size: 12px;
    --button-icon-h-padding: 8px;
  }

  .button-large {
    --button-font-size: 16px;
    --button-height: 40px;
    --button-h-padding: 8px;
    --button-icon-size: 16px;
    --button-icon-h-padding: 8px;
  }

  .split-button-primary {
    --border-color: var(--primary-9);
    --border-active-color: var(--primary-11);
    --toggle-icon-border: var(--primary-9);
    --gradient-1: #72C3EE;
    --gradient-2: #5CACEE;
    --button-lift-default-color: rgba(221, 234, 248, 0.08);
    --text-color: var(--white-a12);
    --text-disabled-color: var(--white-a11);
    --button-hover-bg: var(--primary-a3);
    --button-active-bg: var(--primary-10);
    --toggle-icon-hover-bg: var(--white-a7);
    --toggle-icon-active-bg:  var(--black-a6);
    --toggle-icon: var(--white-a12);
    --toggle-icon-active: var(--white-a11);
    --toggle-icon-disabled: var(--white-a10);
  }

  .split-button-secondary {
    --border-color: var(--grey-7);
    --border-active-color: var(--grey-7);
    --toggle-icon-border: var(--grey-6);
    --gradient-1: #2E3135;
    --gradient-2: #363A3F;
    --button-lift-default-color: rgba(221, 234, 248, 0.08);
    --text-color: var(--grey-12);
    --text-disabled-color: var(--grey-a11);
    --button-hover-bg: var(--grey-a6);
    --button-active-bg: var(--grey-a3);
    --toggle-icon-hover-bg: var(--grey-a6);
    --toggle-icon-active-bg:  var(--grey-a3);
    --toggle-icon: var(--grey-12);
    --toggle-icon-active: var(--grey-a11);
    --toggle-icon-disabled: var(--grey-10);
  }

  .split-button-danger {
    --border-color: var(--warning-10);
    --border-active-color: var(--warning-10);
    --toggle-icon-border: var(--warning-9);
    --gradient-1: #D16565;
    --gradient-2: #E76F6F;
    --button-lift-default-color: rgba(255, 113, 113, 0.47);
    --text-color:  var(--white-a12);
    --text-disabled-color: var(--white-a11);
    --button-hover-bg: var(--warning-a7);
    --button-active-bg: var(--warning-8);
    --toggle-icon-hover-bg: var(--warning-a7);
    --toggle-icon-active-bg:  var(--warning-a5);
    --toggle-icon: var(--white-a12);
    --toggle-icon-active: var(--white-a11);
    --toggle-icon-disabled: var(--white-a10);
  }

  .split-button-custom {
    --border-color: var(--info-10);
    --border-active-color: var(--info-10);
    --toggle-icon-border: var(--info-9);
    --gradient-1: var(--info-10);
    --gradient-2: var(--info-9);
    --button-lift-default-color:  var(--info-a3);
    --text-color:  var(--white-a12);
    --text-disabled-color: var(--white-a11);
    --button-hover-bg: var(--info-a7);
    --button-active-bg: var(--info-8);
    --toggle-icon-hover-bg: var(--info-a7);
    --toggle-icon-active-bg:  var(--info-a5);
    --toggle-icon: var(--white-a12);
    --toggle-icon-active: var(--white-a11);
    --toggle-icon-disabled: var(--white-a10);
  }

  .light-theme {
    /* Light Mode */
    --grey-1: #fcfcfd;
    --primary-1: #fcfdff;
    --primary-2: #f5f9ff;
    --primary-3: #eaf3ff;
    --primary-4: #dbecff;
    --primary-5: #c9e2ff;
    --primary-6: #b5d5ff;
    --primary-7: #9bc3fa;
    --primary-8: #76aaf4;
    --primary-9: #80b5ff;
    --primary-10: #75aaf3;
    --primary-11: #3c6eb3;
    --primary-12: #0b3162;
    --primary-a12: #00285bf4;
    --primary-a11: #00429cc3;
    --primary-a10: #0062e98a;
    --primary-a9: #006bff7f;
    --primary-a8: #0061eb89;
    --primary-a7: #0066f364;
    --primary-a6: #016fff4a;
    --primary-a5: #0077ff36;
    --primary-a4: #0079ff24;
    --primary-a3: #006eff15;
    --primary-a2: #0066ff0a;
    --primary-a1: #0055ff03;
    --info-1: #fafefd;
    --info-2: #f1fcfa;
    --info-3: #e7f9f5;
    --info-4: #d9f3ee;
    --info-5: #c7ebe5;
    --info-6: #afdfd7;
    --info-7: #8dcec3;
    --info-8: #53b9ab;
    --info-9: #12a594;
    --info-10: #0e9888;
    --info-11: #067a6f;
    --info-12: #10302b;
    --info-a12: #00221def;
    --info-a11: #00776bf9;
    --info-a10: #009281f1;
    --info-a9: #009e8ced;
    --info-a8: #009783ac;
    --info-a7: #01927a72;
    --info-a6: #00998050;
    --info-a5: #00a48938;
    --info-a4: #02af8c26;
    --info-a3: #02c09718;
    --info-a2: #01c8a40e;
    --info-a1: #05cd9b05;
    --success-1: #0d1912;
    --success-2: #0c1f17;
    --success-3: #0f291e;
    --success-4: #113123;
    --success-5: #133929;
    --success-6: #164430;
    --success-7: #1b543a;
    --success-8: #236e4a;
    --success-9: #30a46c;
    --success-10: #3cb179;
    --success-11: #4cc38a;
    --success-12: #e5fbeb;
    --success-a12: #eafff0fa;
    --success-a11: #62ffb3bd;
    --success-a10: #54ffafa9;
    --success-a9: #47ffa69a;
    --success-a8: #49ffaa5e;
    --success-a7: #43ffad42;
    --success-a6: #3dffb130;
    --success-a5: #38feb524;
    --success-a4: #33feb31b;
    --success-a3: #2afebe12;
    --success-a2: #00f7ca07;
    --success-a1: #0000;
    --caution-1: #1f1206;
    --caution-2: #2b1400;
    --caution-3: #391a03;
    --caution-4: #441f04;
    --caution-5: #4f2305;
    --caution-6: #5f2a06;
    --caution-7: #763205;
    --caution-8: #943e00;
    --caution-9: #f76808;
    --caution-10: #ff802b;
    --caution-11: #ff8b3e;
    --caution-12: #feeadd;
    --caution-a12: #ffeee1fa;
    --caution-a11: #ff8c3ffa;
    --caution-a10: #ff842cfa;
    --caution-a9: #ff6b08f6;
    --caution-a8: #fe660085;
    --caution-a7: #ff640363;
    --caution-a6: #ff650649;
    --caution-a5: #fe620137;
    --caution-a4: #fe61002a;
    --caution-a3: #fd54001e;
    --caution-a2: #fd37000e;
    --caution-a1: #0000;
    --warning-1: #150f0f;
    --warning-2: #1e1413;
    --warning-3: #361717;
    --warning-4: #49191a;
    --warning-5: #582122;
    --warning-6: #692e2e;
    --warning-7: #813e3e;
    --warning-8: #a75252;
    --warning-9: #d16565;
    --warning-10: #c35959;
    --warning-11: #ff9795;
    --warning-12: #f9d5d3;
    --warning-a12: #ffdad8f9;
    --warning-a11: #ff9795ef;
    --warning-a10: #ff7272bf;
    --warning-a9: #ff7979ce;
    --warning-a8: #ff7878a1;
    --warning-a7: #ff717178;
    --warning-a6: #fd5f5f5f;
    --warning-a5: #fd464a4d;
    --warning-a4: #ff33383c;
    --warning-a3: #fd383828;
    --warning-a2: #fe48360e;
    --warning-a1: #de000005;
    --green-1: #fbfefc;
    --green-2: #f2fcf5;
    --green-3: #e9f9ee;
    --green-4: #ddf3e4;
    --green-5: #ccebd7;
    --green-6: #b4dfc4;
    --green-7: #92ceac;
    --green-8: #5bb98c;
    --green-9: #30a46c;
    --green-10: #299764;
    --green-11: #18794e;
    --green-12: #153226;
    --green-a12: #002012ea;
    --green-a11: #006b3be7;
    --green-a10: #008346d6;
    --green-a9: #008f4acf;
    --green-a8: #00934ca4;
    --green-a7: #008c3d6d;
    --green-a6: #0193364b;
    --green-a5: #009b3633;
    --green-a4: #01a63522;
    --green-a3: #02ba3c16;
    --green-a2: #00c43b0d;
    --green-a1: #05c04304;
    --orange-1: #fefcfb;
    --red-1: #fefcfc;
    --red-2: #fdf8f8;
    --red-3: #faedec;
    --red-4: #fddfdd;
    --red-5: #f8d2d0;
    --red-6: #f1c3c1;
    --red-7: #e6b1ae;
    --red-8: #da9996;
    --red-9: #d16565;
    --red-10: #c45859;
    --red-11: #b64d4e;
    --red-12: #592525;
    --red-a12: #3d0000da;
    --red-a11: #970002b2;
    --red-a10: #a50002a7;
    --red-a9: #b300009a;
    --red-a8: #a6080069;
    --red-a7: #b10a0051;
    --red-a6: #c609003e;
    --red-a5: #da0b002f;
    --red-a4: #f00f0022;
    --red-a3: #bc0e0013;
    --red-a2: #b7000007;
    --red-a1: #aa000003;
    --black-1: #000000;
    --black-a12: #000000e8;
    --black-a11: #00000090;
    --black-a10: #0000007a;
    --black-a9: #00000070;
    --black-a8: #00000038;
    --black-a7: #00000024;
    --black-a6: #0000001d;
    --black-a5: #00000017;
    --black-a4: #00000012;
    --black-a3: #0000000c;
    --black-a2: #00000007;
    --black-a1: #00000003;
    --orange-2: #fef8f4;
    --orange-3: #fff1e7;
    --orange-4: #ffe8d7;
    --orange-5: #ffdcc3;
    --orange-6: #ffcca7;
    --orange-7: #ffb381;
    --orange-8: #fa934e;
    --orange-9: #f76808;
    --orange-10: #ed5f00;
    --orange-11: #bd4b00;
    --orange-12: #451e11;
    --orange-a12: #380e00ee;
    --orange-a11: #bc4800fa;
    --orange-a10: #ed5b00fa;
    --orange-a9: #f76300f7;
    --orange-a8: #f86300b1;
    --orange-a7: #ff66017e;
    --orange-a6: #ff6b0158;
    --orange-a5: #ff6b013c;
    --orange-a4: #ff6e0028;
    --orange-a3: #ff6c0318;
    --orange-a2: #e860050b;
    --orange-a1: #c0430504;
    --grey-2: #f9f9fb;
    --grey-3: #f0f0f3;
    --grey-4: #e8e8ec;
    --grey-5: #e0e1e6;
    --grey-6: #d9d9e0e0;
    --grey-7: #cdced6;
    --grey-8: #b9bbc6;
    --grey-9: #8b8d98;
    --grey-10: #80838d;
    --grey-11: #717989;
    --grey-12: #5a6671;
    --grey-a12: #020b1de3;
    --grey-a11: #020b1d9f;
    --grey-a10: #00071b7f;
    --grey-a9: #00051d74;
    --grey-a8: #00083046;
    --grey-a7: #00062e32;
    --grey-a6: #00002f26;
    --grey-a5: #0009321f;
    --grey-a4: #00002d17;
    --grey-a3: #00003310;
    --grey-a2: #00005506;
    --grey-a1: #00005503;
    --white-1: #FFFFFF;
    --white-a12: #ffffffeb;
    --white-a11: #ffffff97;
    --white-a10: #ffffff72;
    --white-a9: #ffffff62;
    --white-a8: #ffffff3f;
    --white-a7: #ffffff2d;
    --white-a6: #ffffff20;
    --white-a5: #ffffff16;
    --white-a4: #ffffff0e;
    --white-a3: #ffffff09;
    --white-a2: #ffffff03;
    --white-a1: #fff0;

      /* feedback */
    --error: var(--warning-8);
    --info: var(--primary-7);
    --neutral: var(--grey-9);
    --success: var(--success-8);
    --warning: var(--caution-8);

    /* tooltip */
    --tooltip-warning: var(--warning-a9);
    --tooltip-warning-arrow: var(--warning-a9);
    --tooltip-warning-border: var(--warning-a7);

    --tooltip-success: var(--success-9);
    --tooltip-success-arrow: var(--success-a7);
    --tooltip-success-border: var(--success-a7);

    --tooltip-info: var(--primary-8);
    --tooltip-info-arrow: var(--primary-a8);
    --tooltip-info-border: var(--primary-8);

    --tooltip-neutral: var(--grey-8);
    --tooltip-neutral-arrow: var(--grey-a7);
    --tooltip-neutral-border: var(--grey-7);

    /* icons */
    --inverse: var(--grey-1);
    --mono: var(--grey-12);
    --dimmed: var(--grey-11);
    --subtle: var(--grey-10);
    --primary: var(--primary-9);
    --danger: var(--warning-9);
    --white: var(--white-1);

    --spinner-danger: var(--warning-8);
    --spinner-secondary: var(--grey-8);
    --spinner-primary: var(--primary-6);
    --spinner-simple: var(--grey-a8);
  }

  .dark-theme {
    /* Dark mode */

    --grey-1: #111113;
    --primary-1: #000;
    --primary-2: #09121e;
    --primary-3: #0e2341;
    --primary-4: #0c2f5d;
    --primary-5: #153c70;
    --primary-6: #214a81;
    --primary-7: #2d5a97;
    --primary-8: #366bb5;
    --primary-9: #80b5ff;
    --primary-10: #75aaf3;
    --primary-11: #81b7ff;
    --primary-12: #cee3ff;
    --primary-a12: #cee3ff;
    --primary-a11: #81b7ff;
    --primary-a10: #7bb2fff3;
    --primary-a9: #80b5ff;
    --primary-a8: #4c97ffb5;
    --primary-a7: #4c98ff97;
    --primary-a6: #4293ff81;
    --primary-a5: #3089ff70;
    --primary-a4: #2181ff5d;
    --primary-a3: #378aff41;
    --primary-a2: #4d99ff1e;
    --primary-a1: #0000;
    --info-1: #091915;
    --info-2: #04201b;
    --info-3: #062923;
    --info-4: #07312b;
    --info-5: #083932;
    --info-6: #09443c;
    --info-7: #0b544a;
    --info-8: #0c6d62;
    --info-9: #12a594;
    --info-10: #10b3a3;
    --info-11: #0ac5b3;
    --info-12: #e1faf4;
    --info-a12: #e6fff9fa;
    --info-a11: #0affe7bf;
    --info-a10: #13ffe7ab;
    --info-a9: #18ffe49b;
    --info-a8: #11ffe75d;
    --info-a7: #11ffe342;
    --info-a6: #09ffe630;
    --info-a5: #02fee424;
    --info-a4: #00fde81b;
    --info-a3: #00fddc12;
    --info-a2: #00fbd508;
    --info-a1: #0000;
    --success-1: #0d1912;
    --success-2: #0c1f17;
    --success-3: #0f291e;
    --success-4: #113123;
    --success-5: #133929;
    --success-6: #164430;
    --success-7: #1b543a;
    --success-8: #236e4a;
    --success-9: #30a46c;
    --success-10: #3cb179;
    --success-11: #4cc38a;
    --success-12: #e5fbeb;
    --success-a12: #eafff0fa;
    --success-a11: #62ffb3bd;
    --success-a10: #54ffafa9;
    --success-a9: #47ffa69a;
    --success-a8: #49ffaa5e;
    --success-a7: #43ffad42;
    --success-a6: #3dffb130;
    --success-a5: #38feb524;
    --success-a4: #33feb31b;
    --success-a3: #2afebe12;
    --success-a2: #00f7ca07;
    --success-a1: #0000;
    --caution-1: #1f1206;
    --caution-2: #2b1400;
    --caution-3: #391a03;
    --caution-4: #441f04;
    --caution-5: #4f2305;
    --caution-6: #5f2a06;
    --caution-7: #763205;
    --caution-8: #943e00;
    --caution-9: #f76808;
    --caution-10: #ff802b;
    --caution-11: #ff8b3e;
    --caution-12: #feeadd;
    --caution-a12: #ffeee1fa;
    --caution-a11: #ff8c3ffa;
    --caution-a10: #ff842cfa;
    --caution-a9: #ff6b08f6;
    --caution-a8: #fe660085;
    --caution-a7: #ff640363;
    --caution-a6: #ff650649;
    --caution-a5: #fe620137;
    --caution-a4: #fe61002a;
    --caution-a3: #fd54001e;
    --caution-a2: #fd37000e;
    --caution-a1: #0000;
    --warning-1: #150f0f;
    --warning-2: #1e1413;
    --warning-3: #361717;
    --warning-4: #49191a;
    --warning-5: #582122;
    --warning-6: #692e2e;
    --warning-7: #813e3e;
    --warning-8: #a75252;
    --warning-9: #d16565;
    --warning-10: #c35959;
    --warning-11: #ff9795;
    --warning-12: #f9d5d3;
    --warning-a12: #ffdad8f9;
    --warning-a11: #ff9795ef;
    --warning-a10: #ff7272bf;
    --warning-a9: #ff7979ce;
    --warning-a8: #ff7878a1;
    --warning-a7: #ff717178;
    --warning-a6: #fd5f5f5f;
    --warning-a5: #fd464a4d;
    --warning-a4: #ff33383c;
    --warning-a3: #fd383828;
    --warning-a2: #fe48360e;
    --warning-a1: #de000005;
    --green-1: #0d1912;
    --green-2: #0c1f17;
    --green-3: #0f291e;
    --green-4: #113123;
    --green-5: #133929;
    --green-6: #164430;
    --green-7: #1b543a;
    --green-8: #236e4a;
    --green-9: #30a46c;
    --green-10: #3cb179;
    --green-11: #4cc38a;
    --green-12: #e5fbeb;
    --green-a12: #eafff0fa;
    --green-a11: #62ffb3bd;
    --green-a10: #54ffafa9;
    --green-a9: #47ffa69a;
    --green-a8: #49ffaa5e;
    --green-a7: #43ffad42;
    --green-a6: #3dffb130;
    --green-a5: #38feb524;
    --green-a4: #33feb31b;
    --green-a3: #2afebe12;
    --green-a2: #00f7ca07;
    --green-a1: #0000;
    --orange-1: #1f1206;
    --red-1: #150f0f;
    --red-2: #1e1413;
    --red-3: #361717;
    --red-4: #49191a;
    --red-5: #582122;
    --red-6: #692e2e;
    --red-7: #813e3e;
    --red-8: #a75252;
    --red-9: #d16565;
    --red-10: #c35959;
    --red-11: #ff9795;
    --red-12: #f9d5d3;
    --red-a12: #ffdad8f9;
    --red-a11: #ff9795ef;
    --red-a10: #ff7272bf;
    --red-a9: #ff7979ce;
    --red-a8: #ff7878a1;
    --red-a7: #ff717178;
    --red-a6: #fd5f5f5f;
    --red-a5: #fd464a4d;
    --red-a4: #ff33383c;
    --red-a3: #fd383828;
    --red-a2: #fe48360e;
    --red-a1: #de000005;
    --black-1: #000;
    --black-a12: #000000e8;
    --black-a11: #00000090;
    --black-a10: #0000007a;
    --black-a9: #00000070;
    --black-a8: #00000038;
    --black-a7: #00000024;
    --black-a6: #0000001d;
    --black-a5: #00000017;
    --black-a4: #00000012;
    --black-a3: #0000000c;
    --black-a2: #00000007;
    --black-a1: #00000003;
    --orange-2: #2b1400;
    --orange-3: #391a03;
    --orange-4: #441f04;
    --orange-5: #4f2305;
    --orange-6: #5f2a06;
    --orange-7: #763205;
    --orange-8: #943e00;
    --orange-9: #f76808;
    --orange-10: #ff802b;
    --orange-11: #ff8b3e;
    --orange-12: #feeadd;
    --orange-a12: #ffeee1fa;
    --orange-a11: #ff8c3ffa;
    --orange-a10: #ff842cfa;
    --orange-a9: #ff6b08f6;
    --orange-a8: #fe660085;
    --orange-a7: #ff640363;
    --orange-a6: #ff650649;
    --orange-a5: #fe620137;
    --orange-a4: #fe61002a;
    --orange-a3: #fd54001e;
    --orange-a2: #fd37000e;
    --orange-a1: #0000;
    --grey-2: #18191b;
    --grey-3: #212225;
    --grey-4: #272a2d;
    --grey-5: #2e3135;
    --grey-6: #363a3f;
    --grey-7: #43484e;
    --grey-8: #5a6169;
    --grey-9: #696e77;
    --grey-10: #777b84;
    --grey-11: #9a9fa7;
    --grey-12: #d5d8dc;
    --grey-a12: #fcfdffef;
    --grey-a11: #f1f7feb5;
    --grey-a10: #e5edfd7b;
    --grey-a9: #dfebfd;
    --grey-a8: #d9edff5d;
    --grey-a7: #d9edff40;
    --grey-a6: #d6ebfd30;
    --grey-a5: #d9edfe25;
    --grey-a4: #d3edf81d;
    --grey-a3: #ddeaf814;
    --grey-a2: #d8f4f609;
    --grey-a1: #0000;
    --white-1: #fff;
    --white-a12: #ffffffeb;
    --white-a11: #ffffff97;
    --white-a10: #ffffff72;
    --white-a9: #ffffff62;
    --white-a8: #ffffff3f;
    --white-a7: #ffffff2d;
    --white-a6: #ffffff20;
    --white-a5: #ffffff16;
    --white-a4: #ffffff0e;
    --white-a3: #ffffff09;
    --white-a2: #ffffff03;
    --white-a1: #fff0;

      /* feedback */
    --error: var(--warning-8);
    --info: var(--primary-7);
    --neutral: var(--grey-9);
    --success: var(--success-8);
    --warning: var(--caution-8);

    /* tooltip */
    --tooltip-warning: var(--warning-a9);
    --tooltip-warning-arrow: var(--warning-a9);
    --tooltip-warning-border: var(--warning-a7);

    --tooltip-success: var(--success-9);
    --tooltip-success-arrow: var(--success-a7);
    --tooltip-success-border: var(--success-a7);

    --tooltip-info: var(--primary-8);
    --tooltip-info-arrow: var(--primary-a8);
    --tooltip-info-border: var(--primary-8);

    --tooltip-neutral: var(--grey-8);
    --tooltip-neutral-arrow: var(--grey-a7);
    --tooltip-neutral-border: var(--grey-7);

      /* icons */
    --inverse: var(--white-1);
    --mono: var(--grey-12);
    --dimmed: var(--grey-11);
    --subtle: var(--grey-10);
    --primary: var(--primary-9);
    --danger: var(--warning-9);
    --white: var(--white-1);

    --spinner-danger: var(--warning-8);
    --spinner-secondary: var(--grey-8);
    --spinner-primary: var(--primary-6);
    --spinner-simple: var(--grey-a8);
  }
`;

export default GlobalStyle;