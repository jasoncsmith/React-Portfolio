"use strict";(self.webpackChunkjfolio_client=self.webpackChunkjfolio_client||[]).push([[985],{3733:(e,t,n)=>{function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.d(t,{Z:()=>a});const a=function(){for(var e,t,n=0,a="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},5985:(e,t,n)=>{n.d(t,{Am:()=>P,Ix:()=>S});var o=n(2791),a=n(3733);const s=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||s(e);function d(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:d,nodeRef:u,isIn:p,playToast:f}=e;const m=a?"".concat(t,"--").concat(l):t,g=a?"".concat(n,"--").concat(l):n,y=(0,o.useRef)(0);return(0,o.useLayoutEffect)((()=>{const e=u.current,t=m.split(" "),n=o=>{o.target===u.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,o.useEffect)((()=>{const e=u.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:a}=e;requestAnimationFrame((()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,r):d()};p||(c?t():(y.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))}),[p]),o.createElement(o.Fragment,null,i)}}function u(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const p=new Map;let f=[];const m=new Set,g=e=>m.forEach((t=>t(e))),y=()=>p.size>0;function v(e,t){var n;if(t)return!(null==(n=p.get(t))||!n.isToastActive(e));let o=!1;return p.forEach((t=>{t.isToastActive(e)&&(o=!0)})),o}function h(e,t){c(e)&&(y()||f.push({content:e,options:t}),p.forEach((n=>{n.buildToast(e,t)})))}function E(e,t){p.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function T(e){const{subscribe:t,getSnapshot:n,setProps:a}=(0,o.useRef)(function(e){const t=e.containerId||1;return{subscribe(n){const a=function(e,t,n){let a=1,d=0,p=[],f=[],m=[],g=t;const y=new Map,v=new Set,h=()=>{m=Array.from(y.values()),v.forEach((e=>e()))},E=e=>{f=null==e?[]:f.filter((t=>t!==e)),h()},T=e=>{const{toastId:t,onOpen:a,updateId:s,children:r}=e.props,l=null==s;e.staleId&&y.delete(e.staleId),y.set(t,e),f=[...f,e.props.toastId].filter((t=>t!==e.staleId)),h(),n(u(e,l?"added":"updated")),l&&i(a)&&a((0,o.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(v.add(e),()=>v.delete(e)),toggle:(e,t)=>{y.forEach((n=>{null!=t&&t!==n.props.toastId||i(n.toggle)&&n.toggle(e)}))},removeToast:E,toasts:y,clearQueue:()=>{d-=p.length,p=[]},buildToast:(t,f)=>{if((t=>{let{containerId:n,toastId:o,updateId:a}=t;const s=n?n!==e:1!==e,r=y.has(o)&&null==a;return s||r})(f))return;const{toastId:m,updateId:v,data:b,staleId:_,delay:I}=f,C=()=>{E(m)},L=null==v;L&&d++;const N={...g,style:g.toastStyle,key:a++,...Object.fromEntries(Object.entries(f).filter((e=>{let[t,n]=e;return null!=n}))),toastId:m,updateId:v,data:b,closeToast:C,isIn:!1,className:l(f.className||g.toastClassName),bodyClassName:l(f.bodyClassName||g.bodyClassName),progressClassName:l(f.progressClassName||g.progressClassName),autoClose:!f.isLoading&&(k=f.autoClose,w=g.autoClose,!1===k||s(k)&&k>0?k:w),deleteToast(){const e=y.get(m),{onClose:t,children:a}=e.props;i(t)&&t((0,o.isValidElement)(a)&&a.props),n(u(e,"removed")),y.delete(m),d--,d<0&&(d=0),p.length>0?T(p.shift()):h()}};var k,w;N.closeButton=g.closeButton,!1===f.closeButton||c(f.closeButton)?N.closeButton=f.closeButton:!0===f.closeButton&&(N.closeButton=!c(g.closeButton)||g.closeButton);let P=t;(0,o.isValidElement)(t)&&!r(t.type)?P=(0,o.cloneElement)(t,{closeToast:C,toastProps:N,data:b}):i(t)&&(P=t({closeToast:C,toastProps:N,data:b}));const A={content:P,props:N,staleId:_};g.limit&&g.limit>0&&d>g.limit&&L?p.push(A):s(I)?setTimeout((()=>{T(A)}),I):T(A)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>f.some((t=>t===e)),getSnapshot:()=>g.newestOnTop?m.reverse():m}}(t,e,g);p.set(t,a);const d=a.observe(n);return f.forEach((e=>h(e.content,e.options))),f=[],()=>{d(),p.delete(t)}},setProps(e){var n;null==(n=p.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=p.get(t))?void 0:e.getSnapshot()}}}(e)).current;a(e);const d=(0,o.useSyncExternalStore)(t,n,n);return{getToastToRender:function(e){if(!d)return[];const t=new Map;return d.forEach((e=>{const{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(t=>e(t[0],t[1])))},isToastActive:v,count:null==d?void 0:d.length}}function b(e){const[t,n]=(0,o.useState)(!1),[a,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),i=(0,o.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:d,onClick:u,closeOnClick:f}=e;var m,g;function y(){n(!0)}function v(){n(!1)}function h(n){const o=r.current;i.canDrag&&o&&(i.didMove=!0,t&&v(),i.delta="x"===e.draggableDirection?n.clientX-i.start:n.clientY-i.start,i.start!==n.clientX&&(i.canCloseOnClick=!1),o.style.transform="translate3d(".concat("x"===e.draggableDirection?"".concat(i.delta,"px, var(--y)"):"0, calc(".concat(i.delta,"px + var(--y))"),",0)"),o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function E(){document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",E);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return s(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(g=p.get((m={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))||g.setToggle(m.id,m.fn),(0,o.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}}),[e.pauseOnFocusLoss]);const T={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){i.didMove=!1,document.addEventListener("pointermove",h),document.addEventListener("pointerup",E);const n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(i.start=t.clientX,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=t.clientY,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:a,right:s}=r.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=a&&t.clientX<=s&&t.clientY>=n&&t.clientY<=o?v():y()}};return l&&c&&(T.onMouseEnter=v,e.stacked||(T.onMouseLeave=y)),f&&(T.onClick=e=>{u&&u(e),i.canCloseOnClick&&d()}),{playToast:y,pauseToast:v,isRunning:t,preventExitTransition:a,toastRef:r,eventHandlers:T}}function _(e){let{delay:t,isRunning:n,closeToast:s,type:r="default",hide:l,className:c,style:d,controlledProgress:u,progress:p,rtl:f,isIn:m,theme:g}=e;const y=l||u&&0===p,v={...d,animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused"};u&&(v.transform="scaleX(".concat(p,")"));const h=(0,a.Z)("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":f}),E=i(c)?c({rtl:f,type:r,defaultClassName:h}):(0,a.Z)(h,c),T={[u&&p>=1?"onTransitionEnd":"onAnimationEnd"]:u&&p<1?null:()=>{m&&s()}};return o.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},o.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(g," Toastify__progress-bar--").concat(r)}),o.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:v,...T}))}let I=1;const C=()=>""+I++;function L(e){return e&&(r(e.toastId)||s(e.toastId))?e.toastId:C()}function N(e,t){return h(e,t),t.toastId}function k(e,t){return{...t,type:t&&t.type||e,toastId:L(t)}}function w(e){return(t,n)=>N(t,k(e,n))}function P(e,t){return N(e,k("default",t))}P.loading=(e,t)=>N(e,k("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),P.promise=function(e,t,n){let o,{pending:a,error:s,success:l}=t;a&&(o=r(a)?P.loading(a,n):P.loading(a.render,{...n,...a}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,a)=>{if(null==t)return void P.dismiss(o);const s={type:e,...c,...n,data:a},i=r(t)?{render:t}:t;return o?P.update(o,{...s,...i}):P(i.render,{...s,...i}),a},u=i(e)?e():e;return u.then((e=>d("success",l,e))).catch((e=>d("error",s,e))),u},P.success=w("success"),P.info=w("info"),P.error=w("error"),P.warning=w("warning"),P.warn=P.warning,P.dark=(e,t)=>N(e,k("default",{theme:"dark",...t})),P.dismiss=function(e){!function(e){var t;if(y()){if(null==e||r(t=e)||s(t))p.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){var n;(null==(n=p.get(e.containerId))?void 0:n.removeToast(e.id))||p.forEach((t=>{t.removeToast(e.id)}))}}else f=f.filter((t=>null!=e&&t.options.toastId!==e))}(e)},P.clearWaitingQueue=function(e){void 0===e&&(e={}),p.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},P.isActive=v,P.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=p.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:a}=n,s={delay:100,...o,...t,toastId:t.toastId||e,updateId:C()};s.toastId!==e&&(s.staleId=e);const r=s.render||a;delete s.render,N(r,s)}},P.done=e=>{P.update(e,{progress:1})},P.onChange=function(e){return m.add(e),()=>{m.delete(e)}},P.play=e=>E(!0,e),P.pause=e=>E(!1,e);const A="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,M=e=>{let{theme:t,type:n,isLoading:a,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")"),...s})},x={info:function(e){return o.createElement(M,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(M,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(M,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(M,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}},B=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:r,playToast:l}=b(e),{closeButton:c,children:d,autoClose:u,onClick:p,type:f,hideProgressBar:m,closeToast:g,transition:y,position:v,className:h,style:E,bodyClassName:T,bodyStyle:I,progressClassName:C,progressStyle:L,updateId:N,role:k,progress:w,rtl:P,toastId:A,deleteToast:M,isIn:B,isLoading:O,closeOnClick:D,theme:R}=e,S=(0,a.Z)("Toastify__toast","Toastify__toast-theme--".concat(R),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":D}),z=i(h)?h({rtl:P,position:v,type:f,defaultClassName:S}):(0,a.Z)(S,h),H=function(e){let{theme:t,type:n,isLoading:a,icon:s}=e,r=null;const l={theme:t,type:n};return!1===s||(i(s)?r=s({...l,isLoading:a}):(0,o.isValidElement)(s)?r=(0,o.cloneElement)(s,l):a?r=x.spinner():(e=>e in x)(n)&&(r=x[n](l))),r}(e),Z=!!w||!u,F={closeToast:g,type:f,theme:R};let V=null;return!1===c||(V=i(c)?c(F):(0,o.isValidElement)(c)?(0,o.cloneElement)(c,F):function(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(F)),o.createElement(y,{isIn:B,done:M,position:v,preventExitTransition:n,nodeRef:s,playToast:l},o.createElement("div",{id:A,onClick:p,"data-in":B,className:z,...r,style:E,ref:s},o.createElement("div",{...B&&{role:k},className:i(T)?T({type:f}):(0,a.Z)("Toastify__toast-body",T),style:I},null!=H&&o.createElement("div",{className:(0,a.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},H),o.createElement("div",null,d)),V,o.createElement(_,{...N&&!Z?{key:"pb-".concat(N)}:{},rtl:P,theme:R,delay:u,isRunning:t,isIn:B,closeToast:g,hide:m,type:f,style:L,className:C,controlledProgress:Z,progress:w||0})))},O=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=d(O("bounce",!0)),R=(d(O("slide",!0)),d(O("zoom")),d(O("flip")),{position:"top-right",transition:D,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function S(e){let t={...R,...e};const n=e.stacked,[s,r]=(0,o.useState)(!0),c=(0,o.useRef)(null),{getToastToRender:d,isToastActive:u,count:p}=T(t),{className:f,style:m,rtl:g,containerId:y}=t;function v(e){const t=(0,a.Z)("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":g});return i(f)?f({position:e,rtl:g,defaultClassName:t}):(0,a.Z)(t,l(f))}function h(){n&&(r(!0),P.play())}return A((()=>{if(n){var e;const n=c.current.querySelectorAll('[data-in="true"]'),o=12,a=null==(e=t.position)?void 0:e.includes("top");let r=0,i=0;Array.from(n).reverse().forEach(((e,t)=>{const n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed="".concat(s)),n.dataset.pos||(n.dataset.pos=a?"top":"bot");const l=r*(s?.2:1)+(s?0:o*t);n.style.setProperty("--y","".concat(a?l:-1*l,"px")),n.style.setProperty("--g","".concat(o)),n.style.setProperty("--s",""+(1-(s?i:0))),r+=n.offsetHeight,i+=.025}))}}),[s,p,n]),o.createElement("div",{ref:c,className:"Toastify",id:y,onMouseEnter:()=>{n&&(r(!1),P.pause())},onMouseLeave:h},d(((e,t)=>{const a=t.length?{...m}:{...m,pointerEvents:"none"};return o.createElement("div",{className:v(e),style:a,key:"container-".concat(e)},t.map((e=>{let{content:t,props:a}=e;return o.createElement(B,{...a,stacked:n,collapseAll:h,isIn:u(a.toastId,a.containerId),style:a.style,key:"toast-".concat(a.key)},t)})))})))}}}]);
//# sourceMappingURL=985.f8068c3f.chunk.js.map