import{k as c,l as F,j as r}from"./index-CDUZZyqT.js";import{P as d}from"./index-BX-2nI6f.js";import{F as i}from"./index-BQ8DLJYh.js";import{u as N}from"./useLocalStorage-DiAitSZJ.js";import{I}from"./index-6pA6qLF0.js";var M=typeof c=="object"&&c&&c.Object===Object&&c,P=M,G=P,H=typeof self=="object"&&self&&self.Object===Object&&self,U=G||H||Function("return this")(),E=U,J=E,z=J.Symbol,g=z;function L(e,o){for(var t=-1,n=e==null?0:e.length,a=Array(n);++t<n;)a[t]=o(e[t],t,e);return a}var W=L,V=Array.isArray,q=V,p=g,x=Object.prototype,D=x.hasOwnProperty,X=x.toString,s=p?p.toStringTag:void 0;function Z(e){var o=D.call(e,s),t=e[s];try{e[s]=void 0;var n=!0}catch{}var a=X.call(e);return n&&(o?e[s]=t:delete e[s]),a}var B=Z,Q=Object.prototype,Y=Q.toString;function K(e){return Y.call(e)}var ee=K,m=g,re=B,oe=ee,te="[object Null]",ae="[object Undefined]",j=m?m.toStringTag:void 0;function ne(e){return e==null?e===void 0?ae:te:j&&j in Object(e)?re(e):oe(e)}var ie=ne;function se(e){return e!=null&&typeof e=="object"}var ce=se,le=ie,ue=ce,de="[object Symbol]";function fe(e){return typeof e=="symbol"||ue(e)&&le(e)==de}var he=fe,v=g,be=W,ge=q,pe=he,me=1/0,_=v?v.prototype:void 0,y=_?_.toString:void 0;function S(e){if(typeof e=="string")return e;if(ge(e))return be(e,S)+"";if(pe(e))return y?y.call(e):"";var o=e+"";return o=="0"&&1/e==-me?"-0":o}var je=S,ve=je;function _e(e){return e==null?"":ve(e)}var T=_e;function ye(e,o,t){var n=-1,a=e.length;o<0&&(o=-o>a?0:a+o),t=t>a?a:t,t<0&&(t+=a),a=o>t?0:t-o>>>0,o>>>=0;for(var u=Array(a);++n<a;)u[n]=e[n+o];return u}var xe=ye,Se=xe;function Te(e,o,t){var n=e.length;return t=t===void 0?n:t,!o&&t>=n?e:Se(e,o,t)}var $e=Te,ke="\\ud800-\\udfff",Re="\\u0300-\\u036f",Ae="\\ufe20-\\ufe2f",we="\\u20d0-\\u20ff",Oe=Re+Ae+we,Ce="\\ufe0e\\ufe0f",Fe="\\u200d",Ne=RegExp("["+Fe+ke+Oe+Ce+"]");function Ie(e){return Ne.test(e)}var $=Ie;function Me(e){return e.split("")}var Pe=Me,k="\\ud800-\\udfff",Ge="\\u0300-\\u036f",He="\\ufe20-\\ufe2f",Ue="\\u20d0-\\u20ff",Ee=Ge+He+Ue,Je="\\ufe0e\\ufe0f",ze="["+k+"]",h="["+Ee+"]",b="\\ud83c[\\udffb-\\udfff]",Le="(?:"+h+"|"+b+")",R="[^"+k+"]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",We="\\u200d",O=Le+"?",C="["+Je+"]?",Ve="(?:"+We+"(?:"+[R,A,w].join("|")+")"+C+O+")*",qe=C+O+Ve,De="(?:"+[R+h+"?",h,A,w,ze].join("|")+")",Xe=RegExp(b+"(?="+b+")|"+De+qe,"g");function Ze(e){return e.match(Xe)||[]}var Be=Ze,Qe=Pe,Ye=$,Ke=Be;function er(e){return Ye(e)?Ke(e):Qe(e)}var rr=er,or=$e,tr=$,ar=rr,nr=T;function ir(e){return function(o){o=nr(o);var t=tr(o)?ar(o):void 0,n=t?t[0]:o.charAt(0),a=t?or(t,1).join(""):o.slice(1);return n[e]()+a}}var sr=ir,cr=sr,lr=cr("toUpperCase"),ur=lr,dr=T,fr=ur;function hr(e){return fr(dr(e).toLowerCase())}var br=hr;const gr=F(br),pr="_about_na93g_1",mr="_gitHub_na93g_50",l={about:pr,"about__icon-hand":"_about__icon-hand_na93g_37","about__icon-fire":"_about__icon-fire_na93g_44",gitHub:mr};function jr(){var o;const[e]=N("user");return r.jsxs("article",{className:l.about,children:[r.jsxs(i,{children:[e&&r.jsxs("p",{children:["Welcome Back,"," ",r.jsx("strong",{children:(o=e.fullName)==null?void 0:o.split(" ").map(t=>gr(t)).join(" ")}),"."]}),r.jsxs("p",{children:[r.jsx("span",{className:"".concat(l["about__icon-hand"]," --waving"),children:"👋"})," My name is"," ",r.jsx("span",{children:"Jason Smith"}),", I am a ",r.jsx("span",{children:"Frontend"})," leaning ",r.jsx("span",{children:"FullStack Engineer"})," ","living in ",r.jsx("span",{children:"Denver, CO"}),". I have been building web-applications for about 13 years."]})]}),r.jsx(i,{children:r.jsxs("p",{children:["This site serves as both a portfolio and a side project to foster continuous improvement. I keep it updated with new skills and technologies as time permits. On the frontend, I am using"," ",r.jsx("code",{children:"React"})," functional components, ",r.jsx("code",{children:"React Query"}),", ",r.jsx("code",{children:"React Router"}),", and"," ",r.jsx("code",{children:"MobX"})," for state management. On the backend, I use ",r.jsx("code",{children:"NodeJs"}),","," ",r.jsx("code",{children:"Express"})," and ",r.jsx("code",{children:"Firebase"})," serverless functions"," ",r.jsx("span",{className:"".concat(l["about__icon-fire"]," --flickering"),children:"🔥"}),". The graphics are original and 10 years old. The layout uses a mobile first approach and is ",r.jsx("code",{children:"responsive"})," across all devices. Source code is available on"," ",r.jsxs("a",{href:"https://github.com/jasoncsmith/React-Portfolio/",target:"_blank",rel:"noreferrer",children:[r.jsx(I,{className:l.gitHub,iconName:"FaGithub"}),"GitHub"]})]})}),r.jsx(i,{children:r.jsx("p",{children:"I have built software in start-up environments for airlines, manufacturing, insurance, and automotive sectors. Each project had its unique product vision and technical challenges. I have enjoyed the process of research, collaboration, and networking to take the complex and turn it into great looking user-centric functionality. I chose this career because the landscape is always changing, there is always something new to learn or a process to improve -- this keeps my over-active mind happy."})}),r.jsx(i,{children:r.jsxs("p",{children:["I Would like to call out my ",r.jsx("a",{href:"/work",children:"custom-built fully responsive carousel"}),", written with"," ",r.jsx("code",{children:"React"}),", ",r.jsx("code",{children:"MobX"})," and the ",r.jsx("code",{children:"useResizeObserver"})," hook. Other technologies used on this site include: ",r.jsx("code",{children:"Typescript"}),", ",r.jsx("code",{children:"Modular SASS"}),","," ",r.jsx("code",{children:"react-pdf"}),", ",r.jsx("code",{children:"react-icons"}),", and played with a bit of ",r.jsx("code",{children:"Tailwind CSS"}),"."]})}),r.jsx(i,{animationToggle:!0,children:r.jsxs("p",{children:["Please have a look around and I encourage you to take a look under the hood; link to the source code here ➜"," ",r.jsx("strong",{children:r.jsx("a",{href:"https://github.com/jasoncsmith/React-Portfolio/",target:"_blank",rel:"noreferrer",children:"GitHub"})}),"."]})})]})}const vr="_page_1hf6d_1",_r="_title_1hf6d_5",yr="_title__of_1hf6d_14",f={page:vr,title:_r,title__of:yr};function Rr(){return r.jsxs(d,{className:f.page,children:[r.jsx(d.Header,{title:r.jsxs("span",{className:f.title,children:[r.jsx("strong",{className:"caption",children:"Portfolio"}),r.jsx("span",{className:f.title__of,children:" of "}),r.jsx("br",{}),r.jsx("strong",{className:"name",children:"Jason Smith"})]})}),r.jsx(d.Content,{children:r.jsx(jr,{})})]})}export{Rr as default};
