import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,t as r}from"./common-UxCkhbcb.js";import{a as i,i as a,r as o,t as s}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as c,n as l}from"./common-CUVz1sPu.js";import{n as u,r as d,t as f}from"./Icon-jcMQaGO-.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),l(),d(),n(),p=t(),m=a.div`
  ${({$isSortAscending:e})=>e&&o`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,h=s`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,g=a.div`
  ${({$design:e})=>e==="default"?`padding: 0px 12px 0px 8px;`:`padding: 0px 8px;`};
`,_=a.button`
  ${c};
  border-radius: 3px;
  height: var(--common-height);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 4px 10px 4px 4px;

  ${({$design:e})=>e===`basic`?`
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px;
      `:`
        background-color: var(--filter-button-background-color);
        border: var(--filter-button-stroke-color) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);
      `};

  ${({$hasFlipArrow:e})=>e&&`padding: 4px 0px 4px 4px;`};

  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--filter-button-text-color);
  font-family: var(--font-ui);
  transition:
    opacity ${r.speed.fast} ${r.easing.primary.out},
    background-color ${r.speed.fast} ${r.easing.primary.out},
    box-shadow ${r.speed.fast} ${r.easing.primary.out},
    color ${r.speed.fast} ${r.easing.primary.out},
    border ${r.speed.fast} ${r.easing.primary.out};

  animation: ${h} ${r.speed.slower} ${r.easing.primary.out};

  ${u} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${r.speed.fast} ${r.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({$design:e})=>e===`basic`?``:o`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${u} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({$isOpen:e})=>!e&&o`
      ${g} ${u} {
        [stroke]{
          stroke: var(--grey-12);
        }
      };
    `};

  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }

  ${({$isOpen:e,$hasFlipArrow:t})=>e&&t&&o`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${u} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${g} ${u} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,v=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,y=a.div``,b=({icon:e,hasFlipArrow:t=!1,isSortAscending:n=!1,isOpen:r,design:i=`default`,children:a,formAction:o,...s})=>(0,p.jsx)(_,{type:`button`,...s,$isOpen:r,$hasFlipArrow:t,$design:i,children:(0,p.jsxs)(v,{children:[(0,p.jsx)(m,{$isSortAscending:n,children:(0,p.jsx)(f,{icon:e,size:12,weight:`light`,color:`filter-button-icon-color`})}),(0,p.jsx)(y,{$hasFlipArrow:t,children:a}),t&&(0,p.jsx)(g,{$design:i,children:(0,p.jsx)(f,{icon:r?`Up`:`Down`,size:6,color:`grey-11`})})]})});try{b.displayName=`FilterButton`,b.__docgenInfo={description:``,displayName:`FilterButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},hasFlipArrow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`hasFlipArrow`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},isSortAscending:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`isSortAscending`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},isOpen:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`isOpen`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},design:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}}},tags:{}}}catch{}})))()}export{x as n,b as t};