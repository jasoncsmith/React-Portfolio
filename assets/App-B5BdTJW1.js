var S=Object.defineProperty;var C=(o,t,n)=>t in o?S(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var p=(o,t,n)=>(C(o,typeof t!="symbol"?t+"":t,n),n);import{r as l,j as e,c,I as m,N as k,u as Y,O as E}from"./index-ehbE32s_.js";import{u as L}from"./bundle.esm-CpPVDyYZ.js";import{Q as $}from"./react-toastify.esm-C87tdbu_.js";import{m as P,o as u,c as N,a as f,b as y}from"./mobxreact.esm-DQmJLTui.js";import"./clsx-B-dksMZM.js";var R=Object.defineProperty,z=Object.getOwnPropertyDescriptor,i=(o,t,n,a)=>{for(var r=a>1?void 0:a?z(t,n):t,v=o.length-1,j;v>=0;v--)(j=o[v])&&(r=(a?j(t,n,r):j(r))||r);return a&&r&&R(t,n,r),r};class s{constructor(){p(this,"scrollY",1);p(this,"prevScrollY",1);p(this,"clientWidth",1);p(this,"hideHeader",!1);p(this,"isNavOpen",!1);P(this),this.init()}get scrollingDown(){return this.scrollY>this.prevScrollY}get scrollingUp(){return this.scrollY<this.prevScrollY}get shouldHideHeader(){return this.isNavOpen?!1:!!(this.scrollingDown&&this.scrollY>35)}setHideHeader(t){this.hideHeader=t}setIsNavOpen(t){this.isNavOpen=t}onScroll(){this.prevScrollY=this.scrollY,this.scrollY=window.scrollY}onResize(){this.clientWidth=window.innerWidth}init(){window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)}destroy(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}}i([u],s.prototype,"scrollY",2);i([u],s.prototype,"prevScrollY",2);i([u],s.prototype,"clientWidth",2);i([u],s.prototype,"hideHeader",2);i([u],s.prototype,"isNavOpen",2);i([N],s.prototype,"scrollingDown",1);i([N],s.prototype,"scrollingUp",1);i([N],s.prototype,"shouldHideHeader",1);i([f.bound],s.prototype,"setHideHeader",1);i([f.bound],s.prototype,"setIsNavOpen",1);i([f.bound],s.prototype,"onScroll",1);i([f.bound],s.prototype,"onResize",1);i([f.bound],s.prototype,"init",1);const O=new s,H=l.createContext(O),I=()=>l.useContext(H),D=O,W="_app__header_1gnqd_1",x={app__header:W,"app__header--hidden":"_app__header--hidden_1gnqd_14","app__header--solid-bg":"_app__header--solid-bg_1gnqd_17"};function F({children:o}){const{isNavOpen:t,shouldHideHeader:n,scrollY:a}=I();return e.jsx("header",{className:c([x.app__header],{[x["app__header--hidden"]]:n,[x["app__header--solid-bg"]]:t||a>150}),children:o})}const U=y(F),A="_footer_1jl13_1",q="_footer__author_1jl13_7",G="_footer__nav_1jl13_14",M="_footer__link_1jl13_22",T="_footer__copyright_1jl13_56",J="_footer__container_1jl13_63",_={footer:A,footer__author:q,footer__nav:G,footer__link:M,"footer__link-linkedin":"_footer__link-linkedin_1jl13_36","footer__link-gitHub":"_footer__link-gitHub_1jl13_43",footer__copyright:T,footer__container:J},g={linkedin:"https://www.linkedin.com/in/jasoncsmithweb/",gitHub:"https://github.com/jasoncsmith/React-Portfolio"};function Q(){var t;const o=l.useRef(null);return l.useEffect(()=>{var n;document.documentElement.style.setProperty("--global-app-footer-height","".concat((n=o.current)==null?void 0:n.offsetHeight,"px"))},[(t=o.current)==null?void 0:t.offsetHeight]),e.jsx("footer",{ref:o,className:_.footer,children:e.jsxs("div",{className:_.footer__container,children:[e.jsx("p",{className:_.footer__author,children:"JASON SMITH"}),e.jsxs("nav",{className:_.footer__nav,children:[e.jsx("a",{className:c({[_.footer__link]:!0,[_["footer__link-gitHub"]]:!0}),rel:"noreferrer",href:g.gitHub,target:"_blank",children:e.jsx(m,{iconName:"FaGithub"})}),e.jsx("a",{className:c({[_.footer__link]:!0,[_["footer__link-linkedin"]]:!0}),rel:"noreferrer",href:g.linkedin,target:"_blank",children:e.jsx(m,{iconName:"FaLinkedin"})})]}),e.jsxs("p",{className:_.footer__copyright,children:["©",new Date().getFullYear()," | jason smith | All rights reserved..."]})]})})}const B="_app__content_jxq43_1",K={app__content:B};function V({children:o}){return e.jsx("main",{className:K.app__content,children:o})}const X="_logo_82gnb_1",Z={logo:X};function ee(){return e.jsx("div",{className:Z.logo,children:e.jsx(k,{to:"/about",children:e.jsx("img",{src:"images/favicon.png",alt:"Logo",width:32,height:32})})})}const w={"nav-trigger":"_nav-trigger_1atgh_1","nav-trigger__wrapper":"_nav-trigger__wrapper_1atgh_12","nav-trigger--is-active":"_nav-trigger--is-active_1atgh_37"};function te({isActive:o,onClick:t}){return e.jsx("button",{type:"button",onClick:t,className:c(w["nav-trigger"],{[w["nav-trigger--is-active"]]:o}),children:e.jsxs("div",{className:w["nav-trigger__wrapper"],children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})}const d={"nav-item":"_nav-item_15873_1","nav-item__wrap":"_nav-item__wrap_15873_15","nav-item--is-offsite":"_nav-item--is-offsite_15873_31","nav-item__icon":"_nav-item__icon_15873_35","nav-item__icon--IoCogOutline":"_nav-item__icon--IoCogOutline_15873_44","nav-item__icon--IoShareSocialOutline":"_nav-item__icon--IoShareSocialOutline_15873_47","nav-item--is-active":"_nav-item--is-active_15873_50"},h=({href:o,icon:t,onClick:n,children:a,isOffSite:r=!1})=>e.jsxs(k,{className:({isActive:v})=>c(d["nav-item"],{[d["nav-item--is-active"]]:v,[d["nav-item--is-offsite"]]:r===!0}),to:o,onClick:n,referrerPolicy:r?"no-referrer":void 0,target:r?"_blank":void 0,children:[e.jsxs("span",{className:d["nav-item__wrap"],children:[e.jsx(m,{iconName:t,className:c(d["nav-item__icon"],d["nav-item__icon--".concat(t)])}),a]}),r&&e.jsx(m,{iconName:"IoExitOutline"})]}),b={"app-nav":"_app-nav_1onel_1","app-nav__wrapper":"_app-nav__wrapper_1onel_5","app-nav__wrapper--is-nav-open":"_app-nav__wrapper--is-nav-open_1onel_22"};function oe(){const{isNavOpen:o,setIsNavOpen:t}=I();function n(a){a.stopPropagation(),t(!o)}return e.jsxs("nav",{className:b["app-nav"],children:[e.jsx(te,{isActive:o,onClick:n}),e.jsxs("div",{onClick:n,className:c(b["app-nav__wrapper"],{[b["app-nav__wrapper--is-nav-open"]]:o}),children:[e.jsx(h,{onClick:n,href:"/about",icon:"IoShareSocialOutline",children:"About"}),e.jsx(h,{onClick:n,href:"/work",icon:"IoCogOutline",children:"Work"}),e.jsx(h,{onClick:n,href:"/contact",icon:"IoMailOutline",children:"Contact"}),e.jsx(h,{onClick:n,href:"/resume",icon:"IoDocumentOutline",children:"Resume"}),e.jsx("hr",{}),e.jsx(h,{onClick:n,icon:"FaGithub",href:g.gitHub,isOffSite:!0,children:"GitHub"}),e.jsx(h,{onClick:n,icon:"FaLinkedin",href:g.linkedin,isOffSite:!0,children:"Linked In"})]})]})}const ne=y(oe);function ce(){const{ref:o,width:t=1}=L(),[n,a]=l.useState("100%"),{pathname:r}=Y();return l.useLayoutEffect(()=>{document.documentElement.scrollTo(0,0)},[r]),l.useEffect(()=>{a("".concat(t,"px"))},[t]),e.jsx(H.Provider,{value:D,children:e.jsxs("div",{ref:o,className:"app",style:{"--global-viewport-width":n},children:[e.jsxs(U,{children:[e.jsx(ee,{}),e.jsx(ne,{})]}),e.jsxs(V,{children:[e.jsx($,{}),e.jsx(E,{})]}),e.jsx(Q,{})]})})}export{ce as default};
