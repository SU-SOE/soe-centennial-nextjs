"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{6208:(e,t,r)=>{r.d(t,{W2:()=>i});var s=r(7437),a=r(7697),l=r(3746);let n={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},m={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},i=e=>{let{as:t="div",width:r="site",py:i,pt:o,pb:c,mt:d,mb:u,my:p,bgColor:x,style:g,className:f,children:h,...b}=e;return(0,s.jsx)(t,{...b,style:g,className:(0,a.c)(x?m[x]:"",i?l.EN[i]:"",o?l.DK[o]:"",c?l.Vr[c]:"",p?l.bm[p]:"",d?l.Ys[d]:"",u?l.a1[u]:"",r?n[r]:"",f),children:h})}},6486:(e,t,r)=>{r.d(t,{hs:()=>c});var s=r(7437);r(2265);var a=r(7697);let l={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},n={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},m={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},i={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},o={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},c=e=>{let{as:t="div",direction:r,gap:c,wrap:d,justifyContent:u,alignContent:p,alignItems:x,children:g,className:f,...h}=e;return(0,s.jsx)(t,{...h,className:(0,a.c)("flex",r?l[r]:"",d?n[d]:"",u?m[u]:"",p?i[p]:"",x?o[x]:"",c?"grid-gap":"",f),children:g})}},5218:(e,t,r)=>{r.d(t,{Skiplink:()=>n});var s=r(7437),a=r(2265),l=r(7697);let n=e=>{let{href:t="#main-content",children:r="Skip to main content",className:n,...m}=e,i=(0,a.useRef)(null);return(0,s.jsx)("a",{...m,ref:i,href:t,onFocus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,l.c)("skiplink",n),children:r})}},1809:(e,t,r)=>{r.d(t,{f:()=>m});var s=r(7437),a=r(6648),l=r(7697),n=r(1252);let m=e=>{let{src:t,alt:r="",size:m="medium",trapezoidAngle:i="left",className:o}=e,c=n.d[m],d=n.h[i];return(0,s.jsx)("div",{className:(0,l.c)("group relative flex justify-center stretch-link",o),children:(0,s.jsx)("div",{className:(0,l.c)("aspect-[1/1] relative w-full perspective-1000 transform ease-in-out duration-1000",d,c),children:(0,s.jsx)(a.default,{alt:r,src:t,sizes:"100vw",fill:!0,className:"object-cover overflow-hidden rounded-[20px] shadow-lg transform ease-in-out duration-1000"})})})}},1252:(e,t,r)=>{r.d(t,{d:()=>s,h:()=>a});let s={small:"w-200 md:w-250",medium:"w-250 md:w-[340px]",large:"w-250 md:w-[340px] lg:w-[420px]",xlarge:"w-250 md:w-[420px] lg:w-600",full:"w-full"},a={left:"rotate-y-[15deg] hocus:rotate-y-[-15deg]",right:"rotate-y-[-15deg] hocus:rotate-y-[15deg]"}},7345:(e,t,r)=>{r.d(t,{j:()=>i});var s=r(7437),a=r(7697),l=r(1252),n=r(8588),m=r(1809);let i=(0,r(2265).forwardRef)((e,t)=>{let{heading:r,year:i,image:o,size:c="medium",trapezoid:d="left",className:u,onClick:p,...x}=e,g=l.d[c];return(0,s.jsxs)("button",{...x,ref:t,type:"button",className:(0,a.c)("flex flex-col",u,g),onClick:p,role:"button",tabIndex:0,children:[(0,s.jsx)(m.f,{src:o,alt:r,size:c,trapezoidAngle:d}),(0,s.jsxs)("div",{className:"flex flex-col items-start",children:[(0,s.jsx)(n.X6,{align:"left",font:"dm-sans",size:"base",weight:"normal",className:"mt-18",children:r}),(0,s.jsx)(n.xv,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"order-first mt-28",children:i})]})]})});i.displayName="TimelineItem"},8785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var s=r(7437),a=r(2265),l=r(6208),n=r(7345),m=r(8588),i=r(6486),o=r(7697),c=r(9519),d=r(1809);let u=e=>{let{heading:t,year:r,href:a,body:n,cta:u,image:p,bgColor:x="fog-light",align:g="left",isSelected:f,onClose:h,...b}=e;return(0,s.jsx)(l.W2,{...b,as:"section",bgColor:x,width:"site",py:5,className:"overflow-hidden",children:(0,s.jsxs)(i.hs,{alignItems:"start",justifyContent:"between",gap:!0,className:"mr-0 au-ml-auto flex-col lg:flex-row",children:[(0,s.jsxs)(l.W2,{className:(0,o.c)("lg:rs-pr-9 ml-0 flex flex-col *:font-dm-sans"),children:[t&&(0,s.jsx)(m.X6,{leading:"none",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t}),r&&(0,s.jsx)(m.xv,{font:"serif",variant:"overview",weight:"normal",className:"order-first mb-38",children:r}),n&&(0,s.jsx)(m.xv,{font:"serif",variant:"overview",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:n}),u]}),p&&(0,s.jsx)("div",{className:(0,o.c)("aspect-[1/1] group relative w-500 h-500 perspective-600",{"order-first":"left"===g}),children:(0,s.jsx)(d.f,{src:p})}),(0,s.jsxs)("button",{className:"group",onClick:h,children:[(0,s.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,s.jsx)(c.Z,{width:50,className:"text-black group-hocus:text-digital-red"})]})]})})};var p=r(4446),x=r(1980),g=r(750),f=r(8930);let h=e=>{let{timelineData:t}=e,[r,m]=(0,a.useState)(!1),[i,o]=(0,a.useState)(null);(0,a.useEffect)(()=>{m(!0)},[]);let c=(0,g.ac)("(min-width: 1024px)"),d=(0,g.ac)("(min-width: 768px)"),h=c?3:d?2:1,b=t.reduce((e,t,r)=>{let s=Math.floor(r/h);return e[s]||(e[s]=[]),e[s].push(t),e},[]),w=e=>{o(t=>t===e?null:e)};return r?(0,s.jsx)(l.W2,{width:"site",pb:5,bgColor:"fog-light",className:"mb-50",children:(0,s.jsx)("div",{className:"grid gap-[76px]",children:b.map((e,r)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{role:"tablist",className:"flex flex-col md:flex-row md:justify-between",children:e.map((e,t)=>{let r=["large","medium","small"],s=r[t%r.length];return(0,a.createElement)(n.j,{...e,id:"tab-".concat(e.uuid),role:"tab","aria-selected":i===e.uuid,"aria-controls":"tabpanel-".concat(e.uuid),key:e.uuid,size:s,trapezoid:t%2==0?"left":"right",onClick:()=>w(e.uuid),className:t%2==0?"":"rs-pt-7"})})}),(0,s.jsx)(p.M,{children:i&&e.some(e=>e.uuid===i)&&(0,s.jsx)(x.E.div,{id:"tabpanel-".concat(i),role:"tabpanel","aria-labelledby":"tab-".concat(i),className:"w-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},children:(0,s.jsx)(u,{...t.find(e=>e.uuid===i),onClose:()=>o(null)})})})]},"row-".concat(r)))})}):(0,s.jsx)(f.Z,{})}},8588:(e,t,r)=>{r.d(t,{X6:()=>Y,xv:()=>R});var s=r(7437),a=r(7697),l=r(9808),n=r(3),m=r(6514),i=r(9160),o=r(3050),c=r(7470),d=r(8906),u=r(5014),p=r(6218),x=r(7361),g=r(4573),f=r(2009),h=r(8086),b=r(4728),w=r(4954),y=r(9489),v=r(4589),k=r(1226),j=r(8583),N=r(5054),Z=r(8357),_=r(8624),z=r(5135);let C={action:l.Z,"arrow-right":n.Z,"arrow-left":m.Z,"arrow-up":i.Z,"arrow-down":o.Z,back:m.Z,copy:c.Z,check:_.Z,"chevron-down":d.Z,"chevron-right":l.Z,"chevron-up":u.Z,download:p.Z,"triangle-down":z.Z,"triangle-right":z.Z,"triangle-up":z.Z,cursor:x.Z,close:g.Z,email:f.Z,external:h.Z,flip:b.Z,left:m.Z,link:w.Z,location:y.Z,menu:v.Z,minus:k.Z,more:n.Z,pause:j.Z,play:z.Z,"play-outline":N.Z,plus:Z.Z,right:n.Z,up:i.Z},E={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},q=e=>{let{icon:t,title:r,noBaseStyle:l,className:n,...m}=e,i=C[t],o=l?"":E[t]||"w-1em",c=(0,a.c)("transition",o);return(0,s.jsx)(i,{title:r,"aria-hidden":!r,className:(0,a.c)(c,n),...m})},S={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans tracking-tight","dm-mono":"font-dm-mono tracking-[0.3em]"},I={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},W={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"cen-quote-lg","quote-md":"cen-quote-md","quote-sm":"cen-quote-sm"},V={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},X={left:"text-left",center:"text-center",right:"text-right"},D={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},K={none:"",subheading:"subheading",big:"cen-big-paragraph",caption:"cen-caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var M=r(3746);let R=e=>{let{as:t="p",font:r="dm-sans",size:l,weight:n,align:m,color:i="default",variant:o,leading:c,mb:d,useDefaultTracking:u="dm-sans"===r,italic:p,srOnly:x,uppercase:g,icon:f,iconProps:h,className:b,children:w,...y}=e,{className:v,...k}=h||{};return(0,s.jsxs)(t,{...y,className:(0,a.c)(r?S[r]:"",l?W[l]:"",n?I[n]:"",m?X[m]:"",i?D[i]:"",o?K[o]:"",c?V[c]:"",d?M.a1[d]:M.a1[2],p?"italic":"",x?"sr-only":"",g?"uppercase":"",u?"tracking-normal":"",b),children:[w,f&&(0,s.jsx)(q,{icon:f,noBaseStyle:!0,className:(0,a.c)("inline-block shrink-0 w-09em ml-03em -mt-01em",v),...k})]})},Y=e=>{let{as:t="h2",weight:r="medium",className:l,isInvertLinkStyle:n=!1,...m}=e;return(0,s.jsx)(R,{...m,weight:r,as:t,className:(0,a.c)(n?"[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-digital-red-light [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4":"[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4",l)})}},3746:(e,t,r)=>{r.d(t,{DK:()=>s,EN:()=>l,Vr:()=>a,Ys:()=>m,a1:()=>i,bm:()=>n});let s={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},a={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},l={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},n={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},m={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},i={none:"mb-0","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);