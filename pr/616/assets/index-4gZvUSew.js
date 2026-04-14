var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ee(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ee(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ee(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=ee(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=ee(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ee(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return ee(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var ee=Symbol.for(`react.client.reference`);function N(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?N(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return N(e(t))}catch{}}return null}var te=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ne=[],re=-1;function L(e){return{current:e}}function R(e){0>re||(e.current=ne[re],ne[re]=null,re--)}function ie(e,t){re++,ne[re]=e.current,e.current=t}var ae=L(null),oe=L(null),se=L(null),ce=L(null);function le(e,t){switch(ie(se,t),ie(oe,e),ie(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Hd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Hd(t),e=Ud(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}R(ae),ie(ae,e)}function ue(){R(ae),R(oe),R(se)}function de(e){e.memoizedState!==null&&ie(ce,e);var t=ae.current,n=Ud(t,e.type);t!==n&&(ie(oe,e),ie(ae,n))}function fe(e){oe.current===e&&(R(ae),R(oe)),ce.current===e&&(R(ce),$f._currentValue=I)}var pe,me;function he(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``,me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+pe+e+me}var ge=!1;function _e(e,t){if(!e||ge)return``;ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?he(n):``}function ve(e,t){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he(`Lazy`);case 13:return e.child!==t&&t!==null?he(`Suspense Fallback`):he(`Suspense`);case 19:return he(`SuspenseList`);case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return he(`Activity`);default:return``}}function ye(e){try{var t=``,n=null;do t+=ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var be=Object.prototype.hasOwnProperty,xe=t.unstable_scheduleCallback,Se=t.unstable_cancelCallback,Ce=t.unstable_shouldYield,we=t.unstable_requestPaint,Te=t.unstable_now,Ee=t.unstable_getCurrentPriorityLevel,De=t.unstable_ImmediatePriority,Oe=t.unstable_UserBlockingPriority,ke=t.unstable_NormalPriority,Ae=t.unstable_LowPriority,je=t.unstable_IdlePriority,Me=t.log,Ne=t.unstable_setDisableYieldValue,Pe=null,Fe=null;function Ie(e){if(typeof Me==`function`&&Ne(e),Fe&&typeof Fe.setStrictMode==`function`)try{Fe.setStrictMode(Pe,e)}catch{}}var Le=Math.clz32?Math.clz32:Be,Re=Math.log,ze=Math.LN2;function Be(e){return e>>>=0,e===0?32:31-(Re(e)/ze|0)|0}var Ve=256,He=262144,Ue=4194304;function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=Ue;return Ue<<=1,!(Ue&62914560)&&(Ue=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Le(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Le(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:hp(e.type)):e}function it(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var at=Math.random().toString(36).slice(2),ot=`__reactFiber$`+at,st=`__reactProps$`+at,ct=`__reactContainer$`+at,lt=`__reactEvents$`+at,ut=`__reactListeners$`+at,dt=`__reactHandles$`+at,ft=`__reactResources$`+at,pt=`__reactMarker$`+at;function mt(e){delete e[ot],delete e[st],delete e[lt],delete e[ut],delete e[dt]}function ht(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ff(e);e!==null;){if(n=e[ot])return n;e=ff(e)}return t}e=n,n=e.parentNode}return null}function gt(e){if(e=e[ot]||e[ct]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _t(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function vt(e){var t=e[ft];return t||=e[ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function yt(e){e[pt]=!0}var bt=new Set,xt={};function St(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(xt[e]=t,e=0;e<t.length;e++)bt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return be.call(Et,e)?!0:be.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(te(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&qt(e,o,t[o])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=gt(e);if(t&&(e=t.stateNode)){var n=e[st]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[st]||null;if(!a)throw Error(i(90));zt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[st]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),wn,Tn,En,Dn=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:In,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==En&&(En&&e.type===`mousemove`?(wn=e.screenX-En.screenX,Tn=e.screenY-En.screenY):Tn=wn=0,En=e),wn)},movementY:function(e){return`movementY`in e?e.movementY:Tn}}),On=yn(Dn),kn=yn(h({},Dn,{dataTransfer:0})),An=yn(h({},Sn,{relatedTarget:0})),jn=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Mn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),z=yn(h({},bn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},B={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=B[e])?!!t[e]:!1}function In(){return Fn}var Ln=yn(h({},Sn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:In,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Rn=yn(h({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:In})),Bn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Vn=yn(h({},Dn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Hn=yn(h({},bn,{newState:0,oldState:0})),Un=[9,13,27,32],Wn=ln&&`CompositionEvent`in window,Gn=null;ln&&`documentMode`in document&&(Gn=document.documentMode);var Kn=ln&&`TextEvent`in window&&!Gn,qn=ln&&(!Wn||Gn&&8<Gn&&11>=Gn),Jn=` `,Yn=!1;function Xn(e,t){switch(e){case`keyup`:return Un.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Qn=!1;function $n(e,t){switch(e){case`compositionend`:return Zn(t);case`keypress`:return t.which===32?(Yn=!0,Jn):null;case`textInput`:return e=t.data,e===Jn&&Yn?null:e;default:return null}}function er(e,t){if(Qn)return e===`compositionend`||!Wn&&Xn(e,t)?(e=hn(),mn=pn=fn=null,Qn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return qn&&t.locale!==`ko`?null:t.data;default:return null}}var tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!tr[e.type]:t===`textarea`}function rr(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function or(e){yd(e,0)}function sr(e){if(Ft(_t(e)))return e}function cr(e,t){if(e===`change`)return t}var lr=!1;if(ln){var ur;if(ln){var dr=`oninput`in document;if(!dr){var fr=document.createElement(`div`);fr.setAttribute(`oninput`,`return;`),dr=typeof fr.oninput==`function`}ur=dr}else ur=!1;lr=ur&&(!document.documentMode||9<document.documentMode)}function pr(){ir&&(ir.detachEvent(`onpropertychange`,mr),ar=ir=null)}function mr(e){if(e.propertyName===`value`&&sr(ar)){var t=[];rr(t,ar,e,tn(e)),sn(or,t)}}function hr(e,t,n){e===`focusin`?(pr(),ir=t,ar=n,ir.attachEvent(`onpropertychange`,mr)):e===`focusout`&&pr()}function gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return sr(ar)}function _r(e,t){if(e===`click`)return sr(t)}function vr(e,t){if(e===`input`||e===`change`)return sr(t)}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var br=typeof Object.is==`function`?Object.is:yr;function xr(e,t){if(br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!be.call(t,i)||!br(e[i],t[i]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cr(e,t){var n=Sr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Sr(n)}}function wr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Dr=ln&&`documentMode`in document&&11>=document.documentMode,Or=null,kr=null,Ar=null,jr=!1;function Mr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jr||Or==null||Or!==It(r)||(r=Or,`selectionStart`in r&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&xr(Ar,r)||(Ar=r,r=Ed(kr,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Pr={animationend:Nr(`Animation`,`AnimationEnd`),animationiteration:Nr(`Animation`,`AnimationIteration`),animationstart:Nr(`Animation`,`AnimationStart`),transitionrun:Nr(`Transition`,`TransitionRun`),transitionstart:Nr(`Transition`,`TransitionStart`),transitioncancel:Nr(`Transition`,`TransitionCancel`),transitionend:Nr(`Transition`,`TransitionEnd`)},Fr={},Ir={};ln&&(Ir=document.createElement(`div`).style,`AnimationEvent`in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),`TransitionEvent`in window||delete Pr.transitionend.transition);function Lr(e){if(Fr[e])return Fr[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ir)return Fr[e]=t[n];return e}var Rr=Lr(`animationend`),zr=Lr(`animationiteration`),Br=Lr(`animationstart`),Vr=Lr(`transitionrun`),Hr=Lr(`transitionstart`),Ur=Lr(`transitioncancel`),Wr=Lr(`transitionend`),Gr=new Map,Kr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Kr.push(`scrollEnd`);function qr(e,t){Gr.set(e,t),St(t,[e])}var Jr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Yr=[],Xr=0,Zr=0;function Qr(){for(var e=Xr,t=Zr=Xr=0;t<e;){var n=Yr[t];Yr[t++]=null;var r=Yr[t];Yr[t++]=null;var i=Yr[t];Yr[t++]=null;var a=Yr[t];if(Yr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ni(n,i,a)}}function $r(e,t,n,r){Yr[Xr++]=e,Yr[Xr++]=t,Yr[Xr++]=n,Yr[Xr++]=r,Zr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ei(e,t,n,r){return $r(e,t,n,r),ri(e)}function ti(e,t){return $r(e,null,null,t),ri(e)}function ni(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Le(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ri(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ii={};function ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,t,n,r){return new ai(e,t,n,r)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ci(e,t){var n=e.alternate;return n===null?(n=oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function li(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ui(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)si(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,ae.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=oi(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return di(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=oi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=oi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=oi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=oi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function di(e,t,n,r){return e=oi(7,e,r,t),e.lanes=n,e}function fi(e,t,n){return e=oi(6,e,null,t),e.lanes=n,e}function pi(e){var t=oi(18,null,null,0);return t.stateNode=e,t}function mi(e,t,n){return t=oi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=new WeakMap;function gi(e,t){if(typeof e==`object`&&e){var n=hi.get(e);return n===void 0?(t={value:e,source:t,stack:ye(t)},hi.set(e,t),t):n}return{value:e,source:t,stack:ye(t)}}var _i=[],vi=0,yi=null,bi=0,xi=[],Si=0,Ci=null,wi=1,Ti=``;function Ei(e,t){_i[vi++]=bi,_i[vi++]=yi,yi=e,bi=t}function Di(e,t,n){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,Ci=e;var r=wi;e=Ti;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var a=32-Le(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wi=1<<32-Le(t)+i|n<<i|r,Ti=a+e}else wi=1<<a|n<<i|r,Ti=e}function Oi(e){e.return!==null&&(Ei(e,1),Di(e,1,0))}function ki(e){for(;e===yi;)yi=_i[--vi],_i[vi]=null,bi=_i[--vi],_i[vi]=null;for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,Ti=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null}function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ti,xi[Si++]=Ci,wi=t.id,Ti=t.overflow,Ci=e}var V=null,H=null,U=!1,ji=null,Mi=!1,Ni=Error(i(519));function Pi(e){throw Bi(gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ni}function Fi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ot]=e,t[st]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Pi(e,!0)}function Ii(e){for(V=e.return;V;)switch(V.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:V=V.return}}function Li(e){if(e!==V)return!1;if(!U)return Ii(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Wd(e.type,e.memoizedProps)),n=!n),n&&H&&Pi(e),Ii(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=df(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));H=df(e)}else t===27?(t=H,Qd(e.type)?(e=uf,uf=null,H=e):H=t):H=V?lf(e.stateNode.nextSibling):null;return!0}function Ri(){H=V=null,U=!1}function zi(){var e=ji;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),ji=null),e}function Bi(e){ji===null?ji=[e]:ji.push(e)}var Vi=L(null),Hi=null,Ui=null;function Wi(e,t,n){ie(Vi,t._currentValue),t._currentValue=n}function Gi(e){e._currentValue=Vi.current,R(Vi)}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ki(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ki(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ji(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$f]:e.push($f))}a=a.return}e!==null&&qi(t,e,n,r),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xi(e){Hi=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zi(e){return $i(Hi,e)}function Qi(e,t){return Hi===null&&Xi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(i(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=dd(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=P.S;P.S=function(e,t){eu=Te(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=L(null);function ha(){var e=ma.current;return e===null?Ll.pooledCache:e}function ga(e,t){t===null?ie(ma,ma.current):ie(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=Ll,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=ui(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ui(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=mi(t,e.mode,n),t.return=e,t;case O:return t=wa(t),f(e,t,n)}if(te(t)||M(t))return t=di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=wa(n),p(e,t,n,r)}if(te(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=wa(r),m(e,t,n,r,i)}if(te(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Ei(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Ei(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Ei(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&Ei(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Ei(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&Ei(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=di(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ui(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=mi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=wa(o),b(e,r,o,c)}if(te(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=oi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var W=Na(!0),Pa=Na(!1),Fa=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Il&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ri(e),ni(e,null,n),t}return $r(e,r,t,n),ri(e)}function Ba(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ha=!1;function Ua(){if(Ha){var e=la;if(e!==null)throw e}}function Wa(e,t,n,r){Ha=!1;var i=e.updateQueue;Fa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===ca&&(Ha=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Fa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ga(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ka(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ga(n[e],t)}var qa=L(null),Ja=L(0);function Ya(e,t){e=Ul,ie(Ja,e),ie(qa,t),Ul=e|t.baseLanes}function Xa(){ie(Ja,Ul),ie(qa,qa.current)}function Za(){Ul=Ja.current,R(qa),R(Ja)}var Qa=L(null),$a=null;function eo(e){var t=e.alternate;ie(ao,ao.current&1),ie(Qa,e),$a===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&($a=e)}function to(e){ie(ao,ao.current),ie(Qa,e),$a===null&&($a=e)}function no(e){e.tag===22?(ie(ao,ao.current),ie(Qa,e),$a===null&&($a=e)):ro(e)}function ro(){ie(ao,ao.current),ie(Qa,Qa.current)}function io(e){R(Qa),$a===e&&($a=null),R(ao)}var ao=L(0);function oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||of(n)||sf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=0,G=null,co=null,lo=null,uo=!1,fo=!1,po=!1,mo=0,ho=0,go=null,_o=0;function vo(){throw Error(i(321))}function yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function bo(e,t,n,r,i,a){return so=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?Ls:Rs,po=!1,a=n(r,i),po=!1,fo&&(a=So(t,n,r,i)),xo(e),a}function xo(e){P.H=Is;var t=co!==null&&co.next!==null;if(so=0,lo=co=G=null,uo=!1,ho=0,go=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&Yi(e)&&(tc=!0))}function So(e,t,n,r){G=e;var a=0;do{if(fo&&(go=null),ho=0,fo=!1,25<=a)throw Error(i(301));if(a+=1,lo=co=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=zs,o=t(n,r)}while(fo);return o}function Co(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?Ao(t):t,e=e.useState()[0],(co===null?null:co.memoizedState)!==e&&(G.flags|=1024),t}function wo(){var e=mo!==0;return mo=0,e}function To(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Eo(e){if(uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uo=!1}so=0,lo=co=G=null,fo=!1,ho=mo=0,go=null}function Do(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?G.memoizedState=lo=e:lo=lo.next=e,lo}function Oo(){if(co===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=co.next;var t=lo===null?G.memoizedState:lo.next;if(t!==null)lo=t,co=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));co=e,e={memoizedState:co.memoizedState,baseState:co.baseState,baseQueue:co.baseQueue,queue:co.queue,next:null},lo===null?G.memoizedState=lo=e:lo=lo.next=e}return lo}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var t=ho;return ho+=1,go===null&&(go=[]),e=Ca(go,e,t),t=G,(lo===null?t.memoizedState:lo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?Ls:Rs),e}function jo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ao(e);if(e.$$typeof===C)return Zi(e)}throw Error(i(438,String(e)))}function Mo(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ko(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function No(e,t){return typeof t==`function`?t(e):t}function Po(e){return Fo(Oo(),co,e)}function Fo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(so&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((so&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,Gl|=p;f=u.action,po&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!br(o,e.memoizedState)&&(tc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Io(e){var t=Oo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);br(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Lo(e,t,n){var r=G,a=Oo(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!br((co||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,cs(Bo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,a,n,t),null),Ll===null)throw Error(i(349));o||so&127||Ro(r,t,n)}return n}function Ro(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=ko(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zo(e,t,n,r){t.value=n,t.getSnapshot=r,Vo(t)&&Ho(e)}function Bo(e,t,n){return n(function(){Vo(t)&&Ho(e)})}function Vo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch{return!0}}function Ho(e){var t=ti(e,2);t!==null&&hu(t,e,2)}function Uo(e){var t=Do();if(typeof e==`function`){var n=e;if(e=n(),po){Ie(!0);try{n()}finally{Ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function Wo(e,t,n,r){return e.baseState=n,Fo(e,co,typeof r==`function`?r:No)}function Go(e,t,n,r,a){if(Ns(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ko(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ko(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),qo(e,t,s)}catch(n){Yo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),qo(e,t,a)}catch(n){Yo(e,t,n)}}function qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Jo(e,t,n)},function(n){return Yo(e,t,n)}):Jo(e,t,n)}function Jo(e,t,n){t.status=`fulfilled`,t.value=n,Xo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ko(e,n)))}function Yo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Xo(t),t=t.next;while(t!==r)}e.action=null}function Xo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zo(e,t){return t}function Qo(e,t){if(U){var n=Ll.formState;if(n!==null){a:{var r=G;if(U){if(H){b:{for(var i=H,a=Mi;i.nodeType!==8;){if(!a){i=null;break b}if(i=lf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){H=lf(i.nextSibling),r=i.data===`F!`;break a}}Pi(r)}r=!1}r&&(t=n[0])}}return n=Do(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},n.queue=r,n=As.bind(null,G,r),r.dispatch=n,r=Uo(!1),a=Ms.bind(null,G,!1,r.queue),r=Do(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Go.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function $o(e){return es(Oo(),co,e)}function es(e,t,n){if(t=Fo(e,t,Zo)[0],e=Po(No)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ao(t)}catch(e){throw e===va?ba:e}else r=t;t=Oo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,rs(9,{destroy:void 0},ts.bind(null,i,n),null)),[r,a,e]}function ts(e,t){e.action=t}function ns(e){var t=Oo(),n=co;if(n!==null)return es(t,n,e);Oo(),t=t.memoizedState,n=Oo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=ko(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function is(){return Oo().memoizedState}function as(e,t,n,r){var i=Do();G.flags|=e,i.memoizedState=rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function os(e,t,n,r){var i=Oo();r=r===void 0?null:r;var a=i.memoizedState.inst;co!==null&&r!==null&&yo(r,co.memoizedState.deps)?i.memoizedState=rs(t,a,n,r):(G.flags|=e,i.memoizedState=rs(1|t,a,n,r))}function ss(e,t){as(8390656,8,e,t)}function cs(e,t){os(2048,8,e,t)}function ls(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=ko(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function us(e){var t=Oo().memoizedState;return ls({ref:t,nextImpl:e}),function(){if(Il&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ds(e,t){return os(4,2,e,t)}function fs(e,t){return os(4,4,e,t)}function ps(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ms(e,t,n){n=n==null?null:n.concat([e]),os(4,4,ps.bind(null,t,e),n)}function hs(){}function gs(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _s(e,t){var n=Oo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&yo(t,r[1]))return r[0];if(r=e(),po){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r}function vs(e,t,n){return n===void 0||so&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),G.lanes|=e,Gl|=e,n)}function ys(e,t,n,r){return br(n,t)?n:qa.current===null?!(so&42)||so&1073741824&&!(X&261930)?(tc=!0,e.memoizedState=n):(e=mu(),G.lanes|=e,Gl|=e,t):(e=vs(e,n,r),br(e,t)||(tc=!0),e)}function bs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};P.T=s,Ms(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?js(e,t,fa(c,r),pu(e)):js(e,t,r,pu(e))}catch(n){js(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function xs(){}function Ss(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Cs(e).queue;bs(e,a,t,I,n===null?xs:function(){return ws(e),n(r)})}function Cs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ws(e){var t=Cs(e);t.next===null&&(t=e.alternate.memoizedState),js(e,t.next.queue,{},pu())}function Ts(){return Zi($f)}function Es(){return Oo().memoizedState}function Ds(){return Oo().memoizedState}function Os(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ra(n);var r=za(t,e,n);r!==null&&(hu(r,t,n),Ba(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function ks(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e)?Ps(t,n):(n=ei(e,t,n,r),n!==null&&(hu(n,e,r),Fs(n,t,r)))}function As(e,t,n){js(e,t,n,pu())}function js(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,br(s,o))return $r(e,t,i,0),Ll===null&&Qr(),!1}catch{}if(n=ei(e,t,i,r),n!==null)return hu(n,e,r),Fs(n,t,r),!0}return!1}function Ms(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ns(e)){if(t)throw Error(i(479))}else t=ei(e,n,r,2),t!==null&&hu(t,e,2)}function Ns(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ps(e,t){fo=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var Is={readContext:Zi,use:jo,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useLayoutEffect:vo,useInsertionEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useSyncExternalStore:vo,useId:vo,useHostTransitionStatus:vo,useFormState:vo,useActionState:vo,useOptimistic:vo,useMemoCache:vo,useCacheRefresh:vo};Is.useEffectEvent=vo;var Ls={readContext:Zi,use:jo,useCallback:function(e,t){return Do().memoizedState=[e,t===void 0?null:t],e},useContext:Zi,useEffect:ss,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),as(4194308,4,ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return as(4194308,4,e,t)},useInsertionEffect:function(e,t){as(4,2,e,t)},useMemo:function(e,t){var n=Do();t=t===void 0?null:t;var r=e();if(po){Ie(!0);try{e()}finally{Ie(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Do();if(n!==void 0){var i=n(t);if(po){Ie(!0);try{n(t)}finally{Ie(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ks.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Do();return e={current:e},t.memoizedState=e},useState:function(e){e=Uo(e);var t=e.queue,n=As.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hs,useDeferredValue:function(e,t){return vs(Do(),e,t)},useTransition:function(){var e=Uo(!1);return e=bs.bind(null,G,e.queue,!0,!1),Do().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=Do();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ll===null)throw Error(i(349));X&127||Ro(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ss(Bo.bind(null,r,o,e),[e]),r.flags|=2048,rs(9,{destroy:void 0},zo.bind(null,r,o,n,t),null),n},useId:function(){var e=Do(),t=Ll.identifierPrefix;if(U){var n=Ti,r=wi;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=mo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=_o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:Qo,useActionState:Qo,useOptimistic:function(e){var t=Do();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ms.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:Mo,useCacheRefresh:function(){return Do().memoizedState=Os.bind(null,G)},useEffectEvent:function(e){var t=Do(),n={impl:e};return t.memoizedState=n,function(){if(Il&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Rs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Po,useRef:is,useState:function(){return Po(No)},useDebugValue:hs,useDeferredValue:function(e,t){return ys(Oo(),co.memoizedState,e,t)},useTransition:function(){var e=Po(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:$o,useActionState:$o,useOptimistic:function(e,t){return Wo(Oo(),co,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};Rs.useEffectEvent=us;var zs={readContext:Zi,use:jo,useCallback:gs,useContext:Zi,useEffect:cs,useImperativeHandle:ms,useInsertionEffect:ds,useLayoutEffect:fs,useMemo:_s,useReducer:Io,useRef:is,useState:function(){return Io(No)},useDebugValue:hs,useDeferredValue:function(e,t){var n=Oo();return co===null?vs(n,e,t):ys(n,co.memoizedState,e,t)},useTransition:function(){var e=Io(No)[0],t=Oo().memoizedState;return[typeof e==`boolean`?e:Ao(e),t]},useSyncExternalStore:Lo,useId:Es,useHostTransitionStatus:Ts,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){var n=Oo();return co===null?(n.baseState=e,[e,n.queue.dispatch]):Wo(n,co,e,t)},useMemoCache:Mo,useCacheRefresh:Ds};zs.useEffectEvent=us;function Bs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ra(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=za(e,i,r),t!==null&&(hu(t,e,r),Ba(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ra(n);r.tag=2,t!=null&&(r.callback=t),t=za(e,r,n),t!==null&&(hu(t,e,n),Ba(t,e,n))}};function Hs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Gs(e){Jr(e)}function Ks(e){console.error(e)}function qs(e){Jr(e)}function Js(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ys(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){Js(e,t)},n}function Zs(e){return e=Ra(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ys(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ys(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ji(t,n,a,!0),n=Qa.current,n!==null){switch(n.tag){case 31:case 13:return $a===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(U)return t=Qa.current,t===null?(r!==Ni&&(t=Error(i(423),{cause:r}),Bi(gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=gi(r,n),a=Xs(e.stateNode,r,a),Va(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ni&&(e=Error(i(422),{cause:r}),Bi(gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=gi(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Va(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Va(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Pa(t,null,n,r):W(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Xi(t),r=bo(e,t,n,o,a,i),s=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&s&&Oi(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?xr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Xa():Ya(t,a),no(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Xa(),ro(t)):(ga(t,a.cachePool),Ya(t,a),ro(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Xa(),no(t),e!==null&&Ji(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return W(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,io(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(to(t),(e=H)?(e=af(e,Mi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,V=t,H=null)):e=null,e===null)throw Pi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(to(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||Ji(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=Ll,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ti(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,H=lf(s.nextSibling),V=t,U=!0,ji=null,Mi=!1,e!==null&&Ai(t,e),t=lc(t,r),t.flags|=4096;return t}return e=ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return Xi(t),n=bo(e,t,n,r,void 0,i),r=wo(),e!==null&&!tc?(To(e,t,i),Dc(e,t,i)):(U&&r&&Oi(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return Xi(t),t.updateQueue=null,n=So(t,r,n,i),xo(e),r=wo(),e!==null&&!tc?(To(e,t,a),Dc(e,t,a)):(U&&r&&Oi(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(Xi(t),t.stateNode===null){var a=ii,o=n.contextType;typeof o==`object`&&o&&(a=Zi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Vs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ia(t),o=n.contextType,a.context=typeof o==`object`&&o?Zi(o):ii,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Bs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Vs.enqueueReplaceState(a,a.state,null),Wa(t,r,a,i),Ua(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ws(n,s);a.props=c;var l=a.context,u=n.contextType;o=ii,typeof u==`object`&&u&&(o=Zi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Us(t,a,r,o),Fa=!1;var f=t.memoizedState;a.state=f,Wa(t,r,a,i),Ua(),l=t.memoizedState,s||f!==l||Fa?(typeof d==`function`&&(Bs(t,n,d,r),l=t.memoizedState),(c=Fa||Hs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=Ws(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ii,typeof l==`object`&&l&&(c=Zi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Us(t,a,r,c),Fa=!1,f=t.memoizedState,a.state=f,Wa(t,r,a,i),Ua();var p=t.memoizedState;o!==d||f!==p||Fa||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof s==`function`&&(Bs(t,n,s,r),p=t.memoizedState),(u=Fa||Hs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=W(t,e.child,null,i),t.child=W(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ri(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:_a()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ao.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(U){if(a?eo(t):ro(t),(e=H)?(e=af(e,Mi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ci===null?null:{id:wi,overflow:Ti},retryLane:536870912,hydrationErrors:null},n=pi(e),n.return=t,t.child=n,V=t,H=null)):e=null,e===null)throw Pi(t);return sf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ro(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=di(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(eo(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(eo(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(ro(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=di(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,W(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(ro(t),t.child=e.child,t.flags|=128,t=null);else if(eo(t),sf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Bi({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||Ji(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=Ll,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ti(e,r),hu(s,e,r),ec;of(c)||Du(),t=Cc(e,t,n)}else of(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,H=lf(c.nextSibling),V=t,U=!0,ji=null,Mi=!1,e!==null&&Ai(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(ro(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ci(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=di(c,a,n,null),c.flags|=2):c=ci(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(eo(t),n=e.child,e=n.sibling,n=ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=oi(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return W(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ao.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,ie(ao,o),nc(e,t,r,n),r=U?bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ji(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Yi(e))):!0}function kc(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),Wi(t,ra,e.memoizedState.cache),Ri();break;case 27:case 5:de(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:Wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,to(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(eo(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(eo(t),t.flags|=128,null);eo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Ji(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ao,ao.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Wi(t,ra,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,U&&t.flags&1048576&&Di(t,bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)si(e)?(r=Ws(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=N(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ws(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,La(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Wi(t,ra,r),r!==o.cache&&qi(t,[ra],n,!0),Ua(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=gi(Error(i(424)),t),Bi(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(H=lf(e.firstChild),V=t,U=!0,ji=null,Mi=!0,n=Pa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ri(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=Af(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(n=t.type,e=t.pendingProps,r=Vd(se.current).createElement(n),r[ot]=t,r[st]=e,Fd(r,n,e),yt(r),t.stateNode=r):t.memoizedState=Af(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&U&&(r=t.stateNode=pf(t.type,t.pendingProps,se.current),V=t,Mi=!0,a=H,Qd(t.type)?(uf=a,H=lf(r.firstChild)):H=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=H)&&(r=nf(r,t.type,t.pendingProps,Mi),r===null?a=!1:(t.stateNode=r,V=t,H=lf(r.firstChild),Mi=!1,a=!0)),a||Pi(t)),de(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Wd(a,o)?r=null:s!==null&&Wd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=bo(e,t,Co,null,null,n),$f._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=H)&&(n=rf(n,t.pendingProps,Mi),n===null?e=!1:(t.stateNode=n,V=t,H=null,e=!0)),e||Pi(t)),null;case 13:return bc(e,t,n);case 4:return le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=W(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Wi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Xi(t),a=Zi(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return Xi(t),r=Zi(ra),e===null?(a=ha(),a===null&&(a=Ll,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ia(t),Wi(t,ra,a)):((e.lanes&n)!==0&&(La(e,t),Wa(t,null,null,n),Ua()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Wi(t,ra,r),r!==a.cache&&qi(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Wi(t,ra,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t))if(wu())e.flags|=8192;else throw Ta=xa,ya}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!U)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(ki(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gi(ra),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Li(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(fe(t),n=se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=ae.current,Li(t)?Fi(t,e):(e=pf(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=ae.current,Li(t))Fi(t,o);else{var s=Vd(se.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ot]=t,o[st]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Fd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=se.current,Li(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=V,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Pi(t,!0)}else e=Vd(e).createTextNode(r),e[ot]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Li(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(io(t),t):(io(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ot]=t}else Ri(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(io(t),t):(io(t),null)}return io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return ue(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return Gi(t.type),Ic(t),null;case 19:if(R(ao),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oo(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)li(n,e),n=n.sibling;return ie(ao,ao.current&1|2),U&&Ei(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Te()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=oo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!U)return Ic(t),null}else 2*Te()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Te(),e.sibling=null,n=ao.current,ie(ao,a?n&1|2:n&1),U&&Ei(t,r.treeForkCount),e);case 22:case 23:return io(t),Za(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&R(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gi(ra),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(ki(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(ra),ue(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(io(t),t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(ao),null;case 4:return ue(),null;case 10:return Gi(t.type),null;case 22:case 23:return io(t),Za(),e!==null&&R(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gi(ra),null;case 25:return null;default:return null}}function zc(e,t){switch(ki(t),t.tag){case 3:Gi(ra),ue();break;case 26:case 27:case 5:fe(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&io(t);break;case 13:io(t);break;case 19:R(ao);break;case 10:Gi(t.type);break;case 22:case 23:io(t),Za(),e!==null&&R(ma);break;case 24:Gi(ra)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ka(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Id(r,e.type,n,t),r[st]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Qd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Fd(t,r,n),t[ot]=e,t[st]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,zd=cp,e=Tr(e),Er(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},cp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ws(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:tf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:K(e,n),r&4&&Bc(5,n);break;case 1:if(K(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(K(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ka(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:K(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:K(e,n);break;case 31:K(e,n),r&4&&dl(e,n);break;case 13:K(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),cf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?xl(e,n,(n.subtreeFlags&8772)!=0):K(e,n),$c=i,el=a}break;case 30:break;default:K(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sl=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount==`function`)try{Fe.onCommitFiberUnmount(Pe,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=sl,i=cl;Qd(n.type)&&(sl=n.stateNode,cl=!1),ll(e,t,n),mf(n.stateNode),sl=r,cl=i;break;case 5:el||Gc(n,t);case 6:if(r=sl,i=cl,sl=null,ll(e,t,n),sl=r,cl=i,sl!==null)if(cl)try{(sl.nodeType===9?sl.body:sl.nodeName===`HTML`?sl.ownerDocument.body:sl).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{sl.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:sl!==null&&(cl?(e=sl,$d(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Pp(e)):$d(sl,n.stateNode));break;case 4:r=sl,i=cl,sl=n.stateNode.containerInfo,cl=!0,ll(e,t,n),sl=r,cl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),ll(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ll(e,t,n),el=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pp(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pp(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Qd(c.type)){sl=c.stateNode,cl=!1;break a}break;case 5:sl=c.stateNode,cl=!1;break a;case 3:case 4:sl=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(sl===null)throw Error(i(160));ul(o,s,a),sl=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[pt]||o[ot]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Fd(o,r,n),o[ot]=e,yt(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Fd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ot]=e,yt(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode);else e.stateNode=Lf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Gt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Vf=null,a=gl,gl=_f(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,yl(e));break;case 4:r=gl,gl=_f(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Te()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,hl(t,e),el=d,$c=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?ef(m,!0):ef(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Gt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function K(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),bl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),bl(t);break;case 27:mf(t.stateNode);case 26:case 5:Gc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),Bc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ga(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&dl(i,a);break;case 13:xl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Wc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Kf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=gl;gl=_f(e.stateNode.containerInfo),kl(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,q(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,q(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function q(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Fl={getCacheForType:function(e){var t=Zi(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Zi(ra).controller.signal}},J=typeof WeakMap==`function`?WeakMap:Map,Il=0,Ll=null,Y=null,X=0,Rl=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return Il&2&&X!==0?X&-X:P.T===null?rt():dd()}function mu(){if(Jl===0)if(!(X&536870912)||U){var e=He;He<<=1,!(He&3932160)&&(He=262144),Jl=e}else Jl=536870912;return e=Qa.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Ll&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,X,Jl,!1)),Xe(e,n),(!(Il&2)||e!==Ll)&&(e===Ll&&(!(Il&2)&&(Kl|=n),Wl===4&&yu(e,X,Jl,!1)),rd(e))}function gu(e,t,n){if(Il&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ke(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Te(),10<a)){if(yu(r,t,Jl,!Bl),Ge(r,0,!0)!==0)break a;su=t,r.timeoutHandle=qd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Al(t,a,d);var m=(a&62914560)===a?$l-Te():(a&4194048)===a?eu-Te():0;if(m=Jf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Le(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function bu(){return Il&6?!0:(id(0,!1),!1)}function xu(){if(Y!==null){if(Rl===0)var e=Y.return;else e=Y,Ui=Hi=null,Eo(e),Oa=null,ka=0,e=Y;for(;e!==null;)zc(e.alternate,e),e=e.return;Y=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Ll=e,Y=n=ci(e.current,null),X=t,Rl=0,zl=null,Bl=!1,Vl=Ke(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Le(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,Qr(),n}function Cu(e,t){G=null,P.H=Is,t===va||t===ba?(t=Ea(),Rl=3):t===ya?(t=Ea(),Rl=4):Rl=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,Y===null&&(Wl=1,Js(e,gi(t,e.current)))}function wu(){var e=Qa.current;return e===null?!0:(X&4194048)===X?$a===null:(X&62914560)===X||X&536870912?e===$a:!1}function Tu(){var e=P.H;return P.H=Is,e===null?Is:e}function Eu(){var e=P.A;return P.A=Fl,e}function Du(){Wl=4,Bl||(X&4194048)!==X&&Qa.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Ll===null||yu(Ll,X,Jl,!1)}function Ou(e,t,n){var r=Il;Il|=2;var i=Tu(),a=Eu();(Ll!==e||X!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(Rl!==0&&Y!==null){var s=Y,c=zl;switch(Rl){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:Qa.current===null&&(t=!0);var l=Rl;if(Rl=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=Rl,Rl=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ui=Hi=null,Il=r,P.H=i,P.A=a,Y===null&&(Ll=null,X=0,Qr()),o}function ku(){for(;Y!==null;)Mu(Y)}function Au(e,t){var n=Il;Il|=2;var r=Tu(),a=Eu();Ll!==e||X!==t?(nu=null,tu=Te()+500,Su(e,t)):Vl=Ke(e,t);a:do try{if(Rl!==0&&Y!==null){t=Y;var o=zl;b:switch(Rl){case 1:Rl=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Sa(o)){Rl=0,zl=null,Nu(t);break}t=function(){Rl!==2&&Rl!==9||Ll!==e||(Rl=7),rd(e)},o.then(t,t);break a;case 3:Rl=7;break a;case 4:Rl=5;break a;case 7:Sa(o)?(Rl=0,zl=null,Nu(t)):(Rl=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Gf(s):c.stateNode.complete){Rl=0,zl=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,Fu(u))}break b}}Rl=0,zl=null,Pu(e,t,o,5);break;case 6:Rl=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ui=Hi=null,P.H=r,P.A=a,Il=n,Y===null?(Ll=null,X=0,Qr(),Wl):0}function ju(){for(;Y!==null&&!Ce();)Mu(Y)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):Y=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:Eo(t);default:zc(n,t),t=Y=li(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):Y=t}function Pu(e,t,n,r){Ui=Hi=null,Eo(t),Oa=null,ka=0;var i=t.return;try{if($s(e,i,t,n,X)){Wl=1,Js(e,gi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;Wl=1,Js(e,gi(n,e.current)),Y=null;return}t.flags&32768?(U||r===1?e=!0:Vl||X&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);Wl=6,Y=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(Il&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Zr,Ze(e,n,o,s,c,l),e===Ll&&(Y=Ll=null,X=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ke,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=P.T,P.T=null,a=F.p,F.p=2,s=Il,Il|=4;try{il(e,t,n)}finally{Il=s,F.p=a,P.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Il;Il|=4;try{_l(t,e);var a=Bd,o=Tr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(c!==null&&Er(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Cr(s,h),v=Cr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}cp=!!zd,Bd=zd=null}finally{Il=i,F.p=r,P.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Il;Il|=4;try{al(e,t.alternate,t)}finally{Il=i,F.p=r,P.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,we();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),nt(n),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot==`function`)try{Fe.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=P.T,i=F.p,F.p=2,P.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{P.T=t,F.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=nt(su),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,Il&6)throw Error(i(331));var c=Il;if(Il|=4,Nl(o.current),Tl(o,o.current,s,n),Il=c,id(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot==`function`)try{Fe.onPostCommitFiberRoot(Pe,o)}catch{}return!0}finally{F.p=a,P.T=r,Vu(e,t)}}function Wu(e,t,n){t=gi(n,t),t=Xs(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Xe(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=gi(n,e),n=Zs(2),r=za(t,n,2),r!==null&&(Qs(n,r,t,e),Xe(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ll===e&&(X&n)===n&&(Wl===4||Wl===3&&(X&62914560)===X&&300>Te()-$l?!(Il&2)&&Su(e,0):ql|=n,Yl===X&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Je()),e=ti(e,t),e!==null&&(Xe(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return xe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Le(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=X,a=Ge(r,r===Ll?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ke(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Kd()&&(e=nd);for(var t=Te(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Le(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ll,n=X,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Rl===2||Rl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Se(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Se(r),nt(n)){case 2:case 8:n=Oe;break;case 32:n=ke;break;case 268435456:n=je;break;default:n=ke}return r=cd.bind(null,e),n=xe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Se(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=X;return r=Ge(e,e===Ll?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Te()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Xd(function(){Il&6?xe(De,ad):od()})}function dd(){if(nd===0){var e=ca;e===0&&(e=Ve,Ve<<=1,!(Ve&261888)&&(Ve=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[st]||null).action),o=r.submitter;o&&(t=(t=o[st]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ss(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ss(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Kr.length;hd++){var gd=Kr[hd];qr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}qr(Rr,`onAnimationEnd`),qr(zr,`onAnimationIteration`),qr(Br,`onAnimationStart`),qr(`dblclick`,`onDoubleClick`),qr(`focusin`,`onFocus`),qr(`focusout`,`onBlur`),qr(Vr,`onTransitionRun`),qr(Hr,`onTransitionStart`),qr(Ur,`onTransitionCancel`),qr(Wr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),St(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),St(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),St(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),St(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),St(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Jr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[lt];n===void 0&&(n=t[lt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,bt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(hp(t)){case 2:var i=lp;break;case 8:i=up;break;default:i=dp}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ht(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),s=[];a:{var c=Gr.get(e);if(c!==void 0){var l=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:l=Ln;break;case`focusin`:u=`focus`,l=An;break;case`focusout`:u=`blur`,l=An;break;case`beforeblur`:case`afterblur`:l=An;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=On;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=zn;break;case Rr:case zr:case Br:l=jn;break;case Wr:l=Bn;break;case`scroll`:case`scrollend`:l=Cn;break;case`wheel`:l=Vn;break;case`copy`:case`cut`:case`paste`:l=Mn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Rn;break;case`toggle`:case`beforetoggle`:l=Hn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(ht(u)||u[ct]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?ht(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=On,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Rn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:_t(l),h=u==null?c:_t(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,ht(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?_t(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=cr;else if(nr(c))if(lr)v=vr;else{v=gr;var y=hr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Yt(r.elementType)&&(v=cr):v=_r;if(v&&=v(e,r)){rr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Vt(c,`number`,c.value)}switch(y=r?_t(r):window,e){case`focusin`:(nr(y)||y.contentEditable===`true`)&&(Or=y,kr=r,Ar=null);break;case`focusout`:Ar=kr=Or=null;break;case`mousedown`:jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:jr=!1,Mr(s,n,i);break;case`selectionchange`:if(Dr)break;case`keydown`:case`keyup`:Mr(s,n,i)}var b;if(Wn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Qn?Xn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(qn&&n.locale!==`ko`&&(Qn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Qn&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,Qn=!0)),y=Ed(r,x),0<y.length&&(x=new z(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Zn(n),b!==null&&(x.data=b)))),(b=Kn?$n(e,n):er(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new z(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function Nd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,o);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Nd(e,t,`name`,a.name,a,null),Nd(e,t,`formEncType`,a.formEncType,a,null),Nd(e,t,`formMethod`,a.formMethod,a,null),Nd(e,t,`formTarget`,a.formTarget,a,null)):(Nd(e,t,`encType`,a.encType,a,null),Nd(e,t,`method`,a.method,a,null),Nd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Pd(e,t,n,r,a,o){switch(n){case`style`:Jt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!xt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[st]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Fd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,o,s,n,null)}}a&&Nd(e,t,`srcSet`,n.srcSet,n,null),r&&Nd(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Nd(e,t,r,d,n,null)}}Bt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Nd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Nd(e,t,s,c,n,null)}Wt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Nd(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Nd(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Nd(e,t,c,r,n,null))}function Id(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Nd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Nd(e,t,p,m,r,f)}}zt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Nd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Nd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Nd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Nd(e,t,s,a,r,o)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Nd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Nd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Nd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Nd(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Nd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Nd(e,t,f,p,r,m)}function Ld(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Rd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Ld(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Ld(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var zd=null,Bd=null;function Vd(e){return e.nodeType===9?e:e.ownerDocument}function Hd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Ud(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Wd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gd=null;function Kd(){var e=window.event;return e&&e.type===`popstate`?e===Gd?!1:(Gd=e,!0):(Gd=null,!1)}var qd=typeof setTimeout==`function`?setTimeout:void 0,Jd=typeof clearTimeout==`function`?clearTimeout:void 0,Yd=typeof Promise==`function`?Promise:void 0,Xd=typeof queueMicrotask==`function`?queueMicrotask:Yd===void 0?qd:function(e){return Yd.resolve(null).then(e).catch(Zd)};function Zd(e){setTimeout(function(){throw e})}function Qd(e){return e===`head`}function $d(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Pp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)mf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,mf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&mf(e.ownerDocument.body);n=i}while(n);Pp(t)}function ef(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function tf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:tf(n),mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function nf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lf(e.nextSibling),e===null)break}return null}function rf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lf(e.nextSibling),e===null))return null;return e}function af(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lf(e.nextSibling),e===null))return null;return e}function of(e){return e.data===`$?`||e.data===`$~`}function sf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var uf=null;function df(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pf(e,t,n){switch(t=Vd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function mf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mt(e)}var hf=new Map,gf=new Set;function _f(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vf=F.d;F.d={f:yf,r:bf,D:Cf,C:wf,L:Tf,m:Ef,X:Of,S:Df,M:kf};function yf(){var e=vf.f(),t=bu();return e||t}function bf(e){var t=gt(e);t!==null&&t.tag===5&&t.type===`form`?ws(t):vf.r(e)}var xf=typeof document>`u`?null:document;function Sf(e,t,n){var r=xf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),gf.has(i)||(gf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Fd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Cf(e){vf.D(e),Sf(`dns-prefetch`,e,null)}function wf(e,t){vf.C(e,t),Sf(`preconnect`,e,t)}function Tf(e,t,n){vf.L(e,t,n);var r=xf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=jf(e);break;case`script`:a=Ff(e)}hf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),hf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Mf(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Fd(t,`link`,e),yt(t),r.head.appendChild(t)))}}function Ef(e,t){vf.m(e,t);var n=xf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!hf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),hf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Fd(r,`link`,e),yt(r),n.head.appendChild(r)}}}function Df(e,t,n){vf.S(e,t,n);var r=xf;if(r&&e){var i=vt(r).hoistableStyles,a=jf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Mf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=hf.get(a))&&zf(e,n);var c=o=r.createElement(`link`);yt(c),Fd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Of(e,t){vf.X(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t){vf.M(e,t);var n=xf;if(n&&e){var r=vt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=hf.get(i))&&Bf(e,t),a=n.createElement(`script`),yt(a),Fd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t,n,r){var a=(a=se.current)?_f(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=jf(n.href),n=vt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=jf(n.href);var o=vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Mf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),hf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hf.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=vt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function jf(e){return`href="`+Rt(e)+`"`}function Mf(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Fd(t,`link`,n),yt(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Rt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,yt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),yt(r),Fd(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=jf(n.href);var o=e.querySelector(Mf(a));if(o)return t.state.loading|=4,t.instance=o,yt(o),o;r=Nf(n),(a=hf.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),yt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Fd(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,yt(a),a):(r=n,(a=hf.get(o))&&(r=h({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),yt(a),Fd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[pt]||a[ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=jf(r.href),a=t.querySelector(Mf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,yt(a);return}a=t.ownerDocument||t,r=Nf(r),(i=hf.get(i))&&zf(r,i),a=a.createElement(`link`),yt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Fd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Rd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach(Qf,e),Xf=null,Yf.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $f={$$typeof:C,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function ep(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function tp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ep(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=oi(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ia(a),e}function np(e){return e?(e=ii,e):ii}function rp(e,t,n,r,i,a){i=np(i),r.context===null?r.context=i:r.pendingContext=i,r=Ra(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=za(e,r,t),n!==null&&(hu(n,e,t),Ba(n,e,t))}function ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ap(e,t){ip(e,t),(e=e.alternate)&&ip(e,t)}function op(e){if(e.tag===13||e.tag===31){var t=ti(e,67108864);t!==null&&hu(t,e,67108864),ap(e,67108864)}}function sp(e){if(e.tag===13||e.tag===31){var t=pu();t=tt(t);var n=ti(e,t);n!==null&&hu(n,e,t),ap(e,t)}}var cp=!0;function lp(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,dp(e,t,n,r)}finally{F.p=a,P.T=i}}function up(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,dp(e,t,n,r)}finally{F.p=a,P.T=i}}function dp(e,t,n,r){if(cp){var i=fp(r);if(i===null)wd(e,t,r,pp,n),wp(e,r);else if(Ep(i,e,t,n,r))r.stopPropagation();else if(wp(e,r),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var a=gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Le(o);s.entanglements[1]|=c,o&=~c}rd(a),!(Il&6)&&(tu=Te()+500,id(0,!1))}}break;case 31:case 13:s=ti(a,2),s!==null&&hu(s,a,2),bu(),ap(a,2)}if(a=fp(r),a===null&&wd(e,t,r,pp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function fp(e){return e=tn(e),mp(e)}var pp=null;function mp(e){if(pp=null,e=ht(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pp=e,null}function hp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ee()){case De:return 2;case Oe:return 8;case ke:case Ae:return 32;case je:return 268435456;default:return 32}default:return 32}}var gp=!1,_p=null,vp=null,yp=null,bp=new Map,xp=new Map,Sp=[],Cp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function wp(e,t){switch(e){case`focusin`:case`focusout`:_p=null;break;case`dragenter`:case`dragleave`:vp=null;break;case`mouseover`:case`mouseout`:yp=null;break;case`pointerover`:case`pointerout`:bp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:xp.delete(t.pointerId)}}function Tp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gt(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,n,r,i){switch(t){case`focusin`:return _p=Tp(_p,e,t,n,r,i),!0;case`dragenter`:return vp=Tp(vp,e,t,n,r,i),!0;case`mouseover`:return yp=Tp(yp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return bp.set(a,Tp(bp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,xp.set(a,Tp(xp.get(a)||null,e,t,n,r,i)),!0}return!1}function Dp(e){var t=ht(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){sp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Op(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=gt(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function kp(e,t,n){Op(e)&&n.delete(t)}function Ap(){gp=!1,_p!==null&&Op(_p)&&(_p=null),vp!==null&&Op(vp)&&(vp=null),yp!==null&&Op(yp)&&(yp=null),bp.forEach(kp),xp.forEach(kp)}function jp(e,n){e.blockedOn===n&&(e.blockedOn=null,gp||(gp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ap)))}var Mp=null;function Np(e){Mp!==e&&(Mp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Mp===e&&(Mp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(mp(r||n)===null)continue;break}var a=gt(n);a!==null&&(e.splice(t,3),t-=3,Ss(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Pp(e){function t(t){return jp(t,e)}_p!==null&&jp(_p,e),vp!==null&&jp(vp,e),yp!==null&&jp(yp,e),bp.forEach(t),xp.forEach(t);for(var n=0;n<Sp.length;n++){var r=Sp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Sp.length&&(n=Sp[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Sp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[st]||null;if(typeof a==`function`)o||Np(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[st]||null)s=o.formAction;else if(mp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Np(n)}}}function Fp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Ip(e){this._internalRoot=e}Lp.prototype.render=Ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;rp(n,pu(),e,t,null,null)},Lp.prototype.unmount=Ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),bu(),t[ct]=null}};function Lp(e){this._internalRoot=e}Lp.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sp.length&&t!==0&&t<Sp[n].priority;n++);Sp.splice(n,0,e),n===0&&Dp(e)}};var Rp=n.version;if(Rp!==`19.2.5`)throw Error(i(527,Rp,`19.2.5`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Bp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bp.isDisabled&&Bp.supportsFiber)try{Pe=Bp.inject(zp),Fe=Bp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Gs,s=Ks,c=qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,r,null,o,s,c,Fp),e[ct]=t.current,Sd(e),new Ip(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};function b(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||=Array.prototype.slice.call(t,0,r),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var x={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},S=`-ms-`,C=`-moz-`,w=`-webkit-`,T=`comm`,E=`rule`,D=`decl`,O=`@import`,k=`@namespace`,A=`@keyframes`,j=`@layer`,M=Math.abs,ee=String.fromCharCode,N=Object.assign;function te(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function P(e){return e.trim()}function F(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function ne(e,t,n){return e.indexOf(t,n)}function re(e,t){return e.charCodeAt(t)|0}function L(e,t,n){return e.slice(t,n)}function R(e){return e.length}function ie(e){return e.length}function ae(e,t){return t.push(e),e}function oe(e,t){return e.map(t).join(``)}function se(e,t){return e.filter(function(e){return!F(e,t)})}var ce=1,le=1,ue=0,de=0,fe=0,pe=``;function me(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ce,column:le,length:o,return:``,siblings:s}}function he(e,t){return N(me(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function ge(e){for(;e.root;)e=he(e.root,{children:[e]});ae(e,e.siblings)}function _e(){return fe}function ve(){return fe=de>0?re(pe,--de):0,le--,fe===10&&(le=1,ce--),fe}function ye(){return fe=de<ue?re(pe,de++):0,le++,fe===10&&(le=1,ce++),fe}function be(){return re(pe,de)}function xe(){return de}function Se(e,t){return L(pe,e,t)}function Ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function we(e){return ce=le=1,ue=R(pe=e),de=0,[]}function Te(e){return pe=``,e}function Ee(e){return P(Se(de-1,ke(e===91?e+2:e===40?e+1:e)))}function De(e){for(;(fe=be())&&fe<33;)ye();return Ce(e)>2||Ce(fe)>3?``:` `}function Oe(e,t){for(;--t&&ye()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Se(e,xe()+(t<6&&be()==32&&ye()==32))}function ke(e){for(;ye();)switch(fe){case e:return de;case 34:case 39:e!==34&&e!==39&&ke(fe);break;case 40:e===41&&ke(e);break;case 92:ye();break}return de}function Ae(e,t){for(;ye()&&e+fe!==57&&!(e+fe===84&&be()===47););return`/*`+Se(t,de-1)+`*`+ee(e===47?e:ye())}function je(e){for(;!Ce(be());)ye();return Se(e,de)}function Me(e){return Te(Ne(``,null,null,null,[``],e=we(e),0,[0],e))}function Ne(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ye()){case 40:if(m!=108&&re(C,d-1)==58){ne(C+=I(Ee(v),`&`,`&\f`),`&\f`,M(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ee(v);break;case 9:case 10:case 13:case 32:C+=De(m);break;case 92:C+=Oe(xe()-1,7);continue;case 47:switch(be()){case 42:case 47:ae(Fe(Ae(ye(),xe()),t,n,c),c),(Ce(m||1)==5||Ce(be()||1)==5)&&R(C)&&L(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=R(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=I(C,/\f/g,``)),p>0&&(R(C)-d||h===0&&m===47)&&ae(p>32?Ie(C+`;`,r,n,d-1,c):Ie(I(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ae(S=Pe(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Ne(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(re(C,3)===110)break;case 108:if(re(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ne(e,S,S,r&&ae(Pe(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ne(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+R(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ve()==125)continue}switch(C+=ee(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(R(C)-1)*_,_=1;break;case 64:be()===45&&(C+=Ee(ye())),f=be(),u=d=R(y=C+=je(xe())),v++;break;case 45:m===45&&R(C)==2&&(h=0)}}return a}function Pe(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ie(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=L(e,f+1,f=M(g=o[h])),b=e;v<m;++v)(b=P(g>0?p[v]+` `+y:I(y,/&\f/g,p[v])))&&(c[_++]=b);return me(e,t,n,i===0?E:s,c,l,u,d)}function Fe(e,t,n,r){return me(e,t,n,T,ee(_e()),L(e,2,-2),0,r)}function Ie(e,t,n,r,i){return me(e,t,n,D,L(e,0,r),L(e,r+1,-1),r,i)}function Le(e,t,n){switch(te(e,t)){case 5103:return w+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return w+e+e;case 4855:return w+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return C+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+C+e+S+e+e;case 5936:switch(re(e,t+11)){case 114:return w+e+S+I(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return w+e+S+I(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return w+e+S+I(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return w+e+S+e+e;case 6165:return w+e+S+`flex-`+e+e;case 5187:return w+e+I(e,/(\w+).+(:[^]+)/,w+`box-$1$2`+S+`flex-$1$2`)+e;case 5443:return w+e+S+`flex-item-`+I(e,/flex-|-self/g,``)+(F(e,/flex-|baseline/)?``:S+`grid-row-`+I(e,/flex-|-self/g,``))+e;case 4675:return w+e+S+`flex-line-pack`+I(e,/align-content|flex-|-self/g,``)+e;case 5548:return w+e+S+I(e,`shrink`,`negative`)+e;case 5292:return w+e+S+I(e,`basis`,`preferred-size`)+e;case 6060:return w+`box-`+I(e,`-grow`,``)+w+e+S+I(e,`grow`,`positive`)+e;case 4554:return w+I(e,/([^-])(transform)/g,`$1`+w+`$2`)+e;case 6187:return I(I(I(e,/(zoom-|grab)/,w+`$1`),/(image-set)/,w+`$1`),e,``)+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,w+`box-pack:$3`+S+`flex-pack:$3`),/space-between/,`justify`)+w+e+e;case 4200:if(!F(e,/flex-|baseline/))return S+`grid-column-align`+L(e,t)+e;break;case 2592:case 3360:return S+I(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,F(e.props,/grid-\w+-end/)})?~ne(e+(n=n[t].value),`span`,0)?e:S+I(e,`-start`,``)+e+S+`grid-row-span:`+(~ne(n,`span`,0)?F(n,/\d+/):F(n,/\d+/)-+F(e,/\d+/))+`;`:S+I(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return F(e.props,/grid-\w+-start/)})?e:S+I(I(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,w+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,`$1`+w+`$2-$3$1`+C+(re(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ne(e,`stretch`,0)?Le(I(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return S+n+`:`+r+s+(i?S+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(re(e,t+6)===121)return I(e,`:`,`:`+w)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+w+(re(e,14)===45?`inline-`:``)+`box$3$1`+w+`$2$3$1`+S+`$2box$3`)+e;case 100:return I(e,`:`,`:`+S)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,`scroll-`,`scroll-snap-`)+e}return e}function Re(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function ze(e,t,n,r){switch(e.type){case j:if(e.children.length)break;case O:case k:case D:return e.return=e.return||e.value;case T:return``;case A:return e.return=e.value+`{`+Re(e.children,r)+`}`;case E:if(!R(e.value=e.props.join(`,`)))return``}return R(n=Re(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Be(e){var t=ie(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ve(e){return function(t){t.root||(t=t.return)&&e(t)}}function He(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=Le(e.value,e.length,n);return;case A:return Re([he(e,{value:I(e.value,`@`,`@`+w)})],r);case E:if(e.length)return oe(n=e.props,function(t){switch(F(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:ge(he(e,{props:[I(t,/:(read-\w+)/,`:`+C+`$1`)]})),ge(he(e,{props:[t]})),N(e,{props:se(n,r)});break;case`::placeholder`:ge(he(e,{props:[I(t,/:(plac\w+)/,`:`+w+`input-$1`)]})),ge(he(e,{props:[I(t,/:(plac\w+)/,`:`+C+`$1`)]})),ge(he(e,{props:[I(t,/:(plac\w+)/,S+`input-$1`)]})),ge(he(e,{props:[t]})),N(e,{props:se(n,r)});break}return``})}}var Ue=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,We=`active`,Ge=`data-styled-version`,Ke=`6.3.12`,qe=`/*!sc*/
`,Je=typeof window<`u`&&typeof document<`u`,Ye=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<`u`&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY),Xe={};function Ze(e){var t=[...arguments].slice(1);return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Qe=new Map,$e=new Map,et=1,tt=function(e){if(Qe.has(e))return Qe.get(e);for(;$e.has(et);)et++;var t=et++;return Qe.set(e,t),$e.set(t,e),t},nt=function(e,t){et=t+1,Qe.set(e,t),$e.set(t,e)},rt=Object.freeze([]),it=Object.freeze({});function at(e,t,n){return n===void 0&&(n=it),e.theme!==n.theme&&e.theme||t||n.theme}var ot=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`)),st=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ct=/(^-|-$)/g;function lt(e){return e.replace(st,`-`).replace(ct,``)}var ut=/(a)(d)/gi,dt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ft(e){var t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=dt(t%52)+n;return(dt(t%52)+n).replace(ut,`$1-$2`)}var pt,mt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ht=function(e){return mt(5381,e)};function gt(e){return ft(ht(e)>>>0)}function _t(e){return e.displayName||e.name||`Component`}function vt(e){return typeof e==`string`&&!0}var yt=typeof Symbol==`function`&&Symbol.for,bt=yt?Symbol.for(`react.memo`):60115,xt=yt?Symbol.for(`react.forward_ref`):60112,St={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ct={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tt=((pt={})[xt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pt[bt]=wt,pt);function Et(e){return(`type`in(t=e)&&t.type.$$typeof)===bt?wt:`$$typeof`in e?Tt[e.$$typeof]:St;var t}var Dt=Object.defineProperty,Ot=Object.getOwnPropertyNames,kt=Object.getOwnPropertySymbols,At=Object.getOwnPropertyDescriptor,jt=Object.getPrototypeOf,Mt=Object.prototype;function Nt(e,t,n){if(typeof t!=`string`){if(Mt){var r=jt(t);r&&r!==Mt&&Nt(e,r,n)}var i=Ot(t);kt&&(i=i.concat(kt(t)));for(var a=Et(e),o=Et(t),s=0;s<i.length;++s){var c=i[s];if(!(c in Ct||n&&n[c]||o&&c in o||a&&c in a)){var l=At(t,c);try{Dt(e,c,l)}catch{}}}}return e}function Pt(e){return typeof e==`function`}function Ft(e){return typeof e==`object`&&`styledComponentId`in e}function It(e,t){return e&&t?`${e} ${t}`:e||t||``}function Lt(e,t){return e.join(t||``)}function Rt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function zt(e,t,n){if(n===void 0&&(n=!1),!n&&!Rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=zt(e[r],t[r]);else if(Rt(t))for(var r in t)e[r]=zt(e[r],t[r]);return e}function Bt(e,t){Object.defineProperty(e,`toString`,{value:t})}var Vt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Ze(16,`${e}`);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=(a=0,t.length);a<c;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+qe;return t},e}(),Ht=`style[${Ue}][${Ge}="${Ke}"]`,Ut=RegExp(`^${Ue}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Wt=function(e){return typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11},Gt=function(e){if(!e)return document;if(Wt(e))return e;if(`getRootNode`in e){var t=e.getRootNode();if(Wt(t))return t}return document},Kt=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},qt=function(e,t){for(var n=(t.textContent??``).split(qe),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(Ut);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(nt(l,c),Kt(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Jt=function(e){for(var t=Gt(e.options.target).querySelectorAll(Ht),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ue)!==We&&(qt(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Yt(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null}var Xt=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){var t=Array.from(e.querySelectorAll(`style[${Ue}]`));return t[t.length-1]}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(Ue,We),r.setAttribute(Ge,Ke);var o=Yt();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},Zt=function(){function e(e){this.element=Xt(e),this.element.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=e.getRootNode().styleSheets??document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``},e}(),Qt=function(){function e(e){this.element=Xt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),$t=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),en=Je,tn={isServer:!Je,useCSSOMInjection:!Ye},nn=function(){function e(e,t,n){e===void 0&&(e=it),t===void 0&&(t={});var r=this;this.options=y(y({},tn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Je&&en&&(en=!1,Jt(this)),Bt(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=function(n){var i=function(e){return $e.get(e)}(n);if(i===void 0)return`continue`;var a=e.names.get(i);if(a===void 0||!a.size)return`continue`;var o=t.getGroup(n);if(o.length===0)return`continue`;var s=Ue+`.g`+n+`[id="`+i+`"]`,c=``;a.forEach(function(e){e.length>0&&(c+=e+`,`)}),r+=o+s+`{content:"`+c+`"}`+qe},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return tt(e)},e.prototype.rehydrate=function(){!this.server&&Je&&Jt(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(y(y({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&Je&&t.target!==this.options.target&&Gt(this.options.target)!==Gt(t.target)&&Jt(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new $t(n):t?new Zt(n):new Qt(n)}(this.options),new Vt(e));var e},e.prototype.hasNameForId=function(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n},e.prototype.registerName=function(e,t){tt(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(tt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(tt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}();function rn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in x||e.startsWith(`--`)?String(t).trim():`${t}px`}var an=function(e){return e>=`A`&&e<=`Z`};function on(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];if(n===1&&r===`-`&&e[0]===`-`)return e;an(r)?t+=`-`+r.toLowerCase():t+=r}return t.startsWith(`ms-`)?`-`+t:t}var sn=Symbol.for(`sc-keyframes`);function cn(e){return typeof e==`object`&&!!e&&sn in e}var ln=function(e){return e==null||!1===e||e===``},un=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!ln(r)&&(Array.isArray(r)&&r.isCss||Pt(r)?t.push(`${on(n)}:`,r,`;`):Rt(r)?t.push.apply(t,b(b([`${n} {`],un(r),!1),[`}`],!1)):t.push(`${on(n)}: ${rn(n,r)};`))}return t};function dn(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e==`string`)return e&&i.push(e),i;if(ln(e))return i;if(Ft(e))return i.push(`.${e.styledComponentId}`),i;if(Pt(e))return!Pt(a=e)||a.prototype&&a.prototype.isReactComponent||!t?(i.push(e),i):dn(e(t),t,n,r,i);var a;if(cn(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Rt(e)){for(var o=un(e),s=0;s<o.length;s++)i.push(o[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)dn(e[s],t,n,r,i);return i}function fn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pt(n)&&!Ft(n))return!1}return!0}var pn=ht(Ke),mn=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&fn(e),this.componentId=t,this.baseHash=mt(pn,t),this.baseStyle=n,nn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:``;if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=It(r,this.staticRulesId);else{var i=Lt(dn(this.rules,e,t,n)),a=ft(mt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,`.${a}`,void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=It(r,a),this.staticRulesId=a}else{for(var s=mt(this.baseHash,n.hash),c=``,l=0;l<this.rules.length;l++){var u=this.rules[l];if(typeof u==`string`)c+=u;else if(u){var d=Lt(dn(u,e,t,n));s=mt(mt(s,String(l)),d),c+=d}}if(c){var f=ft(s>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(c,`.${f}`,void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=It(r,f)}}return{className:r,css:typeof window>`u`?t.getTag().getGroup(tt(this.componentId)):``}},e}(),hn=/&/g,gn=47,_n=42;function vn(e){if(e.indexOf(`}`)===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,a=0;a<t;a++){var o=e.charCodeAt(a);if(r!==0||i||o!==gn||e.charCodeAt(a+1)!==_n)if(i)o===_n&&e.charCodeAt(a+1)===gn&&(i=!1,a++);else if(o!==34&&o!==39||a!==0&&e.charCodeAt(a-1)===92){if(r===0){if(o===123)n++;else if(o===125&&--n<0)return!0}}else r===0?r=o:r===o&&(r=0);else i=!0,a++}return n!==0||r!==0}function yn(e,t){return e.map(function(e){return e.type===`rule`&&(e.value=`${t} ${e.value}`,e.value=e.value.replaceAll(`,`,`,${t} `),e.props=e.props.map(function(e){return`${t} ${e}`})),Array.isArray(e.children)&&e.type!==`@keyframes`&&(e.children=yn(e.children,t)),e})}function bn(e){var t,n,r,i=e===void 0?it:e,a=i.options,o=a===void 0?it:a,s=i.plugins,c=s===void 0?rt:s,l=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,``).length>0?`.${t}`:e},u=c.slice();u.push(function(e){e.type===`rule`&&e.value.includes(`&`)&&(r||=RegExp(`\\${n}\\b`,`g`),e.props[0]=e.props[0].replace(hn,n).replace(r,l))}),o.prefix&&u.push(He),u.push(ze);var d=[],f=Be(u.concat(Ve(function(e){return d.push(e)}))),p=function(e,i,a,s){i===void 0&&(i=``),a===void 0&&(a=``),s===void 0&&(s=`&`),t=s,n=i,r=void 0;var c=function(e){if(!vn(e))return e;for(var t=e.length,n=``,r=0,i=0,a=0,o=!1,s=0;s<t;s++){var c=e.charCodeAt(s);if(a!==0||o||c!==gn||e.charCodeAt(s+1)!==_n)if(o)c===_n&&e.charCodeAt(s+1)===gn&&(o=!1,s++);else if(c!==34&&c!==39||s!==0&&e.charCodeAt(s-1)===92){if(a===0)if(c===123)i++;else if(c===125){if(--i<0){for(var l=s+1;l<t;){var u=e.charCodeAt(l);if(u===59||u===10)break;l++}l<t&&e.charCodeAt(l)===59&&l++,i=0,s=l-1,r=l;continue}i===0&&(n+=e.substring(r,s+1),r=s+1)}else c===59&&i===0&&(n+=e.substring(r,s+1),r=s+1)}else a===0?a=c:a===c&&(a=0);else o=!0,s++}if(r<t){var d=e.substring(r);vn(d)||(n+=d)}return n}(function(e){if(e.indexOf(`//`)===-1)return e;for(var t=e.length,n=[],r=0,i=0,a=0,o=0;i<t;){var s=e.charCodeAt(i);if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92)if(a===0)if(s===gn&&i+1<t&&e.charCodeAt(i+1)===_n){for(i+=2;i+1<t&&(e.charCodeAt(i)!==_n||e.charCodeAt(i+1)!==gn);)i++;i+=2}else if(s===40&&i>=3&&(32|e.charCodeAt(i-1))==108&&(32|e.charCodeAt(i-2))==114&&(32|e.charCodeAt(i-3))==117)o=1,i++;else if(o>0)s===41?o--:s===40&&o++,i++;else if(s===_n&&i+1<t&&e.charCodeAt(i+1)===gn)i>r&&n.push(e.substring(r,i)),r=i+=2;else if(s===gn&&i+1<t&&e.charCodeAt(i+1)===gn){for(i>r&&n.push(e.substring(r,i));i<t&&e.charCodeAt(i)!==10;)i++;r=i}else i++;else i++;else a===0?a=s:a===s&&(a=0),i++}return r===0?e:(r<t&&n.push(e.substring(r)),n.join(``))}(e)),l=Me(a||i?`${a} ${i} { ${c} }`:c);return o.namespace&&(l=yn(l,o.namespace)),d=[],Re(l,f),d};return p.hash=c.length?c.reduce(function(e,t){return t.name||Ze(15),mt(e,t.name)},5381).toString():``,p}var xn=new nn,Sn=bn(),Cn=_.createContext({shouldForwardProp:void 0,styleSheet:xn,stylis:Sn});Cn.Consumer;var wn=_.createContext(void 0);function Tn(){return _.useContext(Cn)}function En(e){if(!_.useMemo)return e.children;var t=Tn().styleSheet,n=_.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=_.useMemo(function(){return bn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),i=_.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return _.createElement(Cn.Provider,{value:i},_.createElement(wn.Provider,{value:r},e.children))}var Dn=_.createContext(void 0);Dn.Consumer;function On(e){var t=_.useContext(Dn),n=_.useMemo(function(){return function(e,t){if(!e)throw Ze(14);if(Pt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Ze(8);return t?y(y({},t),e):e}(e.theme,t)},[e.theme,t]);return e.children?_.createElement(Dn.Provider,{value:n},e.children):null}var kn={};function An(e,t,n){var r=Ft(e),i=e,a=!vt(e),o=t.attrs,s=o===void 0?rt:o,c=t.componentId,l=c===void 0?function(e,t){var n=typeof e==`string`?lt(e):`sc`;kn[n]=(kn[n]||0)+1;var r=`${n}-${gt(Ke+n+kn[n])}`;return t?`${t}-${r}`:r}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(e){return vt(e)?`styled.${e}`:`Styled(${_t(e)})`}(e):u,f=t.displayName&&t.componentId?`${lt(t.displayName)}-${t.componentId}`:t.componentId||l,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;m=function(e,t){return h(e,t)&&g(e,t)}}else m=h}var v=new mn(n,f,r?i.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,o=e.foldedComponentIds,s=e.styledComponentId,c=e.target,l=_.useContext(Dn),u=Tn(),d=e.shouldForwardProp||u.shouldForwardProp,f=at(t,l,a)||it,p=function(e,t,n){for(var r,i=y(y({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Pt(r=e[a])?r(i):r;for(var s in o)s===`className`?i.className=It(i.className,o[s]):s===`style`?i.style=y(y({},i.style),o[s]):s in t&&t[s]===void 0||(i[s]=o[s])}return`className`in t&&typeof t.className==`string`&&(i.className=It(i.className,t.className)),i}(r,t,f),m=p.as||c,h={};for(var g in p)p[g]===void 0||g[0]===`$`||g===`as`||g===`theme`&&p.theme===f||(g===`forwardedAs`?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var v=function(e,t){var n=Tn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p).className,b=It(o,s);return v&&(b+=` `+v),p.className&&(b+=` `+p.className),h[vt(m)&&!ot.has(m)?`class`:`className`]=b,n&&(h.ref=n),(0,_.createElement)(m,h)}(x,e,t)}b.displayName=d;var x=_.forwardRef(b);return x.attrs=p,x.componentStyle=v,x.displayName=d,x.shouldForwardProp=m,x.foldedComponentIds=r?It(i.foldedComponentIds,i.styledComponentId):``,x.styledComponentId=f,x.target=r?i.target:e,Object.defineProperty(x,`defaultProps`,{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++)zt(e,r[n],!0);return e}({},i.defaultProps,e):e}}),Bt(x,function(){return`.${x.styledComponentId}`}),a&&Nt(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function jn(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Mn=function(e){return Object.assign(e,{isCss:!0})};function z(e){var t=[...arguments].slice(1);if(Pt(e)||Rt(e))return Mn(dn(jn(rt,b([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?dn(n):Mn(dn(jn(n,t)))}function Nn(e,t,n){if(n===void 0&&(n=it),!t)throw Ze(1,t);var r=function(r){var i=[...arguments].slice(1);return e(t,n,z.apply(void 0,b([r],i,!1)))};return r.attrs=function(r){return Nn(e,t,y(y({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Nn(e,t,y(y({},n),r))},r}var Pn=function(e){return Nn(An,e)},B=Pn;ot.forEach(function(e){B[e]=Pn(e)});var Fn,In=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=fn(e),nn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Lt(dn(this.rules,t,n,r)),``),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&nn.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function Ln(e){var t=[...arguments].slice(1),n=z.apply(void 0,b([e],t,!1)),r=`sc-global-${gt(JSON.stringify(n))}`,i=new In(n,r),a=new WeakMap,o=function(e){var t=Tn(),n=_.useContext(Dn),s=a.get(t.styleSheet);return s===void 0&&(s=t.styleSheet.allocateGSInstance(r),a.set(t.styleSheet,s)),_.useLayoutEffect(function(){return t.styleSheet.server||function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Xe,n,a);else{var s=y(y({},t),{theme:at(t,r,o.defaultProps)});i.renderStyles(e,s,n,a)}}(s,e,t.styleSheet,n,t.stylis),function(){i.removeStyles(s,t.styleSheet)}},[s,e,t.styleSheet,n,t.stylis]),null};return _.memo(o)}var Rn=function(){function e(e,t){var n=this;this[Fn]=!0,this.inject=function(e,t){t===void 0&&(t=Sn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.name=e,this.id=`sc-keyframes-${e}`,this.rules=t,Bt(this,function(){throw Ze(12,String(n.name))})}return e.prototype.getName=function(e){return e===void 0&&(e=Sn),this.name+e.hash},e}();function zn(e){var t=[...arguments].slice(1),n=Lt(z.apply(void 0,b([e],t,!1)));return new Rn(gt(n),n)}Fn=sn,function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=Yt();return`<style ${Lt([n&&`nonce="${n}"`,`${Ue}="true"`,`${Ge}="${Ke}"`].filter(Boolean),` `)}>${t}</style>`},this.getStyleTags=function(){if(e.sealed)throw Ze(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ze(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[Ue]=``,t[Ge]=Ke,t.dangerouslySetInnerHTML={__html:n},t),i=Yt();return i&&(r.nonce=i),[_.createElement(`style`,y({},r,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new nn({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw Ze(2);return _.createElement(En,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ze(3)},e}(),`${Ue}`;var Bn=Object.defineProperty,Vn=(e,t)=>{for(var n in t)Bn(e,n,{get:t[n],enumerable:!0})},Hn={};Vn(Hn,{ActionPause:()=>Un,Add:()=>Wn,Analyse:()=>Gn,Back:()=>Kn,BigWarning:()=>qn,Broken:()=>Jn,Camera:()=>Yn,ClearField:()=>Xn,Close:()=>Qn,CloseCompact:()=>Zn,Copy:()=>$n,Critical:()=>er,Crop:()=>tr,DarkMode:()=>nr,DataRetention:()=>rr,Date:()=>ar,DateTime:()=>ir,Delete:()=>or,Detection:()=>sr,DevicesFolder:()=>cr,DevicesLiveEndpoint:()=>lr,DevicesScorerCamera:()=>ur,DevicesScorerEdge:()=>dr,Down:()=>fr,Download:()=>mr,DownloadVideo:()=>pr,Edit:()=>hr,Exclamation:()=>gr,ExternalLink:()=>_r,FeatureLineUi:()=>vr,FeaturePtz:()=>yr,Fever:()=>br,FileTypeImage:()=>xr,FilterAscending:()=>Sr,FilterDescending:()=>Cr,FilterEllipsis:()=>wr,FilterSorting:()=>Tr,Forward:()=>Er,Gateway:()=>Dr,GroupCollapse:()=>Or,GroupExpand:()=>kr,Home:()=>Ar,Information:()=>jr,Invalid:()=>Mr,Language:()=>Nr,LayoutGrid:()=>Pr,LayoutList:()=>Fr,Left:()=>Ir,LightMode:()=>Lr,Link:()=>Rr,Location:()=>zr,Locked:()=>Br,Menu:()=>Vr,MetaCategories:()=>Hr,MetaEnabledState:()=>Ur,MetaTags:()=>Wr,MissingImage:()=>Gr,MonitoringProfile:()=>Kr,NoIcon:()=>qr,Notifications:()=>Yr,NotificationsOff:()=>Jr,PasswordHide:()=>Xr,PasswordShow:()=>Zr,Pinned:()=>Qr,Play:()=>$r,Question:()=>ei,RecognitionPhoto:()=>ti,RecognitionProfile:()=>ni,Required:()=>ri,RetryJob:()=>ii,Right:()=>ai,Search:()=>oi,Success:()=>si,SwitchAccount:()=>ci,Temperature:()=>pi,TemperatureAmbient:()=>li,TemperatureHigh:()=>ui,TemperatureLow:()=>di,TemperatureNormal:()=>fi,Time:()=>mi,Unlocked:()=>hi,Up:()=>gi,Usage:()=>_i,UserProfile:()=>vi,ViewSettings:()=>yi,Warning:()=>bi,Zone:()=>xi});var Un=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`rect`,{x:5.25,y:3.75,width:4.5,height:16.5,rx:1.5}),_.createElement(`rect`,{x:14.25,y:3.75,width:4.5,height:16.5,rx:1.5}))),Wn=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12 7.5v9M7.5 12h9`}),_.createElement(`circle`,{cx:12,cy:12,r:11.25}))),Gn=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 0 0 4 23.25h15.948a3 3 0 0 0 2.515-4.635L15.726 8.25ZM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3`}),_.createElement(`path`,{d:`M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 0 1-.375-.375`}),_.createElement(`path`,{d:`M7.1 19.5a.375.375 0 0 1-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 0 1-.375-.375`}),_.createElement(`path`,{d:`M10.1 16.5a.375.375 0 0 1-.375.375M15.726 3.75h-3M15.726 6.75h-3`}))),Kn=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M7.501 11.997h9m-5.25 3.75-3.75-3.75 3.75-3.75`}),_.createElement(`circle`,{cx:12.001,cy:11.997,r:10.5}))),qn=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V6`}),_.createElement(`path`,{d:`M1.28 13.281a1.811 1.811 0 0 1 0-2.561l9.44-9.439a1.81 1.81 0 0 1 2.56 0l9.44 9.439a1.811 1.811 0 0 1 0 2.561l-9.44 9.439a1.812 1.812 0 0 1-2.56 0l-9.44-9.439z`}))),Jn=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`m8.25 5.249-3-3m1.5 6h-1.5m6-4.5v-1.5m3 4.5h4.5a4.5 4.5 0 0 1 0 9h-4.5m-9.53-4.334-2.652 2.652a4.5 4.5 0 0 0 6.364 6.364l2.652-2.652`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),Yn=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M8.25 12v3.333a2.848 2.848 0 0 1-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 0 1-.75-.75V4.5A4.5 4.5 0 0 1 5.25 0h16.5a1.5 1.5 0 0 1 1.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0 1 15 9z`}),_.createElement(`path`,{d:`M20.25 5.084V10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a3 3 0 0 1-3-3h0m21-2.25v3`}))),Xn=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:11.998,cy:12,r:11.25}),_.createElement(`path`,{d:`m7.498 16.5 8.999-9M16.498 16.5l-9.001-9`}))),Zn=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m5 18.999 14-14M19 18.999l-14-14`}))),Qn=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m.75 23.249 22.5-22.5M23.25 23.249.75.749`}))),$n=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M4.5 17.5A1.5 1.5 0 0 1 3 16V2.5A1.5 1.5 0 0 1 4.5 1H15a1.5 1.5 0 0 1 1.5 1.5`}),_.createElement(`rect`,{x:8,y:6,width:13.5,height:16.5,rx:1.5}))),er=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12 18.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3v-7.5`}),_.createElement(`path`,{d:`M13.621 1.76a1.806 1.806 0 0 0-3.242 0L.906 21.058a1.52 1.52 0 0 0 1.366 2.192h19.456a1.52 1.52 0 0 0 1.366-2.192L13.621 1.76z`}))),tr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M21.75 19.125h1.5M5.25 1.875v17.25h13.5M2.25 5.625H.75M14.25 5.625h-9M18.75 22.875v-13.5M5.25 19.125l2.121-2.121M9.493 14.882l2.121-2.121M13.735 10.64l2.122-2.122M17.978 6.397l2.121-2.121M22.221 2.154l1.029-1.029`}))),nr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z`}),_.createElement(`path`,{d:`M12.046 6.797a5.194 5.194 0 0 0-2.25.525 5.222 5.222 0 0 1 0 9.45 5.243 5.243 0 1 0 2.25-9.975h0Z`}))),rr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:17.25,cy:17.25,r:6}),_.createElement(`path`,{d:`M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 0 0-6.868-1.377 7.5 7.5 0 0 0-8.3-6.057 7.5 7.5 0 0 0 .938 14.941`}))),ir=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M8.25 17.25h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3`}),_.createElement(`circle`,{cx:17.25,cy:17.25,r:6}),_.createElement(`path`,{d:`M19.902 17.25H17.25v-2.651`}))),ar=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`rect`,{x:.752,y:3.75,width:22.5,height:19.5,rx:1.5}),_.createElement(`path`,{d:`M.752 9.75h22.5M6.752 6V.75M17.252 6V.75`}))),or=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5ZM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z`}))),sr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6`,fill:`none`,fillRule:`evenodd`,stroke:e.color,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:e.weight,vectorEffect:`non-scaling-stroke`})),cr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M20.25 11.75v-3a1.5 1.5 0 0 0-1.5-1.5H8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v16.3a1.7 1.7 0 0 0 3.336.438l2.351-9.657a1.5 1.5 0 0 1 1.442-1.081H21.75a1.5 1.5 0 0 1 1.45 1.886l-2.2 9a1.5 1.5 0 0 1-1.45 1.114H2.447`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),lr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M6.75 21.368h10.5m-7.312-6.75-1.688 6.75m5.813-6.75 1.687 6.75m7.5-12.75a6 6 0 0 1-6 6H6.75a6 6 0 1 1 0-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 0 1 1.757 4.243z`}),_.createElement(`circle`,{cx:12,cy:8.618,r:3}))),ur=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 0 1-.375-.375m.75.001a.375.375 0 0 1-.375.375m6-7.552a9.54 9.54 0 0 0-12 0m2.5 3.615a5.568 5.568 0 0 1 7 0M17.25 3.75l-16.5 3v-3a3 3 0 0 1 3-3h13.786a.75.75 0 0 1 .671 1.085L17.25 3.75z`}),_.createElement(`path`,{d:`M15.75 4.023V7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 2.25 7.5V6.477m4.5 3.273v1.5a3 3 0 0 1-3 3h-3m0-1.5v3m18-10.5v3`}))),dr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M1.25.75h11a.5.5 0 0 1 .5.5v3a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3a.5.5 0 0 1 .5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 0 1-.375-.375m.75 0a.375.375 0 0 1-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5m3 0h3`}),_.createElement(`rect`,{width:7.5,height:12,x:15.75,y:11.25,rx:1.5}),_.createElement(`path`,{d:`M19.5 19.875h0m.375.375a.375.375 0 0 0-.375-.375m0 .75a.375.375 0 0 0 .375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 0 0-.375.375M17.379 7.629a3 3 0 0 1 4.242 0M16.5 4.451a6.768 6.768 0 0 1 6 0m-20.486.78a5.25 5.25 0 1 0 9.472 0`}))),fr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M23.25 6.311 12.53 17.03a.751.751 0 0 1-1.06 0L.75 6.311`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),pr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:17.25,cy:17.25,r:6}),_.createElement(`path`,{d:`M17.25 14.25v6M17.25 20.25 15 18M17.25 20.25 19.5 18M8.25 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.25`}),_.createElement(`path`,{d:`M6.241 12.678a.685.685 0 0 1-.991-.613v-4.63a.685.685 0 0 1 .991-.613l4.631 2.316a.684.684 0 0 1 0 1.224l-4.631 2.316Z`}))),mr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M5.251 11.25 12 18l6.75-6.75H15V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5v6.75H5.251zm18 8.25v3a1.5 1.5 0 0 1-1.5 1.5h-19.5a1.5 1.5 0 0 1-1.5-1.5v-3`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),hr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M22.19 1.81a3.637 3.637 0 0 0-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.636 3.636 0 0 0 .035-5.169zm-5.584.45 5.134 5.134m-19.219 8.95 5.139 5.13`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),gr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),_r=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M23.497 7.75V1h-6.75m6.75 0-10.94 10.939M18.5 13.5v8A1.5 1.5 0 0 1 17 23H2.5A1.5 1.5 0 0 1 1 21.5V7a1.5 1.5 0 0 1 1.5-1.5h8.495`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),vr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M3.75 17.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2.53 5.53L6.53 17.47`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),yr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5 3 3 3-3M23.25 12H.75m19.5-3 3 3-3 3M3.75 9l-3 3 3 3`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),br=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),xr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M22.954 22a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 22V2.5A1.5 1.5 0 0 1 3.5 1h15a1.5 1.5 0 0 1 1.047.426l2.955 2.883c.29.282.452.67.452 1.074V22z`}),_.createElement(`circle`,{cx:8.75,cy:7.75,r:2.25}),_.createElement(`path`,{d:`m19.29 18.45-3.925-5.888a1.011 1.011 0 0 0-1.671-.019l-2.691 3.845-1.668-1.338a1.011 1.011 0 0 0-1.474.229L5.75 18.45`}))),Sr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M8.25 23.248V.748m-4.5 18 4.5 4.5 4.5-4.5m3-4.5h3.6a.899.899 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V3a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),Cr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M8.25 24.248v-22.5M3.75 5.5 8.25 1l4.5 4.5m3 9.748h3.6a.9.9 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V4a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),wr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:3.625,cy:11.625,r:2.625}),_.createElement(`circle`,{cx:20.875,cy:11.625,r:2.625}),_.createElement(`circle`,{cx:12.25,cy:11.625,r:2.625}))),Tr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M7 12h10m-7 5h4M5 7h14`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),Er=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75`}),_.createElement(`circle`,{cx:11.999,cy:11.997,r:10.5,transform:`matrix(-1 0 0 1 23.998 0)`}))),Dr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M8.25 18v3.1a1.518 1.518 0 0 0 1.5 1.4h12a1.557 1.557 0 0 0 1.5-1.607V3.111a1.555 1.555 0 0 0-1.5-1.611h-12a1.619 1.619 0 0 0-1.5 1.808V6`}),_.createElement(`path`,{d:`M6.75 12.004h12v3m-3 0v-3`}),_.createElement(`circle`,{cx:3.75,cy:12.004,r:3}))),Or=e=>_.createElement(`svg`,{width:e.size,height:e.size,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{clipPath:`url(#group-collapse_svg__a)`,stroke:e.color,strokeWidth:e.weight,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M23.251.748H.751M23.251 23.248H.751M12.001 14.248v9M12.001.748v9M15.751 17.998l-3.75-3.75-3.75 3.75M15.751 5.998l-3.75 3.75-3.75-3.75`})),_.createElement(`defs`,null,_.createElement(`clipPath`,{id:`group-collapse_svg__a`},_.createElement(`path`,{fill:`#fff`,d:`M0 0h24v24H0z`})))),kr=e=>_.createElement(`svg`,{width:e.size,height:e.size,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{clipPath:`url(#group-expand_svg__a)`,stroke:e.color,strokeWidth:e.weight,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12.001 3.748v16.5M15.751 7.498l-3.75-3.75-3.75 3.75M15.751 16.498l-3.75 3.75-3.75-3.75M23.251.748H.751M23.251 23.248H.751`})),_.createElement(`defs`,null,_.createElement(`clipPath`,{id:`group-expand_svg__a`},_.createElement(`path`,{fill:`#fff`,d:`M0 0h24v24H0z`})))),Ar=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M3.754 13.923v8.25h6v-6a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 0 1 2.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25`}))),jr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M14.25 16.5h-.75A1.5 1.5 0 0 1 12 15v-3.75a.75.75 0 0 0-.75-.75h-.75m1.125-3.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0`}),_.createElement(`circle`,{cx:12,cy:12,r:11.25}))),Mr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:11.998,cy:12,r:11.25}),_.createElement(`path`,{d:`m7.498 16.5 8.999-9m.001 9-9.001-9`}))),Nr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M9.735 23.023a11.251 11.251 0 1 1 13.418-12.511`}),_.createElement(`path`,{d:`M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 0 1 2.2 6.42`}),_.createElement(`circle`,{cx:18,cy:13.126,r:2.625}),_.createElement(`path`,{d:`M18 16.5a5.25 5.25 0 0 0-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0 0 18 16.5h0Z`}))),Pr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`rect`,{width:4.5,height:4.5,x:.75,y:.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:9.75,y:.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:18.75,y:.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:.75,y:9.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:9.75,y:9.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:18.75,y:9.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:.75,y:18.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:9.75,y:18.747,rx:1.5}),_.createElement(`rect`,{width:4.5,height:4.5,x:18.75,y:18.747,rx:1.5}))),Fr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`rect`,{width:22.5,height:4.5,x:.75,y:.747,rx:1.5}),_.createElement(`rect`,{width:22.5,height:4.5,x:.75,y:9.747,rx:1.5}),_.createElement(`rect`,{width:22.5,height:4.5,x:.75,y:18.747,rx:1.5}))),Ir=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M17.25 23.25 6.53 12.53a.751.751 0 0 1 0-1.06L17.25.75`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),Lr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z`,strokeLinecap:`round`,strokeLinejoin:`round`}),_.createElement(`circle`,{cx:12,cy:12,r:4.25}))),Rr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m9.364 18.5-.932.932a4.5 4.5 0 0 1-6.364-6.364l4.773-4.774a4.5 4.5 0 0 1 6.825 5.825`}),_.createElement(`path`,{d:`m14.818 5.567.75-.75a4.5 4.5 0 0 1 6.364 6.364l-4.773 4.773a4.5 4.5 0 0 1-6.824-5.826`}))),zr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:12,cy:7.5,r:3}),_.createElement(`path`,{d:`M12 .75a6.75 6.75 0 0 1 6.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 0 1-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0 1 12 .75z`}),_.createElement(`path`,{d:`M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463`}))),Br=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M10 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75`}),_.createElement(`rect`,{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),_.createElement(`path`,{d:`M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0`}))),Vr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5`}))),Hr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:5.25,cy:5.255,r:4.5}),_.createElement(`circle`,{cx:5.25,cy:18.755,r:4.5}),_.createElement(`circle`,{cx:18.75,cy:5.255,r:4.5}),_.createElement(`circle`,{cx:18.75,cy:18.755,r:4.5}))),Ur=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M18.376 10.5H5.626A4.888 4.888 0 0 1 .751 5.625h0A4.889 4.889 0 0 1 5.626.75h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875ZM18.376 23.25H5.626a4.888 4.888 0 0 1-4.875-4.875h0A4.889 4.889 0 0 1 5.626 13.5h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875h0Z`}),_.createElement(`circle`,{cx:5.626,cy:5.625,r:1.875}),_.createElement(`circle`,{cx:18.376,cy:18.375,r:1.875}))),Wr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M1.061 2.56v6.257a3 3 0 0 0 .878 2.121L13.5 22.5a1.5 1.5 0 0 0 2.121 0l6.879-6.88a1.5 1.5 0 0 0 0-2.121L10.939 1.938a3 3 0 0 0-2.121-.878H2.561a1.5 1.5 0 0 0-1.5 1.5Z`}),_.createElement(`circle`,{cx:6.311,cy:6.31,r:1.5}))),Gr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M17.5 20.5a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m0-2.25v-3`}),_.createElement(`path`,{d:`M23.313 20.932a1.774 1.774 0 0 1-1.587 2.568h-8.452a1.774 1.774 0 0 1-1.587-2.568l4.226-8.451a1.774 1.774 0 0 1 3.174 0l4.226 8.451zM7.75 20.5H2.5A1.5 1.5 0 0 1 1 19V2.5A1.5 1.5 0 0 1 2.5 1h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.5`}),_.createElement(`path`,{d:`M5.5 5.875a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m7.606 5.195L11.5 8.5a.75.75 0 0 0-1.238-.014l-2 2.851-1.232-.987a.75.75 0 0 0-1.093.169L4 14.5h6`}))),Kr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:17.25,cy:16.5,r:1.5}),_.createElement(`path`,{d:`m18.524 10.7.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 0 1 1.275 2.218l-1.031 1.111a1 1 0 0 0 0 1.362l1.031 1.111a1.339 1.339 0 0 1-1.275 2.219l-1.472-.342a1 1 0 0 0-1.174.681l-.442 1.448a1.33 1.33 0 0 1-2.548 0l-.442-1.453a1 1 0 0 0-1.174-.681l-1.472.342a1.34 1.34 0 0 1-1.275-2.219l1.031-1.111a1 1 0 0 0 0-1.362l-1.031-1.111a1.34 1.34 0 0 1 1.275-2.218l1.472.341a.992.992 0 0 0 1.174-.681l.442-1.452a1.33 1.33 0 0 1 2.548.005zM8.25 14.25a4.5 4.5 0 1 1 4.25-5.978`}),_.createElement(`path`,{d:`M9.75 9.75h-1.5v-1.5`}),_.createElement(`path`,{d:`M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75`}))),qr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e}),Jr=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`m22.501 2.25-21 21M10 21.75a2.086 2.086 0 0 0 4.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7.386 7.386 0 0 0-.093-.915M16.212 4.3A7.498 7.498 0 0 0 4.5 10.5v5.25`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),Yr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M10 21.75a2.087 2.087 0 0 0 4.005 0M12 3V.75M12 3a7.5 7.5 0 0 1 7.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0 1 12 3Z`}))),Xr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`m2.783 20 18.75-18M8.964 18.051A9.985 9.985 0 0 0 12 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0 0 19.75 7.88M14.413 5.282A9.549 9.549 0 0 0 12 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 0 0 0 2.226 20.8 20.8 0 0 0 2.6 2.4`}),_.createElement(`path`,{d:`M8.25 11.75A3.749 3.749 0 0 1 12 8M15.75 11.749h0A3.75 3.75 0 0 1 12 15.5`}))),Zr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 0 0 0 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251Z`}),_.createElement(`path`,{d:`M15.75 12a3.75 3.75 0 1 1-7.5-.002 3.75 3.75 0 0 1 7.5.002h0Z`}))),Qr=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M4.949 8.783a1.5 1.5 0 0 0-.3 2.356l8.213 8.213a1.5 1.5 0 0 0 2.356-.3 7.522 7.522 0 0 0 .81-5.54l6.529-4.155a1.5 1.5 0 0 0 .256-2.326L16.97 1.188a1.5 1.5 0 0 0-2.326.255l-4.155 6.53a7.522 7.522 0 0 0-5.54.81ZM8.753 15.246.75 23.249`}))),$r=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M2.338 3.255v17.49a1.499 1.499 0 0 0 2.209 1.322l16.323-8.745a1.5 1.5 0 0 0 0-2.644L4.547 1.933a1.5 1.5 0 0 0-2.209 1.322z`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),ei=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M9 9a2.999 2.999 0 0 1 5.923-.673A3 3 0 0 1 13 11.829a1.5 1.5 0 0 0-1 1.415v1.006m0 3a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0`}),_.createElement(`circle`,{cx:12,cy:12,r:11.25}))),ti=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`rect`,{width:19.5,height:22.5,x:2.25,y:.75,rx:1.5}),_.createElement(`circle`,{cx:12,cy:9.083,r:4.11}),_.createElement(`path`,{d:`M18.75 19.027a7.63 7.63 0 0 0-13.5 0`}))),ni=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M5.25 22.5a6.75 6.75 0 1 1 13.5 0H5.25zM8.458 8.043a6.859 6.859 0 0 0 7.612 1.532`}),_.createElement(`circle`,{cx:12,cy:10.125,r:4.125}),_.createElement(`path`,{d:`M.75 5.249V3a1.5 1.5 0 0 1 1.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25`}))),ri=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 0 0-.549-2.049l-2.6-1.5a1.5 1.5 0 0 0-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 0 0-2.049-.549l-2.6 1.5A1.5 1.5 0 0 0 4.9 5.658l1.9 3.295H3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 0 0 2.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 0 0 2.049.549l2.6-1.5a1.5 1.5 0 0 0 .549-2.049l-1.9-3.294H21a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),ii=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M15 18.75h-3.75v3.75`}),_.createElement(`path`,{d:`M22.667 19.483a5.572 5.572 0 0 1-10.74-.733M19.5 15.75h3.75V12`}),_.createElement(`path`,{d:`M11.833 15.017a5.572 5.572 0 0 1 10.74.733M8.25 14.25a4.5 4.5 0 1 1 4.25-5.978`}),_.createElement(`path`,{d:`M9.75 9.75h-1.5v-1.5`}),_.createElement(`path`,{d:`M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871a1.5 1.5 0 0 1 .439 1.061V7.5`}))),ai=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`m6.5.75 10.72 10.72a.751.751 0 0 1 0 1.06L6.5 23.25`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),oi=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:9.823,cy:9.823,r:8.823}),_.createElement(`path`,{d:`m16.062 16.062 6.843 6.844`}))),si=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M6 13.223 8.45 16.7a1.049 1.049 0 0 0 1.707.051L18 6.828`}),_.createElement(`circle`,{cx:12,cy:11.999,r:11.25}))),ci=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M.75 14.248h20.689a.751.751 0 0 1 .531 1.281L18 19.5M6 4.5 2.03 8.468a.75.75 0 0 0 .531 1.28H23.25`}))),li=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M8.25 15.418V3.75a3 3 0 1 0-6 0v11.668a4.493 4.493 0 1 0 7.5 3.332 4.47 4.47 0 0 0-1.5-3.332h0zm-3-10.168v12`}),_.createElement(`circle`,{cx:5.25,cy:18.75,r:1.5}),_.createElement(`circle`,{cx:15,cy:11.25,r:3.75}),_.createElement(`path`,{d:`M15.75 4.5V3m4.023 3.477 1.061-1.061m.916 5.834h1.5m-3.477 4.773 1.061 1.061M15.75 18v1.5`}))),ui=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z`}),_.createElement(`circle`,{cx:12.5,cy:18.75,r:1.5}),_.createElement(`path`,{d:`M12.5 12.75v4.5m6-4.5H20`}))),di=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z`}),_.createElement(`circle`,{cx:12.5,cy:18.75,r:1.5}),_.createElement(`path`,{d:`M12.5 3.75v13.5m6-13.5H20m-1.5 4.5H20m-1.5 4.5H20`}))),fi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z`}),_.createElement(`circle`,{cx:12.5,cy:18.75,r:1.5}),_.createElement(`path`,{d:`M12.5 8.25v9m6-9H20m-1.5 4.5H20`}))),pi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{fill:`none`,fillRule:`evenodd`,stroke:e.color,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:e.weight,transform:`translate(.75 .75)`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M10.656 10.6V2.578a2.062 2.062 0 1 0-4.125 0V10.6a3.093 3.093 0 1 0 4.125 0z`}),_.createElement(`circle`,{cx:8.594,cy:12.891,r:1.031}),_.createElement(`path`,{d:`M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031`}))),mi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:12,cy:12,r:10.5}),_.createElement(`path`,{d:`M12 12V8.25M12 12l4.687 4.688`}))),hi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M.75 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75`}),_.createElement(`rect`,{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),_.createElement(`path`,{d:`M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0`}))),gi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`path`,{d:`M.75 17.189 11.47 6.47a.751.751 0 0 1 1.06 0l10.72 10.719`,stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`})),_i=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M15.75 23.229c-2.434 0-4.5-1.316-4.5-3.75v-3.75h9v3.75c0 .788-.607 3.75-4.5 3.75zm-7.5-10.5-1.5 3m4.5-3h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 1.5 1.5v4.5m-14.25 9h3m-4.5-6h7.5m-6 0v-2.25m3 2.25v-3.75m3 3.75v-6m3.027 6.455c-1.1 1.1 1.089 1.471.015 2.545m3.149-4.46c-1.912 1.911 1.9 2.561.026 4.432`}),_.createElement(`path`,{d:`M20.25 16.479H21a2.25 2.25 0 1 1 0 4.5h-1.133`}))),vi=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`circle`,{cx:12,cy:6,r:5.25}),_.createElement(`path`,{d:`M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75`}))),yi=e=>_.createElement(`svg`,{width:e.size,height:e.size,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M7.281 9.376a1.308 1.308 0 0 0 1.939 0l.627-.7a1.306 1.306 0 0 1 2.273.942l-.047.934a1.3 1.3 0 0 0 1.371 1.371l.934-.047a1.305 1.305 0 0 1 .941 2.273l-.694.627a1.306 1.306 0 0 0 0 1.939l.694.627a1.305 1.305 0 0 1-.941 2.273l-.934-.047a1.305 1.305 0 0 0-1.371 1.371l.047.934a1.306 1.306 0 0 1-2.273.942l-.627-.7a1.308 1.308 0 0 0-1.939 0l-.627.7a1.306 1.306 0 0 1-2.273-.942l.047-.934a1.307 1.307 0 0 0-1.371-1.371l-.934.047a1.306 1.306 0 0 1-.942-2.273l.695-.627a1.308 1.308 0 0 0 0-1.939l-.695-.627a1.306 1.306 0 0 1 .942-2.273l.934.047a1.305 1.305 0 0 0 1.371-1.371l-.047-.934a1.306 1.306 0 0 1 2.273-.942l.627.7Z`}),_.createElement(`circle`,{cx:8.25,cy:15.751,r:1.875}),_.createElement(`path`,{d:`M18.638 5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0`}),_.createElement(`path`,{d:`M21.194 1.848a.75.75 0 0 1 .971.971l-.5 1.286a.749.749 0 0 0 .229.856l1.075.864a.75.75 0 0 1-.355 1.326l-1.363.211a.749.749 0 0 0-.627.626l-.211 1.364a.75.75 0 0 1-1.326.355l-.864-1.075a.751.751 0 0 0-.856-.23l-1.286.5a.75.75 0 0 1-.971-.971l.5-1.286a.749.749 0 0 0-.229-.856l-1.075-.865a.749.749 0 0 1 .355-1.324l1.363-.211a.751.751 0 0 0 .627-.627l.211-1.362a.749.749 0 0 1 1.325-.355l.865 1.075a.75.75 0 0 0 .856.229l1.286-.501Z`}))),bi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25`}),_.createElement(`circle`,{cx:12,cy:12,r:11.25}))),xi=e=>_.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e.size,height:e.size,viewBox:`0 0 24 24`,...e},_.createElement(`g`,{stroke:e.color,strokeWidth:e.weight,fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`},_.createElement(`path`,{d:`M2.724.827A1.5 1.5 0 0 0 .75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 0 1 1.07.017l4.911 1.93a1.501 1.501 0 0 0 2.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 0 0-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z`}),_.createElement(`path`,{d:`M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z`}),_.createElement(`path`,{d:`m3.75 9.879 3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5`}))),Si=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ci=o(((e,t)=>{t.exports=Si()})),wi=365.2425,Ti=6048e5,Ei=864e5,Di=6e4,Oi=36e5,ki=3600*24;ki*7,ki*wi/12*3;var Ai=Symbol.for(`constructDateFrom`);function V(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Ai in e?e[Ai](t):e instanceof Date?new e.constructor(t):new Date(t)}function H(e,t){return V(t||e,e)}function U(e,t,n){let r=H(e,n?.in);return isNaN(t)?V(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function ji(e,t,n){let r=H(e,n?.in);if(isNaN(t))return V(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=V(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Mi(e,t,n){let{years:r=0,months:i=0,weeks:a=0,days:o=0,hours:s=0,minutes:c=0,seconds:l=0}=t,u=H(e,n?.in),d=i||r?ji(u,i+r*12):u,f=o||a?U(d,o+a*7):d,p=(l+(c+s*60)*60)*1e3;return V(n?.in||e,+f+p)}var Ni={};function Pi(){return Ni}function Fi(e,t){let n=Pi(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=H(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function Ii(e,t){return Fi(e,{...t,weekStartsOn:1})}function Li(e,t){let n=H(e,t?.in),r=n.getFullYear(),i=V(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=Ii(i),o=V(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=Ii(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Ri(e){let t=H(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function zi(e,...t){let n=V.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function Bi(e,t){let n=H(e,t?.in);return n.setHours(0,0,0,0),n}function Vi(e,t,n){let[r,i]=zi(n?.in,e,t),a=Bi(r),o=Bi(i),s=+a-Ri(a),c=+o-Ri(o);return Math.round((s-c)/Ei)}function Hi(e,t){let n=Li(e,t),r=V(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Ii(r)}function Ui(e,t,n){return U(e,t*7,n)}function Wi(e,t){let n,r=t?.in;return e.forEach(e=>{!r&&typeof e==`object`&&(r=V.bind(null,e));let t=H(e,r);(!n||n>t||isNaN(+t))&&(n=t)}),V(r,n||NaN)}function Gi(e,t){let n=H(e)-+H(t);return n<0?-1:n>0?1:n}function Ki(e){return V(e,Date.now())}function qi(e,t,n){let[r,i]=zi(n?.in,e,t);return+Bi(r)==+Bi(i)}function Ji(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Yi(e){return!(!Ji(e)&&typeof e!=`number`||isNaN(+H(e)))}function Xi(e,t,n){let[r,i]=zi(n?.in,e,t),a=r.getFullYear()-i.getFullYear(),o=r.getMonth()-i.getMonth();return a*12+o}function Zi(e,t,n){let[r,i]=zi(n?.in,e,t);return r.getFullYear()-i.getFullYear()}function Qi(e,t,n){let[r,i]=zi(n?.in,e,t),a=$i(r,i),o=Math.abs(Vi(r,i));r.setDate(r.getDate()-a*o);let s=a*(o-Number($i(r,i)===-a));return s===0?0:s}function $i(e,t){let n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function ea(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return n===0?0:n}}function ta(e,t,n){let[r,i]=zi(n?.in,e,t),a=(r-+i)/Oi;return ea(n?.roundingMethod)(a)}function na(e,t){return H(e)-+H(t)}function ra(e,t,n){let r=na(e,t)/Di;return ea(n?.roundingMethod)(r)}function ia(e,t){let n=H(e,t?.in);return n.setHours(23,59,59,999),n}function aa(e,t){let n=H(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function oa(e,t){let n=H(e,t?.in);return+ia(n,t)==+aa(n,t)}function sa(e,t,n){let[r,i,a]=zi(n?.in,e,e,t),o=Gi(i,a),s=Math.abs(Xi(i,a));if(s<1)return 0;i.getMonth()===1&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*s);let c=Gi(i,a)===-o;oa(r)&&s===1&&Gi(r,a)===1&&(c=!1);let l=o*(s-+c);return l===0?0:l}function ca(e,t,n){let r=na(e,t)/1e3;return ea(n?.roundingMethod)(r)}function la(e,t,n){let[r,i]=zi(n?.in,e,t),a=Gi(r,i),o=Math.abs(Zi(r,i));r.setFullYear(1584),i.setFullYear(1584);let s=a*(o-+(Gi(r,i)===-a));return s===0?0:s}function ua(e,t){let[n,r]=zi(e,t.start,t.end);return{start:n,end:r}}function da(e,t){let{start:n,end:r}=ua(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(V(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function fa(e,t){let{start:n,end:r}=ua(t?.in,e),i=+n>+r,a=Fi(i?r:n,t),o=Fi(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(V(n,c)),c=Ui(c,l),c.setHours(15);return i?u.reverse():u}function pa(e,t){let n=H(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function ma(e,t){let n=H(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ha(e,t){let n=Pi(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=H(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}var ga={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},_a=(e,t,n)=>{let r,i=ga[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r};function va(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var ya={date:va({formats:{full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},defaultWidth:`full`}),time:va({formats:{full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},defaultWidth:`full`}),dateTime:va({formats:{full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},defaultWidth:`full`})},ba={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},xa=(e,t,n,r)=>ba[e];function Sa(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Ca={ordinalNumber:(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},era:Sa({values:{narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},defaultWidth:`wide`}),quarter:Sa({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:Sa({values:{narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},defaultWidth:`wide`}),day:Sa({values:{narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},defaultWidth:`wide`}),dayPeriod:Sa({values:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},defaultFormattingWidth:`wide`})};function wa(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Ea(s,e=>e.test(o)):Ta(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Ta(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ea(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Da(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Oa={code:`en-US`,formatDistance:_a,formatLong:ya,formatRelative:xa,localize:Ca,match:{ordinalNumber:Da({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:wa({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:`any`}),quarter:wa({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:wa({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:wa({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:`any`}),dayPeriod:wa({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:`any`})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function ka(e,t){let n=H(e,t?.in);return Vi(n,ma(n))+1}function Aa(e,t){let n=H(e,t?.in),r=Ii(n)-+Hi(n);return Math.round(r/Ti)+1}function ja(e,t){let n=H(e,t?.in),r=n.getFullYear(),i=Pi(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=V(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=Fi(o,t),c=V(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=Fi(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function Ma(e,t){let n=Pi(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=ja(e,t),a=V(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),Fi(a,t)}function Na(e,t){let n=H(e,t?.in),r=Fi(n,t)-+Ma(n,t);return Math.round(r/Ti)+1}function W(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var Pa={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return W(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):W(n+1,2)},d(e,t){return W(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return W(e.getHours()%12||12,t.length)},H(e,t){return W(e.getHours(),t.length)},m(e,t){return W(e.getMinutes(),t.length)},s(e,t){return W(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return W(Math.trunc(r*10**(n-3)),t.length)}},Fa={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},Ia={G:function(e,t,n){let r=e.getFullYear()>0?1:0;switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return Pa.y(e,t)},Y:function(e,t,n,r){let i=ja(e,r),a=i>0?i:1-i;return t===`YY`?W(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):W(a,t.length)},R:function(e,t){return W(Li(e),t.length)},u:function(e,t){return W(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return W(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return W(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return Pa.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return W(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=Na(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):W(i,t.length)},I:function(e,t,n){let r=Aa(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):W(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):Pa.d(e,t)},D:function(e,t,n){let r=ka(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):W(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return W(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return W(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return W(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?Fa.noon:r===0?Fa.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?Fa.evening:r>=12?Fa.afternoon:r>=4?Fa.morning:Fa.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return Pa.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):Pa.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):W(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):W(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):Pa.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):Pa.s(e,t)},S:function(e,t){return Pa.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return Ra(r);case`XXXX`:case`XX`:return za(r);default:return za(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return Ra(r);case`xxxx`:case`xx`:return za(r);default:return za(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+La(r,`:`);default:return`GMT`+za(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+La(r,`:`);default:return`GMT`+za(r,`:`)}},t:function(e,t,n){return W(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return W(+e,t.length)}};function La(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+W(a,2)}function Ra(e,t){return e%60==0?(e>0?`-`:`+`)+W(Math.abs(e)/60,2):za(e,t)}function za(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=W(Math.trunc(r/60),2),a=W(r%60,2);return n+i+t+a}var Ba=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},Va=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},Ha={p:Va,P:(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Ba(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`});break}return a.replace(`{{date}}`,Ba(r,t)).replace(`{{time}}`,Va(i,t))}},Ua=/^D+$/,Wa=/^Y+$/,Ga=[`D`,`DD`,`YY`,`YYYY`];function Ka(e){return Ua.test(e)}function qa(e){return Wa.test(e)}function Ja(e,t,n){let r=Ya(e,t,n);if(console.warn(r),Ga.includes(e))throw RangeError(r)}function Ya(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Xa=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Za=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qa=/^'([^]*?)'?$/,$a=/''/g,eo=/[a-zA-Z]/;function to(e,t,n){let r=Pi(),i=n?.locale??r.locale??Oa,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=H(e,n?.in);if(!Yi(s))throw RangeError(`Invalid time value`);let c=t.match(Za).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=Ha[t];return n(e,i.formatLong)}return e}).join(``).match(Xa).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:no(e)};if(Ia[t])return{isToken:!0,value:e};if(t.match(eo))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&qa(a)||!n?.useAdditionalDayOfYearTokens&&Ka(a))&&Ja(a,t,String(e));let o=Ia[a[0]];return o(s,a,i.localize,l)}).join(``)}function no(e){let t=e.match(Qa);return t?t[1].replace($a,`'`):e}function ro(e,t){let n=H(e,t?.in),r=n.getFullYear(),i=n.getMonth(),a=V(n,0);return a.setFullYear(r,i+1,0),a.setHours(0,0,0,0),a.getDate()}function io(e,t){let{start:n,end:r}=ua(t?.in,e),i={},a=la(r,n);a&&(i.years=a);let o=Mi(n,{years:i.years}),s=sa(r,o);s&&(i.months=s);let c=Mi(o,{months:i.months}),l=Qi(r,c);l&&(i.days=l);let u=Mi(c,{days:i.days}),d=ta(r,u);d&&(i.hours=d);let f=Mi(u,{hours:i.hours}),p=ra(r,f);p&&(i.minutes=p);let m=ca(r,Mi(f,{minutes:i.minutes}));return m&&(i.seconds=m),i}function ao(e,t){return+H(e)>+H(t)}function oo(e,t){return+H(e)==+H(t)}function so(e,t,n){let[r,i]=zi(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function G(e,t){return qi(V(t?.in||e,e),Ki(t?.in||e))}function co(e,t,n){let r=+H(e,n?.in),[i,a]=[+H(t.start,n?.in),+H(t.end,n?.in)].sort((e,t)=>e-t);return r>=i&&r<=a}function lo(e,t,n){let r=H(e,n?.in),i=r.getFullYear(),a=r.getDate(),o=V(n?.in||e,0);o.setFullYear(i,t,15),o.setHours(0,0,0,0);let s=ro(o);return r.setMonth(t,Math.min(a,s)),r}function uo(e,t,n){let r=H(e,n?.in);return isNaN(+r)?V(n?.in||e,NaN):(t.year!=null&&r.setFullYear(t.year),t.month!=null&&(r=lo(r,t.month)),t.date!=null&&r.setDate(t.date),t.hours!=null&&r.setHours(t.hours),t.minutes!=null&&r.setMinutes(t.minutes),t.seconds!=null&&r.setSeconds(t.seconds),t.milliseconds!=null&&r.setMilliseconds(t.milliseconds),r)}var fo=`modulepreload`,po=function(e){return`/scorer-ui-kit/pr/616/`+e},mo={},ho=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=po(t,n),t in mo)return;mo[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:fo,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},go=`popstate`;function _o(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function vo(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=To(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),Co(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:wo(t))}function r(e,t){bo(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return Eo(t,n,r,e)}function yo(e,t){if(e===!1||e==null)throw Error(t)}function bo(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function xo(){return Math.random().toString(36).substring(2,10)}function So(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Co(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?To(t):t,state:n,key:t&&t.key||r||xo(),unstable_mask:i}}function wo({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function To(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Eo(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=_o(e)?e:Co(h.location,e,t);n&&n(r,e),l=u()+1;let d=So(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=_o(e)?e:Co(h.location,e,t);n&&n(r,e),l=u();let i=So(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Do(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(go,d),c=e,()=>{i.removeEventListener(go,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Do(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),yo(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:wo(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function Oo(e,t,n=`/`){return ko(e,t,n,!1)}function ko(e,t,n,r){let i=qo((typeof t==`string`?To(t):t).pathname||`/`,n);if(i==null)return null;let a=jo(e);No(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Ko(i);o=Uo(a[e],t,r)}return o}function Ao(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function jo(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;yo(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ts([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(yo(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),jo(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Vo(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of Mo(e.path))a(e,t,!0,n)}),t}function Mo(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Mo(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function No(e){e.sort((e,t)=>e.score===t.score?Ho(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Po=/^:[\w-]+$/,Fo=3,Io=2,Lo=1,Ro=10,zo=-2,Bo=e=>e===`*`;function Vo(e,t){let n=e.split(`/`),r=n.length;return n.some(Bo)&&(r+=zo),t&&(r+=Io),n.filter(e=>!Bo(e)).reduce((e,t)=>e+(Po.test(t)?Fo:t===``?Lo:Ro),r)}function Ho(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Uo(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Wo({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Wo({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ts([a,u.pathname]),pathnameBase:ns(ts([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ts([a,u.pathnameBase]))}return o}function Wo(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Go(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Go(e,t=!1,n=!0){bo(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ko(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return bo(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function qo(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Jo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Yo(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?To(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Xo(n.substring(1),`/`):Xo(n,t)):a=t,{pathname:a,search:rs(r),hash:is(i)}}function Xo(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Zo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qo(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function $o(e){let t=Qo(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function es(e,t,n,r=!1){let i;typeof e==`string`?i=To(e):(i={...e},yo(!i.pathname||!i.pathname.includes(`?`),Zo(`?`,`pathname`,`search`,i)),yo(!i.pathname||!i.pathname.includes(`#`),Zo(`#`,`pathname`,`hash`,i)),yo(!i.search||!i.search.includes(`#`),Zo(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Yo(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ts=e=>e.join(`/`).replace(/\/\/+/g,`/`),ns=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),rs=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,is=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,as=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function os(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ss(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var cs=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ls(e,t){let n=e;if(typeof n!=`string`||!Jo.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(cs)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=qo(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{bo(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var us=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(us);var ds=[`GET`,...us];new Set(ds);var fs=_.createContext(null);fs.displayName=`DataRouter`;var ps=_.createContext(null);ps.displayName=`DataRouterState`;var ms=_.createContext(!1),hs=_.createContext({isTransitioning:!1});hs.displayName=`ViewTransition`;var gs=_.createContext(new Map);gs.displayName=`Fetchers`;var _s=_.createContext(null);_s.displayName=`Await`;var vs=_.createContext(null);vs.displayName=`Navigation`;var ys=_.createContext(null);ys.displayName=`Location`;var bs=_.createContext({outlet:null,matches:[],isDataRoute:!1});bs.displayName=`Route`;var xs=_.createContext(null);xs.displayName=`RouteError`;var Ss=`REACT_ROUTER_ERROR`,Cs=`REDIRECT`,ws=`ROUTE_ERROR_RESPONSE`;function Ts(e){if(e.startsWith(`${Ss}:${Cs}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function Es(e){if(e.startsWith(`${Ss}:${ws}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new as(t.status,t.statusText,t.data)}catch{}}function Ds(e,{relative:t}={}){yo(Os(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(vs),{hash:i,pathname:a,search:o}=Ps(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ts([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Os(){return _.useContext(ys)!=null}function ks(){return yo(Os(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(ys).location}var As=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function js(e){_.useContext(vs).static||_.useLayoutEffect(e)}function Ms(){let{isDataRoute:e}=_.useContext(bs);return e?$s():Ns()}function Ns(){yo(Os(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(fs),{basename:t,navigator:n}=_.useContext(vs),{matches:r}=_.useContext(bs),{pathname:i}=ks(),a=JSON.stringify($o(r)),o=_.useRef(!1);return js(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(bo(o.current,As),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=es(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ts([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function Ps(e,{relative:t}={}){let{matches:n}=_.useContext(bs),{pathname:r}=ks(),i=JSON.stringify($o(n));return _.useMemo(()=>es(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Fs(e,t){return Is(e,t)}function Is(e,t,n){yo(Os(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(vs),{matches:i}=_.useContext(bs),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;tc(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ks(),d;if(t){let e=typeof t==`string`?To(t):t;yo(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=Oo(e,{pathname:p});bo(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),bo(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Us(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ts([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ts([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(ys.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function Ls(){let e=Qs(),t=os(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var Rs=_.createElement(Ls,null),zs=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=Es(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(bs.Provider,{value:this.props.routeContext},_.createElement(xs.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Vs,{error:e},t):t}};zs.contextType=ms;var Bs=new WeakMap;function Vs({children:e,error:t}){let{basename:n}=_.useContext(vs);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Ts(t.digest);if(e){let r=Bs.get(t);if(r)throw r;let i=ls(e.location,n);if(cs&&!Bs.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Bs.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Hs({routeContext:e,match:t,children:n}){let r=_.useContext(fs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(bs.Provider,{value:e},n)}function Us(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);yo(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ss(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Rs,o&&(s<0&&c===0?(tc(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Hs,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(zs,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ws(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gs(e){let t=_.useContext(fs);return yo(t,Ws(e)),t}function Ks(e){let t=_.useContext(ps);return yo(t,Ws(e)),t}function qs(e){let t=_.useContext(bs);return yo(t,Ws(e)),t}function Js(e){let t=qs(e),n=t.matches[t.matches.length-1];return yo(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ys(){return Js(`useRouteId`)}function Xs(){return Ks(`useNavigation`).navigation}function Zs(){let{matches:e,loaderData:t}=Ks(`useMatches`);return _.useMemo(()=>e.map(e=>Ao(e,t)),[e,t])}function Qs(){let e=_.useContext(xs),t=Ks(`useRouteError`),n=Js(`useRouteError`);return e===void 0?t.errors?.[n]:e}function $s(){let{router:e}=Gs(`useNavigate`),t=Js(`useNavigate`),n=_.useRef(!1);return js(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{bo(n.current,As),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var ec={};function tc(e,t,n){!t&&!ec[e]&&(ec[e]=!0,bo(!1,n))}_.useOptimistic,_.memo(nc);function nc({routes:e,future:t,state:n,isStatic:r,onError:i}){return Is(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function rc(e){yo(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function ic({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){yo(!Os(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=To(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=_.useMemo(()=>{let e=qo(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return bo(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(vs.Provider,{value:c},_.createElement(ys.Provider,{children:t,value:h}))}function ac({children:e,location:t}){return Fs(oc(e),t)}_.Component;function oc(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,oc(e.props.children,i));return}yo(e.type===rc,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yo(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=oc(e.props.children,i)),n.push(a)}),n}var sc=`get`,cc=`application/x-www-form-urlencoded`;function lc(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function uc(e){return lc(e)&&e.tagName.toLowerCase()===`button`}function dc(e){return lc(e)&&e.tagName.toLowerCase()===`form`}function fc(e){return lc(e)&&e.tagName.toLowerCase()===`input`}function pc(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mc(e,t){return e.button===0&&(!t||t===`_self`)&&!pc(e)}var hc=null;function gc(){if(hc===null)try{new FormData(document.createElement(`form`),0),hc=!1}catch{hc=!0}return hc}var _c=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function vc(e){return e!=null&&!_c.has(e)?(bo(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`),null):e}function yc(e,t){let n,r,i,a,o;if(dc(e)){let o=e.getAttribute(`action`);r=o?qo(o,t):null,n=e.getAttribute(`method`)||sc,i=vc(e.getAttribute(`enctype`))||cc,a=new FormData(e)}else if(uc(e)||fc(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?qo(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||sc,i=vc(e.getAttribute(`formenctype`))||vc(o.getAttribute(`enctype`))||cc,a=new FormData(o,e),!gc()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(lc(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=sc,r=null,i=cc,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var bc={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},xc=/[&><\u2028\u2029]/g;function Sc(e){return e.replace(xc,e=>bc[e])}function Cc(e,t){if(e===!1||e==null)throw Error(t)}function wc(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&qo(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function Tc(e,t){if(e.id in t)return t[e.id];try{let n=await ho(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ec(e){return e!=null&&typeof e.page==`string`}function Dc(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Oc(e,t,n){return Nc((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Tc(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Dc).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function kc(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Ac(e,t,{includeHydrateFallback:n}={}){return jc(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function jc(e){return[...new Set(e)]}function Mc(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Nc(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Ec(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Mc(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Pc(){let e=_.useContext(fs);return Cc(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Fc(){let e=_.useContext(ps);return Cc(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Ic=_.createContext(void 0);Ic.displayName=`FrameworkContext`;function Lc(){let e=_.useContext(Ic);return Cc(e,`You must render this element inside a <HydratedRouter> element`),e}function Rc(e,t){let n=_.useContext(Ic),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:zc(s,p),onBlur:zc(c,m),onMouseEnter:zc(l,p),onMouseLeave:zc(u,m),onTouchStart:zc(d,p)}]:[a,f,{}]:[!1,f,{}]}function zc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Bc({page:e,...t}){let{router:n}=Pc(),r=_.useMemo(()=>Oo(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement(Hc,{page:e,matches:r,...t}):null}function Vc(e){let{manifest:t,routeModules:n}=Lc(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return Oc(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Hc({page:e,matches:t,...n}){let r=ks(),{future:i,manifest:a,routeModules:o}=Lc(),{basename:s}=Pc(),{loaderData:c,matches:l}=Fc(),u=_.useMemo(()=>kc(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>kc(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=wc(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>Ac(d,a),[d,a]),m=Vc(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Uc(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var Wc=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Wc&&(window.__reactRouterVersion=`7.13.1`)}catch{}function Gc({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=_.useRef();i.current??=vo({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(ic,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Kc({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(ic,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Kc.displayName=`unstable_HistoryRouter`;var qc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jc=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:v}=_.useContext(vs),y=typeof l==`string`&&qc.test(l),b=ls(l,h);l=b.to;let x=Ds(l,{relative:r}),S=ks(),C=null;if(o){let e=es(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:ts([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=Rc(n,p),D=tl(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:v});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(b.isExternal||i),A=_.createElement(`a`,{...p,...E,href:(k?C:void 0)||b.absoluteURL||x,onClick:k?O:e,ref:Uc(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,A,_.createElement(Bc,{page:x})):A});Jc.displayName=`Link`;var Yc=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ps(a,{relative:c.relative}),d=ks(),f=_.useContext(ps),{navigator:p,basename:m}=_.useContext(vs),h=f!=null&&dl(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=qo(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(Jc,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Yc.displayName=`NavLink`;var Xc=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=sc,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=_.useContext(vs),g=il(),v=al(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&qc.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Xc.displayName=`Form`;function Zc({getKey:e,storageKey:t,...n}){let r=_.useContext(Ic),{basename:i}=_.useContext(vs),a=ks(),o=Zs();ll({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=cl(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${Sc(JSON.stringify(t||ol))}, ${Sc(JSON.stringify(s))})`}})}Zc.displayName=`ScrollRestoration`;function Qc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $c(e){let t=_.useContext(fs);return yo(t,Qc(e)),t}function el(e){let t=_.useContext(ps);return yo(t,Qc(e)),t}function tl(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Ms(),d=ks(),f=Ps(e,{relative:o});return _.useCallback(p=>{if(mc(p,t)){p.preventDefault();let t=n===void 0?wo(d)===wo(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var nl=0,rl=()=>`__${String(++nl)}__`;function il(){let{router:e}=$c(`useSubmit`),{basename:t}=_.useContext(vs),n=Ys(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=yc(e,t);a.navigate===!1?await r(a.fetcherKey||rl(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function al(e,{relative:t}={}){let{basename:n}=_.useContext(vs),r=_.useContext(bs);yo(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ps(e||`.`,{relative:t})},o=ks();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ts([n,a.pathname])),wo(a)}var ol=`react-router-scroll-positions`,sl={};function cl(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:qo(e.pathname,n)||e.pathname},t)),i??=e.key,i}function ll({getKey:e,storageKey:t}={}){let{router:n}=$c(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=el(`useScrollRestoration`),{basename:a}=_.useContext(vs),o=ks(),s=Zs(),c=Xs();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),ul(_.useCallback(()=>{if(c.state===`idle`){let t=cl(o,s,a,e);sl[t]=window.scrollY}try{sessionStorage.setItem(t||ol,JSON.stringify(sl))}catch(e){bo(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||ol);e&&(sl=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(sl,()=>window.scrollY,e?(t,n)=>cl(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{bo(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function ul(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function dl(e,{relative:t}={}){let n=_.useContext(hs);yo(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$c(`useViewTransitionState`),i=Ps(e,{relative:t});if(!n.isTransitioning)return!1;let a=qo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=qo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Wo(i.pathname,o)!=null||Wo(i.pathname,a)!=null}var fl={lessThanXSeconds:{one:`1秒未満`,other:`{{count}}秒未満`,oneWithSuffix:`約1秒`,otherWithSuffix:`約{{count}}秒`},xSeconds:{one:`1秒`,other:`{{count}}秒`},halfAMinute:`30秒`,lessThanXMinutes:{one:`1分未満`,other:`{{count}}分未満`,oneWithSuffix:`約1分`,otherWithSuffix:`約{{count}}分`},xMinutes:{one:`1分`,other:`{{count}}分`},aboutXHours:{one:`約1時間`,other:`約{{count}}時間`},xHours:{one:`1時間`,other:`{{count}}時間`},xDays:{one:`1日`,other:`{{count}}日`},aboutXWeeks:{one:`約1週間`,other:`約{{count}}週間`},xWeeks:{one:`1週間`,other:`{{count}}週間`},aboutXMonths:{one:`約1か月`,other:`約{{count}}か月`},xMonths:{one:`1か月`,other:`{{count}}か月`},aboutXYears:{one:`約1年`,other:`約{{count}}年`},xYears:{one:`1年`,other:`{{count}}年`},overXYears:{one:`1年以上`,other:`{{count}}年以上`},almostXYears:{one:`1年近く`,other:`{{count}}年近く`}},pl=(e,t,n)=>{n||={};let r,i=fl[e];return r=typeof i==`string`?i:t===1?n.addSuffix&&i.oneWithSuffix?i.oneWithSuffix:i.one:n.addSuffix&&i.otherWithSuffix?i.otherWithSuffix.replace(`{{count}}`,String(t)):i.other.replace(`{{count}}`,String(t)),n.addSuffix?n.comparison&&n.comparison>0?r+`後`:r+`前`:r},ml={date:va({formats:{full:`y年M月d日EEEE`,long:`y年M月d日`,medium:`y/MM/dd`,short:`y/MM/dd`},defaultWidth:`full`}),time:va({formats:{full:`H時mm分ss秒 zzzz`,long:`H:mm:ss z`,medium:`H:mm:ss`,short:`H:mm`},defaultWidth:`full`}),dateTime:va({formats:{full:`{{date}} {{time}}`,long:`{{date}} {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},defaultWidth:`full`})},hl={lastWeek:`先週のeeeeのp`,yesterday:`昨日のp`,today:`今日のp`,tomorrow:`明日のp`,nextWeek:`翌週のeeeeのp`,other:`P`},gl={code:`ja`,formatDistance:pl,formatLong:ml,formatRelative:(e,t,n,r)=>hl[e],localize:{ordinalNumber:(e,t)=>{let n=Number(e);switch(String(t?.unit)){case`year`:return`${n}年`;case`quarter`:return`第${n}四半期`;case`month`:return`${n}月`;case`week`:return`第${n}週`;case`date`:return`${n}日`;case`hour`:return`${n}時`;case`minute`:return`${n}分`;case`second`:return`${n}秒`;default:return`${n}`}},era:Sa({values:{narrow:[`BC`,`AC`],abbreviated:[`紀元前`,`西暦`],wide:[`紀元前`,`西暦`]},defaultWidth:`wide`}),quarter:Sa({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`第1四半期`,`第2四半期`,`第3四半期`,`第4四半期`]},defaultWidth:`wide`,argumentCallback:e=>Number(e)-1}),month:Sa({values:{narrow:[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`],abbreviated:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`],wide:[`1月`,`2月`,`3月`,`4月`,`5月`,`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`]},defaultWidth:`wide`}),day:Sa({values:{narrow:[`日`,`月`,`火`,`水`,`木`,`金`,`土`],short:[`日`,`月`,`火`,`水`,`木`,`金`,`土`],abbreviated:[`日`,`月`,`火`,`水`,`木`,`金`,`土`],wide:[`日曜日`,`月曜日`,`火曜日`,`水曜日`,`木曜日`,`金曜日`,`土曜日`]},defaultWidth:`wide`}),dayPeriod:Sa({values:{narrow:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`},abbreviated:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`},wide:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`},abbreviated:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`},wide:{am:`午前`,pm:`午後`,midnight:`深夜`,noon:`正午`,morning:`朝`,afternoon:`午後`,evening:`夜`,night:`深夜`}},defaultFormattingWidth:`wide`})},match:{ordinalNumber:Da({matchPattern:/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:wa({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},defaultParseWidth:`any`}),quarter:wa({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:wa({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:`any`}),day:wa({matchPatterns:{narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},defaultMatchWidth:`wide`,parsePatterns:{any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},defaultParseWidth:`any`}),dayPeriod:wa({matchPatterns:{any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},defaultParseWidth:`any`})},options:{weekStartsOn:0,firstWeekContainsDate:1}},_l=o(((e,t)=>{var n=200,r=`__lodash_hash_undefined__`,i=1,a=2,o=9007199254740991,s=`[object Arguments]`,c=`[object Array]`,l=`[object AsyncFunction]`,u=`[object Boolean]`,d=`[object Date]`,f=`[object Error]`,p=`[object Function]`,m=`[object GeneratorFunction]`,h=`[object Map]`,g=`[object Number]`,_=`[object Null]`,v=`[object Object]`,y=`[object Promise]`,b=`[object Proxy]`,x=`[object RegExp]`,S=`[object Set]`,C=`[object String]`,w=`[object Symbol]`,T=`[object Undefined]`,E=`[object WeakMap]`,D=`[object ArrayBuffer]`,O=`[object DataView]`,k=`[object Float32Array]`,A=`[object Float64Array]`,j=`[object Int8Array]`,M=`[object Int16Array]`,ee=`[object Int32Array]`,N=`[object Uint8Array]`,te=`[object Uint8ClampedArray]`,P=`[object Uint16Array]`,F=`[object Uint32Array]`,I=/[\\^$.*+?()[\]{}|]/g,ne=/^\[object .+?Constructor\]$/,re=/^(?:0|[1-9]\d*)$/,L={};L[k]=L[A]=L[j]=L[M]=L[ee]=L[N]=L[te]=L[P]=L[F]=!0,L[s]=L[c]=L[D]=L[u]=L[O]=L[d]=L[f]=L[p]=L[h]=L[g]=L[v]=L[x]=L[S]=L[C]=L[E]=!1;var R=typeof global==`object`&&global&&global.Object===Object&&global,ie=typeof self==`object`&&self&&self.Object===Object&&self,ae=R||ie||Function(`return this`)(),oe=typeof e==`object`&&e&&!e.nodeType&&e,se=oe&&typeof t==`object`&&t&&!t.nodeType&&t,ce=se&&se.exports===oe,le=ce&&R.process,ue=function(){try{return le&&le.binding&&le.binding(`util`)}catch{}}(),de=ue&&ue.isTypedArray;function fe(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function pe(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function me(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function he(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function ge(e){return function(t){return e(t)}}function _e(e,t){return e.has(t)}function ve(e,t){return e?.[t]}function ye(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function be(e,t){return function(n){return e(t(n))}}function xe(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var Se=Array.prototype,Ce=Function.prototype,we=Object.prototype,Te=ae[`__core-js_shared__`],Ee=Ce.toString,De=we.hasOwnProperty,Oe=function(){var e=/[^.]+$/.exec(Te&&Te.keys&&Te.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),ke=we.toString,Ae=RegExp(`^`+Ee.call(De).replace(I,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),je=ce?ae.Buffer:void 0,Me=ae.Symbol,Ne=ae.Uint8Array,Pe=we.propertyIsEnumerable,Fe=Se.splice,Ie=Me?Me.toStringTag:void 0,Le=Object.getOwnPropertySymbols,Re=je?je.isBuffer:void 0,ze=be(Object.keys,Object),Be=Vt(ae,`DataView`),Ve=Vt(ae,`Map`),He=Vt(ae,`Promise`),Ue=Vt(ae,`Set`),We=Vt(ae,`WeakMap`),Ge=Vt(Object,`create`),Ke=Xt(Be),qe=Xt(Ve),Je=Xt(He),Ye=Xt(Ue),Xe=Xt(We),Ze=Me?Me.prototype:void 0,Qe=Ze?Ze.valueOf:void 0;function $e(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function et(){this.__data__=Ge?Ge(null):{},this.size=0}function tt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function nt(e){var t=this.__data__;if(Ge){var n=t[e];return n===r?void 0:n}return De.call(t,e)?t[e]:void 0}function rt(e){var t=this.__data__;return Ge?t[e]!==void 0:De.call(t,e)}function it(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ge&&t===void 0?r:t,this}$e.prototype.clear=et,$e.prototype.delete=tt,$e.prototype.get=nt,$e.prototype.has=rt,$e.prototype.set=it;function at(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ot(){this.__data__=[],this.size=0}function st(e){var t=this.__data__,n=Dt(t,e);return n<0?!1:(n==t.length-1?t.pop():Fe.call(t,n,1),--this.size,!0)}function ct(e){var t=this.__data__,n=Dt(t,e);return n<0?void 0:t[n][1]}function lt(e){return Dt(this.__data__,e)>-1}function ut(e,t){var n=this.__data__,r=Dt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}at.prototype.clear=ot,at.prototype.delete=st,at.prototype.get=ct,at.prototype.has=lt,at.prototype.set=ut;function dt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ft(){this.size=0,this.__data__={hash:new $e,map:new(Ve||at),string:new $e}}function pt(e){var t=Bt(this,e).delete(e);return this.size-=t?1:0,t}function mt(e){return Bt(this,e).get(e)}function ht(e){return Bt(this,e).has(e)}function gt(e,t){var n=Bt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}dt.prototype.clear=ft,dt.prototype.delete=pt,dt.prototype.get=mt,dt.prototype.has=ht,dt.prototype.set=gt;function _t(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new dt;++t<n;)this.add(e[t])}function vt(e){return this.__data__.set(e,r),this}function yt(e){return this.__data__.has(e)}_t.prototype.add=_t.prototype.push=vt,_t.prototype.has=yt;function bt(e){this.size=(this.__data__=new at(e)).size}function xt(){this.__data__=new at,this.size=0}function St(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Ct(e){return this.__data__.get(e)}function wt(e){return this.__data__.has(e)}function Tt(e,t){var r=this.__data__;if(r instanceof at){var i=r.__data__;if(!Ve||i.length<n-1)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new dt(i)}return r.set(e,t),this.size=r.size,this}bt.prototype.clear=xt,bt.prototype.delete=St,bt.prototype.get=Ct,bt.prototype.has=wt,bt.prototype.set=Tt;function Et(e,t){var n=$t(e),r=!n&&Qt(e),i=!n&&!r&&tn(e),a=!n&&!r&&!i&&cn(e),o=n||r||i||a,s=o?he(e.length,String):[],c=s.length;for(var l in e)(t||De.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Gt(l,c)))&&s.push(l);return s}function Dt(e,t){for(var n=e.length;n--;)if(Zt(e[n][0],t))return n;return-1}function Ot(e,t,n){var r=t(e);return $t(e)?r:pe(r,n(e))}function kt(e){return e==null?e===void 0?T:_:Ie&&Ie in Object(e)?Ht(e):Yt(e)}function At(e){return sn(e)&&kt(e)==s}function jt(e,t,n,r,i){return e===t?!0:e==null||t==null||!sn(e)&&!sn(t)?e!==e&&t!==t:Mt(e,t,n,r,jt,i)}function Mt(e,t,n,r,a,o){var l=$t(e),u=$t(t),d=l?c:Wt(e),f=u?c:Wt(t);d=d==s?v:d,f=f==s?v:f;var p=d==v,m=f==v,h=d==f;if(h&&tn(e)){if(!tn(t))return!1;l=!0,p=!1}if(h&&!p)return o||=new bt,l||cn(e)?It(e,t,n,r,a,o):Lt(e,t,d,n,r,a,o);if(!(n&i)){var g=p&&De.call(e,`__wrapped__`),_=m&&De.call(t,`__wrapped__`);if(g||_){var y=g?e.value():e,b=_?t.value():t;return o||=new bt,a(y,b,n,r,o)}}return h?(o||=new bt,Rt(e,t,n,r,a,o)):!1}function Nt(e){return!on(e)||qt(e)?!1:(rn(e)?Ae:ne).test(Xt(e))}function Pt(e){return sn(e)&&an(e.length)&&!!L[kt(e)]}function Ft(e){if(!Jt(e))return ze(e);var t=[];for(var n in Object(e))De.call(e,n)&&n!=`constructor`&&t.push(n);return t}function It(e,t,n,r,o,s){var c=n&i,l=e.length,u=t.length;if(l!=u&&!(c&&u>l))return!1;var d=s.get(e);if(d&&s.get(t))return d==t;var f=-1,p=!0,m=n&a?new _t:void 0;for(s.set(e,t),s.set(t,e);++f<l;){var h=e[f],g=t[f];if(r)var _=c?r(g,h,f,t,e,s):r(h,g,f,e,t,s);if(_!==void 0){if(_)continue;p=!1;break}if(m){if(!me(t,function(e,t){if(!_e(m,t)&&(h===e||o(h,e,n,r,s)))return m.push(t)})){p=!1;break}}else if(!(h===g||o(h,g,n,r,s))){p=!1;break}}return s.delete(e),s.delete(t),p}function Lt(e,t,n,r,o,s,c){switch(n){case O:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case D:return!(e.byteLength!=t.byteLength||!s(new Ne(e),new Ne(t)));case u:case d:case g:return Zt(+e,+t);case f:return e.name==t.name&&e.message==t.message;case x:case C:return e==t+``;case h:var l=ye;case S:var p=r&i;if(l||=xe,e.size!=t.size&&!p)return!1;var m=c.get(e);if(m)return m==t;r|=a,c.set(e,t);var _=It(l(e),l(t),r,o,s,c);return c.delete(e),_;case w:if(Qe)return Qe.call(e)==Qe.call(t)}return!1}function Rt(e,t,n,r,a,o){var s=n&i,c=zt(e),l=c.length;if(l!=zt(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:De.call(t,d)))return!1}var f=o.get(e);if(f&&o.get(t))return f==t;var p=!0;o.set(e,t),o.set(t,e);for(var m=s;++u<l;){d=c[u];var h=e[d],g=t[d];if(r)var _=s?r(g,h,d,t,e,o):r(h,g,d,e,t,o);if(!(_===void 0?h===g||a(h,g,n,r,o):_)){p=!1;break}m||=d==`constructor`}if(p&&!m){var v=e.constructor,y=t.constructor;v!=y&&`constructor`in e&&`constructor`in t&&!(typeof v==`function`&&v instanceof v&&typeof y==`function`&&y instanceof y)&&(p=!1)}return o.delete(e),o.delete(t),p}function zt(e){return Ot(e,ln,Ut)}function Bt(e,t){var n=e.__data__;return Kt(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Vt(e,t){var n=ve(e,t);return Nt(n)?n:void 0}function Ht(e){var t=De.call(e,Ie),n=e[Ie];try{e[Ie]=void 0;var r=!0}catch{}var i=ke.call(e);return r&&(t?e[Ie]=n:delete e[Ie]),i}var Ut=Le?function(e){return e==null?[]:(e=Object(e),fe(Le(e),function(t){return Pe.call(e,t)}))}:un,Wt=kt;(Be&&Wt(new Be(new ArrayBuffer(1)))!=O||Ve&&Wt(new Ve)!=h||He&&Wt(He.resolve())!=y||Ue&&Wt(new Ue)!=S||We&&Wt(new We)!=E)&&(Wt=function(e){var t=kt(e),n=t==v?e.constructor:void 0,r=n?Xt(n):``;if(r)switch(r){case Ke:return O;case qe:return h;case Je:return y;case Ye:return S;case Xe:return E}return t});function Gt(e,t){return t??=o,!!t&&(typeof e==`number`||re.test(e))&&e>-1&&e%1==0&&e<t}function Kt(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function qt(e){return!!Oe&&Oe in e}function Jt(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||we)}function Yt(e){return ke.call(e)}function Xt(e){if(e!=null){try{return Ee.call(e)}catch{}try{return e+``}catch{}}return``}function Zt(e,t){return e===t||e!==e&&t!==t}var Qt=At(function(){return arguments}())?At:function(e){return sn(e)&&De.call(e,`callee`)&&!Pe.call(e,`callee`)},$t=Array.isArray;function en(e){return e!=null&&an(e.length)&&!rn(e)}var tn=Re||dn;function nn(e,t){return jt(e,t)}function rn(e){if(!on(e))return!1;var t=kt(e);return t==p||t==m||t==l||t==b}function an(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=o}function on(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function sn(e){return typeof e==`object`&&!!e}var cn=de?ge(de):Pt;function ln(e){return en(e)?Et(e):Ft(e)}function un(){return[]}function dn(){return!1}t.exports=nn})),vl=o(((e,t)=>{var n=`Expected a function`,r=NaN,i=`[object Symbol]`,a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u=typeof global==`object`&&global&&global.Object===Object&&global,d=typeof self==`object`&&self&&self.Object===Object&&self,f=u||d||Function(`return this`)(),p=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return f.Date.now()};function _(e,t,r){var i,a,o,s,c,l,u=0,d=!1,f=!1,p=!0;if(typeof e!=`function`)throw TypeError(n);t=x(t)||0,v(r)&&(d=!!r.leading,f=`maxWait`in r,o=f?m(x(r.maxWait)||0,t):o,p=`trailing`in r?!!r.trailing:p);function _(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n),s}function y(e){return u=e,c=setTimeout(C,t),d?_(e):s}function b(e){var n=e-l,r=e-u,i=t-n;return f?h(i,o-r):i}function S(e){var n=e-l,r=e-u;return l===void 0||n>=t||n<0||f&&r>=o}function C(){var e=g();if(S(e))return w(e);c=setTimeout(C,b(e))}function w(e){return c=void 0,p&&i?_(e):(i=a=void 0,s)}function T(){c!==void 0&&clearTimeout(c),u=0,i=l=a=c=void 0}function E(){return c===void 0?s:w(g())}function D(){var e=g(),n=S(e);if(i=arguments,a=this,l=e,n){if(c===void 0)return y(l);if(f)return c=setTimeout(C,t),_(l)}return c===void 0&&(c=setTimeout(C,t)),s}return D.cancel=T,D.flush=E,D}function v(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function y(e){return!!e&&typeof e==`object`}function b(e){return typeof e==`symbol`||y(e)&&p.call(e)==i}function x(e){if(typeof e==`number`)return e;if(b(e))return r;if(v(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=v(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(a,``);var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):o.test(e)?r:+e}t.exports=_})),yl=o(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0});function n(e){return typeof e==`object`&&!(`toString`in e)?Object.prototype.toString.call(e).slice(8,-1):e}var r=typeof process==`object`&&!0;function i(e,t){if(!e)throw Error(r?`Invariant failed`:t())}e.invariant=i;var a=Object.prototype.hasOwnProperty,o=Array.prototype.splice,s=Object.prototype.toString;function c(e){return s.call(e).slice(8,-1)}var l=Object.assign||(function(e,t){return u(t).forEach(function(n){a.call(t,n)&&(e[n]=t[n])}),e}),u=typeof Object.getOwnPropertySymbols==`function`?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?l(e.constructor(e.length),e):c(e)===`Map`?new Map(e):c(e)===`Set`?new Set(e):e&&typeof e==`object`?l(Object.create(Object.getPrototypeOf(e)),e):e}var f=function(){function e(){this.commands=l({},p),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return new e().update}}return Object.defineProperty(e.prototype,`isEquals`,{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,r=typeof t==`function`?{$apply:t}:t;Array.isArray(e)&&Array.isArray(r)||i(!Array.isArray(r),function(){return`update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.`}),i(typeof r==`object`&&!!r,function(){return`update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the `+(`following commands: `+Object.keys(n.commands).join(`, `)+`.`)});var o=e;return u(r).forEach(function(t){if(a.call(n.commands,t)){var i=e===o;o=n.commands[t](r[t],o,r,e),i&&n.isEquals(o,e)&&(o=e)}else{var s=c(e)===`Map`?n.update(e.get(t),r[t]):n.update(e[t],r[t]),l=c(o)===`Map`?o.get(t):o[t];(!n.isEquals(s,l)||s===void 0&&!a.call(e,t))&&(o===e&&(o=d(e)),c(o)===`Map`?o.set(t,s):o[t]=s)}}),o},e}();e.Context=f;var p={$push:function(e,t,n){return h(t,n,`$push`),e.length?t.concat(e):t},$unshift:function(e,t,n){return h(t,n,`$unshift`),e.length?e.concat(t):t},$splice:function(e,t,n,r){return _(t,n),e.forEach(function(e){v(e),t===r&&e.length&&(t=d(r)),o.apply(t,e)}),t},$set:function(e,t,n){return b(n),e},$toggle:function(e,t){g(e,`$toggle`);var n=e.length?d(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return g(e,`$unset`),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=d(r)),delete t[e])}),t},$add:function(e,t,n,r){return S(t,`$add`),g(e,`$add`),c(t)===`Map`?e.forEach(function(e){var n=e[0],i=e[1];t===r&&t.get(n)!==i&&(t=d(r)),t.set(n,i)}):e.forEach(function(e){t===r&&!t.has(e)&&(t=d(r)),t.add(e)}),t},$remove:function(e,t,n,r){return S(t,`$remove`),g(e,`$remove`),e.forEach(function(e){t===r&&t.has(e)&&(t=d(r)),t.delete(e)}),t},$merge:function(e,t,n,r){return x(t,e),u(e).forEach(function(n){e[n]!==t[n]&&(t===r&&(t=d(r)),t[n]=e[n])}),t},$apply:function(e,t){return y(e),e(t)}},m=new f;e.isEquals=m.update.isEquals,e.extend=m.extend,e.default=m.update,e.default.default=t.exports=l(e.default,e);function h(e,t,r){i(Array.isArray(e),function(){return`update(): expected target of `+n(r)+` to be an array; got `+n(e)+`.`}),g(t[r],r)}function g(e,t){i(Array.isArray(e),function(){return`update(): expected spec of `+n(t)+` to be an array; got `+n(e)+`. Did you forget to wrap your parameter in an array?`})}function _(e,t){i(Array.isArray(e),function(){return`Expected $splice target to be an array; got `+n(e)}),v(t.$splice)}function v(e){i(Array.isArray(e),function(){return`update(): expected spec of $splice to be an array of arrays; got `+n(e)+`. Did you forget to wrap your parameters in an array?`})}function y(e){i(typeof e==`function`,function(){return`update(): expected spec of $apply to be a function; got `+n(e)+`.`})}function b(e){i(Object.keys(e).length===1,function(){return`Cannot have more than one key in an object with $set`})}function x(e,t){i(t&&typeof t==`object`,function(){return`update(): $merge expects a spec of type 'object'; got `+n(t)}),i(e&&typeof e==`object`,function(){return`update(): $merge expects a target of type 'object'; got `+n(e)})}function S(e,t){var r=c(e);i(r===`Map`||r===`Set`,function(){return`update(): `+n(t)+` expects a target of type Set or Map; got `+n(r)})}})),K=Ci(),bl=c(m()),xl=c(_l()),Sl=c(vl()),Cl=c(yl()),wl={ui:`Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;`,data:`Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;`},Tl={icons:{weights:{light:1,regular:1.5,heavy:3,strong:5}},form:{button:{xsmall:{height:`20px`,padding:`0 10px`,iconSize:12},small:{height:`30px`,padding:`0 20px`,iconSize:14},normal:{height:`40px`,padding:`0 20px`,iconSize:16},large:{height:`60px`,padding:`0 20px`,iconSize:20}},input:{height:`40px`},switch:{outer:{width:`38px`,height:`22px`,borderRadius:`11px`},inner:{width:`16px`,height:`16px`,borderRadius:`8px`},positions:{top:`2px`,off:`2px`,neutral:`10px`,locked:`2px`,on:`18px`}}},global:{mainMenu:{width:{open:`280px`,closed:`80px`}}}},El={easing:{primary:{inOut:`cubic-bezier(0.87, 0, 0.13, 1)`,out:`cubic-bezier(0.16, 1, 0.3, 1)`,in:`cubic-bezier(0.7, 0, 0.84, 0)`}},speed:{faster:`0.085s`,fast:`0.175s`,normal:`0.35s`,slow:`0.7s`,slower:`1.4s`,slowest:`2.8s`}},Dl={small:0,medium:768,large:1024,xlarge:1280,xxlarge:1536},Ol={small:`(min-width: ${Dl.small}px)`,medium:`(min-width: ${Dl.medium}px)`,large:`(min-width: ${Dl.large}px)`,xlarge:`(min-width: ${Dl.xlarge}px)`,xxlarge:`(min-width: ${Dl.xxlarge}px)`},kl={pageHeader:{introduction:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:300,lineHeight:`25px`,textDecoration:`none`,color:`var(--grey-11)`},areaTitle:{textAlign:`left`,fontSize:`12px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-11)`},mainTitle:{textAlign:`left`,fontSize:`26px`,fontWeight:600,textDecoration:`none`,color:`var(--grey-12)`}},form:{label:{meta:{textAlign:`left`,fontSize:`14px`,fontWeight:300,textDecoration:`none`,color:`var(--grey-11)`},default:{textAlign:`left`,fontSize:`14px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-11)`},disabled:{textAlign:`left`,fontSize:`16px`,fontWeight:300,textDecoration:`none`,color:`var(--grey-11)`},failure:{textAlign:`left`,fontSize:`16px`,fontWeight:400,textDecoration:`none`,color:`var(--warning-8)`},"meta(Selected)":{textAlign:`left`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--primary-8)`}},tip:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,lineHeight:`25px`,textDecoration:`none`,color:`var(--primary-7)`},button:{secondary:{normal:{textAlign:`center`,fontSize:`16px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},large:{textAlign:`center`,fontSize:`20px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},small:{textAlign:`center`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},xsmall:{textAlign:`center`,fontSize:`12px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`}},primary:{large:{textAlign:`center`,fontSize:`20px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},normal:{textAlign:`center`,fontSize:`16px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},small:{textAlign:`center`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},xsmall:{textAlign:`center`,fontSize:`12px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`}},danger:{large:{textAlign:`center`,fontSize:`20px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},normal:{textAlign:`center`,fontSize:`16px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},small:{textAlign:`center`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`},xsmall:{textAlign:`center`,fontSize:`12px`,fontWeight:600,textDecoration:`none`,color:`var(--white-1)`}}},input:{label:{textAlign:`left`,fontSize:`14px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-11)`},placeholder:{normal:{textAlign:`left`,fontStyle:`italic`,fontSize:`16px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-11)`},compact:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,lineHeight:`15px`,textDecoration:`none`,color:`var(--grey-11)`}},value:{normal:{textAlign:`left`,fontSize:`16px`,fontWeight:500,lineHeight:`25px`,textDecoration:`none`,color:`var(--grey-12)`},compact:{textAlign:`left`,fontSize:`14px`,fontWeight:500,lineHeight:`15px`,textDecoration:`none`,color:`var(--grey-12)`}}},labelInformation:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:300,lineHeight:`25px`,textDecoration:`none`,color:`var(--grey-11)`},select:{option:{textAlign:`left`,fontSize:`16px`,fontWeight:500,lineHeight:`15px`,textDecoration:`none`,color:`var(--grey-11)`},selectedValue:{textAlign:`left`,fontSize:`16px`,fontWeight:500,lineHeight:`15px`,textDecoration:`none`,color:`var(--black-11)`},"option(Hover)":{textAlign:`left`,fontSize:`16px`,fontWeight:500,lineHeight:`15px`,textDecoration:`none`,color:`var(--primary-11)`}},feedback:{message:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,lineHeight:`20px`,textDecoration:`none`,color:`var(--white-1)`}}},content:{"section-H2":{textAlign:`left`,fontSize:`20px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-12)`},sectionH3:{textAlign:`left`,fontSize:`16px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-12)`},actionParagraph:{textAlign:`left`,fontSize:`14px`,fontWeight:300,lineHeight:`25px`,textDecoration:`none`,color:`var(--grey-11)`},hyperlink:{hover:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,lineHeight:`25px`,textDecoration:`none`,color:`var(--primary-8)`},base:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,lineHeight:`25px`,textDecoration:`none`,color:`var(--primary-9)`}}},feedbackBar:{message:{textAlign:`left`,fontSize:`14px`,fontWeight:400,lineHeight:`15px`,letterSpacing:`-0.2px`,textDecoration:`none`,color:`var(--white-1)`}},searchBar:{placeholder:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:700,textDecoration:`none`,color:`var(--grey-11)`},value:{textAlign:`left`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--grey-12)`}},meta:{tagList:{emptyStates:{normal:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-11)`},small:{textAlign:`left`,fontStyle:`italic`,fontSize:`12px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-11)`}},item:{normal:{textAlign:`left`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--grey-11)`},small:{textAlign:`left`,fontSize:`12px`,fontWeight:600,textDecoration:`none`,color:`var(--grey-11)`}}}},table:{columnData:{normalImportance:{right:{textAlign:`right`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`},left:{textAlign:`left`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`},center:{textAlign:`center`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`}},highImportance:{right:{textAlign:`right`,fontSize:`14px`,fontWeight:900,textDecoration:`none`,color:`var(--grey-12)`},center:{textAlign:`center`,fontSize:`14px`,fontWeight:900,textDecoration:`none`,color:`var(--grey-12)`},left:{textAlign:`left`,fontSize:`14px`,fontWeight:900,textDecoration:`none`,color:`var(--grey-12)`}},firstColumn:{textAlign:`left`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-12)`},lowImportance:{right:{textAlign:`right`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`},center:{textAlign:`center`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`},left:{textAlign:`left`,fontStyle:`italic`,fontSize:`14px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`}},unit:{textAlign:`right`,fontStyle:`italic`,fontSize:`12px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a11)`}},header:{center:{textAlign:`center`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`},left:{textAlign:`left`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`},right:{textAlign:`right`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`}},subHeader:{center:{textAlign:`center`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`},left:{textAlign:`left`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`},right:{textAlign:`right`,fontSize:`14px`,fontWeight:700,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-11)`}}},filters:{datepicker:{metaHeader:{default:{textAlign:`left`,fontSize:`14px`,fontWeight:300,textDecoration:`none`,color:`var(--grey-11)`},active:{textAlign:`left`,fontSize:`14px`,fontWeight:600,textDecoration:`none`,color:`var(--primary-8)`}},calendar:{active:{textAlign:`center`,fontSize:`14px`,fontWeight:400,textDecoration:`none`,color:`var(--white-1)`},otherMonth:{textAlign:`center`,fontSize:`14px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-a8)`},default:{textAlign:`center`,fontSize:`14px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-11)`},header:{textAlign:`center`,fontSize:`12px`,fontWeight:700,textDecoration:`none`,color:`var(--grey-a12)`}},monthLink:{default:{textAlign:`center`,fontSize:`12px`,fontWeight:700,lineHeight:`20px`,textTransform:`uppercase`,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--grey-9)`},hover:{textAlign:`center`,fontSize:`12px`,fontWeight:700,lineHeight:`20px`,textTransform:`uppercase`,letterSpacing:`0.4px`,textDecoration:`none`,color:`var(--white-1)`}},focusedMonth:{textAlign:`center`,fontSize:`20px`,fontWeight:400,lineHeight:`20px`,letterSpacing:`0.5px`,textDecoration:`none`,color:`var(--grey-11)`},focusedYear:{textAlign:`center`,fontSize:`10px`,fontWeight:700,lineHeight:`20px`,textTransform:`uppercase`,letterSpacing:`0.3333333px`,textDecoration:`none`,color:`var(--grey-11)`}},value:{textAlign:`left`,fontSize:`14px`,fontWeight:500,letterSpacing:`0.2px`,textDecoration:`none`,color:`var(--grey-11)`},subOption:{label:{textAlign:`left`,fontSize:`12px`,fontWeight:300,textDecoration:`none`,color:`var(--grey-11)`},value:{textAlign:`left`,fontSize:`13px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-a12)`}},presetAction:{textAlign:`left`,fontSize:`13px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-12)`},filterButton:{default:{textAlign:`left`,fontSize:`12px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-11)`},active:{textAlign:`left`,fontSize:`12px`,fontWeight:400,textDecoration:`none`,color:`var(--white-1)`},hover:{textAlign:`left`,fontSize:`12px`,fontWeight:400,textDecoration:`none`,color:`var(--white-1)`}},searchInput:{placeholder:{textAlign:`left`,fontStyle:`italic`,fontSize:`12px`,fontWeight:500,textDecoration:`none`,color:`var(--grey-11)`},value:{textAlign:`left`,fontSize:`12px`,fontWeight:400,textDecoration:`none`,color:`var(--grey-12)`}}},tables:{groupName:{textAlign:`left`,fontSize:`12px`,fontWeight:400,letterSpacing:`0.3px`,textDecoration:`none`,color:`var(--grey-a11)`}}},Al={pureBase:`var(--white-1)`,pureTop:`var(--black-1)`,divider:`var(--grey-6)`,icons:{inverse:`var(--grey-1)`,mono:`var(--grey-12)`,dimmed:`var(--grey-11)`,subtle:`var(--grey-10)`,primary:`var(--primary-9)`,danger:`var(--warning-9)`,white:`var(--white-1)`},menu:{active:`var(--primary-9)`,hover:`var(--primary-8)`,default:`var(--grey-2)`,indicator:`var(--grey-a1)`,passive:`var(--primary-a7)`},feedback:{error:`var(--warning-8)`,info:`var(--primary-7)`,neutral:`var(--grey-9)`,success:`var(--success-8)`,warning:`var(--caution-10)`},status:{caution:`var(--caution-10)`,danger:`var(--warning-8)`,folder:`var(--primary-7)`,highlight:`var(--primary-7)`,good:`var(--success-7)`,neutral:`var(--grey-5)`},transparent:`var(--black-a1)`,input:{border:{default:`var(--grey-7)`}}},jl={fontFamily:wl,dimensions:Tl,typography:kl,colors:Al,styles:{generic:{transparent:{}},form:{input:{default:{normal:{backgroundColor:`var(--grey-1)`,borderColor:Al.input.border.default,border:Al.input.border.default+` 1px solid`},focused:{boxShadow:`0px 3px 7px 0px var(--primary-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`}},disabled:{normal:{backgroundColor:`var(--primary-2)`,borderColor:`var(--grey-7)`,border:`var(--grey-7) 1px solid`}},subdivision:{backgroundColor:`var(--grey-7)`},required:{focused:{boxShadow:`0px 3px 7px 0px var(--primary-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 2px solid`},normal:{borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`,backgroundColor:`var(--grey-1)`}},valid:{focused:{boxShadow:`0px 3px 5px 0px var(--success-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--success-7)`,border:`var(--success-7) 2px solid`},normal:{borderColor:`var(--success-7)`,border:`var(--success-7) 1px solid`,backgroundColor:`var(--grey-1)`}},invalid:{focused:{boxShadow:`0px 3px 7px 0px var(--warning-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--warning-8)`,border:`var(--warning-8) 2px solid`},normal:{borderColor:`var(--warning-8)`,border:`var(--warning-8) 1px solid`,backgroundColor:`var(--grey-1)`}},processing:{focused:{boxShadow:`0px 3px 7px 0px var(--primary-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 2px solid`},normal:{backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`}},seperatedValues:{background:{backgroundColor:`var(--primary-7)`,backgroundImage:`linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)`},hoverHighlight:{backgroundColor:`var(--primary-7)`}}},button:{primary:{default:{backgroundColor:`var(--primary-9)`,backgroundImage:`linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)`},hover:{backgroundColor:`var(--primary-10)`},active:{backgroundColor:`var(--primary-9)`},divider:{backgroundColor:`var(--primary-a8)`},disabled:{backgroundColor:`var(--primary-a10)`,backgroundImage:`linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)`},actionArea:{backgroundColor:`var(--primary-9)`,backgroundImage:`linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)`}},secondary:{default:{backgroundColor:`var(--grey-9)`},hover:{backgroundColor:`var(--grey-10)`},active:{backgroundColor:`var(--grey-9)`},disabled:{backgroundColor:`var(--grey-a10)`},divider:{backgroundColor:`var(--grey-a8)`},actionArea:{backgroundColor:`var(--grey-9)`,backgroundImage:`linear-gradient(135.00deg, var(--grey-9) 0%, var(--grey-8) 100%)`}},danger:{default:{backgroundColor:`var(--warning-9)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)`},hover:{backgroundColor:`var(--warning-10)`},active:{backgroundColor:`var(--warning-9)`},disabled:{backgroundColor:`var(--warning-a10)`},divider:{backgroundColor:`var(--warning-8)`},actionArea:{backgroundColor:`var(--warning-9)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)`}}},switch:{off:{default:{outer:{backgroundColor:`var(--grey-3)`,backgroundImage:`linear-gradient(180.00deg, var(--primary-2) 0%, var(--primary-3) 100%)`,borderColor:`var(--grey-a8)`,border:`var(--grey-a8) 1px solid`},inner:{backgroundColor:`var(--primary-7)`,backgroundImage:`linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)`}},disabled:{outer:{backgroundColor:`var(--grey-1)`,backgroundImage:`linear-gradient(180.00deg, var(--grey-1)0%, var(--grey-1) 100%)`,borderColor:`var(--grey-a7)`,border:`var(--grey-a7) 1px solid`},inner:{backgroundColor:`var(--grey-7)`}},loading:{outer:{backgroundColor:`var(--grey-3)`,backgroundImage:`linear-gradient(180.00deg, var(--grey-3) 0%, var(--primary-3) 100%)`,borderColor:`var(--grey-a8)`,border:`var(--grey-a8) 1px solid`}}},on:{default:{outer:{backgroundColor:`var(--primary-7)`,backgroundImage:`linear-gradient(317.51deg, var(--primary-7) 0%, var(--primary-7) 100%)`,borderColor:`var(--primary-8)`,border:`var(--primary-8) 1px solid`},inner:{backgroundColor:`var(--white-1)`}},disabled:{outer:{backgroundColor:`var(--primary-5)`,backgroundImage:`linear-gradient(180.00deg, var(--primary-5) 0%, var(--primary-5) 100%)`,borderColor:`var(--primary-6)`,border:`var(--primary-6) 1px solid`},inner:{backgroundColor:`var(--white-1)`}},loading:{outer:{backgroundColor:`var(--primary-a7)`,backgroundImage:`linear-gradient(315.00deg, var(--primary-a7) 0%, var(--primary-a7) 100%)`,borderColor:`var(--primary-a8)`,border:`var(--primary-a8) 1px solid`}}},failure:{default:{outer:{backgroundColor:`var(--warning-9)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)`,borderColor:`var(--warning-9)`,border:`var(--warning-9) 1px solid`},inner:{backgroundColor:`var(--white-1)`}},loading:{outer:{backgroundColor:`var(--warning-8)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-8) 0.4%, var(--warning-8) 100%)`,borderColor:`var(--warning-8)`,border:`var(--warning-8) 1px solid`},inner:{backgroundColor:`var(--white-1)`}}},danger:{default:{outer:{backgroundColor:`var(--warning-11)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-11) 0%, var(--warning-8) 100%)`,borderColor:`var(--warning-8)`,border:`var(--warning-8) 1px solid`},inner:{backgroundColor:`var(--white-1)`}},loading:{outer:{backgroundColor:`var(--warning-8)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-8) 0%, var(--warning-7) 100%)`,borderColor:`var(--warning-8)`,border:`var(--warning-8) 1px solid`}},disabled:{outer:{backgroundColor:`var(--warning-7)`,backgroundImage:`linear-gradient(317.51deg, var(--warning-7) 0%, var(--caution-6) 100%)`,borderColor:`var(--warning-6)`,border:`var(--warning-6) 1px solid`},inner:{backgroundColor:`var(--white-1)`}}},locked:{default:{outer:{backgroundColor:`var(--grey-1) `,backgroundImage:`linear-gradient(180.00deg, var(--grey-1) 0%, var(--grey-1) 100%)`,borderColor:`var(--grey-a8)`,border:`var(--grey-a8) 1px solid`},inner:{backgroundColor:`var(--grey-8)`}}}},checkbox:{unchecked:{disabled:{backgroundColor:`var(--grey-1)`,borderColor:`var(--grey-6)`,border:`var(--grey-6) 2px solid`},default:{borderColor:`var(--grey-9)`,border:`var(--grey-9) 2px solid`},hover:{borderColor:`var(--primary-8)`,border:`var(--primary-8) 2px solid`}},checked:{disabled:{boxShadow:`inset 0px 1px 5px 0px var(--grey-a1)`,backgroundColor:`var(--grey-6)`},default:{boxShadow:`inset 0px 1px 5px 0px var(--grey-a1)`,backgroundColor:`var(--primary-8)`},hover:{boxShadow:`inset 0px 1px 5px 0px var(--grey-a1)`,backgroundColor:`var(--primary-8)`}},indeterminate:{hover:{boxShadow:`inset 0px 1px 5px 0px var(--grey-a1)`,backgroundColor:`var(--primary-6)`},default:{boxShadow:`inset 0px 1px 5px 0px var(--grey-a1)`,backgroundColor:`var(--primary-6)`}}}},indicators:{spinner:{danger:{base:{borderColor:`var(--warning-8)`,border:`var(--warning-8) 3px solid`},top:{borderColor:`var(--white-1)`,border:`var(--white-1) 3px solid`}},secondary:{top:{borderColor:`var(--white-1)`,border:`var(--white-1) 3px solid`},base:{borderColor:`var(--grey-8)`,border:`var(--grey-8) 3px solid`}},primary:{top:{borderColor:`var(--white-1)`,border:`var(--white-1) 3px solid`},base:{borderColor:`var(--primary-6)`,border:`var(--primary-6) 3px solid`}},simple:{top:{borderColor:`var(--white-1)`,border:`var(--white-1) 3px solid`},base:{borderColor:`var(--grey-a8)`,border:`var(--grey-a8) 3px solid`}}}},filters:{dropdownContainer:{background:{boxShadow:`0px 5px 25px 0px var(--primary-a1)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--grey-6)`,border:`var(--grey-6) 1px solid`},topBorder:{backgroundColor:`var(--primary-7)`}},filterButton:{default:{boxShadow:`0px 4px 9px 0px var(--primary-a1)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--grey-7)`,border:`var(--grey-7) 1px solid`,textColor:`var(--grey-11)`},active:{boxShadow:`0px 4px 9px 0px var(--primary-a1)`,backgroundColor:`var(--primary-7)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`,textColor:`var(--white-1)`},hover:{boxShadow:`0px 4px 9px 0px var(--primary-a1)`,backgroundColor:`var(--primary-7)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`,textColor:`var(--white-1)`}},searchInput:{default:{boxShadow:`0px 4px 9px 0px var(--primary-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--grey-7)`,border:`var(--grey-7) 1px solid`},focused:{boxShadow:`0px 4px 9px 0px var(--primary-a2)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-6)`,border:`var(--primary-6) 1px solid`}}},tables:{loadingOverlay:{backgroundColor:`var(--grey-2)`,backgroundImage:`linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)`},rows:{divider:{backgroundColor:Al.divider}},header:{groupLine:{backgroundColor:Al.divider},divider:{backgroundColor:Al.divider},sortable:{hover:{backgroundColor:`var(--grey-4)`},default:{backgroundColor:`var(--grey-2)`}}}},general:{divider:{backgroundColor:Al.divider}},feedbackBar:{neutral:{backgroundColor:Al.feedback.neutral},error:{backgroundColor:Al.feedback.error},info:{backgroundColor:Al.feedback.info},success:{backgroundColor:Al.feedback.success},warning:{backgroundColor:Al.feedback.warning}},filterButton:{active:{boxShadow:`0px 4px 9px 0px var(--primary-a1)`,backgroundColor:`var(--grey-1)`,borderColor:`var(--primary-7)`,border:`var(--primary-7) 1px solid`}}},animation:El,custom:{lines:{primary:{label:{fill:`#fff`},contrastLine:{stroke:`hsla(205deg, 80%, 45%, 100%);`},highlightLine:{stroke:`hsla(205deg, 45%, 90%, 90%);`},highlightLineBorder:{stroke:`hsla(204.8,53.4%,46.3%,100%);`},grabHandle:{fill:`hsla(205deg, 45%, 90%, 100%)`,stroke:`hsla(205deg, 45%, 100%, 100%)`},point:{fill:`hsla(205deg, 45%, 90%, 100%)`},grabHandleContrast:{stroke:`hsla(205deg, 80%, 45%, 100%)`},grabHandleText:{fill:`hsla(205deg, 80%, 25%, 100%);`},handleBase:{fill:`hsla(235deg, 100%, 80%, 100%);`},handleRingLayer:{stroke:`hsla(205deg, 100%, 89%, 100%);`},handleReactiveFill:{fill:`hsla(192deg, 100%, 45%, 100%);`},handleReactiveRing:{stroke:`hsla(205deg, 100%, 36%, 27%);`},handleContrastLayer:{stroke:`hsla(205deg, 100%, 36%, 15%);`},stopStart:{stopColor:` hsla(205deg, 100%, 15%, 35%);`},stopEnd:{stopColor:`hsla(205deg, 100%, 15%, 0%)`}},secondary:{label:{fill:`#fff`},contrastLine:{stroke:`hsla(120deg, 80%, 45%, 100%);`},highlightLine:{stroke:`hsla(120deg, 45%, 90%, 90%);`},highlightLineBorder:{stroke:`hsla(120deg, 81%, 70%, 90%);`},grabHandle:{fill:`hsla(120deg, 45%, 90%, 100%)`,stroke:`hsla(120deg, 45%, 100%, 100%)`},point:{fill:`hsla(120deg, 45%, 90%, 100%)`},grabHandleContrast:{stroke:`hsla(120deg, 80%, 45%, 100%)`},grabHandleText:{fill:`hsla(120deg, 80%, 25%, 100%);`},handleBase:{fill:`hsla(150deg, 100%, 80%, 100%);`},handleRingLayer:{stroke:`hsla(120deg, 100%, 89%, 100%);`},handleReactiveFill:{fill:`hsla(108deg, 100%, 45%, 100%);`},handleReactiveRing:{stroke:`hsla(120deg, 100%, 36%, 27%);`},handleContrastLayer:{stroke:`hsla(120deg, 100%, 36%, 15%);`},stopStart:{stopColor:` hsla(120deg, 100%, 15%, 35%);`},stopEnd:{stopColor:`hsla(120deg, 100%, 15%, 0%)`}},danger:{label:{fill:`#fff`},contrastLine:{stroke:`hsla(0, 80%, 45%, 100%);`},highlightLine:{stroke:`hsla(0, 45%, 90%, 90%);`},highlightLineBorder:{stroke:`hsla(0deg, 86%, 70%, 100%);`},grabHandle:{fill:`hsla(0, 45%, 90%, 100%)`,stroke:`hsla(0, 45%, 100%, 100%)`},point:{fill:`hsla(0, 45%, 90%, 100%)`},grabHandleText:{fill:`hsla(0, 80%, 25%, 100%);`},grabHandleContrast:{stroke:`hsla(0, 80%, 45%, 100%)`},handleBase:{fill:`hsla(30deg, 100%, 80%, 100%);`},handleRingLayer:{stroke:`hsla(0, 100%, 89%, 100%);`},handleReactiveFill:{fill:`hsla(348deg, 100%, 45%, 100%);`},handleReactiveRing:{stroke:`hsla(0deg, 100%, 36%, 27%);`},handleContrastLayer:{stroke:`hsla(0deg, 100%, 36%, 15%);`},stopStart:{stopColor:` hsla(0, 100%, 15%, 35%);`},stopEnd:{stopColor:`hsla(0, 100%, 15%, 0%);`}}}},deviceSize:Dl,deviceMediaQuery:Ol},Ml=Ln`

  ${z`
  /** Layouts */
  :root {
    --max-content-width: 1840px;
  }

  .content-layout {
    
    &-default {
      --content-layout-padding-top: 32px;
      --content-layout-padding-right: 48px;
      --content-layout-padding-bottom: 64px;
      --content-layout-padding-left: 64px;
      --utility-header-padding-top: 48px;

      @media ${Ol.xlarge}{
        --content-layout-padding-top: 32px;
        --content-layout-padding-right: 96px;
        --content-layout-padding-bottom: 64px;
        --content-layout-padding-left: 96px;
        --utility-header-padding-top: 48px;
      }

      @media ${Ol.xxlarge}{
        --content-layout-padding-top: 30px;
        --content-layout-padding-right: 120px;
        --content-layout-padding-bottom: 64px;
        --content-layout-padding-left: 120px;
        --utility-header-padding-top: 48px;
      }
    }

    &-fullscreen {
      --content-layout-padding-top: 0px;
      --content-layout-padding-right: 0px;
      --content-layout-padding-bottom: 0px;
      --content-layout-padding-left: 0px;
      --utility-header-padding-top: 0px;
      --max-content-width: none;
    }

    &-dashboard {
      --content-layout-padding-top: 32px;
      --content-layout-padding-right: 32px;
      --content-layout-padding-bottom: 32px;
      --content-layout-padding-left: 32px;
      --utility-header-padding-top: 32px;
      --max-content-width: none;
    }
  }
`};
  ${z`
  :root {

    --easing-primary-in-out: cubic-bezier(0.76, 0, 0.24, 1);
    --easing-primary-in: cubic-bezier(0.5, 0, 0.75, 0);
    --easing-primary-out: cubic-bezier(0.25, 1, 0.5, 1);
    
    --speed-faster: 0.085s;
    --speed-fast: 0.175s;
    --speed-normal: 0.35s;
    --speed-slow: 0.7s;
    --speed-slower: 1.4s;
    --speed-slowest: 2.8s;
    
  }
`};
  ${z`
  .light-theme {
    /* --- Light Mode --- */
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
    --primary-a1: #0055ff03;
    --primary-a2: #0066ff0a;
    --primary-a3: #006eff15;
    --primary-a4: #0079ff24;
    --primary-a5: #0077ff36;
    --primary-a6: #016fff4a;
    --primary-a7: #0066f364;
    --primary-a8: #0061eb89;
    --primary-a9: #006bff7f;
    --primary-a10: #0062e98a;
    --primary-a11: #00429cc3;
    --primary-a12: #00285bf4;

    --secondary-1: #fafefd;
    --secondary-2: #f1fcfa;
    --secondary-3: #e7f9f5;
    --secondary-4: #d9f3ee;
    --secondary-5: #c7ebe5;
    --secondary-6: #afdfd7;
    --secondary-7: #8dcec3;
    --secondary-8: #53b9ab;
    --secondary-9: #12a594;
    --secondary-10: #0e9888;
    --secondary-11: #067a6f;
    --secondary-12: #10302b;
    --secondary-a1: #05cd9b05;
    --secondary-a2: #01c8a40e;
    --secondary-a3: #02c09718;
    --secondary-a4: #02af8c26;
    --secondary-a5: #00a48938;
    --secondary-a6: #00998050;
    --secondary-a7: #01927a72;
    --secondary-a8: #009783ac;
    --secondary-a9: #009e8ced;
    --secondary-a10: #009281f1;
    --secondary-a11: #00776bf9;
    --secondary-a12: #00221def;

    --grey-1: #fcfcfd;
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
    --grey-a1: #00005503;
    --grey-a2: #00005506;
    --grey-a3: #00003310;
    --grey-a4: #00002d17;
    --grey-a5: #0009321f;
    --grey-a6: #00002f26;
    --grey-a7: #00062e32;
    --grey-a8: #00083046;
    --grey-a9: #00051d74;
    --grey-a10: #00071b7f;
    --grey-a11: #020b1d9f;
    --grey-a12: #020b1de3;

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
    --green-a1: #05c04304;
    --green-a2: #00c43b0d;
    --green-a3: #02ba3c16;
    --green-a4: #01a63522;
    --green-a5: #009b3633;
    --green-a6: #0193364b;
    --green-a7: #008c3d6d;
    --green-a8: #00934ca4;
    --green-a9: #008f4acf;
    --green-a10: #008346d6;
    --green-a11: #006b3be7;
    --green-a12: #002012ea;

    --orange-1: #fefcfb;
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
    --orange-a1: #c0430504;
    --orange-a2: #e860050b;
    --orange-a3: #ff6c0318;
    --orange-a4: #ff6e0028;
    --orange-a5: #ff6b013c;
    --orange-a6: #ff6b0158;
    --orange-a7: #ff66017e;
    --orange-a8: #f86300b1;
    --orange-a9: #f76300f7;
    --orange-a10: #ed5b00fa;
    --orange-a11: #bc4800fa;
    --orange-a12: #380e00ee;

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
    --red-a1: #aa000003;
    --red-a2: #b7000007;
    --red-a3: #bc0e0013;
    --red-a4: #f00f0022;
    --red-a5: #da0b002f;
    --red-a6: #c609003e;
    --red-a7: #b10a0051;
    --red-a8: #a6080069;
    --red-a9: #b300009a;
    --red-a10: #a50002a7;
    --red-a11: #970002b2;
    --red-a12: #3d0000da;

  }

  .dark-theme {
    /* --- Dark mode --- */
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
    --primary-a1: #0000;
    --primary-a2: #4d99ff1e;
    --primary-a3: #378aff41;
    --primary-a4: #2181ff5d;
    --primary-a5: #3089ff70;
    --primary-a6: #4293ff81;
    --primary-a7: #4c98ff97;
    --primary-a8: #4c97ffb5;
    --primary-a9: #80b5ff;
    --primary-a10: #7bb2fff3;
    --primary-a11: #81b7ff;
    --primary-a12: #cee3ff;

    --secondary-1: #091915;
    --secondary-2: #04201b;
    --secondary-3: #062923;
    --secondary-4: #07312b;
    --secondary-5: #083932;
    --secondary-6: #09443c;
    --secondary-7: #0b544a;
    --secondary-8: #0c6d62;
    --secondary-9: #12a594;
    --secondary-10: #10b3a3;
    --secondary-11: #0ac5b3;
    --secondary-12: #e1faf4;
    --secondary-a1: #0000;
    --secondary-a2: #00fbd508;
    --secondary-a3: #00fddc12;
    --secondary-a4: #00fde81b;
    --secondary-a5: #02fee424;
    --secondary-a6: #09ffe630;
    --secondary-a7: #11ffe342;
    --secondary-a8: #11ffe75d;
    --secondary-a9: #18ffe49b;
    --secondary-a10: #13ffe7ab;
    --secondary-a11: #0affe7bf;
    --secondary-a12: #e6fff9fa;

    --grey-1: #111113;
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
    --grey-a1: #0000;
    --grey-a2: #d8f4f609;
    --grey-a3: #ddeaf814;
    --grey-a4: #d3edf81d;
    --grey-a5: #d9edfe25;
    --grey-a6: #d6ebfd30;
    --grey-a7: #d9edff40;
    --grey-a8: #d9edff5d;
    --grey-a9: #dfebfd6d;
    --grey-a10: #e5edfd7b;
    --grey-a11: #f1f7feb5;
    --grey-a12: #fcfdffef;

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
    --green-a1: #0000;
    --green-a2: #00f7ca07;
    --green-a3: #2afebe12;
    --green-a4: #33feb31b;
    --green-a5: #38feb524;
    --green-a6: #3dffb130;
    --green-a7: #43ffad42;
    --green-a8: #49ffaa5e;
    --green-a9: #47ffa69a;
    --green-a10: #54ffafa9;
    --green-a11: #62ffb3bd;
    --green-a12: #eafff0fa;

    --orange-1: #1f1206;
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
    --orange-a1: #0000;
    --orange-a2: #fd37000e;
    --orange-a3: #fd54001e;
    --orange-a4: #fe61002a;
    --orange-a5: #fe620137;
    --orange-a6: #ff650649;
    --orange-a7: #ff640363;
    --orange-a8: #fe660085;
    --orange-a9: #ff6b08f6;
    --orange-a10: #ff842cfa;
    --orange-a11: #ff8c3ffa;
    --orange-a12: #ffeee1fa;

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
    --red-a1: #de000005;
    --red-a2: #fe48360e;
    --red-a3: #fd383828;
    --red-a4: #ff33383c;
    --red-a5: #fd464a4d;
    --red-a6: #fd5f5f5f;
    --red-a7: #ff717178;
    --red-a8: #ff7878a1;
    --red-a9: #ff7979ce;
    --red-a10: #ff7272bf;
    --red-a11: #ff9795ef;
    --red-a12: #ffdad8f9;

  }

  .light-theme, .dark-theme {

    /* --- Constant Colors --- */
    // The should not change between light and dark.
    --white: #FFFFFF;
    --white-1: var(--white);
    --white-2: var(--white);
    --white-3: var(--white);
    --white-4: var(--white);
    --white-5: var(--white);
    --white-6: var(--white);
    --white-7: var(--white);
    --white-8: var(--white);
    --white-9: var(--white);
    --white-10: var(--white);
    --white-11: var(--white);
    --white-12: var(--white);

    --white-a1: #fff0;
    --white-a2: #ffffff03;
    --white-a3: #ffffff09;
    --white-a4: #ffffff0e;
    --white-a5: #ffffff16;
    --white-a6: #ffffff20;
    --white-a7: #ffffff2d;
    --white-a8: #ffffff3f;
    --white-a9: #ffffff62;
    --white-a10: #ffffff72;
    --white-a11: #ffffff97;
    --white-a12: #ffffffeb;

    --black: #000;
    --black-1: var(--black);
    --black-2: var(--black);
    --black-3: var(--black);
    --black-4: var(--black);
    --black-5: var(--black);
    --black-6: var(--black);
    --black-7: var(--black);
    --black-8: var(--black);
    --black-9: var(--black);
    --black-10: var(--black);
    --black-11: var(--black);
    --black-12: var(--black);

    --black-a1: #00000003;
    --black-a2: #00000007;
    --black-a3: #0000000c;
    --black-a4: #00000012;
    --black-a5: #00000017;
    --black-a6: #0000001d;
    --black-a7: #00000024;
    --black-a8: #00000038;
    --black-a9: #00000070;
    --black-a10: #0000007a;
    --black-a11: #00000090;
    --black-a12: #000000e8;

  }


  /** --- Color Aliases --- */
  // Used for state based variable names that can be detached later from base colors if needed.
  .light-theme, .dark-theme {

    --info-1: var(--secondary-1);
    --info-2: var(--secondary-2);
    --info-3: var(--secondary-3);
    --info-4: var(--secondary-4);
    --info-5: var(--secondary-5);
    --info-6: var(--secondary-6);
    --info-7: var(--secondary-7);
    --info-8: var(--secondary-8);
    --info-9: var(--secondary-9);
    --info-10: var(--secondary-10);
    --info-11: var(--secondary-11);
    --info-12: var(--secondary-12);
    --info-a1: var(--secondary-a1);
    --info-a2: var(--secondary-a2);
    --info-a3: var(--secondary-a3);
    --info-a4: var(--secondary-a4);
    --info-a5: var(--secondary-a5);
    --info-a6: var(--secondary-a6);
    --info-a7: var(--secondary-a7);
    --info-a8: var(--secondary-a8);
    --info-a9: var(--secondary-a9);
    --info-a10: var(--secondary-a10);
    --info-a11: var(--secondary-a11);
    --info-a12: var(--secondary-a12);

    --success-1: var(--green-1);
    --success-2: var(--green-2);
    --success-3: var(--green-3);
    --success-4: var(--green-4);
    --success-5: var(--green-5);
    --success-6: var(--green-6);
    --success-7: var(--green-7);
    --success-8: var(--green-8);
    --success-9: var(--green-9);
    --success-10: var(--green-10);
    --success-11: var(--green-11);
    --success-12: var(--green-12);
    --success-a1: var(--green-a1);
    --success-a2: var(--green-a2);
    --success-a3: var(--green-a3);
    --success-a4: var(--green-a4);
    --success-a5: var(--green-a5);
    --success-a6: var(--green-a6);
    --success-a7: var(--green-a7);
    --success-a8: var(--green-a8);
    --success-a9: var(--green-a9);
    --success-a10: var(--green-a10);
    --success-a11: var(--green-a11);
    --success-a12: var(--green-a12);

    --caution-1: var(--orange-1);
    --caution-2: var(--orange-2);
    --caution-3: var(--orange-3);
    --caution-4: var(--orange-4);
    --caution-5: var(--orange-5);
    --caution-6: var(--orange-6);
    --caution-7: var(--orange-7);
    --caution-8: var(--orange-8);
    --caution-9: var(--orange-9);
    --caution-10: var(--orange-10);
    --caution-11: var(--orange-11);
    --caution-12: var(--orange-12);
    --caution-a1: var(--orange-a1);
    --caution-a2: var(--orange-a2);
    --caution-a3: var(--orange-a3);
    --caution-a4: var(--orange-a4);
    --caution-a5: var(--orange-a5);
    --caution-a6: var(--orange-a6);
    --caution-a7: var(--orange-a7);
    --caution-a8: var(--orange-a8);
    --caution-a9: var(--orange-a9);
    --caution-a10: var(--orange-a10);
    --caution-a11: var(--orange-a11);
    --caution-a12: var(--orange-a12);

    --warning-1: var(--red-1);
    --warning-2: var(--red-2);
    --warning-3: var(--red-3);
    --warning-4: var(--red-4);
    --warning-5: var(--red-5);
    --warning-6: var(--red-6);
    --warning-7: var(--red-7);
    --warning-8: var(--red-8);
    --warning-9: var(--red-9);
    --warning-10: var(--red-10);
    --warning-11: var(--red-11);
    --warning-12: var(--red-12);
    --warning-a1: var(--red-a1);
    --warning-a2: var(--red-a2);
    --warning-a3: var(--red-a3);
    --warning-a4: var(--red-a4);
    --warning-a5: var(--red-a5);
    --warning-a6: var(--red-a6);
    --warning-a7: var(--red-a7);
    --warning-a8: var(--red-a8);
    --warning-a9: var(--red-a9);
    --warning-a10: var(--red-a10);
    --warning-a11: var(--red-a11);
    --warning-a12: var(--red-a12);

  }

  .light-theme {
    --shadow-primary-default: var(--grey-a4);
    --shadow-primary-elevate: var(--primary-a5);

    --shadow-secondary-default: var(--grey-3);
    --shadow-secondary-elevate: var(--grey-a4);

    --shadow-warning-default: var(--grey-a4);
    --shadow-warning-elevate: var(--warning-a5);
  }

  .dark-theme {
    --shadow-primary-default: var(--primary-a2);
    --shadow-primary-elevate: var(--primary-a2);

    --shadow-secondary-default: var(--black-a8);
    --shadow-secondary-elevate: var(--primary-a4);

    --shadow-warning-default: var(--grey-a3);
    --shadow-warning-elevate: var(--warning-a7);
  }

  /* --- Component Aliases --- */
  // For specific component uses within the UI Kit.
  .light-theme, .dark-theme {
    /* feedback */
    --error: var(--warning-8);
    --info: var(--primary-7);
    --neutral: var(--grey-9);
    --success: var(--success-8);
    --warning: var(--caution-8);

    /* tooltip */
    --tooltip-warning: var(--warning-a9);
    --tooltip-warning-arrow: var(--warning-9);
    --tooltip-warning-border: var(--warning-a7);

    --tooltip-success: var(--success-9);
    --tooltip-success-arrow: var(--success-8);
    --tooltip-success-border: var(--success-a7);

    --tooltip-info: var(--primary-8);
    --tooltip-info-arrow: var(--primary-8);
    --tooltip-info-border: var(--primary-a8);

    --tooltip-neutral: var(--grey-8);
    --tooltip-neutral-arrow: var(--grey-7);
    --tooltip-neutral-border: var(--grey-7);

      /* icons */
    --inverse: var(--white-1);
    --mono: var(--grey-12);
    --dimmed: var(--grey-11);
    --subtle: var(--grey-10);
    --primary: var(--primary-9);
    --danger: var(--warning-9);

    /* Spinner */
    --spinner-primary-base: var(--primary-6);
    --spinner-primary-top: var(--white-1);

    --spinner-secondary-base: var(--grey-8);
    --spinner-secondary-top: var(--white-1);

    --spinner-simple-base: var(--grey-a8);
    --spinner-simple-top: var(--white-1);

    --spinner-warning-base: var(--warning-8);
    --spinner-warning-top: var(--white-1);

    /* Global */
    --main-background-gradient: radial-gradient(200% 200% at 50% -10%, var(--grey-2) 0%, var(--grey-3) 100%);
    --main-background-color: var(--grey-3);

    --primary-gradient-start: var(--primary-9);
    --primary-gradient-end: var(--primary-10);
    --primary-gradient: linear-gradient(135deg, var(--primary-gradient-start), var(--primary-gradient-end));

    --secondary-gradient-start: var(--grey-5);
    --secondary-gradient-end: var(--grey-6);
    --secondary-gradient: linear-gradient(135deg, var(--secondary-gradient-start), var(--secondary-gradient-end));

    --warning-gradient-start: var(--warning-9);
    --warning-gradient-end: var(--warning-10);
    --warning-gradient: linear-gradient(135deg, var(--warning-gradient-start), var(--warning-gradient-end));

    --dividing-line: var(--grey-4);
    --global-element-background: var(--grey-2);
    --global-menu-icon-background-default: transparent;
    --global-menu-icon-background-hover: var(--primary-8);
    --global-menu-icon-background-active: var(--primary-9);

    /* Inputs */
    --input-color-default: var(--grey-12);
    --input-color-disabled: var(--grey-10);
    --input-color-placeholder: var(--grey-10);
    --input-color-unit: var(--grey-10);

    --input-default-background-color: var(--grey-1);
    --input-default-border-color: var(--grey-6);
    --input-default-shadow-color: transparent;

    --input-default-focused-background-color: var(--grey-1);
    --input-default-focused-border-color: var(--grey-6);
    --input-default-focused-shadow-color: var(--grey-3);

    --input-disabled-background-color: var(--grey-3);
    --input-disabled-border-color: var(--grey-6);
    --input-disabled-shadow-color: transparent;

    --input-required-background-color: var(--grey-1);
    --input-required-border-color: var(--primary-6);
    --input-required-shadow-color: transparent;

    --input-required-focused-background-color: var(--grey-1);
    --input-required-focused-border-color: var(--primary-6);
    --input-required-focused-shadow-color: var(--grey-3);

    --input-valid-background-color: var(--grey-1);
    --input-valid-border-color: var(--success-9);
    --input-valid-shadow-color: transparent;

    --input-valid-focused-background-color: var(--grey-1);
    --input-valid-focused-border-color: var(--success-9);
    --input-valid-focused-shadow-color: var(--grey-3);

    --input-invalid-background-color: var(--grey-1);
    --input-invalid-border-color: var(--warning-9);
    --input-invalid-shadow-color: transparent;

    --input-invalid-focused-background-color: var(--grey-1);
    --input-invalid-focused-border-color: var(--warning-9);
    --input-invalid-focused-shadow-color: var(--grey-3);

    --input-processing-background-color: var(--grey-3)2;
    --input-processing-border-color: var(--primary-10);
    --input-processing-shadow-color: transparent;

    --input-processing-focused-background-color: var(--grey-2);
    --input-processing-focused-border-color: var(--primary-10);
    --input-processing-focused-shadow-color: var(--grey-3);

    /* Input Icons */
    --input-lead-icon: var(--grey-12);
    --input-disabled-lead-icon: var(--grey-10);

    /* Checkboxes and Radio Buttons */
    --input-toggle-icon-color: var(--white-12);

    --input-toggle-unchecked-border-color: var(--grey-8);
    --input-toggle-unchecked-background-color: transparent;

    --input-toggle-checked-border-color: var(--primary-9);
    --input-toggle-checked-background-color: var(--primary-9);


    --input-toggle-unchecked-hover-border-color: var(--primary-9);
    --input-toggle-unchecked-hover-background-color: transparent;

    --input-toggle-checked-hover-border-color: var(--primary-7);
    --input-toggle-checked-hover-background-color: var(--primary-7);


    --input-toggle-unchecked-disabled-border-color: var(--grey-7);
    --input-toggle-unchecked-disabled-background-color: transparent;

    --input-toggle-checked-disabled-border-color: var(--grey-7);
    --input-toggle-checked-disabled-background-color: var(--grey-7);


    --input-toggle-intermediate-border-color: var(--primary-11);
    --input-toggle-intermediate-background-color: var(--primary-11);

    --input-toggle-intermediate-hover-border-color: var(--primary-11);
    --input-toggle-intermediate-hover-background-color: var(--primary-11);

    --input-toggle-intermediate-disabled-border-color: var(--grey-7);
    --input-toggle-intermediate-disabled-background-color: var(--grey-7);

    /* Labels */
    --input-label: var(--grey-11);
    --input-label-hover: var(--primary-8);
    --input-label-active: var(--grey-12);

  }

  /* Filters */
  .light-theme, .dark-theme {
    --filter-button-text-color: var(--grey-11);
    --filter-button-icon-color: var(--grey-10);
    --filter-button-background-color: var(--grey-2);
    --filter-button-stroke-color: var(--grey-a5);
    --filter-button-shadow-color: var(--primary-a3);

    --filter-dropdown-background-color: color-mix(in srgb, var(--grey-1) 82%, transparent);
    --filter-dropdown-background-color-fallback: var(--grey-3);
    --filter-dropdown-accent: var(--primary-a9);

  }

  .dark-theme {
    --filter-button-shadow-color: var(--black-a8);
  }

  /* Typography */
  .light-theme, .dark-theme {
    --label-color: var(--grey-11);
  }

  /* Buttons */
  .light-theme, .dark-theme {
    --button-background-color: var(--primary-9);
    --button-border-color: var(--primary-9);
    --button-border-width: 1px;
    --button-inner-shadow-color: transparent;
    --button-drop-shadow-color: var(--shadow-primary-default);
    --button-text-color: var(--white-1);
    --button-divider-color: var(--primary-a3);

    --button-loading-area-background-color: var(--primary-a7);
    --button-loading-area-divider-color: var(--primary-a8);
    --button-loading-text-color: var(--white-1);
    --button-disabled-border-color: var(--button-border-color);
    --button-disabled-text-color: var(--white-1);

    --button-hover-background-color: var(--primary-8);
    --button-hover-border-color: var(--primary-a6);
    --button-hover-inner-shadow-color: transparent;
    --button-hover-drop-shadow-color: var(--shadow-primary-elevate);
    --button-hover-text-color: var(--white-1);
    --button-hover-divider-color: var(--primary-a3);
    --button-hover-icon-area-background-color: var(--primary-a3);

    --button-active-background-color: var(--button-hover-background-color);
    --button-active-border-color: var(--button-hover-border-color);
    --button-active-inner-shadow-color: var(--button-hover-inner-shadow-color);
    --button-active-drop-shadow-color: var(--button-hover-drop-shadow-color);
    --button-active-text-color: var(--white-1);
    --button-active-divider-color: var(--primary-a3);
    --button-active-icon-area-background-color: var(--primary-a3);

    --button-gradient-start: var(--primary-gradient-start);
    --button-gradient-end: var(--primary-gradient-end);

    .button-design-secondary {
      --button-background-color: var(--grey-9);
      --button-border-color: var(--grey-6);
      --button-inner-shadow-color: transparent;
      --button-drop-shadow-color: var(--shadow-secondary-default);
      --button-text-color: var(--grey-12);
      --button-divider-color: var(--grey-a3);

      --button-loading-area-background-color: var(--grey-a4);
      --button-loading-area-divider-color: var(--grey-a3);
      --button-disabled-border-color: var(--button-border-color);

      --button-hover-background-color: var(--grey-8);
      --button-hover-border-color: var(--grey-a6);
      --button-hover-inner-shadow-color: var(--white-a8);
      --button-hover-drop-shadow-color: var(--shadow-secondary-elevate);
      --button-hover-text-color: var(--white-1);

      --button-active-background-color: var(--button-hover-background-color);
      --button-active-border-color: var(--button-hover-border-color);
      --button-active-inner-shadow-color: var(--button-hover-inner-shadow-color);
      --button-active-drop-shadow-color: var(--button-hover-drop-shadow-color);
      --button-active-text-color: var(--white-1);

      --button-gradient-start: var(--secondary-gradient-start);
      --button-gradient-end: var(--secondary-gradient-end);
    }

    .button-design-danger, .button-design-warning {
      --button-background-color: var(--warning-9);
      --button-border-color: var(--warning-9);
      --button-inner-shadow-color: transparent;
      --button-drop-shadow-color: var(--shadow-warning-default);
      --button-text-color: var(--white-1);
      --button-divider-color: var(--warning-9);

      --button-loading-area-background-color: var(--warning-a7);
      --button-loading-area-divider-color: var(--warning-a9);
      --button-disabled-border-color: var(--button-border-color);

      --button-hover-background-color: var(--warning-8);
      --button-hover-border-color: var(--warning-a6);
      --button-hover-inner-shadow-color: var(--white-a8);
      --button-hover-drop-shadow-color: var(--shadow-warning-elevate);
      --button-hover-text-color: var(--white-1);

      --button-active-background-color: var(--button-hover-background-color);
      --button-active-border-color: var(--button-hover-border-color);
      --button-active-inner-shadow-color: var(--button-hover-inner-shadow-color);
      --button-active-drop-shadow-color: var(--button-hover-drop-shadow-color);
      --button-active-text-color: var(--white-1);

      --button-gradient-start: var(--warning-gradient-start);
      --button-gradient-end: var(--warning-gradient-end);
    }

    .button-design-text-only {
      --button-background-color: transparent;
      --button-border-color: transparent;
      --button-inner-shadow-color: transparent;
      --button-gradient-start: transparent;
      --button-gradient-end: transparent;
      --button-drop-shadow-color: transparent;
      --button-text-color: var(--grey-12);
      --button-divider-color: transparent;

      --button-loading-area-background-color: transparent;
      --button-loading-area-divider-color: transparent;
      --button-loading-text-color: var(--grey-8);
      --button-disabled-border-color: transparent;
      --button-disabled-text-color: var(--grey-8);

      --button-hover-background-color: transparent;
      --button-hover-border-color: transparent;
      --button-hover-text-color: var(--primary-9);
      --button-hover-drop-shadow-color: transparent;
      --button-hover-inner-shadow-color: transparent;

      --button-active-inner-shadow-color: transparent;
      --button-active-drop-shadow-color: transparent;
      --button-active-background-color: transparent;
      --button-active-border-color: transparent;
      --button-active-text-color: var(--primary-10);
    }

    .button-design-outline {
      --button-background-color: transparent;
      --button-border-color: var(--grey-11);
      --button-border-width: 2px;
      --button-inner-shadow-color: transparent;
      --button-gradient-start: transparent;
      --button-gradient-end: transparent;
      --button-drop-shadow-color: var(--grey-a3);
      --button-divider-color: var(--grey-a3);
      --button-text-color: var(--grey-12);

      --button-loading-area-background-color: transparent;
      --button-loading-area-divider-color: var(--grey-a3);
      --button-loading-text-color: var(--grey-10);
      --button-disabled-border-color: var(--grey-a6);
      --button-disabled-text-color: var(--grey-12);

      --button-hover-background-color: transparent;
      --button-hover-border-color: var(--primary-9);
      --button-hover-text-color: var(--primary-9);
      --button-hover-drop-shadow-color: var(--grey-a4);
      --button-hover-inner-shadow-color: transparent;

      --button-active-inner-shadow-color: transparent;
      --button-active-drop-shadow-color: transparent;
      --button-active-background-color: transparent;
      --button-active-border-color: var(--primary-11);
      --button-active-text-color: var(--primary-11);
    }

  }

  /* Switches */
  .light-theme, .dark-theme {
    // Background
    --switch-default-off-background: var(--grey-4);
    --switch-default-on-background: var(--primary-9);
    --switch-default-danger-background: var(--warning-9);

    --switch-disabled-off-background: var(--grey-3);
    --switch-disabled-on-background: var(--primary-8);
    --switch-disabled-danger-background: var(--warning-8);

    // Border
    --switch-default-off-border: var(--grey-7);
    --switch-default-on-border: var(--primary-9);
    --switch-default-danger-border: var(--warning-9);

    --switch-disabled-off-border: var(--grey-6);
    --switch-disabled-on-border: var(--primary-a6);
    --switch-disabled-danger-border: var(--warning-a6);

    // Inner
    --switch-default-off-inner: var(--primary-9);
    --switch-default-on-inner: var(--white-12);
    --switch-default-danger-inner: var(--white-12);

    --switch-disabled-off-inner: var(--grey-7);
    --switch-disabled-on-inner: var(--primary-a9);
    --switch-disabled-danger-inner: var(--warning-a9);

    // Special States
    --switch-special-locked-background: var(--grey-3);
    --switch-special-locked-border: var(--grey-11);
    --switch-special-locked-inner: transparent;
    --switch-special-locked-icon: var(--grey-11);

    --switch-special-failure-background: var(--warning-8);
    --switch-special-failure-border: var(--warning-9);
    --switch-special-failure-inner: var(--white-12);
    --switch-special-failure-icon: var(--warning-8);

  }

  .light-theme {
    // Background
    --switch-default-off-background: var(--grey-2);
    --switch-default-on-background: var(--primary-7);
    --switch-default-danger-background: var(--warning-9);

    --switch-disabled-off-background: var(--grey-3);
    --switch-disabled-on-background: var(--primary-6);
    --switch-disabled-danger-background: var(--warning-8);

    // Border
    --switch-default-off-border: var(--grey-6);
    --switch-default-on-border: var(--primary-7);
    --switch-default-danger-border: var(--warning-9);

    --switch-disabled-off-border: var(--grey-6);
    --switch-disabled-on-border: var(--primary-7);
    --switch-disabled-danger-border: var(--warning-a5);

    // Inner
    --switch-default-off-inner: var(--primary-9);
    --switch-default-on-inner: var(--white-12);
    --switch-default-danger-inner: var(--white-12);

    --switch-disabled-off-inner: var(--grey-7);
    --switch-disabled-on-inner: var(--primary-9);
    --switch-disabled-danger-inner: var(--warning-a8);

    // Special States
    --switch-special-locked-background: var(--grey-3);
    --switch-special-locked-border: var(--grey-8);
    --switch-special-locked-inner: transparent;
    --switch-special-locked-icon: var(--grey-11);
  }

`};

  :root {

    --font-ui: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;
    --font-data: Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;

    --common-height: 32px;

    --font-size: 14px;

    --global-menu-width-closed: 80px;
    --global-menu-width-open: 280px;

    --input-height: 40px;
    --input-compact-height: 32px;
    --input-required-dot-display: inline-block;

    --button-font-size: 14px;
    --button-height: 32px;
    --button-h-padding: 8px;
    --button-h-padding-outline: 7px;
    --button-lift-default-x: 0px;
    --button-lift-default-y: 2px;
    --button-lift-default-blur: 4px;
    --button-lift-default-spread: 2px;

    --button-icon-size: 14px;
    --button-icon-h-padding: 8px;

    // Inputs
    --input-box-shadow-x: 0;
    --input-box-shadow-y: 0;
    --input-box-shadow-blur: 0;
    --input-box-shadow-spread: 0;

    --input-focused-box-shadow-x: 0;
    --input-focused-box-shadow-y: 3px;
    --input-focused-box-shadow-blur: 3px;
    --input-focused-box-shadow-spread: 0;

    // Switches
    --switch-height: 24px;
    --switch-width: 40px;
    --switch-border-width: 2px;
    --switch-inner-size: 16px;
    --switch-intent-offset: 3px;

    // Labels
    --label-font: var(--font-ui);
    --label-font-size: 14px;
    --label-weight: 500;

  }

  .button-size-xsmall {
    --button-font-size: 12px;
    --button-height: 20px;
    --button-h-padding: 4px;
    --button-h-padding-outline: 3px;
    --button-icon-size: 12px;
    --button-icon-h-padding: 4px;
  }

  .button-size-small {
    --button-font-size: 12px;
    --button-height: 24px;
    --button-h-padding: 4px;
    --button-h-padding-outline: 3px;
    --button-icon-size: 12px;
    --button-icon-h-padding: 8px;
  }

  .button-size-large {
    --button-font-size: 16px;
    --button-height: 40px;
    --button-h-padding: 8px;
    --button-h-padding-outline: 7px;
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

  .split-button-size-small {
    --button-font-size: 12px;
    --button-height: 24px;
    --button-h-padding: 4px;
    --button-icon-size: 12px;
    --button-icon-h-padding: 8px;
  }

  .split-button-size-large {
    --button-font-size: 16px;
    --button-height: 40px;
    --button-h-padding: 8px;
    --button-icon-size: 16px;
    --button-icon-h-padding: 8px;
  }

`,Nl=z`

  * , body{
    box-sizing: border-box;
    text-rendering: geometricPrecision;
  }
  body, html , #root {
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
  }

  body {
    font-family: var(--font-ui);
    color: var(--grey-11);
    background: var(--main-background-gradient);
    background-attachment: fixed;
  }

`,Pl=z`

  line-height: 0;

  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
      transition: stroke var(--speed-normal) var(--easing-primary-out);
    }
  }
`,q=B.div`
  ${Pl};
`,Fl=B.g`
  ${Pl};
`,J=({icon:e,size:t=24,weight:n=`regular`,color:r=`grey-12`,forSvgUsage:i=!1})=>{let a=Tl.icons.weights[n],o=Hn[e];return o==null?null:i?(0,K.jsx)(Fl,{children:o({size:t,weight:a,color:`var(--${r}, var(--grey-12))`})}):(0,K.jsx)(q,{children:o({size:t,weight:a,color:`var(--${r}, var(--grey-12))`})})},Il=B.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid var(--grey-10);
  border-left: 0;
  border-bottom: 0;
  border-radius: 0 3px 0 0;

  &.t { top: 24px; }
  &.b { bottom: 24px; }
  &.l { left: 24px; }
  &.r { right: 24px; }
`,Ll=B.div`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  background: var(--grey-3);
  border: 12px solid var(--grey-6);
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.2px;
  color: var(--grey-10);
`,Y=({title:e=`Placeholder`})=>(0,K.jsxs)(Ll,{children:[e,(0,K.jsx)(Il,{className:`t l`,style:{transform:`rotate(-90deg)`}}),(0,K.jsx)(Il,{className:`t r`,style:{transform:`rotate(0deg)`}}),(0,K.jsx)(Il,{className:`b r`,style:{transform:`rotate(90deg)`}}),(0,K.jsx)(Il,{className:`b l`,style:{transform:`rotate(180deg)`}})]});z`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`,z`
  display: flex;
  flex-direction: column;
`;var X=z`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`,Rl=z`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`,zl=z`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bl=B.button`
  ${X};
  ${({$selected:e=!1})=>e&&z`
    border-bottom: 5px solid var(--primary-7);
  `}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,Vl=B.div`
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: var(--font-ui);
  background-color: ${({$type:e})=>`var(--${e})`};

  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  color: var(--white-1);

  ${q} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,Hl={error:`Critical`,warning:`BigWarning`,success:`Success`,info:`Information`,neutral:`Information`},Ul=B.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,Wl=({type:e=`info`,message:t,hideCloseButton:n=!1})=>{let[r,i]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{i(!1)},[t]),t&&!r?(0,K.jsxs)(Vl,{$type:e,children:[(0,K.jsx)(J,{icon:Hl[e],color:`inverse`}),(0,K.jsx)(Ul,{children:t}),!n&&(0,K.jsx)(Bl,{onClick:()=>i(!0),children:(0,K.jsx)(J,{icon:`CloseCompact`,color:`inverse`})})]}):null},Gl=B.div`
  min-height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  width: 900px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 999;

  font-family: var(--font-ui);
  background-color: ${({$type:e})=>`var(--${e})`};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);

  ${({$isVisible:e})=>e&&z`
    transition: transform var(--speed-slow) var(--easing-primary-in-out);
  `}

  ${({$isVisible:e,$isClosing:t})=>e&&!t&&z`
    transform: translate(-50%, 0%);
  `};

  ${q} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,Kl={error:`Critical`,warning:`BigWarning`,success:`Success`,info:`Information`,neutral:`Information`},ql=B.div`
  ${X};
  ${({$selected:e=!1})=>e&&z`
    border-bottom: 5px solid var(--primary-7);
  `}
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,Jl=B.button`
  ${X};
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
    transition: transform var(--speed-normal) var(--easing-primary-in-out);
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,Yl=B.div`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`,Xl=({id:e,type:t=`info`,message:n,icon:r=``,isPinned:i=!1,actionTextButton:a,closeNow:o=!1,closeCallback:s,onTextButtonClick:c})=>{let[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(void 0),y=(0,_.useRef)({slideUp:d,textClicked:p,onTextButtonClick:c,closeCallback:s});(0,_.useEffect)(()=>{y.current={slideUp:d,textClicked:p,onTextButtonClick:c,closeCallback:s}}),(0,_.useEffect)(()=>{u(!1),f(!1),m(!1)},[e]),(0,_.useEffect)(()=>{v.current!==e&&(v.current=e,g(!1));let t=requestAnimationFrame(()=>g(!0));return()=>cancelAnimationFrame(t)},[e]);let b=(0,_.useCallback)(()=>{f(!0)},[]),x=(0,_.useCallback)(async()=>{m(!0),b()},[b]),S=(0,_.useCallback)(()=>{d&&(u(!0),c&&p&&c(),s&&s())},[d,s,c,p]);return(0,_.useEffect)(()=>{if(i)return;let e=setTimeout(()=>b(),7e3);return()=>clearTimeout(e)},[i,n,b,e]),(0,_.useEffect)(()=>{o&&b()},[o,b]),(0,_.useEffect)(()=>()=>{let{slideUp:e,textClicked:t,onTextButtonClick:n,closeCallback:r}=y.current;e&&(n&&t&&n(),r&&r())},[]),n&&!l?bl.createPortal((0,K.jsxs)(Gl,{$type:t,$isClosing:d,$isVisible:h,onTransitionEnd:S,children:[(0,K.jsx)(J,{icon:r||Kl[t],color:`inverse`}),(0,K.jsx)(Yl,{children:n}),a?(0,K.jsxs)(Jl,{onClick:()=>x(),children:[a,` `]}):(0,K.jsx)(ql,{onClick:()=>b(),children:(0,K.jsx)(J,{icon:`CloseCompact`,color:`inverse`})})]}),document.body):null},Zl=8,Ql=16,$l=B.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${Zl}px solid transparent;
  border-right: ${Zl}px solid transparent;
  border-bottom: ${Zl}px solid ${({$type:e})=>`var(--tooltip-${e}-arrow)`};
`,eu=B.div`
  position: absolute;
  display: flex;
  ${({$maxWidth:e})=>e&&z` max-width: ${e}`};
  ${({$directionStyle:e})=>e&&z`${e}`};
`,tu=B.div`
  background-color: ${({$type:e})=>`var(--tooltip-${e})`};
  border-radius: 3px;
  border: 1px solid ${({$type:e})=>`var(--tooltip-${e}-border)`};
  box-shadow: 0px 2px var(--input-focused-blur, 3px) 0px rgba(0, 16, 64, 0.06);
  backdrop-filter: blur(2px);
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--white-a12);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;

  ${q} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,nu=(e,t)=>{let{left:n,top:r,width:i,height:a}=t,o=r+window.scrollY,s=n+window.scrollX;switch(e){case`bottom-right`:return`
              flex-direction: column;
              top: ${o+a}px;
              left: ${s-Zl-Ql+i/2}px;
              ${$l} {
                margin-left: ${Ql}px;
              }
            `;case`bottom-left`:return`
              flex-direction: column;
              align-items: end;
              top: ${o+a}px;
              left: ${s+Zl+Ql+i/2}px;
              transform: translateX(-100%);
              ${$l} {
                margin-right: ${Ql}px;
              }
            `;case`right-bottom`:return`
              flex-direction: row;
              top: ${o-Zl/2-Ql+a/2}px;
              left: ${s+i}px;
              ${$l} {
                transform: rotate(-90deg);
                margin-right: -${Zl/2}px;
                margin-top: ${Ql}px;
              }
            `;case`right`:return`
              flex-direction: row;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s+i}px;
              transform: translateY(-50%);
              ${$l} {
                transform: rotate(-90deg);
                margin-right: -${Zl/2}px;
              }
            `;case`right-top`:return`
              flex-direction: row;
              align-items: end;
              top: ${o+Zl/2+Ql+a/2}px;
              left: ${s+i}px;
              transform: translateY(-100%);
              ${$l} {
                transform: rotate(-90deg);
                margin-right: -${Zl/2}px;
                margin-bottom: ${Ql}px;
              }
            `;case`left-bottom`:return`
              flex-direction: row-reverse;
              top: ${o-Zl/2-Ql+a/2}px;
              left: ${s}px;
              transform: translateX(-100%);
              ${$l} {
                transform: rotate(90deg);
                margin-left: -${Zl/2}px;
                margin-top: ${Ql}px;
              }
            `;case`left`:return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${o+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -50%);
              ${$l} {
                transform: rotate(90deg);
                margin-left: -${Zl/2}px;
              }
            `;case`left-top`:return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${o+Zl/2+Ql+a/2}px;
              left: ${s}px;
              transform: translate(-100%, -100%);
              ${$l} {
                transform: rotate(90deg);
                margin-left: -${Zl/2}px;
                margin-bottom: ${Ql}px;
              }
            `;case`top-right`:return`
              flex-direction: column-reverse;
              top: ${o}px;
              left: ${s-Zl-Ql+i/2}px;
              transform: translateY(-100%);
              ${$l} {
                transform: rotate(180deg);
                margin-left: ${Ql}px;
              }
            `;case`top`:return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${o}px;
              left: ${s+i/2}px;
              transform: translate(-50%, -100%);
              ${$l} {
                transform: rotate(180deg);
              }
            `;case`top-left`:return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${o}px;
              left: ${s+Zl+Ql+i/2}px;
              transform: translate(-100%, -100%);
              ${$l} {
                transform: rotate(180deg);
                margin-right: ${Ql}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${o+a}px;
            left: ${s+i/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},ru=(e,t,n)=>{let r=e.left+(t||0)+30>window.innerWidth,i=e.bottom+(n||0)>window.innerHeight,a=e.left-(t||0)<0,o=e.top-(n||0)<0;return o&&r&&i?`left`:o&&a&&i?`right`:o&&a?`bottom-right`:o&&r?`bottom-left`:i&&a?`top-right`:i&&r?`top-left`:a?`right`:r?`left`:i?`top`:`bottom`},iu=({icon:e,message:t,type:n,tooltipFor:r,tooltipPosition:i,maxWidth:a})=>{let[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(`top`),f=(0,_.useRef)(null),p=(0,_.useCallback)(()=>{if(r&&r.current){let e=r.current.getBoundingClientRect();s(e),l(!0),d(ru(e,r.current.offsetWidth,r.current.offsetHeight))}},[r]),m=(0,_.useCallback)(()=>{l(!1)},[]),h=(0,_.useCallback)(()=>{r&&r.current&&s(r.current.getBoundingClientRect())},[r]);return(0,_.useEffect)(()=>{let e=null;return r&&r.current&&(e=r.current,r.current.addEventListener(`mouseover`,p),r.current.addEventListener(`mouseout`,m),h()),()=>{e&&(e.removeEventListener(`mouseover`,p),e.removeEventListener(`mouseout`,m))}},[m,p,r,h]),!c||!o?null:bl.createPortal((0,K.jsxs)(eu,{ref:f,$maxWidth:a,$directionStyle:nu(i||u,o),children:[(0,K.jsx)($l,{$type:n||`neutral`}),(0,K.jsxs)(tu,{$type:n||`neutral`,children:[e&&(0,K.jsx)(J,{icon:e,size:16,color:`white-a12`}),t]})]}),document.body)},au=e=>zn`
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
  `,ou=B.button`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({$noPadding:e,$isOutline:t})=>e?z`
      padding: 0px;
    `:z`
      padding: ${t?`var(--button-h-padding-outline)`:`var(--button-h-padding)`};
    `}

  overflow: hidden;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;

  border-radius: 3px;
  border: var(--button-border-width) solid var(--button-border-color);
  background: linear-gradient(135deg, transparent, transparent, var(--button-gradient-start), var(--button-gradient-end));
  background-color: var(--button-background-color);
  background-size: 400%;
  background-position: 99%;

  ${({$shadow:e})=>e?z`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  `:z`
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

    ${({$shadow:e})=>e?z`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    `:z`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow:e})=>z`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${()=>au(e)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading:e})=>e&&z`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`,su=({design:e=`primary`,size:t=`normal`,shadow:n=!1,noPadding:r=!1,loading:i=!1,children:a,formAction:o,className:s,...c})=>{e===`danger`&&console.warn(`Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead.`);let l=[`button-design-${e}`,`button-size-${t}`,s].filter(Boolean).join(` `);return(0,K.jsx)(ou,{type:`button`,$isOutline:e===`outline`,className:l,$design:e,$size:t,$noPadding:r,$shadow:n,$loading:i,...c,children:(0,K.jsx)(K.Fragment,{children:a})})},cu=e=>2*3.1416*e,lu=e=>{let t=cu(e);return zn`
    0% {
      stroke-dashoffset: -${t*.85};
    }
    50% {
      stroke-dashoffset: -${t*.5};
    }
    100% {
      stroke-dashoffset: -${t*.85};
    }
  `},uu=zn`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,du=B.circle`
  stroke: ${({$styling:e,$customColor:t})=>t||`var(--spinner-${e}-base, var(--grey-a8))`};
  fill: none;
`,fu=B.circle`
  stroke: ${({$styling:e,$customColor:t})=>t||`var(--spinner-${e}-top, var(--white-1))`};
  fill: none;
  stroke-dasharray: ${({r:e})=>cu(e)};
  stroke-dashoffset: ${({r:e})=>2*3.1416*e/2};
  animation:
    ${({r:e})=>lu(e)} 4s linear infinite,
    ${uu} 1s linear infinite;
  stroke-linecap: round;
`,pu=e=>e===`primary`||e===`secondary`||e===`warning`?e:e===`danger`?(console.warn("Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead."),`danger`):`simple`,mu={xsmall:12,small:16,medium:24,large:36,xlarge:48},hu=({size:e=`medium`,styling:t=`primary`,custom:n={}})=>{let{baseColor:r,topColor:i}=n,a=n?.size?n.size:mu[e],o=a/5.333,s=a/2-o/2;return(0,K.jsxs)(`svg`,{viewBox:`-${a/2} -${a/2} ${a} ${a}`,width:a,height:a,xmlns:`http://www.w3.org/2000/svg`,children:[(0,K.jsx)(du,{cx:`0`,cy:`0`,r:s,strokeWidth:o,$styling:pu(t),$customColor:r}),(0,K.jsx)(fu,{cx:`0`,cy:`0`,r:s,strokeWidth:o,$styling:pu(t),$customColor:i})]})},gu=B.div`
  display: inline;
`,_u=B.div`
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
`,vu=B.div`
  opacity: 1;
`,yu=B.div`
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
`,bu=B.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({$position:e})=>z`
    order: ${e&&e===`left`?0:2};
    ${e===`left`?`border-right-width: 1px;`:`border-left-width: 1px;`};
  `}

  ${vu}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${vu}, ${yu}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({$loading:e})=>e&&z`
    border-color: var(--button-loading-area-divider-color);

    ${yu}{
      opacity: 1;
    }

    ${vu}{
      opacity: 0;
    };
  `};

`,xu=B.div`
  display: flex;
  height: inherit;

  &:hover {
    ${({$disabled:e})=>!e&&z`
      ${vu}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({$disabled:e})=>!e&&z`
      ${vu}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({$disabled:e})=>e&&z`
    ${vu}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`,Su=({design:e=`primary`,size:t=`normal`,loading:n=!1,shadow:r=!1,onClick:i,disabled:a,position:o,icon:s,weight:c=`regular`,children:l,...u})=>(0,K.jsx)(gu,{children:(0,K.jsx)(su,{noPadding:!0,disabled:a||n,design:e,size:t,shadow:r,onClick:i,loading:n,...u,children:(0,K.jsxs)(xu,{$disabled:a,children:[(0,K.jsx)(_u,{$size:t,$position:o,$weight:c,children:(0,K.jsx)(K.Fragment,{children:l})}),(0,K.jsxs)(bu,{$loading:n,$position:o,children:[(0,K.jsx)(vu,{children:(0,K.jsx)(J,{icon:s,weight:c})}),(0,K.jsx)(yu,{children:(0,K.jsx)(hu,{size:t===`xsmall`||t===`small`?`xsmall`:`small`,styling:e})})]})]})})}),Cu=B.div`
  display: inline;
`,wu=B.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,Tu=B.div`
  height: inherit;
  flex: 0 0 calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  width: calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  border: 0px solid var(--button-loading-area-divider-color);
  background-color: var(--button-loading-area-background-color);

  transition:
    flex var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow),
    opacity var(--speed-slow) var(--easing-primary-in-out);

  ${({$position:e})=>z`
    order: ${e&&e===`left`?0:2};
    ${e===`left`?`border-right-width: 1px;`:`border-left-width: 1px;`};
  `}

  svg {
    display:block;
  }
`,Eu=B.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?z`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${Tu}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:z`
    ${Tu}{
      flex: 0 0 0px;
    }
  `}
`,Du=({design:e=`primary`,size:t=`normal`,shadow:n=!1,onClick:r,disabled:i,position:a,loading:o=!1,children:s,...c})=>(0,K.jsx)(Cu,{children:(0,K.jsx)(su,{noPadding:!0,disabled:i||o,design:e,size:t,shadow:n,onClick:r,loading:o,...c,children:(0,K.jsxs)(Eu,{$loading:o,$design:e,$size:t,children:[(0,K.jsx)(wu,{children:(0,K.jsx)(K.Fragment,{children:s})}),(0,K.jsx)(Tu,{$design:e,$position:a,children:(0,K.jsx)(hu,{size:t===`xsmall`||t===`small`?`xsmall`:`small`,styling:e})})]})})}),Ou=B.button`
  ${X};
  [stroke]{
    stroke: ${({$color:e})=>e};
  }
  &:hover {
    ${q} {
      [stroke]{
        stroke: ${({$hoverColor:e})=>e};
      }
    }
  }
`,ku=({icon:e,size:t=20,weight:n=`regular`,color:r=`dimmed`,hoverColor:i=`mono`,children:a,formAction:o,...s})=>(0,K.jsx)(Ou,{type:`button`,$color:r,$hoverColor:i,...s,children:(0,K.jsx)(J,{icon:e,size:t,weight:n})}),Au=B(ku)``;B.div`
  display: flex;
  ${Au} {
    margin-left: 15px;
  }
  ${Au}:first-child {
    margin-left: 0px;
  }

  ${({$alignment:e})=>e===`left`&&z`
    justify-content: flex-start;
  `};

  ${({$alignment:e})=>e===`center`&&z`
    justify-content: center;
  `};

  ${({$alignment:e})=>e===`right`&&z`
    justify-content: flex-end;
  `};
`;var ju=B.div`
  position: absolute;
  right: 0;
  top: 0;
`,Mu=B.button.attrs({type:`button`})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,Nu=B.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,Pu=B.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,Fu=B.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${q} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,Iu=B.input`
  ${Rl};

  ${({$fieldState:e})=>z`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};

  font-family: var(--font-data);

  height: var(--input-height);
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  color: var(--input-color-default);
  font-size: 14px;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  &::placeholder {
    font-family: var(--font-data);
    color: var(--input-color-placeholder);
    font-style: italic;
    font-weight: 400;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`,Lu=B.div`

  flex: 1;
  position: relative;

  ${({$hasAction:e})=>e&&z`
    ${Iu}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,Ru=B.div`
  ${({$fieldState:e,$showFeedback:t})=>z`

    display: flex;
    position: relative;
    flex-direction: row;

    ${Iu}{

      &:disabled {
        cursor: not-allowed;
      }

      ${[`default`,`disabled`].indexOf(e)===-1&&t&&z`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${Nu} {
      ${[`default`,`disabled`].indexOf(e)!==-1&&z`
        display: none;
      `};
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);
    }

    &:focus-within ${Iu} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
    }
  `}

`,zu=({type:e=`text`,placeholder:t=``,defaultValue:n,fieldState:r=`default`,showFeedback:i=!1,feedbackMessage:a,actionCallback:o,actionIcon:s,postfix:c,children:l,formAction:u,...d})=>{let f=o!==void 0,p=e=>{switch(e){case`default`:break;case`disabled`:break;case`required`:return(0,K.jsx)(J,{icon:`Required`,size:16});case`valid`:return(0,K.jsx)(J,{icon:`Success`,size:16});case`invalid`:return(0,K.jsx)(J,{icon:`Invalid`,size:16});case`processing`:return(0,K.jsx)(hu,{size:`medium`,styling:`primary`})}};return(0,K.jsxs)(Ru,{$fieldState:r||`default`,$showFeedback:i,children:[(0,K.jsxs)(Lu,{$hasAction:f,children:[(0,K.jsx)(Iu,{$fieldState:r||`default`,disabled:r===`disabled`||r===`processing`,type:e,placeholder:t,defaultValue:n,...d}),f?(0,K.jsx)(ju,{children:(0,K.jsx)(Mu,{onClick:o,children:(0,K.jsx)(J,{icon:s||`NoIcon`,color:`primary`})})}):null]}),r&&i?(0,K.jsxs)(Nu,{children:[(0,K.jsx)(Fu,{children:p(r)}),a?(0,K.jsx)(Pu,{children:a}):null]}):null]})},Bu=B.span`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  ${({$required:e})=>e&&z`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
    }
  `}
`,Vu=B.label`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({$direction:e})=>e&&z`
    flex-direction: ${e};
    ${[`row`,`row-reverse`].includes(e)&&z`
      display: inline-flex;
      
      ${Bu}{
        align-self: center;
      }
    `}
  `}
`,Hu=({htmlFor:e,labelText:t,direction:n=`column`,rightAlign:r=!1,required:i=!1,children:a,...o})=>(r&&(console.warn("Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction='row-reverse'` instead."),n=`row-reverse`),(0,K.jsx)(Vu,{htmlFor:e,$direction:n,...o,children:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Bu,{$required:i,children:t}),a]})})),Uu=B.input`
  ${Rl};

  font-family: var(--font-data);
  line-height: var(--input-compact-height);

  font-size: 14px;
  flex: 1;
  color: var(--input-color-default);
  width: 100%;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: var(--input-color-placeholder);
    font-style: italic;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };

  &:disabled {
    cursor: not-allowed;
    color: var(--input-color-disabled);
  }
`,Wu=B.div`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({$fieldState:e})=>z`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({$hasAction:e})=>e&&z`
    ${Uu}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;B.div`
  flex: 0 1;
  font-size: 12px;
  font-family: var(--font-ui);
  color: var(--input-color-unit);
  margin-top: 1px;
  white-space: nowrap;
`,B.div`
  position: relative;

  ${({$fieldState:e})=>e&&z`
    &:focus-within ${Wu} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${e}-focused-shadow-color, var(--input-${e}-shadow-color));
    }
  `};
`;var Z=function(e){return e[e.Off=0]=`Off`,e[e.On=1]=`On`,e[e.Neutral=2]=`Neutral`,e[e.Locked=3]=`Locked`,e}(Z||{}),Gu=e=>{switch(e){case Z.Off:return`off`;case Z.On:return`on`;case Z.Neutral:return`neutral`;case Z.Locked:return`locked`;default:return`off`}},Ku=B.input`
  display: none;
`,qu=B.div`
  border: var(--switch-border-width) solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: calc(var(--switch-height) / 2);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--switch-border-width) * -1);
    left: calc(var(--switch-border-width) * -1);
    bottom: calc(var(--switch-border-width) * -1);
    right: calc(var(--switch-border-width) * -1);
    pointer-events: none;
    border-radius: 12px;
    box-shadow:
      0px 2px 2px 0px var(--grey-a4) inset,
      0px -8px 8px 0px var(--grey-a2) inset,
      0px 2px 4px var(--black-a4),
      0px -2px 4px var(--white-a4);
  }
`,Ju=B.div`
  --offset: calc(((var(--switch-height) - var(--switch-inner-size)) / 2) - var(--switch-border-width));
  --position-off: var(--offset);
  --position-on: calc(var(--switch-width) - var(--switch-inner-size) - (var(--switch-border-width)*2) - var(--offset));
  --position-neutral: calc((var(--switch-width) / 2) - (var(--switch-inner-size) / 2) - var(--offset));
  --position-locked: var(--offset);

  position: absolute;
  top: var(--offset);
  left: ${({$position:e})=>e&&`var(--position-${e})`};

  box-sizing: border-box;
  height: var(--switch-inner-size);
  width: var(--switch-inner-size);
  border-radius: calc(var(--switch-inner-size) / 2);

  background-color: var(--switch-default-off-background);

  box-shadow:
    0px 2px 4px 0px var(--black-a8),
    0px 1px 2px 0px var(--white-a5) inset,
    0px -1px 1px 0px var(--black-a5) inset;
`,Yu=B.span``,Xu=B.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`,Zu=B.div``,Qu=B(Vu)`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${qu}{
    ${({$activeTheming:e,$themeState:t})=>z`
      border-color: var(--switch-${t}-${e}-border);
      background-color: var(--switch-${t}-${e}-background);
    `};

    ${({$activeTheming:e})=>e===`locked`&&z`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({$activeTheming:e})=>e===`failure`&&z`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming:e,$loading:t})=>t&&z`
      background-color: var(--switch-default-${e}-background);
      border-color: var(--switch-default-${e}-border);
    `};

  }

  ${Ju}{
    ${({$activeTheming:e,$themeState:t})=>z`
      background-color: var(--switch-${t}-${e}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({$activeTheming:e})=>e===`locked`&&z`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${Xu} svg {
        transform: translateX(-1px);
      }
    `}

    ${({$activeTheming:e})=>e===`failure`&&z`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming:e,$loading:t})=>t&&z`
      border-color: var(--switch-default-${e}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${Ju}{
      left: ${({$useIntent:e,$position:t})=>e&&t===Z.Off&&`calc(var(--position-off) + var(--switch-intent-offset))`||e&&t===Z.On&&`calc(var(--position-on) - var(--switch-intent-offset))`};
    }
  }
`,$u=e=>e===`default`||e===`loading`||e===`locked`||e===`disabled`||e===`failure`,ed=({state:e=`default`,leftTheme:t=`off`,rightTheme:n=`on`,labelText:r,onChangeCallback:i,checked:a,defaultChecked:o=!1})=>{let s=a!==void 0,c=s?a:o,l=c?Z.On:Z.Off,u=c?n:t,[d,f]=(0,_.useState)(o),p=(0,_.useRef)(null),m=(0,_.useRef)(null),[h,g]=(0,_.useState)(l),[v,y]=(0,_.useState)(u),[b,x]=(0,_.useState)(`default`),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(0),E=(0,_.useCallback)(()=>{s?(g(a?Z.On:Z.Off),y(a?n:t)):p.current&&(p.current.checked=d,g(d?Z.On:Z.Off),y(d?n:t))},[a,s,d,t,n]);(0,_.useEffect)(()=>{E()},[E]);let D=(0,_.useCallback)(()=>{s?(g(a?Z.On:Z.Off),y(a?n:t)):(g(d?Z.On:Z.Off),y(d?n:t))},[a,s,t,n,d]),O=(0,_.useCallback)(()=>{if(!(e===`locked`||e===`disabled`)){if(s)i?.(!a);else{let e=!d;f(e),i?.(e)}D()}},[s,a,d,i,e,D]),k=(0,_.useCallback)(()=>{h===Z.On?y(n):h===Z.Off&&y(t)},[h,n,t]);return(0,_.useEffect)(()=>{k()},[t,n,k]),(0,_.useEffect)(()=>{$u(e)&&x(td(e))},[e,x]),(0,_.useEffect)(()=>{e===`locked`?(g(Z.Locked),y(`locked`)):e===`failure`?(g(Z.Neutral),y(`failure`)):D()},[e,g,D]),(0,_.useEffect)(()=>{m.current&&T(parseInt(getComputedStyle(m.current).getPropertyValue(`--switch-inner-size`)))},[m]),(0,K.jsxs)(Qu,{onChange:O,onMouseLeave:()=>C(!1),$activeTheming:v,$loading:e===`loading`,$useIntent:!S&&(e===`default`||e===`failure`),$themeState:b,$position:h,$checked:p.current?.checked,children:[(0,K.jsx)(qu,{children:(0,K.jsxs)(Ju,{$position:Gu(h),ref:m,children:[e===`failure`?(0,K.jsx)(Xu,{children:(0,K.jsx)(J,{icon:`Exclamation`,color:`danger`,size:18,weight:`regular`})}):null,e===`locked`?(0,K.jsx)(Xu,{children:(0,K.jsx)(J,{icon:`Locked`,color:`switch-special-locked-icon`,size:12,weight:`regular`})}):null,e===`loading`&&w>0?(0,K.jsx)(Zu,{children:(0,K.jsx)(hu,{styling:`simple`,custom:{size:w}})}):null]})}),r?(0,K.jsx)(Yu,{children:r}):null,(0,K.jsx)(Ku,{ref:p,type:`checkbox`,disabled:e!==`default`&&e!==`failure`,defaultChecked:s?a:o})]})},td=e=>{switch(e){case`locked`:return`default`;case`failure`:return`default`;default:return e}};function nd(e){return(0,K.jsxs)(`svg`,{width:35,height:35,...e,children:[(0,K.jsx)(`defs`,{children:(0,K.jsxs)(`linearGradient`,{id:`LogoMark_svg__a`,x1:`36.708%`,x2:`69.959%`,y1:`2.579%`,y2:`98.009%`,children:[(0,K.jsx)(`stop`,{offset:`0%`,stopColor:`#7DB8DB`}),(0,K.jsx)(`stop`,{offset:`100%`,stopColor:`#5CA0D1`})]})}),(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`rect`,{width:35,height:35,fill:`url(#LogoMark_svg__a)`,rx:5}),(0,K.jsx)(`path`,{fill:`#FFF`,fillRule:`nonzero`,d:`M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z`})]})]})}function rd(e){return(0,K.jsx)(`svg`,{width:71,height:30,...e,children:(0,K.jsx)(`path`,{d:`M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z`,fill:`#93A5B2`})})}function id(e){return(0,K.jsx)(`svg`,{width:e.size,height:e.size,viewBox:`0 0 24 24`,...e,children:(0,K.jsx)(`path`,{d:`M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z`,fill:`none`,fillRule:`evenodd`,stroke:`#000`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5})})}function ad(){return(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`55`,height:`60`,fill:`none`,viewBox:`5 80 300 174`,children:[(0,K.jsx)(`path`,{fill:`#F0F0F0`,d:`M0 0H320V240H0z`}),(0,K.jsx)(`path`,{fill:`#656565`,d:`M113.8 112.087V130h-1.212c-.192 0-.355-.033-.488-.1a1.246 1.246 0 01-.375-.338l-10.362-13.5a16.889 16.889 0 01.05 1.175V130h-2.126v-17.913h1.251c.108 0 .2.009.275.025.075.009.141.03.2.063a.589.589 0 01.175.125c.058.05.12.117.187.2l10.363 13.487-.05-.625a13.596 13.596 0 01-.013-.587v-12.688h2.125zm21.129 8.963c0 1.342-.212 2.575-.637 3.7a8.463 8.463 0 01-1.8 2.887 8.102 8.102 0 01-2.8 1.888c-1.084.442-2.284.663-3.6.663-1.317 0-2.517-.221-3.6-.663a8.119 8.119 0 01-2.788-1.888 8.463 8.463 0 01-1.8-2.887c-.425-1.125-.637-2.358-.637-3.7s.212-2.571.637-3.688c.425-1.125 1.025-2.091 1.8-2.9a8.052 8.052 0 012.788-1.9c1.083-.45 2.283-.675 3.6-.675 1.316 0 2.516.225 3.6.675a8.035 8.035 0 012.8 1.9c.775.809 1.375 1.775 1.8 2.9.425 1.117.637 2.346.637 3.688zm-2.487 0c0-1.1-.15-2.088-.45-2.963-.3-.875-.725-1.612-1.275-2.212a5.504 5.504 0 00-2-1.4c-.784-.325-1.659-.488-2.625-.488-.959 0-1.829.163-2.613.488a5.618 5.618 0 00-2.012 1.4c-.55.6-.975 1.337-1.275 2.212-.3.875-.45 1.863-.45 2.963s.15 2.087.45 2.962c.3.867.725 1.605 1.275 2.213a5.687 5.687 0 002.012 1.387c.784.317 1.654.475 2.613.475.966 0 1.841-.158 2.625-.475a5.57 5.57 0 002-1.387c.55-.608.975-1.346 1.275-2.213.3-.875.45-1.862.45-2.962zM147.22 130h-2.425v-17.913h2.425V130zm23.22-17.913V130h-2.125v-13.163c0-.175.004-.362.012-.562l.05-.613-6.15 11.2c-.192.375-.483.563-.875.563h-.35c-.392 0-.683-.188-.875-.563l-6.275-11.25c.05.442.075.85.075 1.225V130h-2.125v-17.913h1.788c.216 0 .383.021.5.063.116.042.229.158.337.35l6.188 11.025c.1.2.195.408.287.625.1.217.192.437.275.662.083-.225.171-.445.263-.662.091-.225.191-.438.3-.638l6.075-11.012c.1-.192.208-.308.325-.35a1.66 1.66 0 01.512-.063h1.788zm14.092 11.263l-2.812-7.288a14.972 14.972 0 01-.263-.75c-.091-.291-.179-.6-.262-.925a13.51 13.51 0 01-.538 1.688l-2.812 7.275h6.687zm5.05 6.65h-1.875c-.216 0-.391-.054-.525-.163a1 1 0 01-.3-.412l-1.675-4.325h-8.037l-1.675 4.325a.878.878 0 01-.288.4.794.794 0 01-.525.175h-1.875l7.163-17.913h2.45L189.582 130zm16.443-8.613v6.875c-.9.65-1.862 1.138-2.887 1.463-1.017.317-2.134.475-3.35.475-1.442 0-2.742-.221-3.9-.663-1.159-.45-2.15-1.075-2.975-1.875a8.282 8.282 0 01-1.888-2.9c-.442-1.125-.662-2.362-.662-3.712 0-1.367.212-2.613.637-3.738.433-1.125 1.046-2.087 1.838-2.887.791-.808 1.754-1.433 2.887-1.875 1.133-.442 2.4-.663 3.8-.663.708 0 1.367.055 1.975.163.608.1 1.171.25 1.688.45.516.192.995.429 1.437.712a8.5 8.5 0 011.238.938l-.688 1.1a.739.739 0 01-.425.325c-.167.042-.354 0-.562-.125-.2-.117-.43-.258-.688-.425a5.555 5.555 0 00-.95-.475 7.037 7.037 0 00-1.312-.4c-.5-.108-1.096-.163-1.788-.163-1.008 0-1.921.167-2.737.5a5.683 5.683 0 00-2.088 1.413c-.575.608-1.017 1.35-1.325 2.225-.308.867-.462 1.842-.462 2.925 0 1.125.158 2.133.475 3.025.325.883.783 1.637 1.375 2.262a5.955 5.955 0 002.175 1.413c.85.325 1.804.487 2.862.487.833 0 1.571-.091 2.213-.275a9.829 9.829 0 001.9-.787v-3.938h-2.788a.549.549 0 01-.387-.137.459.459 0 01-.138-.338v-1.375h5.5zm14.762 6.638l-.013 1.975h-11.037v-17.913h11.037v1.975h-8.612v5.95h6.975v1.9h-6.975v6.113h8.625z`})]})}var od=function(e){return e.Off=`off`,e.On=`on`,e.Indeterminate=`indeterminate`,e}(od||{}),sd=B.input`
  display: none;
`,cd=B.div`
  cursor: pointer;

  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;

  transition: 
    background-color var(--speed-faster) var(--easing-primary-out),
    border-color var(--speed-faster) var(--easing-primary-out);
`,ld=B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,ud=B.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: ${({$color:e})=>`var(--${e})`};
    }
  }
`,dd=B.label`
  display: inline-block;
  user-select: none;
  ${cd}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }

  ${({$visualState:e,$disabled:t})=>e===od.Off&&z`
    /* Unchecked */
    ${cd}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!t&&z`
      &:hover ${cd} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`};

    /* Unchecked - Disabled */
    ${t&&z`
      ${cd}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({$visualState:e,$disabled:t})=>e===od.On&&z`
    /* Checked */
    ${cd}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!t&&z`
      &:hover ${cd}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`};

    /* Checked - Disabled */
    ${t&&z`
      ${cd}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${ud}{
        opacity: 0.65;
      }
    `}
  `}

  ${({$visualState:e,$disabled:t})=>e===od.Indeterminate&&z`
    ${cd}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!t&&z`
      &:hover ${cd}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${t&&z`
      ${cd}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${ud}{
        opacity: 0.65;
      }
    `}

  `}

`,fd=({indeterminate:e=!1,disabled:t,checked:n=!1,onChangeCallback:r})=>{let[i,a]=(0,_.useState)(n),[o,s]=(0,_.useState)(n?od.On:od.Off),c=e=>{let t=e.target.checked;a(t),r&&r(t)};(0,_.useEffect)(()=>{s(n?od.On:od.Off)},[n,i,s]),(0,_.useEffect)(()=>{a(n)},[n,a]);let l=Tl.icons.weights.regular;return(0,K.jsxs)(dd,{onChange:c,$disabled:t,$visualState:o,children:[(0,K.jsx)(cd,{children:(0,K.jsx)(ld,{children:o===od.On?(0,K.jsx)(ud,{$color:`input-toggle-icon-color`,children:(0,K.jsx)(id,{color:`input-toggle-icon-color`,stroke:`inverse`,size:12,weight:l})}):null})}),(0,K.jsx)(sd,{type:`checkbox`,checked:i,readOnly:!0,disabled:t}),` `]})},pd=B.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;B.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  user-select: none;

  ${({$isChecked:e,$disabled:t})=>z`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!t&&z`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!t&&z`
      border-color: var(--input-toggle-checked-border-color);
      ${pd} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!t&&z`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${pd} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&t&&z`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${pd} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&t&&z`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${pd} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `}
  `};
`,B.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`,B.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`,B.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`;var md=B.textarea`

  ${({$fieldState:e})=>z`
    font-family: var(--font-data);
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};

  padding: 8px 15px;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 3px;


  color: var(--input-color-default);
  font-size: 14px;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  &::placeholder {
    font-family: var(--font-data);
    color: var(--input-color-placeholder);
    font-style: italic;
    font-weight: 400;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`,hd=B.div`
  flex-shrink: 0;
  padding: 8px 0;
  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 0 3px 3px;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`;B.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  font-weight: 500;
  color: var(--white-1);
`,B.div`
  ${({$fieldState:e,$showFeedback:t})=>z`
    display: flex;
    position: relative;
    flex-direction: column;

    ${md}{
      ${[`default`,`disabled`].indexOf(e)===-1&&t&&z`
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
      }
    }

    ${hd} {
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);

      ${[`default`,`disabled`].indexOf(e)!==-1&&z`
        display:none;
      `}
    }

    &:focus-within ${hd} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`;var gd=B.div`
  position: relative;
  display: flex;
  width: 100%;
`,_d=B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({$isCompact:e})=>e?`14px`:`16px`};
  pointer-events: none;
`;B.div`
  position: absolute;
  left: ${({$isCompact:e})=>e?`10px`:`12px`};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;var vd=B.select`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  appearance: none;
  font-family: var(--font-data);
  height: var(--input-height);
  width: 100%;
  border-radius: 3px;
  color: var(--input-color-default);
  font-size: 14px;
  cursor: pointer;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  ${({$fieldState:e})=>z`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};


  ${({$isCompact:e,$withIcon:t})=>e?z`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${t?`30px`:`8px`};

    ${_d}{
      right: 14px;
    }
  `:z`
    height: var(--input-height);
    padding: 0 16px 1px ${t?`36px`:`12px`};
  `};

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    color: var(--input-disabled-color-default);
    border: 1px solid var(--input-disabled-border-color);
    background: var(--input-disabled-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-disabled-shadow-color, transparent);
  }

  &::-ms-expand {
    display: none;
  }
`;B.div`

  ${({$activePlaceholder:e})=>e&&z`
    ${vd} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`;var yd=e=>{let t=e.split(`/`).filter(String);return t.length>0?`/`+t[0]:`/`},Q=()=>String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,``),bd=e=>{let t=Number(e);return t!==t},xd=(e,t)=>e===null&&t===null||e===void 0&&t===null?!0:Sd(e)&&Sd(t)?oo(e?.start,t?.start)&&oo(e?.end,t?.end):e instanceof Date&&t instanceof Date?oo(e,t):!1,Sd=e=>e==null||e.start===null||e.start===void 0||e.end===null||e.end===void 0?!1:e.start instanceof Date&&e.end instanceof Date,Cd=16;B.div`
  font-family: ${({theme:e})=>e.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({$disabled:e})=>e&&z`
    opacity: .5;
  `};
`,B.input`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
`,B.div`
  position: absolute;
  left: ${Cd/2}px;
  top: 10px;
  width: calc(100% - ${Cd}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, var(--grey-10), var(--primary-10) 98%);
`,B.span`
  position: absolute;
  top: -3px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: var(--primary-11);
`,B.span`
  position: absolute;
  top: -24px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};

  font-size: 10px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: normal;
  text-align: center;
  color: var(--grey-a11);

  ${({$alignment:e})=>e===`center`&&z`transform: translateX(-50%);;`}
  ${({$alignment:e})=>e===`right`&&z`transform: translateX(5%);`}
  ${({$alignment:e})=>e===`left`&&z`transform: translateX(-95%);`}
`,B.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${Cd}px);
  height: 2px;
`,B(B.span`
  width: ${Cd}px;
  height: ${Cd}px;
  border-radius: 8px;
  background-color: ${({theme:e,$bgColor:t})=>e.colors.feedback[t]};
  position: absolute;
  top: -7.5px;
  left: ${({$leftValue:e})=>`${e}%`};
`)`
  opacity: .5;
`;var wd=B.div``,Td=B.input`
  display: none;
`,Ed=({text:e,buttonDesign:t,buttonSize:n,inputCallback:r,children:i,formAction:a,...o})=>{let s=(0,_.useRef)(null),c=(0,_.useCallback)(async e=>{if(!(e.target.files&&e.target.files.length>0))return;let t=e.target.files;r&&r(t),e.target.value=``},[r]),l=(0,_.useCallback)(()=>{s.current&&s.current.click()},[]);return(0,K.jsxs)(wd,{children:[(0,K.jsx)(Td,{...o,ref:s,type:`file`,onChange:c}),(0,K.jsx)(su,{style:{textAlign:`center`},onClick:l,design:t,size:n,children:e})]})};B.div``,B.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`,B(Hu)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`;var Dd=z`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`;B.div`
  ${Dd};
`,B.div`
  display: flex;
`,B.div`
  display: flex;
  align-items: center;
  ${Dd};
  span {
    font-style: normal;
  }
`,B.div``,B.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({$allMarkCentered:e})=>e?`padding: 0;`:`padding: 0 6px;`};
`,B(Hu)`
  font-family: ${({theme:e})=>e.fontFamily.data};
`;var Od=({name:e,label:t,fieldState:n,feedbackMessage:r,required:i,children:a,formAction:o,...s})=>{let[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(`PasswordHide`);return(0,K.jsx)(Hu,{htmlFor:e,labelText:t,required:i,children:(0,K.jsx)(zu,{type:c?`text`:`password`,actionCallback:()=>{let e=!c;l(e),d(e?`PasswordShow`:`PasswordHide`)},actionIcon:u,name:e,fieldState:n,feedbackMessage:r,required:i,...s})})},kd=({name:e,label:t,fieldState:n=`default`,feedbackMessage:r,required:i,type:a,...o})=>(0,K.jsx)(Hu,{htmlFor:e,labelText:t,required:i,children:(0,K.jsx)(zu,{type:`text`,fieldState:n,feedbackMessage:r,required:i,name:e,...o})}),Ad=B.div`
  ${({$height:e})=>e?`height: ${e}`:null};
  position: relative;
`,jd=B.div`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({$inDropZone:e})=>e?`dashed var(--grey-8) 2px`:null};
`,Md=({height:e,text:t,dropCallback:n,...r})=>{let[i,a]=(0,_.useState)(!1),o=(0,_.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),a(!0)},[]),s=(0,_.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),a(!1)},[]),c=(0,_.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),l=(0,_.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer?.files&&n&&n(e.dataTransfer.files),a(!1)},[n]),u=(0,_.useCallback)(e=>{e.preventDefault()},[]);return(0,_.useEffect)(()=>(window.addEventListener(`dragover`,u),window.addEventListener(`drop`,u),()=>{window.removeEventListener(`dragover`,u),window.removeEventListener(`drop`,u)}),[u]),(0,K.jsx)(Ad,{$height:e,...r,children:(0,K.jsx)(jd,{$inDropZone:i,onDragEnter:o,onDragLeave:s,onDrop:l,onDragOver:c,children:t})})},Nd=z`
  position: absolute;
  display: block;
  opacity: 0.1;
`;B.div`
  ${Nd};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`,B.div`
  ${Nd};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`,B.div`
  ${Nd}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`,B.div`
  ${Nd};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;var Pd=z`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--black-a12);
  background-color: var(--white-1);
`;B.div`
  ${Pd};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({$isResizable:e})=>e&&z`
    cursor: n-resize;
  `};
`,B.div`
  ${Pd};
  top: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: nw-resize;
  `};
`,B.div`
  ${Pd};
  top: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: ne-resize;
  `};
`,B.div`
  ${Pd};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: e-resize;
  `};
`,B.div`
  ${Pd};
  bottom: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: se-resize;
  `};
`,B.div`
  ${Pd};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: s-resize;
  `};
`,B.div`
  ${Pd};
  bottom: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: sw-resize;
  `};
`,B.div`
  ${Pd};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({$isResizable:e})=>e&&z`
    cursor: w-resize;
  `};
`,B.div`
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
`,B.div`
    position: relative;
  z-index: 99;
`,B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`,B.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--mono);

  ${q} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`,B.div`
  button + button {
    margin-left: 10px;
  }
`,B.div`
  position: relative;
  overflow: hidden;
  height: ${({$canvasHeight:e})=>e?`${e}px`:`462px`};
  width: ${({$canvasWidth:e})=>e?`${e}px`:`485px`};
  border-radius: 5px;
  background-color: var(--grey-3);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, var(--white-a10) 35px, var(--white-a10) 70px);
`,B.img`
  display: none;
`,B.div`
  position: absolute;
  border: dashed 1px var(--black-a12);
  box-shadow: 0 0 0 9999em var(--black-a11);
  ${({$cropLeft:e,$cropTop:t,$cropWidth:n,$cropHeight:r})=>z`
    top: ${t}px;
    left: ${e}px;
    width: ${n}px;
    height: ${r}px;
  `};
  cursor: move;
`;var Fd=`150px`,Id=`142px`;B.div`
  position: relative;
  width: ${Id};
  ${({theme:e})=>z`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`,B.div`
  position: relative;
  margin-bottom: 17px;
  height: ${Fd};
  width: ${Id};
`;var Ld=z`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--grey-5);
`;B.img`
  ${Ld}
  object-fit: cover;
`;var Rd=B.div`
  color: var(--grey-10);
  font-size: 14px;
`;B.div`
  ${Ld}
  padding-top: 15px;
  ${Rd} {
    margin-top: 18px;
  }
`,B(Ed)`
  width: 100%;
`,B.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`,B.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${q} {
    display: flex;
    align-items: center;
  }
`,B(J)``,B.div`
  margin: 0 30px;
  ${q}{
    transform: rotate(45deg);
    [stroke]{
      stroke: var(--primary-7);
    }
  }
`,B.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
`,B(Md)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,B.div`
  z-index: 99;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`,B.div`
  padding: ${({$hasFiles:e})=>e?`26px 0 20px 0`:`65px 0 42px 0`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  position: relative;
`,B.div`
  color: var(--grey-11);
  font-size: 20px;
`,B.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: var(--grey-10);
  margin-top: 10px;
  max-width: 386px;
`;var zd=B.form`
  ${({$spacing:e})=>e&&z`
      & >  ${Vu} {
        margin-bottom: ${e};
      }
  `}
`,Bd=({children:e,spacing:t=`45px;`,action:n,...r})=>(0,K.jsx)(zd,{$spacing:t,action:typeof n==`string`?n:void 0,...r,children:(0,K.jsx)(K.Fragment,{children:e})}),Vd=B.button`
  ${X}
  ${({$noBorderTop:e})=>e?`border-top: none`:z`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${q} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({$noBorderTop:e})=>e?`border-top: none`:z`
          border-top: 1px solid var(--border-active-color)`};

    ${q} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`,Hd=B.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Ud=B.div`
  ${({$textMaxWidth:e})=>e&&z`max-width: ${e};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,Wd=B.div`
  ${({$isAscendingIcon:e})=>e&&z`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${q} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--button-icon-size);
      width: var(--button-icon-size);
      g, path {
        stroke: var(--white-a10);
      }
    }
  }
`,Gd=({text:e,icon:t=``,design:n=`primary`,noBorderTop:r=!1,textMaxWidth:i=``,onClickCallback:a,closeCallback:o,hasOnSelectLoading:s,children:c,formAction:l,...u})=>{let d=(0,_.useRef)(null),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(0),g=(0,_.useCallback)(()=>{a&&a(),s?(p(!0),setTimeout(()=>{p(!1),o()},2e3)):setTimeout(()=>{o()},200)},[o,s,a]);return(0,_.useEffect)(()=>{d.current&&h(parseInt(getComputedStyle(d.current).getPropertyValue(`--button-icon-size`)))},[d]),(0,K.jsxs)(Vd,{ref:d,$noBorderTop:r,onClick:g,...u,children:[(0,K.jsx)(Wd,{$isAscendingIcon:t===`FilterAscending`,children:f?(0,K.jsx)(hu,{custom:{size:m},styling:n}):(0,K.jsx)(J,{icon:t})}),(0,K.jsx)(Ud,{$textMaxWidth:i,children:(0,K.jsx)(Hd,{children:e})})]})},Kd=(e,t,n,r=!0)=>{let i=document.title.split(`|`).slice(-1)[0].trim();(0,_.useLayoutEffect)(()=>()=>{document.title=i},[i]),(0,_.useEffect)(()=>{r&&(document.title=qd([...e?[e]:[],...t?[t]:[],...i?[i]:[]],n))},[e,t,n,r,i])},qd=(e,t=`|`)=>{let n=``;return t=` `+t+` `,e.forEach((r,i)=>{n+=r,e.length-1!==i&&(n+=t)}),n},Jd=()=>({copyToClipboard:(0,_.useCallback)(e=>{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`absolute`,t.style.left=`-9999px`,document.body.appendChild(t);let n=document.getSelection();if(n){let e=n.rangeCount>0?n.getRangeAt(0):!1;t.select();let r=document.execCommand(`copy`);return document.body.removeChild(t),e&&(n.removeAllRanges(),n.addRange(e)),r}return!1},[])});function Yd(e,t){let[n,r]=(0,_.useState)(()=>{if(typeof window>`u`)return t;try{let n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.warn(`[useLocalStorage] Failed to parse key "${e}" from localStorage, using initial value:`,n),t}});return[n,(0,_.useCallback)(t=>{try{r(n=>{let r=t instanceof Function?t(n):t;return typeof window<`u`&&window.localStorage.setItem(e,JSON.stringify(r)),r})}catch(t){console.error(`[useLocalStorage] Failed to write key "${e}" to localStorage:`,t)}},[e])]}function Xd(e,t){let n=(0,_.useRef)(t);n.current=t,(0,_.useEffect)(()=>{let t=t=>{e?.current?.contains(t.target)||n.current(t)};return document.addEventListener(`click`,t,!0),()=>{document.removeEventListener(`click`,t,!0)}},[t,e])}var Zd=B.div`
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
  z-index: 999;
  font-family: var(--font-ui);
  background-color: var(--grey-a3);
`,Qd=B.button`
  ${X};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${q} {
    display: flex;
    margin-left: 12px;
  }
  ${({$selected:e=!1})=>e&&z`
    border-bottom: 5px solid var(--primary-7);
  `}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
    transition: transform var(--speed-normal) var(--easing-primary-in-out);
  }

  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,$d=B.div`
  position: relative;
  margin: ${({$isCloseEnable:e})=>e?`27px 0 0`:`0`};
  z-index: 9999;
  width: ${({$width:e})=>e||`580px`};
  padding: ${({$padding:e})=>e?`30px 40px`:`0`};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`,ef=({isOpen:e=!1,isCloseEnable:t=!0,closeText:n=``,width:r=``,padding:i=!0,customComponent:a,onDismiss:o,dismissCallback:s})=>{let c=(0,_.useRef)(null);Xd(c,()=>{t&&(s&&s(),l())});let l=(0,_.useCallback)(()=>{s&&s(),o()},[o,s]);return e?bl.createPortal((0,K.jsx)(Zd,{children:(0,K.jsx)($d,{ref:c,$width:r,$padding:i,$isCloseEnable:t,children:(0,K.jsxs)(K.Fragment,{children:[t?(0,K.jsxs)(Qd,{onClick:()=>l(),children:[n||`CLOSE`,(0,K.jsx)(J,{icon:`CloseCompact`,size:15,color:`grey-12`,weight:`regular`})]}):null,a]})})}),document.body):null},tf={modalProps:{isOpen:!1,onDismiss:()=>null},setModalProps:e=>{console.debug(e)}},nf=_.createContext(tf),rf=({children:e})=>{let[t,n]=(0,_.useState)(tf.modalProps);return(0,K.jsxs)(nf.Provider,{value:{modalProps:t,setModalProps:e=>{n(e)}},children:[(0,K.jsx)(ef,{...t}),e]})},af=()=>{let{modalProps:e,setModalProps:t}=(0,_.useContext)(nf),n=(0,_.useCallback)(n=>{n!==void 0&&t({...e,isOpen:n})},[e,t]),r=(0,_.useCallback)(()=>{n(!1)},[n]);return{createModal:(0,_.useCallback)(e=>{e||t({isOpen:!0,onDismiss:r}),t({isOpen:!0,closeText:e?.closeText,isCloseEnable:e?.isCloseEnable,width:e?.width,padding:e?.padding,dismissCallback:e?.dismissCallback,customComponent:e?.customComponent,onDismiss:r})},[r,t]),isModalOpen:e.isOpen,setModalOpen:n}},of=_.createContext({sendNotification:()=>console.debug(`This is the context initialization should not appear`),clearNotifications:()=>console.debug(`This is the context initialization should not appear`)}),sf=({children:e})=>{let[t,n]=(0,_.useState)(null),r=(0,_.useRef)([]),i=(0,_.useCallback)(()=>{let e=r.current.shift();if(!e)return;let t=()=>{e.closeCallback&&e.closeCallback(),n(null),i()};n({...e,closeCallback:t})},[]),a=(0,_.useCallback)(async e=>{let n={message:e.message,type:e.type,id:Q()};e.icon&&(n.icon=e.icon),e.actionTextButton&&(n.actionTextButton=e.actionTextButton),e.onTextButtonClick&&(n.onTextButtonClick=e.onTextButtonClick),e.closeCallback&&(n.closeCallback=e.closeCallback),e.isPinned&&(n.isPinned=e.isPinned),r.current.push(n),r.current.length===1&&t===null&&i()},[t,i]),o=(0,_.useCallback)(()=>{r.current.length=0,n(e=>e===null?e:{...e,closeNow:!0})},[]),s=(0,_.useMemo)(()=>({sendNotification:a,clearNotifications:o}),[o,a]);return(0,K.jsxs)(of.Provider,{value:s,children:[t?(0,K.jsx)(Xl,{...t}):null,e]})},cf=(e=()=>{},t=1e3)=>{let n=(0,_.useRef)(null),r=(0,_.useRef)(e),i=(0,_.useRef)(!1),a=(0,_.useCallback)(async()=>{n.current!==null&&(console.debug(`Clearing previous`),clearTimeout(n.current),n.current=null),await r.current(),i.current||(console.debug(`Starting next timeout`),n.current=setTimeout(a,t))},[t]);(0,_.useEffect)(()=>{r.current=e},[e]),(0,_.useEffect)(()=>(i.current=!1,a(),()=>{console.debug(`canceled`),i.current=!0,n.current!==null&&(console.debug(`clearing final`,n.current),clearTimeout(n.current),n.current=null)}),[a])};function lf(e){let[t,n]=(0,_.useState)(!1);return(0,_.useLayoutEffect)(()=>{let t=window.matchMedia(e);n(t.matches);let r=e=>n(e.matches);return t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[]),t}function uf(){let e={isSmall:lf(Ol.small),isMedium:lf(Ol.medium),isLarge:lf(Ol.large),isXLarge:lf(Ol.xlarge),isXXLarge:lf(Ol.xxlarge),activeScreen:`small`};return e.isSmall&&(e.activeScreen=`small`),e.isMedium&&(e.activeScreen=`medium`),e.isLarge&&(e.activeScreen=`large`),e.isXLarge&&(e.activeScreen=`xlarge`),e.isXXLarge&&(e.activeScreen=`xxlarge`),e}function df(e){return(0,K.jsxs)(`svg`,{width:610,height:446,viewBox:`0 0 610 446`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,K.jsx)(`rect`,{width:609.91,height:446,fill:`#DDDDDD`}),(0,K.jsx)(`path`,{d:`M242.675 210.273V235H239.246L226.677 216.865H226.447V235H222.717V210.273H226.17L238.751 228.432H238.98V210.273H242.675ZM269.596 222.636C269.596 225.277 269.113 227.546 268.148 229.446C267.182 231.338 265.858 232.795 264.175 233.817C262.501 234.831 260.597 235.338 258.464 235.338C256.323 235.338 254.412 234.831 252.729 233.817C251.055 232.795 249.735 231.334 248.769 229.434C247.803 227.534 247.32 225.268 247.32 222.636C247.32 219.996 247.803 217.73 248.769 215.839C249.735 213.939 251.055 212.482 252.729 211.468C254.412 210.446 256.323 209.935 258.464 209.935C260.597 209.935 262.501 210.446 264.175 211.468C265.858 212.482 267.182 213.939 268.148 215.839C269.113 217.73 269.596 219.996 269.596 222.636ZM265.902 222.636C265.902 220.624 265.576 218.93 264.924 217.553C264.28 216.169 263.394 215.122 262.268 214.414C261.149 213.698 259.881 213.339 258.464 213.339C257.04 213.339 255.768 213.698 254.649 214.414C253.53 215.122 252.645 216.169 251.993 217.553C251.349 218.93 251.027 220.624 251.027 222.636C251.027 224.649 251.349 226.347 251.993 227.732C252.645 229.108 253.53 230.154 254.649 230.871C255.768 231.579 257.04 231.933 258.464 231.933C259.881 231.933 261.149 231.579 262.268 230.871C263.394 230.154 264.28 229.108 264.924 227.732C265.576 226.347 265.902 224.649 265.902 222.636ZM286.977 210.273V235H283.246V210.273H286.977ZM292.41 210.273H296.938L304.81 229.494H305.1L312.972 210.273H317.499V235H313.95V217.107H313.72L306.428 234.964H303.482L296.189 217.094H295.96V235H292.41V210.273ZM325.012 235H321.052L329.951 210.273H334.261L343.159 235H339.199L332.208 214.764H332.015L325.012 235ZM325.676 225.317H338.523V228.456H325.676V225.317ZM362.303 218.085C362.069 217.352 361.755 216.696 361.361 216.116C360.974 215.529 360.512 215.03 359.972 214.619C359.433 214.201 358.817 213.883 358.125 213.665C357.441 213.448 356.688 213.339 355.867 213.339C354.475 213.339 353.219 213.698 352.1 214.414C350.981 215.13 350.096 216.181 349.444 217.565C348.8 218.942 348.478 220.628 348.478 222.624C348.478 224.629 348.804 226.323 349.456 227.707C350.108 229.092 351.001 230.142 352.136 230.859C353.271 231.575 354.563 231.933 356.012 231.933C357.356 231.933 358.527 231.66 359.526 231.112C360.532 230.565 361.308 229.792 361.856 228.794C362.411 227.788 362.689 226.605 362.689 225.244L363.655 225.425H356.58V222.347H366.299V225.16C366.299 227.237 365.856 229.04 364.971 230.569C364.094 232.09 362.878 233.265 361.325 234.094C359.779 234.924 358.008 235.338 356.012 235.338C353.774 235.338 351.81 234.823 350.12 233.793C348.438 232.762 347.126 231.301 346.184 229.41C345.242 227.51 344.771 225.256 344.771 222.648C344.771 220.676 345.045 218.906 345.592 217.336C346.14 215.766 346.908 214.434 347.898 213.339C348.897 212.237 350.068 211.396 351.412 210.816C352.764 210.228 354.241 209.935 355.843 209.935C357.179 209.935 358.423 210.132 359.574 210.526C360.733 210.921 361.763 211.48 362.665 212.205C363.574 212.929 364.327 213.79 364.923 214.788C365.518 215.778 365.921 216.877 366.13 218.085H362.303ZM371.035 235V210.273H386.538V213.484H374.766V221.018H385.729V224.218H374.766V231.788H386.683V235H371.035Z`,fill:`#656565`})]})}var ff=B.div`
  position: relative;
  line-height: 0;
  ${({$minHeight:e})=>e&&`min-height: ${e}`};
  ${({$minWidth:e})=>e&&`min-width: ${e}`};
`,pf=`
  max-width:  100%;
  max-height: 100%;
  border-radius: 3px;
  background-color: var(--grey-11);
`,mf=B.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hf=B.video`
  ${pf};
  outline: none;

  ${({$isLoaded:e,$hasModalLimits:t})=>z`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    opacity: ${e?`1`:`0`};

    ${t&&z`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,gf=B.img`
  ${pf};

  ${({$isLoaded:e,$hasModalLimits:t})=>z`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    display: ${e?`block`:`none`};
    opacity: ${e?`1`:`0`};

    ${t&&z`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,_f=({src:e,alt:t,videoOptions:n={},mediaType:r,hasModalLimits:i,retryLoading:a=!1,retryLimit:o=5,minWidth:s,minHeight:c,onError:l=()=>{},onMediaLoad:u=()=>{}})=>{let[d,f]=(0,_.useState)(0),[p,m]=(0,_.useState)(e),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(!1),{loop:b=!1,autoPlay:x=!0,controls:S=!1,muted:C=!0,children:w,...T}=n,E=(0,_.useCallback)(t=>{if(!a||d>=o)l(t.nativeEvent),y(!0),g(!0);else{let t=1e3*(d**2+Math.random());f(e=>e+1),setTimeout(()=>{m(`${e}?v=${Date.now()}`)},t)}},[e,l,d,a,o]),D=(0,_.useCallback)(()=>{u(),y(!0)},[u,y]);return(0,K.jsxs)(ff,{$minWidth:s,$minHeight:c,children:[r===`video`?(0,K.jsx)(hf,{loop:b,autoPlay:x,controls:S,muted:C,onError:E,...T,$hasModalLimits:i,src:h?``:p,$isLoaded:v&&!h,preload:`metadata`,onCanPlayThrough:D,children:(0,K.jsx)(K.Fragment,{children:w})}):(0,K.jsx)(gf,{alt:t,onError:E,$hasModalLimits:i,src:h?``:p,onLoad:D,$isLoaded:v&&!h}),!v&&(0,K.jsx)(mf,{children:(0,K.jsx)(hu,{size:`large`,styling:`primary`})}),h&&(0,K.jsx)(df,{})]})},vf={controls:!0},yf=()=>{let{createModal:e,isModalOpen:t,setModalOpen:n}=af();async function r(e,t){let n=!1;if(t===`img`){let t=new Image;t.src=e;try{await new Promise((e,r)=>{t.onload=()=>e(n=!0),t.onerror=r})}catch{n=!1}}if(t===`video`){let t=document.createElement(`video`);t.src=e;try{await new Promise((e,r)=>{t.oncanplaythrough=()=>e(n=!0),t.onerror=r})}catch{n=!1}}return n}return{createMediaModal:(0,_.useCallback)(async t=>{let{src:n,mediaType:r,alt:i,videoOptions:a=vf,onError:o,onMediaLoad:s,closeText:c,dismissCallback:l,retryLoading:u=!1,retryLimit:d=5,minHeight:f=`300px`,minWidth:p=`300px`}=t;e({padding:!1,width:`auto`,closeText:c,dismissCallback:l,customComponent:(0,K.jsx)(_f,{src:n,mediaType:r,alt:i,videoOptions:a,onError:o,onMediaLoad:s,retryLoading:u,retryLimit:d,minHeight:f,minWidth:p,hasModalLimits:!0})})},[e]),isMediaUrlValid:r,isMediaModalOpen:t,setMediaModalOpen:n}},bf=`(prefers-color-scheme: dark)`,xf=e=>{e?(document.body.classList.add(`light-theme`),document.body.classList.remove(`dark-theme`)):(document.body.classList.add(`dark-theme`),document.body.classList.remove(`light-theme`))},Sf=()=>{let e=localStorage.getItem(`isDarkThemeEnabled`),t=!0;return t=e===null?window.matchMedia(bf)&&window.matchMedia(bf).matches:e!==`false`,xf(!t),t},Cf=()=>{let[e,t]=(0,_.useState)(Sf),n=(0,_.useCallback)(()=>{t(e=>(localStorage.isDarkThemeEnabled=!e,xf(e),!e))},[]),r=(0,_.useCallback)(e=>{if(localStorage.getItem(`isDarkThemeEnabled`)!==null)return;let n=e.matches;t(()=>(xf(!n),n))},[]);return(0,_.useEffect)(()=>{let e=window.matchMedia(bf);return e.addEventListener(`change`,r),()=>{e.removeEventListener(`change`,r)}},[n,r]),{isDarkThemeEnabled:e,setIsDarkThemeEnabled:t,onThemeToggle:n,isLightMode:!e}},wf=30,Tf=B.div`
  height: var(--button-height);
  overflow: visible;
`,Ef=B.div`
  ${({$isOpen:e})=>e&&`z-index: 100`};
  font-family: var(--font-ui);
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 100%);
  box-shadow: var(--button-lift-default-x, 0px) var(--button-lift-default-y, 2px) var(--button-lift-default-blur, 4px) var(--button-lift-default-spread, 2px) var(--button-lift-default-color, rgba(221, 234, 248, 0.08));
`,Df=B.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`,Of=B.button`
  ${X}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${q} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      path, g {
        stroke: var(--toggle-icon);
      }
    }
  }

  &:hover:enabled {
    background: var(--toggle-icon-hover-bg);
  }

  &:active:enabled {
    background: var(--toggle-icon-active-bg);
    ${q} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${q} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`,kf=(e,t)=>{if(t)return t;if(e)return`${e-wf}px`},Af=({mainButtonId:e,buttonList:t,design:n=`primary`,size:r,textMaxWidth:i,disabled:a=!1,...o})=>{let[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useCallback)(()=>{c(e=>!e)},[]),f=(0,_.useCallback)(()=>{c(!1)},[]);return Xd(u,f),(0,K.jsx)(Tf,{children:(0,K.jsxs)(Ef,{ref:u,className:`split-button-${n} split-button-size-${r}`,$isOpen:s,...o,children:[(0,K.jsxs)(Df,{ref:l,children:[t.filter(t=>t.id===e).map(({id:e,text:t,icon:r,disabled:i,...o})=>(0,K.jsx)(Gd,{noBorderTop:!0,disabled:a||i,closeCallback:f,icon:r||`NoIcon`,text:t,design:n,...o},e)),(0,K.jsx)(Of,{onClick:d,disabled:a,children:(0,K.jsx)(J,{icon:s?`Close`:`Down`,size:8})})]}),s&&!a?(0,K.jsx)(_.Fragment,{children:t.filter(t=>t.id!==e).map(({id:e,text:t,icon:r,disabled:a,...o})=>(0,K.jsx)(Gd,{icon:r||`NoIcon`,text:t,design:n,disabled:a,textMaxWidth:kf(l.current?.clientWidth,i),...o,closeCallback:f},e))}):null]})})},jf=B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`,Mf=({buttons:e})=>(0,K.jsx)(jf,{children:e.map(({id:e,buttonType:t,icon:n,text:r,iconPosition:i,size:a,...o})=>t===`icon-button`?(0,K.jsx)(Su,{size:a||`small`,icon:n||``,position:i,...o,children:r},e||`button-stack-${e}`):(0,K.jsx)(su,{size:a||`small`,...o,children:r},e||`button-stack-${e}`))}),Nf=B.div`
  display: flex;
  flex-direction: column;

  ${({$hide:e})=>e&&z`
    display: none;
  `}
`,Pf=B.label`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-10);
  padding: 12px;
  border-bottom: var(--grey-6) 1px solid;
`,Ff=B.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`,If=B.div`
  flex: 0 0 32px;
  align-items: center;
  display: flex;
  padding-top: 1px;
`,Lf=B.input`
  font-family: var(--font-data);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: var(--grey-12);
  background-color: transparent;

  width: 100%;
  border: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:e})=>e?`transparent 1px solid`:`var(--warning-a9) 1px solid`:`transparent 1px solid`};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {

    border-color: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:e})=>e?`transparent`:`var(--warning-a9)`:`transparent`};
  }
`,Rf=B.div`
  flex: 0 0 20px;
  text-align: center;
`,zf=B.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {
    background: var(--primary-9);
    box-shadow: 0px 0px 0px 5px var(--primary-9);    
    ${Lf}{
      color: var(--white-1);
      border-color: transparent;
    }

    ${Rf}{
      color: var(--white-1);
      text-align: center;
    }
  }
`,Bf=({allowAfterMidnight:e=!1,title:t,hasDate:n,hasTime:r,isTimeRangeValid:i=!0,date:a=new Date,setDateCallback:o=()=>{}})=>{let s=(e,t,n,r)=>{let i=Number(e.slice(-2)),a=Number(t.slice(-2)),o=i>24?Number(e.slice(-1)):i,s=a>60?Number(t.slice(-1)):a;return o>=24&&s!==-1&&r?{newHour:24,newMin:0}:o===0&&s===0&&r&&!n?{newHour:0,newMin:1}:o===23&&s===60&&!r?{newHour:23,newMin:59}:o>=24&&!r?{newHour:23,newMin:s}:s===60?{newHour:o+1,newMin:0}:o>0&&s===-1?{newHour:o-1,newMin:59}:o===0&&s===-1?{newHour:o,newMin:0}:o===-1?{newHour:0,newMin:s}:{newHour:o,newMin:s}},[c,l]=(0,_.useState)(to(a,`mm`)),[u,d]=(0,_.useState)(to(a,`HH`)),f=(0,_.useCallback)(({target:{value:t}})=>{if(bd(t))return;let{newHour:r,newMin:i}=s(t,u,n,e);o(Wi([ia(a),uo(a,{hours:r,minutes:i,seconds:0,milliseconds:0})]))},[e,a,u,n,o]),p=(0,_.useCallback)(({target:{value:t}})=>{if(bd(t))return;let{newHour:r,newMin:i}=s(c,t,n,e);o(Wi([ia(a),uo(a,{hours:r,minutes:i,seconds:0,milliseconds:0})]))},[e,a,c,n,o]);return(0,_.useEffect)(()=>{e&&oo(a,ia(a))?(l(`24`),d(`00`)):(d(to(a,`mm`)),l(to(a,`HH`)))},[a,e]),(0,K.jsxs)(Nf,{$hide:!n&&!r,children:[(0,K.jsx)(Pf,{children:t}),n&&(0,K.jsxs)(Ff,{children:[(0,K.jsx)(If,{children:(0,K.jsx)(J,{icon:`Date`,color:`dimmed`,size:14,weight:`light`})}),(0,K.jsx)(zf,{children:(0,K.jsx)(Lf,{type:`text`,readOnly:!0,value:to(a,`yyyy/MM/dd`),$isTimeRangeValid:i})})]}),r&&(0,K.jsxs)(Ff,{children:[(0,K.jsx)(If,{children:(0,K.jsx)(J,{icon:`Time`,color:`dimmed`,size:14,weight:`light`})}),(0,K.jsxs)(zf,{children:[(0,K.jsx)(Lf,{name:`hours`,type:`number`,min:`-1`,max:e?24:23,value:c,onChange:f,$isTimeRangeValid:i,autoComplete:`off`,$isTimeInput:!0}),(0,K.jsx)(Rf,{children:`:`}),(0,K.jsx)(Lf,{name:`minutes`,type:`number`,min:`-1`,max:`60`,value:u,onChange:p,$isTimeRangeValid:i,autoComplete:`off`,$isTimeInput:!0})]})]})]})},Vf=e=>({start:uo(e,{seconds:0,milliseconds:0}),end:ia(e)}),Hf=new Date,Uf=Vf(Bi(new Date)),Wf=B.div`
  display: flex;
`,Gf=B.div`
  border-right: var(--grey-6) 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`,Kf=B.div`
  border-top: var(--grey-6) 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  box-sizing: border-box;
`,qf=B.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,Jf=B.div`
  font-family: var(--font-data);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,Yf=B.div`
  user-select: none;
`,Xf=B.div`
  display: flex;
  height: 70px;
  border-bottom: var(--grey-6) 1px solid;
  text-align: center;
`,Zf=B.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: var(--primary-10);

  span {
    display: block;
    flex: 0;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.33px;
  }
`,Qf=B.div`
  [stroke]{
    stroke: var(--grey-8);
  }
`,$f=B.button`
  cursor: pointer;
  flex: 0 0 72px;
  border: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: color var(--speed-fast) var(--easing-primary-in-out);

  ${Qf}{
    svg * {
      transition: stroke var(--speed-fast) var(--easing-primary-in-out);
    }
  }

  &:hover:enabled  {
    color: var(--grey-12);

    ${Qf}{
      [stroke]{
        stroke: var(--grey-12);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`,ep=B.div`
  padding: 5px 0;
`,tp=B.div`
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid var(--grey-6);
`,np=B.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,rp=B.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`,ip=B(rp)`
  border-bottom: var(--grey-6) 1px solid;
`,ap=B.button`
  ${X};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--grey-12);
  font-family: var(--font-data);
`,op=B(ap)`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey-a11);
`,sp=B.div`
  position: absolute;
  left: 18px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-11);

  ${({$state:e})=>(e===`single`||e===`start`||e===`end`)&&z`
    background-color: var(--white-12);`}

  ${({$state:e})=>e===`inside`&&z`
    background-color: var(--primary-12);`}

  ${({$isToday:e})=>e&&z`
    left: 16px;
    bottom: 3px;
  `}

  ${({$hasContent:e})=>!e&&z`
    display: none;
  `}
`,cp=B.span`
  transform: translateY(-1px);
`,lp=B(ap)`
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${({$thisMonth:e})=>!e&&z`
    color: var(--grey-a8);
  `}

  ${({$isToday:e})=>e&&z`
    border: 2px solid var(--primary-a7);
  `}

  ${({$state:e})=>e!==`single`&&e!==`start`&&e!==`end`&&z`
    &:hover:enabled {
      background: var(--primary-a6);
      color: var(--white-1);
    }
  `};

  ${({$state:e})=>(e===`single`||e===`start`||e===`end`)&&z`
    background: var(--primary-9);
    color: var(--white-1);
  `}

  ${({$state:e})=>e===`start`&&z`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({$state:e})=>e===`end`&&z`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({$state:e})=>e===`insideHover`&&z`
    background: var(--primary-a9) !important;
    color: var(--white-1);
  `}

  ${({$state:e})=>e===`inside`&&z`
    background: var(--primary-a5);
    border-radius: 0;
    opacity: 1;

    &:nth-child(7n+1), &:nth-child(7n){
      &::after {
        background: var(--primary-a5);
        display: block;
        content: '';
        position: absolute;
        left: -10px;
        width: 10px;
        top: 0;
        height: 40px;
      }
    }

    &:nth-child(7n)::after {
      left: auto;
      right: -10px;
    }
  `}

  &:disabled {
    color: var(--grey-6);
    cursor: not-allowed;

    ${({$state:e})=>(e===`single`||e===`start`||e===`end`)&&z`
      color: var(--white-1);
      background: var(--red-a9);
    `}

    ${({$state:e})=>e===`inside`&&z`
      color: var(--white-1);
      background: var(--red-a7);
      &:nth-child(7n+1), &:nth-child(7n){
        &::after {
          background: var(--red-a7);
        }
      }
    `};
  }

`,up=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],dp=[`日`,`月`,`火`,`水`,`木`,`金`,`土`],fp=({dateMode:e=`interval`,timeMode:t=`interval`,dateTimeTextUpper:n=`From`,dateTimeTextLower:r=`To`,timeZoneTitle:i=`Timezone`,timeZoneValueTitle:a=`JST`,hasEmptyValue:o=!1,updateCallback:s=()=>{},initialValue:c,availableRange:l,contentDays:u,lang:d=`en`,cancelText:f=`Cancel`,applyText:p=`Apply`,hasApply:m=!1,disableApply:h=!1,applyCallback:g=()=>{},cancelCallback:v=()=>{}})=>{let[y,b]=(0,_.useState)(hp(o,c)),[x,S]=(0,_.useState)(y===null?Hf:y.start),[C,w]=(0,_.useState)(`start`),[T,E]=(0,_.useState)([]),D=(0,_.useRef)(!0),[O,k]=(0,_.useState)(!0),A=d===`ja`?dp:up;(0,_.useEffect)(()=>{if(D.current)D.current=!1;else{let e=new Date;b(Vf(Bi(e))),S(e)}},[e,t]),(0,_.useEffect)(()=>{E(fa({start:pa(x),end:aa(x)}))},[x]),(0,_.useEffect)(()=>{y!==null&&s(e===`interval`||t===`interval`?y:y.start)},[e,y,t,s]);let j=(0,_.useCallback)(t=>{let n=y||Uf;if(e===`single`)b({start:mp(n.start,t),end:mp(n.end,t)});else if(C===`end`&&ao(t,n.start)){let e=mp(n.end,t);b({...n,end:e}),w(`done`)}else (C===`start`||C===`end`||C===`done`)&&(b({start:mp(n.start,t),end:mp(n.end,t)}),w(`end`))},[e,y,C]);(0,_.useEffect)(()=>{let{start:e,end:n}=y||Uf;t===`interval`&&ao(Mi(e,{minutes:1}),n)?oo(n,ia(e))&&n.getSeconds()>0?k(!0):k(!1):k(!0)},[y,t]);let M=(0,_.useCallback)(e=>{let{end:t}=y||Uf;b({start:e,end:t})},[y]),ee=(0,_.useCallback)(e=>{let{start:t}=y||Uf;b({start:t,end:e})},[y]);return(0,K.jsxs)(Wf,{children:[(0,K.jsxs)(Gf,{children:[(0,K.jsx)(Bf,{isTimeRangeValid:O,title:n,hasDate:!0,hasTime:t!==`off`,date:y?y.start:Uf.start,setDateCallback:M}),(0,K.jsx)(Bf,{isTimeRangeValid:O,title:r,hasDate:e===`interval`,hasTime:t===`interval`,date:y?y.end:Uf.end,allowAfterMidnight:!0,setDateCallback:ee}),(0,K.jsxs)(Kf,{children:[(0,K.jsx)(qf,{children:i}),(0,K.jsx)(Jf,{children:a})]})]}),(0,K.jsxs)(Yf,{children:[(0,K.jsxs)(Xf,{children:[(0,K.jsxs)($f,{type:`button`,disabled:gp(x,l),onClick:()=>S(ji(x,-1)),children:[(0,K.jsx)(Qf,{children:(0,K.jsx)(J,{icon:`Left`,color:`dimmed`,size:10})}),to(ji(x,-1),`MMM`,{locale:d===`ja`?gl:Oa})]}),(0,K.jsxs)(Zf,{children:[(0,K.jsx)(`span`,{children:to(x,`yyyy`)}),to(x,`MMMM`,{locale:d===`ja`?gl:Oa})]}),(0,K.jsxs)($f,{type:`button`,disabled:_p(x,l),onClick:()=>S(ji(x,1)),children:[to(ji(x,1),`MMM`,{locale:d===`ja`?gl:Oa}),(0,K.jsx)(Qf,{children:(0,K.jsx)(J,{icon:`Right`,color:`dimmed`,size:10})})]})]}),(0,K.jsx)(ip,{children:A.map((e,t)=>(0,K.jsx)(op,{children:e},t))}),(0,K.jsx)(ep,{children:T.map((e,t)=>(0,K.jsx)(rp,{children:da({start:e,end:ha(e)}).map((e,t)=>{let n=pp(e,y),r=G(e);return(0,K.jsxs)(lp,{disabled:vp(e,l),onClick:()=>j(e),$state:n,$thisMonth:so(e,x),$isToday:r,children:[(0,K.jsx)(cp,{children:to(e,`d`)}),(0,K.jsx)(sp,{$hasContent:yp(e,u),$state:n,$isToday:r})]},t)})},t))}),m&&(0,K.jsx)(tp,{children:m&&(0,K.jsxs)(np,{children:[(0,K.jsx)(su,{design:`secondary`,onClick:v,children:f}),(0,K.jsx)(su,{onClick:g,disabled:!O||y===null||h,children:p})]})})]})]})},pp=(e,t,n)=>{let r=`off`,i=!1;if(t===null)return r;let a=io(t).days===0;try{i=co(e,t)}catch{i=!1}return(i||qi(t.start,e))&&(r=a?`single`:qi(t.start,e)?`start`:qi(t.end,e)?`end`:`inside`),r},mp=(e,t)=>uo(t,{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}),hp=(e,t)=>{if(e&&t===void 0)return null;let n=t||Vf(Bi(new Date));return n instanceof Date?Vf(n):n},gp=(e,t)=>{if(!t?.start)return!1;try{let n=t.start.getFullYear(),r=t.start.getMonth();if(e.getFullYear()<n||e.getFullYear()===n&&e.getMonth()<=r)return!0}catch(e){console.warn(`Invalid available range:`,t,e)}return!1},_p=(e,t)=>{if(!t?.end)return!1;try{let n=t.end.getFullYear(),r=t.end.getMonth();if(e.getFullYear()>n||e.getFullYear()===n&&e.getMonth()>=r)return!0}catch(e){console.warn(`Invalid available range:`,t,e)}return!1},vp=(e,t)=>{if(!t)return!1;let{start:n,end:r}=t;try{if(n&&e<n&&!qi(e,n)||r&&e>r&&!qi(e,r))return!0}catch(e){console.warn(`Invalid available range:`,t,e)}return!1},yp=(e,t)=>t?t.some(t=>qi(e,t)):!1,bp=B.div`
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
  background-color: var(--filter-dropdown-background-color-fallback);
  @supports( background-color: var(--filter-dropdown-background-color) ){
    background-color: var(--filter-dropdown-background-color);
  };

  backdrop-filter: blur(20px);
  border-right: 1px solid var(--grey-6);
  border-bottom: 1px solid var(--grey-6);
  border-left: 1px solid var(--grey-6);
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  overflow: visible;
  padding-top: 5px;

  &::before {
    content: '';
    background-color: var(--filter-dropdown-accent);
    border-radius: 3px 3px 0 0;
    box-shadow: 0px 5px 25px 0px var(--primary-a5);

    display: block;
    height: 5px;
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    z-index: 1;
  }

`,xp=B.div`
  display: inline-flex;
  flex-direction: column;
`,Sp=({children:e,...t})=>(0,K.jsx)(bp,{...t,children:(0,K.jsx)(xp,{children:(0,K.jsx)(K.Fragment,{children:e})})}),Cp=B.div`
  ${({$isSortAscending:e})=>e&&z`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,wp=zn`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Tp=B.div`
  ${({$design:e})=>e===`default`?`padding: 0px 12px 0px 8px;`:`padding: 0px 8px;`};
`,Ep=B.button`
  ${X};
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
    opacity ${El.speed.fast} ${El.easing.primary.out},
    background-color ${El.speed.fast} ${El.easing.primary.out},
    box-shadow ${El.speed.fast} ${El.easing.primary.out},
    color ${El.speed.fast} ${El.easing.primary.out},
    border ${El.speed.fast} ${El.easing.primary.out};

  animation: ${wp} ${El.speed.slower} ${El.easing.primary.out};

  ${q} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${El.speed.fast} ${El.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({$design:e})=>e===`basic`?``:z`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${q} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({$isOpen:e})=>!e&&z`
      ${Tp} ${q} {
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

  ${({$isOpen:e,$hasFlipArrow:t})=>e&&t&&z`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${q} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${Tp} ${q} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,Dp=B.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Op=B.div``,kp=({icon:e,hasFlipArrow:t=!1,isSortAscending:n=!1,isOpen:r,design:i=`default`,children:a,formAction:o,...s})=>(0,K.jsx)(Ep,{type:`button`,...s,$isOpen:r,$hasFlipArrow:t,$design:i,children:(0,K.jsxs)(Dp,{children:[(0,K.jsx)(Cp,{$isSortAscending:n,children:(0,K.jsx)(J,{icon:e,size:12,weight:`light`,color:`filter-button-icon-color`})}),(0,K.jsx)(Op,{$hasFlipArrow:t,children:(0,K.jsx)(K.Fragment,{children:a})}),t&&(0,K.jsx)(Tp,{$design:i,children:(0,K.jsx)(J,{icon:r?`Up`:`Down`,size:6,color:`grey-11`})})]})}),Ap=B.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`,jp=B.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`,Mp=B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,Np=B.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: var(--inverse);
    }
  }
`,Pp=B.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
`,Fp=B.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,Ip=B.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;

  ${({$selected:e,$disabled:t})=>z`
    
    ${jp}, ${Pp} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${Ap} {
        color: var(--input-label-hover);
      }

      ${jp}, ${Pp} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${Fp}, ${Mp} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${e&&z`
      ${Ap} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${jp}, ${Pp} {
        border-color: var(--input-toggle-checked-border-color);
        ${Fp}, ${Mp} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${Ap} {
          color: var(--input-label-hover);
        }

        ${jp}, ${Pp} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${Fp}, ${Mp} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${t&&z`
      cursor: not-allowed;
    `};

    ${jp}, ${Pp} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${Fp} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${Ap}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`,Lp=({title:e,value:t,optionType:n=`text`,selected:r=!1,disabled:i=!1,onClick:a=()=>{},...o})=>{let s=Tl.icons.weights.regular;return(0,K.jsxs)(Ip,{onClick:a,$disabled:i,$selected:r,...o,children:[n===`checkbox`&&(0,K.jsx)(jp,{children:(0,K.jsx)(Mp,{children:r&&(0,K.jsx)(Np,{children:(0,K.jsx)(id,{color:`inverse`,stroke:`inverse`,size:12,weight:s})})})}),n===`radio`&&(0,K.jsx)(Pp,{children:(0,K.jsx)(Fp,{})}),(0,K.jsx)(Ap,{children:e})]})},Rp=B.div`
  padding: 0 2px;
`,zp=B.div`
  ${({$hasBorder:e,$disabled:t,$noBackground:n,$width:r})=>z`

    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: var(--search-input-container-gap, 6px);
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${e&&z`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${Rp}{
        padding: 0;
      }
    `};

    ${t&&z`
      opacity: 50%;
      cursor: not-allowed;
      `};

    ${r&&z`
      width: ${r};
    `};

    background-color: ${n?`transparent`:`var(--grey-1)`};

    &:focus-within {
      background-color: ${n?`transparent`:`var(--grey-1)`};
      border: ${e?`1px solid var(--primary-9)`:`none`};
      box-shadow: 0px 4px 9px 0px ${n?`transparent`:`var(--primary-a2)`};
    }

  `};

  ${q} {
    flex-shrink: 0;
    display: flex;
  }


`,Bp=B.button`
  ${X};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${q} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Vp=B.input`
  ${Rl};

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

`,Hp=({color:e=`subtle`,hasBorder:t=!0,iconSize:n=12,disabled:r=!1,noBackground:i=!1,hasCrossButton:a=!1,onCrossClick:o=()=>{},width:s,children:c,formAction:l,...u})=>(0,K.jsxs)(zp,{$hasBorder:t,$disabled:r,$noBackground:i,$width:s,children:[(0,K.jsx)(Rp,{children:(0,K.jsx)(J,{color:e,icon:`Search`,weight:`regular`,size:n})}),(0,K.jsx)(Vp,{$color:e,disabled:r,...u}),a&&(0,K.jsxs)(Bp,{onClick:o,children:[` `,(0,K.jsx)(J,{icon:`CloseCompact`,color:`dimmed`,size:12})]})]}),Up=e=>e==null||e.value===void 0||e.value===null||e.text===null?!1:(typeof e.value==`number`||typeof e.value==`string`)&&typeof e.text==`string`,Wp=B.div`
  position: relative;
`,Gp=B.div`
  display: inline-block;
`,Kp=B.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;

  ${({$openState:e,$disabled:t})=>e&&z`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};

    ${e.position===`bottom-right`&&`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position===`bottom-left`&&`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position===`top-left`&&`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

    ${e.position===`top-right`&&`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

  `};
`,qp=(e,t,n)=>{let r=`bottom-right`,i=e.left+t>window.innerWidth,a=e.bottom+n>window.innerHeight,o=e.bottom>n;return i&&a&&o&&(r=`top-left`),a&&!i&&o&&(r=`top-right`),!a&&i&&(r=`bottom-left`),r},Jp=(0,_.forwardRef)(({buttonIcon:e,buttonText:t,disabled:n=!1,minWidth:r=270,minHeight:i=190,isSortAscending:a,design:o=`default`,noCloseOnClickOutside:s,children:c,onToggleOpenCallback:l=()=>{},onCloseCallback:u=()=>{},...d},f)=>{let[p,m]=(0,_.useState)({isOpen:!1,position:`bottom-right`}),h=(0,_.useRef)(null),g=(0,_.useRef)(null);Xd(g,(0,_.useCallback)(()=>{s||(p.isOpen&&u(),m(e=>({...e,isOpen:!1})))},[s,u,p.isOpen]));let v=(0,_.useCallback)((e,t)=>{if(!h.current)return;let n=h.current.getBoundingClientRect();if(!n)return;let r=qp(n,e,t);l(!p.isOpen),m(e=>{let t=!e.isOpen;return{...e,isOpen:t,position:r}})},[l,p.isOpen]),y=(0,_.useCallback)(()=>{m(e=>({...e,isOpen:!1}))},[]);return(0,_.useImperativeHandle)(f,()=>({imperativeClose:y})),(0,K.jsxs)(Wp,{ref:g,...d,children:[(0,K.jsx)(Gp,{ref:h,children:(0,K.jsx)(kp,{icon:e,isOpen:p.isOpen,onClick:()=>v(r,i),disabled:n,isSortAscending:a,design:o,hasFlipArrow:!0,children:t})}),(0,K.jsx)(Kp,{$openState:p,$disabled:n,$minWidth:r,children:(0,K.jsx)(K.Fragment,{children:c})})]})}),Yp=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`,Xp=B.div`
  font-family: var(--font-data);
  color: var(--grey-11);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  padding: 15px 0;
`,Zp=({loadingText:e})=>(0,K.jsxs)(Yp,{children:[(0,K.jsx)(hu,{size:`large`,styling:`primary`}),(0,K.jsx)(Xp,{children:e})]}),Qp=B.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid var(--grey-6);
  background: var(--grey-a2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`,$p=B.div`
  display: flex;
  align-items: center;
`,em=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,tm=({resetText:e=`Reset`,cancelText:t=`Cancel`,closeText:n=`Close`,applyText:r=`Apply`,hasReset:i=!1,hasApply:a=!1,disableApply:o=!1,disableReset:s=!0,onReset:c=()=>{},onCancel:l=()=>{},onApply:u=()=>{}})=>(0,K.jsxs)(Qp,{children:[(0,K.jsx)($p,{children:i&&(0,K.jsx)(su,{size:`small`,design:`text-only`,disabled:s,onClick:c,children:e})}),a&&(0,K.jsxs)(em,{children:[(0,K.jsx)(su,{size:`small`,design:`secondary`,onClick:l,children:o?n:t}),(0,K.jsx)(su,{size:`small`,onClick:u,disabled:o,children:r})]})]}),nm=B.div`
  display: inline-block;
  position: relative;
`,rm=B(Lp)`
  letter-spacing: 0.2px;
`,im=B.div`
  max-height: ${({$moreItem:e})=>e?`228px`:`196px`};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  padding: 8px 0;

  ${rm} {
    height: 40px;
    padding-left: 16px;
  }
`,am=B.div`
  min-width: 252px;
`,om=B.div`
  display: flex;
  height: 24px;
  padding: 0px 8px;
  align-items: center;
  justify-content: left;
  gap: 8px;
  border-left: 1px solid var(--grey-6);
  width: auto;
`,sm=B.div`
  display: flex;
  height: 24px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
`,cm=B.div`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 12px;
`,lm=B.div`
  --search-input-font-size: 14px;
  --search-input-font-family: var(--font-data);
  --search-input-container-gap: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 14px;
`,um=B.div`
  display: block;
  height: 24px;
  color: var(--grey-11);
  font-weight: 700;
  margin-left: 12px;
  user-select: none;
  pointer-events: none;
  height: inherit;
  display: flex;
  align-items: center;
  font-size: 12px;
`,dm=B.div`
  position: absolute;
  bottom: 0px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, var(--grey-3));
  width: 99%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`,fm=(e,t)=>{let n=!1;return Array.isArray(t)?t.forEach(t=>{t.value===e.value&&(n=!0)}):Up(t)&&(n=e.value===t.value),n},pm=(e,t,n)=>{let r=!1;if(n===`checkbox`){let n=Array.isArray(t)?t:Up(t)?[t]:[],i=[];return n.forEach(t=>{e.value===t.value?r=!0:i.push(t)}),r||i.push(e),i.length===0?null:i}return e},mm=(e,t)=>{if(e.length<=1)return e;let n=[...e],r=document.documentElement.lang||`en`;return n.sort((e,n)=>{let i=e.text.localeCompare(n.text,r);return t?i:-i}),n},hm=(e,t,n,r)=>{if(e.length<=t||n===null)return mm(e,r);if(Up(n)){let i=e.findIndex(e=>e.value===n.value);if(i===-1||i<t)return mm(e,r);let a=mm(e.filter(e=>e.value!==n.value),r);return a.unshift(e[i]),a}if(Array.isArray(n)){let t=new Set(n.map(e=>e.value)),i=[],a=[];for(let n of e)t.has(n.value)?i.push(n):a.push(n);let o=mm(i,r),s=mm(a,r);return[...o,...s]}return e},gm=(e,t)=>e.filter(e=>e.text.toLowerCase().includes(t.toLowerCase())),_m=(e,t,n)=>e.replace(`[TOTAL]`,`${n}`).replace(`[VISIBLE]`,`${t}`),vm=(e,t)=>e===null&&t===null?!0:e===null||t===null?!1:Array.isArray(e)&&Array.isArray(t)?e.length===t.length?e.every(e=>t.some(t=>t.value===e.value)):!1:Array.isArray(e)||Array.isArray(t)?!1:e.value===t.value,ym=({buttonIcon:e,buttonText:t,list:n,selected:r=null,disabled:i=!1,isLoading:a=!1,loadingText:o,optionType:s=`text`,hasOptionsFilter:c,searchPlaceholder:l,maxDisplayedItems:u=5,searchResultText:d=`Showing [VISIBLE] of [TOTAL]`,emptyResultText:f,design:p=`default`,resetText:m,cancelText:h,closeText:g,applyText:v,hasReset:y,hasApply:b,descendingText:x=`Descending`,ascendingText:S=`Ascending`,isListAscending:C=!0,onSelect:w=()=>{},onResetCallback:T=()=>{},onCancelCallback:E=()=>{},...D})=>{let[O,k]=(0,_.useState)(C),[A,j]=(0,_.useState)(hm(n,u,r,O)),[M,ee]=(0,_.useState)(``),[N,te]=(0,_.useState)(r),P=(0,_.useRef)(null),F=(0,_.useCallback)(()=>{j(hm(n,u,N,O))},[O,n,u,N]),I=(0,_.useCallback)(()=>{ee(``),te(r),k(C),j(hm(n,u,r,C))},[C,n,u,r]),ne=(0,_.useCallback)(e=>{let t=pm(e,N,s);b||w(t),te(t),j(hm(n,u,t,O)),ee(``)},[N,s,b,n,u,O,w]),re=(0,_.useCallback)(e=>{let t=e.target.value.replace(/<[^>]*>/g,``).trim();if(ee(t),t===``){j(hm(n,u,N,O));return}j(hm(gm(n,t),u,null,O))},[O,n,u,N]),L=(0,_.useCallback)(()=>{te(r),E(),P.current?.imperativeClose()},[E,r]),R=(0,_.useCallback)(()=>{w(N),P.current?.imperativeClose()},[w,N]),ie=(0,_.useCallback)(()=>{b||w(null),ee(``),j(hm(n,u,null,C)),te(null),k(C),T()},[b,n,u,C,T,w]),ae=(0,_.useCallback)(()=>{k(e=>(j(hm(n,u,N,!e)),!e))},[n,u,N]);(0,_.useEffect)(()=>{let e=!0;return e&&(ee(``),j(hm(n,u,N,O))),()=>{e=!1}},[O,n,u,N]),(0,_.useEffect)(()=>{te(r)},[r]);let oe=(0,_.useMemo)(()=>vm(N,r),[r,N]);return(0,K.jsx)(nm,{...D,children:(0,K.jsx)(Jp,{ref:P,buttonIcon:e,buttonText:t,disabled:i,design:p,onCloseCallback:F,onToggleOpenCallback:I,noCloseOnClickOutside:b,children:(0,K.jsxs)(Sp,{children:[c&&(0,K.jsx)(lm,{children:(0,K.jsx)(Hp,{type:`text`,hasBorder:!1,placeholder:l,color:`dimmed`,iconSize:12,value:M,onChange:re,noBackground:!0})}),a||!n?(0,K.jsx)(Zp,{loadingText:o}):(0,K.jsxs)(am,{children:[c&&(0,K.jsxs)(sm,{children:[(0,K.jsx)(cm,{children:_m(d,A.length,n.length)}),(0,K.jsx)(om,{children:(0,K.jsx)(Su,{design:`text-only`,position:`left`,size:`xsmall`,weight:`light`,onClick:ae,icon:O?`FilterAscending`:`FilterDescending`,children:O?S:x})})]}),(0,K.jsx)(im,{$moreItem:n.length>5,children:A.length>0?A.map((e,t)=>{let n=e.value,r=e.text;return(0,K.jsx)(rm,{title:r,onClick:()=>ne(e),selected:fm(e,N),optionType:s,value:n},t)}):(0,K.jsx)(um,{children:f})}),n.length>5&&(0,K.jsx)(dm,{})]}),(b||y)&&(0,K.jsx)(tm,{hasApply:b,hasReset:y,resetText:m,cancelText:h,closeText:g,applyText:v,onCancel:L,onApply:R,disableApply:oe,onReset:ie,disableReset:N===null&&O===C&&M===``})]})})})};B.div`
  display: inline-block;
  position: relative;
`;var bm=B(Lp)`
  letter-spacing: 0.2px;
`;B.div`
  padding: 8px 0;
  ${bm} {
    height: 40px;
    padding: 16px;
  }
`,B.div`
  font-family: var(--font-ui);
  display: flex;
  border-top: var(--grey-6) 1px solid;
  margin-top: 5px;

  button:first-child {
    border-right: var(--grey-6) 1px solid;
  }
`,B.button`
  ${X};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({$isSelected:e})=>z`

    ${q} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${q} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${e&&z`
      ${q} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`,B.div`
  display: inline-block;
  position: relative;
`;var xm=z`
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  padding: 0;
`,Sm=B.div`
  background-color: var(--grey-2);
  transition: background-color var(--speed-fast) var(--easing-primary-in-out);
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display:flex;
  justify-content:center;
  align-items:center;
  svg {
    display: block;
  }
`;B.button`
  ${xm}
  ${Sm}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${Sm}{
    background-color: var(--primary-9);
    }
  }
  ${({$isActive:e})=>e&&z`
    ${Sm} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${Sm}{
      cursor: pointer;
    }
  `}
  ${({$isInnerContextButton:e})=>e&&z`
    margin-right: 5px;
  `}
`,B.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:t})=>e&&z`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};
    ${e.position===`bottom-right`&&z`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`bottom-left`&&z`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`top-left`&&z`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position===`top-right`&&z`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`,B.div`
  display: inline-block;
`;var Cm=z`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`;B.div`
  ${Cm};
  padding: 4px 8px 4px 10px;
`,B.div`
  ${Cm};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`,B.div`
  display: flex;
`,B.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`,B.div`
  display: flex;
`,B.div`
  select{
    background-color: transparent;
  }
`;var wm=470,Tm=360,Em=B.div``,Dm=({buttonIcon:e,buttonText:t,disabled:n,initialValue:r,dateMode:i,timeMode:a,selected:o,dateTimeTextUpper:s,dateTimeTextLower:c,timeZoneTitle:l,timeZoneValueTitle:u,lang:d,hasEmptyValue:f,availableRange:p,contentDays:m,cancelText:h=`Cancel`,applyText:g=`Apply`,hasApply:v=!0,onCloseCallback:y=()=>{},onUpdateCallback:b=()=>{},onToggleCallback:x=()=>{},onCancelCallback:S=()=>{},onApplyCallback:C=()=>{},...w})=>{let T=(0,_.useRef)(null),[E,D]=(0,_.useState)({initialValue:r,isMount:!0}),[O,k]=(0,_.useState)(!1),A=(0,_.useRef)(null),j=(0,_.useCallback)(e=>{T.current=e,b(e),k(xd(o,e))},[b,o]),M=(0,_.useCallback)(()=>{T.current&&T.current!==o&&y(T.current)},[y,o]),ee=(0,_.useCallback)(e=>{!v&&T.current&&T.current!==o&&x(T.current,e),e&&!E.isMount&&D(e=>({...e,isMount:!0}))},[v,E.isMount,x,o]),N=(0,_.useCallback)(()=>{T.current&&T.current!==o&&(T.current=o===void 0?null:o,D({initialValue:o===null?void 0:o,isMount:!1})),S(),A.current?.imperativeClose()},[S,o]),te=(0,_.useCallback)(()=>{T.current&&T.current!==o&&C(T.current),A.current?.imperativeClose()},[C,o]);return(0,_.useEffect)(()=>{let e=!0;return e&&o===null&&T.current!==null&&(T.current=o,D({initialValue:void 0,isMount:!1})),()=>{e=!1}},[o]),(0,K.jsx)(Em,{...w,children:(0,K.jsx)(Jp,{ref:A,minWidth:wm,minHeight:Tm,onCloseCallback:M,onToggleOpenCallback:ee,noCloseOnClickOutside:v,buttonIcon:e,buttonText:t,disabled:n,children:(0,K.jsx)(Sp,{children:E.isMount&&(0,K.jsx)(fp,{dateMode:i,timeMode:a,dateTimeTextUpper:s,dateTimeTextLower:c,timeZoneTitle:l,timeZoneValueTitle:u,lang:d,availableRange:p,contentDays:m,cancelText:h,applyText:g,hasApply:v,updateCallback:j,cancelCallback:N,applyCallback:te,hasEmptyValue:!0,initialValue:E.initialValue,disableApply:O})})})})},Om=zn`
  0% {
    width: 50%;
    opacity: .5;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
  }
`,km=B.div`
  flex: 1 1 200px;
  max-width: 320px;
`,Am=B.div`
  ${({theme:e})=>e&&z`
    animation: ${Om} ${e.animation.speed.slow} ${e.animation.easing.primary.inOut};
  `};
`,jm=B(kp)``,Mm=B(ym)``,Nm=B(Dm)``,Pm=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 6px;
`,Fm=(e,t,n)=>e.map(({id:e,canHide:r,...i})=>!r||!t||r&&!n?(0,K.jsx)(Mm,{...i},`dropdownFilter-id-${e}`):null),Im=(e,t,n)=>e.map(({id:e,canHide:r,showFieldText:i,selected:a,...o})=>t.includes(e)?(0,K.jsx)(km,{children:r?(0,K.jsx)(Am,{children:(0,K.jsx)(Hp,{...o,hasCrossButton:!0,onCrossClick:()=>n(e)})}):(0,K.jsx)(Hp,{...o})},`searchFilter-id-${e}`):null),Lm=e=>e.map(({id:e,canHide:t,...n})=>(0,K.jsx)(Nm,{...n},`datePicker-filter-${e}`)),Rm=(e,t,n)=>e.map(e=>{if(e.canHide&&!t.includes(e.id)){let t=e.id;return(0,K.jsx)(jm,{icon:`Add`,onClick:()=>n(t),children:e.showFieldText},`search-button-id-${e.id}`)}return null}),zm=e=>{let t=[];return e.forEach(e=>{e.canHide||t.push(e.id)}),t},Bm=({hasShowMore:e=!1,searchFilters:t=[],datePickerFilters:n=[],dropdownFilters:r=[],showMoreText:i=`Show More`,showLessText:a=`Show Less`,...o})=>{let[s,c]=(0,_.useState)(zm(t)),[l,u]=(0,_.useState)(!!e),d=(0,_.useCallback)(()=>{u(e=>!e)},[]),f=(0,_.useCallback)(e=>{s.includes(e)?c(s.filter(t=>e!==t)):c([...s,e])},[s]);return(0,K.jsxs)(Pm,{...o,children:[Im(t,s,f),Lm(n),Fm(r,l,e),(!e||!l)&&Rm(t,s,f),e&&(0,K.jsx)(kp,{icon:`FilterEllipsis`,onClick:d,children:l?i:a})]})},Vm=B.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`,Hm=B.div`
  font-family: var(--font-ui);
  color: var(--grey-9);
`,Um=B.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: var(--grey-9);
  font-family: var(--font-data);

  ${q} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid var(--grey-8);
`,Wm=B.div`
  padding: ${({$hasIcon:e})=>e?`0 15px 0 9px`:`0 15px 0 0`};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`,Gm=B.button`
  ${X};
  font-family: var(--font-data);
  color: var(--grey-10);
  margin-left: 11px;
  font-size: 12px;
`,Km=B.button`
  ${X};
`,qm=B.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`,Jm=(e,t)=>e.getHours()===23&&e.getSeconds()>0?to(Mi(Bi(e),{days:1}),t):to(e,t),Ym=e=>{let t=!1;if(e!==``)try{to(new Date,e),t=!0}catch{t=!1}return t},Xm=(e,t)=>e.replace(`[TOTAL_RESULTS]`,`${t}`),Zm=(e,t,n,r)=>{let i=``,a=Ym(t);return r&&Up(e)?i=`${r}: ${e.text}`:r&&e instanceof Date?i=a?`${r}: ${to(e,t)}`:`${r}: ${e.toDateString()}`:r&&Sd(e)?i=a?`${r}: ${to(e.start,t)} - ${Jm(e.end,t)}`:`${r}: ${e.start.toDateString()} - ${e.end.toDateString()}`:!r&&Up(e)?i=e.text:!r&&e instanceof Date?i=a?to(e,t):e.toDateString():!r&&Sd(e)&&(i=a?`${to(e.start,t)} - ${Jm(e.end,t)}`:`${e.start.toDateString()} - ${e.end.toDateString()}`),(0,K.jsx)(Wm,{$hasIcon:!!n,children:i})},Qm=({labelLists:e,totalResults:t,resultTextTemplate:n=`Showing Results ([TOTAL_RESULTS]):`,clearText:r=`CLEAR ALL`,resultsDateFormat:i=``,onRemoveFilter:a=()=>{},onClearAll:o=()=>{},...s})=>(0,K.jsxs)(Vm,{...s,children:[(0,K.jsx)(Hm,{children:Xm(n,t)}),(0,K.jsxs)(qm,{children:[e.map(({icon:e,item:t,filterName:n,filterId:r,type:o},s)=>(0,K.jsxs)(Um,{children:[e&&(0,K.jsx)(J,{icon:e,color:`dimmed`,size:10,weight:`light`}),Zm(t,i,e,n),(0,K.jsx)(Km,{onClick:()=>a(r,o,t),children:(0,K.jsx)(J,{icon:`CloseCompact`,color:`dimmed`,size:10,weight:`light`})})]},`Filter-Label-id-${s}`)),e.length>0&&(0,K.jsx)(Gm,{onClick:o,children:r})]})]}),$m=B.div`
  font-family: var(--font-ui);
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`,eh=B(Qm)``,th=B.div`
  ${eh} {
    margin-top: 29px;
    min-height: 19px;
  }
`,nh=(e,t,n)=>{let r=!1;if(n.disabled)r=n.disabled;else if(t){let t=e.filter(e=>e.selected!==null);t&&(r=t.length>1||t[0]&&t[0].id!==n.id)}return r},rh=(e,t,n,r)=>{let i=[];return e.forEach(e=>{let a=t.find(t=>t.id===e.id);if(a){let o=Array.isArray(a.selected)||Up(a.selected)?a.selected:null,s=e=>{r(e,a.id)},c=nh(t,n,e),l={...e,selected:o,disabled:c,onSelect:s};i.push(l)}}),i},ih=(e,t,n,r)=>{let i=[];return e.forEach(e=>{let a=t.find(t=>t.id===e.id);if(a&&!Array.isArray(a.selected)){let o=a.selected===null||!Up(a.selected)?``:a.selected.text,s=e=>{let t=e.currentTarget.value;r(t,a.id)},c=nh(t,n,e),l={...e,value:o,disabled:c,onChange:s};i.push(l)}}),i},ah=(e,t,n,r)=>{let i=[];return e.forEach(e=>{let a=t=>{r(t,e.id)},o=(t,n)=>{n||r(t,e.id)},s=t=>{r(t,e.id)},c=nh(t,n,e),l=t.find(t=>t.id===e.id),u;e.selected?u=e.selected:e.initialValue&&(u=e.initialValue);let d={...e,onCloseCallback:a,onToggleCallback:o,onApplyCallback:s,disabled:c,selected:l&&(l.selected instanceof Date||Sd(l.selected))?l.selected:null,initialValue:u};i.push(d)}),i},oh=(e,t,n,r)=>{let i=[];return e.forEach(e=>{let t=r.find(t=>t.id===e.id);if(t&&Up(t.selected)){let n={filterId:t.id,item:t.selected,filterName:e.name,type:t.type};i.push(n)}}),t.forEach(e=>{let t=r.find(t=>t.id===e.id);if(!(!t||t.selected===null)){if(Array.isArray(t.selected))t.selected.forEach(n=>{let r={filterId:t.id,item:n,icon:e.buttonIcon,filterName:e.name,type:t.type};i.push(r)});else if(Up(t.selected)){let n={filterId:t.id,item:t.selected,icon:e.buttonIcon,filterName:e.name,type:t.type};i.push(n)}}}),n.forEach(e=>{let t=r.find(t=>t.id===e.id);if(!(!t||t.selected===null||Array.isArray(t.selected)||Up(t.selected))){let n={filterId:t.id,item:t.selected,icon:e.buttonIcon,filterName:e.name,type:t.type};i.push(n)}}),i},sh=(e,t,n)=>{let r=[];return e.forEach(({id:e,value:t,selected:n})=>{let i=null;typeof t==`number`?i={text:t.toString(),value:t}:t===`string`?i={text:t,value:t}:Up(n)&&(i=n);let a={id:e,type:`search`,selected:i};r.push(a)}),t.forEach(({id:e,selected:t})=>{let n={id:e,type:`dropdown`,selected:Up(t)||Array.isArray(t)?t:null};r.push(n)}),n.forEach(({id:e,initialValue:t,selected:n})=>{let i=null;t?i=t:n&&(i=n),r.push({id:e,type:`datepicker`,selected:i})}),r},ch=({filtersTitle:e=`Filters:`,hasShowMore:t,searchersConfig:n=[],dropdownsConfig:r=[],datePickersConfig:i=[],showMoreText:a,showLessText:o,resultTextTemplate:s,clearText:c,totalResults:l,singleFilter:u=!1,resultsDateFormat:d,onChangeCallback:f=()=>{},...p})=>{let[m,h]=(0,_.useState)(sh(n,r,i)),g=(0,_.useRef)(r);g.current&&!(0,xl.default)(g.current,r)&&(g.current=r);let v=(0,_.useRef)((0,Sl.default)(e=>y(e),600)).current,y=(0,_.useCallback)(e=>{f(e.filter(e=>e.selected!==null))},[f]),b=(0,_.useCallback)((e,t)=>{h(n=>{let r=[...n],i=r.find(e=>e.id===t);return i&&i.selected!==e?(i.selected=e,y(r),r):n})},[y]),x=(0,_.useCallback)((e,t)=>{let n=[...m],r=n.find(e=>e.id===t);r&&(r.selected=e===``?null:{text:e,value:e}),v(n),h(n)},[v,m]),S=(0,_.useCallback)(()=>{let e=[...m];e.forEach(e=>{e.selected!==null&&(e.selected=null)}),y(e),h(e)},[m,y]),C=(0,_.useCallback)((e,t,n)=>{h(r=>{let i=[...r],a=i.find(t=>t.id===e);if(!a)return r;if(Array.isArray(a.selected)&&t===`dropdown`){let e=a.selected.filter(e=>Up(e)&&Up(n)?e.value!==n.value:!0);a.selected=e.length===0?null:e}else a.selected=null;return y(i),i})},[y]),w=(0,_.useCallback)((e,t)=>{let n=[...m],r=n.find(e=>e.id===t);r&&(r.selected=e,y(m),h(n))},[m,y]);return(0,_.useEffect)(()=>{r.length!==0&&h(e=>{let t=[...e];return t.forEach(e=>{let t=r.find(t=>t.id===e.id);if(t){if(Array.isArray(e.selected))e.selected.forEach(e=>{let n=t.list.find(t=>t.value===e.value);n&&(e.text=n.text)});else if(Up(e.selected)){let n=t.list.find(t=>e.selected===null?!1:Up(e.selected)?t.value===e.selected.value:!1);n&&(e.selected.text=n.text)}}}),t})},[r]),(0,K.jsxs)(th,{...p,children:[(0,K.jsx)($m,{children:e}),(0,K.jsx)(Bm,{hasShowMore:t,showMoreText:a,showLessText:o,searchFilters:ih(n,m,u,x),dropdownFilters:rh(g.current,m,u,b),datePickerFilters:i?ah(i,m,u,w):void 0}),(0,K.jsx)(eh,{resultTextTemplate:s,clearText:c,totalResults:l,resultsDateFormat:d,labelLists:oh(n,g.current,i,m),onClearAll:S,onRemoveFilter:C})]})},lh=B.div`
  position: relative;
  display: inline-block;
`,uh=B.div`
  position: absolute;
  left: 14px;;
  top: -12px;
  border-radius: 4px;
  height: 14px;
  min-width: 14px;
  padding: 2px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:t})=>t?e.colors.status[t]:`var(--grey-5)`};
`,dh=B.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:t})=>t?e.colors.status[t]:`var(--grey-5)`};
`,fh=({icon:e,status:t,counter:n,maxCounter:r=999})=>(0,K.jsxs)(lh,{children:[t&&n===void 0?(0,K.jsx)(dh,{$color:t}):n===void 0?null:(0,K.jsx)(uh,{$color:t,children:n>r?`${r}+`:n}),(0,K.jsx)(J,{icon:e,size:18,color:`dimmed`})]}),ph=zn`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`,mh=zn`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`,hh=B.svg`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].handleBase.fill};
  appearance: none;
`,gh=B.circle`
  fill: none;
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].handleRingLayer.stroke};
  mask: url(#${e=>e.$maskID});
`,_h=B.g`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${e=>e.$touchDragging&&z`
    animation: ${ph} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

  ${e=>e.$mouseDragging&&z`
    animation: ${mh} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

`,vh=B.circle`
  mix-blend-mode: multiply;
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].handleReactiveFill.fill};
  stroke: none;
`,yh=B.circle`
  fill: none;
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].handleReactiveRing.stroke};
`,bh=B.circle`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].handleContrastLayer.stroke};
`,xh=B.circle`
    mix-blend-mode: multiply;
    fill: url(#${e=>e.$fillID});
`,Sh=B.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&z`
    opacity: 1;
  `};

`,Ch=B.stop`
  stop-color: ${({theme:e,$styling:t})=>e.custom.lines[t].stopStart.stopColor};
`,wh=B.stop`
  stop-color: ${({theme:e,$styling:t})=>e.custom.lines[t].stopEnd.stopColor};
`,Th=B.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].grabHandleText.stroke};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`,Eh=B.g`

`,Dh=e=>{let{index:t,useAngles:n,angle:r,unit:i,size:a,lineSetId:o,x:s,y:c,moveCallback:l,moveEndCB:u=()=>{},Icon:d,rotate:f=0,options:p,readOnlyHandle:m=!1,styling:h=`primary`}=e,g=(0,_.useRef)(null),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(null),w=(0,_.useCallback)(e=>{if(e.preventDefault(),!m)for(let t=0;t<e.touches.length;t++){let n=e.touches[t];(n.target.parentNode.parentElement===g.current||n.target.parentNode.parentElement.parentElement)&&(y(!0),C(t))}},[m]),T=(0,_.useCallback)(()=>{m||(y(!1),C(null),u())},[u,m]),E=(0,_.useCallback)(e=>{if(!m)for(let n=0;n<e.touches.length;n++)n===S&&l({x:e.touches[n].pageX,y:e.touches[n].pageY},t)},[t,l,m,S]),D=(0,_.useRef)(null),O=(0,_.useRef)(null),k=(0,_.useCallback)(()=>{D.current&&=(window.removeEventListener(`mousemove`,D.current),null),O.current&&=(window.removeEventListener(`mouseup`,O.current),null)},[]),A=(0,_.useCallback)(e=>{e.preventDefault(),!m&&l({x:e.pageX,y:e.pageY},t)},[t,l,m]),j=(0,_.useCallback)(e=>{e.preventDefault(),!m&&(x(!1),k(),l({x:e.pageX,y:e.pageY},t),setTimeout(u))},[k,t,l,u,m]),M=(0,_.useCallback)(e=>{e.preventDefault(),!m&&(k(),x(!0),D.current=A,O.current=j,window.addEventListener(`mousemove`,A),window.addEventListener(`mouseup`,j))},[k,A,j,m]);(0,_.useEffect)(()=>k,[k]);let ee=n?`mask-`+o+`-`+t:``,N=`shadowGradient-`+o+`-`+t,{showPointHandle:te=!0,showPointLabel:P=!1,pointIndexOffset:F}=p;return(0,K.jsxs)(hh,{ref:g,$styling:h,x:s,y:c,$mouseDragging:b,onTouchStart:w,onTouchEnd:T,onTouchMove:E,onMouseDown:M,children:[(0,K.jsxs)(`defs`,{children:[(0,K.jsxs)(`mask`,{id:ee,children:[(0,K.jsx)(`rect`,{width:`100%`,height:`100%`,x:`-50%`,y:`-50%`,fill:`white`}),(0,K.jsx)(`rect`,{width:a/3,height:a/.9,x:-(a/3/2),y:-(a/.9+5),fill:`black`,transform:`rotate(${r||0} 0 0)`})]}),(0,K.jsxs)(`radialGradient`,{id:N,children:[(0,K.jsx)(Ch,{$styling:h,offset:`0%`}),(0,K.jsx)(wh,{$styling:h,offset:`80%`})]})]}),d?(0,K.jsx)(Eh,{transform:`scale(${i*1.5}) translate(-21 -21) rotate(${f}, 21, 21 )`,children:(0,K.jsx)(d,{height:`42`,width:`42`})}):te&&(0,K.jsxs)(`g`,{transform:`scale(${i})`,children:[(0,K.jsx)(xh,{r:a*1,$fillID:N}),(0,K.jsx)(bh,{$styling:h,r:a/2.4,strokeWidth:a/3}),(0,K.jsxs)(_h,{$touchDragging:v,$mouseDragging:b,children:[(0,K.jsx)(vh,{$styling:h,r:a/1.8}),(0,K.jsx)(yh,{$styling:h,r:a/2.25,strokeWidth:a/3})]}),(0,K.jsx)(gh,{$styling:h,r:a/2,strokeWidth:a/6,$maskID:ee}),P&&(0,K.jsx)(Sh,{$showIndex:!0,children:(0,K.jsx)(Th,{$styling:h,transform:`translate(-5,6)`,fontSize:`20px`,$showIndex:!0,children:t+F})})]})]})},Oh=B.line`
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].contrastLine.stroke};
  mix-blend-mode: multiply;
  stroke-width: ${({$lineClickSensing:e})=>e}px;
  stroke-opacity: ${({$showLineBorder:e})=>e?`0.35`:`0`};
  cursor: pointer;
`,kh=B.line`
  pointer-events: none;
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].highlightLineBorder.stroke};
`,Ah=B.circle`
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].grabHandle.fill};
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].grabHandle.stroke};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${e=>e.$hide&&z`
    pointer-events: none;
    opacity: 0;
  `};
`,jh=B.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&z`
    opacity: 1;
  `};

`,Mh=B.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].grabHandleText.stroke};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`,Nh=B.text`
  text-align: center;
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  cursor: pointer;
  ${({$showLabelShadow:e})=>e&&z`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,Ph=B(Ah)`
  fill: none;
  stroke: ${({theme:e,$styling:t})=>e.custom.lines[t].grabHandleContrast.stroke};
`,Fh=B.g`

  ${Ah}, ${Ph} {
    transition: r 250ms ease;
  }

  ${e=>e.$showIndex&&z`
    ${Ah}, ${Ph} {
      pointer-events: none;
      r: ${e.$originalRadius*1.75};
    }
  `};
`,Ih=B.circle`
  fill: hsla(203, 100%, 35%, 0.49);
  cursor: pointer;
`,Lh=B(J)`
  cursor: pointer;
`,Rh=e=>{let{x1:t,y1:n,x2:r,y2:i,unit:a,lineMoveCallback:o,lineMoveStartCallback:s,options:c,lineSetId:l,label:u,styling:d=`primary`,moveEndCB:f=()=>{},lineClickCallback:p=()=>{},showSmallDirectionMark:m=!1,overrideShowMoveHandle:h=!0}=e,{handleFinderActive:g,revealSetIndex:v,showMoveHandle:y,setIndexOffset:b,showDirectionMark:x,showLabelShadow:S=!1}=c,[C,w]=(0,_.useState)(),T=!y||!h,E=parseInt(e.lineClickSensingBorder),D=e=>{for(let t=0;t<e.touches.length;t++)o({x:e.touches[t].pageX,y:e.touches[t].pageY});f()},O=e=>{for(let t=0;t<e.touches.length;t++)s({x:e.touches[t].pageX,y:e.touches[t].pageY})},k=(0,_.useRef)(null),A=(0,_.useRef)(null),j=(0,_.useCallback)(()=>{k.current&&=(window.removeEventListener(`mousemove`,k.current),null),A.current&&=(window.removeEventListener(`mouseup`,A.current),null)},[]),M=(0,_.useCallback)(e=>{o({x:e.pageX,y:e.pageY}),e.preventDefault()},[o]),ee=(0,_.useCallback)(e=>{j(),o({x:e.pageX,y:e.pageY}),f(),e.preventDefault()},[j,o,f]),N=(0,_.useCallback)(e=>{j(),s({x:e.pageX,y:e.pageY}),k.current=M,A.current=ee,window.addEventListener(`mousemove`,M),window.addEventListener(`mouseup`,ee),e.preventDefault()},[j,s,M,ee]);(0,_.useEffect)(()=>j,[j]);let te={x:(r+t)/2,y:(i+n)/2},P=()=>{let e=Math.atan2(i-n,r-t),a=Math.PI/2-e,o=te.x+Math.sin(a)-5,s=te.y+Math.cos(a),c=180/Math.PI*Math.atan2(i-n,r-t);return{x:o,y:s,rotate:c,labelRotate:-c}};return(0,K.jsxs)(`g`,{children:[(0,K.jsx)(Oh,{onMouseOver:(0,_.useCallback)(()=>{e.hasClickSensingBorder&&w(!0)},[e.hasClickSensingBorder]),onMouseOut:(0,_.useCallback)(()=>{e.hasClickSensingBorder&&w(!1)},[e.hasClickSensingBorder]),$lineClickSensing:E,$showLineBorder:C,onClick:()=>p(l),$styling:d,strokeLinecap:`round`,x1:t,y1:n,x2:r,y2:i,strokeWidth:4*a}),(0,K.jsx)(kh,{$styling:d,x1:t,y1:n,x2:r,y2:i,strokeWidth:2*a}),(0,K.jsxs)(Fh,{$styling:d,$showIndex:g&&v,$originalRadius:8*a,children:[(0,K.jsx)(Ph,{$styling:d,r:8*a,strokeWidth:4*a,cx:te.x,cy:te.y,$hide:T}),(0,K.jsx)(Ah,{$styling:d,textAnchor:`middle`,r:8*a,strokeWidth:1*a,cx:te.x,cy:te.y,$hide:T,onTouchMove:D,onTouchStart:O,onMouseDown:N})]}),(0,K.jsx)(jh,{$showIndex:!T&&(g||v),children:(0,K.jsx)(Mh,{$styling:d,fontSize:`${a*10}px`,x:te.x-3*a,y:te.y+4*a,$showIndex:v||g,children:l+b})}),x?(()=>{let e=P();return(0,K.jsxs)(`g`,{transform:`translate(${e.x},${e.y}) rotate(${e.rotate}) scale(${a*1})`,style:{cursor:`pointer`},children:[(0,K.jsxs)(`g`,{onClick:()=>p(l),transform:`translate(-3,-30) scale(0.8)`,children:[(0,K.jsx)(Ih,{r:12,cx:6,cy:7}),(0,K.jsx)(Lh,{color:`inverse`,icon:`Up`,size:12,weight:`heavy`,forSvgUsage:!0})]}),m&&(0,K.jsxs)(`g`,{onClick:()=>p(l),transform:`translate(5,25) rotate(-180) scale(0.8)`,children:[(0,K.jsx)(Ih,{r:8,cx:3.5,cy:4.5}),(0,K.jsx)(Lh,{color:`inverse`,icon:`Up`,size:7,weight:`heavy`,forSvgUsage:!0})]}),u&&(0,K.jsx)(`g`,{transform:`translate(0,${m?45:30}) rotate(${e.labelRotate})`,children:(0,K.jsx)(Nh,{onClick:()=>p(l),textAnchor:m?e.labelRotate<0?`end`:`start`:`middle`,dominantBaseline:`middle`,$styling:d,fontSize:`14px`,x:0,y:0,$showIndex:v||g,$showLabelShadow:S,children:u})})]})})():u&&(0,K.jsx)(Nh,{$styling:d,fontSize:`${a*14}px`,x:te.x-16*a,y:te.y-15*a,$showIndex:v||g,$showLabelShadow:S,children:u})]})},zh=(0,_.createContext)({}),Bh=B.polygon`
  fill: ${({$color:e})=>e};
  opacity: ${({$opacity:e})=>e};
`,Vh=B.circle`
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].point.fill};
`,Hh=B.text`
  text-align: center;
  fill: ${({theme:e,$styling:t})=>e.custom.lines[t].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
  ${({$showAreaLabelShadow:e})=>e&&z`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,Uh=({lineSetData:e,unit:t,showAreaLabelShadow:n})=>{let r=e.points.length;if(r<3)return null;let i={x:0,y:0};e.points.map(({x:e,y:t})=>(i.x+=e,i.y+=t,null)),i={x:i.x/r,y:i.y/r};let a=e.areaName?.length||1;return(0,K.jsx)(Hh,{fontSize:`${t*14}px`,$styling:e.styling||`primary`,x:i.x-4*a*t,y:i.y+6*t,$showAreaLabelShadow:n,children:e.areaName})},Wh=({getCTM:e,boundaries:t,unit:n,size:r,lineSetId:i,options:a,onLineMoveEnd:o,onLineClick:s,lineClickSensingBorder:c,hasClickSensingBorder:l})=>{let{state:u,dispatch:d}=(0,_.useContext)(zh),f=u[i],{showLabelShadow:p=!1}=a,[m,h]=(0,_.useState)([]),g=(0,_.useRef)([]),v=r/2,y=f.points.length===2,b=(0,_.useCallback)(e=>(e.x<t.x.min?e.x=t.x.min:e.x>t.x.max&&(e.x=t.x.max),e.y<t.y.min?e.y=t.y.min:e.y>t.y.max&&(e.y=t.y.max),e),[t]),x=(0,_.useCallback)((t,n)=>{let r=e();if(!r)return;let a=b({x:(t.x-window.scrollX-r.e)/r.a,y:(t.y-window.scrollY-r.f)/r.d}),o={x:Math.round(a.x),y:Math.round(a.y)};d({type:`UPDATE`,index:i,data:(0,Cl.default)(f,{points:{[n]:{$merge:o}}})})},[e,b,f,d,i]),S=(0,_.useCallback)(t=>{let n=e();if(!n)return;let r={x:(t.x-window.scrollX-n.e)/n.a-v,y:(t.y-window.scrollY-n.f)/n.d-v};g.current=f.points.map(e=>({offsetX:r.x-e.x,offsetY:r.y-e.y}))},[v,f.points,e]),C=(0,_.useCallback)(t=>{let n=e();if(!n)return;let{points:r}=f,a={x:(t.x-window.scrollX-n.e)/n.a-v,y:(t.y-window.scrollY-n.f)/n.d-v},o=r.map((e,t)=>{let{offsetX:n=0,offsetY:r=0}=g.current[t]||{};return b({x:Math.round(a.x-n),y:Math.round(a.y-r)})});d({type:`UPDATE`,index:i,data:{...f,points:[...o]}})},[e,f,v,d,i,b]),w=(e,t,n,r)=>Math.atan2(r-t,n-e)*180/Math.PI+90,T=(0,_.useCallback)(e=>{let{points:t}=e,n=[];e.points.forEach((e,r)=>{let i=t[r+2>t.length?0:r+1],a=w(e.x,e.y,i.x,i.y);n.push(a)}),h(n)},[]);(0,_.useEffect)(()=>{y&&T(f)},[f,T,y]);let E=(0,_.useRef)(!1);(0,_.useEffect)(()=>{if(!(t.x.max===0&&t.y.max===0)&&!E.current&&(E.current=!0,f.points.some(({x:e,y:n})=>e<t.x.min||e>t.x.max||n<t.y.min||n>t.y.max))){let e=f.points.map(e=>b({...e}));d({type:`UPDATE`,index:i,data:{...f,points:e}})}},[t]);let D=(f?.showPointHandle===void 0||f?.showPointHandle)&&f.points.map(({x:e,y:t},s)=>(0,K.jsx)(Dh,{lineSetId:i,rotate:f.rotate,Icon:f.icon,index:s,unit:n,size:r,useAngles:y,angle:m[s],x:e,y:t,moveEndCB:o,moveCallback:x,options:a,styling:f.styling,readOnlyHandle:f.readOnly},s+i)),O=a.showPoint&&f.points.map(({x:e,y:t},r)=>(0,K.jsx)(Vh,{$styling:f.styling||`primary`,r:n,cx:e,cy:t},r)),k=f.points.map(({x:e,y:t},r)=>{let{points:u,name:d,styling:p=`primary`}=f,m=r+1>=u.length?0:r+1;if(r===1&&m===0)return null;let{x:h,y:g}=u[m];return(0,K.jsx)(Rh,{moveEndCB:o,lineSetId:i,options:a,x1:e,y1:t,x2:h,y2:g,unit:n,label:d,styling:p,lineClickCallback:s,lineMoveCallback:C,lineMoveStartCallback:S,showSmallDirectionMark:f.showSmallDirectionMark,overrideShowMoveHandle:f.showMoveHandle,lineClickSensingBorder:c,hasClickSensingBorder:l},r)});return(0,K.jsxs)(`g`,{children:[(0,K.jsx)(Bh,{points:f.points.map(e=>`${e.x},${e.y}`).join(` `),$color:f.areaFillColor?f.areaFillColor:`transparent`,$opacity:f.areaTransparencyLevel?f.areaTransparencyLevel/100:0}),k,D,O,(0,K.jsx)(Uh,{lineSetData:f,unit:n,showAreaLabelShadow:p})]})},Gh=B.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`,Kh=B.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qh=B.svg`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${e=>e.$transculent&&z`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,Jh=B.img`
  object-fit: contain;
  width:  100%;
  height: 100%;
`,Yh=({src:e,onSizeChange:t=()=>{},onLineMoveEnd:n=()=>{},onLineClick:r=()=>{},lineClickSensingBorder:i=`65`,hasClickSensingBorder:a=!0,options:{showHandleFinder:o,showSetIndex:s,showPointLabel:c=!1,showLabelShadow:l=!1,showPointHandle:u,showMoveHandle:d,showGrabHandle:f,setIndexOffset:p=0,pointIndexOffset:m=0,showPoint:h=!1,fixedImgDimensions:g,boundaryOffset:v=0,showDirectionMark:y=!1}={}})=>{let[b,x]=(0,_.useState)({x:{min:0,max:0},y:{min:0,max:0}}),{state:S}=(0,_.useContext)(zh),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)({h:1,w:1}),[k,A]=(0,_.useState)(1),j=(0,_.useRef)(null),M=(0,_.useRef)(null),ee=(0,_.useCallback)(()=>{if(!j.current)return;let{naturalHeight:e,naturalWidth:n,clientHeight:r}=j.current,i=g&&g.y||e,a=g&&g.x||n;(i!==D.h||a!==D.w)&&(O({h:i,w:a}),t({h:i,w:a}),console.debug(`image size:`,{naturalHeight:e,naturalWidth:n,clientHeight:r,unit:e/r})),i/r!==k&&A(i/r),E(!0)},[g,D.h,D.w,t,k]),N=(0,_.useCallback)(()=>{if(!M.current)return null;let e=M.current.getScreenCTM();return console.debug(`calculateCTM`,e),e},[]),te=e=>{e.target===M.current&&w(!!C&&!0)},P=()=>{w(o||!1)};(0,_.useEffect)(()=>{if(!M.current)return;let{viewBox:e}=M.current,t={x:{min:e.baseVal.x+v,max:e.baseVal.x+e.baseVal.width-v},y:{min:e.baseVal.y+v,max:e.baseVal.y+e.baseVal.height-v}};console.debug(`setBoundaries`,t),x(t)},[D,v]),(0,_.useEffect)(()=>(window.addEventListener(`resize`,ee),()=>{window.removeEventListener(`resize`,ee)}),[ee]);let F={handleFinderActive:C,revealSetIndex:s!==!1&&(s||S.length>1),showPointLabel:c,showLabelShadow:l,showPointHandle:u||u!==!1&&f!==!1,showMoveHandle:d||d!==!1&&f!==!1,setIndexOffset:p,pointIndexOffset:m,showPoint:h,showDirectionMark:y};return(0,K.jsxs)(Gh,{children:[(0,K.jsx)(Jh,{ref:j,onLoad:ee,src:e,alt:``}),T&&b?(0,K.jsx)(qh,{ref:M,viewBox:`0 0 ${D.w} ${D.h} `,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,onPointerDown:te,onPointerUp:P,onPointerLeave:P,$transculent:C,children:S.map((e,t)=>(0,K.jsx)(Wh,{hasClickSensingBorder:a,lineClickSensingBorder:i,onLineMoveEnd:n,onLineClick:r,lineSetId:t,lineData:e,getCTM:N,boundaries:b,unit:k,size:30,options:F},t))}):(0,K.jsx)(Kh,{children:(0,K.jsx)(hu,{size:`large`,styling:`primary`})})]})},Xh=B.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,Zh=B.video`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,Qh=B.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,$h=B.svg`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${e=>e.$transcalent&&z`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,eg=({src:e,onSizeChange:t=()=>{},onLineMoveEnd:n=()=>{},onLineClick:r=()=>{},onLoaded:i=()=>{},lineClickSensingBorder:a=`65`,hasClickSensingBorder:o=!0,videoOptions:{loop:s=!1,autoPlay:c=!1,controls:l=!1,muted:u=!0,...d},options:{showHandleFinder:f,showSetIndex:p,showPointLabel:m=!1,showPointHandle:h,showLabelShadow:g,showMoveHandle:v,showGrabHandle:y,setIndexOffset:b=0,pointIndexOffset:x=0,showPoint:S=!1,boundaryOffset:C=0,showDirectionMark:w=!1}={}})=>{let T=(0,_.useRef)(null),E=(0,_.useRef)(null),[D,O]=(0,_.useState)({x:{min:0,max:0},y:{min:0,max:0}}),{state:k}=(0,_.useContext)(zh),[A,j]=(0,_.useState)(!1),[M,ee]=(0,_.useState)({h:768,w:1024}),[N,te]=(0,_.useState)(1),[P,F]=(0,_.useState)(!1),I=(0,_.useCallback)(()=>{if(!E.current)return;let{videoHeight:e,videoWidth:n,clientHeight:r}=E.current;(e!==M.h||n!==M.w)&&(ee({h:e,w:n}),t({h:e,w:n})),e/r!==N&&te(e/r)},[M.h,M.w,N,t]),ne=e=>{e.target===T.current&&j(!!A&&!0)},re=()=>{j(f||!1)},L=(0,_.useCallback)(()=>T.current?T.current.getScreenCTM():null,[]);(0,_.useEffect)(()=>{if(!T.current||!P)return;let{viewBox:e}=T.current;O({x:{min:e.baseVal.x+C,max:e.baseVal.x+e.baseVal.width-C},y:{min:e.baseVal.y+C,max:e.baseVal.y+e.baseVal.height-C}})},[M,P,C]);let R=(0,_.useCallback)(({target:e})=>{if(e){F(!0),I();let{videoHeight:t=1,videoWidth:n=1}=e;i({height:t,width:n})}},[I,i]);(0,_.useEffect)(()=>(window.addEventListener(`resize`,I),()=>{window.removeEventListener(`resize`,I)}),[I]);let ie={handleFinderActive:A,revealSetIndex:p!==!1&&(p||k.length>1),showPointLabel:m,showLabelShadow:g,showPointHandle:h||h!==!1&&y!==!1,showMoveHandle:v||v!==!1&&y!==!1,setIndexOffset:b,pointIndexOffset:x,showPoint:S,showDirectionMark:w};return(0,K.jsxs)(Xh,{children:[(0,K.jsx)(Zh,{ref:E,controls:l,muted:u,autoPlay:c,loop:s,...d,onLoadedMetadata:R,src:e,id:`1`,children:` `}),!P&&(0,K.jsx)(Qh,{children:(0,K.jsx)(hu,{size:`large`,styling:`primary`})}),P&&(0,K.jsx)($h,{ref:T,viewBox:`0 0 ${M.w} ${M.h} `,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,onPointerDown:ne,onPointerUp:re,onPointerLeave:re,$transcalent:A,children:k.map((e,t)=>(0,K.jsx)(Wh,{hasClickSensingBorder:o,lineClickSensingBorder:a,onLineMoveEnd:n,onLineClick:r,lineSetId:t,lineData:e,getCTM:L,boundaries:D,unit:N,size:30,options:ie},t))})]})},tg=B.video`
  /* width: 800px; */
`,ng=({id:e=`1`,enabled:t,peerAddress:n,maxConnectionAttempts:r=30,rtcConfiguration:i={},setStatus:a=()=>{},setError:o=()=>{},autoPlay:s=!0,muted:c=!0,children:l,...u})=>{let d=(0,_.useRef)(0),f=(0,_.useRef)(null),p=(0,_.useRef)(null),m=(0,_.useRef)(null),h=(0,_.useRef)(!1),g=(0,_.useRef)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(t);function b(e){o(e),k()}let x=async e=>{if(!m.current||!p.current)return;try{e.type===`offer`&&m.current.signalingState!==`stable`?await Promise.all([m.current.setLocalDescription({type:`rollback`}),m.current.setRemoteDescription(e)]):(e.sdp&&=e.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,``),await m.current.setRemoteDescription(new RTCSessionDescription(e)),a(`Remote Description set`))}catch(e){console.error(`Error:`,e),o(`Error Setting remote description`);return}if(e.type!==`offer`)return;a(`Creating Answer`);try{let e=await m.current.createAnswer();console.debug(`Got local description: `+JSON.stringify(e)),await m.current.setLocalDescription(e)}catch(e){console.error(e),e instanceof Error&&o(e.message);return}let t={sdp:m.current.localDescription};a(`Sending Local Description`);try{p.current.send(JSON.stringify(t)),a(`Connected`)}catch(e){console.error(e),e instanceof Error&&o(e.message)}};function S(e){if(!m.current){console.error(`peerConnection.current not found onIncomingICE `);return}let t=new RTCIceCandidate(e);m.current.addIceCandidate(t).catch(o)}let C=({data:e=``})=>{if(e===`HELLO`)console.debug(`Received HELLO`),a(`Registered with server, waiting for offer.`);else if(e.startsWith(`ERROR`))console.error(`Received `+e),b(e);else{let t;try{t=JSON.parse(e)}catch(t){t instanceof SyntaxError?b(`Error parsing incoming JSON: `+e):b(`Unknown error parsing response: `+e);return}m.current||O(t),t.sdp==null?t.ice==null?b(`Unknown incoming JSON: `+t):(console.debug(`Received Remote ICE:`+JSON.stringify(t.ice)),S(t.ice)):(console.debug(`Received Remote SDP:`+JSON.stringify(t.sdp)),x(t.sdp))}};function w(e){console.debug(`serverClose`),!(!p.current||e.target!==p.current)&&(a(`Disconnected from server`),A(),e.code!==1e3&&y.current&&h.current&&(g.current!==null&&clearTimeout(g.current),g.current=setTimeout(E,3e3)))}function T(e){e.target===p.current&&(console.debug(e),o(`Unable to connect to server`),k())}function E(){if(!h.current)return;if(console.debug(`connectToPeer`,d.current),d.current>=r){o(`Too many connection attempts, aborting. Refresh page to try again`);return}o(null);let t=rg(e);a(`Connecting to server `+n);let i=new WebSocket(n);p.current=i,i.addEventListener(`open`,()=>{v.current!==null&&clearInterval(v.current),v.current=setInterval(()=>{try{i.send(`HELLO `+t),v.current!==null&&(clearInterval(v.current),v.current=null),a(`Registering with server (sent HELLO) for peer id: `+t)}catch(e){console.debug(e)}},3e3)}),i.addEventListener(`error`,T),i.addEventListener(`message`,C),i.addEventListener(`close`,w),d.current+=1}function D(e){f.current&&f.current.srcObject!==e.streams[0]&&(console.debug(`Incoming stream`),f.current.srcObject=e.streams[0],a(`Adding Track`))}function O(e){if(d.current=0,console.debug(`Creating RTCPeerConnection`),!e.sdp){console.debug(`WARNING: First message wasn't an SDP message!?`);return}let t=new RTCPeerConnection(i);m.current=t,t.addEventListener(`track`,D),t.addEventListener(`icecandidate`,({candidate:e=null})=>{if(!e){console.debug(`All local ICE Candidates sent.`);return}p.current?p.current.send(JSON.stringify({ice:e})):console.debug(`no WS found on peer connection 'icecandidate' event... how?`)}),a(`RTCPeerConnection created, waiting for SDP`)}let k=()=>{console.debug(`closeWebSocket`),A(),p.current&&=(p.current.close(),null)},A=()=>{console.debug(`closePeerConnection`),m.current&&=(m.current.close(),null)};return(0,_.useEffect)(()=>{y.current=t},[t]),(0,_.useEffect)(()=>(h.current=!0,t===!0?E():p.current&&p.current.close(1e3,`WebRTC Disabled`),()=>{console.debug(`cleanup`),h.current=!1,g.current!==null&&(clearTimeout(g.current),g.current=null),v.current!==null&&(clearInterval(v.current),v.current=null),k()}),[t]),(0,K.jsx)(tg,{...u,autoPlay:s,muted:c,ref:f,children:(0,K.jsx)(K.Fragment,{children:l})})};function rg(e){return`WRP_`+e+`_`+Math.floor(Math.random()*8990+10).toString()}var ig=B.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,ag=B(ng)`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,og=B.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,sg=B.svg`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${e=>e.$transcalent&&z`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,cg=({ws:e,onSizeChange:t=()=>{},onLineMoveEnd:n=()=>{},onLineClick:r=()=>{},onLoaded:i=()=>{},lineClickSensingBorder:a=`65`,hasClickSensingBorder:o=!0,videoOptions:s,options:{showHandleFinder:c,showSetIndex:l,showPointLabel:u=!1,showLabelShadow:d=!1,showPointHandle:f,showMoveHandle:p,showGrabHandle:m,setIndexOffset:h=0,pointIndexOffset:g=0,showPoint:v=!1,boundaryOffset:y=0,showDirectionMark:b=!1}={}})=>{let x=(0,_.useRef)(null),S=(0,_.useRef)(null),[C,w]=(0,_.useState)({x:{min:0,max:0},y:{min:0,max:0}}),{state:T}=(0,_.useContext)(zh),[E,D]=(0,_.useState)(!1),[O,k]=(0,_.useState)({h:768,w:1024}),[A,j]=(0,_.useState)(1),[M,ee]=(0,_.useState)(!1),N=(0,_.useCallback)(()=>{if(!S.current)return;let{videoHeight:e,videoWidth:n,clientHeight:r}=S.current;(e!==O.h||n!==O.w)&&(k({h:e,w:n}),t({h:e,w:n})),e/r!==A&&j(e/r)},[O.h,O.w,A,t]),te=e=>{e.target===x.current&&D(!!E&&!0)},P=()=>{D(c||!1)},F=(0,_.useCallback)(()=>x.current?x.current.getScreenCTM():null,[]);(0,_.useEffect)(()=>{if(!x.current||!M)return;let{viewBox:e}=x.current;w({x:{min:e.baseVal.x+y,max:e.baseVal.x+e.baseVal.width-y},y:{min:e.baseVal.y+y,max:e.baseVal.y+e.baseVal.height-y}})},[O,M,y]);let I=(0,_.useCallback)(({target:e})=>{if(e){ee(!0);let t=e;S.current=t,N();let{videoHeight:n=1,videoWidth:r=1}=t;i({height:n,width:r})}},[N,i]);(0,_.useEffect)(()=>(window.addEventListener(`resize`,N),()=>{window.removeEventListener(`resize`,N)}),[N]);let ne={handleFinderActive:E,revealSetIndex:l!==!1&&(l||T.length>1),showPointLabel:u,showLabelShadow:d,showPointHandle:f||f!==!1&&m!==!1,showMoveHandle:p||p!==!1&&m!==!1,setIndexOffset:h,pointIndexOffset:g,showPoint:v,showDirectionMark:b};return(0,K.jsxs)(ig,{children:[(0,K.jsx)(ag,{onLoadedMetadata:I,peerAddress:e,id:`1`,...s,enabled:!0,children:` `}),!M&&(0,K.jsx)(og,{children:(0,K.jsx)(hu,{size:`large`,styling:`primary`})}),M&&(0,K.jsx)(sg,{ref:x,viewBox:`0 0 ${O.w} ${O.h} `,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`,onPointerDown:te,onPointerUp:P,onPointerLeave:P,$transcalent:E,children:T.map((e,t)=>(0,K.jsx)(Wh,{hasClickSensingBorder:o,lineClickSensingBorder:a,onLineMoveEnd:n,onLineClick:r,lineSetId:t,lineData:e,getCTM:F,boundaries:C,unit:A,size:30,options:ne},t))})]})},lg=(e,t)=>({x:e.x+(t.x-e.x)*.5,y:e.y+(t.y-e.y)*.5}),ug=(e,t)=>{switch(t.type){case`UPDATE_SET_POINTS`:case`UPDATE`:{let n=t.data.points.map(e=>({...e}));return(0,Cl.default)(e,{[t.index]:{points:{$set:n}}})}case`RENAME_SET`:{let n={...e[t.index],name:t.data.name};return(0,Cl.default)(e,{[t.index]:{$set:n}})}case`UPDATE_SET_OPTIONS`:{let n={...e[t.index],...t.data};return(0,Cl.default)(e,{[t.index]:{$set:n}})}case`ADD_SET`:return[...e,t.data];case`REMOVE_SET`:return(0,Cl.default)(e,{$splice:[[t.index,1]]});case`ADD_POINT`:{let n=lg(e[t.index].points[0],e[t.index].points[1]);return(0,Cl.default)(e,{[t.index]:{points:{$splice:[[1,0,n]]}}})}case`REMOVE_POINT`:return e[t.index].points.length<=2?e:(0,Cl.default)(e,{[t.index]:{points:{$splice:[[e[t.index].points.length-1,1]]}}});case`LOAD`:return t.state.map(({name:e,points:t,...n})=>({name:e,points:t.map(({x:e,y:t})=>({x:e,y:t})),...n}));case`UPDATE_FILL_COLOR`:{let n={...e[t.index],areaFillColor:t.data.areaFillColor};return(0,Cl.default)(e,{[t.index]:{$set:n}})}case`UPDATE_TRANSPARENCY_LEVEL`:{let n={...e[t.index],areaTransparencyLevel:t.data.areaTransparencyLevel};return(0,Cl.default)(e,{[t.index]:{$set:n}})}default:return console.error(`Action ${t.type} not registered.`),e}},dg=24,fg=20,pg=-fg-dg,mg=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${Ol.large} {
    gap: ${fg}px;
    flex-direction: row;
  }
`,hg=B.div`
  position: relative;
  display: flex;
  flex-direction: ${({$areaTitleBottom:e})=>e?`column-reverse`:`column`};
  gap: 4px;
`,gg=B.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${Ol.large} {
    margin-left: ${pg}px;
    justify-content: center;
  }

  svg {
    display: block;
  }
`,_g=B.h1`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0;
`,vg=z`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
`,yg=B.div`
  ${vg}
`,bg=B(Jc)`
  ${vg}
  &:hover {
    text-decoration: underline;
  }
`,xg=B.button`
  ${X};
  ${vg};
  &:hover {
    text-decoration: underline;
  }
`,Sg=({title:e,icon:t,areaTitle:n,areaHref:r,updateDocTitle:i=!0,hideAreaInDocTitle:a=!1,areaTitleBottom:o=!1,iconColor:s=`dimmed`,onAreaClick:c})=>(Kd(e,a?void 0:n||``,void 0,i),(0,K.jsxs)(mg,{children:[t?(0,K.jsx)(gg,{children:(0,K.jsx)(J,{size:dg,color:s,icon:t})}):null,(0,K.jsxs)(hg,{$areaTitleBottom:o,children:[n&&c?(0,K.jsx)(xg,{onClick:c,type:`button`,children:n}):n&&r?(0,K.jsx)(bg,{to:r,children:n}):n?(0,K.jsx)(yg,{children:n}):null,(0,K.jsx)(_g,{children:e})]})]})),Cg=B.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,wg=({children:e})=>(0,K.jsx)(Cg,{children:(0,K.jsx)(K.Fragment,{children:e})}),Tg=B.div`
  user-select: none;
`,Eg=B(Jc)`
  text-decoration: none;
  display: flex;
`,Dg=B.button`
  ${X};
  text-decoration: none;
  display: flex;
`,Og=B.div`
  font-family: var(--font-data);
  font-size: ${({$size:e})=>e}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({$noBorder:e})=>!e&&z`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `};

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({$tagSize:e})=>e===`compact`&&z`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({$tagSize:e})=>e===`default`&&z`
    padding: 3px 8px;
  `};

  ${q} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({$hoverColor:e,$enableHover:t})=>t&&z`
    &:hover {
      cursor: pointer;
      border-color: var(--${e});
      color: var(--${e});
      ${q} {
        [stroke]{
          stroke: var(--${e});
        }
      }
    }
  `};
`,kg=({icon:e=``,size:t=12,weight:n=`regular`,label:r=``,linkTo:i,noBorder:a=!1,tagSize:o,onTagClick:s,...c})=>{let l=(0,_.useMemo)(()=>o===`compact`?8:10,[o]),u=(0,_.useMemo)(()=>o===`compact`?12:14,[o]),d=()=>(0,K.jsxs)(Og,{$hoverColor:`primary`,$enableHover:!!(s||i),$size:o?u:t,$tagSize:o,$noBorder:a,children:[e&&(0,K.jsx)(J,{icon:e,size:o?l:t,weight:n,...c}),(0,K.jsx)(Tg,{children:r})]});return s?(0,K.jsx)(Dg,{onClick:s,type:`button`,children:d()}):i?(0,K.jsx)(Eg,{to:i,children:d()}):d()},Ag=B.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`,jg=B.div`
`,Mg=B.div`
  max-width: 648px;
`,Ng=B.div`
    ${({$iconLeftPanel:e})=>e&&z`
        padding-top: 32px;
    `};

    @media ${Ol.large} {
      padding-top: 0px;
    }

`,Pg=B.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
  margin-top: 29px;
`,Fg=B.div``,Ig=({title:e,icon:t,iconColor:n=`primary-9`,introductionText:r,areaHref:i,areaTitle:a,updateDocTitle:o=!0,hideAreaInDocTitle:s,tagList:c,areaTitleBottom:l,rightContent:u,bottomLeftContent:d,onAreaClick:f})=>(0,K.jsxs)(Ag,{children:[(0,K.jsxs)(jg,{children:[(0,K.jsx)(Sg,{iconColor:n,title:e,icon:t,areaHref:i,areaTitle:a,updateDocTitle:o,hideAreaInDocTitle:s,areaTitleBottom:l,onAreaClick:f,bottomLeftContent:d}),c?(0,K.jsx)(Pg,{children:c.map(({icon:e,label:t,linkTo:n,onTagClick:r})=>(0,K.jsx)(kg,{icon:e||``,noBorder:!0,tagSize:`compact`,label:t,linkTo:n,onTagClick:r},`tag-`))}):null,r?(0,K.jsx)(Mg,{children:(0,K.jsx)(wg,{children:r})}):null,(0,K.jsx)(Fg,{children:(0,K.jsx)(K.Fragment,{children:d})})]}),u?(0,K.jsx)(Ng,{$iconLeftPanel:!!t,children:(0,K.jsx)(K.Fragment,{children:u})}):null]});B.div`
  display: flex;
  flex-direction: column;
`;var Lg=B.div`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 55px;
  height: auto;
  opacity: 0.65;
  margin-right: 10px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 75%;
    ${({$aspect:e})=>e===`16:9`&&z`
      padding-left: 56.25%;
    `}
  }

  transition:
    opacity var(--speed-normal) var(--easing-primary-out),
    transform var(--speed-fast) var(--easing-primary-out);

  &:hover {
      cursor: pointer;

    ${({$hoverZoom:e})=>e&&z`
      transform: scale(1.5);
      opacity: 1;
      transition: transform var(--speed-normal) var(--easing-primary-out);
    `}
  }

`,Rg=B.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,zg=B.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 41px;
  width: 55px;
  object-fit: cover;
  display: block;
`,Bg=B.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black-a1);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${q} {
    display: flex;
    svg {
      padding-left: 2px;
      path {
        stroke: var(--white-1);
      }
    }
  };
`,Vg=({hoverZoom:e=!0,image:t=``,mediaUrl:n,mediaType:r,retryImageLoad:i=!1,retryLimit:a=5,closeText:o,onClickThumbnail:s})=>{let[c,l]=(0,_.useState)(!!t),[u,d]=(0,_.useState)(t),{createMediaModal:f}=yf(),[p,m]=(0,_.useState)(0),h=(0,_.useRef)(null),g=(0,_.useRef)(null),v=(0,_.useCallback)(async()=>{f({src:c&&n?n:``,mediaType:r||`img`,minHeight:`240px`,closeText:o})},[o,f,r,n,c]);(0,_.useEffect)(()=>{l(!1),m(0),d(t)},[t]),(0,_.useEffect)(()=>{h.current&&h.current.complete&&u!==``&&(g.current&&clearTimeout(g.current),g.current=null,l(!0))},[u]);let y=(0,_.useCallback)(()=>{g.current=null,d(`${t}?v=${Date.now()}`)},[t]),b=(0,_.useCallback)(()=>{if(l(!1),!i||p>=a||g.current)return;let e=1e3*(p**2+Math.random());m(e=>e+1),g.current=setTimeout(y,e)},[p,i,a,y]),x=(0,_.useCallback)(()=>{g.current&&clearTimeout(g.current),g.current=null,l(!0)},[]),S=(e,t)=>{if(!e){t(!1);return}let n=new Image;n.src=e,n.complete?t(!0):(n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)})};return(0,_.useEffect)(()=>{S(t,e=>{l(!!e)})},[t]),(0,K.jsxs)(Lg,{$hoverZoom:e,$mediaUrl:n,$aspect:`16:9`,onClick:s||v,children:[c?(0,K.jsx)(Rg,{ref:h,src:u,onError:b,onLoad:x}):(0,K.jsx)(zg,{children:(0,K.jsx)(ad,{})}),n&&r===`video`&&(0,K.jsx)(Bg,{children:(0,K.jsx)(J,{size:12,icon:`Play`,color:`inverse`})})]})},Hg=B.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({$status:e,theme:{colors:t}})=>z`
    background: ${t.status[e]};
    content:'${e}';
  `}

`,Ug=({status:e=`neutral`})=>(0,K.jsx)(Hg,{$status:e}),Wg=B.button`

  cursor: pointer;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 14px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  transition: var(--speed-normal) var(--easing-primary-out);

  svg {
    display: block;
  }

  &:hover {
    opacity: 1 !important;
  }

`,Gg=B.div`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${e=>e.theme.fontFamily.data};

  &:hover ${Wg}{
    opacity: 0.5;
  }

  &, a {
    ${({theme:e,$cellStyle:t,$alignment:n})=>t===`firstColumn`?z`
      ${e.typography.table.columnData[t]};
    `:z`
      ${e.typography.table.columnData[t][n]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({$hasCopyButton:e})=>e&&z`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},$hideDivider:t})=>!t&&z`
    &::after {
      ${e.tables.rows.divider};
      content: '';
      display: block;
      height: 1px;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0px;
      position: absolute;
    }
  `}
`,Kg=B.span`
  ${({theme:e})=>z`
    ${e.typography.table.columnData.unit};
  `}
`,qg=B.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({$status:e=`neutral`,theme:{colors:t}})=>z`
    background: ${t.status[e]};
  `}
`,Jg=({showUnit:e=!1,showStatus:t=!1,status:n,unit:r=``,cellStyle:i=`normalImportance`,alignment:a=`left`,hideDivider:o,isLastRow:s,hasCopyButton:c,href:l,children:u})=>{o=s?!0:o;let{copyToClipboard:d}=Jd();return(0,K.jsx)(Gg,{$cellStyle:i,$alignment:a,$hideDivider:o,$hasCopyButton:c,children:(0,K.jsxs)(K.Fragment,{children:[t?(0,K.jsx)(qg,{$status:n}):null,l?(0,K.jsx)(`a`,{href:l,children:u}):u,e?(0,K.jsx)(Kg,{children:r}):null,c?(0,K.jsx)(Wg,{onClick:()=>typeof u==`string`&&d(u),children:(0,K.jsx)(J,{icon:`Copy`,size:16})}):null]})})},Yg=B.div`
  display: table-row;
  ${({$isEmpty:e})=>e&&z`
    visibility: hidden;
  `};
`,Xg=({selectable:e=!1,selectCallback:t,hasStatus:n,hasThumbnail:r,hasTypeIcon:i,rowData:a,isLastRow:o,columnConfig:s,closeText:c})=>{let l=(0,_.useCallback)(e=>{t&&t(e,a.id)},[a.id,t]);return(0,K.jsxs)(Yg,{$isEmpty:a.columns.length===0,children:[e?(0,K.jsx)(Jg,{hideDivider:!0,children:(0,K.jsx)(fd,{checked:a._checked,disabled:a.checkboxDisabled,onChangeCallback:l})}):null,n?(0,K.jsx)(Jg,{hideDivider:!0,children:(0,K.jsx)(Ug,{status:a.header?.status})}):null,r?(0,K.jsx)(Jg,{hideDivider:!0,children:(0,K.jsx)(Vg,{image:a.header?.image,mediaUrl:a.header?.mediaUrl,mediaType:a.header?.mediaType,closeText:c,onClickThumbnail:a.header?.onClickThumbnail})}):null,i?(0,K.jsx)(Jg,{hideDivider:!0,children:(0,K.jsx)(J,{icon:a.header?.icon||``,color:`dimmed`,weight:`regular`,size:16})}):null,a.columns.map((e,t)=>{let{cellStyle:n,alignment:r,showUnit:i,showStatus:a,hasCopyButton:c}=s[t],{unit:l,status:u,text:d,customComponent:f}=e;return(0,K.jsx)(Jg,{href:e.href,cellStyle:n,alignment:r,showUnit:i,showStatus:a,hasCopyButton:c,unit:l,status:u,isLastRow:o,children:f||d},t)})]})},Zg=B.div`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${q} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${({$ascending:e})=>e&&z`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }

  ${({$isSortActive:e})=>e&&z`
    &:not(hover) {
      ${q} {
        display: inline-flex;
      }
    }
  `}

  ${({theme:{styles:e},$sortable:t})=>t&&z`

    ${e.tables.header.sortable.default};

    &:hover {
      cursor: pointer;
      ${e.tables.header.sortable.hover};

      ${q} {
        ${e.tables.header.sortable.hover};
        display: inline-flex;
      }
    }
  `}
`,Qg=({header:e,sortable:t,isSortActive:n,ascending:r,columnId:i,indexKey:a,toggleSort:o})=>{let s=(e,t)=>{o(e,t)};return(0,K.jsxs)(Zg,{$sortable:t,$isSortActive:n,$ascending:r,onClick:()=>{s(a,i)},children:[t&&(0,K.jsx)(J,{icon:`FilterSorting`,size:14,color:`dimmed`}),e]})},$g=B.div`
  display: table-row;
  height: 50px;
`,e_=B.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({$hasCopyButton:e})=>e&&z`
    padding-right: 20px;
  `};

  ${({theme:e,$alignment:t,$headerStyle:n})=>t?z`
    ${e.typography.table[n][t]};
  `:z`
    ${e.typography.table[n].left};
  `};

  ${e=>e.$fixedWidth&&z`
    width: ${e.$fixedWidth}px;
  `};

  ${({$minWidth:e})=>e&&z`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},$headerStyle:t,$isSortActive:n})=>t===`subHeader`&&z`
  padding-bottom: 15px;

  &::after {
    ${e.tables.header.divider};
    content: '';
    display: block;
    height: 1px;
    left: ${n?`-15px`:`0`};
    right: 0;
    width: ${n?`calc(100% + 15px)`:`100%`};
    bottom: 0px;
    position: absolute;
  }
`};
`,t_=B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({$alignment:e})=>e&&z`
      ${e===`right`?`align-items: flex-end`:null};
      ${e===`center`?`align-items: center`:null};
  `};
`,n_=B.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,r_=B.div`
  ${({theme:{typography:e}})=>z`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,i_=B.div`
  height: 20px;
`,a_=B.div`
  ${({theme:{styles:e}})=>z`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({$isLastOfGroup:e})=>e&&z`
    margin-right: 15px;
  `};
`,o_=(e,t)=>{if(t<0)return null;let n=!0;return t<e.length-1&&(n=e[t].groupTitle!==e[t+1].groupTitle),e[t].groupTitle?t!==0&&e[t-1].groupTitle===e[t].groupTitle?(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(i_,{}),(0,K.jsx)(a_,{$isLastOfGroup:n})]}):(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(r_,{children:e[t].groupTitle}),(0,K.jsx)(a_,{$isLastOfGroup:n})]}):(0,K.jsx)(i_,{})},s_=({selectable:e,hasStatus:t,hasThumbnail:n,hasTypeIcon:r,allChecked:i,disableAllChecked:a,hasHeaderGroups:o,columnConfig:s,defaultAscending:c,toggleAllCallback:l=()=>{},sortCallback:u=()=>{}})=>{let[d,f]=(0,_.useState)(s),[p,m]=(0,_.useState)(c),h=(0,_.useCallback)(e=>{l(e)},[l]),g=(0,_.useCallback)((e,t)=>{if(d[e]===void 0||!d[e].sortable)return;let n=[...d],r=null;n.forEach((t,n)=>{t.sortActive&&(r=n),n===e?t.sortActive=!0:t.sortActive=!1});let i=r===e?!p:p;u(i,t===void 0?`column_${e}`:t),f(n),m(i)},[p,u,d]);return(0,K.jsxs)($g,{children:[e?(0,K.jsx)(e_,{$headerStyle:`header`,$fixedWidth:30,children:(0,K.jsx)(fd,{checked:i,disabled:a,onChangeCallback:h})}):null,t?(0,K.jsx)(e_,{$headerStyle:`header`,$fixedWidth:10}):null,n?(0,K.jsx)(e_,{$headerStyle:`header`,$fixedWidth:70}):null,r?(0,K.jsx)(e_,{$headerStyle:`header`,$fixedWidth:35}):null,s.map((e,t,n)=>{let{header:r,alignment:i,hasCopyButton:a,sortActive:s,columnId:c,sortable:l,minWidth:u}=e;return(0,K.jsx)(e_,{$alignment:i,$hasCopyButton:a,$minWidth:u,$headerStyle:o?`subHeader`:`header`,$isSortActive:s,children:(0,K.jsxs)(t_,{$alignment:i,children:[o&&(0,K.jsx)(n_,{children:o&&o_(n,t)}),(0,K.jsx)(Qg,{header:r,sortable:l,indexKey:t,columnId:c,isSortActive:s,ascending:p,toggleSort:g})]})},t)})]})},c_=B.div``,l_=B.div`
  display: table;
  width: 100%;
  position: relative;
`,u_=B.div`
  color: var(--grey-a11);
`,d_=B.div`
  position: absolute;
  left: 0;
  z-index: 99;
  background-color: ${({theme:e})=>e.colors.pureBase};
  height: calc(100% - 50px);
  opacity: 85%;
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${u_} {
    margin-top: 10px;
  }
`,f_=B.div`
  position: absolute;
  left: 0;
  z-index: 99;
  padding: 20px;
  width: 100%;
  min-height: 100px;
  text-align: center;
  h3 {
    font-weight: 500;
    color: var(--grey-11);
  }
  color: var(--grey-10);
`,p_=({_checked:e=!1})=>e===!0,m_=({checkboxDisabled:e=!1})=>e===!0,h_=({columnConfig:e,selectable:t,rows:n=[],closeText:r,hasStatus:i=!1,hasThumbnail:a=!1,hasTypeIcon:o=!1,defaultAscending:s=!1,isLoading:c=!1,loadingText:l=`Loading Data...`,emptyTableTitle:u=``,emptyTableText:d=``,hasHeaderGroups:f=!1,sortCallback:p=()=>{},selectCallback:m=()=>{},toggleAllCallback:h=()=>{}})=>{let[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!1),x=n.length===1&&n[0].columns.length===0&&!c;return(0,_.useEffect)(()=>{let e=!1,t=!1;n.every(p_)&&n.length>0&&!x&&(e=!0),(n.some(m_)||x||c)&&(t=!0),v(e),b(t)},[x,c,n]),(0,K.jsx)(c_,{children:(0,K.jsxs)(l_,{children:[(0,K.jsx)(s_,{selectable:t,hasStatus:i,hasThumbnail:a,hasTypeIcon:o,defaultAscending:s,allChecked:g,disableAllChecked:y,hasHeaderGroups:f,columnConfig:e,toggleAllCallback:h,sortCallback:p}),c?(0,K.jsxs)(d_,{children:[(0,K.jsx)(hu,{size:`large`,styling:`primary`}),(0,K.jsx)(u_,{children:l})]}):null,x?(0,K.jsxs)(f_,{children:[(0,K.jsx)(`h3`,{children:u}),(0,K.jsx)(`p`,{children:d})]}):null,n.map((s,c)=>(0,K.jsx)(Xg,{rowData:s,isLastRow:n.length-1===c,selectable:t,selectCallback:m,columnConfig:e,hasStatus:i,hasThumbnail:a,hasTypeIcon:o,closeText:r},c))]})})};B.div`
  position: relative;
  ${({theme:e})=>z`
    font-family: ${e.fontFamily.ui};
  `}
`;var g_=B(su)`
  flex-shrink: 0;
`,__=B(Du)`
  flex-shrink: 0;
`;B(Jc)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,B.div`
  min-width: 320px;
  background-color: var(--grey-2);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Vu} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${g_} {
    margin-left: 5px;
  }
  ${__} {
    margin-left: 5px;
  }
`;var v_=B(ku)``;B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({$alignment:e})=>e===`center`&&z`
    justify-content: center;
  `}

  ${({$alignment:e})=>e===`right`&&z`
    justify-content: flex-end;
`}

  ${v_} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${v_} {
      opacity: 1;
    };
  }
`,B.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${ff} {
    height: 100%;
    width: 100%;
    text-align: center;
    img, video {
      border-radius: 3px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`,B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({$hasPadding:e})=>e&&`
    padding-bottom: 43px
  `}
;

  ${q} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,B.div`
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  color: var(--inverse);
  opacity: 0.85;
  height: 46px;
  width: 300px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  padding: 10px;
`,B.div`
  ${zl};
  max-width: 245px;
  font-size: 10px;
`,B.div`
  ${zl};
  max-width: 245px;
  font-size: 12px;
`,B.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${q} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`,B.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`,B.div`
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  height: 3px;
  width: 100%;
`,B.div`
  display: flex;
  height: 60px;
`,B.div`
  ${({$hasRightData:e})=>e&&z`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${q} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`,B.div`
  padding: 0 12px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,B.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`,B.div`
  ${zl};
  ${({$hasRightData:e})=>e?`max-margin: 140px;`:`max-margin: 250px;`}};
  ${({$hasMarginBottom:e})=>e&&`margin-bottom: 1px;`};

  color: var(--grey-a10);
  font-size: 10px;
`,B.div`
  font-family: var(--font-data);
  ${zl};
  ${({$hasRightData:e})=>e?`max-width: 140px;`:`max-width: 250px;`}

  color: var(--grey-11);
  font-size: 16px;
`,B.div`
  ${zl};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({$hasMarginBottom:e})=>e&&`margin-bottom: 6px;`};
`,B.div`
  ${zl};
  max-width: 80px;
  color: var(--grey-11);
  font-size: 12px;
`,B.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 var(--grey-a5);
  background-color: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
  }

  ${({$hasOnClick:e})=>e&&`
    cursor: pointer;
  `};
`,B.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`,B.div`
  display: flex;
  ${Og} {
    margin-right: 10px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }
  flex-wrap: wrap;
`,B.div``,B.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`,B.div`
  display: flex;
  justify-content: space-between;
`,B.div`
  button {
    margin: 0 10px 10px 0;
  }
`,B.div`
  flex-shrink: 0;
`,B.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  margin-top: 29px;
  min-height: 19px;
  color: var(--grey-10);
  font-size: 12px;
`,B.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: fit-content;
  margin-right: 10px;
  white-space: nowrap;
  gap: 40px;
  vertical-align: baseline;
`,B.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`,B.input`
  ${Rl};
  color: var(--input-color-default);
  max-width: ${({$maxWidth:e})=>e||`40px`};
  font-family: var(--font-data);
  height: 100%;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  border: none;
  padding-right: ${12/2}px;
`;var y_=zn`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;B.div`
  height: var(--input-height, 40px);
  animation: ${({$shouldShake:e})=>e?y_:`none`} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({$borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`,B(su)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`,B.div`
  display: flex;
  gap: 0 8px;
`,B.button`
  ${X};
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px var(--input-default-border-color);
  background-color: var(grey-2);
  pointer-events: ${({$active:e})=>e?`auto`:`none`};
  opacity: ${({$active:e})=>e?`1`:`0.5`};

  &:focus, &:hover {
    outline: 2px solid #838383;
  }
`,B.div`
  ${gd} {
    width: ${({$width:e})=>e||`60px`};
  }
`,B.div``,B.div`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  text-shadow: 0px 0px 10px var(--white-a5);
  text-decoration: none;
  color: var(--grey-11);
`,B.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  text-decoration: none;
  color: var(--grey-11);
  margin: 28px 0;
`,B(su)`
  margin-left: 10px;
`,B.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;var b_=B.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,x_=B.button`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;
  cursor: pointer;

  ${b_}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${b_}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,S_=({show:e,link:t,label:n=`Share`,copiedLabel:r=`Copied`})=>{let[i,a]=(0,_.useState)(n),{copyToClipboard:o}=Jd(),s=(0,_.useCallback)(()=>{o(t||window.location.href),a(r),setTimeout(()=>a(i),2e3)},[t,r,i,o]);return(0,_.useEffect)(()=>{a(n)},[n]),e?(0,K.jsxs)(x_,{onClick:s,children:[(0,K.jsx)(b_,{children:(0,K.jsx)(J,{icon:`Link`,size:16,color:`grey-10`})}),i]}):null},C_=B.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,w_=z`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;

  ${C_}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${C_}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,T_=z`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,E_=B(Jc)`
  ${w_};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&z`
    &::after {
      ${T_};
    }
  `}
`,D_=B.button`
  ${X};
  ${w_};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&z`
    &::after {
      ${T_};
    }
  `}
`,O_=({show:e=!0,link:t,label:n=`Back`,$showDivider:r,$iconInGutter:i,onClick:a})=>{let o=(0,_.useMemo)(()=>(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(C_,{children:(0,K.jsx)(J,{icon:`Back`,size:16,color:`grey-10`})}),n]}),[n]);return e?(0,K.jsx)(_.Fragment,{children:a?(0,K.jsx)(D_,{$showDivider:r,$iconInGutter:i,onClick:a,children:o}):t&&(0,K.jsx)(E_,{to:t,$showDivider:r,$iconInGutter:i,children:o})}):null},k_=B.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,A_=B.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,j_=B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,M_=B.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,N_=B.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,P_=B(N_)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,F_=z`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  color: var(--grey-10);
  font-family: var(--font-ui);
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
`,I_=z`
  ${F_};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${P_} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,L_=B(Jc)`
  ${I_};
`,R_=B.button`
  ${X};
  ${I_};
`,z_=B.span`
  ${F_};
  pointer-events: none;
`,B_=B.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,V_=({showBreadcrumbs:e=!0,breadcrumbs:t=[],showHomeIcon:n=!0,back:r,share:i,$iconInGutter:a})=>{let{isLarge:o}=uf(),s=a===void 0?o:a,c=e&&t.length>0;return(0,K.jsxs)(k_,{children:[(0,K.jsxs)(A_,{children:[r&&(0,K.jsx)(O_,{$showDivider:c,$iconInGutter:s,...r}),c?(0,K.jsx)(j_,{children:t.map((e,r)=>{let{text:i,href:a,onClick:o}=e,s=r===0,c=r===t.length-1,l=(0,K.jsxs)(_.Fragment,{children:[s&&n?(0,K.jsx)(P_,{children:(0,K.jsx)(J,{icon:`Home`,size:11,color:`grey-10`})}):null,i]});return(0,K.jsx)(_.Fragment,{children:(0,K.jsxs)(M_,{children:[o?(0,K.jsx)(R_,{onClick:o,type:`button`,children:l}):a?(0,K.jsx)(L_,{to:a,children:l}):(0,K.jsx)(z_,{children:l}),c?null:(0,K.jsx)(N_,{children:(0,K.jsx)(J,{icon:`Right`,size:6,color:`grey-8`})})]})},r)})}):null]}),(0,K.jsx)(B_,{children:(0,K.jsx)(S_,{...i})})]})},H_=_.createContext({selected:``,setSelected:()=>{}}),U_=({children:e})=>{let[t,n]=(0,_.useState)(``);return(0,K.jsx)(H_.Provider,{value:{selected:t,setSelected:n},children:e})},W_=B.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,G_=B.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,K_=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,q_=B.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,J_=B.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    var(--content-layout-padding-top)
    var(--content-layout-padding-right)
    var(--content-layout-padding-bottom)
    var(--content-layout-padding-left);

  display: flex;
  flex: 1;
  flex-direction: column;
`,Y_=({layout:e=`default`,HeaderContent:t={},children:n})=>{let{PageHeaderArea:r,TabsElementArea:i,UtilityHeaderOptions:a}=t;return(0,K.jsxs)(W_,{className:`content-layout-`+e,children:[a?(0,K.jsx)(V_,{...a}):null,r?(0,K.jsx)(G_,{children:(0,K.jsx)(K.Fragment,{children:r})}):null,i?(0,K.jsxs)(U_,{children:[(0,K.jsx)(K_,{children:(0,K.jsx)(q_,{children:(0,K.jsx)(K.Fragment,{children:i})})}),(0,K.jsx)(J_,{children:(0,K.jsx)(K.Fragment,{children:n})})]}):(0,K.jsx)(J_,{children:(0,K.jsx)(K.Fragment,{children:n})})]})},X_=B.div`
  min-height: ${({$contentHeight:e})=>e+`px`};
`,Z_=B.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`,Q_=({children:e})=>{let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(0);return(0,_.useEffect)(()=>{t&&t.current&&r(t.current.clientHeight)},[t,e]),(0,K.jsx)(X_,{$contentHeight:n,children:(0,K.jsx)(Z_,{ref:t,children:(0,K.jsx)(K.Fragment,{children:e})})})},$_=B.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,ev=B.div`
  background: var(--grey-10);
  flex: 1;
`,tv=B.div`
  flex: 0 0 20px;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`,nv=B.svg`
  transform: ${({$layout:e})=>e===`horizontal`?`rotate(0deg)`:`rotate(90deg)`};
`,rv=B.svg`
  transform: rotate(0deg);
  ${({$direction:e})=>{switch(e){case`up`:return`transform: rotate(-90deg);`;case`down`:return`transform: rotate(90deg);`;case`left`:return`transform: rotate(180deg);`;default:return`transform: rotate(0deg);`}}};
`,iv=B.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout:e})=>e===`horizontal`?z`
    width: 16px;
    flex-direction: column;
    ${$_}{
      flex-direction: column;
    }

    ${ev}{
      width: 1px;
    }

  `:z`
      height: 16px;
      flex-direction: row;
      ${$_}{
        flex-direction: row;
      }
      ${ev}{
        height: 1px;
      }
  `}
`,av=({state:e=`default`,layout:t=`horizontal`,arrowDirection:n})=>(0,K.jsx)(iv,{$layout:t,children:(0,K.jsxs)($_,{children:[(0,K.jsx)(ev,{}),(0,K.jsx)(tv,{children:e===`default`?(0,K.jsxs)(nv,{$layout:t,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,K.jsx)(`path`,{d:`M13 14.875V5.125`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,K.jsx)(`path`,{d:`M10 14.875V5.125`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,K.jsx)(`path`,{d:`M7 14.875L7 5.125`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):(0,K.jsx)(rv,{$direction:n,width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,K.jsx)(`path`,{d:`M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625`,stroke:`#9BA1A6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,K.jsx)(ev,{})]})}),ov=B.div`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  background: #ededed99;
  border: grey 1px solid;
  padding: 20px;
  line-height: 20px;
  font-size: 12px;
  div {
    display: block;
  }
  span {
    display: inline-block;
    width: 130px;
    font-weight: 600;
  }
`,sv=B.div`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout:e,$minDimension:t})=>e===`vertical`?z`
    ${t?`min-height: ${t}px;`:null};
  `:z`
    ${t?`min-width: ${t}px;`:null};
  `}
`,cv=B.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`,lv=B.div`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize:e})=>e}px;
  display: ${({$collapseState:e})=>e===`collapsed`?`none`:`block`};
  transition:
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);

  ${({$layout:e,$maxDimension:t,$minDimension:n})=>e===`vertical`?z`
    ${n?`min-height: ${n}px;`:`0`};
    ${t?`max-height: ${t}px;`:`none`};
    ${cv}{
      min-height: ${n}px;
    }
  `:z`
    ${n?`min-width: ${n}px;`:`0`};
    ${t?`max-width: ${t}px;`:`none`};
    ${cv}{
      min-width: ${n}px;
    }
  `}


  ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`collapsing`?z`
      transition: none;
      ${e===`horizontal`?`min-width: 0`:`min-height: 0`};
      ${cv}{
        flex: 0 0 ${n}px;
        min-width: ${n}px;
        opacity: 0.5;
      }
    `:null}

    ${({$collapseState:e})=>e===`collapsed`?z`
      ${cv}{
        display: none;
      }
    `:null}

    ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`peeking`?z`
      ${e===`horizontal`?`min-width: 0`:`min-height: 0`};
      ${cv}{
        min-width: ${n}px;
        opacity: 0.5;
      }
    `:null}

    ${({$layout:e,$collapseState:t,$minDimension:n})=>t===`opening`?z`
    ${e===`horizontal`?`min-width: 0`:`min-height: 0`};

    ${cv}{
      min-width: ${n}px;
    }
    `:null}
`,uv=B.div`
  flex: 0 0 ${({$size:e})=>e}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: col-resize;

  > div {
    transition: opacity 0.15s cubic-bezier(0.45, 0, 0.55, 1);
  }

  &:hover > div {
    opacity: 1;
  }

  ${({$fauxHover:e})=>e===`false`?z`
    > div {
      opacity: 0.6;
    }
  `:z`
    > div {
      opacity: 1;
    }
  `}

`,dv=B.section`
  box-sizing: border-box;
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised:e})=>e===`true`?z`
    opacity: 1;
  `:null}

  ${({$layout:e})=>e===`vertical`?z`
    flex-direction: column;
    ${sv}{}
    ${uv}{
      cursor: row-resize;
    }
  `:null}

  ${({$reverse:e})=>e===`true`?z`
    ${sv}{ order: 2; }
    ${uv}{ order: 1; }
  `:null}
`,fv=(0,_.forwardRef)(({mainArea:e,sideArea:t,layout:n=`horizontal`,reverse:r,dividerSize:i=16,persist:a=!1,persistenceKey:o=`resizable_ui`,showDebug:s},c)=>{let l=`resizable_layout_`+o,u=t.defaultSize||350,d=t.minSize||0,f=t.maxSize,p=e.minSize,[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(),[y,b]=(0,_.useState)(),[x,S]=(0,_.useState)(),[C,w]=(0,_.useState)(t.defaultCollapsed?`collapsed`:`open`),[T,E]=(0,_.useState)(u),[D,O]=(0,_.useState)(u),[k,A]=(0,_.useState)(u),j=(0,_.useRef)(null),M=(0,_.useRef)(null),[ee,N]=Yd(`${l}_size`,null),[te,P]=Yd(`${l}_state`,null),[F,I]=Yd(`${l}_quick_open_size`,null);(0,_.useEffect)(()=>{m||(a&&(ee&&E(ee),te&&w(te),F&&A(F)),h(!0))},[m,a,te,ee,F]),(0,_.useEffect)(()=>{!m||!t.onSideAreaStateChange||t.onSideAreaStateChange(C)},[m,t,C]),(0,_.useImperativeHandle)(c,()=>({open:()=>{L()},close:()=>{re()},reset:()=>{ne()}}));let ne=(0,_.useCallback)(()=>{E(u),w(`open`),N(null),P(null)},[E,u,w,N,P]),re=(0,_.useCallback)(()=>{w(`collapsed`),E(1),O(1),a&&(N(1),P(`collapsed`),I(D))},[E,w,P,N,I,D,a]),L=(0,_.useCallback)(()=>{w(`open`);let e;e=T>1&&M.current?n===`horizontal`?M.current.clientWidth:M.current.clientHeight:k,O(e),E(e),a&&(N(Math.round(T)),P(`open`))},[a,P,N,k,T,n]),R=(0,_.useCallback)(()=>{C===`collapsing`&&T<d-50?re():(O(Math.round(T)),A(Math.round(T)),L()),S(!1)},[re,L,d,T,C]),ie=(0,_.useCallback)(e=>{e.preventDefault();let{clientX:t,clientY:n}=e;O(C===`collapsed`?T:pv(T,d,f)),v({x:t,y:n}),b({x:0,y:0}),S(!0)},[T,f,d,C]),ae=()=>{x&&R()},oe=(0,_.useCallback)(e=>{let{clientX:a,clientY:o}=e,s,c=C;if(x&&g&&D){if(b({x:g.x-a,y:g.y-o}),n===`horizontal`){let e=(j.current?.clientWidth??0)-i-(p||0);s=pv(r?D-(g.x-a):D+(g.x-a),null,e)}else{let e=(j.current?.clientHeight??0)-i-(p||0);s=pv(r?D-(g.y-o):D+(g.y-o),null,e)}if(t.collapsable){let e=s<d-50;C===`open`&&e||C===`opening`&&e?c=`collapsing`:C===`collapsing`&&!e?c=`open`:C===`collapsed`?c=`peeking`:C===`peeking`&&!e&&(c=`opening`)}E(s),w(c)}},[E,b,x,g,D,C,n,i,p,d,r,t.collapsable]),se=(0,_.useCallback)(()=>{x&&R()},[x,R]);(0,_.useEffect)(()=>(document.addEventListener(`mouseleave`,se),()=>{document.removeEventListener(`mouseleave`,se)}),[se]);let ce=()=>C===`collapsed`||C===`peeking`?n===`horizontal`?r?`right`:`left`:r?`down`:`up`:n===`horizontal`?r?`left`:`right`:r?`up`:`down`,le=()=>C===`collapsed`||C===`peeking`||C===`collapsing`?`arrow`:`default`,ue=(0,K.jsxs)(ov,{children:[(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`State:`}),` `,C]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Position:`}),` `,g?.x,`, `,g?.y]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`Difference:`}),` `,y?.x,`, `,y?.y]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`sideAreaStartBasis:`}),` `,D]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`sideAreaBasis:`}),` `,T]}),(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`span`,{children:`lastOpenSize:`}),` `,k]})]});return(0,K.jsxs)(dv,{ref:j,onPointerMove:oe,onPointerUp:ae,$initialised:m?`true`:`false`,$layout:n,$reverse:r?`true`:`false`,children:[(0,K.jsx)(sv,{$layout:n,$minDimension:p,children:(0,K.jsx)(K.Fragment,{children:e.content})}),(0,K.jsx)(uv,{onPointerDown:ie,onDoubleClick:ne,$size:i,$fauxHover:x?`true`:`false`,children:(0,K.jsx)(av,{state:le(),layout:n,arrowDirection:ce()})}),(0,K.jsx)(lv,{ref:M,style:{flexBasis:`${T}px`},$defaultSize:u,$minDimension:d,$maxDimension:f,$layout:n,$collapseState:C,children:(0,K.jsx)(cv,{children:(0,K.jsx)(K.Fragment,{children:t.content})})}),s?ue:null]})}),pv=(e,t,n)=>{let r=e;return r=n&&r>n?n:r,r=t&&r<t?t:r,r},mv=B.div`
  display: flex;
`,hv=B.div``,gv=B.div`
  padding: 0;
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${({$maxWidth:e})=>e&&z`
      & > div {
        max-width: ${e};
      }
    `}
`,_v=B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,vv=B.div`
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({$legacyLayout:e,$paddingOverride:t,$maxWidth:n})=>e&&z`
    padding: ${t||`40px 20px`};

    @media ${Ol.medium} {
      padding: ${t||`40px`};
    }

    @media ${Ol.large} {
      max-width: ${n||`1200px`};
      padding: ${t||`70px 90px`};
    }
  `}
`,yv=B.div`
  opacity: 0;
  transition: opacity var(--speed-fast) var(--easing-primary-in-out);

  ${({$compact:e})=>e&&z`
    font-size:14px;
  `}
`,bv=B.div`
  background-color: var(--global-menu-icon-background-default);
  transition: background-color var(--speed-fast) var(--easing-primary-out);
    
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin: 0 20px;

  border-radius: 7px;
  display:flex;
  justify-content:center;
  align-items:center;

  svg {
    display: block;
  }
`,xv=B.div`
  width: 12px;
  height: 12px;
  flex: 0 0 14px;
  margin: 0 20px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  opacity: 0;
  transition: opacity 0 var(--easing-primary-out);

  svg {
    display: block;
    height: 12px;
    width: 12px;
  }
`,Sv=z`
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  outline: none;
  padding: 0;
  text-decoration: none;
  font-family: var(--font-ui);
  font-weight: 500;
  font-size: 16px;
  color: var(--grey-11);

  &:hover{
    color: var(--grey-12);
  }
`,Cv=B.a`
  display: flex;
  text-decoration: none;
`,wv=B.div`
  margin-left: 15px;
`,Tv=B.div`
  ${Sv}

  ${({$menuOpen:e})=>e&&z`
  ${yv}{
    opacity: 1;
  }
`}

  &:hover ${bv}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${q}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }
`,Ev=B(Jc)`
  ${Sv}

  ${({$menuOpen:e})=>e&&z`
    ${yv}{
      opacity: 1;
    }
  `}

  &:hover ${bv}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${q}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&z`
    color: var(--grey-12);

    ${bv},
    &:hover ${bv}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,Dv=B.button`
  ${Sv}

  ${({$menuOpen:e})=>e&&z`
    ${yv}{
      opacity: 1;
    }

    ${xv}{
      opacity: 1;
      transition: opacity var(--speed-normal) var(--easing-primary-in-out) var(--speed-fast);
    }
  `}

  &:hover ${bv}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${q}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&z`
    ${bv},
    &:hover ${bv}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,Ov=({hasSubmenu:e=!1,contextKey:t=-1,submenuOpen:n,menuOpen:r,title:i,href:a,icon:o,compact:s,isActive:c,isExternalLink:l,onClickCallback:u})=>{let d=(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(bv,{$compact:s,children:(0,K.jsx)(J,{icon:o,color:c?`inverse`:`dimmed`,size:20})}),(0,K.jsx)(yv,{$compact:s,children:i}),e?(0,K.jsx)(xv,{children:(0,K.jsx)(J,{icon:n?`Up`:`Down`,color:`dimmed`})}):null]});return e?(0,K.jsx)(Dv,{$menuOpen:r,$isActive:c,onClick:()=>u&&u(t),children:d}):l?(0,K.jsx)(Cv,{href:a,target:`_blank`,children:(0,K.jsxs)(Tv,{$menuOpen:r,children:[d,(0,K.jsx)(wv,{children:(0,K.jsx)(J,{icon:`ExternalLink`,color:`dimmed`,size:12})})]})}):(0,K.jsx)(Ev,{$menuOpen:r,to:a||`#`,$isActive:c,onClick:()=>u&&u(t),children:d})},kv=(e,t)=>{switch(t.type){case`SET_MENU`:{let n=localStorage.getItem(window.location.hostname+`_isMenuOpen`),r=n===`true`||n===null&&!!t.data.defaultMenuOpen,i=n===`true`&&!!t.data.canAlwaysPin,a=t.data.desktopSize===`xlarge`||!!t.data.canAlwaysPin;return t.data.desktopSize===`xxlarge`&&t.data.canAlwaysPin===!1&&(r=!0,i=!0),{...e,desktopSize:t.data.desktopSize,isMenuOpen:r,isMenuPinned:i,canPin:a}}case`SET_OPEN`:return e.isMenuOpen===!0||e.desktopSize===`xxlarge`&&!e.canPin?e:{...e,isMenuOpen:!0};case`SET_CLOSE`:return e.isMenuOpen===!1||e.desktopSize===`xxlarge`&&!e.canPin||e.isMenuPinned===!0?e:{...e,isMenuOpen:!1};case`TOGGLE_PIN`:{if(!e.canPin)return e;let t=!0;return e.isMenuPinned?(localStorage.setItem(window.location.hostname+`_isMenuOpen`,`false`),t=!1):localStorage.setItem(window.location.hostname+`_isMenuOpen`,`true`),{...e,isMenuOpen:t,isMenuPinned:!e.isMenuPinned}}default:return console.error(`Action ${t.type} not registered.`),e}},Av={desktopSize:`large`,isMenuPinned:!1,isMenuOpen:!1,canPin:!1},jv=(e,t)=>{let{activeScreen:n}=uf(),[r,i]=(0,_.useReducer)(kv,Av),a=(0,_.useCallback)((e,t,n)=>{i({type:`SET_MENU`,data:{defaultMenuOpen:e,desktopSize:n,canAlwaysPin:t}})},[]),o=(0,_.useCallback)(()=>{i({type:`SET_OPEN`})},[]),s=(0,_.useCallback)(()=>{i({type:`SET_CLOSE`})},[]),c=(0,_.useCallback)(()=>{i({type:`TOGGLE_PIN`})},[]);return(0,_.useLayoutEffect)(()=>{a(e,t,n)},[n,e,t,a]),{menuState:r,setMenuOpen:o,setMenuClose:s,togglePinned:c}},Mv=B.ul`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`,Nv=B.div`
  display: block;
  height: 40px;
  margin-left: 40px;
`,Pv=B.div`
  overflow: hidden;
`,Fv=B.span`
  display: block;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
`,Iv=B(Jc)`
  ${X};
  display: block;
`,Lv=B.div`
  margin-left: 15px;
`,Rv=B.a`
  ${X};
  display: flex;
  align-items: center;
`,zv=B.li`
  display: block;
  height: 30px;
  padding-left: 40px;
  position: relative;

  &::after {
    display: block;
    content: '';
    height: 1px;
    width: 14px;
    position: absolute;
    left: 0;
    top: 10px;
    background: var(--dividing-line);
  }

  ${Iv}, ${Rv}{
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    ${({$isActive:e})=>z`

      &:hover {
        color: var(--grey-12);
      }

      ${e&&z`
        &, &:hover {
          color: var(--grey-11);
          font-weight: 600;
        }
      `}

    `};

  }
`,Bv=B.div`
  position: relative;
  overflow: hidden;

  transition:
    grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
    opacity var(--speed-fast) var(--easing-primary-in-out);

  &::after {
    display: block;
    content: '';
    width: 1px;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 35px;
    background: var(--dividing-line);
  }

`,Vv=B.div`
  min-height: ${({$mobileMenu:e})=>e?`30px`:`70px`};
  width: inherit;

  ${Bv}{
    display: grid;
    grid-template-rows: 0fr;
  };

  ${({$open:e})=>e&&z`
    ${Bv}{
      grid-template-rows: 1fr;

      transition:
        grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
        opacity var(--speed-fast) var(--easing-primary-in-out);

      opacity: 1;
    }
  `};
`,Hv=({item:e,menuOpen:t,submenuOpen:n,contextKey:r,topLevelPath:i,mobileMenu:a=!1,onClickCallback:o})=>{let{icon:s,title:c,href:l,submenu:u,isExternalLink:d}=e,f=i===l,p=(0,_.useRef)(null),m=Uv(u,o)||[],h=m.length>0;return(0,K.jsxs)(Vv,{$open:n,$mobileMenu:a,children:[(0,K.jsx)(Ov,{title:c,href:l,isActive:f,icon:s,hasSubmenu:h,isExternalLink:d,submenuOpen:n,menuOpen:t,onClickCallback:o,contextKey:r}),h?(0,K.jsx)(Bv,{ref:p,children:(0,K.jsx)(Pv,{children:m})}):null]})},Uv=(e,t)=>{if(!e)return;let n=[],r=[];return n.push([]),e.forEach((e,r)=>{let{title:i,href:a,isExternalLink:o}=e;a?o?n[n.length-1].push((0,K.jsx)(zv,{$isActive:!1,children:(0,K.jsxs)(Rv,{href:a,target:`_blank`,children:[i,(0,K.jsx)(Lv,{children:(0,K.jsx)(J,{icon:`ExternalLink`,color:`dimmed`,size:10})})]})},r)):n[n.length-1].push((0,K.jsx)(zv,{$isActive:!1,children:(0,K.jsx)(Iv,{to:a,onClick:()=>t&&t(-1),children:i})},r)):(n[n.length-1].length>1&&n.push([]),n[n.length-1].push((0,K.jsx)(Nv,{children:(0,K.jsx)(Fv,{children:i})},r)))}),n.forEach((e,t)=>{r.push((0,K.jsx)(Mv,{children:e},t))}),r},Wv=B(Jc)`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`,Gv=B.div`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`,Kv=B.div`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`,qv=B.object``,Jv=B.object`
  max-width: 180px;
`,Yv=B.div``,Xv=B.div`
  background: var(--global-element-background);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`,Zv=B.div`
  min-height: 70px;
`,Qv=B.div`
  position: relative;
  height: 100%;
  ${({$isPinned:e})=>z`
    width: ${e?`var(--global-menu-width-open)`:`var(--global-menu-width-closed)`};
  `};
`,$v=B.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${({$open:e,$desktopSize:t})=>z`
    background-color: var(--global-element-background);
    box-shadow: 0px 0px 7px 0px var(--primary-a2);
    width: ${e?`var(--global-menu-width-open)`:`var(--global-menu-width-closed)`};
    border-right: 1px solid var(--dividing-line);

    ${t===`xxlarge`?``:z`
      transition: width var(--speed-normal) var(--easing-primary-in);
    `};

    ${Kv}{
      transition: opacity var(--speed-normal) var(--easing-primary-in-out);
      opacity: ${e?1:0};
    }
  `}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`,ey=B.div`
  width: var(--global-menu-width-open);
  display: flex;
  flex-direction: column;
  height: 100%;
`,ty=({content:e,home:t=`/`,logoMark:n,logoText:r,keepOpenText:i=`Keep Open`,autoHideText:a=`Auto-Hide`,supportUrl:o,supportText:s=`Help & Support`,defaultMenuOpen:c=!0,canAlwaysPin:l=!1,onMenuToggle:u=()=>{}})=>{let{menuState:d,setMenuOpen:f,setMenuClose:p,togglePinned:m}=jv(c,l),[h,g]=(0,_.useState)(0),v=ks(),y=(0,_.useCallback)(e=>{e.pointerType!==`touch`&&f()},[f]),b=(0,_.useCallback)(()=>{p()},[p]),x=(0,_.useCallback)(e=>{e.pointerType!==`touch`&&m()},[m]);(0,_.useEffect)(()=>{u(d.isMenuOpen)},[d.isMenuOpen,u]);let S=(0,_.useCallback)(e=>{e!==-1&&g(h===e?-1:e)},[g,h]);return(0,K.jsx)(Qv,{$isPinned:d.isMenuPinned,children:(0,K.jsx)(K.Fragment,{children:bl.createPortal((0,K.jsx)($v,{$open:d.isMenuOpen,$desktopSize:d.desktopSize,onPointerEnter:d.isMenuPinned?()=>{}:y,onTouchStart:()=>console.debug(`touch`),onMouseLeave:d.isMenuPinned?()=>{}:b,children:(0,K.jsxs)(ey,{children:[(0,K.jsxs)(Wv,{to:t,children:[(0,K.jsx)(Gv,{children:n?(0,K.jsx)(qv,{type:`image/svg+xml`,data:n}):(0,K.jsx)(nd,{})}),(0,K.jsx)(Kv,{children:r?(0,K.jsx)(Jv,{type:`image/svg+xml`,data:r}):(0,K.jsx)(rd,{})})]}),(0,K.jsx)(Yv,{children:e.items.map((e,t)=>(0,K.jsx)(Hv,{topLevelPath:yd(v.pathname),contextKey:t,menuOpen:d.isMenuOpen,submenuOpen:t===h&&d.isMenuOpen,onClickCallback:S,item:e,focusedContext:h},t))}),(0,K.jsxs)(Xv,{children:[o&&(0,K.jsx)(Zv,{children:(0,K.jsx)(Ov,{compact:!0,isActive:!1,icon:`Question`,title:s,href:o,menuOpen:d.isMenuOpen})}),d.canPin?(0,K.jsx)(Zv,{children:(0,K.jsx)(Ov,{compact:!0,isActive:!1,icon:d.isMenuOpen&&d.isMenuPinned?`Left`:`Menu`,title:d.isMenuPinned?i:a,onClickCallback:x,menuOpen:d.isMenuOpen})}):null]})]})}),document.body)})})},ny=B.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,ry=B.div`
  max-width: 130px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.76;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  font-family: var(--font-ui);
  margin-top: 2px;
`,iy=B.div`
  font-size: 10px;
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 0 5px 0;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
`,ay=B.div`
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0 8px 0;
  max-height: 23px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
  font-family: var(--font-data);
`,oy=B.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
`,sy=B.div`
  cursor: pointer;
`,cy=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ly=B.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${sy}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,uy=B.pre`
  padding: 5px;
  font-size: 10px;
  line-height: 1.2;
  box-shadow: 2px 2px 4px (195deg 16% 72% / 72%);
  border: 1px solid var(--grey-8);
  background-color: var(--grey-2);
  border-radius: 5px;
  opacity: 0.76;
  font-weight: 500;
  color: var(--grey-11);
  position: absolute;
  max-width: 170px;
  white-space: pre-wrap;
  font-family: var(--font-data);
  right:10px;
  margin-top: -23px;
`,dy=B.div`
`,fy=({item:e,onUserDrawerMetaClick:t,copySuccessMessage:n,includeCopyTitle:r})=>{let{icon:i,title:a,subTitle:o,notes:s,hasCopyIcon:c}=e,{copyToClipboard:l}=Jd(),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(`dimmed`),m=(0,_.useCallback)((e,t,n)=>{let i;i=r?(e||``)+`
`+(t||``)+`
`+(n||``):(t||``)+`
`+(n||``),l(i),d(!0),setTimeout(()=>{d(!1)},1500)},[r,l]),h=(0,_.useCallback)(()=>{p(`mono`)},[]),g=(0,_.useCallback)(()=>{p(`dimmed`)},[]);return(0,K.jsx)(_.Fragment,{children:a!==``&&(0,K.jsx)(sy,{onClick:t,children:(0,K.jsxs)(ny,{children:[(0,K.jsxs)(cy,{children:[(0,K.jsxs)(oy,{children:[(0,K.jsx)(J,{icon:i,size:10,color:`dimmed`}),(0,K.jsx)(ry,{title:a,children:a})]}),(0,K.jsxs)(dy,{children:[u&&(0,K.jsx)(uy,{children:n===``?`Copied!`:n}),c?(0,K.jsx)(ly,{onClick:()=>m(a,o,s),onMouseEnter:h,onMouseLeave:g,children:(0,K.jsx)(J,{icon:`Copy`,size:12,color:f})}):null]})]}),o===``?null:(0,K.jsx)(iy,{title:o,children:o}),s===``?null:(0,K.jsx)(ay,{title:s,children:s})]})})})},py=B.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
  align-items: center;
  cursor: pointer;
  svg {
    margin-top: 7px;
  }
`,my=B.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,hy=B.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,gy=B.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,_y=({icon:e=`Settings`,title:t,subTitle:n,onClickCallback:r=()=>{}})=>(0,K.jsxs)(py,{onClick:r,children:[(0,K.jsx)(J,{icon:e,size:18,color:`dimmed`}),(0,K.jsxs)(my,{children:[(0,K.jsx)(hy,{children:t}),(0,K.jsx)(gy,{children:n})]})]}),vy=B.div``,yy=B.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${Ol.medium} {
    position: static;
    bottom: 0;
  }
`,by=B.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,xy=B.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,Sy=B.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,Cy=B.div`
    padding: 0 20px;
`,wy=B.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,Ty=B.li`
  padding: 10px 0;
`,Ey=B.div`
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  padding-right: 20px;
`,Dy=B(Jc)`
  ${X};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&z`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,Oy=B.div`
  font-family: var(--font-ui);
  border-top: var(--dividing-line) 1px solid;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  color: var(--grey-a11);
  padding: 10px;
  padding-left: ${({$icon:e})=>e?`31px`:`21px`};
`,ky=B.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,Ay=B.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({$icon:e})=>e?`136px`:`164px`};
  color: var(--grey-11);
  opacity: 0.5;
`,jy=e=>{if(e)return document.documentElement.setAttribute(`lang`,e),e;let t=navigator.language.split(`-`)[0];return document.documentElement.lang||(document.documentElement.setAttribute(`lang`,t),t)},My=({hasLanguage:e=!1,selectedLanguageText:t=``,languageOptionsText:n=`LANGUAGE / 言語`,selectedLangAttribute:r,hasLogout:i=!0,logoutLink:a=`/logout`,logoutText:o=`Logout`,hasCurrentUser:s=!0,currentUserText:c=`Current User`,accountOptionText:l=`Account Options`,userSubmenu:u=[],userDrawerBespoke:d,loggedInUser:f,hasSwitchTheme:p=!1,isLightMode:m=!0,switchThemeText:h=`SWITCH THEME`,selectedThemeText:g=``,onLogout:v=()=>{},onLanguageToggle:y=()=>{},closeOnClick:b,onThemeToggle:x=()=>{},userDrawerFooter:S={icon:``,title:``},copySuccessMessage:C,includeCopyTitle:w,onUserDrawerMetaClick:T=()=>{},userDrawerMeta:E,hasUserDrawerMeta:D,hasUserDrawerFooter:O})=>{let{icon:k,title:A}=S,j=(0,_.useCallback)(async e=>{e.preventDefault(),await v(),window.location.assign(a),b&&b()},[b,a,v]),M=(0,_.useCallback)(()=>{b&&b()},[b]);return(0,_.useEffect)(()=>{jy(r)},[r]),(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(vy,{children:(0,K.jsxs)(K.Fragment,{children:[s?(0,K.jsxs)(xy,{children:[(0,K.jsx)(by,{children:c}),f]}):null,D?(0,K.jsx)(ky,{children:E?.map((e,t)=>(0,K.jsx)(fy,{onUserDrawerMetaClick:T,item:e,includeCopyTitle:w,copySuccessMessage:C},t))}):null,u.length>0?(0,K.jsxs)(Sy,{children:[(0,K.jsx)(by,{children:l}),(0,K.jsx)(wy,{children:u.map(({text:e,href:t},n)=>(0,K.jsx)(Ty,{children:(0,K.jsx)(Dy,{to:t,onClick:M,children:e})},n))})]}):null,d||null,i?(0,K.jsx)(Cy,{children:(0,K.jsx)(wy,{children:(0,K.jsx)(Ty,{children:(0,K.jsx)(Dy,{onClick:j,to:a,children:o})})})}):null]})}),(0,K.jsxs)(yy,{children:[p&&(0,K.jsx)(_y,{icon:m?`LightMode`:`DarkMode`,title:h,subTitle:g,onClickCallback:x}),e&&(0,K.jsx)(_y,{icon:`Language`,title:n,subTitle:t,onClickCallback:y}),O?(0,K.jsxs)(Oy,{title:A,$icon:k,children:[k?(0,K.jsx)(Ey,{children:(0,K.jsx)(J,{icon:k,size:14,color:`dimmed`})}):null,(0,K.jsx)(Ay,{$icon:k,children:A})]}):null]})]})},Ny=B.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,Py=B.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,Fy=B.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,Iy=B.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.$image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${e=>e.$image?`block`:`none`};
`,Ly=B.div`
  margin-left: 20px;
`,Ry=B.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,zy=B.div`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  color: var(--grey-11);
  margin: 4px 0;
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`,By=B.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,Vy=({imgUrl:e,title:t,message:n,time:r})=>(0,K.jsxs)(Ny,{children:[(0,K.jsx)(Py,{children:e?(0,K.jsx)(Iy,{$image:e}):(0,K.jsx)(Fy,{})}),(0,K.jsxs)(Ly,{children:[(0,K.jsx)(Ry,{children:t}),(0,K.jsx)(zy,{children:n}),(0,K.jsx)(By,{children:r})]})]}),Hy=B.div`
  display: flex;
  flex-direction: column;
`,Uy=B.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,Wy=B.div`
  border-bottom: var(--dividing-line) 1px solid;
`,Gy=(e,t)=>e.map((e,n)=>(0,K.jsx)(Wy,{children:(0,K.jsx)(Vy,{...e})},`alert-${t}-${n}`)),Ky=({read:e,unread:t,noNotificationsText:n=`No new notifications`,readNotificationsText:r=`New`,unreadNotificationsText:i=`Read`})=>e.length===0&&t.length===0?(0,K.jsx)(Hy,{children:(0,K.jsx)(Uy,{children:n})}):(0,K.jsxs)(Hy,{children:[t&&(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(Uy,{children:r}),Gy(t,`unread`)]}),e&&(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(Uy,{children:i}),Gy(e,`read`)]})]}),qy=z`
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  border-radius: 3px;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 85.714% */
  white-space: nowrap;

  transition: opacity var(--speed-fast) var(--easing-primary-out);

`,Jy=B.div`
  ${qy};

  ${({$themeColor:e})=>e?z`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:z`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,Yy=B.span`
  display: inline-block;
`,Xy=B.span``,Zy=z`
  ${qy};
  text-decoration: none;

  ${({$themeColor:e})=>e?z`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:z`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({$themeColor:e})=>e?z`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:z`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,Qy=B.div`
  a {
    ${Zy};
  }
`,$y=B.div`
  button {
    ${X};
    ${Zy};
  }
`,eb=B.div`
  ${({$ready:e,$minWidth:t})=>z`

    visibility: ${e?`visible`:`hidden`};
    opacity: ${e?`1`:`0`};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${Yy}, ${Xy}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${t}px;`};
    }
  `};
`,tb=({text:e,color:t,linkHref:n,linkTo:r,linkText:i,onClick:a})=>{let o=(0,_.useRef)(null),s=(0,_.useRef)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(0);(0,_.useEffect)(()=>{l(!1);let e=setTimeout(()=>{let e=o.current?.getBoundingClientRect().width??0,t=s.current?.getBoundingClientRect().width??0;p(Math.ceil(e>=t?e:t)),l(!0)},100);return()=>clearTimeout(e)},[e,i]);let m=(0,_.useMemo)(()=>(0,K.jsx)(Yy,{ref:o,children:e}),[e]),h=(0,_.useMemo)(()=>a||r||n?(0,K.jsx)(Xy,{ref:s,children:i||e}):null,[a,r,n,i,e]),g=(0,_.useMemo)(()=>c?(0,K.jsx)(_.Fragment,{children:u?h:m}):(0,K.jsxs)(_.Fragment,{children:[m,h]}),[c,u,m,h]);return(0,K.jsx)(eb,{$ready:c,$minWidth:f,onPointerEnter:()=>c&&d(!0),onPointerLeave:()=>c&&d(!1),children:(0,_.useMemo)(()=>a?(0,K.jsx)($y,{$themeColor:t,children:(0,K.jsx)(`button`,{onClick:a,type:`button`,children:g})}):r?(0,K.jsx)(Qy,{$themeColor:t,children:(0,K.jsx)(Jc,{to:r,children:g})}):n?(0,K.jsx)(Qy,{$themeColor:t,children:(0,K.jsx)(`a`,{href:n,children:g})}):(0,K.jsx)(Jy,{$themeColor:t,children:m}),[a,r,n,t,g,m])})},nb=B.div`
  z-index: 9;
  position: sticky;
  top: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  border-bottom: 1px solid var(--dividing-line);
  background: var(--grey-2);
  box-shadow: 5px 0px 10px 0px var(--primary-a2);
`,rb=B.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,ib=B.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,ab=B.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,ob=B.input`
  ${Rl};
  font-family: var(--font-data);
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--grey-10);
  font-size: 14px;

  &::placeholder {
    font-family: var(--font-data);
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    color: var(--grey-8);
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`,sb=B.div`
  height: inherit;
  display: flex;
  gap: 0;
`,cb=zn`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,lb=B.button.attrs({type:`button`})`
  position: relative;
  flex: 0 56px;
  width: 56px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 5px;
    background-color: transparent;
    border-radius: 2px 2px 0 0;
  }

  transition: background-color var(--speed-normal) var(--easing-primary-out);

  svg {
    transition: transform var(--speed-normal) var(--easing-primary-out);
  }

  &:hover {
    opacity: 0.9;
    &::after {
      background-color: var(--primary-6);
    }
  }

  ${({$isActive:e})=>e&&z`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${cb} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,ub=B.div``,db=B.div`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: 56px;
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;

  width: ${({$baseWidth:e})=>e||`200px`};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({$isOpen:e})=>e&&z`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,fb=B.div`
    overflow-y: scroll;
    margin-right: -17px;
`,pb=({hasNotifications:e=!1,hasLanguage:t=!1,selectedLanguageText:n=``,languageOptionsText:r,selectedLangAttribute:i,hasLogout:a=!0,logoutLink:o=`/logout`,logoutText:s=`Logout`,hasSearch:c=!1,hasCurrentUser:l=!0,currentUserText:u=`Current User`,accountOptionText:d=`Account Options`,searchPlaceholder:f=`Search for devices, analysis tasks, etc.`,userSubmenu:p=[],userDrawerBespoke:m,loggedInUser:h,notificationsHistory:g,customDrawer:v,hasSwitchTheme:y=!1,isLightMode:b=!0,switchThemeText:x=`SWITCH THEME`,selectedThemeText:S=``,onLogout:C=()=>{},onLanguageToggle:w=()=>{},onThemeToggle:T=()=>{},userDrawerFooter:E,userDrawerMeta:D,onUserDrawerMetaClick:O=()=>{},hasUserDrawerMeta:k,copySuccessMessage:A,includeCopyTitle:j,hasUserDrawerFooter:M,badge:ee})=>{let[N,te]=(0,_.useState)(null),P=e=>{te(t=>t===e?null:e)};return(0,K.jsx)(nb,{children:(0,K.jsxs)(K.Fragment,{children:[c?(0,K.jsxs)(ib,{children:[(0,K.jsx)(ab,{children:(0,K.jsx)(J,{icon:`Search`,size:16,color:`grey-6`})}),(0,K.jsx)(ob,{placeholder:f})]}):(0,K.jsx)(`div`,{}),(0,K.jsxs)(rb,{children:[ee&&(0,K.jsx)(tb,{...ee}),(0,K.jsxs)(sb,{children:[v&&(0,K.jsx)(lb,{$isActive:N===`custom`,onClick:()=>P(`custom`),children:(0,K.jsx)(fh,{...v})}),e&&(0,K.jsx)(lb,{$isActive:N===`notifications`,onClick:()=>P(`notifications`),children:(0,K.jsx)(J,{icon:`Notifications`,size:20,color:`dimmed`})}),(0,K.jsx)(lb,{$isActive:N===`user`,onClick:()=>P(`user`),children:(0,K.jsx)(J,{icon:`UserProfile`,size:20,color:`dimmed`})})]})]}),bl.createPortal((0,K.jsxs)(ub,{children:[(0,K.jsx)(db,{$isOpen:N===`user`,children:(0,K.jsx)(My,{hasLanguage:t,hasLogout:a,logoutLink:o,logoutText:s,hasCurrentUser:l,currentUserText:u,accountOptionText:d,userSubmenu:p,userDrawerBespoke:m,loggedInUser:h,onLogout:C,onLanguageToggle:w,selectedLanguageText:n,languageOptionsText:r,selectedLangAttribute:i,hasSwitchTheme:y,isLightMode:b,switchThemeText:x,selectedThemeText:S,onThemeToggle:T,onUserDrawerMetaClick:O,userDrawerFooter:E,userDrawerMeta:D,hasUserDrawerMeta:k,copySuccessMessage:A,includeCopyTitle:j,hasUserDrawerFooter:M})}),e?(0,K.jsx)(db,{$isOpen:N===`notifications`,$baseWidth:`300px`,children:(0,K.jsx)(fb,{children:g?(0,K.jsx)(Ky,{...g}):null})}):null,v&&(0,K.jsx)(db,{$isOpen:N===`custom`,$baseWidth:v.width?v.width:`200px`,children:(0,K.jsx)(K.Fragment,{children:v.customComponent})})]}),document.body)]})})},mb=B.div`
  display: flex;
  flex-direction: row;
`,hb=({children:e,defaultTabId:t})=>{let{setSelected:n}=(0,_.useContext)(H_);return(0,_.useEffect)(()=>{n(t)},[t,n]),(0,K.jsx)(mb,{children:(0,K.jsx)(K.Fragment,{children:e})})},gb=B.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`,_b=B.label`
  height: 40px;
  ${({theme:e})=>z`
    font-family: ${e.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({$active:e})=>e?`600`:`500`};
  letter-spacing: 0.09px;
  color: ${({$active:e})=>e?`var(--primary-11)`:`var(--grey-11)`};
  cursor: pointer;
  border-bottom: ${({$active:e})=>e?`2px solid var(--primary-11)`:`2px solid transparent`};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
  user-select: none;
`,vb=({children:e,tabFor:t,onClick:n,...r})=>{let{selected:i,setSelected:a}=(0,_.useContext)(H_),o=(0,_.useCallback)(e=>{n&&n(e),a(t)},[n,a,t]);return(0,K.jsx)(gb,{...r,onClick:o,children:(0,K.jsx)(_b,{$active:i===t,children:(0,K.jsx)(K.Fragment,{children:e})})})},yb=B.div`
`,bb=({children:e,tabId:t,...n})=>{let{selected:r}=(0,_.useContext)(H_);return r===t?(0,K.jsx)(yb,{...n,children:(0,K.jsx)(K.Fragment,{children:e})}):null},xb=B.button`
  ${X}
  flex-basis: auto;
  flex-grow: 1;
`,Sb=B.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({theme:e})=>z`
    transition: border var(--speed-normal) var(--easing-primary-in-out);
    border-bottom: 5px solid ${e.colors.menu.indicator};

    ${q} {
      [stroke]{
        stroke: var(--dimmed);
      }
    }

    &:hover {
      border-bottom-color: ${e.colors.menu.hover};
      ${q} {
        [stroke]{
          stroke: ${e.colors.menu.hover};
        }
      }
    }
  `};

  ${({$isActive:e,theme:t})=>e&&z`
    &, &:hover {
      border-bottom-color: ${t.colors.menu.active};
      ${q} {
        [stroke]{
          stroke: ${t.colors.menu.active};
        }
      }
    }
  `}
`,Cb=({tabFor:e,icon:t,closeId:n,counter:r,status:i,customComponent:a,...o})=>{let{selected:s,setSelected:c}=(0,_.useContext)(H_),l=(0,_.useCallback)(e=>{c(s===e?n:e)},[n,s,c]);return(0,K.jsx)(xb,{...o,onClick:()=>l(e),children:(0,K.jsx)(Sb,{$isActive:s===e,children:(0,K.jsx)(fh,{icon:t,status:i,counter:r})})})};B.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${({$active:e})=>e?z`
    border-bottom: 3px solid var(--primary-11);
    `:z`
    border-bottom: 3px solid transparent;
  `};
  ${q} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`,B.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({$active:e})=>e?`var(--primary-11)`:`var(--grey-11)`};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`,B.div`
  font-size: 12px;
  font-family: ${({theme:e})=>e.fontFamily.data};
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  color: var(--grey-a10);
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`,B.div`
  margin-left: 12px;
  margin-right: 20px;
`,B.div``,B.div`
  padding-top: 10px;
  padding-left: ${({$paddingLeft:e})=>e||`87px`};
  box-shadow: 0 -5px 5px 0 var(--black-a1);
  border-bottom: 1px solid var(--grey-6);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;var wb=B.button`
  ${X}
  
  font-family: var(--font-ui);
  background-color: var(--global-element-background);
  border-top: 1px solid var(--dividing-line);
  font-weight: 400;
  color: var(--grey-10);
  
  height: ${50}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`,Tb=B.div`
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 20px;

  svg {
    display:block;
  }
`,Eb=B.div`
  text-transform: uppercase;
`,Db=({closeId:e,closeText:t=`CLOSE MENU`,children:n,formAction:r,...i})=>{let{setSelected:a}=(0,_.useContext)(H_);return(0,K.jsxs)(wb,{onClick:()=>a(e),...i,children:[(0,K.jsx)(Tb,{children:(0,K.jsx)(J,{icon:`CloseCompact`,color:`dimmed`,size:16})}),(0,K.jsx)(Eb,{children:t})]})},Ob=B.div`
  position: relative;
  min-height: calc(100vh - ${118}px);
  width: 100%;
  overflow-y: scroll;
`,kb=B.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,Ab=({closeId:e,children:t})=>{let{selected:n}=(0,_.useContext)(H_);return n===e?null:(0,K.jsx)(Ob,{children:(0,K.jsx)(kb,{children:(0,K.jsx)(K.Fragment,{children:t})})})},jb=B.div``,Mb=B.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--dividing-line);
`,Nb=({content:e,supportUrl:t,supportText:n=`Help & Support`,closeId:r})=>{let[i,a]=(0,_.useState)(0),o=ks(),{setSelected:s}=(0,_.useContext)(H_),c=(0,_.useCallback)(t=>{(t===-1||!e.items[t].submenu)&&s(r),t!==-1&&a(i===t?-1:t)},[r,e.items,i,s]),l=(0,_.useCallback)(()=>{s(r)},[r,s]);return(0,K.jsxs)(jb,{children:[e.items.map((e,t)=>(0,K.jsx)(Mb,{"data-key":t,children:(0,K.jsx)(Hv,{mobileMenu:!0,topLevelPath:yd(o.pathname),contextKey:t,menuOpen:!0,submenuOpen:t===i,onClickCallback:c,item:e,focusedContext:i})},t)),t&&(0,K.jsx)(Mb,{children:(0,K.jsx)(Ov,{compact:!0,isActive:!1,icon:`Question`,title:n,href:t,menuOpen:!0,onClickCallback:l})})]})},Pb=B(Jc)`
  ${X};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`,Fb=B.div`
  margin-right: 15px;
`,Ib=B.object``,Lb=({home:e=`/`,logoMark:t,closeId:n})=>{let{setSelected:r}=(0,_.useContext)(H_);return(0,K.jsx)(Pb,{to:e,onClick:()=>r(n),children:(0,K.jsx)(Fb,{children:t?(0,K.jsx)(Ib,{type:`image/svg+xml`,data:t}):(0,K.jsx)(nd,{})})})},Rb=B.div`
  background: var(--global-element-background);

  z-index: 100;
  display: flex;
  flex-direction: column;
`,zb=({closeId:e,hasLanguage:t,hasLogout:n,logoutLink:r,hasCurrentUser:i,userSubmenu:a,userDrawerBespoke:o,loggedInUser:s,onLogout:c,onLanguageToggle:l,...u})=>{let{setSelected:d}=(0,_.useContext)(H_),f=(0,_.useCallback)(()=>{d(e)},[e,d]);return(0,K.jsx)(Rb,{children:(0,K.jsx)(My,{hasLanguage:t,hasLogout:n,logoutLink:r,hasCurrentUser:i,userSubmenu:a,userDrawerBespoke:o,loggedInUser:s,onLogout:c,onLanguageToggle:l,...u,closeOnClick:f})})},Bb=`closeMenu`,Vb=`notifications`,Hb=`user`,Ub=`menu`,Wb=`custom`,Gb=B.nav`
  background-color: var(--global-element-background);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`,Kb=B.div`
  display: flex;
  flex-direction: row;
  height: ${68}px;
  border-bottom: var(--dividing-line) 1px solid;

  ${mb} {
    flex-basis: 0;
    flex-grow: 3;
  }
`,qb=({content:e,home:t,logoMark:n,supportUrl:r,defaultMenuOpen:i=!0,closeText:a,hasLanguage:o,hasLogout:s,logoutLink:c,hasCurrentUser:l,hasNotifications:u,userSubmenu:d,userDrawerBespoke:f,loggedInUser:p,notificationsHistory:m,customDrawer:h,supportText:g,onLogout:_,onLanguageToggle:v,...y})=>(0,K.jsx)(Gb,{children:(0,K.jsxs)(U_,{children:[(0,K.jsxs)(Kb,{children:[(0,K.jsx)(Lb,{home:t,logoMark:n,closeId:Bb}),(0,K.jsxs)(hb,{defaultTabId:Bb,children:[h&&(0,K.jsx)(Cb,{...h,tabFor:Wb,closeId:Bb}),u?(0,K.jsx)(Cb,{tabFor:Vb,icon:`Notifications`,closeId:Bb}):null,(0,K.jsx)(Cb,{tabFor:Hb,icon:`UserProfile`,closeId:Bb}),(0,K.jsx)(Cb,{tabFor:Ub,icon:`Menu`,closeId:Bb})]})]}),(0,K.jsxs)(Ab,{closeId:Bb,children:[(0,K.jsx)(bb,{tabId:Wb,children:h&&h.customComponent}),(0,K.jsx)(bb,{tabId:Vb,children:m&&u?(0,K.jsx)(Ky,{...m}):null}),(0,K.jsx)(bb,{tabId:Hb,children:(0,K.jsx)(zb,{hasLanguage:o,hasLogout:s,logoutLink:c,hasCurrentUser:l,userSubmenu:d,userDrawerBespoke:f,loggedInUser:p,onLogout:_,onLanguageToggle:v,...y,closeId:Bb})}),(0,K.jsx)(bb,{tabId:Ub,children:(0,K.jsx)(Nb,{content:e,supportUrl:r,supportText:g,defaultMenuOpen:i,closeId:Bb})}),(0,K.jsx)(Db,{closeText:a,closeId:Bb})]})]})}),Jb=({content:e,home:t,openWidth:n,logoMark:r,logoText:i,supportUrl:a,defaultMenuOpen:o,canAlwaysPin:s,paddingOverride:c,maxWidth:l,legacyLayout:u,children:d,keepOpenText:f,autoHideText:p,supportText:m,onMenuToggle:h,...g})=>{let{isLarge:_}=uf();return _?(0,K.jsxs)(mv,{children:[(0,K.jsx)(ty,{content:e,home:t,openWidth:n,logoMark:r,logoText:i,supportUrl:a,defaultMenuOpen:o,canAlwaysPin:s,onMenuToggle:h,keepOpenText:f,autoHideText:p,supportText:m}),(0,K.jsxs)(_v,{children:[(0,K.jsx)(pb,{...g}),(0,K.jsx)(vv,{$maxWidth:l,$paddingOverride:c,$legacyLayout:u,children:(0,K.jsx)(K.Fragment,{children:d})})]})]}):(0,K.jsxs)(hv,{children:[(0,K.jsx)(qb,{content:e,home:t,logoMark:r,supportUrl:a,defaultMenuOpen:o,supportText:m,...g}),(0,K.jsx)(vv,{children:(0,K.jsx)(K.Fragment,{children:d})})]})},Yb=B.div`
  width: 286px;
  border-right: 1px solid var(--grey-a7);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,Xb=B.div`
  height: 84px;
  color: var(--grey-11);
  border-bottom: 1px solid var(--grey-a7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`,Zb=B.div`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`,Qb=B.div`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`,$b=B.div`
  position: relative;
  border-bottom: 1px solid var(--grey-a7);
  padding: 22px 20px 21px 20px;
`;B.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
  margin-bottom: 18px;
`,B.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`,B(Jc)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`,B(Jc)`
  position: absolute;
  right: 30px;
  top: 15px;
  /* width: 80px; */
  /* height: 30px; */
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: var(--grey-9);
  border-radius: 3px;
  background-color: var(--primary-2);
  text-decoration: none;
  padding: 7px 20px;
`;var ex=({logoTextTop:e,logoTextBottom:t})=>(0,K.jsxs)(Xb,{children:[(0,K.jsx)(Zb,{children:e}),(0,K.jsxs)(Qb,{children:[`•`,t,`•`]})]}),tx=({children:e,...t})=>(0,K.jsx)(Yb,{...t,children:(0,K.jsx)(K.Fragment,{children:e})}),nx=B.div`
  display: inline-block;
  padding: 0 4px;
  margin-top: 12px;
  border-radius: 3px;
  font-family: "Courier", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: var(--white);
  background: var(--primary-a9);
  border: 1px solid var(--primary-10);
  font-weight: 400;
`,rx=B.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
  z-index: 100;
  
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0px;

  background-color: var(--grey-3);
  border-color: 1px solid var(--grey-a6);
  padding: 4px 4px;
  border-radius: 4px;
  
  ${nx}{
    margin: 0;
  }
`,ix=B.div`
  flex: 1;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 4px;

  a {
    text-decoration: none;
    height: 16px;
    width: 16px;
    line-height: 16px;
    border-radius: 3px;
    color: var(--grey-10);
    svg {
      path {
        stroke: var(--grey-10);
      }
    }

    &:hover {
      svg {
        path {
          stroke: var(--primary-9);
        }
      }
    }
  }
`,ax=({children:e})=>(0,K.jsxs)(rx,{children:[(0,K.jsx)(ix,{children:(0,K.jsx)(Jc,{to:`/`,children:(0,K.jsx)(J,{size:12,icon:`Home`})})}),(0,K.jsx)(nx,{children:e})]}),ox=B.div`
    margin: 100px 200px;
`,sx=()=>(0,K.jsxs)(ox,{children:[(0,K.jsx)(ax,{children:`FormPage.tsx`}),(0,K.jsx)(Ig,{title:`Input State Examples`,areaTitle:`Forms`,areaHref:`/`}),(0,K.jsxs)(Bd,{children:[(0,K.jsx)(kd,{name:`my_field`,label:`Basic`,placeholder:`Placeholder...`,fieldState:`default`,showFeedback:!0}),(0,K.jsx)(kd,{name:`my_field`,label:`Required`,placeholder:``,fieldState:`required`,showFeedback:!0}),(0,K.jsx)(kd,{name:`my_field`,label:`Loading`,placeholder:``,fieldState:`processing`,showFeedback:!0}),(0,K.jsx)(kd,{name:`my_field`,label:`Valid`,placeholder:``,fieldState:`valid`,showFeedback:!0}),(0,K.jsx)(kd,{name:`my_field`,label:`Error`,placeholder:``,fieldState:`invalid`,showFeedback:!0}),(0,K.jsx)(kd,{name:`my_field`,label:`Error`,placeholder:``,fieldState:`invalid`,showFeedback:!0,feedbackMessage:`Error: Oh noes!!!`}),(0,K.jsx)(Od,{name:`my_field`,label:`My Field`,placeholder:``,fieldState:`default`,showFeedback:!0})]})]}),cx=`/scorer-ui-kit/pr/616/`,lx=()=>{let[e,t]=(0,_.useReducer)(ug,[]),[n]=(0,_.useState)(``),[r,i]=(0,_.useState)({showSetIndex:!0,pointIndexOffset:1,showPointHandle:!0,showPointLabel:!0,showLabelShadow:!0,setIndexOffset:1,showMoveHandle:!0,fixedImgDimensions:{x:2310,y:1535},boundaryOffset:0,showDirectionMark:!0,areaFillColor:``,areaTransparencyLevel:0}),a=(0,_.useCallback)(async()=>{t({type:`LOAD`,state:[{name:`Line 1`,points:[{x:600,y:200},{x:1100,y:450}],readOnly:!1,styling:`primary`}]})},[]),o=(0,_.useCallback)(async()=>{t({type:`LOAD`,state:[{name:`UP`,points:[{x:1048,y:456},{x:1613,y:584},{x:1322,y:985},{x:922,y:785}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:`primary`,areaFillColor:`#0B0B0B`,areaTransparencyLevel:40},{name:`DOWN`,points:[{x:841,y:700},{x:256,y:576}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:`primary`}]})},[]),s=(0,_.useCallback)(({target:{value:e}})=>{t({type:`RENAME_SET`,index:0,data:{name:e}})},[]),c=(0,_.useCallback)((e,{target:{value:n}})=>{t({type:`RENAME_SET`,index:e,data:{name:n}})},[]),l=(0,_.useCallback)((e,{target:{value:n}})=>{t({type:`UPDATE_FILL_COLOR`,index:e,data:{areaFillColor:n}})},[]),u=(0,_.useCallback)((e,{target:{value:n}})=>{t({type:`UPDATE_TRANSPARENCY_LEVEL`,index:e,data:{areaTransparencyLevel:parseInt(n)}})},[]),d=(0,_.useCallback)((n=0)=>()=>{t({type:`UPDATE_SET_OPTIONS`,index:n,data:{readOnly:!e[0]?.readOnly}})},[e]),f=(0,_.useCallback)(n=>{t({type:`UPDATE_SET_OPTIONS`,index:e.findIndex(e=>e.showPointHandle),data:{showPointHandle:!1,showMoveHandle:!1}}),t({type:`UPDATE_SET_OPTIONS`,index:n,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]),p=(0,_.useCallback)(e=>()=>{i({...r,[e]:!r[e]})},[r]);(0,_.useEffect)(()=>{r.showDirectionMark?o():a()},[a,o,r]);let m=(0,_.useCallback)(({target:{value:e}})=>{i({...r,boundaryOffset:parseInt(e)})},[r]);return(0,K.jsxs)(mv,{children:[(0,K.jsx)(ax,{children:`LinePage.tsx`}),(0,K.jsxs)(tx,{children:[(0,K.jsx)(ex,{logoTextTop:`SCORER`,logoTextBottom:`UI Kit`}),(0,K.jsx)($b,{style:{flex:`1`},children:(0,K.jsx)(`pre`,{children:JSON.stringify(e,null,2)})}),(0,K.jsxs)($b,{children:[(0,K.jsx)(Hu,{labelText:`Show Point Handle`,htmlFor:`showPointHandle`,children:(0,K.jsx)(`input`,{id:`showPointHandle`,type:`checkbox`,name:`showPointHandle`,checked:r.showPointHandle,onChange:p(`showPointHandle`)})}),(0,K.jsx)(Hu,{labelText:`Show Move Handle`,htmlFor:`showMoveHandle`,children:(0,K.jsx)(`input`,{id:`showMoveHandle`,type:`checkbox`,name:`showMoveHandle`,checked:r.showMoveHandle,onChange:p(`showMoveHandle`)})}),(0,K.jsx)(Hu,{labelText:`Show Point`,htmlFor:`showPoint`,children:(0,K.jsx)(`input`,{id:`showPoint`,type:`checkbox`,name:`showPoint`,checked:r.showPoint,onChange:p(`showPoint`)})}),(0,K.jsx)(Hu,{labelText:`Show Direction Mark`,htmlFor:`showDirectionMark`,children:(0,K.jsx)(`input`,{id:`showDirectionMark`,type:`checkbox`,name:`showDirectionMark`,checked:r.showDirectionMark,onChange:p(`showDirectionMark`)})}),(0,K.jsx)(Hu,{labelText:`Show Label Shadow`,htmlFor:`showLabelShadow`,children:(0,K.jsx)(`input`,{id:`showLabelShadow`,type:`checkbox`,name:`showLabelShadow`,checked:r.showLabelShadow,onChange:p(`showLabelShadow`)})})]}),(0,K.jsxs)($b,{children:[r.showDirectionMark?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(kd,{id:`renameLine1`,label:`Rename UP Line`,fieldState:`default`,name:`renameLine1`,value:e[0]?.name||``,onChange:e=>c(0,e)}),(0,K.jsx)(kd,{id:`renameLine2`,label:`Rename DOWN Line`,fieldState:`default`,name:`renameLine2`,value:e[1]?.name||``,onChange:e=>c(1,e)})]}):(0,K.jsx)(kd,{id:`rename`,label:`Rename Line`,fieldState:`default`,name:`rename`,value:e[0]?.name||``,onChange:s}),(0,K.jsx)(Hu,{labelText:`Boundary Offset`,htmlFor:`boundaryOffset`,children:(0,K.jsx)(zu,{id:`boundaryOffset`,type:`number`,name:`boundaryOffset`,min:0,value:r.boundaryOffset,onChange:m})}),(0,K.jsx)(kd,{id:`fillColor`,label:`Area Fill Color`,fieldState:`default`,name:`fillColor`,value:e[0]?.areaFillColor||``,onChange:e=>l(0,e)}),(0,K.jsx)(kd,{id:`transparencyLevel`,label:`Area Tranparency Level`,fieldState:`default`,name:`transparencyLevel`,value:e[0]?.areaTransparencyLevel||``,onChange:e=>u(0,e)})]}),(0,K.jsx)($b,{children:(0,K.jsx)(su,{design:`secondary`,onClick:d(),children:`Toggle Read Only`})})]}),(0,K.jsxs)(gv,{$padBottom:!1,children:[n&&(0,K.jsx)(`div`,{children:n}),(0,K.jsx)(zh.Provider,{value:{state:e,dispatch:t},children:(0,K.jsx)(Yh,{options:r,onLineClick:f,src:`${cx}images/line-ui-railyard.jpg`})})]})]})},ux=B.div`
  margin-bottom: 15px;
`,dx=B.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,fx=()=>{let[e,t]=(0,_.useReducer)(ug,[]),[n]=(0,_.useState)(``),[r,i]=(0,_.useState)(`localhost/wsapp`),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(400),[p,m]=(0,_.useState)(!1),{createMediaModal:h}=yf(),[g,v]=(0,_.useState)({loop:!0,autoPlay:!0}),y={showSetIndex:!0,showLabelShadow:!0,setIndexOffset:1,showDirectionMark:s},b=(0,_.useCallback)(async()=>{t({type:`LOAD`,state:[{name:`Line 1`,points:[{x:1407,y:869},{x:2293,y:531}],showPointHandle:!0,showMoveHandle:!0,readOnly:!1,styling:`primary`},{name:`Line 2`,points:[{x:1426,y:254},{x:2260,y:283}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:`secondary`},{name:`Yikes!`,points:[{x:500,y:500},{x:1e3,y:1e3}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:`danger`},{name:`Shape 1`,areaName:`Traffic Area`,points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:`secondary`,areaFillColor:`#0B0B0B`,areaTransparencyLevel:40}]})},[]),x=(0,_.useCallback)(async()=>{},[]);(0,_.useEffect)(()=>{b()},[b]);let S=(0,_.useCallback)(()=>{r&&o(r)},[r]),C=(0,_.useCallback)(e=>{c(e)},[]),w=(0,_.useCallback)(e=>{m(e)},[]),T=(0,_.useCallback)(()=>{v({loop:!0,autoPlay:!0})},[]),E=(0,_.useCallback)(()=>{v({loop:!1,autoPlay:!1,muted:!0}),h({mediaType:`video`,src:`ws://${a}/`,dismissCallback:T})},[h,T,a]),D=(0,_.useCallback)(n=>{t({type:`UPDATE_SET_OPTIONS`,index:e.findIndex(e=>e.showPointHandle),data:{showPointHandle:!1,showMoveHandle:!1}}),t({type:`UPDATE_SET_OPTIONS`,index:n,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return(0,K.jsxs)(mv,{children:[(0,K.jsx)(ax,{children:`LineRTCPage.tsx`}),(0,K.jsxs)(tx,{children:[(0,K.jsx)(ex,{logoTextTop:`SCORER`,logoTextBottom:`UI Kit`}),(0,K.jsx)($b,{style:{flex:`1`},children:(0,K.jsx)(`pre`,{children:JSON.stringify(e,null,2)})}),(0,K.jsxs)($b,{children:[(0,K.jsx)(ux,{children:(0,K.jsx)(ed,{checked:s,labelText:`Show Direction Mark`,leftTheme:`off`,onChangeCallback:C,rightTheme:`on`,state:`default`})}),(0,K.jsx)(ux,{children:(0,K.jsx)(ed,{checked:p,labelText:`Show Label Shadow`,leftTheme:`off`,onChangeCallback:w,rightTheme:`on`,state:`default`})}),(0,K.jsx)(su,{design:`secondary`,onClick:b,children:`Cancel`}),(0,K.jsx)(su,{style:{marginLeft:`10px`},onClick:x,children:`Save`})]})]}),(0,K.jsxs)(gv,{children:[n&&(0,K.jsx)(Wl,{message:n,type:`error`}),(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,marginBottom:`10px`},children:[(0,K.jsxs)(su,{design:`secondary`,onClick:()=>u(e=>!e),children:[l?`Hide`:`Show`,` Scroll Spacer`]}),l&&(0,K.jsx)(`input`,{type:`range`,min:100,max:2e3,step:50,value:d,onChange:e=>f(Number(e.target.value)),style:{width:`200px`}}),l&&(0,K.jsxs)(`span`,{style:{color:`#888`},children:[d,`px`]})]}),l&&(0,K.jsx)(`div`,{style:{height:`${d}px`,background:`repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`},children:(0,K.jsx)(`p`,{style:{padding:`20px`,color:`#888`},children:`TEMP: Scroll test spacer`})}),(0,K.jsx)(kd,{label:`Host`,name:`host`,fieldState:`default`,value:r,onChange:({target:{value:e}})=>i(e)}),(0,K.jsx)(su,{onClick:S,children:`Connect`}),a&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(zh.Provider,{value:{state:e,dispatch:t},children:(0,K.jsx)(cg,{ws:`ws://${a}/`,videoOptions:g,options:y,onLineClick:D})}),(0,K.jsx)(dx,{children:(0,K.jsx)(su,{onClick:E,children:`Open Video Modal`})})]})]})]})},px=B(Su)`
  width: 100%;
  margin-bottom: 15px;
`,mx=B.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,hx=()=>{let[e,t]=(0,_.useReducer)(ug,[]),[n]=(0,_.useState)(``),{createMediaModal:r}=yf(),[i,a]=(0,_.useState)({showSetIndex:!0,pointIndexOffset:1,showPointLabel:!0,setIndexOffset:1,showDirectionMark:!1,showLabelShadow:!1}),[o,s]=(0,_.useState)({loop:!0,autoPlay:!0}),c=(0,_.useCallback)(async()=>{t({type:`LOAD`,state:[{name:`Line 1`,points:[{x:968,y:1297},{x:1849,y:1393}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:`primary`},{name:`Line 2`,points:[{x:568,y:1097},{x:1649,y:1193}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:`primary`},{name:`Shape 1`,areaName:`Traffic Area`,points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:`secondary`,areaFillColor:`#0B0B0B`,areaTransparencyLevel:40}]})},[]),l=(0,_.useCallback)(()=>{t({type:`ADD_SET`,data:{points:[{x:0,y:0},{x:500,y:0},{x:500,y:500},{x:0,y:500}]}})},[]),u=(0,_.useCallback)((e=0)=>{t({type:`REMOVE_SET`,index:e})},[]),d=(0,_.useCallback)((e=0)=>{t({type:`REMOVE_POINT`,index:e})},[]),f=(0,_.useCallback)((e=0)=>{t({type:`ADD_POINT`,index:e})},[]);(0,_.useEffect)(()=>{c()},[c]);let p=(0,_.useCallback)(e=>{a(t=>({...t,showDirectionMark:e}))},[]),m=(0,_.useCallback)(e=>{a(t=>({...t,showLabelShadow:e}))},[]),h=(0,_.useCallback)(()=>{s({loop:!0,autoPlay:!0})},[]),g=(0,_.useCallback)(()=>{s({loop:!1,autoPlay:!1,muted:!0}),r({mediaType:`video`,src:`${cx}traffic.mp4`,dismissCallback:h})},[r,h]),v=(0,_.useCallback)(n=>{t({type:`UPDATE_SET_OPTIONS`,index:e.findIndex(e=>e.showPointHandle),data:{showPointHandle:!1,showMoveHandle:!1}}),t({type:`UPDATE_SET_OPTIONS`,index:n,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return(0,K.jsxs)(mv,{children:[(0,K.jsx)(ax,{children:`LineVideoPage.tsx`}),(0,K.jsxs)(tx,{children:[(0,K.jsx)(ex,{logoTextTop:`SCORER`,logoTextBottom:`UI Kit`}),(0,K.jsxs)($b,{children:[(0,K.jsx)(px,{icon:`Add`,design:`primary`,onClick:l,children:`Add Shape`}),(0,K.jsx)(px,{icon:`Add`,design:`primary`,onClick:()=>f(e.length-1),children:`Add Point`}),(0,K.jsx)(px,{icon:`Delete`,design:`warning`,onClick:()=>d(e.length-1),children:`Remove Point`}),(0,K.jsx)(px,{icon:`Delete`,design:`warning`,onClick:()=>u(e.length-1),children:`Remove Shape`}),(0,K.jsx)(ed,{checked:i.showDirectionMark,labelText:`Show Direction Mark`,leftTheme:`off`,onChangeCallback:p,rightTheme:`on`,state:`default`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(ed,{checked:i.showLabelShadow,labelText:`Show Label Shadow`,leftTheme:`off`,onChangeCallback:m,rightTheme:`on`,state:`default`})]}),(0,K.jsx)($b,{style:{flex:`1`},children:(0,K.jsx)(`pre`,{children:JSON.stringify(e,null,2)})})]}),(0,K.jsxs)(gv,{$padBottom:!1,children:[n&&(0,K.jsx)(`div`,{children:n}),(0,K.jsx)(zh.Provider,{value:{state:e,dispatch:t},children:(0,K.jsx)(eg,{options:i,onLineClick:v,videoOptions:o,src:`${cx}traffic.mp4`})}),(0,K.jsx)(mx,{children:(0,K.jsx)(su,{onClick:g,children:`Open Video Modal`})})]})]})},gx=B.div`
  margin: 0 auto;
  padding: 100px 100px;
  max-width: 1024px;
  box-sizing: content-box;
`,_x=B.section`
  display: block;
  margin-bottom: 64px;
`,vx=B.h1`
  font-family: var(--font-ui);
  font-weight: 200;
  color: var(--grey-10);
  padding: 0;
  margin: 0 0 36px;
`,yx=B.h2`
  font-family: var(--font-ui);
  font-weight: 300;
  color: var(--grey-12);
`,bx=B.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
`,xx=B.div`
  height: 100%;

  a {
    height: 100%;
    line-height: 20px;
    padding: 20px;
    background: var(--grey-1);
    display: block;
    text-decoration: none;
    border-radius: 3px;
    box-shadow: 0 4px 8px var(--black-a6);
    border: 1px solid var(--grey-4);

    &:hover {
      background: var(--grey2);
      border: 1px solid var(--primary-8);
    }
  }
`,Sx=B.div`
  display: block;
  font-family: var(--font-ui);
  letter-spacing: 0.4px;
  font-size: 14px;
  color: var(--grey-12);
  font-weight: 500;
`,Cx=B.div`
  font-family: var(--font-data);
  font-weight: 300;
  font-size: 14px;
  color: var(--grey-11);
`,wx=()=>(0,K.jsxs)(gx,{children:[(0,K.jsx)(vx,{children:`SCORER UI Kit`}),window.location.hostname===`localhost`?null:(0,K.jsxs)(_x,{children:[(0,K.jsx)(yx,{children:`Key Resources`}),(0,K.jsx)(bx,{children:(0,K.jsx)(xx,{children:(0,K.jsxs)(`a`,{href:`${cx}storybook`,children:[(0,K.jsx)(Sx,{children:`Storybook`}),(0,K.jsx)(Cx,{children:`All the key components of the SCORER UI Kit, previewable along with options using Storybook.`})]})})})]}),(0,K.jsxs)(_x,{children:[(0,K.jsx)(yx,{children:`Examples`}),(0,K.jsxs)(bx,{children:[(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/layouts`,children:[(0,K.jsx)(Sx,{children:`Global UI - Layout`}),(0,K.jsx)(Cx,{children:`A basic implementation example of the page Layout component.`}),(0,K.jsx)(nx,{children:`Layouts.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/split-layouts`,children:[(0,K.jsx)(Sx,{children:`Split Layout`}),(0,K.jsx)(Cx,{children:`A page layout with the drag-to-resize layout component.`}),(0,K.jsx)(nx,{children:`SplitLayout.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/customdrawer`,children:[(0,K.jsx)(Sx,{children:`Custom User Drawer`}),(0,K.jsx)(Cx,{children:`Shows how to add custom injected section to the user drawer.`}),(0,K.jsx)(nx,{children:`CustomUserDrawerPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/tabs`,children:[(0,K.jsx)(Sx,{children:`Tabs Example`}),(0,K.jsx)(Cx,{children:`A simple implementation of tabs.`}),(0,K.jsx)(nx,{children:`TabsPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/table`,children:[(0,K.jsx)(Sx,{children:`Table Example`}),(0,K.jsx)(Cx,{children:`A TypeTable implementation with examples on setup and how to use selections.`}),(0,K.jsx)(nx,{children:`TablePage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/line`,children:[(0,K.jsx)(Sx,{children:`Line`}),(0,K.jsx)(Cx,{children:`The line tool used commonly for setting up of areas of interest used in system configurations.`}),(0,K.jsx)(nx,{children:`LinePage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/linertc`,children:[(0,K.jsx)(Sx,{children:`Line WebRTC`}),(0,K.jsx)(Cx,{children:`A variation of the Line tool using a WebRTC video background instead of a static image.`}),(0,K.jsx)(nx,{children:`LineRTCPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/linevideo`,children:[(0,K.jsx)(Sx,{children:`Line Video`}),(0,K.jsx)(Cx,{children:`A variation of the Line tool using a video background instead of a static image.`}),(0,K.jsx)(nx,{children:`LineVideoPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/forms`,children:[(0,K.jsx)(Sx,{children:`Forms`}),(0,K.jsx)(Cx,{children:`Form inputs and state examples.`}),(0,K.jsx)(nx,{children:`FormPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/login`,children:[(0,K.jsx)(Sx,{children:`Login`}),(0,K.jsx)(Cx,{children:`A code sample of our commonly used login view.`}),(0,K.jsx)(nx,{children:`Login.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/customalert`,children:[(0,K.jsx)(Sx,{children:`Component Theme Override Example`}),(0,K.jsx)(Cx,{children:`Override CSS based theme for components.`}),(0,K.jsx)(nx,{children:`CustomAlertsPage.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/switch-test`,children:[(0,K.jsx)(Sx,{children:`Switch Example`}),(0,K.jsx)(Cx,{children:`A demonstration of the Switch component with API integration.`}),(0,K.jsx)(nx,{children:`SwitchTest.tsx`})]})}),(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/usepoll-test`,children:[(0,K.jsx)(Sx,{children:`usePoll — StrictMode Fix`}),(0,K.jsx)(Cx,{children:`Side-by-side comparison of usePoll before and after the React StrictMode canceled-ref fix.`}),(0,K.jsx)(nx,{children:`UsePollTestPage.tsx`})]})})]})]}),(0,K.jsxs)(_x,{children:[(0,K.jsx)(yx,{children:`Deprecated`}),(0,K.jsx)(bx,{children:(0,K.jsx)(xx,{children:(0,K.jsxs)(Jc,{to:`/globalUI`,children:[(0,K.jsx)(Sx,{children:`Global UI (Deprecated)`}),(0,K.jsx)(Cx,{children:`The legacy implementation used for page layouts.`}),(0,K.jsx)(nx,{children:`GlobalUIPage.tsx`})]})})})]})]}),Tx=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1076'%20height='1076'%20viewBox='0%200%201076%201076'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='19.655%25'%20x2='80.649%25'%20y1='39.035%25'%20y2='55.792%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='-51.504%25'%20x2='143.512%25'%20y1='-10.887%25'%20y2='120.691%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='25.133%25'%20x2='83.065%25'%20y1='38.102%25'%20y2='61.898%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.364'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='90.238%25'%20x2='44.369%25'%20y1='106.126%25'%20y2='-19.277%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.772'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='20.916%25'%20x2='83.944%25'%20y1='39.373%25'%20y2='61.232%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.648'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='nonzero'%20opacity='.2'%20style='mix-blend-mode:overlay'%3e%3cpath%20fill='url(%23a)'%20d='M36.923%20804.572L538%20551.122l538%20262.439v1.54l-518.664%20258.264c-7.056%203.513-15.748%203.513-22.804%200l-497.61-247.78c-4.352-2.167-7.033-6.172-7.033-10.506%200-4.335%202.681-8.34%207.034-10.507z'%20opacity='.746'/%3e%3cpath%20fill='url(%23b)'%20d='M538%20551.122v-262.44l538%20262.44v262.439z'%20opacity='.4'/%3e%3cpath%20fill='url(%23c)'%20d='M0%20551.122l538-262.44%20538%20262.44-538%20262.439z'%20opacity='.799'/%3e%3cpath%20fill='url(%23d)'%20d='M.357%20260.627L538%20524.878v288.683L0%20551.122z'/%3e%3cpath%20fill='url(%23e)'%20d='M0%20261.124L518.618%202.276c6.078-3.035%2013.568-3.035%2019.646%200l502.461%20250.784c3.333%201.664%205.386%204.738%205.386%208.065%200%203.327-2.053%206.401-5.386%208.065L538%20524.878%200%20261.124z'%20opacity='.9'/%3e%3c/g%3e%3c/svg%3e`;(0,_.forwardRef)(({title:e,titleId:t,...n},r)=>(0,K.jsxs)(`svg`,{width:35,height:35,xmlns:`http://www.w3.org/2000/svg`,ref:r,"aria-labelledby":t,...n,children:[e?(0,K.jsx)(`title`,{id:t,children:e}):null,(0,K.jsxs)(`defs`,{children:[(0,K.jsxs)(`linearGradient`,{x1:`0%`,y1:`0%`,x2:`100%`,y2:`100%`,id:`prefix__a`,children:[(0,K.jsx)(`stop`,{stopColor:`#7DB8DB`,offset:`0%`}),(0,K.jsx)(`stop`,{stopColor:`#5CA0D1`,offset:`100%`})]}),(0,K.jsx)(`style`,{children:`
            @font-face {
                font-family: Monorale;
                font-weight: 700;
                font-style: normal;
                src: url('/fonts/Monorale-Bold.woff') format('woff');
                font-display: fallback;
            }
        `})]}),(0,K.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,K.jsx)(`rect`,{fill:`url(#prefix__a)`,width:35,height:35,rx:5}),(0,K.jsx)(`text`,{fontFamily:`Monorale`,fontSize:26,fontWeight:`bold`,letterSpacing:2.167,fill:`#FFF`,children:(0,K.jsx)(`tspan`,{x:8.604,y:27,children:`S`})})]})]})),(0,_.forwardRef)(({title:e,titleId:t,...n},r)=>(0,K.jsxs)(`svg`,{width:138,height:35,xmlns:`http://www.w3.org/2000/svg`,ref:r,"aria-labelledby":t,...n,children:[e?(0,K.jsx)(`title`,{id:t,children:e}):null,(0,K.jsx)(`defs`,{children:(0,K.jsx)(`style`,{children:`
            @font-face{font-family:Monorale;font-weight:400;font-style:normal;src:url(/fonts/Monorale-Regular.woff) format('woff');font-display:fallback}@font-face{font-family:Monorale;font-weight:500;font-style:normal;src:url(/fonts/Monorale-Medium.woff) format('woff');font-display:fallback}
        `})}),(0,K.jsxs)(`g`,{fill:`#93A5B2`,fillRule:`evenodd`,fontFamily:`Monorale`,children:[(0,K.jsx)(`text`,{fontSize:16,fontWeight:400,letterSpacing:1.333,children:(0,K.jsx)(`tspan`,{x:0,y:16,children:`SCORER`})}),(0,K.jsx)(`text`,{fontSize:10,letterSpacing:.833,children:(0,K.jsx)(`tspan`,{x:0,y:31,children:`UI KIT`})})]})]}));var Ex=(0,_.forwardRef)(({title:e,titleId:t,...n},r)=>(0,K.jsxs)(`svg`,{width:170,height:35,viewBox:`0 0 170 35`,xmlns:`http://www.w3.org/2000/svg`,ref:r,"aria-labelledby":t,...n,children:[e?(0,K.jsx)(`title`,{id:t,children:e}):null,(0,K.jsxs)(`defs`,{children:[(0,K.jsx)(`style`,{children:`
            @font-face {
              font-family: Monorale;
              font-weight: 400;
              font-style: normal;
              src: url('fonts/Monorale-Regular.woff') format('woff');
              font-display: fallback;
            }
            @font-face {
                font-family: Monorale;
                font-weight: 500;
                font-style: normal;
                src: url('fonts/Monorale-Medium.woff') format('woff');
                font-display: fallback;
            }
            @font-face {
                font-family: Monorale;
                font-weight: 700;
                font-style: normal;
                src: url('fonts/Monorale-Bold.woff') format('woff');
                font-display: fallback;
            }
        `}),(0,K.jsxs)(`mask`,{id:`logo_mask`,x:0,y:0,width:`100%`,height:`100%`,children:[(0,K.jsx)(`rect`,{fill:`#fff`,id:`overlay`,x:0,y:0,width:`100%`,height:`100%`}),(0,K.jsx)(`text`,{fontFamily:`Monorale`,fontSize:26,fontWeight:`bold`,letterSpacing:2.167,children:(0,K.jsx)(`tspan`,{x:8.604,y:27,children:`S`})})]})]}),(0,K.jsx)(`g`,{fill:`#FFF`,fillRule:`evenodd`,children:(0,K.jsx)(`rect`,{mask:`url(#logo_mask)`,width:35,height:35,rx:5})}),(0,K.jsxs)(`g`,{fill:`#FFF`,fillRule:`evenodd`,children:[(0,K.jsx)(`text`,{fontFamily:`Monorale`,fontSize:16,fontWeight:400,letterSpacing:1.333,transform:`translate(52 1)`,children:(0,K.jsx)(`tspan`,{x:0,y:15,children:`SCORER`})}),(0,K.jsx)(`text`,{fontFamily:`Monorale`,fontSize:10,letterSpacing:.833,transform:`translate(52 1)`,children:(0,K.jsx)(`tspan`,{x:0,y:30,children:`UI KIT`})})]})]})),Dx=480,Ox={primary:`linear-gradient(-45deg, hsl(205,56%,59%), hsl(202,57%,67%))`,secondary:`linear-gradient(139deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%))`},kx=z`
  display: flex;
  flex-direction: row;
`,Ax=zn`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`,jx=B.div``,Mx=B.div`
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&z`margin:${e};`}
  ${({$flex:e})=>e&&z`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,Nx=B(Bd)`
    max-width: 320px;
    margin: auto;
    padding: 44px 0;
    min-height: calc(100vh - 126px);

    animation: ${Ax} 0.35s cubic-bezier(0.7, 0, 0.84, 0);

    ${Vl} {
      margin-bottom: 20px;
    }

    @media (min-width: 768px){
      min-height: auto;
    }

    @media (min-width: 1024px){
      max-width: ${Dx}px;
      padding: 70px;
      margin: initial;
    }
`,Px=B.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
`,Fx=B.div`
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  text-decoration: none;
  color: var(--grey-11);
  margin: 23px 0 40px 0;
`,Ix=B(Jc)`

  text-align: left;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }

  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  text-decoration: none;
  color: var(--primary-9);

  &:hover {
    color: var(--primary-8);
  }
`,Lx=B.div`
    text-align: center;
    margin: 10px auto;
`,Rx=z`
  opacity: 0.65;
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 1.79;
  text-align: center;
  color: hsl(207, 5%, 57%);
  margin-top:49px;
`,zx=B.div`
  ${Rx};
  margin-right: 17px;
`,Bx=B(Jc)`
  ${Rx};
  margin: 49px 4px 0 4px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Vx=B.div`
  ${Rx};
  font-weight: 700;
`,Hx=B.div`
    ${kx}
    justify-content: center;
`,Ux=B.div`
  ${Hx}{
    display:none;
  }

  @media (min-width: 768px) {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    height: auto;

    ${Hx}{
      display: flex;
    }
  }
`,Wx=B(Ex)`
    height: 54px;
    width: auto;
`,Gx=B.img`
  height: 1080px;
  background-image: ${({$design:e})=>Ox[e]};
  position: absolute;
  bottom: -360px;
  left: -600px;
  min-width: ${Dx}px;
  object-fit: contain;
  mix-blend-mode: overlay;
  opacity:0.87;
  svg {
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 1080px;
    width: auto;
    bottom: 0;
    left: -300px;
  }
`,Kx=B.div`
  height: 126px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: auto;
    max-width: ${Dx}px;
  }

`,qx=B.div`
  border: solid 1px hsl(0, 0%, 91%);
  max-width: ${Dx}px;
  margin: auto;
  height: 100%;

  @media (min-width: 768px) {
    box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    ${kx}
    overflow: hidden;
    position:relative;
    max-width: none;
    min-width: ${Dx*2}px;
    min-height: 560px;

    input{
      min-width: 296px;
    }
  }
`,Jx=({onLogin:e,design:t=`primary`})=>{let[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)({username:``,password:``}),c=(0,_.useCallback)(e=>({target:{value:t}})=>{s({...o,[e]:t})},[o]),l=(0,_.useCallback)(async t=>{t.preventDefault(),r(!0),a(null);try{let t=await e(o);console.log(t,`login`)}catch(e){e instanceof Error?a({message:e.message,type:`error`}):console.warn(e)}r(!1)},[o,e]);return(0,K.jsxs)(jx,{children:[(0,K.jsx)(ax,{children:`Login.tsx`}),(0,K.jsxs)(Ux,{children:[(0,K.jsxs)(qx,{children:[(0,K.jsxs)(Kx,{children:[(0,K.jsx)(Wx,{}),(0,K.jsx)(Gx,{src:Tx,$design:t})]}),(0,K.jsxs)(Nx,{onSubmit:l,spacing:`25px`,children:[(0,K.jsx)(Px,{children:`Sign In To Your Account`}),(0,K.jsx)(Fx,{children:`This service requires an account to login. If you do not have one, please make one first.`}),(0,K.jsx)(kd,{fieldState:`default`,required:!0,label:`Username`,onChange:c(`username`),value:o.username,name:`username`,id:`username`}),(0,K.jsx)(Od,{fieldState:`default`,required:!0,label:`Password`,onChange:c(`password`),value:o.password,name:`password`,id:`password`}),i&&(0,K.jsx)(Wl,{type:i.type,message:i.message}),(0,K.jsx)(Mx,{$flex:`1`,children:(0,K.jsx)(Du,{loading:n,type:`submit`,onClick:l,children:`Login`})}),(0,K.jsx)(Lx,{children:(0,K.jsx)(Ix,{to:`#`,children:`Forgotten Password`})})]})]}),(0,K.jsxs)(Hx,{children:[(0,K.jsxs)(zx,{children:[`Copyright `,new Date().getFullYear(),` - Future Standard Co. Ltd. All Rights Reserved. `]}),(0,K.jsx)(Bx,{to:`#`,children:`Terms`}),(0,K.jsx)(Vx,{children:`·`}),(0,K.jsx)(Bx,{to:`#`,children:`Privacy`})]})]})]})},$=e=>typeof e==`string`,Yx=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},Xx=e=>e==null?``:``+e,Zx=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},Qx=/###/g,$x=e=>e&&e.indexOf(`###`)>-1?e.replace(Qx,`.`):e,eS=e=>!e||$(e),tS=(e,t,n)=>{let r=$(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(eS(e))return{};let t=$x(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return eS(e)?{}:{obj:e,k:$x(r[i])}},nS=(e,t,n)=>{let{obj:r,k:i}=tS(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=tS(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=tS(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},rS=(e,t,n,r)=>{let{obj:i,k:a}=tS(e,t,Object);i[a]=i[a]||[],i[a].push(n)},iS=(e,t)=>{let{obj:n,k:r}=tS(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},aS=(e,t,n)=>{let r=iS(e,n);return r===void 0?iS(t,n):r},oS=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?$(e[r])||e[r]instanceof String||$(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):oS(e[r],t[r],n):e[r]=t[r]);return e},sS=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),cS={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},lS=e=>$(e)?e.replace(/[&<>"'\/]/g,e=>cS[e]):e,uS=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},dS=[` `,`,`,`?`,`!`,`;`],fS=new uS(20),pS=(e,t,n)=>{t||=``,n||=``;let r=dS.filter(e=>t.indexOf(e)<0&&n.indexOf(e)<0);if(r.length===0)return!0;let i=fS.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},mS=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].indexOf(typeof t)>-1&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},hS=e=>e?.replace(/_/g,`-`),gS={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},_S=new class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||gS,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:($(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},vS=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n.apply(n,[e,...t])})}},yS=class extends vS{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.indexOf(`.`)>-1?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):$(n)&&i?o.push(...n.split(i)):o.push(n)));let s=iS(this.data,o);return!s&&!t&&!n&&e.indexOf(`.`)>-1&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!$(n)?s:mS(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(`.`)>-1&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),nS(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)($(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(`.`)>-1&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=iS(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?oS(s,n,i):s={...s,...n},nS(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},bS={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},xS=Symbol(`i18next/PATH_KEY`);function SS(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===xS?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function CS(e,t){let{[xS]:n}=e(SS());return n.join(t?.keySeparator??`.`)}var wS={},TS=e=>!$(e)&&typeof e!=`boolean`&&typeof e!=`number`,ES=class e extends vS{constructor(e,t={}){super(),Zx([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=_S.create(`translator`)}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=TS(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!pS(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:$(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:$(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=CS(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]);let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!$(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=TS(E),O=Object.prototype.toString.apply(E);if(y&&E&&D&&_.indexOf(O)<0&&!($(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:TS(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&$(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=$(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!$(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=$(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=bS.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return $(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!$(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&($(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!wS[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(wS[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.indexOf(i)===0&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.indexOf(i)===0&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!$(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.substring(0,12)===`defaultValue`&&e[t]!==void 0)return!0;return!1}},DS=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=_S.create(`languageUtils`)}getScriptPartFromCode(e){if(e=hS(e),!e||e.indexOf(`-`)<0)return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=hS(e),!e||e.indexOf(`-`)<0)return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if($(e)&&e.indexOf(`-`)>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>{if(e===r||!(e.indexOf(`-`)<0&&r.indexOf(`-`)<0)&&(e.indexOf(`-`)>0&&r.indexOf(`-`)<0&&e.substring(0,e.indexOf(`-`))===r||e.indexOf(r)===0&&r.length>1))return e})}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),$(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return $(e)&&(e.indexOf(`-`)>-1||e.indexOf(`_`)>-1)?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):$(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.indexOf(e)<0&&i(this.formatLanguageCode(e))}),r}},OS={zero:0,one:1,two:2,few:3,many:4,other:5},kS={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},AS=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=_S.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=hS(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),kS;if(!e.match(/-|_/))return kS;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>OS[e]-OS[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},jS=(e,t,n,r=`.`,i=!0)=>{let a=aS(e,t,n);return!a&&i&&$(n)&&(a=mS(e,n,r),a===void 0&&(a=mS(t,n,r))),a},MS=e=>e.replace(/\$/g,`$$$$`),NS=class{constructor(e={}){this.logger=_S.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?lS:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?sS(i):a||`{{`,this.suffix=o?sS(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u||`-`,this.unescapeSuffix=this.unescapePrefix?``:l||``,this.nestingPrefix=d?sS(d):f||sS(`$t(`),this.nestingSuffix=p?sS(p):m||sS(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){let i=jS(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(jS(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp();let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>MS(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?MS(this.escape(e)):MS(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=$(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !$(a)&&!this.useRawValueToEscape&&(a=Xx(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;let r=e.split(RegExp(`${sS(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!$(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!$(i))return i;$(i)||(i=Xx(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},PS=e=>{let t=e.toLowerCase().trim(),n={};if(e.indexOf(`(`)>-1){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].substring(0,r[1].length-1);t===`currency`&&i.indexOf(`:`)<0?n.currency||=i.trim():t===`relativetime`&&i.indexOf(`:`)<0?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},FS=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(hS(r),i),t[o]=s),s(n)}},IS=e=>(t,n,r)=>e(hS(n),r)(t),LS=class{constructor(e={}){this.logger=_S.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?FS:IS;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=FS(t)}format(e,t,n,r={}){let i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&i[0].indexOf(`)`)<0&&i.find(e=>e.indexOf(`)`)>-1)){let e=i.findIndex(e=>e.indexOf(`)`)>-1);i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=PS(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},RS=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},zS=class extends vS{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=_S.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{rS(n.loaded,[i],a),RS(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();$(e)&&(e=this.languageUtils.toResolveHierarchy(e)),$(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},BS=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,simplifyPluralSuffix:!0,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),$(e[1])&&(t.defaultValue=e[1]),$(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),VS=e=>($(e.ns)&&(e.ns=[e.ns]),$(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),$(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.(`cimode`)<0&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),typeof e.initImmediate==`boolean`&&(e.initAsync=e.initImmediate),e),HS=()=>{},US=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},WS=`__i18next_supportNoticeShown`,GS=()=>typeof globalThis<`u`&&!!globalThis[WS],KS=()=>{typeof globalThis<`u`&&(globalThis[WS]=!0)},qS=e=>!!(e?.modules?.backend?.name?.indexOf(`Locize`)>0||e?.modules?.backend?.constructor?.name?.indexOf(`Locize`)>0||e?.options?.backend?.backends&&e.options.backend.backends.some(e=>e?.name?.indexOf(`Locize`)>0||e?.constructor?.name?.indexOf(`Locize`)>0)||e?.options?.backend?.projectId||e?.options?.backend?.backendOptions&&e.options.backend.backendOptions.some(e=>e?.projectId)),JS=class e extends vS{constructor(e={},t){if(super(),this.options=VS(e),this.services={},this.logger=_S,this.modules={external:[]},US(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&($(e.ns)?e.defaultNS=e.ns:e.ns.indexOf(`translation`)<0&&(e.defaultNS=e.ns[0]));let n=BS();this.options={...n,...this.options,...VS(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!qS(this)&&!GS()&&(typeof console<`u`&&console.info!==void 0&&console.info(`🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙`),KS());let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?_S.init(r(this.modules.logger),this.options):_S.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:LS;let t=new DS(this.options);this.store=new yS(this.options.resources,this.options);let i=this.services;i.logger=_S,i.resourceStore=this.store,i.languageUtils=t,i.pluralResolver=new AS(t,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format&&this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`),e&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(i.formatter=r(e),i.formatter.init&&i.formatter.init(i,this.options),this.options.interpolation.format=i.formatter.format.bind(i.formatter)),i.interpolator=new NS(this.options),i.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},i.backendConnector=new zS(r(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(i.languageDetector=r(this.modules.languageDetector),i.languageDetector.init&&i.languageDetector.init(i,this.options.detection,this.options)),this.modules.i18nFormat&&(i.i18nFormat=r(this.modules.i18nFormat),i.i18nFormat.init&&i.i18nFormat.init(this)),this.translator=new ES(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=HS,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=Yx(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=HS){let n=t,r=$(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&e.indexOf(t)<0&&e.push(t)})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=Yx();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=HS,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&bS.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!([`cimode`,`dev`].indexOf(e)>-1)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(!([`cimode`,`dev`].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=Yx();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=$(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes($(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n){let r=(e,t,...i)=>{let a;a=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(i)),a.lng=a.lng||r.lng,a.lngs=a.lngs||r.lngs,a.ns=a.ns||r.ns,a.keyPrefix!==``&&(a.keyPrefix=a.keyPrefix||n||r.keyPrefix);let o=this.options.keySeparator||`.`,s;return a.keyPrefix&&Array.isArray(e)?s=e.map(e=>(typeof e==`function`&&(e=CS(e,{...this.options,...t})),`${a.keyPrefix}${o}${e}`)):(typeof e==`function`&&(e=CS(e,{...this.options,...t})),s=a.keyPrefix?`${a.keyPrefix}${o}${e}`:e),this.t(s,a)};return $(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=Yx();return this.options.ns?($(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=Yx();$(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new DS(BS());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=HS){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new yS(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...BS().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new NS(n)}return a.translator=new ES(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}.createInstance();JS.createInstance,JS.dir,JS.init,JS.loadResources,JS.reloadResources,JS.use,JS.changeLanguage,JS.getFixedT,JS.t,JS.exists,JS.setDefaultNamespace,JS.hasLoadedNamespace,JS.loadNamespaces,JS.loadLanguages;var YS=(e,t,n,r)=>{let i=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(i,`warn`,`react-i18next::`,!0);nC(i[0])&&(i[0]=`react-i18next:: ${i[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...i):console?.warn&&console.warn(...i)},XS={},ZS=(e,t,n,r)=>{nC(n)&&XS[n]||(nC(n)&&(XS[n]=new Date),YS(e,t,n,r))},QS=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off(`initialized`,n)},0),t()};e.on(`initialized`,n)}},$S=(e,t,n)=>{e.loadNamespaces(t,QS(e,n))},eC=(e,t,n,r)=>{if(nC(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return $S(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,QS(e,r))},tC=(e,t,n={})=>!t.languages||!t.languages.length?(ZS(t,`NO_LANGUAGES`,`i18n.languages were undefined or empty`,{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf(`languageChanging`)>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}),nC=e=>typeof e==`string`,rC=e=>typeof e==`object`&&!!e,iC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,aC={"&amp;":`&`,"&#38;":`&`,"&lt;":`<`,"&#60;":`<`,"&gt;":`>`,"&#62;":`>`,"&apos;":`'`,"&#39;":`'`,"&quot;":`"`,"&#34;":`"`,"&nbsp;":` `,"&#160;":` `,"&copy;":`©`,"&#169;":`©`,"&reg;":`®`,"&#174;":`®`,"&hellip;":`…`,"&#8230;":`…`,"&#x2F;":`/`,"&#47;":`/`},oC=e=>aC[e],sC={bindI18n:`languageChanged`,bindI18nStore:``,transEmptyNodeValue:``,transSupportBasicHtmlNodes:!0,transWrapTextNodes:``,transKeepBasicHtmlNodesFor:[`br`,`strong`,`i`,`p`],useSuspense:!0,unescape:e=>e.replace(iC,oC),transDefaultProps:void 0},cC=(e={})=>{sC={...sC,...e}},lC=()=>sC,uC,dC=e=>{uC=e},fC=()=>uC,pC={type:`3rdParty`,init(e){cC(e.options.react),dC(e)}},mC=(0,_.createContext)(),hC=class{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}},gC=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),_C=o(((e,t)=>{t.exports=gC()}))(),vC={t:(e,t)=>nC(t)?t:rC(t)&&nC(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,ready:!1},yC=()=>()=>{},bC=(e,t={})=>{let{i18n:n}=t,{i18n:r,defaultNS:i}=(0,_.useContext)(mC)||{},a=n||r||fC();a&&!a.reportNamespaces&&(a.reportNamespaces=new hC),a||ZS(a,`NO_I18NEXT_INSTANCE`,`useTranslation: You will need to pass in an i18next instance by using initReactI18next`);let o=(0,_.useMemo)(()=>({...lC(),...a?.options?.react,...t}),[a,t]),{useSuspense:s,keyPrefix:c}=o,l=e||i||a?.options?.defaultNS,u=nC(l)?[l]:l||[`translation`],d=(0,_.useMemo)(()=>u,u);a?.reportNamespaces?.addUsedNamespaces?.(d);let f=(0,_.useRef)(0),p=(0,_.useCallback)(e=>{if(!a)return yC;let{bindI18n:t,bindI18nStore:n}=o,r=()=>{f.current+=1,e()};return t&&a.on(t,r),n&&a.store.on(n,r),()=>{t&&t.split(` `).forEach(e=>a.off(e,r)),n&&n.split(` `).forEach(e=>a.store.off(e,r))}},[a,o]),m=(0,_.useRef)(),h=(0,_.useCallback)(()=>{if(!a)return vC;let e=!!(a.isInitialized||a.initializedStoreOnce)&&d.every(e=>tC(e,a,o)),n=t.lng||a.language,r=f.current,i=m.current;if(i&&i.ready===e&&i.lng===n&&i.keyPrefix===c&&i.revision===r)return i;let s={t:a.getFixedT(n,o.nsMode===`fallback`?d:d[0],c),ready:e,lng:n,keyPrefix:c,revision:r};return m.current=s,s},[a,d,c,o,t.lng]),[g,v]=(0,_.useState)(0),{t:y,ready:b}=(0,_C.useSyncExternalStore)(p,h,h);(0,_.useEffect)(()=>{if(a&&!b&&!s){let e=()=>v(e=>e+1);t.lng?eC(a,t.lng,d,e):$S(a,d,e)}},[a,t.lng,d,b,s,g]);let x=a||{},S=(0,_.useRef)(null),C=(0,_.useRef)(),w=e=>{let t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;let n=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(n,`__original`))try{Object.defineProperty(n,`__original`,{value:e,writable:!1,enumerable:!1,configurable:!1})}catch{}return n},T=(0,_.useMemo)(()=>{let e=x,t=e?.language,n=e;e&&(S.current&&S.current.__original===e&&C.current===t?n=S.current:(n=w(e),S.current=n,C.current=t));let r=[y,n,b];return r.t=y,r.i18n=n,r.ready=b,r},[y,x,b,x.resolvedLanguage,x.language,x.languages]);if(a&&s&&!b)throw new Promise(e=>{let n=()=>e();t.lng?eC(a,t.lng,d,n):$S(a,d,n)});return T},xC=B.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
`,SC=B.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: ${({$type:e})=>`var(--${e}, var(--primary-9))`};
    ${({$tooltipMessage:e})=>e&&z`
      &:hover {
        cursor: pointer;
      };
    `}
`,CC=({statusList:e})=>{let t=(0,_.useRef)([]);return t.current=e.map(()=>_.createRef()),(0,K.jsx)(xC,{children:e.map(({type:e,tooltipMessage:n,tooltipIcon:r,tooltipType:i,tooltipPosition:a},o)=>(0,K.jsxs)(_.Fragment,{children:[(0,K.jsx)(SC,{ref:t.current[o],$type:e,$tooltipMessage:n}),n&&(0,K.jsx)(iu,{tooltipFor:t.current[o],message:n,icon:r,type:i,tooltipPosition:a})]},o))})},wC=B.div`
  margin: 100px 200px;
`,TC=B.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`,EC=B.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`,DC=B.p`
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--grey-9);
  margin: 16px 0;
`,OC=[{header:`Device Name`,sortable:!0,cellStyle:`firstColumn`},{header:`Created`,sortable:!1,cellStyle:`lowImportance`,alignment:`center`,hasCopyButton:!0},{header:`Usage`,sortable:!1,cellStyle:`normalImportance`,alignment:`right`,showUnit:!0},{header:`Cost`,sortable:!0,cellStyle:`highImportance`,alignment:`right`,hasCopyButton:!0},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,alignment:`center`},{header:`Actions`,sortable:!1,cellStyle:`highImportance`,alignment:`right`}],kC={"device-id-1":`success`,"device-id-2":`error`,"device-id-3":`warning`,"device-id-4":`neutral`,"device-id-5":`neutral`},AC=()=>{let{t:e,i18n:t}=bC(`Common`),{createModal:n}=af(),[r,i]=(0,_.useState)([]),a=(0,_.useCallback)(e=>{console.log(`opening custom modal for item ${e}`),n({closeText:`Close`,isCloseEnable:!0,customComponent:(0,K.jsx)(Ig,{title:`Example of custom component on Modal`,introductionText:`Anything can be added inside de modal, I hope you find this modal useful`})})},[n]),o=(0,_.useMemo)(()=>[{id:`a0`,text:`Main Action`,icon:`Success`,onClickCallback:()=>{}},{id:`a1`,text:`日本語の場合はランダム`,onClickCallback:()=>{}},{id:`a2`,text:`Save Action`,icon:`Analyse`,hasOnSelectLoading:!0,onClickCallback:()=>{}},{id:`a3`,text:`Download Action`,icon:`Download`,onClickCallback:()=>{},disabled:!0}],[]),[s,c]=(0,_.useState)((0,_.useMemo)(()=>[{id:`device-id-1`,header:{image:`https://picsum.photos/id/43/367/267`,mediaUrl:`${cx}traffic.mp4`,mediaType:`video`},columns:[{text:`Device Name`,href:`#`},{text:`Just Now`},{text:`242`,unit:`mb`},{text:`¥20,000`},{customComponent:(0,K.jsx)(CC,{statusList:[{type:`success`},{type:`success`},{type:`success`}]})},{customComponent:(0,K.jsx)(Af,{mainButtonId:`a0`,buttonList:o})}]},{_checked:!0,id:`device-id-2`,header:{image:`${cx}images/cityscape.jpg`,mediaUrl:`${cx}images/cityscape.jpg`,mediaType:`img`,onClickThumbnail:()=>a(`device-id-2`)},columns:[{text:`Another Device`,href:`#`},{text:`1st October 2019`},{text:`2.1`,unit:`gb`},{text:`¥4,000`},{customComponent:(0,K.jsx)(CC,{statusList:[{type:`error`,tooltipIcon:`BigWarning`,tooltipType:`warning`,tooltipMessage:`4 Images have reported upload failures`,tooltipPosition:`left`},{type:`warning`,tooltipIcon:`Information`,tooltipType:`neutral`,tooltipMessage:`1 images file is corrupted`,tooltipPosition:`bottom`},{type:`info`,tooltipIcon:`Information`,tooltipType:`info`,tooltipMessage:`All Images have been updated in the server`,tooltipPosition:`right`}]})},{customComponent:(0,K.jsx)(Af,{mainButtonId:`a0`,buttonList:o})}]},{id:`device-id-3`,header:{image:`${cx}images/cityscape.jpg`,mediaUrl:`${cx}images/cityscape.jpg`,mediaType:`img`},columns:[{text:`Old Device`,href:`#`},{text:`22nd March 2020`},{text:`2.1`,unit:`tb`},{text:`¥7,000`},{customComponent:(0,K.jsx)(CC,{statusList:[{type:`warning`,tooltipIcon:`Information`,tooltipType:`neutral`,tooltipMessage:`Upload took too long`},{type:`neutral`},{type:`neutral`}]})},{customComponent:(0,K.jsx)(Af,{mainButtonId:`a0`,buttonList:o})}]},{id:`device-id-4`,header:{image:`${cx}images/cityscape.jpg`,mediaUrl:`${cx}images/cityscape.jpg`,mediaType:`img`},columns:[{text:`Magic Edge Cloud`,href:`#`},{text:`2nd April 2020`},{text:`153`,unit:`mb`},{text:`¥25,000`},{customComponent:(0,K.jsx)(CC,{statusList:[{type:`neutral`},{type:`neutral`},{type:`neutral`}]})},{customComponent:(0,K.jsx)(Af,{mainButtonId:`a0`,buttonList:o})}]},{id:`device-id-5`,columns:[{text:`Special Camera`,href:`#`},{text:`16th June 2020`},{text:`153`,unit:`mb`},{text:`¥25,000`},{customComponent:(0,K.jsx)(CC,{statusList:[{type:`neutral`},{type:`neutral`},{type:`neutral`}]})},{customComponent:(0,K.jsx)(Af,{mainButtonId:`a0`,buttonList:o})}]}],[o,a])),l=(0,_.useMemo)(()=>[{id:`statusFilter`,buttonText:e(`filterBar.status`),list:[{text:e(`filterBar.statusSuccess`),value:`success`},{text:e(`filterBar.statusWarning`),value:`warning`},{text:e(`filterBar.statusError`),value:`error`},{text:e(`filterBar.statusNeutral`),value:`neutral`}],buttonIcon:`Camera`,optionType:`radio`,hasReset:!0,hasApply:!0,resetText:e(`filterBar.reset`),cancelText:e(`filterBar.cancel`),closeText:e(`filterBar.close`),applyText:e(`filterBar.apply`)}],[e]),u=(0,_.useMemo)(()=>{let e=r.find(e=>e.id===`statusFilter`);if(!e?.selected||!Up(e.selected))return s;let t=e.selected.value;return s.filter(e=>e.id&&kC[e.id]===t)},[r,s]),d=(0,_.useCallback)((e,t)=>{let n=[...s],r=n.findIndex(e=>e.id===t);n[r]._checked=e,c(n)},[s,c]),f=(0,_.useCallback)(e=>{let t=[...s];t.forEach(t=>{t._checked=e}),c(t)},[s,c]),p=(0,_.useCallback)(e=>{i(e)},[]),m=(0,_.useCallback)(()=>{t.changeLanguage(t.language.startsWith(`ja`)?`en`:`ja`)},[t]);return(0,K.jsxs)(wC,{children:[(0,K.jsx)(ax,{children:`TablePage.tsx`}),(0,K.jsxs)(gv,{children:[(0,K.jsx)(Ig,{title:`Table Example`,areaTitle:`Examples`,areaHref:`/`}),(0,K.jsx)(EC,{children:(0,K.jsx)(su,{design:`secondary`,size:`small`,onClick:m,children:e(`filterBar.switchLang`)})}),(0,K.jsx)(ch,{dropdownsConfig:l,onChangeCallback:p,totalResults:u.length,filtersTitle:e(`filterBar.title`),resultTextTemplate:e(`filterBar.resultTemplate`),clearText:e(`filterBar.clearAll`)}),(0,K.jsx)(DC,{children:e(`filterBar.tip`)}),(0,K.jsx)(h_,{selectable:!0,columnConfig:OC,rows:u,selectCallback:d,toggleAllCallback:f,hasThumbnail:!0}),(0,K.jsxs)(TC,{children:[`Selected IDs: [`,jC(s).toString(),`]`]})]})]})},jC=e=>{let t=[];return e.forEach(e=>{e._checked&&e.id&&t.push(e.id.toString())}),t},MC=B.div`
  margin: 0;
`,NC=B.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,PC=B.div`
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: 20px;
  color: var(--grey-9);
`,FC=`full.name@example.com`,IC=!0,LC=!0,RC=!0,zC=`#`,BC=()=>{let{onThemeToggle:e,isLightMode:t}=Cf(),{t:n}=bC([`GlobalUI`,`Common`]),r=(0,_.useCallback)(()=>{let e=JS.language===`ja`?`en`:`ja`;JS.changeLanguage(e),localStorage.setItem(`language`,e)},[]),i=(0,K.jsx)(NC,{children:(0,K.jsxs)(PC,{children:[(0,K.jsx)(`p`,{children:n(`Common:userDrawerTextP1`)}),(0,K.jsx)(`p`,{children:n(`Common:userDrawerTextP2`)})]})});return(0,K.jsxs)(MC,{children:[(0,K.jsx)(ax,{children:`CustomUserDrawerPage.tsx`}),(0,K.jsx)(pb,{userDrawerBespoke:i,loggedInUser:FC,hasSearch:IC,useNotifications:LC,logoutLink:zC,searchPlaceholder:n(`Common:searchPlaceholder`),isLightMode:t,switchThemeText:n(`GlobalUI:theme.switchTheme`),selectedThemeText:n(t?`GlobalUI:theme.lightMode`:`GlobalUI:theme.darkMode`),onThemeToggle:e,hasLanguage:RC,onLanguageToggle:r,selectedLangAttribute:JS.language,selectedLanguageText:n(`GlobalUI:theme.${JS.language}`),accountOptionText:n(`Common:accountOptions`),currentUserText:n(`GlobalUI:currentUser`),userSubmenu:[{href:`/user/accounts`,text:n(`Common:accounts`)},{href:`/user/billing`,text:n(`Common:billing`)},{href:`/user/payments`,text:n(`Common:payments`)}]})]})},VC=B.div`
  margin: 100px 200px;
`,HC=B.div`
  height: 1px;
  border-radius: 3px;
  background-color: var(--grey-4);
  margin-left: 0px;
`,UC=B.div`
  margin-top: 20px;
`,WC=B.div`
  margin-top: 20px;
`,GC=()=>(0,K.jsxs)(VC,{children:[(0,K.jsx)(ax,{children:`TabsPage.tsx`}),(0,K.jsxs)(gv,{children:[(0,K.jsx)(Ig,{title:`Tabs Example`,areaTitle:`Examples`,areaHref:`/`}),(0,K.jsxs)(U_,{children:[(0,K.jsxs)(hb,{defaultTabId:`tab1`,children:[(0,K.jsx)(vb,{tabFor:`tab1`,children:`Tab 1`}),(0,K.jsx)(vb,{tabFor:`tab2`,children:`Tab 2`})]}),(0,K.jsx)(HC,{}),(0,K.jsx)(bb,{tabId:`tab1`,children:(0,K.jsxs)(UC,{children:[(0,K.jsx)(Hu,{htmlFor:`fullname`,labelText:`Content of tab 1`}),(0,K.jsx)(kd,{fieldState:`default`,required:!0,label:`Full Name`,name:`fullname`,id:`fullname`}),(0,K.jsx)(kd,{fieldState:`default`,required:!0,label:`Department`,name:`department`,id:`department`}),(0,K.jsx)(su,{design:`primary`,size:`small`,children:` Save `})]})}),(0,K.jsx)(bb,{tabId:`tab2`,children:(0,K.jsxs)(WC,{children:[(0,K.jsx)(Hu,{htmlFor:`content2`,labelText:`Content of tab 2`}),(0,K.jsx)(Hu,{htmlFor:`lorem`,labelText:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor.`}),(0,K.jsx)(su,{design:`primary`,size:`small`,children:` OK `})]})})]})]})]}),KC=B.div`
  h2 {
    font-family: var(--font-ui);
    font-weight: 500;
    color: var(--grey-11);
    font-size: 24px;
  }
  p {
    font-family: var(--font-ui);
    color: var(--grey-11);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`,qC=[{id:`primaryBase0`,buttonType:`default`,text:`Example Action 1`},{id:`secondaryBase1`,buttonType:`default`,text:`Example Action 2`,design:`secondary`},{id:`buttonWithIcon2`,buttonType:`icon-button`,text:`Delete Instance`,design:`warning`,icon:`DevicesScorerEdge`}],JC=()=>{let{onThemeToggle:e,isLightMode:t}=Cf();return(0,K.jsxs)(On,{theme:jl,children:[(0,K.jsx)(ax,{children:`GlobalUIPage.tsx`}),(0,K.jsxs)(Jb,{accountOptionText:`Account Options`,canAlwaysPin:!0,legacyLayout:!0,isLightMode:t,switchThemeText:`SWITCH THEME`,selectedThemeText:t?`LIGHT MODE`:`DARK MODE`,onThemeToggle:e,hasSwitchTheme:!0,content:{items:[{href:`/welcome`,icon:`Home`,title:`Welcome`},{href:`/company`,icon:`Detection`,submenu:[{href:`/company/about`,title:`About us`},{href:`/company/team`,title:`Team`},{href:`/company/contact`,title:`Contact`},{href:`/company/table-example`,title:`Table Example`},{href:`https://www.google.com/`,isExternalLink:!0,title:`External link`}],title:`Company`},{href:`/services`,icon:`Usage`,submenu:[{title:`Online Services`},{href:`/services/custom`,title:`Service custom`},{href:`/services/special`,title:`Service special`},{href:`/services/extra-special`,title:`Service extra special`},{title:`On site Services`},{href:`/services/special`,title:`Service special`},{href:`/services/extra-special`,title:`Service extra special`}],title:`Services`},{href:`https://www.google.com/maps`,icon:`Zone`,isExternalLink:!0,title:`External link`}]},currentUserText:`Current User`,customDrawer:{customComponent:(0,K.jsx)(`h1`,{children:`Hello Drawer`}),icon:`Add`,status:`danger`,width:`280px;`},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:`#`,loggedInUser:`full.name@example.com`,logoutLink:`#`,logoutText:`Logout`,maxWidth:`1200px`,notificationsHistory:{noNotificationsText:`No new notifications`,read:[{imgUrl:``,message:`The device has correctly turn off`,time:`3 days ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`3 days ago`,title:`Device is on`},{imgUrl:``,message:`The device has bean correctly added`,time:`3 days ago`,title:`A new device was added`}],readNotificationsText:`New`,unread:[{imgUrl:``,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`,title:`Event Type`},{imgUrl:``,message:`The device has correctly turn off`,time:`1 min ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`6 mins ago`,title:`Device is on`},{imgUrl:``,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`,title:`Connection was interrupted`},{imgUrl:``,message:`The device has correctly turn off`,time:`3 hour ago`,title:`Device is off`}],unreadNotificationsText:`Read`},searchPlaceholder:`Search area names, etc.`,supportUrl:`/support`,userSubmenu:[{href:`/user/accounts`,text:`Accounts`},{href:`/user/billing`,text:`Billing`},{href:`/user/payments`,text:`Payments`}],children:[(0,K.jsx)(Ig,{title:`Welcome`,introductionText:`Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. `,rightContent:(0,K.jsx)(Mf,{buttons:qC})}),(0,K.jsxs)(KC,{children:[(0,K.jsx)(`h2`,{children:`What is Lorem Ipsum?`}),(0,K.jsx)(`p`,{children:`Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur. Enim magna sunt elit aliqua reprehenderit.`})]}),(0,K.jsxs)(KC,{children:[(0,K.jsx)(`h2`,{children:`Why do we use it?`}),(0,K.jsx)(`p`,{children:`Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit. Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do. Eiusmod nisi elit fugiat occaecat elit culpa est qui.`})]}),(0,K.jsxs)(KC,{children:[(0,K.jsx)(`h2`,{children:`Where does it come from?`}),(0,K.jsx)(`p`,{children:`Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt voluptate laborum esse minim.`})]}),(0,K.jsxs)(KC,{children:[(0,K.jsx)(`h2`,{children:`Where can I get some?`}),(0,K.jsx)(`p`,{children:`Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum tempor incididunt irure duis mollit.`})]}),(0,K.jsxs)(KC,{children:[(0,K.jsx)(`h2`,{children:`Example`}),(0,K.jsx)(`p`,{children:`Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat.`})]})]})]})},YC=B.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,XC=B.div`
  --error: red;
  --info: blue;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,ZC=()=>(0,K.jsxs)(YC,{children:[(0,K.jsx)(ax,{children:`CustomAlertsPage.tsx`}),(0,K.jsx)(`h3`,{children:`Default Based Colors`}),(0,K.jsx)(Wl,{message:`Base color error message`,type:`error`,hideCloseButton:!0}),(0,K.jsx)(Wl,{message:`Base color info message`,type:`info`,hideCloseButton:!0}),(0,K.jsxs)(XC,{children:[(0,K.jsx)(`h3`,{children:`Custom Local file Colors`}),(0,K.jsx)(Wl,{message:`Custom color error message`,type:`error`,hideCloseButton:!0}),(0,K.jsx)(Wl,{message:`Custom color info message`,type:`info`,hideCloseButton:!0})]}),(0,K.jsx)(`h3`,{children:`Custom Global Project Colors`}),(0,K.jsx)(Wl,{message:`Custom color success message`,type:`success`,hideCloseButton:!0}),(0,K.jsx)(Wl,{message:`Custom color warning message`,type:`warning`,hideCloseButton:!0})]}),QC=B.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--grey-8) 1px dotted;
  margin-bottom: 20px;
`,$C=()=>{let{onThemeToggle:e,isLightMode:t}=Cf(),{t:n}=bC([`GlobalUI`,`Common`]),r=(0,_.useCallback)(()=>{let e=JS.language===`ja`?`en`:`ja`;JS.changeLanguage(e),localStorage.setItem(`language`,e)},[]),i=[{id:`primaryBase0`,buttonType:`default`,text:n(`Common:exampleAction`)}],a={UtilityHeaderOptions:{back:{label:n(`Common:breadcrumbs.back`),link:`/`},breadcrumbs:[{text:n(`Common:breadcrumbs.firstText`),href:`/`},{text:n(`Common:breadcrumbs.secondText`),href:`#2`},{text:n(`Common:breadcrumbs.thirdText`),href:`#3`},{text:n(`Common:breadcrumbs.fourText`),href:`#4`},{text:n(`Common:breadcrumbs.fiveText`),href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:n(`Common:share`),link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,K.jsx)(Ig,{title:n(`Common:pageTitle`),introductionText:n(`Common:pageIntroduction`),icon:`Home`,rightContent:(0,K.jsx)(Mf,{buttons:i})}),TabsElementArea:(0,K.jsxs)(hb,{defaultTabId:`tab1`,children:[(0,K.jsx)(vb,{tabFor:`tab1`,children:n(`Common:home`)}),(0,K.jsx)(vb,{tabFor:`tab2`,children:n(`Common:example1`)}),(0,K.jsx)(vb,{tabFor:`tab3`,children:n(`Common:example2`)})]})};return(0,K.jsxs)(On,{theme:jl,children:[(0,K.jsx)(ax,{children:`Layouts.tsx`}),(0,K.jsx)(Jb,{accountOptionText:n(`Common:accountOptions`),canAlwaysPin:!0,isLightMode:t,switchThemeText:n(`GlobalUI:theme.switchTheme`),selectedThemeText:n(t?`GlobalUI:theme.lightMode`:`GlobalUI:theme.darkMode`),onThemeToggle:e,onLanguageToggle:r,selectedLangAttribute:JS.language,selectedLanguageText:n(`GlobalUI:theme.${JS.language}`),badge:{text:n(`Common:badgeTitle`),color:`primary`,linkTo:`#`,linkText:n(`GlobalUI:login`)},hasSwitchTheme:!0,keepOpenText:n(`GlobalUI:keepOpenText`),autoHideText:n(`GlobalUI:autoHideText`),supportText:n(`GlobalUI:supportText`),content:{items:[{href:`/welcome`,icon:`Home`,title:n(`Common:pageTitle`)},{href:`/company`,icon:`Detection`,submenu:[{href:`/company/about`,title:n(`Common:aboutUs`)},{href:`/company/team`,title:n(`Common:team`)},{href:`/company/contact`,title:n(`Common:contact`)},{href:`/company/table-example`,title:n(`Common:tableExample`)},{href:`https://www.google.com/`,isExternalLink:!0,title:n(`Common:externalLink`)}],title:n(`Common:company`)},{href:`/services`,icon:`Usage`,submenu:[{title:n(`Common:onlineServices`)},{href:`/services/custom`,title:n(`Common:serviceCustom`)},{href:`/services/special`,title:n(`Common:serviceSpecial`)},{href:`/services/extra-special`,title:n(`Common:serviceExtraSpecial`)},{title:n(`Common:onSiteServices`)},{href:`/services/special`,title:n(`Common:serviceSpecial`)},{href:`/services/extra-special`,title:n(`Common:serviceExtraSpecial`)}],title:n(`Common:services`)},{href:`https://www.google.com/maps`,icon:`Zone`,isExternalLink:!0,title:n(`Common:externalLink`)}]},currentUserText:n(`GlobalUI:currentUser`),customDrawer:{customComponent:(0,K.jsx)(`h1`,{style:{textAlign:`center`},children:n(`Common:helloDrawer`)}),icon:`Add`,status:`danger`,width:`280px;`},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:`#`,loggedInUser:`full.name@example.com`,logoutLink:`#`,logoutText:n(`GlobalUI:logout`),maxWidth:`none`,notificationsHistory:{noNotificationsText:n(`Common:noNotificationsText`),read:[{imgUrl:``,message:`The device has correctly turn off`,time:`3 days ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`3 days ago`,title:`Device is on`},{imgUrl:``,message:`The device has bean correctly added`,time:`3 days ago`,title:`A new device was added`}],readNotificationsText:n(`Common:readNotificationsText`),unread:[{imgUrl:``,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`,title:`Event Type`},{imgUrl:``,message:`The device has correctly turn off`,time:`1 min ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`6 mins ago`,title:`Device is on`},{imgUrl:``,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`,title:`Connection was interrupted`},{imgUrl:``,message:`The device has correctly turn off`,time:`3 hour ago`,title:`Device is off`}],unreadNotificationsText:n(`Common:unreadNotificationsText`)},searchPlaceholder:n(`Common:searchPlaceholder`),supportUrl:`/support`,userSubmenu:[{href:`/user/accounts`,text:n(`Common:accounts`)},{href:`/user/billing`,text:n(`Common:billing`)},{href:`/user/payments`,text:n(`Common:payments`)}],children:(0,K.jsxs)(Y_,{layout:`default`,HeaderContent:a,children:[(0,K.jsx)(bb,{tabId:`tab1`,children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(`h1`,{children:`Full Width Container`}),(0,K.jsx)(`p`,{children:n(`Common:descriptionTab1`)}),(0,K.jsx)(Q_,{children:(0,K.jsx)(QC,{})}),(0,K.jsx)(`h2`,{children:`Lorem Ipsum`}),(0,K.jsx)(`p`,{children:`In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.`}),(0,K.jsx)(`p`,{children:`Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.`}),(0,K.jsx)(`p`,{children:`Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.`}),(0,K.jsx)(`h2`,{children:`Dolor Sit Amet`}),(0,K.jsx)(`p`,{children:`In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.`}),(0,K.jsx)(`p`,{children:`Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.`}),(0,K.jsx)(`p`,{children:`Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.`}),(0,K.jsx)(`p`,{children:`Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum.`}),(0,K.jsx)(`p`,{children:`Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim.`}),(0,K.jsx)(`h2`,{children:`Proident Nostrud`}),(0,K.jsx)(`p`,{children:`In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.`}),(0,K.jsx)(`p`,{children:`Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.`}),(0,K.jsx)(`p`,{children:`Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.`}),(0,K.jsx)(`p`,{children:`Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum.`}),(0,K.jsx)(`p`,{children:`Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim.`})]})}),(0,K.jsx)(bb,{tabId:`tab2`,children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Hu,{htmlFor:`fullname`,labelText:n(`Common:titleTab2`)}),(0,K.jsx)(kd,{fieldState:`default`,required:!0,label:n(`Common:formName`),name:`fullname`,id:`fullname`}),(0,K.jsx)(kd,{fieldState:`default`,required:!0,label:n(`Common:formDepartment`),name:`department`,id:`department`}),(0,K.jsx)(su,{design:`primary`,size:`small`,children:` Save `})]})}),(0,K.jsx)(bb,{tabId:`tab3`,children:(0,K.jsxs)(`div`,{children:[(0,K.jsx)(Hu,{htmlFor:`content2`,labelText:n(`Common:titleTab3`)}),(0,K.jsx)(Hu,{htmlFor:`lorem`,labelText:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor.`}),(0,K.jsx)(su,{design:`primary`,size:`small`,children:` OK `})]})})]})})]})},ew=()=>{let{onThemeToggle:e,isLightMode:t}=Cf(),{t:n}=bC([`GlobalUI`,`Common`]),[r]=(0,_.useState)(`horizontal`),[i]=(0,_.useState)(!1),a=(0,_.useCallback)(()=>{let e=JS.language===`ja`?`en`:`ja`;JS.changeLanguage(e),localStorage.setItem(`language`,e)},[]),o=(0,_.useCallback)(e=>{console.log(`Side Area Current State: ${e}`)},[]),s=(0,K.jsx)(Y,{title:`Main Area`}),c=(0,K.jsx)(Y,{title:`Side Area`});return(0,K.jsxs)(On,{theme:jl,children:[(0,K.jsx)(ax,{children:`SplitLayout.tsx`}),(0,K.jsx)(Jb,{accountOptionText:n(`Common:accountOptions`),canAlwaysPin:!0,isLightMode:t,switchThemeText:n(`GlobalUI:theme.switchTheme`),selectedThemeText:n(t?`GlobalUI:theme.lightMode`:`GlobalUI:theme.darkMode`),onThemeToggle:e,onLanguageToggle:a,selectedLangAttribute:JS.language,selectedLanguageText:n(`GlobalUI:theme.${JS.language}`),hasSwitchTheme:!0,keepOpenText:n(`GlobalUI:keepOpenText`),autoHideText:n(`GlobalUI:autoHideText`),supportText:n(`GlobalUI:supportText`),content:{items:[{href:`/welcome`,icon:`Home`,title:n(`Common:pageTitle`)},{href:`/company`,icon:`Detection`,submenu:[{href:`/company/about`,title:n(`Common:aboutUs`)},{href:`/company/team`,title:n(`Common:team`)},{href:`/company/contact`,title:n(`Common:contact`)},{href:`/company/table-example`,title:n(`Common:tableExample`)},{href:`https://www.google.com/`,isExternalLink:!0,title:n(`Common:externalLink`)}],title:n(`Common:company`)},{href:`/services`,icon:`Usage`,submenu:[{title:n(`Common:onlineServices`)},{href:`/services/custom`,title:n(`Common:serviceCustom`)},{href:`/services/special`,title:n(`Common:serviceSpecial`)},{href:`/services/extra-special`,title:n(`Common:serviceExtraSpecial`)},{title:n(`Common:onSiteServices`)},{href:`/services/special`,title:n(`Common:serviceSpecial`)},{href:`/services/extra-special`,title:n(`Common:serviceExtraSpecial`)}],title:n(`Common:services`)},{href:`https://www.google.com/maps`,icon:`Zone`,isExternalLink:!0,title:n(`Common:externalLink`)}]},currentUserText:n(`GlobalUI:currentUser`),customDrawer:{customComponent:(0,K.jsx)(`h1`,{style:{textAlign:`center`},children:n(`Common:helloDrawer`)}),icon:`Add`,status:`danger`,width:`280px;`},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:`#`,loggedInUser:`full.name@example.com`,logoutLink:`#`,logoutText:`Logout`,maxWidth:`none`,notificationsHistory:{noNotificationsText:n(`Common:noNotificationsText`),read:[{imgUrl:``,message:`The device has correctly turn off`,time:`3 days ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`3 days ago`,title:`Device is on`},{imgUrl:``,message:`The device has bean correctly added`,time:`3 days ago`,title:`A new device was added`}],readNotificationsText:n(`Common:readNotificationsText`),unread:[{imgUrl:``,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`,title:`Event Type`},{imgUrl:``,message:`The device has correctly turn off`,time:`1 min ago`,title:`Device is off`},{imgUrl:``,message:`The device has correctly turn on`,time:`6 mins ago`,title:`Device is on`},{imgUrl:``,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`,title:`Connection was interrupted`},{imgUrl:``,message:`The device has correctly turn off`,time:`3 hour ago`,title:`Device is off`}],unreadNotificationsText:n(`Common:unreadNotificationsText`)},searchPlaceholder:n(`Common:searchPlaceholder`),supportUrl:`/support`,userSubmenu:[{href:`/user/accounts`,text:n(`Common:accounts`)},{href:`/user/billing`,text:n(`Common:billing`)},{href:`/user/payments`,text:n(`Common:payments`)}],children:(0,K.jsx)(Y_,{layout:`dashboard`,children:(0,K.jsx)(fv,{layout:r,persist:!0,persistenceKey:`my_unique_key`,reverse:i,mainArea:{content:s,minSize:120},sideArea:{content:c,collapsable:!0,minSize:200,defaultCollapsed:!0,onSideAreaStateChange:o}})})})]})},tw=B.div`
  padding: 50px;
`,nw=B.div`
  margin-top: 30px;
`,rw=B.div`
  margin-top: 30px;
  margin-bottom: 60px;
`,iw=B.div`
  font-size: 18px;
  font-weight: 600;
`,aw=B.div`
  margin-top: 10px;
`,ow=e=>new Promise((t,n)=>{setTimeout(()=>{e?n(Error(`Simulated fetch failure`)):t([{id:1,title:`Mock Product 1`},{id:2,title:`Mock Product 2`},{id:3,title:`Mock Product 3`}])},1500)}),sw=()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(`default`),[u,d]=(0,_.useState)(!1),f=(0,_.useCallback)(async()=>{if(l(`default`),e||o!==null){t(!1),r(null),s(null);return}a(!0),l(`loading`),s(null);try{r(await ow(u)),t(!0),l(`default`)}catch{r(null),s(`Failed to fetch data`),l(`failure`)}finally{a(!1)}},[e,u,o]),p=(0,_.useCallback)(e=>{d(e),t(!1),r(null),s(null),l(`default`)},[]);return(0,K.jsxs)(tw,{children:[(0,K.jsx)(Ig,{title:`Switch Component Examples`,icon:`Settings`}),(0,K.jsxs)(rw,{children:[(0,K.jsx)(Ig,{title:`Uncontrolled Component`,introductionText:`This switch uses defaultChecked prop and manages its own state internally`}),(0,K.jsx)(nw,{children:(0,K.jsx)(ed,{labelText:`Toggle Switch (Uncontrolled)`,defaultChecked:!0,onChangeCallback:e=>console.log(`Uncontrolled switch changed:`,e)})})]}),(0,K.jsxs)(rw,{children:[(0,K.jsx)(Ig,{title:`Controlled Component`,introductionText:`This switch uses checked and onChangeCallback props to control its state`}),(0,K.jsx)(Hu,{labelText:`Show Fail Scenario`,htmlFor:`example1`,direction:`row`,children:(0,K.jsx)(fd,{checked:u,onChangeCallback:p},`example1`)}),(0,K.jsxs)(nw,{children:[(0,K.jsx)(ed,{labelText:`Fetch Data (Controlled)`,checked:e,onChangeCallback:f,state:c}),i&&(0,K.jsx)(`p`,{children:`Loading...`}),n&&(0,K.jsxs)(aw,{children:[(0,K.jsx)(iw,{children:`API Response`}),(0,K.jsx)(`ul`,{children:n.map(e=>(0,K.jsx)(`li`,{children:e.username||e.title},e.id))})]}),o&&(0,K.jsx)(`p`,{style:{color:`red`},children:o})]})]})]})},cw=2e3,lw=(e=()=>{},t=1e3)=>{let n=(0,_.useRef)(null),r=(0,_.useRef)(e),i=(0,_.useRef)(!1),a=(0,_.useCallback)(async()=>{n.current!==null&&(clearTimeout(n.current),n.current=null),await r.current(),i.current||(n.current=setTimeout(a,t))},[t]);(0,_.useEffect)(()=>{r.current=e},[e]),(0,_.useEffect)(()=>(a(),()=>{i.current=!0,n.current!==null&&(clearTimeout(n.current),n.current=null)}),[a])},uw=B.div`
  padding: 50px;
`,dw=B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`,fw=B.div`
  border-radius: 4px;
  border: 1px solid ${({$variant:e})=>e===`broken`?`var(--caution-8)`:`var(--success-8)`};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,pw=B.h3`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-12);
  margin: 0;
`,mw=B.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`,hw=B.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,gw=B.span`
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--grey-9);
  min-width: 88px;
`,_w=B.span`
  font-family: var(--font-data);
  font-size: 28px;
  font-weight: 600;
  color: var(--grey-12);
`,vw=B.span`
  font-family: var(--font-data);
  font-size: 14px;
  color: var(--grey-11);
`,yw=B.div`
  padding: 20px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--grey-8);
  background: var(--grey-2);
  border-radius: 3px;
`,bw=B.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`,xw=B.div`
  margin: 8px 0 24px;
  padding: 16px 20px;
  background: var(--grey-2);
  border-radius: 4px;
  border-left: 3px solid var(--primary-7);
  font-family: var(--font-data);
  font-size: 13px;
  line-height: 1.8;
  color: var(--grey-11);
`,Sw=B.p`
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
`,Cw=B.code`
  color: var(--primary-9);
  font-family: var(--font-data);
`,ww=B.span`
  color: var(--caution-9);
`,Tw=B.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 6px;
`,Ew=B.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`,Dw=B.span`
  font-weight: 600;
  color: var(--grey-12);
`,Ow=B.span`
  color: var(--grey-11);
`,kw=e=>{let[t,n]=(0,_.useState)(!1),r=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(e!==0)return n(!0),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>n(!1),Math.round(cw*1.4)),()=>{r.current&&clearTimeout(r.current)}},[e]),t},Aw=({count:e,lastPolled:t,isPolling:n})=>(0,K.jsxs)(mw,{children:[(0,K.jsxs)(hw,{children:[(0,K.jsx)(gw,{children:`Poll count`}),(0,K.jsx)(_w,{children:e})]}),(0,K.jsxs)(hw,{children:[(0,K.jsx)(gw,{children:`Last polled`}),(0,K.jsx)(vw,{children:t})]}),(0,K.jsxs)(hw,{children:[(0,K.jsx)(gw,{children:`Status`}),(0,K.jsx)(kg,{tagSize:`compact`,label:e===0?`Waiting…`:n?`Polling continuously`:`Stopped`,icon:e===0?``:n?`Success`:`BigWarning`})]})]}),jw=()=>{let[e,t]=(0,_.useState)(0),[n,r]=(0,_.useState)(`—`),i=kw(e);return lw((0,_.useCallback)(()=>{t(e=>e+1),r(new Date().toLocaleTimeString())},[]),cw),(0,K.jsx)(Aw,{count:e,lastPolled:n,isPolling:i})},Mw=()=>{let[e,t]=(0,_.useState)(0),[n,r]=(0,_.useState)(`—`),i=kw(e);return cf((0,_.useCallback)(()=>{t(e=>e+1),r(new Date().toLocaleTimeString())},[]),cw),(0,K.jsx)(Aw,{count:e,lastPolled:n,isPolling:i})},Nw=()=>{let[e,t]=(0,_.useState)(!0),[n,r]=(0,_.useState)(!0);return(0,K.jsxs)(uw,{children:[(0,K.jsx)(Ig,{title:`usePoll — StrictMode Fix`,introductionText:`Side-by-side comparison of usePoll before and after the StrictMode canceled-ref fix. In development (StrictMode active), the Before panel polls once then stops; the After panel polls continuously. Use Unmount / Remount to reset and replay.`}),(0,K.jsxs)(xw,{children:[(0,K.jsx)(Sw,{children:`⚠️ The difference is only visible in development builds with React StrictMode active. In production both panels behave identically.`}),(0,K.jsxs)(Sw,{children:[(0,K.jsx)(`strong`,{children:`React 16 & 17:`}),` StrictMode double-invokes `,(0,K.jsx)(`em`,{children:`render functions`}),` only.`,` `,(0,K.jsx)(Cw,{children:`useEffect`}),` callbacks run `,(0,K.jsx)(`strong`,{children:`once`}),` on mount. `,(0,K.jsx)(Cw,{children:`canceled.current`}),` starts as `,(0,K.jsx)(Cw,{children:`false`}),`, `,(0,K.jsx)(Cw,{children:`pollOnce()`}),` fires, the check `,(0,K.jsx)(Cw,{children:`if (!canceled.current)`}),` passes, and the chain keeps scheduling. No bug.`]}),(0,K.jsxs)(Sw,{children:[(0,K.jsx)(`strong`,{children:`React 18 & 19:`}),` StrictMode was extended to also double-invoke `,(0,K.jsx)(`em`,{children:`effects`}),` — it simulates mount → cleanup → remount to help surface bugs. The sequence becomes:`]}),(0,K.jsxs)(Tw,{children:[(0,K.jsxs)(Ew,{children:[(0,K.jsx)(Dw,{children:`1. Mount`}),(0,K.jsxs)(Ow,{children:[`→ `,(0,K.jsx)(Cw,{children:`useEffect`}),` runs → `,(0,K.jsx)(Cw,{children:`canceled.current`}),` is false → `,(0,K.jsx)(Cw,{children:`pollOnce()`}),` starts`]})]}),(0,K.jsxs)(Ew,{children:[(0,K.jsx)(Dw,{children:`2. Cleanup`}),(0,K.jsxs)(Ow,{children:[`→ `,(0,K.jsx)(Cw,{children:`canceled.current`}),` = true (timer cleared)`]})]}),(0,K.jsxs)(Ew,{children:[(0,K.jsx)(Dw,{children:`3. Remount`}),(0,K.jsxs)(Ow,{children:[`→ `,(0,K.jsx)(Cw,{children:`useEffect`}),` runs again → `,(0,K.jsx)(Cw,{children:`pollOnce()`}),` called`]})]}),(0,K.jsxs)(Ew,{children:[(0,K.jsx)(`span`,{}),(0,K.jsx)(Ow,{children:`→ callback fires (async await)`})]}),(0,K.jsxs)(Ew,{children:[(0,K.jsx)(`span`,{}),(0,K.jsxs)(Ow,{children:[`→ checks `,(0,K.jsx)(Cw,{children:`canceled.current`}),` → still true `,(0,K.jsx)(ww,{children:`← bug stops here`})]})]}),(0,K.jsxs)(Ew,{children:[(0,K.jsx)(`span`,{}),(0,K.jsx)(Ow,{children:`→ never schedules next poll`})]})]})]}),(0,K.jsxs)(dw,{children:[(0,K.jsxs)(fw,{$variant:`broken`,children:[(0,K.jsx)(pw,{children:`Before — broken pattern`}),(0,K.jsxs)(bw,{children:[(0,K.jsx)(Cw,{children:`canceled.current`}),` is never reset on remount. In StrictMode the cleanup sets it to `,(0,K.jsx)(Cw,{children:`true`}),`; on remount`,` `,(0,K.jsx)(Cw,{children:`pollOnce()`}),` runs once, sees `,(0,K.jsx)(Cw,{children:`canceled === true`}),`, and never schedules the next poll.`]}),e?(0,K.jsx)(jw,{}):(0,K.jsx)(yw,{children:`Component unmounted — click Remount to replay`}),(0,K.jsx)(su,{design:`secondary`,size:`small`,onClick:()=>t(e=>!e),children:e?`Unmount`:`Remount`})]}),(0,K.jsxs)(fw,{$variant:`fixed`,children:[(0,K.jsx)(pw,{children:`After — fixed pattern`}),(0,K.jsxs)(bw,{children:[(0,K.jsx)(Cw,{children:`canceled.current = false`}),` is set at the top of the effect, before `,(0,K.jsx)(Cw,{children:`pollOnce()`}),` is called. The StrictMode remount resets the flag and polling continues on schedule.`]}),n?(0,K.jsx)(Mw,{}):(0,K.jsx)(yw,{children:`Component unmounted — click Remount to replay`}),(0,K.jsx)(su,{design:`secondary`,size:`small`,onClick:()=>r(e=>!e),children:n?`Unmount`:`Remount`})]})]}),(0,K.jsx)(ax,{children:`UsePollTestPage.tsx`})]})},Pw=()=>(0,K.jsx)(Gc,{children:(0,K.jsxs)(ac,{children:[(0,K.jsx)(rc,{path:`/`,element:(0,K.jsx)(wx,{})}),(0,K.jsx)(rc,{path:`/line`,element:(0,K.jsx)(lx,{})}),(0,K.jsx)(rc,{path:`/linevideo`,element:(0,K.jsx)(hx,{})}),(0,K.jsx)(rc,{path:`/linertc`,element:(0,K.jsx)(fx,{})}),(0,K.jsx)(rc,{path:`/login`,element:(0,K.jsx)(Jx,{onLogin:()=>{}})}),(0,K.jsx)(rc,{path:`/forms`,element:(0,K.jsx)(sx,{})}),(0,K.jsx)(rc,{path:`/table`,element:(0,K.jsx)(AC,{})}),(0,K.jsx)(rc,{path:`/customdrawer`,element:(0,K.jsx)(BC,{})}),(0,K.jsx)(rc,{path:`/tabs`,element:(0,K.jsx)(GC,{})}),(0,K.jsx)(rc,{path:`/customalert`,element:(0,K.jsx)(ZC,{})}),(0,K.jsx)(rc,{path:`/globalUI`,element:(0,K.jsx)(JC,{})}),(0,K.jsx)(rc,{path:`/layouts`,element:(0,K.jsx)($C,{})}),(0,K.jsx)(rc,{path:`/split-layouts`,element:(0,K.jsx)(ew,{})}),(0,K.jsx)(rc,{path:`/switch-test`,element:(0,K.jsx)(sw,{})}),(0,K.jsx)(rc,{path:`/usepoll-test`,element:(0,K.jsx)(Nw,{})})]})}),Fw={madeby:`Powered By:`,pageTitle:`Welcome`,badgeTitle:`Guest`,share:`Share`,home:`Home`,exampleAction:`Example Action`,pageIntroduction:`Thanks for using our UI library.`,example1:`Example 1`,example2:`Example 2`,accountOptions:`Account Options`,aboutUs:`About us`,team:`Team`,contact:`Contact`,company:`Company`,tableExample:`Table Example`,externalLink:`External link`,onlineServices:`Online Services`,serviceCustom:`Service custom`,serviceSpecial:`Service special`,serviceExtraSpecial:`Service Extra Special`,onSiteServices:`On site Services`,services:`Services`,helloDrawer:`Example Drawer`,noNotificationsText:`No new notifications`,readNotificationsText:`Read`,unreadNotificationsText:`UnRead`,searchPlaceholder:`Search area names, etc.`,accounts:`Accounts`,billing:`Billing`,payments:`Payments`,descriptionTab1:`The below line uses the FullWidthContentBlock component to break out of the layout and span the full width of the browser.`,titleTab2:`Content Tab 2`,titleTab3:`Content Tab 3`,formName:`Name`,formDepartment:`Department`,userDrawerTextP1:`Custom content can be injected under the user menu like this.`,userDrawerTextP2:`The styling for this is left to you to include, keeping it flexible.`,filterBar:{title:`Filters:`,resultTemplate:`Showing Results ([TOTAL_RESULTS]):`,clearAll:`Clear All`,status:`Status`,reset:`Reset`,cancel:`Cancel`,close:`Close`,apply:`Apply`,statusSuccess:`Success`,statusWarning:`Warning`,statusError:`Error`,statusNeutral:`Neutral`,switchLang:`Switch to Japanese`,tip:`Tip: select a Status filter, then switch language — the selected filter tag label updates.`},breadcrumbs:{back:`Back`,firstText:`Examples`,secondText:`Two`,thirdText:`Third`,fourText:`Four`,fiveText:`Five`}},Iw={madeby:`Powered By:`,pageTitle:`ようこそ`,badgeTitle:`ゲスト`,share:`共有`,home:`ホーム`,example1:`サンプル 1`,example2:`サンプル 2`,exampleAction:`例1のアクション`,pageIntroduction:`UIライブラリのご利用ありがとうございます。`,accountOptions:`アカウントオプション`,aboutUs:`会社概要`,team:`チーム`,contact:`コンタクト`,company:`会社概要`,tableExample:`テーブル例`,externalLink:`外部リンク`,onlineServices:`オンラインサービス`,serviceCustom:`サービスカスタム`,serviceSpecial:`サービススペシャル`,serviceExtraSpecial:`特別なサービス`,onSiteServices:`オンサイトサービス`,services:`サービス`,helloDrawer:`例ドラウェ`,noNotificationsText:`新着通知なし`,readNotificationsText:`既読通知`,unreadNotificationsText:`未読通知`,searchPlaceholder:`検索エリア名など`,accounts:`アカウント一覧`,billing:`請求`,payments:`支払い`,descriptionTab1:`以下の行では、FullWidthContentBlock コンポーネントを使用してレイアウトの制約を解除し、ブラウザーの全幅に広げています。`,titleTab2:`タブ2の内容`,titleTab3:`タブ3の内容`,formName:`名`,formDepartment:`部門`,userDrawerTextP1:`カスタムコンテンツは、このようにユーザーメニューの下に挿入することができます`,userDrawerTextP2:`スタイリングは自由に設定できます`,filterBar:{title:`フィルター:`,resultTemplate:`結果 ([TOTAL_RESULTS]):`,clearAll:`すべてクリア`,status:`ステータス`,reset:`リセット`,cancel:`キャンセル`,close:`閉じる`,apply:`適用`,statusSuccess:`成功`,statusWarning:`警告`,statusError:`エラー`,statusNeutral:`中立`,switchLang:`英語に切替`,tip:`ヒント：ステータスフィルターを選択してから言語を切り替えると、選択中のタグのラベルが更新されます。`},breadcrumbs:{back:`戻る`,firstText:`実例`,secondText:`第2`,thirdText:`第3`,fourText:`第4`,fiveText:`第5`}},Lw={login:`Login`,logout:`Logout`,currentUser:`Current User`,keepOpenText:`Keep Open`,autoHideText:`Auto-Hide`,supportText:`Help & Support`,noNotificationsText:`No new notifications`,readNotificationsText:`Read`,unreadNotificationsText:`UnRead`,theme:{darkMode:`DARK MODE`,lightMode:`LIGHT MODE`,switchTheme:`SWITCH THEME`,en:`English`,ja:`Japanese`}},Rw={login:`ログイン`,logout:`ログアウト`,currentUser:`現在のユーザー`,keepOpenText:`開いた状態を維持`,autoHideText:`自動で隠す`,supportText:`ヘルプとサポート`,noNotificationsText:`新着通知なし`,readNotificationsText:`既読通知`,unreadNotificationsText:`未読通知`,theme:{darkMode:`ダークモード`,lightMode:`ライトモード`,switchTheme:`テーマの変更`,en:`英語`,ja:`日本語`}},{slice:zw,forEach:Bw}=[];function Vw(e){return Bw.call(zw.call(arguments,1),t=>{if(t)for(let n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Hw(e){return typeof e==`string`?[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e)):!1}var Uw=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Ww=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:`/`},r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){let e=n.maxAge-0;if(Number.isNaN(e))throw Error(`maxAge should be a Number`);r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!Uw.test(n.domain))throw TypeError(`option domain is invalid`);r+=`; Domain=${n.domain}`}if(n.path){if(!Uw.test(n.path))throw TypeError(`option path is invalid`);r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!=`function`)throw TypeError(`option expires is invalid`);r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+=`; HttpOnly`),n.secure&&(r+=`; Secure`),n.sameSite)switch(typeof n.sameSite==`string`?n.sameSite.toLowerCase():n.sameSite){case!0:r+=`; SameSite=Strict`;break;case`lax`:r+=`; SameSite=Lax`;break;case`strict`:r+=`; SameSite=Strict`;break;case`none`:r+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return n.partitioned&&(r+=`; Partitioned`),r},Gw={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:`/`,sameSite:`strict`};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Ww(e,t,i)},read(e){let t=`${e}=`,n=document.cookie.split(`;`);for(let e=0;e<n.length;e++){let r=n[e];for(;r.charAt(0)===` `;)r=r.substring(1,r.length);if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},remove(e,t){this.create(e,``,-1,t)}},Kw={name:`cookie`,lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<`u`)return Gw.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:a}=t;n&&typeof document<`u`&&Gw.create(n,e,r,i,a)}},qw={name:`querystring`,lookup(e){let{lookupQuerystring:t}=e,n;if(typeof window<`u`){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf(`?`)>-1&&(e=window.location.hash.substring(window.location.hash.indexOf(`?`)));let r=e.substring(1).split(`&`);for(let e=0;e<r.length;e++){let i=r[e].indexOf(`=`);i>0&&r[e].substring(0,i)===t&&(n=r[e].substring(i+1))}}return n}},Jw={name:`hash`,lookup(e){let{lookupHash:t,lookupFromHashIndex:n}=e,r;if(typeof window<`u`){let{hash:e}=window.location;if(e&&e.length>2){let i=e.substring(1);if(t){let e=i.split(`&`);for(let n=0;n<e.length;n++){let i=e[n].indexOf(`=`);i>0&&e[n].substring(0,i)===t&&(r=e[n].substring(i+1))}}if(r)return r;if(!r&&n>-1){let t=e.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof n==`number`?n:0]?.replace(`/`,``):void 0}}}return r}},Yw=null,Xw=()=>{if(Yw!==null)return Yw;try{if(Yw=typeof window<`u`&&window.localStorage!==null,!Yw)return!1;let e=`i18next.translate.boo`;window.localStorage.setItem(e,`foo`),window.localStorage.removeItem(e)}catch{Yw=!1}return Yw},Zw={name:`localStorage`,lookup(e){let{lookupLocalStorage:t}=e;if(t&&Xw())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Xw()&&window.localStorage.setItem(n,e)}},Qw=null,$w=()=>{if(Qw!==null)return Qw;try{if(Qw=typeof window<`u`&&window.sessionStorage!==null,!Qw)return!1;let e=`i18next.translate.boo`;window.sessionStorage.setItem(e,`foo`),window.sessionStorage.removeItem(e)}catch{Qw=!1}return Qw},eT={name:`sessionStorage`,lookup(e){let{lookupSessionStorage:t}=e;if(t&&$w())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&$w()&&window.sessionStorage.setItem(n,e)}},tT={name:`navigator`,lookup(e){let t=[];if(typeof navigator<`u`){let{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let n=0;n<e.length;n++)t.push(e[n]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},nT={name:`htmlTag`,lookup(e){let{htmlTag:t}=e,n,r=t||(typeof document<`u`?document.documentElement:null);return r&&typeof r.getAttribute==`function`&&(n=r.getAttribute(`lang`)),n}},rT={name:`path`,lookup(e){let{lookupFromPathIndex:t}=e;if(typeof window>`u`)return;let n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(Array.isArray(n))return n[typeof t==`number`?t:0]?.replace(`/`,``)}},iT={name:`subdomain`,lookup(e){let{lookupFromSubdomainIndex:t}=e,n=typeof t==`number`?t+1:1,r=typeof window<`u`&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}},aT=!1;try{document.cookie,aT=!0}catch{}var oT=[`querystring`,`cookie`,`localStorage`,`sessionStorage`,`navigator`,`htmlTag`];aT||oT.splice(1,1);var sT=()=>({order:oT,lookupQuerystring:`lng`,lookupCookie:`i18next`,lookupLocalStorage:`i18nextLng`,lookupSessionStorage:`i18nextLng`,caches:[`localStorage`],excludeCacheFor:[`cimode`],convertDetectedLanguage:e=>e}),cT=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type=`languageDetector`,this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Vw(t,this.options||{},sT()),typeof this.options.convertDetectedLanguage==`string`&&this.options.convertDetectedLanguage.indexOf(`15897`)>-1&&(this.options.convertDetectedLanguage=e=>e.replace(`-`,`_`)),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Kw),this.addDetector(qw),this.addDetector(Zw),this.addDetector(eT),this.addDetector(tT),this.addDetector(nT),this.addDetector(rT),this.addDetector(iT),this.addDetector(Jw)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&typeof n==`string`&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>e!=null&&!Hw(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}};cT.type=`languageDetector`;var lT={en:{Common:Fw,GlobalUI:Lw},ja:{Common:Iw,GlobalUI:Rw}};JS.use(cT).use(pC).init({resources:lT,fallbackLng:`ja`,lng:localStorage.getItem(`language`)||navigator.language,keySeparator:`.`,interpolation:{escapeValue:!1},defaultNS:`GlobalUI`,ns:[`Common`,`GlobalUI`]});var uT=`/scorer-ui-kit/pr/616/assets/Lato3Upr3M-VF-BS60sTW_.woff2`,dT=`/scorer-ui-kit/pr/616/assets/Lato3Ita3M-VF-C8KUZ9bO.woff2`,fT=Ln`

@font-face {
    font-family: "Lato";
    src: url(${uT}) format("woff2 supports variations"),
        url(${uT}) format("woff2-variations");
    font-weight: 100 900;
  }

  @font-face {
    font-family: "Lato";
    font-style: italic;
    src: url(${dT}) format("woff2 supports variations"),
        url(${dT}) format("woff2-variations");
    font-weight: 100 900;
  }


  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Thin-BQKHXPxk.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-ThinItalic-DxjjXtaw.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-ExtraLight-ao5tsxV8.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-ExtraLightItalic-6yY0Bdrq.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Light-T7gpP2n1.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-LightItalic-f797-kPY.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Regular-DOtBvWqV.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Italic-bzXvo1D-.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Medium-CVfjkY1Z.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-MediumItalic-BEsxtezO.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-SemiBold-BVVp1RRO.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-SemiBoldItalic-nEmp39Cb.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Bold-CtnTlBZA.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-ExtraBold-C9ejQABg.woff`}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url(${`/scorer-ui-kit/pr/616/assets/Monorale-Black-COwa-Bp6.woff`}) format('woff');
    font-display: fallback;
  }

`,pT=Ln`
  ${Nl};
`,mT=Ln`
  .light-theme {
      /* feedback */

    --success: #728C69;
    --warning: #D9A13C;

  }

  .dark-theme {
      /* feedback */
    --success: #5DBB63;
    --warning: #FFDC00;
  }
`;jl.custom.lines.weird={label:{fill:`#fff`},contrastLine:{stroke:`transparent;`},highlightLine:{stroke:`transparent;`},grabHandle:{fill:`transparent;`,stroke:`transparent;`},point:{fill:`hsla(205deg, 45%, 90%, 100%)`},grabHandleText:{fill:`transparent`},grabHandleContrast:{fill:`transparent`},handleBase:{fill:`transparent`},handleRingLayer:{stroke:`hsla(205deg, 100%, 89%, 100%);`},handleReactiveFill:{stroke:`transparent;`},handleReactiveRing:{stroke:`transparent;`},handleContrastLayer:{stroke:`transparent;`},stopStart:{stopColor:` hsla(0, 100%, 15%, 35%);`},stopEnd:{stopColor:`hsla(0, 100%, 15%, 0%);`}},(0,v.createRoot)(document.getElementById(`root`),{onUncaughtError:(e,t)=>{console.error(`Uncaught render error:`,e,t.componentStack)}}).render((0,K.jsx)(_.StrictMode,{children:(0,K.jsx)(()=>(Cf(),(0,K.jsx)(On,{theme:jl,children:(0,K.jsx)(rf,{children:(0,K.jsxs)(sf,{children:[(0,K.jsx)(Pw,{}),(0,K.jsx)(fT,{}),(0,K.jsx)(Ml,{}),(0,K.jsx)(mT,{}),(0,K.jsx)(pT,{})]})})})),{})}));
//# sourceMappingURL=index-4gZvUSew.js.map