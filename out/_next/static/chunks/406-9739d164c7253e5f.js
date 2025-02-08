"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{18111:(e,t,r)=>{r.r(t),r.d(t,{AnimateInView:()=>o});var i=r(95155),a=r(12115),s=r(11392),l=r(85423),n=r(74481),d=r(57182);let o=e=>{let{animation:t="zoomIn",once:r=!0,duration:o=.6,delay:m,children:c,className:u,...p}=e,h=(0,a.useRef)(null),x=(0,s.I)(),f=(0,l.W)(h,{once:r});return"none"===t?(0,i.jsx)("div",{children:c}):(0,i.jsx)(n.P.div,{ref:h,variants:d.v[t],transition:{delay:m,duration:o,ease:"easeOut"},initial:"hidden",animate:f?"visible":x?"hiddenReduced":"hidden",className:u,...p,children:c})}},57182:(e,t,r)=>{r.d(t,{v:()=>i});let i={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}},rotateInLeft:{hidden:{opacity:0,rotateY:0},hiddenReduced:{opacity:0,rotateY:0},visible:{opacity:1,rotateY:15}},rotateInRight:{hidden:{opacity:0,rotateY:0},hiddenReduced:{opacity:0,rotateY:0},visible:{opacity:1,rotateY:-15}}}},30965:(e,t,r)=>{r.r(t),r.d(t,{Parallax:()=>m});var i=r(95155),a=r(12115),s=r(11392),l=r(4251),n=r(25101),d=r(35910),o=r(74481);let m=e=>{let{children:t,offset:r=60}=e,m=(0,s.I)(),c=(0,a.useRef)(null),{scrollYProgress:u}=(0,l.L)({target:c,offset:["start end","end start"]}),p=(0,n.G)(u,[0,1],[r,-r]),h=(0,d.z)(p,{stiffness:200,damping:30});return(0,i.jsx)(o.P.div,{ref:c,style:{y:m?0:h},children:t})}},47502:(e,t,r)=>{r.d(t,{ex:()=>i.AnimateInView});var i=r(18111);r(57182),r(30965)},87913:(e,t,r)=>{r.d(t,{mc:()=>d});var i=r(95155),a=r(80024),s=r(70493);let l={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},n={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-x-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},d=e=>{let{as:t="div",width:r="site",py:d,pt:o,pb:m,mt:c,mb:u,my:p,bgColor:h,style:x,className:f,children:y,...b}=e;return(0,i.jsx)(t,{...b,style:x,className:(0,a._)(h?n[h]:"",d?s.jf[d]:"",o?s.EU[o]:"",m?s.yj[m]:"",p?s.Gf[p]:"",c?s.h7[c]:"",u?s.XD[u]:"",r?l[r]:"",f),children:y})}},50129:(e,t,r)=>{r.d(t,{pT:()=>m});var i=r(95155);r(12115);var a=r(80024);let s={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},l={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},n={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},d={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},o={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},m=e=>{let{as:t="div",direction:r,gap:m,wrap:c,justifyContent:u,alignContent:p,alignItems:h,children:x,className:f,...y}=e;return(0,i.jsx)(t,{...y,className:(0,a._)("flex",r?s[r]:"",c?l[c]:"",u?n[u]:"",p?d[p]:"",h?o[h]:"",m?"grid-gap":"",f),children:x})}},59421:(e,t,r)=>{r.d(t,{Skiplink:()=>l});var i=r(95155),a=r(12115),s=r(80024);let l=e=>{let{href:t="#main-content",children:r="Skip to main content",className:l,...n}=e,d=(0,a.useRef)(null);return(0,i.jsx)("a",{...n,ref:d,href:t,onFocus:()=>{var e;return null===(e=d.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,s._)("skiplink",l),children:r})}},54447:(e,t,r)=>{r.d(t,{Ej:()=>a,xx:()=>s});var i=r(80024);let a={small:"w-200 md:w-250",medium:"w-250 md:w-300 xl:w-[340px]",large:"w-250 md:w-300 lg:w-[340px] xl:w-[420px]",xlarge:"w-250 md:w-240 lg:w-[340px] xl:w-[420px] 2xl:w-600",full:"w-full"},s=(e,t)=>(0,i._)({"rotate-y-[15deg]":"left"===e,"rotate-y-[-15deg]":"right"===e,"rotate-y-0 perspective-0":t})},85466:(e,t,r)=>{r.r(t),r.d(t,{default:()=>et});var i=r(95155),a=r(12115),s=r(87913),l=r(80024),n=r(54447),d=r(22471),o=r(86485),m=r(81386),c=r(53262),u=r(84663),p=r(68144),h=r(76441),x=r(32356),f=r(59335),y=r(83048),b=r(36743),g=r(5240),w=r(53518),v=r(38552),j=r(99040),k=r(773),A=r(30405),N=r(25066),z=r(6596),R=r(51030),_=r(49904),I=r(57578),E=r(32825);let C={action:d.A,"arrow-right":o.A,"arrow-left":m.A,"arrow-up":c.A,"arrow-down":u.A,back:m.A,copy:p.A,check:I.A,"chevron-down":h.A,"chevron-right":d.A,"chevron-up":x.A,download:f.A,"triangle-down":E.A,"triangle-right":E.A,"triangle-up":E.A,cursor:y.A,close:b.A,email:g.A,external:w.A,flip:v.A,left:m.A,link:j.A,location:k.A,menu:A.A,minus:N.A,more:o.A,pause:z.A,play:E.A,"play-outline":R.A,plus:_.A,right:o.A,up:c.A},F={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},U=e=>{let{icon:t,title:r,noBaseStyle:a,className:s,...n}=e,d=C[t],o=a?"":F[t]||"w-1em",m=(0,l._)("transition",o);return(0,i.jsx)(d,{title:r,"aria-hidden":!r,className:(0,l._)(m,s),...n})},S={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans tracking-tight","dm-mono":"font-dm-mono tracking-[0.3rem]"},q={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},D={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f0:"fluid-type-0",f1:"fluid-type-1",f2:"fluid-type-2",f3:"fluid-type-3",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"cen-quote-lg","quote-md":"cen-quote-md","quote-sm":"cen-quote-sm",small:"text-17 md:text-18"},T={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},Y={left:"text-left",center:"text-center",right:"text-right"},L={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},P={none:"",subheading:"subheading",big:"cen-big-paragraph",caption:"cen-caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var V=r(70493);let X=e=>{let{as:t="p",font:r="dm-sans",size:a,weight:s,align:n,color:d="default",variant:o,leading:m,mb:c,useDefaultTracking:u="dm-sans"===r,italic:p,srOnly:h,uppercase:x,icon:f,iconProps:y,className:b,children:g,footnoteRefs:w,...v}=e,{className:j,...k}=y||{};return(0,i.jsxs)(t,{...v,className:(0,l._)(r?S[r]:"",a?D[a]:"",s?q[s]:"",n?Y[n]:"",d?L[d]:"",o?P[o]:"",m?T[m]:"",c?V.XD[c]:V.XD[2],p?"italic":"",h?"sr-only":"",x?"uppercase":"",u?"tracking-normal":"",b),children:[g,f&&(0,i.jsx)(U,{icon:f,noBaseStyle:!0,className:(0,l._)("inline-block shrink-0 w-09em ml-03em -mt-01em",j),...k}),w&&w.map(e=>{let{id:t,number:r}=e;return(0,i.jsx)("sup",{className:"top-0 ml-03em",children:(0,i.jsxs)("a",{href:"#".concat(t),id:"ref-".concat(t),rel:"footnote","aria-label":"To footnote ".concat(r),title:"To footnote ".concat(r),className:"font-normal text-stone-dark hocus:text-digital-red-xlight",children:["(",r,")"]})},t)})]})},G=e=>{let{as:t="h2",weight:r="medium",className:a,...s}=e;return(0,i.jsx)(X,{...s,weight:r,as:t,className:a})};var H=r(5565),B=r(96259);let M=e=>{let{src:t,alt:r="",size:a="medium",trapezoidAngle:s="left",className:d,isExpanded:o=!1}=e,m=n.Ej[a],c=n.xx(s,o);return(0,i.jsx)("div",{className:(0,l._)("flex justify-center z-50 mx-10",d),children:(0,i.jsxs)("div",{className:(0,l._)("aspect-[1/1] relative h-full transform ease-in-out perspective-1000 flex items-center justify-center",c,m),children:[o&&(0,i.jsx)(B.A,{width:60,className:"absolute bg-stone-dark text-white rounded-full z-50 border-2 border-fog-dark"}),(0,i.jsx)(H.default,{alt:r,src:t,fill:!0,className:(0,l._)("z-0 object-cover rounded-[20px] shadow-lg transform ease-in-out perspective-1000 duration-[1500ms] group-hocus-within:perspective-0 group-hocus-within:rotate-y-0 hocus:perspective-0 hocus:rotate-y-0",{"contrast-50 brightness-100 perspective-0 rotate-y-0 outline-stone":o})})]})})};var O=r(24929);let W=(0,a.forwardRef)((e,t)=>{let{heading:r,year:a,image:s,size:d="medium",trapezoid:o="left",className:m,onClick:c,isExpanded:u,isHorizontal:p,...h}=e,x=n.Ej[d];return(0,i.jsxs)("button",{...h,ref:t,type:"button",className:(0,l._)("group flex flex-col relative",{"md:flex-row gap w-full justify-center items-center":p},!p&&x,m),onClick:c,tabIndex:0,children:[(0,i.jsx)(M,{src:s,alt:"",size:d,trapezoidAngle:o,isExpanded:u}),(0,i.jsxs)("div",{className:(0,l._)("flex flex-col items-start md:rs-px-1",{"w-full":p}),children:[(0,i.jsxs)(G,{align:"left",font:"dm-sans",size:p?3:"base",weight:"normal",leading:"normal",className:"stretched-link transition-all ease-in-out duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light group-hocus:decoration-stone-dark cursor-pointer decoration-[2.5px]",children:[r,!p&&(0,i.jsxs)("span",{className:"whitespace-nowrap",children:["\uFEFF",(0,i.jsx)(O.A,{width:21,className:"transition-all ease-in-out duration-1000 ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"})]})]}),(0,i.jsx)(X,{font:"dm-mono",weight:"normal",leading:"display",mb:"none",size:2,className:"order-first rs-mt-2 mb-10",align:"left",children:a})]})]})});W.displayName="TimelineItem";var J=r(50129),K=r(47502);let Q=e=>{let{heading:t,year:r,href:a,body:n,image:d,align:o="left",isSelected:m,onClose:c,...u}=e;return(0,i.jsx)(s.mc,{...u,as:"section",width:"site",py:5,className:"overflow-hidden",children:(0,i.jsxs)(J.pT,{alignItems:"start",justifyContent:"between",gap:!0,className:"relative mr-0 au-ml-auto flex-col lg:flex-row items-center",children:[(0,i.jsxs)(s.mc,{className:"w-1/2 lg:rs-pr-9 ml-0 flex flex-col",children:[t&&(0,i.jsx)(K.ex,{delay:.8,animation:"slideInFromRight",children:(0,i.jsx)(G,{align:"left",font:"dm-sans",size:3,weight:"normal",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t})}),r&&(0,i.jsx)(K.ex,{delay:.5,animation:"slideDown",className:"order-first ",children:(0,i.jsx)(X,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"mt-28 mb-38",children:r})}),n&&(0,i.jsx)(K.ex,{delay:1,animation:"slideUp",children:(0,i.jsx)(X,{font:"dm-sans",variant:"big",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:n})})]}),(0,i.jsx)("div",{className:(0,l._)("aspect-[1/1] group relative w-1/2 h-full perspective-600",{"order-first":"left"===o}),children:(0,i.jsx)(K.ex,{duration:1,delay:.8,animation:"slideInFromLeft",children:(0,i.jsx)(M,{size:"full",src:d})})}),(0,i.jsxs)("button",{className:"absolute top-0 right-0 group",onClick:c,children:[(0,i.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,i.jsx)(B.A,{width:50,className:"transition p-6 rounded-full text-fog-dark border-fog-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"})]})]})})};var Z=r(74481),$=r(44009),ee=r(45788);let et=e=>{let{timelineData:t}=e,[r,n]=(0,a.useState)(!1),[d,o]=(0,a.useState)(null),[m,c]=(0,a.useState)(""),u=(0,a.useRef)({}),p=(0,a.useRef)(null);(0,a.useEffect)(()=>{n(!0);let e=window.location.hash.replace("#","");e&&t.find(t=>{if(t.anchor===e)return o(t.uuid)})},[t]),(0,a.useEffect)(()=>{d&&p.current&&setTimeout(()=>{var e,t;null===(e=p.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"}),null===(t=p.current)||void 0===t||t.focus()},0)},[d]);let h=(0,$.Ub)("(min-width: 1024px)"),x=(0,$.Ub)("(min-width: 768px)"),f=h?3:x?2:1,y=t.reduce((e,t,r)=>{let i=Math.floor(r/f);return e[i]||(e[i]=[]),e[i].push(t),e},[]),b=(e,t)=>{o(t=>t===e?null:e),c(e=>e===t?"":t)};return r?(0,i.jsx)(s.mc,{as:"main",id:"main-content",width:"site",pb:5,children:(0,i.jsx)("div",{className:"grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]",children:y.map((e,r)=>{let a=(r+1)%3==0;return(0,i.jsxs)("div",{id:"".concat(r),className:(0,l._)("odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6",{"w-full":a}),children:[(0,i.jsxs)("div",{className:(0,l._)("flex flex-col items-center ",{"md:items-start md:flex-row md:justify-between":!a},{"flex-row justify-center w-full":a}),children:[a&&(0,i.jsx)(K.ex,{animation:"slideUp",delay:.5,children:(0,i.jsx)(W,{...e[0],id:e[0].uuid,"aria-expanded":d===e[0].uuid,"aria-controls":e[0].anchor,isExpanded:d===e[0].uuid,size:"xlarge",trapezoid:"left",isHorizontal:!0,onClick:()=>b(e[0].uuid,e[0].anchor),ref:t=>{u.current[e[0].uuid]=t}})},e[0].uuid),!a&&e.map((e,t)=>{let s=r%2==0?["large","medium","small"]:["small","large","medium"],l=s[t%s.length],n=r%2==0?[.5,1,.8]:[1,.3,.8],o=n[t%n.length];return(0,i.jsx)(K.ex,{animation:"slideUp",delay:o,children:(0,i.jsx)(W,{...e,id:e.uuid,"aria-expanded":d===e.uuid,"aria-controls":e.anchor,isExpanded:d===e.uuid,size:l,trapezoid:t%2==0?"left":"right",isHorizontal:a,onClick:()=>b(e.uuid,e.anchor),ref:t=>{u.current[e.uuid]=t}})},e.uuid)})]}),d&&e.some(e=>e.uuid===d)&&(0,i.jsx)(Z.P.div,{id:m,"aria-labelledby":d,className:"w-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},ref:p,tabIndex:-1,children:(0,i.jsx)(Q,{...t.find(e=>e.uuid===d),onClose:()=>{if(d){let e=u.current[d];e&&e.focus()}o(null)}})})]},"row-".concat(r))})})}):(0,i.jsx)(ee.A,{})}},70493:(e,t,r)=>{r.d(t,{EU:()=>i,Gf:()=>l,XD:()=>d,h7:()=>n,jf:()=>s,yj:()=>a});let i={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},a={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},s={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},l={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},n={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},d={none:"","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);