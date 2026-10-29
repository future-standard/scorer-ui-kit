import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r}from"./common-Bnnfb4Bd.js";import{n as i,r as a,t as o}from"./Icon-Bj-W_PAo.js";import{a as s,i as c,n as l,o as u,s as d,u as f}from"./iframe-DkCQ6b6C.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u(),r(),a(),f(),p=t(),m=s.div`
  ${({$isSortAscending:e})=>e&&c`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,h=l`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,g=s.div`
  ${({$design:e})=>e==="default"?`padding: 0px 12px 0px 8px;`:`padding: 0px 8px;`};
`,_=s.button`
  ${n};
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
    opacity ${d.speed.fast} ${d.easing.primary.out},
    background-color ${d.speed.fast} ${d.easing.primary.out},
    box-shadow ${d.speed.fast} ${d.easing.primary.out},
    color ${d.speed.fast} ${d.easing.primary.out},
    border ${d.speed.fast} ${d.easing.primary.out};

  animation: ${h} ${d.speed.slower} ${d.easing.primary.out};

  ${i} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${d.speed.fast} ${d.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({$design:e})=>e===`basic`?``:c`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${i} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({$isOpen:e})=>!e&&c`
      ${g} ${i} {
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

  ${({$isOpen:e,$hasFlipArrow:t})=>e&&t&&c`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${i} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${g} ${i} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,v=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,y=s.div``,b=({icon:e,hasFlipArrow:t=!1,isSortAscending:n=!1,isOpen:r,design:i=`default`,children:a,formAction:s,...c})=>(0,p.jsx)(_,{type:`button`,...c,$isOpen:r,$hasFlipArrow:t,$design:i,children:(0,p.jsxs)(v,{children:[(0,p.jsx)(m,{$isSortAscending:n,children:(0,p.jsx)(o,{icon:e,size:12,weight:`light`,color:`filter-button-icon-color`})}),(0,p.jsx)(y,{$hasFlipArrow:t,children:a}),t&&(0,p.jsx)(g,{$design:i,children:(0,p.jsx)(o,{icon:r?`Up`:`Down`,size:6,color:`grey-11`})})]})});try{b.displayName=`FilterButton`,b.__docgenInfo={description:``,displayName:`FilterButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},hasFlipArrow:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`hasFlipArrow`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},isSortAscending:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`isSortAscending`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},isOpen:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`isOpen`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},design:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}}},tags:{}}}catch{}})))()}export{x as n,b as t};