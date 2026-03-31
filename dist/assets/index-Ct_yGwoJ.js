function Qc(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},fr={},du={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),rf=Symbol.for("react.memo"),sf=Symbol.for("react.lazy"),Ll=Symbol.iterator;function lf(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var cu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,mu={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||cu}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pu(){}pu.prototype=Xn.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=mu,this.updater=n||cu}var ys=gs.prototype=new pu;ys.constructor=gs;fu(ys,Xn.prototype);ys.isPureReactComponent=!0;var Fl=Array.isArray,gu=Object.prototype.hasOwnProperty,ws={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function wu(e,t,n){var o,a={},r=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(r=""+t.key),t)gu.call(t,o)&&!yu.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)a[o]===void 0&&(a[o]=s[o]);return{$$typeof:Qo,type:e,key:r,ref:i,props:a,_owner:ws.current}}function hf(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function uf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bl=/\/+/g;function Br(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uf(""+e.key):t.toString(36)}function Ca(e,t,n,o,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Qo:case Xc:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+Br(i,0):o,Fl(a)?(n="",e!=null&&(n=e.replace(Bl,"$&/")+"/"),Ca(a,t,n,"",function(u){return u})):a!=null&&(vs(a)&&(a=hf(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Bl,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Fl(e))for(var s=0;s<e.length;s++){r=e[s];var l=o+Br(r,s);i+=Ca(r,t,n,l,a)}else if(l=lf(e),typeof l=="function")for(e=l.call(e),s=0;!(r=e.next()).done;)r=r.value,l=o+Br(r,s++),i+=Ca(r,t,n,l,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function la(e,t,n){if(e==null)return e;var o=[],a=0;return Ca(e,o,"","",function(r){return t.call(n,r,a++)}),o}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Na={transition:null},cf={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Na,ReactCurrentOwner:ws};B.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Xn;B.Fragment=Jc;B.Profiler=ef;B.PureComponent=gs;B.StrictMode=Zc;B.Suspense=af;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cf;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=fu({},e.props),a=e.key,r=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,i=ws.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)gu.call(t,l)&&!yu.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:Qo,type:e.type,key:a,ref:r,props:o,_owner:i}};B.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};B.createElement=wu;B.createFactory=function(e){var t=wu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:of,render:e}};B.isValidElement=vs;B.lazy=function(e){return{$$typeof:sf,_payload:{_status:-1,_result:e},_init:df}};B.memo=function(e,t){return{$$typeof:rf,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Se.current.useCallback(e,t)};B.useContext=function(e){return Se.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};B.useEffect=function(e,t){return Se.current.useEffect(e,t)};B.useId=function(){return Se.current.useId()};B.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Se.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};B.useRef=function(e){return Se.current.useRef(e)};B.useState=function(e){return Se.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Se.current.useTransition()};B.version="18.2.0";du.exports=B;var A=du.exports;const vu=qc(A),ff=Qc({__proto__:null,default:vu},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=A,pf=Symbol.for("react.element"),gf=Symbol.for("react.fragment"),yf=Object.prototype.hasOwnProperty,wf=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var o,a={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)yf.call(t,o)&&!vf.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:pf,type:e,key:r,ref:i,props:a,_owner:wf.current}}fr.Fragment=gf;fr.jsx=ku;fr.jsxs=ku;uu.exports=fr;var h=uu.exports,wi={},bu={exports:{}},Le={},Iu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var D=E.length;E.push(R);e:for(;0<D;){var $=D-1>>>1,L=E[$];if(0<a(L,R))E[$]=R,E[D]=L,D=$;else break e}}function n(E){return E.length===0?null:E[0]}function o(E){if(E.length===0)return null;var R=E[0],D=E.pop();if(D!==R){E[0]=D;e:for(var $=0,L=E.length,$t=L>>>1;$<$t;){var W=2*($+1)-1,dt=E[W],Ke=W+1,Kt=E[Ke];if(0>a(dt,D))Ke<L&&0>a(Kt,dt)?(E[$]=Kt,E[Ke]=D,$=Ke):(E[$]=dt,E[W]=D,$=W);else if(Ke<L&&0>a(Kt,D))E[$]=Kt,E[Ke]=D,$=Ke;else break e}}return R}function a(E,R){var D=E.sortIndex-R.sortIndex;return D!==0?D:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],g=1,p=null,y=3,v=!1,k=!1,I=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(E){for(var R=n(u);R!==null;){if(R.callback===null)o(u);else if(R.startTime<=E)o(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function w(E){if(I=!1,c(E),!k)if(n(l)!==null)k=!0,to(T);else{var R=n(u);R!==null&&pn(w,R.startTime-E)}}function T(E,R){k=!1,I&&(I=!1,m(M),M=-1),v=!0;var D=y;try{for(c(R),p=n(l);p!==null&&(!(p.expirationTime>R)||E&&!ye());){var $=p.callback;if(typeof $=="function"){p.callback=null,y=p.priorityLevel;var L=$(p.expirationTime<=R);R=e.unstable_now(),typeof L=="function"?p.callback=L:p===n(l)&&o(l),c(R)}else o(l);p=n(l)}if(p!==null)var $t=!0;else{var W=n(u);W!==null&&pn(w,W.startTime-R),$t=!1}return $t}finally{p=null,y=D,v=!1}}var _=!1,j=null,M=-1,Q=5,P=-1;function ye(){return!(e.unstable_now()-P<Q)}function ht(){if(j!==null){var E=e.unstable_now();P=E;var R=!0;try{R=j(!0,E)}finally{R?ut():(_=!1,j=null)}}else _=!1}var ut;if(typeof d=="function")ut=function(){d(ht)};else if(typeof MessageChannel<"u"){var na=new MessageChannel,_r=na.port2;na.port1.onmessage=ht,ut=function(){_r.postMessage(null)}}else ut=function(){x(ht,0)};function to(E){j=E,_||(_=!0,ut())}function pn(E,R){M=x(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,to(T))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(y){case 1:case 2:case 3:var R=3;break;default:R=y}var D=y;y=R;try{return E()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=y;y=E;try{return R()}finally{y=D}},e.unstable_scheduleCallback=function(E,R,D){var $=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,E){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=D+L,E={id:g++,callback:R,priorityLevel:E,startTime:D,expirationTime:L,sortIndex:-1},D>$?(E.sortIndex=D,t(u,E),n(l)===null&&E===n(u)&&(I?(m(M),M=-1):I=!0,pn(w,D-$))):(E.sortIndex=L,t(l,E),k||v||(k=!0,to(T))),E},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(E){var R=y;return function(){var D=y;y=R;try{return E.apply(this,arguments)}finally{y=D}}}})(Su);Iu.exports=Su;var kf=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=A,He=kf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xu=new Set,_o={};function dn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(_o[e]=t,e=0;e<t.length;e++)xu.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vi=Object.prototype.hasOwnProperty,bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zl={},Wl={};function If(e){return vi.call(Wl,e)?!0:vi.call(zl,e)?!1:bf.test(e)?Wl[e]=!0:(zl[e]=!0,!1)}function Sf(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tf(e,t,n,o){if(t===null||typeof t>"u"||Sf(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,o,a,r,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ks,bs);de[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ks,bs);de[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ks,bs);de[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Is(e,t,n,o){var a=de.hasOwnProperty(t)?de[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tf(t,n,a,o)&&(n=null),o||a===null?If(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var St=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Tn=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),bi=Symbol.for("react.suspense"),Ii=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),Ul=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,zr;function yo(e){if(zr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zr=t&&t[1]||""}return`
`+zr+e}var Wr=!1;function Ur(e,t){if(!e||Wr)return"";Wr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),r=o.stack.split(`
`),i=a.length-1,s=r.length-1;1<=i&&0<=s&&a[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==r[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{Wr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yo(e):""}function xf(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=Ur(e.type,!1),e;case 11:return e=Ur(e.type.render,!1),e;case 1:return e=Ur(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tn:return"Fragment";case Sn:return"Portal";case ki:return"Profiler";case Ss:return"StrictMode";case bi:return"Suspense";case Ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eu:return(e.displayName||"Context")+".Consumer";case Au:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xs:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function Af(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ef(e){var t=Nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,r.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=Ef(e))}function _u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Nu(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ju(e,t){t=t.checked,t!=null&&Is(e,"checked",t,!1)}function xi(e,t){ju(e,t);var n=zt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wo=Array.isArray;function Pn(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(wo(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Du(e,t){var n=zt(t.value),o=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function $l(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,Mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cf=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(e){Cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bo[t]=bo[e]})});function Pu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bo.hasOwnProperty(e)&&bo[e]?(""+t).trim():t+"px"}function Ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Pu(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Nf=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(Nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function _i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Rn=null,Hn=null;function Kl(e){if(e=Jo(e)){if(typeof Di!="function")throw Error(S(280));var t=e.stateNode;t&&(t=wr(t),Di(e.stateNode,e.type,t))}}function Hu(e){Rn?Hn?Hn.push(e):Hn=[e]:Rn=e}function Lu(){if(Rn){var e=Rn,t=Hn;if(Hn=Rn=null,Kl(e),t)for(e=0;e<t.length;e++)Kl(t[e])}}function Fu(e,t){return e(t)}function Bu(){}var Gr=!1;function zu(e,t,n){if(Gr)return e(t,n);Gr=!0;try{return Fu(e,t,n)}finally{Gr=!1,(Rn!==null||Hn!==null)&&(Bu(),Lu())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var o=wr(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Oi=!1;if(vt)try{var io={};Object.defineProperty(io,"passive",{get:function(){Oi=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Oi=!1}function _f(e,t,n,o,a,r,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Io=!1,Wa=null,Ua=!1,Mi=null,jf={onError:function(e){Io=!0,Wa=e}};function Df(e,t,n,o,a,r,i,s,l){Io=!1,Wa=null,_f.apply(jf,arguments)}function Of(e,t,n,o,a,r,i,s,l){if(Df.apply(this,arguments),Io){if(Io){var u=Wa;Io=!1,Wa=null}else throw Error(S(198));Ua||(Ua=!0,Mi=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ql(e){if(cn(e)!==e)throw Error(S(188))}function Mf(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Ql(a),e;if(r===o)return Ql(a),t;r=r.sibling}throw Error(S(188))}if(n.return!==o.return)n=a,o=r;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,o=r;break}if(s===o){i=!0,o=a,n=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===n){i=!0,n=r,o=a;break}if(s===o){i=!0,o=r,n=a;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==o)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Uu(e){return e=Mf(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var Yu=He.unstable_scheduleCallback,ql=He.unstable_cancelCallback,Pf=He.unstable_shouldYield,Rf=He.unstable_requestPaint,ee=He.unstable_now,Hf=He.unstable_getCurrentPriorityLevel,Es=He.unstable_ImmediatePriority,Vu=He.unstable_UserBlockingPriority,Ga=He.unstable_NormalPriority,Lf=He.unstable_LowPriority,$u=He.unstable_IdlePriority,mr=null,st=null;function Ff(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(mr,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Wf,Bf=Math.log,zf=Math.LN2;function Wf(e){return e>>>=0,e===0?32:31-(Bf(e)/zf|0)|0}var ca=64,fa=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ya(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,r=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~a;s!==0?o=vo(s):(r&=i,r!==0&&(o=vo(r)))}else i=n&~a,i!==0?o=vo(i):r!==0&&(o=vo(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-et(t),a=1<<n,o|=e[n],t&=~a;return o}function Uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gf(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var i=31-et(r),s=1<<i,l=a[i];l===-1?(!(s&n)||s&o)&&(a[i]=Uf(s,t)):l<=t&&(e.expiredLanes|=s),r&=~s}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ku(){var e=ca;return ca<<=1,!(ca&4194240)&&(ca=64),e}function Yr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function Yf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-et(n),r=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~r}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-et(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var U=0;function Qu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qu,Ns,Xu,Ju,Zu,Ri=!1,ma=[],Dt=null,Ot=null,Mt=null,Oo=new Map,Mo=new Map,Et=[],Vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xl(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(t.pointerId)}}function so(e,t,n,o,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Jo(t),t!==null&&Ns(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $f(e,t,n,o,a){switch(t){case"focusin":return Dt=so(Dt,e,t,n,o,a),!0;case"dragenter":return Ot=so(Ot,e,t,n,o,a),!0;case"mouseover":return Mt=so(Mt,e,t,n,o,a),!0;case"pointerover":var r=a.pointerId;return Oo.set(r,so(Oo.get(r)||null,e,t,n,o,a)),!0;case"gotpointercapture":return r=a.pointerId,Mo.set(r,so(Mo.get(r)||null,e,t,n,o,a)),!0}return!1}function ed(e){var t=en(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wu(n),t!==null){e.blockedOn=t,Zu(e.priority,function(){Xu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ji=o,n.target.dispatchEvent(o),ji=null}else return t=Jo(n),t!==null&&Ns(t),e.blockedOn=n,!1;t.shift()}return!0}function Jl(e,t,n){_a(e)&&n.delete(t)}function Kf(){Ri=!1,Dt!==null&&_a(Dt)&&(Dt=null),Ot!==null&&_a(Ot)&&(Ot=null),Mt!==null&&_a(Mt)&&(Mt=null),Oo.forEach(Jl),Mo.forEach(Jl)}function lo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Kf)))}function Po(e){function t(a){return lo(a,e)}if(0<ma.length){lo(ma[0],e);for(var n=1;n<ma.length;n++){var o=ma[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Dt!==null&&lo(Dt,e),Ot!==null&&lo(Ot,e),Mt!==null&&lo(Mt,e),Oo.forEach(t),Mo.forEach(t),n=0;n<Et.length;n++)o=Et[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)ed(n),n.blockedOn===null&&Et.shift()}var Ln=St.ReactCurrentBatchConfig,Va=!0;function Qf(e,t,n,o){var a=U,r=Ln.transition;Ln.transition=null;try{U=1,_s(e,t,n,o)}finally{U=a,Ln.transition=r}}function qf(e,t,n,o){var a=U,r=Ln.transition;Ln.transition=null;try{U=4,_s(e,t,n,o)}finally{U=a,Ln.transition=r}}function _s(e,t,n,o){if(Va){var a=Hi(e,t,n,o);if(a===null)ti(e,t,o,$a,n),Xl(e,o);else if($f(a,e,t,n,o))o.stopPropagation();else if(Xl(e,o),t&4&&-1<Vf.indexOf(e)){for(;a!==null;){var r=Jo(a);if(r!==null&&qu(r),r=Hi(e,t,n,o),r===null&&ti(e,t,o,$a,n),r===a)break;a=r}a!==null&&o.stopPropagation()}else ti(e,t,o,null,n)}}var $a=null;function Hi(e,t,n,o){if($a=null,e=As(o),e=en(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $a=e,null}function td(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hf()){case Es:return 1;case Vu:return 4;case Ga:case Lf:return 16;case $u:return 536870912;default:return 16}default:return 16}}var Nt=null,js=null,ja=null;function nd(){if(ja)return ja;var e,t=js,n=t.length,o,a="value"in Nt?Nt.value:Nt.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[r-o];o++);return ja=a.slice(e,1<o?1-o:void 0)}function Da(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pa(){return!0}function Zl(){return!1}function Fe(e){function t(n,o,a,r,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?pa:Zl,this.isPropagationStopped=Zl,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=Fe(Jn),Xo=J({},Jn,{view:0,detail:0}),Xf=Fe(Xo),Vr,$r,ho,pr=J({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Vr=e.screenX-ho.screenX,$r=e.screenY-ho.screenY):$r=Vr=0,ho=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:$r}}),eh=Fe(pr),Jf=J({},pr,{dataTransfer:0}),Zf=Fe(Jf),em=J({},Xo,{relatedTarget:0}),Kr=Fe(em),tm=J({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),nm=Fe(tm),om=J({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),am=Fe(om),rm=J({},Jn,{data:0}),th=Fe(rm),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function Os(){return hm}var um=J({},Xo,{key:function(e){if(e.key){var t=im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Da(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Da(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Da(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Fe(um),cm=J({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Fe(cm),fm=J({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),mm=Fe(fm),pm=J({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Fe(pm),ym=J({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Fe(ym),vm=[9,13,27,32],Ms=vt&&"CompositionEvent"in window,So=null;vt&&"documentMode"in document&&(So=document.documentMode);var km=vt&&"TextEvent"in window&&!So,od=vt&&(!Ms||So&&8<So&&11>=So),oh=" ",ah=!1;function ad(e,t){switch(e){case"keyup":return vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function bm(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(ah=!0,oh);case"textInput":return e=t.data,e===oh&&ah?null:e;default:return null}}function Im(e,t){if(xn)return e==="compositionend"||!Ms&&ad(e,t)?(e=nd(),ja=js=Nt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function id(e,t,n,o){Hu(o),t=Ka(t,"onChange"),0<t.length&&(n=new Ds("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var To=null,Ro=null;function Tm(e){yd(e,0)}function gr(e){var t=Cn(e);if(_u(t))return e}function xm(e,t){if(e==="change")return t}var sd=!1;if(vt){var Qr;if(vt){var qr="oninput"in document;if(!qr){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),qr=typeof ih.oninput=="function"}Qr=qr}else Qr=!1;sd=Qr&&(!document.documentMode||9<document.documentMode)}function sh(){To&&(To.detachEvent("onpropertychange",ld),Ro=To=null)}function ld(e){if(e.propertyName==="value"&&gr(Ro)){var t=[];id(t,Ro,e,As(e)),zu(Tm,t)}}function Am(e,t,n){e==="focusin"?(sh(),To=t,Ro=n,To.attachEvent("onpropertychange",ld)):e==="focusout"&&sh()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gr(Ro)}function Cm(e,t){if(e==="click")return gr(t)}function Nm(e,t){if(e==="input"||e==="change")return gr(t)}function _m(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:_m;function Ho(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!vi.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function lh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hh(e,t){var n=lh(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lh(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ud(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=ud(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(o!==null&&Ps(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,r=Math.min(o.start,a);o=o.end===void 0?r:Math.min(o.end,a),!e.extend&&r>o&&(a=o,o=r,r=a),a=hh(n,r);var i=hh(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dm=vt&&"documentMode"in document&&11>=document.documentMode,An=null,Li=null,xo=null,Fi=!1;function uh(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fi||An==null||An!==za(o)||(o=An,"selectionStart"in o&&Ps(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&Ho(xo,o)||(xo=o,o=Ka(Li,"onSelect"),0<o.length&&(t=new Ds("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=An)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Xr={},dd={};vt&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function yr(e){if(Xr[e])return Xr[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dd)return Xr[e]=t[n];return e}var cd=yr("animationend"),fd=yr("animationiteration"),md=yr("animationstart"),pd=yr("transitionend"),gd=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){gd.set(e,t),dn(t,[e])}for(var Jr=0;Jr<dh.length;Jr++){var Zr=dh[Jr],Om=Zr.toLowerCase(),Mm=Zr[0].toUpperCase()+Zr.slice(1);Ut(Om,"on"+Mm)}Ut(cd,"onAnimationEnd");Ut(fd,"onAnimationIteration");Ut(md,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(pd,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function ch(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Of(o,t,void 0,e),e.currentTarget=null}function yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var i=o.length-1;0<=i;i--){var s=o[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==r&&a.isPropagationStopped())break e;ch(a,s,u),r=l}else for(i=0;i<o.length;i++){if(s=o[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==r&&a.isPropagationStopped())break e;ch(a,s,u),r=l}}}if(Ua)throw e=Mi,Ua=!1,Mi=null,e}function Y(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var o=e+"__bubble";n.has(o)||(wd(t,e,2,!1),n.add(o))}function ei(e,t,n){var o=0;t&&(o|=4),wd(n,e,o,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[ya]){e[ya]=!0,xu.forEach(function(n){n!=="selectionchange"&&(Pm.has(n)||ei(n,!1,e),ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,ei("selectionchange",!1,t))}}function wd(e,t,n,o){switch(td(t)){case 1:var a=Qf;break;case 4:a=qf;break;default:a=_s}n=a.bind(null,t,n,e),a=void 0,!Oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ti(e,t,n,o,a){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var s=o.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=en(s),i===null)return;if(l=i.tag,l===5||l===6){o=r=i;continue e}s=s.parentNode}}o=o.return}zu(function(){var u=r,g=As(n),p=[];e:{var y=gd.get(e);if(y!==void 0){var v=Ds,k=e;switch(e){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":v=dm;break;case"focusin":k="focus",v=Kr;break;case"focusout":k="blur",v=Kr;break;case"beforeblur":case"afterblur":v=Kr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mm;break;case cd:case fd:case md:v=nm;break;case pd:v=gm;break;case"scroll":v=Xf;break;case"wheel":v=wm;break;case"copy":case"cut":case"paste":v=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nh}var I=(t&4)!==0,x=!I&&e==="scroll",m=I?y!==null?y+"Capture":null:y;I=[];for(var d=u,c;d!==null;){c=d;var w=c.stateNode;if(c.tag===5&&w!==null&&(c=w,m!==null&&(w=Do(d,m),w!=null&&I.push(Fo(d,w,c)))),x)break;d=d.return}0<I.length&&(y=new v(y,k,null,n,g),p.push({event:y,listeners:I}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&n!==ji&&(k=n.relatedTarget||n.fromElement)&&(en(k)||k[kt]))break e;if((v||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?en(k):null,k!==null&&(x=cn(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(I=eh,w="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(I=nh,w="onPointerLeave",m="onPointerEnter",d="pointer"),x=v==null?y:Cn(v),c=k==null?y:Cn(k),y=new I(w,d+"leave",v,n,g),y.target=x,y.relatedTarget=c,w=null,en(g)===u&&(I=new I(m,d+"enter",k,n,g),I.target=c,I.relatedTarget=x,w=I),x=w,v&&k)t:{for(I=v,m=k,d=0,c=I;c;c=In(c))d++;for(c=0,w=m;w;w=In(w))c++;for(;0<d-c;)I=In(I),d--;for(;0<c-d;)m=In(m),c--;for(;d--;){if(I===m||m!==null&&I===m.alternate)break t;I=In(I),m=In(m)}I=null}else I=null;v!==null&&fh(p,y,v,I,!1),k!==null&&x!==null&&fh(p,x,k,I,!0)}}e:{if(y=u?Cn(u):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var T=xm;else if(rh(y))if(sd)T=Nm;else{T=Em;var _=Am}else(v=y.nodeName)&&v.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(T=Cm);if(T&&(T=T(e,u))){id(p,T,n,g);break e}_&&_(e,y,u),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&Ai(y,"number",y.value)}switch(_=u?Cn(u):window,e){case"focusin":(rh(_)||_.contentEditable==="true")&&(An=_,Li=u,xo=null);break;case"focusout":xo=Li=An=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,uh(p,n,g);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":uh(p,n,g)}var j;if(Ms)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else xn?ad(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(od&&n.locale!=="ko"&&(xn||M!=="onCompositionStart"?M==="onCompositionEnd"&&xn&&(j=nd()):(Nt=g,js="value"in Nt?Nt.value:Nt.textContent,xn=!0)),_=Ka(u,M),0<_.length&&(M=new th(M,e,null,n,g),p.push({event:M,listeners:_}),j?M.data=j:(j=rd(n),j!==null&&(M.data=j)))),(j=km?bm(e,n):Im(e,n))&&(u=Ka(u,"onBeforeInput"),0<u.length&&(g=new th("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:u}),g.data=j))}yd(p,t)})}function Fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=Do(e,n),r!=null&&o.unshift(Fo(e,r,a)),r=Do(e,t),r!=null&&o.push(Fo(e,r,a))),e=e.return}return o}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fh(e,t,n,o,a){for(var r=t._reactName,i=[];n!==null&&n!==o;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===o)break;s.tag===5&&u!==null&&(s=u,a?(l=Do(n,r),l!=null&&i.unshift(Fo(n,l,s))):a||(l=Do(n,r),l!=null&&i.push(Fo(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Rm=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Hm,"")}function wa(e,t,n){if(t=mh(t),mh(e)!==t&&n)throw Error(S(425))}function Qa(){}var Bi=null,zi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ui=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Fm=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(e){return ph.resolve(null).then(e).catch(Bm)}:Ui;function Bm(e){setTimeout(function(){throw e})}function ni(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Po(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Po(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),it="__reactFiber$"+Zn,Bo="__reactProps$"+Zn,kt="__reactContainer$"+Zn,Gi="__reactEvents$"+Zn,zm="__reactListeners$"+Zn,Wm="__reactHandles$"+Zn;function en(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gh(e);e!==null;){if(n=e[it])return n;e=gh(e)}return t}e=n,n=e.parentNode}return null}function Jo(e){return e=e[it]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function wr(e){return e[Bo]||null}var Yi=[],Nn=-1;function Gt(e){return{current:e}}function V(e){0>Nn||(e.current=Yi[Nn],Yi[Nn]=null,Nn--)}function G(e,t){Nn++,Yi[Nn]=e.current,e.current=t}var Wt={},ge=Gt(Wt),Ne=Gt(!1),rn=Wt;function Yn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function _e(e){return e=e.childContextTypes,e!=null}function qa(){V(Ne),V(ge)}function yh(e,t,n){if(ge.current!==Wt)throw Error(S(168));G(ge,t),G(Ne,n)}function vd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(S(108,Af(e)||"Unknown",a));return J({},n,o)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,rn=ge.current,G(ge,e),G(Ne,Ne.current),!0}function wh(e,t,n){var o=e.stateNode;if(!o)throw Error(S(169));n?(e=vd(e,t,rn),o.__reactInternalMemoizedMergedChildContext=e,V(Ne),V(ge),G(ge,e)):V(Ne),G(Ne,n)}var pt=null,vr=!1,oi=!1;function kd(e){pt===null?pt=[e]:pt.push(e)}function Um(e){vr=!0,kd(e)}function Yt(){if(!oi&&pt!==null){oi=!0;var e=0,t=U;try{var n=pt;for(U=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}pt=null,vr=!1}catch(a){throw pt!==null&&(pt=pt.slice(e+1)),Yu(Es,Yt),a}finally{U=t,oi=!1}}return null}var _n=[],jn=0,Ja=null,Za=0,ze=[],We=0,sn=null,gt=1,yt="";function Xt(e,t){_n[jn++]=Za,_n[jn++]=Ja,Ja=e,Za=t}function bd(e,t,n){ze[We++]=gt,ze[We++]=yt,ze[We++]=sn,sn=e;var o=gt;e=yt;var a=32-et(o)-1;o&=~(1<<a),n+=1;var r=32-et(t)+a;if(30<r){var i=a-a%5;r=(o&(1<<i)-1).toString(32),o>>=i,a-=i,gt=1<<32-et(t)+a|n<<a|o,yt=r+e}else gt=1<<r|n<<a|o,yt=e}function Rs(e){e.return!==null&&(Xt(e,1),bd(e,1,0))}function Hs(e){for(;e===Ja;)Ja=_n[--jn],_n[jn]=null,Za=_n[--jn],_n[jn]=null;for(;e===sn;)sn=ze[--We],ze[We]=null,yt=ze[--We],ze[We]=null,gt=ze[--We],ze[We]=null}var Pe=null,Me=null,K=!1,Ze=null;function Id(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Me=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Me=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(K){var t=Me;if(t){var n=t;if(!vh(e,t)){if(Vi(e))throw Error(S(418));t=Pt(n.nextSibling);var o=Pe;t&&vh(e,t)?Id(o,n):(e.flags=e.flags&-4097|2,K=!1,Pe=e)}}else{if(Vi(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Pe=e}}}function kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function va(e){if(e!==Pe)return!1;if(!K)return kh(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=Me)){if(Vi(e))throw Sd(),Error(S(418));for(;t;)Id(e,t),t=Pt(t.nextSibling)}if(kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Pe?Pt(e.stateNode.nextSibling):null;return!0}function Sd(){for(var e=Me;e;)e=Pt(e.nextSibling)}function Vn(){Me=Pe=null,K=!1}function Ls(e){Ze===null?Ze=[e]:Ze.push(e)}var Gm=St.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var er=Gt(null),tr=null,Dn=null,Fs=null;function Bs(){Fs=Dn=tr=null}function zs(e){var t=er.current;V(er),e._currentValue=t}function Ki(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){tr=e,Fs=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(tr===null)throw Error(S(308));Dn=e,tr.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var tn=null;function Ws(e){tn===null?tn=[e]:tn.push(e)}function Td(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Ws(t)):(n.next=a.next,a.next=n),t.interleaved=n,bt(e,o)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,z&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,bt(e,n)}return a=o.interleaved,a===null?(t.next=t,Ws(o)):(t.next=a.next,a.next=t),o.interleaved=t,bt(e,n)}function Oa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Cs(e,n)}}function bh(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=i:r=r.next=i,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nr(e,t,n,o){var a=e.updateQueue;At=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?r=u:i.next=u,i=l;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==i&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=l))}if(r!==null){var p=a.baseState;i=0,g=u=l=null,s=r;do{var y=s.lane,v=s.eventTime;if((o&y)===y){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,I=s;switch(y=t,v=n,I.tag){case 1:if(k=I.payload,typeof k=="function"){p=k.call(v,p,y);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=I.payload,y=typeof k=="function"?k.call(v,p,y):k,y==null)break e;p=J({},p,y);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[s]:y.push(s))}else v={eventTime:v,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=v,l=p):g=g.next=v,i|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;y=s,s=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);if(g===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);hn|=i,e.lanes=i,e.memoizedState=p}}function Ih(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(S(191,a));a.call(o)}}}var Ad=new Tu.Component().refs;function Qi(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kr={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=be(),a=Lt(e),r=wt(o,a);r.payload=t,n!=null&&(r.callback=n),t=Rt(e,r,a),t!==null&&(tt(t,e,a,o),Oa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=be(),a=Lt(e),r=wt(o,a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Rt(e,r,a),t!==null&&(tt(t,e,a,o),Oa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),o=Lt(e),a=wt(n,o);a.tag=2,t!=null&&(a.callback=t),t=Rt(e,a,o),t!==null&&(tt(t,e,o,n),Oa(t,e,o))}};function Sh(e,t,n,o,a,r,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,i):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,o)||!Ho(a,r):!0}function Ed(e,t,n){var o=!1,a=Wt,r=t.contextType;return typeof r=="object"&&r!==null?r=Ye(r):(a=_e(t)?rn:ge.current,o=t.contextTypes,r=(o=o!=null)?Yn(e,a):Wt),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kr,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function Th(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&kr.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Ad,Us(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=Ye(r):(r=_e(t)?rn:ge.current,a.context=Yn(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Qi(e,t,r,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&kr.enqueueReplaceState(a,a.state,null),nr(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var o=n.stateNode}if(!o)throw Error(S(147,e));var a=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(i){var s=a.refs;s===Ad&&(s=a.refs={}),i===null?delete s[r]:s[r]=i},t._stringRef=r,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function Cd(e){function t(m,d){if(e){var c=m.deletions;c===null?(m.deletions=[d],m.flags|=16):c.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function o(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function a(m,d){return m=Ft(m,d),m.index=0,m.sibling=null,m}function r(m,d,c){return m.index=c,e?(c=m.alternate,c!==null?(c=c.index,c<d?(m.flags|=2,d):c):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,c,w){return d===null||d.tag!==6?(d=ui(c,m.mode,w),d.return=m,d):(d=a(d,c),d.return=m,d)}function l(m,d,c,w){var T=c.type;return T===Tn?g(m,d,c.props.children,w,c.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xt&&xh(T)===d.type)?(w=a(d,c.props),w.ref=uo(m,d,c),w.return=m,w):(w=Fa(c.type,c.key,c.props,null,m.mode,w),w.ref=uo(m,d,c),w.return=m,w)}function u(m,d,c,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==c.containerInfo||d.stateNode.implementation!==c.implementation?(d=di(c,m.mode,w),d.return=m,d):(d=a(d,c.children||[]),d.return=m,d)}function g(m,d,c,w,T){return d===null||d.tag!==7?(d=an(c,m.mode,w,T),d.return=m,d):(d=a(d,c),d.return=m,d)}function p(m,d,c){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ui(""+d,m.mode,c),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ha:return c=Fa(d.type,d.key,d.props,null,m.mode,c),c.ref=uo(m,null,d),c.return=m,c;case Sn:return d=di(d,m.mode,c),d.return=m,d;case xt:var w=d._init;return p(m,w(d._payload),c)}if(wo(d)||ro(d))return d=an(d,m.mode,c,null),d.return=m,d;ka(m,d)}return null}function y(m,d,c,w){var T=d!==null?d.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return T!==null?null:s(m,d,""+c,w);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ha:return c.key===T?l(m,d,c,w):null;case Sn:return c.key===T?u(m,d,c,w):null;case xt:return T=c._init,y(m,d,T(c._payload),w)}if(wo(c)||ro(c))return T!==null?null:g(m,d,c,w,null);ka(m,c)}return null}function v(m,d,c,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(c)||null,s(d,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ha:return m=m.get(w.key===null?c:w.key)||null,l(d,m,w,T);case Sn:return m=m.get(w.key===null?c:w.key)||null,u(d,m,w,T);case xt:var _=w._init;return v(m,d,c,_(w._payload),T)}if(wo(w)||ro(w))return m=m.get(c)||null,g(d,m,w,T,null);ka(d,w)}return null}function k(m,d,c,w){for(var T=null,_=null,j=d,M=d=0,Q=null;j!==null&&M<c.length;M++){j.index>M?(Q=j,j=null):Q=j.sibling;var P=y(m,j,c[M],w);if(P===null){j===null&&(j=Q);break}e&&j&&P.alternate===null&&t(m,j),d=r(P,d,M),_===null?T=P:_.sibling=P,_=P,j=Q}if(M===c.length)return n(m,j),K&&Xt(m,M),T;if(j===null){for(;M<c.length;M++)j=p(m,c[M],w),j!==null&&(d=r(j,d,M),_===null?T=j:_.sibling=j,_=j);return K&&Xt(m,M),T}for(j=o(m,j);M<c.length;M++)Q=v(j,m,M,c[M],w),Q!==null&&(e&&Q.alternate!==null&&j.delete(Q.key===null?M:Q.key),d=r(Q,d,M),_===null?T=Q:_.sibling=Q,_=Q);return e&&j.forEach(function(ye){return t(m,ye)}),K&&Xt(m,M),T}function I(m,d,c,w){var T=ro(c);if(typeof T!="function")throw Error(S(150));if(c=T.call(c),c==null)throw Error(S(151));for(var _=T=null,j=d,M=d=0,Q=null,P=c.next();j!==null&&!P.done;M++,P=c.next()){j.index>M?(Q=j,j=null):Q=j.sibling;var ye=y(m,j,P.value,w);if(ye===null){j===null&&(j=Q);break}e&&j&&ye.alternate===null&&t(m,j),d=r(ye,d,M),_===null?T=ye:_.sibling=ye,_=ye,j=Q}if(P.done)return n(m,j),K&&Xt(m,M),T;if(j===null){for(;!P.done;M++,P=c.next())P=p(m,P.value,w),P!==null&&(d=r(P,d,M),_===null?T=P:_.sibling=P,_=P);return K&&Xt(m,M),T}for(j=o(m,j);!P.done;M++,P=c.next())P=v(j,m,M,P.value,w),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?M:P.key),d=r(P,d,M),_===null?T=P:_.sibling=P,_=P);return e&&j.forEach(function(ht){return t(m,ht)}),K&&Xt(m,M),T}function x(m,d,c,w){if(typeof c=="object"&&c!==null&&c.type===Tn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ha:e:{for(var T=c.key,_=d;_!==null;){if(_.key===T){if(T=c.type,T===Tn){if(_.tag===7){n(m,_.sibling),d=a(_,c.props.children),d.return=m,m=d;break e}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xt&&xh(T)===_.type){n(m,_.sibling),d=a(_,c.props),d.ref=uo(m,_,c),d.return=m,m=d;break e}n(m,_);break}else t(m,_);_=_.sibling}c.type===Tn?(d=an(c.props.children,m.mode,w,c.key),d.return=m,m=d):(w=Fa(c.type,c.key,c.props,null,m.mode,w),w.ref=uo(m,d,c),w.return=m,m=w)}return i(m);case Sn:e:{for(_=c.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===c.containerInfo&&d.stateNode.implementation===c.implementation){n(m,d.sibling),d=a(d,c.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=di(c,m.mode,w),d.return=m,m=d}return i(m);case xt:return _=c._init,x(m,d,_(c._payload),w)}if(wo(c))return k(m,d,c,w);if(ro(c))return I(m,d,c,w);ka(m,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,d!==null&&d.tag===6?(n(m,d.sibling),d=a(d,c),d.return=m,m=d):(n(m,d),d=ui(c,m.mode,w),d.return=m,m=d),i(m)):n(m,d)}return x}var $n=Cd(!0),Nd=Cd(!1),Zo={},lt=Gt(Zo),zo=Gt(Zo),Wo=Gt(Zo);function nn(e){if(e===Zo)throw Error(S(174));return e}function Gs(e,t){switch(G(Wo,t),G(zo,e),G(lt,Zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ci(t,e)}V(lt),G(lt,t)}function Kn(){V(lt),V(zo),V(Wo)}function _d(e){nn(Wo.current);var t=nn(lt.current),n=Ci(t,e.type);t!==n&&(G(zo,e),G(lt,n))}function Ys(e){zo.current===e&&(V(lt),V(zo))}var q=Gt(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ai=[];function Vs(){for(var e=0;e<ai.length;e++)ai[e]._workInProgressVersionPrimary=null;ai.length=0}var Ma=St.ReactCurrentDispatcher,ri=St.ReactCurrentBatchConfig,ln=0,X=null,oe=null,ie=null,ar=!1,Ao=!1,Uo=0,Ym=0;function fe(){throw Error(S(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ks(e,t,n,o,a,r){if(ln=r,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ma.current=e===null||e.memoizedState===null?Qm:qm,e=n(o,a),Ao){r=0;do{if(Ao=!1,Uo=0,25<=r)throw Error(S(301));r+=1,ie=oe=null,t.updateQueue=null,Ma.current=Xm,e=n(o,a)}while(Ao)}if(Ma.current=rr,t=oe!==null&&oe.next!==null,ln=0,ie=oe=X=null,ar=!1,t)throw Error(S(300));return e}function Qs(){var e=Uo!==0;return Uo=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Ve(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,oe=e;else{if(e===null)throw Error(S(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Go(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var o=oe,a=o.baseQueue,r=n.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}o.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,o=o.baseState;var s=i=null,l=null,u=r;do{var g=u.lane;if((ln&g)===g)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var p={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,i=o):l=l.next=p,X.lanes|=g,hn|=g}u=u.next}while(u!==null&&u!==r);l===null?i=o:l.next=s,nt(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do r=a.lane,X.lanes|=r,hn|=r,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do r=e(r,i.action),i=i.next;while(i!==a);nt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function jd(){}function Dd(e,t){var n=X,o=Ve(),a=t(),r=!nt(o.memoizedState,a);if(r&&(o.memoizedState=a,Ce=!0),o=o.queue,qs(Pd.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Md.bind(null,n,o,a,t),void 0,null),se===null)throw Error(S(349));ln&30||Od(n,t,a)}return a}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Md(e,t,n,o){t.value=n,t.getSnapshot=o,Rd(t)&&Hd(e)}function Pd(e,t,n){return n(function(){Rd(t)&&Hd(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Hd(e){var t=bt(e,1);t!==null&&tt(t,e,1,-1)}function Ah(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t.queue=e,e=e.dispatch=Km.bind(null,X,e),[t.memoizedState,e]}function Yo(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Ld(){return Ve().memoizedState}function Pa(e,t,n,o){var a=rt();X.flags|=e,a.memoizedState=Yo(1|t,n,void 0,o===void 0?null:o)}function br(e,t,n,o){var a=Ve();o=o===void 0?null:o;var r=void 0;if(oe!==null){var i=oe.memoizedState;if(r=i.destroy,o!==null&&$s(o,i.deps)){a.memoizedState=Yo(t,n,r,o);return}}X.flags|=e,a.memoizedState=Yo(1|t,n,r,o)}function Eh(e,t){return Pa(8390656,8,e,t)}function qs(e,t){return br(2048,8,e,t)}function Fd(e,t){return br(4,2,e,t)}function Bd(e,t){return br(4,4,e,t)}function zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){return n=n!=null?n.concat([e]):null,br(4,4,zd.bind(null,t,e),n)}function Xs(){}function Ud(e,t){var n=Ve();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&$s(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Gd(e,t){var n=Ve();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&$s(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Yd(e,t,n){return ln&21?(nt(n,t)||(n=Ku(),X.lanes|=n,hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Vm(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var o=ri.transition;ri.transition={};try{e(!1),t()}finally{U=n,ri.transition=o}}function Vd(){return Ve().memoizedState}function $m(e,t,n){var o=Lt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},$d(e))Kd(t,n);else if(n=Td(e,t,n,o),n!==null){var a=be();tt(n,e,o,a),Qd(n,t,o)}}function Km(e,t,n){var o=Lt(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if($d(e))Kd(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var i=t.lastRenderedState,s=r(i,n);if(a.hasEagerState=!0,a.eagerState=s,nt(s,i)){var l=t.interleaved;l===null?(a.next=a,Ws(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=Td(e,t,a,o),n!==null&&(a=be(),tt(n,e,o,a),Qd(n,t,o))}}function $d(e){var t=e.alternate;return e===X||t!==null&&t===X}function Kd(e,t){Ao=ar=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Cs(e,n)}}var rr={readContext:Ye,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Qm={readContext:Ye,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Eh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=rt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=$m.bind(null,X,e),[o.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Ah,useDebugValue:Xs,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Ah(!1),t=e[0];return e=Vm.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=X,a=rt();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));ln&30||Od(o,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Eh(Pd.bind(null,o,r,e),[e]),o.flags|=2048,Yo(9,Md.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=rt(),t=se.identifierPrefix;if(K){var n=yt,o=gt;n=(o&~(1<<32-et(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qm={readContext:Ye,useCallback:Ud,useContext:Ye,useEffect:qs,useImperativeHandle:Wd,useInsertionEffect:Fd,useLayoutEffect:Bd,useMemo:Gd,useReducer:ii,useRef:Ld,useState:function(){return ii(Go)},useDebugValue:Xs,useDeferredValue:function(e){var t=Ve();return Yd(t,oe.memoizedState,e)},useTransition:function(){var e=ii(Go)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Dd,useId:Vd,unstable_isNewReconciler:!1},Xm={readContext:Ye,useCallback:Ud,useContext:Ye,useEffect:qs,useImperativeHandle:Wd,useInsertionEffect:Fd,useLayoutEffect:Bd,useMemo:Gd,useReducer:si,useRef:Ld,useState:function(){return si(Go)},useDebugValue:Xs,useDeferredValue:function(e){var t=Ve();return oe===null?t.memoizedState=e:Yd(t,oe.memoizedState,e)},useTransition:function(){var e=si(Go)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:jd,useSyncExternalStore:Dd,useId:Vd,unstable_isNewReconciler:!1};function Qn(e,t){try{var n="",o=t;do n+=xf(o),o=o.return;while(o);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){sr||(sr=!0,ss=o),Xi(e,t)},n}function Xd(e,t,n){n=wt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Xi(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Xi(e,t),typeof o!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ch(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Jm;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=cp.bind(null,e,t,n),t.then(e,e))}function Nh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _h(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Zm=St.ReactCurrentOwner,Ce=!1;function ke(e,t,n,o){t.child=e===null?Nd(t,null,n,o):$n(t,e.child,n,o)}function jh(e,t,n,o,a){n=n.render;var r=t.ref;return Fn(t,a),o=Ks(e,t,n,o,r,a),n=Qs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,It(e,t,a)):(K&&n&&Rs(t),t.flags|=1,ke(e,t,o,a),t.child)}function Dh(e,t,n,o,a){if(e===null){var r=n.type;return typeof r=="function"&&!rl(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,Jd(e,t,r,o,a)):(e=Fa(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&a)){var i=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(i,o)&&e.ref===t.ref)return It(e,t,a)}return t.flags|=1,e=Ft(r,o),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,o,a){if(e!==null){var r=e.memoizedProps;if(Ho(r,o)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=o=r,(e.lanes&a)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,It(e,t,a)}return Ji(e,t,n,o,a)}function Zd(e,t,n){var o=t.pendingProps,a=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Mn,Oe),Oe|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Mn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,G(Mn,Oe),Oe|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,G(Mn,Oe),Oe|=o;return ke(e,t,a,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,o,a){var r=_e(n)?rn:ge.current;return r=Yn(t,r),Fn(t,a),n=Ks(e,t,n,o,r,a),o=Qs(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,It(e,t,a)):(K&&o&&Rs(t),t.flags|=1,ke(e,t,n,a),t.child)}function Oh(e,t,n,o,a){if(_e(n)){var r=!0;Xa(t)}else r=!1;if(Fn(t,a),t.stateNode===null)Ra(e,t),Ed(t,n,o),qi(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=_e(n)?rn:ge.current,u=Yn(t,u));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==o||l!==u)&&Th(t,i,o,u),At=!1;var y=t.memoizedState;i.state=y,nr(t,o,i,a),l=t.memoizedState,s!==o||y!==l||Ne.current||At?(typeof g=="function"&&(Qi(t,n,g,o),l=t.memoizedState),(s=At||Sh(t,n,s,o,y,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=u,o=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,xd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Xe(t.type,s),i.props=u,p=t.pendingProps,y=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=_e(n)?rn:ge.current,l=Yn(t,l));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||y!==l)&&Th(t,i,o,l),At=!1,y=t.memoizedState,i.state=y,nr(t,o,i,a);var k=t.memoizedState;s!==p||y!==k||Ne.current||At?(typeof v=="function"&&(Qi(t,n,v,o),k=t.memoizedState),(u=At||Sh(t,n,u,o,y,k,l)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,k,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,k,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),i.props=o,i.state=k,i.context=l,o=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),o=!1)}return Zi(e,t,n,o,r,a)}function Zi(e,t,n,o,a,r){ec(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&wh(t,n,!1),It(e,t,r);o=t.stateNode,Zm.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=$n(t,e.child,null,r),t.child=$n(t,null,s,r)):ke(e,t,s,r),t.memoizedState=o.state,a&&wh(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?yh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yh(e,t.context,!1),Gs(e,t.containerInfo)}function Mh(e,t,n,o,a){return Vn(),Ls(a),t.flags|=256,ke(e,t,n,o),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var o=t.pendingProps,a=q.current,r=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),G(q,a&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,r?(o=t.mode,r=t.child,i={mode:"hidden",children:i},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=Tr(i,o,0,null),e=an(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=ts(n),t.memoizedState=es,e):Js(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return ep(e,t,i,o,s,a,n);if(r){r=o.fallback,i=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=Ft(a,l),o.subtreeFlags=a.subtreeFlags&14680064),s!==null?r=Ft(s,r):(r=an(r,i,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,i=e.child.memoizedState,i=i===null?ts(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=e.childLanes&~n,t.memoizedState=es,o}return r=e.child,e=r.sibling,o=Ft(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Js(e,t){return t=Tr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,o){return o!==null&&Ls(o),$n(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ep(e,t,n,o,a,r,i){if(n)return t.flags&256?(t.flags&=-257,o=li(Error(S(422))),ba(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,a=t.mode,o=Tr({mode:"visible",children:o.children},a,0,null),r=an(r,a,i,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&$n(t,e.child,null,i),t.child.memoizedState=ts(i),t.memoizedState=es,r);if(!(t.mode&1))return ba(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var s=o.dgst;return o=s,r=Error(S(419)),o=li(r,o,void 0),ba(e,t,i,o)}if(s=(i&e.childLanes)!==0,Ce||s){if(o=se,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,bt(e,a),tt(o,e,a,-1))}return al(),o=li(Error(S(421))),ba(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=fp.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,Me=Pt(a.nextSibling),Pe=t,K=!0,Ze=null,e!==null&&(ze[We++]=gt,ze[We++]=yt,ze[We++]=sn,gt=e.id,yt=e.overflow,sn=t),t=Js(t,o.children),t.flags|=4096,t)}function Ph(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ki(e.return,t,n)}function hi(e,t,n,o,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=a)}function oc(e,t,n){var o=t.pendingProps,a=o.revealOrder,r=o.tail;if(ke(e,t,o.children,n),o=q.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ph(e,n,t);else if(e.tag===19)Ph(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(G(q,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),hi(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&or(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}hi(t,!0,n,null,r);break;case"together":hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tp(e,t,n){switch(t.tag){case 3:tc(t),Vn();break;case 5:_d(t);break;case 1:_e(t.type)&&Xa(t);break;case 4:Gs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;G(er,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(G(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?nc(e,t,n):(G(q,q.current&1),e=It(e,t,n),e!==null?e.sibling:null);G(q,q.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return oc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(q,q.current),o)break;return null;case 22:case 23:return t.lanes=0,Zd(e,t,n)}return It(e,t,n)}var ac,ns,rc,ic;ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ns=function(){};rc=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,nn(lt.current);var r=null;switch(n){case"input":a=Ti(e,a),o=Ti(e,o),r=[];break;case"select":a=J({},a,{value:void 0}),o=J({},o,{value:void 0}),r=[];break;case"textarea":a=Ei(e,a),o=Ei(e,o),r=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Qa)}Ni(n,o);var i;n=null;for(u in a)if(!o.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in o){var l=o[u];if(s=a!=null?a[u]:void 0,o.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(r||(r=[]),r.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(r=r||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(r=r||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),r||s===l||(r=[])):(r=r||[]).push(u,l))}n&&(r=r||[]).push("style",n);var u=r;(t.updateQueue=u)&&(t.flags|=4)}};ic=function(e,t,n,o){n!==o&&(t.flags|=4)};function co(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function np(e,t,n){var o=t.pendingProps;switch(Hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return _e(t.type)&&qa(),me(t),null;case 3:return o=t.stateNode,Kn(),V(Ne),V(ge),Vs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(us(Ze),Ze=null))),ns(e,t),me(t),null;case 5:Ys(t);var a=nn(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=nn(lt.current),va(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[it]=t,o[Bo]=r,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",o),Y("close",o);break;case"iframe":case"object":case"embed":Y("load",o);break;case"video":case"audio":for(a=0;a<ko.length;a++)Y(ko[a],o);break;case"source":Y("error",o);break;case"img":case"image":case"link":Y("error",o),Y("load",o);break;case"details":Y("toggle",o);break;case"input":Gl(o,r),Y("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},Y("invalid",o);break;case"textarea":Vl(o,r),Y("invalid",o)}Ni(n,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?o.textContent!==s&&(r.suppressHydrationWarning!==!0&&wa(o.textContent,s,e),a=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&wa(o.textContent,s,e),a=["children",""+s]):_o.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Y("scroll",o)}switch(n){case"input":ua(o),Yl(o,r,!0);break;case"textarea":ua(o),$l(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=Qa)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[it]=t,e[Bo]=o,ac(e,t,!1,!1),t.stateNode=e;e:{switch(i=_i(n,o),n){case"dialog":Y("cancel",e),Y("close",e),a=o;break;case"iframe":case"object":case"embed":Y("load",e),a=o;break;case"video":case"audio":for(a=0;a<ko.length;a++)Y(ko[a],e);a=o;break;case"source":Y("error",e),a=o;break;case"img":case"image":case"link":Y("error",e),Y("load",e),a=o;break;case"details":Y("toggle",e),a=o;break;case"input":Gl(e,o),a=Ti(e,o),Y("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=J({},o,{value:void 0}),Y("invalid",e);break;case"textarea":Vl(e,o),a=Ei(e,o),Y("invalid",e);break;default:a=o}Ni(n,a),s=a;for(r in s)if(s.hasOwnProperty(r)){var l=s[r];r==="style"?Ru(e,l):r==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mu(e,l)):r==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(e,l):typeof l=="number"&&jo(e,""+l):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(_o.hasOwnProperty(r)?l!=null&&r==="onScroll"&&Y("scroll",e):l!=null&&Is(e,r,l,i))}switch(n){case"input":ua(e),Yl(e,o,!1);break;case"textarea":ua(e),$l(e);break;case"option":o.value!=null&&e.setAttribute("value",""+zt(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?Pn(e,!!o.multiple,r,!1):o.defaultValue!=null&&Pn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(S(166));if(n=nn(Wo.current),nn(lt.current),va(t)){if(o=t.stateNode,n=t.memoizedProps,o[it]=t,(r=o.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:wa(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wa(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[it]=t,t.stateNode=o}return me(t),null;case 13:if(V(q),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Me!==null&&t.mode&1&&!(t.flags&128))Sd(),Vn(),t.flags|=98560,r=!1;else if(r=va(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(S(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[it]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),r=!1}else Ze!==null&&(us(Ze),Ze=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ae===0&&(ae=3):al())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Kn(),ns(e,t),e===null&&Lo(t.stateNode.containerInfo),me(t),null;case 10:return zs(t.type._context),me(t),null;case 17:return _e(t.type)&&qa(),me(t),null;case 19:if(V(q),r=t.memoizedState,r===null)return me(t),null;if(o=(t.flags&128)!==0,i=r.rendering,i===null)if(o)co(r,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=or(e),i!==null){for(t.flags|=128,co(r,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,e=i.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(q,q.current&1|2),t.child}e=e.sibling}r.tail!==null&&ee()>qn&&(t.flags|=128,o=!0,co(r,!1),t.lanes=4194304)}else{if(!o)if(e=or(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!K)return me(t),null}else 2*ee()-r.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,o=!0,co(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ee(),t.sibling=null,n=q.current,G(q,o?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ol(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Oe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function op(e,t){switch(Hs(t),t.tag){case 1:return _e(t.type)&&qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),V(Ne),V(ge),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ys(t),null;case 13:if(V(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(q),null;case 4:return Kn(),null;case 10:return zs(t.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var Ia=!1,pe=!1,ap=typeof WeakSet=="function"?WeakSet:Set,C=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Z(e,t,o)}else n.current=null}function os(e,t,n){try{n()}catch(o){Z(e,t,o)}}var Rh=!1;function rp(e,t){if(Bi=Va,e=ud(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,g=0,p=e,y=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(s=i+a),p!==r||o!==0&&p.nodeType!==3||(l=i+o),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)y=p,p=v;for(;;){if(p===e)break t;if(y===n&&++u===a&&(s=i),y===r&&++g===o&&(l=i),(v=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zi={focusedElem:e,selectionRange:n},Va=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var I=k.memoizedProps,x=k.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:Xe(t.type,I),x);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return k=Rh,Rh=!1,k}function Eo(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&os(t,n,r)}a=a.next}while(a!==o)}}function Ir(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sc(e){var t=e.alternate;t!==null&&(e.alternate=null,sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Bo],delete t[Gi],delete t[zm],delete t[Wm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function Hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qa));else if(o!==4&&(e=e.child,e!==null))for(rs(e,t,n),e=e.sibling;e!==null;)rs(e,t,n),e=e.sibling}function is(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var he=null,Je=!1;function Tt(e,t,n){for(n=n.child;n!==null;)hc(e,t,n),n=n.sibling}function hc(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(mr,n)}catch{}switch(n.tag){case 5:pe||On(n,t);case 6:var o=he,a=Je;he=null,Tt(e,t,n),he=o,Je=a,he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?ni(e.parentNode,n):e.nodeType===1&&ni(e,n),Po(e)):ni(he,n.stateNode));break;case 4:o=he,a=Je,he=n.stateNode.containerInfo,Je=!0,Tt(e,t,n),he=o,Je=a;break;case 0:case 11:case 14:case 15:if(!pe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&os(n,t,i),a=a.next}while(a!==o)}Tt(e,t,n);break;case 1:if(!pe&&(On(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(s){Z(n,t,s)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(pe=(o=pe)||n.memoizedState!==null,Tt(e,t,n),pe=o):Tt(e,t,n);break;default:Tt(e,t,n)}}function Lh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ap),t.forEach(function(o){var a=mp.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var r=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:he=s.stateNode,Je=!1;break e;case 3:he=s.stateNode.containerInfo,Je=!0;break e;case 4:he=s.stateNode.containerInfo,Je=!0;break e}s=s.return}if(he===null)throw Error(S(160));hc(r,i,a),he=null,Je=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){Z(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uc(t,e),t=t.sibling}function uc(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),ot(e),o&4){try{Eo(3,e,e.return),Ir(3,e)}catch(I){Z(e,e.return,I)}try{Eo(5,e,e.return)}catch(I){Z(e,e.return,I)}}break;case 1:Qe(t,e),ot(e),o&512&&n!==null&&On(n,n.return);break;case 5:if(Qe(t,e),ot(e),o&512&&n!==null&&On(n,n.return),e.flags&32){var a=e.stateNode;try{jo(a,"")}catch(I){Z(e,e.return,I)}}if(o&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,i=n!==null?n.memoizedProps:r,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&ju(a,r),_i(s,i);var u=_i(s,r);for(i=0;i<l.length;i+=2){var g=l[i],p=l[i+1];g==="style"?Ru(a,p):g==="dangerouslySetInnerHTML"?Mu(a,p):g==="children"?jo(a,p):Is(a,g,p,u)}switch(s){case"input":xi(a,r);break;case"textarea":Du(a,r);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var v=r.value;v!=null?Pn(a,!!r.multiple,v,!1):y!==!!r.multiple&&(r.defaultValue!=null?Pn(a,!!r.multiple,r.defaultValue,!0):Pn(a,!!r.multiple,r.multiple?[]:"",!1))}a[Bo]=r}catch(I){Z(e,e.return,I)}}break;case 6:if(Qe(t,e),ot(e),o&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(I){Z(e,e.return,I)}}break;case 3:if(Qe(t,e),ot(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(t.containerInfo)}catch(I){Z(e,e.return,I)}break;case 4:Qe(t,e),ot(e);break;case 13:Qe(t,e),ot(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=ee())),o&4&&Lh(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||g,Qe(t,e),pe=u):Qe(t,e),ot(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(p=C=g;C!==null;){switch(y=C,v=y.child,y.tag){case 0:case 11:case 14:case 15:Eo(4,y,y.return);break;case 1:On(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){o=y,n=y.return;try{t=o,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(I){Z(o,n,I)}}break;case 5:On(y,y.return);break;case 22:if(y.memoizedState!==null){Bh(p);continue}}v!==null?(v.return=y,C=v):Bh(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{a=p.stateNode,u?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Pu("display",i))}catch(I){Z(e,e.return,I)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(I){Z(e,e.return,I)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qe(t,e),ot(e),o&4&&Lh(e);break;case 21:break;default:Qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lc(n)){var o=n;break e}n=n.return}throw Error(S(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(jo(a,""),o.flags&=-33);var r=Hh(e);is(e,r,a);break;case 3:case 4:var i=o.stateNode.containerInfo,s=Hh(e);rs(e,s,i);break;default:throw Error(S(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e,t,n){C=e,dc(e)}function dc(e,t,n){for(var o=(e.mode&1)!==0;C!==null;){var a=C,r=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||Ia;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||pe;s=Ia;var u=pe;if(Ia=i,(pe=l)&&!u)for(C=a;C!==null;)i=C,l=i.child,i.tag===22&&i.memoizedState!==null?zh(a):l!==null?(l.return=i,C=l):zh(a);for(;r!==null;)C=r,dc(r),r=r.sibling;C=a,Ia=s,pe=u}Fh(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,C=r):Fh(e)}}function Fh(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ir(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!pe)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Ih(t,r,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ih(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Po(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&as(t)}catch(y){Z(t,t.return,y)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Bh(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function zh(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ir(4,t)}catch(l){Z(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(l){Z(t,a,l)}}var r=t.return;try{as(t)}catch(l){Z(t,r,l)}break;case 5:var i=t.return;try{as(t)}catch(l){Z(t,i,l)}}}catch(l){Z(t,t.return,l)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var sp=Math.ceil,ir=St.ReactCurrentDispatcher,Zs=St.ReactCurrentOwner,Ge=St.ReactCurrentBatchConfig,z=0,se=null,te=null,ue=0,Oe=0,Mn=Gt(0),ae=0,Vo=null,hn=0,Sr=0,el=0,Co=null,Ee=null,tl=0,qn=1/0,mt=null,sr=!1,ss=null,Ht=null,Sa=!1,_t=null,lr=0,No=0,ls=null,Ha=-1,La=0;function be(){return z&6?ee():Ha!==-1?Ha:Ha=ee()}function Lt(e){return e.mode&1?z&2&&ue!==0?ue&-ue:Gm.transition!==null?(La===0&&(La=Ku()),La):(e=U,e!==0||(e=window.event,e=e===void 0?16:td(e.type)),e):1}function tt(e,t,n,o){if(50<No)throw No=0,ls=null,Error(S(185));qo(e,n,o),(!(z&2)||e!==se)&&(e===se&&(!(z&2)&&(Sr|=n),ae===4&&Ct(e,ue)),je(e,o),n===1&&z===0&&!(t.mode&1)&&(qn=ee()+500,vr&&Yt()))}function je(e,t){var n=e.callbackNode;Gf(e,t);var o=Ya(e,e===se?ue:0);if(o===0)n!==null&&ql(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&ql(n),t===1)e.tag===0?Um(Wh.bind(null,e)):kd(Wh.bind(null,e)),Fm(function(){!(z&6)&&Yt()}),n=null;else{switch(Qu(o)){case 1:n=Es;break;case 4:n=Vu;break;case 16:n=Ga;break;case 536870912:n=$u;break;default:n=Ga}n=vc(n,cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cc(e,t){if(Ha=-1,La=0,z&6)throw Error(S(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var o=Ya(e,e===se?ue:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=hr(e,o);else{t=o;var a=z;z|=2;var r=mc();(se!==e||ue!==t)&&(mt=null,qn=ee()+500,on(e,t));do try{up();break}catch(s){fc(e,s)}while(!0);Bs(),ir.current=r,z=a,te!==null?t=0:(se=null,ue=0,t=ae)}if(t!==0){if(t===2&&(a=Pi(e),a!==0&&(o=a,t=hs(e,a))),t===1)throw n=Vo,on(e,0),Ct(e,o),je(e,ee()),n;if(t===6)Ct(e,o);else{if(a=e.current.alternate,!(o&30)&&!lp(a)&&(t=hr(e,o),t===2&&(r=Pi(e),r!==0&&(o=r,t=hs(e,r))),t===1))throw n=Vo,on(e,0),Ct(e,o),je(e,ee()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(S(345));case 2:Jt(e,Ee,mt);break;case 3:if(Ct(e,o),(o&130023424)===o&&(t=tl+500-ee(),10<t)){if(Ya(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ui(Jt.bind(null,e,Ee,mt),t);break}Jt(e,Ee,mt);break;case 4:if(Ct(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-et(o);r=1<<i,i=t[i],i>a&&(a=i),o&=~r}if(o=a,o=ee()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*sp(o/1960))-o,10<o){e.timeoutHandle=Ui(Jt.bind(null,e,Ee,mt),o);break}Jt(e,Ee,mt);break;case 5:Jt(e,Ee,mt);break;default:throw Error(S(329))}}}return je(e,ee()),e.callbackNode===n?cc.bind(null,e):null}function hs(e,t){var n=Co;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=hr(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&us(t)),e}function us(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],r=a.getSnapshot;a=a.value;try{if(!nt(r(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~el,t&=~Sr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),o=1<<n;e[n]=-1,t&=~o}}function Wh(e){if(z&6)throw Error(S(327));Bn();var t=Ya(e,0);if(!(t&1))return je(e,ee()),null;var n=hr(e,t);if(e.tag!==0&&n===2){var o=Pi(e);o!==0&&(t=o,n=hs(e,o))}if(n===1)throw n=Vo,on(e,0),Ct(e,t),je(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ee,mt),je(e,ee()),null}function nl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(qn=ee()+500,vr&&Yt())}}function un(e){_t!==null&&_t.tag===0&&!(z&6)&&Bn();var t=z;z|=1;var n=Ge.transition,o=U;try{if(Ge.transition=null,U=1,e)return e()}finally{U=o,Ge.transition=n,z=t,!(z&6)&&Yt()}}function ol(){Oe=Mn.current,V(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lm(n)),te!==null)for(n=te.return;n!==null;){var o=n;switch(Hs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&qa();break;case 3:Kn(),V(Ne),V(ge),Vs();break;case 5:Ys(o);break;case 4:Kn();break;case 13:V(q);break;case 19:V(q);break;case 10:zs(o.type._context);break;case 22:case 23:ol()}n=n.return}if(se=e,te=e=Ft(e.current,null),ue=Oe=t,ae=0,Vo=null,el=Sr=hn=0,Ee=Co=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,r=n.pending;if(r!==null){var i=r.next;r.next=a,o.next=i}n.pending=o}tn=null}return e}function fc(e,t){do{var n=te;try{if(Bs(),Ma.current=rr,ar){for(var o=X.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}ar=!1}if(ln=0,ie=oe=X=null,Ao=!1,Uo=0,Zs.current=null,n===null||n.return===null){ae=1,Vo=t,te=null;break}e:{var r=e,i=n.return,s=n,l=t;if(t=ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Nh(i);if(v!==null){v.flags&=-257,_h(v,i,s,r,t),v.mode&1&&Ch(r,u,t),t=v,l=u;var k=t.updateQueue;if(k===null){var I=new Set;I.add(l),t.updateQueue=I}else k.add(l);break e}else{if(!(t&1)){Ch(r,u,t),al();break e}l=Error(S(426))}}else if(K&&s.mode&1){var x=Nh(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),_h(x,i,s,r,t),Ls(Qn(l,s));break e}}r=l=Qn(l,s),ae!==4&&(ae=2),Co===null?Co=[r]:Co.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var m=qd(r,l,t);bh(r,m);break e;case 1:s=l;var d=r.type,c=r.stateNode;if(!(r.flags&128)&&(typeof d.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ht===null||!Ht.has(c)))){r.flags|=65536,t&=-t,r.lanes|=t;var w=Xd(r,s,t);bh(r,w);break e}}r=r.return}while(r!==null)}gc(n)}catch(T){t=T,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function mc(){var e=ir.current;return ir.current=rr,e===null?rr:e}function al(){(ae===0||ae===3||ae===2)&&(ae=4),se===null||!(hn&268435455)&&!(Sr&268435455)||Ct(se,ue)}function hr(e,t){var n=z;z|=2;var o=mc();(se!==e||ue!==t)&&(mt=null,on(e,t));do try{hp();break}catch(a){fc(e,a)}while(!0);if(Bs(),z=n,ir.current=o,te!==null)throw Error(S(261));return se=null,ue=0,ae}function hp(){for(;te!==null;)pc(te)}function up(){for(;te!==null&&!Pf();)pc(te)}function pc(e){var t=wc(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?gc(e):te=t,Zs.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=op(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,te=null;return}}else if(n=np(n,t,Oe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ae===0&&(ae=5)}function Jt(e,t,n){var o=U,a=Ge.transition;try{Ge.transition=null,U=1,dp(e,t,n,o)}finally{Ge.transition=a,U=o}return null}function dp(e,t,n,o){do Bn();while(_t!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(Yf(e,r),e===se&&(te=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,vc(Ga,function(){return Bn(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=Ge.transition,Ge.transition=null;var i=U;U=1;var s=z;z|=4,Zs.current=null,rp(e,n),uc(n,e),jm(zi),Va=!!Bi,zi=Bi=null,e.current=n,ip(n),Rf(),z=s,U=i,Ge.transition=r}else e.current=n;if(Sa&&(Sa=!1,_t=e,lr=a),r=e.pendingLanes,r===0&&(Ht=null),Ff(n.stateNode),je(e,ee()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(sr)throw sr=!1,e=ss,ss=null,e;return lr&1&&e.tag!==0&&Bn(),r=e.pendingLanes,r&1?e===ls?No++:(No=0,ls=e):No=0,Yt(),null}function Bn(){if(_t!==null){var e=Qu(lr),t=Ge.transition,n=U;try{if(Ge.transition=null,U=16>e?16:e,_t===null)var o=!1;else{if(e=_t,_t=null,lr=0,z&6)throw Error(S(331));var a=z;for(z|=4,C=e.current;C!==null;){var r=C,i=r.child;if(C.flags&16){var s=r.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(C=u;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Eo(8,g,r)}var p=g.child;if(p!==null)p.return=g,C=p;else for(;C!==null;){g=C;var y=g.sibling,v=g.return;if(sc(g),g===u){C=null;break}if(y!==null){y.return=v,C=y;break}C=v}}}var k=r.alternate;if(k!==null){var I=k.child;if(I!==null){k.child=null;do{var x=I.sibling;I.sibling=null,I=x}while(I!==null)}}C=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,C=i;else e:for(;C!==null;){if(r=C,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Eo(9,r,r.return)}var m=r.sibling;if(m!==null){m.return=r.return,C=m;break e}C=r.return}}var d=e.current;for(C=d;C!==null;){i=C;var c=i.child;if(i.subtreeFlags&2064&&c!==null)c.return=i,C=c;else e:for(i=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ir(9,s)}}catch(T){Z(s,s.return,T)}if(s===i){C=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,C=w;break e}C=s.return}}if(z=a,Yt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(mr,e)}catch{}o=!0}return o}finally{U=n,Ge.transition=t}}return!1}function Uh(e,t,n){t=Qn(n,t),t=qd(e,t,1),e=Rt(e,t,1),t=be(),e!==null&&(qo(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)Uh(e,e,n);else for(;t!==null;){if(t.tag===3){Uh(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ht===null||!Ht.has(o))){e=Qn(n,e),e=Xd(t,e,1),t=Rt(t,e,1),e=be(),t!==null&&(qo(t,1,e),je(t,e));break}}t=t.return}}function cp(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(ae===4||ae===3&&(ue&130023424)===ue&&500>ee()-tl?on(e,0):el|=n),je(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):t=1);var n=be();e=bt(e,t),e!==null&&(qo(e,t,n),je(e,n))}function fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function mp(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(S(314))}o!==null&&o.delete(t),yc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,tp(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&bd(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ra(e,t),e=t.pendingProps;var a=Yn(t,ge.current);Fn(t,n),a=Ks(null,t,o,e,a,n);var r=Qs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(o)?(r=!0,Xa(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Us(t),a.updater=kr,t.stateNode=a,a._reactInternals=t,qi(t,o,e,n),t=Zi(null,t,o,!0,r,n)):(t.tag=0,K&&r&&Rs(t),ke(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=gp(o),e=Xe(o,e),a){case 0:t=Ji(null,t,o,e,n);break e;case 1:t=Oh(null,t,o,e,n);break e;case 11:t=jh(null,t,o,e,n);break e;case 14:t=Dh(null,t,o,Xe(o.type,e),n);break e}throw Error(S(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Ji(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Oh(e,t,o,a,n);case 3:e:{if(tc(t),e===null)throw Error(S(387));o=t.pendingProps,r=t.memoizedState,a=r.element,xd(e,t),nr(t,o,null,n);var i=t.memoizedState;if(o=i.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=Qn(Error(S(423)),t),t=Mh(e,t,o,n,a);break e}else if(o!==a){a=Qn(Error(S(424)),t),t=Mh(e,t,o,n,a);break e}else for(Me=Pt(t.stateNode.containerInfo.firstChild),Pe=t,K=!0,Ze=null,n=Nd(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),o===a){t=It(e,t,n);break e}ke(e,t,o,n)}t=t.child}return t;case 5:return _d(t),e===null&&$i(t),o=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Wi(o,a)?i=null:r!==null&&Wi(o,r)&&(t.flags|=32),ec(e,t),ke(e,t,i,n),t.child;case 6:return e===null&&$i(t),null;case 13:return nc(e,t,n);case 4:return Gs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=$n(t,null,o,n):ke(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),jh(e,t,o,a,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,r=t.memoizedProps,i=a.value,G(er,o._currentValue),o._currentValue=i,r!==null)if(nt(r.value,i)){if(r.children===a.children&&!Ne.current){t=It(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var l=s.firstContext;l!==null;){if(l.context===o){if(r.tag===1){l=wt(-1,n&-n),l.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?l.next=l:(l.next=g.next,g.next=l),u.pending=l}}r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Ki(r.return,n,t),s.lanes|=n;break}l=l.next}}else if(r.tag===10)i=r.type===t.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ki(i,n,t),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===t){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}ke(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Fn(t,n),a=Ye(a),o=o(a),t.flags|=1,ke(e,t,o,n),t.child;case 14:return o=t.type,a=Xe(o,t.pendingProps),a=Xe(o.type,a),Dh(e,t,o,a,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Ra(e,t),t.tag=1,_e(o)?(e=!0,Xa(t)):e=!1,Fn(t,n),Ed(t,o,a),qi(t,o,a,n),Zi(null,t,o,!0,e,n);case 19:return oc(e,t,n);case 22:return Zd(e,t,n)}throw Error(S(156,t.tag))};function vc(e,t){return Yu(e,t)}function pp(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,o){return new pp(e,t,n,o)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gp(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===xs)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fa(e,t,n,o,a,r){var i=2;if(o=e,typeof e=="function")rl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Tn:return an(n.children,a,r,t);case Ss:i=8,a|=8;break;case ki:return e=Ue(12,n,t,a|2),e.elementType=ki,e.lanes=r,e;case bi:return e=Ue(13,n,t,a),e.elementType=bi,e.lanes=r,e;case Ii:return e=Ue(19,n,t,a),e.elementType=Ii,e.lanes=r,e;case Cu:return Tr(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Au:i=10;break e;case Eu:i=9;break e;case Ts:i=11;break e;case xs:i=14;break e;case xt:i=16,o=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(i,n,t,a),t.elementType=e,t.type=o,t.lanes=r,t}function an(e,t,n,o){return e=Ue(7,e,o,t),e.lanes=n,e}function Tr(e,t,n,o){return e=Ue(22,e,o,t),e.elementType=Cu,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function di(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yp(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yr(0),this.expirationTimes=Yr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function il(e,t,n,o,a,r,i,s,l){return e=new yp(e,t,n,s,l),t===1?(t=1,r===!0&&(t|=8)):t=0,r=Ue(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(r),e}function wp(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function kc(e){if(!e)return Wt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(_e(n))return vd(e,n,t)}return t}function bc(e,t,n,o,a,r,i,s,l){return e=il(n,o,!0,e,a,r,i,s,l),e.context=kc(null),n=e.current,o=be(),a=Lt(n),r=wt(o,a),r.callback=t??null,Rt(n,r,a),e.current.lanes=a,qo(e,a,o),je(e,o),e}function xr(e,t,n,o){var a=t.current,r=be(),i=Lt(a);return n=kc(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(r,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Rt(a,t,i),e!==null&&(tt(e,a,i,r),Oa(e,a,i)),i}function ur(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sl(e,t){Gh(e,t),(e=e.alternate)&&Gh(e,t)}function vp(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}Ar.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));xr(e,t,null,null)};Ar.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){xr(null,e,null,null)}),t[kt]=null}};function Ar(e){this._internalRoot=e}Ar.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&ed(e)}};function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Er(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function kp(e,t,n,o,a){if(a){if(typeof o=="function"){var r=o;o=function(){var u=ur(i);r.call(u)}}var i=bc(t,o,e,0,null,!1,!1,"",Yh);return e._reactRootContainer=i,e[kt]=i.current,Lo(e.nodeType===8?e.parentNode:e),un(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var s=o;o=function(){var u=ur(l);s.call(u)}}var l=il(e,0,!1,null,null,!1,!1,"",Yh);return e._reactRootContainer=l,e[kt]=l.current,Lo(e.nodeType===8?e.parentNode:e),un(function(){xr(t,l,n,o)}),l}function Cr(e,t,n,o,a){var r=n._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var s=a;a=function(){var l=ur(i);s.call(l)}}xr(t,i,e,a)}else i=kp(n,t,e,a,o);return ur(i)}qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vo(t.pendingLanes);n!==0&&(Cs(t,n|1),je(t,ee()),!(z&6)&&(qn=ee()+500,Yt()))}break;case 13:un(function(){var o=bt(e,1);if(o!==null){var a=be();tt(o,e,1,a)}}),sl(e,1)}};Ns=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=be();tt(t,e,134217728,n)}sl(e,134217728)}};Xu=function(e){if(e.tag===13){var t=Lt(e),n=bt(e,t);if(n!==null){var o=be();tt(n,e,t,o)}sl(e,t)}};Ju=function(){return U};Zu=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Di=function(e,t,n){switch(t){case"input":if(xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=wr(o);if(!a)throw Error(S(90));_u(o),xi(o,a)}}}break;case"textarea":Du(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};Fu=nl;Bu=un;var bp={usingClientEntryPoint:!1,Events:[Jo,Cn,wr,Hu,Lu,nl]},fo={findFiberByHostInstance:en,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ip={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uu(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{mr=Ta.inject(Ip),st=Ta}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hl(t))throw Error(S(200));return wp(e,t,null,n)};Le.createRoot=function(e,t){if(!hl(e))throw Error(S(299));var n=!1,o="",a=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=il(e,1,!1,null,null,n,!1,o,a),e[kt]=t.current,Lo(e.nodeType===8?e.parentNode:e),new ll(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Uu(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return un(e)};Le.hydrate=function(e,t,n){if(!Er(t))throw Error(S(200));return Cr(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!hl(e))throw Error(S(405));var o=n!=null&&n.hydratedSources||null,a=!1,r="",i=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=bc(t,null,e,1,n??null,a,!1,r,i),e[kt]=t.current,Lo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ar(t)};Le.render=function(e,t,n){if(!Er(t))throw Error(S(200));return Cr(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Er(e))throw Error(S(40));return e._reactRootContainer?(un(function(){Cr(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Le.unstable_batchedUpdates=nl;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Er(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Cr(e,t,n,!1,o)};Le.version="18.2.0-next-9e3b772b8-20220608";function Sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc)}catch(e){console.error(e)}}Sc(),bu.exports=Le;var Sp=bu.exports,Vh=Sp;wi.createRoot=Vh.createRoot,wi.hydrateRoot=Vh.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},$o.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const $h="popstate";function Tp(e){e===void 0&&(e={});function t(o,a){let{pathname:r,search:i,hash:s}=o.location;return ds("",{pathname:r,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:dr(a)}return Ap(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xp(){return Math.random().toString(36).substr(2,8)}function Kh(e,t){return{usr:e.state,key:e.key,idx:t}}function ds(e,t,n,o){return n===void 0&&(n=null),$o({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?eo(t):t,{state:n,key:t&&t.key||o||xp()})}function dr(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function eo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Ap(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:r=!1}=o,i=a.history,s=jt.Pop,l=null,u=g();u==null&&(u=0,i.replaceState($o({},i.state,{idx:u}),""));function g(){return(i.state||{idx:null}).idx}function p(){s=jt.Pop;let x=g(),m=x==null?null:x-u;u=x,l&&l({action:s,location:I.location,delta:m})}function y(x,m){s=jt.Push;let d=ds(I.location,x,m);n&&n(d,x),u=g()+1;let c=Kh(d,u),w=I.createHref(d);try{i.pushState(c,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(w)}r&&l&&l({action:s,location:I.location,delta:1})}function v(x,m){s=jt.Replace;let d=ds(I.location,x,m);n&&n(d,x),u=g();let c=Kh(d,u),w=I.createHref(d);i.replaceState(c,"",w),r&&l&&l({action:s,location:I.location,delta:0})}function k(x){let m=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof x=="string"?x:dr(x);return d=d.replace(/ $/,"%20"),ne(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let I={get action(){return s},get location(){return e(a,i)},listen(x){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener($h,p),l=x,()=>{a.removeEventListener($h,p),l=null}},createHref(x){return t(a,x)},createURL:k,encodeLocation(x){let m=k(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:y,replace:v,go(x){return i.go(x)}};return I}var Qh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qh||(Qh={}));function Ep(e,t,n){n===void 0&&(n="/");let o=typeof t=="string"?eo(t):t,a=ul(o.pathname||"/",n);if(a==null)return null;let r=xc(e);Cp(r);let i=null;for(let s=0;i==null&&s<r.length;++s){let l=Bp(a);i=Hp(r[s],l)}return i}function xc(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(r,i,s)=>{let l={relativePath:s===void 0?r.path||"":s,caseSensitive:r.caseSensitive===!0,childrenIndex:i,route:r};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(o),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(o.length));let u=Bt([o,l.relativePath]),g=n.concat(l);r.children&&r.children.length>0&&(ne(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xc(r.children,t,g,u)),!(r.path==null&&!r.index)&&t.push({path:u,score:Pp(u,r.index),routesMeta:g})};return e.forEach((r,i)=>{var s;if(r.path===""||!((s=r.path)!=null&&s.includes("?")))a(r,i);else for(let l of Ac(r.path))a(r,i,l)}),t}function Ac(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(o.length===0)return a?[r,""]:[r];let i=Ac(o.join("/")),s=[];return s.push(...i.map(l=>l===""?r:[r,l].join("/"))),a&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rp(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Np=/^:[\w-]+$/,_p=3,jp=2,Dp=1,Op=10,Mp=-2,qh=e=>e==="*";function Pp(e,t){let n=e.split("/"),o=n.length;return n.some(qh)&&(o+=Mp),t&&(o+=jp),n.filter(a=>!qh(a)).reduce((a,r)=>a+(Np.test(r)?_p:r===""?Dp:Op),o)}function Rp(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t){let{routesMeta:n}=e,o={},a="/",r=[];for(let i=0;i<n.length;++i){let s=n[i],l=i===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",g=Lp({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!g)return null;Object.assign(o,g.params);let p=s.route;r.push({params:o,pathname:Bt([a,g.pathname]),pathnameBase:Gp(Bt([a,g.pathnameBase])),route:p}),g.pathnameBase!=="/"&&(a=Bt([a,g.pathnameBase]))}return r}function Lp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Fp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],i=r.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:o.reduce((u,g,p)=>{let{paramName:y,isOptional:v}=g;if(y==="*"){let I=s[p]||"";i=r.slice(0,r.length-I.length).replace(/(.)\/+$/,"$1")}const k=s[p];return v&&!k?u[y]=void 0:u[y]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:i,pattern:e}}function Fp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(o.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function Bp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ul(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function zp(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?eo(e):e;return{pathname:n?n.startsWith("/")?n:Wp(n,t):t,search:Yp(o),hash:Vp(a)}}function Wp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ci(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Up(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ec(e,t){let n=Up(e);return t?n.map((o,a)=>a===e.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function Cc(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=eo(e):(a=$o({},e),ne(!a.pathname||!a.pathname.includes("?"),ci("?","pathname","search",a)),ne(!a.pathname||!a.pathname.includes("#"),ci("#","pathname","hash",a)),ne(!a.search||!a.search.includes("#"),ci("#","search","hash",a)));let r=e===""||a.pathname==="",i=r?"/":a.pathname,s;if(i==null)s=n;else{let p=t.length-1;if(!o&&i.startsWith("..")){let y=i.split("/");for(;y[0]==="..";)y.shift(),p-=1;a.pathname=y.join("/")}s=p>=0?t[p]:"/"}let l=zp(a,s),u=i&&i!=="/"&&i.endsWith("/"),g=(r||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||g)&&(l.pathname+="/"),l}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),Gp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nc=["post","put","patch","delete"];new Set(Nc);const Kp=["get",...Nc];new Set(Kp);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ko.apply(this,arguments)}const dl=A.createContext(null),Qp=A.createContext(null),fn=A.createContext(null),Nr=A.createContext(null),Vt=A.createContext({outlet:null,matches:[],isDataRoute:!1}),_c=A.createContext(null);function qp(e,t){let{relative:n}=t===void 0?{}:t;ea()||ne(!1);let{basename:o,navigator:a}=A.useContext(fn),{hash:r,pathname:i,search:s}=Dc(e,{relative:n}),l=i;return o!=="/"&&(l=i==="/"?o:Bt([o,i])),a.createHref({pathname:l,search:s,hash:r})}function ea(){return A.useContext(Nr)!=null}function ta(){return ea()||ne(!1),A.useContext(Nr).location}function jc(e){A.useContext(fn).static||A.useLayoutEffect(e)}function mn(){let{isDataRoute:e}=A.useContext(Vt);return e?hg():Xp()}function Xp(){ea()||ne(!1);let e=A.useContext(dl),{basename:t,future:n,navigator:o}=A.useContext(fn),{matches:a}=A.useContext(Vt),{pathname:r}=ta(),i=JSON.stringify(Ec(a,n.v7_relativeSplatPath)),s=A.useRef(!1);return jc(()=>{s.current=!0}),A.useCallback(function(u,g){if(g===void 0&&(g={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let p=Cc(u,JSON.parse(i),r,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Bt([t,p.pathname])),(g.replace?o.replace:o.push)(p,g.state,g)},[t,o,i,r,e])}function cl(){let{matches:e}=A.useContext(Vt),t=e[e.length-1];return t?t.params:{}}function Dc(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=A.useContext(fn),{matches:a}=A.useContext(Vt),{pathname:r}=ta(),i=JSON.stringify(Ec(a,o.v7_relativeSplatPath));return A.useMemo(()=>Cc(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function Jp(e,t){return Zp(e,t)}function Zp(e,t,n,o){ea()||ne(!1);let{navigator:a}=A.useContext(fn),{matches:r}=A.useContext(Vt),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=ta(),g;if(t){var p;let x=typeof t=="string"?eo(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||ne(!1),g=x}else g=u;let y=g.pathname||"/",v=y;if(l!=="/"){let x=l.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=Ep(e,{pathname:v}),I=ag(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Bt([l,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Bt([l,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),r,n,o);return t&&I?A.createElement(Nr.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:jt.Pop}},I):I}function eg(){let e=lg(),t=$p(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:a},n):null,null)}const tg=A.createElement(eg,null);class ng extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?A.createElement(Vt.Provider,{value:this.props.routeContext},A.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function og(e){let{routeContext:t,match:n,children:o}=e,a=A.useContext(dl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Vt.Provider,{value:t},o)}function ag(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let i=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let g=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id]));g>=0||ne(!1),i=i.slice(0,Math.min(i.length,g+1))}let l=!1,u=-1;if(n&&o&&o.v7_partialHydration)for(let g=0;g<i.length;g++){let p=i[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=g),p.route.id){let{loaderData:y,errors:v}=n,k=p.route.loader&&y[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||k){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((g,p,y)=>{let v,k=!1,I=null,x=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,I=p.route.errorElement||tg,l&&(u<0&&y===0?(ug("route-fallback",!1),k=!0,x=null):u===y&&(k=!0,x=p.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,y+1)),d=()=>{let c;return v?c=I:k?c=x:p.route.Component?c=A.createElement(p.route.Component,null):p.route.element?c=p.route.element:c=g,A.createElement(og,{match:p,routeContext:{outlet:g,matches:m,isDataRoute:n!=null},children:c})};return n&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?A.createElement(ng,{location:n.location,revalidation:n.revalidation,component:I,error:v,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Oc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Oc||{}),cr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cr||{});function rg(e){let t=A.useContext(dl);return t||ne(!1),t}function ig(e){let t=A.useContext(Qp);return t||ne(!1),t}function sg(e){let t=A.useContext(Vt);return t||ne(!1),t}function Mc(e){let t=sg(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function lg(){var e;let t=A.useContext(_c),n=ig(cr.UseRouteError),o=Mc(cr.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function hg(){let{router:e}=rg(Oc.UseNavigateStable),t=Mc(cr.UseNavigateStable),n=A.useRef(!1);return jc(()=>{n.current=!0}),A.useCallback(function(a,r){r===void 0&&(r={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ko({fromRouteId:t},r)))},[e,t])}const Xh={};function ug(e,t,n){!t&&!Xh[e]&&(Xh[e]=!0)}function at(e){ne(!1)}function dg(e){let{basename:t="/",children:n=null,location:o,navigationType:a=jt.Pop,navigator:r,static:i=!1,future:s}=e;ea()&&ne(!1);let l=t.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:r,static:i,future:Ko({v7_relativeSplatPath:!1},s)}),[l,s,r,i]);typeof o=="string"&&(o=eo(o));let{pathname:g="/",search:p="",hash:y="",state:v=null,key:k="default"}=o,I=A.useMemo(()=>{let x=ul(g,l);return x==null?null:{location:{pathname:x,search:p,hash:y,state:v,key:k},navigationType:a}},[l,g,p,y,v,k,a]);return I==null?null:A.createElement(fn.Provider,{value:u},A.createElement(Nr.Provider,{children:n,value:I}))}function cg(e){let{children:t,location:n}=e;return Jp(cs(t),n)}new Promise(()=>{});function cs(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(o,a)=>{if(!A.isValidElement(o))return;let r=[...t,a];if(o.type===A.Fragment){n.push.apply(n,cs(o.props.children,r));return}o.type!==at&&ne(!1),!o.props.index||!o.props.children||ne(!1);let i={id:o.props.id||r.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=cs(o.props.children,r)),n.push(i)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},fs.apply(this,arguments)}function fg(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function mg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pg(e,t){return e.button===0&&(!t||t==="_self")&&!mg(e)}const gg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],yg="6";try{window.__reactRouterVersion=yg}catch{}const wg="startTransition",Jh=ff[wg];function vg(e){let{basename:t,children:n,future:o,window:a}=e,r=A.useRef();r.current==null&&(r.current=Tp({window:a,v5Compat:!0}));let i=r.current,[s,l]=A.useState({action:i.action,location:i.location}),{v7_startTransition:u}=o||{},g=A.useCallback(p=>{u&&Jh?Jh(()=>l(p)):l(p)},[l,u]);return A.useLayoutEffect(()=>i.listen(g),[i,g]),A.createElement(dg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:o})}const kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=A.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:r,replace:i,state:s,target:l,to:u,preventScrollReset:g,unstable_viewTransition:p}=t,y=fg(t,gg),{basename:v}=A.useContext(fn),k,I=!1;if(typeof u=="string"&&bg.test(u)&&(k=u,kg))try{let c=new URL(window.location.href),w=u.startsWith("//")?new URL(c.protocol+u):new URL(u),T=ul(w.pathname,v);w.origin===c.origin&&T!=null?u=T+w.search+w.hash:I=!0}catch{}let x=qp(u,{relative:a}),m=Ig(u,{replace:i,state:s,target:l,preventScrollReset:g,relative:a,unstable_viewTransition:p});function d(c){o&&o(c),c.defaultPrevented||m(c)}return A.createElement("a",fs({},y,{href:k||x,onClick:I||r?o:d,ref:n,target:l}))});var Zh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zh||(Zh={}));var eu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(eu||(eu={}));function Ig(e,t){let{target:n,replace:o,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:s}=t===void 0?{}:t,l=mn(),u=ta(),g=Dc(e,{relative:i});return A.useCallback(p=>{if(pg(p,n)){p.preventDefault();let y=o!==void 0?o:dr(u)===dr(g);l(e,{replace:y,state:a,preventScrollReset:r,relative:i,unstable_viewTransition:s})}},[u,l,g,o,a,n,e,r,i,s])}function Sg(){const e=mn(),t=n=>{e(n)};return h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["An unofficial writing event for fans of",h.jsx("br",{}),h.jsx("b",{children:"~ Foil Arms and Hog ~"})]}),h.jsxs("nav",{className:"menu main",children:[h.jsx("button",{onClick:()=>t("/guidelines"),children:"Guidelines"}),h.jsx("button",{className:"shorts",onClick:()=>t("/stories"),children:"Short Stories"}),h.jsx("button",{className:"poems",onClick:()=>t("/poems"),children:"Poems"}),h.jsx("button",{className:"filks",onClick:()=>t("/irishfarmerhits"),children:"Irish Farmer Hits"})]}),h.jsxs("div",{className:"addendum",children:[h.jsxs("p",{className:"lesspmargin",children:["Instagram:"," ",h.jsx("a",{href:"https://www.instagram.com/fahnwritingcontest/",children:"@fahnwritingcontest"})]}),h.jsx("p",{className:"lesspmargin",children:"Note: this event is made by fans. It is not officially affiliated with Foil Arms and Hog."})]})]})}function Tg(){return h.jsxs("div",{className:"rules",children:[h.jsx("h3",{className:"underline",children:"Categories:"}),h.jsx("h4",{className:"reduce-margin-heading no-indent",children:"Writers:"}),h.jsxs("p",{children:[h.jsx("strong",{children:"1. Short Story: "})," 2000-word limit"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"2. Poem: "})," 50 lines maximum"]}),h.jsxs("p",{children:[h.jsx("strong",{children:"3. Irish Farmer Hit (Song Filk):"}),h.jsxs("ul",{children:[h.jsx("li",{children:"Rewrite a song's lyrics as if you are the Irish Farmer Michail O'Flaithbheartaigh, on a theme related to farming or Irish life."}),h.jsx("li",{children:"4 lines minimum"}),h.jsx("li",{children:"You must provide the title and artist of the original song."}),h.jsx("li",{children:"OPTIONAL: include a video or audio clip of you or someone performing your song!"})]})]}),h.jsxs("p",{children:[h.jsx("span",{className:"underline",children:"Tip:"})," Give your piece a title that will draw in readers!"]}),h.jsx("h3",{className:"underline",children:"Timeline:"}),h.jsx("h4",{className:"reduce-margin-heading no-indent",children:"Writers:"}),h.jsx("div",{style:{color:"maroon"},children:h.jsxs("strong",{children:[h.jsx("u",{children:"SUBMISSION PERIOD"}),": April 2nd ",h.jsx("code",{children:"—"})," May 10, 11:59PM Irish Time"]})}),h.jsx("h4",{className:"reduce-margin-heading",children:"Readers/Voters:"}),h.jsx("u",{children:"VOTING PERIOD"}),": May 14 ",h.jsx("code",{children:"—"})," May 31, 11:59PM Irish Time",h.jsx("p",{children:"Results will be determined and announced in the first week of June."}),h.jsx("h3",{className:"underline",children:"Rules:"}),h.jsxs("ul",{className:"no-indent",children:[h.jsxs("li",{children:["Submit your entry or entries via the Google Form urls by"," ",h.jsx("strong",{children:"May 10, 2024 11:59PM Irish Time"}),"."]}),h.jsx("li",{children:"You may enter in more than one category."}),h.jsx("li",{children:"You can only submit a maximum of 1 entry in each category."}),h.jsx("li",{children:"The entries will be listed in the order they are received."}),h.jsx("li",{children:"Do not submit anything that has already been publicly shared elsewhere (including but not limited to: works shared on social media; works posted on Archive Of Our Own; works that have won or placed in a FlAsH Fiction contest and been displayed on the AcademicFAHn website; and works that have been part of a FAHnart Challenge)."}),h.jsx("li",{children:"During the voting period, all the entries will be anonymized--the authors' names will not be shown."}),h.jsx("li",{children:"No smut or explicit sexual content."}),h.jsx("li",{children:"No real person fiction. You can write about Foil Arms and Hog and their characters, but not about Sean, Conor, and Sean."}),h.jsxs("li",{children:["Your entry must be rated ",h.jsx("strong",{children:"PG-13 and under"}),". No R or NC-17 content."]})]}),h.jsx("p",{children:"The hosts reserve the right not to post your submission(s) if we deem it violates the above."}),h.jsx("h3",{className:"underline",children:"Voting:"}),h.jsxs("ul",{className:"no-indent",children:[h.jsx("li",{children:"Entries will be made available to view on this website starting on May 14th, 2024."}),h.jsx("li",{children:'Readers will be asked to rank their 1st, 2nd, and 3rd favourite works in each category. Each "1st favourite" vote will earn the author 3 points; each "2nd favourite" vote will earn the author 2 points; and each "3rd favourite" vote will earn the author 1 point.'}),h.jsx("li",{children:"Please only vote once per category."}),h.jsx("li",{children:"Voting will be open until May 31st, 2024 11:59PM Irish Time."}),h.jsx("li",{children:'The points will be tallied to determine the "Crowd Favourite" (first place) and the "Also Awesome" (second place) winner in each category.'}),h.jsx("li",{children:"Results will be announced in the first week of June."})]}),h.jsx("h3",{className:"underline",children:"Prizes:"}),h.jsxs("ul",{className:"no-indent",children:[h.jsx("li",{children:"In each category:"}),h.jsxs("ul",{children:[h.jsx("li",{children:"First place title: Crowd Favourite"}),h.jsx("li",{children:"Second place title: Also Awesome"})]}),h.jsx("li",{children:"The entries of the first- and second-place winners in each category will be featured in the FAHn Facebook Group and on Instagram."}),h.jsx("li",{children:"Possibly another (small) prize for the winners are in the works, but don't expect much (if any)."}),h.jsx("li",{children:"After the voting period closes, all authors' names, pennames, and/or social media handles will be displayed alongside their entries on this website."})]}),h.jsx("br",{})]})}const xg=[{type:"Short Story",url:"https://forms.gle/S5uknakqPpFCTe2g6"},{type:"Poem",url:"https://forms.gle/67rhxNMgzNhX3Ywt7"},{type:"Irish Farmer Hit",url:"https://forms.gle/x7tvYeFc16dZkk6k7"}];function Ag(){return h.jsxs(h.Fragment,{children:[h.jsx("h2",{children:"Submit Your Entries"}),xg.map(e=>h.jsx(h.Fragment,{children:h.jsxs("p",{children:["Submit your ",h.jsx("strong",{children:e.type})," here:"," ",h.jsx("a",{href:e.url,children:e.url})]})}))]})}const Eg={id:1,title:"An Ode to Barry",author:"Sophie C.",context:"I love Barry and his obsession with nuggets and magnums. So I thought I'd write something about him!",content:`
  In a town where laughter fills the air, lives a boy named Barry with a flair.  

With a smile that sparkles, eyes so bright, he’s known for a love that brings delight. 

Barry, dear Barry, a boy so true, his heart belongs to nuggets, that much is due. 

Golden, crispy, and oh so divine, he savors each bite like it’s straight from a shrine. 

But wait, there's more to Barry’s tale, for another love in his heart sets sail. 

Magnums, oh Magnums, ice cream divine, with flavors galore, a taste so fine. 

In the heat of summer or winter's chill, Barry seeks solace in a creamy thrill. 

Chocolate, vanilla, or caramel swirl, each spoonful a dance, a joyful whirl. 

With nuggets in hand and a Magnum in tow, Barry roams the streets with a radiant glow.  

His love for these treats knows no end, a culinary journey, a tale to transcend. 

So, here's to Barry, with nuggets and Magnums, in his world, joy comes in golden crumbs.  

May his days be filled with tasty delight, as he savors each moment, morning to night. 
`},Cg={id:2,hideAuthorName:!0,penname:"Selkie",social:{ao:"wandering_wings"},title:"Mrs. Geraghty's Villainelle",context:`A villanelle is a type of poem - one famous example is Dylan Thomas' "Do Not Go Gentle Into That Good Night."  Mrs. Geraghty has no intention of going gently into any sort of night!  
This poem imagines how things might look from her perspective.`,content:`
  I do not now rely upon my kin
To visit me and brighten evening’s gloam -
Instead, I sit and sip a glass of gin.

They might as well have thrown me in the bin
As pack me off to this infernal “home” – 
I do not now rely upon my kin.

When grandsons visit, often I begin
To wish I was at liberty to roam –
Instead, I sit and sip a glass of gin.

I say “you’ve changed” with sneer instead of grin;
I don’t play nice; my gray hair I’ll not comb –
I do not now rely upon my kin.

Although my life’s been long and full of sin
I’m kicking still, not buried in the loam;
Instead, I sit and sip a glass of gin.

Some days I like to cheat at cards and win;
Today from boredom I made up this poem.
I do not now rely upon my kin
Instead, I sit and sip a glass of gin.
  `},Ng={id:3,author:"Elaine Wang",social:{ig:"@elaine.escapes"},title:"Wildflower",context:"A poem on what it is like to be a fahn, particularly one who lives far away from Ireland.",content:`
I am but one wildflower
In a field vast as the world is wide.
The field holds many others;
Here myriad blooms reside.

You are the men strolling
Amongst us with steps light.
Laughing, joking, bantering,
You shower us with delight. 

All the flowers adore you,
Your humor, and your smile.
You have us all feel new.
You have us all beguiled.

I am in a distant corner
Far-flung away from you.
Rarely do you come hither;
The walk’s too taxing to pursue.

You don’t even know me,
Yet I often think of you.
Each your deed a memory
Fresh as the morning dew.

Surely you’ve your own garden
With roses you love and tend.
Your own homegrown Eden,
While I can only just pretend.

If chance should grant that we do meet,
If fortune e'er allowed,
It'd go quick as a heartbeat
Ere I melt back in the crowd.

I am but one wildflower
Gazing at her stars.
I have little power
But to admire you from afar.

Yet despite the vast distance,
With this I am content.
Just knowing of your existence
Is already thoughts well-spent.

When the winds whisper of your tidings,
My heart with joy does swell.
On the winds back to you is riding
My wish that you be well.
  `},_g={id:4,author:"Henry Llewelyn Jones",title:"Ode to FAH",social:{ig:"@henster_200512"},content:`
  Three comedic souls, a trio of mirth,
Foil Arms and Hog, kings of the earth,
With wit and charm, they craft their art,
A joyous laughter that warms every heart.

In sketches and spoofs, they find their groove,
Their playful banter, a joy to prove,
From quirky scenes to the absurd,
Their humor's magic, a language heard.

On stages they stand, with faces aglow,
The world their audience, a vibrant show,
From Dublin's streets to the world's embrace,
Their comedy brings smiles to every face.

O FAH, masters of jest,
You lighten our hearts, you are the best,
In every skit, a touch of delight,
A toast to you, in laughter's bright light.`},jg={id:5,author:"Kristin Taggart",title:"Clean As You Go",social:{fb:"kristin.taggart.16",website:"shelfreflections.com"},content:`
Oisín, come help me in the kitchen, pet.
Oh yes, you have to!  I’m up to my eyes.
Now read the recipe and don’t forget
The measurements must be the proper size.
A heaped teaspoon, a scoop, a pinch, a dash—
No, cooking isn’t pizza or cornflakes!
You’ll eat the fish, not throw it in the trash
You’re hungry now?  An apple’s all it takes.
Be careful you don’t scratch my non-stick pan,
And pots won’t boil if you stand and stare.
Now come and stir this bowl fast as you can
And then we’ll have a dinner we can share.
And if you’ve paid attention, you should know
The most important rule: Clean as you go!
`},Dg={id:6,hideAuthorName:!0,penname:"Loona",context:"It talks about the times when I lost my father.",title:"Diamonds in the Dark",social:{ig:"@anjathevulture"},content:`
Ordinary day, what can I say.
But something changed my life forever.
Will I be able to go through this?
Will I be able to smile again?
Then I remember my pics, smiling with the lads.
Here they are, my diamonds in the dark times.
No matter how much it hurts,
lads are always there.
Making me laugh when I feel like screaming.
Making me smile when I feel life’s unfair.
Making me happy when I feel like I have no happiness left.
Making me glad...that I know these wonderful people.
Something about them, their generous, caring nature makes me feel so welcome.
Makes me feel like I found appreciation for the first time in my life ever.
Makes me feel...like I have finally found people who make me feel understood.
There’s the wonderful blonde sunshine, who is just the best person ever,
the ‘tall’ funny bloke who only if I look at him, I laugh
and the hilarious curly guy always stealing the show.
Three ordinary guys doing extraordinary work.
Making people laugh even in the darkest times.
Thank you lads.I truly mean it.
  `},Og={id:7,author:"Sue Cole",title:"An Evening With Mrs. Geraghty",context:"Trying to capture as many of her tricks as possible without it becoming tedious.",content:`
Gran’s settled in, with her crisps and her gin.
Dinner was good, sausage, mash and rice pud.
Telly’s on now: it’s time to have fun.
Get the nurses to nag, light up a fag.
Play with some glue for a minute or two,
Then pick someone’s pocket and tip up a bucket.
Hide some wheelchairs, put balls on the stairs,
Let tyres down and turn the grass brown.
Share toffee for teeth and deny she’s a thief.
Skinny dip in the lake and be on the take,
Disturb the bingo and let everything go.
Hide the remote and and enjoy a good gloat.
Then end with a song, and all sing along
About fun in a pub, a nighttime bridge club.
Then pills swapped around, some whole and some ground
Then, just like she said, they’re all off to bed.
  `},Mg={id:8,hideAuthorName:!0,penname:"Dilemmasaurus",title:"'Shakespeare, Frost and Yeats: what even is their point these days?' by Oisín Flanagan, Class 6B",context:"Oisín Flanagan doesn't find poetry analysis for his Leaving Cert comes easily, but he promises Anne he is trying.",social:{ao:"Dilemmasaurus",ig:"@dilemmasaurus"},content:`
  "Shall I compare thee to a summer’s day?"
Shakespeare likens a youth to summer's sun
But my computer games I cannot play
So summer's not an endless stretch of fun

Then Mum accosts me with some dumb brochure
For tennis, science, French, or tree shaping
And from that pile of steaming shi— manure
I must devise a means of escaping

The Bard describes a youth who's temperate
And whose eternal summer shall not fade
But I live with the devil incarnate
And of her enforced fun I am afraid

So when she says we'll learn a TikTok dance
I run outside so I can tend the plants

"Two roads diverged in a yellow wood"
And Robert Frost took the one less taken
Well my mum sings from the same hymnbook
(We weren't even going somewhere good
She drove me somewhere godforsaken)

Frost's walker fears that he'll feel sorrow
But I feared boredom so I said
There must be quicker ways to go
'I will be going the way I know'
Said Mum (she's such a wreck-the-head!)

Both roads that morning equally lay
In reas'nably well maintained tarmac
But Mum won't take the motorway
(Because the toll she will not pay)
And so we took the unbeaten track

Like Frost I'll tell this with a sigh
For years to come and ages hence
Two roads diverged in Kildare, and I…
I waved the proper route goodbye
And six hours was the difference

"I will arise and go now, and go to Innisfree"
Yeats's poem speaks of wanting to leave the city
My mum made me arise though, to go to Dunbooey
(A Gaeltacht village that's sh— pretty)

Inisfree's lapping lake water makes Yeats long to go
Dunbooey's water just laps a beach that's painful stones not sand
For him Innisfree means peace, there "peace comes dropping slow"
In Dunbooey what's slow's the broadband

While he stood "on the roadway", the pavements of Dublin
Yeats dreamt of going back, of leaving civilisation
But Yeats prob'ly thought a good treat was a mandarin
And he didn't own a Playstation
  `},Pg={id:9,penname:"Anonymous",title:"#thegreatestgoat",context:"This is a poem about one of the products that sponsors Influencer Dad, McCormick's dry rolled oats.",content:`
  Props to the greatest of goats,
Not angora, or pygmy
But McCormick’s rolled oats.

Perfect for breakfast, dinner or lunch,
Even eat them dry by the handful,
Munch, munch, munch.

McCormick’s oats are my favorite,
you see. 

Well,
as long as they still sponsor me.








  ~Author Note~
  I debated about how to spell McCormick's. In the closed captions of When your Dad is an Influencer, it's spelled as "McCormacks". However, when googling it, I found that McCormick is an actual brand that sells oats and spices so I went with that spelling. 
  `},Rg={id:10,author:"Nathalie Brouwers",social:{ig:"@nathalie_b1 "},title:"The Village of Dunboey",context:"Just some sketches",content:`
In Dunboey lived a woman so neat,
Cleaning as she goes, a fortunate feat! 
Besides she has Oisin, her son.
and his friend Barry, sun's light spun.
He tried to join her family, so sweet!

Barry's mom cares not, his dad’s away, 
Anne Flanagan leads him day by day. 
For nuggets he will roam, 
he’ll pick Penguins, his syndrome. 
But Anne likes him, come what may.

She tries for some family time alone,
with Oisin, Barry's presence always known.
The lads don't mind the fun,
playing games, in the sun.
Instead Anne makes them do her yard, well-mown!

The lads had learned improv one day,
theatre with Richard Chandley's sway. 
It went totally wrong, 
Rich took the stage alone,
and he stole the show, stealing the day!

They could also take a class in this TRA
This artist in residence, La BULLSHAT
gave them a really good ride,
tried to be their silly guide,
thereby hardly keeping up any law.

Neighbour Paddy, notorious home-crafter,
gave them often a wholesome big laughter.
Once punched a hole in the wall,
but Derek could fix it all.
They all lived happily ever after! 

THE END
`},Hg={id:11,author:"BQ",title:"Murple Holes",context:"If you haven't watched the murple livestream, this won't make sense. If you have watched the murple livestream, this still won't make sense, I promise.",content:`
  PART 1
“What’s a murple?”
“A what?”
“Murple. A murple. Last night, I dreamt we were sketch comedians, and you mentioned them on a livestream.” 
“We’re not sketch comedians. We’re squatters.”
“Right. Of course. But what’s a murple?”
“I don’t know!”
“But in my dream, you knew.”
“Arghhh! If I make something up, will you stop asking?”
“Maybe.”
“Hmmm. Maybe a murple is something you’d find  in a climbing gym.”
“That’s the stupidest thing I’ve ever heard”
“You’re the stupidest thing I’ve ever heard. I don’t know what a fucking murple is, ok?”
“Geez. You sound like you could commit murple.”
“Huh?”
“Yeah. You sound so angry like you could commit murple.”
“Were you trying to say ‘commit murder’?”
“Yeah! That’s murp I murpled murp.”
“Are you ok?”
“What’s murpling to me?”
“Hey. Hey! Look at me. You’ll be fi—Why are you shrinking?”
“I’m turning into a murple.”
“Well, try and stop that!”

PART 2
“What’s a murple?”
“A what?”
“Murple. A murple. Last night, I dreamt we lived in an abandoned house. And you were asking me about them.”
“Get it together, man. Why would we live in an abandoned house? We’re not squatters. We’re sketch comedians.” 
“Right. Of course.”
“You’re losing your murples.”
“I’m losing my marbles?”
“Yes. That’s what I said. The murple of the story is, stop letting your imagination…”
“The murple of the story?”
“Yes, the murple! I mean the moral!”
“Are you ok?”
“Aahh. What’s murpling to me…”
“You’re turning into a murple. It will be okay.”

PART 3
Foil grinned and looked at the spot where his two best friends had just been standing. 
They’d laughed too hard at his murple error on the livestream. 
Maybe they shouldn’t have. 
Maybe they should’ve asked how he’d traveled the multiverse to collect so many murples in the first place. 
You see, a lot of people had questioned him about his murples. 
And now? 
Well let’s just say now Foil had two fewer best friends, and two new murples to add to his collection.
Finally, he could expand his route on the climbing gym. 
Sure, the FAHns would be disappointed at losing Arms and Hog, but he’d explain it to them at the next Meet and Greet. 
And if they still weren’t happy? Well. Let’s just say… the climbing route could always be expanded further…
`},zn=[Eg,Cg,Ng,_g,jg,Dg,Og,Mg,Pg,Rg,Hg];function fl(e){return Math.floor(Math.random()*e)+1}const Pc=({entry:e,category:t,additionalItemStyle:n})=>{const o=mn(),a=()=>{window.scrollTo({top:0,behavior:"smooth"}),o(`/${t==="story"?"stories":"poems"}/${e.id}`)};return h.jsxs("div",{className:`book-item ${t} ${n} `,onClick:a,children:[h.jsx("div",{className:"side back"}),h.jsx("div",{className:"side left"}),h.jsx("div",{className:"side right"}),h.jsx("div",{className:"side top"}),h.jsx("div",{className:"side bottom"}),h.jsx("div",{className:"side front",children:h.jsx("h3",{className:"title",children:e.title})})]})};function Lg(){const[e,t]=A.useState(()=>localStorage.getItem("poemMenuType")||"list");return A.useEffect(()=>{localStorage.setItem("poemMenuType",e)},[e]),h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"less-h2-margin",children:"Poems"}),h.jsxs("nav",{className:"menu",children:[h.jsx(Re,{to:`${fl(zn.length)}`,className:"randomizer-link",children:"Click this link to start reading a random poem from the list"}),h.jsx("p",{className:"select-instruction",children:"Or select a poem from below:"}),h.jsxs("div",{className:"menu-selection-container",children:[h.jsxs("section",{onClick:()=>t("list"),className:e==="list"?"active poem":"",children:[h.jsx("span",{className:"menu-type-text",children:"List View"}),h.jsx("img",{src:"icons/buttonListIcon.png",width:20})]}),"|",h.jsxs("section",{onClick:()=>t("books-menu"),className:e==="books-menu"?"active poem":"",children:[h.jsx("img",{src:"icons/bookStackIcon.png",width:20}),h.jsx("span",{className:"menu-type-text",children:"Books View"})]})]}),e==="list"&&zn.map(n=>h.jsx(Fg,{poem:n},n.id)),e==="books-menu"&&h.jsx("div",{className:"books-container",children:zn.map(n=>h.jsx(Pc,{entry:n,category:"poem",additionalItemStyle:`poem-${n.id}`},n.id))}),h.jsx("a",{href:"https://forms.gle/eEw1P5c9FFfiMDgH9",target:"_blank",children:h.jsx("button",{className:"vote",children:"Vote for your favourite poems here"})})]})]})}function Fg({poem:e}){const t=mn(),n=()=>{t(`/poems/${e.id}`)};return h.jsx("button",{className:"poems",onClick:n,children:e.title})}function Bg(){const{id:e}=cl(),t=Number(e),n=zn.find(o=>o.id===t);return window.scrollTo(0,0),h.jsx("div",{className:"entry maxwidth",children:n?h.jsxs(h.Fragment,{children:[n.context&&h.jsx("p",{className:"context",children:n.context}),h.jsx("h2",{className:"entry-title maxwidth",children:n.title}),h.jsx("div",{className:"format",children:n.content}),h.jsxs("div",{className:"entries-nav maxwidth",children:[h.jsx(Re,{to:"/poems",children:"Back to All Poems"}),t<zn.length&&h.jsx(Re,{to:`/poems/${t+1}`,children:"Next Poem"}),t===zn.length&&h.jsx(Re,{to:"/poems/1",children:"Go to First Poem"})]})]}):h.jsx("p",{children:"Poem not found"})})}const zg={id:1,author:"Anna Howram",context:"When 'A Snob in A&E' was posted, I saw several comments suggesting that viewers have some sympathy for The Snob (Or Dennis, as we now know he's called) and were rooting for him to find friendship/love with Arms' character who appears at the end. So, here it is! ",title:"A Snob Discharged",social:{ao:"Ursa Dextra"},content:`
    “Robert Frost?” says the man in the next-but-one seat in the A&E waiting room.

“Aha! Yes!” Dennis, who had been reciting a favourite poem to entertain a now-departed patient, gasps with delight.

“I couldn’t help overhearing. How wonderful to happen across a fellow poetry lover! I did attempt to engage the nurse who bandaged my hand, but found she had very little knowledge of Wilfred Owen, Wordsworth, or even of Shakespeare. A very kind woman, very good at her job, but she had nothing in the way of conversation.”

“Yes, I often feel the art of conversation has been lost. The young gentleman who just left, for example - a fine person in many ways, but very little to say for himself. I made several attempts over the last – what is it now, six hours? But I feel the effort was being made entirely on my part.”

“Yes, yes. A sad state of affairs, indeed.”
Dennis presses the arm of his glasses to his lips and nods thoughtfully. He has a feeling that he recognises the stranger beside him; a tall dark-haired man, around forty years old, with the air of a distinguished but kindly professor. Where might he have seen that face before?

“If you don’t mind me saying, sir,” he ventures, “something in your countenance seems familiar. Are we, perchance, already acquainted?”

“I don’t believe I’ve had the pleasure,” replies the man, indicating that he has the answer by twirling and flicking his own glasses as if they were a magic wand, “but you probably know of my brother, Terrance. Known to the art world as La Bullshat.”

“Upon my word, how very extraordinary! Imagine, in these most insalubrious of surroundings, meeting the brother of the great Bullshat. I have his book, Tra, on the table in my own parlour. A most insightful work, I feel, articulate and thought-provoking. Please, pass on my highest regards to the great man.”

“Ah yes, my bother, the tortured genius,” sighs the new friend, “and I, alas, the second fiddle.”

“Oh, come come good sir! I’m sure you too are a most remarkable fellow in our own right. Tell me, what shall I call you? I myself am Dennis.”

“Dennis, you are so very kind. My name is Keith.”
“Keith! It’s simply splendid to meet you...” Dennis unthinkingly holds out his hand to shake, but the movement causes his wound to painfully jog his memory.

Keith indicates his own right hand, also bandaged. “Terribly silly of me,” he explains, “I have a dedicated tool to remove avocado stones, but it was all ready to be washed up, and so I used a completely unsuitable knife instead, with results as you can see. Dare I ask what misadventure befell your poor hand?”

“I’m afraid it was also a terribly silly incident involving a corkscrew and a... ugh, a 1972 Bordeaux.”

“Oh! How simply dreadful!”

“Yes, one of the worst years, but my wine stocks are rather depleted...”

“Hoh! Hoh! Hoh!” laughs Keith, “No no, I mean only to express sympathy for your unfortunate accident. But you are right, of course, quite right, the 1972 crop really was not worth preserving at all. Well, here we are – you know wine, you know poetry, you know art, how incredibly happy I am to have met you, Dennis. If only it could have been under more pleasant circumstances – at the opera, perhaps, or in the botanical gardens, I would say that I am enjoying the experience greatly.”

Dennis finds himself feeling strangely flustered. The idea of visiting an opera or a botanical garden with Keith is very appealing indeed , and the added bonus of a compliment makes his cheeks burn. He can’t remember the last time he felt such an instant rapport with someone, although he does try his best to befriend people from all walks of life wherever he goes. He opens his mouth to eloquently express that that would be lovely, they really ought to do something together one day, but only a little simpering giggle flutters from his throat. He cringes in embarrassment.

“Are you quite well?” asks Keith, concerned, head on one side, “shall I call the nurse?”

“I’m... I’m most frightfully sorry,” says Dennis, struggling to pull himself together, “perhaps the painkillers are making me light-headed. And I’m sleep-deprived, of course.”

“Perhaps you ought to have a bite to eat,” says Keith, producing a cool bag from under his seat, “I didn’t have time to prepare a feast, but I do at least have a little sustenance to share. A pack of grissini, spiced hummus, some marinated olives – my own special recipe – a fresh rocket salad and some sparkling spring water. I hope there’s something to your liking there.”

Dennis would ideally like to thank Keith for sharing his snacks, compliment him on his generosity, ask about the herb mix he uses on his olives and perhaps learn more about how good a cook he is; but all he can blurt out is, ‘I have cheeses!”

Still, Keith is delighted by the addition to the picnic, and the pair enjoy their nibbles together. They talk of food and drink they enjoy, then over the next hour or so the subject flows naturally back to poetry, then to literature in general. The sky beyond the large glass doors of the waiting room lightens from indigo to cyan as dawn breaks, the other patients move between consulting rooms, the night staff leave and the day staff arrive. Oblivious to it all, Dennis does what he can to keep up with his companion; but finds it so very, very hard to concentrate on formulating appropriate responses when his brain keeps misfiring and admiring the dazzling lapis blue of his eyes, or imagining how it would feel to stroke the sleek, thick weft of hair that sweeps across his forehead. Lost in his companion’s charms, Dennis could be anywhere. The hospital and its noise exists outside his consciousness, whilst the two of them are cosied up in their own reality.

And then, all too soon, their time together is over.

“OK, you’re free to go,” the doctor says to Dennis after calling him into another room for a tetanus jab, “the nurse will see you in two weeks to remove your stitches. In the meantime, keep it clean, take ibuprofen if it bothers you, and come back if there’s any sign of infection.”

“Is that everything, Doctor?” he asks, hoping for any excuse to stay and talk to Keith a little longer.

“That’s everything, yes. You can go.”

“Are you sure?”

“Yes, you’re discharged.”

“Absolutely sure there’s nothing else you could possibly do for me? May I require an X-ray, perhaps? Or a CAT scan?”

 “Could you please leave? I have a lot of patients to get through.”

“Oh, I see, well then, I shall... return chez moi.”

He walks back to the waiting room to collect his bag, dreading the final goodbye. It doesn’t help that Keith smiles and waves as if overjoyed to see him again.

“I am sad to say I must bid you adieu,”  explains Dennis, “I’ve been discharged.”

“Ah, an honourable discharge, I trust?” says Keith, forcing a tight-lipped smile, “Well, I did very much enjoy meeting you, good sir, and I very much hope I might find you again, in happier times and a more comfortable setting. Until then - a fond farewell!”

Dennis tries to reply, but nothing appropriate comes to mind. He feels as if he might cry at any moment. Leaving hospital has lost its appeal now; all that awaits him back at his bedsit flat – that is, his luxury studio apartment – is schemes to stretch the remainder of his dwindling inheritance ever more thinly. Well, that and the wine. His parents might not have left him as much money as he’d expected, but there was at least plenty of wine in their cellar.

He trudges through the glass doors and out onto a paved area, where the road to the ambulance bay sweeps around the front of the building. A zebra crossing leads ahead to the car park and pedestrian entrance. It is daylight. Birds are singing, traffic is moving along the main road, a siren wails in the distance. The city is waking up.

“Come Dennis, pull yourself together,” he murmurs to himself as he plods on toward the crossing, “go back and simply ask him – no, tell him... Just say...”

He stops in the middle of the crossing, physically ready to turn around but with no speech prepared. The siren grows louder.

“Of course, a poem! I shall tell him how I feel though the medium of poetry. But which, that is indeed the question. Oh, curse that infernal cacophony, I can’t think with that...”

Then two things happen at the same moment. The first is that an ambulance comes roaring through the hospital gate, sirens screaming and horn blaring, hurtling towards our lovestruck hero. The second is that, with only half a second to spare, a gentle but firm arm wraps around his waist and drags him to safety.

Shaken out of his reverie, he gasps with shock as he realises how close he was to death; and then he turns to thank his rescuer, who still has one arm close around his waist. It is Keith. He clears his throat.

“I must... er...” Dennis falters, “ I must express my most heartfelt gratitude for, for, err, the most noble and heroic deed that you, um, you performed on my account!”

“Please, there is no need for thanks,” replies his saviour, looking modest, “my motivations were entirely selfish. For I could hardly let you get away without... erm... well, it’s like this, I... What I mean to say is... err, would you care to join me for a cup of tea, or at least some potable liquid, in the little eaterie along the corridor there? I should so like to learn more about you.”

“Oh, absolutamente! I should enjoy that very much.”

But they do not walk down to the patients’ café immediately. They remain there, beside the hospital entrance, gazing over the rims of their respective spectacles into each other’s eyes. Dennis realises with alarm that a primitive, even animalistic urge is boiling over inside him and there is nothing he can to do to stop it. Gripping the taller man’s shoulder with his good arm, he hoiks himself up onto tip-toes and is drawn closer and closer, his outstretched lips meeting Keith’s halfway in a long, clumsy, grissini-and-olive flavoured kiss. And then they break apart, both pink-cheeked and breathless, straightening their glasses and smiling bashfully.

“Tea, you say,” says Dennis, “Yes, tea. Just the ticket.”

“Yes, tea, tea. I consider myself something of a connoisseur, you know. Tell me Dennis, do you know your teas as well as you know your wines?”

“I am ashamed to say you have the advantage of me there. You must tell me everything you know...”

And he takes Keith’s arm with his uninjured hand as they walk down to the café together, chattering back and forth as they go. `},Wg={id:2,penname:"Selkie",title:"Tina Trouble",context:`A Squatters story, taking place after the events of Episode 2 "Deceased Dinners."  Chris' housemates are still living by their own dysfunctional rules, but he has not yet descended to their level.`,social:{ao:"wandering_wings"},content:`
  Olwyn’s fictitious yet untimely second demise had cast a shadow over the inhabitants of her former home. The remaining Meals on Wheels delivery intended for Olwyn’s long-deceased husband Alfred now fed two but pleased none. Aodhagán claimed the quality wasn’t what it used to be, Suits said it wasn’t enough to fuel marathon gaming sessions, and they both found the puréed texture unappetizing. 

It was also morally objectionable, according to their housemate Chris. Addicted to honesty and hard work, Chris bought all his own food and grumbled disapprovingly when Meals on Wheels arrived. Aodhagán was unwilling to concede a moral victory to Chris, but he did recognize that Meals on Wheels was no longer sufficient. 
Something would have to change. 

Aodhagán briefly considered trying to get a job, on Chris’ well-meant but unsolicited advice. He updated his CV, enlisted Suits to help with references, and argued with Chris about both – before deciding job-hunting was simply too much work. Aodhagán preferred to exploit loopholes to find the most efficient (some would say “lazy”) path through life. Falling back on a usually reliable trick, he donned his fake Quinn’s Supermarket uniform to take advantage of the staff discount.

It worked much better than he had expected. No one noticed Aodhagán wasn’t supposed to be there, which emboldened him to visit more often. As his supermarket excursions became more frequent, he let down his guard enough to become casually acquainted with a few of the real employees. 

Among them was Tina, a theatre student working part-time in the supermarket deli. Tina was unassuming yet somehow charismatic, and seemed to Aodhagán to be a woman who knew how to avoid attracting unwanted attention. She also seemed to share his cunning, frugal attitude. A fellow schemer and anarchist, perhaps?

Although she generally kept a low profile, it quickly became apparent that Tina was making no effort to avoid Aodhagán’s attention. She was almost always at the supermarket during his visits, and they found themselves in each other’s company with increasing regularity. Though Aodhagán was accustomed to keeping others at arms’ length, Tina swiftly weaseled into his narrow circle of trust.

Ultimately, it was her scheme to reduce food waste that brought them together. One of Tina’s duties was disposing of unsold prepared food each night as required by supermarket policy. She deplored this waste, and quietly encouraged like-minded fellow employees to take home the doomed dishes. This suited Aodhagán perfectly, and soon he was bringing home enough to feed himself and Suits on several days of the week.

It wasn’t long before he started bringing Tina home too. She was single when they met, and the more they saw each other, the friendlier she got. She seemed captivated by the (embellished) stories he told of his clever schemes and achievements, and her interest in him was very flattering indeed. 

Since Tina made no secret of her poverty (“Tuition fees keep going up!  Would you believe one acting course costs twelve grand?”), their date-night entertainments were frugal - sneaking into movies, picnicking in parks, and so forth. If going out was difficult, staying in was almost worse. Tina’s shared flat was tiny, so Aodhagán’s place should have been the more comfortable option. It was certainly the less crowded option when Chris went out in the evenings, which he often did. Aodhagán didn’t remember what Chris was doing (trumpet lessons? dinner with co-workers?) but he also didn’t care as long as he himself benefitted by it. Unfortunately, Suits was always home – and he resented Tina’s visits. 

After she left early one awkward evening, Aodhagán confronted Suits: “Why was tonight your night to play ‘Mister Tambourine Man’ on repeat at full volume AGAIN? A real mood killer, that was!”
“I’ve told you before, it helps me sleep! Drowns out any disturbing noises... like ‘Ooh, kiss me, Acorn! Tee-hee, your moustache tickles!’” Suits’ high-pitched mimicry was almost hilarious, but his disgust was palpable. 
“She doesn’t call me ‘Acorn’!” Aodhagán snorted. “Not my fault these walls are thin. Are you sure you aren’t just jealous because you’re single?”
“Well, she never does get your name right. Don’t look at me like that, she talks so loudly I can’t help noticing. I’ll have you know I’m not single either! I have a nice girlfriend; she’s very quiet and discreet. We’ve been together for ages.”
Aodhagán considered that Suits might be right about his name, but Tina was cute and Suits was irritating, so he kept it to himself. 
Suits having a girlfriend, though, was unbelievable. “Oh, is she a character in one of your games?” he asked sarcastically.
“No, she’s real - and I love her!” insisted Suits, throwing wide the door of his cluttered room and gesturing towards the furthest corner. A life-sized inflatable doll, dressed in suit and tie, gaped back at Aodhagán as if surprised. Aodhagán, in turn, gaped incredulously at Suits. Suits ignored him, continuing wistfully “It’s just a pity we can’t afford to marry on my salary…”
“Your nonexistent salary. Right, that’s the reason” muttered Aodhagán under his breath as he retreated, regretting the whole confrontation.

In spite of such conflicts Aodhagán continued to find ways to spend time with Tina. Having fallen under her spell, he lived in the moment, heedless of the lies he told and unbothered by how little he knew of her life. 

However, his lies had laid a trap for him. As far as Tina knew, Aodhagán was legally employed at Quinn’s and could expect a paycheque at month’s end. The longer they remained together, the more impossible it was to reveal the truth. When Tina mentioned one evening (over a picnic of day-old sandwiches) that on payday she’d like to be taken out to dinner “properly” for once, he suppressed a brief flash of panic and agreed. 

He thought the situation was under control. He’d found some great coupons for pizza in this month’s junk mail, and if Tina didn’t want pizza, he could probably scrape together enough for a pub meal – so he was unprepared for the bombshell she dropped a week before his supposed payday.

“Antonio’s?”  Aodhagán struggled to disguise his shock and dismay.  The swankiest restaurant in town, with a highly-regarded (if eccentric) master chef, Antonio’s was the sort of place where you needed to take out a mortgage for a bottle of wine. “Don’t people have to make reservations a month in advance?”
“No, Acorn, only a few days this time of year” Tina corrected him with a giggle. “I’ll arrange the reservation if you like, but next Saturday night you’re going to have to man up and buy me dinner like you promised.”
Next Saturday! Aodhagán hadn’t appreciated how quickly the end of the month was approaching. Nor had he realized he was dealing with a woman of such expensive tastes. The warm internal glow he usually felt in Tina’s presence had been replaced by a sudden icy chill. 
“We can’t! I – I don’t have anything formal enough to wear!” he stammered, gesturing at his favourite vintage shirt.
“Borrow a suit from that flatmate of yours! Come on, Aragorn! I’ve helped you save money on groceries, and I’ve wanted to go there for ages, and you know I’m too poor to pay my own way. Won’t you do this for me?” she pouted, fluttering her eyelashes.
How could he refuse?

Aodhagán’s mind churned all night, but no easy solution presented itself. He needed money he didn’t have! The next day Chris noticed him moping and, when confronted with the problem, not only didn’t lend him any money but actually advised him to be honest. That didn’t sit well with Aodhagán. Owning up would just be horribly embarrassing, and she’d probably dump him….

Unless he dumped her first. 
That was it! After all, the thought of spending time with Tina – which used to seem pleasant – now filled him with anxiety anyway. If he broke up with her, the problem would be solved! Aodhagán readied a list of previously-overlooked petty grievances and steeled himself for his next excursion to Quinn’s, when he expected to find Tina bubbling with dinner reservation news. 
Instead, he found no Tina at all. This baffling situation continued for hours until he remembered he didn’t actually work there and slipped away. 

Aodhagán’s housemates were in the living room, arguing over television channels. Suits glanced up briefly as Aodhagán walked in, allowing Chris to grab the remote and switch on the evening news. Suddenly all were transfixed by the sight of Tina’s face on the screen!

“- escaped two months ago from the prison where she was serving time on charges of theft and fraud, was recaptured yesterday after being identified near Antonio’s Restaurant. The fugitive is reported to have been using the name Tina, posing as a student to hide her identity -” 

Aodhagán muted Tiernan Callaghan and turned to the others, indignant. “So that’s why Tina never showed up today. She’s a criminal? And her name’s not even Tina? And THIS is how I find out?” he sputtered. “She lied to me this whole time!”

“You’re one to talk! You didn’t tell her that your supermarket job was fake!” snapped Chris with equal indignation. “It sounds like your whole relationship was based on falsehoods! Maybe her lies were bigger than yours – oh, I’m sure you told a few, I remember your CV – but you’re still a hypocrite!”

“At least now you don’t have to break up with her OR take her to Antonio’s” mentioned Suits helpfully.

Aodhagán exhaled. Suits was right. He’d been blinded by Tina’s charms. Losing her this way was probably for the best….

Chris continued: “You’ll never have an honest job or a healthy relationship if you cozy up with con-artists! It’s lucky she didn’t drag you into some major crime, or you’d both be going to jail now.”

Sudden horror overtook contempt for Chris’ sanctimonious attitude. No doubt the date at Antonio’s was part of some dastardly scheme! Aodhagán felt a chill creep over him as his mind leapt to the conclusion that she must have been planning to rob the place - maybe pin the crime on him! He was lucky indeed to have escaped.

“Ugh, I think I’ll just avoid women from now on. Not worth it!” Aodhagán was almost hyperventilating.

“Oh, don’t be ridiculous! You can’t assume all women are untrustworthy just because one woman is! They’re all different!” Chris sounded increasingly frustrated. “If you’d treat people honestly instead of using them – but you won’t take my advice, will you?” 

“What if it’s bad advice?” asked Aodhagán with great skepticism.

“Can’t be any worse than taking your own advice” Chris muttered under his breath, before adding for all to hear “Anyways, I don’t have time to argue with you any more tonight. I have a date to prepare for.”

“You’ve got –” Aodhagán sputtered incredulously.

“Yes, I have a girlfriend. I’ll have you know I met her at work - where we are both legitimately employed - and we’re honest with each other. Unlike some people.”

The other two gaped as Chris smugly delivered his parting shot: “The only thing I’m hiding from her is the surprise I’ve planned for her birthday next month.  I’m taking her to dinner at Antonio’s.”`},Ug={id:3,author:"Sophie C.",context:"I was really inspired by the suitcase sketch where the lads make objects come to life. Here, I decided that their stage names needed to come to life and make them proud.",title:"Magic at Vicar Street",content:`
  Once upon a time in Dublin, there lived a trio of comedians known far and wide for their uproarious antics and quick wit. Hog was renowned for his larger-than-life personality and his ability to bring down the house with his boisterous humor. Arms was famous for his hilariously exaggerated gestures and physical comedy. And lastly, Foil was celebrated for his sharp, cutting jokes that always left the audience in stitches. 

One fateful day, as they prepared for their highly anticipated show at Vicar Street, an evil witch, jealous of their popularity, cast a wicked spell upon them. With a sinister cackle, she transformed Hog into a hog, Arms into a pair of disembodied arms, and Foil into a shimmering sheet of foil. 

Confused and bewildered by their sudden transformations, the trio panicked as they struggled to comprehend their new forms. But despite their predicament, they were determined not to let the witch's curse ruin their big night. 

With determination burning in their hearts, Foil, Arms, and Hog made their way to Vicar Street, each using their newfound abilities to their advantage. Hog, now a literal hog, oinked and snorted his way onto the stage, surprising the audience with his unexpected appearance. Arms, with his limbs now detached from his body, performed a hilarious routine using his floating arms to mimic various characters and objects. And Foil, with his body transformed into a sheet of foil, dazzled the crowd with his clever wordplay and witty banter. 

As they performed together, the audience roared with laughter, completely captivated by the spectacle before them. And though they may have looked different on the outside, Foil, Arms, and Hog proved that true comedy comes from within, no matter what form it takes. 

In the end, their show was a smashing success, with the audience cheering for much longer after the final curtain fell. And as the trio took their bow, they couldn't help but feel a sense of pride knowing that, even under the most magical of circumstances, they had managed to triumph against all odds. 

And so, with their spirits lifted and their bond stronger than ever, Foil, Arms, and Hog bid farewell to the stage, ready to face whatever hilarious adventures awaited them next.`},Gg={id:4,author:"Mishti",title:"The Dalkey Book Festival",social:{ao:"mishtik06",ig:"@mishtik06"},content:`
  Stephen’s hand laid idle on the seat between them. He was looking out the window, admiring the passing clouds and the Sun peeking through them. And so, it was startling when he felt another hand on his. He tensed up. His eyes flickered around. Nobody in the bus stared at them, not even a glance. Slowly, he felt fingers thread through his own and grip his hand firmly. 

“Gerald!”, he loudly whispered. “We’re in public!” 

“So? I can’t hold my boyfriend’s hand?” Gerald didn’t whisper, nor did he speak loudly. 

“No, its- look, what if my friends enter the bus?” 

“Our hands aren’t visible. They wouldn’t notice.” 

“Guhh... fine. Oh! Put your bag in front of them. That’ll block them even further.” 

“Sure.” Gerald replied gloomily. 

Gerald looked down at their interlaced hands. Stephen was firm, on edge. He gently massaged small circles onto his hand, and Stephen gradually melted into the seat. 

It was a hot June noon, and the streets were brightly lit by the Sun overhead. Occasionally a dark cloud passed over them, dimming the harsh sunlight. The men descended the bus and stepped onto the streets of Dalkey. People were milling about, through the different shops and bookstalls. The smell of beer and the sound of laughter drifted through the air. 

Stephen heard someone snicker and with a shock realised that he was still holding Gerald’s hand. He immediately let go and swivelled around to see who laughed. Nobody stood out. His cheeks burned with embarrassment. Stephen glanced around, anywhere but at Gerald. 

“So, should we-” His voice squeaked. “Wh-what do we do now?” 

Gerald stared at him, expressionless. Slowly, his mouth opened. “I... thought we could go look at some books first. Then take a break at a café. I did tell you the plan earlier.” 

“Oh yeah. You did. Right. Let’s go then.” 

Stephen walked ahead, desperate to dispel the awkward atmosphere, and entered the first bookshop he saw. 

Gerald stood still, processing what had just happened. He took a deep breath and slowly released it. This is going to be an interesting date, he thought.
- 
The bookshop was small and packed with people. Stephen managed to make some room near a bookshelf. He tried to appear occupied and stared at the book spines. 

“Hello!” 

“Whoa! Oh. Hi. Heh- you scared me there.” said Stephen to a woman who popped out of nowhere. 

“I see you’re looking at the romance section. Would you like to buy one of these?” She said with a sweet smile. 

“Um. No. I’m just looking.” 

“Oh, I understand. You probably have a lot of unread books, don’t you?” She said. 
“You look like you read a lot.” 

“Well... not that much.” 

“Hmm? Why are you at a book fest then?” 

“I... for the talks! Sally Rooney. Her talk. About her book’s telly adaptation. Yes, I’m a fan.” Stephen laughed nervously, he was not a fan, had only heard about it. But he didn’t want to say he was here with a boyfriend. 

“Oh my god, I love that book! You know you kind of look like what I imagined Connell to be.” She giggled. 

“Sorry who?” He pretended he didn’t hear her, in fact he had no idea who Connell was. 

“Connell, y’know. The male lead. You’re cute like him.” 

“Um...” Stephen started to move away, thinking of an excuse, finally realising the girl's true intentions. But before he could do anything Gerald swooped in behind him. 

“Hello.” He gave the girl a tight smile. 

“Hi. If you need any help, there’s a lad near the till.” 

“Ah no thanks. I just wanted to talk to my boyfriend actually.” He wrapped a hand around Stephen’s waist whose head did a double take at Gerald’s words. “And I would appreciate it if you didn’t try to chat him up.” 

The woman blushed. “I- I wasn’t- Bye.” And awkwardly left. 

Stephen smacked away the hand at his waist and pushed Gerald away. 

“What was that!?” He demanded. 

“What? She was flirting with you.” 

“So? I could’ve handled it. You didn’t need to act so possessive!” 

“And what’s wrong with that?” 

“I don’t like possessive!” 

“Right, you don’t like anything we do together. You barely like me!” 

“What? No! What? What makes you think that?” 

“This is supposed to be a date, Stephen. And we’ve barely even talked!” 

Their loud voices were attracting attention, eyes turned towards them. Stephen felt the weight of everyone’s stares boring into his skin. 

He moved closer towards Gerald and whispered, “People are staring. Let’s do this later.” 

Gerald had felt their eyes as well. He didn’t care, he had different priorities. “Later? No. We need to do this now. You never want to talk about us later.” 

“Tsk, what do you want me to do? Constantly talk about our relationship?”
 
“The only thing we’ve talked about us, is how you don’t want to be seen with me in public!” 

“Tha-that’s exaggeration!” 

“Is it? Is it really, Stephen? Think about it.” 

“Yeah! I just-” Stephen’s voice got quieter. “I just don’t want to come out yet Gerald.” 

“And I don’t want to be your dirty little secret!” Gerald’s voice boomed. A few uncontrollable tears rolled down his cheeks. 

Stephen stared speechless at Gerald’s face; his mouth partially open. His eyes traced the path of a tear, over stubble and skin to the ground, and the fight slowly left him. His mouth closed, thoughts flooded his head, what to say what to say, when nothing came out, he left the shop.
- 
The crowd had gotten thicker and was choking the street. It wasn’t bright anymore; clouds blocked the Sun. The only illumination was the filtered light from clouds and windows. Stephen left in a panic, his thoughts tripping over each other, refusing to sort themselves out. He stumbled through the crowd, just to get away, to go somewhere he could think. 

Meanwhile, Gerald stood still. His thoughts were more orderly than Stephen’s, but he was as confused as his boyfriend. Confused what to do next. He walked out of the shop and surveyed the sea of heads. There was no sign of Stephen.
His thoughts went something like this:

Is this it? Surely not. Did I ruin it? Was that too harsh? The girl... Maybe it was a bit too much. I don’t want this to be over. Is it over?

And then the clouds burst. Fat droplets let loose at once. People rushed for cover and filed into the cramped shops. 

Gerald was alone in the downpour. ‘Get inside!’ someone shouted, presumably at him. What will I do inside? He pulled out an umbrella from his bag and started walking towards the bus stop. Nothing could be done now, except go home. The festival was ruined, and so was their date. 
- 
Stephen found himself under the awnings of a cafe. In the chaos of his mind, the crowd and the rain he had no idea how he had ended up there. After a brief moment of numbness, he went back to his characteristic reaction, panic:

Holy mother Mary of Jesus fucking Christ! What have I done? I’m a horrible boyfriend. What the fuck have I done? Where am I now? What’s even going on? I need to calm down! Be calm. Be fucking calm! 

He slapped himself hard which rocked his brains into sensibility. Stephen really had only three options. Wait for the rain to stop, which only seemed to be getting harsher or try to find a way in the rain, which will end in a cold or call Gerald for help. 

It was obvious really. 
- 
“Hello?” 

“Heyyy Gerald. Um. Where are you?” 

“At the bus stop. Why?” 

“Oh you brought an umbrella, didn’t you? That’s smart. It was so hot this morning, then suddenly this weather. Only in Ireland, amirite?” 

“Why did you call Stephen?” 

“Uhm… Can you like, help me a bit?” 

Gerald sat up straight. Stephen never asks for help. 

“What’s wrong?” 

“I’m lost.” 

“Lost?” 

“Yes. I was- uh, well I mean. I’m lost.” 

“How did you get lost?” 

Stephen sighed. “I was outside, because… y’know. This lashing started and everybody was going everywhere, and I just lost where I was. I tried to find a way to the bus stop, but the rain is making it impossible. ...Can you help me?” He cringed as he ended.

“Oh. Okay, I’ll come.” 

“Wait, really?” 

“Yes? Isn’t that what you want?” 

“Yeah. But, I didn’t think you’d agree.” 

“Why wouldn’t I?” 

“Y’know, because of everything that happened this morning.” 

“You rarely ask me for help Stephen. Or anyone, for that matter. And I don’t want you to catch a cold.” 

“...Thank you.” 

“Of course. So, any landmarks nearby?” 
- 
Stephen looked up towards the skies. The clouds were turning light, and the thunderstorm into a drizzle. He wondered if he should try looking for the bus stop again.

“Stephen!”

“Aah!”

Both men jumped, surprised by the other’s loudness. Gerald tripped on his own feet and fell forwards, right onto Stephen.
Gerald tried to brace with his hands, instead they slipped on the concrete pavement, and his nose hit the ground.

The scene was like this. Stephen lying on his back, clutching the back of his head. Gerald lying half on him, half on the ground. They groaned in pain and slowly sat up. Few drops of rain, sieved by the trees above, fell on and around them.

Gerald leaned against the tree trunk and inspected his palms. Stephen noticed, he rushed to grab his wrists and examined the scratches. They were long and shallow with traces of blood trickling out. Even his nose was bleeding.

“Oh my god. I’m so sorry. I didn’t think you’d find me so soon.” said Stephen.

“It’s fine. I just put it into Google maps.”

“Google-Google maps?! Of course, Google maps! I’m an idiot...”

Stephen carefully slid Gerald’s bag off his shoulders and took out the first aid kit he knew Gerald keeps in it. Gently, he tended to his palms, while his lover watched him work, admiring his focused green eyes.
The hand incidents came to the forefront of their minds.

“I’m sorry.” “I’m sorry.” They said at the same time.

“What?” “What?”

“What are you sorry for?” said Stephen.

“For what I did in the shop. It wasn’t fair, to you or that girl. I shouldn’t have acted like that.” Gerald eyes looked away from Stephen. He continued. “I guess I just got jealous. I figured... we have been housemates for two years now, I thought we could take it faster. What I mean is that maybe PDA- not that I don’t want to respect your boundaries! But...” Gerald trailed off, wondering what to say and how to phrase it. 

Stephen picked up on his hesitation. He said, “I understand. I’ve been thinking, and... I was way too worried about that holding hands in the bus, and on the road. Way too paranoid. It’s- the lads, while they’re not homophobic or anything, it’s just- look I definitely, definitely don’t want to treat you like a ‘dirty little secret’. But... give me some time? Please?”

“It's fine, Stephen. I just wanted us to talk about this, about us.”

“Yeah. Not as bad as I thought it would go.”

Gerald’s voice became delicate and sincere, he said, “I’m glad we did. You know I really like you, right? Your lazy smile, your laugh. I love it when you giggle. You’re the most hardworking person I know. Honestly, I could go on for hours, Stephen. I don’t want this to be over.”

Stephen blushed furiously. “Neither do I, Gerald. I like you a lot as well.”

The rain had stopped now. All the clouds were fluffy and light. Stephen had bandaged Gerald’s palms, and his nose wasn’t bleeding anymore. They stood up. It was 2 o’clock. There was still some time before the festival ended.

“So, do you wanna do this properly?” asked Stephen.

“I’d love to.”
  `},Yg={id:5,penname:"Jane Arsenault",hideAuthorName:!0,title:"Anne, Oisin and Barry, Eh?",context:"I am inspired by the incredible Anne Flannigan, who is hard on Oisin and who thinks Barry is a dolt. I raised three sons myself, and I KNOW there was some Anne in there (Canadian style).",content:`
  For many years – Oisin's entire childhood in fact – Mrs. Anne Flannigan took her son’s friend, Barry, for a simpleton. She tolerated him, for Oisin’s sake, but she always found him annoying, lacking in social graces, and somewhat – if she were to be honest – a bit thick. She could not understand why Oisin spent time with him rather than a more acceptable boy, like that tidy, well-behaved Conor, who gets straight As. Although Anne was a fountain of good – if cliche – advice and authoritative adages – “clean as you go” being one of her most heinous phrases – she was quite wrong about Barry. Quite wrong indeed. 

Barry, it turns out, was a covert agent for the Canadian Spy Services, the CSS. He wasn’t even a child when he first met Oisin in primary school. He was a master of disguise, able to make himself appear as small as a five-year-old boy. He was even able to suppress his in-born desire to end every sentence with “eh?”. For all those years, Barry maintained his disguise, seeming to “grow up” with Oisin without ever blowing his cover. And that vacant look that Anne loathed so much? An optical illusion. As a Canadian spy, Barry was trained in looking without looking, thinking without thinking. He seemed as dim as a turnip. He so excelled as these skills that Canada had chosen him specifically for this dangerous assignment. It was a decades-long commitment, after all. 

But why would Canada send a spy to, well, um, spy on a random family in Dublin? Who knew Canada even had spies? Or engaged in any interesting international events, other than curling and hockey? (How do you make a Canadian mad – a rare occurrence by the way – say “Ice hockey.”) 

Yes, Canada does have spies and Barry was one of his best and brightest. And yes, Canada would spy on a family in Dublin – but not a random one. The Canadian government was not even interested in the entire family – just Anne, the great matriarch, and the boy who would have been a great enemy to Canada had CSS not intervened, because Anne was carefully training Oisin. Oh yes! Those cliches and adages were coded messages. She had taught him the codes by chanting them at his bedside when he was asleep. Bit by bit, Anne was indoctrinating Oisin to hate Canada and all Canucks. The Canadian government will always be grateful to a hoggy actor – whose name we must keep secret – who alerted CSS of Anne’s plans for Oisin and her odd and vicious intentions towards Canada. 

Anne, you see, was herself a devious, deceptive, and dangerous woman from a planet just beyond the Andromeda galaxy. She had been sent to Earth from Obz5zen because of her annoying bossiness, tedious cleanliness, and maddening lack of computer skills. The leader itself had specifically placed Anne in Dublin because she detested lager and all green wavelengths. Anne was to mother a completely average boy – a duty fit for her irksome tendencies. Her fellow Obz5zenians laughed and laughed when they watched her through the telespyzenothingy. 

 During her time in Dublin, however, Anne learned about a brave new world: the Great White North with its apologetic peoples. Their collective “sorry” buzzed in her alien memory all day and all night. By the time Oisin was four, Anne, in her bitterness, had decided to make Oisin the demi-alien destroyer of Canada – taking over those silly snow-loving, syrup-sucking Canadians. 

Only Barry’s heroic and sacrificial daily deprogramming of Oisin foiled Anne’s plans, shooting her in the arm, preventing her from hogging that glorious nation. 

Eventually, Anne realized Oisin would never be the great conqueror she had wanted. He grew up to be a kindergarten teacher – in Canada. He even took out his Canadian citizenship. Anne’s heartbreak over her son’s betrayal caused her to combust spontaneously. She left nothing behind except a small spot on the carpet that could be removed by dabbing it – daaabbbing it – with a wet cloth dipped in vinegar. 

And what of Barry? Having lived so closely with the demi-alien Oisin, Barry was quite interested in Obz5zen. He applied for a job on Anne’s home planet and became a blimookomull. 
  `},Vg={id:6,author:"Kristin Taggart",title:"A Death in the Family",social:{fb:"kristin.taggart.16",website:"shelfreflections.com"},content:`
  Foil walked into the office after lunch to find Arms and Hog had gotten back before him.  The pair looked uncomfortable, glancing at each other as Foil closed the door behind him.  “Hey lads, why the long faces?” he asked.

The two exchanged another look before Arms cleared his throat and said “Foil, we’ve got some bad news.”

Foil frowned.  “That sounds serious.  What happened?”

“We… we just want you to know that we tried everything, okay?” Hog said.  “We didn’t just give up.  But nothing worked.”

Foil’s eyes widened.  “Wait… are you telling me…?”

“Yeah,” Arms nodded.  “It’s over.”

Foil pushed past them into the next room.  He saw the lifeless form and stopped dead.  “But… how?” he gasped.

“We don’t know for sure,” Arms said, coming up behind Foil.  “But I think it was just, well, time.”  He put      a hand on Foil’s shoulder, patting it gently.

Hog stood in the doorway, shaking his head.  “Look, Foil, it’s not that big of a deal.  You can get another one.”  When Foil stiffened, Hog continued nervously, “I mean, we can go do that now, if you want.  You know, so you don’t have time to miss this one.”

Foil rounded on Hog angrily.  “What the hell are you talking about?  You can’t just get a replacement!  That’s sick!”

Arms put his hands up and adopted a soothing tone.  “I’m sure that’s not what Hog meant…”

“That’s exactly what he meant!  And I’m not going to, all right?” He looked back at the sad form.  “I could never find a replacement.”  He glared at Arms and Hog.  “And neither of you would understand!”  He stormed out the door.

From behind him, he heard Arms mutter, “For God’s sake, Foil, it was just a pen!”
  `},$g={id:7,author:"Sue Cole",title:"A Strange Relationship",context:"Suits' origin story",content:`
  Derek Gorman’s mam always thought he looked very smart in his immaculate school uniform. He felt smart, but it often meant that he was picked on. Developing a strong outer shell, he fought back with criticising others’ grammar, their language and appearance. The one who was particularly bad was called Aodghan. Super-cool, cynical beyond his years and apparently amoral, he once drew a dick on every page of Derek’s school books.

Derek went in fear of Aodghan until one day, on the sport’s field, Aodghan was the last to be selected for the football team. He made a real fuss about even Derek being chosen before him, but the coach was adamant that Aodghan’s attitude made it very difficult for the rest of the team to concentrate.

The following day, at lunchtime, Aodghan cornered Derek in the canteen. He took Derek’s tray, containing a cheese sandwich and an apple, and began to eat the sandwich. When Derek complained, Aodghan sneered. But he asked Derek why he cared so much about things.

Derek explained how, by being fastidious in his clothing and pedantic over language, it gave him a sort of identity. It made him confident that he was better dressed and more precise than anyone else and it helped him to deal with the bullying. He realised that it made him few friends, but he didn’t really need friends anyway. He had his mam and his room at home where he built Lego and did puzzles.

Realising that Derek could be an ally in some way: his brittle confidence could counteract Aodghan’s casual approach to life, he invited Derek home for tea.

This had never happened to Derek before, and he went to the scruffy house with the tatty lawn outside, not really expecting anything as he had no idea of what to expect. So that he would make a good impression, he wore his best dark grey suit with a nicely patterned tie that his mam had taught him to tie.

Aodghan’s mam ignored the suit. She hadn’t bothered to dress and was still in her pink dressing gown: the house was in chaos and Aodghan’s younger sister was careering around in a football jersey, making an unholy racket. Derek had never experienced anything like this: it was just him and his mam at his house.

They had nuggets and chips for tea, and then they took a Magnum up to Aodghan’s room where he showed Derek his computer. Derek had seen them but his mam disapproved, so he had never had a go on one. He tried FIFA which was Aogdhan’s favourite game, and quickly got the idea. He was in love. He suggested a deal: he would check Aogdhan’s homework (or even do it sometimes) if he was allowed to play on the computer.

It was a deal. Derek didn’t get much pocket money but what he had, he spent on computer games. He particularly like strategy games like Strategic Command or Warcraft. Building with Lego was a thing of the past.

Their strange friendship grew. As they grew older and grew up, Aodghan became ever more uninhibited as Derek became every more diffident, even to the point of being suspicious of anything that came near him. The only constants were his mam and Aodghan, diametric opposites that led to the combination of hair-splitting confidence and nervous anxiety. Not wanting to be seen around with a ‘Derek’, Aodghan renamed him ‘Suits’ after his particular dress sense.

Eventually, Aodghan left home. He found a house that was apparently owned by an elderly couple who had hired him to take care of it. He invited Suits to join him.

By this time, Suits had a job in an insurance office, overseeing the insurance claims that others thought spurious. Suits hated his job, and was often the target of office spite, jokes and pranks. Consequently, he spent most of his free time in his room on his computer. He played games, but he also enjoyed correcting grammar on social media and joining in commentssections, explaining how people had got it all wrong. It made him feel powerful, just as it had when he was a child.

He agreed to move into the house, offering to pay his share, but Aodghan said that the place was rent-free, they just had to look after it. It seems that between Aodghan moving in, and Suits joining him, the old couple had died and had left Aodghan in charge of the running of the place.

That was just as well, because about then, Suits lost his job. With his redundancy money, he bought the latest, state-of-the-arts computer and installed in in his room. Now, at last, things could begin to get better. He applied for the post (unpaid) of ‘games tester’ and was given the job. It meant that he had access to all of the latest games and could play them without feeling his mam’s disappointment. Aodghan took charge of the house, the bills and feeding them. For the first time, Suits felt that everything was good.

Then Aodghan decided to invite someone to join them. Suits did everything he could to put them off, but Aodghan wanted the extra money. Eventually, Chris moved in. Suits didn’t like him. He was too apparently easy going, nice, maybe a bit dim. It was imperative that Suits gained the upper hand before he became number three. By putting Chris down, by criticising everything about him and by being continuously annoyed by him, he was succeeding.

Until one day when Chris came home wearing a lanyard.
  `},Kg={id:8,author:"Leanne Krainik",hideAuthorName:!0,penname:"Ell Kay",title:"A Day At The Movies",social:{yt:"Ell Kay"},hasFormatting:!0,content:`
 At the Odeon Multiplex  it was ten minutes to opening time.  Declan smoothed down his work shirt and ran his hand through his curly dark hair. He made sure the signs saying no food or drink was to be brought in were prominently displayed. Management was really cracking down on that as it had got out of hand…some clowns had even brought in lettuce, mayonnaise, and a lamb! A live lamb! What were they thinking? Probably some prank but they weren’t the ones who had to clean out the cinema afterwards. Then there was that snobby guy in the turtleneck who brought in his stinky cheese. The smell remained in the cinema for days. Or maybe that was because he’d been locked in the cinema overnight.  He was on the banned list now because of the food and his habit of hiding under the seats to watch the movie again for nothing.

Today was when the new movies premiered. Declan looked at the list. There were the  usual American blockbusters but here was something different. A new Irish film called  <i>Shadows of the Shannon</i> starring  Seamus MacGillycuddy and Shile NiConchuirachach MacMurchu NiChonaill NiDeBharra was starting. That should bring in some different customers. He checked his roster and saw he was on ushering for that film! Excellent! That was one of the perks of working at a cinema.

The doors opened and two “mature” ladies strode up to the counter. Both had curly hair and glasses. One with a beret on had a mole near her lip on the right, the other had a mole above her lip on the left. Declan wished he could bet on which film they’d see.
“Now Breda, my treat since you had us to dinner last week” said the woman  without the beret to her friend.
“Thank you, Anne,” said the one called Breda.
 “Two tickets to <i>Shadows of the Shannon</i> please”. Declan suppressed a smile of triumph as the woman called Anne rummaged in her handbag.
“I have a discount voucher here” she said, passing over a tattered piece of paper.
“I’m sorry madam,” said Declan, “That expired 18 months ago”
“Oh well now, I was sure it was in date,” Anne  blustered while her friend smiled smugly and peered down her nose.
“Can I interest you in some food or drinks?” inquired Declan, tactfully changing the subject while the woman returned the paper to her bag.
“The price of that popcorn!” said one
“The cost of those drinks!” said the other
“Good value deal, my eye!” said both of them.
“I’ll take that as a no then” said Declan.
Both women glared at him over their glasses as Declan printed their tickets.  Anne now seemed to be talking about her family.
“Yes, well, it’s an exam year for Oisin so he’s hitting the books hard. I’m expecting good results. My Oisin could work for NASA you know” she said.
“Hmm… her Oisin sounds like a right knob” thought Declan to himself as the ladies moved off and he served the next patrons.

Declan continued to serve customers until a man sidled up the counter. He was dressed very warmly in a beanie, thick green coat and brown scarf. He was also wearing a surgical mask, but he looked familiar. He spoke in a whisper and indicated he had a sore throat.  If that was the case Declan hoped he’d keep the mask on. He indicated he wanted a ticket to <i>Shadows of the Shannon</i>. As Declan handed the ticket over he again felt he knew him but before Declan could get a second glance the man scuttled away.

Declan looked up at the next customers. Ahh… here were 2 familiar faces. Well, it was going to be a late clean up after the Irish film today. Declan didn’t mind though.

After serving a few more customers Declan found himself face to face with a lady with grey hair in a bun and piercing blue eyes behind steel rimmed glasses. She wore a green silk dress with a lace collar. For some reason he couldn’t fathom, Declan felt unnerved looking at her. She bought a ticket for <i>Shadows of the Shannon</i> and as she retrieved her purse from her extremely large handbag something metallic clinked.
“Madam, I have to remind you that you cannot bring your own food and drink into our cinema” said Declan politely.
“Oh, don’t you worry now, I don’t have any food or drink, I have tins of cat food in here for my neighbour’s cat” said the woman in a soft voice, all the while clutching her handbag to her chest.
“Now, isn’t that a nice thing to do?” she said. Before Declan could reply she moved off with surprising agility for someone so elderly, her bag clanking loudly. Declan was left feeling unsettled.

Just before most movies started two teenage boys came in, trying to hide their school uniforms under their hoodies.  They both bought tickets to the new Marvel movie and large amounts of food.
“This is going to be deadly” said the tall dark haired one to his blonde friend as he started eating a magnum. They jogged off happily to their allocated cinema.

Declan went in the other direction and started collecting tickets for <i>Shadows of the Shannon</i>. He noticed the older lady sat in the front, with the middle-aged ladies just behind her. The man in the mask sat up the back.

As the movie showed a soaring panoramic shot of a dilapidated white-washed cottage set in a field a loud shriek was heard..
“Breda!  That’s Dunbooey! It’s Maureen’s cottage!”
Declan sped over to where the noise was coming from.  It was Anne.
“Madam, I have to ask you to be quiet” he whispered as he shone his torch in her face.
“I’m sorry, I lost the run of myself, but I know that place, I’ve spent many a weekend there” she said in a stage whisper.
“Well you’ll need to be quiet for the other customers”.
“Yes I will” she said  quietly to Declan and then to her friend “No wonder she’s been splashing the cash recently. They must have paid her a mint of money. Now she can get the septic tank fixed”.  
She went silent in response to an outbreak of “shh” from nearby patrons.  The old lady in front turned and gave her a long, unflinching stare.

Declan moved towards the back of the cinema and continued watching the movie until  he heard a loud and prolonged sniff. A powerful aroma then pierced the air. Declan’s torch beam landed on the discarded mask, beanie and jacket. He moved it to the next seat and came face to face with that snobby guy, glasses now on, turtleneck and all, holding a cheese board. Declan cursed under his breath.
“You’re banned” he hissed. “Out”.
“Yes , um well, I really wanted to see this film you see” said the snob. “I heard it had many cultural nuances and intense sub-plots, not to mention wonderful cinematography and a brilliant soundscape”.
“You’ve been told you can’t come in and you’ve brought your stinking cheese again. I’ll have to call Dominic the security guard”.
At this, the snob quietly burst into tears.
“Please let me stay, my electricity has been cut off and my flat is freezing. You can have the cheese. I’ll be good, I promise” he said beseechingly.
“All right” said Declan grudgingly “but give me that board.” The snob handed it over sorrowfully.

Luckily there was  loud name calling  followed by the police bashing a character  on the screen to cover this exchange. Declan held the board of smelly cheese at arm’s length and took it outside, depositing it in a bin. He then slipped back into the cinema.

The movie moved on to a traditional ceili when a tall figure in the audience stood up, writhing energetically.  Declan was there in seconds to discover the old lady in the green dress drinking a can of cheap lager and dancing.  Declan told her to stop, sotto voice.
“What do you think you’re doin?” she cried. “I’m only havin’ a bit of fun”.
This was again accompanied by a chorus of “Shh”. Anne and Breda were particularly loud.
“Madam, I’m going to have to ask you to leave” whispered Declan.

She sat down sulkily and murmured “Well, you’ve changed. It’s a nice state of affairs when an 87-year-old woman gets asked to leave an Irish filum for no reason. I must tell my nephew Kevin about this. His friend at the Irish Gazette will be very interested.” She gazed at Declan with doleful eyes. In the light from the screen showing the Cliffs of Moher her smile looked positively evil. Declan hoped it  was a trick of the light.

A vein in Declan’s temple throbbed as he said “Fine, you can stay but no more beer and stay in your seat.  Give me that can”. She did so with a very bad grace. Anne and Breda tutted and shook their heads.

The movie proceeded  with Declan periodically reminding Anne and Breda  not to comment,  to the inevitable finale where the father sang a really sad song in Irish in a lilting, melodic voice. Anne and Breda were sobbing into their hankies and the old lady was humming a totally different song to herself. At the end of the film the snob gave a series of claps and declared it a masterpiece.

Declan waited at the door to go back in and clean the cinema.  Anne and Breda walked out wiping their eyes.
“What a hoot,” said Breda.
“I did enjoy that” said Anne “it’s a pity some people can’t behave themselves though”.
“Absolutely,” said Breda as she looked over the top of her glasses.
The old lady staggered past them all and shouted “Wahey!”

The Marvel movie had also ended and those patrons were streaming into the foyer as well. Suddenly a scream shook the very foundations of the place.
“Oisin! Barry! What are you doing here?” said Anne to the schoolboys who had just come out of their movie.
“Mum! What are you doing here?” said the blonde one in a strangled voice, a look of horror on his face.
“I asked you first young man, you should be at school”.
“It…it was a study period” Oisin stammered.
“Well you should be studying…at school! It’s ’s an exam year. Barry I’m surprised at you. I’ll have to tell your mother,” She spluttered.
“She won’t care Mrs Flannagan” said the tall lanky one.
“Well, I care and you, Oisin Robert Flannagan are grounded. You’re coming home right now”.
“Awww Mum…” said the hapless Oisin as he trailed with a bemused Barry behind his mother and her smirking friend. Declan decided then her Oisin wasn’t as big a knob as he had thought.

Just then, the one person Declan had been waiting for left the <i>Shadows of the Shannon</i> theatre.  He called to his friend who was sitting on the floor waiting for him.
“Hey Gary, guess who did the catering again?”
“I don’t know and I don’t care,” said his friend.
“Murrani Foods...wow they’ve been busy. Hey, did you see how many unnecessary scenic shots there were? The Irish Tourist Board will be happy!”
They walked past Declan with the first man still talking.
“Great to see Kate Aronowitz there as the second crying lady. She’s really getting the bit parts.”

Declan didn’t mind starting his cleaning late. It was great to see someone so passionate about the film. Their conversation faded as Declan walked back into the cinema. A movement to his right caught his eye. He strode over to a seat and lifted it up.

“Out” he said  sternly.

The snob scrambled out from under the seat, picked up his things and trailed out dejectedly.
Declan started sweeping up discarded popcorn and beer cans. For him it was just another day at the movies.
  `},Qg={id:9,author:"Emily S.",title:"Well, You've Changed",hasFormatting:!0,context:"Mrs. Geraghty is without a doubt one of FAH's most intriguing characters terrorizing everyone around her including her own family. A few weeks after her death, her grandson Kevin volunteers to sort through her belongings, a task that forces him to admit that he might have bottled up his feelings regarding the complicated relationship he had with his grandmother.",content:`
  The old wooden ladder creaked as Kevin folded it down. With a sigh, he looked up into the darkness of the attic, took a deep breath and instantly regretted it as he inhaled the dust that had come down with the ladder.
  
"Well, this is getting off to a great start..." he muttered as he caught his breath. Grandmother was probably having a good time in heaven, ("In heaven, ha," he exclaimed sardonically), laughing at his misfortune. He swore he could still hear her evil laugh even though they hadn’t spoken since their falling out two years prior.

"Let's get this over with then," he said to himself and climbed up the ladder.

It took a few seconds for his eyes to adjust to the dim light, but then he quickly found what he was looking for: the boxes of his grandmother's things that his parents had collected from the retirement home a few weeks ago. The pile was smaller than he had thought, perfect. So it shouldn't take too long to look through the boxes and decide what to keep and what to get rid of.

“Clothes... more clothes... I definitely won’t rummage through my grandmother’s knickers... ah... miscellaneous.” Without much ceremony, he tore the parcel tape off and began to sort through the items. What was that, a picture frame? He couldn’t remember seeing any pictures in her room apart from the many Virgin Marys she had owned. Then again, his grandmother had never let him stay long enough to have a proper look around. He carefully pulled the frame out of the box and turned it over. It was a collection of family photos, some of which he had given her during one of his visits. The sight made him pause.

“She actually ke...” The sentiment was cut short when he noticed the little stickers she had added. There was one right next to a photo of Danielle, the kids and him on vacation that read: Kevin, the Romanian plus offspring, summer 2018. He drew in a sharp breath.

“Indifference Kevin, indifference... You’ve practised this. That’s why you agreed to do this in the first place. Breathe in... Breathe out. She’s dead, there’s no need to get angry about it now.” His nails were already leaving marks on the cheap wooden frame for God’s sake.

“Think of the positives.  At least the stickers are removable so you can keep the photos,” he said to himself trying to lower his blood pressure. This was going to be a lot more difficult than he’d thought...

Half an hour later, he had unearthed numerous books, some of them heavily annotated, like her copy of a book called <i>Empathy is for Eejits</i>, a whole charity shop worth of decorative items, half of which she had probably stolen from her fellow occupants, and a particularly interesting book of poetry. His eyes began to sparkle as he remembered the day he had first stumbled upon the small treasure that were the poems written by one of his grandmother’s late husbands. Kevin had immediately taken a liking to the man.

“... Of all the regrets I have for me and that stupid cow, Mrs. Geraghty...” he quoted cynically as he threw her collection of death notices on the pile destined for the bin. He often wondered what John had done to end up with his grandmother... and what had happened to him, now that he thought of it. Although Kevin didn’t get to dwell on the thought as he happened to stumble over what seemed to be a dog collar next. There really was no limit to her malice, was there? Who kills their neighbour’s dog and then keeps its collar? That was a new low even for someone who had terrorised an entire retirement home. After all, she wasn’t as deranged back then. Perhaps it wasn’t such a bad thing that she had never really been interested in her grandchildren after all. Christ, if they hadn’t been related, he probably wouldn’t have let her anywhere near them. A grandmother should be someone you can trust, someone you can laugh with, someone who...

“I’d collect you on my bicycle after school... What a laugh we used to have...”  Kevin shook his head trying to dispel the echo of her voice. She wouldn’t get to make him feel guilty now. He’d had plenty of that, thank you.

“You’d have drawn me a picture. I always kept them...”

“Yeah as if... That...” He couldn’t believe what he saw. Right there at the bottom of the first box was a folder full of the very pictures. She had even labelled them with the exact place and date. Not in a million years would he have thought that his grandmother had actually meant it. Yet, here he was staring at all of his doodles. At the top of the pile was a particularly ugly specimen that was supposed to show the both of them stealing apples from their neighbour’s garden. It seemed like yesterday that he had painted the thing in art class. His mother had to go and talk to his primary school teacher afterwards, but Granny had been so proud of him. “That’s my boy,” she had said smiling from ear to ear. It was an honest smile, not the one he would get after one of her particularly evil catchphrases: “Well, wasn’t that a nice thing to do...”

He ran his hand through his hair. Great, now he was getting all emotional. That wasn’t the bloody plan.

“Indifference, what happened to your indifference?! They’re just some bloody doodles!” he all but shouted at the seemingly innocent pictures.

“Is everything alright, love?” asked a loving voice behind him that made him jump, his hand flying to his heart.

“Jesus, Danielle. You almost gave me a heart attack,” he said as he turned around to see her climb up the few remaining steps.

“I’m sorry. Next time you are hurling abuse at a pile of papers, I’ll make sure to make a noise or something” Oh, how he loved the spark in her eyes whenever she came up with one of her sharp comebacks.

“You’re smiling again, great,” she said as she came over to him and sat down on an old trunk right next to the offending boxes. “Now, what have these pictures done to you?” she asked gently.

“I was just angry at myself,” he answered joining her. “It’s not working according to plan, that’s all”. She took one knowing glance at the boxes and the two piles of items.

“What was the plan?”

“To come here, quickly look through the boxes and go home again... emotionally unfazed,” he admitted fidgeting with the sleeve of his shirt.

“Oh, love... She was your grandma.”

“Was she though? You know what a... witch she was”. Danielle nodded understandingly. “The things she said about you and the kids. She had no respect...”

Kevin couldn’t sit still any longer. “Yet, out of all of us, I thought I’d be the person who’d get the least emotional over this task and here I am all worked up.”

“No one would blame you for that. I mean you’re surrounded by your grandma’s past, your past”.

“Yeah, but I shouldn’t care about it as much anymore. That’s why I made the cut two years ago. No more shaming me into doing everything for her, no more nasty comments about my family. I left all of that behind,” he argued pacing back and forth, whirling up the dust.

“But it’s still a part of who you are...” He laughed bitterly. “Maybe, this could be about getting closure”, she added softly.

“She’s dead, Danielle. She can hardly apologize.”

“I know, love”, she said placing her hand on his shoulder to stop him from pacing. “But here’s a chance for you to make peace with how you really feel about her, about your relationship. You don’t need her apology for that”. He looked into her loving eyes and let the sincerity of her support calm his racing thoughts.

“It’s just... I don’t know if I can forgive her... if I want to forgive her...” His voice was raw with emotion.
“You don’t have to, love. Sometimes, it’s enough to try and understand...”

She looked around and reached for a bundle of letters held together by a silk ribbon that Kevin had overlooked earlier. “Take these letters, for example. They must have been important to her...”

“Oh, that’s probably just another example of her heartlessness if her cherished book of poetry is anything to go by,” he said waving it off, starting to pace again.

“Possible, but even if they are, they might help you understand who she really was. They’re pretty old, from before your father was born... “

“Are they...?” He stopped in his tracks.

“Here, take them... Read them. Have a look at the other items and allow yourself to feel whatever it’ll bring up” She gently placed the letters in his hands.

“Thank you, darling... I think I needed to hear that,” he said gently stroking her cheek.

“Anytime...I’ll be downstairs if you need me”.

One kiss of encouragement later and he was alone again. He looked at the letters sceptically. Danielle was right, they looked old. The paper was already starting to turn yellow and the edges were torn from reading them over and over again. Kevin took his courage in both hands and sat down on the dusty attic floor. He carefully unfolded the first letter and began to read.

“My dearest Robert, I know I only saw you yesterday, but I cannot help but miss your lovely smile already. I thought I already loved you with all my heart and yet it feels as if I love you a thousand times more...” They were love letters, sincere and honest love letters written by his grandma... And the man’s replies were just as full of love. He had never heard her talk about a Robert and he knew for sure that Robert wasn’t the name of one of her many late husbands either. Who would’ve thought that she was capable of such feelings... at least at an earlier point in her life. These letters didn’t fit the image he had of his grandmother at all.

“How did we get from point A to B?” he wondered sadly and rummaged through the boxes more attentively now.

What a journey trying to understand his grandmother turned out to be. He found the beginning of an answer to his question in another bundle of letters. Robert had been a Protestant and their parents had forbidden the relationship... Danielle’s words still in mind, he allowed himself to cry for this version of his grandmother, for the love she had lost... for the lives she had destroyed, when he found the watch his grandfather had left him to keep it safe from her, only for her to manage to steal it anyways... for the mother his father had once had, when he discovered a dusty photo of his grandma smiling proudly at her son... for the grandmother his children had never gotten the chance to have, when he stumbled upon another one of her spiteful notes... for the grandmother that had put biscuits in his lunchbox even if he wasn’t allowed to have any and for the lonely and bitter woman she had become, when he found numerous half-empty bottles of gin and painkillers...

When he closed the last box that evening, he felt as if a storm had passed through his heart. It had been exhausting, but strangely he felt better... calmer... Maybe the day had gone according to plan after all... Just not the plan he had envisioned in his feigned indifference. It would be some time before he would be able to forgive her, but at least it was a start. He slowly folded the ladder back up and allowed himself another moment of silence before he mumbled a soft “Goodbye, Granny”. 
  `},qg={id:10,author:"Emma W",hasFormatting:!0,title:"Exit, Pursued by a Flare",content:`
  ‘This is Butt-Rustle House. Who the devil are you!?’ 

Detective Kevin Moran was greeted by an upright butler with animated eyebrows. He answered seriously: ‘I’m here for the… <i>Soirée of Mystery</i>.’ 

He held out an invitation and, remembering his assumed persona, choked down his embarrassment: ‘I’m Foil,’ he strangled out the words, ‘a sketch comedian.’ He added a smile and covered his stifled grimace by sticking out his tongue (surely that’s what sketch comedians did after all?). 

The butler ushered Moran into the building and with a roll of his eyes loudly muttered, ‘You’re late. As if I don’t have enough on my plate already.’

‘I’m sorry. The traffic was a nightmare.’ Apology ignored.

Moran was escorted down a hall plastered with old portraits; some of the antiquated ladies had quite the chest hair. He heard an exasperated cry: ‘I don’ta care if he’s allergic to the butter! You cannot eata potatoes withouta butter!’ There was a crash of plates, as three lads wearing white shirts over tracksuits with faces like fizz darted to-and-fro. 

They entered the raucous din of the dining room; half the gaggle talked over one another, while one man gestured wildly. The butler cleared his throat over and over trying to demand silence. Dispirited, he gestured towards an empty chair and left the room. 

Moran squeezed himself into place – alarmed to see he wasn’t the only guard in the company. Beside him, sharing one chair between them, sat two men in suits; a glance at their place card showed they were detectives of some kind. Moran despaired: across from him sat an officer in full uniform! 

‘What are you doing here?’ hissed Moran to the detectives.

‘We’re here as observers, <i>not</i> as participants,’ one of them replied, aloof, then returned to talking to his partner about the wine.

The officer across from him was in conversation with a man, scarf casually thrown over one shoulder and flat cap on backwards, who was making the most bizarre noises: ‘Do, re, mi, fah, so, la, ti, do. Brrrlrlrlrrrr. The tongue, the teeth, the tip of the lips. Mup, mup, mup, mmm. Beleheleheleh. Leo Varadkar.’

Unperturbed, the uniformed garda chatted on, ‘We did press them for the newspaper, but we needed that money for Geldof. That was before Sleepy Snoozy Snooze™.’ 

The actor exclaimed: ‘Oh! Dreamy Sleepy Nighty Snoozy Snooze! How wonderful! I sleep like a baby now! And as an actor I do need my beauty sleep.’

‘No no no!’ replied the garda, ‘That’s Aldi’s version. Ours was something new, something innovative, something no one’s ever done before. The original.’

‘Sorry my man, never heard of it!’

Moran suspected this man wasn’t a guard after all and compared his intel with the rabble in front of him. The ‘garda’ must be Derek, the businessman (using the term very loosely). Those two – he glanced again at the place card – <i>Dinner Party</i> Detectives!? The Sunday paper restaurant review lads!? And, of course, the amateur actor Richard Chandley. 

Across the table sat an elderly woman with untameable grey hair, who Moran couldn’t place (she can’t have been invited). 

Ted divulged: ‘Business was booming, of course, Mrs Geraghty. Happy office, happy staff! I gave myself another bonus! But with the divorce to Priscilla finalised, well, I’ve had to declare bankruptcy.’

With a sour expression, Mrs Geraghty turned away. 

‘That’s just the business of course. I still have the houses, the cars – all my own capital!’
‘Well that’s… interesting,’ smirked Mrs Geraghty, ‘and now you’re hunting for that sixth wife?’

To Moran’s right the famous mime artist, Von Hammerschmidt, pantomimed various gestures of boredom, injury and eventually death as the man by his side, Dennis Snobberton, rambled on at length, oblivious to Von Hammerschmidt’s suffering. 

The butler announced: ‘The seventh and final course: Potatoes three ways.’

A collective groan echoed from the group. Richard stood up with an exceptionally dramatic flourish: ‘This won’t do! We can’t eat merrrrely potatoes all night! I require sustenance for my performance!’ then left the room.

Dennis relaunched into a thorough rendition of the history of potatoes, which had been served as a side dish to the previous courses.

‘Hardly worth… acquiring an invitation,’ griped Mrs Geraghty.

The Dinner Detectives muttered: ‘almost as bad as the time it was all soup.’

The ever-optimistic Ted chirped: ‘It’s just nice to be out in company; gives me an opportunity to drive the Jag out to the country too!’

Von Hammerschmidt attempted to emulate eating an exquisite meal, but three minutes into the potato lecture returned to mimings of desperation. 

Moran happily munched away on his plate of potatoes. He asked Derek to pass across Richard’s untouched plate and started his second helping with relish.

As the waiters cleared plates, Mrs Geraghty declared with an unnerving smile: ‘I’ve invited these lads round to mine to play cards. I can teach them a few tricks!’  

Over the hubbub at the table, Richard could be heard repeating his warmup, alongside screams at various pitches, volumes and tempos, with an occasional ‘<i>Very</i> good, Rrrichard,’ of self-praise. 

‘Shouldn’t he be in the ballroom with that noise going on?’ quipped Derek, stifling a smile. A recurring theme, his remark was ignored. 

The guests left the table once Moran had been fully starched. Von Hammerschmidt, still trapped by full-spiel-ahead Dennis, was utterly convincingly feigning sleep.

The full spectacle of Derek’s outfit could be admired when he stood up. ‘The invite said fancy dress!’ he protested.

‘Dress fancy,’ stated Moran, ‘and what even is that?’

‘Recycled Halloween costume,’ said Derek, ‘Sexy Garda. It was this or SpongeBob Hot Pants.’

‘Well, it doesn’t look very professional.’

Derek replied quietly, ‘It could be worse…’

***

Moran froze; an <i>actual</i> bloodcurdling scream cut through the torturous background drawl of the actor.

Silence.

A shuffle of feet tramped to the drawing room with varying degrees of urgency. Van Hammerschmidt gestured incoherently, the vision of an (Icelandic) giant contracted into a small – and scared – Irish man. Below him lay Richard’s body; very still; very quiet.

‘It’s about time!’ Mrs Geraghty triumphantly muttered. 

‘Hmm… yes. He does somewhat overemphasise the slightest affect; the gestures grandiose; the intonation inharmonious,’ Dennis orated, ‘He must master the art of subtlety from studying some of the greats. Though what he lacks in skill, he certainly compensates for in enthusiasm.’

Moran checked the body, ‘That’s… real blood. He’s dead.’ 

A high-pitched dramatic gasp escaped from Derek, his mouth open in horror, palms plastered to his checks. ‘He’s taken his last bow; his final curtain call; its lights out.’

Eyes rolled away from the man determined to murder them all with his jokes, or be killed because of them, depending on who snapped first.

‘This is the correct expression for a grave and piercing situation,’ he muttered, ‘I took a course so.’

‘How do we keep ending up in this pickle?’ whispered one Dinner Detective to the other.

Attempting to stem the ongoing soliloquy, Moran put his hand on Dennis’s shoulder and glanced down at his worn-out dress shoes. Dennis fainted at the sight of puddles of red seeping into his socks.

Moran, reluctantly, shifted into action. After that slip up with the Galway man he wanted to avoid another unsolved murder on his head. 

‘Right. Derek, get the butler and the other staff.’

‘Who put you in charge?’ 

‘I’m Detective Kevin Moran.’ 

‘So he is a comedian!’

Derek speedily returned followed by the butler complaining.

‘Where’s everyone else?’

‘The chef quit, again. He left half an hour ago. And the waiters, though I doubt they’d served a table in their lives, were asked to leave about the same time. I kicked them out. Stealing! Stealing napkins!’

‘And the silverware.’

‘What!?’

‘Oh, was that not theirs? I thought it was! That’s why I put it in their bags. My mistake, at my age I just don’t know what I’m doing!’ smarmed Mrs Geraghty. 

‘Right!’ said Moran sternly, ‘You, Von Hammer…smith, why were you in here? Did you see what happened or were you here – murdering?’ (admittedly, his interrogation technique could use some work).

Dennis revived a little: ‘Oh no, not this good fellow. I can vouch for my honourable comrade.’

Von Hammerschmidt began a series of mimes – 

(‘Oh! Charades!’ chimed Ted with glee, as the Dinner Detectives tutted and again scribbled in their notebook.) 

He pulled a face like "The Scream", imitated someone disappearing into the shadows with an – elaborate hat or hairstyle and wearing a… 

‘Facemask? Clown mask? A fishing net on their head!?’ shouted Ted enthusiastically, ‘We won’t stop ‘til I get it.’

Exasperated, Von Hammerschmidt produced a balaclava from his pocket.

‘A balaclava! Bingo!’ thrilled Ted. 

Von Hammerschmidt hastily hid the balaclava and pulled at his collar while feigning choking, then mutely mimicked unsuspicious whistling.

The air was thick with silence and suspicion. 

‘Why do you have a balaclava?’ probed Moran.

After a pause Ted piped up: ‘I have one too! There was a sale at my brother’s shop: half price on all double priced balaclavas!’

A cloud of balaclavas appeared.

‘It was a steal,’ offered Derek.

‘You never know when it’ll prove useful to hide your identity,’ added Mrs Geraghty.
 
‘One likes to get a flavour of the working classes.’

Moran admitted he also had a balaclava – it might be useful for work (if he still had a job).

Dennis, now much revived by the interesting events unfolding and rather enjoying his evening, exhilarated, began: ‘Hmmm. If one was to read into the whole evening; the mysterious invitation, the locale, the butler, the enigmatic dinner, an array of strangers – each eccentric in their own way, a dubious death! Ah yes, it reads like a classic Agatha Christie. The layers, the presentation, the drama! If I saw this on stage, I’d say it was a work of genius. And to have us taking part as un-be-known-players. Truly a work of art.’


Bang!


An explosion, a dazzling flash of light, an array of sparks and colours burst from a dark corner as music began beating through the room. An elaborate lamp suddenly stood up, transformed miraculously into a man; a man pulling party poppers, covered head to toe in sparklers and small fireworks, a lampshade atop his head. He backwards bowed to his audience. 

‘Yes, it is I. Je suis… dramatic pause… La Bullshat! You privileged few are both spectators and bit players (mules perhaps) to my performance: "Exit, Pursued by a Flare". Don’t thank me, I know.’

Dennis, awestruck, couldn’t resist clapping enthusiastically. Overcome by the fireworks, Ted and Derek joined in. Mrs Geraghty, unimpressed, but approving of the spirit of the evening remarked it was ‘mildly entertaining, if you like that kind of thing.’

‘This isn’t the theatre. You… you’ve killed a man. An,’ (Moran can’t bring himself to say great) ‘actor.’

‘You’re right, it’s not theatre. It’s <i>so</i> much more. It’s tra. You won’t understand.’

Moran attempted to explain the gravity of the situation to a delusional La Bullshat, who posed by the corpse then rolled on the floor next to it and declared himself an otter: ‘An offshoot, a companion piece if you will: "Man’s Obsession with Cleanliness". I inspire myself!’  

‘You’ll be locked away for years for this, maybe life.’

‘Life imitates art, but art imitates me. And how could <i>I</i> be responsible? He was hired to play the murder victim. To <i>act</i>. He droned on and on. Ostentatious… and yet pedestrian. He almost ruined the whole thing. I had to put us all out of our misery. I may have stabbed him once or twice. A crime passionnel. Passion for the arts.’

‘Wasn’t that a nice thing to do!’ remarked Mrs Geraghty.

Moran handcuffed La Bullshat as Dennis and the other guests discussed the performance (‘Hmmm, one ponders the significance of the potatoes. Ah, of course! <i>Very clever</i>.’) 

La Bullshat was escorted from the room, as he continued to acclaim his: ‘best performance to date. Lamp number one: Murderer. Yes, they’ll say I killed tonight.’
  `},Xg={id:11,penname:"BQ",title:"When The Snob Met Barry",context:"A sequel to FAH’s Snob Tries Fast Food sketch. The snob planned to drink alone on his birthday. Then he met Barry.",content:`
  Barry stared straight ahead, blinking back tears, hoping the snobby-looking man walking towards him would go away. The snob crept closer, and despite all the other empty seats on the bus, took the one right next to Barry.

Barry wiped his tears and shifted in his seat. He was only pretending to listen as the snob chatted to him, but when a strange silence descended Barry realised he’d been asked a question. Barry rolled his eyes. The snob’s smile flickered. His finger hovered in the air mid-flourish, still waiting for an answer.

“Uh… Huh… Yes,” said Barry finally.

The snob’s mouth dropped open.  Barry panicked, wondering what he’d just agreed to. What if it was something awful? Like claiming it was ok to eat chicken nuggets without ketchup?

“No, no. Of course not.” Barry backtracked. “Sorry, what was the question?”

“‘Tis my birthday today. The only card I got was from my bank. A credit card. Because my old one expired. But no one remembered my birthday. Do tell me, should I just give up on life?”

Barry looked at the snob, and then hurriedly looked away. This was new territory for Barry. People didn’t usually turn to him for advice.

“We’ll, I’d tell you to… uh… how do you feel?” Barry asked.

The snob buried his head in his hands. “Completely empty. Like there’s a big hole inside.”

“Chicken nuggets,” mumbled Barry. 

The snob looked up. “What?”

Barry cringed. He'd never told anyone this before. But he took a deep breath and blurted out, “When I feel completely empty, like there’s a big hole inside me tummy, I fill it with me favourite foods, chicken nuggets and ketchup.” 

“Huh.” The snob said, eyes widening. This was new territory for him too. The advice most people gave him was “shut up” and “go away, you’re blocking the telly.” 

“Do you find bliss when you consume the breaded poultry with tomato coulis?” The snob asked. 

“Ew. What’s that?”

“Do you feel better when you eat chicken nuggets with ketchup?”

“Definitely.” Barry had been eating a lot of nuggets lately, especially after the blunt email he received from his university. 

The snob stared straight ahead. “I can’t buy nuggets anymore. I just got banned from the nearby Burger King.“

Barry rubbed his face. He’d been hoping for a quiet ride home as he contemplated dropping out of university. “You could still get nuggets at McDonald’s?”

“Banned.”

“KFC?”

“Banned.”

“Wendy’s?”

The snob laughed. “Hah! Last year, I graced the patrons there with my performance of One Man Play.”

“So you were banned?”

“Immediately.”

“Why are you banned from all the other places?”

The snob looked away. “I did something stupid.”

Barry pursed his lips. He could relate to that. The turn-signal of a nearby car winked at him through the window. 

“Look, I’m gonna give you something,” Barry said finally. “It means a lot to me.” He fished around in his backpack and emerged with a thin paper box. “This is my… dinner nuggets.”

“Your what?”

Barry flushed. “My dinner nuggets. Like normal chicken nuggets. But, I save it for, like, when I don’t have the appetite for a proper dinner.”

Like today, when the angry dean had pulled Barry into his office and yelled at him. “Drop out” the dean had urged. “Academics isn’t for everyone. In my thirty years of teaching, you have the worst grades I’ve ever seen.” Barry didn’t know what to do after, so he’d gone straight to the cafe on campus and ordered six large boxes of nuggets. This was his last box, and he’d been saving it for dinner. Dinner nuggets had been a comforting little ritual he’d done since the third grade, when he’d first failed an exam. 

“Why can’t you eat a proper dinner tonight?” 

Barry smiled. “Do you want these nuggets or not?”

Like a child cradling a puppy gifted on Christmas morning, the snob tenderly grasped the pack of nuggets. “Oh, it’s still warm!” He said. “And what an unusual shape, these flattened disks. Perhaps the chef compressed these nuggets to intensify the flavour?” 

“I sat on them.” 

“Oh.”

“Don’t take them all. I thought we could share.”

The two men munched their way through Barry’s nuggets. 

“Why are you alone here anyway?” The snob frowned. “It’s Saturday night. Aren’t most lads out with friends?”

“My best mate Oisin is on a date with some girl. I wanted to join. But Oisin said he didn’t want a third wheel.” Barry stared out the window. “I don’t get it. My bicycle only has two wheels.”

“Ah.”

“I had them training wheels removed a long time ago.” 

“Right.”

Barry looked out the window. “Oisin’s the only one who talks to me. The other lads don’t want me around at parties. They think I’m stupid.“

“I see.”

“But really, I should have been studying tonight. I’ve failed all my classes at university.”

The snob watched Barry out of the corner of his eye. “You and me. You know what we have in common?” The snob said slowly. “We’re underdogs.”

Barry’s head shot up as he looked at the ceiling. “I don’t see any dogs. Are you sure we’re under dogs?”

“It means people don’t want us around. They think we’re stupid. That we have nothing to offer. You know what we’re going to do?”

“Have another nugget?”

“Prove them wrong.”

The bus driver honked, and the snob suddenly realised he was very close to his home. 

The snob was serious. “I’m an old man. You’re still young. Forget the lads. What do you really want to do? What’s your dream?”

Barry frowned. No one in his family had asked about his dreams. 

“Well, I want to make Mrs Flanagan proud. She’s the only one who believes in me. I want to get my university degree and become a proper genist. Genetistist. Gen—. Uh, a person who studies DNA.”

“Ten years from now,” said the snob. “I’m sure that as I unfurl my morning newspaper,  I’ll read that you‘ve made it as a world-renowned geneticist.”

Barry grinned. “Wouldn’t it be cool if discover Diana?”

“Who?”

“Diana. They bring her up in every genetics class. She must be important.”

“DNA?”

“You know her too?”

The snob looked at Barry’s hopeful, shining face and balled his hand into a fist, fighting the instinct to launch into monologue on how DNA had already been discovered. Instead, the snob smiled. “We need your enthusiasm in the sciences.”

Barry smiled back. The snob’s words made the empty feeling inside him lessen in a way that nuggets never had. If a stranger believed in him, maybe he could finally rip the plastic off his textbook and do the thing he saw his other classmates doing in the library, “studying”. Maybe he could gather the courage to ask the cute, green-eyed girl who’d waved at him after class about her study group.

“And what’s your dream?” Barry asked. 

The snob looked out the window. He’d had many dreams in his youth that he’d tried to grasp but had slipped through his fingers like running water. Winning a Nobel prize. Writing a best selling book. Finally being recognised by his peers. But as he grew older he’d started dreaming smaller. This year, he’d been dreaming that his birthday would be different, that he’d make a friend, that it wouldn’t end with him stumbling home drunk and alone and wearing just his underpants.

It was a long time before he spoke again. “This is my stop,” he said finally. “Thanks for the chat.” 

Barry nodded. The bus stopped. 

As the snob walked away, Barry was struck with a sudden question. “D’you feel less empty inside?” He asked. He wasn’t sure the snob had heard. 

The snob scanned his pass, stepped out of the bus, and walked onto the pavement. He looked back at Barry with a faint smile through the closed window. “Thin feet,” the snob replied. Well, it could have been “indeed.” Barry’s lip reading skills needed work. 

The snob watched the bus drive away. He sat down on a bench. Somehow, the dark bottle of wine in his bag seemed less tempting. Moonlight filtered through flowering trees, illuminating the overflowing rubbish bins on the sidewalk. The scent of magnolia wafted through the leaves. The snob took a deep breath. There was something else, another strange scent in the air. Ah, rotten eggs and dead fish. Those rubbish bins really needed to be emptied. No matter. The world felt beautiful again. 




Easter eggs:
- Rotten eggs and dead fish are flavours of the jelly beans FAH try on the livestream
- Barry’s aspiration to be a geneticist comes from Arms studying genetics at university. 
- Barry’s mispronunciations of the word geneticist come from me. I just left in all my typos as I attempted to spell genist. Gentist. Uh, a person who studies DNA.
- The line about the snob stumbling home drunk and alone in his underpants was inspired by the Finnish word Foil mentions on one of the livestreams: Kalsarikännit.
- The rubbish bins on the sidewalk is inspired by one of FAH’s vlogs, where Foil acts as a tour guide pointing out the local rubbish bin attractions
- Note: this is all fiction. Even though I draw inspiration from things that FAH have publicly shared about themselves (like studying genetics) I’m ultimately writing about fictional characters like Barry and the snob, and not about the real-life FAH. 
  `},Jg={id:12,author:"JF",title:"Nancy In FAH-land",context:"A blue door in one of Arms theater tours and all the possible things that could be behind it.",social:{ig:"@jelefili"},content:`
  It was a warm and sunny day and Nancy was going home on her usual way. Suddenly she noticed a little blue door, she had never seen before. She was curious to what would lay behind it. So, she pushed down the handle and to her surprise the door was unlocked. Though as she had already opened it a tiny bit, her mother’s words crossed her mind. Remembering her not to dilly dally and to be home at time for dinner.

Pricked by the feeling of guilt Nancy stopped her doing. She stood there, still holding the doorknob, and deliberated if she should just come back another day or risk it now. Suddenly she felt something brush against her leg. She looked down just in time to see a little hoglet squeeze itself through the small door opening and vanish in the dark behind the blue door.

She was startled for a moment, unsure if she had really just heard a rushed “Thanks” from the little pig passing her by, with dark curly hair and a blue bow-tie around its neck. Then curiosity won, wiping away all of her mother’s words and her concerns and Nancy ran after the little animal. She came through a dark hallway that ended in a little room. In it there was just one desk in front of a big window and a whole bunch of people lining up to get to it. At the moment two men were sitting at the desk. One of them was wearing a shirt that was so creased that Nancy wondered if it had been chewed by a cow. He tried to make a joke, but quickly stopped, when he saw his anxious friend.

“Before granting you entry to FAH-land, you must first answer these simple questions,” the guy opposite them said in an accent Nancy had never heard in her life. Then he began asking them all sorts of things, the girl couldn’t hear anymore, since she had spotted the hoglet’s little curly tail in the crowd and went after it. Though just as she was about to follow it through a wide-open door, that had FAH-land written above it, a guy in a green sports jersey stepped in her way.

He wanted to go through the same door, but two guys stopped him. They asked for an ID and after looking at it one of them said, “Sorry mate. Regulars only,” and sent him away.

Just as he left, murmuring he would go to Canada instead, a small curly man approached the bouncers. He wanted to talk to the taller one of them, but he just told him, “Sorry mate, not tonight.” Though the man was persistent and didn’t want to leave. The bouncers were so occupied with him, that they didn’t notice the young girl sneaking pass them and enter FAH-land in the search of the little pig.

Walking on a narrow blue brick road leading through a little forest she remembered her last school trip where they were collecting things for a nature table. That day Adam didn’t want to hold her hand and Mr. O’Neill bored them all with the school guidelines he always carried with him. Though she had fun playing Hide and Seek. She wondered if she could impress Adam or maybe the new boy Paul, if she showed them the talking hoglet with the bow-tie. She was deep in her thoughts, when she heard a swooshing beside her. In the hope that it was the hoglet Nancy turned around, but it was just a man with raised arms wearing a grey cap and scarf. He moved his arms left and right and made a swoosh sound.

“Excuse me, have you maybe seen a little hoglet with a bow-tie?” Nancy asked, ignoring the man’s strange behaviour. Though he just kept swooshing and after she had tried another time to get his attention, she gave up and continued her way.

Until she heard, “What, no standing ovations for the great Richard Chandley III and his outstanding performance of a tree?” It was the man with the grey cap looking offended at her. He wanted to add something, but he was interrupted by a man from the other side of the path “That’s what you call a performance? Pathetic!”

“How dare you, insult the great Richard Chandley like that! What do you know about the real art of drama, you clown? Look at you, you couldn’t even portray a tree in a panto,” Richard Chandley replied. Nancy thought that the other man at least looked more like a tree or the nature, since he had a jacket with flowers on and for some reason, he also had a bird house on his head. She wanted to ask them about the hoglet, but she quickly realized that there was no point, since they had turned their argument into a battle of tree performances. And trees don’t talk, they only swoosh in the wind. So, Nancy just continued her way on the blue brick road, still looking for the hoglet. She hadn’t gotten far, when she heard someone giggle. She looked to her right and there was a scruffy-looking man lying in a ditch. He was laughing and when he saw her asking face, he told her “Well done girl, I was waiting for someone to pass those so-called artist imitating nature. I knew they couldn’t help but to show off and that always ends in the most hilarious fight. So, thanks for that. Is there anyway I can show my gratitude?”

Nancy needed a moment to even understand the man, since he was speaking very fast. But eventually she understood and so, she asked him, if he had seen the little hoglet and if he could tell her where to find it. He smiled and gave her some directions, that he had to repeat a second time, until Nancy had fully comprehended them. Though he didn’t seem to mind that. It was more like he enjoyed her confused face and she could still hear him giggle when she walked away.

After a while Nancy reached a little house with a blue roof and door and a wild flower garden in front of it. She just wanted to knock, when a blond guy came out of the house. He almost ran her over, looking for something. “Where is it? Where is it?” he asked himself, while turning over every pot and looking under every stone. He was just on his knees combing through the flowers, when a window opened and a lanky guy said smiling “I found it,” holding a little furry ball in the air. The blonde man turned hopeful around, but after one look he just shook his head saying “No, that’s a fluffy joke. I need the real one. Oh, how can’t I remember. Why does my head have to be like a sieve?” before he continued his search.

“Oh, hello! Who are you?” the man at the window noticed Nancy, who was still standing in front of the door.
The girl introduced herself to which the man replied “Hello Nancy, I am Arms and this is my friend Foil.” Nancy thought that those were strange names, but she just pushed that away and politely asked if they had seen the hoglet with the bow-tie. “Ah, Hog is probably prowling around somewhere,” the man in the flowers answered absently, before he gave up and sat down.

“I remember. I don’t remember. I remember. I don’t remember,” he was saying sadly, while picking petals from a daisy. Nancy felt sorry for him and asked where he had seen the joke, she assumed he was looking for, the last time. She had never heard of someone losing a joke, but she wasn’t a sceptical person and she just had to help the desperate man. 
He looked at her with teary eyes and said “I don’t remember”, before he started crying. As Nancy pet him on his shoulder to console him, she noticed that his tears looked like liquid tin foil and she could also see herself in his cheek like she was looking into a spoon. Meanwhile the other guy had joined them and told his friend they would find another joke and tried to come up with one to cheer him up. But that made things just worse, so he scrummaged through his pockets to find a tissue for him. Nancy looked dazzled at the lanky guy, since he was doing that while still petting the thing they called a fluffy joke. Then she realized that he had not two, but six arms. She was still wondering about that, when he asked her if she knew any jokes. Surprised she answered that she only knew one Mr O’Neill had once told them in an attempt to be funny. That made the foil-like guy look up, so Nancy said, “Ok, the joke goes like this. Knock, knock, knock.” The girl stopped there, because she heard laughter coming from under a tree in a corner. All three turned around, but couldn’t see anything, because of the flowers. Nancy started again, but this time she couldn’t even say the third knock, since she was interrupted after the second. Slightly annoyed, she tried it once more, but the laughter ruined it again. So, she went to the tree to see who was disturbing her and to her surprise, it was the same guy that had told her where she could find the hoglet’s home. His face was red from laughter and she just wanted to ask him what was so funny, when the six-armed-men said, “There you are Hog. I knew I recognized that laughter.”

“Wait, if that’s your Hog, then that’s not the hoglet I was looking for. You lied to me”, she said crossly to the man under the tree. “No! You asked me where you could find a hoglet with a blue bow-tie and I told you. You didn’t ask if it was me,” the curly man answered grinning and in the blink of an eye he was gone and instead the little hoglet was lying in the grass, shaking with laughter. Now all three of them were laughing and the tin foil tears were now caused by laughter and not despair. Then they tried to repeat Nancy’s joke themselves but could barely get the first word out. She found it strange that they were laughing at not even half a joke, but actually just one word, though eventually the contagious laughter reached her too and soon enough they were all laughing.

Suddenly she heard someone call her name, but she couldn’t see anybody. The silly men were still laughing when she bowed down to a little blue door at the bottom of the tree. Someone behind it was saying her name.

She pushed the door open and in the next moment she was back on the pavement next to the brick wall. Her friend Adam was looking down at her and asked what she was doing on the ground. Nancy slowly stood up and looked around. There wasn’t a blue door in the wall anymore and when she asked Adam if he had seen it, he just shook his head and asked, “What blue door?” “Never mind,” Nancy answered, suddenly unsure if the door had ever existed. Adam just shrugged his shoulders and told her to hurry up or they would get in trouble with their mothers.

She followed him, still wondering if the hoglet and FAH-land were real or if she just had a sunstroke, causing this strange dream. Though when she passed a shop window and saw her reflection in it, she stopped and couldn’t help but smile. Her shirt had been plain this morning, but now she could see the letters F, A and H written on the top corner of it and when she looked at them it was like she could hear laughter.
  `},Zg={id:13,author:"Anna",title:"Plus One",context:"Stephen is forced to attend a wedding. He tries to convince Gerald to come with him.",social:{ig:"@anna.popovic"},hasFormatting:!0,content:`
  “Weddings.” Stephen exclaims out of the blue, causing Gerald to look up from the telly, somewhat startled. He had just thought of a slightly unconventional eight-letter word that would’ve beaten the one a contestant is reading out on Countdown. <i>Bumslaps - good word that, they should add it to the Oxford dictionary.</i>

“Sorry, what?” he replies, eyebrows knitted together in confusion, as he grabs the remote to hit the mute button. 

“Y’know, weddings— Thoughts?” Stephen supplies again, as if merely repeating the word would somehow miraculously clarify his intention this time. Gerald just stares blankly at him, mind whirring at a hundred miles an hour trying to find rhyme or reason in the non-sequitur, but comes up short. 

“Weddings? The concept of? My top ten celebrity ones? Or is this you proposing? Because I would say in that case - <i>at the very least</i> - you could buy me a drink first then.” He has to duck fast as Stephen catapults a decorative pillow from the other side of the sofa in his general direction, face looking thunderous but for the slight hint of pink colouring his cheeks. 

“No, Casanova, I amn’t.” He shoots a deathly glare at Gerald, although it’s quickly replaced with a hint of a smile tugging on the corners of his mouth. “My boss, he’s getting married.” A brief pause. “Again.” He casts Gerald a knowing glance, who is reminded of some of the stories that Stephen had regaled him about his boss. There have been plenty of evenings where he had come home ranting about work, restlessly pacing up and down their sitting room, recounting in great detail what he had had to deal with that day. In the end, he would always make Gerald laugh so much with his exaggerated impressions of his coworkers that his own foul mood inevitably melted away too. 

Stephen’s boss seems to have made it his life’s mission to live up to the stereotype of successful, middle-aged business owner; with a proclivity for turning <i>every</i> conversation into one about golf, owning more cars than there are days in the week, and apparently collecting so many marriages it would even make Elizabeth Taylor blush. 

“Mr. Tullock had the brilliant idea that the whole team should attend the wedding - no doubt he got it in his mind that it’ll be some kind of brilliant <i>team-building</i>.” The words leave his mouth with such a scowl, Gerald has to do his very best to suppress a chuckle, feigning a cough instead. He needn’t have bothered though, as Stephen keeps talking, completely undeterred. “I’m sure it’s just so he can write the whole thing off as a tax expense that way, the stingy bollocks. Anyway, I can’t say no, not with that promotion up for grabs soon.”

Stephen looks thoroughly miserable, and if you didn't know any better, you’d think he was a man describing an upcoming root canal surgery, not one having to attend a party. “So, uhm, everyone else is bringing a plus one—” 

Suddenly he looks a bit sheepish, hand rubbing the back of his neck. “I’d ask one of the lads, but you’ve met them— I'd be fired before the night is out. I doubt Tullock & Associates are ready to meet the likes of John ‘The Fridge’ Cullen just yet,” Stephen shudders at the mere thought. “Especially with a free bar.” 

He casts his eyes down, suddenly very interested in a bit of fluff on his shirt, before he continues. “I thought maybe, well, I dunno, you could come?” He shrugs uncomfortably. “People seem to like you.” 

“Wow, Stephen,” Gerald mutters, sotto voce, “You <i>really</i> know how to make a boy feel special.” 

Stephen looks up, meeting Gerald’s eye again, his frown soon replaced with a big smirk plastered on his face. “Ah, don’t be like that!” He gives Gerald’s knee a playful push with his foot. “You know you’re my favourite roommate.” Gerald rolls his eyes so hard it's a small miracle he doesn't pull a muscle. “I’m your <i>only</i> roommate, Stephen.” 

“Ah, semantics!” Stephen grins, before he decides to change tactics. “Also, you seem to have forgotten I went to that gallery opening with you last month? I think under the laws of the Geneva Convention you owe me one. Luring me there under false pretences, saying there was gonna be an open bar— The only things they served were those weird orange natural wines with names I couldn’t pronounce. And mackerel bites. <i>Mackerel</i>, Gerald! As if the art wasn’t nauseating enough.” 

“It wasn’t that bad!” Gerald protests immediately. “That gallery is very renowned, only recently they had a lovely retrospective of Knuttel’s work that all the critics raved about. Okay, I didn’t know it was exclusively going to be performance art - and sure, the use of his own body as a canvas was maybe a bit derivative - but I actually thought the artist’s commentary was quite fresh, how he didn’t shy away from highlighting the ephemeral nature of—”

Another pillow is flung at him mid sentence, this time hitting him squarely in the face. 

“Ow!” 

“It was a lunatic covered in sharpie, Gerald, there’s no two ways about it. But I went along anyway, because <i>that’s what friends do</i>.” 

By the nonplussed look on Gerald’s face, Stephen isn’t so sure the guilt trip technique is actually working. With a sigh he realises there’s nothing for it but to turn to his final resort: good old begging.

“Ah c’mon, <i>please</i> come with me.” Gerald is suddenly faced with a pair of green eyes staring at him imploringly. “I need someone to hold me back when Kevin from accounts starts talking about the benefits of intermittent fasting again. Or Maureen wanting to play yet another party game. Only last week she held us all captive at lunchtime with a game of Would You Rather, where she just jabbered nonstop without letting anyone else get a word in edgeways - I think she didn’t draw breath for 15 minutes straight.” Stephen sighs, before continuing. “Besides, if I <i>do</i> get that promotion, I’ll chip in for that fancy espresso maker you’ve been going on and on about.” Offering bribes has never hurt anyone, but Stephen deploys his best puppy eyes for good measure. 

“Please?” 

Gerald leans back on the sofa, seemingly lost in thought for a moment. "Well, <i>if</i> I'm going to attend this wedding as your plus one, I do have one condition." Stephen eyes him suspiciously, but has to admit defeat.

 “Go on—”

Gerald continues, his voice filled with mock seriousness. “Just promise me one thing: no pillow fights at the reception, okay?”

Stephen bursts into easy laughter, Gerald’s response immediately feeling like a weight was just lifted off his shoulders. “Fine, I'll make sure to keep the pillow fights away from Mr. Tullock and his new missus. But I make no promises for the <i>whole</i> night, Gerald - could be a bit of craic for our own after-party. Who knows, we might even build a pillow fort." Still chuckling to himself, he gets up from the sofa, utterly unaware of how his last remarks made the colour rise in Gerald’s cheeks.

Stephen turns back around when he’s on the other side of the room. “Thanks a mill, Gerald, I owe you one. Although, if you think about it, I’m actually doing you a favour; you’re always after telling me how much you want to visit Donegal again.” 

“You what?! Doneg—” 

Stephen has sprinted out of the room before he can catch the rest of that sentence. Technically, he should’ve probably mentioned the wedding is taking place at the other side of the country. <i>Ha, no takebacks now</i>, he thinks to himself smugly, as he tries to not read too much into why he’s suddenly dreading going to the wedding a whole lot less.
  `},ey={id:14,penname:"Dilemmasaurus",title:"A Snob on a Bus",social:{ao:"Dilemmasaurus",ig:"@dilemmasaurus"},context:`It all started with an offhand joke I intended to comment on A Snob in A&E.  Then I thought "no, there's a story in that, I'm sure that sentence could become 2000 words".  I wish I had a grander story of inspiration than that, but it's the truth!`,hasFormatting:!0,content:`
  As the 84x bus pulled up to the stop, Dennis Cooper quickened his pace.  The first fat raindrops were falling from the leaden sky.  He arrived at the door as the last of the queue boarded, peering round the door and flashing the driver a smile before stepping on board.  He tapped his season ticket on the reader then looked for a seat.  The bus was busy, but not packed.  Dennis made his way down the aisle as the bus pulled off, squeezing past passengers standing ready for the next stop, and took the single vacant seat, next to a young man in a navy fleece, his arm in a sling and a neat row of butterfly stitches running from his forehead and down the centre of a shaved patch above his temple.
"Ah, hello!  Well I never," he chuckled, "fancy meeting you here!  Kevin, wasn't it?"
Kevin looked up from his phone, blankly. "I'm sorry, do we know each other?"
"Dennis!  From our recent sojourn in A&E?  You must remember."
"Oh."  Kevin scowled.  "Vividly."
"You'd had that little accident at work, the building site do you recall?"  Dennis placed his hand lightly on Kevin's arm, making him wince.  "On the mend, I trust?"
"Oh, yeah.  A bit.  Thanks.  You?"
"Yes, yes.  It was a delicate little matter, but I'm pleased to report the antibiotics are working nicely."
"Ah."  Kevin returned to his phone.

Dennis fidgeted with the handles of the carrier bag he held on his lap.  "The omnibus!  Delightful.  Mingling with the masses, a chance to watch the world go by, the hustle and bustle of life, the ups and downs.  The sights, the smells, the balding moquette.  Tell me, Kevin, do you partake of this pleasure daily?"
"Long as I've got this thing on," Kevin motioned - such as he could - with his immobilised arm.
"Ah.  Forgive me for treading on no doubt painful territory, I should have known.  Pun unintended, but happily embraced."  Dennis paused for a laugh that didn't come.  "Ordinarily an automobilist, I take it?"
Kevin grunted in assent.
"Yours truly too, of course.  But alas, my beloved voiture is at the, uh, mechanique for… the time being.  Well, every cloud, as they say - just imagine, if I'd settled the bill last month we wouldn't be having this reacquaintance.  You of course have the privilege of the window seat," he illustrated his point with an expansive sweep of the arm, accidentally brushing the luxuriant head of hair of the passenger in front as the bus hit a pothole, "all the better to enjoy the glorious vista."
"What, Donnybrook?"
"Indeed.  Don't think I haven't noticed you, fixated on the view.  I, alas, the latecomer," Dennis sighed dramatically, "am resigned to the aisle."
"D'you wanna swap?"
"No, no."
"Really I don't mind, in fact I might stand," Kevin shifted his weight to get up, "would be good to stretch my—"
"Nonsense!"  Dennis waved a hand dismissively.  "Not with that arm of yours.  What would our fellow voyagers make of me?  Making an invalid stand, I won't hear of it."
Kevin slumped back into his seat with a sigh.
"You're doing so well.  This must be so trying."
Kevin raised his eyebrows but said nothing.

"Can you hear that?"
"Hear what?" came Kevin's mumbled reply, not looking up from his phone.
"A strain of music, I thought."
"Can't hear it."
"Perhaps one of the nearby youths has got the volume on his Discman a little loud."  He scanned the bus for a likely culprit, landing upon a gangly young man standing three rows back, wearing a bulky set of headphones.  "Will I have a word?  Perhaps best not.  He might rough me up.  There'd be witnesses, of course, though in this modern society no doubt they wouldn't even look up from their telephones.  I can count on you though, can't I," he nudged Kevin, who winced, "to testify to the Gardaí for me."
"I guess?"
"Marvellous.  Of course, one naturally prefers vinyl.  The greater fidelity of sound, and there's something gloriously tactile about a record.  Are you an enthusiastic participant in the vinyl resurgence?"
"I have Spotify Premium."
"Ah.  A little more portable, I suppose.  One can hardly bring one's gramophone onto the bus.  I'd need you to vacate your seat after all just to have somewhere to put it!"
"I really don't mind standing—"
"I wouldn't dream of it.  It sounded a little like Boccherini, you know.  But then, musical man that I am, I do feel like I hear melody wherever I go, be it the background murmur of patrons in a rapid dining establishment, the wailing of the infirm in A&E or indeed the vibrations of a bus on the road.  I'm just naturally attuned, it's a gift."
"Ah."
"The potholes add a delightful syncopation, don't you think."

They sat in silence for a few moments.  The rain had started to build, streaks of water droplets forming on the windows.

"That strain again!"  Dennis chuckled to himself.  "It had a dying fall."
His companion didn't respond.
"Shakespeare."
Still no response.
"Twelfth Night.  Orsino's monologue, 'if music be the food of love, play on' et cetera.  You must know it, it's the opening."
"Never seen it."
"Oh you must!  I can recommend a marvellous version if you like."
"Don't feel you have to."
"Or by remarkable fortune, I do believe the Dalkey Players are staging it this season.  I'll put you in touch, a cousin's friend is married to a committee member, I'm sure they could comp you a ticket."
"I'm not really into theatre, more a cinema sort of guy."
"Oh you'd enjoy this.  Though of course there's always the risk they've let old Dicky Three back in, then it would be quite counterproductive to send you in the hopes of persuading you to engage with the theatrical arts!  Dear Lord he's a dreadful actor, but there's a cachet attached to his name so they do seem to crumple and let him come back once they've forgotten his thespian sins.  And the man himself is a dreadful bore too - we move in similar circles of course, so I bump into him at this event or that.  He tells the most unbelievable stories about what he's been up to, all utter piffle naturally but it's best to play along or he'll talk your ear off all evening."
Kevin looked Dennis in the eye, "I can't imagine what that would be like." He held the gaze for just a moment longer than Dennis found comfortable, then returned to scrolling on his phone.

Dennis stared wistfully at the neat houses and businesses of Dublin 4 passing by the windows for a few minutes.  The sudden downpour had brought already heavy traffic to a near standstill.

"Those poor unfortunates in their cars mired in the rush hour," Dennis gesticulated with his glasses at the column of brakelights stretching into the distance, "looking longingly up as we sail by in the bus lane.  'Why oh why' they must ask themselves 'do I remain wedded to the infernal internal combustion engine when there are buses one could ride!'  And here we are, with none of the stress, free to relax, to read, to strike up conversation with our fellow man.  Bliss!  A cause for celebration, I think."  Dennis reached into the carrier bag and pulled out a bottle of wine. "Will you partake?"
"It's 8am!"
"No need to worry, I let it breathe overnight in preparation."
"I don't think you're supposed to drink on here."
"Of course, of course.  'No person shall consume alcoholic drinks or other beverages or food while on the vehicle.'  We've all read the bye-laws, have we not."  From his expression, it appeared Kevin had not.  "But I'm sure they didn't mean aged Camembert or this most acceptable Malbec.  Are you sure I can't tempt you?"
"I'm sure."
"Well in case you change your mind, I'll let you in on a secret.  Supervalu," he tapped his nose conspiratorially, "it's the one at half price.  Wonderful floral notes, burnt yew on the tongue, and at the back of the palate, brake fluid from a Mongolian taxi."  Unacknowledged by Kevin, Dennis surreptitiously poured a measure of wine into a plastic cup, then balanced the camembert on his knee, hacking at the pungent cheese with a cracker in the absence of a cutlery.  As he sipped his wine, he watched the massing raindrops running in rivulets down the window.

"So whither wend you on this fine Irish morning?  Not the theatre, I think we have already established, haha, but perhaps you seek enlightenment at one of Dublin's fine libraries.  Or mayhap it's one of our many art galleries."
"No."
"Brunch with a lady friend?  I can heartily recommend—"
"No."
"Or a gentleman friend, I wouldn't judge…"
"I'm going to work."
"To work?  Goodness me, you can't be going back to work with your arm in a sling still!  I won't have it.  Let me have a word with them, I'm a bit of an amateur barrister in truth."
"It's fine."
"Poppycock!  How on earth will you manage?"
"It's mostly typing.  I've still got one good hand."
"Mostly typing?  Whatever next, working from home?  Your own home, that is, not the one you're building."    Dennis chuckled at his joke, but Kevin stared, frowning.
"Building?  The one that I'm… what?"
"In A&E, when you had your fall, you said you were in construction."
"I <i>said</i> I got injured on a building site.  We're undergoing renovation."
"Oh my goodness, and I just assumed.  It was the fleece, you see, I rather jumped to conclusions based on your attire.  Perhaps people, much like books, should not be judged by their jackets.  Haha.  Well, it appears I've made quite the fool of myself.  Perhaps we should start again."  He offered a hand to shake, which received only a withering stare, then proffered the left hand instead.  "Dennis Cooper, Raconteur and Man About Town."  His hand hung in the air, expectantly.  "Kevin… Murray, wasn't it.  And what pray tell is it that occupies your hours?"
"If you must know, it's <i>Doctor</i> Kevin Murphy.  Assistant Curator at the National Museum of Ireland, specialising in Near Eastern antiquities."
"Good Lord!  Quite the learnèd man you are.  Well I must apologise, I had entirely the wrong measure of you.  Antiquities, you say?  As it happens—"
"My stop's coming up."  Kevin leant awkwardly over to press the bell.  "Could I get past?"
"—I dabble in detectoring, perhaps if I ever find anything promising I could drop by your office for a little… evaluation.  I trust I would have your discretion, and in return you would have my… gratitude, and no-one need know…"
"I'd rather not end up sharing a cell with you.  Can you let me past please?"  He stood with difficulty, juggling shrugging a rucksack onto his good shoulder with holding on against the swaying motion.  He squeezed past Dennis' legs and into the aisle, then started making his way towards the doors.
"What say you we rendezvous again tomorrow," Dennis called to Kevin's retreating back, "I assume you work office hours, I shall aim for the same service once more!"
No reply came from Kevin, but the passenger in front of Dennis turned round.  Brown wavy hair framed a friendly face, glasses perched on the end of his nose, all atop a turtleneck.  "Couldn't help but overhear, old chap, but I think your associate might have been leading you astray."
"Whatever makes you think that?"
"This can't be his stop, we're miles from the National Museum, it'd be a protracted perambulation from here.  You'd have to be quite mad, and in this weather too!"
"I think you've saved my skin there!  May I buy you a drink in gratitude?"
"If you're offering…"
"Wonderful!"  Dennis pulled another plastic cup from his carrier bag.  "Tell me, how do you feel about Malbec?"
`},ty={id:15,author:"Dragana Arsenović",title:"Planet Earth Goes To Therapy",social:{ig:"@daca_draganaa"},context:"My favorite characters Planet Earth and Dr. Horton as well as a sketch with Earth, Mars, and the Moon served as an inspiration for this story. I think that some of their most clever sketches are the ones with psychological and environmental themes.",content:`
  Moon: "Earth, you have to go! I know you always say that I am too clingy, but this time it’s really about you. You need help! And by help, I mean professional help."
Planet Earth: "What’s the point?"
Moon: " The point is – you are psychologically and physically unstable and you have to get your shit together before you draw or burn us all."
Planet Earth: "Why do you even care? It doesn’t really affect you."
Moon: "You think that just because I am far enough, I should’t give a damn?"
Planet Earth: "Well, yeah."
Moon: "But it does affect you and no matter how hard you try to deny it, it really hurts you when your mood shifts harm living creatures on your surface. Next time you need a hug from me or anyone else, it could be lethal for them, and you know it."
Planet Earth: "What do you want me to do? I tried everything I could think of. What do they do: Organize UN Conference, take their fancy planes to meet at one place, chat, argue, show their silly little power, eat a lot of imported food, and then leave without real solutions."
Moon: "I know, I know, calm down."
Planet Earth: "How about being less greedy?"
Moon: "You know that’s not gonna happen. You have to help yourself first. Your ranting about it also won’t solve anything, and I just can’t stand to see you in that state anymore."

***

Dr. Horton: "Hello, my name is Dr. Horton. What brings you here Mr. Earth?"
Planet Earth: "To  be honest, I am here just because Moon insisted, and I know my ranting has given him so much headache, but I told him not to grow any hope."
Dr. Horton: "It seems to me that you have lost your hope."
Planet Earth: "Well, yeah. I am living in constant deja vu because nothing really changes, and I am really old. I guess I just lost my willingness to fight and my empathy for humans."
Dr. Horton: "Okay, but can you try to be more specific? What is it that bothers you the most?"
Planet Earth: "I don’t know, there’s so many things."
Dr. Horton: "Did something recently trigger this state that you are currently in? Can you identify, or at least try to identify the exact moment?"
Planet Earth: "Well, they’ve always annoyed me. That’s why I wrote a book – to explain my point of view."
Dr. Horton: "Okay, that was a reasonable decision."
Planet Earth: "Then, I was invited to a TV show to present my new book, and there he was – my interviewer who thought that just by wearing a green jacket, stupid smile, and sweet-talking he would melt my heart.  First, he asked me how I was feeling to which I honestly answered that I was feeling warm. What that eejit next suggested was to turn on the aircon. I sustained myself from commenting on how bad it is for the environment, for the ozone layer. Sometimes, I wonder if they have ever heard about the freons and ozone layer or if they were instead zoning out on their chemistry, biology, and geography classes.
Dr. Horton: "I see. Was your book about climate change? What is it called?"
Planet Earth: "It’s called - When all humans die".
Dr. Horton: "O-okay"
Planet Earth: "And that’s exactly the same face that the interviewer had and I could say that he didn’t even read my book. This made me really mad. I must have prevented a few volcanoes from erupting at that moment."
Dr. Horton: "Yes, everything we do, can affect everyone around us, and in your case, it’s a little more complicated. That was a nice thing to do – to try to calm down, before erupting another volcano. You can try to concentrate on the good things you can do."
Planet Earth: "Okay, I guess you are right. I mean, I created so much beauty in this world."
Dr. Horton: "Exactly."
Planet Earth: "There’s something I am really proud of  – the Bubonic Plaque.  I remembered how back then everything was so green and blue, there weren’t so many people like today, and their lifespan was much shorter. The Bubonic plague was very efficient in making the balance between nature and human beings."
Dr. Horton: "That’s not..."
Planet Earth: "And now, you know what I am seeing all around –polystyrene and plastic bottles, and that stupid assistant kept bringing me water in plastic bottles. I cannot believe that they don’t have the slightest knowledge of how harmful plastic is to the environment. Even worse than that is that I feel like they know, but don’t care. They are just pretending to care."
Dr. Horton: "I think that we are slowly learning."
Planet Earth: "The interviewer kept saying that they are doing their best for the environment and started listing some things they thought were good. I don’t know what makes me angrier. Those so-called activists who are really extreme in their approach or the ones who are trying to make it worse before it gets better. What a bunch of clowns. Somehow they always make me look like a bad guy. With the representatives like them, who needs enemies?"
Dr. Horton: "Did you consider that they think that they are doing the right thing?"
Planet Earth: "I was thinking about that. Maybe the internet caused more stress with all this disinformation."
Dr. Horton: "Could be."
Planet Earth: "I don’t even know why I agreed to a second interview. Maybe because I was hoping that I could clear up some of that misinformation. At that moment I had already almost entirely given up on fighting. They wanna cut down the trees, I’ll let them. They wanna keep dragging oil out of the ground, I don’t care. They created this toxic atmosphere, so I will just let them live in it because they don’t care that every day 200 species go extinct. And you know what he has told me? That the scientists want to bring back the Woolly Mammoth. I mean, please – where would it live?"
Dr. Horton: "But you have to admit that some actions are useful – eating less meat, cycling, reusable bags,..."
Planet Earth: "Yeah, yeah, like it’s enough. We have Earth Hour, but they dedicated an entire day to pancakes. Come on, please – he thinks that wearing bamboo socks can save the world, and when I started laughing he accused me that I created the Coronavirus. I had to laugh out hard - The attack is the best defense."
Dr. Horton: "But, you didn’t?"
Planet Earth: "I didn’t release it for sure. I didn’t cause the melting of glaciers and releasing of all deceases forgotten in the ice age, and I certainly didn’t eat a bat. I created the ugliest little freaking-looking creature I could find so they wouldn’t eat it, but they put it in a crappy little cage on the top of the other bats, and then they ate it, and then we had a huge problem."
Dr. Horton: "So, you think the interviews are the reason you feel all this pressure?"
Planet Earth: "I don’t know. I’m not sure. They did it to themselves."
Dr. Horton: "So, there is another reason?"
Planet Earth: "Maybe, it is hard for me to admit it, but Mother Earth recently caught Ireland burning fossil fuels. Nobody can betray you like your own children. They are looking you in the eyes and lying. I don’t even want to know what my other children are doing."
Dr. Horton: "And that’s all we have time for today’s session, so we’ll have to leave that topic for another time."

***

Dr. Horton (staring distantly at one dot, then coming back to reality upon hearing the door opening): "Hello. Welcome, Mars. How are you feeling today?"
Mars: "Better than the last time. I mean, I still feel lonely at times, but I am handling it better, I think. But you look a little distressed"
Dr. Horton: "Oh, it’s nothing. Just need some time to decompress from the previous client. Do you still have that Range Rover that Earth sent you?"
Mars: "Yes, I do. He is so depressed that he probably forgot that it’s at my place."
Dr. Horton: "Perfect. I could use vacation, and you could use a company. "
Mars: "Sounds great."
Dr. Horton (to himself): "And that also means I am going to be far from here for a loooong time.
Mars: "Sorry, I didn’t hear you, Doctor."
Dr. Horton: "Nothing, nothing. Please continue."
  `},ny={id:16,penname:"Squirrels",social:{ig:"@squirrellybirrelly"},hasFormatting:!0,title:"Playing Your Cards Right",content:`
  “Seventeen thousand kilometres away still isn't far enough, as far as I'm concerned,” Stephen grumbles, sprawled across the plain white duvet of their hotel bed. It's been four days since they landed in Sydney; long enough for sleep to have taken the edge off the worst of their jetlag, but nowhere near long enough for him to have forgotten the horrific moment of nearly a week ago, when Gerald’s jesuslatschen made a sudden and very unwelcome appearance in the pile of items he was planning to bring with him.

“I just don't understand what the big deal is. They're just bits of leather stitched together, like so many other pieces of footwear are.”

Gerald's complete inability to recognise just <i>why</i> his jesuslatschen are hideously embarrassing abominations that should never ever see the light of day again has put Stephen on high alert for any further unwanted surprises that might be lurking in his luggage.

Their plan — that is, <i>Gerald’s</i> plan — of going on a number of scenic day hikes between Sydney and Brisbane, means Stephen is both curious and suspicious to see Gerald's preparation for the wilds of Australia. His general approach to the Wicklow Way was like he was trekking up to Everest Base Camp, so god only knows what might happen here.

Stephen props his head up on one hand, observing Gerald bustling about the small room picking up this and that.

“A roll of bandages?”

“That's for snake bites. I've done an online first aid course. Oh, did you know that platypus are venomous? Fascinating mammals they are, laying eggs and everything.”

“Of course I didn't know that, but I can't say I'm surprised. Remind me why we chose to come here again? The place where everything can kill you?”

“Because it's somewhere warm and sunny, but not too hot, <i>and</i> it's letting us catch up with your various relatives that you haven't seen since you were a child, if at all.”

“Two days of that already has been one and three-quarter days too many if you ask me.”

“Your cousin Declan was nice, and his wife Jules was lovely. She's really sound.”

Stephen tries to quash any jealousy of just how well Gerald and Jules had gotten along. He and Declan had been standing outside around the barbecue most of the time, forced to listen to their great-uncle — to whom Stephen had taken the precaution of introducing Gerald as merely a friend — go on about how there were too many migrants in Australia; very hypocritically Stephen had thought, considering his uncle had migrated from Ireland in the 1960s himself.

“<i>You</i> didn't have to put up with Uncle Séamus and all his racist, sexist, homophobic shite.” 

“Fair point. I'm sorry you had to endure that. Consider your familial obligations fully discharged for the next week. That reminds me, I mustn't forget these.” Gerald pulls a small rectangular box from the canvas shopping bag they had taken to the barbecue.
 
"A pack of playing cards?” Stephen scoffs. “Next you'll be bringing out the Scrabble as well." 

Gerald pauses, daypack in one hand and cards in the other. "Actually that's a really good idea, something to do in the evenings—"

"Gerald, I wasn't being serious!” Stephen interrupts, exasperation creeping through. “First you bring out that behemoth of a road atlas, and now cards.”

Gerald considers behemoth to be something of an exaggeration, though it is true the secondhand road atlas he acquired is far too big for the glovebox of their rental car, and so it has been sitting on the back seat instead. Stephen barrels on.

“Before I know it you'll be saying your arthritis plays up when there's a storm coming, and we'll only be eating the pensioner special at every pub we come to.” He flops onto his back with a dramatic sigh and stares at the ceiling. “I thought this holiday was supposed to be <i>fun</i>. I didn't realise you were going to age thirty years as soon as we landed."

"It's not like I was planning on making you play cards in the evening—" a muttered <i>thank God</i> from Stephen, of the firm opinion <i>evening activities</i> should not entail card playing anywhere in the top one hundred of possible things two people could do together, "—it was just a suggestion from Jules. She said it's for if we ever get lost."

"How's that supposed to help? Stave off boredom? Build a very small signal fire?" Stephen waves a hand vaguely in the direction of their rental car parked outside. “Surely that ridiculous road atlas would be more useful if we got lost. It would make a much bigger fire for a start. Or, more likely we'd never get lost in the first place because we could never carry the weight of it far enough.”

Gerald sighs in resignation. "Look, you're probably just going to laugh at me if I tell you the principle behind it, so I don't think I will. And if we never get lost, it won't matter."

*

"Are you <i>sure</i> we're lost?"

Gerald hesitates before replying, brow furrowed as he glances back and forth between the way ahead and the rough trail behind them. "Right now I'm unsure about nearly everything. I'm beginning to think that last junction wasn't actually a junction at all."

"Then what have we been following for the last half an hour?"

"Some kind of animal track, maybe? I was trying to convince myself that it wasn't getting fainter, that it was just because it was getting more rocky as we climbed up that it was becoming less visible. And now I don't know if we should go forwards or try and find our way back."

"And there's no phone signal is there?"

"No, sorry, not down here. I took a photo of the map at the start of the trail, but it's not very detailed. And I would only be hazarding a guess where we went wrong."

"Coming to Australia would be the obvious answer. Even if it is April. And Easter. Their Cadbury creme eggs are shite."

"Ha ha. Look, how about we get to the top of this next hill, and figure out what to do once we're there. You would still be able to get a GPS signal, wouldn't you?"

"Yeah but with no imagery downloaded, I'd only have the base map available, which would be next to useless once I started to zoom in."

"Hmm, that's a shame. Still, we shouldn't rule it out entirely.” Gerald, a few steps ahead of Stephen, pauses abruptly as he crests the top of the rise. “Oh! Look at that view! Isn't it stunning?"

"I don't know if I'd go so far as to say stunning, but it's agreeable enough," Stephen concedes, gaze firmly fixed on Gerald's backside above him.

"Very funny Stephen, I <i>meant</i> the landscape. The countryside."

"Oh, right.” He scrambles up the last rocky section and pirouettes obligingly, phone in hand. “Yeah it's grand. More importantly though, I think I just got a bar of phone coverage then.” A few more turns with the phone held aloft in hope does not bring success. “Shite. Not my network provider apparently. <i>Emergency calls only</i>."

"Oh that's a shame. Still, it's good to know we have that option as a last resort."

"It will be the last resort, because it will be over my dead body that we do anything that might trigger a whole search-and-rescue debacle."

"You really would choose dying over dying of embarrassment, wouldn't you?” Gerald asks wonderingly. “Anyway, there's no need to be so melodramatic. We just need to approach this calmly and in a logical fashion." Spying a convenient flat rock just ahead, Gerald slides his backpack off and sits down upon the rock to open it up. Stephen follows behind slowly.

"Fine, yes, I would agree with that approach. What I don't agree with, because frankly I think you've suddenly gone mental, is sitting down on the top of a mountain and starting to play cards. Don't we have more important things to worry about right now?"

"Just go with me on this, at least for a little bit please," Gerald pleads, earnestly shuffling the deck.

"Are you sure you didn't hit your head and I just didn't notice?" Stephen's attempts to lay a hand on Gerald’s forehead are thwarted by him leaning away evasively every time.

"Stephen, stop pawing at me with your sweaty hands. No, I did not hit my head. Yes, my vision is fine, thank you very much. Now, can you please move out the way a bit more so I can finish dealing out the deck.” 

"This is probably the weirdest thing I've ever seen you do, which is saying something." Stephen nonetheless shuffles to one side and sits down next to Gerald.

Gerald ignores the jibe in favour of scanning the cards laid out in front of him. "Oh good, I've got two aces straight away. That'll help."

"If you say so," Stephen mutters under his breath.

"And now I can move the king over <i>there</i>, and turn this over which gives me…a red jack. But I've only got a red ten there. Now what?"

"Yeah nah, ya wanna chuck the jack on the black queen there, then move the two of clubs up top so's youse can bring the two of spades across onto the three o'hearts."

The unfamiliar voice from behind causes them both to jump in shock, Stephen letting out a high-pitched squeak before attempting to hide his embarrassment with a gruff “where the <i>feck</i> did you spring from?” directed at the newcomer in their midst.

"Soz. Didn't mean to startle youse fellas like that. Was keeping an eye out for some of me flock, they have a tendency to wander, and I'd been too flat out the last coupla days to check on 'em. Don't see many people up in this part of the hills, so I thought I'd come over to see what youse was up to."

"Ehm, would you happen to know which is the best way to get back to the car park? We seem to have geographically inconvenienced ourselves."

"Nah too easy mate. You just head over that way, between those two big gum trees, then if you look down the slope you should be able to spot the yellow trail marker. It might take a coupla hours from here, but it's all downhill."

"Oh that's a relief. Thank you so much, that's incredibly helpful."

"No wuccas. ’Ave a good one."

They watch the figure retreat over the crest of the hill, though not in the direction pointed out to them as the way back.

"Interesting fella,” Stephen says eventually. “But lucky, wasn't it, him coming across us like that? Like million to one odds."

Gerald glances at Stephen briefly, and clears his throat. "Funny you should say that. You see, when Jules gave me the cards, she said, if you ever find yourself lost, just use these. Guaranteed that if you start playing Patience, it'll be no time at all before someone leans over your shoulder and starts giving you tips on what move to make next."

“Ha, yeah, good one,” Stephen chuckles disbelievingly. “Gotta be a coincidence, surely. Didn't I say the cards were for staving off boredom? Probably works as a distraction so you forget how long you're waiting for.” 

“Okay fine, you don't believe I summoned our rescuer from thin air by playing my cards right? Ye of little faith.”

“On the contrary, you should have faith in my faith, Gerald. You can take the boy out of Ireland but you can't take Ireland out of the boy.”

“What do you mean?”

“We were lost things. I prayed to St Anthony out of habit. Besides, for your way to work, wouldn't you need to play your cards wrong?”

Gerald rolls his eyes in a very Stephen-like way, but he threads their fingers together as they set off back down the hill.
  `},Wn=[zg,Wg,Ug,Gg,Yg,Vg,$g,Kg,Qg,qg,Xg,Jg,Zg,ey,ty,ny];/*! @license DOMPurify 3.1.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.3/LICENSE */const{entries:Rc,setPrototypeOf:tu,isFrozen:oy,getPrototypeOf:ay,getOwnPropertyDescriptor:ry}=Object;let{freeze:Ie,seal:$e,create:Hc}=Object,{apply:ms,construct:ps}=typeof Reflect<"u"&&Reflect;Ie||(Ie=function(t){return t});$e||($e=function(t){return t});ms||(ms=function(t,n,o){return t.apply(n,o)});ps||(ps=function(t,n){return new t(...n)});const xa=De(Array.prototype.forEach),nu=De(Array.prototype.pop),mo=De(Array.prototype.push),Ba=De(String.prototype.toLowerCase),fi=De(String.prototype.toString),ou=De(String.prototype.match),po=De(String.prototype.replace),iy=De(String.prototype.indexOf),sy=De(String.prototype.trim),qe=De(Object.prototype.hasOwnProperty),ve=De(RegExp.prototype.test),go=ly(TypeError),au=De(Number.isNaN);function De(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return ms(e,t,o)}}function ly(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return ps(e,n)}}function F(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ba;tu&&tu(e,null);let o=t.length;for(;o--;){let a=t[o];if(typeof a=="string"){const r=n(a);r!==a&&(oy(t)||(t[o]=r),a=r)}e[a]=!0}return e}function hy(e){for(let t=0;t<e.length;t++)qe(e,t)||(e[t]=null);return e}function Zt(e){const t=Hc(null);for(const[n,o]of Rc(e))qe(e,n)&&(Array.isArray(o)?t[n]=hy(o):o&&typeof o=="object"&&o.constructor===Object?t[n]=Zt(o):t[n]=o);return t}function Aa(e,t){for(;e!==null;){const o=ry(e,t);if(o){if(o.get)return De(o.get);if(typeof o.value=="function")return De(o.value)}e=ay(e)}function n(){return null}return n}const ru=Ie(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),mi=Ie(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),pi=Ie(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),uy=Ie(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),gi=Ie(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),dy=Ie(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),iu=Ie(["#text"]),su=Ie(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),yi=Ie(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),lu=Ie(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ea=Ie(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cy=$e(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fy=$e(/<%[\w\W]*|[\w\W]*%>/gm),my=$e(/\${[\w\W]*}/gm),py=$e(/^data-[\-\w.\u00B7-\uFFFF]/),gy=$e(/^aria-[\-\w]+$/),Lc=$e(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),yy=$e(/^(?:\w+script|data):/i),wy=$e(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fc=$e(/^html$/i),vy=$e(/^[a-z][.\w]*(-[.\w]+)+$/i);var hu=Object.freeze({__proto__:null,MUSTACHE_EXPR:cy,ERB_EXPR:fy,TMPLIT_EXPR:my,DATA_ATTR:py,ARIA_ATTR:gy,IS_ALLOWED_URI:Lc,IS_SCRIPT_OR_DATA:yy,ATTR_WHITESPACE:wy,DOCTYPE_NAME:Fc,CUSTOM_ELEMENT:vy});const qt={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ky=function(){return typeof window>"u"?null:window},by=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let o=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(o=n.getAttribute(a));const r="dompurify"+(o?"#"+o:"");try{return t.createPolicy(r,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}};function Bc(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ky();const t=O=>Bc(O);if(t.version="3.1.3",t.removed=[],!e||!e.document||e.document.nodeType!==qt.document)return t.isSupported=!1,t;let{document:n}=e;const o=n,a=o.currentScript,{DocumentFragment:r,HTMLTemplateElement:i,Node:s,Element:l,NodeFilter:u,NamedNodeMap:g=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:y,trustedTypes:v}=e,k=l.prototype,I=Aa(k,"cloneNode"),x=Aa(k,"nextSibling"),m=Aa(k,"childNodes"),d=Aa(k,"parentNode");if(typeof i=="function"){const O=n.createElement("template");O.content&&O.content.ownerDocument&&(n=O.content.ownerDocument)}let c,w="";const{implementation:T,createNodeIterator:_,createDocumentFragment:j,getElementsByTagName:M}=n,{importNode:Q}=o;let P={};t.isSupported=typeof Rc=="function"&&typeof d=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ye,ERB_EXPR:ht,TMPLIT_EXPR:ut,DATA_ATTR:na,ARIA_ATTR:_r,IS_SCRIPT_OR_DATA:to,ATTR_WHITESPACE:pn,CUSTOM_ELEMENT:E}=hu;let{IS_ALLOWED_URI:R}=hu,D=null;const $=F({},[...ru,...mi,...pi,...gi,...iu]);let L=null;const $t=F({},[...su,...yi,...lu,...Ea]);let W=Object.seal(Hc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),dt=null,Ke=null,Kt=!0,jr=!0,ml=!1,pl=!0,gn=!1,Dr=!0,Qt=!1,Or=!1,Mr=!1,yn=!1,oa=!1,aa=!1,gl=!0,yl=!1;const zc="user-content-";let Pr=!0,no=!1,wn={},vn=null;const wl=F({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let vl=null;const kl=F({},["audio","video","img","source","image","track"]);let Rr=null;const bl=F({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ra="http://www.w3.org/1998/Math/MathML",ia="http://www.w3.org/2000/svg",ct="http://www.w3.org/1999/xhtml";let kn=ct,Hr=!1,Lr=null;const Wc=F({},[ra,ia,ct],fi);let oo=null;const Uc=["application/xhtml+xml","text/html"],Gc="text/html";let re=null,bn=null;const Il=255,Yc=n.createElement("form"),Sl=function(f){return f instanceof RegExp||f instanceof Function},Fr=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(bn&&bn===f)){if((!f||typeof f!="object")&&(f={}),f=Zt(f),oo=Uc.indexOf(f.PARSER_MEDIA_TYPE)===-1?Gc:f.PARSER_MEDIA_TYPE,re=oo==="application/xhtml+xml"?fi:Ba,D=qe(f,"ALLOWED_TAGS")?F({},f.ALLOWED_TAGS,re):$,L=qe(f,"ALLOWED_ATTR")?F({},f.ALLOWED_ATTR,re):$t,Lr=qe(f,"ALLOWED_NAMESPACES")?F({},f.ALLOWED_NAMESPACES,fi):Wc,Rr=qe(f,"ADD_URI_SAFE_ATTR")?F(Zt(bl),f.ADD_URI_SAFE_ATTR,re):bl,vl=qe(f,"ADD_DATA_URI_TAGS")?F(Zt(kl),f.ADD_DATA_URI_TAGS,re):kl,vn=qe(f,"FORBID_CONTENTS")?F({},f.FORBID_CONTENTS,re):wl,dt=qe(f,"FORBID_TAGS")?F({},f.FORBID_TAGS,re):{},Ke=qe(f,"FORBID_ATTR")?F({},f.FORBID_ATTR,re):{},wn=qe(f,"USE_PROFILES")?f.USE_PROFILES:!1,Kt=f.ALLOW_ARIA_ATTR!==!1,jr=f.ALLOW_DATA_ATTR!==!1,ml=f.ALLOW_UNKNOWN_PROTOCOLS||!1,pl=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,gn=f.SAFE_FOR_TEMPLATES||!1,Dr=f.SAFE_FOR_XML!==!1,Qt=f.WHOLE_DOCUMENT||!1,yn=f.RETURN_DOM||!1,oa=f.RETURN_DOM_FRAGMENT||!1,aa=f.RETURN_TRUSTED_TYPE||!1,Mr=f.FORCE_BODY||!1,gl=f.SANITIZE_DOM!==!1,yl=f.SANITIZE_NAMED_PROPS||!1,Pr=f.KEEP_CONTENT!==!1,no=f.IN_PLACE||!1,R=f.ALLOWED_URI_REGEXP||Lc,kn=f.NAMESPACE||ct,W=f.CUSTOM_ELEMENT_HANDLING||{},f.CUSTOM_ELEMENT_HANDLING&&Sl(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(W.tagNameCheck=f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),f.CUSTOM_ELEMENT_HANDLING&&Sl(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(W.attributeNameCheck=f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),f.CUSTOM_ELEMENT_HANDLING&&typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(W.allowCustomizedBuiltInElements=f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),gn&&(jr=!1),oa&&(yn=!0),wn&&(D=F({},iu),L=[],wn.html===!0&&(F(D,ru),F(L,su)),wn.svg===!0&&(F(D,mi),F(L,yi),F(L,Ea)),wn.svgFilters===!0&&(F(D,pi),F(L,yi),F(L,Ea)),wn.mathMl===!0&&(F(D,gi),F(L,lu),F(L,Ea))),f.ADD_TAGS&&(D===$&&(D=Zt(D)),F(D,f.ADD_TAGS,re)),f.ADD_ATTR&&(L===$t&&(L=Zt(L)),F(L,f.ADD_ATTR,re)),f.ADD_URI_SAFE_ATTR&&F(Rr,f.ADD_URI_SAFE_ATTR,re),f.FORBID_CONTENTS&&(vn===wl&&(vn=Zt(vn)),F(vn,f.FORBID_CONTENTS,re)),Pr&&(D["#text"]=!0),Qt&&F(D,["html","head","body"]),D.table&&(F(D,["tbody"]),delete dt.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw go('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw go('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');c=f.TRUSTED_TYPES_POLICY,w=c.createHTML("")}else c===void 0&&(c=by(v,a)),c!==null&&typeof w=="string"&&(w=c.createHTML(""));Ie&&Ie(f),bn=f}},Tl=F({},["mi","mo","mn","ms","mtext"]),xl=F({},["foreignobject","annotation-xml"]),Vc=F({},["title","style","font","a","script"]),Al=F({},[...mi,...pi,...uy]),El=F({},[...gi,...dy]),$c=function(f){let b=d(f);(!b||!b.tagName)&&(b={namespaceURI:kn,tagName:"template"});const N=Ba(f.tagName),H=Ba(b.tagName);return Lr[f.namespaceURI]?f.namespaceURI===ia?b.namespaceURI===ct?N==="svg":b.namespaceURI===ra?N==="svg"&&(H==="annotation-xml"||Tl[H]):!!Al[N]:f.namespaceURI===ra?b.namespaceURI===ct?N==="math":b.namespaceURI===ia?N==="math"&&xl[H]:!!El[N]:f.namespaceURI===ct?b.namespaceURI===ia&&!xl[H]||b.namespaceURI===ra&&!Tl[H]?!1:!El[N]&&(Vc[N]||!Al[N]):!!(oo==="application/xhtml+xml"&&Lr[f.namespaceURI]):!1},Be=function(f){mo(t.removed,{element:f});try{f.parentNode.removeChild(f)}catch{f.remove()}},sa=function(f,b){try{mo(t.removed,{attribute:b.getAttributeNode(f),from:b})}catch{mo(t.removed,{attribute:null,from:b})}if(b.removeAttribute(f),f==="is"&&!L[f])if(yn||oa)try{Be(b)}catch{}else try{b.setAttribute(f,"")}catch{}},Cl=function(f){let b=null,N=null;if(Mr)f="<remove></remove>"+f;else{const le=ou(f,/^[\r\n\t ]+/);N=le&&le[0]}oo==="application/xhtml+xml"&&kn===ct&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const H=c?c.createHTML(f):f;if(kn===ct)try{b=new y().parseFromString(H,oo)}catch{}if(!b||!b.documentElement){b=T.createDocument(kn,"template",null);try{b.documentElement.innerHTML=Hr?w:H}catch{}}const ce=b.body||b.documentElement;return f&&N&&ce.insertBefore(n.createTextNode(N),ce.childNodes[0]||null),kn===ct?M.call(b,Qt?"html":"body")[0]:Qt?b.documentElement:ce},Nl=function(f){return _.call(f.ownerDocument||f,f,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},_l=function(f){return f instanceof p&&(typeof f.__depth<"u"&&typeof f.__depth!="number"||typeof f.__removalCount<"u"&&typeof f.__removalCount!="number"||typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||!(f.attributes instanceof g)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function")},jl=function(f){return typeof s=="function"&&f instanceof s},ft=function(f,b,N){P[f]&&xa(P[f],H=>{H.call(t,b,N,bn)})},Dl=function(f){let b=null;if(ft("beforeSanitizeElements",f,null),_l(f))return Be(f),!0;const N=re(f.nodeName);if(ft("uponSanitizeElement",f,{tagName:N,allowedTags:D}),f.hasChildNodes()&&!jl(f.firstElementChild)&&ve(/<[/\w]/g,f.innerHTML)&&ve(/<[/\w]/g,f.textContent)||f.nodeType===qt.progressingInstruction||Dr&&f.nodeType===qt.comment&&ve(/<[/\w]/g,f.data))return Be(f),!0;if(!D[N]||dt[N]){if(!dt[N]&&Ml(N)&&(W.tagNameCheck instanceof RegExp&&ve(W.tagNameCheck,N)||W.tagNameCheck instanceof Function&&W.tagNameCheck(N)))return!1;if(Pr&&!vn[N]){const H=d(f)||f.parentNode,ce=m(f)||f.childNodes;if(ce&&H){const le=ce.length;for(let xe=le-1;xe>=0;--xe){const Ae=I(ce[xe],!0);Ae.__removalCount=(f.__removalCount||0)+1,H.insertBefore(Ae,x(f))}}}return Be(f),!0}return f instanceof l&&!$c(f)||(N==="noscript"||N==="noembed"||N==="noframes")&&ve(/<\/no(script|embed|frames)/i,f.innerHTML)?(Be(f),!0):(gn&&f.nodeType===qt.text&&(b=f.textContent,xa([ye,ht,ut],H=>{b=po(b,H," ")}),f.textContent!==b&&(mo(t.removed,{element:f.cloneNode()}),f.textContent=b)),ft("afterSanitizeElements",f,null),!1)},Ol=function(f,b,N){if(gl&&(b==="id"||b==="name")&&(N in n||N in Yc||N==="__depth"||N==="__removalCount"))return!1;if(!(jr&&!Ke[b]&&ve(na,b))){if(!(Kt&&ve(_r,b))){if(!L[b]||Ke[b]){if(!(Ml(f)&&(W.tagNameCheck instanceof RegExp&&ve(W.tagNameCheck,f)||W.tagNameCheck instanceof Function&&W.tagNameCheck(f))&&(W.attributeNameCheck instanceof RegExp&&ve(W.attributeNameCheck,b)||W.attributeNameCheck instanceof Function&&W.attributeNameCheck(b))||b==="is"&&W.allowCustomizedBuiltInElements&&(W.tagNameCheck instanceof RegExp&&ve(W.tagNameCheck,N)||W.tagNameCheck instanceof Function&&W.tagNameCheck(N))))return!1}else if(!Rr[b]){if(!ve(R,po(N,pn,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&f!=="script"&&iy(N,"data:")===0&&vl[f])){if(!(ml&&!ve(to,po(N,pn,"")))){if(N)return!1}}}}}}return!0},Ml=function(f){return f!=="annotation-xml"&&ou(f,E)},Pl=function(f){ft("beforeSanitizeAttributes",f,null);const{attributes:b}=f;if(!b)return;const N={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L};let H=b.length;for(;H--;){const ce=b[H],{name:le,namespaceURI:xe,value:Ae}=ce,ao=re(le);let we=le==="value"?Ae:sy(Ae);if(N.attrName=ao,N.attrValue=we,N.keepAttr=!0,N.forceKeepAttr=void 0,ft("uponSanitizeAttribute",f,N),we=N.attrValue,N.forceKeepAttr||(sa(le,f),!N.keepAttr))continue;if(!pl&&ve(/\/>/i,we)){sa(le,f);continue}if(Dr&&ve(/((--!?|])>)|<\/(style|title)/i,we)){sa(le,f);continue}gn&&xa([ye,ht,ut],Hl=>{we=po(we,Hl," ")});const Rl=re(f.nodeName);if(Ol(Rl,ao,we)){if(yl&&(ao==="id"||ao==="name")&&(sa(le,f),we=zc+we),c&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!xe)switch(v.getAttributeType(Rl,ao)){case"TrustedHTML":{we=c.createHTML(we);break}case"TrustedScriptURL":{we=c.createScriptURL(we);break}}try{xe?f.setAttributeNS(xe,le,we):f.setAttribute(le,we),_l(f)?Be(f):nu(t.removed)}catch{}}}ft("afterSanitizeAttributes",f,null)},Kc=function O(f){let b=null;const N=Nl(f);for(ft("beforeSanitizeShadowDOM",f,null);b=N.nextNode();){if(ft("uponSanitizeShadowNode",b,null),Dl(b))continue;const H=d(b);b.nodeType===qt.element&&(H&&H.__depth?b.__depth=(b.__removalCount||0)+H.__depth+1:b.__depth=1),(b.__depth>=Il||b.__depth<0||au(b.__depth))&&Be(b),b.content instanceof r&&(b.content.__depth=b.__depth,O(b.content)),Pl(b)}ft("afterSanitizeShadowDOM",f,null)};return t.sanitize=function(O){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,N=null,H=null,ce=null;if(Hr=!O,Hr&&(O="<!-->"),typeof O!="string"&&!jl(O))if(typeof O.toString=="function"){if(O=O.toString(),typeof O!="string")throw go("dirty is not a string, aborting")}else throw go("toString is not a function");if(!t.isSupported)return O;if(Or||Fr(f),t.removed=[],typeof O=="string"&&(no=!1),no){if(O.nodeName){const Ae=re(O.nodeName);if(!D[Ae]||dt[Ae])throw go("root node is forbidden and cannot be sanitized in-place")}}else if(O instanceof s)b=Cl("<!---->"),N=b.ownerDocument.importNode(O,!0),N.nodeType===qt.element&&N.nodeName==="BODY"||N.nodeName==="HTML"?b=N:b.appendChild(N);else{if(!yn&&!gn&&!Qt&&O.indexOf("<")===-1)return c&&aa?c.createHTML(O):O;if(b=Cl(O),!b)return yn?null:aa?w:""}b&&Mr&&Be(b.firstChild);const le=Nl(no?O:b);for(;H=le.nextNode();){if(Dl(H))continue;const Ae=d(H);H.nodeType===qt.element&&(Ae&&Ae.__depth?H.__depth=(H.__removalCount||0)+Ae.__depth+1:H.__depth=1),(H.__depth>=Il||H.__depth<0||au(H.__depth))&&Be(H),H.content instanceof r&&(H.content.__depth=H.__depth,Kc(H.content)),Pl(H)}if(no)return O;if(yn){if(oa)for(ce=j.call(b.ownerDocument);b.firstChild;)ce.appendChild(b.firstChild);else ce=b;return(L.shadowroot||L.shadowrootmode)&&(ce=Q.call(o,ce,!0)),ce}let xe=Qt?b.outerHTML:b.innerHTML;return Qt&&D["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&ve(Fc,b.ownerDocument.doctype.name)&&(xe="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+xe),gn&&xa([ye,ht,ut],Ae=>{xe=po(xe,Ae," ")}),c&&aa?c.createHTML(xe):xe},t.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fr(O),Or=!0},t.clearConfig=function(){bn=null,Or=!1},t.isValidAttribute=function(O,f,b){bn||Fr({});const N=re(O),H=re(f);return Ol(N,H,b)},t.addHook=function(O,f){typeof f=="function"&&(P[O]=P[O]||[],mo(P[O],f))},t.removeHook=function(O){if(P[O])return nu(P[O])},t.removeHooks=function(O){P[O]&&(P[O]=[])},t.removeAllHooks=function(){P={}},t}var Iy=Bc();function Sy(){const[e,t]=A.useState(()=>localStorage.getItem("storyMenuType")||"list");return A.useEffect(()=>{localStorage.setItem("storyMenuType",e)},[e]),h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"less-h2-margin",children:"Short Stories"}),h.jsxs("nav",{className:"menu",children:[h.jsx(Re,{to:`${fl(Wn.length)}`,className:"randomizer-link",children:"Click this link to start reading a random story from the list"}),h.jsx("p",{className:"select-instruction",children:"Or select a story from below:"}),h.jsxs("div",{className:"menu-selection-container",children:[h.jsxs("section",{onClick:()=>t("list"),className:e==="list"?"active story":"",children:[h.jsx("span",{className:"menu-type-text",children:"List View"}),h.jsx("img",{src:"icons/buttonListIcon.png",width:20})]}),"|",h.jsxs("section",{onClick:()=>t("books-menu"),className:e==="books-menu"?"active story":"",children:[h.jsx("img",{src:"icons/bookStackIcon.png",width:20}),h.jsx("span",{className:"menu-type-text",children:"Books View"})]})]}),e==="list"&&Wn.map(n=>h.jsx(Ty,{story:n},n.id)),e==="books-menu"&&h.jsx("div",{className:"books-container",children:Wn.map(n=>h.jsx(Pc,{entry:n,category:"story",additionalItemStyle:`story-${n.id}`},n.id))}),h.jsx("a",{href:"https://forms.gle/oVE5BrC33ftTYjP96",target:"_blank",children:h.jsx("button",{className:"vote",children:"Vote for Your Favourite Stories Here"})})]})]})}function Ty({story:e}){const t=mn(),n=()=>{t(`/stories/${e.id}`)};return h.jsx("button",{className:"shorts",onClick:n,children:e.title})}function xy(){const{id:e}=cl(),t=Number(e),n=Wn.find(o=>o.id===t);return window.scrollTo(0,0),h.jsx("div",{className:"max-story-width",children:n?h.jsxs(h.Fragment,{children:[n.context&&h.jsx("p",{className:"context",children:n.context}),h.jsx("h2",{className:"entry-title",children:n.title}),n.hasFormatting?h.jsx("div",{className:"format",dangerouslySetInnerHTML:{__html:Iy.sanitize(n.content)}}):h.jsx("div",{className:"format",children:n.content}),h.jsxs("div",{className:"entries-nav",children:[h.jsx(Re,{to:"/stories",children:"Back to All Short Stories"}),t<Wn.length&&h.jsx(Re,{to:`/stories/${t+1}`,children:"Next Story"}),t===Wn.length&&h.jsx(Re,{to:"/stories/1",children:"Go to First Story"})]})]}):h.jsx("p",{children:"Story not found"})})}const Ay={id:1,originalArtist:"Sophie Ellis-Bextor",originalSongTitle:"Murder on the Dancefloor",originalSongUrl:"Brih4MyYgpE",videoPath:"MurderOnTheFarm.mp4",timestamps:"0:10 - 1:11",hasVideo:!0,author:"Emily S.",context:"I wrote this song in the summer of 2001. I had just set up my brand new hen coop, beautiful birds they were and on the very first night this bastard of a fox came and killed all of them...",title:"Murder on the Farm",content:`
  It's murder in the hen coop.
The stupid fox's killed all my hens.
It looks like it burned the goddam coop right down.

Oh I know, I know, I know, I know, I know, I know, I know
about your kind.
And so, and so, and so, and so, and so, and so, and so
you'll have to pay.

If you think you're getting away,
I will prove you wrong.
The Winchester's ready to play.
Boy just come along
And hear me when I'll say, hey.... Bastard

It'll be murder on the farm,
if he comes back to kill the cock
Hey, hey
It'll be murder on the farm.
Oh come on just try your luck.
Hey fox, I going to send a few rounds your way.
      `},Ey={id:2,originalArtist:"Meghan Trainor",originalSongTitle:"All About That Bass",originalSongUrl:"7PCkvCPvDXk",timestamps:"0:00 - 1:25",author:"Kristin Taggart",title:"All About Guinness",context:"It's Guinness, what's more Irish than that?  Also some inspiration from the Irish Intervention sketch.",social:{fb:"kristin.taggart.16",website:"shelfreflections.com"},content:`
  Because you know I’m all about Guinness, ‘bout Guinness, no Pilsener,
I’m all about Guinness, ‘bout Guinness, no Miller,
I’m all about Guinness, ‘bout Guinness, no Coors Light,
I’m all about Guinness, ‘bout Guinness.

Yeah, it’s pretty clear that this ain’t no O’Douls
And it can get you hammered like a beer’s supposed to do
‘Cause it’s that dark Stout that all the lads chase
With all the right hops in all the right places
I see the bartender fillin’ up my glass,
I know that stuff is real, I know that it’s first-class.
I’ll spend the whole night with it, I never want to stop
‘Cause every inch of it is perfect right up to the foam on top

Yeah, my momma, she told me “Don’t worry about exams”
She says “Drink enough Guinness and you’ll become good at trad”
You know I won’t fall asleep after reading a book at night
So if that’s what you’re into, then go ahead, get outta my sight 

You know I’m all about Guinness, ‘bout Guinness, no Pilsener,
I’m all about Guinness, ‘bout Guinness, no Miller,
I’m all about Guinness, ‘bout Guinness, no Coors Light,
I’m all about Guinness, ‘bout Guinness.

  `},Cy={id:3,penname:"Selkie",title:"Corn",originalSongTitle:"Torn",originalArtist:"Natalie Imbruglia",originalSongUrl:"VV1XWJN3nJo",context:"Some years ago now, on Mossy's advice, I decided to try my hand at growing corn. The weather that summer was bloody awful - hailstorms and rain - so my corn never ripened. When I realised I'd lost the whole lot, I spent the night drinking in the barn and ended up singing this song to my cows.",content:`
  I thought I had a plan that couldn’t fail 
Spring was warm, I tilled the ground, and then we got the hail 
I thought those little plants would die 
See, I dearly wanted to grow corn 
But I didn’t know and didn’t care what summer had in store 
Now I don’t do that any more 

The weather forecast was a lie 
A rainy summer, never dry 
Boys, that’s how it was - 

Nothing ripens corn! 
I am losin’ faith 
Out here in my field 
It’s not gold, and I’m ashamed 
Tonight I’ll drink behind the door 
My dreams of growing grain 
Never became real 
I’ll never have, I’ll never see 
A perfect field of corn! 
Summer came too late, 
Ruined all my corn

So I guess old Mossy’s full of shite
He told me corn would grow so well here, but that wasn’t right
We’ve had nothing now but rain
And so with corn I had no luck 
Maybe next year I’ll raise ducks
There's just so many things

That can go wrong with corn -
I am losin’ faith 
Out here in my field 
It’s not gold, and I’m ashamed 
Tonight I’ll drink behind the door 
My dreams of growing grain 
Never became real 
I’ll never have, I’ll never see 
A perfect field of corn! 
Summer came too late, 
Ruined all my corn

A field of mud, a cloudy sky
At least the river won't run dry
Boys, that’s how it is -

Nothing ripens corn! 
I am losin’ faith 
Out here in my field 
It’s not gold, and I’m ashamed 
Tonight I’ll drink behind the door 
My dreams of growing grain 
Never became real 
I’ll never have, I’ll never see 
A perfect field of corn! 

I am losin’ faith 
Out here in my field 
It’s not gold, and I’m ashamed 
Lying drunken on the floor
Summer came too late, 
Ruined all my corn... 
Corn…
  `},Ny={id:4,author:"Sue Cole",title:"Poultry Farming",context:"It’s supposed to be the most covered song of all time, so why does no-one mention the original?",originalArtist:"The Beatles",originalSongTitle:"Yesterday",originalSongUrl:"NajvYJab6Pg",content:`
  Saturday, all my chickens seemed to disobey
Now it seems as though they’re here to lay
Now I know I have eggs today.
Saturday, I thought my poultry farm was not to be
Any profit seeming lost to me.
But now the hens lay properly.
Why they didn’t lay, went off hay,
I couldn’t say.
Now I’ve changed their feed
Met their need since Saturday.
Before today, poultry farming was subject to delay
But now again it will begin to pay
I’m just glad to have eggs today.
`},_y={id:5,penname:"Dilemmasaurus",title:"Big Yellow Tractor",originalSongTitle:"Big Yellow Taxi",originalArtist:"Joni Mitchell",originalSongUrl:"2595abcvh2M",social:{ao:"Dilemmasaurus",ig:"@dilemmasaurus"},context:"These are tough times to be a farmer.  This is a little song I wrote about the trend of diversification to improve economic viability.",content:`
They paved Murphy's farm
And put up a hundred homes
But they rent them out, 'cos no-one
Can afford the loan

Don't it always seem to go
That you don't know what you've got
Till it's gone
They paved Murphy's farm
And put up a hundred homes

Seán sold all his sheep
And opened a glamping site
Now the shepherd's hut
Rents for two hundred a night

Don't it always seem to go
That you don't know what you've got
Till it's gone
They paved Murphy's farm
And put up a hundred homes

Hey farmer farmer
Stop that weedin' and hoein'
It's time to diversify
The money's no longer in growin'
Geez!

Don't it always seem to go
That you don't know what you've got
Till it's gone
They paved Murphy's farm
And put up a hundred homes

Late last year
I opted for peace and calm
Now my big yellow tractor's
Idle on my solar farm

Don't it always seem to go
That you don't know what you've got
Till it's gone
They paved Murphy's farm
And put up a hundred homes

I said
Don't it always seem to go
That you don't know what you've got
Till it's gone

They paved Murphy's farm
And put up a hundred homes

Seán sold all his sheep
And opened a glamping site

I put down my tools
And put up a solar farm
  `},jy={id:6,penname:"Squirrels for short",title:"For the Bottom Line",originalSongTitle:"For the Longest Time",originalArtist:"Billy Jo-Elle",originalSongUrl:"a_XgQhMPeEQ",social:{ig:"@squirrellybirrelly"},context:"This song was written during one of the recession times to hit poor auld Ireland, when my bank manager was giving me all sorts of grief.",content:`
Oh, oh, oh
For the bottom line
Oh, oh, oh
For the bottom—

If the price of sheep was still alright
Would I feel so helpless in my plight
How much I owe you
I'm so indebted to you
That hasn't happened for the longest time

Once I thought my overdraft was gone
Now I know that repayments do go on
That's how you bound me
When you wrapped your claws around me
I'm gonna be there for the longest time

Oh, oh, oh
For the bottom line
Oh, oh, oh
For the bottom—

Sell the farm? I will in me hole
And the greatest tragedy of all
So many fees due
But you'll keep bleeding me too
That hasn't happened for the longest time

Maybe this downturn won't last very long
But the budget's so tight
And I'm likely wrong
Maybe I've been spending too hard
But it's all for the farm
And that's all that I live for

Where else could I have gone for a loan
Should I have pawned everything that I own
What are my chances
Stuck in this financial crisis 
I've not been solvent for the longest time

I had second thoughts at the start
But I said to myself
Hold on to the farm
Now I know the lender that you are
You're despicable so far
So much worse than I feared for

I don't care what interest rate it brings
I have been a fool for lesser things
My debts are so bad
I think you ought to know that
I intend to owe you for the longest time
`},Dy={id:7,author:"Gina B",title:"Drunk and All Alone",originalSongTitle:"Take Me Home, Country Roads",originalArtist:"John Denver",originalSongUrl:"rLXkAs7WlBg",context:"So this is a song that I wrote about the day that I found out the ex-missus was cheating on me which was shortly after all me cows died of mad cow disease.",content:`
At the old pub, drinking beer
Guinness, I drank too much I fear
I got kicked out, onto the dirt lane
Tripped into a di-itch, now my head’s in pain

This country road
can't get me home 
because I'm drunk
and all alone

The missus left me,
all my cows died
I'm in a ditch
next to the road

Tonight’s memories are all fuzzy
Found out the missus cheated; she’s a hussy
Dark and spinning, are the skies
I’m feeling so broken, teardrops in my eyes

This country road 
Can’t get me home
Because I’m drunk
And all alone

The missus left me, 
all my cows died
I’m in a ditch 
Next to the road

Heard their voices in the early morn ki-issing
Lover thought the tractor was too loud to hear 
Infidelity, I now know that
I should’ve never married her, married her

This country road 
Can’t get me home
Because I’m drunk
And all alone

The missus left me, 
all my cows died
I’m in a ditch 
Next to the road

This country road 
Can’t get me home
Because I’m drunk
And all alone

The missus left me, 
all my cows died
I’m in a ditch 
Next to the road
`},Oy={id:8,author:"Leanne Krainik",hideAuthorName:!0,penname:"Ell Kay",social:{yt:"Ell Kay"},title:"Sheep",originalSongTitle:"Bills",originalArtist:"LunchMoney Lewis",originalSongUrl:"_IrQHeDcMi8",timestamps:"1:12-2:30",context:"I was inspired by having the song on my playlist on a weekly commute and thought it could lend itself to describing the working and social life of an Irish farmer ",content:`
I got sheep, I gotta shear
So I’m gon’ clip, clip, clip every year
I  got cows, I gotta feed
So I’m gon’ make sure I  got what they need
I got sheep

Woke up with a thumping head,
Kicked my toe on the end of the bed,
Opened the press but the whiskey’s gone
Phelim’s dogs come shat on my lawn.
Hopped in the cab, the tractor sounds rough
Gonna  make the plougin’ tough
Hope it ends  before the sun sinks
And I get to O’Rourkes before the last drinks. 

Oh shite, oh shite, oh shite
Ara, ara, ara, ara,
 Oh shite, ara, oh shite, ara,

I got sheep, I gotta shear
So I’m gon’ clip, clip, clip every year
I  got cows, I gotta feed
So I’m gon’ make sure I’ve got what they need
I got ..(trumpet solo)
`},My={id:9,penname:"Phoenix",title:"Party from the Break of Day",originalSongTitle:"Party in the USA",originalArtist:"Miley Cyrus",originalSongUrl:"M11SvDtPBhA",context:"The lyrics are inspired both from Party in the USA and Party in the CIA parody, both of which swing back and forth between problems with their respective jobs and the perks and happy moments which pop up and now, as it relates to the farming.",content:`
I hopped out of bed at 4 a.m.
Grabbed my hat, put my overalls on
Going to milk the cows and shear the sheep (woah)
Gonna get the chores done

Jumped in my truck, damn thing’s stuck in the mud now
Look to my right, get a side eye from my brown cow
This is all so crazy
Why am I feeling so lazy?

My mouth is yawning and I’m feeling kind of sleepy
Stomach’s queasy and I’m hungry
That’s when the sun crawled up slow in the sky
And I saw the break of dawn
The rooster crowed on and on
And I put my wellies on

And I put my hands up,
Grabbed shovel and chains, muck flew right through the air
I’m driving my rig like yeah,
Feeding the pigs like yeah,
I got my hands up, just milking those cows
The day is going to be ok
Yeah, it’s a party from the break of day
Yeah, it’s a party from the break of day

Get to the field where the cattle are
The big bull is stomping at the ground
Like, he’s seen red, got pulled out of bed
And he’s gonna run me down

Don’t know why this farming is so hard
I’d be more famous if I played the song card 
‘Cause all I got is this blister
I’d rather be playing Twister

The goats are running and the donkey’s kicking madly
Hens are cackling and I’m grumpy
But when the rainstorm stopped its gloomy tune
The clouds cleared for the sun
My day was still not done
And I broke into a run

And I put my hands up
I’m clearing the fence, heading over to the barn
Tossing the feed like yeah,
Brushing the horse like yeah

I throw my hands up as I slip on some muck
My fall is broken by the hay
Yeah, it’s a party from the break of day
Yeah, it’s a party from the break of day

Need to run round all the time (all the time)
Should have turned to a life of crime (life of crime)
Losing every chance to rhyme (chance to rhyme)
But I sing my songs and I feel sublime

So I put my hands up
I’m singing my song, though the animals shy away
I’m pitching the hay like yeah (pitching the hay)
Grooving my boots like yeah (ooh, yeah)

I got my hands up, I’m singing my song
The day is gonna by okay (gonna be okay)
Yeah, it’s a party from the break of day
Yeah, it’s a party from the break of day
`},Py={id:10,originalArtist:"The Longest Johns",originalSongTitle:"Wellerman",originalSongUrl:"E_8tAyecj2g",hasVideoOnYT:!0,ytVideoUrl:"VkTcCNMOMSA",author:"Melissa Nordling",context:`Context for a few things in the song:
-	O’Shea (common Irish surname, particularly in Cork and Kerry)
-	Lamb marking (when the new lambs are rounded up for a health check and given ear tags, stock marks, vaccinations, etc.)
-	Clann (Irish word meaning family)`,title:"The Farmer Man",content:`
  There once was a man in a field of hay
And the name of the man was Farmer O’Shea
The wind picked up, the clouds came down
It looked like rain, oh no!

Soon may the tractor come
To help us get our farm work done
One day when the baling is done
We’ll take our twine and go

The lamb marking was going to plan
When through the mob a wild ewe ran
Over the hill she sent her clann
The farmer watched with woe

Soon may the sheepdogs come
Chase those ewes, watch them run
One day when the sorting is done
We’ll tag the lambs and go

That night when all were in their beds
A thunderstorm destroyed the sheds
Farmer O’Shea just shook his head
Insurance would be slow

Soon may the agent come
Insurance company’s number one
One day when the payout has come
We’ll take the cash and go
      `},Ry={id:11,originalArtist:"Eminem",originalSongTitle:"The Real Slim Shady",originalSongUrl:"eJO5HU_7_1w",author:"Elaine Wang",social:{ig:"@elaine.escapes"},title:"The Real Michail O’Conaill",context:"One day I felt really pissed that all these music artists are stealing my songs, so I wrote this rap to set the record straight.",content:`
  
      `},Un=[Ay,Ey,Cy,Ny,_y,jy,Dy,Oy,My,Py,Ry],Hy=({filk:e})=>{const[t,n]=A.useState(!0),o=s=>{n(!t),s==null||s.stopPropagation()},a=s=>{if(s==="original"){if(e.originalSongTitle.length>25)return{fontSize:19.5,position:"relative",top:2};if(e.originalSongTitle.length>20)return{fontSize:23}}else if(s==="farmer"&&e.title.length>18)return{fontSize:21.5,bottom:3,position:"relative"}},r=mn(),i=()=>{window.scrollTo({top:0,behavior:"smooth"}),r(`/irishfarmerhits/${e.id}`)};return h.jsxs("div",{className:`cassette ${t?"facing-front":"facing-back"}`,onClick:i,children:[h.jsxs("div",{className:"side back",children:[h.jsxs("div",{className:"top-label back-label",children:[h.jsx("img",{width:44,src:"Universal-Music.png",className:"universal-logo"}),h.jsx("span",{className:"title",style:a("original"),children:e.originalSongTitle})]}),h.jsx("div",{className:"bottom-label",children:e.originalArtist}),h.jsx("img",{src:"flip-icon.png",width:43,className:"flip-icon",onClick:o})]}),h.jsx("div",{className:"side left"}),h.jsx("div",{className:"side right"}),h.jsx("div",{className:"side top"}),h.jsx("div",{className:"side bottom"}),h.jsxs("div",{className:"side front",children:[h.jsxs("div",{className:"top-label",children:[h.jsx("div",{className:"round-sticker",children:h.jsx("img",{width:24,height:24,src:"plough.png"})}),h.jsx("span",{className:"title",style:a("farmer"),children:e.title})]}),h.jsx("div",{className:"bottom-label",children:"Michail O’Flaithbheartaigh O'Conaill"}),h.jsx("img",{src:"flip-icon.png",width:43,className:"flip-icon",onClick:o})]})]})};function Ly(){const[e,t]=A.useState(()=>localStorage.getItem("filkMenuType")||"list");return A.useEffect(()=>{localStorage.setItem("filkMenuType",e)},[e]),h.jsxs(h.Fragment,{children:[h.jsx("h2",{className:"less-h2-margin",children:"Irish Farmer Hits"}),h.jsxs("nav",{className:"menu",children:[h.jsx(Re,{to:`${fl(Un.length)}`,className:"randomizer-link",children:"Click this link to start reading a random song from the list"}),h.jsx("p",{className:"select-instruction",children:"Or select a song from below:"}),h.jsxs("div",{className:"menu-selection-container",children:[h.jsxs("section",{onClick:()=>t("list"),className:e==="list"?"active filk":"",children:[h.jsx("span",{className:"menu-type-text",children:"List View"}),h.jsx("img",{src:"icons/buttonListIcon.png",width:20})]}),"|",h.jsxs("section",{onClick:()=>t("cassettes-menu"),className:e==="cassettes-menu"?"active filk":"",children:[h.jsx("img",{src:"icons/cassetteIcon.png",width:20}),h.jsx("span",{className:"menu-type-text",children:"Cassettes View"})]})]}),e==="list"&&Un.map(n=>h.jsx(Fy,{filk:n},n.id)),e==="cassettes-menu"&&h.jsxs(h.Fragment,{children:[h.jsxs("p",{className:"cassette-instruction",children:['Click on the brown "flip"'," ",h.jsx("img",{src:"flip-icon.png",className:"flip-instruction-icon",width:20})," ","icon to flip the cassette tape. Click anywhere else on the cassette to view the song."]}),h.jsx("div",{className:"cassettes-container",children:Un.map(n=>h.jsx(Hy,{filk:n},n.id))})]}),h.jsx("a",{href:"https://forms.gle/fNtVz3DnebakBt8e9",target:"_blank",children:h.jsx("button",{className:"vote",children:"Vote for your favourite songs here"})})]})]})}function Fy({filk:e}){const t=mn(),n=()=>{window.scrollTo({top:0,behavior:"smooth"}),t(`/irishfarmerhits/${e.id}`)};return h.jsx("button",{className:"filks",onClick:n,children:e.title})}function By(){const{id:e}=cl(),t=Number(e),n=Un.find(o=>o.id===t);return window.scrollTo(0,0),h.jsx("div",{className:"entry",children:n?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:n.originalArtist})," stole this song and turned it into ",h.jsxs("strong",{children:['"',n.originalSongTitle,'"']}),n.timestamps&&` (${n.timestamps})`,":"]}),h.jsx("div",{className:"video-responsive",children:h.jsx("iframe",{src:`https://www.youtube.com/embed/${n.originalSongUrl}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsx("hr",{}),h.jsx("p",{className:"maxwidth",children:`But it was actually originally written by none other than humble
            Irish Farmer Micheal O'Flaithbheartaigh O'Conaill himself${n.context?", with the following explanation: ":"."}`}),n.context&&h.jsx("p",{className:"context maxwidth",children:n.context}),(n.hasAudio||n.hasVideo||n.hasVideoOnYT)&&h.jsx("p",{children:"Here is the original performance:"}),n.hasAudio&&h.jsx(zy,{audioPath:`/audios/${n.audioPath}`}),n.hasVideo&&h.jsx(Wy,{videoPath:`/videos/${n.videoPath}`}),n.hasVideoOnYT&&h.jsx("div",{className:"video-responsive",children:h.jsx("iframe",{src:`https://www.youtube.com/embed/${n.ytVideoUrl}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),h.jsx("h2",{className:"entry-title",children:n.title}),h.jsx("div",{className:"format",children:n.content}),h.jsxs("div",{className:"entries-nav maxwidth",children:[h.jsx(Re,{to:"/irishfarmerhits",children:"Back to All Songs"}),t<Un.length&&h.jsx(Re,{to:`/irishfarmerhits/${t+1}`,children:"Next Song"}),t===Un.length&&h.jsx(Re,{to:"/irishfarmerhits/1",children:"Go to First Song"})]})]}):h.jsx("p",{children:"Song not found"})})}function zy({audioPath:e}){return h.jsx("div",{children:h.jsxs("audio",{controls:!0,children:[h.jsx("source",{src:e,type:"audio/mp3"}),h.jsx("p",{className:"error-msg",children:"Your browser does not support the audio element."})]})})}function Wy({videoPath:e}){return h.jsx("div",{className:"video-wrapper",children:h.jsxs("video",{className:"video-player",controls:!0,children:[h.jsx("source",{src:e,type:"video/mp4"}),h.jsx("p",{className:"error-msg",children:"Your browser does not support video."})]})})}function Uy(){return h.jsxs("div",{className:"app",children:[h.jsx("h1",{children:"2024 FAHn Writing Contest"}),h.jsxs(vg,{children:[h.jsxs(cg,{children:[h.jsx(at,{path:"/",element:h.jsx(Sg,{})}),h.jsx(at,{path:"/guidelines",element:h.jsx(Tg,{})}),h.jsx(at,{path:"/submit",element:h.jsx(Ag,{})}),h.jsx(at,{path:"/stories",element:h.jsx(Sy,{})}),h.jsx(at,{path:"/poems",element:h.jsx(Lg,{})}),h.jsx(at,{path:"/irishfarmerhits",element:h.jsx(Ly,{})}),h.jsx(at,{path:"/poems/:id",element:h.jsx(Bg,{})}),h.jsx(at,{path:"/stories/:id",element:h.jsx(xy,{})}),h.jsx(at,{path:"/irishfarmerhits/:id",element:h.jsx(By,{})})]}),h.jsx(Gy,{})]})]})}function Gy(){const t=ta().pathname==="/";return h.jsx("div",{className:"menu-link",children:!t&&h.jsx(Re,{to:"/",children:"Main Menu"})})}wi.createRoot(document.getElementById("root")).render(h.jsx(vu.StrictMode,{children:h.jsx(Uy,{})}));
