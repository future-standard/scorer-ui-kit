import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a}from"./iframe-B9mgqNTy.js";var o,s,c,l;function u(){return(u=e((()=>{a(),o=t(),s=e=>i`
    0% {
      box-shadow:
        0 0px 0px var(--button-hover-inner-shadow-color) inset
        ${e?`, 0 4px 8px var(--button-hover-drop-shadow-color)`:``};
    }

    75% {
      box-shadow:
        0 0 24px var(--button-active-inner-shadow-color) inset
        ${e?`, 0 4px 6px var(--button-active-drop-shadow-color)`:``};
    }

    100% {
      box-shadow:
        0 0 16px var(--button-active-inner-shadow-color) inset
        ${e?`, 0 4px 6px var(--button-active-drop-shadow-color)`:``};
    }
  `,c=n.button`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({$noPadding:e,$isOutline:t})=>e?r`
      padding: 0px;
    `:r`
      padding: ${t?`var(--button-h-padding-outline)`:`var(--button-h-padding)`};
    `}

  overflow: hidden;
  cursor: pointer;
  user-select: none;
  outline: none;
  box-sizing: border-box;

  border-radius: 3px;
  border: var(--button-border-width) solid var(--button-border-color);
  background: linear-gradient(135deg, transparent, transparent, var(--button-gradient-start), var(--button-gradient-end));
  background-color: var(--button-background-color);
  background-size: 400%;
  background-position: 99%;

  ${({$shadow:e})=>e?r`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  `:r`
    box-shadow: 0 0 0 var(--button-inner-shadow-color) inset;
  `}

  transition:
    border-color var(--speed-normal) var(--easing-primary-in-out),
    background-color var(--speed-normal) var(--easing-primary-in-out),
    background-position var(--speed-normal) var(--easing-primary-out),
    background-size var(--speed-normal) var(--easing-primary-out),
    box-shadow var(--speed-normal) var(--easing-primary-out),
    opacity var(--speed-normal) var(--easing-primary-out),
    color var(--speed-normal) var(--easing-primary-in-out);

  &:hover:enabled {
    background-position: 1%;
    background-color: var(--button-hover-background-color);
    border-color: var(--button-hover-border-color);
    color: var(--button-hover-text-color);

    ${({$shadow:e})=>e?r`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    `:r`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow:e})=>r`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${()=>s(e)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading:e})=>e&&r`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`,l=({design:e=`primary`,size:t=`normal`,shadow:n=!1,noPadding:r=!1,loading:i=!1,children:a,formAction:s,className:l,...u})=>{e===`danger`&&console.warn(`Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead.`);let d=[`button-design-${e}`,`button-size-${t}`,l].filter(Boolean).join(` `);return(0,o.jsx)(c,{type:`button`,$isOutline:e===`outline`,className:d,$design:e,$size:t,$noPadding:r,$shadow:n,$loading:i,...u,children:a})};try{l.displayName=`Button`,l.__docgenInfo={description:``,displayName:`Button`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/Button.tsx`,methods:[],props:{size:{defaultValue:{value:`normal`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonSizes`,value:[{value:`"normal"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`}]}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonDesigns`,value:[{value:`"warning"`},{value:`"primary"`},{value:`"secondary"`},{value:`"danger"`},{value:`"text-only"`},{value:`"outline"`}]}},shadow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`}],description:``,name:`shadow`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},noPadding:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`}],description:``,name:`noPadding`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`}],description:``,name:`loading`,parent:{fileName:`packages/ui-lib/src/Form/atoms/Button.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{u as n,l as t};