var l={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function u(s,r,e){var t=null;if(e!==void 0&&(t=""+e),r.key!==void 0&&(t=""+r.key),"key"in r){e={};for(var n in r)n!=="key"&&(e[n]=r[n])}else e=r;return r=e.ref,{$$typeof:p,type:s,key:t,ref:r!==void 0?r:null,props:e}}a.Fragment=d;a.jsx=u;a.jsxs=u;l.exports=a;var x=l.exports,i=function(){return i=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},i.apply(this,arguments)};function c(s,r,e){if(e||arguments.length===2)for(var t=0,n=r.length,o;t<n;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return s.concat(o||Array.prototype.slice.call(r))}var f={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};export{i as _,c as a,x as j,f as u};
