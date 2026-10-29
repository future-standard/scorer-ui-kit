import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./Icon-Bj-W_PAo.js";import{n as i,t as a}from"./Button-DBbC_pYz.js";import{n as o,t as s}from"./Spinner-CeNS2_He.js";import{a as c,i as l,o as u}from"./iframe-DkCQ6b6C.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{u(),n(),o(),i(),d=t(),f=c.div`
  display: inline;
`,p=c.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);
  transition: padding var(--speed-slow) var(--easing-primary-in-out);
  font-weight: ${({$weight:e})=>e===`light`?`500`:`600`};
`,m=c.div`
  opacity: 1;
`,h=c.div`
  background-color: var(--button-loading-area-background-color);

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
`,g=c.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({$position:e})=>l`
    order: ${e&&e===`left`?0:2};
    ${e===`left`?`border-right-width: 1px;`:`border-left-width: 1px;`};
  `}

  ${m}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${m}, ${h}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({$loading:e})=>e&&l`
    border-color: var(--button-loading-area-divider-color);

    ${h}{
      opacity: 1;
    }

    ${m}{
      opacity: 0;
    };
  `};

`,_=c.div`
  display: flex;
  height: inherit;

  &:hover {
    ${({$disabled:e})=>!e&&l`
      ${m}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({$disabled:e})=>!e&&l`
      ${m}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({$disabled:e})=>e&&l`
    ${m}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`,v=({design:e=`primary`,size:t=`normal`,loading:n=!1,shadow:i=!1,onClick:o,disabled:c,position:l,icon:u,weight:v=`regular`,children:y,...b})=>(0,d.jsx)(f,{children:(0,d.jsx)(a,{noPadding:!0,disabled:c||n,design:e,size:t,shadow:i,onClick:o,loading:n,...b,children:(0,d.jsxs)(_,{$disabled:c,children:[(0,d.jsx)(p,{$size:t,$position:l,$weight:v,children:y}),(0,d.jsxs)(g,{$loading:n,$position:l,children:[(0,d.jsx)(m,{children:(0,d.jsx)(r,{icon:u,weight:v})}),(0,d.jsx)(h,{children:(0,d.jsx)(s,{size:t===`xsmall`||t===`small`?`xsmall`:`small`,styling:e})})]})]})})});try{v.displayName=`ButtonWithIcon`,v.__docgenInfo={description:``,displayName:`ButtonWithIcon`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`},required:!0,tags:{},type:{name:`string`}},position:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`}],description:``,name:`position`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`},required:!1,tags:{},type:{name:`enum`,raw:`"left" | "right"`,value:[{value:`"left"`},{value:`"right"`}]}},shadow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`}],description:``,name:`shadow`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`},required:!1,tags:{},type:{name:`boolean`}},weight:{defaultValue:{value:`regular`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`}],description:``,name:`weight`,parent:{fileName:`packages/ui-lib/src/Form/atoms/ButtonWithIcon.tsx`,name:`IButtonWithIcon`},required:!1,tags:{},type:{name:`enum`,raw:`IWeight`,value:[{value:`"light"`},{value:`"strong"`},{value:`"regular"`},{value:`"heavy"`}]}},size:{defaultValue:{value:`normal`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonSizes`,value:[{value:`"normal"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`}]}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonDesigns`,value:[{value:`"warning"`},{value:`"primary"`},{value:`"secondary"`},{value:`"danger"`},{value:`"text-only"`},{value:`"outline"`}]}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`}],description:``,name:`loading`,parent:{fileName:`packages/ui-lib/src/Form/index.ts`,name:`ButtonProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{y as n,v as t};