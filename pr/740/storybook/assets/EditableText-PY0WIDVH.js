import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-Bj-W_PAo.js";import{n as a,t as o}from"./Button-DBbC_pYz.js";import{n as s,t as c}from"./ButtonWithLoading-BOl70wlJ.js";import{n as l,t as u}from"./useClickOutside-gjKn5OLT.js";import{a as d,i as f,o as p}from"./iframe-DkCQ6b6C.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{m=t(),p(),u(),r(),a(),s(),h=n(),g=d.span`
  display: flex;
  flex-shrink: 0;
`,_=d.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,v=d.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  height: 100%;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`,y=d.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  font: inherit;
  color: inherit;
  text-align: left;

  & svg [stroke] { stroke: currentColor; }

  ${g} {
    opacity: 0;
    transition: opacity var(--speed-normal) var(--easing-primary-in-out);
  }

  &:hover ${g},
  &:focus-visible ${g} {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--primary-9);
    outline-offset: 2px;
  }

  ${({$alwaysShowIcon:e})=>e&&f`
    ${g} { opacity: 1; }
  `}
`,b=d.input`
  box-sizing: border-box;
  height: 24px;
  width: ${({$fieldWidth:e})=>e};
  max-width: 100%;
  min-width: 0;
  padding: 0 8px;
  border: 1px solid var(--input-default-border-color);
  border-radius: 3px;
  background: var(--input-default-background-color);
  color: var(--input-color-default);
  font: inherit;
  outline: none;

  &:focus {
    border-color: var(--input-default-focused-border-color);
    box-shadow: 0 3px 3px var(--input-default-focused-shadow-color);
  }

  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  }

  &[readonly] {
    color: var(--input-color-disabled);
  }
`,x=d.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;
`,S=({value:e,defaultValue:t,label:n,onSave:r,onCancel:a,onEditingChange:s,saveOnClickOutside:u=!1,allowEmpty:d=!1,fieldWidth:f=`240px`,editIcon:p=`Edit`,alwaysShowEditIcon:S=!1,editText:C=`Edit`,saveText:w=`Save`,savingText:T=`Saving`,cancelText:E=`Cancel`,disabled:D=!1,type:O=`text`,onKeyDown:k,...A})=>{let[j,M]=(0,m.useState)(!1),[N,P]=(0,m.useState)(!1),[F,I]=(0,m.useState)(t??``),L=e!==void 0,R=L?e:F,[z,B]=(0,m.useState)(R),V=(0,m.useRef)(null),H=(0,m.useRef)(null),U=(0,m.useRef)(null),W=(0,m.useRef)(!1),G=(0,m.useCallback)(e=>{M(e),s?.(e)},[s]),K=(0,m.useCallback)(()=>{B(R),G(!0)},[R,G]),q=(0,m.useCallback)(e=>{W.current=e,G(!1)},[G]);(0,m.useEffect)(()=>{j&&(H.current?.focus(),H.current?.select())},[j]),(0,m.useEffect)(()=>{!j&&W.current&&(W.current=!1,U.current?.focus())},[j]),(0,m.useEffect)(()=>{D&&j&&q(!1)},[D,j,q]);let J=(0,m.useCallback)(e=>{q(e),a?.()},[q,a]),Y=(0,m.useCallback)(async e=>{if(N)return;let t=z.trim();if(t||d){if(t===R){q(e);return}P(!0);try{await r?.(t),L||I(t),q(e)}catch{}finally{P(!1)}}},[N,z,d,R,L,r,q]),X=(0,m.useCallback)(()=>{if(j&&!N){if(u){Y(!1);return}J(!1)}},[j,N,u,Y,J]);l(V,X);let Z=(0,m.useCallback)(e=>{if(k?.(e),!e.nativeEvent.isComposing){if(e.key===`Enter`){e.preventDefault(),Y(!0);return}e.key===`Escape`&&J(!0)}},[k,Y,J]),Q=d||z.trim().length>0;return j?(0,h.jsxs)(v,{ref:V,children:[(0,h.jsx)(b,{...A,ref:H,type:O,$fieldWidth:f,"aria-label":n,"aria-busy":N,readOnly:N,value:z,onChange:e=>B(e.target.value),onKeyDown:Z}),(0,h.jsxs)(x,{children:[(0,h.jsx)(c,{size:`small`,loading:N,disabled:!Q,"aria-label":N?T:w,onClick:()=>{Y(!0)},children:N?T:w}),(0,h.jsx)(o,{design:`secondary`,size:`small`,disabled:N,onClick:()=>J(!0),children:E})]})]}):(0,h.jsx)(v,{ref:V,children:D?(0,h.jsx)(_,{children:R}):(0,h.jsxs)(y,{ref:U,type:`button`,$alwaysShowIcon:S||R===``,"aria-label":`${R}, ${C}`,onClick:K,children:[(0,h.jsx)(_,{children:R}),(0,h.jsx)(g,{"aria-hidden":`true`,children:(0,h.jsx)(i,{icon:p,size:12})})]})})};try{S.displayName=`EditableText`,S.__docgenInfo={description:``,displayName:`EditableText`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/EditableText.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`controlled: the text on show, and it stays authoritative — a value saved elsewhere replaces it`,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`uncontrolled: the starting text, after which the component keeps it and updates it on save`,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`accessible name for the field, e.g. 'Space name'`,name:`label`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},onSave:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`commit. May return a promise: the controls stay busy until it settles, and a rejection leaves
the field open with the typed text intact so the user can retry`,name:`onSave`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((value: string) => void | Promise<void>)`}},onCancel:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`edit abandoned: Escape, Cancel, or a click outside`,name:`onCancel`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}},onEditingChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`entering or leaving edit mode`,name:`onEditingChange`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((isEditing: boolean) => void)`}},saveOnClickOutside:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`commit on click outside instead of discarding (default false)`,name:`saveOnClickOutside`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},allowEmpty:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`allow committing an empty value (default false: Save is disabled and Enter does nothing)`,name:`allowEmpty`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},fieldWidth:{defaultValue:{value:`240px`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`width of the field while editing, any CSS length (default '240px')`,name:`fieldWidth`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},editIcon:{defaultValue:{value:`Edit`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`icon name (@future-standard/icons) for the edit affordance (default 'Edit')`,name:`editIcon`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},alwaysShowEditIcon:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`keep the pencil visible instead of revealing it on hover and focus`,name:`alwaysShowEditIcon`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},editText:{defaultValue:{value:`Edit`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`appended to the value as the trigger's accessible name (default 'Edit')`,name:`editText`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},saveText:{defaultValue:{value:`Save`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`Save button text (default 'Save')`,name:`saveText`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},savingText:{defaultValue:{value:`Saving`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`Save button text while the save is in flight (default 'Saving')`,name:`savingText`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},cancelText:{defaultValue:{value:`Cancel`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`}],description:`Cancel button text (default 'Cancel')`,name:`cancelText`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`InputHTMLAttributes`}],description:`render as plain text, with no edit affordance`,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Form/molecules/EditableText.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{C as n,S as t};