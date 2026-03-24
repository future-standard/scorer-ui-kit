(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qh={exports:{}},cs={};var Uv;function Fw(){if(Uv)return cs;Uv=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,s,u){var f=null;if(u!==void 0&&(f=""+u),s.key!==void 0&&(f=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:e,type:o,key:f,ref:s!==void 0?s:null,props:u}}return cs.Fragment=r,cs.jsx=a,cs.jsxs=a,cs}var Gv;function Yw(){return Gv||(Gv=1,Qh.exports=Fw()),Qh.exports}var c=Yw(),Kh={exports:{}},je={};var Pv;function Vw(){if(Pv)return je;Pv=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=k&&O[k]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function $(O,W,Q){this.props=O,this.context=W,this.refs=T,this.updater=Q||S}$.prototype.isReactComponent={},$.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=$.prototype;function N(O,W,Q){this.props=O,this.context=W,this.refs=T,this.updater=Q||S}var z=N.prototype=new L;z.constructor=N,E(z,$.prototype),z.isPureReactComponent=!0;var _=Array.isArray;function H(){}var j={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function P(O,W,Q){var le=Q.ref;return{$$typeof:e,type:O,key:W,ref:le!==void 0?le:null,props:Q}}function V(O,W){return P(O.type,W,O.props)}function U(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function Z(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Q){return W[Q]})}var re=/\/+/g;function X(O,W){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):W.toString(36)}function te(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(W){O.status==="pending"&&(O.status="fulfilled",O.value=W)},function(W){O.status==="pending"&&(O.status="rejected",O.reason=W)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,W,Q,le,he){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case e:case r:fe=!0;break;case y:return fe=O._init,B(fe(O._payload),W,Q,le,he)}}if(fe)return he=he(O),fe=le===""?"."+X(O,0):le,_(he)?(Q="",fe!=null&&(Q=fe.replace(re,"$&/")+"/"),B(he,W,Q,"",function(Te){return Te})):he!=null&&(U(he)&&(he=V(he,Q+(he.key==null||O&&O.key===he.key?"":(""+he.key).replace(re,"$&/")+"/")+fe)),W.push(he)),1;fe=0;var ve=le===""?".":le+":";if(_(O))for(var me=0;me<O.length;me++)le=O[me],pe=ve+X(le,me),fe+=B(le,W,Q,pe,he);else if(me=C(O),typeof me=="function")for(O=me.call(O),me=0;!(le=O.next()).done;)le=le.value,pe=ve+X(le,me++),fe+=B(le,W,Q,pe,he);else if(pe==="object"){if(typeof O.then=="function")return B(te(O),W,Q,le,he);throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return fe}function q(O,W,Q){if(O==null)return O;var le=[],he=0;return B(O,le,"","",function(pe){return W.call(Q,pe,he++)}),le}function ae(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(Q){(O._status===0||O._status===-1)&&(O._status=1,O._result=Q)},function(Q){(O._status===0||O._status===-1)&&(O._status=2,O._result=Q)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var ie=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},de={map:q,forEach:function(O,W,Q){q(O,function(){W.apply(this,arguments)},Q)},count:function(O){var W=0;return q(O,function(){W++}),W},toArray:function(O){return q(O,function(W){return W})||[]},only:function(O){if(!U(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return je.Activity=v,je.Children=de,je.Component=$,je.Fragment=a,je.Profiler=s,je.PureComponent=N,je.StrictMode=o,je.Suspense=m,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,je.__COMPILER_RUNTIME={__proto__:null,c:function(O){return j.H.useMemoCache(O)}},je.cache=function(O){return function(){return O.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(O,W,Q){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var le=E({},O.props),he=O.key;if(W!=null)for(pe in W.key!==void 0&&(he=""+W.key),W)!A.call(W,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&W.ref===void 0||(le[pe]=W[pe]);var pe=arguments.length-2;if(pe===1)le.children=Q;else if(1<pe){for(var fe=Array(pe),ve=0;ve<pe;ve++)fe[ve]=arguments[ve+2];le.children=fe}return P(O.type,he,le)},je.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},je.createElement=function(O,W,Q){var le,he={},pe=null;if(W!=null)for(le in W.key!==void 0&&(pe=""+W.key),W)A.call(W,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(he[le]=W[le]);var fe=arguments.length-2;if(fe===1)he.children=Q;else if(1<fe){for(var ve=Array(fe),me=0;me<fe;me++)ve[me]=arguments[me+2];he.children=ve}if(O&&O.defaultProps)for(le in fe=O.defaultProps,fe)he[le]===void 0&&(he[le]=fe[le]);return P(O,pe,he)},je.createRef=function(){return{current:null}},je.forwardRef=function(O){return{$$typeof:p,render:O}},je.isValidElement=U,je.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:ae}},je.memo=function(O,W){return{$$typeof:x,type:O,compare:W===void 0?null:W}},je.startTransition=function(O){var W=j.T,Q={};j.T=Q;try{var le=O(),he=j.S;he!==null&&he(Q,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(H,ie)}catch(pe){ie(pe)}finally{W!==null&&Q.types!==null&&(W.types=Q.types),j.T=W}},je.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},je.use=function(O){return j.H.use(O)},je.useActionState=function(O,W,Q){return j.H.useActionState(O,W,Q)},je.useCallback=function(O,W){return j.H.useCallback(O,W)},je.useContext=function(O){return j.H.useContext(O)},je.useDebugValue=function(){},je.useDeferredValue=function(O,W){return j.H.useDeferredValue(O,W)},je.useEffect=function(O,W){return j.H.useEffect(O,W)},je.useEffectEvent=function(O){return j.H.useEffectEvent(O)},je.useId=function(){return j.H.useId()},je.useImperativeHandle=function(O,W,Q){return j.H.useImperativeHandle(O,W,Q)},je.useInsertionEffect=function(O,W){return j.H.useInsertionEffect(O,W)},je.useLayoutEffect=function(O,W){return j.H.useLayoutEffect(O,W)},je.useMemo=function(O,W){return j.H.useMemo(O,W)},je.useOptimistic=function(O,W){return j.H.useOptimistic(O,W)},je.useReducer=function(O,W,Q){return j.H.useReducer(O,W,Q)},je.useRef=function(O){return j.H.useRef(O)},je.useState=function(O){return j.H.useState(O)},je.useSyncExternalStore=function(O,W,Q){return j.H.useSyncExternalStore(O,W,Q)},je.useTransition=function(){return j.H.useTransition()},je.version="19.2.4",je}var qv;function to(){return qv||(qv=1,Kh.exports=Vw()),Kh.exports}var h=to();const Ye=Sd(h);var Jh={exports:{}},us={},e0={exports:{}},t0={};var Wv;function Zw(){return Wv||(Wv=1,(function(e){function r(B,q){var ae=B.length;B.push(q);e:for(;0<ae;){var ie=ae-1>>>1,de=B[ie];if(0<s(de,q))B[ie]=q,B[ae]=de,ae=ie;else break e}}function a(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var q=B[0],ae=B.pop();if(ae!==q){B[0]=ae;e:for(var ie=0,de=B.length,O=de>>>1;ie<O;){var W=2*(ie+1)-1,Q=B[W],le=W+1,he=B[le];if(0>s(Q,ae))le<de&&0>s(he,Q)?(B[ie]=he,B[le]=ae,ie=le):(B[ie]=Q,B[W]=ae,ie=W);else if(le<de&&0>s(he,ae))B[ie]=he,B[le]=ae,ie=le;else break e}}return q}function s(B,q){var ae=B.sortIndex-q.sortIndex;return ae!==0?ae:B.id-q.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var m=[],x=[],y=1,v=null,k=3,C=!1,S=!1,E=!1,T=!1,$=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(B){for(var q=a(x);q!==null;){if(q.callback===null)o(x);else if(q.startTime<=B)o(x),q.sortIndex=q.expirationTime,r(m,q);else break;q=a(x)}}function _(B){if(E=!1,z(B),!S)if(a(m)!==null)S=!0,H||(H=!0,Z());else{var q=a(x);q!==null&&te(_,q.startTime-B)}}var H=!1,j=-1,A=5,P=-1;function V(){return T?!0:!(e.unstable_now()-P<A)}function U(){if(T=!1,H){var B=e.unstable_now();P=B;var q=!0;try{e:{S=!1,E&&(E=!1,L(j),j=-1),C=!0;var ae=k;try{t:{for(z(B),v=a(m);v!==null&&!(v.expirationTime>B&&V());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,k=v.priorityLevel;var de=ie(v.expirationTime<=B);if(B=e.unstable_now(),typeof de=="function"){v.callback=de,z(B),q=!0;break t}v===a(m)&&o(m),z(B)}else o(m);v=a(m)}if(v!==null)q=!0;else{var O=a(x);O!==null&&te(_,O.startTime-B),q=!1}}break e}finally{v=null,k=ae,C=!1}q=void 0}}finally{q?Z():H=!1}}}var Z;if(typeof N=="function")Z=function(){N(U)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,X=re.port2;re.port1.onmessage=U,Z=function(){X.postMessage(null)}}else Z=function(){$(U,0)};function te(B,q){j=$(function(){B(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_next=function(B){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var ae=k;k=q;try{return B()}finally{k=ae}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=k;k=B;try{return q()}finally{k=ae}},e.unstable_scheduleCallback=function(B,q,ae){var ie=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ie+ae:ie):ae=ie,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ae+de,B={id:y++,callback:q,priorityLevel:B,startTime:ae,expirationTime:de,sortIndex:-1},ae>ie?(B.sortIndex=ae,r(x,B),a(m)===null&&B===a(x)&&(E?(L(j),j=-1):E=!0,te(_,ae-ie))):(B.sortIndex=de,r(m,B),S||C||(S=!0,H||(H=!0,Z()))),B},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(B){var q=k;return function(){var ae=k;k=q;try{return B.apply(this,arguments)}finally{k=ae}}}})(t0)),t0}var Fv;function Xw(){return Fv||(Fv=1,e0.exports=Zw()),e0.exports}var n0={exports:{}},Xt={};var Yv;function Qw(){if(Yv)return Xt;Yv=1;var e=to();function r(m){var x="https://react.dev/errors/"+m;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,x,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:x,implementation:y}}var f=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,x){if(m==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Xt.createPortal=function(m,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return u(m,x,null,y)},Xt.flushSync=function(m){var x=f.T,y=o.p;try{if(f.T=null,o.p=2,m)return m()}finally{f.T=x,o.p=y,o.d.f()}},Xt.preconnect=function(m,x){typeof m=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(m,x))},Xt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Xt.preinit=function(m,x){if(typeof m=="string"&&x&&typeof x.as=="string"){var y=x.as,v=p(y,x.crossOrigin),k=typeof x.integrity=="string"?x.integrity:void 0,C=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?o.d.S(m,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:k,fetchPriority:C}):y==="script"&&o.d.X(m,{crossOrigin:v,integrity:k,fetchPriority:C,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Xt.preinitModule=function(m,x){if(typeof m=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=p(x.as,x.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(m)},Xt.preload=function(m,x){if(typeof m=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,v=p(y,x.crossOrigin);o.d.L(m,y,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Xt.preloadModule=function(m,x){if(typeof m=="string")if(x){var y=p(x.as,x.crossOrigin);o.d.m(m,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(m)},Xt.requestFormReset=function(m){o.d.r(m)},Xt.unstable_batchedUpdates=function(m,x){return m(x)},Xt.useFormState=function(m,x,y){return f.H.useFormState(m,x,y)},Xt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xt.version="19.2.4",Xt}var Vv;function yg(){if(Vv)return n0.exports;Vv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),n0.exports=Qw(),n0.exports}var Zv;function Kw(){if(Zv)return us;Zv=1;var e=Xw(),r=to(),a=yg();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(o(188))}function x(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,l=n;;){var d=i.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===i)return m(d),t;if(g===l)return m(d),n;g=g.sibling}throw Error(o(188))}if(i.return!==l.return)i=d,l=g;else{for(var w=!1,M=d.child;M;){if(M===i){w=!0,i=d,l=g;break}if(M===l){w=!0,l=d,i=g;break}M=M.sibling}if(!w){for(M=g.child;M;){if(M===i){w=!0,i=g,l=d;break}if(M===l){w=!0,l=g,i=d;break}M=M.sibling}if(!w)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,k=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case $:return"Profiler";case T:return"StrictMode";case _:return"Suspense";case H:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case N:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var te=Array.isArray,B=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ie=[],de=-1;function O(t){return{current:t}}function W(t){0>de||(t.current=ie[de],ie[de]=null,de--)}function Q(t,n){de++,ie[de]=t.current,t.current=n}var le=O(null),he=O(null),pe=O(null),fe=O(null);function ve(t,n){switch(Q(pe,n),Q(he,t),Q(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=uv(n),t=dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(le),Q(le,t)}function me(){W(le),W(he),W(pe)}function Te(t){t.memoizedState!==null&&Q(fe,t);var n=le.current,i=dv(n,t.type);n!==i&&(Q(he,t),Q(le,i))}function pt(t){he.current===t&&(W(le),W(he)),fe.current===t&&(W(fe),is._currentValue=ae)}var ut,mt;function Dn(t){if(ut===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",mt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+mt}var si=!1;function en(t,n){if(!t||si)return"";si=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(ne){var ee=ne}Reflect.construct(t,[],ce)}else{try{ce.call()}catch(ne){ee=ne}t.call(ce.prototype)}}else{try{throw Error()}catch(ne){ee=ne}(ce=t())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(ne){if(ne&&ee&&typeof ne.stack=="string")return[ne.stack,ee.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),w=g[0],M=g[1];if(w&&M){var I=w.split(`
`),J=M.split(`
`);for(d=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;d<J.length&&!J[d].includes("DetermineComponentFrameRoot");)d++;if(l===I.length||d===J.length)for(l=I.length-1,d=J.length-1;1<=l&&0<=d&&I[l]!==J[d];)d--;for(;1<=l&&0<=d;l--,d--)if(I[l]!==J[d]){if(l!==1||d!==1)do if(l--,d--,0>d||I[l]!==J[d]){var oe=`
`+I[l].replace(" at new "," at ");return t.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",t.displayName)),oe}while(1<=l&&0<=d);break}}}finally{si=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Dn(i):""}function Rr(t,n){switch(t.tag){case 26:case 27:case 5:return Dn(t.type);case 16:return Dn("Lazy");case 13:return t.child!==n&&n!==null?Dn("Suspense Fallback"):Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 15:return en(t.type,!1);case 11:return en(t.type.render,!1);case 1:return en(t.type,!0);case 31:return Dn("Activity");default:return""}}function vr(t){try{var n="",i=null;do n+=Rr(t,i),i=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var _n=Object.prototype.hasOwnProperty,Rn=e.unstable_scheduleCallback,Wt=e.unstable_cancelCallback,Pd=e.unstable_shouldYield,qd=e.unstable_requestPaint,tn=e.unstable_now,Wd=e.unstable_getCurrentPriorityLevel,sc=e.unstable_ImmediatePriority,ci=e.unstable_UserBlockingPriority,ba=e.unstable_NormalPriority,cc=e.unstable_LowPriority,xn=e.unstable_IdlePriority,uc=e.log,dc=e.unstable_setDisableYieldValue,ui=null,Ft=null;function yn(t){if(typeof uc=="function"&&dc(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(ui,t)}catch{}}var Yt=Math.clz32?Math.clz32:Nr,fc=Math.log,Fd=Math.LN2;function Nr(t){return t>>>=0,t===0?32:31-(fc(t)/Fd|0)|0}var di=256,ao=262144,io=4194304;function Kn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xr(t,n,i){var l=t.pendingLanes;if(l===0)return 0;var d=0,g=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var M=l&134217727;return M!==0?(l=M&~g,l!==0?d=Kn(l):(w&=M,w!==0?d=Kn(w):i||(i=M&~t,i!==0&&(d=Kn(i))))):(M=l&~g,M!==0?d=Kn(M):w!==0?d=Kn(w):i||(i=l&~t,i!==0&&(d=Kn(i)))),d===0?0:n!==0&&n!==d&&(n&g)===0&&(g=d&-d,i=n&-n,g>=i||g===32&&(i&4194048)!==0)?n:d}function Hr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function vl(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(){var t=io;return io<<=1,(io&62914560)===0&&(io=4194304),t}function Br(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function fi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yd(t,n,i,l,d,g){var w=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var M=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(i=w&~i;0<i;){var oe=31-Yt(i),ce=1<<oe;M[oe]=0,I[oe]=-1;var ee=J[oe];if(ee!==null)for(J[oe]=null,oe=0;oe<ee.length;oe++){var ne=ee[oe];ne!==null&&(ne.lane&=-536870913)}i&=~ce}l!==0&&hc(t,l,0),g!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=g&~(w&~n))}function hc(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Yt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|i&261930}function gc(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var l=31-Yt(i),d=1<<l;d&n|t[l]&n&&(t[l]|=n),i&=~d}}function pc(t,n){var i=n&-n;return i=(i&42)!==0?1:lo(i),(i&(t.suspendedLanes|n))!==0?0:i}function lo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function hi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yr(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Dv(t.type))}function mc(t,n){var i=q.p;try{return q.p=t,n()}finally{q.p=i}}var br=Math.random().toString(36).slice(2),$t="__reactFiber$"+br,Vt="__reactProps$"+br,wa="__reactContainer$"+br,bn="__reactEvents$"+br,Vd="__reactListeners$"+br,Zd="__reactHandles$"+br,vc="__reactResources$"+br,gi="__reactMarker$"+br;function xl(t){delete t[$t],delete t[Vt],delete t[bn],delete t[Vd],delete t[Zd]}function sn(t){var n=t[$t];if(n)return n;for(var i=t.parentNode;i;){if(n=i[wa]||i[$t]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=xv(t);t!==null;){if(i=t[$t])return i;t=xv(t)}return n}t=i,i=t.parentNode}return null}function Sa(t){if(t=t[$t]||t[wa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function pi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function Ca(t){var n=t[vc];return n||(n=t[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function wt(t){t[gi]=!0}var xc=new Set,mi={};function Ir(t,n){ka(t,n),ka(t+"Capture",n)}function ka(t,n){for(mi[t]=n,t=0;t<n.length;t++)xc.add(n[t])}var wr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yc={},bc={};function Xd(t){return _n.call(bc,t)?!0:_n.call(yc,t)?!1:wr.test(t)?bc[t]=!0:(yc[t]=!0,!1)}function so(t,n,i){if(Xd(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function co(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function Jn(t,n,i,l){if(l===null)t.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+l)}}function Nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wc(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vi(t,n,i){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(w){i=""+w,g.call(this,w)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(w){i=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function uo(t){if(!t._valueTracker){var n=wc(t)?"checked":"value";t._valueTracker=vi(t,n,""+t[n])}}function yl(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return t&&(l=wc(t)?t.checked?"true":"false":t.value),t=l,t!==i?(n.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qd=/[\n"\\]/g;function cn(t){return t.replace(Qd,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bl(t,n,i,l,d,g,w,M){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),n!=null?w==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Nt(n)):t.value!==""+Nt(n)&&(t.value=""+Nt(n)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),n!=null?Sl(t,w,Nt(n)):i!=null?Sl(t,w,Nt(i)):l!=null&&t.removeAttribute("value"),d==null&&g!=null&&(t.defaultChecked=!!g),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.name=""+Nt(M):t.removeAttribute("name")}function wl(t,n,i,l,d,g,w,M){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),n!=null||i!=null){if(!(g!=="submit"&&g!=="reset"||n!=null)){uo(t);return}i=i!=null?""+Nt(i):"",n=n!=null?""+Nt(n):i,M||n===t.value||(t.value=n),t.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=M?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w),uo(t)}function Sl(t,n,i){n==="number"&&fo(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Ea(t,n,i,l){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&l&&(t[i].defaultSelected=!0)}else{for(i=""+Nt(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Cl(t,n,i){if(n!=null&&(n=""+Nt(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Nt(i):""}function xi(t,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(o(92));if(te(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=Nt(n),t.defaultValue=i,l=t.textContent,l===i&&l!==""&&l!==null&&(t.value=l),uo(t)}function wn(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Kd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sc(t,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,i):typeof i!="number"||i===0||Kd.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function er(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&i[d]!==l&&Sc(t,d,l)}else for(var g in n)n.hasOwnProperty(g)&&Sc(t,g,n[g])}function kl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ef=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ho(t){return ef.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tr(){}var nr=null;function go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ja=null,rr=null;function Cc(t){var n=Sa(t);if(n&&(t=n.stateNode)){var i=t[Vt]||null;e:switch(t=n.stateNode,n.type){case"input":if(bl(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==t&&l.form===t.form){var d=l[Vt]||null;if(!d)throw Error(o(90));bl(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===t.form&&yl(l)}break e;case"textarea":Cl(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Ea(t,!!i.multiple,n,!1)}}}var yi=!1;function kc(t,n,i){if(yi)return t(n,i);yi=!0;try{var l=t(n);return l}finally{if(yi=!1,(ja!==null||rr!==null)&&(su(),ja&&(n=ja,t=rr,rr=ja=null,Cc(n),t)))for(n=0;n<t.length;n++)Cc(t[n])}}function Ta(t,n){var i=t.stateNode;if(i===null)return null;var l=i[Vt]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),po=!1;if(Nn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){po=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{po=!1}var ir=null,El=null,mo=null;function Ec(){if(mo)return mo;var t,n=El,i=n.length,l,d="value"in ir?ir.value:ir.textContent,g=d.length;for(t=0;t<i&&n[t]===d[t];t++);var w=i-t;for(l=1;l<=w&&n[i-l]===d[g-l];l++);return mo=d.slice(t,1<l?1-l:void 0)}function D(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function F(){return!0}function ue(){return!1}function ge(t){function n(i,l,d,g,w){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(i=t[M],this[M]=i?i(g):g[M]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?F:ue,this.isPropagationStopped=ue,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=F)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=F)},persist:function(){},isPersistent:F}),n}var Be={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ke=ge(Be),Qe=v({},Be,{view:0,detail:0}),St=ge(Qe),vt,tt,At,Zt=v({},Qe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==At&&(At&&t.type==="mousemove"?(vt=t.screenX-At.screenX,tt=t.screenY-At.screenY):tt=vt=0,At=t),vt)},movementY:function(t){return"movementY"in t?t.movementY:tt}}),Lt=ge(Zt),un=v({},Zt,{dataTransfer:0}),dn=ge(un),Sr=v({},Qe,{relatedTarget:0}),Sn=ge(Sr),Ur=v({},Be,{animationName:0,elapsedTime:0,pseudoElement:0}),jc=ge(Ur),vo=v({},Be,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xo=ge(vo),Kb=v({},Be,{data:0}),gp=ge(Kb),Jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n3(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=t3[t])?!!n[t]:!1}function tf(){return n3}var r3=v({},Qe,{key:function(t){if(t.key){var n=Jb[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=D(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?D(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?D(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a3=ge(r3),i3=v({},Zt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=ge(i3),o3=v({},Qe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),l3=ge(o3),s3=v({},Be,{propertyName:0,elapsedTime:0,pseudoElement:0}),c3=ge(s3),u3=v({},Zt,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d3=ge(u3),f3=v({},Be,{newState:0,oldState:0}),h3=ge(f3),g3=[9,13,27,32],nf=Nn&&"CompositionEvent"in window,jl=null;Nn&&"documentMode"in document&&(jl=document.documentMode);var p3=Nn&&"TextEvent"in window&&!jl,mp=Nn&&(!nf||jl&&8<jl&&11>=jl),vp=" ",xp=!1;function yp(t,n){switch(t){case"keyup":return g3.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function m3(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(xp=!0,vp);case"textInput":return t=n.data,t===vp&&xp?null:t;default:return null}}function v3(t,n){if(yo)return t==="compositionend"||!nf&&yp(t,n)?(t=Ec(),mo=El=ir=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mp&&n.locale!=="ko"?null:n.data;default:return null}}var x3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!x3[t.type]:n==="textarea"}function Sp(t,n,i,l){ja?rr?rr.push(l):rr=[l]:ja=l,n=pu(n,"onChange"),0<n.length&&(i=new ke("onChange","change",null,i,l),t.push({event:i,listeners:n}))}var Tl=null,Ml=null;function y3(t){av(t,0)}function Tc(t){var n=pi(t);if(yl(n))return t}function Cp(t,n){if(t==="change")return n}var kp=!1;if(Nn){var rf;if(Nn){var af="oninput"in document;if(!af){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),af=typeof Ep.oninput=="function"}rf=af}else rf=!1;kp=rf&&(!document.documentMode||9<document.documentMode)}function jp(){Tl&&(Tl.detachEvent("onpropertychange",Tp),Ml=Tl=null)}function Tp(t){if(t.propertyName==="value"&&Tc(Ml)){var n=[];Sp(n,Ml,t,go(t)),kc(y3,n)}}function b3(t,n,i){t==="focusin"?(jp(),Tl=n,Ml=i,Tl.attachEvent("onpropertychange",Tp)):t==="focusout"&&jp()}function w3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(Ml)}function S3(t,n){if(t==="click")return Tc(n)}function C3(t,n){if(t==="input"||t==="change")return Tc(n)}function k3(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Cn=typeof Object.is=="function"?Object.is:k3;function $l(t,n){if(Cn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!_n.call(n,d)||!Cn(t[d],n[d]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,n){var i=Mp(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=n&&l>=n)return{node:i,offset:n-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Mp(i)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fo(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=fo(t.document)}return n}function of(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var E3=Nn&&"documentMode"in document&&11>=document.documentMode,bo=null,lf=null,Al=null,sf=!1;function Op(t,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;sf||bo==null||bo!==fo(l)||(l=bo,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Al&&$l(Al,l)||(Al=l,l=pu(lf,"onSelect"),0<l.length&&(n=new ke("onSelect","select",null,n,i),t.push({event:n,listeners:l}),n.target=bo)))}function bi(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var wo={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionrun:bi("Transition","TransitionRun"),transitionstart:bi("Transition","TransitionStart"),transitioncancel:bi("Transition","TransitionCancel"),transitionend:bi("Transition","TransitionEnd")},cf={},zp={};Nn&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function wi(t){if(cf[t])return cf[t];if(!wo[t])return t;var n=wo[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in zp)return cf[t]=n[i];return t}var Dp=wi("animationend"),_p=wi("animationiteration"),Rp=wi("animationstart"),j3=wi("transitionrun"),T3=wi("transitionstart"),M3=wi("transitioncancel"),Np=wi("transitionend"),Hp=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function or(t,n){Hp.set(t,n),Ir(n,[t])}var Mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Hn=[],So=0,df=0;function $c(){for(var t=So,n=df=So=0;n<t;){var i=Hn[n];Hn[n++]=null;var l=Hn[n];Hn[n++]=null;var d=Hn[n];Hn[n++]=null;var g=Hn[n];if(Hn[n++]=null,l!==null&&d!==null){var w=l.pending;w===null?d.next=d:(d.next=w.next,w.next=d),l.pending=d}g!==0&&Bp(i,d,g)}}function Ac(t,n,i,l){Hn[So++]=t,Hn[So++]=n,Hn[So++]=i,Hn[So++]=l,df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ff(t,n,i,l){return Ac(t,n,i,l),Lc(t)}function Si(t,n){return Ac(t,null,null,n),Lc(t)}function Bp(t,n,i){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i);for(var d=!1,g=t.return;g!==null;)g.childLanes|=i,l=g.alternate,l!==null&&(l.childLanes|=i),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(d=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,d&&n!==null&&(d=31-Yt(i),t=g.hiddenUpdates,l=t[d],l===null?t[d]=[n]:l.push(n),n.lane=i|536870912),g):null}function Lc(t){if(50<Kl)throw Kl=0,wh=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Co={};function $3(t,n,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,i,l){return new $3(t,n,i,l)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gr(t,n){var i=t.alternate;return i===null?(i=kn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Ip(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Oc(t,n,i,l,d,g){var w=0;if(l=t,typeof t=="function")hf(t)&&(w=1);else if(typeof t=="string")w=Dw(t,i,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=kn(31,i,n,d),t.elementType=P,t.lanes=g,t;case E:return Ci(i.children,d,g,n);case T:w=8,d|=24;break;case $:return t=kn(12,i,n,d|2),t.elementType=$,t.lanes=g,t;case _:return t=kn(13,i,n,d),t.elementType=_,t.lanes=g,t;case H:return t=kn(19,i,n,d),t.elementType=H,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:w=10;break e;case L:w=9;break e;case z:w=11;break e;case j:w=14;break e;case A:w=16,l=null;break e}w=29,i=Error(o(130,t===null?"null":typeof t,"")),l=null}return n=kn(w,i,n,d),n.elementType=t,n.type=l,n.lanes=g,n}function Ci(t,n,i,l){return t=kn(7,t,l,n),t.lanes=i,t}function gf(t,n,i){return t=kn(6,t,null,n),t.lanes=i,t}function Up(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function pf(t,n,i){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gp=new WeakMap;function Bn(t,n){if(typeof t=="object"&&t!==null){var i=Gp.get(t);return i!==void 0?i:(n={value:t,source:n,stack:vr(n)},Gp.set(t,n),n)}return{value:t,source:n,stack:vr(n)}}var ko=[],Eo=0,zc=null,Ll=0,In=[],Un=0,Ma=null,Cr=1,kr="";function Pr(t,n){ko[Eo++]=Ll,ko[Eo++]=zc,zc=t,Ll=n}function Pp(t,n,i){In[Un++]=Cr,In[Un++]=kr,In[Un++]=Ma,Ma=t;var l=Cr;t=kr;var d=32-Yt(l)-1;l&=~(1<<d),i+=1;var g=32-Yt(n)+d;if(30<g){var w=d-d%5;g=(l&(1<<w)-1).toString(32),l>>=w,d-=w,Cr=1<<32-Yt(n)+d|i<<d|l,kr=g+t}else Cr=1<<g|i<<d|l,kr=t}function mf(t){t.return!==null&&(Pr(t,1),Pp(t,1,0))}function vf(t){for(;t===zc;)zc=ko[--Eo],ko[Eo]=null,Ll=ko[--Eo],ko[Eo]=null;for(;t===Ma;)Ma=In[--Un],In[Un]=null,kr=In[--Un],In[Un]=null,Cr=In[--Un],In[Un]=null}function qp(t,n){In[Un++]=Cr,In[Un++]=kr,In[Un++]=Ma,Cr=n.id,kr=n.overflow,Ma=t}var Ht=null,at=null,Ne=!1,$a=null,Gn=!1,xf=Error(o(519));function Aa(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Bn(n,t)),xf}function Wp(t){var n=t.stateNode,i=t.type,l=t.memoizedProps;switch(n[$t]=t,n[Vt]=l,i){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(i=0;i<es.length;i++)De(es[i],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),wl(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),xi(n,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||sv(n.textContent,i)?(l.popover!=null&&(De("beforetoggle",n),De("toggle",n)),l.onScroll!=null&&De("scroll",n),l.onScrollEnd!=null&&De("scrollend",n),l.onClick!=null&&(n.onclick=tr),n=!0):n=!1,n||Aa(t,!0)}function Fp(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:Ht=Ht.return}}function jo(t){if(t!==Ht)return!1;if(!Ne)return Fp(t),Ne=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Rh(t.type,t.memoizedProps)),i=!i),i&&at&&Aa(t),Fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));at=vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));at=vv(t)}else n===27?(n=at,qa(t.type)?(t=Uh,Uh=null,at=t):at=n):at=Ht?qn(t.stateNode.nextSibling):null;return!0}function ki(){at=Ht=null,Ne=!1}function yf(){var t=$a;return t!==null&&(pn===null?pn=t:pn.push.apply(pn,t),$a=null),t}function Ol(t){$a===null?$a=[t]:$a.push(t)}var bf=O(null),Ei=null,qr=null;function La(t,n,i){Q(bf,n._currentValue),n._currentValue=i}function Wr(t){t._currentValue=bf.current,W(bf)}function wf(t,n,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===i)break;t=t.return}}function Sf(t,n,i,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var g=d.dependencies;if(g!==null){var w=d.child;g=g.firstContext;e:for(;g!==null;){var M=g;g=d;for(var I=0;I<n.length;I++)if(M.context===n[I]){g.lanes|=i,M=g.alternate,M!==null&&(M.lanes|=i),wf(g.return,i,t),l||(w=null);break e}g=M.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(o(341));w.lanes|=i,g=w.alternate,g!==null&&(g.lanes|=i),wf(w,i,t),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===t){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function To(t,n,i,l){t=null;for(var d=n,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var M=d.type;Cn(d.pendingProps.value,w.value)||(t!==null?t.push(M):t=[M])}}else if(d===fe.current){if(w=d.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(is):t=[is])}d=d.return}t!==null&&Sf(n,t,i,l),n.flags|=262144}function Dc(t){for(t=t.firstContext;t!==null;){if(!Cn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ji(t){Ei=t,qr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bt(t){return Yp(Ei,t)}function _c(t,n){return Ei===null&&ji(t),Yp(t,n)}function Yp(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},qr===null){if(t===null)throw Error(o(308));qr=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qr=qr.next=n;return i}var A3=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},L3=e.unstable_scheduleCallback,O3=e.unstable_NormalPriority,Ct={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cf(){return{controller:new A3,data:new Map,refCount:0}}function zl(t){t.refCount--,t.refCount===0&&L3(O3,function(){t.controller.abort()})}var Dl=null,kf=0,Mo=0,$o=null;function z3(t,n){if(Dl===null){var i=Dl=[];kf=0,Mo=Th(),$o={status:"pending",value:void 0,then:function(l){i.push(l)}}}return kf++,n.then(Vp,Vp),n}function Vp(){if(--kf===0&&Dl!==null){$o!==null&&($o.status="fulfilled");var t=Dl;Dl=null,Mo=0,$o=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function D3(t,n){var i=[],l={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<i.length;d++)(0,i[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),l}var Zp=B.S;B.S=function(t,n){Om=tn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&z3(t,n),Zp!==null&&Zp(t,n)};var Ti=O(null);function Ef(){var t=Ti.current;return t!==null?t:nt.pooledCache}function Rc(t,n){n===null?Q(Ti,Ti.current):Q(Ti,n.pool)}function Xp(){var t=Ef();return t===null?null:{parent:Ct._currentValue,pool:t}}var Ao=Error(o(460)),jf=Error(o(474)),Nc=Error(o(542)),Hc={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(tr,tr),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e1(t),t;default:if(typeof n.status=="string")n.then(tr,tr);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e1(t),t}throw $i=n,Ao}}function Mi(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?($i=i,Ao):i}}var $i=null;function Jp(){if($i===null)throw Error(o(459));var t=$i;return $i=null,t}function e1(t){if(t===Ao||t===Nc)throw Error(o(483))}var Lo=null,_l=0;function Bc(t){var n=_l;return _l+=1,Lo===null&&(Lo=[]),Kp(Lo,t,n)}function Rl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ic(t,n){throw n.$$typeof===k?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function t1(t){function n(Y,G){if(t){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function i(Y,G){if(!t)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function l(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function d(Y,G){return Y=Gr(Y,G),Y.index=0,Y.sibling=null,Y}function g(Y,G,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=67108866,G):K):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function w(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function M(Y,G,K,se){return G===null||G.tag!==6?(G=gf(K,Y.mode,se),G.return=Y,G):(G=d(G,K),G.return=Y,G)}function I(Y,G,K,se){var be=K.type;return be===E?oe(Y,G,K.props.children,se,K.key):G!==null&&(G.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===A&&Mi(be)===G.type)?(G=d(G,K.props),Rl(G,K),G.return=Y,G):(G=Oc(K.type,K.key,K.props,null,Y.mode,se),Rl(G,K),G.return=Y,G)}function J(Y,G,K,se){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=pf(K,Y.mode,se),G.return=Y,G):(G=d(G,K.children||[]),G.return=Y,G)}function oe(Y,G,K,se,be){return G===null||G.tag!==7?(G=Ci(K,Y.mode,se,be),G.return=Y,G):(G=d(G,K),G.return=Y,G)}function ce(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gf(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return K=Oc(G.type,G.key,G.props,null,Y.mode,K),Rl(K,G),K.return=Y,K;case S:return G=pf(G,Y.mode,K),G.return=Y,G;case A:return G=Mi(G),ce(Y,G,K)}if(te(G)||Z(G))return G=Ci(G,Y.mode,K,null),G.return=Y,G;if(typeof G.then=="function")return ce(Y,Bc(G),K);if(G.$$typeof===N)return ce(Y,_c(Y,G),K);Ic(Y,G)}return null}function ee(Y,G,K,se){var be=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return be!==null?null:M(Y,G,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return K.key===be?I(Y,G,K,se):null;case S:return K.key===be?J(Y,G,K,se):null;case A:return K=Mi(K),ee(Y,G,K,se)}if(te(K)||Z(K))return be!==null?null:oe(Y,G,K,se,null);if(typeof K.then=="function")return ee(Y,G,Bc(K),se);if(K.$$typeof===N)return ee(Y,G,_c(Y,K),se);Ic(Y,K)}return null}function ne(Y,G,K,se,be){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return Y=Y.get(K)||null,M(G,Y,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return Y=Y.get(se.key===null?K:se.key)||null,I(G,Y,se,be);case S:return Y=Y.get(se.key===null?K:se.key)||null,J(G,Y,se,be);case A:return se=Mi(se),ne(Y,G,K,se,be)}if(te(se)||Z(se))return Y=Y.get(K)||null,oe(G,Y,se,be,null);if(typeof se.then=="function")return ne(Y,G,K,Bc(se),be);if(se.$$typeof===N)return ne(Y,G,K,_c(G,se),be);Ic(G,se)}return null}function xe(Y,G,K,se){for(var be=null,Ie=null,ye=G,Ae=G=0,Re=null;ye!==null&&Ae<K.length;Ae++){ye.index>Ae?(Re=ye,ye=null):Re=ye.sibling;var Ue=ee(Y,ye,K[Ae],se);if(Ue===null){ye===null&&(ye=Re);break}t&&ye&&Ue.alternate===null&&n(Y,ye),G=g(Ue,G,Ae),Ie===null?be=Ue:Ie.sibling=Ue,Ie=Ue,ye=Re}if(Ae===K.length)return i(Y,ye),Ne&&Pr(Y,Ae),be;if(ye===null){for(;Ae<K.length;Ae++)ye=ce(Y,K[Ae],se),ye!==null&&(G=g(ye,G,Ae),Ie===null?be=ye:Ie.sibling=ye,Ie=ye);return Ne&&Pr(Y,Ae),be}for(ye=l(ye);Ae<K.length;Ae++)Re=ne(ye,Y,Ae,K[Ae],se),Re!==null&&(t&&Re.alternate!==null&&ye.delete(Re.key===null?Ae:Re.key),G=g(Re,G,Ae),Ie===null?be=Re:Ie.sibling=Re,Ie=Re);return t&&ye.forEach(function(Za){return n(Y,Za)}),Ne&&Pr(Y,Ae),be}function Ce(Y,G,K,se){if(K==null)throw Error(o(151));for(var be=null,Ie=null,ye=G,Ae=G=0,Re=null,Ue=K.next();ye!==null&&!Ue.done;Ae++,Ue=K.next()){ye.index>Ae?(Re=ye,ye=null):Re=ye.sibling;var Za=ee(Y,ye,Ue.value,se);if(Za===null){ye===null&&(ye=Re);break}t&&ye&&Za.alternate===null&&n(Y,ye),G=g(Za,G,Ae),Ie===null?be=Za:Ie.sibling=Za,Ie=Za,ye=Re}if(Ue.done)return i(Y,ye),Ne&&Pr(Y,Ae),be;if(ye===null){for(;!Ue.done;Ae++,Ue=K.next())Ue=ce(Y,Ue.value,se),Ue!==null&&(G=g(Ue,G,Ae),Ie===null?be=Ue:Ie.sibling=Ue,Ie=Ue);return Ne&&Pr(Y,Ae),be}for(ye=l(ye);!Ue.done;Ae++,Ue=K.next())Ue=ne(ye,Y,Ae,Ue.value,se),Ue!==null&&(t&&Ue.alternate!==null&&ye.delete(Ue.key===null?Ae:Ue.key),G=g(Ue,G,Ae),Ie===null?be=Ue:Ie.sibling=Ue,Ie=Ue);return t&&ye.forEach(function(Ww){return n(Y,Ww)}),Ne&&Pr(Y,Ae),be}function et(Y,G,K,se){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case C:e:{for(var be=K.key;G!==null;){if(G.key===be){if(be=K.type,be===E){if(G.tag===7){i(Y,G.sibling),se=d(G,K.props.children),se.return=Y,Y=se;break e}}else if(G.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===A&&Mi(be)===G.type){i(Y,G.sibling),se=d(G,K.props),Rl(se,K),se.return=Y,Y=se;break e}i(Y,G);break}else n(Y,G);G=G.sibling}K.type===E?(se=Ci(K.props.children,Y.mode,se,K.key),se.return=Y,Y=se):(se=Oc(K.type,K.key,K.props,null,Y.mode,se),Rl(se,K),se.return=Y,Y=se)}return w(Y);case S:e:{for(be=K.key;G!==null;){if(G.key===be)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){i(Y,G.sibling),se=d(G,K.children||[]),se.return=Y,Y=se;break e}else{i(Y,G);break}else n(Y,G);G=G.sibling}se=pf(K,Y.mode,se),se.return=Y,Y=se}return w(Y);case A:return K=Mi(K),et(Y,G,K,se)}if(te(K))return xe(Y,G,K,se);if(Z(K)){if(be=Z(K),typeof be!="function")throw Error(o(150));return K=be.call(K),Ce(Y,G,K,se)}if(typeof K.then=="function")return et(Y,G,Bc(K),se);if(K.$$typeof===N)return et(Y,G,_c(Y,K),se);Ic(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(i(Y,G.sibling),se=d(G,K),se.return=Y,Y=se):(i(Y,G),se=gf(K,Y.mode,se),se.return=Y,Y=se),w(Y)):i(Y,G)}return function(Y,G,K,se){try{_l=0;var be=et(Y,G,K,se);return Lo=null,be}catch(ye){if(ye===Ao||ye===Nc)throw ye;var Ie=kn(29,ye,null,Y.mode);return Ie.lanes=se,Ie.return=Y,Ie}}}var Ai=t1(!0),n1=t1(!1),Oa=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=Lc(t),Bp(t,null,i),n}return Ac(t,l,n,i),Lc(t)}function Nl(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,gc(t,i)}}function $f(t,n){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,g=null;if(i=i.firstBaseUpdate,i!==null){do{var w={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};g===null?d=g=w:g=g.next=w,i=i.next}while(i!==null);g===null?d=g=n:g=g.next=n}else d=g=n;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Af=!1;function Hl(){if(Af){var t=$o;if(t!==null)throw t}}function Bl(t,n,i,l){Af=!1;var d=t.updateQueue;Oa=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,M=d.shared.pending;if(M!==null){d.shared.pending=null;var I=M,J=I.next;I.next=null,w===null?g=J:w.next=J,w=I;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,M=oe.lastBaseUpdate,M!==w&&(M===null?oe.firstBaseUpdate=J:M.next=J,oe.lastBaseUpdate=I))}if(g!==null){var ce=d.baseState;w=0,oe=J=I=null,M=g;do{var ee=M.lane&-536870913,ne=ee!==M.lane;if(ne?(_e&ee)===ee:(l&ee)===ee){ee!==0&&ee===Mo&&(Af=!0),oe!==null&&(oe=oe.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var xe=t,Ce=M;ee=n;var et=i;switch(Ce.tag){case 1:if(xe=Ce.payload,typeof xe=="function"){ce=xe.call(et,ce,ee);break e}ce=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Ce.payload,ee=typeof xe=="function"?xe.call(et,ce,ee):xe,ee==null)break e;ce=v({},ce,ee);break e;case 2:Oa=!0}}ee=M.callback,ee!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=d.callbacks,ne===null?d.callbacks=[ee]:ne.push(ee))}else ne={lane:ee,tag:M.tag,payload:M.payload,callback:M.callback,next:null},oe===null?(J=oe=ne,I=ce):oe=oe.next=ne,w|=ee;if(M=M.next,M===null){if(M=d.shared.pending,M===null)break;ne=M,M=ne.next,ne.next=null,d.lastBaseUpdate=ne,d.shared.pending=null}}while(!0);oe===null&&(I=ce),d.baseState=I,d.firstBaseUpdate=J,d.lastBaseUpdate=oe,g===null&&(d.shared.lanes=0),Ba|=w,t.lanes=w,t.memoizedState=ce}}function r1(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function a1(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)r1(i[t],n)}var Oo=O(null),Uc=O(0);function i1(t,n){t=ea,Q(Uc,t),Q(Oo,n),ea=t|n.baseLanes}function Lf(){Q(Uc,ea),Q(Oo,Oo.current)}function Of(){ea=Uc.current,W(Oo),W(Uc)}var En=O(null),Pn=null;function _a(t){var n=t.alternate;Q(xt,xt.current&1),Q(En,t),Pn===null&&(n===null||Oo.current!==null||n.memoizedState!==null)&&(Pn=t)}function zf(t){Q(xt,xt.current),Q(En,t),Pn===null&&(Pn=t)}function o1(t){t.tag===22?(Q(xt,xt.current),Q(En,t),Pn===null&&(Pn=t)):Ra()}function Ra(){Q(xt,xt.current),Q(En,En.current)}function jn(t){W(En),Pn===t&&(Pn=null),W(xt)}var xt=O(0);function Gc(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Bh(i)||Ih(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fr=0,$e=null,Ke=null,kt=null,Pc=!1,zo=!1,Li=!1,qc=0,Il=0,Do=null,_3=0;function ht(){throw Error(o(321))}function Df(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Cn(t[i],n[i]))return!1;return!0}function _f(t,n,i,l,d,g){return Fr=g,$e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?P1:Xf,Li=!1,g=i(l,d),Li=!1,zo&&(g=s1(n,i,l,d)),l1(t),g}function l1(t){B.H=Pl;var n=Ke!==null&&Ke.next!==null;if(Fr=0,kt=Ke=$e=null,Pc=!1,Il=0,Do=null,n)throw Error(o(300));t===null||Et||(t=t.dependencies,t!==null&&Dc(t)&&(Et=!0))}function s1(t,n,i,l){$e=t;var d=0;do{if(zo&&(Do=null),Il=0,zo=!1,25<=d)throw Error(o(301));if(d+=1,kt=Ke=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=q1,g=n(i,l)}while(zo);return g}function R3(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Ul(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&($e.flags|=1024),n}function Rf(){var t=qc!==0;return qc=0,t}function Nf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Hf(t){if(Pc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pc=!1}Fr=0,kt=Ke=$e=null,zo=!1,Il=qc=0,Do=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?$e.memoizedState=kt=t:kt=kt.next=t,kt}function yt(){if(Ke===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=kt===null?$e.memoizedState:kt.next;if(n!==null)kt=n,Ke=t;else{if(t===null)throw $e.alternate===null?Error(o(467)):Error(o(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},kt===null?$e.memoizedState=kt=t:kt=kt.next=t}return kt}function Wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ul(t){var n=Il;return Il+=1,Do===null&&(Do=[]),t=Kp(Do,t,n),n=$e,(kt===null?n.memoizedState:kt.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?P1:Xf),t}function Fc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ul(t);if(t.$$typeof===N)return Bt(t)}throw Error(o(438,String(t)))}function Bf(t){var n=null,i=$e.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=$e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Wc(),$e.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),l=0;l<t;l++)i[l]=V;return n.index++,i}function Yr(t,n){return typeof n=="function"?n(t):n}function Yc(t){var n=yt();return If(n,Ke,t)}function If(t,n,i){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var d=t.baseQueue,g=l.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}n.baseQueue=d=g,l.pending=null}if(g=t.baseState,d===null)t.memoizedState=g;else{n=d.next;var M=w=null,I=null,J=n,oe=!1;do{var ce=J.lane&-536870913;if(ce!==J.lane?(_e&ce)===ce:(Fr&ce)===ce){var ee=J.revertLane;if(ee===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ce===Mo&&(oe=!0);else if((Fr&ee)===ee){J=J.next,ee===Mo&&(oe=!0);continue}else ce={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(M=I=ce,w=g):I=I.next=ce,$e.lanes|=ee,Ba|=ee;ce=J.action,Li&&i(g,ce),g=J.hasEagerState?J.eagerState:i(g,ce)}else ee={lane:ce,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(M=I=ee,w=g):I=I.next=ee,$e.lanes|=ce,Ba|=ce;J=J.next}while(J!==null&&J!==n);if(I===null?w=g:I.next=M,!Cn(g,t.memoizedState)&&(Et=!0,oe&&(i=$o,i!==null)))throw i;t.memoizedState=g,t.baseState=w,t.baseQueue=I,l.lastRenderedState=g}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Uf(t){var n=yt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var l=i.dispatch,d=i.pending,g=n.memoizedState;if(d!==null){i.pending=null;var w=d=d.next;do g=t(g,w.action),w=w.next;while(w!==d);Cn(g,n.memoizedState)||(Et=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),i.lastRenderedState=g}return[g,l]}function c1(t,n,i){var l=$e,d=yt(),g=Ne;if(g){if(i===void 0)throw Error(o(407));i=i()}else i=n();var w=!Cn((Ke||d).memoizedState,i);if(w&&(d.memoizedState=i,Et=!0),d=d.queue,qf(f1.bind(null,l,d,t),[t]),d.getSnapshot!==n||w||kt!==null&&kt.memoizedState.tag&1){if(l.flags|=2048,_o(9,{destroy:void 0},d1.bind(null,l,d,i,n),null),nt===null)throw Error(o(349));g||(Fr&127)!==0||u1(l,n,i)}return i}function u1(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=$e.updateQueue,n===null?(n=Wc(),$e.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function d1(t,n,i,l){n.value=i,n.getSnapshot=l,h1(n)&&g1(t)}function f1(t,n,i){return i(function(){h1(n)&&g1(t)})}function h1(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Cn(t,i)}catch{return!0}}function g1(t){var n=Si(t,2);n!==null&&mn(n,t,2)}function Gf(t){var n=nn();if(typeof t=="function"){var i=t;if(t=i(),Li){yn(!0);try{i()}finally{yn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:t},n}function p1(t,n,i,l){return t.baseState=i,If(t,Ke,typeof l=="function"?l:Yr)}function N3(t,n,i,l,d){if(Xc(t))throw Error(o(485));if(t=n.action,t!==null){var g={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};B.T!==null?i(!0):g.isTransition=!1,l(g),i=n.pending,i===null?(g.next=n.pending=g,m1(n,g)):(g.next=i.next,n.pending=i.next=g)}}function m1(t,n){var i=n.action,l=n.payload,d=t.state;if(n.isTransition){var g=B.T,w={};B.T=w;try{var M=i(d,l),I=B.S;I!==null&&I(w,M),v1(t,n,M)}catch(J){Pf(t,n,J)}finally{g!==null&&w.types!==null&&(g.types=w.types),B.T=g}}else try{g=i(d,l),v1(t,n,g)}catch(J){Pf(t,n,J)}}function v1(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){x1(t,n,l)},function(l){return Pf(t,n,l)}):x1(t,n,i)}function x1(t,n,i){n.status="fulfilled",n.value=i,y1(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,m1(t,i)))}function Pf(t,n,i){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,y1(n),n=n.next;while(n!==l)}t.action=null}function y1(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function b1(t,n){return n}function w1(t,n){if(Ne){var i=nt.formState;if(i!==null){e:{var l=$e;if(Ne){if(at){t:{for(var d=at,g=Gn;d.nodeType!==8;){if(!g){d=null;break t}if(d=qn(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){at=qn(d.nextSibling),l=d.data==="F!";break e}}Aa(l)}l=!1}l&&(n=i[0])}}return i=nn(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b1,lastRenderedState:n},i.queue=l,i=I1.bind(null,$e,l),l.dispatch=i,l=Gf(!1),g=Zf.bind(null,$e,!1,l.queue),l=nn(),d={state:n,dispatch:null,action:t,pending:null},l.queue=d,i=N3.bind(null,$e,d,g,i),d.dispatch=i,l.memoizedState=t,[n,i,!1]}function S1(t){var n=yt();return C1(n,Ke,t)}function C1(t,n,i){if(n=If(t,n,b1)[0],t=Yc(Yr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ul(n)}catch(w){throw w===Ao?Nc:w}else l=n;n=yt();var d=n.queue,g=d.dispatch;return i!==n.memoizedState&&($e.flags|=2048,_o(9,{destroy:void 0},H3.bind(null,d,i),null)),[l,g,t]}function H3(t,n){t.action=n}function k1(t){var n=yt(),i=Ke;if(i!==null)return C1(n,i,t);yt(),n=n.memoizedState,i=yt();var l=i.queue.dispatch;return i.memoizedState=t,[n,l,!1]}function _o(t,n,i,l){return t={tag:t,create:i,deps:l,inst:n,next:null},n=$e.updateQueue,n===null&&(n=Wc(),$e.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,n.lastEffect=t),t}function E1(){return yt().memoizedState}function Vc(t,n,i,l){var d=nn();$e.flags|=t,d.memoizedState=_o(1|n,{destroy:void 0},i,l===void 0?null:l)}function Zc(t,n,i,l){var d=yt();l=l===void 0?null:l;var g=d.memoizedState.inst;Ke!==null&&l!==null&&Df(l,Ke.memoizedState.deps)?d.memoizedState=_o(n,g,i,l):($e.flags|=t,d.memoizedState=_o(1|n,g,i,l))}function j1(t,n){Vc(8390656,8,t,n)}function qf(t,n){Zc(2048,8,t,n)}function B3(t){$e.flags|=4;var n=$e.updateQueue;if(n===null)n=Wc(),$e.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function T1(t){var n=yt().memoizedState;return B3({ref:n,nextImpl:t}),function(){if((qe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function M1(t,n){return Zc(4,2,t,n)}function $1(t,n){return Zc(4,4,t,n)}function A1(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function L1(t,n,i){i=i!=null?i.concat([t]):null,Zc(4,4,A1.bind(null,n,t),i)}function Wf(){}function O1(t,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&Df(n,l[1])?l[0]:(i.memoizedState=[t,n],t)}function z1(t,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&Df(n,l[1]))return l[0];if(l=t(),Li){yn(!0);try{t()}finally{yn(!1)}}return i.memoizedState=[l,n],l}function Ff(t,n,i){return i===void 0||(Fr&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=Dm(),$e.lanes|=t,Ba|=t,i)}function D1(t,n,i,l){return Cn(i,n)?i:Oo.current!==null?(t=Ff(t,i,l),Cn(t,n)||(Et=!0),t):(Fr&42)===0||(Fr&1073741824)!==0&&(_e&261930)===0?(Et=!0,t.memoizedState=i):(t=Dm(),$e.lanes|=t,Ba|=t,n)}function _1(t,n,i,l,d){var g=q.p;q.p=g!==0&&8>g?g:8;var w=B.T,M={};B.T=M,Zf(t,!1,n,i);try{var I=d(),J=B.S;if(J!==null&&J(M,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var oe=D3(I,l);Gl(t,n,oe,$n(t))}else Gl(t,n,l,$n(t))}catch(ce){Gl(t,n,{then:function(){},status:"rejected",reason:ce},$n())}finally{q.p=g,w!==null&&M.types!==null&&(w.types=M.types),B.T=w}}function I3(){}function Yf(t,n,i,l){if(t.tag!==5)throw Error(o(476));var d=R1(t).queue;_1(t,d,n,ae,i===null?I3:function(){return N1(t),i(l)})}function R1(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:ae},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N1(t){var n=R1(t);n.next===null&&(n=t.alternate.memoizedState),Gl(t,n.next.queue,{},$n())}function Vf(){return Bt(is)}function H1(){return yt().memoizedState}function B1(){return yt().memoizedState}function U3(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=$n();t=za(i);var l=Da(n,t,i);l!==null&&(mn(l,n,i),Nl(l,n,i)),n={cache:Cf()},t.payload=n;return}n=n.return}}function G3(t,n,i){var l=$n();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xc(t)?U1(n,i):(i=ff(t,n,i,l),i!==null&&(mn(i,t,l),G1(i,n,l)))}function I1(t,n,i){var l=$n();Gl(t,n,i,l)}function Gl(t,n,i,l){var d={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Xc(t))U1(n,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var w=n.lastRenderedState,M=g(w,i);if(d.hasEagerState=!0,d.eagerState=M,Cn(M,w))return Ac(t,n,d,0),nt===null&&$c(),!1}catch{}if(i=ff(t,n,d,l),i!==null)return mn(i,t,l),G1(i,n,l),!0}return!1}function Zf(t,n,i,l){if(l={lane:2,revertLane:Th(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xc(t)){if(n)throw Error(o(479))}else n=ff(t,i,l,2),n!==null&&mn(n,t,2)}function Xc(t){var n=t.alternate;return t===$e||n!==null&&n===$e}function U1(t,n){zo=Pc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function G1(t,n,i){if((i&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,gc(t,i)}}var Pl={readContext:Bt,use:Fc,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Pl.useEffectEvent=ht;var P1={readContext:Bt,use:Fc,useCallback:function(t,n){return nn().memoizedState=[t,n===void 0?null:n],t},useContext:Bt,useEffect:j1,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Vc(4194308,4,A1.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Vc(4194308,4,t,n)},useInsertionEffect:function(t,n){Vc(4,2,t,n)},useMemo:function(t,n){var i=nn();n=n===void 0?null:n;var l=t();if(Li){yn(!0);try{t()}finally{yn(!1)}}return i.memoizedState=[l,n],l},useReducer:function(t,n,i){var l=nn();if(i!==void 0){var d=i(n);if(Li){yn(!0);try{i(n)}finally{yn(!1)}}}else d=n;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=G3.bind(null,$e,t),[l.memoizedState,t]},useRef:function(t){var n=nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Gf(t);var n=t.queue,i=I1.bind(null,$e,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Wf,useDeferredValue:function(t,n){var i=nn();return Ff(i,t,n)},useTransition:function(){var t=Gf(!1);return t=_1.bind(null,$e,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var l=$e,d=nn();if(Ne){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),nt===null)throw Error(o(349));(_e&127)!==0||u1(l,n,i)}d.memoizedState=i;var g={value:i,getSnapshot:n};return d.queue=g,j1(f1.bind(null,l,g,t),[t]),l.flags|=2048,_o(9,{destroy:void 0},d1.bind(null,l,g,i,n),null),i},useId:function(){var t=nn(),n=nt.identifierPrefix;if(Ne){var i=kr,l=Cr;i=(l&~(1<<32-Yt(l)-1)).toString(32)+i,n="_"+n+"R_"+i,i=qc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=_3++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vf,useFormState:w1,useActionState:w1,useOptimistic:function(t){var n=nn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Zf.bind(null,$e,!0,i),i.dispatch=n,[t,n]},useMemoCache:Bf,useCacheRefresh:function(){return nn().memoizedState=U3.bind(null,$e)},useEffectEvent:function(t){var n=nn(),i={impl:t};return n.memoizedState=i,function(){if((qe&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},Xf={readContext:Bt,use:Fc,useCallback:O1,useContext:Bt,useEffect:qf,useImperativeHandle:L1,useInsertionEffect:M1,useLayoutEffect:$1,useMemo:z1,useReducer:Yc,useRef:E1,useState:function(){return Yc(Yr)},useDebugValue:Wf,useDeferredValue:function(t,n){var i=yt();return D1(i,Ke.memoizedState,t,n)},useTransition:function(){var t=Yc(Yr)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:Ul(t),n]},useSyncExternalStore:c1,useId:H1,useHostTransitionStatus:Vf,useFormState:S1,useActionState:S1,useOptimistic:function(t,n){var i=yt();return p1(i,Ke,t,n)},useMemoCache:Bf,useCacheRefresh:B1};Xf.useEffectEvent=T1;var q1={readContext:Bt,use:Fc,useCallback:O1,useContext:Bt,useEffect:qf,useImperativeHandle:L1,useInsertionEffect:M1,useLayoutEffect:$1,useMemo:z1,useReducer:Uf,useRef:E1,useState:function(){return Uf(Yr)},useDebugValue:Wf,useDeferredValue:function(t,n){var i=yt();return Ke===null?Ff(i,t,n):D1(i,Ke.memoizedState,t,n)},useTransition:function(){var t=Uf(Yr)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:Ul(t),n]},useSyncExternalStore:c1,useId:H1,useHostTransitionStatus:Vf,useFormState:k1,useActionState:k1,useOptimistic:function(t,n){var i=yt();return Ke!==null?p1(i,Ke,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:B1};q1.useEffectEvent=T1;function Qf(t,n,i,l){n=t.memoizedState,i=i(l,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Kf={enqueueSetState:function(t,n,i){t=t._reactInternals;var l=$n(),d=za(l);d.payload=n,i!=null&&(d.callback=i),n=Da(t,d,l),n!==null&&(mn(n,t,l),Nl(n,t,l))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var l=$n(),d=za(l);d.tag=1,d.payload=n,i!=null&&(d.callback=i),n=Da(t,d,l),n!==null&&(mn(n,t,l),Nl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=$n(),l=za(i);l.tag=2,n!=null&&(l.callback=n),n=Da(t,l,i),n!==null&&(mn(n,t,i),Nl(n,t,i))}};function W1(t,n,i,l,d,g,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,w):n.prototype&&n.prototype.isPureReactComponent?!$l(i,l)||!$l(d,g):!0}function F1(t,n,i,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==t&&Kf.enqueueReplaceState(n,n.state,null)}function Oi(t,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var d in t)i[d]===void 0&&(i[d]=t[d])}return i}function Y1(t){Mc(t)}function V1(t){console.error(t)}function Z1(t){Mc(t)}function Qc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function X1(t,n,i){try{var l=t.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Jf(t,n,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){Qc(t,n)},i}function Q1(t){return t=za(t),t.tag=3,t}function K1(t,n,i,l){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var g=l.value;t.payload=function(){return d(g)},t.callback=function(){X1(n,i,l)}}var w=i.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){X1(n,i,l),typeof d!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var M=l.stack;this.componentDidCatch(l.value,{componentStack:M!==null?M:""})})}function P3(t,n,i,l,d){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&To(n,i,d,!0),i=En.current,i!==null){switch(i.tag){case 31:case 13:return Pn===null?cu():i.alternate===null&&gt===0&&(gt=3),i.flags&=-257,i.flags|=65536,i.lanes=d,l===Hc?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),kh(t,l,d)),!1;case 22:return i.flags|=65536,l===Hc?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),kh(t,l,d)),!1}throw Error(o(435,i.tag))}return kh(t,l,d),cu(),!1}if(Ne)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==xf&&(t=Error(o(422),{cause:l}),Ol(Bn(t,i)))):(l!==xf&&(n=Error(o(423),{cause:l}),Ol(Bn(n,i))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Bn(l,i),d=Jf(t.stateNode,l,d),$f(t,d),gt!==4&&(gt=2)),!1;var g=Error(o(520),{cause:l});if(g=Bn(g,i),Ql===null?Ql=[g]:Ql.push(g),gt!==4&&(gt=2),n===null)return!0;l=Bn(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=d&-d,i.lanes|=t,t=Jf(i.stateNode,l,t),$f(i,t),!1;case 1:if(n=i.type,g=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ia===null||!Ia.has(g))))return i.flags|=65536,d&=-d,i.lanes|=d,d=Q1(d),K1(d,t,i,l),$f(i,d),!1}i=i.return}while(i!==null);return!1}var eh=Error(o(461)),Et=!1;function It(t,n,i,l){n.child=t===null?n1(n,null,i,l):Ai(n,t.child,i,l)}function J1(t,n,i,l,d){i=i.render;var g=n.ref;if("ref"in l){var w={};for(var M in l)M!=="ref"&&(w[M]=l[M])}else w=l;return ji(n),l=_f(t,n,i,w,g,d),M=Rf(),t!==null&&!Et?(Nf(t,n,d),Vr(t,n,d)):(Ne&&M&&mf(n),n.flags|=1,It(t,n,l,d),n.child)}function em(t,n,i,l,d){if(t===null){var g=i.type;return typeof g=="function"&&!hf(g)&&g.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=g,tm(t,n,g,l,d)):(t=Oc(i.type,null,l,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(g=t.child,!sh(t,d)){var w=g.memoizedProps;if(i=i.compare,i=i!==null?i:$l,i(w,l)&&t.ref===n.ref)return Vr(t,n,d)}return n.flags|=1,t=Gr(g,l),t.ref=n.ref,t.return=n,n.child=t}function tm(t,n,i,l,d){if(t!==null){var g=t.memoizedProps;if($l(g,l)&&t.ref===n.ref)if(Et=!1,n.pendingProps=l=g,sh(t,d))(t.flags&131072)!==0&&(Et=!0);else return n.lanes=t.lanes,Vr(t,n,d)}return th(t,n,i,l,d)}function nm(t,n,i,l){var d=l.children,g=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(g=g!==null?g.baseLanes|i:i,t!==null){for(l=n.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~g}else l=0,n.child=null;return rm(t,n,g,i,l)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rc(n,g!==null?g.cachePool:null),g!==null?i1(n,g):Lf(),o1(n);else return l=n.lanes=536870912,rm(t,n,g!==null?g.baseLanes|i:i,i,l)}else g!==null?(Rc(n,g.cachePool),i1(n,g),Ra(),n.memoizedState=null):(t!==null&&Rc(n,null),Lf(),Ra());return It(t,n,d,i),n.child}function ql(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rm(t,n,i,l,d){var g=Ef();return g=g===null?null:{parent:Ct._currentValue,pool:g},n.memoizedState={baseLanes:i,cachePool:g},t!==null&&Rc(n,null),Lf(),o1(n),t!==null&&To(t,n,l,!0),n.childLanes=d,null}function Kc(t,n){return n=eu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function am(t,n,i){return Ai(n,t.child,null,i),t=Kc(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function q3(t,n,i){var l=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ne){if(l.mode==="hidden")return t=Kc(n,l),n.lanes=536870912,ql(null,t);if(zf(n),(t=at)?(t=mv(t,Gn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Cr,overflow:kr}:null,retryLane:536870912,hydrationErrors:null},i=Up(t),i.return=n,n.child=i,Ht=n,at=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return Kc(n,l)}var g=t.memoizedState;if(g!==null){var w=g.dehydrated;if(zf(n),d)if(n.flags&256)n.flags&=-257,n=am(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(Et||To(t,n,i,!1),d=(i&t.childLanes)!==0,Et||d){if(l=nt,l!==null&&(w=pc(l,i),w!==0&&w!==g.retryLane))throw g.retryLane=w,Si(t,w),mn(l,t,w),eh;cu(),n=am(t,n,i)}else t=g.treeContext,at=qn(w.nextSibling),Ht=n,Ne=!0,$a=null,Gn=!1,t!==null&&qp(n,t),n=Kc(n,l),n.flags|=4096;return n}return t=Gr(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Jc(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function th(t,n,i,l,d){return ji(n),i=_f(t,n,i,l,void 0,d),l=Rf(),t!==null&&!Et?(Nf(t,n,d),Vr(t,n,d)):(Ne&&l&&mf(n),n.flags|=1,It(t,n,i,d),n.child)}function im(t,n,i,l,d,g){return ji(n),n.updateQueue=null,i=s1(n,l,i,d),l1(t),l=Rf(),t!==null&&!Et?(Nf(t,n,g),Vr(t,n,g)):(Ne&&l&&mf(n),n.flags|=1,It(t,n,i,g),n.child)}function om(t,n,i,l,d){if(ji(n),n.stateNode===null){var g=Co,w=i.contextType;typeof w=="object"&&w!==null&&(g=Bt(w)),g=new i(l,g),n.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Kf,n.stateNode=g,g._reactInternals=n,g=n.stateNode,g.props=l,g.state=n.memoizedState,g.refs={},Tf(n),w=i.contextType,g.context=typeof w=="object"&&w!==null?Bt(w):Co,g.state=n.memoizedState,w=i.getDerivedStateFromProps,typeof w=="function"&&(Qf(n,i,w,l),g.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&Kf.enqueueReplaceState(g,g.state,null),Bl(n,l,g,d),Hl(),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){g=n.stateNode;var M=n.memoizedProps,I=Oi(i,M);g.props=I;var J=g.context,oe=i.contextType;w=Co,typeof oe=="object"&&oe!==null&&(w=Bt(oe));var ce=i.getDerivedStateFromProps;oe=typeof ce=="function"||typeof g.getSnapshotBeforeUpdate=="function",M=n.pendingProps!==M,oe||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(M||J!==w)&&F1(n,g,l,w),Oa=!1;var ee=n.memoizedState;g.state=ee,Bl(n,l,g,d),Hl(),J=n.memoizedState,M||ee!==J||Oa?(typeof ce=="function"&&(Qf(n,i,ce,l),J=n.memoizedState),(I=Oa||W1(n,i,I,l,ee,J,w))?(oe||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=J),g.props=l,g.state=J,g.context=w,l=I):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,Mf(t,n),w=n.memoizedProps,oe=Oi(i,w),g.props=oe,ce=n.pendingProps,ee=g.context,J=i.contextType,I=Co,typeof J=="object"&&J!==null&&(I=Bt(J)),M=i.getDerivedStateFromProps,(J=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==ce||ee!==I)&&F1(n,g,l,I),Oa=!1,ee=n.memoizedState,g.state=ee,Bl(n,l,g,d),Hl();var ne=n.memoizedState;w!==ce||ee!==ne||Oa||t!==null&&t.dependencies!==null&&Dc(t.dependencies)?(typeof M=="function"&&(Qf(n,i,M,l),ne=n.memoizedState),(oe=Oa||W1(n,i,oe,l,ee,ne,I)||t!==null&&t.dependencies!==null&&Dc(t.dependencies))?(J||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,ne,I),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,ne,I)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ne),g.props=l,g.state=ne,g.context=I,l=oe):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),l=!1)}return g=l,Jc(t,n),l=(n.flags&128)!==0,g||l?(g=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:g.render(),n.flags|=1,t!==null&&l?(n.child=Ai(n,t.child,null,d),n.child=Ai(n,null,i,d)):It(t,n,i,d),n.memoizedState=g.state,t=n.child):t=Vr(t,n,d),t}function lm(t,n,i,l){return ki(),n.flags|=256,It(t,n,i,l),n.child}var nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rh(t){return{baseLanes:t,cachePool:Xp()}}function ah(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=Mn),t}function sm(t,n,i){var l=n.pendingProps,d=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(xt.current&2)!==0),w&&(d=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ne){if(d?_a(n):Ra(),(t=at)?(t=mv(t,Gn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:Cr,overflow:kr}:null,retryLane:536870912,hydrationErrors:null},i=Up(t),i.return=n,n.child=i,Ht=n,at=null)):t=null,t===null)throw Aa(n);return Ih(t)?n.lanes=32:n.lanes=536870912,null}var M=l.children;return l=l.fallback,d?(Ra(),d=n.mode,M=eu({mode:"hidden",children:M},d),l=Ci(l,d,i,null),M.return=n,l.return=n,M.sibling=l,n.child=M,l=n.child,l.memoizedState=rh(i),l.childLanes=ah(t,w,i),n.memoizedState=nh,ql(null,l)):(_a(n),ih(n,M))}var I=t.memoizedState;if(I!==null&&(M=I.dehydrated,M!==null)){if(g)n.flags&256?(_a(n),n.flags&=-257,n=oh(t,n,i)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),M=l.fallback,d=n.mode,l=eu({mode:"visible",children:l.children},d),M=Ci(M,d,i,null),M.flags|=2,l.return=n,M.return=n,l.sibling=M,n.child=l,Ai(n,t.child,null,i),l=n.child,l.memoizedState=rh(i),l.childLanes=ah(t,w,i),n.memoizedState=nh,n=ql(null,l));else if(_a(n),Ih(M)){if(w=M.nextSibling&&M.nextSibling.dataset,w)var J=w.dgst;w=J,l=Error(o(419)),l.stack="",l.digest=w,Ol({value:l,source:null,stack:null}),n=oh(t,n,i)}else if(Et||To(t,n,i,!1),w=(i&t.childLanes)!==0,Et||w){if(w=nt,w!==null&&(l=pc(w,i),l!==0&&l!==I.retryLane))throw I.retryLane=l,Si(t,l),mn(w,t,l),eh;Bh(M)||cu(),n=oh(t,n,i)}else Bh(M)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,at=qn(M.nextSibling),Ht=n,Ne=!0,$a=null,Gn=!1,t!==null&&qp(n,t),n=ih(n,l.children),n.flags|=4096);return n}return d?(Ra(),M=l.fallback,d=n.mode,I=t.child,J=I.sibling,l=Gr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,J!==null?M=Gr(J,M):(M=Ci(M,d,i,null),M.flags|=2),M.return=n,l.return=n,l.sibling=M,n.child=l,ql(null,l),l=n.child,M=t.child.memoizedState,M===null?M=rh(i):(d=M.cachePool,d!==null?(I=Ct._currentValue,d=d.parent!==I?{parent:I,pool:I}:d):d=Xp(),M={baseLanes:M.baseLanes|i,cachePool:d}),l.memoizedState=M,l.childLanes=ah(t,w,i),n.memoizedState=nh,ql(t.child,l)):(_a(n),i=t.child,t=i.sibling,i=Gr(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,t!==null&&(w=n.deletions,w===null?(n.deletions=[t],n.flags|=16):w.push(t)),n.child=i,n.memoizedState=null,i)}function ih(t,n){return n=eu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function eu(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function oh(t,n,i){return Ai(n,t.child,null,i),t=ih(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cm(t,n,i){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),wf(t.return,n,i)}function lh(t,n,i,l,d,g){var w=t.memoizedState;w===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d,treeForkCount:g}:(w.isBackwards=n,w.rendering=null,w.renderingStartTime=0,w.last=l,w.tail=i,w.tailMode=d,w.treeForkCount=g)}function um(t,n,i){var l=n.pendingProps,d=l.revealOrder,g=l.tail;l=l.children;var w=xt.current,M=(w&2)!==0;if(M?(w=w&1|2,n.flags|=128):w&=1,Q(xt,w),It(t,n,l,i),l=Ne?Ll:0,!M&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,i,n);else if(t.tag===19)cm(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&Gc(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),lh(n,!1,d,i,g,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Gc(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}lh(n,!0,i,null,g,l);break;case"together":lh(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Vr(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(To(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=Gr(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Gr(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function sh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dc(t)))}function W3(t,n,i){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),La(n,Ct,t.memoizedState.cache),ki();break;case 27:case 5:Te(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zf(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(_a(n),n.flags|=128,null):(i&n.child.childLanes)!==0?sm(t,n,i):(_a(n),t=Vr(t,n,i),t!==null?t.sibling:null);_a(n);break;case 19:var d=(t.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(To(t,n,i,!1),l=(i&n.childLanes)!==0),d){if(l)return um(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Q(xt,xt.current),l)break;return null;case 22:return n.lanes=0,nm(t,n,i,n.pendingProps);case 24:La(n,Ct,t.memoizedState.cache)}return Vr(t,n,i)}function dm(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)Et=!0;else{if(!sh(t,i)&&(n.flags&128)===0)return Et=!1,W3(t,n,i);Et=(t.flags&131072)!==0}else Et=!1,Ne&&(n.flags&1048576)!==0&&Pp(n,Ll,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Mi(n.elementType),n.type=t,typeof t=="function")hf(t)?(l=Oi(t,l),n.tag=1,n=om(null,n,t,l,i)):(n.tag=0,n=th(null,n,t,l,i));else{if(t!=null){var d=t.$$typeof;if(d===z){n.tag=11,n=J1(null,n,t,l,i);break e}else if(d===j){n.tag=14,n=em(null,n,t,l,i);break e}}throw n=X(t)||t,Error(o(306,n,""))}}return n;case 0:return th(t,n,n.type,n.pendingProps,i);case 1:return l=n.type,d=Oi(l,n.pendingProps),om(t,n,l,d,i);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(o(387));l=n.pendingProps;var g=n.memoizedState;d=g.element,Mf(t,n),Bl(n,l,null,i);var w=n.memoizedState;if(l=w.cache,La(n,Ct,l),l!==g.cache&&Sf(n,[Ct],i,!0),Hl(),l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){n=lm(t,n,l,i);break e}else if(l!==d){d=Bn(Error(o(424)),n),Ol(d),n=lm(t,n,l,i);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,at=qn(t.firstChild),Ht=n,Ne=!0,$a=null,Gn=!0,i=n1(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ki(),l===d){n=Vr(t,n,i);break e}It(t,n,l,i)}n=n.child}return n;case 26:return Jc(t,n),t===null?(i=Sv(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ne||(i=n.type,t=n.pendingProps,l=mu(pe.current).createElement(i),l[$t]=n,l[Vt]=t,Ut(l,i,t),wt(l),n.stateNode=l):n.memoizedState=Sv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&Ne&&(l=n.stateNode=yv(n.type,n.pendingProps,pe.current),Ht=n,Gn=!0,d=at,qa(n.type)?(Uh=d,at=qn(l.firstChild)):at=d),It(t,n,n.pendingProps.children,i),Jc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ne&&((d=l=at)&&(l=ww(l,n.type,n.pendingProps,Gn),l!==null?(n.stateNode=l,Ht=n,at=qn(l.firstChild),Gn=!1,d=!0):d=!1),d||Aa(n)),Te(n),d=n.type,g=n.pendingProps,w=t!==null?t.memoizedProps:null,l=g.children,Rh(d,g)?l=null:w!==null&&Rh(d,w)&&(n.flags|=32),n.memoizedState!==null&&(d=_f(t,n,R3,null,null,i),is._currentValue=d),Jc(t,n),It(t,n,l,i),n.child;case 6:return t===null&&Ne&&((t=i=at)&&(i=Sw(i,n.pendingProps,Gn),i!==null?(n.stateNode=i,Ht=n,at=null,t=!0):t=!1),t||Aa(n)),null;case 13:return sm(t,n,i);case 4:return ve(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ai(n,null,l,i):It(t,n,l,i),n.child;case 11:return J1(t,n,n.type,n.pendingProps,i);case 7:return It(t,n,n.pendingProps,i),n.child;case 8:return It(t,n,n.pendingProps.children,i),n.child;case 12:return It(t,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,La(n,n.type,l.value),It(t,n,l.children,i),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,ji(n),d=Bt(d),l=l(d),n.flags|=1,It(t,n,l,i),n.child;case 14:return em(t,n,n.type,n.pendingProps,i);case 15:return tm(t,n,n.type,n.pendingProps,i);case 19:return um(t,n,i);case 31:return q3(t,n,i);case 22:return nm(t,n,i,n.pendingProps);case 24:return ji(n),l=Bt(Ct),t===null?(d=Ef(),d===null&&(d=nt,g=Cf(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=i),d=g),n.memoizedState={parent:l,cache:d},Tf(n),La(n,Ct,d)):((t.lanes&i)!==0&&(Mf(t,n),Bl(n,null,null,i),Hl()),d=t.memoizedState,g=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),La(n,Ct,l)):(l=g.cache,La(n,Ct,l),l!==d.cache&&Sf(n,[Ct],i,!0))),It(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Zr(t){t.flags|=4}function ch(t,n,i,l,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(Hm())t.flags|=8192;else throw $i=Hc,jf}else t.flags&=-16777217}function fm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tv(n))if(Hm())t.flags|=8192;else throw $i=Hc,jf}function tu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?oo():536870912,t.lanes|=n,Bo|=n)}function Wl(t,n){if(!Ne)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function it(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=i,n}function F3(t,n,i){var l=n.pendingProps;switch(vf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(n),null;case 1:return it(n),null;case 3:return i=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Wr(Ct),me(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(jo(n)?Zr(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yf())),it(n),null;case 26:var d=n.type,g=n.memoizedState;return t===null?(Zr(n),g!==null?(it(n),fm(n,g)):(it(n),ch(n,d,null,l,i))):g?g!==t.memoizedState?(Zr(n),it(n),fm(n,g)):(it(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Zr(n),it(n),ch(n,d,t,l,i)),null;case 27:if(pt(n),i=pe.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Zr(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return it(n),null}t=le.current,jo(n)?Wp(n):(t=yv(d,l,i),n.stateNode=t,Zr(n))}return it(n),null;case 5:if(pt(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Zr(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return it(n),null}if(g=le.current,jo(n))Wp(n);else{var w=mu(pe.current);switch(g){case 1:g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":g=w.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof l.is=="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?g.multiple=!0:l.size&&(g.size=l.size);break;default:g=typeof l.is=="string"?w.createElement(d,{is:l.is}):w.createElement(d)}}g[$t]=n,g[Vt]=l;e:for(w=n.child;w!==null;){if(w.tag===5||w.tag===6)g.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===n)break e;for(;w.sibling===null;){if(w.return===null||w.return===n)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}n.stateNode=g;e:switch(Ut(g,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Zr(n)}}return it(n),ch(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Zr(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(t=pe.current,jo(n)){if(t=n.stateNode,i=n.memoizedProps,l=null,d=Ht,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[$t]=n,t=!!(t.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||sv(t.nodeValue,i)),t||Aa(n,!0)}else t=mu(t).createTextNode(l),t[$t]=n,n.stateNode=t}return it(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(l=jo(n),i!==null){if(t===null){if(!l)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[$t]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),t=!1}else i=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return it(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=jo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[$t]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),d=!1}else d=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=l!==null,t=t!==null&&t.memoizedState!==null,i&&(l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),g=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==d&&(l.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),tu(n,n.updateQueue),it(n),null);case 4:return me(),t===null&&Lh(n.stateNode.containerInfo),it(n),null;case 10:return Wr(n.type),it(n),null;case 19:if(W(xt),l=n.memoizedState,l===null)return it(n),null;if(d=(n.flags&128)!==0,g=l.rendering,g===null)if(d)Wl(l,!1);else{if(gt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=Gc(t),g!==null){for(n.flags|=128,Wl(l,!1),t=g.updateQueue,n.updateQueue=t,tu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Ip(i,t),i=i.sibling;return Q(xt,xt.current&1|2),Ne&&Pr(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&tn()>ou&&(n.flags|=128,d=!0,Wl(l,!1),n.lanes=4194304)}else{if(!d)if(t=Gc(g),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,tu(n,t),Wl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!g.alternate&&!Ne)return it(n),null}else 2*tn()-l.renderingStartTime>ou&&i!==536870912&&(n.flags|=128,d=!0,Wl(l,!1),n.lanes=4194304);l.isBackwards?(g.sibling=n.child,n.child=g):(t=l.last,t!==null?t.sibling=g:n.child=g,l.last=g)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=tn(),t.sibling=null,i=xt.current,Q(xt,d?i&1|2:i&1),Ne&&Pr(n,l.treeForkCount),t):(it(n),null);case 22:case 23:return jn(n),Of(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(it(n),n.subtreeFlags&6&&(n.flags|=8192)):it(n),i=n.updateQueue,i!==null&&tu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),t!==null&&W(Ti),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Wr(Ct),it(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function Y3(t,n){switch(vf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wr(Ct),me(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(o(340));ki()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ki()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(xt),null;case 4:return me(),null;case 10:return Wr(n.type),null;case 22:case 23:return jn(n),Of(),t!==null&&W(Ti),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wr(Ct),null;case 25:return null;default:return null}}function hm(t,n){switch(vf(n),n.tag){case 3:Wr(Ct),me();break;case 26:case 27:case 5:pt(n);break;case 4:me();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:W(xt);break;case 10:Wr(n.type);break;case 22:case 23:jn(n),Of(),t!==null&&W(Ti);break;case 24:Wr(Ct)}}function Fl(t,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var d=l.next;i=d;do{if((i.tag&t)===t){l=void 0;var g=i.create,w=i.inst;l=g(),w.destroy=l}i=i.next}while(i!==d)}}catch(M){Ze(n,n.return,M)}}function Na(t,n,i){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var g=d.next;l=g;do{if((l.tag&t)===t){var w=l.inst,M=w.destroy;if(M!==void 0){w.destroy=void 0,d=n;var I=i,J=M;try{J()}catch(oe){Ze(d,I,oe)}}}l=l.next}while(l!==g)}}catch(oe){Ze(n,n.return,oe)}}function gm(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{a1(n,i)}catch(l){Ze(t,t.return,l)}}}function pm(t,n,i){i.props=Oi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(l){Ze(t,n,l)}}function Yl(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof i=="function"?t.refCleanup=i(l):i.current=l}}catch(d){Ze(t,n,d)}}function Er(t,n){var i=t.ref,l=t.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(d){Ze(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){Ze(t,n,d)}else i.current=null}function mm(t){var n=t.type,i=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(d){Ze(t,t.return,d)}}function uh(t,n,i){try{var l=t.stateNode;pw(l,t.type,i,n),l[Vt]=n}catch(d){Ze(t,t.return,d)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function dh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=tr));else if(l!==4&&(l===27&&qa(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(fh(t,n,i),t=t.sibling;t!==null;)fh(t,n,i),t=t.sibling}function nu(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(l!==4&&(l===27&&qa(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(nu(t,n,i),t=t.sibling;t!==null;)nu(t,n,i),t=t.sibling}function xm(t){var n=t.stateNode,i=t.memoizedProps;try{for(var l=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Ut(n,l,i),n[$t]=t,n[Vt]=i}catch(g){Ze(t,t.return,g)}}var Xr=!1,jt=!1,hh=!1,ym=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function V3(t,n){if(t=t.containerInfo,Dh=Cu,t=Lp(t),of(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var w=0,M=-1,I=-1,J=0,oe=0,ce=t,ee=null;t:for(;;){for(var ne;ce!==i||d!==0&&ce.nodeType!==3||(M=w+d),ce!==g||l!==0&&ce.nodeType!==3||(I=w+l),ce.nodeType===3&&(w+=ce.nodeValue.length),(ne=ce.firstChild)!==null;)ee=ce,ce=ne;for(;;){if(ce===t)break t;if(ee===i&&++J===d&&(M=w),ee===g&&++oe===l&&(I=w),(ne=ce.nextSibling)!==null)break;ce=ee,ee=ce.parentNode}ce=ne}i=M===-1||I===-1?null:{start:M,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(_h={focusedElem:t,selectionRange:i},Cu=!1,Rt=n;Rt!==null;)if(n=Rt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rt=t;else for(;Rt!==null;){switch(n=Rt,g=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)d=t[i],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,i=n,d=g.memoizedProps,g=g.memoizedState,l=i.stateNode;try{var xe=Oi(i.type,d);t=l.getSnapshotBeforeUpdate(xe,g),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ce){Ze(i,i.return,Ce)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)Hh(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Rt=t;break}Rt=n.return}}function bm(t,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:Kr(t,i),l&4&&Fl(5,i);break;case 1:if(Kr(t,i),l&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(w){Ze(i,i.return,w)}else{var d=Oi(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ze(i,i.return,w)}}l&64&&gm(i),l&512&&Yl(i,i.return);break;case 3:if(Kr(t,i),l&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{a1(t,n)}catch(w){Ze(i,i.return,w)}}break;case 27:n===null&&l&4&&xm(i);case 26:case 5:Kr(t,i),n===null&&l&4&&mm(i),l&512&&Yl(i,i.return);break;case 12:Kr(t,i);break;case 31:Kr(t,i),l&4&&Cm(t,i);break;case 13:Kr(t,i),l&4&&km(t,i),l&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=rw.bind(null,i),Cw(t,i))));break;case 22:if(l=i.memoizedState!==null||Xr,!l){n=n!==null&&n.memoizedState!==null||jt,d=Xr;var g=jt;Xr=l,(jt=n)&&!g?Jr(t,i,(i.subtreeFlags&8772)!==0):Kr(t,i),Xr=d,jt=g}break;case 30:break;default:Kr(t,i)}}function wm(t){var n=t.alternate;n!==null&&(t.alternate=null,wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xl(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,fn=!1;function Qr(t,n,i){for(i=i.child;i!==null;)Sm(t,n,i),i=i.sibling}function Sm(t,n,i){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ui,i)}catch{}switch(i.tag){case 26:jt||Er(i,n),Qr(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:jt||Er(i,n);var l=ct,d=fn;qa(i.type)&&(ct=i.stateNode,fn=!1),Qr(t,n,i),ns(i.stateNode),ct=l,fn=d;break;case 5:jt||Er(i,n);case 6:if(l=ct,d=fn,ct=null,Qr(t,n,i),ct=l,fn=d,ct!==null)if(fn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(i.stateNode)}catch(g){Ze(i,n,g)}else try{ct.removeChild(i.stateNode)}catch(g){Ze(i,n,g)}break;case 18:ct!==null&&(fn?(t=ct,gv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Yo(t)):gv(ct,i.stateNode));break;case 4:l=ct,d=fn,ct=i.stateNode.containerInfo,fn=!0,Qr(t,n,i),ct=l,fn=d;break;case 0:case 11:case 14:case 15:Na(2,i,n),jt||Na(4,i,n),Qr(t,n,i);break;case 1:jt||(Er(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&pm(i,n,l)),Qr(t,n,i);break;case 21:Qr(t,n,i);break;case 22:jt=(l=jt)||i.memoizedState!==null,Qr(t,n,i),jt=l;break;default:Qr(t,n,i)}}function Cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Yo(t)}catch(i){Ze(n,n.return,i)}}}function km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yo(t)}catch(i){Ze(n,n.return,i)}}function Z3(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ym),n;default:throw Error(o(435,t.tag))}}function ru(t,n){var i=Z3(t);n.forEach(function(l){if(!i.has(l)){i.add(l);var d=aw.bind(null,t,l);l.then(d,d)}})}function hn(t,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l],g=t,w=n,M=w;e:for(;M!==null;){switch(M.tag){case 27:if(qa(M.type)){ct=M.stateNode,fn=!1;break e}break;case 5:ct=M.stateNode,fn=!1;break e;case 3:case 4:ct=M.stateNode.containerInfo,fn=!0;break e}M=M.return}if(ct===null)throw Error(o(160));Sm(g,w,d),ct=null,fn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Em(n,t),n=n.sibling}var lr=null;function Em(t,n){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:hn(n,t),gn(t),l&4&&(Na(3,t,t.return),Fl(3,t),Na(5,t,t.return));break;case 1:hn(n,t),gn(t),l&512&&(jt||i===null||Er(i,i.return)),l&64&&Xr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var d=lr;if(hn(n,t),gn(t),l&512&&(jt||i===null||Er(i,i.return)),l&4){var g=i!==null?i.memoizedState:null;if(l=t.memoizedState,i===null)if(l===null)if(t.stateNode===null){e:{l=t.type,i=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":g=d.getElementsByTagName("title")[0],(!g||g[gi]||g[$t]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(l),d.head.insertBefore(g,d.querySelector("head > title"))),Ut(g,l,i),g[$t]=t,wt(g),l=g;break e;case"link":var w=Ev("link","href",d).get(l+(i.href||""));if(w){for(var M=0;M<w.length;M++)if(g=w[M],g.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&g.getAttribute("rel")===(i.rel==null?null:i.rel)&&g.getAttribute("title")===(i.title==null?null:i.title)&&g.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){w.splice(M,1);break t}}g=d.createElement(l),Ut(g,l,i),d.head.appendChild(g);break;case"meta":if(w=Ev("meta","content",d).get(l+(i.content||""))){for(M=0;M<w.length;M++)if(g=w[M],g.getAttribute("content")===(i.content==null?null:""+i.content)&&g.getAttribute("name")===(i.name==null?null:i.name)&&g.getAttribute("property")===(i.property==null?null:i.property)&&g.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&g.getAttribute("charset")===(i.charSet==null?null:i.charSet)){w.splice(M,1);break t}}g=d.createElement(l),Ut(g,l,i),d.head.appendChild(g);break;default:throw Error(o(468,l))}g[$t]=t,wt(g),l=g}t.stateNode=l}else jv(d,t.type,t.stateNode);else t.stateNode=kv(d,l,t.memoizedProps);else g!==l?(g===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):g.count--,l===null?jv(d,t.type,t.stateNode):kv(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&uh(t,t.memoizedProps,i.memoizedProps)}break;case 27:hn(n,t),gn(t),l&512&&(jt||i===null||Er(i,i.return)),i!==null&&l&4&&uh(t,t.memoizedProps,i.memoizedProps);break;case 5:if(hn(n,t),gn(t),l&512&&(jt||i===null||Er(i,i.return)),t.flags&32){d=t.stateNode;try{wn(d,"")}catch(xe){Ze(t,t.return,xe)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,uh(t,d,i!==null?i.memoizedProps:d)),l&1024&&(hh=!0);break;case 6:if(hn(n,t),gn(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,i=t.stateNode;try{i.nodeValue=l}catch(xe){Ze(t,t.return,xe)}}break;case 3:if(yu=null,d=lr,lr=vu(n.containerInfo),hn(n,t),lr=d,gn(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(xe){Ze(t,t.return,xe)}hh&&(hh=!1,jm(t));break;case 4:l=lr,lr=vu(t.stateNode.containerInfo),hn(n,t),gn(t),lr=l;break;case 12:hn(n,t),gn(t);break;case 31:hn(n,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 13:hn(n,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(iu=tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 22:d=t.memoizedState!==null;var I=i!==null&&i.memoizedState!==null,J=Xr,oe=jt;if(Xr=J||d,jt=oe||I,hn(n,t),jt=oe,Xr=J,gn(t),l&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(i===null||I||Xr||jt||zi(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){I=i=n;try{if(g=I.stateNode,d)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{M=I.stateNode;var ce=I.memoizedProps.style,ee=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;M.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(xe){Ze(I,I.return,xe)}}}else if(n.tag===6){if(i===null){I=n;try{I.stateNode.nodeValue=d?"":I.memoizedProps}catch(xe){Ze(I,I.return,xe)}}}else if(n.tag===18){if(i===null){I=n;try{var ne=I.stateNode;d?pv(ne,!0):pv(I.stateNode,!1)}catch(xe){Ze(I,I.return,xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,ru(t,i))));break;case 19:hn(n,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 30:break;case 21:break;default:hn(n,t),gn(t)}}function gn(t){var n=t.flags;if(n&2){try{for(var i,l=t.return;l!==null;){if(vm(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var d=i.stateNode,g=dh(t);nu(t,g,d);break;case 5:var w=i.stateNode;i.flags&32&&(wn(w,""),i.flags&=-33);var M=dh(t);nu(t,M,w);break;case 3:case 4:var I=i.stateNode.containerInfo,J=dh(t);fh(t,J,I);break;default:throw Error(o(161))}}catch(oe){Ze(t,t.return,oe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function jm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Kr(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(t,n.alternate,n),n=n.sibling}function zi(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),zi(n);break;case 1:Er(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&pm(n,n.return,i),zi(n);break;case 27:ns(n.stateNode);case 26:case 5:Er(n,n.return),zi(n);break;case 22:n.memoizedState===null&&zi(n);break;case 30:zi(n);break;default:zi(n)}t=t.sibling}}function Jr(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=t,g=n,w=g.flags;switch(g.tag){case 0:case 11:case 15:Jr(d,g,i),Fl(4,g);break;case 1:if(Jr(d,g,i),l=g,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(J){Ze(l,l.return,J)}if(l=g,d=l.updateQueue,d!==null){var M=l.stateNode;try{var I=d.shared.hiddenCallbacks;if(I!==null)for(d.shared.hiddenCallbacks=null,d=0;d<I.length;d++)r1(I[d],M)}catch(J){Ze(l,l.return,J)}}i&&w&64&&gm(g),Yl(g,g.return);break;case 27:xm(g);case 26:case 5:Jr(d,g,i),i&&l===null&&w&4&&mm(g),Yl(g,g.return);break;case 12:Jr(d,g,i);break;case 31:Jr(d,g,i),i&&w&4&&Cm(d,g);break;case 13:Jr(d,g,i),i&&w&4&&km(d,g);break;case 22:g.memoizedState===null&&Jr(d,g,i),Yl(g,g.return);break;case 30:break;default:Jr(d,g,i)}n=n.sibling}}function gh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&zl(i))}function ph(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zl(t))}function sr(t,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tm(t,n,i,l),n=n.sibling}function Tm(t,n,i,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:sr(t,n,i,l),d&2048&&Fl(9,n);break;case 1:sr(t,n,i,l);break;case 3:sr(t,n,i,l),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zl(t)));break;case 12:if(d&2048){sr(t,n,i,l),t=n.stateNode;try{var g=n.memoizedProps,w=g.id,M=g.onPostCommit;typeof M=="function"&&M(w,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ze(n,n.return,I)}}else sr(t,n,i,l);break;case 31:sr(t,n,i,l);break;case 13:sr(t,n,i,l);break;case 23:break;case 22:g=n.stateNode,w=n.alternate,n.memoizedState!==null?g._visibility&2?sr(t,n,i,l):Vl(t,n):g._visibility&2?sr(t,n,i,l):(g._visibility|=2,Ro(t,n,i,l,(n.subtreeFlags&10256)!==0||!1)),d&2048&&gh(w,n);break;case 24:sr(t,n,i,l),d&2048&&ph(n.alternate,n);break;default:sr(t,n,i,l)}}function Ro(t,n,i,l,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var g=t,w=n,M=i,I=l,J=w.flags;switch(w.tag){case 0:case 11:case 15:Ro(g,w,M,I,d),Fl(8,w);break;case 23:break;case 22:var oe=w.stateNode;w.memoizedState!==null?oe._visibility&2?Ro(g,w,M,I,d):Vl(g,w):(oe._visibility|=2,Ro(g,w,M,I,d)),d&&J&2048&&gh(w.alternate,w);break;case 24:Ro(g,w,M,I,d),d&&J&2048&&ph(w.alternate,w);break;default:Ro(g,w,M,I,d)}n=n.sibling}}function Vl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,l=n,d=l.flags;switch(l.tag){case 22:Vl(i,l),d&2048&&gh(l.alternate,l);break;case 24:Vl(i,l),d&2048&&ph(l.alternate,l);break;default:Vl(i,l)}n=n.sibling}}var Zl=8192;function No(t,n,i){if(t.subtreeFlags&Zl)for(t=t.child;t!==null;)Mm(t,n,i),t=t.sibling}function Mm(t,n,i){switch(t.tag){case 26:No(t,n,i),t.flags&Zl&&t.memoizedState!==null&&_w(i,lr,t.memoizedState,t.memoizedProps);break;case 5:No(t,n,i);break;case 3:case 4:var l=lr;lr=vu(t.stateNode.containerInfo),No(t,n,i),lr=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Zl,Zl=16777216,No(t,n,i),Zl=l):No(t,n,i));break;default:No(t,n,i)}}function $m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Rt=l,Lm(l,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(t),t=t.sibling}function Am(t){switch(t.tag){case 0:case 11:case 15:Xl(t),t.flags&2048&&Na(9,t,t.return);break;case 3:Xl(t);break;case 12:Xl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,au(t)):Xl(t);break;default:Xl(t)}}function au(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Rt=l,Lm(l,t)}$m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),au(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,au(n));break;default:au(n)}t=t.sibling}}function Lm(t,n){for(;Rt!==null;){var i=Rt;switch(i.tag){case 0:case 11:case 15:Na(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zl(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Rt=l;else e:for(i=t;Rt!==null;){l=Rt;var d=l.sibling,g=l.return;if(wm(l),l===i){Rt=null;break e}if(d!==null){d.return=g,Rt=d;break e}Rt=g}}}var X3={getCacheForType:function(t){var n=Bt(Ct),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Bt(Ct).controller.signal}},Q3=typeof WeakMap=="function"?WeakMap:Map,qe=0,nt=null,ze=null,_e=0,Ve=0,Tn=null,Ha=!1,Ho=!1,mh=!1,ea=0,gt=0,Ba=0,Di=0,vh=0,Mn=0,Bo=0,Ql=null,pn=null,xh=!1,iu=0,Om=0,ou=1/0,lu=null,Ia=null,Ot=0,Ua=null,Io=null,ta=0,yh=0,bh=null,zm=null,Kl=0,wh=null;function $n(){return(qe&2)!==0&&_e!==0?_e&-_e:B.T!==null?Th():yr()}function Dm(){if(Mn===0)if((_e&536870912)===0||Ne){var t=ao;ao<<=1,(ao&3932160)===0&&(ao=262144),Mn=t}else Mn=536870912;return t=En.current,t!==null&&(t.flags|=32),Mn}function mn(t,n,i){(t===nt&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(Uo(t,0),Ga(t,_e,Mn,!1)),fi(t,i),((qe&2)===0||t!==nt)&&(t===nt&&((qe&2)===0&&(Di|=i),gt===4&&Ga(t,_e,Mn,!1)),jr(t))}function _m(t,n,i){if((qe&6)!==0)throw Error(o(327));var l=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Hr(t,n),d=l?ew(t,n):Ch(t,n,!0),g=l;do{if(d===0){Ho&&!l&&Ga(t,n,0,!1);break}else{if(i=t.current.alternate,g&&!K3(i)){d=Ch(t,n,!1),g=!1;continue}if(d===2){if(g=n,t.errorRecoveryDisabledLanes&g)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;e:{var M=t;d=Ql;var I=M.current.memoizedState.isDehydrated;if(I&&(Uo(M,w).flags|=256),w=Ch(M,w,!1),w!==2){if(mh&&!I){M.errorRecoveryDisabledLanes|=g,Di|=g,d=4;break e}g=pn,pn=d,g!==null&&(pn===null?pn=g:pn.push.apply(pn,g))}d=w}if(g=!1,d!==2)continue}}if(d===1){Uo(t,0),Ga(t,n,0,!0);break}e:{switch(l=t,g=d,g){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ga(l,n,Mn,!Ha);break e;case 2:pn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(d=iu+300-tn(),10<d)){if(Ga(l,n,Mn,!Ha),xr(l,0,!0)!==0)break e;ta=n,l.timeoutHandle=fv(Rm.bind(null,l,i,pn,lu,xh,n,Mn,Di,Bo,Ha,g,"Throttled",-0,0),d);break e}Rm(l,i,pn,lu,xh,n,Mn,Di,Bo,Ha,g,null,-0,0)}}break}while(!0);jr(t)}function Rm(t,n,i,l,d,g,w,M,I,J,oe,ce,ee,ne){if(t.timeoutHandle=-1,ce=n.subtreeFlags,ce&8192||(ce&16785408)===16785408){ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tr},Mm(n,g,ce);var xe=(g&62914560)===g?iu-tn():(g&4194048)===g?Om-tn():0;if(xe=Rw(ce,xe),xe!==null){ta=g,t.cancelPendingCommit=xe(qm.bind(null,t,n,g,i,l,d,w,M,I,oe,ce,null,ee,ne)),Ga(t,g,w,!J);return}}qm(t,n,g,i,l,d,w,M,I)}function K3(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var d=i[l],g=d.getSnapshot;d=d.value;try{if(!Cn(g(),d))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,i,l){n&=~vh,n&=~Di,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var d=n;0<d;){var g=31-Yt(d),w=1<<g;l[g]=-1,d&=~w}i!==0&&hc(t,i,n)}function su(){return(qe&6)===0?(Jl(0),!1):!0}function Sh(){if(ze!==null){if(Ve===0)var t=ze.return;else t=ze,qr=Ei=null,Hf(t),Lo=null,_l=0,t=ze;for(;t!==null;)hm(t.alternate,t),t=t.return;ze=null}}function Uo(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,xw(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ta=0,Sh(),nt=t,ze=i=Gr(t.current,null),_e=n,Ve=0,Tn=null,Ha=!1,Ho=Hr(t,n),mh=!1,Bo=Mn=vh=Di=Ba=gt=0,pn=Ql=null,xh=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var d=31-Yt(l),g=1<<d;n|=t[d],l&=~g}return ea=n,$c(),i}function Nm(t,n){$e=null,B.H=Pl,n===Ao||n===Nc?(n=Jp(),Ve=3):n===jf?(n=Jp(),Ve=4):Ve=n===eh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,ze===null&&(gt=1,Qc(t,Bn(n,t.current)))}function Hm(){var t=En.current;return t===null?!0:(_e&4194048)===_e?Pn===null:(_e&62914560)===_e||(_e&536870912)!==0?t===Pn:!1}function Bm(){var t=B.H;return B.H=Pl,t===null?Pl:t}function Im(){var t=B.A;return B.A=X3,t}function cu(){gt=4,Ha||(_e&4194048)!==_e&&En.current!==null||(Ho=!0),(Ba&134217727)===0&&(Di&134217727)===0||nt===null||Ga(nt,_e,Mn,!1)}function Ch(t,n,i){var l=qe;qe|=2;var d=Bm(),g=Im();(nt!==t||_e!==n)&&(lu=null,Uo(t,n)),n=!1;var w=gt;e:do try{if(Ve!==0&&ze!==null){var M=ze,I=Tn;switch(Ve){case 8:Sh(),w=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var J=Ve;if(Ve=0,Tn=null,Go(t,M,I,J),i&&Ho){w=0;break e}break;default:J=Ve,Ve=0,Tn=null,Go(t,M,I,J)}}J3(),w=gt;break}catch(oe){Nm(t,oe)}while(!0);return n&&t.shellSuspendCounter++,qr=Ei=null,qe=l,B.H=d,B.A=g,ze===null&&(nt=null,_e=0,$c()),w}function J3(){for(;ze!==null;)Um(ze)}function ew(t,n){var i=qe;qe|=2;var l=Bm(),d=Im();nt!==t||_e!==n?(lu=null,ou=tn()+500,Uo(t,n)):Ho=Hr(t,n);e:do try{if(Ve!==0&&ze!==null){n=ze;var g=Tn;t:switch(Ve){case 1:Ve=0,Tn=null,Go(t,n,g,1);break;case 2:case 9:if(Qp(g)){Ve=0,Tn=null,Gm(n);break}n=function(){Ve!==2&&Ve!==9||nt!==t||(Ve=7),jr(t)},g.then(n,n);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:Qp(g)?(Ve=0,Tn=null,Gm(n)):(Ve=0,Tn=null,Go(t,n,g,7));break;case 5:var w=null;switch(ze.tag){case 26:w=ze.memoizedState;case 5:case 27:var M=ze;if(w?Tv(w):M.stateNode.complete){Ve=0,Tn=null;var I=M.sibling;if(I!==null)ze=I;else{var J=M.return;J!==null?(ze=J,uu(J)):ze=null}break t}}Ve=0,Tn=null,Go(t,n,g,5);break;case 6:Ve=0,Tn=null,Go(t,n,g,6);break;case 8:Sh(),gt=6;break e;default:throw Error(o(462))}}tw();break}catch(oe){Nm(t,oe)}while(!0);return qr=Ei=null,B.H=l,B.A=d,qe=i,ze!==null?0:(nt=null,_e=0,$c(),gt)}function tw(){for(;ze!==null&&!Pd();)Um(ze)}function Um(t){var n=dm(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?uu(t):ze=n}function Gm(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=im(i,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=im(i,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Hf(n);default:hm(i,n),n=ze=Ip(n,ea),n=dm(i,n,ea)}t.memoizedProps=t.pendingProps,n===null?uu(t):ze=n}function Go(t,n,i,l){qr=Ei=null,Hf(n),Lo=null,_l=0;var d=n.return;try{if(P3(t,d,n,i,_e)){gt=1,Qc(t,Bn(i,t.current)),ze=null;return}}catch(g){if(d!==null)throw ze=d,g;gt=1,Qc(t,Bn(i,t.current)),ze=null;return}n.flags&32768?(Ne||l===1?t=!0:Ho||(_e&536870912)!==0?t=!1:(Ha=t=!0,(l===2||l===9||l===3||l===6)&&(l=En.current,l!==null&&l.tag===13&&(l.flags|=16384))),Pm(n,t)):uu(n)}function uu(t){var n=t;do{if((n.flags&32768)!==0){Pm(n,Ha);return}t=n.return;var i=F3(n.alternate,n,ea);if(i!==null){ze=i;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=t}while(n!==null);gt===0&&(gt=5)}function Pm(t,n){do{var i=Y3(t.alternate,t);if(i!==null){i.flags&=32767,ze=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ze=t;return}ze=t=i}while(t!==null);gt=6,ze=null}function qm(t,n,i,l,d,g,w,M,I){t.cancelPendingCommit=null;do du();while(Ot!==0);if((qe&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(g=n.lanes|n.childLanes,g|=df,Yd(t,i,g,w,M,I),t===nt&&(ze=nt=null,_e=0),Io=n,Ua=t,ta=i,yh=g,bh=d,zm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iw(ba,function(){return Zm(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,d=q.p,q.p=2,w=qe,qe|=4;try{V3(t,n,i)}finally{qe=w,q.p=d,B.T=l}}Ot=1,Wm(),Fm(),Ym()}}function Wm(){if(Ot===1){Ot=0;var t=Ua,n=Io,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=B.T,B.T=null;var l=q.p;q.p=2;var d=qe;qe|=4;try{Em(n,t);var g=_h,w=Lp(t.containerInfo),M=g.focusedElem,I=g.selectionRange;if(w!==M&&M&&M.ownerDocument&&Ap(M.ownerDocument.documentElement,M)){if(I!==null&&of(M)){var J=I.start,oe=I.end;if(oe===void 0&&(oe=J),"selectionStart"in M)M.selectionStart=J,M.selectionEnd=Math.min(oe,M.value.length);else{var ce=M.ownerDocument||document,ee=ce&&ce.defaultView||window;if(ee.getSelection){var ne=ee.getSelection(),xe=M.textContent.length,Ce=Math.min(I.start,xe),et=I.end===void 0?Ce:Math.min(I.end,xe);!ne.extend&&Ce>et&&(w=et,et=Ce,Ce=w);var Y=$p(M,Ce),G=$p(M,et);if(Y&&G&&(ne.rangeCount!==1||ne.anchorNode!==Y.node||ne.anchorOffset!==Y.offset||ne.focusNode!==G.node||ne.focusOffset!==G.offset)){var K=ce.createRange();K.setStart(Y.node,Y.offset),ne.removeAllRanges(),Ce>et?(ne.addRange(K),ne.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),ne.addRange(K))}}}}for(ce=[],ne=M;ne=ne.parentNode;)ne.nodeType===1&&ce.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<ce.length;M++){var se=ce[M];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Cu=!!Dh,_h=Dh=null}finally{qe=d,q.p=l,B.T=i}}t.current=n,Ot=2}}function Fm(){if(Ot===2){Ot=0;var t=Ua,n=Io,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=B.T,B.T=null;var l=q.p;q.p=2;var d=qe;qe|=4;try{bm(t,n.alternate,n)}finally{qe=d,q.p=l,B.T=i}}Ot=3}}function Ym(){if(Ot===4||Ot===3){Ot=0,qd();var t=Ua,n=Io,i=ta,l=zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ot=5:(Ot=0,Io=Ua=null,Vm(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ia=null),hi(i),n=n.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ui,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=B.T,d=q.p,q.p=2,B.T=null;try{for(var g=t.onRecoverableError,w=0;w<l.length;w++){var M=l[w];g(M.value,{componentStack:M.stack})}}finally{B.T=n,q.p=d}}(ta&3)!==0&&du(),jr(t),d=t.pendingLanes,(i&261930)!==0&&(d&42)!==0?t===wh?Kl++:(Kl=0,wh=t):Kl=0,Jl(0)}}function Vm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zl(n)))}function du(){return Wm(),Fm(),Ym(),Zm()}function Zm(){if(Ot!==5)return!1;var t=Ua,n=yh;yh=0;var i=hi(ta),l=B.T,d=q.p;try{q.p=32>i?32:i,B.T=null,i=bh,bh=null;var g=Ua,w=ta;if(Ot=0,Io=Ua=null,ta=0,(qe&6)!==0)throw Error(o(331));var M=qe;if(qe|=4,Am(g.current),Tm(g,g.current,w,i),qe=M,Jl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ui,g)}catch{}return!0}finally{q.p=d,B.T=l,Vm(t,n)}}function Xm(t,n,i){n=Bn(i,n),n=Jf(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(fi(t,2),jr(t))}function Ze(t,n,i){if(t.tag===3)Xm(t,t,i);else for(;n!==null;){if(n.tag===3){Xm(n,t,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ia===null||!Ia.has(l))){t=Bn(i,t),i=Q1(2),l=Da(n,i,2),l!==null&&(K1(i,l,n,t),fi(l,2),jr(l));break}}n=n.return}}function kh(t,n,i){var l=t.pingCache;if(l===null){l=t.pingCache=new Q3;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(i)||(mh=!0,d.add(i),t=nw.bind(null,t,n,i),n.then(t,t))}function nw(t,n,i){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,nt===t&&(_e&i)===i&&(gt===4||gt===3&&(_e&62914560)===_e&&300>tn()-iu?(qe&2)===0&&Uo(t,0):vh|=i,Bo===_e&&(Bo=0)),jr(t)}function Qm(t,n){n===0&&(n=oo()),t=Si(t,n),t!==null&&(fi(t,n),jr(t))}function rw(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Qm(t,i)}function aw(t,n){var i=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),Qm(t,i)}function iw(t,n){return Rn(t,n)}var fu=null,Po=null,Eh=!1,hu=!1,jh=!1,Pa=0;function jr(t){t!==Po&&t.next===null&&(Po===null?fu=Po=t:Po=Po.next=t),hu=!0,Eh||(Eh=!0,lw())}function Jl(t,n){if(!jh&&hu){jh=!0;do for(var i=!1,l=fu;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var g=0;else{var w=l.suspendedLanes,M=l.pingedLanes;g=(1<<31-Yt(42|t)+1)-1,g&=d&~(w&~M),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(i=!0,tv(l,g))}else g=_e,g=xr(l,l===nt?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Hr(l,g)||(i=!0,tv(l,g));l=l.next}while(i);jh=!1}}function ow(){Km()}function Km(){hu=Eh=!1;var t=0;Pa!==0&&vw()&&(t=Pa);for(var n=tn(),i=null,l=fu;l!==null;){var d=l.next,g=Jm(l,n);g===0?(l.next=null,i===null?fu=d:i.next=d,d===null&&(Po=i)):(i=l,(t!==0||(g&3)!==0)&&(hu=!0)),l=d}Ot!==0&&Ot!==5||Jl(t),Pa!==0&&(Pa=0)}function Jm(t,n){for(var i=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var w=31-Yt(g),M=1<<w,I=d[w];I===-1?((M&i)===0||(M&l)!==0)&&(d[w]=vl(M,n)):I<=n&&(t.expiredLanes|=M),g&=~M}if(n=nt,i=_e,i=xr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,i===0||t===n&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wt(l),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Hr(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(l!==null&&Wt(l),hi(i)){case 2:case 8:i=ci;break;case 32:i=ba;break;case 268435456:i=xn;break;default:i=ba}return l=ev.bind(null,t),i=Rn(i,l),t.callbackPriority=n,t.callbackNode=i,n}return l!==null&&l!==null&&Wt(l),t.callbackPriority=2,t.callbackNode=null,2}function ev(t,n){if(Ot!==0&&Ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(du()&&t.callbackNode!==i)return null;var l=_e;return l=xr(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(_m(t,l,n),Jm(t,tn()),t.callbackNode!=null&&t.callbackNode===i?ev.bind(null,t):null)}function tv(t,n){if(du())return null;_m(t,n,!0)}function lw(){yw(function(){(qe&6)!==0?Rn(sc,ow):Km()})}function Th(){if(Pa===0){var t=Mo;t===0&&(t=di,di<<=1,(di&261888)===0&&(di=256)),Pa=t}return Pa}function nv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ho(""+t)}function rv(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function sw(t,n,i,l,d){if(n==="submit"&&i&&i.stateNode===d){var g=nv((d[Vt]||null).action),w=l.submitter;w&&(n=(n=w[Vt]||null)?nv(n.formAction):w.getAttribute("formAction"),n!==null&&(g=n,w=null));var M=new ke("action","action",null,l,d);t.push({event:M,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pa!==0){var I=w?rv(d,w):new FormData(d);Yf(i,{pending:!0,data:I,method:d.method,action:g},null,I)}}else typeof g=="function"&&(M.preventDefault(),I=w?rv(d,w):new FormData(d),Yf(i,{pending:!0,data:I,method:d.method,action:g},g,I))},currentTarget:d}]})}}for(var Mh=0;Mh<uf.length;Mh++){var $h=uf[Mh],cw=$h.toLowerCase(),uw=$h[0].toUpperCase()+$h.slice(1);or(cw,"on"+uw)}or(Dp,"onAnimationEnd"),or(_p,"onAnimationIteration"),or(Rp,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(j3,"onTransitionRun"),or(T3,"onTransitionStart"),or(M3,"onTransitionCancel"),or(Np,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(es));function av(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],d=l.event;l=l.listeners;e:{var g=void 0;if(n)for(var w=l.length-1;0<=w;w--){var M=l[w],I=M.instance,J=M.currentTarget;if(M=M.listener,I!==g&&d.isPropagationStopped())break e;g=M,d.currentTarget=J;try{g(d)}catch(oe){Mc(oe)}d.currentTarget=null,g=I}else for(w=0;w<l.length;w++){if(M=l[w],I=M.instance,J=M.currentTarget,M=M.listener,I!==g&&d.isPropagationStopped())break e;g=M,d.currentTarget=J;try{g(d)}catch(oe){Mc(oe)}d.currentTarget=null,g=I}}}}function De(t,n){var i=n[bn];i===void 0&&(i=n[bn]=new Set);var l=t+"__bubble";i.has(l)||(iv(n,t,2,!1),i.add(l))}function Ah(t,n,i){var l=0;n&&(l|=4),iv(i,t,l,n)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Lh(t){if(!t[gu]){t[gu]=!0,xc.forEach(function(i){i!=="selectionchange"&&(dw.has(i)||Ah(i,!1,t),Ah(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[gu]||(n[gu]=!0,Ah("selectionchange",!1,n))}}function iv(t,n,i,l){switch(Dv(n)){case 2:var d=Bw;break;case 8:d=Iw;break;default:d=Fh}i=d.bind(null,n,i,t),d=void 0,!po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function Oh(t,n,i,l,d){var g=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var M=l.stateNode.containerInfo;if(M===d)break;if(w===4)for(w=l.return;w!==null;){var I=w.tag;if((I===3||I===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;M!==null;){if(w=sn(M),w===null)return;if(I=w.tag,I===5||I===6||I===26||I===27){l=g=w;continue e}M=M.parentNode}}l=l.return}kc(function(){var J=g,oe=go(i),ce=[];e:{var ee=Hp.get(t);if(ee!==void 0){var ne=ke,xe=t;switch(t){case"keypress":if(D(i)===0)break e;case"keydown":case"keyup":ne=a3;break;case"focusin":xe="focus",ne=Sn;break;case"focusout":xe="blur",ne=Sn;break;case"beforeblur":case"afterblur":ne=Sn;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Lt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=dn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=l3;break;case Dp:case _p:case Rp:ne=jc;break;case Np:ne=c3;break;case"scroll":case"scrollend":ne=St;break;case"wheel":ne=d3;break;case"copy":case"cut":case"paste":ne=xo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=pp;break;case"toggle":case"beforetoggle":ne=h3}var Ce=(n&4)!==0,et=!Ce&&(t==="scroll"||t==="scrollend"),Y=Ce?ee!==null?ee+"Capture":null:ee;Ce=[];for(var G=J,K;G!==null;){var se=G;if(K=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||K===null||Y===null||(se=Ta(G,Y),se!=null&&Ce.push(ts(G,se,K))),et)break;G=G.return}0<Ce.length&&(ee=new ne(ee,xe,null,i,oe),ce.push({event:ee,listeners:Ce}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",ee&&i!==nr&&(xe=i.relatedTarget||i.fromElement)&&(sn(xe)||xe[wa]))break e;if((ne||ee)&&(ee=oe.window===oe?oe:(ee=oe.ownerDocument)?ee.defaultView||ee.parentWindow:window,ne?(xe=i.relatedTarget||i.toElement,ne=J,xe=xe?sn(xe):null,xe!==null&&(et=u(xe),Ce=xe.tag,xe!==et||Ce!==5&&Ce!==27&&Ce!==6)&&(xe=null)):(ne=null,xe=J),ne!==xe)){if(Ce=Lt,se="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ce=pp,se="onPointerLeave",Y="onPointerEnter",G="pointer"),et=ne==null?ee:pi(ne),K=xe==null?ee:pi(xe),ee=new Ce(se,G+"leave",ne,i,oe),ee.target=et,ee.relatedTarget=K,se=null,sn(oe)===J&&(Ce=new Ce(Y,G+"enter",xe,i,oe),Ce.target=K,Ce.relatedTarget=et,se=Ce),et=se,ne&&xe)t:{for(Ce=fw,Y=ne,G=xe,K=0,se=Y;se;se=Ce(se))K++;se=0;for(var be=G;be;be=Ce(be))se++;for(;0<K-se;)Y=Ce(Y),K--;for(;0<se-K;)G=Ce(G),se--;for(;K--;){if(Y===G||G!==null&&Y===G.alternate){Ce=Y;break t}Y=Ce(Y),G=Ce(G)}Ce=null}else Ce=null;ne!==null&&ov(ce,ee,ne,Ce,!1),xe!==null&&et!==null&&ov(ce,et,xe,Ce,!0)}}e:{if(ee=J?pi(J):window,ne=ee.nodeName&&ee.nodeName.toLowerCase(),ne==="select"||ne==="input"&&ee.type==="file")var Ie=Cp;else if(wp(ee))if(kp)Ie=C3;else{Ie=w3;var ye=b3}else ne=ee.nodeName,!ne||ne.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&kl(J.elementType)&&(Ie=Cp):Ie=S3;if(Ie&&(Ie=Ie(t,J))){Sp(ce,Ie,i,oe);break e}ye&&ye(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Sl(ee,"number",ee.value)}switch(ye=J?pi(J):window,t){case"focusin":(wp(ye)||ye.contentEditable==="true")&&(bo=ye,lf=J,Al=null);break;case"focusout":Al=lf=bo=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Op(ce,i,oe);break;case"selectionchange":if(E3)break;case"keydown":case"keyup":Op(ce,i,oe)}var Ae;if(nf)e:{switch(t){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else yo?yp(t,i)&&(Re="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Re="onCompositionStart");Re&&(mp&&i.locale!=="ko"&&(yo||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&yo&&(Ae=Ec()):(ir=oe,El="value"in ir?ir.value:ir.textContent,yo=!0)),ye=pu(J,Re),0<ye.length&&(Re=new gp(Re,t,null,i,oe),ce.push({event:Re,listeners:ye}),Ae?Re.data=Ae:(Ae=bp(i),Ae!==null&&(Re.data=Ae)))),(Ae=p3?m3(t,i):v3(t,i))&&(Re=pu(J,"onBeforeInput"),0<Re.length&&(ye=new gp("onBeforeInput","beforeinput",null,i,oe),ce.push({event:ye,listeners:Re}),ye.data=Ae)),sw(ce,t,J,i,oe)}av(ce,n)})}function ts(t,n,i){return{instance:t,listener:n,currentTarget:i}}function pu(t,n){for(var i=n+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=Ta(t,i),d!=null&&l.unshift(ts(t,d,g)),d=Ta(t,n),d!=null&&l.push(ts(t,d,g))),t.tag===3)return l;t=t.return}return[]}function fw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ov(t,n,i,l,d){for(var g=n._reactName,w=[];i!==null&&i!==l;){var M=i,I=M.alternate,J=M.stateNode;if(M=M.tag,I!==null&&I===l)break;M!==5&&M!==26&&M!==27||J===null||(I=J,d?(J=Ta(i,g),J!=null&&w.unshift(ts(i,J,I))):d||(J=Ta(i,g),J!=null&&w.push(ts(i,J,I)))),i=i.return}w.length!==0&&t.push({event:n,listeners:w})}var hw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function lv(t){return(typeof t=="string"?t:""+t).replace(hw,`
`).replace(gw,"")}function sv(t,n){return n=lv(n),lv(t)===n}function Je(t,n,i,l,d,g){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||wn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&wn(t,""+l);break;case"className":co(t,"class",l);break;case"tabIndex":co(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":co(t,i,l);break;case"style":er(t,l,g);break;case"data":if(n!=="object"){co(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=ho(""+l),t.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(i==="formAction"?(n!=="input"&&Je(t,n,"name",d.name,d,null),Je(t,n,"formEncType",d.formEncType,d,null),Je(t,n,"formMethod",d.formMethod,d,null),Je(t,n,"formTarget",d.formTarget,d,null)):(Je(t,n,"encType",d.encType,d,null),Je(t,n,"method",d.method,d,null),Je(t,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=ho(""+l),t.setAttribute(i,l);break;case"onClick":l!=null&&(t.onclick=tr);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}i=ho(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""+l):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":l===!0?t.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,l):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(i,l):t.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(i):t.setAttribute(i,l);break;case"popover":De("beforetoggle",t),De("toggle",t),so(t,"popover",l);break;case"xlinkActuate":Jn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":so(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Jd.get(i)||i,so(t,i,l))}}function zh(t,n,i,l,d,g){switch(i){case"style":er(t,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof l=="string"?wn(t,l):(typeof l=="number"||typeof l=="bigint")&&wn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=tr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mi.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),n=i.slice(2,d?i.length-7:void 0),g=t[Vt]||null,g=g!=null?g[i]:null,typeof g=="function"&&t.removeEventListener(n,g,d),typeof l=="function")){typeof g!="function"&&g!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,l,d);break e}i in t?t[i]=l:l===!0?t.setAttribute(i,""):so(t,i,l)}}}function Ut(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,d=!1,g;for(g in i)if(i.hasOwnProperty(g)){var w=i[g];if(w!=null)switch(g){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Je(t,n,g,w,i,null)}}d&&Je(t,n,"srcSet",i.srcSet,i,null),l&&Je(t,n,"src",i.src,i,null);return;case"input":De("invalid",t);var M=g=w=d=null,I=null,J=null;for(l in i)if(i.hasOwnProperty(l)){var oe=i[l];if(oe!=null)switch(l){case"name":d=oe;break;case"type":w=oe;break;case"checked":I=oe;break;case"defaultChecked":J=oe;break;case"value":g=oe;break;case"defaultValue":M=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(o(137,n));break;default:Je(t,n,l,oe,i,null)}}wl(t,g,M,I,J,w,d,!1);return;case"select":De("invalid",t),l=w=g=null;for(d in i)if(i.hasOwnProperty(d)&&(M=i[d],M!=null))switch(d){case"value":g=M;break;case"defaultValue":w=M;break;case"multiple":l=M;default:Je(t,n,d,M,i,null)}n=g,i=w,t.multiple=!!l,n!=null?Ea(t,!!l,n,!1):i!=null&&Ea(t,!!l,i,!0);return;case"textarea":De("invalid",t),g=d=l=null;for(w in i)if(i.hasOwnProperty(w)&&(M=i[w],M!=null))switch(w){case"value":l=M;break;case"defaultValue":d=M;break;case"children":g=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(91));break;default:Je(t,n,w,M,i,null)}xi(t,l,d,g);return;case"option":for(I in i)i.hasOwnProperty(I)&&(l=i[I],l!=null)&&(I==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Je(t,n,I,l,i,null));return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<es.length;l++)De(es[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in i)if(i.hasOwnProperty(J)&&(l=i[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Je(t,n,J,l,i,null)}return;default:if(kl(n)){for(oe in i)i.hasOwnProperty(oe)&&(l=i[oe],l!==void 0&&zh(t,n,oe,l,i,void 0));return}}for(M in i)i.hasOwnProperty(M)&&(l=i[M],l!=null&&Je(t,n,M,l,i,null))}function pw(t,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,w=null,M=null,I=null,J=null,oe=null;for(ne in i){var ce=i[ne];if(i.hasOwnProperty(ne)&&ce!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":I=ce;default:l.hasOwnProperty(ne)||Je(t,n,ne,null,l,ce)}}for(var ee in l){var ne=l[ee];if(ce=i[ee],l.hasOwnProperty(ee)&&(ne!=null||ce!=null))switch(ee){case"type":g=ne;break;case"name":d=ne;break;case"checked":J=ne;break;case"defaultChecked":oe=ne;break;case"value":w=ne;break;case"defaultValue":M=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(o(137,n));break;default:ne!==ce&&Je(t,n,ee,ne,l,ce)}}bl(t,w,M,I,J,oe,g,d);return;case"select":ne=w=M=ee=null;for(g in i)if(I=i[g],i.hasOwnProperty(g)&&I!=null)switch(g){case"value":break;case"multiple":ne=I;default:l.hasOwnProperty(g)||Je(t,n,g,null,l,I)}for(d in l)if(g=l[d],I=i[d],l.hasOwnProperty(d)&&(g!=null||I!=null))switch(d){case"value":ee=g;break;case"defaultValue":M=g;break;case"multiple":w=g;default:g!==I&&Je(t,n,d,g,l,I)}n=M,i=w,l=ne,ee!=null?Ea(t,!!i,ee,!1):!!l!=!!i&&(n!=null?Ea(t,!!i,n,!0):Ea(t,!!i,i?[]:"",!1));return;case"textarea":ne=ee=null;for(M in i)if(d=i[M],i.hasOwnProperty(M)&&d!=null&&!l.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:Je(t,n,M,null,l,d)}for(w in l)if(d=l[w],g=i[w],l.hasOwnProperty(w)&&(d!=null||g!=null))switch(w){case"value":ee=d;break;case"defaultValue":ne=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==g&&Je(t,n,w,d,l,g)}Cl(t,ee,ne);return;case"option":for(var xe in i)ee=i[xe],i.hasOwnProperty(xe)&&ee!=null&&!l.hasOwnProperty(xe)&&(xe==="selected"?t.selected=!1:Je(t,n,xe,null,l,ee));for(I in l)ee=l[I],ne=i[I],l.hasOwnProperty(I)&&ee!==ne&&(ee!=null||ne!=null)&&(I==="selected"?t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Je(t,n,I,ee,l,ne));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in i)ee=i[Ce],i.hasOwnProperty(Ce)&&ee!=null&&!l.hasOwnProperty(Ce)&&Je(t,n,Ce,null,l,ee);for(J in l)if(ee=l[J],ne=i[J],l.hasOwnProperty(J)&&ee!==ne&&(ee!=null||ne!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(o(137,n));break;default:Je(t,n,J,ee,l,ne)}return;default:if(kl(n)){for(var et in i)ee=i[et],i.hasOwnProperty(et)&&ee!==void 0&&!l.hasOwnProperty(et)&&zh(t,n,et,void 0,l,ee);for(oe in l)ee=l[oe],ne=i[oe],!l.hasOwnProperty(oe)||ee===ne||ee===void 0&&ne===void 0||zh(t,n,oe,ee,l,ne);return}}for(var Y in i)ee=i[Y],i.hasOwnProperty(Y)&&ee!=null&&!l.hasOwnProperty(Y)&&Je(t,n,Y,null,l,ee);for(ce in l)ee=l[ce],ne=i[ce],!l.hasOwnProperty(ce)||ee===ne||ee==null&&ne==null||Je(t,n,ce,ee,l,ne)}function cv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var d=i[l],g=d.transferSize,w=d.initiatorType,M=d.duration;if(g&&M&&cv(w)){for(w=0,M=d.responseEnd,l+=1;l<i.length;l++){var I=i[l],J=I.startTime;if(J>M)break;var oe=I.transferSize,ce=I.initiatorType;oe&&cv(ce)&&(I=I.responseEnd,w+=oe*(I<M?1:(M-J)/(I-J)))}if(--l,n+=8*(g+w)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dh=null,_h=null;function mu(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nh=null;function vw(){var t=window.event;return t&&t.type==="popstate"?t===Nh?!1:(Nh=t,!0):(Nh=null,!1)}var fv=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,yw=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(bw)}:fv;function bw(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function gv(t,n){var i=n,l=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"||i==="/&"){if(l===0){t.removeChild(d),Yo(n);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")ns(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,ns(i);for(var g=i.firstChild;g;){var w=g.nextSibling,M=g.nodeName;g[gi]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&g.rel.toLowerCase()==="stylesheet"||i.removeChild(g),g=w}}else i==="body"&&ns(t.ownerDocument.body);i=d}while(i);Yo(n)}function pv(t,n){var i=t;t=0;do{var l=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=l}while(i)}function Hh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Hh(i),xl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ww(t,n,i,l){for(;t.nodeType===1;){var d=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[gi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function Sw(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=qn(t.nextSibling),t===null))return null;return t}function mv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=qn(t.nextSibling),t===null))return null;return t}function Bh(t){return t.data==="$?"||t.data==="$~"}function Ih(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Cw(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function qn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uh=null;function vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return qn(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function yv(t,n,i){switch(n=mu(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function ns(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xl(t)}var Wn=new Map,bv=new Set;function vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=q.d;q.d={f:kw,r:Ew,D:jw,C:Tw,L:Mw,m:$w,X:Lw,S:Aw,M:Ow};function kw(){var t=na.f(),n=su();return t||n}function Ew(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?N1(n):na.r(t)}var qo=typeof document>"u"?null:document;function wv(t,n,i){var l=qo;if(l&&typeof n=="string"&&n){var d=cn(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),bv.has(d)||(bv.add(d),t={rel:t,crossOrigin:i,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),Ut(n,"link",t),wt(n),l.head.appendChild(n)))}}function jw(t){na.D(t),wv("dns-prefetch",t,null)}function Tw(t,n){na.C(t,n),wv("preconnect",t,n)}function Mw(t,n,i){na.L(t,n,i);var l=qo;if(l&&t&&n){var d='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+cn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+cn(i.imageSizes)+'"]')):d+='[href="'+cn(t)+'"]';var g=d;switch(n){case"style":g=Wo(t);break;case"script":g=Fo(t)}Wn.has(g)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Wn.set(g,t),l.querySelector(d)!==null||n==="style"&&l.querySelector(rs(g))||n==="script"&&l.querySelector(as(g))||(n=l.createElement("link"),Ut(n,"link",t),wt(n),l.head.appendChild(n)))}}function $w(t,n){na.m(t,n);var i=qo;if(i&&t){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+cn(l)+'"][href="'+cn(t)+'"]',g=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Fo(t)}if(!Wn.has(g)&&(t=v({rel:"modulepreload",href:t},n),Wn.set(g,t),i.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(as(g)))return}l=i.createElement("link"),Ut(l,"link",t),wt(l),i.head.appendChild(l)}}}function Aw(t,n,i){na.S(t,n,i);var l=qo;if(l&&t){var d=Ca(l).hoistableStyles,g=Wo(t);n=n||"default";var w=d.get(g);if(!w){var M={loading:0,preload:null};if(w=l.querySelector(rs(g)))M.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Wn.get(g))&&Gh(t,i);var I=w=l.createElement("link");wt(I),Ut(I,"link",t),I._p=new Promise(function(J,oe){I.onload=J,I.onerror=oe}),I.addEventListener("load",function(){M.loading|=1}),I.addEventListener("error",function(){M.loading|=2}),M.loading|=4,xu(w,n,l)}w={type:"stylesheet",instance:w,count:1,state:M},d.set(g,w)}}}function Lw(t,n){na.X(t,n);var i=qo;if(i&&t){var l=Ca(i).hoistableScripts,d=Fo(t),g=l.get(d);g||(g=i.querySelector(as(d)),g||(t=v({src:t,async:!0},n),(n=Wn.get(d))&&Ph(t,n),g=i.createElement("script"),wt(g),Ut(g,"link",t),i.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function Ow(t,n){na.M(t,n);var i=qo;if(i&&t){var l=Ca(i).hoistableScripts,d=Fo(t),g=l.get(d);g||(g=i.querySelector(as(d)),g||(t=v({src:t,async:!0,type:"module"},n),(n=Wn.get(d))&&Ph(t,n),g=i.createElement("script"),wt(g),Ut(g,"link",t),i.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function Sv(t,n,i,l){var d=(d=pe.current)?vu(d):null;if(!d)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Wo(i.href),i=Ca(d).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Wo(i.href);var g=Ca(d).hoistableStyles,w=g.get(t);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,w),(g=d.querySelector(rs(t)))&&!g._p&&(w.instance=g,w.state.loading=5),Wn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Wn.set(t,i),g||zw(d,t,i,w.state))),n&&l===null)throw Error(o(528,""));return w}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fo(i),i=Ca(d).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Wo(t){return'href="'+cn(t)+'"'}function rs(t){return'link[rel="stylesheet"]['+t+"]"}function Cv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function zw(t,n,i,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Ut(n,"link",i),wt(n),t.head.appendChild(n))}function Fo(t){return'[src="'+cn(t)+'"]'}function as(t){return"script[async]"+t}function kv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+cn(i.href)+'"]');if(l)return n.instance=l,wt(l),l;var d=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),Ut(l,"style",d),xu(l,i.precedence,t),n.instance=l;case"stylesheet":d=Wo(i.href);var g=t.querySelector(rs(d));if(g)return n.state.loading|=4,n.instance=g,wt(g),g;l=Cv(i),(d=Wn.get(d))&&Gh(l,d),g=(t.ownerDocument||t).createElement("link"),wt(g);var w=g;return w._p=new Promise(function(M,I){w.onload=M,w.onerror=I}),Ut(g,"link",l),n.state.loading|=4,xu(g,i.precedence,t),n.instance=g;case"script":return g=Fo(i.src),(d=t.querySelector(as(g)))?(n.instance=d,wt(d),d):(l=i,(d=Wn.get(g))&&(l=v({},i),Ph(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),wt(d),Ut(d,"link",l),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,xu(l,i.precedence,t));return n.instance}function xu(t,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,g=d,w=0;w<l.length;w++){var M=l[w];if(M.dataset.precedence===n)g=M;else if(g!==d)break}g?g.parentNode.insertBefore(t,g.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ph(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yu=null;function Ev(t,n,i){if(yu===null){var l=new Map,d=yu=new Map;d.set(i,l)}else d=yu,l=d.get(i),l||(l=new Map,d.set(i,l));if(l.has(t))return l;for(l.set(t,null),i=i.getElementsByTagName(t),d=0;d<i.length;d++){var g=i[d];if(!(g[gi]||g[$t]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(n)||"";w=t+w;var M=l.get(w);M?M.push(g):l.set(w,[g])}}return l}function jv(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function Dw(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _w(t,n,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=Wo(l.href),g=n.querySelector(rs(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=bu.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=g,wt(g);return}g=n.ownerDocument||n,l=Cv(l),(d=Wn.get(d))&&Gh(l,d),g=g.createElement("link"),wt(g);var w=g;w._p=new Promise(function(M,I){w.onload=M,w.onerror=I}),Ut(g,"link",l),i.instance=g}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=bu.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var qh=0;function Rw(t,n){return t.stylesheets&&t.count===0&&Su(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var l=setTimeout(function(){if(t.stylesheets&&Su(t,t.stylesheets),t.unsuspend){var g=t.unsuspend;t.unsuspend=null,g()}},6e4+n);0<t.imgBytes&&qh===0&&(qh=62500*mw());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Su(t,t.stylesheets),t.unsuspend)){var g=t.unsuspend;t.unsuspend=null,g()}},(t.imgBytes>qh?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function bu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Su(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wu=null;function Su(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wu=new Map,n.forEach(Nw,t),wu=null,bu.call(t))}function Nw(t,n){if(!(n.state.loading&4)){var i=wu.get(t);if(i)var l=i.get(null);else{i=new Map,wu.set(t,i);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var w=d[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(i.set(w.dataset.precedence,w),l=w)}l&&i.set(null,l)}d=n.instance,w=d.getAttribute("data-precedence"),g=i.get(w)||l,g===l&&i.set(null,d),i.set(w,d),this.count++,l=bu.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),g?g.parentNode.insertBefore(d,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var is={$$typeof:N,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Hw(t,n,i,l,d,g,w,M,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Br(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.hiddenUpdates=Br(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Mv(t,n,i,l,d,g,w,M,I,J,oe,ce){return t=new Hw(t,n,i,w,I,J,oe,ce,M),n=1,g===!0&&(n|=24),g=kn(3,null,null,n),t.current=g,g.stateNode=t,n=Cf(),n.refCount++,t.pooledCache=n,n.refCount++,g.memoizedState={element:l,isDehydrated:i,cache:n},Tf(g),t}function $v(t){return t?(t=Co,t):Co}function Av(t,n,i,l,d,g){d=$v(d),l.context===null?l.context=d:l.pendingContext=d,l=za(n),l.payload={element:i},g=g===void 0?null:g,g!==null&&(l.callback=g),i=Da(t,l,n),i!==null&&(mn(i,t,n),Nl(i,t,n))}function Lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Wh(t,n){Lv(t,n),(t=t.alternate)&&Lv(t,n)}function Ov(t){if(t.tag===13||t.tag===31){var n=Si(t,67108864);n!==null&&mn(n,t,67108864),Wh(t,67108864)}}function zv(t){if(t.tag===13||t.tag===31){var n=$n();n=lo(n);var i=Si(t,n);i!==null&&mn(i,t,n),Wh(t,n)}}var Cu=!0;function Bw(t,n,i,l){var d=B.T;B.T=null;var g=q.p;try{q.p=2,Fh(t,n,i,l)}finally{q.p=g,B.T=d}}function Iw(t,n,i,l){var d=B.T;B.T=null;var g=q.p;try{q.p=8,Fh(t,n,i,l)}finally{q.p=g,B.T=d}}function Fh(t,n,i,l){if(Cu){var d=Yh(l);if(d===null)Oh(t,n,l,ku,i),_v(t,l);else if(Gw(d,t,n,i,l))l.stopPropagation();else if(_v(t,l),n&4&&-1<Uw.indexOf(t)){for(;d!==null;){var g=Sa(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Kn(g.pendingLanes);if(w!==0){var M=g;for(M.pendingLanes|=2,M.entangledLanes|=2;w;){var I=1<<31-Yt(w);M.entanglements[1]|=I,w&=~I}jr(g),(qe&6)===0&&(ou=tn()+500,Jl(0))}}break;case 31:case 13:M=Si(g,2),M!==null&&mn(M,g,2),su(),Wh(g,2)}if(g=Yh(l),g===null&&Oh(t,n,l,ku,i),g===d)break;d=g}d!==null&&l.stopPropagation()}else Oh(t,n,l,null,i)}}function Yh(t){return t=go(t),Vh(t)}var ku=null;function Vh(t){if(ku=null,t=sn(t),t!==null){var n=u(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=f(n),t!==null)return t;t=null}else if(i===31){if(t=p(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ku=t,null}function Dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wd()){case sc:return 2;case ci:return 8;case ba:case cc:return 32;case xn:return 268435456;default:return 32}default:return 32}}var Zh=!1,Wa=null,Fa=null,Ya=null,os=new Map,ls=new Map,Va=[],Uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":os.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function ss(t,n,i,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},n!==null&&(n=Sa(n),n!==null&&Ov(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Gw(t,n,i,l,d){switch(n){case"focusin":return Wa=ss(Wa,t,n,i,l,d),!0;case"dragenter":return Fa=ss(Fa,t,n,i,l,d),!0;case"mouseover":return Ya=ss(Ya,t,n,i,l,d),!0;case"pointerover":var g=d.pointerId;return os.set(g,ss(os.get(g)||null,t,n,i,l,d)),!0;case"gotpointercapture":return g=d.pointerId,ls.set(g,ss(ls.get(g)||null,t,n,i,l,d)),!0}return!1}function Rv(t){var n=sn(t.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=f(i),n!==null){t.blockedOn=n,mc(t.priority,function(){zv(i)});return}}else if(n===31){if(n=p(i),n!==null){t.blockedOn=n,mc(t.priority,function(){zv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Yh(t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);nr=l,i.target.dispatchEvent(l),nr=null}else return n=Sa(i),n!==null&&Ov(n),t.blockedOn=i,!1;n.shift()}return!0}function Nv(t,n,i){Eu(t)&&i.delete(n)}function Pw(){Zh=!1,Wa!==null&&Eu(Wa)&&(Wa=null),Fa!==null&&Eu(Fa)&&(Fa=null),Ya!==null&&Eu(Ya)&&(Ya=null),os.forEach(Nv),ls.forEach(Nv)}function ju(t,n){t.blockedOn===n&&(t.blockedOn=null,Zh||(Zh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pw)))}var Tu=null;function Hv(t){Tu!==t&&(Tu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Tu===t&&(Tu=null);for(var n=0;n<t.length;n+=3){var i=t[n],l=t[n+1],d=t[n+2];if(typeof l!="function"){if(Vh(l||i)===null)continue;break}var g=Sa(i);g!==null&&(t.splice(n,3),n-=3,Yf(g,{pending:!0,data:d,method:i.method,action:l},l,d))}}))}function Yo(t){function n(I){return ju(I,t)}Wa!==null&&ju(Wa,t),Fa!==null&&ju(Fa,t),Ya!==null&&ju(Ya,t),os.forEach(n),ls.forEach(n);for(var i=0;i<Va.length;i++){var l=Va[i];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Va.length&&(i=Va[0],i.blockedOn===null);)Rv(i),i.blockedOn===null&&Va.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var d=i[l],g=i[l+1],w=d[Vt]||null;if(typeof g=="function")w||Hv(i);else if(w){var M=null;if(g&&g.hasAttribute("formAction")){if(d=g,w=g[Vt]||null)M=w.formAction;else if(Vh(d)!==null)continue}else M=w.action;typeof M=="function"?i[l+1]=M:(i.splice(l,3),l-=3),Hv(i)}}}function Bv(){function t(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(w){return d=w})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function Xh(t){this._internalRoot=t}Mu.prototype.render=Xh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,l=$n();Av(i,l,t,n,null,null)},Mu.prototype.unmount=Xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Av(t.current,2,null,t,null,null),su(),n[wa]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var n=yr();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Va.length&&n!==0&&n<Va[i].priority;i++);Va.splice(i,0,t),i===0&&Rv(t)}};var Iv=r.version;if(Iv!=="19.2.4")throw Error(o(527,Iv,"19.2.4"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=x(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var qw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{ui=$u.inject(qw),Ft=$u}catch{}}return us.createRoot=function(t,n){if(!s(t))throw Error(o(299));var i=!1,l="",d=Y1,g=V1,w=Z1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError)),n=Mv(t,1,!1,null,null,i,l,null,d,g,w,Bv),t[wa]=n.current,Lh(t),new Xh(n)},us.hydrateRoot=function(t,n,i){if(!s(t))throw Error(o(299));var l=!1,d="",g=Y1,w=V1,M=Z1,I=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(g=i.onUncaughtError),i.onCaughtError!==void 0&&(w=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.formState!==void 0&&(I=i.formState)),n=Mv(t,1,!0,n,i??null,l,d,I,g,w,M,Bv),n.context=$v(null),i=n.current,l=$n(),l=lo(l),d=za(l),d.callback=null,Da(i,d,l),i=l,n.current.lanes=i,fi(n,i),jr(n),t[wa]=n.current,Lh(t),new Mu(n)},us.version="19.2.4",us}var Xv;function Jw(){if(Xv)return Jh.exports;Xv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Jh.exports=Kw(),Jh.exports}var e4=Jw(),Pe=function(){return Pe=Object.assign||function(r){for(var a,o=1,s=arguments.length;o<s;o++){a=arguments[o];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])}return r},Pe.apply(this,arguments)};function Vn(e,r,a){if(a||arguments.length===2)for(var o=0,s=r.length,u;o<s;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return e.concat(u||Array.prototype.slice.call(r))}var ot="-ms-",Os="-moz-",We="-webkit-",h2="comm",Cd="rule",bg="decl",t4="@import",n4="@namespace",g2="@keyframes",r4="@layer",p2=Math.abs,wg=String.fromCharCode,_0=Object.assign;function a4(e,r){return zt(e,0)^45?(((r<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}function m2(e){return e.trim()}function sa(e,r){return(e=r.exec(e))?e[0]:e}function Le(e,r,a){return e.replace(r,a)}function Iu(e,r,a){return e.indexOf(r,a)}function zt(e,r){return e.charCodeAt(r)|0}function Xi(e,r,a){return e.slice(r,a)}function ur(e){return e.length}function v2(e){return e.length}function ks(e,r){return r.push(e),e}function i4(e,r){return e.map(r).join("")}function Qv(e,r){return e.filter(function(a){return!sa(a,r)})}var kd=1,il=1,x2=0,Zn=0,Tt=0,hl="";function Ed(e,r,a,o,s,u,f,p){return{value:e,root:r,parent:a,type:o,props:s,children:u,line:kd,column:il,length:f,return:"",siblings:p}}function Qa(e,r){return _0(Ed("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Vo(e){for(;e.root;)e=Qa(e.root,{children:[e]});ks(e,e.siblings)}function o4(){return Tt}function l4(){return Tt=Zn>0?zt(hl,--Zn):0,il--,Tt===10&&(il=1,kd--),Tt}function fr(){return Tt=Zn<x2?zt(hl,Zn++):0,il++,Tt===10&&(il=1,kd++),Tt}function ei(){return zt(hl,Zn)}function Uu(){return Zn}function jd(e,r){return Xi(hl,e,r)}function Us(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s4(e){return kd=il=1,x2=ur(hl=e),Zn=0,[]}function c4(e){return hl="",e}function r0(e){return m2(jd(Zn-1,R0(e===91?e+2:e===40?e+1:e)))}function u4(e){for(;(Tt=ei())&&Tt<33;)fr();return Us(e)>2||Us(Tt)>3?"":" "}function d4(e,r){for(;--r&&fr()&&!(Tt<48||Tt>102||Tt>57&&Tt<65||Tt>70&&Tt<97););return jd(e,Uu()+(r<6&&ei()==32&&fr()==32))}function R0(e){for(;fr();)switch(Tt){case e:return Zn;case 34:case 39:e!==34&&e!==39&&R0(Tt);break;case 40:e===41&&R0(e);break;case 92:fr();break}return Zn}function f4(e,r){for(;fr()&&e+Tt!==57;)if(e+Tt===84&&ei()===47)break;return"/*"+jd(r,Zn-1)+"*"+wg(e===47?e:fr())}function h4(e){for(;!Us(ei());)fr();return jd(e,Zn)}function g4(e){return c4(Gu("",null,null,null,[""],e=s4(e),0,[0],e))}function Gu(e,r,a,o,s,u,f,p,m){for(var x=0,y=0,v=f,k=0,C=0,S=0,E=1,T=1,$=1,L=0,N="",z=s,_=u,H=o,j=N;T;)switch(S=L,L=fr()){case 40:if(S!=108&&zt(j,v-1)==58){Iu(j+=Le(r0(L),"&","&\f"),"&\f",p2(x?p[x-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:j+=r0(L);break;case 9:case 10:case 13:case 32:j+=u4(S);break;case 92:j+=d4(Uu()-1,7);continue;case 47:switch(ei()){case 42:case 47:ks(p4(f4(fr(),Uu()),r,a,m),m),(Us(S||1)==5||Us(ei()||1)==5)&&ur(j)&&Xi(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*E:p[x++]=ur(j)*$;case 125*E:case 59:case 0:switch(L){case 0:case 125:T=0;case 59+y:$==-1&&(j=Le(j,/\f/g,"")),C>0&&(ur(j)-v||E===0&&S===47)&&ks(C>32?Jv(j+";",o,a,v-1,m):Jv(Le(j," ","")+";",o,a,v-2,m),m);break;case 59:j+=";";default:if(ks(H=Kv(j,r,a,x,y,s,p,N,z=[],_=[],v,u),u),L===123)if(y===0)Gu(j,r,H,H,z,u,v,p,_);else{switch(k){case 99:if(zt(j,3)===110)break;case 108:if(zt(j,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Gu(e,H,H,o&&ks(Kv(e,H,H,0,0,s,p,N,s,z=[],v,_),_),s,_,v,p,o?z:_):Gu(j,H,H,H,[""],_,0,p,_)}}x=y=C=0,E=$=1,N=j="",v=f;break;case 58:v=1+ur(j),C=S;default:if(E<1){if(L==123)--E;else if(L==125&&E++==0&&l4()==125)continue}switch(j+=wg(L),L*E){case 38:$=y>0?1:(j+="\f",-1);break;case 44:p[x++]=(ur(j)-1)*$,$=1;break;case 64:ei()===45&&(j+=r0(fr())),k=ei(),y=v=ur(N=j+=h4(Uu())),L++;break;case 45:S===45&&ur(j)==2&&(E=0)}}return u}function Kv(e,r,a,o,s,u,f,p,m,x,y,v){for(var k=s-1,C=s===0?u:[""],S=v2(C),E=0,T=0,$=0;E<o;++E)for(var L=0,N=Xi(e,k+1,k=p2(T=f[E])),z=e;L<S;++L)(z=m2(T>0?C[L]+" "+N:Le(N,/&\f/g,C[L])))&&(m[$++]=z);return Ed(e,r,a,s===0?Cd:p,m,x,y,v)}function p4(e,r,a,o){return Ed(e,r,a,h2,wg(o4()),Xi(e,2,-2),0,o)}function Jv(e,r,a,o,s){return Ed(e,r,a,bg,Xi(e,0,o),Xi(e,o+1,-1),o,s)}function y2(e,r,a){switch(a4(e,r)){case 5103:return We+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return We+e+e;case 4855:return We+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Os+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return We+e+Os+e+ot+e+e;case 5936:switch(zt(e,r+11)){case 114:return We+e+ot+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return We+e+ot+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return We+e+ot+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return We+e+ot+e+e;case 6165:return We+e+ot+"flex-"+e+e;case 5187:return We+e+Le(e,/(\w+).+(:[^]+)/,We+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return We+e+ot+"flex-item-"+Le(e,/flex-|-self/g,"")+(sa(e,/flex-|baseline/)?"":ot+"grid-row-"+Le(e,/flex-|-self/g,""))+e;case 4675:return We+e+ot+"flex-line-pack"+Le(e,/align-content|flex-|-self/g,"")+e;case 5548:return We+e+ot+Le(e,"shrink","negative")+e;case 5292:return We+e+ot+Le(e,"basis","preferred-size")+e;case 6060:return We+"box-"+Le(e,"-grow","")+We+e+ot+Le(e,"grow","positive")+e;case 4554:return We+Le(e,/([^-])(transform)/g,"$1"+We+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+ot+"flex-pack:$3"),/space-between/,"justify")+We+e+e;case 4200:if(!sa(e,/flex-|baseline/))return ot+"grid-column-align"+Xi(e,r)+e;break;case 2592:case 3360:return ot+Le(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(o,s){return r=s,sa(o.props,/grid-\w+-end/)})?~Iu(e+(a=a[r].value),"span",0)?e:ot+Le(e,"-start","")+e+ot+"grid-row-span:"+(~Iu(a,"span",0)?sa(a,/\d+/):+sa(a,/\d+/)-+sa(e,/\d+/))+";":ot+Le(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(o){return sa(o.props,/grid-\w+-start/)})?e:ot+Le(Le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,We+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ur(e)-1-r>6)switch(zt(e,r+1)){case 109:if(zt(e,r+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+Os+(zt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Iu(e,"stretch",0)?y2(Le(e,"stretch","fill-available"),r,a)+e:e}break;case 5152:case 5920:return Le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,u,f,p,m,x){return ot+s+":"+u+x+(f?ot+s+"-span:"+(p?m:+m-+u)+x:"")+e});case 4949:if(zt(e,r+6)===121)return Le(e,":",":"+We)+e;break;case 6444:switch(zt(e,zt(e,14)===45?18:11)){case 120:return Le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+We+(zt(e,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+ot+"$2box$3")+e;case 100:return Le(e,":",":"+ot)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(e,"scroll-","scroll-snap-")+e}return e}function td(e,r){for(var a="",o=0;o<e.length;o++)a+=r(e[o],o,e,r)||"";return a}function m4(e,r,a,o){switch(e.type){case r4:if(e.children.length)break;case t4:case n4:case bg:return e.return=e.return||e.value;case h2:return"";case g2:return e.return=e.value+"{"+td(e.children,o)+"}";case Cd:if(!ur(e.value=e.props.join(",")))return""}return ur(a=td(e.children,o))?e.return=e.value+"{"+a+"}":""}function v4(e){var r=v2(e);return function(a,o,s,u){for(var f="",p=0;p<r;p++)f+=e[p](a,o,s,u)||"";return f}}function x4(e){return function(r){r.root||(r=r.return)&&e(r)}}function y4(e,r,a,o){if(e.length>-1&&!e.return)switch(e.type){case bg:e.return=y2(e.value,e.length,a);return;case g2:return td([Qa(e,{value:Le(e.value,"@","@"+We)})],o);case Cd:if(e.length)return i4(a=e.props,function(s){switch(sa(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vo(Qa(e,{props:[Le(s,/:(read-\w+)/,":"+Os+"$1")]})),Vo(Qa(e,{props:[s]})),_0(e,{props:Qv(a,o)});break;case"::placeholder":Vo(Qa(e,{props:[Le(s,/:(plac\w+)/,":"+We+"input-$1")]})),Vo(Qa(e,{props:[Le(s,/:(plac\w+)/,":"+Os+"$1")]})),Vo(Qa(e,{props:[Le(s,/:(plac\w+)/,ot+"input-$1")]})),Vo(Qa(e,{props:[s]})),_0(e,{props:Qv(a,o)});break}return""})}}var b2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ln={},ol=typeof process<"u"&&Ln!==void 0&&(Ln.REACT_APP_SC_ATTR||Ln.SC_ATTR)||"data-styled",w2="active",S2="data-styled-version",Td="6.3.10",Sg=`/*!sc*/
`,zs=typeof window<"u"&&typeof document<"u",b4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ln!==void 0&&Ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ln.REACT_APP_SC_DISABLE_SPEEDY!==""?Ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ln!==void 0&&Ln.SC_DISABLE_SPEEDY!==void 0&&Ln.SC_DISABLE_SPEEDY!==""&&Ln.SC_DISABLE_SPEEDY!=="false"&&Ln.SC_DISABLE_SPEEDY),w4={};function Qi(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Pu=new Map,nd=new Map,qu=1,Es=function(e){if(Pu.has(e))return Pu.get(e);for(;nd.has(qu);)qu++;var r=qu++;return Pu.set(e,r),nd.set(r,e),r},S4=function(e,r){qu=r+1,Pu.set(e,r),nd.set(r,e)},Cg=Object.freeze([]),ll=Object.freeze({});function C2(e,r,a){return a===void 0&&(a=ll),e.theme!==a.theme&&e.theme||r||a.theme}var k2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),C4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k4=/(^-|-$)/g;function ex(e){return e.replace(C4,"-").replace(k4,"")}var E4=/(a)(d)/gi,tx=function(e){return String.fromCharCode(e+(e>25?39:97))};function N0(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=tx(r%52)+a;return(tx(r%52)+a).replace(E4,"$1-$2")}var a0,Ui=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},E2=function(e){return Ui(5381,e)};function kg(e){return N0(E2(e)>>>0)}function j4(e){return e.displayName||e.name||"Component"}function i0(e){return typeof e=="string"&&!0}var j2=typeof Symbol=="function"&&Symbol.for,T2=j2?Symbol.for("react.memo"):60115,T4=j2?Symbol.for("react.forward_ref"):60112,M4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},M2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A4=((a0={})[T4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a0[T2]=M2,a0);function nx(e){return("type"in(r=e)&&r.type.$$typeof)===T2?M2:"$$typeof"in e?A4[e.$$typeof]:M4;var r}var L4=Object.defineProperty,O4=Object.getOwnPropertyNames,rx=Object.getOwnPropertySymbols,z4=Object.getOwnPropertyDescriptor,D4=Object.getPrototypeOf,ax=Object.prototype;function $2(e,r,a){if(typeof r!="string"){if(ax){var o=D4(r);o&&o!==ax&&$2(e,o,a)}var s=O4(r);rx&&(s=s.concat(rx(r)));for(var u=nx(e),f=nx(r),p=0;p<s.length;++p){var m=s[p];if(!(m in $4||a&&a[m]||f&&m in f||u&&m in u)){var x=z4(r,m);try{L4(e,m,x)}catch{}}}}return e}function Ki(e){return typeof e=="function"}function Eg(e){return typeof e=="object"&&"styledComponentId"in e}function Fi(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function rd(e,r){return e.join("")}function Gs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function H0(e,r,a){if(a===void 0&&(a=!1),!a&&!Gs(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=H0(e[o],r[o]);else if(Gs(r))for(var o in r)e[o]=H0(e[o],r[o]);return e}function jg(e,r){Object.defineProperty(e,"toString",{value:r})}var _4=(function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var a=this._cIndex;if(r>this._cGroup)for(var o=this._cGroup;o<r;o++)a+=this.groupSizes[o];else for(o=this._cGroup-1;o>=r;o--)a-=this.groupSizes[o];return this._cGroup=r,this._cIndex=a,a},e.prototype.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,u=s;r>=u;)if((u<<=1)<0)throw Qi(16,"".concat(r));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var f=s;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(r+1),m=0,x=(f=0,a.length);f<x;f++)this.tag.insertRule(p,a[f])&&(this.groupSizes[r]++,p++,m++);m>0&&this._cGroup>r&&(this._cIndex+=m)},e.prototype.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],o=this.indexOfGroup(r),s=o+a;this.groupSizes[r]=0;for(var u=o;u<s;u++)this.tag.deleteRule(o);a>0&&this._cGroup>r&&(this._cIndex-=a)}},e.prototype.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),u=s+o,f=s;f<u;f++)a+=this.tag.getRule(f)+Sg;return a},e})(),R4="style[".concat(ol,"][").concat(S2,'="').concat(Td,'"]'),N4=new RegExp("^".concat(ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ix=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},B0=function(e){if(!e)return document;if(ix(e))return e;if("getRootNode"in e){var r=e.getRootNode();if(ix(r))return r}return document},H4=function(e,r,a){for(var o,s=a.split(","),u=0,f=s.length;u<f;u++)(o=s[u])&&e.registerName(r,o)},B4=function(e,r){for(var a,o=((a=r.textContent)!==null&&a!==void 0?a:"").split(Sg),s=[],u=0,f=o.length;u<f;u++){var p=o[u].trim();if(p){var m=p.match(N4);if(m){var x=0|parseInt(m[1],10),y=m[2];x!==0&&(S4(y,x),H4(e,y,m[3]),e.getTag().insertRules(x,s)),s.length=0}else s.push(p)}}},o0=function(e){for(var r=B0(e.options.target).querySelectorAll(R4),a=0,o=r.length;a<o;a++){var s=r[a];s&&s.getAttribute(ol)!==w2&&(B4(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function I4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var A2=function(e){var r=document.head,a=e||r,o=document.createElement("style"),s=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(ol,"]")));return m[m.length-1]})(a),u=s!==void 0?s.nextSibling:null;o.setAttribute(ol,w2),o.setAttribute(S2,Td);var f=I4();return f&&o.setAttribute("nonce",f),a.insertBefore(o,u),o},U4=(function(){function e(r){this.element=A2(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var o;if(a.sheet)return a.sheet;for(var s=(o=a.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,u=0,f=s.length;u<f;u++){var p=s[u];if(p.ownerNode===a)return p}throw Qi(17)})(this.element),this.length=0}return e.prototype.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var a=this.sheet.cssRules[r];return a&&a.cssText?a.cssText:""},e})(),G4=(function(){function e(r){this.element=A2(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,a){if(r<=this.length&&r>=0){var o=document.createTextNode(a);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e})(),P4=(function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,a){return r<=this.length&&(r===this.length?this.rules.push(a):this.rules.splice(r,0,a),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e})(),ox=zs,q4={isServer:!zs,useCSSOMInjection:!b4},ad=(function(){function e(r,a,o){r===void 0&&(r=ll),a===void 0&&(a={});var s=this;this.options=Pe(Pe({},q4),r),this.gs=a,this.names=new Map(o),this.server=!!r.isServer,!this.server&&zs&&ox&&(ox=!1,o0(this)),jg(this,function(){return(function(u){for(var f=u.getTag(),p=f.length,m="",x=function(v){var k=(function($){return nd.get($)})(v);if(k===void 0)return"continue";var C=u.names.get(k);if(C===void 0||!C.size)return"continue";var S=f.getGroup(v);if(S.length===0)return"continue";var E=ol+".g"+v+'[id="'+k+'"]',T="";C.forEach(function($){$.length>0&&(T+=$+",")}),m+=S+E+'{content:"'+T+'"}'+Sg},y=0;y<p;y++)x(y);return m})(s)})}return e.registerId=function(r){return Es(r)},e.prototype.rehydrate=function(){!this.server&&zs&&o0(this)},e.prototype.reconstructWithOptions=function(r,a){a===void 0&&(a=!0);var o=new e(Pe(Pe({},this.options),r),this.gs,a&&this.names||void 0);return!this.server&&zs&&r.target!==this.options.target&&B0(this.options.target)!==B0(r.target)&&o0(o),o},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(a){var o=a.useCSSOMInjection,s=a.target;return a.isServer?new P4(s):o?new U4(s):new G4(s)})(this.options),new _4(r)));var r},e.prototype.hasNameForId=function(r,a){var o,s;return(s=(o=this.names.get(r))===null||o===void 0?void 0:o.has(a))!==null&&s!==void 0&&s},e.prototype.registerName=function(r,a){Es(r);var o=this.names.get(r);o?o.add(a):this.names.set(r,new Set([a]))},e.prototype.insertRules=function(r,a,o){this.registerName(r,a),this.getTag().insertRules(Es(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Es(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e})(),W4=/&/g,ca=47,Gi=42;function lx(e){if(e.indexOf("}")===-1)return!1;for(var r=e.length,a=0,o=0,s=!1,u=0;u<r;u++){var f=e.charCodeAt(u);if(o!==0||s||f!==ca||e.charCodeAt(u+1)!==Gi)if(s)f===Gi&&e.charCodeAt(u+1)===ca&&(s=!1,u++);else if(f!==34&&f!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(f===123)a++;else if(f===125&&--a<0)return!0}}else o===0?o=f:o===f&&(o=0);else s=!0,u++}return a!==0||o!==0}function L2(e,r){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(r," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(r," ")),a.props=a.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=L2(a.children,r)),a})}function F4(e){var r,a,o,s=ll,u=s.options,f=u===void 0?ll:u,p=s.plugins,m=p===void 0?Cg:p,x=function(S,E,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(r):S},y=m.slice();y.push(function(S){S.type===Cd&&S.value.includes("&")&&(o||(o=new RegExp("\\".concat(a,"\\b"),"g")),S.props[0]=S.props[0].replace(W4,a).replace(o,x))}),f.prefix&&y.push(y4),y.push(m4);var v=[],k=v4(y.concat(x4(function(S){return v.push(S)}))),C=function(S,E,T,$){E===void 0&&(E=""),T===void 0&&(T=""),$===void 0&&($="&"),r=$,a=E,o=void 0;var L=(function(z){if(!lx(z))return z;for(var _=z.length,H="",j=0,A=0,P=0,V=!1,U=0;U<_;U++){var Z=z.charCodeAt(U);if(P!==0||V||Z!==ca||z.charCodeAt(U+1)!==Gi)if(V)Z===Gi&&z.charCodeAt(U+1)===ca&&(V=!1,U++);else if(Z!==34&&Z!==39||U!==0&&z.charCodeAt(U-1)===92){if(P===0)if(Z===123)A++;else if(Z===125){if(--A<0){for(var re=U+1;re<_;){var X=z.charCodeAt(re);if(X===59||X===10)break;re++}re<_&&z.charCodeAt(re)===59&&re++,A=0,U=re-1,j=re;continue}A===0&&(H+=z.substring(j,U+1),j=U+1)}else Z===59&&A===0&&(H+=z.substring(j,U+1),j=U+1)}else P===0?P=Z:P===Z&&(P=0);else V=!0,U++}if(j<_){var te=z.substring(j);lx(te)||(H+=te)}return H})((function(z){if(z.indexOf("//")===-1)return z;for(var _=z.length,H=[],j=0,A=0,P=0,V=0;A<_;){var U=z.charCodeAt(A);if(U!==34&&U!==39||A!==0&&z.charCodeAt(A-1)===92)if(P===0)if(U===ca&&A+1<_&&z.charCodeAt(A+1)===Gi){for(A+=2;A+1<_&&(z.charCodeAt(A)!==Gi||z.charCodeAt(A+1)!==ca);)A++;A+=2}else if(U===40&&A>=3&&(32|z.charCodeAt(A-1))==108&&(32|z.charCodeAt(A-2))==114&&(32|z.charCodeAt(A-3))==117)V=1,A++;else if(V>0)U===41?V--:U===40&&V++,A++;else if(U===Gi&&A+1<_&&z.charCodeAt(A+1)===ca)A>j&&H.push(z.substring(j,A)),j=A+=2;else if(U===ca&&A+1<_&&z.charCodeAt(A+1)===ca){for(A>j&&H.push(z.substring(j,A));A<_&&z.charCodeAt(A)!==10;)A++;j=A}else A++;else A++;else P===0?P=U:P===U&&(P=0),A++}return j===0?z:(j<_&&H.push(z.substring(j)),H.join(""))})(S)),N=g4(T||E?"".concat(T," ").concat(E," { ").concat(L," }"):L);return f.namespace&&(N=L2(N,f.namespace)),v=[],td(N,k),v};return C.hash=m.length?m.reduce(function(S,E){return E.name||Qi(15),Ui(S,E.name)},5381).toString():"",C}var Y4=new ad,I0=F4(),O2=Ye.createContext({shouldForwardProp:void 0,styleSheet:Y4,stylis:I0});O2.Consumer;Ye.createContext(void 0);function U0(){return Ye.useContext(O2)}var z2=(function(){function e(r,a){var o=this;this.inject=function(s,u){u===void 0&&(u=I0);var f=o.name+u.hash;s.hasNameForId(o.id,f)||s.insertRules(o.id,f,u(o.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=a,jg(this,function(){throw Qi(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=I0),this.name+r.hash},e})();function V4(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in b2||e.startsWith("--")?String(r).trim():"".concat(r,"px")}var Z4=function(e){return e>="A"&&e<="Z"};function sx(e){for(var r="",a=0;a<e.length;a++){var o=e[a];if(a===1&&o==="-"&&e[0]==="-")return e;Z4(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var D2=function(e){return e==null||e===!1||e===""},_2=function(e){var r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!D2(o)&&(Array.isArray(o)&&o.isCss||Ki(o)?r.push("".concat(sx(a),":"),o,";"):Gs(o)?r.push.apply(r,Vn(Vn(["".concat(a," {")],_2(o),!1),["}"],!1)):r.push("".concat(sx(a),": ").concat(V4(a,o),";")))}return r};function ni(e,r,a,o,s){if(s===void 0&&(s=[]),typeof e=="string")return e&&s.push(e),s;if(D2(e))return s;if(Eg(e))return s.push(".".concat(e.styledComponentId)),s;if(Ki(e)){if(!Ki(f=e)||f.prototype&&f.prototype.isReactComponent||!r)return s.push(e),s;var u=e(r);return ni(u,r,a,o,s)}var f;if(e instanceof z2)return a?(e.inject(a,o),s.push(e.getName(o))):s.push(e),s;if(Gs(e)){for(var p=_2(e),m=0;m<p.length;m++)s.push(p[m]);return s}if(!Array.isArray(e))return s.push(e.toString()),s;for(m=0;m<e.length;m++)ni(e[m],r,a,o,s);return s}function R2(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Ki(a)&&!Eg(a))return!1}return!0}var X4=E2(Td),Q4=(function(){function e(r,a,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&R2(r),this.componentId=a,this.baseHash=Ui(X4,a),this.baseStyle=o,ad.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,a,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))s=Fi(s,this.staticRulesId);else{var u=rd(ni(this.rules,r,a,o)),f=N0(Ui(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,f)){var p=o(u,".".concat(f),void 0,this.componentId);a.insertRules(this.componentId,f,p)}s=Fi(s,f),this.staticRulesId=f}else{for(var m=Ui(this.baseHash,o.hash),x="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")x+=v;else if(v){var k=rd(ni(v,r,a,o));m=Ui(Ui(m,String(y)),k),x+=k}}if(x){var C=N0(m>>>0);if(!a.hasNameForId(this.componentId,C)){var S=o(x,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,S)}s=Fi(s,C)}}return{className:s,css:typeof window>"u"?a.getTag().getGroup(Es(this.componentId)):""}},e})(),Ps=Ye.createContext(void 0);Ps.Consumer;function Md(e){var r=Ye.useContext(Ps),a=Ye.useMemo(function(){return(function(o,s){if(!o)throw Qi(14);if(Ki(o)){var u=o(s);return u}if(Array.isArray(o)||typeof o!="object")throw Qi(8);return s?Pe(Pe({},s),o):o})(e.theme,r)},[e.theme,r]);return e.children?Ye.createElement(Ps.Provider,{value:a},e.children):null}var l0={};function K4(e,r,a){var o=Eg(e),s=e,u=!i0(e),f=r.attrs,p=f===void 0?Cg:f,m=r.componentId,x=m===void 0?(function(z,_){var H=typeof z!="string"?"sc":ex(z);l0[H]=(l0[H]||0)+1;var j="".concat(H,"-").concat(kg(Td+H+l0[H]));return _?"".concat(_,"-").concat(j):j})(r.displayName,r.parentComponentId):m,y=r.displayName,v=y===void 0?(function(z){return i0(z)?"styled.".concat(z):"Styled(".concat(j4(z),")")})(e):y,k=r.displayName&&r.componentId?"".concat(ex(r.displayName),"-").concat(r.componentId):r.componentId||x,C=o&&s.attrs?s.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(o&&s.shouldForwardProp){var E=s.shouldForwardProp;if(r.shouldForwardProp){var T=r.shouldForwardProp;S=function(z,_){return E(z,_)&&T(z,_)}}else S=E}var $=new Q4(a,k,o?s.componentStyle:void 0);function L(z,_){return(function(H,j,A){var P=H.attrs,V=H.componentStyle,U=H.defaultProps,Z=H.foldedComponentIds,re=H.styledComponentId,X=H.target,te=Ye.useContext(Ps),B=U0(),q=H.shouldForwardProp||B.shouldForwardProp,ae=C2(j,te,U)||ll,ie=(function(pe,fe,ve){for(var me,Te=Pe(Pe({},fe),{className:void 0,theme:ve}),pt=0;pt<pe.length;pt+=1){var ut=Ki(me=pe[pt])?me(Te):me;for(var mt in ut)mt==="className"?Te.className=Fi(Te.className,ut[mt]):mt==="style"?Te.style=Pe(Pe({},Te.style),ut[mt]):Te[mt]=ut[mt]}return"className"in fe&&typeof fe.className=="string"&&(Te.className=Fi(Te.className,fe.className)),Te})(P,j,ae),de=ie.as||X,O={};for(var W in ie)ie[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&ie.theme===ae||(W==="forwardedAs"?O.as=ie.forwardedAs:q&&!q(W,de)||(O[W]=ie[W]));var Q=(function(pe,fe){var ve=U0(),me=pe.generateAndInjectStyles(fe,ve.styleSheet,ve.stylis);return me})(V,ie),le=Q.className,he=Fi(Z,re);return le&&(he+=" "+le),ie.className&&(he+=" "+ie.className),O[i0(de)&&!k2.has(de)?"class":"className"]=he,A&&(O.ref=A),h.createElement(de,O)})(N,z,_)}L.displayName=v;var N=Ye.forwardRef(L);return N.attrs=C,N.componentStyle=$,N.displayName=v,N.shouldForwardProp=S,N.foldedComponentIds=o?Fi(s.foldedComponentIds,s.styledComponentId):"",N.styledComponentId=k,N.target=o?s.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=o?(function(_){for(var H=[],j=1;j<arguments.length;j++)H[j-1]=arguments[j];for(var A=0,P=H;A<P.length;A++)H0(_,P[A],!0);return _})({},s.defaultProps,z):z}}),jg(N,function(){return".".concat(N.styledComponentId)}),u&&$2(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function cx(e,r){for(var a=[e[0]],o=0,s=r.length;o<s;o+=1)a.push(r[o],e[o+1]);return a}var ux=function(e){return Object.assign(e,{isCss:!0})};function ii(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(Ki(e)||Gs(e))return ux(ni(cx(Cg,Vn([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?ni(o):ux(ni(cx(o,r)))}function G0(e,r,a){if(a===void 0&&(a=ll),!r)throw Qi(1,r);var o=function(s){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return e(r,a,ii.apply(void 0,Vn([s],u,!1)))};return o.attrs=function(s){return G0(e,r,Pe(Pe({},a),{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return G0(e,r,Pe(Pe({},a),s))},o}var N2=function(e){return G0(K4,e)},we=N2;k2.forEach(function(e){we[e]=N2(e)});var J4=(function(){function e(r,a){this.rules=r,this.componentId=a,this.isStatic=R2(r),ad.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,a,o,s){var u=s(rd(ni(this.rules,a,o,s)),""),f=this.componentId+r;o.insertRules(f,f,u)},e.prototype.removeStyles=function(r,a){a.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,a,o,s){r>2&&ad.registerId(this.componentId+r);var u=this.componentId+r;this.isStatic?o.hasNameForId(u,u)||this.createStyles(r,a,o,s):(this.removeStyles(r,o),this.createStyles(r,a,o,s))},e})();function Tg(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=ii.apply(void 0,Vn([e],r,!1)),s="sc-global-".concat(kg(JSON.stringify(o))),u=new J4(o,s),f=new WeakMap,p=function(x){var y=U0(),v=Ye.useContext(Ps),k=f.get(y.styleSheet);return k===void 0&&(k=y.styleSheet.allocateGSInstance(s),f.set(y.styleSheet,k)),(typeof window>"u"||!y.styleSheet.server)&&m(k,x,y.styleSheet,v,y.stylis),Ye.useLayoutEffect(function(){return y.styleSheet.server||m(k,x,y.styleSheet,v,y.stylis),function(){var C;u.removeStyles(k,y.styleSheet),C=y.styleSheet.options.target,typeof document<"u"&&(C??document).querySelectorAll('style[data-styled-global="'.concat(s,'"]')).forEach(function(S){return S.remove()})}},[k,x,y.styleSheet,v,y.stylis]),null};function m(x,y,v,k,C){if(u.isStatic)u.renderStyles(x,w4,v,C);else{var S=Pe(Pe({},y),{theme:C2(y,k,p.defaultProps)});u.renderStyles(x,S,v,C)}}return Ye.memo(p)}function e6(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=rd(ii.apply(void 0,Vn([e],r,!1))),s=kg(o);return new z2(s,o)}var lt="-ms-",Ds="-moz-",Fe="-webkit-",H2="comm",$d="rule",Mg="decl",t6="@import",n6="@namespace",B2="@keyframes",r6="@layer",I2=Math.abs,$g=String.fromCharCode,P0=Object.assign;function a6(e,r){return Dt(e,0)^45?(((r<<2^Dt(e,0))<<2^Dt(e,1))<<2^Dt(e,2))<<2^Dt(e,3):0}function U2(e){return e.trim()}function ua(e,r){return(e=r.exec(e))?e[0]:e}function Oe(e,r,a){return e.replace(r,a)}function Wu(e,r,a){return e.indexOf(r,a)}function Dt(e,r){return e.charCodeAt(r)|0}function Ji(e,r,a){return e.slice(r,a)}function dr(e){return e.length}function G2(e){return e.length}function js(e,r){return r.push(e),e}function i6(e,r){return e.map(r).join("")}function dx(e,r){return e.filter(function(a){return!ua(a,r)})}var Ad=1,sl=1,P2=0,Xn=0,Mt=0,gl="";function Ld(e,r,a,o,s,u,f,p){return{value:e,root:r,parent:a,type:o,props:s,children:u,line:Ad,column:sl,length:f,return:"",siblings:p}}function Ka(e,r){return P0(Ld("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Zo(e){for(;e.root;)e=Ka(e.root,{children:[e]});js(e,e.siblings)}function o6(){return Mt}function l6(){return Mt=Xn>0?Dt(gl,--Xn):0,sl--,Mt===10&&(sl=1,Ad--),Mt}function hr(){return Mt=Xn<P2?Dt(gl,Xn++):0,sl++,Mt===10&&(sl=1,Ad++),Mt}function ti(){return Dt(gl,Xn)}function Fu(){return Xn}function Od(e,r){return Ji(gl,e,r)}function qs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s6(e){return Ad=sl=1,P2=dr(gl=e),Xn=0,[]}function c6(e){return gl="",e}function s0(e){return U2(Od(Xn-1,q0(e===91?e+2:e===40?e+1:e)))}function u6(e){for(;(Mt=ti())&&Mt<33;)hr();return qs(e)>2||qs(Mt)>3?"":" "}function d6(e,r){for(;--r&&hr()&&!(Mt<48||Mt>102||Mt>57&&Mt<65||Mt>70&&Mt<97););return Od(e,Fu()+(r<6&&ti()==32&&hr()==32))}function q0(e){for(;hr();)switch(Mt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&q0(Mt);break;case 40:e===41&&q0(e);break;case 92:hr();break}return Xn}function f6(e,r){for(;hr()&&e+Mt!==57;)if(e+Mt===84&&ti()===47)break;return"/*"+Od(r,Xn-1)+"*"+$g(e===47?e:hr())}function h6(e){for(;!qs(ti());)hr();return Od(e,Xn)}function g6(e){return c6(Yu("",null,null,null,[""],e=s6(e),0,[0],e))}function Yu(e,r,a,o,s,u,f,p,m){for(var x=0,y=0,v=f,k=0,C=0,S=0,E=1,T=1,$=1,L=0,N="",z=s,_=u,H=o,j=N;T;)switch(S=L,L=hr()){case 40:if(S!=108&&Dt(j,v-1)==58){Wu(j+=Oe(s0(L),"&","&\f"),"&\f",I2(x?p[x-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:j+=s0(L);break;case 9:case 10:case 13:case 32:j+=u6(S);break;case 92:j+=d6(Fu()-1,7);continue;case 47:switch(ti()){case 42:case 47:js(p6(f6(hr(),Fu()),r,a,m),m),(qs(S||1)==5||qs(ti()||1)==5)&&dr(j)&&Ji(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*E:p[x++]=dr(j)*$;case 125*E:case 59:case 0:switch(L){case 0:case 125:T=0;case 59+y:$==-1&&(j=Oe(j,/\f/g,"")),C>0&&(dr(j)-v||E===0&&S===47)&&js(C>32?hx(j+";",o,a,v-1,m):hx(Oe(j," ","")+";",o,a,v-2,m),m);break;case 59:j+=";";default:if(js(H=fx(j,r,a,x,y,s,p,N,z=[],_=[],v,u),u),L===123)if(y===0)Yu(j,r,H,H,z,u,v,p,_);else{switch(k){case 99:if(Dt(j,3)===110)break;case 108:if(Dt(j,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Yu(e,H,H,o&&js(fx(e,H,H,0,0,s,p,N,s,z=[],v,_),_),s,_,v,p,o?z:_):Yu(j,H,H,H,[""],_,0,p,_)}}x=y=C=0,E=$=1,N=j="",v=f;break;case 58:v=1+dr(j),C=S;default:if(E<1){if(L==123)--E;else if(L==125&&E++==0&&l6()==125)continue}switch(j+=$g(L),L*E){case 38:$=y>0?1:(j+="\f",-1);break;case 44:p[x++]=(dr(j)-1)*$,$=1;break;case 64:ti()===45&&(j+=s0(hr())),k=ti(),y=v=dr(N=j+=h6(Fu())),L++;break;case 45:S===45&&dr(j)==2&&(E=0)}}return u}function fx(e,r,a,o,s,u,f,p,m,x,y,v){for(var k=s-1,C=s===0?u:[""],S=G2(C),E=0,T=0,$=0;E<o;++E)for(var L=0,N=Ji(e,k+1,k=I2(T=f[E])),z=e;L<S;++L)(z=U2(T>0?C[L]+" "+N:Oe(N,/&\f/g,C[L])))&&(m[$++]=z);return Ld(e,r,a,s===0?$d:p,m,x,y,v)}function p6(e,r,a,o){return Ld(e,r,a,H2,$g(o6()),Ji(e,2,-2),0,o)}function hx(e,r,a,o,s){return Ld(e,r,a,Mg,Ji(e,0,o),Ji(e,o+1,-1),o,s)}function q2(e,r,a){switch(a6(e,r)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Fe+e+e;case 4855:return Fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ds+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+Ds+e+lt+e+e;case 5936:switch(Dt(e,r+11)){case 114:return Fe+e+lt+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+lt+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+lt+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+lt+e+e;case 6165:return Fe+e+lt+"flex-"+e+e;case 5187:return Fe+e+Oe(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+lt+"flex-$1$2")+e;case 5443:return Fe+e+lt+"flex-item-"+Oe(e,/flex-|-self/g,"")+(ua(e,/flex-|baseline/)?"":lt+"grid-row-"+Oe(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+lt+"flex-line-pack"+Oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+lt+Oe(e,"shrink","negative")+e;case 5292:return Fe+e+lt+Oe(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Oe(e,"-grow","")+Fe+e+lt+Oe(e,"grow","positive")+e;case 4554:return Fe+Oe(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+lt+"flex-pack:$3"),/space-between/,"justify")+Fe+e+e;case 4200:if(!ua(e,/flex-|baseline/))return lt+"grid-column-align"+Ji(e,r)+e;break;case 2592:case 3360:return lt+Oe(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(o,s){return r=s,ua(o.props,/grid-\w+-end/)})?~Wu(e+(a=a[r].value),"span",0)?e:lt+Oe(e,"-start","")+e+lt+"grid-row-span:"+(~Wu(a,"span",0)?ua(a,/\d+/):+ua(a,/\d+/)-+ua(e,/\d+/))+";":lt+Oe(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(o){return ua(o.props,/grid-\w+-start/)})?e:lt+Oe(Oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dr(e)-1-r>6)switch(Dt(e,r+1)){case 109:if(Dt(e,r+4)!==45)break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+Ds+(Dt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Wu(e,"stretch",0)?q2(Oe(e,"stretch","fill-available"),r,a)+e:e}break;case 5152:case 5920:return Oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,u,f,p,m,x){return lt+s+":"+u+x+(f?lt+s+"-span:"+(p?m:+m-+u)+x:"")+e});case 4949:if(Dt(e,r+6)===121)return Oe(e,":",":"+Fe)+e;break;case 6444:switch(Dt(e,Dt(e,14)===45?18:11)){case 120:return Oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(Dt(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+lt+"$2box$3")+e;case 100:return Oe(e,":",":"+lt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(e,"scroll-","scroll-snap-")+e}return e}function id(e,r){for(var a="",o=0;o<e.length;o++)a+=r(e[o],o,e,r)||"";return a}function m6(e,r,a,o){switch(e.type){case r6:if(e.children.length)break;case t6:case n6:case Mg:return e.return=e.return||e.value;case H2:return"";case B2:return e.return=e.value+"{"+id(e.children,o)+"}";case $d:if(!dr(e.value=e.props.join(",")))return""}return dr(a=id(e.children,o))?e.return=e.value+"{"+a+"}":""}function v6(e){var r=G2(e);return function(a,o,s,u){for(var f="",p=0;p<r;p++)f+=e[p](a,o,s,u)||"";return f}}function x6(e){return function(r){r.root||(r=r.return)&&e(r)}}function y6(e,r,a,o){if(e.length>-1&&!e.return)switch(e.type){case Mg:e.return=q2(e.value,e.length,a);return;case B2:return id([Ka(e,{value:Oe(e.value,"@","@"+Fe)})],o);case $d:if(e.length)return i6(a=e.props,function(s){switch(ua(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zo(Ka(e,{props:[Oe(s,/:(read-\w+)/,":"+Ds+"$1")]})),Zo(Ka(e,{props:[s]})),P0(e,{props:dx(a,o)});break;case"::placeholder":Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,":"+Fe+"input-$1")]})),Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,":"+Ds+"$1")]})),Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,lt+"input-$1")]})),Zo(Ka(e,{props:[s]})),P0(e,{props:dx(a,o)});break}return""})}}var On={},cl=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",W2="active",F2="data-styled-version",zd="6.3.11",Ag=`/*!sc*/
`,_s=typeof window<"u"&&typeof document<"u",b6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),w6={};function Qs(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Vu=new Map,od=new Map,Zu=1,Ts=function(e){if(Vu.has(e))return Vu.get(e);for(;od.has(Zu);)Zu++;var r=Zu++;return Vu.set(e,r),od.set(r,e),r},S6=function(e,r){Zu=r+1,Vu.set(e,r),od.set(r,e)},Lg=Object.freeze([]),ul=Object.freeze({});function Y2(e,r,a){return a===void 0&&(a=ul),e.theme!==a.theme&&e.theme||r||a.theme}var V2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),C6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k6=/(^-|-$)/g;function gx(e){return e.replace(C6,"-").replace(k6,"")}var E6=/(a)(d)/gi,px=function(e){return String.fromCharCode(e+(e>25?39:97))};function W0(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=px(r%52)+a;return(px(r%52)+a).replace(E6,"$1-$2")}var c0,Pi=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},Z2=function(e){return Pi(5381,e)};function Og(e){return W0(Z2(e)>>>0)}function j6(e){return e.displayName||e.name||"Component"}function u0(e){return typeof e=="string"&&!0}var X2=typeof Symbol=="function"&&Symbol.for,Q2=X2?Symbol.for("react.memo"):60115,T6=X2?Symbol.for("react.forward_ref"):60112,M6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A6=((c0={})[T6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c0[Q2]=K2,c0);function mx(e){return("type"in(r=e)&&r.type.$$typeof)===Q2?K2:"$$typeof"in e?A6[e.$$typeof]:M6;var r}var L6=Object.defineProperty,O6=Object.getOwnPropertyNames,vx=Object.getOwnPropertySymbols,z6=Object.getOwnPropertyDescriptor,D6=Object.getPrototypeOf,xx=Object.prototype;function J2(e,r,a){if(typeof r!="string"){if(xx){var o=D6(r);o&&o!==xx&&J2(e,o,a)}var s=O6(r);vx&&(s=s.concat(vx(r)));for(var u=mx(e),f=mx(r),p=0;p<s.length;++p){var m=s[p];if(!(m in $6||a&&a[m]||f&&m in f||u&&m in u)){var x=z6(r,m);try{L6(e,m,x)}catch{}}}}return e}function dl(e){return typeof e=="function"}function zg(e){return typeof e=="object"&&"styledComponentId"in e}function Yi(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function ld(e,r){return e.join("")}function Ws(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function F0(e,r,a){if(a===void 0&&(a=!1),!a&&!Ws(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=F0(e[o],r[o]);else if(Ws(r))for(var o in r)e[o]=F0(e[o],r[o]);return e}function Dg(e,r){Object.defineProperty(e,"toString",{value:r})}var _6=(function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var a=this._cIndex;if(r>this._cGroup)for(var o=this._cGroup;o<r;o++)a+=this.groupSizes[o];else for(o=this._cGroup-1;o>=r;o--)a-=this.groupSizes[o];return this._cGroup=r,this._cIndex=a,a},e.prototype.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,u=s;r>=u;)if((u<<=1)<0)throw Qs(16,"".concat(r));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var f=s;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(r+1),m=0,x=(f=0,a.length);f<x;f++)this.tag.insertRule(p,a[f])&&(this.groupSizes[r]++,p++,m++);m>0&&this._cGroup>r&&(this._cIndex+=m)},e.prototype.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],o=this.indexOfGroup(r),s=o+a;this.groupSizes[r]=0;for(var u=o;u<s;u++)this.tag.deleteRule(o);a>0&&this._cGroup>r&&(this._cIndex-=a)}},e.prototype.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),u=s+o,f=s;f<u;f++)a+=this.tag.getRule(f)+Ag;return a},e})(),R6="style[".concat(cl,"][").concat(F2,'="').concat(zd,'"]'),N6=new RegExp("^".concat(cl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yx=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Y0=function(e){if(!e)return document;if(yx(e))return e;if("getRootNode"in e){var r=e.getRootNode();if(yx(r))return r}return document},H6=function(e,r,a){for(var o,s=a.split(","),u=0,f=s.length;u<f;u++)(o=s[u])&&e.registerName(r,o)},B6=function(e,r){for(var a,o=((a=r.textContent)!==null&&a!==void 0?a:"").split(Ag),s=[],u=0,f=o.length;u<f;u++){var p=o[u].trim();if(p){var m=p.match(N6);if(m){var x=0|parseInt(m[1],10),y=m[2];x!==0&&(S6(y,x),H6(e,y,m[3]),e.getTag().insertRules(x,s)),s.length=0}else s.push(p)}}},d0=function(e){for(var r=Y0(e.options.target).querySelectorAll(R6),a=0,o=r.length;a<o;a++){var s=r[a];s&&s.getAttribute(cl)!==W2&&(B6(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function I6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e5=function(e){var r=document.head,a=e||r,o=document.createElement("style"),s=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(cl,"]")));return m[m.length-1]})(a),u=s!==void 0?s.nextSibling:null;o.setAttribute(cl,W2),o.setAttribute(F2,zd);var f=I6();return f&&o.setAttribute("nonce",f),a.insertBefore(o,u),o},U6=(function(){function e(r){this.element=e5(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var o;if(a.sheet)return a.sheet;for(var s=(o=a.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,u=0,f=s.length;u<f;u++){var p=s[u];if(p.ownerNode===a)return p}throw Qs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var a=this.sheet.cssRules[r];return a&&a.cssText?a.cssText:""},e})(),G6=(function(){function e(r){this.element=e5(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,a){if(r<=this.length&&r>=0){var o=document.createTextNode(a);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e})(),P6=(function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,a){return r<=this.length&&(r===this.length?this.rules.push(a):this.rules.splice(r,0,a),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e})(),bx=_s,q6={isServer:!_s,useCSSOMInjection:!b6},sd=(function(){function e(r,a,o){r===void 0&&(r=ul),a===void 0&&(a={});var s=this;this.options=Pe(Pe({},q6),r),this.gs=a,this.names=new Map(o),this.server=!!r.isServer,!this.server&&_s&&bx&&(bx=!1,d0(this)),Dg(this,function(){return(function(u){for(var f=u.getTag(),p=f.length,m="",x=function(v){var k=(function($){return od.get($)})(v);if(k===void 0)return"continue";var C=u.names.get(k);if(C===void 0||!C.size)return"continue";var S=f.getGroup(v);if(S.length===0)return"continue";var E=cl+".g"+v+'[id="'+k+'"]',T="";C.forEach(function($){$.length>0&&(T+=$+",")}),m+=S+E+'{content:"'+T+'"}'+Ag},y=0;y<p;y++)x(y);return m})(s)})}return e.registerId=function(r){return Ts(r)},e.prototype.rehydrate=function(){!this.server&&_s&&d0(this)},e.prototype.reconstructWithOptions=function(r,a){a===void 0&&(a=!0);var o=new e(Pe(Pe({},this.options),r),this.gs,a&&this.names||void 0);return!this.server&&_s&&r.target!==this.options.target&&Y0(this.options.target)!==Y0(r.target)&&d0(o),o},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(a){var o=a.useCSSOMInjection,s=a.target;return a.isServer?new P6(s):o?new U6(s):new G6(s)})(this.options),new _6(r)));var r},e.prototype.hasNameForId=function(r,a){var o,s;return(s=(o=this.names.get(r))===null||o===void 0?void 0:o.has(a))!==null&&s!==void 0&&s},e.prototype.registerName=function(r,a){Ts(r);var o=this.names.get(r);o?o.add(a):this.names.set(r,new Set([a]))},e.prototype.insertRules=function(r,a,o){this.registerName(r,a),this.getTag().insertRules(Ts(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Ts(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e})(),W6=/&/g,da=47,qi=42;function wx(e){if(e.indexOf("}")===-1)return!1;for(var r=e.length,a=0,o=0,s=!1,u=0;u<r;u++){var f=e.charCodeAt(u);if(o!==0||s||f!==da||e.charCodeAt(u+1)!==qi)if(s)f===qi&&e.charCodeAt(u+1)===da&&(s=!1,u++);else if(f!==34&&f!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(f===123)a++;else if(f===125&&--a<0)return!0}}else o===0?o=f:o===f&&(o=0);else s=!0,u++}return a!==0||o!==0}function t5(e,r){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(r," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(r," ")),a.props=a.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=t5(a.children,r)),a})}function F6(e){var r,a,o,s=ul,u=s.options,f=u===void 0?ul:u,p=s.plugins,m=p===void 0?Lg:p,x=function(S,E,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(r):S},y=m.slice();y.push(function(S){S.type===$d&&S.value.includes("&")&&(o||(o=new RegExp("\\".concat(a,"\\b"),"g")),S.props[0]=S.props[0].replace(W6,a).replace(o,x))}),f.prefix&&y.push(y6),y.push(m6);var v=[],k=v6(y.concat(x6(function(S){return v.push(S)}))),C=function(S,E,T,$){E===void 0&&(E=""),T===void 0&&(T=""),$===void 0&&($="&"),r=$,a=E,o=void 0;var L=(function(z){if(!wx(z))return z;for(var _=z.length,H="",j=0,A=0,P=0,V=!1,U=0;U<_;U++){var Z=z.charCodeAt(U);if(P!==0||V||Z!==da||z.charCodeAt(U+1)!==qi)if(V)Z===qi&&z.charCodeAt(U+1)===da&&(V=!1,U++);else if(Z!==34&&Z!==39||U!==0&&z.charCodeAt(U-1)===92){if(P===0)if(Z===123)A++;else if(Z===125){if(--A<0){for(var re=U+1;re<_;){var X=z.charCodeAt(re);if(X===59||X===10)break;re++}re<_&&z.charCodeAt(re)===59&&re++,A=0,U=re-1,j=re;continue}A===0&&(H+=z.substring(j,U+1),j=U+1)}else Z===59&&A===0&&(H+=z.substring(j,U+1),j=U+1)}else P===0?P=Z:P===Z&&(P=0);else V=!0,U++}if(j<_){var te=z.substring(j);wx(te)||(H+=te)}return H})((function(z){if(z.indexOf("//")===-1)return z;for(var _=z.length,H=[],j=0,A=0,P=0,V=0;A<_;){var U=z.charCodeAt(A);if(U!==34&&U!==39||A!==0&&z.charCodeAt(A-1)===92)if(P===0)if(U===da&&A+1<_&&z.charCodeAt(A+1)===qi){for(A+=2;A+1<_&&(z.charCodeAt(A)!==qi||z.charCodeAt(A+1)!==da);)A++;A+=2}else if(U===40&&A>=3&&(32|z.charCodeAt(A-1))==108&&(32|z.charCodeAt(A-2))==114&&(32|z.charCodeAt(A-3))==117)V=1,A++;else if(V>0)U===41?V--:U===40&&V++,A++;else if(U===qi&&A+1<_&&z.charCodeAt(A+1)===da)A>j&&H.push(z.substring(j,A)),j=A+=2;else if(U===da&&A+1<_&&z.charCodeAt(A+1)===da){for(A>j&&H.push(z.substring(j,A));A<_&&z.charCodeAt(A)!==10;)A++;j=A}else A++;else A++;else P===0?P=U:P===U&&(P=0),A++}return j===0?z:(j<_&&H.push(z.substring(j)),H.join(""))})(S)),N=g6(T||E?"".concat(T," ").concat(E," { ").concat(L," }"):L);return f.namespace&&(N=t5(N,f.namespace)),v=[],id(N,k),v};return C.hash=m.length?m.reduce(function(S,E){return E.name||Qs(15),Pi(S,E.name)},5381).toString():"",C}var Y6=new sd,V0=F6(),n5=Ye.createContext({shouldForwardProp:void 0,styleSheet:Y6,stylis:V0});n5.Consumer;Ye.createContext(void 0);function Z0(){return Ye.useContext(n5)}var r5=(function(){function e(r,a){var o=this;this.inject=function(s,u){u===void 0&&(u=V0);var f=o.name+u.hash;s.hasNameForId(o.id,f)||s.insertRules(o.id,f,u(o.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=a,Dg(this,function(){throw Qs(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=V0),this.name+r.hash},e})();function V6(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in b2||e.startsWith("--")?String(r).trim():"".concat(r,"px")}var Z6=function(e){return e>="A"&&e<="Z"};function Sx(e){for(var r="",a=0;a<e.length;a++){var o=e[a];if(a===1&&o==="-"&&e[0]==="-")return e;Z6(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var a5=function(e){return e==null||e===!1||e===""},i5=function(e){var r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!a5(o)&&(Array.isArray(o)&&o.isCss||dl(o)?r.push("".concat(Sx(a),":"),o,";"):Ws(o)?r.push.apply(r,Vn(Vn(["".concat(a," {")],i5(o),!1),["}"],!1)):r.push("".concat(Sx(a),": ").concat(V6(a,o),";")))}return r};function ri(e,r,a,o,s){if(s===void 0&&(s=[]),typeof e=="string")return e&&s.push(e),s;if(a5(e))return s;if(zg(e))return s.push(".".concat(e.styledComponentId)),s;if(dl(e)){if(!dl(f=e)||f.prototype&&f.prototype.isReactComponent||!r)return s.push(e),s;var u=e(r);return ri(u,r,a,o,s)}var f;if(e instanceof r5)return a?(e.inject(a,o),s.push(e.getName(o))):s.push(e),s;if(Ws(e)){for(var p=i5(e),m=0;m<p.length;m++)s.push(p[m]);return s}if(!Array.isArray(e))return s.push(e.toString()),s;for(m=0;m<e.length;m++)ri(e[m],r,a,o,s);return s}function o5(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(dl(a)&&!zg(a))return!1}return!0}var X6=Z2(zd),Q6=(function(){function e(r,a,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&o5(r),this.componentId=a,this.baseHash=Pi(X6,a),this.baseStyle=o,sd.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,a,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))s=Yi(s,this.staticRulesId);else{var u=ld(ri(this.rules,r,a,o)),f=W0(Pi(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,f)){var p=o(u,".".concat(f),void 0,this.componentId);a.insertRules(this.componentId,f,p)}s=Yi(s,f),this.staticRulesId=f}else{for(var m=Pi(this.baseHash,o.hash),x="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")x+=v;else if(v){var k=ld(ri(v,r,a,o));m=Pi(Pi(m,String(y)),k),x+=k}}if(x){var C=W0(m>>>0);if(!a.hasNameForId(this.componentId,C)){var S=o(x,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,S)}s=Yi(s,C)}}return{className:s,css:typeof window>"u"?a.getTag().getGroup(Ts(this.componentId)):""}},e})(),_g=Ye.createContext(void 0);_g.Consumer;var f0={};function K6(e,r,a){var o=zg(e),s=e,u=!u0(e),f=r.attrs,p=f===void 0?Lg:f,m=r.componentId,x=m===void 0?(function(z,_){var H=typeof z!="string"?"sc":gx(z);f0[H]=(f0[H]||0)+1;var j="".concat(H,"-").concat(Og(zd+H+f0[H]));return _?"".concat(_,"-").concat(j):j})(r.displayName,r.parentComponentId):m,y=r.displayName,v=y===void 0?(function(z){return u0(z)?"styled.".concat(z):"Styled(".concat(j6(z),")")})(e):y,k=r.displayName&&r.componentId?"".concat(gx(r.displayName),"-").concat(r.componentId):r.componentId||x,C=o&&s.attrs?s.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(o&&s.shouldForwardProp){var E=s.shouldForwardProp;if(r.shouldForwardProp){var T=r.shouldForwardProp;S=function(z,_){return E(z,_)&&T(z,_)}}else S=E}var $=new Q6(a,k,o?s.componentStyle:void 0);function L(z,_){return(function(H,j,A){var P=H.attrs,V=H.componentStyle,U=H.defaultProps,Z=H.foldedComponentIds,re=H.styledComponentId,X=H.target,te=Ye.useContext(_g),B=Z0(),q=H.shouldForwardProp||B.shouldForwardProp,ae=Y2(j,te,U)||ul,ie=(function(pe,fe,ve){for(var me,Te=Pe(Pe({},fe),{className:void 0,theme:ve}),pt=0;pt<pe.length;pt+=1){var ut=dl(me=pe[pt])?me(Te):me;for(var mt in ut)mt==="className"?Te.className=Yi(Te.className,ut[mt]):mt==="style"?Te.style=Pe(Pe({},Te.style),ut[mt]):Te[mt]=ut[mt]}return"className"in fe&&typeof fe.className=="string"&&(Te.className=Yi(Te.className,fe.className)),Te})(P,j,ae),de=ie.as||X,O={};for(var W in ie)ie[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&ie.theme===ae||(W==="forwardedAs"?O.as=ie.forwardedAs:q&&!q(W,de)||(O[W]=ie[W]));var Q=(function(pe,fe){var ve=Z0(),me=pe.generateAndInjectStyles(fe,ve.styleSheet,ve.stylis);return me})(V,ie),le=Q.className,he=Yi(Z,re);return le&&(he+=" "+le),ie.className&&(he+=" "+ie.className),O[u0(de)&&!V2.has(de)?"class":"className"]=he,A&&(O.ref=A),h.createElement(de,O)})(N,z,_)}L.displayName=v;var N=Ye.forwardRef(L);return N.attrs=C,N.componentStyle=$,N.displayName=v,N.shouldForwardProp=S,N.foldedComponentIds=o?Yi(s.foldedComponentIds,s.styledComponentId):"",N.styledComponentId=k,N.target=o?s.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=o?(function(_){for(var H=[],j=1;j<arguments.length;j++)H[j-1]=arguments[j];for(var A=0,P=H;A<P.length;A++)F0(_,P[A],!0);return _})({},s.defaultProps,z):z}}),Dg(N,function(){return".".concat(N.styledComponentId)}),u&&J2(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function Cx(e,r){for(var a=[e[0]],o=0,s=r.length;o<s;o+=1)a.push(r[o],e[o+1]);return a}var kx=function(e){return Object.assign(e,{isCss:!0})};function R(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(dl(e)||Ws(e))return kx(ri(Cx(Lg,Vn([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?ri(o):kx(ri(Cx(o,r)))}function X0(e,r,a){if(a===void 0&&(a=ul),!r)throw Qs(1,r);var o=function(s){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return e(r,a,R.apply(void 0,Vn([s],u,!1)))};return o.attrs=function(s){return X0(e,r,Pe(Pe({},a),{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return X0(e,r,Pe(Pe({},a),s))},o}var l5=function(e){return X0(K6,e)},b=l5;V2.forEach(function(e){b[e]=l5(e)});var J6=(function(){function e(r,a){this.rules=r,this.componentId=a,this.isStatic=o5(r),sd.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,a,o,s){var u=s(ld(ri(this.rules,a,o,s)),""),f=this.componentId+r;o.insertRules(f,f,u)},e.prototype.removeStyles=function(r,a){a.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,a,o,s){r>2&&sd.registerId(this.componentId+r);var u=this.componentId+r;this.isStatic?o.hasNameForId(u,u)||this.createStyles(r,a,o,s):(this.removeStyles(r,o),this.createStyles(r,a,o,s))},e})();function e7(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=R.apply(void 0,Vn([e],r,!1)),s="sc-global-".concat(Og(JSON.stringify(o))),u=new J6(o,s),f=new WeakMap,p=function(x){var y=Z0(),v=Ye.useContext(_g),k=f.get(y.styleSheet);return k===void 0&&(k=y.styleSheet.allocateGSInstance(s),f.set(y.styleSheet,k)),(typeof window>"u"||!y.styleSheet.server)&&m(k,x,y.styleSheet,v,y.stylis),Ye.useLayoutEffect(function(){return y.styleSheet.server||m(k,x,y.styleSheet,v,y.stylis),function(){var C;u.removeStyles(k,y.styleSheet),C=y.styleSheet.options.target,typeof document<"u"&&(C??document).querySelectorAll('style[data-styled-global="'.concat(s,'"]')).forEach(function(S){return S.remove()})}},[k,x,y.styleSheet,v,y.stylis]),null};function m(x,y,v,k,C){if(u.isStatic)u.renderStyles(x,w6,v,C);else{var S=Pe(Pe({},y),{theme:Y2(y,k,p.defaultProps)});u.renderStyles(x,S,v,C)}}return Ye.memo(p)}function pr(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=ld(R.apply(void 0,Vn([e],r,!1))),s=Og(o);return new r5(s,o)}var t7=Object.defineProperty,n7=(e,r)=>{for(var a in r)t7(e,a,{get:r[a],enumerable:!0})},s5={};n7(s5,{ActionPause:()=>a7,Add:()=>o7,Analyse:()=>s7,Back:()=>u7,BigWarning:()=>f7,Broken:()=>g7,Camera:()=>m7,ClearField:()=>x7,Close:()=>S7,CloseCompact:()=>b7,Copy:()=>k7,Critical:()=>j7,Crop:()=>M7,DarkMode:()=>A7,DataRetention:()=>O7,Date:()=>R7,DateTime:()=>D7,Delete:()=>H7,Detection:()=>I7,DevicesFolder:()=>G7,DevicesLiveEndpoint:()=>q7,DevicesScorerCamera:()=>F7,DevicesScorerEdge:()=>V7,Down:()=>X7,Download:()=>e8,DownloadVideo:()=>K7,Edit:()=>n8,Exclamation:()=>a8,ExternalLink:()=>o8,FeatureLineUi:()=>s8,FeaturePtz:()=>u8,Fever:()=>f8,FileTypeImage:()=>g8,FilterAscending:()=>m8,FilterDescending:()=>x8,FilterEllipsis:()=>b8,FilterSorting:()=>S8,Forward:()=>k8,Gateway:()=>j8,GroupCollapse:()=>M8,GroupExpand:()=>A8,Home:()=>O8,Information:()=>D8,Invalid:()=>R8,Language:()=>H8,LayoutGrid:()=>I8,LayoutList:()=>G8,Left:()=>q8,LightMode:()=>F8,Link:()=>V8,Location:()=>X8,Locked:()=>K8,Menu:()=>eS,MetaCategories:()=>nS,MetaEnabledState:()=>aS,MetaTags:()=>oS,MissingImage:()=>sS,MonitoringProfile:()=>uS,NoIcon:()=>fS,Notifications:()=>mS,NotificationsOff:()=>gS,PasswordHide:()=>xS,PasswordShow:()=>bS,Pinned:()=>SS,Play:()=>kS,Question:()=>jS,RecognitionPhoto:()=>MS,RecognitionProfile:()=>AS,Required:()=>OS,RetryJob:()=>DS,Right:()=>RS,Search:()=>HS,Success:()=>IS,SwitchAccount:()=>GS,Temperature:()=>KS,TemperatureAmbient:()=>qS,TemperatureHigh:()=>FS,TemperatureLow:()=>VS,TemperatureNormal:()=>XS,Time:()=>e9,Unlocked:()=>n9,Up:()=>a9,Usage:()=>o9,UserProfile:()=>s9,ViewSettings:()=>u9,Warning:()=>f9,Zone:()=>g9});var r7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("rect",{x:5.25,y:3.75,width:4.5,height:16.5,rx:1.5}),h.createElement("rect",{x:14.25,y:3.75,width:4.5,height:16.5,rx:1.5}))),a7=r7,i7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12 7.5v9M7.5 12h9"}),h.createElement("circle",{cx:12,cy:12,r:11.25}))),o7=i7,l7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 0 0 4 23.25h15.948a3 3 0 0 0 2.515-4.635L15.726 8.25ZM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3"}),h.createElement("path",{d:"M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 0 1-.375-.375"}),h.createElement("path",{d:"M7.1 19.5a.375.375 0 0 1-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 0 1-.375-.375"}),h.createElement("path",{d:"M10.1 16.5a.375.375 0 0 1-.375.375M15.726 3.75h-3M15.726 6.75h-3"}))),s7=l7,c7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M7.501 11.997h9m-5.25 3.75-3.75-3.75 3.75-3.75"}),h.createElement("circle",{cx:12.001,cy:11.997,r:10.5}))),u7=c7,d7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V6"}),h.createElement("path",{d:"M1.28 13.281a1.811 1.811 0 0 1 0-2.561l9.44-9.439a1.81 1.81 0 0 1 2.56 0l9.44 9.439a1.811 1.811 0 0 1 0 2.561l-9.44 9.439a1.812 1.812 0 0 1-2.56 0l-9.44-9.439z"}))),f7=d7,h7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"m8.25 5.249-3-3m1.5 6h-1.5m6-4.5v-1.5m3 4.5h4.5a4.5 4.5 0 0 1 0 9h-4.5m-9.53-4.334-2.652 2.652a4.5 4.5 0 0 0 6.364 6.364l2.652-2.652",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),g7=h7,p7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M8.25 12v3.333a2.848 2.848 0 0 1-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 0 1-.75-.75V4.5A4.5 4.5 0 0 1 5.25 0h16.5a1.5 1.5 0 0 1 1.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0 1 15 9z"}),h.createElement("path",{d:"M20.25 5.084V10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a3 3 0 0 1-3-3h0m21-2.25v3"}))),m7=p7,v7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:11.998,cy:12,r:11.25}),h.createElement("path",{d:"m7.498 16.5 8.999-9M16.498 16.5l-9.001-9"}))),x7=v7,y7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m5 18.999 14-14M19 18.999l-14-14"}))),b7=y7,w7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m.75 23.249 22.5-22.5M23.25 23.249.75.749"}))),S7=w7,C7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M4.5 17.5A1.5 1.5 0 0 1 3 16V2.5A1.5 1.5 0 0 1 4.5 1H15a1.5 1.5 0 0 1 1.5 1.5"}),h.createElement("rect",{x:8,y:6,width:13.5,height:16.5,rx:1.5}))),k7=C7,E7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12 18.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3v-7.5"}),h.createElement("path",{d:"M13.621 1.76a1.806 1.806 0 0 0-3.242 0L.906 21.058a1.52 1.52 0 0 0 1.366 2.192h19.456a1.52 1.52 0 0 0 1.366-2.192L13.621 1.76z"}))),j7=E7,T7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M21.75 19.125h1.5M5.25 1.875v17.25h13.5M2.25 5.625H.75M14.25 5.625h-9M18.75 22.875v-13.5M5.25 19.125l2.121-2.121M9.493 14.882l2.121-2.121M13.735 10.64l2.122-2.122M17.978 6.397l2.121-2.121M22.221 2.154l1.029-1.029"}))),M7=T7,$7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z"}),h.createElement("path",{d:"M12.046 6.797a5.194 5.194 0 0 0-2.25.525 5.222 5.222 0 0 1 0 9.45 5.243 5.243 0 1 0 2.25-9.975h0Z"}))),A7=$7,L7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:17.25,cy:17.25,r:6}),h.createElement("path",{d:"M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 0 0-6.868-1.377 7.5 7.5 0 0 0-8.3-6.057 7.5 7.5 0 0 0 .938 14.941"}))),O7=L7,z7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M8.25 17.25h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3"}),h.createElement("circle",{cx:17.25,cy:17.25,r:6}),h.createElement("path",{d:"M19.902 17.25H17.25v-2.651"}))),D7=z7,_7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("rect",{x:.752,y:3.75,width:22.5,height:19.5,rx:1.5}),h.createElement("path",{d:"M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"}))),R7=_7,N7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5ZM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z"}))),H7=N7,B7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,vectorEffect:"non-scaling-stroke"})),I7=B7,U7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M20.25 11.75v-3a1.5 1.5 0 0 0-1.5-1.5H8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v16.3a1.7 1.7 0 0 0 3.336.438l2.351-9.657a1.5 1.5 0 0 1 1.442-1.081H21.75a1.5 1.5 0 0 1 1.45 1.886l-2.2 9a1.5 1.5 0 0 1-1.45 1.114H2.447",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),G7=U7,P7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M6.75 21.368h10.5m-7.312-6.75-1.688 6.75m5.813-6.75 1.687 6.75m7.5-12.75a6 6 0 0 1-6 6H6.75a6 6 0 1 1 0-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 0 1 1.757 4.243z"}),h.createElement("circle",{cx:12,cy:8.618,r:3}))),q7=P7,W7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 0 1-.375-.375m.75.001a.375.375 0 0 1-.375.375m6-7.552a9.54 9.54 0 0 0-12 0m2.5 3.615a5.568 5.568 0 0 1 7 0M17.25 3.75l-16.5 3v-3a3 3 0 0 1 3-3h13.786a.75.75 0 0 1 .671 1.085L17.25 3.75z"}),h.createElement("path",{d:"M15.75 4.023V7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 2.25 7.5V6.477m4.5 3.273v1.5a3 3 0 0 1-3 3h-3m0-1.5v3m18-10.5v3"}))),F7=W7,Y7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M1.25.75h11a.5.5 0 0 1 .5.5v3a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3a.5.5 0 0 1 .5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 0 1-.375-.375m.75 0a.375.375 0 0 1-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5m3 0h3"}),h.createElement("rect",{width:7.5,height:12,x:15.75,y:11.25,rx:1.5}),h.createElement("path",{d:"M19.5 19.875h0m.375.375a.375.375 0 0 0-.375-.375m0 .75a.375.375 0 0 0 .375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 0 0-.375.375M17.379 7.629a3 3 0 0 1 4.242 0M16.5 4.451a6.768 6.768 0 0 1 6 0m-20.486.78a5.25 5.25 0 1 0 9.472 0"}))),V7=Y7,Z7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M23.25 6.311 12.53 17.03a.751.751 0 0 1-1.06 0L.75 6.311",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),X7=Z7,Q7=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:17.25,cy:17.25,r:6}),h.createElement("path",{d:"M17.25 14.25v6M17.25 20.25 15 18M17.25 20.25 19.5 18M8.25 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.25"}),h.createElement("path",{d:"M6.241 12.678a.685.685 0 0 1-.991-.613v-4.63a.685.685 0 0 1 .991-.613l4.631 2.316a.684.684 0 0 1 0 1.224l-4.631 2.316Z"}))),K7=Q7,J7=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M5.251 11.25 12 18l6.75-6.75H15V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5v6.75H5.251zm18 8.25v3a1.5 1.5 0 0 1-1.5 1.5h-19.5a1.5 1.5 0 0 1-1.5-1.5v-3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),e8=J7,t8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M22.19 1.81a3.637 3.637 0 0 0-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.636 3.636 0 0 0 .035-5.169zm-5.584.45 5.134 5.134m-19.219 8.95 5.139 5.13",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),n8=t8,r8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),a8=r8,i8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M23.497 7.75V1h-6.75m6.75 0-10.94 10.939M18.5 13.5v8A1.5 1.5 0 0 1 17 23H2.5A1.5 1.5 0 0 1 1 21.5V7a1.5 1.5 0 0 1 1.5-1.5h8.495",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),o8=i8,l8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M3.75 17.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2.53 5.53L6.53 17.47",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),s8=l8,c8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5 3 3 3-3M23.25 12H.75m19.5-3 3 3-3 3M3.75 9l-3 3 3 3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),u8=c8,d8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),f8=d8,h8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M22.954 22a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 22V2.5A1.5 1.5 0 0 1 3.5 1h15a1.5 1.5 0 0 1 1.047.426l2.955 2.883c.29.282.452.67.452 1.074V22z"}),h.createElement("circle",{cx:8.75,cy:7.75,r:2.25}),h.createElement("path",{d:"m19.29 18.45-3.925-5.888a1.011 1.011 0 0 0-1.671-.019l-2.691 3.845-1.668-1.338a1.011 1.011 0 0 0-1.474.229L5.75 18.45"}))),g8=h8,p8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M8.25 23.248V.748m-4.5 18 4.5 4.5 4.5-4.5m3-4.5h3.6a.899.899 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V3a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),m8=p8,v8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M8.25 24.248v-22.5M3.75 5.5 8.25 1l4.5 4.5m3 9.748h3.6a.9.9 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V4a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),x8=v8,y8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:3.625,cy:11.625,r:2.625}),h.createElement("circle",{cx:20.875,cy:11.625,r:2.625}),h.createElement("circle",{cx:12.25,cy:11.625,r:2.625}))),b8=y8,w8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M7 12h10m-7 5h4M5 7h14",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),S8=w8,C8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75"}),h.createElement("circle",{cx:11.999,cy:11.997,r:10.5,transform:"matrix(-1 0 0 1 23.998 0)"}))),k8=C8,E8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M8.25 18v3.1a1.518 1.518 0 0 0 1.5 1.4h12a1.557 1.557 0 0 0 1.5-1.607V3.111a1.555 1.555 0 0 0-1.5-1.611h-12a1.619 1.619 0 0 0-1.5 1.808V6"}),h.createElement("path",{d:"M6.75 12.004h12v3m-3 0v-3"}),h.createElement("circle",{cx:3.75,cy:12.004,r:3}))),j8=E8,T8=e=>h.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{clipPath:"url(#group-collapse_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M23.251.748H.751M23.251 23.248H.751M12.001 14.248v9M12.001.748v9M15.751 17.998l-3.75-3.75-3.75 3.75M15.751 5.998l-3.75 3.75-3.75-3.75"})),h.createElement("defs",null,h.createElement("clipPath",{id:"group-collapse_svg__a"},h.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),M8=T8,$8=e=>h.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{clipPath:"url(#group-expand_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12.001 3.748v16.5M15.751 7.498l-3.75-3.75-3.75 3.75M15.751 16.498l-3.75 3.75-3.75-3.75M23.251.748H.751M23.251 23.248H.751"})),h.createElement("defs",null,h.createElement("clipPath",{id:"group-expand_svg__a"},h.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),A8=$8,L8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M3.754 13.923v8.25h6v-6a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 0 1 2.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25"}))),O8=L8,z8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M14.25 16.5h-.75A1.5 1.5 0 0 1 12 15v-3.75a.75.75 0 0 0-.75-.75h-.75m1.125-3.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),h.createElement("circle",{cx:12,cy:12,r:11.25}))),D8=z8,_8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:11.998,cy:12,r:11.25}),h.createElement("path",{d:"m7.498 16.5 8.999-9m.001 9-9.001-9"}))),R8=_8,N8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M9.735 23.023a11.251 11.251 0 1 1 13.418-12.511"}),h.createElement("path",{d:"M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 0 1 2.2 6.42"}),h.createElement("circle",{cx:18,cy:13.126,r:2.625}),h.createElement("path",{d:"M18 16.5a5.25 5.25 0 0 0-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0 0 18 16.5h0Z"}))),H8=N8,B8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("rect",{width:4.5,height:4.5,x:.75,y:.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:9.75,y:.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:18.75,y:.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:.75,y:9.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:9.75,y:9.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:18.75,y:9.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:.75,y:18.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:9.75,y:18.747,rx:1.5}),h.createElement("rect",{width:4.5,height:4.5,x:18.75,y:18.747,rx:1.5}))),I8=B8,U8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("rect",{width:22.5,height:4.5,x:.75,y:.747,rx:1.5}),h.createElement("rect",{width:22.5,height:4.5,x:.75,y:9.747,rx:1.5}),h.createElement("rect",{width:22.5,height:4.5,x:.75,y:18.747,rx:1.5}))),G8=U8,P8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M17.25 23.25 6.53 12.53a.751.751 0 0 1 0-1.06L17.25.75",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),q8=P8,W8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("circle",{cx:12,cy:12,r:4.25}))),F8=W8,Y8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m9.364 18.5-.932.932a4.5 4.5 0 0 1-6.364-6.364l4.773-4.774a4.5 4.5 0 0 1 6.825 5.825"}),h.createElement("path",{d:"m14.818 5.567.75-.75a4.5 4.5 0 0 1 6.364 6.364l-4.773 4.773a4.5 4.5 0 0 1-6.824-5.826"}))),V8=Y8,Z8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:12,cy:7.5,r:3}),h.createElement("path",{d:"M12 .75a6.75 6.75 0 0 1 6.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 0 1-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0 1 12 .75z"}),h.createElement("path",{d:"M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463"}))),X8=Z8,Q8=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M10 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),h.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),h.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),K8=Q8,J8=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"}))),eS=J8,tS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:5.25,cy:5.255,r:4.5}),h.createElement("circle",{cx:5.25,cy:18.755,r:4.5}),h.createElement("circle",{cx:18.75,cy:5.255,r:4.5}),h.createElement("circle",{cx:18.75,cy:18.755,r:4.5}))),nS=tS,rS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M18.376 10.5H5.626A4.888 4.888 0 0 1 .751 5.625h0A4.889 4.889 0 0 1 5.626.75h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875ZM18.376 23.25H5.626a4.888 4.888 0 0 1-4.875-4.875h0A4.889 4.889 0 0 1 5.626 13.5h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875h0Z"}),h.createElement("circle",{cx:5.626,cy:5.625,r:1.875}),h.createElement("circle",{cx:18.376,cy:18.375,r:1.875}))),aS=rS,iS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M1.061 2.56v6.257a3 3 0 0 0 .878 2.121L13.5 22.5a1.5 1.5 0 0 0 2.121 0l6.879-6.88a1.5 1.5 0 0 0 0-2.121L10.939 1.938a3 3 0 0 0-2.121-.878H2.561a1.5 1.5 0 0 0-1.5 1.5Z"}),h.createElement("circle",{cx:6.311,cy:6.31,r:1.5}))),oS=iS,lS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M17.5 20.5a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m0-2.25v-3"}),h.createElement("path",{d:"M23.313 20.932a1.774 1.774 0 0 1-1.587 2.568h-8.452a1.774 1.774 0 0 1-1.587-2.568l4.226-8.451a1.774 1.774 0 0 1 3.174 0l4.226 8.451zM7.75 20.5H2.5A1.5 1.5 0 0 1 1 19V2.5A1.5 1.5 0 0 1 2.5 1h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.5"}),h.createElement("path",{d:"M5.5 5.875a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m7.606 5.195L11.5 8.5a.75.75 0 0 0-1.238-.014l-2 2.851-1.232-.987a.75.75 0 0 0-1.093.169L4 14.5h6"}))),sS=lS,cS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:17.25,cy:16.5,r:1.5}),h.createElement("path",{d:"m18.524 10.7.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 0 1 1.275 2.218l-1.031 1.111a1 1 0 0 0 0 1.362l1.031 1.111a1.339 1.339 0 0 1-1.275 2.219l-1.472-.342a1 1 0 0 0-1.174.681l-.442 1.448a1.33 1.33 0 0 1-2.548 0l-.442-1.453a1 1 0 0 0-1.174-.681l-1.472.342a1.34 1.34 0 0 1-1.275-2.219l1.031-1.111a1 1 0 0 0 0-1.362l-1.031-1.111a1.34 1.34 0 0 1 1.275-2.218l1.472.341a.992.992 0 0 0 1.174-.681l.442-1.452a1.33 1.33 0 0 1 2.548.005zM8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),h.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),h.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75"}))),uS=cS,dS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e}),fS=dS,hS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"m22.501 2.25-21 21M10 21.75a2.086 2.086 0 0 0 4.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7.386 7.386 0 0 0-.093-.915M16.212 4.3A7.498 7.498 0 0 0 4.5 10.5v5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),gS=hS,pS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M10 21.75a2.087 2.087 0 0 0 4.005 0M12 3V.75M12 3a7.5 7.5 0 0 1 7.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0 1 12 3Z"}))),mS=pS,vS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"m2.783 20 18.75-18M8.964 18.051A9.985 9.985 0 0 0 12 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0 0 19.75 7.88M14.413 5.282A9.549 9.549 0 0 0 12 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 0 0 0 2.226 20.8 20.8 0 0 0 2.6 2.4"}),h.createElement("path",{d:"M8.25 11.75A3.749 3.749 0 0 1 12 8M15.75 11.749h0A3.75 3.75 0 0 1 12 15.5"}))),xS=vS,yS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 0 0 0 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251Z"}),h.createElement("path",{d:"M15.75 12a3.75 3.75 0 1 1-7.5-.002 3.75 3.75 0 0 1 7.5.002h0Z"}))),bS=yS,wS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M4.949 8.783a1.5 1.5 0 0 0-.3 2.356l8.213 8.213a1.5 1.5 0 0 0 2.356-.3 7.522 7.522 0 0 0 .81-5.54l6.529-4.155a1.5 1.5 0 0 0 .256-2.326L16.97 1.188a1.5 1.5 0 0 0-2.326.255l-4.155 6.53a7.522 7.522 0 0 0-5.54.81ZM8.753 15.246.75 23.249"}))),SS=wS,CS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M2.338 3.255v17.49a1.499 1.499 0 0 0 2.209 1.322l16.323-8.745a1.5 1.5 0 0 0 0-2.644L4.547 1.933a1.5 1.5 0 0 0-2.209 1.322z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),kS=CS,ES=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M9 9a2.999 2.999 0 0 1 5.923-.673A3 3 0 0 1 13 11.829a1.5 1.5 0 0 0-1 1.415v1.006m0 3a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),h.createElement("circle",{cx:12,cy:12,r:11.25}))),jS=ES,TS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("rect",{width:19.5,height:22.5,x:2.25,y:.75,rx:1.5}),h.createElement("circle",{cx:12,cy:9.083,r:4.11}),h.createElement("path",{d:"M18.75 19.027a7.63 7.63 0 0 0-13.5 0"}))),MS=TS,$S=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M5.25 22.5a6.75 6.75 0 1 1 13.5 0H5.25zM8.458 8.043a6.859 6.859 0 0 0 7.612 1.532"}),h.createElement("circle",{cx:12,cy:10.125,r:4.125}),h.createElement("path",{d:"M.75 5.249V3a1.5 1.5 0 0 1 1.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25"}))),AS=$S,LS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 0 0-.549-2.049l-2.6-1.5a1.5 1.5 0 0 0-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 0 0-2.049-.549l-2.6 1.5A1.5 1.5 0 0 0 4.9 5.658l1.9 3.295H3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 0 0 2.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 0 0 2.049.549l2.6-1.5a1.5 1.5 0 0 0 .549-2.049l-1.9-3.294H21a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),OS=LS,zS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M15 18.75h-3.75v3.75"}),h.createElement("path",{d:"M22.667 19.483a5.572 5.572 0 0 1-10.74-.733M19.5 15.75h3.75V12"}),h.createElement("path",{d:"M11.833 15.017a5.572 5.572 0 0 1 10.74.733M8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),h.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),h.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871a1.5 1.5 0 0 1 .439 1.061V7.5"}))),DS=zS,_S=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"m6.5.75 10.72 10.72a.751.751 0 0 1 0 1.06L6.5 23.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),RS=_S,NS=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:9.823,cy:9.823,r:8.823}),h.createElement("path",{d:"m16.062 16.062 6.843 6.844"}))),HS=NS,BS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M6 13.223 8.45 16.7a1.049 1.049 0 0 0 1.707.051L18 6.828"}),h.createElement("circle",{cx:12,cy:11.999,r:11.25}))),IS=BS,US=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M.75 14.248h20.689a.751.751 0 0 1 .531 1.281L18 19.5M6 4.5 2.03 8.468a.75.75 0 0 0 .531 1.28H23.25"}))),GS=US,PS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M8.25 15.418V3.75a3 3 0 1 0-6 0v11.668a4.493 4.493 0 1 0 7.5 3.332 4.47 4.47 0 0 0-1.5-3.332h0zm-3-10.168v12"}),h.createElement("circle",{cx:5.25,cy:18.75,r:1.5}),h.createElement("circle",{cx:15,cy:11.25,r:3.75}),h.createElement("path",{d:"M15.75 4.5V3m4.023 3.477 1.061-1.061m.916 5.834h1.5m-3.477 4.773 1.061 1.061M15.75 18v1.5"}))),qS=PS,WS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),h.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),h.createElement("path",{d:"M12.5 12.75v4.5m6-4.5H20"}))),FS=WS,YS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),h.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),h.createElement("path",{d:"M12.5 3.75v13.5m6-13.5H20m-1.5 4.5H20m-1.5 4.5H20"}))),VS=YS,ZS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),h.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),h.createElement("path",{d:"M12.5 8.25v9m6-9H20m-1.5 4.5H20"}))),XS=ZS,QS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,transform:"translate(.75 .75)",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M10.656 10.6V2.578a2.062 2.062 0 1 0-4.125 0V10.6a3.093 3.093 0 1 0 4.125 0z"}),h.createElement("circle",{cx:8.594,cy:12.891,r:1.031}),h.createElement("path",{d:"M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031"}))),KS=QS,JS=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:12,cy:12,r:10.5}),h.createElement("path",{d:"M12 12V8.25M12 12l4.687 4.688"}))),e9=JS,t9=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M.75 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),h.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),h.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),n9=t9,r9=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("path",{d:"M.75 17.189 11.47 6.47a.751.751 0 0 1 1.06 0l10.72 10.719",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),a9=r9,i9=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M15.75 23.229c-2.434 0-4.5-1.316-4.5-3.75v-3.75h9v3.75c0 .788-.607 3.75-4.5 3.75zm-7.5-10.5-1.5 3m4.5-3h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 1.5 1.5v4.5m-14.25 9h3m-4.5-6h7.5m-6 0v-2.25m3 2.25v-3.75m3 3.75v-6m3.027 6.455c-1.1 1.1 1.089 1.471.015 2.545m3.149-4.46c-1.912 1.911 1.9 2.561.026 4.432"}),h.createElement("path",{d:"M20.25 16.479H21a2.25 2.25 0 1 1 0 4.5h-1.133"}))),o9=i9,l9=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("circle",{cx:12,cy:6,r:5.25}),h.createElement("path",{d:"M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"}))),s9=l9,c9=e=>h.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M7.281 9.376a1.308 1.308 0 0 0 1.939 0l.627-.7a1.306 1.306 0 0 1 2.273.942l-.047.934a1.3 1.3 0 0 0 1.371 1.371l.934-.047a1.305 1.305 0 0 1 .941 2.273l-.694.627a1.306 1.306 0 0 0 0 1.939l.694.627a1.305 1.305 0 0 1-.941 2.273l-.934-.047a1.305 1.305 0 0 0-1.371 1.371l.047.934a1.306 1.306 0 0 1-2.273.942l-.627-.7a1.308 1.308 0 0 0-1.939 0l-.627.7a1.306 1.306 0 0 1-2.273-.942l.047-.934a1.307 1.307 0 0 0-1.371-1.371l-.934.047a1.306 1.306 0 0 1-.942-2.273l.695-.627a1.308 1.308 0 0 0 0-1.939l-.695-.627a1.306 1.306 0 0 1 .942-2.273l.934.047a1.305 1.305 0 0 0 1.371-1.371l-.047-.934a1.306 1.306 0 0 1 2.273-.942l.627.7Z"}),h.createElement("circle",{cx:8.25,cy:15.751,r:1.875}),h.createElement("path",{d:"M18.638 5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),h.createElement("path",{d:"M21.194 1.848a.75.75 0 0 1 .971.971l-.5 1.286a.749.749 0 0 0 .229.856l1.075.864a.75.75 0 0 1-.355 1.326l-1.363.211a.749.749 0 0 0-.627.626l-.211 1.364a.75.75 0 0 1-1.326.355l-.864-1.075a.751.751 0 0 0-.856-.23l-1.286.5a.75.75 0 0 1-.971-.971l.5-1.286a.749.749 0 0 0-.229-.856l-1.075-.865a.749.749 0 0 1 .355-1.324l1.363-.211a.751.751 0 0 0 .627-.627l.211-1.362a.749.749 0 0 1 1.325-.355l.865 1.075a.75.75 0 0 0 .856.229l1.286-.501Z"}))),u9=c9,d9=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25"}),h.createElement("circle",{cx:12,cy:12,r:11.25}))),f9=d9,h9=e=>h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},h.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},h.createElement("path",{d:"M2.724.827A1.5 1.5 0 0 0 .75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 0 1 1.07.017l4.911 1.93a1.501 1.501 0 0 0 2.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 0 0-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z"}),h.createElement("path",{d:"M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z"}),h.createElement("path",{d:"m3.75 9.879 3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5"}))),g9=h9,p9=yg();const Ks=Sd(p9),c5=6048e5,m9=864e5,v9=6e4,x9=36e5,Ex=Symbol.for("constructDateFrom");function bt(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Ex in e?e[Ex](r):e instanceof Date?new e.constructor(r):new Date(r)}function He(e,r){return bt(r||e,e)}function u5(e,r,a){const o=He(e,a?.in);return isNaN(r)?bt(e,NaN):(r&&o.setDate(o.getDate()+r),o)}function Ms(e,r,a){const o=He(e,a?.in);if(isNaN(r))return bt(e,NaN);if(!r)return o;const s=o.getDate(),u=bt(e,o.getTime());u.setMonth(o.getMonth()+r+1,0);const f=u.getDate();return s>=f?u:(o.setFullYear(u.getFullYear(),u.getMonth(),s),o)}function Wi(e,r,a){const{years:o=0,months:s=0,weeks:u=0,days:f=0,hours:p=0,minutes:m=0,seconds:x=0}=r,y=He(e,a?.in),v=s||o?Ms(y,s+o*12):y,k=f||u?u5(v,f+u*7):v,C=m+p*60,E=(x+C*60)*1e3;return bt(e,+k+E)}let y9={};function Js(){return y9}function ha(e,r){const a=Js(),o=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=He(e,r?.in),u=s.getDay(),f=(u<o?7:0)+u-o;return s.setDate(s.getDate()-f),s.setHours(0,0,0,0),s}function cd(e,r){return ha(e,{...r,weekStartsOn:1})}function d5(e,r){const a=He(e,r?.in),o=a.getFullYear(),s=bt(a,0);s.setFullYear(o+1,0,4),s.setHours(0,0,0,0);const u=cd(s),f=bt(a,0);f.setFullYear(o,0,4),f.setHours(0,0,0,0);const p=cd(f);return a.getTime()>=u.getTime()?o+1:a.getTime()>=p.getTime()?o:o-1}function jx(e){const r=He(e),a=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return a.setUTCFullYear(r.getFullYear()),+e-+a}function Or(e,...r){const a=bt.bind(null,r.find(o=>typeof o=="object"));return r.map(a)}function oi(e,r){const a=He(e,r?.in);return a.setHours(0,0,0,0),a}function f5(e,r,a){const[o,s]=Or(a?.in,e,r),u=oi(o),f=oi(s),p=+u-jx(u),m=+f-jx(f);return Math.round((p-m)/m9)}function b9(e,r){const a=d5(e,r),o=bt(e,0);return o.setFullYear(a,0,4),o.setHours(0,0,0,0),cd(o)}function w9(e,r,a){return u5(e,r*7,a)}function Tx(e,r){let a,o=r?.in;return e.forEach(s=>{!o&&typeof s=="object"&&(o=bt.bind(null,s));const u=He(s,o);(!a||a>u||isNaN(+u))&&(a=u)}),bt(o,a||NaN)}function Rs(e,r){const a=+He(e)-+He(r);return a<0?-1:a>0?1:a}function S9(e){return bt(e,Date.now())}function Vi(e,r,a){const[o,s]=Or(a?.in,e,r);return+oi(o)==+oi(s)}function C9(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function k9(e){return!(!C9(e)&&typeof e!="number"||isNaN(+He(e)))}function E9(e,r,a){const[o,s]=Or(a?.in,e,r),u=o.getFullYear()-s.getFullYear(),f=o.getMonth()-s.getMonth();return u*12+f}function j9(e,r,a){const[o,s]=Or(a?.in,e,r);return o.getFullYear()-s.getFullYear()}function T9(e,r,a){const[o,s]=Or(a?.in,e,r),u=Mx(o,s),f=Math.abs(f5(o,s));o.setDate(o.getDate()-u*f);const p=+(Mx(o,s)===-u),m=u*(f-p);return m===0?0:m}function Mx(e,r){const a=e.getFullYear()-r.getFullYear()||e.getMonth()-r.getMonth()||e.getDate()-r.getDate()||e.getHours()-r.getHours()||e.getMinutes()-r.getMinutes()||e.getSeconds()-r.getSeconds()||e.getMilliseconds()-r.getMilliseconds();return a<0?-1:a>0?1:a}function Rg(e){return r=>{const o=(e?Math[e]:Math.trunc)(r);return o===0?0:o}}function M9(e,r,a){const[o,s]=Or(a?.in,e,r),u=(+o-+s)/x9;return Rg(a?.roundingMethod)(u)}function h5(e,r){return+He(e)-+He(r)}function $9(e,r,a){const o=h5(e,r)/v9;return Rg(a?.roundingMethod)(o)}function rl(e,r){const a=He(e,r?.in);return a.setHours(23,59,59,999),a}function g5(e,r){const a=He(e,r?.in),o=a.getMonth();return a.setFullYear(a.getFullYear(),o+1,0),a.setHours(23,59,59,999),a}function A9(e,r){const a=He(e,r?.in);return+rl(a,r)==+g5(a,r)}function L9(e,r,a){const[o,s,u]=Or(a?.in,e,e,r),f=Rs(s,u),p=Math.abs(E9(s,u));if(p<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-f*p);let m=Rs(s,u)===-f;A9(o)&&p===1&&Rs(o,u)===1&&(m=!1);const x=f*(p-+m);return x===0?0:x}function O9(e,r,a){const o=h5(e,r)/1e3;return Rg(a?.roundingMethod)(o)}function z9(e,r,a){const[o,s]=Or(a?.in,e,r),u=Rs(o,s),f=Math.abs(j9(o,s));o.setFullYear(1584),s.setFullYear(1584);const p=Rs(o,s)===-u,m=u*(f-+p);return m===0?0:m}function Ng(e,r){const[a,o]=Or(e,r.start,r.end);return{start:a,end:o}}function D9(e,r){const{start:a,end:o}=Ng(r?.in,e);let s=+a>+o;const u=s?+a:+o,f=s?o:a;f.setHours(0,0,0,0);let p=1;const m=[];for(;+f<=u;)m.push(bt(a,f)),f.setDate(f.getDate()+p),f.setHours(0,0,0,0);return s?m.reverse():m}function _9(e,r){const{start:a,end:o}=Ng(r?.in,e);let s=+a>+o;const u=ha(s?o:a,r),f=ha(s?a:o,r);u.setHours(15),f.setHours(15);const p=+f.getTime();let m=u,x=1;const y=[];for(;+m<=p;)m.setHours(0),y.push(bt(a,m)),m=w9(m,x),m.setHours(15);return s?y.reverse():y}function R9(e,r){const a=He(e,r?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function N9(e,r){const a=He(e,r?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function H9(e,r){const a=Js(),o=a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=He(e,r?.in),u=s.getDay(),f=(u<o?-7:0)+6-(u-o);return s.setDate(s.getDate()+f),s.setHours(23,59,59,999),s}const B9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},I9=(e,r,a)=>{let o;const s=B9[e];return typeof s=="string"?o=s:r===1?o=s.one:o=s.other.replace("{{count}}",r.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+o:o+" ago":o};function al(e){return(r={})=>{const a=r.width?String(r.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const U9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},G9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},P9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},q9={date:al({formats:U9,defaultWidth:"full"}),time:al({formats:G9,defaultWidth:"full"}),dateTime:al({formats:P9,defaultWidth:"full"})},W9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},F9=(e,r,a,o)=>W9[e];function Mr(e){return(r,a)=>{const o=a?.context?String(a.context):"standalone";let s;if(o==="formatting"&&e.formattingValues){const f=e.defaultFormattingWidth||e.defaultWidth,p=a?.width?String(a.width):f;s=e.formattingValues[p]||e.formattingValues[f]}else{const f=e.defaultWidth,p=a?.width?String(a.width):e.defaultWidth;s=e.values[p]||e.values[f]}const u=e.argumentCallback?e.argumentCallback(r):r;return s[u]}}const Y9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},V9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Z9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},X9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Q9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},K9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},J9=(e,r)=>{const a=Number(e),o=a%100;if(o>20||o<10)switch(o%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},eC={ordinalNumber:J9,era:Mr({values:Y9,defaultWidth:"wide"}),quarter:Mr({values:V9,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mr({values:Z9,defaultWidth:"wide"}),day:Mr({values:X9,defaultWidth:"wide"}),dayPeriod:Mr({values:Q9,defaultWidth:"wide",formattingValues:K9,defaultFormattingWidth:"wide"})};function $r(e){return(r,a={})=>{const o=a.width,s=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=r.match(s);if(!u)return null;const f=u[0],p=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(p)?nC(p,v=>v.test(f)):tC(p,v=>v.test(f));let x;x=e.valueCallback?e.valueCallback(m):m,x=a.valueCallback?a.valueCallback(x):x;const y=r.slice(f.length);return{value:x,rest:y}}}function tC(e,r){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&r(e[a]))return a}function nC(e,r){for(let a=0;a<e.length;a++)if(r(e[a]))return a}function p5(e){return(r,a={})=>{const o=r.match(e.matchPattern);if(!o)return null;const s=o[0],u=r.match(e.parsePattern);if(!u)return null;let f=e.valueCallback?e.valueCallback(u[0]):u[0];f=a.valueCallback?a.valueCallback(f):f;const p=r.slice(s.length);return{value:f,rest:p}}}const rC=/^(\d+)(th|st|nd|rd)?/i,aC=/\d+/i,iC={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},oC={any:[/^b/i,/^(a|c)/i]},lC={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sC={any:[/1/i,/2/i,/3/i,/4/i]},cC={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},uC={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},dC={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fC={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hC={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},gC={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pC={ordinalNumber:p5({matchPattern:rC,parsePattern:aC,valueCallback:e=>parseInt(e,10)}),era:$r({matchPatterns:iC,defaultMatchWidth:"wide",parsePatterns:oC,defaultParseWidth:"any"}),quarter:$r({matchPatterns:lC,defaultMatchWidth:"wide",parsePatterns:sC,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$r({matchPatterns:cC,defaultMatchWidth:"wide",parsePatterns:uC,defaultParseWidth:"any"}),day:$r({matchPatterns:dC,defaultMatchWidth:"wide",parsePatterns:fC,defaultParseWidth:"any"}),dayPeriod:$r({matchPatterns:hC,defaultMatchWidth:"any",parsePatterns:gC,defaultParseWidth:"any"})},Xu={code:"en-US",formatDistance:I9,formatLong:q9,formatRelative:F9,localize:eC,match:pC,options:{weekStartsOn:0,firstWeekContainsDate:1}};function mC(e,r){const a=He(e,r?.in);return f5(a,N9(a))+1}function vC(e,r){const a=He(e,r?.in),o=+cd(a)-+b9(a);return Math.round(o/c5)+1}function m5(e,r){const a=He(e,r?.in),o=a.getFullYear(),s=Js(),u=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,f=bt(r?.in||e,0);f.setFullYear(o+1,0,u),f.setHours(0,0,0,0);const p=ha(f,r),m=bt(r?.in||e,0);m.setFullYear(o,0,u),m.setHours(0,0,0,0);const x=ha(m,r);return+a>=+p?o+1:+a>=+x?o:o-1}function xC(e,r){const a=Js(),o=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=m5(e,r),u=bt(r?.in||e,0);return u.setFullYear(s,0,o),u.setHours(0,0,0,0),ha(u,r)}function yC(e,r){const a=He(e,r?.in),o=+ha(a,r)-+xC(a,r);return Math.round(o/c5)+1}function Xe(e,r){const a=e<0?"-":"",o=Math.abs(e).toString().padStart(r,"0");return a+o}const Xa={y(e,r){const a=e.getFullYear(),o=a>0?a:1-a;return Xe(r==="yy"?o%100:o,r.length)},M(e,r){const a=e.getMonth();return r==="M"?String(a+1):Xe(a+1,2)},d(e,r){return Xe(e.getDate(),r.length)},a(e,r){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];default:return a==="am"?"a.m.":"p.m."}},h(e,r){return Xe(e.getHours()%12||12,r.length)},H(e,r){return Xe(e.getHours(),r.length)},m(e,r){return Xe(e.getMinutes(),r.length)},s(e,r){return Xe(e.getSeconds(),r.length)},S(e,r){const a=r.length,o=e.getMilliseconds(),s=Math.trunc(o*Math.pow(10,a-3));return Xe(s,r.length)}},Xo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$x={G:function(e,r,a){const o=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return a.era(o,{width:"abbreviated"});case"GGGGG":return a.era(o,{width:"narrow"});default:return a.era(o,{width:"wide"})}},y:function(e,r,a){if(r==="yo"){const o=e.getFullYear(),s=o>0?o:1-o;return a.ordinalNumber(s,{unit:"year"})}return Xa.y(e,r)},Y:function(e,r,a,o){const s=m5(e,o),u=s>0?s:1-s;if(r==="YY"){const f=u%100;return Xe(f,2)}return r==="Yo"?a.ordinalNumber(u,{unit:"year"}):Xe(u,r.length)},R:function(e,r){const a=d5(e);return Xe(a,r.length)},u:function(e,r){const a=e.getFullYear();return Xe(a,r.length)},Q:function(e,r,a){const o=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(o);case"QQ":return Xe(o,2);case"Qo":return a.ordinalNumber(o,{unit:"quarter"});case"QQQ":return a.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(o,{width:"narrow",context:"formatting"});default:return a.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,r,a){const o=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(o);case"qq":return Xe(o,2);case"qo":return a.ordinalNumber(o,{unit:"quarter"});case"qqq":return a.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(o,{width:"narrow",context:"standalone"});default:return a.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,r,a){const o=e.getMonth();switch(r){case"M":case"MM":return Xa.M(e,r);case"Mo":return a.ordinalNumber(o+1,{unit:"month"});case"MMM":return a.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(o,{width:"narrow",context:"formatting"});default:return a.month(o,{width:"wide",context:"formatting"})}},L:function(e,r,a){const o=e.getMonth();switch(r){case"L":return String(o+1);case"LL":return Xe(o+1,2);case"Lo":return a.ordinalNumber(o+1,{unit:"month"});case"LLL":return a.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(o,{width:"narrow",context:"standalone"});default:return a.month(o,{width:"wide",context:"standalone"})}},w:function(e,r,a,o){const s=yC(e,o);return r==="wo"?a.ordinalNumber(s,{unit:"week"}):Xe(s,r.length)},I:function(e,r,a){const o=vC(e);return r==="Io"?a.ordinalNumber(o,{unit:"week"}):Xe(o,r.length)},d:function(e,r,a){return r==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):Xa.d(e,r)},D:function(e,r,a){const o=mC(e);return r==="Do"?a.ordinalNumber(o,{unit:"dayOfYear"}):Xe(o,r.length)},E:function(e,r,a){const o=e.getDay();switch(r){case"E":case"EE":case"EEE":return a.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},e:function(e,r,a,o){const s=e.getDay(),u=(s-o.weekStartsOn+8)%7||7;switch(r){case"e":return String(u);case"ee":return Xe(u,2);case"eo":return a.ordinalNumber(u,{unit:"day"});case"eee":return a.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(s,{width:"short",context:"formatting"});default:return a.day(s,{width:"wide",context:"formatting"})}},c:function(e,r,a,o){const s=e.getDay(),u=(s-o.weekStartsOn+8)%7||7;switch(r){case"c":return String(u);case"cc":return Xe(u,r.length);case"co":return a.ordinalNumber(u,{unit:"day"});case"ccc":return a.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(s,{width:"narrow",context:"standalone"});case"cccccc":return a.day(s,{width:"short",context:"standalone"});default:return a.day(s,{width:"wide",context:"standalone"})}},i:function(e,r,a){const o=e.getDay(),s=o===0?7:o;switch(r){case"i":return String(s);case"ii":return Xe(s,r.length);case"io":return a.ordinalNumber(s,{unit:"day"});case"iii":return a.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},a:function(e,r,a){const s=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,r,a){const o=e.getHours();let s;switch(o===12?s=Xo.noon:o===0?s=Xo.midnight:s=o/12>=1?"pm":"am",r){case"b":case"bb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,r,a){const o=e.getHours();let s;switch(o>=17?s=Xo.evening:o>=12?s=Xo.afternoon:o>=4?s=Xo.morning:s=Xo.night,r){case"B":case"BB":case"BBB":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,r,a){if(r==="ho"){let o=e.getHours()%12;return o===0&&(o=12),a.ordinalNumber(o,{unit:"hour"})}return Xa.h(e,r)},H:function(e,r,a){return r==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):Xa.H(e,r)},K:function(e,r,a){const o=e.getHours()%12;return r==="Ko"?a.ordinalNumber(o,{unit:"hour"}):Xe(o,r.length)},k:function(e,r,a){let o=e.getHours();return o===0&&(o=24),r==="ko"?a.ordinalNumber(o,{unit:"hour"}):Xe(o,r.length)},m:function(e,r,a){return r==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):Xa.m(e,r)},s:function(e,r,a){return r==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):Xa.s(e,r)},S:function(e,r){return Xa.S(e,r)},X:function(e,r,a){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(r){case"X":return Lx(o);case"XXXX":case"XX":return Bi(o);default:return Bi(o,":")}},x:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"x":return Lx(o);case"xxxx":case"xx":return Bi(o);default:return Bi(o,":")}},O:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Ax(o,":");default:return"GMT"+Bi(o,":")}},z:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Ax(o,":");default:return"GMT"+Bi(o,":")}},t:function(e,r,a){const o=Math.trunc(+e/1e3);return Xe(o,r.length)},T:function(e,r,a){return Xe(+e,r.length)}};function Ax(e,r=""){const a=e>0?"-":"+",o=Math.abs(e),s=Math.trunc(o/60),u=o%60;return u===0?a+String(s):a+String(s)+r+Xe(u,2)}function Lx(e,r){return e%60===0?(e>0?"-":"+")+Xe(Math.abs(e)/60,2):Bi(e,r)}function Bi(e,r=""){const a=e>0?"-":"+",o=Math.abs(e),s=Xe(Math.trunc(o/60),2),u=Xe(o%60,2);return a+s+r+u}const Ox=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});default:return r.date({width:"full"})}},v5=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});default:return r.time({width:"full"})}},bC=(e,r)=>{const a=e.match(/(P+)(p+)?/)||[],o=a[1],s=a[2];if(!s)return Ox(e,r);let u;switch(o){case"P":u=r.dateTime({width:"short"});break;case"PP":u=r.dateTime({width:"medium"});break;case"PPP":u=r.dateTime({width:"long"});break;default:u=r.dateTime({width:"full"});break}return u.replace("{{date}}",Ox(o,r)).replace("{{time}}",v5(s,r))},wC={p:v5,P:bC},SC=/^D+$/,CC=/^Y+$/,kC=["D","DD","YY","YYYY"];function EC(e){return SC.test(e)}function jC(e){return CC.test(e)}function TC(e,r,a){const o=MC(e,r,a);if(console.warn(o),kC.includes(e))throw new RangeError(o)}function MC(e,r,a){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${o} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $C=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,AC=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,LC=/^'([^]*?)'?$/,OC=/''/g,zC=/[a-zA-Z]/;function qt(e,r,a){const o=Js(),s=a?.locale??o.locale??Xu,u=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,f=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,p=He(e,a?.in);if(!k9(p))throw new RangeError("Invalid time value");let m=r.match(AC).map(y=>{const v=y[0];if(v==="p"||v==="P"){const k=wC[v];return k(y,s.formatLong)}return y}).join("").match($C).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const v=y[0];if(v==="'")return{isToken:!1,value:DC(y)};if($x[v])return{isToken:!0,value:y};if(v.match(zC))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:y}});s.localize.preprocessor&&(m=s.localize.preprocessor(p,m));const x={firstWeekContainsDate:u,weekStartsOn:f,locale:s};return m.map(y=>{if(!y.isToken)return y.value;const v=y.value;(!a?.useAdditionalWeekYearTokens&&jC(v)||!a?.useAdditionalDayOfYearTokens&&EC(v))&&TC(v,r,String(e));const k=$x[v[0]];return k(p,v,s.localize,x)}).join("")}function DC(e){const r=e.match(LC);return r?r[1].replace(OC,"'"):e}function _C(e,r){const a=He(e,r?.in),o=a.getFullYear(),s=a.getMonth(),u=bt(a,0);return u.setFullYear(o,s+1,0),u.setHours(0,0,0,0),u.getDate()}function RC(e,r){const{start:a,end:o}=Ng(r?.in,e),s={},u=z9(o,a);u&&(s.years=u);const f=Wi(a,{years:s.years}),p=L9(o,f);p&&(s.months=p);const m=Wi(f,{months:s.months}),x=T9(o,m);x&&(s.days=x);const y=Wi(m,{days:s.days}),v=M9(o,y);v&&(s.hours=v);const k=Wi(y,{hours:s.hours}),C=$9(o,k);C&&(s.minutes=C);const S=Wi(k,{minutes:s.minutes}),E=O9(o,S);return E&&(s.seconds=E),s}function zx(e,r){return+He(e)>+He(r)}function Ns(e,r){return+He(e)==+He(r)}function NC(e,r,a){const[o,s]=Or(a?.in,e,r);return o.getFullYear()===s.getFullYear()&&o.getMonth()===s.getMonth()}function HC(e,r){return Vi(bt(e,e),S9(e))}function BC(e,r,a){const o=+He(e,a?.in),[s,u]=[+He(r.start,a?.in),+He(r.end,a?.in)].sort((f,p)=>f-p);return o>=s&&o<=u}function IC(e,r,a){const o=He(e,a?.in),s=o.getFullYear(),u=o.getDate(),f=bt(e,0);f.setFullYear(s,r,15),f.setHours(0,0,0,0);const p=_C(f);return o.setMonth(r,Math.min(u,p)),o}function ud(e,r,a){let o=He(e,a?.in);return isNaN(+o)?bt(e,NaN):(r.year!=null&&o.setFullYear(r.year),r.month!=null&&(o=IC(o,r.month)),r.date!=null&&o.setDate(r.date),r.hours!=null&&o.setHours(r.hours),r.minutes!=null&&o.setMinutes(r.minutes),r.seconds!=null&&o.setSeconds(r.seconds),r.milliseconds!=null&&o.setMilliseconds(r.milliseconds),o)}const UC={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},GC=(e,r,a)=>{a=a||{};let o;const s=UC[e];return typeof s=="string"?o=s:r===1?a.addSuffix&&s.oneWithSuffix?o=s.oneWithSuffix:o=s.one:a.addSuffix&&s.otherWithSuffix?o=s.otherWithSuffix.replace("{{count}}",String(r)):o=s.other.replace("{{count}}",String(r)),a.addSuffix?a.comparison&&a.comparison>0?o+"後":o+"前":o},PC={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},qC={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},WC={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},FC={date:al({formats:PC,defaultWidth:"full"}),time:al({formats:qC,defaultWidth:"full"}),dateTime:al({formats:WC,defaultWidth:"full"})},YC={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},VC=(e,r,a,o)=>YC[e],ZC={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},XC={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},QC={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},KC={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},JC={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},ek={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},tk=(e,r)=>{const a=Number(e);switch(String(r?.unit)){case"year":return`${a}年`;case"quarter":return`第${a}四半期`;case"month":return`${a}月`;case"week":return`第${a}週`;case"date":return`${a}日`;case"hour":return`${a}時`;case"minute":return`${a}分`;case"second":return`${a}秒`;default:return`${a}`}},nk={ordinalNumber:tk,era:Mr({values:ZC,defaultWidth:"wide"}),quarter:Mr({values:XC,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:Mr({values:QC,defaultWidth:"wide"}),day:Mr({values:KC,defaultWidth:"wide"}),dayPeriod:Mr({values:JC,defaultWidth:"wide",formattingValues:ek,defaultFormattingWidth:"wide"})},rk=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,ak=/\d+/i,ik={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},ok={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},lk={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},sk={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},ck={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},uk={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},dk={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},fk={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},hk={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},gk={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},pk={ordinalNumber:p5({matchPattern:rk,parsePattern:ak,valueCallback:function(e){return parseInt(e,10)}}),era:$r({matchPatterns:ik,defaultMatchWidth:"wide",parsePatterns:ok,defaultParseWidth:"any"}),quarter:$r({matchPatterns:lk,defaultMatchWidth:"wide",parsePatterns:sk,defaultParseWidth:"any",valueCallback:e=>e+1}),month:$r({matchPatterns:ck,defaultMatchWidth:"wide",parsePatterns:uk,defaultParseWidth:"any"}),day:$r({matchPatterns:dk,defaultMatchWidth:"wide",parsePatterns:fk,defaultParseWidth:"any"}),dayPeriod:$r({matchPatterns:hk,defaultMatchWidth:"any",parsePatterns:gk,defaultParseWidth:"any"})},h0={code:"ja",formatDistance:GC,formatLong:FC,formatRelative:VC,localize:nk,match:pk,options:{weekStartsOn:0,firstWeekContainsDate:1}};var $s={exports:{}};$s.exports;var Dx;function mk(){return Dx||(Dx=1,(function(e,r){var a=200,o="__lodash_hash_undefined__",s=1,u=2,f=9007199254740991,p="[object Arguments]",m="[object Array]",x="[object AsyncFunction]",y="[object Boolean]",v="[object Date]",k="[object Error]",C="[object Function]",S="[object GeneratorFunction]",E="[object Map]",T="[object Number]",$="[object Null]",L="[object Object]",N="[object Promise]",z="[object Proxy]",_="[object RegExp]",H="[object Set]",j="[object String]",A="[object Symbol]",P="[object Undefined]",V="[object WeakMap]",U="[object ArrayBuffer]",Z="[object DataView]",re="[object Float32Array]",X="[object Float64Array]",te="[object Int8Array]",B="[object Int16Array]",q="[object Int32Array]",ae="[object Uint8Array]",ie="[object Uint8ClampedArray]",de="[object Uint16Array]",O="[object Uint32Array]",W=/[\\^$.*+?()[\]{}|]/g,Q=/^\[object .+?Constructor\]$/,le=/^(?:0|[1-9]\d*)$/,he={};he[re]=he[X]=he[te]=he[B]=he[q]=he[ae]=he[ie]=he[de]=he[O]=!0,he[p]=he[m]=he[U]=he[y]=he[Z]=he[v]=he[k]=he[C]=he[E]=he[T]=he[L]=he[_]=he[H]=he[j]=he[V]=!1;var pe=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,fe=typeof self=="object"&&self&&self.Object===Object&&self,ve=pe||fe||Function("return this")(),me=r&&!r.nodeType&&r,Te=me&&!0&&e&&!e.nodeType&&e,pt=Te&&Te.exports===me,ut=pt&&pe.process,mt=(function(){try{return ut&&ut.binding&&ut.binding("util")}catch{}})(),Dn=mt&&mt.isTypedArray;function si(D,F){for(var ue=-1,ge=D==null?0:D.length,Be=0,ke=[];++ue<ge;){var Qe=D[ue];F(Qe,ue,D)&&(ke[Be++]=Qe)}return ke}function en(D,F){for(var ue=-1,ge=F.length,Be=D.length;++ue<ge;)D[Be+ue]=F[ue];return D}function Rr(D,F){for(var ue=-1,ge=D==null?0:D.length;++ue<ge;)if(F(D[ue],ue,D))return!0;return!1}function vr(D,F){for(var ue=-1,ge=Array(D);++ue<D;)ge[ue]=F(ue);return ge}function _n(D){return function(F){return D(F)}}function Rn(D,F){return D.has(F)}function Wt(D,F){return D?.[F]}function Pd(D){var F=-1,ue=Array(D.size);return D.forEach(function(ge,Be){ue[++F]=[Be,ge]}),ue}function qd(D,F){return function(ue){return D(F(ue))}}function tn(D){var F=-1,ue=Array(D.size);return D.forEach(function(ge){ue[++F]=ge}),ue}var Wd=Array.prototype,sc=Function.prototype,ci=Object.prototype,ba=ve["__core-js_shared__"],cc=sc.toString,xn=ci.hasOwnProperty,uc=(function(){var D=/[^.]+$/.exec(ba&&ba.keys&&ba.keys.IE_PROTO||"");return D?"Symbol(src)_1."+D:""})(),dc=ci.toString,ui=RegExp("^"+cc.call(xn).replace(W,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ft=pt?ve.Buffer:void 0,yn=ve.Symbol,Yt=ve.Uint8Array,fc=ci.propertyIsEnumerable,Fd=Wd.splice,Nr=yn?yn.toStringTag:void 0,di=Object.getOwnPropertySymbols,ao=Ft?Ft.isBuffer:void 0,io=qd(Object.keys,Object),Kn=wn(ve,"DataView"),xr=wn(ve,"Map"),Hr=wn(ve,"Promise"),vl=wn(ve,"Set"),oo=wn(ve,"WeakMap"),Br=wn(Object,"create"),fi=nr(Kn),Yd=nr(xr),hc=nr(Hr),gc=nr(vl),pc=nr(oo),lo=yn?yn.prototype:void 0,hi=lo?lo.valueOf:void 0;function yr(D){var F=-1,ue=D==null?0:D.length;for(this.clear();++F<ue;){var ge=D[F];this.set(ge[0],ge[1])}}function mc(){this.__data__=Br?Br(null):{},this.size=0}function br(D){var F=this.has(D)&&delete this.__data__[D];return this.size-=F?1:0,F}function $t(D){var F=this.__data__;if(Br){var ue=F[D];return ue===o?void 0:ue}return xn.call(F,D)?F[D]:void 0}function Vt(D){var F=this.__data__;return Br?F[D]!==void 0:xn.call(F,D)}function wa(D,F){var ue=this.__data__;return this.size+=this.has(D)?0:1,ue[D]=Br&&F===void 0?o:F,this}yr.prototype.clear=mc,yr.prototype.delete=br,yr.prototype.get=$t,yr.prototype.has=Vt,yr.prototype.set=wa;function bn(D){var F=-1,ue=D==null?0:D.length;for(this.clear();++F<ue;){var ge=D[F];this.set(ge[0],ge[1])}}function Vd(){this.__data__=[],this.size=0}function Zd(D){var F=this.__data__,ue=Nt(F,D);if(ue<0)return!1;var ge=F.length-1;return ue==ge?F.pop():Fd.call(F,ue,1),--this.size,!0}function vc(D){var F=this.__data__,ue=Nt(F,D);return ue<0?void 0:F[ue][1]}function gi(D){return Nt(this.__data__,D)>-1}function xl(D,F){var ue=this.__data__,ge=Nt(ue,D);return ge<0?(++this.size,ue.push([D,F])):ue[ge][1]=F,this}bn.prototype.clear=Vd,bn.prototype.delete=Zd,bn.prototype.get=vc,bn.prototype.has=gi,bn.prototype.set=xl;function sn(D){var F=-1,ue=D==null?0:D.length;for(this.clear();++F<ue;){var ge=D[F];this.set(ge[0],ge[1])}}function Sa(){this.size=0,this.__data__={hash:new yr,map:new(xr||bn),string:new yr}}function pi(D){var F=xi(this,D).delete(D);return this.size-=F?1:0,F}function Ca(D){return xi(this,D).get(D)}function wt(D){return xi(this,D).has(D)}function xc(D,F){var ue=xi(this,D),ge=ue.size;return ue.set(D,F),this.size+=ue.size==ge?0:1,this}sn.prototype.clear=Sa,sn.prototype.delete=pi,sn.prototype.get=Ca,sn.prototype.has=wt,sn.prototype.set=xc;function mi(D){var F=-1,ue=D==null?0:D.length;for(this.__data__=new sn;++F<ue;)this.add(D[F])}function Ir(D){return this.__data__.set(D,o),this}function ka(D){return this.__data__.has(D)}mi.prototype.add=mi.prototype.push=Ir,mi.prototype.has=ka;function wr(D){var F=this.__data__=new bn(D);this.size=F.size}function yc(){this.__data__=new bn,this.size=0}function bc(D){var F=this.__data__,ue=F.delete(D);return this.size=F.size,ue}function Xd(D){return this.__data__.get(D)}function so(D){return this.__data__.has(D)}function co(D,F){var ue=this.__data__;if(ue instanceof bn){var ge=ue.__data__;if(!xr||ge.length<a-1)return ge.push([D,F]),this.size=++ue.size,this;ue=this.__data__=new sn(ge)}return ue.set(D,F),this.size=ue.size,this}wr.prototype.clear=yc,wr.prototype.delete=bc,wr.prototype.get=Xd,wr.prototype.has=so,wr.prototype.set=co;function Jn(D,F){var ue=rr(D),ge=!ue&&ja(D),Be=!ue&&!ge&&yi(D),ke=!ue&&!ge&&!Be&&ir(D),Qe=ue||ge||Be||ke,St=Qe?vr(D.length,String):[],vt=St.length;for(var tt in D)xn.call(D,tt)&&!(Qe&&(tt=="length"||Be&&(tt=="offset"||tt=="parent")||ke&&(tt=="buffer"||tt=="byteLength"||tt=="byteOffset")||kl(tt,vt)))&&St.push(tt);return St}function Nt(D,F){for(var ue=D.length;ue--;)if(go(D[ue][0],F))return ue;return-1}function wc(D,F,ue){var ge=F(D);return rr(D)?ge:en(ge,ue(D))}function vi(D){return D==null?D===void 0?P:$:Nr&&Nr in Object(D)?Kd(D):tr(D)}function uo(D){return ar(D)&&vi(D)==p}function yl(D,F,ue,ge,Be){return D===F?!0:D==null||F==null||!ar(D)&&!ar(F)?D!==D&&F!==F:fo(D,F,ue,ge,yl,Be)}function fo(D,F,ue,ge,Be,ke){var Qe=rr(D),St=rr(F),vt=Qe?m:er(D),tt=St?m:er(F);vt=vt==p?L:vt,tt=tt==p?L:tt;var At=vt==L,Zt=tt==L,Lt=vt==tt;if(Lt&&yi(D)){if(!yi(F))return!1;Qe=!0,At=!1}if(Lt&&!At)return ke||(ke=new wr),Qe||ir(D)?wl(D,F,ue,ge,Be,ke):Sl(D,F,vt,ue,ge,Be,ke);if(!(ue&s)){var un=At&&xn.call(D,"__wrapped__"),dn=Zt&&xn.call(F,"__wrapped__");if(un||dn){var Sr=un?D.value():D,Sn=dn?F.value():F;return ke||(ke=new wr),Be(Sr,Sn,ue,ge,ke)}}return Lt?(ke||(ke=new wr),Ea(D,F,ue,ge,Be,ke)):!1}function Qd(D){if(!po(D)||ef(D))return!1;var F=Ta(D)?ui:Q;return F.test(nr(D))}function cn(D){return ar(D)&&Nn(D.length)&&!!he[vi(D)]}function bl(D){if(!ho(D))return io(D);var F=[];for(var ue in Object(D))xn.call(D,ue)&&ue!="constructor"&&F.push(ue);return F}function wl(D,F,ue,ge,Be,ke){var Qe=ue&s,St=D.length,vt=F.length;if(St!=vt&&!(Qe&&vt>St))return!1;var tt=ke.get(D);if(tt&&ke.get(F))return tt==F;var At=-1,Zt=!0,Lt=ue&u?new mi:void 0;for(ke.set(D,F),ke.set(F,D);++At<St;){var un=D[At],dn=F[At];if(ge)var Sr=Qe?ge(dn,un,At,F,D,ke):ge(un,dn,At,D,F,ke);if(Sr!==void 0){if(Sr)continue;Zt=!1;break}if(Lt){if(!Rr(F,function(Sn,Ur){if(!Rn(Lt,Ur)&&(un===Sn||Be(un,Sn,ue,ge,ke)))return Lt.push(Ur)})){Zt=!1;break}}else if(!(un===dn||Be(un,dn,ue,ge,ke))){Zt=!1;break}}return ke.delete(D),ke.delete(F),Zt}function Sl(D,F,ue,ge,Be,ke,Qe){switch(ue){case Z:if(D.byteLength!=F.byteLength||D.byteOffset!=F.byteOffset)return!1;D=D.buffer,F=F.buffer;case U:return!(D.byteLength!=F.byteLength||!ke(new Yt(D),new Yt(F)));case y:case v:case T:return go(+D,+F);case k:return D.name==F.name&&D.message==F.message;case _:case j:return D==F+"";case E:var St=Pd;case H:var vt=ge&s;if(St||(St=tn),D.size!=F.size&&!vt)return!1;var tt=Qe.get(D);if(tt)return tt==F;ge|=u,Qe.set(D,F);var At=wl(St(D),St(F),ge,Be,ke,Qe);return Qe.delete(D),At;case A:if(hi)return hi.call(D)==hi.call(F)}return!1}function Ea(D,F,ue,ge,Be,ke){var Qe=ue&s,St=Cl(D),vt=St.length,tt=Cl(F),At=tt.length;if(vt!=At&&!Qe)return!1;for(var Zt=vt;Zt--;){var Lt=St[Zt];if(!(Qe?Lt in F:xn.call(F,Lt)))return!1}var un=ke.get(D);if(un&&ke.get(F))return un==F;var dn=!0;ke.set(D,F),ke.set(F,D);for(var Sr=Qe;++Zt<vt;){Lt=St[Zt];var Sn=D[Lt],Ur=F[Lt];if(ge)var jc=Qe?ge(Ur,Sn,Lt,F,D,ke):ge(Sn,Ur,Lt,D,F,ke);if(!(jc===void 0?Sn===Ur||Be(Sn,Ur,ue,ge,ke):jc)){dn=!1;break}Sr||(Sr=Lt=="constructor")}if(dn&&!Sr){var vo=D.constructor,xo=F.constructor;vo!=xo&&"constructor"in D&&"constructor"in F&&!(typeof vo=="function"&&vo instanceof vo&&typeof xo=="function"&&xo instanceof xo)&&(dn=!1)}return ke.delete(D),ke.delete(F),dn}function Cl(D){return wc(D,El,Sc)}function xi(D,F){var ue=D.__data__;return Jd(F)?ue[typeof F=="string"?"string":"hash"]:ue.map}function wn(D,F){var ue=Wt(D,F);return Qd(ue)?ue:void 0}function Kd(D){var F=xn.call(D,Nr),ue=D[Nr];try{D[Nr]=void 0;var ge=!0}catch{}var Be=dc.call(D);return ge&&(F?D[Nr]=ue:delete D[Nr]),Be}var Sc=di?function(D){return D==null?[]:(D=Object(D),si(di(D),function(F){return fc.call(D,F)}))}:mo,er=vi;(Kn&&er(new Kn(new ArrayBuffer(1)))!=Z||xr&&er(new xr)!=E||Hr&&er(Hr.resolve())!=N||vl&&er(new vl)!=H||oo&&er(new oo)!=V)&&(er=function(D){var F=vi(D),ue=F==L?D.constructor:void 0,ge=ue?nr(ue):"";if(ge)switch(ge){case fi:return Z;case Yd:return E;case hc:return N;case gc:return H;case pc:return V}return F});function kl(D,F){return F=F??f,!!F&&(typeof D=="number"||le.test(D))&&D>-1&&D%1==0&&D<F}function Jd(D){var F=typeof D;return F=="string"||F=="number"||F=="symbol"||F=="boolean"?D!=="__proto__":D===null}function ef(D){return!!uc&&uc in D}function ho(D){var F=D&&D.constructor,ue=typeof F=="function"&&F.prototype||ci;return D===ue}function tr(D){return dc.call(D)}function nr(D){if(D!=null){try{return cc.call(D)}catch{}try{return D+""}catch{}}return""}function go(D,F){return D===F||D!==D&&F!==F}var ja=uo((function(){return arguments})())?uo:function(D){return ar(D)&&xn.call(D,"callee")&&!fc.call(D,"callee")},rr=Array.isArray;function Cc(D){return D!=null&&Nn(D.length)&&!Ta(D)}var yi=ao||Ec;function kc(D,F){return yl(D,F)}function Ta(D){if(!po(D))return!1;var F=vi(D);return F==C||F==S||F==x||F==z}function Nn(D){return typeof D=="number"&&D>-1&&D%1==0&&D<=f}function po(D){var F=typeof D;return D!=null&&(F=="object"||F=="function")}function ar(D){return D!=null&&typeof D=="object"}var ir=Dn?_n(Dn):cn;function El(D){return Cc(D)?Jn(D):bl(D)}function mo(){return[]}function Ec(){return!1}e.exports=kc})($s,$s.exports)),$s.exports}mk();var g0,_x;function vk(){if(_x)return g0;_x=1;var e="Expected a function",r=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,m=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,x=typeof self=="object"&&self&&self.Object===Object&&self,y=m||x||Function("return this")(),v=Object.prototype,k=v.toString,C=Math.max,S=Math.min,E=function(){return y.Date.now()};function T(_,H,j){var A,P,V,U,Z,re,X=0,te=!1,B=!1,q=!0;if(typeof _!="function")throw new TypeError(e);H=z(H)||0,$(j)&&(te=!!j.leading,B="maxWait"in j,V=B?C(z(j.maxWait)||0,H):V,q="trailing"in j?!!j.trailing:q);function ae(fe){var ve=A,me=P;return A=P=void 0,X=fe,U=_.apply(me,ve),U}function ie(fe){return X=fe,Z=setTimeout(W,H),te?ae(fe):U}function de(fe){var ve=fe-re,me=fe-X,Te=H-ve;return B?S(Te,V-me):Te}function O(fe){var ve=fe-re,me=fe-X;return re===void 0||ve>=H||ve<0||B&&me>=V}function W(){var fe=E();if(O(fe))return Q(fe);Z=setTimeout(W,de(fe))}function Q(fe){return Z=void 0,q&&A?ae(fe):(A=P=void 0,U)}function le(){Z!==void 0&&clearTimeout(Z),X=0,A=re=P=Z=void 0}function he(){return Z===void 0?U:Q(E())}function pe(){var fe=E(),ve=O(fe);if(A=arguments,P=this,re=fe,ve){if(Z===void 0)return ie(re);if(B)return Z=setTimeout(W,H),ae(re)}return Z===void 0&&(Z=setTimeout(W,H)),U}return pe.cancel=le,pe.flush=he,pe}function $(_){var H=typeof _;return!!_&&(H=="object"||H=="function")}function L(_){return!!_&&typeof _=="object"}function N(_){return typeof _=="symbol"||L(_)&&k.call(_)==a}function z(_){if(typeof _=="number")return _;if(N(_))return r;if($(_)){var H=typeof _.valueOf=="function"?_.valueOf():_;_=$(H)?H+"":H}if(typeof _!="string")return _===0?_:+_;_=_.replace(o,"");var j=u.test(_);return j||f.test(_)?p(_.slice(2),j?2:8):s.test(_)?r:+_}return g0=T,g0}vk();var Au={exports:{}},Rx;function xk(){return Rx||(Rx=1,(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});function a(j){return typeof j=="object"&&!("toString"in j)?Object.prototype.toString.call(j).slice(8,-1):j}var o=typeof process=="object"&&!0;function s(j,A){if(!j)throw o?new Error("Invariant failed"):new Error(A())}r.invariant=s;var u=Object.prototype.hasOwnProperty,f=Array.prototype.splice,p=Object.prototype.toString;function m(j){return p.call(j).slice(8,-1)}var x=Object.assign||(function(j,A){return y(A).forEach(function(P){u.call(A,P)&&(j[P]=A[P])}),j}),y=typeof Object.getOwnPropertySymbols=="function"?function(j){return Object.keys(j).concat(Object.getOwnPropertySymbols(j))}:function(j){return Object.keys(j)};function v(j){return Array.isArray(j)?x(j.constructor(j.length),j):m(j)==="Map"?new Map(j):m(j)==="Set"?new Set(j):j&&typeof j=="object"?x(Object.create(Object.getPrototypeOf(j)),j):j}var k=(function(){function j(){this.commands=x({},C),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(A,P){return A===P},this.update.newContext=function(){return new j().update}}return Object.defineProperty(j.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(A){this.update.isEquals=A},enumerable:!0,configurable:!0}),j.prototype.extend=function(A,P){this.commands[A]=P},j.prototype.update=function(A,P){var V=this,U=typeof P=="function"?{$apply:P}:P;Array.isArray(A)&&Array.isArray(U)||s(!Array.isArray(U),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),s(typeof U=="object"&&U!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(V.commands).join(", ")+".")});var Z=A;return y(U).forEach(function(re){if(u.call(V.commands,re)){var X=A===Z;Z=V.commands[re](U[re],Z,U,A),X&&V.isEquals(Z,A)&&(Z=A)}else{var te=m(A)==="Map"?V.update(A.get(re),U[re]):V.update(A[re],U[re]),B=m(Z)==="Map"?Z.get(re):Z[re];(!V.isEquals(te,B)||typeof te>"u"&&!u.call(A,re))&&(Z===A&&(Z=v(A)),m(Z)==="Map"?Z.set(re,te):Z[re]=te)}}),Z},j})();r.Context=k;var C={$push:function(j,A,P){return E(A,P,"$push"),j.length?A.concat(j):A},$unshift:function(j,A,P){return E(A,P,"$unshift"),j.length?j.concat(A):A},$splice:function(j,A,P,V){return $(A,P),j.forEach(function(U){L(U),A===V&&U.length&&(A=v(V)),f.apply(A,U)}),A},$set:function(j,A,P){return z(P),j},$toggle:function(j,A){T(j,"$toggle");var P=j.length?v(A):A;return j.forEach(function(V){P[V]=!A[V]}),P},$unset:function(j,A,P,V){return T(j,"$unset"),j.forEach(function(U){Object.hasOwnProperty.call(A,U)&&(A===V&&(A=v(V)),delete A[U])}),A},$add:function(j,A,P,V){return H(A,"$add"),T(j,"$add"),m(A)==="Map"?j.forEach(function(U){var Z=U[0],re=U[1];A===V&&A.get(Z)!==re&&(A=v(V)),A.set(Z,re)}):j.forEach(function(U){A===V&&!A.has(U)&&(A=v(V)),A.add(U)}),A},$remove:function(j,A,P,V){return H(A,"$remove"),T(j,"$remove"),j.forEach(function(U){A===V&&A.has(U)&&(A=v(V)),A.delete(U)}),A},$merge:function(j,A,P,V){return _(A,j),y(j).forEach(function(U){j[U]!==A[U]&&(A===V&&(A=v(V)),A[U]=j[U])}),A},$apply:function(j,A){return N(j),j(A)}},S=new k;r.isEquals=S.update.isEquals,r.extend=S.extend,r.default=S.update,r.default.default=e.exports=x(r.default,r);function E(j,A,P){s(Array.isArray(j),function(){return"update(): expected target of "+a(P)+" to be an array; got "+a(j)+"."}),T(A[P],P)}function T(j,A){s(Array.isArray(j),function(){return"update(): expected spec of "+a(A)+" to be an array; got "+a(j)+". Did you forget to wrap your parameter in an array?"})}function $(j,A){s(Array.isArray(j),function(){return"Expected $splice target to be an array; got "+a(j)}),L(A.$splice)}function L(j){s(Array.isArray(j),function(){return"update(): expected spec of $splice to be an array of arrays; got "+a(j)+". Did you forget to wrap your parameters in an array?"})}function N(j){s(typeof j=="function",function(){return"update(): expected spec of $apply to be a function; got "+a(j)+"."})}function z(j){s(Object.keys(j).length===1,function(){return"Cannot have more than one key in an object with $set"})}function _(j,A){s(A&&typeof A=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+a(A)}),s(j&&typeof j=="object",function(){return"update(): $merge expects a target of type 'object'; got "+a(j)})}function H(j,A){var P=m(j);s(P==="Map"||P==="Set",function(){return"update(): "+a(A)+" expects a target of type Set or Map; got "+a(P)})}})(Au,Au.exports)),Au.exports}var yk=xk();const la=Sd(yk);var Nx="popstate";function Hx(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function bk(e={}){function r(s,u){let{pathname:f="/",search:p="",hash:m=""}=no(s.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Q0("",{pathname:f,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(s,u){let f=s.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=s.location.href,x=m.indexOf("#");p=x===-1?m:m.slice(0,x)}return p+"#"+(typeof u=="string"?u:Fs(u))}function o(s,u){gr(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Sk(r,a,o,e)}function ft(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function gr(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function wk(){return Math.random().toString(36).substring(2,10)}function Bx(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Q0(e,r,a=null,o,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?no(r):r,state:a,key:r&&r.key||o||wk(),unstable_mask:s}}function Fs({pathname:e="/",search:r="",hash:a=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function no(e){let r={};if(e){let a=e.indexOf("#");a>=0&&(r.hash=e.substring(a),e=e.substring(0,a));let o=e.indexOf("?");o>=0&&(r.search=e.substring(o),e=e.substring(0,o)),e&&(r.pathname=e)}return r}function Sk(e,r,a,o={}){let{window:s=document.defaultView,v5Compat:u=!1}=o,f=s.history,p="POP",m=null,x=y();x==null&&(x=0,f.replaceState({...f.state,idx:x},""));function y(){return(f.state||{idx:null}).idx}function v(){p="POP";let T=y(),$=T==null?null:T-x;x=T,m&&m({action:p,location:E.location,delta:$})}function k(T,$){p="PUSH";let L=Hx(T)?T:Q0(E.location,T,$);a&&a(L,T),x=y()+1;let N=Bx(L,x),z=E.createHref(L.unstable_mask||L);try{f.pushState(N,"",z)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;s.location.assign(z)}u&&m&&m({action:p,location:E.location,delta:1})}function C(T,$){p="REPLACE";let L=Hx(T)?T:Q0(E.location,T,$);a&&a(L,T),x=y();let N=Bx(L,x),z=E.createHref(L.unstable_mask||L);f.replaceState(N,"",z),u&&m&&m({action:p,location:E.location,delta:0})}function S(T){return Ck(T)}let E={get action(){return p},get location(){return e(s,f)},listen(T){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Nx,v),m=T,()=>{s.removeEventListener(Nx,v),m=null}},createHref(T){return r(s,T)},createURL:S,encodeLocation(T){let $=S(T);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:k,replace:C,go(T){return f.go(T)}};return E}function Ck(e,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ft(a,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Fs(e);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=a+o),new URL(o,a)}function x5(e,r,a="/"){return kk(e,r,a,!1)}function kk(e,r,a,o){let s=typeof r=="string"?no(r):r,u=va(s.pathname||"/",a);if(u==null)return null;let f=y5(e);Ek(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let x=Rk(u);p=Dk(f[m],x,o)}return p}function y5(e,r=[],a=[],o="",s=!1){let u=(f,p,m=s,x)=>{let y={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&m)return;ft(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let v=Lr([o,y.relativePath]),k=a.concat(y);f.children&&f.children.length>0&&(ft(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),y5(f.children,r,k,v,m)),!(f.path==null&&!f.index)&&r.push({path:v,score:Ok(v,f.index),routesMeta:k})};return e.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let m of b5(f.path))u(f,p,!0,m)}),r}function b5(e){let r=e.split("/");if(r.length===0)return[];let[a,...o]=r,s=a.endsWith("?"),u=a.replace(/\?$/,"");if(o.length===0)return s?[u,""]:[u];let f=b5(o.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),s&&p.push(...f),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function Ek(e){e.sort((r,a)=>r.score!==a.score?a.score-r.score:zk(r.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var jk=/^:[\w-]+$/,Tk=3,Mk=2,$k=1,Ak=10,Lk=-2,Ix=e=>e==="*";function Ok(e,r){let a=e.split("/"),o=a.length;return a.some(Ix)&&(o+=Lk),r&&(o+=Mk),a.filter(s=>!Ix(s)).reduce((s,u)=>s+(jk.test(u)?Tk:u===""?$k:Ak),o)}function zk(e,r){return e.length===r.length&&e.slice(0,-1).every((o,s)=>o===r[s])?e[e.length-1]-r[r.length-1]:0}function Dk(e,r,a=!1){let{routesMeta:o}=e,s={},u="/",f=[];for(let p=0;p<o.length;++p){let m=o[p],x=p===o.length-1,y=u==="/"?r:r.slice(u.length)||"/",v=dd({path:m.relativePath,caseSensitive:m.caseSensitive,end:x},y),k=m.route;if(!v&&x&&a&&!o[o.length-1].route.index&&(v=dd({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(s,v.params),f.push({params:s,pathname:Lr([u,v.pathname]),pathnameBase:Ik(Lr([u,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(u=Lr([u,v.pathnameBase]))}return f}function dd(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,o]=_k(e.path,e.caseSensitive,e.end),s=r.match(a);if(!s)return null;let u=s[0],f=u.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:o.reduce((x,{paramName:y,isOptional:v},k)=>{if(y==="*"){let S=p[k]||"";f=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const C=p[k];return v&&!C?x[y]=void 0:x[y]=(C||"").replace(/%2F/g,"/"),x},{}),pathname:u,pathnameBase:f,pattern:e}}function _k(e,r=!1,a=!0){gr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,x,y)=>{if(o.push({paramName:p,isOptional:m!=null}),m){let v=y.charAt(x+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function Rk(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return gr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function va(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,o=e.charAt(a);return o&&o!=="/"?null:e.slice(a)||"/"}var Nk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Hk(e,r="/"){let{pathname:a,search:o="",hash:s=""}=typeof e=="string"?no(e):e,u;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?u=Ux(a.substring(1),"/"):u=Ux(a,r)):u=r,{pathname:u,search:Uk(o),hash:Gk(s)}}function Ux(e,r){let a=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function p0(e,r,a,o){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bk(e){return e.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function w5(e){let r=Bk(e);return r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase)}function Hg(e,r,a,o=!1){let s;typeof e=="string"?s=no(e):(s={...e},ft(!s.pathname||!s.pathname.includes("?"),p0("?","pathname","search",s)),ft(!s.pathname||!s.pathname.includes("#"),p0("#","pathname","hash",s)),ft(!s.search||!s.search.includes("#"),p0("#","search","hash",s)));let u=e===""||s.pathname==="",f=u?"/":s.pathname,p;if(f==null)p=a;else{let v=r.length-1;if(!o&&f.startsWith("..")){let k=f.split("/");for(;k[0]==="..";)k.shift(),v-=1;s.pathname=k.join("/")}p=v>=0?r[v]:"/"}let m=Hk(s,p),x=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(x||y)&&(m.pathname+="/"),m}var Lr=e=>e.join("/").replace(/\/\/+/g,"/"),Ik=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Pk=class{constructor(e,r,a,o=!1){this.status=e,this.statusText=r||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function qk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Wk(e){return e.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var S5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function C5(e,r){let a=e;if(typeof a!="string"||!Nk.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let o=a,s=!1;if(S5)try{let u=new URL(window.location.href),f=a.startsWith("//")?new URL(u.protocol+a):new URL(a),p=va(f.pathname,r);f.origin===u.origin&&p!=null?a=p+f.search+f.hash:s=!0}catch{gr(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var k5=["POST","PUT","PATCH","DELETE"];new Set(k5);var Fk=["GET",...k5];new Set(Fk);var pl=h.createContext(null);pl.displayName="DataRouter";var Dd=h.createContext(null);Dd.displayName="DataRouterState";var Yk=h.createContext(!1),E5=h.createContext({isTransitioning:!1});E5.displayName="ViewTransition";var Vk=h.createContext(new Map);Vk.displayName="Fetchers";var Zk=h.createContext(null);Zk.displayName="Await";var Qn=h.createContext(null);Qn.displayName="Navigation";var ec=h.createContext(null);ec.displayName="Location";var xa=h.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var Bg=h.createContext(null);Bg.displayName="RouteError";var j5="REACT_ROUTER_ERROR",Xk="REDIRECT",Qk="ROUTE_ERROR_RESPONSE";function Kk(e){if(e.startsWith(`${j5}:${Xk}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Jk(e){if(e.startsWith(`${j5}:${Qk}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Pk(r.status,r.statusText,r.data)}catch{}}function eE(e,{relative:r}={}){ft(tc(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=h.useContext(Qn),{hash:s,pathname:u,search:f}=nc(e,{relative:r}),p=u;return a!=="/"&&(p=u==="/"?a:Lr([a,u])),o.createHref({pathname:p,search:f,hash:s})}function tc(){return h.useContext(ec)!=null}function zr(){return ft(tc(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(ec).location}var T5="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M5(e){h.useContext(Qn).static||h.useLayoutEffect(e)}function tE(){let{isDataRoute:e}=h.useContext(xa);return e?gE():nE()}function nE(){ft(tc(),"useNavigate() may be used only in the context of a <Router> component.");let e=h.useContext(pl),{basename:r,navigator:a}=h.useContext(Qn),{matches:o}=h.useContext(xa),{pathname:s}=zr(),u=JSON.stringify(w5(o)),f=h.useRef(!1);return M5(()=>{f.current=!0}),h.useCallback((m,x={})=>{if(gr(f.current,T5),!f.current)return;if(typeof m=="number"){a.go(m);return}let y=Hg(m,JSON.parse(u),s,x.relative==="path");e==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Lr([r,y.pathname])),(x.replace?a.replace:a.push)(y,x.state,x)},[r,a,u,s,e])}h.createContext(null);function nc(e,{relative:r}={}){let{matches:a}=h.useContext(xa),{pathname:o}=zr(),s=JSON.stringify(w5(a));return h.useMemo(()=>Hg(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function rE(e,r){return $5(e,r)}function $5(e,r,a){ft(tc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=h.useContext(Qn),{matches:s}=h.useContext(xa),u=s[s.length-1],f=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",x=u&&u.route;{let T=x&&x.path||"";L5(p,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=zr(),v;if(r){let T=typeof r=="string"?no(r):r;ft(m==="/"||T.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let k=v.pathname||"/",C=k;if(m!=="/"){let T=m.replace(/^\//,"").split("/");C="/"+k.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=x5(e,{pathname:C});gr(x||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),gr(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=sE(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},f,T.params),pathname:Lr([m,o.encodeLocation?o.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:Lr([m,o.encodeLocation?o.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),s,a);return r&&E?h.createElement(ec.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},E):E}function aE(){let e=hE(),r=qk(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",e),f=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:u},"ErrorBoundary")," or"," ",h.createElement("code",{style:u},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},r),a?h.createElement("pre",{style:s},a):null,f)}var iE=h.createElement(aE,null),A5=class extends h.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=Jk(e.digest);a&&(e=a)}let r=e!==void 0?h.createElement(xa.Provider,{value:this.props.routeContext},h.createElement(Bg.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?h.createElement(oE,{error:e},r):r}};A5.contextType=Yk;var m0=new WeakMap;function oE({children:e,error:r}){let{basename:a}=h.useContext(Qn);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=Kk(r.digest);if(o){let s=m0.get(r);if(s)throw s;let u=C5(o.location,a);if(S5&&!m0.get(r))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw m0.set(r,f),f}return h.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function lE({routeContext:e,match:r,children:a}){let o=h.useContext(pl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),h.createElement(xa.Provider,{value:e},a)}function sE(e,r=[],a){let o=a?.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,u=o?.errors;if(u!=null){let y=s.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);ft(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let f=!1,p=-1;if(a&&o){f=o.renderFallback;for(let y=0;y<s.length;y++){let v=s[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=y),v.route.id){let{loaderData:k,errors:C}=o,S=v.route.loader&&!k.hasOwnProperty(v.route.id)&&(!C||C[v.route.id]===void 0);if(v.route.lazy||S){a.isStatic&&(f=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let m=a?.onError,x=o&&m?(y,v)=>{m(y,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Wk(o.matches),errorInfo:v})}:void 0;return s.reduceRight((y,v,k)=>{let C,S=!1,E=null,T=null;o&&(C=u&&v.route.id?u[v.route.id]:void 0,E=v.route.errorElement||iE,f&&(p<0&&k===0?(L5("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===k&&(S=!0,T=v.route.hydrateFallbackElement||null)));let $=r.concat(s.slice(0,k+1)),L=()=>{let N;return C?N=E:S?N=T:v.route.Component?N=h.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=y,h.createElement(lE,{match:v,routeContext:{outlet:y,matches:$,isDataRoute:o!=null},children:N})};return o&&(v.route.ErrorBoundary||v.route.errorElement||k===0)?h.createElement(A5,{location:o.location,revalidation:o.revalidation,component:E,error:C,children:L(),routeContext:{outlet:null,matches:$,isDataRoute:!0},onError:x}):L()},null)}function Ig(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cE(e){let r=h.useContext(pl);return ft(r,Ig(e)),r}function uE(e){let r=h.useContext(Dd);return ft(r,Ig(e)),r}function dE(e){let r=h.useContext(xa);return ft(r,Ig(e)),r}function Ug(e){let r=dE(e),a=r.matches[r.matches.length-1];return ft(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function fE(){return Ug("useRouteId")}function hE(){let e=h.useContext(Bg),r=uE("useRouteError"),a=Ug("useRouteError");return e!==void 0?e:r.errors?.[a]}function gE(){let{router:e}=cE("useNavigate"),r=Ug("useNavigate"),a=h.useRef(!1);return M5(()=>{a.current=!0}),h.useCallback(async(s,u={})=>{gr(a.current,T5),a.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:r,...u}))},[e,r])}var Gx={};function L5(e,r,a){!r&&!Gx[e]&&(Gx[e]=!0,gr(!1,a))}h.memo(pE);function pE({routes:e,future:r,state:a,isStatic:o,onError:s}){return $5(e,void 0,{state:a,isStatic:o,onError:s})}function Kt(e){ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mE({basename:e="/",children:r=null,location:a,navigationType:o="POP",navigator:s,static:u=!1,unstable_useTransitions:f}){ft(!tc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),m=h.useMemo(()=>({basename:p,navigator:s,static:u,unstable_useTransitions:f,future:{}}),[p,s,u,f]);typeof a=="string"&&(a=no(a));let{pathname:x="/",search:y="",hash:v="",state:k=null,key:C="default",unstable_mask:S}=a,E=h.useMemo(()=>{let T=va(x,p);return T==null?null:{location:{pathname:T,search:y,hash:v,state:k,key:C,unstable_mask:S},navigationType:o}},[p,x,y,v,k,C,o,S]);return gr(E!=null,`<Router basename="${p}"> is not able to match the URL "${x}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:h.createElement(Qn.Provider,{value:m},h.createElement(ec.Provider,{children:r,value:E}))}function vE({children:e,location:r}){return rE(K0(e),r)}function K0(e,r=[]){let a=[];return h.Children.forEach(e,(o,s)=>{if(!h.isValidElement(o))return;let u=[...r,s];if(o.type===h.Fragment){a.push.apply(a,K0(o.props.children,u));return}ft(o.type===Kt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ft(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=K0(o.props.children,u)),a.push(f)}),a}var Qu="get",Ku="application/x-www-form-urlencoded";function _d(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function xE(e){return _d(e)&&e.tagName.toLowerCase()==="button"}function yE(e){return _d(e)&&e.tagName.toLowerCase()==="form"}function bE(e){return _d(e)&&e.tagName.toLowerCase()==="input"}function wE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function SE(e,r){return e.button===0&&(!r||r==="_self")&&!wE(e)}var Lu=null;function CE(){if(Lu===null)try{new FormData(document.createElement("form"),0),Lu=!1}catch{Lu=!0}return Lu}var kE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function v0(e){return e!=null&&!kE.has(e)?(gr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`),null):e}function EE(e,r){let a,o,s,u,f;if(yE(e)){let p=e.getAttribute("action");o=p?va(p,r):null,a=e.getAttribute("method")||Qu,s=v0(e.getAttribute("enctype"))||Ku,u=new FormData(e)}else if(xE(e)||bE(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(o=m?va(m,r):null,a=e.getAttribute("formmethod")||p.getAttribute("method")||Qu,s=v0(e.getAttribute("formenctype"))||v0(p.getAttribute("enctype"))||Ku,u=new FormData(p,e),!CE()){let{name:x,type:y,value:v}=e;if(y==="image"){let k=x?`${x}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else x&&u.append(x,v)}}else{if(_d(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Qu,o=null,s=Ku,f=e}return u&&s==="text/plain"&&(f=u,u=void 0),{action:o,method:a.toLowerCase(),encType:s,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gg(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function jE(e,r,a,o){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:r&&va(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function TE(e,r){if(e.id in r)return r[e.id];try{let a=await import(e.module);return r[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ME(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function $E(e,r,a){let o=await Promise.all(e.map(async s=>{let u=r.routes[s.route.id];if(u){let f=await TE(u,a);return f.links?f.links():[]}return[]}));return zE(o.flat(1).filter(ME).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Px(e,r,a,o,s,u){let f=(m,x)=>a[x]?m.route.id!==a[x].route.id:!0,p=(m,x)=>a[x].pathname!==m.pathname||a[x].route.path?.endsWith("*")&&a[x].params["*"]!==m.params["*"];return u==="assets"?r.filter((m,x)=>f(m,x)||p(m,x)):u==="data"?r.filter((m,x)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(f(m,x)||p(m,x))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function AE(e,r,{includeHydrateFallback:a}={}){return LE(e.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),a&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function LE(e){return[...new Set(e)]}function OE(e){let r={},a=Object.keys(e).sort();for(let o of a)r[o]=e[o];return r}function zE(e,r){let a=new Set;return new Set(r),e.reduce((o,s)=>{let u=JSON.stringify(OE(s));return a.has(u)||(a.add(u),o.push({key:u,link:s})),o},[])}function O5(){let e=h.useContext(pl);return Gg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function DE(){let e=h.useContext(Dd);return Gg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Pg=h.createContext(void 0);Pg.displayName="FrameworkContext";function z5(){let e=h.useContext(Pg);return Gg(e,"You must render this element inside a <HydratedRouter> element"),e}function _E(e,r){let a=h.useContext(Pg),[o,s]=h.useState(!1),[u,f]=h.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:x,onMouseLeave:y,onTouchStart:v}=r,k=h.useRef(null);h.useEffect(()=>{if(e==="render"&&f(!0),e==="viewport"){let E=$=>{$.forEach(L=>{f(L.isIntersecting)})},T=new IntersectionObserver(E,{threshold:.5});return k.current&&T.observe(k.current),()=>{T.disconnect()}}},[e]),h.useEffect(()=>{if(o){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[o]);let C=()=>{s(!0)},S=()=>{s(!1),f(!1)};return a?e!=="intent"?[u,k,{}]:[u,k,{onFocus:ds(p,C),onBlur:ds(m,S),onMouseEnter:ds(x,C),onMouseLeave:ds(y,S),onTouchStart:ds(v,C)}]:[!1,k,{}]}function ds(e,r){return a=>{e&&e(a),a.defaultPrevented||r(a)}}function RE({page:e,...r}){let{router:a}=O5(),o=h.useMemo(()=>x5(a.routes,e,a.basename),[a.routes,e,a.basename]);return o?h.createElement(HE,{page:e,matches:o,...r}):null}function NE(e){let{manifest:r,routeModules:a}=z5(),[o,s]=h.useState([]);return h.useEffect(()=>{let u=!1;return $E(e,r,a).then(f=>{u||s(f)}),()=>{u=!0}},[e,r,a]),o}function HE({page:e,matches:r,...a}){let o=zr(),{future:s,manifest:u,routeModules:f}=z5(),{basename:p}=O5(),{loaderData:m,matches:x}=DE(),y=h.useMemo(()=>Px(e,r,x,u,o,"data"),[e,r,x,u,o]),v=h.useMemo(()=>Px(e,r,x,u,o,"assets"),[e,r,x,u,o]),k=h.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let E=new Set,T=!1;if(r.forEach(L=>{let N=u.routes[L.route.id];!N||!N.hasLoader||(!y.some(z=>z.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||N.hasClientLoader?T=!0:E.add(L.route.id))}),E.size===0)return[];let $=jE(e,p,s.unstable_trailingSlashAwareDataRequests,"data");return T&&E.size>0&&$.searchParams.set("_routes",r.filter(L=>E.has(L.route.id)).map(L=>L.route.id).join(",")),[$.pathname+$.search]},[p,s.unstable_trailingSlashAwareDataRequests,m,o,u,y,r,e,f]),C=h.useMemo(()=>AE(v,u),[v,u]),S=NE(v);return h.createElement(h.Fragment,null,k.map(E=>h.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),C.map(E=>h.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),S.map(({key:E,link:T})=>h.createElement("link",{key:E,nonce:a.nonce,...T,crossOrigin:T.crossOrigin??a.crossOrigin})))}function BE(...e){return r=>{e.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var IE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{IE&&(window.__reactRouterVersion="7.13.1")}catch{}function UE({basename:e,children:r,unstable_useTransitions:a,window:o}){let s=h.useRef();s.current==null&&(s.current=bk({window:o,v5Compat:!0}));let u=s.current,[f,p]=h.useState({action:u.action,location:u.location}),m=h.useCallback(x=>{a===!1?p(x):h.startTransition(()=>p(x))},[a]);return h.useLayoutEffect(()=>u.listen(m),[u,m]),h.createElement(mE,{basename:e,children:r,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:a})}var D5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=h.forwardRef(function({onClick:r,discover:a="render",prefetch:o="none",relative:s,reloadDocument:u,replace:f,unstable_mask:p,state:m,target:x,to:y,preventScrollReset:v,viewTransition:k,unstable_defaultShouldRevalidate:C,...S},E){let{basename:T,navigator:$,unstable_useTransitions:L}=h.useContext(Qn),N=typeof y=="string"&&D5.test(y),z=C5(y,T);y=z.to;let _=eE(y,{relative:s}),H=zr(),j=null;if(p){let te=Hg(p,[],H.unstable_mask?H.unstable_mask.pathname:"/",!0);T!=="/"&&(te.pathname=te.pathname==="/"?T:Lr([T,te.pathname])),j=$.createHref(te)}let[A,P,V]=_E(o,S),U=WE(y,{replace:f,unstable_mask:p,state:m,target:x,preventScrollReset:v,relative:s,viewTransition:k,unstable_defaultShouldRevalidate:C,unstable_useTransitions:L});function Z(te){r&&r(te),te.defaultPrevented||U(te)}let re=!(z.isExternal||u),X=h.createElement("a",{...S,...V,href:(re?j:void 0)||z.absoluteURL||_,onClick:re?Z:r,ref:BE(E,P),target:x,"data-discover":!N&&a==="render"?"true":void 0});return A&&!N?h.createElement(h.Fragment,null,X,h.createElement(RE,{page:_})):X});Ge.displayName="Link";var GE=h.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:o="",end:s=!1,style:u,to:f,viewTransition:p,children:m,...x},y){let v=nc(f,{relative:x.relative}),k=zr(),C=h.useContext(Dd),{navigator:S,basename:E}=h.useContext(Qn),T=C!=null&&XE(v)&&p===!0,$=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,L=k.pathname,N=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;a||(L=L.toLowerCase(),N=N?N.toLowerCase():null,$=$.toLowerCase()),N&&E&&(N=va(N,E)||N);const z=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let _=L===$||!s&&L.startsWith($)&&L.charAt(z)==="/",H=N!=null&&(N===$||!s&&N.startsWith($)&&N.charAt($.length)==="/"),j={isActive:_,isPending:H,isTransitioning:T},A=_?r:void 0,P;typeof o=="function"?P=o(j):P=[o,_?"active":null,H?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let V=typeof u=="function"?u(j):u;return h.createElement(Ge,{...x,"aria-current":A,className:P,ref:y,style:V,to:f,viewTransition:p},typeof m=="function"?m(j):m)});GE.displayName="NavLink";var PE=h.forwardRef(({discover:e="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:s,state:u,method:f=Qu,action:p,onSubmit:m,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k,...C},S)=>{let{unstable_useTransitions:E}=h.useContext(Qn),T=VE(),$=ZE(p,{relative:x}),L=f.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&D5.test(p),z=_=>{if(m&&m(_),_.defaultPrevented)return;_.preventDefault();let H=_.nativeEvent.submitter,j=H?.getAttribute("formmethod")||f,A=()=>T(H||_.currentTarget,{fetcherKey:r,method:j,navigate:a,replace:s,state:u,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k});E&&a!==!1?h.startTransition(()=>A()):A()};return h.createElement("form",{ref:S,method:L,action:$,onSubmit:o?m:z,...C,"data-discover":!N&&e==="render"?"true":void 0})});PE.displayName="Form";function qE(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _5(e){let r=h.useContext(pl);return ft(r,qE(e)),r}function WE(e,{target:r,replace:a,unstable_mask:o,state:s,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:x}={}){let y=tE(),v=zr(),k=nc(e,{relative:f});return h.useCallback(C=>{if(SE(C,r)){C.preventDefault();let S=a!==void 0?a:Fs(v)===Fs(k),E=()=>y(e,{replace:S,unstable_mask:o,state:s,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m});x?h.startTransition(()=>E()):E()}},[v,y,k,a,o,s,r,e,u,f,p,m,x])}var FE=0,YE=()=>`__${String(++FE)}__`;function VE(){let{router:e}=_5("useSubmit"),{basename:r}=h.useContext(Qn),a=fE(),o=e.fetch,s=e.navigate;return h.useCallback(async(u,f={})=>{let{action:p,method:m,encType:x,formData:y,body:v}=EE(u,r);if(f.navigate===!1){let k=f.fetcherKey||YE();await o(k,a,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||m,formEncType:f.encType||x,flushSync:f.flushSync})}else await s(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:v,formMethod:f.method||m,formEncType:f.encType||x,replace:f.replace,state:f.state,fromRouteId:a,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,s,r,a])}function ZE(e,{relative:r}={}){let{basename:a}=h.useContext(Qn),o=h.useContext(xa);ft(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),u={...nc(e||".",{relative:r})},f=zr();if(e==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(u.pathname=u.pathname==="/"?a:Lr([a,u.pathname])),Fs(u)}function XE(e,{relative:r}={}){let a=h.useContext(E5);ft(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=_5("useViewTransitionState"),s=nc(e,{relative:r});if(!a.isTransitioning)return!1;let u=va(a.currentLocation.pathname,o)||a.currentLocation.pathname,f=va(a.nextLocation.pathname,o)||a.nextLocation.pathname;return dd(s.pathname,f)!=null||dd(s.pathname,u)!=null}var x0={},An={},y0={},qx;function Dr(){return qx||(qx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.DEFAULT_HEARTBEAT=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var r=1,a=1e3*r;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*a,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},e.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3};var o;(function(u){u[u.UNINSTANTIATED=-1]="UNINSTANTIATED",u[u.CONNECTING=0]="CONNECTING",u[u.OPEN=1]="OPEN",u[u.CLOSING=2]="CLOSING",u[u.CLOSED=3]="CLOSED"})(o||(e.ReadyState=o={}));var s=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&s()})(y0)),y0}var fs={},b0={},Wx;function qg(){return Wx||(Wx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var r=function(a){if(a&&e.sharedWebSockets.hasOwnProperty(a))delete e.sharedWebSockets[a];else for(var o in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(o)&&delete e.sharedWebSockets[o]};e.resetWebSockets=r})(b0)),b0}var _i={},ra={},Fx;function Wg(){if(Fx)return ra;Fx=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.setUpSocketIOPing=ra.appendQueryParams=ra.parseSocketIOUrl=void 0;var e=Dr(),r=function(s){if(s){var u=/^https|wss/.test(s),f=s.replace(/^(https?|wss?)(:\/\/)?/,""),p=f.replace(/\/$/,""),m=u?"wss":"ws";return"".concat(m,"://").concat(p).concat(e.SOCKET_IO_PATH)}else if(s===""){var u=/^https/.test(window.location.protocol),m=u?"wss":"ws",x=window.location.port?":".concat(window.location.port):"";return"".concat(m,"://").concat(window.location.hostname).concat(x).concat(e.SOCKET_IO_PATH)}return s};ra.parseSocketIOUrl=r;var a=function(s,u){u===void 0&&(u={});var f=/\?([\w]+=[\w]+)/,p=f.test(s),m="".concat(Object.entries(u).reduce(function(x,y){var v=y[0],k=y[1];return x+"".concat(v,"=").concat(k,"&")},"").slice(0,-1));return"".concat(s).concat(p?"&":"?").concat(m)};ra.appendQueryParams=a;var o=function(s,u){u===void 0&&(u=e.SOCKET_IO_PING_INTERVAL);var f=function(){return s(e.SOCKET_IO_PING_CODE)};return window.setInterval(f,u)};return ra.setUpSocketIOPing=o,ra}var Ou={},Yx;function R5(){if(Yx)return Ou;Yx=1,Object.defineProperty(Ou,"__esModule",{value:!0}),Ou.heartbeat=a;var e=Dr();function r(o){return Array.isArray(o)?o.reduce(function(s,u){return s.current>u.current?s:u}).current:o.current}function a(o,s,u){var f=u||{},p=f.interval,m=p===void 0?e.DEFAULT_HEARTBEAT.interval:p,x=f.timeout,y=x===void 0?e.DEFAULT_HEARTBEAT.timeout:x,v=f.message,k=v===void 0?e.DEFAULT_HEARTBEAT.message:v,C=Math.max(100,m/10),S=Date.now(),E=setInterval(function(){var T=Date.now(),$=r(s);if($+y<=T)console.warn("Heartbeat timed out, closing connection, last message received ".concat(T-$,"ms ago, last ping sent ").concat(T-S,"ms ago")),o.close();else if($+m<=T&&S+m<=T)try{typeof k=="function"?o.send(k()):o.send(k),S=T}catch(L){console.error("Heartbeat failed, closing connection",L instanceof Error?L.message:L),o.close()}},C);return o.addEventListener("close",function(){clearInterval(E)}),function(){}}return Ou}var hs={},w0={},Vx;function Fg(){return Vx||(Vx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var r={},a=[],o=function(m){return(0,e.hasSubscribers)(m)?Array.from(r[m]):a};e.getSubscribers=o;var s=function(m){var x;return((x=r[m])===null||x===void 0?void 0:x.size)>0};e.hasSubscribers=s;var u=function(m,x){r[m]=r[m]||new Set,r[m].add(x)};e.addSubscriber=u;var f=function(m,x){r[m].delete(x)};e.removeSubscriber=f;var p=function(m){if(m&&r.hasOwnProperty(m))delete r[m];else for(var x in r)r.hasOwnProperty(x)&&delete r[x]};e.resetSubscribers=p})(w0)),w0}var Zx;function Yg(){if(Zx)return hs;Zx=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.assertIsWebSocket=a,hs.resetGlobalState=o;var e=qg(),r=Fg();function a(s,u){if(!u&&!(s instanceof WebSocket))throw new Error("")}function o(s){(0,r.resetSubscribers)(s),(0,e.resetWebSockets)(s)}return hs}var Xx;function QE(){if(Xx)return _i;Xx=1;var e=_i&&_i.__assign||function(){return e=Object.assign||function(y){for(var v,k=1,C=arguments.length;k<C;k++){v=arguments[k];for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(y[S]=v[S])}return y},e.apply(this,arguments)};Object.defineProperty(_i,"__esModule",{value:!0}),_i.attachListeners=void 0;var r=Wg(),a=R5(),o=Dr(),s=Yg(),u=function(y,v,k,C){y.onmessage=function(S){var E;v.current.onMessage&&v.current.onMessage(S),typeof C?.current=="number"&&(C.current=Date.now()),!(typeof v.current.filter=="function"&&v.current.filter(S)!==!0)&&(v.current.heartbeat&&typeof v.current.heartbeat!="boolean"&&((E=v.current.heartbeat)===null||E===void 0?void 0:E.returnMessage)===S.data||k(S))}},f=function(y,v,k,C,S){y.onopen=function(E){if(v.current.onOpen&&v.current.onOpen(E),C.current=0,k(o.ReadyState.OPEN),v.current.heartbeat&&y instanceof WebSocket){var T=typeof v.current.heartbeat=="boolean"?void 0:v.current.heartbeat;S.current=Date.now(),(0,a.heartbeat)(y,S,T)}}},p=function(y,v,k,C,S){if(o.isEventSourceSupported&&y instanceof EventSource)return function(){};(0,s.assertIsWebSocket)(y,v.current.skipAssert);var E;return y.onclose=function(T){var $;if(v.current.onClose&&v.current.onClose(T),k(o.ReadyState.CLOSED),v.current.shouldReconnect&&v.current.shouldReconnect(T)){var L=($=v.current.reconnectAttempts)!==null&&$!==void 0?$:o.DEFAULT_RECONNECT_LIMIT;if(S.current<L){var N=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},N??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(L),console.warn("Max reconnect attempts of ".concat(L," exceeded"))}},function(){return E&&window.clearTimeout(E)}},m=function(y,v,k,C,S){var E;return y.onerror=function(T){var $;if(v.current.onError&&v.current.onError(T),o.isEventSourceSupported&&y instanceof EventSource&&(v.current.onClose&&v.current.onClose(e(e({},T),{code:1006,reason:"An error occurred with the EventSource: ".concat(T),wasClean:!1})),k(o.ReadyState.CLOSED),y.close()),v.current.retryOnError)if(S.current<(($=v.current.reconnectAttempts)!==null&&$!==void 0?$:o.DEFAULT_RECONNECT_LIMIT)){var L=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},L??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(v.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(v.current.reconnectAttempts," exceeded"))},function(){return E&&window.clearTimeout(E)}},x=function(y,v,k,C,S,E,T){var $=v.setLastMessage,L=v.setReadyState,N,z,_;return k.current.fromSocketIO&&(N=(0,r.setUpSocketIOPing)(T)),u(y,k,$,E),f(y,k,L,S,E),z=p(y,k,L,C,S),_=m(y,k,L,C,S),function(){L(o.ReadyState.CLOSING),z(),_(),y.close(),N&&clearInterval(N)}};return _i.attachListeners=x,_i}var Ri={},Qx;function KE(){if(Qx)return Ri;Qx=1;var e=Ri&&Ri.__assign||function(){return e=Object.assign||function(v){for(var k,C=1,S=arguments.length;C<S;C++){k=arguments[C];for(var E in k)Object.prototype.hasOwnProperty.call(k,E)&&(v[E]=k[E])}return v},e.apply(this,arguments)};Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.attachSharedListeners=void 0;var r=qg(),a=Dr(),o=Fg(),s=Wg(),u=R5(),f=function(v,k,C){v.onmessage=function(S){(0,o.getSubscribers)(k).forEach(function(E){var T;E.optionsRef.current.onMessage&&E.optionsRef.current.onMessage(S),typeof((T=E?.lastMessageTime)===null||T===void 0?void 0:T.current)=="number"&&(E.lastMessageTime.current=Date.now()),!(typeof E.optionsRef.current.filter=="function"&&E.optionsRef.current.filter(S)!==!0)&&(C&&typeof C!="boolean"&&C?.returnMessage===S.data||E.setLastMessage(S))})}},p=function(v,k,C){v.onopen=function(S){var E=(0,o.getSubscribers)(k);E.forEach(function(T){T.reconnectCount.current=0,T.optionsRef.current.onOpen&&T.optionsRef.current.onOpen(S),T.setReadyState(a.ReadyState.OPEN),C&&v instanceof WebSocket&&(T.lastMessageTime.current=Date.now())}),C&&v instanceof WebSocket&&(0,u.heartbeat)(v,E.map(function(T){return T.lastMessageTime}),typeof C=="boolean"?void 0:C)}},m=function(v,k){v instanceof WebSocket&&(v.onclose=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onClose&&S.optionsRef.current.onClose(C),S.setReadyState(a.ReadyState.CLOSED)}),delete r.sharedWebSockets[k],(0,o.getSubscribers)(k).forEach(function(S){var E;if(S.optionsRef.current.shouldReconnect&&S.optionsRef.current.shouldReconnect(C)){var T=(E=S.optionsRef.current.reconnectAttempts)!==null&&E!==void 0?E:a.DEFAULT_RECONNECT_LIMIT;if(S.reconnectCount.current<T){var $=typeof S.optionsRef.current.reconnectInterval=="function"?S.optionsRef.current.reconnectInterval(S.reconnectCount.current):S.optionsRef.current.reconnectInterval;setTimeout(function(){S.reconnectCount.current++,S.reconnect.current()},$??a.DEFAULT_RECONNECT_INTERVAL_MS)}else S.optionsRef.current.onReconnectStop&&S.optionsRef.current.onReconnectStop(S.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(T," exceeded"))}})})},x=function(v,k){v.onerror=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onError&&S.optionsRef.current.onError(C),a.isEventSourceSupported&&v instanceof EventSource&&(S.optionsRef.current.onClose&&S.optionsRef.current.onClose(e(e({},C),{code:1006,reason:"An error occurred with the EventSource: ".concat(C),wasClean:!1})),S.setReadyState(a.ReadyState.CLOSED))}),a.isEventSourceSupported&&v instanceof EventSource&&v.close()}},y=function(v,k,C,S){var E;return C.current.fromSocketIO&&(E=(0,s.setUpSocketIOPing)(S)),f(v,k,C.current.heartbeat),m(v,k),p(v,k,C.current.heartbeat),x(v,k),function(){E&&clearInterval(E)}};return Ri.attachSharedListeners=y,Ri}var Kx;function JE(){if(Kx)return fs;Kx=1,Object.defineProperty(fs,"__esModule",{value:!0}),fs.createOrJoinSocket=void 0;var e=qg(),r=Dr(),a=QE(),o=KE(),s=Fg(),u=function(p,m,x,y,v){return function(){if((0,s.removeSubscriber)(p,m),!(0,s.hasSubscribers)(p)){try{var k=e.sharedWebSockets[p];k instanceof WebSocket&&(k.onclose=function(C){x.current.onClose&&x.current.onClose(C),y(r.ReadyState.CLOSED)}),k.close()}catch{}v&&v(),delete e.sharedWebSockets[p]}}},f=function(p,m,x,y,v,k,C,S,E){if(!r.isEventSourceSupported&&y.current.eventSourceOptions)throw r.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(y.current.share){var T=null;e.sharedWebSockets[m]===void 0?(e.sharedWebSockets[m]=y.current.eventSourceOptions?new EventSource(m,y.current.eventSourceOptions):new WebSocket(m,y.current.protocols),p.current=e.sharedWebSockets[m],x(r.ReadyState.CONNECTING),T=(0,o.attachSharedListeners)(e.sharedWebSockets[m],m,y,E)):(p.current=e.sharedWebSockets[m],x(e.sharedWebSockets[m].readyState));var $={setLastMessage:v,setReadyState:x,optionsRef:y,reconnectCount:C,lastMessageTime:S,reconnect:k};return(0,s.addSubscriber)(m,$),u(m,$,y,x,T)}else{if(p.current=y.current.eventSourceOptions?new EventSource(m,y.current.eventSourceOptions):new WebSocket(m,y.current.protocols),x(r.ReadyState.CONNECTING),!p.current)throw new Error("WebSocket failed to be created");return(0,a.attachListeners)(p.current,{setLastMessage:v,setReadyState:x},y,k.current,C,S,E)}};return fs.createOrJoinSocket=f,fs}var aa={},Jx;function ej(){return Jx||(Jx=1,(function(e){var r=aa&&aa.__awaiter||function(m,x,y,v){function k(C){return C instanceof y?C:new y(function(S){S(C)})}return new(y||(y=Promise))(function(C,S){function E(L){try{$(v.next(L))}catch(N){S(N)}}function T(L){try{$(v.throw(L))}catch(N){S(N)}}function $(L){L.done?C(L.value):k(L.value).then(E,T)}$((v=v.apply(m,x||[])).next())})},a=aa&&aa.__generator||function(m,x){var y={label:0,sent:function(){if(C[0]&1)throw C[1];return C[1]},trys:[],ops:[]},v,k,C,S=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return S.next=E(0),S.throw=E(1),S.return=E(2),typeof Symbol=="function"&&(S[Symbol.iterator]=function(){return this}),S;function E($){return function(L){return T([$,L])}}function T($){if(v)throw new TypeError("Generator is already executing.");for(;S&&(S=0,$[0]&&(y=0)),y;)try{if(v=1,k&&(C=$[0]&2?k.return:$[0]?k.throw||((C=k.return)&&C.call(k),0):k.next)&&!(C=C.call(k,$[1])).done)return C;switch(k=0,C&&($=[$[0]&2,C.value]),$[0]){case 0:case 1:C=$;break;case 4:return y.label++,{value:$[1],done:!1};case 5:y.label++,k=$[1],$=[0];continue;case 7:$=y.ops.pop(),y.trys.pop();continue;default:if(C=y.trys,!(C=C.length>0&&C[C.length-1])&&($[0]===6||$[0]===2)){y=0;continue}if($[0]===3&&(!C||$[1]>C[0]&&$[1]<C[3])){y.label=$[1];break}if($[0]===6&&y.label<C[1]){y.label=C[1],C=$;break}if(C&&y.label<C[2]){y.label=C[2],y.ops.push($);break}C[2]&&y.ops.pop(),y.trys.pop();continue}$=x.call(m,y)}catch(L){$=[6,L],k=0}finally{v=C=0}if($[0]&5)throw $[1];return{value:$[0]?$[1]:void 0,done:!0}}},o=aa&&aa.__spreadArray||function(m,x,y){if(y||arguments.length===2)for(var v=0,k=x.length,C;v<k;v++)(C||!(v in x))&&(C||(C=Array.prototype.slice.call(x,0,v)),C[v]=x[v]);return m.concat(C||Array.prototype.slice.call(x))};Object.defineProperty(e,"__esModule",{value:!0}),e.getUrl=void 0;var s=Wg(),u=Dr(),f=function(m){return new Promise(function(x){return window.setTimeout(x,m)})},p=function(m,x){for(var y=[],v=2;v<arguments.length;v++)y[v-2]=arguments[v];return r(void 0,o([m,x],y,!0),void 0,function(k,C,S){var E,T,$,L,N,z,_,H;return S===void 0&&(S=0),a(this,function(j){switch(j.label){case 0:if(typeof k!="function")return[3,10];j.label=1;case 1:return j.trys.push([1,3,,9]),[4,k()];case 2:return E=j.sent(),[3,9];case 3:return j.sent(),C.current.retryOnError?(T=(z=C.current.reconnectAttempts)!==null&&z!==void 0?z:u.DEFAULT_RECONNECT_LIMIT,S<T?($=typeof C.current.reconnectInterval=="function"?C.current.reconnectInterval(S):C.current.reconnectInterval,[4,f($??u.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return j.sent(),[2,(0,e.getUrl)(k,C,S+1)];case 5:return(H=(_=C.current).onReconnectStop)===null||H===void 0||H.call(_,S),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:E=k,j.label=11;case 11:return L=C.current.fromSocketIO?(0,s.parseSocketIOUrl)(E):E,N=C.current.queryParams?(0,s.appendQueryParams)(L,C.current.queryParams):L,[2,N]}})})};e.getUrl=p})(aa)),aa}var S0={},ey;function tj(){return ey||(ey=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var r=function(a,o){return new Proxy(a,{get:function(s,u){var f=s[u];return u==="reconnect"?o:typeof f=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):f},set:function(s,u,f){return/^on/.test(u)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(s[u]=f,!0)}})};e.websocketWrapper=r,e.default=e.websocketWrapper})(S0)),S0}var ty;function Vg(){if(ty)return An;ty=1;var e=An&&An.__assign||function(){return e=Object.assign||function(k){for(var C,S=1,E=arguments.length;S<E;S++){C=arguments[S];for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(k[T]=C[T])}return k},e.apply(this,arguments)},r=An&&An.__awaiter||function(k,C,S,E){function T($){return $ instanceof S?$:new S(function(L){L($)})}return new(S||(S=Promise))(function($,L){function N(H){try{_(E.next(H))}catch(j){L(j)}}function z(H){try{_(E.throw(H))}catch(j){L(j)}}function _(H){H.done?$(H.value):T(H.value).then(N,z)}_((E=E.apply(k,C||[])).next())})},a=An&&An.__generator||function(k,C){var S={label:0,sent:function(){if($[0]&1)throw $[1];return $[1]},trys:[],ops:[]},E,T,$,L=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return L.next=N(0),L.throw=N(1),L.return=N(2),typeof Symbol=="function"&&(L[Symbol.iterator]=function(){return this}),L;function N(_){return function(H){return z([_,H])}}function z(_){if(E)throw new TypeError("Generator is already executing.");for(;L&&(L=0,_[0]&&(S=0)),S;)try{if(E=1,T&&($=_[0]&2?T.return:_[0]?T.throw||(($=T.return)&&$.call(T),0):T.next)&&!($=$.call(T,_[1])).done)return $;switch(T=0,$&&(_=[_[0]&2,$.value]),_[0]){case 0:case 1:$=_;break;case 4:return S.label++,{value:_[1],done:!1};case 5:S.label++,T=_[1],_=[0];continue;case 7:_=S.ops.pop(),S.trys.pop();continue;default:if($=S.trys,!($=$.length>0&&$[$.length-1])&&(_[0]===6||_[0]===2)){S=0;continue}if(_[0]===3&&(!$||_[1]>$[0]&&_[1]<$[3])){S.label=_[1];break}if(_[0]===6&&S.label<$[1]){S.label=$[1],$=_;break}if($&&S.label<$[2]){S.label=$[2],S.ops.push(_);break}$[2]&&S.ops.pop(),S.trys.pop();continue}_=C.call(k,S)}catch(H){_=[6,H],T=0}finally{E=$=0}if(_[0]&5)throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}},o=An&&An.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(An,"__esModule",{value:!0}),An.useWebSocket=void 0;var s=to(),u=yg(),f=Dr(),p=JE(),m=ej(),x=o(tj()),y=Yg(),v=function(k,C,S){C===void 0&&(C=f.DEFAULT_OPTIONS),S===void 0&&(S=!0);var E=(0,s.useState)(null),T=E[0],$=E[1],L=(0,s.useState)({}),N=L[0],z=L[1],_=(0,s.useMemo)(function(){if(!C.disableJson&&T)try{return JSON.parse(T.data)}catch{return f.UNPARSABLE_JSON_OBJECT}return null},[T,C.disableJson]),H=(0,s.useRef)(null),j=(0,s.useRef)(null),A=(0,s.useRef)(function(){}),P=(0,s.useRef)(0),V=(0,s.useRef)(Date.now()),U=(0,s.useRef)([]),Z=(0,s.useRef)(null),re=(0,s.useRef)(C);re.current=C;var X=H.current&&N[H.current]!==void 0?N[H.current]:k!==null&&S===!0?f.ReadyState.CONNECTING:f.ReadyState.UNINSTANTIATED,te=C.queryParams?JSON.stringify(C.queryParams):null,B=(0,s.useCallback)(function(ie,de){var O;if(de===void 0&&(de=!0),f.isEventSourceSupported&&j.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((O=j.current)===null||O===void 0?void 0:O.readyState)===f.ReadyState.OPEN?((0,y.assertIsWebSocket)(j.current,re.current.skipAssert),j.current.send(ie)):de&&U.current.push(ie)},[]),q=(0,s.useCallback)(function(ie,de){de===void 0&&(de=!0),B(JSON.stringify(ie),de)},[B]),ae=(0,s.useCallback)(function(){return re.current.share!==!0||f.isEventSourceSupported&&j.current instanceof EventSource?j.current:(Z.current===null&&j.current&&((0,y.assertIsWebSocket)(j.current,re.current.skipAssert),Z.current=(0,x.default)(j.current,A)),Z.current)},[]);return(0,s.useEffect)(function(){if(k!==null&&S===!0){var ie,de=!1,O=!0,W=function(){return r(void 0,void 0,void 0,function(){var Q,le,he;return a(this,function(pe){switch(pe.label){case 0:return Q=H,[4,(0,m.getUrl)(k,re)];case 1:return Q.current=pe.sent(),H.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),H.current="ABORTED",(0,u.flushSync)(function(){return z(function(fe){return e(e({},fe),{ABORTED:f.ReadyState.CLOSED})})}),[2]):(le=function(fe){de||(0,u.flushSync)(function(){return $(fe)})},he=function(fe){de||(0,u.flushSync)(function(){return z(function(ve){var me;return e(e({},ve),H.current&&(me={},me[H.current]=fe,me))})})},O&&(ie=(0,p.createOrJoinSocket)(j,H.current,he,re,le,A,P,V,B)),[2])}})})};return A.current=function(){de||(Z.current&&(Z.current=null),ie?.(),W())},W(),function(){de=!0,O=!1,Z.current&&(Z.current=null),ie?.(),$(null)}}else(k===null||S===!1)&&(P.current=0,z(function(Q){var le;return e(e({},Q),H.current&&(le={},le[H.current]=f.ReadyState.CLOSED,le))}))},[k,S,te,B]),(0,s.useEffect)(function(){X===f.ReadyState.OPEN&&U.current.splice(0).forEach(function(ie){B(ie)})},[X]),{sendMessage:B,sendJsonMessage:q,lastMessage:T,lastJsonMessage:_,readyState:X,getWebSocket:ae}};return An.useWebSocket=v,An}var Ni={},ny;function nj(){if(ny)return Ni;ny=1;var e=Ni&&Ni.__assign||function(){return e=Object.assign||function(p){for(var m,x=1,y=arguments.length;x<y;x++){m=arguments[x];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(p[v]=m[v])}return p},e.apply(this,arguments)};Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.useSocketIO=void 0;var r=to(),a=Vg(),o=Dr(),s={type:"empty",payload:null},u=function(p){if(!p||!p.data)return s;var m=p.data.match(/\[.*]/);if(!m)return s;var x=JSON.parse(m);return!Array.isArray(x)||!x[1]?s:{type:x[0],payload:x[1]}},f=function(p,m,x){m===void 0&&(m=o.DEFAULT_OPTIONS),x===void 0&&(x=!0);var y=(0,r.useMemo)(function(){return e(e({},m),{fromSocketIO:!0})},[]),v=(0,a.useWebSocket)(p,y,x),k=v.sendMessage,C=v.sendJsonMessage,S=v.lastMessage,E=v.readyState,T=v.getWebSocket,$=(0,r.useMemo)(function(){return u(S)},[S]);return{sendMessage:k,sendJsonMessage:C,lastMessage:$,lastJsonMessage:$,readyState:E,getWebSocket:T}};return Ni.useSocketIO=f,Ni}var ia={},ry;function rj(){if(ry)return ia;ry=1;var e=ia&&ia.__assign||function(){return e=Object.assign||function(f){for(var p,m=1,x=arguments.length;m<x;m++){p=arguments[m];for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(f[y]=p[y])}return f},e.apply(this,arguments)},r=ia&&ia.__rest||function(f,p){var m={};for(var x in f)Object.prototype.hasOwnProperty.call(f,x)&&p.indexOf(x)<0&&(m[x]=f[x]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,x=Object.getOwnPropertySymbols(f);y<x.length;y++)p.indexOf(x[y])<0&&Object.prototype.propertyIsEnumerable.call(f,x[y])&&(m[x[y]]=f[x[y]]);return m};Object.defineProperty(ia,"__esModule",{value:!0}),ia.useEventSource=void 0;var a=to(),o=Vg(),s=Dr(),u=function(f,p,m){p===void 0&&(p=s.DEFAULT_EVENT_SOURCE_OPTIONS);var x=p.withCredentials,y=p.events,v=r(p,["withCredentials","events"]);m===void 0&&(m=!0);var k=e(e({},v),{eventSourceOptions:{withCredentials:x}}),C=(0,a.useRef)(s.EMPTY_EVENT_HANDLERS);y&&(C.current=y);var S=(0,o.useWebSocket)(f,k,m),E=S.lastMessage,T=S.readyState,$=S.getWebSocket;return(0,a.useEffect)(function(){E?.type&&Object.entries(C.current).forEach(function(L){var N=L[0],z=L[1];N===E.type&&z(E)})},[E]),{lastEvent:E,readyState:T,getEventSource:$}};return ia.useEventSource=u,ia}var ay;function aj(){return ay||(ay=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var r=Vg();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.useWebSocket}});var a=nj();Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return a.useSocketIO}});var o=Dr();Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return o.ReadyState}});var s=rj();Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return s.useEventSource}});var u=Yg();Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return u.resetGlobalState}})})(x0)),x0}var ij=aj();const oj=Sd(ij),lj={ui:'Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;',data:'Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;'},Rd={icons:{weights:{light:1,regular:1.5,heavy:3,strong:5}},form:{button:{xsmall:{height:"20px",padding:"0 10px",iconSize:12},small:{height:"30px",padding:"0 20px",iconSize:14},normal:{height:"40px",padding:"0 20px",iconSize:16},large:{height:"60px",padding:"0 20px",iconSize:20}},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}},ln={easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{faster:"0.085s",fast:"0.175s",normal:"0.35s",slow:"0.7s",slower:"1.4s",slowest:"2.8s"}},el={small:0,medium:768,large:1024,xlarge:1280,xxlarge:1536},vn={small:`(min-width: ${el.small}px)`,medium:`(min-width: ${el.medium}px)`,large:`(min-width: ${el.large}px)`,xlarge:`(min-width: ${el.xlarge}px)`,xxlarge:`(min-width: ${el.xxlarge}px)`},sj={pageHeader:{introduction:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},areaTitle:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},mainTitle:{textAlign:"left",fontSize:"26px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},form:{label:{meta:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},default:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},disabled:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},failure:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--warning-8)"},"meta(Selected)":{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},tip:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-7)"},button:{secondary:{normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},primary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},danger:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}}},input:{label:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},placeholder:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},compact:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"}},value:{normal:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--grey-12)"},compact:{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-12)"}}},labelInformation:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},select:{option:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"},selectedValue:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--black-11)"},"option(Hover)":{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--primary-11)"}},feedback:{message:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"20px",textDecoration:"none",color:"var(--white-1)"}}},content:{"section-H2":{textAlign:"left",fontSize:"20px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},sectionH3:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},actionParagraph:{textAlign:"left",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},hyperlink:{hover:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-8)"},base:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-9)"}}},feedbackBar:{message:{textAlign:"left",fontSize:"14px",fontWeight:400,lineHeight:"15px",letterSpacing:"-0.2px",textDecoration:"none",color:"var(--white-1)"}},searchBar:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},meta:{tagList:{emptyStates:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"}},item:{normal:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"}}}},table:{columnData:{normalImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},highImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},center:{textAlign:"center",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},left:{textAlign:"left",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"}},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},lowImportance:{right:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},header:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}},subHeader:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}}},filters:{datepicker:{metaHeader:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},calendar:{active:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},otherMonth:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-a8)"},default:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},header:{textAlign:"center",fontSize:"12px",fontWeight:700,textDecoration:"none",color:"var(--grey-a12)"}},monthLink:{default:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-9)"},hover:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--white-1)"}},focusedMonth:{textAlign:"center",fontSize:"20px",fontWeight:400,lineHeight:"20px",letterSpacing:"0.5px",textDecoration:"none",color:"var(--grey-11)"},focusedYear:{textAlign:"center",fontSize:"10px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.3333333px",textDecoration:"none",color:"var(--grey-11)"}},value:{textAlign:"left",fontSize:"14px",fontWeight:500,letterSpacing:"0.2px",textDecoration:"none",color:"var(--grey-11)"},subOption:{label:{textAlign:"left",fontSize:"12px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-a12)"}},presetAction:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},filterButton:{default:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},hover:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"}},searchInput:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"}}},tables:{groupName:{textAlign:"left",fontSize:"12px",fontWeight:400,letterSpacing:"0.3px",textDecoration:"none",color:"var(--grey-a11)"}}},Fn={pureBase:"var(--white-1)",pureTop:"var(--black-1)",divider:"var(--grey-6)",icons:{inverse:"var(--grey-1)",mono:"var(--grey-12)",dimmed:"var(--grey-11)",subtle:"var(--grey-10)",primary:"var(--primary-9)",danger:"var(--warning-9)",white:"var(--white-1)"},menu:{active:"var(--primary-9)",hover:"var(--primary-8)",default:"var(--grey-2)",indicator:"var(--grey-a1)",passive:"var(--primary-a7)"},feedback:{error:"var(--warning-8)",info:"var(--primary-7)",neutral:"var(--grey-9)",success:"var(--success-8)",warning:"var(--caution-10)"},status:{caution:"var(--caution-10)",danger:"var(--warning-8)",folder:"var(--primary-7)",highlight:"var(--primary-7)",good:"var(--success-7)",neutral:"var(--grey-5)"},transparent:"var(--black-a1)",input:{border:{default:"var(--grey-7)"}}},cj={generic:{transparent:{}},form:{input:{default:{normal:{backgroundColor:"var(--grey-1)",borderColor:Fn.input.border.default,border:Fn.input.border.default+" 1px solid"},focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},disabled:{normal:{backgroundColor:"var(--primary-2)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"}},subdivision:{backgroundColor:"var(--grey-7)"},required:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",backgroundColor:"var(--grey-1)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px var(--success-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--success-7)",border:"var(--success-7) 2px solid"},normal:{borderColor:"var(--success-7)",border:"var(--success-7) 1px solid",backgroundColor:"var(--grey-1)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px var(--warning-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--warning-8)",border:"var(--warning-8) 2px solid"},normal:{borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid",backgroundColor:"var(--grey-1)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},seperatedValues:{background:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"},hoverHighlight:{backgroundColor:"var(--primary-7)"}}},button:{primary:{default:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},hover:{backgroundColor:"var(--primary-10)"},active:{backgroundColor:"var(--primary-9)"},divider:{backgroundColor:"var(--primary-a8)"},disabled:{backgroundColor:"var(--primary-a10)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},actionArea:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"}},secondary:{default:{backgroundColor:"var(--grey-9)"},hover:{backgroundColor:"var(--grey-10)"},active:{backgroundColor:"var(--grey-9)"},disabled:{backgroundColor:"var(--grey-a10)"},divider:{backgroundColor:"var(--grey-a8)"},actionArea:{backgroundColor:"var(--grey-9)",backgroundImage:"linear-gradient(135.00deg, var(--grey-9) 0%, var(--grey-8) 100%)"}},danger:{default:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"},hover:{backgroundColor:"var(--warning-10)"},active:{backgroundColor:"var(--warning-9)"},disabled:{backgroundColor:"var(--warning-a10)"},divider:{backgroundColor:"var(--warning-8)"},actionArea:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"}}},switch:{off:{default:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--primary-2) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"}},disabled:{outer:{backgroundColor:"var(--grey-1)",backgroundImage:"linear-gradient(180.00deg, var(--grey-1)0%, var(--grey-1) 100%)",borderColor:"var(--grey-a7)",border:"var(--grey-a7) 1px solid"},inner:{backgroundColor:"var(--grey-7)"}},loading:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--grey-3) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"}}},on:{default:{outer:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(317.51deg, var(--primary-7) 0%, var(--primary-7) 100%)",borderColor:"var(--primary-8)",border:"var(--primary-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},disabled:{outer:{backgroundColor:"var(--primary-5)",backgroundImage:"linear-gradient(180.00deg, var(--primary-5) 0%, var(--primary-5) 100%)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--primary-a7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-a7) 0%, var(--primary-a7) 100%)",borderColor:"var(--primary-a8)",border:"var(--primary-a8) 1px solid"}}},failure:{default:{outer:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-9)",border:"var(--warning-9) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0.4%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},danger:{default:{outer:{backgroundColor:"var(--warning-11)",backgroundImage:"linear-gradient(317.51deg, var(--warning-11) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0%, var(--warning-7) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"}},disabled:{outer:{backgroundColor:"var(--warning-7)",backgroundImage:"linear-gradient(317.51deg, var(--warning-7) 0%, var(--caution-6) 100%)",borderColor:"var(--warning-6)",border:"var(--warning-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},locked:{default:{outer:{backgroundColor:"var(--grey-1) ",backgroundImage:"linear-gradient(180.00deg, var(--grey-1) 0%, var(--grey-1) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--grey-8)"}}}},checkbox:{unchecked:{disabled:{backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 2px solid"},default:{borderColor:"var(--grey-9)",border:"var(--grey-9) 2px solid"},hover:{borderColor:"var(--primary-8)",border:"var(--primary-8) 2px solid"}},checked:{disabled:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--grey-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"},hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"}},indeterminate:{hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"}}}},indicators:{spinner:{danger:{base:{borderColor:"var(--warning-8)",border:"var(--warning-8) 3px solid"},top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"}},secondary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-8)",border:"var(--grey-8) 3px solid"}},primary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--primary-6)",border:"var(--primary-6) 3px solid"}},simple:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-a8)",border:"var(--grey-a8) 3px solid"}}}},filters:{dropdownContainer:{background:{boxShadow:"0px 5px 25px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 1px solid"},topBorder:{backgroundColor:"var(--primary-7)"}},filterButton:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid",textColor:"var(--grey-11)"},active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"},hover:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"}},searchInput:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"},focused:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"}}},tables:{loadingOverlay:{backgroundColor:"var(--grey-2)",backgroundImage:"linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"},rows:{divider:{backgroundColor:Fn.divider}},header:{groupLine:{backgroundColor:Fn.divider},divider:{backgroundColor:Fn.divider},sortable:{hover:{backgroundColor:"var(--grey-4)"},default:{backgroundColor:"var(--grey-2)"}}}},general:{divider:{backgroundColor:Fn.divider}},feedbackBar:{neutral:{backgroundColor:Fn.feedback.neutral},error:{backgroundColor:Fn.feedback.error},info:{backgroundColor:Fn.feedback.info},success:{backgroundColor:Fn.feedback.success},warning:{backgroundColor:Fn.feedback.warning}},filterButton:{active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}}},uj={lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(204.8,53.4%,46.3%,100%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(120deg, 81%, 70%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},point:{fill:"hsla(120deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(0deg, 86%, 70%, 100%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},point:{fill:"hsla(0, 45%, 90%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}},rc={fontFamily:lj,dimensions:Rd,typography:sj,colors:Fn,styles:cj,animation:ln,custom:uj,deviceSize:el,deviceMediaQuery:vn},dj=R`
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

      @media ${vn.xlarge}{
        --content-layout-padding-top: 32px;
        --content-layout-padding-right: 96px;
        --content-layout-padding-bottom: 64px;
        --content-layout-padding-left: 96px;
        --utility-header-padding-top: 48px;
      }

      @media ${vn.xxlarge}{
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
`,fj=R`
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
`,hj=R`
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

`,gj=e7`

  ${dj};
  ${fj};
  ${hj};

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

`,pj=R`

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

`,N5=R`

  line-height: 0;

  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
      transition: stroke var(--speed-normal) var(--easing-primary-out);
    }
  }
`,Me=b.div`
  ${N5};
`,mj=b.g`
  ${N5};
`,Se=({icon:e,size:r=24,weight:a="regular",color:o="grey-12",forSvgUsage:s=!1})=>{const u=Rd.icons.weights[a],f=s5[e];return f!=null?s?c.jsx(mj,{children:f({size:r,weight:u,color:`var(--${o}, var(--grey-12))`})}):c.jsx(Me,{children:f({size:r,weight:u,color:`var(--${o}, var(--grey-12))`})}):null},zu=b.div`
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
`,vj=b.div`
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
`,iy=({title:e="Placeholder"})=>c.jsxs(vj,{children:[e,c.jsx(zu,{className:"t l",style:{transform:"rotate(-90deg)"}}),c.jsx(zu,{className:"t r",style:{transform:"rotate(0deg)"}}),c.jsx(zu,{className:"b r",style:{transform:"rotate(90deg)"}}),c.jsx(zu,{className:"b l",style:{transform:"rotate(180deg)"}})]});R`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`;R`
  display: flex;
  flex-direction: column;
`;const st=R`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`,ac=R`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`,ml=R`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xj=b.button`
  ${st};
  ${({selected:e=!1})=>e&&R`
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
`,H5=b.div`
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: var(--font-ui);
  background-color: ${({type:e})=>`var(--${e})`};

  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  color: var(--white-1);

  ${Me} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,yj={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},bj=b.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,fa=({type:e="info",message:r,hideCloseButton:a=!1})=>{const[o,s]=h.useState(!1);return h.useEffect(()=>{s(!1)},[r]),r&&!o?c.jsxs(H5,{type:e,children:[c.jsx(Se,{icon:yj[e],color:"inverse"}),c.jsx(bj,{children:r}),!a&&c.jsx(xj,{onClick:()=>s(!0),children:c.jsx(Se,{icon:"CloseCompact",color:"inverse"})})]}):null},wj=pr`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
`,Sj=pr`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -100%);
  }
`,Cj=b.div`
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
  transform: translateX(-50%);
  z-index: 999;

  font-family: var(--font-ui);
  background-color: ${({type:e})=>`var(--${e})`};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);

  animation: ${wj} var(--speed-slow) var(--easing-primary-in-out);

  ${({isClosing:e})=>e&&R`
    animation: ${Sj} var(--speed-normal) var(--easing-primary-in-out);
    `};

  ${Me} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,kj={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},Ej=b.div`
  ${st};
  ${({selected:e=!1})=>e&&R`
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
`,jj=b.button`
  ${st};
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
`,Tj=b.div`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`,Mj=({id:e,type:r="info",message:a,icon:o="",isPinned:s=!1,actionTextButton:u,closeNow:f=!1,closeCallback:p,onTextButtonClick:m})=>{const[x,y]=h.useState(!1),[v,k]=h.useState(!1),[C,S]=h.useState(!1);h.useEffect(()=>{y(!1),k(!1),S(!1)},[e]);const E=h.useCallback(()=>{k(!0)},[]),T=h.useCallback(async()=>{S(!0),E()},[E]),$=h.useCallback(()=>{v&&(y(!0),m&&C&&m(),p&&p())},[v,p,m,C]);return h.useEffect(()=>{let L=!0;return s||setTimeout(()=>{L&&E()},7e3),()=>{L=!1}},[s,a,E,e]),h.useEffect(()=>{f&&E()},[f,E]),a&&!x?Ks.createPortal(c.jsxs(Cj,{type:r,isClosing:v,onAnimationEnd:$,children:[c.jsx(Se,{icon:o||kj[r],color:"inverse"}),c.jsx(Tj,{children:a}),u?c.jsxs(jj,{onClick:()=>T(),children:[u," "]}):c.jsx(Ej,{onClick:()=>E(),children:c.jsx(Se,{icon:"CloseCompact",color:"inverse"})})]}),document.body):null},Gt=8,Qt=16,Yn=b.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${Gt}px solid transparent;
  border-right: ${Gt}px solid transparent;
  border-bottom: ${Gt}px solid ${({type:e})=>`var(--tooltip-${e}-arrow)`};
`,$j=b.div`
  position: absolute;
  display: flex;
  ${({maxWidth:e})=>e&&R` max-width: ${e}`};
  ${({directionStyle:e})=>e&&R`${e}`};
`,Aj=b.div`
  background-color: ${({type:e})=>`var(--tooltip-${e})`};
  border-radius: 3px;
  border: 1px solid ${({type:e})=>`var(--tooltip-${e}-border)`};
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

  ${Me} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Lj=(e,r)=>{const{left:a,top:o,width:s,height:u}=r,f=o+window.scrollY,p=a+window.scrollX;switch(e){case"bottom-right":return`
              flex-direction: column;
              top: ${f+u}px;
              left: ${p-Gt-Qt+s/2}px;
              ${Yn} {
                margin-left: ${Qt}px;
              }
            `;case"bottom-left":return`
              flex-direction: column;
              align-items: end;
              top: ${f+u}px;
              left: ${p+Gt+Qt+s/2}px;
              transform: translateX(-100%);
              ${Yn} {
                margin-right: ${Qt}px;
              }
            `;case"right-bottom":return`
              flex-direction: row;
              top: ${f-Gt/2-Qt+u/2}px;
              left: ${p+s}px;
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Gt/2}px;
                margin-top: ${Qt}px;
              }
            `;case"right":return`
              flex-direction: row;
              align-items: center;
              top: ${f+u/2}px;
              left: ${p+s}px;
              transform: translateY(-50%);
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Gt/2}px;
              }
            `;case"right-top":return`
              flex-direction: row;
              align-items: end;
              top: ${f+Gt/2+Qt+u/2}px;
              left: ${p+s}px;
              transform: translateY(-100%);
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Gt/2}px;
                margin-bottom: ${Qt}px;
              }
            `;case"left-bottom":return`
              flex-direction: row-reverse;
              top: ${f-Gt/2-Qt+u/2}px;
              left: ${p}px;
              transform: translateX(-100%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Gt/2}px;
                margin-top: ${Qt}px;
              }
            `;case"left":return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${f+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -50%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Gt/2}px;
              }
            `;case"left-top":return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${f+Gt/2+Qt+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -100%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Gt/2}px;
                margin-bottom: ${Qt}px;
              }
            `;case"top-right":return`
              flex-direction: column-reverse;
              top: ${f}px;
              left: ${p-Gt-Qt+s/2}px;
              transform: translateY(-100%);
              ${Yn} {
                transform: rotate(180deg);
                margin-left: ${Qt}px;
              }
            `;case"top":return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${f}px;
              left: ${p+s/2}px;
              transform: translate(-50%, -100%);
              ${Yn} {
                transform: rotate(180deg);
              }
            `;case"top-left":return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${f}px;
              left: ${p+Gt+Qt+s/2}px;
              transform: translate(-100%, -100%);
              ${Yn} {
                transform: rotate(180deg);
                margin-right: ${Qt}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${f+u}px;
            left: ${p+s/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},Oj=(e,r,a)=>{const o=e.left+(r||0)+30>window.innerWidth,s=e.bottom+(a||0)>window.innerHeight,u=e.left-(r||0)<0,f=e.top-(a||0)<0;return f&&o&&s?"left":f&&u&&s?"right":f&&u?"bottom-right":f&&o?"bottom-left":s&&u?"top-right":s&&o?"top-left":u?"right":o?"left":s?"top":"bottom"},zj=({icon:e,message:r,type:a,tooltipFor:o,tooltipPosition:s,maxWidth:u})=>{const[f,p]=h.useState(null),[m,x]=h.useState(!1),[y,v]=h.useState("top"),k=h.useRef(null),C=h.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T),x(!0),v(Oj(T,o.current.offsetWidth,o.current.offsetHeight))}},[o]),S=h.useCallback(()=>{x(!1)},[]),E=h.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T)}},[o]);return h.useEffect(()=>{let T=null;return o&&o.current&&(T=o.current,o.current.addEventListener("mouseover",C),o.current.addEventListener("mouseout",S),E()),()=>{T&&(T.removeEventListener("mouseover",C),T.removeEventListener("mouseout",S))}},[S,C,o,E]),!m||!f?null:Ks.createPortal(c.jsxs($j,{ref:k,maxWidth:u,directionStyle:Lj(s||y,f),children:[c.jsx(Yn,{type:a||"neutral"}),c.jsxs(Aj,{type:a||"neutral",children:[e&&c.jsx(Se,{icon:e,size:16,color:"white-a12"}),r]})]}),document.body)},Dj=e=>pr`
    0% {
      box-shadow:
        0 0px 0px var(--button-hover-inner-shadow-color) inset
        ${e?", 0 4px 8px var(--button-hover-drop-shadow-color)":""};
    }

    75% {
      box-shadow:
        0 0 24px var(--button-active-inner-shadow-color) inset
        ${e?", 0 4px 6px var(--button-active-drop-shadow-color)":""};
    }

    100% {
      box-shadow:
        0 0 16px var(--button-active-inner-shadow-color) inset
        ${e?", 0 4px 6px var(--button-active-drop-shadow-color)":""};
    }
  `,_j=b.button`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({$noPadding:e,$isOutline:r})=>e?R`
      padding: 0px;
    `:R`
      padding: ${r?"var(--button-h-padding-outline)":"var(--button-h-padding)"};
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

  ${({$shadow:e})=>e?R`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  `:R`
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

    ${({$shadow:e})=>e?R`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    `:R`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow:e})=>R`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${()=>Dj(e)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading:e})=>e&&R`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`,dt=({design:e="primary",size:r="normal",shadow:a=!1,noPadding:o=!1,loading:s=!1,children:u,formAction:f,...p})=>(e==="danger"&&console.warn("Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead."),c.jsx(_j,{type:"button",$isOutline:e==="outline",className:`button-design-${e} button-size-${r}`,design:e,size:r,$noPadding:o,$shadow:a,$loading:s,...p,children:c.jsx(c.Fragment,{children:u})})),B5=e=>2*3.1416*e,Rj=e=>{const r=B5(e);return pr`
    0% {
      stroke-dashoffset: -${r*.85};
    }
    50% {
      stroke-dashoffset: -${r*.5};
    }
    100% {
      stroke-dashoffset: -${r*.85};
    }
  `},Nj=pr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Hj=b.circle`
  stroke: ${({styling:e,customColor:r})=>r||`var(--spinner-${e}-base, var(--grey-a8))`};
  fill: none;
`,Bj=b.circle`
  stroke: ${({styling:e,customColor:r})=>r||`var(--spinner-${e}-top, var(--white-1))`};
  fill: none;
  stroke-dasharray: ${({r:e})=>B5(e)};
  stroke-dashoffset: ${({r:e})=>2*3.1416*e/2};
  animation:
    ${({r:e})=>Rj(e)} 4s linear infinite,
    ${Nj} 1s linear infinite;
  stroke-linecap: round;
`,oy=e=>e==="primary"||e==="secondary"||e==="warning"?e:e==="danger"?(console.warn("Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead."),"danger"):"simple",Ij={xsmall:12,small:16,medium:24,large:36,xlarge:48},mr=({size:e="medium",styling:r="primary",custom:a={}})=>{const{baseColor:o,topColor:s}=a,u=a?.size?a.size:Ij[e],f=u/5.333,p=u/2-f/2;return c.jsxs("svg",{viewBox:`-${u/2} -${u/2} ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg",children:[c.jsx(Hj,{cx:"0",cy:"0",r:p,strokeWidth:f,styling:oy(r),customColor:o}),c.jsx(Bj,{cx:"0",cy:"0",r:p,strokeWidth:f,styling:oy(r),customColor:s})]})},Uj=b.div`
  display: inline;
`,Gj=b.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);
  transition: padding var(--speed-slow) var(--easing-primary-in-out);
  font-weight: ${({weight:e})=>e==="light"?"500":"600"};
`,Zi=b.div`
  opacity: 1;
`,J0=b.div`
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
`,Pj=b.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({position:e})=>R`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  ${Zi}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${Zi}, ${J0}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({$loading:e})=>e&&R`
    border-color: var(--button-loading-area-divider-color);

    ${J0}{
      opacity: 1;
    }

    ${Zi}{
      opacity: 0;
    };
  `};

`,qj=b.div`
  display: flex;
  height: inherit;

  &:hover {
    ${({disabled:e})=>!e&&R`
      ${Zi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({disabled:e})=>!e&&R`
      ${Zi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({disabled:e})=>e&&R`
    ${Zi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`,Zg=({design:e="primary",size:r="normal",loading:a=!1,shadow:o=!1,onClick:s,disabled:u,position:f,icon:p,weight:m="regular",children:x,...y})=>c.jsx(Uj,{children:c.jsx(dt,{noPadding:!0,disabled:u||a,design:e,size:r,shadow:o,onClick:s,loading:a,...y,children:c.jsxs(qj,{disabled:u,loading:a,children:[c.jsx(Gj,{size:r,position:f,weight:m,children:c.jsx(c.Fragment,{children:x})}),c.jsxs(Pj,{$loading:a,position:f,children:[c.jsx(Zi,{children:c.jsx(Se,{icon:p,weight:m})}),c.jsx(J0,{children:c.jsx(mr,{size:r==="xsmall"||r==="small"?"xsmall":"small",styling:e})})]})]})})}),Wj=b.div`
  display: inline;
`,Fj=b.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,eg=b.div`
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

  ${({position:e})=>R`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  svg {
    display:block;
  }
`,Yj=b.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?R`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${eg}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:R`
    ${eg}{
      flex: 0 0 0px;
    }
  `}
`,Xg=({design:e="primary",size:r="normal",shadow:a=!1,onClick:o,disabled:s,position:u,loading:f=!1,children:p,...m})=>c.jsx(Wj,{children:c.jsx(dt,{noPadding:!0,disabled:s||f,design:e,size:r,shadow:a,onClick:o,loading:f,...m,children:c.jsxs(Yj,{$loading:f,design:e,size:r,children:[c.jsx(Fj,{children:c.jsx(c.Fragment,{children:p})}),c.jsx(eg,{design:e,position:u,children:c.jsx(mr,{size:r==="xsmall"||r==="small"?"xsmall":"small",styling:e})})]})})}),Vj=b.button`
  ${st};
  [stroke]{
    stroke: ${({color:e})=>e};
  }
  &:hover {
    ${Me} {
      [stroke]{
        stroke: ${({hoverColor:e})=>e};
      }
    }
  }
`,I5=({icon:e,size:r=20,weight:a="regular",color:o="dimmed",hoverColor:s="mono",children:u,formAction:f,...p})=>c.jsx(Vj,{type:"button",color:o,hoverColor:s,...p,children:c.jsx(Se,{icon:e,size:r,weight:a})}),ly=b(I5)``;b.div`
  display: flex;
  ${ly} {
    margin-left: 15px;
  }
  ${ly}:first-child {
    margin-left: 0px;
  }

  ${({alignment:e})=>e==="left"&&R`
    justify-content: flex-start;
  `};

  ${({alignment:e})=>e==="center"&&R`
    justify-content: center;
  `};

  ${({alignment:e})=>e==="right"&&R`
    justify-content: flex-end;
  `};
`;const Zj=b.div`
  position: absolute;
  right: 0;
  top: 0;
`,Xj=b.button.attrs({type:"button"})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,U5=b.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,Qj=b.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,Kj=b.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${Me} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,fd=b.input`
  ${ac};

  ${({fieldState:e})=>R`
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
`,Jj=b.div`

  flex: 1;
  position: relative;

  ${({hasAction:e})=>e&&R`
    ${fd}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,eT=b.div`
  ${({fieldState:e,showFeedback:r})=>R`

    display: flex;
    position: relative;
    flex-direction: row;

    ${fd}{

      &:disabled {
        cursor: not-allowed;
      }

      ${["default","disabled"].indexOf(e)===-1&&r&&R`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${U5} {
      ${["default","disabled"].indexOf(e)!==-1&&R`
        display: none;
      `};
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);
    }

    &:focus-within ${fd} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
    }
  `}

`,Qg=({type:e="text",placeholder:r="",defaultValue:a,fieldState:o="default",showFeedback:s=!1,feedbackMessage:u,actionCallback:f,actionIcon:p,postfix:m,children:x,formAction:y,...v})=>{const k=f!==void 0,C=S=>{switch(S){case"default":break;case"disabled":break;case"required":return c.jsx(Se,{icon:"Required",size:16});case"valid":return c.jsx(Se,{icon:"Success",size:16});case"invalid":return c.jsx(Se,{icon:"Invalid",size:16});case"processing":return c.jsx(mr,{size:"medium",styling:"primary"})}};return c.jsxs(eT,{fieldState:o||"default",showFeedback:s,children:[c.jsxs(Jj,{hasAction:k,children:[c.jsx(fd,{fieldState:o||"default",disabled:o==="disabled"||o==="processing",type:e,placeholder:r,defaultValue:a,...v}),k?c.jsx(Zj,{children:c.jsx(Xj,{onClick:f,children:c.jsx(Se,{icon:p||"NoIcon",color:"primary"})})}):null]}),o&&s?c.jsxs(U5,{children:[c.jsx(Kj,{children:C(o)}),u?c.jsx(Qj,{children:u}):null]}):null]})},G5=b.span`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  
  ${({required:e})=>e&&R`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
    }
  `}
`,Nd=b.label`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({direction:e})=>e&&R`
    flex-direction: ${e};
    ${["row","row-reverse"].includes(e)&&R`
      display: inline-flex;
      
      ${G5}{
        align-self: center;
      }
    `}
  `}
`,Pt=({htmlFor:e,labelText:r,direction:a="column",rightAlign:o=!1,required:s=!1,children:u,...f})=>(o&&(console.warn("Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction='row-reverse'` instead."),a="row-reverse"),c.jsx(Nd,{htmlFor:e,direction:a,...f,children:c.jsxs(c.Fragment,{children:[c.jsx(G5,{required:s,children:r}),u]})})),tT=b.input`
  ${ac};

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
`,nT=b.div`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({fieldState:e})=>R`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({hasAction:e})=>e&&R`
    ${tT}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;b.div`
  flex: 0 1;
  font-size: 12px;
  font-family: var(--font-ui);
  color: var(--input-color-unit);
  margin-top: 1px;
  white-space: nowrap;
`;b.div`
  position: relative;

  ${({fieldState:e})=>e&&R`
    &:focus-within ${nT} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${e}-focused-shadow-color, var(--input-${e}-shadow-color));
    }
  `};
`;const rT=e=>{switch(e){case 0:return"off";case 1:return"on";case 2:return"neutral";case 3:return"locked";default:return"off"}},aT=b.input`
  display: none;
`,P5=b.div`
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
`,tg=b.div`
  --offset: calc(((var(--switch-height) - var(--switch-inner-size)) / 2) - var(--switch-border-width));
  --position-off: var(--offset);
  --position-on: calc(var(--switch-width) - var(--switch-inner-size) - (var(--switch-border-width)*2) - var(--offset));
  --position-neutral: calc((var(--switch-width) / 2) - (var(--switch-inner-size) / 2) - var(--offset));
  --position-locked: var(--offset);

  position: absolute;
  top: var(--offset);
  left: ${({position:e})=>e&&`var(--position-${e})`};

  box-sizing: border-box;
  height: var(--switch-inner-size);
  width: var(--switch-inner-size);
  border-radius: calc(var(--switch-inner-size) / 2);

  background-color: var(--switch-default-off-background);

  box-shadow:
    0px 2px 4px 0px var(--black-a8),
    0px 1px 2px 0px var(--white-a5) inset,
    0px -1px 1px 0px var(--black-a5) inset;
`,iT=b.span``,ng=b.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`,oT=b.div``,lT=b(Nd)`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${P5}{
    ${({$activeTheming:e,$themeState:r})=>R`
      border-color: var(--switch-${r}-${e}-border);
      background-color: var(--switch-${r}-${e}-background);
    `};

    ${({$activeTheming:e})=>e==="locked"&&R`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({$activeTheming:e})=>e==="failure"&&R`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming:e,$loading:r})=>r&&R`
      background-color: var(--switch-default-${e}-background);
      border-color: var(--switch-default-${e}-border);
    `};

  }

  ${tg}{
    ${({$activeTheming:e,$themeState:r})=>R`
      background-color: var(--switch-${r}-${e}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({$activeTheming:e})=>e==="locked"&&R`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${ng} svg {
        transform: translateX(-1px);
      }
    `}

    ${({$activeTheming:e})=>e==="failure"&&R`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming:e,$loading:r})=>r&&R`
      border-color: var(--switch-default-${e}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${tg}{
      left: ${({$useIntent:e,$position:r})=>e&&r===0&&"calc(var(--position-off) + var(--switch-intent-offset))"||e&&r===1&&"calc(var(--position-on) - var(--switch-intent-offset))"};
    }
  }
`,sT=e=>e==="default"||e==="loading"||e==="locked"||e==="disabled"||e==="failure",fl=({state:e="default",leftTheme:r="off",rightTheme:a="on",labelText:o,onChangeCallback:s,checked:u,defaultChecked:f=!1})=>{const p=u!==void 0,m=p?u:f,x=m?1:0,y=m?a:r,[v,k]=h.useState(f),C=h.useRef(null),S=h.useRef(null),[E,T]=h.useState(x),[$,L]=h.useState(y),[N,z]=h.useState("default"),[_,H]=h.useState(!1),[j,A]=h.useState(0),P=h.useCallback(()=>{p?(T(u?1:0),L(u?a:r)):C.current&&(C.current.checked=v,T(v?1:0),L(v?a:r))},[u,p,v,r,a]);h.useEffect(()=>{P()},[P]);const V=h.useCallback(()=>{p?(T(u?1:0),L(u?a:r)):(T(v?1:0),L(v?a:r))},[u,p,r,a,v]),U=h.useCallback(()=>{if(!(e==="locked"||e==="disabled")){if(p)s?.(!u);else{const re=!v;k(re),s?.(re)}V()}},[p,u,v,s,e,V]),Z=h.useCallback(()=>{E===1?L(a):E===0&&L(r)},[E,a,r]);return h.useEffect(()=>{Z()},[r,a,Z]),h.useEffect(()=>{sT(e)&&z(cT(e))},[e,z]),h.useEffect(()=>{e==="locked"?(T(3),L("locked")):e==="failure"?(T(2),L("failure")):V()},[e,T,V]),h.useEffect(()=>{S.current&&A(parseInt(getComputedStyle(S.current).getPropertyValue("--switch-inner-size")))},[S]),c.jsxs(lT,{onChange:U,onMouseLeave:()=>H(!1),$activeTheming:$,$loading:e==="loading",$useIntent:!_&&(e==="default"||e==="failure"),$themeState:N,$position:E,$checked:C.current?.checked,children:[c.jsx(P5,{children:c.jsxs(tg,{position:rT(E),ref:S,children:[e==="failure"?c.jsx(ng,{children:c.jsx(Se,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})}):null,e==="locked"?c.jsx(ng,{children:c.jsx(Se,{icon:"Locked",color:"switch-special-locked-icon",size:12,weight:"regular"})}):null,e==="loading"&&j>0?c.jsx(oT,{children:c.jsx(mr,{styling:"simple",custom:{size:j}})}):null]})}),o?c.jsx(iT,{children:o}):null,c.jsx(aT,{ref:C,type:"checkbox",disabled:e!=="default"&&e!=="failure",defaultChecked:p?u:f})]})},cT=e=>{switch(e){case"locked":return"default";case"failure":return"default";default:return e}};function q5(e){return c.jsxs("svg",{width:35,height:35,...e,children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%",children:[c.jsx("stop",{offset:"0%",stopColor:"#7DB8DB"}),c.jsx("stop",{offset:"100%",stopColor:"#5CA0D1"})]})}),c.jsxs("g",{fill:"none",fillRule:"evenodd",children:[c.jsx("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),c.jsx("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})]})]})}function uT(e){return c.jsx("svg",{width:71,height:30,...e,children:c.jsx("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"})})}function W5(e){return c.jsx("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z",fill:"none",fillRule:"evenodd",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})})}function dT(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"55",height:"60",fill:"none",viewBox:"5 80 300 174",children:[c.jsx("path",{fill:"#F0F0F0",d:"M0 0H320V240H0z"}),c.jsx("path",{fill:"#656565",d:"M113.8 112.087V130h-1.212c-.192 0-.355-.033-.488-.1a1.246 1.246 0 01-.375-.338l-10.362-13.5a16.889 16.889 0 01.05 1.175V130h-2.126v-17.913h1.251c.108 0 .2.009.275.025.075.009.141.03.2.063a.589.589 0 01.175.125c.058.05.12.117.187.2l10.363 13.487-.05-.625a13.596 13.596 0 01-.013-.587v-12.688h2.125zm21.129 8.963c0 1.342-.212 2.575-.637 3.7a8.463 8.463 0 01-1.8 2.887 8.102 8.102 0 01-2.8 1.888c-1.084.442-2.284.663-3.6.663-1.317 0-2.517-.221-3.6-.663a8.119 8.119 0 01-2.788-1.888 8.463 8.463 0 01-1.8-2.887c-.425-1.125-.637-2.358-.637-3.7s.212-2.571.637-3.688c.425-1.125 1.025-2.091 1.8-2.9a8.052 8.052 0 012.788-1.9c1.083-.45 2.283-.675 3.6-.675 1.316 0 2.516.225 3.6.675a8.035 8.035 0 012.8 1.9c.775.809 1.375 1.775 1.8 2.9.425 1.117.637 2.346.637 3.688zm-2.487 0c0-1.1-.15-2.088-.45-2.963-.3-.875-.725-1.612-1.275-2.212a5.504 5.504 0 00-2-1.4c-.784-.325-1.659-.488-2.625-.488-.959 0-1.829.163-2.613.488a5.618 5.618 0 00-2.012 1.4c-.55.6-.975 1.337-1.275 2.212-.3.875-.45 1.863-.45 2.963s.15 2.087.45 2.962c.3.867.725 1.605 1.275 2.213a5.687 5.687 0 002.012 1.387c.784.317 1.654.475 2.613.475.966 0 1.841-.158 2.625-.475a5.57 5.57 0 002-1.387c.55-.608.975-1.346 1.275-2.213.3-.875.45-1.862.45-2.962zM147.22 130h-2.425v-17.913h2.425V130zm23.22-17.913V130h-2.125v-13.163c0-.175.004-.362.012-.562l.05-.613-6.15 11.2c-.192.375-.483.563-.875.563h-.35c-.392 0-.683-.188-.875-.563l-6.275-11.25c.05.442.075.85.075 1.225V130h-2.125v-17.913h1.788c.216 0 .383.021.5.063.116.042.229.158.337.35l6.188 11.025c.1.2.195.408.287.625.1.217.192.437.275.662.083-.225.171-.445.263-.662.091-.225.191-.438.3-.638l6.075-11.012c.1-.192.208-.308.325-.35a1.66 1.66 0 01.512-.063h1.788zm14.092 11.263l-2.812-7.288a14.972 14.972 0 01-.263-.75c-.091-.291-.179-.6-.262-.925a13.51 13.51 0 01-.538 1.688l-2.812 7.275h6.687zm5.05 6.65h-1.875c-.216 0-.391-.054-.525-.163a1 1 0 01-.3-.412l-1.675-4.325h-8.037l-1.675 4.325a.878.878 0 01-.288.4.794.794 0 01-.525.175h-1.875l7.163-17.913h2.45L189.582 130zm16.443-8.613v6.875c-.9.65-1.862 1.138-2.887 1.463-1.017.317-2.134.475-3.35.475-1.442 0-2.742-.221-3.9-.663-1.159-.45-2.15-1.075-2.975-1.875a8.282 8.282 0 01-1.888-2.9c-.442-1.125-.662-2.362-.662-3.712 0-1.367.212-2.613.637-3.738.433-1.125 1.046-2.087 1.838-2.887.791-.808 1.754-1.433 2.887-1.875 1.133-.442 2.4-.663 3.8-.663.708 0 1.367.055 1.975.163.608.1 1.171.25 1.688.45.516.192.995.429 1.437.712a8.5 8.5 0 011.238.938l-.688 1.1a.739.739 0 01-.425.325c-.167.042-.354 0-.562-.125-.2-.117-.43-.258-.688-.425a5.555 5.555 0 00-.95-.475 7.037 7.037 0 00-1.312-.4c-.5-.108-1.096-.163-1.788-.163-1.008 0-1.921.167-2.737.5a5.683 5.683 0 00-2.088 1.413c-.575.608-1.017 1.35-1.325 2.225-.308.867-.462 1.842-.462 2.925 0 1.125.158 2.133.475 3.025.325.883.783 1.637 1.375 2.262a5.955 5.955 0 002.175 1.413c.85.325 1.804.487 2.862.487.833 0 1.571-.091 2.213-.275a9.829 9.829 0 001.9-.787v-3.938h-2.788a.549.549 0 01-.387-.137.459.459 0 01-.138-.338v-1.375h5.5zm14.762 6.638l-.013 1.975h-11.037v-17.913h11.037v1.975h-8.612v5.95h6.975v1.9h-6.975v6.113h8.625z"})]})}const fT=b.input`
  display: none;
`,cr=b.div`
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
`,hT=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,rg=b.div`
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
      fill: ${({color:e})=>`var(--${e})`};
    }
  }
`,gT=b.label`
  display: inline-block;
  user-select: none;
  ${cr}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }
  
  ${({visualState:e,disabled:r})=>e==="off"&&R`
    /* Unchecked */
    ${cr}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!r&&R`
      &:hover ${cr} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`};

    /* Unchecked - Disabled */
    ${r&&R`
      ${cr}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({visualState:e,disabled:r})=>e==="on"&&R`
    /* Checked */  
    ${cr}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!r&&R`
      &:hover ${cr}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`};

    /* Checked - Disabled */    
    ${r&&R`
      ${cr}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${rg}{
        opacity: 0.65;
      }
    `}
  `}

  ${({visualState:e,disabled:r})=>e==="indeterminate"&&R`
    ${cr}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!r&&R`
      &:hover ${cr}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${r&&R`
      ${cr}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${rg}{
        opacity: 0.65;
      }
    `}

  `}

`,Kg=({indeterminate:e=!1,disabled:r,checked:a=!1,onChangeCallback:o})=>{const[s,u]=h.useState(a),[f,p]=h.useState(a?"on":"off"),m=y=>{const v=y.target.checked;u(v),o&&o(v)};h.useEffect(()=>{p(a?"on":"off")},[a,s,p]),h.useEffect(()=>{u(a)},[a,u]);const x=Rd.icons.weights.regular;return c.jsxs(gT,{onChange:m,indeterminate:e,disabled:r,visualState:f,children:[c.jsx(cr,{children:c.jsx(hT,{children:f==="on"?c.jsx(rg,{color:"input-toggle-icon-color",children:c.jsx(W5,{color:"input-toggle-icon-color",stroke:"inverse",size:12,weight:x})}):null})}),c.jsx(fT,{type:"checkbox",checked:s,readOnly:!0,disabled:r})," "]})},Du=b.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;b.div`
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

  ${({isChecked:e,disabled:r})=>R`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!r&&R`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!r&&R`
      border-color: var(--input-toggle-checked-border-color);
      ${Du} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!r&&R`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${Du} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&r&&R`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${Du} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&r&&R`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${Du} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `}
  `};
`;b.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`;b.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`;b.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`;const pT=b.textarea`

  ${({fieldState:e})=>R`
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
`,sy=b.div`
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
`;b.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  font-weight: 500;
  color: var(--white-1);
`;b.div`
  ${({fieldState:e,showFeedback:r})=>R`
    display: flex;
    position: relative;
    flex-direction: column;

    ${pT}{
      ${["default","disabled"].indexOf(e)===-1&&r&&R`
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

    ${sy} {
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);

      ${["default","disabled"].indexOf(e)!==-1&&R`
        display:none;
      `}
    }

    &:focus-within ${sy} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`;const mT=b.div`
  position: relative;
  display: flex;
  width: 100%;
`,vT=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({isCompact:e})=>e?"14px":"16px"};
  pointer-events: none;
`;b.div`
  position: absolute;
  left: ${({isCompact:e})=>e?"10px":"12px"};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;const xT=b.select`
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

  ${({fieldState:e})=>R`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};


  ${({isCompact:e,withIcon:r})=>e?R`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${r?"30px":"8px"};

    ${vT}{
      right: 14px;
    }
  `:R`
    height: var(--input-height);
    padding: 0 16px 1px ${r?"36px":"12px"};
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
`;b.div`

  ${({activePlaceholder:e})=>e&&R`
    ${xT} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`;const F5=e=>{const r=e.split("/").filter(String);return r.length>0?"/"+r[0]:"/"},yT=()=>String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,""),cy=e=>{const r=Number(e);return r!==r},bT=(e,r)=>e===null&&r===null||e===void 0&&r===null?!0:hd(e)&&hd(r)?Ns(e?.start,r?.start)&&Ns(e?.end,r?.end):e instanceof Date&&r instanceof Date?Ns(e,r):!1,hd=e=>e==null||e.start===null||e.start===void 0||e.end===null||e.end===void 0?!1:e.start instanceof Date&&e.end instanceof Date,Ys=16;b.div`
  font-family: ${({theme:e})=>e.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({disabled:e})=>e&&R`
    opacity: .5;
  `};
`;b.input`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`;b.div`
  position: absolute;
  left: ${Ys/2}px;
  top: 10px;
  width: calc(100% - ${Ys}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, var(--grey-10), var(--primary-10) 98%);
`;b.span`
  position: absolute;
  top: -3px;
  left: ${({leftValue:e})=>`calc(${e}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: var(--primary-11);
`;b.span`
  position: absolute;
  top: -24px;
  left: ${({leftValue:e})=>`calc(${e}% + 7px)`};

  font-size: 10px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: normal;
  text-align: center;
  color: var(--grey-a11);

  ${({alignment:e})=>e==="center"&&R`transform: translateX(-50%);;`}
  ${({alignment:e})=>e==="right"&&R`transform: translateX(5%);`}
  ${({alignment:e})=>e==="left"&&R`transform: translateX(-95%);`}
`;b.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${Ys}px);
  height: 2px;
`;const wT=b.span`
  width: ${Ys}px;
  height: ${Ys}px;
  border-radius: 8px;
  background-color: ${({theme:e,bgColor:r})=>e.colors.feedback[r]};
  position: absolute;
  top: -7.5px;
  left: ${({leftValue:e})=>`${e}%`};
`;b(wT)`
  opacity: .5;
`;const ST=b.div``,CT=b.input`
  display: none;
`,kT=({text:e,buttonDesign:r,buttonSize:a,inputCallback:o,children:s,formAction:u,...f})=>{const p=h.useRef(null),m=h.useCallback(async y=>{if(!(y.target.files&&y.target.files.length>0))return;const v=y.target.files;o&&o(v),y.target.value=""},[o]),x=h.useCallback(()=>{p.current&&p.current.click()},[]);return c.jsxs(ST,{children:[c.jsx(CT,{...f,ref:p,type:"file",onChange:m}),c.jsx(dt,{style:{textAlign:"center"},onClick:x,design:r,size:a,children:e})]})};b.div``;b.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`;b(Pt)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`;const Y5=R`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`;b.div`
  ${Y5};
`;b.div`
  display: flex;
`;b.div`
  display: flex;
  align-items: center;
  ${Y5};
  span {
    font-style: normal;
  }
`;b.div``;b.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({allMarkCentered:e})=>e?"padding: 0;":"padding: 0 6px;"};
`;b(Pt)`
  font-family: ${({theme:e})=>e.fontFamily.data};
`;const Jg=({name:e,label:r,fieldState:a,feedbackMessage:o,required:s,children:u,formAction:f,...p})=>{const[m,x]=h.useState(!1),[y,v]=h.useState("PasswordHide"),k=()=>{const C=!m;x(C),v(C?"PasswordShow":"PasswordHide")};return c.jsx(Pt,{htmlFor:e,labelText:r,required:s,children:c.jsx(Qg,{type:m?"text":"password",actionCallback:k,actionIcon:y,name:e,fieldState:a,feedbackMessage:o,required:s,...p})})},_t=({name:e,label:r,fieldState:a="default",feedbackMessage:o,required:s,type:u,...f})=>c.jsx(Pt,{htmlFor:e,labelText:r,required:s,children:c.jsx(Qg,{type:"text",fieldState:a,feedbackMessage:o,required:s,name:e,...f})}),ET=b.div`
  ${({height:e})=>e?`height: ${e}`:null};
  position: relative;
`,jT=b.div`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({inDropZone:e})=>e?"dashed var(--grey-8) 2px":null};
`,TT=({height:e,text:r,dropCallback:a,...o})=>{const[s,u]=h.useState(!1),f=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!0)},[]),p=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!1)},[]),m=h.useCallback(v=>{v.preventDefault(),v.stopPropagation()},[]),x=h.useCallback(v=>{v.preventDefault(),v.stopPropagation(),v.dataTransfer?.files&&a&&a(v.dataTransfer.files),u(!1)},[a]),y=h.useCallback(v=>{v.preventDefault()},[]);return h.useEffect(()=>(window.addEventListener("dragover",y),window.addEventListener("drop",y),()=>{window.removeEventListener("dragover",y),window.removeEventListener("drop",y)}),[y]),c.jsx(ET,{height:e,...o,children:c.jsx(jT,{inDropZone:s,onDragEnter:f,onDragLeave:p,onDrop:x,onDragOver:m,children:r})})},Hd=R`
  position: absolute;
  display: block;
  opacity: 0.1;
`;b.div`
  ${Hd};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`;b.div`
  ${Hd};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;b.div`
  ${Hd}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`;b.div`
  ${Hd};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;const li=R`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--black-a12);
  background-color: var(--white-1);
`;b.div`
  ${li};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({isResizable:e})=>e&&R`
    cursor: n-resize;
  `};
`;b.div`
  ${li};
  top: -5px;
  left: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: nw-resize;
  `};
`;b.div`
  ${li};
  top: -5px;
  right: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: ne-resize;
  `};
`;b.div`
  ${li};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: e-resize;
  `};
`;b.div`
  ${li};
  bottom: -5px;
  right: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: se-resize;
  `};
`;b.div`
  ${li};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: s-resize;
  `};
`;b.div`
  ${li};
  bottom: -5px;
  left: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: sw-resize;
  `};
`;b.div`
  ${li};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({isResizable:e})=>e&&R`
    cursor: w-resize;
  `};
`;b.div`
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
`;b.div`
    position: relative;
  z-index: 99;
`;b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`;b.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--mono);

  ${Me} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`;b.div`
  button + button {
    margin-left: 10px;
  }
`;b.div`
  position: relative;
  overflow: hidden;
  height: ${({canvasHeight:e})=>e?`${e}px`:"462px"};
  width: ${({canvasWidth:e})=>e?`${e}px`:"485px"};
  border-radius: 5px;
  background-color: var(--grey-3);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, var(--white-a10) 35px, var(--white-a10) 70px);
`;b.img`
  display: none;
`;b.div`
  position: absolute;
  border: dashed 1px var(--black-a12);
  box-shadow: 0 0 0 9999em var(--black-a11);
  ${({cropLeft:e,cropTop:r,cropWidth:a,cropHeight:o})=>R`
    top: ${r}px;
    left: ${e}px;
    width: ${a}px;
    height: ${o}px;
  `};
  cursor: move;
`;const MT="150px",V5="142px";b.div`
  position: relative;
  width: ${V5};
  ${({theme:e})=>R`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`;b.div`
  position: relative;
  margin-bottom: 17px;
  height: ${MT};
  width: ${V5};
`;const Z5=R`
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
`;b.img`
  ${Z5}
  object-fit: cover;
`;const $T=b.div`
  color: var(--grey-10);
  font-size: 14px;
`;b.div`
  ${Z5}
  padding-top: 15px;
  ${$T} {
    margin-top: 18px;
  }
`;b(kT)`
  width: 100%;
`;b.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`;b.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${Me} {
    display: flex;
    align-items: center;
  }
`;b(Se)``;b.div`
  margin: 0 30px;
  ${Me}{
    transform: rotate(45deg);
    [stroke]{
      stroke: var(--primary-7);
    }
  }
`;b.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
`;b(TT)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;b.div`
  z-index: 99;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;b.div`
  padding: ${({hasFiles:e})=>e?"26px 0 20px 0":"65px 0 42px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  position: relative;
`;b.div`
  color: var(--grey-11);
  font-size: 20px;
`;b.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: var(--grey-10);
  margin-top: 10px;
  max-width: 386px;
`;const AT=b.form`
  ${({spacing:e})=>e&&R`
      & >  ${Nd} {
        margin-bottom: ${e};
      }
  `}
`,ep=({children:e,spacing:r="45px;",action:a,...o})=>c.jsx(AT,{spacing:r,action:typeof a=="string"?a:void 0,...o,children:c.jsx(c.Fragment,{children:e})}),LT=b.button`
  ${st}
  ${({noBorderTop:e})=>e?"border-top: none":R`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${Me} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({noBorderTop:e})=>e?"border-top: none":R`
          border-top: 1px solid var(--border-active-color)`};

    ${Me} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`,OT=b.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,zT=b.div`
  ${({textMaxWidth:e})=>e&&R`max-width: ${e};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,DT=b.div`
  ${({isAscendingIcon:e})=>e&&R`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${Me} {
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
`,uy=({text:e,icon:r="",design:a="primary",noBorderTop:o=!1,textMaxWidth:s="",size:u="normal",onClickCallback:f,closeCallback:p,hasOnSelectLoading:m,children:x,formAction:y,...v})=>{const k=h.useRef(null),[C,S]=h.useState(!1),[E,T]=h.useState(0),$=h.useCallback(()=>{f&&f(),m?(S(!0),setTimeout(()=>{S(!1),p()},2e3)):setTimeout(()=>{p()},200)},[p,m,f]);return h.useEffect(()=>{k.current&&T(parseInt(getComputedStyle(k.current).getPropertyValue("--button-icon-size")))},[k]),c.jsxs(LT,{ref:k,noBorderTop:o,size:u,onClick:$,...v,children:[c.jsx(DT,{isAscendingIcon:r==="FilterAscending",children:C?c.jsx(mr,{custom:{size:E},styling:a}):c.jsx(Se,{icon:r})}),c.jsx(zT,{textMaxWidth:s,children:c.jsx(OT,{children:e})})]})},_T=(e,r,a,o=!0)=>{const s=document.title.split("|").slice(-1)[0].trim();h.useLayoutEffect(()=>()=>{document.title=s},[s]),h.useEffect(()=>{o&&(document.title=RT([...e?[e]:[],...r?[r]:[],...s?[s]:[]],a))},[e,r,a,o,s])},RT=(e,r="|")=>{let a="";return r=" "+r+" ",e.forEach((o,s)=>{a+=o,e.length-1!==s&&(a+=r)}),a},tp=()=>({copyToClipboard:h.useCallback(r=>{const a=document.createElement("textarea");a.value=r,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);const o=document.getSelection();if(o){const s=o.rangeCount>0?o.getRangeAt(0):!1;a.select();const u=document.execCommand("copy");return document.body.removeChild(a),s&&(o.removeAllRanges(),o.addRange(s)),u}return!1},[])});function C0(e,r){const[a,o]=h.useState(()=>{if(typeof window>"u")return r;try{const u=window.localStorage.getItem(e);return u?JSON.parse(u):r}catch(u){return console.log(u),r}}),s=h.useCallback(u=>{try{o(f=>{const p=u instanceof Function?u(f):u;return typeof window<"u"&&window.localStorage.setItem(e,JSON.stringify(p)),p})}catch(f){console.log(f)}},[e]);return[a,s]}function np(e,r){const a=h.useRef(r);a.current=r,h.useEffect(()=>{const o=s=>{e?.current?.contains(s.target)||a.current(s)};return document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}},[r,e])}const NT=b.div`
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
`,HT=b.button`
  ${st};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${Me} {
    display: flex;
    margin-left: 12px;
  }
  ${({selected:e=!1})=>e&&R`
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
`,BT=b.div`
  position: relative;
  margin: ${({isCloseEnable:e})=>e?"27px 0 0":"0"};
  z-index: 9999;
  width: ${({width:e})=>e||"580px"};
  padding: ${({padding:e})=>e?"30px 40px":"0"};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`,IT=({isOpen:e=!1,isCloseEnable:r=!0,closeText:a="",width:o="",padding:s=!0,customComponent:u,onDismiss:f,dismissCallback:p})=>{const m=h.useRef(null);np(m,()=>{r&&(p&&p(),y())});const y=h.useCallback(()=>{p&&p(),f()},[f,p]);return e?Ks.createPortal(c.jsx(NT,{children:c.jsx(BT,{ref:m,width:o,padding:s,isCloseEnable:r,children:c.jsxs(c.Fragment,{children:[r?c.jsxs(HT,{onClick:()=>y(),children:[a||"CLOSE",c.jsx(Se,{icon:"CloseCompact",size:15,color:"grey-12",weight:"regular"})]}):null,u]})})}),document.body):null},UT={isOpen:!1,onDismiss:()=>null},X5={modalProps:UT,setModalProps:e=>{console.log(e)}},Q5=Ye.createContext(X5),GT=({children:e})=>{const[r,a]=h.useState(X5.modalProps),o=s=>{a(s)};return c.jsxs(Q5.Provider,{value:{modalProps:r,setModalProps:o},children:[c.jsx(IT,{...r}),e]})},K5=()=>{const{modalProps:e,setModalProps:r}=h.useContext(Q5),a=h.useCallback(u=>{if(u===void 0)return;const f={...e,isOpen:u};r(f)},[e,r]),o=h.useCallback(()=>{a(!1)},[a]);return{createModal:h.useCallback(u=>{u||r({isOpen:!0,onDismiss:o});const f={isOpen:!0,closeText:u?.closeText,isCloseEnable:u?.isCloseEnable,width:u?.width,padding:u?.padding,dismissCallback:u?.dismissCallback,customComponent:u?.customComponent,onDismiss:o};r(f)},[o,r]),isModalOpen:e.isOpen,setModalOpen:a}},PT={sendNotification:()=>console.log("This is the context initialization should not appear"),clearNotifications:()=>console.log("This is the context initialization should not appear")},qT=Ye.createContext(PT),_u=[],WT=({children:e})=>{const[r,a]=h.useState(null),o=h.useCallback(()=>{const p=_u.shift();if(!p)return;const x={...p,closeCallback:()=>{p.closeCallback&&p.closeCallback(),a(null),o()}};a(x)},[]),s=h.useCallback(async p=>{const m={message:p.message,type:p.type,id:yT()};p.icon&&(m.icon=p.icon),p.actionTextButton&&(m.actionTextButton=p.actionTextButton),p.onTextButtonClick&&(m.onTextButtonClick=p.onTextButtonClick),p.closeCallback&&(m.closeCallback=p.closeCallback),p.isPinned&&(m.isPinned=p.isPinned),_u.push(m),_u.length===1&&r===null&&o()},[r,o]),u=h.useCallback(()=>{_u.length=0,a(p=>p!==null?{...p,closeNow:!0}:p)},[]),f=h.useMemo(()=>({sendNotification:s,clearNotifications:u}),[u,s]);return c.jsxs(qT.Provider,{value:f,children:[r?c.jsx(Mj,{...r}):null,e]})};function gs(e){const[r,a]=h.useState(!1);return h.useLayoutEffect(()=>{const o=window.matchMedia(e);a(o.matches);const s=u=>a(u.matches);return o.addEventListener("change",s),()=>o.removeEventListener("change",s)},[]),r}function rp(){const e={isSmall:gs(vn.small),isMedium:gs(vn.medium),isLarge:gs(vn.large),isXLarge:gs(vn.xlarge),isXXLarge:gs(vn.xxlarge),activeScreen:"small"};return e.isSmall&&(e.activeScreen="small"),e.isMedium&&(e.activeScreen="medium"),e.isLarge&&(e.activeScreen="large"),e.isXLarge&&(e.activeScreen="xlarge"),e.isXXLarge&&(e.activeScreen="xxlarge"),e}function FT(e){return c.jsxs("svg",{width:610,height:446,viewBox:"0 0 610 446",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[c.jsx("rect",{width:609.91,height:446,fill:"#DDDDDD"}),c.jsx("path",{d:"M242.675 210.273V235H239.246L226.677 216.865H226.447V235H222.717V210.273H226.17L238.751 228.432H238.98V210.273H242.675ZM269.596 222.636C269.596 225.277 269.113 227.546 268.148 229.446C267.182 231.338 265.858 232.795 264.175 233.817C262.501 234.831 260.597 235.338 258.464 235.338C256.323 235.338 254.412 234.831 252.729 233.817C251.055 232.795 249.735 231.334 248.769 229.434C247.803 227.534 247.32 225.268 247.32 222.636C247.32 219.996 247.803 217.73 248.769 215.839C249.735 213.939 251.055 212.482 252.729 211.468C254.412 210.446 256.323 209.935 258.464 209.935C260.597 209.935 262.501 210.446 264.175 211.468C265.858 212.482 267.182 213.939 268.148 215.839C269.113 217.73 269.596 219.996 269.596 222.636ZM265.902 222.636C265.902 220.624 265.576 218.93 264.924 217.553C264.28 216.169 263.394 215.122 262.268 214.414C261.149 213.698 259.881 213.339 258.464 213.339C257.04 213.339 255.768 213.698 254.649 214.414C253.53 215.122 252.645 216.169 251.993 217.553C251.349 218.93 251.027 220.624 251.027 222.636C251.027 224.649 251.349 226.347 251.993 227.732C252.645 229.108 253.53 230.154 254.649 230.871C255.768 231.579 257.04 231.933 258.464 231.933C259.881 231.933 261.149 231.579 262.268 230.871C263.394 230.154 264.28 229.108 264.924 227.732C265.576 226.347 265.902 224.649 265.902 222.636ZM286.977 210.273V235H283.246V210.273H286.977ZM292.41 210.273H296.938L304.81 229.494H305.1L312.972 210.273H317.499V235H313.95V217.107H313.72L306.428 234.964H303.482L296.189 217.094H295.96V235H292.41V210.273ZM325.012 235H321.052L329.951 210.273H334.261L343.159 235H339.199L332.208 214.764H332.015L325.012 235ZM325.676 225.317H338.523V228.456H325.676V225.317ZM362.303 218.085C362.069 217.352 361.755 216.696 361.361 216.116C360.974 215.529 360.512 215.03 359.972 214.619C359.433 214.201 358.817 213.883 358.125 213.665C357.441 213.448 356.688 213.339 355.867 213.339C354.475 213.339 353.219 213.698 352.1 214.414C350.981 215.13 350.096 216.181 349.444 217.565C348.8 218.942 348.478 220.628 348.478 222.624C348.478 224.629 348.804 226.323 349.456 227.707C350.108 229.092 351.001 230.142 352.136 230.859C353.271 231.575 354.563 231.933 356.012 231.933C357.356 231.933 358.527 231.66 359.526 231.112C360.532 230.565 361.308 229.792 361.856 228.794C362.411 227.788 362.689 226.605 362.689 225.244L363.655 225.425H356.58V222.347H366.299V225.16C366.299 227.237 365.856 229.04 364.971 230.569C364.094 232.09 362.878 233.265 361.325 234.094C359.779 234.924 358.008 235.338 356.012 235.338C353.774 235.338 351.81 234.823 350.12 233.793C348.438 232.762 347.126 231.301 346.184 229.41C345.242 227.51 344.771 225.256 344.771 222.648C344.771 220.676 345.045 218.906 345.592 217.336C346.14 215.766 346.908 214.434 347.898 213.339C348.897 212.237 350.068 211.396 351.412 210.816C352.764 210.228 354.241 209.935 355.843 209.935C357.179 209.935 358.423 210.132 359.574 210.526C360.733 210.921 361.763 211.48 362.665 212.205C363.574 212.929 364.327 213.79 364.923 214.788C365.518 215.778 365.921 216.877 366.13 218.085H362.303ZM371.035 235V210.273H386.538V213.484H374.766V221.018H385.729V224.218H374.766V231.788H386.683V235H371.035Z",fill:"#656565"})]})}const J5=b.div`
  position: relative;
  line-height: 0;
  ${({minHeight:e})=>e&&`min-height: ${e}`};
  ${({minWidth:e})=>e&&`min-width: ${e}`};
`,eb=`
  max-width:  100%;
  max-height: 100%;
  border-radius: 3px;
  background-color: var(--grey-11);
`,YT=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,VT=b.video`
  ${eb};
  outline: none;

  ${({isLoaded:e,hasModalLimits:r})=>R`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    opacity: ${e?"1":"0"};

    ${r&&R`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,ZT=b.img`
  ${eb};

  ${({isLoaded:e,hasModalLimits:r})=>R`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    display: ${e?"block":"none"};
    opacity: ${e?"1":"0"};

    ${r&&R`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,XT=({src:e,alt:r,videoOptions:a={},mediaType:o,hasModalLimits:s,retryLoading:u=!1,retryLimit:f=5,minWidth:p,minHeight:m,onError:x=()=>{},onMediaLoad:y=()=>{}})=>{const[v,k]=h.useState(0),[C,S]=h.useState(e),[E,T]=h.useState(!1),[$,L]=h.useState(!1),{loop:N=!1,autoPlay:z=!0,controls:_=!1,muted:H=!0,children:j,...A}=a,P=h.useCallback(U=>{if(!u||v>=f)x(U.nativeEvent),L(!0),T(!0);else{const Z=1e3*(v**2+Math.random());k(re=>re+1),setTimeout(()=>{S(`${e}?v=${Date.now()}`)},Z)}},[e,x,v,u,f]),V=h.useCallback(()=>{y(),L(!0)},[y,L]);return c.jsxs(J5,{minWidth:p,minHeight:m,children:[o==="video"?c.jsx(VT,{loop:N,autoPlay:z,controls:_,muted:H,onError:P,hasModalLimits:s,...A,src:E?"":C,isLoaded:$&&!E,preload:"metadata",onCanPlayThrough:V,children:c.jsx(c.Fragment,{children:j})}):c.jsx(ZT,{alt:r,onError:P,hasModalLimits:s,src:E?"":C,onLoad:V,isLoaded:$&&!E}),!$&&c.jsx(YT,{children:c.jsx(mr,{size:"large",styling:"primary"})}),E&&c.jsx(FT,{})]})},QT={controls:!0},ap=()=>{const{createModal:e,isModalOpen:r,setModalOpen:a}=K5();async function o(u,f){let p=!1;if(f==="img"){const m=new Image;m.src=u;try{await new Promise((x,y)=>{m.onload=()=>x(p=!0),m.onerror=y})}catch{p=!1}}if(f==="video"){const m=document.createElement("video");m.src=u;try{await new Promise((x,y)=>{m.oncanplaythrough=()=>x(p=!0),m.onerror=y})}catch{p=!1}}return p}return{createMediaModal:h.useCallback(async u=>{const{src:f,mediaType:p,alt:m,videoOptions:x=QT,onError:y,onMediaLoad:v,closeText:k,dismissCallback:C,retryLoading:S=!1,retryLimit:E=5,minHeight:T="300px",minWidth:$="300px"}=u;e({padding:!1,width:"auto",closeText:k,dismissCallback:C,customComponent:c.jsx(XT,{src:f,mediaType:p,alt:m,videoOptions:x,onError:y,onMediaLoad:v,retryLoading:S,retryLimit:E,minHeight:T,minWidth:$,hasModalLimits:!0})})},[e]),isMediaUrlValid:o,isMediaModalOpen:r,setMediaModalOpen:a}},ag="(prefers-color-scheme: dark)",ig=e=>{e?(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")):(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"))},KT=()=>{const e=localStorage.getItem("isDarkThemeEnabled");let r=!0;return e===null?r=window.matchMedia(ag)&&window.matchMedia(ag).matches:r=e!=="false",ig(!r),r},ic=()=>{const[e,r]=h.useState(KT),a=h.useCallback(()=>{r(s=>(localStorage.isDarkThemeEnabled=!s,ig(s),!s))},[]),o=h.useCallback(s=>{if(localStorage.getItem("isDarkThemeEnabled")!==null)return;const f=s.matches;r(()=>(ig(!f),f))},[]);return h.useEffect(()=>{const s=window.matchMedia(ag);return s.addEventListener("change",o),()=>{s.removeEventListener("change",o)}},[a,o]),{isDarkThemeEnabled:e,setIsDarkThemeEnabled:r,onThemeToggle:a,isLightMode:!e}},JT=30,eM=b.div`
  height: var(--button-height);
  overflow: visible;
`,tM=b.div`
  ${({isOpen:e})=>e&&"z-index: 100"};
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
`,nM=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`,rM=b.button`
  ${st}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${Me} {
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
    ${Me} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${Me} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`,aM=(e,r)=>{if(r)return r;if(e)return`${e-JT}px`},ps=({mainButtonId:e,buttonList:r,design:a="primary",size:o,textMaxWidth:s,disabled:u=!1,...f})=>{const[p,m]=h.useState(!1),x=h.useRef(null),y=h.useRef(null),v=h.useCallback(()=>{m(C=>!C)},[]),k=h.useCallback(()=>{m(!1)},[]);return np(y,k),c.jsx(eM,{children:c.jsxs(tM,{ref:y,className:`split-button-${a} split-button-size-${o}`,isOpen:p,...f,children:[c.jsxs(nM,{ref:x,children:[r.filter(C=>C.id===e).map(({id:C,text:S,icon:E,disabled:T,...$})=>c.jsx(uy,{noBorderTop:!0,disabled:u||T,closeCallback:k,icon:E||"NoIcon",text:S,design:a,size:o,...$},C)),c.jsx(rM,{onClick:v,disabled:u,children:c.jsx(Se,{icon:p?"Close":"Down",size:8})})]}),p&&!u?c.jsx(h.Fragment,{children:r.filter(C=>C.id!==e).map(({id:C,text:S,icon:E,disabled:T,...$})=>c.jsx(uy,{icon:E||"NoIcon",text:S,design:a,size:o,disabled:T,textMaxWidth:aM(x.current?.clientWidth,s),...$,closeCallback:k},C))}):null]})})},iM=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`,tb=({buttons:e})=>c.jsx(iM,{children:e.map(({id:r,buttonType:a,icon:o,text:s,iconPosition:u,size:f,...p})=>a==="icon-button"?c.jsx(Zg,{size:f||"small",icon:o||"",position:u,...p,children:s},r||`button-stack-${r}`):c.jsx(dt,{size:f||"small",...p,children:s},r||`button-stack-${r}`))}),oM=b.div`
  display: flex;
  flex-direction: column;

  ${({hide:e})=>e&&R`
    display: none;
  `}
`,lM=b.label`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-10);
  padding: 12px;
  border-bottom: var(--grey-6) 1px solid;
`,dy=b.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`,fy=b.div`
  flex: 0 0 32px;
  align-items: center;
  display: flex;
  padding-top: 1px;
`,Ju=b.input`
  font-family: var(--font-data);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: var(--grey-12);
  background-color: transparent;

  width: 100%;
  border: ${({isTimeInput:e})=>e?({isTimeRangeValid:r})=>r?"transparent 1px solid":"var(--warning-a9) 1px solid":"transparent 1px solid"};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {

    border-color: ${({isTimeInput:e})=>e?({isTimeRangeValid:r})=>r?"transparent":"var(--warning-a9)":"transparent"};
  }
`,nb=b.div`
  flex: 0 0 20px;
  text-align: center;
`,hy=b.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {
    background: var(--primary-9);
    box-shadow: 0px 0px 0px 5px var(--primary-9);    
    ${Ju}{
      color: var(--white-1);
      border-color: transparent;
    }

    ${nb}{
      color: var(--white-1);
      text-align: center;
    }
  }
`,gy=({allowAfterMidnight:e=!1,title:r,hasDate:a,hasTime:o,isTimeRangeValid:s=!0,date:u=new Date,setDateCallback:f=()=>{}})=>{const p=(S,E,T,$)=>{const L=Number(S.slice(-2)),N=Number(E.slice(-2)),z=L>24?Number(S.slice(-1)):L,_=N>60?Number(E.slice(-1)):N;return z>=24&&_!==-1&&$?{newHour:24,newMin:0}:z===0&&_===0&&$&&!T?{newHour:0,newMin:1}:z===23&&_===60&&!$?{newHour:23,newMin:59}:z>=24&&!$?{newHour:23,newMin:_}:_===60?{newHour:z+1,newMin:0}:z>0&&_===-1?{newHour:z-1,newMin:59}:z===0&&_===-1?{newHour:z,newMin:0}:z===-1?{newHour:0,newMin:_}:{newHour:z,newMin:_}},[m,x]=h.useState(qt(u,"mm")),[y,v]=h.useState(qt(u,"HH")),k=h.useCallback(({target:{value:S}})=>{if(cy(S))return;const{newHour:E,newMin:T}=p(S,y,a,e);f(Tx([rl(u),ud(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,y,a,f]),C=h.useCallback(({target:{value:S}})=>{if(cy(S))return;const{newHour:E,newMin:T}=p(m,S,a,e);f(Tx([rl(u),ud(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,m,a,f]);return h.useEffect(()=>{e&&Ns(u,rl(u))?(x("24"),v("00")):(v(qt(u,"mm")),x(qt(u,"HH")))},[u,e]),c.jsxs(oM,{hide:!a&&!o,children:[c.jsx(lM,{children:r}),a&&c.jsxs(dy,{children:[c.jsx(fy,{children:c.jsx(Se,{icon:"Date",color:"dimmed",size:14,weight:"light"})}),c.jsx(hy,{children:c.jsx(Ju,{type:"text",readOnly:!0,value:qt(u,"yyyy/MM/dd"),isTimeRangeValid:s})})]}),o&&c.jsxs(dy,{children:[c.jsx(fy,{children:c.jsx(Se,{icon:"Time",color:"dimmed",size:14,weight:"light"})}),c.jsxs(hy,{children:[c.jsx(Ju,{name:"hours",type:"number",min:"-1",max:e?24:23,value:m,onChange:k,isTimeRangeValid:s,autoComplete:"off",isTimeInput:!0}),c.jsx(nb,{children:":"}),c.jsx(Ju,{name:"minutes",type:"number",min:"-1",max:"60",value:y,onChange:C,isTimeRangeValid:s,autoComplete:"off",isTimeInput:!0})]})]})]})},gd=e=>({start:ud(e,{seconds:0,milliseconds:0}),end:rl(e)}),sM=new Date,Qo=gd(oi(new Date)),cM=b.div`
  display: flex;
`,uM=b.div`
  border-right: var(--grey-6) 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`,dM=b.div`
  border-top: var(--grey-6) 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  box-sizing: border-box;
`,fM=b.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,hM=b.div`
  font-family: var(--font-data);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,gM=b.div`
  user-select: none;
`,pM=b.div`
  display: flex;
  height: 70px;
  border-bottom: var(--grey-6) 1px solid;
  text-align: center;
`,mM=b.div`
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
`,pd=b.div`
  [stroke]{
    stroke: var(--grey-8);
  }
`,py=b.button`
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

  ${pd}{
    svg * {
      transition: stroke var(--speed-fast) var(--easing-primary-in-out);
    }
  }

  &:hover:enabled  {
    color: var(--grey-12);

    ${pd}{
      [stroke]{
        stroke: var(--grey-12);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`,vM=b.div`
  padding: 5px 0;
`,xM=b.div`
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid var(--grey-6);
`,yM=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,rb=b.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`,bM=b(rb)`
  border-bottom: var(--grey-6) 1px solid;
`,ab=b.button`
  ${st};
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
`,wM=b(ab)`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey-a11);
`,SM=b.div`
  position: absolute;
  left: 18px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-11);

  ${({state:e})=>(e==="single"||e==="start"||e==="end")&&R`
    background-color: var(--white-12);`}

  ${({state:e})=>e==="inside"&&R`
    background-color: var(--primary-12);`}

  ${({isToday:e})=>e&&R`
    left: 16px;
    bottom: 3px;
  `}

  ${({hasContent:e})=>!e&&R`
    display: none;
  `}
`,CM=b.span`
  transform: translateY(-1px);
`,kM=b(ab)`
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${({thisMonth:e})=>!e&&R`
    color: var(--grey-a8);
  `}

  ${({isToday:e})=>e&&R`
    border: 2px solid var(--primary-a7);
  `}

  ${({state:e})=>e!=="single"&&e!=="start"&&e!=="end"&&R`
    &:hover:enabled {
      background: var(--primary-a6);
      color: var(--white-1);
    }
  `};

  ${({state:e})=>(e==="single"||e==="start"||e==="end")&&R`
    background: var(--primary-9);
    color: var(--white-1);
  `}

  ${({state:e})=>e==="start"&&R`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({state:e})=>e==="end"&&R`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({state:e})=>e==="insideHover"&&R`
    background: var(--primary-a9) !important;
    color: var(--white-1);
  `}

  ${({state:e})=>e==="inside"&&R`
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

    ${({state:e})=>(e==="single"||e==="start"||e==="end")&&R`
      color: var(--white-1);
      background: var(--red-a9);
    `}

    ${({state:e})=>e==="inside"&&R`
      color: var(--white-1);
      background: var(--red-a7);
      &:nth-child(7n+1), &:nth-child(7n){
        &::after {
          background: var(--red-a7);
        }
      }
    `};
  }

`,EM=["S","M","T","W","T","F","S"],jM=["日","月","火","水","木","金","土"],TM=({dateMode:e="interval",timeMode:r="interval",dateTimeTextUpper:a="From",dateTimeTextLower:o="To",timeZoneTitle:s="Timezone",timeZoneValueTitle:u="JST",hasEmptyValue:f=!1,updateCallback:p=()=>{},initialValue:m,availableRange:x,contentDays:y,lang:v="en",cancelText:k="Cancel",applyText:C="Apply",hasApply:S=!1,disableApply:E=!1,applyCallback:T=()=>{},cancelCallback:$=()=>{}})=>{const[L,N]=h.useState($M(f,m)),[z,_]=h.useState(L===null?sM:L.start),[H,j]=h.useState("start"),[A,P]=h.useState([]),V=h.useRef(!0),[U,Z]=h.useState(!0),re=v==="ja"?jM:EM;h.useEffect(()=>{if(V.current)V.current=!1;else{const q=new Date;N(gd(oi(q))),_(q)}},[e,r]),h.useEffect(()=>{P(_9({start:R9(z),end:g5(z)}))},[z]),h.useEffect(()=>{L!==null&&p(e==="interval"||r==="interval"?L:L.start)},[e,L,r,p]);const X=h.useCallback(q=>{const ae=L||Qo;if(e==="single"){const ie=ms(ae.start,q),de=ms(ae.end,q);N({start:ie,end:de})}else if(H==="end"&&zx(q,ae.start)){const ie=ms(ae.end,q);N({...ae,end:ie}),j("done")}else if(H==="start"||H==="end"||H==="done"){const ie=ms(ae.start,q),de=ms(ae.end,q);N({start:ie,end:de}),j("end")}},[e,L,H]);h.useEffect(()=>{const{start:q,end:ae}=L||Qo;r==="interval"&&zx(Wi(q,{minutes:1}),ae)?Ns(ae,rl(q))&&ae.getSeconds()>0?Z(!0):Z(!1):Z(!0)},[L,r]);const te=h.useCallback(q=>{const{end:ae}=L||Qo;N({start:q,end:ae})},[L]),B=h.useCallback(q=>{const{start:ae}=L||Qo;N({start:ae,end:q})},[L]);return c.jsxs(cM,{children:[c.jsxs(uM,{children:[c.jsx(gy,{isTimeRangeValid:U,title:a,hasDate:!0,hasTime:r!=="off",date:L?L.start:Qo.start,setDateCallback:te}),c.jsx(gy,{isTimeRangeValid:U,title:o,hasDate:e==="interval",hasTime:r==="interval",date:L?L.end:Qo.end,allowAfterMidnight:!0,setDateCallback:B}),c.jsxs(dM,{children:[c.jsx(fM,{children:s}),c.jsx(hM,{children:u})]})]}),c.jsxs(gM,{children:[c.jsxs(pM,{children:[c.jsxs(py,{type:"button",disabled:AM(z,x),onClick:()=>_(Ms(z,-1)),children:[c.jsx(pd,{children:c.jsx(Se,{icon:"Left",color:"dimmed",size:10})}),qt(Ms(z,-1),"MMM",{locale:v==="ja"?h0:Xu})]}),c.jsxs(mM,{children:[c.jsx("span",{children:qt(z,"yyyy")}),qt(z,"MMMM",{locale:v==="ja"?h0:Xu})]}),c.jsxs(py,{type:"button",disabled:LM(z,x),onClick:()=>_(Ms(z,1)),children:[qt(Ms(z,1),"MMM",{locale:v==="ja"?h0:Xu}),c.jsx(pd,{children:c.jsx(Se,{icon:"Right",color:"dimmed",size:10})})]})]}),c.jsx(bM,{children:re.map((q,ae)=>c.jsx(wM,{children:q},ae))}),c.jsx(vM,{children:A.map((q,ae)=>{const ie=D9({start:q,end:H9(q)});return c.jsx(rb,{children:ie.map((de,O)=>{const W=MM(de,L),Q=HC(de);return c.jsxs(kM,{disabled:OM(de,x),onClick:()=>X(de),state:W,thisMonth:NC(de,z),isToday:Q,children:[c.jsx(CM,{children:qt(de,"d")}),c.jsx(SM,{hasContent:zM(de,y),state:W,isToday:Q})]},O)})},ae)})}),S&&c.jsx(xM,{children:S&&c.jsxs(yM,{children:[c.jsx(dt,{design:"secondary",onClick:$,children:k}),c.jsx(dt,{onClick:T,disabled:!U||L===null||E,children:C})]})})]})]})},MM=(e,r,a)=>{let o="off",s=!1;if(r===null)return o;const u=RC(r).days===0;try{s=BC(e,r)}catch{s=!1}return(s||Vi(r.start,e))&&(u?o="single":Vi(r.start,e)?o="start":Vi(r.end,e)?o="end":o="inside"),o},ms=(e,r)=>ud(r,{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}),$M=(e,r)=>{if(e&&r===void 0)return null;const a=r||gd(oi(new Date));return a instanceof Date?gd(a):a},AM=(e,r)=>{if(!r?.start)return!1;try{const a=r.start.getFullYear(),o=r.start.getMonth();if(e.getFullYear()<a||e.getFullYear()===a&&e.getMonth()<=o)return!0}catch(a){console.warn("Invalid available range:",r,a)}return!1},LM=(e,r)=>{if(!r?.end)return!1;try{const a=r.end.getFullYear(),o=r.end.getMonth();if(e.getFullYear()>a||e.getFullYear()===a&&e.getMonth()>=o)return!0}catch(a){console.warn("Invalid available range:",r,a)}return!1},OM=(e,r)=>{if(!r)return!1;const{start:a,end:o}=r;try{if(a&&e<a&&!Vi(e,a)||o&&e>o&&!Vi(e,o))return!0}catch(s){console.warn("Invalid available range:",r,s)}return!1},zM=(e,r)=>r?r.some(a=>Vi(e,a)):!1,DM=b.div`
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

`,_M=b.div`
  display: inline-flex;
  flex-direction: column;
`,ib=({children:e,...r})=>c.jsx(DM,{...r,children:c.jsx(_M,{children:c.jsx(c.Fragment,{children:e})})}),RM=b.div`
  ${({isSortAscending:e})=>e&&R`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,NM=pr`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,og=b.div`
  ${({design:e})=>e==="default"?"padding: 0px 12px 0px 8px;":"padding: 0px 8px;"};
`,HM=b.button`
  ${st};
  border-radius: 3px;
  height: var(--common-height);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 4px 10px 4px 4px;

  ${({design:e})=>e==="basic"?`
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px;
      `:`
        background-color: var(--filter-button-background-color);
        border: var(--filter-button-stroke-color) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);
      `};

  ${({hasFlipArrow:e})=>e&&"padding: 4px 0px 4px 4px;"};

  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--filter-button-text-color);
  font-family: var(--font-ui);
  transition:
    opacity ${ln.speed.fast} ${ln.easing.primary.out},
    background-color ${ln.speed.fast} ${ln.easing.primary.out},
    box-shadow ${ln.speed.fast} ${ln.easing.primary.out},
    color ${ln.speed.fast} ${ln.easing.primary.out},
    border ${ln.speed.fast} ${ln.easing.primary.out};

  animation: ${NM} ${ln.speed.slower} ${ln.easing.primary.out};

  ${Me} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${ln.speed.fast} ${ln.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({design:e})=>e==="basic"?"":R`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${Me} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({isOpen:e})=>!e&&R`
      ${og} ${Me} {
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

  ${({isOpen:e,hasFlipArrow:r})=>e&&r&&R`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${Me} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${og} ${Me} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,BM=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,IM=b.div``,ob=({icon:e,hasFlipArrow:r=!1,isSortAscending:a=!1,isOpen:o,design:s="default",children:u,formAction:f,...p})=>c.jsx(HM,{type:"button",...p,isOpen:o,hasFlipArrow:r,design:s,children:c.jsxs(BM,{children:[c.jsx(RM,{isSortAscending:a,children:c.jsx(Se,{icon:e,size:12,weight:"light",color:"filter-button-icon-color"})}),c.jsx(IM,{hasFlipArrow:r,children:c.jsx(c.Fragment,{children:u})}),r&&c.jsx(og,{design:s,children:c.jsx(Se,{icon:o?"Up":"Down",size:6,color:"grey-11"})})]})}),As=b.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`,tl=b.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`,ed=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,UM=b.div`
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
`,nl=b.div`
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
`,Ls=b.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,GM=b.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;

  ${({selected:e,disabled:r})=>R`
    
    ${tl}, ${nl} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${As} {
        color: var(--input-label-hover);
      }

      ${tl}, ${nl} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${Ls}, ${ed} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${e&&R`
      ${As} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${tl}, ${nl} {
        border-color: var(--input-toggle-checked-border-color);
        ${Ls}, ${ed} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${As} {
          color: var(--input-label-hover);
        }

        ${tl}, ${nl} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${Ls}, ${ed} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${r&&R`
      cursor: not-allowed;
    `};

    ${tl}, ${nl} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${Ls} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${As}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`,lb=({title:e,value:r,optionType:a="text",selected:o=!1,disabled:s=!1,onClick:u=()=>{},...f})=>{const p=Rd.icons.weights.regular;return c.jsxs(GM,{onClick:u,disabled:s,selected:o,...f,children:[a==="checkbox"&&c.jsx(tl,{children:c.jsx(ed,{children:o&&c.jsx(UM,{children:c.jsx(W5,{color:"inverse",stroke:"inverse",size:12,weight:p})})})}),a==="radio"&&c.jsx(nl,{children:c.jsx(Ls,{})}),c.jsx(As,{children:e})]})},sb=b.div`
  padding: 0 2px;
`,PM=b.div`
  ${({hasBorder:e,disabled:r,noBackground:a,width:o})=>R`

    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: var(--search-input-container-gap, 6px);
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${e&&R`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${sb}{
        padding: 0;
      }
    `};

    ${r&&R`
      opacity: 50%;
      cursor: not-allowed;
      `};

    ${o&&R`
      width: ${o};
    `};

    background-color: ${a?"transparent":"var(--grey-1)"};

    &:focus-within {
      background-color: ${a?"transparent":"var(--grey-1)"};
      border: ${e?"1px solid var(--primary-9)":"none"};
      box-shadow: 0px 4px 9px 0px ${a?"transparent":"var(--primary-a2)"};
    }

  `};

  ${Me} {
    flex-shrink: 0;
    display: flex;
  }


`,qM=b.button`
  ${st};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${Me} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,WM=b.input`
  ${ac};

  font-family: var(--search-input-font-family,var(--font-ui));
  font-size: var(--search-input-font-size, 12px);
  font-weight: 500;
  color: var(--grey-12);

  &::placeholder {
    ${({color:e})=>e&&`color: var(--${e})`};
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

`,FM=({color:e="subtle",hasBorder:r=!0,iconSize:a=12,disabled:o=!1,noBackground:s=!1,hasCrossButton:u=!1,onCrossClick:f=()=>{},width:p,children:m,formAction:x,...y})=>c.jsxs(PM,{hasBorder:r,disabled:o,noBackground:s,width:p,children:[c.jsx(sb,{children:c.jsx(Se,{color:e,icon:"Search",weight:"regular",size:a})}),c.jsx(WM,{color:e,disabled:o,...y}),u&&c.jsxs(qM,{onClick:f,children:[" ",c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:12})]})]}),Vs=e=>e==null||e.value===void 0||e.value===null||e.text===null?!1:(typeof e.value=="number"||typeof e.value=="string")&&typeof e.text=="string",YM=b.div`
  position: relative;
`,VM=b.div`
  display: inline-block;
`,ZM=b.div`
  z-index: 100;
  min-width: ${({minWidth:e})=>e}px;
  position: absolute;

  ${({openState:e,disabled:r})=>e&&R`
    display: ${e.isOpen?"inline-block":"none"};
    display: ${r&&"none"};

    ${e.position==="bottom-right"&&`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position==="bottom-left"&&`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position==="top-left"&&`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

    ${e.position==="top-right"&&`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

  `};
`,XM=(e,r,a)=>{let o="bottom-right";const s=e.left+r>window.innerWidth,u=e.bottom+a>window.innerHeight,f=e.bottom>a;return s&&u&&f&&(o="top-left"),u&&!s&&f&&(o="top-right"),!u&&s&&(o="bottom-left"),o},cb=h.forwardRef(({buttonIcon:e,buttonText:r,disabled:a=!1,minWidth:o=270,minHeight:s=190,isSortAscending:u,design:f="default",noCloseOnClickOutside:p,children:m,onToggleOpenCallback:x=()=>{},onCloseCallback:y=()=>{},...v},k)=>{const[C,S]=h.useState({isOpen:!1,position:"bottom-right"}),E=h.useRef(null),T=h.useRef(null),$=h.useCallback(()=>{p||(C.isOpen&&y(),S(z=>({...z,isOpen:!1})))},[p,y,C.isOpen]);np(T,$);const L=h.useCallback((z,_)=>{if(!E.current)return;const H=E.current.getBoundingClientRect();if(!H)return;const j=XM(H,z,_);x(!C.isOpen),S(A=>{const P=!A.isOpen;return{...A,isOpen:P,position:j}})},[x,C.isOpen]),N=h.useCallback(()=>{S(z=>({...z,isOpen:!1}))},[]);return h.useImperativeHandle(k,()=>({imperativeClose:N})),c.jsxs(YM,{ref:T,...v,children:[c.jsx(VM,{ref:E,children:c.jsx(ob,{icon:e,isOpen:C.isOpen,onClick:()=>L(o,s),disabled:a,isSortAscending:u,design:f,hasFlipArrow:!0,children:r})}),c.jsx(ZM,{openState:C,disabled:a,minWidth:o,children:c.jsx(c.Fragment,{children:m})})]})}),QM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`,KM=b.div`
  font-family: var(--font-data);
  color: var(--grey-11);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  padding: 15px 0;
`,JM=({loadingText:e})=>c.jsxs(QM,{children:[c.jsx(mr,{size:"large",styling:"primary"}),c.jsx(KM,{children:e})]}),e$=b.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid var(--grey-6);
  background: var(--grey-a2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`,t$=b.div`
  display: flex;
  align-items: center;
`,n$=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,r$=({resetText:e="Reset",cancelText:r="Cancel",closeText:a="Close",applyText:o="Apply",hasReset:s=!1,hasApply:u=!1,disableApply:f=!1,disableReset:p=!0,onReset:m=()=>{},onCancel:x=()=>{},onApply:y=()=>{}})=>c.jsxs(e$,{children:[c.jsx(t$,{children:s&&c.jsx(dt,{size:"small",design:"text-only",disabled:p,onClick:m,children:e})}),u&&c.jsxs(n$,{children:[c.jsx(dt,{size:"small",design:"secondary",onClick:x,children:f?a:r}),c.jsx(dt,{size:"small",onClick:y,disabled:f,children:o})]})]}),a$=b.div`
  display: inline-block;
  position: relative;
`,ub=b(lb)`
  letter-spacing: 0.2px;
`,i$=b.div`
  max-height: ${({moreItem:e})=>e?"228px":"196px"};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  padding: 8px 0;

  ${ub} {
    height: 40px;
    padding-left: 16px;
  }
`,o$=b.div`
  min-width: 252px;
`,l$=b.div`
  display: flex;
  height: 24px;
  padding: 0px 8px;
  align-items: center;
  justify-content: left;
  gap: 8px;
  border-left: 1px solid var(--grey-6);
  width: auto;
`,s$=b.div`
  display: flex;
  height: 24px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
`,c$=b.div`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 12px;
`,u$=b.div`
  --search-input-font-size: 14px;
  --search-input-font-family: var(--font-data);
  --search-input-container-gap: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 14px;
`,d$=b.div`
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
`,f$=b.div`
  position: absolute;
  bottom: 0px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, var(--grey-3));
  width: 99%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`,h$=(e,r)=>{let a=!1;return Array.isArray(r)?r.forEach(o=>{o.value===e.value&&(a=!0)}):Vs(r)&&(a=e.value===r.value),a},g$=(e,r,a)=>{let o=!1;if(a==="checkbox"){const s=Array.isArray(r)?r:Vs(r)?[r]:[],u=[];return s.forEach(f=>{e.value===f.value?o=!0:u.push(f)}),o||u.push(e),u.length===0?null:u}return e},vs=(e,r)=>{if(e.length<=1)return e;const a=[...e],o=document.documentElement.lang||"en";return a.sort((s,u)=>{const f=s.text.localeCompare(u.text,o);return r?f:-f}),a},oa=(e,r,a,o)=>{if(e.length<=r||a===null)return vs(e,o);if(Vs(a)){const s=e.findIndex(p=>p.value===a.value);if(s===-1||s<r)return vs(e,o);const u=e.filter(p=>p.value!==a.value),f=vs(u,o);return f.unshift(e[s]),f}if(Array.isArray(a)){const s=new Set(a.map(x=>x.value)),u=[],f=[];for(const x of e)s.has(x.value)?u.push(x):f.push(x);const p=vs(u,o),m=vs(f,o);return[...p,...m]}return e},p$=(e,r)=>e.filter(a=>a.text.toLowerCase().includes(r.toLowerCase())),m$=(e,r,a)=>e.replace("[TOTAL]",`${a}`).replace("[VISIBLE]",`${r}`),v$=(e,r)=>e===null&&r===null?!0:e===null||r===null?!1:Array.isArray(e)&&Array.isArray(r)?e.length!==r.length?!1:e.every(a=>r.some(o=>o.value===a.value)):Array.isArray(e)||Array.isArray(r)?!1:e.value===r.value,x$=({buttonIcon:e,buttonText:r,list:a,selected:o=null,disabled:s=!1,isLoading:u=!1,loadingText:f,optionType:p="text",hasOptionsFilter:m,searchPlaceholder:x,maxDisplayedItems:y=5,searchResultText:v="Showing [VISIBLE] of [TOTAL]",emptyResultText:k,design:C="default",resetText:S,cancelText:E,closeText:T,applyText:$,hasReset:L,hasApply:N,descendingText:z="Descending",ascendingText:_="Ascending",isListAscending:H=!0,onSelect:j=()=>{},onResetCallback:A=()=>{},onCancelCallback:P=()=>{},...V})=>{const[U,Z]=h.useState(H),[re,X]=h.useState(oa(a,y,o,U)),[te,B]=h.useState(""),[q,ae]=h.useState(o),ie=h.useRef(null),de=h.useCallback(()=>{X(oa(a,y,q,U))},[U,a,y,q]),O=h.useCallback(()=>{B(""),ae(o),Z(H),X(oa(a,y,o,H))},[H,a,y,o]),W=h.useCallback(me=>{const Te=g$(me,q,p);N||j(Te),ae(Te),X(oa(a,y,Te,U)),B("")},[q,p,N,a,y,U,j]),Q=h.useCallback(me=>{const Te=me.target.value.replace(/<[^>]*>/g,"").trim();if(B(Te),Te===""){X(oa(a,y,q,U));return}const pt=p$(a,Te);X(oa(pt,y,null,U))},[U,a,y,q]),le=h.useCallback(()=>{ae(o),P(),ie.current?.imperativeClose()},[P,o]),he=h.useCallback(()=>{j(q),ie.current?.imperativeClose()},[j,q]),pe=h.useCallback(()=>{N||j(null),B(""),X(oa(a,y,null,H)),ae(null),Z(H),A()},[N,a,y,H,A,j]),fe=h.useCallback(()=>{Z(me=>(X(oa(a,y,q,!me)),!me))},[a,y,q]);h.useEffect(()=>{let me=!0;return me&&(B(""),X(oa(a,y,q,U))),()=>{me=!1}},[U,a,y,q]),h.useEffect(()=>{ae(o)},[o]);const ve=h.useMemo(()=>v$(q,o),[o,q]);return c.jsx(a$,{...V,children:c.jsx(cb,{ref:ie,buttonIcon:e,buttonText:r,disabled:s,design:C,onCloseCallback:de,onToggleOpenCallback:O,noCloseOnClickOutside:N,children:c.jsxs(ib,{children:[m&&c.jsx(u$,{children:c.jsx(FM,{type:"text",hasBorder:!1,placeholder:x,color:"dimmed",iconSize:12,value:te,onChange:Q,noBackground:!0})}),u||!a?c.jsx(JM,{loadingText:f}):c.jsxs(o$,{children:[m&&c.jsxs(s$,{children:[c.jsx(c$,{children:m$(v,re.length,a.length)}),c.jsx(l$,{children:c.jsx(Zg,{design:"text-only",position:"left",size:"xsmall",weight:"light",onClick:fe,icon:U?"FilterAscending":"FilterDescending",children:U?_:z})})]}),c.jsx(i$,{moreItem:a.length>5,children:re.length>0?re.map((me,Te)=>{const pt=me.value,ut=me.text;return c.jsx(ub,{title:ut,onClick:()=>W(me),selected:h$(me,q),optionType:p,value:pt},Te)}):c.jsx(d$,{children:k})}),a.length>5&&c.jsx(f$,{})]}),(N||L)&&c.jsx(r$,{hasApply:N,hasReset:L,resetText:S,cancelText:E,closeText:T,applyText:$,onCancel:le,onApply:he,disableApply:ve,onReset:pe,disableReset:q===null&&U===H&&te===""})]})})})};b.div`
  display: inline-block;
  position: relative;
`;const y$=b(lb)`
  letter-spacing: 0.2px;
`;b.div`
  padding: 8px 0;
  ${y$} {
    height: 40px;
    padding: 16px;
  }
`;b.div`
  font-family: var(--font-ui);
  display: flex;
  border-top: var(--grey-6) 1px solid;
  margin-top: 5px;

  button:first-child {
    border-right: var(--grey-6) 1px solid;
  }
`;b.button`
  ${st};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({isSelected:e})=>R`

    ${Me} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${Me} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${e&&R`
      ${Me} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`;b.div`
  display: inline-block;
  position: relative;
`;const b$=R`
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
`,Ru=b.div`
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
`;b.button`
  ${b$}
  ${Ru}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${Ru}{
    background-color: var(--primary-9);
    }
  }
  ${({isActive:e})=>e&&R`
    ${Ru} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${Ru}{
      cursor: pointer;
    }
  `}
  ${({isInnerContextButton:e})=>e&&R`
    margin-right: 5px;
  `}
`;b.div`
  z-index: 100;
  min-width: ${({minWidth:e})=>e}px;
  position: absolute;
  ${({openState:e,disabled:r})=>e&&R`
    display: ${e.isOpen?"inline-block":"none"};
    display: ${r&&"none"};
    ${e.position==="bottom-right"&&R`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="bottom-left"&&R`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="top-left"&&R`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position==="top-right"&&R`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`;b.div`
  display: inline-block;
`;const db=R`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`;b.div`
  ${db};
  padding: 4px 8px 4px 10px;
`;b.div`
  ${db};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`;b.div`
  display: flex;
`;b.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`;b.div`
  display: flex;
`;b.div`
  select{
    background-color: transparent;
  }
`;const w$=470,S$=360,C$=b.div``,k$=({buttonIcon:e,buttonText:r,disabled:a,initialValue:o,dateMode:s,timeMode:u,selected:f,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:y,lang:v,hasEmptyValue:k,availableRange:C,contentDays:S,cancelText:E="Cancel",applyText:T="Apply",hasApply:$=!0,onCloseCallback:L=()=>{},onUpdateCallback:N=()=>{},onToggleCallback:z=()=>{},onCancelCallback:_=()=>{},onApplyCallback:H=()=>{},...j})=>{const A=h.useRef(null),[P,V]=h.useState({initialValue:o,isMount:!0}),[U,Z]=h.useState(!1),re=h.useRef(null),X=h.useCallback(ie=>{A.current=ie,N(ie),Z(bT(f,ie))},[N,f]),te=h.useCallback(()=>{A.current&&A.current!==f&&L(A.current)},[L,f]),B=h.useCallback(ie=>{!$&&A.current&&A.current!==f&&z(A.current,ie),ie&&!P.isMount&&V(de=>({...de,isMount:!0}))},[$,P.isMount,z,f]),q=h.useCallback(()=>{A.current&&A.current!==f&&(A.current=f===void 0?null:f,V({initialValue:f===null?void 0:f,isMount:!1})),_(),re.current?.imperativeClose()},[_,f]),ae=h.useCallback(()=>{A.current&&A.current!==f&&H(A.current),re.current?.imperativeClose()},[H,f]);return h.useEffect(()=>{let ie=!0;return ie&&f===null&&A.current!==null&&(A.current=f,V({initialValue:void 0,isMount:!1})),()=>{ie=!1}},[f]),c.jsx(C$,{...j,children:c.jsx(cb,{ref:re,minWidth:w$,minHeight:S$,onCloseCallback:te,onToggleOpenCallback:B,noCloseOnClickOutside:$,buttonIcon:e,buttonText:r,disabled:a,children:c.jsx(ib,{children:P.isMount&&c.jsx(TM,{dateMode:s,timeMode:u,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:y,lang:v,availableRange:C,contentDays:S,cancelText:E,applyText:T,hasApply:$,updateCallback:X,cancelCallback:q,applyCallback:ae,hasEmptyValue:!0,initialValue:P.initialValue,disableApply:U})})})})},E$=pr`
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
`;b.div`
  flex: 1 1 200px;
  max-width: 320px;
`;b.div`
  ${({theme:e})=>e&&R`
    animation: ${E$} ${e.animation.speed.slow} ${e.animation.easing.primary.inOut};
  `};
`;b(ob)``;b(x$)``;b(k$)``;b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 6px;
`;const j$=b.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`,T$=b.div`
  font-family: var(--font-ui);
  color: var(--grey-9);
`,M$=b.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: var(--grey-9);
  font-family: var(--font-data);

  ${Me} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid var(--grey-8);
`,$$=b.div`
  padding: ${({hasIcon:e})=>e?"0 15px 0 9px":"0 15px 0 0"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`,A$=b.button`
  ${st};
  font-family: var(--font-data);
  color: var(--grey-10);
  margin-left: 11px;
  font-size: 12px;
`,L$=b.button`
  ${st};
`,O$=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`,my=(e,r)=>e.getHours()===23&&e.getSeconds()>0?qt(Wi(oi(e),{days:1}),r):qt(e,r),z$=e=>{let r=!1;if(e!=="")try{qt(new Date,e),r=!0}catch{r=!1}return r},D$=(e,r)=>e.replace("[TOTAL_RESULTS]",`${r}`),_$=(e,r,a,o)=>{let s="";const u=z$(r);return o&&Vs(e)?s=`${o}: ${e.text}`:o&&e instanceof Date?s=u?`${o}: ${qt(e,r)}`:`${o}: ${e.toDateString()}`:o&&hd(e)?s=u?`${o}: ${qt(e.start,r)} - ${my(e.end,r)}`:`${o}: ${e.start.toDateString()} - ${e.end.toDateString()}`:!o&&Vs(e)?s=e.text:!o&&e instanceof Date?s=u?qt(e,r):e.toDateString():!o&&hd(e)&&(s=u?`${qt(e.start,r)} - ${my(e.end,r)}`:`${e.start.toDateString()} - ${e.end.toDateString()}`),c.jsx($$,{hasIcon:!!a,children:s})},R$=({labelLists:e,totalResults:r,resultTextTemplate:a="Showing Results ([TOTAL_RESULTS]):",clearText:o="CLEAR ALL",resultsDateFormat:s="",onRemoveFilter:u=()=>{},onClearAll:f=()=>{},...p})=>c.jsxs(j$,{...p,children:[c.jsx(T$,{children:D$(a,r)}),c.jsxs(O$,{children:[e.map(({icon:m,item:x,filterName:y,filterId:v,type:k},C)=>c.jsxs(M$,{children:[m&&c.jsx(Se,{icon:m,color:"dimmed",size:10,weight:"light"}),_$(x,s,m,y),c.jsx(L$,{onClick:()=>u(v,k,x),children:c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:10,weight:"light"})})]},`Filter-Label-id-${C}`)),e.length>0&&c.jsx(A$,{onClick:f,children:o})]})]});b.div`
  font-family: var(--font-ui);
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;const N$=b(R$)``;b.div`
  ${N$} {
    margin-top: 29px;
    min-height: 19px;
  }
`;const H$=b.div`
  position: relative;
  display: inline-block;
`,B$=b.div`
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
  background-color: ${({theme:e,color:r})=>r?e.colors.status[r]:"var(--grey-5)"};
`,I$=b.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,color:r})=>r?e.colors.status[r]:"var(--grey-5)"};
`,fb=({icon:e,status:r,counter:a,maxCounter:o=999})=>c.jsxs(H$,{children:[r&&a===void 0?c.jsx(I$,{color:r}):a===void 0?null:c.jsx(B$,{color:r,children:a>o?`${o}+`:a}),c.jsx(Se,{icon:e,size:18,color:"dimmed"})]}),U$=pr`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`,G$=pr`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`,P$=b.svg`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].handleBase.fill};
  appearance: none;
`,q$=b.circle`
  fill: none;
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].handleRingLayer.stroke};
  mask: url(#${e=>e.maskID});
`,W$=b.g`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${e=>e.touchDragging&&R`
    animation: ${U$} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

  ${e=>e.mouseDragging&&R`
    animation: ${G$} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

`,F$=b.circle`
  mix-blend-mode: multiply;
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].handleReactiveFill.fill};
  stroke: none;
`,Y$=b.circle`
  fill: none;
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].handleReactiveRing.stroke};
`,V$=b.circle`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].handleContrastLayer.stroke};
`,Z$=b.circle`
    mix-blend-mode: multiply;
    fill: url(#${e=>e.fillID});
`,X$=b.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.showIndex&&R`
    opacity: 1;
  `};

`,Q$=b.stop`
  stop-color: ${({theme:e,styling:r})=>e.custom.lines[r].stopStart.stopColor};
`,K$=b.stop`
  stop-color: ${({theme:e,styling:r})=>e.custom.lines[r].stopEnd.stopColor};
`,J$=b.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].grabHandleText.stroke};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`,eA=b.g`

`,tA=e=>{const{index:r,useAngles:a,angle:o,unit:s,size:u,lineSetId:f,x:p,y:m,moveCallback:x,moveEndCB:y=()=>{},Icon:v,rotate:k=0,options:C,readOnlyHandle:S=!1,styling:E="primary"}=e,T=h.useRef(null),[$,L]=h.useState(!1),[N,z]=h.useState(!1),[_,H]=h.useState(null),j=h.useCallback(O=>{if(O.preventDefault(),!S)for(let W=0;W<O.touches.length;W++){const Q=O.touches[W];(Q.target.parentNode.parentElement===T.current||Q.target.parentNode.parentElement.parentElement)&&(L(!0),H(W))}},[S]),A=h.useCallback(()=>{S||(L(!1),H(null),y())},[y,S]),P=h.useCallback(O=>{if(!S)for(let W=0;W<O.touches.length;W++)W===_&&x({x:O.touches[W].pageX,y:O.touches[W].pageY},r)},[r,x,S,_]),V=h.useRef(null),U=h.useRef(null),Z=h.useCallback(()=>{V.current&&(window.removeEventListener("mousemove",V.current),V.current=null),U.current&&(window.removeEventListener("mouseup",U.current),U.current=null)},[]),re=h.useCallback(O=>{O.preventDefault(),!S&&x({x:O.pageX,y:O.pageY},r)},[r,x,S]),X=h.useCallback(O=>{O.preventDefault(),!S&&(z(!1),Z(),x({x:O.pageX,y:O.pageY},r),setTimeout(y))},[Z,r,x,y,S]),te=h.useCallback(O=>{O.preventDefault(),!S&&(Z(),z(!0),V.current=re,U.current=X,window.addEventListener("mousemove",re),window.addEventListener("mouseup",X))},[Z,re,X,S]);h.useEffect(()=>Z,[Z]);const B=a?"mask-"+f+"-"+r:"",q="shadowGradient-"+f+"-"+r,{showPointHandle:ae=!0,showPointLabel:ie=!1,pointIndexOffset:de}=C;return c.jsxs(P$,{ref:T,styling:E,x:p,y:m,mouseDragging:N,onTouchStart:j,onTouchEnd:A,onTouchMove:P,onMouseDown:te,children:[c.jsxs("defs",{children:[c.jsxs("mask",{id:B,children:[c.jsx("rect",{width:"100%",height:"100%",x:"-50%",y:"-50%",fill:"white"}),c.jsx("rect",{width:u/3,height:u/.9,x:-(u/3/2),y:-(u/.9+5),fill:"black",transform:`rotate(${o||0} 0 0)`})]}),c.jsxs("radialGradient",{id:q,children:[c.jsx(Q$,{styling:E,offset:"0%"}),c.jsx(K$,{styling:E,offset:"80%"})]})]}),v?c.jsx(eA,{transform:`scale(${s*1.5}) translate(-21 -21) rotate(${k}, 21, 21 )`,children:c.jsx(v,{height:"42",width:"42"})}):ae&&c.jsxs("g",{transform:`scale(${s})`,children:[c.jsx(Z$,{r:u*1,fillID:q}),c.jsx(V$,{styling:E,r:u/2.4,strokeWidth:u/3}),c.jsxs(W$,{touchDragging:$,mouseDragging:N,children:[c.jsx(F$,{styling:E,r:u/1.8}),c.jsx(Y$,{styling:E,r:u/2.25,strokeWidth:u/3})]}),c.jsx(q$,{styling:E,r:u/2,strokeWidth:u/6,maskID:B}),ie&&c.jsx(X$,{showIndex:!0,children:c.jsx(J$,{styling:E,transform:"translate(-5,6)",fontSize:"20px",showIndex:!0,children:r+de})})]})]})},nA=b.line`
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].contrastLine.stroke};
  mix-blend-mode: multiply;
  stroke-width: ${({lineClickSensing:e})=>e}px;
  stroke-opacity: ${({showLineBorder:e})=>e?"0.35":"0"};
  cursor: pointer;
`,rA=b.line`
  pointer-events: none;
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].highlightLineBorder.stroke};
`,md=b.circle`
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].grabHandle.fill};
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].grabHandle.stroke};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${e=>e.hide&&R`
    pointer-events: none;
    opacity: 0;
  `};
`,aA=b.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.showIndex&&R`
    opacity: 1;
  `};

`,iA=b.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].grabHandleText.stroke};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`,vy=b.text`
  text-align: center;
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  cursor: pointer;
  ${({showLabelShadow:e})=>e&&R`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,lg=b(md)`
  fill: none;
  stroke: ${({theme:e,styling:r})=>e.custom.lines[r].grabHandleContrast.stroke};
`,oA=b.g`

  ${md}, ${lg} {
    transition: r 250ms ease;
  }

  ${e=>e.showIndex&&R`
    ${md}, ${lg} {
      pointer-events: none;
      r: ${e.originalRadius*1.75};
    }
  `};
`,xy=b.circle`
  fill: hsla(203, 100%, 35%, 0.49);
  cursor: pointer;
`,yy=b(Se)`
  cursor: pointer;
`,lA=e=>{const{x1:r,y1:a,x2:o,y2:s,unit:u,lineMoveCallback:f,lineMoveStartCallback:p,options:m,lineSetId:x,label:y,styling:v="primary",moveEndCB:k=()=>{},lineClickCallback:C=()=>{},showSmallDirectionMark:S=!1,overrideShowMoveHandle:E=!0}=e,{handleFinderActive:T,revealSetIndex:$,showMoveHandle:L,setIndexOffset:N,showDirectionMark:z,showLabelShadow:_=!1}=m,[H,j]=h.useState(),A=!L||!E,P=parseInt(e.lineClickSensingBorder),V=Q=>{for(let le=0;le<Q.touches.length;le++)f({x:Q.touches[le].pageX,y:Q.touches[le].pageY});k()},U=Q=>{for(let le=0;le<Q.touches.length;le++)p({x:Q.touches[le].pageX,y:Q.touches[le].pageY})},Z=h.useRef(null),re=h.useRef(null),X=h.useCallback(()=>{Z.current&&(window.removeEventListener("mousemove",Z.current),Z.current=null),re.current&&(window.removeEventListener("mouseup",re.current),re.current=null)},[]),te=h.useCallback(Q=>{f({x:Q.pageX,y:Q.pageY}),Q.preventDefault()},[f]),B=h.useCallback(Q=>{X(),f({x:Q.pageX,y:Q.pageY}),k(),Q.preventDefault()},[X,f,k]),q=h.useCallback(Q=>{X(),p({x:Q.pageX,y:Q.pageY}),Z.current=te,re.current=B,window.addEventListener("mousemove",te),window.addEventListener("mouseup",B),Q.preventDefault()},[X,p,te,B]);h.useEffect(()=>X,[X]);const ae={x:(o+r)/2,y:(s+a)/2},ie=()=>{const Q=Math.atan2(s-a,o-r),le=Math.PI/2-Q,he=ae.x+Math.sin(le)-5,pe=ae.y+Math.cos(le),fe=180/Math.PI*Math.atan2(s-a,o-r),ve=-fe;return{x:he,y:pe,rotate:fe,labelRotate:ve}},de=()=>{const Q=ie();return c.jsxs("g",{transform:`translate(${Q.x},${Q.y}) rotate(${Q.rotate}) scale(${u*1})`,style:{cursor:"pointer"},children:[c.jsxs("g",{onClick:()=>C(x),transform:"translate(-3,-30) scale(0.8)",children:[c.jsx(xy,{r:12,cx:6,cy:7}),c.jsx(yy,{color:"inverse",icon:"Up",size:12,weight:"heavy",forSvgUsage:!0})]}),S&&c.jsxs("g",{onClick:()=>C(x),transform:"translate(5,25) rotate(-180) scale(0.8)",children:[c.jsx(xy,{r:8,cx:3.5,cy:4.5}),c.jsx(yy,{color:"inverse",icon:"Up",size:7,weight:"heavy",forSvgUsage:!0})]}),y&&c.jsx("g",{transform:`translate(0,${S?45:30}) rotate(${Q.labelRotate})`,children:c.jsx(vy,{onClick:()=>C(x),textAnchor:S?Q.labelRotate<0?"end":"start":"middle",dominantBaseline:"middle",styling:v,fontSize:"14px",x:0,y:0,showIndex:$||T,showLabelShadow:_,children:y})})]})},O=h.useCallback(()=>{e.hasClickSensingBorder&&j(!0)},[e.hasClickSensingBorder]),W=h.useCallback(()=>{e.hasClickSensingBorder&&j(!1)},[e.hasClickSensingBorder]);return c.jsxs("g",{children:[c.jsx(nA,{onMouseOver:O,onMouseOut:W,lineClickSensing:P,showLineBorder:H,onClick:()=>C(x),styling:v,strokeLinecap:"round",x1:r,y1:a,x2:o,y2:s,strokeWidth:4*u}),c.jsx(rA,{styling:v,x1:r,y1:a,x2:o,y2:s,strokeWidth:2*u}),c.jsxs(oA,{styling:v,showIndex:T&&$,originalRadius:8*u,children:[c.jsx(lg,{styling:v,r:8*u,strokeWidth:4*u,cx:ae.x,cy:ae.y,hide:A}),c.jsx(md,{styling:v,textAnchor:"middle",r:8*u,strokeWidth:1*u,cx:ae.x,cy:ae.y,hide:A,onTouchMove:V,onTouchStart:U,onMouseDown:q})]}),c.jsx(aA,{showIndex:!A&&(T||$),children:c.jsx(iA,{styling:v,fontSize:`${u*10}px`,x:ae.x-3*u,y:ae.y+4*u,showIndex:$||T,children:x+N})}),z?de():y&&c.jsx(vy,{styling:v,fontSize:`${u*14}px`,x:ae.x-16*u,y:ae.y-15*u,showIndex:$||T,showLabelShadow:_,children:y})]})},ro=h.createContext({}),sA=b.polygon`
  fill: ${({color:e})=>e};
  opacity: ${({opacity:e})=>e};
`,cA=b.circle`
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].point.fill};
`,uA=b.text`
  text-align: center;
  fill: ${({theme:e,styling:r})=>e.custom.lines[r].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
  ${({showAreaLabelShadow:e})=>e&&R`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,dA=({lineSetData:e,unit:r,showAreaLabelShadow:a})=>{const o=e.points.length;if(o<3)return null;let s={x:0,y:0};e.points.map(({x:f,y:p})=>(s.x+=f,s.y+=p,null)),s={x:s.x/o,y:s.y/o};const u=e.areaName?.length||1;return c.jsx(uA,{fontSize:`${r*14}px`,styling:e.styling||"primary",x:s.x-4*u*r,y:s.y+6*r,showAreaLabelShadow:a,children:e.areaName})},ip=({getCTM:e,boundaries:r,unit:a,size:o,lineSetId:s,options:u,onLineMoveEnd:f,onLineClick:p,lineClickSensingBorder:m,hasClickSensingBorder:x})=>{const{state:y,dispatch:v}=h.useContext(ro),k=y[s],{showLabelShadow:C=!1}=u,[S,E]=h.useState([]),T=h.useRef([]),$=o/2,L=k.points.length===2,N=h.useCallback(X=>(X.x<r.x.min?X.x=r.x.min:X.x>r.x.max&&(X.x=r.x.max),X.y<r.y.min?X.y=r.y.min:X.y>r.y.max&&(X.y=r.y.max),X),[r]),z=h.useCallback((X,te)=>{const B=e();if(!B)return;const q=N({x:(X.x-window.scrollX-B.e)/B.a,y:(X.y-window.scrollY-B.f)/B.d}),ae={x:Math.round(q.x),y:Math.round(q.y)},ie=la(k,{points:{[te]:{$merge:ae}}});v({type:"UPDATE",index:s,data:ie})},[e,N,k,v,s]),_=h.useCallback(X=>{const te=e();if(!te)return;const B={x:(X.x-window.scrollX-te.e)/te.a-$,y:(X.y-window.scrollY-te.f)/te.d-$};T.current=k.points.map(q=>{const ae=B.x-q.x,ie=B.y-q.y;return{offsetX:ae,offsetY:ie}})},[$,k.points,e]),H=h.useCallback(X=>{const te=e();if(!te)return;const{points:B}=k,q={x:(X.x-window.scrollX-te.e)/te.a-$,y:(X.y-window.scrollY-te.f)/te.d-$},ae=B.map((ie,de)=>{const{offsetX:O=0,offsetY:W=0}=T.current[de]||{};return N({x:Math.round(q.x-O),y:Math.round(q.y-W)})});v({type:"UPDATE",index:s,data:{...k,points:[...ae]}})},[e,k,$,v,s,N]),j=(X,te,B,q)=>Math.atan2(q-te,B-X)*180/Math.PI+90,A=h.useCallback(X=>{const{points:te}=X,B=[];X.points.forEach((q,ae)=>{const ie=ae+2>te.length?0:ae+1,de=te[ie],O=j(q.x,q.y,de.x,de.y);B.push(O)}),E(B)},[]);h.useEffect(()=>{L&&A(k)},[k,A,L]);const P=h.useRef(!1);h.useEffect(()=>{if(r.x.max===0&&r.y.max===0||P.current)return;if(P.current=!0,k.points.some(({x:te,y:B})=>te<r.x.min||te>r.x.max||B<r.y.min||B>r.y.max)){const te=k.points.map(B=>N({...B}));v({type:"UPDATE",index:s,data:{...k,points:te}})}},[r]);const V=(k?.showPointHandle===void 0||k?.showPointHandle)&&k.points.map(({x:X,y:te},B)=>c.jsx(tA,{lineSetId:s,rotate:k.rotate,Icon:k.icon,index:B,unit:a,size:o,useAngles:L,angle:S[B],x:X,y:te,moveEndCB:f,moveCallback:z,options:u,styling:k.styling,readOnlyHandle:k.readOnly},B+s)),U=u.showPoint&&k.points.map(({x:X,y:te},B)=>c.jsx(cA,{styling:k.styling||"primary",r:a,cx:X,cy:te},B)),Z=k.points.map(({x:X,y:te},B)=>{const{points:q,name:ae,styling:ie="primary"}=k,de=B+1>=q.length?0:B+1;if(B===1&&de===0)return null;const{x:O,y:W}=q[de];return c.jsx(lA,{moveEndCB:f,lineSetId:s,options:u,x1:X,y1:te,x2:O,y2:W,unit:a,label:ae,styling:ie,lineClickCallback:p,lineMoveCallback:H,lineMoveStartCallback:_,showSmallDirectionMark:k.showSmallDirectionMark,overrideShowMoveHandle:k.showMoveHandle,lineClickSensingBorder:m,hasClickSensingBorder:x},B)}),re=k.points.map(X=>`${X.x},${X.y}`).join(" ");return c.jsxs("g",{children:[c.jsx(sA,{points:re,color:k.areaFillColor?k.areaFillColor:"transparent",opacity:k.areaTransparencyLevel?k.areaTransparencyLevel/100:0}),Z,V,U,c.jsx(dA,{lineSetData:k,unit:a,showAreaLabelShadow:C})]})},fA=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`,hA=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,gA=b.svg`
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

  ${e=>e.transculent&&R`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,pA=b.img`
  object-fit: contain;
  width:  100%;
  height: 100%;
`,mA=({src:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},lineClickSensingBorder:s="65",hasClickSensingBorder:u=!0,options:{showHandleFinder:f,showSetIndex:p,showPointLabel:m=!1,showLabelShadow:x=!1,showPointHandle:y,showMoveHandle:v,showGrabHandle:k,setIndexOffset:C=0,pointIndexOffset:S=0,showPoint:E=!1,fixedImgDimensions:T,boundaryOffset:$=0,showDirectionMark:L=!1}={}})=>{const[N,z]=h.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:_}=h.useContext(ro),[H,j]=h.useState(!1),[A,P]=h.useState(!1),[V,U]=h.useState({h:1,w:1}),[Z,re]=h.useState(1),X=h.useRef(null),te=h.useRef(null),B=h.useCallback(()=>{if(!X.current)return;const{naturalHeight:O,naturalWidth:W,clientHeight:Q}=X.current,le=T&&T.y||O,he=T&&T.x||W;(le!==V.h||he!==V.w)&&(U({h:le,w:he}),r({h:le,w:he}),console.debug("image size:",{naturalHeight:O,naturalWidth:W,clientHeight:Q,unit:O/Q})),le/Q!==Z&&re(le/Q),P(!0)},[T,V.h,V.w,r,Z]),q=h.useCallback(()=>{if(!te.current)return null;const O=te.current.getScreenCTM();return console.debug("calculateCTM",O),O},[]),ae=O=>{O.target===te.current&&j(!!H&&!0)},ie=()=>{j(f||!1)};h.useEffect(()=>{if(!te.current)return;const{viewBox:O}=te.current,W={x:{min:O.baseVal.x+$,max:O.baseVal.x+O.baseVal.width-$},y:{min:O.baseVal.y+$,max:O.baseVal.y+O.baseVal.height-$}};console.debug("setBoundaries",W),z(W)},[V,$]),h.useEffect(()=>(window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B)}),[B]);const de={handleFinderActive:H,revealSetIndex:p!==!1&&(p||_.length>1),showPointLabel:m,showLabelShadow:x,showPointHandle:y||y!==!1&&k!==!1,showMoveHandle:v||v!==!1&&k!==!1,setIndexOffset:C,pointIndexOffset:S,showPoint:E,showDirectionMark:L};return c.jsxs(fA,{children:[c.jsx(pA,{ref:X,onLoad:B,src:e,alt:""}),A&&N?c.jsx(gA,{ref:te,viewBox:`0 0 ${V.w} ${V.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:ie,onPointerLeave:ie,transculent:H,children:_.map((O,W)=>c.jsx(ip,{hasClickSensingBorder:u,lineClickSensingBorder:s,onLineMoveEnd:a,onLineClick:o,lineSetId:W,lineData:O,getCTM:q,boundaries:N,unit:Z,size:30,options:de},W))}):c.jsx(hA,{children:c.jsx(mr,{size:"large",styling:"primary"})})]})},vA=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,xA=b.video`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,yA=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,bA=b.svg`
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

  ${e=>e.transcalent&&R`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,wA=({src:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},onLoaded:s=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:f=!0,videoOptions:{loop:p=!1,autoPlay:m=!1,controls:x=!1,muted:y=!0,...v},options:{showHandleFinder:k,showSetIndex:C,showPointLabel:S=!1,showPointHandle:E,showLabelShadow:T,showMoveHandle:$,showGrabHandle:L,setIndexOffset:N=0,pointIndexOffset:z=0,showPoint:_=!1,boundaryOffset:H=0,showDirectionMark:j=!1}={}})=>{const A=h.useRef(null),P=h.useRef(null),[V,U]=h.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:Z}=h.useContext(ro),[re,X]=h.useState(!1),[te,B]=h.useState({h:768,w:1024}),[q,ae]=h.useState(1),[ie,de]=h.useState(!1),O=h.useCallback(()=>{if(!P.current)return;const{videoHeight:fe,videoWidth:ve,clientHeight:me}=P.current;(fe!==te.h||ve!==te.w)&&(B({h:fe,w:ve}),r({h:fe,w:ve})),fe/me!==q&&ae(fe/me)},[te.h,te.w,q,r]),W=fe=>{fe.target===A.current&&X(!!re&&!0)},Q=()=>{X(k||!1)},le=h.useCallback(()=>A.current?A.current.getScreenCTM():null,[]);h.useEffect(()=>{if(!A.current||!ie)return;const{viewBox:fe}=A.current,ve={x:{min:fe.baseVal.x+H,max:fe.baseVal.x+fe.baseVal.width-H},y:{min:fe.baseVal.y+H,max:fe.baseVal.y+fe.baseVal.height-H}};U(ve)},[te,ie,H]);const he=h.useCallback(({target:fe})=>{if(fe){de(!0),O();const{videoHeight:ve=1,videoWidth:me=1}=fe;s({height:ve,width:me})}},[O,s]);h.useEffect(()=>(window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O)}),[O]);const pe={handleFinderActive:re,revealSetIndex:C!==!1&&(C||Z.length>1),showPointLabel:S,showLabelShadow:T,showPointHandle:E||E!==!1&&L!==!1,showMoveHandle:$||$!==!1&&L!==!1,setIndexOffset:N,pointIndexOffset:z,showPoint:_,showDirectionMark:j};return c.jsxs(vA,{children:[c.jsx(xA,{ref:P,controls:x,muted:y,autoPlay:m,loop:p,...v,onLoadedMetadata:he,src:e,id:"1",children:" "}),!ie&&c.jsx(yA,{children:c.jsx(mr,{size:"large",styling:"primary"})}),ie&&c.jsx(bA,{ref:A,viewBox:`0 0 ${te.w} ${te.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:W,onPointerUp:Q,onPointerLeave:Q,transcalent:re,children:Z.map((fe,ve)=>c.jsx(ip,{hasClickSensingBorder:f,lineClickSensingBorder:u,onLineMoveEnd:a,onLineClick:o,lineSetId:ve,lineData:fe,getCTM:le,boundaries:V,unit:q,size:30,options:pe},ve))})]})},SA=b.video`
  /* width: 800px; */
`,CA=({id:e="1",enabled:r,peerAddress:a,maxConnectionAttempts:o=30,rtcConfiguration:s={},setStatus:u=()=>{},setError:f=()=>{},autoPlay:p=!0,muted:m=!0,children:x,...y})=>{const v=h.useRef(0),k=h.useRef(null),C=h.useRef(null),S=h.useRef(null),E=h.useRef(!1),T=h.useRef(null),$=h.useRef(null),L=h.useRef(r);function N(X){f(X),Z()}const z=async X=>{if(!S.current||!C.current)return;try{X.type==="offer"&&S.current.signalingState!=="stable"?await Promise.all([S.current.setLocalDescription({type:"rollback"}),S.current.setRemoteDescription(X)]):(X.sdp&&(X.sdp=X.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await S.current.setRemoteDescription(new RTCSessionDescription(X)),u("Remote Description set"))}catch(B){console.error("Error:",B),f("Error Setting remote description");return}if(X.type!=="offer")return;u("Creating Answer");try{const B=await S.current.createAnswer();console.debug("Got local description: "+JSON.stringify(B)),await S.current.setLocalDescription(B)}catch(B){console.error(B),B instanceof Error&&f(B.message);return}const te={sdp:S.current.localDescription};u("Sending Local Description");try{C.current.send(JSON.stringify(te)),u("Connected")}catch(B){console.error(B),B instanceof Error&&f(B.message)}};function _(X){if(!S.current){console.error("peerConnection.current not found onIncomingICE ");return}const te=new RTCIceCandidate(X);S.current.addIceCandidate(te).catch(f)}const H=({data:X=""})=>{if(X==="HELLO")console.debug("Received HELLO"),u("Registered with server, waiting for offer.");else if(X.startsWith("ERROR"))console.error("Received "+X),N(X);else{let te;try{te=JSON.parse(X)}catch(B){B instanceof SyntaxError?N("Error parsing incoming JSON: "+X):N("Unknown error parsing response: "+X);return}S.current||U(te),te.sdp!=null?(console.debug("Received Remote SDP:"+JSON.stringify(te.sdp)),z(te.sdp)):te.ice!=null?(console.debug("Received Remote ICE:"+JSON.stringify(te.ice)),_(te.ice)):N("Unknown incoming JSON: "+te)}};function j(X){console.debug("serverClose"),!(!C.current||X.target!==C.current)&&(u("Disconnected from server"),re(),X.code!==1e3&&L.current&&E.current&&(T.current!==null&&clearTimeout(T.current),T.current=setTimeout(P,3e3)))}function A(X){X.target===C.current&&(console.debug(X),f("Unable to connect to server"),Z())}function P(){if(!E.current)return;if(console.debug("connectToPeer",v.current),v.current>=o){f("Too many connection attempts, aborting. Refresh page to try again");return}f(null);const X=kA(e);u("Connecting to server "+a);const te=new WebSocket(a);C.current=te,te.addEventListener("open",()=>{$.current!==null&&clearInterval($.current),$.current=setInterval(()=>{try{te.send("HELLO "+X),$.current!==null&&(clearInterval($.current),$.current=null),u("Registering with server (sent HELLO) for peer id: "+X)}catch(B){console.debug(B)}},3e3)}),te.addEventListener("error",A),te.addEventListener("message",H),te.addEventListener("close",j),v.current+=1}function V(X){k.current&&k.current.srcObject!==X.streams[0]&&(console.debug("Incoming stream"),k.current.srcObject=X.streams[0],u("Adding Track"))}function U(X){if(v.current=0,console.debug("Creating RTCPeerConnection"),!X.sdp){console.debug("WARNING: First message wasn't an SDP message!?");return}const te=new RTCPeerConnection(s);S.current=te,te.addEventListener("track",V),te.addEventListener("icecandidate",({candidate:B=null})=>{if(!B){console.debug("All local ICE Candidates sent.");return}C.current?C.current.send(JSON.stringify({ice:B})):console.debug("no WS found on peer connection 'icecandidate' event... how?")}),u("RTCPeerConnection created, waiting for SDP")}const Z=()=>{console.debug("closeWebSocket"),re(),C.current&&(C.current.close(),C.current=null)},re=()=>{console.debug("closePeerConnection"),S.current&&(S.current.close(),S.current=null)};return h.useEffect(()=>{L.current=r},[r]),h.useEffect(()=>(E.current=!0,r===!0?P():C.current&&C.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),E.current=!1,T.current!==null&&(clearTimeout(T.current),T.current=null),$.current!==null&&(clearInterval($.current),$.current=null),Z()}),[r]),c.jsx(SA,{...y,autoPlay:p,muted:m,ref:k,children:c.jsx(c.Fragment,{children:x})})};function kA(e){return"WRP_"+e+"_"+Math.floor(Math.random()*8990+10).toString()}const EA=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,jA=b(CA)`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,TA=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,MA=b.svg`
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

  ${e=>e.transcalent&&R`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,$A=({ws:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},onLoaded:s=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:f=!0,videoOptions:p,options:{showHandleFinder:m,showSetIndex:x,showPointLabel:y=!1,showLabelShadow:v=!1,showPointHandle:k,showMoveHandle:C,showGrabHandle:S,setIndexOffset:E=0,pointIndexOffset:T=0,showPoint:$=!1,boundaryOffset:L=0,showDirectionMark:N=!1}={}})=>{const z=h.useRef(null),_=h.useRef(null),[H,j]=h.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:A}=h.useContext(ro),[P,V]=h.useState(!1),[U,Z]=h.useState({h:768,w:1024}),[re,X]=h.useState(1),[te,B]=h.useState(!1),q=h.useCallback(()=>{if(!_.current)return;const{videoHeight:Q,videoWidth:le,clientHeight:he}=_.current;(Q!==U.h||le!==U.w)&&(Z({h:Q,w:le}),r({h:Q,w:le})),Q/he!==re&&X(Q/he)},[U.h,U.w,re,r]),ae=Q=>{Q.target===z.current&&V(!!P&&!0)},ie=()=>{V(m||!1)},de=h.useCallback(()=>z.current?z.current.getScreenCTM():null,[]);h.useEffect(()=>{if(!z.current||!te)return;const{viewBox:Q}=z.current,le={x:{min:Q.baseVal.x+L,max:Q.baseVal.x+Q.baseVal.width-L},y:{min:Q.baseVal.y+L,max:Q.baseVal.y+Q.baseVal.height-L}};j(le)},[U,te,L]);const O=h.useCallback(({target:Q})=>{if(Q){B(!0);const le=Q;_.current=le,q();const{videoHeight:he=1,videoWidth:pe=1}=le;s({height:he,width:pe})}},[q,s]);h.useEffect(()=>(window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q)}),[q]);const W={handleFinderActive:P,revealSetIndex:x!==!1&&(x||A.length>1),showPointLabel:y,showLabelShadow:v,showPointHandle:k||k!==!1&&S!==!1,showMoveHandle:C||C!==!1&&S!==!1,setIndexOffset:E,pointIndexOffset:T,showPoint:$,showDirectionMark:N};return c.jsxs(EA,{children:[c.jsx(jA,{onLoadedMetadata:O,peerAddress:e,id:"1",...p,enabled:!0,children:" "}),!te&&c.jsx(TA,{children:c.jsx(mr,{size:"large",styling:"primary"})}),te&&c.jsx(MA,{ref:z,viewBox:`0 0 ${U.w} ${U.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:ie,onPointerLeave:ie,transcalent:P,children:A.map((Q,le)=>c.jsx(ip,{hasClickSensingBorder:f,lineClickSensingBorder:u,onLineMoveEnd:a,onLineClick:o,lineSetId:le,lineData:Q,getCTM:de,boundaries:H,unit:re,size:30,options:W},le))})]})},AA=(e,r)=>({x:e.x+(r.x-e.x)*.5,y:e.y+(r.y-e.y)*.5}),op=(e,r)=>{switch(r.type){case"UPDATE_SET_POINTS":case"UPDATE":{const a=r.data.points.map(o=>({...o}));return la(e,{[r.index]:{points:{$set:a}}})}case"RENAME_SET":{const a={...e[r.index],name:r.data.name};return la(e,{[r.index]:{$set:a}})}case"UPDATE_SET_OPTIONS":{const a={...e[r.index],...r.data};return la(e,{[r.index]:{$set:a}})}case"ADD_SET":return[...e,r.data];case"REMOVE_SET":return la(e,{$splice:[[r.index,1]]});case"ADD_POINT":{const a=AA(e[r.index].points[0],e[r.index].points[1]);return la(e,{[r.index]:{points:{$splice:[[1,0,a]]}}})}case"REMOVE_POINT":return e[r.index].points.length<=2?e:la(e,{[r.index]:{points:{$splice:[[e[r.index].points.length-1,1]]}}});case"LOAD":return r.state.map(({name:o,points:s,...u})=>({name:o,points:s.map(({x:f,y:p})=>({x:f,y:p})),...u}));case"UPDATE_FILL_COLOR":{const a={...e[r.index],areaFillColor:r.data.areaFillColor};return la(e,{[r.index]:{$set:a}})}case"UPDATE_TRANSPARENCY_LEVEL":{const a={...e[r.index],areaTransparencyLevel:r.data.areaTransparencyLevel};return la(e,{[r.index]:{$set:a}})}default:return console.error(`Action ${r.type} not registered.`),e}},hb=24,gb=20,LA=-gb-hb,OA=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${vn.large} {
    gap: ${gb}px;
    flex-direction: row;
  }
`,zA=b.div`
  position: relative;
  display: flex;
  flex-direction: ${({areaTitleBottom:e})=>e?"column-reverse":"column"};
  gap: 4px;
`,DA=b.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${vn.large} {
    margin-left: ${LA}px;
    justify-content: center;
  }

  svg {
    display: block;
  }
`,_A=b.h1`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0;
`,lp=R`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
`,RA=b.div`
  ${lp}
`,NA=b(Ge)`
  ${lp}
  &:hover {
    text-decoration: underline;
  }
`,HA=b.button`
  ${st};
  ${lp};
  &:hover {
    text-decoration: underline;
  }
`,BA=({title:e,icon:r,areaTitle:a,areaHref:o,updateDocTitle:s=!0,hideAreaInDocTitle:u=!1,areaTitleBottom:f=!1,iconColor:p="dimmed",onAreaClick:m})=>(_T(e,u?void 0:a||"",void 0,s),c.jsxs(OA,{children:[r?c.jsx(DA,{children:c.jsx(Se,{size:hb,color:p,icon:r})}):null,c.jsxs(zA,{areaTitleBottom:f,children:[a&&m?c.jsx(HA,{onClick:m,type:"button",children:a}):a&&o?c.jsx(NA,{to:o,children:a}):a?c.jsx(RA,{children:a}):null,c.jsx(_A,{children:e})]})]})),IA=b.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,UA=({children:e})=>c.jsx(IA,{children:c.jsx(c.Fragment,{children:e})}),GA=b.div`
  user-select: none;
`,PA=b(Ge)`
  text-decoration: none;
  display: flex;
`,qA=b.button`
  ${st};
  text-decoration: none;
  display: flex;
`,pb=b.div`
  font-family: var(--font-data);
  font-size: ${({size:e})=>e}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({noBorder:e})=>!e&&R`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `};

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({tagSize:e})=>e==="compact"&&R`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({tagSize:e})=>e==="default"&&R`
    padding: 3px 8px;
  `};

  ${Me} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({hoverColor:e,enableHover:r})=>r&&R`
    &:hover {
      cursor: pointer;
      border-color: var(--${e});
      color: var(--${e});
      ${Me} {
        [stroke]{
          stroke: var(--${e});
        }
      }
    }
  `};
`,WA=({icon:e="",size:r=12,weight:a="regular",label:o="",linkTo:s,noBorder:u=!1,tagSize:f,onTagClick:p,...m})=>{const x=h.useMemo(()=>f==="compact"?8:10,[f]),y=h.useMemo(()=>f==="compact"?12:14,[f]),v=()=>c.jsxs(pb,{hoverColor:"primary",enableHover:!!(p||s),size:f?y:r,tagSize:f,noBorder:u,children:[e&&c.jsx(Se,{icon:e,size:f?x:r,weight:a,...m}),c.jsx(GA,{children:o})]});return p?c.jsx(qA,{onClick:p,type:"button",children:v()}):s?c.jsx(PA,{to:s,children:v()}):v()},FA=b.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`,YA=b.div`
`,VA=b.div`
  max-width: 648px;
`,ZA=b.div`
    ${({iconLeftPanel:e})=>e&&R`
        padding-top: 32px;
    `};

    @media ${vn.large} {
      padding-top: 0px;
    }

`,XA=b.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
  margin-top: 29px;
`,QA=b.div``,ma=({title:e,icon:r,iconColor:a="primary-9",introductionText:o,areaHref:s,areaTitle:u,updateDocTitle:f=!0,hideAreaInDocTitle:p,tagList:m,areaTitleBottom:x,rightContent:y,bottomLeftContent:v,onAreaClick:k})=>c.jsxs(FA,{children:[c.jsxs(YA,{children:[c.jsx(BA,{iconColor:a,title:e,icon:r,areaHref:s,areaTitle:u,updateDocTitle:f,hideAreaInDocTitle:p,areaTitleBottom:x,onAreaClick:k,bottomLeftContent:v}),m?c.jsx(XA,{children:m.map(({icon:C,label:S,linkTo:E,onTagClick:T})=>c.jsx(WA,{icon:C||"",noBorder:!0,tagSize:"compact",label:S,linkTo:E,onTagClick:T},"tag-"))}):null,o?c.jsx(VA,{children:c.jsx(UA,{children:o})}):null,c.jsx(QA,{children:c.jsx(c.Fragment,{children:v})})]}),y?c.jsx(ZA,{iconLeftPanel:!!r,children:c.jsx(c.Fragment,{children:y})}):null]});b.div`
  display: flex;
  flex-direction: column;
`;const KA=b.div`
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
    ${({aspect:e})=>e==="16:9"&&R`
      padding-left: 56.25%;
    `}
  }

  transition:
    opacity var(--speed-normal) var(--easing-primary-out),
    transform var(--speed-fast) var(--easing-primary-out);

  &:hover {
      cursor: pointer;

    ${({hoverZoom:e})=>e&&R`
      transform: scale(1.5);
      opacity: 1;
      transition: transform var(--speed-normal) var(--easing-primary-out);
    `}
  }

`,JA=b.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,eL=b.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 41px;
  width: 55px;
  object-fit: cover;
  display: block;
`,tL=b.div`
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
  ${Me} {
    display: flex;
    svg {
      padding-left: 2px;
      path {
        stroke: var(--white-1);
      }
    }
  };
`,nL=({hoverZoom:e=!0,image:r="",mediaUrl:a,mediaType:o,retryImageLoad:s=!1,retryLimit:u=5,closeText:f,onClickThumbnail:p})=>{const[m,x]=h.useState(!0),[y,v]=h.useState(r),{createMediaModal:k}=ap(),[C,S]=h.useState(0),E=h.useRef(null),T=h.useRef(null),$=h.useCallback(async()=>{k({src:m&&a?a:"",mediaType:o||"img",minHeight:"240px",closeText:f})},[f,k,o,a,m]);h.useEffect(()=>{x(!1),S(0),v(r)},[r]),h.useEffect(()=>{E.current&&E.current.complete&&y!==""&&(T.current&&clearTimeout(T.current),T.current=null,x(!0))},[y]);const L=h.useCallback(()=>{T.current=null,v(`${r}?v=${Date.now()}`)},[r]),N=h.useCallback(()=>{if(x(!1),!s||C>=u||T.current)return;const H=1e3*(C**2+Math.random());S(j=>j+1),T.current=setTimeout(L,H)},[C,s,u,L]),z=h.useCallback(()=>{T.current&&clearTimeout(T.current),T.current=null,x(!0)},[]),_=(H,j)=>{const A=new Image;A.src=H,A.complete?j(!0):(A.onload=()=>{j(!0)},A.onerror=()=>{j(!1)})};return h.useEffect(()=>{_(r,H=>{x(!!H)})},[r]),c.jsxs(KA,{hoverZoom:e,mediaUrl:a,aspect:"16:9",onClick:p||$,children:[m?c.jsx(JA,{ref:E,src:y,onError:N,onLoad:z}):c.jsx(eL,{children:c.jsx(dT,{})}),a&&o==="video"&&c.jsx(tL,{children:c.jsx(Se,{size:12,icon:"Play",color:"inverse"})})]})},rL=b.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({status:e,theme:{colors:r}})=>R`
    background: ${r.status[e]};
    content:'${e}';
  `}

`,aL=({status:e="neutral"})=>c.jsx(rL,{status:e}),mb=b.button`

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

`,iL=b.div`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${e=>e.theme.fontFamily.data};

  &:hover ${mb}{
    opacity: 0.5;
  }

  &, a {
    ${({theme:e,cellStyle:r,alignment:a})=>r==="firstColumn"?R`
      ${e.typography.table.columnData[r]};
    `:R`
      ${e.typography.table.columnData[r][a]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({hasCopyButton:e})=>e&&R`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},hideDivider:r})=>!r&&R`
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
`,oL=b.span`
  ${({theme:e})=>R`
    ${e.typography.table.columnData.unit};
  `}
`,lL=b.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({status:e="neutral",theme:{colors:r}})=>R`
    background: ${r.status[e]};
  `}
`,xs=({showUnit:e=!1,showStatus:r=!1,status:a,unit:o="",cellStyle:s="normalImportance",alignment:u="left",hideDivider:f,isLastRow:p,hasCopyButton:m,href:x,children:y})=>{f=p?!0:f;const{copyToClipboard:v}=tp();return c.jsx(iL,{cellStyle:s,alignment:u,hideDivider:f,hasCopyButton:m,children:c.jsxs(c.Fragment,{children:[r?c.jsx(lL,{status:a}):null,x?c.jsx("a",{href:x,children:y}):y,e?c.jsx(oL,{children:o}):null,m?c.jsx(mb,{onClick:()=>typeof y=="string"&&v(y),children:c.jsx(Se,{icon:"Copy",size:16})}):null]})})},sL=b.div`
  display: table-row;
  ${({isEmpty:e})=>e&&R`
    visibility: hidden;
  `};
`,cL=({selectable:e=!1,selectCallback:r,hasStatus:a,hasThumbnail:o,hasTypeIcon:s,rowData:u,isLastRow:f,columnConfig:p,closeText:m})=>{const x=h.useCallback(v=>{r&&r(v,u.id)},[u.id,r]),y=u.columns.length===0;return c.jsxs(sL,{isEmpty:y,children:[e?c.jsx(xs,{hideDivider:!0,children:c.jsx(Kg,{checked:u._checked,disabled:u.checkboxDisabled,onChangeCallback:x})}):null,a?c.jsx(xs,{hideDivider:!0,children:c.jsx(aL,{status:u.header?.status})}):null,o?c.jsx(xs,{hideDivider:!0,children:c.jsx(nL,{image:u.header?.image,mediaUrl:u.header?.mediaUrl,mediaType:u.header?.mediaType,closeText:m,onClickThumbnail:u.header?.onClickThumbnail})}):null,s?c.jsx(xs,{hideDivider:!0,children:c.jsx(Se,{icon:u.header?.icon||"",color:"dimmed",weight:"regular",size:16})}):null,u.columns.map((v,k)=>{const{cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:$}=p[k],{unit:L,status:N,text:z,customComponent:_}=v;return c.jsx(xs,{href:v.href,cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:$,unit:L,status:N,isLastRow:f,children:_||z},k)})]})},uL=b.div`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${Me} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${({ascending:e})=>e&&R`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }

  ${({isSortActive:e})=>e&&R`
    &:not(hover) {
      ${Me} {
        display: inline-flex;
      }
    }
  `}

  ${({theme:{styles:e},sortable:r})=>r&&R`

    ${e.tables.header.sortable.default};

    &:hover {
      cursor: pointer;
      ${e.tables.header.sortable.hover};

      ${Me} {
        ${e.tables.header.sortable.hover};
        display: inline-flex;
      }
    }
  `}
`,dL=({header:e,sortable:r,isSortActive:a,ascending:o,columnId:s,indexKey:u,toggleSort:f})=>{const p=(m,x)=>{f(m,x)};return c.jsxs(uL,{sortable:r,isSortActive:a,ascending:o,onClick:()=>{p(u,s)},children:[r&&c.jsx(Se,{icon:"FilterSorting",size:14,color:"dimmed"}),e]})},fL=b.div`
  display: table-row;
  height: 50px;
`,ys=b.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({hasCopyButton:e})=>e&&R`
    padding-right: 20px;
  `};

  ${({theme:e,alignment:r,headerStyle:a})=>r?R`
    ${e.typography.table[a][r]};
  `:R`
    ${e.typography.table[a].left};
  `};

  ${e=>e.fixedWidth&&R`
    width: ${e.fixedWidth}px;
  `};

  ${({minWidth:e})=>e&&R`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},headerStyle:r,isSortActive:a})=>r==="subHeader"&&R`
  padding-bottom: 15px;

  &::after {
    ${e.tables.header.divider};
    content: '';
    display: block;
    height: 1px;
    left: ${a?"-15px":"0"};
    right: 0;
    width: ${a?"calc(100% + 15px)":"100%"};
    bottom: 0px;
    position: absolute;
  }
`};
`,hL=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({alignment:e})=>e&&R`
      ${e==="right"?"align-items: flex-end":null};
      ${e==="center"?"align-items: center":null};
  `};
`,gL=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,pL=b.div`
  ${({theme:{typography:e}})=>R`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,by=b.div`
  height: 20px;
`,wy=b.div`
  ${({theme:{styles:e}})=>R`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({isLastOfGroup:e})=>e&&R`
    margin-right: 15px;
  `};
`,mL=(e,r)=>{if(r<0)return null;let a=!0;return r<e.length-1&&(a=e[r].groupTitle!==e[r+1].groupTitle),e[r].groupTitle?r!==0&&e[r-1].groupTitle===e[r].groupTitle?c.jsxs(h.Fragment,{children:[c.jsx(by,{}),c.jsx(wy,{isLastOfGroup:a})]}):c.jsxs(h.Fragment,{children:[c.jsx(pL,{children:e[r].groupTitle}),c.jsx(wy,{isLastOfGroup:a})]}):c.jsx(by,{})},vL=({selectable:e,hasStatus:r,hasThumbnail:a,hasTypeIcon:o,allChecked:s,disableAllChecked:u,hasHeaderGroups:f,columnConfig:p,defaultAscending:m,toggleAllCallback:x=()=>{},sortCallback:y=()=>{}})=>{const[v,k]=h.useState(p),[C,S]=h.useState(m),E=h.useCallback($=>{x($)},[x]),T=h.useCallback(($,L)=>{if(v[$]===void 0||!v[$].sortable)return;const N=[...v];let z=null;N.forEach((j,A)=>{j.sortActive&&(z=A),A===$?j.sortActive=!0:j.sortActive=!1});const _=z===$?!C:C,H=L===void 0?`column_${$}`:L;y(_,H),k(N),S(_)},[C,y,v]);return c.jsxs(fL,{children:[e?c.jsx(ys,{headerStyle:"header",fixedWidth:30,children:c.jsx(Kg,{checked:s,disabled:u,onChangeCallback:E})}):null,r?c.jsx(ys,{headerStyle:"header",fixedWidth:10}):null,a?c.jsx(ys,{headerStyle:"header",fixedWidth:70}):null,o?c.jsx(ys,{headerStyle:"header",fixedWidth:35}):null,p.map(($,L,N)=>{const{header:z,alignment:_,hasCopyButton:H,sortActive:j,columnId:A,sortable:P,minWidth:V}=$;return c.jsx(ys,{alignment:_,hasCopyButton:H,minWidth:V,headerStyle:f?"subHeader":"header",isSortActive:j,children:c.jsxs(hL,{alignment:_,children:[f&&c.jsx(gL,{children:f&&mL(N,L)}),c.jsx(dL,{header:z,sortable:P,indexKey:L,columnId:A,isSortActive:j,ascending:C,toggleSort:T})]})},L)})]})},xL=b.div``,yL=b.div`
  display: table;
  width: 100%;
  position: relative;
`,vb=b.div`
  color: var(--grey-a11);
`,bL=b.div`
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

  ${vb} {
    margin-top: 10px;
  }
`,wL=b.div`
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
`,SL=({_checked:e=!1})=>e===!0,CL=({checkboxDisabled:e=!1})=>e===!0,kL=({columnConfig:e,selectable:r,rows:a=[],closeText:o,hasStatus:s=!1,hasThumbnail:u=!1,hasTypeIcon:f=!1,defaultAscending:p=!1,isLoading:m=!1,loadingText:x="Loading Data...",emptyTableTitle:y="",emptyTableText:v="",hasHeaderGroups:k=!1,sortCallback:C=()=>{},selectCallback:S=()=>{},toggleAllCallback:E=()=>{}})=>{const[T,$]=h.useState(!1),[L,N]=h.useState(!1),z=a.length===1&&a[0].columns.length===0&&!m;return h.useEffect(()=>{let _=!1,H=!1;a.every(SL)&&a.length>0&&!z&&(_=!0),(a.some(CL)||z||m)&&(H=!0),$(_),N(H)},[z,m,a]),c.jsx(xL,{children:c.jsxs(yL,{children:[c.jsx(vL,{selectable:r,hasStatus:s,hasThumbnail:u,hasTypeIcon:f,defaultAscending:p,allChecked:T,disableAllChecked:L,hasHeaderGroups:k,columnConfig:e,toggleAllCallback:E,sortCallback:C}),m?c.jsxs(bL,{children:[c.jsx(mr,{size:"large",styling:"primary"}),c.jsx(vb,{children:x})]}):null,z?c.jsxs(wL,{children:[c.jsx("h3",{children:y}),c.jsx("p",{children:v})]}):null,a.map((_,H)=>{const j=a.length-1===H;return c.jsx(cL,{rowData:_,isLastRow:j,selectable:r,selectCallback:S,columnConfig:e,hasStatus:s,hasThumbnail:u,hasTypeIcon:f,closeText:o},H)})]})})};b.div`
  position: relative;
  ${({theme:e})=>R`
    font-family: ${e.fontFamily.ui};
  `}
`;const EL=b(dt)`
  flex-shrink: 0;
`,jL=b(Xg)`
  flex-shrink: 0;
`;b(Ge)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;b.div`
  min-width: 320px;
  background-color: var(--grey-2);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Nd} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${EL} {
    margin-left: 5px;
  }
  ${jL} {
    margin-left: 5px;
  }
`;const Sy=b(I5)``;b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({alignment:e})=>e==="center"&&R`
    justify-content: center;
  `}

  ${({alignment:e})=>e==="right"&&R`
    justify-content: flex-end;
`}

  ${Sy} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${Sy} {
      opacity: 1;
    };
  }
`;const TL=(e,r)=>{switch(r.type){case"CONNECTING":return{...e,connection:"connecting",address:r.address,loading:!0,errorMessage:""};case"CONNECTED":return{...e,connection:"connected",loading:!1};case"CONNECTION_FAIL":return{...e,loading:!1,connection:"error",errorMessage:r.errorMessage};case"PTZ_ERROR":return{...e,loading:!1,errorMessage:r.errorMessage};case"DISCONNECTED":return{image:"",connection:"disconnected",moving:null,zooming:null,loading:!1,stateID:e.stateID};case"SET_IMAGE":return{...e,image:r.image};case"MOVE_START":return{...e,moving:r.direction};case"STOP":return{...e,moving:null,zooming:null};case"ZOOM_START":return{...e,zooming:r.zooming};case"HOME":return e;default:return console.error(`Action ${r.type} not registered.`),e}},ML=({socketUrl:e="",imageRefresh:r=1e3})=>{const{sendJsonMessage:a,lastMessage:o}=oj(e),[s,u]=h.useReducer(TL,{connection:"disconnected",moving:null,zooming:null,image:"",loading:!1,stateID:Math.floor(Math.random()*1e3)}),{address:f=null}=s,p=h.useCallback(async({username:C,password:S,host:E,port:T=80})=>{u({type:"CONNECTING",address:E}),await a({method:"connect",params:{address:E,port:T,user:C,pass:S}})},[a]),m=h.useCallback(({direction:C})=>{console.debug("move",C);const S={x:0,y:0,z:0};switch(u({type:"MOVE_START",direction:C}),C){case"up":S.y=1;break;case"down":S.y=-1;break;case"left":S.x=-1;break;case"right":S.x=1;break}a({method:"ptzMove",params:{address:f,speed:S,timeout:30}})},[a,f]),x=h.useCallback(({zooming:C})=>{console.debug("zoom",C);const S={x:0,y:0,z:0};switch(u({type:"ZOOM_START",zooming:C}),C){case"in":S.z=1;break;case"out":S.z=-1;break}a({method:"ptzMove",params:{address:f,speed:S,timeout:30}})},[a,f]),y=h.useCallback(()=>{a({method:"ptzStop",params:{address:f}})},[a,f]),v=h.useCallback(async()=>{u({type:"DISCONNECTED"})},[]),k=h.useCallback(async()=>{f&&a({method:"fetchSnapshot",params:{address:f}})},[f,a]);return h.useEffect(()=>{const C=setInterval(k,r);return()=>{window.clearInterval(C)}},[k,r]),h.useEffect(()=>{if(!o)return;const{id:C="",result:S=null,error:E}=JSON.parse(o.data);if(E&&C!=="fetchSnapshot"){u({type:"PTZ_ERROR",errorMessage:E});return}else C==="connect"?(k(),u({type:"CONNECTED"})):C==="fetchSnapshot"?u({type:"SET_IMAGE",image:S||""}):C==="ptzMove"?console.debug("ptzMove"):C==="ptzStop"&&(console.debug("ptzStop"),u({type:"STOP"}))},[f,k,o]),{state:s,dispatch:u,actions:{connect:p,getImage:k,disconnect:v,zoom:x,stop:y,move:m}}},ya=h.createContext({state:{},dispatch:()=>{},actions:{}}),$L=({socketUrl:e="ws://localhost/wsapp/",imageRefresh:r=1e3,children:a})=>{const{state:o,dispatch:s,actions:u}=ML({socketUrl:e,imageRefresh:r});return c.jsx(ya.Provider,{value:{state:o,dispatch:s,actions:u},children:a})},AL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,LL=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,OL=b.g`
`,zL=()=>{const[e,r]=h.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{r(!1),o({direction:"up"})},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(OL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(LL,{hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M97.1695375,0.000553838433 L97.5,0.333477759 L97.5,96.5 L1.33347776,96.5 L1.00279053,96.1695538 L1.01292824,94.904196 C1.86331972,42.4545249 44.5585771,0.176923219 97.1695375,0.000553838433 Z",id:"PTZ-Hover-Up"})}),c.jsxs(AL,{active:a==="up",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(1.002791, 0.000554)",children:[c.jsx("path",{d:"M96.1667469,-4.68958206e-13 L96.4972095,0.33292392 L96.4972095,96.4994462 L0.33068723,96.4994462 L2.98427949e-13,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,-4.68958206e-13 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)"}),c.jsx("path",{d:"M96.1667469,9.08073616e-12 L96.4972095,0.33292392 L96.1682095,0.658446162 L96.1835085,4.9999719 C46.8438228,5.16537489 6.62803783,44.4114895 5.04606009,93.4545769 L5.00997725,94.9436996 L4.99983954,96.2090574 L0.655209472,96.1734462 L0.33068723,96.4994462 L1.20792265e-12,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,9.08073616e-12 Z",id:"PTZ-Active-Up-Highlight",stroke:"url(#linearGradient-18)",fill:"url(#linearGradient-17)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447) translate(68.000000, 68.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-26"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-27)",xlinkHref:"#path-26"})]})]})},DL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,_L=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,RL=b.g`
`,NL=b.g`

`,HL=()=>{const[e,r]=h.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{o({direction:"down"}),r(!1)},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(RL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(_L,{hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M193.146668,96.3343288 L193.47713,96.6672527 L193.47713,192.833775 L97.3106078,192.833775 L96.9799206,192.503329 L96.9900583,191.237971 C97.8404498,138.7883 140.535707,96.5106982 193.146668,96.3343288 Z",id:"PTZ-Hover-Down",transform:"translate(145.228525, 144.584052) rotate(180.000000) translate(-145.228525, -144.584052) "})}),c.jsxs(DL,{active:a==="down",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 96.167076)",fill:"url(#linearGradient-12)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Down-Slice",fillOpacity:"0.56",transform:"translate(48.248605, 48.416976) rotate(180.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M0.519854724,96.4994462 L0.189392188,96.1665222 L0.518392188,95.841 L0.50309316,91.4994743 C49.8427789,91.3340713 90.0585638,52.0879566 91.6405416,3.0448693 L91.6766244,1.55574655 L91.6867621,0.290388759 L96.0313922,0.326 L96.3559144,-4.8316906e-13 L96.6866017,0.330446162 L96.6764639,1.59580395 C95.8260725,54.0454751 53.1308151,96.3230768 0.519854724,96.4994462 Z",id:"PTZ-Active-Down-Highlight",stroke:"url(#linearGradient-15)"})]}),c.jsxs(NL,{id:"PTZ-Arrows-Icons",transform:"rotate(-45) translate(-138.146447, -137.146447) translate(68.000000, 68.000000) translate(71.000000, 125.000000) rotate(180.000000) translate(-71.000000, -125.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-22"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-23)",xlinkHref:"#path-22"})]})]})},BL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,IL=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,UL=b.g`
`,GL=()=>{const[e,r]=h.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{r(!1),o({direction:"left"})},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(UL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(IL,{hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M96.9801453,96.3343288 L97.3106078,96.6672527 L97.3106078,192.833775 L1.14408557,192.833775 L0.813398341,192.503329 L0.823536055,191.237971 C1.67392753,138.7883 44.3691849,96.5106982 96.9801453,96.3343288 Z",id:"PTZ-Hover-Left",transform:"translate(49.062003, 144.584052) rotate(-90.000000) translate(-49.062003, -144.584052) "})}),c.jsxs(BL,{active:a==="left",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(0.813398, 96.167076)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(-90.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M0.188273843,0.331580881 L0.521197763,0.00111834491 L0.846720004,0.330118345 L5.18824575,0.314819318 C5.35364873,49.654505 44.5997634,89.87029 93.6428507,91.4522677 L95.1319735,91.4883506 L96.3973312,91.4984883 L96.36172,95.8431183 L96.68772,96.1676406 L96.3572738,96.4983278 L95.0919161,96.4881901 C42.6422449,95.6377986 0.364643223,52.9425412 0.188273843,0.331580881 Z",id:"PTZ-Active-Left-Highlight",stroke:"url(#linearGradient-14)",fill:"url(#linearGradient-13)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447)  translate(68.000000, 68.000000) translate(12.000000, 69.000000) rotate(-90.000000) translate(-12.000000, -69.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-20"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-21)",xlinkHref:"#path-20"})]})]})},PL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,qL=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,WL=b.g`
`,FL=()=>{const[e,r]=h.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{r(!1),o({direction:"right"})},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(WL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(qL,{hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M193.146668,0.167806588 L193.47713,0.500730508 L193.47713,96.6672527 L97.3106078,96.6672527 L96.9799206,96.3368066 L96.9900583,95.0714488 C97.8404498,42.6217777 140.535707,0.344175968 193.146668,0.167806588 Z",id:"PTZ-Hover-Right",transform:"translate(145.228525, 48.417530) rotate(90.000000) translate(-145.228525, -48.417530) "})}),c.jsxs(PL,{active:a==="right",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 0.000554)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Right-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(90.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M96.68772,96.1678653 L96.3547961,96.4983278 L96.0292738,96.1693278 L91.6877481,96.1846268 C91.5223451,46.8449411 52.2762305,6.62915618 3.23314314,5.04717843 L1.74402039,5.0110956 L0.478662601,5.00095788 L0.514273843,0.656327817 L0.188273843,0.331805575 L0.518720004,0.00111834491 L1.78407779,0.0112560596 C54.2337489,0.861647539 96.5113506,43.5569049 96.68772,96.1678653 Z",id:"PTZ-Active-Right-Highlight",stroke:"url(#linearGradient-16)",fill:"url(#linearGradient-13)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-137.792893, -137.500000) translate(68.000000, 68.000000) translate(127.000000, 69.000000) rotate(90.000000) translate(-127.000000, -69.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-24"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-25)",xlinkHref:"#path-24"})]})]})},YL=({children:e})=>c.jsxs("svg",{width:"237px",height:"245px",viewBox:"0 0 237 245",version:"1.1",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-1",children:[c.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),c.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-2",children:[c.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),c.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),c.jsx("circle",{id:"path-3",cx:"138.5",cy:"137.5",r:"106.5"}),c.jsxs("filter",{x:"-9.9%",y:"-12.2%",width:"119.7%",height:"124.4%",filterUnits:"objectBoundingBox",id:"filter-4",children:[c.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),c.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),c.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),c.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),c.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),c.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),c.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),c.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-5",children:[c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),c.jsx("path",{d:"M96.5,0 C149.795478,0 193,43.2045216 193,96.5 C193,149.795478 149.795478,193 96.5,193 C43.2045216,193 0,149.795478 0,96.5 C0,43.2045216 43.2045216,0 96.5,0 Z",id:"path-6"}),c.jsxs("filter",{x:"-0.8%",y:"-0.8%",width:"101.6%",height:"101.6%",filterUnits:"objectBoundingBox",id:"filter-8",children:[c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),c.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixInner1"}),c.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),c.jsxs("linearGradient",{x1:"49.8274193%",y1:"13.7528099%",x2:"50.1815273%",y2:"82.6324827%",id:"linearGradient-9",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50.170103%",y1:"15.6407997%",x2:"49.8181984%",y2:"84.5265853%",id:"linearGradient-10",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"99.9976822%",y1:"100%",x2:"30.4274195%",y2:"28.550434%",id:"linearGradient-11",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"87.5668564%",y1:"87.9295401%",x2:"33.2810997%",y2:"28.936849%",id:"linearGradient-12",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"87.568598%",y1:"87.9277819%",x2:"33.2803247%",y2:"28.9378254%",id:"linearGradient-13",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"22.297939%",y1:"79.0413218%",x2:"39.761035%",y2:"60.7027769%",id:"linearGradient-14",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"80.348219%",y1:"76.4229599%",x2:"62.8569051%",y2:"60.0361013%",id:"linearGradient-15",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"77.520937%",y1:"22.5831044%",x2:"57.8137717%",y2:"41.946341%",id:"linearGradient-16",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"43.428843%",x2:"25.1751595%",y2:"28.0552504%",id:"linearGradient-17",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"30.6678499%",y1:"23.1406239%",x2:"41.9194217%",y2:"34.4210798%",id:"linearGradient-18",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-19",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),c.jsx("path",{d:"M25.6553811,77.370593 L14.0428746,58.1532717 C13.6102476,57.4373681 12.8355055,57 12,57 C11.1644945,57 10.3897524,57.4373681 9.95712537,58.1532717 L-1.65538114,77.370593 C-2.10132346,78.1091204 -2.11539958,79.0310048 -1.69221345,79.7828447 C-1.26902733,80.5346846 -0.474230758,81 0.387493489,81 L23.6125065,81 C24.4742308,81 25.2690273,80.5346846 25.6922135,79.7828447 C26.1153996,79.0310048 26.1013235,78.1091204 25.6553811,77.370593 Z",id:"path-20"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-21",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M84.6553811,133.370593 L73.0428746,114.153272 C72.6102476,113.437368 71.8355055,113 71,113 C70.1644945,113 69.3897524,113.437368 68.9571254,114.153272 L57.3446189,133.370593 C56.8986765,134.10912 56.8846004,135.031005 57.3077865,135.782845 C57.7309727,136.534685 58.5257692,137 59.3874935,137 L82.6125065,137 C83.4742308,137 84.2690273,136.534685 84.6922135,135.782845 C85.1153996,135.031005 85.1013235,134.10912 84.6553811,133.370593 Z",id:"path-22"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-23",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M140.655381,77.370593 L129.042875,58.1532717 C128.610248,57.4373681 127.835505,57 127,57 C126.164495,57 125.389752,57.4373681 124.957125,58.1532717 L113.344619,77.370593 C112.898677,78.1091204 112.8846,79.0310048 113.307787,79.7828447 C113.730973,80.5346846 114.525769,81 115.387493,81 L138.612507,81 C139.474231,81 140.269027,80.5346846 140.692213,79.7828447 C141.1154,79.0310048 141.101323,78.1091204 140.655381,77.370593 Z",id:"path-24"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-25",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M84.6553811,20.370593 L73.0428746,1.15327173 C72.6102476,0.437368074 71.8355055,0 71,0 C70.1644945,0 69.3897524,0.437368074 68.9571254,1.15327173 L57.3446189,20.370593 C56.8986765,21.1091204 56.8846004,22.0310048 57.3077865,22.7828447 C57.7309727,23.5346846 58.5257692,24 59.3874935,24 L82.6125065,24 C83.4742308,24 84.2690273,23.5346846 84.6922135,22.7828447 C85.1153996,22.0310048 85.1013235,21.1091204 84.6553811,20.370593 Z",id:"path-26"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-27",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]})]}),c.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-20, -16)",children:[c.jsxs("g",{id:"PTZ-Base-Outer",children:[c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-4)",xlinkHref:"#path-3"}),c.jsx("use",{stroke:"url(#linearGradient-2)",strokeWidth:"1",fill:"url(#linearGradient-1)",fillRule:"evenodd",xlinkHref:"#path-3"})]}),c.jsxs("g",{id:"PTZ-Base-Inner",transform:"translate(138.500000, 137.500000) rotate(45.000000) translate(-138.500000, -137.500000) translate(42.000000, 41.000000)",children:[c.jsx("mask",{id:"mask-7",fill:"white",children:c.jsx("use",{xlinkHref:"#path-6"})}),c.jsxs("g",{children:[c.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-5)",fillRule:"evenodd",xlinkHref:"#path-6"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-8)",xlinkHref:"#path-6"})]}),c.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-B",stroke:"url(#linearGradient-9)",strokeLinecap:"square",mask:"url(#mask-7)"}),c.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-A",stroke:"url(#linearGradient-10)",strokeLinecap:"square",mask:"url(#mask-7)",transform:"translate(96.500000, 96.500000) rotate(-90.000000) translate(-96.500000, -96.500000) "})]}),e]})]}),VL=({children:e})=>c.jsxs("svg",{width:"239px",height:"121px",viewBox:"0 0 239 121",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom1",children:[c.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),c.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom2",children:[c.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),c.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),c.jsx("path",{d:"M42.6,0 L170.4,0 C193.92733,0 213,19.0278981 213,42.5 C213,65.9721019 193.92733,85 170.4,85 L42.6,85 C19.0726697,85 0,65.9721019 0,42.5 C0,19.0278981 19.0726697,0 42.6,0 Z",id:"path-zoom3"}),c.jsxs("filter",{x:"-9.9%",y:"-30.6%",width:"119.7%",height:"161.2%",filterUnits:"objectBoundingBox",id:"filter-zoom4",children:[c.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),c.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),c.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),c.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),c.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),c.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),c.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),c.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-zoom5",children:[c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),c.jsx("path",{d:"M32.1164062,0.625 L160.582031,0.625 C178.319433,0.625 192.698438,14.8959236 192.698438,32.5 C192.698438,50.1040764 178.319433,64.375 160.582031,64.375 L32.1164062,64.375 C14.3790049,64.375 0,50.1040764 0,32.5 C0,14.8959236 14.3790049,0.625 32.1164062,0.625 Z",id:"path-zoom6"}),c.jsxs("filter",{x:"-0.8%",y:"-2.4%",width:"101.6%",height:"104.7%",filterUnits:"objectBoundingBox",id:"filter-zoom7",children:[c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),c.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixInner1"}),c.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),c.jsxs("linearGradient",{x1:"-103.741879%",y1:"13.7528099%",x2:"211.711869%",y2:"82.6324827%",id:"linearGradient-zoom8",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"12.2402545%",y1:"50%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom9",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"92.8257893%",y1:"51.9201456%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom10",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"65.5323776%",y1:"100%",x2:"65.5323776%",y2:"0%",id:"linearGradient-zoom11",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"112.326836%",y1:"50%",x2:"-13.3174936%",y2:"50%",id:"linearGradient-zoom12",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"-15.3833763%",y1:"43.598779%",x2:"72.9059278%",y2:"57.6171557%",id:"linearGradient-zoom13",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom14",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom15",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]})]}),c.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-200.000000, -490.000000) translate(213.000000, 508.000000)",children:[c.jsxs("g",{id:"PTZ-Zoom-Base-Outer",children:[c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom4)",xlinkHref:"#path-zoom3"}),c.jsx("use",{stroke:"url(#linearGradient-zoom2)",strokeWidth:"1",fill:"url(#linearGradient-zoom1)",fillRule:"evenodd",xlinkHref:"#path-zoom3"})]}),c.jsxs("g",{id:"PTZ-Zoom-Divider-Section",transform:"translate(10.000000, 10.000000)",children:[c.jsxs("g",{id:"PTZ-Zoom-Base-Inner",children:[c.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-zoom5)",fillRule:"evenodd",xlinkHref:"#path-zoom6"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom7)",xlinkHref:"#path-zoom6"})]}),c.jsx("path",{d:"M105.820053,40.7088832 L99.6638296,34.5975949 C102.060022,31.621888 101.697137,27.3062591 98.8371361,24.766097 C95.9771351,22.2259349 91.6163355,22.346137 88.902734,25.0399314 C86.1891326,27.7337257 86.0680466,32.0626948 88.6268862,34.90182 C91.1857259,37.7409453 95.5330871,38.1011814 98.5306741,35.7224793 L104.686898,41.8337675 C105.002147,42.1387442 105.504804,42.1387442 105.820053,41.8337675 C106.132899,41.5231118 106.132899,41.0195389 105.820053,40.7088832 Z M88.425235,30.1282878 C88.425235,27.0527607 90.9367746,24.5595534 94.0349157,24.5595534 C97.1330568,24.5595534 99.6445964,27.0527607 99.6445964,30.1282878 C99.6445964,33.2038149 97.1330568,35.6970222 94.0349157,35.6970222 C90.9382392,35.693515 88.428768,33.202361 88.425235,30.1282878 Z",id:"PTZ-Zoom-Divider-Section-Icon",fill:"#6A839E",fillRule:"nonzero"}),c.jsx("line",{x1:"95.3544271",y1:"1.5",x2:"95.3544271",y2:"13.5",id:"PTZ-Zoom-Divider-Section-Top-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"}),c.jsx("line",{x1:"95.3544271",y1:"50.5",x2:"95.3544271",y2:"62.5",id:"PTZ-Zoom-Divider-Section-Bottom-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"})]}),e]})]}),ZL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,XL=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,QL=b.g`
`,KL=()=>{const[e,r]=h.useState(!1),{state:{zooming:a},actions:{zoom:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{r(!1),o({zooming:"in"})},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(QL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(10.000000, 10.625000)",children:[c.jsx(XL,{hover:e,fillOpacity:"0.56",children:c.jsx("path",{d:"M96,0 L96,63.75 L160.883594,63.75 C178.620995,63.75 193,49.4790764 193,31.875 C193,14.2709236 178.620995,0 160.883594,0 L96,0 Z",id:"PTZ-Zoom-Hover-Plus-Slice",fill:"url(#linearGradient-zoom9)"})}),c.jsxs(ZL,{active:a==="in",transform:"translate(96.000000, 0.000000)",children:[c.jsx("path",{d:"M0,0 L0,63.75 L64.8835938,63.75 C82.6209951,63.75 97,49.4790764 97,31.875 C97,14.2709236 82.6209951,0 64.8835938,0 L0,0 Z",id:"PTZ-Zoom-Active-Plus-Slice",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),c.jsx("path",{d:"M96,0 L96,5 L32.1164062,5 C17.4302083,5 5.48398392,16.5663708 5.01434007,30.9927914 L5.00363033,31.4308221 L5,31.875 C5,46.5608308 16.8905918,58.5089041 31.6677396,58.746397 L32.1164062,58.75 L96,58.75 L96,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L96,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)",transform:"translate(48.000000, 31.875000) scale(-1, 1) translate(-48.000000, -31.875000) "})]}),c.jsx("g",{id:"PTZ-Zoom-Icons-Section",transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:c.jsx("path",{d:"M117.149921,14.1184213 L124.420095,14.1184213 C124.657568,14.1184213 124.850079,14.3104799 124.850079,14.5473962 L124.850079,21.8005035 C124.850079,22.9850849 125.812631,23.9453779 127,23.9453779 C128.187369,23.9453779 129.149921,22.9850849 129.149921,21.8005035 L129.149921,14.5473962 C129.149921,14.3104799 129.342432,14.1184213 129.579905,14.1184213 L136.850079,14.1184213 C138.037448,14.1184213 139,13.1581283 139,11.9735469 C139,10.7889655 138.037448,9.82867248 136.850079,9.82867248 L129.579905,9.82867248 C129.342432,9.82867248 129.149921,9.63661388 129.149921,9.3996976 L129.149921,2.14487441 C129.149921,0.960292981 128.187369,-3.55271368e-15 127,-3.55271368e-15 C125.812631,-3.55271368e-15 124.850079,0.960292981 124.850079,2.14487441 L124.850079,9.3996976 C124.850079,9.63661388 124.657568,9.82867248 124.420095,9.82867248 L117.149921,9.82867248 C115.962552,9.82867248 115,10.7889655 115,11.9735469 C115,13.1581283 115.962552,14.1184213 117.149921,14.1184213 L117.149921,14.1184213 Z",id:"PTZ-Zoom-Icon-Plus",fill:"url(#linearGradient-zoom14)"})})]})},JL=b.g`
  opacity: 0;
  ${({active:e})=>e&&R`opacity: 1;`}

`,eO=b.g`
  opacity: 0;
  ${({hover:e})=>e&&R`opacity: 1;`}
`,tO=b.g`
`,nO=()=>{const[e,r]=h.useState(!1),{state:{zooming:a},actions:{zoom:o,stop:s}}=h.useContext(ya),u=h.useCallback(()=>{r(!1),o({zooming:"out"})},[o]),f=h.useCallback(()=>{s(),r(!0)},[s]),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]);return c.jsxs(tO,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:f,onTouchStart:u,onTouchEnd:f,transform:"translate(10.000000, 10.625000)",children:[c.jsx(eO,{hover:e,fillOpacity:"0.56",children:c.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",id:"PTZ-Zoom-Hover-Minus-Slice",fill:"url(#linearGradient-zoom10)"})}),c.jsxs(JL,{active:a==="out",children:[c.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),c.jsx("path",{d:"M97,0 L97,5 L33.1164062,5 C18.4302083,5 6.48398392,16.5663708 6.01434007,30.9927914 L6.00363033,31.4308221 L6,31.875 C6,46.5608308 17.8905918,58.5089041 32.6677396,58.746397 L33.1164062,58.75 L97,58.75 L97,63.75 L33.1164062,63.75 C15.3790049,63.75 1,49.4790764 1,31.875 C1,14.2709236 15.3790049,0 33.1164062,0 L97,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)"})]}),c.jsx("g",{transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:c.jsx("path",{d:"M2.14992117,10 C0.962552494,10 0,10.960293 0,12.1448744 C0,13.3294558 0.962552494,14.2897488 2.14992117,14.2897488 L21.8500788,14.2897488 C23.0374475,14.2897488 24,13.3294558 24,12.1448744 C24,10.960293 23.0374475,10 21.8500788,10 L2.14992117,10 Z",id:"PTZ-Zoom-Icon-Minus",fill:"url(#linearGradient-zoom15)"})})]})},rO=b.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`,aO=({debug:e=!1})=>{const{state:r}=h.useContext(ya);return c.jsxs(rO,{children:[c.jsxs(YL,{children:[c.jsx(zL,{}),c.jsx(HL,{}),c.jsx(GL,{}),c.jsx(FL,{})]}),c.jsxs(VL,{children:[c.jsx(nO,{}),c.jsx(KL,{})]}),e&&c.jsx("pre",{children:JSON.stringify(r,null,2)})]})};b.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${J5} {
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
`;b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({hasPadding:e})=>e&&`
    padding-bottom: 43px
  `}
;

  ${Me} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;b.div`
  background-color: ${({color:e})=>e&&`var(--${e})`};
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
`;b.div`
  ${ml};
  max-width: 245px;
  font-size: 10px;
`;b.div`
  ${ml};
  max-width: 245px;
  font-size: 12px;
`;b.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${Me} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;b.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;b.div`
  background-color: ${({color:e})=>e&&`var(--${e})`};
  height: 3px;
  width: 100%;
`;b.div`
  display: flex;
  height: 60px;
`;b.div`
  ${({hasRightData:e})=>e&&R`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${Me} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;b.div`
  padding: 0 12px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;b.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`;b.div`
  ${ml};
  ${({hasRightData:e})=>e?"max-margin: 140px;":"max-margin: 250px;"}};
  ${({hasMarginBottom:e})=>e&&"margin-bottom: 1px;"};

  color: var(--grey-a10);
  font-size: 10px;
`;b.div`
  font-family: var(--font-data);
  ${ml};
  ${({hasRightData:e})=>e?"max-width: 140px;":"max-width: 250px;"}

  color: var(--grey-11);
  font-size: 16px;
`;b.div`
  ${ml};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({hasMarginBottom:e})=>e&&"margin-bottom: 6px;"};
`;b.div`
  ${ml};
  max-width: 80px;
  color: var(--grey-11);
  font-size: 12px;
`;b.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 var(--grey-a5);
  background-color: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
  }

  ${({hasOnClick:e})=>e&&`
    cursor: pointer;
  `};
`;b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`;b.div`
  display: flex;
  ${pb} {
    margin-right: 10px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }
  flex-wrap: wrap;
`;b.div``;b.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;b.div`
  display: flex;
  justify-content: space-between;
`;b.div`
  button {
    margin: 0 10px 10px 0;
  }
`;b.div`
  flex-shrink: 0;
`;b.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  margin-top: 29px;
  min-height: 19px;
  color: var(--grey-10);
  font-size: 12px;
`;const iO=12;b.div`
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
`;b.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`;b.input`
  ${ac};
  color: var(--input-color-default);
  max-width: ${({maxWidth:e})=>e||"40px"};
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
  padding-right: ${iO/2}px;
`;const oO=pr`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;b.div`
  height: var(--input-height, 40px);
  animation: ${({shouldShake:e})=>e?oO:"none"} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`;b(dt)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`;b.div`
  display: flex;
  gap: 0 8px;
`;b.button`
  ${st};
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px var(--input-default-border-color);
  background-color: var(grey-2);
  pointer-events: ${({active:e})=>e?"auto":"none"};
  opacity: ${({active:e})=>e?"1":"0.5"};

  &:focus, &:hover {
    outline: 2px solid #838383;
  }
`;b.div`
  ${mT} {
    width: ${({width:e})=>e||"60px"};
  }
`;b.div``;b.div`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  text-shadow: 0px 0px 10px var(--white-a5);
  text-decoration: none;
  color: var(--grey-11);
`;b.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  text-decoration: none;
  color: var(--grey-11);
  margin: 28px 0;
`;b(dt)`
  margin-left: 10px;
`;b.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;const sg=b.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,lO=b.button`
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

  ${sg}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${sg}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,sO=({show:e,link:r,label:a="Share",copiedLabel:o="Copied"})=>{const[s,u]=h.useState(a),{copyToClipboard:f}=tp(),p=h.useCallback(()=>{f(r||window.location.href),u(o),setTimeout(()=>u(s),2e3)},[r,o,s,f]);return h.useEffect(()=>{u(a)},[a]),e?c.jsxs(lO,{onClick:p,children:[c.jsx(sg,{children:c.jsx(Se,{icon:"Link",size:16,color:"grey-10"})}),s]}):null},cg=b.div`
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
`,xb=R`
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

  ${cg}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${cg}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,yb=R`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,cO=b(Ge)`
  ${xb};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&R`
    &::after {
      ${yb};
    }
  `}
`,uO=b.button`
  ${st};
  ${xb};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&R`
    &::after {
      ${yb};
    }
  `}
`,dO=({show:e=!0,link:r,label:a="Back",$showDivider:o,$iconInGutter:s,onClick:u})=>{const f=h.useMemo(()=>c.jsxs(Ye.Fragment,{children:[c.jsx(cg,{children:c.jsx(Se,{icon:"Back",size:16,color:"grey-10"})}),a]}),[a]);return e?c.jsx(Ye.Fragment,{children:u?c.jsx(uO,{$showDivider:o,$iconInGutter:s,onClick:u,children:f}):r&&c.jsx(cO,{to:r,$showDivider:o,$iconInGutter:s,children:f})}):null},fO=b.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,hO=b.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,gO=b.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,pO=b.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,bb=b.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,wb=b(bb)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,Sb=R`
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
`,Cb=R`
  ${Sb};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${wb} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,mO=b(Ge)`
  ${Cb};
`,vO=b.button`
  ${st};
  ${Cb};
`,xO=b.span`
  ${Sb};
  pointer-events: none;
`,yO=b.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,bO=({showBreadcrumbs:e=!0,breadcrumbs:r=[],showHomeIcon:a=!0,back:o,share:s,$iconInGutter:u})=>{const{isLarge:f}=rp(),p=u!==void 0?u:f,m=e&&r.length>0;return c.jsxs(fO,{children:[c.jsxs(hO,{children:[o&&c.jsx(dO,{$showDivider:m,$iconInGutter:p,...o}),m?c.jsx(gO,{children:r.map((x,y)=>{const{text:v,href:k,onClick:C}=x,S=y===0,E=y===r.length-1,T=c.jsxs(Ye.Fragment,{children:[S&&a?c.jsx(wb,{children:c.jsx(Se,{icon:"Home",size:11,color:"grey-10"})}):null,v]});return c.jsx(Ye.Fragment,{children:c.jsxs(pO,{children:[C?c.jsx(vO,{onClick:C,type:"button",children:T}):k?c.jsx(mO,{to:k,children:T}):c.jsx(xO,{children:T}),E?null:c.jsx(bb,{children:c.jsx(Se,{icon:"Right",size:6,color:"grey-8"})})]})},y)})}):null]}),c.jsx(yO,{children:c.jsx(sO,{...s})})]})},_r=Ye.createContext({selected:"",setSelected:()=>{}}),sp=({children:e})=>{const[r,a]=h.useState("");return c.jsx(_r.Provider,{value:{selected:r,setSelected:a},children:e})},wO=b.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,SO=b.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,CO=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,kO=b.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,Cy=b.div`
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
`,kb=({layout:e="default",HeaderContent:r={},children:a})=>{const{PageHeaderArea:o,TabsElementArea:s,UtilityHeaderOptions:u}=r,f="content-layout-"+e;return c.jsxs(wO,{className:f,children:[u?c.jsx(bO,{...u}):null,o?c.jsx(SO,{children:c.jsx(c.Fragment,{children:o})}):null,s?c.jsxs(sp,{children:[c.jsx(CO,{children:c.jsx(kO,{children:c.jsx(c.Fragment,{children:s})})}),c.jsx(Cy,{children:c.jsx(c.Fragment,{children:a})})]}):c.jsx(Cy,{children:c.jsx(c.Fragment,{children:a})})]})},EO=b.div`
  min-height: ${({$contentHeight:e})=>e+"px"};
`,jO=b.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`,TO=({children:e})=>{const r=h.useRef(null),[a,o]=h.useState(0);return h.useEffect(()=>{r&&r.current&&o(r.current.clientHeight)},[r,e]),c.jsx(EO,{$contentHeight:a,children:c.jsx(jO,{ref:r,children:c.jsx(c.Fragment,{children:e})})})},ug=b.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,vd=b.div`
  background: var(--grey-10);
  flex: 1;
`,MO=b.div`
  flex: 0 0 20px;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`,$O=b.svg`
  transform: ${({$layout:e})=>e==="horizontal"?"rotate(0deg)":"rotate(90deg)"};
`,AO=b.svg`
  transform: rotate(0deg);
  ${({$direction:e})=>{switch(e){case"up":return"transform: rotate(-90deg);";case"down":return"transform: rotate(90deg);";case"left":return"transform: rotate(180deg);";default:return"transform: rotate(0deg);"}}};
`,LO=b.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout:e})=>e==="horizontal"?R`
    width: 16px;
    flex-direction: column;
    ${ug}{
      flex-direction: column;
    }

    ${vd}{
      width: 1px;
    }

  `:R`
      height: 16px;
      flex-direction: row;
      ${ug}{
        flex-direction: row;
      }
      ${vd}{
        height: 1px;
      }
  `}
`,OO=({state:e="default",layout:r="horizontal",arrowDirection:a})=>c.jsx(LO,{$layout:r,children:c.jsxs(ug,{children:[c.jsx(vd,{}),c.jsx(MO,{children:e==="default"?c.jsxs($O,{$layout:r,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M13 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M10 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M7 14.875L7 5.125",strokeLinecap:"round",strokeLinejoin:"round"})]}):c.jsx(AO,{$direction:a,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625",stroke:"#9BA1A6",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx(vd,{})]})}),zO=b.div`
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
`,dg=b.div`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout:e,$minDimension:r})=>e==="vertical"?R`
    ${r?`min-height: ${r}px;`:null};
  `:R`
    ${r?`min-width: ${r}px;`:null};
  `}
`,Ii=b.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`,DO=b.div`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize:e})=>e}px;
  display: ${({$collapseState:e})=>e==="collapsed"?"none":"block"};
  transition:
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);

  ${({$layout:e,$maxDimension:r,$minDimension:a})=>e==="vertical"?R`
    ${a?`min-height: ${a}px;`:"0"};
    ${r?`max-height: ${r}px;`:"none"};
    ${Ii}{
      min-height: ${a}px;
    }
  `:R`
    ${a?`min-width: ${a}px;`:"0"};
    ${r?`max-width: ${r}px;`:"none"};
    ${Ii}{
      min-width: ${a}px;
    }
  `}


  ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="collapsing"?R`
      transition: none;
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${Ii}{
        flex: 0 0 ${a}px;
        min-width: ${a}px;
        opacity: 0.5;
      }
    `:null}

    ${({$collapseState:e})=>e==="collapsed"?R`
      ${Ii}{
        display: none;
      }
    `:null}

    ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="peeking"?R`
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${Ii}{
        min-width: ${a}px;
        opacity: 0.5;
      }
    `:null}

    ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="opening"?R`
    ${e==="horizontal"?"min-width: 0":"min-height: 0"};

    ${Ii}{
      min-width: ${a}px;
    }
    `:null}
`,fg=b.div`
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

  ${({$fauxHover:e})=>e==="false"?R`
    > div {
      opacity: 0.6;
    }
  `:R`
    > div {
      opacity: 1;
    }
  `}

`,_O=b.section`
  box-sizing: border-box;
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised:e})=>e==="true"?R`
    opacity: 1;
  `:null}

  ${({$layout:e})=>e==="vertical"?R`
    flex-direction: column;
    ${dg}{}
    ${fg}{
      cursor: row-resize;
    }
  `:null}

  ${({$reverse:e})=>e==="true"?R`
    ${dg}{ order: 2; }
    ${fg}{ order: 1; }
  `:null}
`,RO=h.forwardRef(({mainArea:e,sideArea:r,layout:a="horizontal",reverse:o,dividerSize:s=16,persist:u=!1,persistenceKey:f="resizable_ui",showDebug:p},m)=>{const y="resizable_layout_"+f,v=1,k=50,C=r.defaultSize||350,S=r.minSize||0,E=r.maxSize,T=e.minSize,[$,L]=h.useState(!1),[N,z]=h.useState(),[_,H]=h.useState(),[j,A]=h.useState(),[P,V]=h.useState(r.defaultCollapsed?"collapsed":"open"),[U,Z]=h.useState(C),[re,X]=h.useState(C),[te,B]=h.useState(C),q=h.useRef(null),ae=h.useRef(null),[ie,de]=C0(`${y}_size`,null),[O,W]=C0(`${y}_state`,null),[Q,le]=C0(`${y}_quick_open_size`,null);h.useEffect(()=>{$||(u&&(ie&&Z(ie),O&&V(O),Q&&B(Q)),L(!0))},[$,u,O,ie,Q]),h.useEffect(()=>{!$||!r.onSideAreaStateChange||r.onSideAreaStateChange(P)},[$,r,P]),h.useImperativeHandle(m,()=>({open:()=>{fe()},close:()=>{pe()},reset:()=>{he()}}));const he=h.useCallback(()=>{Z(C),V("open"),de(null),W(null)},[Z,C,V,de,W]),pe=h.useCallback(()=>{V("collapsed"),Z(v),X(v),u&&(de(v),W("collapsed"),le(re))},[Z,V,W,de,le,re,u]),fe=h.useCallback(()=>{V("open");let en;U>v&&ae.current?en=a==="horizontal"?ae.current.clientWidth:ae.current.clientHeight:en=te,X(en),Z(en),u&&(de(Math.round(U)),W("open"))},[u,W,de,te,U,a]),ve=h.useCallback(()=>{P==="collapsing"&&U<S-k?pe():(X(Math.round(U)),B(Math.round(U)),fe()),A(!1)},[pe,fe,S,U,P]),me=h.useCallback(en=>{en.preventDefault();const{clientX:Rr,clientY:vr}=en;X(P==="collapsed"?U:bs(U,S,E)),z({x:Rr,y:vr}),H({x:0,y:0}),A(!0)},[U,E,S,P]),Te=()=>{j&&ve()},pt=h.useCallback(en=>{const{clientX:Rr,clientY:vr}=en;let _n,Rn=P;if(j&&N&&re){if(H({x:N.x-Rr,y:N.y-vr}),a==="horizontal"){const Wt=(q.current?.clientWidth??0)-s-(T||0);o?_n=bs(re-(N.x-Rr),null,Wt):_n=bs(re+(N.x-Rr),null,Wt)}else{const Wt=(q.current?.clientHeight??0)-s-(T||0);o?_n=bs(re-(N.y-vr),null,Wt):_n=bs(re+(N.y-vr),null,Wt)}if(r.collapsable){const Wt=_n<S-k;P==="open"&&Wt||P==="opening"&&Wt?Rn="collapsing":P==="collapsing"&&!Wt?Rn="open":P==="collapsed"?Rn="peeking":P==="peeking"&&!Wt&&(Rn="opening")}Z(_n),V(Rn)}},[Z,H,j,N,re,P,a,s,T,S,o,r.collapsable]),ut=h.useCallback(()=>{j&&ve()},[j,ve]);h.useEffect(()=>(document.addEventListener("mouseleave",ut),()=>{document.removeEventListener("mouseleave",ut)}),[ut]);const mt=()=>P==="collapsed"||P==="peeking"?a==="horizontal"?o?"right":"left":o?"down":"up":a==="horizontal"?o?"left":"right":o?"up":"down",Dn=()=>P==="collapsed"||P==="peeking"||P==="collapsing"?"arrow":"default",si=c.jsxs(zO,{children:[c.jsxs("div",{children:[c.jsx("span",{children:"State:"})," ",P]}),c.jsxs("div",{children:[c.jsx("span",{children:"Position:"})," ",N?.x,", ",N?.y]}),c.jsxs("div",{children:[c.jsx("span",{children:"Difference:"})," ",_?.x,", ",_?.y]}),c.jsxs("div",{children:[c.jsx("span",{children:"sideAreaStartBasis:"})," ",re]}),c.jsxs("div",{children:[c.jsx("span",{children:"sideAreaBasis:"})," ",U]}),c.jsxs("div",{children:[c.jsx("span",{children:"lastOpenSize:"})," ",te]})]});return c.jsxs(_O,{ref:q,onPointerMove:pt,onPointerUp:Te,$initialised:$?"true":"false",$layout:a,$reverse:o?"true":"false",children:[c.jsx(dg,{$layout:a,$minDimension:T,children:c.jsx(c.Fragment,{children:e.content})}),c.jsx(fg,{onPointerDown:me,onDoubleClick:he,$size:s,$fauxHover:j?"true":"false",children:c.jsx(OO,{state:Dn(),layout:a,arrowDirection:mt()})}),c.jsx(DO,{ref:ae,style:{flexBasis:`${U}px`},$defaultSize:C,$minDimension:S,$maxDimension:E,$layout:a,$collapseState:P,children:c.jsx(Ii,{children:c.jsx(c.Fragment,{children:r.content})})}),p?si:null]})}),bs=(e,r,a)=>{let o=e;return o=a&&o>a?a:o,o=r&&o<r?r:o,o},Eb=50,jb=68,oc=b.div`
  display: flex;
`,NO=b.div``,lc=b.div`
  padding: 0;
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${({maxWidth:e})=>e&&R`
      & > div {
        max-width: ${e};
      }
    `}
`,HO=b.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,ky=b.div`
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({legacyLayout:e,paddingOverride:r,maxWidth:a})=>e&&R`
    padding: ${r||"40px 20px"};

    @media ${vn.medium} {
      padding: ${r||"40px"};
    }

    @media ${vn.large} {
      max-width: ${a||"1200px"};
      padding: ${r||"70px 90px"};
    }
  `}
`,Bd=b.div`
  opacity: 0;
  transition: opacity var(--speed-fast) var(--easing-primary-in-out);

  ${({compact:e})=>e&&R`
    font-size:14px;
  `}
`,ai=b.div`
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
`,Tb=b.div`
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
`,cp=R`
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
`,BO=b.a`
  display: flex;
  text-decoration: none;
`,IO=b.div`
  margin-left: 15px;
`,UO=b.div`
  ${cp}

  ${({$menuOpen:e})=>e&&R`
  ${Bd}{
    opacity: 1;
  }
`}

  &:hover ${ai}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${Me}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }
`,GO=b(Ge)`
  ${cp}

  ${({$menuOpen:e})=>e&&R`
    ${Bd}{
      opacity: 1;
    }
  `}

  &:hover ${ai}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${Me}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&R`
    color: var(--grey-12);

    ${ai},
    &:hover ${ai}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,PO=b.button`
  ${cp}

  ${({menuOpen:e})=>e&&R`
    ${Bd}{
      opacity: 1;
    }

    ${Tb}{
      opacity: 1;
      transition: opacity var(--speed-normal) var(--easing-primary-in-out) var(--speed-fast);
    }
  `}

  &:hover ${ai}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${Me}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({isActive:e})=>e&&R`
    ${ai},
    &:hover ${ai}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,xd=({hasSubmenu:e=!1,contextKey:r=-1,submenuOpen:a,menuOpen:o,title:s,href:u,icon:f,compact:p,isActive:m,isExternalLink:x,onClickCallback:y})=>{const v=c.jsxs(Ye.Fragment,{children:[c.jsx(ai,{compact:p,children:c.jsx(Se,{icon:f,color:m?"inverse":"dimmed",size:20})}),c.jsx(Bd,{compact:p,children:s}),e?c.jsx(Tb,{children:c.jsx(Se,{icon:a?"Up":"Down",color:"dimmed"})}):null]});return e?c.jsx(PO,{menuOpen:o,isActive:m,onClick:()=>y&&y(r),children:v}):x?c.jsx(BO,{href:u,target:"_blank",children:c.jsxs(UO,{$menuOpen:o,children:[v,c.jsx(IO,{children:c.jsx(Se,{icon:"ExternalLink",color:"dimmed",size:12})})]})}):c.jsx(GO,{$menuOpen:o,to:u||"#",$isActive:m,onClick:()=>y&&y(r),children:v})},qO=(e,r)=>{switch(r.type){case"SET_MENU":{const a=localStorage.getItem(window.location.hostname+"_isMenuOpen");let o=a==="true"||a===null&&!!r.data.defaultMenuOpen,s=a==="true"&&!!r.data.canAlwaysPin;const u=r.data.desktopSize==="xlarge"||!!r.data.canAlwaysPin;return r.data.desktopSize==="xxlarge"&&r.data.canAlwaysPin===!1&&(o=!0,s=!0),{...e,desktopSize:r.data.desktopSize,isMenuOpen:o,isMenuPinned:s,canPin:u}}case"SET_OPEN":return e.isMenuOpen===!0||e.desktopSize==="xxlarge"&&!e.canPin?e:{...e,isMenuOpen:!0};case"SET_CLOSE":return e.isMenuOpen===!1||e.desktopSize==="xxlarge"&&!e.canPin||e.isMenuPinned===!0?e:{...e,isMenuOpen:!1};case"TOGGLE_PIN":{if(!e.canPin)return e;let a=!0;return e.isMenuPinned?(localStorage.setItem(window.location.hostname+"_isMenuOpen","false"),a=!1):localStorage.setItem(window.location.hostname+"_isMenuOpen","true"),{...e,isMenuOpen:a,isMenuPinned:!e.isMenuPinned}}default:return console.error(`Action ${r.type} not registered.`),e}},WO={desktopSize:"large",isMenuPinned:!1,isMenuOpen:!1,canPin:!1},FO=(e,r)=>{const{activeScreen:a}=rp(),[o,s]=h.useReducer(qO,WO),u=h.useCallback((x,y,v)=>{s({type:"SET_MENU",data:{defaultMenuOpen:x,desktopSize:v,canAlwaysPin:y}})},[]),f=h.useCallback(()=>{s({type:"SET_OPEN"})},[]),p=h.useCallback(()=>{s({type:"SET_CLOSE"})},[]),m=h.useCallback(()=>{s({type:"TOGGLE_PIN"})},[]);return h.useLayoutEffect(()=>{u(e,r,a)},[a,e,r,u]),{menuState:o,setMenuOpen:f,setMenuClose:p,togglePinned:m}},YO=b.ul`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`,VO=b.div`
  display: block;
  height: 40px;
  margin-left: 40px;
`,ZO=b.div`
  overflow: hidden;
`,XO=b.span`
  display: block;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
`,Mb=b(Ge)`
  ${st};
  display: block;
`,QO=b.div`
  margin-left: 15px;
`,$b=b.a`
  ${st};
  display: flex;
  align-items: center;
`,Ey=b.li`
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

  ${Mb}, ${$b}{
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    ${({isActive:e})=>R`
    
      &:hover {
        color: var(--grey-12);
      }

      ${e&&R`
        &, &:hover {
          color: var(--grey-11);
          font-weight: 600;
        }
      `}

    `};

  }
`,hg=b.div`
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

`,KO=b.div`
  min-height: ${({mobileMenu:e})=>e?"30px":"70px"};
  width: inherit;

  ${hg}{
    display: grid;
    grid-template-rows: 0fr;
  };

  ${({open:e})=>e&&R`
    ${hg}{
      grid-template-rows: 1fr;
      
      transition:
        grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
        opacity var(--speed-fast) var(--easing-primary-in-out);
      
      opacity: 1;
    }
  `};
`,Ab=({item:e,menuOpen:r,submenuOpen:a,contextKey:o,topLevelPath:s,mobileMenu:u=!1,onClickCallback:f})=>{const{icon:p,title:m,href:x,submenu:y,isExternalLink:v}=e,k=s===x,C=h.useRef(null),S=JO(y,f)||[],E=S.length>0;return c.jsxs(KO,{open:a,mobileMenu:u,children:[c.jsx(xd,{title:m,href:x,isActive:k,icon:p,hasSubmenu:E,isExternalLink:v,submenuOpen:a,menuOpen:r,onClickCallback:f,contextKey:o}),E?c.jsx(hg,{ref:C,children:c.jsx(ZO,{children:S})}):null]})},JO=(e,r)=>{if(!e)return;const a=[],o=[];return a.push([]),e.forEach((s,u)=>{const{title:f,href:p,isExternalLink:m}=s;p?m?a[a.length-1].push(c.jsx(Ey,{isActive:!1,children:c.jsxs($b,{href:p,target:"_blank",children:[f,c.jsx(QO,{children:c.jsx(Se,{icon:"ExternalLink",color:"dimmed",size:10})})]})},u)):a[a.length-1].push(c.jsx(Ey,{isActive:!1,children:c.jsx(Mb,{to:p,onClick:()=>r&&r(-1),children:f})},u)):(a[a.length-1].length>1&&a.push([]),a[a.length-1].push(c.jsx(VO,{children:c.jsx(XO,{children:f})},u)))}),a.forEach((s,u)=>{o.push(c.jsx(YO,{children:s},u))}),o},ez=b(Ge)`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`,tz=b.div`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`,Lb=b.div`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`,nz=b.object``,rz=b.object`
  max-width: 180px;
`,az=b.div``,iz=b.div`
  background: var(--global-element-background);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`,jy=b.div`
  min-height: 70px;
`,oz=b.div`
  position: relative;
  height: 100%;
  ${({isPinned:e})=>R`
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
  `};
`,lz=b.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${({open:e,desktopSize:r})=>R`
    background-color: var(--global-element-background);
    box-shadow: 0px 0px 7px 0px var(--primary-a2);
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
    border-right: 1px solid var(--dividing-line);

    ${r==="xxlarge"?"":R`
      transition: width var(--speed-normal) var(--easing-primary-in);
    `};

    ${Lb}{
      transition: opacity var(--speed-normal) var(--easing-primary-in-out);
      opacity: ${e?1:0};
    }
  `}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`,sz=b.div`
  width: var(--global-menu-width-open);
  display: flex;
  flex-direction: column;
  height: 100%;
`,cz=({content:e,home:r="/",logoMark:a,logoText:o,keepOpenText:s="Keep Open",autoHideText:u="Auto-Hide",supportUrl:f,supportText:p="Help & Support",defaultMenuOpen:m=!0,canAlwaysPin:x=!1,onMenuToggle:y=()=>{}})=>{const{menuState:v,setMenuOpen:k,setMenuClose:C,togglePinned:S}=FO(m,x),[E,T]=h.useState(0),$=zr(),L=h.useCallback(H=>{H.pointerType!=="touch"&&k()},[k]),N=h.useCallback(()=>{C()},[C]),z=h.useCallback(H=>{H.pointerType!=="touch"&&S()},[S]);h.useEffect(()=>{y(v.isMenuOpen)},[v.isMenuOpen,y]);const _=h.useCallback(H=>{H!==-1&&T(E!==H?H:-1)},[T,E]);return c.jsx(oz,{isPinned:v.isMenuPinned,children:c.jsx(c.Fragment,{children:Ks.createPortal(c.jsx(lz,{open:v.isMenuOpen,desktopSize:v.desktopSize,onPointerEnter:v.isMenuPinned?()=>{}:L,onTouchStart:()=>console.log("touch"),onMouseLeave:v.isMenuPinned?()=>{}:N,children:c.jsxs(sz,{children:[c.jsxs(ez,{to:r,children:[c.jsx(tz,{children:a?c.jsx(nz,{type:"image/svg+xml",data:a}):c.jsx(q5,{})}),c.jsx(Lb,{children:o?c.jsx(rz,{type:"image/svg+xml",data:o}):c.jsx(uT,{})})]}),c.jsx(az,{children:e.items.map((H,j)=>c.jsx(Ab,{topLevelPath:F5($.pathname),contextKey:j,menuOpen:v.isMenuOpen,submenuOpen:j===E&&v.isMenuOpen,onClickCallback:_,item:H,focusedContext:E},j))}),c.jsxs(iz,{children:[f&&c.jsx(jy,{children:c.jsx(xd,{compact:!0,isActive:!1,icon:"Question",title:p,href:f,menuOpen:v.isMenuOpen})}),v.canPin?c.jsx(jy,{children:c.jsx(xd,{compact:!0,isActive:!1,icon:v.isMenuOpen&&v.isMenuPinned?"Left":"Menu",title:v.isMenuPinned?s:u,onClickCallback:z,menuOpen:v.isMenuOpen})}):null]})]})}),document.body)})})},uz=b.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,dz=b.div`
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
`,fz=b.div`
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
`,hz=b.div`
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
`,gz=b.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
`,Ob=b.div`
  cursor: pointer;
`,pz=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,mz=b.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${Ob}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,vz=b.pre`
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
`,xz=b.div`
`,yz=({item:e,onUserDrawerMetaClick:r,copySuccessMessage:a,includeCopyTitle:o})=>{const{icon:s,title:u,subTitle:f,notes:p,hasCopyIcon:m}=e,{copyToClipboard:x}=tp(),[y,v]=h.useState(!1),[k,C]=h.useState("dimmed"),S=h.useCallback(($,L,N)=>{let z;o?z=($||"")+`
`+(L||"")+`
`+(N||""):z=(L||"")+`
`+(N||""),x(z),v(!0),setTimeout(()=>{v(!1)},1500)},[o,x]),E=h.useCallback(()=>{C("mono")},[]),T=h.useCallback(()=>{C("dimmed")},[]);return c.jsx(h.Fragment,{children:u!==""&&c.jsx(Ob,{onClick:r,children:c.jsxs(uz,{children:[c.jsxs(pz,{children:[c.jsxs(gz,{children:[c.jsx(Se,{icon:s,size:10,color:"dimmed"}),c.jsx(dz,{title:u,children:u})]}),c.jsxs(xz,{children:[y&&c.jsx(vz,{children:a!==""?a:"Copied!"}),m?c.jsx(mz,{onClick:()=>S(u,f,p),onMouseEnter:E,onMouseLeave:T,children:c.jsx(Se,{icon:"Copy",size:12,color:k})}):null]})]}),f!==""?c.jsx(fz,{title:f,children:f}):null,p!==""?c.jsx(hz,{title:p,children:p}):null]})})})},bz=b.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
  align-items: center;
  cursor: pointer;
  svg {
    margin-top: 7px;
  }
`,wz=b.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,Sz=b.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,Cz=b.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,Ty=({icon:e="Settings",title:r,subTitle:a,onClickCallback:o=()=>{}})=>c.jsxs(bz,{onClick:o,children:[c.jsx(Se,{icon:e,size:18,color:"dimmed"}),c.jsxs(wz,{children:[c.jsx(Sz,{children:r}),c.jsx(Cz,{children:a})]})]}),kz=b.div``,Ez=b.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${vn.medium} {
    position: static;
    bottom: 0;
  }
`,My=b.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,jz=b.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,Tz=b.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,Mz=b.div`
    padding: 0 20px;
`,$y=b.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,Ay=b.li`
  padding: 10px 0;
`,$z=b.div`
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
`,Ly=b(Ge)`
  ${st};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&R`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,Az=b.div`
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
  padding-left:  ${({icon:e})=>e!==""?"31px;":"21px;"};
`,Lz=b.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,Oz=b.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({icon:e})=>e!==""?"136px;":"164px;"};
  color: var(--grey-11);
  opacity: 0.5;
`,zz=e=>{if(e)return document.documentElement.setAttribute("lang",e),e;const r=navigator.language.split("-")[0],a=document.documentElement.lang;return a||(document.documentElement.setAttribute("lang",r),r)},zb=({hasLanguage:e=!1,selectedLanguageText:r="",languageOptionsText:a="LANGUAGE / 言語",selectedLangAttribute:o,hasLogout:s=!0,logoutLink:u="/logout",logoutText:f="Logout",hasCurrentUser:p=!0,currentUserText:m="Current User",accountOptionText:x="Account Options",userSubmenu:y=[],userDrawerBespoke:v,loggedInUser:k,hasSwitchTheme:C=!1,isLightMode:S=!0,switchThemeText:E="SWITCH THEME",selectedThemeText:T="",onLogout:$=()=>{},onLanguageToggle:L=()=>{},closeOnClick:N,onThemeToggle:z=()=>{},userDrawerFooter:_={icon:"",title:""},copySuccessMessage:H,includeCopyTitle:j,onUserDrawerMetaClick:A=()=>{},userDrawerMeta:P,hasUserDrawerMeta:V,hasUserDrawerFooter:U})=>{const{icon:Z,title:re}=_,X=h.useCallback(async B=>{B.preventDefault(),await $(),window.location.assign(u),N&&N()},[N,u,$]),te=h.useCallback(()=>{N&&N()},[N]);return h.useEffect(()=>{zz(o)},[o]),c.jsxs(h.Fragment,{children:[c.jsx(kz,{children:c.jsxs(c.Fragment,{children:[p?c.jsxs(jz,{children:[c.jsx(My,{children:m}),k]}):null,V?c.jsx(Lz,{children:P?.map((B,q)=>c.jsx(yz,{onUserDrawerMetaClick:A,item:B,includeCopyTitle:j,copySuccessMessage:H},q))}):null,y.length>0?c.jsxs(Tz,{children:[c.jsx(My,{children:x}),c.jsx($y,{children:y.map(({text:B,href:q},ae)=>c.jsx(Ay,{children:c.jsx(Ly,{to:q,onClick:te,children:B})},ae))})]}):null,v||null,s?c.jsx(Mz,{children:c.jsx($y,{children:c.jsx(Ay,{children:c.jsx(Ly,{onClick:X,to:u,children:f})})})}):null]})}),c.jsxs(Ez,{children:[C&&c.jsx(Ty,{icon:S?"LightMode":"DarkMode",title:E,subTitle:T,onClickCallback:z}),e&&c.jsx(Ty,{icon:"Language",title:a,subTitle:r,onClickCallback:L}),U?c.jsxs(Az,{title:re,icon:Z,children:[Z?c.jsx($z,{children:c.jsx(Se,{icon:Z,size:14,color:"dimmed"})}):null,c.jsx(Oz,{icon:Z,children:re})]}):null]})]})},Dz=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,_z=b.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,Rz=b.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,Nz=b.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${e=>e.image?"block":"none"};
`,Hz=b.div`
  margin-left: 20px;
`,Bz=b.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,Iz=b.div`
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
`,Uz=b.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,Gz=({imgUrl:e,title:r,message:a,time:o})=>c.jsxs(Dz,{children:[c.jsx(_z,{children:e?c.jsx(Nz,{image:e}):c.jsx(Rz,{})}),c.jsxs(Hz,{children:[c.jsx(Bz,{children:r}),c.jsx(Iz,{children:a}),c.jsx(Uz,{children:o})]})]}),Oy=b.div`
  display: flex;
  flex-direction: column;
`,k0=b.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,Pz=b.div`
  border-bottom: var(--dividing-line) 1px solid;
`,zy=(e,r)=>e.map((a,o)=>c.jsx(Pz,{children:c.jsx(Gz,{...a})},`alert-${r}-${o}`)),Db=({read:e,unread:r,noNotificationsText:a="No new notifications",readNotificationsText:o="New",unreadNotificationsText:s="Read"})=>e.length===0&&r.length===0?c.jsx(Oy,{children:c.jsx(k0,{children:a})}):c.jsxs(Oy,{children:[r&&c.jsxs(h.Fragment,{children:[c.jsx(k0,{children:o}),zy(r,"unread")]}),e&&c.jsxs(h.Fragment,{children:[c.jsx(k0,{children:s}),zy(e,"read")]})]}),_b=R`
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

`,qz=b.div`
  ${_b};

  ${({themeColor:e})=>e?R`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:R`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,Rb=b.span`
  display: inline-block;
`,Nb=b.span``,Hb=R`
  ${_b};
  text-decoration: none;

  ${({themeColor:e})=>e?R`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:R`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({themeColor:e})=>e?R`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:R`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,Dy=b.div`
  a {
    ${Hb};
  }
`,Wz=b.div`
  button {
    ${st};
    ${Hb};
  }
`,Fz=b.div`
  ${({ready:e,minWidth:r})=>R`
    
    visibility: ${e?"visible":"hidden"};
    opacity: ${e?"1":"0"};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${Rb}, ${Nb}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${r}px;`};
    }
  `};
`,Yz=({text:e,color:r,linkHref:a,linkTo:o,linkText:s,onClick:u})=>{const f=h.useRef(null),p=h.useRef(null),[m,x]=h.useState(!1),[y,v]=h.useState(!1),[k,C]=h.useState(0);h.useEffect(()=>{x(!1);const L=setTimeout(()=>{const N=f.current?.getBoundingClientRect().width??0,z=p.current?.getBoundingClientRect().width??0,_=N>=z?N:z;C(Math.ceil(_)),x(!0)},100);return()=>clearTimeout(L)},[e,s]);const S=h.useMemo(()=>c.jsx(Rb,{ref:f,children:e}),[e]),E=h.useMemo(()=>u||o||a?c.jsx(Nb,{ref:p,children:s||e}):null,[u,o,a,s,e]),T=h.useMemo(()=>m?c.jsx(h.Fragment,{children:y?E:S}):c.jsxs(h.Fragment,{children:[S,E]}),[m,y,S,E]),$=h.useMemo(()=>u?c.jsx(Wz,{themeColor:r,children:c.jsx("button",{onClick:u,type:"button",children:T})}):o?c.jsx(Dy,{themeColor:r,children:c.jsx(Ge,{to:o,children:T})}):a?c.jsx(Dy,{themeColor:r,children:c.jsx("a",{href:a,children:T})}):c.jsx(qz,{themeColor:r,children:S}),[u,o,a,r,T,S]);return c.jsx(Fz,{ready:m,minWidth:k,onPointerEnter:()=>m&&v(!0),onPointerLeave:()=>m&&v(!1),children:$})},Vz=b.div`
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
`,Zz=b.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,Xz=b.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,Qz=b.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Kz=b.input`
  ${ac};
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
`,Jz=b.div`
  height: inherit;
  display: flex;
  gap: 0;
`,eD=pr`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,E0=b.button.attrs({type:"button"})`
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

  ${({$isActive:e})=>e&&R`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${eD} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,tD=b.div``,j0=b.div`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: 56px;
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;

  width: ${({baseWidth:e})=>e||"200px"};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({isOpen:e})=>e&&R`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,nD=b.div`
    overflow-y: scroll;
    margin-right: -17px;
`,Bb=({hasNotifications:e=!1,hasLanguage:r=!1,selectedLanguageText:a="",languageOptionsText:o,selectedLangAttribute:s,hasLogout:u=!0,logoutLink:f="/logout",logoutText:p="Logout",hasSearch:m=!1,hasCurrentUser:x=!0,currentUserText:y="Current User",accountOptionText:v="Account Options",searchPlaceholder:k="Search for devices, analysis tasks, etc.",userSubmenu:C=[],userDrawerBespoke:S,loggedInUser:E,notificationsHistory:T,customDrawer:$,hasSwitchTheme:L=!1,isLightMode:N=!0,switchThemeText:z="SWITCH THEME",selectedThemeText:_="",onLogout:H=()=>{},onLanguageToggle:j=()=>{},onThemeToggle:A=()=>{},userDrawerFooter:P,userDrawerMeta:V,onUserDrawerMetaClick:U=()=>{},hasUserDrawerMeta:Z,copySuccessMessage:re,includeCopyTitle:X,hasUserDrawerFooter:te,badge:B})=>{const[q,ae]=h.useState(null),ie=de=>{ae(O=>O===de?null:de)};return c.jsx(Vz,{children:c.jsxs(c.Fragment,{children:[m?c.jsxs(Xz,{children:[c.jsx(Qz,{children:c.jsx(Se,{icon:"Search",size:16,color:"grey-6"})}),c.jsx(Kz,{placeholder:k})]}):c.jsx("div",{}),c.jsxs(Zz,{children:[B&&c.jsx(Yz,{...B}),c.jsxs(Jz,{children:[$&&c.jsx(E0,{$isActive:q==="custom",onClick:()=>ie("custom"),children:c.jsx(fb,{...$})}),e&&c.jsx(E0,{$isActive:q==="notifications",onClick:()=>ie("notifications"),children:c.jsx(Se,{icon:"Notifications",size:20,color:"dimmed"})}),c.jsx(E0,{$isActive:q==="user",onClick:()=>ie("user"),children:c.jsx(Se,{icon:"UserProfile",size:20,color:"dimmed"})})]})]}),Ks.createPortal(c.jsxs(tD,{children:[c.jsx(j0,{isOpen:q==="user",children:c.jsx(zb,{hasLanguage:r,hasLogout:u,logoutLink:f,logoutText:p,hasCurrentUser:x,currentUserText:y,accountOptionText:v,userSubmenu:C,userDrawerBespoke:S,loggedInUser:E,onLogout:H,onLanguageToggle:j,selectedLanguageText:a,languageOptionsText:o,selectedLangAttribute:s,hasSwitchTheme:L,isLightMode:N,switchThemeText:z,selectedThemeText:_,onThemeToggle:A,onUserDrawerMetaClick:U,userDrawerFooter:P,userDrawerMeta:V,hasUserDrawerMeta:Z,copySuccessMessage:re,includeCopyTitle:X,hasUserDrawerFooter:te})}),e?c.jsx(j0,{isOpen:q==="notifications",baseWidth:"300px",children:c.jsx(nD,{children:T?c.jsx(Db,{...T}):null})}):null,$&&c.jsx(j0,{isOpen:q==="custom",baseWidth:$.width?$.width:"200px",children:c.jsx(c.Fragment,{children:$.customComponent})})]}),document.body)]})})},Ib=b.div`
  display: flex;
  flex-direction: row;
`,up=({children:e,defaultTabId:r})=>{const{setSelected:a}=h.useContext(_r);return h.useEffect(()=>{a(r)},[r,a]),c.jsx(Ib,{children:c.jsx(c.Fragment,{children:e})})},rD=b.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`,aD=b.label`
  height: 40px;
  ${({theme:e})=>R`
    font-family: ${e.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({active:e})=>e?"600":"500"};
  letter-spacing: 0.09px;
  color: ${({active:e})=>e?"var(--primary-11)":"var(--grey-11)"};
  cursor: pointer;
  border-bottom: ${({active:e})=>e?"2px solid var(--primary-11)":"2px solid transparent"};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
  user-select: none;
`,Hs=({children:e,tabFor:r,onClick:a,...o})=>{const{selected:s,setSelected:u}=h.useContext(_r),f=h.useCallback(p=>{a&&a(p),u(r)},[a,u,r]);return c.jsx(rD,{...o,onClick:f,children:c.jsx(aD,{active:s===r,children:c.jsx(c.Fragment,{children:e})})})},iD=b.div`
`,ga=({children:e,tabId:r,...a})=>{const{selected:o}=h.useContext(_r);return o===r?c.jsx(iD,{...a,children:c.jsx(c.Fragment,{children:e})}):null},oD=b.button`
  ${st}
  flex-basis: auto;
  flex-grow: 1;
`,lD=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({theme:e})=>R`
    transition: border var(--speed-normal) var(--easing-primary-in-out);
    border-bottom: 5px solid ${e.colors.menu.indicator};

    ${Me} {
      [stroke]{
        stroke: var(--dimmed);
      }
    }

    &:hover {
      border-bottom-color: ${e.colors.menu.hover};
      ${Me} {
        [stroke]{
          stroke: ${e.colors.menu.hover};
        }
      }
    }
  `};

  ${({isActive:e,theme:r})=>e&&R`
    &, &:hover {
      border-bottom-color: ${r.colors.menu.active};
      ${Me} {
        [stroke]{
          stroke: ${r.colors.menu.active};
        }
      }
    }
  `}
`,Nu=({tabFor:e,icon:r,closeId:a,counter:o,status:s,...u})=>{const{selected:f,setSelected:p}=h.useContext(_r),m=h.useCallback(x=>{p(f===x?a:x)},[a,f,p]);return c.jsx(oD,{...u,onClick:()=>m(e),children:c.jsx(lD,{isActive:f===e,children:c.jsx(fb,{icon:r,status:s,counter:o})})})};b.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${({active:e})=>e?R`
    border-bottom: 3px solid var(--primary-11);
    `:R`
    border-bottom: 3px solid transparent;
  `};
  ${Me} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`;b.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({active:e})=>e?"var(--primary-11)":"var(--grey-11)"};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;b.div`
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
`;b.div`
  margin-left: 12px;
  margin-right: 20px;
`;b.div``;b.div`
  padding-top: 10px;
  padding-left: ${({paddingLeft:e})=>e||"87px"};
  box-shadow: 0 -5px 5px 0 var(--black-a1);
  border-bottom: 1px solid var(--grey-6);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;const sD=b.button`
  ${st}
  
  font-family: var(--font-ui);
  background-color: var(--global-element-background);
  border-top: 1px solid var(--dividing-line);
  font-weight: 400;
  color: var(--grey-10);
  
  height: ${Eb}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`,cD=b.div`
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
`,uD=b.div`
  text-transform: uppercase;
`,dD=({closeId:e,closeText:r="CLOSE MENU",children:a,formAction:o,...s})=>{const{setSelected:u}=h.useContext(_r);return c.jsxs(sD,{onClick:()=>u(e),...s,children:[c.jsx(cD,{children:c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:16})}),c.jsx(uD,{children:r})]})},fD=b.div`
  position: relative;
  min-height: calc(100vh - ${jb+Eb}px);
  width: 100%;
  overflow-y: scroll;
`,hD=b.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,gD=({closeId:e,children:r})=>{const{selected:a}=h.useContext(_r);return a===e?null:c.jsx(fD,{children:c.jsx(hD,{children:c.jsx(c.Fragment,{children:r})})})},pD=b.div``,_y=b.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--dividing-line);
`,mD=({content:e,supportUrl:r,supportText:a="Help & Support",closeId:o})=>{const[s,u]=h.useState(0),f=zr(),{setSelected:p}=h.useContext(_r),m=h.useCallback(y=>{(y===-1||!e.items[y].submenu)&&p(o),y!==-1&&u(s!==y?y:-1)},[o,e.items,s,p]),x=h.useCallback(()=>{p(o)},[o,p]);return c.jsxs(pD,{children:[e.items.map((y,v)=>c.jsx(_y,{"data-key":v,children:c.jsx(Ab,{mobileMenu:!0,topLevelPath:F5(f.pathname),contextKey:v,menuOpen:!0,submenuOpen:v===s,onClickCallback:m,item:y,focusedContext:s})},v)),r&&c.jsx(_y,{children:c.jsx(xd,{compact:!0,isActive:!1,icon:"Question",title:a,href:r,menuOpen:!0,onClickCallback:x})})]})},vD=b(Ge)`
  ${st};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`,xD=b.div`
  margin-right: 15px;
`,yD=b.object``,bD=({home:e="/",logoMark:r,closeId:a})=>{const{setSelected:o}=h.useContext(_r);return c.jsx(vD,{to:e,onClick:()=>o(a),children:c.jsx(xD,{children:r?c.jsx(yD,{type:"image/svg+xml",data:r}):c.jsx(q5,{})})})},wD=b.div`
  background: var(--global-element-background);

  z-index: 100;
  display: flex;
  flex-direction: column;
`,SD=({closeId:e,hasLanguage:r,hasLogout:a,logoutLink:o,hasCurrentUser:s,userSubmenu:u,userDrawerBespoke:f,loggedInUser:p,onLogout:m,onLanguageToggle:x,...y})=>{const{setSelected:v}=h.useContext(_r),k=h.useCallback(()=>{v(e)},[e,v]);return c.jsx(wD,{children:c.jsx(zb,{hasLanguage:r,hasLogout:a,logoutLink:o,hasCurrentUser:s,userSubmenu:u,userDrawerBespoke:f,loggedInUser:p,onLogout:m,onLanguageToggle:x,...y,closeOnClick:k})})},Tr="closeMenu",Ry="notifications",Ny="user",Hy="menu",By="custom",CD=b.nav`
  background-color: var(--global-element-background);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`,kD=b.div`
  display: flex;
  flex-direction: row;
  height: ${jb}px;
  border-bottom: var(--dividing-line) 1px solid;

  ${Ib} {
    flex-basis: 0;
    flex-grow: 3;
  }
`,ED=({content:e,home:r,logoMark:a,supportUrl:o,defaultMenuOpen:s=!0,closeText:u,hasLanguage:f,hasLogout:p,logoutLink:m,hasCurrentUser:x,hasNotifications:y,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,notificationsHistory:S,customDrawer:E,supportText:T,onLogout:$,onLanguageToggle:L,...N})=>c.jsx(CD,{children:c.jsxs(sp,{children:[c.jsxs(kD,{children:[c.jsx(bD,{home:r,logoMark:a,closeId:Tr}),c.jsxs(up,{defaultTabId:Tr,children:[E&&c.jsx(Nu,{...E,tabFor:By,closeId:Tr}),y?c.jsx(Nu,{tabFor:Ry,icon:"Notifications",closeId:Tr}):null,c.jsx(Nu,{tabFor:Ny,icon:"UserProfile",closeId:Tr}),c.jsx(Nu,{tabFor:Hy,icon:"Menu",closeId:Tr})]})]}),c.jsxs(gD,{closeId:Tr,children:[c.jsx(ga,{tabId:By,children:E&&E.customComponent}),c.jsx(ga,{tabId:Ry,children:S&&y?c.jsx(Db,{...S}):null}),c.jsx(ga,{tabId:Ny,children:c.jsx(SD,{hasLanguage:f,hasLogout:p,logoutLink:m,hasCurrentUser:x,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,onLogout:$,onLanguageToggle:L,...N,closeId:Tr})}),c.jsx(ga,{tabId:Hy,children:c.jsx(mD,{content:e,supportUrl:o,supportText:T,defaultMenuOpen:s,closeId:Tr})}),c.jsx(dD,{closeText:u,closeId:Tr})]})]})}),dp=({content:e,home:r,openWidth:a,logoMark:o,logoText:s,supportUrl:u,defaultMenuOpen:f,canAlwaysPin:p,paddingOverride:m,maxWidth:x,legacyLayout:y,children:v,keepOpenText:k,autoHideText:C,supportText:S,onMenuToggle:E,...T})=>{const{isLarge:$}=rp();return $?c.jsxs(oc,{children:[c.jsx(cz,{content:e,home:r,openWidth:a,logoMark:o,logoText:s,supportUrl:u,defaultMenuOpen:f,canAlwaysPin:p,onMenuToggle:E,keepOpenText:k,autoHideText:C,supportText:S}),c.jsxs(HO,{children:[c.jsx(Bb,{...T}),c.jsx(ky,{maxWidth:x,paddingOverride:m,legacyLayout:y,children:c.jsx(c.Fragment,{children:v})})]})]}):c.jsxs(NO,{children:[c.jsx(ED,{content:e,home:r,logoMark:o,supportUrl:u,defaultMenuOpen:f,supportText:S,...T}),c.jsx(ky,{children:c.jsx(c.Fragment,{children:v})})]})},jD=b.div`
  width: 286px;
  border-right: 1px solid var(--grey-a7);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,TD=b.div`
  height: 84px;
  color: var(--grey-11);
  border-bottom: 1px solid var(--grey-a7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`,MD=b.div`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`,$D=b.div`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`,pa=b.div`
  position: relative;
  border-bottom: 1px solid var(--grey-a7);
  padding: 22px 20px 21px 20px;
`,AD=b.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
  margin-bottom: 18px;
`;b.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`;const LD=b(Ge)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`;b(Ge)`
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
`;const Id=({logoTextTop:e,logoTextBottom:r})=>c.jsxs(TD,{children:[c.jsx(MD,{children:e}),c.jsxs($D,{children:["•",r,"•"]})]}),Ud=({children:e,...r})=>c.jsx(jD,{...r,children:c.jsx(c.Fragment,{children:e})}),Jt=we.div`
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
`,OD=we.div`
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
  
  ${Jt}{
    margin: 0;
  }
`,zD=we.div`
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
`,zn=({children:e})=>c.jsxs(OD,{children:[c.jsx(zD,{children:c.jsx(Ge,{to:"/",children:c.jsx(Se,{size:12,icon:"Home"})})}),c.jsx(Jt,{children:e})]}),DD=we.div`
    margin: 100px 200px;
`,_D=()=>c.jsxs(DD,{children:[c.jsx(zn,{children:"FormPage.tsx"}),c.jsx(ma,{title:"Input State Examples",areaTitle:"Forms",areaHref:"/"}),c.jsxs(ep,{children:[c.jsx(_t,{name:"my_field",label:"Basic",placeholder:"Placeholder...",fieldState:"default",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Required",placeholder:"",fieldState:"required",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Loading",placeholder:"",fieldState:"processing",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Valid",placeholder:"",fieldState:"valid",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0,feedbackMessage:"Error: Oh noes!!!"}),c.jsx(Jg,{name:"my_field",label:"My Field",placeholder:"",fieldState:"default",showFeedback:!0})]})]}),RD=()=>{const[e,r]=h.useReducer(op,[]),[a]=h.useState(""),[o,s]=h.useState({showSetIndex:!0,pointIndexOffset:1,showPointHandle:!0,showPointLabel:!0,showLabelShadow:!0,setIndexOffset:1,showMoveHandle:!0,fixedImgDimensions:{x:2310,y:1535},boundaryOffset:0,showDirectionMark:!0,areaFillColor:"",areaTransparencyLevel:0}),u=h.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:600,y:200},{x:1100,y:450}],readOnly:!1,styling:"primary"}]})},[]),f=h.useCallback(async()=>{r({type:"LOAD",state:[{name:"UP",points:[{x:1048,y:456},{x:1613,y:584},{x:1322,y:985},{x:922,y:785}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40},{name:"DOWN",points:[{x:841,y:700},{x:256,y:576}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"}]})},[]),p=h.useCallback(({target:{value:E}})=>{r({type:"RENAME_SET",index:0,data:{name:E}})},[]),m=h.useCallback((E,{target:{value:T}})=>{r({type:"RENAME_SET",index:E,data:{name:T}})},[]),x=h.useCallback((E,{target:{value:T}})=>{r({type:"UPDATE_FILL_COLOR",index:E,data:{areaFillColor:T}})},[]),y=h.useCallback((E,{target:{value:T}})=>{r({type:"UPDATE_TRANSPARENCY_LEVEL",index:E,data:{areaTransparencyLevel:parseInt(T)}})},[]),v=h.useCallback((E=0)=>()=>{r({type:"UPDATE_SET_OPTIONS",index:E,data:{readOnly:!e[0]?.readOnly}})},[e]),k=h.useCallback(E=>{const T=e.findIndex($=>$.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:T,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:E,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]),C=h.useCallback(E=>()=>{s({...o,[E]:!o[E]})},[o]);h.useEffect(()=>{o.showDirectionMark?f():u()},[u,f,o]);const S=h.useCallback(({target:{value:E}})=>{s({...o,boundaryOffset:parseInt(E)})},[o]);return c.jsxs(oc,{children:[c.jsx(zn,{children:"LinePage.tsx"}),c.jsxs(Ud,{children:[c.jsx(Id,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsx(pa,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})}),c.jsxs(pa,{children:[c.jsx(Pt,{labelText:"Show Point Handle",htmlFor:"showPointHandle",children:c.jsx("input",{id:"showPointHandle",type:"checkbox",name:"showPointHandle",checked:o.showPointHandle,onChange:C("showPointHandle")})}),c.jsx(Pt,{labelText:"Show Move Handle",htmlFor:"showMoveHandle",children:c.jsx("input",{id:"showMoveHandle",type:"checkbox",name:"showMoveHandle",checked:o.showMoveHandle,onChange:C("showMoveHandle")})}),c.jsx(Pt,{labelText:"Show Point",htmlFor:"showPoint",children:c.jsx("input",{id:"showPoint",type:"checkbox",name:"showPoint",checked:o.showPoint,onChange:C("showPoint")})}),c.jsx(Pt,{labelText:"Show Direction Mark",htmlFor:"showDirectionMark",children:c.jsx("input",{id:"showDirectionMark",type:"checkbox",name:"showDirectionMark",checked:o.showDirectionMark,onChange:C("showDirectionMark")})}),c.jsx(Pt,{labelText:"Show Label Shadow",htmlFor:"showLabelShadow",children:c.jsx("input",{id:"showLabelShadow",type:"checkbox",name:"showLabelShadow",checked:o.showLabelShadow,onChange:C("showLabelShadow")})})]}),c.jsxs(pa,{children:[o.showDirectionMark?c.jsxs(c.Fragment,{children:[c.jsx(_t,{id:"renameLine1",label:"Rename UP Line",fieldState:"default",name:"renameLine1",value:e[0]?.name||"",onChange:E=>m(0,E)}),c.jsx(_t,{id:"renameLine2",label:"Rename DOWN Line",fieldState:"default",name:"renameLine2",value:e[1]?.name||"",onChange:E=>m(1,E)})]}):c.jsx(_t,{id:"rename",label:"Rename Line",fieldState:"default",name:"rename",value:e[0]?.name||"",onChange:p}),c.jsx(Pt,{labelText:"Boundary Offset",htmlFor:"boundaryOffset",children:c.jsx(Qg,{id:"boundaryOffset",type:"number",name:"boundaryOffset",min:0,value:o.boundaryOffset,onChange:S})}),c.jsx(_t,{id:"fillColor",label:"Area Fill Color",fieldState:"default",name:"fillColor",value:e[0]?.areaFillColor||"",onChange:E=>x(0,E)}),c.jsx(_t,{id:"transparencyLevel",label:"Area Tranparency Level",fieldState:"default",name:"transparencyLevel",value:e[0]?.areaTransparencyLevel||"",onChange:E=>y(0,E)})]}),c.jsx(pa,{children:c.jsx(dt,{design:"secondary",onClick:v(),children:"Toggle Read Only"})})]}),c.jsxs(lc,{padBottom:!1,children:[a&&c.jsx("div",{children:a}),c.jsx(ro.Provider,{value:{state:e,dispatch:r},children:c.jsx(mA,{options:o,onLineClick:k,src:"/scorer-ui-kit/images/line-ui-railyard.jpg"})})]})]})},Iy=we.div`
  margin-bottom: 15px;
`,ND=we.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,HD=()=>{const[e,r]=h.useReducer(op,[]),[a]=h.useState(""),[o,s]=h.useState("localhost/wsapp"),[u,f]=h.useState(""),[p,m]=h.useState(!1),[x,y]=h.useState(!1),[v,k]=h.useState(400),[C,S]=h.useState(!1),{createMediaModal:E}=ap(),[T,$]=h.useState({loop:!0,autoPlay:!0}),L={showSetIndex:!0,showLabelShadow:!0,setIndexOffset:1,showDirectionMark:p},N=h.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:1407,y:869},{x:2293,y:531}],showPointHandle:!0,showMoveHandle:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:1426,y:254},{x:2260,y:283}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"secondary"},{name:"Yikes!",points:[{x:500,y:500},{x:1e3,y:1e3}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"danger"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),z=h.useCallback(async()=>{},[]);h.useEffect(()=>{N()},[N]);const _=h.useCallback(()=>{o&&f(o)},[o]),H=h.useCallback(U=>{m(U)},[]),j=h.useCallback(U=>{S(U)},[]),A=h.useCallback(()=>{$({loop:!0,autoPlay:!0})},[]),P=h.useCallback(()=>{$({loop:!1,autoPlay:!1,muted:!0}),E({mediaType:"video",src:`ws://${u}/`,dismissCallback:A})},[E,A,u]),V=h.useCallback(U=>{const Z=e.findIndex(re=>re.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:Z,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:U,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return c.jsxs(oc,{children:[c.jsx(zn,{children:"LineRTCPage.tsx"}),c.jsxs(Ud,{children:[c.jsx(Id,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsx(pa,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})}),c.jsxs(pa,{children:[c.jsx(Iy,{children:c.jsx(fl,{checked:p,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:H,rightTheme:"on",state:"default"})}),c.jsx(Iy,{children:c.jsx(fl,{checked:C,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:j,rightTheme:"on",state:"default"})}),c.jsx(dt,{design:"secondary",onClick:N,children:"Cancel"}),c.jsx(dt,{style:{marginLeft:"10px"},onClick:z,children:"Save"})]})]}),c.jsxs(lc,{children:[a&&c.jsx(fa,{message:a,type:"error"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[c.jsxs(dt,{design:"secondary",onClick:()=>y(U=>!U),children:[x?"Hide":"Show"," Scroll Spacer"]}),x&&c.jsx("input",{type:"range",min:100,max:2e3,step:50,value:v,onChange:U=>k(Number(U.target.value)),style:{width:"200px"}}),x&&c.jsxs("span",{style:{color:"#888"},children:[v,"px"]})]}),x&&c.jsx("div",{style:{height:`${v}px`,background:"repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)"},children:c.jsx("p",{style:{padding:"20px",color:"#888"},children:"TEMP: Scroll test spacer"})}),c.jsx(_t,{label:"Host",name:"host",fieldState:"default",value:o,onChange:({target:{value:U}})=>s(U)}),c.jsx(dt,{onClick:_,children:"Connect"}),u&&c.jsxs(c.Fragment,{children:[c.jsx(ro.Provider,{value:{state:e,dispatch:r},children:c.jsx($A,{ws:`ws://${u}/`,videoOptions:T,options:L,onLineClick:V})}),c.jsx(ND,{children:c.jsx(dt,{onClick:P,children:"Open Video Modal"})})]})]})]})},Hu=we(Zg)`
  width: 100%;
  margin-bottom: 15px;
`,BD=we.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,ID=()=>{const[e,r]=h.useReducer(op,[]),[a]=h.useState(""),{createMediaModal:o}=ap(),[s,u]=h.useState({showSetIndex:!0,pointIndexOffset:1,showPointLabel:!0,setIndexOffset:1,showDirectionMark:!1,showLabelShadow:!1}),[f,p]=h.useState({loop:!0,autoPlay:!0}),m=h.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:968,y:1297},{x:1849,y:1393}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:568,y:1097},{x:1649,y:1193}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),x=h.useCallback(()=>{r({type:"ADD_SET",data:{points:[{x:0,y:0},{x:500,y:0},{x:500,y:500},{x:0,y:500}]}})},[]),y=h.useCallback((L=0)=>{r({type:"REMOVE_SET",index:L})},[]),v=h.useCallback((L=0)=>{r({type:"REMOVE_POINT",index:L})},[]),k=h.useCallback((L=0)=>{r({type:"ADD_POINT",index:L})},[]);h.useEffect(()=>{m()},[m]);const C=h.useCallback(L=>{u(N=>({...N,showDirectionMark:L}))},[]),S=h.useCallback(L=>{u(N=>({...N,showLabelShadow:L}))},[]),E=h.useCallback(()=>{p({loop:!0,autoPlay:!0})},[]),T=h.useCallback(()=>{p({loop:!1,autoPlay:!1,muted:!0}),o({mediaType:"video",src:"/scorer-ui-kit/traffic.mp4",dismissCallback:E})},[o,E]),$=h.useCallback(L=>{const N=e.findIndex(z=>z.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:N,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:L,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return c.jsxs(oc,{children:[c.jsx(zn,{children:"LineVideoPage.tsx"}),c.jsxs(Ud,{children:[c.jsx(Id,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsxs(pa,{children:[c.jsx(Hu,{icon:"Add",design:"primary",onClick:x,children:"Add Shape"}),c.jsx(Hu,{icon:"Add",design:"primary",onClick:()=>k(e.length-1),children:"Add Point"}),c.jsx(Hu,{icon:"Delete",design:"danger",onClick:()=>v(e.length-1),children:"Remove Point"}),c.jsx(Hu,{icon:"Delete",design:"danger",onClick:()=>y(e.length-1),children:"Remove Shape"}),c.jsx(fl,{checked:s.showDirectionMark,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:C,rightTheme:"on",state:"default"}),c.jsx("br",{}),c.jsx(fl,{checked:s.showLabelShadow,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:S,rightTheme:"on",state:"default"})]}),c.jsx(pa,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})})]}),c.jsxs(lc,{padBottom:!1,children:[a&&c.jsx("div",{children:a}),c.jsx(ro.Provider,{value:{state:e,dispatch:r},children:c.jsx(wA,{options:s,onLineClick:$,videoOptions:f,src:"/scorer-ui-kit/traffic.mp4"})}),c.jsx(BD,{children:c.jsx(dt,{onClick:T,children:"Open Video Modal"})})]})]})},UD=we.div`
  margin: 0 auto;
  padding: 100px 100px;
  max-width: 1024px;
  box-sizing: content-box;
`,T0=we.section`
  display: block;
  margin-bottom: 64px;
`,GD=we.h1`
  font-family: var(--font-ui);
  font-weight: 200;
  color: var(--grey-10);
  padding: 0;
  margin: 0 0 36px;
`,M0=we.h2`
  font-family: var(--font-ui);
  font-weight: 300;
  color: var(--grey-12);
`,$0=we.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
`,rn=we.div`
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
`,an=we.div`
  display: block;
  font-family: var(--font-ui);
  letter-spacing: 0.4px;
  font-size: 14px;
  color: var(--grey-12);
  font-weight: 500;
`,on=we.div`
  font-family: var(--font-data);
  font-weight: 300;
  font-size: 14px;
  color: var(--grey-11);
`,PD=()=>c.jsxs(UD,{children:[c.jsx(GD,{children:"SCORER UI Kit"}),window.location.hostname!=="localhost"?c.jsxs(T0,{children:[c.jsx(M0,{children:"Key Resources"}),c.jsx($0,{children:c.jsx(rn,{children:c.jsxs("a",{href:"/scorer-ui-kit/storybook",children:[c.jsx(an,{children:"Storybook"}),c.jsx(on,{children:"All the key components of the SCORER UI Kit, previewable along with options using Storybook."})]})})})]}):null,c.jsxs(T0,{children:[c.jsx(M0,{children:"Examples"}),c.jsxs($0,{children:[c.jsx(rn,{children:c.jsxs(Ge,{to:"/layouts",children:[c.jsx(an,{children:"Global UI - Layout"}),c.jsx(on,{children:"A basic implementation example of the page Layout component."}),c.jsx(Jt,{children:"Layouts.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/split-layouts",children:[c.jsx(an,{children:"Split Layout"}),c.jsx(on,{children:"A page layout with the drag-to-resize layout component."}),c.jsx(Jt,{children:"SplitLayout.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/customdrawer",children:[c.jsx(an,{children:"Custom User Drawer"}),c.jsx(on,{children:"Shows how to add custom injected section to the user drawer."}),c.jsx(Jt,{children:"CustomUserDrawerPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/tabs",children:[c.jsx(an,{children:"Tabs Example"}),c.jsx(on,{children:"A simple implementation of tabs."}),c.jsx(Jt,{children:"TabsPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/table",children:[c.jsx(an,{children:"Table Example"}),c.jsx(on,{children:"A TypeTable implementation with examples on setup and how to use selections."}),c.jsx(Jt,{children:"TablePage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/line",children:[c.jsx(an,{children:"Line"}),c.jsx(on,{children:"The line tool used commonly for setting up of areas of interest used in system configurations."}),c.jsx(Jt,{children:"LinePage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/linertc",children:[c.jsx(an,{children:"Line WebRTC"}),c.jsx(on,{children:"A variation of the Line tool using a WebRTC video background instead of a static image."}),c.jsx(Jt,{children:"LineRTCPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/linevideo",children:[c.jsx(an,{children:"Line Video"}),c.jsx(on,{children:"A variation of the Line tool using a video background instead of a static image."}),c.jsx(Jt,{children:"LineVideoPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/forms",children:[c.jsx(an,{children:"Forms"}),c.jsx(on,{children:"Form inputs and state examples."}),c.jsx(Jt,{children:"FormPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/ptz",children:[c.jsx(an,{children:"PTZ"}),c.jsx(on,{children:"An example of a working PTZ control. Requires a PTZ camera login."}),c.jsx(Jt,{children:"PTZPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/login",children:[c.jsx(an,{children:"Login"}),c.jsx(on,{children:"A code sample of our commonly used login view."}),c.jsx(Jt,{children:"Login.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/customalert",children:[c.jsx(an,{children:"Component Theme Override Example"}),c.jsx(on,{children:"Override CSS based theme for components."}),c.jsx(Jt,{children:"CustomAlertsPage.tsx"})]})}),c.jsx(rn,{children:c.jsxs(Ge,{to:"/switch-test",children:[c.jsx(an,{children:"Switch Example"}),c.jsx(on,{children:"A demonstration of the Switch component with API integration."}),c.jsx(Jt,{children:"SwitchTest.tsx"})]})})]})]}),c.jsxs(T0,{children:[c.jsx(M0,{children:"Deprecated"}),c.jsx($0,{children:c.jsx(rn,{children:c.jsxs(Ge,{to:"/globalUI",children:[c.jsx(an,{children:"Global UI (Deprecated)"}),c.jsx(on,{children:"The legacy implementation used for page layouts."}),c.jsx(Jt,{children:"GlobalUIPage.tsx"})]})})})]})]}),qD=we.div`
  flex: 1;
  padding: 70px 70px 0 70px;
  overflow-y: scroll;
  form {
    max-width: 600px;
  }
`,WD=we.img`
  width: 100%;
`,FD=()=>{const{state:{image:e,connection:r,errorMessage:a,loading:o},actions:{connect:s}}=h.useContext(ya),[u,f]=h.useState({host:"",username:"",password:""}),p=h.useCallback(({target:x})=>{f({...u,[x.id]:x.value})},[u]),m=h.useCallback(x=>{x.preventDefault(),s(u)},[s,u]);return c.jsxs(oc,{children:[c.jsx(zn,{children:"PTZPage.tsx"}),c.jsxs(Ud,{children:[c.jsx(Id,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsxs(pa,{children:[c.jsx(LD,{to:"/",children:"Back"}),c.jsx(AD,{children:"Camera Controls"})]}),r==="connected"&&c.jsx(aO,{debug:!0})]}),c.jsxs(qD,{children:[a&&c.jsx(fa,{message:a,type:"error"}),r==="connected"?c.jsx(WD,{src:e||"",alt:"PTZ Camera"}):c.jsxs(ep,{onChange:p,onSubmit:m,children:[c.jsx(_t,{required:!0,label:"PTZ Camera Hostname",fieldState:"default",name:"host",id:"host",value:u.host}),c.jsx(_t,{required:!0,label:"Username",fieldState:"default",name:"username",id:"username",value:u.username}),c.jsx(Jg,{required:!0,label:"Password",fieldState:"default",name:"password",id:"password",value:u.password}),c.jsx(Xg,{loading:o,type:"submit",children:"Connect"})]})]})]})},YD="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1076'%20height='1076'%20viewBox='0%200%201076%201076'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='19.655%25'%20x2='80.649%25'%20y1='39.035%25'%20y2='55.792%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='-51.504%25'%20x2='143.512%25'%20y1='-10.887%25'%20y2='120.691%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='25.133%25'%20x2='83.065%25'%20y1='38.102%25'%20y2='61.898%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.364'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='90.238%25'%20x2='44.369%25'%20y1='106.126%25'%20y2='-19.277%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.772'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='20.916%25'%20x2='83.944%25'%20y1='39.373%25'%20y2='61.232%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.648'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='nonzero'%20opacity='.2'%20style='mix-blend-mode:overlay'%3e%3cpath%20fill='url(%23a)'%20d='M36.923%20804.572L538%20551.122l538%20262.439v1.54l-518.664%20258.264c-7.056%203.513-15.748%203.513-22.804%200l-497.61-247.78c-4.352-2.167-7.033-6.172-7.033-10.506%200-4.335%202.681-8.34%207.034-10.507z'%20opacity='.746'/%3e%3cpath%20fill='url(%23b)'%20d='M538%20551.122v-262.44l538%20262.44v262.439z'%20opacity='.4'/%3e%3cpath%20fill='url(%23c)'%20d='M0%20551.122l538-262.44%20538%20262.44-538%20262.439z'%20opacity='.799'/%3e%3cpath%20fill='url(%23d)'%20d='M.357%20260.627L538%20524.878v288.683L0%20551.122z'/%3e%3cpath%20fill='url(%23e)'%20d='M0%20261.124L518.618%202.276c6.078-3.035%2013.568-3.035%2019.646%200l502.461%20250.784c3.333%201.664%205.386%204.738%205.386%208.065%200%203.327-2.053%206.401-5.386%208.065L538%20524.878%200%20261.124z'%20opacity='.9'/%3e%3c/g%3e%3c/svg%3e",VD="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcwIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PScwIDAgMTcwIDM1JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBAZm9udC1mYWNlIHsKICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9ub3JhbGU7CiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsKICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7CiAgICAgICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Nb25vcmFsZS1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTsKICAgICAgICAgICAgICBmb250LWRpc3BsYXk6IGZhbGxiYWNrOwogICAgICAgICAgICB9CiAgICAgICAgICAgIEBmb250LWZhY2UgewogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbm9yYWxlOwogICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsKICAgICAgICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvTW9ub3JhbGUtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTsKICAgICAgICAgICAgICAgIGZvbnQtZGlzcGxheTogZmFsbGJhY2s7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgQGZvbnQtZmFjZSB7CiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTW9ub3JhbGU7CiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsOwogICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Nb25vcmFsZS1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTsKICAgICAgICAgICAgICAgIGZvbnQtZGlzcGxheTogZmFsbGJhY2s7CiAgICAgICAgICAgIH0KICAgICAgICA8L3N0eWxlPgogICAgICAgIDxtYXNrIGlkPSJsb2dvX21hc2siIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogICAgICAgICAgICA8cmVjdCBmaWxsPSIjZmZmIiBpZD0ib3ZlcmxheSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgLz4KICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9Ik1vbm9yYWxlIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iYm9sZCIgbGV0dGVyLXNwYWNpbmc9IjIuMTY3IiA+CiAgICAgICAgICAgICAgICA8dHNwYW4geD0iOC42MDQiIHk9IjI3Ij5TPC90c3Bhbj4KICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgbWFzaz0idXJsKCNsb2dvX21hc2spIiB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHJ4PSI1Ii8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDx0ZXh0IGZvbnQtZmFtaWx5PSJNb25vcmFsZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9IjQwMCIgbGV0dGVyLXNwYWNpbmc9IjEuMzMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MiAxKSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIwIiB5PSIxNSI+U0NPUkVSPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9Ik1vbm9yYWxlIiBmb250LXNpemU9IjEwIiBsZXR0ZXItc3BhY2luZz0iLjgzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIgMSkiPgogICAgICAgICAgICA8dHNwYW4geD0iMCIgeT0iMzAiPlVJIEtJVDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4K",Zs=480,ZD={primary:"linear-gradient(-45deg, hsl(205,56%,59%), hsl(202,57%,67%))",secondary:"linear-gradient(139deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%))"},Ub=ii`
  display: flex;
  flex-direction: row;
`,XD=e6`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`,QD=we.div``,KD=we.div`
  button{
    width: 100%;
  }
  ${({margin:e})=>e&&ii`margin:${e};`}
  ${({flex:e})=>e&&ii`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,JD=we(ep)`
    max-width: 320px;
    margin: auto;
    padding: 44px 0;
    min-height: calc(100vh - 126px);

    animation: ${XD} 0.35s cubic-bezier(0.7, 0, 0.84, 0);

    ${H5} {
      margin-bottom: 20px;
    }

    @media (min-width: 768px){
      min-height: auto;
    }

    @media (min-width: 1024px){
      max-width: ${Zs}px;
      padding: 70px;
      margin: initial;
    }
`,e_=we.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
`,t_=we.div`
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  text-decoration: none;
  color: var(--grey-11);
  margin: 23px 0 40px 0;
`,n_=we(Ge)`

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
`,r_=we.div`
    text-align: center;
    margin: 10px auto;
`,fp=ii`
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
`,a_=we.div`
  ${fp};
  margin-right: 17px;
`,Uy=we(Ge)`
  ${fp};
  margin: 49px 4px 0 4px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,i_=we.div`
  ${fp};
  font-weight: 700;
`,gg=we.div`
    ${Ub}
    justify-content: center;
`,o_=we.div`
  ${gg}{
    display:none;
  }

  @media (min-width: 768px) {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    height: auto;

    ${gg}{
      display: flex;
    }
  }
`,l_=we(VD)`
    height: 54px;
    width: auto;
`,s_=we.img`
  height: 1080px;
  background-image: ${({design:e})=>ZD[e]};
  position: absolute;
  bottom: -360px;
  left: -600px;
  min-width: ${Zs}px;
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
`,c_=we.div`
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
    max-width: ${Zs}px;
  }

`,u_=we.div`
  border: solid 1px hsl(0, 0%, 91%);
  max-width: ${Zs}px;
  margin: auto;
  height: 100%;

  @media (min-width: 768px) {
    box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    ${Ub}
    overflow: hidden;
    position:relative;
    max-width: none;
    min-width: ${Zs*2}px;
    min-height: 560px;

    input{
      min-width: 296px;
    }
  }
`,d_=({onLogin:e,design:r="primary"})=>{const[a,o]=h.useState(!1),[s,u]=h.useState(null),[f,p]=h.useState({username:"",password:""}),m=h.useCallback(y=>({target:{value:v}})=>{p({...f,[y]:v})},[f]),x=h.useCallback(async y=>{y.preventDefault(),o(!0),u(null);try{const v=await e(f);console.log(v,"login")}catch(v){v instanceof Error?u({message:v.message,type:"error"}):console.warn(v)}o(!1)},[f,e]);return c.jsxs(QD,{children:[c.jsx(zn,{children:"Login.tsx"}),c.jsxs(o_,{children:[c.jsxs(u_,{children:[c.jsxs(c_,{children:[c.jsx(l_,{}),c.jsx(s_,{src:YD,design:r})]}),c.jsxs(JD,{onSubmit:x,spacing:"25px",children:[c.jsx(e_,{children:"Sign In To Your Account"}),c.jsx(t_,{children:"This service requires an account to login. If you do not have one, please make one first."}),c.jsx(_t,{fieldState:"default",required:!0,label:"Username",onChange:m("username"),value:f.username,name:"username",id:"username"}),c.jsx(Jg,{fieldState:"default",required:!0,label:"Password",onChange:m("password"),value:f.password,name:"password",id:"password"}),s&&c.jsx(fa,{type:s.type,message:s.message}),c.jsx(KD,{flex:"1",children:c.jsx(Xg,{loading:a,type:"submit",onClick:x,children:"Login"})}),c.jsx(r_,{children:c.jsx(n_,{to:"#",children:"Forgotten Password"})})]})]}),c.jsxs(gg,{children:[c.jsxs(a_,{children:["Copyright ",new Date().getFullYear()," - Future Standard Co. Ltd. All Rights Reserved. "]}),c.jsx(Uy,{to:"#",children:"Terms"}),c.jsx(i_,{children:"·"}),c.jsx(Uy,{to:"#",children:"Privacy"})]})]})]})},f_=we.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
`,h_=we.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: ${({type:e})=>`var(--${e}, var(--primary-9))`};
    ${({tooltipMessage:e})=>e&&ii`
      &:hover {
        cursor: pointer;
      };
    `}
`,ws=({statusList:e})=>{const r=h.useRef([]);return r.current=e.map(()=>Ye.createRef()),c.jsx(f_,{children:e.map(({type:a,tooltipMessage:o,tooltipIcon:s,tooltipType:u,tooltipPosition:f},p)=>c.jsxs(h.Fragment,{children:[c.jsx(h_,{ref:r.current[p],type:a,tooltipMessage:o}),o&&c.jsx(zj,{tooltipFor:r.current[p],message:o,icon:s,type:u,tooltipPosition:f})]},p))})},g_=we.div`
  margin: 100px 200px;
`,p_=we.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`,m_=[{header:"Device Name",sortable:!0,cellStyle:"firstColumn"},{header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0},{header:"Status",sortable:!1,cellStyle:"normalImportance",alignment:"center"},{header:"Actions",sortable:!1,cellStyle:"highImportance",alignment:"right"}],v_=()=>{const{createModal:e}=K5(),r=h.useCallback(m=>{console.log(`opening custom modal for item ${m}`),e({closeText:"Close",isCloseEnable:!0,customComponent:c.jsx(ma,{title:"Example of custom component on Modal",introductionText:"Anything can be added inside de modal, I hope you find this modal useful"})})},[e]),a=h.useMemo(()=>[{id:"a0",text:"Main Action",icon:"Success",onClickCallback:()=>{}},{id:"a1",text:"日本語の場合はランダム",onClickCallback:()=>{}},{id:"a2",text:"Save Action",icon:"Analyse",hasOnSelectLoading:!0,onClickCallback:()=>{}},{id:"a3",text:"Download Action",icon:"Download",onClickCallback:()=>{},disabled:!0}],[]),o=h.useMemo(()=>[{id:"device-id-1",header:{image:"https://picsum.photos/id/43/367/267",mediaUrl:"/scorer-ui-kit/traffic.mp4",mediaType:"video"},columns:[{text:"Device Name",href:"#"},{text:"Just Now"},{text:"242",unit:"mb"},{text:"¥20,000"},{customComponent:c.jsx(ws,{statusList:[{type:"success"},{type:"success"},{type:"success"}]})},{customComponent:c.jsx(ps,{mainButtonId:"a0",buttonList:a})}]},{_checked:!0,id:"device-id-2",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img",onClickThumbnail:()=>r("device-id-2")},columns:[{text:"Another Device",href:"#"},{text:"1st October 2019"},{text:"2.1",unit:"gb"},{text:"¥4,000"},{customComponent:c.jsx(ws,{statusList:[{type:"error",tooltipIcon:"BigWarning",tooltipType:"warning",tooltipMessage:"4 Images have reported upload failures",tooltipPosition:"left"},{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"1 images file is corrupted",tooltipPosition:"bottom"},{type:"info",tooltipIcon:"Information",tooltipType:"info",tooltipMessage:"All Images have been updated in the server",tooltipPosition:"right"}]})},{customComponent:c.jsx(ps,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-3",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Old Device",href:"#"},{text:"22nd March 2020"},{text:"2.1",unit:"tb"},{text:"¥7,000"},{customComponent:c.jsx(ws,{statusList:[{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"Upload took too long"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(ps,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-4",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:c.jsx(ws,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(ps,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-5",columns:[{text:"Special Camera",href:"#"},{text:"16th June 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:c.jsx(ws,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(ps,{mainButtonId:"a0",buttonList:a})}]}],[a,r]),[s,u]=h.useState(o),f=h.useCallback((m,x)=>{const y=[...s],v=y.findIndex(k=>k.id===x);y[v]._checked=m,u(y)},[s,u]),p=h.useCallback(m=>{const x=[...s];x.forEach(y=>{y._checked=m}),u(x)},[s,u]);return c.jsxs(g_,{children:[c.jsx(zn,{children:"TablePage.tsx"}),c.jsxs(lc,{children:[c.jsx(ma,{title:"Table Example",areaTitle:"Examples",areaHref:"/"}),c.jsx(kL,{selectable:!0,columnConfig:m_,rows:s,selectCallback:f,toggleAllCallback:p,hasThumbnail:!0}),c.jsxs(p_,{children:["Selected IDs: [",x_(s).toString(),"]"]})]})]})},x_=e=>{const r=[];return e.forEach(a=>{a._checked&&a.id&&r.push(a.id.toString())}),r},Ee=e=>typeof e=="string",Ss=()=>{let e,r;const a=new Promise((o,s)=>{e=o,r=s});return a.resolve=e,a.reject=r,a},Gy=e=>e==null?"":""+e,y_=(e,r,a)=>{e.forEach(o=>{r[o]&&(a[o]=r[o])})},b_=/###/g,Py=e=>e&&e.indexOf("###")>-1?e.replace(b_,"."):e,qy=e=>!e||Ee(e),Bs=(e,r,a)=>{const o=Ee(r)?r.split("."):r;let s=0;for(;s<o.length-1;){if(qy(e))return{};const u=Py(o[s]);!e[u]&&a&&(e[u]=new a),Object.prototype.hasOwnProperty.call(e,u)?e=e[u]:e={},++s}return qy(e)?{}:{obj:e,k:Py(o[s])}},Wy=(e,r,a)=>{const{obj:o,k:s}=Bs(e,r,Object);if(o!==void 0||r.length===1){o[s]=a;return}let u=r[r.length-1],f=r.slice(0,r.length-1),p=Bs(e,f,Object);for(;p.obj===void 0&&f.length;)u=`${f[f.length-1]}.${u}`,f=f.slice(0,f.length-1),p=Bs(e,f,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=a},w_=(e,r,a,o)=>{const{obj:s,k:u}=Bs(e,r,Object);s[u]=s[u]||[],s[u].push(a)},yd=(e,r)=>{const{obj:a,k:o}=Bs(e,r);if(a&&Object.prototype.hasOwnProperty.call(a,o))return a[o]},S_=(e,r,a)=>{const o=yd(e,a);return o!==void 0?o:yd(r,a)},Gb=(e,r,a)=>{for(const o in r)o!=="__proto__"&&o!=="constructor"&&(o in e?Ee(e[o])||e[o]instanceof String||Ee(r[o])||r[o]instanceof String?a&&(e[o]=r[o]):Gb(e[o],r[o],a):e[o]=r[o]);return e},Hi=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var C_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const k_=e=>Ee(e)?e.replace(/[&<>"'\/]/g,r=>C_[r]):e;class E_{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const a=this.regExpMap.get(r);if(a!==void 0)return a;const o=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,o),this.regExpQueue.push(r),o}}const j_=[" ",",","?","!",";"],T_=new E_(20),M_=(e,r,a)=>{r=r||"",a=a||"";const o=j_.filter(f=>r.indexOf(f)<0&&a.indexOf(f)<0);if(o.length===0)return!0;const s=T_.getRegExp(`(${o.map(f=>f==="?"?"\\?":f).join("|")})`);let u=!s.test(e);if(!u){const f=e.indexOf(a);f>0&&!s.test(e.substring(0,f))&&(u=!0)}return u},pg=(e,r,a=".")=>{if(!e)return;if(e[r])return Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;const o=r.split(a);let s=e;for(let u=0;u<o.length;){if(!s||typeof s!="object")return;let f,p="";for(let m=u;m<o.length;++m)if(m!==u&&(p+=a),p+=o[m],f=s[p],f!==void 0){if(["string","number","boolean"].indexOf(typeof f)>-1&&m<o.length-1)continue;u+=m-u+1;break}s=f}return s},Xs=e=>e?.replace(/_/g,"-"),$_={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,r){console?.[e]?.apply?.(console,r)}};class bd{constructor(r,a={}){this.init(r,a)}init(r,a={}){this.prefix=a.prefix||"i18next:",this.logger=r||$_,this.options=a,this.debug=a.debug}log(...r){return this.forward(r,"log","",!0)}warn(...r){return this.forward(r,"warn","",!0)}error(...r){return this.forward(r,"error","")}deprecate(...r){return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(r,a,o,s){return s&&!this.debug?null:(Ee(r[0])&&(r[0]=`${o}${this.prefix} ${r[0]}`),this.logger[a](r))}create(r){return new bd(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new bd(this.logger,r)}}var Ar=new bd;class Gd{constructor(){this.observers={}}on(r,a){return r.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(a)||0;this.observers[o].set(a,s+1)}),this}off(r,a){if(this.observers[r]){if(!a){delete this.observers[r];return}this.observers[r].delete(a)}}emit(r,...a){this.observers[r]&&Array.from(this.observers[r].entries()).forEach(([s,u])=>{for(let f=0;f<u;f++)s(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let f=0;f<u;f++)s.apply(s,[r,...a])})}}class Fy extends Gd{constructor(r,a={ns:["translation"],defaultNS:"translation"}){super(),this.data=r||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const a=this.options.ns.indexOf(r);a>-1&&this.options.ns.splice(a,1)}getResource(r,a,o,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,f=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;r.indexOf(".")>-1?p=r.split("."):(p=[r,a],o&&(Array.isArray(o)?p.push(...o):Ee(o)&&u?p.push(...o.split(u)):p.push(o)));const m=yd(this.data,p);return!m&&!a&&!o&&r.indexOf(".")>-1&&(r=p[0],a=p[1],o=p.slice(2).join(".")),m||!f||!Ee(o)?m:pg(this.data?.[r]?.[a],o,u)}addResource(r,a,o,s,u={silent:!1}){const f=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[r,a];o&&(p=p.concat(f?o.split(f):o)),r.indexOf(".")>-1&&(p=r.split("."),s=a,a=p[1]),this.addNamespaces(a),Wy(this.data,p,s),u.silent||this.emit("added",r,a,o,s)}addResources(r,a,o,s={silent:!1}){for(const u in o)(Ee(o[u])||Array.isArray(o[u]))&&this.addResource(r,a,u,o[u],{silent:!0});s.silent||this.emit("added",r,a,o)}addResourceBundle(r,a,o,s,u,f={silent:!1,skipCopy:!1}){let p=[r,a];r.indexOf(".")>-1&&(p=r.split("."),s=o,o=a,a=p[1]),this.addNamespaces(a);let m=yd(this.data,p)||{};f.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?Gb(m,o,u):m={...m,...o},Wy(this.data,p,m),f.silent||this.emit("added",r,a,o)}removeResourceBundle(r,a){this.hasResourceBundle(r,a)&&delete this.data[r][a],this.removeNamespaces(a),this.emit("removed",r,a)}hasResourceBundle(r,a){return this.getResource(r,a)!==void 0}getResourceBundle(r,a){return a||(a=this.options.defaultNS),this.getResource(r,a)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const a=this.getDataByLanguage(r);return!!(a&&Object.keys(a)||[]).find(s=>a[s]&&Object.keys(a[s]).length>0)}toJSON(){return this.data}}var Pb={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,r,a,o,s){return e.forEach(u=>{r=this.processors[u]?.process(r,a,o,s)??r}),r}};const qb=Symbol("i18next/PATH_KEY");function A_(){const e=[],r=Object.create(null);let a;return r.get=(o,s)=>(a?.revoke?.(),s===qb?e:(e.push(s),a=Proxy.revocable(o,r),a.proxy)),Proxy.revocable(Object.create(null),r).proxy}function mg(e,r){const{[qb]:a}=e(A_());return a.join(r?.keySeparator??".")}const Yy={},A0=e=>!Ee(e)&&typeof e!="boolean"&&typeof e!="number";class wd extends Gd{constructor(r,a={}){super(),y_(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ar.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r,a={interpolation:{}}){const o={...a};if(r==null)return!1;const s=this.resolve(r,o);if(s?.res===void 0)return!1;const u=A0(s.res);return!(o.returnObjects===!1&&u)}extractFromKey(r,a){let o=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let u=a.ns||this.options.defaultNS||[];const f=o&&r.indexOf(o)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!M_(r,o,s);if(f&&!p){const m=r.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:r,namespaces:Ee(u)?[u]:u};const x=r.split(o);(o!==s||o===s&&this.options.ns.indexOf(x[0])>-1)&&(u=x.shift()),r=x.join(s)}return{key:r,namespaces:Ee(u)?[u]:u}}translate(r,a,o){let s=typeof a=="object"?{...a}:a;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),r==null)return"";typeof r=="function"&&(r=mg(r,{...this.options,...s})),Array.isArray(r)||(r=[String(r)]);const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,f=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:p,namespaces:m}=this.extractFromKey(r[r.length-1],s),x=m[m.length-1];let y=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;y===void 0&&(y=":");const v=s.lng||this.language,k=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return k?u?{res:`${x}${y}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(s)}:`${x}${y}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(s)}:p;const C=this.resolve(r,s);let S=C?.res;const E=C?.usedKey||p,T=C?.exactUsedKey||p,$=["[object Number]","[object Function]","[object RegExp]"],L=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,N=!this.i18nFormat||this.i18nFormat.handleAsObject,z=s.count!==void 0&&!Ee(s.count),_=wd.hasDefaultValue(s),H=z?this.pluralResolver.getSuffix(v,s.count,s):"",j=s.ordinal&&z?this.pluralResolver.getSuffix(v,s.count,{ordinal:!1}):"",A=z&&!s.ordinal&&s.count===0,P=A&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${H}`]||s[`defaultValue${j}`]||s.defaultValue;let V=S;N&&!S&&_&&(V=P);const U=A0(V),Z=Object.prototype.toString.apply(V);if(N&&V&&U&&$.indexOf(Z)<0&&!(Ee(L)&&Array.isArray(V))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const re=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,V,{...s,ns:m}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(C.res=re,C.usedParams=this.getUsedParamsDetails(s),C):re}if(f){const re=Array.isArray(V),X=re?[]:{},te=re?T:E;for(const B in V)if(Object.prototype.hasOwnProperty.call(V,B)){const q=`${te}${f}${B}`;_&&!S?X[B]=this.translate(q,{...s,defaultValue:A0(P)?P[B]:void 0,joinArrays:!1,ns:m}):X[B]=this.translate(q,{...s,joinArrays:!1,ns:m}),X[B]===q&&(X[B]=V[B])}S=X}}else if(N&&Ee(L)&&Array.isArray(S))S=S.join(L),S&&(S=this.extendTranslation(S,r,s,o));else{let re=!1,X=!1;!this.isValidLookup(S)&&_&&(re=!0,S=P),this.isValidLookup(S)||(X=!0,S=p);const B=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&X?void 0:S,q=_&&P!==S&&this.options.updateMissing;if(X||re||q){if(this.logger.log(q?"updateKey":"missingKey",v,x,p,q?P:S),f){const O=this.resolve(p,{...s,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ae=[];const ie=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ie&&ie[0])for(let O=0;O<ie.length;O++)ae.push(ie[O]);else this.options.saveMissingTo==="all"?ae=this.languageUtils.toResolveHierarchy(s.lng||this.language):ae.push(s.lng||this.language);const de=(O,W,Q)=>{const le=_&&Q!==S?Q:B;this.options.missingKeyHandler?this.options.missingKeyHandler(O,x,W,le,q,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(O,x,W,le,q,s),this.emit("missingKey",O,x,W,S)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?ae.forEach(O=>{const W=this.pluralResolver.getSuffixes(O,s);A&&s[`defaultValue${this.options.pluralSeparator}zero`]&&W.indexOf(`${this.options.pluralSeparator}zero`)<0&&W.push(`${this.options.pluralSeparator}zero`),W.forEach(Q=>{de([O],p+Q,s[`defaultValue${Q}`]||P)})}):de(ae,p,P))}S=this.extendTranslation(S,r,s,C,o),X&&S===p&&this.options.appendNamespaceToMissingKey&&(S=`${x}${y}${p}`),(X||re)&&this.options.parseMissingKeyHandler&&(S=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${x}${y}${p}`:p,re?S:void 0,s))}return u?(C.res=S,C.usedParams=this.getUsedParamsDetails(s),C):S}extendTranslation(r,a,o,s,u){if(this.i18nFormat?.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const m=Ee(r)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let x;if(m){const v=r.match(this.interpolator.nestingRegexp);x=v&&v.length}let y=o.replace&&!Ee(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(y={...this.options.interpolation.defaultVariables,...y}),r=this.interpolator.interpolate(r,y,o.lng||this.language||s.usedLng,o),m){const v=r.match(this.interpolator.nestingRegexp),k=v&&v.length;x<k&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(r=this.interpolator.nest(r,(...v)=>u?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${a[0]}`),null):this.translate(...v,a),o)),o.interpolation&&this.interpolator.reset()}const f=o.postProcess||this.options.postProcess,p=Ee(f)?[f]:f;return r!=null&&p?.length&&o.applyPostProcessor!==!1&&(r=Pb.handle(p,r,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),r}resolve(r,a={}){let o,s,u,f,p;return Ee(r)&&(r=[r]),r.forEach(m=>{if(this.isValidLookup(o))return;const x=this.extractFromKey(m,a),y=x.key;s=y;let v=x.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const k=a.count!==void 0&&!Ee(a.count),C=k&&!a.ordinal&&a.count===0,S=a.context!==void 0&&(Ee(a.context)||typeof a.context=="number")&&a.context!=="",E=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);v.forEach(T=>{this.isValidLookup(o)||(p=T,!Yy[`${E[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(Yy[`${E[0]}-${T}`]=!0,this.logger.warn(`key "${s}" for languages "${E.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach($=>{if(this.isValidLookup(o))return;f=$;const L=[y];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(L,y,$,T,a);else{let z;k&&(z=this.pluralResolver.getSuffix($,a.count,a));const _=`${this.options.pluralSeparator}zero`,H=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(k&&(a.ordinal&&z.indexOf(H)===0&&L.push(y+z.replace(H,this.options.pluralSeparator)),L.push(y+z),C&&L.push(y+_)),S){const j=`${y}${this.options.contextSeparator||"_"}${a.context}`;L.push(j),k&&(a.ordinal&&z.indexOf(H)===0&&L.push(j+z.replace(H,this.options.pluralSeparator)),L.push(j+z),C&&L.push(j+_))}}let N;for(;N=L.pop();)this.isValidLookup(o)||(u=N,o=this.getResource($,T,N,a))}))})}),{res:o,usedKey:s,exactUsedKey:u,usedLng:f,usedNS:p}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,a,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(r,a,o,s):this.resourceStore.getResource(r,a,o,s)}getUsedParamsDetails(r={}){const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=r.replace&&!Ee(r.replace);let s=o?r.replace:r;if(o&&typeof r.count<"u"&&(s.count=r.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const u of a)delete s[u]}return s}static hasDefaultValue(r){const a="defaultValue";for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&a===o.substring(0,a.length)&&r[o]!==void 0)return!0;return!1}}class Vy{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ar.create("languageUtils")}getScriptPartFromCode(r){if(r=Xs(r),!r||r.indexOf("-")<0)return null;const a=r.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(r){if(r=Xs(r),!r||r.indexOf("-")<0)return r;const a=r.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(r){if(Ee(r)&&r.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(r)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?r.toLowerCase():r)}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let a;return r.forEach(o=>{if(a)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(a=s)}),!a&&this.options.supportedLngs&&r.forEach(o=>{if(a)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return a=s;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return a=u;a=this.options.supportedLngs.find(f=>{if(f===u)return f;if(!(f.indexOf("-")<0&&u.indexOf("-")<0)&&(f.indexOf("-")>0&&u.indexOf("-")<0&&f.substring(0,f.indexOf("-"))===u||f.indexOf(u)===0&&u.length>1))return f})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(r,a){if(!r)return[];if(typeof r=="function"&&(r=r(a)),Ee(r)&&(r=[r]),Array.isArray(r))return r;if(!a)return r.default||[];let o=r[a];return o||(o=r[this.getScriptPartFromCode(a)]),o||(o=r[this.formatLanguageCode(a)]),o||(o=r[this.getLanguagePartFromCode(a)]),o||(o=r.default),o||[]}toResolveHierarchy(r,a){const o=this.getFallbackCodes((a===!1?[]:a)||this.options.fallbackLng||[],r),s=[],u=f=>{f&&(this.isSupportedCode(f)?s.push(f):this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))};return Ee(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(r))):Ee(r)&&u(this.formatLanguageCode(r)),o.forEach(f=>{s.indexOf(f)<0&&u(this.formatLanguageCode(f))}),s}}const Zy={zero:0,one:1,two:2,few:3,many:4,other:5},Xy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class L_{constructor(r,a={}){this.languageUtils=r,this.options=a,this.logger=Ar.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(r,a={}){const o=Xs(r==="dev"?"en":r),s=a.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let f;try{f=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Xy;if(!r.match(/-|_/))return Xy;const m=this.languageUtils.getLanguagePartFromCode(r);f=this.getRule(m,a)}return this.pluralRulesCache[u]=f,f}needsPlural(r,a={}){let o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(r,a,o={}){return this.getSuffixes(r,o).map(s=>`${a}${s}`)}getSuffixes(r,a={}){let o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?o.resolvedOptions().pluralCategories.sort((s,u)=>Zy[s]-Zy[u]).map(s=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(r,a,o={}){const s=this.getRule(r,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(a)}`:(this.logger.warn(`no plural rule found for: ${r}`),this.getSuffix("dev",a,o))}}const Qy=(e,r,a,o=".",s=!0)=>{let u=S_(e,r,a);return!u&&s&&Ee(a)&&(u=pg(e,a,o),u===void 0&&(u=pg(r,a,o))),u},L0=e=>e.replace(/\$/g,"$$$$");class Ky{constructor(r={}){this.logger=Ar.create("interpolator"),this.options=r,this.format=r?.interpolation?.format||(a=>a),this.init(r)}init(r={}){r.interpolation||(r.interpolation={escapeValue:!0});const{escape:a,escapeValue:o,useRawValueToEscape:s,prefix:u,prefixEscaped:f,suffix:p,suffixEscaped:m,formatSeparator:x,unescapeSuffix:y,unescapePrefix:v,nestingPrefix:k,nestingPrefixEscaped:C,nestingSuffix:S,nestingSuffixEscaped:E,nestingOptionsSeparator:T,maxReplaces:$,alwaysFormat:L}=r.interpolation;this.escape=a!==void 0?a:k_,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Hi(u):f||"{{",this.suffix=p?Hi(p):m||"}}",this.formatSeparator=x||",",this.unescapePrefix=y?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=k?Hi(k):C||Hi("$t("),this.nestingSuffix=S?Hi(S):E||Hi(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=$||1e3,this.alwaysFormat=L!==void 0?L:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(a,o)=>a?.source===o?(a.lastIndex=0,a):new RegExp(o,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(r,a,o,s){let u,f,p;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},x=C=>{if(C.indexOf(this.formatSeparator)<0){const $=Qy(a,m,C,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format($,void 0,o,{...s,...a,interpolationkey:C}):$}const S=C.split(this.formatSeparator),E=S.shift().trim(),T=S.join(this.formatSeparator).trim();return this.format(Qy(a,m,E,this.options.keySeparator,this.options.ignoreJSONStructure),T,o,{...s,...a,interpolationkey:E})};this.resetRegExp();const y=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:C=>L0(C)},{regex:this.regexp,safeValue:C=>this.escapeValue?L0(this.escape(C)):L0(C)}].forEach(C=>{for(p=0;u=C.regex.exec(r);){const S=u[1].trim();if(f=x(S),f===void 0)if(typeof y=="function"){const T=y(r,u,s);f=Ee(T)?T:""}else if(s&&Object.prototype.hasOwnProperty.call(s,S))f="";else if(v){f=u[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${r}`),f="";else!Ee(f)&&!this.useRawValueToEscape&&(f=Gy(f));const E=C.safeValue(f);if(r=r.replace(u[0],E),v?(C.regex.lastIndex+=f.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),r}nest(r,a,o={}){let s,u,f;const p=(m,x)=>{const y=this.nestingOptionsSeparator;if(m.indexOf(y)<0)return m;const v=m.split(new RegExp(`${Hi(y)}[ ]*{`));let k=`{${v[1]}`;m=v[0],k=this.interpolate(k,f);const C=k.match(/'/g),S=k.match(/"/g);((C?.length??0)%2===0&&!S||(S?.length??0)%2!==0)&&(k=k.replace(/'/g,'"'));try{f=JSON.parse(k),x&&(f={...x,...f})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,E),`${m}${y}${k}`}return f.defaultValue&&f.defaultValue.indexOf(this.prefix)>-1&&delete f.defaultValue,m};for(;s=this.nestingRegexp.exec(r);){let m=[];f={...o},f=f.replace&&!Ee(f.replace)?f.replace:f,f.applyPostProcessor=!1,delete f.defaultValue;const x=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(x!==-1&&(m=s[1].slice(x).split(this.formatSeparator).map(y=>y.trim()).filter(Boolean),s[1]=s[1].slice(0,x)),u=a(p.call(this,s[1].trim(),f),f),u&&s[0]===r&&!Ee(u))return u;Ee(u)||(u=Gy(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${r}`),u=""),m.length&&(u=m.reduce((y,v)=>this.format(y,v,o.lng,{...o,interpolationkey:s[1].trim()}),u.trim())),r=r.replace(s[0],u),this.regexp.lastIndex=0}return r}}const O_=e=>{let r=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const o=e.split("(");r=o[0].toLowerCase().trim();const s=o[1].substring(0,o[1].length-1);r==="currency"&&s.indexOf(":")<0?a.currency||(a.currency=s.trim()):r==="relativetime"&&s.indexOf(":")<0?a.range||(a.range=s.trim()):s.split(";").forEach(f=>{if(f){const[p,...m]=f.split(":"),x=m.join(":").trim().replace(/^'+|'+$/g,""),y=p.trim();a[y]||(a[y]=x),x==="false"&&(a[y]=!1),x==="true"&&(a[y]=!0),isNaN(x)||(a[y]=parseInt(x,10))}})}return{formatName:r,formatOptions:a}},Jy=e=>{const r={};return(a,o,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const f=o+JSON.stringify(u);let p=r[f];return p||(p=e(Xs(o),s),r[f]=p),p(a)}},z_=e=>(r,a,o)=>e(Xs(a),o)(r);class D_{constructor(r={}){this.logger=Ar.create("formatter"),this.options=r,this.init(r)}init(r,a={interpolation:{}}){this.formatSeparator=a.interpolation.formatSeparator||",";const o=a.cacheInBuiltFormats?Jy:z_;this.formats={number:o((s,u)=>{const f=new Intl.NumberFormat(s,{...u});return p=>f.format(p)}),currency:o((s,u)=>{const f=new Intl.NumberFormat(s,{...u,style:"currency"});return p=>f.format(p)}),datetime:o((s,u)=>{const f=new Intl.DateTimeFormat(s,{...u});return p=>f.format(p)}),relativetime:o((s,u)=>{const f=new Intl.RelativeTimeFormat(s,{...u});return p=>f.format(p,u.range||"day")}),list:o((s,u)=>{const f=new Intl.ListFormat(s,{...u});return p=>f.format(p)})}}add(r,a){this.formats[r.toLowerCase().trim()]=a}addCached(r,a){this.formats[r.toLowerCase().trim()]=Jy(a)}format(r,a,o,s={}){const u=a.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(m=>m.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,m)=>{const{formatName:x,formatOptions:y}=O_(m);if(this.formats[x]){let v=p;try{const k=s?.formatParams?.[s.interpolationkey]||{},C=k.locale||k.lng||s.locale||s.lng||o;v=this.formats[x](p,C,{...y,...s,...k})}catch(k){this.logger.warn(k)}return v}else this.logger.warn(`there was no format function for ${x}`);return p},r)}}const __=(e,r)=>{e.pending[r]!==void 0&&(delete e.pending[r],e.pendingCount--)};class R_ extends Gd{constructor(r,a,o,s={}){super(),this.backend=r,this.store=a,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=Ar.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(r,a,o,s){const u={},f={},p={},m={};return r.forEach(x=>{let y=!0;a.forEach(v=>{const k=`${x}|${v}`;!o.reload&&this.store.hasResourceBundle(x,v)?this.state[k]=2:this.state[k]<0||(this.state[k]===1?f[k]===void 0&&(f[k]=!0):(this.state[k]=1,y=!1,f[k]===void 0&&(f[k]=!0),u[k]===void 0&&(u[k]=!0),m[v]===void 0&&(m[v]=!0)))}),y||(p[x]=!0)}),(Object.keys(u).length||Object.keys(f).length)&&this.queue.push({pending:f,pendingCount:Object.keys(f).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(f),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(m)}}loaded(r,a,o){const s=r.split("|"),u=s[0],f=s[1];a&&this.emit("failedLoading",u,f,a),!a&&o&&this.store.addResourceBundle(u,f,o,void 0,void 0,{skipCopy:!0}),this.state[r]=a?-1:2,a&&o&&(this.state[r]=0);const p={};this.queue.forEach(m=>{w_(m.loaded,[u],f),__(m,r),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(x=>{p[x]||(p[x]={});const y=m.loaded[x];y.length&&y.forEach(v=>{p[x][v]===void 0&&(p[x][v]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(m=>!m.done)}read(r,a,o,s=0,u=this.retryTimeout,f){if(!r.length)return f(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:a,fcName:o,tried:s,wait:u,callback:f});return}this.readingCalls++;const p=(x,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(x&&y&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,r,a,o,s+1,u*2,f)},u);return}f(x,y)},m=this.backend[o].bind(this.backend);if(m.length===2){try{const x=m(r,a);x&&typeof x.then=="function"?x.then(y=>p(null,y)).catch(p):p(null,x)}catch(x){p(x)}return}return m(r,a,p)}prepareLoading(r,a,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Ee(r)&&(r=this.languageUtils.toResolveHierarchy(r)),Ee(a)&&(a=[a]);const u=this.queueLoad(r,a,o,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(f=>{this.loadOne(f)})}load(r,a,o){this.prepareLoading(r,a,{},o)}reload(r,a,o){this.prepareLoading(r,a,{reload:!0},o)}loadOne(r,a=""){const o=r.split("|"),s=o[0],u=o[1];this.read(s,u,"read",void 0,void 0,(f,p)=>{f&&this.logger.warn(`${a}loading namespace ${u} for language ${s} failed`,f),!f&&p&&this.logger.log(`${a}loaded namespace ${u} for language ${s}`,p),this.loaded(r,f,p)})}saveMissing(r,a,o,s,u,f={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(a)){this.logger.warn(`did not save key "${o}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const m={...f,isUpdate:u},x=this.backend.create.bind(this.backend);if(x.length<6)try{let y;x.length===5?y=x(r,a,o,s,m):y=x(r,a,o,s),y&&typeof y.then=="function"?y.then(v=>p(null,v)).catch(p):p(null,y)}catch(y){p(y)}else x(r,a,o,s,p,m)}!r||!r[0]||this.store.addResource(r[0],a,o,s)}}}const O0=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let r={};if(typeof e[1]=="object"&&(r=e[1]),Ee(e[1])&&(r.defaultValue=e[1]),Ee(e[2])&&(r.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(o=>{r[o]=a[o]})}return r},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),e2=e=>(Ee(e.ns)&&(e.ns=[e.ns]),Ee(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Ee(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e),Bu=()=>{},N_=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})},Wb="__i18next_supportNoticeShown",H_=()=>typeof globalThis<"u"&&!!globalThis[Wb],B_=()=>{typeof globalThis<"u"&&(globalThis[Wb]=!0)},I_=e=>!!(e?.modules?.backend?.name?.indexOf("Locize")>0||e?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||e?.options?.backend?.backends&&e.options.backend.backends.some(r=>r?.name?.indexOf("Locize")>0||r?.constructor?.name?.indexOf("Locize")>0)||e?.options?.backend?.projectId||e?.options?.backend?.backendOptions&&e.options.backend.backendOptions.some(r=>r?.projectId));class Is extends Gd{constructor(r={},a){if(super(),this.options=e2(r),this.services={},this.logger=Ar,this.modules={external:[]},N_(this),a&&!this.isInitialized&&!r.isClone){if(!this.options.initAsync)return this.init(r,a),this;setTimeout(()=>{this.init(r,a)},0)}}init(r={},a){this.isInitializing=!0,typeof r=="function"&&(a=r,r={}),r.defaultNS==null&&r.ns&&(Ee(r.ns)?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const o=O0();this.options={...o,...this.options,...e2(r)},this.options.interpolation={...o.interpolation,...this.options.interpolation},r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!I_(this)&&!H_()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),B_());const s=x=>x?typeof x=="function"?new x:x:null;if(!this.options.isClone){this.modules.logger?Ar.init(s(this.modules.logger),this.options):Ar.init(null,this.options);let x;this.modules.formatter?x=this.modules.formatter:x=D_;const y=new Vy(this.options);this.store=new Fy(this.options.resources,this.options);const v=this.services;v.logger=Ar,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new L_(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),x&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=s(x),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new Ky(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new R_(s(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.languageDetector&&(v.languageDetector=s(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=s(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new wd(this.services,this.options),this.translator.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,a||(a=Bu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const x=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);x.length>0&&x[0]!=="dev"&&(this.options.lng=x[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(x=>{this[x]=(...y)=>this.store[x](...y)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(x=>{this[x]=(...y)=>(this.store[x](...y),this)});const p=Ss(),m=()=>{const x=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),a(y,v)};if(this.languages&&!this.isInitialized)return x(null,this.t.bind(this));this.changeLanguage(this.options.lng,x)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(r,a=Bu){let o=a;const s=Ee(r)?r:this.language;if(typeof r=="function"&&(o=r),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],f=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(x=>{x!=="cimode"&&u.indexOf(x)<0&&u.push(x)})};s?f(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),this.options.preload?.forEach?.(p=>f(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(p)})}else o(null)}reloadResources(r,a,o){const s=Ss();return typeof r=="function"&&(o=r,r=void 0),typeof a=="function"&&(o=a,a=void 0),r||(r=this.languages),a||(a=this.options.ns),o||(o=Bu),this.services.backendConnector.reload(r,a,u=>{s.resolve(),o(u)}),s}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&Pb.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1)){for(let a=0;a<this.languages.length;a++){const o=this.languages[a];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(r)<0&&this.store.hasLanguageSomeTranslations(r)&&(this.resolvedLanguage=r,this.languages.unshift(r))}}changeLanguage(r,a){this.isLanguageChangingTo=r;const o=Ss();this.emit("languageChanging",r);const s=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?this.isLanguageChangingTo===r&&(s(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve((...x)=>this.t(...x)),a&&a(p,(...x)=>this.t(...x))},f=p=>{!r&&!p&&this.services.languageDetector&&(p=[]);const m=Ee(p)?p:p&&p[0],x=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(Ee(p)?[p]:p);x&&(this.language||s(x),this.translator.language||this.translator.changeLanguage(x),this.services.languageDetector?.cacheUserLanguage?.(x)),this.loadResources(x,y=>{u(y,x)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(r),o}getFixedT(r,a,o){const s=(u,f,...p)=>{let m;typeof f!="object"?m=this.options.overloadTranslationOptionHandler([u,f].concat(p)):m={...f},m.lng=m.lng||s.lng,m.lngs=m.lngs||s.lngs,m.ns=m.ns||s.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||o||s.keyPrefix);const x=this.options.keySeparator||".";let y;return m.keyPrefix&&Array.isArray(u)?y=u.map(v=>(typeof v=="function"&&(v=mg(v,{...this.options,...f})),`${m.keyPrefix}${x}${v}`)):(typeof u=="function"&&(u=mg(u,{...this.options,...f})),y=m.keyPrefix?`${m.keyPrefix}${x}${u}`:u),this.t(y,m)};return Ee(r)?s.lng=r:s.lngs=r,s.ns=a,s.keyPrefix=o,s}t(...r){return this.translator?.translate(...r)}exists(...r){return this.translator?.exists(...r)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r,a={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=a.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const f=(p,m)=>{const x=this.services.backendConnector.state[`${p}|${m}`];return x===-1||x===0||x===2};if(a.precheck){const p=a.precheck(this,f);if(p!==void 0)return p}return!!(this.hasResourceBundle(o,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||f(o,r)&&(!s||f(u,r)))}loadNamespaces(r,a){const o=Ss();return this.options.ns?(Ee(r)&&(r=[r]),r.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),a&&a(s)}),o):(a&&a(),Promise.resolve())}loadLanguages(r,a){const o=Ss();Ee(r)&&(r=[r]);const s=this.options.preload||[],u=r.filter(f=>s.indexOf(f)<0&&this.services.languageUtils.isSupportedCode(f));return u.length?(this.options.preload=s.concat(u),this.loadResources(f=>{o.resolve(),a&&a(f)}),o):(a&&a(),Promise.resolve())}dir(r){if(r||(r=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!r)return"rtl";try{const s=new Intl.Locale(r);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Vy(O0());return r.toLowerCase().indexOf("-latn")>1?"ltr":a.indexOf(o.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(r={},a){const o=new Is(r,a);return o.createInstance=Is.createInstance,o}cloneInstance(r={},a=Bu){const o=r.forkResourceStore;o&&delete r.forkResourceStore;const s={...this.options,...r,isClone:!0},u=new Is(s);if((r.debug!==void 0||r.prefix!==void 0)&&(u.logger=u.logger.clone(r)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const p=Object.keys(this.store.data).reduce((m,x)=>(m[x]={...this.store.data[x]},m[x]=Object.keys(m[x]).reduce((y,v)=>(y[v]={...m[x][v]},y),m[x]),m),{});u.store=new Fy(p,s),u.services.resourceStore=u.store}if(r.interpolation){const m={...O0().interpolation,...this.options.interpolation,...r.interpolation},x={...s,interpolation:m};u.services.interpolator=new Ky(x)}return u.translator=new wd(u.services,s),u.translator.on("*",(p,...m)=>{u.emit(p,...m)}),u.init(s,a),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const rt=Is.createInstance();rt.createInstance;rt.dir;rt.init;rt.loadResources;rt.reloadResources;rt.use;rt.changeLanguage;rt.getFixedT;rt.t;rt.exists;rt.setDefaultNamespace;rt.hasLoadedNamespace;rt.loadNamespaces;rt.loadLanguages;const U_=(e,r,a,o)=>{const s=[a,{code:r,...o||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(s,"warn","react-i18next::",!0);eo(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...s):console?.warn&&console.warn(...s)},t2={},Fb=(e,r,a,o)=>{eo(a)&&t2[a]||(eo(a)&&(t2[a]=new Date),U_(e,r,a,o))},Yb=(e,r)=>()=>{if(e.isInitialized)r();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),r()};e.on("initialized",a)}},vg=(e,r,a)=>{e.loadNamespaces(r,Yb(e,a))},n2=(e,r,a,o)=>{if(eo(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(r)>-1)return vg(e,a,o);a.forEach(s=>{e.options.ns.indexOf(s)<0&&e.options.ns.push(s)}),e.loadLanguages(r,Yb(e,o))},G_=(e,r,a={})=>!r.languages||!r.languages.length?(Fb(r,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:r.languages}),!0):r.hasLoadedNamespace(e,{lng:a.lng,precheck:(o,s)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,e))return!1}}),eo=e=>typeof e=="string",P_=e=>typeof e=="object"&&e!==null,q_=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,W_={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},F_=e=>W_[e],Y_=e=>e.replace(q_,F_);let xg={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Y_,transDefaultProps:void 0};const V_=(e={})=>{xg={...xg,...e}},Z_=()=>xg;let Vb;const X_=e=>{Vb=e},Q_=()=>Vb,K_={type:"3rdParty",init(e){V_(e.options.react),X_(e)}},J_=h.createContext();class eR{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var z0={exports:{}},D0={};var r2;function tR(){if(r2)return D0;r2=1;var e=to();function r(v,k){return v===k&&(v!==0||1/v===1/k)||v!==v&&k!==k}var a=typeof Object.is=="function"?Object.is:r,o=e.useState,s=e.useEffect,u=e.useLayoutEffect,f=e.useDebugValue;function p(v,k){var C=k(),S=o({inst:{value:C,getSnapshot:k}}),E=S[0].inst,T=S[1];return u(function(){E.value=C,E.getSnapshot=k,m(E)&&T({inst:E})},[v,C,k]),s(function(){return m(E)&&T({inst:E}),v(function(){m(E)&&T({inst:E})})},[v]),f(C),C}function m(v){var k=v.getSnapshot;v=v.value;try{var C=k();return!a(v,C)}catch{return!0}}function x(v,k){return k()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:p;return D0.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,D0}var a2;function nR(){return a2||(a2=1,z0.exports=tR()),z0.exports}var rR=nR();const aR=(e,r)=>eo(r)?r:P_(r)&&eo(r.defaultValue)?r.defaultValue:Array.isArray(e)?e[e.length-1]:e,iR={t:aR,ready:!1},oR=()=>()=>{},hp=(e,r={})=>{const{i18n:a}=r,{i18n:o,defaultNS:s}=h.useContext(J_)||{},u=a||o||Q_();u&&!u.reportNamespaces&&(u.reportNamespaces=new eR),u||Fb(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const f=h.useMemo(()=>({...Z_(),...u?.options?.react,...r}),[u,r]),{useSuspense:p,keyPrefix:m}=f,x=e||s||u?.options?.defaultNS,y=eo(x)?[x]:x||["translation"],v=h.useMemo(()=>y,y);u?.reportNamespaces?.addUsedNamespaces?.(v);const k=h.useRef(0),C=h.useCallback(P=>{if(!u)return oR;const{bindI18n:V,bindI18nStore:U}=f,Z=()=>{k.current+=1,P()};return V&&u.on(V,Z),U&&u.store.on(U,Z),()=>{V&&V.split(" ").forEach(re=>u.off(re,Z)),U&&U.split(" ").forEach(re=>u.store.off(re,Z))}},[u,f]),S=h.useRef(),E=h.useCallback(()=>{if(!u)return iR;const P=!!(u.isInitialized||u.initializedStoreOnce)&&v.every(te=>G_(te,u,f)),V=r.lng||u.language,U=k.current,Z=S.current;if(Z&&Z.ready===P&&Z.lng===V&&Z.keyPrefix===m&&Z.revision===U)return Z;const X={t:u.getFixedT(V,f.nsMode==="fallback"?v:v[0],m),ready:P,lng:V,keyPrefix:m,revision:U};return S.current=X,X},[u,v,m,f,r.lng]),[T,$]=h.useState(0),{t:L,ready:N}=rR.useSyncExternalStore(C,E,E);h.useEffect(()=>{if(u&&!N&&!p){const P=()=>$(V=>V+1);r.lng?n2(u,r.lng,v,P):vg(u,v,P)}},[u,r.lng,v,N,p,T]);const z=u||{},_=h.useRef(null),H=h.useRef(),j=P=>{const V=Object.getOwnPropertyDescriptors(P);V.__original&&delete V.__original;const U=Object.create(Object.getPrototypeOf(P),V);if(!Object.prototype.hasOwnProperty.call(U,"__original"))try{Object.defineProperty(U,"__original",{value:P,writable:!1,enumerable:!1,configurable:!1})}catch{}return U},A=h.useMemo(()=>{const P=z,V=P?.language;let U=P;P&&(_.current&&_.current.__original===P?H.current!==V?(U=j(P),_.current=U,H.current=V):U=_.current:(U=j(P),_.current=U,H.current=V));const Z=[L,U,N];return Z.t=L,Z.i18n=U,Z.ready=N,Z},[L,z,N,z.resolvedLanguage,z.language,z.languages]);if(u&&p&&!N)throw new Promise(P=>{const V=()=>P();r.lng?n2(u,r.lng,v,V):vg(u,v,V)});return A},lR=we.div`
  margin: 0;
`,sR=we.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,cR=we.div`
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: 20px;
  color: var(--grey-9);
`,uR="full.name@example.com",dR=!0,fR=!0,hR=!0,gR="#",pR=()=>{const{onThemeToggle:e,isLightMode:r}=ic(),{t:a}=hp(["GlobalUI","Common"]),o=h.useCallback(()=>{const u=rt.language==="ja"?"en":"ja";rt.changeLanguage(u),localStorage.setItem("language",u)},[]),s=c.jsx(sR,{children:c.jsxs(cR,{children:[c.jsx("p",{children:a("Common:userDrawerTextP1")}),c.jsx("p",{children:a("Common:userDrawerTextP2")})]})});return c.jsxs(lR,{children:[c.jsx(zn,{children:"CustomUserDrawerPage.tsx"}),c.jsx(Bb,{userDrawerBespoke:s,loggedInUser:uR,hasSearch:dR,useNotifications:fR,logoutLink:gR,searchPlaceholder:a("Common:searchPlaceholder"),isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,hasLanguage:hR,onLanguageToggle:o,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),accountOptionText:a("Common:accountOptions"),currentUserText:a("GlobalUI:currentUser"),userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}]})]})},mR=we.div`
  margin: 100px 200px;
`,vR=we.div`
  height: 1px;
  border-radius: 3px;
  background-color: var(--grey-4);
  margin-left: 0px;
`,xR=we.div`
  margin-top: 20px;
`,yR=we.div`
  margin-top: 20px;
`,bR=()=>c.jsxs(mR,{children:[c.jsx(zn,{children:"TabsPage.tsx"}),c.jsxs(lc,{children:[c.jsx(ma,{title:"Tabs Example",areaTitle:"Examples",areaHref:"/"}),c.jsxs(sp,{children:[c.jsxs(up,{defaultTabId:"tab1",children:[c.jsx(Hs,{tabFor:"tab1",children:"Tab 1"}),c.jsx(Hs,{tabFor:"tab2",children:"Tab 2"})]}),c.jsx(vR,{}),c.jsx(ga,{tabId:"tab1",children:c.jsxs(xR,{children:[c.jsx(Pt,{htmlFor:"fullname",labelText:"Content of tab 1"}),c.jsx(_t,{fieldState:"default",required:!0,label:"Full Name",name:"fullname",id:"fullname"}),c.jsx(_t,{fieldState:"default",required:!0,label:"Department",name:"department",id:"department"}),c.jsx(dt,{design:"primary",size:"small",children:" Save "})]})}),c.jsx(ga,{tabId:"tab2",children:c.jsxs(yR,{children:[c.jsx(Pt,{htmlFor:"content2",labelText:"Content of tab 2"}),c.jsx(Pt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),c.jsx(dt,{design:"primary",size:"small",children:" OK "})]})})]})]})]}),Cs=we.div`
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
`,wR=[{id:"primaryBase0",buttonType:"default",text:"Example Action 1"},{id:"secondaryBase1",buttonType:"default",text:"Example Action 2",design:"secondary"},{id:"buttonWithIcon2",buttonType:"icon-button",text:"Delete Instance",design:"danger",icon:"DevicesScorerEdge"}],SR=()=>{const{onThemeToggle:e,isLightMode:r}=ic();return c.jsxs(Md,{theme:rc,children:[c.jsx(zn,{children:"GlobalUIPage.tsx"}),c.jsxs(dp,{accountOptionText:"Account Options",canAlwaysPin:!0,legacyLayout:!0,isLightMode:r,switchThemeText:"SWITCH THEME",selectedThemeText:r?"LIGHT MODE":"DARK MODE",onThemeToggle:e,hasSwitchTheme:!0,content:{items:[{href:"/welcome",icon:"Home",title:"Welcome"},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:"About us"},{href:"/company/team",title:"Team"},{href:"/company/contact",title:"Contact"},{href:"/company/table-example",title:"Table Example"},{href:"https://www.google.com/",isExternalLink:!0,title:"External link"}],title:"Company"},{href:"/services",icon:"Usage",submenu:[{title:"Online Services"},{href:"/services/custom",title:"Service custom"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"},{title:"On site Services"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"}],title:"Services"},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:"External link"}]},currentUserText:"Current User",customDrawer:{customComponent:c.jsx("h1",{children:"Hello Drawer"}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"1200px",notificationsHistory:{noNotificationsText:"No new notifications",read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:"New",unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:"Read"},searchPlaceholder:"Search area names, etc.",supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:"Accounts"},{href:"/user/billing",text:"Billing"},{href:"/user/payments",text:"Payments"}],children:[c.jsx(ma,{title:"Welcome",introductionText:"Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. ",rightContent:c.jsx(tb,{buttons:wR})}),c.jsxs(Cs,{children:[c.jsx("h2",{children:"What is Lorem Ipsum?"}),c.jsx("p",{children:"Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur. Enim magna sunt elit aliqua reprehenderit."})]}),c.jsxs(Cs,{children:[c.jsx("h2",{children:"Why do we use it?"}),c.jsx("p",{children:"Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit. Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do. Eiusmod nisi elit fugiat occaecat elit culpa est qui."})]}),c.jsxs(Cs,{children:[c.jsx("h2",{children:"Where does it come from?"}),c.jsx("p",{children:"Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt voluptate laborum esse minim."})]}),c.jsxs(Cs,{children:[c.jsx("h2",{children:"Where can I get some?"}),c.jsx("p",{children:"Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum tempor incididunt irure duis mollit."})]}),c.jsxs(Cs,{children:[c.jsx("h2",{children:"Example"}),c.jsx("p",{children:"Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat."})]})]})]})},CR=we.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kR=we.div`
  --error: red;
  --info: blue;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,ER=()=>c.jsxs(CR,{children:[c.jsx(zn,{children:"CustomAlertsPage.tsx"}),c.jsx("h3",{children:"Default Based Colors"}),c.jsx(fa,{message:"Base color error message",type:"error",hideCloseButton:!0}),c.jsx(fa,{message:"Base color info message",type:"info",hideCloseButton:!0}),c.jsxs(kR,{children:[c.jsx("h3",{children:"Custom Local file Colors"}),c.jsx(fa,{message:"Custom color error message",type:"error",hideCloseButton:!0}),c.jsx(fa,{message:"Custom color info message",type:"info",hideCloseButton:!0})]}),c.jsx("h3",{children:"Custom Global Project Colors"}),c.jsx(fa,{message:"Custom color success message",type:"success",hideCloseButton:!0}),c.jsx(fa,{message:"Custom color warning message",type:"warning",hideCloseButton:!0})]}),jR=we.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--grey-8) 1px dotted;
  margin-bottom: 20px;
`,TR=()=>{const{onThemeToggle:e,isLightMode:r}=ic(),{t:a}=hp(["GlobalUI","Common"]),o=h.useCallback(()=>{const f=rt.language==="ja"?"en":"ja";rt.changeLanguage(f),localStorage.setItem("language",f)},[]),s=[{id:"primaryBase0",buttonType:"default",text:a("Common:exampleAction")}],u={UtilityHeaderOptions:{back:{label:a("Common:breadcrumbs.back"),link:"/"},breadcrumbs:[{text:a("Common:breadcrumbs.firstText"),href:"/"},{text:a("Common:breadcrumbs.secondText"),href:"#2"},{text:a("Common:breadcrumbs.thirdText"),href:"#3"},{text:a("Common:breadcrumbs.fourText"),href:"#4"},{text:a("Common:breadcrumbs.fiveText"),href:"#5"}],showBreadcrumbs:!0,share:{show:!0,label:a("Common:share"),link:"https://www.example.com",copiedLabel:"Copied"}},PageHeaderArea:c.jsx(ma,{title:a("Common:pageTitle"),introductionText:a("Common:pageIntroduction"),icon:"Home",rightContent:c.jsx(tb,{buttons:s})}),TabsElementArea:c.jsxs(up,{defaultTabId:"tab1",children:[c.jsx(Hs,{tabFor:"tab1",children:a("Common:home")}),c.jsx(Hs,{tabFor:"tab2",children:a("Common:example1")}),c.jsx(Hs,{tabFor:"tab3",children:a("Common:example2")})]})};return c.jsxs(Md,{theme:rc,children:[c.jsx(zn,{children:"Layouts.tsx"}),c.jsx(dp,{accountOptionText:a("Common:accountOptions"),canAlwaysPin:!0,isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:o,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),badge:{text:a("Common:badgeTitle"),color:"primary",linkTo:"#",linkText:a("GlobalUI:login")},hasSwitchTheme:!0,keepOpenText:a("GlobalUI:keepOpenText"),autoHideText:a("GlobalUI:autoHideText"),supportText:a("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:a("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:a("Common:aboutUs")},{href:"/company/team",title:a("Common:team")},{href:"/company/contact",title:a("Common:contact")},{href:"/company/table-example",title:a("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:a("Common:externalLink")}],title:a("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:a("Common:onlineServices")},{href:"/services/custom",title:a("Common:serviceCustom")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")},{title:a("Common:onSiteServices")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")}],title:a("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:a("Common:externalLink")}]},currentUserText:a("GlobalUI:currentUser"),customDrawer:{customComponent:c.jsx("h1",{style:{textAlign:"center"},children:a("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:a("GlobalUI:logout"),maxWidth:"none",notificationsHistory:{noNotificationsText:a("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:a("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:a("Common:unreadNotificationsText")},searchPlaceholder:a("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}],children:c.jsxs(kb,{layout:"default",HeaderContent:u,children:[c.jsx(ga,{tabId:"tab1",children:c.jsxs("div",{children:[c.jsx("h1",{children:"Full Width Container"}),c.jsx("p",{children:a("Common:descriptionTab1")}),c.jsx(TO,{children:c.jsx(jR,{})}),c.jsx("h2",{children:"Lorem Ipsum"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("h2",{children:"Dolor Sit Amet"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),c.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."}),c.jsx("h2",{children:"Proident Nostrud"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),c.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."})]})}),c.jsx(ga,{tabId:"tab2",children:c.jsxs("div",{children:[c.jsx(Pt,{htmlFor:"fullname",labelText:a("Common:titleTab2")}),c.jsx(_t,{fieldState:"default",required:!0,label:a("Common:formName"),name:"fullname",id:"fullname"}),c.jsx(_t,{fieldState:"default",required:!0,label:a("Common:formDepartment"),name:"department",id:"department"}),c.jsx(dt,{design:"primary",size:"small",children:" Save "})]})}),c.jsx(ga,{tabId:"tab3",children:c.jsxs("div",{children:[c.jsx(Pt,{htmlFor:"content2",labelText:a("Common:titleTab3")}),c.jsx(Pt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),c.jsx(dt,{design:"primary",size:"small",children:" OK "})]})})]})})]})},MR=()=>{const{onThemeToggle:e,isLightMode:r}=ic(),{t:a}=hp(["GlobalUI","Common"]),[o]=h.useState("horizontal"),[s]=h.useState(!1),u=h.useCallback(()=>{const x=rt.language==="ja"?"en":"ja";rt.changeLanguage(x),localStorage.setItem("language",x)},[]),f=h.useCallback(x=>{console.log(`Side Area Current State: ${x}`)},[]),p=c.jsx(iy,{title:"Main Area"}),m=c.jsx(iy,{title:"Side Area"});return c.jsxs(Md,{theme:rc,children:[c.jsx(zn,{children:"SplitLayout.tsx"}),c.jsx(dp,{accountOptionText:a("Common:accountOptions"),canAlwaysPin:!0,isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:u,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),hasSwitchTheme:!0,keepOpenText:a("GlobalUI:keepOpenText"),autoHideText:a("GlobalUI:autoHideText"),supportText:a("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:a("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:a("Common:aboutUs")},{href:"/company/team",title:a("Common:team")},{href:"/company/contact",title:a("Common:contact")},{href:"/company/table-example",title:a("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:a("Common:externalLink")}],title:a("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:a("Common:onlineServices")},{href:"/services/custom",title:a("Common:serviceCustom")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")},{title:a("Common:onSiteServices")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")}],title:a("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:a("Common:externalLink")}]},currentUserText:a("GlobalUI:currentUser"),customDrawer:{customComponent:c.jsx("h1",{style:{textAlign:"center"},children:a("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"none",notificationsHistory:{noNotificationsText:a("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:a("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:a("Common:unreadNotificationsText")},searchPlaceholder:a("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}],children:c.jsx(kb,{layout:"dashboard",children:c.jsx(RO,{layout:o,persist:!0,persistenceKey:"my_unique_key",reverse:s,mainArea:{content:p,minSize:120},sideArea:{content:m,collapsable:!0,minSize:200,defaultCollapsed:!0,onSideAreaStateChange:f}})})})]})},$R=we.div`
  padding: 50px;
`,i2=we.div`
  margin-top: 30px;
`,o2=we.div`
  margin-top: 30px;
  margin-bottom: 60px;
`,AR=we.div`
  font-size: 18px;
  font-weight: 600;
`,LR=we.div`
  margin-top: 10px;
`,OR=e=>new Promise((r,a)=>{setTimeout(()=>{e?a(new Error("Simulated fetch failure")):r([{id:1,title:"Mock Product 1"},{id:2,title:"Mock Product 2"},{id:3,title:"Mock Product 3"}])},1500)}),zR=()=>{const[e,r]=h.useState(!1),[a,o]=h.useState(null),[s,u]=h.useState(!1),[f,p]=h.useState(null),[m,x]=h.useState("default"),[y,v]=h.useState(!1),k=h.useCallback(async()=>{if(x("default"),e||f!==null){r(!1),o(null),p(null);return}u(!0),x("loading"),p(null);try{const S=await OR(y);o(S),r(!0),x("default")}catch{o(null),p("Failed to fetch data"),x("failure")}finally{u(!1)}},[e,y,f]),C=h.useCallback(S=>{v(S),r(!1),o(null),p(null),x("default")},[]);return c.jsxs($R,{children:[c.jsx(ma,{title:"Switch Component Examples",icon:"Settings"}),c.jsxs(o2,{children:[c.jsx(ma,{title:"Uncontrolled Component",introductionText:"This switch uses defaultChecked prop and manages its own state internally"}),c.jsx(i2,{children:c.jsx(fl,{labelText:"Toggle Switch (Uncontrolled)",defaultChecked:!0,onChangeCallback:S=>console.log("Uncontrolled switch changed:",S)})})]}),c.jsxs(o2,{children:[c.jsx(ma,{title:"Controlled Component",introductionText:"This switch uses checked and onChangeCallback props to control its state"}),c.jsx(Pt,{labelText:"Show Fail Scenario",htmlFor:"example1",direction:"row",children:c.jsx(Kg,{checked:y,onChangeCallback:C},"example1")}),c.jsxs(i2,{children:[c.jsx(fl,{labelText:"Fetch Data (Controlled)",checked:e,onChangeCallback:k,state:m}),s&&c.jsx("p",{children:"Loading..."}),a&&c.jsxs(LR,{children:[c.jsx(AR,{children:"API Response"}),c.jsx("ul",{children:a.map(S=>c.jsx("li",{children:S.username||S.title},S.id))})]}),f&&c.jsx("p",{style:{color:"red"},children:f})]})]})]})},DR=()=>c.jsx(UE,{children:c.jsxs(vE,{children:[c.jsx(Kt,{path:"/",element:c.jsx(PD,{})}),c.jsx(Kt,{path:"/line",element:c.jsx(RD,{})}),c.jsx(Kt,{path:"/linevideo",element:c.jsx(ID,{})}),c.jsx(Kt,{path:"/linertc",element:c.jsx(HD,{})}),c.jsx(Kt,{path:"/login",element:c.jsx(d_,{onLogin:()=>{}})}),c.jsx(Kt,{path:"/forms",element:c.jsx(_D,{})}),c.jsx(Kt,{path:"/table",element:c.jsx(v_,{})}),c.jsx(Kt,{path:"/customdrawer",element:c.jsx(pR,{})}),c.jsx(Kt,{path:"/ptz",element:c.jsx($L,{socketUrl:"ws://localhost/wsapp/",imageRefresh:2e3,children:c.jsx(FD,{})})}),c.jsx(Kt,{path:"/tabs",element:c.jsx(bR,{})}),c.jsx(Kt,{path:"/customalert",element:c.jsx(ER,{})}),c.jsx(Kt,{path:"/globalUI",element:c.jsx(SR,{})}),c.jsx(Kt,{path:"/layouts",element:c.jsx(TR,{})}),c.jsx(Kt,{path:"/split-layouts",element:c.jsx(MR,{})}),c.jsx(Kt,{path:"/switch-test",element:c.jsx(zR,{})})]})});window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function _R(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}const RR="Powered By:",NR="Welcome",HR="Guest",BR="Share",IR="Home",UR="Example Action",GR="Thanks for using our UI library.",PR="Example 1",qR="Example 2",WR="Account Options",FR="About us",YR="Team",VR="Contact",ZR="Company",XR="Table Example",QR="External link",KR="Online Services",JR="Service custom",eN="Service special",tN="Service Extra Special",nN="On site Services",rN="Services",aN="Example Drawer",iN="No new notifications",oN="Read",lN="UnRead",sN="Search area names, etc.",cN="Accounts",uN="Billing",dN="Payments",fN="The below line uses the FullWidthContentBlock component to break out of the layout and span the full width of the browser.",hN="Content Tab 2",gN="Content Tab 3",pN="Name",mN="Department",vN="Custom content can be injected under the user menu like this.",xN="The styling for this is left to you to include, keeping it flexible.",yN={back:"Back",firstText:"Examples",secondText:"Two",thirdText:"Third",fourText:"Four",fiveText:"Five"},bN={madeby:RR,pageTitle:NR,badgeTitle:HR,share:BR,home:IR,exampleAction:UR,pageIntroduction:GR,example1:PR,example2:qR,accountOptions:WR,aboutUs:FR,team:YR,contact:VR,company:ZR,tableExample:XR,externalLink:QR,onlineServices:KR,serviceCustom:JR,serviceSpecial:eN,serviceExtraSpecial:tN,onSiteServices:nN,services:rN,helloDrawer:aN,noNotificationsText:iN,readNotificationsText:oN,unreadNotificationsText:lN,searchPlaceholder:sN,accounts:cN,billing:uN,payments:dN,descriptionTab1:fN,titleTab2:hN,titleTab3:gN,formName:pN,formDepartment:mN,userDrawerTextP1:vN,userDrawerTextP2:xN,breadcrumbs:yN},wN="Powered By:",SN="ようこそ",CN="ゲスト",kN="共有",EN="ホーム",jN="サンプル 1",TN="サンプル 2",MN="例1のアクション",$N="UIライブラリのご利用ありがとうございます。",AN="アカウントオプション",LN="会社概要",ON="チーム",zN="コンタクト",DN="会社概要",_N="テーブル例",RN="外部リンク",NN="オンラインサービス",HN="サービスカスタム",BN="サービススペシャル",IN="特別なサービス",UN="オンサイトサービス",GN="サービス",PN="例ドラウェ",qN="新着通知なし",WN="既読通知",FN="未読通知",YN="検索エリア名など",VN="アカウント一覧",ZN="請求",XN="支払い",QN="以下の行では、FullWidthContentBlock コンポーネントを使用してレイアウトの制約を解除し、ブラウザーの全幅に広げています。",KN="タブ2の内容",JN="タブ3の内容",eH="名",tH="部門",nH="カスタムコンテンツは、このようにユーザーメニューの下に挿入することができます",rH="スタイリングは自由に設定できます",aH={back:"戻る",firstText:"実例",secondText:"第2",thirdText:"第3",fourText:"第4",fiveText:"第5"},iH={madeby:wN,pageTitle:SN,badgeTitle:CN,share:kN,home:EN,example1:jN,example2:TN,exampleAction:MN,pageIntroduction:$N,accountOptions:AN,aboutUs:LN,team:ON,contact:zN,company:DN,tableExample:_N,externalLink:RN,onlineServices:NN,serviceCustom:HN,serviceSpecial:BN,serviceExtraSpecial:IN,onSiteServices:UN,services:GN,helloDrawer:PN,noNotificationsText:qN,readNotificationsText:WN,unreadNotificationsText:FN,searchPlaceholder:YN,accounts:VN,billing:ZN,payments:XN,descriptionTab1:QN,titleTab2:KN,titleTab3:JN,formName:eH,formDepartment:tH,userDrawerTextP1:nH,userDrawerTextP2:rH,breadcrumbs:aH},oH="Login",lH="Logout",sH="Current User",cH="Keep Open",uH="Auto-Hide",dH="Help & Support",fH="No new notifications",hH="Read",gH="UnRead",pH={darkMode:"DARK MODE",lightMode:"LIGHT MODE",switchTheme:"SWITCH THEME",en:"English",ja:"Japanese"},mH={login:oH,logout:lH,currentUser:sH,keepOpenText:cH,autoHideText:uH,supportText:dH,noNotificationsText:fH,readNotificationsText:hH,unreadNotificationsText:gH,theme:pH},vH="ログイン",xH="ログアウト",yH="現在のユーザー",bH="開いた状態を維持",wH="自動で隠す",SH="ヘルプとサポート",CH="新着通知なし",kH="既読通知",EH="未読通知",jH={darkMode:"ダークモード",lightMode:"ライトモード",switchTheme:"テーマの変更",en:"英語",ja:"日本語"},TH={login:vH,logout:xH,currentUser:yH,keepOpenText:bH,autoHideText:wH,supportText:SH,noNotificationsText:CH,readNotificationsText:kH,unreadNotificationsText:EH,theme:jH},{slice:MH,forEach:$H}=[];function AH(e){return $H.call(MH.call(arguments,1),r=>{if(r)for(const a in r)e[a]===void 0&&(e[a]=r[a])}),e}function LH(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const l2=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,OH=function(e,r){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(r);let u=`${e}=${s}`;if(o.maxAge>0){const f=o.maxAge-0;if(Number.isNaN(f))throw new Error("maxAge should be a Number");u+=`; Max-Age=${Math.floor(f)}`}if(o.domain){if(!l2.test(o.domain))throw new TypeError("option domain is invalid");u+=`; Domain=${o.domain}`}if(o.path){if(!l2.test(o.path))throw new TypeError("option path is invalid");u+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");u+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(u+="; Partitioned"),u},s2={create(e,r,a,o){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+a*60*1e3)),o&&(s.domain=o),document.cookie=OH(e,r,s)},read(e){const r=`${e}=`,a=document.cookie.split(";");for(let o=0;o<a.length;o++){let s=a[o];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(r)===0)return s.substring(r.length,s.length)}return null},remove(e,r){this.create(e,"",-1,r)}};var zH={name:"cookie",lookup(e){let{lookupCookie:r}=e;if(r&&typeof document<"u")return s2.read(r)||void 0},cacheUserLanguage(e,r){let{lookupCookie:a,cookieMinutes:o,cookieDomain:s,cookieOptions:u}=r;a&&typeof document<"u"&&s2.create(a,e,o,s,u)}},DH={name:"querystring",lookup(e){let{lookupQuerystring:r}=e,a;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let f=0;f<u.length;f++){const p=u[f].indexOf("=");p>0&&u[f].substring(0,p)===r&&(a=u[f].substring(p+1))}}return a}},_H={name:"hash",lookup(e){let{lookupHash:r,lookupFromHashIndex:a}=e,o;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const u=s.substring(1);if(r){const f=u.split("&");for(let p=0;p<f.length;p++){const m=f[p].indexOf("=");m>0&&f[p].substring(0,m)===r&&(o=f[p].substring(m+1))}}if(o)return o;if(!o&&a>-1){const f=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?f[typeof a=="number"?a:0]?.replace("/",""):void 0}}}return o}};let Ko=null;const c2=()=>{if(Ko!==null)return Ko;try{if(Ko=typeof window<"u"&&window.localStorage!==null,!Ko)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Ko=!1}return Ko};var RH={name:"localStorage",lookup(e){let{lookupLocalStorage:r}=e;if(r&&c2())return window.localStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupLocalStorage:a}=r;a&&c2()&&window.localStorage.setItem(a,e)}};let Jo=null;const u2=()=>{if(Jo!==null)return Jo;try{if(Jo=typeof window<"u"&&window.sessionStorage!==null,!Jo)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Jo=!1}return Jo};var NH={name:"sessionStorage",lookup(e){let{lookupSessionStorage:r}=e;if(r&&u2())return window.sessionStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupSessionStorage:a}=r;a&&u2()&&window.sessionStorage.setItem(a,e)}},HH={name:"navigator",lookup(e){const r=[];if(typeof navigator<"u"){const{languages:a,userLanguage:o,language:s}=navigator;if(a)for(let u=0;u<a.length;u++)r.push(a[u]);o&&r.push(o),s&&r.push(s)}return r.length>0?r:void 0}},BH={name:"htmlTag",lookup(e){let{htmlTag:r}=e,a;const o=r||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(a=o.getAttribute("lang")),a}},IH={name:"path",lookup(e){let{lookupFromPathIndex:r}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?a[typeof r=="number"?r:0]?.replace("/",""):void 0}},UH={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:r}=e;const a=typeof r=="number"?r+1:1,o=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[a]}};let Zb=!1;try{document.cookie,Zb=!0}catch{}const Xb=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Zb||Xb.splice(1,1);const GH=()=>({order:Xb,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Qb{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(r,a)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=r,this.options=AH(a,this.options||{},GH()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(zH),this.addDetector(DH),this.addDetector(RH),this.addDetector(NH),this.addDetector(HH),this.addDetector(BH),this.addDetector(IH),this.addDetector(UH),this.addDetector(_H)}addDetector(r){return this.detectors[r.name]=r,this}detect(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return r.forEach(o=>{if(this.detectors[o]){let s=this.detectors[o].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(a=a.concat(s))}}),a=a.filter(o=>o!=null&&!LH(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(r)>-1||a.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(r,this.options)}))}}Qb.type="languageDetector";const PH={en:{Common:bN,GlobalUI:mH},ja:{Common:iH,GlobalUI:TH}};rt.use(Qb).use(K_).init({resources:PH,fallbackLng:"ja",lng:localStorage.getItem("language")||navigator.language,keySeparator:".",interpolation:{escapeValue:!1},defaultNS:"GlobalUI",ns:["Common","GlobalUI"]});const d2="/scorer-ui-kit/assets/Lato3Upr3M-VF-BS60sTW_.woff2",f2="/scorer-ui-kit/assets/Lato3Ita3M-VF-C8KUZ9bO.woff2",qH="/scorer-ui-kit/assets/Monorale-Thin-BQKHXPxk.woff",WH="/scorer-ui-kit/assets/Monorale-ThinItalic-DxjjXtaw.woff",FH="/scorer-ui-kit/assets/Monorale-ExtraLight-ao5tsxV8.woff",YH="/scorer-ui-kit/assets/Monorale-ExtraLightItalic-6yY0Bdrq.woff",VH="/scorer-ui-kit/assets/Monorale-Light-T7gpP2n1.woff",ZH="/scorer-ui-kit/assets/Monorale-LightItalic-f797-kPY.woff",XH="/scorer-ui-kit/assets/Monorale-Regular-DOtBvWqV.woff",QH="/scorer-ui-kit/assets/Monorale-Italic-bzXvo1D-.woff",KH="/scorer-ui-kit/assets/Monorale-Medium-CVfjkY1Z.woff",JH="/scorer-ui-kit/assets/Monorale-MediumItalic-BEsxtezO.woff",eB="/scorer-ui-kit/assets/Monorale-SemiBold-BVVp1RRO.woff",tB="/scorer-ui-kit/assets/Monorale-SemiBoldItalic-nEmp39Cb.woff",nB="/scorer-ui-kit/assets/Monorale-Bold-CtnTlBZA.woff",rB="/scorer-ui-kit/assets/Monorale-ExtraBold-C9ejQABg.woff",aB="/scorer-ui-kit/assets/Monorale-Black-COwa-Bp6.woff",iB=Tg`

@font-face {
    font-family: "Lato";
    src: url(${d2}) format("woff2 supports variations"),
        url(${d2}) format("woff2-variations");
    font-weight: 100 900;
  }

  @font-face {
    font-family: "Lato";
    font-style: italic;
    src: url(${f2}) format("woff2 supports variations"),
        url(${f2}) format("woff2-variations");
    font-weight: 100 900;
  }


  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url(${qH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url(${WH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url(${FH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url(${YH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url(${VH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url(${ZH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url(${XH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url(${QH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url(${KH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url(${JH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url(${eB}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url(${tB}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url(${nB}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url(${rB}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url(${aB}) format('woff');
    font-display: fallback;
  }

`,oB=Tg`
  ${pj};
`,lB=Tg`
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
`;rc.custom.lines.weird={label:{fill:"#fff"},contrastLine:{stroke:"transparent;"},highlightLine:{stroke:"transparent;"},grabHandle:{fill:"transparent;",stroke:"transparent;"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleText:{fill:"transparent"},grabHandleContrast:{fill:"transparent"},handleBase:{fill:"transparent"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{stroke:"transparent;"},handleReactiveRing:{stroke:"transparent;"},handleContrastLayer:{stroke:"transparent;"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}};const sB=()=>(ic(),c.jsx(Md,{theme:rc,children:c.jsx(GT,{children:c.jsxs(WT,{children:[c.jsx(DR,{}),c.jsx(iB,{}),c.jsx(gj,{}),c.jsx(lB,{}),c.jsx(oB,{})]})})})),cB=e4.createRoot(document.getElementById("root"));cB.render(c.jsx(Ye.StrictMode,{children:c.jsx(sB,{})}));_R();
//# sourceMappingURL=index-Dsn9qmuV.js.map
