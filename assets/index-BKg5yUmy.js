import{k as l,l as C,j as r}from"./index-CgTmUCA5.js";import{P as f}from"./index-j7EBNbc2.js";import{F as s}from"./index-Dxw2j_qo.js";import{u as N}from"./useLocalStorage-BWXCLxqS.js";import{I}from"./index-BpA9YFnY.js";var M=typeof l=="object"&&l&&l.Object===Object&&l,q=M,P=q,G=typeof self=="object"&&self&&self.Object===Object&&self,H=P||G||Function("return this")(),U=H,E=U,J=E.Symbol,g=J;function z(e,t){for(var a=-1,n=e==null?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}var L=z,W=Array.isArray,V=W,p=g,y=Object.prototype,D=y.hasOwnProperty,X=y.toString,i=p?p.toStringTag:void 0;function Z(e){var t=D.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch{}var o=X.call(e);return n&&(t?e[i]=a:delete e[i]),o}var B=Z,Q=Object.prototype,Y=Q.toString;function K(e){return Y.call(e)}var ee=K,_=g,re=B,te=ee,ae="[object Null]",oe="[object Undefined]",j=_?_.toStringTag:void 0;function ne(e){return e==null?e===void 0?oe:ae:j&&j in Object(e)?re(e):te(e)}var se=ne;function ie(e){return e!=null&&typeof e=="object"}var ce=ie,le=se,de=ce,ue="[object Symbol]";function fe(e){return typeof e=="symbol"||de(e)&&le(e)==ue}var he=fe,m=g,be=L,ge=V,pe=he,_e=1/0,v=m?m.prototype:void 0,x=v?v.toString:void 0;function S(e){if(typeof e=="string")return e;if(ge(e))return be(e,S)+"";if(pe(e))return x?x.call(e):"";var t=e+"";return t=="0"&&1/e==-_e?"-0":t}var je=S,me=je;function ve(e){return e==null?"":me(e)}var $=ve;function xe(e,t,a){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),a=a>o?o:a,a<0&&(a+=o),o=t>a?0:a-t>>>0,t>>>=0;for(var u=Array(o);++n<o;)u[n]=e[n+t];return u}var ye=xe,Se=ye;function $e(e,t,a){var n=e.length;return a=a===void 0?n:a,!t&&a>=n?e:Se(e,t,a)}var Te=$e,ke="\\ud800-\\udfff",Re="\\u0300-\\u036f",we="\\ufe20-\\ufe2f",Ae="\\u20d0-\\u20ff",Oe=Re+we+Ae,Fe="\\ufe0e\\ufe0f",Ce="\\u200d",Ne=RegExp("["+Ce+ke+Oe+Fe+"]");function Ie(e){return Ne.test(e)}var T=Ie;function Me(e){return e.split("")}var qe=Me,k="\\ud800-\\udfff",Pe="\\u0300-\\u036f",Ge="\\ufe20-\\ufe2f",He="\\u20d0-\\u20ff",Ue=Pe+Ge+He,Ee="\\ufe0e\\ufe0f",Je="["+k+"]",h="["+Ue+"]",b="\\ud83c[\\udffb-\\udfff]",ze="(?:"+h+"|"+b+")",R="[^"+k+"]",w="(?:\\ud83c[\\udde6-\\uddff]){2}",A="[\\ud800-\\udbff][\\udc00-\\udfff]",Le="\\u200d",O=ze+"?",F="["+Ee+"]?",We="(?:"+Le+"(?:"+[R,w,A].join("|")+")"+F+O+")*",Ve=F+O+We,De="(?:"+[R+h+"?",h,w,A,Je].join("|")+")",Xe=RegExp(b+"(?="+b+")|"+De+Ve,"g");function Ze(e){return e.match(Xe)||[]}var Be=Ze,Qe=qe,Ye=T,Ke=Be;function er(e){return Ye(e)?Ke(e):Qe(e)}var rr=er,tr=Te,ar=T,or=rr,nr=$;function sr(e){return function(t){t=nr(t);var a=ar(t)?or(t):void 0,n=a?a[0]:t.charAt(0),o=a?tr(a,1).join(""):t.slice(1);return n[e]()+o}}var ir=sr,cr=ir,lr=cr("toUpperCase"),dr=lr,ur=$,fr=dr;function hr(e){return fr(ur(e).toLowerCase())}var br=hr;const gr=C(br),pr="_about_na93g_1",_r="_gitHub_na93g_50",d={about:pr,"about__icon-hand":"_about__icon-hand_na93g_37","about__icon-fire":"_about__icon-fire_na93g_44",gitHub:_r};function jr(){var t;const[e]=N("user");return r.jsxs("article",{className:d.about,children:[r.jsxs(s,{children:[e&&r.jsxs("p",{children:["Welcome Back,"," ",r.jsx("strong",{children:(t=e.fullName)==null?void 0:t.split(" ").map(a=>gr(a)).join(" ")}),"."]}),r.jsxs("p",{children:[r.jsx("span",{className:"".concat(d["about__icon-hand"]," --waving"),children:"👋"})," My name is"," ",r.jsx("span",{children:"Jason Smith"}),", I am a ",r.jsx("span",{children:"Frontend"})," leaning ",r.jsx("span",{children:"FullStack Engineer"})," ","living in ",r.jsx("span",{children:"Denver, CO"}),". I have been building web-applications for about 13 years."]})]}),r.jsx(s,{children:r.jsxs("p",{children:["This site serves as both a portfolio and a side project to foster continuous improvement. I keep it updated with new skills and technologies as time permits. On the frontend, I am using"," ",r.jsx("code",{children:"React"})," functional components, ",r.jsx("code",{children:"React Query"}),", ",r.jsx("code",{children:"React Router"}),", and"," ",r.jsx("code",{children:"MobX"})," for state management. On the backend, I use ",r.jsx("code",{children:"NodeJs"}),","," ",r.jsx("code",{children:"Express"})," and ",r.jsx("code",{children:"Firebase"})," serverless functions"," ",r.jsx("span",{className:"".concat(d["about__icon-fire"]," --flickering"),children:"🔥"}),". The graphics are original and 10 years old. The layout uses a mobile first approach and is ",r.jsx("code",{children:"responsive"})," across all devices. Source code is available on"," ",r.jsxs("a",{href:"https://github.com/jasoncsmith/React-Portfolio/",target:"_blank",rel:"noreferrer",children:[r.jsx(I,{className:d.gitHub,iconName:"FaGithub"}),"GitHub"]})]})}),r.jsx(s,{children:r.jsx("p",{children:"I have built software in start-up environments for airlines, manufacturing, insurance, and automotive sectors. Each project had its unique product vision and technical challenges. I have enjoyed the process of research, collaboration, and networking to take the complex and turn it into great looking user-centric functionality. I chose this career because the landscape is always changing, there is always something new to learn or a process to improve -- this keeps my over-active mind happy."})}),r.jsx(s,{children:r.jsxs("p",{children:["I Would like to call out my ",r.jsx("a",{href:"/work",children:"custom-built fully responsive carousel"}),", written with"," ",r.jsx("code",{children:"React"}),", ",r.jsx("code",{children:"MobX"})," and the ",r.jsx("code",{children:"useResizeObserver"})," hook. Other technologies used on this site include: ",r.jsx("code",{children:"Typescript"}),", ",r.jsx("code",{children:"Modular SASS"}),","," ",r.jsx("code",{children:"react-pdf"}),", ",r.jsx("code",{children:"react-icons"}),", and played with a bit of ",r.jsx("code",{children:"Tailwind CSS"}),"."]})}),r.jsx(s,{animationToggle:!0,children:r.jsxs("p",{children:["Please have a look around and I encourage you to take a look under the hood; link to the source code here ➜"," ",r.jsx("strong",{children:r.jsx("a",{href:"https://github.com/jasoncsmith/React-Portfolio/",target:"_blank",rel:"noreferrer",children:"GitHub"})}),"."]})})]})}const mr="_starField_1ektk_1",vr={starField:mr},xr="_star_8x0qh_1",yr="_flicker_8x0qh_1",Sr="_up_8x0qh_1",$r="_down_8x0qh_1",Tr="_left_8x0qh_1",kr="_right_8x0qh_1",Rr={star:xr,flicker:yr,"--up":"_--up_8x0qh_57",up:Sr,down:$r,left:Tr,right:kr},wr=()=>r.jsx("span",{className:"".concat(Rr.star," }")}),Ar=()=>r.jsx("div",{className:vr.starField,children:[...Array(5).keys()].map(e=>r.jsx(wr,{}))}),Or="_page_y6qdb_7",Fr="_title_y6qdb_11",Cr="_title__of_y6qdb_20",Nr="_title__caption_y6qdb_32",c={page:Or,title:Fr,title__of:Cr,title__caption:Nr};function Hr(){return r.jsxs(f,{className:c.page,children:[r.jsx(f.Header,{title:r.jsxs("span",{className:c.title,children:[r.jsx("strong",{className:c.title__caption,children:"Portfolio"}),r.jsx("span",{className:c.title__of,children:" of "}),r.jsx("br",{}),r.jsx("strong",{className:c.tite__name,children:"Jason Smith"})]})}),r.jsxs(f.Content,{children:[r.jsx(Ar,{}),r.jsx(jr,{})]})]})}export{Hr as default};