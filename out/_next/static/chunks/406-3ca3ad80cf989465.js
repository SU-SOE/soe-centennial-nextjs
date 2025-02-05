"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{8111:(e,t,r)=>{r.r(t),r.d(t,{AnimateInView:()=>d});var i=r(5155),s=r(2115),a=r(1392),l=r(5423),n=r(3812),o=r(7182);let d=e=>{let{animation:t="zoomIn",once:r=!0,duration:d=.6,delay:m,children:c,className:u,...p}=e,h=(0,s.useRef)(null),x=(0,a.I)(),f=(0,l.W)(h,{once:r});return"none"===t?(0,i.jsx)("div",{children:c}):(0,i.jsx)(n.P.div,{ref:h,variants:o.v[t],transition:{delay:m,duration:d,ease:"easeOut"},initial:"hidden",animate:f?"visible":x?"hiddenReduced":"hidden",className:u,...p,children:c})}},7182:(e,t,r)=>{r.d(t,{v:()=>i});let i={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}},rotateInLeft:{hidden:{opacity:0,rotateY:0},hiddenReduced:{opacity:0,rotateY:0},visible:{opacity:1,rotateY:15}},rotateInRight:{hidden:{opacity:0,rotateY:0},hiddenReduced:{opacity:0,rotateY:0},visible:{opacity:1,rotateY:-15}}}},965:(e,t,r)=>{r.r(t),r.d(t,{Parallax:()=>m});var i=r(5155),s=r(2115),a=r(1392),l=r(4251),n=r(5101),o=r(5910),d=r(3812);let m=e=>{let{children:t,offset:r=60}=e,m=(0,a.I)(),c=(0,s.useRef)(null),{scrollYProgress:u}=(0,l.L)({target:c,offset:["start end","end start"]}),p=(0,n.G)(u,[0,1],[r,-r]),h=(0,o.z)(p,{stiffness:200,damping:30});return(0,i.jsx)(d.P.div,{ref:c,style:{y:m?0:h},children:t})}},7502:(e,t,r)=>{r.d(t,{ex:()=>i.AnimateInView});var i=r(8111);r(7182),r(965)},7913:(e,t,r)=>{r.d(t,{mc:()=>o});var i=r(5155),s=r(24),a=r(493);let l={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},n={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-x-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},o=e=>{let{as:t="div",width:r="site",py:o,pt:d,pb:m,mt:c,mb:u,my:p,bgColor:h,style:x,className:f,children:y,...g}=e;return(0,i.jsx)(t,{...g,style:x,className:(0,s._)(h?n[h]:"",o?a.jf[o]:"",d?a.EU[d]:"",m?a.yj[m]:"",p?a.Gf[p]:"",c?a.h7[c]:"",u?a.XD[u]:"",r?l[r]:"",f),children:y})}},129:(e,t,r)=>{r.d(t,{pT:()=>m});var i=r(5155);r(2115);var s=r(24);let a={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},l={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},n={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},o={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},d={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},m=e=>{let{as:t="div",direction:r,gap:m,wrap:c,justifyContent:u,alignContent:p,alignItems:h,children:x,className:f,...y}=e;return(0,i.jsx)(t,{...y,className:(0,s._)("flex",r?a[r]:"",c?l[c]:"",u?n[u]:"",p?o[p]:"",h?d[h]:"",m?"grid-gap":"",f),children:x})}},9421:(e,t,r)=>{r.d(t,{Skiplink:()=>l});var i=r(5155),s=r(2115),a=r(24);let l=e=>{let{href:t="#main-content",children:r="Skip to main content",className:l,...n}=e,o=(0,s.useRef)(null);return(0,i.jsx)("a",{...n,ref:o,href:t,onFocus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,a._)("skiplink",l),children:r})}},4447:(e,t,r)=>{r.d(t,{Ej:()=>s,xx:()=>a});var i=r(24);let s={small:"w-200 md:w-250",medium:"w-250 md:w-300 xl:w-[340px]",large:"w-250 md:w-300 lg:w-[340px] xl:w-[420px]",xlarge:"w-250 md:w-240 lg:w-[340px] xl:w-[420px] 2xl:w-600",full:"w-full"},a=(e,t)=>(0,i._)({"rotate-y-[15deg]":"left"===e,"rotate-y-[-15deg]":"right"===e,"rotate-y-0 perspective-0":t})},5466:(e,t,r)=>{r.r(t),r.d(t,{default:()=>et});var i=r(5155),s=r(2115),a=r(7913),l=r(24),n=r(4447),o=r(2471),d=r(6485),m=r(9005),c=r(3262),u=r(4663),p=r(8144),h=r(6441),x=r(2356),f=r(9335),y=r(3048),g=r(6743),b=r(5240),w=r(3518),v=r(8552),j=r(9040),k=r(773),A=r(405),N=r(5066),z=r(6596),R=r(1030),I=r(9904),_=r(7578),E=r(2825);let C={action:o.A,"arrow-right":d.A,"arrow-left":m.A,"arrow-up":c.A,"arrow-down":u.A,back:m.A,copy:p.A,check:_.A,"chevron-down":h.A,"chevron-right":o.A,"chevron-up":x.A,download:f.A,"triangle-down":E.A,"triangle-right":E.A,"triangle-up":E.A,cursor:y.A,close:g.A,email:b.A,external:w.A,flip:v.A,left:m.A,link:j.A,location:k.A,menu:A.A,minus:N.A,more:d.A,pause:z.A,play:E.A,"play-outline":R.A,plus:I.A,right:d.A,up:c.A},F={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},S=e=>{let{icon:t,title:r,noBaseStyle:s,className:a,...n}=e,o=C[t],d=s?"":F[t]||"w-1em",m=(0,l._)("transition",d);return(0,i.jsx)(o,{title:r,"aria-hidden":!r,className:(0,l._)(m,a),...n})},U={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans tracking-tight","dm-mono":"font-dm-mono tracking-[0.3rem]"},q={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},D={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f0:"fluid-type-0",f1:"fluid-type-1",f2:"fluid-type-2",f3:"fluid-type-3",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"cen-quote-lg","quote-md":"cen-quote-md","quote-sm":"cen-quote-sm",small:"text-17 md:text-18"},T={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},Y={left:"text-left",center:"text-center",right:"text-right"},L={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},P={none:"",subheading:"subheading",big:"cen-big-paragraph",caption:"cen-caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var V=r(493);let X=e=>{let{as:t="p",font:r="dm-sans",size:s,weight:a,align:n,color:o="default",variant:d,leading:m,mb:c,useDefaultTracking:u="dm-sans"===r,italic:p,srOnly:h,uppercase:x,icon:f,iconProps:y,className:g,children:b,footnoteRefs:w,...v}=e,{className:j,...k}=y||{};return(0,i.jsxs)(t,{...v,className:(0,l._)(r?U[r]:"",s?D[s]:"",a?q[a]:"",n?Y[n]:"",o?L[o]:"",d?P[d]:"",m?T[m]:"",c?V.XD[c]:V.XD[2],p?"italic":"",h?"sr-only":"",x?"uppercase":"",u?"tracking-normal":"",g),children:[b,f&&(0,i.jsx)(S,{icon:f,noBaseStyle:!0,className:(0,l._)("inline-block shrink-0 w-09em ml-03em -mt-01em",j),...k}),w&&w.map(e=>{let{id:t,number:r}=e;return(0,i.jsx)("sup",{className:"top-0 ml-03em",children:(0,i.jsxs)("a",{href:"#".concat(t),id:"ref-".concat(t),rel:"footnote","aria-label":"To footnote ".concat(r),title:"To footnote ".concat(r),className:"font-normal text-stone-dark hocus:text-digital-red-xlight",children:["(",r,")"]})},t)})]})},G=e=>{let{as:t="h2",weight:r="medium",className:s,...a}=e;return(0,i.jsx)(X,{...a,weight:r,as:t,className:s})};var B=r(5565),H=r(6259);let M=e=>{let{src:t,alt:r="",size:s="medium",trapezoidAngle:a="left",className:o,isExpanded:d=!1}=e,m=n.Ej[s],c=n.xx(a,d);return(0,i.jsx)("div",{className:(0,l._)("flex justify-center z-50 mx-10",o),children:(0,i.jsxs)("div",{className:(0,l._)("aspect-[1/1] relative h-full transform ease-in-out perspective-1000 flex items-center justify-center",c,m),children:[d&&(0,i.jsx)(H.A,{width:60,className:"absolute bg-stone-dark text-white rounded-full z-50 border-2 border-fog-dark"}),(0,i.jsx)(B.default,{alt:r,src:t,fill:!0,className:(0,l._)("z-0 object-cover rounded-[20px] shadow-lg transform ease-in-out perspective-1000 duration-[1500ms] group-hocus-within:perspective-0 group-hocus-within:rotate-y-0 hocus:perspective-0 hocus:rotate-y-0",{"contrast-50 brightness-100 perspective-0 rotate-y-0 outline-stone":d})})]})})};var O=r(4929);let W=(0,s.forwardRef)((e,t)=>{let{heading:r,year:s,image:a,size:o="medium",trapezoid:d="left",className:m,onClick:c,isExpanded:u,...p}=e,h=n.Ej[o];return(0,i.jsxs)("button",{...p,ref:t,type:"button",className:(0,l._)("group flex flex-col relative",m,h),onClick:c,tabIndex:0,children:[(0,i.jsx)(M,{src:a,alt:"",size:o,trapezoidAngle:d,isExpanded:u}),(0,i.jsxs)("div",{className:"flex flex-col items-start md:rs-px-1",children:[(0,i.jsxs)(G,{align:"left",font:"dm-sans",size:"base",weight:"normal",leading:"normal",className:"stretched-link transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light group-hocus:decoration-stone-dark cursor-pointer decoration-[2.5px]",children:[r,(0,i.jsxs)("span",{className:"whitespace-nowrap",children:["\uFEFF",(0,i.jsx)(O.A,{width:21,className:"transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"})]})]}),(0,i.jsx)(X,{font:"dm-mono",weight:"normal",leading:"display",mb:"none",size:2,className:"order-first rs-mt-2 mb-10",align:"left",children:s})]})]})});W.displayName="TimelineItem";var J=r(129),K=r(7502);let Q=e=>{let{heading:t,year:r,href:s,body:n,image:o,bgColor:d="fog-light",align:m="left",isSelected:c,onClose:u,...p}=e;return(0,i.jsx)(a.mc,{...p,as:"section",bgColor:d,width:"site",py:5,className:"overflow-hidden",children:(0,i.jsxs)(J.pT,{alignItems:"start",justifyContent:"between",gap:!0,className:"relative mr-0 au-ml-auto flex-col lg:flex-row items-center",children:[(0,i.jsxs)(a.mc,{className:"w-1/2 lg:rs-pr-9 ml-0 flex flex-col",children:[t&&(0,i.jsx)(K.ex,{delay:.8,animation:"slideInFromRight",children:(0,i.jsx)(G,{align:"left",font:"dm-sans",size:3,weight:"normal",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t})}),r&&(0,i.jsx)(K.ex,{delay:.5,animation:"slideDown",className:"order-first ",children:(0,i.jsx)(X,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"mt-28 mb-38",children:r})}),n&&(0,i.jsx)(K.ex,{delay:1,animation:"slideUp",children:(0,i.jsx)(X,{font:"dm-sans",variant:"big",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:n})})]}),(0,i.jsx)("div",{className:(0,l._)("aspect-[1/1] group relative w-1/2 h-full perspective-600",{"order-first":"left"===m}),children:(0,i.jsx)(K.ex,{duration:1,delay:.8,animation:"slideInFromLeft",children:(0,i.jsx)(M,{size:"full",src:o})})}),(0,i.jsxs)("button",{className:"absolute top-0 right-0 group",onClick:u,children:[(0,i.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,i.jsx)(H.A,{width:50,className:"transition p-6 rounded-full text-fog-dark border-fog-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"})]})]})})};var Z=r(3812),$=r(6390),ee=r(5788);let et=e=>{let{timelineData:t}=e,[r,l]=(0,s.useState)(!1),[n,o]=(0,s.useState)(null),[d,m]=(0,s.useState)(""),c=(0,s.useRef)({}),u=(0,s.useRef)(null);(0,s.useEffect)(()=>{l(!0);let e=window.location.hash.replace("#","");e&&t.find(t=>{if(t.anchor===e)return o(t.uuid)})},[t]),(0,s.useEffect)(()=>{n&&u.current&&setTimeout(()=>{var e,t;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"}),null===(t=u.current)||void 0===t||t.focus()},0)},[n]);let p=(0,$.Ub)("(min-width: 1024px)"),h=(0,$.Ub)("(min-width: 768px)"),x=p?3:h?2:1,f=t.reduce((e,t,r)=>{let i=Math.floor(r/x);return e[i]||(e[i]=[]),e[i].push(t),e},[]),y=(e,t)=>{o(t=>t===e?null:e),m(e=>e===t?"":t)};return r?(0,i.jsx)(a.mc,{as:"main",id:"main-content",width:"site",pb:5,bgColor:"fog-light",children:(0,i.jsx)("div",{className:"grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]",children:f.map((e,r)=>(0,i.jsxs)("div",{id:"".concat(r),className:"odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6",children:[(0,i.jsx)("div",{className:"flex flex-col items-center md:items-start md:flex-row md:justify-between",children:e.map((e,t)=>{let s=r%2==0?["large","medium","small"]:["small","large","medium"],a=s[t%s.length],l=r%2==0?[.5,1,.8]:[1,.3,.8],o=l[t%l.length];return(0,i.jsx)(K.ex,{animation:"slideUp",delay:o,children:(0,i.jsx)(W,{...e,id:e.uuid,"aria-expanded":n===e.uuid,"aria-controls":e.anchor,isExpanded:n===e.uuid,size:a,trapezoid:t%2==0?"left":"right",onClick:()=>y(e.uuid,e.anchor),ref:t=>{c.current[e.uuid]=t}})},e.uuid)})}),n&&e.some(e=>e.uuid===n)&&(0,i.jsx)(Z.P.div,{id:d,"aria-labelledby":n,className:"w-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},ref:u,tabIndex:-1,children:(0,i.jsx)(Q,{...t.find(e=>e.uuid===n),onClose:()=>{if(n){let e=c.current[n];e&&e.focus()}o(null)}})})]},"row-".concat(r)))})}):(0,i.jsx)(ee.A,{})}},493:(e,t,r)=>{r.d(t,{EU:()=>i,Gf:()=>l,XD:()=>o,h7:()=>n,jf:()=>a,yj:()=>s});let i={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},s={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},a={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},l={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},n={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},o={none:"","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);