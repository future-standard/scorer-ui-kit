(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lh={exports:{}},Ul={};var Rm;function s3(){if(Rm)return Ul;Rm=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,c,u){var h=null;if(u!==void 0&&(h=""+u),c.key!==void 0&&(h=""+c.key),"key"in c){u={};for(var p in c)p!=="key"&&(u[p]=c[p])}else u=c;return c=u.ref,{$$typeof:e,type:o,key:h,ref:c!==void 0?c:null,props:u}}return Ul.Fragment=a,Ul.jsx=i,Ul.jsxs=i,Ul}var Dm;function c3(){return Dm||(Dm=1,lh.exports=s3()),lh.exports}var s=c3(),sh={exports:{}},Ee={};var _m;function u3(){if(_m)return Ee;_m=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),k=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=k&&O[k]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function M(O,W,Y){this.props=O,this.context=W,this.refs=T,this.updater=Y||S}M.prototype.isReactComponent={},M.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function z(){}z.prototype=M.prototype;function _(O,W,Y){this.props=O,this.context=W,this.refs=T,this.updater=Y||S}var B=_.prototype=new z;B.constructor=_,E(B,M.prototype),B.isPureReactComponent=!0;var N=Array.isArray;function U(){}var L={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function F(O,W,Y){var se=Y.ref;return{$$typeof:e,type:O,key:W,ref:se!==void 0?se:null,props:Y}}function J(O,W){return F(O.type,W,O.props)}function q(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function ee(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Y){return W[Y]})}var re=/\/+/g;function Q(O,W){return typeof O=="object"&&O!==null&&O.key!=null?ee(""+O.key):W.toString(36)}function ne(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(U,U):(O.status="pending",O.then(function(W){O.status==="pending"&&(O.status="fulfilled",O.value=W)},function(W){O.status==="pending"&&(O.status="rejected",O.reason=W)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function D(O,W,Y,se,he){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(me){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case e:case a:fe=!0;break;case b:return fe=O._init,D(fe(O._payload),W,Y,se,he)}}if(fe)return he=he(O),fe=se===""?"."+Q(O,0):se,N(he)?(Y="",fe!=null&&(Y=fe.replace(re,"$&/")+"/"),D(he,W,Y,"",function(_e){return _e})):he!=null&&(q(he)&&(he=J(he,Y+(he.key==null||O&&O.key===he.key?"":(""+he.key).replace(re,"$&/")+"/")+fe)),W.push(he)),1;fe=0;var ye=se===""?".":se+":";if(N(O))for(var ve=0;ve<O.length;ve++)se=O[ve],me=ye+Q(se,ve),fe+=D(se,W,Y,me,he);else if(ve=C(O),typeof ve=="function")for(O=ve.call(O),ve=0;!(se=O.next()).done;)se=se.value,me=ye+Q(se,ve++),fe+=D(se,W,Y,me,he);else if(me==="object"){if(typeof O.then=="function")return D(ne(O),W,Y,se,he);throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return fe}function G(O,W,Y){if(O==null)return O;var se=[],he=0;return D(O,se,"","",function(me){return W.call(Y,me,he++)}),se}function ae(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(Y){(O._status===0||O._status===-1)&&(O._status=1,O._result=Y)},function(Y){(O._status===0||O._status===-1)&&(O._status=2,O._result=Y)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var oe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},de={map:G,forEach:function(O,W,Y){G(O,function(){W.apply(this,arguments)},Y)},count:function(O){var W=0;return G(O,function(){W++}),W},toArray:function(O){return G(O,function(W){return W})||[]},only:function(O){if(!q(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return Ee.Activity=v,Ee.Children=de,Ee.Component=M,Ee.Fragment=i,Ee.Profiler=c,Ee.PureComponent=_,Ee.StrictMode=o,Ee.Suspense=m,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(O){return L.H.useMemoCache(O)}},Ee.cache=function(O){return function(){return O.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(O,W,Y){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var se=E({},O.props),he=O.key;if(W!=null)for(me in W.key!==void 0&&(he=""+W.key),W)!R.call(W,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&W.ref===void 0||(se[me]=W[me]);var me=arguments.length-2;if(me===1)se.children=Y;else if(1<me){for(var fe=Array(me),ye=0;ye<me;ye++)fe[ye]=arguments[ye+2];se.children=fe}return F(O.type,he,se)},Ee.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Ee.createElement=function(O,W,Y){var se,he={},me=null;if(W!=null)for(se in W.key!==void 0&&(me=""+W.key),W)R.call(W,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(he[se]=W[se]);var fe=arguments.length-2;if(fe===1)he.children=Y;else if(1<fe){for(var ye=Array(fe),ve=0;ve<fe;ve++)ye[ve]=arguments[ve+2];he.children=ye}if(O&&O.defaultProps)for(se in fe=O.defaultProps,fe)he[se]===void 0&&(he[se]=fe[se]);return F(O,me,he)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(O){return{$$typeof:p,render:O}},Ee.isValidElement=q,Ee.lazy=function(O){return{$$typeof:b,_payload:{_status:-1,_result:O},_init:ae}},Ee.memo=function(O,W){return{$$typeof:x,type:O,compare:W===void 0?null:W}},Ee.startTransition=function(O){var W=L.T,Y={};L.T=Y;try{var se=O(),he=L.S;he!==null&&he(Y,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(U,oe)}catch(me){oe(me)}finally{W!==null&&Y.types!==null&&(W.types=Y.types),L.T=W}},Ee.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Ee.use=function(O){return L.H.use(O)},Ee.useActionState=function(O,W,Y){return L.H.useActionState(O,W,Y)},Ee.useCallback=function(O,W){return L.H.useCallback(O,W)},Ee.useContext=function(O){return L.H.useContext(O)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(O,W){return L.H.useDeferredValue(O,W)},Ee.useEffect=function(O,W){return L.H.useEffect(O,W)},Ee.useEffectEvent=function(O){return L.H.useEffectEvent(O)},Ee.useId=function(){return L.H.useId()},Ee.useImperativeHandle=function(O,W,Y){return L.H.useImperativeHandle(O,W,Y)},Ee.useInsertionEffect=function(O,W){return L.H.useInsertionEffect(O,W)},Ee.useLayoutEffect=function(O,W){return L.H.useLayoutEffect(O,W)},Ee.useMemo=function(O,W){return L.H.useMemo(O,W)},Ee.useOptimistic=function(O,W){return L.H.useOptimistic(O,W)},Ee.useReducer=function(O,W,Y){return L.H.useReducer(O,W,Y)},Ee.useRef=function(O){return L.H.useRef(O)},Ee.useState=function(O){return L.H.useState(O)},Ee.useSyncExternalStore=function(O,W,Y){return L.H.useSyncExternalStore(O,W,Y)},Ee.useTransition=function(){return L.H.useTransition()},Ee.version="19.2.4",Ee}var Nm;function Di(){return Nm||(Nm=1,sh.exports=u3()),sh.exports}var f=Di();const st=_u(f);var ch={exports:{}},Il={},uh={exports:{}},dh={};var Hm;function d3(){return Hm||(Hm=1,(function(e){function a(D,G){var ae=D.length;D.push(G);e:for(;0<ae;){var oe=ae-1>>>1,de=D[oe];if(0<c(de,G))D[oe]=G,D[ae]=de,ae=oe;else break e}}function i(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var G=D[0],ae=D.pop();if(ae!==G){D[0]=ae;e:for(var oe=0,de=D.length,O=de>>>1;oe<O;){var W=2*(oe+1)-1,Y=D[W],se=W+1,he=D[se];if(0>c(Y,ae))se<de&&0>c(he,Y)?(D[oe]=he,D[se]=ae,oe=se):(D[oe]=Y,D[W]=ae,oe=W);else if(se<de&&0>c(he,ae))D[oe]=he,D[se]=ae,oe=se;else break e}}return G}function c(D,G){var ae=D.sortIndex-G.sortIndex;return ae!==0?ae:D.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();e.unstable_now=function(){return h.now()-p}}var m=[],x=[],b=1,v=null,k=3,C=!1,S=!1,E=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function B(D){for(var G=i(x);G!==null;){if(G.callback===null)o(x);else if(G.startTime<=D)o(x),G.sortIndex=G.expirationTime,a(m,G);else break;G=i(x)}}function N(D){if(E=!1,B(D),!S)if(i(m)!==null)S=!0,U||(U=!0,ee());else{var G=i(x);G!==null&&ne(N,G.startTime-D)}}var U=!1,L=-1,R=5,F=-1;function J(){return T?!0:!(e.unstable_now()-F<R)}function q(){if(T=!1,U){var D=e.unstable_now();F=D;var G=!0;try{e:{S=!1,E&&(E=!1,z(L),L=-1),C=!0;var ae=k;try{t:{for(B(D),v=i(m);v!==null&&!(v.expirationTime>D&&J());){var oe=v.callback;if(typeof oe=="function"){v.callback=null,k=v.priorityLevel;var de=oe(v.expirationTime<=D);if(D=e.unstable_now(),typeof de=="function"){v.callback=de,B(D),G=!0;break t}v===i(m)&&o(m),B(D)}else o(m);v=i(m)}if(v!==null)G=!0;else{var O=i(x);O!==null&&ne(N,O.startTime-D),G=!1}}break e}finally{v=null,k=ae,C=!1}G=void 0}}finally{G?ee():U=!1}}}var ee;if(typeof _=="function")ee=function(){_(q)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Q=re.port2;re.port1.onmessage=q,ee=function(){Q.postMessage(null)}}else ee=function(){M(q,0)};function ne(D,G){L=M(function(){D(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_next=function(D){switch(k){case 1:case 2:case 3:var G=3;break;default:G=k}var ae=k;k=G;try{return D()}finally{k=ae}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ae=k;k=D;try{return G()}finally{k=ae}},e.unstable_scheduleCallback=function(D,G,ae){var oe=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?oe+ae:oe):ae=oe,D){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ae+de,D={id:b++,callback:G,priorityLevel:D,startTime:ae,expirationTime:de,sortIndex:-1},ae>oe?(D.sortIndex=ae,a(x,D),i(m)===null&&D===i(x)&&(E?(z(L),L=-1):E=!0,ne(N,ae-oe))):(D.sortIndex=de,a(m,D),S||C||(S=!0,U||(U=!0,ee()))),D},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(D){var G=k;return function(){var ae=k;k=G;try{return D.apply(this,arguments)}finally{k=ae}}}})(dh)),dh}var Bm;function f3(){return Bm||(Bm=1,uh.exports=d3()),uh.exports}var fh={exports:{}},Vt={};var Um;function h3(){if(Um)return Vt;Um=1;var e=Di();function a(m){var x="https://react.dev/errors/"+m;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)x+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(m,x,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:m,containerInfo:x,implementation:b}}var h=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,x){if(m==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Vt.createPortal=function(m,x){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(a(299));return u(m,x,null,b)},Vt.flushSync=function(m){var x=h.T,b=o.p;try{if(h.T=null,o.p=2,m)return m()}finally{h.T=x,o.p=b,o.d.f()}},Vt.preconnect=function(m,x){typeof m=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(m,x))},Vt.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Vt.preinit=function(m,x){if(typeof m=="string"&&x&&typeof x.as=="string"){var b=x.as,v=p(b,x.crossOrigin),k=typeof x.integrity=="string"?x.integrity:void 0,C=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;b==="style"?o.d.S(m,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:v,integrity:k,fetchPriority:C}):b==="script"&&o.d.X(m,{crossOrigin:v,integrity:k,fetchPriority:C,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Vt.preinitModule=function(m,x){if(typeof m=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var b=p(x.as,x.crossOrigin);o.d.M(m,{crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(m)},Vt.preload=function(m,x){if(typeof m=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var b=x.as,v=p(b,x.crossOrigin);o.d.L(m,b,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Vt.preloadModule=function(m,x){if(typeof m=="string")if(x){var b=p(x.as,x.crossOrigin);o.d.m(m,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:b,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(m)},Vt.requestFormReset=function(m){o.d.r(m)},Vt.unstable_batchedUpdates=function(m,x){return m(x)},Vt.useFormState=function(m,x,b){return h.H.useFormState(m,x,b)},Vt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Vt.version="19.2.4",Vt}var Im;function b0(){if(Im)return fh.exports;Im=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),fh.exports=h3(),fh.exports}var Gm;function g3(){if(Gm)return Il;Gm=1;var e=f3(),a=Di(),i=b0();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(o(188))}function x(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var r=t,l=n;;){var d=r.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){r=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===r)return m(d),t;if(g===l)return m(d),n;g=g.sibling}throw Error(o(188))}if(r.return!==l.return)r=d,l=g;else{for(var w=!1,j=d.child;j;){if(j===r){w=!0,r=d,l=g;break}if(j===l){w=!0,l=d,r=g;break}j=j.sibling}if(!w){for(j=g.child;j;){if(j===r){w=!0,r=g,l=d;break}if(j===l){w=!0,l=g,r=d;break}j=j.sibling}if(!w)throw Error(o(189))}}if(r.alternate!==l)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,k=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),_=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function Q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case N:return"Suspense";case U:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case _:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:Q(t.type)||"Memo";case R:n=t._payload,t=t._init;try{return Q(t(n))}catch{}}return null}var ne=Array.isArray,D=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],de=-1;function O(t){return{current:t}}function W(t){0>de||(t.current=oe[de],oe[de]=null,de--)}function Y(t,n){de++,oe[de]=t.current,t.current=n}var se=O(null),he=O(null),me=O(null),fe=O(null);function ye(t,n){switch(Y(me,n),Y(he,t),Y(se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?am(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=am(n),t=rm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(se),Y(se,t)}function ve(){W(se),W(he),W(me)}function _e(t){t.memoizedState!==null&&Y(fe,t);var n=se.current,r=rm(n,t.type);n!==r&&(Y(he,t),Y(se,r))}function Ot(t){he.current===t&&(W(se),W(he)),fe.current===t&&(W(fe),_l._currentValue=ae)}var jt,It;function Mn(t){if(jt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",It=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+It}var Wr=!1;function Kt(t,n){if(!t||Wr)return"";Wr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(te){var K=te}Reflect.construct(t,[],ce)}else{try{ce.call()}catch(te){K=te}t.call(ce.prototype)}}else{try{throw Error()}catch(te){K=te}(ce=t())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(te){if(te&&K&&typeof te.stack=="string")return[te.stack,K.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),w=g[0],j=g[1];if(w&&j){var H=w.split(`
`),X=j.split(`
`);for(d=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;d<X.length&&!X[d].includes("DetermineComponentFrameRoot");)d++;if(l===H.length||d===X.length)for(l=H.length-1,d=X.length-1;1<=l&&0<=d&&H[l]!==X[d];)d--;for(;1<=l&&0<=d;l--,d--)if(H[l]!==X[d]){if(l!==1||d!==1)do if(l--,d--,0>d||H[l]!==X[d]){var ie=`
`+H[l].replace(" at new "," at ");return t.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",t.displayName)),ie}while(1<=l&&0<=d);break}}}finally{Wr=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Mn(r):""}function Ta(t,n){switch(t.tag){case 26:case 27:case 5:return Mn(t.type);case 16:return Mn("Lazy");case 13:return t.child!==n&&n!==null?Mn("Suspense Fallback"):Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 15:return Kt(t.type,!1);case 11:return Kt(t.type.render,!1);case 1:return Kt(t.type,!0);case 31:return Mn("Activity");default:return""}}function oa(t){try{var n="",r=null;do n+=Ta(t,r),r=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ln=Object.prototype.hasOwnProperty,On=e.unstable_scheduleCallback,Gt=e.unstable_cancelCallback,Ju=e.unstable_shouldYield,ed=e.unstable_requestPaint,Jt=e.unstable_now,td=e.unstable_getCurrentPriorityLevel,zs=e.unstable_ImmediatePriority,Vr=e.unstable_UserBlockingPriority,sr=e.unstable_NormalPriority,As=e.unstable_LowPriority,gn=e.unstable_IdlePriority,Rs=e.log,Ds=e.unstable_setDisableYieldValue,Yr=null,qt=null;function pn(t){if(typeof Rs=="function"&&Ds(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Yr,t)}catch{}}var Pt=Math.clz32?Math.clz32:Ma,_s=Math.log,nd=Math.LN2;function Ma(t){return t>>>=0,t===0?32:31-(_s(t)/nd|0)|0}var Zr=256,Hi=262144,Bi=4194304;function Pn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function la(t,n,r){var l=t.pendingLanes;if(l===0)return 0;var d=0,g=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var j=l&134217727;return j!==0?(l=j&~g,l!==0?d=Pn(l):(w&=j,w!==0?d=Pn(w):r||(r=j&~t,r!==0&&(d=Pn(r))))):(j=l&~g,j!==0?d=Pn(j):w!==0?d=Pn(w):r||(r=l&~t,r!==0&&(d=Pn(r)))),d===0?0:n!==0&&n!==d&&(n&g)===0&&(g=d&-d,r=n&-n,g>=r||g===32&&(r&4194048)!==0)?n:d}function La(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Yo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ui(){var t=Bi;return Bi<<=1,(Bi&62914560)===0&&(Bi=4194304),t}function Oa(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Xr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ad(t,n,r,l,d,g){var w=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var j=t.entanglements,H=t.expirationTimes,X=t.hiddenUpdates;for(r=w&~r;0<r;){var ie=31-Pt(r),ce=1<<ie;j[ie]=0,H[ie]=-1;var K=X[ie];if(K!==null)for(X[ie]=null,ie=0;ie<K.length;ie++){var te=K[ie];te!==null&&(te.lane&=-536870913)}r&=~ce}l!==0&&Ns(t,l,0),g!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=g&~(w&~n))}function Ns(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Pt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Hs(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var l=31-Pt(r),d=1<<l;d&n|t[l]&n&&(t[l]|=n),r&=~d}}function Bs(t,n){var r=n&-n;return r=(r&42)!==0?1:Ii(r),(r&(t.suspendedLanes|n))!==0?0:r}function Ii(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Qr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sa(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Tm(t.type))}function Us(t,n){var r=G.p;try{return G.p=t,n()}finally{G.p=r}}var ca=Math.random().toString(36).slice(2),bt="__reactFiber$"+ca,Ft="__reactProps$"+ca,cr="__reactContainer$"+ca,mn="__reactEvents$"+ca,rd="__reactListeners$"+ca,id="__reactHandles$"+ca,Is="__reactResources$"+ca,Kr="__reactMarker$"+ca;function Zo(t){delete t[bt],delete t[Ft],delete t[mn],delete t[rd],delete t[id]}function nn(t){var n=t[bt];if(n)return n;for(var r=t.parentNode;r;){if(n=r[cr]||r[bt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=dm(t);t!==null;){if(r=t[bt])return r;t=dm(t)}return n}t=r,r=t.parentNode}return null}function ur(t){if(t=t[bt]||t[cr]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Jr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function dr(t){var n=t[Is];return n||(n=t[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ht(t){t[Kr]=!0}var Gs=new Set,ei={};function $a(t,n){fr(t,n),fr(t+"Capture",n)}function fr(t,n){for(ei[t]=n,t=0;t<n.length;t++)Gs.add(n[t])}var ua=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qs={},Ps={};function od(t){return Ln.call(Ps,t)?!0:Ln.call(qs,t)?!1:ua.test(t)?Ps[t]=!0:(qs[t]=!0,!1)}function Gi(t,n,r){if(od(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function qi(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Fn(t,n,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+l)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fs(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ti(t,n,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(w){r=""+w,g.call(this,w)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(w){r=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pi(t){if(!t._valueTracker){var n=Fs(t)?"checked":"value";t._valueTracker=ti(t,n,""+t[n])}}function Xo(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return t&&(l=Fs(t)?t.checked?"true":"false":t.value),t=l,t!==r?(n.setValue(t),!0):!1}function Fi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ld=/[\n"\\]/g;function an(t){return t.replace(ld,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Qo(t,n,r,l,d,g,w,j){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),n!=null?w==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),n!=null?Jo(t,w,$t(n)):r!=null?Jo(t,w,$t(r)):l!=null&&t.removeAttribute("value"),d==null&&g!=null&&(t.defaultChecked=!!g),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?t.name=""+$t(j):t.removeAttribute("name")}function Ko(t,n,r,l,d,g,w,j){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),n!=null||r!=null){if(!(g!=="submit"&&g!=="reset"||n!=null)){Pi(t);return}r=r!=null?""+$t(r):"",n=n!=null?""+$t(n):r,j||n===t.value||(t.value=n),t.defaultValue=n}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=j?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w),Pi(t)}function Jo(t,n,r){n==="number"&&Fi(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function hr(t,n,r,l){if(t=t.options,n){n={};for(var d=0;d<r.length;d++)n["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=n.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&l&&(t[r].defaultSelected=!0)}else{for(r=""+$t(r),n=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function el(t,n,r){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+$t(r):""}function ni(t,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(o(92));if(ne(l)){if(1<l.length)throw Error(o(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=$t(n),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Pi(t)}function vn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var sd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ws(t,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,r):typeof r!="number"||r===0||sd.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Wn(t,n,r){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in n)l=n[d],n.hasOwnProperty(d)&&r[d]!==l&&Ws(t,d,l)}else for(var g in n)n.hasOwnProperty(g)&&Ws(t,g,n[g])}function tl(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wi(t){return ud.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vn(){}var Yn=null;function Vi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gr=null,Zn=null;function Vs(t){var n=ur(t);if(n&&(t=n.stateNode)){var r=t[Ft]||null;e:switch(t=n.stateNode,n.type){case"input":if(Qo(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+an(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==t&&l.form===t.form){var d=l[Ft]||null;if(!d)throw Error(o(90));Qo(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===t.form&&Xo(l)}break e;case"textarea":el(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&hr(t,!!r.multiple,n,!1)}}}var ai=!1;function Ys(t,n,r){if(ai)return t(n,r);ai=!0;try{var l=t(n);return l}finally{if(ai=!1,(gr!==null||Zn!==null)&&(zc(),gr&&(n=gr,t=Zn,Zn=gr=null,Vs(n),t)))for(n=0;n<t.length;n++)Vs(t[n])}}function pr(t,n){var r=t.stateNode;if(r===null)return null;var l=r[Ft]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(o(231,n,typeof r));return r}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=!1;if($n)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Yi=!1}var Qn=null,nl=null,Zi=null;function Zs(){if(Zi)return Zi;var t,n=nl,r=n.length,l,d="value"in Qn?Qn.value:Qn.textContent,g=d.length;for(t=0;t<r&&n[t]===d[t];t++);var w=r-t;for(l=1;l<=w&&n[r-l]===d[g-l];l++);return Zi=d.slice(t,1<l?1-l:void 0)}function $(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function P(){return!0}function ue(){return!1}function ge(t){function n(r,l,d,g,w){this._reactName=r,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var j in t)t.hasOwnProperty(j)&&(r=t[j],this[j]=r?r(g):g[j]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?P:ue,this.isPropagationStopped=ue,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=P)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=P)},persist:function(){},isPersistent:P}),n}var Ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ce=ge(Ne),We=v({},Ne,{view:0,detail:0}),gt=ge(We),ct,Xe,wt,Wt=v({},We,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wt&&(wt&&t.type==="mousemove"?(ct=t.screenX-wt.screenX,Xe=t.screenY-wt.screenY):Xe=ct=0,wt=t),ct)},movementY:function(t){return"movementY"in t?t.movementY:Xe}}),St=ge(Wt),rn=v({},Wt,{dataTransfer:0}),on=ge(rn),da=v({},We,{relatedTarget:0}),xn=ge(da),za=v({},Ne,{animationName:0,elapsedTime:0,pseudoElement:0}),Xs=ge(za),Xi=v({},Ne,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qi=ge(Xi),g5=v({},Ne,{data:0}),lg=ge(g5),p5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x5(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=v5[t])?!!n[t]:!1}function dd(){return x5}var y5=v({},We,{key:function(t){if(t.key){var n=p5[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?$(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b5=ge(y5),w5=v({},Wt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=ge(w5),S5=v({},We,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),C5=ge(S5),k5=v({},Ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),E5=ge(k5),j5=v({},Wt,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T5=ge(j5),M5=v({},Ne,{newState:0,oldState:0}),L5=ge(M5),O5=[9,13,27,32],fd=$n&&"CompositionEvent"in window,al=null;$n&&"documentMode"in document&&(al=document.documentMode);var $5=$n&&"TextEvent"in window&&!al,cg=$n&&(!fd||al&&8<al&&11>=al),ug=" ",dg=!1;function fg(t,n){switch(t){case"keyup":return O5.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ki=!1;function z5(t,n){switch(t){case"compositionend":return hg(n);case"keypress":return n.which!==32?null:(dg=!0,ug);case"textInput":return t=n.data,t===ug&&dg?null:t;default:return null}}function A5(t,n){if(Ki)return t==="compositionend"||!fd&&fg(t,n)?(t=Zs(),Zi=nl=Qn=null,Ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cg&&n.locale!=="ko"?null:n.data;default:return null}}var R5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!R5[t.type]:n==="textarea"}function pg(t,n,r,l){gr?Zn?Zn.push(l):Zn=[l]:gr=l,n=Bc(n,"onChange"),0<n.length&&(r=new Ce("onChange","change",null,r,l),t.push({event:r,listeners:n}))}var rl=null,il=null;function D5(t){Q1(t,0)}function Qs(t){var n=Jr(t);if(Xo(n))return t}function mg(t,n){if(t==="change")return n}var vg=!1;if($n){var hd;if($n){var gd="oninput"in document;if(!gd){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),gd=typeof xg.oninput=="function"}hd=gd}else hd=!1;vg=hd&&(!document.documentMode||9<document.documentMode)}function yg(){rl&&(rl.detachEvent("onpropertychange",bg),il=rl=null)}function bg(t){if(t.propertyName==="value"&&Qs(il)){var n=[];pg(n,il,t,Vi(t)),Ys(D5,n)}}function _5(t,n,r){t==="focusin"?(yg(),rl=n,il=r,rl.attachEvent("onpropertychange",bg)):t==="focusout"&&yg()}function N5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qs(il)}function H5(t,n){if(t==="click")return Qs(n)}function B5(t,n){if(t==="input"||t==="change")return Qs(n)}function U5(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var yn=typeof Object.is=="function"?Object.is:U5;function ol(t,n){if(yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var d=r[l];if(!Ln.call(n,d)||!yn(t[d],n[d]))return!1}return!0}function wg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sg(t,n){var r=wg(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=n&&l>=n)return{node:r,offset:n-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wg(r)}}function Cg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Fi(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Fi(t.document)}return n}function pd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var I5=$n&&"documentMode"in document&&11>=document.documentMode,Ji=null,md=null,ll=null,vd=!1;function Eg(t,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vd||Ji==null||Ji!==Fi(l)||(l=Ji,"selectionStart"in l&&pd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ll&&ol(ll,l)||(ll=l,l=Bc(md,"onSelect"),0<l.length&&(n=new Ce("onSelect","select",null,n,r),t.push({event:n,listeners:l}),n.target=Ji)))}function ri(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var eo={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},xd={},jg={};$n&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ii(t){if(xd[t])return xd[t];if(!eo[t])return t;var n=eo[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in jg)return xd[t]=n[r];return t}var Tg=ii("animationend"),Mg=ii("animationiteration"),Lg=ii("animationstart"),G5=ii("transitionrun"),q5=ii("transitionstart"),P5=ii("transitioncancel"),Og=ii("transitionend"),$g=new Map,yd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yd.push("scrollEnd");function Kn(t,n){$g.set(t,n),$a(n,[t])}var Ks=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},zn=[],to=0,bd=0;function Js(){for(var t=to,n=bd=to=0;n<t;){var r=zn[n];zn[n++]=null;var l=zn[n];zn[n++]=null;var d=zn[n];zn[n++]=null;var g=zn[n];if(zn[n++]=null,l!==null&&d!==null){var w=l.pending;w===null?d.next=d:(d.next=w.next,w.next=d),l.pending=d}g!==0&&zg(r,d,g)}}function ec(t,n,r,l){zn[to++]=t,zn[to++]=n,zn[to++]=r,zn[to++]=l,bd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function wd(t,n,r,l){return ec(t,n,r,l),tc(t)}function oi(t,n){return ec(t,null,null,n),tc(t)}function zg(t,n,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var d=!1,g=t.return;g!==null;)g.childLanes|=r,l=g.alternate,l!==null&&(l.childLanes|=r),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(d=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,d&&n!==null&&(d=31-Pt(r),t=g.hiddenUpdates,l=t[d],l===null?t[d]=[n]:l.push(n),n.lane=r|536870912),g):null}function tc(t){if(50<Ll)throw Ll=0,$f=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var no={};function F5(t,n,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,n,r,l){return new F5(t,n,r,l)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aa(t,n){var r=t.alternate;return r===null?(r=bn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Ag(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function nc(t,n,r,l,d,g){var w=0;if(l=t,typeof t=="function")Sd(t)&&(w=1);else if(typeof t=="string")w=Xb(t,r,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=bn(31,r,n,d),t.elementType=F,t.lanes=g,t;case E:return li(r.children,d,g,n);case T:w=8,d|=24;break;case M:return t=bn(12,r,n,d|2),t.elementType=M,t.lanes=g,t;case N:return t=bn(13,r,n,d),t.elementType=N,t.lanes=g,t;case U:return t=bn(19,r,n,d),t.elementType=U,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:w=10;break e;case z:w=9;break e;case B:w=11;break e;case L:w=14;break e;case R:w=16,l=null;break e}w=29,r=Error(o(130,t===null?"null":typeof t,"")),l=null}return n=bn(w,r,n,d),n.elementType=t,n.type=l,n.lanes=g,n}function li(t,n,r,l){return t=bn(7,t,l,n),t.lanes=r,t}function Cd(t,n,r){return t=bn(6,t,null,n),t.lanes=r,t}function Rg(t){var n=bn(18,null,null,0);return n.stateNode=t,n}function kd(t,n,r){return n=bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dg=new WeakMap;function An(t,n){if(typeof t=="object"&&t!==null){var r=Dg.get(t);return r!==void 0?r:(n={value:t,source:n,stack:oa(n)},Dg.set(t,n),n)}return{value:t,source:n,stack:oa(n)}}var ao=[],ro=0,ac=null,sl=0,Rn=[],Dn=0,mr=null,fa=1,ha="";function Ra(t,n){ao[ro++]=sl,ao[ro++]=ac,ac=t,sl=n}function _g(t,n,r){Rn[Dn++]=fa,Rn[Dn++]=ha,Rn[Dn++]=mr,mr=t;var l=fa;t=ha;var d=32-Pt(l)-1;l&=~(1<<d),r+=1;var g=32-Pt(n)+d;if(30<g){var w=d-d%5;g=(l&(1<<w)-1).toString(32),l>>=w,d-=w,fa=1<<32-Pt(n)+d|r<<d|l,ha=g+t}else fa=1<<g|r<<d|l,ha=t}function Ed(t){t.return!==null&&(Ra(t,1),_g(t,1,0))}function jd(t){for(;t===ac;)ac=ao[--ro],ao[ro]=null,sl=ao[--ro],ao[ro]=null;for(;t===mr;)mr=Rn[--Dn],Rn[Dn]=null,ha=Rn[--Dn],Rn[Dn]=null,fa=Rn[--Dn],Rn[Dn]=null}function Ng(t,n){Rn[Dn++]=fa,Rn[Dn++]=ha,Rn[Dn++]=mr,fa=n.id,ha=n.overflow,mr=t}var zt=null,Je=null,Re=!1,vr=null,_n=!1,Td=Error(o(519));function xr(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(An(n,t)),Td}function Hg(t){var n=t.stateNode,r=t.type,l=t.memoizedProps;switch(n[bt]=t,n[Ft]=l,r){case"dialog":$e("cancel",n),$e("close",n);break;case"iframe":case"object":case"embed":$e("load",n);break;case"video":case"audio":for(r=0;r<$l.length;r++)$e($l[r],n);break;case"source":$e("error",n);break;case"img":case"image":case"link":$e("error",n),$e("load",n);break;case"details":$e("toggle",n);break;case"input":$e("invalid",n),Ko(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$e("invalid",n);break;case"textarea":$e("invalid",n),ni(n,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||tm(n.textContent,r)?(l.popover!=null&&($e("beforetoggle",n),$e("toggle",n)),l.onScroll!=null&&$e("scroll",n),l.onScrollEnd!=null&&$e("scrollend",n),l.onClick!=null&&(n.onclick=Vn),n=!0):n=!1,n||xr(t,!0)}function Bg(t){for(zt=t.return;zt;)switch(zt.tag){case 5:case 31:case 13:_n=!1;return;case 27:case 3:_n=!0;return;default:zt=zt.return}}function io(t){if(t!==zt)return!1;if(!Re)return Bg(t),Re=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Wf(t.type,t.memoizedProps)),r=!r),r&&Je&&xr(t),Bg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Je=um(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Je=um(t)}else n===27?(n=Je,zr(t.type)?(t=Qf,Qf=null,Je=t):Je=n):Je=zt?Hn(t.stateNode.nextSibling):null;return!0}function si(){Je=zt=null,Re=!1}function Md(){var t=vr;return t!==null&&(un===null?un=t:un.push.apply(un,t),vr=null),t}function cl(t){vr===null?vr=[t]:vr.push(t)}var Ld=O(null),ci=null,Da=null;function yr(t,n,r){Y(Ld,n._currentValue),n._currentValue=r}function _a(t){t._currentValue=Ld.current,W(Ld)}function Od(t,n,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===r)break;t=t.return}}function $d(t,n,r,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var g=d.dependencies;if(g!==null){var w=d.child;g=g.firstContext;e:for(;g!==null;){var j=g;g=d;for(var H=0;H<n.length;H++)if(j.context===n[H]){g.lanes|=r,j=g.alternate,j!==null&&(j.lanes|=r),Od(g.return,r,t),l||(w=null);break e}g=j.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(o(341));w.lanes|=r,g=w.alternate,g!==null&&(g.lanes|=r),Od(w,r,t),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===t){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function oo(t,n,r,l){t=null;for(var d=n,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(o(387));if(w=w.memoizedProps,w!==null){var j=d.type;yn(d.pendingProps.value,w.value)||(t!==null?t.push(j):t=[j])}}else if(d===fe.current){if(w=d.alternate,w===null)throw Error(o(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}d=d.return}t!==null&&$d(n,t,r,l),n.flags|=262144}function rc(t){for(t=t.firstContext;t!==null;){if(!yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ui(t){ci=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return Ug(ci,t)}function ic(t,n){return ci===null&&ui(t),Ug(t,n)}function Ug(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Da===null){if(t===null)throw Error(o(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return r}var W5=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},V5=e.unstable_scheduleCallback,Y5=e.unstable_NormalPriority,pt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zd(){return{controller:new W5,data:new Map,refCount:0}}function ul(t){t.refCount--,t.refCount===0&&V5(Y5,function(){t.controller.abort()})}var dl=null,Ad=0,lo=0,so=null;function Z5(t,n){if(dl===null){var r=dl=[];Ad=0,lo=Nf(),so={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Ad++,n.then(Ig,Ig),n}function Ig(){if(--Ad===0&&dl!==null){so!==null&&(so.status="fulfilled");var t=dl;dl=null,lo=0,so=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function X5(t,n){var r=[],l={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var d=0;d<r.length;d++)(0,r[d])(n)},function(d){for(l.status="rejected",l.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),l}var Gg=D.S;D.S=function(t,n){E1=Jt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Z5(t,n),Gg!==null&&Gg(t,n)};var di=O(null);function Rd(){var t=di.current;return t!==null?t:Qe.pooledCache}function oc(t,n){n===null?Y(di,di.current):Y(di,n.pool)}function qg(){var t=Rd();return t===null?null:{parent:pt._currentValue,pool:t}}var co=Error(o(460)),Dd=Error(o(474)),lc=Error(o(542)),sc={then:function(){}};function Pg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fg(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Vn,Vn),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vg(t),t;default:if(typeof n.status=="string")n.then(Vn,Vn);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=l}},function(l){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vg(t),t}throw hi=n,co}}function fi(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(hi=r,co):r}}var hi=null;function Wg(){if(hi===null)throw Error(o(459));var t=hi;return hi=null,t}function Vg(t){if(t===co||t===lc)throw Error(o(483))}var uo=null,fl=0;function cc(t){var n=fl;return fl+=1,uo===null&&(uo=[]),Fg(uo,t,n)}function hl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function uc(t,n){throw n.$$typeof===k?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Yg(t){function n(V,I){if(t){var Z=V.deletions;Z===null?(V.deletions=[I],V.flags|=16):Z.push(I)}}function r(V,I){if(!t)return null;for(;I!==null;)n(V,I),I=I.sibling;return null}function l(V){for(var I=new Map;V!==null;)V.key!==null?I.set(V.key,V):I.set(V.index,V),V=V.sibling;return I}function d(V,I){return V=Aa(V,I),V.index=0,V.sibling=null,V}function g(V,I,Z){return V.index=Z,t?(Z=V.alternate,Z!==null?(Z=Z.index,Z<I?(V.flags|=67108866,I):Z):(V.flags|=67108866,I)):(V.flags|=1048576,I)}function w(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function j(V,I,Z,le){return I===null||I.tag!==6?(I=Cd(Z,V.mode,le),I.return=V,I):(I=d(I,Z),I.return=V,I)}function H(V,I,Z,le){var be=Z.type;return be===E?ie(V,I,Z.props.children,le,Z.key):I!==null&&(I.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&fi(be)===I.type)?(I=d(I,Z.props),hl(I,Z),I.return=V,I):(I=nc(Z.type,Z.key,Z.props,null,V.mode,le),hl(I,Z),I.return=V,I)}function X(V,I,Z,le){return I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation?(I=kd(Z,V.mode,le),I.return=V,I):(I=d(I,Z.children||[]),I.return=V,I)}function ie(V,I,Z,le,be){return I===null||I.tag!==7?(I=li(Z,V.mode,le,be),I.return=V,I):(I=d(I,Z),I.return=V,I)}function ce(V,I,Z){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Cd(""+I,V.mode,Z),I.return=V,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case C:return Z=nc(I.type,I.key,I.props,null,V.mode,Z),hl(Z,I),Z.return=V,Z;case S:return I=kd(I,V.mode,Z),I.return=V,I;case R:return I=fi(I),ce(V,I,Z)}if(ne(I)||ee(I))return I=li(I,V.mode,Z,null),I.return=V,I;if(typeof I.then=="function")return ce(V,cc(I),Z);if(I.$$typeof===_)return ce(V,ic(V,I),Z);uc(V,I)}return null}function K(V,I,Z,le){var be=I!==null?I.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return be!==null?null:j(V,I,""+Z,le);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case C:return Z.key===be?H(V,I,Z,le):null;case S:return Z.key===be?X(V,I,Z,le):null;case R:return Z=fi(Z),K(V,I,Z,le)}if(ne(Z)||ee(Z))return be!==null?null:ie(V,I,Z,le,null);if(typeof Z.then=="function")return K(V,I,cc(Z),le);if(Z.$$typeof===_)return K(V,I,ic(V,Z),le);uc(V,Z)}return null}function te(V,I,Z,le,be){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return V=V.get(Z)||null,j(I,V,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case C:return V=V.get(le.key===null?Z:le.key)||null,H(I,V,le,be);case S:return V=V.get(le.key===null?Z:le.key)||null,X(I,V,le,be);case R:return le=fi(le),te(V,I,Z,le,be)}if(ne(le)||ee(le))return V=V.get(Z)||null,ie(I,V,le,be,null);if(typeof le.then=="function")return te(V,I,Z,cc(le),be);if(le.$$typeof===_)return te(V,I,Z,ic(I,le),be);uc(I,le)}return null}function pe(V,I,Z,le){for(var be=null,Be=null,xe=I,Me=I=0,Ae=null;xe!==null&&Me<Z.length;Me++){xe.index>Me?(Ae=xe,xe=null):Ae=xe.sibling;var Ue=K(V,xe,Z[Me],le);if(Ue===null){xe===null&&(xe=Ae);break}t&&xe&&Ue.alternate===null&&n(V,xe),I=g(Ue,I,Me),Be===null?be=Ue:Be.sibling=Ue,Be=Ue,xe=Ae}if(Me===Z.length)return r(V,xe),Re&&Ra(V,Me),be;if(xe===null){for(;Me<Z.length;Me++)xe=ce(V,Z[Me],le),xe!==null&&(I=g(xe,I,Me),Be===null?be=xe:Be.sibling=xe,Be=xe);return Re&&Ra(V,Me),be}for(xe=l(xe);Me<Z.length;Me++)Ae=te(xe,V,Me,Z[Me],le),Ae!==null&&(t&&Ae.alternate!==null&&xe.delete(Ae.key===null?Me:Ae.key),I=g(Ae,I,Me),Be===null?be=Ae:Be.sibling=Ae,Be=Ae);return t&&xe.forEach(function(Nr){return n(V,Nr)}),Re&&Ra(V,Me),be}function Se(V,I,Z,le){if(Z==null)throw Error(o(151));for(var be=null,Be=null,xe=I,Me=I=0,Ae=null,Ue=Z.next();xe!==null&&!Ue.done;Me++,Ue=Z.next()){xe.index>Me?(Ae=xe,xe=null):Ae=xe.sibling;var Nr=K(V,xe,Ue.value,le);if(Nr===null){xe===null&&(xe=Ae);break}t&&xe&&Nr.alternate===null&&n(V,xe),I=g(Nr,I,Me),Be===null?be=Nr:Be.sibling=Nr,Be=Nr,xe=Ae}if(Ue.done)return r(V,xe),Re&&Ra(V,Me),be;if(xe===null){for(;!Ue.done;Me++,Ue=Z.next())Ue=ce(V,Ue.value,le),Ue!==null&&(I=g(Ue,I,Me),Be===null?be=Ue:Be.sibling=Ue,Be=Ue);return Re&&Ra(V,Me),be}for(xe=l(xe);!Ue.done;Me++,Ue=Z.next())Ue=te(xe,V,Me,Ue.value,le),Ue!==null&&(t&&Ue.alternate!==null&&xe.delete(Ue.key===null?Me:Ue.key),I=g(Ue,I,Me),Be===null?be=Ue:Be.sibling=Ue,Be=Ue);return t&&xe.forEach(function(l3){return n(V,l3)}),Re&&Ra(V,Me),be}function Ze(V,I,Z,le){if(typeof Z=="object"&&Z!==null&&Z.type===E&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case C:e:{for(var be=Z.key;I!==null;){if(I.key===be){if(be=Z.type,be===E){if(I.tag===7){r(V,I.sibling),le=d(I,Z.props.children),le.return=V,V=le;break e}}else if(I.elementType===be||typeof be=="object"&&be!==null&&be.$$typeof===R&&fi(be)===I.type){r(V,I.sibling),le=d(I,Z.props),hl(le,Z),le.return=V,V=le;break e}r(V,I);break}else n(V,I);I=I.sibling}Z.type===E?(le=li(Z.props.children,V.mode,le,Z.key),le.return=V,V=le):(le=nc(Z.type,Z.key,Z.props,null,V.mode,le),hl(le,Z),le.return=V,V=le)}return w(V);case S:e:{for(be=Z.key;I!==null;){if(I.key===be)if(I.tag===4&&I.stateNode.containerInfo===Z.containerInfo&&I.stateNode.implementation===Z.implementation){r(V,I.sibling),le=d(I,Z.children||[]),le.return=V,V=le;break e}else{r(V,I);break}else n(V,I);I=I.sibling}le=kd(Z,V.mode,le),le.return=V,V=le}return w(V);case R:return Z=fi(Z),Ze(V,I,Z,le)}if(ne(Z))return pe(V,I,Z,le);if(ee(Z)){if(be=ee(Z),typeof be!="function")throw Error(o(150));return Z=be.call(Z),Se(V,I,Z,le)}if(typeof Z.then=="function")return Ze(V,I,cc(Z),le);if(Z.$$typeof===_)return Ze(V,I,ic(V,Z),le);uc(V,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,I!==null&&I.tag===6?(r(V,I.sibling),le=d(I,Z),le.return=V,V=le):(r(V,I),le=Cd(Z,V.mode,le),le.return=V,V=le),w(V)):r(V,I)}return function(V,I,Z,le){try{fl=0;var be=Ze(V,I,Z,le);return uo=null,be}catch(xe){if(xe===co||xe===lc)throw xe;var Be=bn(29,xe,null,V.mode);return Be.lanes=le,Be.return=V,Be}}}var gi=Yg(!0),Zg=Yg(!1),br=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(t,n,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,n=tc(t),zg(t,null,r),n}return ec(t,l,n,r),tc(t)}function gl(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,Hs(t,r)}}function Hd(t,n){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var d=null,g=null;if(r=r.firstBaseUpdate,r!==null){do{var w={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};g===null?d=g=w:g=g.next=w,r=r.next}while(r!==null);g===null?d=g=n:g=g.next=n}else d=g=n;r={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Bd=!1;function pl(){if(Bd){var t=so;if(t!==null)throw t}}function ml(t,n,r,l){Bd=!1;var d=t.updateQueue;br=!1;var g=d.firstBaseUpdate,w=d.lastBaseUpdate,j=d.shared.pending;if(j!==null){d.shared.pending=null;var H=j,X=H.next;H.next=null,w===null?g=X:w.next=X,w=H;var ie=t.alternate;ie!==null&&(ie=ie.updateQueue,j=ie.lastBaseUpdate,j!==w&&(j===null?ie.firstBaseUpdate=X:j.next=X,ie.lastBaseUpdate=H))}if(g!==null){var ce=d.baseState;w=0,ie=X=H=null,j=g;do{var K=j.lane&-536870913,te=K!==j.lane;if(te?(ze&K)===K:(l&K)===K){K!==0&&K===lo&&(Bd=!0),ie!==null&&(ie=ie.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var pe=t,Se=j;K=n;var Ze=r;switch(Se.tag){case 1:if(pe=Se.payload,typeof pe=="function"){ce=pe.call(Ze,ce,K);break e}ce=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=Se.payload,K=typeof pe=="function"?pe.call(Ze,ce,K):pe,K==null)break e;ce=v({},ce,K);break e;case 2:br=!0}}K=j.callback,K!==null&&(t.flags|=64,te&&(t.flags|=8192),te=d.callbacks,te===null?d.callbacks=[K]:te.push(K))}else te={lane:K,tag:j.tag,payload:j.payload,callback:j.callback,next:null},ie===null?(X=ie=te,H=ce):ie=ie.next=te,w|=K;if(j=j.next,j===null){if(j=d.shared.pending,j===null)break;te=j,j=te.next,te.next=null,d.lastBaseUpdate=te,d.shared.pending=null}}while(!0);ie===null&&(H=ce),d.baseState=H,d.firstBaseUpdate=X,d.lastBaseUpdate=ie,g===null&&(d.shared.lanes=0),Tr|=w,t.lanes=w,t.memoizedState=ce}}function Xg(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function Qg(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Xg(r[t],n)}var fo=O(null),dc=O(0);function Kg(t,n){t=Fa,Y(dc,t),Y(fo,n),Fa=t|n.baseLanes}function Ud(){Y(dc,Fa),Y(fo,fo.current)}function Id(){Fa=dc.current,W(fo),W(dc)}var wn=O(null),Nn=null;function Cr(t){var n=t.alternate;Y(ut,ut.current&1),Y(wn,t),Nn===null&&(n===null||fo.current!==null||n.memoizedState!==null)&&(Nn=t)}function Gd(t){Y(ut,ut.current),Y(wn,t),Nn===null&&(Nn=t)}function Jg(t){t.tag===22?(Y(ut,ut.current),Y(wn,t),Nn===null&&(Nn=t)):kr()}function kr(){Y(ut,ut.current),Y(wn,wn.current)}function Sn(t){W(wn),Nn===t&&(Nn=null),W(ut)}var ut=O(0);function fc(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Zf(r)||Xf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Na=0,Te=null,Ve=null,mt=null,hc=!1,ho=!1,pi=!1,gc=0,vl=0,go=null,Q5=0;function ot(){throw Error(o(321))}function qd(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!yn(t[r],n[r]))return!1;return!0}function Pd(t,n,r,l,d,g){return Na=g,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?_p:of,pi=!1,g=r(l,d),pi=!1,ho&&(g=tp(n,r,l,d)),ep(t),g}function ep(t){D.H=bl;var n=Ve!==null&&Ve.next!==null;if(Na=0,mt=Ve=Te=null,hc=!1,vl=0,go=null,n)throw Error(o(300));t===null||vt||(t=t.dependencies,t!==null&&rc(t)&&(vt=!0))}function tp(t,n,r,l){Te=t;var d=0;do{if(ho&&(go=null),vl=0,ho=!1,25<=d)throw Error(o(301));if(d+=1,mt=Ve=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}D.H=Np,g=n(r,l)}while(ho);return g}function K5(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?xl(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(Te.flags|=1024),n}function Fd(){var t=gc!==0;return gc=0,t}function Wd(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Vd(t){if(hc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}hc=!1}Na=0,mt=Ve=Te=null,ho=!1,vl=gc=0,go=null}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Te.memoizedState=mt=t:mt=mt.next=t,mt}function dt(){if(Ve===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=mt===null?Te.memoizedState:mt.next;if(n!==null)mt=n,Ve=t;else{if(t===null)throw Te.alternate===null?Error(o(467)):Error(o(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},mt===null?Te.memoizedState=mt=t:mt=mt.next=t}return mt}function pc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(t){var n=vl;return vl+=1,go===null&&(go=[]),t=Fg(go,t,n),n=Te,(mt===null?n.memoizedState:mt.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?_p:of),t}function mc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xl(t);if(t.$$typeof===_)return At(t)}throw Error(o(438,String(t)))}function Yd(t){var n=null,r=Te.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=Te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=pc(),Te.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),l=0;l<t;l++)r[l]=J;return n.index++,r}function Ha(t,n){return typeof n=="function"?n(t):n}function vc(t){var n=dt();return Zd(n,Ve,t)}function Zd(t,n,r){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=r;var d=t.baseQueue,g=l.pending;if(g!==null){if(d!==null){var w=d.next;d.next=g.next,g.next=w}n.baseQueue=d=g,l.pending=null}if(g=t.baseState,d===null)t.memoizedState=g;else{n=d.next;var j=w=null,H=null,X=n,ie=!1;do{var ce=X.lane&-536870913;if(ce!==X.lane?(ze&ce)===ce:(Na&ce)===ce){var K=X.revertLane;if(K===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),ce===lo&&(ie=!0);else if((Na&K)===K){X=X.next,K===lo&&(ie=!0);continue}else ce={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},H===null?(j=H=ce,w=g):H=H.next=ce,Te.lanes|=K,Tr|=K;ce=X.action,pi&&r(g,ce),g=X.hasEagerState?X.eagerState:r(g,ce)}else K={lane:ce,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},H===null?(j=H=K,w=g):H=H.next=K,Te.lanes|=ce,Tr|=ce;X=X.next}while(X!==null&&X!==n);if(H===null?w=g:H.next=j,!yn(g,t.memoizedState)&&(vt=!0,ie&&(r=so,r!==null)))throw r;t.memoizedState=g,t.baseState=w,t.baseQueue=H,l.lastRenderedState=g}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Xd(t){var n=dt(),r=n.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var l=r.dispatch,d=r.pending,g=n.memoizedState;if(d!==null){r.pending=null;var w=d=d.next;do g=t(g,w.action),w=w.next;while(w!==d);yn(g,n.memoizedState)||(vt=!0),n.memoizedState=g,n.baseQueue===null&&(n.baseState=g),r.lastRenderedState=g}return[g,l]}function np(t,n,r){var l=Te,d=dt(),g=Re;if(g){if(r===void 0)throw Error(o(407));r=r()}else r=n();var w=!yn((Ve||d).memoizedState,r);if(w&&(d.memoizedState=r,vt=!0),d=d.queue,Jd(ip.bind(null,l,d,t),[t]),d.getSnapshot!==n||w||mt!==null&&mt.memoizedState.tag&1){if(l.flags|=2048,po(9,{destroy:void 0},rp.bind(null,l,d,r,n),null),Qe===null)throw Error(o(349));g||(Na&127)!==0||ap(l,n,r)}return r}function ap(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=Te.updateQueue,n===null?(n=pc(),Te.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function rp(t,n,r,l){n.value=r,n.getSnapshot=l,op(n)&&lp(t)}function ip(t,n,r){return r(function(){op(n)&&lp(t)})}function op(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!yn(t,r)}catch{return!0}}function lp(t){var n=oi(t,2);n!==null&&dn(n,t,2)}function Qd(t){var n=en();if(typeof t=="function"){var r=t;if(t=r(),pi){pn(!0);try{r()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},n}function sp(t,n,r,l){return t.baseState=r,Zd(t,Ve,typeof l=="function"?l:Ha)}function J5(t,n,r,l,d){if(bc(t))throw Error(o(485));if(t=n.action,t!==null){var g={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};D.T!==null?r(!0):g.isTransition=!1,l(g),r=n.pending,r===null?(g.next=n.pending=g,cp(n,g)):(g.next=r.next,n.pending=r.next=g)}}function cp(t,n){var r=n.action,l=n.payload,d=t.state;if(n.isTransition){var g=D.T,w={};D.T=w;try{var j=r(d,l),H=D.S;H!==null&&H(w,j),up(t,n,j)}catch(X){Kd(t,n,X)}finally{g!==null&&w.types!==null&&(g.types=w.types),D.T=g}}else try{g=r(d,l),up(t,n,g)}catch(X){Kd(t,n,X)}}function up(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){dp(t,n,l)},function(l){return Kd(t,n,l)}):dp(t,n,r)}function dp(t,n,r){n.status="fulfilled",n.value=r,fp(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,cp(t,r)))}function Kd(t,n,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,fp(n),n=n.next;while(n!==l)}t.action=null}function fp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hp(t,n){return n}function gp(t,n){if(Re){var r=Qe.formState;if(r!==null){e:{var l=Te;if(Re){if(Je){t:{for(var d=Je,g=_n;d.nodeType!==8;){if(!g){d=null;break t}if(d=Hn(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){Je=Hn(d.nextSibling),l=d.data==="F!";break e}}xr(l)}l=!1}l&&(n=r[0])}}return r=en(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hp,lastRenderedState:n},r.queue=l,r=Ap.bind(null,Te,l),l.dispatch=r,l=Qd(!1),g=rf.bind(null,Te,!1,l.queue),l=en(),d={state:n,dispatch:null,action:t,pending:null},l.queue=d,r=J5.bind(null,Te,d,g,r),d.dispatch=r,l.memoizedState=t,[n,r,!1]}function pp(t){var n=dt();return mp(n,Ve,t)}function mp(t,n,r){if(n=Zd(t,n,hp)[0],t=vc(Ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=xl(n)}catch(w){throw w===co?lc:w}else l=n;n=dt();var d=n.queue,g=d.dispatch;return r!==n.memoizedState&&(Te.flags|=2048,po(9,{destroy:void 0},eb.bind(null,d,r),null)),[l,g,t]}function eb(t,n){t.action=n}function vp(t){var n=dt(),r=Ve;if(r!==null)return mp(n,r,t);dt(),n=n.memoizedState,r=dt();var l=r.queue.dispatch;return r.memoizedState=t,[n,l,!1]}function po(t,n,r,l){return t={tag:t,create:r,deps:l,inst:n,next:null},n=Te.updateQueue,n===null&&(n=pc(),Te.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,n.lastEffect=t),t}function xp(){return dt().memoizedState}function xc(t,n,r,l){var d=en();Te.flags|=t,d.memoizedState=po(1|n,{destroy:void 0},r,l===void 0?null:l)}function yc(t,n,r,l){var d=dt();l=l===void 0?null:l;var g=d.memoizedState.inst;Ve!==null&&l!==null&&qd(l,Ve.memoizedState.deps)?d.memoizedState=po(n,g,r,l):(Te.flags|=t,d.memoizedState=po(1|n,g,r,l))}function yp(t,n){xc(8390656,8,t,n)}function Jd(t,n){yc(2048,8,t,n)}function tb(t){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=pc(),Te.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function bp(t){var n=dt().memoizedState;return tb({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function wp(t,n){return yc(4,2,t,n)}function Sp(t,n){return yc(4,4,t,n)}function Cp(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kp(t,n,r){r=r!=null?r.concat([t]):null,yc(4,4,Cp.bind(null,n,t),r)}function ef(){}function Ep(t,n){var r=dt();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&qd(n,l[1])?l[0]:(r.memoizedState=[t,n],t)}function jp(t,n){var r=dt();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&qd(n,l[1]))return l[0];if(l=t(),pi){pn(!0);try{t()}finally{pn(!1)}}return r.memoizedState=[l,n],l}function tf(t,n,r){return r===void 0||(Na&1073741824)!==0&&(ze&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=T1(),Te.lanes|=t,Tr|=t,r)}function Tp(t,n,r,l){return yn(r,n)?r:fo.current!==null?(t=tf(t,r,l),yn(t,n)||(vt=!0),t):(Na&42)===0||(Na&1073741824)!==0&&(ze&261930)===0?(vt=!0,t.memoizedState=r):(t=T1(),Te.lanes|=t,Tr|=t,n)}function Mp(t,n,r,l,d){var g=G.p;G.p=g!==0&&8>g?g:8;var w=D.T,j={};D.T=j,rf(t,!1,n,r);try{var H=d(),X=D.S;if(X!==null&&X(j,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=X5(H,l);yl(t,n,ie,En(t))}else yl(t,n,l,En(t))}catch(ce){yl(t,n,{then:function(){},status:"rejected",reason:ce},En())}finally{G.p=g,w!==null&&j.types!==null&&(w.types=j.types),D.T=w}}function nb(){}function nf(t,n,r,l){if(t.tag!==5)throw Error(o(476));var d=Lp(t).queue;Mp(t,d,n,ae,r===null?nb:function(){return Op(t),r(l)})}function Lp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:ae},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Op(t){var n=Lp(t);n.next===null&&(n=t.alternate.memoizedState),yl(t,n.next.queue,{},En())}function af(){return At(_l)}function $p(){return dt().memoizedState}function zp(){return dt().memoizedState}function ab(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=En();t=wr(r);var l=Sr(n,t,r);l!==null&&(dn(l,n,r),gl(l,n,r)),n={cache:zd()},t.payload=n;return}n=n.return}}function rb(t,n,r){var l=En();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bc(t)?Rp(n,r):(r=wd(t,n,r,l),r!==null&&(dn(r,t,l),Dp(r,n,l)))}function Ap(t,n,r){var l=En();yl(t,n,r,l)}function yl(t,n,r,l){var d={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(bc(t))Rp(n,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=n.lastRenderedReducer,g!==null))try{var w=n.lastRenderedState,j=g(w,r);if(d.hasEagerState=!0,d.eagerState=j,yn(j,w))return ec(t,n,d,0),Qe===null&&Js(),!1}catch{}if(r=wd(t,n,d,l),r!==null)return dn(r,t,l),Dp(r,n,l),!0}return!1}function rf(t,n,r,l){if(l={lane:2,revertLane:Nf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bc(t)){if(n)throw Error(o(479))}else n=wd(t,r,l,2),n!==null&&dn(n,t,2)}function bc(t){var n=t.alternate;return t===Te||n!==null&&n===Te}function Rp(t,n){ho=hc=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Dp(t,n,r){if((r&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,Hs(t,r)}}var bl={readContext:At,use:mc,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};bl.useEffectEvent=ot;var _p={readContext:At,use:mc,useCallback:function(t,n){return en().memoizedState=[t,n===void 0?null:n],t},useContext:At,useEffect:yp,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,xc(4194308,4,Cp.bind(null,n,t),r)},useLayoutEffect:function(t,n){return xc(4194308,4,t,n)},useInsertionEffect:function(t,n){xc(4,2,t,n)},useMemo:function(t,n){var r=en();n=n===void 0?null:n;var l=t();if(pi){pn(!0);try{t()}finally{pn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(t,n,r){var l=en();if(r!==void 0){var d=r(n);if(pi){pn(!0);try{r(n)}finally{pn(!1)}}}else d=n;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=rb.bind(null,Te,t),[l.memoizedState,t]},useRef:function(t){var n=en();return t={current:t},n.memoizedState=t},useState:function(t){t=Qd(t);var n=t.queue,r=Ap.bind(null,Te,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:ef,useDeferredValue:function(t,n){var r=en();return tf(r,t,n)},useTransition:function(){var t=Qd(!1);return t=Mp.bind(null,Te,t.queue,!0,!1),en().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var l=Te,d=en();if(Re){if(r===void 0)throw Error(o(407));r=r()}else{if(r=n(),Qe===null)throw Error(o(349));(ze&127)!==0||ap(l,n,r)}d.memoizedState=r;var g={value:r,getSnapshot:n};return d.queue=g,yp(ip.bind(null,l,g,t),[t]),l.flags|=2048,po(9,{destroy:void 0},rp.bind(null,l,g,r,n),null),r},useId:function(){var t=en(),n=Qe.identifierPrefix;if(Re){var r=ha,l=fa;r=(l&~(1<<32-Pt(l)-1)).toString(32)+r,n="_"+n+"R_"+r,r=gc++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Q5++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:gp,useActionState:gp,useOptimistic:function(t){var n=en();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=rf.bind(null,Te,!0,r),r.dispatch=n,[t,n]},useMemoCache:Yd,useCacheRefresh:function(){return en().memoizedState=ab.bind(null,Te)},useEffectEvent:function(t){var n=en(),r={impl:t};return n.memoizedState=r,function(){if((Ie&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},of={readContext:At,use:mc,useCallback:Ep,useContext:At,useEffect:Jd,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:jp,useReducer:vc,useRef:xp,useState:function(){return vc(Ha)},useDebugValue:ef,useDeferredValue:function(t,n){var r=dt();return Tp(r,Ve.memoizedState,t,n)},useTransition:function(){var t=vc(Ha)[0],n=dt().memoizedState;return[typeof t=="boolean"?t:xl(t),n]},useSyncExternalStore:np,useId:$p,useHostTransitionStatus:af,useFormState:pp,useActionState:pp,useOptimistic:function(t,n){var r=dt();return sp(r,Ve,t,n)},useMemoCache:Yd,useCacheRefresh:zp};of.useEffectEvent=bp;var Np={readContext:At,use:mc,useCallback:Ep,useContext:At,useEffect:Jd,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:jp,useReducer:Xd,useRef:xp,useState:function(){return Xd(Ha)},useDebugValue:ef,useDeferredValue:function(t,n){var r=dt();return Ve===null?tf(r,t,n):Tp(r,Ve.memoizedState,t,n)},useTransition:function(){var t=Xd(Ha)[0],n=dt().memoizedState;return[typeof t=="boolean"?t:xl(t),n]},useSyncExternalStore:np,useId:$p,useHostTransitionStatus:af,useFormState:vp,useActionState:vp,useOptimistic:function(t,n){var r=dt();return Ve!==null?sp(r,Ve,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Yd,useCacheRefresh:zp};Np.useEffectEvent=bp;function lf(t,n,r,l){n=t.memoizedState,r=r(l,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var sf={enqueueSetState:function(t,n,r){t=t._reactInternals;var l=En(),d=wr(l);d.payload=n,r!=null&&(d.callback=r),n=Sr(t,d,l),n!==null&&(dn(n,t,l),gl(n,t,l))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var l=En(),d=wr(l);d.tag=1,d.payload=n,r!=null&&(d.callback=r),n=Sr(t,d,l),n!==null&&(dn(n,t,l),gl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=En(),l=wr(r);l.tag=2,n!=null&&(l.callback=n),n=Sr(t,l,r),n!==null&&(dn(n,t,r),gl(n,t,r))}};function Hp(t,n,r,l,d,g,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,w):n.prototype&&n.prototype.isPureReactComponent?!ol(r,l)||!ol(d,g):!0}function Bp(t,n,r,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function mi(t,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Up(t){Ks(t)}function Ip(t){console.error(t)}function Gp(t){Ks(t)}function wc(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function qp(t,n,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function cf(t,n,r){return r=wr(r),r.tag=3,r.payload={element:null},r.callback=function(){wc(t,n)},r}function Pp(t){return t=wr(t),t.tag=3,t}function Fp(t,n,r,l){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var g=l.value;t.payload=function(){return d(g)},t.callback=function(){qp(n,r,l)}}var w=r.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){qp(n,r,l),typeof d!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var j=l.stack;this.componentDidCatch(l.value,{componentStack:j!==null?j:""})})}function ib(t,n,r,l,d){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&oo(n,r,d,!0),r=wn.current,r!==null){switch(r.tag){case 31:case 13:return Nn===null?Ac():r.alternate===null&&lt===0&&(lt=3),r.flags&=-257,r.flags|=65536,r.lanes=d,l===sc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Rf(t,l,d)),!1;case 22:return r.flags|=65536,l===sc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Rf(t,l,d)),!1}throw Error(o(435,r.tag))}return Rf(t,l,d),Ac(),!1}if(Re)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,l!==Td&&(t=Error(o(422),{cause:l}),cl(An(t,r)))):(l!==Td&&(n=Error(o(423),{cause:l}),cl(An(n,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=An(l,r),d=cf(t.stateNode,l,d),Hd(t,d),lt!==4&&(lt=2)),!1;var g=Error(o(520),{cause:l});if(g=An(g,r),Ml===null?Ml=[g]:Ml.push(g),lt!==4&&(lt=2),n===null)return!0;l=An(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=cf(r.stateNode,l,t),Hd(r,t),!1;case 1:if(n=r.type,g=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mr===null||!Mr.has(g))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Pp(d),Fp(d,t,r,l),Hd(r,d),!1}r=r.return}while(r!==null);return!1}var uf=Error(o(461)),vt=!1;function Rt(t,n,r,l){n.child=t===null?Zg(n,null,r,l):gi(n,t.child,r,l)}function Wp(t,n,r,l,d){r=r.render;var g=n.ref;if("ref"in l){var w={};for(var j in l)j!=="ref"&&(w[j]=l[j])}else w=l;return ui(n),l=Pd(t,n,r,w,g,d),j=Fd(),t!==null&&!vt?(Wd(t,n,d),Ba(t,n,d)):(Re&&j&&Ed(n),n.flags|=1,Rt(t,n,l,d),n.child)}function Vp(t,n,r,l,d){if(t===null){var g=r.type;return typeof g=="function"&&!Sd(g)&&g.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=g,Yp(t,n,g,l,d)):(t=nc(r.type,null,l,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(g=t.child,!xf(t,d)){var w=g.memoizedProps;if(r=r.compare,r=r!==null?r:ol,r(w,l)&&t.ref===n.ref)return Ba(t,n,d)}return n.flags|=1,t=Aa(g,l),t.ref=n.ref,t.return=n,n.child=t}function Yp(t,n,r,l,d){if(t!==null){var g=t.memoizedProps;if(ol(g,l)&&t.ref===n.ref)if(vt=!1,n.pendingProps=l=g,xf(t,d))(t.flags&131072)!==0&&(vt=!0);else return n.lanes=t.lanes,Ba(t,n,d)}return df(t,n,r,l,d)}function Zp(t,n,r,l){var d=l.children,g=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(g=g!==null?g.baseLanes|r:r,t!==null){for(l=n.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~g}else l=0,n.child=null;return Xp(t,n,g,r,l)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&oc(n,g!==null?g.cachePool:null),g!==null?Kg(n,g):Ud(),Jg(n);else return l=n.lanes=536870912,Xp(t,n,g!==null?g.baseLanes|r:r,r,l)}else g!==null?(oc(n,g.cachePool),Kg(n,g),kr(),n.memoizedState=null):(t!==null&&oc(n,null),Ud(),kr());return Rt(t,n,d,r),n.child}function wl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xp(t,n,r,l,d){var g=Rd();return g=g===null?null:{parent:pt._currentValue,pool:g},n.memoizedState={baseLanes:r,cachePool:g},t!==null&&oc(n,null),Ud(),Jg(n),t!==null&&oo(t,n,l,!0),n.childLanes=d,null}function Sc(t,n){return n=kc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Qp(t,n,r){return gi(n,t.child,null,r),t=Sc(n,n.pendingProps),t.flags|=2,Sn(n),n.memoizedState=null,t}function ob(t,n,r){var l=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(l.mode==="hidden")return t=Sc(n,l),n.lanes=536870912,wl(null,t);if(Gd(n),(t=Je)?(t=cm(t,_n),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:mr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=Rg(t),r.return=n,n.child=r,zt=n,Je=null)):t=null,t===null)throw xr(n);return n.lanes=536870912,null}return Sc(n,l)}var g=t.memoizedState;if(g!==null){var w=g.dehydrated;if(Gd(n),d)if(n.flags&256)n.flags&=-257,n=Qp(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(vt||oo(t,n,r,!1),d=(r&t.childLanes)!==0,vt||d){if(l=Qe,l!==null&&(w=Bs(l,r),w!==0&&w!==g.retryLane))throw g.retryLane=w,oi(t,w),dn(l,t,w),uf;Ac(),n=Qp(t,n,r)}else t=g.treeContext,Je=Hn(w.nextSibling),zt=n,Re=!0,vr=null,_n=!1,t!==null&&Ng(n,t),n=Sc(n,l),n.flags|=4096;return n}return t=Aa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cc(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function df(t,n,r,l,d){return ui(n),r=Pd(t,n,r,l,void 0,d),l=Fd(),t!==null&&!vt?(Wd(t,n,d),Ba(t,n,d)):(Re&&l&&Ed(n),n.flags|=1,Rt(t,n,r,d),n.child)}function Kp(t,n,r,l,d,g){return ui(n),n.updateQueue=null,r=tp(n,l,r,d),ep(t),l=Fd(),t!==null&&!vt?(Wd(t,n,g),Ba(t,n,g)):(Re&&l&&Ed(n),n.flags|=1,Rt(t,n,r,g),n.child)}function Jp(t,n,r,l,d){if(ui(n),n.stateNode===null){var g=no,w=r.contextType;typeof w=="object"&&w!==null&&(g=At(w)),g=new r(l,g),n.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=sf,n.stateNode=g,g._reactInternals=n,g=n.stateNode,g.props=l,g.state=n.memoizedState,g.refs={},_d(n),w=r.contextType,g.context=typeof w=="object"&&w!==null?At(w):no,g.state=n.memoizedState,w=r.getDerivedStateFromProps,typeof w=="function"&&(lf(n,r,w,l),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&sf.enqueueReplaceState(g,g.state,null),ml(n,l,g,d),pl(),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){g=n.stateNode;var j=n.memoizedProps,H=mi(r,j);g.props=H;var X=g.context,ie=r.contextType;w=no,typeof ie=="object"&&ie!==null&&(w=At(ie));var ce=r.getDerivedStateFromProps;ie=typeof ce=="function"||typeof g.getSnapshotBeforeUpdate=="function",j=n.pendingProps!==j,ie||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(j||X!==w)&&Bp(n,g,l,w),br=!1;var K=n.memoizedState;g.state=K,ml(n,l,g,d),pl(),X=n.memoizedState,j||K!==X||br?(typeof ce=="function"&&(lf(n,r,ce,l),X=n.memoizedState),(H=br||Hp(n,r,H,l,K,X,w))?(ie||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=X),g.props=l,g.state=X,g.context=w,l=H):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{g=n.stateNode,Nd(t,n),w=n.memoizedProps,ie=mi(r,w),g.props=ie,ce=n.pendingProps,K=g.context,X=r.contextType,H=no,typeof X=="object"&&X!==null&&(H=At(X)),j=r.getDerivedStateFromProps,(X=typeof j=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==ce||K!==H)&&Bp(n,g,l,H),br=!1,K=n.memoizedState,g.state=K,ml(n,l,g,d),pl();var te=n.memoizedState;w!==ce||K!==te||br||t!==null&&t.dependencies!==null&&rc(t.dependencies)?(typeof j=="function"&&(lf(n,r,j,l),te=n.memoizedState),(ie=br||Hp(n,r,ie,l,K,te,H)||t!==null&&t.dependencies!==null&&rc(t.dependencies))?(X||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,te,H),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,te,H)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=te),g.props=l,g.state=te,g.context=H,l=ie):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),l=!1)}return g=l,Cc(t,n),l=(n.flags&128)!==0,g||l?(g=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:g.render(),n.flags|=1,t!==null&&l?(n.child=gi(n,t.child,null,d),n.child=gi(n,null,r,d)):Rt(t,n,r,d),n.memoizedState=g.state,t=n.child):t=Ba(t,n,d),t}function e1(t,n,r,l){return si(),n.flags|=256,Rt(t,n,r,l),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:qg()}}function gf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=kn),t}function t1(t,n,r){var l=n.pendingProps,d=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),w&&(d=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(d?Cr(n):kr(),(t=Je)?(t=cm(t,_n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:mr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=Rg(t),r.return=n,n.child=r,zt=n,Je=null)):t=null,t===null)throw xr(n);return Xf(t)?n.lanes=32:n.lanes=536870912,null}var j=l.children;return l=l.fallback,d?(kr(),d=n.mode,j=kc({mode:"hidden",children:j},d),l=li(l,d,r,null),j.return=n,l.return=n,j.sibling=l,n.child=j,l=n.child,l.memoizedState=hf(r),l.childLanes=gf(t,w,r),n.memoizedState=ff,wl(null,l)):(Cr(n),pf(n,j))}var H=t.memoizedState;if(H!==null&&(j=H.dehydrated,j!==null)){if(g)n.flags&256?(Cr(n),n.flags&=-257,n=mf(t,n,r)):n.memoizedState!==null?(kr(),n.child=t.child,n.flags|=128,n=null):(kr(),j=l.fallback,d=n.mode,l=kc({mode:"visible",children:l.children},d),j=li(j,d,r,null),j.flags|=2,l.return=n,j.return=n,l.sibling=j,n.child=l,gi(n,t.child,null,r),l=n.child,l.memoizedState=hf(r),l.childLanes=gf(t,w,r),n.memoizedState=ff,n=wl(null,l));else if(Cr(n),Xf(j)){if(w=j.nextSibling&&j.nextSibling.dataset,w)var X=w.dgst;w=X,l=Error(o(419)),l.stack="",l.digest=w,cl({value:l,source:null,stack:null}),n=mf(t,n,r)}else if(vt||oo(t,n,r,!1),w=(r&t.childLanes)!==0,vt||w){if(w=Qe,w!==null&&(l=Bs(w,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,oi(t,l),dn(w,t,l),uf;Zf(j)||Ac(),n=mf(t,n,r)}else Zf(j)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Je=Hn(j.nextSibling),zt=n,Re=!0,vr=null,_n=!1,t!==null&&Ng(n,t),n=pf(n,l.children),n.flags|=4096);return n}return d?(kr(),j=l.fallback,d=n.mode,H=t.child,X=H.sibling,l=Aa(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,X!==null?j=Aa(X,j):(j=li(j,d,r,null),j.flags|=2),j.return=n,l.return=n,l.sibling=j,n.child=l,wl(null,l),l=n.child,j=t.child.memoizedState,j===null?j=hf(r):(d=j.cachePool,d!==null?(H=pt._currentValue,d=d.parent!==H?{parent:H,pool:H}:d):d=qg(),j={baseLanes:j.baseLanes|r,cachePool:d}),l.memoizedState=j,l.childLanes=gf(t,w,r),n.memoizedState=ff,wl(t.child,l)):(Cr(n),r=t.child,t=r.sibling,r=Aa(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,t!==null&&(w=n.deletions,w===null?(n.deletions=[t],n.flags|=16):w.push(t)),n.child=r,n.memoizedState=null,r)}function pf(t,n){return n=kc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function kc(t,n){return t=bn(22,t,null,n),t.lanes=0,t}function mf(t,n,r){return gi(n,t.child,null,r),t=pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function n1(t,n,r){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Od(t.return,n,r)}function vf(t,n,r,l,d,g){var w=t.memoizedState;w===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:d,treeForkCount:g}:(w.isBackwards=n,w.rendering=null,w.renderingStartTime=0,w.last=l,w.tail=r,w.tailMode=d,w.treeForkCount=g)}function a1(t,n,r){var l=n.pendingProps,d=l.revealOrder,g=l.tail;l=l.children;var w=ut.current,j=(w&2)!==0;if(j?(w=w&1|2,n.flags|=128):w&=1,Y(ut,w),Rt(t,n,l,r),l=Re?sl:0,!j&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n1(t,r,n);else if(t.tag===19)n1(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=n.child,d=null;r!==null;)t=r.alternate,t!==null&&fc(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=n.child,n.child=null):(d=r.sibling,r.sibling=null),vf(n,!1,d,r,g,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&fc(t)===null){n.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}vf(n,!0,r,null,g,l);break;case"together":vf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ba(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Tr|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(oo(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,r=Aa(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Aa(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rc(t)))}function lb(t,n,r){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),yr(n,pt,t.memoizedState.cache),si();break;case 27:case 5:_e(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:yr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gd(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Cr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?t1(t,n,r):(Cr(n),t=Ba(t,n,r),t!==null?t.sibling:null);Cr(n);break;case 19:var d=(t.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(oo(t,n,r,!1),l=(r&n.childLanes)!==0),d){if(l)return a1(t,n,r);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Y(ut,ut.current),l)break;return null;case 22:return n.lanes=0,Zp(t,n,r,n.pendingProps);case 24:yr(n,pt,t.memoizedState.cache)}return Ba(t,n,r)}function r1(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)vt=!0;else{if(!xf(t,r)&&(n.flags&128)===0)return vt=!1,lb(t,n,r);vt=(t.flags&131072)!==0}else vt=!1,Re&&(n.flags&1048576)!==0&&_g(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=fi(n.elementType),n.type=t,typeof t=="function")Sd(t)?(l=mi(t,l),n.tag=1,n=Jp(null,n,t,l,r)):(n.tag=0,n=df(null,n,t,l,r));else{if(t!=null){var d=t.$$typeof;if(d===B){n.tag=11,n=Wp(null,n,t,l,r);break e}else if(d===L){n.tag=14,n=Vp(null,n,t,l,r);break e}}throw n=Q(t)||t,Error(o(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,r);case 1:return l=n.type,d=mi(l,n.pendingProps),Jp(t,n,l,d,r);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(o(387));l=n.pendingProps;var g=n.memoizedState;d=g.element,Nd(t,n),ml(n,l,null,r);var w=n.memoizedState;if(l=w.cache,yr(n,pt,l),l!==g.cache&&$d(n,[pt],r,!0),pl(),l=w.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=g,n.memoizedState=g,n.flags&256){n=e1(t,n,l,r);break e}else if(l!==d){d=An(Error(o(424)),n),cl(d),n=e1(t,n,l,r);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Je=Hn(t.firstChild),zt=n,Re=!0,vr=null,_n=!0,r=Zg(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(si(),l===d){n=Ba(t,n,r);break e}Rt(t,n,l,r)}n=n.child}return n;case 26:return Cc(t,n),t===null?(r=pm(n.type,null,n.pendingProps,null))?n.memoizedState=r:Re||(r=n.type,t=n.pendingProps,l=Uc(me.current).createElement(r),l[bt]=n,l[Ft]=t,Dt(l,r,t),ht(l),n.stateNode=l):n.memoizedState=pm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return _e(n),t===null&&Re&&(l=n.stateNode=fm(n.type,n.pendingProps,me.current),zt=n,_n=!0,d=Je,zr(n.type)?(Qf=d,Je=Hn(l.firstChild)):Je=d),Rt(t,n,n.pendingProps.children,r),Cc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((d=l=Je)&&(l=Nb(l,n.type,n.pendingProps,_n),l!==null?(n.stateNode=l,zt=n,Je=Hn(l.firstChild),_n=!1,d=!0):d=!1),d||xr(n)),_e(n),d=n.type,g=n.pendingProps,w=t!==null?t.memoizedProps:null,l=g.children,Wf(d,g)?l=null:w!==null&&Wf(d,w)&&(n.flags|=32),n.memoizedState!==null&&(d=Pd(t,n,K5,null,null,r),_l._currentValue=d),Cc(t,n),Rt(t,n,l,r),n.child;case 6:return t===null&&Re&&((t=r=Je)&&(r=Hb(r,n.pendingProps,_n),r!==null?(n.stateNode=r,zt=n,Je=null,t=!0):t=!1),t||xr(n)),null;case 13:return t1(t,n,r);case 4:return ye(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=gi(n,null,l,r):Rt(t,n,l,r),n.child;case 11:return Wp(t,n,n.type,n.pendingProps,r);case 7:return Rt(t,n,n.pendingProps,r),n.child;case 8:return Rt(t,n,n.pendingProps.children,r),n.child;case 12:return Rt(t,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,yr(n,n.type,l.value),Rt(t,n,l.children,r),n.child;case 9:return d=n.type._context,l=n.pendingProps.children,ui(n),d=At(d),l=l(d),n.flags|=1,Rt(t,n,l,r),n.child;case 14:return Vp(t,n,n.type,n.pendingProps,r);case 15:return Yp(t,n,n.type,n.pendingProps,r);case 19:return a1(t,n,r);case 31:return ob(t,n,r);case 22:return Zp(t,n,r,n.pendingProps);case 24:return ui(n),l=At(pt),t===null?(d=Rd(),d===null&&(d=Qe,g=zd(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=r),d=g),n.memoizedState={parent:l,cache:d},_d(n),yr(n,pt,d)):((t.lanes&r)!==0&&(Nd(t,n),ml(n,null,null,r),pl()),d=t.memoizedState,g=n.memoizedState,d.parent!==l?(d={parent:l,cache:l},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),yr(n,pt,l)):(l=g.cache,yr(n,pt,l),l!==d.cache&&$d(n,[pt],r,!0))),Rt(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function Ua(t){t.flags|=4}function yf(t,n,r,l,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if($1())t.flags|=8192;else throw hi=sc,Dd}else t.flags&=-16777217}function i1(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bm(n))if($1())t.flags|=8192;else throw hi=sc,Dd}function Ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ui():536870912,t.lanes|=n,yo|=n)}function Sl(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function et(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(n)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=r,n}function sb(t,n,r){var l=n.pendingProps;switch(jd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(n),null;case 1:return et(n),null;case 3:return r=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),_a(pt),ve(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(io(n)?Ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Md())),et(n),null;case 26:var d=n.type,g=n.memoizedState;return t===null?(Ua(n),g!==null?(et(n),i1(n,g)):(et(n),yf(n,d,null,l,r))):g?g!==t.memoizedState?(Ua(n),et(n),i1(n,g)):(et(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ua(n),et(n),yf(n,d,t,l,r)),null;case 27:if(Ot(n),r=me.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ua(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return et(n),null}t=se.current,io(n)?Hg(n):(t=fm(d,l,r),n.stateNode=t,Ua(n))}return et(n),null;case 5:if(Ot(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ua(n);else{if(!l){if(n.stateNode===null)throw Error(o(166));return et(n),null}if(g=se.current,io(n))Hg(n);else{var w=Uc(me.current);switch(g){case 1:g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":g=w.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":g=w.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":g=w.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof l.is=="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?g.multiple=!0:l.size&&(g.size=l.size);break;default:g=typeof l.is=="string"?w.createElement(d,{is:l.is}):w.createElement(d)}}g[bt]=n,g[Ft]=l;e:for(w=n.child;w!==null;){if(w.tag===5||w.tag===6)g.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===n)break e;for(;w.sibling===null;){if(w.return===null||w.return===n)break e;w=w.return}w.sibling.return=w.return,w=w.sibling}n.stateNode=g;e:switch(Dt(g,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ua(n)}}return et(n),yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ua(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(t=me.current,io(n)){if(t=n.stateNode,r=n.memoizedProps,l=null,d=zt,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[bt]=n,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||tm(t.nodeValue,r)),t||xr(n,!0)}else t=Uc(t).createTextNode(l),t[bt]=n,n.stateNode=t}return et(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(l=io(n),r!==null){if(t===null){if(!l)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[bt]=n}else si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;et(n),t=!1}else r=Md(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(Sn(n),n):(Sn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return et(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=io(n),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(o(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[bt]=n}else si(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;et(n),d=!1}else d=Md(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(Sn(n),n):(Sn(n),null)}return Sn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=n.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),g=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==d&&(l.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Ec(n,n.updateQueue),et(n),null);case 4:return ve(),t===null&&If(n.stateNode.containerInfo),et(n),null;case 10:return _a(n.type),et(n),null;case 19:if(W(ut),l=n.memoizedState,l===null)return et(n),null;if(d=(n.flags&128)!==0,g=l.rendering,g===null)if(d)Sl(l,!1);else{if(lt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=fc(t),g!==null){for(n.flags|=128,Sl(l,!1),t=g.updateQueue,n.updateQueue=t,Ec(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Ag(r,t),r=r.sibling;return Y(ut,ut.current&1|2),Re&&Ra(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Jt()>Oc&&(n.flags|=128,d=!0,Sl(l,!1),n.lanes=4194304)}else{if(!d)if(t=fc(g),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,Ec(n,t),Sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!g.alternate&&!Re)return et(n),null}else 2*Jt()-l.renderingStartTime>Oc&&r!==536870912&&(n.flags|=128,d=!0,Sl(l,!1),n.lanes=4194304);l.isBackwards?(g.sibling=n.child,n.child=g):(t=l.last,t!==null?t.sibling=g:n.child=g,l.last=g)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Jt(),t.sibling=null,r=ut.current,Y(ut,d?r&1|2:r&1),Re&&Ra(n,l.treeForkCount),t):(et(n),null);case 22:case 23:return Sn(n),Id(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(et(n),n.subtreeFlags&6&&(n.flags|=8192)):et(n),r=n.updateQueue,r!==null&&Ec(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),t!==null&&W(di),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(pt),et(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function cb(t,n){switch(jd(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(pt),ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ot(n),null;case 31:if(n.memoizedState!==null){if(Sn(n),n.alternate===null)throw Error(o(340));si()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Sn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));si()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(ut),null;case 4:return ve(),null;case 10:return _a(n.type),null;case 22:case 23:return Sn(n),Id(),t!==null&&W(di),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(pt),null;case 25:return null;default:return null}}function o1(t,n){switch(jd(n),n.tag){case 3:_a(pt),ve();break;case 26:case 27:case 5:Ot(n);break;case 4:ve();break;case 31:n.memoizedState!==null&&Sn(n);break;case 13:Sn(n);break;case 19:W(ut);break;case 10:_a(n.type);break;case 22:case 23:Sn(n),Id(),t!==null&&W(di);break;case 24:_a(pt)}}function Cl(t,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var d=l.next;r=d;do{if((r.tag&t)===t){l=void 0;var g=r.create,w=r.inst;l=g(),w.destroy=l}r=r.next}while(r!==d)}}catch(j){Pe(n,n.return,j)}}function Er(t,n,r){try{var l=n.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var g=d.next;l=g;do{if((l.tag&t)===t){var w=l.inst,j=w.destroy;if(j!==void 0){w.destroy=void 0,d=n;var H=r,X=j;try{X()}catch(ie){Pe(d,H,ie)}}}l=l.next}while(l!==g)}}catch(ie){Pe(n,n.return,ie)}}function l1(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Qg(n,r)}catch(l){Pe(t,t.return,l)}}}function s1(t,n,r){r.props=mi(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Pe(t,n,l)}}function kl(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(d){Pe(t,n,d)}}function ga(t,n){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(d){Pe(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){Pe(t,n,d)}else r.current=null}function c1(t){var n=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(d){Pe(t,t.return,d)}}function bf(t,n,r){try{var l=t.stateNode;$b(l,t.type,r,n),l[Ft]=n}catch(d){Pe(t,t.return,d)}}function u1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zr(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sf(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Vn));else if(l!==4&&(l===27&&zr(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Sf(t,n,r),t=t.sibling;t!==null;)Sf(t,n,r),t=t.sibling}function jc(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(l!==4&&(l===27&&zr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(jc(t,n,r),t=t.sibling;t!==null;)jc(t,n,r),t=t.sibling}function d1(t){var n=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);Dt(n,l,r),n[bt]=t,n[Ft]=r}catch(g){Pe(t,t.return,g)}}var Ia=!1,xt=!1,Cf=!1,f1=typeof WeakSet=="function"?WeakSet:Set,Tt=null;function ub(t,n){if(t=t.containerInfo,Pf=Vc,t=kg(t),pd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break e}var w=0,j=-1,H=-1,X=0,ie=0,ce=t,K=null;t:for(;;){for(var te;ce!==r||d!==0&&ce.nodeType!==3||(j=w+d),ce!==g||l!==0&&ce.nodeType!==3||(H=w+l),ce.nodeType===3&&(w+=ce.nodeValue.length),(te=ce.firstChild)!==null;)K=ce,ce=te;for(;;){if(ce===t)break t;if(K===r&&++X===d&&(j=w),K===g&&++ie===l&&(H=w),(te=ce.nextSibling)!==null)break;ce=K,K=ce.parentNode}ce=te}r=j===-1||H===-1?null:{start:j,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ff={focusedElem:t,selectionRange:r},Vc=!1,Tt=n;Tt!==null;)if(n=Tt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Tt=t;else for(;Tt!==null;){switch(n=Tt,g=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,r=n,d=g.memoizedProps,g=g.memoizedState,l=r.stateNode;try{var pe=mi(r.type,d);t=l.getSnapshotBeforeUpdate(pe,g),l.__reactInternalSnapshotBeforeUpdate=t}catch(Se){Pe(r,r.return,Se)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Yf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Tt=t;break}Tt=n.return}}function h1(t,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:qa(t,r),l&4&&Cl(5,r);break;case 1:if(qa(t,r),l&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(w){Pe(r,r.return,w)}else{var d=mi(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Pe(r,r.return,w)}}l&64&&l1(r),l&512&&kl(r,r.return);break;case 3:if(qa(t,r),l&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Qg(t,n)}catch(w){Pe(r,r.return,w)}}break;case 27:n===null&&l&4&&d1(r);case 26:case 5:qa(t,r),n===null&&l&4&&c1(r),l&512&&kl(r,r.return);break;case 12:qa(t,r);break;case 31:qa(t,r),l&4&&m1(t,r);break;case 13:qa(t,r),l&4&&v1(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=yb.bind(null,r),Bb(t,r))));break;case 22:if(l=r.memoizedState!==null||Ia,!l){n=n!==null&&n.memoizedState!==null||xt,d=Ia;var g=xt;Ia=l,(xt=n)&&!g?Pa(t,r,(r.subtreeFlags&8772)!==0):qa(t,r),Ia=d,xt=g}break;case 30:break;default:qa(t,r)}}function g1(t){var n=t.alternate;n!==null&&(t.alternate=null,g1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rt=null,ln=!1;function Ga(t,n,r){for(r=r.child;r!==null;)p1(t,n,r),r=r.sibling}function p1(t,n,r){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Yr,r)}catch{}switch(r.tag){case 26:xt||ga(r,n),Ga(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:xt||ga(r,n);var l=rt,d=ln;zr(r.type)&&(rt=r.stateNode,ln=!1),Ga(t,n,r),Al(r.stateNode),rt=l,ln=d;break;case 5:xt||ga(r,n);case 6:if(l=rt,d=ln,rt=null,Ga(t,n,r),rt=l,ln=d,rt!==null)if(ln)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(r.stateNode)}catch(g){Pe(r,n,g)}else try{rt.removeChild(r.stateNode)}catch(g){Pe(r,n,g)}break;case 18:rt!==null&&(ln?(t=rt,lm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),To(t)):lm(rt,r.stateNode));break;case 4:l=rt,d=ln,rt=r.stateNode.containerInfo,ln=!0,Ga(t,n,r),rt=l,ln=d;break;case 0:case 11:case 14:case 15:Er(2,r,n),xt||Er(4,r,n),Ga(t,n,r);break;case 1:xt||(ga(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&s1(r,n,l)),Ga(t,n,r);break;case 21:Ga(t,n,r);break;case 22:xt=(l=xt)||r.memoizedState!==null,Ga(t,n,r),xt=l;break;default:Ga(t,n,r)}}function m1(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{To(t)}catch(r){Pe(n,n.return,r)}}}function v1(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(r){Pe(n,n.return,r)}}function db(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f1),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f1),n;default:throw Error(o(435,t.tag))}}function Tc(t,n){var r=db(t);n.forEach(function(l){if(!r.has(l)){r.add(l);var d=bb.bind(null,t,l);l.then(d,d)}})}function sn(t,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var d=r[l],g=t,w=n,j=w;e:for(;j!==null;){switch(j.tag){case 27:if(zr(j.type)){rt=j.stateNode,ln=!1;break e}break;case 5:rt=j.stateNode,ln=!1;break e;case 3:case 4:rt=j.stateNode.containerInfo,ln=!0;break e}j=j.return}if(rt===null)throw Error(o(160));p1(g,w,d),rt=null,ln=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)x1(n,t),n=n.sibling}var Jn=null;function x1(t,n){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:sn(n,t),cn(t),l&4&&(Er(3,t,t.return),Cl(3,t),Er(5,t,t.return));break;case 1:sn(n,t),cn(t),l&512&&(xt||r===null||ga(r,r.return)),l&64&&Ia&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var d=Jn;if(sn(n,t),cn(t),l&512&&(xt||r===null||ga(r,r.return)),l&4){var g=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Kr]||g[bt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(l),d.head.insertBefore(g,d.querySelector("head > title"))),Dt(g,l,r),g[bt]=t,ht(g),l=g;break e;case"link":var w=xm("link","href",d).get(l+(r.href||""));if(w){for(var j=0;j<w.length;j++)if(g=w[j],g.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&g.getAttribute("rel")===(r.rel==null?null:r.rel)&&g.getAttribute("title")===(r.title==null?null:r.title)&&g.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){w.splice(j,1);break t}}g=d.createElement(l),Dt(g,l,r),d.head.appendChild(g);break;case"meta":if(w=xm("meta","content",d).get(l+(r.content||""))){for(j=0;j<w.length;j++)if(g=w[j],g.getAttribute("content")===(r.content==null?null:""+r.content)&&g.getAttribute("name")===(r.name==null?null:r.name)&&g.getAttribute("property")===(r.property==null?null:r.property)&&g.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&g.getAttribute("charset")===(r.charSet==null?null:r.charSet)){w.splice(j,1);break t}}g=d.createElement(l),Dt(g,l,r),d.head.appendChild(g);break;default:throw Error(o(468,l))}g[bt]=t,ht(g),l=g}t.stateNode=l}else ym(d,t.type,t.stateNode);else t.stateNode=vm(d,l,t.memoizedProps);else g!==l?(g===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):g.count--,l===null?ym(d,t.type,t.stateNode):vm(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&bf(t,t.memoizedProps,r.memoizedProps)}break;case 27:sn(n,t),cn(t),l&512&&(xt||r===null||ga(r,r.return)),r!==null&&l&4&&bf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(sn(n,t),cn(t),l&512&&(xt||r===null||ga(r,r.return)),t.flags&32){d=t.stateNode;try{vn(d,"")}catch(pe){Pe(t,t.return,pe)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,bf(t,d,r!==null?r.memoizedProps:d)),l&1024&&(Cf=!0);break;case 6:if(sn(n,t),cn(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(pe){Pe(t,t.return,pe)}}break;case 3:if(qc=null,d=Jn,Jn=Ic(n.containerInfo),sn(n,t),Jn=d,cn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(pe){Pe(t,t.return,pe)}Cf&&(Cf=!1,y1(t));break;case 4:l=Jn,Jn=Ic(t.stateNode.containerInfo),sn(n,t),cn(t),Jn=l;break;case 12:sn(n,t),cn(t);break;case 31:sn(n,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 13:sn(n,t),cn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Lc=Jt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 22:d=t.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,X=Ia,ie=xt;if(Ia=X||d,xt=ie||H,sn(n,t),xt=ie,Ia=X,cn(t),l&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(r===null||H||Ia||xt||vi(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){H=r=n;try{if(g=H.stateNode,d)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{j=H.stateNode;var ce=H.memoizedProps.style,K=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;j.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(pe){Pe(H,H.return,pe)}}}else if(n.tag===6){if(r===null){H=n;try{H.stateNode.nodeValue=d?"":H.memoizedProps}catch(pe){Pe(H,H.return,pe)}}}else if(n.tag===18){if(r===null){H=n;try{var te=H.stateNode;d?sm(te,!0):sm(H.stateNode,!1)}catch(pe){Pe(H,H.return,pe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Tc(t,r))));break;case 19:sn(n,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Tc(t,l)));break;case 30:break;case 21:break;default:sn(n,t),cn(t)}}function cn(t){var n=t.flags;if(n&2){try{for(var r,l=t.return;l!==null;){if(u1(l)){r=l;break}l=l.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var d=r.stateNode,g=wf(t);jc(t,g,d);break;case 5:var w=r.stateNode;r.flags&32&&(vn(w,""),r.flags&=-33);var j=wf(t);jc(t,j,w);break;case 3:case 4:var H=r.stateNode.containerInfo,X=wf(t);Sf(t,X,H);break;default:throw Error(o(161))}}catch(ie){Pe(t,t.return,ie)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function y1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;y1(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h1(t,n.alternate,n),n=n.sibling}function vi(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Er(4,n,n.return),vi(n);break;case 1:ga(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&s1(n,n.return,r),vi(n);break;case 27:Al(n.stateNode);case 26:case 5:ga(n,n.return),vi(n);break;case 22:n.memoizedState===null&&vi(n);break;case 30:vi(n);break;default:vi(n)}t=t.sibling}}function Pa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,d=t,g=n,w=g.flags;switch(g.tag){case 0:case 11:case 15:Pa(d,g,r),Cl(4,g);break;case 1:if(Pa(d,g,r),l=g,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(X){Pe(l,l.return,X)}if(l=g,d=l.updateQueue,d!==null){var j=l.stateNode;try{var H=d.shared.hiddenCallbacks;if(H!==null)for(d.shared.hiddenCallbacks=null,d=0;d<H.length;d++)Xg(H[d],j)}catch(X){Pe(l,l.return,X)}}r&&w&64&&l1(g),kl(g,g.return);break;case 27:d1(g);case 26:case 5:Pa(d,g,r),r&&l===null&&w&4&&c1(g),kl(g,g.return);break;case 12:Pa(d,g,r);break;case 31:Pa(d,g,r),r&&w&4&&m1(d,g);break;case 13:Pa(d,g,r),r&&w&4&&v1(d,g);break;case 22:g.memoizedState===null&&Pa(d,g,r),kl(g,g.return);break;case 30:break;default:Pa(d,g,r)}n=n.sibling}}function kf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ul(r))}function Ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ul(t))}function ea(t,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b1(t,n,r,l),n=n.sibling}function b1(t,n,r,l){var d=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,r,l),d&2048&&Cl(9,n);break;case 1:ea(t,n,r,l);break;case 3:ea(t,n,r,l),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ul(t)));break;case 12:if(d&2048){ea(t,n,r,l),t=n.stateNode;try{var g=n.memoizedProps,w=g.id,j=g.onPostCommit;typeof j=="function"&&j(w,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Pe(n,n.return,H)}}else ea(t,n,r,l);break;case 31:ea(t,n,r,l);break;case 13:ea(t,n,r,l);break;case 23:break;case 22:g=n.stateNode,w=n.alternate,n.memoizedState!==null?g._visibility&2?ea(t,n,r,l):El(t,n):g._visibility&2?ea(t,n,r,l):(g._visibility|=2,mo(t,n,r,l,(n.subtreeFlags&10256)!==0||!1)),d&2048&&kf(w,n);break;case 24:ea(t,n,r,l),d&2048&&Ef(n.alternate,n);break;default:ea(t,n,r,l)}}function mo(t,n,r,l,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var g=t,w=n,j=r,H=l,X=w.flags;switch(w.tag){case 0:case 11:case 15:mo(g,w,j,H,d),Cl(8,w);break;case 23:break;case 22:var ie=w.stateNode;w.memoizedState!==null?ie._visibility&2?mo(g,w,j,H,d):El(g,w):(ie._visibility|=2,mo(g,w,j,H,d)),d&&X&2048&&kf(w.alternate,w);break;case 24:mo(g,w,j,H,d),d&&X&2048&&Ef(w.alternate,w);break;default:mo(g,w,j,H,d)}n=n.sibling}}function El(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,l=n,d=l.flags;switch(l.tag){case 22:El(r,l),d&2048&&kf(l.alternate,l);break;case 24:El(r,l),d&2048&&Ef(l.alternate,l);break;default:El(r,l)}n=n.sibling}}var jl=8192;function vo(t,n,r){if(t.subtreeFlags&jl)for(t=t.child;t!==null;)w1(t,n,r),t=t.sibling}function w1(t,n,r){switch(t.tag){case 26:vo(t,n,r),t.flags&jl&&t.memoizedState!==null&&Qb(r,Jn,t.memoizedState,t.memoizedProps);break;case 5:vo(t,n,r);break;case 3:case 4:var l=Jn;Jn=Ic(t.stateNode.containerInfo),vo(t,n,r),Jn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=jl,jl=16777216,vo(t,n,r),jl=l):vo(t,n,r));break;default:vo(t,n,r)}}function S1(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Tt=l,k1(l,t)}S1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C1(t),t=t.sibling}function C1(t){switch(t.tag){case 0:case 11:case 15:Tl(t),t.flags&2048&&Er(9,t,t.return);break;case 3:Tl(t);break;case 12:Tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mc(t)):Tl(t);break;default:Tl(t)}}function Mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Tt=l,k1(l,t)}S1(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Er(8,n,n.return),Mc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Mc(n));break;default:Mc(n)}t=t.sibling}}function k1(t,n){for(;Tt!==null;){var r=Tt;switch(r.tag){case 0:case 11:case 15:Er(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ul(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Tt=l;else e:for(r=t;Tt!==null;){l=Tt;var d=l.sibling,g=l.return;if(g1(l),l===r){Tt=null;break e}if(d!==null){d.return=g,Tt=d;break e}Tt=g}}}var fb={getCacheForType:function(t){var n=At(pt),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return At(pt).controller.signal}},hb=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Qe=null,Oe=null,ze=0,qe=0,Cn=null,jr=!1,xo=!1,jf=!1,Fa=0,lt=0,Tr=0,xi=0,Tf=0,kn=0,yo=0,Ml=null,un=null,Mf=!1,Lc=0,E1=0,Oc=1/0,$c=null,Mr=null,Ct=0,Lr=null,bo=null,Wa=0,Lf=0,Of=null,j1=null,Ll=0,$f=null;function En(){return(Ie&2)!==0&&ze!==0?ze&-ze:D.T!==null?Nf():sa()}function T1(){if(kn===0)if((ze&536870912)===0||Re){var t=Hi;Hi<<=1,(Hi&3932160)===0&&(Hi=262144),kn=t}else kn=536870912;return t=wn.current,t!==null&&(t.flags|=32),kn}function dn(t,n,r){(t===Qe&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(wo(t,0),Or(t,ze,kn,!1)),Xr(t,r),((Ie&2)===0||t!==Qe)&&(t===Qe&&((Ie&2)===0&&(xi|=r),lt===4&&Or(t,ze,kn,!1)),pa(t))}function M1(t,n,r){if((Ie&6)!==0)throw Error(o(327));var l=!r&&(n&127)===0&&(n&t.expiredLanes)===0||La(t,n),d=l?mb(t,n):Af(t,n,!0),g=l;do{if(d===0){xo&&!l&&Or(t,n,0,!1);break}else{if(r=t.current.alternate,g&&!gb(r)){d=Af(t,n,!1),g=!1;continue}if(d===2){if(g=n,t.errorRecoveryDisabledLanes&g)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;e:{var j=t;d=Ml;var H=j.current.memoizedState.isDehydrated;if(H&&(wo(j,w).flags|=256),w=Af(j,w,!1),w!==2){if(jf&&!H){j.errorRecoveryDisabledLanes|=g,xi|=g,d=4;break e}g=un,un=d,g!==null&&(un===null?un=g:un.push.apply(un,g))}d=w}if(g=!1,d!==2)continue}}if(d===1){wo(t,0),Or(t,n,0,!0);break}e:{switch(l=t,g=d,g){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Or(l,n,kn,!jr);break e;case 2:un=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(d=Lc+300-Jt(),10<d)){if(Or(l,n,kn,!jr),la(l,0,!0)!==0)break e;Wa=n,l.timeoutHandle=im(L1.bind(null,l,r,un,$c,Mf,n,kn,xi,yo,jr,g,"Throttled",-0,0),d);break e}L1(l,r,un,$c,Mf,n,kn,xi,yo,jr,g,null,-0,0)}}break}while(!0);pa(t)}function L1(t,n,r,l,d,g,w,j,H,X,ie,ce,K,te){if(t.timeoutHandle=-1,ce=n.subtreeFlags,ce&8192||(ce&16785408)===16785408){ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vn},w1(n,g,ce);var pe=(g&62914560)===g?Lc-Jt():(g&4194048)===g?E1-Jt():0;if(pe=Kb(ce,pe),pe!==null){Wa=g,t.cancelPendingCommit=pe(N1.bind(null,t,n,g,r,l,d,w,j,H,ie,ce,null,K,te)),Or(t,g,w,!X);return}}N1(t,n,g,r,l,d,w,j,H)}function gb(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var d=r[l],g=d.getSnapshot;d=d.value;try{if(!yn(g(),d))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Or(t,n,r,l){n&=~Tf,n&=~xi,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var d=n;0<d;){var g=31-Pt(d),w=1<<g;l[g]=-1,d&=~w}r!==0&&Ns(t,r,n)}function zc(){return(Ie&6)===0?(Ol(0),!1):!0}function zf(){if(Oe!==null){if(qe===0)var t=Oe.return;else t=Oe,Da=ci=null,Vd(t),uo=null,fl=0,t=Oe;for(;t!==null;)o1(t.alternate,t),t=t.return;Oe=null}}function wo(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Rb(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Wa=0,zf(),Qe=t,Oe=r=Aa(t.current,null),ze=n,qe=0,Cn=null,jr=!1,xo=La(t,n),jf=!1,yo=kn=Tf=xi=Tr=lt=0,un=Ml=null,Mf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var d=31-Pt(l),g=1<<d;n|=t[d],l&=~g}return Fa=n,Js(),r}function O1(t,n){Te=null,D.H=bl,n===co||n===lc?(n=Wg(),qe=3):n===Dd?(n=Wg(),qe=4):qe=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cn=n,Oe===null&&(lt=1,wc(t,An(n,t.current)))}function $1(){var t=wn.current;return t===null?!0:(ze&4194048)===ze?Nn===null:(ze&62914560)===ze||(ze&536870912)!==0?t===Nn:!1}function z1(){var t=D.H;return D.H=bl,t===null?bl:t}function A1(){var t=D.A;return D.A=fb,t}function Ac(){lt=4,jr||(ze&4194048)!==ze&&wn.current!==null||(xo=!0),(Tr&134217727)===0&&(xi&134217727)===0||Qe===null||Or(Qe,ze,kn,!1)}function Af(t,n,r){var l=Ie;Ie|=2;var d=z1(),g=A1();(Qe!==t||ze!==n)&&($c=null,wo(t,n)),n=!1;var w=lt;e:do try{if(qe!==0&&Oe!==null){var j=Oe,H=Cn;switch(qe){case 8:zf(),w=6;break e;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var X=qe;if(qe=0,Cn=null,So(t,j,H,X),r&&xo){w=0;break e}break;default:X=qe,qe=0,Cn=null,So(t,j,H,X)}}pb(),w=lt;break}catch(ie){O1(t,ie)}while(!0);return n&&t.shellSuspendCounter++,Da=ci=null,Ie=l,D.H=d,D.A=g,Oe===null&&(Qe=null,ze=0,Js()),w}function pb(){for(;Oe!==null;)R1(Oe)}function mb(t,n){var r=Ie;Ie|=2;var l=z1(),d=A1();Qe!==t||ze!==n?($c=null,Oc=Jt()+500,wo(t,n)):xo=La(t,n);e:do try{if(qe!==0&&Oe!==null){n=Oe;var g=Cn;t:switch(qe){case 1:qe=0,Cn=null,So(t,n,g,1);break;case 2:case 9:if(Pg(g)){qe=0,Cn=null,D1(n);break}n=function(){qe!==2&&qe!==9||Qe!==t||(qe=7),pa(t)},g.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Pg(g)?(qe=0,Cn=null,D1(n)):(qe=0,Cn=null,So(t,n,g,7));break;case 5:var w=null;switch(Oe.tag){case 26:w=Oe.memoizedState;case 5:case 27:var j=Oe;if(w?bm(w):j.stateNode.complete){qe=0,Cn=null;var H=j.sibling;if(H!==null)Oe=H;else{var X=j.return;X!==null?(Oe=X,Rc(X)):Oe=null}break t}}qe=0,Cn=null,So(t,n,g,5);break;case 6:qe=0,Cn=null,So(t,n,g,6);break;case 8:zf(),lt=6;break e;default:throw Error(o(462))}}vb();break}catch(ie){O1(t,ie)}while(!0);return Da=ci=null,D.H=l,D.A=d,Ie=r,Oe!==null?0:(Qe=null,ze=0,Js(),lt)}function vb(){for(;Oe!==null&&!Ju();)R1(Oe)}function R1(t){var n=r1(t.alternate,t,Fa);t.memoizedProps=t.pendingProps,n===null?Rc(t):Oe=n}function D1(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=Kp(r,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=Kp(r,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Vd(n);default:o1(r,n),n=Oe=Ag(n,Fa),n=r1(r,n,Fa)}t.memoizedProps=t.pendingProps,n===null?Rc(t):Oe=n}function So(t,n,r,l){Da=ci=null,Vd(n),uo=null,fl=0;var d=n.return;try{if(ib(t,d,n,r,ze)){lt=1,wc(t,An(r,t.current)),Oe=null;return}}catch(g){if(d!==null)throw Oe=d,g;lt=1,wc(t,An(r,t.current)),Oe=null;return}n.flags&32768?(Re||l===1?t=!0:xo||(ze&536870912)!==0?t=!1:(jr=t=!0,(l===2||l===9||l===3||l===6)&&(l=wn.current,l!==null&&l.tag===13&&(l.flags|=16384))),_1(n,t)):Rc(n)}function Rc(t){var n=t;do{if((n.flags&32768)!==0){_1(n,jr);return}t=n.return;var r=sb(n.alternate,n,Fa);if(r!==null){Oe=r;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=t}while(n!==null);lt===0&&(lt=5)}function _1(t,n){do{var r=cb(t.alternate,t);if(r!==null){r.flags&=32767,Oe=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Oe=t;return}Oe=t=r}while(t!==null);lt=6,Oe=null}function N1(t,n,r,l,d,g,w,j,H){t.cancelPendingCommit=null;do Dc();while(Ct!==0);if((Ie&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(g=n.lanes|n.childLanes,g|=bd,ad(t,r,g,w,j,H),t===Qe&&(Oe=Qe=null,ze=0),bo=n,Lr=t,Wa=r,Lf=g,Of=d,j1=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wb(sr,function(){return G1(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,d=G.p,G.p=2,w=Ie,Ie|=4;try{ub(t,n,r)}finally{Ie=w,G.p=d,D.T=l}}Ct=1,H1(),B1(),U1()}}function H1(){if(Ct===1){Ct=0;var t=Lr,n=bo,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=G.p;G.p=2;var d=Ie;Ie|=4;try{x1(n,t);var g=Ff,w=kg(t.containerInfo),j=g.focusedElem,H=g.selectionRange;if(w!==j&&j&&j.ownerDocument&&Cg(j.ownerDocument.documentElement,j)){if(H!==null&&pd(j)){var X=H.start,ie=H.end;if(ie===void 0&&(ie=X),"selectionStart"in j)j.selectionStart=X,j.selectionEnd=Math.min(ie,j.value.length);else{var ce=j.ownerDocument||document,K=ce&&ce.defaultView||window;if(K.getSelection){var te=K.getSelection(),pe=j.textContent.length,Se=Math.min(H.start,pe),Ze=H.end===void 0?Se:Math.min(H.end,pe);!te.extend&&Se>Ze&&(w=Ze,Ze=Se,Se=w);var V=Sg(j,Se),I=Sg(j,Ze);if(V&&I&&(te.rangeCount!==1||te.anchorNode!==V.node||te.anchorOffset!==V.offset||te.focusNode!==I.node||te.focusOffset!==I.offset)){var Z=ce.createRange();Z.setStart(V.node,V.offset),te.removeAllRanges(),Se>Ze?(te.addRange(Z),te.extend(I.node,I.offset)):(Z.setEnd(I.node,I.offset),te.addRange(Z))}}}}for(ce=[],te=j;te=te.parentNode;)te.nodeType===1&&ce.push({element:te,left:te.scrollLeft,top:te.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<ce.length;j++){var le=ce[j];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}Vc=!!Pf,Ff=Pf=null}finally{Ie=d,G.p=l,D.T=r}}t.current=n,Ct=2}}function B1(){if(Ct===2){Ct=0;var t=Lr,n=bo,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=G.p;G.p=2;var d=Ie;Ie|=4;try{h1(t,n.alternate,n)}finally{Ie=d,G.p=l,D.T=r}}Ct=3}}function U1(){if(Ct===4||Ct===3){Ct=0,ed();var t=Lr,n=bo,r=Wa,l=j1;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ct=5:(Ct=0,bo=Lr=null,I1(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Mr=null),Qr(r),n=n.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Yr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,d=G.p,G.p=2,D.T=null;try{for(var g=t.onRecoverableError,w=0;w<l.length;w++){var j=l[w];g(j.value,{componentStack:j.stack})}}finally{D.T=n,G.p=d}}(Wa&3)!==0&&Dc(),pa(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===$f?Ll++:(Ll=0,$f=t):Ll=0,Ol(0)}}function I1(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ul(n)))}function Dc(){return H1(),B1(),U1(),G1()}function G1(){if(Ct!==5)return!1;var t=Lr,n=Lf;Lf=0;var r=Qr(Wa),l=D.T,d=G.p;try{G.p=32>r?32:r,D.T=null,r=Of,Of=null;var g=Lr,w=Wa;if(Ct=0,bo=Lr=null,Wa=0,(Ie&6)!==0)throw Error(o(331));var j=Ie;if(Ie|=4,C1(g.current),b1(g,g.current,w,r),Ie=j,Ol(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Yr,g)}catch{}return!0}finally{G.p=d,D.T=l,I1(t,n)}}function q1(t,n,r){n=An(r,n),n=cf(t.stateNode,n,2),t=Sr(t,n,2),t!==null&&(Xr(t,2),pa(t))}function Pe(t,n,r){if(t.tag===3)q1(t,t,r);else for(;n!==null;){if(n.tag===3){q1(n,t,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){t=An(r,t),r=Pp(2),l=Sr(n,r,2),l!==null&&(Fp(r,l,n,t),Xr(l,2),pa(l));break}}n=n.return}}function Rf(t,n,r){var l=t.pingCache;if(l===null){l=t.pingCache=new hb;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(r)||(jf=!0,d.add(r),t=xb.bind(null,t,n,r),n.then(t,t))}function xb(t,n,r){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Qe===t&&(ze&r)===r&&(lt===4||lt===3&&(ze&62914560)===ze&&300>Jt()-Lc?(Ie&2)===0&&wo(t,0):Tf|=r,yo===ze&&(yo=0)),pa(t)}function P1(t,n){n===0&&(n=Ui()),t=oi(t,n),t!==null&&(Xr(t,n),pa(t))}function yb(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),P1(t,r)}function bb(t,n){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(n),P1(t,r)}function wb(t,n){return On(t,n)}var _c=null,Co=null,Df=!1,Nc=!1,_f=!1,$r=0;function pa(t){t!==Co&&t.next===null&&(Co===null?_c=Co=t:Co=Co.next=t),Nc=!0,Df||(Df=!0,Cb())}function Ol(t,n){if(!_f&&Nc){_f=!0;do for(var r=!1,l=_c;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var g=0;else{var w=l.suspendedLanes,j=l.pingedLanes;g=(1<<31-Pt(42|t)+1)-1,g&=d&~(w&~j),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(r=!0,Y1(l,g))}else g=ze,g=la(l,l===Qe?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||La(l,g)||(r=!0,Y1(l,g));l=l.next}while(r);_f=!1}}function Sb(){F1()}function F1(){Nc=Df=!1;var t=0;$r!==0&&Ab()&&(t=$r);for(var n=Jt(),r=null,l=_c;l!==null;){var d=l.next,g=W1(l,n);g===0?(l.next=null,r===null?_c=d:r.next=d,d===null&&(Co=r)):(r=l,(t!==0||(g&3)!==0)&&(Nc=!0)),l=d}Ct!==0&&Ct!==5||Ol(t),$r!==0&&($r=0)}function W1(t,n){for(var r=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var w=31-Pt(g),j=1<<w,H=d[w];H===-1?((j&r)===0||(j&l)!==0)&&(d[w]=Yo(j,n)):H<=n&&(t.expiredLanes|=j),g&=~j}if(n=Qe,r=ze,r=la(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Gt(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||La(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(l!==null&&Gt(l),Qr(r)){case 2:case 8:r=Vr;break;case 32:r=sr;break;case 268435456:r=gn;break;default:r=sr}return l=V1.bind(null,t),r=On(r,l),t.callbackPriority=n,t.callbackNode=r,n}return l!==null&&l!==null&&Gt(l),t.callbackPriority=2,t.callbackNode=null,2}function V1(t,n){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Dc()&&t.callbackNode!==r)return null;var l=ze;return l=la(t,t===Qe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(M1(t,l,n),W1(t,Jt()),t.callbackNode!=null&&t.callbackNode===r?V1.bind(null,t):null)}function Y1(t,n){if(Dc())return null;M1(t,n,!0)}function Cb(){Db(function(){(Ie&6)!==0?On(zs,Sb):F1()})}function Nf(){if($r===0){var t=lo;t===0&&(t=Zr,Zr<<=1,(Zr&261888)===0&&(Zr=256)),$r=t}return $r}function Z1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wi(""+t)}function X1(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function kb(t,n,r,l,d){if(n==="submit"&&r&&r.stateNode===d){var g=Z1((d[Ft]||null).action),w=l.submitter;w&&(n=(n=w[Ft]||null)?Z1(n.formAction):w.getAttribute("formAction"),n!==null&&(g=n,w=null));var j=new Ce("action","action",null,l,d);t.push({event:j,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($r!==0){var H=w?X1(d,w):new FormData(d);nf(r,{pending:!0,data:H,method:d.method,action:g},null,H)}}else typeof g=="function"&&(j.preventDefault(),H=w?X1(d,w):new FormData(d),nf(r,{pending:!0,data:H,method:d.method,action:g},g,H))},currentTarget:d}]})}}for(var Hf=0;Hf<yd.length;Hf++){var Bf=yd[Hf],Eb=Bf.toLowerCase(),jb=Bf[0].toUpperCase()+Bf.slice(1);Kn(Eb,"on"+jb)}Kn(Tg,"onAnimationEnd"),Kn(Mg,"onAnimationIteration"),Kn(Lg,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(G5,"onTransitionRun"),Kn(q5,"onTransitionStart"),Kn(P5,"onTransitionCancel"),Kn(Og,"onTransitionEnd"),fr("onMouseEnter",["mouseout","mouseover"]),fr("onMouseLeave",["mouseout","mouseover"]),fr("onPointerEnter",["pointerout","pointerover"]),fr("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function Q1(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],d=l.event;l=l.listeners;e:{var g=void 0;if(n)for(var w=l.length-1;0<=w;w--){var j=l[w],H=j.instance,X=j.currentTarget;if(j=j.listener,H!==g&&d.isPropagationStopped())break e;g=j,d.currentTarget=X;try{g(d)}catch(ie){Ks(ie)}d.currentTarget=null,g=H}else for(w=0;w<l.length;w++){if(j=l[w],H=j.instance,X=j.currentTarget,j=j.listener,H!==g&&d.isPropagationStopped())break e;g=j,d.currentTarget=X;try{g(d)}catch(ie){Ks(ie)}d.currentTarget=null,g=H}}}}function $e(t,n){var r=n[mn];r===void 0&&(r=n[mn]=new Set);var l=t+"__bubble";r.has(l)||(K1(n,t,2,!1),r.add(l))}function Uf(t,n,r){var l=0;n&&(l|=4),K1(r,t,l,n)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[Hc]){t[Hc]=!0,Gs.forEach(function(r){r!=="selectionchange"&&(Tb.has(r)||Uf(r,!1,t),Uf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hc]||(n[Hc]=!0,Uf("selectionchange",!1,n))}}function K1(t,n,r,l){switch(Tm(n)){case 2:var d=t3;break;case 8:d=n3;break;default:d=nh}r=d.bind(null,n,r,t),d=void 0,!Yi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(n,r,{capture:!0,passive:d}):t.addEventListener(n,r,!0):d!==void 0?t.addEventListener(n,r,{passive:d}):t.addEventListener(n,r,!1)}function Gf(t,n,r,l,d){var g=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var j=l.stateNode.containerInfo;if(j===d)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;j!==null;){if(w=nn(j),w===null)return;if(H=w.tag,H===5||H===6||H===26||H===27){l=g=w;continue e}j=j.parentNode}}l=l.return}Ys(function(){var X=g,ie=Vi(r),ce=[];e:{var K=$g.get(t);if(K!==void 0){var te=Ce,pe=t;switch(t){case"keypress":if($(r)===0)break e;case"keydown":case"keyup":te=b5;break;case"focusin":pe="focus",te=xn;break;case"focusout":pe="blur",te=xn;break;case"beforeblur":case"afterblur":te=xn;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=St;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=C5;break;case Tg:case Mg:case Lg:te=Xs;break;case Og:te=E5;break;case"scroll":case"scrollend":te=gt;break;case"wheel":te=T5;break;case"copy":case"cut":case"paste":te=Qi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=sg;break;case"toggle":case"beforetoggle":te=L5}var Se=(n&4)!==0,Ze=!Se&&(t==="scroll"||t==="scrollend"),V=Se?K!==null?K+"Capture":null:K;Se=[];for(var I=X,Z;I!==null;){var le=I;if(Z=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||Z===null||V===null||(le=pr(I,V),le!=null&&Se.push(zl(I,le,Z))),Ze)break;I=I.return}0<Se.length&&(K=new te(K,pe,null,r,ie),ce.push({event:K,listeners:Se}))}}if((n&7)===0){e:{if(K=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",K&&r!==Yn&&(pe=r.relatedTarget||r.fromElement)&&(nn(pe)||pe[cr]))break e;if((te||K)&&(K=ie.window===ie?ie:(K=ie.ownerDocument)?K.defaultView||K.parentWindow:window,te?(pe=r.relatedTarget||r.toElement,te=X,pe=pe?nn(pe):null,pe!==null&&(Ze=u(pe),Se=pe.tag,pe!==Ze||Se!==5&&Se!==27&&Se!==6)&&(pe=null)):(te=null,pe=X),te!==pe)){if(Se=St,le="onMouseLeave",V="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Se=sg,le="onPointerLeave",V="onPointerEnter",I="pointer"),Ze=te==null?K:Jr(te),Z=pe==null?K:Jr(pe),K=new Se(le,I+"leave",te,r,ie),K.target=Ze,K.relatedTarget=Z,le=null,nn(ie)===X&&(Se=new Se(V,I+"enter",pe,r,ie),Se.target=Z,Se.relatedTarget=Ze,le=Se),Ze=le,te&&pe)t:{for(Se=Mb,V=te,I=pe,Z=0,le=V;le;le=Se(le))Z++;le=0;for(var be=I;be;be=Se(be))le++;for(;0<Z-le;)V=Se(V),Z--;for(;0<le-Z;)I=Se(I),le--;for(;Z--;){if(V===I||I!==null&&V===I.alternate){Se=V;break t}V=Se(V),I=Se(I)}Se=null}else Se=null;te!==null&&J1(ce,K,te,Se,!1),pe!==null&&Ze!==null&&J1(ce,Ze,pe,Se,!0)}}e:{if(K=X?Jr(X):window,te=K.nodeName&&K.nodeName.toLowerCase(),te==="select"||te==="input"&&K.type==="file")var Be=mg;else if(gg(K))if(vg)Be=B5;else{Be=N5;var xe=_5}else te=K.nodeName,!te||te.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?X&&tl(X.elementType)&&(Be=mg):Be=H5;if(Be&&(Be=Be(t,X))){pg(ce,Be,r,ie);break e}xe&&xe(t,K,X),t==="focusout"&&X&&K.type==="number"&&X.memoizedProps.value!=null&&Jo(K,"number",K.value)}switch(xe=X?Jr(X):window,t){case"focusin":(gg(xe)||xe.contentEditable==="true")&&(Ji=xe,md=X,ll=null);break;case"focusout":ll=md=Ji=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Eg(ce,r,ie);break;case"selectionchange":if(I5)break;case"keydown":case"keyup":Eg(ce,r,ie)}var Me;if(fd)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Ki?fg(t,r)&&(Ae="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(cg&&r.locale!=="ko"&&(Ki||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ki&&(Me=Zs()):(Qn=ie,nl="value"in Qn?Qn.value:Qn.textContent,Ki=!0)),xe=Bc(X,Ae),0<xe.length&&(Ae=new lg(Ae,t,null,r,ie),ce.push({event:Ae,listeners:xe}),Me?Ae.data=Me:(Me=hg(r),Me!==null&&(Ae.data=Me)))),(Me=$5?z5(t,r):A5(t,r))&&(Ae=Bc(X,"onBeforeInput"),0<Ae.length&&(xe=new lg("onBeforeInput","beforeinput",null,r,ie),ce.push({event:xe,listeners:Ae}),xe.data=Me)),kb(ce,t,X,r,ie)}Q1(ce,n)})}function zl(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Bc(t,n){for(var r=n+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=pr(t,r),d!=null&&l.unshift(zl(t,d,g)),d=pr(t,n),d!=null&&l.push(zl(t,d,g))),t.tag===3)return l;t=t.return}return[]}function Mb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J1(t,n,r,l,d){for(var g=n._reactName,w=[];r!==null&&r!==l;){var j=r,H=j.alternate,X=j.stateNode;if(j=j.tag,H!==null&&H===l)break;j!==5&&j!==26&&j!==27||X===null||(H=X,d?(X=pr(r,g),X!=null&&w.unshift(zl(r,X,H))):d||(X=pr(r,g),X!=null&&w.push(zl(r,X,H)))),r=r.return}w.length!==0&&t.push({event:n,listeners:w})}var Lb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function em(t){return(typeof t=="string"?t:""+t).replace(Lb,`
`).replace(Ob,"")}function tm(t,n){return n=em(n),em(t)===n}function Ye(t,n,r,l,d,g){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||vn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&vn(t,""+l);break;case"className":qi(t,"class",l);break;case"tabIndex":qi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qi(t,r,l);break;case"style":Wn(t,l,g);break;case"data":if(n!=="object"){qi(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Wi(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(r==="formAction"?(n!=="input"&&Ye(t,n,"name",d.name,d,null),Ye(t,n,"formEncType",d.formEncType,d,null),Ye(t,n,"formMethod",d.formMethod,d,null),Ye(t,n,"formTarget",d.formTarget,d,null)):(Ye(t,n,"encType",d.encType,d,null),Ye(t,n,"method",d.method,d,null),Ye(t,n,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Wi(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=Vn);break;case"onScroll":l!=null&&$e("scroll",t);break;case"onScrollEnd":l!=null&&$e("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Wi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":$e("beforetoggle",t),$e("toggle",t),Gi(t,"popover",l);break;case"xlinkActuate":Fn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Fn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Fn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Fn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Fn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Fn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Fn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=cd.get(r)||r,Gi(t,r,l))}}function qf(t,n,r,l,d,g){switch(r){case"style":Wn(t,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(o(60));t.innerHTML=r}}break;case"children":typeof l=="string"?vn(t,l):(typeof l=="number"||typeof l=="bigint")&&vn(t,""+l);break;case"onScroll":l!=null&&$e("scroll",t);break;case"onScrollEnd":l!=null&&$e("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ei.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),n=r.slice(2,d?r.length-7:void 0),g=t[Ft]||null,g=g!=null?g[r]:null,typeof g=="function"&&t.removeEventListener(n,g,d),typeof l=="function")){typeof g!="function"&&g!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,l,d);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Gi(t,r,l)}}}function Dt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$e("error",t),$e("load",t);var l=!1,d=!1,g;for(g in r)if(r.hasOwnProperty(g)){var w=r[g];if(w!=null)switch(g){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ye(t,n,g,w,r,null)}}d&&Ye(t,n,"srcSet",r.srcSet,r,null),l&&Ye(t,n,"src",r.src,r,null);return;case"input":$e("invalid",t);var j=g=w=d=null,H=null,X=null;for(l in r)if(r.hasOwnProperty(l)){var ie=r[l];if(ie!=null)switch(l){case"name":d=ie;break;case"type":w=ie;break;case"checked":H=ie;break;case"defaultChecked":X=ie;break;case"value":g=ie;break;case"defaultValue":j=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(o(137,n));break;default:Ye(t,n,l,ie,r,null)}}Ko(t,g,j,H,X,w,d,!1);return;case"select":$e("invalid",t),l=w=g=null;for(d in r)if(r.hasOwnProperty(d)&&(j=r[d],j!=null))switch(d){case"value":g=j;break;case"defaultValue":w=j;break;case"multiple":l=j;default:Ye(t,n,d,j,r,null)}n=g,r=w,t.multiple=!!l,n!=null?hr(t,!!l,n,!1):r!=null&&hr(t,!!l,r,!0);return;case"textarea":$e("invalid",t),g=d=l=null;for(w in r)if(r.hasOwnProperty(w)&&(j=r[w],j!=null))switch(w){case"value":l=j;break;case"defaultValue":d=j;break;case"children":g=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(91));break;default:Ye(t,n,w,j,r,null)}ni(t,l,d,g);return;case"option":for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!=null)&&(H==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Ye(t,n,H,l,r,null));return;case"dialog":$e("beforetoggle",t),$e("toggle",t),$e("cancel",t),$e("close",t);break;case"iframe":case"object":$e("load",t);break;case"video":case"audio":for(l=0;l<$l.length;l++)$e($l[l],t);break;case"image":$e("error",t),$e("load",t);break;case"details":$e("toggle",t);break;case"embed":case"source":case"link":$e("error",t),$e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in r)if(r.hasOwnProperty(X)&&(l=r[X],l!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:Ye(t,n,X,l,r,null)}return;default:if(tl(n)){for(ie in r)r.hasOwnProperty(ie)&&(l=r[ie],l!==void 0&&qf(t,n,ie,l,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(l=r[j],l!=null&&Ye(t,n,j,l,r,null))}function $b(t,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,w=null,j=null,H=null,X=null,ie=null;for(te in r){var ce=r[te];if(r.hasOwnProperty(te)&&ce!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":H=ce;default:l.hasOwnProperty(te)||Ye(t,n,te,null,l,ce)}}for(var K in l){var te=l[K];if(ce=r[K],l.hasOwnProperty(K)&&(te!=null||ce!=null))switch(K){case"type":g=te;break;case"name":d=te;break;case"checked":X=te;break;case"defaultChecked":ie=te;break;case"value":w=te;break;case"defaultValue":j=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(o(137,n));break;default:te!==ce&&Ye(t,n,K,te,l,ce)}}Qo(t,w,j,H,X,ie,g,d);return;case"select":te=w=j=K=null;for(g in r)if(H=r[g],r.hasOwnProperty(g)&&H!=null)switch(g){case"value":break;case"multiple":te=H;default:l.hasOwnProperty(g)||Ye(t,n,g,null,l,H)}for(d in l)if(g=l[d],H=r[d],l.hasOwnProperty(d)&&(g!=null||H!=null))switch(d){case"value":K=g;break;case"defaultValue":j=g;break;case"multiple":w=g;default:g!==H&&Ye(t,n,d,g,l,H)}n=j,r=w,l=te,K!=null?hr(t,!!r,K,!1):!!l!=!!r&&(n!=null?hr(t,!!r,n,!0):hr(t,!!r,r?[]:"",!1));return;case"textarea":te=K=null;for(j in r)if(d=r[j],r.hasOwnProperty(j)&&d!=null&&!l.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Ye(t,n,j,null,l,d)}for(w in l)if(d=l[w],g=r[w],l.hasOwnProperty(w)&&(d!=null||g!=null))switch(w){case"value":K=d;break;case"defaultValue":te=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==g&&Ye(t,n,w,d,l,g)}el(t,K,te);return;case"option":for(var pe in r)K=r[pe],r.hasOwnProperty(pe)&&K!=null&&!l.hasOwnProperty(pe)&&(pe==="selected"?t.selected=!1:Ye(t,n,pe,null,l,K));for(H in l)K=l[H],te=r[H],l.hasOwnProperty(H)&&K!==te&&(K!=null||te!=null)&&(H==="selected"?t.selected=K&&typeof K!="function"&&typeof K!="symbol":Ye(t,n,H,K,l,te));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in r)K=r[Se],r.hasOwnProperty(Se)&&K!=null&&!l.hasOwnProperty(Se)&&Ye(t,n,Se,null,l,K);for(X in l)if(K=l[X],te=r[X],l.hasOwnProperty(X)&&K!==te&&(K!=null||te!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,n));break;default:Ye(t,n,X,K,l,te)}return;default:if(tl(n)){for(var Ze in r)K=r[Ze],r.hasOwnProperty(Ze)&&K!==void 0&&!l.hasOwnProperty(Ze)&&qf(t,n,Ze,void 0,l,K);for(ie in l)K=l[ie],te=r[ie],!l.hasOwnProperty(ie)||K===te||K===void 0&&te===void 0||qf(t,n,ie,K,l,te);return}}for(var V in r)K=r[V],r.hasOwnProperty(V)&&K!=null&&!l.hasOwnProperty(V)&&Ye(t,n,V,null,l,K);for(ce in l)K=l[ce],te=r[ce],!l.hasOwnProperty(ce)||K===te||K==null&&te==null||Ye(t,n,ce,K,l,te)}function nm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var d=r[l],g=d.transferSize,w=d.initiatorType,j=d.duration;if(g&&j&&nm(w)){for(w=0,j=d.responseEnd,l+=1;l<r.length;l++){var H=r[l],X=H.startTime;if(X>j)break;var ie=H.transferSize,ce=H.initiatorType;ie&&nm(ce)&&(H=H.responseEnd,w+=ie*(H<j?1:(j-X)/(H-X)))}if(--l,n+=8*(g+w)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pf=null,Ff=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function am(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function Ab(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var im=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,Db=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(_b)}:im;function _b(t){setTimeout(function(){throw t})}function zr(t){return t==="head"}function lm(t,n){var r=n,l=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(d),To(n);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Al(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Al(r);for(var g=r.firstChild;g;){var w=g.nextSibling,j=g.nodeName;g[Kr]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&g.rel.toLowerCase()==="stylesheet"||r.removeChild(g),g=w}}else r==="body"&&Al(t.ownerDocument.body);r=d}while(r);To(n)}function sm(t,n){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function Yf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Yf(r),Zo(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Nb(t,n,r,l){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Kr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=Hn(t.nextSibling),t===null)break}return null}function Hb(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Hn(t.nextSibling),t===null))return null;return t}function cm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hn(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bb(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qf=null;function um(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Hn(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function dm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function fm(t,n,r){switch(n=Uc(r),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Al(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zo(t)}var Bn=new Map,hm=new Set;function Ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Va=G.d;G.d={f:Ub,r:Ib,D:Gb,C:qb,L:Pb,m:Fb,X:Vb,S:Wb,M:Yb};function Ub(){var t=Va.f(),n=zc();return t||n}function Ib(t){var n=ur(t);n!==null&&n.tag===5&&n.type==="form"?Op(n):Va.r(t)}var ko=typeof document>"u"?null:document;function gm(t,n,r){var l=ko;if(l&&typeof n=="string"&&n){var d=an(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),hm.has(d)||(hm.add(d),t={rel:t,crossOrigin:r,href:n},l.querySelector(d)===null&&(n=l.createElement("link"),Dt(n,"link",t),ht(n),l.head.appendChild(n)))}}function Gb(t){Va.D(t),gm("dns-prefetch",t,null)}function qb(t,n){Va.C(t,n),gm("preconnect",t,n)}function Pb(t,n,r){Va.L(t,n,r);var l=ko;if(l&&t&&n){var d='link[rel="preload"][as="'+an(n)+'"]';n==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+an(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+an(r.imageSizes)+'"]')):d+='[href="'+an(t)+'"]';var g=d;switch(n){case"style":g=Eo(t);break;case"script":g=jo(t)}Bn.has(g)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Bn.set(g,t),l.querySelector(d)!==null||n==="style"&&l.querySelector(Rl(g))||n==="script"&&l.querySelector(Dl(g))||(n=l.createElement("link"),Dt(n,"link",t),ht(n),l.head.appendChild(n)))}}function Fb(t,n){Va.m(t,n);var r=ko;if(r&&t){var l=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+an(l)+'"][href="'+an(t)+'"]',g=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=jo(t)}if(!Bn.has(g)&&(t=v({rel:"modulepreload",href:t},n),Bn.set(g,t),r.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Dl(g)))return}l=r.createElement("link"),Dt(l,"link",t),ht(l),r.head.appendChild(l)}}}function Wb(t,n,r){Va.S(t,n,r);var l=ko;if(l&&t){var d=dr(l).hoistableStyles,g=Eo(t);n=n||"default";var w=d.get(g);if(!w){var j={loading:0,preload:null};if(w=l.querySelector(Rl(g)))j.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Bn.get(g))&&Kf(t,r);var H=w=l.createElement("link");ht(H),Dt(H,"link",t),H._p=new Promise(function(X,ie){H.onload=X,H.onerror=ie}),H.addEventListener("load",function(){j.loading|=1}),H.addEventListener("error",function(){j.loading|=2}),j.loading|=4,Gc(w,n,l)}w={type:"stylesheet",instance:w,count:1,state:j},d.set(g,w)}}}function Vb(t,n){Va.X(t,n);var r=ko;if(r&&t){var l=dr(r).hoistableScripts,d=jo(t),g=l.get(d);g||(g=r.querySelector(Dl(d)),g||(t=v({src:t,async:!0},n),(n=Bn.get(d))&&Jf(t,n),g=r.createElement("script"),ht(g),Dt(g,"link",t),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function Yb(t,n){Va.M(t,n);var r=ko;if(r&&t){var l=dr(r).hoistableScripts,d=jo(t),g=l.get(d);g||(g=r.querySelector(Dl(d)),g||(t=v({src:t,async:!0,type:"module"},n),(n=Bn.get(d))&&Jf(t,n),g=r.createElement("script"),ht(g),Dt(g,"link",t),r.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(d,g))}}function pm(t,n,r,l){var d=(d=me.current)?Ic(d):null;if(!d)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Eo(r.href),r=dr(d).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Eo(r.href);var g=dr(d).hoistableStyles,w=g.get(t);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,w),(g=d.querySelector(Rl(t)))&&!g._p&&(w.instance=g,w.state.loading=5),Bn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bn.set(t,r),g||Zb(d,t,r,w.state))),n&&l===null)throw Error(o(528,""));return w}if(n&&l!==null)throw Error(o(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=jo(r),r=dr(d).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Eo(t){return'href="'+an(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function mm(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Zb(t,n,r,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Dt(n,"link",r),ht(n),t.head.appendChild(n))}function jo(t){return'[src="'+an(t)+'"]'}function Dl(t){return"script[async]"+t}function vm(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+an(r.href)+'"]');if(l)return n.instance=l,ht(l),l;var d=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ht(l),Dt(l,"style",d),Gc(l,r.precedence,t),n.instance=l;case"stylesheet":d=Eo(r.href);var g=t.querySelector(Rl(d));if(g)return n.state.loading|=4,n.instance=g,ht(g),g;l=mm(r),(d=Bn.get(d))&&Kf(l,d),g=(t.ownerDocument||t).createElement("link"),ht(g);var w=g;return w._p=new Promise(function(j,H){w.onload=j,w.onerror=H}),Dt(g,"link",l),n.state.loading|=4,Gc(g,r.precedence,t),n.instance=g;case"script":return g=jo(r.src),(d=t.querySelector(Dl(g)))?(n.instance=d,ht(d),d):(l=r,(d=Bn.get(g))&&(l=v({},r),Jf(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),ht(d),Dt(d,"link",l),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Gc(l,r.precedence,t));return n.instance}function Gc(t,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,g=d,w=0;w<l.length;w++){var j=l[w];if(j.dataset.precedence===n)g=j;else if(g!==d)break}g?g.parentNode.insertBefore(t,g.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var qc=null;function xm(t,n,r){if(qc===null){var l=new Map,d=qc=new Map;d.set(r,l)}else d=qc,l=d.get(r),l||(l=new Map,d.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var g=r[d];if(!(g[Kr]||g[bt]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(n)||"";w=t+w;var j=l.get(w);j?j.push(g):l.set(w,[g])}}return l}function ym(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Xb(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Qb(t,n,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=Eo(l.href),g=n.querySelector(Rl(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Pc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=g,ht(g);return}g=n.ownerDocument||n,l=mm(l),(d=Bn.get(d))&&Kf(l,d),g=g.createElement("link"),ht(g);var w=g;w._p=new Promise(function(j,H){w.onload=j,w.onerror=H}),Dt(g,"link",l),r.instance=g}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Pc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var eh=0;function Kb(t,n){return t.stylesheets&&t.count===0&&Wc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend){var g=t.unsuspend;t.unsuspend=null,g()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*zb());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend)){var g=t.unsuspend;t.unsuspend=null,g()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Wc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(Jb,t),Fc=null,Pc.call(t))}function Jb(t,n){if(!(n.state.loading&4)){var r=Fc.get(t);if(r)var l=r.get(null);else{r=new Map,Fc.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var w=d[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(r.set(w.dataset.precedence,w),l=w)}l&&r.set(null,l)}d=n.instance,w=d.getAttribute("data-precedence"),g=r.get(w)||l,g===l&&r.set(null,d),r.set(w,d),this.count++,l=Pc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),g?g.parentNode.insertBefore(d,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var _l={$$typeof:_,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function e3(t,n,r,l,d,g,w,j,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.hiddenUpdates=Oa(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function wm(t,n,r,l,d,g,w,j,H,X,ie,ce){return t=new e3(t,n,r,w,H,X,ie,ce,j),n=1,g===!0&&(n|=24),g=bn(3,null,null,n),t.current=g,g.stateNode=t,n=zd(),n.refCount++,t.pooledCache=n,n.refCount++,g.memoizedState={element:l,isDehydrated:r,cache:n},_d(g),t}function Sm(t){return t?(t=no,t):no}function Cm(t,n,r,l,d,g){d=Sm(d),l.context===null?l.context=d:l.pendingContext=d,l=wr(n),l.payload={element:r},g=g===void 0?null:g,g!==null&&(l.callback=g),r=Sr(t,l,n),r!==null&&(dn(r,t,n),gl(r,t,n))}function km(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function th(t,n){km(t,n),(t=t.alternate)&&km(t,n)}function Em(t){if(t.tag===13||t.tag===31){var n=oi(t,67108864);n!==null&&dn(n,t,67108864),th(t,67108864)}}function jm(t){if(t.tag===13||t.tag===31){var n=En();n=Ii(n);var r=oi(t,n);r!==null&&dn(r,t,n),th(t,n)}}var Vc=!0;function t3(t,n,r,l){var d=D.T;D.T=null;var g=G.p;try{G.p=2,nh(t,n,r,l)}finally{G.p=g,D.T=d}}function n3(t,n,r,l){var d=D.T;D.T=null;var g=G.p;try{G.p=8,nh(t,n,r,l)}finally{G.p=g,D.T=d}}function nh(t,n,r,l){if(Vc){var d=ah(l);if(d===null)Gf(t,n,l,Yc,r),Mm(t,l);else if(r3(d,t,n,r,l))l.stopPropagation();else if(Mm(t,l),n&4&&-1<a3.indexOf(t)){for(;d!==null;){var g=ur(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=Pn(g.pendingLanes);if(w!==0){var j=g;for(j.pendingLanes|=2,j.entangledLanes|=2;w;){var H=1<<31-Pt(w);j.entanglements[1]|=H,w&=~H}pa(g),(Ie&6)===0&&(Oc=Jt()+500,Ol(0))}}break;case 31:case 13:j=oi(g,2),j!==null&&dn(j,g,2),zc(),th(g,2)}if(g=ah(l),g===null&&Gf(t,n,l,Yc,r),g===d)break;d=g}d!==null&&l.stopPropagation()}else Gf(t,n,l,null,r)}}function ah(t){return t=Vi(t),rh(t)}var Yc=null;function rh(t){if(Yc=null,t=nn(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=h(n),t!==null)return t;t=null}else if(r===31){if(t=p(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yc=t,null}function Tm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(td()){case zs:return 2;case Vr:return 8;case sr:case As:return 32;case gn:return 268435456;default:return 32}default:return 32}}var ih=!1,Ar=null,Rr=null,Dr=null,Nl=new Map,Hl=new Map,_r=[],a3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mm(t,n){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(n.pointerId)}}function Bl(t,n,r,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},n!==null&&(n=ur(n),n!==null&&Em(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function r3(t,n,r,l,d){switch(n){case"focusin":return Ar=Bl(Ar,t,n,r,l,d),!0;case"dragenter":return Rr=Bl(Rr,t,n,r,l,d),!0;case"mouseover":return Dr=Bl(Dr,t,n,r,l,d),!0;case"pointerover":var g=d.pointerId;return Nl.set(g,Bl(Nl.get(g)||null,t,n,r,l,d)),!0;case"gotpointercapture":return g=d.pointerId,Hl.set(g,Bl(Hl.get(g)||null,t,n,r,l,d)),!0}return!1}function Lm(t){var n=nn(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){t.blockedOn=n,Us(t.priority,function(){jm(r)});return}}else if(n===31){if(n=p(r),n!==null){t.blockedOn=n,Us(t.priority,function(){jm(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=ah(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Yn=l,r.target.dispatchEvent(l),Yn=null}else return n=ur(r),n!==null&&Em(n),t.blockedOn=r,!1;n.shift()}return!0}function Om(t,n,r){Zc(t)&&r.delete(n)}function i3(){ih=!1,Ar!==null&&Zc(Ar)&&(Ar=null),Rr!==null&&Zc(Rr)&&(Rr=null),Dr!==null&&Zc(Dr)&&(Dr=null),Nl.forEach(Om),Hl.forEach(Om)}function Xc(t,n){t.blockedOn===n&&(t.blockedOn=null,ih||(ih=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,i3)))}var Qc=null;function $m(t){Qc!==t&&(Qc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var n=0;n<t.length;n+=3){var r=t[n],l=t[n+1],d=t[n+2];if(typeof l!="function"){if(rh(l||r)===null)continue;break}var g=ur(r);g!==null&&(t.splice(n,3),n-=3,nf(g,{pending:!0,data:d,method:r.method,action:l},l,d))}}))}function To(t){function n(H){return Xc(H,t)}Ar!==null&&Xc(Ar,t),Rr!==null&&Xc(Rr,t),Dr!==null&&Xc(Dr,t),Nl.forEach(n),Hl.forEach(n);for(var r=0;r<_r.length;r++){var l=_r[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<_r.length&&(r=_r[0],r.blockedOn===null);)Lm(r),r.blockedOn===null&&_r.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var d=r[l],g=r[l+1],w=d[Ft]||null;if(typeof g=="function")w||$m(r);else if(w){var j=null;if(g&&g.hasAttribute("formAction")){if(d=g,w=g[Ft]||null)j=w.formAction;else if(rh(d)!==null)continue}else j=w.action;typeof j=="function"?r[l+1]=j:(r.splice(l,3),l-=3),$m(r)}}}function zm(){function t(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(w){return d=w})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function oh(t){this._internalRoot=t}Kc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var r=n.current,l=En();Cm(r,l,t,n,null,null)},Kc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cm(t.current,2,null,t,null,null),zc(),n[cr]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var n=sa();t={blockedOn:null,target:t,priority:n};for(var r=0;r<_r.length&&n!==0&&n<_r[r].priority;r++);_r.splice(r,0,t),r===0&&Lm(t)}};var Am=a.version;if(Am!=="19.2.4")throw Error(o(527,Am,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=x(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var o3={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{Yr=Jc.inject(o3),qt=Jc}catch{}}return Il.createRoot=function(t,n){if(!c(t))throw Error(o(299));var r=!1,l="",d=Up,g=Ip,w=Gp;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError)),n=wm(t,1,!1,null,null,r,l,null,d,g,w,zm),t[cr]=n.current,If(t),new oh(n)},Il.hydrateRoot=function(t,n,r){if(!c(t))throw Error(o(299));var l=!1,d="",g=Up,w=Ip,j=Gp,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(g=r.onUncaughtError),r.onCaughtError!==void 0&&(w=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),n=wm(t,1,!0,n,r??null,l,d,H,g,w,j,zm),n.context=Sm(null),r=n.current,l=En(),l=Ii(l),d=wr(l),d.callback=null,Sr(r,d,l),r=l,n.current.lanes=r,Xr(n,r),pa(n),t[cr]=n.current,If(t),new Kc(n)},Il.version="19.2.4",Il}var qm;function p3(){if(qm)return ch.exports;qm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),ch.exports=g3(),ch.exports}var m3=p3(),Lt=function(){return Lt=Object.assign||function(a){for(var i,o=1,c=arguments.length;o<c;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(a[u]=i[u])}return a},Lt.apply(this,arguments)};function Uo(e,a,i){if(i||arguments.length===2)for(var o=0,c=a.length,u;o<c;o++)(u||!(o in a))&&(u||(u=Array.prototype.slice.call(a,0,o)),u[o]=a[o]);return e.concat(u||Array.prototype.slice.call(a))}var v3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt="-ms-",ls="-moz-",Ge="-webkit-",Xx="comm",Nu="rule",w0="decl",x3="@import",y3="@namespace",Qx="@keyframes",b3="@layer",Kx=Math.abs,S0=String.fromCharCode,Ph=Object.assign;function w3(e,a){return kt(e,0)^45?(((a<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}function Jx(e){return e.trim()}function Ja(e,a){return(e=a.exec(e))?e[0]:e}function Le(e,a,i){return e.replace(a,i)}function cu(e,a,i){return e.indexOf(a,i)}function kt(e,a){return e.charCodeAt(a)|0}function $i(e,a,i){return e.slice(a,i)}function na(e){return e.length}function ey(e){return e.length}function ts(e,a){return a.push(e),e}function S3(e,a){return e.map(a).join("")}function Pm(e,a){return e.filter(function(i){return!Ja(i,a)})}var Hu=1,Io=1,ty=0,Gn=0,yt=0,Fo="";function Bu(e,a,i,o,c,u,h,p){return{value:e,root:a,parent:i,type:o,props:c,children:u,line:Hu,column:Io,length:h,return:"",siblings:p}}function Br(e,a){return Ph(Bu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function Mo(e){for(;e.root;)e=Br(e.root,{children:[e]});ts(e,e.siblings)}function C3(){return yt}function k3(){return yt=Gn>0?kt(Fo,--Gn):0,Io--,yt===10&&(Io=1,Hu--),yt}function aa(){return yt=Gn<ty?kt(Fo,Gn++):0,Io++,yt===10&&(Io=1,Hu++),yt}function Ir(){return kt(Fo,Gn)}function uu(){return Gn}function Uu(e,a){return $i(Fo,e,a)}function gs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E3(e){return Hu=Io=1,ty=na(Fo=e),Gn=0,[]}function j3(e){return Fo="",e}function hh(e){return Jx(Uu(Gn-1,Fh(e===91?e+2:e===40?e+1:e)))}function T3(e){for(;(yt=Ir())&&yt<33;)aa();return gs(e)>2||gs(yt)>3?"":" "}function M3(e,a){for(;--a&&aa()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return Uu(e,uu()+(a<6&&Ir()==32&&aa()==32))}function Fh(e){for(;aa();)switch(yt){case e:return Gn;case 34:case 39:e!==34&&e!==39&&Fh(yt);break;case 40:e===41&&Fh(e);break;case 92:aa();break}return Gn}function L3(e,a){for(;aa()&&e+yt!==57;)if(e+yt===84&&Ir()===47)break;return"/*"+Uu(a,Gn-1)+"*"+S0(e===47?e:aa())}function O3(e){for(;!gs(Ir());)aa();return Uu(e,Gn)}function $3(e){return j3(du("",null,null,null,[""],e=E3(e),0,[0],e))}function du(e,a,i,o,c,u,h,p,m){for(var x=0,b=0,v=h,k=0,C=0,S=0,E=1,T=1,M=1,z=0,_="",B=c,N=u,U=o,L=_;T;)switch(S=z,z=aa()){case 40:if(S!=108&&kt(L,v-1)==58){cu(L+=Le(hh(z),"&","&\f"),"&\f",Kx(x?p[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:L+=hh(z);break;case 9:case 10:case 13:case 32:L+=T3(S);break;case 92:L+=M3(uu()-1,7);continue;case 47:switch(Ir()){case 42:case 47:ts(z3(L3(aa(),uu()),a,i,m),m),(gs(S||1)==5||gs(Ir()||1)==5)&&na(L)&&$i(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*E:p[x++]=na(L)*M;case 125*E:case 59:case 0:switch(z){case 0:case 125:T=0;case 59+b:M==-1&&(L=Le(L,/\f/g,"")),C>0&&(na(L)-v||E===0&&S===47)&&ts(C>32?Wm(L+";",o,i,v-1,m):Wm(Le(L," ","")+";",o,i,v-2,m),m);break;case 59:L+=";";default:if(ts(U=Fm(L,a,i,x,b,c,p,_,B=[],N=[],v,u),u),z===123)if(b===0)du(L,a,U,U,B,u,v,p,N);else{switch(k){case 99:if(kt(L,3)===110)break;case 108:if(kt(L,2)===97)break;default:b=0;case 100:case 109:case 115:}b?du(e,U,U,o&&ts(Fm(e,U,U,0,0,c,p,_,c,B=[],v,N),N),c,N,v,p,o?B:N):du(L,U,U,U,[""],N,0,p,N)}}x=b=C=0,E=M=1,_=L="",v=h;break;case 58:v=1+na(L),C=S;default:if(E<1){if(z==123)--E;else if(z==125&&E++==0&&k3()==125)continue}switch(L+=S0(z),z*E){case 38:M=b>0?1:(L+="\f",-1);break;case 44:p[x++]=(na(L)-1)*M,M=1;break;case 64:Ir()===45&&(L+=hh(aa())),k=Ir(),b=v=na(_=L+=O3(uu())),z++;break;case 45:S===45&&na(L)==2&&(E=0)}}return u}function Fm(e,a,i,o,c,u,h,p,m,x,b,v){for(var k=c-1,C=c===0?u:[""],S=ey(C),E=0,T=0,M=0;E<o;++E)for(var z=0,_=$i(e,k+1,k=Kx(T=h[E])),B=e;z<S;++z)(B=Jx(T>0?C[z]+" "+_:Le(_,/&\f/g,C[z])))&&(m[M++]=B);return Bu(e,a,i,c===0?Nu:p,m,x,b,v)}function z3(e,a,i,o){return Bu(e,a,i,Xx,S0(C3()),$i(e,2,-2),0,o)}function Wm(e,a,i,o,c){return Bu(e,a,i,w0,$i(e,0,o),$i(e,o+1,-1),o,c)}function ny(e,a,i){switch(w3(e,a)){case 5103:return Ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ge+e+e;case 4855:return Ge+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ls+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+e+ls+e+tt+e+e;case 5936:switch(kt(e,a+11)){case 114:return Ge+e+tt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ge+e+tt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ge+e+tt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ge+e+tt+e+e;case 6165:return Ge+e+tt+"flex-"+e+e;case 5187:return Ge+e+Le(e,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+tt+"flex-$1$2")+e;case 5443:return Ge+e+tt+"flex-item-"+Le(e,/flex-|-self/g,"")+(Ja(e,/flex-|baseline/)?"":tt+"grid-row-"+Le(e,/flex-|-self/g,""))+e;case 4675:return Ge+e+tt+"flex-line-pack"+Le(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ge+e+tt+Le(e,"shrink","negative")+e;case 5292:return Ge+e+tt+Le(e,"basis","preferred-size")+e;case 6060:return Ge+"box-"+Le(e,"-grow","")+Ge+e+tt+Le(e,"grow","positive")+e;case 4554:return Ge+Le(e,/([^-])(transform)/g,"$1"+Ge+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+tt+"flex-pack:$3"),/space-between/,"justify")+Ge+e+e;case 4200:if(!Ja(e,/flex-|baseline/))return tt+"grid-column-align"+$i(e,a)+e;break;case 2592:case 3360:return tt+Le(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(o,c){return a=c,Ja(o.props,/grid-\w+-end/)})?~cu(e+(i=i[a].value),"span",0)?e:tt+Le(e,"-start","")+e+tt+"grid-row-span:"+(~cu(i,"span",0)?Ja(i,/\d+/):+Ja(i,/\d+/)-+Ja(e,/\d+/))+";":tt+Le(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(o){return Ja(o.props,/grid-\w+-start/)})?e:tt+Le(Le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(na(e)-1-a>6)switch(kt(e,a+1)){case 109:if(kt(e,a+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+ls+(kt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~cu(e,"stretch",0)?ny(Le(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,u,h,p,m,x){return tt+c+":"+u+x+(h?tt+c+"-span:"+(p?m:+m-+u)+x:"")+e});case 4949:if(kt(e,a+6)===121)return Le(e,":",":"+Ge)+e;break;case 6444:switch(kt(e,kt(e,14)===45?18:11)){case 120:return Le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(kt(e,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+tt+"$2box$3")+e;case 100:return Le(e,":",":"+tt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(e,"scroll-","scroll-snap-")+e}return e}function yu(e,a){for(var i="",o=0;o<e.length;o++)i+=a(e[o],o,e,a)||"";return i}function A3(e,a,i,o){switch(e.type){case b3:if(e.children.length)break;case x3:case y3:case w0:return e.return=e.return||e.value;case Xx:return"";case Qx:return e.return=e.value+"{"+yu(e.children,o)+"}";case Nu:if(!na(e.value=e.props.join(",")))return""}return na(i=yu(e.children,o))?e.return=e.value+"{"+i+"}":""}function R3(e){var a=ey(e);return function(i,o,c,u){for(var h="",p=0;p<a;p++)h+=e[p](i,o,c,u)||"";return h}}function D3(e){return function(a){a.root||(a=a.return)&&e(a)}}function _3(e,a,i,o){if(e.length>-1&&!e.return)switch(e.type){case w0:e.return=ny(e.value,e.length,i);return;case Qx:return yu([Br(e,{value:Le(e.value,"@","@"+Ge)})],o);case Nu:if(e.length)return S3(i=e.props,function(c){switch(Ja(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mo(Br(e,{props:[Le(c,/:(read-\w+)/,":"+ls+"$1")]})),Mo(Br(e,{props:[c]})),Ph(e,{props:Pm(i,o)});break;case"::placeholder":Mo(Br(e,{props:[Le(c,/:(plac\w+)/,":"+Ge+"input-$1")]})),Mo(Br(e,{props:[Le(c,/:(plac\w+)/,":"+ls+"$1")]})),Mo(Br(e,{props:[Le(c,/:(plac\w+)/,tt+"input-$1")]})),Mo(Br(e,{props:[c]})),Ph(e,{props:Pm(i,o)});break}return""})}}var Tn={},Go=typeof process<"u"&&Tn!==void 0&&(Tn.REACT_APP_SC_ATTR||Tn.SC_ATTR)||"data-styled",ay="active",ry="data-styled-version",Iu="6.3.12",C0=`/*!sc*/
`,ss=typeof window<"u"&&typeof document<"u",N3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==""?Tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.SC_DISABLE_SPEEDY!==void 0&&Tn.SC_DISABLE_SPEEDY!==""&&Tn.SC_DISABLE_SPEEDY!=="false"&&Tn.SC_DISABLE_SPEEDY),H3={};function zi(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var fu=new Map,bu=new Map,hu=1,ns=function(e){if(fu.has(e))return fu.get(e);for(;bu.has(hu);)hu++;var a=hu++;return fu.set(e,a),bu.set(a,e),a},B3=function(e,a){hu=a+1,fu.set(e,a),bu.set(a,e)},k0=Object.freeze([]),qo=Object.freeze({});function iy(e,a,i){return i===void 0&&(i=qo),e.theme!==i.theme&&e.theme||a||i.theme}var oy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),U3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I3=/(^-|-$)/g;function Vm(e){return e.replace(U3,"-").replace(I3,"")}var G3=/(a)(d)/gi,Ym=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wh(e){var a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=Ym(a%52)+i;return(Ym(a%52)+i).replace(G3,"$1-$2")}var gh,Ei=function(e,a){for(var i=a.length;i;)e=33*e^a.charCodeAt(--i);return e},ly=function(e){return Ei(5381,e)};function E0(e){return Wh(ly(e)>>>0)}function q3(e){return e.displayName||e.name||"Component"}function ph(e){return typeof e=="string"&&!0}var sy=typeof Symbol=="function"&&Symbol.for,cy=sy?Symbol.for("react.memo"):60115,P3=sy?Symbol.for("react.forward_ref"):60112,F3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V3=((gh={})[P3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gh[cy]=uy,gh);function Zm(e){return("type"in(a=e)&&a.type.$$typeof)===cy?uy:"$$typeof"in e?V3[e.$$typeof]:F3;var a}var Y3=Object.defineProperty,Z3=Object.getOwnPropertyNames,Xm=Object.getOwnPropertySymbols,X3=Object.getOwnPropertyDescriptor,Q3=Object.getPrototypeOf,Qm=Object.prototype;function dy(e,a,i){if(typeof a!="string"){if(Qm){var o=Q3(a);o&&o!==Qm&&dy(e,o,i)}var c=Z3(a);Xm&&(c=c.concat(Xm(a)));for(var u=Zm(e),h=Zm(a),p=0;p<c.length;++p){var m=c[p];if(!(m in W3||i&&i[m]||h&&m in h||u&&m in u)){var x=X3(a,m);try{Y3(e,m,x)}catch{}}}}return e}function Ai(e){return typeof e=="function"}function j0(e){return typeof e=="object"&&"styledComponentId"in e}function Mi(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function wu(e,a){return e.join("")}function ps(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Vh(e,a,i){if(i===void 0&&(i=!1),!i&&!ps(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)e[o]=Vh(e[o],a[o]);else if(ps(a))for(var o in a)e[o]=Vh(e[o],a[o]);return e}function T0(e,a){Object.defineProperty(e,"toString",{value:a})}var K3=(function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(a){if(a===this._cGroup)return this._cIndex;var i=this._cIndex;if(a>this._cGroup)for(var o=this._cGroup;o<a;o++)i+=this.groupSizes[o];else for(o=this._cGroup-1;o>=a;o--)i-=this.groupSizes[o];return this._cGroup=a,this._cIndex=i,i},e.prototype.insertRules=function(a,i){if(a>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,u=c;a>=u;)if((u<<=1)<0)throw zi(16,"".concat(a));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var h=c;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(a+1),m=0,x=(h=0,i.length);h<x;h++)this.tag.insertRule(p,i[h])&&(this.groupSizes[a]++,p++,m++);m>0&&this._cGroup>a&&(this._cIndex+=m)},e.prototype.clearGroup=function(a){if(a<this.length){var i=this.groupSizes[a],o=this.indexOfGroup(a),c=o+i;this.groupSizes[a]=0;for(var u=o;u<c;u++)this.tag.deleteRule(o);i>0&&this._cGroup>a&&(this._cIndex-=i)}},e.prototype.getGroup=function(a){var i="";if(a>=this.length||this.groupSizes[a]===0)return i;for(var o=this.groupSizes[a],c=this.indexOfGroup(a),u=c+o,h=c;h<u;h++)i+=this.tag.getRule(h)+C0;return i},e})(),J3="style[".concat(Go,"][").concat(ry,'="').concat(Iu,'"]'),ew=new RegExp("^".concat(Go,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Km=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Yh=function(e){if(!e)return document;if(Km(e))return e;if("getRootNode"in e){var a=e.getRootNode();if(Km(a))return a}return document},tw=function(e,a,i){for(var o,c=i.split(","),u=0,h=c.length;u<h;u++)(o=c[u])&&e.registerName(a,o)},nw=function(e,a){for(var i,o=((i=a.textContent)!==null&&i!==void 0?i:"").split(C0),c=[],u=0,h=o.length;u<h;u++){var p=o[u].trim();if(p){var m=p.match(ew);if(m){var x=0|parseInt(m[1],10),b=m[2];x!==0&&(B3(b,x),tw(e,b,m[3]),e.getTag().insertRules(x,c)),c.length=0}else c.push(p)}}},mh=function(e){for(var a=Yh(e.options.target).querySelectorAll(J3),i=0,o=a.length;i<o;i++){var c=a[i];c&&c.getAttribute(Go)!==ay&&(nw(e,c),c.parentNode&&c.parentNode.removeChild(c))}};function aw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fy=function(e){var a=document.head,i=e||a,o=document.createElement("style"),c=(function(p){var m=Array.from(p.querySelectorAll("style[".concat(Go,"]")));return m[m.length-1]})(i),u=c!==void 0?c.nextSibling:null;o.setAttribute(Go,ay),o.setAttribute(ry,Iu);var h=aw();return h&&o.setAttribute("nonce",h),i.insertBefore(o,u),o},rw=(function(){function e(a){this.element=fy(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(i){var o;if(i.sheet)return i.sheet;for(var c=(o=i.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets,u=0,h=c.length;u<h;u++){var p=c[u];if(p.ownerNode===i)return p}throw zi(17)})(this.element),this.length=0}return e.prototype.insertRule=function(a,i){try{return this.sheet.insertRule(i,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var i=this.sheet.cssRules[a];return i&&i.cssText?i.cssText:""},e})(),iw=(function(){function e(a){this.element=fy(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,i){if(a<=this.length&&a>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e})(),ow=(function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,i){return a<=this.length&&(a===this.length?this.rules.push(i):this.rules.splice(a,0,i),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e})(),Jm=ss,lw={isServer:!ss,useCSSOMInjection:!N3},Su=(function(){function e(a,i,o){a===void 0&&(a=qo),i===void 0&&(i={});var c=this;this.options=Lt(Lt({},lw),a),this.gs=i,this.names=new Map(o),this.server=!!a.isServer,!this.server&&ss&&Jm&&(Jm=!1,mh(this)),T0(this,function(){return(function(u){for(var h=u.getTag(),p=h.length,m="",x=function(v){var k=(function(M){return bu.get(M)})(v);if(k===void 0)return"continue";var C=u.names.get(k);if(C===void 0||!C.size)return"continue";var S=h.getGroup(v);if(S.length===0)return"continue";var E=Go+".g"+v+'[id="'+k+'"]',T="";C.forEach(function(M){M.length>0&&(T+=M+",")}),m+=S+E+'{content:"'+T+'"}'+C0},b=0;b<p;b++)x(b);return m})(c)})}return e.registerId=function(a){return ns(a)},e.prototype.rehydrate=function(){!this.server&&ss&&mh(this)},e.prototype.reconstructWithOptions=function(a,i){i===void 0&&(i=!0);var o=new e(Lt(Lt({},this.options),a),this.gs,i&&this.names||void 0);return!this.server&&ss&&a.target!==this.options.target&&Yh(this.options.target)!==Yh(a.target)&&mh(o),o},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(i){var o=i.useCSSOMInjection,c=i.target;return i.isServer?new ow(c):o?new rw(c):new iw(c)})(this.options),new K3(a)));var a},e.prototype.hasNameForId=function(a,i){var o,c;return(c=(o=this.names.get(a))===null||o===void 0?void 0:o.has(i))!==null&&c!==void 0&&c},e.prototype.registerName=function(a,i){ns(a);var o=this.names.get(a);o?o.add(i):this.names.set(a,new Set([i]))},e.prototype.insertRules=function(a,i,o){this.registerName(a,i),this.getTag().insertRules(ns(a),o)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(ns(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e})();function sw(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in v3||e.startsWith("--")?String(a).trim():"".concat(a,"px")}var cw=function(e){return e>="A"&&e<="Z"};function ev(e){for(var a="",i=0;i<e.length;i++){var o=e[i];if(i===1&&o==="-"&&e[0]==="-")return e;cw(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var hy=Symbol.for("sc-keyframes");function uw(e){return typeof e=="object"&&e!==null&&hy in e}var gy=function(e){return e==null||e===!1||e===""},py=function(e){var a=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gy(o)&&(Array.isArray(o)&&o.isCss||Ai(o)?a.push("".concat(ev(i),":"),o,";"):ps(o)?a.push.apply(a,Uo(Uo(["".concat(i," {")],py(o),!1),["}"],!1)):a.push("".concat(ev(i),": ").concat(sw(i,o),";")))}return a};function Gr(e,a,i,o,c){if(c===void 0&&(c=[]),typeof e=="string")return e&&c.push(e),c;if(gy(e))return c;if(j0(e))return c.push(".".concat(e.styledComponentId)),c;if(Ai(e)){if(!Ai(h=e)||h.prototype&&h.prototype.isReactComponent||!a)return c.push(e),c;var u=e(a);return Gr(u,a,i,o,c)}var h;if(uw(e))return i?(e.inject(i,o),c.push(e.getName(o))):c.push(e),c;if(ps(e)){for(var p=py(e),m=0;m<p.length;m++)c.push(p[m]);return c}if(!Array.isArray(e))return c.push(e.toString()),c;for(m=0;m<e.length;m++)Gr(e[m],a,i,o,c);return c}function my(e){for(var a=0;a<e.length;a+=1){var i=e[a];if(Ai(i)&&!j0(i))return!1}return!0}var dw=ly(Iu),fw=(function(){function e(a,i,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&my(a),this.componentId=i,this.baseHash=Ei(dw,i),this.baseStyle=o,Su.registerId(i)}return e.prototype.generateAndInjectStyles=function(a,i,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,o).className:"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))c=Mi(c,this.staticRulesId);else{var u=wu(Gr(this.rules,a,i,o)),h=Wh(Ei(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,h)){var p=o(u,".".concat(h),void 0,this.componentId);i.insertRules(this.componentId,h,p)}c=Mi(c,h),this.staticRulesId=h}else{for(var m=Ei(this.baseHash,o.hash),x="",b=0;b<this.rules.length;b++){var v=this.rules[b];if(typeof v=="string")x+=v;else if(v){var k=wu(Gr(v,a,i,o));m=Ei(Ei(m,String(b)),k),x+=k}}if(x){var C=Wh(m>>>0);if(!i.hasNameForId(this.componentId,C)){var S=o(x,".".concat(C),void 0,this.componentId);i.insertRules(this.componentId,C,S)}c=Mi(c,C)}}return{className:c,css:typeof window>"u"?i.getTag().getGroup(ns(this.componentId)):""}},e})(),hw=/&/g,er=47,ji=42;function tv(e){if(e.indexOf("}")===-1)return!1;for(var a=e.length,i=0,o=0,c=!1,u=0;u<a;u++){var h=e.charCodeAt(u);if(o!==0||c||h!==er||e.charCodeAt(u+1)!==ji)if(c)h===ji&&e.charCodeAt(u+1)===er&&(c=!1,u++);else if(h!==34&&h!==39||u!==0&&e.charCodeAt(u-1)===92){if(o===0){if(h===123)i++;else if(h===125&&--i<0)return!0}}else o===0?o=h:o===h&&(o=0);else c=!0,u++}return i!==0||o!==0}function vy(e,a){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(a," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(a," ")),i.props=i.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=vy(i.children,a)),i})}function gw(e){var a,i,o,c=qo,u=c.options,h=u===void 0?qo:u,p=c.plugins,m=p===void 0?k0:p,x=function(S,E,T){return T.startsWith(i)&&T.endsWith(i)&&T.replaceAll(i,"").length>0?".".concat(a):S},b=m.slice();b.push(function(S){S.type===Nu&&S.value.includes("&")&&(o||(o=new RegExp("\\".concat(i,"\\b"),"g")),S.props[0]=S.props[0].replace(hw,i).replace(o,x))}),h.prefix&&b.push(_3),b.push(A3);var v=[],k=R3(b.concat(D3(function(S){return v.push(S)}))),C=function(S,E,T,M){E===void 0&&(E=""),T===void 0&&(T=""),M===void 0&&(M="&"),a=M,i=E,o=void 0;var z=(function(B){if(!tv(B))return B;for(var N=B.length,U="",L=0,R=0,F=0,J=!1,q=0;q<N;q++){var ee=B.charCodeAt(q);if(F!==0||J||ee!==er||B.charCodeAt(q+1)!==ji)if(J)ee===ji&&B.charCodeAt(q+1)===er&&(J=!1,q++);else if(ee!==34&&ee!==39||q!==0&&B.charCodeAt(q-1)===92){if(F===0)if(ee===123)R++;else if(ee===125){if(--R<0){for(var re=q+1;re<N;){var Q=B.charCodeAt(re);if(Q===59||Q===10)break;re++}re<N&&B.charCodeAt(re)===59&&re++,R=0,q=re-1,L=re;continue}R===0&&(U+=B.substring(L,q+1),L=q+1)}else ee===59&&R===0&&(U+=B.substring(L,q+1),L=q+1)}else F===0?F=ee:F===ee&&(F=0);else J=!0,q++}if(L<N){var ne=B.substring(L);tv(ne)||(U+=ne)}return U})((function(B){if(B.indexOf("//")===-1)return B;for(var N=B.length,U=[],L=0,R=0,F=0,J=0;R<N;){var q=B.charCodeAt(R);if(q!==34&&q!==39||R!==0&&B.charCodeAt(R-1)===92)if(F===0)if(q===er&&R+1<N&&B.charCodeAt(R+1)===ji){for(R+=2;R+1<N&&(B.charCodeAt(R)!==ji||B.charCodeAt(R+1)!==er);)R++;R+=2}else if(q===40&&R>=3&&(32|B.charCodeAt(R-1))==108&&(32|B.charCodeAt(R-2))==114&&(32|B.charCodeAt(R-3))==117)J=1,R++;else if(J>0)q===41?J--:q===40&&J++,R++;else if(q===ji&&R+1<N&&B.charCodeAt(R+1)===er)R>L&&U.push(B.substring(L,R)),L=R+=2;else if(q===er&&R+1<N&&B.charCodeAt(R+1)===er){for(R>L&&U.push(B.substring(L,R));R<N&&B.charCodeAt(R)!==10;)R++;L=R}else R++;else R++;else F===0?F=q:F===q&&(F=0),R++}return L===0?B:(L<N&&U.push(B.substring(L)),U.join(""))})(S)),_=$3(T||E?"".concat(T," ").concat(E," { ").concat(z," }"):z);return h.namespace&&(_=vy(_,h.namespace)),v=[],yu(_,k),v};return C.hash=m.length?m.reduce(function(S,E){return E.name||zi(15),Ei(S,E.name)},5381).toString():"",C}var pw=new Su,Zh=gw(),xy=st.createContext({shouldForwardProp:void 0,styleSheet:pw,stylis:Zh});xy.Consumer;st.createContext(void 0);function Xh(){return st.useContext(xy)}var ms=st.createContext(void 0);ms.Consumer;function Gu(e){var a=st.useContext(ms),i=st.useMemo(function(){return(function(o,c){if(!o)throw zi(14);if(Ai(o)){var u=o(c);return u}if(Array.isArray(o)||typeof o!="object")throw zi(8);return c?Lt(Lt({},c),o):o})(e.theme,a)},[e.theme,a]);return e.children?st.createElement(ms.Provider,{value:i},e.children):null}var vh={};function mw(e,a,i){var o=j0(e),c=e,u=!ph(e),h=a.attrs,p=h===void 0?k0:h,m=a.componentId,x=m===void 0?(function(B,N){var U=typeof B!="string"?"sc":Vm(B);vh[U]=(vh[U]||0)+1;var L="".concat(U,"-").concat(E0(Iu+U+vh[U]));return N?"".concat(N,"-").concat(L):L})(a.displayName,a.parentComponentId):m,b=a.displayName,v=b===void 0?(function(B){return ph(B)?"styled.".concat(B):"Styled(".concat(q3(B),")")})(e):b,k=a.displayName&&a.componentId?"".concat(Vm(a.displayName),"-").concat(a.componentId):a.componentId||x,C=o&&c.attrs?c.attrs.concat(p).filter(Boolean):p,S=a.shouldForwardProp;if(o&&c.shouldForwardProp){var E=c.shouldForwardProp;if(a.shouldForwardProp){var T=a.shouldForwardProp;S=function(B,N){return E(B,N)&&T(B,N)}}else S=E}var M=new fw(i,k,o?c.componentStyle:void 0);function z(B,N){return(function(U,L,R){var F=U.attrs,J=U.componentStyle,q=U.defaultProps,ee=U.foldedComponentIds,re=U.styledComponentId,Q=U.target,ne=st.useContext(ms),D=Xh(),G=U.shouldForwardProp||D.shouldForwardProp,ae=iy(L,ne,q)||qo,oe=(function(me,fe,ye){for(var ve,_e=Lt(Lt({},fe),{className:void 0,theme:ye}),Ot=0;Ot<me.length;Ot+=1){var jt=Ai(ve=me[Ot])?ve(_e):ve;for(var It in jt)It==="className"?_e.className=Mi(_e.className,jt[It]):It==="style"?_e.style=Lt(Lt({},_e.style),jt[It]):It in fe&&fe[It]===void 0||(_e[It]=jt[It])}return"className"in fe&&typeof fe.className=="string"&&(_e.className=Mi(_e.className,fe.className)),_e})(F,L,ae),de=oe.as||Q,O={};for(var W in oe)oe[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&oe.theme===ae||(W==="forwardedAs"?O.as=oe.forwardedAs:G&&!G(W,de)||(O[W]=oe[W]));var Y=(function(me,fe){var ye=Xh(),ve=me.generateAndInjectStyles(fe,ye.styleSheet,ye.stylis);return ve})(J,oe),se=Y.className,he=Mi(ee,re);return se&&(he+=" "+se),oe.className&&(he+=" "+oe.className),O[ph(de)&&!oy.has(de)?"class":"className"]=he,R&&(O.ref=R),f.createElement(de,O)})(_,B,N)}z.displayName=v;var _=st.forwardRef(z);return _.attrs=C,_.componentStyle=M,_.displayName=v,_.shouldForwardProp=S,_.foldedComponentIds=o?Mi(c.foldedComponentIds,c.styledComponentId):"",_.styledComponentId=k,_.target=o?c.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=o?(function(N){for(var U=[],L=1;L<arguments.length;L++)U[L-1]=arguments[L];for(var R=0,F=U;R<F.length;R++)Vh(N,F[R],!0);return N})({},c.defaultProps,B):B}}),T0(_,function(){return".".concat(_.styledComponentId)}),u&&dy(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function nv(e,a){for(var i=[e[0]],o=0,c=a.length;o<c;o+=1)i.push(a[o],e[o+1]);return i}var av=function(e){return Object.assign(e,{isCss:!0})};function A(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];if(Ai(e)||ps(e))return av(Gr(nv(k0,Uo([e],a,!0))));var o=e;return a.length===0&&o.length===1&&typeof o[0]=="string"?Gr(o):av(Gr(nv(o,a)))}function Qh(e,a,i){if(i===void 0&&(i=qo),!a)throw zi(1,a);var o=function(c){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return e(a,i,A.apply(void 0,Uo([c],u,!1)))};return o.attrs=function(c){return Qh(e,a,Lt(Lt({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return Qh(e,a,Lt(Lt({},i),c))},o}var yy=function(e){return Qh(mw,e)},y=yy;oy.forEach(function(e){y[e]=yy(e)});var by,vw=(function(){function e(a,i){this.rules=a,this.componentId=i,this.isStatic=my(a),Su.registerId(this.componentId+1)}return e.prototype.createStyles=function(a,i,o,c){var u=c(wu(Gr(this.rules,i,o,c)),""),h=this.componentId+a;o.insertRules(h,h,u)},e.prototype.removeStyles=function(a,i){i.clearRules(this.componentId+a)},e.prototype.renderStyles=function(a,i,o,c){a>2&&Su.registerId(this.componentId+a);var u=this.componentId+a;this.isStatic?o.hasNameForId(u,u)||this.createStyles(a,i,o,c):(this.removeStyles(a,o),this.createStyles(a,i,o,c))},e})();function qu(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var o=A.apply(void 0,Uo([e],a,!1)),c="sc-global-".concat(E0(JSON.stringify(o))),u=new vw(o,c),h=new WeakMap,p=function(m){var x=Xh(),b=st.useContext(ms),v=h.get(x.styleSheet);return v===void 0&&(v=x.styleSheet.allocateGSInstance(c),h.set(x.styleSheet,v)),st.useLayoutEffect(function(){return x.styleSheet.server||(function(k,C,S,E,T){if(u.isStatic)u.renderStyles(k,H3,S,T);else{var M=Lt(Lt({},C),{theme:iy(C,E,p.defaultProps)});u.renderStyles(k,M,S,T)}})(v,m,x.styleSheet,b,x.stylis),function(){u.removeStyles(v,x.styleSheet)}},[v,m,x.styleSheet,b,x.stylis]),null};return st.memo(p)}var xw=(function(){function e(a,i){var o=this;this[by]=!0,this.inject=function(c,u){u===void 0&&(u=Zh);var h=o.name+u.hash;c.hasNameForId(o.id,h)||c.insertRules(o.id,h,u(o.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=i,T0(this,function(){throw zi(12,String(o.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=Zh),this.name+a.hash},e})();function Sa(e){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];var o=wu(A.apply(void 0,Uo([e],a,!1))),c=E0(o);return new xw(c,o)}by=hy;var yw=Object.defineProperty,bw=(e,a)=>{for(var i in a)yw(e,i,{get:a[i],enumerable:!0})},wy={};bw(wy,{ActionPause:()=>Sw,Add:()=>kw,Analyse:()=>jw,Back:()=>Mw,BigWarning:()=>Ow,Broken:()=>zw,Camera:()=>Rw,ClearField:()=>_w,Close:()=>Uw,CloseCompact:()=>Hw,Copy:()=>Gw,Critical:()=>Pw,Crop:()=>Ww,DarkMode:()=>Yw,DataRetention:()=>Xw,Date:()=>e4,DateTime:()=>Kw,Delete:()=>n4,Detection:()=>r4,DevicesFolder:()=>o4,DevicesLiveEndpoint:()=>s4,DevicesScorerCamera:()=>u4,DevicesScorerEdge:()=>f4,Down:()=>g4,Download:()=>x4,DownloadVideo:()=>m4,Edit:()=>b4,Exclamation:()=>S4,ExternalLink:()=>k4,FeatureLineUi:()=>j4,FeaturePtz:()=>M4,Fever:()=>O4,FileTypeImage:()=>z4,FilterAscending:()=>R4,FilterDescending:()=>_4,FilterEllipsis:()=>H4,FilterSorting:()=>U4,Forward:()=>G4,Gateway:()=>P4,GroupCollapse:()=>W4,GroupExpand:()=>Y4,Home:()=>X4,Information:()=>K4,Invalid:()=>e6,Language:()=>n6,LayoutGrid:()=>r6,LayoutList:()=>o6,Left:()=>s6,LightMode:()=>u6,Link:()=>f6,Location:()=>g6,Locked:()=>m6,Menu:()=>x6,MetaCategories:()=>b6,MetaEnabledState:()=>S6,MetaTags:()=>k6,MissingImage:()=>j6,MonitoringProfile:()=>M6,NoIcon:()=>O6,Notifications:()=>R6,NotificationsOff:()=>z6,PasswordHide:()=>_6,PasswordShow:()=>H6,Pinned:()=>U6,Play:()=>G6,Question:()=>P6,RecognitionPhoto:()=>W6,RecognitionProfile:()=>Y6,Required:()=>X6,RetryJob:()=>K6,Right:()=>e7,Search:()=>n7,Success:()=>r7,SwitchAccount:()=>o7,Temperature:()=>m7,TemperatureAmbient:()=>s7,TemperatureHigh:()=>u7,TemperatureLow:()=>f7,TemperatureNormal:()=>g7,Time:()=>x7,Unlocked:()=>b7,Up:()=>S7,Usage:()=>k7,UserProfile:()=>j7,ViewSettings:()=>M7,Warning:()=>O7,Zone:()=>z7});var ww=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{x:5.25,y:3.75,width:4.5,height:16.5,rx:1.5}),f.createElement("rect",{x:14.25,y:3.75,width:4.5,height:16.5,rx:1.5}))),Sw=ww,Cw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 7.5v9M7.5 12h9"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),kw=Cw,Ew=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 0 0 4 23.25h15.948a3 3 0 0 0 2.515-4.635L15.726 8.25ZM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3"}),f.createElement("path",{d:"M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 0 1-.375-.375"}),f.createElement("path",{d:"M7.1 19.5a.375.375 0 0 1-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 0 1-.375-.375"}),f.createElement("path",{d:"M10.1 16.5a.375.375 0 0 1-.375.375M15.726 3.75h-3M15.726 6.75h-3"}))),jw=Ew,Tw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M7.501 11.997h9m-5.25 3.75-3.75-3.75 3.75-3.75"}),f.createElement("circle",{cx:12.001,cy:11.997,r:10.5}))),Mw=Tw,Lw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V6"}),f.createElement("path",{d:"M1.28 13.281a1.811 1.811 0 0 1 0-2.561l9.44-9.439a1.81 1.81 0 0 1 2.56 0l9.44 9.439a1.811 1.811 0 0 1 0 2.561l-9.44 9.439a1.812 1.812 0 0 1-2.56 0l-9.44-9.439z"}))),Ow=Lw,$w=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m8.25 5.249-3-3m1.5 6h-1.5m6-4.5v-1.5m3 4.5h4.5a4.5 4.5 0 0 1 0 9h-4.5m-9.53-4.334-2.652 2.652a4.5 4.5 0 0 0 6.364 6.364l2.652-2.652",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),zw=$w,Aw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 12v3.333a2.848 2.848 0 0 1-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 0 1-.75-.75V4.5A4.5 4.5 0 0 1 5.25 0h16.5a1.5 1.5 0 0 1 1.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0 1 15 9z"}),f.createElement("path",{d:"M20.25 5.084V10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a3 3 0 0 1-3-3h0m21-2.25v3"}))),Rw=Aw,Dw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:11.998,cy:12,r:11.25}),f.createElement("path",{d:"m7.498 16.5 8.999-9M16.498 16.5l-9.001-9"}))),_w=Dw,Nw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m5 18.999 14-14M19 18.999l-14-14"}))),Hw=Nw,Bw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m.75 23.249 22.5-22.5M23.25 23.249.75.749"}))),Uw=Bw,Iw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M4.5 17.5A1.5 1.5 0 0 1 3 16V2.5A1.5 1.5 0 0 1 4.5 1H15a1.5 1.5 0 0 1 1.5 1.5"}),f.createElement("rect",{x:8,y:6,width:13.5,height:16.5,rx:1.5}))),Gw=Iw,qw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 18.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3v-7.5"}),f.createElement("path",{d:"M13.621 1.76a1.806 1.806 0 0 0-3.242 0L.906 21.058a1.52 1.52 0 0 0 1.366 2.192h19.456a1.52 1.52 0 0 0 1.366-2.192L13.621 1.76z"}))),Pw=qw,Fw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M21.75 19.125h1.5M5.25 1.875v17.25h13.5M2.25 5.625H.75M14.25 5.625h-9M18.75 22.875v-13.5M5.25 19.125l2.121-2.121M9.493 14.882l2.121-2.121M13.735 10.64l2.122-2.122M17.978 6.397l2.121-2.121M22.221 2.154l1.029-1.029"}))),Ww=Fw,Vw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z"}),f.createElement("path",{d:"M12.046 6.797a5.194 5.194 0 0 0-2.25.525 5.222 5.222 0 0 1 0 9.45 5.243 5.243 0 1 0 2.25-9.975h0Z"}))),Yw=Vw,Zw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 0 0-6.868-1.377 7.5 7.5 0 0 0-8.3-6.057 7.5 7.5 0 0 0 .938 14.941"}))),Xw=Zw,Qw=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 17.25h-6a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3"}),f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M19.902 17.25H17.25v-2.651"}))),Kw=Qw,Jw=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{x:.752,y:3.75,width:22.5,height:19.5,rx:1.5}),f.createElement("path",{d:"M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"}))),e4=Jw,t4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5ZM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5Z"}))),n4=t4,a4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,vectorEffect:"non-scaling-stroke"})),r4=a4,i4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M20.25 11.75v-3a1.5 1.5 0 0 0-1.5-1.5H8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v16.3a1.7 1.7 0 0 0 3.336.438l2.351-9.657a1.5 1.5 0 0 1 1.442-1.081H21.75a1.5 1.5 0 0 1 1.45 1.886l-2.2 9a1.5 1.5 0 0 1-1.45 1.114H2.447",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),o4=i4,l4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6.75 21.368h10.5m-7.312-6.75-1.688 6.75m5.813-6.75 1.687 6.75m7.5-12.75a6 6 0 0 1-6 6H6.75a6 6 0 1 1 0-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 0 1 1.757 4.243z"}),f.createElement("circle",{cx:12,cy:8.618,r:3}))),s4=l4,c4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 0 1-.375-.375m.75.001a.375.375 0 0 1-.375.375m6-7.552a9.54 9.54 0 0 0-12 0m2.5 3.615a5.568 5.568 0 0 1 7 0M17.25 3.75l-16.5 3v-3a3 3 0 0 1 3-3h13.786a.75.75 0 0 1 .671 1.085L17.25 3.75z"}),f.createElement("path",{d:"M15.75 4.023V7.5a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 2.25 7.5V6.477m4.5 3.273v1.5a3 3 0 0 1-3 3h-3m0-1.5v3m18-10.5v3"}))),u4=c4,d4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M1.25.75h11a.5.5 0 0 1 .5.5v3a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3a.5.5 0 0 1 .5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 0 1-.375-.375m.75 0a.375.375 0 0 1-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 0 0 1.5 1.5h1.5m3 0h3"}),f.createElement("rect",{width:7.5,height:12,x:15.75,y:11.25,rx:1.5}),f.createElement("path",{d:"M19.5 19.875h0m.375.375a.375.375 0 0 0-.375-.375m0 .75a.375.375 0 0 0 .375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 0 0-.375.375M17.379 7.629a3 3 0 0 1 4.242 0M16.5 4.451a6.768 6.768 0 0 1 6 0m-20.486.78a5.25 5.25 0 1 0 9.472 0"}))),f4=d4,h4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M23.25 6.311 12.53 17.03a.751.751 0 0 1-1.06 0L.75 6.311",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),g4=h4,p4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:17.25,r:6}),f.createElement("path",{d:"M17.25 14.25v6M17.25 20.25 15 18M17.25 20.25 19.5 18M8.25 20.25h-6a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.25"}),f.createElement("path",{d:"M6.241 12.678a.685.685 0 0 1-.991-.613v-4.63a.685.685 0 0 1 .991-.613l4.631 2.316a.684.684 0 0 1 0 1.224l-4.631 2.316Z"}))),m4=p4,v4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M5.251 11.25 12 18l6.75-6.75H15V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5v6.75H5.251zm18 8.25v3a1.5 1.5 0 0 1-1.5 1.5h-19.5a1.5 1.5 0 0 1-1.5-1.5v-3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),x4=v4,y4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M22.19 1.81a3.637 3.637 0 0 0-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.636 3.636 0 0 0 .035-5.169zm-5.584.45 5.134 5.134m-19.219 8.95 5.139 5.13",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),b4=y4,w4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),S4=w4,C4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M23.497 7.75V1h-6.75m6.75 0-10.94 10.939M18.5 13.5v8A1.5 1.5 0 0 1 17 23H2.5A1.5 1.5 0 0 1 1 21.5V7a1.5 1.5 0 0 1 1.5-1.5h8.495",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),k4=C4,E4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M3.75 17.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2.53 5.53L6.53 17.47",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),j4=E4,T4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5 3 3 3-3M23.25 12H.75m19.5-3 3 3-3 3M3.75 9l-3 3 3 3",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),M4=T4,L4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 0 0 .7 1.02h1.9v3a3 3 0 0 0 3 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 0 0 .5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),O4=L4,$4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M22.954 22a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 22V2.5A1.5 1.5 0 0 1 3.5 1h15a1.5 1.5 0 0 1 1.047.426l2.955 2.883c.29.282.452.67.452 1.074V22z"}),f.createElement("circle",{cx:8.75,cy:7.75,r:2.25}),f.createElement("path",{d:"m19.29 18.45-3.925-5.888a1.011 1.011 0 0 0-1.671-.019l-2.691 3.845-1.668-1.338a1.011 1.011 0 0 0-1.474.229L5.75 18.45"}))),z4=$4,A4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M8.25 23.248V.748m-4.5 18 4.5 4.5 4.5-4.5m3-4.5h3.6a.899.899 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V3a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),R4=A4,D4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M8.25 24.248v-22.5M3.75 5.5 8.25 1l4.5 4.5m3 9.748h3.6a.9.9 0 0 1 .836 1.234l-4.372 6.531a.9.9 0 0 0 .836 1.235h3.6m0-13.5V4a2.25 2.25 0 1 0-4.5 0v6.75m0-3.002h4.5",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),_4=D4,N4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:3.625,cy:11.625,r:2.625}),f.createElement("circle",{cx:20.875,cy:11.625,r:2.625}),f.createElement("circle",{cx:12.25,cy:11.625,r:2.625}))),H4=N4,B4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M7 12h10m-7 5h4M5 7h14",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),U4=B4,I4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75"}),f.createElement("circle",{cx:11.999,cy:11.997,r:10.5,transform:"matrix(-1 0 0 1 23.998 0)"}))),G4=I4,q4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 18v3.1a1.518 1.518 0 0 0 1.5 1.4h12a1.557 1.557 0 0 0 1.5-1.607V3.111a1.555 1.555 0 0 0-1.5-1.611h-12a1.619 1.619 0 0 0-1.5 1.808V6"}),f.createElement("path",{d:"M6.75 12.004h12v3m-3 0v-3"}),f.createElement("circle",{cx:3.75,cy:12.004,r:3}))),P4=q4,F4=e=>f.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{clipPath:"url(#group-collapse_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M23.251.748H.751M23.251 23.248H.751M12.001 14.248v9M12.001.748v9M15.751 17.998l-3.75-3.75-3.75 3.75M15.751 5.998l-3.75 3.75-3.75-3.75"})),f.createElement("defs",null,f.createElement("clipPath",{id:"group-collapse_svg__a"},f.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),W4=F4,V4=e=>f.createElement("svg",{width:e.size,height:e.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{clipPath:"url(#group-expand_svg__a)",stroke:e.color,strokeWidth:e.weight,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12.001 3.748v16.5M15.751 7.498l-3.75-3.75-3.75 3.75M15.751 16.498l-3.75 3.75-3.75-3.75M23.251.748H.751M23.251 23.248H.751"})),f.createElement("defs",null,f.createElement("clipPath",{id:"group-expand_svg__a"},f.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))),Y4=V4,Z4=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M3.754 13.923v8.25h6v-6a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 0 1 2.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25"}))),X4=Z4,Q4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M14.25 16.5h-.75A1.5 1.5 0 0 1 12 15v-3.75a.75.75 0 0 0-.75-.75h-.75m1.125-3.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),K4=Q4,J4=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:11.998,cy:12,r:11.25}),f.createElement("path",{d:"m7.498 16.5 8.999-9m.001 9-9.001-9"}))),e6=J4,t6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M9.735 23.023a11.251 11.251 0 1 1 13.418-12.511"}),f.createElement("path",{d:"M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 0 1 2.2 6.42"}),f.createElement("circle",{cx:18,cy:13.126,r:2.625}),f.createElement("path",{d:"M18 16.5a5.25 5.25 0 0 0-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0 0 18 16.5h0Z"}))),n6=t6,a6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:4.5,height:4.5,x:.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:9.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:.75,y:18.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:9.75,y:18.747,rx:1.5}),f.createElement("rect",{width:4.5,height:4.5,x:18.75,y:18.747,rx:1.5}))),r6=a6,i6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:22.5,height:4.5,x:.75,y:.747,rx:1.5}),f.createElement("rect",{width:22.5,height:4.5,x:.75,y:9.747,rx:1.5}),f.createElement("rect",{width:22.5,height:4.5,x:.75,y:18.747,rx:1.5}))),o6=i6,l6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M17.25 23.25 6.53 12.53a.751.751 0 0 1 0-1.06L17.25.75",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),s6=l6,c6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m20.296 15.465 2.357-2.357a1.5 1.5 0 0 0 0-2.121L20.296 8.63V5.297a1.5 1.5 0 0 0-1.5-1.5h-3.333L13.107 1.44a1.5 1.5 0 0 0-2.122 0L8.63 3.797H5.296a1.5 1.5 0 0 0-1.5 1.5V8.63L1.44 10.987a1.5 1.5 0 0 0 0 2.12l2.357 2.358v3.332a1.5 1.5 0 0 0 1.5 1.5H8.63l2.356 2.357a1.5 1.5 0 0 0 2.122 0l2.356-2.357h3.333a1.5 1.5 0 0 0 1.5-1.5v-3.332Z",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("circle",{cx:12,cy:12,r:4.25}))),u6=c6,d6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m9.364 18.5-.932.932a4.5 4.5 0 0 1-6.364-6.364l4.773-4.774a4.5 4.5 0 0 1 6.825 5.825"}),f.createElement("path",{d:"m14.818 5.567.75-.75a4.5 4.5 0 0 1 6.364 6.364l-4.773 4.773a4.5 4.5 0 0 1-6.824-5.826"}))),f6=d6,h6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:7.5,r:3}),f.createElement("path",{d:"M12 .75a6.75 6.75 0 0 1 6.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 0 1-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0 1 12 .75z"}),f.createElement("path",{d:"M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463"}))),g6=h6,p6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),f.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),f.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),m6=p6,v6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"}))),x6=v6,y6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:5.25,cy:5.255,r:4.5}),f.createElement("circle",{cx:5.25,cy:18.755,r:4.5}),f.createElement("circle",{cx:18.75,cy:5.255,r:4.5}),f.createElement("circle",{cx:18.75,cy:18.755,r:4.5}))),b6=y6,w6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M18.376 10.5H5.626A4.888 4.888 0 0 1 .751 5.625h0A4.889 4.889 0 0 1 5.626.75h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875ZM18.376 23.25H5.626a4.888 4.888 0 0 1-4.875-4.875h0A4.889 4.889 0 0 1 5.626 13.5h12.75a4.89 4.89 0 0 1 4.875 4.875h0a4.889 4.889 0 0 1-4.875 4.875h0Z"}),f.createElement("circle",{cx:5.626,cy:5.625,r:1.875}),f.createElement("circle",{cx:18.376,cy:18.375,r:1.875}))),S6=w6,C6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M1.061 2.56v6.257a3 3 0 0 0 .878 2.121L13.5 22.5a1.5 1.5 0 0 0 2.121 0l6.879-6.88a1.5 1.5 0 0 0 0-2.121L10.939 1.938a3 3 0 0 0-2.121-.878H2.561a1.5 1.5 0 0 0-1.5 1.5Z"}),f.createElement("circle",{cx:6.311,cy:6.31,r:1.5}))),k6=C6,E6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M17.5 20.5a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m0-2.25v-3"}),f.createElement("path",{d:"M23.313 20.932a1.774 1.774 0 0 1-1.587 2.568h-8.452a1.774 1.774 0 0 1-1.587-2.568l4.226-8.451a1.774 1.774 0 0 1 3.174 0l4.226 8.451zM7.75 20.5H2.5A1.5 1.5 0 0 1 1 19V2.5A1.5 1.5 0 0 1 2.5 1h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8.5"}),f.createElement("path",{d:"M5.5 5.875a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75m7.606 5.195L11.5 8.5a.75.75 0 0 0-1.238-.014l-2 2.851-1.232-.987a.75.75 0 0 0-1.093.169L4 14.5h6"}))),j6=E6,T6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:17.25,cy:16.5,r:1.5}),f.createElement("path",{d:"m18.524 10.7.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 0 1 1.275 2.218l-1.031 1.111a1 1 0 0 0 0 1.362l1.031 1.111a1.339 1.339 0 0 1-1.275 2.219l-1.472-.342a1 1 0 0 0-1.174.681l-.442 1.448a1.33 1.33 0 0 1-2.548 0l-.442-1.453a1 1 0 0 0-1.174-.681l-1.472.342a1.34 1.34 0 0 1-1.275-2.219l1.031-1.111a1 1 0 0 0 0-1.362l-1.031-1.111a1.34 1.34 0 0 1 1.275-2.218l1.472.341a.992.992 0 0 0 1.174-.681l.442-1.452a1.33 1.33 0 0 1 2.548.005zM8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),f.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),f.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75"}))),M6=T6,L6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e}),O6=L6,$6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m22.501 2.25-21 21M10 21.75a2.086 2.086 0 0 0 4.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7.386 7.386 0 0 0-.093-.915M16.212 4.3A7.498 7.498 0 0 0 4.5 10.5v5.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),z6=$6,A6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10 21.75a2.087 2.087 0 0 0 4.005 0M12 3V.75M12 3a7.5 7.5 0 0 1 7.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0 1 12 3Z"}))),R6=A6,D6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"m2.783 20 18.75-18M8.964 18.051A9.985 9.985 0 0 0 12 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0 0 19.75 7.88M14.413 5.282A9.549 9.549 0 0 0 12 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 0 0 0 2.226 20.8 20.8 0 0 0 2.6 2.4"}),f.createElement("path",{d:"M8.25 11.75A3.749 3.749 0 0 1 12 8M15.75 11.749h0A3.75 3.75 0 0 1 12 15.5"}))),_6=D6,N6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 0 0 0 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251Z"}),f.createElement("path",{d:"M15.75 12a3.75 3.75 0 1 1-7.5-.002 3.75 3.75 0 0 1 7.5.002h0Z"}))),H6=N6,B6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M4.949 8.783a1.5 1.5 0 0 0-.3 2.356l8.213 8.213a1.5 1.5 0 0 0 2.356-.3 7.522 7.522 0 0 0 .81-5.54l6.529-4.155a1.5 1.5 0 0 0 .256-2.326L16.97 1.188a1.5 1.5 0 0 0-2.326.255l-4.155 6.53a7.522 7.522 0 0 0-5.54.81ZM8.753 15.246.75 23.249"}))),U6=B6,I6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M2.338 3.255v17.49a1.499 1.499 0 0 0 2.209 1.322l16.323-8.745a1.5 1.5 0 0 0 0-2.644L4.547 1.933a1.5 1.5 0 0 0-2.209 1.322z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),G6=I6,q6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M9 9a2.999 2.999 0 0 1 5.923-.673A3 3 0 0 1 13 11.829a1.5 1.5 0 0 0-1 1.415v1.006m0 3a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),P6=q6,F6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("rect",{width:19.5,height:22.5,x:2.25,y:.75,rx:1.5}),f.createElement("circle",{cx:12,cy:9.083,r:4.11}),f.createElement("path",{d:"M18.75 19.027a7.63 7.63 0 0 0-13.5 0"}))),W6=F6,V6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M5.25 22.5a6.75 6.75 0 1 1 13.5 0H5.25zM8.458 8.043a6.859 6.859 0 0 0 7.612 1.532"}),f.createElement("circle",{cx:12,cy:10.125,r:4.125}),f.createElement("path",{d:"M.75 5.249V3a1.5 1.5 0 0 1 1.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25"}))),Y6=V6,Z6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 0 0-.549-2.049l-2.6-1.5a1.5 1.5 0 0 0-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 0 0-2.049-.549l-2.6 1.5A1.5 1.5 0 0 0 4.9 5.658l1.9 3.295H3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 0 0 2.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 0 0 2.049.549l2.6-1.5a1.5 1.5 0 0 0 .549-2.049l-1.9-3.294H21a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),X6=Z6,Q6=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15 18.75h-3.75v3.75"}),f.createElement("path",{d:"M22.667 19.483a5.572 5.572 0 0 1-10.74-.733M19.5 15.75h3.75V12"}),f.createElement("path",{d:"M11.833 15.017a5.572 5.572 0 0 1 10.74.733M8.25 14.25a4.5 4.5 0 1 1 4.25-5.978"}),f.createElement("path",{d:"M9.75 9.75h-1.5v-1.5"}),f.createElement("path",{d:"M7.5 20.25H2.25a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.44l2.872 2.871a1.5 1.5 0 0 1 .439 1.061V7.5"}))),K6=Q6,J6=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"m6.5.75 10.72 10.72a.751.751 0 0 1 0 1.06L6.5 23.25",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),e7=J6,t7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:9.823,cy:9.823,r:8.823}),f.createElement("path",{d:"m16.062 16.062 6.843 6.844"}))),n7=t7,a7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M6 13.223 8.45 16.7a1.049 1.049 0 0 0 1.707.051L18 6.828"}),f.createElement("circle",{cx:12,cy:11.999,r:11.25}))),r7=a7,i7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M.75 14.248h20.689a.751.751 0 0 1 .531 1.281L18 19.5M6 4.5 2.03 8.468a.75.75 0 0 0 .531 1.28H23.25"}))),o7=i7,l7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M8.25 15.418V3.75a3 3 0 1 0-6 0v11.668a4.493 4.493 0 1 0 7.5 3.332 4.47 4.47 0 0 0-1.5-3.332h0zm-3-10.168v12"}),f.createElement("circle",{cx:5.25,cy:18.75,r:1.5}),f.createElement("circle",{cx:15,cy:11.25,r:3.75}),f.createElement("path",{d:"M15.75 4.5V3m4.023 3.477 1.061-1.061m.916 5.834h1.5m-3.477 4.773 1.061 1.061M15.75 18v1.5"}))),s7=l7,c7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 12.75v4.5m6-4.5H20"}))),u7=c7,d7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 3.75v13.5m6-13.5H20m-1.5 4.5H20m-1.5 4.5H20"}))),f7=d7,h7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.5 15.418V3.75a3 3 0 1 0-6 0v11.668a4.501 4.501 0 1 0 6 0z"}),f.createElement("circle",{cx:12.5,cy:18.75,r:1.5}),f.createElement("path",{d:"M12.5 8.25v9m6-9H20m-1.5 4.5H20"}))),g7=h7,p7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{fill:"none",fillRule:"evenodd",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:e.weight,transform:"translate(.75 .75)",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M10.656 10.6V2.578a2.062 2.062 0 1 0-4.125 0V10.6a3.093 3.093 0 1 0 4.125 0z"}),f.createElement("circle",{cx:8.594,cy:12.891,r:1.031}),f.createElement("path",{d:"M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031"}))),m7=p7,v7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:12,r:10.5}),f.createElement("path",{d:"M12 12V8.25M12 12l4.687 4.688"}))),x7=v7,y7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M.75 9.75V6a5.25 5.25 0 1 1 10.5 0v3.75"}),f.createElement("rect",{width:16.5,height:13.5,x:6.75,y:9.75,rx:1.5}),f.createElement("path",{d:"M15 15.75a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}))),b7=y7,w7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("path",{d:"M.75 17.189 11.47 6.47a.751.751 0 0 1 1.06 0l10.72 10.719",stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})),S7=w7,C7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M15.75 23.229c-2.434 0-4.5-1.316-4.5-3.75v-3.75h9v3.75c0 .788-.607 3.75-4.5 3.75zm-7.5-10.5-1.5 3m4.5-3h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 1.5 1.5v4.5m-14.25 9h3m-4.5-6h7.5m-6 0v-2.25m3 2.25v-3.75m3 3.75v-6m3.027 6.455c-1.1 1.1 1.089 1.471.015 2.545m3.149-4.46c-1.912 1.911 1.9 2.561.026 4.432"}),f.createElement("path",{d:"M20.25 16.479H21a2.25 2.25 0 1 1 0 4.5h-1.133"}))),k7=C7,E7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("circle",{cx:12,cy:6,r:5.25}),f.createElement("path",{d:"M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75"}))),j7=E7,T7=e=>f.createElement("svg",{width:e.size,height:e.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M7.281 9.376a1.308 1.308 0 0 0 1.939 0l.627-.7a1.306 1.306 0 0 1 2.273.942l-.047.934a1.3 1.3 0 0 0 1.371 1.371l.934-.047a1.305 1.305 0 0 1 .941 2.273l-.694.627a1.306 1.306 0 0 0 0 1.939l.694.627a1.305 1.305 0 0 1-.941 2.273l-.934-.047a1.305 1.305 0 0 0-1.371 1.371l.047.934a1.306 1.306 0 0 1-2.273.942l-.627-.7a1.308 1.308 0 0 0-1.939 0l-.627.7a1.306 1.306 0 0 1-2.273-.942l.047-.934a1.307 1.307 0 0 0-1.371-1.371l-.934.047a1.306 1.306 0 0 1-.942-2.273l.695-.627a1.308 1.308 0 0 0 0-1.939l-.695-.627a1.306 1.306 0 0 1 .942-2.273l.934.047a1.305 1.305 0 0 0 1.371-1.371l-.047-.934a1.306 1.306 0 0 1 2.273-.942l.627.7Z"}),f.createElement("circle",{cx:8.25,cy:15.751,r:1.875}),f.createElement("path",{d:"M18.638 5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0"}),f.createElement("path",{d:"M21.194 1.848a.75.75 0 0 1 .971.971l-.5 1.286a.749.749 0 0 0 .229.856l1.075.864a.75.75 0 0 1-.355 1.326l-1.363.211a.749.749 0 0 0-.627.626l-.211 1.364a.75.75 0 0 1-1.326.355l-.864-1.075a.751.751 0 0 0-.856-.23l-1.286.5a.75.75 0 0 1-.971-.971l.5-1.286a.749.749 0 0 0-.229-.856l-1.075-.865a.749.749 0 0 1 .355-1.324l1.363-.211a.751.751 0 0 0 .627-.627l.211-1.362a.749.749 0 0 1 1.325-.355l.865 1.075a.75.75 0 0 0 .856.229l1.286-.501Z"}))),M7=T7,L7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M12 16.5a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75h0m0-3V5.25"}),f.createElement("circle",{cx:12,cy:12,r:11.25}))),O7=L7,$7=e=>f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 24 24",...e},f.createElement("g",{stroke:e.color,strokeWidth:e.weight,fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"},f.createElement("path",{d:"M2.724.827A1.5 1.5 0 0 0 .75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 0 1 1.07.017l4.911 1.93a1.501 1.501 0 0 0 2.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 0 0-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z"}),f.createElement("path",{d:"M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z"}),f.createElement("path",{d:"m3.75 9.879 3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5"}))),z7=$7,A7=b0();const Ss=_u(A7),Sy=6048e5,R7=864e5,D7=6e4,_7=36e5,rv=Symbol.for("constructDateFrom");function ft(e,a){return typeof e=="function"?e(a):e&&typeof e=="object"&&rv in e?e[rv](a):e instanceof Date?new e.constructor(a):new Date(a)}function De(e,a){return ft(a||e,e)}function Cy(e,a,i){const o=De(e,i?.in);return isNaN(a)?ft(e,NaN):(a&&o.setDate(o.getDate()+a),o)}function as(e,a,i){const o=De(e,i?.in);if(isNaN(a))return ft(e,NaN);if(!a)return o;const c=o.getDate(),u=ft(e,o.getTime());u.setMonth(o.getMonth()+a+1,0);const h=u.getDate();return c>=h?u:(o.setFullYear(u.getFullYear(),u.getMonth(),c),o)}function Ti(e,a,i){const{years:o=0,months:c=0,weeks:u=0,days:h=0,hours:p=0,minutes:m=0,seconds:x=0}=a,b=De(e,i?.in),v=c||o?as(b,c+o*12):b,k=h||u?Cy(v,h+u*7):v,C=m+p*60,E=(x+C*60)*1e3;return ft(e,+k+E)}let N7={};function Cs(){return N7}function nr(e,a){const i=Cs(),o=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,c=De(e,a?.in),u=c.getDay(),h=(u<o?7:0)+u-o;return c.setDate(c.getDate()-h),c.setHours(0,0,0,0),c}function Cu(e,a){return nr(e,{...a,weekStartsOn:1})}function ky(e,a){const i=De(e,a?.in),o=i.getFullYear(),c=ft(i,0);c.setFullYear(o+1,0,4),c.setHours(0,0,0,0);const u=Cu(c),h=ft(i,0);h.setFullYear(o,0,4),h.setHours(0,0,0,0);const p=Cu(h);return i.getTime()>=u.getTime()?o+1:i.getTime()>=p.getTime()?o:o-1}function iv(e){const a=De(e),i=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return i.setUTCFullYear(a.getFullYear()),+e-+i}function Ca(e,...a){const i=ft.bind(null,a.find(o=>typeof o=="object"));return a.map(i)}function Pr(e,a){const i=De(e,a?.in);return i.setHours(0,0,0,0),i}function Ey(e,a,i){const[o,c]=Ca(i?.in,e,a),u=Pr(o),h=Pr(c),p=+u-iv(u),m=+h-iv(h);return Math.round((p-m)/R7)}function H7(e,a){const i=ky(e,a),o=ft(e,0);return o.setFullYear(i,0,4),o.setHours(0,0,0,0),Cu(o)}function B7(e,a,i){return Cy(e,a*7,i)}function ov(e,a){let i,o=a?.in;return e.forEach(c=>{!o&&typeof c=="object"&&(o=ft.bind(null,c));const u=De(c,o);(!i||i>u||isNaN(+u))&&(i=u)}),ft(o,i||NaN)}function cs(e,a){const i=+De(e)-+De(a);return i<0?-1:i>0?1:i}function U7(e){return ft(e,Date.now())}function Li(e,a,i){const[o,c]=Ca(i?.in,e,a);return+Pr(o)==+Pr(c)}function I7(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function G7(e){return!(!I7(e)&&typeof e!="number"||isNaN(+De(e)))}function q7(e,a,i){const[o,c]=Ca(i?.in,e,a),u=o.getFullYear()-c.getFullYear(),h=o.getMonth()-c.getMonth();return u*12+h}function P7(e,a,i){const[o,c]=Ca(i?.in,e,a);return o.getFullYear()-c.getFullYear()}function F7(e,a,i){const[o,c]=Ca(i?.in,e,a),u=lv(o,c),h=Math.abs(Ey(o,c));o.setDate(o.getDate()-u*h);const p=+(lv(o,c)===-u),m=u*(h-p);return m===0?0:m}function lv(e,a){const i=e.getFullYear()-a.getFullYear()||e.getMonth()-a.getMonth()||e.getDate()-a.getDate()||e.getHours()-a.getHours()||e.getMinutes()-a.getMinutes()||e.getSeconds()-a.getSeconds()||e.getMilliseconds()-a.getMilliseconds();return i<0?-1:i>0?1:i}function M0(e){return a=>{const o=(e?Math[e]:Math.trunc)(a);return o===0?0:o}}function W7(e,a,i){const[o,c]=Ca(i?.in,e,a),u=(+o-+c)/_7;return M0(i?.roundingMethod)(u)}function jy(e,a){return+De(e)-+De(a)}function V7(e,a,i){const o=jy(e,a)/D7;return M0(i?.roundingMethod)(o)}function Ho(e,a){const i=De(e,a?.in);return i.setHours(23,59,59,999),i}function Ty(e,a){const i=De(e,a?.in),o=i.getMonth();return i.setFullYear(i.getFullYear(),o+1,0),i.setHours(23,59,59,999),i}function Y7(e,a){const i=De(e,a?.in);return+Ho(i,a)==+Ty(i,a)}function Z7(e,a,i){const[o,c,u]=Ca(i?.in,e,e,a),h=cs(c,u),p=Math.abs(q7(c,u));if(p<1)return 0;c.getMonth()===1&&c.getDate()>27&&c.setDate(30),c.setMonth(c.getMonth()-h*p);let m=cs(c,u)===-h;Y7(o)&&p===1&&cs(o,u)===1&&(m=!1);const x=h*(p-+m);return x===0?0:x}function X7(e,a,i){const o=jy(e,a)/1e3;return M0(i?.roundingMethod)(o)}function Q7(e,a,i){const[o,c]=Ca(i?.in,e,a),u=cs(o,c),h=Math.abs(P7(o,c));o.setFullYear(1584),c.setFullYear(1584);const p=cs(o,c)===-u,m=u*(h-+p);return m===0?0:m}function L0(e,a){const[i,o]=Ca(e,a.start,a.end);return{start:i,end:o}}function K7(e,a){const{start:i,end:o}=L0(a?.in,e);let c=+i>+o;const u=c?+i:+o,h=c?o:i;h.setHours(0,0,0,0);let p=1;const m=[];for(;+h<=u;)m.push(ft(i,h)),h.setDate(h.getDate()+p),h.setHours(0,0,0,0);return c?m.reverse():m}function J7(e,a){const{start:i,end:o}=L0(a?.in,e);let c=+i>+o;const u=nr(c?o:i,a),h=nr(c?i:o,a);u.setHours(15),h.setHours(15);const p=+h.getTime();let m=u,x=1;const b=[];for(;+m<=p;)m.setHours(0),b.push(ft(i,m)),m=B7(m,x),m.setHours(15);return c?b.reverse():b}function e8(e,a){const i=De(e,a?.in);return i.setDate(1),i.setHours(0,0,0,0),i}function t8(e,a){const i=De(e,a?.in);return i.setFullYear(i.getFullYear(),0,1),i.setHours(0,0,0,0),i}function n8(e,a){const i=Cs(),o=i.weekStartsOn??i.locale?.options?.weekStartsOn??0,c=De(e,a?.in),u=c.getDay(),h=(u<o?-7:0)+6-(u-o);return c.setDate(c.getDate()+h),c.setHours(23,59,59,999),c}const a8={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r8=(e,a,i)=>{let o;const c=a8[e];return typeof c=="string"?o=c:a===1?o=c.one:o=c.other.replace("{{count}}",a.toString()),i?.addSuffix?i.comparison&&i.comparison>0?"in "+o:o+" ago":o};function Bo(e){return(a={})=>{const i=a.width?String(a.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}}const i8={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o8={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},l8={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s8={date:Bo({formats:i8,defaultWidth:"full"}),time:Bo({formats:o8,defaultWidth:"full"}),dateTime:Bo({formats:l8,defaultWidth:"full"})},c8={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},u8=(e,a,i,o)=>c8[e];function va(e){return(a,i)=>{const o=i?.context?String(i.context):"standalone";let c;if(o==="formatting"&&e.formattingValues){const h=e.defaultFormattingWidth||e.defaultWidth,p=i?.width?String(i.width):h;c=e.formattingValues[p]||e.formattingValues[h]}else{const h=e.defaultWidth,p=i?.width?String(i.width):e.defaultWidth;c=e.values[p]||e.values[h]}const u=e.argumentCallback?e.argumentCallback(a):a;return c[u]}}const d8={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},f8={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},h8={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},g8={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},p8={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},m8={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},v8=(e,a)=>{const i=Number(e),o=i%100;if(o>20||o<10)switch(o%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},x8={ordinalNumber:v8,era:va({values:d8,defaultWidth:"wide"}),quarter:va({values:f8,defaultWidth:"wide",argumentCallback:e=>e-1}),month:va({values:h8,defaultWidth:"wide"}),day:va({values:g8,defaultWidth:"wide"}),dayPeriod:va({values:p8,defaultWidth:"wide",formattingValues:m8,defaultFormattingWidth:"wide"})};function xa(e){return(a,i={})=>{const o=i.width,c=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(c);if(!u)return null;const h=u[0],p=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(p)?b8(p,v=>v.test(h)):y8(p,v=>v.test(h));let x;x=e.valueCallback?e.valueCallback(m):m,x=i.valueCallback?i.valueCallback(x):x;const b=a.slice(h.length);return{value:x,rest:b}}}function y8(e,a){for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&a(e[i]))return i}function b8(e,a){for(let i=0;i<e.length;i++)if(a(e[i]))return i}function My(e){return(a,i={})=>{const o=a.match(e.matchPattern);if(!o)return null;const c=o[0],u=a.match(e.parsePattern);if(!u)return null;let h=e.valueCallback?e.valueCallback(u[0]):u[0];h=i.valueCallback?i.valueCallback(h):h;const p=a.slice(c.length);return{value:h,rest:p}}}const w8=/^(\d+)(th|st|nd|rd)?/i,S8=/\d+/i,C8={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},k8={any:[/^b/i,/^(a|c)/i]},E8={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},j8={any:[/1/i,/2/i,/3/i,/4/i]},T8={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},M8={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},L8={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},O8={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$8={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},z8={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},A8={ordinalNumber:My({matchPattern:w8,parsePattern:S8,valueCallback:e=>parseInt(e,10)}),era:xa({matchPatterns:C8,defaultMatchWidth:"wide",parsePatterns:k8,defaultParseWidth:"any"}),quarter:xa({matchPatterns:E8,defaultMatchWidth:"wide",parsePatterns:j8,defaultParseWidth:"any",valueCallback:e=>e+1}),month:xa({matchPatterns:T8,defaultMatchWidth:"wide",parsePatterns:M8,defaultParseWidth:"any"}),day:xa({matchPatterns:L8,defaultMatchWidth:"wide",parsePatterns:O8,defaultParseWidth:"any"}),dayPeriod:xa({matchPatterns:$8,defaultMatchWidth:"any",parsePatterns:z8,defaultParseWidth:"any"})},gu={code:"en-US",formatDistance:r8,formatLong:s8,formatRelative:u8,localize:x8,match:A8,options:{weekStartsOn:0,firstWeekContainsDate:1}};function R8(e,a){const i=De(e,a?.in);return Ey(i,t8(i))+1}function D8(e,a){const i=De(e,a?.in),o=+Cu(i)-+H7(i);return Math.round(o/Sy)+1}function Ly(e,a){const i=De(e,a?.in),o=i.getFullYear(),c=Cs(),u=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??c.firstWeekContainsDate??c.locale?.options?.firstWeekContainsDate??1,h=ft(a?.in||e,0);h.setFullYear(o+1,0,u),h.setHours(0,0,0,0);const p=nr(h,a),m=ft(a?.in||e,0);m.setFullYear(o,0,u),m.setHours(0,0,0,0);const x=nr(m,a);return+i>=+p?o+1:+i>=+x?o:o-1}function _8(e,a){const i=Cs(),o=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,c=Ly(e,a),u=ft(a?.in||e,0);return u.setFullYear(c,0,o),u.setHours(0,0,0,0),nr(u,a)}function N8(e,a){const i=De(e,a?.in),o=+nr(i,a)-+_8(i,a);return Math.round(o/Sy)+1}function Fe(e,a){const i=e<0?"-":"",o=Math.abs(e).toString().padStart(a,"0");return i+o}const Hr={y(e,a){const i=e.getFullYear(),o=i>0?i:1-i;return Fe(a==="yy"?o%100:o,a.length)},M(e,a){const i=e.getMonth();return a==="M"?String(i+1):Fe(i+1,2)},d(e,a){return Fe(e.getDate(),a.length)},a(e,a){const i=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];default:return i==="am"?"a.m.":"p.m."}},h(e,a){return Fe(e.getHours()%12||12,a.length)},H(e,a){return Fe(e.getHours(),a.length)},m(e,a){return Fe(e.getMinutes(),a.length)},s(e,a){return Fe(e.getSeconds(),a.length)},S(e,a){const i=a.length,o=e.getMilliseconds(),c=Math.trunc(o*Math.pow(10,i-3));return Fe(c,a.length)}},Lo={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},sv={G:function(e,a,i){const o=e.getFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return i.era(o,{width:"abbreviated"});case"GGGGG":return i.era(o,{width:"narrow"});default:return i.era(o,{width:"wide"})}},y:function(e,a,i){if(a==="yo"){const o=e.getFullYear(),c=o>0?o:1-o;return i.ordinalNumber(c,{unit:"year"})}return Hr.y(e,a)},Y:function(e,a,i,o){const c=Ly(e,o),u=c>0?c:1-c;if(a==="YY"){const h=u%100;return Fe(h,2)}return a==="Yo"?i.ordinalNumber(u,{unit:"year"}):Fe(u,a.length)},R:function(e,a){const i=ky(e);return Fe(i,a.length)},u:function(e,a){const i=e.getFullYear();return Fe(i,a.length)},Q:function(e,a,i){const o=Math.ceil((e.getMonth()+1)/3);switch(a){case"Q":return String(o);case"QQ":return Fe(o,2);case"Qo":return i.ordinalNumber(o,{unit:"quarter"});case"QQQ":return i.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(o,{width:"narrow",context:"formatting"});default:return i.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,a,i){const o=Math.ceil((e.getMonth()+1)/3);switch(a){case"q":return String(o);case"qq":return Fe(o,2);case"qo":return i.ordinalNumber(o,{unit:"quarter"});case"qqq":return i.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(o,{width:"narrow",context:"standalone"});default:return i.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,a,i){const o=e.getMonth();switch(a){case"M":case"MM":return Hr.M(e,a);case"Mo":return i.ordinalNumber(o+1,{unit:"month"});case"MMM":return i.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(o,{width:"narrow",context:"formatting"});default:return i.month(o,{width:"wide",context:"formatting"})}},L:function(e,a,i){const o=e.getMonth();switch(a){case"L":return String(o+1);case"LL":return Fe(o+1,2);case"Lo":return i.ordinalNumber(o+1,{unit:"month"});case"LLL":return i.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(o,{width:"narrow",context:"standalone"});default:return i.month(o,{width:"wide",context:"standalone"})}},w:function(e,a,i,o){const c=N8(e,o);return a==="wo"?i.ordinalNumber(c,{unit:"week"}):Fe(c,a.length)},I:function(e,a,i){const o=D8(e);return a==="Io"?i.ordinalNumber(o,{unit:"week"}):Fe(o,a.length)},d:function(e,a,i){return a==="do"?i.ordinalNumber(e.getDate(),{unit:"date"}):Hr.d(e,a)},D:function(e,a,i){const o=R8(e);return a==="Do"?i.ordinalNumber(o,{unit:"dayOfYear"}):Fe(o,a.length)},E:function(e,a,i){const o=e.getDay();switch(a){case"E":case"EE":case"EEE":return i.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(o,{width:"short",context:"formatting"});default:return i.day(o,{width:"wide",context:"formatting"})}},e:function(e,a,i,o){const c=e.getDay(),u=(c-o.weekStartsOn+8)%7||7;switch(a){case"e":return String(u);case"ee":return Fe(u,2);case"eo":return i.ordinalNumber(u,{unit:"day"});case"eee":return i.day(c,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(c,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(c,{width:"short",context:"formatting"});default:return i.day(c,{width:"wide",context:"formatting"})}},c:function(e,a,i,o){const c=e.getDay(),u=(c-o.weekStartsOn+8)%7||7;switch(a){case"c":return String(u);case"cc":return Fe(u,a.length);case"co":return i.ordinalNumber(u,{unit:"day"});case"ccc":return i.day(c,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(c,{width:"narrow",context:"standalone"});case"cccccc":return i.day(c,{width:"short",context:"standalone"});default:return i.day(c,{width:"wide",context:"standalone"})}},i:function(e,a,i){const o=e.getDay(),c=o===0?7:o;switch(a){case"i":return String(c);case"ii":return Fe(c,a.length);case"io":return i.ordinalNumber(c,{unit:"day"});case"iii":return i.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(o,{width:"short",context:"formatting"});default:return i.day(o,{width:"wide",context:"formatting"})}},a:function(e,a,i){const c=e.getHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return i.dayPeriod(c,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(c,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(c,{width:"narrow",context:"formatting"});default:return i.dayPeriod(c,{width:"wide",context:"formatting"})}},b:function(e,a,i){const o=e.getHours();let c;switch(o===12?c=Lo.noon:o===0?c=Lo.midnight:c=o/12>=1?"pm":"am",a){case"b":case"bb":return i.dayPeriod(c,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(c,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(c,{width:"narrow",context:"formatting"});default:return i.dayPeriod(c,{width:"wide",context:"formatting"})}},B:function(e,a,i){const o=e.getHours();let c;switch(o>=17?c=Lo.evening:o>=12?c=Lo.afternoon:o>=4?c=Lo.morning:c=Lo.night,a){case"B":case"BB":case"BBB":return i.dayPeriod(c,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(c,{width:"narrow",context:"formatting"});default:return i.dayPeriod(c,{width:"wide",context:"formatting"})}},h:function(e,a,i){if(a==="ho"){let o=e.getHours()%12;return o===0&&(o=12),i.ordinalNumber(o,{unit:"hour"})}return Hr.h(e,a)},H:function(e,a,i){return a==="Ho"?i.ordinalNumber(e.getHours(),{unit:"hour"}):Hr.H(e,a)},K:function(e,a,i){const o=e.getHours()%12;return a==="Ko"?i.ordinalNumber(o,{unit:"hour"}):Fe(o,a.length)},k:function(e,a,i){let o=e.getHours();return o===0&&(o=24),a==="ko"?i.ordinalNumber(o,{unit:"hour"}):Fe(o,a.length)},m:function(e,a,i){return a==="mo"?i.ordinalNumber(e.getMinutes(),{unit:"minute"}):Hr.m(e,a)},s:function(e,a,i){return a==="so"?i.ordinalNumber(e.getSeconds(),{unit:"second"}):Hr.s(e,a)},S:function(e,a){return Hr.S(e,a)},X:function(e,a,i){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(a){case"X":return uv(o);case"XXXX":case"XX":return Ci(o);default:return Ci(o,":")}},x:function(e,a,i){const o=e.getTimezoneOffset();switch(a){case"x":return uv(o);case"xxxx":case"xx":return Ci(o);default:return Ci(o,":")}},O:function(e,a,i){const o=e.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+cv(o,":");default:return"GMT"+Ci(o,":")}},z:function(e,a,i){const o=e.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+cv(o,":");default:return"GMT"+Ci(o,":")}},t:function(e,a,i){const o=Math.trunc(+e/1e3);return Fe(o,a.length)},T:function(e,a,i){return Fe(+e,a.length)}};function cv(e,a=""){const i=e>0?"-":"+",o=Math.abs(e),c=Math.trunc(o/60),u=o%60;return u===0?i+String(c):i+String(c)+a+Fe(u,2)}function uv(e,a){return e%60===0?(e>0?"-":"+")+Fe(Math.abs(e)/60,2):Ci(e,a)}function Ci(e,a=""){const i=e>0?"-":"+",o=Math.abs(e),c=Fe(Math.trunc(o/60),2),u=Fe(o%60,2);return i+c+a+u}const dv=(e,a)=>{switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});default:return a.date({width:"full"})}},Oy=(e,a)=>{switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});default:return a.time({width:"full"})}},H8=(e,a)=>{const i=e.match(/(P+)(p+)?/)||[],o=i[1],c=i[2];if(!c)return dv(e,a);let u;switch(o){case"P":u=a.dateTime({width:"short"});break;case"PP":u=a.dateTime({width:"medium"});break;case"PPP":u=a.dateTime({width:"long"});break;default:u=a.dateTime({width:"full"});break}return u.replace("{{date}}",dv(o,a)).replace("{{time}}",Oy(c,a))},B8={p:Oy,P:H8},U8=/^D+$/,I8=/^Y+$/,G8=["D","DD","YY","YYYY"];function q8(e){return U8.test(e)}function P8(e){return I8.test(e)}function F8(e,a,i){const o=W8(e,a,i);if(console.warn(o),G8.includes(e))throw new RangeError(o)}function W8(e,a,i){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${o} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const V8=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Y8=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z8=/^'([^]*?)'?$/,X8=/''/g,Q8=/[a-zA-Z]/;function Ut(e,a,i){const o=Cs(),c=i?.locale??o.locale??gu,u=i?.firstWeekContainsDate??i?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,h=i?.weekStartsOn??i?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,p=De(e,i?.in);if(!G7(p))throw new RangeError("Invalid time value");let m=a.match(Y8).map(b=>{const v=b[0];if(v==="p"||v==="P"){const k=B8[v];return k(b,c.formatLong)}return b}).join("").match(V8).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const v=b[0];if(v==="'")return{isToken:!1,value:K8(b)};if(sv[v])return{isToken:!0,value:b};if(v.match(Q8))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:b}});c.localize.preprocessor&&(m=c.localize.preprocessor(p,m));const x={firstWeekContainsDate:u,weekStartsOn:h,locale:c};return m.map(b=>{if(!b.isToken)return b.value;const v=b.value;(!i?.useAdditionalWeekYearTokens&&P8(v)||!i?.useAdditionalDayOfYearTokens&&q8(v))&&F8(v,a,String(e));const k=sv[v[0]];return k(p,v,c.localize,x)}).join("")}function K8(e){const a=e.match(Z8);return a?a[1].replace(X8,"'"):e}function J8(e,a){const i=De(e,a?.in),o=i.getFullYear(),c=i.getMonth(),u=ft(i,0);return u.setFullYear(o,c+1,0),u.setHours(0,0,0,0),u.getDate()}function eS(e,a){const{start:i,end:o}=L0(a?.in,e),c={},u=Q7(o,i);u&&(c.years=u);const h=Ti(i,{years:c.years}),p=Z7(o,h);p&&(c.months=p);const m=Ti(h,{months:c.months}),x=F7(o,m);x&&(c.days=x);const b=Ti(m,{days:c.days}),v=W7(o,b);v&&(c.hours=v);const k=Ti(b,{hours:c.hours}),C=V7(o,k);C&&(c.minutes=C);const S=Ti(k,{minutes:c.minutes}),E=X7(o,S);return E&&(c.seconds=E),c}function fv(e,a){return+De(e)>+De(a)}function us(e,a){return+De(e)==+De(a)}function tS(e,a,i){const[o,c]=Ca(i?.in,e,a);return o.getFullYear()===c.getFullYear()&&o.getMonth()===c.getMonth()}function nS(e,a){return Li(ft(e,e),U7(e))}function aS(e,a,i){const o=+De(e,i?.in),[c,u]=[+De(a.start,i?.in),+De(a.end,i?.in)].sort((h,p)=>h-p);return o>=c&&o<=u}function rS(e,a,i){const o=De(e,i?.in),c=o.getFullYear(),u=o.getDate(),h=ft(e,0);h.setFullYear(c,a,15),h.setHours(0,0,0,0);const p=J8(h);return o.setMonth(a,Math.min(u,p)),o}function ku(e,a,i){let o=De(e,i?.in);return isNaN(+o)?ft(e,NaN):(a.year!=null&&o.setFullYear(a.year),a.month!=null&&(o=rS(o,a.month)),a.date!=null&&o.setDate(a.date),a.hours!=null&&o.setHours(a.hours),a.minutes!=null&&o.setMinutes(a.minutes),a.seconds!=null&&o.setSeconds(a.seconds),a.milliseconds!=null&&o.setMilliseconds(a.milliseconds),o)}const iS={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},oS=(e,a,i)=>{i=i||{};let o;const c=iS[e];return typeof c=="string"?o=c:a===1?i.addSuffix&&c.oneWithSuffix?o=c.oneWithSuffix:o=c.one:i.addSuffix&&c.otherWithSuffix?o=c.otherWithSuffix.replace("{{count}}",String(a)):o=c.other.replace("{{count}}",String(a)),i.addSuffix?i.comparison&&i.comparison>0?o+"後":o+"前":o},lS={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},sS={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},cS={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},uS={date:Bo({formats:lS,defaultWidth:"full"}),time:Bo({formats:sS,defaultWidth:"full"}),dateTime:Bo({formats:cS,defaultWidth:"full"})},dS={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},fS=(e,a,i,o)=>dS[e],hS={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},gS={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},pS={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},mS={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},vS={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},xS={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},yS=(e,a)=>{const i=Number(e);switch(String(a?.unit)){case"year":return`${i}年`;case"quarter":return`第${i}四半期`;case"month":return`${i}月`;case"week":return`第${i}週`;case"date":return`${i}日`;case"hour":return`${i}時`;case"minute":return`${i}分`;case"second":return`${i}秒`;default:return`${i}`}},bS={ordinalNumber:yS,era:va({values:hS,defaultWidth:"wide"}),quarter:va({values:gS,defaultWidth:"wide",argumentCallback:e=>Number(e)-1}),month:va({values:pS,defaultWidth:"wide"}),day:va({values:mS,defaultWidth:"wide"}),dayPeriod:va({values:vS,defaultWidth:"wide",formattingValues:xS,defaultFormattingWidth:"wide"})},wS=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,SS=/\d+/i,CS={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},kS={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},ES={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},jS={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},TS={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},MS={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},LS={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},OS={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},$S={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},zS={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},AS={ordinalNumber:My({matchPattern:wS,parsePattern:SS,valueCallback:function(e){return parseInt(e,10)}}),era:xa({matchPatterns:CS,defaultMatchWidth:"wide",parsePatterns:kS,defaultParseWidth:"any"}),quarter:xa({matchPatterns:ES,defaultMatchWidth:"wide",parsePatterns:jS,defaultParseWidth:"any",valueCallback:e=>e+1}),month:xa({matchPatterns:TS,defaultMatchWidth:"wide",parsePatterns:MS,defaultParseWidth:"any"}),day:xa({matchPatterns:LS,defaultMatchWidth:"wide",parsePatterns:OS,defaultParseWidth:"any"}),dayPeriod:xa({matchPatterns:$S,defaultMatchWidth:"any",parsePatterns:zS,defaultParseWidth:"any"})},xh={code:"ja",formatDistance:oS,formatLong:uS,formatRelative:fS,localize:bS,match:AS,options:{weekStartsOn:0,firstWeekContainsDate:1}};var rs={exports:{}};rs.exports;var hv;function RS(){return hv||(hv=1,(function(e,a){var i=200,o="__lodash_hash_undefined__",c=1,u=2,h=9007199254740991,p="[object Arguments]",m="[object Array]",x="[object AsyncFunction]",b="[object Boolean]",v="[object Date]",k="[object Error]",C="[object Function]",S="[object GeneratorFunction]",E="[object Map]",T="[object Number]",M="[object Null]",z="[object Object]",_="[object Promise]",B="[object Proxy]",N="[object RegExp]",U="[object Set]",L="[object String]",R="[object Symbol]",F="[object Undefined]",J="[object WeakMap]",q="[object ArrayBuffer]",ee="[object DataView]",re="[object Float32Array]",Q="[object Float64Array]",ne="[object Int8Array]",D="[object Int16Array]",G="[object Int32Array]",ae="[object Uint8Array]",oe="[object Uint8ClampedArray]",de="[object Uint16Array]",O="[object Uint32Array]",W=/[\\^$.*+?()[\]{}|]/g,Y=/^\[object .+?Constructor\]$/,se=/^(?:0|[1-9]\d*)$/,he={};he[re]=he[Q]=he[ne]=he[D]=he[G]=he[ae]=he[oe]=he[de]=he[O]=!0,he[p]=he[m]=he[q]=he[b]=he[ee]=he[v]=he[k]=he[C]=he[E]=he[T]=he[z]=he[N]=he[U]=he[L]=he[J]=!1;var me=typeof Ur=="object"&&Ur&&Ur.Object===Object&&Ur,fe=typeof self=="object"&&self&&self.Object===Object&&self,ye=me||fe||Function("return this")(),ve=a&&!a.nodeType&&a,_e=ve&&!0&&e&&!e.nodeType&&e,Ot=_e&&_e.exports===ve,jt=Ot&&me.process,It=(function(){try{return jt&&jt.binding&&jt.binding("util")}catch{}})(),Mn=It&&It.isTypedArray;function Wr($,P){for(var ue=-1,ge=$==null?0:$.length,Ne=0,Ce=[];++ue<ge;){var We=$[ue];P(We,ue,$)&&(Ce[Ne++]=We)}return Ce}function Kt($,P){for(var ue=-1,ge=P.length,Ne=$.length;++ue<ge;)$[Ne+ue]=P[ue];return $}function Ta($,P){for(var ue=-1,ge=$==null?0:$.length;++ue<ge;)if(P($[ue],ue,$))return!0;return!1}function oa($,P){for(var ue=-1,ge=Array($);++ue<$;)ge[ue]=P(ue);return ge}function Ln($){return function(P){return $(P)}}function On($,P){return $.has(P)}function Gt($,P){return $?.[P]}function Ju($){var P=-1,ue=Array($.size);return $.forEach(function(ge,Ne){ue[++P]=[Ne,ge]}),ue}function ed($,P){return function(ue){return $(P(ue))}}function Jt($){var P=-1,ue=Array($.size);return $.forEach(function(ge){ue[++P]=ge}),ue}var td=Array.prototype,zs=Function.prototype,Vr=Object.prototype,sr=ye["__core-js_shared__"],As=zs.toString,gn=Vr.hasOwnProperty,Rs=(function(){var $=/[^.]+$/.exec(sr&&sr.keys&&sr.keys.IE_PROTO||"");return $?"Symbol(src)_1."+$:""})(),Ds=Vr.toString,Yr=RegExp("^"+As.call(gn).replace(W,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qt=Ot?ye.Buffer:void 0,pn=ye.Symbol,Pt=ye.Uint8Array,_s=Vr.propertyIsEnumerable,nd=td.splice,Ma=pn?pn.toStringTag:void 0,Zr=Object.getOwnPropertySymbols,Hi=qt?qt.isBuffer:void 0,Bi=ed(Object.keys,Object),Pn=vn(ye,"DataView"),la=vn(ye,"Map"),La=vn(ye,"Promise"),Yo=vn(ye,"Set"),Ui=vn(ye,"WeakMap"),Oa=vn(Object,"create"),Xr=Yn(Pn),ad=Yn(la),Ns=Yn(La),Hs=Yn(Yo),Bs=Yn(Ui),Ii=pn?pn.prototype:void 0,Qr=Ii?Ii.valueOf:void 0;function sa($){var P=-1,ue=$==null?0:$.length;for(this.clear();++P<ue;){var ge=$[P];this.set(ge[0],ge[1])}}function Us(){this.__data__=Oa?Oa(null):{},this.size=0}function ca($){var P=this.has($)&&delete this.__data__[$];return this.size-=P?1:0,P}function bt($){var P=this.__data__;if(Oa){var ue=P[$];return ue===o?void 0:ue}return gn.call(P,$)?P[$]:void 0}function Ft($){var P=this.__data__;return Oa?P[$]!==void 0:gn.call(P,$)}function cr($,P){var ue=this.__data__;return this.size+=this.has($)?0:1,ue[$]=Oa&&P===void 0?o:P,this}sa.prototype.clear=Us,sa.prototype.delete=ca,sa.prototype.get=bt,sa.prototype.has=Ft,sa.prototype.set=cr;function mn($){var P=-1,ue=$==null?0:$.length;for(this.clear();++P<ue;){var ge=$[P];this.set(ge[0],ge[1])}}function rd(){this.__data__=[],this.size=0}function id($){var P=this.__data__,ue=$t(P,$);if(ue<0)return!1;var ge=P.length-1;return ue==ge?P.pop():nd.call(P,ue,1),--this.size,!0}function Is($){var P=this.__data__,ue=$t(P,$);return ue<0?void 0:P[ue][1]}function Kr($){return $t(this.__data__,$)>-1}function Zo($,P){var ue=this.__data__,ge=$t(ue,$);return ge<0?(++this.size,ue.push([$,P])):ue[ge][1]=P,this}mn.prototype.clear=rd,mn.prototype.delete=id,mn.prototype.get=Is,mn.prototype.has=Kr,mn.prototype.set=Zo;function nn($){var P=-1,ue=$==null?0:$.length;for(this.clear();++P<ue;){var ge=$[P];this.set(ge[0],ge[1])}}function ur(){this.size=0,this.__data__={hash:new sa,map:new(la||mn),string:new sa}}function Jr($){var P=ni(this,$).delete($);return this.size-=P?1:0,P}function dr($){return ni(this,$).get($)}function ht($){return ni(this,$).has($)}function Gs($,P){var ue=ni(this,$),ge=ue.size;return ue.set($,P),this.size+=ue.size==ge?0:1,this}nn.prototype.clear=ur,nn.prototype.delete=Jr,nn.prototype.get=dr,nn.prototype.has=ht,nn.prototype.set=Gs;function ei($){var P=-1,ue=$==null?0:$.length;for(this.__data__=new nn;++P<ue;)this.add($[P])}function $a($){return this.__data__.set($,o),this}function fr($){return this.__data__.has($)}ei.prototype.add=ei.prototype.push=$a,ei.prototype.has=fr;function ua($){var P=this.__data__=new mn($);this.size=P.size}function qs(){this.__data__=new mn,this.size=0}function Ps($){var P=this.__data__,ue=P.delete($);return this.size=P.size,ue}function od($){return this.__data__.get($)}function Gi($){return this.__data__.has($)}function qi($,P){var ue=this.__data__;if(ue instanceof mn){var ge=ue.__data__;if(!la||ge.length<i-1)return ge.push([$,P]),this.size=++ue.size,this;ue=this.__data__=new nn(ge)}return ue.set($,P),this.size=ue.size,this}ua.prototype.clear=qs,ua.prototype.delete=Ps,ua.prototype.get=od,ua.prototype.has=Gi,ua.prototype.set=qi;function Fn($,P){var ue=Zn($),ge=!ue&&gr($),Ne=!ue&&!ge&&ai($),Ce=!ue&&!ge&&!Ne&&Qn($),We=ue||ge||Ne||Ce,gt=We?oa($.length,String):[],ct=gt.length;for(var Xe in $)gn.call($,Xe)&&!(We&&(Xe=="length"||Ne&&(Xe=="offset"||Xe=="parent")||Ce&&(Xe=="buffer"||Xe=="byteLength"||Xe=="byteOffset")||tl(Xe,ct)))&&gt.push(Xe);return gt}function $t($,P){for(var ue=$.length;ue--;)if(Vi($[ue][0],P))return ue;return-1}function Fs($,P,ue){var ge=P($);return Zn($)?ge:Kt(ge,ue($))}function ti($){return $==null?$===void 0?F:M:Ma&&Ma in Object($)?sd($):Vn($)}function Pi($){return Xn($)&&ti($)==p}function Xo($,P,ue,ge,Ne){return $===P?!0:$==null||P==null||!Xn($)&&!Xn(P)?$!==$&&P!==P:Fi($,P,ue,ge,Xo,Ne)}function Fi($,P,ue,ge,Ne,Ce){var We=Zn($),gt=Zn(P),ct=We?m:Wn($),Xe=gt?m:Wn(P);ct=ct==p?z:ct,Xe=Xe==p?z:Xe;var wt=ct==z,Wt=Xe==z,St=ct==Xe;if(St&&ai($)){if(!ai(P))return!1;We=!0,wt=!1}if(St&&!wt)return Ce||(Ce=new ua),We||Qn($)?Ko($,P,ue,ge,Ne,Ce):Jo($,P,ct,ue,ge,Ne,Ce);if(!(ue&c)){var rn=wt&&gn.call($,"__wrapped__"),on=Wt&&gn.call(P,"__wrapped__");if(rn||on){var da=rn?$.value():$,xn=on?P.value():P;return Ce||(Ce=new ua),Ne(da,xn,ue,ge,Ce)}}return St?(Ce||(Ce=new ua),hr($,P,ue,ge,Ne,Ce)):!1}function ld($){if(!Yi($)||ud($))return!1;var P=pr($)?Yr:Y;return P.test(Yn($))}function an($){return Xn($)&&$n($.length)&&!!he[ti($)]}function Qo($){if(!Wi($))return Bi($);var P=[];for(var ue in Object($))gn.call($,ue)&&ue!="constructor"&&P.push(ue);return P}function Ko($,P,ue,ge,Ne,Ce){var We=ue&c,gt=$.length,ct=P.length;if(gt!=ct&&!(We&&ct>gt))return!1;var Xe=Ce.get($);if(Xe&&Ce.get(P))return Xe==P;var wt=-1,Wt=!0,St=ue&u?new ei:void 0;for(Ce.set($,P),Ce.set(P,$);++wt<gt;){var rn=$[wt],on=P[wt];if(ge)var da=We?ge(on,rn,wt,P,$,Ce):ge(rn,on,wt,$,P,Ce);if(da!==void 0){if(da)continue;Wt=!1;break}if(St){if(!Ta(P,function(xn,za){if(!On(St,za)&&(rn===xn||Ne(rn,xn,ue,ge,Ce)))return St.push(za)})){Wt=!1;break}}else if(!(rn===on||Ne(rn,on,ue,ge,Ce))){Wt=!1;break}}return Ce.delete($),Ce.delete(P),Wt}function Jo($,P,ue,ge,Ne,Ce,We){switch(ue){case ee:if($.byteLength!=P.byteLength||$.byteOffset!=P.byteOffset)return!1;$=$.buffer,P=P.buffer;case q:return!($.byteLength!=P.byteLength||!Ce(new Pt($),new Pt(P)));case b:case v:case T:return Vi(+$,+P);case k:return $.name==P.name&&$.message==P.message;case N:case L:return $==P+"";case E:var gt=Ju;case U:var ct=ge&c;if(gt||(gt=Jt),$.size!=P.size&&!ct)return!1;var Xe=We.get($);if(Xe)return Xe==P;ge|=u,We.set($,P);var wt=Ko(gt($),gt(P),ge,Ne,Ce,We);return We.delete($),wt;case R:if(Qr)return Qr.call($)==Qr.call(P)}return!1}function hr($,P,ue,ge,Ne,Ce){var We=ue&c,gt=el($),ct=gt.length,Xe=el(P),wt=Xe.length;if(ct!=wt&&!We)return!1;for(var Wt=ct;Wt--;){var St=gt[Wt];if(!(We?St in P:gn.call(P,St)))return!1}var rn=Ce.get($);if(rn&&Ce.get(P))return rn==P;var on=!0;Ce.set($,P),Ce.set(P,$);for(var da=We;++Wt<ct;){St=gt[Wt];var xn=$[St],za=P[St];if(ge)var Xs=We?ge(za,xn,St,P,$,Ce):ge(xn,za,St,$,P,Ce);if(!(Xs===void 0?xn===za||Ne(xn,za,ue,ge,Ce):Xs)){on=!1;break}da||(da=St=="constructor")}if(on&&!da){var Xi=$.constructor,Qi=P.constructor;Xi!=Qi&&"constructor"in $&&"constructor"in P&&!(typeof Xi=="function"&&Xi instanceof Xi&&typeof Qi=="function"&&Qi instanceof Qi)&&(on=!1)}return Ce.delete($),Ce.delete(P),on}function el($){return Fs($,nl,Ws)}function ni($,P){var ue=$.__data__;return cd(P)?ue[typeof P=="string"?"string":"hash"]:ue.map}function vn($,P){var ue=Gt($,P);return ld(ue)?ue:void 0}function sd($){var P=gn.call($,Ma),ue=$[Ma];try{$[Ma]=void 0;var ge=!0}catch{}var Ne=Ds.call($);return ge&&(P?$[Ma]=ue:delete $[Ma]),Ne}var Ws=Zr?function($){return $==null?[]:($=Object($),Wr(Zr($),function(P){return _s.call($,P)}))}:Zi,Wn=ti;(Pn&&Wn(new Pn(new ArrayBuffer(1)))!=ee||la&&Wn(new la)!=E||La&&Wn(La.resolve())!=_||Yo&&Wn(new Yo)!=U||Ui&&Wn(new Ui)!=J)&&(Wn=function($){var P=ti($),ue=P==z?$.constructor:void 0,ge=ue?Yn(ue):"";if(ge)switch(ge){case Xr:return ee;case ad:return E;case Ns:return _;case Hs:return U;case Bs:return J}return P});function tl($,P){return P=P??h,!!P&&(typeof $=="number"||se.test($))&&$>-1&&$%1==0&&$<P}function cd($){var P=typeof $;return P=="string"||P=="number"||P=="symbol"||P=="boolean"?$!=="__proto__":$===null}function ud($){return!!Rs&&Rs in $}function Wi($){var P=$&&$.constructor,ue=typeof P=="function"&&P.prototype||Vr;return $===ue}function Vn($){return Ds.call($)}function Yn($){if($!=null){try{return As.call($)}catch{}try{return $+""}catch{}}return""}function Vi($,P){return $===P||$!==$&&P!==P}var gr=Pi((function(){return arguments})())?Pi:function($){return Xn($)&&gn.call($,"callee")&&!_s.call($,"callee")},Zn=Array.isArray;function Vs($){return $!=null&&$n($.length)&&!pr($)}var ai=Hi||Zs;function Ys($,P){return Xo($,P)}function pr($){if(!Yi($))return!1;var P=ti($);return P==C||P==S||P==x||P==B}function $n($){return typeof $=="number"&&$>-1&&$%1==0&&$<=h}function Yi($){var P=typeof $;return $!=null&&(P=="object"||P=="function")}function Xn($){return $!=null&&typeof $=="object"}var Qn=Mn?Ln(Mn):an;function nl($){return Vs($)?Fn($):Qo($)}function Zi(){return[]}function Zs(){return!1}e.exports=Ys})(rs,rs.exports)),rs.exports}RS();var yh,gv;function DS(){if(gv)return yh;gv=1;var e="Expected a function",a=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,m=typeof Ur=="object"&&Ur&&Ur.Object===Object&&Ur,x=typeof self=="object"&&self&&self.Object===Object&&self,b=m||x||Function("return this")(),v=Object.prototype,k=v.toString,C=Math.max,S=Math.min,E=function(){return b.Date.now()};function T(N,U,L){var R,F,J,q,ee,re,Q=0,ne=!1,D=!1,G=!0;if(typeof N!="function")throw new TypeError(e);U=B(U)||0,M(L)&&(ne=!!L.leading,D="maxWait"in L,J=D?C(B(L.maxWait)||0,U):J,G="trailing"in L?!!L.trailing:G);function ae(fe){var ye=R,ve=F;return R=F=void 0,Q=fe,q=N.apply(ve,ye),q}function oe(fe){return Q=fe,ee=setTimeout(W,U),ne?ae(fe):q}function de(fe){var ye=fe-re,ve=fe-Q,_e=U-ye;return D?S(_e,J-ve):_e}function O(fe){var ye=fe-re,ve=fe-Q;return re===void 0||ye>=U||ye<0||D&&ve>=J}function W(){var fe=E();if(O(fe))return Y(fe);ee=setTimeout(W,de(fe))}function Y(fe){return ee=void 0,G&&R?ae(fe):(R=F=void 0,q)}function se(){ee!==void 0&&clearTimeout(ee),Q=0,R=re=F=ee=void 0}function he(){return ee===void 0?q:Y(E())}function me(){var fe=E(),ye=O(fe);if(R=arguments,F=this,re=fe,ye){if(ee===void 0)return oe(re);if(D)return ee=setTimeout(W,U),ae(re)}return ee===void 0&&(ee=setTimeout(W,U)),q}return me.cancel=se,me.flush=he,me}function M(N){var U=typeof N;return!!N&&(U=="object"||U=="function")}function z(N){return!!N&&typeof N=="object"}function _(N){return typeof N=="symbol"||z(N)&&k.call(N)==i}function B(N){if(typeof N=="number")return N;if(_(N))return a;if(M(N)){var U=typeof N.valueOf=="function"?N.valueOf():N;N=M(U)?U+"":U}if(typeof N!="string")return N===0?N:+N;N=N.replace(o,"");var L=u.test(N);return L||h.test(N)?p(N.slice(2),L?2:8):c.test(N)?a:+N}return yh=T,yh}DS();var eu={exports:{}},pv;function _S(){return pv||(pv=1,(function(e,a){Object.defineProperty(a,"__esModule",{value:!0});function i(L){return typeof L=="object"&&!("toString"in L)?Object.prototype.toString.call(L).slice(8,-1):L}var o=typeof process=="object"&&!0;function c(L,R){if(!L)throw o?new Error("Invariant failed"):new Error(R())}a.invariant=c;var u=Object.prototype.hasOwnProperty,h=Array.prototype.splice,p=Object.prototype.toString;function m(L){return p.call(L).slice(8,-1)}var x=Object.assign||(function(L,R){return b(R).forEach(function(F){u.call(R,F)&&(L[F]=R[F])}),L}),b=typeof Object.getOwnPropertySymbols=="function"?function(L){return Object.keys(L).concat(Object.getOwnPropertySymbols(L))}:function(L){return Object.keys(L)};function v(L){return Array.isArray(L)?x(L.constructor(L.length),L):m(L)==="Map"?new Map(L):m(L)==="Set"?new Set(L):L&&typeof L=="object"?x(Object.create(Object.getPrototypeOf(L)),L):L}var k=(function(){function L(){this.commands=x({},C),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(R,F){return R===F},this.update.newContext=function(){return new L().update}}return Object.defineProperty(L.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(R){this.update.isEquals=R},enumerable:!0,configurable:!0}),L.prototype.extend=function(R,F){this.commands[R]=F},L.prototype.update=function(R,F){var J=this,q=typeof F=="function"?{$apply:F}:F;Array.isArray(R)&&Array.isArray(q)||c(!Array.isArray(q),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),c(typeof q=="object"&&q!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(J.commands).join(", ")+".")});var ee=R;return b(q).forEach(function(re){if(u.call(J.commands,re)){var Q=R===ee;ee=J.commands[re](q[re],ee,q,R),Q&&J.isEquals(ee,R)&&(ee=R)}else{var ne=m(R)==="Map"?J.update(R.get(re),q[re]):J.update(R[re],q[re]),D=m(ee)==="Map"?ee.get(re):ee[re];(!J.isEquals(ne,D)||typeof ne>"u"&&!u.call(R,re))&&(ee===R&&(ee=v(R)),m(ee)==="Map"?ee.set(re,ne):ee[re]=ne)}}),ee},L})();a.Context=k;var C={$push:function(L,R,F){return E(R,F,"$push"),L.length?R.concat(L):R},$unshift:function(L,R,F){return E(R,F,"$unshift"),L.length?L.concat(R):R},$splice:function(L,R,F,J){return M(R,F),L.forEach(function(q){z(q),R===J&&q.length&&(R=v(J)),h.apply(R,q)}),R},$set:function(L,R,F){return B(F),L},$toggle:function(L,R){T(L,"$toggle");var F=L.length?v(R):R;return L.forEach(function(J){F[J]=!R[J]}),F},$unset:function(L,R,F,J){return T(L,"$unset"),L.forEach(function(q){Object.hasOwnProperty.call(R,q)&&(R===J&&(R=v(J)),delete R[q])}),R},$add:function(L,R,F,J){return U(R,"$add"),T(L,"$add"),m(R)==="Map"?L.forEach(function(q){var ee=q[0],re=q[1];R===J&&R.get(ee)!==re&&(R=v(J)),R.set(ee,re)}):L.forEach(function(q){R===J&&!R.has(q)&&(R=v(J)),R.add(q)}),R},$remove:function(L,R,F,J){return U(R,"$remove"),T(L,"$remove"),L.forEach(function(q){R===J&&R.has(q)&&(R=v(J)),R.delete(q)}),R},$merge:function(L,R,F,J){return N(R,L),b(L).forEach(function(q){L[q]!==R[q]&&(R===J&&(R=v(J)),R[q]=L[q])}),R},$apply:function(L,R){return _(L),L(R)}},S=new k;a.isEquals=S.update.isEquals,a.extend=S.extend,a.default=S.update,a.default.default=e.exports=x(a.default,a);function E(L,R,F){c(Array.isArray(L),function(){return"update(): expected target of "+i(F)+" to be an array; got "+i(L)+"."}),T(R[F],F)}function T(L,R){c(Array.isArray(L),function(){return"update(): expected spec of "+i(R)+" to be an array; got "+i(L)+". Did you forget to wrap your parameter in an array?"})}function M(L,R){c(Array.isArray(L),function(){return"Expected $splice target to be an array; got "+i(L)}),z(R.$splice)}function z(L){c(Array.isArray(L),function(){return"update(): expected spec of $splice to be an array of arrays; got "+i(L)+". Did you forget to wrap your parameters in an array?"})}function _(L){c(typeof L=="function",function(){return"update(): expected spec of $apply to be a function; got "+i(L)+"."})}function B(L){c(Object.keys(L).length===1,function(){return"Cannot have more than one key in an object with $set"})}function N(L,R){c(R&&typeof R=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+i(R)}),c(L&&typeof L=="object",function(){return"update(): $merge expects a target of type 'object'; got "+i(L)})}function U(L,R){var F=m(L);c(F==="Map"||F==="Set",function(){return"update(): "+i(R)+" expects a target of type Set or Map; got "+i(F)})}})(eu,eu.exports)),eu.exports}var NS=_S();const Ka=_u(NS);var mv="popstate";function vv(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function HS(e={}){function a(c,u){let{pathname:h="/",search:p="",hash:m=""}=_i(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Kh("",{pathname:h,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(c,u){let h=c.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let m=c.location.href,x=m.indexOf("#");p=x===-1?m:m.slice(0,x)}return p+"#"+(typeof u=="string"?u:vs(u))}function o(c,u){ra(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return US(a,i,o,e)}function it(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function ra(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function xv(e,a){return{usr:e.state,key:e.key,idx:a,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Kh(e,a,i=null,o,c){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?_i(a):a,state:i,key:a&&a.key||o||BS(),unstable_mask:c}}function vs({pathname:e="/",search:a="",hash:i=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function _i(e){let a={};if(e){let i=e.indexOf("#");i>=0&&(a.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function US(e,a,i,o={}){let{window:c=document.defaultView,v5Compat:u=!1}=o,h=c.history,p="POP",m=null,x=b();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function b(){return(h.state||{idx:null}).idx}function v(){p="POP";let T=b(),M=T==null?null:T-x;x=T,m&&m({action:p,location:E.location,delta:M})}function k(T,M){p="PUSH";let z=vv(T)?T:Kh(E.location,T,M);i&&i(z,T),x=b()+1;let _=xv(z,x),B=E.createHref(z.unstable_mask||z);try{h.pushState(_,"",B)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;c.location.assign(B)}u&&m&&m({action:p,location:E.location,delta:1})}function C(T,M){p="REPLACE";let z=vv(T)?T:Kh(E.location,T,M);i&&i(z,T),x=b();let _=xv(z,x),B=E.createHref(z.unstable_mask||z);h.replaceState(_,"",B),u&&m&&m({action:p,location:E.location,delta:0})}function S(T){return IS(T)}let E={get action(){return p},get location(){return e(c,h)},listen(T){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(mv,v),m=T,()=>{c.removeEventListener(mv,v),m=null}},createHref(T){return a(c,T)},createURL:S,encodeLocation(T){let M=S(T);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:k,replace:C,go(T){return h.go(T)}};return E}function IS(e,a=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),it(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:vs(e);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function $y(e,a,i="/"){return GS(e,a,i,!1)}function GS(e,a,i,o){let c=typeof a=="string"?_i(a):a,u=ir(c.pathname||"/",i);if(u==null)return null;let h=zy(e);qS(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let x=e9(u);p=KS(h[m],x,o)}return p}function zy(e,a=[],i=[],o="",c=!1){let u=(h,p,m=c,x)=>{let b={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&m)return;it(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let v=ba([o,b.relativePath]),k=i.concat(b);h.children&&h.children.length>0&&(it(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),zy(h.children,a,k,v,m)),!(h.path==null&&!h.index)&&a.push({path:v,score:XS(v,h.index),routesMeta:k})};return e.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))u(h,p);else for(let m of Ay(h.path))u(h,p,!0,m)}),a}function Ay(e){let a=e.split("/");if(a.length===0)return[];let[i,...o]=a,c=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return c?[u,""]:[u];let h=Ay(o.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),c&&p.push(...h),p.map(m=>e.startsWith("/")&&m===""?"/":m)}function qS(e){e.sort((a,i)=>a.score!==i.score?i.score-a.score:QS(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var PS=/^:[\w-]+$/,FS=3,WS=2,VS=1,YS=10,ZS=-2,yv=e=>e==="*";function XS(e,a){let i=e.split("/"),o=i.length;return i.some(yv)&&(o+=ZS),a&&(o+=WS),i.filter(c=>!yv(c)).reduce((c,u)=>c+(PS.test(u)?FS:u===""?VS:YS),o)}function QS(e,a){return e.length===a.length&&e.slice(0,-1).every((o,c)=>o===a[c])?e[e.length-1]-a[a.length-1]:0}function KS(e,a,i=!1){let{routesMeta:o}=e,c={},u="/",h=[];for(let p=0;p<o.length;++p){let m=o[p],x=p===o.length-1,b=u==="/"?a:a.slice(u.length)||"/",v=Eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:x},b),k=m.route;if(!v&&x&&i&&!o[o.length-1].route.index&&(v=Eu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!v)return null;Object.assign(c,v.params),h.push({params:c,pathname:ba([u,v.pathname]),pathnameBase:r9(ba([u,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(u=ba([u,v.pathnameBase]))}return h}function Eu(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=JS(e.path,e.caseSensitive,e.end),c=a.match(i);if(!c)return null;let u=c[0],h=u.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:o.reduce((x,{paramName:b,isOptional:v},k)=>{if(b==="*"){let S=p[k]||"";h=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const C=p[k];return v&&!C?x[b]=void 0:x[b]=(C||"").replace(/%2F/g,"/"),x},{}),pathname:u,pathnameBase:h,pattern:e}}function JS(e,a=!1,i=!0){ra(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],c="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m,x,b)=>{if(o.push({paramName:p,isOptional:m!=null}),m){let v=b.charAt(x+h.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),c+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":e!==""&&e!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),o]}function e9(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return ra(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function ir(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}var t9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function n9(e,a="/"){let{pathname:i,search:o="",hash:c=""}=typeof e=="string"?_i(e):e,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=bv(i.substring(1),"/"):u=bv(i,a)):u=a,{pathname:u,search:i9(o),hash:o9(c)}}function bv(e,a){let i=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function bh(e,a,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function a9(e){return e.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Ry(e){let a=a9(e);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function O0(e,a,i,o=!1){let c;typeof e=="string"?c=_i(e):(c={...e},it(!c.pathname||!c.pathname.includes("?"),bh("?","pathname","search",c)),it(!c.pathname||!c.pathname.includes("#"),bh("#","pathname","hash",c)),it(!c.search||!c.search.includes("#"),bh("#","search","hash",c)));let u=e===""||c.pathname==="",h=u?"/":c.pathname,p;if(h==null)p=i;else{let v=a.length-1;if(!o&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),v-=1;c.pathname=k.join("/")}p=v>=0?a[v]:"/"}let m=n9(c,p),x=h&&h!=="/"&&h.endsWith("/"),b=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(x||b)&&(m.pathname+="/"),m}var ba=e=>e.join("/").replace(/\/\/+/g,"/"),r9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,l9=class{constructor(e,a,i,o=!1){this.status=e,this.statusText=a||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function s9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function c9(e){return e.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _y(e,a){let i=e;if(typeof i!="string"||!t9.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,c=!1;if(Dy)try{let u=new URL(window.location.href),h=i.startsWith("//")?new URL(u.protocol+i):new URL(i),p=ir(h.pathname,a);h.origin===u.origin&&p!=null?i=p+h.search+h.hash:c=!0}catch{ra(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ny=["POST","PUT","PATCH","DELETE"];new Set(Ny);var u9=["GET",...Ny];new Set(u9);var Wo=f.createContext(null);Wo.displayName="DataRouter";var Pu=f.createContext(null);Pu.displayName="DataRouterState";var d9=f.createContext(!1),Hy=f.createContext({isTransitioning:!1});Hy.displayName="ViewTransition";var f9=f.createContext(new Map);f9.displayName="Fetchers";var h9=f.createContext(null);h9.displayName="Await";var qn=f.createContext(null);qn.displayName="Navigation";var ks=f.createContext(null);ks.displayName="Location";var or=f.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var $0=f.createContext(null);$0.displayName="RouteError";var By="REACT_ROUTER_ERROR",g9="REDIRECT",p9="ROUTE_ERROR_RESPONSE";function m9(e){if(e.startsWith(`${By}:${g9}:{`))try{let a=JSON.parse(e.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function v9(e){if(e.startsWith(`${By}:${p9}:{`))try{let a=JSON.parse(e.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new l9(a.status,a.statusText,a.data)}catch{}}function x9(e,{relative:a}={}){it(Es(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=f.useContext(qn),{hash:c,pathname:u,search:h}=js(e,{relative:a}),p=u;return i!=="/"&&(p=u==="/"?i:ba([i,u])),o.createHref({pathname:p,search:h,hash:c})}function Es(){return f.useContext(ks)!=null}function ka(){return it(Es(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(ks).location}var Uy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iy(e){f.useContext(qn).static||f.useLayoutEffect(e)}function y9(){let{isDataRoute:e}=f.useContext(or);return e?z9():b9()}function b9(){it(Es(),"useNavigate() may be used only in the context of a <Router> component.");let e=f.useContext(Wo),{basename:a,navigator:i}=f.useContext(qn),{matches:o}=f.useContext(or),{pathname:c}=ka(),u=JSON.stringify(Ry(o)),h=f.useRef(!1);return Iy(()=>{h.current=!0}),f.useCallback((m,x={})=>{if(ra(h.current,Uy),!h.current)return;if(typeof m=="number"){i.go(m);return}let b=O0(m,JSON.parse(u),c,x.relative==="path");e==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:ba([a,b.pathname])),(x.replace?i.replace:i.push)(b,x.state,x)},[a,i,u,c,e])}f.createContext(null);function js(e,{relative:a}={}){let{matches:i}=f.useContext(or),{pathname:o}=ka(),c=JSON.stringify(Ry(i));return f.useMemo(()=>O0(e,JSON.parse(c),o,a==="path"),[e,c,o,a])}function w9(e,a){return Gy(e,a)}function Gy(e,a,i){it(Es(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=f.useContext(qn),{matches:c}=f.useContext(or),u=c[c.length-1],h=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",x=u&&u.route;{let T=x&&x.path||"";Py(p,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let b=ka(),v;if(a){let T=typeof a=="string"?_i(a):a;it(m==="/"||T.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=b;let k=v.pathname||"/",C=k;if(m!=="/"){let T=m.replace(/^\//,"").split("/");C="/"+k.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=$y(e,{pathname:C});ra(x||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),ra(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=j9(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},h,T.params),pathname:ba([m,o.encodeLocation?o.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:ba([m,o.encodeLocation?o.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),c,i);return a&&E?f.createElement(ks.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},E):E}function S9(){let e=$9(),a=s9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",e),h=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:u},"ErrorBoundary")," or"," ",f.createElement("code",{style:u},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},a),i?f.createElement("pre",{style:c},i):null,h)}var C9=f.createElement(S9,null),qy=class extends f.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.onError?this.props.onError(e,a):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=v9(e.digest);i&&(e=i)}let a=e!==void 0?f.createElement(or.Provider,{value:this.props.routeContext},f.createElement($0.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?f.createElement(k9,{error:e},a):a}};qy.contextType=d9;var wh=new WeakMap;function k9({children:e,error:a}){let{basename:i}=f.useContext(qn);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let o=m9(a.digest);if(o){let c=wh.get(a);if(c)throw c;let u=_y(o.location,i);if(Dy&&!wh.get(a))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw wh.set(a,h),h}return f.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return e}function E9({routeContext:e,match:a,children:i}){let o=f.useContext(Wo);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),f.createElement(or.Provider,{value:e},i)}function j9(e,a=[],i){let o=i?.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let c=e,u=o?.errors;if(u!=null){let b=c.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);it(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,b+1))}let h=!1,p=-1;if(i&&o){h=o.renderFallback;for(let b=0;b<c.length;b++){let v=c[b];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=b),v.route.id){let{loaderData:k,errors:C}=o,S=v.route.loader&&!k.hasOwnProperty(v.route.id)&&(!C||C[v.route.id]===void 0);if(v.route.lazy||S){i.isStatic&&(h=!0),p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}}let m=i?.onError,x=o&&m?(b,v)=>{m(b,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:c9(o.matches),errorInfo:v})}:void 0;return c.reduceRight((b,v,k)=>{let C,S=!1,E=null,T=null;o&&(C=u&&v.route.id?u[v.route.id]:void 0,E=v.route.errorElement||C9,h&&(p<0&&k===0?(Py("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):p===k&&(S=!0,T=v.route.hydrateFallbackElement||null)));let M=a.concat(c.slice(0,k+1)),z=()=>{let _;return C?_=E:S?_=T:v.route.Component?_=f.createElement(v.route.Component,null):v.route.element?_=v.route.element:_=b,f.createElement(E9,{match:v,routeContext:{outlet:b,matches:M,isDataRoute:o!=null},children:_})};return o&&(v.route.ErrorBoundary||v.route.errorElement||k===0)?f.createElement(qy,{location:o.location,revalidation:o.revalidation,component:E,error:C,children:z(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:x}):z()},null)}function z0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T9(e){let a=f.useContext(Wo);return it(a,z0(e)),a}function M9(e){let a=f.useContext(Pu);return it(a,z0(e)),a}function L9(e){let a=f.useContext(or);return it(a,z0(e)),a}function A0(e){let a=L9(e),i=a.matches[a.matches.length-1];return it(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function O9(){return A0("useRouteId")}function $9(){let e=f.useContext($0),a=M9("useRouteError"),i=A0("useRouteError");return e!==void 0?e:a.errors?.[i]}function z9(){let{router:e}=T9("useNavigate"),a=A0("useNavigate"),i=f.useRef(!1);return Iy(()=>{i.current=!0}),f.useCallback(async(c,u={})=>{ra(i.current,Uy),i.current&&(typeof c=="number"?await e.navigate(c):await e.navigate(c,{fromRouteId:a,...u}))},[e,a])}var wv={};function Py(e,a,i){!a&&!wv[e]&&(wv[e]=!0,ra(!1,i))}f.memo(A9);function A9({routes:e,future:a,state:i,isStatic:o,onError:c}){return Gy(e,void 0,{state:i,isStatic:o,onError:c})}function _t(e){it(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function R9({basename:e="/",children:a=null,location:i,navigationType:o="POP",navigator:c,static:u=!1,unstable_useTransitions:h}){it(!Es(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),m=f.useMemo(()=>({basename:p,navigator:c,static:u,unstable_useTransitions:h,future:{}}),[p,c,u,h]);typeof i=="string"&&(i=_i(i));let{pathname:x="/",search:b="",hash:v="",state:k=null,key:C="default",unstable_mask:S}=i,E=f.useMemo(()=>{let T=ir(x,p);return T==null?null:{location:{pathname:T,search:b,hash:v,state:k,key:C,unstable_mask:S},navigationType:o}},[p,x,b,v,k,C,o,S]);return ra(E!=null,`<Router basename="${p}"> is not able to match the URL "${x}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:f.createElement(qn.Provider,{value:m},f.createElement(ks.Provider,{children:a,value:E}))}function D9({children:e,location:a}){return w9(Jh(e),a)}function Jh(e,a=[]){let i=[];return f.Children.forEach(e,(o,c)=>{if(!f.isValidElement(o))return;let u=[...a,c];if(o.type===f.Fragment){i.push.apply(i,Jh(o.props.children,u));return}it(o.type===_t,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),it(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Jh(o.props.children,u)),i.push(h)}),i}var pu="get",mu="application/x-www-form-urlencoded";function Fu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function _9(e){return Fu(e)&&e.tagName.toLowerCase()==="button"}function N9(e){return Fu(e)&&e.tagName.toLowerCase()==="form"}function H9(e){return Fu(e)&&e.tagName.toLowerCase()==="input"}function B9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U9(e,a){return e.button===0&&(!a||a==="_self")&&!B9(e)}var tu=null;function I9(){if(tu===null)try{new FormData(document.createElement("form"),0),tu=!1}catch{tu=!0}return tu}var G9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sh(e){return e!=null&&!G9.has(e)?(ra(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):e}function q9(e,a){let i,o,c,u,h;if(N9(e)){let p=e.getAttribute("action");o=p?ir(p,a):null,i=e.getAttribute("method")||pu,c=Sh(e.getAttribute("enctype"))||mu,u=new FormData(e)}else if(_9(e)||H9(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||p.getAttribute("action");if(o=m?ir(m,a):null,i=e.getAttribute("formmethod")||p.getAttribute("method")||pu,c=Sh(e.getAttribute("formenctype"))||Sh(p.getAttribute("enctype"))||mu,u=new FormData(p,e),!I9()){let{name:x,type:b,value:v}=e;if(b==="image"){let k=x?`${x}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else x&&u.append(x,v)}}else{if(Fu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=pu,o=null,c=mu,h=e}return u&&c==="text/plain"&&(h=u,u=void 0),{action:o,method:i.toLowerCase(),encType:c,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function R0(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function P9(e,a,i,o){let c=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${o}`:c.pathname=`${c.pathname}.${o}`:c.pathname==="/"?c.pathname=`_root.${o}`:a&&ir(c.pathname,a)==="/"?c.pathname=`${a.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function F9(e,a){if(e.id in a)return a[e.id];try{let i=await import(e.module);return a[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function W9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function V9(e,a,i){let o=await Promise.all(e.map(async c=>{let u=a.routes[c.route.id];if(u){let h=await F9(u,i);return h.links?h.links():[]}return[]}));return Q9(o.flat(1).filter(W9).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Sv(e,a,i,o,c,u){let h=(m,x)=>i[x]?m.route.id!==i[x].route.id:!0,p=(m,x)=>i[x].pathname!==m.pathname||i[x].route.path?.endsWith("*")&&i[x].params["*"]!==m.params["*"];return u==="assets"?a.filter((m,x)=>h(m,x)||p(m,x)):u==="data"?a.filter((m,x)=>{let b=o.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(h(m,x)||p(m,x))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Y9(e,a,{includeHydrateFallback:i}={}){return Z9(e.map(o=>{let c=a.routes[o.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function Z9(e){return[...new Set(e)]}function X9(e){let a={},i=Object.keys(e).sort();for(let o of i)a[o]=e[o];return a}function Q9(e,a){let i=new Set;return new Set(a),e.reduce((o,c)=>{let u=JSON.stringify(X9(c));return i.has(u)||(i.add(u),o.push({key:u,link:c})),o},[])}function Fy(){let e=f.useContext(Wo);return R0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function K9(){let e=f.useContext(Pu);return R0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var D0=f.createContext(void 0);D0.displayName="FrameworkContext";function Wy(){let e=f.useContext(D0);return R0(e,"You must render this element inside a <HydratedRouter> element"),e}function J9(e,a){let i=f.useContext(D0),[o,c]=f.useState(!1),[u,h]=f.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:x,onMouseLeave:b,onTouchStart:v}=a,k=f.useRef(null);f.useEffect(()=>{if(e==="render"&&h(!0),e==="viewport"){let E=M=>{M.forEach(z=>{h(z.isIntersecting)})},T=new IntersectionObserver(E,{threshold:.5});return k.current&&T.observe(k.current),()=>{T.disconnect()}}},[e]),f.useEffect(()=>{if(o){let E=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(E)}}},[o]);let C=()=>{c(!0)},S=()=>{c(!1),h(!1)};return i?e!=="intent"?[u,k,{}]:[u,k,{onFocus:Gl(p,C),onBlur:Gl(m,S),onMouseEnter:Gl(x,C),onMouseLeave:Gl(b,S),onTouchStart:Gl(v,C)}]:[!1,k,{}]}function Gl(e,a){return i=>{e&&e(i),i.defaultPrevented||a(i)}}function eC({page:e,...a}){let{router:i}=Fy(),o=f.useMemo(()=>$y(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?f.createElement(nC,{page:e,matches:o,...a}):null}function tC(e){let{manifest:a,routeModules:i}=Wy(),[o,c]=f.useState([]);return f.useEffect(()=>{let u=!1;return V9(e,a,i).then(h=>{u||c(h)}),()=>{u=!0}},[e,a,i]),o}function nC({page:e,matches:a,...i}){let o=ka(),{future:c,manifest:u,routeModules:h}=Wy(),{basename:p}=Fy(),{loaderData:m,matches:x}=K9(),b=f.useMemo(()=>Sv(e,a,x,u,o,"data"),[e,a,x,u,o]),v=f.useMemo(()=>Sv(e,a,x,u,o,"assets"),[e,a,x,u,o]),k=f.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let E=new Set,T=!1;if(a.forEach(z=>{let _=u.routes[z.route.id];!_||!_.hasLoader||(!b.some(B=>B.route.id===z.route.id)&&z.route.id in m&&h[z.route.id]?.shouldRevalidate||_.hasClientLoader?T=!0:E.add(z.route.id))}),E.size===0)return[];let M=P9(e,p,c.unstable_trailingSlashAwareDataRequests,"data");return T&&E.size>0&&M.searchParams.set("_routes",a.filter(z=>E.has(z.route.id)).map(z=>z.route.id).join(",")),[M.pathname+M.search]},[p,c.unstable_trailingSlashAwareDataRequests,m,o,u,b,a,e,h]),C=f.useMemo(()=>Y9(v,u),[v,u]),S=tC(v);return f.createElement(f.Fragment,null,k.map(E=>f.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),C.map(E=>f.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:T})=>f.createElement("link",{key:E,nonce:i.nonce,...T,crossOrigin:T.crossOrigin??i.crossOrigin})))}function aC(...e){return a=>{e.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var rC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rC&&(window.__reactRouterVersion="7.13.1")}catch{}function iC({basename:e,children:a,unstable_useTransitions:i,window:o}){let c=f.useRef();c.current==null&&(c.current=HS({window:o,v5Compat:!0}));let u=c.current,[h,p]=f.useState({action:u.action,location:u.location}),m=f.useCallback(x=>{i===!1?p(x):f.startTransition(()=>p(x))},[i]);return f.useLayoutEffect(()=>u.listen(m),[u,m]),f.createElement(R9,{basename:e,children:a,location:h.location,navigationType:h.action,navigator:u,unstable_useTransitions:i})}var Vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=f.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:c,reloadDocument:u,replace:h,unstable_mask:p,state:m,target:x,to:b,preventScrollReset:v,viewTransition:k,unstable_defaultShouldRevalidate:C,...S},E){let{basename:T,navigator:M,unstable_useTransitions:z}=f.useContext(qn),_=typeof b=="string"&&Vy.test(b),B=_y(b,T);b=B.to;let N=x9(b,{relative:c}),U=ka(),L=null;if(p){let ne=O0(p,[],U.unstable_mask?U.unstable_mask.pathname:"/",!0);T!=="/"&&(ne.pathname=ne.pathname==="/"?T:ba([T,ne.pathname])),L=M.createHref(ne)}let[R,F,J]=J9(o,S),q=cC(b,{replace:h,unstable_mask:p,state:m,target:x,preventScrollReset:v,relative:c,viewTransition:k,unstable_defaultShouldRevalidate:C,unstable_useTransitions:z});function ee(ne){a&&a(ne),ne.defaultPrevented||q(ne)}let re=!(B.isExternal||u),Q=f.createElement("a",{...S,...J,href:(re?L:void 0)||B.absoluteURL||N,onClick:re?ee:a,ref:aC(E,F),target:x,"data-discover":!_&&i==="render"?"true":void 0});return R&&!_?f.createElement(f.Fragment,null,Q,f.createElement(eC,{page:N})):Q});He.displayName="Link";var oC=f.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:c=!1,style:u,to:h,viewTransition:p,children:m,...x},b){let v=js(h,{relative:x.relative}),k=ka(),C=f.useContext(Pu),{navigator:S,basename:E}=f.useContext(qn),T=C!=null&&gC(v)&&p===!0,M=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,z=k.pathname,_=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(z=z.toLowerCase(),_=_?_.toLowerCase():null,M=M.toLowerCase()),_&&E&&(_=ir(_,E)||_);const B=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let N=z===M||!c&&z.startsWith(M)&&z.charAt(B)==="/",U=_!=null&&(_===M||!c&&_.startsWith(M)&&_.charAt(M.length)==="/"),L={isActive:N,isPending:U,isTransitioning:T},R=N?a:void 0,F;typeof o=="function"?F=o(L):F=[o,N?"active":null,U?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let J=typeof u=="function"?u(L):u;return f.createElement(He,{...x,"aria-current":R,className:F,ref:b,style:J,to:h,viewTransition:p},typeof m=="function"?m(L):m)});oC.displayName="NavLink";var lC=f.forwardRef(({discover:e="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:c,state:u,method:h=pu,action:p,onSubmit:m,relative:x,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:k,...C},S)=>{let{unstable_useTransitions:E}=f.useContext(qn),T=fC(),M=hC(p,{relative:x}),z=h.toLowerCase()==="get"?"get":"post",_=typeof p=="string"&&Vy.test(p),B=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let U=N.nativeEvent.submitter,L=U?.getAttribute("formmethod")||h,R=()=>T(U||N.currentTarget,{fetcherKey:a,method:L,navigate:i,replace:c,state:u,relative:x,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:k});E&&i!==!1?f.startTransition(()=>R()):R()};return f.createElement("form",{ref:S,method:z,action:M,onSubmit:o?m:B,...C,"data-discover":!_&&e==="render"?"true":void 0})});lC.displayName="Form";function sC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yy(e){let a=f.useContext(Wo);return it(a,sC(e)),a}function cC(e,{target:a,replace:i,unstable_mask:o,state:c,preventScrollReset:u,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:x}={}){let b=y9(),v=ka(),k=js(e,{relative:h});return f.useCallback(C=>{if(U9(C,a)){C.preventDefault();let S=i!==void 0?i:vs(v)===vs(k),E=()=>b(e,{replace:S,unstable_mask:o,state:c,preventScrollReset:u,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:m});x?f.startTransition(()=>E()):E()}},[v,b,k,i,o,c,a,e,u,h,p,m,x])}var uC=0,dC=()=>`__${String(++uC)}__`;function fC(){let{router:e}=Yy("useSubmit"),{basename:a}=f.useContext(qn),i=O9(),o=e.fetch,c=e.navigate;return f.useCallback(async(u,h={})=>{let{action:p,method:m,encType:x,formData:b,body:v}=q9(u,a);if(h.navigate===!1){let k=h.fetcherKey||dC();await o(k,i,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:v,formMethod:h.method||m,formEncType:h.encType||x,flushSync:h.flushSync})}else await c(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:b,body:v,formMethod:h.method||m,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:i,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,c,a,i])}function hC(e,{relative:a}={}){let{basename:i}=f.useContext(qn),o=f.useContext(or);it(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),u={...js(e||".",{relative:a})},h=ka();if(e==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(b=>b==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let b=p.toString();u.search=b?`?${b}`:""}}return(!e||e===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ba([i,u.pathname])),vs(u)}function gC(e,{relative:a}={}){let i=f.useContext(Hy);it(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Yy("useViewTransitionState"),c=js(e,{relative:a});if(!i.isTransitioning)return!1;let u=ir(i.currentLocation.pathname,o)||i.currentLocation.pathname,h=ir(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Eu(c.pathname,h)!=null||Eu(c.pathname,u)!=null}var Ch={},jn={},kh={},Cv;function Ea(){return Cv||(Cv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.DEFAULT_HEARTBEAT=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var a=1,i=1e3*a;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*i,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},e.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3};var o;(function(u){u[u.UNINSTANTIATED=-1]="UNINSTANTIATED",u[u.CONNECTING=0]="CONNECTING",u[u.OPEN=1]="OPEN",u[u.CLOSING=2]="CLOSING",u[u.CLOSED=3]="CLOSED"})(o||(e.ReadyState=o={}));var c=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&c()})(kh)),kh}var ql={},Eh={},kv;function _0(){return kv||(kv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var a=function(i){if(i&&e.sharedWebSockets.hasOwnProperty(i))delete e.sharedWebSockets[i];else for(var o in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(o)&&delete e.sharedWebSockets[o]};e.resetWebSockets=a})(Eh)),Eh}var yi={},Ya={},Ev;function N0(){if(Ev)return Ya;Ev=1,Object.defineProperty(Ya,"__esModule",{value:!0}),Ya.setUpSocketIOPing=Ya.appendQueryParams=Ya.parseSocketIOUrl=void 0;var e=Ea(),a=function(c){if(c){var u=/^https|wss/.test(c),h=c.replace(/^(https?|wss?)(:\/\/)?/,""),p=h.replace(/\/$/,""),m=u?"wss":"ws";return"".concat(m,"://").concat(p).concat(e.SOCKET_IO_PATH)}else if(c===""){var u=/^https/.test(window.location.protocol),m=u?"wss":"ws",x=window.location.port?":".concat(window.location.port):"";return"".concat(m,"://").concat(window.location.hostname).concat(x).concat(e.SOCKET_IO_PATH)}return c};Ya.parseSocketIOUrl=a;var i=function(c,u){u===void 0&&(u={});var h=/\?([\w]+=[\w]+)/,p=h.test(c),m="".concat(Object.entries(u).reduce(function(x,b){var v=b[0],k=b[1];return x+"".concat(v,"=").concat(k,"&")},"").slice(0,-1));return"".concat(c).concat(p?"&":"?").concat(m)};Ya.appendQueryParams=i;var o=function(c,u){u===void 0&&(u=e.SOCKET_IO_PING_INTERVAL);var h=function(){return c(e.SOCKET_IO_PING_CODE)};return window.setInterval(h,u)};return Ya.setUpSocketIOPing=o,Ya}var nu={},jv;function Zy(){if(jv)return nu;jv=1,Object.defineProperty(nu,"__esModule",{value:!0}),nu.heartbeat=i;var e=Ea();function a(o){return Array.isArray(o)?o.reduce(function(c,u){return c.current>u.current?c:u}).current:o.current}function i(o,c,u){var h=u||{},p=h.interval,m=p===void 0?e.DEFAULT_HEARTBEAT.interval:p,x=h.timeout,b=x===void 0?e.DEFAULT_HEARTBEAT.timeout:x,v=h.message,k=v===void 0?e.DEFAULT_HEARTBEAT.message:v,C=Math.max(100,m/10),S=Date.now(),E=setInterval(function(){var T=Date.now(),M=a(c);if(M+b<=T)console.warn("Heartbeat timed out, closing connection, last message received ".concat(T-M,"ms ago, last ping sent ").concat(T-S,"ms ago")),o.close();else if(M+m<=T&&S+m<=T)try{typeof k=="function"?o.send(k()):o.send(k),S=T}catch(z){console.error("Heartbeat failed, closing connection",z instanceof Error?z.message:z),o.close()}},C);return o.addEventListener("close",function(){clearInterval(E)}),function(){}}return nu}var Pl={},jh={},Tv;function H0(){return Tv||(Tv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var a={},i=[],o=function(m){return(0,e.hasSubscribers)(m)?Array.from(a[m]):i};e.getSubscribers=o;var c=function(m){var x;return((x=a[m])===null||x===void 0?void 0:x.size)>0};e.hasSubscribers=c;var u=function(m,x){a[m]=a[m]||new Set,a[m].add(x)};e.addSubscriber=u;var h=function(m,x){a[m].delete(x)};e.removeSubscriber=h;var p=function(m){if(m&&a.hasOwnProperty(m))delete a[m];else for(var x in a)a.hasOwnProperty(x)&&delete a[x]};e.resetSubscribers=p})(jh)),jh}var Mv;function B0(){if(Mv)return Pl;Mv=1,Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.assertIsWebSocket=i,Pl.resetGlobalState=o;var e=_0(),a=H0();function i(c,u){if(!u&&!(c instanceof WebSocket))throw new Error("")}function o(c){(0,a.resetSubscribers)(c),(0,e.resetWebSockets)(c)}return Pl}var Lv;function pC(){if(Lv)return yi;Lv=1;var e=yi&&yi.__assign||function(){return e=Object.assign||function(b){for(var v,k=1,C=arguments.length;k<C;k++){v=arguments[k];for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(b[S]=v[S])}return b},e.apply(this,arguments)};Object.defineProperty(yi,"__esModule",{value:!0}),yi.attachListeners=void 0;var a=N0(),i=Zy(),o=Ea(),c=B0(),u=function(b,v,k,C){b.onmessage=function(S){var E;v.current.onMessage&&v.current.onMessage(S),typeof C?.current=="number"&&(C.current=Date.now()),!(typeof v.current.filter=="function"&&v.current.filter(S)!==!0)&&(v.current.heartbeat&&typeof v.current.heartbeat!="boolean"&&((E=v.current.heartbeat)===null||E===void 0?void 0:E.returnMessage)===S.data||k(S))}},h=function(b,v,k,C,S){b.onopen=function(E){if(v.current.onOpen&&v.current.onOpen(E),C.current=0,k(o.ReadyState.OPEN),v.current.heartbeat&&b instanceof WebSocket){var T=typeof v.current.heartbeat=="boolean"?void 0:v.current.heartbeat;S.current=Date.now(),(0,i.heartbeat)(b,S,T)}}},p=function(b,v,k,C,S){if(o.isEventSourceSupported&&b instanceof EventSource)return function(){};(0,c.assertIsWebSocket)(b,v.current.skipAssert);var E;return b.onclose=function(T){var M;if(v.current.onClose&&v.current.onClose(T),k(o.ReadyState.CLOSED),v.current.shouldReconnect&&v.current.shouldReconnect(T)){var z=(M=v.current.reconnectAttempts)!==null&&M!==void 0?M:o.DEFAULT_RECONNECT_LIMIT;if(S.current<z){var _=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},_??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(z),console.warn("Max reconnect attempts of ".concat(z," exceeded"))}},function(){return E&&window.clearTimeout(E)}},m=function(b,v,k,C,S){var E;return b.onerror=function(T){var M;if(v.current.onError&&v.current.onError(T),o.isEventSourceSupported&&b instanceof EventSource&&(v.current.onClose&&v.current.onClose(e(e({},T),{code:1006,reason:"An error occurred with the EventSource: ".concat(T),wasClean:!1})),k(o.ReadyState.CLOSED),b.close()),v.current.retryOnError)if(S.current<((M=v.current.reconnectAttempts)!==null&&M!==void 0?M:o.DEFAULT_RECONNECT_LIMIT)){var z=typeof v.current.reconnectInterval=="function"?v.current.reconnectInterval(S.current):v.current.reconnectInterval;E=window.setTimeout(function(){S.current++,C()},z??o.DEFAULT_RECONNECT_INTERVAL_MS)}else v.current.onReconnectStop&&v.current.onReconnectStop(v.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(v.current.reconnectAttempts," exceeded"))},function(){return E&&window.clearTimeout(E)}},x=function(b,v,k,C,S,E,T){var M=v.setLastMessage,z=v.setReadyState,_,B,N;return k.current.fromSocketIO&&(_=(0,a.setUpSocketIOPing)(T)),u(b,k,M,E),h(b,k,z,S,E),B=p(b,k,z,C,S),N=m(b,k,z,C,S),function(){z(o.ReadyState.CLOSING),B(),N(),b.close(),_&&clearInterval(_)}};return yi.attachListeners=x,yi}var bi={},Ov;function mC(){if(Ov)return bi;Ov=1;var e=bi&&bi.__assign||function(){return e=Object.assign||function(v){for(var k,C=1,S=arguments.length;C<S;C++){k=arguments[C];for(var E in k)Object.prototype.hasOwnProperty.call(k,E)&&(v[E]=k[E])}return v},e.apply(this,arguments)};Object.defineProperty(bi,"__esModule",{value:!0}),bi.attachSharedListeners=void 0;var a=_0(),i=Ea(),o=H0(),c=N0(),u=Zy(),h=function(v,k,C){v.onmessage=function(S){(0,o.getSubscribers)(k).forEach(function(E){var T;E.optionsRef.current.onMessage&&E.optionsRef.current.onMessage(S),typeof((T=E?.lastMessageTime)===null||T===void 0?void 0:T.current)=="number"&&(E.lastMessageTime.current=Date.now()),!(typeof E.optionsRef.current.filter=="function"&&E.optionsRef.current.filter(S)!==!0)&&(C&&typeof C!="boolean"&&C?.returnMessage===S.data||E.setLastMessage(S))})}},p=function(v,k,C){v.onopen=function(S){var E=(0,o.getSubscribers)(k);E.forEach(function(T){T.reconnectCount.current=0,T.optionsRef.current.onOpen&&T.optionsRef.current.onOpen(S),T.setReadyState(i.ReadyState.OPEN),C&&v instanceof WebSocket&&(T.lastMessageTime.current=Date.now())}),C&&v instanceof WebSocket&&(0,u.heartbeat)(v,E.map(function(T){return T.lastMessageTime}),typeof C=="boolean"?void 0:C)}},m=function(v,k){v instanceof WebSocket&&(v.onclose=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onClose&&S.optionsRef.current.onClose(C),S.setReadyState(i.ReadyState.CLOSED)}),delete a.sharedWebSockets[k],(0,o.getSubscribers)(k).forEach(function(S){var E;if(S.optionsRef.current.shouldReconnect&&S.optionsRef.current.shouldReconnect(C)){var T=(E=S.optionsRef.current.reconnectAttempts)!==null&&E!==void 0?E:i.DEFAULT_RECONNECT_LIMIT;if(S.reconnectCount.current<T){var M=typeof S.optionsRef.current.reconnectInterval=="function"?S.optionsRef.current.reconnectInterval(S.reconnectCount.current):S.optionsRef.current.reconnectInterval;setTimeout(function(){S.reconnectCount.current++,S.reconnect.current()},M??i.DEFAULT_RECONNECT_INTERVAL_MS)}else S.optionsRef.current.onReconnectStop&&S.optionsRef.current.onReconnectStop(S.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(T," exceeded"))}})})},x=function(v,k){v.onerror=function(C){(0,o.getSubscribers)(k).forEach(function(S){S.optionsRef.current.onError&&S.optionsRef.current.onError(C),i.isEventSourceSupported&&v instanceof EventSource&&(S.optionsRef.current.onClose&&S.optionsRef.current.onClose(e(e({},C),{code:1006,reason:"An error occurred with the EventSource: ".concat(C),wasClean:!1})),S.setReadyState(i.ReadyState.CLOSED))}),i.isEventSourceSupported&&v instanceof EventSource&&v.close()}},b=function(v,k,C,S){var E;return C.current.fromSocketIO&&(E=(0,c.setUpSocketIOPing)(S)),h(v,k,C.current.heartbeat),m(v,k),p(v,k,C.current.heartbeat),x(v,k),function(){E&&clearInterval(E)}};return bi.attachSharedListeners=b,bi}var $v;function vC(){if($v)return ql;$v=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.createOrJoinSocket=void 0;var e=_0(),a=Ea(),i=pC(),o=mC(),c=H0(),u=function(p,m,x,b,v){return function(){if((0,c.removeSubscriber)(p,m),!(0,c.hasSubscribers)(p)){try{var k=e.sharedWebSockets[p];k instanceof WebSocket&&(k.onclose=function(C){x.current.onClose&&x.current.onClose(C),b(a.ReadyState.CLOSED)}),k.close()}catch{}v&&v(),delete e.sharedWebSockets[p]}}},h=function(p,m,x,b,v,k,C,S,E){if(!a.isEventSourceSupported&&b.current.eventSourceOptions)throw a.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(b.current.share){var T=null;e.sharedWebSockets[m]===void 0?(e.sharedWebSockets[m]=b.current.eventSourceOptions?new EventSource(m,b.current.eventSourceOptions):new WebSocket(m,b.current.protocols),p.current=e.sharedWebSockets[m],x(a.ReadyState.CONNECTING),T=(0,o.attachSharedListeners)(e.sharedWebSockets[m],m,b,E)):(p.current=e.sharedWebSockets[m],x(e.sharedWebSockets[m].readyState));var M={setLastMessage:v,setReadyState:x,optionsRef:b,reconnectCount:C,lastMessageTime:S,reconnect:k};return(0,c.addSubscriber)(m,M),u(m,M,b,x,T)}else{if(p.current=b.current.eventSourceOptions?new EventSource(m,b.current.eventSourceOptions):new WebSocket(m,b.current.protocols),x(a.ReadyState.CONNECTING),!p.current)throw new Error("WebSocket failed to be created");return(0,i.attachListeners)(p.current,{setLastMessage:v,setReadyState:x},b,k.current,C,S,E)}};return ql.createOrJoinSocket=h,ql}var Za={},zv;function xC(){return zv||(zv=1,(function(e){var a=Za&&Za.__awaiter||function(m,x,b,v){function k(C){return C instanceof b?C:new b(function(S){S(C)})}return new(b||(b=Promise))(function(C,S){function E(z){try{M(v.next(z))}catch(_){S(_)}}function T(z){try{M(v.throw(z))}catch(_){S(_)}}function M(z){z.done?C(z.value):k(z.value).then(E,T)}M((v=v.apply(m,x||[])).next())})},i=Za&&Za.__generator||function(m,x){var b={label:0,sent:function(){if(C[0]&1)throw C[1];return C[1]},trys:[],ops:[]},v,k,C,S=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return S.next=E(0),S.throw=E(1),S.return=E(2),typeof Symbol=="function"&&(S[Symbol.iterator]=function(){return this}),S;function E(M){return function(z){return T([M,z])}}function T(M){if(v)throw new TypeError("Generator is already executing.");for(;S&&(S=0,M[0]&&(b=0)),b;)try{if(v=1,k&&(C=M[0]&2?k.return:M[0]?k.throw||((C=k.return)&&C.call(k),0):k.next)&&!(C=C.call(k,M[1])).done)return C;switch(k=0,C&&(M=[M[0]&2,C.value]),M[0]){case 0:case 1:C=M;break;case 4:return b.label++,{value:M[1],done:!1};case 5:b.label++,k=M[1],M=[0];continue;case 7:M=b.ops.pop(),b.trys.pop();continue;default:if(C=b.trys,!(C=C.length>0&&C[C.length-1])&&(M[0]===6||M[0]===2)){b=0;continue}if(M[0]===3&&(!C||M[1]>C[0]&&M[1]<C[3])){b.label=M[1];break}if(M[0]===6&&b.label<C[1]){b.label=C[1],C=M;break}if(C&&b.label<C[2]){b.label=C[2],b.ops.push(M);break}C[2]&&b.ops.pop(),b.trys.pop();continue}M=x.call(m,b)}catch(z){M=[6,z],k=0}finally{v=C=0}if(M[0]&5)throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}},o=Za&&Za.__spreadArray||function(m,x,b){if(b||arguments.length===2)for(var v=0,k=x.length,C;v<k;v++)(C||!(v in x))&&(C||(C=Array.prototype.slice.call(x,0,v)),C[v]=x[v]);return m.concat(C||Array.prototype.slice.call(x))};Object.defineProperty(e,"__esModule",{value:!0}),e.getUrl=void 0;var c=N0(),u=Ea(),h=function(m){return new Promise(function(x){return window.setTimeout(x,m)})},p=function(m,x){for(var b=[],v=2;v<arguments.length;v++)b[v-2]=arguments[v];return a(void 0,o([m,x],b,!0),void 0,function(k,C,S){var E,T,M,z,_,B,N,U;return S===void 0&&(S=0),i(this,function(L){switch(L.label){case 0:if(typeof k!="function")return[3,10];L.label=1;case 1:return L.trys.push([1,3,,9]),[4,k()];case 2:return E=L.sent(),[3,9];case 3:return L.sent(),C.current.retryOnError?(T=(B=C.current.reconnectAttempts)!==null&&B!==void 0?B:u.DEFAULT_RECONNECT_LIMIT,S<T?(M=typeof C.current.reconnectInterval=="function"?C.current.reconnectInterval(S):C.current.reconnectInterval,[4,h(M??u.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return L.sent(),[2,(0,e.getUrl)(k,C,S+1)];case 5:return(U=(N=C.current).onReconnectStop)===null||U===void 0||U.call(N,S),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:E=k,L.label=11;case 11:return z=C.current.fromSocketIO?(0,c.parseSocketIOUrl)(E):E,_=C.current.queryParams?(0,c.appendQueryParams)(z,C.current.queryParams):z,[2,_]}})})};e.getUrl=p})(Za)),Za}var Th={},Av;function yC(){return Av||(Av=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var a=function(i,o){return new Proxy(i,{get:function(c,u){var h=c[u];return u==="reconnect"?o:typeof h=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):h},set:function(c,u,h){return/^on/.test(u)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(c[u]=h,!0)}})};e.websocketWrapper=a,e.default=e.websocketWrapper})(Th)),Th}var Rv;function U0(){if(Rv)return jn;Rv=1;var e=jn&&jn.__assign||function(){return e=Object.assign||function(k){for(var C,S=1,E=arguments.length;S<E;S++){C=arguments[S];for(var T in C)Object.prototype.hasOwnProperty.call(C,T)&&(k[T]=C[T])}return k},e.apply(this,arguments)},a=jn&&jn.__awaiter||function(k,C,S,E){function T(M){return M instanceof S?M:new S(function(z){z(M)})}return new(S||(S=Promise))(function(M,z){function _(U){try{N(E.next(U))}catch(L){z(L)}}function B(U){try{N(E.throw(U))}catch(L){z(L)}}function N(U){U.done?M(U.value):T(U.value).then(_,B)}N((E=E.apply(k,C||[])).next())})},i=jn&&jn.__generator||function(k,C){var S={label:0,sent:function(){if(M[0]&1)throw M[1];return M[1]},trys:[],ops:[]},E,T,M,z=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return z.next=_(0),z.throw=_(1),z.return=_(2),typeof Symbol=="function"&&(z[Symbol.iterator]=function(){return this}),z;function _(N){return function(U){return B([N,U])}}function B(N){if(E)throw new TypeError("Generator is already executing.");for(;z&&(z=0,N[0]&&(S=0)),S;)try{if(E=1,T&&(M=N[0]&2?T.return:N[0]?T.throw||((M=T.return)&&M.call(T),0):T.next)&&!(M=M.call(T,N[1])).done)return M;switch(T=0,M&&(N=[N[0]&2,M.value]),N[0]){case 0:case 1:M=N;break;case 4:return S.label++,{value:N[1],done:!1};case 5:S.label++,T=N[1],N=[0];continue;case 7:N=S.ops.pop(),S.trys.pop();continue;default:if(M=S.trys,!(M=M.length>0&&M[M.length-1])&&(N[0]===6||N[0]===2)){S=0;continue}if(N[0]===3&&(!M||N[1]>M[0]&&N[1]<M[3])){S.label=N[1];break}if(N[0]===6&&S.label<M[1]){S.label=M[1],M=N;break}if(M&&S.label<M[2]){S.label=M[2],S.ops.push(N);break}M[2]&&S.ops.pop(),S.trys.pop();continue}N=C.call(k,S)}catch(U){N=[6,U],T=0}finally{E=M=0}if(N[0]&5)throw N[1];return{value:N[0]?N[1]:void 0,done:!0}}},o=jn&&jn.__importDefault||function(k){return k&&k.__esModule?k:{default:k}};Object.defineProperty(jn,"__esModule",{value:!0}),jn.useWebSocket=void 0;var c=Di(),u=b0(),h=Ea(),p=vC(),m=xC(),x=o(yC()),b=B0(),v=function(k,C,S){C===void 0&&(C=h.DEFAULT_OPTIONS),S===void 0&&(S=!0);var E=(0,c.useState)(null),T=E[0],M=E[1],z=(0,c.useState)({}),_=z[0],B=z[1],N=(0,c.useMemo)(function(){if(!C.disableJson&&T)try{return JSON.parse(T.data)}catch{return h.UNPARSABLE_JSON_OBJECT}return null},[T,C.disableJson]),U=(0,c.useRef)(null),L=(0,c.useRef)(null),R=(0,c.useRef)(function(){}),F=(0,c.useRef)(0),J=(0,c.useRef)(Date.now()),q=(0,c.useRef)([]),ee=(0,c.useRef)(null),re=(0,c.useRef)(C);re.current=C;var Q=U.current&&_[U.current]!==void 0?_[U.current]:k!==null&&S===!0?h.ReadyState.CONNECTING:h.ReadyState.UNINSTANTIATED,ne=C.queryParams?JSON.stringify(C.queryParams):null,D=(0,c.useCallback)(function(oe,de){var O;if(de===void 0&&(de=!0),h.isEventSourceSupported&&L.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((O=L.current)===null||O===void 0?void 0:O.readyState)===h.ReadyState.OPEN?((0,b.assertIsWebSocket)(L.current,re.current.skipAssert),L.current.send(oe)):de&&q.current.push(oe)},[]),G=(0,c.useCallback)(function(oe,de){de===void 0&&(de=!0),D(JSON.stringify(oe),de)},[D]),ae=(0,c.useCallback)(function(){return re.current.share!==!0||h.isEventSourceSupported&&L.current instanceof EventSource?L.current:(ee.current===null&&L.current&&((0,b.assertIsWebSocket)(L.current,re.current.skipAssert),ee.current=(0,x.default)(L.current,R)),ee.current)},[]);return(0,c.useEffect)(function(){if(k!==null&&S===!0){var oe,de=!1,O=!0,W=function(){return a(void 0,void 0,void 0,function(){var Y,se,he;return i(this,function(me){switch(me.label){case 0:return Y=U,[4,(0,m.getUrl)(k,re)];case 1:return Y.current=me.sent(),U.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),U.current="ABORTED",(0,u.flushSync)(function(){return B(function(fe){return e(e({},fe),{ABORTED:h.ReadyState.CLOSED})})}),[2]):(se=function(fe){de||(0,u.flushSync)(function(){return M(fe)})},he=function(fe){de||(0,u.flushSync)(function(){return B(function(ye){var ve;return e(e({},ye),U.current&&(ve={},ve[U.current]=fe,ve))})})},O&&(oe=(0,p.createOrJoinSocket)(L,U.current,he,re,se,R,F,J,D)),[2])}})})};return R.current=function(){de||(ee.current&&(ee.current=null),oe?.(),W())},W(),function(){de=!0,O=!1,ee.current&&(ee.current=null),oe?.(),M(null)}}else(k===null||S===!1)&&(F.current=0,B(function(Y){var se;return e(e({},Y),U.current&&(se={},se[U.current]=h.ReadyState.CLOSED,se))}))},[k,S,ne,D]),(0,c.useEffect)(function(){Q===h.ReadyState.OPEN&&q.current.splice(0).forEach(function(oe){D(oe)})},[Q]),{sendMessage:D,sendJsonMessage:G,lastMessage:T,lastJsonMessage:N,readyState:Q,getWebSocket:ae}};return jn.useWebSocket=v,jn}var wi={},Dv;function bC(){if(Dv)return wi;Dv=1;var e=wi&&wi.__assign||function(){return e=Object.assign||function(p){for(var m,x=1,b=arguments.length;x<b;x++){m=arguments[x];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(p[v]=m[v])}return p},e.apply(this,arguments)};Object.defineProperty(wi,"__esModule",{value:!0}),wi.useSocketIO=void 0;var a=Di(),i=U0(),o=Ea(),c={type:"empty",payload:null},u=function(p){if(!p||!p.data)return c;var m=p.data.match(/\[.*]/);if(!m)return c;var x=JSON.parse(m);return!Array.isArray(x)||!x[1]?c:{type:x[0],payload:x[1]}},h=function(p,m,x){m===void 0&&(m=o.DEFAULT_OPTIONS),x===void 0&&(x=!0);var b=(0,a.useMemo)(function(){return e(e({},m),{fromSocketIO:!0})},[]),v=(0,i.useWebSocket)(p,b,x),k=v.sendMessage,C=v.sendJsonMessage,S=v.lastMessage,E=v.readyState,T=v.getWebSocket,M=(0,a.useMemo)(function(){return u(S)},[S]);return{sendMessage:k,sendJsonMessage:C,lastMessage:M,lastJsonMessage:M,readyState:E,getWebSocket:T}};return wi.useSocketIO=h,wi}var Xa={},_v;function wC(){if(_v)return Xa;_v=1;var e=Xa&&Xa.__assign||function(){return e=Object.assign||function(h){for(var p,m=1,x=arguments.length;m<x;m++){p=arguments[m];for(var b in p)Object.prototype.hasOwnProperty.call(p,b)&&(h[b]=p[b])}return h},e.apply(this,arguments)},a=Xa&&Xa.__rest||function(h,p){var m={};for(var x in h)Object.prototype.hasOwnProperty.call(h,x)&&p.indexOf(x)<0&&(m[x]=h[x]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,x=Object.getOwnPropertySymbols(h);b<x.length;b++)p.indexOf(x[b])<0&&Object.prototype.propertyIsEnumerable.call(h,x[b])&&(m[x[b]]=h[x[b]]);return m};Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.useEventSource=void 0;var i=Di(),o=U0(),c=Ea(),u=function(h,p,m){p===void 0&&(p=c.DEFAULT_EVENT_SOURCE_OPTIONS);var x=p.withCredentials,b=p.events,v=a(p,["withCredentials","events"]);m===void 0&&(m=!0);var k=e(e({},v),{eventSourceOptions:{withCredentials:x}}),C=(0,i.useRef)(c.EMPTY_EVENT_HANDLERS);b&&(C.current=b);var S=(0,o.useWebSocket)(h,k,m),E=S.lastMessage,T=S.readyState,M=S.getWebSocket;return(0,i.useEffect)(function(){E?.type&&Object.entries(C.current).forEach(function(z){var _=z[0],B=z[1];_===E.type&&B(E)})},[E]),{lastEvent:E,readyState:T,getEventSource:M}};return Xa.useEventSource=u,Xa}var Nv;function SC(){return Nv||(Nv=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var a=U0();Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.useWebSocket}});var i=bC();Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return i.useSocketIO}});var o=Ea();Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return o.ReadyState}});var c=wC();Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return c.useEventSource}});var u=B0();Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return u.resetGlobalState}})})(Ch)),Ch}var CC=SC();const kC=_u(CC),EC={ui:'Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;',data:'Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;'},Wu={icons:{weights:{light:1,regular:1.5,heavy:3,strong:5}},form:{button:{xsmall:{height:"20px",padding:"0 10px",iconSize:12},small:{height:"30px",padding:"0 20px",iconSize:14},normal:{height:"40px",padding:"0 20px",iconSize:16},large:{height:"60px",padding:"0 20px",iconSize:20}},input:{height:"40px"},switch:{outer:{width:"38px",height:"22px",borderRadius:"11px"},inner:{width:"16px",height:"16px",borderRadius:"8px"},positions:{top:"2px",off:"2px",neutral:"10px",locked:"2px",on:"18px"}}},global:{mainMenu:{width:{open:"280px",closed:"80px"}}}},tn={easing:{primary:{inOut:"cubic-bezier(0.87, 0, 0.13, 1)",out:"cubic-bezier(0.16, 1, 0.3, 1)",in:"cubic-bezier(0.7, 0, 0.84, 0)"}},speed:{faster:"0.085s",fast:"0.175s",normal:"0.35s",slow:"0.7s",slower:"1.4s",slowest:"2.8s"}},Do={small:0,medium:768,large:1024,xlarge:1280,xxlarge:1536},fn={small:`(min-width: ${Do.small}px)`,medium:`(min-width: ${Do.medium}px)`,large:`(min-width: ${Do.large}px)`,xlarge:`(min-width: ${Do.xlarge}px)`,xxlarge:`(min-width: ${Do.xxlarge}px)`},jC={pageHeader:{introduction:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},areaTitle:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},mainTitle:{textAlign:"left",fontSize:"26px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},form:{label:{meta:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},default:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},disabled:{textAlign:"left",fontSize:"16px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},failure:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--warning-8)"},"meta(Selected)":{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},tip:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-7)"},button:{secondary:{normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},primary:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}},danger:{large:{textAlign:"center",fontSize:"20px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},normal:{textAlign:"center",fontSize:"16px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},small:{textAlign:"center",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"},xsmall:{textAlign:"center",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--white-1)"}}},input:{label:{textAlign:"left",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},placeholder:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"16px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},compact:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"}},value:{normal:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--grey-12)"},compact:{textAlign:"left",fontSize:"14px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-12)"}}},labelInformation:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},select:{option:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--grey-11)"},selectedValue:{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--black-11)"},"option(Hover)":{textAlign:"left",fontSize:"16px",fontWeight:500,lineHeight:"15px",textDecoration:"none",color:"var(--primary-11)"}},feedback:{message:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"20px",textDecoration:"none",color:"var(--white-1)"}}},content:{"section-H2":{textAlign:"left",fontSize:"20px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},sectionH3:{textAlign:"left",fontSize:"16px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"},actionParagraph:{textAlign:"left",fontSize:"14px",fontWeight:300,lineHeight:"25px",textDecoration:"none",color:"var(--grey-11)"},hyperlink:{hover:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-8)"},base:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,lineHeight:"25px",textDecoration:"none",color:"var(--primary-9)"}}},feedbackBar:{message:{textAlign:"left",fontSize:"14px",fontWeight:400,lineHeight:"15px",letterSpacing:"-0.2px",textDecoration:"none",color:"var(--white-1)"}},searchBar:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:700,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-12)"}},meta:{tagList:{emptyStates:{normal:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"}},item:{normal:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"},small:{textAlign:"left",fontSize:"12px",fontWeight:600,textDecoration:"none",color:"var(--grey-11)"}}}},table:{columnData:{normalImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},highImportance:{right:{textAlign:"right",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},center:{textAlign:"center",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"},left:{textAlign:"left",fontSize:"14px",fontWeight:900,textDecoration:"none",color:"var(--grey-12)"}},firstColumn:{textAlign:"left",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},lowImportance:{right:{textAlign:"right",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},center:{textAlign:"center",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"},left:{textAlign:"left",fontStyle:"italic",fontSize:"14px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},unit:{textAlign:"right",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-a11)"}},header:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}},subHeader:{center:{textAlign:"center",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},left:{textAlign:"left",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"},right:{textAlign:"right",fontSize:"14px",fontWeight:700,letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-11)"}}},filters:{datepicker:{metaHeader:{default:{textAlign:"left",fontSize:"14px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"var(--primary-8)"}},calendar:{active:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},otherMonth:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-a8)"},default:{textAlign:"center",fontSize:"14px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},header:{textAlign:"center",fontSize:"12px",fontWeight:700,textDecoration:"none",color:"var(--grey-a12)"}},monthLink:{default:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--grey-9)"},hover:{textAlign:"center",fontSize:"12px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.4px",textDecoration:"none",color:"var(--white-1)"}},focusedMonth:{textAlign:"center",fontSize:"20px",fontWeight:400,lineHeight:"20px",letterSpacing:"0.5px",textDecoration:"none",color:"var(--grey-11)"},focusedYear:{textAlign:"center",fontSize:"10px",fontWeight:700,lineHeight:"20px",textTransform:"uppercase",letterSpacing:"0.3333333px",textDecoration:"none",color:"var(--grey-11)"}},value:{textAlign:"left",fontSize:"14px",fontWeight:500,letterSpacing:"0.2px",textDecoration:"none",color:"var(--grey-11)"},subOption:{label:{textAlign:"left",fontSize:"12px",fontWeight:300,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-a12)"}},presetAction:{textAlign:"left",fontSize:"13px",fontWeight:500,textDecoration:"none",color:"var(--grey-12)"},filterButton:{default:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-11)"},active:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"},hover:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--white-1)"}},searchInput:{placeholder:{textAlign:"left",fontStyle:"italic",fontSize:"12px",fontWeight:500,textDecoration:"none",color:"var(--grey-11)"},value:{textAlign:"left",fontSize:"12px",fontWeight:400,textDecoration:"none",color:"var(--grey-12)"}}},tables:{groupName:{textAlign:"left",fontSize:"12px",fontWeight:400,letterSpacing:"0.3px",textDecoration:"none",color:"var(--grey-a11)"}}},Un={pureBase:"var(--white-1)",pureTop:"var(--black-1)",divider:"var(--grey-6)",icons:{inverse:"var(--grey-1)",mono:"var(--grey-12)",dimmed:"var(--grey-11)",subtle:"var(--grey-10)",primary:"var(--primary-9)",danger:"var(--warning-9)",white:"var(--white-1)"},menu:{active:"var(--primary-9)",hover:"var(--primary-8)",default:"var(--grey-2)",indicator:"var(--grey-a1)",passive:"var(--primary-a7)"},feedback:{error:"var(--warning-8)",info:"var(--primary-7)",neutral:"var(--grey-9)",success:"var(--success-8)",warning:"var(--caution-10)"},status:{caution:"var(--caution-10)",danger:"var(--warning-8)",folder:"var(--primary-7)",highlight:"var(--primary-7)",good:"var(--success-7)",neutral:"var(--grey-5)"},transparent:"var(--black-a1)",input:{border:{default:"var(--grey-7)"}}},TC={generic:{transparent:{}},form:{input:{default:{normal:{backgroundColor:"var(--grey-1)",borderColor:Un.input.border.default,border:Un.input.border.default+" 1px solid"},focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},disabled:{normal:{backgroundColor:"var(--primary-2)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"}},subdivision:{backgroundColor:"var(--grey-7)"},required:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",backgroundColor:"var(--grey-1)"}},valid:{focused:{boxShadow:"0px 3px 5px 0px var(--success-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--success-7)",border:"var(--success-7) 2px solid"},normal:{borderColor:"var(--success-7)",border:"var(--success-7) 1px solid",backgroundColor:"var(--grey-1)"}},invalid:{focused:{boxShadow:"0px 3px 7px 0px var(--warning-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--warning-8)",border:"var(--warning-8) 2px solid"},normal:{borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid",backgroundColor:"var(--grey-1)"}},processing:{focused:{boxShadow:"0px 3px 7px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 2px solid"},normal:{backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}},seperatedValues:{background:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"},hoverHighlight:{backgroundColor:"var(--primary-7)"}}},button:{primary:{default:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},hover:{backgroundColor:"var(--primary-10)"},active:{backgroundColor:"var(--primary-9)"},divider:{backgroundColor:"var(--primary-a8)"},disabled:{backgroundColor:"var(--primary-a10)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"},actionArea:{backgroundColor:"var(--primary-9)",backgroundImage:"linear-gradient(135.00deg, var(--primary-9) 0%, var(--primary-8) 100%)"}},secondary:{default:{backgroundColor:"var(--grey-9)"},hover:{backgroundColor:"var(--grey-10)"},active:{backgroundColor:"var(--grey-9)"},disabled:{backgroundColor:"var(--grey-a10)"},divider:{backgroundColor:"var(--grey-a8)"},actionArea:{backgroundColor:"var(--grey-9)",backgroundImage:"linear-gradient(135.00deg, var(--grey-9) 0%, var(--grey-8) 100%)"}},danger:{default:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"},hover:{backgroundColor:"var(--warning-10)"},active:{backgroundColor:"var(--warning-9)"},disabled:{backgroundColor:"var(--warning-a10)"},divider:{backgroundColor:"var(--warning-8)"},actionArea:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)"}}},switch:{off:{default:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--primary-2) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-7) 0%, var(--primary-8) 100%)"}},disabled:{outer:{backgroundColor:"var(--grey-1)",backgroundImage:"linear-gradient(180.00deg, var(--grey-1)0%, var(--grey-1) 100%)",borderColor:"var(--grey-a7)",border:"var(--grey-a7) 1px solid"},inner:{backgroundColor:"var(--grey-7)"}},loading:{outer:{backgroundColor:"var(--grey-3)",backgroundImage:"linear-gradient(180.00deg, var(--grey-3) 0%, var(--primary-3) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"}}},on:{default:{outer:{backgroundColor:"var(--primary-7)",backgroundImage:"linear-gradient(317.51deg, var(--primary-7) 0%, var(--primary-7) 100%)",borderColor:"var(--primary-8)",border:"var(--primary-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},disabled:{outer:{backgroundColor:"var(--primary-5)",backgroundImage:"linear-gradient(180.00deg, var(--primary-5) 0%, var(--primary-5) 100%)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--primary-a7)",backgroundImage:"linear-gradient(315.00deg, var(--primary-a7) 0%, var(--primary-a7) 100%)",borderColor:"var(--primary-a8)",border:"var(--primary-a8) 1px solid"}}},failure:{default:{outer:{backgroundColor:"var(--warning-9)",backgroundImage:"linear-gradient(317.51deg, var(--warning-9) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-9)",border:"var(--warning-9) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0.4%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},danger:{default:{outer:{backgroundColor:"var(--warning-11)",backgroundImage:"linear-gradient(317.51deg, var(--warning-11) 0%, var(--warning-8) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"},inner:{backgroundColor:"var(--white-1)"}},loading:{outer:{backgroundColor:"var(--warning-8)",backgroundImage:"linear-gradient(317.51deg, var(--warning-8) 0%, var(--warning-7) 100%)",borderColor:"var(--warning-8)",border:"var(--warning-8) 1px solid"}},disabled:{outer:{backgroundColor:"var(--warning-7)",backgroundImage:"linear-gradient(317.51deg, var(--warning-7) 0%, var(--caution-6) 100%)",borderColor:"var(--warning-6)",border:"var(--warning-6) 1px solid"},inner:{backgroundColor:"var(--white-1)"}}},locked:{default:{outer:{backgroundColor:"var(--grey-1) ",backgroundImage:"linear-gradient(180.00deg, var(--grey-1) 0%, var(--grey-1) 100%)",borderColor:"var(--grey-a8)",border:"var(--grey-a8) 1px solid"},inner:{backgroundColor:"var(--grey-8)"}}}},checkbox:{unchecked:{disabled:{backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 2px solid"},default:{borderColor:"var(--grey-9)",border:"var(--grey-9) 2px solid"},hover:{borderColor:"var(--primary-8)",border:"var(--primary-8) 2px solid"}},checked:{disabled:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--grey-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"},hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-8)"}},indeterminate:{hover:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"},default:{boxShadow:"inset 0px 1px 5px 0px var(--grey-a1)",backgroundColor:"var(--primary-6)"}}}},indicators:{spinner:{danger:{base:{borderColor:"var(--warning-8)",border:"var(--warning-8) 3px solid"},top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"}},secondary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-8)",border:"var(--grey-8) 3px solid"}},primary:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--primary-6)",border:"var(--primary-6) 3px solid"}},simple:{top:{borderColor:"var(--white-1)",border:"var(--white-1) 3px solid"},base:{borderColor:"var(--grey-a8)",border:"var(--grey-a8) 3px solid"}}}},filters:{dropdownContainer:{background:{boxShadow:"0px 5px 25px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-6)",border:"var(--grey-6) 1px solid"},topBorder:{backgroundColor:"var(--primary-7)"}},filterButton:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid",textColor:"var(--grey-11)"},active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"},hover:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--primary-7)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid",textColor:"var(--white-1)"}},searchInput:{default:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--grey-7)",border:"var(--grey-7) 1px solid"},focused:{boxShadow:"0px 4px 9px 0px var(--primary-a2)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-6)",border:"var(--primary-6) 1px solid"}}},tables:{loadingOverlay:{backgroundColor:"var(--grey-2)",backgroundImage:"linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%)"},rows:{divider:{backgroundColor:Un.divider}},header:{groupLine:{backgroundColor:Un.divider},divider:{backgroundColor:Un.divider},sortable:{hover:{backgroundColor:"var(--grey-4)"},default:{backgroundColor:"var(--grey-2)"}}}},general:{divider:{backgroundColor:Un.divider}},feedbackBar:{neutral:{backgroundColor:Un.feedback.neutral},error:{backgroundColor:Un.feedback.error},info:{backgroundColor:Un.feedback.info},success:{backgroundColor:Un.feedback.success},warning:{backgroundColor:Un.feedback.warning}},filterButton:{active:{boxShadow:"0px 4px 9px 0px var(--primary-a1)",backgroundColor:"var(--grey-1)",borderColor:"var(--primary-7)",border:"var(--primary-7) 1px solid"}}},MC={lines:{primary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(205deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(205deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(204.8,53.4%,46.3%,100%);"},grabHandle:{fill:"hsla(205deg, 45%, 90%, 100%)",stroke:"hsla(205deg, 45%, 100%, 100%)"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(205deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(205deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(235deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(192deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(205deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(205deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(205deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(205deg, 100%, 15%, 0%)"}},secondary:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(120deg, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(120deg, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(120deg, 81%, 70%, 90%);"},grabHandle:{fill:"hsla(120deg, 45%, 90%, 100%)",stroke:"hsla(120deg, 45%, 100%, 100%)"},point:{fill:"hsla(120deg, 45%, 90%, 100%)"},grabHandleContrast:{stroke:"hsla(120deg, 80%, 45%, 100%)"},grabHandleText:{fill:"hsla(120deg, 80%, 25%, 100%);"},handleBase:{fill:"hsla(150deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(120deg, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(108deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(120deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(120deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(120deg, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(120deg, 100%, 15%, 0%)"}},danger:{label:{fill:"#fff"},contrastLine:{stroke:"hsla(0, 80%, 45%, 100%);"},highlightLine:{stroke:"hsla(0, 45%, 90%, 90%);"},highlightLineBorder:{stroke:"hsla(0deg, 86%, 70%, 100%);"},grabHandle:{fill:"hsla(0, 45%, 90%, 100%)",stroke:"hsla(0, 45%, 100%, 100%)"},point:{fill:"hsla(0, 45%, 90%, 100%)"},grabHandleText:{fill:"hsla(0, 80%, 25%, 100%);"},grabHandleContrast:{stroke:"hsla(0, 80%, 45%, 100%)"},handleBase:{fill:"hsla(30deg, 100%, 80%, 100%);"},handleRingLayer:{stroke:"hsla(0, 100%, 89%, 100%);"},handleReactiveFill:{fill:"hsla(348deg, 100%, 45%, 100%);"},handleReactiveRing:{stroke:"hsla(0deg, 100%, 36%, 27%);"},handleContrastLayer:{stroke:"hsla(0deg, 100%, 36%, 15%);"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}}}},Ts={fontFamily:EC,dimensions:Wu,typography:jC,colors:Un,styles:TC,animation:tn,custom:MC,deviceSize:Do,deviceMediaQuery:fn},LC=A`
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

      @media ${fn.xlarge}{
        --content-layout-padding-top: 32px;
        --content-layout-padding-right: 96px;
        --content-layout-padding-bottom: 64px;
        --content-layout-padding-left: 96px;
        --utility-header-padding-top: 48px;
      }

      @media ${fn.xxlarge}{
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
`,OC=A`
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
`,$C=A`
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

`,zC=qu`

  ${LC};
  ${OC};
  ${$C};

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

`,AC=A`

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

`,Xy=A`

  line-height: 0;

  svg {
    overflow: visible;
    vector-effect: non-scaling-stroke;

    line, path, circle, ellipse, foreignObject, polygon, polyline, rect, text, textPath, tspan {
      vector-effect: non-scaling-stroke;
      transition: stroke var(--speed-normal) var(--easing-primary-out);
    }
  }
`,je=y.div`
  ${Xy};
`,RC=y.g`
  ${Xy};
`,we=({icon:e,size:a=24,weight:i="regular",color:o="grey-12",forSvgUsage:c=!1})=>{const u=Wu.icons.weights[i],h=wy[e];return h!=null?c?s.jsx(RC,{children:h({size:a,weight:u,color:`var(--${o}, var(--grey-12))`})}):s.jsx(je,{children:h({size:a,weight:u,color:`var(--${o}, var(--grey-12))`})}):null},au=y.div`
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
`,DC=y.div`
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
`,Hv=({title:e="Placeholder"})=>s.jsxs(DC,{children:[e,s.jsx(au,{className:"t l",style:{transform:"rotate(-90deg)"}}),s.jsx(au,{className:"t r",style:{transform:"rotate(0deg)"}}),s.jsx(au,{className:"b r",style:{transform:"rotate(90deg)"}}),s.jsx(au,{className:"b l",style:{transform:"rotate(180deg)"}})]});A`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`;A`
  display: flex;
  flex-direction: column;
`;const at=A`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`,Ms=A`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`,Vo=A`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_C=y.button`
  ${at};
  ${({$selected:e=!1})=>e&&A`
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
`,Qy=y.div`
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

  ${je} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,NC={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},HC=y.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,tr=({type:e="info",message:a,hideCloseButton:i=!1})=>{const[o,c]=f.useState(!1);return f.useEffect(()=>{c(!1)},[a]),a&&!o?s.jsxs(Qy,{$type:e,children:[s.jsx(we,{icon:NC[e],color:"inverse"}),s.jsx(HC,{children:a}),!i&&s.jsx(_C,{onClick:()=>c(!0),children:s.jsx(we,{icon:"CloseCompact",color:"inverse"})})]}):null},BC=y.div`
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

  ${({$isVisible:e})=>e&&A`
    transition: transform var(--speed-slow) var(--easing-primary-in-out);
  `}

  ${({$isVisible:e,$isClosing:a})=>e&&!a&&A`
    transform: translate(-50%, 0%);
  `};

  ${je} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,UC={error:"Critical",warning:"BigWarning",success:"Success",info:"Information",neutral:"Information"},IC=y.div`
  ${at};
  ${({$selected:e=!1})=>e&&A`
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
`,GC=y.button`
  ${at};
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
`,qC=y.div`
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`,PC=({id:e,type:a="info",message:i,icon:o="",isPinned:c=!1,actionTextButton:u,closeNow:h=!1,closeCallback:p,onTextButtonClick:m})=>{const[x,b]=f.useState(!1),[v,k]=f.useState(!1),[C,S]=f.useState(!1),[E,T]=f.useState(!1),M=f.useRef(void 0),z=f.useRef({slideUp:v,textClicked:C,onTextButtonClick:m,closeCallback:p});f.useEffect(()=>{z.current={slideUp:v,textClicked:C,onTextButtonClick:m,closeCallback:p}}),f.useEffect(()=>{b(!1),k(!1),S(!1)},[e]),f.useEffect(()=>{M.current!==e&&(M.current=e,T(!1));const U=requestAnimationFrame(()=>T(!0));return()=>cancelAnimationFrame(U)},[e]);const _=f.useCallback(()=>{k(!0)},[]),B=f.useCallback(async()=>{S(!0),_()},[_]),N=f.useCallback(()=>{v&&(b(!0),m&&C&&m(),p&&p())},[v,p,m,C]);return f.useEffect(()=>{if(c)return;const U=setTimeout(()=>_(),7e3);return()=>clearTimeout(U)},[c,i,_,e]),f.useEffect(()=>{h&&_()},[h,_]),f.useEffect(()=>()=>{const{slideUp:U,textClicked:L,onTextButtonClick:R,closeCallback:F}=z.current;U&&(R&&L&&R(),F&&F())},[]),i&&!x?Ss.createPortal(s.jsxs(BC,{$type:a,$isClosing:v,$isVisible:E,onTransitionEnd:N,children:[s.jsx(we,{icon:o||UC[a],color:"inverse"}),s.jsx(qC,{children:i}),u?s.jsxs(GC,{onClick:()=>B(),children:[u," "]}):s.jsx(IC,{onClick:()=>_(),children:s.jsx(we,{icon:"CloseCompact",color:"inverse"})})]}),document.body):null},Ht=8,Yt=16,In=y.div`
  content:'';
  display:block;
  width:0;
  height:0;
  border-left: ${Ht}px solid transparent;
  border-right: ${Ht}px solid transparent;
  border-bottom: ${Ht}px solid ${({$type:e})=>`var(--tooltip-${e}-arrow)`};
`,FC=y.div`
  position: absolute;
  display: flex;
  ${({$maxWidth:e})=>e&&A` max-width: ${e}`};
  ${({$directionStyle:e})=>e&&A`${e}`};
`,WC=y.div`
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

  ${je} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,VC=(e,a)=>{const{left:i,top:o,width:c,height:u}=a,h=o+window.scrollY,p=i+window.scrollX;switch(e){case"bottom-right":return`
              flex-direction: column;
              top: ${h+u}px;
              left: ${p-Ht-Yt+c/2}px;
              ${In} {
                margin-left: ${Yt}px;
              }
            `;case"bottom-left":return`
              flex-direction: column;
              align-items: end;
              top: ${h+u}px;
              left: ${p+Ht+Yt+c/2}px;
              transform: translateX(-100%);
              ${In} {
                margin-right: ${Yt}px;
              }
            `;case"right-bottom":return`
              flex-direction: row;
              top: ${h-Ht/2-Yt+u/2}px;
              left: ${p+c}px;
              ${In} {
                transform: rotate(-90deg);
                margin-right: -${Ht/2}px;
                margin-top: ${Yt}px;
              }
            `;case"right":return`
              flex-direction: row;
              align-items: center;
              top: ${h+u/2}px;
              left: ${p+c}px;
              transform: translateY(-50%);
              ${In} {
                transform: rotate(-90deg);
                margin-right: -${Ht/2}px;
              }
            `;case"right-top":return`
              flex-direction: row;
              align-items: end;
              top: ${h+Ht/2+Yt+u/2}px;
              left: ${p+c}px;
              transform: translateY(-100%);
              ${In} {
                transform: rotate(-90deg);
                margin-right: -${Ht/2}px;
                margin-bottom: ${Yt}px;
              }
            `;case"left-bottom":return`
              flex-direction: row-reverse;
              top: ${h-Ht/2-Yt+u/2}px;
              left: ${p}px;
              transform: translateX(-100%);
              ${In} {
                transform: rotate(90deg);
                margin-left: -${Ht/2}px;
                margin-top: ${Yt}px;
              }
            `;case"left":return`
              flex-direction: row-reverse;
              align-items: center;
              top: ${h+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -50%);
              ${In} {
                transform: rotate(90deg);
                margin-left: -${Ht/2}px;
              }
            `;case"left-top":return`
              flex-direction: row-reverse;
              align-items: end;
              top: ${h+Ht/2+Yt+u/2}px;
              left: ${p}px;
              transform: translate(-100%, -100%);
              ${In} {
                transform: rotate(90deg);
                margin-left: -${Ht/2}px;
                margin-bottom: ${Yt}px;
              }
            `;case"top-right":return`
              flex-direction: column-reverse;
              top: ${h}px;
              left: ${p-Ht-Yt+c/2}px;
              transform: translateY(-100%);
              ${In} {
                transform: rotate(180deg);
                margin-left: ${Yt}px;
              }
            `;case"top":return`
              flex-direction: column-reverse;
              align-items: center;
              top: ${h}px;
              left: ${p+c/2}px;
              transform: translate(-50%, -100%);
              ${In} {
                transform: rotate(180deg);
              }
            `;case"top-left":return`
              flex-direction: column-reverse;
              align-items: end;
              top: ${h}px;
              left: ${p+Ht+Yt+c/2}px;
              transform: translate(-100%, -100%);
              ${In} {
                transform: rotate(180deg);
                margin-right: ${Yt}px;
              }
            `;default:return`
            flex-direction: column;
            top: ${h+u}px;
            left: ${p+c/2}px;
            transform: translateX(-50%);
            align-items: center;
          `}},YC=(e,a,i)=>{const o=e.left+(a||0)+30>window.innerWidth,c=e.bottom+(i||0)>window.innerHeight,u=e.left-(a||0)<0,h=e.top-(i||0)<0;return h&&o&&c?"left":h&&u&&c?"right":h&&u?"bottom-right":h&&o?"bottom-left":c&&u?"top-right":c&&o?"top-left":u?"right":o?"left":c?"top":"bottom"},ZC=({icon:e,message:a,type:i,tooltipFor:o,tooltipPosition:c,maxWidth:u})=>{const[h,p]=f.useState(null),[m,x]=f.useState(!1),[b,v]=f.useState("top"),k=f.useRef(null),C=f.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T),x(!0),v(YC(T,o.current.offsetWidth,o.current.offsetHeight))}},[o]),S=f.useCallback(()=>{x(!1)},[]),E=f.useCallback(()=>{if(o&&o.current){const T=o.current.getBoundingClientRect();p(T)}},[o]);return f.useEffect(()=>{let T=null;return o&&o.current&&(T=o.current,o.current.addEventListener("mouseover",C),o.current.addEventListener("mouseout",S),E()),()=>{T&&(T.removeEventListener("mouseover",C),T.removeEventListener("mouseout",S))}},[S,C,o,E]),!m||!h?null:Ss.createPortal(s.jsxs(FC,{ref:k,$maxWidth:u,$directionStyle:VC(c||b,h),children:[s.jsx(In,{$type:i||"neutral"}),s.jsxs(WC,{$type:i||"neutral",children:[e&&s.jsx(we,{icon:e,size:16,color:"white-a12"}),a]})]}),document.body)},XC=e=>Sa`
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
  `,QC=y.button`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({$noPadding:e,$isOutline:a})=>e?A`
      padding: 0px;
    `:A`
      padding: ${a?"var(--button-h-padding-outline)":"var(--button-h-padding)"};
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

  ${({$shadow:e})=>e?A`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  `:A`
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

    ${({$shadow:e})=>e?A`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    `:A`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow:e})=>A`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${()=>XC(e)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading:e})=>e&&A`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`,nt=({design:e="primary",size:a="normal",shadow:i=!1,noPadding:o=!1,loading:c=!1,children:u,formAction:h,...p})=>(e==="danger"&&console.warn("Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead."),s.jsx(QC,{type:"button",$isOutline:e==="outline",className:`button-design-${e} button-size-${a}`,$design:e,$size:a,$noPadding:o,$shadow:i,$loading:c,...p,children:s.jsx(s.Fragment,{children:u})})),Ky=e=>2*3.1416*e,KC=e=>{const a=Ky(e);return Sa`
    0% {
      stroke-dashoffset: -${a*.85};
    }
    50% {
      stroke-dashoffset: -${a*.5};
    }
    100% {
      stroke-dashoffset: -${a*.85};
    }
  `},JC=Sa`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,ek=y.circle`
  stroke: ${({$styling:e,$customColor:a})=>a||`var(--spinner-${e}-base, var(--grey-a8))`};
  fill: none;
`,tk=y.circle`
  stroke: ${({$styling:e,$customColor:a})=>a||`var(--spinner-${e}-top, var(--white-1))`};
  fill: none;
  stroke-dasharray: ${({r:e})=>Ky(e)};
  stroke-dashoffset: ${({r:e})=>2*3.1416*e/2};
  animation:
    ${({r:e})=>KC(e)} 4s linear infinite,
    ${JC} 1s linear infinite;
  stroke-linecap: round;
`,Bv=e=>e==="primary"||e==="secondary"||e==="warning"?e:e==="danger"?(console.warn("Button.tsx - Warning, the design prop value `danger` is being deprecated. Use `warning` instead."),"danger"):"simple",nk={xsmall:12,small:16,medium:24,large:36,xlarge:48},ia=({size:e="medium",styling:a="primary",custom:i={}})=>{const{baseColor:o,topColor:c}=i,u=i?.size?i.size:nk[e],h=u/5.333,p=u/2-h/2;return s.jsxs("svg",{viewBox:`-${u/2} -${u/2} ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg",children:[s.jsx(ek,{cx:"0",cy:"0",r:p,strokeWidth:h,$styling:Bv(a),$customColor:o}),s.jsx(tk,{cx:"0",cy:"0",r:p,strokeWidth:h,$styling:Bv(a),$customColor:c})]})},ak=y.div`
  display: inline;
`,rk=y.div`
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
`,Oi=y.div`
  opacity: 1;
`,e0=y.div`
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
`,ik=y.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({$position:e})=>A`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  ${Oi}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${Oi}, ${e0}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({$loading:e})=>e&&A`
    border-color: var(--button-loading-area-divider-color);

    ${e0}{
      opacity: 1;
    }

    ${Oi}{
      opacity: 0;
    };
  `};

`,ok=y.div`
  display: flex;
  height: inherit;

  &:hover {
    ${({$disabled:e})=>!e&&A`
      ${Oi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({$disabled:e})=>!e&&A`
      ${Oi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({$disabled:e})=>e&&A`
    ${Oi}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`,I0=({design:e="primary",size:a="normal",loading:i=!1,shadow:o=!1,onClick:c,disabled:u,position:h,icon:p,weight:m="regular",children:x,...b})=>s.jsx(ak,{children:s.jsx(nt,{noPadding:!0,disabled:u||i,design:e,size:a,shadow:o,onClick:c,loading:i,...b,children:s.jsxs(ok,{$disabled:u,children:[s.jsx(rk,{$size:a,$position:h,$weight:m,children:s.jsx(s.Fragment,{children:x})}),s.jsxs(ik,{$loading:i,$position:h,children:[s.jsx(Oi,{children:s.jsx(we,{icon:p,weight:m})}),s.jsx(e0,{children:s.jsx(ia,{size:a==="xsmall"||a==="small"?"xsmall":"small",styling:e})})]})]})})}),lk=y.div`
  display: inline;
`,sk=y.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`,t0=y.div`
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

  ${({$position:e})=>A`
    order: ${e&&e==="left"?0:2};
    ${e==="left"?"border-right-width: 1px;":"border-left-width: 1px;"};
  `}

  svg {
    display:block;
  }
`,ck=y.div`
  display: flex;
  flex:1;
  height: inherit;

  ${({$loading:e})=>e?A`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${t0}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  `:A`
    ${t0}{
      flex: 0 0 0px;
    }
  `}
`,G0=({design:e="primary",size:a="normal",shadow:i=!1,onClick:o,disabled:c,position:u,loading:h=!1,children:p,...m})=>s.jsx(lk,{children:s.jsx(nt,{noPadding:!0,disabled:c||h,design:e,size:a,shadow:i,onClick:o,loading:h,...m,children:s.jsxs(ck,{$loading:h,$design:e,$size:a,children:[s.jsx(sk,{children:s.jsx(s.Fragment,{children:p})}),s.jsx(t0,{$design:e,$position:u,children:s.jsx(ia,{size:a==="xsmall"||a==="small"?"xsmall":"small",styling:e})})]})})}),uk=y.button`
  ${at};
  [stroke]{
    stroke: ${({$color:e})=>e};
  }
  &:hover {
    ${je} {
      [stroke]{
        stroke: ${({$hoverColor:e})=>e};
      }
    }
  }
`,Jy=({icon:e,size:a=20,weight:i="regular",color:o="dimmed",hoverColor:c="mono",children:u,formAction:h,...p})=>s.jsx(uk,{type:"button",$color:o,$hoverColor:c,...p,children:s.jsx(we,{icon:e,size:a,weight:i})}),Uv=y(Jy)``;y.div`
  display: flex;
  ${Uv} {
    margin-left: 15px;
  }
  ${Uv}:first-child {
    margin-left: 0px;
  }

  ${({$alignment:e})=>e==="left"&&A`
    justify-content: flex-start;
  `};

  ${({$alignment:e})=>e==="center"&&A`
    justify-content: center;
  `};

  ${({$alignment:e})=>e==="right"&&A`
    justify-content: flex-end;
  `};
`;const dk=y.div`
  position: absolute;
  right: 0;
  top: 0;
`,fk=y.button.attrs({type:"button"})`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`,e2=y.div`
  flex-shrink: 0;

  background-color: transparent;
  border: 1px solid transparent;

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`,hk=y.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  font-weight: 500;
  color: var(--white-1);
`,gk=y.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${je} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,ju=y.input`
  ${Ms};

  ${({$fieldState:e})=>A`
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
`,pk=y.div`

  flex: 1;
  position: relative;

  ${({$hasAction:e})=>e&&A`
    ${ju}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`,mk=y.div`
  ${({$fieldState:e,$showFeedback:a})=>A`

    display: flex;
    position: relative;
    flex-direction: row;

    ${ju}{

      &:disabled {
        cursor: not-allowed;
      }

      ${["default","disabled"].indexOf(e)===-1&&a&&A`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

    }

    ${e2} {
      ${["default","disabled"].indexOf(e)!==-1&&A`
        display: none;
      `};
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);
    }

    &:focus-within ${ju} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${e}-focused-shadow-color);
    }
  `}

`,q0=({type:e="text",placeholder:a="",defaultValue:i,fieldState:o="default",showFeedback:c=!1,feedbackMessage:u,actionCallback:h,actionIcon:p,postfix:m,children:x,formAction:b,...v})=>{const k=h!==void 0,C=S=>{switch(S){case"default":break;case"disabled":break;case"required":return s.jsx(we,{icon:"Required",size:16});case"valid":return s.jsx(we,{icon:"Success",size:16});case"invalid":return s.jsx(we,{icon:"Invalid",size:16});case"processing":return s.jsx(ia,{size:"medium",styling:"primary"})}};return s.jsxs(mk,{$fieldState:o||"default",$showFeedback:c,children:[s.jsxs(pk,{$hasAction:k,children:[s.jsx(ju,{$fieldState:o||"default",disabled:o==="disabled"||o==="processing",type:e,placeholder:a,defaultValue:i,...v}),k?s.jsx(dk,{children:s.jsx(fk,{onClick:h,children:s.jsx(we,{icon:p||"NoIcon",color:"primary"})})}):null]}),o&&c?s.jsxs(e2,{children:[s.jsx(gk,{children:C(o)}),u?s.jsx(hk,{children:u}):null]}):null]})},t2=y.span`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  ${({$required:e})=>e&&A`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
    }
  `}
`,Vu=y.label`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({$direction:e})=>e&&A`
    flex-direction: ${e};
    ${["row","row-reverse"].includes(e)&&A`
      display: inline-flex;
      
      ${t2}{
        align-self: center;
      }
    `}
  `}
`,Bt=({htmlFor:e,labelText:a,direction:i="column",rightAlign:o=!1,required:c=!1,children:u,...h})=>(o&&(console.warn("Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction='row-reverse'` instead."),i="row-reverse"),s.jsx(Vu,{htmlFor:e,$direction:i,...h,children:s.jsxs(s.Fragment,{children:[s.jsx(t2,{$required:c,children:a}),u]})})),vk=y.input`
  ${Ms};

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
`,xk=y.div`
  display: flex;
  height: var(--input-compact-height);
  padding: 0 8px;
  align-items: center;
  gap: 8px;
  position: relative;
  border-radius: 3px;

  ${({$fieldState:e})=>A`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    transition:
      border var(--speed-normal) var(--easing-primary-out),
      background-color var(--speed-normal) var(--easing-primary-out);
  `};

  ${({$hasAction:e})=>e&&A`
    ${vk}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;y.div`
  flex: 0 1;
  font-size: 12px;
  font-family: var(--font-ui);
  color: var(--input-color-unit);
  margin-top: 1px;
  white-space: nowrap;
`;y.div`
  position: relative;

  ${({$fieldState:e})=>e&&A`
    &:focus-within ${xk} {
      transition: boxShadow var(--speed-fast) var(--easing-primary-in-out);
      box-shadow: 0 3px 3px var(--input-${e}-focused-shadow-color, var(--input-${e}-shadow-color));
    }
  `};
`;const yk=e=>{switch(e){case 0:return"off";case 1:return"on";case 2:return"neutral";case 3:return"locked";default:return"off"}},bk=y.input`
  display: none;
`,n2=y.div`
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
`,n0=y.div`
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
`,wk=y.span``,a0=y.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
  }
`,Sk=y.div``,Ck=y(Vu)`
  user-select: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;

  ${n2}{
    ${({$activeTheming:e,$themeState:a})=>A`
      border-color: var(--switch-${a}-${e}-border);
      background-color: var(--switch-${a}-${e}-background);
    `};

    ${({$activeTheming:e})=>e==="locked"&&A`
      background-color: var(--switch-special-locked-background);
      border-color: var(--switch-special-locked-border);
    `};

    ${({$activeTheming:e})=>e==="failure"&&A`
      background-color: var(--switch-special-failure-background);
      border-color: var(--switch-special-failure-border);
    `};

    ${({$activeTheming:e,$loading:a})=>a&&A`
      background-color: var(--switch-default-${e}-background);
      border-color: var(--switch-default-${e}-border);
    `};

  }

  ${n0}{
    ${({$activeTheming:e,$themeState:a})=>A`
      background-color: var(--switch-${a}-${e}-inner);
    `};

    transition:
      left var(--speed-fast) var(--easing-primary-in-out),
      border var(--speed-fast) var(--easing-primary-in-out),
      width var(--speed-fast) var(--easing-primary-in-out);

    ${({$activeTheming:e})=>e==="locked"&&A`
      width: calc(100% - var(--switch-border-width));
      background-color: var(--switch-special-locked-inner);
      box-shadow: none;

      ${a0} svg {
        transform: translateX(-1px);
      }
    `}

    ${({$activeTheming:e})=>e==="failure"&&A`
      background-color: var(--switch-special-failure-inner);
    `}

    ${({$activeTheming:e,$loading:a})=>a&&A`
      border-color: var(--switch-default-${e}-inner);
      box-shadow: none;
    `};

  }

  &:hover {
    ${n0}{
      left: ${({$useIntent:e,$position:a})=>e&&a===0&&"calc(var(--position-off) + var(--switch-intent-offset))"||e&&a===1&&"calc(var(--position-on) - var(--switch-intent-offset))"};
    }
  }
`,kk=e=>e==="default"||e==="loading"||e==="locked"||e==="disabled"||e==="failure",Po=({state:e="default",leftTheme:a="off",rightTheme:i="on",labelText:o,onChangeCallback:c,checked:u,defaultChecked:h=!1})=>{const p=u!==void 0,m=p?u:h,x=m?1:0,b=m?i:a,[v,k]=f.useState(h),C=f.useRef(null),S=f.useRef(null),[E,T]=f.useState(x),[M,z]=f.useState(b),[_,B]=f.useState("default"),[N,U]=f.useState(!1),[L,R]=f.useState(0),F=f.useCallback(()=>{p?(T(u?1:0),z(u?i:a)):C.current&&(C.current.checked=v,T(v?1:0),z(v?i:a))},[u,p,v,a,i]);f.useEffect(()=>{F()},[F]);const J=f.useCallback(()=>{p?(T(u?1:0),z(u?i:a)):(T(v?1:0),z(v?i:a))},[u,p,a,i,v]),q=f.useCallback(()=>{if(!(e==="locked"||e==="disabled")){if(p)c?.(!u);else{const re=!v;k(re),c?.(re)}J()}},[p,u,v,c,e,J]),ee=f.useCallback(()=>{E===1?z(i):E===0&&z(a)},[E,i,a]);return f.useEffect(()=>{ee()},[a,i,ee]),f.useEffect(()=>{kk(e)&&B(Ek(e))},[e,B]),f.useEffect(()=>{e==="locked"?(T(3),z("locked")):e==="failure"?(T(2),z("failure")):J()},[e,T,J]),f.useEffect(()=>{S.current&&R(parseInt(getComputedStyle(S.current).getPropertyValue("--switch-inner-size")))},[S]),s.jsxs(Ck,{onChange:q,onMouseLeave:()=>U(!1),$activeTheming:M,$loading:e==="loading",$useIntent:!N&&(e==="default"||e==="failure"),$themeState:_,$position:E,$checked:C.current?.checked,children:[s.jsx(n2,{children:s.jsxs(n0,{$position:yk(E),ref:S,children:[e==="failure"?s.jsx(a0,{children:s.jsx(we,{icon:"Exclamation",color:"danger",size:18,weight:"regular"})}):null,e==="locked"?s.jsx(a0,{children:s.jsx(we,{icon:"Locked",color:"switch-special-locked-icon",size:12,weight:"regular"})}):null,e==="loading"&&L>0?s.jsx(Sk,{children:s.jsx(ia,{styling:"simple",custom:{size:L}})}):null]})}),o?s.jsx(wk,{children:o}):null,s.jsx(bk,{ref:C,type:"checkbox",disabled:e!=="default"&&e!=="failure",defaultChecked:p?u:h})]})},Ek=e=>{switch(e){case"locked":return"default";case"failure":return"default";default:return e}};function a2(e){return s.jsxs("svg",{width:35,height:35,...e,children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"LogoMark_svg__a",x1:"36.708%",x2:"69.959%",y1:"2.579%",y2:"98.009%",children:[s.jsx("stop",{offset:"0%",stopColor:"#7DB8DB"}),s.jsx("stop",{offset:"100%",stopColor:"#5CA0D1"})]})}),s.jsxs("g",{fill:"none",fillRule:"evenodd",children:[s.jsx("rect",{width:35,height:35,fill:"url(#LogoMark_svg__a)",rx:5}),s.jsx("path",{fill:"#FFF",fillRule:"nonzero",d:"M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"})]})]})}function jk(e){return s.jsx("svg",{width:71,height:30,...e,children:s.jsx("path",{d:"M6.088 12.112c2.336 0 4.128-.976 4.128-3.168 0-2.048-1.472-2.72-3.84-3.248-2.048-.464-2.992-.784-2.992-2 0-1.152.8-1.856 2.56-1.856 1.36 0 2.56.592 3.088 1.184l.672-1.168C8.744 1.072 7.496.56 5.976.56c-2.352 0-4.08 1.184-4.08 3.36 0 1.808 1.2 2.432 3.504 2.992 2.112.512 3.28.896 3.28 2.176 0 1.136-.944 1.728-2.56 1.728-1.728 0-3.28-.8-3.968-1.52l-.688 1.216c1.28 1.04 2.88 1.6 4.624 1.6zm11.941-.016c1.76 0 3.792-.944 4.512-2.64l-1.2-.656c-.656 1.408-2.064 2-3.248 2-2.256 0-3.936-2.128-3.936-4.496 0-2.144 1.36-4.432 3.888-4.432 1.152 0 2.48.48 3.152 1.92l1.136-.736C21.63 1.6 20.125.576 18.11.576c-3.424 0-5.408 2.912-5.408 5.664 0 2.88 2.208 5.856 5.328 5.856zm12.134-.016c3.072 0 5.36-2.72 5.36-5.744 0-2.848-2.144-5.776-5.328-5.776-3.072 0-5.376 2.736-5.376 5.76 0 2.912 2.16 5.76 5.344 5.76zm.016-1.296c-2.352 0-3.904-2.144-3.904-4.464 0-2.208 1.488-4.448 3.904-4.448 2.304 0 3.888 2.128 3.888 4.448 0 2.192-1.472 4.464-3.888 4.464zM40.296 12V7.92h3.008L45.896 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376C47.16 2.48 45.72.64 43.72.64h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM58.413 12v-1.28h-6.272V6.8h5.328V5.6h-5.328V1.92h6.128V.64h-7.568V12h7.712zm4.742 0V7.92h3.008L68.755 12h1.632l-2.752-4.352c1.44-.368 2.384-1.792 2.384-3.376 0-1.792-1.44-3.632-3.44-3.632h-4.864V12h1.44zm3.44-5.36h-3.44V1.92h3.344c1.104 0 2.064 1.072 2.064 2.352 0 1.248-.784 2.368-1.968 2.368zM4.78 27.05c2.18 0 2.99-1.66 2.99-3.57V19.9h-.7v3.58c0 1.45-.5 2.94-2.3 2.94-1.76 0-2.29-1.45-2.29-2.94V19.9h-.69v3.58c0 1.81.74 3.57 2.99 3.57zm6.193-.05v-7.1h-.7V27h.7zm6.697 0v-2.18L19 23.44 21.71 27h.79l-3.05-3.98 2.9-3.12h-.77l-3.91 4.13v-4.12h-.7V27h.7zm7.263 0v-7.1h-.7V27h.7zm5.124 0v-6.48h2.53v-.62h-5.76v.62h2.53V27h.7z",fill:"#93A5B2"})})}function r2(e){return s.jsx("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",...e,children:s.jsx("path",{d:"M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z",fill:"none",fillRule:"evenodd",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5})})}function Tk(){return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"55",height:"60",fill:"none",viewBox:"5 80 300 174",children:[s.jsx("path",{fill:"#F0F0F0",d:"M0 0H320V240H0z"}),s.jsx("path",{fill:"#656565",d:"M113.8 112.087V130h-1.212c-.192 0-.355-.033-.488-.1a1.246 1.246 0 01-.375-.338l-10.362-13.5a16.889 16.889 0 01.05 1.175V130h-2.126v-17.913h1.251c.108 0 .2.009.275.025.075.009.141.03.2.063a.589.589 0 01.175.125c.058.05.12.117.187.2l10.363 13.487-.05-.625a13.596 13.596 0 01-.013-.587v-12.688h2.125zm21.129 8.963c0 1.342-.212 2.575-.637 3.7a8.463 8.463 0 01-1.8 2.887 8.102 8.102 0 01-2.8 1.888c-1.084.442-2.284.663-3.6.663-1.317 0-2.517-.221-3.6-.663a8.119 8.119 0 01-2.788-1.888 8.463 8.463 0 01-1.8-2.887c-.425-1.125-.637-2.358-.637-3.7s.212-2.571.637-3.688c.425-1.125 1.025-2.091 1.8-2.9a8.052 8.052 0 012.788-1.9c1.083-.45 2.283-.675 3.6-.675 1.316 0 2.516.225 3.6.675a8.035 8.035 0 012.8 1.9c.775.809 1.375 1.775 1.8 2.9.425 1.117.637 2.346.637 3.688zm-2.487 0c0-1.1-.15-2.088-.45-2.963-.3-.875-.725-1.612-1.275-2.212a5.504 5.504 0 00-2-1.4c-.784-.325-1.659-.488-2.625-.488-.959 0-1.829.163-2.613.488a5.618 5.618 0 00-2.012 1.4c-.55.6-.975 1.337-1.275 2.212-.3.875-.45 1.863-.45 2.963s.15 2.087.45 2.962c.3.867.725 1.605 1.275 2.213a5.687 5.687 0 002.012 1.387c.784.317 1.654.475 2.613.475.966 0 1.841-.158 2.625-.475a5.57 5.57 0 002-1.387c.55-.608.975-1.346 1.275-2.213.3-.875.45-1.862.45-2.962zM147.22 130h-2.425v-17.913h2.425V130zm23.22-17.913V130h-2.125v-13.163c0-.175.004-.362.012-.562l.05-.613-6.15 11.2c-.192.375-.483.563-.875.563h-.35c-.392 0-.683-.188-.875-.563l-6.275-11.25c.05.442.075.85.075 1.225V130h-2.125v-17.913h1.788c.216 0 .383.021.5.063.116.042.229.158.337.35l6.188 11.025c.1.2.195.408.287.625.1.217.192.437.275.662.083-.225.171-.445.263-.662.091-.225.191-.438.3-.638l6.075-11.012c.1-.192.208-.308.325-.35a1.66 1.66 0 01.512-.063h1.788zm14.092 11.263l-2.812-7.288a14.972 14.972 0 01-.263-.75c-.091-.291-.179-.6-.262-.925a13.51 13.51 0 01-.538 1.688l-2.812 7.275h6.687zm5.05 6.65h-1.875c-.216 0-.391-.054-.525-.163a1 1 0 01-.3-.412l-1.675-4.325h-8.037l-1.675 4.325a.878.878 0 01-.288.4.794.794 0 01-.525.175h-1.875l7.163-17.913h2.45L189.582 130zm16.443-8.613v6.875c-.9.65-1.862 1.138-2.887 1.463-1.017.317-2.134.475-3.35.475-1.442 0-2.742-.221-3.9-.663-1.159-.45-2.15-1.075-2.975-1.875a8.282 8.282 0 01-1.888-2.9c-.442-1.125-.662-2.362-.662-3.712 0-1.367.212-2.613.637-3.738.433-1.125 1.046-2.087 1.838-2.887.791-.808 1.754-1.433 2.887-1.875 1.133-.442 2.4-.663 3.8-.663.708 0 1.367.055 1.975.163.608.1 1.171.25 1.688.45.516.192.995.429 1.437.712a8.5 8.5 0 011.238.938l-.688 1.1a.739.739 0 01-.425.325c-.167.042-.354 0-.562-.125-.2-.117-.43-.258-.688-.425a5.555 5.555 0 00-.95-.475 7.037 7.037 0 00-1.312-.4c-.5-.108-1.096-.163-1.788-.163-1.008 0-1.921.167-2.737.5a5.683 5.683 0 00-2.088 1.413c-.575.608-1.017 1.35-1.325 2.225-.308.867-.462 1.842-.462 2.925 0 1.125.158 2.133.475 3.025.325.883.783 1.637 1.375 2.262a5.955 5.955 0 002.175 1.413c.85.325 1.804.487 2.862.487.833 0 1.571-.091 2.213-.275a9.829 9.829 0 001.9-.787v-3.938h-2.788a.549.549 0 01-.387-.137.459.459 0 01-.138-.338v-1.375h5.5zm14.762 6.638l-.013 1.975h-11.037v-17.913h11.037v1.975h-8.612v5.95h6.975v1.9h-6.975v6.113h8.625z"})]})}const Mk=y.input`
  display: none;
`,ta=y.div`
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
`,Lk=y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,r0=y.div`
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
`,Ok=y.label`
  display: inline-block;
  user-select: none;
  ${ta}{
    border: var(--input-toggle-unchecked-border-color) 2px solid;
  }

  ${({$visualState:e,$disabled:a})=>e==="off"&&A`
    /* Unchecked */
    ${ta}{
      background-color: var(--input-toggle-unchecked-background-color);
      border-color: var(--input-toggle-unchecked-border-color);
    }

    /* Unchecked - Hover */
    ${!a&&A`
      &:hover ${ta} {
        background-color: var(--input-toggle-unchecked-hover-background-color);
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }`};

    /* Unchecked - Disabled */
    ${a&&A`
      ${ta}{
        background-color: var(--input-toggle-unchecked-disabled-background-color);
        border-color: var(--input-toggle-unchecked-disabled-border-color);
        border: var(--grey-6) 2px solid;
        cursor: not-allowed;
      }
    `}
  `}

  ${({$visualState:e,$disabled:a})=>e==="on"&&A`
    /* Checked */
    ${ta}{
      background-color: var(--input-toggle-checked-background-color);
      border-color: var(--input-toggle-checked-border-color);
    }
    /* Checked - Hover */
    ${!a&&A`
      &:hover ${ta}{
        background-color: var(--input-toggle-checked-hover-background-color);
        border-color: var(--input-toggle-checked-hover-border-color);
      }`};

    /* Checked - Disabled */
    ${a&&A`
      ${ta}{
        background-color: var(--input-toggle-checked-disabled-background-color);
        border-color: var(--input-toggle-checked-disabled-border-color);
        cursor: not-allowed;
      }
      ${r0}{
        opacity: 0.65;
      }
    `}
  `}

  ${({$visualState:e,$disabled:a})=>e==="indeterminate"&&A`
    ${ta}{
      background-color: var(--input-toggle-intermediate-background-color);
      border-color: var(--input-toggle-intermediate-border-color);
    }
    ${!a&&A`
      &:hover ${ta}{
        background-color: var(--input-toggle-intermediate-hover-background-color);
        border-color: var(--input-toggle-intermediate-hover-border-color);
      }
    `};
    ${a&&A`
      ${ta}{
        background-color: var(--input-toggle-intermediate-disabled-background-color);
        border-color: var(--input-toggle-intermediate-disabled-border-color);
        cursor: not-allowed;
      }
      ${r0}{
        opacity: 0.65;
      }
    `}

  `}

`,P0=({indeterminate:e=!1,disabled:a,checked:i=!1,onChangeCallback:o})=>{const[c,u]=f.useState(i),[h,p]=f.useState(i?"on":"off"),m=b=>{const v=b.target.checked;u(v),o&&o(v)};f.useEffect(()=>{p(i?"on":"off")},[i,c,p]),f.useEffect(()=>{u(i)},[i,u]);const x=Wu.icons.weights.regular;return s.jsxs(Ok,{onChange:m,$disabled:a,$visualState:h,children:[s.jsx(ta,{children:s.jsx(Lk,{children:h==="on"?s.jsx(r0,{$color:"input-toggle-icon-color",children:s.jsx(r2,{color:"input-toggle-icon-color",stroke:"inverse",size:12,weight:x})}):null})}),s.jsx(Mk,{type:"checkbox",checked:c,readOnly:!0,disabled:a})," "]})},ru=y.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`;y.div`
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

  ${({$isChecked:e,$disabled:a})=>A`
    border-color: var(--input-toggle-unchecked-border-color);

    ${!a&&A`
      &:hover {
        cursor: pointer;
        border-color: var(--input-toggle-unchecked-hover-border-color);
      }
    `};

    ${e&&!a&&A`
      border-color: var(--input-toggle-checked-border-color);
      ${ru} {
        background-color: var(--input-toggle-checked-background-color);
      }
    `};

    ${e&&!a&&A`
      &:hover {
        border-color: var(--input-toggle-checked-hover-border-color);
        ${ru} {
          background-color: var(--input-toggle-checked-hover-background-color);
        }
      }
    `};

    ${e&&a&&A`
      cursor: not-allowed;
      border-color: var(--input-toggle-checked-disabled-border-color);
      ${ru} {
        background-color: var(--input-toggle-checked-disabled-background-color);
      }
    `};

    ${!e&&a&&A`
      cursor: not-allowed;
      border-color: var(--input-toggle-unchecked-disabled-border-color);
      ${ru} {
        background-color: var(--input-toggle-unchecked-disabled-background-color);
      }
    `}
  `};
`;y.input`
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  opacity: 0;
`;y.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
`;y.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`;const $k=y.textarea`

  ${({$fieldState:e})=>A`
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
`,Iv=y.div`
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
`;y.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;
  font-weight: 500;
  color: var(--white-1);
`;y.div`
  ${({$fieldState:e,$showFeedback:a})=>A`
    display: flex;
    position: relative;
    flex-direction: column;

    ${$k}{
      ${["default","disabled"].indexOf(e)===-1&&a&&A`
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

    ${Iv} {
      border-color: var(--input-${e}-border-color);
      background: var(--input-${e}-border-color);

      ${["default","disabled"].indexOf(e)!==-1&&A`
        display:none;
      `}
    }

    &:focus-within ${Iv} {
      border-color: var(--input-${e}-focused-border-color, var(--input-${e}-border-color));
    }

  `};
`;const zk=y.div`
  position: relative;
  display: flex;
  width: 100%;
`,Ak=y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({$isCompact:e})=>e?"14px":"16px"};
  pointer-events: none;
`;y.div`
  position: absolute;
  left: ${({$isCompact:e})=>e?"10px":"12px"};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;const Rk=y.select`
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

  ${({$fieldState:e})=>A`
    border: 1px solid var(--input-${e}-border-color);
    background: var(--input-${e}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${e}-shadow-color, transparent);
  `};


  ${({$isCompact:e,$withIcon:a})=>e?A`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${a?"30px":"8px"};

    ${Ak}{
      right: 14px;
    }
  `:A`
    height: var(--input-height);
    padding: 0 16px 1px ${a?"36px":"12px"};
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
`;y.div`

  ${({$activePlaceholder:e})=>e&&A`
    ${Rk} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`;const i2=e=>{const a=e.split("/").filter(String);return a.length>0?"/"+a[0]:"/"},Dk=()=>String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,""),Gv=e=>{const a=Number(e);return a!==a},_k=(e,a)=>e===null&&a===null||e===void 0&&a===null?!0:Tu(e)&&Tu(a)?us(e?.start,a?.start)&&us(e?.end,a?.end):e instanceof Date&&a instanceof Date?us(e,a):!1,Tu=e=>e==null||e.start===null||e.start===void 0||e.end===null||e.end===void 0?!1:e.start instanceof Date&&e.end instanceof Date,xs=16;y.div`
  font-family: ${({theme:e})=>e.fontFamily.data};
  position: relative;
  height: 30px;
  margin-top: 20px;
  ${({$disabled:e})=>e&&A`
    opacity: .5;
  `};
`;y.input`
  width: 100%;
  margin: 0;
  padding:0;
  opacity: .001;
  z-index: 99;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`;y.div`
  position: absolute;
  left: ${xs/2}px;
  top: 10px;
  width: calc(100% - ${xs}px);
  height: 2px;
  border-radius: 11px;
  background-image: linear-gradient(to bottom, var(--grey-10), var(--primary-10) 98%);
`;y.span`
  position: absolute;
  top: -3px;
  left: ${({$leftValue:e})=>`calc(${e}% + 7px)`};
  width: 1px;
  height: 9px;
  opacity: 0.25;
  background-color: var(--primary-11);
`;y.span`
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

  ${({$alignment:e})=>e==="center"&&A`transform: translateX(-50%);;`}
  ${({$alignment:e})=>e==="right"&&A`transform: translateX(5%);`}
  ${({$alignment:e})=>e==="left"&&A`transform: translateX(-95%);`}
`;y.div`
  position: relative;
  margin-right: 16px;
  left: 0;
  top: 10px;
  width: calc(100% - ${xs}px);
  height: 2px;
`;const Nk=y.span`
  width: ${xs}px;
  height: ${xs}px;
  border-radius: 8px;
  background-color: ${({theme:e,$bgColor:a})=>e.colors.feedback[a]};
  position: absolute;
  top: -7.5px;
  left: ${({$leftValue:e})=>`${e}%`};
`;y(Nk)`
  opacity: .5;
`;const Hk=y.div``,Bk=y.input`
  display: none;
`,Uk=({text:e,buttonDesign:a,buttonSize:i,inputCallback:o,children:c,formAction:u,...h})=>{const p=f.useRef(null),m=f.useCallback(async b=>{if(!(b.target.files&&b.target.files.length>0))return;const v=b.target.files;o&&o(v),b.target.value=""},[o]),x=f.useCallback(()=>{p.current&&p.current.click()},[]);return s.jsxs(Hk,{children:[s.jsx(Bk,{...h,ref:p,type:"file",onChange:m}),s.jsx(nt,{style:{textAlign:"center"},onClick:x,design:a,size:i,children:e})]})};y.div``;y.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 6px;
`;y(Bt)`
  font-family: var(--font-ui);
  margin-bottom: 0;
`;const o2=A`
  font-family: var(--font-data);
  color: var(--grey-a11);
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  font-size: 12px;
  line-height: 1.5;
`;y.div`
  ${o2};
`;y.div`
  display: flex;
`;y.div`
  display: flex;
  align-items: center;
  ${o2};
  span {
    font-style: normal;
  }
`;y.div``;y.div`
  font-size: 14px;
  color: var(--grey-10);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${({$allMarkCentered:e})=>e?"padding: 0;":"padding: 0 6px;"};
`;y(Bt)`
  font-family: ${({theme:e})=>e.fontFamily.data};
`;const F0=({name:e,label:a,fieldState:i,feedbackMessage:o,required:c,children:u,formAction:h,...p})=>{const[m,x]=f.useState(!1),[b,v]=f.useState("PasswordHide"),k=()=>{const C=!m;x(C),v(C?"PasswordShow":"PasswordHide")};return s.jsx(Bt,{htmlFor:e,labelText:a,required:c,children:s.jsx(q0,{type:m?"text":"password",actionCallback:k,actionIcon:b,name:e,fieldState:i,feedbackMessage:o,required:c,...p})})},Et=({name:e,label:a,fieldState:i="default",feedbackMessage:o,required:c,type:u,...h})=>s.jsx(Bt,{htmlFor:e,labelText:a,required:c,children:s.jsx(q0,{type:"text",fieldState:i,feedbackMessage:o,required:c,name:e,...h})}),Ik=y.div`
  ${({$height:e})=>e?`height: ${e}`:null};
  position: relative;
`,Gk=y.div`
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
`,qk=({height:e,text:a,dropCallback:i,...o})=>{const[c,u]=f.useState(!1),h=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!0)},[]),p=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),u(!1)},[]),m=f.useCallback(v=>{v.preventDefault(),v.stopPropagation()},[]),x=f.useCallback(v=>{v.preventDefault(),v.stopPropagation(),v.dataTransfer?.files&&i&&i(v.dataTransfer.files),u(!1)},[i]),b=f.useCallback(v=>{v.preventDefault()},[]);return f.useEffect(()=>(window.addEventListener("dragover",b),window.addEventListener("drop",b),()=>{window.removeEventListener("dragover",b),window.removeEventListener("drop",b)}),[b]),s.jsx(Ik,{$height:e,...o,children:s.jsx(Gk,{$inDropZone:c,onDragEnter:h,onDragLeave:p,onDrop:x,onDragOver:m,children:a})})},Yu=A`
  position: absolute;
  display: block;
  opacity: 0.1;
`;y.div`
  ${Yu};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`;y.div`
  ${Yu};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;y.div`
  ${Yu}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`;y.div`
  ${Yu};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;const Fr=A`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--black-a12);
  background-color: var(--white-1);
`;y.div`
  ${Fr};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({$isResizable:e})=>e&&A`
    cursor: n-resize;
  `};
`;y.div`
  ${Fr};
  top: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: nw-resize;
  `};
`;y.div`
  ${Fr};
  top: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: ne-resize;
  `};
`;y.div`
  ${Fr};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: e-resize;
  `};
`;y.div`
  ${Fr};
  bottom: -5px;
  right: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: se-resize;
  `};
`;y.div`
  ${Fr};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: s-resize;
  `};
`;y.div`
  ${Fr};
  bottom: -5px;
  left: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: sw-resize;
  `};
`;y.div`
  ${Fr};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({$isResizable:e})=>e&&A`
    cursor: w-resize;
  `};
`;y.div`
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
`;y.div`
    position: relative;
  z-index: 99;
`;y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`;y.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: var(--mono);

  ${je} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`;y.div`
  button + button {
    margin-left: 10px;
  }
`;y.div`
  position: relative;
  overflow: hidden;
  height: ${({$canvasHeight:e})=>e?`${e}px`:"462px"};
  width: ${({$canvasWidth:e})=>e?`${e}px`:"485px"};
  border-radius: 5px;
  background-color: var(--grey-3);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, var(--white-a10) 35px, var(--white-a10) 70px);
`;y.img`
  display: none;
`;y.div`
  position: absolute;
  border: dashed 1px var(--black-a12);
  box-shadow: 0 0 0 9999em var(--black-a11);
  ${({$cropLeft:e,$cropTop:a,$cropWidth:i,$cropHeight:o})=>A`
    top: ${a}px;
    left: ${e}px;
    width: ${i}px;
    height: ${o}px;
  `};
  cursor: move;
`;const Pk="150px",l2="142px";y.div`
  position: relative;
  width: ${l2};
  ${({theme:e})=>A`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`;y.div`
  position: relative;
  margin-bottom: 17px;
  height: ${Pk};
  width: ${l2};
`;const s2=A`
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
`;y.img`
  ${s2}
  object-fit: cover;
`;const Fk=y.div`
  color: var(--grey-10);
  font-size: 14px;
`;y.div`
  ${s2}
  padding-top: 15px;
  ${Fk} {
    margin-top: 18px;
  }
`;y(Uk)`
  width: 100%;
`;y.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`;y.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${je} {
    display: flex;
    align-items: center;
  }
`;y(we)``;y.div`
  margin: 0 30px;
  ${je}{
    transform: rotate(45deg);
    [stroke]{
      stroke: var(--primary-7);
    }
  }
`;y.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
`;y(qk)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;y.div`
  z-index: 99;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;y.div`
  padding: ${({$hasFiles:e})=>e?"26px 0 20px 0":"65px 0 42px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  position: relative;
`;y.div`
  color: var(--grey-11);
  font-size: 20px;
`;y.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: var(--grey-10);
  margin-top: 10px;
  max-width: 386px;
`;const Wk=y.form`
  ${({$spacing:e})=>e&&A`
      & >  ${Vu} {
        margin-bottom: ${e};
      }
  `}
`,W0=({children:e,spacing:a="45px;",action:i,...o})=>s.jsx(Wk,{$spacing:a,action:typeof i=="string"?i:void 0,...o,children:s.jsx(s.Fragment,{children:e})}),Vk=y.button`
  ${at}
  ${({$noBorderTop:e})=>e?"border-top: none":A`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${je} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({$noBorderTop:e})=>e?"border-top: none":A`
          border-top: 1px solid var(--border-active-color)`};

    ${je} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`,Yk=y.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,Zk=y.div`
  ${({$textMaxWidth:e})=>e&&A`max-width: ${e};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,Xk=y.div`
  ${({$isAscendingIcon:e})=>e&&A`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${je} {
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
`,qv=({text:e,icon:a="",design:i="primary",noBorderTop:o=!1,textMaxWidth:c="",size:u="normal",onClickCallback:h,closeCallback:p,hasOnSelectLoading:m,children:x,formAction:b,...v})=>{const k=f.useRef(null),[C,S]=f.useState(!1),[E,T]=f.useState(0),M=f.useCallback(()=>{h&&h(),m?(S(!0),setTimeout(()=>{S(!1),p()},2e3)):setTimeout(()=>{p()},200)},[p,m,h]);return f.useEffect(()=>{k.current&&T(parseInt(getComputedStyle(k.current).getPropertyValue("--button-icon-size")))},[k]),s.jsxs(Vk,{ref:k,$noBorderTop:o,size:u,onClick:M,...v,children:[s.jsx(Xk,{$isAscendingIcon:a==="FilterAscending",children:C?s.jsx(ia,{custom:{size:E},styling:i}):s.jsx(we,{icon:a})}),s.jsx(Zk,{$textMaxWidth:c,children:s.jsx(Yk,{children:e})})]})},Qk=(e,a,i,o=!0)=>{const c=document.title.split("|").slice(-1)[0].trim();f.useLayoutEffect(()=>()=>{document.title=c},[c]),f.useEffect(()=>{o&&(document.title=Kk([...e?[e]:[],...a?[a]:[],...c?[c]:[]],i))},[e,a,i,o,c])},Kk=(e,a="|")=>{let i="";return a=" "+a+" ",e.forEach((o,c)=>{i+=o,e.length-1!==c&&(i+=a)}),i},V0=()=>({copyToClipboard:f.useCallback(a=>{const i=document.createElement("textarea");i.value=a,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i);const o=document.getSelection();if(o){const c=o.rangeCount>0?o.getRangeAt(0):!1;i.select();const u=document.execCommand("copy");return document.body.removeChild(i),c&&(o.removeAllRanges(),o.addRange(c)),u}return!1},[])});function Mh(e,a){const[i,o]=f.useState(()=>{if(typeof window>"u")return a;try{const u=window.localStorage.getItem(e);return u?JSON.parse(u):a}catch(u){return console.warn(`[useLocalStorage] Failed to parse key "${e}" from localStorage, using initial value:`,u),a}}),c=f.useCallback(u=>{try{o(h=>{const p=u instanceof Function?u(h):u;return typeof window<"u"&&window.localStorage.setItem(e,JSON.stringify(p)),p})}catch(h){console.error(`[useLocalStorage] Failed to write key "${e}" to localStorage:`,h)}},[e]);return[i,c]}function Y0(e,a){const i=f.useRef(a);i.current=a,f.useEffect(()=>{const o=c=>{e?.current?.contains(c.target)||i.current(c)};return document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}},[a,e])}const Jk=y.div`
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
`,eE=y.button`
  ${at};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${je} {
    display: flex;
    margin-left: 12px;
  }
  ${({$selected:e=!1})=>e&&A`
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
`,tE=y.div`
  position: relative;
  margin: ${({$isCloseEnable:e})=>e?"27px 0 0":"0"};
  z-index: 9999;
  width: ${({$width:e})=>e||"580px"};
  padding: ${({$padding:e})=>e?"30px 40px":"0"};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`,nE=({isOpen:e=!1,isCloseEnable:a=!0,closeText:i="",width:o="",padding:c=!0,customComponent:u,onDismiss:h,dismissCallback:p})=>{const m=f.useRef(null);Y0(m,()=>{a&&(p&&p(),b())});const b=f.useCallback(()=>{p&&p(),h()},[h,p]);return e?Ss.createPortal(s.jsx(Jk,{children:s.jsx(tE,{ref:m,$width:o,$padding:c,$isCloseEnable:a,children:s.jsxs(s.Fragment,{children:[a?s.jsxs(eE,{onClick:()=>b(),children:[i||"CLOSE",s.jsx(we,{icon:"CloseCompact",size:15,color:"grey-12",weight:"regular"})]}):null,u]})})}),document.body):null},aE={isOpen:!1,onDismiss:()=>null},c2={modalProps:aE,setModalProps:e=>{console.debug(e)}},u2=st.createContext(c2),rE=({children:e})=>{const[a,i]=f.useState(c2.modalProps),o=c=>{i(c)};return s.jsxs(u2.Provider,{value:{modalProps:a,setModalProps:o},children:[s.jsx(nE,{...a}),e]})},d2=()=>{const{modalProps:e,setModalProps:a}=f.useContext(u2),i=f.useCallback(u=>{if(u===void 0)return;const h={...e,isOpen:u};a(h)},[e,a]),o=f.useCallback(()=>{i(!1)},[i]);return{createModal:f.useCallback(u=>{u||a({isOpen:!0,onDismiss:o});const h={isOpen:!0,closeText:u?.closeText,isCloseEnable:u?.isCloseEnable,width:u?.width,padding:u?.padding,dismissCallback:u?.dismissCallback,customComponent:u?.customComponent,onDismiss:o};a(h)},[o,a]),isModalOpen:e.isOpen,setModalOpen:i}},iE={sendNotification:()=>console.debug("This is the context initialization should not appear"),clearNotifications:()=>console.debug("This is the context initialization should not appear")},oE=st.createContext(iE),lE=({children:e})=>{const[a,i]=f.useState(null),o=f.useRef([]),c=f.useCallback(()=>{const m=o.current.shift();if(!m)return;const b={...m,closeCallback:()=>{m.closeCallback&&m.closeCallback(),i(null),c()}};i(b)},[]),u=f.useCallback(async m=>{const x={message:m.message,type:m.type,id:Dk()};m.icon&&(x.icon=m.icon),m.actionTextButton&&(x.actionTextButton=m.actionTextButton),m.onTextButtonClick&&(x.onTextButtonClick=m.onTextButtonClick),m.closeCallback&&(x.closeCallback=m.closeCallback),m.isPinned&&(x.isPinned=m.isPinned),o.current.push(x),o.current.length===1&&a===null&&c()},[a,c]),h=f.useCallback(()=>{o.current.length=0,i(m=>m!==null?{...m,closeNow:!0}:m)},[]),p=f.useMemo(()=>({sendNotification:u,clearNotifications:h}),[h,u]);return s.jsxs(oE.Provider,{value:p,children:[a?s.jsx(PC,{...a}):null,e]})},sE=(e=()=>{},a=1e3)=>{const i=f.useRef(null),o=f.useRef(e),c=f.useRef(!1),u=f.useCallback(async()=>{i.current!==null&&(console.debug("Clearing previous"),clearTimeout(i.current),i.current=null),await o.current(),c.current||(console.debug("Starting next timeout"),i.current=setTimeout(u,a))},[a]);f.useEffect(()=>{o.current=e},[e]),f.useEffect(()=>(c.current=!1,u(),()=>{console.debug("canceled"),c.current=!0,i.current!==null&&(console.debug("clearing final",i.current),clearTimeout(i.current),i.current=null)}),[u])};function Fl(e){const[a,i]=f.useState(!1);return f.useLayoutEffect(()=>{const o=window.matchMedia(e);i(o.matches);const c=u=>i(u.matches);return o.addEventListener("change",c),()=>o.removeEventListener("change",c)},[]),a}function Z0(){const e={isSmall:Fl(fn.small),isMedium:Fl(fn.medium),isLarge:Fl(fn.large),isXLarge:Fl(fn.xlarge),isXXLarge:Fl(fn.xxlarge),activeScreen:"small"};return e.isSmall&&(e.activeScreen="small"),e.isMedium&&(e.activeScreen="medium"),e.isLarge&&(e.activeScreen="large"),e.isXLarge&&(e.activeScreen="xlarge"),e.isXXLarge&&(e.activeScreen="xxlarge"),e}function cE(e){return s.jsxs("svg",{width:610,height:446,viewBox:"0 0 610 446",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[s.jsx("rect",{width:609.91,height:446,fill:"#DDDDDD"}),s.jsx("path",{d:"M242.675 210.273V235H239.246L226.677 216.865H226.447V235H222.717V210.273H226.17L238.751 228.432H238.98V210.273H242.675ZM269.596 222.636C269.596 225.277 269.113 227.546 268.148 229.446C267.182 231.338 265.858 232.795 264.175 233.817C262.501 234.831 260.597 235.338 258.464 235.338C256.323 235.338 254.412 234.831 252.729 233.817C251.055 232.795 249.735 231.334 248.769 229.434C247.803 227.534 247.32 225.268 247.32 222.636C247.32 219.996 247.803 217.73 248.769 215.839C249.735 213.939 251.055 212.482 252.729 211.468C254.412 210.446 256.323 209.935 258.464 209.935C260.597 209.935 262.501 210.446 264.175 211.468C265.858 212.482 267.182 213.939 268.148 215.839C269.113 217.73 269.596 219.996 269.596 222.636ZM265.902 222.636C265.902 220.624 265.576 218.93 264.924 217.553C264.28 216.169 263.394 215.122 262.268 214.414C261.149 213.698 259.881 213.339 258.464 213.339C257.04 213.339 255.768 213.698 254.649 214.414C253.53 215.122 252.645 216.169 251.993 217.553C251.349 218.93 251.027 220.624 251.027 222.636C251.027 224.649 251.349 226.347 251.993 227.732C252.645 229.108 253.53 230.154 254.649 230.871C255.768 231.579 257.04 231.933 258.464 231.933C259.881 231.933 261.149 231.579 262.268 230.871C263.394 230.154 264.28 229.108 264.924 227.732C265.576 226.347 265.902 224.649 265.902 222.636ZM286.977 210.273V235H283.246V210.273H286.977ZM292.41 210.273H296.938L304.81 229.494H305.1L312.972 210.273H317.499V235H313.95V217.107H313.72L306.428 234.964H303.482L296.189 217.094H295.96V235H292.41V210.273ZM325.012 235H321.052L329.951 210.273H334.261L343.159 235H339.199L332.208 214.764H332.015L325.012 235ZM325.676 225.317H338.523V228.456H325.676V225.317ZM362.303 218.085C362.069 217.352 361.755 216.696 361.361 216.116C360.974 215.529 360.512 215.03 359.972 214.619C359.433 214.201 358.817 213.883 358.125 213.665C357.441 213.448 356.688 213.339 355.867 213.339C354.475 213.339 353.219 213.698 352.1 214.414C350.981 215.13 350.096 216.181 349.444 217.565C348.8 218.942 348.478 220.628 348.478 222.624C348.478 224.629 348.804 226.323 349.456 227.707C350.108 229.092 351.001 230.142 352.136 230.859C353.271 231.575 354.563 231.933 356.012 231.933C357.356 231.933 358.527 231.66 359.526 231.112C360.532 230.565 361.308 229.792 361.856 228.794C362.411 227.788 362.689 226.605 362.689 225.244L363.655 225.425H356.58V222.347H366.299V225.16C366.299 227.237 365.856 229.04 364.971 230.569C364.094 232.09 362.878 233.265 361.325 234.094C359.779 234.924 358.008 235.338 356.012 235.338C353.774 235.338 351.81 234.823 350.12 233.793C348.438 232.762 347.126 231.301 346.184 229.41C345.242 227.51 344.771 225.256 344.771 222.648C344.771 220.676 345.045 218.906 345.592 217.336C346.14 215.766 346.908 214.434 347.898 213.339C348.897 212.237 350.068 211.396 351.412 210.816C352.764 210.228 354.241 209.935 355.843 209.935C357.179 209.935 358.423 210.132 359.574 210.526C360.733 210.921 361.763 211.48 362.665 212.205C363.574 212.929 364.327 213.79 364.923 214.788C365.518 215.778 365.921 216.877 366.13 218.085H362.303ZM371.035 235V210.273H386.538V213.484H374.766V221.018H385.729V224.218H374.766V231.788H386.683V235H371.035Z",fill:"#656565"})]})}const f2=y.div`
  position: relative;
  line-height: 0;
  ${({$minHeight:e})=>e&&`min-height: ${e}`};
  ${({$minWidth:e})=>e&&`min-width: ${e}`};
`,h2=`
  max-width:  100%;
  max-height: 100%;
  border-radius: 3px;
  background-color: var(--grey-11);
`,uE=y.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dE=y.video`
  ${h2};
  outline: none;

  ${({$isLoaded:e,$hasModalLimits:a})=>A`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    opacity: ${e?"1":"0"};

    ${a&&A`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,fE=y.img`
  ${h2};

  ${({$isLoaded:e,$hasModalLimits:a})=>A`
    transition: opacity var(--speed-slow) var(--easing-primary-out);
    display: ${e?"block":"none"};
    opacity: ${e?"1":"0"};

    ${a&&A`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`,hE=({src:e,alt:a,videoOptions:i={},mediaType:o,hasModalLimits:c,retryLoading:u=!1,retryLimit:h=5,minWidth:p,minHeight:m,onError:x=()=>{},onMediaLoad:b=()=>{}})=>{const[v,k]=f.useState(0),[C,S]=f.useState(e),[E,T]=f.useState(!1),[M,z]=f.useState(!1),{loop:_=!1,autoPlay:B=!0,controls:N=!1,muted:U=!0,children:L,...R}=i,F=f.useCallback(q=>{if(!u||v>=h)x(q.nativeEvent),z(!0),T(!0);else{const ee=1e3*(v**2+Math.random());k(re=>re+1),setTimeout(()=>{S(`${e}?v=${Date.now()}`)},ee)}},[e,x,v,u,h]),J=f.useCallback(()=>{b(),z(!0)},[b,z]);return s.jsxs(f2,{$minWidth:p,$minHeight:m,children:[o==="video"?s.jsx(dE,{loop:_,autoPlay:B,controls:N,muted:U,onError:F,...R,$hasModalLimits:c,src:E?"":C,$isLoaded:M&&!E,preload:"metadata",onCanPlayThrough:J,children:s.jsx(s.Fragment,{children:L})}):s.jsx(fE,{alt:a,onError:F,$hasModalLimits:c,src:E?"":C,onLoad:J,$isLoaded:M&&!E}),!M&&s.jsx(uE,{children:s.jsx(ia,{size:"large",styling:"primary"})}),E&&s.jsx(cE,{})]})},gE={controls:!0},X0=()=>{const{createModal:e,isModalOpen:a,setModalOpen:i}=d2();async function o(u,h){let p=!1;if(h==="img"){const m=new Image;m.src=u;try{await new Promise((x,b)=>{m.onload=()=>x(p=!0),m.onerror=b})}catch{p=!1}}if(h==="video"){const m=document.createElement("video");m.src=u;try{await new Promise((x,b)=>{m.oncanplaythrough=()=>x(p=!0),m.onerror=b})}catch{p=!1}}return p}return{createMediaModal:f.useCallback(async u=>{const{src:h,mediaType:p,alt:m,videoOptions:x=gE,onError:b,onMediaLoad:v,closeText:k,dismissCallback:C,retryLoading:S=!1,retryLimit:E=5,minHeight:T="300px",minWidth:M="300px"}=u;e({padding:!1,width:"auto",closeText:k,dismissCallback:C,customComponent:s.jsx(hE,{src:h,mediaType:p,alt:m,videoOptions:x,onError:b,onMediaLoad:v,retryLoading:S,retryLimit:E,minHeight:T,minWidth:M,hasModalLimits:!0})})},[e]),isMediaUrlValid:o,isMediaModalOpen:a,setMediaModalOpen:i}},i0="(prefers-color-scheme: dark)",o0=e=>{e?(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme")):(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"))},pE=()=>{const e=localStorage.getItem("isDarkThemeEnabled");let a=!0;return e===null?a=window.matchMedia(i0)&&window.matchMedia(i0).matches:a=e!=="false",o0(!a),a},Ls=()=>{const[e,a]=f.useState(pE),i=f.useCallback(()=>{a(c=>(localStorage.isDarkThemeEnabled=!c,o0(c),!c))},[]),o=f.useCallback(c=>{if(localStorage.getItem("isDarkThemeEnabled")!==null)return;const h=c.matches;a(()=>(o0(!h),h))},[]);return f.useEffect(()=>{const c=window.matchMedia(i0);return c.addEventListener("change",o),()=>{c.removeEventListener("change",o)}},[i,o]),{isDarkThemeEnabled:e,setIsDarkThemeEnabled:a,onThemeToggle:i,isLightMode:!e}},mE=30,vE=y.div`
  height: var(--button-height);
  overflow: visible;
`,xE=y.div`
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
`,yE=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`,bE=y.button`
  ${at}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${je} {
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
    ${je} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${je} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`,wE=(e,a)=>{if(a)return a;if(e)return`${e-mE}px`},Wl=({mainButtonId:e,buttonList:a,design:i="primary",size:o,textMaxWidth:c,disabled:u=!1,...h})=>{const[p,m]=f.useState(!1),x=f.useRef(null),b=f.useRef(null),v=f.useCallback(()=>{m(C=>!C)},[]),k=f.useCallback(()=>{m(!1)},[]);return Y0(b,k),s.jsx(vE,{children:s.jsxs(xE,{ref:b,className:`split-button-${i} split-button-size-${o}`,$isOpen:p,...h,children:[s.jsxs(yE,{ref:x,children:[a.filter(C=>C.id===e).map(({id:C,text:S,icon:E,disabled:T,...M})=>s.jsx(qv,{noBorderTop:!0,disabled:u||T,closeCallback:k,icon:E||"NoIcon",text:S,design:i,size:o,...M},C)),s.jsx(bE,{onClick:v,disabled:u,children:s.jsx(we,{icon:p?"Close":"Down",size:8})})]}),p&&!u?s.jsx(f.Fragment,{children:a.filter(C=>C.id!==e).map(({id:C,text:S,icon:E,disabled:T,...M})=>s.jsx(qv,{icon:E||"NoIcon",text:S,design:i,size:o,disabled:T,textMaxWidth:wE(x.current?.clientWidth,c),...M,closeCallback:k},C))}):null]})})},SE=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  button {
    text-wrap: nowrap;
  }
`,g2=({buttons:e})=>s.jsx(SE,{children:e.map(({id:a,buttonType:i,icon:o,text:c,iconPosition:u,size:h,...p})=>i==="icon-button"?s.jsx(I0,{size:h||"small",icon:o||"",position:u,...p,children:c},a||`button-stack-${a}`):s.jsx(nt,{size:h||"small",...p,children:c},a||`button-stack-${a}`))}),CE=y.div`
  display: flex;
  flex-direction: column;

  ${({$hide:e})=>e&&A`
    display: none;
  `}
`,kE=y.label`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary-10);
  padding: 12px;
  border-bottom: var(--grey-6) 1px solid;
`,Pv=y.div`
  padding: 12px;
  display: flex;
  justify-content: left;
`,Fv=y.div`
  flex: 0 0 32px;
  align-items: center;
  display: flex;
  padding-top: 1px;
`,vu=y.input`
  font-family: var(--font-data);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: var(--grey-12);
  background-color: transparent;

  width: 100%;
  border: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:a})=>a?"transparent 1px solid":"var(--warning-a9) 1px solid":"transparent 1px solid"};
  outline: none;
  flex: 1;
  justify-content: space-between;
  border-radius: 3px;

  &:focus, &:hover {

    border-color: ${({$isTimeInput:e})=>e?({$isTimeRangeValid:a})=>a?"transparent":"var(--warning-a9)":"transparent"};
  }
`,p2=y.div`
  flex: 0 0 20px;
  text-align: center;
`,Wv=y.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-radius: 3px;

  &:focus-within {
    background: var(--primary-9);
    box-shadow: 0px 0px 0px 5px var(--primary-9);    
    ${vu}{
      color: var(--white-1);
      border-color: transparent;
    }

    ${p2}{
      color: var(--white-1);
      text-align: center;
    }
  }
`,Vv=({allowAfterMidnight:e=!1,title:a,hasDate:i,hasTime:o,isTimeRangeValid:c=!0,date:u=new Date,setDateCallback:h=()=>{}})=>{const p=(S,E,T,M)=>{const z=Number(S.slice(-2)),_=Number(E.slice(-2)),B=z>24?Number(S.slice(-1)):z,N=_>60?Number(E.slice(-1)):_;return B>=24&&N!==-1&&M?{newHour:24,newMin:0}:B===0&&N===0&&M&&!T?{newHour:0,newMin:1}:B===23&&N===60&&!M?{newHour:23,newMin:59}:B>=24&&!M?{newHour:23,newMin:N}:N===60?{newHour:B+1,newMin:0}:B>0&&N===-1?{newHour:B-1,newMin:59}:B===0&&N===-1?{newHour:B,newMin:0}:B===-1?{newHour:0,newMin:N}:{newHour:B,newMin:N}},[m,x]=f.useState(Ut(u,"mm")),[b,v]=f.useState(Ut(u,"HH")),k=f.useCallback(({target:{value:S}})=>{if(Gv(S))return;const{newHour:E,newMin:T}=p(S,b,i,e);h(ov([Ho(u),ku(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,b,i,h]),C=f.useCallback(({target:{value:S}})=>{if(Gv(S))return;const{newHour:E,newMin:T}=p(m,S,i,e);h(ov([Ho(u),ku(u,{hours:E,minutes:T,seconds:0,milliseconds:0})]))},[e,u,m,i,h]);return f.useEffect(()=>{e&&us(u,Ho(u))?(x("24"),v("00")):(v(Ut(u,"mm")),x(Ut(u,"HH")))},[u,e]),s.jsxs(CE,{$hide:!i&&!o,children:[s.jsx(kE,{children:a}),i&&s.jsxs(Pv,{children:[s.jsx(Fv,{children:s.jsx(we,{icon:"Date",color:"dimmed",size:14,weight:"light"})}),s.jsx(Wv,{children:s.jsx(vu,{type:"text",readOnly:!0,value:Ut(u,"yyyy/MM/dd"),$isTimeRangeValid:c})})]}),o&&s.jsxs(Pv,{children:[s.jsx(Fv,{children:s.jsx(we,{icon:"Time",color:"dimmed",size:14,weight:"light"})}),s.jsxs(Wv,{children:[s.jsx(vu,{name:"hours",type:"number",min:"-1",max:e?24:23,value:m,onChange:k,$isTimeRangeValid:c,autoComplete:"off",$isTimeInput:!0}),s.jsx(p2,{children:":"}),s.jsx(vu,{name:"minutes",type:"number",min:"-1",max:"60",value:b,onChange:C,$isTimeRangeValid:c,autoComplete:"off",$isTimeInput:!0})]})]})]})},Mu=e=>({start:ku(e,{seconds:0,milliseconds:0}),end:Ho(e)}),EE=new Date,Oo=Mu(Pr(new Date)),jE=y.div`
  display: flex;
`,TE=y.div`
  border-right: var(--grey-6) 1px solid;
  width: 170px;
  display: flex;
  flex-direction: column;
`,ME=y.div`
  border-top: var(--grey-6) 1px solid;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  box-sizing: border-box;
`,LE=y.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,OE=y.div`
  font-family: var(--font-data);
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,$E=y.div`
  user-select: none;
`,zE=y.div`
  display: flex;
  height: 70px;
  border-bottom: var(--grey-6) 1px solid;
  text-align: center;
`,AE=y.div`
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
`,Lu=y.div`
  [stroke]{
    stroke: var(--grey-8);
  }
`,Yv=y.button`
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

  ${Lu}{
    svg * {
      transition: stroke var(--speed-fast) var(--easing-primary-in-out);
    }
  }

  &:hover:enabled  {
    color: var(--grey-12);

    ${Lu}{
      [stroke]{
        stroke: var(--grey-12);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

`,RE=y.div`
  padding: 5px 0;
`,DE=y.div`
  display: flex;
  padding: 4px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-top: 1px solid var(--grey-6);
`,_E=y.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,m2=y.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  height: 40px;
  box-sizing: border-box;

  padding: 0 10px;
`,NE=y(m2)`
  border-bottom: var(--grey-6) 1px solid;
`,v2=y.button`
  ${at};
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
`,HE=y(v2)`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--grey-a11);
`,BE=y.div`
  position: absolute;
  left: 18px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--primary-11);

  ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&A`
    background-color: var(--white-12);`}

  ${({$state:e})=>e==="inside"&&A`
    background-color: var(--primary-12);`}

  ${({$isToday:e})=>e&&A`
    left: 16px;
    bottom: 3px;
  `}

  ${({$hasContent:e})=>!e&&A`
    display: none;
  `}
`,UE=y.span`
  transform: translateY(-1px);
`,IE=y(v2)`
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 14px;
  font-weight: 400;

  ${({$thisMonth:e})=>!e&&A`
    color: var(--grey-a8);
  `}

  ${({$isToday:e})=>e&&A`
    border: 2px solid var(--primary-a7);
  `}

  ${({$state:e})=>e!=="single"&&e!=="start"&&e!=="end"&&A`
    &:hover:enabled {
      background: var(--primary-a6);
      color: var(--white-1);
    }
  `};

  ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&A`
    background: var(--primary-9);
    color: var(--white-1);
  `}

  ${({$state:e})=>e==="start"&&A`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${({$state:e})=>e==="end"&&A`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${({$state:e})=>e==="insideHover"&&A`
    background: var(--primary-a9) !important;
    color: var(--white-1);
  `}

  ${({$state:e})=>e==="inside"&&A`
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

    ${({$state:e})=>(e==="single"||e==="start"||e==="end")&&A`
      color: var(--white-1);
      background: var(--red-a9);
    `}

    ${({$state:e})=>e==="inside"&&A`
      color: var(--white-1);
      background: var(--red-a7);
      &:nth-child(7n+1), &:nth-child(7n){
        &::after {
          background: var(--red-a7);
        }
      }
    `};
  }

`,GE=["S","M","T","W","T","F","S"],qE=["日","月","火","水","木","金","土"],PE=({dateMode:e="interval",timeMode:a="interval",dateTimeTextUpper:i="From",dateTimeTextLower:o="To",timeZoneTitle:c="Timezone",timeZoneValueTitle:u="JST",hasEmptyValue:h=!1,updateCallback:p=()=>{},initialValue:m,availableRange:x,contentDays:b,lang:v="en",cancelText:k="Cancel",applyText:C="Apply",hasApply:S=!1,disableApply:E=!1,applyCallback:T=()=>{},cancelCallback:M=()=>{}})=>{const[z,_]=f.useState(WE(h,m)),[B,N]=f.useState(z===null?EE:z.start),[U,L]=f.useState("start"),[R,F]=f.useState([]),J=f.useRef(!0),[q,ee]=f.useState(!0),re=v==="ja"?qE:GE;f.useEffect(()=>{if(J.current)J.current=!1;else{const G=new Date;_(Mu(Pr(G))),N(G)}},[e,a]),f.useEffect(()=>{F(J7({start:e8(B),end:Ty(B)}))},[B]),f.useEffect(()=>{z!==null&&p(e==="interval"||a==="interval"?z:z.start)},[e,z,a,p]);const Q=f.useCallback(G=>{const ae=z||Oo;if(e==="single"){const oe=Vl(ae.start,G),de=Vl(ae.end,G);_({start:oe,end:de})}else if(U==="end"&&fv(G,ae.start)){const oe=Vl(ae.end,G);_({...ae,end:oe}),L("done")}else if(U==="start"||U==="end"||U==="done"){const oe=Vl(ae.start,G),de=Vl(ae.end,G);_({start:oe,end:de}),L("end")}},[e,z,U]);f.useEffect(()=>{const{start:G,end:ae}=z||Oo;a==="interval"&&fv(Ti(G,{minutes:1}),ae)?us(ae,Ho(G))&&ae.getSeconds()>0?ee(!0):ee(!1):ee(!0)},[z,a]);const ne=f.useCallback(G=>{const{end:ae}=z||Oo;_({start:G,end:ae})},[z]),D=f.useCallback(G=>{const{start:ae}=z||Oo;_({start:ae,end:G})},[z]);return s.jsxs(jE,{children:[s.jsxs(TE,{children:[s.jsx(Vv,{isTimeRangeValid:q,title:i,hasDate:!0,hasTime:a!=="off",date:z?z.start:Oo.start,setDateCallback:ne}),s.jsx(Vv,{isTimeRangeValid:q,title:o,hasDate:e==="interval",hasTime:a==="interval",date:z?z.end:Oo.end,allowAfterMidnight:!0,setDateCallback:D}),s.jsxs(ME,{children:[s.jsx(LE,{children:c}),s.jsx(OE,{children:u})]})]}),s.jsxs($E,{children:[s.jsxs(zE,{children:[s.jsxs(Yv,{type:"button",disabled:VE(B,x),onClick:()=>N(as(B,-1)),children:[s.jsx(Lu,{children:s.jsx(we,{icon:"Left",color:"dimmed",size:10})}),Ut(as(B,-1),"MMM",{locale:v==="ja"?xh:gu})]}),s.jsxs(AE,{children:[s.jsx("span",{children:Ut(B,"yyyy")}),Ut(B,"MMMM",{locale:v==="ja"?xh:gu})]}),s.jsxs(Yv,{type:"button",disabled:YE(B,x),onClick:()=>N(as(B,1)),children:[Ut(as(B,1),"MMM",{locale:v==="ja"?xh:gu}),s.jsx(Lu,{children:s.jsx(we,{icon:"Right",color:"dimmed",size:10})})]})]}),s.jsx(NE,{children:re.map((G,ae)=>s.jsx(HE,{children:G},ae))}),s.jsx(RE,{children:R.map((G,ae)=>{const oe=K7({start:G,end:n8(G)});return s.jsx(m2,{children:oe.map((de,O)=>{const W=FE(de,z),Y=nS(de);return s.jsxs(IE,{disabled:ZE(de,x),onClick:()=>Q(de),$state:W,$thisMonth:tS(de,B),$isToday:Y,children:[s.jsx(UE,{children:Ut(de,"d")}),s.jsx(BE,{$hasContent:XE(de,b),$state:W,$isToday:Y})]},O)})},ae)})}),S&&s.jsx(DE,{children:S&&s.jsxs(_E,{children:[s.jsx(nt,{design:"secondary",onClick:M,children:k}),s.jsx(nt,{onClick:T,disabled:!q||z===null||E,children:C})]})})]})]})},FE=(e,a,i)=>{let o="off",c=!1;if(a===null)return o;const u=eS(a).days===0;try{c=aS(e,a)}catch{c=!1}return(c||Li(a.start,e))&&(u?o="single":Li(a.start,e)?o="start":Li(a.end,e)?o="end":o="inside"),o},Vl=(e,a)=>ku(a,{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}),WE=(e,a)=>{if(e&&a===void 0)return null;const i=a||Mu(Pr(new Date));return i instanceof Date?Mu(i):i},VE=(e,a)=>{if(!a?.start)return!1;try{const i=a.start.getFullYear(),o=a.start.getMonth();if(e.getFullYear()<i||e.getFullYear()===i&&e.getMonth()<=o)return!0}catch(i){console.warn("Invalid available range:",a,i)}return!1},YE=(e,a)=>{if(!a?.end)return!1;try{const i=a.end.getFullYear(),o=a.end.getMonth();if(e.getFullYear()>i||e.getFullYear()===i&&e.getMonth()>=o)return!0}catch(i){console.warn("Invalid available range:",a,i)}return!1},ZE=(e,a)=>{if(!a)return!1;const{start:i,end:o}=a;try{if(i&&e<i&&!Li(e,i)||o&&e>o&&!Li(e,o))return!0}catch(c){console.warn("Invalid available range:",a,c)}return!1},XE=(e,a)=>a?a.some(i=>Li(e,i)):!1,QE=y.div`
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

`,KE=y.div`
  display: inline-flex;
  flex-direction: column;
`,x2=({children:e,...a})=>s.jsx(QE,{...a,children:s.jsx(KE,{children:s.jsx(s.Fragment,{children:e})})}),JE=y.div`
  ${({$isSortAscending:e})=>e&&A`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`,ej=Sa`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,l0=y.div`
  ${({$design:e})=>e==="default"?"padding: 0px 12px 0px 8px;":"padding: 0px 8px;"};
`,tj=y.button`
  ${at};
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
    opacity ${tn.speed.fast} ${tn.easing.primary.out},
    background-color ${tn.speed.fast} ${tn.easing.primary.out},
    box-shadow ${tn.speed.fast} ${tn.easing.primary.out},
    color ${tn.speed.fast} ${tn.easing.primary.out},
    border ${tn.speed.fast} ${tn.easing.primary.out};

  animation: ${ej} ${tn.speed.slower} ${tn.easing.primary.out};

  ${je} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${tn.speed.fast} ${tn.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({$design:e})=>e==="basic"?"":A`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${je} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({$isOpen:e})=>!e&&A`
      ${l0} ${je} {
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

  ${({$isOpen:e,$hasFlipArrow:a})=>e&&a&&A`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${je} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${l0} ${je} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`,nj=y.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,aj=y.div``,y2=({icon:e,hasFlipArrow:a=!1,isSortAscending:i=!1,isOpen:o,design:c="default",children:u,formAction:h,...p})=>s.jsx(tj,{type:"button",...p,$isOpen:o,$hasFlipArrow:a,$design:c,children:s.jsxs(nj,{children:[s.jsx(JE,{$isSortAscending:i,children:s.jsx(we,{icon:e,size:12,weight:"light",color:"filter-button-icon-color"})}),s.jsx(aj,{$hasFlipArrow:a,children:s.jsx(s.Fragment,{children:u})}),a&&s.jsx(l0,{$design:c,children:s.jsx(we,{icon:o?"Up":"Down",size:6,color:"grey-11"})})]})}),is=y.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`,_o=y.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`,xu=y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,rj=y.div`
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
`,No=y.div`
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
`,os=y.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,ij=y.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;

  ${({$selected:e,$disabled:a})=>A`
    
    ${_o}, ${No} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${is} {
        color: var(--input-label-hover);
      }

      ${_o}, ${No} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${os}, ${xu} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${e&&A`
      ${is} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${_o}, ${No} {
        border-color: var(--input-toggle-checked-border-color);
        ${os}, ${xu} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${is} {
          color: var(--input-label-hover);
        }

        ${_o}, ${No} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${os}, ${xu} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${a&&A`
      cursor: not-allowed;
    `};

    ${_o}, ${No} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${os} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${is}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`,b2=({title:e,value:a,optionType:i="text",selected:o=!1,disabled:c=!1,onClick:u=()=>{},...h})=>{const p=Wu.icons.weights.regular;return s.jsxs(ij,{onClick:u,$disabled:c,$selected:o,...h,children:[i==="checkbox"&&s.jsx(_o,{children:s.jsx(xu,{children:o&&s.jsx(rj,{children:s.jsx(r2,{color:"inverse",stroke:"inverse",size:12,weight:p})})})}),i==="radio"&&s.jsx(No,{children:s.jsx(os,{})}),s.jsx(is,{children:e})]})},w2=y.div`
  padding: 0 2px;
`,oj=y.div`
  ${({$hasBorder:e,$disabled:a,$noBackground:i,$width:o})=>A`

    transition: all var(--speed-normal) var(--easing-primary-in);
    gap: var(--search-input-container-gap, 6px);
    height: var(--input-compact-height);
    padding: 0;
    align-items: center;
    display: flex;
    border-radius: 3px;

    ${e&&A`
      padding: 0 8px;
      border: 1px solid var(--filter-button-stroke-color);
      box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);

      &:hover {
        border: var(--primary-7) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--primary-a2);

      }
      ${w2}{
        padding: 0;
      }
    `};

    ${a&&A`
      opacity: 50%;
      cursor: not-allowed;
      `};

    ${o&&A`
      width: ${o};
    `};

    background-color: ${i?"transparent":"var(--grey-1)"};

    &:focus-within {
      background-color: ${i?"transparent":"var(--grey-1)"};
      border: ${e?"1px solid var(--primary-9)":"none"};
      box-shadow: 0px 4px 9px 0px ${i?"transparent":"var(--primary-a2)"};
    }

  `};

  ${je} {
    flex-shrink: 0;
    display: flex;
  }


`,lj=y.button`
  ${at};
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 26px;

  ${je} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,sj=y.input`
  ${Ms};

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

`,cj=({color:e="subtle",hasBorder:a=!0,iconSize:i=12,disabled:o=!1,noBackground:c=!1,hasCrossButton:u=!1,onCrossClick:h=()=>{},width:p,children:m,formAction:x,...b})=>s.jsxs(oj,{$hasBorder:a,$disabled:o,$noBackground:c,$width:p,children:[s.jsx(w2,{children:s.jsx(we,{color:e,icon:"Search",weight:"regular",size:i})}),s.jsx(sj,{$color:e,disabled:o,...b}),u&&s.jsxs(lj,{onClick:h,children:[" ",s.jsx(we,{icon:"CloseCompact",color:"dimmed",size:12})]})]}),ys=e=>e==null||e.value===void 0||e.value===null||e.text===null?!1:(typeof e.value=="number"||typeof e.value=="string")&&typeof e.text=="string",uj=y.div`
  position: relative;
`,dj=y.div`
  display: inline-block;
`,fj=y.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;

  ${({$openState:e,$disabled:a})=>e&&A`
    display: ${e.isOpen?"inline-block":"none"};
    display: ${a&&"none"};

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
`,hj=(e,a,i)=>{let o="bottom-right";const c=e.left+a>window.innerWidth,u=e.bottom+i>window.innerHeight,h=e.bottom>i;return c&&u&&h&&(o="top-left"),u&&!c&&h&&(o="top-right"),!u&&c&&(o="bottom-left"),o},S2=f.forwardRef(({buttonIcon:e,buttonText:a,disabled:i=!1,minWidth:o=270,minHeight:c=190,isSortAscending:u,design:h="default",noCloseOnClickOutside:p,children:m,onToggleOpenCallback:x=()=>{},onCloseCallback:b=()=>{},...v},k)=>{const[C,S]=f.useState({isOpen:!1,position:"bottom-right"}),E=f.useRef(null),T=f.useRef(null),M=f.useCallback(()=>{p||(C.isOpen&&b(),S(B=>({...B,isOpen:!1})))},[p,b,C.isOpen]);Y0(T,M);const z=f.useCallback((B,N)=>{if(!E.current)return;const U=E.current.getBoundingClientRect();if(!U)return;const L=hj(U,B,N);x(!C.isOpen),S(R=>{const F=!R.isOpen;return{...R,isOpen:F,position:L}})},[x,C.isOpen]),_=f.useCallback(()=>{S(B=>({...B,isOpen:!1}))},[]);return f.useImperativeHandle(k,()=>({imperativeClose:_})),s.jsxs(uj,{ref:T,...v,children:[s.jsx(dj,{ref:E,children:s.jsx(y2,{icon:e,isOpen:C.isOpen,onClick:()=>z(o,c),disabled:i,isSortAscending:u,design:h,hasFlipArrow:!0,children:a})}),s.jsx(fj,{$openState:C,$disabled:i,$minWidth:o,children:s.jsx(s.Fragment,{children:m})})]})}),gj=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`,pj=y.div`
  font-family: var(--font-data);
  color: var(--grey-11);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  padding: 15px 0;
`,mj=({loadingText:e})=>s.jsxs(gj,{children:[s.jsx(ia,{size:"large",styling:"primary"}),s.jsx(pj,{children:e})]}),vj=y.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid var(--grey-6);
  background: var(--grey-a2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
`,xj=y.div`
  display: flex;
  align-items: center;
`,yj=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,bj=({resetText:e="Reset",cancelText:a="Cancel",closeText:i="Close",applyText:o="Apply",hasReset:c=!1,hasApply:u=!1,disableApply:h=!1,disableReset:p=!0,onReset:m=()=>{},onCancel:x=()=>{},onApply:b=()=>{}})=>s.jsxs(vj,{children:[s.jsx(xj,{children:c&&s.jsx(nt,{size:"small",design:"text-only",disabled:p,onClick:m,children:e})}),u&&s.jsxs(yj,{children:[s.jsx(nt,{size:"small",design:"secondary",onClick:x,children:h?i:a}),s.jsx(nt,{size:"small",onClick:b,disabled:h,children:o})]})]}),wj=y.div`
  display: inline-block;
  position: relative;
`,C2=y(b2)`
  letter-spacing: 0.2px;
`,Sj=y.div`
  max-height: ${({$moreItem:e})=>e?"228px":"196px"};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  padding: 8px 0;

  ${C2} {
    height: 40px;
    padding-left: 16px;
  }
`,Cj=y.div`
  min-width: 252px;
`,kj=y.div`
  display: flex;
  height: 24px;
  padding: 0px 8px;
  align-items: center;
  justify-content: left;
  gap: 8px;
  border-left: 1px solid var(--grey-6);
  width: auto;
`,Ej=y.div`
  display: flex;
  height: 24px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
`,jj=y.div`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 12px;
`,Tj=y.div`
  --search-input-font-size: 14px;
  --search-input-font-family: var(--font-data);
  --search-input-container-gap: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 14px;
`,Mj=y.div`
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
`,Lj=y.div`
  position: absolute;
  bottom: 0px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, var(--grey-3));
  width: 99%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`,Oj=(e,a)=>{let i=!1;return Array.isArray(a)?a.forEach(o=>{o.value===e.value&&(i=!0)}):ys(a)&&(i=e.value===a.value),i},$j=(e,a,i)=>{let o=!1;if(i==="checkbox"){const c=Array.isArray(a)?a:ys(a)?[a]:[],u=[];return c.forEach(h=>{e.value===h.value?o=!0:u.push(h)}),o||u.push(e),u.length===0?null:u}return e},Yl=(e,a)=>{if(e.length<=1)return e;const i=[...e],o=document.documentElement.lang||"en";return i.sort((c,u)=>{const h=c.text.localeCompare(u.text,o);return a?h:-h}),i},Qa=(e,a,i,o)=>{if(e.length<=a||i===null)return Yl(e,o);if(ys(i)){const c=e.findIndex(p=>p.value===i.value);if(c===-1||c<a)return Yl(e,o);const u=e.filter(p=>p.value!==i.value),h=Yl(u,o);return h.unshift(e[c]),h}if(Array.isArray(i)){const c=new Set(i.map(x=>x.value)),u=[],h=[];for(const x of e)c.has(x.value)?u.push(x):h.push(x);const p=Yl(u,o),m=Yl(h,o);return[...p,...m]}return e},zj=(e,a)=>e.filter(i=>i.text.toLowerCase().includes(a.toLowerCase())),Aj=(e,a,i)=>e.replace("[TOTAL]",`${i}`).replace("[VISIBLE]",`${a}`),Rj=(e,a)=>e===null&&a===null?!0:e===null||a===null?!1:Array.isArray(e)&&Array.isArray(a)?e.length!==a.length?!1:e.every(i=>a.some(o=>o.value===i.value)):Array.isArray(e)||Array.isArray(a)?!1:e.value===a.value,Dj=({buttonIcon:e,buttonText:a,list:i,selected:o=null,disabled:c=!1,isLoading:u=!1,loadingText:h,optionType:p="text",hasOptionsFilter:m,searchPlaceholder:x,maxDisplayedItems:b=5,searchResultText:v="Showing [VISIBLE] of [TOTAL]",emptyResultText:k,design:C="default",resetText:S,cancelText:E,closeText:T,applyText:M,hasReset:z,hasApply:_,descendingText:B="Descending",ascendingText:N="Ascending",isListAscending:U=!0,onSelect:L=()=>{},onResetCallback:R=()=>{},onCancelCallback:F=()=>{},...J})=>{const[q,ee]=f.useState(U),[re,Q]=f.useState(Qa(i,b,o,q)),[ne,D]=f.useState(""),[G,ae]=f.useState(o),oe=f.useRef(null),de=f.useCallback(()=>{Q(Qa(i,b,G,q))},[q,i,b,G]),O=f.useCallback(()=>{D(""),ae(o),ee(U),Q(Qa(i,b,o,U))},[U,i,b,o]),W=f.useCallback(ve=>{const _e=$j(ve,G,p);_||L(_e),ae(_e),Q(Qa(i,b,_e,q)),D("")},[G,p,_,i,b,q,L]),Y=f.useCallback(ve=>{const _e=ve.target.value.replace(/<[^>]*>/g,"").trim();if(D(_e),_e===""){Q(Qa(i,b,G,q));return}const Ot=zj(i,_e);Q(Qa(Ot,b,null,q))},[q,i,b,G]),se=f.useCallback(()=>{ae(o),F(),oe.current?.imperativeClose()},[F,o]),he=f.useCallback(()=>{L(G),oe.current?.imperativeClose()},[L,G]),me=f.useCallback(()=>{_||L(null),D(""),Q(Qa(i,b,null,U)),ae(null),ee(U),R()},[_,i,b,U,R,L]),fe=f.useCallback(()=>{ee(ve=>(Q(Qa(i,b,G,!ve)),!ve))},[i,b,G]);f.useEffect(()=>{let ve=!0;return ve&&(D(""),Q(Qa(i,b,G,q))),()=>{ve=!1}},[q,i,b,G]),f.useEffect(()=>{ae(o)},[o]);const ye=f.useMemo(()=>Rj(G,o),[o,G]);return s.jsx(wj,{...J,children:s.jsx(S2,{ref:oe,buttonIcon:e,buttonText:a,disabled:c,design:C,onCloseCallback:de,onToggleOpenCallback:O,noCloseOnClickOutside:_,children:s.jsxs(x2,{children:[m&&s.jsx(Tj,{children:s.jsx(cj,{type:"text",hasBorder:!1,placeholder:x,color:"dimmed",iconSize:12,value:ne,onChange:Y,noBackground:!0})}),u||!i?s.jsx(mj,{loadingText:h}):s.jsxs(Cj,{children:[m&&s.jsxs(Ej,{children:[s.jsx(jj,{children:Aj(v,re.length,i.length)}),s.jsx(kj,{children:s.jsx(I0,{design:"text-only",position:"left",size:"xsmall",weight:"light",onClick:fe,icon:q?"FilterAscending":"FilterDescending",children:q?N:B})})]}),s.jsx(Sj,{$moreItem:i.length>5,children:re.length>0?re.map((ve,_e)=>{const Ot=ve.value,jt=ve.text;return s.jsx(C2,{title:jt,onClick:()=>W(ve),selected:Oj(ve,G),optionType:p,value:Ot},_e)}):s.jsx(Mj,{children:k})}),i.length>5&&s.jsx(Lj,{})]}),(_||z)&&s.jsx(bj,{hasApply:_,hasReset:z,resetText:S,cancelText:E,closeText:T,applyText:M,onCancel:se,onApply:he,disableApply:ye,onReset:me,disableReset:G===null&&q===U&&ne===""})]})})})};y.div`
  display: inline-block;
  position: relative;
`;const _j=y(b2)`
  letter-spacing: 0.2px;
`;y.div`
  padding: 8px 0;
  ${_j} {
    height: 40px;
    padding: 16px;
  }
`;y.div`
  font-family: var(--font-ui);
  display: flex;
  border-top: var(--grey-6) 1px solid;
  margin-top: 5px;

  button:first-child {
    border-right: var(--grey-6) 1px solid;
  }
`;y.button`
  ${at};
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--font-data);
  color: var(--grey-12);
  font-size: 14px;
  height: 40px;
  padding: 0 16px;
  gap: 12px;

  ${({$isSelected:e})=>A`

    ${je} {
      display: flex;
      align-items: center;
      [stroke]{
        stroke: var(--grey-11);
      }
    }

    &:hover {
      ${je} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    }

    ${e&&A`
      ${je} {
        [stroke]{
          stroke: var(--primary-9);
        }
      }
    `}

  `}
`;y.div`
  display: inline-block;
  position: relative;
`;const Nj=A`
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
`,iu=y.div`
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
`;y.button`
  ${Nj}
  ${iu}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${iu}{
    background-color: var(--primary-9);
    }
  }
  ${({$isActive:e})=>e&&A`
    ${iu} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${iu}{
      cursor: pointer;
    }
  `}
  ${({$isInnerContextButton:e})=>e&&A`
    margin-right: 5px;
  `}
`;y.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:a})=>e&&A`
    display: ${e.isOpen?"inline-block":"none"};
    display: ${a&&"none"};
    ${e.position==="bottom-right"&&A`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="bottom-left"&&A`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position==="top-left"&&A`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position==="top-right"&&A`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`;y.div`
  display: inline-block;
`;const k2=A`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`;y.div`
  ${k2};
  padding: 4px 8px 4px 10px;
`;y.div`
  ${k2};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`;y.div`
  display: flex;
`;y.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`;y.div`
  display: flex;
`;y.div`
  select{
    background-color: transparent;
  }
`;const Hj=470,Bj=360,Uj=y.div``,Ij=({buttonIcon:e,buttonText:a,disabled:i,initialValue:o,dateMode:c,timeMode:u,selected:h,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:b,lang:v,hasEmptyValue:k,availableRange:C,contentDays:S,cancelText:E="Cancel",applyText:T="Apply",hasApply:M=!0,onCloseCallback:z=()=>{},onUpdateCallback:_=()=>{},onToggleCallback:B=()=>{},onCancelCallback:N=()=>{},onApplyCallback:U=()=>{},...L})=>{const R=f.useRef(null),[F,J]=f.useState({initialValue:o,isMount:!0}),[q,ee]=f.useState(!1),re=f.useRef(null),Q=f.useCallback(oe=>{R.current=oe,_(oe),ee(_k(h,oe))},[_,h]),ne=f.useCallback(()=>{R.current&&R.current!==h&&z(R.current)},[z,h]),D=f.useCallback(oe=>{!M&&R.current&&R.current!==h&&B(R.current,oe),oe&&!F.isMount&&J(de=>({...de,isMount:!0}))},[M,F.isMount,B,h]),G=f.useCallback(()=>{R.current&&R.current!==h&&(R.current=h===void 0?null:h,J({initialValue:h===null?void 0:h,isMount:!1})),N(),re.current?.imperativeClose()},[N,h]),ae=f.useCallback(()=>{R.current&&R.current!==h&&U(R.current),re.current?.imperativeClose()},[U,h]);return f.useEffect(()=>{let oe=!0;return oe&&h===null&&R.current!==null&&(R.current=h,J({initialValue:void 0,isMount:!1})),()=>{oe=!1}},[h]),s.jsx(Uj,{...L,children:s.jsx(S2,{ref:re,minWidth:Hj,minHeight:Bj,onCloseCallback:ne,onToggleOpenCallback:D,noCloseOnClickOutside:M,buttonIcon:e,buttonText:a,disabled:i,children:s.jsx(x2,{children:F.isMount&&s.jsx(PE,{dateMode:c,timeMode:u,dateTimeTextUpper:p,dateTimeTextLower:m,timeZoneTitle:x,timeZoneValueTitle:b,lang:v,availableRange:C,contentDays:S,cancelText:E,applyText:T,hasApply:M,updateCallback:Q,cancelCallback:G,applyCallback:ae,hasEmptyValue:!0,initialValue:F.initialValue,disableApply:q})})})})},Gj=Sa`
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
`;y.div`
  flex: 1 1 200px;
  max-width: 320px;
`;y.div`
  ${({theme:e})=>e&&A`
    animation: ${Gj} ${e.animation.speed.slow} ${e.animation.easing.primary.inOut};
  `};
`;y(y2)``;y(Dj)``;y(Ij)``;y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 6px;
`;const qj=y.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  min-height: 22px;
`,Pj=y.div`
  font-family: var(--font-ui);
  color: var(--grey-9);
`,Fj=y.div`
  height: 18px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 11px 0 8px;
  margin-left: 3px;
  color: var(--grey-9);
  font-family: var(--font-data);

  ${je} {
    display: flex;
    align-items: center;
  }
  border-right: 1px solid var(--grey-8);
`,Wj=y.div`
  padding: ${({$hasIcon:e})=>e?"0 15px 0 9px":"0 15px 0 0"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
`,Vj=y.button`
  ${at};
  font-family: var(--font-data);
  color: var(--grey-10);
  margin-left: 11px;
  font-size: 12px;
`,Yj=y.button`
  ${at};
`,Zj=y.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
`,Zv=(e,a)=>e.getHours()===23&&e.getSeconds()>0?Ut(Ti(Pr(e),{days:1}),a):Ut(e,a),Xj=e=>{let a=!1;if(e!=="")try{Ut(new Date,e),a=!0}catch{a=!1}return a},Qj=(e,a)=>e.replace("[TOTAL_RESULTS]",`${a}`),Kj=(e,a,i,o)=>{let c="";const u=Xj(a);return o&&ys(e)?c=`${o}: ${e.text}`:o&&e instanceof Date?c=u?`${o}: ${Ut(e,a)}`:`${o}: ${e.toDateString()}`:o&&Tu(e)?c=u?`${o}: ${Ut(e.start,a)} - ${Zv(e.end,a)}`:`${o}: ${e.start.toDateString()} - ${e.end.toDateString()}`:!o&&ys(e)?c=e.text:!o&&e instanceof Date?c=u?Ut(e,a):e.toDateString():!o&&Tu(e)&&(c=u?`${Ut(e.start,a)} - ${Zv(e.end,a)}`:`${e.start.toDateString()} - ${e.end.toDateString()}`),s.jsx(Wj,{$hasIcon:!!i,children:c})},Jj=({labelLists:e,totalResults:a,resultTextTemplate:i="Showing Results ([TOTAL_RESULTS]):",clearText:o="CLEAR ALL",resultsDateFormat:c="",onRemoveFilter:u=()=>{},onClearAll:h=()=>{},...p})=>s.jsxs(qj,{...p,children:[s.jsx(Pj,{children:Qj(i,a)}),s.jsxs(Zj,{children:[e.map(({icon:m,item:x,filterName:b,filterId:v,type:k},C)=>s.jsxs(Fj,{children:[m&&s.jsx(we,{icon:m,color:"dimmed",size:10,weight:"light"}),Kj(x,c,m,b),s.jsx(Yj,{onClick:()=>u(v,k,x),children:s.jsx(we,{icon:"CloseCompact",color:"dimmed",size:10,weight:"light"})})]},`Filter-Label-id-${C}`)),e.length>0&&s.jsx(Vj,{onClick:h,children:o})]})]});y.div`
  font-family: var(--font-ui);
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;const eT=y(Jj)``;y.div`
  ${eT} {
    margin-top: 29px;
    min-height: 19px;
  }
`;const tT=y.div`
  position: relative;
  display: inline-block;
`,nT=y.div`
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
  background-color: ${({theme:e,$color:a})=>a?e.colors.status[a]:"var(--grey-5)"};
`,aT=y.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({theme:e,$color:a})=>a?e.colors.status[a]:"var(--grey-5)"};
`,E2=({icon:e,status:a,counter:i,maxCounter:o=999})=>s.jsxs(tT,{children:[a&&i===void 0?s.jsx(aT,{$color:a}):i===void 0?null:s.jsx(nT,{$color:a,children:i>o?`${o}+`:i}),s.jsx(we,{icon:e,size:18,color:"dimmed"})]}),rT=Sa`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`,iT=Sa`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`,oT=y.svg`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].handleBase.fill};
  appearance: none;
`,lT=y.circle`
  fill: none;
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].handleRingLayer.stroke};
  mask: url(#${e=>e.$maskID});
`,sT=y.g`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${e=>e.$touchDragging&&A`
    animation: ${rT} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

  ${e=>e.$mouseDragging&&A`
    animation: ${iT} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

`,cT=y.circle`
  mix-blend-mode: multiply;
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].handleReactiveFill.fill};
  stroke: none;
`,uT=y.circle`
  fill: none;
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].handleReactiveRing.stroke};
`,dT=y.circle`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].handleContrastLayer.stroke};
`,fT=y.circle`
    mix-blend-mode: multiply;
    fill: url(#${e=>e.$fillID});
`,hT=y.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&A`
    opacity: 1;
  `};

`,gT=y.stop`
  stop-color: ${({theme:e,$styling:a})=>e.custom.lines[a].stopStart.stopColor};
`,pT=y.stop`
  stop-color: ${({theme:e,$styling:a})=>e.custom.lines[a].stopEnd.stopColor};
`,mT=y.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].grabHandleText.stroke};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`,vT=y.g`

`,xT=e=>{const{index:a,useAngles:i,angle:o,unit:c,size:u,lineSetId:h,x:p,y:m,moveCallback:x,moveEndCB:b=()=>{},Icon:v,rotate:k=0,options:C,readOnlyHandle:S=!1,styling:E="primary"}=e,T=f.useRef(null),[M,z]=f.useState(!1),[_,B]=f.useState(!1),[N,U]=f.useState(null),L=f.useCallback(O=>{if(O.preventDefault(),!S)for(let W=0;W<O.touches.length;W++){const Y=O.touches[W];(Y.target.parentNode.parentElement===T.current||Y.target.parentNode.parentElement.parentElement)&&(z(!0),U(W))}},[S]),R=f.useCallback(()=>{S||(z(!1),U(null),b())},[b,S]),F=f.useCallback(O=>{if(!S)for(let W=0;W<O.touches.length;W++)W===N&&x({x:O.touches[W].pageX,y:O.touches[W].pageY},a)},[a,x,S,N]),J=f.useRef(null),q=f.useRef(null),ee=f.useCallback(()=>{J.current&&(window.removeEventListener("mousemove",J.current),J.current=null),q.current&&(window.removeEventListener("mouseup",q.current),q.current=null)},[]),re=f.useCallback(O=>{O.preventDefault(),!S&&x({x:O.pageX,y:O.pageY},a)},[a,x,S]),Q=f.useCallback(O=>{O.preventDefault(),!S&&(B(!1),ee(),x({x:O.pageX,y:O.pageY},a),setTimeout(b))},[ee,a,x,b,S]),ne=f.useCallback(O=>{O.preventDefault(),!S&&(ee(),B(!0),J.current=re,q.current=Q,window.addEventListener("mousemove",re),window.addEventListener("mouseup",Q))},[ee,re,Q,S]);f.useEffect(()=>ee,[ee]);const D=i?"mask-"+h+"-"+a:"",G="shadowGradient-"+h+"-"+a,{showPointHandle:ae=!0,showPointLabel:oe=!1,pointIndexOffset:de}=C;return s.jsxs(oT,{ref:T,$styling:E,x:p,y:m,$mouseDragging:_,onTouchStart:L,onTouchEnd:R,onTouchMove:F,onMouseDown:ne,children:[s.jsxs("defs",{children:[s.jsxs("mask",{id:D,children:[s.jsx("rect",{width:"100%",height:"100%",x:"-50%",y:"-50%",fill:"white"}),s.jsx("rect",{width:u/3,height:u/.9,x:-(u/3/2),y:-(u/.9+5),fill:"black",transform:`rotate(${o||0} 0 0)`})]}),s.jsxs("radialGradient",{id:G,children:[s.jsx(gT,{$styling:E,offset:"0%"}),s.jsx(pT,{$styling:E,offset:"80%"})]})]}),v?s.jsx(vT,{transform:`scale(${c*1.5}) translate(-21 -21) rotate(${k}, 21, 21 )`,children:s.jsx(v,{height:"42",width:"42"})}):ae&&s.jsxs("g",{transform:`scale(${c})`,children:[s.jsx(fT,{r:u*1,$fillID:G}),s.jsx(dT,{$styling:E,r:u/2.4,strokeWidth:u/3}),s.jsxs(sT,{$touchDragging:M,$mouseDragging:_,children:[s.jsx(cT,{$styling:E,r:u/1.8}),s.jsx(uT,{$styling:E,r:u/2.25,strokeWidth:u/3})]}),s.jsx(lT,{$styling:E,r:u/2,strokeWidth:u/6,$maskID:D}),oe&&s.jsx(hT,{$showIndex:!0,children:s.jsx(mT,{$styling:E,transform:"translate(-5,6)",fontSize:"20px",$showIndex:!0,children:a+de})})]})]})},yT=y.line`
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].contrastLine.stroke};
  mix-blend-mode: multiply;
  stroke-width: ${({$lineClickSensing:e})=>e}px;
  stroke-opacity: ${({$showLineBorder:e})=>e?"0.35":"0"};
  cursor: pointer;
`,bT=y.line`
  pointer-events: none;
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].highlightLineBorder.stroke};
`,Ou=y.circle`
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].grabHandle.fill};
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].grabHandle.stroke};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${e=>e.$hide&&A`
    pointer-events: none;
    opacity: 0;
  `};
`,wT=y.g`
  opacity: 0;
  pointer-events: none;
  ${e=>e.$showIndex&&A`
    opacity: 1;
  `};

`,ST=y.text`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].grabHandleText.stroke};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`,Xv=y.text`
  text-align: center;
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  cursor: pointer;
  ${({$showLabelShadow:e})=>e&&A`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,s0=y(Ou)`
  fill: none;
  stroke: ${({theme:e,$styling:a})=>e.custom.lines[a].grabHandleContrast.stroke};
`,CT=y.g`

  ${Ou}, ${s0} {
    transition: r 250ms ease;
  }

  ${e=>e.$showIndex&&A`
    ${Ou}, ${s0} {
      pointer-events: none;
      r: ${e.$originalRadius*1.75};
    }
  `};
`,Qv=y.circle`
  fill: hsla(203, 100%, 35%, 0.49);
  cursor: pointer;
`,Kv=y(we)`
  cursor: pointer;
`,kT=e=>{const{x1:a,y1:i,x2:o,y2:c,unit:u,lineMoveCallback:h,lineMoveStartCallback:p,options:m,lineSetId:x,label:b,styling:v="primary",moveEndCB:k=()=>{},lineClickCallback:C=()=>{},showSmallDirectionMark:S=!1,overrideShowMoveHandle:E=!0}=e,{handleFinderActive:T,revealSetIndex:M,showMoveHandle:z,setIndexOffset:_,showDirectionMark:B,showLabelShadow:N=!1}=m,[U,L]=f.useState(),R=!z||!E,F=parseInt(e.lineClickSensingBorder),J=Y=>{for(let se=0;se<Y.touches.length;se++)h({x:Y.touches[se].pageX,y:Y.touches[se].pageY});k()},q=Y=>{for(let se=0;se<Y.touches.length;se++)p({x:Y.touches[se].pageX,y:Y.touches[se].pageY})},ee=f.useRef(null),re=f.useRef(null),Q=f.useCallback(()=>{ee.current&&(window.removeEventListener("mousemove",ee.current),ee.current=null),re.current&&(window.removeEventListener("mouseup",re.current),re.current=null)},[]),ne=f.useCallback(Y=>{h({x:Y.pageX,y:Y.pageY}),Y.preventDefault()},[h]),D=f.useCallback(Y=>{Q(),h({x:Y.pageX,y:Y.pageY}),k(),Y.preventDefault()},[Q,h,k]),G=f.useCallback(Y=>{Q(),p({x:Y.pageX,y:Y.pageY}),ee.current=ne,re.current=D,window.addEventListener("mousemove",ne),window.addEventListener("mouseup",D),Y.preventDefault()},[Q,p,ne,D]);f.useEffect(()=>Q,[Q]);const ae={x:(o+a)/2,y:(c+i)/2},oe=()=>{const Y=Math.atan2(c-i,o-a),se=Math.PI/2-Y,he=ae.x+Math.sin(se)-5,me=ae.y+Math.cos(se),fe=180/Math.PI*Math.atan2(c-i,o-a),ye=-fe;return{x:he,y:me,rotate:fe,labelRotate:ye}},de=()=>{const Y=oe();return s.jsxs("g",{transform:`translate(${Y.x},${Y.y}) rotate(${Y.rotate}) scale(${u*1})`,style:{cursor:"pointer"},children:[s.jsxs("g",{onClick:()=>C(x),transform:"translate(-3,-30) scale(0.8)",children:[s.jsx(Qv,{r:12,cx:6,cy:7}),s.jsx(Kv,{color:"inverse",icon:"Up",size:12,weight:"heavy",forSvgUsage:!0})]}),S&&s.jsxs("g",{onClick:()=>C(x),transform:"translate(5,25) rotate(-180) scale(0.8)",children:[s.jsx(Qv,{r:8,cx:3.5,cy:4.5}),s.jsx(Kv,{color:"inverse",icon:"Up",size:7,weight:"heavy",forSvgUsage:!0})]}),b&&s.jsx("g",{transform:`translate(0,${S?45:30}) rotate(${Y.labelRotate})`,children:s.jsx(Xv,{onClick:()=>C(x),textAnchor:S?Y.labelRotate<0?"end":"start":"middle",dominantBaseline:"middle",$styling:v,fontSize:"14px",x:0,y:0,$showIndex:M||T,$showLabelShadow:N,children:b})})]})},O=f.useCallback(()=>{e.hasClickSensingBorder&&L(!0)},[e.hasClickSensingBorder]),W=f.useCallback(()=>{e.hasClickSensingBorder&&L(!1)},[e.hasClickSensingBorder]);return s.jsxs("g",{children:[s.jsx(yT,{onMouseOver:O,onMouseOut:W,$lineClickSensing:F,$showLineBorder:U,onClick:()=>C(x),$styling:v,strokeLinecap:"round",x1:a,y1:i,x2:o,y2:c,strokeWidth:4*u}),s.jsx(bT,{$styling:v,x1:a,y1:i,x2:o,y2:c,strokeWidth:2*u}),s.jsxs(CT,{$styling:v,$showIndex:T&&M,$originalRadius:8*u,children:[s.jsx(s0,{$styling:v,r:8*u,strokeWidth:4*u,cx:ae.x,cy:ae.y,$hide:R}),s.jsx(Ou,{$styling:v,textAnchor:"middle",r:8*u,strokeWidth:1*u,cx:ae.x,cy:ae.y,$hide:R,onTouchMove:J,onTouchStart:q,onMouseDown:G})]}),s.jsx(wT,{$showIndex:!R&&(T||M),children:s.jsx(ST,{$styling:v,fontSize:`${u*10}px`,x:ae.x-3*u,y:ae.y+4*u,$showIndex:M||T,children:x+_})}),B?de():b&&s.jsx(Xv,{$styling:v,fontSize:`${u*14}px`,x:ae.x-16*u,y:ae.y-15*u,$showIndex:M||T,$showLabelShadow:N,children:b})]})},Ni=f.createContext({}),ET=y.polygon`
  fill: ${({$color:e})=>e};
  opacity: ${({$opacity:e})=>e};
`,jT=y.circle`
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].point.fill};
`,TT=y.text`
  text-align: center;
  fill: ${({theme:e,$styling:a})=>e.custom.lines[a].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
  ${({$showAreaLabelShadow:e})=>e&&A`
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  `}
`,MT=({lineSetData:e,unit:a,showAreaLabelShadow:i})=>{const o=e.points.length;if(o<3)return null;let c={x:0,y:0};e.points.map(({x:h,y:p})=>(c.x+=h,c.y+=p,null)),c={x:c.x/o,y:c.y/o};const u=e.areaName?.length||1;return s.jsx(TT,{fontSize:`${a*14}px`,$styling:e.styling||"primary",x:c.x-4*u*a,y:c.y+6*a,$showAreaLabelShadow:i,children:e.areaName})},Q0=({getCTM:e,boundaries:a,unit:i,size:o,lineSetId:c,options:u,onLineMoveEnd:h,onLineClick:p,lineClickSensingBorder:m,hasClickSensingBorder:x})=>{const{state:b,dispatch:v}=f.useContext(Ni),k=b[c],{showLabelShadow:C=!1}=u,[S,E]=f.useState([]),T=f.useRef([]),M=o/2,z=k.points.length===2,_=f.useCallback(Q=>(Q.x<a.x.min?Q.x=a.x.min:Q.x>a.x.max&&(Q.x=a.x.max),Q.y<a.y.min?Q.y=a.y.min:Q.y>a.y.max&&(Q.y=a.y.max),Q),[a]),B=f.useCallback((Q,ne)=>{const D=e();if(!D)return;const G=_({x:(Q.x-window.scrollX-D.e)/D.a,y:(Q.y-window.scrollY-D.f)/D.d}),ae={x:Math.round(G.x),y:Math.round(G.y)},oe=Ka(k,{points:{[ne]:{$merge:ae}}});v({type:"UPDATE",index:c,data:oe})},[e,_,k,v,c]),N=f.useCallback(Q=>{const ne=e();if(!ne)return;const D={x:(Q.x-window.scrollX-ne.e)/ne.a-M,y:(Q.y-window.scrollY-ne.f)/ne.d-M};T.current=k.points.map(G=>{const ae=D.x-G.x,oe=D.y-G.y;return{offsetX:ae,offsetY:oe}})},[M,k.points,e]),U=f.useCallback(Q=>{const ne=e();if(!ne)return;const{points:D}=k,G={x:(Q.x-window.scrollX-ne.e)/ne.a-M,y:(Q.y-window.scrollY-ne.f)/ne.d-M},ae=D.map((oe,de)=>{const{offsetX:O=0,offsetY:W=0}=T.current[de]||{};return _({x:Math.round(G.x-O),y:Math.round(G.y-W)})});v({type:"UPDATE",index:c,data:{...k,points:[...ae]}})},[e,k,M,v,c,_]),L=(Q,ne,D,G)=>Math.atan2(G-ne,D-Q)*180/Math.PI+90,R=f.useCallback(Q=>{const{points:ne}=Q,D=[];Q.points.forEach((G,ae)=>{const oe=ae+2>ne.length?0:ae+1,de=ne[oe],O=L(G.x,G.y,de.x,de.y);D.push(O)}),E(D)},[]);f.useEffect(()=>{z&&R(k)},[k,R,z]);const F=f.useRef(!1);f.useEffect(()=>{if(a.x.max===0&&a.y.max===0||F.current)return;if(F.current=!0,k.points.some(({x:ne,y:D})=>ne<a.x.min||ne>a.x.max||D<a.y.min||D>a.y.max)){const ne=k.points.map(D=>_({...D}));v({type:"UPDATE",index:c,data:{...k,points:ne}})}},[a]);const J=(k?.showPointHandle===void 0||k?.showPointHandle)&&k.points.map(({x:Q,y:ne},D)=>s.jsx(xT,{lineSetId:c,rotate:k.rotate,Icon:k.icon,index:D,unit:i,size:o,useAngles:z,angle:S[D],x:Q,y:ne,moveEndCB:h,moveCallback:B,options:u,styling:k.styling,readOnlyHandle:k.readOnly},D+c)),q=u.showPoint&&k.points.map(({x:Q,y:ne},D)=>s.jsx(jT,{$styling:k.styling||"primary",r:i,cx:Q,cy:ne},D)),ee=k.points.map(({x:Q,y:ne},D)=>{const{points:G,name:ae,styling:oe="primary"}=k,de=D+1>=G.length?0:D+1;if(D===1&&de===0)return null;const{x:O,y:W}=G[de];return s.jsx(kT,{moveEndCB:h,lineSetId:c,options:u,x1:Q,y1:ne,x2:O,y2:W,unit:i,label:ae,styling:oe,lineClickCallback:p,lineMoveCallback:U,lineMoveStartCallback:N,showSmallDirectionMark:k.showSmallDirectionMark,overrideShowMoveHandle:k.showMoveHandle,lineClickSensingBorder:m,hasClickSensingBorder:x},D)}),re=k.points.map(Q=>`${Q.x},${Q.y}`).join(" ");return s.jsxs("g",{children:[s.jsx(ET,{points:re,$color:k.areaFillColor?k.areaFillColor:"transparent",$opacity:k.areaTransparencyLevel?k.areaTransparencyLevel/100:0}),ee,J,q,s.jsx(MT,{lineSetData:k,unit:i,showAreaLabelShadow:C})]})},LT=y.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */

`,OT=y.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,$T=y.svg`
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

  ${e=>e.$transculent&&A`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,zT=y.img`
  object-fit: contain;
  width:  100%;
  height: 100%;
`,AT=({src:e,onSizeChange:a=()=>{},onLineMoveEnd:i=()=>{},onLineClick:o=()=>{},lineClickSensingBorder:c="65",hasClickSensingBorder:u=!0,options:{showHandleFinder:h,showSetIndex:p,showPointLabel:m=!1,showLabelShadow:x=!1,showPointHandle:b,showMoveHandle:v,showGrabHandle:k,setIndexOffset:C=0,pointIndexOffset:S=0,showPoint:E=!1,fixedImgDimensions:T,boundaryOffset:M=0,showDirectionMark:z=!1}={}})=>{const[_,B]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:N}=f.useContext(Ni),[U,L]=f.useState(!1),[R,F]=f.useState(!1),[J,q]=f.useState({h:1,w:1}),[ee,re]=f.useState(1),Q=f.useRef(null),ne=f.useRef(null),D=f.useCallback(()=>{if(!Q.current)return;const{naturalHeight:O,naturalWidth:W,clientHeight:Y}=Q.current,se=T&&T.y||O,he=T&&T.x||W;(se!==J.h||he!==J.w)&&(q({h:se,w:he}),a({h:se,w:he}),console.debug("image size:",{naturalHeight:O,naturalWidth:W,clientHeight:Y,unit:O/Y})),se/Y!==ee&&re(se/Y),F(!0)},[T,J.h,J.w,a,ee]),G=f.useCallback(()=>{if(!ne.current)return null;const O=ne.current.getScreenCTM();return console.debug("calculateCTM",O),O},[]),ae=O=>{O.target===ne.current&&L(!!U&&!0)},oe=()=>{L(h||!1)};f.useEffect(()=>{if(!ne.current)return;const{viewBox:O}=ne.current,W={x:{min:O.baseVal.x+M,max:O.baseVal.x+O.baseVal.width-M},y:{min:O.baseVal.y+M,max:O.baseVal.y+O.baseVal.height-M}};console.debug("setBoundaries",W),B(W)},[J,M]),f.useEffect(()=>(window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D)}),[D]);const de={handleFinderActive:U,revealSetIndex:p!==!1&&(p||N.length>1),showPointLabel:m,showLabelShadow:x,showPointHandle:b||b!==!1&&k!==!1,showMoveHandle:v||v!==!1&&k!==!1,setIndexOffset:C,pointIndexOffset:S,showPoint:E,showDirectionMark:z};return s.jsxs(LT,{children:[s.jsx(zT,{ref:Q,onLoad:D,src:e,alt:""}),R&&_?s.jsx($T,{ref:ne,viewBox:`0 0 ${J.w} ${J.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:oe,onPointerLeave:oe,$transculent:U,children:N.map((O,W)=>s.jsx(Q0,{hasClickSensingBorder:u,lineClickSensingBorder:c,onLineMoveEnd:i,onLineClick:o,lineSetId:W,lineData:O,getCTM:G,boundaries:_,unit:ee,size:30,options:de},W))}):s.jsx(OT,{children:s.jsx(ia,{size:"large",styling:"primary"})})]})},RT=y.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,DT=y.video`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,_T=y.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,NT=y.svg`
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

  ${e=>e.$transcalent&&A`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,HT=({src:e,onSizeChange:a=()=>{},onLineMoveEnd:i=()=>{},onLineClick:o=()=>{},onLoaded:c=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:h=!0,videoOptions:{loop:p=!1,autoPlay:m=!1,controls:x=!1,muted:b=!0,...v},options:{showHandleFinder:k,showSetIndex:C,showPointLabel:S=!1,showPointHandle:E,showLabelShadow:T,showMoveHandle:M,showGrabHandle:z,setIndexOffset:_=0,pointIndexOffset:B=0,showPoint:N=!1,boundaryOffset:U=0,showDirectionMark:L=!1}={}})=>{const R=f.useRef(null),F=f.useRef(null),[J,q]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:ee}=f.useContext(Ni),[re,Q]=f.useState(!1),[ne,D]=f.useState({h:768,w:1024}),[G,ae]=f.useState(1),[oe,de]=f.useState(!1),O=f.useCallback(()=>{if(!F.current)return;const{videoHeight:fe,videoWidth:ye,clientHeight:ve}=F.current;(fe!==ne.h||ye!==ne.w)&&(D({h:fe,w:ye}),a({h:fe,w:ye})),fe/ve!==G&&ae(fe/ve)},[ne.h,ne.w,G,a]),W=fe=>{fe.target===R.current&&Q(!!re&&!0)},Y=()=>{Q(k||!1)},se=f.useCallback(()=>R.current?R.current.getScreenCTM():null,[]);f.useEffect(()=>{if(!R.current||!oe)return;const{viewBox:fe}=R.current,ye={x:{min:fe.baseVal.x+U,max:fe.baseVal.x+fe.baseVal.width-U},y:{min:fe.baseVal.y+U,max:fe.baseVal.y+fe.baseVal.height-U}};q(ye)},[ne,oe,U]);const he=f.useCallback(({target:fe})=>{if(fe){de(!0),O();const{videoHeight:ye=1,videoWidth:ve=1}=fe;c({height:ye,width:ve})}},[O,c]);f.useEffect(()=>(window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O)}),[O]);const me={handleFinderActive:re,revealSetIndex:C!==!1&&(C||ee.length>1),showPointLabel:S,showLabelShadow:T,showPointHandle:E||E!==!1&&z!==!1,showMoveHandle:M||M!==!1&&z!==!1,setIndexOffset:_,pointIndexOffset:B,showPoint:N,showDirectionMark:L};return s.jsxs(RT,{children:[s.jsx(DT,{ref:F,controls:x,muted:b,autoPlay:m,loop:p,...v,onLoadedMetadata:he,src:e,id:"1",children:" "}),!oe&&s.jsx(_T,{children:s.jsx(ia,{size:"large",styling:"primary"})}),oe&&s.jsx(NT,{ref:R,viewBox:`0 0 ${ne.w} ${ne.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:W,onPointerUp:Y,onPointerLeave:Y,$transcalent:re,children:ee.map((fe,ye)=>s.jsx(Q0,{hasClickSensingBorder:h,lineClickSensingBorder:u,onLineMoveEnd:i,onLineClick:o,lineSetId:ye,lineData:fe,getCTM:se,boundaries:J,unit:G,size:30,options:me},ye))})]})},BT=y.video`
  /* width: 800px; */
`,UT=({id:e="1",enabled:a,peerAddress:i,maxConnectionAttempts:o=30,rtcConfiguration:c={},setStatus:u=()=>{},setError:h=()=>{},autoPlay:p=!0,muted:m=!0,children:x,...b})=>{const v=f.useRef(0),k=f.useRef(null),C=f.useRef(null),S=f.useRef(null),E=f.useRef(!1),T=f.useRef(null),M=f.useRef(null),z=f.useRef(a);function _(Q){h(Q),ee()}const B=async Q=>{if(!S.current||!C.current)return;try{Q.type==="offer"&&S.current.signalingState!=="stable"?await Promise.all([S.current.setLocalDescription({type:"rollback"}),S.current.setRemoteDescription(Q)]):(Q.sdp&&(Q.sdp=Q.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,"")),await S.current.setRemoteDescription(new RTCSessionDescription(Q)),u("Remote Description set"))}catch(D){console.error("Error:",D),h("Error Setting remote description");return}if(Q.type!=="offer")return;u("Creating Answer");try{const D=await S.current.createAnswer();console.debug("Got local description: "+JSON.stringify(D)),await S.current.setLocalDescription(D)}catch(D){console.error(D),D instanceof Error&&h(D.message);return}const ne={sdp:S.current.localDescription};u("Sending Local Description");try{C.current.send(JSON.stringify(ne)),u("Connected")}catch(D){console.error(D),D instanceof Error&&h(D.message)}};function N(Q){if(!S.current){console.error("peerConnection.current not found onIncomingICE ");return}const ne=new RTCIceCandidate(Q);S.current.addIceCandidate(ne).catch(h)}const U=({data:Q=""})=>{if(Q==="HELLO")console.debug("Received HELLO"),u("Registered with server, waiting for offer.");else if(Q.startsWith("ERROR"))console.error("Received "+Q),_(Q);else{let ne;try{ne=JSON.parse(Q)}catch(D){D instanceof SyntaxError?_("Error parsing incoming JSON: "+Q):_("Unknown error parsing response: "+Q);return}S.current||q(ne),ne.sdp!=null?(console.debug("Received Remote SDP:"+JSON.stringify(ne.sdp)),B(ne.sdp)):ne.ice!=null?(console.debug("Received Remote ICE:"+JSON.stringify(ne.ice)),N(ne.ice)):_("Unknown incoming JSON: "+ne)}};function L(Q){console.debug("serverClose"),!(!C.current||Q.target!==C.current)&&(u("Disconnected from server"),re(),Q.code!==1e3&&z.current&&E.current&&(T.current!==null&&clearTimeout(T.current),T.current=setTimeout(F,3e3)))}function R(Q){Q.target===C.current&&(console.debug(Q),h("Unable to connect to server"),ee())}function F(){if(!E.current)return;if(console.debug("connectToPeer",v.current),v.current>=o){h("Too many connection attempts, aborting. Refresh page to try again");return}h(null);const Q=IT(e);u("Connecting to server "+i);const ne=new WebSocket(i);C.current=ne,ne.addEventListener("open",()=>{M.current!==null&&clearInterval(M.current),M.current=setInterval(()=>{try{ne.send("HELLO "+Q),M.current!==null&&(clearInterval(M.current),M.current=null),u("Registering with server (sent HELLO) for peer id: "+Q)}catch(D){console.debug(D)}},3e3)}),ne.addEventListener("error",R),ne.addEventListener("message",U),ne.addEventListener("close",L),v.current+=1}function J(Q){k.current&&k.current.srcObject!==Q.streams[0]&&(console.debug("Incoming stream"),k.current.srcObject=Q.streams[0],u("Adding Track"))}function q(Q){if(v.current=0,console.debug("Creating RTCPeerConnection"),!Q.sdp){console.debug("WARNING: First message wasn't an SDP message!?");return}const ne=new RTCPeerConnection(c);S.current=ne,ne.addEventListener("track",J),ne.addEventListener("icecandidate",({candidate:D=null})=>{if(!D){console.debug("All local ICE Candidates sent.");return}C.current?C.current.send(JSON.stringify({ice:D})):console.debug("no WS found on peer connection 'icecandidate' event... how?")}),u("RTCPeerConnection created, waiting for SDP")}const ee=()=>{console.debug("closeWebSocket"),re(),C.current&&(C.current.close(),C.current=null)},re=()=>{console.debug("closePeerConnection"),S.current&&(S.current.close(),S.current=null)};return f.useEffect(()=>{z.current=a},[a]),f.useEffect(()=>(E.current=!0,a===!0?F():C.current&&C.current.close(1e3,"WebRTC Disabled"),()=>{console.debug("cleanup"),E.current=!1,T.current!==null&&(clearTimeout(T.current),T.current=null),M.current!==null&&(clearInterval(M.current),M.current=null),ee()}),[a]),s.jsx(BT,{...b,autoPlay:p,muted:m,ref:k,children:s.jsx(s.Fragment,{children:x})})};function IT(e){return"WRP_"+e+"_"+Math.floor(Math.random()*8990+10).toString()}const GT=y.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`,qT=y(UT)`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`,PT=y.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,FT=y.svg`
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

  ${e=>e.$transcalent&&A`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`,WT=({ws:e,onSizeChange:a=()=>{},onLineMoveEnd:i=()=>{},onLineClick:o=()=>{},onLoaded:c=()=>{},lineClickSensingBorder:u="65",hasClickSensingBorder:h=!0,videoOptions:p,options:{showHandleFinder:m,showSetIndex:x,showPointLabel:b=!1,showLabelShadow:v=!1,showPointHandle:k,showMoveHandle:C,showGrabHandle:S,setIndexOffset:E=0,pointIndexOffset:T=0,showPoint:M=!1,boundaryOffset:z=0,showDirectionMark:_=!1}={}})=>{const B=f.useRef(null),N=f.useRef(null),[U,L]=f.useState({x:{min:0,max:0},y:{min:0,max:0}}),{state:R}=f.useContext(Ni),[F,J]=f.useState(!1),[q,ee]=f.useState({h:768,w:1024}),[re,Q]=f.useState(1),[ne,D]=f.useState(!1),G=f.useCallback(()=>{if(!N.current)return;const{videoHeight:Y,videoWidth:se,clientHeight:he}=N.current;(Y!==q.h||se!==q.w)&&(ee({h:Y,w:se}),a({h:Y,w:se})),Y/he!==re&&Q(Y/he)},[q.h,q.w,re,a]),ae=Y=>{Y.target===B.current&&J(!!F&&!0)},oe=()=>{J(m||!1)},de=f.useCallback(()=>B.current?B.current.getScreenCTM():null,[]);f.useEffect(()=>{if(!B.current||!ne)return;const{viewBox:Y}=B.current,se={x:{min:Y.baseVal.x+z,max:Y.baseVal.x+Y.baseVal.width-z},y:{min:Y.baseVal.y+z,max:Y.baseVal.y+Y.baseVal.height-z}};L(se)},[q,ne,z]);const O=f.useCallback(({target:Y})=>{if(Y){D(!0);const se=Y;N.current=se,G();const{videoHeight:he=1,videoWidth:me=1}=se;c({height:he,width:me})}},[G,c]);f.useEffect(()=>(window.addEventListener("resize",G),()=>{window.removeEventListener("resize",G)}),[G]);const W={handleFinderActive:F,revealSetIndex:x!==!1&&(x||R.length>1),showPointLabel:b,showLabelShadow:v,showPointHandle:k||k!==!1&&S!==!1,showMoveHandle:C||C!==!1&&S!==!1,setIndexOffset:E,pointIndexOffset:T,showPoint:M,showDirectionMark:_};return s.jsxs(GT,{children:[s.jsx(qT,{onLoadedMetadata:O,peerAddress:e,id:"1",...p,enabled:!0,children:" "}),!ne&&s.jsx(PT,{children:s.jsx(ia,{size:"large",styling:"primary"})}),ne&&s.jsx(FT,{ref:B,viewBox:`0 0 ${q.w} ${q.h} `,version:"1.1",xmlns:"http://www.w3.org/2000/svg",onPointerDown:ae,onPointerUp:oe,onPointerLeave:oe,$transcalent:F,children:R.map((Y,se)=>s.jsx(Q0,{hasClickSensingBorder:h,lineClickSensingBorder:u,onLineMoveEnd:i,onLineClick:o,lineSetId:se,lineData:Y,getCTM:de,boundaries:U,unit:re,size:30,options:W},se))})]})},VT=(e,a)=>({x:e.x+(a.x-e.x)*.5,y:e.y+(a.y-e.y)*.5}),K0=(e,a)=>{switch(a.type){case"UPDATE_SET_POINTS":case"UPDATE":{const i=a.data.points.map(o=>({...o}));return Ka(e,{[a.index]:{points:{$set:i}}})}case"RENAME_SET":{const i={...e[a.index],name:a.data.name};return Ka(e,{[a.index]:{$set:i}})}case"UPDATE_SET_OPTIONS":{const i={...e[a.index],...a.data};return Ka(e,{[a.index]:{$set:i}})}case"ADD_SET":return[...e,a.data];case"REMOVE_SET":return Ka(e,{$splice:[[a.index,1]]});case"ADD_POINT":{const i=VT(e[a.index].points[0],e[a.index].points[1]);return Ka(e,{[a.index]:{points:{$splice:[[1,0,i]]}}})}case"REMOVE_POINT":return e[a.index].points.length<=2?e:Ka(e,{[a.index]:{points:{$splice:[[e[a.index].points.length-1,1]]}}});case"LOAD":return a.state.map(({name:o,points:c,...u})=>({name:o,points:c.map(({x:h,y:p})=>({x:h,y:p})),...u}));case"UPDATE_FILL_COLOR":{const i={...e[a.index],areaFillColor:a.data.areaFillColor};return Ka(e,{[a.index]:{$set:i}})}case"UPDATE_TRANSPARENCY_LEVEL":{const i={...e[a.index],areaTransparencyLevel:a.data.areaTransparencyLevel};return Ka(e,{[a.index]:{$set:i}})}default:return console.error(`Action ${a.type} not registered.`),e}},j2=24,T2=20,YT=-T2-j2,ZT=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${fn.large} {
    gap: ${T2}px;
    flex-direction: row;
  }
`,XT=y.div`
  position: relative;
  display: flex;
  flex-direction: ${({$areaTitleBottom:e})=>e?"column-reverse":"column"};
  gap: 4px;
`,QT=y.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${fn.large} {
    margin-left: ${YT}px;
    justify-content: center;
  }

  svg {
    display: block;
  }
`,KT=y.h1`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0;
`,J0=A`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
`,JT=y.div`
  ${J0}
`,eM=y(He)`
  ${J0}
  &:hover {
    text-decoration: underline;
  }
`,tM=y.button`
  ${at};
  ${J0};
  &:hover {
    text-decoration: underline;
  }
`,nM=({title:e,icon:a,areaTitle:i,areaHref:o,updateDocTitle:c=!0,hideAreaInDocTitle:u=!1,areaTitleBottom:h=!1,iconColor:p="dimmed",onAreaClick:m})=>(Qk(e,u?void 0:i||"",void 0,c),s.jsxs(ZT,{children:[a?s.jsx(QT,{children:s.jsx(we,{size:j2,color:p,icon:a})}):null,s.jsxs(XT,{$areaTitleBottom:h,children:[i&&m?s.jsx(tM,{onClick:m,type:"button",children:i}):i&&o?s.jsx(eM,{to:o,children:i}):i?s.jsx(JT,{children:i}):null,s.jsx(KT,{children:e})]})]})),aM=y.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`,rM=({children:e})=>s.jsx(aM,{children:s.jsx(s.Fragment,{children:e})}),iM=y.div`
  user-select: none;
`,oM=y(He)`
  text-decoration: none;
  display: flex;
`,lM=y.button`
  ${at};
  text-decoration: none;
  display: flex;
`,M2=y.div`
  font-family: var(--font-data);
  font-size: ${({$size:e})=>e}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({$noBorder:e})=>!e&&A`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `};

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({$tagSize:e})=>e==="compact"&&A`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({$tagSize:e})=>e==="default"&&A`
    padding: 3px 8px;
  `};

  ${je} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({$hoverColor:e,$enableHover:a})=>a&&A`
    &:hover {
      cursor: pointer;
      border-color: var(--${e});
      color: var(--${e});
      ${je} {
        [stroke]{
          stroke: var(--${e});
        }
      }
    }
  `};
`,L2=({icon:e="",size:a=12,weight:i="regular",label:o="",linkTo:c,noBorder:u=!1,tagSize:h,onTagClick:p,...m})=>{const x=f.useMemo(()=>h==="compact"?8:10,[h]),b=f.useMemo(()=>h==="compact"?12:14,[h]),v=()=>s.jsxs(M2,{$hoverColor:"primary",$enableHover:!!(p||c),$size:h?b:a,$tagSize:h,$noBorder:u,children:[e&&s.jsx(we,{icon:e,size:h?x:a,weight:i,...m}),s.jsx(iM,{children:o})]});return p?s.jsx(lM,{onClick:p,type:"button",children:v()}):c?s.jsx(oM,{to:c,children:v()}):v()},sM=y.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`,cM=y.div`
`,uM=y.div`
  max-width: 648px;
`,dM=y.div`
    ${({$iconLeftPanel:e})=>e&&A`
        padding-top: 32px;
    `};

    @media ${fn.large} {
      padding-top: 0px;
    }

`,fM=y.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
  margin-top: 29px;
`,hM=y.div``,wa=({title:e,icon:a,iconColor:i="primary-9",introductionText:o,areaHref:c,areaTitle:u,updateDocTitle:h=!0,hideAreaInDocTitle:p,tagList:m,areaTitleBottom:x,rightContent:b,bottomLeftContent:v,onAreaClick:k})=>s.jsxs(sM,{children:[s.jsxs(cM,{children:[s.jsx(nM,{iconColor:i,title:e,icon:a,areaHref:c,areaTitle:u,updateDocTitle:h,hideAreaInDocTitle:p,areaTitleBottom:x,onAreaClick:k,bottomLeftContent:v}),m?s.jsx(fM,{children:m.map(({icon:C,label:S,linkTo:E,onTagClick:T})=>s.jsx(L2,{icon:C||"",noBorder:!0,tagSize:"compact",label:S,linkTo:E,onTagClick:T},"tag-"))}):null,o?s.jsx(uM,{children:s.jsx(rM,{children:o})}):null,s.jsx(hM,{children:s.jsx(s.Fragment,{children:v})})]}),b?s.jsx(dM,{$iconLeftPanel:!!a,children:s.jsx(s.Fragment,{children:b})}):null]});y.div`
  display: flex;
  flex-direction: column;
`;const gM=y.div`
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
    ${({$aspect:e})=>e==="16:9"&&A`
      padding-left: 56.25%;
    `}
  }

  transition:
    opacity var(--speed-normal) var(--easing-primary-out),
    transform var(--speed-fast) var(--easing-primary-out);

  &:hover {
      cursor: pointer;

    ${({$hoverZoom:e})=>e&&A`
      transform: scale(1.5);
      opacity: 1;
      transition: transform var(--speed-normal) var(--easing-primary-out);
    `}
  }

`,pM=y.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,mM=y.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 41px;
  width: 55px;
  object-fit: cover;
  display: block;
`,vM=y.div`
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
  ${je} {
    display: flex;
    svg {
      padding-left: 2px;
      path {
        stroke: var(--white-1);
      }
    }
  };
`,xM=({hoverZoom:e=!0,image:a="",mediaUrl:i,mediaType:o,retryImageLoad:c=!1,retryLimit:u=5,closeText:h,onClickThumbnail:p})=>{const[m,x]=f.useState(!!a),[b,v]=f.useState(a),{createMediaModal:k}=X0(),[C,S]=f.useState(0),E=f.useRef(null),T=f.useRef(null),M=f.useCallback(async()=>{k({src:m&&i?i:"",mediaType:o||"img",minHeight:"240px",closeText:h})},[h,k,o,i,m]);f.useEffect(()=>{x(!1),S(0),v(a)},[a]),f.useEffect(()=>{E.current&&E.current.complete&&b!==""&&(T.current&&clearTimeout(T.current),T.current=null,x(!0))},[b]);const z=f.useCallback(()=>{T.current=null,v(`${a}?v=${Date.now()}`)},[a]),_=f.useCallback(()=>{if(x(!1),!c||C>=u||T.current)return;const U=1e3*(C**2+Math.random());S(L=>L+1),T.current=setTimeout(z,U)},[C,c,u,z]),B=f.useCallback(()=>{T.current&&clearTimeout(T.current),T.current=null,x(!0)},[]),N=(U,L)=>{if(!U){L(!1);return}const R=new Image;R.src=U,R.complete?L(!0):(R.onload=()=>{L(!0)},R.onerror=()=>{L(!1)})};return f.useEffect(()=>{N(a,U=>{x(!!U)})},[a]),s.jsxs(gM,{$hoverZoom:e,$mediaUrl:i,$aspect:"16:9",onClick:p||M,children:[m?s.jsx(pM,{ref:E,src:b,onError:_,onLoad:B}):s.jsx(mM,{children:s.jsx(Tk,{})}),i&&o==="video"&&s.jsx(vM,{children:s.jsx(we,{size:12,icon:"Play",color:"inverse"})})]})},yM=y.div`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({$status:e,theme:{colors:a}})=>A`
    background: ${a.status[e]};
    content:'${e}';
  `}

`,bM=({status:e="neutral"})=>s.jsx(yM,{$status:e}),O2=y.button`

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

`,wM=y.div`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${e=>e.theme.fontFamily.data};

  &:hover ${O2}{
    opacity: 0.5;
  }

  &, a {
    ${({theme:e,$cellStyle:a,$alignment:i})=>a==="firstColumn"?A`
      ${e.typography.table.columnData[a]};
    `:A`
      ${e.typography.table.columnData[a][i]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({$hasCopyButton:e})=>e&&A`
    padding-right: 20px;
  `};

  ${({theme:{styles:e},$hideDivider:a})=>!a&&A`
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
`,SM=y.span`
  ${({theme:e})=>A`
    ${e.typography.table.columnData.unit};
  `}
`,CM=y.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({$status:e="neutral",theme:{colors:a}})=>A`
    background: ${a.status[e]};
  `}
`,Zl=({showUnit:e=!1,showStatus:a=!1,status:i,unit:o="",cellStyle:c="normalImportance",alignment:u="left",hideDivider:h,isLastRow:p,hasCopyButton:m,href:x,children:b})=>{h=p?!0:h;const{copyToClipboard:v}=V0();return s.jsx(wM,{$cellStyle:c,$alignment:u,$hideDivider:h,$hasCopyButton:m,children:s.jsxs(s.Fragment,{children:[a?s.jsx(CM,{$status:i}):null,x?s.jsx("a",{href:x,children:b}):b,e?s.jsx(SM,{children:o}):null,m?s.jsx(O2,{onClick:()=>typeof b=="string"&&v(b),children:s.jsx(we,{icon:"Copy",size:16})}):null]})})},kM=y.div`
  display: table-row;
  ${({$isEmpty:e})=>e&&A`
    visibility: hidden;
  `};
`,EM=({selectable:e=!1,selectCallback:a,hasStatus:i,hasThumbnail:o,hasTypeIcon:c,rowData:u,isLastRow:h,columnConfig:p,closeText:m})=>{const x=f.useCallback(v=>{a&&a(v,u.id)},[u.id,a]),b=u.columns.length===0;return s.jsxs(kM,{$isEmpty:b,children:[e?s.jsx(Zl,{hideDivider:!0,children:s.jsx(P0,{checked:u._checked,disabled:u.checkboxDisabled,onChangeCallback:x})}):null,i?s.jsx(Zl,{hideDivider:!0,children:s.jsx(bM,{status:u.header?.status})}):null,o?s.jsx(Zl,{hideDivider:!0,children:s.jsx(xM,{image:u.header?.image,mediaUrl:u.header?.mediaUrl,mediaType:u.header?.mediaType,closeText:m,onClickThumbnail:u.header?.onClickThumbnail})}):null,c?s.jsx(Zl,{hideDivider:!0,children:s.jsx(we,{icon:u.header?.icon||"",color:"dimmed",weight:"regular",size:16})}):null,u.columns.map((v,k)=>{const{cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:M}=p[k],{unit:z,status:_,text:B,customComponent:N}=v;return s.jsx(Zl,{href:v.href,cellStyle:C,alignment:S,showUnit:E,showStatus:T,hasCopyButton:M,unit:z,status:_,isLastRow:h,children:N||B},k)})]})},jM=y.div`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${je} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;

    ${({$ascending:e})=>e&&A`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }

  ${({$isSortActive:e})=>e&&A`
    &:not(hover) {
      ${je} {
        display: inline-flex;
      }
    }
  `}

  ${({theme:{styles:e},$sortable:a})=>a&&A`

    ${e.tables.header.sortable.default};

    &:hover {
      cursor: pointer;
      ${e.tables.header.sortable.hover};

      ${je} {
        ${e.tables.header.sortable.hover};
        display: inline-flex;
      }
    }
  `}
`,TM=({header:e,sortable:a,isSortActive:i,ascending:o,columnId:c,indexKey:u,toggleSort:h})=>{const p=(m,x)=>{h(m,x)};return s.jsxs(jM,{$sortable:a,$isSortActive:i,$ascending:o,onClick:()=>{p(u,c)},children:[a&&s.jsx(we,{icon:"FilterSorting",size:14,color:"dimmed"}),e]})},MM=y.div`
  display: table-row;
  height: 50px;
`,Xl=y.div`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${e=>e.theme.fontFamily.ui};

  ${({$hasCopyButton:e})=>e&&A`
    padding-right: 20px;
  `};

  ${({theme:e,$alignment:a,$headerStyle:i})=>a?A`
    ${e.typography.table[i][a]};
  `:A`
    ${e.typography.table[i].left};
  `};

  ${e=>e.$fixedWidth&&A`
    width: ${e.$fixedWidth}px;
  `};

  ${({$minWidth:e})=>e&&A`
    min-width:${e}px;
  `};

  ${({theme:{styles:e},$headerStyle:a,$isSortActive:i})=>a==="subHeader"&&A`
  padding-bottom: 15px;

  &::after {
    ${e.tables.header.divider};
    content: '';
    display: block;
    height: 1px;
    left: ${i?"-15px":"0"};
    right: 0;
    width: ${i?"calc(100% + 15px)":"100%"};
    bottom: 0px;
    position: absolute;
  }
`};
`,LM=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({$alignment:e})=>e&&A`
      ${e==="right"?"align-items: flex-end":null};
      ${e==="center"?"align-items: center":null};
  `};
`,OM=y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  margin-bottom: 4px;
`,$M=y.div`
  ${({theme:{typography:e}})=>A`
    ${e.tables.groupName};
  `};
  padding-left: 2px;
  padding-right: 8px;
  white-space: nowrap;
`,Jv=y.div`
  height: 20px;
`,ex=y.div`
  ${({theme:{styles:e}})=>A`
    ${e.tables.header.groupLine};
  `};

  height: 1px;
  flex: 1;
  ${({$isLastOfGroup:e})=>e&&A`
    margin-right: 15px;
  `};
`,zM=(e,a)=>{if(a<0)return null;let i=!0;return a<e.length-1&&(i=e[a].groupTitle!==e[a+1].groupTitle),e[a].groupTitle?a!==0&&e[a-1].groupTitle===e[a].groupTitle?s.jsxs(f.Fragment,{children:[s.jsx(Jv,{}),s.jsx(ex,{$isLastOfGroup:i})]}):s.jsxs(f.Fragment,{children:[s.jsx($M,{children:e[a].groupTitle}),s.jsx(ex,{$isLastOfGroup:i})]}):s.jsx(Jv,{})},AM=({selectable:e,hasStatus:a,hasThumbnail:i,hasTypeIcon:o,allChecked:c,disableAllChecked:u,hasHeaderGroups:h,columnConfig:p,defaultAscending:m,toggleAllCallback:x=()=>{},sortCallback:b=()=>{}})=>{const[v,k]=f.useState(p),[C,S]=f.useState(m),E=f.useCallback(M=>{x(M)},[x]),T=f.useCallback((M,z)=>{if(v[M]===void 0||!v[M].sortable)return;const _=[...v];let B=null;_.forEach((L,R)=>{L.sortActive&&(B=R),R===M?L.sortActive=!0:L.sortActive=!1});const N=B===M?!C:C,U=z===void 0?`column_${M}`:z;b(N,U),k(_),S(N)},[C,b,v]);return s.jsxs(MM,{children:[e?s.jsx(Xl,{$headerStyle:"header",$fixedWidth:30,children:s.jsx(P0,{checked:c,disabled:u,onChangeCallback:E})}):null,a?s.jsx(Xl,{$headerStyle:"header",$fixedWidth:10}):null,i?s.jsx(Xl,{$headerStyle:"header",$fixedWidth:70}):null,o?s.jsx(Xl,{$headerStyle:"header",$fixedWidth:35}):null,p.map((M,z,_)=>{const{header:B,alignment:N,hasCopyButton:U,sortActive:L,columnId:R,sortable:F,minWidth:J}=M;return s.jsx(Xl,{$alignment:N,$hasCopyButton:U,$minWidth:J,$headerStyle:h?"subHeader":"header",$isSortActive:L,children:s.jsxs(LM,{$alignment:N,children:[h&&s.jsx(OM,{children:h&&zM(_,z)}),s.jsx(TM,{header:B,sortable:F,indexKey:z,columnId:R,isSortActive:L,ascending:C,toggleSort:T})]})},z)})]})},RM=y.div``,DM=y.div`
  display: table;
  width: 100%;
  position: relative;
`,$2=y.div`
  color: var(--grey-a11);
`,_M=y.div`
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

  ${$2} {
    margin-top: 10px;
  }
`,NM=y.div`
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
`,HM=({_checked:e=!1})=>e===!0,BM=({checkboxDisabled:e=!1})=>e===!0,UM=({columnConfig:e,selectable:a,rows:i=[],closeText:o,hasStatus:c=!1,hasThumbnail:u=!1,hasTypeIcon:h=!1,defaultAscending:p=!1,isLoading:m=!1,loadingText:x="Loading Data...",emptyTableTitle:b="",emptyTableText:v="",hasHeaderGroups:k=!1,sortCallback:C=()=>{},selectCallback:S=()=>{},toggleAllCallback:E=()=>{}})=>{const[T,M]=f.useState(!1),[z,_]=f.useState(!1),B=i.length===1&&i[0].columns.length===0&&!m;return f.useEffect(()=>{let N=!1,U=!1;i.every(HM)&&i.length>0&&!B&&(N=!0),(i.some(BM)||B||m)&&(U=!0),M(N),_(U)},[B,m,i]),s.jsx(RM,{children:s.jsxs(DM,{children:[s.jsx(AM,{selectable:a,hasStatus:c,hasThumbnail:u,hasTypeIcon:h,defaultAscending:p,allChecked:T,disableAllChecked:z,hasHeaderGroups:k,columnConfig:e,toggleAllCallback:E,sortCallback:C}),m?s.jsxs(_M,{children:[s.jsx(ia,{size:"large",styling:"primary"}),s.jsx($2,{children:x})]}):null,B?s.jsxs(NM,{children:[s.jsx("h3",{children:b}),s.jsx("p",{children:v})]}):null,i.map((N,U)=>{const L=i.length-1===U;return s.jsx(EM,{rowData:N,isLastRow:L,selectable:a,selectCallback:S,columnConfig:e,hasStatus:c,hasThumbnail:u,hasTypeIcon:h,closeText:o},U)})]})})};y.div`
  position: relative;
  ${({theme:e})=>A`
    font-family: ${e.fontFamily.ui};
  `}
`;const IM=y(nt)`
  flex-shrink: 0;
`,GM=y(G0)`
  flex-shrink: 0;
`;y(He)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;y.div`
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
  ${IM} {
    margin-left: 5px;
  }
  ${GM} {
    margin-left: 5px;
  }
`;const tx=y(Jy)``;y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({$alignment:e})=>e==="center"&&A`
    justify-content: center;
  `}

  ${({$alignment:e})=>e==="right"&&A`
    justify-content: flex-end;
`}

  ${tx} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${tx} {
      opacity: 1;
    };
  }
`;const qM=(e,a)=>{switch(a.type){case"CONNECTING":return{...e,connection:"connecting",address:a.address,loading:!0,errorMessage:""};case"CONNECTED":return{...e,connection:"connected",loading:!1};case"CONNECTION_FAIL":return{...e,loading:!1,connection:"error",errorMessage:a.errorMessage};case"PTZ_ERROR":return{...e,loading:!1,errorMessage:a.errorMessage};case"DISCONNECTED":return{image:"",connection:"disconnected",moving:null,zooming:null,loading:!1,stateID:e.stateID};case"SET_IMAGE":return{...e,image:a.image};case"MOVE_START":return{...e,moving:a.direction};case"STOP":return{...e,moving:null,zooming:null};case"ZOOM_START":return{...e,zooming:a.zooming};case"HOME":return e;default:return console.error(`Action ${a.type} not registered.`),e}},PM=({socketUrl:e="",imageRefresh:a=1e3})=>{const{sendJsonMessage:i,lastMessage:o}=kC(e),[c,u]=f.useReducer(qM,{connection:"disconnected",moving:null,zooming:null,image:"",loading:!1,stateID:Math.floor(Math.random()*1e3)}),{address:h=null}=c,p=f.useCallback(async({username:C,password:S,host:E,port:T=80})=>{u({type:"CONNECTING",address:E}),await i({method:"connect",params:{address:E,port:T,user:C,pass:S}})},[i]),m=f.useCallback(({direction:C})=>{console.debug("move",C);const S={x:0,y:0,z:0};switch(u({type:"MOVE_START",direction:C}),C){case"up":S.y=1;break;case"down":S.y=-1;break;case"left":S.x=-1;break;case"right":S.x=1;break}i({method:"ptzMove",params:{address:h,speed:S,timeout:30}})},[i,h]),x=f.useCallback(({zooming:C})=>{console.debug("zoom",C);const S={x:0,y:0,z:0};switch(u({type:"ZOOM_START",zooming:C}),C){case"in":S.z=1;break;case"out":S.z=-1;break}i({method:"ptzMove",params:{address:h,speed:S,timeout:30}})},[i,h]),b=f.useCallback(()=>{i({method:"ptzStop",params:{address:h}})},[i,h]),v=f.useCallback(async()=>{u({type:"DISCONNECTED"})},[]),k=f.useCallback(async()=>{h&&i({method:"fetchSnapshot",params:{address:h}})},[h,i]);return f.useEffect(()=>{const C=setInterval(k,a);return()=>{window.clearInterval(C)}},[k,a]),f.useEffect(()=>{if(!o)return;const{id:C="",result:S=null,error:E}=JSON.parse(o.data);if(E&&C!=="fetchSnapshot"){u({type:"PTZ_ERROR",errorMessage:E});return}else C==="connect"?(k(),u({type:"CONNECTED"})):C==="fetchSnapshot"?u({type:"SET_IMAGE",image:S||""}):C==="ptzMove"?console.debug("ptzMove"):C==="ptzStop"&&(console.debug("ptzStop"),u({type:"STOP"}))},[h,k,o]),{state:c,dispatch:u,actions:{connect:p,getImage:k,disconnect:v,zoom:x,stop:b,move:m}}},lr=f.createContext({state:{},dispatch:()=>{},actions:{}}),FM=({socketUrl:e="ws://localhost/wsapp/",imageRefresh:a=1e3,children:i})=>{const{state:o,dispatch:c,actions:u}=PM({socketUrl:e,imageRefresh:a});return s.jsx(lr.Provider,{value:{state:o,dispatch:c,actions:u},children:i})},WM=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,VM=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,YM=y.g`
`,ZM=()=>{const[e,a]=f.useState(!1),{state:{moving:i},actions:{move:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{a(!1),o({direction:"up"})},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(YM,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[s.jsx(VM,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:s.jsx("path",{d:"M97.1695375,0.000553838433 L97.5,0.333477759 L97.5,96.5 L1.33347776,96.5 L1.00279053,96.1695538 L1.01292824,94.904196 C1.86331972,42.4545249 44.5585771,0.176923219 97.1695375,0.000553838433 Z",id:"PTZ-Hover-Up"})}),s.jsxs(WM,{$active:i==="up",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(1.002791, 0.000554)",children:[s.jsx("path",{d:"M96.1667469,-4.68958206e-13 L96.4972095,0.33292392 L96.4972095,96.4994462 L0.33068723,96.4994462 L2.98427949e-13,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,-4.68958206e-13 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)"}),s.jsx("path",{d:"M96.1667469,9.08073616e-12 L96.4972095,0.33292392 L96.1682095,0.658446162 L96.1835085,4.9999719 C46.8438228,5.16537489 6.62803783,44.4114895 5.04606009,93.4545769 L5.00997725,94.9436996 L4.99983954,96.2090574 L0.655209472,96.1734462 L0.33068723,96.4994462 L1.20792265e-12,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,9.08073616e-12 Z",id:"PTZ-Active-Up-Highlight",stroke:"url(#linearGradient-18)",fill:"url(#linearGradient-17)"})]}),s.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447) translate(68.000000, 68.000000)",fillRule:"nonzero",children:[s.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-26"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-27)",xlinkHref:"#path-26"})]})]})},XM=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,QM=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,KM=y.g`
`,JM=y.g`

`,eL=()=>{const[e,a]=f.useState(!1),{state:{moving:i},actions:{move:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{o({direction:"down"}),a(!1)},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(KM,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[s.jsx(QM,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:s.jsx("path",{d:"M193.146668,96.3343288 L193.47713,96.6672527 L193.47713,192.833775 L97.3106078,192.833775 L96.9799206,192.503329 L96.9900583,191.237971 C97.8404498,138.7883 140.535707,96.5106982 193.146668,96.3343288 Z",id:"PTZ-Hover-Down",transform:"translate(145.228525, 144.584052) rotate(180.000000) translate(-145.228525, -144.584052) "})}),s.jsxs(XM,{$active:i==="down",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 96.167076)",fill:"url(#linearGradient-12)",children:[s.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Down-Slice",fillOpacity:"0.56",transform:"translate(48.248605, 48.416976) rotate(180.000000) translate(-48.248605, -48.416976) "}),s.jsx("path",{d:"M0.519854724,96.4994462 L0.189392188,96.1665222 L0.518392188,95.841 L0.50309316,91.4994743 C49.8427789,91.3340713 90.0585638,52.0879566 91.6405416,3.0448693 L91.6766244,1.55574655 L91.6867621,0.290388759 L96.0313922,0.326 L96.3559144,-4.8316906e-13 L96.6866017,0.330446162 L96.6764639,1.59580395 C95.8260725,54.0454751 53.1308151,96.3230768 0.519854724,96.4994462 Z",id:"PTZ-Active-Down-Highlight",stroke:"url(#linearGradient-15)"})]}),s.jsxs(JM,{id:"PTZ-Arrows-Icons",transform:"rotate(-45) translate(-138.146447, -137.146447) translate(68.000000, 68.000000) translate(71.000000, 125.000000) rotate(180.000000) translate(-71.000000, -125.000000)",fillRule:"nonzero",children:[s.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-22"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-23)",xlinkHref:"#path-22"})]})]})},tL=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,nL=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,aL=y.g`
`,rL=()=>{const[e,a]=f.useState(!1),{state:{moving:i},actions:{move:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{a(!1),o({direction:"left"})},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(aL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[s.jsx(nL,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:s.jsx("path",{d:"M96.9801453,96.3343288 L97.3106078,96.6672527 L97.3106078,192.833775 L1.14408557,192.833775 L0.813398341,192.503329 L0.823536055,191.237971 C1.67392753,138.7883 44.3691849,96.5106982 96.9801453,96.3343288 Z",id:"PTZ-Hover-Left",transform:"translate(49.062003, 144.584052) rotate(-90.000000) translate(-49.062003, -144.584052) "})}),s.jsxs(tL,{$active:i==="left",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(0.813398, 96.167076)",children:[s.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Up-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(-90.000000) translate(-48.248605, -48.416976) "}),s.jsx("path",{d:"M0.188273843,0.331580881 L0.521197763,0.00111834491 L0.846720004,0.330118345 L5.18824575,0.314819318 C5.35364873,49.654505 44.5997634,89.87029 93.6428507,91.4522677 L95.1319735,91.4883506 L96.3973312,91.4984883 L96.36172,95.8431183 L96.68772,96.1676406 L96.3572738,96.4983278 L95.0919161,96.4881901 C42.6422449,95.6377986 0.364643223,52.9425412 0.188273843,0.331580881 Z",id:"PTZ-Active-Left-Highlight",stroke:"url(#linearGradient-14)",fill:"url(#linearGradient-13)"})]}),s.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-138.146447, -137.146447)  translate(68.000000, 68.000000) translate(12.000000, 69.000000) rotate(-90.000000) translate(-12.000000, -69.000000)",fillRule:"nonzero",children:[s.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-20"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-21)",xlinkHref:"#path-20"})]})]})},iL=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,oL=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,lL=y.g`
`,sL=()=>{const[e,a]=f.useState(!1),{state:{moving:i},actions:{move:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{a(!1),o({direction:"right"})},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(lL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(138.146447, 137.146447) rotate(45.000000)",children:[s.jsx(oL,{$hover:e,transform:"translate(-138.146447, -137.146447) translate(41.146447, 40.646447)",fill:"url(#linearGradient-11)",fillOpacity:"0.56",children:s.jsx("path",{d:"M193.146668,0.167806588 L193.47713,0.500730508 L193.47713,96.6672527 L97.3106078,96.6672527 L96.9799206,96.3368066 L96.9900583,95.0714488 C97.8404498,42.6217777 140.535707,0.344175968 193.146668,0.167806588 Z",id:"PTZ-Hover-Right",transform:"translate(145.228525, 48.417530) rotate(90.000000) translate(-145.228525, -48.417530) "})}),s.jsxs(iL,{$active:i==="right",transform:"translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 0.000554)",children:[s.jsx("path",{d:"M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z",id:"PTZ-Active-Right-Slice",fillOpacity:"0.56",fill:"url(#linearGradient-12)",transform:"translate(48.248605, 48.416976) rotate(90.000000) translate(-48.248605, -48.416976) "}),s.jsx("path",{d:"M96.68772,96.1678653 L96.3547961,96.4983278 L96.0292738,96.1693278 L91.6877481,96.1846268 C91.5223451,46.8449411 52.2762305,6.62915618 3.23314314,5.04717843 L1.74402039,5.0110956 L0.478662601,5.00095788 L0.514273843,0.656327817 L0.188273843,0.331805575 L0.518720004,0.00111834491 L1.78407779,0.0112560596 C54.2337489,0.861647539 96.5113506,43.5569049 96.68772,96.1678653 Z",id:"PTZ-Active-Right-Highlight",stroke:"url(#linearGradient-16)",fill:"url(#linearGradient-13)"})]}),s.jsxs("g",{id:"PTZ-Arrows-Icons",transform:"rotate(-45.000000) translate(-137.792893, -137.500000) translate(68.000000, 68.000000) translate(127.000000, 69.000000) rotate(90.000000) translate(-127.000000, -69.000000)",fillRule:"nonzero",children:[s.jsx("use",{fill:"url(#linearGradient-19)",xlinkHref:"#path-24"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-25)",xlinkHref:"#path-24"})]})]})},cL=({children:e})=>s.jsxs("svg",{width:"237px",height:"245px",viewBox:"0 0 237 245",version:"1.1",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-1",children:[s.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),s.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-2",children:[s.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),s.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),s.jsx("circle",{id:"path-3",cx:"138.5",cy:"137.5",r:"106.5"}),s.jsxs("filter",{x:"-9.9%",y:"-12.2%",width:"119.7%",height:"124.4%",filterUnits:"objectBoundingBox",id:"filter-4",children:[s.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),s.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),s.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),s.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),s.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),s.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),s.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),s.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),s.jsxs("feMerge",{children:[s.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),s.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),s.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-5",children:[s.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),s.jsx("path",{d:"M96.5,0 C149.795478,0 193,43.2045216 193,96.5 C193,149.795478 149.795478,193 96.5,193 C43.2045216,193 0,149.795478 0,96.5 C0,43.2045216 43.2045216,0 96.5,0 Z",id:"path-6"}),s.jsxs("filter",{x:"-0.8%",y:"-0.8%",width:"101.6%",height:"101.6%",filterUnits:"objectBoundingBox",id:"filter-8",children:[s.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),s.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),s.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),s.jsxs("feMerge",{children:[s.jsx("feMergeNode",{in:"shadowMatrixInner1"}),s.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),s.jsxs("linearGradient",{x1:"49.8274193%",y1:"13.7528099%",x2:"50.1815273%",y2:"82.6324827%",id:"linearGradient-9",children:[s.jsx("stop",{stopColor:"#324659",offset:"0%"}),s.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50.170103%",y1:"15.6407997%",x2:"49.8181984%",y2:"84.5265853%",id:"linearGradient-10",children:[s.jsx("stop",{stopColor:"#324659",offset:"0%"}),s.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"99.9976822%",y1:"100%",x2:"30.4274195%",y2:"28.550434%",id:"linearGradient-11",children:[s.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"87.5668564%",y1:"87.9295401%",x2:"33.2810997%",y2:"28.936849%",id:"linearGradient-12",children:[s.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"87.568598%",y1:"87.9277819%",x2:"33.2803247%",y2:"28.9378254%",id:"linearGradient-13",children:[s.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"22.297939%",y1:"79.0413218%",x2:"39.761035%",y2:"60.7027769%",id:"linearGradient-14",children:[s.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),s.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"80.348219%",y1:"76.4229599%",x2:"62.8569051%",y2:"60.0361013%",id:"linearGradient-15",children:[s.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),s.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"77.520937%",y1:"22.5831044%",x2:"57.8137717%",y2:"41.946341%",id:"linearGradient-16",children:[s.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),s.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"43.428843%",x2:"25.1751595%",y2:"28.0552504%",id:"linearGradient-17",children:[s.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"30.6678499%",y1:"23.1406239%",x2:"41.9194217%",y2:"34.4210798%",id:"linearGradient-18",children:[s.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),s.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-19",children:[s.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),s.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),s.jsx("path",{d:"M25.6553811,77.370593 L14.0428746,58.1532717 C13.6102476,57.4373681 12.8355055,57 12,57 C11.1644945,57 10.3897524,57.4373681 9.95712537,58.1532717 L-1.65538114,77.370593 C-2.10132346,78.1091204 -2.11539958,79.0310048 -1.69221345,79.7828447 C-1.26902733,80.5346846 -0.474230758,81 0.387493489,81 L23.6125065,81 C24.4742308,81 25.2690273,80.5346846 25.6922135,79.7828447 C26.1153996,79.0310048 26.1013235,78.1091204 25.6553811,77.370593 Z",id:"path-20"}),s.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-21",children:[s.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),s.jsx("path",{d:"M84.6553811,133.370593 L73.0428746,114.153272 C72.6102476,113.437368 71.8355055,113 71,113 C70.1644945,113 69.3897524,113.437368 68.9571254,114.153272 L57.3446189,133.370593 C56.8986765,134.10912 56.8846004,135.031005 57.3077865,135.782845 C57.7309727,136.534685 58.5257692,137 59.3874935,137 L82.6125065,137 C83.4742308,137 84.2690273,136.534685 84.6922135,135.782845 C85.1153996,135.031005 85.1013235,134.10912 84.6553811,133.370593 Z",id:"path-22"}),s.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-23",children:[s.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),s.jsx("path",{d:"M140.655381,77.370593 L129.042875,58.1532717 C128.610248,57.4373681 127.835505,57 127,57 C126.164495,57 125.389752,57.4373681 124.957125,58.1532717 L113.344619,77.370593 C112.898677,78.1091204 112.8846,79.0310048 113.307787,79.7828447 C113.730973,80.5346846 114.525769,81 115.387493,81 L138.612507,81 C139.474231,81 140.269027,80.5346846 140.692213,79.7828447 C141.1154,79.0310048 141.101323,78.1091204 140.655381,77.370593 Z",id:"path-24"}),s.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-25",children:[s.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]}),s.jsx("path",{d:"M84.6553811,20.370593 L73.0428746,1.15327173 C72.6102476,0.437368074 71.8355055,0 71,0 C70.1644945,0 69.3897524,0.437368074 68.9571254,1.15327173 L57.3446189,20.370593 C56.8986765,21.1091204 56.8846004,22.0310048 57.3077865,22.7828447 C57.7309727,23.5346846 58.5257692,24 59.3874935,24 L82.6125065,24 C83.4742308,24 84.2690273,23.5346846 84.6922135,22.7828447 C85.1153996,22.0310048 85.1013235,21.1091204 84.6553811,20.370593 Z",id:"path-26"}),s.jsxs("filter",{x:"-3.6%",y:"-4.2%",width:"107.1%",height:"108.3%",filterUnits:"objectBoundingBox",id:"filter-27",children:[s.jsx("feGaussianBlur",{stdDeviation:"0.5",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0",type:"matrix",in:"shadowInnerInner1"})]})]}),s.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-20, -16)",children:[s.jsxs("g",{id:"PTZ-Base-Outer",children:[s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-4)",xlinkHref:"#path-3"}),s.jsx("use",{stroke:"url(#linearGradient-2)",strokeWidth:"1",fill:"url(#linearGradient-1)",fillRule:"evenodd",xlinkHref:"#path-3"})]}),s.jsxs("g",{id:"PTZ-Base-Inner",transform:"translate(138.500000, 137.500000) rotate(45.000000) translate(-138.500000, -137.500000) translate(42.000000, 41.000000)",children:[s.jsx("mask",{id:"mask-7",fill:"white",children:s.jsx("use",{xlinkHref:"#path-6"})}),s.jsxs("g",{children:[s.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-5)",fillRule:"evenodd",xlinkHref:"#path-6"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-8)",xlinkHref:"#path-6"})]}),s.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-B",stroke:"url(#linearGradient-9)",strokeLinecap:"square",mask:"url(#mask-7)"}),s.jsx("line",{x1:"96.5",y1:"0.333477759",x2:"96.5",y2:"192.666522",id:"PTZ-Base-Division-A",stroke:"url(#linearGradient-10)",strokeLinecap:"square",mask:"url(#mask-7)",transform:"translate(96.500000, 96.500000) rotate(-90.000000) translate(-96.500000, -96.500000) "})]}),e]})]}),uL=({children:e})=>s.jsxs("svg",{width:"239px",height:"121px",viewBox:"0 0 239 121",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom1",children:[s.jsx("stop",{stopColor:"#2E3F4B",offset:"0%"}),s.jsx("stop",{stopColor:"#273743",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-zoom2",children:[s.jsx("stop",{stopColor:"#2F4555",offset:"0%"}),s.jsx("stop",{stopColor:"#1F2F3A",offset:"100%"})]}),s.jsx("path",{d:"M42.6,0 L170.4,0 C193.92733,0 213,19.0278981 213,42.5 C213,65.9721019 193.92733,85 170.4,85 L42.6,85 C19.0726697,85 0,65.9721019 0,42.5 C0,19.0278981 19.0726697,0 42.6,0 Z",id:"path-zoom3"}),s.jsxs("filter",{x:"-9.9%",y:"-30.6%",width:"119.7%",height:"161.2%",filterUnits:"objectBoundingBox",id:"filter-zoom4",children:[s.jsx("feMorphology",{radius:"1.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter1"}),s.jsx("feOffset",{dx:"0",dy:"5",in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),s.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),s.jsx("feComposite",{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}),s.jsx("feMorphology",{radius:"0.5",operator:"dilate",in:"SourceAlpha",result:"shadowSpreadOuter2"}),s.jsx("feOffset",{dx:"0",dy:"-5",in:"shadowSpreadOuter2",result:"shadowOffsetOuter2"}),s.jsx("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}),s.jsx("feComposite",{in:"shadowBlurOuter2",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter2"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}),s.jsxs("feMerge",{children:[s.jsx("feMergeNode",{in:"shadowMatrixOuter1"}),s.jsx("feMergeNode",{in:"shadowMatrixOuter2"})]})]}),s.jsxs("linearGradient",{x1:"50%",y1:"100%",x2:"50%",y2:"2.48363598%",id:"linearGradient-zoom5",children:[s.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#262E37",stopOpacity:"0.66",offset:"100%"})]}),s.jsx("path",{d:"M32.1164062,0.625 L160.582031,0.625 C178.319433,0.625 192.698438,14.8959236 192.698438,32.5 C192.698438,50.1040764 178.319433,64.375 160.582031,64.375 L32.1164062,64.375 C14.3790049,64.375 0,50.1040764 0,32.5 C0,14.8959236 14.3790049,0.625 32.1164062,0.625 Z",id:"path-zoom6"}),s.jsxs("filter",{x:"-0.8%",y:"-2.4%",width:"101.6%",height:"104.7%",filterUnits:"objectBoundingBox",id:"filter-zoom7",children:[s.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner1"}),s.jsx("feOffset",{dx:"0",dy:"1",in:"shadowBlurInner1",result:"shadowOffsetInner1"}),s.jsx("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner1"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0",type:"matrix",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),s.jsx("feGaussianBlur",{stdDeviation:"1",in:"SourceAlpha",result:"shadowBlurInner2"}),s.jsx("feOffset",{dx:"0",dy:"-1",in:"shadowBlurInner2",result:"shadowOffsetInner2"}),s.jsx("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:"-1",k3:"1",result:"shadowInnerInner2"}),s.jsx("feColorMatrix",{values:"0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0",type:"matrix",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),s.jsxs("feMerge",{children:[s.jsx("feMergeNode",{in:"shadowMatrixInner1"}),s.jsx("feMergeNode",{in:"shadowMatrixInner2"})]})]}),s.jsxs("linearGradient",{x1:"-103.741879%",y1:"13.7528099%",x2:"211.711869%",y2:"82.6324827%",id:"linearGradient-zoom8",children:[s.jsx("stop",{stopColor:"#324659",offset:"0%"}),s.jsx("stop",{stopColor:"#263647",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"12.2402545%",y1:"50%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom9",children:[s.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"92.8257893%",y1:"51.9201456%",x2:"57.7520941%",y2:"28.4033239%",id:"linearGradient-zoom10",children:[s.jsx("stop",{stopColor:"#46596D",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#577393",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"65.5323776%",y1:"100%",x2:"65.5323776%",y2:"0%",id:"linearGradient-zoom11",children:[s.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"112.326836%",y1:"50%",x2:"-13.3174936%",y2:"50%",id:"linearGradient-zoom12",children:[s.jsx("stop",{stopColor:"#508ED3",stopOpacity:"0.65",offset:"0%"}),s.jsx("stop",{stopColor:"#79AEEB",stopOpacity:"0.66",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"-15.3833763%",y1:"43.598779%",x2:"72.9059278%",y2:"57.6171557%",id:"linearGradient-zoom13",children:[s.jsx("stop",{stopColor:"#A2B9FF",offset:"0%"}),s.jsx("stop",{stopColor:"#3393FF",stopOpacity:"0",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom14",children:[s.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),s.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]}),s.jsxs("linearGradient",{x1:"50%",y1:"0.918284083%",x2:"50%",y2:"98.6410535%",id:"linearGradient-zoom15",children:[s.jsx("stop",{stopColor:"#F0F7FF",offset:"0%"}),s.jsx("stop",{stopColor:"#B2C9D9",offset:"100%"})]})]}),s.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",transform:"translate(-200.000000, -490.000000) translate(213.000000, 508.000000)",children:[s.jsxs("g",{id:"PTZ-Zoom-Base-Outer",children:[s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom4)",xlinkHref:"#path-zoom3"}),s.jsx("use",{stroke:"url(#linearGradient-zoom2)",strokeWidth:"1",fill:"url(#linearGradient-zoom1)",fillRule:"evenodd",xlinkHref:"#path-zoom3"})]}),s.jsxs("g",{id:"PTZ-Zoom-Divider-Section",transform:"translate(10.000000, 10.000000)",children:[s.jsxs("g",{id:"PTZ-Zoom-Base-Inner",children:[s.jsx("use",{fillOpacity:"0.56",fill:"url(#linearGradient-zoom5)",fillRule:"evenodd",xlinkHref:"#path-zoom6"}),s.jsx("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-zoom7)",xlinkHref:"#path-zoom6"})]}),s.jsx("path",{d:"M105.820053,40.7088832 L99.6638296,34.5975949 C102.060022,31.621888 101.697137,27.3062591 98.8371361,24.766097 C95.9771351,22.2259349 91.6163355,22.346137 88.902734,25.0399314 C86.1891326,27.7337257 86.0680466,32.0626948 88.6268862,34.90182 C91.1857259,37.7409453 95.5330871,38.1011814 98.5306741,35.7224793 L104.686898,41.8337675 C105.002147,42.1387442 105.504804,42.1387442 105.820053,41.8337675 C106.132899,41.5231118 106.132899,41.0195389 105.820053,40.7088832 Z M88.425235,30.1282878 C88.425235,27.0527607 90.9367746,24.5595534 94.0349157,24.5595534 C97.1330568,24.5595534 99.6445964,27.0527607 99.6445964,30.1282878 C99.6445964,33.2038149 97.1330568,35.6970222 94.0349157,35.6970222 C90.9382392,35.693515 88.428768,33.202361 88.425235,30.1282878 Z",id:"PTZ-Zoom-Divider-Section-Icon",fill:"#6A839E",fillRule:"nonzero"}),s.jsx("line",{x1:"95.3544271",y1:"1.5",x2:"95.3544271",y2:"13.5",id:"PTZ-Zoom-Divider-Section-Top-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"}),s.jsx("line",{x1:"95.3544271",y1:"50.5",x2:"95.3544271",y2:"62.5",id:"PTZ-Zoom-Divider-Section-Bottom-Line",stroke:"url(#linearGradient-zoom8)",strokeLinecap:"square"})]}),e]})]}),dL=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,fL=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,hL=y.g`
`,gL=()=>{const[e,a]=f.useState(!1),{state:{zooming:i},actions:{zoom:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{a(!1),o({zooming:"in"})},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(hL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(10.000000, 10.625000)",children:[s.jsx(fL,{$hover:e,fillOpacity:"0.56",children:s.jsx("path",{d:"M96,0 L96,63.75 L160.883594,63.75 C178.620995,63.75 193,49.4790764 193,31.875 C193,14.2709236 178.620995,0 160.883594,0 L96,0 Z",id:"PTZ-Zoom-Hover-Plus-Slice",fill:"url(#linearGradient-zoom9)"})}),s.jsxs(dL,{$active:i==="in",transform:"translate(96.000000, 0.000000)",children:[s.jsx("path",{d:"M0,0 L0,63.75 L64.8835938,63.75 C82.6209951,63.75 97,49.4790764 97,31.875 C97,14.2709236 82.6209951,0 64.8835938,0 L0,0 Z",id:"PTZ-Zoom-Active-Plus-Slice",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),s.jsx("path",{d:"M96,0 L96,5 L32.1164062,5 C17.4302083,5 5.48398392,16.5663708 5.01434007,30.9927914 L5.00363033,31.4308221 L5,31.875 C5,46.5608308 16.8905918,58.5089041 31.6677396,58.746397 L32.1164062,58.75 L96,58.75 L96,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L96,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)",transform:"translate(48.000000, 31.875000) scale(-1, 1) translate(-48.000000, -31.875000) "})]}),s.jsx("g",{id:"PTZ-Zoom-Icons-Section",transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:s.jsx("path",{d:"M117.149921,14.1184213 L124.420095,14.1184213 C124.657568,14.1184213 124.850079,14.3104799 124.850079,14.5473962 L124.850079,21.8005035 C124.850079,22.9850849 125.812631,23.9453779 127,23.9453779 C128.187369,23.9453779 129.149921,22.9850849 129.149921,21.8005035 L129.149921,14.5473962 C129.149921,14.3104799 129.342432,14.1184213 129.579905,14.1184213 L136.850079,14.1184213 C138.037448,14.1184213 139,13.1581283 139,11.9735469 C139,10.7889655 138.037448,9.82867248 136.850079,9.82867248 L129.579905,9.82867248 C129.342432,9.82867248 129.149921,9.63661388 129.149921,9.3996976 L129.149921,2.14487441 C129.149921,0.960292981 128.187369,-3.55271368e-15 127,-3.55271368e-15 C125.812631,-3.55271368e-15 124.850079,0.960292981 124.850079,2.14487441 L124.850079,9.3996976 C124.850079,9.63661388 124.657568,9.82867248 124.420095,9.82867248 L117.149921,9.82867248 C115.962552,9.82867248 115,10.7889655 115,11.9735469 C115,13.1581283 115.962552,14.1184213 117.149921,14.1184213 L117.149921,14.1184213 Z",id:"PTZ-Zoom-Icon-Plus",fill:"url(#linearGradient-zoom14)"})})]})},pL=y.g`
  opacity: 0;
  ${({$active:e})=>e&&A`opacity: 1;`}

`,mL=y.g`
  opacity: 0;
  ${({$hover:e})=>e&&A`opacity: 1;`}
`,vL=y.g`
`,xL=()=>{const[e,a]=f.useState(!1),{state:{zooming:i},actions:{zoom:o,stop:c}}=f.useContext(lr),u=f.useCallback(()=>{a(!1),o({zooming:"out"})},[o]),h=f.useCallback(()=>{c(),a(!0)},[c]),p=f.useCallback(()=>{a(!0)},[]),m=f.useCallback(()=>{a(!1)},[]);return s.jsxs(vL,{onMouseEnter:p,onMouseLeave:m,onMouseDown:u,onMouseUp:h,onTouchStart:u,onTouchEnd:h,transform:"translate(10.000000, 10.625000)",children:[s.jsx(mL,{$hover:e,fillOpacity:"0.56",children:s.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",id:"PTZ-Zoom-Hover-Minus-Slice",fill:"url(#linearGradient-zoom10)"})}),s.jsxs(pL,{$active:i==="out",children:[s.jsx("path",{d:"M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z",fillOpacity:"0.61",fill:"url(#linearGradient-zoom11)"}),s.jsx("path",{d:"M97,0 L97,5 L33.1164062,5 C18.4302083,5 6.48398392,16.5663708 6.01434007,30.9927914 L6.00363033,31.4308221 L6,31.875 C6,46.5608308 17.8905918,58.5089041 32.6677396,58.746397 L33.1164062,58.75 L97,58.75 L97,63.75 L33.1164062,63.75 C15.3790049,63.75 1,49.4790764 1,31.875 C1,14.2709236 15.3790049,0 33.1164062,0 L97,0 Z",stroke:"url(#linearGradient-zoom13)",fill:"url(#linearGradient-zoom12)"})]}),s.jsx("g",{transform:"translate(-10.000000, -10.625000) translate(35.000000, 30.000000)",fillRule:"nonzero",children:s.jsx("path",{d:"M2.14992117,10 C0.962552494,10 0,10.960293 0,12.1448744 C0,13.3294558 0.962552494,14.2897488 2.14992117,14.2897488 L21.8500788,14.2897488 C23.0374475,14.2897488 24,13.3294558 24,12.1448744 C24,10.960293 23.0374475,10 21.8500788,10 L2.14992117,10 Z",id:"PTZ-Zoom-Icon-Minus",fill:"url(#linearGradient-zoom15)"})})]})},yL=y.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`,bL=({debug:e=!1})=>{const{state:a}=f.useContext(lr);return s.jsxs(yL,{children:[s.jsxs(cL,{children:[s.jsx(ZM,{}),s.jsx(eL,{}),s.jsx(rL,{}),s.jsx(sL,{})]}),s.jsxs(uL,{children:[s.jsx(xL,{}),s.jsx(gL,{})]}),e&&s.jsx("pre",{children:JSON.stringify(a,null,2)})]})};y.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${f2} {
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
`;y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({$hasPadding:e})=>e&&`
    padding-bottom: 43px
  `}
;

  ${je} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;y.div`
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
`;y.div`
  ${Vo};
  max-width: 245px;
  font-size: 10px;
`;y.div`
  ${Vo};
  max-width: 245px;
  font-size: 12px;
`;y.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${je} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;y.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;y.div`
  background-color: ${({$color:e})=>e&&`var(--${e})`};
  height: 3px;
  width: 100%;
`;y.div`
  display: flex;
  height: 60px;
`;y.div`
  ${({$hasRightData:e})=>e&&A`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${je} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;y.div`
  padding: 0 12px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;y.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`;y.div`
  ${Vo};
  ${({$hasRightData:e})=>e?"max-margin: 140px;":"max-margin: 250px;"}};
  ${({$hasMarginBottom:e})=>e&&"margin-bottom: 1px;"};

  color: var(--grey-a10);
  font-size: 10px;
`;y.div`
  font-family: var(--font-data);
  ${Vo};
  ${({$hasRightData:e})=>e?"max-width: 140px;":"max-width: 250px;"}

  color: var(--grey-11);
  font-size: 16px;
`;y.div`
  ${Vo};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({$hasMarginBottom:e})=>e&&"margin-bottom: 6px;"};
`;y.div`
  ${Vo};
  max-width: 80px;
  color: var(--grey-11);
  font-size: 12px;
`;y.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 var(--grey-a5);
  background-color: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
  }

  ${({$hasOnClick:e})=>e&&`
    cursor: pointer;
  `};
`;y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`;y.div`
  display: flex;
  ${M2} {
    margin-right: 10px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }
  flex-wrap: wrap;
`;y.div``;y.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  color: var(--grey-10);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;y.div`
  display: flex;
  justify-content: space-between;
`;y.div`
  button {
    margin: 0 10px 10px 0;
  }
`;y.div`
  flex-shrink: 0;
`;y.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
  margin-top: 29px;
  min-height: 19px;
  color: var(--grey-10);
  font-size: 12px;
`;const wL=12;y.div`
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
`;y.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`;y.input`
  ${Ms};
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
  padding-right: ${wL/2}px;
`;const SL=Sa`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;y.div`
  height: var(--input-height, 40px);
  animation: ${({$shouldShake:e})=>e?SL:"none"} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({$borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`;y(nt)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`;y.div`
  display: flex;
  gap: 0 8px;
`;y.button`
  ${at};
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
`;y.div`
  ${zk} {
    width: ${({$width:e})=>e||"60px"};
  }
`;y.div``;y.div`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  text-shadow: 0px 0px 10px var(--white-a5);
  text-decoration: none;
  color: var(--grey-11);
`;y.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  text-decoration: none;
  color: var(--grey-11);
  margin: 28px 0;
`;y(nt)`
  margin-left: 10px;
`;y.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;const c0=y.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,CL=y.button`
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

  ${c0}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${c0}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,kL=({show:e,link:a,label:i="Share",copiedLabel:o="Copied"})=>{const[c,u]=f.useState(i),{copyToClipboard:h}=V0(),p=f.useCallback(()=>{h(a||window.location.href),u(o),setTimeout(()=>u(c),2e3)},[a,o,c,h]);return f.useEffect(()=>{u(i)},[i]),e?s.jsxs(CL,{onClick:p,children:[s.jsx(c0,{children:s.jsx(we,{icon:"Link",size:16,color:"grey-10"})}),c]}):null},u0=y.div`
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
`,z2=A`
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

  ${u0}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${u0}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,A2=A`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,EL=y(He)`
  ${z2};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&A`
    &::after {
      ${A2};
    }
  `}
`,jL=y.button`
  ${at};
  ${z2};
  margin-left: ${e=>e.$iconInGutter?"-24px":"0"};

  ${({$showDivider:e})=>e&&A`
    &::after {
      ${A2};
    }
  `}
`,TL=({show:e=!0,link:a,label:i="Back",$showDivider:o,$iconInGutter:c,onClick:u})=>{const h=f.useMemo(()=>s.jsxs(st.Fragment,{children:[s.jsx(u0,{children:s.jsx(we,{icon:"Back",size:16,color:"grey-10"})}),i]}),[i]);return e?s.jsx(st.Fragment,{children:u?s.jsx(jL,{$showDivider:o,$iconInGutter:c,onClick:u,children:h}):a&&s.jsx(EL,{to:a,$showDivider:o,$iconInGutter:c,children:h})}):null},ML=y.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,LL=y.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,OL=y.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,$L=y.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,R2=y.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,D2=y(R2)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,_2=A`
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
`,N2=A`
  ${_2};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${D2} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,zL=y(He)`
  ${N2};
`,AL=y.button`
  ${at};
  ${N2};
`,RL=y.span`
  ${_2};
  pointer-events: none;
`,DL=y.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,_L=({showBreadcrumbs:e=!0,breadcrumbs:a=[],showHomeIcon:i=!0,back:o,share:c,$iconInGutter:u})=>{const{isLarge:h}=Z0(),p=u!==void 0?u:h,m=e&&a.length>0;return s.jsxs(ML,{children:[s.jsxs(LL,{children:[o&&s.jsx(TL,{$showDivider:m,$iconInGutter:p,...o}),m?s.jsx(OL,{children:a.map((x,b)=>{const{text:v,href:k,onClick:C}=x,S=b===0,E=b===a.length-1,T=s.jsxs(st.Fragment,{children:[S&&i?s.jsx(D2,{children:s.jsx(we,{icon:"Home",size:11,color:"grey-10"})}):null,v]});return s.jsx(st.Fragment,{children:s.jsxs($L,{children:[C?s.jsx(AL,{onClick:C,type:"button",children:T}):k?s.jsx(zL,{to:k,children:T}):s.jsx(RL,{children:T}),E?null:s.jsx(R2,{children:s.jsx(we,{icon:"Right",size:6,color:"grey-8"})})]})},b)})}):null]}),s.jsx(DL,{children:s.jsx(kL,{...c})})]})},ja=st.createContext({selected:"",setSelected:()=>{}}),eg=({children:e})=>{const[a,i]=f.useState("");return s.jsx(ja.Provider,{value:{selected:a,setSelected:i},children:e})},NL=y.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,HL=y.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,BL=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,UL=y.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,nx=y.div`
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
`,H2=({layout:e="default",HeaderContent:a={},children:i})=>{const{PageHeaderArea:o,TabsElementArea:c,UtilityHeaderOptions:u}=a,h="content-layout-"+e;return s.jsxs(NL,{className:h,children:[u?s.jsx(_L,{...u}):null,o?s.jsx(HL,{children:s.jsx(s.Fragment,{children:o})}):null,c?s.jsxs(eg,{children:[s.jsx(BL,{children:s.jsx(UL,{children:s.jsx(s.Fragment,{children:c})})}),s.jsx(nx,{children:s.jsx(s.Fragment,{children:i})})]}):s.jsx(nx,{children:s.jsx(s.Fragment,{children:i})})]})},IL=y.div`
  min-height: ${({$contentHeight:e})=>e+"px"};
`,GL=y.div`
  position: absolute;
  left: 0;
  right: 0;
  input {width: 100%;}
`,qL=({children:e})=>{const a=f.useRef(null),[i,o]=f.useState(0);return f.useEffect(()=>{a&&a.current&&o(a.current.clientHeight)},[a,e]),s.jsx(IL,{$contentHeight:i,children:s.jsx(GL,{ref:a,children:s.jsx(s.Fragment,{children:e})})})},d0=y.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,$u=y.div`
  background: var(--grey-10);
  flex: 1;
`,PL=y.div`
  flex: 0 0 20px;
  svg {
    path {
      stroke: var(--grey-11);
    }
  }
`,FL=y.svg`
  transform: ${({$layout:e})=>e==="horizontal"?"rotate(0deg)":"rotate(90deg)"};
`,WL=y.svg`
  transform: rotate(0deg);
  ${({$direction:e})=>{switch(e){case"up":return"transform: rotate(-90deg);";case"down":return"transform: rotate(90deg);";case"left":return"transform: rotate(180deg);";default:return"transform: rotate(0deg);"}}};
`,VL=y.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({$layout:e})=>e==="horizontal"?A`
    width: 16px;
    flex-direction: column;
    ${d0}{
      flex-direction: column;
    }

    ${$u}{
      width: 1px;
    }

  `:A`
      height: 16px;
      flex-direction: row;
      ${d0}{
        flex-direction: row;
      }
      ${$u}{
        height: 1px;
      }
  `}
`,YL=({state:e="default",layout:a="horizontal",arrowDirection:i})=>s.jsx(VL,{$layout:a,children:s.jsxs(d0,{children:[s.jsx($u,{}),s.jsx(PL,{children:e==="default"?s.jsxs(FL,{$layout:a,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M13 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 14.875V5.125",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M7 14.875L7 5.125",strokeLinecap:"round",strokeLinejoin:"round"})]}):s.jsx(WL,{$direction:i,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.25 4.375L12.61 9.735C12.6803 9.80525 12.7199 9.90058 12.7199 10C12.7199 10.0994 12.6803 10.1948 12.61 10.265L7.25 15.625",stroke:"#9BA1A6",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx($u,{})]})}),ZL=y.div`
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
`,f0=y.div`
  display: flex;
  position: relative;
  flex: 1;

  ${({$layout:e,$minDimension:a})=>e==="vertical"?A`
    ${a?`min-height: ${a}px;`:null};
  `:A`
    ${a?`min-width: ${a}px;`:null};
  `}
`,ki=y.div`
  display: flex;
  flex: 1;
  height: 100%;
  transition: opacity 0.2s cubic-bezier(0.85, 0, 0.15, 1);
`,XL=y.div`
  display: flex;
  position: relative;
  flex: 0 0 ${({$defaultSize:e})=>e}px;
  display: ${({$collapseState:e})=>e==="collapsed"?"none":"block"};
  transition:
    min-width 0.65s cubic-bezier(0, 0.55, 0.45, 1),
    min-height 0.65s cubic-bezier(0, 0.55, 0.45, 1);

  ${({$layout:e,$maxDimension:a,$minDimension:i})=>e==="vertical"?A`
    ${i?`min-height: ${i}px;`:"0"};
    ${a?`max-height: ${a}px;`:"none"};
    ${ki}{
      min-height: ${i}px;
    }
  `:A`
    ${i?`min-width: ${i}px;`:"0"};
    ${a?`max-width: ${a}px;`:"none"};
    ${ki}{
      min-width: ${i}px;
    }
  `}


  ${({$layout:e,$collapseState:a,$minDimension:i})=>a==="collapsing"?A`
      transition: none;
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${ki}{
        flex: 0 0 ${i}px;
        min-width: ${i}px;
        opacity: 0.5;
      }
    `:null}

    ${({$collapseState:e})=>e==="collapsed"?A`
      ${ki}{
        display: none;
      }
    `:null}

    ${({$layout:e,$collapseState:a,$minDimension:i})=>a==="peeking"?A`
      ${e==="horizontal"?"min-width: 0":"min-height: 0"};
      ${ki}{
        min-width: ${i}px;
        opacity: 0.5;
      }
    `:null}

    ${({$layout:e,$collapseState:a,$minDimension:i})=>a==="opening"?A`
    ${e==="horizontal"?"min-width: 0":"min-height: 0"};

    ${ki}{
      min-width: ${i}px;
    }
    `:null}
`,h0=y.div`
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

  ${({$fauxHover:e})=>e==="false"?A`
    > div {
      opacity: 0.6;
    }
  `:A`
    > div {
      opacity: 1;
    }
  `}

`,QL=y.section`
  box-sizing: border-box;
  display: flex;
  flex:1;
  flex-direction: row;
  overflow: hidden;

  transition: opacity 0.25s cubic-bezier(0.45, 0, 0.55, 1);
  opacity: 0;

  ${({$initialised:e})=>e==="true"?A`
    opacity: 1;
  `:null}

  ${({$layout:e})=>e==="vertical"?A`
    flex-direction: column;
    ${f0}{}
    ${h0}{
      cursor: row-resize;
    }
  `:null}

  ${({$reverse:e})=>e==="true"?A`
    ${f0}{ order: 2; }
    ${h0}{ order: 1; }
  `:null}
`,KL=f.forwardRef(({mainArea:e,sideArea:a,layout:i="horizontal",reverse:o,dividerSize:c=16,persist:u=!1,persistenceKey:h="resizable_ui",showDebug:p},m)=>{const b="resizable_layout_"+h,v=1,k=50,C=a.defaultSize||350,S=a.minSize||0,E=a.maxSize,T=e.minSize,[M,z]=f.useState(!1),[_,B]=f.useState(),[N,U]=f.useState(),[L,R]=f.useState(),[F,J]=f.useState(a.defaultCollapsed?"collapsed":"open"),[q,ee]=f.useState(C),[re,Q]=f.useState(C),[ne,D]=f.useState(C),G=f.useRef(null),ae=f.useRef(null),[oe,de]=Mh(`${b}_size`,null),[O,W]=Mh(`${b}_state`,null),[Y,se]=Mh(`${b}_quick_open_size`,null);f.useEffect(()=>{M||(u&&(oe&&ee(oe),O&&J(O),Y&&D(Y)),z(!0))},[M,u,O,oe,Y]),f.useEffect(()=>{!M||!a.onSideAreaStateChange||a.onSideAreaStateChange(F)},[M,a,F]),f.useImperativeHandle(m,()=>({open:()=>{fe()},close:()=>{me()},reset:()=>{he()}}));const he=f.useCallback(()=>{ee(C),J("open"),de(null),W(null)},[ee,C,J,de,W]),me=f.useCallback(()=>{J("collapsed"),ee(v),Q(v),u&&(de(v),W("collapsed"),se(re))},[ee,J,W,de,se,re,u]),fe=f.useCallback(()=>{J("open");let Kt;q>v&&ae.current?Kt=i==="horizontal"?ae.current.clientWidth:ae.current.clientHeight:Kt=ne,Q(Kt),ee(Kt),u&&(de(Math.round(q)),W("open"))},[u,W,de,ne,q,i]),ye=f.useCallback(()=>{F==="collapsing"&&q<S-k?me():(Q(Math.round(q)),D(Math.round(q)),fe()),R(!1)},[me,fe,S,q,F]),ve=f.useCallback(Kt=>{Kt.preventDefault();const{clientX:Ta,clientY:oa}=Kt;Q(F==="collapsed"?q:Ql(q,S,E)),B({x:Ta,y:oa}),U({x:0,y:0}),R(!0)},[q,E,S,F]),_e=()=>{L&&ye()},Ot=f.useCallback(Kt=>{const{clientX:Ta,clientY:oa}=Kt;let Ln,On=F;if(L&&_&&re){if(U({x:_.x-Ta,y:_.y-oa}),i==="horizontal"){const Gt=(G.current?.clientWidth??0)-c-(T||0);o?Ln=Ql(re-(_.x-Ta),null,Gt):Ln=Ql(re+(_.x-Ta),null,Gt)}else{const Gt=(G.current?.clientHeight??0)-c-(T||0);o?Ln=Ql(re-(_.y-oa),null,Gt):Ln=Ql(re+(_.y-oa),null,Gt)}if(a.collapsable){const Gt=Ln<S-k;F==="open"&&Gt||F==="opening"&&Gt?On="collapsing":F==="collapsing"&&!Gt?On="open":F==="collapsed"?On="peeking":F==="peeking"&&!Gt&&(On="opening")}ee(Ln),J(On)}},[ee,U,L,_,re,F,i,c,T,S,o,a.collapsable]),jt=f.useCallback(()=>{L&&ye()},[L,ye]);f.useEffect(()=>(document.addEventListener("mouseleave",jt),()=>{document.removeEventListener("mouseleave",jt)}),[jt]);const It=()=>F==="collapsed"||F==="peeking"?i==="horizontal"?o?"right":"left":o?"down":"up":i==="horizontal"?o?"left":"right":o?"up":"down",Mn=()=>F==="collapsed"||F==="peeking"||F==="collapsing"?"arrow":"default",Wr=s.jsxs(ZL,{children:[s.jsxs("div",{children:[s.jsx("span",{children:"State:"})," ",F]}),s.jsxs("div",{children:[s.jsx("span",{children:"Position:"})," ",_?.x,", ",_?.y]}),s.jsxs("div",{children:[s.jsx("span",{children:"Difference:"})," ",N?.x,", ",N?.y]}),s.jsxs("div",{children:[s.jsx("span",{children:"sideAreaStartBasis:"})," ",re]}),s.jsxs("div",{children:[s.jsx("span",{children:"sideAreaBasis:"})," ",q]}),s.jsxs("div",{children:[s.jsx("span",{children:"lastOpenSize:"})," ",ne]})]});return s.jsxs(QL,{ref:G,onPointerMove:Ot,onPointerUp:_e,$initialised:M?"true":"false",$layout:i,$reverse:o?"true":"false",children:[s.jsx(f0,{$layout:i,$minDimension:T,children:s.jsx(s.Fragment,{children:e.content})}),s.jsx(h0,{onPointerDown:ve,onDoubleClick:he,$size:c,$fauxHover:L?"true":"false",children:s.jsx(YL,{state:Mn(),layout:i,arrowDirection:It()})}),s.jsx(XL,{ref:ae,style:{flexBasis:`${q}px`},$defaultSize:C,$minDimension:S,$maxDimension:E,$layout:i,$collapseState:F,children:s.jsx(ki,{children:s.jsx(s.Fragment,{children:a.content})})}),p?Wr:null]})}),Ql=(e,a,i)=>{let o=e;return o=i&&o>i?i:o,o=a&&o<a?a:o,o},B2=50,U2=68,Os=y.div`
  display: flex;
`,JL=y.div``,$s=y.div`
  padding: 0;
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${({$maxWidth:e})=>e&&A`
      & > div {
        max-width: ${e};
      }
    `}
`,eO=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,ax=y.div`
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({$legacyLayout:e,$paddingOverride:a,$maxWidth:i})=>e&&A`
    padding: ${a||"40px 20px"};

    @media ${fn.medium} {
      padding: ${a||"40px"};
    }

    @media ${fn.large} {
      max-width: ${i||"1200px"};
      padding: ${a||"70px 90px"};
    }
  `}
`,Zu=y.div`
  opacity: 0;
  transition: opacity var(--speed-fast) var(--easing-primary-in-out);

  ${({$compact:e})=>e&&A`
    font-size:14px;
  `}
`,qr=y.div`
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
`,I2=y.div`
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
`,tg=A`
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
`,tO=y.a`
  display: flex;
  text-decoration: none;
`,nO=y.div`
  margin-left: 15px;
`,aO=y.div`
  ${tg}

  ${({$menuOpen:e})=>e&&A`
  ${Zu}{
    opacity: 1;
  }
`}

  &:hover ${qr}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${je}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }
`,rO=y(He)`
  ${tg}

  ${({$menuOpen:e})=>e&&A`
    ${Zu}{
      opacity: 1;
    }
  `}

  &:hover ${qr}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${je}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&A`
    color: var(--grey-12);

    ${qr},
    &:hover ${qr}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,iO=y.button`
  ${tg}

  ${({$menuOpen:e})=>e&&A`
    ${Zu}{
      opacity: 1;
    }

    ${I2}{
      opacity: 1;
      transition: opacity var(--speed-normal) var(--easing-primary-in-out) var(--speed-fast);
    }
  `}

  &:hover ${qr}{
    opacity: 1;
    background-color: var(--global-menu-icon-background-hover);

    ${je}{
      [stroke]{
        stroke: var(--inverse);
      }
    }
  }

  ${({$isActive:e})=>e&&A`
    ${qr},
    &:hover ${qr}{
      background-color: var(--global-menu-icon-background-active);
    }
  `}
`,zu=({hasSubmenu:e=!1,contextKey:a=-1,submenuOpen:i,menuOpen:o,title:c,href:u,icon:h,compact:p,isActive:m,isExternalLink:x,onClickCallback:b})=>{const v=s.jsxs(st.Fragment,{children:[s.jsx(qr,{$compact:p,children:s.jsx(we,{icon:h,color:m?"inverse":"dimmed",size:20})}),s.jsx(Zu,{$compact:p,children:c}),e?s.jsx(I2,{children:s.jsx(we,{icon:i?"Up":"Down",color:"dimmed"})}):null]});return e?s.jsx(iO,{$menuOpen:o,$isActive:m,onClick:()=>b&&b(a),children:v}):x?s.jsx(tO,{href:u,target:"_blank",children:s.jsxs(aO,{$menuOpen:o,children:[v,s.jsx(nO,{children:s.jsx(we,{icon:"ExternalLink",color:"dimmed",size:12})})]})}):s.jsx(rO,{$menuOpen:o,to:u||"#",$isActive:m,onClick:()=>b&&b(a),children:v})},oO=(e,a)=>{switch(a.type){case"SET_MENU":{const i=localStorage.getItem(window.location.hostname+"_isMenuOpen");let o=i==="true"||i===null&&!!a.data.defaultMenuOpen,c=i==="true"&&!!a.data.canAlwaysPin;const u=a.data.desktopSize==="xlarge"||!!a.data.canAlwaysPin;return a.data.desktopSize==="xxlarge"&&a.data.canAlwaysPin===!1&&(o=!0,c=!0),{...e,desktopSize:a.data.desktopSize,isMenuOpen:o,isMenuPinned:c,canPin:u}}case"SET_OPEN":return e.isMenuOpen===!0||e.desktopSize==="xxlarge"&&!e.canPin?e:{...e,isMenuOpen:!0};case"SET_CLOSE":return e.isMenuOpen===!1||e.desktopSize==="xxlarge"&&!e.canPin||e.isMenuPinned===!0?e:{...e,isMenuOpen:!1};case"TOGGLE_PIN":{if(!e.canPin)return e;let i=!0;return e.isMenuPinned?(localStorage.setItem(window.location.hostname+"_isMenuOpen","false"),i=!1):localStorage.setItem(window.location.hostname+"_isMenuOpen","true"),{...e,isMenuOpen:i,isMenuPinned:!e.isMenuPinned}}default:return console.error(`Action ${a.type} not registered.`),e}},lO={desktopSize:"large",isMenuPinned:!1,isMenuOpen:!1,canPin:!1},sO=(e,a)=>{const{activeScreen:i}=Z0(),[o,c]=f.useReducer(oO,lO),u=f.useCallback((x,b,v)=>{c({type:"SET_MENU",data:{defaultMenuOpen:x,desktopSize:v,canAlwaysPin:b}})},[]),h=f.useCallback(()=>{c({type:"SET_OPEN"})},[]),p=f.useCallback(()=>{c({type:"SET_CLOSE"})},[]),m=f.useCallback(()=>{c({type:"TOGGLE_PIN"})},[]);return f.useLayoutEffect(()=>{u(e,a,i)},[i,e,a,u]),{menuState:o,setMenuOpen:h,setMenuClose:p,togglePinned:m}},cO=y.ul`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`,uO=y.div`
  display: block;
  height: 40px;
  margin-left: 40px;
`,dO=y.div`
  overflow: hidden;
`,fO=y.span`
  display: block;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
`,G2=y(He)`
  ${at};
  display: block;
`,hO=y.div`
  margin-left: 15px;
`,q2=y.a`
  ${at};
  display: flex;
  align-items: center;
`,rx=y.li`
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

  ${G2}, ${q2}{
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    ${({$isActive:e})=>A`

      &:hover {
        color: var(--grey-12);
      }

      ${e&&A`
        &, &:hover {
          color: var(--grey-11);
          font-weight: 600;
        }
      `}

    `};

  }
`,g0=y.div`
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

`,gO=y.div`
  min-height: ${({$mobileMenu:e})=>e?"30px":"70px"};
  width: inherit;

  ${g0}{
    display: grid;
    grid-template-rows: 0fr;
  };

  ${({$open:e})=>e&&A`
    ${g0}{
      grid-template-rows: 1fr;

      transition:
        grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
        opacity var(--speed-fast) var(--easing-primary-in-out);

      opacity: 1;
    }
  `};
`,P2=({item:e,menuOpen:a,submenuOpen:i,contextKey:o,topLevelPath:c,mobileMenu:u=!1,onClickCallback:h})=>{const{icon:p,title:m,href:x,submenu:b,isExternalLink:v}=e,k=c===x,C=f.useRef(null),S=pO(b,h)||[],E=S.length>0;return s.jsxs(gO,{$open:i,$mobileMenu:u,children:[s.jsx(zu,{title:m,href:x,isActive:k,icon:p,hasSubmenu:E,isExternalLink:v,submenuOpen:i,menuOpen:a,onClickCallback:h,contextKey:o}),E?s.jsx(g0,{ref:C,children:s.jsx(dO,{children:S})}):null]})},pO=(e,a)=>{if(!e)return;const i=[],o=[];return i.push([]),e.forEach((c,u)=>{const{title:h,href:p,isExternalLink:m}=c;p?m?i[i.length-1].push(s.jsx(rx,{$isActive:!1,children:s.jsxs(q2,{href:p,target:"_blank",children:[h,s.jsx(hO,{children:s.jsx(we,{icon:"ExternalLink",color:"dimmed",size:10})})]})},u)):i[i.length-1].push(s.jsx(rx,{$isActive:!1,children:s.jsx(G2,{to:p,onClick:()=>a&&a(-1),children:h})},u)):(i[i.length-1].length>1&&i.push([]),i[i.length-1].push(s.jsx(uO,{children:s.jsx(fO,{children:h})},u)))}),i.forEach((c,u)=>{o.push(s.jsx(cO,{children:c},u))}),o},mO=y(He)`
  height: 50px;
  margin: 0 20px 55px 15px;
  display: flex;

  object {
    pointer-events: none;
  }
`,vO=y.div`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`,F2=y.div`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`,xO=y.object``,yO=y.object`
  max-width: 180px;
`,bO=y.div``,wO=y.div`
  background: var(--global-element-background);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`,ix=y.div`
  min-height: 70px;
`,SO=y.div`
  position: relative;
  height: 100%;
  ${({$isPinned:e})=>A`
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
  `};
`,CO=y.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${({$open:e,$desktopSize:a})=>A`
    background-color: var(--global-element-background);
    box-shadow: 0px 0px 7px 0px var(--primary-a2);
    width: ${e?"var(--global-menu-width-open)":"var(--global-menu-width-closed)"};
    border-right: 1px solid var(--dividing-line);

    ${a==="xxlarge"?"":A`
      transition: width var(--speed-normal) var(--easing-primary-in);
    `};

    ${F2}{
      transition: opacity var(--speed-normal) var(--easing-primary-in-out);
      opacity: ${e?1:0};
    }
  `}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`,kO=y.div`
  width: var(--global-menu-width-open);
  display: flex;
  flex-direction: column;
  height: 100%;
`,EO=({content:e,home:a="/",logoMark:i,logoText:o,keepOpenText:c="Keep Open",autoHideText:u="Auto-Hide",supportUrl:h,supportText:p="Help & Support",defaultMenuOpen:m=!0,canAlwaysPin:x=!1,onMenuToggle:b=()=>{}})=>{const{menuState:v,setMenuOpen:k,setMenuClose:C,togglePinned:S}=sO(m,x),[E,T]=f.useState(0),M=ka(),z=f.useCallback(U=>{U.pointerType!=="touch"&&k()},[k]),_=f.useCallback(()=>{C()},[C]),B=f.useCallback(U=>{U.pointerType!=="touch"&&S()},[S]);f.useEffect(()=>{b(v.isMenuOpen)},[v.isMenuOpen,b]);const N=f.useCallback(U=>{U!==-1&&T(E!==U?U:-1)},[T,E]);return s.jsx(SO,{$isPinned:v.isMenuPinned,children:s.jsx(s.Fragment,{children:Ss.createPortal(s.jsx(CO,{$open:v.isMenuOpen,$desktopSize:v.desktopSize,onPointerEnter:v.isMenuPinned?()=>{}:z,onTouchStart:()=>console.debug("touch"),onMouseLeave:v.isMenuPinned?()=>{}:_,children:s.jsxs(kO,{children:[s.jsxs(mO,{to:a,children:[s.jsx(vO,{children:i?s.jsx(xO,{type:"image/svg+xml",data:i}):s.jsx(a2,{})}),s.jsx(F2,{children:o?s.jsx(yO,{type:"image/svg+xml",data:o}):s.jsx(jk,{})})]}),s.jsx(bO,{children:e.items.map((U,L)=>s.jsx(P2,{topLevelPath:i2(M.pathname),contextKey:L,menuOpen:v.isMenuOpen,submenuOpen:L===E&&v.isMenuOpen,onClickCallback:N,item:U,focusedContext:E},L))}),s.jsxs(wO,{children:[h&&s.jsx(ix,{children:s.jsx(zu,{compact:!0,isActive:!1,icon:"Question",title:p,href:h,menuOpen:v.isMenuOpen})}),v.canPin?s.jsx(ix,{children:s.jsx(zu,{compact:!0,isActive:!1,icon:v.isMenuOpen&&v.isMenuPinned?"Left":"Menu",title:v.isMenuPinned?c:u,onClickCallback:B,menuOpen:v.isMenuOpen})}):null]})]})}),document.body)})})},jO=y.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,TO=y.div`
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
`,MO=y.div`
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
`,LO=y.div`
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
`,OO=y.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
`,W2=y.div`
  cursor: pointer;
`,$O=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,zO=y.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${W2}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,AO=y.pre`
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
`,RO=y.div`
`,DO=({item:e,onUserDrawerMetaClick:a,copySuccessMessage:i,includeCopyTitle:o})=>{const{icon:c,title:u,subTitle:h,notes:p,hasCopyIcon:m}=e,{copyToClipboard:x}=V0(),[b,v]=f.useState(!1),[k,C]=f.useState("dimmed"),S=f.useCallback((M,z,_)=>{let B;o?B=(M||"")+`
`+(z||"")+`
`+(_||""):B=(z||"")+`
`+(_||""),x(B),v(!0),setTimeout(()=>{v(!1)},1500)},[o,x]),E=f.useCallback(()=>{C("mono")},[]),T=f.useCallback(()=>{C("dimmed")},[]);return s.jsx(f.Fragment,{children:u!==""&&s.jsx(W2,{onClick:a,children:s.jsxs(jO,{children:[s.jsxs($O,{children:[s.jsxs(OO,{children:[s.jsx(we,{icon:c,size:10,color:"dimmed"}),s.jsx(TO,{title:u,children:u})]}),s.jsxs(RO,{children:[b&&s.jsx(AO,{children:i!==""?i:"Copied!"}),m?s.jsx(zO,{onClick:()=>S(u,h,p),onMouseEnter:E,onMouseLeave:T,children:s.jsx(we,{icon:"Copy",size:12,color:k})}):null]})]}),h!==""?s.jsx(MO,{title:h,children:h}):null,p!==""?s.jsx(LO,{title:p,children:p}):null]})})})},_O=y.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
  align-items: center;
  cursor: pointer;
  svg {
    margin-top: 7px;
  }
`,NO=y.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,HO=y.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,BO=y.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,ox=({icon:e="Settings",title:a,subTitle:i,onClickCallback:o=()=>{}})=>s.jsxs(_O,{onClick:o,children:[s.jsx(we,{icon:e,size:18,color:"dimmed"}),s.jsxs(NO,{children:[s.jsx(HO,{children:a}),s.jsx(BO,{children:i})]})]}),UO=y.div``,IO=y.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${fn.medium} {
    position: static;
    bottom: 0;
  }
`,lx=y.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,GO=y.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,qO=y.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,PO=y.div`
    padding: 0 20px;
`,sx=y.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,cx=y.li`
  padding: 10px 0;
`,FO=y.div`
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
`,ux=y(He)`
  ${at};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&A`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,WO=y.div`
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
`,VO=y.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,YO=y.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({icon:e})=>e!==""?"136px;":"164px;"};
  color: var(--grey-11);
  opacity: 0.5;
`,ZO=e=>{if(e)return document.documentElement.setAttribute("lang",e),e;const a=navigator.language.split("-")[0],i=document.documentElement.lang;return i||(document.documentElement.setAttribute("lang",a),a)},V2=({hasLanguage:e=!1,selectedLanguageText:a="",languageOptionsText:i="LANGUAGE / 言語",selectedLangAttribute:o,hasLogout:c=!0,logoutLink:u="/logout",logoutText:h="Logout",hasCurrentUser:p=!0,currentUserText:m="Current User",accountOptionText:x="Account Options",userSubmenu:b=[],userDrawerBespoke:v,loggedInUser:k,hasSwitchTheme:C=!1,isLightMode:S=!0,switchThemeText:E="SWITCH THEME",selectedThemeText:T="",onLogout:M=()=>{},onLanguageToggle:z=()=>{},closeOnClick:_,onThemeToggle:B=()=>{},userDrawerFooter:N={icon:"",title:""},copySuccessMessage:U,includeCopyTitle:L,onUserDrawerMetaClick:R=()=>{},userDrawerMeta:F,hasUserDrawerMeta:J,hasUserDrawerFooter:q})=>{const{icon:ee,title:re}=N,Q=f.useCallback(async D=>{D.preventDefault(),await M(),window.location.assign(u),_&&_()},[_,u,M]),ne=f.useCallback(()=>{_&&_()},[_]);return f.useEffect(()=>{ZO(o)},[o]),s.jsxs(f.Fragment,{children:[s.jsx(UO,{children:s.jsxs(s.Fragment,{children:[p?s.jsxs(GO,{children:[s.jsx(lx,{children:m}),k]}):null,J?s.jsx(VO,{children:F?.map((D,G)=>s.jsx(DO,{onUserDrawerMetaClick:R,item:D,includeCopyTitle:L,copySuccessMessage:U},G))}):null,b.length>0?s.jsxs(qO,{children:[s.jsx(lx,{children:x}),s.jsx(sx,{children:b.map(({text:D,href:G},ae)=>s.jsx(cx,{children:s.jsx(ux,{to:G,onClick:ne,children:D})},ae))})]}):null,v||null,c?s.jsx(PO,{children:s.jsx(sx,{children:s.jsx(cx,{children:s.jsx(ux,{onClick:Q,to:u,children:h})})})}):null]})}),s.jsxs(IO,{children:[C&&s.jsx(ox,{icon:S?"LightMode":"DarkMode",title:E,subTitle:T,onClickCallback:B}),e&&s.jsx(ox,{icon:"Language",title:i,subTitle:a,onClickCallback:z}),q?s.jsxs(WO,{title:re,icon:ee,children:[ee?s.jsx(FO,{children:s.jsx(we,{icon:ee,size:14,color:"dimmed"})}):null,s.jsx(YO,{icon:ee,children:re})]}):null]})]})},XO=y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,QO=y.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,KO=y.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,JO=y.div`
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
`,e$=y.div`
  margin-left: 20px;
`,t$=y.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,n$=y.div`
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
`,a$=y.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,r$=({imgUrl:e,title:a,message:i,time:o})=>s.jsxs(XO,{children:[s.jsx(QO,{children:e?s.jsx(JO,{$image:e}):s.jsx(KO,{})}),s.jsxs(e$,{children:[s.jsx(t$,{children:a}),s.jsx(n$,{children:i}),s.jsx(a$,{children:o})]})]}),dx=y.div`
  display: flex;
  flex-direction: column;
`,Lh=y.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,i$=y.div`
  border-bottom: var(--dividing-line) 1px solid;
`,fx=(e,a)=>e.map((i,o)=>s.jsx(i$,{children:s.jsx(r$,{...i})},`alert-${a}-${o}`)),Y2=({read:e,unread:a,noNotificationsText:i="No new notifications",readNotificationsText:o="New",unreadNotificationsText:c="Read"})=>e.length===0&&a.length===0?s.jsx(dx,{children:s.jsx(Lh,{children:i})}):s.jsxs(dx,{children:[a&&s.jsxs(f.Fragment,{children:[s.jsx(Lh,{children:o}),fx(a,"unread")]}),e&&s.jsxs(f.Fragment,{children:[s.jsx(Lh,{children:c}),fx(e,"read")]})]}),Z2=A`
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

`,o$=y.div`
  ${Z2};

  ${({$themeColor:e})=>e?A`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:A`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,X2=y.span`
  display: inline-block;
`,Q2=y.span``,K2=A`
  ${Z2};
  text-decoration: none;

  ${({$themeColor:e})=>e?A`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:A`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({$themeColor:e})=>e?A`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:A`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,hx=y.div`
  a {
    ${K2};
  }
`,l$=y.div`
  button {
    ${at};
    ${K2};
  }
`,s$=y.div`
  ${({$ready:e,$minWidth:a})=>A`

    visibility: ${e?"visible":"hidden"};
    opacity: ${e?"1":"0"};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${X2}, ${Q2}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${a}px;`};
    }
  `};
`,c$=({text:e,color:a,linkHref:i,linkTo:o,linkText:c,onClick:u})=>{const h=f.useRef(null),p=f.useRef(null),[m,x]=f.useState(!1),[b,v]=f.useState(!1),[k,C]=f.useState(0);f.useEffect(()=>{x(!1);const z=setTimeout(()=>{const _=h.current?.getBoundingClientRect().width??0,B=p.current?.getBoundingClientRect().width??0,N=_>=B?_:B;C(Math.ceil(N)),x(!0)},100);return()=>clearTimeout(z)},[e,c]);const S=f.useMemo(()=>s.jsx(X2,{ref:h,children:e}),[e]),E=f.useMemo(()=>u||o||i?s.jsx(Q2,{ref:p,children:c||e}):null,[u,o,i,c,e]),T=f.useMemo(()=>m?s.jsx(f.Fragment,{children:b?E:S}):s.jsxs(f.Fragment,{children:[S,E]}),[m,b,S,E]),M=f.useMemo(()=>u?s.jsx(l$,{$themeColor:a,children:s.jsx("button",{onClick:u,type:"button",children:T})}):o?s.jsx(hx,{$themeColor:a,children:s.jsx(He,{to:o,children:T})}):i?s.jsx(hx,{$themeColor:a,children:s.jsx("a",{href:i,children:T})}):s.jsx(o$,{$themeColor:a,children:S}),[u,o,i,a,T,S]);return s.jsx(s$,{$ready:m,$minWidth:k,onPointerEnter:()=>m&&v(!0),onPointerLeave:()=>m&&v(!1),children:M})},u$=y.div`
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
`,d$=y.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,f$=y.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,h$=y.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,g$=y.input`
  ${Ms};
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
`,p$=y.div`
  height: inherit;
  display: flex;
  gap: 0;
`,m$=Sa`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,Oh=y.button.attrs({type:"button"})`
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

  ${({$isActive:e})=>e&&A`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${m$} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,v$=y.div``,$h=y.div`
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

  ${({$isOpen:e})=>e&&A`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,x$=y.div`
    overflow-y: scroll;
    margin-right: -17px;
`,J2=({hasNotifications:e=!1,hasLanguage:a=!1,selectedLanguageText:i="",languageOptionsText:o,selectedLangAttribute:c,hasLogout:u=!0,logoutLink:h="/logout",logoutText:p="Logout",hasSearch:m=!1,hasCurrentUser:x=!0,currentUserText:b="Current User",accountOptionText:v="Account Options",searchPlaceholder:k="Search for devices, analysis tasks, etc.",userSubmenu:C=[],userDrawerBespoke:S,loggedInUser:E,notificationsHistory:T,customDrawer:M,hasSwitchTheme:z=!1,isLightMode:_=!0,switchThemeText:B="SWITCH THEME",selectedThemeText:N="",onLogout:U=()=>{},onLanguageToggle:L=()=>{},onThemeToggle:R=()=>{},userDrawerFooter:F,userDrawerMeta:J,onUserDrawerMetaClick:q=()=>{},hasUserDrawerMeta:ee,copySuccessMessage:re,includeCopyTitle:Q,hasUserDrawerFooter:ne,badge:D})=>{const[G,ae]=f.useState(null),oe=de=>{ae(O=>O===de?null:de)};return s.jsx(u$,{children:s.jsxs(s.Fragment,{children:[m?s.jsxs(f$,{children:[s.jsx(h$,{children:s.jsx(we,{icon:"Search",size:16,color:"grey-6"})}),s.jsx(g$,{placeholder:k})]}):s.jsx("div",{}),s.jsxs(d$,{children:[D&&s.jsx(c$,{...D}),s.jsxs(p$,{children:[M&&s.jsx(Oh,{$isActive:G==="custom",onClick:()=>oe("custom"),children:s.jsx(E2,{...M})}),e&&s.jsx(Oh,{$isActive:G==="notifications",onClick:()=>oe("notifications"),children:s.jsx(we,{icon:"Notifications",size:20,color:"dimmed"})}),s.jsx(Oh,{$isActive:G==="user",onClick:()=>oe("user"),children:s.jsx(we,{icon:"UserProfile",size:20,color:"dimmed"})})]})]}),Ss.createPortal(s.jsxs(v$,{children:[s.jsx($h,{$isOpen:G==="user",children:s.jsx(V2,{hasLanguage:a,hasLogout:u,logoutLink:h,logoutText:p,hasCurrentUser:x,currentUserText:b,accountOptionText:v,userSubmenu:C,userDrawerBespoke:S,loggedInUser:E,onLogout:U,onLanguageToggle:L,selectedLanguageText:i,languageOptionsText:o,selectedLangAttribute:c,hasSwitchTheme:z,isLightMode:_,switchThemeText:B,selectedThemeText:N,onThemeToggle:R,onUserDrawerMetaClick:q,userDrawerFooter:F,userDrawerMeta:J,hasUserDrawerMeta:ee,copySuccessMessage:re,includeCopyTitle:Q,hasUserDrawerFooter:ne})}),e?s.jsx($h,{$isOpen:G==="notifications",$baseWidth:"300px",children:s.jsx(x$,{children:T?s.jsx(Y2,{...T}):null})}):null,M&&s.jsx($h,{$isOpen:G==="custom",$baseWidth:M.width?M.width:"200px",children:s.jsx(s.Fragment,{children:M.customComponent})})]}),document.body)]})})},e5=y.div`
  display: flex;
  flex-direction: row;
`,ng=({children:e,defaultTabId:a})=>{const{setSelected:i}=f.useContext(ja);return f.useEffect(()=>{i(a)},[a,i]),s.jsx(e5,{children:s.jsx(s.Fragment,{children:e})})},y$=y.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`,b$=y.label`
  height: 40px;
  ${({theme:e})=>A`
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
`,ds=({children:e,tabFor:a,onClick:i,...o})=>{const{selected:c,setSelected:u}=f.useContext(ja),h=f.useCallback(p=>{i&&i(p),u(a)},[i,u,a]);return s.jsx(y$,{...o,onClick:h,children:s.jsx(b$,{$active:c===a,children:s.jsx(s.Fragment,{children:e})})})},w$=y.div`
`,ar=({children:e,tabId:a,...i})=>{const{selected:o}=f.useContext(ja);return o===a?s.jsx(w$,{...i,children:s.jsx(s.Fragment,{children:e})}):null},S$=y.button`
  ${at}
  flex-basis: auto;
  flex-grow: 1;
`,C$=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({theme:e})=>A`
    transition: border var(--speed-normal) var(--easing-primary-in-out);
    border-bottom: 5px solid ${e.colors.menu.indicator};

    ${je} {
      [stroke]{
        stroke: var(--dimmed);
      }
    }

    &:hover {
      border-bottom-color: ${e.colors.menu.hover};
      ${je} {
        [stroke]{
          stroke: ${e.colors.menu.hover};
        }
      }
    }
  `};

  ${({$isActive:e,theme:a})=>e&&A`
    &, &:hover {
      border-bottom-color: ${a.colors.menu.active};
      ${je} {
        [stroke]{
          stroke: ${a.colors.menu.active};
        }
      }
    }
  `}
`,ou=({tabFor:e,icon:a,closeId:i,counter:o,status:c,customComponent:u,...h})=>{const{selected:p,setSelected:m}=f.useContext(ja),x=f.useCallback(b=>{m(p===b?i:b)},[i,p,m]);return s.jsx(S$,{...h,onClick:()=>x(e),children:s.jsx(C$,{$isActive:p===e,children:s.jsx(E2,{icon:a,status:c,counter:o})})})};y.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;

  ${({$active:e})=>e?A`
    border-bottom: 3px solid var(--primary-11);
    `:A`
    border-bottom: 3px solid transparent;
  `};
  ${je} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`;y.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({$active:e})=>e?"var(--primary-11)":"var(--grey-11)"};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;y.div`
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
`;y.div`
  margin-left: 12px;
  margin-right: 20px;
`;y.div``;y.div`
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
`;const k$=y.button`
  ${at}
  
  font-family: var(--font-ui);
  background-color: var(--global-element-background);
  border-top: 1px solid var(--dividing-line);
  font-weight: 400;
  color: var(--grey-10);
  
  height: ${B2}px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  outline: none;

  width: 100%;
  text-align: center;
  white-space: nowrap;
  padding: 0 40px;

`,E$=y.div`
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
`,j$=y.div`
  text-transform: uppercase;
`,T$=({closeId:e,closeText:a="CLOSE MENU",children:i,formAction:o,...c})=>{const{setSelected:u}=f.useContext(ja);return s.jsxs(k$,{onClick:()=>u(e),...c,children:[s.jsx(E$,{children:s.jsx(we,{icon:"CloseCompact",color:"dimmed",size:16})}),s.jsx(j$,{children:a})]})},M$=y.div`
  position: relative;
  min-height: calc(100vh - ${U2+B2}px);
  width: 100%;
  overflow-y: scroll;
`,L$=y.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,O$=({closeId:e,children:a})=>{const{selected:i}=f.useContext(ja);return i===e?null:s.jsx(M$,{children:s.jsx(L$,{children:s.jsx(s.Fragment,{children:a})})})},$$=y.div``,gx=y.div`
  padding: 14px 0;
  border-bottom: 1px solid var(--dividing-line);
`,z$=({content:e,supportUrl:a,supportText:i="Help & Support",closeId:o})=>{const[c,u]=f.useState(0),h=ka(),{setSelected:p}=f.useContext(ja),m=f.useCallback(b=>{(b===-1||!e.items[b].submenu)&&p(o),b!==-1&&u(c!==b?b:-1)},[o,e.items,c,p]),x=f.useCallback(()=>{p(o)},[o,p]);return s.jsxs($$,{children:[e.items.map((b,v)=>s.jsx(gx,{"data-key":v,children:s.jsx(P2,{mobileMenu:!0,topLevelPath:i2(h.pathname),contextKey:v,menuOpen:!0,submenuOpen:v===c,onClickCallback:m,item:b,focusedContext:c})},v)),a&&s.jsx(gx,{children:s.jsx(zu,{compact:!0,isActive:!1,icon:"Question",title:i,href:a,menuOpen:!0,onClickCallback:x})})]})},A$=y(He)`
  ${at};
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`,R$=y.div`
  margin-right: 15px;
`,D$=y.object``,_$=({home:e="/",logoMark:a,closeId:i})=>{const{setSelected:o}=f.useContext(ja);return s.jsx(A$,{to:e,onClick:()=>o(i),children:s.jsx(R$,{children:a?s.jsx(D$,{type:"image/svg+xml",data:a}):s.jsx(a2,{})})})},N$=y.div`
  background: var(--global-element-background);

  z-index: 100;
  display: flex;
  flex-direction: column;
`,H$=({closeId:e,hasLanguage:a,hasLogout:i,logoutLink:o,hasCurrentUser:c,userSubmenu:u,userDrawerBespoke:h,loggedInUser:p,onLogout:m,onLanguageToggle:x,...b})=>{const{setSelected:v}=f.useContext(ja),k=f.useCallback(()=>{v(e)},[e,v]);return s.jsx(N$,{children:s.jsx(V2,{hasLanguage:a,hasLogout:i,logoutLink:o,hasCurrentUser:c,userSubmenu:u,userDrawerBespoke:h,loggedInUser:p,onLogout:m,onLanguageToggle:x,...b,closeOnClick:k})})},ma="closeMenu",px="notifications",mx="user",vx="menu",xx="custom",B$=y.nav`
  background-color: var(--global-element-background);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`,U$=y.div`
  display: flex;
  flex-direction: row;
  height: ${U2}px;
  border-bottom: var(--dividing-line) 1px solid;

  ${e5} {
    flex-basis: 0;
    flex-grow: 3;
  }
`,I$=({content:e,home:a,logoMark:i,supportUrl:o,defaultMenuOpen:c=!0,closeText:u,hasLanguage:h,hasLogout:p,logoutLink:m,hasCurrentUser:x,hasNotifications:b,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,notificationsHistory:S,customDrawer:E,supportText:T,onLogout:M,onLanguageToggle:z,..._})=>s.jsx(B$,{children:s.jsxs(eg,{children:[s.jsxs(U$,{children:[s.jsx(_$,{home:a,logoMark:i,closeId:ma}),s.jsxs(ng,{defaultTabId:ma,children:[E&&s.jsx(ou,{...E,tabFor:xx,closeId:ma}),b?s.jsx(ou,{tabFor:px,icon:"Notifications",closeId:ma}):null,s.jsx(ou,{tabFor:mx,icon:"UserProfile",closeId:ma}),s.jsx(ou,{tabFor:vx,icon:"Menu",closeId:ma})]})]}),s.jsxs(O$,{closeId:ma,children:[s.jsx(ar,{tabId:xx,children:E&&E.customComponent}),s.jsx(ar,{tabId:px,children:S&&b?s.jsx(Y2,{...S}):null}),s.jsx(ar,{tabId:mx,children:s.jsx(H$,{hasLanguage:h,hasLogout:p,logoutLink:m,hasCurrentUser:x,userSubmenu:v,userDrawerBespoke:k,loggedInUser:C,onLogout:M,onLanguageToggle:z,..._,closeId:ma})}),s.jsx(ar,{tabId:vx,children:s.jsx(z$,{content:e,supportUrl:o,supportText:T,defaultMenuOpen:c,closeId:ma})}),s.jsx(T$,{closeText:u,closeId:ma})]})]})}),ag=({content:e,home:a,openWidth:i,logoMark:o,logoText:c,supportUrl:u,defaultMenuOpen:h,canAlwaysPin:p,paddingOverride:m,maxWidth:x,legacyLayout:b,children:v,keepOpenText:k,autoHideText:C,supportText:S,onMenuToggle:E,...T})=>{const{isLarge:M}=Z0();return M?s.jsxs(Os,{children:[s.jsx(EO,{content:e,home:a,openWidth:i,logoMark:o,logoText:c,supportUrl:u,defaultMenuOpen:h,canAlwaysPin:p,onMenuToggle:E,keepOpenText:k,autoHideText:C,supportText:S}),s.jsxs(eO,{children:[s.jsx(J2,{...T}),s.jsx(ax,{$maxWidth:x,$paddingOverride:m,$legacyLayout:b,children:s.jsx(s.Fragment,{children:v})})]})]}):s.jsxs(JL,{children:[s.jsx(I$,{content:e,home:a,logoMark:o,supportUrl:u,defaultMenuOpen:h,supportText:S,...T}),s.jsx(ax,{children:s.jsx(s.Fragment,{children:v})})]})},G$=y.div`
  width: 286px;
  border-right: 1px solid var(--grey-a7);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,q$=y.div`
  height: 84px;
  color: var(--grey-11);
  border-bottom: 1px solid var(--grey-a7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`,P$=y.div`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`,F$=y.div`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`,rr=y.div`
  position: relative;
  border-bottom: 1px solid var(--grey-a7);
  padding: 22px 20px 21px 20px;
`,W$=y.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
  margin-bottom: 18px;
`;y.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`;const V$=y(He)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: var(--grey-10);
`;y(He)`
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
`;const Xu=({logoTextTop:e,logoTextBottom:a})=>s.jsxs(q$,{children:[s.jsx(P$,{children:e}),s.jsxs(F$,{children:["•",a,"•"]})]}),Qu=({children:e,...a})=>s.jsx(G$,{...a,children:s.jsx(s.Fragment,{children:e})}),Nt=y.div`
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
`,Y$=y.div`
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
  
  ${Nt}{
    margin: 0;
  }
`,Z$=y.div`
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
`,hn=({children:e})=>s.jsxs(Y$,{children:[s.jsx(Z$,{children:s.jsx(He,{to:"/",children:s.jsx(we,{size:12,icon:"Home"})})}),s.jsx(Nt,{children:e})]}),X$=y.div`
    margin: 100px 200px;
`,Q$=()=>s.jsxs(X$,{children:[s.jsx(hn,{children:"FormPage.tsx"}),s.jsx(wa,{title:"Input State Examples",areaTitle:"Forms",areaHref:"/"}),s.jsxs(W0,{children:[s.jsx(Et,{name:"my_field",label:"Basic",placeholder:"Placeholder...",fieldState:"default",showFeedback:!0}),s.jsx(Et,{name:"my_field",label:"Required",placeholder:"",fieldState:"required",showFeedback:!0}),s.jsx(Et,{name:"my_field",label:"Loading",placeholder:"",fieldState:"processing",showFeedback:!0}),s.jsx(Et,{name:"my_field",label:"Valid",placeholder:"",fieldState:"valid",showFeedback:!0}),s.jsx(Et,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0}),s.jsx(Et,{name:"my_field",label:"Error",placeholder:"",fieldState:"invalid",showFeedback:!0,feedbackMessage:"Error: Oh noes!!!"}),s.jsx(F0,{name:"my_field",label:"My Field",placeholder:"",fieldState:"default",showFeedback:!0})]})]}),K$=()=>{const[e,a]=f.useReducer(K0,[]),[i]=f.useState(""),[o,c]=f.useState({showSetIndex:!0,pointIndexOffset:1,showPointHandle:!0,showPointLabel:!0,showLabelShadow:!0,setIndexOffset:1,showMoveHandle:!0,fixedImgDimensions:{x:2310,y:1535},boundaryOffset:0,showDirectionMark:!0,areaFillColor:"",areaTransparencyLevel:0}),u=f.useCallback(async()=>{a({type:"LOAD",state:[{name:"Line 1",points:[{x:600,y:200},{x:1100,y:450}],readOnly:!1,styling:"primary"}]})},[]),h=f.useCallback(async()=>{a({type:"LOAD",state:[{name:"UP",points:[{x:1048,y:456},{x:1613,y:584},{x:1322,y:985},{x:922,y:785}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40},{name:"DOWN",points:[{x:841,y:700},{x:256,y:576}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"}]})},[]),p=f.useCallback(({target:{value:E}})=>{a({type:"RENAME_SET",index:0,data:{name:E}})},[]),m=f.useCallback((E,{target:{value:T}})=>{a({type:"RENAME_SET",index:E,data:{name:T}})},[]),x=f.useCallback((E,{target:{value:T}})=>{a({type:"UPDATE_FILL_COLOR",index:E,data:{areaFillColor:T}})},[]),b=f.useCallback((E,{target:{value:T}})=>{a({type:"UPDATE_TRANSPARENCY_LEVEL",index:E,data:{areaTransparencyLevel:parseInt(T)}})},[]),v=f.useCallback((E=0)=>()=>{a({type:"UPDATE_SET_OPTIONS",index:E,data:{readOnly:!e[0]?.readOnly}})},[e]),k=f.useCallback(E=>{const T=e.findIndex(M=>M.showPointHandle);a({type:"UPDATE_SET_OPTIONS",index:T,data:{showPointHandle:!1,showMoveHandle:!1}}),a({type:"UPDATE_SET_OPTIONS",index:E,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]),C=f.useCallback(E=>()=>{c({...o,[E]:!o[E]})},[o]);f.useEffect(()=>{o.showDirectionMark?h():u()},[u,h,o]);const S=f.useCallback(({target:{value:E}})=>{c({...o,boundaryOffset:parseInt(E)})},[o]);return s.jsxs(Os,{children:[s.jsx(hn,{children:"LinePage.tsx"}),s.jsxs(Qu,{children:[s.jsx(Xu,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),s.jsx(rr,{style:{flex:"1"},children:s.jsx("pre",{children:JSON.stringify(e,null,2)})}),s.jsxs(rr,{children:[s.jsx(Bt,{labelText:"Show Point Handle",htmlFor:"showPointHandle",children:s.jsx("input",{id:"showPointHandle",type:"checkbox",name:"showPointHandle",checked:o.showPointHandle,onChange:C("showPointHandle")})}),s.jsx(Bt,{labelText:"Show Move Handle",htmlFor:"showMoveHandle",children:s.jsx("input",{id:"showMoveHandle",type:"checkbox",name:"showMoveHandle",checked:o.showMoveHandle,onChange:C("showMoveHandle")})}),s.jsx(Bt,{labelText:"Show Point",htmlFor:"showPoint",children:s.jsx("input",{id:"showPoint",type:"checkbox",name:"showPoint",checked:o.showPoint,onChange:C("showPoint")})}),s.jsx(Bt,{labelText:"Show Direction Mark",htmlFor:"showDirectionMark",children:s.jsx("input",{id:"showDirectionMark",type:"checkbox",name:"showDirectionMark",checked:o.showDirectionMark,onChange:C("showDirectionMark")})}),s.jsx(Bt,{labelText:"Show Label Shadow",htmlFor:"showLabelShadow",children:s.jsx("input",{id:"showLabelShadow",type:"checkbox",name:"showLabelShadow",checked:o.showLabelShadow,onChange:C("showLabelShadow")})})]}),s.jsxs(rr,{children:[o.showDirectionMark?s.jsxs(s.Fragment,{children:[s.jsx(Et,{id:"renameLine1",label:"Rename UP Line",fieldState:"default",name:"renameLine1",value:e[0]?.name||"",onChange:E=>m(0,E)}),s.jsx(Et,{id:"renameLine2",label:"Rename DOWN Line",fieldState:"default",name:"renameLine2",value:e[1]?.name||"",onChange:E=>m(1,E)})]}):s.jsx(Et,{id:"rename",label:"Rename Line",fieldState:"default",name:"rename",value:e[0]?.name||"",onChange:p}),s.jsx(Bt,{labelText:"Boundary Offset",htmlFor:"boundaryOffset",children:s.jsx(q0,{id:"boundaryOffset",type:"number",name:"boundaryOffset",min:0,value:o.boundaryOffset,onChange:S})}),s.jsx(Et,{id:"fillColor",label:"Area Fill Color",fieldState:"default",name:"fillColor",value:e[0]?.areaFillColor||"",onChange:E=>x(0,E)}),s.jsx(Et,{id:"transparencyLevel",label:"Area Tranparency Level",fieldState:"default",name:"transparencyLevel",value:e[0]?.areaTransparencyLevel||"",onChange:E=>b(0,E)})]}),s.jsx(rr,{children:s.jsx(nt,{design:"secondary",onClick:v(),children:"Toggle Read Only"})})]}),s.jsxs($s,{$padBottom:!1,children:[i&&s.jsx("div",{children:i}),s.jsx(Ni.Provider,{value:{state:e,dispatch:a},children:s.jsx(AT,{options:o,onLineClick:k,src:"/scorer-ui-kit/images/line-ui-railyard.jpg"})})]})]})},yx=y.div`
  margin-bottom: 15px;
`,J$=y.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,ez=()=>{const[e,a]=f.useReducer(K0,[]),[i]=f.useState(""),[o,c]=f.useState("localhost/wsapp"),[u,h]=f.useState(""),[p,m]=f.useState(!1),[x,b]=f.useState(!1),[v,k]=f.useState(400),[C,S]=f.useState(!1),{createMediaModal:E}=X0(),[T,M]=f.useState({loop:!0,autoPlay:!0}),z={showSetIndex:!0,showLabelShadow:!0,setIndexOffset:1,showDirectionMark:p},_=f.useCallback(async()=>{a({type:"LOAD",state:[{name:"Line 1",points:[{x:1407,y:869},{x:2293,y:531}],showPointHandle:!0,showMoveHandle:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:1426,y:254},{x:2260,y:283}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"secondary"},{name:"Yikes!",points:[{x:500,y:500},{x:1e3,y:1e3}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"danger"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),B=f.useCallback(async()=>{},[]);f.useEffect(()=>{_()},[_]);const N=f.useCallback(()=>{o&&h(o)},[o]),U=f.useCallback(q=>{m(q)},[]),L=f.useCallback(q=>{S(q)},[]),R=f.useCallback(()=>{M({loop:!0,autoPlay:!0})},[]),F=f.useCallback(()=>{M({loop:!1,autoPlay:!1,muted:!0}),E({mediaType:"video",src:`ws://${u}/`,dismissCallback:R})},[E,R,u]),J=f.useCallback(q=>{const ee=e.findIndex(re=>re.showPointHandle);a({type:"UPDATE_SET_OPTIONS",index:ee,data:{showPointHandle:!1,showMoveHandle:!1}}),a({type:"UPDATE_SET_OPTIONS",index:q,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return s.jsxs(Os,{children:[s.jsx(hn,{children:"LineRTCPage.tsx"}),s.jsxs(Qu,{children:[s.jsx(Xu,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),s.jsx(rr,{style:{flex:"1"},children:s.jsx("pre",{children:JSON.stringify(e,null,2)})}),s.jsxs(rr,{children:[s.jsx(yx,{children:s.jsx(Po,{checked:p,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:U,rightTheme:"on",state:"default"})}),s.jsx(yx,{children:s.jsx(Po,{checked:C,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:L,rightTheme:"on",state:"default"})}),s.jsx(nt,{design:"secondary",onClick:_,children:"Cancel"}),s.jsx(nt,{style:{marginLeft:"10px"},onClick:B,children:"Save"})]})]}),s.jsxs($s,{children:[i&&s.jsx(tr,{message:i,type:"error"}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[s.jsxs(nt,{design:"secondary",onClick:()=>b(q=>!q),children:[x?"Hide":"Show"," Scroll Spacer"]}),x&&s.jsx("input",{type:"range",min:100,max:2e3,step:50,value:v,onChange:q=>k(Number(q.target.value)),style:{width:"200px"}}),x&&s.jsxs("span",{style:{color:"#888"},children:[v,"px"]})]}),x&&s.jsx("div",{style:{height:`${v}px`,background:"repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)"},children:s.jsx("p",{style:{padding:"20px",color:"#888"},children:"TEMP: Scroll test spacer"})}),s.jsx(Et,{label:"Host",name:"host",fieldState:"default",value:o,onChange:({target:{value:q}})=>c(q)}),s.jsx(nt,{onClick:N,children:"Connect"}),u&&s.jsxs(s.Fragment,{children:[s.jsx(Ni.Provider,{value:{state:e,dispatch:a},children:s.jsx(WT,{ws:`ws://${u}/`,videoOptions:T,options:z,onLineClick:J})}),s.jsx(J$,{children:s.jsx(nt,{onClick:F,children:"Open Video Modal"})})]})]})]})},lu=y(I0)`
  width: 100%;
  margin-bottom: 15px;
`,tz=y.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-end;
`,nz=()=>{const[e,a]=f.useReducer(K0,[]),[i]=f.useState(""),{createMediaModal:o}=X0(),[c,u]=f.useState({showSetIndex:!0,pointIndexOffset:1,showPointLabel:!0,setIndexOffset:1,showDirectionMark:!1,showLabelShadow:!1}),[h,p]=f.useState({loop:!0,autoPlay:!0}),m=f.useCallback(async()=>{a({type:"LOAD",state:[{name:"Line 1",points:[{x:968,y:1297},{x:1849,y:1393}],showPointHandle:!0,showSmallDirectionMark:!0,readOnly:!1,styling:"primary"},{name:"Line 2",points:[{x:568,y:1097},{x:1649,y:1193}],showPointHandle:!1,showMoveHandle:!1,readOnly:!1,styling:"primary"},{name:"Shape 1",areaName:"Traffic Area",points:[{x:502,y:453},{x:1067,y:581},{x:776,y:982},{x:376,y:782}],readOnly:!1,styling:"secondary",areaFillColor:"#0B0B0B",areaTransparencyLevel:40}]})},[]),x=f.useCallback(()=>{a({type:"ADD_SET",data:{points:[{x:0,y:0},{x:500,y:0},{x:500,y:500},{x:0,y:500}]}})},[]),b=f.useCallback((z=0)=>{a({type:"REMOVE_SET",index:z})},[]),v=f.useCallback((z=0)=>{a({type:"REMOVE_POINT",index:z})},[]),k=f.useCallback((z=0)=>{a({type:"ADD_POINT",index:z})},[]);f.useEffect(()=>{m()},[m]);const C=f.useCallback(z=>{u(_=>({..._,showDirectionMark:z}))},[]),S=f.useCallback(z=>{u(_=>({..._,showLabelShadow:z}))},[]),E=f.useCallback(()=>{p({loop:!0,autoPlay:!0})},[]),T=f.useCallback(()=>{p({loop:!1,autoPlay:!1,muted:!0}),o({mediaType:"video",src:"/scorer-ui-kit/traffic.mp4",dismissCallback:E})},[o,E]),M=f.useCallback(z=>{const _=e.findIndex(B=>B.showPointHandle);a({type:"UPDATE_SET_OPTIONS",index:_,data:{showPointHandle:!1,showMoveHandle:!1}}),a({type:"UPDATE_SET_OPTIONS",index:z,data:{showPointHandle:!0,showMoveHandle:!0}})},[e]);return s.jsxs(Os,{children:[s.jsx(hn,{children:"LineVideoPage.tsx"}),s.jsxs(Qu,{children:[s.jsx(Xu,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),s.jsxs(rr,{children:[s.jsx(lu,{icon:"Add",design:"primary",onClick:x,children:"Add Shape"}),s.jsx(lu,{icon:"Add",design:"primary",onClick:()=>k(e.length-1),children:"Add Point"}),s.jsx(lu,{icon:"Delete",design:"warning",onClick:()=>v(e.length-1),children:"Remove Point"}),s.jsx(lu,{icon:"Delete",design:"warning",onClick:()=>b(e.length-1),children:"Remove Shape"}),s.jsx(Po,{checked:c.showDirectionMark,labelText:"Show Direction Mark",leftTheme:"off",onChangeCallback:C,rightTheme:"on",state:"default"}),s.jsx("br",{}),s.jsx(Po,{checked:c.showLabelShadow,labelText:"Show Label Shadow",leftTheme:"off",onChangeCallback:S,rightTheme:"on",state:"default"})]}),s.jsx(rr,{style:{flex:"1"},children:s.jsx("pre",{children:JSON.stringify(e,null,2)})})]}),s.jsxs($s,{$padBottom:!1,children:[i&&s.jsx("div",{children:i}),s.jsx(Ni.Provider,{value:{state:e,dispatch:a},children:s.jsx(HT,{options:c,onLineClick:M,videoOptions:h,src:"/scorer-ui-kit/traffic.mp4"})}),s.jsx(tz,{children:s.jsx(nt,{onClick:T,children:"Open Video Modal"})})]})]})},az=y.div`
  margin: 0 auto;
  padding: 100px 100px;
  max-width: 1024px;
  box-sizing: content-box;
`,zh=y.section`
  display: block;
  margin-bottom: 64px;
`,rz=y.h1`
  font-family: var(--font-ui);
  font-weight: 200;
  color: var(--grey-10);
  padding: 0;
  margin: 0 0 36px;
`,Ah=y.h2`
  font-family: var(--font-ui);
  font-weight: 300;
  color: var(--grey-12);
`,Rh=y.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  align-items: stretch;
`,Zt=y.div`
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
`,Xt=y.div`
  display: block;
  font-family: var(--font-ui);
  letter-spacing: 0.4px;
  font-size: 14px;
  color: var(--grey-12);
  font-weight: 500;
`,Qt=y.div`
  font-family: var(--font-data);
  font-weight: 300;
  font-size: 14px;
  color: var(--grey-11);
`,iz=()=>s.jsxs(az,{children:[s.jsx(rz,{children:"SCORER UI Kit"}),window.location.hostname!=="localhost"?s.jsxs(zh,{children:[s.jsx(Ah,{children:"Key Resources"}),s.jsx(Rh,{children:s.jsx(Zt,{children:s.jsxs("a",{href:"/scorer-ui-kit/storybook",children:[s.jsx(Xt,{children:"Storybook"}),s.jsx(Qt,{children:"All the key components of the SCORER UI Kit, previewable along with options using Storybook."})]})})})]}):null,s.jsxs(zh,{children:[s.jsx(Ah,{children:"Examples"}),s.jsxs(Rh,{children:[s.jsx(Zt,{children:s.jsxs(He,{to:"/layouts",children:[s.jsx(Xt,{children:"Global UI - Layout"}),s.jsx(Qt,{children:"A basic implementation example of the page Layout component."}),s.jsx(Nt,{children:"Layouts.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/split-layouts",children:[s.jsx(Xt,{children:"Split Layout"}),s.jsx(Qt,{children:"A page layout with the drag-to-resize layout component."}),s.jsx(Nt,{children:"SplitLayout.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/customdrawer",children:[s.jsx(Xt,{children:"Custom User Drawer"}),s.jsx(Qt,{children:"Shows how to add custom injected section to the user drawer."}),s.jsx(Nt,{children:"CustomUserDrawerPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/tabs",children:[s.jsx(Xt,{children:"Tabs Example"}),s.jsx(Qt,{children:"A simple implementation of tabs."}),s.jsx(Nt,{children:"TabsPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/table",children:[s.jsx(Xt,{children:"Table Example"}),s.jsx(Qt,{children:"A TypeTable implementation with examples on setup and how to use selections."}),s.jsx(Nt,{children:"TablePage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/line",children:[s.jsx(Xt,{children:"Line"}),s.jsx(Qt,{children:"The line tool used commonly for setting up of areas of interest used in system configurations."}),s.jsx(Nt,{children:"LinePage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/linertc",children:[s.jsx(Xt,{children:"Line WebRTC"}),s.jsx(Qt,{children:"A variation of the Line tool using a WebRTC video background instead of a static image."}),s.jsx(Nt,{children:"LineRTCPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/linevideo",children:[s.jsx(Xt,{children:"Line Video"}),s.jsx(Qt,{children:"A variation of the Line tool using a video background instead of a static image."}),s.jsx(Nt,{children:"LineVideoPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/forms",children:[s.jsx(Xt,{children:"Forms"}),s.jsx(Qt,{children:"Form inputs and state examples."}),s.jsx(Nt,{children:"FormPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/ptz",children:[s.jsx(Xt,{children:"PTZ"}),s.jsx(Qt,{children:"An example of a working PTZ control. Requires a PTZ camera login."}),s.jsx(Nt,{children:"PTZPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/login",children:[s.jsx(Xt,{children:"Login"}),s.jsx(Qt,{children:"A code sample of our commonly used login view."}),s.jsx(Nt,{children:"Login.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/customalert",children:[s.jsx(Xt,{children:"Component Theme Override Example"}),s.jsx(Qt,{children:"Override CSS based theme for components."}),s.jsx(Nt,{children:"CustomAlertsPage.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/switch-test",children:[s.jsx(Xt,{children:"Switch Example"}),s.jsx(Qt,{children:"A demonstration of the Switch component with API integration."}),s.jsx(Nt,{children:"SwitchTest.tsx"})]})}),s.jsx(Zt,{children:s.jsxs(He,{to:"/usepoll-test",children:[s.jsx(Xt,{children:"usePoll — StrictMode Fix"}),s.jsx(Qt,{children:"Side-by-side comparison of usePoll before and after the React StrictMode canceled-ref fix."}),s.jsx(Nt,{children:"UsePollTestPage.tsx"})]})})]})]}),s.jsxs(zh,{children:[s.jsx(Ah,{children:"Deprecated"}),s.jsx(Rh,{children:s.jsx(Zt,{children:s.jsxs(He,{to:"/globalUI",children:[s.jsx(Xt,{children:"Global UI (Deprecated)"}),s.jsx(Qt,{children:"The legacy implementation used for page layouts."}),s.jsx(Nt,{children:"GlobalUIPage.tsx"})]})})})]})]}),oz=y.div`
  flex: 1;
  padding: 70px 70px 0 70px;
  overflow-y: scroll;
  form {
    max-width: 600px;
  }
`,lz=y.img`
  width: 100%;
`,sz=()=>{const{state:{image:e,connection:a,errorMessage:i,loading:o},actions:{connect:c}}=f.useContext(lr),[u,h]=f.useState({host:"",username:"",password:""}),p=f.useCallback(({target:x})=>{h({...u,[x.id]:x.value})},[u]),m=f.useCallback(x=>{x.preventDefault(),c(u)},[c,u]);return s.jsxs(Os,{children:[s.jsx(hn,{children:"PTZPage.tsx"}),s.jsxs(Qu,{children:[s.jsx(Xu,{logoTextTop:"SCORER",logoTextBottom:"UI Kit"}),s.jsxs(rr,{children:[s.jsx(V$,{to:"/",children:"Back"}),s.jsx(W$,{children:"Camera Controls"})]}),a==="connected"&&s.jsx(bL,{debug:!0})]}),s.jsxs(oz,{children:[i&&s.jsx(tr,{message:i,type:"error"}),a==="connected"?s.jsx(lz,{src:e||void 0,alt:"PTZ Camera"}):s.jsxs(W0,{onChange:p,onSubmit:m,children:[s.jsx(Et,{required:!0,label:"PTZ Camera Hostname",fieldState:"default",name:"host",id:"host",value:u.host,onChange:p}),s.jsx(Et,{required:!0,label:"Username",fieldState:"default",name:"username",id:"username",value:u.username,onChange:p}),s.jsx(F0,{required:!0,label:"Password",fieldState:"default",name:"password",id:"password",value:u.password,onChange:p}),s.jsx(G0,{loading:o,type:"submit",children:"Connect"})]})]})]})},cz="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1076'%20height='1076'%20viewBox='0%200%201076%201076'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='19.655%25'%20x2='80.649%25'%20y1='39.035%25'%20y2='55.792%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='-51.504%25'%20x2='143.512%25'%20y1='-10.887%25'%20y2='120.691%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'%20stop-opacity='.84'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='25.133%25'%20x2='83.065%25'%20y1='38.102%25'%20y2='61.898%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.364'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='90.238%25'%20x2='44.369%25'%20y1='106.126%25'%20y2='-19.277%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.772'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='20.916%25'%20x2='83.944%25'%20y1='39.373%25'%20y2='61.232%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.648'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='nonzero'%20opacity='.2'%20style='mix-blend-mode:overlay'%3e%3cpath%20fill='url(%23a)'%20d='M36.923%20804.572L538%20551.122l538%20262.439v1.54l-518.664%20258.264c-7.056%203.513-15.748%203.513-22.804%200l-497.61-247.78c-4.352-2.167-7.033-6.172-7.033-10.506%200-4.335%202.681-8.34%207.034-10.507z'%20opacity='.746'/%3e%3cpath%20fill='url(%23b)'%20d='M538%20551.122v-262.44l538%20262.44v262.439z'%20opacity='.4'/%3e%3cpath%20fill='url(%23c)'%20d='M0%20551.122l538-262.44%20538%20262.44-538%20262.439z'%20opacity='.799'/%3e%3cpath%20fill='url(%23d)'%20d='M.357%20260.627L538%20524.878v288.683L0%20551.122z'/%3e%3cpath%20fill='url(%23e)'%20d='M0%20261.124L518.618%202.276c6.078-3.035%2013.568-3.035%2019.646%200l502.461%20250.784c3.333%201.664%205.386%204.738%205.386%208.065%200%203.327-2.053%206.401-5.386%208.065L538%20524.878%200%20261.124z'%20opacity='.9'/%3e%3c/g%3e%3c/svg%3e",uz=({title:e,titleId:a,...i},o)=>f.createElement("svg",{width:35,height:35,xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":a,...i},e?f.createElement("title",{id:a},e):null,f.createElement("defs",null,f.createElement("linearGradient",{x1:"0%",y1:"0%",x2:"100%",y2:"100%",id:"prefix__a"},f.createElement("stop",{stopColor:"#7DB8DB",offset:"0%"}),f.createElement("stop",{stopColor:"#5CA0D1",offset:"100%"})),f.createElement("style",null,`
            @font-face {
                font-family: Monorale;
                font-weight: 700;
                font-style: normal;
                src: url('/fonts/Monorale-Bold.woff') format('woff');
                font-display: fallback;
            }
        `)),f.createElement("g",{fill:"none",fillRule:"evenodd"},f.createElement("rect",{fill:"url(#prefix__a)",width:35,height:35,rx:5}),f.createElement("text",{fontFamily:"Monorale",fontSize:26,fontWeight:"bold",letterSpacing:2.167,fill:"#FFF"},f.createElement("tspan",{x:8.604,y:27},"S"))));f.forwardRef(uz);const dz=({title:e,titleId:a,...i},o)=>f.createElement("svg",{width:138,height:35,xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":a,...i},e?f.createElement("title",{id:a},e):null,f.createElement("defs",null,f.createElement("style",null,`
            @font-face{font-family:Monorale;font-weight:400;font-style:normal;src:url(/fonts/Monorale-Regular.woff) format('woff');font-display:fallback}@font-face{font-family:Monorale;font-weight:500;font-style:normal;src:url(/fonts/Monorale-Medium.woff) format('woff');font-display:fallback}
        `)),f.createElement("g",{fill:"#93A5B2",fillRule:"evenodd",fontFamily:"Monorale"},f.createElement("text",{fontSize:16,fontWeight:400,letterSpacing:1.333},f.createElement("tspan",{x:0,y:16},"SCORER")),f.createElement("text",{fontSize:10,letterSpacing:.833},f.createElement("tspan",{x:0,y:31},"UI KIT"))));f.forwardRef(dz);const fz=({title:e,titleId:a,...i},o)=>f.createElement("svg",{width:170,height:35,viewBox:"0 0 170 35",xmlns:"http://www.w3.org/2000/svg",ref:o,"aria-labelledby":a,...i},e?f.createElement("title",{id:a},e):null,f.createElement("defs",null,f.createElement("style",null,`
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
        `),f.createElement("mask",{id:"logo_mask",x:0,y:0,width:"100%",height:"100%"},f.createElement("rect",{fill:"#fff",id:"overlay",x:0,y:0,width:"100%",height:"100%"}),f.createElement("text",{fontFamily:"Monorale",fontSize:26,fontWeight:"bold",letterSpacing:2.167},f.createElement("tspan",{x:8.604,y:27},"S")))),f.createElement("g",{fill:"#FFF",fillRule:"evenodd"},f.createElement("rect",{mask:"url(#logo_mask)",width:35,height:35,rx:5})),f.createElement("g",{fill:"#FFF",fillRule:"evenodd"},f.createElement("text",{fontFamily:"Monorale",fontSize:16,fontWeight:400,letterSpacing:1.333,transform:"translate(52 1)"},f.createElement("tspan",{x:0,y:15},"SCORER")),f.createElement("text",{fontFamily:"Monorale",fontSize:10,letterSpacing:.833,transform:"translate(52 1)"},f.createElement("tspan",{x:0,y:30},"UI KIT")))),hz=f.forwardRef(fz),bs=480,gz={primary:"linear-gradient(-45deg, hsl(205,56%,59%), hsl(202,57%,67%))",secondary:"linear-gradient(139deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%))"},t5=A`
  display: flex;
  flex-direction: row;
`,pz=Sa`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`,mz=y.div``,vz=y.div`
  button{
    width: 100%;
  }
  ${({$margin:e})=>e&&A`margin:${e};`}
  ${({$flex:e})=>e&&A`
    flex:${e};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`,xz=y(W0)`
    max-width: 320px;
    margin: auto;
    padding: 44px 0;
    min-height: calc(100vh - 126px);

    animation: ${pz} 0.35s cubic-bezier(0.7, 0, 0.84, 0);

    ${Qy} {
      margin-bottom: 20px;
    }

    @media (min-width: 768px){
      min-height: auto;
    }

    @media (min-width: 1024px){
      max-width: ${bs}px;
      padding: 70px;
      margin: initial;
    }
`,yz=y.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
`,bz=y.div`
  text-align: left;
  font-size: 14px;
  font-weight: 300;
  line-height: 25px;
  text-decoration: none;
  color: var(--grey-11);
  margin: 23px 0 40px 0;
`,wz=y(He)`

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
`,Sz=y.div`
    text-align: center;
    margin: 10px auto;
`,rg=A`
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
`,Cz=y.div`
  ${rg};
  margin-right: 17px;
`,bx=y(He)`
  ${rg};
  margin: 49px 4px 0 4px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,kz=y.div`
  ${rg};
  font-weight: 700;
`,p0=y.div`
    ${t5}
    justify-content: center;
`,Ez=y.div`
  ${p0}{
    display:none;
  }

  @media (min-width: 768px) {
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    height: auto;

    ${p0}{
      display: flex;
    }
  }
`,jz=y(hz)`
    height: 54px;
    width: auto;
`,Tz=y.img`
  height: 1080px;
  background-image: ${({$design:e})=>gz[e]};
  position: absolute;
  bottom: -360px;
  left: -600px;
  min-width: ${bs}px;
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
`,Mz=y.div`
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
    max-width: ${bs}px;
  }

`,Lz=y.div`
  border: solid 1px hsl(0, 0%, 91%);
  max-width: ${bs}px;
  margin: auto;
  height: 100%;

  @media (min-width: 768px) {
    box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    ${t5}
    overflow: hidden;
    position:relative;
    max-width: none;
    min-width: ${bs*2}px;
    min-height: 560px;

    input{
      min-width: 296px;
    }
  }
`,Oz=({onLogin:e,design:a="primary"})=>{const[i,o]=f.useState(!1),[c,u]=f.useState(null),[h,p]=f.useState({username:"",password:""}),m=f.useCallback(b=>({target:{value:v}})=>{p({...h,[b]:v})},[h]),x=f.useCallback(async b=>{b.preventDefault(),o(!0),u(null);try{const v=await e(h);console.log(v,"login")}catch(v){v instanceof Error?u({message:v.message,type:"error"}):console.warn(v)}o(!1)},[h,e]);return s.jsxs(mz,{children:[s.jsx(hn,{children:"Login.tsx"}),s.jsxs(Ez,{children:[s.jsxs(Lz,{children:[s.jsxs(Mz,{children:[s.jsx(jz,{}),s.jsx(Tz,{src:cz,$design:a})]}),s.jsxs(xz,{onSubmit:x,spacing:"25px",children:[s.jsx(yz,{children:"Sign In To Your Account"}),s.jsx(bz,{children:"This service requires an account to login. If you do not have one, please make one first."}),s.jsx(Et,{fieldState:"default",required:!0,label:"Username",onChange:m("username"),value:h.username,name:"username",id:"username"}),s.jsx(F0,{fieldState:"default",required:!0,label:"Password",onChange:m("password"),value:h.password,name:"password",id:"password"}),c&&s.jsx(tr,{type:c.type,message:c.message}),s.jsx(vz,{$flex:"1",children:s.jsx(G0,{loading:i,type:"submit",onClick:x,children:"Login"})}),s.jsx(Sz,{children:s.jsx(wz,{to:"#",children:"Forgotten Password"})})]})]}),s.jsxs(p0,{children:[s.jsxs(Cz,{children:["Copyright ",new Date().getFullYear()," - Future Standard Co. Ltd. All Rights Reserved. "]}),s.jsx(bx,{to:"#",children:"Terms"}),s.jsx(kz,{children:"·"}),s.jsx(bx,{to:"#",children:"Privacy"})]})]})]})},$z=y.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
`,zz=y.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background-color: ${({$type:e})=>`var(--${e}, var(--primary-9))`};
    ${({$tooltipMessage:e})=>e&&A`
      &:hover {
        cursor: pointer;
      };
    `}
`,Kl=({statusList:e})=>{const a=f.useRef([]);return a.current=e.map(()=>st.createRef()),s.jsx($z,{children:e.map(({type:i,tooltipMessage:o,tooltipIcon:c,tooltipType:u,tooltipPosition:h},p)=>s.jsxs(f.Fragment,{children:[s.jsx(zz,{ref:a.current[p],$type:i,$tooltipMessage:o}),o&&s.jsx(ZC,{tooltipFor:a.current[p],message:o,icon:c,type:u,tooltipPosition:h})]},p))})},Az=y.div`
  margin: 100px 200px;
`,Rz=y.pre`
  color: var(--grey-11);
  margin-top: 75px;
  background: var(--grey-4);
  padding: 10px;
  white-space: normal;
`,Dz=[{header:"Device Name",sortable:!0,cellStyle:"firstColumn"},{header:"Created",sortable:!1,cellStyle:"lowImportance",alignment:"center",hasCopyButton:!0},{header:"Usage",sortable:!1,cellStyle:"normalImportance",alignment:"right",showUnit:!0},{header:"Cost",sortable:!0,cellStyle:"highImportance",alignment:"right",hasCopyButton:!0},{header:"Status",sortable:!1,cellStyle:"normalImportance",alignment:"center"},{header:"Actions",sortable:!1,cellStyle:"highImportance",alignment:"right"}],_z=()=>{const{createModal:e}=d2(),a=f.useCallback(m=>{console.log(`opening custom modal for item ${m}`),e({closeText:"Close",isCloseEnable:!0,customComponent:s.jsx(wa,{title:"Example of custom component on Modal",introductionText:"Anything can be added inside de modal, I hope you find this modal useful"})})},[e]),i=f.useMemo(()=>[{id:"a0",text:"Main Action",icon:"Success",onClickCallback:()=>{}},{id:"a1",text:"日本語の場合はランダム",onClickCallback:()=>{}},{id:"a2",text:"Save Action",icon:"Analyse",hasOnSelectLoading:!0,onClickCallback:()=>{}},{id:"a3",text:"Download Action",icon:"Download",onClickCallback:()=>{},disabled:!0}],[]),o=f.useMemo(()=>[{id:"device-id-1",header:{image:"https://picsum.photos/id/43/367/267",mediaUrl:"/scorer-ui-kit/traffic.mp4",mediaType:"video"},columns:[{text:"Device Name",href:"#"},{text:"Just Now"},{text:"242",unit:"mb"},{text:"¥20,000"},{customComponent:s.jsx(Kl,{statusList:[{type:"success"},{type:"success"},{type:"success"}]})},{customComponent:s.jsx(Wl,{mainButtonId:"a0",buttonList:i})}]},{_checked:!0,id:"device-id-2",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img",onClickThumbnail:()=>a("device-id-2")},columns:[{text:"Another Device",href:"#"},{text:"1st October 2019"},{text:"2.1",unit:"gb"},{text:"¥4,000"},{customComponent:s.jsx(Kl,{statusList:[{type:"error",tooltipIcon:"BigWarning",tooltipType:"warning",tooltipMessage:"4 Images have reported upload failures",tooltipPosition:"left"},{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"1 images file is corrupted",tooltipPosition:"bottom"},{type:"info",tooltipIcon:"Information",tooltipType:"info",tooltipMessage:"All Images have been updated in the server",tooltipPosition:"right"}]})},{customComponent:s.jsx(Wl,{mainButtonId:"a0",buttonList:i})}]},{id:"device-id-3",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Old Device",href:"#"},{text:"22nd March 2020"},{text:"2.1",unit:"tb"},{text:"¥7,000"},{customComponent:s.jsx(Kl,{statusList:[{type:"warning",tooltipIcon:"Information",tooltipType:"neutral",tooltipMessage:"Upload took too long"},{type:"neutral"},{type:"neutral"}]})},{customComponent:s.jsx(Wl,{mainButtonId:"a0",buttonList:i})}]},{id:"device-id-4",header:{image:"/scorer-ui-kit/images/cityscape.jpg",mediaUrl:"/scorer-ui-kit/images/cityscape.jpg",mediaType:"img"},columns:[{text:"Magic Edge Cloud",href:"#"},{text:"2nd April 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:s.jsx(Kl,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:s.jsx(Wl,{mainButtonId:"a0",buttonList:i})}]},{id:"device-id-5",columns:[{text:"Special Camera",href:"#"},{text:"16th June 2020"},{text:"153",unit:"mb"},{text:"¥25,000"},{customComponent:s.jsx(Kl,{statusList:[{type:"neutral"},{type:"neutral"},{type:"neutral"}]})},{customComponent:s.jsx(Wl,{mainButtonId:"a0",buttonList:i})}]}],[i,a]),[c,u]=f.useState(o),h=f.useCallback((m,x)=>{const b=[...c],v=b.findIndex(k=>k.id===x);b[v]._checked=m,u(b)},[c,u]),p=f.useCallback(m=>{const x=[...c];x.forEach(b=>{b._checked=m}),u(x)},[c,u]);return s.jsxs(Az,{children:[s.jsx(hn,{children:"TablePage.tsx"}),s.jsxs($s,{children:[s.jsx(wa,{title:"Table Example",areaTitle:"Examples",areaHref:"/"}),s.jsx(UM,{selectable:!0,columnConfig:Dz,rows:c,selectCallback:h,toggleAllCallback:p,hasThumbnail:!0}),s.jsxs(Rz,{children:["Selected IDs: [",Nz(c).toString(),"]"]})]})]})},Nz=e=>{const a=[];return e.forEach(i=>{i._checked&&i.id&&a.push(i.id.toString())}),a},ke=e=>typeof e=="string",Jl=()=>{let e,a;const i=new Promise((o,c)=>{e=o,a=c});return i.resolve=e,i.reject=a,i},wx=e=>e==null?"":""+e,Hz=(e,a,i)=>{e.forEach(o=>{a[o]&&(i[o]=a[o])})},Bz=/###/g,Sx=e=>e&&e.indexOf("###")>-1?e.replace(Bz,"."):e,Cx=e=>!e||ke(e),fs=(e,a,i)=>{const o=ke(a)?a.split("."):a;let c=0;for(;c<o.length-1;){if(Cx(e))return{};const u=Sx(o[c]);!e[u]&&i&&(e[u]=new i),Object.prototype.hasOwnProperty.call(e,u)?e=e[u]:e={},++c}return Cx(e)?{}:{obj:e,k:Sx(o[c])}},kx=(e,a,i)=>{const{obj:o,k:c}=fs(e,a,Object);if(o!==void 0||a.length===1){o[c]=i;return}let u=a[a.length-1],h=a.slice(0,a.length-1),p=fs(e,h,Object);for(;p.obj===void 0&&h.length;)u=`${h[h.length-1]}.${u}`,h=h.slice(0,h.length-1),p=fs(e,h,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=i},Uz=(e,a,i,o)=>{const{obj:c,k:u}=fs(e,a,Object);c[u]=c[u]||[],c[u].push(i)},Au=(e,a)=>{const{obj:i,k:o}=fs(e,a);if(i&&Object.prototype.hasOwnProperty.call(i,o))return i[o]},Iz=(e,a,i)=>{const o=Au(e,i);return o!==void 0?o:Au(a,i)},n5=(e,a,i)=>{for(const o in a)o!=="__proto__"&&o!=="constructor"&&(o in e?ke(e[o])||e[o]instanceof String||ke(a[o])||a[o]instanceof String?i&&(e[o]=a[o]):n5(e[o],a[o],i):e[o]=a[o]);return e},Si=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Gz={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const qz=e=>ke(e)?e.replace(/[&<>"'\/]/g,a=>Gz[a]):e;class Pz{constructor(a){this.capacity=a,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(a){const i=this.regExpMap.get(a);if(i!==void 0)return i;const o=new RegExp(a);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(a,o),this.regExpQueue.push(a),o}}const Fz=[" ",",","?","!",";"],Wz=new Pz(20),Vz=(e,a,i)=>{a=a||"",i=i||"";const o=Fz.filter(h=>a.indexOf(h)<0&&i.indexOf(h)<0);if(o.length===0)return!0;const c=Wz.getRegExp(`(${o.map(h=>h==="?"?"\\?":h).join("|")})`);let u=!c.test(e);if(!u){const h=e.indexOf(i);h>0&&!c.test(e.substring(0,h))&&(u=!0)}return u},m0=(e,a,i=".")=>{if(!e)return;if(e[a])return Object.prototype.hasOwnProperty.call(e,a)?e[a]:void 0;const o=a.split(i);let c=e;for(let u=0;u<o.length;){if(!c||typeof c!="object")return;let h,p="";for(let m=u;m<o.length;++m)if(m!==u&&(p+=i),p+=o[m],h=c[p],h!==void 0){if(["string","number","boolean"].indexOf(typeof h)>-1&&m<o.length-1)continue;u+=m-u+1;break}c=h}return c},ws=e=>e?.replace(/_/g,"-"),Yz={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,a){console?.[e]?.apply?.(console,a)}};class Ru{constructor(a,i={}){this.init(a,i)}init(a,i={}){this.prefix=i.prefix||"i18next:",this.logger=a||Yz,this.options=i,this.debug=i.debug}log(...a){return this.forward(a,"log","",!0)}warn(...a){return this.forward(a,"warn","",!0)}error(...a){return this.forward(a,"error","")}deprecate(...a){return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(a,i,o,c){return c&&!this.debug?null:(ke(a[0])&&(a[0]=`${o}${this.prefix} ${a[0]}`),this.logger[i](a))}create(a){return new Ru(this.logger,{prefix:`${this.prefix}:${a}:`,...this.options})}clone(a){return a=a||this.options,a.prefix=a.prefix||this.prefix,new Ru(this.logger,a)}}var ya=new Ru;class Ku{constructor(){this.observers={}}on(a,i){return a.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const c=this.observers[o].get(i)||0;this.observers[o].set(i,c+1)}),this}off(a,i){if(this.observers[a]){if(!i){delete this.observers[a];return}this.observers[a].delete(i)}}emit(a,...i){this.observers[a]&&Array.from(this.observers[a].entries()).forEach(([c,u])=>{for(let h=0;h<u;h++)c(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([c,u])=>{for(let h=0;h<u;h++)c.apply(c,[a,...i])})}}class Ex extends Ku{constructor(a,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=a||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(a){this.options.ns.indexOf(a)<0&&this.options.ns.push(a)}removeNamespaces(a){const i=this.options.ns.indexOf(a);i>-1&&this.options.ns.splice(i,1)}getResource(a,i,o,c={}){const u=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,h=c.ignoreJSONStructure!==void 0?c.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;a.indexOf(".")>-1?p=a.split("."):(p=[a,i],o&&(Array.isArray(o)?p.push(...o):ke(o)&&u?p.push(...o.split(u)):p.push(o)));const m=Au(this.data,p);return!m&&!i&&!o&&a.indexOf(".")>-1&&(a=p[0],i=p[1],o=p.slice(2).join(".")),m||!h||!ke(o)?m:m0(this.data?.[a]?.[i],o,u)}addResource(a,i,o,c,u={silent:!1}){const h=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[a,i];o&&(p=p.concat(h?o.split(h):o)),a.indexOf(".")>-1&&(p=a.split("."),c=i,i=p[1]),this.addNamespaces(i),kx(this.data,p,c),u.silent||this.emit("added",a,i,o,c)}addResources(a,i,o,c={silent:!1}){for(const u in o)(ke(o[u])||Array.isArray(o[u]))&&this.addResource(a,i,u,o[u],{silent:!0});c.silent||this.emit("added",a,i,o)}addResourceBundle(a,i,o,c,u,h={silent:!1,skipCopy:!1}){let p=[a,i];a.indexOf(".")>-1&&(p=a.split("."),c=o,o=i,i=p[1]),this.addNamespaces(i);let m=Au(this.data,p)||{};h.skipCopy||(o=JSON.parse(JSON.stringify(o))),c?n5(m,o,u):m={...m,...o},kx(this.data,p,m),h.silent||this.emit("added",a,i,o)}removeResourceBundle(a,i){this.hasResourceBundle(a,i)&&delete this.data[a][i],this.removeNamespaces(i),this.emit("removed",a,i)}hasResourceBundle(a,i){return this.getResource(a,i)!==void 0}getResourceBundle(a,i){return i||(i=this.options.defaultNS),this.getResource(a,i)}getDataByLanguage(a){return this.data[a]}hasLanguageSomeTranslations(a){const i=this.getDataByLanguage(a);return!!(i&&Object.keys(i)||[]).find(c=>i[c]&&Object.keys(i[c]).length>0)}toJSON(){return this.data}}var a5={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,a,i,o,c){return e.forEach(u=>{a=this.processors[u]?.process(a,i,o,c)??a}),a}};const r5=Symbol("i18next/PATH_KEY");function Zz(){const e=[],a=Object.create(null);let i;return a.get=(o,c)=>(i?.revoke?.(),c===r5?e:(e.push(c),i=Proxy.revocable(o,a),i.proxy)),Proxy.revocable(Object.create(null),a).proxy}function v0(e,a){const{[r5]:i}=e(Zz());return i.join(a?.keySeparator??".")}const jx={},Dh=e=>!ke(e)&&typeof e!="boolean"&&typeof e!="number";class Du extends Ku{constructor(a,i={}){super(),Hz(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],a,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ya.create("translator")}changeLanguage(a){a&&(this.language=a)}exists(a,i={interpolation:{}}){const o={...i};if(a==null)return!1;const c=this.resolve(a,o);if(c?.res===void 0)return!1;const u=Dh(c.res);return!(o.returnObjects===!1&&u)}extractFromKey(a,i){let o=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let u=i.ns||this.options.defaultNS||[];const h=o&&a.indexOf(o)>-1,p=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!Vz(a,o,c);if(h&&!p){const m=a.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:a,namespaces:ke(u)?[u]:u};const x=a.split(o);(o!==c||o===c&&this.options.ns.indexOf(x[0])>-1)&&(u=x.shift()),a=x.join(c)}return{key:a,namespaces:ke(u)?[u]:u}}translate(a,i,o){let c=typeof i=="object"?{...i}:i;if(typeof c!="object"&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),typeof c=="object"&&(c={...c}),c||(c={}),a==null)return"";typeof a=="function"&&(a=v0(a,{...this.options,...c})),Array.isArray(a)||(a=[String(a)]);const u=c.returnDetails!==void 0?c.returnDetails:this.options.returnDetails,h=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,{key:p,namespaces:m}=this.extractFromKey(a[a.length-1],c),x=m[m.length-1];let b=c.nsSeparator!==void 0?c.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const v=c.lng||this.language,k=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return k?u?{res:`${x}${b}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(c)}:`${x}${b}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:x,usedParams:this.getUsedParamsDetails(c)}:p;const C=this.resolve(a,c);let S=C?.res;const E=C?.usedKey||p,T=C?.exactUsedKey||p,M=["[object Number]","[object Function]","[object RegExp]"],z=c.joinArrays!==void 0?c.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,B=c.count!==void 0&&!ke(c.count),N=Du.hasDefaultValue(c),U=B?this.pluralResolver.getSuffix(v,c.count,c):"",L=c.ordinal&&B?this.pluralResolver.getSuffix(v,c.count,{ordinal:!1}):"",R=B&&!c.ordinal&&c.count===0,F=R&&c[`defaultValue${this.options.pluralSeparator}zero`]||c[`defaultValue${U}`]||c[`defaultValue${L}`]||c.defaultValue;let J=S;_&&!S&&N&&(J=F);const q=Dh(J),ee=Object.prototype.toString.apply(J);if(_&&J&&q&&M.indexOf(ee)<0&&!(ke(z)&&Array.isArray(J))){if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const re=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,J,{...c,ns:m}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(C.res=re,C.usedParams=this.getUsedParamsDetails(c),C):re}if(h){const re=Array.isArray(J),Q=re?[]:{},ne=re?T:E;for(const D in J)if(Object.prototype.hasOwnProperty.call(J,D)){const G=`${ne}${h}${D}`;N&&!S?Q[D]=this.translate(G,{...c,defaultValue:Dh(F)?F[D]:void 0,joinArrays:!1,ns:m}):Q[D]=this.translate(G,{...c,joinArrays:!1,ns:m}),Q[D]===G&&(Q[D]=J[D])}S=Q}}else if(_&&ke(z)&&Array.isArray(S))S=S.join(z),S&&(S=this.extendTranslation(S,a,c,o));else{let re=!1,Q=!1;!this.isValidLookup(S)&&N&&(re=!0,S=F),this.isValidLookup(S)||(Q=!0,S=p);const D=(c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&Q?void 0:S,G=N&&F!==S&&this.options.updateMissing;if(Q||re||G){if(this.logger.log(G?"updateKey":"missingKey",v,x,p,G?F:S),h){const O=this.resolve(p,{...c,keySeparator:!1});O&&O.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let ae=[];const oe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if(this.options.saveMissingTo==="fallback"&&oe&&oe[0])for(let O=0;O<oe.length;O++)ae.push(oe[O]);else this.options.saveMissingTo==="all"?ae=this.languageUtils.toResolveHierarchy(c.lng||this.language):ae.push(c.lng||this.language);const de=(O,W,Y)=>{const se=N&&Y!==S?Y:D;this.options.missingKeyHandler?this.options.missingKeyHandler(O,x,W,se,G,c):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(O,x,W,se,G,c),this.emit("missingKey",O,x,W,S)};this.options.saveMissing&&(this.options.saveMissingPlurals&&B?ae.forEach(O=>{const W=this.pluralResolver.getSuffixes(O,c);R&&c[`defaultValue${this.options.pluralSeparator}zero`]&&W.indexOf(`${this.options.pluralSeparator}zero`)<0&&W.push(`${this.options.pluralSeparator}zero`),W.forEach(Y=>{de([O],p+Y,c[`defaultValue${Y}`]||F)})}):de(ae,p,F))}S=this.extendTranslation(S,a,c,C,o),Q&&S===p&&this.options.appendNamespaceToMissingKey&&(S=`${x}${b}${p}`),(Q||re)&&this.options.parseMissingKeyHandler&&(S=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${x}${b}${p}`:p,re?S:void 0,c))}return u?(C.res=S,C.usedParams=this.getUsedParamsDetails(c),C):S}extendTranslation(a,i,o,c,u){if(this.i18nFormat?.parse)a=this.i18nFormat.parse(a,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||c.usedLng,c.usedNS,c.usedKey,{resolved:c});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const m=ke(a)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let x;if(m){const v=a.match(this.interpolator.nestingRegexp);x=v&&v.length}let b=o.replace&&!ke(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),a=this.interpolator.interpolate(a,b,o.lng||this.language||c.usedLng,o),m){const v=a.match(this.interpolator.nestingRegexp),k=v&&v.length;x<k&&(o.nest=!1)}!o.lng&&c&&c.res&&(o.lng=this.language||c.usedLng),o.nest!==!1&&(a=this.interpolator.nest(a,(...v)=>u?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${i[0]}`),null):this.translate(...v,i),o)),o.interpolation&&this.interpolator.reset()}const h=o.postProcess||this.options.postProcess,p=ke(h)?[h]:h;return a!=null&&p?.length&&o.applyPostProcessor!==!1&&(a=a5.handle(p,a,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...c,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),a}resolve(a,i={}){let o,c,u,h,p;return ke(a)&&(a=[a]),a.forEach(m=>{if(this.isValidLookup(o))return;const x=this.extractFromKey(m,i),b=x.key;c=b;let v=x.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const k=i.count!==void 0&&!ke(i.count),C=k&&!i.ordinal&&i.count===0,S=i.context!==void 0&&(ke(i.context)||typeof i.context=="number")&&i.context!=="",E=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);v.forEach(T=>{this.isValidLookup(o)||(p=T,!jx[`${E[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(jx[`${E[0]}-${T}`]=!0,this.logger.warn(`key "${c}" for languages "${E.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(M=>{if(this.isValidLookup(o))return;h=M;const z=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(z,b,M,T,i);else{let B;k&&(B=this.pluralResolver.getSuffix(M,i.count,i));const N=`${this.options.pluralSeparator}zero`,U=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(k&&(i.ordinal&&B.indexOf(U)===0&&z.push(b+B.replace(U,this.options.pluralSeparator)),z.push(b+B),C&&z.push(b+N)),S){const L=`${b}${this.options.contextSeparator||"_"}${i.context}`;z.push(L),k&&(i.ordinal&&B.indexOf(U)===0&&z.push(L+B.replace(U,this.options.pluralSeparator)),z.push(L+B),C&&z.push(L+N))}}let _;for(;_=z.pop();)this.isValidLookup(o)||(u=_,o=this.getResource(M,T,_,i))}))})}),{res:o,usedKey:c,exactUsedKey:u,usedLng:h,usedNS:p}}isValidLookup(a){return a!==void 0&&!(!this.options.returnNull&&a===null)&&!(!this.options.returnEmptyString&&a==="")}getResource(a,i,o,c={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(a,i,o,c):this.resourceStore.getResource(a,i,o,c)}getUsedParamsDetails(a={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=a.replace&&!ke(a.replace);let c=o?a.replace:a;if(o&&typeof a.count<"u"&&(c.count=a.count),this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),!o){c={...c};for(const u of i)delete c[u]}return c}static hasDefaultValue(a){const i="defaultValue";for(const o in a)if(Object.prototype.hasOwnProperty.call(a,o)&&i===o.substring(0,i.length)&&a[o]!==void 0)return!0;return!1}}class Tx{constructor(a){this.options=a,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ya.create("languageUtils")}getScriptPartFromCode(a){if(a=ws(a),!a||a.indexOf("-")<0)return null;const i=a.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(a){if(a=ws(a),!a||a.indexOf("-")<0)return a;const i=a.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(a){if(ke(a)&&a.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(a)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?a.toLowerCase():a)}return this.options.cleanCode||this.options.lowerCaseLng?a.toLowerCase():a}isSupportedCode(a){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(a=this.getLanguagePartFromCode(a)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(a)>-1}getBestMatchFromCodes(a){if(!a)return null;let i;return a.forEach(o=>{if(i)return;const c=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(c))&&(i=c)}),!i&&this.options.supportedLngs&&a.forEach(o=>{if(i)return;const c=this.getScriptPartFromCode(o);if(this.isSupportedCode(c))return i=c;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return i=u;i=this.options.supportedLngs.find(h=>{if(h===u)return h;if(!(h.indexOf("-")<0&&u.indexOf("-")<0)&&(h.indexOf("-")>0&&u.indexOf("-")<0&&h.substring(0,h.indexOf("-"))===u||h.indexOf(u)===0&&u.length>1))return h})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(a,i){if(!a)return[];if(typeof a=="function"&&(a=a(i)),ke(a)&&(a=[a]),Array.isArray(a))return a;if(!i)return a.default||[];let o=a[i];return o||(o=a[this.getScriptPartFromCode(i)]),o||(o=a[this.formatLanguageCode(i)]),o||(o=a[this.getLanguagePartFromCode(i)]),o||(o=a.default),o||[]}toResolveHierarchy(a,i){const o=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],a),c=[],u=h=>{h&&(this.isSupportedCode(h)?c.push(h):this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))};return ke(a)&&(a.indexOf("-")>-1||a.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(a)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(a)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(a))):ke(a)&&u(this.formatLanguageCode(a)),o.forEach(h=>{c.indexOf(h)<0&&u(this.formatLanguageCode(h))}),c}}const Mx={zero:0,one:1,two:2,few:3,many:4,other:5},Lx={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Xz{constructor(a,i={}){this.languageUtils=a,this.options=i,this.logger=ya.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(a,i={}){const o=ws(a==="dev"?"en":a),c=i.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:c});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let h;try{h=new Intl.PluralRules(o,{type:c})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Lx;if(!a.match(/-|_/))return Lx;const m=this.languageUtils.getLanguagePartFromCode(a);h=this.getRule(m,i)}return this.pluralRulesCache[u]=h,h}needsPlural(a,i={}){let o=this.getRule(a,i);return o||(o=this.getRule("dev",i)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(a,i,o={}){return this.getSuffixes(a,o).map(c=>`${i}${c}`)}getSuffixes(a,i={}){let o=this.getRule(a,i);return o||(o=this.getRule("dev",i)),o?o.resolvedOptions().pluralCategories.sort((c,u)=>Mx[c]-Mx[u]).map(c=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${c}`):[]}getSuffix(a,i,o={}){const c=this.getRule(a,o);return c?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${c.select(i)}`:(this.logger.warn(`no plural rule found for: ${a}`),this.getSuffix("dev",i,o))}}const Ox=(e,a,i,o=".",c=!0)=>{let u=Iz(e,a,i);return!u&&c&&ke(i)&&(u=m0(e,i,o),u===void 0&&(u=m0(a,i,o))),u},_h=e=>e.replace(/\$/g,"$$$$");class $x{constructor(a={}){this.logger=ya.create("interpolator"),this.options=a,this.format=a?.interpolation?.format||(i=>i),this.init(a)}init(a={}){a.interpolation||(a.interpolation={escapeValue:!0});const{escape:i,escapeValue:o,useRawValueToEscape:c,prefix:u,prefixEscaped:h,suffix:p,suffixEscaped:m,formatSeparator:x,unescapeSuffix:b,unescapePrefix:v,nestingPrefix:k,nestingPrefixEscaped:C,nestingSuffix:S,nestingSuffixEscaped:E,nestingOptionsSeparator:T,maxReplaces:M,alwaysFormat:z}=a.interpolation;this.escape=i!==void 0?i:qz,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=c!==void 0?c:!1,this.prefix=u?Si(u):h||"{{",this.suffix=p?Si(p):m||"}}",this.formatSeparator=x||",",this.unescapePrefix=b?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=k?Si(k):C||Si("$t("),this.nestingSuffix=S?Si(S):E||Si(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=M||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const a=(i,o)=>i?.source===o?(i.lastIndex=0,i):new RegExp(o,"g");this.regexp=a(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=a(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=a(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(a,i,o,c){let u,h,p;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},x=C=>{if(C.indexOf(this.formatSeparator)<0){const M=Ox(i,m,C,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(M,void 0,o,{...c,...i,interpolationkey:C}):M}const S=C.split(this.formatSeparator),E=S.shift().trim(),T=S.join(this.formatSeparator).trim();return this.format(Ox(i,m,E,this.options.keySeparator,this.options.ignoreJSONStructure),T,o,{...c,...i,interpolationkey:E})};this.resetRegExp();const b=c?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=c?.interpolation?.skipOnVariables!==void 0?c.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:C=>_h(C)},{regex:this.regexp,safeValue:C=>this.escapeValue?_h(this.escape(C)):_h(C)}].forEach(C=>{for(p=0;u=C.regex.exec(a);){const S=u[1].trim();if(h=x(S),h===void 0)if(typeof b=="function"){const T=b(a,u,c);h=ke(T)?T:""}else if(c&&Object.prototype.hasOwnProperty.call(c,S))h="";else if(v){h=u[0];continue}else this.logger.warn(`missed to pass in variable ${S} for interpolating ${a}`),h="";else!ke(h)&&!this.useRawValueToEscape&&(h=wx(h));const E=C.safeValue(h);if(a=a.replace(u[0],E),v?(C.regex.lastIndex+=h.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),a}nest(a,i,o={}){let c,u,h;const p=(m,x)=>{const b=this.nestingOptionsSeparator;if(m.indexOf(b)<0)return m;const v=m.split(new RegExp(`${Si(b)}[ ]*{`));let k=`{${v[1]}`;m=v[0],k=this.interpolate(k,h);const C=k.match(/'/g),S=k.match(/"/g);((C?.length??0)%2===0&&!S||(S?.length??0)%2!==0)&&(k=k.replace(/'/g,'"'));try{h=JSON.parse(k),x&&(h={...x,...h})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,E),`${m}${b}${k}`}return h.defaultValue&&h.defaultValue.indexOf(this.prefix)>-1&&delete h.defaultValue,m};for(;c=this.nestingRegexp.exec(a);){let m=[];h={...o},h=h.replace&&!ke(h.replace)?h.replace:h,h.applyPostProcessor=!1,delete h.defaultValue;const x=/{.*}/.test(c[1])?c[1].lastIndexOf("}")+1:c[1].indexOf(this.formatSeparator);if(x!==-1&&(m=c[1].slice(x).split(this.formatSeparator).map(b=>b.trim()).filter(Boolean),c[1]=c[1].slice(0,x)),u=i(p.call(this,c[1].trim(),h),h),u&&c[0]===a&&!ke(u))return u;ke(u)||(u=wx(u)),u||(this.logger.warn(`missed to resolve ${c[1]} for nesting ${a}`),u=""),m.length&&(u=m.reduce((b,v)=>this.format(b,v,o.lng,{...o,interpolationkey:c[1].trim()}),u.trim())),a=a.replace(c[0],u),this.regexp.lastIndex=0}return a}}const Qz=e=>{let a=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const o=e.split("(");a=o[0].toLowerCase().trim();const c=o[1].substring(0,o[1].length-1);a==="currency"&&c.indexOf(":")<0?i.currency||(i.currency=c.trim()):a==="relativetime"&&c.indexOf(":")<0?i.range||(i.range=c.trim()):c.split(";").forEach(h=>{if(h){const[p,...m]=h.split(":"),x=m.join(":").trim().replace(/^'+|'+$/g,""),b=p.trim();i[b]||(i[b]=x),x==="false"&&(i[b]=!1),x==="true"&&(i[b]=!0),isNaN(x)||(i[b]=parseInt(x,10))}})}return{formatName:a,formatOptions:i}},zx=e=>{const a={};return(i,o,c)=>{let u=c;c&&c.interpolationkey&&c.formatParams&&c.formatParams[c.interpolationkey]&&c[c.interpolationkey]&&(u={...u,[c.interpolationkey]:void 0});const h=o+JSON.stringify(u);let p=a[h];return p||(p=e(ws(o),c),a[h]=p),p(i)}},Kz=e=>(a,i,o)=>e(ws(i),o)(a);class Jz{constructor(a={}){this.logger=ya.create("formatter"),this.options=a,this.init(a)}init(a,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const o=i.cacheInBuiltFormats?zx:Kz;this.formats={number:o((c,u)=>{const h=new Intl.NumberFormat(c,{...u});return p=>h.format(p)}),currency:o((c,u)=>{const h=new Intl.NumberFormat(c,{...u,style:"currency"});return p=>h.format(p)}),datetime:o((c,u)=>{const h=new Intl.DateTimeFormat(c,{...u});return p=>h.format(p)}),relativetime:o((c,u)=>{const h=new Intl.RelativeTimeFormat(c,{...u});return p=>h.format(p,u.range||"day")}),list:o((c,u)=>{const h=new Intl.ListFormat(c,{...u});return p=>h.format(p)})}}add(a,i){this.formats[a.toLowerCase().trim()]=i}addCached(a,i){this.formats[a.toLowerCase().trim()]=zx(i)}format(a,i,o,c={}){const u=i.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(m=>m.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,m)=>{const{formatName:x,formatOptions:b}=Qz(m);if(this.formats[x]){let v=p;try{const k=c?.formatParams?.[c.interpolationkey]||{},C=k.locale||k.lng||c.locale||c.lng||o;v=this.formats[x](p,C,{...b,...c,...k})}catch(k){this.logger.warn(k)}return v}else this.logger.warn(`there was no format function for ${x}`);return p},a)}}const eA=(e,a)=>{e.pending[a]!==void 0&&(delete e.pending[a],e.pendingCount--)};class tA extends Ku{constructor(a,i,o,c={}){super(),this.backend=a,this.store=i,this.services=o,this.languageUtils=o.languageUtils,this.options=c,this.logger=ya.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=c.maxParallelReads||10,this.readingCalls=0,this.maxRetries=c.maxRetries>=0?c.maxRetries:5,this.retryTimeout=c.retryTimeout>=1?c.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,c.backend,c)}queueLoad(a,i,o,c){const u={},h={},p={},m={};return a.forEach(x=>{let b=!0;i.forEach(v=>{const k=`${x}|${v}`;!o.reload&&this.store.hasResourceBundle(x,v)?this.state[k]=2:this.state[k]<0||(this.state[k]===1?h[k]===void 0&&(h[k]=!0):(this.state[k]=1,b=!1,h[k]===void 0&&(h[k]=!0),u[k]===void 0&&(u[k]=!0),m[v]===void 0&&(m[v]=!0)))}),b||(p[x]=!0)}),(Object.keys(u).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:c}),{toLoad:Object.keys(u),pending:Object.keys(h),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(m)}}loaded(a,i,o){const c=a.split("|"),u=c[0],h=c[1];i&&this.emit("failedLoading",u,h,i),!i&&o&&this.store.addResourceBundle(u,h,o,void 0,void 0,{skipCopy:!0}),this.state[a]=i?-1:2,i&&o&&(this.state[a]=0);const p={};this.queue.forEach(m=>{Uz(m.loaded,[u],h),eA(m,a),i&&m.errors.push(i),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(x=>{p[x]||(p[x]={});const b=m.loaded[x];b.length&&b.forEach(v=>{p[x][v]===void 0&&(p[x][v]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(m=>!m.done)}read(a,i,o,c=0,u=this.retryTimeout,h){if(!a.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:a,ns:i,fcName:o,tried:c,wait:u,callback:h});return}this.readingCalls++;const p=(x,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(x&&b&&c<this.maxRetries){setTimeout(()=>{this.read.call(this,a,i,o,c+1,u*2,h)},u);return}h(x,b)},m=this.backend[o].bind(this.backend);if(m.length===2){try{const x=m(a,i);x&&typeof x.then=="function"?x.then(b=>p(null,b)).catch(p):p(null,x)}catch(x){p(x)}return}return m(a,i,p)}prepareLoading(a,i,o={},c){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),c&&c();ke(a)&&(a=this.languageUtils.toResolveHierarchy(a)),ke(i)&&(i=[i]);const u=this.queueLoad(a,i,o,c);if(!u.toLoad.length)return u.pending.length||c(),null;u.toLoad.forEach(h=>{this.loadOne(h)})}load(a,i,o){this.prepareLoading(a,i,{},o)}reload(a,i,o){this.prepareLoading(a,i,{reload:!0},o)}loadOne(a,i=""){const o=a.split("|"),c=o[0],u=o[1];this.read(c,u,"read",void 0,void 0,(h,p)=>{h&&this.logger.warn(`${i}loading namespace ${u} for language ${c} failed`,h),!h&&p&&this.logger.log(`${i}loaded namespace ${u} for language ${c}`,p),this.loaded(a,h,p)})}saveMissing(a,i,o,c,u,h={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(i)){this.logger.warn(`did not save key "${o}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const m={...h,isUpdate:u},x=this.backend.create.bind(this.backend);if(x.length<6)try{let b;x.length===5?b=x(a,i,o,c,m):b=x(a,i,o,c),b&&typeof b.then=="function"?b.then(v=>p(null,v)).catch(p):p(null,b)}catch(b){p(b)}else x(a,i,o,c,p,m)}!a||!a[0]||this.store.addResource(a[0],i,o,c)}}}const Nh=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let a={};if(typeof e[1]=="object"&&(a=e[1]),ke(e[1])&&(a.defaultValue=e[1]),ke(e[2])&&(a.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(o=>{a[o]=i[o]})}return a},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ax=e=>(ke(e.ns)&&(e.ns=[e.ns]),ke(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),ke(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e),su=()=>{},nA=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})},i5="__i18next_supportNoticeShown",aA=()=>typeof globalThis<"u"&&!!globalThis[i5],rA=()=>{typeof globalThis<"u"&&(globalThis[i5]=!0)},iA=e=>!!(e?.modules?.backend?.name?.indexOf("Locize")>0||e?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||e?.options?.backend?.backends&&e.options.backend.backends.some(a=>a?.name?.indexOf("Locize")>0||a?.constructor?.name?.indexOf("Locize")>0)||e?.options?.backend?.projectId||e?.options?.backend?.backendOptions&&e.options.backend.backendOptions.some(a=>a?.projectId));class hs extends Ku{constructor(a={},i){if(super(),this.options=Ax(a),this.services={},this.logger=ya,this.modules={external:[]},nA(this),i&&!this.isInitialized&&!a.isClone){if(!this.options.initAsync)return this.init(a,i),this;setTimeout(()=>{this.init(a,i)},0)}}init(a={},i){this.isInitializing=!0,typeof a=="function"&&(i=a,a={}),a.defaultNS==null&&a.ns&&(ke(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const o=Nh();this.options={...o,...this.options,...Ax(a)},this.options.interpolation={...o.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!iA(this)&&!aA()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),rA());const c=x=>x?typeof x=="function"?new x:x:null;if(!this.options.isClone){this.modules.logger?ya.init(c(this.modules.logger),this.options):ya.init(null,this.options);let x;this.modules.formatter?x=this.modules.formatter:x=Jz;const b=new Tx(this.options);this.store=new Ex(this.options.resources,this.options);const v=this.services;v.logger=ya,v.resourceStore=this.store,v.languageUtils=b,v.pluralResolver=new Xz(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),x&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=c(x),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new $x(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new tA(c(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.languageDetector&&(v.languageDetector=c(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=c(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Du(this.services,this.options),this.translator.on("*",(C,...S)=>{this.emit(C,...S)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,i||(i=su),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const x=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);x.length>0&&x[0]!=="dev"&&(this.options.lng=x[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(x=>{this[x]=(...b)=>this.store[x](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(x=>{this[x]=(...b)=>(this.store[x](...b),this)});const p=Jl(),m=()=>{const x=(b,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),i(b,v)};if(this.languages&&!this.isInitialized)return x(null,this.t.bind(this));this.changeLanguage(this.options.lng,x)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(a,i=su){let o=i;const c=ke(a)?a:this.language;if(typeof a=="function"&&(o=a),!this.options.resources||this.options.partialBundledLanguages){if(c?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],h=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(x=>{x!=="cimode"&&u.indexOf(x)<0&&u.push(x)})};c?h(c):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>h(m)),this.options.preload?.forEach?.(p=>h(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(p)})}else o(null)}reloadResources(a,i,o){const c=Jl();return typeof a=="function"&&(o=a,a=void 0),typeof i=="function"&&(o=i,i=void 0),a||(a=this.languages),i||(i=this.options.ns),o||(o=su),this.services.backendConnector.reload(a,i,u=>{c.resolve(),o(u)}),c}use(a){if(!a)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!a.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return a.type==="backend"&&(this.modules.backend=a),(a.type==="logger"||a.log&&a.warn&&a.error)&&(this.modules.logger=a),a.type==="languageDetector"&&(this.modules.languageDetector=a),a.type==="i18nFormat"&&(this.modules.i18nFormat=a),a.type==="postProcessor"&&a5.addPostProcessor(a),a.type==="formatter"&&(this.modules.formatter=a),a.type==="3rdParty"&&this.modules.external.push(a),this}setResolvedLanguage(a){if(!(!a||!this.languages)&&!(["cimode","dev"].indexOf(a)>-1)){for(let i=0;i<this.languages.length;i++){const o=this.languages[i];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(a)<0&&this.store.hasLanguageSomeTranslations(a)&&(this.resolvedLanguage=a,this.languages.unshift(a))}}changeLanguage(a,i){this.isLanguageChangingTo=a;const o=Jl();this.emit("languageChanging",a);const c=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?this.isLanguageChangingTo===a&&(c(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve((...x)=>this.t(...x)),i&&i(p,(...x)=>this.t(...x))},h=p=>{!a&&!p&&this.services.languageDetector&&(p=[]);const m=ke(p)?p:p&&p[0],x=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(ke(p)?[p]:p);x&&(this.language||c(x),this.translator.language||this.translator.changeLanguage(x),this.services.languageDetector?.cacheUserLanguage?.(x)),this.loadResources(x,b=>{u(b,x)})};return!a&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!a&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(a),o}getFixedT(a,i,o){const c=(u,h,...p)=>{let m;typeof h!="object"?m=this.options.overloadTranslationOptionHandler([u,h].concat(p)):m={...h},m.lng=m.lng||c.lng,m.lngs=m.lngs||c.lngs,m.ns=m.ns||c.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||o||c.keyPrefix);const x=this.options.keySeparator||".";let b;return m.keyPrefix&&Array.isArray(u)?b=u.map(v=>(typeof v=="function"&&(v=v0(v,{...this.options,...h})),`${m.keyPrefix}${x}${v}`)):(typeof u=="function"&&(u=v0(u,{...this.options,...h})),b=m.keyPrefix?`${m.keyPrefix}${x}${u}`:u),this.t(b,m)};return ke(a)?c.lng=a:c.lngs=a,c.ns=i,c.keyPrefix=o,c}t(...a){return this.translator?.translate(...a)}exists(...a){return this.translator?.exists(...a)}setDefaultNamespace(a){this.options.defaultNS=a}hasLoadedNamespace(a,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=i.lng||this.resolvedLanguage||this.languages[0],c=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const h=(p,m)=>{const x=this.services.backendConnector.state[`${p}|${m}`];return x===-1||x===0||x===2};if(i.precheck){const p=i.precheck(this,h);if(p!==void 0)return p}return!!(this.hasResourceBundle(o,a)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(o,a)&&(!c||h(u,a)))}loadNamespaces(a,i){const o=Jl();return this.options.ns?(ke(a)&&(a=[a]),a.forEach(c=>{this.options.ns.indexOf(c)<0&&this.options.ns.push(c)}),this.loadResources(c=>{o.resolve(),i&&i(c)}),o):(i&&i(),Promise.resolve())}loadLanguages(a,i){const o=Jl();ke(a)&&(a=[a]);const c=this.options.preload||[],u=a.filter(h=>c.indexOf(h)<0&&this.services.languageUtils.isSupportedCode(h));return u.length?(this.options.preload=c.concat(u),this.loadResources(h=>{o.resolve(),i&&i(h)}),o):(i&&i(),Promise.resolve())}dir(a){if(a||(a=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!a)return"rtl";try{const c=new Intl.Locale(a);if(c&&c.getTextInfo){const u=c.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Tx(Nh());return a.toLowerCase().indexOf("-latn")>1?"ltr":i.indexOf(o.getLanguagePartFromCode(a))>-1||a.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(a={},i){const o=new hs(a,i);return o.createInstance=hs.createInstance,o}cloneInstance(a={},i=su){const o=a.forkResourceStore;o&&delete a.forkResourceStore;const c={...this.options,...a,isClone:!0},u=new hs(c);if((a.debug!==void 0||a.prefix!==void 0)&&(u.logger=u.logger.clone(a)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const p=Object.keys(this.store.data).reduce((m,x)=>(m[x]={...this.store.data[x]},m[x]=Object.keys(m[x]).reduce((b,v)=>(b[v]={...m[x][v]},b),m[x]),m),{});u.store=new Ex(p,c),u.services.resourceStore=u.store}if(a.interpolation){const m={...Nh().interpolation,...this.options.interpolation,...a.interpolation},x={...c,interpolation:m};u.services.interpolator=new $x(x)}return u.translator=new Du(u.services,c),u.translator.on("*",(p,...m)=>{u.emit(p,...m)}),u.init(c,i),u.translator.options=c,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ke=hs.createInstance();Ke.createInstance;Ke.dir;Ke.init;Ke.loadResources;Ke.reloadResources;Ke.use;Ke.changeLanguage;Ke.getFixedT;Ke.t;Ke.exists;Ke.setDefaultNamespace;Ke.hasLoadedNamespace;Ke.loadNamespaces;Ke.loadLanguages;const oA=(e,a,i,o)=>{const c=[i,{code:a,...o||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(c,"warn","react-i18next::",!0);Ri(c[0])&&(c[0]=`react-i18next:: ${c[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...c):console?.warn&&console.warn(...c)},Rx={},o5=(e,a,i,o)=>{Ri(i)&&Rx[i]||(Ri(i)&&(Rx[i]=new Date),oA(e,a,i,o))},l5=(e,a)=>()=>{if(e.isInitialized)a();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),a()};e.on("initialized",i)}},x0=(e,a,i)=>{e.loadNamespaces(a,l5(e,i))},Dx=(e,a,i,o)=>{if(Ri(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(a)>-1)return x0(e,i,o);i.forEach(c=>{e.options.ns.indexOf(c)<0&&e.options.ns.push(c)}),e.loadLanguages(a,l5(e,o))},lA=(e,a,i={})=>!a.languages||!a.languages.length?(o5(a,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:a.languages}),!0):a.hasLoadedNamespace(e,{lng:i.lng,precheck:(o,c)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!c(o.isLanguageChangingTo,e))return!1}}),Ri=e=>typeof e=="string",sA=e=>typeof e=="object"&&e!==null,cA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,uA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},dA=e=>uA[e],fA=e=>e.replace(cA,dA);let y0={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:fA,transDefaultProps:void 0};const hA=(e={})=>{y0={...y0,...e}},gA=()=>y0;let s5;const pA=e=>{s5=e},mA=()=>s5,vA={type:"3rdParty",init(e){hA(e.options.react),pA(e)}},xA=f.createContext();class yA{constructor(){this.usedNamespaces={}}addUsedNamespaces(a){a.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Hh={exports:{}},Bh={};var _x;function bA(){if(_x)return Bh;_x=1;var e=Di();function a(v,k){return v===k&&(v!==0||1/v===1/k)||v!==v&&k!==k}var i=typeof Object.is=="function"?Object.is:a,o=e.useState,c=e.useEffect,u=e.useLayoutEffect,h=e.useDebugValue;function p(v,k){var C=k(),S=o({inst:{value:C,getSnapshot:k}}),E=S[0].inst,T=S[1];return u(function(){E.value=C,E.getSnapshot=k,m(E)&&T({inst:E})},[v,C,k]),c(function(){return m(E)&&T({inst:E}),v(function(){m(E)&&T({inst:E})})},[v]),h(C),C}function m(v){var k=v.getSnapshot;v=v.value;try{var C=k();return!i(v,C)}catch{return!0}}function x(v,k){return k()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x:p;return Bh.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:b,Bh}var Nx;function wA(){return Nx||(Nx=1,Hh.exports=bA()),Hh.exports}var SA=wA();const CA=(e,a)=>Ri(a)?a:sA(a)&&Ri(a.defaultValue)?a.defaultValue:Array.isArray(e)?e[e.length-1]:e,kA={t:CA,ready:!1},EA=()=>()=>{},ig=(e,a={})=>{const{i18n:i}=a,{i18n:o,defaultNS:c}=f.useContext(xA)||{},u=i||o||mA();u&&!u.reportNamespaces&&(u.reportNamespaces=new yA),u||o5(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const h=f.useMemo(()=>({...gA(),...u?.options?.react,...a}),[u,a]),{useSuspense:p,keyPrefix:m}=h,x=e||c||u?.options?.defaultNS,b=Ri(x)?[x]:x||["translation"],v=f.useMemo(()=>b,b);u?.reportNamespaces?.addUsedNamespaces?.(v);const k=f.useRef(0),C=f.useCallback(F=>{if(!u)return EA;const{bindI18n:J,bindI18nStore:q}=h,ee=()=>{k.current+=1,F()};return J&&u.on(J,ee),q&&u.store.on(q,ee),()=>{J&&J.split(" ").forEach(re=>u.off(re,ee)),q&&q.split(" ").forEach(re=>u.store.off(re,ee))}},[u,h]),S=f.useRef(),E=f.useCallback(()=>{if(!u)return kA;const F=!!(u.isInitialized||u.initializedStoreOnce)&&v.every(ne=>lA(ne,u,h)),J=a.lng||u.language,q=k.current,ee=S.current;if(ee&&ee.ready===F&&ee.lng===J&&ee.keyPrefix===m&&ee.revision===q)return ee;const Q={t:u.getFixedT(J,h.nsMode==="fallback"?v:v[0],m),ready:F,lng:J,keyPrefix:m,revision:q};return S.current=Q,Q},[u,v,m,h,a.lng]),[T,M]=f.useState(0),{t:z,ready:_}=SA.useSyncExternalStore(C,E,E);f.useEffect(()=>{if(u&&!_&&!p){const F=()=>M(J=>J+1);a.lng?Dx(u,a.lng,v,F):x0(u,v,F)}},[u,a.lng,v,_,p,T]);const B=u||{},N=f.useRef(null),U=f.useRef(),L=F=>{const J=Object.getOwnPropertyDescriptors(F);J.__original&&delete J.__original;const q=Object.create(Object.getPrototypeOf(F),J);if(!Object.prototype.hasOwnProperty.call(q,"__original"))try{Object.defineProperty(q,"__original",{value:F,writable:!1,enumerable:!1,configurable:!1})}catch{}return q},R=f.useMemo(()=>{const F=B,J=F?.language;let q=F;F&&(N.current&&N.current.__original===F?U.current!==J?(q=L(F),N.current=q,U.current=J):q=N.current:(q=L(F),N.current=q,U.current=J));const ee=[z,q,_];return ee.t=z,ee.i18n=q,ee.ready=_,ee},[z,B,_,B.resolvedLanguage,B.language,B.languages]);if(u&&p&&!_)throw new Promise(F=>{const J=()=>F();a.lng?Dx(u,a.lng,v,J):x0(u,v,J)});return R},jA=y.div`
  margin: 0;
`,TA=y.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,MA=y.div`
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: 20px;
  color: var(--grey-9);
`,LA="full.name@example.com",OA=!0,$A=!0,zA=!0,AA="#",RA=()=>{const{onThemeToggle:e,isLightMode:a}=Ls(),{t:i}=ig(["GlobalUI","Common"]),o=f.useCallback(()=>{const u=Ke.language==="ja"?"en":"ja";Ke.changeLanguage(u),localStorage.setItem("language",u)},[]),c=s.jsx(TA,{children:s.jsxs(MA,{children:[s.jsx("p",{children:i("Common:userDrawerTextP1")}),s.jsx("p",{children:i("Common:userDrawerTextP2")})]})});return s.jsxs(jA,{children:[s.jsx(hn,{children:"CustomUserDrawerPage.tsx"}),s.jsx(J2,{userDrawerBespoke:c,loggedInUser:LA,hasSearch:OA,useNotifications:$A,logoutLink:AA,searchPlaceholder:i("Common:searchPlaceholder"),isLightMode:a,switchThemeText:i("GlobalUI:theme.switchTheme"),selectedThemeText:i(a?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,hasLanguage:zA,onLanguageToggle:o,selectedLangAttribute:Ke.language,selectedLanguageText:i(`GlobalUI:theme.${Ke.language}`),accountOptionText:i("Common:accountOptions"),currentUserText:i("GlobalUI:currentUser"),userSubmenu:[{href:"/user/accounts",text:i("Common:accounts")},{href:"/user/billing",text:i("Common:billing")},{href:"/user/payments",text:i("Common:payments")}]})]})},DA=y.div`
  margin: 100px 200px;
`,_A=y.div`
  height: 1px;
  border-radius: 3px;
  background-color: var(--grey-4);
  margin-left: 0px;
`,NA=y.div`
  margin-top: 20px;
`,HA=y.div`
  margin-top: 20px;
`,BA=()=>s.jsxs(DA,{children:[s.jsx(hn,{children:"TabsPage.tsx"}),s.jsxs($s,{children:[s.jsx(wa,{title:"Tabs Example",areaTitle:"Examples",areaHref:"/"}),s.jsxs(eg,{children:[s.jsxs(ng,{defaultTabId:"tab1",children:[s.jsx(ds,{tabFor:"tab1",children:"Tab 1"}),s.jsx(ds,{tabFor:"tab2",children:"Tab 2"})]}),s.jsx(_A,{}),s.jsx(ar,{tabId:"tab1",children:s.jsxs(NA,{children:[s.jsx(Bt,{htmlFor:"fullname",labelText:"Content of tab 1"}),s.jsx(Et,{fieldState:"default",required:!0,label:"Full Name",name:"fullname",id:"fullname"}),s.jsx(Et,{fieldState:"default",required:!0,label:"Department",name:"department",id:"department"}),s.jsx(nt,{design:"primary",size:"small",children:" Save "})]})}),s.jsx(ar,{tabId:"tab2",children:s.jsxs(HA,{children:[s.jsx(Bt,{htmlFor:"content2",labelText:"Content of tab 2"}),s.jsx(Bt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),s.jsx(nt,{design:"primary",size:"small",children:" OK "})]})})]})]})]}),es=y.div`
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
`,UA=[{id:"primaryBase0",buttonType:"default",text:"Example Action 1"},{id:"secondaryBase1",buttonType:"default",text:"Example Action 2",design:"secondary"},{id:"buttonWithIcon2",buttonType:"icon-button",text:"Delete Instance",design:"warning",icon:"DevicesScorerEdge"}],IA=()=>{const{onThemeToggle:e,isLightMode:a}=Ls();return s.jsxs(Gu,{theme:Ts,children:[s.jsx(hn,{children:"GlobalUIPage.tsx"}),s.jsxs(ag,{accountOptionText:"Account Options",canAlwaysPin:!0,legacyLayout:!0,isLightMode:a,switchThemeText:"SWITCH THEME",selectedThemeText:a?"LIGHT MODE":"DARK MODE",onThemeToggle:e,hasSwitchTheme:!0,content:{items:[{href:"/welcome",icon:"Home",title:"Welcome"},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:"About us"},{href:"/company/team",title:"Team"},{href:"/company/contact",title:"Contact"},{href:"/company/table-example",title:"Table Example"},{href:"https://www.google.com/",isExternalLink:!0,title:"External link"}],title:"Company"},{href:"/services",icon:"Usage",submenu:[{title:"Online Services"},{href:"/services/custom",title:"Service custom"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"},{title:"On site Services"},{href:"/services/special",title:"Service special"},{href:"/services/extra-special",title:"Service extra special"}],title:"Services"},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:"External link"}]},currentUserText:"Current User",customDrawer:{customComponent:s.jsx("h1",{children:"Hello Drawer"}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"1200px",notificationsHistory:{noNotificationsText:"No new notifications",read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:"New",unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:"Read"},searchPlaceholder:"Search area names, etc.",supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:"Accounts"},{href:"/user/billing",text:"Billing"},{href:"/user/payments",text:"Payments"}],children:[s.jsx(wa,{title:"Welcome",introductionText:"Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. ",rightContent:s.jsx(g2,{buttons:UA})}),s.jsxs(es,{children:[s.jsx("h2",{children:"What is Lorem Ipsum?"}),s.jsx("p",{children:"Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur. Enim magna sunt elit aliqua reprehenderit."})]}),s.jsxs(es,{children:[s.jsx("h2",{children:"Why do we use it?"}),s.jsx("p",{children:"Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit. Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do. Eiusmod nisi elit fugiat occaecat elit culpa est qui."})]}),s.jsxs(es,{children:[s.jsx("h2",{children:"Where does it come from?"}),s.jsx("p",{children:"Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt voluptate laborum esse minim."})]}),s.jsxs(es,{children:[s.jsx("h2",{children:"Where can I get some?"}),s.jsx("p",{children:"Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum tempor incididunt irure duis mollit."})]}),s.jsxs(es,{children:[s.jsx("h2",{children:"Example"}),s.jsx("p",{children:"Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat."})]})]})]})},GA=y.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,qA=y.div`
  --error: red;
  --info: blue;

  display: flex;
  flex-direction: column;
  gap: 8px;
`,PA=()=>s.jsxs(GA,{children:[s.jsx(hn,{children:"CustomAlertsPage.tsx"}),s.jsx("h3",{children:"Default Based Colors"}),s.jsx(tr,{message:"Base color error message",type:"error",hideCloseButton:!0}),s.jsx(tr,{message:"Base color info message",type:"info",hideCloseButton:!0}),s.jsxs(qA,{children:[s.jsx("h3",{children:"Custom Local file Colors"}),s.jsx(tr,{message:"Custom color error message",type:"error",hideCloseButton:!0}),s.jsx(tr,{message:"Custom color info message",type:"info",hideCloseButton:!0})]}),s.jsx("h3",{children:"Custom Global Project Colors"}),s.jsx(tr,{message:"Custom color success message",type:"success",hideCloseButton:!0}),s.jsx(tr,{message:"Custom color warning message",type:"warning",hideCloseButton:!0})]}),FA=y.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--grey-8) 1px dotted;
  margin-bottom: 20px;
`,WA=()=>{const{onThemeToggle:e,isLightMode:a}=Ls(),{t:i}=ig(["GlobalUI","Common"]),o=f.useCallback(()=>{const h=Ke.language==="ja"?"en":"ja";Ke.changeLanguage(h),localStorage.setItem("language",h)},[]),c=[{id:"primaryBase0",buttonType:"default",text:i("Common:exampleAction")}],u={UtilityHeaderOptions:{back:{label:i("Common:breadcrumbs.back"),link:"/"},breadcrumbs:[{text:i("Common:breadcrumbs.firstText"),href:"/"},{text:i("Common:breadcrumbs.secondText"),href:"#2"},{text:i("Common:breadcrumbs.thirdText"),href:"#3"},{text:i("Common:breadcrumbs.fourText"),href:"#4"},{text:i("Common:breadcrumbs.fiveText"),href:"#5"}],showBreadcrumbs:!0,share:{show:!0,label:i("Common:share"),link:"https://www.example.com",copiedLabel:"Copied"}},PageHeaderArea:s.jsx(wa,{title:i("Common:pageTitle"),introductionText:i("Common:pageIntroduction"),icon:"Home",rightContent:s.jsx(g2,{buttons:c})}),TabsElementArea:s.jsxs(ng,{defaultTabId:"tab1",children:[s.jsx(ds,{tabFor:"tab1",children:i("Common:home")}),s.jsx(ds,{tabFor:"tab2",children:i("Common:example1")}),s.jsx(ds,{tabFor:"tab3",children:i("Common:example2")})]})};return s.jsxs(Gu,{theme:Ts,children:[s.jsx(hn,{children:"Layouts.tsx"}),s.jsx(ag,{accountOptionText:i("Common:accountOptions"),canAlwaysPin:!0,isLightMode:a,switchThemeText:i("GlobalUI:theme.switchTheme"),selectedThemeText:i(a?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:o,selectedLangAttribute:Ke.language,selectedLanguageText:i(`GlobalUI:theme.${Ke.language}`),badge:{text:i("Common:badgeTitle"),color:"primary",linkTo:"#",linkText:i("GlobalUI:login")},hasSwitchTheme:!0,keepOpenText:i("GlobalUI:keepOpenText"),autoHideText:i("GlobalUI:autoHideText"),supportText:i("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:i("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:i("Common:aboutUs")},{href:"/company/team",title:i("Common:team")},{href:"/company/contact",title:i("Common:contact")},{href:"/company/table-example",title:i("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:i("Common:externalLink")}],title:i("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:i("Common:onlineServices")},{href:"/services/custom",title:i("Common:serviceCustom")},{href:"/services/special",title:i("Common:serviceSpecial")},{href:"/services/extra-special",title:i("Common:serviceExtraSpecial")},{title:i("Common:onSiteServices")},{href:"/services/special",title:i("Common:serviceSpecial")},{href:"/services/extra-special",title:i("Common:serviceExtraSpecial")}],title:i("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:i("Common:externalLink")}]},currentUserText:i("GlobalUI:currentUser"),customDrawer:{customComponent:s.jsx("h1",{style:{textAlign:"center"},children:i("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:i("GlobalUI:logout"),maxWidth:"none",notificationsHistory:{noNotificationsText:i("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:i("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:i("Common:unreadNotificationsText")},searchPlaceholder:i("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:i("Common:accounts")},{href:"/user/billing",text:i("Common:billing")},{href:"/user/payments",text:i("Common:payments")}],children:s.jsxs(H2,{layout:"default",HeaderContent:u,children:[s.jsx(ar,{tabId:"tab1",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Full Width Container"}),s.jsx("p",{children:i("Common:descriptionTab1")}),s.jsx(qL,{children:s.jsx(FA,{})}),s.jsx("h2",{children:"Lorem Ipsum"}),s.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),s.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),s.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),s.jsx("h2",{children:"Dolor Sit Amet"}),s.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),s.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),s.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),s.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),s.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."}),s.jsx("h2",{children:"Proident Nostrud"}),s.jsx("p",{children:"In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat."}),s.jsx("p",{children:"Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna."}),s.jsx("p",{children:"Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt."}),s.jsx("p",{children:"Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum."}),s.jsx("p",{children:"Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim."})]})}),s.jsx(ar,{tabId:"tab2",children:s.jsxs("div",{children:[s.jsx(Bt,{htmlFor:"fullname",labelText:i("Common:titleTab2")}),s.jsx(Et,{fieldState:"default",required:!0,label:i("Common:formName"),name:"fullname",id:"fullname"}),s.jsx(Et,{fieldState:"default",required:!0,label:i("Common:formDepartment"),name:"department",id:"department"}),s.jsx(nt,{design:"primary",size:"small",children:" Save "})]})}),s.jsx(ar,{tabId:"tab3",children:s.jsxs("div",{children:[s.jsx(Bt,{htmlFor:"content2",labelText:i("Common:titleTab3")}),s.jsx(Bt,{htmlFor:"lorem",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor."}),s.jsx(nt,{design:"primary",size:"small",children:" OK "})]})})]})})]})},VA=()=>{const{onThemeToggle:e,isLightMode:a}=Ls(),{t:i}=ig(["GlobalUI","Common"]),[o]=f.useState("horizontal"),[c]=f.useState(!1),u=f.useCallback(()=>{const x=Ke.language==="ja"?"en":"ja";Ke.changeLanguage(x),localStorage.setItem("language",x)},[]),h=f.useCallback(x=>{console.log(`Side Area Current State: ${x}`)},[]),p=s.jsx(Hv,{title:"Main Area"}),m=s.jsx(Hv,{title:"Side Area"});return s.jsxs(Gu,{theme:Ts,children:[s.jsx(hn,{children:"SplitLayout.tsx"}),s.jsx(ag,{accountOptionText:i("Common:accountOptions"),canAlwaysPin:!0,isLightMode:a,switchThemeText:i("GlobalUI:theme.switchTheme"),selectedThemeText:i(a?"GlobalUI:theme.lightMode":"GlobalUI:theme.darkMode"),onThemeToggle:e,onLanguageToggle:u,selectedLangAttribute:Ke.language,selectedLanguageText:i(`GlobalUI:theme.${Ke.language}`),hasSwitchTheme:!0,keepOpenText:i("GlobalUI:keepOpenText"),autoHideText:i("GlobalUI:autoHideText"),supportText:i("GlobalUI:supportText"),content:{items:[{href:"/welcome",icon:"Home",title:i("Common:pageTitle")},{href:"/company",icon:"Detection",submenu:[{href:"/company/about",title:i("Common:aboutUs")},{href:"/company/team",title:i("Common:team")},{href:"/company/contact",title:i("Common:contact")},{href:"/company/table-example",title:i("Common:tableExample")},{href:"https://www.google.com/",isExternalLink:!0,title:i("Common:externalLink")}],title:i("Common:company")},{href:"/services",icon:"Usage",submenu:[{title:i("Common:onlineServices")},{href:"/services/custom",title:i("Common:serviceCustom")},{href:"/services/special",title:i("Common:serviceSpecial")},{href:"/services/extra-special",title:i("Common:serviceExtraSpecial")},{title:i("Common:onSiteServices")},{href:"/services/special",title:i("Common:serviceSpecial")},{href:"/services/extra-special",title:i("Common:serviceExtraSpecial")}],title:i("Common:services")},{href:"https://www.google.com/maps",icon:"Zone",isExternalLink:!0,title:i("Common:externalLink")}]},currentUserText:i("GlobalUI:currentUser"),customDrawer:{customComponent:s.jsx("h1",{style:{textAlign:"center"},children:i("Common:helloDrawer")}),icon:"Add",status:"danger",width:"280px;"},hasCurrentUser:!0,hasLanguage:!0,hasLogout:!0,hasNotifications:!0,hasSearch:!0,home:"#",loggedInUser:"full.name@example.com",logoutLink:"#",logoutText:"Logout",maxWidth:"none",notificationsHistory:{noNotificationsText:i("Common:noNotificationsText"),read:[{imgUrl:"",message:"The device has correctly turn off",time:"3 days ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"3 days ago",title:"Device is on"},{imgUrl:"",message:"The device has bean correctly added",time:"3 days ago",title:"A new device was added"}],readNotificationsText:i("Common:readNotificationsText"),unread:[{imgUrl:"",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now",title:"Event Type"},{imgUrl:"",message:"The device has correctly turn off",time:"1 min ago",title:"Device is off"},{imgUrl:"",message:"The device has correctly turn on",time:"6 mins ago",title:"Device is on"},{imgUrl:"",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago",title:"Connection was interrupted"},{imgUrl:"",message:"The device has correctly turn off",time:"3 hour ago",title:"Device is off"}],unreadNotificationsText:i("Common:unreadNotificationsText")},searchPlaceholder:i("Common:searchPlaceholder"),supportUrl:"/support",userSubmenu:[{href:"/user/accounts",text:i("Common:accounts")},{href:"/user/billing",text:i("Common:billing")},{href:"/user/payments",text:i("Common:payments")}],children:s.jsx(H2,{layout:"dashboard",children:s.jsx(KL,{layout:o,persist:!0,persistenceKey:"my_unique_key",reverse:c,mainArea:{content:p,minSize:120},sideArea:{content:m,collapsable:!0,minSize:200,defaultCollapsed:!0,onSideAreaStateChange:h}})})})]})},YA=y.div`
  padding: 50px;
`,Hx=y.div`
  margin-top: 30px;
`,Bx=y.div`
  margin-top: 30px;
  margin-bottom: 60px;
`,ZA=y.div`
  font-size: 18px;
  font-weight: 600;
`,XA=y.div`
  margin-top: 10px;
`,QA=e=>new Promise((a,i)=>{setTimeout(()=>{e?i(new Error("Simulated fetch failure")):a([{id:1,title:"Mock Product 1"},{id:2,title:"Mock Product 2"},{id:3,title:"Mock Product 3"}])},1500)}),KA=()=>{const[e,a]=f.useState(!1),[i,o]=f.useState(null),[c,u]=f.useState(!1),[h,p]=f.useState(null),[m,x]=f.useState("default"),[b,v]=f.useState(!1),k=f.useCallback(async()=>{if(x("default"),e||h!==null){a(!1),o(null),p(null);return}u(!0),x("loading"),p(null);try{const S=await QA(b);o(S),a(!0),x("default")}catch{o(null),p("Failed to fetch data"),x("failure")}finally{u(!1)}},[e,b,h]),C=f.useCallback(S=>{v(S),a(!1),o(null),p(null),x("default")},[]);return s.jsxs(YA,{children:[s.jsx(wa,{title:"Switch Component Examples",icon:"Settings"}),s.jsxs(Bx,{children:[s.jsx(wa,{title:"Uncontrolled Component",introductionText:"This switch uses defaultChecked prop and manages its own state internally"}),s.jsx(Hx,{children:s.jsx(Po,{labelText:"Toggle Switch (Uncontrolled)",defaultChecked:!0,onChangeCallback:S=>console.log("Uncontrolled switch changed:",S)})})]}),s.jsxs(Bx,{children:[s.jsx(wa,{title:"Controlled Component",introductionText:"This switch uses checked and onChangeCallback props to control its state"}),s.jsx(Bt,{labelText:"Show Fail Scenario",htmlFor:"example1",direction:"row",children:s.jsx(P0,{checked:b,onChangeCallback:C},"example1")}),s.jsxs(Hx,{children:[s.jsx(Po,{labelText:"Fetch Data (Controlled)",checked:e,onChangeCallback:k,state:m}),c&&s.jsx("p",{children:"Loading..."}),i&&s.jsxs(XA,{children:[s.jsx(ZA,{children:"API Response"}),s.jsx("ul",{children:i.map(S=>s.jsx("li",{children:S.username||S.title},S.id))})]}),h&&s.jsx("p",{style:{color:"red"},children:h})]})]})]})},og=2e3,JA=(e=()=>{},a=1e3)=>{const i=f.useRef(null),o=f.useRef(e),c=f.useRef(!1),u=f.useCallback(async()=>{i.current!==null&&(clearTimeout(i.current),i.current=null),await o.current(),c.current||(i.current=setTimeout(u,a))},[a]);f.useEffect(()=>{o.current=e},[e]),f.useEffect(()=>(u(),()=>{c.current=!0,i.current!==null&&(clearTimeout(i.current),i.current=null)}),[u])},eR=y.div`
  padding: 50px;
`,tR=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`,Ux=y.div`
  border-radius: 4px;
  border: 1px solid ${({$variant:e})=>e==="broken"?"var(--caution-8)":"var(--success-8)"};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ix=y.h3`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-12);
  margin: 0;
`,nR=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 92px;
`,Uh=y.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`,Ih=y.span`
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--grey-9);
  min-width: 88px;
`,aR=y.span`
  font-family: var(--font-data);
  font-size: 28px;
  font-weight: 600;
  color: var(--grey-12);
`,rR=y.span`
  font-family: var(--font-data);
  font-size: 14px;
  color: var(--grey-11);
`,Gx=y.div`
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
`,qx=y.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`,iR=y.div`
  margin: 8px 0 24px;
  padding: 16px 20px;
  background: var(--grey-2);
  border-radius: 4px;
  border-left: 3px solid var(--primary-7);
  font-family: var(--font-data);
  font-size: 13px;
  line-height: 1.8;
  color: var(--grey-11);
`,Gh=y.p`
  margin: 0 0 10px;
  &:last-child {
    margin-bottom: 0;
  }
`,Mt=y.code`
  color: var(--primary-9);
  font-family: var(--font-data);
`,oR=y.span`
  color: var(--caution-9);
`,lR=y.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 6px;
`,$o=y.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`,qh=y.span`
  font-weight: 600;
  color: var(--grey-12);
`,zo=y.span`
  color: var(--grey-11);
`,c5=e=>{const[a,i]=f.useState(!1),o=f.useRef(null);return f.useEffect(()=>{if(e!==0)return i(!0),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>i(!1),Math.round(og*1.4)),()=>{o.current&&clearTimeout(o.current)}},[e]),a},u5=({count:e,lastPolled:a,isPolling:i})=>{const o=e===0?"Waiting…":i?"Polling continuously":"Stopped",c=e===0?"":i?"Success":"BigWarning";return s.jsxs(nR,{children:[s.jsxs(Uh,{children:[s.jsx(Ih,{children:"Poll count"}),s.jsx(aR,{children:e})]}),s.jsxs(Uh,{children:[s.jsx(Ih,{children:"Last polled"}),s.jsx(rR,{children:a})]}),s.jsxs(Uh,{children:[s.jsx(Ih,{children:"Status"}),s.jsx(L2,{tagSize:"compact",label:o,icon:c})]})]})},sR=()=>{const[e,a]=f.useState(0),[i,o]=f.useState("—"),c=c5(e),u=f.useCallback(()=>{a(h=>h+1),o(new Date().toLocaleTimeString())},[]);return JA(u,og),s.jsx(u5,{count:e,lastPolled:i,isPolling:c})},cR=()=>{const[e,a]=f.useState(0),[i,o]=f.useState("—"),c=c5(e),u=f.useCallback(()=>{a(h=>h+1),o(new Date().toLocaleTimeString())},[]);return sE(u,og),s.jsx(u5,{count:e,lastPolled:i,isPolling:c})},uR=()=>{const[e,a]=f.useState(!0),[i,o]=f.useState(!0);return s.jsxs(eR,{children:[s.jsx(wa,{title:"usePoll — StrictMode Fix",introductionText:"Side-by-side comparison of usePoll before and after the StrictMode canceled-ref fix. In development (StrictMode active), the Before panel polls once then stops; the After panel polls continuously. Use Unmount / Remount to reset and replay."}),s.jsxs(iR,{children:[s.jsx(Gh,{children:"⚠️ The difference is only visible in development builds with React StrictMode active. In production both panels behave identically."}),s.jsxs(Gh,{children:[s.jsx("strong",{children:"React 16 & 17:"})," StrictMode double-invokes ",s.jsx("em",{children:"render functions"})," only."," ",s.jsx(Mt,{children:"useEffect"})," callbacks run ",s.jsx("strong",{children:"once"})," on mount. ",s.jsx(Mt,{children:"canceled.current"})," starts as ",s.jsx(Mt,{children:"false"}),", ",s.jsx(Mt,{children:"pollOnce()"})," fires, the check ",s.jsx(Mt,{children:"if (!canceled.current)"})," passes, and the chain keeps scheduling. No bug."]}),s.jsxs(Gh,{children:[s.jsx("strong",{children:"React 18 & 19:"})," StrictMode was extended to also double-invoke ",s.jsx("em",{children:"effects"})," — it simulates mount → cleanup → remount to help surface bugs. The sequence becomes:"]}),s.jsxs(lR,{children:[s.jsxs($o,{children:[s.jsx(qh,{children:"1. Mount"}),s.jsxs(zo,{children:["→ ",s.jsx(Mt,{children:"useEffect"})," runs → ",s.jsx(Mt,{children:"canceled.current"})," is false → ",s.jsx(Mt,{children:"pollOnce()"})," starts"]})]}),s.jsxs($o,{children:[s.jsx(qh,{children:"2. Cleanup"}),s.jsxs(zo,{children:["→ ",s.jsx(Mt,{children:"canceled.current"})," = true (timer cleared)"]})]}),s.jsxs($o,{children:[s.jsx(qh,{children:"3. Remount"}),s.jsxs(zo,{children:["→ ",s.jsx(Mt,{children:"useEffect"})," runs again → ",s.jsx(Mt,{children:"pollOnce()"})," called"]})]}),s.jsxs($o,{children:[s.jsx("span",{}),s.jsx(zo,{children:"→ callback fires (async await)"})]}),s.jsxs($o,{children:[s.jsx("span",{}),s.jsxs(zo,{children:["→ checks ",s.jsx(Mt,{children:"canceled.current"})," → still true ",s.jsx(oR,{children:"← bug stops here"})]})]}),s.jsxs($o,{children:[s.jsx("span",{}),s.jsx(zo,{children:"→ never schedules next poll"})]})]})]}),s.jsxs(tR,{children:[s.jsxs(Ux,{$variant:"broken",children:[s.jsx(Ix,{children:"Before — broken pattern"}),s.jsxs(qx,{children:[s.jsx(Mt,{children:"canceled.current"})," is never reset on remount. In StrictMode the cleanup sets it to ",s.jsx(Mt,{children:"true"}),"; on remount"," ",s.jsx(Mt,{children:"pollOnce()"})," runs once, sees ",s.jsx(Mt,{children:"canceled === true"}),", and never schedules the next poll."]}),e?s.jsx(sR,{}):s.jsx(Gx,{children:"Component unmounted — click Remount to replay"}),s.jsx(nt,{design:"secondary",size:"small",onClick:()=>a(c=>!c),children:e?"Unmount":"Remount"})]}),s.jsxs(Ux,{$variant:"fixed",children:[s.jsx(Ix,{children:"After — fixed pattern"}),s.jsxs(qx,{children:[s.jsx(Mt,{children:"canceled.current = false"})," is set at the top of the effect, before ",s.jsx(Mt,{children:"pollOnce()"})," is called. The StrictMode remount resets the flag and polling continues on schedule."]}),i?s.jsx(cR,{}):s.jsx(Gx,{children:"Component unmounted — click Remount to replay"}),s.jsx(nt,{design:"secondary",size:"small",onClick:()=>o(c=>!c),children:i?"Unmount":"Remount"})]})]}),s.jsx(hn,{children:"UsePollTestPage.tsx"})]})},dR=()=>s.jsx(iC,{children:s.jsxs(D9,{children:[s.jsx(_t,{path:"/",element:s.jsx(iz,{})}),s.jsx(_t,{path:"/line",element:s.jsx(K$,{})}),s.jsx(_t,{path:"/linevideo",element:s.jsx(nz,{})}),s.jsx(_t,{path:"/linertc",element:s.jsx(ez,{})}),s.jsx(_t,{path:"/login",element:s.jsx(Oz,{onLogin:()=>{}})}),s.jsx(_t,{path:"/forms",element:s.jsx(Q$,{})}),s.jsx(_t,{path:"/table",element:s.jsx(_z,{})}),s.jsx(_t,{path:"/customdrawer",element:s.jsx(RA,{})}),s.jsx(_t,{path:"/ptz",element:s.jsx(FM,{socketUrl:"ws://localhost/wsapp/",imageRefresh:2e3,children:s.jsx(sz,{})})}),s.jsx(_t,{path:"/tabs",element:s.jsx(BA,{})}),s.jsx(_t,{path:"/customalert",element:s.jsx(PA,{})}),s.jsx(_t,{path:"/globalUI",element:s.jsx(IA,{})}),s.jsx(_t,{path:"/layouts",element:s.jsx(WA,{})}),s.jsx(_t,{path:"/split-layouts",element:s.jsx(VA,{})}),s.jsx(_t,{path:"/switch-test",element:s.jsx(KA,{})}),s.jsx(_t,{path:"/usepoll-test",element:s.jsx(uR,{})})]})});window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function fR(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}const hR="Powered By:",gR="Welcome",pR="Guest",mR="Share",vR="Home",xR="Example Action",yR="Thanks for using our UI library.",bR="Example 1",wR="Example 2",SR="Account Options",CR="About us",kR="Team",ER="Contact",jR="Company",TR="Table Example",MR="External link",LR="Online Services",OR="Service custom",$R="Service special",zR="Service Extra Special",AR="On site Services",RR="Services",DR="Example Drawer",_R="No new notifications",NR="Read",HR="UnRead",BR="Search area names, etc.",UR="Accounts",IR="Billing",GR="Payments",qR="The below line uses the FullWidthContentBlock component to break out of the layout and span the full width of the browser.",PR="Content Tab 2",FR="Content Tab 3",WR="Name",VR="Department",YR="Custom content can be injected under the user menu like this.",ZR="The styling for this is left to you to include, keeping it flexible.",XR={back:"Back",firstText:"Examples",secondText:"Two",thirdText:"Third",fourText:"Four",fiveText:"Five"},QR={madeby:hR,pageTitle:gR,badgeTitle:pR,share:mR,home:vR,exampleAction:xR,pageIntroduction:yR,example1:bR,example2:wR,accountOptions:SR,aboutUs:CR,team:kR,contact:ER,company:jR,tableExample:TR,externalLink:MR,onlineServices:LR,serviceCustom:OR,serviceSpecial:$R,serviceExtraSpecial:zR,onSiteServices:AR,services:RR,helloDrawer:DR,noNotificationsText:_R,readNotificationsText:NR,unreadNotificationsText:HR,searchPlaceholder:BR,accounts:UR,billing:IR,payments:GR,descriptionTab1:qR,titleTab2:PR,titleTab3:FR,formName:WR,formDepartment:VR,userDrawerTextP1:YR,userDrawerTextP2:ZR,breadcrumbs:XR},KR="Powered By:",JR="ようこそ",eD="ゲスト",tD="共有",nD="ホーム",aD="サンプル 1",rD="サンプル 2",iD="例1のアクション",oD="UIライブラリのご利用ありがとうございます。",lD="アカウントオプション",sD="会社概要",cD="チーム",uD="コンタクト",dD="会社概要",fD="テーブル例",hD="外部リンク",gD="オンラインサービス",pD="サービスカスタム",mD="サービススペシャル",vD="特別なサービス",xD="オンサイトサービス",yD="サービス",bD="例ドラウェ",wD="新着通知なし",SD="既読通知",CD="未読通知",kD="検索エリア名など",ED="アカウント一覧",jD="請求",TD="支払い",MD="以下の行では、FullWidthContentBlock コンポーネントを使用してレイアウトの制約を解除し、ブラウザーの全幅に広げています。",LD="タブ2の内容",OD="タブ3の内容",$D="名",zD="部門",AD="カスタムコンテンツは、このようにユーザーメニューの下に挿入することができます",RD="スタイリングは自由に設定できます",DD={back:"戻る",firstText:"実例",secondText:"第2",thirdText:"第3",fourText:"第4",fiveText:"第5"},_D={madeby:KR,pageTitle:JR,badgeTitle:eD,share:tD,home:nD,example1:aD,example2:rD,exampleAction:iD,pageIntroduction:oD,accountOptions:lD,aboutUs:sD,team:cD,contact:uD,company:dD,tableExample:fD,externalLink:hD,onlineServices:gD,serviceCustom:pD,serviceSpecial:mD,serviceExtraSpecial:vD,onSiteServices:xD,services:yD,helloDrawer:bD,noNotificationsText:wD,readNotificationsText:SD,unreadNotificationsText:CD,searchPlaceholder:kD,accounts:ED,billing:jD,payments:TD,descriptionTab1:MD,titleTab2:LD,titleTab3:OD,formName:$D,formDepartment:zD,userDrawerTextP1:AD,userDrawerTextP2:RD,breadcrumbs:DD},ND="Login",HD="Logout",BD="Current User",UD="Keep Open",ID="Auto-Hide",GD="Help & Support",qD="No new notifications",PD="Read",FD="UnRead",WD={darkMode:"DARK MODE",lightMode:"LIGHT MODE",switchTheme:"SWITCH THEME",en:"English",ja:"Japanese"},VD={login:ND,logout:HD,currentUser:BD,keepOpenText:UD,autoHideText:ID,supportText:GD,noNotificationsText:qD,readNotificationsText:PD,unreadNotificationsText:FD,theme:WD},YD="ログイン",ZD="ログアウト",XD="現在のユーザー",QD="開いた状態を維持",KD="自動で隠す",JD="ヘルプとサポート",e_="新着通知なし",t_="既読通知",n_="未読通知",a_={darkMode:"ダークモード",lightMode:"ライトモード",switchTheme:"テーマの変更",en:"英語",ja:"日本語"},r_={login:YD,logout:ZD,currentUser:XD,keepOpenText:QD,autoHideText:KD,supportText:JD,noNotificationsText:e_,readNotificationsText:t_,unreadNotificationsText:n_,theme:a_},{slice:i_,forEach:o_}=[];function l_(e){return o_.call(i_.call(arguments,1),a=>{if(a)for(const i in a)e[i]===void 0&&(e[i]=a[i])}),e}function s_(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const Px=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,c_=function(e,a){const o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},c=encodeURIComponent(a);let u=`${e}=${c}`;if(o.maxAge>0){const h=o.maxAge-0;if(Number.isNaN(h))throw new Error("maxAge should be a Number");u+=`; Max-Age=${Math.floor(h)}`}if(o.domain){if(!Px.test(o.domain))throw new TypeError("option domain is invalid");u+=`; Domain=${o.domain}`}if(o.path){if(!Px.test(o.path))throw new TypeError("option path is invalid");u+=`; Path=${o.path}`}if(o.expires){if(typeof o.expires.toUTCString!="function")throw new TypeError("option expires is invalid");u+=`; Expires=${o.expires.toUTCString()}`}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch(typeof o.sameSite=="string"?o.sameSite.toLowerCase():o.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o.partitioned&&(u+="; Partitioned"),u},Fx={create(e,a,i,o){let c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(c.expires=new Date,c.expires.setTime(c.expires.getTime()+i*60*1e3)),o&&(c.domain=o),document.cookie=c_(e,a,c)},read(e){const a=`${e}=`,i=document.cookie.split(";");for(let o=0;o<i.length;o++){let c=i[o];for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return c.substring(a.length,c.length)}return null},remove(e,a){this.create(e,"",-1,a)}};var u_={name:"cookie",lookup(e){let{lookupCookie:a}=e;if(a&&typeof document<"u")return Fx.read(a)||void 0},cacheUserLanguage(e,a){let{lookupCookie:i,cookieMinutes:o,cookieDomain:c,cookieOptions:u}=a;i&&typeof document<"u"&&Fx.create(i,e,o,c,u)}},d_={name:"querystring",lookup(e){let{lookupQuerystring:a}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let h=0;h<u.length;h++){const p=u[h].indexOf("=");p>0&&u[h].substring(0,p)===a&&(i=u[h].substring(p+1))}}return i}},f_={name:"hash",lookup(e){let{lookupHash:a,lookupFromHashIndex:i}=e,o;if(typeof window<"u"){const{hash:c}=window.location;if(c&&c.length>2){const u=c.substring(1);if(a){const h=u.split("&");for(let p=0;p<h.length;p++){const m=h[p].indexOf("=");m>0&&h[p].substring(0,m)===a&&(o=h[p].substring(m+1))}}if(o)return o;if(!o&&i>-1){const h=c.match(/\/([a-zA-Z-]*)/g);return Array.isArray(h)?h[typeof i=="number"?i:0]?.replace("/",""):void 0}}}return o}};let Ao=null;const Wx=()=>{if(Ao!==null)return Ao;try{if(Ao=typeof window<"u"&&window.localStorage!==null,!Ao)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Ao=!1}return Ao};var h_={name:"localStorage",lookup(e){let{lookupLocalStorage:a}=e;if(a&&Wx())return window.localStorage.getItem(a)||void 0},cacheUserLanguage(e,a){let{lookupLocalStorage:i}=a;i&&Wx()&&window.localStorage.setItem(i,e)}};let Ro=null;const Vx=()=>{if(Ro!==null)return Ro;try{if(Ro=typeof window<"u"&&window.sessionStorage!==null,!Ro)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Ro=!1}return Ro};var g_={name:"sessionStorage",lookup(e){let{lookupSessionStorage:a}=e;if(a&&Vx())return window.sessionStorage.getItem(a)||void 0},cacheUserLanguage(e,a){let{lookupSessionStorage:i}=a;i&&Vx()&&window.sessionStorage.setItem(i,e)}},p_={name:"navigator",lookup(e){const a=[];if(typeof navigator<"u"){const{languages:i,userLanguage:o,language:c}=navigator;if(i)for(let u=0;u<i.length;u++)a.push(i[u]);o&&a.push(o),c&&a.push(c)}return a.length>0?a:void 0}},m_={name:"htmlTag",lookup(e){let{htmlTag:a}=e,i;const o=a||(typeof document<"u"?document.documentElement:null);return o&&typeof o.getAttribute=="function"&&(i=o.getAttribute("lang")),i}},v_={name:"path",lookup(e){let{lookupFromPathIndex:a}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?i[typeof a=="number"?a:0]?.replace("/",""):void 0}},x_={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:a}=e;const i=typeof a=="number"?a+1:1,o=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o[i]}};let d5=!1;try{document.cookie,d5=!0}catch{}const f5=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];d5||f5.splice(1,1);const y_=()=>({order:f5,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class h5{constructor(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(a,i)}init(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=a,this.options=l_(i,this.options||{},y_()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=c=>c.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(u_),this.addDetector(d_),this.addDetector(h_),this.addDetector(g_),this.addDetector(p_),this.addDetector(m_),this.addDetector(v_),this.addDetector(x_),this.addDetector(f_)}addDetector(a){return this.detectors[a.name]=a,this}detect(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return a.forEach(o=>{if(this.detectors[o]){let c=this.detectors[o].lookup(this.options);c&&typeof c=="string"&&(c=[c]),c&&(i=i.concat(c))}}),i=i.filter(o=>o!=null&&!s_(o)).map(o=>this.options.convertDetectedLanguage(o)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(a){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(a)>-1||i.forEach(o=>{this.detectors[o]&&this.detectors[o].cacheUserLanguage(a,this.options)}))}}h5.type="languageDetector";const b_={en:{Common:QR,GlobalUI:VD},ja:{Common:_D,GlobalUI:r_}};Ke.use(h5).use(vA).init({resources:b_,fallbackLng:"ja",lng:localStorage.getItem("language")||navigator.language,keySeparator:".",interpolation:{escapeValue:!1},defaultNS:"GlobalUI",ns:["Common","GlobalUI"]});const Yx="/scorer-ui-kit/assets/Lato3Upr3M-VF-BS60sTW_.woff2",Zx="/scorer-ui-kit/assets/Lato3Ita3M-VF-C8KUZ9bO.woff2",w_="/scorer-ui-kit/assets/Monorale-Thin-BQKHXPxk.woff",S_="/scorer-ui-kit/assets/Monorale-ThinItalic-DxjjXtaw.woff",C_="/scorer-ui-kit/assets/Monorale-ExtraLight-ao5tsxV8.woff",k_="/scorer-ui-kit/assets/Monorale-ExtraLightItalic-6yY0Bdrq.woff",E_="/scorer-ui-kit/assets/Monorale-Light-T7gpP2n1.woff",j_="/scorer-ui-kit/assets/Monorale-LightItalic-f797-kPY.woff",T_="/scorer-ui-kit/assets/Monorale-Regular-DOtBvWqV.woff",M_="/scorer-ui-kit/assets/Monorale-Italic-bzXvo1D-.woff",L_="/scorer-ui-kit/assets/Monorale-Medium-CVfjkY1Z.woff",O_="/scorer-ui-kit/assets/Monorale-MediumItalic-BEsxtezO.woff",$_="/scorer-ui-kit/assets/Monorale-SemiBold-BVVp1RRO.woff",z_="/scorer-ui-kit/assets/Monorale-SemiBoldItalic-nEmp39Cb.woff",A_="/scorer-ui-kit/assets/Monorale-Bold-CtnTlBZA.woff",R_="/scorer-ui-kit/assets/Monorale-ExtraBold-C9ejQABg.woff",D_="/scorer-ui-kit/assets/Monorale-Black-COwa-Bp6.woff",__=qu`

@font-face {
    font-family: "Lato";
    src: url(${Yx}) format("woff2 supports variations"),
        url(${Yx}) format("woff2-variations");
    font-weight: 100 900;
  }

  @font-face {
    font-family: "Lato";
    font-style: italic;
    src: url(${Zx}) format("woff2 supports variations"),
        url(${Zx}) format("woff2-variations");
    font-weight: 100 900;
  }


  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url(${w_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url(${S_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url(${C_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url(${k_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url(${E_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url(${j_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url(${T_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url(${M_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url(${L_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url(${O_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url(${$_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url(${z_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url(${A_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url(${R_}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url(${D_}) format('woff');
    font-display: fallback;
  }

`,N_=qu`
  ${AC};
`,H_=qu`
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
`;Ts.custom.lines.weird={label:{fill:"#fff"},contrastLine:{stroke:"transparent;"},highlightLine:{stroke:"transparent;"},grabHandle:{fill:"transparent;",stroke:"transparent;"},point:{fill:"hsla(205deg, 45%, 90%, 100%)"},grabHandleText:{fill:"transparent"},grabHandleContrast:{fill:"transparent"},handleBase:{fill:"transparent"},handleRingLayer:{stroke:"hsla(205deg, 100%, 89%, 100%);"},handleReactiveFill:{stroke:"transparent;"},handleReactiveRing:{stroke:"transparent;"},handleContrastLayer:{stroke:"transparent;"},stopStart:{stopColor:" hsla(0, 100%, 15%, 35%);"},stopEnd:{stopColor:"hsla(0, 100%, 15%, 0%);"}};const B_=()=>(Ls(),s.jsx(Gu,{theme:Ts,children:s.jsx(rE,{children:s.jsxs(lE,{children:[s.jsx(dR,{}),s.jsx(__,{}),s.jsx(zC,{}),s.jsx(H_,{}),s.jsx(N_,{})]})})})),U_=m3.createRoot(document.getElementById("root"));U_.render(s.jsx(st.StrictMode,{children:s.jsx(B_,{})}));fR();
//# sourceMappingURL=index-C4DPoepj.js.map
