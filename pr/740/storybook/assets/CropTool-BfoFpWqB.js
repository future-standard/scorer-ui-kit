import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o,t as s}from"./Icon-Bj-W_PAo.js";import{n as c,t as l}from"./Button-DBbC_pYz.js";import{n as u,t as d}from"./ButtonWithLoading-BOl70wlJ.js";import{n as f,o as p,r as m}from"./helpers-D3bl-wl9.js";import{a as h,i as g,o as _}from"./iframe-DkCQ6b6C.js";var v,y,b,x,S,C,w;function T(){return(T=t((()=>{p(),v=(e,t,n,r,i,a)=>{let o=`default`;return o=a-t<5?n-(i-e)<5?`ne-resize`:i-e<5?`nw-resize`:`n-resize`:r-(a-t)<5?n-(i-e)<5?`se-resize`:i-e<5?`sw-resize`:`s-resize`:n-(i-e)<5?`e-resize`:i-e<5?`w-resize`:`move`,o},y=(e,t,n)=>{let r=Math.min(n/e.naturalWidth,t/e.naturalHeight),i=Math.floor(e.naturalWidth*r),a=Math.floor(e.naturalHeight*r),o=0+Math.floor((t-a)/2);return{left:0+Math.floor((n-i)/2),top:o,width:i,height:a}},b=(e,t,n,r,i,a,o)=>{let s,c,l=o||1,u=Math.min(e,n,i),d=Math.min(t,r,a);u>d*l?(c=Math.floor(d*l),s=d):(c=u,s=Math.floor(u/l));let f=0+Math.floor(r/2-s/2);return{left:0+Math.floor(n/2-c/2),top:f,width:c,height:s}},x=e=>{let t;return t=e.buttons===void 0?e.button===void 0?e.which:e.button:e.buttons,t===1},S=(e,t,n)=>{let[r,i,a,o]=[e.cropLeft,e.cropTop,e.cropWidth,e.cropHeight],s=t-e.mouseStartX,c=n-e.mouseStartY;switch(e.cursorStart){case`ne-resize`:i=e.cropTop+c,o=e.cropHeight-c,a=e.cropWidth+s;break;case`nw-resize`:i=e.cropTop+c,r=e.cropLeft+s,o=e.cropHeight-c,a=e.cropWidth-s;break;case`n-resize`:i=e.cropTop+c,o=e.cropHeight-c;break;case`se-resize`:o=e.cropHeight+c,a=e.cropWidth+s;break;case`sw-resize`:r=e.cropLeft+s,o=e.cropHeight+c,a=e.cropWidth-s;break;case`s-resize`:o=e.cropHeight+c;break;case`e-resize`:a=e.cropWidth+s;break;case`w-resize`:r=e.cropLeft+s,a=e.cropWidth-s;break;case`move`:i=e.cropTop+c,r=e.cropLeft+s}let l=f(a,0,e.imgWidth),u=f(o,0,e.imgHeight),d=f(r,e.imgLeft,e.imgWidth-e.cropWidth+e.imgLeft),p=f(i,e.imgTop,e.imgHeight-e.cropHeight+e.imgTop);return{left:d,top:p,width:l,height:u,isUpdateRequired:w(e,{left:d,top:p,height:u,width:l})}},C=(e,t,n,r)=>{let i=r||1,[a,o,s,c]=[e.cropLeft,e.cropTop,e.cropWidth,e.cropHeight],l=t-e.mouseStartX,u=n-e.mouseStartY;switch(e.cursorStart){case`ne-resize`:o=e.cropTop+u,c=e.cropHeight-u,s=Math.floor(c*i);break;case`nw-resize`:o=e.cropTop+u,a=e.cropLeft+u*i,c=e.cropHeight-u,s=Math.floor(c*i);break;case`se-resize`:c=e.cropHeight+u,s=Math.floor(c*i);break;case`sw-resize`:a=e.cropLeft+l,s=e.cropWidth-l,c=Math.floor(s/i);break;case`move`:o=e.cropTop+u,a=e.cropLeft+l}let d=f(a,e.imgLeft,e.imgWidth-e.cropWidth+e.imgLeft),p=f(o,e.imgTop,e.imgHeight-e.cropHeight+e.imgTop),m=f(s,0,e.imgWidth),h=f(c,0,e.imgHeight),g=d,_=p,v=m,y=h;e.cursorStart!==`move`&&m===e.imgWidth&&(y=e.cropHeight,_=e.cropTop),e.cursorStart!==`move`&&h===e.imgHeight&&(v=e.cropWidth,g=e.cropLeft);let b=w(e,{left:g,top:_,height:y,width:v});return{left:g,top:_,width:v,height:y,isUpdateRequired:b}},w=(e,t)=>{let n=!1;return e.cropLeft!==t.left&&(n=!0),e.cropTop!==t.top&&(n=!0),e.cropHeight!==t.height&&(n=!0),e.cropWidth!==t.width&&(n=!0),n}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{E=n(),_(),D=i(),O=g`
  position: absolute;
  display: block;
  opacity: 0.1;
`,k=h.div`
  ${O};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`,A=h.div`
  ${O};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`,j=h.div`
  ${O}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`,M=h.div`
  ${O};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`,N=g`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--black-a12);
  background-color: var(--white-1);
`,P=h.div`
  ${N};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({$isResizable:e})=>e&&g`
    cursor: n-resize;
  `};
`,F=h.div`
  ${N};
  top: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: nw-resize;
  `};
`,I=h.div`
  ${N};
  top: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: ne-resize;
  `};
`,L=h.div`
  ${N};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: e-resize;
  `};
`,R=h.div`
  ${N};
  bottom: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: se-resize;
  `};
`,z=h.div`
  ${N};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: s-resize;
  `};
`,B=h.div`
  ${N};
  bottom: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: sw-resize;
  `};
`,V=h.div`
  ${N};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({$isResizable:e})=>e&&g`
    cursor: w-resize;
  `};
`,H=({isResizable:e,hasAspectRatio:t})=>(0,D.jsxs)(E.Fragment,{children:[e&&!t?(0,D.jsxs)(E.Fragment,{children:[(0,D.jsx)(k,{}),(0,D.jsx)(A,{}),(0,D.jsx)(j,{}),(0,D.jsx)(M,{})]}):null,t?null:(0,D.jsxs)(E.Fragment,{children:[(0,D.jsx)(P,{"data-point":`cursor-n`,$isResizable:e}),(0,D.jsx)(L,{"data-point":`cursor-e`,$isResizable:e}),(0,D.jsx)(z,{"data-point":`cursor-s`,$isResizable:e}),(0,D.jsx)(V,{"data-point":`cursor-w`,$isResizable:e})]}),(0,D.jsx)(F,{"data-point":`cursor-nw`,$isResizable:e}),(0,D.jsx)(I,{"data-point":`cursor-ne`,$isResizable:e}),(0,D.jsx)(R,{"data-point":`cursor-se`,$isResizable:e}),(0,D.jsx)(B,{"data-point":`cursor-sw`,$isResizable:e})]});try{H.displayName=`CropArea`,H.__docgenInfo={description:``,displayName:`CropArea`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/CropArea.tsx`,methods:[],props:{isResizable:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/CropArea.tsx`,name:`ICropArea`}],description:``,name:`isResizable`,parent:{fileName:`packages/ui-lib/src/Form/atoms/CropArea.tsx`,name:`ICropArea`},required:!0,tags:{},type:{name:`boolean`}},hasAspectRatio:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/CropArea.tsx`,name:`ICropArea`}],description:``,name:`hasAspectRatio`,parent:{fileName:`packages/ui-lib/src/Form/atoms/CropArea.tsx`,name:`ICropArea`},required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var W,G,K,q,J,Y,X,Z,ee,te,ne,Q,$;function re(){return(re=t((()=>{W=n(),G=e(r()),_(),p(),T(),o(),c(),u(),U(),K=i(),q=h.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${({theme:e})=>e.fontFamily.ui};
  z-index: 999;
`,J=h.div`
    position: relative;
  z-index: 99;
`,Y=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`,X=h.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--mono);

  ${a} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`,Z=h.div`
  button + button {
    margin-left: 10px;
  }
`,ee=h.div`
  position: relative;
  overflow: hidden;
  height: ${({$canvasHeight:e})=>e?`${e}px`:`462px`};
  width: ${({$canvasWidth:e})=>e?`${e}px`:`485px`};
  border-radius: 5px;
  background-color: var(--grey-3);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, var(--white-a10) 35px, var(--white-a10) 70px);
`,te=h.img`
  display: none;
`,ne=h.div`
  position: absolute;
  border: dashed 1px var(--black-a12);
  box-shadow: 0 0 0 9999em var(--black-a11);
  ${({$cropLeft:e,$cropTop:t,$cropWidth:n,$cropHeight:r})=>g`
    top: ${t}px;
    left: ${e}px;
    width: ${n}px;
    height: ${r}px;
  `};
  cursor: move;
`,Q={cropLeft:0,cropTop:0,cropWidth:350,cropHeight:300,mouseStartX:0,mouseStartY:0,imgLeft:0,imgTop:0,imgWidth:400,imgHeight:400,cursorStart:`default`,isResizing:!1},$=({title:e=`Crop Image`,cancelBtnTxt:t=`Cancel`,cropBtnTxt:n=`Crop & Save`,isResizable:r=!0,cropHeight:i=300,cropWidth:a=350,canvasHeight:o=400,canvasWidth:c=450,aspectRatio:u,imgUrl:f,onCrop:p,onClose:h=()=>{},onError:g=()=>{}})=>{let[_,w]=(0,W.useState)(!1),[T,E]=(0,W.useState)(Q),D=(0,W.useRef)(null),O=(0,W.useRef)(null),k=(0,W.useRef)(null),A=(0,W.useCallback)(()=>{if(!D||!O)return;let e=O.current;if(!e){g(`error loading image`);return}let t=D.current;if(!t){g(`error loading canvas`);return}let n=t.getContext(`2d`);if(!n){g(`error drawing image`);return}let r=y(e,o,c);n?.drawImage(e,r.left,r.top,r.width,r.height);let s=b(a,i,c,o,r.width,r.height,u);E(e=>({...e,cropLeft:s.left,cropTop:s.top,cropWidth:s.width,cropHeight:s.height,imgLeft:r.left,imgTop:r.top,imgWidth:r.width,imgHeight:r.height})),Q.cropLeft=s.left,Q.cropTop=s.top,Q.cropWidth=s.width,Q.cropHeight=s.height,Q.imgLeft=r.left,Q.imgTop=r.top,Q.imgWidth=r.width,Q.imgHeight=r.height,Q.cursorStart=`default`,Q.isResizing=!1,w(!1)},[u,o,c,i,a,g]),j=(0,W.useCallback)(async e=>{if(w(!0),!D?.current||!O)return;let t=O.current;if(!t)return;let n=D.current;if(!n)return;let r=n.getContext(`2d`)?.getImageData(e.left,e.top,e.width,e.height);if(!r)return;let i=document.createElement(`canvas`),a=i.getContext(`2d`);i.width=e.width,i.height=e.height,a?.putImageData(r,0,0);let o=m(t),s=i.toDataURL(o);p&&p(s,o)},[p]),M=(0,W.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),!k||!x(e.nativeEvent))return;let t=k.current?.getBoundingClientRect();if(!t)return;let{left:n,top:i,width:a,height:o}=t,[s,c]=[e.clientX,e.clientY],l;l=r?v(n,i,a,o,s,c):`move`,Q.mouseStartX=s,Q.mouseStartY=c,Q.cursorStart=l,Q.isResizing=!0},[r]),N=(0,W.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),Q.isResizing&&(Q.isResizing=!1)},[]),P=(0,W.useCallback)((e,t,n,r)=>{k.current&&(k.current.style.left=`${e}px`,k.current.style.top=`${t}px`,k.current.style.width=`${n}px`,k.current.style.height=`${r}px`)},[]),F=(0,W.useCallback)(e=>{if(e.preventDefault(),e.stopPropagation(),!k||!Q.isResizing||!k.current?.getBoundingClientRect())return;let[t,n]=[e.clientX,e.clientY],r=u?C(Q,t,n,u):S(Q,t,n);r.isUpdateRequired&&(Q.cropTop=r.top,Q.cropLeft=r.left,Q.cropWidth=r.width,Q.cropHeight=r.height,Q.mouseStartX=t,Q.mouseStartY=n,P(Q.cropLeft,Q.cropTop,Q.cropWidth,Q.cropHeight))},[u,P]),I=(0,W.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),Q.isResizing&&(Q.isResizing=!1)},[]);return G.createPortal((0,K.jsx)(q,{children:(0,K.jsxs)(J,{children:[(0,K.jsxs)(Y,{children:[(0,K.jsxs)(X,{children:[(0,K.jsx)(s,{icon:`Crop`,size:20,color:`mono`}),e]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(l,{design:`secondary`,size:`small`,onClick:h,children:t}),(0,K.jsxs)(d,{loading:_,size:`small`,onClick:()=>j({left:Q.cropLeft,top:Q.cropTop,width:Q.cropWidth,height:Q.cropHeight}),children:[` `,n]})]})]}),(0,K.jsxs)(ee,{$canvasHeight:o,$canvasWidth:c,onMouseUp:N,onMouseMove:F,onMouseLeave:I,children:[(0,K.jsx)(te,{ref:O,src:f,onLoad:A,crossOrigin:`anonymous`}),(0,K.jsx)(`canvas`,{ref:D,width:`${c}px`,height:`${o}px`}),(0,K.jsx)(ne,{ref:k,onMouseDown:M,$cropLeft:Q.cropLeft,$cropTop:Q.cropTop,$cropWidth:Q.cropWidth,$cropHeight:Q.cropHeight,children:(0,K.jsx)(H,{isResizable:r,hasAspectRatio:!!u})})]})]})}),document.body)};try{$.displayName=`CropTool`,$.__docgenInfo={description:``,displayName:`CropTool`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/CropTool.tsx`,methods:[],props:{title:{defaultValue:{value:`Crop Image`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`string`}},cancelBtnTxt:{defaultValue:{value:`Cancel`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`cancelBtnTxt`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`string`}},cropBtnTxt:{defaultValue:{value:`Crop & Save`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`cropBtnTxt`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`string`}},imgUrl:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`imgUrl`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!0,tags:{},type:{name:`string`}},isResizable:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`isResizable`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`boolean`}},cropHeight:{defaultValue:{value:`300`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`cropHeight`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`number`}},cropWidth:{defaultValue:{value:`350`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`cropWidth`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`number`}},canvasHeight:{defaultValue:{value:`400`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`canvasHeight`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`number`}},canvasWidth:{defaultValue:{value:`450`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`canvasWidth`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`number`}},aspectRatio:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`aspectRatio`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`number`}},onCrop:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`onCrop`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`((newFileUrl: string, fileType: string) => void)`}},onClose:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`onClose`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`(() => void)`}},onError:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`}],description:``,name:`onError`,parent:{fileName:`packages/ui-lib/src/Form/molecules/CropTool.tsx`,name:`ICrop`},required:!1,tags:{},type:{name:`((msg: string) => void)`}}},tags:{}}}catch{}})))()}export{re as n,$ as t};