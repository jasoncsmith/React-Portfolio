var Wt=Object.defineProperty;var Vt=(s,t,e)=>t in s?Wt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var v=(s,t,e)=>(Vt(s,typeof t!="symbol"?t+"":t,e),e),ct=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var i=(s,t,e)=>(ct(s,t,"read from private field"),e?e.call(s):t.get(s)),_=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},p=(s,t,e,n)=>(ct(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e);var m=(s,t,e)=>(ct(s,t,"access private method"),e);import{S as qt,s as ut,n as Kt,i as Ot,a as Nt,t as Gt,f as Jt,b as Xt,d as At,e as $t,r as x,g as Yt,j as r,c as H}from"./index-CDUZZyqT.js";import{P as dt}from"./index-BX-2nI6f.js";import{o as O,c as et,a as g,m as Zt,b as N}from"./mobxreact.esm-CvXcQozZ.js";import{c as te}from"./index-CBjqBdFS.js";import{I as Et}from"./index-6pA6qLF0.js";import{L as ee}from"./index-CZ8Vx2ce.js";import{F as se}from"./index-BQ8DLJYh.js";var b,h,V,y,P,U,S,q,$,M,T,L,j,k,F,W,K,_t,G,pt,J,ft,X,mt,Y,gt,Z,vt,tt,yt,nt,Mt,Ut,ie=(Ut=class extends qt{constructor(t,e){super();_(this,F);_(this,K);_(this,G);_(this,J);_(this,X);_(this,Y);_(this,Z);_(this,tt);_(this,nt);_(this,b,void 0);_(this,h,void 0);_(this,V,void 0);_(this,y,void 0);_(this,P,void 0);_(this,U,void 0);_(this,S,void 0);_(this,q,void 0);_(this,$,void 0);_(this,M,void 0);_(this,T,void 0);_(this,L,void 0);_(this,j,void 0);_(this,k,new Set);this.options=e,p(this,b,t),p(this,S,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,h).addObserver(this),Pt(i(this,h),this.options)?m(this,F,W).call(this):this.updateResult(),m(this,X,mt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bt(i(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bt(i(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,m(this,Y,gt).call(this),m(this,Z,vt).call(this),i(this,h).removeObserver(this)}setOptions(t,e){const n=this.options,o=i(this,h);if(this.options=i(this,b).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");m(this,tt,yt).call(this),i(this,h).setOptions(this.options),n._defaulted&&!ut(this.options,n)&&i(this,b).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,h),observer:this});const a=this.hasListeners();a&&Tt(i(this,h),o,this.options,n)&&m(this,F,W).call(this),this.updateResult(e),a&&(i(this,h)!==o||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&m(this,K,_t).call(this);const l=m(this,G,pt).call(this);a&&(i(this,h)!==o||this.options.enabled!==n.enabled||l!==i(this,j))&&m(this,J,ft).call(this,l)}getOptimisticResult(t){const e=i(this,b).getQueryCache().build(i(this,b),t),n=this.createResult(e,t);return re(this,n)&&(p(this,y,n),p(this,U,this.options),p(this,P,i(this,h).state)),n}getCurrentResult(){return i(this,y)}trackResult(t,e){const n={};return Object.keys(t).forEach(o=>{Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),e==null||e(o),t[o])})}),n}trackProp(t){i(this,k).add(t)}getCurrentQuery(){return i(this,h)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=i(this,b).defaultQueryOptions(t),n=i(this,b).getQueryCache().build(i(this,b),e);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,e))}fetch(t){var e;return m(this,F,W).call(this,{...t,cancelRefetch:(e=t.cancelRefetch)!=null?e:!0}).then(()=>(this.updateResult(),i(this,y)))}createResult(t,e){var jt;const n=i(this,h),o=this.options,a=i(this,y),l=i(this,P),u=i(this,U),D=t!==n?t.state:i(this,V),{state:w}=t;let f={...w},Ct=!1,R;if(e._optimisticResults){const I=this.hasListeners(),lt=!I&&Pt(t,e),zt=I&&Tt(t,n,e,o);(lt||zt)&&(f={...f,...Xt(w.data,t.options)}),e._optimisticResults==="isRestoring"&&(f.fetchStatus="idle")}let{error:It,errorUpdatedAt:Rt,status:A}=f;if(e.select&&f.data!==void 0)if(a&&f.data===(l==null?void 0:l.data)&&e.select===i(this,q))R=i(this,$);else try{p(this,q,e.select),R=e.select(f.data),R=At(a==null?void 0:a.data,R,e),p(this,$,R),p(this,S,null)}catch(I){p(this,S,I)}else R=f.data;if(e.placeholderData!==void 0&&R===void 0&&A==="pending"){let I;if(a!=null&&a.isPlaceholderData&&e.placeholderData===(u==null?void 0:u.placeholderData))I=a.data;else if(I=typeof e.placeholderData=="function"?e.placeholderData((jt=i(this,M))==null?void 0:jt.state.data,i(this,M)):e.placeholderData,e.select&&I!==void 0)try{I=e.select(I),p(this,S,null)}catch(lt){p(this,S,lt)}I!==void 0&&(A="success",R=At(a==null?void 0:a.data,I,e),Ct=!0)}i(this,S)&&(It=i(this,S),R=i(this,$),Rt=Date.now(),A="error");const rt=f.fetchStatus==="fetching",ot=A==="pending",at=A==="error",St=ot&&rt,wt=R!==void 0;return{status:A,fetchStatus:f.fetchStatus,isPending:ot,isSuccess:A==="success",isError:at,isInitialLoading:St,isLoading:St,data:R,dataUpdatedAt:f.dataUpdatedAt,error:It,errorUpdatedAt:Rt,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>D.dataUpdateCount||f.errorUpdateCount>D.errorUpdateCount,isFetching:rt,isRefetching:rt&&!ot,isLoadingError:at&&!wt,isPaused:f.fetchStatus==="paused",isPlaceholderData:Ct,isRefetchError:at&&wt,isStale:xt(t,e),refetch:this.refetch}}updateResult(t){const e=i(this,y),n=this.createResult(i(this,h),this.options);if(p(this,P,i(this,h).state),p(this,U,this.options),i(this,P).data!==void 0&&p(this,M,i(this,h)),ut(n,e))return;p(this,y,n);const o={},a=()=>{if(!e)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!i(this,k).size)return!0;const C=new Set(u!=null?u:i(this,k));return this.options.throwOnError&&C.add("error"),Object.keys(i(this,y)).some(D=>{const w=D;return i(this,y)[w]!==e[w]&&C.has(w)})};(t==null?void 0:t.listeners)!==!1&&a()&&(o.listeners=!0),m(this,nt,Mt).call(this,{...o,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&m(this,X,mt).call(this)}},b=new WeakMap,h=new WeakMap,V=new WeakMap,y=new WeakMap,P=new WeakMap,U=new WeakMap,S=new WeakMap,q=new WeakMap,$=new WeakMap,M=new WeakMap,T=new WeakMap,L=new WeakMap,j=new WeakMap,k=new WeakMap,F=new WeakSet,W=function(t){m(this,tt,yt).call(this);let e=i(this,h).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Kt)),e},K=new WeakSet,_t=function(){if(m(this,Y,gt).call(this),Ot||i(this,y).isStale||!Nt(this.options.staleTime))return;const e=Gt(i(this,y).dataUpdatedAt,this.options.staleTime)+1;p(this,T,setTimeout(()=>{i(this,y).isStale||this.updateResult()},e))},G=new WeakSet,pt=function(){var t;return(t=typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,h)):this.options.refetchInterval)!=null?t:!1},J=new WeakSet,ft=function(t){m(this,Z,vt).call(this),p(this,j,t),!(Ot||this.options.enabled===!1||!Nt(i(this,j))||i(this,j)===0)&&p(this,L,setInterval(()=>{(this.options.refetchIntervalInBackground||Jt.isFocused())&&m(this,F,W).call(this)},i(this,j)))},X=new WeakSet,mt=function(){m(this,K,_t).call(this),m(this,J,ft).call(this,m(this,G,pt).call(this))},Y=new WeakSet,gt=function(){i(this,T)&&(clearTimeout(i(this,T)),p(this,T,void 0))},Z=new WeakSet,vt=function(){i(this,L)&&(clearInterval(i(this,L)),p(this,L,void 0))},tt=new WeakSet,yt=function(){const t=i(this,b).getQueryCache().build(i(this,b),this.options);if(t===i(this,h))return;const e=i(this,h);p(this,h,t),p(this,V,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},nt=new WeakSet,Mt=function(t){$t.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(i(this,y))}),i(this,b).getQueryCache().notify({query:i(this,h),type:"observerResultsUpdated"})})},Ut);function ne(s,t){return t.enabled!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function Pt(s,t){return ne(s,t)||s.state.data!==void 0&&bt(s,t,t.refetchOnMount)}function bt(s,t,e){if(t.enabled!==!1){const n=typeof e=="function"?e(s):e;return n==="always"||n!==!1&&xt(s,t)}return!1}function Tt(s,t,e,n){return(s!==t||n.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&xt(s,e)}function xt(s,t){return t.enabled!==!1&&s.isStaleByTime(t.staleTime)}function re(s,t){return!ut(s.getCurrentResult(),t)}var kt=x.createContext(!1),oe=()=>x.useContext(kt);kt.Provider;function ae(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var le=x.createContext(ae()),ce=()=>x.useContext(le);function de(s,t){return typeof s=="function"?s(...t):!!s}var he=(s,t)=>{(s.suspense||s.throwOnError)&&(t.isReset()||(s.retryOnMount=!1))},ue=s=>{x.useEffect(()=>{s.clearReset()},[s])},_e=({result:s,errorResetBoundary:t,throwOnError:e,query:n})=>s.isError&&!t.isReset()&&!s.isFetching&&n&&de(e,[s.error,n]),pe=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},fe=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,me=(s,t,e)=>t.fetchOptimistic(s).catch(()=>{e.clearReset()});function ge(s,t,e){const n=Yt(),o=oe(),a=ce(),l=n.defaultQueryOptions(s);l._optimisticResults=o?"isRestoring":"optimistic",pe(l),he(l,a),ue(a);const[u]=x.useState(()=>new t(n,l)),C=u.getOptimisticResult(l);if(x.useSyncExternalStore(x.useCallback(D=>{const w=o?()=>{}:u.subscribe($t.batchCalls(D));return u.updateResult(),w},[u,o]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),x.useEffect(()=>{u.setOptions(l,{listeners:!1})},[l,u]),fe(l,C))throw me(l,u,a);if(_e({result:C,errorResetBoundary:a,throwOnError:l.throwOnError,query:n.getQueryCache().get(l.queryHash)}))throw C.error;return l.notifyOnChangeProps?C:u.trackResult(C)}function ve(s,t){return ge(s,ie)}const ye=()=>te.get("api/v1/projects"),be=400,Lt=be+50,Ft=450,xe=3e3;var Ce=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,d=(s,t,e,n)=>{for(var o=n>1?void 0:n?Ie(t,e):t,a=s.length-1,l;a>=0;a--)(l=s[a])&&(o=(n?l(t,e,o):l(o))||o);return n&&o&&Ce(t,e,o),o};class c{constructor(){v(this,"intervalId");v(this,"slides",[]);v(this,"index",0);v(this,"isAnimatingLeft",!1);v(this,"isAnimatingRight",!1);v(this,"isCaptionShowing",!1);v(this,"isCaptionHiding",!1);v(this,"isCaptionHidden",!1);v(this,"isPlaying",!1);v(this,"hideCaptions",()=>{this.setIsCaptionHiding(!0),setTimeout(()=>{this.setIsCaptionHidden(!0),this.setIsCaptionHiding(!1)},Ft)});v(this,"setSlides",(t=[])=>{this.slides=t});v(this,"showCaptions",()=>{this.setIsCaptionShowing(!0),this.setIsCaptionHidden(!1),setTimeout(this.setIsCaptionShowing,Ft,!1)});v(this,"toggleCaptions",()=>this.isCaptionHidden?this.showCaptions():this.hideCaptions());v(this,"pause",()=>{window.clearInterval(this.intervalId),this.setIsPlaying(!1)});v(this,"play",()=>{this.intervalId=window.setInterval(this.goToNext,xe),this.setIsPlaying(!0)});Zt(this)}get numOfSlides(){var t,e;return(e=(t=this.slides)==null?void 0:t.length)!=null?e:0}get isAtEnd(){return this.index===this.numOfSlides-1}get isAtStart(){return this.index===0}get nextIndex(){return this.isAtEnd?0:this.index+1}get prevIndex(){return this.isAtStart?this.numOfSlides-1:this.index-1}setIndex(t){this.index=t}goToPrevious(){this.isAnimatingLeft||(this.setIsAnimatingLeft(!0),setTimeout(()=>{this.setIsAnimatingLeft(!1),this.setIndex(this.prevIndex)},Lt))}goToNext(){this.isAnimatingRight||(this.setIsAnimatingRight(!0),setTimeout(()=>{this.setIsAnimatingRight(!1),this.setIndex(this.nextIndex)},Lt))}goTo(t){this.index=t}setIsAnimatingRight(t){this.isAnimatingRight=t}setIsAnimatingLeft(t){this.isAnimatingLeft=t}setIsCaptionHiding(t){this.isCaptionHiding=t}setIsCaptionHidden(t){this.isCaptionHidden=t}setIsCaptionShowing(t){this.isCaptionShowing=t}setIsPlaying(t){this.isPlaying=t}async init(t){this.setSlides(t),this.play()}destroy(){this.pause()}}d([O],c.prototype,"slides",2);d([O],c.prototype,"index",2);d([O],c.prototype,"isAnimatingLeft",2);d([O],c.prototype,"isAnimatingRight",2);d([O],c.prototype,"isCaptionShowing",2);d([O],c.prototype,"isCaptionHiding",2);d([O],c.prototype,"isCaptionHidden",2);d([O],c.prototype,"isPlaying",2);d([et],c.prototype,"numOfSlides",1);d([et],c.prototype,"isAtEnd",1);d([et],c.prototype,"isAtStart",1);d([et],c.prototype,"nextIndex",1);d([et],c.prototype,"prevIndex",1);d([g.bound],c.prototype,"setIndex",1);d([g.bound],c.prototype,"goToPrevious",1);d([g.bound],c.prototype,"goToNext",1);d([g.bound],c.prototype,"goTo",1);d([g.bound],c.prototype,"setIsAnimatingRight",1);d([g.bound],c.prototype,"setIsAnimatingLeft",1);d([g.bound],c.prototype,"setIsCaptionHiding",1);d([g.bound],c.prototype,"setIsCaptionHidden",1);d([g.bound],c.prototype,"setIsCaptionShowing",1);d([g.bound],c.prototype,"setIsPlaying",1);d([g.bound],c.prototype,"hideCaptions",2);d([g.bound],c.prototype,"setSlides",2);d([g.bound],c.prototype,"showCaptions",2);d([g.bound],c.prototype,"pause",2);d([g.bound],c.prototype,"play",2);d([g.bound],c.prototype,"init",1);d([g.bound],c.prototype,"destroy",1);const Bt=x.createContext({}),B=()=>x.useContext(Bt),Re="_slider__container_gw1vo_1",Ht={slider__container:Re},Se=({children:s})=>{const{isCaptionHidden:t,play:e,pause:n}=B();return r.jsx("div",{className:H({[Ht.slider__container]:!0,[Ht["slider__container--captions-hidden"]]:t}),onMouseOver:()=>n(),onMouseLeave:()=>e(),children:s})},we=N(Se),je="_hideCaptions_vze4x_1",Oe="_showCaptions_vze4x_1",z={"slider__caption-display":"_slider__caption-display_vze4x_1","slider__caption-display--is-hiding":"_slider__caption-display--is-hiding_vze4x_28",hideCaptions:je,"slider__caption-display--is-showing":"_slider__caption-display--is-showing_vze4x_32",showCaptions:Oe,"slider__caption-display--is-hidden":"_slider__caption-display--is-hidden_vze4x_36"},Ne=({children:s})=>{const{isCaptionHiding:t,isCaptionHidden:e,isCaptionShowing:n,slides:o}=B();return o!=null&&o.length?r.jsxs("div",{className:H({[z["slider__caption-display"]]:!0,[z["slider__caption-display--is-hidden"]]:e,[z["slider__caption-display--is-hiding"]]:t,[z["slider__caption-display--is-showing"]]:n}),children:[s,r.jsx("div",{className:z["caption-display__links"]})]}):null},Ae=N(Ne),Ee="_slider__slide_xxhkn_1",Pe={slider__slide:Ee},ht=({name:s,alt:t})=>r.jsx("img",{className:Pe.slider__slide,src:"images/".concat(s),alt:t,title:t}),Te="_slider__viewport_1ghsm_1",Le="_slider__viewport__slides_1ghsm_14",st={slider__viewport:Te,slider__viewport__slides:Le,"slider__viewport__slides--is-animating-right":"_slider__viewport__slides--is-animating-right_1ghsm_21","slide-right":"_slide-right_1ghsm_1","slider__viewport__slides--is-animating-left":"_slider__viewport__slides--is-animating-left_1ghsm_28","slide-left":"_slide-left_1ghsm_1"},Fe=()=>{var l,u,C;const{isAnimatingRight:s,isAnimatingLeft:t,prevIndex:e,index:n,nextIndex:o,slides:a}=B();return a!=null&&a.length?r.jsx("div",{className:st.slider__viewport,children:r.jsxs("div",{className:H({[st.slider__viewport__slides]:!0,[st["slider__viewport__slides--is-animating-left"]]:t,[st["slider__viewport__slides--is-animating-right"]]:s}),children:[r.jsx(ht,{...(l=a[e])==null?void 0:l.image}),r.jsx(ht,{...(u=a[n])==null?void 0:u.image}),r.jsx(ht,{...(C=a[o])==null?void 0:C.image})]})}):null},He=N(Fe),De="_caption__subtitle_ypv2b_32",Qe="_fadeCaptionInOut_ypv2b_1",Q={"caption-display__caption":"_caption-display__caption_ypv2b_1",caption__subtitle:De,"caption__client-name":"_caption__client-name_ypv2b_39","caption--is-updating":"_caption--is-updating_ypv2b_43",fadeCaptionInOut:Qe},Ue=()=>{const{isAnimatingRight:s,isAnimatingLeft:t,slides:e,index:n}=B(),o=e==null?void 0:e[n];return o?r.jsxs("div",{className:H({[Q["caption-display__caption"]]:!0,[Q["caption--is-updating"]]:s||t}),children:[r.jsx("h5",{className:Q.caption__subtitle,children:"Client"}),r.jsx("p",{className:Q["caption__client-name"],children:o.client}),r.jsx("h5",{className:Q.caption__subtitle,children:"Project"}),r.jsxs("p",{children:[o.projectName," (",o.year,")"]}),r.jsx("h5",{className:Q.caption__subtitle,children:"Skills"}),r.jsx("p",{children:o.skills})]}):null},$e=N(Ue),Me="_menuItem_1yocg_1",ke="_menuItem__thumbnail_1yocg_35",it={menuItem:Me,"menuItem--selected":"_menuItem--selected_1yocg_19",menuItem__thumbnail:ke},Be=({isActive:s,onMenuClick:t,image:e,client:n})=>{const[o,a]=x.useState(!1),{alt:l,name:u}=e;return r.jsxs("div",{className:H({[it.menuItem]:!0,[it["menuItem--selected"]]:s}),children:[r.jsx("button",{type:"button",onClick:t,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:l}),o===!0?r.jsxs("div",{className:it.menuItem__thumbnail,children:[r.jsx("h5",{children:n}),r.jsx("img",{className:it.menuItem__img,src:"images/".concat(u),alt:l,title:l,height:100})]}):""]})},ze="_slider__menu_tfl3t_1",Dt={slider__menu:ze,"slider__menu--play-state":"_slider__menu--play-state_tfl3t_17"},We=()=>{const{slides:s,isPlaying:t,index:e,goTo:n}=B();return r.jsxs("div",{className:Dt.slider__menu,children:[s==null?void 0:s.map((o,a)=>r.jsx(Be,{isActive:e===a,onMenuClick:()=>n(a),image:s[a].image,client:s[a].client},"mi-".concat(o.id))),r.jsx("div",{className:Dt["slider__menu--play-state"],children:t?"Playing":"Paused"})]})},Ve=N(We),qe="_slider__controls_rzqpu_1",Ke={slider__controls:qe},Ge=()=>r.jsx("div",{className:Ke.slider__controls,children:r.jsx(Ve,{})}),Je=N(Ge),Xe="_slider__nav_51omv_1",Ye="_slider__nav__btn_51omv_18",E={slider__nav:Xe,slider__nav__btn:Ye,"slider__nav__btn--prev":"_slider__nav__btn--prev_51omv_31","slider__nav__btn--next":"_slider__nav__btn--next_51omv_39","slider__nav__btn-icon":"_slider__nav__btn-icon_51omv_47"},Ze=()=>{const{goToPrevious:s,goToNext:t}=B();return r.jsxs("nav",{className:E.slider__nav,children:[r.jsx("button",{type:"button",className:H({[E.slider__nav__btn]:!0,[E["slider__nav__btn--prev"]]:!0}),onClick:s,children:"Previous"}),r.jsx("span",{className:E["slider__nav__btn-icon"],onClick:s,children:r.jsx(Et,{iconName:"IoChevronBack"})}),r.jsx("button",{type:"button",className:H({[E.slider__nav__btn]:!0,[E["slider__nav__btn--next"]]:!0}),onClick:t,children:"Next"}),r.jsx("span",{className:E["slider__nav__btn-icon"],onClick:t,children:r.jsx(Et,{iconName:"IoChevronForward"})})," "]})},ts=N(Ze),es="_slider_1be3t_1",ss="_btn_1be3t_15",is="_loader_1be3t_20",Qt={slider:es,btn:ss,loader:is};function ns(){var o;const[s]=x.useState(()=>new c),{data:t,isLoading:e}=ve({queryKey:["projects"],queryFn:ye}),n=(o=t==null?void 0:t.data)==null?void 0:o.projects;return x.useEffect(()=>{if(n)return s.init(n),()=>s.destroy()},[s,n==null?void 0:n.length]),e?r.jsx(ee,{className:Qt.loader}):r.jsx(Bt.Provider,{value:s,children:r.jsx(se,{children:r.jsxs("div",{className:Qt.slider,children:[r.jsxs(we,{children:[r.jsx(He,{}),r.jsx(ts,{}),r.jsx(Je,{})]}),r.jsx(Ae,{children:r.jsx($e,{})})]})})})}const rs=N(ns),os="_page_1h3wc_1",as={page:os};function gs(){return r.jsxs(dt,{className:as.page,children:[r.jsx(dt.Header,{title:"Work",tagline:"Featuring my Custom-Built Responsive React Carousel"}),r.jsx(dt.Content,{children:r.jsx(rs,{})})]})}export{gs as default};
