import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i}from"./common-FBJPsqkW.js";import{n as a,r as o,t as s}from"./Icon-BaYDX9Su.js";import{a as c,i as l,o as u}from"./iframe-PEYaYO03.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{u(),r(),o(),d=t(),f=c.div`
  padding: 0 2px;
`,p=c.div`
  ${({$hasBorder:e,$disabled:t,$noBackground:n,$width:r})=>l`

    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: var(--search-input-container-gap, 6px);
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${e&&l`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${f}{
        padding: 0;
      }
    `};

    ${t&&l`
      opacity: 50%;
      cursor: not-allowed;
      `};

    ${r&&l`
      width: ${r};
    `};

    background-color: ${n?`transparent`:`var(--grey-1)`};

    &:focus-within {
      background-color: ${n?`transparent`:`var(--grey-1)`};
      border: ${e?`1px solid var(--primary-9)`:`none`};
      box-shadow: 0px 4px 9px 0px ${n?`transparent`:`var(--primary-a2)`};
    }

  `};

  ${a} {
    flex-shrink: 0;
    display: flex;
  }


`,m=c.button`
  ${n};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${a} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,h=c.input`
  ${i};

  font-family: var(--search-input-font-family,var(--font-ui));
  font-size: var(--search-input-font-size, 12px);
  font-weight: 500;
  color: var(--grey-12);

  &::placeholder {
    ${({$color:e})=>e&&`color: var(--${e})`};
    color: var(--grey-11);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };

  &:disabled {
    cursor: not-allowed;
  }

  border: none;
  height: 100%;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`,g=({color:e=`subtle`,hasBorder:t=!0,iconSize:n=12,disabled:r=!1,noBackground:i=!1,hasCrossButton:a=!1,onCrossClick:o=()=>{},width:c,children:l,formAction:u,...g})=>(0,d.jsxs)(p,{$hasBorder:t,$disabled:r,$noBackground:i,$width:c,children:[(0,d.jsx)(f,{children:(0,d.jsx)(s,{color:e,icon:`Search`,weight:`regular`,size:n})}),(0,d.jsx)(h,{$color:e,disabled:r,...g}),a&&(0,d.jsxs)(m,{onClick:o,children:[` `,(0,d.jsx)(s,{icon:`CloseCompact`,color:`dimmed`,size:12})]})]});try{g.displayName=`BasicSearchInput`,g.__docgenInfo={description:``,displayName:`BasicSearchInput`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,methods:[],props:{color:{defaultValue:{value:`subtle`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`color`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`"mono" | "dimmed" | "subtle"`,value:[{value:`"mono"`},{value:`"dimmed"`},{value:`"subtle"`}]}},hasBorder:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`}],description:``,name:`hasBorder`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},iconSize:{defaultValue:{value:`12`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`}],description:``,name:`iconSize`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},noBackground:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`}],description:``,name:`noBackground`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},width:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:``,name:`width`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},hasCrossButton:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`}],description:``,name:`hasCrossButton`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},onCrossClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`}],description:``,name:`onCrossClick`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BasicSearchInput.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}export{_ as n,g as t};