(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}})();var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var e0={exports:{}},fs={};var Zv;function l4(){if(Zv)return fs;Zv=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(o,s,u){var h=null;if(u!==void 0&&(h=""+u),s.key!==void 0&&(h=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:e,type:o,key:h,ref:s!==void 0?s:null,props:u}}return fs.Fragment=r,fs.jsx=a,fs.jsxs=a,fs}var Xv;function s4(){return Xv||(Xv=1,e0.exports=l4()),e0.exports}var c=s4(),t0={exports:{}},je={};var Qv;function c4(){if(Qv)return je;Qv=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.iterator;function C(A){return A===null||typeof A!="object"?null:(A=k&&A[k]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function M(A,F,Q){this.props=A,this.context=F,this.refs=T,this.updater=Q||S}M.prototype.isReactComponent={},M.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},M.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function O(){}O.prototype=M.prototype;function N(A,F,Q){this.props=A,this.context=F,this.refs=T,this.updater=Q||S}var z=N.prototype=new O;z.constructor=N,E(z,M.prototype),z.isPureReactComponent=!0;var _=Array.isArray;function B(){}var j={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function G(A,F,Q){var le=Q.ref;return{$$typeof:e,type:A,key:F,ref:le!==void 0?le:null,props:Q}}function Y(A,F){return G(A.type,F,A.props)}function I(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function Z(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return F[Q]})}var re=/\/+/g;function X(A,F){return typeof A=="object"&&A!==null&&A.key!=null?Z(""+A.key):F.toString(36)}function te(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(B,B):(A.status="pending",A.then(function(F){A.status==="pending"&&(A.status="fulfilled",A.value=F)},function(F){A.status==="pending"&&(A.status="rejected",A.reason=F)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function H(A,F,Q,le,he){var me=typeof A;(me==="undefined"||me==="boolean")&&(A=null);var fe=!1;if(A===null)fe=!0;else switch(me){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(A.$$typeof){case e:case r:fe=!0;break;case y:return fe=A._init,H(fe(A._payload),F,Q,le,he)}}if(fe)return he=he(A),fe=le===""?"."+X(A,0):le,_(he)?(Q="",fe!=null&&(Q=fe.replace(re,"$&/")+"/"),H(he,F,Q,"",function(Te){return Te})):he!=null&&(I(he)&&(he=Y(he,Q+(he.key==null||A&&A.key===he.key?"":(""+he.key).replace(re,"$&/")+"/")+fe)),F.push(he)),1;fe=0;var xe=le===""?".":le+":";if(_(A))for(var ve=0;ve<A.length;ve++)le=A[ve],me=xe+X(le,ve),fe+=H(le,F,Q,me,he);else if(ve=C(A),typeof ve=="function")for(A=ve.call(A),ve=0;!(le=A.next()).done;)le=le.value,me=xe+X(le,ve++),fe+=H(le,F,Q,me,he);else if(me==="object"){if(typeof A.then=="function")return H(te(A),F,Q,le,he);throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return fe}function q(A,F,Q){if(A==null)return A;var le=[],he=0;return H(A,le,"","",function(me){return F.call(Q,me,he++)}),le}function ae(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var ie=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},de={map:q,forEach:function(A,F,Q){q(A,function(){F.apply(this,arguments)},Q)},count:function(A){var F=0;return q(A,function(){F++}),F},toArray:function(A){return q(A,function(F){return F})||[]},only:function(A){if(!I(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return je.Activity=v,je.Children=de,je.Component=M,je.Fragment=a,je.Profiler=s,je.PureComponent=N,je.StrictMode=o,je.Suspense=m,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,je.__COMPILER_RUNTIME={__proto__:null,c:function(A){return j.H.useMemoCache(A)}},je.cache=function(A){return function(){return A.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(A,F,Q){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var le=E({},A.props),he=A.key;if(F!=null)for(me in F.key!==void 0&&(he=""+F.key),F)!L.call(F,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&F.ref===void 0||(le[me]=F[me]);var me=arguments.length-2;if(me===1)le.children=Q;else if(1<me){for(var fe=Array(me),xe=0;xe<me;xe++)fe[xe]=arguments[xe+2];le.children=fe}return G(A.type,he,le)},je.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},je.createElement=function(A,F,Q){var le,he={},me=null;if(F!=null)for(le in F.key!==void 0&&(me=""+F.key),F)L.call(F,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(he[le]=F[le]);var fe=arguments.length-2;if(fe===1)he.children=Q;else if(1<fe){for(var xe=Array(fe),ve=0;ve<fe;ve++)xe[ve]=arguments[ve+2];he.children=xe}if(A&&A.defaultProps)for(le in fe=A.defaultProps,fe)he[le]===void 0&&(he[le]=fe[le]);return G(A,me,he)},je.createRef=function(){return{current:null}},je.forwardRef=function(A){return{$$typeof:p,render:A}},je.isValidElement=I,je.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ae}},je.memo=function(A,F){return{$$typeof:x,type:A,compare:F===void 0?null:F}},je.startTransition=function(A){var F=j.T,Q={};j.T=Q;try{var le=A(),he=j.S;he!==null&&he(Q,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(B,ie)}catch(me){ie(me)}finally{F!==null&&Q.types!==null&&(F.types=Q.types),j.T=F}},je.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},je.use=function(A){return j.H.use(A)},je.useActionState=function(A,F,Q){return j.H.useActionState(A,F,Q)},je.useCallback=function(A,F){return j.H.useCallback(A,F)},je.useContext=function(A){return j.H.useContext(A)},je.useDebugValue=function(){},je.useDeferredValue=function(A,F){return j.H.useDeferredValue(A,F)},je.useEffect=function(A,F){return j.H.useEffect(A,F)},je.useEffectEvent=function(A){return j.H.useEffectEvent(A)},je.useId=function(){return j.H.useId()},je.useImperativeHandle=function(A,F,Q){return j.H.useImperativeHandle(A,F,Q)},je.useInsertionEffect=function(A,F){return j.H.useInsertionEffect(A,F)},je.useLayoutEffect=function(A,F){return j.H.useLayoutEffect(A,F)},je.useMemo=function(A,F){return j.H.useMemo(A,F)},je.useOptimistic=function(A,F){return j.H.useOptimistic(A,F)},je.useReducer=function(A,F,Q){return j.H.useReducer(A,F,Q)},je.useRef=function(A){return j.H.useRef(A)},je.useState=function(A){return j.H.useState(A)},je.useSyncExternalStore=function(A,F,Q){return j.H.useSyncExternalStore(A,F,Q)},je.useTransition=function(){return j.H.useTransition()},je.version="19.2.4",je}var Kv;function no(){return Kv||(Kv=1,t0.exports=c4()),t0.exports}var f=no();const Ve=Ed(f);var n0={exports:{}},hs={},r0={exports:{}},a0={};var Jv;function u4(){return Jv||(Jv=1,(function(e){function r(H,q){var ae=H.length;H.push(q);e:for(;0<ae;){var ie=ae-1>>>1,de=H[ie];if(0<s(de,q))H[ie]=q,H[ae]=de,ae=ie;else break e}}function a(H){return H.length===0?null:H[0]}function o(H){if(H.length===0)return null;var q=H[0],ae=H.pop();if(ae!==q){H[0]=ae;e:for(var ie=0,de=H.length,A=de>>>1;ie<A;){var F=2*(ie+1)-1,Q=H[F],le=F+1,he=H[le];if(0>s(Q,ae))le<de&&0>s(he,Q)?(H[ie]=he,H[le]=ae,ie=le):(H[ie]=Q,H[F]=ae,ie=F);else if(le<de&&0>s(he,ae))H[ie]=he,H[le]=ae,ie=le;else break e}}return q}function s(H,q){var ae=H.sortIndex-q.sortIndex;return ae!==0?ae:H.id-q.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();e.unstable_now=function(){return h.now()-p}}var m=[],x=[],y=1,v=null,k=3,C=!1,S=!1,E=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(H){for(var q=a(x);q!==null;){if(q.callback===null)o(x);else if(q.startTime<=H)o(x),q.sortIndex=q.expirationTime,r(m,q);else break;q=a(x)}}function _(H){if(E=!1,z(H),!S)if(a(m)!==null)S=!0,B||(B=!0,Z());else{var q=a(x);q!==null&&te(_,q.startTime-H)}}var B=!1,j=-1,L=5,G=-1;function Y(){return T?!0:!(e.unstable_now()-G<L)}function I(){if(T=!1,B){var H=e.unstable_now();G=H;var q=!0;try{e:{S=!1,E&&(E=!1,O(j),j=-1),C=!0;var ae=k;try{t:{for(z(H),v=a(m);v!==null&&!(v.expirationTime>H&&Y());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,k=v.priorityLevel;var de=ie(v.expirationTime<=H);if(H=e.unstable_now(),typeof de=="function"){v.callback=de,z(H),q=!0;break t}v===a(m)&&o(m),z(H)}else o(m);v=a(m)}if(v!==null)q=!0;else{var A=a(x);A!==null&&te(_,A.startTime-H),q=!1}}break e}finally{v=null,k=ae,C=!1}q=void 0}}finally{q?Z():B=!1}}}var Z;if(typeof N=="function")Z=function(){N(I)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,X=re.port2;re.port1.onmessage=I,Z=function(){X.postMessage(null)}}else Z=function(){M(I,0)};function te(H,q){j=M(function(){H(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_next=function(H){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var ae=k;k=q;try{return H()}finally{k=ae}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=k;k=H;try{return q()}finally{k=ae}},e.unstable_scheduleCallback=function(H,q,ae){var ie=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ie+ae:ie):ae=ie,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ae+de,H={id:y++,callback:q,priorityLevel:H,startTime:ae,expirationTime:de,sortIndex:-1},ae>ie?(H.sortIndex=ae,r(x,H),a(m)===null&&H===a(x)&&(E?(O(j),j=-1):E=!0,te(_,ae-ie))):(H.sortIndex=de,r(m,H),S||C||(S=!0,B||(B=!0,Z()))),H},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(H){var q=k;return function(){var ae=k;k=q;try{return H.apply(this,arguments)}finally{k=ae}}}})(a0)),a0}var ex;function d4(){return ex||(ex=1,r0.exports=u4()),r0.exports}var i0={exports:{}},Jt={};var tx;function f4(){if(tx)return Jt;tx=1;var e=no();function r(m){var x="https://react.dev/errors/"+m;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,x,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:x,implementation:y}}var h=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,x){if(m==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Jt.createPortal=function(m,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(r(299));return u(m,x,null,y)},Jt.flushSync=function(m){var x=h.T,y=o.p;try{if(h.T=null,o.p=2,m)return m()}finally{h.T=x,o.p=y,o.d.f()}},Jt.preconnect=function(m,x){typeof m=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(m,x))},Jt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Jt.preinit=function(m,x){if(typeof m=="string"&&x&&typeof x.as=="string"){var y=x.as,v=p(y,x.crossOrigin),k=typeof x.integrity=="string"?x.integrity:void 0,C=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?o.d.S(m,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:k,fetchPriority:C}):y==="script"&&o.d.X(m,{crossOrigin:v,integrity:k,fetchPriority:C,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Jt.preinitModule=function(m,x){if(typeof m=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=p(x.as,x.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(m)},Jt.preload=function(m,x){if(typeof m=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,v=p(y,x.crossOrigin);o.d.L(m,y,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Jt.preloadModule=function(m,x){if(typeof m=="string")if(x){var y=p(x.as,x.crossOrigin);o.d.m(m,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(m)},Jt.requestFormReset=function(m){o.d.r(m)},Jt.unstable_batchedUpdates=function(m,x){return m(x)},Jt.useFormState=function(m,x,y){return h.H.useFormState(m,x,y)},Jt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Jt.version="19.2.4",Jt}var nx;function jg(){if(nx)return i0.exports;nx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),i0.exports=f4(),i0.exports}var rx;function h4(){if(rx)return hs;rx=1;var e=d4(),r=no(),a=jg();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(o(188))}function x(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,l=n;;){var d=i.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){i=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===i)return m(d),t;if(g===l)return m(d),n;g=g.sibling}throw Error(o(188))}if(i.return!==l.return)i=d,l=g;else{for(var w=!1,$=d.child;$;){if($===i){w=!0,i=d,l=g;break}if($===l){w=!0,l=d,i=g;break}$=$.sibling}if(!w){for($=g.child;$;){if($===i){w=!0,i=g,l=d;break}if($===l){w=!0,l=g,i=d;break}$=$.sibling}if(!w)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,k=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case _:return"Suspense";case B:return"SuspenseList";case G:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case N:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case L:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var te=Array.isArray,H=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ie=[],de=-1;function A(t){return{current:t}}function F(t){0>de||(t.current=ie[de],ie[de]=null,de--)}function Q(t,n){de++,ie[de]=t.current,t.current=n}var le=A(null),he=A(null),me=A(null),fe=A(null);function xe(t,n){switch(Q(me,n),Q(he,t),Q(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xv(n),t=yv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(le),Q(le,t)}function ve(){F(le),F(he),F(me)}function Te(t){t.memoizedState!==null&&Q(fe,t);var n=le.current,i=yv(n,t.type);n!==i&&(Q(he,t),Q(le,i))}function pt(t){he.current===t&&(F(le),F(he)),fe.current===t&&(F(fe),ss._currentValue=ae)}var dt,mt;function _n(t){if(dt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);dt=n&&n[1]||"",mt=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+t+mt}var ci=!1;function an(t,n){if(!t||ci)return"";ci=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(ne){var ee=ne}Reflect.construct(t,[],ce)}else{try{ce.call()}catch(ne){ee=ne}t.call(ce.prototype)}}else{try{throw Error()}catch(ne){ee=ne}(ce=t())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(ne){if(ne&&ee&&typeof ne.stack=="string")return[ne.stack,ee.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),w=g[0],$=g[1];if(w&&$){var U=w.split(`
`),J=$.split(`
`);for(d=l=0;l<U.length&&!U[l].includes("DetermineComponentFrameRoot");)l++;for(;d<J.length&&!J[d].includes("DetermineComponentFrameRoot");)d++;if(l===U.length||d===J.length)for(l=U.length-1,d=J.length-1;1<=l&&0<=d&&U[l]!==J[d];)d--;for(;1<=l&&0<=d;l--,d--)if(U[l]!==J[d]){if(l!==1||d!==1)do if(l--,d--,0>d||U[l]!==J[d]){var oe=`
`+U[l].replace(" at new "," at ");return t.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",t.displayName)),oe}while(1<=l&&0<=d);break}}}finally{ci=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?_n(i):""}function Br(t,n){switch(t.tag){case 26:case 27:case 5:return _n(t.type);case 16:return _n("Lazy");case 13:return t.child!==n&&n!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return an(t.type,!1);case 11:return an(t.type.render,!1);case 1:return an(t.type,!0);case 31:return _n("Activity");default:return""}}function xr(t){try{var n="",i=null;do n+=Br(t,i),i=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Dn=Object.prototype.hasOwnProperty,Nn=e.unstable_scheduleCallback,Yt=e.unstable_cancelCallback,Wd=e.unstable_shouldYield,Vd=e.unstable_requestPaint,on=e.unstable_now,Yd=e.unstable_getCurrentPriorityLevel,dc=e.unstable_ImmediatePriority,ui=e.unstable_UserBlockingPriority,wa=e.unstable_NormalPriority,fc=e.unstable_LowPriority,bn=e.unstable_IdlePriority,hc=e.log,gc=e.unstable_setDisableYieldValue,di=null,Zt=null;function wn(t){if(typeof hc=="function"&&gc(t),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(di,t)}catch{}}var Xt=Math.clz32?Math.clz32:Hr,pc=Math.log,Zd=Math.LN2;function Hr(t){return t>>>=0,t===0?32:31-(pc(t)/Zd|0)|0}var fi=256,io=262144,oo=4194304;function Jn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yr(t,n,i){var l=t.pendingLanes;if(l===0)return 0;var d=0,g=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var $=l&134217727;return $!==0?(l=$&~g,l!==0?d=Jn(l):(w&=$,w!==0?d=Jn(w):i||(i=$&~t,i!==0&&(d=Jn(i))))):($=l&~g,$!==0?d=Jn($):w!==0?d=Jn(w):i||(i=l&~t,i!==0&&(d=Jn(i)))),d===0?0:n!==0&&n!==d&&(n&g)===0&&(g=d&-d,i=n&-n,g>=i||g===32&&(i&4194048)!==0)?n:d}function Ur(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function bl(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lo(){var t=oo;return oo<<=1,(oo&62914560)===0&&(oo=4194304),t}function Ir(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function hi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xd(t,n,i,l,d,g){var w=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var $=t.entanglements,U=t.expirationTimes,J=t.hiddenUpdates;for(i=w&~i;0<i;){var oe=31-Xt(i),ce=1<<oe;$[oe]=0,U[oe]=-1;var ee=J[oe];if(ee!==null)for(J[oe]=null,oe=0;oe<ee.length;oe++){var ne=ee[oe];ne!==null&&(ne.lane&=-536870913)}i&=~ce}l!==0&&mc(t,l,0),g!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=g&~(w&~n))}function mc(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Xt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|i&261930}function vc(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var l=31-Xt(i),d=1<<l;d&n|t[l]&n&&(t[l]|=n),i&=~d}}function xc(t,n){var i=n&-n;return i=(i&42)!==0?1:so(i),(i&(t.suspendedLanes|n))!==0?0:i}function so(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function br(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Pv(t.type))}function yc(t,n){var i=q.p;try{return q.p=t,n()}finally{q.p=i}}var wr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+wr,Qt="__reactProps$"+wr,Sa="__reactContainer$"+wr,Sn="__reactEvents$"+wr,Qd="__reactListeners$"+wr,Kd="__reactHandles$"+wr,bc="__reactResources$"+wr,pi="__reactMarker$"+wr;function wl(t){delete t[Mt],delete t[Qt],delete t[Sn],delete t[Qd],delete t[Kd]}function cn(t){var n=t[Mt];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Sa]||i[Mt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=jv(t);t!==null;){if(i=t[Mt])return i;t=jv(t)}return n}t=i,i=t.parentNode}return null}function Ca(t){if(t=t[Mt]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function ka(t){var n=t[bc];return n||(n=t[bc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function wt(t){t[pi]=!0}var wc=new Set,vi={};function Pr(t,n){Ea(t,n),Ea(t+"Capture",n)}function Ea(t,n){for(vi[t]=n,t=0;t<n.length;t++)wc.add(n[t])}var Sr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sc={},Cc={};function Jd(t){return Dn.call(Cc,t)?!0:Dn.call(Sc,t)?!1:Sr.test(t)?Cc[t]=!0:(Sc[t]=!0,!1)}function co(t,n,i){if(Jd(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function uo(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function er(t,n,i,l){if(l===null)t.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+l)}}function Bt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kc(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xi(t,n,i){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(w){i=""+w,g.call(this,w)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(w){i=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function fo(t){if(!t._valueTracker){var n=kc(t)?"checked":"value";t._valueTracker=xi(t,n,""+t[n])}}function Sl(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return t&&(l=kc(t)?t.checked?"true":"false":t.value),t=l,t!==i?(n.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ef=/[\n"\\]/g;function un(t){return t.replace(ef,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cl(t,n,i,l,d,g,w,$){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),n!=null?w==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Bt(n)):t.value!==""+Bt(n)&&(t.value=""+Bt(n)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),n!=null?El(t,w,Bt(n)):i!=null?El(t,w,Bt(i)):l!=null&&t.removeAttribute("value"),d==null&&g!=null&&(t.defaultChecked=!!g),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),$!=null&&typeof $!="function"&&typeof $!="symbol"&&typeof $!="boolean"?t.name=""+Bt($):t.removeAttribute("name")}function kl(t,n,i,l,d,g,w,$){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),n!=null||i!=null){if(!(g!=="submit"&&g!=="reset"||n!=null)){fo(t);return}i=i!=null?""+Bt(i):"",n=n!=null?""+Bt(n):i,$||n===t.value||(t.value=n),t.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=$?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w),fo(t)}function El(t,n,i){n==="number"&&ho(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function ja(t,n,i,l){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&l&&(t[i].defaultSelected=!0)}else{for(i=""+Bt(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function jl(t,n,i){if(n!=null&&(n=""+Bt(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Bt(i):""}function yi(t,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(o(92));if(te(l)){if(1<l.length)throw Error(o(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=Bt(n),t.defaultValue=i,l=t.textContent,l===i&&l!==""&&l!==null&&(t.value=l),fo(t)}function Cn(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var tf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ec(t,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,i):typeof i!="number"||i===0||tf.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function tr(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&i[d]!==l&&Ec(t,d,l)}else for(var g in n)n.hasOwnProperty(g)&&Ec(t,g,n[g])}function Tl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function go(t){return rf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nr(){}var rr=null;function po(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,ar=null;function jc(t){var n=Ca(t);if(n&&(t=n.stateNode)){var i=t[Qt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Cl(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==t&&l.form===t.form){var d=l[Qt]||null;if(!d)throw Error(o(90));Cl(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===t.form&&Sl(l)}break e;case"textarea":jl(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&ja(t,!!i.multiple,n,!1)}}}var bi=!1;function Tc(t,n,i){if(bi)return t(n,i);bi=!0;try{var l=t(n);return l}finally{if(bi=!1,(Ta!==null||ar!==null)&&(du(),Ta&&(n=Ta,t=ar,ar=Ta=null,jc(n),t)))for(n=0;n<t.length;n++)jc(t[n])}}function $a(t,n){var i=t.stateNode;if(i===null)return null;var l=i[Qt]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=!1;if(Bn)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){mo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{mo=!1}var or=null,$l=null,vo=null;function $c(){if(vo)return vo;var t,n=$l,i=n.length,l,d="value"in or?or.value:or.textContent,g=d.length;for(t=0;t<i&&n[t]===d[t];t++);var w=i-t;for(l=1;l<=w&&n[i-l]===d[g-l];l++);return vo=d.slice(t,1<l?1-l:void 0)}function R(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function W(){return!0}function ue(){return!1}function ge(t){function n(i,l,d,g,w){this._reactName=i,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var $ in t)t.hasOwnProperty($)&&(i=t[$],this[$]=i?i(g):g[$]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?W:ue,this.isPropagationStopped=ue,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=W)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=W)},persist:function(){},isPersistent:W}),n}var He={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ke=ge(He),Qe=v({},He,{view:0,detail:0}),St=ge(Qe),vt,tt,Lt,Kt=v({},Qe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lt&&(Lt&&t.type==="mousemove"?(vt=t.screenX-Lt.screenX,tt=t.screenY-Lt.screenY):tt=vt=0,Lt=t),vt)},movementY:function(t){return"movementY"in t?t.movementY:tt}}),Ot=ge(Kt),dn=v({},Kt,{dataTransfer:0}),fn=ge(dn),Cr=v({},Qe,{relatedTarget:0}),kn=ge(Cr),Gr=v({},He,{animationName:0,elapsedTime:0,pseudoElement:0}),Mc=ge(Gr),xo=v({},He,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yo=ge(xo),h3=v({},He,{data:0}),Sp=ge(h3),g3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v3(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=m3[t])?!!n[t]:!1}function af(){return v3}var x3=v({},Qe,{key:function(t){if(t.key){var n=g3[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=R(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?R(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?R(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y3=ge(x3),b3=v({},Kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=ge(b3),w3=v({},Qe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),S3=ge(w3),C3=v({},He,{propertyName:0,elapsedTime:0,pseudoElement:0}),k3=ge(C3),E3=v({},Kt,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j3=ge(E3),T3=v({},He,{newState:0,oldState:0}),$3=ge(T3),M3=[9,13,27,32],of=Bn&&"CompositionEvent"in window,Ml=null;Bn&&"documentMode"in document&&(Ml=document.documentMode);var L3=Bn&&"TextEvent"in window&&!Ml,kp=Bn&&(!of||Ml&&8<Ml&&11>=Ml),Ep=" ",jp=!1;function Tp(t,n){switch(t){case"keyup":return M3.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bo=!1;function O3(t,n){switch(t){case"compositionend":return $p(n);case"keypress":return n.which!==32?null:(jp=!0,Ep);case"textInput":return t=n.data,t===Ep&&jp?null:t;default:return null}}function A3(t,n){if(bo)return t==="compositionend"||!of&&Tp(t,n)?(t=$c(),vo=$l=or=null,bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kp&&n.locale!=="ko"?null:n.data;default:return null}}var z3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!z3[t.type]:n==="textarea"}function Lp(t,n,i,l){Ta?ar?ar.push(l):ar=[l]:Ta=l,n=xu(n,"onChange"),0<n.length&&(i=new ke("onChange","change",null,i,l),t.push({event:i,listeners:n}))}var Ll=null,Ol=null;function R3(t){fv(t,0)}function Lc(t){var n=mi(t);if(Sl(n))return t}function Op(t,n){if(t==="change")return n}var Ap=!1;if(Bn){var lf;if(Bn){var sf="oninput"in document;if(!sf){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),sf=typeof zp.oninput=="function"}lf=sf}else lf=!1;Ap=lf&&(!document.documentMode||9<document.documentMode)}function Rp(){Ll&&(Ll.detachEvent("onpropertychange",_p),Ol=Ll=null)}function _p(t){if(t.propertyName==="value"&&Lc(Ol)){var n=[];Lp(n,Ol,t,po(t)),Tc(R3,n)}}function _3(t,n,i){t==="focusin"?(Rp(),Ll=n,Ol=i,Ll.attachEvent("onpropertychange",_p)):t==="focusout"&&Rp()}function D3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(Ol)}function N3(t,n){if(t==="click")return Lc(n)}function B3(t,n){if(t==="input"||t==="change")return Lc(n)}function H3(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var En=typeof Object.is=="function"?Object.is:H3;function Al(t,n){if(En(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var d=i[l];if(!Dn.call(n,d)||!En(t[d],n[d]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,n){var i=Dp(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=n&&l>=n)return{node:i,offset:n-t};t=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Dp(i)}}function Bp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Bp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ho(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=ho(t.document)}return n}function cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var U3=Bn&&"documentMode"in document&&11>=document.documentMode,wo=null,uf=null,zl=null,df=!1;function Up(t,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;df||wo==null||wo!==ho(l)||(l=wo,"selectionStart"in l&&cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zl&&Al(zl,l)||(zl=l,l=xu(uf,"onSelect"),0<l.length&&(n=new ke("onSelect","select",null,n,i),t.push({event:n,listeners:l}),n.target=wo)))}function wi(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var So={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionrun:wi("Transition","TransitionRun"),transitionstart:wi("Transition","TransitionStart"),transitioncancel:wi("Transition","TransitionCancel"),transitionend:wi("Transition","TransitionEnd")},ff={},Ip={};Bn&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Si(t){if(ff[t])return ff[t];if(!So[t])return t;var n=So[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ip)return ff[t]=n[i];return t}var Pp=Si("animationend"),Gp=Si("animationiteration"),qp=Si("animationstart"),I3=Si("transitionrun"),P3=Si("transitionstart"),G3=Si("transitioncancel"),Fp=Si("transitionend"),Wp=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function lr(t,n){Wp.set(t,n),Pr(n,[t])}var Oc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Hn=[],Co=0,gf=0;function Ac(){for(var t=Co,n=gf=Co=0;n<t;){var i=Hn[n];Hn[n++]=null;var l=Hn[n];Hn[n++]=null;var d=Hn[n];Hn[n++]=null;var g=Hn[n];if(Hn[n++]=null,l!==null&&d!==null){var w=l.pending;w===null?d.next=d:(d.next=w.next,w.next=d),l.pending=d}g!==0&&Vp(i,d,g)}}function zc(t,n,i,l){Hn[Co++]=t,Hn[Co++]=n,Hn[Co++]=i,Hn[Co++]=l,gf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function pf(t,n,i,l){return zc(t,n,i,l),Rc(t)}function Ci(t,n){return zc(t,null,null,n),Rc(t)}function Vp(t,n,i){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i);for(var d=!1,g=t.return;g!==null;)g.childLanes|=i,l=g.alternate,l!==null&&(l.childLanes|=i),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(d=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,d&&n!==null&&(d=31-Xt(i),t=g.hiddenUpdates,l=t[d],l===null?t[d]=[n]:l.push(n),n.lane=i|536870912),g):null}function Rc(t){if(50<ts)throw ts=0,kh=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ko={};function q3(t,n,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,i,l){return new q3(t,n,i,l)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qr(t,n){var i=t.alternate;return i===null?(i=jn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Yp(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _c(t,n,i,l,d,g){var w=0;if(l=t,typeof t=="function")mf(t)&&(w=1);else if(typeof t=="string")w=Zw(t,i,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case G:return t=jn(31,i,n,d),t.elementType=G,t.lanes=g,t;case E:return ki(i.children,d,g,n);case T:w=8,d|=24;break;case M:return t=jn(12,i,n,d|2),t.elementType=M,t.lanes=g,t;case _:return t=jn(13,i,n,d),t.elementType=_,t.lanes=g,t;case B:return t=jn(19,i,n,d),t.elementType=B,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:w=10;break e;case O:w=9;break e;case z:w=11;break e;case j:w=14;break e;case L:w=16,l=null;break e}w=29,i=Error(o(130,t===null?"null":typeof t,"")),l=null}return n=jn(w,i,n,d),n.elementType=t,n.type=l,n.lanes=g,n}function ki(t,n,i,l){return t=jn(7,t,l,n),t.lanes=i,t}function vf(t,n,i){return t=jn(6,t,null,n),t.lanes=i,t}function Zp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function xf(t,n,i){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function Un(t,n){if(typeof t=="object"&&t!==null){var i=Xp.get(t);return i!==void 0?i:(n={value:t,source:n,stack:xr(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:xr(n)}}var Eo=[],jo=0,Dc=null,Rl=0,In=[],Pn=0,Ma=null,kr=1,Er="";function Fr(t,n){Eo[jo++]=Rl,Eo[jo++]=Dc,Dc=t,Rl=n}function Qp(t,n,i){In[Pn++]=kr,In[Pn++]=Er,In[Pn++]=Ma,Ma=t;var l=kr;t=Er;var d=32-Xt(l)-1;l&=~(1<<d),i+=1;var g=32-Xt(n)+d;if(30<g){var w=d-d%5;g=(l&(1<<w)-1).toString(32),l>>=w,d-=w,kr=1<<32-Xt(n)+d|i<<d|l,Er=g+t}else kr=1<<g|i<<d|l,Er=t}function yf(t){t.return!==null&&(Fr(t,1),Qp(t,1,0))}function bf(t){for(;t===Dc;)Dc=Eo[--jo],Eo[jo]=null,Rl=Eo[--jo],Eo[jo]=null;for(;t===Ma;)Ma=In[--Pn],In[Pn]=null,Er=In[--Pn],In[Pn]=null,kr=In[--Pn],In[Pn]=null}function Kp(t,n){In[Pn++]=kr,In[Pn++]=Er,In[Pn++]=Ma,kr=n.id,Er=n.overflow,Ma=t}var Ht=null,at=null,Ne=!1,La=null,Gn=!1,wf=Error(o(519));function Oa(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _l(Un(n,t)),wf}function Jp(t){var n=t.stateNode,i=t.type,l=t.memoizedProps;switch(n[Mt]=t,n[Qt]=l,i){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(i=0;i<rs.length;i++)Re(rs[i],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),kl(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),yi(n,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||mv(n.textContent,i)?(l.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),l.onScroll!=null&&Re("scroll",n),l.onScrollEnd!=null&&Re("scrollend",n),l.onClick!=null&&(n.onclick=nr),n=!0):n=!1,n||Oa(t,!0)}function e1(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:Ht=Ht.return}}function To(t){if(t!==Ht)return!1;if(!Ne)return e1(t),Ne=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Hh(t.type,t.memoizedProps)),i=!i),i&&at&&Oa(t),e1(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));at=Ev(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));at=Ev(t)}else n===27?(n=at,Fa(t.type)?(t=qh,qh=null,at=t):at=n):at=Ht?Fn(t.stateNode.nextSibling):null;return!0}function Ei(){at=Ht=null,Ne=!1}function Sf(){var t=La;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),La=null),t}function _l(t){La===null?La=[t]:La.push(t)}var Cf=A(null),ji=null,Wr=null;function Aa(t,n,i){Q(Cf,n._currentValue),n._currentValue=i}function Vr(t){t._currentValue=Cf.current,F(Cf)}function kf(t,n,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===i)break;t=t.return}}function Ef(t,n,i,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var g=d.dependencies;if(g!==null){var w=d.child;g=g.firstContext;e:for(;g!==null;){var $=g;g=d;for(var U=0;U<n.length;U++)if($.context===n[U]){g.lanes|=i,$=g.alternate,$!==null&&($.lanes|=i),kf(g.return,i,t),l||(w=null);break e}g=$.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(o(341));w.lanes|=i,g=w.alternate,g!==null&&(g.lanes|=i),kf(w,i,t),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===t){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function $o(t,n,i,l){t=null;for(var d=n,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var $=d.type;En(d.pendingProps.value,w.value)||(t!==null?t.push($):t=[$])}}else if(d===fe.current){if(w=d.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(ss):t=[ss])}d=d.return}t!==null&&Ef(n,t,i,l),n.flags|=262144}function Nc(t){for(t=t.firstContext;t!==null;){if(!En(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ti(t){ji=t,Wr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return t1(ji,t)}function Bc(t,n){return ji===null&&Ti(t),t1(t,n)}function t1(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Wr===null){if(t===null)throw Error(o(308));Wr=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wr=Wr.next=n;return i}var F3=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},W3=e.unstable_scheduleCallback,V3=e.unstable_NormalPriority,Ct={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new F3,data:new Map,refCount:0}}function Dl(t){t.refCount--,t.refCount===0&&W3(V3,function(){t.controller.abort()})}var Nl=null,Tf=0,Mo=0,Lo=null;function Y3(t,n){if(Nl===null){var i=Nl=[];Tf=0,Mo=Lh(),Lo={status:"pending",value:void 0,then:function(l){i.push(l)}}}return Tf++,n.then(n1,n1),n}function n1(){if(--Tf===0&&Nl!==null){Lo!==null&&(Lo.status="fulfilled");var t=Nl;Nl=null,Mo=0,Lo=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Z3(t,n){var i=[],l={status:"pending",value:null,reason:null,then:function(d){i.push(d)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<i.length;d++)(0,i[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<i.length;d++)(0,i[d])(void 0)}),l}var r1=H.S;H.S=function(t,n){Um=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Y3(t,n),r1!==null&&r1(t,n)};var $i=A(null);function $f(){var t=$i.current;return t!==null?t:nt.pooledCache}function Hc(t,n){n===null?Q($i,$i.current):Q($i,n.pool)}function a1(){var t=$f();return t===null?null:{parent:Ct._currentValue,pool:t}}var Oo=Error(o(460)),Mf=Error(o(474)),Uc=Error(o(542)),Ic={then:function(){}};function i1(t){return t=t.status,t==="fulfilled"||t==="rejected"}function o1(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(nr,nr),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s1(t),t;default:if(typeof n.status=="string")n.then(nr,nr);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,s1(t),t}throw Li=n,Oo}}function Mi(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Li=i,Oo):i}}var Li=null;function l1(){if(Li===null)throw Error(o(459));var t=Li;return Li=null,t}function s1(t){if(t===Oo||t===Uc)throw Error(o(483))}var Ao=null,Bl=0;function Pc(t){var n=Bl;return Bl+=1,Ao===null&&(Ao=[]),o1(Ao,t,n)}function Hl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Gc(t,n){throw n.$$typeof===k?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function c1(t){function n(V,P){if(t){var K=V.deletions;K===null?(V.deletions=[P],V.flags|=16):K.push(P)}}function i(V,P){if(!t)return null;for(;P!==null;)n(V,P),P=P.sibling;return null}function l(V){for(var P=new Map;V!==null;)V.key!==null?P.set(V.key,V):P.set(V.index,V),V=V.sibling;return P}function d(V,P){return V=qr(V,P),V.index=0,V.sibling=null,V}function g(V,P,K){return V.index=K,t?(K=V.alternate,K!==null?(K=K.index,K<P?(V.flags|=67108866,P):K):(V.flags|=67108866,P)):(V.flags|=1048576,P)}function w(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function $(V,P,K,se){return P===null||P.tag!==6?(P=vf(K,V.mode,se),P.return=V,P):(P=d(P,K),P.return=V,P)}function U(V,P,K,se){var we=K.type;return we===E?oe(V,P,K.props.children,se,K.key):P!==null&&(P.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===L&&Mi(we)===P.type)?(P=d(P,K.props),Hl(P,K),P.return=V,P):(P=_c(K.type,K.key,K.props,null,V.mode,se),Hl(P,K),P.return=V,P)}function J(V,P,K,se){return P===null||P.tag!==4||P.stateNode.containerInfo!==K.containerInfo||P.stateNode.implementation!==K.implementation?(P=xf(K,V.mode,se),P.return=V,P):(P=d(P,K.children||[]),P.return=V,P)}function oe(V,P,K,se,we){return P===null||P.tag!==7?(P=ki(K,V.mode,se,we),P.return=V,P):(P=d(P,K),P.return=V,P)}function ce(V,P,K){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=vf(""+P,V.mode,K),P.return=V,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case C:return K=_c(P.type,P.key,P.props,null,V.mode,K),Hl(K,P),K.return=V,K;case S:return P=xf(P,V.mode,K),P.return=V,P;case L:return P=Mi(P),ce(V,P,K)}if(te(P)||Z(P))return P=ki(P,V.mode,K,null),P.return=V,P;if(typeof P.then=="function")return ce(V,Pc(P),K);if(P.$$typeof===N)return ce(V,Bc(V,P),K);Gc(V,P)}return null}function ee(V,P,K,se){var we=P!==null?P.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return we!==null?null:$(V,P,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return K.key===we?U(V,P,K,se):null;case S:return K.key===we?J(V,P,K,se):null;case L:return K=Mi(K),ee(V,P,K,se)}if(te(K)||Z(K))return we!==null?null:oe(V,P,K,se,null);if(typeof K.then=="function")return ee(V,P,Pc(K),se);if(K.$$typeof===N)return ee(V,P,Bc(V,K),se);Gc(V,K)}return null}function ne(V,P,K,se,we){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return V=V.get(K)||null,$(P,V,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return V=V.get(se.key===null?K:se.key)||null,U(P,V,se,we);case S:return V=V.get(se.key===null?K:se.key)||null,J(P,V,se,we);case L:return se=Mi(se),ne(V,P,K,se,we)}if(te(se)||Z(se))return V=V.get(K)||null,oe(P,V,se,we,null);if(typeof se.then=="function")return ne(V,P,K,Pc(se),we);if(se.$$typeof===N)return ne(V,P,K,Bc(P,se),we);Gc(P,se)}return null}function ye(V,P,K,se){for(var we=null,Ie=null,be=P,Le=P=0,De=null;be!==null&&Le<K.length;Le++){be.index>Le?(De=be,be=null):De=be.sibling;var Pe=ee(V,be,K[Le],se);if(Pe===null){be===null&&(be=De);break}t&&be&&Pe.alternate===null&&n(V,be),P=g(Pe,P,Le),Ie===null?we=Pe:Ie.sibling=Pe,Ie=Pe,be=De}if(Le===K.length)return i(V,be),Ne&&Fr(V,Le),we;if(be===null){for(;Le<K.length;Le++)be=ce(V,K[Le],se),be!==null&&(P=g(be,P,Le),Ie===null?we=be:Ie.sibling=be,Ie=be);return Ne&&Fr(V,Le),we}for(be=l(be);Le<K.length;Le++)De=ne(be,V,Le,K[Le],se),De!==null&&(t&&De.alternate!==null&&be.delete(De.key===null?Le:De.key),P=g(De,P,Le),Ie===null?we=De:Ie.sibling=De,Ie=De);return t&&be.forEach(function(Xa){return n(V,Xa)}),Ne&&Fr(V,Le),we}function Ce(V,P,K,se){if(K==null)throw Error(o(151));for(var we=null,Ie=null,be=P,Le=P=0,De=null,Pe=K.next();be!==null&&!Pe.done;Le++,Pe=K.next()){be.index>Le?(De=be,be=null):De=be.sibling;var Xa=ee(V,be,Pe.value,se);if(Xa===null){be===null&&(be=De);break}t&&be&&Xa.alternate===null&&n(V,be),P=g(Xa,P,Le),Ie===null?we=Xa:Ie.sibling=Xa,Ie=Xa,be=De}if(Pe.done)return i(V,be),Ne&&Fr(V,Le),we;if(be===null){for(;!Pe.done;Le++,Pe=K.next())Pe=ce(V,Pe.value,se),Pe!==null&&(P=g(Pe,P,Le),Ie===null?we=Pe:Ie.sibling=Pe,Ie=Pe);return Ne&&Fr(V,Le),we}for(be=l(be);!Pe.done;Le++,Pe=K.next())Pe=ne(be,V,Le,Pe.value,se),Pe!==null&&(t&&Pe.alternate!==null&&be.delete(Pe.key===null?Le:Pe.key),P=g(Pe,P,Le),Ie===null?we=Pe:Ie.sibling=Pe,Ie=Pe);return t&&be.forEach(function(o4){return n(V,o4)}),Ne&&Fr(V,Le),we}function et(V,P,K,se){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case C:e:{for(var we=K.key;P!==null;){if(P.key===we){if(we=K.type,we===E){if(P.tag===7){i(V,P.sibling),se=d(P,K.props.children),se.return=V,V=se;break e}}else if(P.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===L&&Mi(we)===P.type){i(V,P.sibling),se=d(P,K.props),Hl(se,K),se.return=V,V=se;break e}i(V,P);break}else n(V,P);P=P.sibling}K.type===E?(se=ki(K.props.children,V.mode,se,K.key),se.return=V,V=se):(se=_c(K.type,K.key,K.props,null,V.mode,se),Hl(se,K),se.return=V,V=se)}return w(V);case S:e:{for(we=K.key;P!==null;){if(P.key===we)if(P.tag===4&&P.stateNode.containerInfo===K.containerInfo&&P.stateNode.implementation===K.implementation){i(V,P.sibling),se=d(P,K.children||[]),se.return=V,V=se;break e}else{i(V,P);break}else n(V,P);P=P.sibling}se=xf(K,V.mode,se),se.return=V,V=se}return w(V);case L:return K=Mi(K),et(V,P,K,se)}if(te(K))return ye(V,P,K,se);if(Z(K)){if(we=Z(K),typeof we!="function")throw Error(o(150));return K=we.call(K),Ce(V,P,K,se)}if(typeof K.then=="function")return et(V,P,Pc(K),se);if(K.$$typeof===N)return et(V,P,Bc(V,K),se);Gc(V,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,P!==null&&P.tag===6?(i(V,P.sibling),se=d(P,K),se.return=V,V=se):(i(V,P),se=vf(K,V.mode,se),se.return=V,V=se),w(V)):i(V,P)}return function(V,P,K,se){try{Bl=0;var we=et(V,P,K,se);return Ao=null,we}catch(be){if(be===Oo||be===Uc)throw be;var Ie=jn(29,be,null,V.mode);return Ie.lanes=se,Ie.return=V,Ie}}}var Oi=c1(!0),u1=c1(!1),za=!1;function Lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _a(t,n,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(qe&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=Rc(t),Vp(t,null,i),n}return zc(t,l,n,i),Rc(t)}function Ul(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,vc(t,i)}}function Af(t,n){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var d=null,g=null;if(i=i.firstBaseUpdate,i!==null){do{var w={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};g===null?d=g=w:g=g.next=w,i=i.next}while(i!==null);g===null?d=g=n:g=g.next=n}else d=g=n;i={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var zf=!1;function Il(){if(zf){var t=Lo;if(t!==null)throw t}}function Pl(t,n,i,l){zf=!1;var d=t.updateQueue;za=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,$=d.shared.pending;if($!==null){d.shared.pending=null;var U=$,J=U.next;U.next=null,w===null?g=J:w.next=J,w=U;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,$=oe.lastBaseUpdate,$!==w&&($===null?oe.firstBaseUpdate=J:$.next=J,oe.lastBaseUpdate=U))}if(g!==null){var ce=d.baseState;w=0,oe=J=U=null,$=g;do{var ee=$.lane&-536870913,ne=ee!==$.lane;if(ne?(_e&ee)===ee:(l&ee)===ee){ee!==0&&ee===Mo&&(zf=!0),oe!==null&&(oe=oe.next={lane:0,tag:$.tag,payload:$.payload,callback:null,next:null});e:{var ye=t,Ce=$;ee=n;var et=i;switch(Ce.tag){case 1:if(ye=Ce.payload,typeof ye=="function"){ce=ye.call(et,ce,ee);break e}ce=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Ce.payload,ee=typeof ye=="function"?ye.call(et,ce,ee):ye,ee==null)break e;ce=v({},ce,ee);break e;case 2:za=!0}}ee=$.callback,ee!==null&&(t.flags|=64,ne&&(t.flags|=8192),ne=d.callbacks,ne===null?d.callbacks=[ee]:ne.push(ee))}else ne={lane:ee,tag:$.tag,payload:$.payload,callback:$.callback,next:null},oe===null?(J=oe=ne,U=ce):oe=oe.next=ne,w|=ee;if($=$.next,$===null){if($=d.shared.pending,$===null)break;ne=$,$=ne.next,ne.next=null,d.lastBaseUpdate=ne,d.shared.pending=null}}while(!0);oe===null&&(U=ce),d.baseState=U,d.firstBaseUpdate=J,d.lastBaseUpdate=oe,g===null&&(d.shared.lanes=0),Ua|=w,t.lanes=w,t.memoizedState=ce}}function d1(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function f1(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)d1(i[t],n)}var zo=A(null),qc=A(0);function h1(t,n){t=na,Q(qc,t),Q(zo,n),na=t|n.baseLanes}function Rf(){Q(qc,na),Q(zo,zo.current)}function _f(){na=qc.current,F(zo),F(qc)}var Tn=A(null),qn=null;function Da(t){var n=t.alternate;Q(xt,xt.current&1),Q(Tn,t),qn===null&&(n===null||zo.current!==null||n.memoizedState!==null)&&(qn=t)}function Df(t){Q(xt,xt.current),Q(Tn,t),qn===null&&(qn=t)}function g1(t){t.tag===22?(Q(xt,xt.current),Q(Tn,t),qn===null&&(qn=t)):Na()}function Na(){Q(xt,xt.current),Q(Tn,Tn.current)}function $n(t){F(Tn),qn===t&&(qn=null),F(xt)}var xt=A(0);function Fc(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Ph(i)||Gh(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yr=0,Me=null,Ke=null,kt=null,Wc=!1,Ro=!1,Ai=!1,Vc=0,Gl=0,_o=null,X3=0;function ht(){throw Error(o(321))}function Nf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!En(t[i],n[i]))return!1;return!0}function Bf(t,n,i,l,d,g){return Yr=g,Me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?Q1:Jf,Ai=!1,g=i(l,d),Ai=!1,Ro&&(g=m1(n,i,l,d)),p1(t),g}function p1(t){H.H=Wl;var n=Ke!==null&&Ke.next!==null;if(Yr=0,kt=Ke=Me=null,Wc=!1,Gl=0,_o=null,n)throw Error(o(300));t===null||Et||(t=t.dependencies,t!==null&&Nc(t)&&(Et=!0))}function m1(t,n,i,l){Me=t;var d=0;do{if(Ro&&(_o=null),Gl=0,Ro=!1,25<=d)throw Error(o(301));if(d+=1,kt=Ke=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}H.H=K1,g=n(i,l)}while(Ro);return g}function Q3(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?ql(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Me.flags|=1024),n}function Hf(){var t=Vc!==0;return Vc=0,t}function Uf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function If(t){if(Wc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Wc=!1}Yr=0,kt=Ke=Me=null,Ro=!1,Gl=Vc=0,_o=null}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Me.memoizedState=kt=t:kt=kt.next=t,kt}function yt(){if(Ke===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=kt===null?Me.memoizedState:kt.next;if(n!==null)kt=n,Ke=t;else{if(t===null)throw Me.alternate===null?Error(o(467)):Error(o(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},kt===null?Me.memoizedState=kt=t:kt=kt.next=t}return kt}function Yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(t){var n=Gl;return Gl+=1,_o===null&&(_o=[]),t=o1(_o,t,n),n=Me,(kt===null?n.memoizedState:kt.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Q1:Jf),t}function Zc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ql(t);if(t.$$typeof===N)return Ut(t)}throw Error(o(438,String(t)))}function Pf(t){var n=null,i=Me.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=Me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Yc(),Me.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),l=0;l<t;l++)i[l]=Y;return n.index++,i}function Zr(t,n){return typeof n=="function"?n(t):n}function Xc(t){var n=yt();return Gf(n,Ke,t)}function Gf(t,n,i){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=i;var d=t.baseQueue,g=l.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}n.baseQueue=d=g,l.pending=null}if(g=t.baseState,d===null)t.memoizedState=g;else{n=d.next;var $=w=null,U=null,J=n,oe=!1;do{var ce=J.lane&-536870913;if(ce!==J.lane?(_e&ce)===ce:(Yr&ce)===ce){var ee=J.revertLane;if(ee===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ce===Mo&&(oe=!0);else if((Yr&ee)===ee){J=J.next,ee===Mo&&(oe=!0);continue}else ce={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},U===null?($=U=ce,w=g):U=U.next=ce,Me.lanes|=ee,Ua|=ee;ce=J.action,Ai&&i(g,ce),g=J.hasEagerState?J.eagerState:i(g,ce)}else ee={lane:ce,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},U===null?($=U=ee,w=g):U=U.next=ee,Me.lanes|=ce,Ua|=ce;J=J.next}while(J!==null&&J!==n);if(U===null?w=g:U.next=$,!En(g,t.memoizedState)&&(Et=!0,oe&&(i=Lo,i!==null)))throw i;t.memoizedState=g,t.baseState=w,t.baseQueue=U,l.lastRenderedState=g}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function qf(t){var n=yt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var l=i.dispatch,d=i.pending,g=n.memoizedState;if(d!==null){i.pending=null;var w=d=d.next;do g=t(g,w.action),w=w.next;while(w!==d);En(g,n.memoizedState)||(Et=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),i.lastRenderedState=g}return[g,l]}function v1(t,n,i){var l=Me,d=yt(),g=Ne;if(g){if(i===void 0)throw Error(o(407));i=i()}else i=n();var w=!En((Ke||d).memoizedState,i);if(w&&(d.memoizedState=i,Et=!0),d=d.queue,Vf(b1.bind(null,l,d,t),[t]),d.getSnapshot!==n||w||kt!==null&&kt.memoizedState.tag&1){if(l.flags|=2048,Do(9,{destroy:void 0},y1.bind(null,l,d,i,n),null),nt===null)throw Error(o(349));g||(Yr&127)!==0||x1(l,n,i)}return i}function x1(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=Me.updateQueue,n===null?(n=Yc(),Me.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function y1(t,n,i,l){n.value=i,n.getSnapshot=l,w1(n)&&S1(t)}function b1(t,n,i){return i(function(){w1(n)&&S1(t)})}function w1(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!En(t,i)}catch{return!0}}function S1(t){var n=Ci(t,2);n!==null&&vn(n,t,2)}function Ff(t){var n=ln();if(typeof t=="function"){var i=t;if(t=i(),Ai){wn(!0);try{i()}finally{wn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:t},n}function C1(t,n,i,l){return t.baseState=i,Gf(t,Ke,typeof l=="function"?l:Zr)}function K3(t,n,i,l,d){if(Jc(t))throw Error(o(485));if(t=n.action,t!==null){var g={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};H.T!==null?i(!0):g.isTransition=!1,l(g),i=n.pending,i===null?(g.next=n.pending=g,k1(n,g)):(g.next=i.next,n.pending=i.next=g)}}function k1(t,n){var i=n.action,l=n.payload,d=t.state;if(n.isTransition){var g=H.T,w={};H.T=w;try{var $=i(d,l),U=H.S;U!==null&&U(w,$),E1(t,n,$)}catch(J){Wf(t,n,J)}finally{g!==null&&w.types!==null&&(g.types=w.types),H.T=g}}else try{g=i(d,l),E1(t,n,g)}catch(J){Wf(t,n,J)}}function E1(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){j1(t,n,l)},function(l){return Wf(t,n,l)}):j1(t,n,i)}function j1(t,n,i){n.status="fulfilled",n.value=i,T1(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,k1(t,i)))}function Wf(t,n,i){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,T1(n),n=n.next;while(n!==l)}t.action=null}function T1(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $1(t,n){return n}function M1(t,n){if(Ne){var i=nt.formState;if(i!==null){e:{var l=Me;if(Ne){if(at){t:{for(var d=at,g=Gn;d.nodeType!==8;){if(!g){d=null;break t}if(d=Fn(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){at=Fn(d.nextSibling),l=d.data==="F!";break e}}Oa(l)}l=!1}l&&(n=i[0])}}return i=ln(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$1,lastRenderedState:n},i.queue=l,i=Y1.bind(null,Me,l),l.dispatch=i,l=Ff(!1),g=Kf.bind(null,Me,!1,l.queue),l=ln(),d={state:n,dispatch:null,action:t,pending:null},l.queue=d,i=K3.bind(null,Me,d,g,i),d.dispatch=i,l.memoizedState=t,[n,i,!1]}function L1(t){var n=yt();return O1(n,Ke,t)}function O1(t,n,i){if(n=Gf(t,n,$1)[0],t=Xc(Zr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ql(n)}catch(w){throw w===Oo?Uc:w}else l=n;n=yt();var d=n.queue,g=d.dispatch;return i!==n.memoizedState&&(Me.flags|=2048,Do(9,{destroy:void 0},J3.bind(null,d,i),null)),[l,g,t]}function J3(t,n){t.action=n}function A1(t){var n=yt(),i=Ke;if(i!==null)return O1(n,i,t);yt(),n=n.memoizedState,i=yt();var l=i.queue.dispatch;return i.memoizedState=t,[n,l,!1]}function Do(t,n,i,l){return t={tag:t,create:i,deps:l,inst:n,next:null},n=Me.updateQueue,n===null&&(n=Yc(),Me.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,n.lastEffect=t),t}function z1(){return yt().memoizedState}function Qc(t,n,i,l){var d=ln();Me.flags|=t,d.memoizedState=Do(1|n,{destroy:void 0},i,l===void 0?null:l)}function Kc(t,n,i,l){var d=yt();l=l===void 0?null:l;var g=d.memoizedState.inst;Ke!==null&&l!==null&&Nf(l,Ke.memoizedState.deps)?d.memoizedState=Do(n,g,i,l):(Me.flags|=t,d.memoizedState=Do(1|n,g,i,l))}function R1(t,n){Qc(8390656,8,t,n)}function Vf(t,n){Kc(2048,8,t,n)}function ew(t){Me.flags|=4;var n=Me.updateQueue;if(n===null)n=Yc(),Me.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function _1(t){var n=yt().memoizedState;return ew({ref:n,nextImpl:t}),function(){if((qe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function D1(t,n){return Kc(4,2,t,n)}function N1(t,n){return Kc(4,4,t,n)}function B1(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function H1(t,n,i){i=i!=null?i.concat([t]):null,Kc(4,4,B1.bind(null,n,t),i)}function Yf(){}function U1(t,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&Nf(n,l[1])?l[0]:(i.memoizedState=[t,n],t)}function I1(t,n){var i=yt();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&Nf(n,l[1]))return l[0];if(l=t(),Ai){wn(!0);try{t()}finally{wn(!1)}}return i.memoizedState=[l,n],l}function Zf(t,n,i){return i===void 0||(Yr&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=Pm(),Me.lanes|=t,Ua|=t,i)}function P1(t,n,i,l){return En(i,n)?i:zo.current!==null?(t=Zf(t,i,l),En(t,n)||(Et=!0),t):(Yr&42)===0||(Yr&1073741824)!==0&&(_e&261930)===0?(Et=!0,t.memoizedState=i):(t=Pm(),Me.lanes|=t,Ua|=t,n)}function G1(t,n,i,l,d){var g=q.p;q.p=g!==0&&8>g?g:8;var w=H.T,$={};H.T=$,Kf(t,!1,n,i);try{var U=d(),J=H.S;if(J!==null&&J($,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var oe=Z3(U,l);Fl(t,n,oe,On(t))}else Fl(t,n,l,On(t))}catch(ce){Fl(t,n,{then:function(){},status:"rejected",reason:ce},On())}finally{q.p=g,w!==null&&$.types!==null&&(w.types=$.types),H.T=w}}function tw(){}function Xf(t,n,i,l){if(t.tag!==5)throw Error(o(476));var d=q1(t).queue;G1(t,d,n,ae,i===null?tw:function(){return F1(t),i(l)})}function q1(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:ae},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function F1(t){var n=q1(t);n.next===null&&(n=t.alternate.memoizedState),Fl(t,n.next.queue,{},On())}function Qf(){return Ut(ss)}function W1(){return yt().memoizedState}function V1(){return yt().memoizedState}function nw(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=On();t=Ra(i);var l=_a(n,t,i);l!==null&&(vn(l,n,i),Ul(l,n,i)),n={cache:jf()},t.payload=n;return}n=n.return}}function rw(t,n,i){var l=On();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Jc(t)?Z1(n,i):(i=pf(t,n,i,l),i!==null&&(vn(i,t,l),X1(i,n,l)))}function Y1(t,n,i){var l=On();Fl(t,n,i,l)}function Fl(t,n,i,l){var d={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jc(t))Z1(n,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var w=n.lastRenderedState,$=g(w,i);if(d.hasEagerState=!0,d.eagerState=$,En($,w))return zc(t,n,d,0),nt===null&&Ac(),!1}catch{}if(i=pf(t,n,d,l),i!==null)return vn(i,t,l),X1(i,n,l),!0}return!1}function Kf(t,n,i,l){if(l={lane:2,revertLane:Lh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jc(t)){if(n)throw Error(o(479))}else n=pf(t,i,l,2),n!==null&&vn(n,t,2)}function Jc(t){var n=t.alternate;return t===Me||n!==null&&n===Me}function Z1(t,n){Ro=Wc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function X1(t,n,i){if((i&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,i|=l,n.lanes=i,vc(t,i)}}var Wl={readContext:Ut,use:Zc,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Wl.useEffectEvent=ht;var Q1={readContext:Ut,use:Zc,useCallback:function(t,n){return ln().memoizedState=[t,n===void 0?null:n],t},useContext:Ut,useEffect:R1,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,Qc(4194308,4,B1.bind(null,n,t),i)},useLayoutEffect:function(t,n){return Qc(4194308,4,t,n)},useInsertionEffect:function(t,n){Qc(4,2,t,n)},useMemo:function(t,n){var i=ln();n=n===void 0?null:n;var l=t();if(Ai){wn(!0);try{t()}finally{wn(!1)}}return i.memoizedState=[l,n],l},useReducer:function(t,n,i){var l=ln();if(i!==void 0){var d=i(n);if(Ai){wn(!0);try{i(n)}finally{wn(!1)}}}else d=n;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=rw.bind(null,Me,t),[l.memoizedState,t]},useRef:function(t){var n=ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,i=Y1.bind(null,Me,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:Yf,useDeferredValue:function(t,n){var i=ln();return Zf(i,t,n)},useTransition:function(){var t=Ff(!1);return t=G1.bind(null,Me,t.queue,!0,!1),ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var l=Me,d=ln();if(Ne){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),nt===null)throw Error(o(349));(_e&127)!==0||x1(l,n,i)}d.memoizedState=i;var g={value:i,getSnapshot:n};return d.queue=g,R1(b1.bind(null,l,g,t),[t]),l.flags|=2048,Do(9,{destroy:void 0},y1.bind(null,l,g,i,n),null),i},useId:function(){var t=ln(),n=nt.identifierPrefix;if(Ne){var i=Er,l=kr;i=(l&~(1<<32-Xt(l)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Vc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=X3++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qf,useFormState:M1,useActionState:M1,useOptimistic:function(t){var n=ln();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Kf.bind(null,Me,!0,i),i.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return ln().memoizedState=nw.bind(null,Me)},useEffectEvent:function(t){var n=ln(),i={impl:t};return n.memoizedState=i,function(){if((qe&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},Jf={readContext:Ut,use:Zc,useCallback:U1,useContext:Ut,useEffect:Vf,useImperativeHandle:H1,useInsertionEffect:D1,useLayoutEffect:N1,useMemo:I1,useReducer:Xc,useRef:z1,useState:function(){return Xc(Zr)},useDebugValue:Yf,useDeferredValue:function(t,n){var i=yt();return P1(i,Ke.memoizedState,t,n)},useTransition:function(){var t=Xc(Zr)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:ql(t),n]},useSyncExternalStore:v1,useId:W1,useHostTransitionStatus:Qf,useFormState:L1,useActionState:L1,useOptimistic:function(t,n){var i=yt();return C1(i,Ke,t,n)},useMemoCache:Pf,useCacheRefresh:V1};Jf.useEffectEvent=_1;var K1={readContext:Ut,use:Zc,useCallback:U1,useContext:Ut,useEffect:Vf,useImperativeHandle:H1,useInsertionEffect:D1,useLayoutEffect:N1,useMemo:I1,useReducer:qf,useRef:z1,useState:function(){return qf(Zr)},useDebugValue:Yf,useDeferredValue:function(t,n){var i=yt();return Ke===null?Zf(i,t,n):P1(i,Ke.memoizedState,t,n)},useTransition:function(){var t=qf(Zr)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:ql(t),n]},useSyncExternalStore:v1,useId:W1,useHostTransitionStatus:Qf,useFormState:A1,useActionState:A1,useOptimistic:function(t,n){var i=yt();return Ke!==null?C1(i,Ke,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:V1};K1.useEffectEvent=_1;function eh(t,n,i,l){n=t.memoizedState,i=i(l,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var th={enqueueSetState:function(t,n,i){t=t._reactInternals;var l=On(),d=Ra(l);d.payload=n,i!=null&&(d.callback=i),n=_a(t,d,l),n!==null&&(vn(n,t,l),Ul(n,t,l))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var l=On(),d=Ra(l);d.tag=1,d.payload=n,i!=null&&(d.callback=i),n=_a(t,d,l),n!==null&&(vn(n,t,l),Ul(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=On(),l=Ra(i);l.tag=2,n!=null&&(l.callback=n),n=_a(t,l,i),n!==null&&(vn(n,t,i),Ul(n,t,i))}};function J1(t,n,i,l,d,g,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,w):n.prototype&&n.prototype.isPureReactComponent?!Al(i,l)||!Al(d,g):!0}function em(t,n,i,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==t&&th.enqueueReplaceState(n,n.state,null)}function zi(t,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var d in t)i[d]===void 0&&(i[d]=t[d])}return i}function tm(t){Oc(t)}function nm(t){console.error(t)}function rm(t){Oc(t)}function eu(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function am(t,n,i){try{var l=t.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function nh(t,n,i){return i=Ra(i),i.tag=3,i.payload={element:null},i.callback=function(){eu(t,n)},i}function im(t){return t=Ra(t),t.tag=3,t}function om(t,n,i,l){var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var g=l.value;t.payload=function(){return d(g)},t.callback=function(){am(n,i,l)}}var w=i.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){am(n,i,l),typeof d!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var $=l.stack;this.componentDidCatch(l.value,{componentStack:$!==null?$:""})})}function aw(t,n,i,l,d){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&$o(n,i,d,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:return qn===null?fu():i.alternate===null&&gt===0&&(gt=3),i.flags&=-257,i.flags|=65536,i.lanes=d,l===Ic?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),Th(t,l,d)),!1;case 22:return i.flags|=65536,l===Ic?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),Th(t,l,d)),!1}throw Error(o(435,i.tag))}return Th(t,l,d),fu(),!1}if(Ne)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==wf&&(t=Error(o(422),{cause:l}),_l(Un(t,i)))):(l!==wf&&(n=Error(o(423),{cause:l}),_l(Un(n,i))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Un(l,i),d=nh(t.stateNode,l,d),Af(t,d),gt!==4&&(gt=2)),!1;var g=Error(o(520),{cause:l});if(g=Un(g,i),es===null?es=[g]:es.push(g),gt!==4&&(gt=2),n===null)return!0;l=Un(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=d&-d,i.lanes|=t,t=nh(i.stateNode,l,t),Af(i,t),!1;case 1:if(n=i.type,g=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ia===null||!Ia.has(g))))return i.flags|=65536,d&=-d,i.lanes|=d,d=im(d),om(d,t,i,l),Af(i,d),!1}i=i.return}while(i!==null);return!1}var rh=Error(o(461)),Et=!1;function It(t,n,i,l){n.child=t===null?u1(n,null,i,l):Oi(n,t.child,i,l)}function lm(t,n,i,l,d){i=i.render;var g=n.ref;if("ref"in l){var w={};for(var $ in l)$!=="ref"&&(w[$]=l[$])}else w=l;return Ti(n),l=Bf(t,n,i,w,g,d),$=Hf(),t!==null&&!Et?(Uf(t,n,d),Xr(t,n,d)):(Ne&&$&&yf(n),n.flags|=1,It(t,n,l,d),n.child)}function sm(t,n,i,l,d){if(t===null){var g=i.type;return typeof g=="function"&&!mf(g)&&g.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=g,cm(t,n,g,l,d)):(t=_c(i.type,null,l,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(g=t.child,!dh(t,d)){var w=g.memoizedProps;if(i=i.compare,i=i!==null?i:Al,i(w,l)&&t.ref===n.ref)return Xr(t,n,d)}return n.flags|=1,t=qr(g,l),t.ref=n.ref,t.return=n,n.child=t}function cm(t,n,i,l,d){if(t!==null){var g=t.memoizedProps;if(Al(g,l)&&t.ref===n.ref)if(Et=!1,n.pendingProps=l=g,dh(t,d))(t.flags&131072)!==0&&(Et=!0);else return n.lanes=t.lanes,Xr(t,n,d)}return ah(t,n,i,l,d)}function um(t,n,i,l){var d=l.children,g=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(g=g!==null?g.baseLanes|i:i,t!==null){for(l=n.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~g}else l=0,n.child=null;return dm(t,n,g,i,l)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hc(n,g!==null?g.cachePool:null),g!==null?h1(n,g):Rf(),g1(n);else return l=n.lanes=536870912,dm(t,n,g!==null?g.baseLanes|i:i,i,l)}else g!==null?(Hc(n,g.cachePool),h1(n,g),Na(),n.memoizedState=null):(t!==null&&Hc(n,null),Rf(),Na());return It(t,n,d,i),n.child}function Vl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dm(t,n,i,l,d){var g=$f();return g=g===null?null:{parent:Ct._currentValue,pool:g},n.memoizedState={baseLanes:i,cachePool:g},t!==null&&Hc(n,null),Rf(),g1(n),t!==null&&$o(t,n,l,!0),n.childLanes=d,null}function tu(t,n){return n=ru({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fm(t,n,i){return Oi(n,t.child,null,i),t=tu(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function iw(t,n,i){var l=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ne){if(l.mode==="hidden")return t=tu(n,l),n.lanes=536870912,Vl(null,t);if(Df(n),(t=at)?(t=kv(t,Gn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:kr,overflow:Er}:null,retryLane:536870912,hydrationErrors:null},i=Zp(t),i.return=n,n.child=i,Ht=n,at=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return tu(n,l)}var g=t.memoizedState;if(g!==null){var w=g.dehydrated;if(Df(n),d)if(n.flags&256)n.flags&=-257,n=fm(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(Et||$o(t,n,i,!1),d=(i&t.childLanes)!==0,Et||d){if(l=nt,l!==null&&(w=xc(l,i),w!==0&&w!==g.retryLane))throw g.retryLane=w,Ci(t,w),vn(l,t,w),rh;fu(),n=fm(t,n,i)}else t=g.treeContext,at=Fn(w.nextSibling),Ht=n,Ne=!0,La=null,Gn=!1,t!==null&&Kp(n,t),n=tu(n,l),n.flags|=4096;return n}return t=qr(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function nu(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function ah(t,n,i,l,d){return Ti(n),i=Bf(t,n,i,l,void 0,d),l=Hf(),t!==null&&!Et?(Uf(t,n,d),Xr(t,n,d)):(Ne&&l&&yf(n),n.flags|=1,It(t,n,i,d),n.child)}function hm(t,n,i,l,d,g){return Ti(n),n.updateQueue=null,i=m1(n,l,i,d),p1(t),l=Hf(),t!==null&&!Et?(Uf(t,n,g),Xr(t,n,g)):(Ne&&l&&yf(n),n.flags|=1,It(t,n,i,g),n.child)}function gm(t,n,i,l,d){if(Ti(n),n.stateNode===null){var g=ko,w=i.contextType;typeof w=="object"&&w!==null&&(g=Ut(w)),g=new i(l,g),n.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=th,n.stateNode=g,g._reactInternals=n,g=n.stateNode,g.props=l,g.state=n.memoizedState,g.refs={},Lf(n),w=i.contextType,g.context=typeof w=="object"&&w!==null?Ut(w):ko,g.state=n.memoizedState,w=i.getDerivedStateFromProps,typeof w=="function"&&(eh(n,i,w,l),g.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&th.enqueueReplaceState(g,g.state,null),Pl(n,l,g,d),Il(),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){g=n.stateNode;var $=n.memoizedProps,U=zi(i,$);g.props=U;var J=g.context,oe=i.contextType;w=ko,typeof oe=="object"&&oe!==null&&(w=Ut(oe));var ce=i.getDerivedStateFromProps;oe=typeof ce=="function"||typeof g.getSnapshotBeforeUpdate=="function",$=n.pendingProps!==$,oe||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||($||J!==w)&&em(n,g,l,w),za=!1;var ee=n.memoizedState;g.state=ee,Pl(n,l,g,d),Il(),J=n.memoizedState,$||ee!==J||za?(typeof ce=="function"&&(eh(n,i,ce,l),J=n.memoizedState),(U=za||J1(n,i,U,l,ee,J,w))?(oe||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=J),g.props=l,g.state=J,g.context=w,l=U):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,Of(t,n),w=n.memoizedProps,oe=zi(i,w),g.props=oe,ce=n.pendingProps,ee=g.context,J=i.contextType,U=ko,typeof J=="object"&&J!==null&&(U=Ut(J)),$=i.getDerivedStateFromProps,(J=typeof $=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==ce||ee!==U)&&em(n,g,l,U),za=!1,ee=n.memoizedState,g.state=ee,Pl(n,l,g,d),Il();var ne=n.memoizedState;w!==ce||ee!==ne||za||t!==null&&t.dependencies!==null&&Nc(t.dependencies)?(typeof $=="function"&&(eh(n,i,$,l),ne=n.memoizedState),(oe=za||J1(n,i,oe,l,ee,ne,U)||t!==null&&t.dependencies!==null&&Nc(t.dependencies))?(J||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,ne,U),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,ne,U)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ne),g.props=l,g.state=ne,g.context=U,l=oe):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),l=!1)}return g=l,nu(t,n),l=(n.flags&128)!==0,g||l?(g=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:g.render(),n.flags|=1,t!==null&&l?(n.child=Oi(n,t.child,null,d),n.child=Oi(n,null,i,d)):It(t,n,i,d),n.memoizedState=g.state,t=n.child):t=Xr(t,n,d),t}function pm(t,n,i,l){return Ei(),n.flags|=256,It(t,n,i,l),n.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:a1()}}function lh(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=Ln),t}function mm(t,n,i){var l=n.pendingProps,d=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(xt.current&2)!==0),w&&(d=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ne){if(d?Da(n):Na(),(t=at)?(t=kv(t,Gn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ma!==null?{id:kr,overflow:Er}:null,retryLane:536870912,hydrationErrors:null},i=Zp(t),i.return=n,n.child=i,Ht=n,at=null)):t=null,t===null)throw Oa(n);return Gh(t)?n.lanes=32:n.lanes=536870912,null}var $=l.children;return l=l.fallback,d?(Na(),d=n.mode,$=ru({mode:"hidden",children:$},d),l=ki(l,d,i,null),$.return=n,l.return=n,$.sibling=l,n.child=$,l=n.child,l.memoizedState=oh(i),l.childLanes=lh(t,w,i),n.memoizedState=ih,Vl(null,l)):(Da(n),sh(n,$))}var U=t.memoizedState;if(U!==null&&($=U.dehydrated,$!==null)){if(g)n.flags&256?(Da(n),n.flags&=-257,n=ch(t,n,i)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),$=l.fallback,d=n.mode,l=ru({mode:"visible",children:l.children},d),$=ki($,d,i,null),$.flags|=2,l.return=n,$.return=n,l.sibling=$,n.child=l,Oi(n,t.child,null,i),l=n.child,l.memoizedState=oh(i),l.childLanes=lh(t,w,i),n.memoizedState=ih,n=Vl(null,l));else if(Da(n),Gh($)){if(w=$.nextSibling&&$.nextSibling.dataset,w)var J=w.dgst;w=J,l=Error(o(419)),l.stack="",l.digest=w,_l({value:l,source:null,stack:null}),n=ch(t,n,i)}else if(Et||$o(t,n,i,!1),w=(i&t.childLanes)!==0,Et||w){if(w=nt,w!==null&&(l=xc(w,i),l!==0&&l!==U.retryLane))throw U.retryLane=l,Ci(t,l),vn(w,t,l),rh;Ph($)||fu(),n=ch(t,n,i)}else Ph($)?(n.flags|=192,n.child=t.child,n=null):(t=U.treeContext,at=Fn($.nextSibling),Ht=n,Ne=!0,La=null,Gn=!1,t!==null&&Kp(n,t),n=sh(n,l.children),n.flags|=4096);return n}return d?(Na(),$=l.fallback,d=n.mode,U=t.child,J=U.sibling,l=qr(U,{mode:"hidden",children:l.children}),l.subtreeFlags=U.subtreeFlags&65011712,J!==null?$=qr(J,$):($=ki($,d,i,null),$.flags|=2),$.return=n,l.return=n,l.sibling=$,n.child=l,Vl(null,l),l=n.child,$=t.child.memoizedState,$===null?$=oh(i):(d=$.cachePool,d!==null?(U=Ct._currentValue,d=d.parent!==U?{parent:U,pool:U}:d):d=a1(),$={baseLanes:$.baseLanes|i,cachePool:d}),l.memoizedState=$,l.childLanes=lh(t,w,i),n.memoizedState=ih,Vl(t.child,l)):(Da(n),i=t.child,t=i.sibling,i=qr(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,t!==null&&(w=n.deletions,w===null?(n.deletions=[t],n.flags|=16):w.push(t)),n.child=i,n.memoizedState=null,i)}function sh(t,n){return n=ru({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ru(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function ch(t,n,i){return Oi(n,t.child,null,i),t=sh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vm(t,n,i){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),kf(t.return,n,i)}function uh(t,n,i,l,d,g){var w=t.memoizedState;w===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:d,treeForkCount:g}:(w.isBackwards=n,w.rendering=null,w.renderingStartTime=0,w.last=l,w.tail=i,w.tailMode=d,w.treeForkCount=g)}function xm(t,n,i){var l=n.pendingProps,d=l.revealOrder,g=l.tail;l=l.children;var w=xt.current,$=(w&2)!==0;if($?(w=w&1|2,n.flags|=128):w&=1,Q(xt,w),It(t,n,l,i),l=Ne?Rl:0,!$&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,i,n);else if(t.tag===19)vm(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&Fc(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),uh(n,!1,d,i,g,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Fc(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}uh(n,!0,i,null,g,l);break;case"together":uh(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Xr(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(i&n.childLanes)===0)if(t!==null){if($o(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=qr(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=qr(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function dh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nc(t)))}function ow(t,n,i){switch(n.tag){case 3:xe(n,n.stateNode.containerInfo),Aa(n,Ct,t.memoizedState.cache),Ei();break;case 27:case 5:Te(n);break;case 4:xe(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Df(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Da(n),n.flags|=128,null):(i&n.child.childLanes)!==0?mm(t,n,i):(Da(n),t=Xr(t,n,i),t!==null?t.sibling:null);Da(n);break;case 19:var d=(t.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||($o(t,n,i,!1),l=(i&n.childLanes)!==0),d){if(l)return xm(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Q(xt,xt.current),l)break;return null;case 22:return n.lanes=0,um(t,n,i,n.pendingProps);case 24:Aa(n,Ct,t.memoizedState.cache)}return Xr(t,n,i)}function ym(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)Et=!0;else{if(!dh(t,i)&&(n.flags&128)===0)return Et=!1,ow(t,n,i);Et=(t.flags&131072)!==0}else Et=!1,Ne&&(n.flags&1048576)!==0&&Qp(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Mi(n.elementType),n.type=t,typeof t=="function")mf(t)?(l=zi(t,l),n.tag=1,n=gm(null,n,t,l,i)):(n.tag=0,n=ah(null,n,t,l,i));else{if(t!=null){var d=t.$$typeof;if(d===z){n.tag=11,n=lm(null,n,t,l,i);break e}else if(d===j){n.tag=14,n=sm(null,n,t,l,i);break e}}throw n=X(t)||t,Error(o(306,n,""))}}return n;case 0:return ah(t,n,n.type,n.pendingProps,i);case 1:return l=n.type,d=zi(l,n.pendingProps),gm(t,n,l,d,i);case 3:e:{if(xe(n,n.stateNode.containerInfo),t===null)throw Error(o(387));l=n.pendingProps;var g=n.memoizedState;d=g.element,Of(t,n),Pl(n,l,null,i);var w=n.memoizedState;if(l=w.cache,Aa(n,Ct,l),l!==g.cache&&Ef(n,[Ct],i,!0),Il(),l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){n=pm(t,n,l,i);break e}else if(l!==d){d=Un(Error(o(424)),n),_l(d),n=pm(t,n,l,i);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,at=Fn(t.firstChild),Ht=n,Ne=!0,La=null,Gn=!0,i=u1(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ei(),l===d){n=Xr(t,n,i);break e}It(t,n,l,i)}n=n.child}return n;case 26:return nu(t,n),t===null?(i=Lv(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ne||(i=n.type,t=n.pendingProps,l=yu(me.current).createElement(i),l[Mt]=n,l[Qt]=t,Pt(l,i,t),wt(l),n.stateNode=l):n.memoizedState=Lv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Te(n),t===null&&Ne&&(l=n.stateNode=Tv(n.type,n.pendingProps,me.current),Ht=n,Gn=!0,d=at,Fa(n.type)?(qh=d,at=Fn(l.firstChild)):at=d),It(t,n,n.pendingProps.children,i),nu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ne&&((d=l=at)&&(l=Dw(l,n.type,n.pendingProps,Gn),l!==null?(n.stateNode=l,Ht=n,at=Fn(l.firstChild),Gn=!1,d=!0):d=!1),d||Oa(n)),Te(n),d=n.type,g=n.pendingProps,w=t!==null?t.memoizedProps:null,l=g.children,Hh(d,g)?l=null:w!==null&&Hh(d,w)&&(n.flags|=32),n.memoizedState!==null&&(d=Bf(t,n,Q3,null,null,i),ss._currentValue=d),nu(t,n),It(t,n,l,i),n.child;case 6:return t===null&&Ne&&((t=i=at)&&(i=Nw(i,n.pendingProps,Gn),i!==null?(n.stateNode=i,Ht=n,at=null,t=!0):t=!1),t||Oa(n)),null;case 13:return mm(t,n,i);case 4:return xe(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Oi(n,null,l,i):It(t,n,l,i),n.child;case 11:return lm(t,n,n.type,n.pendingProps,i);case 7:return It(t,n,n.pendingProps,i),n.child;case 8:return It(t,n,n.pendingProps.children,i),n.child;case 12:return It(t,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,Aa(n,n.type,l.value),It(t,n,l.children,i),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,Ti(n),d=Ut(d),l=l(d),n.flags|=1,It(t,n,l,i),n.child;case 14:return sm(t,n,n.type,n.pendingProps,i);case 15:return cm(t,n,n.type,n.pendingProps,i);case 19:return xm(t,n,i);case 31:return iw(t,n,i);case 22:return um(t,n,i,n.pendingProps);case 24:return Ti(n),l=Ut(Ct),t===null?(d=$f(),d===null&&(d=nt,g=jf(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=i),d=g),n.memoizedState={parent:l,cache:d},Lf(n),Aa(n,Ct,d)):((t.lanes&i)!==0&&(Of(t,n),Pl(n,null,null,i),Il()),d=t.memoizedState,g=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),Aa(n,Ct,l)):(l=g.cache,Aa(n,Ct,l),l!==d.cache&&Ef(n,[Ct],i,!0))),It(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Qr(t){t.flags|=4}function fh(t,n,i,l,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(Wm())t.flags|=8192;else throw Li=Ic,Mf}else t.flags&=-16777217}function bm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(n))if(Wm())t.flags|=8192;else throw Li=Ic,Mf}function au(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?lo():536870912,t.lanes|=n,Uo|=n)}function Yl(t,n){if(!Ne)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function it(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=i,n}function lw(t,n,i){var l=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(n),null;case 1:return it(n),null;case 3:return i=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Vr(Ct),ve(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(To(n)?Qr(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sf())),it(n),null;case 26:var d=n.type,g=n.memoizedState;return t===null?(Qr(n),g!==null?(it(n),bm(n,g)):(it(n),fh(n,d,null,l,i))):g?g!==t.memoizedState?(Qr(n),it(n),bm(n,g)):(it(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Qr(n),it(n),fh(n,d,t,l,i)),null;case 27:if(pt(n),i=me.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Qr(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return it(n),null}t=le.current,To(n)?Jp(n):(t=Tv(d,l,i),n.stateNode=t,Qr(n))}return it(n),null;case 5:if(pt(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Qr(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return it(n),null}if(g=le.current,To(n))Jp(n);else{var w=yu(me.current);switch(g){case 1:g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":g=w.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof l.is=="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?g.multiple=!0:l.size&&(g.size=l.size);break;default:g=typeof l.is=="string"?w.createElement(d,{is:l.is}):w.createElement(d)}}g[Mt]=n,g[Qt]=l;e:for(w=n.child;w!==null;){if(w.tag===5||w.tag===6)g.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===n)break e;for(;w.sibling===null;){if(w.return===null||w.return===n)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}n.stateNode=g;e:switch(Pt(g,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qr(n)}}return it(n),fh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Qr(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(t=me.current,To(n)){if(t=n.stateNode,i=n.memoizedProps,l=null,d=Ht,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[Mt]=n,t=!!(t.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||mv(t.nodeValue,i)),t||Oa(n,!0)}else t=yu(t).createTextNode(l),t[Mt]=n,n.stateNode=t}return it(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(l=To(n),i!==null){if(t===null){if(!l)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Mt]=n}else Ei(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),t=!1}else i=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(o(558))}return it(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=To(n),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Mt]=n}else Ei(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),d=!1}else d=Sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=i,n):(i=l!==null,t=t!==null&&t.memoizedState!==null,i&&(l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),g=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==d&&(l.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),au(n,n.updateQueue),it(n),null);case 4:return ve(),t===null&&Rh(n.stateNode.containerInfo),it(n),null;case 10:return Vr(n.type),it(n),null;case 19:if(F(xt),l=n.memoizedState,l===null)return it(n),null;if(d=(n.flags&128)!==0,g=l.rendering,g===null)if(d)Yl(l,!1);else{if(gt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=Fc(t),g!==null){for(n.flags|=128,Yl(l,!1),t=g.updateQueue,n.updateQueue=t,au(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Yp(i,t),i=i.sibling;return Q(xt,xt.current&1|2),Ne&&Fr(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&on()>cu&&(n.flags|=128,d=!0,Yl(l,!1),n.lanes=4194304)}else{if(!d)if(t=Fc(g),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,au(n,t),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!g.alternate&&!Ne)return it(n),null}else 2*on()-l.renderingStartTime>cu&&i!==536870912&&(n.flags|=128,d=!0,Yl(l,!1),n.lanes=4194304);l.isBackwards?(g.sibling=n.child,n.child=g):(t=l.last,t!==null?t.sibling=g:n.child=g,l.last=g)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=on(),t.sibling=null,i=xt.current,Q(xt,d?i&1|2:i&1),Ne&&Fr(n,l.treeForkCount),t):(it(n),null);case 22:case 23:return $n(n),_f(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(it(n),n.subtreeFlags&6&&(n.flags|=8192)):it(n),i=n.updateQueue,i!==null&&au(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),t!==null&&F($i),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Vr(Ct),it(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function sw(t,n){switch(bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vr(Ct),ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(o(340));Ei()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Ei()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return F(xt),null;case 4:return ve(),null;case 10:return Vr(n.type),null;case 22:case 23:return $n(n),_f(),t!==null&&F($i),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vr(Ct),null;case 25:return null;default:return null}}function wm(t,n){switch(bf(n),n.tag){case 3:Vr(Ct),ve();break;case 26:case 27:case 5:pt(n);break;case 4:ve();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:F(xt);break;case 10:Vr(n.type);break;case 22:case 23:$n(n),_f(),t!==null&&F($i);break;case 24:Vr(Ct)}}function Zl(t,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var d=l.next;i=d;do{if((i.tag&t)===t){l=void 0;var g=i.create,w=i.inst;l=g(),w.destroy=l}i=i.next}while(i!==d)}}catch($){Ze(n,n.return,$)}}function Ba(t,n,i){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var g=d.next;l=g;do{if((l.tag&t)===t){var w=l.inst,$=w.destroy;if($!==void 0){w.destroy=void 0,d=n;var U=i,J=$;try{J()}catch(oe){Ze(d,U,oe)}}}l=l.next}while(l!==g)}}catch(oe){Ze(n,n.return,oe)}}function Sm(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{f1(n,i)}catch(l){Ze(t,t.return,l)}}}function Cm(t,n,i){i.props=zi(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(l){Ze(t,n,l)}}function Xl(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof i=="function"?t.refCleanup=i(l):i.current=l}}catch(d){Ze(t,n,d)}}function jr(t,n){var i=t.ref,l=t.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(d){Ze(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(d){Ze(t,n,d)}else i.current=null}function km(t){var n=t.type,i=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(d){Ze(t,t.return,d)}}function hh(t,n,i){try{var l=t.stateNode;Lw(l,t.type,i,n),l[Qt]=n}catch(d){Ze(t,t.return,d)}}function Em(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Em(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=nr));else if(l!==4&&(l===27&&Fa(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(ph(t,n,i),t=t.sibling;t!==null;)ph(t,n,i),t=t.sibling}function iu(t,n,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(l!==4&&(l===27&&Fa(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(iu(t,n,i),t=t.sibling;t!==null;)iu(t,n,i),t=t.sibling}function jm(t){var n=t.stateNode,i=t.memoizedProps;try{for(var l=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Pt(n,l,i),n[Mt]=t,n[Qt]=i}catch(g){Ze(t,t.return,g)}}var Kr=!1,jt=!1,mh=!1,Tm=typeof WeakSet=="function"?WeakSet:Set,Dt=null;function cw(t,n){if(t=t.containerInfo,Nh=ju,t=Hp(t),cf(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{i.nodeType,g.nodeType}catch{i=null;break e}var w=0,$=-1,U=-1,J=0,oe=0,ce=t,ee=null;t:for(;;){for(var ne;ce!==i||d!==0&&ce.nodeType!==3||($=w+d),ce!==g||l!==0&&ce.nodeType!==3||(U=w+l),ce.nodeType===3&&(w+=ce.nodeValue.length),(ne=ce.firstChild)!==null;)ee=ce,ce=ne;for(;;){if(ce===t)break t;if(ee===i&&++J===d&&($=w),ee===g&&++oe===l&&(U=w),(ne=ce.nextSibling)!==null)break;ce=ee,ee=ce.parentNode}ce=ne}i=$===-1||U===-1?null:{start:$,end:U}}else i=null}i=i||{start:0,end:0}}else i=null;for(Bh={focusedElem:t,selectionRange:i},ju=!1,Dt=n;Dt!==null;)if(n=Dt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Dt=t;else for(;Dt!==null;){switch(n=Dt,g=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)d=t[i],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,i=n,d=g.memoizedProps,g=g.memoizedState,l=i.stateNode;try{var ye=zi(i.type,d);t=l.getSnapshotBeforeUpdate(ye,g),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ce){Ze(i,i.return,Ce)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)Ih(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ih(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Dt=t;break}Dt=n.return}}function $m(t,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:ea(t,i),l&4&&Zl(5,i);break;case 1:if(ea(t,i),l&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(w){Ze(i,i.return,w)}else{var d=zi(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ze(i,i.return,w)}}l&64&&Sm(i),l&512&&Xl(i,i.return);break;case 3:if(ea(t,i),l&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{f1(t,n)}catch(w){Ze(i,i.return,w)}}break;case 27:n===null&&l&4&&jm(i);case 26:case 5:ea(t,i),n===null&&l&4&&km(i),l&512&&Xl(i,i.return);break;case 12:ea(t,i);break;case 31:ea(t,i),l&4&&Om(t,i);break;case 13:ea(t,i),l&4&&Am(t,i),l&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=xw.bind(null,i),Bw(t,i))));break;case 22:if(l=i.memoizedState!==null||Kr,!l){n=n!==null&&n.memoizedState!==null||jt,d=Kr;var g=jt;Kr=l,(jt=n)&&!g?ta(t,i,(i.subtreeFlags&8772)!==0):ea(t,i),Kr=d,jt=g}break;case 30:break;default:ea(t,i)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wl(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,hn=!1;function Jr(t,n,i){for(i=i.child;i!==null;)Lm(t,n,i),i=i.sibling}function Lm(t,n,i){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(di,i)}catch{}switch(i.tag){case 26:jt||jr(i,n),Jr(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:jt||jr(i,n);var l=ut,d=hn;Fa(i.type)&&(ut=i.stateNode,hn=!1),Jr(t,n,i),is(i.stateNode),ut=l,hn=d;break;case 5:jt||jr(i,n);case 6:if(l=ut,d=hn,ut=null,Jr(t,n,i),ut=l,hn=d,ut!==null)if(hn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(i.stateNode)}catch(g){Ze(i,n,g)}else try{ut.removeChild(i.stateNode)}catch(g){Ze(i,n,g)}break;case 18:ut!==null&&(hn?(t=ut,Sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Yo(t)):Sv(ut,i.stateNode));break;case 4:l=ut,d=hn,ut=i.stateNode.containerInfo,hn=!0,Jr(t,n,i),ut=l,hn=d;break;case 0:case 11:case 14:case 15:Ba(2,i,n),jt||Ba(4,i,n),Jr(t,n,i);break;case 1:jt||(jr(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Cm(i,n,l)),Jr(t,n,i);break;case 21:Jr(t,n,i);break;case 22:jt=(l=jt)||i.memoizedState!==null,Jr(t,n,i),jt=l;break;default:Jr(t,n,i)}}function Om(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Yo(t)}catch(i){Ze(n,n.return,i)}}}function Am(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yo(t)}catch(i){Ze(n,n.return,i)}}function uw(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tm),n;default:throw Error(o(435,t.tag))}}function ou(t,n){var i=uw(t);n.forEach(function(l){if(!i.has(l)){i.add(l);var d=yw.bind(null,t,l);l.then(d,d)}})}function gn(t,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var d=i[l],g=t,w=n,$=w;e:for(;$!==null;){switch($.tag){case 27:if(Fa($.type)){ut=$.stateNode,hn=!1;break e}break;case 5:ut=$.stateNode,hn=!1;break e;case 3:case 4:ut=$.stateNode.containerInfo,hn=!0;break e}$=$.return}if(ut===null)throw Error(o(160));Lm(g,w,d),ut=null,hn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)zm(n,t),n=n.sibling}var sr=null;function zm(t,n){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:gn(n,t),pn(t),l&4&&(Ba(3,t,t.return),Zl(3,t),Ba(5,t,t.return));break;case 1:gn(n,t),pn(t),l&512&&(jt||i===null||jr(i,i.return)),l&64&&Kr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var d=sr;if(gn(n,t),pn(t),l&512&&(jt||i===null||jr(i,i.return)),l&4){var g=i!==null?i.memoizedState:null;if(l=t.memoizedState,i===null)if(l===null)if(t.stateNode===null){e:{l=t.type,i=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":g=d.getElementsByTagName("title")[0],(!g||g[pi]||g[Mt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(l),d.head.insertBefore(g,d.querySelector("head > title"))),Pt(g,l,i),g[Mt]=t,wt(g),l=g;break e;case"link":var w=zv("link","href",d).get(l+(i.href||""));if(w){for(var $=0;$<w.length;$++)if(g=w[$],g.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&g.getAttribute("rel")===(i.rel==null?null:i.rel)&&g.getAttribute("title")===(i.title==null?null:i.title)&&g.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){w.splice($,1);break t}}g=d.createElement(l),Pt(g,l,i),d.head.appendChild(g);break;case"meta":if(w=zv("meta","content",d).get(l+(i.content||""))){for($=0;$<w.length;$++)if(g=w[$],g.getAttribute("content")===(i.content==null?null:""+i.content)&&g.getAttribute("name")===(i.name==null?null:i.name)&&g.getAttribute("property")===(i.property==null?null:i.property)&&g.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&g.getAttribute("charset")===(i.charSet==null?null:i.charSet)){w.splice($,1);break t}}g=d.createElement(l),Pt(g,l,i),d.head.appendChild(g);break;default:throw Error(o(468,l))}g[Mt]=t,wt(g),l=g}t.stateNode=l}else Rv(d,t.type,t.stateNode);else t.stateNode=Av(d,l,t.memoizedProps);else g!==l?(g===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):g.count--,l===null?Rv(d,t.type,t.stateNode):Av(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&hh(t,t.memoizedProps,i.memoizedProps)}break;case 27:gn(n,t),pn(t),l&512&&(jt||i===null||jr(i,i.return)),i!==null&&l&4&&hh(t,t.memoizedProps,i.memoizedProps);break;case 5:if(gn(n,t),pn(t),l&512&&(jt||i===null||jr(i,i.return)),t.flags&32){d=t.stateNode;try{Cn(d,"")}catch(ye){Ze(t,t.return,ye)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,hh(t,d,i!==null?i.memoizedProps:d)),l&1024&&(mh=!0);break;case 6:if(gn(n,t),pn(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,i=t.stateNode;try{i.nodeValue=l}catch(ye){Ze(t,t.return,ye)}}break;case 3:if(Su=null,d=sr,sr=bu(n.containerInfo),gn(n,t),sr=d,pn(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(ye){Ze(t,t.return,ye)}mh&&(mh=!1,Rm(t));break;case 4:l=sr,sr=bu(t.stateNode.containerInfo),gn(n,t),pn(t),sr=l;break;case 12:gn(n,t),pn(t);break;case 31:gn(n,t),pn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ou(t,l)));break;case 13:gn(n,t),pn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(su=on()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ou(t,l)));break;case 22:d=t.memoizedState!==null;var U=i!==null&&i.memoizedState!==null,J=Kr,oe=jt;if(Kr=J||d,jt=oe||U,gn(n,t),jt=oe,Kr=J,pn(t),l&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(i===null||U||Kr||jt||Ri(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){U=i=n;try{if(g=U.stateNode,d)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{$=U.stateNode;var ce=U.memoizedProps.style,ee=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;$.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ye){Ze(U,U.return,ye)}}}else if(n.tag===6){if(i===null){U=n;try{U.stateNode.nodeValue=d?"":U.memoizedProps}catch(ye){Ze(U,U.return,ye)}}}else if(n.tag===18){if(i===null){U=n;try{var ne=U.stateNode;d?Cv(ne,!0):Cv(U.stateNode,!1)}catch(ye){Ze(U,U.return,ye)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,ou(t,i))));break;case 19:gn(n,t),pn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ou(t,l)));break;case 30:break;case 21:break;default:gn(n,t),pn(t)}}function pn(t){var n=t.flags;if(n&2){try{for(var i,l=t.return;l!==null;){if(Em(l)){i=l;break}l=l.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var d=i.stateNode,g=gh(t);iu(t,g,d);break;case 5:var w=i.stateNode;i.flags&32&&(Cn(w,""),i.flags&=-33);var $=gh(t);iu(t,$,w);break;case 3:case 4:var U=i.stateNode.containerInfo,J=gh(t);ph(t,J,U);break;default:throw Error(o(161))}}catch(oe){Ze(t,t.return,oe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Rm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(t,n.alternate,n),n=n.sibling}function Ri(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ri(n);break;case 1:jr(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Cm(n,n.return,i),Ri(n);break;case 27:is(n.stateNode);case 26:case 5:jr(n,n.return),Ri(n);break;case 22:n.memoizedState===null&&Ri(n);break;case 30:Ri(n);break;default:Ri(n)}t=t.sibling}}function ta(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=t,g=n,w=g.flags;switch(g.tag){case 0:case 11:case 15:ta(d,g,i),Zl(4,g);break;case 1:if(ta(d,g,i),l=g,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(J){Ze(l,l.return,J)}if(l=g,d=l.updateQueue,d!==null){var $=l.stateNode;try{var U=d.shared.hiddenCallbacks;if(U!==null)for(d.shared.hiddenCallbacks=null,d=0;d<U.length;d++)d1(U[d],$)}catch(J){Ze(l,l.return,J)}}i&&w&64&&Sm(g),Xl(g,g.return);break;case 27:jm(g);case 26:case 5:ta(d,g,i),i&&l===null&&w&4&&km(g),Xl(g,g.return);break;case 12:ta(d,g,i);break;case 31:ta(d,g,i),i&&w&4&&Om(d,g);break;case 13:ta(d,g,i),i&&w&4&&Am(d,g);break;case 22:g.memoizedState===null&&ta(d,g,i),Xl(g,g.return);break;case 30:break;default:ta(d,g,i)}n=n.sibling}}function vh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Dl(i))}function xh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Dl(t))}function cr(t,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_m(t,n,i,l),n=n.sibling}function _m(t,n,i,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:cr(t,n,i,l),d&2048&&Zl(9,n);break;case 1:cr(t,n,i,l);break;case 3:cr(t,n,i,l),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Dl(t)));break;case 12:if(d&2048){cr(t,n,i,l),t=n.stateNode;try{var g=n.memoizedProps,w=g.id,$=g.onPostCommit;typeof $=="function"&&$(w,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(U){Ze(n,n.return,U)}}else cr(t,n,i,l);break;case 31:cr(t,n,i,l);break;case 13:cr(t,n,i,l);break;case 23:break;case 22:g=n.stateNode,w=n.alternate,n.memoizedState!==null?g._visibility&2?cr(t,n,i,l):Ql(t,n):g._visibility&2?cr(t,n,i,l):(g._visibility|=2,No(t,n,i,l,(n.subtreeFlags&10256)!==0||!1)),d&2048&&vh(w,n);break;case 24:cr(t,n,i,l),d&2048&&xh(n.alternate,n);break;default:cr(t,n,i,l)}}function No(t,n,i,l,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var g=t,w=n,$=i,U=l,J=w.flags;switch(w.tag){case 0:case 11:case 15:No(g,w,$,U,d),Zl(8,w);break;case 23:break;case 22:var oe=w.stateNode;w.memoizedState!==null?oe._visibility&2?No(g,w,$,U,d):Ql(g,w):(oe._visibility|=2,No(g,w,$,U,d)),d&&J&2048&&vh(w.alternate,w);break;case 24:No(g,w,$,U,d),d&&J&2048&&xh(w.alternate,w);break;default:No(g,w,$,U,d)}n=n.sibling}}function Ql(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,l=n,d=l.flags;switch(l.tag){case 22:Ql(i,l),d&2048&&vh(l.alternate,l);break;case 24:Ql(i,l),d&2048&&xh(l.alternate,l);break;default:Ql(i,l)}n=n.sibling}}var Kl=8192;function Bo(t,n,i){if(t.subtreeFlags&Kl)for(t=t.child;t!==null;)Dm(t,n,i),t=t.sibling}function Dm(t,n,i){switch(t.tag){case 26:Bo(t,n,i),t.flags&Kl&&t.memoizedState!==null&&Xw(i,sr,t.memoizedState,t.memoizedProps);break;case 5:Bo(t,n,i);break;case 3:case 4:var l=sr;sr=bu(t.stateNode.containerInfo),Bo(t,n,i),sr=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Kl,Kl=16777216,Bo(t,n,i),Kl=l):Bo(t,n,i));break;default:Bo(t,n,i)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Dt=l,Hm(l,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 0:case 11:case 15:Jl(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Jl(t);break;case 12:Jl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,lu(t)):Jl(t);break;default:Jl(t)}}function lu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];Dt=l,Hm(l,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),lu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,lu(n));break;default:lu(n)}t=t.sibling}}function Hm(t,n){for(;Dt!==null;){var i=Dt;switch(i.tag){case 0:case 11:case 15:Ba(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Dl(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Dt=l;else e:for(i=t;Dt!==null;){l=Dt;var d=l.sibling,g=l.return;if(Mm(l),l===i){Dt=null;break e}if(d!==null){d.return=g,Dt=d;break e}Dt=g}}}var dw={getCacheForType:function(t){var n=Ut(Ct),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Ut(Ct).controller.signal}},fw=typeof WeakMap=="function"?WeakMap:Map,qe=0,nt=null,ze=null,_e=0,Ye=0,Mn=null,Ha=!1,Ho=!1,yh=!1,na=0,gt=0,Ua=0,_i=0,bh=0,Ln=0,Uo=0,es=null,mn=null,wh=!1,su=0,Um=0,cu=1/0,uu=null,Ia=null,At=0,Pa=null,Io=null,ra=0,Sh=0,Ch=null,Im=null,ts=0,kh=null;function On(){return(qe&2)!==0&&_e!==0?_e&-_e:H.T!==null?Lh():br()}function Pm(){if(Ln===0)if((_e&536870912)===0||Ne){var t=io;io<<=1,(io&3932160)===0&&(io=262144),Ln=t}else Ln=536870912;return t=Tn.current,t!==null&&(t.flags|=32),Ln}function vn(t,n,i){(t===nt&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)&&(Po(t,0),Ga(t,_e,Ln,!1)),hi(t,i),((qe&2)===0||t!==nt)&&(t===nt&&((qe&2)===0&&(_i|=i),gt===4&&Ga(t,_e,Ln,!1)),Tr(t))}function Gm(t,n,i){if((qe&6)!==0)throw Error(o(327));var l=!i&&(n&127)===0&&(n&t.expiredLanes)===0||Ur(t,n),d=l?pw(t,n):jh(t,n,!0),g=l;do{if(d===0){Ho&&!l&&Ga(t,n,0,!1);break}else{if(i=t.current.alternate,g&&!hw(i)){d=jh(t,n,!1),g=!1;continue}if(d===2){if(g=n,t.errorRecoveryDisabledLanes&g)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;e:{var $=t;d=es;var U=$.current.memoizedState.isDehydrated;if(U&&(Po($,w).flags|=256),w=jh($,w,!1),w!==2){if(yh&&!U){$.errorRecoveryDisabledLanes|=g,_i|=g,d=4;break e}g=mn,mn=d,g!==null&&(mn===null?mn=g:mn.push.apply(mn,g))}d=w}if(g=!1,d!==2)continue}}if(d===1){Po(t,0),Ga(t,n,0,!0);break}e:{switch(l=t,g=d,g){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ga(l,n,Ln,!Ha);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(d=su+300-on(),10<d)){if(Ga(l,n,Ln,!Ha),yr(l,0,!0)!==0)break e;ra=n,l.timeoutHandle=bv(qm.bind(null,l,i,mn,uu,wh,n,Ln,_i,Uo,Ha,g,"Throttled",-0,0),d);break e}qm(l,i,mn,uu,wh,n,Ln,_i,Uo,Ha,g,null,-0,0)}}break}while(!0);Tr(t)}function qm(t,n,i,l,d,g,w,$,U,J,oe,ce,ee,ne){if(t.timeoutHandle=-1,ce=n.subtreeFlags,ce&8192||(ce&16785408)===16785408){ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nr},Dm(n,g,ce);var ye=(g&62914560)===g?su-on():(g&4194048)===g?Um-on():0;if(ye=Qw(ce,ye),ye!==null){ra=g,t.cancelPendingCommit=ye(Km.bind(null,t,n,g,i,l,d,w,$,U,oe,ce,null,ee,ne)),Ga(t,g,w,!J);return}}Km(t,n,g,i,l,d,w,$,U)}function hw(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var d=i[l],g=d.getSnapshot;d=d.value;try{if(!En(g(),d))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(t,n,i,l){n&=~bh,n&=~_i,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var d=n;0<d;){var g=31-Xt(d),w=1<<g;l[g]=-1,d&=~w}i!==0&&mc(t,i,n)}function du(){return(qe&6)===0?(ns(0),!1):!0}function Eh(){if(ze!==null){if(Ye===0)var t=ze.return;else t=ze,Wr=ji=null,If(t),Ao=null,Bl=0,t=ze;for(;t!==null;)wm(t.alternate,t),t=t.return;ze=null}}function Po(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,zw(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ra=0,Eh(),nt=t,ze=i=qr(t.current,null),_e=n,Ye=0,Mn=null,Ha=!1,Ho=Ur(t,n),yh=!1,Uo=Ln=bh=_i=Ua=gt=0,mn=es=null,wh=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var d=31-Xt(l),g=1<<d;n|=t[d],l&=~g}return na=n,Ac(),i}function Fm(t,n){Me=null,H.H=Wl,n===Oo||n===Uc?(n=l1(),Ye=3):n===Mf?(n=l1(),Ye=4):Ye=n===rh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mn=n,ze===null&&(gt=1,eu(t,Un(n,t.current)))}function Wm(){var t=Tn.current;return t===null?!0:(_e&4194048)===_e?qn===null:(_e&62914560)===_e||(_e&536870912)!==0?t===qn:!1}function Vm(){var t=H.H;return H.H=Wl,t===null?Wl:t}function Ym(){var t=H.A;return H.A=dw,t}function fu(){gt=4,Ha||(_e&4194048)!==_e&&Tn.current!==null||(Ho=!0),(Ua&134217727)===0&&(_i&134217727)===0||nt===null||Ga(nt,_e,Ln,!1)}function jh(t,n,i){var l=qe;qe|=2;var d=Vm(),g=Ym();(nt!==t||_e!==n)&&(uu=null,Po(t,n)),n=!1;var w=gt;e:do try{if(Ye!==0&&ze!==null){var $=ze,U=Mn;switch(Ye){case 8:Eh(),w=6;break e;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var J=Ye;if(Ye=0,Mn=null,Go(t,$,U,J),i&&Ho){w=0;break e}break;default:J=Ye,Ye=0,Mn=null,Go(t,$,U,J)}}gw(),w=gt;break}catch(oe){Fm(t,oe)}while(!0);return n&&t.shellSuspendCounter++,Wr=ji=null,qe=l,H.H=d,H.A=g,ze===null&&(nt=null,_e=0,Ac()),w}function gw(){for(;ze!==null;)Zm(ze)}function pw(t,n){var i=qe;qe|=2;var l=Vm(),d=Ym();nt!==t||_e!==n?(uu=null,cu=on()+500,Po(t,n)):Ho=Ur(t,n);e:do try{if(Ye!==0&&ze!==null){n=ze;var g=Mn;t:switch(Ye){case 1:Ye=0,Mn=null,Go(t,n,g,1);break;case 2:case 9:if(i1(g)){Ye=0,Mn=null,Xm(n);break}n=function(){Ye!==2&&Ye!==9||nt!==t||(Ye=7),Tr(t)},g.then(n,n);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:i1(g)?(Ye=0,Mn=null,Xm(n)):(Ye=0,Mn=null,Go(t,n,g,7));break;case 5:var w=null;switch(ze.tag){case 26:w=ze.memoizedState;case 5:case 27:var $=ze;if(w?_v(w):$.stateNode.complete){Ye=0,Mn=null;var U=$.sibling;if(U!==null)ze=U;else{var J=$.return;J!==null?(ze=J,hu(J)):ze=null}break t}}Ye=0,Mn=null,Go(t,n,g,5);break;case 6:Ye=0,Mn=null,Go(t,n,g,6);break;case 8:Eh(),gt=6;break e;default:throw Error(o(462))}}mw();break}catch(oe){Fm(t,oe)}while(!0);return Wr=ji=null,H.H=l,H.A=d,qe=i,ze!==null?0:(nt=null,_e=0,Ac(),gt)}function mw(){for(;ze!==null&&!Wd();)Zm(ze)}function Zm(t){var n=ym(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?hu(t):ze=n}function Xm(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=hm(i,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=hm(i,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:If(n);default:wm(i,n),n=ze=Yp(n,na),n=ym(i,n,na)}t.memoizedProps=t.pendingProps,n===null?hu(t):ze=n}function Go(t,n,i,l){Wr=ji=null,If(n),Ao=null,Bl=0;var d=n.return;try{if(aw(t,d,n,i,_e)){gt=1,eu(t,Un(i,t.current)),ze=null;return}}catch(g){if(d!==null)throw ze=d,g;gt=1,eu(t,Un(i,t.current)),ze=null;return}n.flags&32768?(Ne||l===1?t=!0:Ho||(_e&536870912)!==0?t=!1:(Ha=t=!0,(l===2||l===9||l===3||l===6)&&(l=Tn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qm(n,t)):hu(n)}function hu(t){var n=t;do{if((n.flags&32768)!==0){Qm(n,Ha);return}t=n.return;var i=lw(n.alternate,n,na);if(i!==null){ze=i;return}if(n=n.sibling,n!==null){ze=n;return}ze=n=t}while(n!==null);gt===0&&(gt=5)}function Qm(t,n){do{var i=sw(t.alternate,t);if(i!==null){i.flags&=32767,ze=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){ze=t;return}ze=t=i}while(t!==null);gt=6,ze=null}function Km(t,n,i,l,d,g,w,$,U){t.cancelPendingCommit=null;do gu();while(At!==0);if((qe&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(g=n.lanes|n.childLanes,g|=gf,Xd(t,i,g,w,$,U),t===nt&&(ze=nt=null,_e=0),Io=n,Pa=t,ra=i,Sh=g,Ch=d,Im=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bw(wa,function(){return rv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,d=q.p,q.p=2,w=qe,qe|=4;try{cw(t,n,i)}finally{qe=w,q.p=d,H.T=l}}At=1,Jm(),ev(),tv()}}function Jm(){if(At===1){At=0;var t=Pa,n=Io,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=H.T,H.T=null;var l=q.p;q.p=2;var d=qe;qe|=4;try{zm(n,t);var g=Bh,w=Hp(t.containerInfo),$=g.focusedElem,U=g.selectionRange;if(w!==$&&$&&$.ownerDocument&&Bp($.ownerDocument.documentElement,$)){if(U!==null&&cf($)){var J=U.start,oe=U.end;if(oe===void 0&&(oe=J),"selectionStart"in $)$.selectionStart=J,$.selectionEnd=Math.min(oe,$.value.length);else{var ce=$.ownerDocument||document,ee=ce&&ce.defaultView||window;if(ee.getSelection){var ne=ee.getSelection(),ye=$.textContent.length,Ce=Math.min(U.start,ye),et=U.end===void 0?Ce:Math.min(U.end,ye);!ne.extend&&Ce>et&&(w=et,et=Ce,Ce=w);var V=Np($,Ce),P=Np($,et);if(V&&P&&(ne.rangeCount!==1||ne.anchorNode!==V.node||ne.anchorOffset!==V.offset||ne.focusNode!==P.node||ne.focusOffset!==P.offset)){var K=ce.createRange();K.setStart(V.node,V.offset),ne.removeAllRanges(),Ce>et?(ne.addRange(K),ne.extend(P.node,P.offset)):(K.setEnd(P.node,P.offset),ne.addRange(K))}}}}for(ce=[],ne=$;ne=ne.parentNode;)ne.nodeType===1&&ce.push({element:ne,left:ne.scrollLeft,top:ne.scrollTop});for(typeof $.focus=="function"&&$.focus(),$=0;$<ce.length;$++){var se=ce[$];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}ju=!!Nh,Bh=Nh=null}finally{qe=d,q.p=l,H.T=i}}t.current=n,At=2}}function ev(){if(At===2){At=0;var t=Pa,n=Io,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=H.T,H.T=null;var l=q.p;q.p=2;var d=qe;qe|=4;try{$m(t,n.alternate,n)}finally{qe=d,q.p=l,H.T=i}}At=3}}function tv(){if(At===4||At===3){At=0,Vd();var t=Pa,n=Io,i=ra,l=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?At=5:(At=0,Io=Pa=null,nv(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ia=null),gi(i),n=n.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(di,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,d=q.p,q.p=2,H.T=null;try{for(var g=t.onRecoverableError,w=0;w<l.length;w++){var $=l[w];g($.value,{componentStack:$.stack})}}finally{H.T=n,q.p=d}}(ra&3)!==0&&gu(),Tr(t),d=t.pendingLanes,(i&261930)!==0&&(d&42)!==0?t===kh?ts++:(ts=0,kh=t):ts=0,ns(0)}}function nv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Dl(n)))}function gu(){return Jm(),ev(),tv(),rv()}function rv(){if(At!==5)return!1;var t=Pa,n=Sh;Sh=0;var i=gi(ra),l=H.T,d=q.p;try{q.p=32>i?32:i,H.T=null,i=Ch,Ch=null;var g=Pa,w=ra;if(At=0,Io=Pa=null,ra=0,(qe&6)!==0)throw Error(o(331));var $=qe;if(qe|=4,Bm(g.current),_m(g,g.current,w,i),qe=$,ns(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(di,g)}catch{}return!0}finally{q.p=d,H.T=l,nv(t,n)}}function av(t,n,i){n=Un(i,n),n=nh(t.stateNode,n,2),t=_a(t,n,2),t!==null&&(hi(t,2),Tr(t))}function Ze(t,n,i){if(t.tag===3)av(t,t,i);else for(;n!==null;){if(n.tag===3){av(n,t,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ia===null||!Ia.has(l))){t=Un(i,t),i=im(2),l=_a(n,i,2),l!==null&&(om(i,l,n,t),hi(l,2),Tr(l));break}}n=n.return}}function Th(t,n,i){var l=t.pingCache;if(l===null){l=t.pingCache=new fw;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(i)||(yh=!0,d.add(i),t=vw.bind(null,t,n,i),n.then(t,t))}function vw(t,n,i){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,nt===t&&(_e&i)===i&&(gt===4||gt===3&&(_e&62914560)===_e&&300>on()-su?(qe&2)===0&&Po(t,0):bh|=i,Uo===_e&&(Uo=0)),Tr(t)}function iv(t,n){n===0&&(n=lo()),t=Ci(t,n),t!==null&&(hi(t,n),Tr(t))}function xw(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),iv(t,i)}function yw(t,n){var i=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),iv(t,i)}function bw(t,n){return Nn(t,n)}var pu=null,qo=null,$h=!1,mu=!1,Mh=!1,qa=0;function Tr(t){t!==qo&&t.next===null&&(qo===null?pu=qo=t:qo=qo.next=t),mu=!0,$h||($h=!0,Sw())}function ns(t,n){if(!Mh&&mu){Mh=!0;do for(var i=!1,l=pu;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var g=0;else{var w=l.suspendedLanes,$=l.pingedLanes;g=(1<<31-Xt(42|t)+1)-1,g&=d&~(w&~$),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(i=!0,cv(l,g))}else g=_e,g=yr(l,l===nt?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Ur(l,g)||(i=!0,cv(l,g));l=l.next}while(i);Mh=!1}}function ww(){ov()}function ov(){mu=$h=!1;var t=0;qa!==0&&Aw()&&(t=qa);for(var n=on(),i=null,l=pu;l!==null;){var d=l.next,g=lv(l,n);g===0?(l.next=null,i===null?pu=d:i.next=d,d===null&&(qo=i)):(i=l,(t!==0||(g&3)!==0)&&(mu=!0)),l=d}At!==0&&At!==5||ns(t),qa!==0&&(qa=0)}function lv(t,n){for(var i=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var w=31-Xt(g),$=1<<w,U=d[w];U===-1?(($&i)===0||($&l)!==0)&&(d[w]=bl($,n)):U<=n&&(t.expiredLanes|=$),g&=~$}if(n=nt,i=_e,i=yr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,i===0||t===n&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Yt(l),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ur(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(l!==null&&Yt(l),gi(i)){case 2:case 8:i=ui;break;case 32:i=wa;break;case 268435456:i=bn;break;default:i=wa}return l=sv.bind(null,t),i=Nn(i,l),t.callbackPriority=n,t.callbackNode=i,n}return l!==null&&l!==null&&Yt(l),t.callbackPriority=2,t.callbackNode=null,2}function sv(t,n){if(At!==0&&At!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(gu()&&t.callbackNode!==i)return null;var l=_e;return l=yr(t,t===nt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Gm(t,l,n),lv(t,on()),t.callbackNode!=null&&t.callbackNode===i?sv.bind(null,t):null)}function cv(t,n){if(gu())return null;Gm(t,n,!0)}function Sw(){Rw(function(){(qe&6)!==0?Nn(dc,ww):ov()})}function Lh(){if(qa===0){var t=Mo;t===0&&(t=fi,fi<<=1,(fi&261888)===0&&(fi=256)),qa=t}return qa}function uv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:go(""+t)}function dv(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function Cw(t,n,i,l,d){if(n==="submit"&&i&&i.stateNode===d){var g=uv((d[Qt]||null).action),w=l.submitter;w&&(n=(n=w[Qt]||null)?uv(n.formAction):w.getAttribute("formAction"),n!==null&&(g=n,w=null));var $=new ke("action","action",null,l,d);t.push({event:$,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var U=w?dv(d,w):new FormData(d);Xf(i,{pending:!0,data:U,method:d.method,action:g},null,U)}}else typeof g=="function"&&($.preventDefault(),U=w?dv(d,w):new FormData(d),Xf(i,{pending:!0,data:U,method:d.method,action:g},g,U))},currentTarget:d}]})}}for(var Oh=0;Oh<hf.length;Oh++){var Ah=hf[Oh],kw=Ah.toLowerCase(),Ew=Ah[0].toUpperCase()+Ah.slice(1);lr(kw,"on"+Ew)}lr(Pp,"onAnimationEnd"),lr(Gp,"onAnimationIteration"),lr(qp,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr(I3,"onTransitionRun"),lr(P3,"onTransitionStart"),lr(G3,"onTransitionCancel"),lr(Fp,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rs));function fv(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],d=l.event;l=l.listeners;e:{var g=void 0;if(n)for(var w=l.length-1;0<=w;w--){var $=l[w],U=$.instance,J=$.currentTarget;if($=$.listener,U!==g&&d.isPropagationStopped())break e;g=$,d.currentTarget=J;try{g(d)}catch(oe){Oc(oe)}d.currentTarget=null,g=U}else for(w=0;w<l.length;w++){if($=l[w],U=$.instance,J=$.currentTarget,$=$.listener,U!==g&&d.isPropagationStopped())break e;g=$,d.currentTarget=J;try{g(d)}catch(oe){Oc(oe)}d.currentTarget=null,g=U}}}}function Re(t,n){var i=n[Sn];i===void 0&&(i=n[Sn]=new Set);var l=t+"__bubble";i.has(l)||(hv(n,t,2,!1),i.add(l))}function zh(t,n,i){var l=0;n&&(l|=4),hv(i,t,l,n)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Rh(t){if(!t[vu]){t[vu]=!0,wc.forEach(function(i){i!=="selectionchange"&&(jw.has(i)||zh(i,!1,t),zh(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[vu]||(n[vu]=!0,zh("selectionchange",!1,n))}}function hv(t,n,i,l){switch(Pv(n)){case 2:var d=e4;break;case 8:d=t4;break;default:d=Zh}i=d.bind(null,n,i,t),d=void 0,!mo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function _h(t,n,i,l,d){var g=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var $=l.stateNode.containerInfo;if($===d)break;if(w===4)for(w=l.return;w!==null;){var U=w.tag;if((U===3||U===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;$!==null;){if(w=cn($),w===null)return;if(U=w.tag,U===5||U===6||U===26||U===27){l=g=w;continue e}$=$.parentNode}}l=l.return}Tc(function(){var J=g,oe=po(i),ce=[];e:{var ee=Wp.get(t);if(ee!==void 0){var ne=ke,ye=t;switch(t){case"keypress":if(R(i)===0)break e;case"keydown":case"keyup":ne=y3;break;case"focusin":ye="focus",ne=kn;break;case"focusout":ye="blur",ne=kn;break;case"beforeblur":case"afterblur":ne=kn;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Ot;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=S3;break;case Pp:case Gp:case qp:ne=Mc;break;case Fp:ne=k3;break;case"scroll":case"scrollend":ne=St;break;case"wheel":ne=j3;break;case"copy":case"cut":case"paste":ne=yo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Cp;break;case"toggle":case"beforetoggle":ne=$3}var Ce=(n&4)!==0,et=!Ce&&(t==="scroll"||t==="scrollend"),V=Ce?ee!==null?ee+"Capture":null:ee;Ce=[];for(var P=J,K;P!==null;){var se=P;if(K=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||K===null||V===null||(se=$a(P,V),se!=null&&Ce.push(as(P,se,K))),et)break;P=P.return}0<Ce.length&&(ee=new ne(ee,ye,null,i,oe),ce.push({event:ee,listeners:Ce}))}}if((n&7)===0){e:{if(ee=t==="mouseover"||t==="pointerover",ne=t==="mouseout"||t==="pointerout",ee&&i!==rr&&(ye=i.relatedTarget||i.fromElement)&&(cn(ye)||ye[Sa]))break e;if((ne||ee)&&(ee=oe.window===oe?oe:(ee=oe.ownerDocument)?ee.defaultView||ee.parentWindow:window,ne?(ye=i.relatedTarget||i.toElement,ne=J,ye=ye?cn(ye):null,ye!==null&&(et=u(ye),Ce=ye.tag,ye!==et||Ce!==5&&Ce!==27&&Ce!==6)&&(ye=null)):(ne=null,ye=J),ne!==ye)){if(Ce=Ot,se="onMouseLeave",V="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(Ce=Cp,se="onPointerLeave",V="onPointerEnter",P="pointer"),et=ne==null?ee:mi(ne),K=ye==null?ee:mi(ye),ee=new Ce(se,P+"leave",ne,i,oe),ee.target=et,ee.relatedTarget=K,se=null,cn(oe)===J&&(Ce=new Ce(V,P+"enter",ye,i,oe),Ce.target=K,Ce.relatedTarget=et,se=Ce),et=se,ne&&ye)t:{for(Ce=Tw,V=ne,P=ye,K=0,se=V;se;se=Ce(se))K++;se=0;for(var we=P;we;we=Ce(we))se++;for(;0<K-se;)V=Ce(V),K--;for(;0<se-K;)P=Ce(P),se--;for(;K--;){if(V===P||P!==null&&V===P.alternate){Ce=V;break t}V=Ce(V),P=Ce(P)}Ce=null}else Ce=null;ne!==null&&gv(ce,ee,ne,Ce,!1),ye!==null&&et!==null&&gv(ce,et,ye,Ce,!0)}}e:{if(ee=J?mi(J):window,ne=ee.nodeName&&ee.nodeName.toLowerCase(),ne==="select"||ne==="input"&&ee.type==="file")var Ie=Op;else if(Mp(ee))if(Ap)Ie=B3;else{Ie=D3;var be=_3}else ne=ee.nodeName,!ne||ne.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&Tl(J.elementType)&&(Ie=Op):Ie=N3;if(Ie&&(Ie=Ie(t,J))){Lp(ce,Ie,i,oe);break e}be&&be(t,ee,J),t==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&El(ee,"number",ee.value)}switch(be=J?mi(J):window,t){case"focusin":(Mp(be)||be.contentEditable==="true")&&(wo=be,uf=J,zl=null);break;case"focusout":zl=uf=wo=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,Up(ce,i,oe);break;case"selectionchange":if(U3)break;case"keydown":case"keyup":Up(ce,i,oe)}var Le;if(of)e:{switch(t){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else bo?Tp(t,i)&&(De="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(De="onCompositionStart");De&&(kp&&i.locale!=="ko"&&(bo||De!=="onCompositionStart"?De==="onCompositionEnd"&&bo&&(Le=$c()):(or=oe,$l="value"in or?or.value:or.textContent,bo=!0)),be=xu(J,De),0<be.length&&(De=new Sp(De,t,null,i,oe),ce.push({event:De,listeners:be}),Le?De.data=Le:(Le=$p(i),Le!==null&&(De.data=Le)))),(Le=L3?O3(t,i):A3(t,i))&&(De=xu(J,"onBeforeInput"),0<De.length&&(be=new Sp("onBeforeInput","beforeinput",null,i,oe),ce.push({event:be,listeners:De}),be.data=Le)),Cw(ce,t,J,i,oe)}fv(ce,n)})}function as(t,n,i){return{instance:t,listener:n,currentTarget:i}}function xu(t,n){for(var i=n+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=$a(t,i),d!=null&&l.unshift(as(t,d,g)),d=$a(t,n),d!=null&&l.push(as(t,d,g))),t.tag===3)return l;t=t.return}return[]}function Tw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gv(t,n,i,l,d){for(var g=n._reactName,w=[];i!==null&&i!==l;){var $=i,U=$.alternate,J=$.stateNode;if($=$.tag,U!==null&&U===l)break;$!==5&&$!==26&&$!==27||J===null||(U=J,d?(J=$a(i,g),J!=null&&w.unshift(as(i,J,U))):d||(J=$a(i,g),J!=null&&w.push(as(i,J,U)))),i=i.return}w.length!==0&&t.push({event:n,listeners:w})}var $w=/\r\n?/g,Mw=/\u0000|\uFFFD/g;function pv(t){return(typeof t=="string"?t:""+t).replace($w,`
`).replace(Mw,"")}function mv(t,n){return n=pv(n),pv(t)===n}function Je(t,n,i,l,d,g){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Cn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Cn(t,""+l);break;case"className":uo(t,"class",l);break;case"tabIndex":uo(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":uo(t,i,l);break;case"style":tr(t,l,g);break;case"data":if(n!=="object"){uo(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=go(""+l),t.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(i==="formAction"?(n!=="input"&&Je(t,n,"name",d.name,d,null),Je(t,n,"formEncType",d.formEncType,d,null),Je(t,n,"formMethod",d.formMethod,d,null),Je(t,n,"formTarget",d.formTarget,d,null)):(Je(t,n,"encType",d.encType,d,null),Je(t,n,"method",d.method,d,null),Je(t,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=go(""+l),t.setAttribute(i,l);break;case"onClick":l!=null&&(t.onclick=nr);break;case"onScroll":l!=null&&Re("scroll",t);break;case"onScrollEnd":l!=null&&Re("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}i=go(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""+l):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":l===!0?t.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,l):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(i,l):t.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(i):t.setAttribute(i,l);break;case"popover":Re("beforetoggle",t),Re("toggle",t),co(t,"popover",l);break;case"xlinkActuate":er(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":er(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":er(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":er(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":er(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":er(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":er(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":er(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":er(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":co(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=nf.get(i)||i,co(t,i,l))}}function Dh(t,n,i,l,d,g){switch(i){case"style":tr(t,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(i=l.__html,i!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof l=="string"?Cn(t,l):(typeof l=="number"||typeof l=="bigint")&&Cn(t,""+l);break;case"onScroll":l!=null&&Re("scroll",t);break;case"onScrollEnd":l!=null&&Re("scrollend",t);break;case"onClick":l!=null&&(t.onclick=nr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vi.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(d=i.endsWith("Capture"),n=i.slice(2,d?i.length-7:void 0),g=t[Qt]||null,g=g!=null?g[i]:null,typeof g=="function"&&t.removeEventListener(n,g,d),typeof l=="function")){typeof g!="function"&&g!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,l,d);break e}i in t?t[i]=l:l===!0?t.setAttribute(i,""):co(t,i,l)}}}function Pt(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",t),Re("load",t);var l=!1,d=!1,g;for(g in i)if(i.hasOwnProperty(g)){var w=i[g];if(w!=null)switch(g){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Je(t,n,g,w,i,null)}}d&&Je(t,n,"srcSet",i.srcSet,i,null),l&&Je(t,n,"src",i.src,i,null);return;case"input":Re("invalid",t);var $=g=w=d=null,U=null,J=null;for(l in i)if(i.hasOwnProperty(l)){var oe=i[l];if(oe!=null)switch(l){case"name":d=oe;break;case"type":w=oe;break;case"checked":U=oe;break;case"defaultChecked":J=oe;break;case"value":g=oe;break;case"defaultValue":$=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(o(137,n));break;default:Je(t,n,l,oe,i,null)}}kl(t,g,$,U,J,w,d,!1);return;case"select":Re("invalid",t),l=w=g=null;for(d in i)if(i.hasOwnProperty(d)&&($=i[d],$!=null))switch(d){case"value":g=$;break;case"defaultValue":w=$;break;case"multiple":l=$;default:Je(t,n,d,$,i,null)}n=g,i=w,t.multiple=!!l,n!=null?ja(t,!!l,n,!1):i!=null&&ja(t,!!l,i,!0);return;case"textarea":Re("invalid",t),g=d=l=null;for(w in i)if(i.hasOwnProperty(w)&&($=i[w],$!=null))switch(w){case"value":l=$;break;case"defaultValue":d=$;break;case"children":g=$;break;case"dangerouslySetInnerHTML":if($!=null)throw Error(o(91));break;default:Je(t,n,w,$,i,null)}yi(t,l,d,g);return;case"option":for(U in i)i.hasOwnProperty(U)&&(l=i[U],l!=null)&&(U==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Je(t,n,U,l,i,null));return;case"dialog":Re("beforetoggle",t),Re("toggle",t),Re("cancel",t),Re("close",t);break;case"iframe":case"object":Re("load",t);break;case"video":case"audio":for(l=0;l<rs.length;l++)Re(rs[l],t);break;case"image":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"embed":case"source":case"link":Re("error",t),Re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in i)if(i.hasOwnProperty(J)&&(l=i[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Je(t,n,J,l,i,null)}return;default:if(Tl(n)){for(oe in i)i.hasOwnProperty(oe)&&(l=i[oe],l!==void 0&&Dh(t,n,oe,l,i,void 0));return}}for($ in i)i.hasOwnProperty($)&&(l=i[$],l!=null&&Je(t,n,$,l,i,null))}function Lw(t,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,w=null,$=null,U=null,J=null,oe=null;for(ne in i){var ce=i[ne];if(i.hasOwnProperty(ne)&&ce!=null)switch(ne){case"checked":break;case"value":break;case"defaultValue":U=ce;default:l.hasOwnProperty(ne)||Je(t,n,ne,null,l,ce)}}for(var ee in l){var ne=l[ee];if(ce=i[ee],l.hasOwnProperty(ee)&&(ne!=null||ce!=null))switch(ee){case"type":g=ne;break;case"name":d=ne;break;case"checked":J=ne;break;case"defaultChecked":oe=ne;break;case"value":w=ne;break;case"defaultValue":$=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(o(137,n));break;default:ne!==ce&&Je(t,n,ee,ne,l,ce)}}Cl(t,w,$,U,J,oe,g,d);return;case"select":ne=w=$=ee=null;for(g in i)if(U=i[g],i.hasOwnProperty(g)&&U!=null)switch(g){case"value":break;case"multiple":ne=U;default:l.hasOwnProperty(g)||Je(t,n,g,null,l,U)}for(d in l)if(g=l[d],U=i[d],l.hasOwnProperty(d)&&(g!=null||U!=null))switch(d){case"value":ee=g;break;case"defaultValue":$=g;break;case"multiple":w=g;default:g!==U&&Je(t,n,d,g,l,U)}n=$,i=w,l=ne,ee!=null?ja(t,!!i,ee,!1):!!l!=!!i&&(n!=null?ja(t,!!i,n,!0):ja(t,!!i,i?[]:"",!1));return;case"textarea":ne=ee=null;for($ in i)if(d=i[$],i.hasOwnProperty($)&&d!=null&&!l.hasOwnProperty($))switch($){case"value":break;case"children":break;default:Je(t,n,$,null,l,d)}for(w in l)if(d=l[w],g=i[w],l.hasOwnProperty(w)&&(d!=null||g!=null))switch(w){case"value":ee=d;break;case"defaultValue":ne=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==g&&Je(t,n,w,d,l,g)}jl(t,ee,ne);return;case"option":for(var ye in i)ee=i[ye],i.hasOwnProperty(ye)&&ee!=null&&!l.hasOwnProperty(ye)&&(ye==="selected"?t.selected=!1:Je(t,n,ye,null,l,ee));for(U in l)ee=l[U],ne=i[U],l.hasOwnProperty(U)&&ee!==ne&&(ee!=null||ne!=null)&&(U==="selected"?t.selected=ee&&typeof ee!="function"&&typeof ee!="symbol":Je(t,n,U,ee,l,ne));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in i)ee=i[Ce],i.hasOwnProperty(Ce)&&ee!=null&&!l.hasOwnProperty(Ce)&&Je(t,n,Ce,null,l,ee);for(J in l)if(ee=l[J],ne=i[J],l.hasOwnProperty(J)&&ee!==ne&&(ee!=null||ne!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(o(137,n));break;default:Je(t,n,J,ee,l,ne)}return;default:if(Tl(n)){for(var et in i)ee=i[et],i.hasOwnProperty(et)&&ee!==void 0&&!l.hasOwnProperty(et)&&Dh(t,n,et,void 0,l,ee);for(oe in l)ee=l[oe],ne=i[oe],!l.hasOwnProperty(oe)||ee===ne||ee===void 0&&ne===void 0||Dh(t,n,oe,ee,l,ne);return}}for(var V in i)ee=i[V],i.hasOwnProperty(V)&&ee!=null&&!l.hasOwnProperty(V)&&Je(t,n,V,null,l,ee);for(ce in l)ee=l[ce],ne=i[ce],!l.hasOwnProperty(ce)||ee===ne||ee==null&&ne==null||Je(t,n,ce,ee,l,ne)}function vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ow(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var d=i[l],g=d.transferSize,w=d.initiatorType,$=d.duration;if(g&&$&&vv(w)){for(w=0,$=d.responseEnd,l+=1;l<i.length;l++){var U=i[l],J=U.startTime;if(J>$)break;var oe=U.transferSize,ce=U.initiatorType;oe&&vv(ce)&&(U=U.responseEnd,w+=oe*(U<$?1:($-J)/(U-J)))}if(--l,n+=8*(g+w)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nh=null,Bh=null;function yu(t){return t.nodeType===9?t:t.ownerDocument}function xv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uh=null;function Aw(){var t=window.event;return t&&t.type==="popstate"?t===Uh?!1:(Uh=t,!0):(Uh=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,Rw=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(_w)}:bv;function _w(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Sv(t,n){var i=n,l=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"||i==="/&"){if(l===0){t.removeChild(d),Yo(n);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")is(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,is(i);for(var g=i.firstChild;g;){var w=g.nextSibling,$=g.nodeName;g[pi]||$==="SCRIPT"||$==="STYLE"||$==="LINK"&&g.rel.toLowerCase()==="stylesheet"||i.removeChild(g),g=w}}else i==="body"&&is(t.ownerDocument.body);i=d}while(i);Yo(n)}function Cv(t,n){var i=t;t=0;do{var l=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=l}while(i)}function Ih(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ih(i),wl(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Dw(t,n,i,l){for(;t.nodeType===1;){var d=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[pi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function Nw(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Fn(t.nextSibling),t===null))return null;return t}function kv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Fn(t.nextSibling),t===null))return null;return t}function Ph(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bw(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qh=null;function Ev(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return Fn(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function jv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function Tv(t,n,i){switch(n=yu(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function is(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wl(t)}var Wn=new Map,$v=new Set;function bu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=q.d;q.d={f:Hw,r:Uw,D:Iw,C:Pw,L:Gw,m:qw,X:Ww,S:Fw,M:Vw};function Hw(){var t=aa.f(),n=du();return t||n}function Uw(t){var n=Ca(t);n!==null&&n.tag===5&&n.type==="form"?F1(n):aa.r(t)}var Fo=typeof document>"u"?null:document;function Mv(t,n,i){var l=Fo;if(l&&typeof n=="string"&&n){var d=un(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof i=="string"&&(d+='[crossorigin="'+i+'"]'),$v.has(d)||($v.add(d),t={rel:t,crossOrigin:i,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),Pt(n,"link",t),wt(n),l.head.appendChild(n)))}}function Iw(t){aa.D(t),Mv("dns-prefetch",t,null)}function Pw(t,n){aa.C(t,n),Mv("preconnect",t,n)}function Gw(t,n,i){aa.L(t,n,i);var l=Fo;if(l&&t&&n){var d='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&i&&i.imageSrcSet?(d+='[imagesrcset="'+un(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(d+='[imagesizes="'+un(i.imageSizes)+'"]')):d+='[href="'+un(t)+'"]';var g=d;switch(n){case"style":g=Wo(t);break;case"script":g=Vo(t)}Wn.has(g)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Wn.set(g,t),l.querySelector(d)!==null||n==="style"&&l.querySelector(os(g))||n==="script"&&l.querySelector(ls(g))||(n=l.createElement("link"),Pt(n,"link",t),wt(n),l.head.appendChild(n)))}}function qw(t,n){aa.m(t,n);var i=Fo;if(i&&t){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+un(l)+'"][href="'+un(t)+'"]',g=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Vo(t)}if(!Wn.has(g)&&(t=v({rel:"modulepreload",href:t},n),Wn.set(g,t),i.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ls(g)))return}l=i.createElement("link"),Pt(l,"link",t),wt(l),i.head.appendChild(l)}}}function Fw(t,n,i){aa.S(t,n,i);var l=Fo;if(l&&t){var d=ka(l).hoistableStyles,g=Wo(t);n=n||"default";var w=d.get(g);if(!w){var $={loading:0,preload:null};if(w=l.querySelector(os(g)))$.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Wn.get(g))&&Fh(t,i);var U=w=l.createElement("link");wt(U),Pt(U,"link",t),U._p=new Promise(function(J,oe){U.onload=J,U.onerror=oe}),U.addEventListener("load",function(){$.loading|=1}),U.addEventListener("error",function(){$.loading|=2}),$.loading|=4,wu(w,n,l)}w={type:"stylesheet",instance:w,count:1,state:$},d.set(g,w)}}}function Ww(t,n){aa.X(t,n);var i=Fo;if(i&&t){var l=ka(i).hoistableScripts,d=Vo(t),g=l.get(d);g||(g=i.querySelector(ls(d)),g||(t=v({src:t,async:!0},n),(n=Wn.get(d))&&Wh(t,n),g=i.createElement("script"),wt(g),Pt(g,"link",t),i.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function Vw(t,n){aa.M(t,n);var i=Fo;if(i&&t){var l=ka(i).hoistableScripts,d=Vo(t),g=l.get(d);g||(g=i.querySelector(ls(d)),g||(t=v({src:t,async:!0,type:"module"},n),(n=Wn.get(d))&&Wh(t,n),g=i.createElement("script"),wt(g),Pt(g,"link",t),i.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function Lv(t,n,i,l){var d=(d=me.current)?bu(d):null;if(!d)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Wo(i.href),i=ka(d).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Wo(i.href);var g=ka(d).hoistableStyles,w=g.get(t);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,w),(g=d.querySelector(os(t)))&&!g._p&&(w.instance=g,w.state.loading=5),Wn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Wn.set(t,i),g||Yw(d,t,i,w.state))),n&&l===null)throw Error(o(528,""));return w}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Vo(i),i=ka(d).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Wo(t){return'href="'+un(t)+'"'}function os(t){return'link[rel="stylesheet"]['+t+"]"}function Ov(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Yw(t,n,i,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Pt(n,"link",i),wt(n),t.head.appendChild(n))}function Vo(t){return'[src="'+un(t)+'"]'}function ls(t){return"script[async]"+t}function Av(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+un(i.href)+'"]');if(l)return n.instance=l,wt(l),l;var d=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),Pt(l,"style",d),wu(l,i.precedence,t),n.instance=l;case"stylesheet":d=Wo(i.href);var g=t.querySelector(os(d));if(g)return n.state.loading|=4,n.instance=g,wt(g),g;l=Ov(i),(d=Wn.get(d))&&Fh(l,d),g=(t.ownerDocument||t).createElement("link"),wt(g);var w=g;return w._p=new Promise(function($,U){w.onload=$,w.onerror=U}),Pt(g,"link",l),n.state.loading|=4,wu(g,i.precedence,t),n.instance=g;case"script":return g=Vo(i.src),(d=t.querySelector(ls(g)))?(n.instance=d,wt(d),d):(l=i,(d=Wn.get(g))&&(l=v({},i),Wh(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),wt(d),Pt(d,"link",l),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,wu(l,i.precedence,t));return n.instance}function wu(t,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,g=d,w=0;w<l.length;w++){var $=l[w];if($.dataset.precedence===n)g=$;else if(g!==d)break}g?g.parentNode.insertBefore(t,g.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Su=null;function zv(t,n,i){if(Su===null){var l=new Map,d=Su=new Map;d.set(i,l)}else d=Su,l=d.get(i),l||(l=new Map,d.set(i,l));if(l.has(t))return l;for(l.set(t,null),i=i.getElementsByTagName(t),d=0;d<i.length;d++){var g=i[d];if(!(g[pi]||g[Mt]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(n)||"";w=t+w;var $=l.get(w);$?$.push(g):l.set(w,[g])}}return l}function Rv(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function Zw(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Xw(t,n,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=Wo(l.href),g=n.querySelector(os(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Cu.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=g,wt(g);return}g=n.ownerDocument||n,l=Ov(l),(d=Wn.get(d))&&Fh(l,d),g=g.createElement("link"),wt(g);var w=g;w._p=new Promise(function($,U){w.onload=$,w.onerror=U}),Pt(g,"link",l),i.instance=g}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Cu.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var Vh=0;function Qw(t,n){return t.stylesheets&&t.count===0&&Eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var l=setTimeout(function(){if(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend){var g=t.unsuspend;t.unsuspend=null,g()}},6e4+n);0<t.imgBytes&&Vh===0&&(Vh=62500*Ow());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend)){var g=t.unsuspend;t.unsuspend=null,g()}},(t.imgBytes>Vh?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ku=null;function Eu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,n.forEach(Kw,t),ku=null,Cu.call(t))}function Kw(t,n){if(!(n.state.loading&4)){var i=ku.get(t);if(i)var l=i.get(null);else{i=new Map,ku.set(t,i);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var w=d[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(i.set(w.dataset.precedence,w),l=w)}l&&i.set(null,l)}d=n.instance,w=d.getAttribute("data-precedence"),g=i.get(w)||l,g===l&&i.set(null,d),i.set(w,d),this.count++,l=Cu.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),g?g.parentNode.insertBefore(d,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var ss={$$typeof:N,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Jw(t,n,i,l,d,g,w,$,U){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ir(0),this.hiddenUpdates=Ir(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function Dv(t,n,i,l,d,g,w,$,U,J,oe,ce){return t=new Jw(t,n,i,w,U,J,oe,ce,$),n=1,g===!0&&(n|=24),g=jn(3,null,null,n),t.current=g,g.stateNode=t,n=jf(),n.refCount++,t.pooledCache=n,n.refCount++,g.memoizedState={element:l,isDehydrated:i,cache:n},Lf(g),t}function Nv(t){return t?(t=ko,t):ko}function Bv(t,n,i,l,d,g){d=Nv(d),l.context===null?l.context=d:l.pendingContext=d,l=Ra(n),l.payload={element:i},g=g===void 0?null:g,g!==null&&(l.callback=g),i=_a(t,l,n),i!==null&&(vn(i,t,n),Ul(i,t,n))}function Hv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Yh(t,n){Hv(t,n),(t=t.alternate)&&Hv(t,n)}function Uv(t){if(t.tag===13||t.tag===31){var n=Ci(t,67108864);n!==null&&vn(n,t,67108864),Yh(t,67108864)}}function Iv(t){if(t.tag===13||t.tag===31){var n=On();n=so(n);var i=Ci(t,n);i!==null&&vn(i,t,n),Yh(t,n)}}var ju=!0;function e4(t,n,i,l){var d=H.T;H.T=null;var g=q.p;try{q.p=2,Zh(t,n,i,l)}finally{q.p=g,H.T=d}}function t4(t,n,i,l){var d=H.T;H.T=null;var g=q.p;try{q.p=8,Zh(t,n,i,l)}finally{q.p=g,H.T=d}}function Zh(t,n,i,l){if(ju){var d=Xh(l);if(d===null)_h(t,n,l,Tu,i),Gv(t,l);else if(r4(d,t,n,i,l))l.stopPropagation();else if(Gv(t,l),n&4&&-1<n4.indexOf(t)){for(;d!==null;){var g=Ca(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Jn(g.pendingLanes);if(w!==0){var $=g;for($.pendingLanes|=2,$.entangledLanes|=2;w;){var U=1<<31-Xt(w);$.entanglements[1]|=U,w&=~U}Tr(g),(qe&6)===0&&(cu=on()+500,ns(0))}}break;case 31:case 13:$=Ci(g,2),$!==null&&vn($,g,2),du(),Yh(g,2)}if(g=Xh(l),g===null&&_h(t,n,l,Tu,i),g===d)break;d=g}d!==null&&l.stopPropagation()}else _h(t,n,l,null,i)}}function Xh(t){return t=po(t),Qh(t)}var Tu=null;function Qh(t){if(Tu=null,t=cn(t),t!==null){var n=u(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=p(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Tu=t,null}function Pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yd()){case dc:return 2;case ui:return 8;case wa:case fc:return 32;case bn:return 268435456;default:return 32}default:return 32}}var Kh=!1,Wa=null,Va=null,Ya=null,cs=new Map,us=new Map,Za=[],n4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gv(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":cs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(n.pointerId)}}function ds(t,n,i,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},n!==null&&(n=Ca(n),n!==null&&Uv(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function r4(t,n,i,l,d){switch(n){case"focusin":return Wa=ds(Wa,t,n,i,l,d),!0;case"dragenter":return Va=ds(Va,t,n,i,l,d),!0;case"mouseover":return Ya=ds(Ya,t,n,i,l,d),!0;case"pointerover":var g=d.pointerId;return cs.set(g,ds(cs.get(g)||null,t,n,i,l,d)),!0;case"gotpointercapture":return g=d.pointerId,us.set(g,ds(us.get(g)||null,t,n,i,l,d)),!0}return!1}function qv(t){var n=cn(t.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,yc(t.priority,function(){Iv(i)});return}}else if(n===31){if(n=p(i),n!==null){t.blockedOn=n,yc(t.priority,function(){Iv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Xh(t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);rr=l,i.target.dispatchEvent(l),rr=null}else return n=Ca(i),n!==null&&Uv(n),t.blockedOn=i,!1;n.shift()}return!0}function Fv(t,n,i){$u(t)&&i.delete(n)}function a4(){Kh=!1,Wa!==null&&$u(Wa)&&(Wa=null),Va!==null&&$u(Va)&&(Va=null),Ya!==null&&$u(Ya)&&(Ya=null),cs.forEach(Fv),us.forEach(Fv)}function Mu(t,n){t.blockedOn===n&&(t.blockedOn=null,Kh||(Kh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,a4)))}var Lu=null;function Wv(t){Lu!==t&&(Lu=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Lu===t&&(Lu=null);for(var n=0;n<t.length;n+=3){var i=t[n],l=t[n+1],d=t[n+2];if(typeof l!="function"){if(Qh(l||i)===null)continue;break}var g=Ca(i);g!==null&&(t.splice(n,3),n-=3,Xf(g,{pending:!0,data:d,method:i.method,action:l},l,d))}}))}function Yo(t){function n(U){return Mu(U,t)}Wa!==null&&Mu(Wa,t),Va!==null&&Mu(Va,t),Ya!==null&&Mu(Ya,t),cs.forEach(n),us.forEach(n);for(var i=0;i<Za.length;i++){var l=Za[i];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Za.length&&(i=Za[0],i.blockedOn===null);)qv(i),i.blockedOn===null&&Za.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var d=i[l],g=i[l+1],w=d[Qt]||null;if(typeof g=="function")w||Wv(i);else if(w){var $=null;if(g&&g.hasAttribute("formAction")){if(d=g,w=g[Qt]||null)$=w.formAction;else if(Qh(d)!==null)continue}else $=w.action;typeof $=="function"?i[l+1]=$:(i.splice(l,3),l-=3),Wv(i)}}}function Vv(){function t(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(w){return d=w})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function Jh(t){this._internalRoot=t}Ou.prototype.render=Jh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,l=On();Bv(i,l,t,n,null,null)},Ou.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Bv(t.current,2,null,t,null,null),du(),n[Sa]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var n=br();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Za.length&&n!==0&&n<Za[i].priority;i++);Za.splice(i,0,t),i===0&&qv(t)}};var Yv=r.version;if(Yv!=="19.2.4")throw Error(o(527,Yv,"19.2.4"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=x(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var i4={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{di=Au.inject(i4),Zt=Au}catch{}}return hs.createRoot=function(t,n){if(!s(t))throw Error(o(299));var i=!1,l="",d=tm,g=nm,w=rm;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError)),n=Dv(t,1,!1,null,null,i,l,null,d,g,w,Vv),t[Sa]=n.current,Rh(t),new Jh(n)},hs.hydrateRoot=function(t,n,i){if(!s(t))throw Error(o(299));var l=!1,d="",g=tm,w=nm,$=rm,U=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(g=i.onUncaughtError),i.onCaughtError!==void 0&&(w=i.onCaughtError),i.onRecoverableError!==void 0&&($=i.onRecoverableError),i.formState!==void 0&&(U=i.formState)),n=Dv(t,1,!0,n,i??null,l,d,U,g,w,$,Vv),n.context=Nv(null),i=n.current,l=On(),l=so(l),d=Ra(l),d.callback=null,_a(i,d,l),i=l,n.current.lanes=i,hi(n,i),Tr(n),t[Sa]=n.current,Rh(t),new Ou(n)},hs.version="19.2.4",hs}var ax;function g4(){if(ax)return n0.exports;ax=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),n0.exports=h4(),n0.exports}var p4=g4(),Ge=function(){return Ge=Object.assign||function(r){for(var a,o=1,s=arguments.length;o<s;o++){a=arguments[o];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])}return r},Ge.apply(this,arguments)};function Zn(e,r,a){if(a||arguments.length===2)for(var o=0,s=r.length,u;o<s;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return e.concat(u||Array.prototype.slice.call(r))}var ot="-ms-",_s="-moz-",Fe="-webkit-",E2="comm",jd="rule",Tg="decl",m4="@import",v4="@namespace",j2="@keyframes",x4="@layer",T2=Math.abs,$g=String.fromCharCode,P0=Object.assign;function y4(e,r){return zt(e,0)^45?(((r<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}function $2(e){return e.trim()}function ua(e,r){return(e=r.exec(e))?e[0]:e}function Oe(e,r,a){return e.replace(r,a)}function Gu(e,r,a){return e.indexOf(r,a)}function zt(e,r){return e.charCodeAt(r)|0}function Qi(e,r,a){return e.slice(r,a)}function dr(e){return e.length}function M2(e){return e.length}function Ts(e,r){return r.push(e),e}function b4(e,r){return e.map(r).join("")}function ix(e,r){return e.filter(function(a){return!ua(a,r)})}var Td=1,sl=1,L2=0,Xn=0,Tt=0,ml="";function $d(e,r,a,o,s,u,h,p){return{value:e,root:r,parent:a,type:o,props:s,children:u,line:Td,column:sl,length:h,return:"",siblings:p}}function Ka(e,r){return P0($d("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Zo(e){for(;e.root;)e=Ka(e.root,{children:[e]});Ts(e,e.siblings)}function w4(){return Tt}function S4(){return Tt=Xn>0?zt(ml,--Xn):0,sl--,Tt===10&&(sl=1,Td--),Tt}function hr(){return Tt=Xn<L2?zt(ml,Xn++):0,sl++,Tt===10&&(sl=1,Td++),Tt}function ti(){return zt(ml,Xn)}function qu(){return Xn}function Md(e,r){return Qi(ml,e,r)}function qs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C4(e){return Td=sl=1,L2=dr(ml=e),Xn=0,[]}function k4(e){return ml="",e}function o0(e){return $2(Md(Xn-1,G0(e===91?e+2:e===40?e+1:e)))}function E4(e){for(;(Tt=ti())&&Tt<33;)hr();return qs(e)>2||qs(Tt)>3?"":" "}function j4(e,r){for(;--r&&hr()&&!(Tt<48||Tt>102||Tt>57&&Tt<65||Tt>70&&Tt<97););return Md(e,qu()+(r<6&&ti()==32&&hr()==32))}function G0(e){for(;hr();)switch(Tt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&G0(Tt);break;case 40:e===41&&G0(e);break;case 92:hr();break}return Xn}function T4(e,r){for(;hr()&&e+Tt!==57;)if(e+Tt===84&&ti()===47)break;return"/*"+Md(r,Xn-1)+"*"+$g(e===47?e:hr())}function $4(e){for(;!qs(ti());)hr();return Md(e,Xn)}function M4(e){return k4(Fu("",null,null,null,[""],e=C4(e),0,[0],e))}function Fu(e,r,a,o,s,u,h,p,m){for(var x=0,y=0,v=h,k=0,C=0,S=0,E=1,T=1,M=1,O=0,N="",z=s,_=u,B=o,j=N;T;)switch(S=O,O=hr()){case 40:if(S!=108&&zt(j,v-1)==58){Gu(j+=Oe(o0(O),"&","&\f"),"&\f",T2(x?p[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:j+=o0(O);break;case 9:case 10:case 13:case 32:j+=E4(S);break;case 92:j+=j4(qu()-1,7);continue;case 47:switch(ti()){case 42:case 47:Ts(L4(T4(hr(),qu()),r,a,m),m),(qs(S||1)==5||qs(ti()||1)==5)&&dr(j)&&Qi(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*E:p[x++]=dr(j)*M;case 125*E:case 59:case 0:switch(O){case 0:case 125:T=0;case 59+y:M==-1&&(j=Oe(j,/\f/g,"")),C>0&&(dr(j)-v||E===0&&S===47)&&Ts(C>32?lx(j+";",o,a,v-1,m):lx(Oe(j," ","")+";",o,a,v-2,m),m);break;case 59:j+=";";default:if(Ts(B=ox(j,r,a,x,y,s,p,N,z=[],_=[],v,u),u),O===123)if(y===0)Fu(j,r,B,B,z,u,v,p,_);else{switch(k){case 99:if(zt(j,3)===110)break;case 108:if(zt(j,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Fu(e,B,B,o&&Ts(ox(e,B,B,0,0,s,p,N,s,z=[],v,_),_),s,_,v,p,o?z:_):Fu(j,B,B,B,[""],_,0,p,_)}}x=y=C=0,E=M=1,N=j="",v=h;break;case 58:v=1+dr(j),C=S;default:if(E<1){if(O==123)--E;else if(O==125&&E++==0&&S4()==125)continue}switch(j+=$g(O),O*E){case 38:M=y>0?1:(j+="\f",-1);break;case 44:p[x++]=(dr(j)-1)*M,M=1;break;case 64:ti()===45&&(j+=o0(hr())),k=ti(),y=v=dr(N=j+=$4(qu())),O++;break;case 45:S===45&&dr(j)==2&&(E=0)}}return u}function ox(e,r,a,o,s,u,h,p,m,x,y,v){for(var k=s-1,C=s===0?u:[""],S=M2(C),E=0,T=0,M=0;E<o;++E)for(var O=0,N=Qi(e,k+1,k=T2(T=h[E])),z=e;O<S;++O)(z=$2(T>0?C[O]+" "+N:Oe(N,/&\f/g,C[O])))&&(m[M++]=z);return $d(e,r,a,s===0?jd:p,m,x,y,v)}function L4(e,r,a,o){return $d(e,r,a,E2,$g(w4()),Qi(e,2,-2),0,o)}function lx(e,r,a,o,s){return $d(e,r,a,Tg,Qi(e,0,o),Qi(e,o+1,-1),o,s)}function O2(e,r,a){switch(y4(e,r)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Fe+e+e;case 4855:return Fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return _s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+_s+e+ot+e+e;case 5936:switch(zt(e,r+11)){case 114:return Fe+e+ot+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+ot+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+ot+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+ot+e+e;case 6165:return Fe+e+ot+"flex-"+e+e;case 5187:return Fe+e+Oe(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return Fe+e+ot+"flex-item-"+Oe(e,/flex-|-self/g,"")+(ua(e,/flex-|baseline/)?"":ot+"grid-row-"+Oe(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+ot+"flex-line-pack"+Oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+ot+Oe(e,"shrink","negative")+e;case 5292:return Fe+e+ot+Oe(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Oe(e,"-grow","")+Fe+e+ot+Oe(e,"grow","positive")+e;case 4554:return Fe+Oe(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+ot+"flex-pack:$3"),/space-between/,"justify")+Fe+e+e;case 4200:if(!ua(e,/flex-|baseline/))return ot+"grid-column-align"+Qi(e,r)+e;break;case 2592:case 3360:return ot+Oe(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(o,s){return r=s,ua(o.props,/grid-\w+-end/)})?~Gu(e+(a=a[r].value),"span",0)?e:ot+Oe(e,"-start","")+e+ot+"grid-row-span:"+(~Gu(a,"span",0)?ua(a,/\d+/):+ua(a,/\d+/)-+ua(e,/\d+/))+";":ot+Oe(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(o){return ua(o.props,/grid-\w+-start/)})?e:ot+Oe(Oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dr(e)-1-r>6)switch(zt(e,r+1)){case 109:if(zt(e,r+4)!==45)break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+_s+(zt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Gu(e,"stretch",0)?O2(Oe(e,"stretch","fill-available"),r,a)+e:e}break;case 5152:case 5920:return Oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,u,h,p,m,x){return ot+s+":"+u+x+(h?ot+s+"-span:"+(p?m:+m-+u)+x:"")+e});case 4949:if(zt(e,r+6)===121)return Oe(e,":",":"+Fe)+e;break;case 6444:switch(zt(e,zt(e,14)===45?18:11)){case 120:return Oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(zt(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+ot+"$2box$3")+e;case 100:return Oe(e,":",":"+ot)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(e,"scroll-","scroll-snap-")+e}return e}function ad(e,r){for(var a="",o=0;o<e.length;o++)a+=r(e[o],o,e,r)||"";return a}function O4(e,r,a,o){switch(e.type){case x4:if(e.children.length)break;case m4:case v4:case Tg:return e.return=e.return||e.value;case E2:return"";case j2:return e.return=e.value+"{"+ad(e.children,o)+"}";case jd:if(!dr(e.value=e.props.join(",")))return""}return dr(a=ad(e.children,o))?e.return=e.value+"{"+a+"}":""}function A4(e){var r=M2(e);return function(a,o,s,u){for(var h="",p=0;p<r;p++)h+=e[p](a,o,s,u)||"";return h}}function z4(e){return function(r){r.root||(r=r.return)&&e(r)}}function R4(e,r,a,o){if(e.length>-1&&!e.return)switch(e.type){case Tg:e.return=O2(e.value,e.length,a);return;case j2:return ad([Ka(e,{value:Oe(e.value,"@","@"+Fe)})],o);case jd:if(e.length)return b4(a=e.props,function(s){switch(ua(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zo(Ka(e,{props:[Oe(s,/:(read-\w+)/,":"+_s+"$1")]})),Zo(Ka(e,{props:[s]})),P0(e,{props:ix(a,o)});break;case"::placeholder":Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,":"+Fe+"input-$1")]})),Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,":"+_s+"$1")]})),Zo(Ka(e,{props:[Oe(s,/:(plac\w+)/,ot+"input-$1")]})),Zo(Ka(e,{props:[s]})),P0(e,{props:ix(a,o)});break}return""})}}var A2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zn={},cl=typeof process<"u"&&zn!==void 0&&(zn.REACT_APP_SC_ATTR||zn.SC_ATTR)||"data-styled",z2="active",R2="data-styled-version",Ld="6.3.10",Mg=`/*!sc*/
`,Ds=typeof window<"u"&&typeof document<"u",_4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&zn!==void 0&&zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&zn.REACT_APP_SC_DISABLE_SPEEDY!==""?zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&zn!==void 0&&zn.SC_DISABLE_SPEEDY!==void 0&&zn.SC_DISABLE_SPEEDY!==""&&zn.SC_DISABLE_SPEEDY!=="false"&&zn.SC_DISABLE_SPEEDY),D4={};function Ki(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Wu=new Map,id=new Map,Vu=1,$s=function(e){if(Wu.has(e))return Wu.get(e);for(;id.has(Vu);)Vu++;var r=Vu++;return Wu.set(e,r),id.set(r,e),r},N4=function(e,r){Vu=r+1,Wu.set(e,r),id.set(r,e)},Lg=Object.freeze([]),ul=Object.freeze({});function _2(e,r,a){return a===void 0&&(a=ul),e.theme!==a.theme&&e.theme||r||a.theme}var D2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),B4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H4=/(^-|-$)/g;function sx(e){return e.replace(B4,"-").replace(H4,"")}var U4=/(a)(d)/gi,cx=function(e){return String.fromCharCode(e+(e>25?39:97))};function q0(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=cx(r%52)+a;return(cx(r%52)+a).replace(U4,"$1-$2")}var l0,Pi=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},N2=function(e){return Pi(5381,e)};function Og(e){return q0(N2(e)>>>0)}function I4(e){return e.displayName||e.name||"Component"}function s0(e){return typeof e=="string"&&!0}var B2=typeof Symbol=="function"&&Symbol.for,H2=B2?Symbol.for("react.memo"):60115,P4=B2?Symbol.for("react.forward_ref"):60112,G4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F4=((l0={})[P4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l0[H2]=U2,l0);function ux(e){return("type"in(r=e)&&r.type.$$typeof)===H2?U2:"$$typeof"in e?F4[e.$$typeof]:G4;var r}var W4=Object.defineProperty,V4=Object.getOwnPropertyNames,dx=Object.getOwnPropertySymbols,Y4=Object.getOwnPropertyDescriptor,Z4=Object.getPrototypeOf,fx=Object.prototype;function I2(e,r,a){if(typeof r!="string"){if(fx){var o=Z4(r);o&&o!==fx&&I2(e,o,a)}var s=V4(r);dx&&(s=s.concat(dx(r)));for(var u=ux(e),h=ux(r),p=0;p<s.length;++p){var m=s[p];if(!(m in q4||a&&a[m]||h&&m in h||u&&m in u)){var x=Y4(r,m);try{W4(e,m,x)}catch{}}}}return e}function Ji(e){return typeof e=="function"}function Ag(e){return typeof e=="object"&&"styledComponentId"in e}function Vi(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function od(e,r){return e.join("")}function Fs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function F0(e,r,a){if(a===void 0&&(a=!1),!a&&!Fs(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=F0(e[o],r[o]);else if(Fs(r))for(var o in r)e[o]=F0(e[o],r[o]);return e}function zg(e,r){Object.defineProperty(e,"toString",{value:r})}var X4=(function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var a=this._cIndex;if(r>this._cGroup)for(var o=this._cGroup;o<r;o++)a+=this.groupSizes[o];else for(o=this._cGroup-1;o>=r;o--)a-=this.groupSizes[o];return this._cGroup=r,this._cIndex=a,a},e.prototype.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,u=s;r>=u;)if((u<<=1)<0)throw Ki(16,"".concat(r));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var h=s;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(r+1),m=0,x=(h=0,a.length);h<x;h++)this.tag.insertRule(p,a[h])&&(this.groupSizes[r]++,p++,m++);m>0&&this._cGroup>r&&(this._cIndex+=m)},e.prototype.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],o=this.indexOfGroup(r),s=o+a;this.groupSizes[r]=0;for(var u=o;u<s;u++)this.tag.deleteRule(o);a>0&&this._cGroup>r&&(this._cIndex-=a)}},e.prototype.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),u=s+o,h=s;h<u;h++)a+=this.tag.getRule(h)+Mg;return a},e})(),Q4="style[".concat(cl,"][").concat(R2,'="').concat(Ld,'"]'),K4=new RegExp("^".concat(cl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hx=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},W0=function(e){if(!e)return document;if(hx(e))return e;if("getRootNode"in e){var r=e.getRootNode();if(hx(r))return r}return document},J4=function(e,r,a){for(var o,s=a.split(","),u=0,h=s.length;u<h;u++)(o=s[u])&&e.registerName(r,o)},e6=function(e,r){for(var a,o=((a=r.textContent)!==null&&a!==void 0?a:"").split(Mg),s=[],u=0,h=o.length;u<h;u++){var p=o[u].trim();if(p){var m=p.match(K4);if(m){var x=0|parseInt(m[1],10),y=m[2];x!==0&&(N4(y,x),J4(e,y,m[3]),e.getTag().insertRules(x,s)),s.length=0}else s.push(p)}}},c0=function(e){for(var r=W0(e.options.target).querySelectorAll(Q4),a=0,o=r.length;a<o;a++){var s=r[a];s&&s.getAttribute(cl)!==z2&&(e6(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function t6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P2=function(e){var r=document.head,a=e||r,o=document.createElement("style"),s=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(cl,"]")));return m[m.length-1]})(a),u=s!==void 0?s.nextSibling:null;o.setAttribute(cl,z2),o.setAttribute(R2,Ld);var h=t6();return h&&o.setAttribute("nonce",h),a.insertBefore(o,u),o},n6=(function(){function e(r){this.element=P2(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var o;if(a.sheet)return a.sheet;for(var s=(o=a.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,u=0,h=s.length;u<h;u++){var p=s[u];if(p.ownerNode===a)return p}throw Ki(17)})(this.element),this.length=0}return e.prototype.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var a=this.sheet.cssRules[r];return a&&a.cssText?a.cssText:""},e})(),r6=(function(){function e(r){this.element=P2(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,a){if(r<=this.length&&r>=0){var o=document.createTextNode(a);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e})(),a6=(function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,a){return r<=this.length&&(r===this.length?this.rules.push(a):this.rules.splice(r,0,a),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e})(),gx=Ds,i6={isServer:!Ds,useCSSOMInjection:!_4},ld=(function(){function e(r,a,o){r===void 0&&(r=ul),a===void 0&&(a={});var s=this;this.options=Ge(Ge({},i6),r),this.gs=a,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Ds&&gx&&(gx=!1,c0(this)),zg(this,function(){return(function(u){for(var h=u.getTag(),p=h.length,m="",x=function(v){var k=(function(M){return id.get(M)})(v);if(k===void 0)return"continue";var C=u.names.get(k);if(C===void 0||!C.size)return"continue";var S=h.getGroup(v);if(S.length===0)return"continue";var E=cl+".g"+v+'[id="'+k+'"]',T="";C.forEach(function(M){M.length>0&&(T+=M+",")}),m+=S+E+'{content:"'+T+'"}'+Mg},y=0;y<p;y++)x(y);return m})(s)})}return e.registerId=function(r){return $s(r)},e.prototype.rehydrate=function(){!this.server&&Ds&&c0(this)},e.prototype.reconstructWithOptions=function(r,a){a===void 0&&(a=!0);var o=new e(Ge(Ge({},this.options),r),this.gs,a&&this.names||void 0);return!this.server&&Ds&&r.target!==this.options.target&&W0(this.options.target)!==W0(r.target)&&c0(o),o},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(a){var o=a.useCSSOMInjection,s=a.target;return a.isServer?new a6(s):o?new n6(s):new r6(s)})(this.options),new X4(r)));var r},e.prototype.hasNameForId=function(r,a){var o,s;return(s=(o=this.names.get(r))===null||o===void 0?void 0:o.has(a))!==null&&s!==void 0&&s},e.prototype.registerName=function(r,a){$s(r);var o=this.names.get(r);o?o.add(a):this.names.set(r,new Set([a]))},e.prototype.insertRules=function(r,a,o){this.registerName(r,a),this.getTag().insertRules($s(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup($s(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e})(),o6=/&/g,da=47,Gi=42;function px(e){if(e.indexOf("}")===-1)return!1;for(var r=e.length,a=0,o=0,s=!1,u=0;u<r;u++){var h=e.charCodeAt(u);if(o!==0||s||h!==da||e.charCodeAt(u+1)!==Gi)if(s)h===Gi&&e.charCodeAt(u+1)===da&&(s=!1,u++);else if(h!==34&&h!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(h===123)a++;else if(h===125&&--a<0)return!0}}else o===0?o=h:o===h&&(o=0);else s=!0,u++}return a!==0||o!==0}function G2(e,r){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(r," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(r," ")),a.props=a.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=G2(a.children,r)),a})}function l6(e){var r,a,o,s=ul,u=s.options,h=u===void 0?ul:u,p=s.plugins,m=p===void 0?Lg:p,x=function(S,E,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(r):S},y=m.slice();y.push(function(S){S.type===jd&&S.value.includes("&")&&(o||(o=new RegExp("\\".concat(a,"\\b"),"g")),S.props[0]=S.props[0].replace(o6,a).replace(o,x))}),h.prefix&&y.push(R4),y.push(O4);var v=[],k=A4(y.concat(z4(function(S){return v.push(S)}))),C=function(S,E,T,M){E===void 0&&(E=""),T===void 0&&(T=""),M===void 0&&(M="&"),r=M,a=E,o=void 0;var O=(function(z){if(!px(z))return z;for(var _=z.length,B="",j=0,L=0,G=0,Y=!1,I=0;I<_;I++){var Z=z.charCodeAt(I);if(G!==0||Y||Z!==da||z.charCodeAt(I+1)!==Gi)if(Y)Z===Gi&&z.charCodeAt(I+1)===da&&(Y=!1,I++);else if(Z!==34&&Z!==39||I!==0&&z.charCodeAt(I-1)===92){if(G===0)if(Z===123)L++;else if(Z===125){if(--L<0){for(var re=I+1;re<_;){var X=z.charCodeAt(re);if(X===59||X===10)break;re++}re<_&&z.charCodeAt(re)===59&&re++,L=0,I=re-1,j=re;continue}L===0&&(B+=z.substring(j,I+1),j=I+1)}else Z===59&&L===0&&(B+=z.substring(j,I+1),j=I+1)}else G===0?G=Z:G===Z&&(G=0);else Y=!0,I++}if(j<_){var te=z.substring(j);px(te)||(B+=te)}return B})((function(z){if(z.indexOf("//")===-1)return z;for(var _=z.length,B=[],j=0,L=0,G=0,Y=0;L<_;){var I=z.charCodeAt(L);if(I!==34&&I!==39||L!==0&&z.charCodeAt(L-1)===92)if(G===0)if(I===da&&L+1<_&&z.charCodeAt(L+1)===Gi){for(L+=2;L+1<_&&(z.charCodeAt(L)!==Gi||z.charCodeAt(L+1)!==da);)L++;L+=2}else if(I===40&&L>=3&&(32|z.charCodeAt(L-1))==108&&(32|z.charCodeAt(L-2))==114&&(32|z.charCodeAt(L-3))==117)Y=1,L++;else if(Y>0)I===41?Y--:I===40&&Y++,L++;else if(I===Gi&&L+1<_&&z.charCodeAt(L+1)===da)L>j&&B.push(z.substring(j,L)),j=L+=2;else if(I===da&&L+1<_&&z.charCodeAt(L+1)===da){for(L>j&&B.push(z.substring(j,L));L<_&&z.charCodeAt(L)!==10;)L++;j=L}else L++;else L++;else G===0?G=I:G===I&&(G=0),L++}return j===0?z:(j<_&&B.push(z.substring(j)),B.join(""))})(S)),N=M4(T||E?"".concat(T," ").concat(E," { ").concat(O," }"):O);return h.namespace&&(N=G2(N,h.namespace)),v=[],ad(N,k),v};return C.hash=m.length?m.reduce(function(S,E){return E.name||Ki(15),Pi(S,E.name)},5381).toString():"",C}var s6=new ld,V0=l6(),q2=Ve.createContext({shouldForwardProp:void 0,styleSheet:s6,stylis:V0});q2.Consumer;Ve.createContext(void 0);function Y0(){return Ve.useContext(q2)}var F2=(function(){function e(r,a){var o=this;this.inject=function(s,u){u===void 0&&(u=V0);var h=o.name+u.hash;s.hasNameForId(o.id,h)||s.insertRules(o.id,h,u(o.rules,h,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=a,zg(this,function(){throw Ki(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=V0),this.name+r.hash},e})();function c6(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in A2||e.startsWith("--")?String(r).trim():"".concat(r,"px")}var u6=function(e){return e>="A"&&e<="Z"};function mx(e){for(var r="",a=0;a<e.length;a++){var o=e[a];if(a===1&&o==="-"&&e[0]==="-")return e;u6(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var W2=function(e){return e==null||e===!1||e===""},V2=function(e){var r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!W2(o)&&(Array.isArray(o)&&o.isCss||Ji(o)?r.push("".concat(mx(a),":"),o,";"):Fs(o)?r.push.apply(r,Zn(Zn(["".concat(a," {")],V2(o),!1),["}"],!1)):r.push("".concat(mx(a),": ").concat(c6(a,o),";")))}return r};function ri(e,r,a,o,s){if(s===void 0&&(s=[]),typeof e=="string")return e&&s.push(e),s;if(W2(e))return s;if(Ag(e))return s.push(".".concat(e.styledComponentId)),s;if(Ji(e)){if(!Ji(h=e)||h.prototype&&h.prototype.isReactComponent||!r)return s.push(e),s;var u=e(r);return ri(u,r,a,o,s)}var h;if(e instanceof F2)return a?(e.inject(a,o),s.push(e.getName(o))):s.push(e),s;if(Fs(e)){for(var p=V2(e),m=0;m<p.length;m++)s.push(p[m]);return s}if(!Array.isArray(e))return s.push(e.toString()),s;for(m=0;m<e.length;m++)ri(e[m],r,a,o,s);return s}function Y2(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(Ji(a)&&!Ag(a))return!1}return!0}var d6=N2(Ld),f6=(function(){function e(r,a,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Y2(r),this.componentId=a,this.baseHash=Pi(d6,a),this.baseStyle=o,ld.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,a,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))s=Vi(s,this.staticRulesId);else{var u=od(ri(this.rules,r,a,o)),h=q0(Pi(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,h)){var p=o(u,".".concat(h),void 0,this.componentId);a.insertRules(this.componentId,h,p)}s=Vi(s,h),this.staticRulesId=h}else{for(var m=Pi(this.baseHash,o.hash),x="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")x+=v;else if(v){var k=od(ri(v,r,a,o));m=Pi(Pi(m,String(y)),k),x+=k}}if(x){var C=q0(m>>>0);if(!a.hasNameForId(this.componentId,C)){var S=o(x,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,S)}s=Vi(s,C)}}return{className:s,css:typeof window>"u"?a.getTag().getGroup($s(this.componentId)):""}},e})(),Ws=Ve.createContext(void 0);Ws.Consumer;function Od(e){var r=Ve.useContext(Ws),a=Ve.useMemo(function(){return(function(o,s){if(!o)throw Ki(14);if(Ji(o)){var u=o(s);return u}if(Array.isArray(o)||typeof o!="object")throw Ki(8);return s?Ge(Ge({},s),o):o})(e.theme,r)},[e.theme,r]);return e.children?Ve.createElement(Ws.Provider,{value:a},e.children):null}var u0={};function h6(e,r,a){var o=Ag(e),s=e,u=!s0(e),h=r.attrs,p=h===void 0?Lg:h,m=r.componentId,x=m===void 0?(function(z,_){var B=typeof z!="string"?"sc":sx(z);u0[B]=(u0[B]||0)+1;var j="".concat(B,"-").concat(Og(Ld+B+u0[B]));return _?"".concat(_,"-").concat(j):j})(r.displayName,r.parentComponentId):m,y=r.displayName,v=y===void 0?(function(z){return s0(z)?"styled.".concat(z):"Styled(".concat(I4(z),")")})(e):y,k=r.displayName&&r.componentId?"".concat(sx(r.displayName),"-").concat(r.componentId):r.componentId||x,C=o&&s.attrs?s.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(o&&s.shouldForwardProp){var E=s.shouldForwardProp;if(r.shouldForwardProp){var T=r.shouldForwardProp;S=function(z,_){return E(z,_)&&T(z,_)}}else S=E}var M=new f6(a,k,o?s.componentStyle:void 0);function O(z,_){return(function(B,j,L){var G=B.attrs,Y=B.componentStyle,I=B.defaultProps,Z=B.foldedComponentIds,re=B.styledComponentId,X=B.target,te=Ve.useContext(Ws),H=Y0(),q=B.shouldForwardProp||H.shouldForwardProp,ae=_2(j,te,I)||ul,ie=(function(me,fe,xe){for(var ve,Te=Ge(Ge({},fe),{className:void 0,theme:xe}),pt=0;pt<me.length;pt+=1){var dt=Ji(ve=me[pt])?ve(Te):ve;for(var mt in dt)mt==="className"?Te.className=Vi(Te.className,dt[mt]):mt==="style"?Te.style=Ge(Ge({},Te.style),dt[mt]):Te[mt]=dt[mt]}return"className"in fe&&typeof fe.className=="string"&&(Te.className=Vi(Te.className,fe.className)),Te})(G,j,ae),de=ie.as||X,A={};for(var F in ie)ie[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&ie.theme===ae||(F==="forwardedAs"?A.as=ie.forwardedAs:q&&!q(F,de)||(A[F]=ie[F]));var Q=(function(me,fe){var xe=Y0(),ve=me.generateAndInjectStyles(fe,xe.styleSheet,xe.stylis);return ve})(Y,ie),le=Q.className,he=Vi(Z,re);return le&&(he+=" "+le),ie.className&&(he+=" "+ie.className),A[s0(de)&&!D2.has(de)?"class":"className"]=he,L&&(A.ref=L),f.createElement(de,A)})(N,z,_)}O.displayName=v;var N=Ve.forwardRef(O);return N.attrs=C,N.componentStyle=M,N.displayName=v,N.shouldForwardProp=S,N.foldedComponentIds=o?Vi(s.foldedComponentIds,s.styledComponentId):"",N.styledComponentId=k,N.target=o?s.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=o?(function(_){for(var B=[],j=1;j<arguments.length;j++)B[j-1]=arguments[j];for(var L=0,G=B;L<G.length;L++)F0(_,G[L],!0);return _})({},s.defaultProps,z):z}}),zg(N,function(){return".".concat(N.styledComponentId)}),u&&I2(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function vx(e,r){for(var a=[e[0]],o=0,s=r.length;o<s;o+=1)a.push(r[o],e[o+1]);return a}var xx=function(e){return Object.assign(e,{isCss:!0})};function oi(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(Ji(e)||Fs(e))return xx(ri(vx(Lg,Zn([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?ri(o):xx(ri(vx(o,r)))}function Z0(e,r,a){if(a===void 0&&(a=ul),!r)throw Ki(1,r);var o=function(s){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return e(r,a,oi.apply(void 0,Zn([s],u,!1)))};return o.attrs=function(s){return Z0(e,r,Ge(Ge({},a),{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return Z0(e,r,Ge(Ge({},a),s))},o}var Z2=function(e){return Z0(h6,e)},pe=Z2;D2.forEach(function(e){pe[e]=Z2(e)});var g6=(function(){function e(r,a){this.rules=r,this.componentId=a,this.isStatic=Y2(r),ld.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,a,o,s){var u=s(od(ri(this.rules,a,o,s)),""),h=this.componentId+r;o.insertRules(h,h,u)},e.prototype.removeStyles=function(r,a){a.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,a,o,s){r>2&&ld.registerId(this.componentId+r);var u=this.componentId+r;this.isStatic?o.hasNameForId(u,u)||this.createStyles(r,a,o,s):(this.removeStyles(r,o),this.createStyles(r,a,o,s))},e})();function Rg(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=oi.apply(void 0,Zn([e],r,!1)),s="sc-global-".concat(Og(JSON.stringify(o))),u=new g6(o,s),h=new WeakMap,p=function(x){var y=Y0(),v=Ve.useContext(Ws),k=h.get(y.styleSheet);return k===void 0&&(k=y.styleSheet.allocateGSInstance(s),h.set(y.styleSheet,k)),(typeof window>"u"||!y.styleSheet.server)&&m(k,x,y.styleSheet,v,y.stylis),Ve.useLayoutEffect(function(){return y.styleSheet.server||m(k,x,y.styleSheet,v,y.stylis),function(){var C;u.removeStyles(k,y.styleSheet),C=y.styleSheet.options.target,typeof document<"u"&&(C??document).querySelectorAll('style[data-styled-global="'.concat(s,'"]')).forEach(function(S){return S.remove()})}},[k,x,y.styleSheet,v,y.stylis]),null};function m(x,y,v,k,C){if(u.isStatic)u.renderStyles(x,D4,v,C);else{var S=Ge(Ge({},y),{theme:_2(y,k,p.defaultProps)});u.renderStyles(x,S,v,C)}}return Ve.memo(p)}function p6(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=od(oi.apply(void 0,Zn([e],r,!1))),s=Og(o);return new F2(s,o)}var lt="-ms-",Ns="-moz-",We="-webkit-",X2="comm",Ad="rule",_g="decl",m6="@import",v6="@namespace",Q2="@keyframes",x6="@layer",K2=Math.abs,Dg=String.fromCharCode,X0=Object.assign;function y6(e,r){return Rt(e,0)^45?(((r<<2^Rt(e,0))<<2^Rt(e,1))<<2^Rt(e,2))<<2^Rt(e,3):0}function J2(e){return e.trim()}function fa(e,r){return(e=r.exec(e))?e[0]:e}function Ae(e,r,a){return e.replace(r,a)}function Yu(e,r,a){return e.indexOf(r,a)}function Rt(e,r){return e.charCodeAt(r)|0}function eo(e,r,a){return e.slice(r,a)}function fr(e){return e.length}function eb(e){return e.length}function Ms(e,r){return r.push(e),e}function b6(e,r){return e.map(r).join("")}function yx(e,r){return e.filter(function(a){return!fa(a,r)})}var zd=1,dl=1,tb=0,Qn=0,$t=0,vl="";function Rd(e,r,a,o,s,u,h,p){return{value:e,root:r,parent:a,type:o,props:s,children:u,line:zd,column:dl,length:h,return:"",siblings:p}}function Ja(e,r){return X0(Rd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Xo(e){for(;e.root;)e=Ja(e.root,{children:[e]});Ms(e,e.siblings)}function w6(){return $t}function S6(){return $t=Qn>0?Rt(vl,--Qn):0,dl--,$t===10&&(dl=1,zd--),$t}function gr(){return $t=Qn<tb?Rt(vl,Qn++):0,dl++,$t===10&&(dl=1,zd++),$t}function ni(){return Rt(vl,Qn)}function Zu(){return Qn}function _d(e,r){return eo(vl,e,r)}function Vs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C6(e){return zd=dl=1,tb=fr(vl=e),Qn=0,[]}function k6(e){return vl="",e}function d0(e){return J2(_d(Qn-1,Q0(e===91?e+2:e===40?e+1:e)))}function E6(e){for(;($t=ni())&&$t<33;)gr();return Vs(e)>2||Vs($t)>3?"":" "}function j6(e,r){for(;--r&&gr()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return _d(e,Zu()+(r<6&&ni()==32&&gr()==32))}function Q0(e){for(;gr();)switch($t){case e:return Qn;case 34:case 39:e!==34&&e!==39&&Q0($t);break;case 40:e===41&&Q0(e);break;case 92:gr();break}return Qn}function T6(e,r){for(;gr()&&e+$t!==57;)if(e+$t===84&&ni()===47)break;return"/*"+_d(r,Qn-1)+"*"+Dg(e===47?e:gr())}function $6(e){for(;!Vs(ni());)gr();return _d(e,Qn)}function M6(e){return k6(Xu("",null,null,null,[""],e=C6(e),0,[0],e))}function Xu(e,r,a,o,s,u,h,p,m){for(var x=0,y=0,v=h,k=0,C=0,S=0,E=1,T=1,M=1,O=0,N="",z=s,_=u,B=o,j=N;T;)switch(S=O,O=gr()){case 40:if(S!=108&&Rt(j,v-1)==58){Yu(j+=Ae(d0(O),"&","&\f"),"&\f",K2(x?p[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:j+=d0(O);break;case 9:case 10:case 13:case 32:j+=E6(S);break;case 92:j+=j6(Zu()-1,7);continue;case 47:switch(ni()){case 42:case 47:Ms(L6(T6(gr(),Zu()),r,a,m),m),(Vs(S||1)==5||Vs(ni()||1)==5)&&fr(j)&&eo(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*E:p[x++]=fr(j)*M;case 125*E:case 59:case 0:switch(O){case 0:case 125:T=0;case 59+y:M==-1&&(j=Ae(j,/\f/g,"")),C>0&&(fr(j)-v||E===0&&S===47)&&Ms(C>32?wx(j+";",o,a,v-1,m):wx(Ae(j," ","")+";",o,a,v-2,m),m);break;case 59:j+=";";default:if(Ms(B=bx(j,r,a,x,y,s,p,N,z=[],_=[],v,u),u),O===123)if(y===0)Xu(j,r,B,B,z,u,v,p,_);else{switch(k){case 99:if(Rt(j,3)===110)break;case 108:if(Rt(j,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Xu(e,B,B,o&&Ms(bx(e,B,B,0,0,s,p,N,s,z=[],v,_),_),s,_,v,p,o?z:_):Xu(j,B,B,B,[""],_,0,p,_)}}x=y=C=0,E=M=1,N=j="",v=h;break;case 58:v=1+fr(j),C=S;default:if(E<1){if(O==123)--E;else if(O==125&&E++==0&&S6()==125)continue}switch(j+=Dg(O),O*E){case 38:M=y>0?1:(j+="\f",-1);break;case 44:p[x++]=(fr(j)-1)*M,M=1;break;case 64:ni()===45&&(j+=d0(gr())),k=ni(),y=v=fr(N=j+=$6(Zu())),O++;break;case 45:S===45&&fr(j)==2&&(E=0)}}return u}function bx(e,r,a,o,s,u,h,p,m,x,y,v){for(var k=s-1,C=s===0?u:[""],S=eb(C),E=0,T=0,M=0;E<o;++E)for(var O=0,N=eo(e,k+1,k=K2(T=h[E])),z=e;O<S;++O)(z=J2(T>0?C[O]+" "+N:Ae(N,/&\f/g,C[O])))&&(m[M++]=z);return Rd(e,r,a,s===0?Ad:p,m,x,y,v)}function L6(e,r,a,o){return Rd(e,r,a,X2,Dg(w6()),eo(e,2,-2),0,o)}function wx(e,r,a,o,s){return Rd(e,r,a,_g,eo(e,0,o),eo(e,o+1,-1),o,s)}function nb(e,r,a){switch(y6(e,r)){case 5103:return We+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return We+e+e;case 4855:return We+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ns+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return We+e+Ns+e+lt+e+e;case 5936:switch(Rt(e,r+11)){case 114:return We+e+lt+Ae(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return We+e+lt+Ae(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return We+e+lt+Ae(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return We+e+lt+e+e;case 6165:return We+e+lt+"flex-"+e+e;case 5187:return We+e+Ae(e,/(\w+).+(:[^]+)/,We+"box-$1$2"+lt+"flex-$1$2")+e;case 5443:return We+e+lt+"flex-item-"+Ae(e,/flex-|-self/g,"")+(fa(e,/flex-|baseline/)?"":lt+"grid-row-"+Ae(e,/flex-|-self/g,""))+e;case 4675:return We+e+lt+"flex-line-pack"+Ae(e,/align-content|flex-|-self/g,"")+e;case 5548:return We+e+lt+Ae(e,"shrink","negative")+e;case 5292:return We+e+lt+Ae(e,"basis","preferred-size")+e;case 6060:return We+"box-"+Ae(e,"-grow","")+We+e+lt+Ae(e,"grow","positive")+e;case 4554:return We+Ae(e,/([^-])(transform)/g,"$1"+We+"$2")+e;case 6187:return Ae(Ae(Ae(e,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),e,"")+e;case 5495:case 3959:return Ae(e,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return Ae(Ae(e,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+lt+"flex-pack:$3"),/space-between/,"justify")+We+e+e;case 4200:if(!fa(e,/flex-|baseline/))return lt+"grid-column-align"+eo(e,r)+e;break;case 2592:case 3360:return lt+Ae(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(o,s){return r=s,fa(o.props,/grid-\w+-end/)})?~Yu(e+(a=a[r].value),"span",0)?e:lt+Ae(e,"-start","")+e+lt+"grid-row-span:"+(~Yu(a,"span",0)?fa(a,/\d+/):+fa(a,/\d+/)-+fa(e,/\d+/))+";":lt+Ae(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(o){return fa(o.props,/grid-\w+-start/)})?e:lt+Ae(Ae(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ae(e,/(.+)-inline(.+)/,We+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fr(e)-1-r>6)switch(Rt(e,r+1)){case 109:if(Rt(e,r+4)!==45)break;case 102:return Ae(e,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+Ns+(Rt(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Yu(e,"stretch",0)?nb(Ae(e,"stretch","fill-available"),r,a)+e:e}break;case 5152:case 5920:return Ae(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,u,h,p,m,x){return lt+s+":"+u+x+(h?lt+s+"-span:"+(p?m:+m-+u)+x:"")+e});case 4949:if(Rt(e,r+6)===121)return Ae(e,":",":"+We)+e;break;case 6444:switch(Rt(e,Rt(e,14)===45?18:11)){case 120:return Ae(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+We+(Rt(e,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+lt+"$2box$3")+e;case 100:return Ae(e,":",":"+lt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ae(e,"scroll-","scroll-snap-")+e}return e}function sd(e,r){for(var a="",o=0;o<e.length;o++)a+=r(e[o],o,e,r)||"";return a}function O6(e,r,a,o){switch(e.type){case x6:if(e.children.length)break;case m6:case v6:case _g:return e.return=e.return||e.value;case X2:return"";case Q2:return e.return=e.value+"{"+sd(e.children,o)+"}";case Ad:if(!fr(e.value=e.props.join(",")))return""}return fr(a=sd(e.children,o))?e.return=e.value+"{"+a+"}":""}function A6(e){var r=eb(e);return function(a,o,s,u){for(var h="",p=0;p<r;p++)h+=e[p](a,o,s,u)||"";return h}}function z6(e){return function(r){r.root||(r=r.return)&&e(r)}}function R6(e,r,a,o){if(e.length>-1&&!e.return)switch(e.type){case _g:e.return=nb(e.value,e.length,a);return;case Q2:return sd([Ja(e,{value:Ae(e.value,"@","@"+We)})],o);case Ad:if(e.length)return b6(a=e.props,function(s){switch(fa(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xo(Ja(e,{props:[Ae(s,/:(read-\w+)/,":"+Ns+"$1")]})),Xo(Ja(e,{props:[s]})),X0(e,{props:yx(a,o)});break;case"::placeholder":Xo(Ja(e,{props:[Ae(s,/:(plac\w+)/,":"+We+"input-$1")]})),Xo(Ja(e,{props:[Ae(s,/:(plac\w+)/,":"+Ns+"$1")]})),Xo(Ja(e,{props:[Ae(s,/:(plac\w+)/,lt+"input-$1")]})),Xo(Ja(e,{props:[s]})),X0(e,{props:yx(a,o)});break}return""})}}var Rn={},fl=typeof process<"u"&&Rn!==void 0&&(Rn.REACT_APP_SC_ATTR||Rn.SC_ATTR)||"data-styled",rb="active",ab="data-styled-version",Dd="6.3.11",Ng=`/*!sc*/
`,Bs=typeof window<"u"&&typeof document<"u",_6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rn.REACT_APP_SC_DISABLE_SPEEDY!==""?Rn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rn!==void 0&&Rn.SC_DISABLE_SPEEDY!==void 0&&Rn.SC_DISABLE_SPEEDY!==""&&Rn.SC_DISABLE_SPEEDY!=="false"&&Rn.SC_DISABLE_SPEEDY),D6={};function ec(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Qu=new Map,cd=new Map,Ku=1,Ls=function(e){if(Qu.has(e))return Qu.get(e);for(;cd.has(Ku);)Ku++;var r=Ku++;return Qu.set(e,r),cd.set(r,e),r},N6=function(e,r){Ku=r+1,Qu.set(e,r),cd.set(r,e)},Bg=Object.freeze([]),hl=Object.freeze({});function ib(e,r,a){return a===void 0&&(a=hl),e.theme!==a.theme&&e.theme||r||a.theme}var ob=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),B6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H6=/(^-|-$)/g;function Sx(e){return e.replace(B6,"-").replace(H6,"")}var U6=/(a)(d)/gi,Cx=function(e){return String.fromCharCode(e+(e>25?39:97))};function K0(e){var r,a="";for(r=Math.abs(e);r>52;r=r/52|0)a=Cx(r%52)+a;return(Cx(r%52)+a).replace(U6,"$1-$2")}var f0,qi=function(e,r){for(var a=r.length;a;)e=33*e^r.charCodeAt(--a);return e},lb=function(e){return qi(5381,e)};function Hg(e){return K0(lb(e)>>>0)}function I6(e){return e.displayName||e.name||"Component"}function h0(e){return typeof e=="string"&&!0}var sb=typeof Symbol=="function"&&Symbol.for,cb=sb?Symbol.for("react.memo"):60115,P6=sb?Symbol.for("react.forward_ref"):60112,G6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ub={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F6=((f0={})[P6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f0[cb]=ub,f0);function kx(e){return("type"in(r=e)&&r.type.$$typeof)===cb?ub:"$$typeof"in e?F6[e.$$typeof]:G6;var r}var W6=Object.defineProperty,V6=Object.getOwnPropertyNames,Ex=Object.getOwnPropertySymbols,Y6=Object.getOwnPropertyDescriptor,Z6=Object.getPrototypeOf,jx=Object.prototype;function db(e,r,a){if(typeof r!="string"){if(jx){var o=Z6(r);o&&o!==jx&&db(e,o,a)}var s=V6(r);Ex&&(s=s.concat(Ex(r)));for(var u=kx(e),h=kx(r),p=0;p<s.length;++p){var m=s[p];if(!(m in q6||a&&a[m]||h&&m in h||u&&m in u)){var x=Y6(r,m);try{W6(e,m,x)}catch{}}}}return e}function gl(e){return typeof e=="function"}function Ug(e){return typeof e=="object"&&"styledComponentId"in e}function Yi(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function ud(e,r){return e.join("")}function Ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function J0(e,r,a){if(a===void 0&&(a=!1),!a&&!Ys(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=J0(e[o],r[o]);else if(Ys(r))for(var o in r)e[o]=J0(e[o],r[o]);return e}function Ig(e,r){Object.defineProperty(e,"toString",{value:r})}var X6=(function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(r){if(r===this._cGroup)return this._cIndex;var a=this._cIndex;if(r>this._cGroup)for(var o=this._cGroup;o<r;o++)a+=this.groupSizes[o];else for(o=this._cGroup-1;o>=r;o--)a-=this.groupSizes[o];return this._cGroup=r,this._cIndex=a,a},e.prototype.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,u=s;r>=u;)if((u<<=1)<0)throw ec(16,"".concat(r));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var h=s;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(r+1),m=0,x=(h=0,a.length);h<x;h++)this.tag.insertRule(p,a[h])&&(this.groupSizes[r]++,p++,m++);m>0&&this._cGroup>r&&(this._cIndex+=m)},e.prototype.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],o=this.indexOfGroup(r),s=o+a;this.groupSizes[r]=0;for(var u=o;u<s;u++)this.tag.deleteRule(o);a>0&&this._cGroup>r&&(this._cIndex-=a)}},e.prototype.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),u=s+o,h=s;h<u;h++)a+=this.tag.getRule(h)+Ng;return a},e})(),Q6="style[".concat(fl,"][").concat(ab,'="').concat(Dd,'"]'),K6=new RegExp("^".concat(fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tx=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},eg=function(e){if(!e)return document;if(Tx(e))return e;if("getRootNode"in e){var r=e.getRootNode();if(Tx(r))return r}return document},J6=function(e,r,a){for(var o,s=a.split(","),u=0,h=s.length;u<h;u++)(o=s[u])&&e.registerName(r,o)},e7=function(e,r){for(var a,o=((a=r.textContent)!==null&&a!==void 0?a:"").split(Ng),s=[],u=0,h=o.length;u<h;u++){var p=o[u].trim();if(p){var m=p.match(K6);if(m){var x=0|parseInt(m[1],10),y=m[2];x!==0&&(N6(y,x),J6(e,y,m[3]),e.getTag().insertRules(x,s)),s.length=0}else s.push(p)}}},g0=function(e){for(var r=eg(e.options.target).querySelectorAll(Q6),a=0,o=r.length;a<o;a++){var s=r[a];s&&s.getAttribute(fl)!==rb&&(e7(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function t7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fb=function(e){var r=document.head,a=e||r,o=document.createElement("style"),s=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(fl,"]")));return m[m.length-1]})(a),u=s!==void 0?s.nextSibling:null;o.setAttribute(fl,rb),o.setAttribute(ab,Dd);var h=t7();return h&&o.setAttribute("nonce",h),a.insertBefore(o,u),o},n7=(function(){function e(r){this.element=fb(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var o;if(a.sheet)return a.sheet;for(var s=(o=a.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,u=0,h=s.length;u<h;u++){var p=s[u];if(p.ownerNode===a)return p}throw ec(17)})(this.element),this.length=0}return e.prototype.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var a=this.sheet.cssRules[r];return a&&a.cssText?a.cssText:""},e})(),r7=(function(){function e(r){this.element=fb(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,a){if(r<=this.length&&r>=0){var o=document.createTextNode(a);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e})(),a7=(function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,a){return r<=this.length&&(r===this.length?this.rules.push(a):this.rules.splice(r,0,a),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e})(),$x=Bs,i7={isServer:!Bs,useCSSOMInjection:!_6},dd=(function(){function e(r,a,o){r===void 0&&(r=hl),a===void 0&&(a={});var s=this;this.options=Ge(Ge({},i7),r),this.gs=a,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Bs&&$x&&($x=!1,g0(this)),Ig(this,function(){return(function(u){for(var h=u.getTag(),p=h.length,m="",x=function(v){var k=(function(M){return cd.get(M)})(v);if(k===void 0)return"continue";var C=u.names.get(k);if(C===void 0||!C.size)return"continue";var S=h.getGroup(v);if(S.length===0)return"continue";var E=fl+".g"+v+'[id="'+k+'"]',T="";C.forEach(function(M){M.length>0&&(T+=M+",")}),m+=S+E+'{content:"'+T+'"}'+Ng},y=0;y<p;y++)x(y);return m})(s)})}return e.registerId=function(r){return Ls(r)},e.prototype.rehydrate=function(){!this.server&&Bs&&g0(this)},e.prototype.reconstructWithOptions=function(r,a){a===void 0&&(a=!0);var o=new e(Ge(Ge({},this.options),r),this.gs,a&&this.names||void 0);return!this.server&&Bs&&r.target!==this.options.target&&eg(this.options.target)!==eg(r.target)&&g0(o),o},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(a){var o=a.useCSSOMInjection,s=a.target;return a.isServer?new a7(s):o?new n7(s):new r7(s)})(this.options),new X6(r)));var r},e.prototype.hasNameForId=function(r,a){var o,s;return(s=(o=this.names.get(r))===null||o===void 0?void 0:o.has(a))!==null&&s!==void 0&&s},e.prototype.registerName=function(r,a){Ls(r);var o=this.names.get(r);o?o.add(a):this.names.set(r,new Set([a]))},e.prototype.insertRules=function(r,a,o){this.registerName(r,a),this.getTag().insertRules(Ls(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Ls(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e})(),o7=/&/g,ha=47,Fi=42;function Mx(e){if(e.indexOf("}")===-1)return!1;for(var r=e.length,a=0,o=0,s=!1,u=0;u<r;u++){var h=e.charCodeAt(u);if(o!==0||s||h!==ha||e.charCodeAt(u+1)!==Fi)if(s)h===Fi&&e.charCodeAt(u+1)===ha&&(s=!1,u++);else if(h!==34&&h!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(h===123)a++;else if(h===125&&--a<0)return!0}}else o===0?o=h:o===h&&(o=0);else s=!0,u++}return a!==0||o!==0}function hb(e,r){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(r," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(r," ")),a.props=a.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=hb(a.children,r)),a})}function l7(e){var r,a,o,s=hl,u=s.options,h=u===void 0?hl:u,p=s.plugins,m=p===void 0?Bg:p,x=function(S,E,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(r):S},y=m.slice();y.push(function(S){S.type===Ad&&S.value.includes("&")&&(o||(o=new RegExp("\\".concat(a,"\\b"),"g")),S.props[0]=S.props[0].replace(o7,a).replace(o,x))}),h.prefix&&y.push(R6),y.push(O6);var v=[],k=A6(y.concat(z6(function(S){return v.push(S)}))),C=function(S,E,T,M){E===void 0&&(E=""),T===void 0&&(T=""),M===void 0&&(M="&"),r=M,a=E,o=void 0;var O=(function(z){if(!Mx(z))return z;for(var _=z.length,B="",j=0,L=0,G=0,Y=!1,I=0;I<_;I++){var Z=z.charCodeAt(I);if(G!==0||Y||Z!==ha||z.charCodeAt(I+1)!==Fi)if(Y)Z===Fi&&z.charCodeAt(I+1)===ha&&(Y=!1,I++);else if(Z!==34&&Z!==39||I!==0&&z.charCodeAt(I-1)===92){if(G===0)if(Z===123)L++;else if(Z===125){if(--L<0){for(var re=I+1;re<_;){var X=z.charCodeAt(re);if(X===59||X===10)break;re++}re<_&&z.charCodeAt(re)===59&&re++,L=0,I=re-1,j=re;continue}L===0&&(B+=z.substring(j,I+1),j=I+1)}else Z===59&&L===0&&(B+=z.substring(j,I+1),j=I+1)}else G===0?G=Z:G===Z&&(G=0);else Y=!0,I++}if(j<_){var te=z.substring(j);Mx(te)||(B+=te)}return B})((function(z){if(z.indexOf("//")===-1)return z;for(var _=z.length,B=[],j=0,L=0,G=0,Y=0;L<_;){var I=z.charCodeAt(L);if(I!==34&&I!==39||L!==0&&z.charCodeAt(L-1)===92)if(G===0)if(I===ha&&L+1<_&&z.charCodeAt(L+1)===Fi){for(L+=2;L+1<_&&(z.charCodeAt(L)!==Fi||z.charCodeAt(L+1)!==ha);)L++;L+=2}else if(I===40&&L>=3&&(32|z.charCodeAt(L-1))==108&&(32|z.charCodeAt(L-2))==114&&(32|z.charCodeAt(L-3))==117)Y=1,L++;else if(Y>0)I===41?Y--:I===40&&Y++,L++;else if(I===Fi&&L+1<_&&z.charCodeAt(L+1)===ha)L>j&&B.push(z.substring(j,L)),j=L+=2;else if(I===ha&&L+1<_&&z.charCodeAt(L+1)===ha){for(L>j&&B.push(z.substring(j,L));L<_&&z.charCodeAt(L)!==10;)L++;j=L}else L++;else L++;else G===0?G=I:G===I&&(G=0),L++}return j===0?z:(j<_&&B.push(z.substring(j)),B.join(""))})(S)),N=M6(T||E?"".concat(T," ").concat(E," { ").concat(O," }"):O);return h.namespace&&(N=hb(N,h.namespace)),v=[],sd(N,k),v};return C.hash=m.length?m.reduce(function(S,E){return E.name||ec(15),qi(S,E.name)},5381).toString():"",C}var s7=new dd,tg=l7(),gb=Ve.createContext({shouldForwardProp:void 0,styleSheet:s7,stylis:tg});gb.Consumer;Ve.createContext(void 0);function ng(){return Ve.useContext(gb)}var pb=(function(){function e(r,a){var o=this;this.inject=function(s,u){u===void 0&&(u=tg);var h=o.name+u.hash;s.hasNameForId(o.id,h)||s.insertRules(o.id,h,u(o.rules,h,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=a,Ig(this,function(){throw ec(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=tg),this.name+r.hash},e})();function c7(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in A2||e.startsWith("--")?String(r).trim():"".concat(r,"px")}var u7=function(e){return e>="A"&&e<="Z"};function Lx(e){for(var r="",a=0;a<e.length;a++){var o=e[a];if(a===1&&o==="-"&&e[0]==="-")return e;u7(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var mb=function(e){return e==null||e===!1||e===""},vb=function(e){var r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!mb(o)&&(Array.isArray(o)&&o.isCss||gl(o)?r.push("".concat(Lx(a),":"),o,";"):Ys(o)?r.push.apply(r,Zn(Zn(["".concat(a," {")],vb(o),!1),["}"],!1)):r.push("".concat(Lx(a),": ").concat(c7(a,o),";")))}return r};function ai(e,r,a,o,s){if(s===void 0&&(s=[]),typeof e=="string")return e&&s.push(e),s;if(mb(e))return s;if(Ug(e))return s.push(".".concat(e.styledComponentId)),s;if(gl(e)){if(!gl(h=e)||h.prototype&&h.prototype.isReactComponent||!r)return s.push(e),s;var u=e(r);return ai(u,r,a,o,s)}var h;if(e instanceof pb)return a?(e.inject(a,o),s.push(e.getName(o))):s.push(e),s;if(Ys(e)){for(var p=vb(e),m=0;m<p.length;m++)s.push(p[m]);return s}if(!Array.isArray(e))return s.push(e.toString()),s;for(m=0;m<e.length;m++)ai(e[m],r,a,o,s);return s}function xb(e){for(var r=0;r<e.length;r+=1){var a=e[r];if(gl(a)&&!Ug(a))return!1}return!0}var d7=lb(Dd),f7=(function(){function e(r,a,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&xb(r),this.componentId=a,this.baseHash=qi(d7,a),this.baseStyle=o,dd.registerId(a)}return e.prototype.generateAndInjectStyles=function(r,a,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,a,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))s=Yi(s,this.staticRulesId);else{var u=ud(ai(this.rules,r,a,o)),h=K0(qi(this.baseHash,u)>>>0);if(!a.hasNameForId(this.componentId,h)){var p=o(u,".".concat(h),void 0,this.componentId);a.insertRules(this.componentId,h,p)}s=Yi(s,h),this.staticRulesId=h}else{for(var m=qi(this.baseHash,o.hash),x="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")x+=v;else if(v){var k=ud(ai(v,r,a,o));m=qi(qi(m,String(y)),k),x+=k}}if(x){var C=K0(m>>>0);if(!a.hasNameForId(this.componentId,C)){var S=o(x,".".concat(C),void 0,this.componentId);a.insertRules(this.componentId,C,S)}s=Yi(s,C)}}return{className:s,css:typeof window>"u"?a.getTag().getGroup(Ls(this.componentId)):""}},e})(),Pg=Ve.createContext(void 0);Pg.Consumer;var p0={};function h7(e,r,a){var o=Ug(e),s=e,u=!h0(e),h=r.attrs,p=h===void 0?Bg:h,m=r.componentId,x=m===void 0?(function(z,_){var B=typeof z!="string"?"sc":Sx(z);p0[B]=(p0[B]||0)+1;var j="".concat(B,"-").concat(Hg(Dd+B+p0[B]));return _?"".concat(_,"-").concat(j):j})(r.displayName,r.parentComponentId):m,y=r.displayName,v=y===void 0?(function(z){return h0(z)?"styled.".concat(z):"Styled(".concat(I6(z),")")})(e):y,k=r.displayName&&r.componentId?"".concat(Sx(r.displayName),"-").concat(r.componentId):r.componentId||x,C=o&&s.attrs?s.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(o&&s.shouldForwardProp){var E=s.shouldForwardProp;if(r.shouldForwardProp){var T=r.shouldForwardProp;S=function(z,_){return E(z,_)&&T(z,_)}}else S=E}var M=new f7(a,k,o?s.componentStyle:void 0);function O(z,_){return(function(B,j,L){var G=B.attrs,Y=B.componentStyle,I=B.defaultProps,Z=B.foldedComponentIds,re=B.styledComponentId,X=B.target,te=Ve.useContext(Pg),H=ng(),q=B.shouldForwardProp||H.shouldForwardProp,ae=ib(j,te,I)||hl,ie=(function(me,fe,xe){for(var ve,Te=Ge(Ge({},fe),{className:void 0,theme:xe}),pt=0;pt<me.length;pt+=1){var dt=gl(ve=me[pt])?ve(Te):ve;for(var mt in dt)mt==="className"?Te.className=Yi(Te.className,dt[mt]):mt==="style"?Te.style=Ge(Ge({},Te.style),dt[mt]):Te[mt]=dt[mt]}return"className"in fe&&typeof fe.className=="string"&&(Te.className=Yi(Te.className,fe.className)),Te})(G,j,ae),de=ie.as||X,A={};for(var F in ie)ie[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&ie.theme===ae||(F==="forwardedAs"?A.as=ie.forwardedAs:q&&!q(F,de)||(A[F]=ie[F]));var Q=(function(me,fe){var xe=ng(),ve=me.generateAndInjectStyles(fe,xe.styleSheet,xe.stylis);return ve})(Y,ie),le=Q.className,he=Yi(Z,re);return le&&(he+=" "+le),ie.className&&(he+=" "+ie.className),A[h0(de)&&!ob.has(de)?"class":"className"]=he,L&&(A.ref=L),f.createElement(de,A)})(N,z,_)}O.displayName=v;var N=Ve.forwardRef(O);return N.attrs=C,N.componentStyle=M,N.displayName=v,N.shouldForwardProp=S,N.foldedComponentIds=o?Yi(s.foldedComponentIds,s.styledComponentId):"",N.styledComponentId=k,N.target=o?s.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=o?(function(_){for(var B=[],j=1;j<arguments.length;j++)B[j-1]=arguments[j];for(var L=0,G=B;L<G.length;L++)J0(_,G[L],!0);return _})({},s.defaultProps,z):z}}),Ig(N,function(){return".".concat(N.styledComponentId)}),u&&db(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function Ox(e,r){for(var a=[e[0]],o=0,s=r.length;o<s;o+=1)a.push(r[o],e[o+1]);return a}var Ax=function(e){return Object.assign(e,{isCss:!0})};function D(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];if(gl(e)||Ys(e))return Ax(ai(Ox(Bg,Zn([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?ai(o):Ax(ai(Ox(o,r)))}function rg(e,r,a){if(a===void 0&&(a=hl),!r)throw ec(1,r);var o=function(s){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return e(r,a,D.apply(void 0,Zn([s],u,!1)))};return o.attrs=function(s){return rg(e,r,Ge(Ge({},a),{attrs:Array.prototype.concat(a.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return rg(e,r,Ge(Ge({},a),s))},o}var yb=function(e){return rg(h7,e)},b=yb;ob.forEach(function(e){b[e]=yb(e)});var g7=(function(){function e(r,a){this.rules=r,this.componentId=a,this.isStatic=xb(r),dd.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,a,o,s){var u=s(ud(ai(this.rules,a,o,s)),""),h=this.componentId+r;o.insertRules(h,h,u)},e.prototype.removeStyles=function(r,a){a.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,a,o,s){r>2&&dd.registerId(this.componentId+r);var u=this.componentId+r;this.isStatic?o.hasNameForId(u,u)||this.createStyles(r,a,o,s):(this.removeStyles(r,o),this.createStyles(r,a,o,s))},e})();function p7(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=D.apply(void 0,Zn([e],r,!1)),s="sc-global-".concat(Hg(JSON.stringify(o))),u=new g7(o,s),h=new WeakMap,p=function(x){var y=ng(),v=Ve.useContext(Pg),k=h.get(y.styleSheet);return k===void 0&&(k=y.styleSheet.allocateGSInstance(s),h.set(y.styleSheet,k)),(typeof window>"u"||!y.styleSheet.server)&&m(k,x,y.styleSheet,v,y.stylis),Ve.useLayoutEffect(function(){return y.styleSheet.server||m(k,x,y.styleSheet,v,y.stylis),function(){var C;u.removeStyles(k,y.styleSheet),C=y.styleSheet.options.target,typeof document<"u"&&(C??document).querySelectorAll('style[data-styled-global="'.concat(s,'"]')).forEach(function(S){return S.remove()})}},[k,x,y.styleSheet,v,y.stylis]),null};function m(x,y,v,k,C){if(u.isStatic)u.renderStyles(x,D6,v,C);else{var S=Ge(Ge({},y),{theme:ib(y,k,p.defaultProps)});u.renderStyles(x,S,v,C)}}return Ve.memo(p)}function mr(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var o=ud(D.apply(void 0,Zn([e],r,!1))),s=Hg(o);return new pb(s,o)}var m7=Object.defineProperty,v7=(e,r)=>{for(var a in r)m7(e,a,{get:r[a],enumerable:!0})},bb={};v7(bb,{ActionPause:()=>y7,Add:()=>w7,Analyse:()=>C7,Back:()=>E7,BigWarning:()=>T7,Broken:()=>M7,Camera:()=>O7,ClearField:()=>z7,Close:()=>N7,CloseCompact:()=>_7,Copy:()=>H7,Critical:()=>I7,Crop:()=>G7,DarkMode:()=>F7,DataRetention:()=>V7,Date:()=>Q7,DateTime:()=>Z7,Delete:()=>J7,Detection:()=>tS,DevicesFolder:()=>rS,DevicesLiveEndpoint:()=>iS,DevicesScorerCamera:()=>lS,DevicesScorerEdge:()=>cS,Down:()=>dS,Download:()=>pS,DownloadVideo:()=>hS,Edit:()=>vS,Exclamation:()=>yS,ExternalLink:()=>wS,FeatureLineUi:()=>CS,FeaturePtz:()=>ES,Fever:()=>TS,FileTypeImage:()=>MS,FilterAscending:()=>OS,FilterDescending:()=>zS,FilterEllipsis:()=>_S,FilterSorting:()=>NS,Forward:()=>HS,Gateway:()=>IS,GroupCollapse:()=>GS,GroupExpand:()=>FS,Home:()=>VS,Information:()=>ZS,Invalid:()=>QS,Language:()=>JS,LayoutGrid:()=>t8,LayoutList:()=>r8,Left:()=>i8,LightMode:()=>l8,Link:()=>c8,Location:()=>d8,Locked:()=>h8,Menu:()=>p8,MetaCategories:()=>v8,MetaEnabledState:()=>y8,MetaTags:()=>w8,MissingImage:()=>C8,MonitoringProfile:()=>E8,NoIcon:()=>T8,Notifications:()=>O8,NotificationsOff:()=>M8,PasswordHide:()=>z8,PasswordShow:()=>_8,Pinned:()=>N8,Play:()=>H8,Question:()=>I8,RecognitionPhoto:()=>G8,RecognitionProfile:()=>F8,Required:()=>V8,RetryJob:()=>Z8,Right:()=>Q8,Search:()=>J8,Success:()=>t9,SwitchAccount:()=>r9,Temperature:()=>h9,TemperatureAmbient:()=>i9,TemperatureHigh:()=>l9,TemperatureLow:()=>c9,TemperatureNormal:()=>d9,Time:()=>p9,Unlocked:()=>v9,Up:()=>y9,Usage:()=>w9,UserProfile:()=>C9,ViewSettings:()=>E9,Warning:()=>T9,Zone:()=>M9});var x7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{x:5.25,y:3.75,width:4.5,height:16.5,rx:1.5}),f.createElement("rect",{x:14.25,y:3.75,width:4.5,height:16.5,rx:1.5}))),y7=x7,b7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 7.5v9M7.5 12h9"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),w7=b7,S7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 0 0 4 23.25h15.948a3 3 0 0 0 2.515-4.635L15.726 8.25ZM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3"}),f.createElement("path",{d:"M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 0 1-.375-.375"}),f.createElement("path",{d:"M7.1 19.5a.375.375 0 0 1-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 0 1-.375-.375"}),f.createElement("path",{d:"M10.1 16.5a.375.375 0 0 1-.375.375M15.726 3.75h-3M15.726 6.75h-3"}))),C7=S7,k7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M7.501 11.997h9m-5.25 3.75-3.75-3.75 3.75-3.75"}),f.createElement("circle",{cx:12.001,cy:11.997,r:10.5}))),E7=k7,j7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V6"}),f.createElement("path",{d:"M1.28 13.281a1.811 1.811 0 0 1 0-2.561l9.44-9.439a1.81 1.81 0 0 1 2.56 0l9.44 9.439a1.811 1.811 0 0 1 0 2.561l-9.44 9.439a1.812 1.812 0 0 1-2.56 0l-9.44-9.439z"}))),T7=j7,$7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m8.25 5.249-3-3m1.5 6h-1.5m6-4.5v-1.5m3 4.5h4.5a4.5 4.5 0 0 1 0 9h-4.5m-9.53-4.334-2.652 2.652a4.5 4.5 0 0 0 6.364 6.364l2.652-2.652",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),M7=$7,L7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 12v3.333a2.848 2.848 0 0 1-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 0 1-.75-.75V4.5A4.5 4.5 0 0 1 5.25 0h16.5a1.5 1.5 0 0 1 1.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0 1 15 9z"}),f.createElement("path",{d:"M20.25 5.084V10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a3 3 0 0 1-3-3h0m21-2.25v3"}))),O7=L7,A7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:11.998,cy:12,r:11.25}),f.createElement("path",{d:"m7.498 16.5 8.999-9M16.498 16.5l-9.001-9"}))),z7=A7,R7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m5 18.999 14-14M19 18.999l-14-14"}))),_7=R7,D7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m.75 23.249 22.5-22.5M23.25 23.249.75.749"}))),N7=D7,B7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M4.5 17.5A1.5 1.5 0 0 1 3 16V2.5A1.5 1.5 0 0 1 4.5 1H15a1.5 1.5 0 0 1 1.5 1.5"}),f.createElement("rect",{x:8,y:6,width:13.5,height:16.5,rx:1.5}))),H7=B7,U7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 18.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3v-7.5"}),f.createElement("path",{d:"M13.621 1.76a1.806 1.806 0 0 0-3.242 0L.906 21.058a1.52 1.52 0 0 0 1.366 2.192h19.456a1.52 1.52 0 0 0 1.366-2.192L13.621 1.76z"}))),I7=U7,P7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M21.75 19.125h1.5M5.25 1.875v17.25h13.5M2.25 5.625H.75M14.25 5.625h-9M18.75 22.875v-13.5M5.25 19.125l2.121-2.121M9.493 14.882l2.121-2.121M13.735 10.64l2.122-2.122M17.978 6.397l2.121-2.121M22.221 2.154l1.029-1.029"}))),G7=P7,q7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z"}),f.createElement("path",{d:"M12.046 6.797a5.194 5.194 0 0 0-2.25.525 5.222 5.222 0 0 1 0 9.45 5.243 5.243 0 1 0 2.25-9.975h0Z"}))),F7=q7,W7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 0 0-6.868-1.377 7.5 7.5 0 0 0-8.3-6.057 7.5 7.5 0 0 0 .938 14.941"}))),V7=W7,Y7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 17.25h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3"}),f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M19.902 17.25H17.25v-2.651"}))),Z7=Y7,X7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{x:.752,y:3.75,width:22.5,height:19.5,rx:1.5}),f.createElement("path",{d:"M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"}))),Q7=X7,K7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5ZM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z"}))),J7=K7,eS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,vectorEffect:"non-scaling-stroke"})),tS=eS,nS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M20.25 11.75v-3a1.5 1.5 0 0 0-1.5-1.5H8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v16.3a1.7 1.7 0 0 0 3.336.438l2.351-9.657a1.5 1.5 0 0 1 1.442-1.081H21.75a1.5 1.5 0 0 1 1.45 1.886l-2.2 9a1.5 1.5 0 0 1-1.45 1.114H2.447",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),rS=nS,aS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6.75 21.368h10.5m-7.312-6.75-1.688 6.75m5.813-6.75 1.687 6.75m7.5-12.75a6 6 0 0 1-6 6H6.75a6 6 0 1 1 0-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 0 1 1.757 4.243z"}),f.createElement("circle",{cx:12,cy:8.618,r:3}))),iS=aS,oS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 0 1-.375-.375m.75.001a.375.375 0 0 1-.375.375m6-7.552a9.54 9.54 0 0 0-12 0m2.5 3.615a5.568 5.568 0 0 1 7 0M17.25 3.75l-16.5 3v-3a3 3 0 0 1 3-3h13.786a.75.75 0 0 1 .671 1.085L17.25 3.75z"}),f.createElement("path",{d:"M15.75 4.023V7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 2.25 7.5V6.477m4.5 3.273v1.5a3 3 0 0 1-3 3h-3m0-1.5v3m18-10.5v3"}))),lS=oS,sS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M1.25.75h11a.5.5 0 0 1 .5.5v3a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3a.5.5 0 0 1 .5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 0 1-.375-.375m.75 0a.375.375 0 0 1-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5m3 0h3"}),f.createElement("rect",{width:7.5,height:12,x:15.75,y:11.25,rx:1.5}),f.createElement("path",{d:"M19.5 19.875h0m.375.375a.375.375 0 0 0-.375-.375m0 .75a.375.375 0 0 0 .375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 0 0-.375.375M17.379 7.629a3 3 0 0 1 4.242 0M16.5 4.451a6.768 6.768 0 0 1 6 0m-20.486.78a5.25 5.25 0 1 0 9.472 0"}))),cS=sS,uS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M23.25 6.311 12.53 17.03a.751.751 0 0 1-1.06 0L.75 6.311",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),dS=uS,fS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M17.25 14.25v6M17.25 20.25 15 18M17.25 20.25 19.5 18M8.25 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.25"}),f.createElement("path",{d:"M6.241 12.678a.685.685 0 0 1-.991-.613v-4.63a.685.685 0 0 1 .991-.613l4.631 2.316a.684.684 0 0 1 0 1.224l-4.631 2.316Z"}))),hS=fS,gS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M5.251 11.25 12 18l6.75-6.75H15V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5v6.75H5.251zm18 8.25v3a1.5 1.5 0 0 1-1.5 1.5h-19.5a1.5 1.5 0 0 1-1.5-1.5v-3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),pS=gS,mS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M22.19 1.81a3.637 3.637 0 0 0-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.636 3.636 0 0 0 .035-5.169zm-5.584.45 5.134 5.134m-19.219 8.95 5.139 5.13",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),vS=mS,xS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),yS=xS,bS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M23.497 7.75V1h-6.75m6.75 0-10.94 10.939M18.5 13.5v8A1.5 1.5 0 0 1 17 23H2.5A1.5 1.5 0 0 1 1 21.5V7a1.5 1.5 0 0 1 1.5-1.5h8.495",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),wS=bS,SS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M3.75 17.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2.53 5.53L6.53 17.47",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),CS=SS,kS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5 3 3 3-3M23.25 12H.75m19.5-3 3 3-3 3M3.75 9l-3 3 3 3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),ES=kS,jS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),TS=jS,$S=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M22.954 22a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 22V2.5A1.5 1.5 0 0 1 3.5 1h15a1.5 1.5 0 0 1 1.047.426l2.955 2.883c.29.282.452.67.452 1.074V22z"}),f.createElement("circle",{cx:8.75,cy:7.75,r:2.25}),f.createElement("path",{d:"m19.29 18.45-3.925-5.888a1.011 1.011 0 0 0-1.671-.019l-2.691 3.845-1.668-1.338a1.011 1.011 0 0 0-1.474.229L5.75 18.45"}))),MS=$S,LS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M8.25 23.248V.748m-4.5 18 4.5 4.5 4.5-4.5m3-4.5h3.6a.899.899 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V3a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),OS=LS,AS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M8.25 24.248v-22.5M3.75 5.5 8.25 1l4.5 4.5m3 9.748h3.6a.9.9 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V4a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),zS=AS,RS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:3.625,cy:11.625,r:2.625}),f.createElement("circle",{cx:20.875,cy:11.625,r:2.625}),f.createElement("circle",{cx:12.25,cy:11.625,r:2.625}))),_S=RS,DS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M7 12h10m-7 5h4M5 7h14",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),NS=DS,BS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75"}),f.createElement("circle",{cx:11.999,cy:11.997,r:10.5,transform:"matrix(-1 0 0 1 23.998 0)"}))),HS=BS,US=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 18v3.1a1.518 1.518 0 0 0 1.5 1.4h12a1.557 1.557 0 0 0 1.5-1.607V3.111a1.555 1.555 0 0 0-1.5-1.611h-12a1.619 1.619 0 0 0-1.5 1.808V6"}),f.createElement("path",{d:"M6.75 12.004h12v3m-3 0v-3"}),f.createElement("circle",{cx:3.75,cy:12.004,r:3}))),IS=US,PS=e=>f.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{clipPath:"url(#group-collapse_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M23.251.748H.751M23.251 23.248H.751M12.001 14.248v9M12.001.748v9M15.751 17.998l-3.75-3.75-3.75 3.75M15.751 5.998l-3.75 3.75-3.75-3.75"})),f.createElement("defs",null,f.createElement("clipPath",{id:"group-collapse_svg__a"},f.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),GS=PS,qS=e=>f.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{clipPath:"url(#group-expand_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12.001 3.748v16.5M15.751 7.498l-3.75-3.75-3.75 3.75M15.751 16.498l-3.75 3.75-3.75-3.75M23.251.748H.751M23.251 23.248H.751"})),f.createElement("defs",null,f.createElement("clipPath",{id:"group-expand_svg__a"},f.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),FS=qS,WS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M3.754 13.923v8.25h6v-6a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 0 1 2.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25"}))),VS=WS,YS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M14.25 16.5h-.75A1.5 1.5 0 0 1 12 15v-3.75a.75.75 0 0 0-.75-.75h-.75m1.125-3.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),ZS=YS,XS=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:11.998,cy:12,r:11.25}),f.createElement("path",{d:"m7.498 16.5 8.999-9m.001 9-9.001-9"}))),QS=XS,KS=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M9.735 23.023a11.251 11.251 0 1 1 13.418-12.511"}),f.createElement("path",{d:"M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 0 1 2.2 6.42"}),f.createElement("circle",{cx:18,cy:13.126,r:2.625}),f.createElement("path",{d:"M18 16.5a5.25 5.25 0 0 0-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0 0 18 16.5h0Z"}))),JS=KS,e8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:4.5,height:4.5,x:.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:.75,y:18.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:18.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:18.747,rx:1.5}))),t8=e8,n8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:22.5,height:4.5,x:.75,y:.747,rx:1.5}),f.createElement("rect",{width:22.5,height:4.5,x:.75,y:9.747,rx:1.5}),f.createElement("rect",{width:22.5,height:4.5,x:.75,y:18.747,rx:1.5}))),r8=n8,a8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M17.25 23.25 6.53 12.53a.751.751 0 0 1 0-1.06L17.25.75",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),i8=a8,o8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("circle",{cx:12,cy:12,r:4.25}))),l8=o8,s8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m9.364 18.5-.932.932a4.5 4.5 0 0 1-6.364-6.364l4.773-4.774a4.5 4.5 0 0 1 6.825 5.825"}),f.createElement("path",{d:"m14.818 5.567.75-.75a4.5 4.5 0 0 1 6.364 6.364l-4.773 4.773a4.5 4.5 0 0 1-6.824-5.826"}))),c8=s8,u8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:7.5,r:3}),f.createElement("path",{d:"M12 .75a6.75 6.75 0 0 1 6.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 0 1-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0 1 12 .75z"}),f.createElement("path",{d:"M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463"}))),d8=u8,f8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),f.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),f.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),h8=f8,g8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"}))),p8=g8,m8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:5.25,cy:5.255,r:4.5}),f.createElement("circle",{cx:5.25,cy:18.755,r:4.5}),f.createElement("circle",{cx:18.75,cy:5.255,r:4.5}),f.createElement("circle",{cx:18.75,cy:18.755,r:4.5}))),v8=m8,x8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M18.376 10.5H5.626A4.888 4.888 0 0 1 .751 5.625h0A4.889 4.889 0 0 1 5.626.75h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875ZM18.376 23.25H5.626a4.888 4.888 0 0 1-4.875-4.875h0A4.889 4.889 0 0 1 5.626 13.5h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875h0Z"}),f.createElement("circle",{cx:5.626,cy:5.625,r:1.875}),f.createElement("circle",{cx:18.376,cy:18.375,r:1.875}))),y8=x8,b8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M1.061 2.56v6.257a3 3 0 0 0 .878 2.121L13.5 22.5a1.5 1.5 0 0 0 2.121 0l6.879-6.88a1.5 1.5 0 0 0 0-2.121L10.939 1.938a3 3 0 0 0-2.121-.878H2.561a1.5 1.5 0 0 0-1.5 1.5Z"}),f.createElement("circle",{cx:6.311,cy:6.31,r:1.5}))),w8=b8,S8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.5 20.5a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m0-2.25v-3"}),f.createElement("path",{d:"M23.313 20.932a1.774 1.774 0 0 1-1.587 2.568h-8.452a1.774 1.774 0 0 1-1.587-2.568l4.226-8.451a1.774 1.774 0 0 1 3.174 0l4.226 8.451zM7.75 20.5H2.5A1.5 1.5 0 0 1 1 19V2.5A1.5 1.5 0 0 1 2.5 1h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.5"}),f.createElement("path",{d:"M5.5 5.875a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m7.606 5.195L11.5 8.5a.75.75 0 0 0-1.238-.014l-2 2.851-1.232-.987a.75.75 0 0 0-1.093.169L4 14.5h6"}))),C8=S8,k8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:16.5,r:1.5}),f.createElement("path",{d:"m18.524 10.7.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 0 1 1.275 2.218l-1.031 1.111a1 1 0 0 0 0 1.362l1.031 1.111a1.339 1.339 0 0 1-1.275 2.219l-1.472-.342a1 1 0 0 0-1.174.681l-.442 1.448a1.33 1.33 0 0 1-2.548 0l-.442-1.453a1 1 0 0 0-1.174-.681l-1.472.342a1.34 1.34 0 0 1-1.275-2.219l1.031-1.111a1 1 0 0 0 0-1.362l-1.031-1.111a1.34 1.34 0 0 1 1.275-2.218l1.472.341a.992.992 0 0 0 1.174-.681l.442-1.452a1.33 1.33 0 0 1 2.548.005zM8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),f.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),f.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75"}))),E8=k8,j8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e}),T8=j8,$8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m22.501 2.25-21 21M10 21.75a2.086 2.086 0 0 0 4.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7.386 7.386 0 0 0-.093-.915M16.212 4.3A7.498 7.498 0 0 0 4.5 10.5v5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),M8=$8,L8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10 21.75a2.087 2.087 0 0 0 4.005 0M12 3V.75M12 3a7.5 7.5 0 0 1 7.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0 1 12 3Z"}))),O8=L8,A8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m2.783 20 18.75-18M8.964 18.051A9.985 9.985 0 0 0 12 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0 0 19.75 7.88M14.413 5.282A9.549 9.549 0 0 0 12 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 0 0 0 2.226 20.8 20.8 0 0 0 2.6 2.4"}),f.createElement("path",{d:"M8.25 11.75A3.749 3.749 0 0 1 12 8M15.75 11.749h0A3.75 3.75 0 0 1 12 15.5"}))),z8=A8,R8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 0 0 0 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251Z"}),f.createElement("path",{d:"M15.75 12a3.75 3.75 0 1 1-7.5-.002 3.75 3.75 0 0 1 7.5.002h0Z"}))),_8=R8,D8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M4.949 8.783a1.5 1.5 0 0 0-.3 2.356l8.213 8.213a1.5 1.5 0 0 0 2.356-.3 7.522 7.522 0 0 0 .81-5.54l6.529-4.155a1.5 1.5 0 0 0 .256-2.326L16.97 1.188a1.5 1.5 0 0 0-2.326.255l-4.155 6.53a7.522 7.522 0 0 0-5.54.81ZM8.753 15.246.75 23.249"}))),N8=D8,B8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M2.338 3.255v17.49a1.499 1.499 0 0 0 2.209 1.322l16.323-8.745a1.5 1.5 0 0 0 0-2.644L4.547 1.933a1.5 1.5 0 0 0-2.209 1.322z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),H8=B8,U8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M9 9a2.999 2.999 0 0 1 5.923-.673A3 3 0 0 1 13 11.829a1.5 1.5 0 0 0-1 1.415v1.006m0 3a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),I8=U8,P8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:19.5,height:22.5,x:2.25,y:.75,rx:1.5}),f.createElement("circle",{cx:12,cy:9.083,r:4.11}),f.createElement("path",{d:"M18.75 19.027a7.63 7.63 0 0 0-13.5 0"}))),G8=P8,q8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M5.25 22.5a6.75 6.75 0 1 1 13.5 0H5.25zM8.458 8.043a6.859 6.859 0 0 0 7.612 1.532"}),f.createElement("circle",{cx:12,cy:10.125,r:4.125}),f.createElement("path",{d:"M.75 5.249V3a1.5 1.5 0 0 1 1.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25"}))),F8=q8,W8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 0 0-.549-2.049l-2.6-1.5a1.5 1.5 0 0 0-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 0 0-2.049-.549l-2.6 1.5A1.5 1.5 0 0 0 4.9 5.658l1.9 3.295H3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 0 0 2.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 0 0 2.049.549l2.6-1.5a1.5 1.5 0 0 0 .549-2.049l-1.9-3.294H21a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),V8=W8,Y8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15 18.75h-3.75v3.75"}),f.createElement("path",{d:"M22.667 19.483a5.572 5.572 0 0 1-10.74-.733M19.5 15.75h3.75V12"}),f.createElement("path",{d:"M11.833 15.017a5.572 5.572 0 0 1 10.74.733M8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),f.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),f.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871a1.5 1.5 0 0 1 .439 1.061V7.5"}))),Z8=Y8,X8=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m6.5.75 10.72 10.72a.751.751 0 0 1 0 1.06L6.5 23.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),Q8=X8,K8=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:9.823,cy:9.823,r:8.823}),f.createElement("path",{d:"m16.062 16.062 6.843 6.844"}))),J8=K8,e9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6 13.223 8.45 16.7a1.049 1.049 0 0 0 1.707.051L18 6.828"}),f.createElement("circle",{cx:12,cy:11.999,r:11.25}))),t9=e9,n9=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M.75 14.248h20.689a.751.751 0 0 1 .531 1.281L18 19.5M6 4.5 2.03 8.468a.75.75 0 0 0 .531 1.28H23.25"}))),r9=n9,a9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 15.418V3.75a3 3 0 1 0-6 0v11.668a4.493 4.493 0 1 0 7.5 3.332 4.47 4.47 0 0 0-1.5-3.332h0zm-3-10.168v12"}),f.createElement("circle",{cx:5.25,cy:18.75,r:1.5}),f.createElement("circle",{cx:15,cy:11.25,r:3.75}),f.createElement("path",{d:"M15.75 4.5V3m4.023 3.477 1.061-1.061m.916 5.834h1.5m-3.477 4.773 1.061 1.061M15.75 18v1.5"}))),i9=a9,o9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 12.75v4.5m6-4.5H20"}))),l9=o9,s9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 3.75v13.5m6-13.5H20m-1.5 4.5H20m-1.5 4.5H20"}))),c9=s9,u9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 8.25v9m6-9H20m-1.5 4.5H20"}))),d9=u9,f9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,transform:"translate(.75 .75)",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10.656 10.6V2.578a2.062 2.062 0 1 0-4.125 0V10.6a3.093 3.093 0 1 0 4.125 0z"}),f.createElement("circle",{cx:8.594,cy:12.891,r:1.031}),f.createElement("path",{d:"M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031"}))),h9=f9,g9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:12,r:10.5}),f.createElement("path",{d:"M12 12V8.25M12 12l4.687 4.688"}))),p9=g9,m9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M.75 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),f.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),f.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),v9=m9,x9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M.75 17.189 11.47 6.47a.751.751 0 0 1 1.06 0l10.72 10.719",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),y9=x9,b9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.75 23.229c-2.434 0-4.5-1.316-4.5-3.75v-3.75h9v3.75c0 .788-.607 3.75-4.5 3.75zm-7.5-10.5-1.5 3m4.5-3h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 1.5 1.5v4.5m-14.25 9h3m-4.5-6h7.5m-6 0v-2.25m3 2.25v-3.75m3 3.75v-6m3.027 6.455c-1.1 1.1 1.089 1.471.015 2.545m3.149-4.46c-1.912 1.911 1.9 2.561.026 4.432"}),f.createElement("path",{d:"M20.25 16.479H21a2.25 2.25 0 1 1 0 4.5h-1.133"}))),w9=b9,S9=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:6,r:5.25}),f.createElement("path",{d:"M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"}))),C9=S9,k9=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M7.281 9.376a1.308 1.308 0 0 0 1.939 0l.627-.7a1.306 1.306 0 0 1 2.273.942l-.047.934a1.3 1.3 0 0 0 1.371 1.371l.934-.047a1.305 1.305 0 0 1 .941 2.273l-.694.627a1.306 1.306 0 0 0 0 1.939l.694.627a1.305 1.305 0 0 1-.941 2.273l-.934-.047a1.305 1.305 0 0 0-1.371 1.371l.047.934a1.306 1.306 0 0 1-2.273.942l-.627-.7a1.308 1.308 0 0 0-1.939 0l-.627.7a1.306 1.306 0 0 1-2.273-.942l.047-.934a1.307 1.307 0 0 0-1.371-1.371l-.934.047a1.306 1.306 0 0 1-.942-2.273l.695-.627a1.308 1.308 0 0 0 0-1.939l-.695-.627a1.306 1.306 0 0 1 .942-2.273l.934.047a1.305 1.305 0 0 0 1.371-1.371l-.047-.934a1.306 1.306 0 0 1 2.273-.942l.627.7Z"}),f.createElement("circle",{cx:8.25,cy:15.751,r:1.875}),f.createElement("path",{d:"M18.638 5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("path",{d:"M21.194 1.848a.75.75 0 0 1 .971.971l-.5 1.286a.749.749 0 0 0 .229.856l1.075.864a.75.75 0 0 1-.355 1.326l-1.363.211a.749.749 0 0 0-.627.626l-.211 1.364a.75.75 0 0 1-1.326.355l-.864-1.075a.751.751 0 0 0-.856-.23l-1.286.5a.75.75 0 0 1-.971-.971l.5-1.286a.749.749 0 0 0-.229-.856l-1.075-.865a.749.749 0 0 1 .355-1.324l1.363-.211a.751.751 0 0 0 .627-.627l.211-1.362a.749.749 0 0 1 1.325-.355l.865 1.075a.75.75 0 0 0 .856.229l1.286-.501Z"}))),E9=k9,j9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),T9=j9,$9=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M2.724.827A1.5 1.5 0 0 0 .75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 0 1 1.07.017l4.911 1.93a1.501 1.501 0 0 0 2.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 0 0-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z"}),f.createElement("path",{d:"M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z"}),f.createElement("path",{d:"m3.75 9.879 3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5"}))),M9=$9,L9=jg();const tc=Ed(L9),wb=6048e5,O9=864e5,A9=6e4,z9=36e5,zx=Symbol.for("constructDateFrom");function bt(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&zx in e?e[zx](r):e instanceof Date?new e.constructor(r):new Date(r)}function Be(e,r){return bt(r||e,e)}function Sb(e,r,a){const o=Be(e,a?.in);return isNaN(r)?bt(e,NaN):(r&&o.setDate(o.getDate()+r),o)}function Os(e,r,a){const o=Be(e,a?.in);if(isNaN(r))return bt(e,NaN);if(!r)return o;const s=o.getDate(),u=bt(e,o.getTime());u.setMonth(o.getMonth()+r+1,0);const h=u.getDate();return s>=h?u:(o.setFullYear(u.getFullYear(),u.getMonth(),s),o)}function Wi(e,r,a){const{years:o=0,months:s=0,weeks:u=0,days:h=0,hours:p=0,minutes:m=0,seconds:x=0}=r,y=Be(e,a?.in),v=s||o?Os(y,s+o*12):y,k=h||u?Sb(v,h+u*7):v,C=m+p*60,E=(x+C*60)*1e3;return bt(e,+k+E)}let R9={};function nc(){return R9}function pa(e,r){const a=nc(),o=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=Be(e,r?.in),u=s.getDay(),h=(u<o?7:0)+u-o;return s.setDate(s.getDate()-h),s.setHours(0,0,0,0),s}function fd(e,r){return pa(e,{...r,weekStartsOn:1})}function Cb(e,r){const a=Be(e,r?.in),o=a.getFullYear(),s=bt(a,0);s.setFullYear(o+1,0,4),s.setHours(0,0,0,0);const u=fd(s),h=bt(a,0);h.setFullYear(o,0,4),h.setHours(0,0,0,0);const p=fd(h);return a.getTime()>=u.getTime()?o+1:a.getTime()>=p.getTime()?o:o-1}function Rx(e){const r=Be(e),a=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return a.setUTCFullYear(r.getFullYear()),+e-+a}function Rr(e,...r){const a=bt.bind(null,r.find(o=>typeof o=="object"));return r.map(a)}function li(e,r){const a=Be(e,r?.in);return a.setHours(0,0,0,0),a}function kb(e,r,a){const[o,s]=Rr(a?.in,e,r),u=li(o),h=li(s),p=+u-Rx(u),m=+h-Rx(h);return Math.round((p-m)/O9)}function _9(e,r){const a=Cb(e,r),o=bt(e,0);return o.setFullYear(a,0,4),o.setHours(0,0,0,0),fd(o)}function D9(e,r,a){return Sb(e,r*7,a)}function _x(e,r){let a,o=r?.in;return e.forEach(s=>{!o&&typeof s=="object"&&(o=bt.bind(null,s));const u=Be(s,o);(!a||a>u||isNaN(+u))&&(a=u)}),bt(o,a||NaN)}function Hs(e,r){const a=+Be(e)-+Be(r);return a<0?-1:a>0?1:a}function N9(e){return bt(e,Date.now())}function Zi(e,r,a){const[o,s]=Rr(a?.in,e,r);return+li(o)==+li(s)}function B9(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function H9(e){return!(!B9(e)&&typeof e!="number"||isNaN(+Be(e)))}function U9(e,r,a){const[o,s]=Rr(a?.in,e,r),u=o.getFullYear()-s.getFullYear(),h=o.getMonth()-s.getMonth();return u*12+h}function I9(e,r,a){const[o,s]=Rr(a?.in,e,r);return o.getFullYear()-s.getFullYear()}function P9(e,r,a){const[o,s]=Rr(a?.in,e,r),u=Dx(o,s),h=Math.abs(kb(o,s));o.setDate(o.getDate()-u*h);const p=+(Dx(o,s)===-u),m=u*(h-p);return m===0?0:m}function Dx(e,r){const a=e.getFullYear()-r.getFullYear()||e.getMonth()-r.getMonth()||e.getDate()-r.getDate()||e.getHours()-r.getHours()||e.getMinutes()-r.getMinutes()||e.getSeconds()-r.getSeconds()||e.getMilliseconds()-r.getMilliseconds();return a<0?-1:a>0?1:a}function Gg(e){return r=>{const o=(e?Math[e]:Math.trunc)(r);return o===0?0:o}}function G9(e,r,a){const[o,s]=Rr(a?.in,e,r),u=(+o-+s)/z9;return Gg(a?.roundingMethod)(u)}function Eb(e,r){return+Be(e)-+Be(r)}function q9(e,r,a){const o=Eb(e,r)/A9;return Gg(a?.roundingMethod)(o)}function ol(e,r){const a=Be(e,r?.in);return a.setHours(23,59,59,999),a}function jb(e,r){const a=Be(e,r?.in),o=a.getMonth();return a.setFullYear(a.getFullYear(),o+1,0),a.setHours(23,59,59,999),a}function F9(e,r){const a=Be(e,r?.in);return+ol(a,r)==+jb(a,r)}function W9(e,r,a){const[o,s,u]=Rr(a?.in,e,e,r),h=Hs(s,u),p=Math.abs(U9(s,u));if(p<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-h*p);let m=Hs(s,u)===-h;F9(o)&&p===1&&Hs(o,u)===1&&(m=!1);const x=h*(p-+m);return x===0?0:x}function V9(e,r,a){const o=Eb(e,r)/1e3;return Gg(a?.roundingMethod)(o)}function Y9(e,r,a){const[o,s]=Rr(a?.in,e,r),u=Hs(o,s),h=Math.abs(I9(o,s));o.setFullYear(1584),s.setFullYear(1584);const p=Hs(o,s)===-u,m=u*(h-+p);return m===0?0:m}function qg(e,r){const[a,o]=Rr(e,r.start,r.end);return{start:a,end:o}}function Z9(e,r){const{start:a,end:o}=qg(r?.in,e);let s=+a>+o;const u=s?+a:+o,h=s?o:a;h.setHours(0,0,0,0);let p=1;const m=[];for(;+h<=u;)m.push(bt(a,h)),h.setDate(h.getDate()+p),h.setHours(0,0,0,0);return s?m.reverse():m}function X9(e,r){const{start:a,end:o}=qg(r?.in,e);let s=+a>+o;const u=pa(s?o:a,r),h=pa(s?a:o,r);u.setHours(15),h.setHours(15);const p=+h.getTime();let m=u,x=1;const y=[];for(;+m<=p;)m.setHours(0),y.push(bt(a,m)),m=D9(m,x),m.setHours(15);return s?y.reverse():y}function Q9(e,r){const a=Be(e,r?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function K9(e,r){const a=Be(e,r?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function J9(e,r){const a=nc(),o=a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=Be(e,r?.in),u=s.getDay(),h=(u<o?-7:0)+6-(u-o);return s.setDate(s.getDate()+h),s.setHours(23,59,59,999),s}const eC={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},tC=(e,r,a)=>{let o;const s=eC[e];return typeof s=="string"?o=s:r===1?o=s.one:o=s.other.replace("{{count}}",r.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+o:o+" ago":o};function ll(e){return(r={})=>{const a=r.width?String(r.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}const nC={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},rC={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},aC={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},iC={date:ll({formats:nC,defaultWidth:"full"}),time:ll({formats:rC,defaultWidth:"full"}),dateTime:ll({formats:aC,defaultWidth:"full"})},oC={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lC=(e,r,a,o)=>oC[e];function Mr(e){return(r,a)=>{const o=a?.context?String(a.context):"standalone";let s;if(o==="formatting"&&e.formattingValues){const h=e.defaultFormattingWidth||e.defaultWidth,p=a?.width?String(a.width):h;s=e.formattingValues[p]||e.formattingValues[h]}else{const h=e.defaultWidth,p=a?.width?String(a.width):e.defaultWidth;s=e.values[p]||e.values[h]}const u=e.argumentCallback?e.argumentCallback(r):r;return s[u]}}const sC={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cC={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},uC={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dC={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},hC={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gC=(e,r)=>{const a=Number(e),o=a%100;if(o>20||o<10)switch(o%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},pC={ordinalNumber:gC,era:Mr({values:sC,defaultWidth:"wide"}),quarter:Mr({values:cC,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mr({values:uC,defaultWidth:"wide"}),day:Mr({values:dC,defaultWidth:"wide"}),dayPeriod:Mr({values:fC,defaultWidth:"wide",formattingValues:hC,defaultFormattingWidth:"wide"})};function Lr(e){return(r,a={})=>{const o=a.width,s=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=r.match(s);if(!u)return null;const h=u[0],p=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(p)?vC(p,v=>v.test(h)):mC(p,v=>v.test(h));let x;x=e.valueCallback?e.valueCallback(m):m,x=a.valueCallback?a.valueCallback(x):x;const y=r.slice(h.length);return{value:x,rest:y}}}function mC(e,r){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&r(e[a]))return a}function vC(e,r){for(let a=0;a<e.length;a++)if(r(e[a]))return a}function Tb(e){return(r,a={})=>{const o=r.match(e.matchPattern);if(!o)return null;const s=o[0],u=r.match(e.parsePattern);if(!u)return null;let h=e.valueCallback?e.valueCallback(u[0]):u[0];h=a.valueCallback?a.valueCallback(h):h;const p=r.slice(s.length);return{value:h,rest:p}}}const xC=/^(\d+)(th|st|nd|rd)?/i,yC=/\d+/i,bC={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wC={any:[/^b/i,/^(a|c)/i]},SC={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},CC={any:[/1/i,/2/i,/3/i,/4/i]},kC={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},EC={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jC={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},TC={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$C={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},MC={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},LC={ordinalNumber:Tb({matchPattern:xC,parsePattern:yC,valueCallback:e=>parseInt(e,10)}),era:Lr({matchPatterns:bC,defaultMatchWidth:"wide",parsePatterns:wC,defaultParseWidth:"any"}),quarter:Lr({matchPatterns:SC,defaultMatchWidth:"wide",parsePatterns:CC,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Lr({matchPatterns:kC,defaultMatchWidth:"wide",parsePatterns:EC,defaultParseWidth:"any"}),day:Lr({matchPatterns:jC,defaultMatchWidth:"wide",parsePatterns:TC,defaultParseWidth:"any"}),dayPeriod:Lr({matchPatterns:$C,defaultMatchWidth:"any",parsePatterns:MC,defaultParseWidth:"any"})},Ju={code:"en-US",formatDistance:tC,formatLong:iC,formatRelative:lC,localize:pC,match:LC,options:{weekStartsOn:0,firstWeekContainsDate:1}};function OC(e,r){const a=Be(e,r?.in);return kb(a,K9(a))+1}function AC(e,r){const a=Be(e,r?.in),o=+fd(a)-+_9(a);return Math.round(o/wb)+1}function $b(e,r){const a=Be(e,r?.in),o=a.getFullYear(),s=nc(),u=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,h=bt(r?.in||e,0);h.setFullYear(o+1,0,u),h.setHours(0,0,0,0);const p=pa(h,r),m=bt(r?.in||e,0);m.setFullYear(o,0,u),m.setHours(0,0,0,0);const x=pa(m,r);return+a>=+p?o+1:+a>=+x?o:o-1}function zC(e,r){const a=nc(),o=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=$b(e,r),u=bt(r?.in||e,0);return u.setFullYear(s,0,o),u.setHours(0,0,0,0),pa(u,r)}function RC(e,r){const a=Be(e,r?.in),o=+pa(a,r)-+zC(a,r);return Math.round(o/wb)+1}function Xe(e,r){const a=e<0?"-":"",o=Math.abs(e).toString().padStart(r,"0");return a+o}const Qa={y(e,r){const a=e.getFullYear(),o=a>0?a:1-a;return Xe(r==="yy"?o%100:o,r.length)},M(e,r){const a=e.getMonth();return r==="M"?String(a+1):Xe(a+1,2)},d(e,r){return Xe(e.getDate(),r.length)},a(e,r){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];default:return a==="am"?"a.m.":"p.m."}},h(e,r){return Xe(e.getHours()%12||12,r.length)},H(e,r){return Xe(e.getHours(),r.length)},m(e,r){return Xe(e.getMinutes(),r.length)},s(e,r){return Xe(e.getSeconds(),r.length)},S(e,r){const a=r.length,o=e.getMilliseconds(),s=Math.trunc(o*Math.pow(10,a-3));return Xe(s,r.length)}},Qo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Nx={G:function(e,r,a){const o=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return a.era(o,{width:"abbreviated"});case"GGGGG":return a.era(o,{width:"narrow"});default:return a.era(o,{width:"wide"})}},y:function(e,r,a){if(r==="yo"){const o=e.getFullYear(),s=o>0?o:1-o;return a.ordinalNumber(s,{unit:"year"})}return Qa.y(e,r)},Y:function(e,r,a,o){const s=$b(e,o),u=s>0?s:1-s;if(r==="YY"){const h=u%100;return Xe(h,2)}return r==="Yo"?a.ordinalNumber(u,{unit:"year"}):Xe(u,r.length)},R:function(e,r){const a=Cb(e);return Xe(a,r.length)},u:function(e,r){const a=e.getFullYear();return Xe(a,r.length)},Q:function(e,r,a){const o=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(o);case"QQ":return Xe(o,2);case"Qo":return a.ordinalNumber(o,{unit:"quarter"});case"QQQ":return a.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(o,{width:"narrow",context:"formatting"});default:return a.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,r,a){const o=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(o);case"qq":return Xe(o,2);case"qo":return a.ordinalNumber(o,{unit:"quarter"});case"qqq":return a.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(o,{width:"narrow",context:"standalone"});default:return a.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,r,a){const o=e.getMonth();switch(r){case"M":case"MM":return Qa.M(e,r);case"Mo":return a.ordinalNumber(o+1,{unit:"month"});case"MMM":return a.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(o,{width:"narrow",context:"formatting"});default:return a.month(o,{width:"wide",context:"formatting"})}},L:function(e,r,a){const o=e.getMonth();switch(r){case"L":return String(o+1);case"LL":return Xe(o+1,2);case"Lo":return a.ordinalNumber(o+1,{unit:"month"});case"LLL":return a.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(o,{width:"narrow",context:"standalone"});default:return a.month(o,{width:"wide",context:"standalone"})}},w:function(e,r,a,o){const s=RC(e,o);return r==="wo"?a.ordinalNumber(s,{unit:"week"}):Xe(s,r.length)},I:function(e,r,a){const o=AC(e);return r==="Io"?a.ordinalNumber(o,{unit:"week"}):Xe(o,r.length)},d:function(e,r,a){return r==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):Qa.d(e,r)},D:function(e,r,a){const o=OC(e);return r==="Do"?a.ordinalNumber(o,{unit:"dayOfYear"}):Xe(o,r.length)},E:function(e,r,a){const o=e.getDay();switch(r){case"E":case"EE":case"EEE":return a.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},e:function(e,r,a,o){const s=e.getDay(),u=(s-o.weekStartsOn+8)%7||7;switch(r){case"e":return String(u);case"ee":return Xe(u,2);case"eo":return a.ordinalNumber(u,{unit:"day"});case"eee":return a.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(s,{width:"short",context:"formatting"});default:return a.day(s,{width:"wide",context:"formatting"})}},c:function(e,r,a,o){const s=e.getDay(),u=(s-o.weekStartsOn+8)%7||7;switch(r){case"c":return String(u);case"cc":return Xe(u,r.length);case"co":return a.ordinalNumber(u,{unit:"day"});case"ccc":return a.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(s,{width:"narrow",context:"standalone"});case"cccccc":return a.day(s,{width:"short",context:"standalone"});default:return a.day(s,{width:"wide",context:"standalone"})}},i:function(e,r,a){const o=e.getDay(),s=o===0?7:o;switch(r){case"i":return String(s);case"ii":return Xe(s,r.length);case"io":return a.ordinalNumber(s,{unit:"day"});case"iii":return a.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},a:function(e,r,a){const s=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,r,a){const o=e.getHours();let s;switch(o===12?s=Qo.noon:o===0?s=Qo.midnight:s=o/12>=1?"pm":"am",r){case"b":case"bb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,r,a){const o=e.getHours();let s;switch(o>=17?s=Qo.evening:o>=12?s=Qo.afternoon:o>=4?s=Qo.morning:s=Qo.night,r){case"B":case"BB":case"BBB":return a.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(s,{width:"narrow",context:"formatting"});default:return a.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,r,a){if(r==="ho"){let o=e.getHours()%12;return o===0&&(o=12),a.ordinalNumber(o,{unit:"hour"})}return Qa.h(e,r)},H:function(e,r,a){return r==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):Qa.H(e,r)},K:function(e,r,a){const o=e.getHours()%12;return r==="Ko"?a.ordinalNumber(o,{unit:"hour"}):Xe(o,r.length)},k:function(e,r,a){let o=e.getHours();return o===0&&(o=24),r==="ko"?a.ordinalNumber(o,{unit:"hour"}):Xe(o,r.length)},m:function(e,r,a){return r==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):Qa.m(e,r)},s:function(e,r,a){return r==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):Qa.s(e,r)},S:function(e,r){return Qa.S(e,r)},X:function(e,r,a){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(r){case"X":return Hx(o);case"XXXX":case"XX":return Ui(o);default:return Ui(o,":")}},x:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"x":return Hx(o);case"xxxx":case"xx":return Ui(o);default:return Ui(o,":")}},O:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Bx(o,":");default:return"GMT"+Ui(o,":")}},z:function(e,r,a){const o=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Bx(o,":");default:return"GMT"+Ui(o,":")}},t:function(e,r,a){const o=Math.trunc(+e/1e3);return Xe(o,r.length)},T:function(e,r,a){return Xe(+e,r.length)}};function Bx(e,r=""){const a=e>0?"-":"+",o=Math.abs(e),s=Math.trunc(o/60),u=o%60;return u===0?a+String(s):a+String(s)+r+Xe(u,2)}function Hx(e,r){return e%60===0?(e>0?"-":"+")+Xe(Math.abs(e)/60,2):Ui(e,r)}function Ui(e,r=""){const a=e>0?"-":"+",o=Math.abs(e),s=Xe(Math.trunc(o/60),2),u=Xe(o%60,2);return a+s+r+u}const Ux=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});default:return r.date({width:"full"})}},Mb=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});default:return r.time({width:"full"})}},_C=(e,r)=>{const a=e.match(/(P+)(p+)?/)||[],o=a[1],s=a[2];if(!s)return Ux(e,r);let u;switch(o){case"P":u=r.dateTime({width:"short"});break;case"PP":u=r.dateTime({width:"medium"});break;case"PPP":u=r.dateTime({width:"long"});break;default:u=r.dateTime({width:"full"});break}return u.replace("{{date}}",Ux(o,r)).replace("{{time}}",Mb(s,r))},DC={p:Mb,P:_C},NC=/^D+$/,BC=/^Y+$/,HC=["D","DD","YY","YYYY"];function UC(e){return NC.test(e)}function IC(e){return BC.test(e)}function PC(e,r,a){const o=GC(e,r,a);if(console.warn(o),HC.includes(e))throw new RangeError(o)}function GC(e,r,a){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${o} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qC=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,FC=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,WC=/^'([^]*?)'?$/,VC=/''/g,YC=/[a-zA-Z]/;function Vt(e,r,a){const o=nc(),s=a?.locale??o.locale??Ju,u=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,h=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,p=Be(e,a?.in);if(!H9(p))throw new RangeError("Invalid time value");let m=r.match(FC).map(y=>{const v=y[0];if(v==="p"||v==="P"){const k=DC[v];return k(y,s.formatLong)}return y}).join("").match(qC).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const v=y[0];if(v==="'")return{isToken:!1,value:ZC(y)};if(Nx[v])return{isToken:!0,value:y};if(v.match(YC))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:y}});s.localize.preprocessor&&(m=s.localize.preprocessor(p,m));const x={firstWeekContainsDate:u,weekStartsOn:h,locale:s};return m.map(y=>{if(!y.isToken)return y.value;const v=y.value;(!a?.useAdditionalWeekYearTokens&&IC(v)||!a?.useAdditionalDayOfYearTokens&&UC(v))&&PC(v,r,String(e));const k=Nx[v[0]];return k(p,v,s.localize,x)}).join("")}function ZC(e){const r=e.match(WC);return r?r[1].replace(VC,"'"):e}function XC(e,r){const a=Be(e,r?.in),o=a.getFullYear(),s=a.getMonth(),u=bt(a,0);return u.setFullYear(o,s+1,0),u.setHours(0,0,0,0),u.getDate()}function QC(e,r){const{start:a,end:o}=qg(r?.in,e),s={},u=Y9(o,a);u&&(s.years=u);const h=Wi(a,{years:s.years}),p=W9(o,h);p&&(s.months=p);const m=Wi(h,{months:s.months}),x=P9(o,m);x&&(s.days=x);const y=Wi(m,{days:s.days}),v=G9(o,y);v&&(s.hours=v);const k=Wi(y,{hours:s.hours}),C=q9(o,k);C&&(s.minutes=C);const S=Wi(k,{minutes:s.minutes}),E=V9(o,S);return E&&(s.seconds=E),s}function Ix(e,r){return+Be(e)>+Be(r)}function Us(e,r){return+Be(e)==+Be(r)}function KC(e,r,a){const[o,s]=Rr(a?.in,e,r);return o.getFullYear()===s.getFullYear()&&o.getMonth()===s.getMonth()}function JC(e,r){return Zi(bt(e,e),N9(e))}function ek(e,r,a){const o=+Be(e,a?.in),[s,u]=[+Be(r.start,a?.in),+Be(r.end,a?.in)].sort((h,p)=>h-p);return o>=s&&o<=u}function tk(e,r,a){const o=Be(e,a?.in),s=o.getFullYear(),u=o.getDate(),h=bt(e,0);h.setFullYear(s,r,15),h.setHours(0,0,0,0);const p=XC(h);return o.setMonth(r,Math.min(u,p)),o}function hd(e,r,a){let o=Be(e,a?.in);return isNaN(+o)?bt(e,NaN):(r.year!=null&&o.setFullYear(r.year),r.month!=null&&(o=tk(o,r.month)),r.date!=null&&o.setDate(r.date),r.hours!=null&&o.setHours(r.hours),r.minutes!=null&&o.setMinutes(r.minutes),r.seconds!=null&&o.setSeconds(r.seconds),r.milliseconds!=null&&o.setMilliseconds(r.milliseconds),o)}const nk={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},rk=(e,r,a)=>{a=a||{};let o;const s=nk[e];return typeof s=="string"?o=s:r===1?a.addSuffix&&s.oneWithSuffix?o=s.oneWithSuffix:o=s.one:a.addSuffix&&s.otherWithSuffix?o=s.otherWithSuffix.replace("{{count}}",String(r)):o=s.other.replace("{{count}}",String(r)),a.addSuffix?a.comparison&&a.comparison>0?o+"後":o+"前":o},ak={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},ik={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},ok={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},lk={date:ll({formats:ak,defaultWidth:"full"}),time:ll({formats:ik,defaultWidth:"full"}),dateTime:ll({formats:ok,defaultWidth:"full"})},sk={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},ck=(e,r,a,o)=>sk[e],uk={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},dk={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},fk={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},hk={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},gk={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},pk={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},mk=(e,r)=>{const a=Number(e);switch(String(r?.unit)){case"year":return`${a}年`;case"quarter":return`第${a}四半期`;case"month":return`${a}月`;case"week":return`第${a}週`;case"date":return`${a}日`;case"hour":return`${a}時`;case"minute":return`${a}分`;case"second":return`${a}秒`;default:return`${a}`}},vk={ordinalNumber:mk,era:Mr({values:uk,defaultWidth:"wide"}),quarter:Mr({values:dk,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:Mr({values:fk,defaultWidth:"wide"}),day:Mr({values:hk,defaultWidth:"wide"}),dayPeriod:Mr({values:gk,defaultWidth:"wide",formattingValues:pk,defaultFormattingWidth:"wide"})},xk=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,yk=/\d+/i,bk={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},wk={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},Sk={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},Ck={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},kk={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},Ek={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},jk={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},Tk={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},$k={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},Mk={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},Lk={ordinalNumber:Tb({matchPattern:xk,parsePattern:yk,valueCallback:function(e){return parseInt(e,10)}}),era:Lr({matchPatterns:bk,defaultMatchWidth:"wide",parsePatterns:wk,defaultParseWidth:"any"}),quarter:Lr({matchPatterns:Sk,defaultMatchWidth:"wide",parsePatterns:Ck,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Lr({matchPatterns:kk,defaultMatchWidth:"wide",parsePatterns:Ek,defaultParseWidth:"any"}),day:Lr({matchPatterns:jk,defaultMatchWidth:"wide",parsePatterns:Tk,defaultParseWidth:"any"}),dayPeriod:Lr({matchPatterns:$k,defaultMatchWidth:"any",parsePatterns:Mk,defaultParseWidth:"any"})},m0={code:"ja",formatDistance:rk,formatLong:lk,formatRelative:ck,localize:vk,match:Lk,options:{weekStartsOn:0,firstWeekContainsDate:1}};var As={exports:{}};As.exports;var Px;function Ok(){return Px||(Px=1,(function(e,r){var a=200,o="__lodash_hash_undefined__",s=1,u=2,h=9007199254740991,p="[object Arguments]",m="[object Array]",x="[object AsyncFunction]",y="[object Boolean]",v="[object Date]",k="[object Error]",C="[object Function]",S="[object GeneratorFunction]",E="[object Map]",T="[object Number]",M="[object Null]",O="[object Object]",N="[object Promise]",z="[object Proxy]",_="[object RegExp]",B="[object Set]",j="[object String]",L="[object Symbol]",G="[object Undefined]",Y="[object WeakMap]",I="[object ArrayBuffer]",Z="[object DataView]",re="[object Float32Array]",X="[object Float64Array]",te="[object Int8Array]",H="[object Int16Array]",q="[object Int32Array]",ae="[object Uint8Array]",ie="[object Uint8ClampedArray]",de="[object Uint16Array]",A="[object Uint32Array]",F=/[\\^$.*+?()[\]{}|]/g,Q=/^\[object .+?Constructor\]$/,le=/^(?:0|[1-9]\d*)$/,he={};he[re]=he[X]=he[te]=he[H]=he[q]=he[ae]=he[ie]=he[de]=he[A]=!0,he[p]=he[m]=he[I]=he[y]=he[Z]=he[v]=he[k]=he[C]=he[E]=he[T]=he[O]=he[_]=he[B]=he[j]=he[Y]=!1;var me=typeof ei=="object"&&ei&&ei.Object===Object&&ei,fe=typeof self=="object"&&self&&self.Object===Object&&self,xe=me||fe||Function("return this")(),ve=r&&!r.nodeType&&r,Te=ve&&!0&&e&&!e.nodeType&&e,pt=Te&&Te.exports===ve,dt=pt&&me.process,mt=(function(){try{return dt&&dt.binding&&dt.binding("util")}catch{}})(),_n=mt&&mt.isTypedArray;function ci(R,W){for(var ue=-1,ge=R==null?0:R.length,He=0,ke=[];++ue<ge;){var Qe=R[ue];W(Qe,ue,R)&&(ke[He++]=Qe)}return ke}function an(R,W){for(var ue=-1,ge=W.length,He=R.length;++ue<ge;)R[He+ue]=W[ue];return R}function Br(R,W){for(var ue=-1,ge=R==null?0:R.length;++ue<ge;)if(W(R[ue],ue,R))return!0;return!1}function xr(R,W){for(var ue=-1,ge=Array(R);++ue<R;)ge[ue]=W(ue);return ge}function Dn(R){return function(W){return R(W)}}function Nn(R,W){return R.has(W)}function Yt(R,W){return R?.[W]}function Wd(R){var W=-1,ue=Array(R.size);return R.forEach(function(ge,He){ue[++W]=[He,ge]}),ue}function Vd(R,W){return function(ue){return R(W(ue))}}function on(R){var W=-1,ue=Array(R.size);return R.forEach(function(ge){ue[++W]=ge}),ue}var Yd=Array.prototype,dc=Function.prototype,ui=Object.prototype,wa=xe["__core-js_shared__"],fc=dc.toString,bn=ui.hasOwnProperty,hc=(function(){var R=/[^.]+$/.exec(wa&&wa.keys&&wa.keys.IE_PROTO||"");return R?"Symbol(src)_1."+R:""})(),gc=ui.toString,di=RegExp("^"+fc.call(bn).replace(F,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zt=pt?xe.Buffer:void 0,wn=xe.Symbol,Xt=xe.Uint8Array,pc=ui.propertyIsEnumerable,Zd=Yd.splice,Hr=wn?wn.toStringTag:void 0,fi=Object.getOwnPropertySymbols,io=Zt?Zt.isBuffer:void 0,oo=Vd(Object.keys,Object),Jn=Cn(xe,"DataView"),yr=Cn(xe,"Map"),Ur=Cn(xe,"Promise"),bl=Cn(xe,"Set"),lo=Cn(xe,"WeakMap"),Ir=Cn(Object,"create"),hi=rr(Jn),Xd=rr(yr),mc=rr(Ur),vc=rr(bl),xc=rr(lo),so=wn?wn.prototype:void 0,gi=so?so.valueOf:void 0;function br(R){var W=-1,ue=R==null?0:R.length;for(this.clear();++W<ue;){var ge=R[W];this.set(ge[0],ge[1])}}function yc(){this.__data__=Ir?Ir(null):{},this.size=0}function wr(R){var W=this.has(R)&&delete this.__data__[R];return this.size-=W?1:0,W}function Mt(R){var W=this.__data__;if(Ir){var ue=W[R];return ue===o?void 0:ue}return bn.call(W,R)?W[R]:void 0}function Qt(R){var W=this.__data__;return Ir?W[R]!==void 0:bn.call(W,R)}function Sa(R,W){var ue=this.__data__;return this.size+=this.has(R)?0:1,ue[R]=Ir&&W===void 0?o:W,this}br.prototype.clear=yc,br.prototype.delete=wr,br.prototype.get=Mt,br.prototype.has=Qt,br.prototype.set=Sa;function Sn(R){var W=-1,ue=R==null?0:R.length;for(this.clear();++W<ue;){var ge=R[W];this.set(ge[0],ge[1])}}function Qd(){this.__data__=[],this.size=0}function Kd(R){var W=this.__data__,ue=Bt(W,R);if(ue<0)return!1;var ge=W.length-1;return ue==ge?W.pop():Zd.call(W,ue,1),--this.size,!0}function bc(R){var W=this.__data__,ue=Bt(W,R);return ue<0?void 0:W[ue][1]}function pi(R){return Bt(this.__data__,R)>-1}function wl(R,W){var ue=this.__data__,ge=Bt(ue,R);return ge<0?(++this.size,ue.push([R,W])):ue[ge][1]=W,this}Sn.prototype.clear=Qd,Sn.prototype.delete=Kd,Sn.prototype.get=bc,Sn.prototype.has=pi,Sn.prototype.set=wl;function cn(R){var W=-1,ue=R==null?0:R.length;for(this.clear();++W<ue;){var ge=R[W];this.set(ge[0],ge[1])}}function Ca(){this.size=0,this.__data__={hash:new br,map:new(yr||Sn),string:new br}}function mi(R){var W=yi(this,R).delete(R);return this.size-=W?1:0,W}function ka(R){return yi(this,R).get(R)}function wt(R){return yi(this,R).has(R)}function wc(R,W){var ue=yi(this,R),ge=ue.size;return ue.set(R,W),this.size+=ue.size==ge?0:1,this}cn.prototype.clear=Ca,cn.prototype.delete=mi,cn.prototype.get=ka,cn.prototype.has=wt,cn.prototype.set=wc;function vi(R){var W=-1,ue=R==null?0:R.length;for(this.__data__=new cn;++W<ue;)this.add(R[W])}function Pr(R){return this.__data__.set(R,o),this}function Ea(R){return this.__data__.has(R)}vi.prototype.add=vi.prototype.push=Pr,vi.prototype.has=Ea;function Sr(R){var W=this.__data__=new Sn(R);this.size=W.size}function Sc(){this.__data__=new Sn,this.size=0}function Cc(R){var W=this.__data__,ue=W.delete(R);return this.size=W.size,ue}function Jd(R){return this.__data__.get(R)}function co(R){return this.__data__.has(R)}function uo(R,W){var ue=this.__data__;if(ue instanceof Sn){var ge=ue.__data__;if(!yr||ge.length<a-1)return ge.push([R,W]),this.size=++ue.size,this;ue=this.__data__=new cn(ge)}return ue.set(R,W),this.size=ue.size,this}Sr.prototype.clear=Sc,Sr.prototype.delete=Cc,Sr.prototype.get=Jd,Sr.prototype.has=co,Sr.prototype.set=uo;function er(R,W){var ue=ar(R),ge=!ue&&Ta(R),He=!ue&&!ge&&bi(R),ke=!ue&&!ge&&!He&&or(R),Qe=ue||ge||He||ke,St=Qe?xr(R.length,String):[],vt=St.length;for(var tt in R)bn.call(R,tt)&&!(Qe&&(tt=="length"||He&&(tt=="offset"||tt=="parent")||ke&&(tt=="buffer"||tt=="byteLength"||tt=="byteOffset")||Tl(tt,vt)))&&St.push(tt);return St}function Bt(R,W){for(var ue=R.length;ue--;)if(po(R[ue][0],W))return ue;return-1}function kc(R,W,ue){var ge=W(R);return ar(R)?ge:an(ge,ue(R))}function xi(R){return R==null?R===void 0?G:M:Hr&&Hr in Object(R)?tf(R):nr(R)}function fo(R){return ir(R)&&xi(R)==p}function Sl(R,W,ue,ge,He){return R===W?!0:R==null||W==null||!ir(R)&&!ir(W)?R!==R&&W!==W:ho(R,W,ue,ge,Sl,He)}function ho(R,W,ue,ge,He,ke){var Qe=ar(R),St=ar(W),vt=Qe?m:tr(R),tt=St?m:tr(W);vt=vt==p?O:vt,tt=tt==p?O:tt;var Lt=vt==O,Kt=tt==O,Ot=vt==tt;if(Ot&&bi(R)){if(!bi(W))return!1;Qe=!0,Lt=!1}if(Ot&&!Lt)return ke||(ke=new Sr),Qe||or(R)?kl(R,W,ue,ge,He,ke):El(R,W,vt,ue,ge,He,ke);if(!(ue&s)){var dn=Lt&&bn.call(R,"__wrapped__"),fn=Kt&&bn.call(W,"__wrapped__");if(dn||fn){var Cr=dn?R.value():R,kn=fn?W.value():W;return ke||(ke=new Sr),He(Cr,kn,ue,ge,ke)}}return Ot?(ke||(ke=new Sr),ja(R,W,ue,ge,He,ke)):!1}function ef(R){if(!mo(R)||rf(R))return!1;var W=$a(R)?di:Q;return W.test(rr(R))}function un(R){return ir(R)&&Bn(R.length)&&!!he[xi(R)]}function Cl(R){if(!go(R))return oo(R);var W=[];for(var ue in Object(R))bn.call(R,ue)&&ue!="constructor"&&W.push(ue);return W}function kl(R,W,ue,ge,He,ke){var Qe=ue&s,St=R.length,vt=W.length;if(St!=vt&&!(Qe&&vt>St))return!1;var tt=ke.get(R);if(tt&&ke.get(W))return tt==W;var Lt=-1,Kt=!0,Ot=ue&u?new vi:void 0;for(ke.set(R,W),ke.set(W,R);++Lt<St;){var dn=R[Lt],fn=W[Lt];if(ge)var Cr=Qe?ge(fn,dn,Lt,W,R,ke):ge(dn,fn,Lt,R,W,ke);if(Cr!==void 0){if(Cr)continue;Kt=!1;break}if(Ot){if(!Br(W,function(kn,Gr){if(!Nn(Ot,Gr)&&(dn===kn||He(dn,kn,ue,ge,ke)))return Ot.push(Gr)})){Kt=!1;break}}else if(!(dn===fn||He(dn,fn,ue,ge,ke))){Kt=!1;break}}return ke.delete(R),ke.delete(W),Kt}function El(R,W,ue,ge,He,ke,Qe){switch(ue){case Z:if(R.byteLength!=W.byteLength||R.byteOffset!=W.byteOffset)return!1;R=R.buffer,W=W.buffer;case I:return!(R.byteLength!=W.byteLength||!ke(new Xt(R),new Xt(W)));case y:case v:case T:return po(+R,+W);case k:return R.name==W.name&&R.message==W.message;case _:case j:return R==W+"";case E:var St=Wd;case B:var vt=ge&s;if(St||(St=on),R.size!=W.size&&!vt)return!1;var tt=Qe.get(R);if(tt)return tt==W;ge|=u,Qe.set(R,W);var Lt=kl(St(R),St(W),ge,He,ke,Qe);return Qe.delete(R),Lt;case L:if(gi)return gi.call(R)==gi.call(W)}return!1}function ja(R,W,ue,ge,He,ke){var Qe=ue&s,St=jl(R),vt=St.length,tt=jl(W),Lt=tt.length;if(vt!=Lt&&!Qe)return!1;for(var Kt=vt;Kt--;){var Ot=St[Kt];if(!(Qe?Ot in W:bn.call(W,Ot)))return!1}var dn=ke.get(R);if(dn&&ke.get(W))return dn==W;var fn=!0;ke.set(R,W),ke.set(W,R);for(var Cr=Qe;++Kt<vt;){Ot=St[Kt];var kn=R[Ot],Gr=W[Ot];if(ge)var Mc=Qe?ge(Gr,kn,Ot,W,R,ke):ge(kn,Gr,Ot,R,W,ke);if(!(Mc===void 0?kn===Gr||He(kn,Gr,ue,ge,ke):Mc)){fn=!1;break}Cr||(Cr=Ot=="constructor")}if(fn&&!Cr){var xo=R.constructor,yo=W.constructor;xo!=yo&&"constructor"in R&&"constructor"in W&&!(typeof xo=="function"&&xo instanceof xo&&typeof yo=="function"&&yo instanceof yo)&&(fn=!1)}return ke.delete(R),ke.delete(W),fn}function jl(R){return kc(R,$l,Ec)}function yi(R,W){var ue=R.__data__;return nf(W)?ue[typeof W=="string"?"string":"hash"]:ue.map}function Cn(R,W){var ue=Yt(R,W);return ef(ue)?ue:void 0}function tf(R){var W=bn.call(R,Hr),ue=R[Hr];try{R[Hr]=void 0;var ge=!0}catch{}var He=gc.call(R);return ge&&(W?R[Hr]=ue:delete R[Hr]),He}var Ec=fi?function(R){return R==null?[]:(R=Object(R),ci(fi(R),function(W){return pc.call(R,W)}))}:vo,tr=xi;(Jn&&tr(new Jn(new ArrayBuffer(1)))!=Z||yr&&tr(new yr)!=E||Ur&&tr(Ur.resolve())!=N||bl&&tr(new bl)!=B||lo&&tr(new lo)!=Y)&&(tr=function(R){var W=xi(R),ue=W==O?R.constructor:void 0,ge=ue?rr(ue):"";if(ge)switch(ge){case hi:return Z;case Xd:return E;case mc:return N;case vc:return B;case xc:return Y}return W});function Tl(R,W){return W=W??h,!!W&&(typeof R=="number"||le.test(R))&&R>-1&&R%1==0&&R<W}function nf(R){var W=typeof R;return W=="string"||W=="number"||W=="symbol"||W=="boolean"?R!=="__proto__":R===null}function rf(R){return!!hc&&hc in R}function go(R){var W=R&&R.constructor,ue=typeof W=="function"&&W.prototype||ui;return R===ue}function nr(R){return gc.call(R)}function rr(R){if(R!=null){try{return fc.call(R)}catch{}try{return R+""}catch{}}return""}function po(R,W){return R===W||R!==R&&W!==W}var Ta=fo((function(){return arguments})())?fo:function(R){return ir(R)&&bn.call(R,"callee")&&!pc.call(R,"callee")},ar=Array.isArray;function jc(R){return R!=null&&Bn(R.length)&&!$a(R)}var bi=io||$c;function Tc(R,W){return Sl(R,W)}function $a(R){if(!mo(R))return!1;var W=xi(R);return W==C||W==S||W==x||W==z}function Bn(R){return typeof R=="number"&&R>-1&&R%1==0&&R<=h}function mo(R){var W=typeof R;return R!=null&&(W=="object"||W=="function")}function ir(R){return R!=null&&typeof R=="object"}var or=_n?Dn(_n):un;function $l(R){return jc(R)?er(R):Cl(R)}function vo(){return[]}function $c(){return!1}e.exports=Tc})(As,As.exports)),As.exports}Ok();var v0,Gx;function Ak(){if(Gx)return v0;Gx=1;var e="Expected a function",r=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,m=typeof ei=="object"&&ei&&ei.Object===Object&&ei,x=typeof self=="object"&&self&&self.Object===Object&&self,y=m||x||Function("return this")(),v=Object.prototype,k=v.toString,C=Math.max,S=Math.min,E=function(){return y.Date.now()};function T(_,B,j){var L,G,Y,I,Z,re,X=0,te=!1,H=!1,q=!0;if(typeof _!="function")throw new TypeError(e);B=z(B)||0,M(j)&&(te=!!j.leading,H="maxWait"in j,Y=H?C(z(j.maxWait)||0,B):Y,q="trailing"in j?!!j.trailing:q);function ae(fe){var xe=L,ve=G;return L=G=void 0,X=fe,I=_.apply(ve,xe),I}function ie(fe){return X=fe,Z=setTimeout(F,B),te?ae(fe):I}function de(fe){var xe=fe-re,ve=fe-X,Te=B-xe;return H?S(Te,Y-ve):Te}function A(fe){var xe=fe-re,ve=fe-X;return re===void 0||xe>=B||xe<0||H&&ve>=Y}function F(){var fe=E();if(A(fe))return Q(fe);Z=setTimeout(F,de(fe))}function Q(fe){return Z=void 0,q&&L?ae(fe):(L=G=void 0,I)}function le(){Z!==void 0&&clearTimeout(Z),X=0,L=re=G=Z=void 0}function he(){return Z===void 0?I:Q(E())}function me(){var fe=E(),xe=A(fe);if(L=arguments,G=this,re=fe,xe){if(Z===void 0)return ie(re);if(H)return Z=setTimeout(F,B),ae(re)}return Z===void 0&&(Z=setTimeout(F,B)),I}return me.cancel=le,me.flush=he,me}function M(_){var B=typeof _;return!!_&&(B=="object"||B=="function")}function O(_){return!!_&&typeof _=="object"}function N(_){return typeof _=="symbol"||O(_)&&k.call(_)==a}function z(_){if(typeof _=="number")return _;if(N(_))return r;if(M(_)){var B=typeof _.valueOf=="function"?_.valueOf():_;_=M(B)?B+"":B}if(typeof _!="string")return _===0?_:+_;_=_.replace(o,"");var j=u.test(_);return j||h.test(_)?p(_.slice(2),j?2:8):s.test(_)?r:+_}return v0=T,v0}Ak();var zu={exports:{}},qx;function zk(){return qx||(qx=1,(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});function a(j){return typeof j=="object"&&!("toString"in j)?Object.prototype.toString.call(j).slice(8,-1):j}var o=typeof process=="object"&&!0;function s(j,L){if(!j)throw o?new Error("Invariant failed"):new Error(L())}r.invariant=s;var u=Object.prototype.hasOwnProperty,h=Array.prototype.splice,p=Object.prototype.toString;function m(j){return p.call(j).slice(8,-1)}var x=Object.assign||(function(j,L){return y(L).forEach(function(G){u.call(L,G)&&(j[G]=L[G])}),j}),y=typeof Object.getOwnPropertySymbols=="function"?function(j){return Object.keys(j).concat(Object.getOwnPropertySymbols(j))}:function(j){return Object.keys(j)};function v(j){return Array.isArray(j)?x(j.constructor(j.length),j):m(j)==="Map"?new Map(j):m(j)==="Set"?new Set(j):j&&typeof j=="object"?x(Object.create(Object.getPrototypeOf(j)),j):j}var k=(function(){function j(){this.commands=x({},C),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(L,G){return L===G},this.update.newContext=function(){return new j().update}}return Object.defineProperty(j.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(L){this.update.isEquals=L},enumerable:!0,configurable:!0}),j.prototype.extend=function(L,G){this.commands[L]=G},j.prototype.update=function(L,G){var Y=this,I=typeof G=="function"?{$apply:G}:G;Array.isArray(L)&&Array.isArray(I)||s(!Array.isArray(I),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),s(typeof I=="object"&&I!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(Y.commands).join(", ")+".")});var Z=L;return y(I).forEach(function(re){if(u.call(Y.commands,re)){var X=L===Z;Z=Y.commands[re](I[re],Z,I,L),X&&Y.isEquals(Z,L)&&(Z=L)}else{var te=m(L)==="Map"?Y.update(L.get(re),I[re]):Y.update(L[re],I[re]),H=m(Z)==="Map"?Z.get(re):Z[re];(!Y.isEquals(te,H)||typeof te>"u"&&!u.call(L,re))&&(Z===L&&(Z=v(L)),m(Z)==="Map"?Z.set(re,te):Z[re]=te)}}),Z},j})();r.Context=k;var C={$push:function(j,L,G){return E(L,G,"$push"),j.length?L.concat(j):L},$unshift:function(j,L,G){return E(L,G,"$unshift"),j.length?j.concat(L):L},$splice:function(j,L,G,Y){return M(L,G),j.forEach(function(I){O(I),L===Y&&I.length&&(L=v(Y)),h.apply(L,I)}),L},$set:function(j,L,G){return z(G),j},$toggle:function(j,L){T(j,"$toggle");var G=j.length?v(L):L;return j.forEach(function(Y){G[Y]=!L[Y]}),G},$unset:function(j,L,G,Y){return T(j,"$unset"),j.forEach(function(I){Object.hasOwnProperty.call(L,I)&&(L===Y&&(L=v(Y)),delete L[I])}),L},$add:function(j,L,G,Y){return B(L,"$add"),T(j,"$add"),m(L)==="Map"?j.forEach(function(I){var Z=I[0],re=I[1];L===Y&&L.get(Z)!==re&&(L=v(Y)),L.set(Z,re)}):j.forEach(function(I){L===Y&&!L.has(I)&&(L=v(Y)),L.add(I)}),L},$remove:function(j,L,G,Y){return B(L,"$remove"),T(j,"$remove"),j.forEach(function(I){L===Y&&L.has(I)&&(L=v(Y)),L.delete(I)}),L},$merge:function(j,L,G,Y){return _(L,j),y(j).forEach(function(I){j[I]!==L[I]&&(L===Y&&(L=v(Y)),L[I]=j[I])}),L},$apply:function(j,L){return N(j),j(L)}},S=new k;r.isEquals=S.update.isEquals,r.extend=S.extend,r.default=S.update,r.default.default=e.exports=x(r.default,r);function E(j,L,G){s(Array.isArray(j),function(){return"update(): expected target of "+a(G)+" to be an array; got "+a(j)+"."}),T(L[G],G)}function T(j,L){s(Array.isArray(j),function(){return"update(): expected spec of "+a(L)+" to be an array; got "+a(j)+". Did you forget to wrap your parameter in an array?"})}function M(j,L){s(Array.isArray(j),function(){return"Expected $splice target to be an array; got "+a(j)}),O(L.$splice)}function O(j){s(Array.isArray(j),function(){return"update(): expected spec of $splice to be an array of arrays; got "+a(j)+". Did you forget to wrap your parameters in an array?"})}function N(j){s(typeof j=="function",function(){return"update(): expected spec of $apply to be a function; got "+a(j)+"."})}function z(j){s(Object.keys(j).length===1,function(){return"Cannot have more than one key in an object with $set"})}function _(j,L){s(L&&typeof L=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+a(L)}),s(j&&typeof j=="object",function(){return"update(): $merge expects a target of type 'object'; got "+a(j)})}function B(j,L){var G=m(j);s(G==="Map"||G==="Set",function(){return"update(): "+a(L)+" expects a target of type Set or Map; got "+a(G)})}})(zu,zu.exports)),zu.exports}var Rk=zk();const ca=Ed(Rk);var Fx="popstate";function Wx(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function _k(e={}){function r(s,u){let{pathname:h="/",search:p="",hash:m=""}=ro(s.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),ag("",{pathname:h,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(s,u){let h=s.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let m=s.location.href,x=m.indexOf("#");p=x===-1?m:m.slice(0,x)}return p+"#"+(typeof u=="string"?u:Zs(u))}function o(s,u){pr(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Nk(r,a,o,e)}function ft(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function pr(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Dk(){return Math.random().toString(36).substring(2,10)}function Vx(e,r){return{usr:e.state,key:e.key,idx:r,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ag(e,r,a=null,o,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof r=="string"?ro(r):r,state:a,key:r&&r.key||o||Dk(),unstable_mask:s}}function Zs({pathname:e="/",search:r="",hash:a=""}){return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function ro(e){let r={};if(e){let a=e.indexOf("#");a>=0&&(r.hash=e.substring(a),e=e.substring(0,a));let o=e.indexOf("?");o>=0&&(r.search=e.substring(o),e=e.substring(0,o)),e&&(r.pathname=e)}return r}function Nk(e,r,a,o={}){let{window:s=document.defaultView,v5Compat:u=!1}=o,h=s.history,p="POP",m=null,x=y();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function y(){return(h.state||{idx:null}).idx}function v(){p="POP";let T=y(),M=T==null?null:T-x;x=T,m&&m({action:p,location:E.location,delta:M})}function k(T,M){p="PUSH";let O=Wx(T)?T:ag(E.location,T,M);a&&a(O,T),x=y()+1;let N=Vx(O,x),z=E.createHref(O.unstable_mask||O);try{h.pushState(N,"",z)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;s.location.assign(z)}u&&m&&m({action:p,location:E.location,delta:1})}function C(T,M){p="REPLACE";let O=Wx(T)?T:ag(E.location,T,M);a&&a(O,T),x=y();let N=Vx(O,x),z=E.createHref(O.unstable_mask||O);h.replaceState(N,"",z),u&&m&&m({action:p,location:E.location,delta:0})}function S(T){return Bk(T)}let E={get action(){return p},get location(){return e(s,h)},listen(T){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(Fx,v),m=T,()=>{s.removeEventListener(Fx,v),m=null}},createHref(T){return r(s,T)},createURL:S,encodeLocation(T){let M=S(T);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:k,replace:C,go(T){return h.go(T)}};return E}function Bk(e,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),ft(a,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Zs(e);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=a+o),new URL(o,a)}function Lb(e,r,a="/"){return Hk(e,r,a,!1)}function Hk(e,r,a,o){let s=typeof r=="string"?ro(r):r,u=xa(s.pathname||"/",a);if(u==null)return null;let h=Ob(e);Uk(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let x=Qk(u);p=Zk(h[m],x,o)}return p}function Ob(e,r=[],a=[],o="",s=!1){let u=(h,p,m=s,x)=>{let y={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&m)return;ft(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let v=Ar([o,y.relativePath]),k=a.concat(y);h.children&&h.children.length>0&&(ft(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ob(h.children,r,k,v,m)),!(h.path==null&&!h.index)&&r.push({path:v,score:Vk(v,h.index),routesMeta:k})};return e.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))u(h,p);else for(let m of Ab(h.path))u(h,p,!0,m)}),r}function Ab(e){let r=e.split("/");if(r.length===0)return[];let[a,...o]=r,s=a.endsWith("?"),u=a.replace(/\?$/,"");if(o.length===0)return s?[u,""]:[u];let h=Ab(o.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),s&&p.push(...h),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function Uk(e){e.sort((r,a)=>r.score!==a.score?a.score-r.score:Yk(r.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var Ik=/^:[\w-]+$/,Pk=3,Gk=2,qk=1,Fk=10,Wk=-2,Yx=e=>e==="*";function Vk(e,r){let a=e.split("/"),o=a.length;return a.some(Yx)&&(o+=Wk),r&&(o+=Gk),a.filter(s=>!Yx(s)).reduce((s,u)=>s+(Ik.test(u)?Pk:u===""?qk:Fk),o)}function Yk(e,r){return e.length===r.length&&e.slice(0,-1).every((o,s)=>o===r[s])?e[e.length-1]-r[r.length-1]:0}function Zk(e,r,a=!1){let{routesMeta:o}=e,s={},u="/",h=[];for(let p=0;p<o.length;++p){let m=o[p],x=p===o.length-1,y=u==="/"?r:r.slice(u.length)||"/",v=gd({path:m.relativePath,caseSensitive:m.caseSensitive,end:x},y),k=m.route;if(!v&&x&&a&&!o[o.length-1].route.index&&(v=gd({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(s,v.params),h.push({params:s,pathname:Ar([u,v.pathname]),pathnameBase:tE(Ar([u,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(u=Ar([u,v.pathnameBase]))}return h}function gd(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,o]=Xk(e.path,e.caseSensitive,e.end),s=r.match(a);if(!s)return null;let u=s[0],h=u.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:o.reduce((x,{paramName:y,isOptional:v},k)=>{if(y==="*"){let S=p[k]||"";h=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const C=p[k];return v&&!C?x[y]=void 0:x[y]=(C||"").replace(/%2F/g,"/"),x},{}),pathname:u,pathnameBase:h,pattern:e}}function Xk(e,r=!1,a=!0){pr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m,x,y)=>{if(o.push({paramName:p,isOptional:m!=null}),m){let v=y.charAt(x+h.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function Qk(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return pr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),e}}function xa(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,o=e.charAt(a);return o&&o!=="/"?null:e.slice(a)||"/"}var Kk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jk(e,r="/"){let{pathname:a,search:o="",hash:s=""}=typeof e=="string"?ro(e):e,u;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?u=Zx(a.substring(1),"/"):u=Zx(a,r)):u=r,{pathname:u,search:nE(o),hash:rE(s)}}function Zx(e,r){let a=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?a.length>1&&a.pop():s!=="."&&a.push(s)}),a.length>1?a.join("/"):"/"}function x0(e,r,a,o){return`Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eE(e){return e.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function zb(e){let r=eE(e);return r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase)}function Fg(e,r,a,o=!1){let s;typeof e=="string"?s=ro(e):(s={...e},ft(!s.pathname||!s.pathname.includes("?"),x0("?","pathname","search",s)),ft(!s.pathname||!s.pathname.includes("#"),x0("#","pathname","hash",s)),ft(!s.search||!s.search.includes("#"),x0("#","search","hash",s)));let u=e===""||s.pathname==="",h=u?"/":s.pathname,p;if(h==null)p=a;else{let v=r.length-1;if(!o&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),v-=1;s.pathname=k.join("/")}p=v>=0?r[v]:"/"}let m=Jk(s,p),x=h&&h!=="/"&&h.endsWith("/"),y=(u||h===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(x||y)&&(m.pathname+="/"),m}var Ar=e=>e.join("/").replace(/\/\/+/g,"/"),tE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,aE=class{constructor(e,r,a,o=!1){this.status=e,this.statusText=r||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function iE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function oE(e){return e.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _b(e,r){let a=e;if(typeof a!="string"||!Kk.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let o=a,s=!1;if(Rb)try{let u=new URL(window.location.href),h=a.startsWith("//")?new URL(u.protocol+a):new URL(a),p=xa(h.pathname,r);h.origin===u.origin&&p!=null?a=p+h.search+h.hash:s=!0}catch{pr(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Db=["POST","PUT","PATCH","DELETE"];new Set(Db);var lE=["GET",...Db];new Set(lE);var xl=f.createContext(null);xl.displayName="DataRouter";var Nd=f.createContext(null);Nd.displayName="DataRouterState";var sE=f.createContext(!1),Nb=f.createContext({isTransitioning:!1});Nb.displayName="ViewTransition";var cE=f.createContext(new Map);cE.displayName="Fetchers";var uE=f.createContext(null);uE.displayName="Await";var Kn=f.createContext(null);Kn.displayName="Navigation";var rc=f.createContext(null);rc.displayName="Location";var ya=f.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var Wg=f.createContext(null);Wg.displayName="RouteError";var Bb="REACT_ROUTER_ERROR",dE="REDIRECT",fE="ROUTE_ERROR_RESPONSE";function hE(e){if(e.startsWith(`${Bb}:${dE}:{`))try{let r=JSON.parse(e.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function gE(e){if(e.startsWith(`${Bb}:${fE}:{`))try{let r=JSON.parse(e.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new aE(r.status,r.statusText,r.data)}catch{}}function pE(e,{relative:r}={}){ft(ac(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=f.useContext(Kn),{hash:s,pathname:u,search:h}=ic(e,{relative:r}),p=u;return a!=="/"&&(p=u==="/"?a:Ar([a,u])),o.createHref({pathname:p,search:h,hash:s})}function ac(){return f.useContext(rc)!=null}function _r(){return ft(ac(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(rc).location}var Hb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ub(e){f.useContext(Kn).static||f.useLayoutEffect(e)}function mE(){let{isDataRoute:e}=f.useContext(ya);return e?ME():vE()}function vE(){ft(ac(),"useNavigate() may be used only in the context of a <Router> component.");let e=f.useContext(xl),{basename:r,navigator:a}=f.useContext(Kn),{matches:o}=f.useContext(ya),{pathname:s}=_r(),u=JSON.stringify(zb(o)),h=f.useRef(!1);return Ub(()=>{h.current=!0}),f.useCallback((m,x={})=>{if(pr(h.current,Hb),!h.current)return;if(typeof m=="number"){a.go(m);return}let y=Fg(m,JSON.parse(u),s,x.relative==="path");e==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Ar([r,y.pathname])),(x.replace?a.replace:a.push)(y,x.state,x)},[r,a,u,s,e])}f.createContext(null);function ic(e,{relative:r}={}){let{matches:a}=f.useContext(ya),{pathname:o}=_r(),s=JSON.stringify(zb(a));return f.useMemo(()=>Fg(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function xE(e,r){return Ib(e,r)}function Ib(e,r,a){ft(ac(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=f.useContext(Kn),{matches:s}=f.useContext(ya),u=s[s.length-1],h=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",x=u&&u.route;{let T=x&&x.path||"";Gb(p,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=_r(),v;if(r){let T=typeof r=="string"?ro(r):r;ft(m==="/"||T.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let k=v.pathname||"/",C=k;if(m!=="/"){let T=m.replace(/^\//,"").split("/");C="/"+k.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=Lb(e,{pathname:C});pr(x||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),pr(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=CE(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:Ar([m,o.encodeLocation?o.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:Ar([m,o.encodeLocation?o.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),s,a);return r&&E?f.createElement(rc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},E):E}function yE(){let e=$E(),r=iE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",e),h=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:u},"ErrorBoundary")," or"," ",f.createElement("code",{style:u},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},r),a?f.createElement("pre",{style:s},a):null,h)}var bE=f.createElement(yE,null),Pb=class extends f.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){this.props.onError?this.props.onError(e,r):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=gE(e.digest);a&&(e=a)}let r=e!==void 0?f.createElement(ya.Provider,{value:this.props.routeContext},f.createElement(Wg.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?f.createElement(wE,{error:e},r):r}};Pb.contextType=sE;var y0=new WeakMap;function wE({children:e,error:r}){let{basename:a}=f.useContext(Kn);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=hE(r.digest);if(o){let s=y0.get(r);if(s)throw s;let u=_b(o.location,a);if(Rb&&!y0.get(r))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw y0.set(r,h),h}return f.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function SE({routeContext:e,match:r,children:a}){let o=f.useContext(xl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(ya.Provider,{value:e},a)}function CE(e,r=[],a){let o=a?.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,u=o?.errors;if(u!=null){let y=s.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);ft(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let h=!1,p=-1;if(a&&o){h=o.renderFallback;for(let y=0;y<s.length;y++){let v=s[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=y),v.route.id){let{loaderData:k,errors:C}=o,S=v.route.loader&&!k.hasOwnProperty(v.route.id)&&(!C||C[v.route.id]===void 0);if(v.route.lazy||S){a.isStatic&&(h=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let m=a?.onError,x=o&&m?(y,v)=>{m(y,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:oE(o.matches),errorInfo:v})}:void 0;return s.reduceRight((y,v,k)=>{let C,S=!1,E=null,T=null;o&&(C=u&&v.route.id?u[v.route.id]:void 0,E=v.route.errorElement||bE,h&&(p<0&&k===0?(Gb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===k&&(S=!0,T=v.route.hydrateFallbackElement||null)));let M=r.concat(s.slice(0,k+1)),O=()=>{let N;return C?N=E:S?N=T:v.route.Component?N=f.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=y,f.createElement(SE,{match:v,routeContext:{outlet:y,matches:M,isDataRoute:o!=null},children:N})};return o&&(v.route.ErrorBoundary||v.route.errorElement||k===0)?f.createElement(Pb,{location:o.location,revalidation:o.revalidation,component:E,error:C,children:O(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:x}):O()},null)}function Vg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kE(e){let r=f.useContext(xl);return ft(r,Vg(e)),r}function EE(e){let r=f.useContext(Nd);return ft(r,Vg(e)),r}function jE(e){let r=f.useContext(ya);return ft(r,Vg(e)),r}function Yg(e){let r=jE(e),a=r.matches[r.matches.length-1];return ft(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function TE(){return Yg("useRouteId")}function $E(){let e=f.useContext(Wg),r=EE("useRouteError"),a=Yg("useRouteError");return e!==void 0?e:r.errors?.[a]}function ME(){let{router:e}=kE("useNavigate"),r=Yg("useNavigate"),a=f.useRef(!1);return Ub(()=>{a.current=!0}),f.useCallback(async(s,u={})=>{pr(a.current,Hb),a.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:r,...u}))},[e,r])}var Xx={};function Gb(e,r,a){!r&&!Xx[e]&&(Xx[e]=!0,pr(!1,a))}f.memo(LE);function LE({routes:e,future:r,state:a,isStatic:o,onError:s}){return Ib(e,void 0,{state:a,isStatic:o,onError:s})}function Gt(e){ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OE({basename:e="/",children:r=null,location:a,navigationType:o="POP",navigator:s,static:u=!1,unstable_useTransitions:h}){ft(!ac(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),m=f.useMemo(()=>({basename:p,navigator:s,static:u,unstable_useTransitions:h,future:{}}),[p,s,u,h]);typeof a=="string"&&(a=ro(a));let{pathname:x="/",search:y="",hash:v="",state:k=null,key:C="default",unstable_mask:S}=a,E=f.useMemo(()=>{let T=xa(x,p);return T==null?null:{location:{pathname:T,search:y,hash:v,state:k,key:C,unstable_mask:S},navigationType:o}},[p,x,y,v,k,C,o,S]);return pr(E!=null,`<Router basename="${p}"> is not able to match the URL "${x}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:f.createElement(Kn.Provider,{value:m},f.createElement(rc.Provider,{children:r,value:E}))}function AE({children:e,location:r}){return xE(ig(e),r)}function ig(e,r=[]){let a=[];return f.Children.forEach(e,(o,s)=>{if(!f.isValidElement(o))return;let u=[...r,s];if(o.type===f.Fragment){a.push.apply(a,ig(o.props.children,u));return}ft(o.type===Gt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ft(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=ig(o.props.children,u)),a.push(h)}),a}var ed="get",td="application/x-www-form-urlencoded";function Bd(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function zE(e){return Bd(e)&&e.tagName.toLowerCase()==="button"}function RE(e){return Bd(e)&&e.tagName.toLowerCase()==="form"}function _E(e){return Bd(e)&&e.tagName.toLowerCase()==="input"}function DE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function NE(e,r){return e.button===0&&(!r||r==="_self")&&!DE(e)}var Ru=null;function BE(){if(Ru===null)try{new FormData(document.createElement("form"),0),Ru=!1}catch{Ru=!0}return Ru}var HE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function b0(e){return e!=null&&!HE.has(e)?(pr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${td}"`),null):e}function UE(e,r){let a,o,s,u,h;if(RE(e)){let p=e.getAttribute("action");o=p?xa(p,r):null,a=e.getAttribute("method")||ed,s=b0(e.getAttribute("enctype"))||td,u=new FormData(e)}else if(zE(e)||_E(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(o=m?xa(m,r):null,a=e.getAttribute("formmethod")||p.getAttribute("method")||ed,s=b0(e.getAttribute("formenctype"))||b0(p.getAttribute("enctype"))||td,u=new FormData(p,e),!BE()){let{name:x,type:y,value:v}=e;if(y==="image"){let k=x?`${x}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else x&&u.append(x,v)}}else{if(Bd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ed,o=null,s=td,h=e}return u&&s==="text/plain"&&(h=u,u=void 0),{action:o,method:a.toLowerCase(),encType:s,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zg(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function IE(e,r,a,o){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:r&&xa(s.pathname,r)==="/"?s.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function PE(e,r){if(e.id in r)return r[e.id];try{let a=await import(e.module);return r[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function qE(e,r,a){let o=await Promise.all(e.map(async s=>{let u=r.routes[s.route.id];if(u){let h=await PE(u,a);return h.links?h.links():[]}return[]}));return YE(o.flat(1).filter(GE).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Qx(e,r,a,o,s,u){let h=(m,x)=>a[x]?m.route.id!==a[x].route.id:!0,p=(m,x)=>a[x].pathname!==m.pathname||a[x].route.path?.endsWith("*")&&a[x].params["*"]!==m.params["*"];return u==="assets"?r.filter((m,x)=>h(m,x)||p(m,x)):u==="data"?r.filter((m,x)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(h(m,x)||p(m,x))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function FE(e,r,{includeHydrateFallback:a}={}){return WE(e.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),a&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function WE(e){return[...new Set(e)]}function VE(e){let r={},a=Object.keys(e).sort();for(let o of a)r[o]=e[o];return r}function YE(e,r){let a=new Set;return new Set(r),e.reduce((o,s)=>{let u=JSON.stringify(VE(s));return a.has(u)||(a.add(u),o.push({key:u,link:s})),o},[])}function qb(){let e=f.useContext(xl);return Zg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ZE(){let e=f.useContext(Nd);return Zg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Xg=f.createContext(void 0);Xg.displayName="FrameworkContext";function Fb(){let e=f.useContext(Xg);return Zg(e,"You must render this element inside a <HydratedRouter> element"),e}function XE(e,r){let a=f.useContext(Xg),[o,s]=f.useState(!1),[u,h]=f.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:x,onMouseLeave:y,onTouchStart:v}=r,k=f.useRef(null);f.useEffect(()=>{if(e==="render"&&h(!0),e==="viewport"){let E=M=>{M.forEach(O=>{h(O.isIntersecting)})},T=new IntersectionObserver(E,{threshold:.5});return k.current&&T.observe(k.current),()=>{T.disconnect()}}},[e]),f.useEffect(()=>{if(o){let E=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(E)}}},[o]);let C=()=>{s(!0)},S=()=>{s(!1),h(!1)};return a?e!=="intent"?[u,k,{}]:[u,k,{onFocus:gs(p,C),onBlur:gs(m,S),onMouseEnter:gs(x,C),onMouseLeave:gs(y,S),onTouchStart:gs(v,C)}]:[!1,k,{}]}function gs(e,r){return a=>{e&&e(a),a.defaultPrevented||r(a)}}function QE({page:e,...r}){let{router:a}=qb(),o=f.useMemo(()=>Lb(a.routes,e,a.basename),[a.routes,e,a.basename]);return o?f.createElement(JE,{page:e,matches:o,...r}):null}function KE(e){let{manifest:r,routeModules:a}=Fb(),[o,s]=f.useState([]);return f.useEffect(()=>{let u=!1;return qE(e,r,a).then(h=>{u||s(h)}),()=>{u=!0}},[e,r,a]),o}function JE({page:e,matches:r,...a}){let o=_r(),{future:s,manifest:u,routeModules:h}=Fb(),{basename:p}=qb(),{loaderData:m,matches:x}=ZE(),y=f.useMemo(()=>Qx(e,r,x,u,o,"data"),[e,r,x,u,o]),v=f.useMemo(()=>Qx(e,r,x,u,o,"assets"),[e,r,x,u,o]),k=f.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let E=new Set,T=!1;if(r.forEach(O=>{let N=u.routes[O.route.id];!N||!N.hasLoader||(!y.some(z=>z.route.id===O.route.id)&&O.route.id in m&&h[O.route.id]?.shouldRevalidate||N.hasClientLoader?T=!0:E.add(O.route.id))}),E.size===0)return[];let M=IE(e,p,s.unstable_trailingSlashAwareDataRequests,"data");return T&&E.size>0&&M.searchParams.set("_routes",r.filter(O=>E.has(O.route.id)).map(O=>O.route.id).join(",")),[M.pathname+M.search]},[p,s.unstable_trailingSlashAwareDataRequests,m,o,u,y,r,e,h]),C=f.useMemo(()=>FE(v,u),[v,u]),S=KE(v);return f.createElement(f.Fragment,null,k.map(E=>f.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),C.map(E=>f.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),S.map(({key:E,link:T})=>f.createElement("link",{key:E,nonce:a.nonce,...T,crossOrigin:T.crossOrigin??a.crossOrigin})))}function ej(...e){return r=>{e.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var tj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tj&&(window.__reactRouterVersion="7.13.1")}catch{}function nj({basename:e,children:r,unstable_useTransitions:a,window:o}){let s=f.useRef();s.current==null&&(s.current=_k({window:o,v5Compat:!0}));let u=s.current,[h,p]=f.useState({action:u.action,location:u.location}),m=f.useCallback(x=>{a===!1?p(x):f.startTransition(()=>p(x))},[a]);return f.useLayoutEffect(()=>u.listen(m),[u,m]),f.createElement(OE,{basename:e,children:r,location:h.location,navigationType:h.action,navigator:u,unstable_useTransitions:a})}var Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=f.forwardRef(function({onClick:r,discover:a="render",prefetch:o="none",relative:s,reloadDocument:u,replace:h,unstable_mask:p,state:m,target:x,to:y,preventScrollReset:v,viewTransition:k,unstable_defaultShouldRevalidate:C,...S},E){let{basename:T,navigator:M,unstable_useTransitions:O}=f.useContext(Kn),N=typeof y=="string"&&Wb.test(y),z=_b(y,T);y=z.to;let _=pE(y,{relative:s}),B=_r(),j=null;if(p){let te=Fg(p,[],B.unstable_mask?B.unstable_mask.pathname:"/",!0);T!=="/"&&(te.pathname=te.pathname==="/"?T:Ar([T,te.pathname])),j=M.createHref(te)}let[L,G,Y]=XE(o,S),I=oj(y,{replace:h,unstable_mask:p,state:m,target:x,preventScrollReset:v,relative:s,viewTransition:k,unstable_defaultShouldRevalidate:C,unstable_useTransitions:O});function Z(te){r&&r(te),te.defaultPrevented||I(te)}let re=!(z.isExternal||u),X=f.createElement("a",{...S,...Y,href:(re?j:void 0)||z.absoluteURL||_,onClick:re?Z:r,ref:ej(E,G),target:x,"data-discover":!N&&a==="render"?"true":void 0});return L&&!N?f.createElement(f.Fragment,null,X,f.createElement(QE,{page:_})):X});Ue.displayName="Link";var rj=f.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:o="",end:s=!1,style:u,to:h,viewTransition:p,children:m,...x},y){let v=ic(h,{relative:x.relative}),k=_r(),C=f.useContext(Nd),{navigator:S,basename:E}=f.useContext(Kn),T=C!=null&&dj(v)&&p===!0,M=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,O=k.pathname,N=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;a||(O=O.toLowerCase(),N=N?N.toLowerCase():null,M=M.toLowerCase()),N&&E&&(N=xa(N,E)||N);const z=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let _=O===M||!s&&O.startsWith(M)&&O.charAt(z)==="/",B=N!=null&&(N===M||!s&&N.startsWith(M)&&N.charAt(M.length)==="/"),j={isActive:_,isPending:B,isTransitioning:T},L=_?r:void 0,G;typeof o=="function"?G=o(j):G=[o,_?"active":null,B?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Y=typeof u=="function"?u(j):u;return f.createElement(Ue,{...x,"aria-current":L,className:G,ref:y,style:Y,to:h,viewTransition:p},typeof m=="function"?m(j):m)});rj.displayName="NavLink";var aj=f.forwardRef(({discover:e="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:s,state:u,method:h=ed,action:p,onSubmit:m,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k,...C},S)=>{let{unstable_useTransitions:E}=f.useContext(Kn),T=cj(),M=uj(p,{relative:x}),O=h.toLowerCase()==="get"?"get":"post",N=typeof p=="string"&&Wb.test(p),z=_=>{if(m&&m(_),_.defaultPrevented)return;_.preventDefault();let B=_.nativeEvent.submitter,j=B?.getAttribute("formmethod")||h,L=()=>T(B||_.currentTarget,{fetcherKey:r,method:j,navigate:a,replace:s,state:u,relative:x,preventScrollReset:y,viewTransition:v,unstable_defaultShouldRevalidate:k});E&&a!==!1?f.startTransition(()=>L()):L()};return f.createElement("form",{ref:S,method:O,action:M,onSubmit:o?m:z,...C,"data-discover":!N&&e==="render"?"true":void 0})});aj.displayName="Form";function ij(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vb(e){let r=f.useContext(xl);return ft(r,ij(e)),r}function oj(e,{target:r,replace:a,unstable_mask:o,state:s,preventScrollReset:u,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:x}={}){let y=mE(),v=_r(),k=ic(e,{relative:h});return f.useCallback(C=>{if(NE(C,r)){C.preventDefault();let S=a!==void 0?a:Zs(v)===Zs(k),E=()=>y(e,{replace:S,unstable_mask:o,state:s,preventScrollReset:u,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:m});x?f.startTransition(()=>E()):E()}},[v,y,k,a,o,s,r,e,u,h,p,m,x])}var lj=0,sj=()=>`__${String(++lj)}__`;function cj(){let{router:e}=Vb("useSubmit"),{basename:r}=f.useContext(Kn),a=TE(),o=e.fetch,s=e.navigate;return f.useCallback(async(u,h={})=>{let{action:p,method:m,encType:x,formData:y,body:v}=UE(u,r);if(h.navigate===!1){let k=h.fetcherKey||sj();await o(k,a,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||m,formEncType:h.encType||x,flushSync:h.flushSync})}else await s(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||m,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:a,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,s,r,a])}function uj(e,{relative:r}={}){let{basename:a}=f.useContext(Kn),o=f.useContext(ya);ft(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),u={...ic(e||".",{relative:r})},h=_r();if(e==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(u.pathname=u.pathname==="/"?a:Ar([a,u.pathname])),Zs(u)}function dj(e,{relative:r}={}){let a=f.useContext(Nb);ft(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Vb("useViewTransitionState"),s=ic(e,{relative:r});if(!a.isTransitioning)return!1;let u=xa(a.currentLocation.pathname,o)||a.currentLocation.pathname,h=xa(a.nextLocation.pathname,o)||a.nextLocation.pathname;return gd(s.pathname,h)!=null||gd(s.pathname,u)!=null}var w0={},An={},S0={},Kx;function Dr(){return Kx||(Kx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.DEFAULT_HEARTBEAT=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var r=1,a=1e3*r;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*a,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},e.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3};var o;(function(u){u[u.UNINSTANTIATED=-1]="UNINSTANTIATED",u[u.CONNECTING=0]="CONNECTING",u[u.OPEN=1]="OPEN",u[u.CLOSING=2]="CLOSING",u[u.CLOSED=3]="CLOSED"})(o||(e.ReadyState=o={}));var s=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&s()})(S0)),S0}var ps={},C0={},Jx;function Qg(){return Jx||(Jx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var r=function(a){if(a&&e.sharedWebSockets.hasOwnProperty(a))delete e.sharedWebSockets[a];else for(var o in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(o)&&delete e.sharedWebSockets[o]};e.resetWebSockets=r})(C0)),C0}var Di={},ia={},ey;function Kg(){if(ey)return ia;ey=1,Object.defineProperty(ia,"__esModule",{value:!0}),ia.setUpSocketIOPing=ia.appendQueryParams=ia.parseSocketIOUrl=void 0;var e=Dr(),r=function(s){if(s){var u=/^https|wss/.test(s),h=s.replace(/^(https?|wss?)(:\/\/)?/,""),p=h.replace(/\/$/,""),m=u?"wss":"ws";return"".concat(m,"://").concat(p).concat(e.SOCKET_IO_PATH)}else if(s===""){var u=/^https/.test(window.location.protocol),m=u?"wss":"ws",x=window.location.port?":".concat(window.location.port):"";return"".concat(m,"://").concat(window.location.hostname).concat(x).concat(e.SOCKET_IO_PATH)}return s};ia.parseSocketIOUrl=r;var a=function(s,u){u===void 0&&(u={});var h=/\?([\w]+=[\w]+)/,p=h.test(s),m="".concat(Object.entries(u).reduce(function(x,y){var v=y[0],k=y[1];return x+"".concat(v,"=").concat(k,"&")},"").slice(0,-1));return"".concat(s).concat(p?"&":"?").concat(m)};ia.appendQueryParams=a;var o=function(s,u){u===void 0&&(u=e.SOCKET_IO_PING_INTERVAL);var h=function(){return s(e.SOCKET_IO_PING_CODE)};return window.setInterval(h,u)};return ia.setUpSocketIOPing=o,ia}var _u={},ty;function Yb(){if(ty)return _u;ty=1,Object.defineProperty(_u,"__esModule",{value:!0}),_u.heartbeat=a;var e=Dr();function r(o){return Array.isArray(o)?o.reduce(function(s,u){return s.current>u.current?s:u}).current:o.current}function a(o,s,u){var h=u||{},p=h.interval,m=p===void 0?e.DEFAULT_HEARTBEAT.interval:p,x=h.timeout,y=x===void 0?e.DEFAULT_HEARTBEAT.timeout:x,v=h.message,k=v===void 0?e.DEFAULT_HEARTBEAT.message:v,C=Math.max(100,m/10),S=Date.now(),E=setInterval(function(){var T=Date.now(),M=r(s);if(M+y<=T)console.warn("Heartbeat timed out, closing connection, last message received ".concat(T-M,"ms ago, last ping sent ").concat(T-S,"ms ago")),o.close();else if(M+m<=T&&S+m<=T)try{typeof k=="function"?o.send(k()):o.send(k),S=T}catch(O){console.error("Heartbeat failed, closing connection",O instanceof Error?O.message:O),o.close()}},C);return o.addEventListener("close",function(){clearInterval(E)}),function(){}}return _u}var ms={},k0={},ny;function Jg(){return ny||(ny=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var r={},a=[],o=function(m){return(0,e.hasSubscribers)(m)?Array.from(r[m]):a};e.getSubscribers=o;var s=function(m){var x;return((x=r[m])===null||x===void 0?void 0:x.size)>0};e.hasSubscribers=s;var u=function(m,x){r[m]=r[m]||new Set,r[m].add(x)};e.addSubscriber=u;var h=function(m,x){r[m].delete(x)};e.removeSubscriber=h;var p=function(m){if(m&&r.hasOwnProperty(m))delete r[m];else for(var x in r)r.hasOwnProperty(x)&&delete r[x]};e.resetSubscribers=p})(k0)),k0}var ry;function ep(){if(ry)return ms;ry=1,Object.defineProperty(ms,"__esModule",{value:!0}),ms.assertIsWebSocket=a,ms.resetGlobalState=o;var e=Qg(),r=Jg();function a(s,u){if(!u&&!(s instanceof WebSocket))throw new Error("")}function o(s){(0,r.resetSubscribers)(s),(0,e.resetWebSockets)(s)}return ms}var ay;function fj(){if(ay)return Di;ay=1;var e=Di&&Di.__assign||function(){return e=Object.assign||function(y){for(var v,k=1,C=arguments.length;k<C;k++){v=arguments[k];for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(y[S]=v[S])}return y},e.apply(this,arguments)};Object.defineProperty(Di,"__esModule",{value:!0}),Di.attachListeners=void 0;var r=Kg(),a=Yb(),o=Dr(),s=ep(),u=function(y,v,k,C){y.onmessage=function(S){var E;v.current.onMessage&&v.current.onMessage(S),typeof C?.current=="number"&&(C.current=Date.now()),!(typeof v.current.filter=="function"&&v.current.filter(S)!==!0)&&(v.current.heartbeat&&typeof v.current.heartbeat!="boolean"&&((E=v.current.heartbeat)===null||E===void 0?void 0:E.returnMessage)===S.data||k(S))}},h=function(y,v,k,C,S){y.onopen=function(E){if(v.current.onOpen&&v.current.onOpen(E),C.current=0,k(o.ReadyState.OPEN),v.current.heartbeat&&y instanceof WebSocket){var T=typeof v.current.heartbeat=="boolean"?void 0:v.current.heartbeat;S.current=Date.now(),(0,a.heartbeat)(y,S,T)}}},p=function(y,v,k,C,S){if(o.isEventSourceSupported&&y instanceof EventSource)return function(){};(0,s.assertIsWebSocket)(y,v.current.skipAssert);var E;return y.onclose=function(T){var M;if(v.current.onClose&&v.current.onClose(T),k(o.ReadyState.CLOSED),v.current.shouldReconnect&&v.current.shouldReconnect(T)){var O=(M=v.current.reconnectAttempts)!==null&&M!==void 0?M:o.DEFAULT_RECONNECT_LIMIT;if(S.current<O){var N=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},N??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(O),console.warn("Max reconnect attempts of ".concat(O," exceeded"))}},function(){return E&&window.clearTimeout(E)}},m=function(y,v,k,C,S){var E;return y.onerror=function(T){var M;if(v.current.onError&&v.current.onError(T),o.isEventSourceSupported&&y instanceof EventSource&&(v.current.onClose&&v.current.onClose(e(e({},T),{code:1006,reason:"An error occurred with the EventSource: ".concat(T),wasClean:!1})),k(o.ReadyState.CLOSED),y.close()),v.current.retryOnError)if(S.current<((M=v.current.reconnectAttempts)!==null&&M!==void 0?M:o.DEFAULT_RECONNECT_LIMIT)){var O=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},O??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(v.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(v.current.reconnectAttempts," exceeded"))},function(){return E&&window.clearTimeout(E)}},x=function(y,v,k,C,S,E,T){var M=v.setLastMessage,O=v.setReadyState,N,z,_;return k.current.fromSocketIO&&(N=(0,r.setUpSocketIOPing)(T)),u(y,k,M,E),h(y,k,O,S,E),z=p(y,k,O,C,S),_=m(y,k,O,C,S),function(){O(o.ReadyState.CLOSING),z(),_(),y.close(),N&&clearInterval(N)}};return Di.attachListeners=x,Di}var Ni={},iy;function hj(){if(iy)return Ni;iy=1;var e=Ni&&Ni.__assign||function(){return e=Object.assign||function(v){for(var k,C=1,S=arguments.length;C<S;C++){k=arguments[C];for(var E in k)Object.prototype.hasOwnProperty.call(k,E)&&(v[E]=k[E])}return v},e.apply(this,arguments)};Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.attachSharedListeners=void 0;var r=Qg(),a=Dr(),o=Jg(),s=Kg(),u=Yb(),h=function(v,k,C){v.onmessage=function(S){(0,o.getSubscribers)(k).forEach(function(E){var T;E.optionsRef.current.onMessage&&E.optionsRef.current.onMessage(S),typeof((T=E?.lastMessageTime)===null||T===void 0?void 0:T.current)=="number"&&(E.lastMessageTime.current=Date.now()),!(typeof E.optionsRef.current.filter=="function"&&E.optionsRef.current.filter(S)!==!0)&&(C&&typeof C!="boolean"&&C?.returnMessage===S.data||E.setLastMessage(S))})}},p=function(v,k,C){v.onopen=function(S){var E=(0,o.getSubscribers)(k);E.forEach(function(T){T.reconnectCount.current=0,T.optionsRef.current.onOpen&&T.optionsRef.current.onOpen(S),T.setReadyState(a.ReadyState.OPEN),C&&v instanceof WebSocket&&(T.lastMessageTime.current=Date.now())}),C&&v instanceof WebSocket&&(0,u.heartbeat)(v,E.map(function(T){return T.lastMessageTime}),typeof C=="boolean"?void 0:C)}},m=function(v,k){v instanceof WebSocket&&(v.onclose=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onClose&&S.optionsRef.current.onClose(C),S.setReadyState(a.ReadyState.CLOSED)}),delete r.sharedWebSockets[k],(0,o.getSubscribers)(k).forEach(function(S){var E;if(S.optionsRef.current.shouldReconnect&&S.optionsRef.current.shouldReconnect(C)){var T=(E=S.optionsRef.current.reconnectAttempts)!==null&&E!==void 0?E:a.DEFAULT_RECONNECT_LIMIT;if(S.reconnectCount.current<T){var M=typeof S.optionsRef.current.reconnectInterval=="function"?S.optionsRef.current.reconnectInterval(S.reconnectCount.current):S.optionsRef.current.reconnectInterval;setTimeout(function(){S.reconnectCount.current++,S.reconnect.current()},M??a.DEFAULT_RECONNECT_INTERVAL_MS)}else S.optionsRef.current.onReconnectStop&&S.optionsRef.current.onReconnectStop(S.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(T," exceeded"))}})})},x=function(v,k){v.onerror=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onError&&S.optionsRef.current.onError(C),a.isEventSourceSupported&&v instanceof EventSource&&(S.optionsRef.current.onClose&&S.optionsRef.current.onClose(e(e({},C),{code:1006,reason:"An error occurred with the EventSource: ".concat(C),wasClean:!1})),S.setReadyState(a.ReadyState.CLOSED))}),a.isEventSourceSupported&&v instanceof EventSource&&v.close()}},y=function(v,k,C,S){var E;return C.current.fromSocketIO&&(E=(0,s.setUpSocketIOPing)(S)),h(v,k,C.current.heartbeat),m(v,k),p(v,k,C.current.heartbeat),x(v,k),function(){E&&clearInterval(E)}};return Ni.attachSharedListeners=y,Ni}var oy;function gj(){if(oy)return ps;oy=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.createOrJoinSocket=void 0;var e=Qg(),r=Dr(),a=fj(),o=hj(),s=Jg(),u=function(p,m,x,y,v){return function(){if((0,s.removeSubscriber)(p,m),!(0,s.hasSubscribers)(p)){try{var k=e.sharedWebSockets[p];k instanceof WebSocket&&(k.onclose=function(C){x.current.onClose&&x.current.onClose(C),y(r.ReadyState.CLOSED)}),k.close()}catch{}v&&v(),delete e.sharedWebSockets[p]}}},h=function(p,m,x,y,v,k,C,S,E){if(!r.isEventSourceSupported&&y.current.eventSourceOptions)throw r.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(y.current.share){var T=null;e.sharedWebSockets[m]===void 0?(e.sharedWebSockets[m]=y.current.eventSourceOptions?new EventSource(m,y.current.eventSourceOptions):new WebSocket(m,y.current.protocols),p.current=e.sharedWebSockets[m],x(r.ReadyState.CONNECTING),T=(0,o.attachSharedListeners)(e.sharedWebSockets[m],m,y,E)):(p.current=e.sharedWebSockets[m],x(e.sharedWebSockets[m].readyState));var M={setLastMessage:v,setReadyState:x,optionsRef:y,reconnectCount:C,lastMessageTime:S,reconnect:k};return(0,s.addSubscriber)(m,M),u(m,M,y,x,T)}else{if(p.current=y.current.eventSourceOptions?new EventSource(m,y.current.eventSourceOptions):new WebSocket(m,y.current.protocols),x(r.ReadyState.CONNECTING),!p.current)throw new Error("WebSocket failed to be created");return(0,a.attachListeners)(p.current,{setLastMessage:v,setReadyState:x},y,k.current,C,S,E)}};return ps.createOrJoinSocket=h,ps}var oa={},ly;function pj(){return ly||(ly=1,(function(e){var r=oa&&oa.__awaiter||function(m,x,y,v){function k(C){return C instanceof y?C:new y(function(S){S(C)})}return new(y||(y=Promise))(function(C,S){function E(O){try{M(v.next(O))}catch(N){S(N)}}function T(O){try{M(v.throw(O))}catch(N){S(N)}}function M(O){O.done?C(O.value):k(O.value).then(E,T)}M((v=v.apply(m,x||[])).next())})},a=oa&&oa.__generator||function(m,x){var y={label:0,sent:function(){if(C[0]&1)throw C[1];return C[1]},trys:[],ops:[]},v,k,C,S=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return S.next=E(0),S.throw=E(1),S.return=E(2),typeof Symbol=="function"&&(S[Symbol.iterator]=function(){return this}),S;function E(M){return function(O){return T([M,O])}}function T(M){if(v)throw new TypeError("Generator is already executing.");for(;S&&(S=0,M[0]&&(y=0)),y;)try{if(v=1,k&&(C=M[0]&2?k.return:M[0]?k.throw||((C=k.return)&&C.call(k),0):k.next)&&!(C=C.call(k,M[1])).done)return C;switch(k=0,C&&(M=[M[0]&2,C.value]),M[0]){case 0:case 1:C=M;break;case 4:return y.label++,{value:M[1],done:!1};case 5:y.label++,k=M[1],M=[0];continue;case 7:M=y.ops.pop(),y.trys.pop();continue;default:if(C=y.trys,!(C=C.length>0&&C[C.length-1])&&(M[0]===6||M[0]===2)){y=0;continue}if(M[0]===3&&(!C||M[1]>C[0]&&M[1]<C[3])){y.label=M[1];break}if(M[0]===6&&y.label<C[1]){y.label=C[1],C=M;break}if(C&&y.label<C[2]){y.label=C[2],y.ops.push(M);break}C[2]&&y.ops.pop(),y.trys.pop();continue}M=x.call(m,y)}catch(O){M=[6,O],k=0}finally{v=C=0}if(M[0]&5)throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}},o=oa&&oa.__spreadArray||function(m,x,y){if(y||arguments.length===2)for(var v=0,k=x.length,C;v<k;v++)(C||!(v in x))&&(C||(C=Array.prototype.slice.call(x,0,v)),C[v]=x[v]);return m.concat(C||Array.prototype.slice.call(x))};Object.defineProperty(e,"__esModule",{value:!0}),e.getUrl=void 0;var s=Kg(),u=Dr(),h=function(m){return new Promise(function(x){return window.setTimeout(x,m)})},p=function(m,x){for(var y=[],v=2;v<arguments.length;v++)y[v-2]=arguments[v];return r(void 0,o([m,x],y,!0),void 0,function(k,C,S){var E,T,M,O,N,z,_,B;return S===void 0&&(S=0),a(this,function(j){switch(j.label){case 0:if(typeof k!="function")return[3,10];j.label=1;case 1:return j.trys.push([1,3,,9]),[4,k()];case 2:return E=j.sent(),[3,9];case 3:return j.sent(),C.current.retryOnError?(T=(z=C.current.reconnectAttempts)!==null&&z!==void 0?z:u.DEFAULT_RECONNECT_LIMIT,S<T?(M=typeof C.current.reconnectInterval=="function"?C.current.reconnectInterval(S):C.current.reconnectInterval,[4,h(M??u.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return j.sent(),[2,(0,e.getUrl)(k,C,S+1)];case 5:return(B=(_=C.current).onReconnectStop)===null||B===void 0||B.call(_,S),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:E=k,j.label=11;case 11:return O=C.current.fromSocketIO?(0,s.parseSocketIOUrl)(E):E,N=C.current.queryParams?(0,s.appendQueryParams)(O,C.current.queryParams):O,[2,N]}})})};e.getUrl=p})(oa)),oa}var E0={},sy;function mj(){return sy||(sy=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var r=function(a,o){return new Proxy(a,{get:function(s,u){var h=s[u];return u==="reconnect"?o:typeof h=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):h},set:function(s,u,h){return/^on/.test(u)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(s[u]=h,!0)}})};e.websocketWrapper=r,e.default=e.websocketWrapper})(E0)),E0}var cy;function tp(){if(cy)return An;cy=1;var e=An&&An.__assign||function(){return e=Object.assign||function(k){for(var C,S=1,E=arguments.length;S<E;S++){C=arguments[S];for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(k[T]=C[T])}return k},e.apply(this,arguments)},r=An&&An.__awaiter||function(k,C,S,E){function T(M){return M instanceof S?M:new S(function(O){O(M)})}return new(S||(S=Promise))(function(M,O){function N(B){try{_(E.next(B))}catch(j){O(j)}}function z(B){try{_(E.throw(B))}catch(j){O(j)}}function _(B){B.done?M(B.value):T(B.value).then(N,z)}_((E=E.apply(k,C||[])).next())})},a=An&&An.__generator||function(k,C){var S={label:0,sent:function(){if(M[0]&1)throw M[1];return M[1]},trys:[],ops:[]},E,T,M,O=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return O.next=N(0),O.throw=N(1),O.return=N(2),typeof Symbol=="function"&&(O[Symbol.iterator]=function(){return this}),O;function N(_){return function(B){return z([_,B])}}function z(_){if(E)throw new TypeError("Generator is already executing.");for(;O&&(O=0,_[0]&&(S=0)),S;)try{if(E=1,T&&(M=_[0]&2?T.return:_[0]?T.throw||((M=T.return)&&M.call(T),0):T.next)&&!(M=M.call(T,_[1])).done)return M;switch(T=0,M&&(_=[_[0]&2,M.value]),_[0]){case 0:case 1:M=_;break;case 4:return S.label++,{value:_[1],done:!1};case 5:S.label++,T=_[1],_=[0];continue;case 7:_=S.ops.pop(),S.trys.pop();continue;default:if(M=S.trys,!(M=M.length>0&&M[M.length-1])&&(_[0]===6||_[0]===2)){S=0;continue}if(_[0]===3&&(!M||_[1]>M[0]&&_[1]<M[3])){S.label=_[1];break}if(_[0]===6&&S.label<M[1]){S.label=M[1],M=_;break}if(M&&S.label<M[2]){S.label=M[2],S.ops.push(_);break}M[2]&&S.ops.pop(),S.trys.pop();continue}_=C.call(k,S)}catch(B){_=[6,B],T=0}finally{E=M=0}if(_[0]&5)throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}},o=An&&An.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(An,"__esModule",{value:!0}),An.useWebSocket=void 0;var s=no(),u=jg(),h=Dr(),p=gj(),m=pj(),x=o(mj()),y=ep(),v=function(k,C,S){C===void 0&&(C=h.DEFAULT_OPTIONS),S===void 0&&(S=!0);var E=(0,s.useState)(null),T=E[0],M=E[1],O=(0,s.useState)({}),N=O[0],z=O[1],_=(0,s.useMemo)(function(){if(!C.disableJson&&T)try{return JSON.parse(T.data)}catch{return h.UNPARSABLE_JSON_OBJECT}return null},[T,C.disableJson]),B=(0,s.useRef)(null),j=(0,s.useRef)(null),L=(0,s.useRef)(function(){}),G=(0,s.useRef)(0),Y=(0,s.useRef)(Date.now()),I=(0,s.useRef)([]),Z=(0,s.useRef)(null),re=(0,s.useRef)(C);re.current=C;var X=B.current&&N[B.current]!==void 0?N[B.current]:k!==null&&S===!0?h.ReadyState.CONNECTING:h.ReadyState.UNINSTANTIATED,te=C.queryParams?JSON.stringify(C.queryParams):null,H=(0,s.useCallback)(function(ie,de){var A;if(de===void 0&&(de=!0),h.isEventSourceSupported&&j.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((A=j.current)===null||A===void 0?void 0:A.readyState)===h.ReadyState.OPEN?((0,y.assertIsWebSocket)(j.current,re.current.skipAssert),j.current.send(ie)):de&&I.current.push(ie)},[]),q=(0,s.useCallback)(function(ie,de){de===void 0&&(de=!0),H(JSON.stringify(ie),de)},[H]),ae=(0,s.useCallback)(function(){return re.current.share!==!0||h.isEventSourceSupported&&j.current instanceof EventSource?j.current:(Z.current===null&&j.current&&((0,y.assertIsWebSocket)(j.current,re.current.skipAssert),Z.current=(0,x.default)(j.current,L)),Z.current)},[]);return(0,s.useEffect)(function(){if(k!==null&&S===!0){var ie,de=!1,A=!0,F=function(){return r(void 0,void 0,void 0,function(){var Q,le,he;return a(this,function(me){switch(me.label){case 0:return Q=B,[4,(0,m.getUrl)(k,re)];case 1:return Q.current=me.sent(),B.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),B.current="ABORTED",(0,u.flushSync)(function(){return z(function(fe){return e(e({},fe),{ABORTED:h.ReadyState.CLOSED})})}),[2]):(le=function(fe){de||(0,u.flushSync)(function(){return M(fe)})},he=function(fe){de||(0,u.flushSync)(function(){return z(function(xe){var ve;return e(e({},xe),B.current&&(ve={},ve[B.current]=fe,ve))})})},A&&(ie=(0,p.createOrJoinSocket)(j,B.current,he,re,le,L,G,Y,H)),[2])}})})};return L.current=function(){de||(Z.current&&(Z.current=null),ie?.(),F())},F(),function(){de=!0,A=!1,Z.current&&(Z.current=null),ie?.(),M(null)}}else(k===null||S===!1)&&(G.current=0,z(function(Q){var le;return e(e({},Q),B.current&&(le={},le[B.current]=h.ReadyState.CLOSED,le))}))},[k,S,te,H]),(0,s.useEffect)(function(){X===h.ReadyState.OPEN&&I.current.splice(0).forEach(function(ie){H(ie)})},[X]),{sendMessage:H,sendJsonMessage:q,lastMessage:T,lastJsonMessage:_,readyState:X,getWebSocket:ae}};return An.useWebSocket=v,An}var Bi={},uy;function vj(){if(uy)return Bi;uy=1;var e=Bi&&Bi.__assign||function(){return e=Object.assign||function(p){for(var m,x=1,y=arguments.length;x<y;x++){m=arguments[x];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(p[v]=m[v])}return p},e.apply(this,arguments)};Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.useSocketIO=void 0;var r=no(),a=tp(),o=Dr(),s={type:"empty",payload:null},u=function(p){if(!p||!p.data)return s;var m=p.data.match(/\[.*]/);if(!m)return s;var x=JSON.parse(m);return!Array.isArray(x)||!x[1]?s:{type:x[0],payload:x[1]}},h=function(p,m,x){m===void 0&&(m=o.DEFAULT_OPTIONS),x===void 0&&(x=!0);var y=(0,r.useMemo)(function(){return e(e({},m),{fromSocketIO:!0})},[]),v=(0,a.useWebSocket)(p,y,x),k=v.sendMessage,C=v.sendJsonMessage,S=v.lastMessage,E=v.readyState,T=v.getWebSocket,M=(0,r.useMemo)(function(){return u(S)},[S]);return{sendMessage:k,sendJsonMessage:C,lastMessage:M,lastJsonMessage:M,readyState:E,getWebSocket:T}};return Bi.useSocketIO=h,Bi}var la={},dy;function xj(){if(dy)return la;dy=1;var e=la&&la.__assign||function(){return e=Object.assign||function(h){for(var p,m=1,x=arguments.length;m<x;m++){p=arguments[m];for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(h[y]=p[y])}return h},e.apply(this,arguments)},r=la&&la.__rest||function(h,p){var m={};for(var x in h)Object.prototype.hasOwnProperty.call(h,x)&&p.indexOf(x)<0&&(m[x]=h[x]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,x=Object.getOwnPropertySymbols(h);y<x.length;y++)p.indexOf(x[y])<0&&Object.prototype.propertyIsEnumerable.call(h,x[y])&&(m[x[y]]=h[x[y]]);return m};Object.defineProperty(la,"__esModule",{value:!0}),la.useEventSource=void 0;var a=no(),o=tp(),s=Dr(),u=function(h,p,m){p===void 0&&(p=s.DEFAULT_EVENT_SOURCE_OPTIONS);var x=p.withCredentials,y=p.events,v=r(p,["withCredentials","events"]);m===void 0&&(m=!0);var k=e(e({},v),{eventSourceOptions:{withCredentials:x}}),C=(0,a.useRef)(s.EMPTY_EVENT_HANDLERS);y&&(C.current=y);var S=(0,o.useWebSocket)(h,k,m),E=S.lastMessage,T=S.readyState,M=S.getWebSocket;return(0,a.useEffect)(function(){E?.type&&Object.entries(C.current).forEach(function(O){var N=O[0],z=O[1];N===E.type&&z(E)})},[E]),{lastEvent:E,readyState:T,getEventSource:M}};return la.useEventSource=u,la}var fy;function yj(){return fy||(fy=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var r=tp();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.useWebSocket}});var a=vj();Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return a.useSocketIO}});var o=Dr();Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return o.ReadyState}});var s=xj();Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return s.useEventSource}});var u=ep();Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return u.resetGlobalState}})})(w0)),w0}var bj=yj();const wj=Ed(bj),Sj={ui:'Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;',data:'Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;'},Hd={icons:{weights:{light:1,regular:1.5,heavy:3,strong:5}},form:{button:{xsmall:{height:"20px",padding:"0 10px",iconSize:12},small:{height:"30px",padding:"0 20px",iconSize:14},normal:{height:"40px",padding:"0 20px",iconSize:16},large:{height:"60px",padding:"0 20px",iconSize:20}},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}},sn={easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{faster:"0.085s",fast:"0.175s",normal:"0.35s",slow:"0.7s",slower:"1.4s",slowest:"2.8s"}},rl={small:0,medium:768,large:1024,xlarge:1280,xxlarge:1536},xn={small:`(min-width: ${rl.small}px)`,medium:`(min-width: ${rl.medium}px)`,large:`(min-width: ${rl.large}px)`,xlarge:`(min-width: ${rl.xlarge}px)`,xxlarge:`(min-width: ${rl.xxlarge}px)`},Cj={pageHeader:{introduction:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},areaTitle:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},mainTitle:{textAlign:"left",fontSize:"26px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},form:{label:{meta:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},default:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},disabled:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},failure:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--warning-8)"},"meta(Selected)":{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},tip:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-7)"},button:{secondary:{normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},primary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},danger:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}}},input:{label:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},placeholder:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},compact:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"}},value:{normal:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--grey-12)"},compact:{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-12)"}}},labelInformation:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},select:{option:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"},selectedValue:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--black-11)"},"option(Hover)":{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--primary-11)"}},feedback:{message:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"20px",textDecoration:"none",color:"var(--white-1)"}}},content:{"section-H2":{textAlign:"left",fontSize:"20px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},sectionH3:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},actionParagraph:{textAlign:"left",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},hyperlink:{hover:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-8)"},base:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-9)"}}},feedbackBar:{message:{textAlign:"left",fontSize:"14px",fontWeight:400,lineHeight:"15px",letterSpacing:"-0.2px",textDecoration:"none",color:"var(--white-1)"}},searchBar:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},meta:{tagList:{emptyStates:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"}},item:{normal:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"}}}},table:{columnData:{normalImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},highImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},center:{textAlign:"center",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},left:{textAlign:"left",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"}},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},lowImportance:{right:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},header:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}},subHeader:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}}},filters:{datepicker:{metaHeader:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},calendar:{active:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},otherMonth:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-a8)"},default:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},header:{textAlign:"center",fontSize:"12px",fontWeight:700,textDecoration:"none",color:"var(--grey-a12)"}},monthLink:{default:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-9)"},hover:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--white-1)"}},focusedMonth:{textAlign:"center",fontSize:"20px",fontWeight:400,lineHeight:"20px",letterSpacing:"0.5px",textDecoration:"none",color:"var(--grey-11)"},focusedYear:{textAlign:"center",fontSize:"10px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.3333333px",textDecoration:"none",color:"var(--grey-11)"}},value:{textAlign:"left",fontSize:"14px",fontWeight:500,letterSpacing:"0.2px",textDecoration:"none",color:"var(--grey-11)"},subOption:{label:{textAlign:"left",fontSize:"12px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-a12)"}},presetAction:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},filterButton:{default:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},hover:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"}},searchInput:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"}}},tables:{groupName:{textAlign:"left",fontSize:"12px",fontWeight:400,letterSpacing:"0.3px",textDecoration:"none",color:"var(--grey-a11)"}}},Vn={pureBase:"var(--white-1)",pureTop:"var(--black-1)",divider:"var(--grey-6)",icons:{inverse:"var(--grey-1)",mono:"var(--grey-12)",dimmed:"var(--grey-11)",subtle:"var(--grey-10)",primary:"var(--primary-9)",danger:"var(--warning-9)",white:"var(--white-1)"},menu:{active:"var(--primary-9)",hover:"var(--primary-8)",default:"var(--grey-2)",indicator:"var(--grey-a1)",passive:"var(--primary-a7)"},feedback:{error:"var(--warning-8)",info:"var(--primary-7)",neutral:"var(--grey-9)",success:"var(--success-8)",warning:"var(--caution-10)"},status:{caution:"var(--caution-10)",danger:"var(--warning-8)",folder:"var(--primary-7)",highlight:"var(--primary-7)",good:"var(--success-7)",neutral:"var(--grey-5)"},transparent:"var(--black-a1)",input:{border:{default:"var(--grey-7)"}}},kj={generic:{transparent:{}},form:{input:{default:{normal:{backgroundColor:"var(--grey-1)",borderColor:Vn.input.border.default,border:Vn.input.border.default+" 1px solid"},focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},disabled:{normal:{backgroundColor:"var(--primary-2)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"}},subdivision:{backgroundColor:"var(--grey-7)"},required:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",backgroundColor:"var(--grey-1)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px var(--success-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--success-7)",border:"var(--success-7) 2px solid"},normal:{borderColor:"var(--success-7)",border:"var(--success-7) 1px solid",backgroundColor:"var(--grey-1)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px var(--warning-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--warning-8)",border:"var(--warning-8) 2px solid"},normal:{borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid",backgroundColor:"var(--grey-1)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},seperatedValues:{background:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"},hoverHighlight:{backgroundColor:"var(--primary-7)"}}},button:{primary:{default:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},hover:{backgroundColor:"var(--primary-10)"},active:{backgroundColor:"var(--primary-9)"},divider:{backgroundColor:"var(--primary-a8)"},disabled:{backgroundColor:"var(--primary-a10)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},actionArea:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"}},secondary:{default:{backgroundColor:"var(--grey-9)"},hover:{backgroundColor:"var(--grey-10)"},active:{backgroundColor:"var(--grey-9)"},disabled:{backgroundColor:"var(--grey-a10)"},divider:{backgroundColor:"var(--grey-a8)"},actionArea:{backgroundColor:"var(--grey-9)",backgroundImage:"linear-gradient(135.00deg, var(--grey-9) 0%, var(--grey-8) 100%)"}},danger:{default:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"},hover:{backgroundColor:"var(--warning-10)"},active:{backgroundColor:"var(--warning-9)"},disabled:{backgroundColor:"var(--warning-a10)"},divider:{backgroundColor:"var(--warning-8)"},actionArea:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"}}},switch:{off:{default:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--primary-2) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"}},disabled:{outer:{backgroundColor:"var(--grey-1)",backgroundImage:"linear-gradient(180.00deg, var(--grey-1)0%, var(--grey-1) 100%)",borderColor:"var(--grey-a7)",border:"var(--grey-a7) 1px solid"},inner:{backgroundColor:"var(--grey-7)"}},loading:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--grey-3) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"}}},on:{default:{outer:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(317.51deg, var(--primary-7) 0%, var(--primary-7) 100%)",borderColor:"var(--primary-8)",border:"var(--primary-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},disabled:{outer:{backgroundColor:"var(--primary-5)",backgroundImage:"linear-gradient(180.00deg, var(--primary-5) 0%, var(--primary-5) 100%)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--primary-a7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-a7) 0%, var(--primary-a7) 100%)",borderColor:"var(--primary-a8)",border:"var(--primary-a8) 1px solid"}}},failure:{default:{outer:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-9)",border:"var(--warning-9) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0.4%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},danger:{default:{outer:{backgroundColor:"var(--warning-11)",backgroundImage:"linear-gradient(317.51deg, var(--warning-11) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0%, var(--warning-7) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"}},disabled:{outer:{backgroundColor:"var(--warning-7)",backgroundImage:"linear-gradient(317.51deg, var(--warning-7) 0%, var(--caution-6) 100%)",borderColor:"var(--warning-6)",border:"var(--warning-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},locked:{default:{outer:{backgroundColor:"var(--grey-1) ",backgroundImage:"linear-gradient(180.00deg, var(--grey-1) 0%, var(--grey-1) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--grey-8)"}}}},checkbox:{unchecked:{disabled:{backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 2px solid"},default:{borderColor:"var(--grey-9)",border:"var(--grey-9) 2px solid"},hover:{borderColor:"var(--primary-8)",border:"var(--primary-8) 2px solid"}},checked:{disabled:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--grey-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"},hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"}},indeterminate:{hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"}}}},indicators:{spinner:{danger:{base:{borderColor:"var(--warning-8)",border:"var(--warning-8) 3px solid"},top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"}},secondary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-8)",border:"var(--grey-8) 3px solid"}},primary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--primary-6)",border:"var(--primary-6) 3px solid"}},simple:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-a8)",border:"var(--grey-a8) 3px solid"}}}},filters:{dropdownContainer:{background:{boxShadow:"0px 5px 25px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 1px solid"},topBorder:{backgroundColor:"var(--primary-7)"}},filterButton:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid",textColor:"var(--grey-11)"},active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"},hover:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"}},searchInput:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"},focused:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"}}},tables:{loadingOverlay:{backgroundColor:"var(--grey-2)",backgroundImage:"linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"},rows:{divider:{backgroundColor:Vn.divider}},header:{groupLine:{backgroundColor:Vn.divider},divider:{backgroundColor:Vn.divider},sortable:{hover:{backgroundColor:"var(--grey-4)"},default:{backgroundColor:"var(--grey-2)"}}}},general:{divider:{backgroundColor:Vn.divider}},feedbackBar:{neutral:{backgroundColor:Vn.feedback.neutral},error:{backgroundColor:Vn.feedback.error},info:{backgroundColor:Vn.feedback.info},success:{backgroundColor:Vn.feedback.success},warning:{backgroundColor:Vn.feedback.warning}},filterButton:{active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}}},Ej={lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(204.8,53.4%,46.3%,100%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(120deg, 81%, 70%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},point:{fill:"hsla(120deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(0deg, 86%, 70%, 100%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},point:{fill:"hsla(0, 45%, 90%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}},oc={fontFamily:Sj,dimensions:Hd,typography:Cj,colors:Vn,styles:kj,animation:sn,custom:Ej,deviceSize:rl,deviceMediaQuery:xn},jj=D`
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

      @media ${xn.xlarge}{
        --content-layout-padding-top: 32px;
        --content-layout-padding-right: 96px;
        --content-layout-padding-bottom: 64px;
        --content-layout-padding-left: 96px;
        --utility-header-padding-top: 48px;
      }

      @media ${xn.xxlarge}{
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
`,Tj=D`
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
`,$j=D`
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

`,Mj=p7`

  ${jj};
  ${Tj};
  ${$j};

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

`,Lj=D`

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

`,Zb=D`

  line-height: 0;

  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
      transition: stroke var(--speed-normal) var(--easing-primary-out);
    }
  }
`,$e=b.div`
  ${Zb};
`,Oj=b.g`
  ${Zb};
`,Se=({icon:e,size:r=24,weight:a="regular",color:o="grey-12",forSvgUsage:s=!1})=>{const u=Hd.icons.weights[a],h=bb[e];return h!=null?s?c.jsx(Oj,{children:h({size:r,weight:u,color:`var(--${o}, var(--grey-12))`})}):c.jsx($e,{children:h({size:r,weight:u,color:`var(--${o}, var(--grey-12))`})}):null},Du=b.div`
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
`,Aj=b.div`
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
`,hy=({title:e="Placeholder"})=>c.jsxs(Aj,{children:[e,c.jsx(Du,{className:"t l",style:{transform:"rotate(-90deg)"}}),c.jsx(Du,{className:"t r",style:{transform:"rotate(0deg)"}}),c.jsx(Du,{className:"b r",style:{transform:"rotate(90deg)"}}),c.jsx(Du,{className:"b l",style:{transform:"rotate(180deg)"}})]});D`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`;D`
  display: flex;
  flex-direction: column;
`;const ct=D`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`,lc=D`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`,yl=D`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,zj=b.button`
  ${ct};
  ${({$selected:e=!1})=>e&&D`
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
`,Xb=b.div`
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

  ${$e} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,Rj={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},_j=b.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,ga=({type:e="info",message:r,hideCloseButton:a=!1})=>{const[o,s]=f.useState(!1);return f.useEffect(()=>{s(!1)},[r]),r&&!o?c.jsxs(Xb,{$type:e,children:[c.jsx(Se,{icon:Rj[e],color:"inverse"}),c.jsx(_j,{children:r}),!a&&c.jsx(zj,{onClick:()=>s(!0),children:c.jsx(Se,{icon:"CloseCompact",color:"inverse"})})]}):null},Dj=mr`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
`,Nj=mr`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -100%);
  }
`,Bj=b.div`
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
  background-color: ${({$type:e})=>`var(--${e})`};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);

  animation: ${Dj} var(--speed-slow) var(--easing-primary-in-out);

  ${({$isClosing:e})=>e&&D`
    animation: ${Nj} var(--speed-normal) var(--easing-primary-in-out);
    `};

  ${$e} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,Hj={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},Uj=b.div`
  ${ct};
  ${({$selected:e=!1})=>e&&D`
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
`,Ij=b.button`
  ${ct};
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
`,Pj=b.div`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`,Gj=({id:e,type:r="info",message:a,icon:o="",isPinned:s=!1,actionTextButton:u,closeNow:h=!1,closeCallback:p,onTextButtonClick:m})=>{const[x,y]=f.useState(!1),[v,k]=f.useState(!1),[C,S]=f.useState(!1);f.useEffect(()=>{y(!1),k(!1),S(!1)},[e]);const E=f.useCallback(()=>{k(!0)},[]),T=f.useCallback(async()=>{S(!0),E()},[E]),M=f.useCallback(()=>{v&&(y(!0),m&&C&&m(),p&&p())},[v,p,m,C]);return f.useEffect(()=>{let O=!0;return s||setTimeout(()=>{O&&E()},7e3),()=>{O=!1}},[s,a,E,e]),f.useEffect(()=>{h&&E()},[h,E]),a&&!x?tc.createPortal(c.jsxs(Bj,{$type:r,$isClosing:v,onAnimationEnd:M,children:[c.jsx(Se,{icon:o||Hj[r],color:"inverse"}),c.jsx(Pj,{children:a}),u?c.jsxs(Ij,{onClick:()=>T(),children:[u," "]}):c.jsx(Uj,{onClick:()=>E(),children:c.jsx(Se,{icon:"CloseCompact",color:"inverse"})})]}),document.body):null},Ft=8,en=16,Yn=b.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${Ft}px solid transparent;
  border-right: ${Ft}px solid transparent;
  border-bottom: ${Ft}px solid ${({$type:e})=>`var(--tooltip-${e}-arrow)`};
`,qj=b.div`
  position: absolute;
  display: flex;
  ${({$maxWidth:e})=>e&&D` max-width: ${e}`};
  ${({$directionStyle:e})=>e&&D`${e}`};
`,Fj=b.div`
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

  ${$e} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Wj=(e,r)=>{const{left:a,top:o,width:s,height:u}=r,h=o+window.scrollY,p=a+window.scrollX;switch(e){case"bottom-right":return`
              flex-direction: column;
              top: ${h+u}px;
              left: ${p-Ft-en+s/2}px;
              ${Yn} {
                margin-left: ${en}px;
              }
            `;case"bottom-left":return`
              flex-direction: column;
              align-items: end;
              top: ${h+u}px;
              left: ${p+Ft+en+s/2}px;
              transform: translateX(-100%);
              ${Yn} {
                margin-right: ${en}px;
              }
            `;case"right-bottom":return`
              flex-direction: row;
              top: ${h-Ft/2-en+u/2}px;
              left: ${p+s}px;
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Ft/2}px;
                margin-top: ${en}px;
              }
            `;case"right":return`
              flex-direction: row;
              align-items: center;
              top: ${h+u/2}px;
              left: ${p+s}px;
              transform: translateY(-50%);
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Ft/2}px;
              }
            `;case"right-top":return`
              flex-direction: row;
              align-items: end;
              top: ${h+Ft/2+en+u/2}px;
              left: ${p+s}px;
              transform: translateY(-100%);
              ${Yn} {
                transform: rotate(-90deg);
                margin-right: -${Ft/2}px;
                margin-bottom: ${en}px;
              }
            `;case"left-bottom":return`
              flex-direction: row-reverse;
              top: ${h-Ft/2-en+u/2}px;
              left: ${p}px;
              transform: translateX(-100%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Ft/2}px;
                margin-top: ${en}px;
              }
            `;case"left":return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${h+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -50%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Ft/2}px;
              }
            `;case"left-top":return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${h+Ft/2+en+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -100%);
              ${Yn} {
                transform: rotate(90deg);
                margin-left: -${Ft/2}px;
                margin-bottom: ${en}px;
              }
            `;case"top-right":return`
              flex-direction: column-reverse;
              top: ${h}px;
              left: ${p-Ft-en+s/2}px;
              transform: translateY(-100%);
              ${Yn} {
                transform: rotate(180deg);
                margin-left: ${en}px;
              }
            `;case"top":return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${h}px;
              left: ${p+s/2}px;
              transform: translate(-50%, -100%);
              ${Yn} {
                transform: rotate(180deg);
              }
            `;case"top-left":return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${h}px;
              left: ${p+Ft+en+s/2}px;
              transform: translate(-100%, -100%);
              ${Yn} {
                transform: rotate(180deg);
                margin-right: ${en}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${h+u}px;
            left: ${p+s/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},Vj=(e,r,a)=>{const o=e.left+(r||0)+30>window.innerWidth,s=e.bottom+(a||0)>window.innerHeight,u=e.left-(r||0)<0,h=e.top-(a||0)<0;return h&&o&&s?"left":h&&u&&s?"right":h&&u?"bottom-right":h&&o?"bottom-left":s&&u?"top-right":s&&o?"top-left":u?"right":o?"left":s?"top":"bottom"},Yj=({icon:e,message:r,type:a,tooltipFor:o,tooltipPosition:s,maxWidth:u})=>{const[h,p]=f.useState(null),[m,x]=f.useState(!1),[y,v]=f.useState("top"),k=f.useRef(null),C=f.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T),x(!0),v(Vj(T,o.current.offsetWidth,o.current.offsetHeight))}},[o]),S=f.useCallback(()=>{x(!1)},[]),E=f.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T)}},[o]);return f.useEffect(()=>{let T=null;return o&&o.current&&(T=o.current,o.current.addEventListener("mouseover",C),o.current.addEventListener("mouseout",S),E()),()=>{T&&(T.removeEventListener("mouseover",C),T.removeEventListener("mouseout",S))}},[S,C,o,E]),!m||!h?null:tc.createPortal(c.jsxs(qj,{ref:k,$maxWidth:u,$directionStyle:Wj(s||y,h),children:[c.jsx(Yn,{$type:a||"neutral"}),c.jsxs(Fj,{$type:a||"neutral",children:[e&&c.jsx(Se,{icon:e,size:16,color:"white-a12"}),r]})]}),document.body)},Zj=e=>mr`
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
  `,Xj=b.button`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({$noPadding:e,$isOutline:r})=>e?D`
      padding: 0px;
    `:D`
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

  ${({$shadow:e})=>e?D`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  `:D`
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

    ${({$shadow:e})=>e?D`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    `:D`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow:e})=>D`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${()=>Zj(e)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading:e})=>e&&D`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`,st=({design:e="primary",size:r="normal",shadow:a=!1,noPadding:o=!1,loading:s=!1,children:u,formAction:h,...p})=>(e==="danger"&&console.warn("Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead."),c.jsx(Xj,{type:"button",$isOutline:e==="outline",className:`button-design-${e} button-size-${r}`,$design:e,$size:r,$noPadding:o,$shadow:a,$loading:s,...p,children:c.jsx(c.Fragment,{children:u})})),Qb=e=>2*3.1416*e,Qj=e=>{const r=Qb(e);return mr`
    0% {
      stroke-dashoffset: -${r*.85};
    }
    50% {
      stroke-dashoffset: -${r*.5};
    }
    100% {
      stroke-dashoffset: -${r*.85};
    }
  `},Kj=mr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Jj=b.circle`
  stroke: ${({$styling:e,$customColor:r})=>r||`var(--spinner-${e}-base, var(--grey-a8))`};
  fill: none;
`,eT=b.circle`
  stroke: ${({$styling:e,$customColor:r})=>r||`var(--spinner-${e}-top, var(--white-1))`};
  fill: none;
  stroke-dasharray: ${({r:e})=>Qb(e)};
  stroke-dashoffset: ${({r:e})=>2*3.1416*e/2};
  animation:
    ${({r:e})=>Qj(e)} 4s linear infinite,
    ${Kj} 1s linear infinite;
  stroke-linecap: round;
`,gy=e=>e==="primary"||e==="secondary"||e==="warning"?e:e==="danger"?(console.warn("Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead."),"danger"):"simple",tT={xsmall:12,small:16,medium:24,large:36,xlarge:48},vr=({size:e="medium",styling:r="primary",custom:a={}})=>{const{baseColor:o,topColor:s}=a,u=a?.size?a.size:tT[e],h=u/5.333,p=u/2-h/2;return c.jsxs("svg",{viewBox:`-${u/2} -${u/2} ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg",children:[c.jsx(Jj,{cx:"0",cy:"0",r:p,strokeWidth:h,$styling:gy(r),$customColor:o}),c.jsx(eT,{cx:"0",cy:"0",r:p,strokeWidth:h,$styling:gy(r),$customColor:s})]})},nT=b.div`
  display: inline;
`,rT=b.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);
  transition: padding var(--speed-slow) var(--easing-primary-in-out);
  font-weight: ${({$weight:e})=>e==="light"?"500":"600"};
`,Xi=b.div`
  opacity: 1;
`,og=b.div`
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
`,aT=b.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({$position:e})=>D`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  ${Xi}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${Xi}, ${og}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({$loading:e})=>e&&D`
    border-color: var(--button-loading-area-divider-color);

    ${og}{
      opacity: 1;
    }

    ${Xi}{
      opacity: 0;
    };
  `};

`,iT=b.div`
  display: flex;
  height: inherit;

  &:hover {
    ${({$disabled:e})=>!e&&D`
      ${Xi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({$disabled:e})=>!e&&D`
      ${Xi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({$disabled:e})=>e&&D`
    ${Xi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`,np=({design:e="primary",size:r="normal",loading:a=!1,shadow:o=!1,onClick:s,disabled:u,position:h,icon:p,weight:m="regular",children:x,...y})=>c.jsx(nT,{children:c.jsx(st,{noPadding:!0,disabled:u||a,design:e,size:r,shadow:o,onClick:s,loading:a,...y,children:c.jsxs(iT,{$disabled:u,children:[c.jsx(rT,{$size:r,$position:h,$weight:m,children:c.jsx(c.Fragment,{children:x})}),c.jsxs(aT,{$loading:a,$position:h,children:[c.jsx(Xi,{children:c.jsx(Se,{icon:p,weight:m})}),c.jsx(og,{children:c.jsx(vr,{size:r==="xsmall"||r==="small"?"xsmall":"small",styling:e})})]})]})})}),oT=b.div`
  display: inline;
`,lT=b.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,lg=b.div`
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

  ${({$position:e})=>D`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  svg {
    display:block;
  }
`,sT=b.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?D`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${lg}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:D`
    ${lg}{
      flex: 0 0 0px;
    }
  `}
`,rp=({design:e="primary",size:r="normal",shadow:a=!1,onClick:o,disabled:s,position:u,loading:h=!1,children:p,...m})=>c.jsx(oT,{children:c.jsx(st,{noPadding:!0,disabled:s||h,design:e,size:r,shadow:a,onClick:o,loading:h,...m,children:c.jsxs(sT,{$loading:h,$design:e,$size:r,children:[c.jsx(lT,{children:c.jsx(c.Fragment,{children:p})}),c.jsx(lg,{$design:e,$position:u,children:c.jsx(vr,{size:r==="xsmall"||r==="small"?"xsmall":"small",styling:e})})]})})}),cT=b.button`
  ${ct};
  [stroke]{
    stroke: ${({$color:e})=>e};
  }
  &:hover {
    ${$e} {
      [stroke]{
        stroke: ${({$hoverColor:e})=>e};
      }
    }
  }
`,Kb=({icon:e,size:r=20,weight:a="regular",color:o="dimmed",hoverColor:s="mono",children:u,formAction:h,...p})=>c.jsx(cT,{type:"button",$color:o,$hoverColor:s,...p,children:c.jsx(Se,{icon:e,size:r,weight:a})}),py=b(Kb)``;b.div`
  display: flex;
  ${py} {
    margin-left: 15px;
  }
  ${py}:first-child {
    margin-left: 0px;
  }

  ${({$alignment:e})=>e==="left"&&D`
    justify-content: flex-start;
  `};

  ${({$alignment:e})=>e==="center"&&D`
    justify-content: center;
  `};

  ${({$alignment:e})=>e==="right"&&D`
    justify-content: flex-end;
  `};
`;const uT=b.div`
  position: absolute;
  right: 0;
  top: 0;
`,dT=b.button.attrs({type:"button"})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,Jb=b.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,fT=b.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,hT=b.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${$e} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,pd=b.input`
  ${lc};

  ${({$fieldState:e})=>D`
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
`,gT=b.div`

  flex: 1;
  position: relative;

  ${({$hasAction:e})=>e&&D`
    ${pd}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,pT=b.div`
  ${({$fieldState:e,$showFeedback:r})=>D`

    display: flex;
    position: relative;
    flex-direction: row;

    ${pd}{

      &:disabled {
        cursor: not-allowed;
      }

      ${["default","disabled"].indexOf(e)===-1&&r&&D`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${Jb} {
      ${["default","disabled"].indexOf(e)!==-1&&D`
        display: none;
      `};
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);
    }

    &:focus-within ${pd} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
    }
  `}

`,ap=({type:e="text",placeholder:r="",defaultValue:a,fieldState:o="default",showFeedback:s=!1,feedbackMessage:u,actionCallback:h,actionIcon:p,postfix:m,children:x,formAction:y,...v})=>{const k=h!==void 0,C=S=>{switch(S){case"default":break;case"disabled":break;case"required":return c.jsx(Se,{icon:"Required",size:16});case"valid":return c.jsx(Se,{icon:"Success",size:16});case"invalid":return c.jsx(Se,{icon:"Invalid",size:16});case"processing":return c.jsx(vr,{size:"medium",styling:"primary"})}};return c.jsxs(pT,{$fieldState:o||"default",$showFeedback:s,children:[c.jsxs(gT,{$hasAction:k,children:[c.jsx(pd,{$fieldState:o||"default",disabled:o==="disabled"||o==="processing",type:e,placeholder:r,defaultValue:a,...v}),k?c.jsx(uT,{children:c.jsx(dT,{onClick:h,children:c.jsx(Se,{icon:p||"NoIcon",color:"primary"})})}):null]}),o&&s?c.jsxs(Jb,{children:[c.jsx(hT,{children:C(o)}),u?c.jsx(fT,{children:u}):null]}):null]})},e5=b.span`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  ${({$required:e})=>e&&D`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
    }
  `}
`,Ud=b.label`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({$direction:e})=>e&&D`
    flex-direction: ${e};
    ${["row","row-reverse"].includes(e)&&D`
      display: inline-flex;
      
      ${e5}{
        align-self: center;
      }
    `}
  `}
`,Wt=({htmlFor:e,labelText:r,direction:a="column",rightAlign:o=!1,required:s=!1,children:u,...h})=>(o&&(console.warn("Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction='row-reverse'` instead."),a="row-reverse"),c.jsx(Ud,{htmlFor:e,$direction:a,...h,children:c.jsxs(c.Fragment,{children:[c.jsx(e5,{$required:s,children:r}),u]})})),mT=b.input`
  ${lc};

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
`,vT=b.div`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({$fieldState:e})=>D`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({$hasAction:e})=>e&&D`
    ${mT}{
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

  ${({$fieldState:e})=>e&&D`
    &:focus-within ${vT} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${e}-focused-shadow-color, var(--input-${e}-shadow-color));
    }
  `};
`;const xT=e=>{switch(e){case 0:return"off";case 1:return"on";case 2:return"neutral";case 3:return"locked";default:return"off"}},yT=b.input`
  display: none;
`,t5=b.div`
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
`,sg=b.div`
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
`,bT=b.span``,cg=b.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`,wT=b.div``,ST=b(Ud)`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${t5}{
    ${({$activeTheming:e,$themeState:r})=>D`
      border-color: var(--switch-${r}-${e}-border);
      background-color: var(--switch-${r}-${e}-background);
    `};

    ${({$activeTheming:e})=>e==="locked"&&D`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({$activeTheming:e})=>e==="failure"&&D`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming:e,$loading:r})=>r&&D`
      background-color: var(--switch-default-${e}-background);
      border-color: var(--switch-default-${e}-border);
    `};

  }

  ${sg}{
    ${({$activeTheming:e,$themeState:r})=>D`
      background-color: var(--switch-${r}-${e}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({$activeTheming:e})=>e==="locked"&&D`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${cg} svg {
        transform: translateX(-1px);
      }
    `}

    ${({$activeTheming:e})=>e==="failure"&&D`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming:e,$loading:r})=>r&&D`
      border-color: var(--switch-default-${e}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${sg}{
      left: ${({$useIntent:e,$position:r})=>e&&r===0&&"calc(var(--position-off) + var(--switch-intent-offset))"||e&&r===1&&"calc(var(--position-on) - var(--switch-intent-offset))"};
    }
  }
`,CT=e=>e==="default"||e==="loading"||e==="locked"||e==="disabled"||e==="failure",pl=({state:e="default",leftTheme:r="off",rightTheme:a="on",labelText:o,onChangeCallback:s,checked:u,defaultChecked:h=!1})=>{const p=u!==void 0,m=p?u:h,x=m?1:0,y=m?a:r,[v,k]=f.useState(h),C=f.useRef(null),S=f.useRef(null),[E,T]=f.useState(x),[M,O]=f.useState(y),[N,z]=f.useState("default"),[_,B]=f.useState(!1),[j,L]=f.useState(0),G=f.useCallback(()=>{p?(T(u?1:0),O(u?a:r)):C.current&&(C.current.checked=v,T(v?1:0),O(v?a:r))},[u,p,v,r,a]);f.useEffect(()=>{G()},[G]);const Y=f.useCallback(()=>{p?(T(u?1:0),O(u?a:r)):(T(v?1:0),O(v?a:r))},[u,p,r,a,v]),I=f.useCallback(()=>{if(!(e==="locked"||e==="disabled")){if(p)s?.(!u);else{const re=!v;k(re),s?.(re)}Y()}},[p,u,v,s,e,Y]),Z=f.useCallback(()=>{E===1?O(a):E===0&&O(r)},[E,a,r]);return f.useEffect(()=>{Z()},[r,a,Z]),f.useEffect(()=>{CT(e)&&z(kT(e))},[e,z]),f.useEffect(()=>{e==="locked"?(T(3),O("locked")):e==="failure"?(T(2),O("failure")):Y()},[e,T,Y]),f.useEffect(()=>{S.current&&L(parseInt(getComputedStyle(S.current).getPropertyValue("--switch-inner-size")))},[S]),c.jsxs(ST,{onChange:I,onMouseLeave:()=>B(!1),$activeTheming:M,$loading:e==="loading",$useIntent:!_&&(e==="default"||e==="failure"),$themeState:N,$position:E,$checked:C.current?.checked,children:[c.jsx(t5,{children:c.jsxs(sg,{$position:xT(E),ref:S,children:[e==="failure"?c.jsx(cg,{children:c.jsx(Se,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})}):null,e==="locked"?c.jsx(cg,{children:c.jsx(Se,{icon:"Locked",color:"switch-special-locked-icon",size:12,weight:"regular"})}):null,e==="loading"&&j>0?c.jsx(wT,{children:c.jsx(vr,{styling:"simple",custom:{size:j}})}):null]})}),o?c.jsx(bT,{children:o}):null,c.jsx(yT,{ref:C,type:"checkbox",disabled:e!=="default"&&e!=="failure",defaultChecked:p?u:h})]})},kT=e=>{switch(e){case"locked":return"default";case"failure":return"default";default:return e}};function n5(e){return c.jsxs("svg",{width:35,height:35,...e,children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%",children:[c.jsx("stop",{offset:"0%",stopColor:"#7DB8DB"}),c.jsx("stop",{offset:"100%",stopColor:"#5CA0D1"})]})}),c.jsxs("g",{fill:"none",fillRule:"evenodd",children:[c.jsx("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),c.jsx("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})]})]})}function ET(e){return c.jsx("svg",{width:71,height:30,...e,children:c.jsx("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"})})}function r5(e){return c.jsx("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z",fill:"none",fillRule:"evenodd",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})})}function jT(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"55",height:"60",fill:"none",viewBox:"5 80 300 174",children:[c.jsx("path",{fill:"#F0F0F0",d:"M0 0H320V240H0z"}),c.jsx("path",{fill:"#656565",d:"M113.8 112.087V130h-1.212c-.192 0-.355-.033-.488-.1a1.246 1.246 0 01-.375-.338l-10.362-13.5a16.889 16.889 0 01.05 1.175V130h-2.126v-17.913h1.251c.108 0 .2.009.275.025.075.009.141.03.2.063a.589.589 0 01.175.125c.058.05.12.117.187.2l10.363 13.487-.05-.625a13.596 13.596 0 01-.013-.587v-12.688h2.125zm21.129 8.963c0 1.342-.212 2.575-.637 3.7a8.463 8.463 0 01-1.8 2.887 8.102 8.102 0 01-2.8 1.888c-1.084.442-2.284.663-3.6.663-1.317 0-2.517-.221-3.6-.663a8.119 8.119 0 01-2.788-1.888 8.463 8.463 0 01-1.8-2.887c-.425-1.125-.637-2.358-.637-3.7s.212-2.571.637-3.688c.425-1.125 1.025-2.091 1.8-2.9a8.052 8.052 0 012.788-1.9c1.083-.45 2.283-.675 3.6-.675 1.316 0 2.516.225 3.6.675a8.035 8.035 0 012.8 1.9c.775.809 1.375 1.775 1.8 2.9.425 1.117.637 2.346.637 3.688zm-2.487 0c0-1.1-.15-2.088-.45-2.963-.3-.875-.725-1.612-1.275-2.212a5.504 5.504 0 00-2-1.4c-.784-.325-1.659-.488-2.625-.488-.959 0-1.829.163-2.613.488a5.618 5.618 0 00-2.012 1.4c-.55.6-.975 1.337-1.275 2.212-.3.875-.45 1.863-.45 2.963s.15 2.087.45 2.962c.3.867.725 1.605 1.275 2.213a5.687 5.687 0 002.012 1.387c.784.317 1.654.475 2.613.475.966 0 1.841-.158 2.625-.475a5.57 5.57 0 002-1.387c.55-.608.975-1.346 1.275-2.213.3-.875.45-1.862.45-2.962zM147.22 130h-2.425v-17.913h2.425V130zm23.22-17.913V130h-2.125v-13.163c0-.175.004-.362.012-.562l.05-.613-6.15 11.2c-.192.375-.483.563-.875.563h-.35c-.392 0-.683-.188-.875-.563l-6.275-11.25c.05.442.075.85.075 1.225V130h-2.125v-17.913h1.788c.216 0 .383.021.5.063.116.042.229.158.337.35l6.188 11.025c.1.2.195.408.287.625.1.217.192.437.275.662.083-.225.171-.445.263-.662.091-.225.191-.438.3-.638l6.075-11.012c.1-.192.208-.308.325-.35a1.66 1.66 0 01.512-.063h1.788zm14.092 11.263l-2.812-7.288a14.972 14.972 0 01-.263-.75c-.091-.291-.179-.6-.262-.925a13.51 13.51 0 01-.538 1.688l-2.812 7.275h6.687zm5.05 6.65h-1.875c-.216 0-.391-.054-.525-.163a1 1 0 01-.3-.412l-1.675-4.325h-8.037l-1.675 4.325a.878.878 0 01-.288.4.794.794 0 01-.525.175h-1.875l7.163-17.913h2.45L189.582 130zm16.443-8.613v6.875c-.9.65-1.862 1.138-2.887 1.463-1.017.317-2.134.475-3.35.475-1.442 0-2.742-.221-3.9-.663-1.159-.45-2.15-1.075-2.975-1.875a8.282 8.282 0 01-1.888-2.9c-.442-1.125-.662-2.362-.662-3.712 0-1.367.212-2.613.637-3.738.433-1.125 1.046-2.087 1.838-2.887.791-.808 1.754-1.433 2.887-1.875 1.133-.442 2.4-.663 3.8-.663.708 0 1.367.055 1.975.163.608.1 1.171.25 1.688.45.516.192.995.429 1.437.712a8.5 8.5 0 011.238.938l-.688 1.1a.739.739 0 01-.425.325c-.167.042-.354 0-.562-.125-.2-.117-.43-.258-.688-.425a5.555 5.555 0 00-.95-.475 7.037 7.037 0 00-1.312-.4c-.5-.108-1.096-.163-1.788-.163-1.008 0-1.921.167-2.737.5a5.683 5.683 0 00-2.088 1.413c-.575.608-1.017 1.35-1.325 2.225-.308.867-.462 1.842-.462 2.925 0 1.125.158 2.133.475 3.025.325.883.783 1.637 1.375 2.262a5.955 5.955 0 002.175 1.413c.85.325 1.804.487 2.862.487.833 0 1.571-.091 2.213-.275a9.829 9.829 0 001.9-.787v-3.938h-2.788a.549.549 0 01-.387-.137.459.459 0 01-.138-.338v-1.375h5.5zm14.762 6.638l-.013 1.975h-11.037v-17.913h11.037v1.975h-8.612v5.95h6.975v1.9h-6.975v6.113h8.625z"})]})}const TT=b.input`
  display: none;
`,ur=b.div`
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
`,$T=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,ug=b.div`
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
`,MT=b.label`
  display: inline-block;
  user-select: none;
  ${ur}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }

  ${({$visualState:e,$disabled:r})=>e==="off"&&D`
    /* Unchecked */
    ${ur}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!r&&D`
      &:hover ${ur} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`};

    /* Unchecked - Disabled */
    ${r&&D`
      ${ur}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({$visualState:e,$disabled:r})=>e==="on"&&D`
    /* Checked */
    ${ur}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!r&&D`
      &:hover ${ur}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`};

    /* Checked - Disabled */
    ${r&&D`
      ${ur}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${ug}{
        opacity: 0.65;
      }
    `}
  `}

  ${({$visualState:e,$disabled:r})=>e==="indeterminate"&&D`
    ${ur}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!r&&D`
      &:hover ${ur}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${r&&D`
      ${ur}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${ug}{
        opacity: 0.65;
      }
    `}

  `}

`,ip=({indeterminate:e=!1,disabled:r,checked:a=!1,onChangeCallback:o})=>{const[s,u]=f.useState(a),[h,p]=f.useState(a?"on":"off"),m=y=>{const v=y.target.checked;u(v),o&&o(v)};f.useEffect(()=>{p(a?"on":"off")},[a,s,p]),f.useEffect(()=>{u(a)},[a,u]);const x=Hd.icons.weights.regular;return c.jsxs(MT,{onChange:m,$disabled:r,$visualState:h,children:[c.jsx(ur,{children:c.jsx($T,{children:h==="on"?c.jsx(ug,{$color:"input-toggle-icon-color",children:c.jsx(r5,{color:"input-toggle-icon-color",stroke:"inverse",size:12,weight:x})}):null})}),c.jsx(TT,{type:"checkbox",checked:s,readOnly:!0,disabled:r})," "]})},Nu=b.div`
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

  ${({$isChecked:e,$disabled:r})=>D`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!r&&D`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!r&&D`
      border-color: var(--input-toggle-checked-border-color);
      ${Nu} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!r&&D`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${Nu} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&r&&D`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${Nu} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&r&&D`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${Nu} {
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
`;const LT=b.textarea`

  ${({$fieldState:e})=>D`
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
`,my=b.div`
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
  ${({$fieldState:e,$showFeedback:r})=>D`
    display: flex;
    position: relative;
    flex-direction: column;

    ${LT}{
      ${["default","disabled"].indexOf(e)===-1&&r&&D`
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

    ${my} {
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);

      ${["default","disabled"].indexOf(e)!==-1&&D`
        display:none;
      `}
    }

    &:focus-within ${my} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`;const OT=b.div`
  position: relative;
  display: flex;
  width: 100%;
`,AT=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({$isCompact:e})=>e?"14px":"16px"};
  pointer-events: none;
`;b.div`
  position: absolute;
  left: ${({$isCompact:e})=>e?"10px":"12px"};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;const zT=b.select`
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

  ${({$fieldState:e})=>D`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};


  ${({$isCompact:e,$withIcon:r})=>e?D`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${r?"30px":"8px"};

    ${AT}{
      right: 14px;
    }
  `:D`
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

  ${({$activePlaceholder:e})=>e&&D`
    ${zT} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`;const a5=e=>{const r=e.split("/").filter(String);return r.length>0?"/"+r[0]:"/"},RT=()=>String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,""),vy=e=>{const r=Number(e);return r!==r},_T=(e,r)=>e===null&&r===null||e===void 0&&r===null?!0:md(e)&&md(r)?Us(e?.start,r?.start)&&Us(e?.end,r?.end):e instanceof Date&&r instanceof Date?Us(e,r):!1,md=e=>e==null||e.start===null||e.start===void 0||e.end===null||e.end===void 0?!1:e.start instanceof Date&&e.end instanceof Date,Xs=16;b.div`
  font-family: ${({theme:e})=>e.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({$disabled:e})=>e&&D`
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
  left: ${Xs/2}px;
  top: 10px;
  width: calc(100% - ${Xs}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, var(--grey-10), var(--primary-10) 98%);
`;b.span`
  position: absolute;
  top: -3px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: var(--primary-11);
`;b.span`
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

  ${({$alignment:e})=>e==="center"&&D`transform: translateX(-50%);;`}
  ${({$alignment:e})=>e==="right"&&D`transform: translateX(5%);`}
  ${({$alignment:e})=>e==="left"&&D`transform: translateX(-95%);`}
`;b.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${Xs}px);
  height: 2px;
`;const DT=b.span`
  width: ${Xs}px;
  height: ${Xs}px;
  border-radius: 8px;
  background-color: ${({theme:e,$bgColor:r})=>e.colors.feedback[r]};
  position: absolute;
  top: -7.5px;
  left: ${({$leftValue:e})=>`${e}%`};
`;b(DT)`
  opacity: .5;
`;const NT=b.div``,BT=b.input`
  display: none;
`,HT=({text:e,buttonDesign:r,buttonSize:a,inputCallback:o,children:s,formAction:u,...h})=>{const p=f.useRef(null),m=f.useCallback(async y=>{if(!(y.target.files&&y.target.files.length>0))return;const v=y.target.files;o&&o(v),y.target.value=""},[o]),x=f.useCallback(()=>{p.current&&p.current.click()},[]);return c.jsxs(NT,{children:[c.jsx(BT,{...h,ref:p,type:"file",onChange:m}),c.jsx(st,{style:{textAlign:"center"},onClick:x,design:r,size:a,children:e})]})};b.div``;b.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`;b(Wt)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`;const i5=D`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`;b.div`
  ${i5};
`;b.div`
  display: flex;
`;b.div`
  display: flex;
  align-items: center;
  ${i5};
  span {
    font-style: normal;
  }
`;b.div``;b.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({$allMarkCentered:e})=>e?"padding: 0;":"padding: 0 6px;"};
`;b(Wt)`
  font-family: ${({theme:e})=>e.fontFamily.data};
`;const op=({name:e,label:r,fieldState:a,feedbackMessage:o,required:s,children:u,formAction:h,...p})=>{const[m,x]=f.useState(!1),[y,v]=f.useState("PasswordHide"),k=()=>{const C=!m;x(C),v(C?"PasswordShow":"PasswordHide")};return c.jsx(Wt,{htmlFor:e,labelText:r,required:s,children:c.jsx(ap,{type:m?"text":"password",actionCallback:k,actionIcon:y,name:e,fieldState:a,feedbackMessage:o,required:s,...p})})},_t=({name:e,label:r,fieldState:a="default",feedbackMessage:o,required:s,type:u,...h})=>c.jsx(Wt,{htmlFor:e,labelText:r,required:s,children:c.jsx(ap,{type:"text",fieldState:a,feedbackMessage:o,required:s,name:e,...h})}),UT=b.div`
  ${({$height:e})=>e?`height: ${e}`:null};
  position: relative;
`,IT=b.div`
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({$inDropZone:e})=>e?"dashed var(--grey-8) 2px":null};
`,PT=({height:e,text:r,dropCallback:a,...o})=>{const[s,u]=f.useState(!1),h=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!0)},[]),p=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!1)},[]),m=f.useCallback(v=>{v.preventDefault(),v.stopPropagation()},[]),x=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),v.dataTransfer?.files&&a&&a(v.dataTransfer.files),u(!1)},[a]),y=f.useCallback(v=>{v.preventDefault()},[]);return f.useEffect(()=>(window.addEventListener("dragover",y),window.addEventListener("drop",y),()=>{window.removeEventListener("dragover",y),window.removeEventListener("drop",y)}),[y]),c.jsx(UT,{$height:e,...o,children:c.jsx(IT,{$inDropZone:s,onDragEnter:h,onDragLeave:p,onDrop:x,onDragOver:m,children:r})})},Id=D`
  position: absolute;
  display: block;
  opacity: 0.1;
`;b.div`
  ${Id};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`;b.div`
  ${Id};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;b.div`
  ${Id}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`;b.div`
  ${Id};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;const si=D`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--black-a12);
  background-color: var(--white-1);
`;b.div`
  ${si};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({$isResizable:e})=>e&&D`
    cursor: n-resize;
  `};
`;b.div`
  ${si};
  top: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: nw-resize;
  `};
`;b.div`
  ${si};
  top: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: ne-resize;
  `};
`;b.div`
  ${si};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: e-resize;
  `};
`;b.div`
  ${si};
  bottom: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: se-resize;
  `};
`;b.div`
  ${si};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: s-resize;
  `};
`;b.div`
  ${si};
  bottom: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&D`
    cursor: sw-resize;
  `};
`;b.div`
  ${si};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({$isResizable:e})=>e&&D`
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

  ${$e} {
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
  height: ${({$canvasHeight:e})=>e?`${e}px`:"462px"};
  width: ${({$canvasWidth:e})=>e?`${e}px`:"485px"};
  border-radius: 5px;
  background-color: var(--grey-3);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, var(--white-a10) 35px, var(--white-a10) 70px);
`;b.img`
  display: none;
`;b.div`
  position: absolute;
  border: dashed 1px var(--black-a12);
  box-shadow: 0 0 0 9999em var(--black-a11);
  ${({$cropLeft:e,$cropTop:r,$cropWidth:a,$cropHeight:o})=>D`
    top: ${r}px;
    left: ${e}px;
    width: ${a}px;
    height: ${o}px;
  `};
  cursor: move;
`;const GT="150px",o5="142px";b.div`
  position: relative;
  width: ${o5};
  ${({theme:e})=>D`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`;b.div`
  position: relative;
  margin-bottom: 17px;
  height: ${GT};
  width: ${o5};
`;const l5=D`
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
  ${l5}
  object-fit: cover;
`;const qT=b.div`
  color: var(--grey-10);
  font-size: 14px;
`;b.div`
  ${l5}
  padding-top: 15px;
  ${qT} {
    margin-top: 18px;
  }
`;b(HT)`
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
  ${$e} {
    display: flex;
    align-items: center;
  }
`;b(Se)``;b.div`
  margin: 0 30px;
  ${$e}{
    transform: rotate(45deg);
    [stroke]{
      stroke: var(--primary-7);
    }
  }
`;b.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
`;b(PT)`
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
  padding: ${({$hasFiles:e})=>e?"26px 0 20px 0":"65px 0 42px 0"};
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
`;const FT=b.form`
  ${({$spacing:e})=>e&&D`
      & >  ${Ud} {
        margin-bottom: ${e};
      }
  `}
`,lp=({children:e,spacing:r="45px;",action:a,...o})=>c.jsx(FT,{$spacing:r,action:typeof a=="string"?a:void 0,...o,children:c.jsx(c.Fragment,{children:e})}),WT=b.button`
  ${ct}
  ${({$noBorderTop:e})=>e?"border-top: none":D`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${$e} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({$noBorderTop:e})=>e?"border-top: none":D`
          border-top: 1px solid var(--border-active-color)`};

    ${$e} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`,VT=b.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,YT=b.div`
  ${({$textMaxWidth:e})=>e&&D`max-width: ${e};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,ZT=b.div`
  ${({$isAscendingIcon:e})=>e&&D`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${$e} {
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
`,xy=({text:e,icon:r="",design:a="primary",noBorderTop:o=!1,textMaxWidth:s="",size:u="normal",onClickCallback:h,closeCallback:p,hasOnSelectLoading:m,children:x,formAction:y,...v})=>{const k=f.useRef(null),[C,S]=f.useState(!1),[E,T]=f.useState(0),M=f.useCallback(()=>{h&&h(),m?(S(!0),setTimeout(()=>{S(!1),p()},2e3)):setTimeout(()=>{p()},200)},[p,m,h]);return f.useEffect(()=>{k.current&&T(parseInt(getComputedStyle(k.current).getPropertyValue("--button-icon-size")))},[k]),c.jsxs(WT,{ref:k,$noBorderTop:o,size:u,onClick:M,...v,children:[c.jsx(ZT,{$isAscendingIcon:r==="FilterAscending",children:C?c.jsx(vr,{custom:{size:E},styling:a}):c.jsx(Se,{icon:r})}),c.jsx(YT,{$textMaxWidth:s,children:c.jsx(VT,{children:e})})]})},XT=(e,r,a,o=!0)=>{const s=document.title.split("|").slice(-1)[0].trim();f.useLayoutEffect(()=>()=>{document.title=s},[s]),f.useEffect(()=>{o&&(document.title=QT([...e?[e]:[],...r?[r]:[],...s?[s]:[]],a))},[e,r,a,o,s])},QT=(e,r="|")=>{let a="";return r=" "+r+" ",e.forEach((o,s)=>{a+=o,e.length-1!==s&&(a+=r)}),a},sp=()=>({copyToClipboard:f.useCallback(r=>{const a=document.createElement("textarea");a.value=r,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);const o=document.getSelection();if(o){const s=o.rangeCount>0?o.getRangeAt(0):!1;a.select();const u=document.execCommand("copy");return document.body.removeChild(a),s&&(o.removeAllRanges(),o.addRange(s)),u}return!1},[])});function j0(e,r){const[a,o]=f.useState(()=>{if(typeof window>"u")return r;try{const u=window.localStorage.getItem(e);return u?JSON.parse(u):r}catch(u){return console.warn(`[useLocalStorage] Failed to parse key "${e}" from localStorage, using initial value:`,u),r}}),s=f.useCallback(u=>{try{o(h=>{const p=u instanceof Function?u(h):u;return typeof window<"u"&&window.localStorage.setItem(e,JSON.stringify(p)),p})}catch(h){console.error(`[useLocalStorage] Failed to write key "${e}" to localStorage:`,h)}},[e]);return[a,s]}function cp(e,r){const a=f.useRef(r);a.current=r,f.useEffect(()=>{const o=s=>{e?.current?.contains(s.target)||a.current(s)};return document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}},[r,e])}const KT=b.div`
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
`,JT=b.button`
  ${ct};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${$e} {
    display: flex;
    margin-left: 12px;
  }
  ${({$selected:e=!1})=>e&&D`
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
`,e$=b.div`
  position: relative;
  margin: ${({$isCloseEnable:e})=>e?"27px 0 0":"0"};
  z-index: 9999;
  width: ${({$width:e})=>e||"580px"};
  padding: ${({$padding:e})=>e?"30px 40px":"0"};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`,t$=({isOpen:e=!1,isCloseEnable:r=!0,closeText:a="",width:o="",padding:s=!0,customComponent:u,onDismiss:h,dismissCallback:p})=>{const m=f.useRef(null);cp(m,()=>{r&&(p&&p(),y())});const y=f.useCallback(()=>{p&&p(),h()},[h,p]);return e?tc.createPortal(c.jsx(KT,{children:c.jsx(e$,{ref:m,$width:o,$padding:s,$isCloseEnable:r,children:c.jsxs(c.Fragment,{children:[r?c.jsxs(JT,{onClick:()=>y(),children:[a||"CLOSE",c.jsx(Se,{icon:"CloseCompact",size:15,color:"grey-12",weight:"regular"})]}):null,u]})})}),document.body):null},n$={isOpen:!1,onDismiss:()=>null},s5={modalProps:n$,setModalProps:e=>{console.debug(e)}},c5=Ve.createContext(s5),r$=({children:e})=>{const[r,a]=f.useState(s5.modalProps),o=s=>{a(s)};return c.jsxs(c5.Provider,{value:{modalProps:r,setModalProps:o},children:[c.jsx(t$,{...r}),e]})},u5=()=>{const{modalProps:e,setModalProps:r}=f.useContext(c5),a=f.useCallback(u=>{if(u===void 0)return;const h={...e,isOpen:u};r(h)},[e,r]),o=f.useCallback(()=>{a(!1)},[a]);return{createModal:f.useCallback(u=>{u||r({isOpen:!0,onDismiss:o});const h={isOpen:!0,closeText:u?.closeText,isCloseEnable:u?.isCloseEnable,width:u?.width,padding:u?.padding,dismissCallback:u?.dismissCallback,customComponent:u?.customComponent,onDismiss:o};r(h)},[o,r]),isModalOpen:e.isOpen,setModalOpen:a}},a$={sendNotification:()=>console.debug("This is the context initialization should not appear"),clearNotifications:()=>console.debug("This is the context initialization should not appear")},i$=Ve.createContext(a$),Bu=[],o$=({children:e})=>{const[r,a]=f.useState(null),o=f.useCallback(()=>{const p=Bu.shift();if(!p)return;const x={...p,closeCallback:()=>{p.closeCallback&&p.closeCallback(),a(null),o()}};a(x)},[]),s=f.useCallback(async p=>{const m={message:p.message,type:p.type,id:RT()};p.icon&&(m.icon=p.icon),p.actionTextButton&&(m.actionTextButton=p.actionTextButton),p.onTextButtonClick&&(m.onTextButtonClick=p.onTextButtonClick),p.closeCallback&&(m.closeCallback=p.closeCallback),p.isPinned&&(m.isPinned=p.isPinned),Bu.push(m),Bu.length===1&&r===null&&o()},[r,o]),u=f.useCallback(()=>{Bu.length=0,a(p=>p!==null?{...p,closeNow:!0}:p)},[]),h=f.useMemo(()=>({sendNotification:s,clearNotifications:u}),[u,s]);return c.jsxs(i$.Provider,{value:h,children:[r?c.jsx(Gj,{...r}):null,e]})},l$=(e=()=>{},r=1e3)=>{const a=f.useRef(null),o=f.useRef(e),s=f.useRef(!1),u=f.useCallback(async()=>{a.current!==null&&(console.debug("Clearing previous"),clearTimeout(a.current),a.current=null),await o.current(),s.current||(console.debug("Starting next timeout"),a.current=setTimeout(u,r))},[r]);f.useEffect(()=>{o.current=e},[e]),f.useEffect(()=>(s.current=!1,u(),()=>{console.debug("canceled"),s.current=!0,a.current!==null&&(console.debug("clearing final",a.current),clearTimeout(a.current),a.current=null)}),[u])};function vs(e){const[r,a]=f.useState(!1);return f.useLayoutEffect(()=>{const o=window.matchMedia(e);a(o.matches);const s=u=>a(u.matches);return o.addEventListener("change",s),()=>o.removeEventListener("change",s)},[]),r}function up(){const e={isSmall:vs(xn.small),isMedium:vs(xn.medium),isLarge:vs(xn.large),isXLarge:vs(xn.xlarge),isXXLarge:vs(xn.xxlarge),activeScreen:"small"};return e.isSmall&&(e.activeScreen="small"),e.isMedium&&(e.activeScreen="medium"),e.isLarge&&(e.activeScreen="large"),e.isXLarge&&(e.activeScreen="xlarge"),e.isXXLarge&&(e.activeScreen="xxlarge"),e}function s$(e){return c.jsxs("svg",{width:610,height:446,viewBox:"0 0 610 446",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[c.jsx("rect",{width:609.91,height:446,fill:"#DDDDDD"}),c.jsx("path",{d:"M242.675 210.273V235H239.246L226.677 216.865H226.447V235H222.717V210.273H226.17L238.751 228.432H238.98V210.273H242.675ZM269.596 222.636C269.596 225.277 269.113 227.546 268.148 229.446C267.182 231.338 265.858 232.795 264.175 233.817C262.501 234.831 260.597 235.338 258.464 235.338C256.323 235.338 254.412 234.831 252.729 233.817C251.055 232.795 249.735 231.334 248.769 229.434C247.803 227.534 247.32 225.268 247.32 222.636C247.32 219.996 247.803 217.73 248.769 215.839C249.735 213.939 251.055 212.482 252.729 211.468C254.412 210.446 256.323 209.935 258.464 209.935C260.597 209.935 262.501 210.446 264.175 211.468C265.858 212.482 267.182 213.939 268.148 215.839C269.113 217.73 269.596 219.996 269.596 222.636ZM265.902 222.636C265.902 220.624 265.576 218.93 264.924 217.553C264.28 216.169 263.394 215.122 262.268 214.414C261.149 213.698 259.881 213.339 258.464 213.339C257.04 213.339 255.768 213.698 254.649 214.414C253.53 215.122 252.645 216.169 251.993 217.553C251.349 218.93 251.027 220.624 251.027 222.636C251.027 224.649 251.349 226.347 251.993 227.732C252.645 229.108 253.53 230.154 254.649 230.871C255.768 231.579 257.04 231.933 258.464 231.933C259.881 231.933 261.149 231.579 262.268 230.871C263.394 230.154 264.28 229.108 264.924 227.732C265.576 226.347 265.902 224.649 265.902 222.636ZM286.977 210.273V235H283.246V210.273H286.977ZM292.41 210.273H296.938L304.81 229.494H305.1L312.972 210.273H317.499V235H313.95V217.107H313.72L306.428 234.964H303.482L296.189 217.094H295.96V235H292.41V210.273ZM325.012 235H321.052L329.951 210.273H334.261L343.159 235H339.199L332.208 214.764H332.015L325.012 235ZM325.676 225.317H338.523V228.456H325.676V225.317ZM362.303 218.085C362.069 217.352 361.755 216.696 361.361 216.116C360.974 215.529 360.512 215.03 359.972 214.619C359.433 214.201 358.817 213.883 358.125 213.665C357.441 213.448 356.688 213.339 355.867 213.339C354.475 213.339 353.219 213.698 352.1 214.414C350.981 215.13 350.096 216.181 349.444 217.565C348.8 218.942 348.478 220.628 348.478 222.624C348.478 224.629 348.804 226.323 349.456 227.707C350.108 229.092 351.001 230.142 352.136 230.859C353.271 231.575 354.563 231.933 356.012 231.933C357.356 231.933 358.527 231.66 359.526 231.112C360.532 230.565 361.308 229.792 361.856 228.794C362.411 227.788 362.689 226.605 362.689 225.244L363.655 225.425H356.58V222.347H366.299V225.16C366.299 227.237 365.856 229.04 364.971 230.569C364.094 232.09 362.878 233.265 361.325 234.094C359.779 234.924 358.008 235.338 356.012 235.338C353.774 235.338 351.81 234.823 350.12 233.793C348.438 232.762 347.126 231.301 346.184 229.41C345.242 227.51 344.771 225.256 344.771 222.648C344.771 220.676 345.045 218.906 345.592 217.336C346.14 215.766 346.908 214.434 347.898 213.339C348.897 212.237 350.068 211.396 351.412 210.816C352.764 210.228 354.241 209.935 355.843 209.935C357.179 209.935 358.423 210.132 359.574 210.526C360.733 210.921 361.763 211.48 362.665 212.205C363.574 212.929 364.327 213.79 364.923 214.788C365.518 215.778 365.921 216.877 366.13 218.085H362.303ZM371.035 235V210.273H386.538V213.484H374.766V221.018H385.729V224.218H374.766V231.788H386.683V235H371.035Z",fill:"#656565"})]})}const d5=b.div`
  position: relative;
  line-height: 0;
  ${({$minHeight:e})=>e&&`min-height: ${e}`};
  ${({$minWidth:e})=>e&&`min-width: ${e}`};
`,f5=`
  max-width:  100%;
  max-height: 100%;
  border-radius: 3px;
  background-color: var(--grey-11);
`,c$=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,u$=b.video`
  ${f5};
  outline: none;

  ${({$isLoaded:e,$hasModalLimits:r})=>D`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    opacity: ${e?"1":"0"};

    ${r&&D`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,d$=b.img`
  ${f5};

  ${({$isLoaded:e,$hasModalLimits:r})=>D`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    display: ${e?"block":"none"};
    opacity: ${e?"1":"0"};

    ${r&&D`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,f$=({src:e,alt:r,videoOptions:a={},mediaType:o,hasModalLimits:s,retryLoading:u=!1,retryLimit:h=5,minWidth:p,minHeight:m,onError:x=()=>{},onMediaLoad:y=()=>{}})=>{const[v,k]=f.useState(0),[C,S]=f.useState(e),[E,T]=f.useState(!1),[M,O]=f.useState(!1),{loop:N=!1,autoPlay:z=!0,controls:_=!1,muted:B=!0,children:j,...L}=a,G=f.useCallback(I=>{if(!u||v>=h)x(I.nativeEvent),O(!0),T(!0);else{const Z=1e3*(v**2+Math.random());k(re=>re+1),setTimeout(()=>{S(`${e}?v=${Date.now()}`)},Z)}},[e,x,v,u,h]),Y=f.useCallback(()=>{y(),O(!0)},[y,O]);return c.jsxs(d5,{$minWidth:p,$minHeight:m,children:[o==="video"?c.jsx(u$,{loop:N,autoPlay:z,controls:_,muted:B,onError:G,...L,$hasModalLimits:s,src:E?"":C,$isLoaded:M&&!E,preload:"metadata",onCanPlayThrough:Y,children:c.jsx(c.Fragment,{children:j})}):c.jsx(d$,{alt:r,onError:G,$hasModalLimits:s,src:E?"":C,onLoad:Y,$isLoaded:M&&!E}),!M&&c.jsx(c$,{children:c.jsx(vr,{size:"large",styling:"primary"})}),E&&c.jsx(s$,{})]})},h$={controls:!0},dp=()=>{const{createModal:e,isModalOpen:r,setModalOpen:a}=u5();async function o(u,h){let p=!1;if(h==="img"){const m=new Image;m.src=u;try{await new Promise((x,y)=>{m.onload=()=>x(p=!0),m.onerror=y})}catch{p=!1}}if(h==="video"){const m=document.createElement("video");m.src=u;try{await new Promise((x,y)=>{m.oncanplaythrough=()=>x(p=!0),m.onerror=y})}catch{p=!1}}return p}return{createMediaModal:f.useCallback(async u=>{const{src:h,mediaType:p,alt:m,videoOptions:x=h$,onError:y,onMediaLoad:v,closeText:k,dismissCallback:C,retryLoading:S=!1,retryLimit:E=5,minHeight:T="300px",minWidth:M="300px"}=u;e({padding:!1,width:"auto",closeText:k,dismissCallback:C,customComponent:c.jsx(f$,{src:h,mediaType:p,alt:m,videoOptions:x,onError:y,onMediaLoad:v,retryLoading:S,retryLimit:E,minHeight:T,minWidth:M,hasModalLimits:!0})})},[e]),isMediaUrlValid:o,isMediaModalOpen:r,setMediaModalOpen:a}},dg="(prefers-color-scheme: dark)",fg=e=>{e?(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")):(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"))},g$=()=>{const e=localStorage.getItem("isDarkThemeEnabled");let r=!0;return e===null?r=window.matchMedia(dg)&&window.matchMedia(dg).matches:r=e!=="false",fg(!r),r},sc=()=>{const[e,r]=f.useState(g$),a=f.useCallback(()=>{r(s=>(localStorage.isDarkThemeEnabled=!s,fg(s),!s))},[]),o=f.useCallback(s=>{if(localStorage.getItem("isDarkThemeEnabled")!==null)return;const h=s.matches;r(()=>(fg(!h),h))},[]);return f.useEffect(()=>{const s=window.matchMedia(dg);return s.addEventListener("change",o),()=>{s.removeEventListener("change",o)}},[a,o]),{isDarkThemeEnabled:e,setIsDarkThemeEnabled:r,onThemeToggle:a,isLightMode:!e}},p$=30,m$=b.div`
  height: var(--button-height);
  overflow: visible;
`,v$=b.div`
  ${({$isOpen:e})=>e&&"z-index: 100"};
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
`,x$=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`,y$=b.button`
  ${ct}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${$e} {
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
    ${$e} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${$e} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`,b$=(e,r)=>{if(r)return r;if(e)return`${e-p$}px`},xs=({mainButtonId:e,buttonList:r,design:a="primary",size:o,textMaxWidth:s,disabled:u=!1,...h})=>{const[p,m]=f.useState(!1),x=f.useRef(null),y=f.useRef(null),v=f.useCallback(()=>{m(C=>!C)},[]),k=f.useCallback(()=>{m(!1)},[]);return cp(y,k),c.jsx(m$,{children:c.jsxs(v$,{ref:y,className:`split-button-${a} split-button-size-${o}`,$isOpen:p,...h,children:[c.jsxs(x$,{ref:x,children:[r.filter(C=>C.id===e).map(({id:C,text:S,icon:E,disabled:T,...M})=>c.jsx(xy,{noBorderTop:!0,disabled:u||T,closeCallback:k,icon:E||"NoIcon",text:S,design:a,size:o,...M},C)),c.jsx(y$,{onClick:v,disabled:u,children:c.jsx(Se,{icon:p?"Close":"Down",size:8})})]}),p&&!u?c.jsx(f.Fragment,{children:r.filter(C=>C.id!==e).map(({id:C,text:S,icon:E,disabled:T,...M})=>c.jsx(xy,{icon:E||"NoIcon",text:S,design:a,size:o,disabled:T,textMaxWidth:b$(x.current?.clientWidth,s),...M,closeCallback:k},C))}):null]})})},w$=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`,h5=({buttons:e})=>c.jsx(w$,{children:e.map(({id:r,buttonType:a,icon:o,text:s,iconPosition:u,size:h,...p})=>a==="icon-button"?c.jsx(np,{size:h||"small",icon:o||"",position:u,...p,children:s},r||`button-stack-${r}`):c.jsx(st,{size:h||"small",...p,children:s},r||`button-stack-${r}`))}),S$=b.div`
  display: flex;
  flex-direction: column;

  ${({$hide:e})=>e&&D`
    display: none;
  `}
`,C$=b.label`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-10);
  padding: 12px;
  border-bottom: var(--grey-6) 1px solid;
`,yy=b.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`,by=b.div`
  flex: 0 0 32px;
  align-items: center;
  display: flex;
  padding-top: 1px;
`,nd=b.input`
  font-family: var(--font-data);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: var(--grey-12);
  background-color: transparent;

  width: 100%;
  border: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:r})=>r?"transparent 1px solid":"var(--warning-a9) 1px solid":"transparent 1px solid"};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {

    border-color: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:r})=>r?"transparent":"var(--warning-a9)":"transparent"};
  }
`,g5=b.div`
  flex: 0 0 20px;
  text-align: center;
`,wy=b.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {
    background: var(--primary-9);
    box-shadow: 0px 0px 0px 5px var(--primary-9);    
    ${nd}{
      color: var(--white-1);
      border-color: transparent;
    }

    ${g5}{
      color: var(--white-1);
      text-align: center;
    }
  }
`,Sy=({allowAfterMidnight:e=!1,title:r,hasDate:a,hasTime:o,isTimeRangeValid:s=!0,date:u=new Date,setDateCallback:h=()=>{}})=>{const p=(S,E,T,M)=>{const O=Number(S.slice(-2)),N=Number(E.slice(-2)),z=O>24?Number(S.slice(-1)):O,_=N>60?Number(E.slice(-1)):N;return z>=24&&_!==-1&&M?{newHour:24,newMin:0}:z===0&&_===0&&M&&!T?{newHour:0,newMin:1}:z===23&&_===60&&!M?{newHour:23,newMin:59}:z>=24&&!M?{newHour:23,newMin:_}:_===60?{newHour:z+1,newMin:0}:z>0&&_===-1?{newHour:z-1,newMin:59}:z===0&&_===-1?{newHour:z,newMin:0}:z===-1?{newHour:0,newMin:_}:{newHour:z,newMin:_}},[m,x]=f.useState(Vt(u,"mm")),[y,v]=f.useState(Vt(u,"HH")),k=f.useCallback(({target:{value:S}})=>{if(vy(S))return;const{newHour:E,newMin:T}=p(S,y,a,e);h(_x([ol(u),hd(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,y,a,h]),C=f.useCallback(({target:{value:S}})=>{if(vy(S))return;const{newHour:E,newMin:T}=p(m,S,a,e);h(_x([ol(u),hd(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,m,a,h]);return f.useEffect(()=>{e&&Us(u,ol(u))?(x("24"),v("00")):(v(Vt(u,"mm")),x(Vt(u,"HH")))},[u,e]),c.jsxs(S$,{$hide:!a&&!o,children:[c.jsx(C$,{children:r}),a&&c.jsxs(yy,{children:[c.jsx(by,{children:c.jsx(Se,{icon:"Date",color:"dimmed",size:14,weight:"light"})}),c.jsx(wy,{children:c.jsx(nd,{type:"text",readOnly:!0,value:Vt(u,"yyyy/MM/dd"),$isTimeRangeValid:s})})]}),o&&c.jsxs(yy,{children:[c.jsx(by,{children:c.jsx(Se,{icon:"Time",color:"dimmed",size:14,weight:"light"})}),c.jsxs(wy,{children:[c.jsx(nd,{name:"hours",type:"number",min:"-1",max:e?24:23,value:m,onChange:k,$isTimeRangeValid:s,autoComplete:"off",$isTimeInput:!0}),c.jsx(g5,{children:":"}),c.jsx(nd,{name:"minutes",type:"number",min:"-1",max:"60",value:y,onChange:C,$isTimeRangeValid:s,autoComplete:"off",$isTimeInput:!0})]})]})]})},vd=e=>({start:hd(e,{seconds:0,milliseconds:0}),end:ol(e)}),k$=new Date,Ko=vd(li(new Date)),E$=b.div`
  display: flex;
`,j$=b.div`
  border-right: var(--grey-6) 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`,T$=b.div`
  border-top: var(--grey-6) 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  box-sizing: border-box;
`,$$=b.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,M$=b.div`
  font-family: var(--font-data);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,L$=b.div`
  user-select: none;
`,O$=b.div`
  display: flex;
  height: 70px;
  border-bottom: var(--grey-6) 1px solid;
  text-align: center;
`,A$=b.div`
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
`,xd=b.div`
  [stroke]{
    stroke: var(--grey-8);
  }
`,Cy=b.button`
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

  ${xd}{
    svg * {
      transition: stroke var(--speed-fast) var(--easing-primary-in-out);
    }
  }

  &:hover:enabled  {
    color: var(--grey-12);

    ${xd}{
      [stroke]{
        stroke: var(--grey-12);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`,z$=b.div`
  padding: 5px 0;
`,R$=b.div`
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid var(--grey-6);
`,_$=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,p5=b.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`,D$=b(p5)`
  border-bottom: var(--grey-6) 1px solid;
`,m5=b.button`
  ${ct};
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
`,N$=b(m5)`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey-a11);
`,B$=b.div`
  position: absolute;
  left: 18px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-11);

  ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&D`
    background-color: var(--white-12);`}

  ${({$state:e})=>e==="inside"&&D`
    background-color: var(--primary-12);`}

  ${({$isToday:e})=>e&&D`
    left: 16px;
    bottom: 3px;
  `}

  ${({$hasContent:e})=>!e&&D`
    display: none;
  `}
`,H$=b.span`
  transform: translateY(-1px);
`,U$=b(m5)`
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${({$thisMonth:e})=>!e&&D`
    color: var(--grey-a8);
  `}

  ${({$isToday:e})=>e&&D`
    border: 2px solid var(--primary-a7);
  `}

  ${({$state:e})=>e!=="single"&&e!=="start"&&e!=="end"&&D`
    &:hover:enabled {
      background: var(--primary-a6);
      color: var(--white-1);
    }
  `};

  ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&D`
    background: var(--primary-9);
    color: var(--white-1);
  `}

  ${({$state:e})=>e==="start"&&D`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({$state:e})=>e==="end"&&D`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({$state:e})=>e==="insideHover"&&D`
    background: var(--primary-a9) !important;
    color: var(--white-1);
  `}

  ${({$state:e})=>e==="inside"&&D`
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

    ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&D`
      color: var(--white-1);
      background: var(--red-a9);
    `}

    ${({$state:e})=>e==="inside"&&D`
      color: var(--white-1);
      background: var(--red-a7);
      &:nth-child(7n+1), &:nth-child(7n){
        &::after {
          background: var(--red-a7);
        }
      }
    `};
  }

`,I$=["S","M","T","W","T","F","S"],P$=["日","月","火","水","木","金","土"],G$=({dateMode:e="interval",timeMode:r="interval",dateTimeTextUpper:a="From",dateTimeTextLower:o="To",timeZoneTitle:s="Timezone",timeZoneValueTitle:u="JST",hasEmptyValue:h=!1,updateCallback:p=()=>{},initialValue:m,availableRange:x,contentDays:y,lang:v="en",cancelText:k="Cancel",applyText:C="Apply",hasApply:S=!1,disableApply:E=!1,applyCallback:T=()=>{},cancelCallback:M=()=>{}})=>{const[O,N]=f.useState(F$(h,m)),[z,_]=f.useState(O===null?k$:O.start),[B,j]=f.useState("start"),[L,G]=f.useState([]),Y=f.useRef(!0),[I,Z]=f.useState(!0),re=v==="ja"?P$:I$;f.useEffect(()=>{if(Y.current)Y.current=!1;else{const q=new Date;N(vd(li(q))),_(q)}},[e,r]),f.useEffect(()=>{G(X9({start:Q9(z),end:jb(z)}))},[z]),f.useEffect(()=>{O!==null&&p(e==="interval"||r==="interval"?O:O.start)},[e,O,r,p]);const X=f.useCallback(q=>{const ae=O||Ko;if(e==="single"){const ie=ys(ae.start,q),de=ys(ae.end,q);N({start:ie,end:de})}else if(B==="end"&&Ix(q,ae.start)){const ie=ys(ae.end,q);N({...ae,end:ie}),j("done")}else if(B==="start"||B==="end"||B==="done"){const ie=ys(ae.start,q),de=ys(ae.end,q);N({start:ie,end:de}),j("end")}},[e,O,B]);f.useEffect(()=>{const{start:q,end:ae}=O||Ko;r==="interval"&&Ix(Wi(q,{minutes:1}),ae)?Us(ae,ol(q))&&ae.getSeconds()>0?Z(!0):Z(!1):Z(!0)},[O,r]);const te=f.useCallback(q=>{const{end:ae}=O||Ko;N({start:q,end:ae})},[O]),H=f.useCallback(q=>{const{start:ae}=O||Ko;N({start:ae,end:q})},[O]);return c.jsxs(E$,{children:[c.jsxs(j$,{children:[c.jsx(Sy,{isTimeRangeValid:I,title:a,hasDate:!0,hasTime:r!=="off",date:O?O.start:Ko.start,setDateCallback:te}),c.jsx(Sy,{isTimeRangeValid:I,title:o,hasDate:e==="interval",hasTime:r==="interval",date:O?O.end:Ko.end,allowAfterMidnight:!0,setDateCallback:H}),c.jsxs(T$,{children:[c.jsx($$,{children:s}),c.jsx(M$,{children:u})]})]}),c.jsxs(L$,{children:[c.jsxs(O$,{children:[c.jsxs(Cy,{type:"button",disabled:W$(z,x),onClick:()=>_(Os(z,-1)),children:[c.jsx(xd,{children:c.jsx(Se,{icon:"Left",color:"dimmed",size:10})}),Vt(Os(z,-1),"MMM",{locale:v==="ja"?m0:Ju})]}),c.jsxs(A$,{children:[c.jsx("span",{children:Vt(z,"yyyy")}),Vt(z,"MMMM",{locale:v==="ja"?m0:Ju})]}),c.jsxs(Cy,{type:"button",disabled:V$(z,x),onClick:()=>_(Os(z,1)),children:[Vt(Os(z,1),"MMM",{locale:v==="ja"?m0:Ju}),c.jsx(xd,{children:c.jsx(Se,{icon:"Right",color:"dimmed",size:10})})]})]}),c.jsx(D$,{children:re.map((q,ae)=>c.jsx(N$,{children:q},ae))}),c.jsx(z$,{children:L.map((q,ae)=>{const ie=Z9({start:q,end:J9(q)});return c.jsx(p5,{children:ie.map((de,A)=>{const F=q$(de,O),Q=JC(de);return c.jsxs(U$,{disabled:Y$(de,x),onClick:()=>X(de),$state:F,$thisMonth:KC(de,z),$isToday:Q,children:[c.jsx(H$,{children:Vt(de,"d")}),c.jsx(B$,{$hasContent:Z$(de,y),$state:F,$isToday:Q})]},A)})},ae)})}),S&&c.jsx(R$,{children:S&&c.jsxs(_$,{children:[c.jsx(st,{design:"secondary",onClick:M,children:k}),c.jsx(st,{onClick:T,disabled:!I||O===null||E,children:C})]})})]})]})},q$=(e,r,a)=>{let o="off",s=!1;if(r===null)return o;const u=QC(r).days===0;try{s=ek(e,r)}catch{s=!1}return(s||Zi(r.start,e))&&(u?o="single":Zi(r.start,e)?o="start":Zi(r.end,e)?o="end":o="inside"),o},ys=(e,r)=>hd(r,{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}),F$=(e,r)=>{if(e&&r===void 0)return null;const a=r||vd(li(new Date));return a instanceof Date?vd(a):a},W$=(e,r)=>{if(!r?.start)return!1;try{const a=r.start.getFullYear(),o=r.start.getMonth();if(e.getFullYear()<a||e.getFullYear()===a&&e.getMonth()<=o)return!0}catch(a){console.warn("Invalid available range:",r,a)}return!1},V$=(e,r)=>{if(!r?.end)return!1;try{const a=r.end.getFullYear(),o=r.end.getMonth();if(e.getFullYear()>a||e.getFullYear()===a&&e.getMonth()>=o)return!0}catch(a){console.warn("Invalid available range:",r,a)}return!1},Y$=(e,r)=>{if(!r)return!1;const{start:a,end:o}=r;try{if(a&&e<a&&!Zi(e,a)||o&&e>o&&!Zi(e,o))return!0}catch(s){console.warn("Invalid available range:",r,s)}return!1},Z$=(e,r)=>r?r.some(a=>Zi(e,a)):!1,X$=b.div`
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

`,Q$=b.div`
  display: inline-flex;
  flex-direction: column;
`,v5=({children:e,...r})=>c.jsx(X$,{...r,children:c.jsx(Q$,{children:c.jsx(c.Fragment,{children:e})})}),K$=b.div`
  ${({$isSortAscending:e})=>e&&D`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,J$=mr`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,hg=b.div`
  ${({$design:e})=>e==="default"?"padding: 0px 12px 0px 8px;":"padding: 0px 8px;"};
`,eM=b.button`
  ${ct};
  border-radius: 3px;
  height: var(--common-height);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 4px 10px 4px 4px;

  ${({$design:e})=>e==="basic"?`
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px;
      `:`
        background-color: var(--filter-button-background-color);
        border: var(--filter-button-stroke-color) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);
      `};

  ${({$hasFlipArrow:e})=>e&&"padding: 4px 0px 4px 4px;"};

  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--filter-button-text-color);
  font-family: var(--font-ui);
  transition:
    opacity ${sn.speed.fast} ${sn.easing.primary.out},
    background-color ${sn.speed.fast} ${sn.easing.primary.out},
    box-shadow ${sn.speed.fast} ${sn.easing.primary.out},
    color ${sn.speed.fast} ${sn.easing.primary.out},
    border ${sn.speed.fast} ${sn.easing.primary.out};

  animation: ${J$} ${sn.speed.slower} ${sn.easing.primary.out};

  ${$e} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${sn.speed.fast} ${sn.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({$design:e})=>e==="basic"?"":D`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${$e} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({$isOpen:e})=>!e&&D`
      ${hg} ${$e} {
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

  ${({$isOpen:e,$hasFlipArrow:r})=>e&&r&&D`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${$e} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${hg} ${$e} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,tM=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,nM=b.div``,x5=({icon:e,hasFlipArrow:r=!1,isSortAscending:a=!1,isOpen:o,design:s="default",children:u,formAction:h,...p})=>c.jsx(eM,{type:"button",...p,$isOpen:o,$hasFlipArrow:r,$design:s,children:c.jsxs(tM,{children:[c.jsx(K$,{$isSortAscending:a,children:c.jsx(Se,{icon:e,size:12,weight:"light",color:"filter-button-icon-color"})}),c.jsx(nM,{$hasFlipArrow:r,children:c.jsx(c.Fragment,{children:u})}),r&&c.jsx(hg,{$design:s,children:c.jsx(Se,{icon:o?"Up":"Down",size:6,color:"grey-11"})})]})}),zs=b.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`,al=b.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`,rd=b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,rM=b.div`
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
`,il=b.div`
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
`,Rs=b.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,aM=b.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;

  ${({$selected:e,$disabled:r})=>D`
    
    ${al}, ${il} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${zs} {
        color: var(--input-label-hover);
      }

      ${al}, ${il} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${Rs}, ${rd} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${e&&D`
      ${zs} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${al}, ${il} {
        border-color: var(--input-toggle-checked-border-color);
        ${Rs}, ${rd} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${zs} {
          color: var(--input-label-hover);
        }

        ${al}, ${il} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${Rs}, ${rd} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${r&&D`
      cursor: not-allowed;
    `};

    ${al}, ${il} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${Rs} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${zs}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`,y5=({title:e,value:r,optionType:a="text",selected:o=!1,disabled:s=!1,onClick:u=()=>{},...h})=>{const p=Hd.icons.weights.regular;return c.jsxs(aM,{onClick:u,$disabled:s,$selected:o,...h,children:[a==="checkbox"&&c.jsx(al,{children:c.jsx(rd,{children:o&&c.jsx(rM,{children:c.jsx(r5,{color:"inverse",stroke:"inverse",size:12,weight:p})})})}),a==="radio"&&c.jsx(il,{children:c.jsx(Rs,{})}),c.jsx(zs,{children:e})]})},b5=b.div`
  padding: 0 2px;
`,iM=b.div`
  ${({$hasBorder:e,$disabled:r,$noBackground:a,$width:o})=>D`

    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: var(--search-input-container-gap, 6px);
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${e&&D`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${b5}{
        padding: 0;
      }
    `};

    ${r&&D`
      opacity: 50%;
      cursor: not-allowed;
      `};

    ${o&&D`
      width: ${o};
    `};

    background-color: ${a?"transparent":"var(--grey-1)"};

    &:focus-within {
      background-color: ${a?"transparent":"var(--grey-1)"};
      border: ${e?"1px solid var(--primary-9)":"none"};
      box-shadow: 0px 4px 9px 0px ${a?"transparent":"var(--primary-a2)"};
    }

  `};

  ${$e} {
    flex-shrink: 0;
    display: flex;
  }


`,oM=b.button`
  ${ct};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${$e} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,lM=b.input`
  ${lc};

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

`,sM=({color:e="subtle",hasBorder:r=!0,iconSize:a=12,disabled:o=!1,noBackground:s=!1,hasCrossButton:u=!1,onCrossClick:h=()=>{},width:p,children:m,formAction:x,...y})=>c.jsxs(iM,{$hasBorder:r,$disabled:o,$noBackground:s,$width:p,children:[c.jsx(b5,{children:c.jsx(Se,{color:e,icon:"Search",weight:"regular",size:a})}),c.jsx(lM,{$color:e,disabled:o,...y}),u&&c.jsxs(oM,{onClick:h,children:[" ",c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:12})]})]}),Qs=e=>e==null||e.value===void 0||e.value===null||e.text===null?!1:(typeof e.value=="number"||typeof e.value=="string")&&typeof e.text=="string",cM=b.div`
  position: relative;
`,uM=b.div`
  display: inline-block;
`,dM=b.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;

  ${({$openState:e,$disabled:r})=>e&&D`
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
`,fM=(e,r,a)=>{let o="bottom-right";const s=e.left+r>window.innerWidth,u=e.bottom+a>window.innerHeight,h=e.bottom>a;return s&&u&&h&&(o="top-left"),u&&!s&&h&&(o="top-right"),!u&&s&&(o="bottom-left"),o},w5=f.forwardRef(({buttonIcon:e,buttonText:r,disabled:a=!1,minWidth:o=270,minHeight:s=190,isSortAscending:u,design:h="default",noCloseOnClickOutside:p,children:m,onToggleOpenCallback:x=()=>{},onCloseCallback:y=()=>{},...v},k)=>{const[C,S]=f.useState({isOpen:!1,position:"bottom-right"}),E=f.useRef(null),T=f.useRef(null),M=f.useCallback(()=>{p||(C.isOpen&&y(),S(z=>({...z,isOpen:!1})))},[p,y,C.isOpen]);cp(T,M);const O=f.useCallback((z,_)=>{if(!E.current)return;const B=E.current.getBoundingClientRect();if(!B)return;const j=fM(B,z,_);x(!C.isOpen),S(L=>{const G=!L.isOpen;return{...L,isOpen:G,position:j}})},[x,C.isOpen]),N=f.useCallback(()=>{S(z=>({...z,isOpen:!1}))},[]);return f.useImperativeHandle(k,()=>({imperativeClose:N})),c.jsxs(cM,{ref:T,...v,children:[c.jsx(uM,{ref:E,children:c.jsx(x5,{icon:e,isOpen:C.isOpen,onClick:()=>O(o,s),disabled:a,isSortAscending:u,design:h,hasFlipArrow:!0,children:r})}),c.jsx(dM,{$openState:C,$disabled:a,$minWidth:o,children:c.jsx(c.Fragment,{children:m})})]})}),hM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`,gM=b.div`
  font-family: var(--font-data);
  color: var(--grey-11);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  padding: 15px 0;
`,pM=({loadingText:e})=>c.jsxs(hM,{children:[c.jsx(vr,{size:"large",styling:"primary"}),c.jsx(gM,{children:e})]}),mM=b.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid var(--grey-6);
  background: var(--grey-a2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`,vM=b.div`
  display: flex;
  align-items: center;
`,xM=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,yM=({resetText:e="Reset",cancelText:r="Cancel",closeText:a="Close",applyText:o="Apply",hasReset:s=!1,hasApply:u=!1,disableApply:h=!1,disableReset:p=!0,onReset:m=()=>{},onCancel:x=()=>{},onApply:y=()=>{}})=>c.jsxs(mM,{children:[c.jsx(vM,{children:s&&c.jsx(st,{size:"small",design:"text-only",disabled:p,onClick:m,children:e})}),u&&c.jsxs(xM,{children:[c.jsx(st,{size:"small",design:"secondary",onClick:x,children:h?a:r}),c.jsx(st,{size:"small",onClick:y,disabled:h,children:o})]})]}),bM=b.div`
  display: inline-block;
  position: relative;
`,S5=b(y5)`
  letter-spacing: 0.2px;
`,wM=b.div`
  max-height: ${({$moreItem:e})=>e?"228px":"196px"};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  padding: 8px 0;

  ${S5} {
    height: 40px;
    padding-left: 16px;
  }
`,SM=b.div`
  min-width: 252px;
`,CM=b.div`
  display: flex;
  height: 24px;
  padding: 0px 8px;
  align-items: center;
  justify-content: left;
  gap: 8px;
  border-left: 1px solid var(--grey-6);
  width: auto;
`,kM=b.div`
  display: flex;
  height: 24px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
`,EM=b.div`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 12px;
`,jM=b.div`
  --search-input-font-size: 14px;
  --search-input-font-family: var(--font-data);
  --search-input-container-gap: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 14px;
`,TM=b.div`
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
`,$M=b.div`
  position: absolute;
  bottom: 0px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, var(--grey-3));
  width: 99%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`,MM=(e,r)=>{let a=!1;return Array.isArray(r)?r.forEach(o=>{o.value===e.value&&(a=!0)}):Qs(r)&&(a=e.value===r.value),a},LM=(e,r,a)=>{let o=!1;if(a==="checkbox"){const s=Array.isArray(r)?r:Qs(r)?[r]:[],u=[];return s.forEach(h=>{e.value===h.value?o=!0:u.push(h)}),o||u.push(e),u.length===0?null:u}return e},bs=(e,r)=>{if(e.length<=1)return e;const a=[...e],o=document.documentElement.lang||"en";return a.sort((s,u)=>{const h=s.text.localeCompare(u.text,o);return r?h:-h}),a},sa=(e,r,a,o)=>{if(e.length<=r||a===null)return bs(e,o);if(Qs(a)){const s=e.findIndex(p=>p.value===a.value);if(s===-1||s<r)return bs(e,o);const u=e.filter(p=>p.value!==a.value),h=bs(u,o);return h.unshift(e[s]),h}if(Array.isArray(a)){const s=new Set(a.map(x=>x.value)),u=[],h=[];for(const x of e)s.has(x.value)?u.push(x):h.push(x);const p=bs(u,o),m=bs(h,o);return[...p,...m]}return e},OM=(e,r)=>e.filter(a=>a.text.toLowerCase().includes(r.toLowerCase())),AM=(e,r,a)=>e.replace("[TOTAL]",`${a}`).replace("[VISIBLE]",`${r}`),zM=(e,r)=>e===null&&r===null?!0:e===null||r===null?!1:Array.isArray(e)&&Array.isArray(r)?e.length!==r.length?!1:e.every(a=>r.some(o=>o.value===a.value)):Array.isArray(e)||Array.isArray(r)?!1:e.value===r.value,RM=({buttonIcon:e,buttonText:r,list:a,selected:o=null,disabled:s=!1,isLoading:u=!1,loadingText:h,optionType:p="text",hasOptionsFilter:m,searchPlaceholder:x,maxDisplayedItems:y=5,searchResultText:v="Showing [VISIBLE] of [TOTAL]",emptyResultText:k,design:C="default",resetText:S,cancelText:E,closeText:T,applyText:M,hasReset:O,hasApply:N,descendingText:z="Descending",ascendingText:_="Ascending",isListAscending:B=!0,onSelect:j=()=>{},onResetCallback:L=()=>{},onCancelCallback:G=()=>{},...Y})=>{const[I,Z]=f.useState(B),[re,X]=f.useState(sa(a,y,o,I)),[te,H]=f.useState(""),[q,ae]=f.useState(o),ie=f.useRef(null),de=f.useCallback(()=>{X(sa(a,y,q,I))},[I,a,y,q]),A=f.useCallback(()=>{H(""),ae(o),Z(B),X(sa(a,y,o,B))},[B,a,y,o]),F=f.useCallback(ve=>{const Te=LM(ve,q,p);N||j(Te),ae(Te),X(sa(a,y,Te,I)),H("")},[q,p,N,a,y,I,j]),Q=f.useCallback(ve=>{const Te=ve.target.value.replace(/<[^>]*>/g,"").trim();if(H(Te),Te===""){X(sa(a,y,q,I));return}const pt=OM(a,Te);X(sa(pt,y,null,I))},[I,a,y,q]),le=f.useCallback(()=>{ae(o),G(),ie.current?.imperativeClose()},[G,o]),he=f.useCallback(()=>{j(q),ie.current?.imperativeClose()},[j,q]),me=f.useCallback(()=>{N||j(null),H(""),X(sa(a,y,null,B)),ae(null),Z(B),L()},[N,a,y,B,L,j]),fe=f.useCallback(()=>{Z(ve=>(X(sa(a,y,q,!ve)),!ve))},[a,y,q]);f.useEffect(()=>{let ve=!0;return ve&&(H(""),X(sa(a,y,q,I))),()=>{ve=!1}},[I,a,y,q]),f.useEffect(()=>{ae(o)},[o]);const xe=f.useMemo(()=>zM(q,o),[o,q]);return c.jsx(bM,{...Y,children:c.jsx(w5,{ref:ie,buttonIcon:e,buttonText:r,disabled:s,design:C,onCloseCallback:de,onToggleOpenCallback:A,noCloseOnClickOutside:N,children:c.jsxs(v5,{children:[m&&c.jsx(jM,{children:c.jsx(sM,{type:"text",hasBorder:!1,placeholder:x,color:"dimmed",iconSize:12,value:te,onChange:Q,noBackground:!0})}),u||!a?c.jsx(pM,{loadingText:h}):c.jsxs(SM,{children:[m&&c.jsxs(kM,{children:[c.jsx(EM,{children:AM(v,re.length,a.length)}),c.jsx(CM,{children:c.jsx(np,{design:"text-only",position:"left",size:"xsmall",weight:"light",onClick:fe,icon:I?"FilterAscending":"FilterDescending",children:I?_:z})})]}),c.jsx(wM,{$moreItem:a.length>5,children:re.length>0?re.map((ve,Te)=>{const pt=ve.value,dt=ve.text;return c.jsx(S5,{title:dt,onClick:()=>F(ve),selected:MM(ve,q),optionType:p,value:pt},Te)}):c.jsx(TM,{children:k})}),a.length>5&&c.jsx($M,{})]}),(N||O)&&c.jsx(yM,{hasApply:N,hasReset:O,resetText:S,cancelText:E,closeText:T,applyText:M,onCancel:le,onApply:he,disableApply:xe,onReset:me,disableReset:q===null&&I===B&&te===""})]})})})};b.div`
  display: inline-block;
  position: relative;
`;const _M=b(y5)`
  letter-spacing: 0.2px;
`;b.div`
  padding: 8px 0;
  ${_M} {
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
  ${ct};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({$isSelected:e})=>D`

    ${$e} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${$e} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${e&&D`
      ${$e} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`;b.div`
  display: inline-block;
  position: relative;
`;const DM=D`
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
`,Hu=b.div`
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
  ${DM}
  ${Hu}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${Hu}{
    background-color: var(--primary-9);
    }
  }
  ${({$isActive:e})=>e&&D`
    ${Hu} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${Hu}{
      cursor: pointer;
    }
  `}
  ${({$isInnerContextButton:e})=>e&&D`
    margin-right: 5px;
  `}
`;b.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:r})=>e&&D`
    display: ${e.isOpen?"inline-block":"none"};
    display: ${r&&"none"};
    ${e.position==="bottom-right"&&D`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="bottom-left"&&D`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="top-left"&&D`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position==="top-right"&&D`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`;b.div`
  display: inline-block;
`;const C5=D`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`;b.div`
  ${C5};
  padding: 4px 8px 4px 10px;
`;b.div`
  ${C5};
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
`;const NM=470,BM=360,HM=b.div``,UM=({buttonIcon:e,buttonText:r,disabled:a,initialValue:o,dateMode:s,timeMode:u,selected:h,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:y,lang:v,hasEmptyValue:k,availableRange:C,contentDays:S,cancelText:E="Cancel",applyText:T="Apply",hasApply:M=!0,onCloseCallback:O=()=>{},onUpdateCallback:N=()=>{},onToggleCallback:z=()=>{},onCancelCallback:_=()=>{},onApplyCallback:B=()=>{},...j})=>{const L=f.useRef(null),[G,Y]=f.useState({initialValue:o,isMount:!0}),[I,Z]=f.useState(!1),re=f.useRef(null),X=f.useCallback(ie=>{L.current=ie,N(ie),Z(_T(h,ie))},[N,h]),te=f.useCallback(()=>{L.current&&L.current!==h&&O(L.current)},[O,h]),H=f.useCallback(ie=>{!M&&L.current&&L.current!==h&&z(L.current,ie),ie&&!G.isMount&&Y(de=>({...de,isMount:!0}))},[M,G.isMount,z,h]),q=f.useCallback(()=>{L.current&&L.current!==h&&(L.current=h===void 0?null:h,Y({initialValue:h===null?void 0:h,isMount:!1})),_(),re.current?.imperativeClose()},[_,h]),ae=f.useCallback(()=>{L.current&&L.current!==h&&B(L.current),re.current?.imperativeClose()},[B,h]);return f.useEffect(()=>{let ie=!0;return ie&&h===null&&L.current!==null&&(L.current=h,Y({initialValue:void 0,isMount:!1})),()=>{ie=!1}},[h]),c.jsx(HM,{...j,children:c.jsx(w5,{ref:re,minWidth:NM,minHeight:BM,onCloseCallback:te,onToggleOpenCallback:H,noCloseOnClickOutside:M,buttonIcon:e,buttonText:r,disabled:a,children:c.jsx(v5,{children:G.isMount&&c.jsx(G$,{dateMode:s,timeMode:u,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:y,lang:v,availableRange:C,contentDays:S,cancelText:E,applyText:T,hasApply:M,updateCallback:X,cancelCallback:q,applyCallback:ae,hasEmptyValue:!0,initialValue:G.initialValue,disableApply:I})})})})},IM=mr`
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
  ${({theme:e})=>e&&D`
    animation: ${IM} ${e.animation.speed.slow} ${e.animation.easing.primary.inOut};
  `};
`;b(x5)``;b(RM)``;b(UM)``;b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 6px;
`;const PM=b.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`,GM=b.div`
  font-family: var(--font-ui);
  color: var(--grey-9);
`,qM=b.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: var(--grey-9);
  font-family: var(--font-data);

  ${$e} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid var(--grey-8);
`,FM=b.div`
  padding: ${({$hasIcon:e})=>e?"0 15px 0 9px":"0 15px 0 0"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`,WM=b.button`
  ${ct};
  font-family: var(--font-data);
  color: var(--grey-10);
  margin-left: 11px;
  font-size: 12px;
`,VM=b.button`
  ${ct};
`,YM=b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`,ky=(e,r)=>e.getHours()===23&&e.getSeconds()>0?Vt(Wi(li(e),{days:1}),r):Vt(e,r),ZM=e=>{let r=!1;if(e!=="")try{Vt(new Date,e),r=!0}catch{r=!1}return r},XM=(e,r)=>e.replace("[TOTAL_RESULTS]",`${r}`),QM=(e,r,a,o)=>{let s="";const u=ZM(r);return o&&Qs(e)?s=`${o}: ${e.text}`:o&&e instanceof Date?s=u?`${o}: ${Vt(e,r)}`:`${o}: ${e.toDateString()}`:o&&md(e)?s=u?`${o}: ${Vt(e.start,r)} - ${ky(e.end,r)}`:`${o}: ${e.start.toDateString()} - ${e.end.toDateString()}`:!o&&Qs(e)?s=e.text:!o&&e instanceof Date?s=u?Vt(e,r):e.toDateString():!o&&md(e)&&(s=u?`${Vt(e.start,r)} - ${ky(e.end,r)}`:`${e.start.toDateString()} - ${e.end.toDateString()}`),c.jsx(FM,{$hasIcon:!!a,children:s})},KM=({labelLists:e,totalResults:r,resultTextTemplate:a="Showing Results ([TOTAL_RESULTS]):",clearText:o="CLEAR ALL",resultsDateFormat:s="",onRemoveFilter:u=()=>{},onClearAll:h=()=>{},...p})=>c.jsxs(PM,{...p,children:[c.jsx(GM,{children:XM(a,r)}),c.jsxs(YM,{children:[e.map(({icon:m,item:x,filterName:y,filterId:v,type:k},C)=>c.jsxs(qM,{children:[m&&c.jsx(Se,{icon:m,color:"dimmed",size:10,weight:"light"}),QM(x,s,m,y),c.jsx(VM,{onClick:()=>u(v,k,x),children:c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:10,weight:"light"})})]},`Filter-Label-id-${C}`)),e.length>0&&c.jsx(WM,{onClick:h,children:o})]})]});b.div`
  font-family: var(--font-ui);
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;const JM=b(KM)``;b.div`
  ${JM} {
    margin-top: 29px;
    min-height: 19px;
  }
`;const eL=b.div`
  position: relative;
  display: inline-block;
`,tL=b.div`
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
  background-color: ${({theme:e,$color:r})=>r?e.colors.status[r]:"var(--grey-5)"};
`,nL=b.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:r})=>r?e.colors.status[r]:"var(--grey-5)"};
`,k5=({icon:e,status:r,counter:a,maxCounter:o=999})=>c.jsxs(eL,{children:[r&&a===void 0?c.jsx(nL,{$color:r}):a===void 0?null:c.jsx(tL,{$color:r,children:a>o?`${o}+`:a}),c.jsx(Se,{icon:e,size:18,color:"dimmed"})]}),rL=mr`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`,aL=mr`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`,iL=b.svg`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].handleBase.fill};
  appearance: none;
`,oL=b.circle`
  fill: none;
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].handleRingLayer.stroke};
  mask: url(#${e=>e.$maskID});
`,lL=b.g`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${e=>e.$touchDragging&&D`
    animation: ${rL} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

  ${e=>e.$mouseDragging&&D`
    animation: ${aL} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

`,sL=b.circle`
  mix-blend-mode: multiply;
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].handleReactiveFill.fill};
  stroke: none;
`,cL=b.circle`
  fill: none;
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].handleReactiveRing.stroke};
`,uL=b.circle`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].handleContrastLayer.stroke};
`,dL=b.circle`
    mix-blend-mode: multiply;
    fill: url(#${e=>e.$fillID});
`,fL=b.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&D`
    opacity: 1;
  `};

`,hL=b.stop`
  stop-color: ${({theme:e,$styling:r})=>e.custom.lines[r].stopStart.stopColor};
`,gL=b.stop`
  stop-color: ${({theme:e,$styling:r})=>e.custom.lines[r].stopEnd.stopColor};
`,pL=b.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].grabHandleText.stroke};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`,mL=b.g`

`,vL=e=>{const{index:r,useAngles:a,angle:o,unit:s,size:u,lineSetId:h,x:p,y:m,moveCallback:x,moveEndCB:y=()=>{},Icon:v,rotate:k=0,options:C,readOnlyHandle:S=!1,styling:E="primary"}=e,T=f.useRef(null),[M,O]=f.useState(!1),[N,z]=f.useState(!1),[_,B]=f.useState(null),j=f.useCallback(A=>{if(A.preventDefault(),!S)for(let F=0;F<A.touches.length;F++){const Q=A.touches[F];(Q.target.parentNode.parentElement===T.current||Q.target.parentNode.parentElement.parentElement)&&(O(!0),B(F))}},[S]),L=f.useCallback(()=>{S||(O(!1),B(null),y())},[y,S]),G=f.useCallback(A=>{if(!S)for(let F=0;F<A.touches.length;F++)F===_&&x({x:A.touches[F].pageX,y:A.touches[F].pageY},r)},[r,x,S,_]),Y=f.useRef(null),I=f.useRef(null),Z=f.useCallback(()=>{Y.current&&(window.removeEventListener("mousemove",Y.current),Y.current=null),I.current&&(window.removeEventListener("mouseup",I.current),I.current=null)},[]),re=f.useCallback(A=>{A.preventDefault(),!S&&x({x:A.pageX,y:A.pageY},r)},[r,x,S]),X=f.useCallback(A=>{A.preventDefault(),!S&&(z(!1),Z(),x({x:A.pageX,y:A.pageY},r),setTimeout(y))},[Z,r,x,y,S]),te=f.useCallback(A=>{A.preventDefault(),!S&&(Z(),z(!0),Y.current=re,I.current=X,window.addEventListener("mousemove",re),window.addEventListener("mouseup",X))},[Z,re,X,S]);f.useEffect(()=>Z,[Z]);const H=a?"mask-"+h+"-"+r:"",q="shadowGradient-"+h+"-"+r,{showPointHandle:ae=!0,showPointLabel:ie=!1,pointIndexOffset:de}=C;return c.jsxs(iL,{ref:T,$styling:E,x:p,y:m,$mouseDragging:N,onTouchStart:j,onTouchEnd:L,onTouchMove:G,onMouseDown:te,children:[c.jsxs("defs",{children:[c.jsxs("mask",{id:H,children:[c.jsx("rect",{width:"100%",height:"100%",x:"-50%",y:"-50%",fill:"white"}),c.jsx("rect",{width:u/3,height:u/.9,x:-(u/3/2),y:-(u/.9+5),fill:"black",transform:`rotate(${o||0} 0 0)`})]}),c.jsxs("radialGradient",{id:q,children:[c.jsx(hL,{$styling:E,offset:"0%"}),c.jsx(gL,{$styling:E,offset:"80%"})]})]}),v?c.jsx(mL,{transform:`scale(${s*1.5}) translate(-21 -21) rotate(${k}, 21, 21 )`,children:c.jsx(v,{height:"42",width:"42"})}):ae&&c.jsxs("g",{transform:`scale(${s})`,children:[c.jsx(dL,{r:u*1,$fillID:q}),c.jsx(uL,{$styling:E,r:u/2.4,strokeWidth:u/3}),c.jsxs(lL,{$touchDragging:M,$mouseDragging:N,children:[c.jsx(sL,{$styling:E,r:u/1.8}),c.jsx(cL,{$styling:E,r:u/2.25,strokeWidth:u/3})]}),c.jsx(oL,{$styling:E,r:u/2,strokeWidth:u/6,$maskID:H}),ie&&c.jsx(fL,{$showIndex:!0,children:c.jsx(pL,{$styling:E,transform:"translate(-5,6)",fontSize:"20px",$showIndex:!0,children:r+de})})]})]})},xL=b.line`
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].contrastLine.stroke};
  mix-blend-mode: multiply;
  stroke-width: ${({$lineClickSensing:e})=>e}px;
  stroke-opacity: ${({$showLineBorder:e})=>e?"0.35":"0"};
  cursor: pointer;
`,yL=b.line`
  pointer-events: none;
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].highlightLineBorder.stroke};
`,yd=b.circle`
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].grabHandle.fill};
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].grabHandle.stroke};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${e=>e.$hide&&D`
    pointer-events: none;
    opacity: 0;
  `};
`,bL=b.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&D`
    opacity: 1;
  `};

`,wL=b.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].grabHandleText.stroke};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`,Ey=b.text`
  text-align: center;
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  cursor: pointer;
  ${({$showLabelShadow:e})=>e&&D`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,gg=b(yd)`
  fill: none;
  stroke: ${({theme:e,$styling:r})=>e.custom.lines[r].grabHandleContrast.stroke};
`,SL=b.g`

  ${yd}, ${gg} {
    transition: r 250ms ease;
  }

  ${e=>e.$showIndex&&D`
    ${yd}, ${gg} {
      pointer-events: none;
      r: ${e.$originalRadius*1.75};
    }
  `};
`,jy=b.circle`
  fill: hsla(203, 100%, 35%, 0.49);
  cursor: pointer;
`,Ty=b(Se)`
  cursor: pointer;
`,CL=e=>{const{x1:r,y1:a,x2:o,y2:s,unit:u,lineMoveCallback:h,lineMoveStartCallback:p,options:m,lineSetId:x,label:y,styling:v="primary",moveEndCB:k=()=>{},lineClickCallback:C=()=>{},showSmallDirectionMark:S=!1,overrideShowMoveHandle:E=!0}=e,{handleFinderActive:T,revealSetIndex:M,showMoveHandle:O,setIndexOffset:N,showDirectionMark:z,showLabelShadow:_=!1}=m,[B,j]=f.useState(),L=!O||!E,G=parseInt(e.lineClickSensingBorder),Y=Q=>{for(let le=0;le<Q.touches.length;le++)h({x:Q.touches[le].pageX,y:Q.touches[le].pageY});k()},I=Q=>{for(let le=0;le<Q.touches.length;le++)p({x:Q.touches[le].pageX,y:Q.touches[le].pageY})},Z=f.useRef(null),re=f.useRef(null),X=f.useCallback(()=>{Z.current&&(window.removeEventListener("mousemove",Z.current),Z.current=null),re.current&&(window.removeEventListener("mouseup",re.current),re.current=null)},[]),te=f.useCallback(Q=>{h({x:Q.pageX,y:Q.pageY}),Q.preventDefault()},[h]),H=f.useCallback(Q=>{X(),h({x:Q.pageX,y:Q.pageY}),k(),Q.preventDefault()},[X,h,k]),q=f.useCallback(Q=>{X(),p({x:Q.pageX,y:Q.pageY}),Z.current=te,re.current=H,window.addEventListener("mousemove",te),window.addEventListener("mouseup",H),Q.preventDefault()},[X,p,te,H]);f.useEffect(()=>X,[X]);const ae={x:(o+r)/2,y:(s+a)/2},ie=()=>{const Q=Math.atan2(s-a,o-r),le=Math.PI/2-Q,he=ae.x+Math.sin(le)-5,me=ae.y+Math.cos(le),fe=180/Math.PI*Math.atan2(s-a,o-r),xe=-fe;return{x:he,y:me,rotate:fe,labelRotate:xe}},de=()=>{const Q=ie();return c.jsxs("g",{transform:`translate(${Q.x},${Q.y}) rotate(${Q.rotate}) scale(${u*1})`,style:{cursor:"pointer"},children:[c.jsxs("g",{onClick:()=>C(x),transform:"translate(-3,-30) scale(0.8)",children:[c.jsx(jy,{r:12,cx:6,cy:7}),c.jsx(Ty,{color:"inverse",icon:"Up",size:12,weight:"heavy",forSvgUsage:!0})]}),S&&c.jsxs("g",{onClick:()=>C(x),transform:"translate(5,25) rotate(-180) scale(0.8)",children:[c.jsx(jy,{r:8,cx:3.5,cy:4.5}),c.jsx(Ty,{color:"inverse",icon:"Up",size:7,weight:"heavy",forSvgUsage:!0})]}),y&&c.jsx("g",{transform:`translate(0,${S?45:30}) rotate(${Q.labelRotate})`,children:c.jsx(Ey,{onClick:()=>C(x),textAnchor:S?Q.labelRotate<0?"end":"start":"middle",dominantBaseline:"middle",$styling:v,fontSize:"14px",x:0,y:0,$showIndex:M||T,$showLabelShadow:_,children:y})})]})},A=f.useCallback(()=>{e.hasClickSensingBorder&&j(!0)},[e.hasClickSensingBorder]),F=f.useCallback(()=>{e.hasClickSensingBorder&&j(!1)},[e.hasClickSensingBorder]);return c.jsxs("g",{children:[c.jsx(xL,{onMouseOver:A,onMouseOut:F,$lineClickSensing:G,$showLineBorder:B,onClick:()=>C(x),$styling:v,strokeLinecap:"round",x1:r,y1:a,x2:o,y2:s,strokeWidth:4*u}),c.jsx(yL,{$styling:v,x1:r,y1:a,x2:o,y2:s,strokeWidth:2*u}),c.jsxs(SL,{$styling:v,$showIndex:T&&M,$originalRadius:8*u,children:[c.jsx(gg,{$styling:v,r:8*u,strokeWidth:4*u,cx:ae.x,cy:ae.y,$hide:L}),c.jsx(yd,{$styling:v,textAnchor:"middle",r:8*u,strokeWidth:1*u,cx:ae.x,cy:ae.y,$hide:L,onTouchMove:Y,onTouchStart:I,onMouseDown:q})]}),c.jsx(bL,{$showIndex:!L&&(T||M),children:c.jsx(wL,{$styling:v,fontSize:`${u*10}px`,x:ae.x-3*u,y:ae.y+4*u,$showIndex:M||T,children:x+N})}),z?de():y&&c.jsx(Ey,{$styling:v,fontSize:`${u*14}px`,x:ae.x-16*u,y:ae.y-15*u,$showIndex:M||T,$showLabelShadow:_,children:y})]})},ao=f.createContext({}),kL=b.polygon`
  fill: ${({$color:e})=>e};
  opacity: ${({$opacity:e})=>e};
`,EL=b.circle`
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].point.fill};
`,jL=b.text`
  text-align: center;
  fill: ${({theme:e,$styling:r})=>e.custom.lines[r].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
  ${({$showAreaLabelShadow:e})=>e&&D`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,TL=({lineSetData:e,unit:r,showAreaLabelShadow:a})=>{const o=e.points.length;if(o<3)return null;let s={x:0,y:0};e.points.map(({x:h,y:p})=>(s.x+=h,s.y+=p,null)),s={x:s.x/o,y:s.y/o};const u=e.areaName?.length||1;return c.jsx(jL,{fontSize:`${r*14}px`,$styling:e.styling||"primary",x:s.x-4*u*r,y:s.y+6*r,$showAreaLabelShadow:a,children:e.areaName})},fp=({getCTM:e,boundaries:r,unit:a,size:o,lineSetId:s,options:u,onLineMoveEnd:h,onLineClick:p,lineClickSensingBorder:m,hasClickSensingBorder:x})=>{const{state:y,dispatch:v}=f.useContext(ao),k=y[s],{showLabelShadow:C=!1}=u,[S,E]=f.useState([]),T=f.useRef([]),M=o/2,O=k.points.length===2,N=f.useCallback(X=>(X.x<r.x.min?X.x=r.x.min:X.x>r.x.max&&(X.x=r.x.max),X.y<r.y.min?X.y=r.y.min:X.y>r.y.max&&(X.y=r.y.max),X),[r]),z=f.useCallback((X,te)=>{const H=e();if(!H)return;const q=N({x:(X.x-window.scrollX-H.e)/H.a,y:(X.y-window.scrollY-H.f)/H.d}),ae={x:Math.round(q.x),y:Math.round(q.y)},ie=ca(k,{points:{[te]:{$merge:ae}}});v({type:"UPDATE",index:s,data:ie})},[e,N,k,v,s]),_=f.useCallback(X=>{const te=e();if(!te)return;const H={x:(X.x-window.scrollX-te.e)/te.a-M,y:(X.y-window.scrollY-te.f)/te.d-M};T.current=k.points.map(q=>{const ae=H.x-q.x,ie=H.y-q.y;return{offsetX:ae,offsetY:ie}})},[M,k.points,e]),B=f.useCallback(X=>{const te=e();if(!te)return;const{points:H}=k,q={x:(X.x-window.scrollX-te.e)/te.a-M,y:(X.y-window.scrollY-te.f)/te.d-M},ae=H.map((ie,de)=>{const{offsetX:A=0,offsetY:F=0}=T.current[de]||{};return N({x:Math.round(q.x-A),y:Math.round(q.y-F)})});v({type:"UPDATE",index:s,data:{...k,points:[...ae]}})},[e,k,M,v,s,N]),j=(X,te,H,q)=>Math.atan2(q-te,H-X)*180/Math.PI+90,L=f.useCallback(X=>{const{points:te}=X,H=[];X.points.forEach((q,ae)=>{const ie=ae+2>te.length?0:ae+1,de=te[ie],A=j(q.x,q.y,de.x,de.y);H.push(A)}),E(H)},[]);f.useEffect(()=>{O&&L(k)},[k,L,O]);const G=f.useRef(!1);f.useEffect(()=>{if(r.x.max===0&&r.y.max===0||G.current)return;if(G.current=!0,k.points.some(({x:te,y:H})=>te<r.x.min||te>r.x.max||H<r.y.min||H>r.y.max)){const te=k.points.map(H=>N({...H}));v({type:"UPDATE",index:s,data:{...k,points:te}})}},[r]);const Y=(k?.showPointHandle===void 0||k?.showPointHandle)&&k.points.map(({x:X,y:te},H)=>c.jsx(vL,{lineSetId:s,rotate:k.rotate,Icon:k.icon,index:H,unit:a,size:o,useAngles:O,angle:S[H],x:X,y:te,moveEndCB:h,moveCallback:z,options:u,styling:k.styling,readOnlyHandle:k.readOnly},H+s)),I=u.showPoint&&k.points.map(({x:X,y:te},H)=>c.jsx(EL,{$styling:k.styling||"primary",r:a,cx:X,cy:te},H)),Z=k.points.map(({x:X,y:te},H)=>{const{points:q,name:ae,styling:ie="primary"}=k,de=H+1>=q.length?0:H+1;if(H===1&&de===0)return null;const{x:A,y:F}=q[de];return c.jsx(CL,{moveEndCB:h,lineSetId:s,options:u,x1:X,y1:te,x2:A,y2:F,unit:a,label:ae,styling:ie,lineClickCallback:p,lineMoveCallback:B,lineMoveStartCallback:_,showSmallDirectionMark:k.showSmallDirectionMark,overrideShowMoveHandle:k.showMoveHandle,lineClickSensingBorder:m,hasClickSensingBorder:x},H)}),re=k.points.map(X=>`${X.x},${X.y}`).join(" ");return c.jsxs("g",{children:[c.jsx(kL,{points:re,$color:k.areaFillColor?k.areaFillColor:"transparent",$opacity:k.areaTransparencyLevel?k.areaTransparencyLevel/100:0}),Z,Y,I,c.jsx(TL,{lineSetData:k,unit:a,showAreaLabelShadow:C})]})},$L=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`,ML=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,LL=b.svg`
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

  ${e=>e.$transculent&&D`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,OL=b.img`
  object-fit: contain;
  width:  100%;
  height: 100%;
`,AL=({src:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},lineClickSensingBorder:s="65",hasClickSensingBorder:u=!0,options:{showHandleFinder:h,showSetIndex:p,showPointLabel:m=!1,showLabelShadow:x=!1,showPointHandle:y,showMoveHandle:v,showGrabHandle:k,setIndexOffset:C=0,pointIndexOffset:S=0,showPoint:E=!1,fixedImgDimensions:T,boundaryOffset:M=0,showDirectionMark:O=!1}={}})=>{const[N,z]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:_}=f.useContext(ao),[B,j]=f.useState(!1),[L,G]=f.useState(!1),[Y,I]=f.useState({h:1,w:1}),[Z,re]=f.useState(1),X=f.useRef(null),te=f.useRef(null),H=f.useCallback(()=>{if(!X.current)return;const{naturalHeight:A,naturalWidth:F,clientHeight:Q}=X.current,le=T&&T.y||A,he=T&&T.x||F;(le!==Y.h||he!==Y.w)&&(I({h:le,w:he}),r({h:le,w:he}),console.debug("image size:",{naturalHeight:A,naturalWidth:F,clientHeight:Q,unit:A/Q})),le/Q!==Z&&re(le/Q),G(!0)},[T,Y.h,Y.w,r,Z]),q=f.useCallback(()=>{if(!te.current)return null;const A=te.current.getScreenCTM();return console.debug("calculateCTM",A),A},[]),ae=A=>{A.target===te.current&&j(!!B&&!0)},ie=()=>{j(h||!1)};f.useEffect(()=>{if(!te.current)return;const{viewBox:A}=te.current,F={x:{min:A.baseVal.x+M,max:A.baseVal.x+A.baseVal.width-M},y:{min:A.baseVal.y+M,max:A.baseVal.y+A.baseVal.height-M}};console.debug("setBoundaries",F),z(F)},[Y,M]),f.useEffect(()=>(window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)}),[H]);const de={handleFinderActive:B,revealSetIndex:p!==!1&&(p||_.length>1),showPointLabel:m,showLabelShadow:x,showPointHandle:y||y!==!1&&k!==!1,showMoveHandle:v||v!==!1&&k!==!1,setIndexOffset:C,pointIndexOffset:S,showPoint:E,showDirectionMark:O};return c.jsxs($L,{children:[c.jsx(OL,{ref:X,onLoad:H,src:e,alt:""}),L&&N?c.jsx(LL,{ref:te,viewBox:`0 0 ${Y.w} ${Y.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:ie,onPointerLeave:ie,$transculent:B,children:_.map((A,F)=>c.jsx(fp,{hasClickSensingBorder:u,lineClickSensingBorder:s,onLineMoveEnd:a,onLineClick:o,lineSetId:F,lineData:A,getCTM:q,boundaries:N,unit:Z,size:30,options:de},F))}):c.jsx(ML,{children:c.jsx(vr,{size:"large",styling:"primary"})})]})},zL=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,RL=b.video`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,_L=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,DL=b.svg`
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

  ${e=>e.$transcalent&&D`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,NL=({src:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},onLoaded:s=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:h=!0,videoOptions:{loop:p=!1,autoPlay:m=!1,controls:x=!1,muted:y=!0,...v},options:{showHandleFinder:k,showSetIndex:C,showPointLabel:S=!1,showPointHandle:E,showLabelShadow:T,showMoveHandle:M,showGrabHandle:O,setIndexOffset:N=0,pointIndexOffset:z=0,showPoint:_=!1,boundaryOffset:B=0,showDirectionMark:j=!1}={}})=>{const L=f.useRef(null),G=f.useRef(null),[Y,I]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:Z}=f.useContext(ao),[re,X]=f.useState(!1),[te,H]=f.useState({h:768,w:1024}),[q,ae]=f.useState(1),[ie,de]=f.useState(!1),A=f.useCallback(()=>{if(!G.current)return;const{videoHeight:fe,videoWidth:xe,clientHeight:ve}=G.current;(fe!==te.h||xe!==te.w)&&(H({h:fe,w:xe}),r({h:fe,w:xe})),fe/ve!==q&&ae(fe/ve)},[te.h,te.w,q,r]),F=fe=>{fe.target===L.current&&X(!!re&&!0)},Q=()=>{X(k||!1)},le=f.useCallback(()=>L.current?L.current.getScreenCTM():null,[]);f.useEffect(()=>{if(!L.current||!ie)return;const{viewBox:fe}=L.current,xe={x:{min:fe.baseVal.x+B,max:fe.baseVal.x+fe.baseVal.width-B},y:{min:fe.baseVal.y+B,max:fe.baseVal.y+fe.baseVal.height-B}};I(xe)},[te,ie,B]);const he=f.useCallback(({target:fe})=>{if(fe){de(!0),A();const{videoHeight:xe=1,videoWidth:ve=1}=fe;s({height:xe,width:ve})}},[A,s]);f.useEffect(()=>(window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)}),[A]);const me={handleFinderActive:re,revealSetIndex:C!==!1&&(C||Z.length>1),showPointLabel:S,showLabelShadow:T,showPointHandle:E||E!==!1&&O!==!1,showMoveHandle:M||M!==!1&&O!==!1,setIndexOffset:N,pointIndexOffset:z,showPoint:_,showDirectionMark:j};return c.jsxs(zL,{children:[c.jsx(RL,{ref:G,controls:x,muted:y,autoPlay:m,loop:p,...v,onLoadedMetadata:he,src:e,id:"1",children:" "}),!ie&&c.jsx(_L,{children:c.jsx(vr,{size:"large",styling:"primary"})}),ie&&c.jsx(DL,{ref:L,viewBox:`0 0 ${te.w} ${te.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:F,onPointerUp:Q,onPointerLeave:Q,$transcalent:re,children:Z.map((fe,xe)=>c.jsx(fp,{hasClickSensingBorder:h,lineClickSensingBorder:u,onLineMoveEnd:a,onLineClick:o,lineSetId:xe,lineData:fe,getCTM:le,boundaries:Y,unit:q,size:30,options:me},xe))})]})},BL=b.video`
  /* width: 800px; */
`,HL=({id:e="1",enabled:r,peerAddress:a,maxConnectionAttempts:o=30,rtcConfiguration:s={},setStatus:u=()=>{},setError:h=()=>{},autoPlay:p=!0,muted:m=!0,children:x,...y})=>{const v=f.useRef(0),k=f.useRef(null),C=f.useRef(null),S=f.useRef(null),E=f.useRef(!1),T=f.useRef(null),M=f.useRef(null),O=f.useRef(r);function N(X){h(X),Z()}const z=async X=>{if(!S.current||!C.current)return;try{X.type==="offer"&&S.current.signalingState!=="stable"?await Promise.all([S.current.setLocalDescription({type:"rollback"}),S.current.setRemoteDescription(X)]):(X.sdp&&(X.sdp=X.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await S.current.setRemoteDescription(new RTCSessionDescription(X)),u("Remote Description set"))}catch(H){console.error("Error:",H),h("Error Setting remote description");return}if(X.type!=="offer")return;u("Creating Answer");try{const H=await S.current.createAnswer();console.debug("Got local description: "+JSON.stringify(H)),await S.current.setLocalDescription(H)}catch(H){console.error(H),H instanceof Error&&h(H.message);return}const te={sdp:S.current.localDescription};u("Sending Local Description");try{C.current.send(JSON.stringify(te)),u("Connected")}catch(H){console.error(H),H instanceof Error&&h(H.message)}};function _(X){if(!S.current){console.error("peerConnection.current not found onIncomingICE ");return}const te=new RTCIceCandidate(X);S.current.addIceCandidate(te).catch(h)}const B=({data:X=""})=>{if(X==="HELLO")console.debug("Received HELLO"),u("Registered with server, waiting for offer.");else if(X.startsWith("ERROR"))console.error("Received "+X),N(X);else{let te;try{te=JSON.parse(X)}catch(H){H instanceof SyntaxError?N("Error parsing incoming JSON: "+X):N("Unknown error parsing response: "+X);return}S.current||I(te),te.sdp!=null?(console.debug("Received Remote SDP:"+JSON.stringify(te.sdp)),z(te.sdp)):te.ice!=null?(console.debug("Received Remote ICE:"+JSON.stringify(te.ice)),_(te.ice)):N("Unknown incoming JSON: "+te)}};function j(X){console.debug("serverClose"),!(!C.current||X.target!==C.current)&&(u("Disconnected from server"),re(),X.code!==1e3&&O.current&&E.current&&(T.current!==null&&clearTimeout(T.current),T.current=setTimeout(G,3e3)))}function L(X){X.target===C.current&&(console.debug(X),h("Unable to connect to server"),Z())}function G(){if(!E.current)return;if(console.debug("connectToPeer",v.current),v.current>=o){h("Too many connection attempts, aborting. Refresh page to try again");return}h(null);const X=UL(e);u("Connecting to server "+a);const te=new WebSocket(a);C.current=te,te.addEventListener("open",()=>{M.current!==null&&clearInterval(M.current),M.current=setInterval(()=>{try{te.send("HELLO "+X),M.current!==null&&(clearInterval(M.current),M.current=null),u("Registering with server (sent HELLO) for peer id: "+X)}catch(H){console.debug(H)}},3e3)}),te.addEventListener("error",L),te.addEventListener("message",B),te.addEventListener("close",j),v.current+=1}function Y(X){k.current&&k.current.srcObject!==X.streams[0]&&(console.debug("Incoming stream"),k.current.srcObject=X.streams[0],u("Adding Track"))}function I(X){if(v.current=0,console.debug("Creating RTCPeerConnection"),!X.sdp){console.debug("WARNING: First message wasn't an SDP message!?");return}const te=new RTCPeerConnection(s);S.current=te,te.addEventListener("track",Y),te.addEventListener("icecandidate",({candidate:H=null})=>{if(!H){console.debug("All local ICE Candidates sent.");return}C.current?C.current.send(JSON.stringify({ice:H})):console.debug("no WS found on peer connection 'icecandidate' event... how?")}),u("RTCPeerConnection created, waiting for SDP")}const Z=()=>{console.debug("closeWebSocket"),re(),C.current&&(C.current.close(),C.current=null)},re=()=>{console.debug("closePeerConnection"),S.current&&(S.current.close(),S.current=null)};return f.useEffect(()=>{O.current=r},[r]),f.useEffect(()=>(E.current=!0,r===!0?G():C.current&&C.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),E.current=!1,T.current!==null&&(clearTimeout(T.current),T.current=null),M.current!==null&&(clearInterval(M.current),M.current=null),Z()}),[r]),c.jsx(BL,{...y,autoPlay:p,muted:m,ref:k,children:c.jsx(c.Fragment,{children:x})})};function UL(e){return"WRP_"+e+"_"+Math.floor(Math.random()*8990+10).toString()}const IL=b.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,PL=b(HL)`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,GL=b.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qL=b.svg`
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

  ${e=>e.$transcalent&&D`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,FL=({ws:e,onSizeChange:r=()=>{},onLineMoveEnd:a=()=>{},onLineClick:o=()=>{},onLoaded:s=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:h=!0,videoOptions:p,options:{showHandleFinder:m,showSetIndex:x,showPointLabel:y=!1,showLabelShadow:v=!1,showPointHandle:k,showMoveHandle:C,showGrabHandle:S,setIndexOffset:E=0,pointIndexOffset:T=0,showPoint:M=!1,boundaryOffset:O=0,showDirectionMark:N=!1}={}})=>{const z=f.useRef(null),_=f.useRef(null),[B,j]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:L}=f.useContext(ao),[G,Y]=f.useState(!1),[I,Z]=f.useState({h:768,w:1024}),[re,X]=f.useState(1),[te,H]=f.useState(!1),q=f.useCallback(()=>{if(!_.current)return;const{videoHeight:Q,videoWidth:le,clientHeight:he}=_.current;(Q!==I.h||le!==I.w)&&(Z({h:Q,w:le}),r({h:Q,w:le})),Q/he!==re&&X(Q/he)},[I.h,I.w,re,r]),ae=Q=>{Q.target===z.current&&Y(!!G&&!0)},ie=()=>{Y(m||!1)},de=f.useCallback(()=>z.current?z.current.getScreenCTM():null,[]);f.useEffect(()=>{if(!z.current||!te)return;const{viewBox:Q}=z.current,le={x:{min:Q.baseVal.x+O,max:Q.baseVal.x+Q.baseVal.width-O},y:{min:Q.baseVal.y+O,max:Q.baseVal.y+Q.baseVal.height-O}};j(le)},[I,te,O]);const A=f.useCallback(({target:Q})=>{if(Q){H(!0);const le=Q;_.current=le,q();const{videoHeight:he=1,videoWidth:me=1}=le;s({height:he,width:me})}},[q,s]);f.useEffect(()=>(window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q)}),[q]);const F={handleFinderActive:G,revealSetIndex:x!==!1&&(x||L.length>1),showPointLabel:y,showLabelShadow:v,showPointHandle:k||k!==!1&&S!==!1,showMoveHandle:C||C!==!1&&S!==!1,setIndexOffset:E,pointIndexOffset:T,showPoint:M,showDirectionMark:N};return c.jsxs(IL,{children:[c.jsx(PL,{onLoadedMetadata:A,peerAddress:e,id:"1",...p,enabled:!0,children:" "}),!te&&c.jsx(GL,{children:c.jsx(vr,{size:"large",styling:"primary"})}),te&&c.jsx(qL,{ref:z,viewBox:`0 0 ${I.w} ${I.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:ie,onPointerLeave:ie,$transcalent:G,children:L.map((Q,le)=>c.jsx(fp,{hasClickSensingBorder:h,lineClickSensingBorder:u,onLineMoveEnd:a,onLineClick:o,lineSetId:le,lineData:Q,getCTM:de,boundaries:B,unit:re,size:30,options:F},le))})]})},WL=(e,r)=>({x:e.x+(r.x-e.x)*.5,y:e.y+(r.y-e.y)*.5}),hp=(e,r)=>{switch(r.type){case"UPDATE_SET_POINTS":case"UPDATE":{const a=r.data.points.map(o=>({...o}));return ca(e,{[r.index]:{points:{$set:a}}})}case"RENAME_SET":{const a={...e[r.index],name:r.data.name};return ca(e,{[r.index]:{$set:a}})}case"UPDATE_SET_OPTIONS":{const a={...e[r.index],...r.data};return ca(e,{[r.index]:{$set:a}})}case"ADD_SET":return[...e,r.data];case"REMOVE_SET":return ca(e,{$splice:[[r.index,1]]});case"ADD_POINT":{const a=WL(e[r.index].points[0],e[r.index].points[1]);return ca(e,{[r.index]:{points:{$splice:[[1,0,a]]}}})}case"REMOVE_POINT":return e[r.index].points.length<=2?e:ca(e,{[r.index]:{points:{$splice:[[e[r.index].points.length-1,1]]}}});case"LOAD":return r.state.map(({name:o,points:s,...u})=>({name:o,points:s.map(({x:h,y:p})=>({x:h,y:p})),...u}));case"UPDATE_FILL_COLOR":{const a={...e[r.index],areaFillColor:r.data.areaFillColor};return ca(e,{[r.index]:{$set:a}})}case"UPDATE_TRANSPARENCY_LEVEL":{const a={...e[r.index],areaTransparencyLevel:r.data.areaTransparencyLevel};return ca(e,{[r.index]:{$set:a}})}default:return console.error(`Action ${r.type} not registered.`),e}},E5=24,j5=20,VL=-j5-E5,YL=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${xn.large} {
    gap: ${j5}px;
    flex-direction: row;
  }
`,ZL=b.div`
  position: relative;
  display: flex;
  flex-direction: ${({$areaTitleBottom:e})=>e?"column-reverse":"column"};
  gap: 4px;
`,XL=b.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${xn.large} {
    margin-left: ${VL}px;
    justify-content: center;
  }

  svg {
    display: block;
  }
`,QL=b.h1`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0;
`,gp=D`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
`,KL=b.div`
  ${gp}
`,JL=b(Ue)`
  ${gp}
  &:hover {
    text-decoration: underline;
  }
`,eO=b.button`
  ${ct};
  ${gp};
  &:hover {
    text-decoration: underline;
  }
`,tO=({title:e,icon:r,areaTitle:a,areaHref:o,updateDocTitle:s=!0,hideAreaInDocTitle:u=!1,areaTitleBottom:h=!1,iconColor:p="dimmed",onAreaClick:m})=>(XT(e,u?void 0:a||"",void 0,s),c.jsxs(YL,{children:[r?c.jsx(XL,{children:c.jsx(Se,{size:E5,color:p,icon:r})}):null,c.jsxs(ZL,{$areaTitleBottom:h,children:[a&&m?c.jsx(eO,{onClick:m,type:"button",children:a}):a&&o?c.jsx(JL,{to:o,children:a}):a?c.jsx(KL,{children:a}):null,c.jsx(QL,{children:e})]})]})),nO=b.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,rO=({children:e})=>c.jsx(nO,{children:c.jsx(c.Fragment,{children:e})}),aO=b.div`
  user-select: none;
`,iO=b(Ue)`
  text-decoration: none;
  display: flex;
`,oO=b.button`
  ${ct};
  text-decoration: none;
  display: flex;
`,T5=b.div`
  font-family: var(--font-data);
  font-size: ${({$size:e})=>e}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({$noBorder:e})=>!e&&D`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `};

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({$tagSize:e})=>e==="compact"&&D`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({$tagSize:e})=>e==="default"&&D`
    padding: 3px 8px;
  `};

  ${$e} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({$hoverColor:e,$enableHover:r})=>r&&D`
    &:hover {
      cursor: pointer;
      border-color: var(--${e});
      color: var(--${e});
      ${$e} {
        [stroke]{
          stroke: var(--${e});
        }
      }
    }
  `};
`,$5=({icon:e="",size:r=12,weight:a="regular",label:o="",linkTo:s,noBorder:u=!1,tagSize:h,onTagClick:p,...m})=>{const x=f.useMemo(()=>h==="compact"?8:10,[h]),y=f.useMemo(()=>h==="compact"?12:14,[h]),v=()=>c.jsxs(T5,{$hoverColor:"primary",$enableHover:!!(p||s),$size:h?y:r,$tagSize:h,$noBorder:u,children:[e&&c.jsx(Se,{icon:e,size:h?x:r,weight:a,...m}),c.jsx(aO,{children:o})]});return p?c.jsx(oO,{onClick:p,type:"button",children:v()}):s?c.jsx(iO,{to:s,children:v()}):v()},lO=b.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`,sO=b.div`
`,cO=b.div`
  max-width: 648px;
`,uO=b.div`
    ${({$iconLeftPanel:e})=>e&&D`
        padding-top: 32px;
    `};

    @media ${xn.large} {
      padding-top: 0px;
    }

`,dO=b.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
  margin-top: 29px;
`,fO=b.div``,zr=({title:e,icon:r,iconColor:a="primary-9",introductionText:o,areaHref:s,areaTitle:u,updateDocTitle:h=!0,hideAreaInDocTitle:p,tagList:m,areaTitleBottom:x,rightContent:y,bottomLeftContent:v,onAreaClick:k})=>c.jsxs(lO,{children:[c.jsxs(sO,{children:[c.jsx(tO,{iconColor:a,title:e,icon:r,areaHref:s,areaTitle:u,updateDocTitle:h,hideAreaInDocTitle:p,areaTitleBottom:x,onAreaClick:k,bottomLeftContent:v}),m?c.jsx(dO,{children:m.map(({icon:C,label:S,linkTo:E,onTagClick:T})=>c.jsx($5,{icon:C||"",noBorder:!0,tagSize:"compact",label:S,linkTo:E,onTagClick:T},"tag-"))}):null,o?c.jsx(cO,{children:c.jsx(rO,{children:o})}):null,c.jsx(fO,{children:c.jsx(c.Fragment,{children:v})})]}),y?c.jsx(uO,{$iconLeftPanel:!!r,children:c.jsx(c.Fragment,{children:y})}):null]});b.div`
  display: flex;
  flex-direction: column;
`;const hO=b.div`
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
    ${({$aspect:e})=>e==="16:9"&&D`
      padding-left: 56.25%;
    `}
  }

  transition:
    opacity var(--speed-normal) var(--easing-primary-out),
    transform var(--speed-fast) var(--easing-primary-out);

  &:hover {
      cursor: pointer;

    ${({$hoverZoom:e})=>e&&D`
      transform: scale(1.5);
      opacity: 1;
      transition: transform var(--speed-normal) var(--easing-primary-out);
    `}
  }

`,gO=b.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,pO=b.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 41px;
  width: 55px;
  object-fit: cover;
  display: block;
`,mO=b.div`
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
  ${$e} {
    display: flex;
    svg {
      padding-left: 2px;
      path {
        stroke: var(--white-1);
      }
    }
  };
`,vO=({hoverZoom:e=!0,image:r="",mediaUrl:a,mediaType:o,retryImageLoad:s=!1,retryLimit:u=5,closeText:h,onClickThumbnail:p})=>{const[m,x]=f.useState(!!r),[y,v]=f.useState(r),{createMediaModal:k}=dp(),[C,S]=f.useState(0),E=f.useRef(null),T=f.useRef(null),M=f.useCallback(async()=>{k({src:m&&a?a:"",mediaType:o||"img",minHeight:"240px",closeText:h})},[h,k,o,a,m]);f.useEffect(()=>{x(!1),S(0),v(r)},[r]),f.useEffect(()=>{E.current&&E.current.complete&&y!==""&&(T.current&&clearTimeout(T.current),T.current=null,x(!0))},[y]);const O=f.useCallback(()=>{T.current=null,v(`${r}?v=${Date.now()}`)},[r]),N=f.useCallback(()=>{if(x(!1),!s||C>=u||T.current)return;const B=1e3*(C**2+Math.random());S(j=>j+1),T.current=setTimeout(O,B)},[C,s,u,O]),z=f.useCallback(()=>{T.current&&clearTimeout(T.current),T.current=null,x(!0)},[]),_=(B,j)=>{if(!B){j(!1);return}const L=new Image;L.src=B,L.complete?j(!0):(L.onload=()=>{j(!0)},L.onerror=()=>{j(!1)})};return f.useEffect(()=>{_(r,B=>{x(!!B)})},[r]),c.jsxs(hO,{$hoverZoom:e,$mediaUrl:a,$aspect:"16:9",onClick:p||M,children:[m?c.jsx(gO,{ref:E,src:y,onError:N,onLoad:z}):c.jsx(pO,{children:c.jsx(jT,{})}),a&&o==="video"&&c.jsx(mO,{children:c.jsx(Se,{size:12,icon:"Play",color:"inverse"})})]})},xO=b.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({$status:e,theme:{colors:r}})=>D`
    background: ${r.status[e]};
    content:'${e}';
  `}

`,yO=({status:e="neutral"})=>c.jsx(xO,{$status:e}),M5=b.button`

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

`,bO=b.div`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${e=>e.theme.fontFamily.data};

  &:hover ${M5}{
    opacity: 0.5;
  }

  &, a {
    ${({theme:e,$cellStyle:r,$alignment:a})=>r==="firstColumn"?D`
      ${e.typography.table.columnData[r]};
    `:D`
      ${e.typography.table.columnData[r][a]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({$hasCopyButton:e})=>e&&D`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},$hideDivider:r})=>!r&&D`
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
`,wO=b.span`
  ${({theme:e})=>D`
    ${e.typography.table.columnData.unit};
  `}
`,SO=b.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({$status:e="neutral",theme:{colors:r}})=>D`
    background: ${r.status[e]};
  `}
`,ws=({showUnit:e=!1,showStatus:r=!1,status:a,unit:o="",cellStyle:s="normalImportance",alignment:u="left",hideDivider:h,isLastRow:p,hasCopyButton:m,href:x,children:y})=>{h=p?!0:h;const{copyToClipboard:v}=sp();return c.jsx(bO,{$cellStyle:s,$alignment:u,$hideDivider:h,$hasCopyButton:m,children:c.jsxs(c.Fragment,{children:[r?c.jsx(SO,{$status:a}):null,x?c.jsx("a",{href:x,children:y}):y,e?c.jsx(wO,{children:o}):null,m?c.jsx(M5,{onClick:()=>typeof y=="string"&&v(y),children:c.jsx(Se,{icon:"Copy",size:16})}):null]})})},CO=b.div`
  display: table-row;
  ${({$isEmpty:e})=>e&&D`
    visibility: hidden;
  `};
`,kO=({selectable:e=!1,selectCallback:r,hasStatus:a,hasThumbnail:o,hasTypeIcon:s,rowData:u,isLastRow:h,columnConfig:p,closeText:m})=>{const x=f.useCallback(v=>{r&&r(v,u.id)},[u.id,r]),y=u.columns.length===0;return c.jsxs(CO,{$isEmpty:y,children:[e?c.jsx(ws,{hideDivider:!0,children:c.jsx(ip,{checked:u._checked,disabled:u.checkboxDisabled,onChangeCallback:x})}):null,a?c.jsx(ws,{hideDivider:!0,children:c.jsx(yO,{status:u.header?.status})}):null,o?c.jsx(ws,{hideDivider:!0,children:c.jsx(vO,{image:u.header?.image,mediaUrl:u.header?.mediaUrl,mediaType:u.header?.mediaType,closeText:m,onClickThumbnail:u.header?.onClickThumbnail})}):null,s?c.jsx(ws,{hideDivider:!0,children:c.jsx(Se,{icon:u.header?.icon||"",color:"dimmed",weight:"regular",size:16})}):null,u.columns.map((v,k)=>{const{cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:M}=p[k],{unit:O,status:N,text:z,customComponent:_}=v;return c.jsx(ws,{href:v.href,cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:M,unit:O,status:N,isLastRow:h,children:_||z},k)})]})},EO=b.div`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${$e} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${({$ascending:e})=>e&&D`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }

  ${({$isSortActive:e})=>e&&D`
    &:not(hover) {
      ${$e} {
        display: inline-flex;
      }
    }
  `}

  ${({theme:{styles:e},$sortable:r})=>r&&D`

    ${e.tables.header.sortable.default};

    &:hover {
      cursor: pointer;
      ${e.tables.header.sortable.hover};

      ${$e} {
        ${e.tables.header.sortable.hover};
        display: inline-flex;
      }
    }
  `}
`,jO=({header:e,sortable:r,isSortActive:a,ascending:o,columnId:s,indexKey:u,toggleSort:h})=>{const p=(m,x)=>{h(m,x)};return c.jsxs(EO,{$sortable:r,$isSortActive:a,$ascending:o,onClick:()=>{p(u,s)},children:[r&&c.jsx(Se,{icon:"FilterSorting",size:14,color:"dimmed"}),e]})},TO=b.div`
  display: table-row;
  height: 50px;
`,Ss=b.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({$hasCopyButton:e})=>e&&D`
    padding-right: 20px;
  `};

  ${({theme:e,$alignment:r,$headerStyle:a})=>r?D`
    ${e.typography.table[a][r]};
  `:D`
    ${e.typography.table[a].left};
  `};

  ${e=>e.$fixedWidth&&D`
    width: ${e.$fixedWidth}px;
  `};

  ${({$minWidth:e})=>e&&D`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},$headerStyle:r,$isSortActive:a})=>r==="subHeader"&&D`
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
`,$O=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({$alignment:e})=>e&&D`
      ${e==="right"?"align-items: flex-end":null};
      ${e==="center"?"align-items: center":null};
  `};
`,MO=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,LO=b.div`
  ${({theme:{typography:e}})=>D`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,$y=b.div`
  height: 20px;
`,My=b.div`
  ${({theme:{styles:e}})=>D`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({$isLastOfGroup:e})=>e&&D`
    margin-right: 15px;
  `};
`,OO=(e,r)=>{if(r<0)return null;let a=!0;return r<e.length-1&&(a=e[r].groupTitle!==e[r+1].groupTitle),e[r].groupTitle?r!==0&&e[r-1].groupTitle===e[r].groupTitle?c.jsxs(f.Fragment,{children:[c.jsx($y,{}),c.jsx(My,{$isLastOfGroup:a})]}):c.jsxs(f.Fragment,{children:[c.jsx(LO,{children:e[r].groupTitle}),c.jsx(My,{$isLastOfGroup:a})]}):c.jsx($y,{})},AO=({selectable:e,hasStatus:r,hasThumbnail:a,hasTypeIcon:o,allChecked:s,disableAllChecked:u,hasHeaderGroups:h,columnConfig:p,defaultAscending:m,toggleAllCallback:x=()=>{},sortCallback:y=()=>{}})=>{const[v,k]=f.useState(p),[C,S]=f.useState(m),E=f.useCallback(M=>{x(M)},[x]),T=f.useCallback((M,O)=>{if(v[M]===void 0||!v[M].sortable)return;const N=[...v];let z=null;N.forEach((j,L)=>{j.sortActive&&(z=L),L===M?j.sortActive=!0:j.sortActive=!1});const _=z===M?!C:C,B=O===void 0?`column_${M}`:O;y(_,B),k(N),S(_)},[C,y,v]);return c.jsxs(TO,{children:[e?c.jsx(Ss,{$headerStyle:"header",$fixedWidth:30,children:c.jsx(ip,{checked:s,disabled:u,onChangeCallback:E})}):null,r?c.jsx(Ss,{$headerStyle:"header",$fixedWidth:10}):null,a?c.jsx(Ss,{$headerStyle:"header",$fixedWidth:70}):null,o?c.jsx(Ss,{$headerStyle:"header",$fixedWidth:35}):null,p.map((M,O,N)=>{const{header:z,alignment:_,hasCopyButton:B,sortActive:j,columnId:L,sortable:G,minWidth:Y}=M;return c.jsx(Ss,{$alignment:_,$hasCopyButton:B,$minWidth:Y,$headerStyle:h?"subHeader":"header",$isSortActive:j,children:c.jsxs($O,{$alignment:_,children:[h&&c.jsx(MO,{children:h&&OO(N,O)}),c.jsx(jO,{header:z,sortable:G,indexKey:O,columnId:L,isSortActive:j,ascending:C,toggleSort:T})]})},O)})]})},zO=b.div``,RO=b.div`
  display: table;
  width: 100%;
  position: relative;
`,L5=b.div`
  color: var(--grey-a11);
`,_O=b.div`
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

  ${L5} {
    margin-top: 10px;
  }
`,DO=b.div`
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
`,NO=({_checked:e=!1})=>e===!0,BO=({checkboxDisabled:e=!1})=>e===!0,HO=({columnConfig:e,selectable:r,rows:a=[],closeText:o,hasStatus:s=!1,hasThumbnail:u=!1,hasTypeIcon:h=!1,defaultAscending:p=!1,isLoading:m=!1,loadingText:x="Loading Data...",emptyTableTitle:y="",emptyTableText:v="",hasHeaderGroups:k=!1,sortCallback:C=()=>{},selectCallback:S=()=>{},toggleAllCallback:E=()=>{}})=>{const[T,M]=f.useState(!1),[O,N]=f.useState(!1),z=a.length===1&&a[0].columns.length===0&&!m;return f.useEffect(()=>{let _=!1,B=!1;a.every(NO)&&a.length>0&&!z&&(_=!0),(a.some(BO)||z||m)&&(B=!0),M(_),N(B)},[z,m,a]),c.jsx(zO,{children:c.jsxs(RO,{children:[c.jsx(AO,{selectable:r,hasStatus:s,hasThumbnail:u,hasTypeIcon:h,defaultAscending:p,allChecked:T,disableAllChecked:O,hasHeaderGroups:k,columnConfig:e,toggleAllCallback:E,sortCallback:C}),m?c.jsxs(_O,{children:[c.jsx(vr,{size:"large",styling:"primary"}),c.jsx(L5,{children:x})]}):null,z?c.jsxs(DO,{children:[c.jsx("h3",{children:y}),c.jsx("p",{children:v})]}):null,a.map((_,B)=>{const j=a.length-1===B;return c.jsx(kO,{rowData:_,isLastRow:j,selectable:r,selectCallback:S,columnConfig:e,hasStatus:s,hasThumbnail:u,hasTypeIcon:h,closeText:o},B)})]})})};b.div`
  position: relative;
  ${({theme:e})=>D`
    font-family: ${e.fontFamily.ui};
  `}
`;const UO=b(st)`
  flex-shrink: 0;
`,IO=b(rp)`
  flex-shrink: 0;
`;b(Ue)`
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
  ${Ud} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${UO} {
    margin-left: 5px;
  }
  ${IO} {
    margin-left: 5px;
  }
`;const Ly=b(Kb)``;b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({$alignment:e})=>e==="center"&&D`
    justify-content: center;
  `}

  ${({$alignment:e})=>e==="right"&&D`
    justify-content: flex-end;
`}

  ${Ly} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${Ly} {
      opacity: 1;
    };
  }
`;const PO=(e,r)=>{switch(r.type){case"CONNECTING":return{...e,connection:"connecting",address:r.address,loading:!0,errorMessage:""};case"CONNECTED":return{...e,connection:"connected",loading:!1};case"CONNECTION_FAIL":return{...e,loading:!1,connection:"error",errorMessage:r.errorMessage};case"PTZ_ERROR":return{...e,loading:!1,errorMessage:r.errorMessage};case"DISCONNECTED":return{image:"",connection:"disconnected",moving:null,zooming:null,loading:!1,stateID:e.stateID};case"SET_IMAGE":return{...e,image:r.image};case"MOVE_START":return{...e,moving:r.direction};case"STOP":return{...e,moving:null,zooming:null};case"ZOOM_START":return{...e,zooming:r.zooming};case"HOME":return e;default:return console.error(`Action ${r.type} not registered.`),e}},GO=({socketUrl:e="",imageRefresh:r=1e3})=>{const{sendJsonMessage:a,lastMessage:o}=wj(e),[s,u]=f.useReducer(PO,{connection:"disconnected",moving:null,zooming:null,image:"",loading:!1,stateID:Math.floor(Math.random()*1e3)}),{address:h=null}=s,p=f.useCallback(async({username:C,password:S,host:E,port:T=80})=>{u({type:"CONNECTING",address:E}),await a({method:"connect",params:{address:E,port:T,user:C,pass:S}})},[a]),m=f.useCallback(({direction:C})=>{console.debug("move",C);const S={x:0,y:0,z:0};switch(u({type:"MOVE_START",direction:C}),C){case"up":S.y=1;break;case"down":S.y=-1;break;case"left":S.x=-1;break;case"right":S.x=1;break}a({method:"ptzMove",params:{address:h,speed:S,timeout:30}})},[a,h]),x=f.useCallback(({zooming:C})=>{console.debug("zoom",C);const S={x:0,y:0,z:0};switch(u({type:"ZOOM_START",zooming:C}),C){case"in":S.z=1;break;case"out":S.z=-1;break}a({method:"ptzMove",params:{address:h,speed:S,timeout:30}})},[a,h]),y=f.useCallback(()=>{a({method:"ptzStop",params:{address:h}})},[a,h]),v=f.useCallback(async()=>{u({type:"DISCONNECTED"})},[]),k=f.useCallback(async()=>{h&&a({method:"fetchSnapshot",params:{address:h}})},[h,a]);return f.useEffect(()=>{const C=setInterval(k,r);return()=>{window.clearInterval(C)}},[k,r]),f.useEffect(()=>{if(!o)return;const{id:C="",result:S=null,error:E}=JSON.parse(o.data);if(E&&C!=="fetchSnapshot"){u({type:"PTZ_ERROR",errorMessage:E});return}else C==="connect"?(k(),u({type:"CONNECTED"})):C==="fetchSnapshot"?u({type:"SET_IMAGE",image:S||""}):C==="ptzMove"?console.debug("ptzMove"):C==="ptzStop"&&(console.debug("ptzStop"),u({type:"STOP"}))},[h,k,o]),{state:s,dispatch:u,actions:{connect:p,getImage:k,disconnect:v,zoom:x,stop:y,move:m}}},ba=f.createContext({state:{},dispatch:()=>{},actions:{}}),qO=({socketUrl:e="ws://localhost/wsapp/",imageRefresh:r=1e3,children:a})=>{const{state:o,dispatch:s,actions:u}=GO({socketUrl:e,imageRefresh:r});return c.jsx(ba.Provider,{value:{state:o,dispatch:s,actions:u},children:a})},FO=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,WO=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,VO=b.g`
`,YO=()=>{const[e,r]=f.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{r(!1),o({direction:"up"})},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(VO,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(WO,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M97.1695375,0.000553838433 L97.5,0.333477759 L97.5,96.5 L1.33347776,96.5 L1.00279053,96.1695538 L1.01292824,94.904196 C1.86331972,42.4545249 44.5585771,0.176923219 97.1695375,0.000553838433 Z",id:"PTZ-Hover-Up"})}),c.jsxs(FO,{$active:a==="up",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(1.002791, 0.000554)",children:[c.jsx("path",{d:"M96.1667469,-4.68958206e-13 L96.4972095,0.33292392 L96.4972095,96.4994462 L0.33068723,96.4994462 L2.98427949e-13,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,-4.68958206e-13 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)"}),c.jsx("path",{d:"M96.1667469,9.08073616e-12 L96.4972095,0.33292392 L96.1682095,0.658446162 L96.1835085,4.9999719 C46.8438228,5.16537489 6.62803783,44.4114895 5.04606009,93.4545769 L5.00997725,94.9436996 L4.99983954,96.2090574 L0.655209472,96.1734462 L0.33068723,96.4994462 L1.20792265e-12,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,9.08073616e-12 Z",id:"PTZ-Active-Up-Highlight",stroke:"url(#linearGradient-18)",fill:"url(#linearGradient-17)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447) translate(68.000000, 68.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-26"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-27)",xlinkHref:"#path-26"})]})]})},ZO=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,XO=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,QO=b.g`
`,KO=b.g`

`,JO=()=>{const[e,r]=f.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{o({direction:"down"}),r(!1)},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(QO,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(XO,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M193.146668,96.3343288 L193.47713,96.6672527 L193.47713,192.833775 L97.3106078,192.833775 L96.9799206,192.503329 L96.9900583,191.237971 C97.8404498,138.7883 140.535707,96.5106982 193.146668,96.3343288 Z",id:"PTZ-Hover-Down",transform:"translate(145.228525, 144.584052) rotate(180.000000) translate(-145.228525, -144.584052) "})}),c.jsxs(ZO,{$active:a==="down",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 96.167076)",fill:"url(#linearGradient-12)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Down-Slice",fillOpacity:"0.56",transform:"translate(48.248605, 48.416976) rotate(180.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M0.519854724,96.4994462 L0.189392188,96.1665222 L0.518392188,95.841 L0.50309316,91.4994743 C49.8427789,91.3340713 90.0585638,52.0879566 91.6405416,3.0448693 L91.6766244,1.55574655 L91.6867621,0.290388759 L96.0313922,0.326 L96.3559144,-4.8316906e-13 L96.6866017,0.330446162 L96.6764639,1.59580395 C95.8260725,54.0454751 53.1308151,96.3230768 0.519854724,96.4994462 Z",id:"PTZ-Active-Down-Highlight",stroke:"url(#linearGradient-15)"})]}),c.jsxs(KO,{id:"PTZ-Arrows-Icons",transform:"rotate(-45) translate(-138.146447, -137.146447) translate(68.000000, 68.000000) translate(71.000000, 125.000000) rotate(180.000000) translate(-71.000000, -125.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-22"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-23)",xlinkHref:"#path-22"})]})]})},eA=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,tA=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,nA=b.g`
`,rA=()=>{const[e,r]=f.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{r(!1),o({direction:"left"})},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(nA,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(tA,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M96.9801453,96.3343288 L97.3106078,96.6672527 L97.3106078,192.833775 L1.14408557,192.833775 L0.813398341,192.503329 L0.823536055,191.237971 C1.67392753,138.7883 44.3691849,96.5106982 96.9801453,96.3343288 Z",id:"PTZ-Hover-Left",transform:"translate(49.062003, 144.584052) rotate(-90.000000) translate(-49.062003, -144.584052) "})}),c.jsxs(eA,{$active:a==="left",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(0.813398, 96.167076)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(-90.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M0.188273843,0.331580881 L0.521197763,0.00111834491 L0.846720004,0.330118345 L5.18824575,0.314819318 C5.35364873,49.654505 44.5997634,89.87029 93.6428507,91.4522677 L95.1319735,91.4883506 L96.3973312,91.4984883 L96.36172,95.8431183 L96.68772,96.1676406 L96.3572738,96.4983278 L95.0919161,96.4881901 C42.6422449,95.6377986 0.364643223,52.9425412 0.188273843,0.331580881 Z",id:"PTZ-Active-Left-Highlight",stroke:"url(#linearGradient-14)",fill:"url(#linearGradient-13)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447)  translate(68.000000, 68.000000) translate(12.000000, 69.000000) rotate(-90.000000) translate(-12.000000, -69.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-20"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-21)",xlinkHref:"#path-20"})]})]})},aA=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,iA=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,oA=b.g`
`,lA=()=>{const[e,r]=f.useState(!1),{state:{moving:a},actions:{move:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{r(!1),o({direction:"right"})},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(oA,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[c.jsx(iA,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:c.jsx("path",{d:"M193.146668,0.167806588 L193.47713,0.500730508 L193.47713,96.6672527 L97.3106078,96.6672527 L96.9799206,96.3368066 L96.9900583,95.0714488 C97.8404498,42.6217777 140.535707,0.344175968 193.146668,0.167806588 Z",id:"PTZ-Hover-Right",transform:"translate(145.228525, 48.417530) rotate(90.000000) translate(-145.228525, -48.417530) "})}),c.jsxs(aA,{$active:a==="right",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 0.000554)",children:[c.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Right-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(90.000000) translate(-48.248605, -48.416976) "}),c.jsx("path",{d:"M96.68772,96.1678653 L96.3547961,96.4983278 L96.0292738,96.1693278 L91.6877481,96.1846268 C91.5223451,46.8449411 52.2762305,6.62915618 3.23314314,5.04717843 L1.74402039,5.0110956 L0.478662601,5.00095788 L0.514273843,0.656327817 L0.188273843,0.331805575 L0.518720004,0.00111834491 L1.78407779,0.0112560596 C54.2337489,0.861647539 96.5113506,43.5569049 96.68772,96.1678653 Z",id:"PTZ-Active-Right-Highlight",stroke:"url(#linearGradient-16)",fill:"url(#linearGradient-13)"})]}),c.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-137.792893, -137.500000) translate(68.000000, 68.000000) translate(127.000000, 69.000000) rotate(90.000000) translate(-127.000000, -69.000000)",fillRule:"nonzero",children:[c.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-24"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-25)",xlinkHref:"#path-24"})]})]})},sA=({children:e})=>c.jsxs("svg",{width:"237px",height:"245px",viewBox:"0 0 237 245",version:"1.1",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-1",children:[c.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),c.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-2",children:[c.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),c.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),c.jsx("circle",{id:"path-3",cx:"138.5",cy:"137.5",r:"106.5"}),c.jsxs("filter",{x:"-9.9%",y:"-12.2%",width:"119.7%",height:"124.4%",filterUnits:"objectBoundingBox",id:"filter-4",children:[c.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),c.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),c.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),c.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),c.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),c.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),c.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),c.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-5",children:[c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),c.jsx("path",{d:"M96.5,0 C149.795478,0 193,43.2045216 193,96.5 C193,149.795478 149.795478,193 96.5,193 C43.2045216,193 0,149.795478 0,96.5 C0,43.2045216 43.2045216,0 96.5,0 Z",id:"path-6"}),c.jsxs("filter",{x:"-0.8%",y:"-0.8%",width:"101.6%",height:"101.6%",filterUnits:"objectBoundingBox",id:"filter-8",children:[c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),c.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixInner1"}),c.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),c.jsxs("linearGradient",{x1:"49.8274193%",y1:"13.7528099%",x2:"50.1815273%",y2:"82.6324827%",id:"linearGradient-9",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50.170103%",y1:"15.6407997%",x2:"49.8181984%",y2:"84.5265853%",id:"linearGradient-10",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"99.9976822%",y1:"100%",x2:"30.4274195%",y2:"28.550434%",id:"linearGradient-11",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"87.5668564%",y1:"87.9295401%",x2:"33.2810997%",y2:"28.936849%",id:"linearGradient-12",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"87.568598%",y1:"87.9277819%",x2:"33.2803247%",y2:"28.9378254%",id:"linearGradient-13",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"22.297939%",y1:"79.0413218%",x2:"39.761035%",y2:"60.7027769%",id:"linearGradient-14",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"80.348219%",y1:"76.4229599%",x2:"62.8569051%",y2:"60.0361013%",id:"linearGradient-15",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"77.520937%",y1:"22.5831044%",x2:"57.8137717%",y2:"41.946341%",id:"linearGradient-16",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"43.428843%",x2:"25.1751595%",y2:"28.0552504%",id:"linearGradient-17",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"30.6678499%",y1:"23.1406239%",x2:"41.9194217%",y2:"34.4210798%",id:"linearGradient-18",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-19",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),c.jsx("path",{d:"M25.6553811,77.370593 L14.0428746,58.1532717 C13.6102476,57.4373681 12.8355055,57 12,57 C11.1644945,57 10.3897524,57.4373681 9.95712537,58.1532717 L-1.65538114,77.370593 C-2.10132346,78.1091204 -2.11539958,79.0310048 -1.69221345,79.7828447 C-1.26902733,80.5346846 -0.474230758,81 0.387493489,81 L23.6125065,81 C24.4742308,81 25.2690273,80.5346846 25.6922135,79.7828447 C26.1153996,79.0310048 26.1013235,78.1091204 25.6553811,77.370593 Z",id:"path-20"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-21",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M84.6553811,133.370593 L73.0428746,114.153272 C72.6102476,113.437368 71.8355055,113 71,113 C70.1644945,113 69.3897524,113.437368 68.9571254,114.153272 L57.3446189,133.370593 C56.8986765,134.10912 56.8846004,135.031005 57.3077865,135.782845 C57.7309727,136.534685 58.5257692,137 59.3874935,137 L82.6125065,137 C83.4742308,137 84.2690273,136.534685 84.6922135,135.782845 C85.1153996,135.031005 85.1013235,134.10912 84.6553811,133.370593 Z",id:"path-22"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-23",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M140.655381,77.370593 L129.042875,58.1532717 C128.610248,57.4373681 127.835505,57 127,57 C126.164495,57 125.389752,57.4373681 124.957125,58.1532717 L113.344619,77.370593 C112.898677,78.1091204 112.8846,79.0310048 113.307787,79.7828447 C113.730973,80.5346846 114.525769,81 115.387493,81 L138.612507,81 C139.474231,81 140.269027,80.5346846 140.692213,79.7828447 C141.1154,79.0310048 141.101323,78.1091204 140.655381,77.370593 Z",id:"path-24"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-25",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),c.jsx("path",{d:"M84.6553811,20.370593 L73.0428746,1.15327173 C72.6102476,0.437368074 71.8355055,0 71,0 C70.1644945,0 69.3897524,0.437368074 68.9571254,1.15327173 L57.3446189,20.370593 C56.8986765,21.1091204 56.8846004,22.0310048 57.3077865,22.7828447 C57.7309727,23.5346846 58.5257692,24 59.3874935,24 L82.6125065,24 C83.4742308,24 84.2690273,23.5346846 84.6922135,22.7828447 C85.1153996,22.0310048 85.1013235,21.1091204 84.6553811,20.370593 Z",id:"path-26"}),c.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-27",children:[c.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]})]}),c.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-20, -16)",children:[c.jsxs("g",{id:"PTZ-Base-Outer",children:[c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-4)",xlinkHref:"#path-3"}),c.jsx("use",{stroke:"url(#linearGradient-2)",strokeWidth:"1",fill:"url(#linearGradient-1)",fillRule:"evenodd",xlinkHref:"#path-3"})]}),c.jsxs("g",{id:"PTZ-Base-Inner",transform:"translate(138.500000, 137.500000) rotate(45.000000) translate(-138.500000, -137.500000) translate(42.000000, 41.000000)",children:[c.jsx("mask",{id:"mask-7",fill:"white",children:c.jsx("use",{xlinkHref:"#path-6"})}),c.jsxs("g",{children:[c.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-5)",fillRule:"evenodd",xlinkHref:"#path-6"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-8)",xlinkHref:"#path-6"})]}),c.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-B",stroke:"url(#linearGradient-9)",strokeLinecap:"square",mask:"url(#mask-7)"}),c.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-A",stroke:"url(#linearGradient-10)",strokeLinecap:"square",mask:"url(#mask-7)",transform:"translate(96.500000, 96.500000) rotate(-90.000000) translate(-96.500000, -96.500000) "})]}),e]})]}),cA=({children:e})=>c.jsxs("svg",{width:"239px",height:"121px",viewBox:"0 0 239 121",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom1",children:[c.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),c.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom2",children:[c.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),c.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),c.jsx("path",{d:"M42.6,0 L170.4,0 C193.92733,0 213,19.0278981 213,42.5 C213,65.9721019 193.92733,85 170.4,85 L42.6,85 C19.0726697,85 0,65.9721019 0,42.5 C0,19.0278981 19.0726697,0 42.6,0 Z",id:"path-zoom3"}),c.jsxs("filter",{x:"-9.9%",y:"-30.6%",width:"119.7%",height:"161.2%",filterUnits:"objectBoundingBox",id:"filter-zoom4",children:[c.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),c.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),c.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),c.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),c.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),c.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),c.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),c.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),c.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-zoom5",children:[c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),c.jsx("path",{d:"M32.1164062,0.625 L160.582031,0.625 C178.319433,0.625 192.698438,14.8959236 192.698438,32.5 C192.698438,50.1040764 178.319433,64.375 160.582031,64.375 L32.1164062,64.375 C14.3790049,64.375 0,50.1040764 0,32.5 C0,14.8959236 14.3790049,0.625 32.1164062,0.625 Z",id:"path-zoom6"}),c.jsxs("filter",{x:"-0.8%",y:"-2.4%",width:"101.6%",height:"104.7%",filterUnits:"objectBoundingBox",id:"filter-zoom7",children:[c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),c.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),c.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),c.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),c.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),c.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),c.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"shadowMatrixInner1"}),c.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),c.jsxs("linearGradient",{x1:"-103.741879%",y1:"13.7528099%",x2:"211.711869%",y2:"82.6324827%",id:"linearGradient-zoom8",children:[c.jsx("stop",{stopColor:"#324659",offset:"0%"}),c.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"12.2402545%",y1:"50%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom9",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"92.8257893%",y1:"51.9201456%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom10",children:[c.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"65.5323776%",y1:"100%",x2:"65.5323776%",y2:"0%",id:"linearGradient-zoom11",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"112.326836%",y1:"50%",x2:"-13.3174936%",y2:"50%",id:"linearGradient-zoom12",children:[c.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),c.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"-15.3833763%",y1:"43.598779%",x2:"72.9059278%",y2:"57.6171557%",id:"linearGradient-zoom13",children:[c.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),c.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom14",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),c.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom15",children:[c.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),c.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]})]}),c.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-200.000000, -490.000000) translate(213.000000, 508.000000)",children:[c.jsxs("g",{id:"PTZ-Zoom-Base-Outer",children:[c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom4)",xlinkHref:"#path-zoom3"}),c.jsx("use",{stroke:"url(#linearGradient-zoom2)",strokeWidth:"1",fill:"url(#linearGradient-zoom1)",fillRule:"evenodd",xlinkHref:"#path-zoom3"})]}),c.jsxs("g",{id:"PTZ-Zoom-Divider-Section",transform:"translate(10.000000, 10.000000)",children:[c.jsxs("g",{id:"PTZ-Zoom-Base-Inner",children:[c.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-zoom5)",fillRule:"evenodd",xlinkHref:"#path-zoom6"}),c.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom7)",xlinkHref:"#path-zoom6"})]}),c.jsx("path",{d:"M105.820053,40.7088832 L99.6638296,34.5975949 C102.060022,31.621888 101.697137,27.3062591 98.8371361,24.766097 C95.9771351,22.2259349 91.6163355,22.346137 88.902734,25.0399314 C86.1891326,27.7337257 86.0680466,32.0626948 88.6268862,34.90182 C91.1857259,37.7409453 95.5330871,38.1011814 98.5306741,35.7224793 L104.686898,41.8337675 C105.002147,42.1387442 105.504804,42.1387442 105.820053,41.8337675 C106.132899,41.5231118 106.132899,41.0195389 105.820053,40.7088832 Z M88.425235,30.1282878 C88.425235,27.0527607 90.9367746,24.5595534 94.0349157,24.5595534 C97.1330568,24.5595534 99.6445964,27.0527607 99.6445964,30.1282878 C99.6445964,33.2038149 97.1330568,35.6970222 94.0349157,35.6970222 C90.9382392,35.693515 88.428768,33.202361 88.425235,30.1282878 Z",id:"PTZ-Zoom-Divider-Section-Icon",fill:"#6A839E",fillRule:"nonzero"}),c.jsx("line",{x1:"95.3544271",y1:"1.5",x2:"95.3544271",y2:"13.5",id:"PTZ-Zoom-Divider-Section-Top-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"}),c.jsx("line",{x1:"95.3544271",y1:"50.5",x2:"95.3544271",y2:"62.5",id:"PTZ-Zoom-Divider-Section-Bottom-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"})]}),e]})]}),uA=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,dA=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,fA=b.g`
`,hA=()=>{const[e,r]=f.useState(!1),{state:{zooming:a},actions:{zoom:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{r(!1),o({zooming:"in"})},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(fA,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(10.000000, 10.625000)",children:[c.jsx(dA,{$hover:e,fillOpacity:"0.56",children:c.jsx("path",{d:"M96,0 L96,63.75 L160.883594,63.75 C178.620995,63.75 193,49.4790764 193,31.875 C193,14.2709236 178.620995,0 160.883594,0 L96,0 Z",id:"PTZ-Zoom-Hover-Plus-Slice",fill:"url(#linearGradient-zoom9)"})}),c.jsxs(uA,{$active:a==="in",transform:"translate(96.000000, 0.000000)",children:[c.jsx("path",{d:"M0,0 L0,63.75 L64.8835938,63.75 C82.6209951,63.75 97,49.4790764 97,31.875 C97,14.2709236 82.6209951,0 64.8835938,0 L0,0 Z",id:"PTZ-Zoom-Active-Plus-Slice",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),c.jsx("path",{d:"M96,0 L96,5 L32.1164062,5 C17.4302083,5 5.48398392,16.5663708 5.01434007,30.9927914 L5.00363033,31.4308221 L5,31.875 C5,46.5608308 16.8905918,58.5089041 31.6677396,58.746397 L32.1164062,58.75 L96,58.75 L96,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L96,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)",transform:"translate(48.000000, 31.875000) scale(-1, 1) translate(-48.000000, -31.875000) "})]}),c.jsx("g",{id:"PTZ-Zoom-Icons-Section",transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:c.jsx("path",{d:"M117.149921,14.1184213 L124.420095,14.1184213 C124.657568,14.1184213 124.850079,14.3104799 124.850079,14.5473962 L124.850079,21.8005035 C124.850079,22.9850849 125.812631,23.9453779 127,23.9453779 C128.187369,23.9453779 129.149921,22.9850849 129.149921,21.8005035 L129.149921,14.5473962 C129.149921,14.3104799 129.342432,14.1184213 129.579905,14.1184213 L136.850079,14.1184213 C138.037448,14.1184213 139,13.1581283 139,11.9735469 C139,10.7889655 138.037448,9.82867248 136.850079,9.82867248 L129.579905,9.82867248 C129.342432,9.82867248 129.149921,9.63661388 129.149921,9.3996976 L129.149921,2.14487441 C129.149921,0.960292981 128.187369,-3.55271368e-15 127,-3.55271368e-15 C125.812631,-3.55271368e-15 124.850079,0.960292981 124.850079,2.14487441 L124.850079,9.3996976 C124.850079,9.63661388 124.657568,9.82867248 124.420095,9.82867248 L117.149921,9.82867248 C115.962552,9.82867248 115,10.7889655 115,11.9735469 C115,13.1581283 115.962552,14.1184213 117.149921,14.1184213 L117.149921,14.1184213 Z",id:"PTZ-Zoom-Icon-Plus",fill:"url(#linearGradient-zoom14)"})})]})},gA=b.g`
  opacity: 0;
  ${({$active:e})=>e&&D`opacity: 1;`}

`,pA=b.g`
  opacity: 0;
  ${({$hover:e})=>e&&D`opacity: 1;`}
`,mA=b.g`
`,vA=()=>{const[e,r]=f.useState(!1),{state:{zooming:a},actions:{zoom:o,stop:s}}=f.useContext(ba),u=f.useCallback(()=>{r(!1),o({zooming:"out"})},[o]),h=f.useCallback(()=>{s(),r(!0)},[s]),p=f.useCallback(()=>{r(!0)},[]),m=f.useCallback(()=>{r(!1)},[]);return c.jsxs(mA,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(10.000000, 10.625000)",children:[c.jsx(pA,{$hover:e,fillOpacity:"0.56",children:c.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",id:"PTZ-Zoom-Hover-Minus-Slice",fill:"url(#linearGradient-zoom10)"})}),c.jsxs(gA,{$active:a==="out",children:[c.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),c.jsx("path",{d:"M97,0 L97,5 L33.1164062,5 C18.4302083,5 6.48398392,16.5663708 6.01434007,30.9927914 L6.00363033,31.4308221 L6,31.875 C6,46.5608308 17.8905918,58.5089041 32.6677396,58.746397 L33.1164062,58.75 L97,58.75 L97,63.75 L33.1164062,63.75 C15.3790049,63.75 1,49.4790764 1,31.875 C1,14.2709236 15.3790049,0 33.1164062,0 L97,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)"})]}),c.jsx("g",{transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:c.jsx("path",{d:"M2.14992117,10 C0.962552494,10 0,10.960293 0,12.1448744 C0,13.3294558 0.962552494,14.2897488 2.14992117,14.2897488 L21.8500788,14.2897488 C23.0374475,14.2897488 24,13.3294558 24,12.1448744 C24,10.960293 23.0374475,10 21.8500788,10 L2.14992117,10 Z",id:"PTZ-Zoom-Icon-Minus",fill:"url(#linearGradient-zoom15)"})})]})},xA=b.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`,yA=({debug:e=!1})=>{const{state:r}=f.useContext(ba);return c.jsxs(xA,{children:[c.jsxs(sA,{children:[c.jsx(YO,{}),c.jsx(JO,{}),c.jsx(rA,{}),c.jsx(lA,{})]}),c.jsxs(cA,{children:[c.jsx(vA,{}),c.jsx(hA,{})]}),e&&c.jsx("pre",{children:JSON.stringify(r,null,2)})]})};b.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${d5} {
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
  ${({$hasPadding:e})=>e&&`
    padding-bottom: 43px
  `}
;

  ${$e} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;b.div`
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
`;b.div`
  ${yl};
  max-width: 245px;
  font-size: 10px;
`;b.div`
  ${yl};
  max-width: 245px;
  font-size: 12px;
`;b.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${$e} {
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
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  height: 3px;
  width: 100%;
`;b.div`
  display: flex;
  height: 60px;
`;b.div`
  ${({$hasRightData:e})=>e&&D`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${$e} {
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
  ${yl};
  ${({$hasRightData:e})=>e?"max-margin: 140px;":"max-margin: 250px;"}};
  ${({$hasMarginBottom:e})=>e&&"margin-bottom: 1px;"};

  color: var(--grey-a10);
  font-size: 10px;
`;b.div`
  font-family: var(--font-data);
  ${yl};
  ${({$hasRightData:e})=>e?"max-width: 140px;":"max-width: 250px;"}

  color: var(--grey-11);
  font-size: 16px;
`;b.div`
  ${yl};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({$hasMarginBottom:e})=>e&&"margin-bottom: 6px;"};
`;b.div`
  ${yl};
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

  ${({$hasOnClick:e})=>e&&`
    cursor: pointer;
  `};
`;b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`;b.div`
  display: flex;
  ${T5} {
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
`;const bA=12;b.div`
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
  ${lc};
  color: var(--input-color-default);
  max-width: ${({$maxWidth:e})=>e||"40px"};
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
  padding-right: ${bA/2}px;
`;const wA=mr`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;b.div`
  height: var(--input-height, 40px);
  animation: ${({$shouldShake:e})=>e?wA:"none"} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({$borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`;b(st)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`;b.div`
  display: flex;
  gap: 0 8px;
`;b.button`
  ${ct};
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px var(--input-default-border-color);
  background-color: var(grey-2);
  pointer-events: ${({$active:e})=>e?"auto":"none"};
  opacity: ${({$active:e})=>e?"1":"0.5"};

  &:focus, &:hover {
    outline: 2px solid #838383;
  }
`;b.div`
  ${OT} {
    width: ${({$width:e})=>e||"60px"};
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
`;b(st)`
  margin-left: 10px;
`;b.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;const pg=b.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,SA=b.button`
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

  ${pg}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${pg}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,CA=({show:e,link:r,label:a="Share",copiedLabel:o="Copied"})=>{const[s,u]=f.useState(a),{copyToClipboard:h}=sp(),p=f.useCallback(()=>{h(r||window.location.href),u(o),setTimeout(()=>u(s),2e3)},[r,o,s,h]);return f.useEffect(()=>{u(a)},[a]),e?c.jsxs(SA,{onClick:p,children:[c.jsx(pg,{children:c.jsx(Se,{icon:"Link",size:16,color:"grey-10"})}),s]}):null},mg=b.div`
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
`,O5=D`
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

  ${mg}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${mg}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,A5=D`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,kA=b(Ue)`
  ${O5};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&D`
    &::after {
      ${A5};
    }
  `}
`,EA=b.button`
  ${ct};
  ${O5};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&D`
    &::after {
      ${A5};
    }
  `}
`,jA=({show:e=!0,link:r,label:a="Back",$showDivider:o,$iconInGutter:s,onClick:u})=>{const h=f.useMemo(()=>c.jsxs(Ve.Fragment,{children:[c.jsx(mg,{children:c.jsx(Se,{icon:"Back",size:16,color:"grey-10"})}),a]}),[a]);return e?c.jsx(Ve.Fragment,{children:u?c.jsx(EA,{$showDivider:o,$iconInGutter:s,onClick:u,children:h}):r&&c.jsx(kA,{to:r,$showDivider:o,$iconInGutter:s,children:h})}):null},TA=b.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,$A=b.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,MA=b.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,LA=b.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,z5=b.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,R5=b(z5)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,_5=D`
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
`,D5=D`
  ${_5};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${R5} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,OA=b(Ue)`
  ${D5};
`,AA=b.button`
  ${ct};
  ${D5};
`,zA=b.span`
  ${_5};
  pointer-events: none;
`,RA=b.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,_A=({showBreadcrumbs:e=!0,breadcrumbs:r=[],showHomeIcon:a=!0,back:o,share:s,$iconInGutter:u})=>{const{isLarge:h}=up(),p=u!==void 0?u:h,m=e&&r.length>0;return c.jsxs(TA,{children:[c.jsxs($A,{children:[o&&c.jsx(jA,{$showDivider:m,$iconInGutter:p,...o}),m?c.jsx(MA,{children:r.map((x,y)=>{const{text:v,href:k,onClick:C}=x,S=y===0,E=y===r.length-1,T=c.jsxs(Ve.Fragment,{children:[S&&a?c.jsx(R5,{children:c.jsx(Se,{icon:"Home",size:11,color:"grey-10"})}):null,v]});return c.jsx(Ve.Fragment,{children:c.jsxs(LA,{children:[C?c.jsx(AA,{onClick:C,type:"button",children:T}):k?c.jsx(OA,{to:k,children:T}):c.jsx(zA,{children:T}),E?null:c.jsx(z5,{children:c.jsx(Se,{icon:"Right",size:6,color:"grey-8"})})]})},y)})}):null]}),c.jsx(RA,{children:c.jsx(CA,{...s})})]})},Nr=Ve.createContext({selected:"",setSelected:()=>{}}),pp=({children:e})=>{const[r,a]=f.useState("");return c.jsx(Nr.Provider,{value:{selected:r,setSelected:a},children:e})},DA=b.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,NA=b.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,BA=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,HA=b.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,Oy=b.div`
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
`,N5=({layout:e="default",HeaderContent:r={},children:a})=>{const{PageHeaderArea:o,TabsElementArea:s,UtilityHeaderOptions:u}=r,h="content-layout-"+e;return c.jsxs(DA,{className:h,children:[u?c.jsx(_A,{...u}):null,o?c.jsx(NA,{children:c.jsx(c.Fragment,{children:o})}):null,s?c.jsxs(pp,{children:[c.jsx(BA,{children:c.jsx(HA,{children:c.jsx(c.Fragment,{children:s})})}),c.jsx(Oy,{children:c.jsx(c.Fragment,{children:a})})]}):c.jsx(Oy,{children:c.jsx(c.Fragment,{children:a})})]})},UA=b.div`
  min-height: ${({$contentHeight:e})=>e+"px"};
`,IA=b.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`,PA=({children:e})=>{const r=f.useRef(null),[a,o]=f.useState(0);return f.useEffect(()=>{r&&r.current&&o(r.current.clientHeight)},[r,e]),c.jsx(UA,{$contentHeight:a,children:c.jsx(IA,{ref:r,children:c.jsx(c.Fragment,{children:e})})})},vg=b.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,bd=b.div`
  background: var(--grey-10);
  flex: 1;
`,GA=b.div`
  flex: 0 0 20px;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`,qA=b.svg`
  transform: ${({$layout:e})=>e==="horizontal"?"rotate(0deg)":"rotate(90deg)"};
`,FA=b.svg`
  transform: rotate(0deg);
  ${({$direction:e})=>{switch(e){case"up":return"transform: rotate(-90deg);";case"down":return"transform: rotate(90deg);";case"left":return"transform: rotate(180deg);";default:return"transform: rotate(0deg);"}}};
`,WA=b.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout:e})=>e==="horizontal"?D`
    width: 16px;
    flex-direction: column;
    ${vg}{
      flex-direction: column;
    }

    ${bd}{
      width: 1px;
    }

  `:D`
      height: 16px;
      flex-direction: row;
      ${vg}{
        flex-direction: row;
      }
      ${bd}{
        height: 1px;
      }
  `}
`,VA=({state:e="default",layout:r="horizontal",arrowDirection:a})=>c.jsx(WA,{$layout:r,children:c.jsxs(vg,{children:[c.jsx(bd,{}),c.jsx(GA,{children:e==="default"?c.jsxs(qA,{$layout:r,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M13 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M10 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M7 14.875L7 5.125",strokeLinecap:"round",strokeLinejoin:"round"})]}):c.jsx(FA,{$direction:a,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625",stroke:"#9BA1A6",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx(bd,{})]})}),YA=b.div`
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
`,xg=b.div`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout:e,$minDimension:r})=>e==="vertical"?D`
    ${r?`min-height: ${r}px;`:null};
  `:D`
    ${r?`min-width: ${r}px;`:null};
  `}
`,Ii=b.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`,ZA=b.div`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize:e})=>e}px;
  display: ${({$collapseState:e})=>e==="collapsed"?"none":"block"};
  transition:
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);

  ${({$layout:e,$maxDimension:r,$minDimension:a})=>e==="vertical"?D`
    ${a?`min-height: ${a}px;`:"0"};
    ${r?`max-height: ${r}px;`:"none"};
    ${Ii}{
      min-height: ${a}px;
    }
  `:D`
    ${a?`min-width: ${a}px;`:"0"};
    ${r?`max-width: ${r}px;`:"none"};
    ${Ii}{
      min-width: ${a}px;
    }
  `}


  ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="collapsing"?D`
      transition: none;
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${Ii}{
        flex: 0 0 ${a}px;
        min-width: ${a}px;
        opacity: 0.5;
      }
    `:null}

    ${({$collapseState:e})=>e==="collapsed"?D`
      ${Ii}{
        display: none;
      }
    `:null}

    ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="peeking"?D`
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${Ii}{
        min-width: ${a}px;
        opacity: 0.5;
      }
    `:null}

    ${({$layout:e,$collapseState:r,$minDimension:a})=>r==="opening"?D`
    ${e==="horizontal"?"min-width: 0":"min-height: 0"};

    ${Ii}{
      min-width: ${a}px;
    }
    `:null}
`,yg=b.div`
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

  ${({$fauxHover:e})=>e==="false"?D`
    > div {
      opacity: 0.6;
    }
  `:D`
    > div {
      opacity: 1;
    }
  `}

`,XA=b.section`
  box-sizing: border-box;
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised:e})=>e==="true"?D`
    opacity: 1;
  `:null}

  ${({$layout:e})=>e==="vertical"?D`
    flex-direction: column;
    ${xg}{}
    ${yg}{
      cursor: row-resize;
    }
  `:null}

  ${({$reverse:e})=>e==="true"?D`
    ${xg}{ order: 2; }
    ${yg}{ order: 1; }
  `:null}
`,QA=f.forwardRef(({mainArea:e,sideArea:r,layout:a="horizontal",reverse:o,dividerSize:s=16,persist:u=!1,persistenceKey:h="resizable_ui",showDebug:p},m)=>{const y="resizable_layout_"+h,v=1,k=50,C=r.defaultSize||350,S=r.minSize||0,E=r.maxSize,T=e.minSize,[M,O]=f.useState(!1),[N,z]=f.useState(),[_,B]=f.useState(),[j,L]=f.useState(),[G,Y]=f.useState(r.defaultCollapsed?"collapsed":"open"),[I,Z]=f.useState(C),[re,X]=f.useState(C),[te,H]=f.useState(C),q=f.useRef(null),ae=f.useRef(null),[ie,de]=j0(`${y}_size`,null),[A,F]=j0(`${y}_state`,null),[Q,le]=j0(`${y}_quick_open_size`,null);f.useEffect(()=>{M||(u&&(ie&&Z(ie),A&&Y(A),Q&&H(Q)),O(!0))},[M,u,A,ie,Q]),f.useEffect(()=>{!M||!r.onSideAreaStateChange||r.onSideAreaStateChange(G)},[M,r,G]),f.useImperativeHandle(m,()=>({open:()=>{fe()},close:()=>{me()},reset:()=>{he()}}));const he=f.useCallback(()=>{Z(C),Y("open"),de(null),F(null)},[Z,C,Y,de,F]),me=f.useCallback(()=>{Y("collapsed"),Z(v),X(v),u&&(de(v),F("collapsed"),le(re))},[Z,Y,F,de,le,re,u]),fe=f.useCallback(()=>{Y("open");let an;I>v&&ae.current?an=a==="horizontal"?ae.current.clientWidth:ae.current.clientHeight:an=te,X(an),Z(an),u&&(de(Math.round(I)),F("open"))},[u,F,de,te,I,a]),xe=f.useCallback(()=>{G==="collapsing"&&I<S-k?me():(X(Math.round(I)),H(Math.round(I)),fe()),L(!1)},[me,fe,S,I,G]),ve=f.useCallback(an=>{an.preventDefault();const{clientX:Br,clientY:xr}=an;X(G==="collapsed"?I:Cs(I,S,E)),z({x:Br,y:xr}),B({x:0,y:0}),L(!0)},[I,E,S,G]),Te=()=>{j&&xe()},pt=f.useCallback(an=>{const{clientX:Br,clientY:xr}=an;let Dn,Nn=G;if(j&&N&&re){if(B({x:N.x-Br,y:N.y-xr}),a==="horizontal"){const Yt=(q.current?.clientWidth??0)-s-(T||0);o?Dn=Cs(re-(N.x-Br),null,Yt):Dn=Cs(re+(N.x-Br),null,Yt)}else{const Yt=(q.current?.clientHeight??0)-s-(T||0);o?Dn=Cs(re-(N.y-xr),null,Yt):Dn=Cs(re+(N.y-xr),null,Yt)}if(r.collapsable){const Yt=Dn<S-k;G==="open"&&Yt||G==="opening"&&Yt?Nn="collapsing":G==="collapsing"&&!Yt?Nn="open":G==="collapsed"?Nn="peeking":G==="peeking"&&!Yt&&(Nn="opening")}Z(Dn),Y(Nn)}},[Z,B,j,N,re,G,a,s,T,S,o,r.collapsable]),dt=f.useCallback(()=>{j&&xe()},[j,xe]);f.useEffect(()=>(document.addEventListener("mouseleave",dt),()=>{document.removeEventListener("mouseleave",dt)}),[dt]);const mt=()=>G==="collapsed"||G==="peeking"?a==="horizontal"?o?"right":"left":o?"down":"up":a==="horizontal"?o?"left":"right":o?"up":"down",_n=()=>G==="collapsed"||G==="peeking"||G==="collapsing"?"arrow":"default",ci=c.jsxs(YA,{children:[c.jsxs("div",{children:[c.jsx("span",{children:"State:"})," ",G]}),c.jsxs("div",{children:[c.jsx("span",{children:"Position:"})," ",N?.x,", ",N?.y]}),c.jsxs("div",{children:[c.jsx("span",{children:"Difference:"})," ",_?.x,", ",_?.y]}),c.jsxs("div",{children:[c.jsx("span",{children:"sideAreaStartBasis:"})," ",re]}),c.jsxs("div",{children:[c.jsx("span",{children:"sideAreaBasis:"})," ",I]}),c.jsxs("div",{children:[c.jsx("span",{children:"lastOpenSize:"})," ",te]})]});return c.jsxs(XA,{ref:q,onPointerMove:pt,onPointerUp:Te,$initialised:M?"true":"false",$layout:a,$reverse:o?"true":"false",children:[c.jsx(xg,{$layout:a,$minDimension:T,children:c.jsx(c.Fragment,{children:e.content})}),c.jsx(yg,{onPointerDown:ve,onDoubleClick:he,$size:s,$fauxHover:j?"true":"false",children:c.jsx(VA,{state:_n(),layout:a,arrowDirection:mt()})}),c.jsx(ZA,{ref:ae,style:{flexBasis:`${I}px`},$defaultSize:C,$minDimension:S,$maxDimension:E,$layout:a,$collapseState:G,children:c.jsx(Ii,{children:c.jsx(c.Fragment,{children:r.content})})}),p?ci:null]})}),Cs=(e,r,a)=>{let o=e;return o=a&&o>a?a:o,o=r&&o<r?r:o,o},B5=50,H5=68,cc=b.div`
  display: flex;
`,KA=b.div``,uc=b.div`
  padding: 0;
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${({$maxWidth:e})=>e&&D`
      & > div {
        max-width: ${e};
      }
    `}
`,JA=b.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Ay=b.div`
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({$legacyLayout:e,$paddingOverride:r,$maxWidth:a})=>e&&D`
    padding: ${r||"40px 20px"};

    @media ${xn.medium} {
      padding: ${r||"40px"};
    }

    @media ${xn.large} {
      max-width: ${a||"1200px"};
      padding: ${r||"70px 90px"};
    }
  `}
`,Pd=b.div`
  opacity: 0;
  transition: opacity var(--speed-fast) var(--easing-primary-in-out);

  ${({$compact:e})=>e&&D`
    font-size:14px;
  `}
`,ii=b.div`
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
`,U5=b.div`
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
`,mp=D`
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
`,ez=b.a`
  display: flex;
  text-decoration: none;
`,tz=b.div`
  margin-left: 15px;
`,nz=b.div`
  ${mp}

  ${({$menuOpen:e})=>e&&D`
  ${Pd}{
    opacity: 1;
  }
`}

  &:hover ${ii}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${$e}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }
`,rz=b(Ue)`
  ${mp}

  ${({$menuOpen:e})=>e&&D`
    ${Pd}{
      opacity: 1;
    }
  `}

  &:hover ${ii}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${$e}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&D`
    color: var(--grey-12);

    ${ii},
    &:hover ${ii}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,az=b.button`
  ${mp}

  ${({$menuOpen:e})=>e&&D`
    ${Pd}{
      opacity: 1;
    }

    ${U5}{
      opacity: 1;
      transition: opacity var(--speed-normal) var(--easing-primary-in-out) var(--speed-fast);
    }
  `}

  &:hover ${ii}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${$e}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&D`
    ${ii},
    &:hover ${ii}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,wd=({hasSubmenu:e=!1,contextKey:r=-1,submenuOpen:a,menuOpen:o,title:s,href:u,icon:h,compact:p,isActive:m,isExternalLink:x,onClickCallback:y})=>{const v=c.jsxs(Ve.Fragment,{children:[c.jsx(ii,{$compact:p,children:c.jsx(Se,{icon:h,color:m?"inverse":"dimmed",size:20})}),c.jsx(Pd,{$compact:p,children:s}),e?c.jsx(U5,{children:c.jsx(Se,{icon:a?"Up":"Down",color:"dimmed"})}):null]});return e?c.jsx(az,{$menuOpen:o,$isActive:m,onClick:()=>y&&y(r),children:v}):x?c.jsx(ez,{href:u,target:"_blank",children:c.jsxs(nz,{$menuOpen:o,children:[v,c.jsx(tz,{children:c.jsx(Se,{icon:"ExternalLink",color:"dimmed",size:12})})]})}):c.jsx(rz,{$menuOpen:o,to:u||"#",$isActive:m,onClick:()=>y&&y(r),children:v})},iz=(e,r)=>{switch(r.type){case"SET_MENU":{const a=localStorage.getItem(window.location.hostname+"_isMenuOpen");let o=a==="true"||a===null&&!!r.data.defaultMenuOpen,s=a==="true"&&!!r.data.canAlwaysPin;const u=r.data.desktopSize==="xlarge"||!!r.data.canAlwaysPin;return r.data.desktopSize==="xxlarge"&&r.data.canAlwaysPin===!1&&(o=!0,s=!0),{...e,desktopSize:r.data.desktopSize,isMenuOpen:o,isMenuPinned:s,canPin:u}}case"SET_OPEN":return e.isMenuOpen===!0||e.desktopSize==="xxlarge"&&!e.canPin?e:{...e,isMenuOpen:!0};case"SET_CLOSE":return e.isMenuOpen===!1||e.desktopSize==="xxlarge"&&!e.canPin||e.isMenuPinned===!0?e:{...e,isMenuOpen:!1};case"TOGGLE_PIN":{if(!e.canPin)return e;let a=!0;return e.isMenuPinned?(localStorage.setItem(window.location.hostname+"_isMenuOpen","false"),a=!1):localStorage.setItem(window.location.hostname+"_isMenuOpen","true"),{...e,isMenuOpen:a,isMenuPinned:!e.isMenuPinned}}default:return console.error(`Action ${r.type} not registered.`),e}},oz={desktopSize:"large",isMenuPinned:!1,isMenuOpen:!1,canPin:!1},lz=(e,r)=>{const{activeScreen:a}=up(),[o,s]=f.useReducer(iz,oz),u=f.useCallback((x,y,v)=>{s({type:"SET_MENU",data:{defaultMenuOpen:x,desktopSize:v,canAlwaysPin:y}})},[]),h=f.useCallback(()=>{s({type:"SET_OPEN"})},[]),p=f.useCallback(()=>{s({type:"SET_CLOSE"})},[]),m=f.useCallback(()=>{s({type:"TOGGLE_PIN"})},[]);return f.useLayoutEffect(()=>{u(e,r,a)},[a,e,r,u]),{menuState:o,setMenuOpen:h,setMenuClose:p,togglePinned:m}},sz=b.ul`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`,cz=b.div`
  display: block;
  height: 40px;
  margin-left: 40px;
`,uz=b.div`
  overflow: hidden;
`,dz=b.span`
  display: block;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
`,I5=b(Ue)`
  ${ct};
  display: block;
`,fz=b.div`
  margin-left: 15px;
`,P5=b.a`
  ${ct};
  display: flex;
  align-items: center;
`,zy=b.li`
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

  ${I5}, ${P5}{
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    ${({$isActive:e})=>D`

      &:hover {
        color: var(--grey-12);
      }

      ${e&&D`
        &, &:hover {
          color: var(--grey-11);
          font-weight: 600;
        }
      `}

    `};

  }
`,bg=b.div`
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

`,hz=b.div`
  min-height: ${({$mobileMenu:e})=>e?"30px":"70px"};
  width: inherit;

  ${bg}{
    display: grid;
    grid-template-rows: 0fr;
  };

  ${({$open:e})=>e&&D`
    ${bg}{
      grid-template-rows: 1fr;

      transition:
        grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
        opacity var(--speed-fast) var(--easing-primary-in-out);

      opacity: 1;
    }
  `};
`,G5=({item:e,menuOpen:r,submenuOpen:a,contextKey:o,topLevelPath:s,mobileMenu:u=!1,onClickCallback:h})=>{const{icon:p,title:m,href:x,submenu:y,isExternalLink:v}=e,k=s===x,C=f.useRef(null),S=gz(y,h)||[],E=S.length>0;return c.jsxs(hz,{$open:a,$mobileMenu:u,children:[c.jsx(wd,{title:m,href:x,isActive:k,icon:p,hasSubmenu:E,isExternalLink:v,submenuOpen:a,menuOpen:r,onClickCallback:h,contextKey:o}),E?c.jsx(bg,{ref:C,children:c.jsx(uz,{children:S})}):null]})},gz=(e,r)=>{if(!e)return;const a=[],o=[];return a.push([]),e.forEach((s,u)=>{const{title:h,href:p,isExternalLink:m}=s;p?m?a[a.length-1].push(c.jsx(zy,{$isActive:!1,children:c.jsxs(P5,{href:p,target:"_blank",children:[h,c.jsx(fz,{children:c.jsx(Se,{icon:"ExternalLink",color:"dimmed",size:10})})]})},u)):a[a.length-1].push(c.jsx(zy,{$isActive:!1,children:c.jsx(I5,{to:p,onClick:()=>r&&r(-1),children:h})},u)):(a[a.length-1].length>1&&a.push([]),a[a.length-1].push(c.jsx(cz,{children:c.jsx(dz,{children:h})},u)))}),a.forEach((s,u)=>{o.push(c.jsx(sz,{children:s},u))}),o},pz=b(Ue)`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`,mz=b.div`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`,q5=b.div`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`,vz=b.object``,xz=b.object`
  max-width: 180px;
`,yz=b.div``,bz=b.div`
  background: var(--global-element-background);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`,Ry=b.div`
  min-height: 70px;
`,wz=b.div`
  position: relative;
  height: 100%;
  ${({$isPinned:e})=>D`
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
  `};
`,Sz=b.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${({$open:e,$desktopSize:r})=>D`
    background-color: var(--global-element-background);
    box-shadow: 0px 0px 7px 0px var(--primary-a2);
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
    border-right: 1px solid var(--dividing-line);

    ${r==="xxlarge"?"":D`
      transition: width var(--speed-normal) var(--easing-primary-in);
    `};

    ${q5}{
      transition: opacity var(--speed-normal) var(--easing-primary-in-out);
      opacity: ${e?1:0};
    }
  `}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`,Cz=b.div`
  width: var(--global-menu-width-open);
  display: flex;
  flex-direction: column;
  height: 100%;
`,kz=({content:e,home:r="/",logoMark:a,logoText:o,keepOpenText:s="Keep Open",autoHideText:u="Auto-Hide",supportUrl:h,supportText:p="Help & Support",defaultMenuOpen:m=!0,canAlwaysPin:x=!1,onMenuToggle:y=()=>{}})=>{const{menuState:v,setMenuOpen:k,setMenuClose:C,togglePinned:S}=lz(m,x),[E,T]=f.useState(0),M=_r(),O=f.useCallback(B=>{B.pointerType!=="touch"&&k()},[k]),N=f.useCallback(()=>{C()},[C]),z=f.useCallback(B=>{B.pointerType!=="touch"&&S()},[S]);f.useEffect(()=>{y(v.isMenuOpen)},[v.isMenuOpen,y]);const _=f.useCallback(B=>{B!==-1&&T(E!==B?B:-1)},[T,E]);return c.jsx(wz,{$isPinned:v.isMenuPinned,children:c.jsx(c.Fragment,{children:tc.createPortal(c.jsx(Sz,{$open:v.isMenuOpen,$desktopSize:v.desktopSize,onPointerEnter:v.isMenuPinned?()=>{}:O,onTouchStart:()=>console.debug("touch"),onMouseLeave:v.isMenuPinned?()=>{}:N,children:c.jsxs(Cz,{children:[c.jsxs(pz,{to:r,children:[c.jsx(mz,{children:a?c.jsx(vz,{type:"image/svg+xml",data:a}):c.jsx(n5,{})}),c.jsx(q5,{children:o?c.jsx(xz,{type:"image/svg+xml",data:o}):c.jsx(ET,{})})]}),c.jsx(yz,{children:e.items.map((B,j)=>c.jsx(G5,{topLevelPath:a5(M.pathname),contextKey:j,menuOpen:v.isMenuOpen,submenuOpen:j===E&&v.isMenuOpen,onClickCallback:_,item:B,focusedContext:E},j))}),c.jsxs(bz,{children:[h&&c.jsx(Ry,{children:c.jsx(wd,{compact:!0,isActive:!1,icon:"Question",title:p,href:h,menuOpen:v.isMenuOpen})}),v.canPin?c.jsx(Ry,{children:c.jsx(wd,{compact:!0,isActive:!1,icon:v.isMenuOpen&&v.isMenuPinned?"Left":"Menu",title:v.isMenuPinned?s:u,onClickCallback:z,menuOpen:v.isMenuOpen})}):null]})]})}),document.body)})})},Ez=b.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,jz=b.div`
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
`,Tz=b.div`
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
`,$z=b.div`
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
`,Mz=b.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
`,F5=b.div`
  cursor: pointer;
`,Lz=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Oz=b.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${F5}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,Az=b.pre`
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
`,zz=b.div`
`,Rz=({item:e,onUserDrawerMetaClick:r,copySuccessMessage:a,includeCopyTitle:o})=>{const{icon:s,title:u,subTitle:h,notes:p,hasCopyIcon:m}=e,{copyToClipboard:x}=sp(),[y,v]=f.useState(!1),[k,C]=f.useState("dimmed"),S=f.useCallback((M,O,N)=>{let z;o?z=(M||"")+`
`+(O||"")+`
`+(N||""):z=(O||"")+`
`+(N||""),x(z),v(!0),setTimeout(()=>{v(!1)},1500)},[o,x]),E=f.useCallback(()=>{C("mono")},[]),T=f.useCallback(()=>{C("dimmed")},[]);return c.jsx(f.Fragment,{children:u!==""&&c.jsx(F5,{onClick:r,children:c.jsxs(Ez,{children:[c.jsxs(Lz,{children:[c.jsxs(Mz,{children:[c.jsx(Se,{icon:s,size:10,color:"dimmed"}),c.jsx(jz,{title:u,children:u})]}),c.jsxs(zz,{children:[y&&c.jsx(Az,{children:a!==""?a:"Copied!"}),m?c.jsx(Oz,{onClick:()=>S(u,h,p),onMouseEnter:E,onMouseLeave:T,children:c.jsx(Se,{icon:"Copy",size:12,color:k})}):null]})]}),h!==""?c.jsx(Tz,{title:h,children:h}):null,p!==""?c.jsx($z,{title:p,children:p}):null]})})})},_z=b.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
  align-items: center;
  cursor: pointer;
  svg {
    margin-top: 7px;
  }
`,Dz=b.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,Nz=b.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,Bz=b.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,_y=({icon:e="Settings",title:r,subTitle:a,onClickCallback:o=()=>{}})=>c.jsxs(_z,{onClick:o,children:[c.jsx(Se,{icon:e,size:18,color:"dimmed"}),c.jsxs(Dz,{children:[c.jsx(Nz,{children:r}),c.jsx(Bz,{children:a})]})]}),Hz=b.div``,Uz=b.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${xn.medium} {
    position: static;
    bottom: 0;
  }
`,Dy=b.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,Iz=b.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,Pz=b.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,Gz=b.div`
    padding: 0 20px;
`,Ny=b.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,By=b.li`
  padding: 10px 0;
`,qz=b.div`
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
`,Hy=b(Ue)`
  ${ct};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&D`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,Fz=b.div`
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
`,Wz=b.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,Vz=b.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({icon:e})=>e!==""?"136px;":"164px;"};
  color: var(--grey-11);
  opacity: 0.5;
`,Yz=e=>{if(e)return document.documentElement.setAttribute("lang",e),e;const r=navigator.language.split("-")[0],a=document.documentElement.lang;return a||(document.documentElement.setAttribute("lang",r),r)},W5=({hasLanguage:e=!1,selectedLanguageText:r="",languageOptionsText:a="LANGUAGE / 言語",selectedLangAttribute:o,hasLogout:s=!0,logoutLink:u="/logout",logoutText:h="Logout",hasCurrentUser:p=!0,currentUserText:m="Current User",accountOptionText:x="Account Options",userSubmenu:y=[],userDrawerBespoke:v,loggedInUser:k,hasSwitchTheme:C=!1,isLightMode:S=!0,switchThemeText:E="SWITCH THEME",selectedThemeText:T="",onLogout:M=()=>{},onLanguageToggle:O=()=>{},closeOnClick:N,onThemeToggle:z=()=>{},userDrawerFooter:_={icon:"",title:""},copySuccessMessage:B,includeCopyTitle:j,onUserDrawerMetaClick:L=()=>{},userDrawerMeta:G,hasUserDrawerMeta:Y,hasUserDrawerFooter:I})=>{const{icon:Z,title:re}=_,X=f.useCallback(async H=>{H.preventDefault(),await M(),window.location.assign(u),N&&N()},[N,u,M]),te=f.useCallback(()=>{N&&N()},[N]);return f.useEffect(()=>{Yz(o)},[o]),c.jsxs(f.Fragment,{children:[c.jsx(Hz,{children:c.jsxs(c.Fragment,{children:[p?c.jsxs(Iz,{children:[c.jsx(Dy,{children:m}),k]}):null,Y?c.jsx(Wz,{children:G?.map((H,q)=>c.jsx(Rz,{onUserDrawerMetaClick:L,item:H,includeCopyTitle:j,copySuccessMessage:B},q))}):null,y.length>0?c.jsxs(Pz,{children:[c.jsx(Dy,{children:x}),c.jsx(Ny,{children:y.map(({text:H,href:q},ae)=>c.jsx(By,{children:c.jsx(Hy,{to:q,onClick:te,children:H})},ae))})]}):null,v||null,s?c.jsx(Gz,{children:c.jsx(Ny,{children:c.jsx(By,{children:c.jsx(Hy,{onClick:X,to:u,children:h})})})}):null]})}),c.jsxs(Uz,{children:[C&&c.jsx(_y,{icon:S?"LightMode":"DarkMode",title:E,subTitle:T,onClickCallback:z}),e&&c.jsx(_y,{icon:"Language",title:a,subTitle:r,onClickCallback:O}),I?c.jsxs(Fz,{title:re,icon:Z,children:[Z?c.jsx(qz,{children:c.jsx(Se,{icon:Z,size:14,color:"dimmed"})}):null,c.jsx(Vz,{icon:Z,children:re})]}):null]})]})},Zz=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,Xz=b.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,Qz=b.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,Kz=b.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.$image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${e=>e.$image?"block":"none"};
`,Jz=b.div`
  margin-left: 20px;
`,eR=b.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,tR=b.div`
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
`,nR=b.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,rR=({imgUrl:e,title:r,message:a,time:o})=>c.jsxs(Zz,{children:[c.jsx(Xz,{children:e?c.jsx(Kz,{$image:e}):c.jsx(Qz,{})}),c.jsxs(Jz,{children:[c.jsx(eR,{children:r}),c.jsx(tR,{children:a}),c.jsx(nR,{children:o})]})]}),Uy=b.div`
  display: flex;
  flex-direction: column;
`,T0=b.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,aR=b.div`
  border-bottom: var(--dividing-line) 1px solid;
`,Iy=(e,r)=>e.map((a,o)=>c.jsx(aR,{children:c.jsx(rR,{...a})},`alert-${r}-${o}`)),V5=({read:e,unread:r,noNotificationsText:a="No new notifications",readNotificationsText:o="New",unreadNotificationsText:s="Read"})=>e.length===0&&r.length===0?c.jsx(Uy,{children:c.jsx(T0,{children:a})}):c.jsxs(Uy,{children:[r&&c.jsxs(f.Fragment,{children:[c.jsx(T0,{children:o}),Iy(r,"unread")]}),e&&c.jsxs(f.Fragment,{children:[c.jsx(T0,{children:s}),Iy(e,"read")]})]}),Y5=D`
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

`,iR=b.div`
  ${Y5};

  ${({$themeColor:e})=>e?D`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:D`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,Z5=b.span`
  display: inline-block;
`,X5=b.span``,Q5=D`
  ${Y5};
  text-decoration: none;

  ${({$themeColor:e})=>e?D`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:D`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({$themeColor:e})=>e?D`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:D`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,Py=b.div`
  a {
    ${Q5};
  }
`,oR=b.div`
  button {
    ${ct};
    ${Q5};
  }
`,lR=b.div`
  ${({$ready:e,$minWidth:r})=>D`

    visibility: ${e?"visible":"hidden"};
    opacity: ${e?"1":"0"};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${Z5}, ${X5}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${r}px;`};
    }
  `};
`,sR=({text:e,color:r,linkHref:a,linkTo:o,linkText:s,onClick:u})=>{const h=f.useRef(null),p=f.useRef(null),[m,x]=f.useState(!1),[y,v]=f.useState(!1),[k,C]=f.useState(0);f.useEffect(()=>{x(!1);const O=setTimeout(()=>{const N=h.current?.getBoundingClientRect().width??0,z=p.current?.getBoundingClientRect().width??0,_=N>=z?N:z;C(Math.ceil(_)),x(!0)},100);return()=>clearTimeout(O)},[e,s]);const S=f.useMemo(()=>c.jsx(Z5,{ref:h,children:e}),[e]),E=f.useMemo(()=>u||o||a?c.jsx(X5,{ref:p,children:s||e}):null,[u,o,a,s,e]),T=f.useMemo(()=>m?c.jsx(f.Fragment,{children:y?E:S}):c.jsxs(f.Fragment,{children:[S,E]}),[m,y,S,E]),M=f.useMemo(()=>u?c.jsx(oR,{$themeColor:r,children:c.jsx("button",{onClick:u,type:"button",children:T})}):o?c.jsx(Py,{$themeColor:r,children:c.jsx(Ue,{to:o,children:T})}):a?c.jsx(Py,{$themeColor:r,children:c.jsx("a",{href:a,children:T})}):c.jsx(iR,{$themeColor:r,children:S}),[u,o,a,r,T,S]);return c.jsx(lR,{$ready:m,$minWidth:k,onPointerEnter:()=>m&&v(!0),onPointerLeave:()=>m&&v(!1),children:M})},cR=b.div`
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
`,uR=b.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,dR=b.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,fR=b.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,hR=b.input`
  ${lc};
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
`,gR=b.div`
  height: inherit;
  display: flex;
  gap: 0;
`,pR=mr`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,$0=b.button.attrs({type:"button"})`
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

  ${({$isActive:e})=>e&&D`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${pR} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,mR=b.div``,M0=b.div`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: 56px;
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;

  width: ${({$baseWidth:e})=>e||"200px"};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({$isOpen:e})=>e&&D`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,vR=b.div`
    overflow-y: scroll;
    margin-right: -17px;
`,K5=({hasNotifications:e=!1,hasLanguage:r=!1,selectedLanguageText:a="",languageOptionsText:o,selectedLangAttribute:s,hasLogout:u=!0,logoutLink:h="/logout",logoutText:p="Logout",hasSearch:m=!1,hasCurrentUser:x=!0,currentUserText:y="Current User",accountOptionText:v="Account Options",searchPlaceholder:k="Search for devices, analysis tasks, etc.",userSubmenu:C=[],userDrawerBespoke:S,loggedInUser:E,notificationsHistory:T,customDrawer:M,hasSwitchTheme:O=!1,isLightMode:N=!0,switchThemeText:z="SWITCH THEME",selectedThemeText:_="",onLogout:B=()=>{},onLanguageToggle:j=()=>{},onThemeToggle:L=()=>{},userDrawerFooter:G,userDrawerMeta:Y,onUserDrawerMetaClick:I=()=>{},hasUserDrawerMeta:Z,copySuccessMessage:re,includeCopyTitle:X,hasUserDrawerFooter:te,badge:H})=>{const[q,ae]=f.useState(null),ie=de=>{ae(A=>A===de?null:de)};return c.jsx(cR,{children:c.jsxs(c.Fragment,{children:[m?c.jsxs(dR,{children:[c.jsx(fR,{children:c.jsx(Se,{icon:"Search",size:16,color:"grey-6"})}),c.jsx(hR,{placeholder:k})]}):c.jsx("div",{}),c.jsxs(uR,{children:[H&&c.jsx(sR,{...H}),c.jsxs(gR,{children:[M&&c.jsx($0,{$isActive:q==="custom",onClick:()=>ie("custom"),children:c.jsx(k5,{...M})}),e&&c.jsx($0,{$isActive:q==="notifications",onClick:()=>ie("notifications"),children:c.jsx(Se,{icon:"Notifications",size:20,color:"dimmed"})}),c.jsx($0,{$isActive:q==="user",onClick:()=>ie("user"),children:c.jsx(Se,{icon:"UserProfile",size:20,color:"dimmed"})})]})]}),tc.createPortal(c.jsxs(mR,{children:[c.jsx(M0,{$isOpen:q==="user",children:c.jsx(W5,{hasLanguage:r,hasLogout:u,logoutLink:h,logoutText:p,hasCurrentUser:x,currentUserText:y,accountOptionText:v,userSubmenu:C,userDrawerBespoke:S,loggedInUser:E,onLogout:B,onLanguageToggle:j,selectedLanguageText:a,languageOptionsText:o,selectedLangAttribute:s,hasSwitchTheme:O,isLightMode:N,switchThemeText:z,selectedThemeText:_,onThemeToggle:L,onUserDrawerMetaClick:I,userDrawerFooter:G,userDrawerMeta:Y,hasUserDrawerMeta:Z,copySuccessMessage:re,includeCopyTitle:X,hasUserDrawerFooter:te})}),e?c.jsx(M0,{$isOpen:q==="notifications",$baseWidth:"300px",children:c.jsx(vR,{children:T?c.jsx(V5,{...T}):null})}):null,M&&c.jsx(M0,{$isOpen:q==="custom",$baseWidth:M.width?M.width:"200px",children:c.jsx(c.Fragment,{children:M.customComponent})})]}),document.body)]})})},J5=b.div`
  display: flex;
  flex-direction: row;
`,vp=({children:e,defaultTabId:r})=>{const{setSelected:a}=f.useContext(Nr);return f.useEffect(()=>{a(r)},[r,a]),c.jsx(J5,{children:c.jsx(c.Fragment,{children:e})})},xR=b.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`,yR=b.label`
  height: 40px;
  ${({theme:e})=>D`
    font-family: ${e.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({$active:e})=>e?"600":"500"};
  letter-spacing: 0.09px;
  color: ${({$active:e})=>e?"var(--primary-11)":"var(--grey-11)"};
  cursor: pointer;
  border-bottom: ${({$active:e})=>e?"2px solid var(--primary-11)":"2px solid transparent"};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
  user-select: none;
`,Is=({children:e,tabFor:r,onClick:a,...o})=>{const{selected:s,setSelected:u}=f.useContext(Nr),h=f.useCallback(p=>{a&&a(p),u(r)},[a,u,r]);return c.jsx(xR,{...o,onClick:h,children:c.jsx(yR,{$active:s===r,children:c.jsx(c.Fragment,{children:e})})})},bR=b.div`
`,ma=({children:e,tabId:r,...a})=>{const{selected:o}=f.useContext(Nr);return o===r?c.jsx(bR,{...a,children:c.jsx(c.Fragment,{children:e})}):null},wR=b.button`
  ${ct}
  flex-basis: auto;
  flex-grow: 1;
`,SR=b.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({theme:e})=>D`
    transition: border var(--speed-normal) var(--easing-primary-in-out);
    border-bottom: 5px solid ${e.colors.menu.indicator};

    ${$e} {
      [stroke]{
        stroke: var(--dimmed);
      }
    }

    &:hover {
      border-bottom-color: ${e.colors.menu.hover};
      ${$e} {
        [stroke]{
          stroke: ${e.colors.menu.hover};
        }
      }
    }
  `};

  ${({$isActive:e,theme:r})=>e&&D`
    &, &:hover {
      border-bottom-color: ${r.colors.menu.active};
      ${$e} {
        [stroke]{
          stroke: ${r.colors.menu.active};
        }
      }
    }
  `}
`,Uu=({tabFor:e,icon:r,closeId:a,counter:o,status:s,customComponent:u,...h})=>{const{selected:p,setSelected:m}=f.useContext(Nr),x=f.useCallback(y=>{m(p===y?a:y)},[a,p,m]);return c.jsx(wR,{...h,onClick:()=>x(e),children:c.jsx(SR,{$isActive:p===e,children:c.jsx(k5,{icon:r,status:s,counter:o})})})};b.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${({$active:e})=>e?D`
    border-bottom: 3px solid var(--primary-11);
    `:D`
    border-bottom: 3px solid transparent;
  `};
  ${$e} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`;b.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({$active:e})=>e?"var(--primary-11)":"var(--grey-11)"};
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
  padding-left: ${({$paddingLeft:e})=>e||"87px"};
  box-shadow: 0 -5px 5px 0 var(--black-a1);
  border-bottom: 1px solid var(--grey-6);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;const CR=b.button`
  ${ct}
  
  font-family: var(--font-ui);
  background-color: var(--global-element-background);
  border-top: 1px solid var(--dividing-line);
  font-weight: 400;
  color: var(--grey-10);
  
  height: ${B5}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`,kR=b.div`
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
`,ER=b.div`
  text-transform: uppercase;
`,jR=({closeId:e,closeText:r="CLOSE MENU",children:a,formAction:o,...s})=>{const{setSelected:u}=f.useContext(Nr);return c.jsxs(CR,{onClick:()=>u(e),...s,children:[c.jsx(kR,{children:c.jsx(Se,{icon:"CloseCompact",color:"dimmed",size:16})}),c.jsx(ER,{children:r})]})},TR=b.div`
  position: relative;
  min-height: calc(100vh - ${H5+B5}px);
  width: 100%;
  overflow-y: scroll;
`,$R=b.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,MR=({closeId:e,children:r})=>{const{selected:a}=f.useContext(Nr);return a===e?null:c.jsx(TR,{children:c.jsx($R,{children:c.jsx(c.Fragment,{children:r})})})},LR=b.div``,Gy=b.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--dividing-line);
`,OR=({content:e,supportUrl:r,supportText:a="Help & Support",closeId:o})=>{const[s,u]=f.useState(0),h=_r(),{setSelected:p}=f.useContext(Nr),m=f.useCallback(y=>{(y===-1||!e.items[y].submenu)&&p(o),y!==-1&&u(s!==y?y:-1)},[o,e.items,s,p]),x=f.useCallback(()=>{p(o)},[o,p]);return c.jsxs(LR,{children:[e.items.map((y,v)=>c.jsx(Gy,{"data-key":v,children:c.jsx(G5,{mobileMenu:!0,topLevelPath:a5(h.pathname),contextKey:v,menuOpen:!0,submenuOpen:v===s,onClickCallback:m,item:y,focusedContext:s})},v)),r&&c.jsx(Gy,{children:c.jsx(wd,{compact:!0,isActive:!1,icon:"Question",title:a,href:r,menuOpen:!0,onClickCallback:x})})]})},AR=b(Ue)`
  ${ct};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`,zR=b.div`
  margin-right: 15px;
`,RR=b.object``,_R=({home:e="/",logoMark:r,closeId:a})=>{const{setSelected:o}=f.useContext(Nr);return c.jsx(AR,{to:e,onClick:()=>o(a),children:c.jsx(zR,{children:r?c.jsx(RR,{type:"image/svg+xml",data:r}):c.jsx(n5,{})})})},DR=b.div`
  background: var(--global-element-background);

  z-index: 100;
  display: flex;
  flex-direction: column;
`,NR=({closeId:e,hasLanguage:r,hasLogout:a,logoutLink:o,hasCurrentUser:s,userSubmenu:u,userDrawerBespoke:h,loggedInUser:p,onLogout:m,onLanguageToggle:x,...y})=>{const{setSelected:v}=f.useContext(Nr),k=f.useCallback(()=>{v(e)},[e,v]);return c.jsx(DR,{children:c.jsx(W5,{hasLanguage:r,hasLogout:a,logoutLink:o,hasCurrentUser:s,userSubmenu:u,userDrawerBespoke:h,loggedInUser:p,onLogout:m,onLanguageToggle:x,...y,closeOnClick:k})})},$r="closeMenu",qy="notifications",Fy="user",Wy="menu",Vy="custom",BR=b.nav`
  background-color: var(--global-element-background);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`,HR=b.div`
  display: flex;
  flex-direction: row;
  height: ${H5}px;
  border-bottom: var(--dividing-line) 1px solid;

  ${J5} {
    flex-basis: 0;
    flex-grow: 3;
  }
`,UR=({content:e,home:r,logoMark:a,supportUrl:o,defaultMenuOpen:s=!0,closeText:u,hasLanguage:h,hasLogout:p,logoutLink:m,hasCurrentUser:x,hasNotifications:y,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,notificationsHistory:S,customDrawer:E,supportText:T,onLogout:M,onLanguageToggle:O,...N})=>c.jsx(BR,{children:c.jsxs(pp,{children:[c.jsxs(HR,{children:[c.jsx(_R,{home:r,logoMark:a,closeId:$r}),c.jsxs(vp,{defaultTabId:$r,children:[E&&c.jsx(Uu,{...E,tabFor:Vy,closeId:$r}),y?c.jsx(Uu,{tabFor:qy,icon:"Notifications",closeId:$r}):null,c.jsx(Uu,{tabFor:Fy,icon:"UserProfile",closeId:$r}),c.jsx(Uu,{tabFor:Wy,icon:"Menu",closeId:$r})]})]}),c.jsxs(MR,{closeId:$r,children:[c.jsx(ma,{tabId:Vy,children:E&&E.customComponent}),c.jsx(ma,{tabId:qy,children:S&&y?c.jsx(V5,{...S}):null}),c.jsx(ma,{tabId:Fy,children:c.jsx(NR,{hasLanguage:h,hasLogout:p,logoutLink:m,hasCurrentUser:x,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,onLogout:M,onLanguageToggle:O,...N,closeId:$r})}),c.jsx(ma,{tabId:Wy,children:c.jsx(OR,{content:e,supportUrl:o,supportText:T,defaultMenuOpen:s,closeId:$r})}),c.jsx(jR,{closeText:u,closeId:$r})]})]})}),xp=({content:e,home:r,openWidth:a,logoMark:o,logoText:s,supportUrl:u,defaultMenuOpen:h,canAlwaysPin:p,paddingOverride:m,maxWidth:x,legacyLayout:y,children:v,keepOpenText:k,autoHideText:C,supportText:S,onMenuToggle:E,...T})=>{const{isLarge:M}=up();return M?c.jsxs(cc,{children:[c.jsx(kz,{content:e,home:r,openWidth:a,logoMark:o,logoText:s,supportUrl:u,defaultMenuOpen:h,canAlwaysPin:p,onMenuToggle:E,keepOpenText:k,autoHideText:C,supportText:S}),c.jsxs(JA,{children:[c.jsx(K5,{...T}),c.jsx(Ay,{$maxWidth:x,$paddingOverride:m,$legacyLayout:y,children:c.jsx(c.Fragment,{children:v})})]})]}):c.jsxs(KA,{children:[c.jsx(UR,{content:e,home:r,logoMark:o,supportUrl:u,defaultMenuOpen:h,supportText:S,...T}),c.jsx(Ay,{children:c.jsx(c.Fragment,{children:v})})]})},IR=b.div`
  width: 286px;
  border-right: 1px solid var(--grey-a7);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,PR=b.div`
  height: 84px;
  color: var(--grey-11);
  border-bottom: 1px solid var(--grey-a7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`,GR=b.div`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`,qR=b.div`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`,va=b.div`
  position: relative;
  border-bottom: 1px solid var(--grey-a7);
  padding: 22px 20px 21px 20px;
`,FR=b.div`
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
`;const WR=b(Ue)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`;b(Ue)`
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
`;const Gd=({logoTextTop:e,logoTextBottom:r})=>c.jsxs(PR,{children:[c.jsx(GR,{children:e}),c.jsxs(qR,{children:["•",r,"•"]})]}),qd=({children:e,...r})=>c.jsx(IR,{...r,children:c.jsx(c.Fragment,{children:e})}),qt=pe.div`
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
`,VR=pe.div`
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
  
  ${qt}{
    margin: 0;
  }
`,YR=pe.div`
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
`,yn=({children:e})=>c.jsxs(VR,{children:[c.jsx(YR,{children:c.jsx(Ue,{to:"/",children:c.jsx(Se,{size:12,icon:"Home"})})}),c.jsx(qt,{children:e})]}),ZR=pe.div`
    margin: 100px 200px;
`,XR=()=>c.jsxs(ZR,{children:[c.jsx(yn,{children:"FormPage.tsx"}),c.jsx(zr,{title:"Input State Examples",areaTitle:"Forms",areaHref:"/"}),c.jsxs(lp,{children:[c.jsx(_t,{name:"my_field",label:"Basic",placeholder:"Placeholder...",fieldState:"default",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Required",placeholder:"",fieldState:"required",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Loading",placeholder:"",fieldState:"processing",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Valid",placeholder:"",fieldState:"valid",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0}),c.jsx(_t,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0,feedbackMessage:"Error: Oh noes!!!"}),c.jsx(op,{name:"my_field",label:"My Field",placeholder:"",fieldState:"default",showFeedback:!0})]})]}),QR=()=>{const[e,r]=f.useReducer(hp,[]),[a]=f.useState(""),[o,s]=f.useState({showSetIndex:!0,pointIndexOffset:1,showPointHandle:!0,showPointLabel:!0,showLabelShadow:!0,setIndexOffset:1,showMoveHandle:!0,fixedImgDimensions:{x:2310,y:1535},boundaryOffset:0,showDirectionMark:!0,areaFillColor:"",areaTransparencyLevel:0}),u=f.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:600,y:200},{x:1100,y:450}],readOnly:!1,styling:"primary"}]})},[]),h=f.useCallback(async()=>{r({type:"LOAD",state:[{name:"UP",points:[{x:1048,y:456},{x:1613,y:584},{x:1322,y:985},{x:922,y:785}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40},{name:"DOWN",points:[{x:841,y:700},{x:256,y:576}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"}]})},[]),p=f.useCallback(({target:{value:E}})=>{r({type:"RENAME_SET",index:0,data:{name:E}})},[]),m=f.useCallback((E,{target:{value:T}})=>{r({type:"RENAME_SET",index:E,data:{name:T}})},[]),x=f.useCallback((E,{target:{value:T}})=>{r({type:"UPDATE_FILL_COLOR",index:E,data:{areaFillColor:T}})},[]),y=f.useCallback((E,{target:{value:T}})=>{r({type:"UPDATE_TRANSPARENCY_LEVEL",index:E,data:{areaTransparencyLevel:parseInt(T)}})},[]),v=f.useCallback((E=0)=>()=>{r({type:"UPDATE_SET_OPTIONS",index:E,data:{readOnly:!e[0]?.readOnly}})},[e]),k=f.useCallback(E=>{const T=e.findIndex(M=>M.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:T,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:E,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]),C=f.useCallback(E=>()=>{s({...o,[E]:!o[E]})},[o]);f.useEffect(()=>{o.showDirectionMark?h():u()},[u,h,o]);const S=f.useCallback(({target:{value:E}})=>{s({...o,boundaryOffset:parseInt(E)})},[o]);return c.jsxs(cc,{children:[c.jsx(yn,{children:"LinePage.tsx"}),c.jsxs(qd,{children:[c.jsx(Gd,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsx(va,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})}),c.jsxs(va,{children:[c.jsx(Wt,{labelText:"Show Point Handle",htmlFor:"showPointHandle",children:c.jsx("input",{id:"showPointHandle",type:"checkbox",name:"showPointHandle",checked:o.showPointHandle,onChange:C("showPointHandle")})}),c.jsx(Wt,{labelText:"Show Move Handle",htmlFor:"showMoveHandle",children:c.jsx("input",{id:"showMoveHandle",type:"checkbox",name:"showMoveHandle",checked:o.showMoveHandle,onChange:C("showMoveHandle")})}),c.jsx(Wt,{labelText:"Show Point",htmlFor:"showPoint",children:c.jsx("input",{id:"showPoint",type:"checkbox",name:"showPoint",checked:o.showPoint,onChange:C("showPoint")})}),c.jsx(Wt,{labelText:"Show Direction Mark",htmlFor:"showDirectionMark",children:c.jsx("input",{id:"showDirectionMark",type:"checkbox",name:"showDirectionMark",checked:o.showDirectionMark,onChange:C("showDirectionMark")})}),c.jsx(Wt,{labelText:"Show Label Shadow",htmlFor:"showLabelShadow",children:c.jsx("input",{id:"showLabelShadow",type:"checkbox",name:"showLabelShadow",checked:o.showLabelShadow,onChange:C("showLabelShadow")})})]}),c.jsxs(va,{children:[o.showDirectionMark?c.jsxs(c.Fragment,{children:[c.jsx(_t,{id:"renameLine1",label:"Rename UP Line",fieldState:"default",name:"renameLine1",value:e[0]?.name||"",onChange:E=>m(0,E)}),c.jsx(_t,{id:"renameLine2",label:"Rename DOWN Line",fieldState:"default",name:"renameLine2",value:e[1]?.name||"",onChange:E=>m(1,E)})]}):c.jsx(_t,{id:"rename",label:"Rename Line",fieldState:"default",name:"rename",value:e[0]?.name||"",onChange:p}),c.jsx(Wt,{labelText:"Boundary Offset",htmlFor:"boundaryOffset",children:c.jsx(ap,{id:"boundaryOffset",type:"number",name:"boundaryOffset",min:0,value:o.boundaryOffset,onChange:S})}),c.jsx(_t,{id:"fillColor",label:"Area Fill Color",fieldState:"default",name:"fillColor",value:e[0]?.areaFillColor||"",onChange:E=>x(0,E)}),c.jsx(_t,{id:"transparencyLevel",label:"Area Tranparency Level",fieldState:"default",name:"transparencyLevel",value:e[0]?.areaTransparencyLevel||"",onChange:E=>y(0,E)})]}),c.jsx(va,{children:c.jsx(st,{design:"secondary",onClick:v(),children:"Toggle Read Only"})})]}),c.jsxs(uc,{$padBottom:!1,children:[a&&c.jsx("div",{children:a}),c.jsx(ao.Provider,{value:{state:e,dispatch:r},children:c.jsx(AL,{options:o,onLineClick:k,src:"/scorer-ui-kit/images/line-ui-railyard.jpg"})})]})]})},Yy=pe.div`
  margin-bottom: 15px;
`,KR=pe.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,JR=()=>{const[e,r]=f.useReducer(hp,[]),[a]=f.useState(""),[o,s]=f.useState("localhost/wsapp"),[u,h]=f.useState(""),[p,m]=f.useState(!1),[x,y]=f.useState(!1),[v,k]=f.useState(400),[C,S]=f.useState(!1),{createMediaModal:E}=dp(),[T,M]=f.useState({loop:!0,autoPlay:!0}),O={showSetIndex:!0,showLabelShadow:!0,setIndexOffset:1,showDirectionMark:p},N=f.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:1407,y:869},{x:2293,y:531}],showPointHandle:!0,showMoveHandle:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:1426,y:254},{x:2260,y:283}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"secondary"},{name:"Yikes!",points:[{x:500,y:500},{x:1e3,y:1e3}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"danger"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),z=f.useCallback(async()=>{},[]);f.useEffect(()=>{N()},[N]);const _=f.useCallback(()=>{o&&h(o)},[o]),B=f.useCallback(I=>{m(I)},[]),j=f.useCallback(I=>{S(I)},[]),L=f.useCallback(()=>{M({loop:!0,autoPlay:!0})},[]),G=f.useCallback(()=>{M({loop:!1,autoPlay:!1,muted:!0}),E({mediaType:"video",src:`ws://${u}/`,dismissCallback:L})},[E,L,u]),Y=f.useCallback(I=>{const Z=e.findIndex(re=>re.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:Z,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:I,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return c.jsxs(cc,{children:[c.jsx(yn,{children:"LineRTCPage.tsx"}),c.jsxs(qd,{children:[c.jsx(Gd,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsx(va,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})}),c.jsxs(va,{children:[c.jsx(Yy,{children:c.jsx(pl,{checked:p,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:B,rightTheme:"on",state:"default"})}),c.jsx(Yy,{children:c.jsx(pl,{checked:C,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:j,rightTheme:"on",state:"default"})}),c.jsx(st,{design:"secondary",onClick:N,children:"Cancel"}),c.jsx(st,{style:{marginLeft:"10px"},onClick:z,children:"Save"})]})]}),c.jsxs(uc,{children:[a&&c.jsx(ga,{message:a,type:"error"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[c.jsxs(st,{design:"secondary",onClick:()=>y(I=>!I),children:[x?"Hide":"Show"," Scroll Spacer"]}),x&&c.jsx("input",{type:"range",min:100,max:2e3,step:50,value:v,onChange:I=>k(Number(I.target.value)),style:{width:"200px"}}),x&&c.jsxs("span",{style:{color:"#888"},children:[v,"px"]})]}),x&&c.jsx("div",{style:{height:`${v}px`,background:"repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)"},children:c.jsx("p",{style:{padding:"20px",color:"#888"},children:"TEMP: Scroll test spacer"})}),c.jsx(_t,{label:"Host",name:"host",fieldState:"default",value:o,onChange:({target:{value:I}})=>s(I)}),c.jsx(st,{onClick:_,children:"Connect"}),u&&c.jsxs(c.Fragment,{children:[c.jsx(ao.Provider,{value:{state:e,dispatch:r},children:c.jsx(FL,{ws:`ws://${u}/`,videoOptions:T,options:O,onLineClick:Y})}),c.jsx(KR,{children:c.jsx(st,{onClick:G,children:"Open Video Modal"})})]})]})]})},Iu=pe(np)`
  width: 100%;
  margin-bottom: 15px;
`,e_=pe.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,t_=()=>{const[e,r]=f.useReducer(hp,[]),[a]=f.useState(""),{createMediaModal:o}=dp(),[s,u]=f.useState({showSetIndex:!0,pointIndexOffset:1,showPointLabel:!0,setIndexOffset:1,showDirectionMark:!1,showLabelShadow:!1}),[h,p]=f.useState({loop:!0,autoPlay:!0}),m=f.useCallback(async()=>{r({type:"LOAD",state:[{name:"Line 1",points:[{x:968,y:1297},{x:1849,y:1393}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:568,y:1097},{x:1649,y:1193}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),x=f.useCallback(()=>{r({type:"ADD_SET",data:{points:[{x:0,y:0},{x:500,y:0},{x:500,y:500},{x:0,y:500}]}})},[]),y=f.useCallback((O=0)=>{r({type:"REMOVE_SET",index:O})},[]),v=f.useCallback((O=0)=>{r({type:"REMOVE_POINT",index:O})},[]),k=f.useCallback((O=0)=>{r({type:"ADD_POINT",index:O})},[]);f.useEffect(()=>{m()},[m]);const C=f.useCallback(O=>{u(N=>({...N,showDirectionMark:O}))},[]),S=f.useCallback(O=>{u(N=>({...N,showLabelShadow:O}))},[]),E=f.useCallback(()=>{p({loop:!0,autoPlay:!0})},[]),T=f.useCallback(()=>{p({loop:!1,autoPlay:!1,muted:!0}),o({mediaType:"video",src:"/scorer-ui-kit/traffic.mp4",dismissCallback:E})},[o,E]),M=f.useCallback(O=>{const N=e.findIndex(z=>z.showPointHandle);r({type:"UPDATE_SET_OPTIONS",index:N,data:{showPointHandle:!1,showMoveHandle:!1}}),r({type:"UPDATE_SET_OPTIONS",index:O,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return c.jsxs(cc,{children:[c.jsx(yn,{children:"LineVideoPage.tsx"}),c.jsxs(qd,{children:[c.jsx(Gd,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsxs(va,{children:[c.jsx(Iu,{icon:"Add",design:"primary",onClick:x,children:"Add Shape"}),c.jsx(Iu,{icon:"Add",design:"primary",onClick:()=>k(e.length-1),children:"Add Point"}),c.jsx(Iu,{icon:"Delete",design:"warning",onClick:()=>v(e.length-1),children:"Remove Point"}),c.jsx(Iu,{icon:"Delete",design:"warning",onClick:()=>y(e.length-1),children:"Remove Shape"}),c.jsx(pl,{checked:s.showDirectionMark,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:C,rightTheme:"on",state:"default"}),c.jsx("br",{}),c.jsx(pl,{checked:s.showLabelShadow,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:S,rightTheme:"on",state:"default"})]}),c.jsx(va,{style:{flex:"1"},children:c.jsx("pre",{children:JSON.stringify(e,null,2)})})]}),c.jsxs(uc,{$padBottom:!1,children:[a&&c.jsx("div",{children:a}),c.jsx(ao.Provider,{value:{state:e,dispatch:r},children:c.jsx(NL,{options:s,onLineClick:M,videoOptions:h,src:"/scorer-ui-kit/traffic.mp4"})}),c.jsx(e_,{children:c.jsx(st,{onClick:T,children:"Open Video Modal"})})]})]})},n_=pe.div`
  margin: 0 auto;
  padding: 100px 100px;
  max-width: 1024px;
  box-sizing: content-box;
`,L0=pe.section`
  display: block;
  margin-bottom: 64px;
`,r_=pe.h1`
  font-family: var(--font-ui);
  font-weight: 200;
  color: var(--grey-10);
  padding: 0;
  margin: 0 0 36px;
`,O0=pe.h2`
  font-family: var(--font-ui);
  font-weight: 300;
  color: var(--grey-12);
`,A0=pe.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
`,tn=pe.div`
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
`,nn=pe.div`
  display: block;
  font-family: var(--font-ui);
  letter-spacing: 0.4px;
  font-size: 14px;
  color: var(--grey-12);
  font-weight: 500;
`,rn=pe.div`
  font-family: var(--font-data);
  font-weight: 300;
  font-size: 14px;
  color: var(--grey-11);
`,a_=()=>c.jsxs(n_,{children:[c.jsx(r_,{children:"SCORER UI Kit"}),window.location.hostname!=="localhost"?c.jsxs(L0,{children:[c.jsx(O0,{children:"Key Resources"}),c.jsx(A0,{children:c.jsx(tn,{children:c.jsxs("a",{href:"/scorer-ui-kit/storybook",children:[c.jsx(nn,{children:"Storybook"}),c.jsx(rn,{children:"All the key components of the SCORER UI Kit, previewable along with options using Storybook."})]})})})]}):null,c.jsxs(L0,{children:[c.jsx(O0,{children:"Examples"}),c.jsxs(A0,{children:[c.jsx(tn,{children:c.jsxs(Ue,{to:"/layouts",children:[c.jsx(nn,{children:"Global UI - Layout"}),c.jsx(rn,{children:"A basic implementation example of the page Layout component."}),c.jsx(qt,{children:"Layouts.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/split-layouts",children:[c.jsx(nn,{children:"Split Layout"}),c.jsx(rn,{children:"A page layout with the drag-to-resize layout component."}),c.jsx(qt,{children:"SplitLayout.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/customdrawer",children:[c.jsx(nn,{children:"Custom User Drawer"}),c.jsx(rn,{children:"Shows how to add custom injected section to the user drawer."}),c.jsx(qt,{children:"CustomUserDrawerPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/tabs",children:[c.jsx(nn,{children:"Tabs Example"}),c.jsx(rn,{children:"A simple implementation of tabs."}),c.jsx(qt,{children:"TabsPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/table",children:[c.jsx(nn,{children:"Table Example"}),c.jsx(rn,{children:"A TypeTable implementation with examples on setup and how to use selections."}),c.jsx(qt,{children:"TablePage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/line",children:[c.jsx(nn,{children:"Line"}),c.jsx(rn,{children:"The line tool used commonly for setting up of areas of interest used in system configurations."}),c.jsx(qt,{children:"LinePage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/linertc",children:[c.jsx(nn,{children:"Line WebRTC"}),c.jsx(rn,{children:"A variation of the Line tool using a WebRTC video background instead of a static image."}),c.jsx(qt,{children:"LineRTCPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/linevideo",children:[c.jsx(nn,{children:"Line Video"}),c.jsx(rn,{children:"A variation of the Line tool using a video background instead of a static image."}),c.jsx(qt,{children:"LineVideoPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/forms",children:[c.jsx(nn,{children:"Forms"}),c.jsx(rn,{children:"Form inputs and state examples."}),c.jsx(qt,{children:"FormPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/ptz",children:[c.jsx(nn,{children:"PTZ"}),c.jsx(rn,{children:"An example of a working PTZ control. Requires a PTZ camera login."}),c.jsx(qt,{children:"PTZPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/login",children:[c.jsx(nn,{children:"Login"}),c.jsx(rn,{children:"A code sample of our commonly used login view."}),c.jsx(qt,{children:"Login.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/customalert",children:[c.jsx(nn,{children:"Component Theme Override Example"}),c.jsx(rn,{children:"Override CSS based theme for components."}),c.jsx(qt,{children:"CustomAlertsPage.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/switch-test",children:[c.jsx(nn,{children:"Switch Example"}),c.jsx(rn,{children:"A demonstration of the Switch component with API integration."}),c.jsx(qt,{children:"SwitchTest.tsx"})]})}),c.jsx(tn,{children:c.jsxs(Ue,{to:"/usepoll-test",children:[c.jsx(nn,{children:"usePoll — StrictMode Fix"}),c.jsx(rn,{children:"Side-by-side comparison of usePoll before and after the React StrictMode canceled-ref fix."}),c.jsx(qt,{children:"UsePollTestPage.tsx"})]})})]})]}),c.jsxs(L0,{children:[c.jsx(O0,{children:"Deprecated"}),c.jsx(A0,{children:c.jsx(tn,{children:c.jsxs(Ue,{to:"/globalUI",children:[c.jsx(nn,{children:"Global UI (Deprecated)"}),c.jsx(rn,{children:"The legacy implementation used for page layouts."}),c.jsx(qt,{children:"GlobalUIPage.tsx"})]})})})]})]}),i_=pe.div`
  flex: 1;
  padding: 70px 70px 0 70px;
  overflow-y: scroll;
  form {
    max-width: 600px;
  }
`,o_=pe.img`
  width: 100%;
`,l_=()=>{const{state:{image:e,connection:r,errorMessage:a,loading:o},actions:{connect:s}}=f.useContext(ba),[u,h]=f.useState({host:"",username:"",password:""}),p=f.useCallback(({target:x})=>{h({...u,[x.id]:x.value})},[u]),m=f.useCallback(x=>{x.preventDefault(),s(u)},[s,u]);return c.jsxs(cc,{children:[c.jsx(yn,{children:"PTZPage.tsx"}),c.jsxs(qd,{children:[c.jsx(Gd,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),c.jsxs(va,{children:[c.jsx(WR,{to:"/",children:"Back"}),c.jsx(FR,{children:"Camera Controls"})]}),r==="connected"&&c.jsx(yA,{debug:!0})]}),c.jsxs(i_,{children:[a&&c.jsx(ga,{message:a,type:"error"}),r==="connected"?c.jsx(o_,{src:e||void 0,alt:"PTZ Camera"}):c.jsxs(lp,{onChange:p,onSubmit:m,children:[c.jsx(_t,{required:!0,label:"PTZ Camera Hostname",fieldState:"default",name:"host",id:"host",value:u.host,onChange:p}),c.jsx(_t,{required:!0,label:"Username",fieldState:"default",name:"username",id:"username",value:u.username,onChange:p}),c.jsx(op,{required:!0,label:"Password",fieldState:"default",name:"password",id:"password",value:u.password,onChange:p}),c.jsx(rp,{loading:o,type:"submit",children:"Connect"})]})]})]})},s_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1076'%20height='1076'%20viewBox='0%200%201076%201076'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='19.655%25'%20x2='80.649%25'%20y1='39.035%25'%20y2='55.792%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='-51.504%25'%20x2='143.512%25'%20y1='-10.887%25'%20y2='120.691%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='25.133%25'%20x2='83.065%25'%20y1='38.102%25'%20y2='61.898%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.364'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='90.238%25'%20x2='44.369%25'%20y1='106.126%25'%20y2='-19.277%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.772'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='20.916%25'%20x2='83.944%25'%20y1='39.373%25'%20y2='61.232%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.648'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='nonzero'%20opacity='.2'%20style='mix-blend-mode:overlay'%3e%3cpath%20fill='url(%23a)'%20d='M36.923%20804.572L538%20551.122l538%20262.439v1.54l-518.664%20258.264c-7.056%203.513-15.748%203.513-22.804%200l-497.61-247.78c-4.352-2.167-7.033-6.172-7.033-10.506%200-4.335%202.681-8.34%207.034-10.507z'%20opacity='.746'/%3e%3cpath%20fill='url(%23b)'%20d='M538%20551.122v-262.44l538%20262.44v262.439z'%20opacity='.4'/%3e%3cpath%20fill='url(%23c)'%20d='M0%20551.122l538-262.44%20538%20262.44-538%20262.439z'%20opacity='.799'/%3e%3cpath%20fill='url(%23d)'%20d='M.357%20260.627L538%20524.878v288.683L0%20551.122z'/%3e%3cpath%20fill='url(%23e)'%20d='M0%20261.124L518.618%202.276c6.078-3.035%2013.568-3.035%2019.646%200l502.461%20250.784c3.333%201.664%205.386%204.738%205.386%208.065%200%203.327-2.053%206.401-5.386%208.065L538%20524.878%200%20261.124z'%20opacity='.9'/%3e%3c/g%3e%3c/svg%3e",c_=({title:e,titleId:r,...a},o)=>f.createElement("svg",{width:35,height:35,xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":r,...a},e?f.createElement("title",{id:r},e):null,f.createElement("defs",null,f.createElement("linearGradient",{x1:"0%",y1:"0%",x2:"100%",y2:"100%",id:"prefix__a"},f.createElement("stop",{stopColor:"#7DB8DB",offset:"0%"}),f.createElement("stop",{stopColor:"#5CA0D1",offset:"100%"})),f.createElement("style",null,`
            @font-face {
                font-family: Monorale;
                font-weight: 700;
                font-style: normal;
                src: url('/fonts/Monorale-Bold.woff') format('woff');
                font-display: fallback;
            }
        `)),f.createElement("g",{fill:"none",fillRule:"evenodd"},f.createElement("rect",{fill:"url(#prefix__a)",width:35,height:35,rx:5}),f.createElement("text",{fontFamily:"Monorale",fontSize:26,fontWeight:"bold",letterSpacing:2.167,fill:"#FFF"},f.createElement("tspan",{x:8.604,y:27},"S"))));f.forwardRef(c_);const u_=({title:e,titleId:r,...a},o)=>f.createElement("svg",{width:138,height:35,xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":r,...a},e?f.createElement("title",{id:r},e):null,f.createElement("defs",null,f.createElement("style",null,`
            @font-face{font-family:Monorale;font-weight:400;font-style:normal;src:url(/fonts/Monorale-Regular.woff) format('woff');font-display:fallback}@font-face{font-family:Monorale;font-weight:500;font-style:normal;src:url(/fonts/Monorale-Medium.woff) format('woff');font-display:fallback}
        `)),f.createElement("g",{fill:"#93A5B2",fillRule:"evenodd",fontFamily:"Monorale"},f.createElement("text",{fontSize:16,fontWeight:400,letterSpacing:1.333},f.createElement("tspan",{x:0,y:16},"SCORER")),f.createElement("text",{fontSize:10,letterSpacing:.833},f.createElement("tspan",{x:0,y:31},"UI KIT"))));f.forwardRef(u_);const d_=({title:e,titleId:r,...a},o)=>f.createElement("svg",{width:170,height:35,viewBox:"0 0 170 35",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":r,...a},e?f.createElement("title",{id:r},e):null,f.createElement("defs",null,f.createElement("style",null,`
            @font-face {
              font-family: Monorale;
              font-weight: 400;
              font-style: normal;
              src: url('/scorer-ui-kit/fonts/Monorale-Regular.woff') format('woff');
              font-display: fallback;
            }
            @font-face {
                font-family: Monorale;
                font-weight: 500;
                font-style: normal;
                src: url('/scorer-ui-kit/fonts/Monorale-Medium.woff') format('woff');
                font-display: fallback;
            }
            @font-face {
                font-family: Monorale;
                font-weight: 700;
                font-style: normal;
                src: url('/scorer-ui-kit/fonts/Monorale-Bold.woff') format('woff');
                font-display: fallback;
            }
        `),f.createElement("mask",{id:"logo_mask",x:0,y:0,width:"100%",height:"100%"},f.createElement("rect",{fill:"#fff",id:"overlay",x:0,y:0,width:"100%",height:"100%"}),f.createElement("text",{fontFamily:"Monorale",fontSize:26,fontWeight:"bold",letterSpacing:2.167},f.createElement("tspan",{x:8.604,y:27},"S")))),f.createElement("g",{fill:"#FFF",fillRule:"evenodd"},f.createElement("rect",{mask:"url(#logo_mask)",width:35,height:35,rx:5})),f.createElement("g",{fill:"#FFF",fillRule:"evenodd"},f.createElement("text",{fontFamily:"Monorale",fontSize:16,fontWeight:400,letterSpacing:1.333,transform:"translate(52 1)"},f.createElement("tspan",{x:0,y:15},"SCORER")),f.createElement("text",{fontFamily:"Monorale",fontSize:10,letterSpacing:.833,transform:"translate(52 1)"},f.createElement("tspan",{x:0,y:30},"UI KIT")))),f_=f.forwardRef(d_),Ks=480,h_={primary:"linear-gradient(-45deg, hsl(205,56%,59%), hsl(202,57%,67%))",secondary:"linear-gradient(139deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%))"},e3=oi`
  display: flex;
  flex-direction: row;
`,g_=p6`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`,p_=pe.div``,m_=pe.div`
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&oi`margin:${e};`}
  ${({$flex:e})=>e&&oi`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,v_=pe(lp)`
    max-width: 320px;
    margin: auto;
    padding: 44px 0;
    min-height: calc(100vh - 126px);

    animation: ${g_} 0.35s cubic-bezier(0.7, 0, 0.84, 0);

    ${Xb} {
      margin-bottom: 20px;
    }

    @media (min-width: 768px){
      min-height: auto;
    }

    @media (min-width: 1024px){
      max-width: ${Ks}px;
      padding: 70px;
      margin: initial;
    }
`,x_=pe.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
`,y_=pe.div`
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  text-decoration: none;
  color: var(--grey-11);
  margin: 23px 0 40px 0;
`,b_=pe(Ue)`

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
`,w_=pe.div`
    text-align: center;
    margin: 10px auto;
`,yp=oi`
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
`,S_=pe.div`
  ${yp};
  margin-right: 17px;
`,Zy=pe(Ue)`
  ${yp};
  margin: 49px 4px 0 4px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,C_=pe.div`
  ${yp};
  font-weight: 700;
`,wg=pe.div`
    ${e3}
    justify-content: center;
`,k_=pe.div`
  ${wg}{
    display:none;
  }

  @media (min-width: 768px) {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    height: auto;

    ${wg}{
      display: flex;
    }
  }
`,E_=pe(f_)`
    height: 54px;
    width: auto;
`,j_=pe.img`
  height: 1080px;
  background-image: ${({$design:e})=>h_[e]};
  position: absolute;
  bottom: -360px;
  left: -600px;
  min-width: ${Ks}px;
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
`,T_=pe.div`
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
    max-width: ${Ks}px;
  }

`,$_=pe.div`
  border: solid 1px hsl(0, 0%, 91%);
  max-width: ${Ks}px;
  margin: auto;
  height: 100%;

  @media (min-width: 768px) {
    box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    ${e3}
    overflow: hidden;
    position:relative;
    max-width: none;
    min-width: ${Ks*2}px;
    min-height: 560px;

    input{
      min-width: 296px;
    }
  }
`,M_=({onLogin:e,design:r="primary"})=>{const[a,o]=f.useState(!1),[s,u]=f.useState(null),[h,p]=f.useState({username:"",password:""}),m=f.useCallback(y=>({target:{value:v}})=>{p({...h,[y]:v})},[h]),x=f.useCallback(async y=>{y.preventDefault(),o(!0),u(null);try{const v=await e(h);console.log(v,"login")}catch(v){v instanceof Error?u({message:v.message,type:"error"}):console.warn(v)}o(!1)},[h,e]);return c.jsxs(p_,{children:[c.jsx(yn,{children:"Login.tsx"}),c.jsxs(k_,{children:[c.jsxs($_,{children:[c.jsxs(T_,{children:[c.jsx(E_,{}),c.jsx(j_,{src:s_,$design:r})]}),c.jsxs(v_,{onSubmit:x,spacing:"25px",children:[c.jsx(x_,{children:"Sign In To Your Account"}),c.jsx(y_,{children:"This service requires an account to login. If you do not have one, please make one first."}),c.jsx(_t,{fieldState:"default",required:!0,label:"Username",onChange:m("username"),value:h.username,name:"username",id:"username"}),c.jsx(op,{fieldState:"default",required:!0,label:"Password",onChange:m("password"),value:h.password,name:"password",id:"password"}),s&&c.jsx(ga,{type:s.type,message:s.message}),c.jsx(m_,{$flex:"1",children:c.jsx(rp,{loading:a,type:"submit",onClick:x,children:"Login"})}),c.jsx(w_,{children:c.jsx(b_,{to:"#",children:"Forgotten Password"})})]})]}),c.jsxs(wg,{children:[c.jsxs(S_,{children:["Copyright ",new Date().getFullYear()," - Future Standard Co. Ltd. All Rights Reserved. "]}),c.jsx(Zy,{to:"#",children:"Terms"}),c.jsx(C_,{children:"·"}),c.jsx(Zy,{to:"#",children:"Privacy"})]})]})]})},L_=pe.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
`,O_=pe.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: ${({$type:e})=>`var(--${e}, var(--primary-9))`};
    ${({$tooltipMessage:e})=>e&&oi`
      &:hover {
        cursor: pointer;
      };
    `}
`,ks=({statusList:e})=>{const r=f.useRef([]);return r.current=e.map(()=>Ve.createRef()),c.jsx(L_,{children:e.map(({type:a,tooltipMessage:o,tooltipIcon:s,tooltipType:u,tooltipPosition:h},p)=>c.jsxs(f.Fragment,{children:[c.jsx(O_,{ref:r.current[p],$type:a,$tooltipMessage:o}),o&&c.jsx(Yj,{tooltipFor:r.current[p],message:o,icon:s,type:u,tooltipPosition:h})]},p))})},A_=pe.div`
  margin: 100px 200px;
`,z_=pe.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`,R_=[{header:"Device Name",sortable:!0,cellStyle:"firstColumn"},{header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0},{header:"Status",sortable:!1,cellStyle:"normalImportance",alignment:"center"},{header:"Actions",sortable:!1,cellStyle:"highImportance",alignment:"right"}],__=()=>{const{createModal:e}=u5(),r=f.useCallback(m=>{console.log(`opening custom modal for item ${m}`),e({closeText:"Close",isCloseEnable:!0,customComponent:c.jsx(zr,{title:"Example of custom component on Modal",introductionText:"Anything can be added inside de modal, I hope you find this modal useful"})})},[e]),a=f.useMemo(()=>[{id:"a0",text:"Main Action",icon:"Success",onClickCallback:()=>{}},{id:"a1",text:"日本語の場合はランダム",onClickCallback:()=>{}},{id:"a2",text:"Save Action",icon:"Analyse",hasOnSelectLoading:!0,onClickCallback:()=>{}},{id:"a3",text:"Download Action",icon:"Download",onClickCallback:()=>{},disabled:!0}],[]),o=f.useMemo(()=>[{id:"device-id-1",header:{image:"https://picsum.photos/id/43/367/267",mediaUrl:"/scorer-ui-kit/traffic.mp4",mediaType:"video"},columns:[{text:"Device Name",href:"#"},{text:"Just Now"},{text:"242",unit:"mb"},{text:"¥20,000"},{customComponent:c.jsx(ks,{statusList:[{type:"success"},{type:"success"},{type:"success"}]})},{customComponent:c.jsx(xs,{mainButtonId:"a0",buttonList:a})}]},{_checked:!0,id:"device-id-2",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img",onClickThumbnail:()=>r("device-id-2")},columns:[{text:"Another Device",href:"#"},{text:"1st October 2019"},{text:"2.1",unit:"gb"},{text:"¥4,000"},{customComponent:c.jsx(ks,{statusList:[{type:"error",tooltipIcon:"BigWarning",tooltipType:"warning",tooltipMessage:"4 Images have reported upload failures",tooltipPosition:"left"},{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"1 images file is corrupted",tooltipPosition:"bottom"},{type:"info",tooltipIcon:"Information",tooltipType:"info",tooltipMessage:"All Images have been updated in the server",tooltipPosition:"right"}]})},{customComponent:c.jsx(xs,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-3",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Old Device",href:"#"},{text:"22nd March 2020"},{text:"2.1",unit:"tb"},{text:"¥7,000"},{customComponent:c.jsx(ks,{statusList:[{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"Upload took too long"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(xs,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-4",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:c.jsx(ks,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(xs,{mainButtonId:"a0",buttonList:a})}]},{id:"device-id-5",columns:[{text:"Special Camera",href:"#"},{text:"16th June 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:c.jsx(ks,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:c.jsx(xs,{mainButtonId:"a0",buttonList:a})}]}],[a,r]),[s,u]=f.useState(o),h=f.useCallback((m,x)=>{const y=[...s],v=y.findIndex(k=>k.id===x);y[v]._checked=m,u(y)},[s,u]),p=f.useCallback(m=>{const x=[...s];x.forEach(y=>{y._checked=m}),u(x)},[s,u]);return c.jsxs(A_,{children:[c.jsx(yn,{children:"TablePage.tsx"}),c.jsxs(uc,{children:[c.jsx(zr,{title:"Table Example",areaTitle:"Examples",areaHref:"/"}),c.jsx(HO,{selectable:!0,columnConfig:R_,rows:s,selectCallback:h,toggleAllCallback:p,hasThumbnail:!0}),c.jsxs(z_,{children:["Selected IDs: [",D_(s).toString(),"]"]})]})]})},D_=e=>{const r=[];return e.forEach(a=>{a._checked&&a.id&&r.push(a.id.toString())}),r},Ee=e=>typeof e=="string",Es=()=>{let e,r;const a=new Promise((o,s)=>{e=o,r=s});return a.resolve=e,a.reject=r,a},Xy=e=>e==null?"":""+e,N_=(e,r,a)=>{e.forEach(o=>{r[o]&&(a[o]=r[o])})},B_=/###/g,Qy=e=>e&&e.indexOf("###")>-1?e.replace(B_,"."):e,Ky=e=>!e||Ee(e),Ps=(e,r,a)=>{const o=Ee(r)?r.split("."):r;let s=0;for(;s<o.length-1;){if(Ky(e))return{};const u=Qy(o[s]);!e[u]&&a&&(e[u]=new a),Object.prototype.hasOwnProperty.call(e,u)?e=e[u]:e={},++s}return Ky(e)?{}:{obj:e,k:Qy(o[s])}},Jy=(e,r,a)=>{const{obj:o,k:s}=Ps(e,r,Object);if(o!==void 0||r.length===1){o[s]=a;return}let u=r[r.length-1],h=r.slice(0,r.length-1),p=Ps(e,h,Object);for(;p.obj===void 0&&h.length;)u=`${h[h.length-1]}.${u}`,h=h.slice(0,h.length-1),p=Ps(e,h,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=a},H_=(e,r,a,o)=>{const{obj:s,k:u}=Ps(e,r,Object);s[u]=s[u]||[],s[u].push(a)},Sd=(e,r)=>{const{obj:a,k:o}=Ps(e,r);if(a&&Object.prototype.hasOwnProperty.call(a,o))return a[o]},U_=(e,r,a)=>{const o=Sd(e,a);return o!==void 0?o:Sd(r,a)},t3=(e,r,a)=>{for(const o in r)o!=="__proto__"&&o!=="constructor"&&(o in e?Ee(e[o])||e[o]instanceof String||Ee(r[o])||r[o]instanceof String?a&&(e[o]=r[o]):t3(e[o],r[o],a):e[o]=r[o]);return e},Hi=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var I_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const P_=e=>Ee(e)?e.replace(/[&<>"'\/]/g,r=>I_[r]):e;class G_{constructor(r){this.capacity=r,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(r){const a=this.regExpMap.get(r);if(a!==void 0)return a;const o=new RegExp(r);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(r,o),this.regExpQueue.push(r),o}}const q_=[" ",",","?","!",";"],F_=new G_(20),W_=(e,r,a)=>{r=r||"",a=a||"";const o=q_.filter(h=>r.indexOf(h)<0&&a.indexOf(h)<0);if(o.length===0)return!0;const s=F_.getRegExp(`(${o.map(h=>h==="?"?"\\?":h).join("|")})`);let u=!s.test(e);if(!u){const h=e.indexOf(a);h>0&&!s.test(e.substring(0,h))&&(u=!0)}return u},Sg=(e,r,a=".")=>{if(!e)return;if(e[r])return Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;const o=r.split(a);let s=e;for(let u=0;u<o.length;){if(!s||typeof s!="object")return;let h,p="";for(let m=u;m<o.length;++m)if(m!==u&&(p+=a),p+=o[m],h=s[p],h!==void 0){if(["string","number","boolean"].indexOf(typeof h)>-1&&m<o.length-1)continue;u+=m-u+1;break}s=h}return s},Js=e=>e?.replace(/_/g,"-"),V_={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,r){console?.[e]?.apply?.(console,r)}};class Cd{constructor(r,a={}){this.init(r,a)}init(r,a={}){this.prefix=a.prefix||"i18next:",this.logger=r||V_,this.options=a,this.debug=a.debug}log(...r){return this.forward(r,"log","",!0)}warn(...r){return this.forward(r,"warn","",!0)}error(...r){return this.forward(r,"error","")}deprecate(...r){return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(r,a,o,s){return s&&!this.debug?null:(Ee(r[0])&&(r[0]=`${o}${this.prefix} ${r[0]}`),this.logger[a](r))}create(r){return new Cd(this.logger,{prefix:`${this.prefix}:${r}:`,...this.options})}clone(r){return r=r||this.options,r.prefix=r.prefix||this.prefix,new Cd(this.logger,r)}}var Or=new Cd;class Fd{constructor(){this.observers={}}on(r,a){return r.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(a)||0;this.observers[o].set(a,s+1)}),this}off(r,a){if(this.observers[r]){if(!a){delete this.observers[r];return}this.observers[r].delete(a)}}emit(r,...a){this.observers[r]&&Array.from(this.observers[r].entries()).forEach(([s,u])=>{for(let h=0;h<u;h++)s(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let h=0;h<u;h++)s.apply(s,[r,...a])})}}class e2 extends Fd{constructor(r,a={ns:["translation"],defaultNS:"translation"}){super(),this.data=r||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(r){this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}removeNamespaces(r){const a=this.options.ns.indexOf(r);a>-1&&this.options.ns.splice(a,1)}getResource(r,a,o,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,h=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;r.indexOf(".")>-1?p=r.split("."):(p=[r,a],o&&(Array.isArray(o)?p.push(...o):Ee(o)&&u?p.push(...o.split(u)):p.push(o)));const m=Sd(this.data,p);return!m&&!a&&!o&&r.indexOf(".")>-1&&(r=p[0],a=p[1],o=p.slice(2).join(".")),m||!h||!Ee(o)?m:Sg(this.data?.[r]?.[a],o,u)}addResource(r,a,o,s,u={silent:!1}){const h=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[r,a];o&&(p=p.concat(h?o.split(h):o)),r.indexOf(".")>-1&&(p=r.split("."),s=a,a=p[1]),this.addNamespaces(a),Jy(this.data,p,s),u.silent||this.emit("added",r,a,o,s)}addResources(r,a,o,s={silent:!1}){for(const u in o)(Ee(o[u])||Array.isArray(o[u]))&&this.addResource(r,a,u,o[u],{silent:!0});s.silent||this.emit("added",r,a,o)}addResourceBundle(r,a,o,s,u,h={silent:!1,skipCopy:!1}){let p=[r,a];r.indexOf(".")>-1&&(p=r.split("."),s=o,o=a,a=p[1]),this.addNamespaces(a);let m=Sd(this.data,p)||{};h.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?t3(m,o,u):m={...m,...o},Jy(this.data,p,m),h.silent||this.emit("added",r,a,o)}removeResourceBundle(r,a){this.hasResourceBundle(r,a)&&delete this.data[r][a],this.removeNamespaces(a),this.emit("removed",r,a)}hasResourceBundle(r,a){return this.getResource(r,a)!==void 0}getResourceBundle(r,a){return a||(a=this.options.defaultNS),this.getResource(r,a)}getDataByLanguage(r){return this.data[r]}hasLanguageSomeTranslations(r){const a=this.getDataByLanguage(r);return!!(a&&Object.keys(a)||[]).find(s=>a[s]&&Object.keys(a[s]).length>0)}toJSON(){return this.data}}var n3={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,r,a,o,s){return e.forEach(u=>{r=this.processors[u]?.process(r,a,o,s)??r}),r}};const r3=Symbol("i18next/PATH_KEY");function Y_(){const e=[],r=Object.create(null);let a;return r.get=(o,s)=>(a?.revoke?.(),s===r3?e:(e.push(s),a=Proxy.revocable(o,r),a.proxy)),Proxy.revocable(Object.create(null),r).proxy}function Cg(e,r){const{[r3]:a}=e(Y_());return a.join(r?.keySeparator??".")}const t2={},z0=e=>!Ee(e)&&typeof e!="boolean"&&typeof e!="number";class kd extends Fd{constructor(r,a={}){super(),N_(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Or.create("translator")}changeLanguage(r){r&&(this.language=r)}exists(r,a={interpolation:{}}){const o={...a};if(r==null)return!1;const s=this.resolve(r,o);if(s?.res===void 0)return!1;const u=z0(s.res);return!(o.returnObjects===!1&&u)}extractFromKey(r,a){let o=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let u=a.ns||this.options.defaultNS||[];const h=o&&r.indexOf(o)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!W_(r,o,s);if(h&&!p){const m=r.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:r,namespaces:Ee(u)?[u]:u};const x=r.split(o);(o!==s||o===s&&this.options.ns.indexOf(x[0])>-1)&&(u=x.shift()),r=x.join(s)}return{key:r,namespaces:Ee(u)?[u]:u}}translate(r,a,o){let s=typeof a=="object"?{...a}:a;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),r==null)return"";typeof r=="function"&&(r=Cg(r,{...this.options,...s})),Array.isArray(r)||(r=[String(r)]);const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,h=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:p,namespaces:m}=this.extractFromKey(r[r.length-1],s),x=m[m.length-1];let y=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;y===void 0&&(y=":");const v=s.lng||this.language,k=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return k?u?{res:`${x}${y}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(s)}:`${x}${y}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(s)}:p;const C=this.resolve(r,s);let S=C?.res;const E=C?.usedKey||p,T=C?.exactUsedKey||p,M=["[object Number]","[object Function]","[object RegExp]"],O=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,N=!this.i18nFormat||this.i18nFormat.handleAsObject,z=s.count!==void 0&&!Ee(s.count),_=kd.hasDefaultValue(s),B=z?this.pluralResolver.getSuffix(v,s.count,s):"",j=s.ordinal&&z?this.pluralResolver.getSuffix(v,s.count,{ordinal:!1}):"",L=z&&!s.ordinal&&s.count===0,G=L&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${B}`]||s[`defaultValue${j}`]||s.defaultValue;let Y=S;N&&!S&&_&&(Y=G);const I=z0(Y),Z=Object.prototype.toString.apply(Y);if(N&&Y&&I&&M.indexOf(Z)<0&&!(Ee(O)&&Array.isArray(Y))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const re=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,Y,{...s,ns:m}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(C.res=re,C.usedParams=this.getUsedParamsDetails(s),C):re}if(h){const re=Array.isArray(Y),X=re?[]:{},te=re?T:E;for(const H in Y)if(Object.prototype.hasOwnProperty.call(Y,H)){const q=`${te}${h}${H}`;_&&!S?X[H]=this.translate(q,{...s,defaultValue:z0(G)?G[H]:void 0,joinArrays:!1,ns:m}):X[H]=this.translate(q,{...s,joinArrays:!1,ns:m}),X[H]===q&&(X[H]=Y[H])}S=X}}else if(N&&Ee(O)&&Array.isArray(S))S=S.join(O),S&&(S=this.extendTranslation(S,r,s,o));else{let re=!1,X=!1;!this.isValidLookup(S)&&_&&(re=!0,S=G),this.isValidLookup(S)||(X=!0,S=p);const H=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&X?void 0:S,q=_&&G!==S&&this.options.updateMissing;if(X||re||q){if(this.logger.log(q?"updateKey":"missingKey",v,x,p,q?G:S),h){const A=this.resolve(p,{...s,keySeparator:!1});A&&A.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ae=[];const ie=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ie&&ie[0])for(let A=0;A<ie.length;A++)ae.push(ie[A]);else this.options.saveMissingTo==="all"?ae=this.languageUtils.toResolveHierarchy(s.lng||this.language):ae.push(s.lng||this.language);const de=(A,F,Q)=>{const le=_&&Q!==S?Q:H;this.options.missingKeyHandler?this.options.missingKeyHandler(A,x,F,le,q,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(A,x,F,le,q,s),this.emit("missingKey",A,x,F,S)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?ae.forEach(A=>{const F=this.pluralResolver.getSuffixes(A,s);L&&s[`defaultValue${this.options.pluralSeparator}zero`]&&F.indexOf(`${this.options.pluralSeparator}zero`)<0&&F.push(`${this.options.pluralSeparator}zero`),F.forEach(Q=>{de([A],p+Q,s[`defaultValue${Q}`]||G)})}):de(ae,p,G))}S=this.extendTranslation(S,r,s,C,o),X&&S===p&&this.options.appendNamespaceToMissingKey&&(S=`${x}${y}${p}`),(X||re)&&this.options.parseMissingKeyHandler&&(S=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${x}${y}${p}`:p,re?S:void 0,s))}return u?(C.res=S,C.usedParams=this.getUsedParamsDetails(s),C):S}extendTranslation(r,a,o,s,u){if(this.i18nFormat?.parse)r=this.i18nFormat.parse(r,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const m=Ee(r)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let x;if(m){const v=r.match(this.interpolator.nestingRegexp);x=v&&v.length}let y=o.replace&&!Ee(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(y={...this.options.interpolation.defaultVariables,...y}),r=this.interpolator.interpolate(r,y,o.lng||this.language||s.usedLng,o),m){const v=r.match(this.interpolator.nestingRegexp),k=v&&v.length;x<k&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(r=this.interpolator.nest(r,(...v)=>u?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${a[0]}`),null):this.translate(...v,a),o)),o.interpolation&&this.interpolator.reset()}const h=o.postProcess||this.options.postProcess,p=Ee(h)?[h]:h;return r!=null&&p?.length&&o.applyPostProcessor!==!1&&(r=n3.handle(p,r,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),r}resolve(r,a={}){let o,s,u,h,p;return Ee(r)&&(r=[r]),r.forEach(m=>{if(this.isValidLookup(o))return;const x=this.extractFromKey(m,a),y=x.key;s=y;let v=x.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const k=a.count!==void 0&&!Ee(a.count),C=k&&!a.ordinal&&a.count===0,S=a.context!==void 0&&(Ee(a.context)||typeof a.context=="number")&&a.context!=="",E=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);v.forEach(T=>{this.isValidLookup(o)||(p=T,!t2[`${E[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(t2[`${E[0]}-${T}`]=!0,this.logger.warn(`key "${s}" for languages "${E.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(M=>{if(this.isValidLookup(o))return;h=M;const O=[y];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(O,y,M,T,a);else{let z;k&&(z=this.pluralResolver.getSuffix(M,a.count,a));const _=`${this.options.pluralSeparator}zero`,B=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(k&&(a.ordinal&&z.indexOf(B)===0&&O.push(y+z.replace(B,this.options.pluralSeparator)),O.push(y+z),C&&O.push(y+_)),S){const j=`${y}${this.options.contextSeparator||"_"}${a.context}`;O.push(j),k&&(a.ordinal&&z.indexOf(B)===0&&O.push(j+z.replace(B,this.options.pluralSeparator)),O.push(j+z),C&&O.push(j+_))}}let N;for(;N=O.pop();)this.isValidLookup(o)||(u=N,o=this.getResource(M,T,N,a))}))})}),{res:o,usedKey:s,exactUsedKey:u,usedLng:h,usedNS:p}}isValidLookup(r){return r!==void 0&&!(!this.options.returnNull&&r===null)&&!(!this.options.returnEmptyString&&r==="")}getResource(r,a,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(r,a,o,s):this.resourceStore.getResource(r,a,o,s)}getUsedParamsDetails(r={}){const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=r.replace&&!Ee(r.replace);let s=o?r.replace:r;if(o&&typeof r.count<"u"&&(s.count=r.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const u of a)delete s[u]}return s}static hasDefaultValue(r){const a="defaultValue";for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&a===o.substring(0,a.length)&&r[o]!==void 0)return!0;return!1}}class n2{constructor(r){this.options=r,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Or.create("languageUtils")}getScriptPartFromCode(r){if(r=Js(r),!r||r.indexOf("-")<0)return null;const a=r.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(r){if(r=Js(r),!r||r.indexOf("-")<0)return r;const a=r.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(r){if(Ee(r)&&r.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(r)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?r.toLowerCase():r)}return this.options.cleanCode||this.options.lowerCaseLng?r.toLowerCase():r}isSupportedCode(r){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(r=this.getLanguagePartFromCode(r)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(r)>-1}getBestMatchFromCodes(r){if(!r)return null;let a;return r.forEach(o=>{if(a)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(a=s)}),!a&&this.options.supportedLngs&&r.forEach(o=>{if(a)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return a=s;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return a=u;a=this.options.supportedLngs.find(h=>{if(h===u)return h;if(!(h.indexOf("-")<0&&u.indexOf("-")<0)&&(h.indexOf("-")>0&&u.indexOf("-")<0&&h.substring(0,h.indexOf("-"))===u||h.indexOf(u)===0&&u.length>1))return h})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(r,a){if(!r)return[];if(typeof r=="function"&&(r=r(a)),Ee(r)&&(r=[r]),Array.isArray(r))return r;if(!a)return r.default||[];let o=r[a];return o||(o=r[this.getScriptPartFromCode(a)]),o||(o=r[this.formatLanguageCode(a)]),o||(o=r[this.getLanguagePartFromCode(a)]),o||(o=r.default),o||[]}toResolveHierarchy(r,a){const o=this.getFallbackCodes((a===!1?[]:a)||this.options.fallbackLng||[],r),s=[],u=h=>{h&&(this.isSupportedCode(h)?s.push(h):this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))};return Ee(r)&&(r.indexOf("-")>-1||r.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(r)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(r)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(r))):Ee(r)&&u(this.formatLanguageCode(r)),o.forEach(h=>{s.indexOf(h)<0&&u(this.formatLanguageCode(h))}),s}}const r2={zero:0,one:1,two:2,few:3,many:4,other:5},a2={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Z_{constructor(r,a={}){this.languageUtils=r,this.options=a,this.logger=Or.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(r,a={}){const o=Js(r==="dev"?"en":r),s=a.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let h;try{h=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),a2;if(!r.match(/-|_/))return a2;const m=this.languageUtils.getLanguagePartFromCode(r);h=this.getRule(m,a)}return this.pluralRulesCache[u]=h,h}needsPlural(r,a={}){let o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(r,a,o={}){return this.getSuffixes(r,o).map(s=>`${a}${s}`)}getSuffixes(r,a={}){let o=this.getRule(r,a);return o||(o=this.getRule("dev",a)),o?o.resolvedOptions().pluralCategories.sort((s,u)=>r2[s]-r2[u]).map(s=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(r,a,o={}){const s=this.getRule(r,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(a)}`:(this.logger.warn(`no plural rule found for: ${r}`),this.getSuffix("dev",a,o))}}const i2=(e,r,a,o=".",s=!0)=>{let u=U_(e,r,a);return!u&&s&&Ee(a)&&(u=Sg(e,a,o),u===void 0&&(u=Sg(r,a,o))),u},R0=e=>e.replace(/\$/g,"$$$$");class o2{constructor(r={}){this.logger=Or.create("interpolator"),this.options=r,this.format=r?.interpolation?.format||(a=>a),this.init(r)}init(r={}){r.interpolation||(r.interpolation={escapeValue:!0});const{escape:a,escapeValue:o,useRawValueToEscape:s,prefix:u,prefixEscaped:h,suffix:p,suffixEscaped:m,formatSeparator:x,unescapeSuffix:y,unescapePrefix:v,nestingPrefix:k,nestingPrefixEscaped:C,nestingSuffix:S,nestingSuffixEscaped:E,nestingOptionsSeparator:T,maxReplaces:M,alwaysFormat:O}=r.interpolation;this.escape=a!==void 0?a:P_,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Hi(u):h||"{{",this.suffix=p?Hi(p):m||"}}",this.formatSeparator=x||",",this.unescapePrefix=y?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=k?Hi(k):C||Hi("$t("),this.nestingSuffix=S?Hi(S):E||Hi(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=M||1e3,this.alwaysFormat=O!==void 0?O:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const r=(a,o)=>a?.source===o?(a.lastIndex=0,a):new RegExp(o,"g");this.regexp=r(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=r(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=r(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(r,a,o,s){let u,h,p;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},x=C=>{if(C.indexOf(this.formatSeparator)<0){const M=i2(a,m,C,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(M,void 0,o,{...s,...a,interpolationkey:C}):M}const S=C.split(this.formatSeparator),E=S.shift().trim(),T=S.join(this.formatSeparator).trim();return this.format(i2(a,m,E,this.options.keySeparator,this.options.ignoreJSONStructure),T,o,{...s,...a,interpolationkey:E})};this.resetRegExp();const y=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:C=>R0(C)},{regex:this.regexp,safeValue:C=>this.escapeValue?R0(this.escape(C)):R0(C)}].forEach(C=>{for(p=0;u=C.regex.exec(r);){const S=u[1].trim();if(h=x(S),h===void 0)if(typeof y=="function"){const T=y(r,u,s);h=Ee(T)?T:""}else if(s&&Object.prototype.hasOwnProperty.call(s,S))h="";else if(v){h=u[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${r}`),h="";else!Ee(h)&&!this.useRawValueToEscape&&(h=Xy(h));const E=C.safeValue(h);if(r=r.replace(u[0],E),v?(C.regex.lastIndex+=h.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),r}nest(r,a,o={}){let s,u,h;const p=(m,x)=>{const y=this.nestingOptionsSeparator;if(m.indexOf(y)<0)return m;const v=m.split(new RegExp(`${Hi(y)}[ ]*{`));let k=`{${v[1]}`;m=v[0],k=this.interpolate(k,h);const C=k.match(/'/g),S=k.match(/"/g);((C?.length??0)%2===0&&!S||(S?.length??0)%2!==0)&&(k=k.replace(/'/g,'"'));try{h=JSON.parse(k),x&&(h={...x,...h})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,E),`${m}${y}${k}`}return h.defaultValue&&h.defaultValue.indexOf(this.prefix)>-1&&delete h.defaultValue,m};for(;s=this.nestingRegexp.exec(r);){let m=[];h={...o},h=h.replace&&!Ee(h.replace)?h.replace:h,h.applyPostProcessor=!1,delete h.defaultValue;const x=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(x!==-1&&(m=s[1].slice(x).split(this.formatSeparator).map(y=>y.trim()).filter(Boolean),s[1]=s[1].slice(0,x)),u=a(p.call(this,s[1].trim(),h),h),u&&s[0]===r&&!Ee(u))return u;Ee(u)||(u=Xy(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${r}`),u=""),m.length&&(u=m.reduce((y,v)=>this.format(y,v,o.lng,{...o,interpolationkey:s[1].trim()}),u.trim())),r=r.replace(s[0],u),this.regexp.lastIndex=0}return r}}const X_=e=>{let r=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const o=e.split("(");r=o[0].toLowerCase().trim();const s=o[1].substring(0,o[1].length-1);r==="currency"&&s.indexOf(":")<0?a.currency||(a.currency=s.trim()):r==="relativetime"&&s.indexOf(":")<0?a.range||(a.range=s.trim()):s.split(";").forEach(h=>{if(h){const[p,...m]=h.split(":"),x=m.join(":").trim().replace(/^'+|'+$/g,""),y=p.trim();a[y]||(a[y]=x),x==="false"&&(a[y]=!1),x==="true"&&(a[y]=!0),isNaN(x)||(a[y]=parseInt(x,10))}})}return{formatName:r,formatOptions:a}},l2=e=>{const r={};return(a,o,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const h=o+JSON.stringify(u);let p=r[h];return p||(p=e(Js(o),s),r[h]=p),p(a)}},Q_=e=>(r,a,o)=>e(Js(a),o)(r);class K_{constructor(r={}){this.logger=Or.create("formatter"),this.options=r,this.init(r)}init(r,a={interpolation:{}}){this.formatSeparator=a.interpolation.formatSeparator||",";const o=a.cacheInBuiltFormats?l2:Q_;this.formats={number:o((s,u)=>{const h=new Intl.NumberFormat(s,{...u});return p=>h.format(p)}),currency:o((s,u)=>{const h=new Intl.NumberFormat(s,{...u,style:"currency"});return p=>h.format(p)}),datetime:o((s,u)=>{const h=new Intl.DateTimeFormat(s,{...u});return p=>h.format(p)}),relativetime:o((s,u)=>{const h=new Intl.RelativeTimeFormat(s,{...u});return p=>h.format(p,u.range||"day")}),list:o((s,u)=>{const h=new Intl.ListFormat(s,{...u});return p=>h.format(p)})}}add(r,a){this.formats[r.toLowerCase().trim()]=a}addCached(r,a){this.formats[r.toLowerCase().trim()]=l2(a)}format(r,a,o,s={}){const u=a.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(m=>m.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,m)=>{const{formatName:x,formatOptions:y}=X_(m);if(this.formats[x]){let v=p;try{const k=s?.formatParams?.[s.interpolationkey]||{},C=k.locale||k.lng||s.locale||s.lng||o;v=this.formats[x](p,C,{...y,...s,...k})}catch(k){this.logger.warn(k)}return v}else this.logger.warn(`there was no format function for ${x}`);return p},r)}}const J_=(e,r)=>{e.pending[r]!==void 0&&(delete e.pending[r],e.pendingCount--)};class eD extends Fd{constructor(r,a,o,s={}){super(),this.backend=r,this.store=a,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=Or.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(r,a,o,s){const u={},h={},p={},m={};return r.forEach(x=>{let y=!0;a.forEach(v=>{const k=`${x}|${v}`;!o.reload&&this.store.hasResourceBundle(x,v)?this.state[k]=2:this.state[k]<0||(this.state[k]===1?h[k]===void 0&&(h[k]=!0):(this.state[k]=1,y=!1,h[k]===void 0&&(h[k]=!0),u[k]===void 0&&(u[k]=!0),m[v]===void 0&&(m[v]=!0)))}),y||(p[x]=!0)}),(Object.keys(u).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(h),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(m)}}loaded(r,a,o){const s=r.split("|"),u=s[0],h=s[1];a&&this.emit("failedLoading",u,h,a),!a&&o&&this.store.addResourceBundle(u,h,o,void 0,void 0,{skipCopy:!0}),this.state[r]=a?-1:2,a&&o&&(this.state[r]=0);const p={};this.queue.forEach(m=>{H_(m.loaded,[u],h),J_(m,r),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(x=>{p[x]||(p[x]={});const y=m.loaded[x];y.length&&y.forEach(v=>{p[x][v]===void 0&&(p[x][v]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(m=>!m.done)}read(r,a,o,s=0,u=this.retryTimeout,h){if(!r.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:r,ns:a,fcName:o,tried:s,wait:u,callback:h});return}this.readingCalls++;const p=(x,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(x&&y&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,r,a,o,s+1,u*2,h)},u);return}h(x,y)},m=this.backend[o].bind(this.backend);if(m.length===2){try{const x=m(r,a);x&&typeof x.then=="function"?x.then(y=>p(null,y)).catch(p):p(null,x)}catch(x){p(x)}return}return m(r,a,p)}prepareLoading(r,a,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();Ee(r)&&(r=this.languageUtils.toResolveHierarchy(r)),Ee(a)&&(a=[a]);const u=this.queueLoad(r,a,o,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(h=>{this.loadOne(h)})}load(r,a,o){this.prepareLoading(r,a,{},o)}reload(r,a,o){this.prepareLoading(r,a,{reload:!0},o)}loadOne(r,a=""){const o=r.split("|"),s=o[0],u=o[1];this.read(s,u,"read",void 0,void 0,(h,p)=>{h&&this.logger.warn(`${a}loading namespace ${u} for language ${s} failed`,h),!h&&p&&this.logger.log(`${a}loaded namespace ${u} for language ${s}`,p),this.loaded(r,h,p)})}saveMissing(r,a,o,s,u,h={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(a)){this.logger.warn(`did not save key "${o}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const m={...h,isUpdate:u},x=this.backend.create.bind(this.backend);if(x.length<6)try{let y;x.length===5?y=x(r,a,o,s,m):y=x(r,a,o,s),y&&typeof y.then=="function"?y.then(v=>p(null,v)).catch(p):p(null,y)}catch(y){p(y)}else x(r,a,o,s,p,m)}!r||!r[0]||this.store.addResource(r[0],a,o,s)}}}const _0=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let r={};if(typeof e[1]=="object"&&(r=e[1]),Ee(e[1])&&(r.defaultValue=e[1]),Ee(e[2])&&(r.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(o=>{r[o]=a[o]})}return r},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),s2=e=>(Ee(e.ns)&&(e.ns=[e.ns]),Ee(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Ee(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e),Pu=()=>{},tD=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})},a3="__i18next_supportNoticeShown",nD=()=>typeof globalThis<"u"&&!!globalThis[a3],rD=()=>{typeof globalThis<"u"&&(globalThis[a3]=!0)},aD=e=>!!(e?.modules?.backend?.name?.indexOf("Locize")>0||e?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||e?.options?.backend?.backends&&e.options.backend.backends.some(r=>r?.name?.indexOf("Locize")>0||r?.constructor?.name?.indexOf("Locize")>0)||e?.options?.backend?.projectId||e?.options?.backend?.backendOptions&&e.options.backend.backendOptions.some(r=>r?.projectId));class Gs extends Fd{constructor(r={},a){if(super(),this.options=s2(r),this.services={},this.logger=Or,this.modules={external:[]},tD(this),a&&!this.isInitialized&&!r.isClone){if(!this.options.initAsync)return this.init(r,a),this;setTimeout(()=>{this.init(r,a)},0)}}init(r={},a){this.isInitializing=!0,typeof r=="function"&&(a=r,r={}),r.defaultNS==null&&r.ns&&(Ee(r.ns)?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const o=_0();this.options={...o,...this.options,...s2(r)},this.options.interpolation={...o.interpolation,...this.options.interpolation},r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!aD(this)&&!nD()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),rD());const s=x=>x?typeof x=="function"?new x:x:null;if(!this.options.isClone){this.modules.logger?Or.init(s(this.modules.logger),this.options):Or.init(null,this.options);let x;this.modules.formatter?x=this.modules.formatter:x=K_;const y=new n2(this.options);this.store=new e2(this.options.resources,this.options);const v=this.services;v.logger=Or,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new Z_(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),x&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=s(x),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new o2(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new eD(s(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.languageDetector&&(v.languageDetector=s(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=s(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new kd(this.services,this.options),this.translator.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,a||(a=Pu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const x=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);x.length>0&&x[0]!=="dev"&&(this.options.lng=x[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(x=>{this[x]=(...y)=>this.store[x](...y)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(x=>{this[x]=(...y)=>(this.store[x](...y),this)});const p=Es(),m=()=>{const x=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),a(y,v)};if(this.languages&&!this.isInitialized)return x(null,this.t.bind(this));this.changeLanguage(this.options.lng,x)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(r,a=Pu){let o=a;const s=Ee(r)?r:this.language;if(typeof r=="function"&&(o=r),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],h=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(x=>{x!=="cimode"&&u.indexOf(x)<0&&u.push(x)})};s?h(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>h(m)),this.options.preload?.forEach?.(p=>h(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(p)})}else o(null)}reloadResources(r,a,o){const s=Es();return typeof r=="function"&&(o=r,r=void 0),typeof a=="function"&&(o=a,a=void 0),r||(r=this.languages),a||(a=this.options.ns),o||(o=Pu),this.services.backendConnector.reload(r,a,u=>{s.resolve(),o(u)}),s}use(r){if(!r)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!r.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return r.type==="backend"&&(this.modules.backend=r),(r.type==="logger"||r.log&&r.warn&&r.error)&&(this.modules.logger=r),r.type==="languageDetector"&&(this.modules.languageDetector=r),r.type==="i18nFormat"&&(this.modules.i18nFormat=r),r.type==="postProcessor"&&n3.addPostProcessor(r),r.type==="formatter"&&(this.modules.formatter=r),r.type==="3rdParty"&&this.modules.external.push(r),this}setResolvedLanguage(r){if(!(!r||!this.languages)&&!(["cimode","dev"].indexOf(r)>-1)){for(let a=0;a<this.languages.length;a++){const o=this.languages[a];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(r)<0&&this.store.hasLanguageSomeTranslations(r)&&(this.resolvedLanguage=r,this.languages.unshift(r))}}changeLanguage(r,a){this.isLanguageChangingTo=r;const o=Es();this.emit("languageChanging",r);const s=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?this.isLanguageChangingTo===r&&(s(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve((...x)=>this.t(...x)),a&&a(p,(...x)=>this.t(...x))},h=p=>{!r&&!p&&this.services.languageDetector&&(p=[]);const m=Ee(p)?p:p&&p[0],x=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(Ee(p)?[p]:p);x&&(this.language||s(x),this.translator.language||this.translator.changeLanguage(x),this.services.languageDetector?.cacheUserLanguage?.(x)),this.loadResources(x,y=>{u(y,x)})};return!r&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!r&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(r),o}getFixedT(r,a,o){const s=(u,h,...p)=>{let m;typeof h!="object"?m=this.options.overloadTranslationOptionHandler([u,h].concat(p)):m={...h},m.lng=m.lng||s.lng,m.lngs=m.lngs||s.lngs,m.ns=m.ns||s.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||o||s.keyPrefix);const x=this.options.keySeparator||".";let y;return m.keyPrefix&&Array.isArray(u)?y=u.map(v=>(typeof v=="function"&&(v=Cg(v,{...this.options,...h})),`${m.keyPrefix}${x}${v}`)):(typeof u=="function"&&(u=Cg(u,{...this.options,...h})),y=m.keyPrefix?`${m.keyPrefix}${x}${u}`:u),this.t(y,m)};return Ee(r)?s.lng=r:s.lngs=r,s.ns=a,s.keyPrefix=o,s}t(...r){return this.translator?.translate(...r)}exists(...r){return this.translator?.exists(...r)}setDefaultNamespace(r){this.options.defaultNS=r}hasLoadedNamespace(r,a={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=a.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const h=(p,m)=>{const x=this.services.backendConnector.state[`${p}|${m}`];return x===-1||x===0||x===2};if(a.precheck){const p=a.precheck(this,h);if(p!==void 0)return p}return!!(this.hasResourceBundle(o,r)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(o,r)&&(!s||h(u,r)))}loadNamespaces(r,a){const o=Es();return this.options.ns?(Ee(r)&&(r=[r]),r.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),a&&a(s)}),o):(a&&a(),Promise.resolve())}loadLanguages(r,a){const o=Es();Ee(r)&&(r=[r]);const s=this.options.preload||[],u=r.filter(h=>s.indexOf(h)<0&&this.services.languageUtils.isSupportedCode(h));return u.length?(this.options.preload=s.concat(u),this.loadResources(h=>{o.resolve(),a&&a(h)}),o):(a&&a(),Promise.resolve())}dir(r){if(r||(r=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!r)return"rtl";try{const s=new Intl.Locale(r);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new n2(_0());return r.toLowerCase().indexOf("-latn")>1?"ltr":a.indexOf(o.getLanguagePartFromCode(r))>-1||r.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(r={},a){const o=new Gs(r,a);return o.createInstance=Gs.createInstance,o}cloneInstance(r={},a=Pu){const o=r.forkResourceStore;o&&delete r.forkResourceStore;const s={...this.options,...r,isClone:!0},u=new Gs(s);if((r.debug!==void 0||r.prefix!==void 0)&&(u.logger=u.logger.clone(r)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const p=Object.keys(this.store.data).reduce((m,x)=>(m[x]={...this.store.data[x]},m[x]=Object.keys(m[x]).reduce((y,v)=>(y[v]={...m[x][v]},y),m[x]),m),{});u.store=new e2(p,s),u.services.resourceStore=u.store}if(r.interpolation){const m={..._0().interpolation,...this.options.interpolation,...r.interpolation},x={...s,interpolation:m};u.services.interpolator=new o2(x)}return u.translator=new kd(u.services,s),u.translator.on("*",(p,...m)=>{u.emit(p,...m)}),u.init(s,a),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const rt=Gs.createInstance();rt.createInstance;rt.dir;rt.init;rt.loadResources;rt.reloadResources;rt.use;rt.changeLanguage;rt.getFixedT;rt.t;rt.exists;rt.setDefaultNamespace;rt.hasLoadedNamespace;rt.loadNamespaces;rt.loadLanguages;const iD=(e,r,a,o)=>{const s=[a,{code:r,...o||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(s,"warn","react-i18next::",!0);to(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...s):console?.warn&&console.warn(...s)},c2={},i3=(e,r,a,o)=>{to(a)&&c2[a]||(to(a)&&(c2[a]=new Date),iD(e,r,a,o))},o3=(e,r)=>()=>{if(e.isInitialized)r();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),r()};e.on("initialized",a)}},kg=(e,r,a)=>{e.loadNamespaces(r,o3(e,a))},u2=(e,r,a,o)=>{if(to(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(r)>-1)return kg(e,a,o);a.forEach(s=>{e.options.ns.indexOf(s)<0&&e.options.ns.push(s)}),e.loadLanguages(r,o3(e,o))},oD=(e,r,a={})=>!r.languages||!r.languages.length?(i3(r,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:r.languages}),!0):r.hasLoadedNamespace(e,{lng:a.lng,precheck:(o,s)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,e))return!1}}),to=e=>typeof e=="string",lD=e=>typeof e=="object"&&e!==null,sD=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,cD={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},uD=e=>cD[e],dD=e=>e.replace(sD,uD);let Eg={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:dD,transDefaultProps:void 0};const fD=(e={})=>{Eg={...Eg,...e}},hD=()=>Eg;let l3;const gD=e=>{l3=e},pD=()=>l3,mD={type:"3rdParty",init(e){fD(e.options.react),gD(e)}},vD=f.createContext();class xD{constructor(){this.usedNamespaces={}}addUsedNamespaces(r){r.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var D0={exports:{}},N0={};var d2;function yD(){if(d2)return N0;d2=1;var e=no();function r(v,k){return v===k&&(v!==0||1/v===1/k)||v!==v&&k!==k}var a=typeof Object.is=="function"?Object.is:r,o=e.useState,s=e.useEffect,u=e.useLayoutEffect,h=e.useDebugValue;function p(v,k){var C=k(),S=o({inst:{value:C,getSnapshot:k}}),E=S[0].inst,T=S[1];return u(function(){E.value=C,E.getSnapshot=k,m(E)&&T({inst:E})},[v,C,k]),s(function(){return m(E)&&T({inst:E}),v(function(){m(E)&&T({inst:E})})},[v]),h(C),C}function m(v){var k=v.getSnapshot;v=v.value;try{var C=k();return!a(v,C)}catch{return!0}}function x(v,k){return k()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:p;return N0.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,N0}var f2;function bD(){return f2||(f2=1,D0.exports=yD()),D0.exports}var wD=bD();const SD=(e,r)=>to(r)?r:lD(r)&&to(r.defaultValue)?r.defaultValue:Array.isArray(e)?e[e.length-1]:e,CD={t:SD,ready:!1},kD=()=>()=>{},bp=(e,r={})=>{const{i18n:a}=r,{i18n:o,defaultNS:s}=f.useContext(vD)||{},u=a||o||pD();u&&!u.reportNamespaces&&(u.reportNamespaces=new xD),u||i3(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const h=f.useMemo(()=>({...hD(),...u?.options?.react,...r}),[u,r]),{useSuspense:p,keyPrefix:m}=h,x=e||s||u?.options?.defaultNS,y=to(x)?[x]:x||["translation"],v=f.useMemo(()=>y,y);u?.reportNamespaces?.addUsedNamespaces?.(v);const k=f.useRef(0),C=f.useCallback(G=>{if(!u)return kD;const{bindI18n:Y,bindI18nStore:I}=h,Z=()=>{k.current+=1,G()};return Y&&u.on(Y,Z),I&&u.store.on(I,Z),()=>{Y&&Y.split(" ").forEach(re=>u.off(re,Z)),I&&I.split(" ").forEach(re=>u.store.off(re,Z))}},[u,h]),S=f.useRef(),E=f.useCallback(()=>{if(!u)return CD;const G=!!(u.isInitialized||u.initializedStoreOnce)&&v.every(te=>oD(te,u,h)),Y=r.lng||u.language,I=k.current,Z=S.current;if(Z&&Z.ready===G&&Z.lng===Y&&Z.keyPrefix===m&&Z.revision===I)return Z;const X={t:u.getFixedT(Y,h.nsMode==="fallback"?v:v[0],m),ready:G,lng:Y,keyPrefix:m,revision:I};return S.current=X,X},[u,v,m,h,r.lng]),[T,M]=f.useState(0),{t:O,ready:N}=wD.useSyncExternalStore(C,E,E);f.useEffect(()=>{if(u&&!N&&!p){const G=()=>M(Y=>Y+1);r.lng?u2(u,r.lng,v,G):kg(u,v,G)}},[u,r.lng,v,N,p,T]);const z=u||{},_=f.useRef(null),B=f.useRef(),j=G=>{const Y=Object.getOwnPropertyDescriptors(G);Y.__original&&delete Y.__original;const I=Object.create(Object.getPrototypeOf(G),Y);if(!Object.prototype.hasOwnProperty.call(I,"__original"))try{Object.defineProperty(I,"__original",{value:G,writable:!1,enumerable:!1,configurable:!1})}catch{}return I},L=f.useMemo(()=>{const G=z,Y=G?.language;let I=G;G&&(_.current&&_.current.__original===G?B.current!==Y?(I=j(G),_.current=I,B.current=Y):I=_.current:(I=j(G),_.current=I,B.current=Y));const Z=[O,I,N];return Z.t=O,Z.i18n=I,Z.ready=N,Z},[O,z,N,z.resolvedLanguage,z.language,z.languages]);if(u&&p&&!N)throw new Promise(G=>{const Y=()=>G();r.lng?u2(u,r.lng,v,Y):kg(u,v,Y)});return L},ED=pe.div`
  margin: 0;
`,jD=pe.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,TD=pe.div`
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: 20px;
  color: var(--grey-9);
`,$D="full.name@example.com",MD=!0,LD=!0,OD=!0,AD="#",zD=()=>{const{onThemeToggle:e,isLightMode:r}=sc(),{t:a}=bp(["GlobalUI","Common"]),o=f.useCallback(()=>{const u=rt.language==="ja"?"en":"ja";rt.changeLanguage(u),localStorage.setItem("language",u)},[]),s=c.jsx(jD,{children:c.jsxs(TD,{children:[c.jsx("p",{children:a("Common:userDrawerTextP1")}),c.jsx("p",{children:a("Common:userDrawerTextP2")})]})});return c.jsxs(ED,{children:[c.jsx(yn,{children:"CustomUserDrawerPage.tsx"}),c.jsx(K5,{userDrawerBespoke:s,loggedInUser:$D,hasSearch:MD,useNotifications:LD,logoutLink:AD,searchPlaceholder:a("Common:searchPlaceholder"),isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,hasLanguage:OD,onLanguageToggle:o,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),accountOptionText:a("Common:accountOptions"),currentUserText:a("GlobalUI:currentUser"),userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}]})]})},RD=pe.div`
  margin: 100px 200px;
`,_D=pe.div`
  height: 1px;
  border-radius: 3px;
  background-color: var(--grey-4);
  margin-left: 0px;
`,DD=pe.div`
  margin-top: 20px;
`,ND=pe.div`
  margin-top: 20px;
`,BD=()=>c.jsxs(RD,{children:[c.jsx(yn,{children:"TabsPage.tsx"}),c.jsxs(uc,{children:[c.jsx(zr,{title:"Tabs Example",areaTitle:"Examples",areaHref:"/"}),c.jsxs(pp,{children:[c.jsxs(vp,{defaultTabId:"tab1",children:[c.jsx(Is,{tabFor:"tab1",children:"Tab 1"}),c.jsx(Is,{tabFor:"tab2",children:"Tab 2"})]}),c.jsx(_D,{}),c.jsx(ma,{tabId:"tab1",children:c.jsxs(DD,{children:[c.jsx(Wt,{htmlFor:"fullname",labelText:"Content of tab 1"}),c.jsx(_t,{fieldState:"default",required:!0,label:"Full Name",name:"fullname",id:"fullname"}),c.jsx(_t,{fieldState:"default",required:!0,label:"Department",name:"department",id:"department"}),c.jsx(st,{design:"primary",size:"small",children:" Save "})]})}),c.jsx(ma,{tabId:"tab2",children:c.jsxs(ND,{children:[c.jsx(Wt,{htmlFor:"content2",labelText:"Content of tab 2"}),c.jsx(Wt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),c.jsx(st,{design:"primary",size:"small",children:" OK "})]})})]})]})]}),js=pe.div`
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
`,HD=[{id:"primaryBase0",buttonType:"default",text:"Example Action 1"},{id:"secondaryBase1",buttonType:"default",text:"Example Action 2",design:"secondary"},{id:"buttonWithIcon2",buttonType:"icon-button",text:"Delete Instance",design:"warning",icon:"DevicesScorerEdge"}],UD=()=>{const{onThemeToggle:e,isLightMode:r}=sc();return c.jsxs(Od,{theme:oc,children:[c.jsx(yn,{children:"GlobalUIPage.tsx"}),c.jsxs(xp,{accountOptionText:"Account Options",canAlwaysPin:!0,legacyLayout:!0,isLightMode:r,switchThemeText:"SWITCH THEME",selectedThemeText:r?"LIGHT MODE":"DARK MODE",onThemeToggle:e,hasSwitchTheme:!0,content:{items:[{href:"/welcome",icon:"Home",title:"Welcome"},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:"About us"},{href:"/company/team",title:"Team"},{href:"/company/contact",title:"Contact"},{href:"/company/table-example",title:"Table Example"},{href:"https://www.google.com/",isExternalLink:!0,title:"External link"}],title:"Company"},{href:"/services",icon:"Usage",submenu:[{title:"Online Services"},{href:"/services/custom",title:"Service custom"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"},{title:"On site Services"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"}],title:"Services"},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:"External link"}]},currentUserText:"Current User",customDrawer:{customComponent:c.jsx("h1",{children:"Hello Drawer"}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"1200px",notificationsHistory:{noNotificationsText:"No new notifications",read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:"New",unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:"Read"},searchPlaceholder:"Search area names, etc.",supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:"Accounts"},{href:"/user/billing",text:"Billing"},{href:"/user/payments",text:"Payments"}],children:[c.jsx(zr,{title:"Welcome",introductionText:"Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. ",rightContent:c.jsx(h5,{buttons:HD})}),c.jsxs(js,{children:[c.jsx("h2",{children:"What is Lorem Ipsum?"}),c.jsx("p",{children:"Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur. Enim magna sunt elit aliqua reprehenderit."})]}),c.jsxs(js,{children:[c.jsx("h2",{children:"Why do we use it?"}),c.jsx("p",{children:"Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit. Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do. Eiusmod nisi elit fugiat occaecat elit culpa est qui."})]}),c.jsxs(js,{children:[c.jsx("h2",{children:"Where does it come from?"}),c.jsx("p",{children:"Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt voluptate laborum esse minim."})]}),c.jsxs(js,{children:[c.jsx("h2",{children:"Where can I get some?"}),c.jsx("p",{children:"Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum tempor incididunt irure duis mollit."})]}),c.jsxs(js,{children:[c.jsx("h2",{children:"Example"}),c.jsx("p",{children:"Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat."})]})]})]})},ID=pe.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,PD=pe.div`
  --error: red;
  --info: blue;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,GD=()=>c.jsxs(ID,{children:[c.jsx(yn,{children:"CustomAlertsPage.tsx"}),c.jsx("h3",{children:"Default Based Colors"}),c.jsx(ga,{message:"Base color error message",type:"error",hideCloseButton:!0}),c.jsx(ga,{message:"Base color info message",type:"info",hideCloseButton:!0}),c.jsxs(PD,{children:[c.jsx("h3",{children:"Custom Local file Colors"}),c.jsx(ga,{message:"Custom color error message",type:"error",hideCloseButton:!0}),c.jsx(ga,{message:"Custom color info message",type:"info",hideCloseButton:!0})]}),c.jsx("h3",{children:"Custom Global Project Colors"}),c.jsx(ga,{message:"Custom color success message",type:"success",hideCloseButton:!0}),c.jsx(ga,{message:"Custom color warning message",type:"warning",hideCloseButton:!0})]}),qD=pe.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--grey-8) 1px dotted;
  margin-bottom: 20px;
`,FD=()=>{const{onThemeToggle:e,isLightMode:r}=sc(),{t:a}=bp(["GlobalUI","Common"]),o=f.useCallback(()=>{const h=rt.language==="ja"?"en":"ja";rt.changeLanguage(h),localStorage.setItem("language",h)},[]),s=[{id:"primaryBase0",buttonType:"default",text:a("Common:exampleAction")}],u={UtilityHeaderOptions:{back:{label:a("Common:breadcrumbs.back"),link:"/"},breadcrumbs:[{text:a("Common:breadcrumbs.firstText"),href:"/"},{text:a("Common:breadcrumbs.secondText"),href:"#2"},{text:a("Common:breadcrumbs.thirdText"),href:"#3"},{text:a("Common:breadcrumbs.fourText"),href:"#4"},{text:a("Common:breadcrumbs.fiveText"),href:"#5"}],showBreadcrumbs:!0,share:{show:!0,label:a("Common:share"),link:"https://www.example.com",copiedLabel:"Copied"}},PageHeaderArea:c.jsx(zr,{title:a("Common:pageTitle"),introductionText:a("Common:pageIntroduction"),icon:"Home",rightContent:c.jsx(h5,{buttons:s})}),TabsElementArea:c.jsxs(vp,{defaultTabId:"tab1",children:[c.jsx(Is,{tabFor:"tab1",children:a("Common:home")}),c.jsx(Is,{tabFor:"tab2",children:a("Common:example1")}),c.jsx(Is,{tabFor:"tab3",children:a("Common:example2")})]})};return c.jsxs(Od,{theme:oc,children:[c.jsx(yn,{children:"Layouts.tsx"}),c.jsx(xp,{accountOptionText:a("Common:accountOptions"),canAlwaysPin:!0,isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:o,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),badge:{text:a("Common:badgeTitle"),color:"primary",linkTo:"#",linkText:a("GlobalUI:login")},hasSwitchTheme:!0,keepOpenText:a("GlobalUI:keepOpenText"),autoHideText:a("GlobalUI:autoHideText"),supportText:a("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:a("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:a("Common:aboutUs")},{href:"/company/team",title:a("Common:team")},{href:"/company/contact",title:a("Common:contact")},{href:"/company/table-example",title:a("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:a("Common:externalLink")}],title:a("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:a("Common:onlineServices")},{href:"/services/custom",title:a("Common:serviceCustom")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")},{title:a("Common:onSiteServices")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")}],title:a("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:a("Common:externalLink")}]},currentUserText:a("GlobalUI:currentUser"),customDrawer:{customComponent:c.jsx("h1",{style:{textAlign:"center"},children:a("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:a("GlobalUI:logout"),maxWidth:"none",notificationsHistory:{noNotificationsText:a("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:a("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:a("Common:unreadNotificationsText")},searchPlaceholder:a("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}],children:c.jsxs(N5,{layout:"default",HeaderContent:u,children:[c.jsx(ma,{tabId:"tab1",children:c.jsxs("div",{children:[c.jsx("h1",{children:"Full Width Container"}),c.jsx("p",{children:a("Common:descriptionTab1")}),c.jsx(PA,{children:c.jsx(qD,{})}),c.jsx("h2",{children:"Lorem Ipsum"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("h2",{children:"Dolor Sit Amet"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),c.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."}),c.jsx("h2",{children:"Proident Nostrud"}),c.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),c.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),c.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),c.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),c.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."})]})}),c.jsx(ma,{tabId:"tab2",children:c.jsxs("div",{children:[c.jsx(Wt,{htmlFor:"fullname",labelText:a("Common:titleTab2")}),c.jsx(_t,{fieldState:"default",required:!0,label:a("Common:formName"),name:"fullname",id:"fullname"}),c.jsx(_t,{fieldState:"default",required:!0,label:a("Common:formDepartment"),name:"department",id:"department"}),c.jsx(st,{design:"primary",size:"small",children:" Save "})]})}),c.jsx(ma,{tabId:"tab3",children:c.jsxs("div",{children:[c.jsx(Wt,{htmlFor:"content2",labelText:a("Common:titleTab3")}),c.jsx(Wt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),c.jsx(st,{design:"primary",size:"small",children:" OK "})]})})]})})]})},WD=()=>{const{onThemeToggle:e,isLightMode:r}=sc(),{t:a}=bp(["GlobalUI","Common"]),[o]=f.useState("horizontal"),[s]=f.useState(!1),u=f.useCallback(()=>{const x=rt.language==="ja"?"en":"ja";rt.changeLanguage(x),localStorage.setItem("language",x)},[]),h=f.useCallback(x=>{console.log(`Side Area Current State: ${x}`)},[]),p=c.jsx(hy,{title:"Main Area"}),m=c.jsx(hy,{title:"Side Area"});return c.jsxs(Od,{theme:oc,children:[c.jsx(yn,{children:"SplitLayout.tsx"}),c.jsx(xp,{accountOptionText:a("Common:accountOptions"),canAlwaysPin:!0,isLightMode:r,switchThemeText:a("GlobalUI:theme.switchTheme"),selectedThemeText:a(r?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:u,selectedLangAttribute:rt.language,selectedLanguageText:a(`GlobalUI:theme.${rt.language}`),hasSwitchTheme:!0,keepOpenText:a("GlobalUI:keepOpenText"),autoHideText:a("GlobalUI:autoHideText"),supportText:a("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:a("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:a("Common:aboutUs")},{href:"/company/team",title:a("Common:team")},{href:"/company/contact",title:a("Common:contact")},{href:"/company/table-example",title:a("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:a("Common:externalLink")}],title:a("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:a("Common:onlineServices")},{href:"/services/custom",title:a("Common:serviceCustom")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")},{title:a("Common:onSiteServices")},{href:"/services/special",title:a("Common:serviceSpecial")},{href:"/services/extra-special",title:a("Common:serviceExtraSpecial")}],title:a("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:a("Common:externalLink")}]},currentUserText:a("GlobalUI:currentUser"),customDrawer:{customComponent:c.jsx("h1",{style:{textAlign:"center"},children:a("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"none",notificationsHistory:{noNotificationsText:a("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:a("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:a("Common:unreadNotificationsText")},searchPlaceholder:a("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:a("Common:accounts")},{href:"/user/billing",text:a("Common:billing")},{href:"/user/payments",text:a("Common:payments")}],children:c.jsx(N5,{layout:"dashboard",children:c.jsx(QA,{layout:o,persist:!0,persistenceKey:"my_unique_key",reverse:s,mainArea:{content:p,minSize:120},sideArea:{content:m,collapsable:!0,minSize:200,defaultCollapsed:!0,onSideAreaStateChange:h}})})})]})},VD=pe.div`
  padding: 50px;
`,h2=pe.div`
  margin-top: 30px;
`,g2=pe.div`
  margin-top: 30px;
  margin-bottom: 60px;
`,YD=pe.div`
  font-size: 18px;
  font-weight: 600;
`,ZD=pe.div`
  margin-top: 10px;
`,XD=e=>new Promise((r,a)=>{setTimeout(()=>{e?a(new Error("Simulated fetch failure")):r([{id:1,title:"Mock Product 1"},{id:2,title:"Mock Product 2"},{id:3,title:"Mock Product 3"}])},1500)}),QD=()=>{const[e,r]=f.useState(!1),[a,o]=f.useState(null),[s,u]=f.useState(!1),[h,p]=f.useState(null),[m,x]=f.useState("default"),[y,v]=f.useState(!1),k=f.useCallback(async()=>{if(x("default"),e||h!==null){r(!1),o(null),p(null);return}u(!0),x("loading"),p(null);try{const S=await XD(y);o(S),r(!0),x("default")}catch{o(null),p("Failed to fetch data"),x("failure")}finally{u(!1)}},[e,y,h]),C=f.useCallback(S=>{v(S),r(!1),o(null),p(null),x("default")},[]);return c.jsxs(VD,{children:[c.jsx(zr,{title:"Switch Component Examples",icon:"Settings"}),c.jsxs(g2,{children:[c.jsx(zr,{title:"Uncontrolled Component",introductionText:"This switch uses defaultChecked prop and manages its own state internally"}),c.jsx(h2,{children:c.jsx(pl,{labelText:"Toggle Switch (Uncontrolled)",defaultChecked:!0,onChangeCallback:S=>console.log("Uncontrolled switch changed:",S)})})]}),c.jsxs(g2,{children:[c.jsx(zr,{title:"Controlled Component",introductionText:"This switch uses checked and onChangeCallback props to control its state"}),c.jsx(Wt,{labelText:"Show Fail Scenario",htmlFor:"example1",direction:"row",children:c.jsx(ip,{checked:y,onChangeCallback:C},"example1")}),c.jsxs(h2,{children:[c.jsx(pl,{labelText:"Fetch Data (Controlled)",checked:e,onChangeCallback:k,state:m}),s&&c.jsx("p",{children:"Loading..."}),a&&c.jsxs(ZD,{children:[c.jsx(YD,{children:"API Response"}),c.jsx("ul",{children:a.map(S=>c.jsx("li",{children:S.username||S.title},S.id))})]}),h&&c.jsx("p",{style:{color:"red"},children:h})]})]})]})},wp=2e3,KD=(e=()=>{},r=1e3)=>{const a=f.useRef(null),o=f.useRef(e),s=f.useRef(!1),u=f.useCallback(async()=>{a.current!==null&&(clearTimeout(a.current),a.current=null),await o.current(),s.current||(a.current=setTimeout(u,r))},[r]);f.useEffect(()=>{o.current=e},[e]),f.useEffect(()=>(u(),()=>{s.current=!0,a.current!==null&&(clearTimeout(a.current),a.current=null)}),[u])},JD=pe.div`
  padding: 50px;
`,eN=pe.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`,p2=pe.div`
  border-radius: 4px;
  border: 1px solid ${({$variant:e})=>e==="broken"?"var(--caution-8)":"var(--success-8)"};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,m2=pe.h3`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-12);
  margin: 0;
`,tN=pe.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`,B0=pe.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,H0=pe.span`
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--grey-9);
  min-width: 88px;
`,nN=pe.span`
  font-family: var(--font-data);
  font-size: 28px;
  font-weight: 600;
  color: var(--grey-12);
`,rN=pe.span`
  font-family: var(--font-data);
  font-size: 14px;
  color: var(--grey-11);
`,v2=pe.div`
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
`,x2=pe.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`,aN=pe.div`
  margin: 8px 0 24px;
  padding: 16px 20px;
  background: var(--grey-2);
  border-radius: 4px;
  border-left: 3px solid var(--primary-7);
  font-family: var(--font-data);
  font-size: 13px;
  line-height: 1.8;
  color: var(--grey-11);
`,U0=pe.p`
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
`,Nt=pe.code`
  color: var(--primary-9);
  font-family: var(--font-data);
`,iN=pe.span`
  color: var(--caution-9);
`,oN=pe.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 6px;
`,Jo=pe.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`,I0=pe.span`
  font-weight: 600;
  color: var(--grey-12);
`,el=pe.span`
  color: var(--grey-11);
`,s3=e=>{const[r,a]=f.useState(!1),o=f.useRef(null);return f.useEffect(()=>{if(e!==0)return a(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>a(!1),Math.round(wp*1.4)),()=>{o.current&&clearTimeout(o.current)}},[e]),r},c3=({count:e,lastPolled:r,isPolling:a})=>{const o=e===0?"Waiting…":a?"Polling continuously":"Stopped",s=e===0?"":a?"Success":"BigWarning";return c.jsxs(tN,{children:[c.jsxs(B0,{children:[c.jsx(H0,{children:"Poll count"}),c.jsx(nN,{children:e})]}),c.jsxs(B0,{children:[c.jsx(H0,{children:"Last polled"}),c.jsx(rN,{children:r})]}),c.jsxs(B0,{children:[c.jsx(H0,{children:"Status"}),c.jsx($5,{tagSize:"compact",label:o,icon:s})]})]})},lN=()=>{const[e,r]=f.useState(0),[a,o]=f.useState("—"),s=s3(e),u=f.useCallback(()=>{r(h=>h+1),o(new Date().toLocaleTimeString())},[]);return KD(u,wp),c.jsx(c3,{count:e,lastPolled:a,isPolling:s})},sN=()=>{const[e,r]=f.useState(0),[a,o]=f.useState("—"),s=s3(e),u=f.useCallback(()=>{r(h=>h+1),o(new Date().toLocaleTimeString())},[]);return l$(u,wp),c.jsx(c3,{count:e,lastPolled:a,isPolling:s})},cN=()=>{const[e,r]=f.useState(!0),[a,o]=f.useState(!0);return c.jsxs(JD,{children:[c.jsx(zr,{title:"usePoll — StrictMode Fix",introductionText:"Side-by-side comparison of usePoll before and after the StrictMode canceled-ref fix. In development (StrictMode active), the Before panel polls once then stops; the After panel polls continuously. Use Unmount / Remount to reset and replay."}),c.jsxs(aN,{children:[c.jsx(U0,{children:"⚠️ The difference is only visible in development builds with React StrictMode active. In production both panels behave identically."}),c.jsxs(U0,{children:[c.jsx("strong",{children:"React 16 & 17:"})," StrictMode double-invokes ",c.jsx("em",{children:"render functions"})," only."," ",c.jsx(Nt,{children:"useEffect"})," callbacks run ",c.jsx("strong",{children:"once"})," on mount. ",c.jsx(Nt,{children:"canceled.current"})," starts as ",c.jsx(Nt,{children:"false"}),", ",c.jsx(Nt,{children:"pollOnce()"})," fires, the check ",c.jsx(Nt,{children:"if (!canceled.current)"})," passes, and the chain keeps scheduling. No bug."]}),c.jsxs(U0,{children:[c.jsx("strong",{children:"React 18 & 19:"})," StrictMode was extended to also double-invoke ",c.jsx("em",{children:"effects"})," — it simulates mount → cleanup → remount to help surface bugs. The sequence becomes:"]}),c.jsxs(oN,{children:[c.jsxs(Jo,{children:[c.jsx(I0,{children:"1. Mount"}),c.jsxs(el,{children:["→ ",c.jsx(Nt,{children:"useEffect"})," runs → ",c.jsx(Nt,{children:"canceled.current"})," is false → ",c.jsx(Nt,{children:"pollOnce()"})," starts"]})]}),c.jsxs(Jo,{children:[c.jsx(I0,{children:"2. Cleanup"}),c.jsxs(el,{children:["→ ",c.jsx(Nt,{children:"canceled.current"})," = true (timer cleared)"]})]}),c.jsxs(Jo,{children:[c.jsx(I0,{children:"3. Remount"}),c.jsxs(el,{children:["→ ",c.jsx(Nt,{children:"useEffect"})," runs again → ",c.jsx(Nt,{children:"pollOnce()"})," called"]})]}),c.jsxs(Jo,{children:[c.jsx("span",{}),c.jsx(el,{children:"→ callback fires (async await)"})]}),c.jsxs(Jo,{children:[c.jsx("span",{}),c.jsxs(el,{children:["→ checks ",c.jsx(Nt,{children:"canceled.current"})," → still true ",c.jsx(iN,{children:"← bug stops here"})]})]}),c.jsxs(Jo,{children:[c.jsx("span",{}),c.jsx(el,{children:"→ never schedules next poll"})]})]})]}),c.jsxs(eN,{children:[c.jsxs(p2,{$variant:"broken",children:[c.jsx(m2,{children:"Before — broken pattern"}),c.jsxs(x2,{children:[c.jsx(Nt,{children:"canceled.current"})," is never reset on remount. In StrictMode the cleanup sets it to ",c.jsx(Nt,{children:"true"}),"; on remount"," ",c.jsx(Nt,{children:"pollOnce()"})," runs once, sees ",c.jsx(Nt,{children:"canceled === true"}),", and never schedules the next poll."]}),e?c.jsx(lN,{}):c.jsx(v2,{children:"Component unmounted — click Remount to replay"}),c.jsx(st,{design:"secondary",size:"small",onClick:()=>r(s=>!s),children:e?"Unmount":"Remount"})]}),c.jsxs(p2,{$variant:"fixed",children:[c.jsx(m2,{children:"After — fixed pattern"}),c.jsxs(x2,{children:[c.jsx(Nt,{children:"canceled.current = false"})," is set at the top of the effect, before ",c.jsx(Nt,{children:"pollOnce()"})," is called. The StrictMode remount resets the flag and polling continues on schedule."]}),a?c.jsx(sN,{}):c.jsx(v2,{children:"Component unmounted — click Remount to replay"}),c.jsx(st,{design:"secondary",size:"small",onClick:()=>o(s=>!s),children:a?"Unmount":"Remount"})]})]}),c.jsx(yn,{children:"UsePollTestPage.tsx"})]})},uN=()=>c.jsx(nj,{children:c.jsxs(AE,{children:[c.jsx(Gt,{path:"/",element:c.jsx(a_,{})}),c.jsx(Gt,{path:"/line",element:c.jsx(QR,{})}),c.jsx(Gt,{path:"/linevideo",element:c.jsx(t_,{})}),c.jsx(Gt,{path:"/linertc",element:c.jsx(JR,{})}),c.jsx(Gt,{path:"/login",element:c.jsx(M_,{onLogin:()=>{}})}),c.jsx(Gt,{path:"/forms",element:c.jsx(XR,{})}),c.jsx(Gt,{path:"/table",element:c.jsx(__,{})}),c.jsx(Gt,{path:"/customdrawer",element:c.jsx(zD,{})}),c.jsx(Gt,{path:"/ptz",element:c.jsx(qO,{socketUrl:"ws://localhost/wsapp/",imageRefresh:2e3,children:c.jsx(l_,{})})}),c.jsx(Gt,{path:"/tabs",element:c.jsx(BD,{})}),c.jsx(Gt,{path:"/customalert",element:c.jsx(GD,{})}),c.jsx(Gt,{path:"/globalUI",element:c.jsx(UD,{})}),c.jsx(Gt,{path:"/layouts",element:c.jsx(FD,{})}),c.jsx(Gt,{path:"/split-layouts",element:c.jsx(WD,{})}),c.jsx(Gt,{path:"/switch-test",element:c.jsx(QD,{})}),c.jsx(Gt,{path:"/usepoll-test",element:c.jsx(cN,{})})]})});window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function dN(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}const fN="Powered By:",hN="Welcome",gN="Guest",pN="Share",mN="Home",vN="Example Action",xN="Thanks for using our UI library.",yN="Example 1",bN="Example 2",wN="Account Options",SN="About us",CN="Team",kN="Contact",EN="Company",jN="Table Example",TN="External link",$N="Online Services",MN="Service custom",LN="Service special",ON="Service Extra Special",AN="On site Services",zN="Services",RN="Example Drawer",_N="No new notifications",DN="Read",NN="UnRead",BN="Search area names, etc.",HN="Accounts",UN="Billing",IN="Payments",PN="The below line uses the FullWidthContentBlock component to break out of the layout and span the full width of the browser.",GN="Content Tab 2",qN="Content Tab 3",FN="Name",WN="Department",VN="Custom content can be injected under the user menu like this.",YN="The styling for this is left to you to include, keeping it flexible.",ZN={back:"Back",firstText:"Examples",secondText:"Two",thirdText:"Third",fourText:"Four",fiveText:"Five"},XN={madeby:fN,pageTitle:hN,badgeTitle:gN,share:pN,home:mN,exampleAction:vN,pageIntroduction:xN,example1:yN,example2:bN,accountOptions:wN,aboutUs:SN,team:CN,contact:kN,company:EN,tableExample:jN,externalLink:TN,onlineServices:$N,serviceCustom:MN,serviceSpecial:LN,serviceExtraSpecial:ON,onSiteServices:AN,services:zN,helloDrawer:RN,noNotificationsText:_N,readNotificationsText:DN,unreadNotificationsText:NN,searchPlaceholder:BN,accounts:HN,billing:UN,payments:IN,descriptionTab1:PN,titleTab2:GN,titleTab3:qN,formName:FN,formDepartment:WN,userDrawerTextP1:VN,userDrawerTextP2:YN,breadcrumbs:ZN},QN="Powered By:",KN="ようこそ",JN="ゲスト",eB="共有",tB="ホーム",nB="サンプル 1",rB="サンプル 2",aB="例1のアクション",iB="UIライブラリのご利用ありがとうございます。",oB="アカウントオプション",lB="会社概要",sB="チーム",cB="コンタクト",uB="会社概要",dB="テーブル例",fB="外部リンク",hB="オンラインサービス",gB="サービスカスタム",pB="サービススペシャル",mB="特別なサービス",vB="オンサイトサービス",xB="サービス",yB="例ドラウェ",bB="新着通知なし",wB="既読通知",SB="未読通知",CB="検索エリア名など",kB="アカウント一覧",EB="請求",jB="支払い",TB="以下の行では、FullWidthContentBlock コンポーネントを使用してレイアウトの制約を解除し、ブラウザーの全幅に広げています。",$B="タブ2の内容",MB="タブ3の内容",LB="名",OB="部門",AB="カスタムコンテンツは、このようにユーザーメニューの下に挿入することができます",zB="スタイリングは自由に設定できます",RB={back:"戻る",firstText:"実例",secondText:"第2",thirdText:"第3",fourText:"第4",fiveText:"第5"},_B={madeby:QN,pageTitle:KN,badgeTitle:JN,share:eB,home:tB,example1:nB,example2:rB,exampleAction:aB,pageIntroduction:iB,accountOptions:oB,aboutUs:lB,team:sB,contact:cB,company:uB,tableExample:dB,externalLink:fB,onlineServices:hB,serviceCustom:gB,serviceSpecial:pB,serviceExtraSpecial:mB,onSiteServices:vB,services:xB,helloDrawer:yB,noNotificationsText:bB,readNotificationsText:wB,unreadNotificationsText:SB,searchPlaceholder:CB,accounts:kB,billing:EB,payments:jB,descriptionTab1:TB,titleTab2:$B,titleTab3:MB,formName:LB,formDepartment:OB,userDrawerTextP1:AB,userDrawerTextP2:zB,breadcrumbs:RB},DB="Login",NB="Logout",BB="Current User",HB="Keep Open",UB="Auto-Hide",IB="Help & Support",PB="No new notifications",GB="Read",qB="UnRead",FB={darkMode:"DARK MODE",lightMode:"LIGHT MODE",switchTheme:"SWITCH THEME",en:"English",ja:"Japanese"},WB={login:DB,logout:NB,currentUser:BB,keepOpenText:HB,autoHideText:UB,supportText:IB,noNotificationsText:PB,readNotificationsText:GB,unreadNotificationsText:qB,theme:FB},VB="ログイン",YB="ログアウト",ZB="現在のユーザー",XB="開いた状態を維持",QB="自動で隠す",KB="ヘルプとサポート",JB="新着通知なし",eH="既読通知",tH="未読通知",nH={darkMode:"ダークモード",lightMode:"ライトモード",switchTheme:"テーマの変更",en:"英語",ja:"日本語"},rH={login:VB,logout:YB,currentUser:ZB,keepOpenText:XB,autoHideText:QB,supportText:KB,noNotificationsText:JB,readNotificationsText:eH,unreadNotificationsText:tH,theme:nH},{slice:aH,forEach:iH}=[];function oH(e){return iH.call(aH.call(arguments,1),r=>{if(r)for(const a in r)e[a]===void 0&&(e[a]=r[a])}),e}function lH(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const y2=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,sH=function(e,r){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},s=encodeURIComponent(r);let u=`${e}=${s}`;if(o.maxAge>0){const h=o.maxAge-0;if(Number.isNaN(h))throw new Error("maxAge should be a Number");u+=`; Max-Age=${Math.floor(h)}`}if(o.domain){if(!y2.test(o.domain))throw new TypeError("option domain is invalid");u+=`; Domain=${o.domain}`}if(o.path){if(!y2.test(o.path))throw new TypeError("option path is invalid");u+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");u+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(u+="; Partitioned"),u},b2={create(e,r,a,o){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(s.expires=new Date,s.expires.setTime(s.expires.getTime()+a*60*1e3)),o&&(s.domain=o),document.cookie=sH(e,r,s)},read(e){const r=`${e}=`,a=document.cookie.split(";");for(let o=0;o<a.length;o++){let s=a[o];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(r)===0)return s.substring(r.length,s.length)}return null},remove(e,r){this.create(e,"",-1,r)}};var cH={name:"cookie",lookup(e){let{lookupCookie:r}=e;if(r&&typeof document<"u")return b2.read(r)||void 0},cacheUserLanguage(e,r){let{lookupCookie:a,cookieMinutes:o,cookieDomain:s,cookieOptions:u}=r;a&&typeof document<"u"&&b2.create(a,e,o,s,u)}},uH={name:"querystring",lookup(e){let{lookupQuerystring:r}=e,a;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let h=0;h<u.length;h++){const p=u[h].indexOf("=");p>0&&u[h].substring(0,p)===r&&(a=u[h].substring(p+1))}}return a}},dH={name:"hash",lookup(e){let{lookupHash:r,lookupFromHashIndex:a}=e,o;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const u=s.substring(1);if(r){const h=u.split("&");for(let p=0;p<h.length;p++){const m=h[p].indexOf("=");m>0&&h[p].substring(0,m)===r&&(o=h[p].substring(m+1))}}if(o)return o;if(!o&&a>-1){const h=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(h)?h[typeof a=="number"?a:0]?.replace("/",""):void 0}}}return o}};let tl=null;const w2=()=>{if(tl!==null)return tl;try{if(tl=typeof window<"u"&&window.localStorage!==null,!tl)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{tl=!1}return tl};var fH={name:"localStorage",lookup(e){let{lookupLocalStorage:r}=e;if(r&&w2())return window.localStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupLocalStorage:a}=r;a&&w2()&&window.localStorage.setItem(a,e)}};let nl=null;const S2=()=>{if(nl!==null)return nl;try{if(nl=typeof window<"u"&&window.sessionStorage!==null,!nl)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{nl=!1}return nl};var hH={name:"sessionStorage",lookup(e){let{lookupSessionStorage:r}=e;if(r&&S2())return window.sessionStorage.getItem(r)||void 0},cacheUserLanguage(e,r){let{lookupSessionStorage:a}=r;a&&S2()&&window.sessionStorage.setItem(a,e)}},gH={name:"navigator",lookup(e){const r=[];if(typeof navigator<"u"){const{languages:a,userLanguage:o,language:s}=navigator;if(a)for(let u=0;u<a.length;u++)r.push(a[u]);o&&r.push(o),s&&r.push(s)}return r.length>0?r:void 0}},pH={name:"htmlTag",lookup(e){let{htmlTag:r}=e,a;const o=r||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(a=o.getAttribute("lang")),a}},mH={name:"path",lookup(e){let{lookupFromPathIndex:r}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?a[typeof r=="number"?r:0]?.replace("/",""):void 0}},vH={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:r}=e;const a=typeof r=="number"?r+1:1,o=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[a]}};let u3=!1;try{document.cookie,u3=!0}catch{}const d3=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];u3||d3.splice(1,1);const xH=()=>({order:d3,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class f3{constructor(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(r,a)}init(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=r,this.options=oH(a,this.options||{},xH()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=s=>s.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(cH),this.addDetector(uH),this.addDetector(fH),this.addDetector(hH),this.addDetector(gH),this.addDetector(pH),this.addDetector(mH),this.addDetector(vH),this.addDetector(dH)}addDetector(r){return this.detectors[r.name]=r,this}detect(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return r.forEach(o=>{if(this.detectors[o]){let s=this.detectors[o].lookup(this.options);s&&typeof s=="string"&&(s=[s]),s&&(a=a.concat(s))}}),a=a.filter(o=>o!=null&&!lH(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(r)>-1||a.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(r,this.options)}))}}f3.type="languageDetector";const yH={en:{Common:XN,GlobalUI:WB},ja:{Common:_B,GlobalUI:rH}};rt.use(f3).use(mD).init({resources:yH,fallbackLng:"ja",lng:localStorage.getItem("language")||navigator.language,keySeparator:".",interpolation:{escapeValue:!1},defaultNS:"GlobalUI",ns:["Common","GlobalUI"]});const C2="/scorer-ui-kit/assets/Lato3Upr3M-VF-BS60sTW_.woff2",k2="/scorer-ui-kit/assets/Lato3Ita3M-VF-C8KUZ9bO.woff2",bH="/scorer-ui-kit/assets/Monorale-Thin-BQKHXPxk.woff",wH="/scorer-ui-kit/assets/Monorale-ThinItalic-DxjjXtaw.woff",SH="/scorer-ui-kit/assets/Monorale-ExtraLight-ao5tsxV8.woff",CH="/scorer-ui-kit/assets/Monorale-ExtraLightItalic-6yY0Bdrq.woff",kH="/scorer-ui-kit/assets/Monorale-Light-T7gpP2n1.woff",EH="/scorer-ui-kit/assets/Monorale-LightItalic-f797-kPY.woff",jH="/scorer-ui-kit/assets/Monorale-Regular-DOtBvWqV.woff",TH="/scorer-ui-kit/assets/Monorale-Italic-bzXvo1D-.woff",$H="/scorer-ui-kit/assets/Monorale-Medium-CVfjkY1Z.woff",MH="/scorer-ui-kit/assets/Monorale-MediumItalic-BEsxtezO.woff",LH="/scorer-ui-kit/assets/Monorale-SemiBold-BVVp1RRO.woff",OH="/scorer-ui-kit/assets/Monorale-SemiBoldItalic-nEmp39Cb.woff",AH="/scorer-ui-kit/assets/Monorale-Bold-CtnTlBZA.woff",zH="/scorer-ui-kit/assets/Monorale-ExtraBold-C9ejQABg.woff",RH="/scorer-ui-kit/assets/Monorale-Black-COwa-Bp6.woff",_H=Rg`

@font-face {
    font-family: "Lato";
    src: url(${C2}) format("woff2 supports variations"),
        url(${C2}) format("woff2-variations");
    font-weight: 100 900;
  }

  @font-face {
    font-family: "Lato";
    font-style: italic;
    src: url(${k2}) format("woff2 supports variations"),
        url(${k2}) format("woff2-variations");
    font-weight: 100 900;
  }


  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url(${bH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url(${wH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url(${SH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url(${CH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url(${kH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url(${EH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url(${jH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url(${TH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url(${$H}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url(${MH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url(${LH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url(${OH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url(${AH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url(${zH}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url(${RH}) format('woff');
    font-display: fallback;
  }

`,DH=Rg`
  ${Lj};
`,NH=Rg`
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
`;oc.custom.lines.weird={label:{fill:"#fff"},contrastLine:{stroke:"transparent;"},highlightLine:{stroke:"transparent;"},grabHandle:{fill:"transparent;",stroke:"transparent;"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleText:{fill:"transparent"},grabHandleContrast:{fill:"transparent"},handleBase:{fill:"transparent"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{stroke:"transparent;"},handleReactiveRing:{stroke:"transparent;"},handleContrastLayer:{stroke:"transparent;"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}};const BH=()=>(sc(),c.jsx(Od,{theme:oc,children:c.jsx(r$,{children:c.jsxs(o$,{children:[c.jsx(uN,{}),c.jsx(_H,{}),c.jsx(Mj,{}),c.jsx(NH,{}),c.jsx(DH,{})]})})})),HH=p4.createRoot(document.getElementById("root"));HH.render(c.jsx(Ve.StrictMode,{children:c.jsx(BH,{})}));dN();
//# sourceMappingURL=index-BZ2CvbuA.js.map
