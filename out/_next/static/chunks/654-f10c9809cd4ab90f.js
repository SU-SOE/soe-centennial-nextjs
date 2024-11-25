"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{6208:(e,t,r)=>{r.d(t,{W2:()=>i});var s=r(7437),l=r(7697),a=r(3746);let n={full:"w-full",site:"cc",screen:"w-screen"},m={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"soe-blue-xlight","fog-light":"bg-fog-light text-stone-dark","red-gradient":"bg-soe-red-gradient text-white"},i=e=>{let{as:t="div",width:r="site",py:i,pt:o,pb:c,mt:d,mb:p,my:u,bgColor:g,style:x,className:h,children:f,...b}=e;return(0,s.jsx)(t,{...b,style:x,className:(0,l.c)(g?m[g]:"",i?a.EN[i]:"",o?a.DK[o]:"",c?a.Vr[c]:"",u?a.bm[u]:"",d?a.Ys[d]:"",p?a.a1[p]:"",r?n[r]:"",h),children:f})}},6486:(e,t,r)=>{r.d(t,{hs:()=>c});var s=r(7437);r(2265);var l=r(7697);let a={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},n={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},m={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},i={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},o={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},c=e=>{let{as:t="div",direction:r,gap:c,wrap:d,justifyContent:p,alignContent:u,alignItems:g,children:x,className:h,...f}=e;return(0,s.jsx)(t,{...f,className:(0,l.c)("flex",r?a[r]:"",d?n[d]:"",p?m[p]:"",u?i[u]:"",g?o[g]:"",c?"grid-gap":"",h),children:x})}},5218:(e,t,r)=>{r.d(t,{Skiplink:()=>n});var s=r(7437),l=r(2265),a=r(7697);let n=e=>{let{href:t="#main-content",children:r="Skip to main content",className:n,...m}=e,i=(0,l.useRef)(null);return(0,s.jsx)("a",{...m,ref:i,href:t,onFocus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,a.c)("skiplink",n),children:r})}},8371:(e,t,r)=>{r.d(t,{f:()=>i});var s=r(7437),l=r(6648),a=r(7697);let n={small:"w-250 h-250",medium:"w-[340px] h-[340px]",large:"w-[420px] h-[420px]",xlarge:"w-600 h-600",full:"w-full h-full"},m={left:"rotate-y-[15deg] hocus:rotate-y-[-15deg]",right:"rotate-y-[-15deg] hocus:rotate-y-[15deg]"},i=e=>{let{src:t,alt:r="",size:i="medium",trapezoidAngle:o="left",className:c}=e,d=n[i],p=m[o];return(0,s.jsx)("div",{className:(0,a.c)("group relative flex justify-center",p),children:(0,s.jsx)("div",{className:(0,a.c)("aspect-[1/1] relative perspective-1000 transform ease-in-out duration-1000",d,c),children:(0,s.jsx)(l.default,{alt:r,src:t,fill:!0,className:"object-cover rounded-lg shadow-lg transform ease-in-out duration-1000"})})})}},7345:(e,t,r)=>{r.d(t,{j:()=>m});var s=r(7437),l=r(7697),a=r(8588),n=r(8371);let m=e=>{let{heading:t,year:r,image:m,size:i="medium",trapezoid:o="left",className:c,onClick:d,...p}=e;return(0,s.jsxs)("button",{...p,className:(0,l.c)("flex flex-col",c),onClick:d,role:"button",tabIndex:0,children:[(0,s.jsx)(n.f,{src:m,alt:t,size:i,trapezoidAngle:o}),(0,s.jsxs)("div",{className:"flex flex-col *:font-dm-sans",children:[(0,s.jsx)(a.X6,{className:"type-0",weight:"normal",children:t}),(0,s.jsx)(a.xv,{font:"serif",variant:"overview",weight:"normal",className:"order-first mt-28",children:r})]})]})}},8785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(7437),l=r(2265),a=r(6208),n=r(7345),m=r(8588),i=r(6486),o=r(7697),c=r(9519),d=r(8371);let p=e=>{let{heading:t,year:r,href:l,body:n,cta:p,image:u,bgColor:g="fog-light",align:x="left",isSelected:h,onClose:f,...b}=e;return(0,s.jsx)(a.W2,{...b,as:"section",bgColor:g,width:"site",py:9,className:"overflow-hidden",children:(0,s.jsxs)(i.hs,{alignItems:"start",justifyContent:"between",gap:!0,className:"mr-0 au-ml-auto flex-col lg:flex-row",children:[(0,s.jsxs)(a.W2,{className:(0,o.c)("lg:rs-pr-9 ml-0 flex flex-col *:font-dm-sans"),children:[t&&(0,s.jsx)(m.X6,{leading:"none",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t}),r&&(0,s.jsx)(m.xv,{font:"serif",variant:"overview",weight:"normal",className:"order-first mb-38",children:r}),n&&(0,s.jsx)(m.xv,{font:"serif",variant:"overview",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:n}),p]}),u&&(0,s.jsx)("div",{className:(0,o.c)("aspect-[1/1] group relative w-500 h-500 perspective-600",{"order-first":"left"===x}),children:(0,s.jsx)(d.f,{src:u})}),(0,s.jsxs)("button",{className:"group",onClick:f,children:[(0,s.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,s.jsx)(c.Z,{width:50,className:"text-black group-hocus:text-digital-red"})]})]})})};var u=r(4446),g=r(1980);let x=e=>{let{timelineData:t}=e,[r,m]=(0,l.useState)(null),i=["large","medium","small"],o=e=>{m(r===e?null:e)},c=[];for(let e=0;e<t.length;e+=3)c.push(t.slice(e,e+3));return(0,s.jsx)(a.W2,{width:"site",py:5,bgColor:"fog-light",className:"mb-50",children:(0,s.jsx)("div",{className:"grid gap-4",children:c.map((e,l)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:e.map((e,t)=>{let r=3*l+t,a=r%2==0?"right":"left",m=i[r%i.length];return(0,s.jsx)(n.j,{...e,size:m,trapezoid:a,onClick:()=>o(r)},r)})}),(0,s.jsx)(u.M,{children:null!==r&&r>=3*l&&r<(l+1)*3&&(0,s.jsx)(g.E.div,{className:"timeline-detail col-span-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},children:(0,s.jsx)(p,{...t[r],onClose:()=>m(null)})})})]},"row-".concat(l)))})})}},8588:(e,t,r)=>{r.d(t,{X6:()=>B,xv:()=>A});var s=r(7437),l=r(7697),a=r(9808),n=r(3),m=r(6514),i=r(9160),o=r(3050),c=r(7470),d=r(8906),p=r(5014),u=r(6218),g=r(7361),x=r(4573),h=r(2009),f=r(8086),b=r(4728),y=r(4954),w=r(9489),v=r(4589),k=r(1226),j=r(8583),N=r(5054),Z=r(8357),C=r(8624),_=r(5135);let z={action:a.Z,"arrow-right":n.Z,"arrow-left":m.Z,"arrow-up":i.Z,"arrow-down":o.Z,back:m.Z,copy:c.Z,check:C.Z,"chevron-down":d.Z,"chevron-right":a.Z,"chevron-up":p.Z,download:u.Z,"triangle-down":_.Z,"triangle-right":_.Z,"triangle-up":_.Z,cursor:g.Z,close:x.Z,email:h.Z,external:f.Z,flip:b.Z,left:m.Z,link:y.Z,location:w.Z,menu:v.Z,minus:k.Z,more:n.Z,pause:j.Z,play:_.Z,"play-outline":N.Z,plus:Z.Z,right:n.Z,up:i.Z},q={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},E=e=>{let{icon:t,title:r,noBaseStyle:a,className:n,...m}=e,i=z[t],o=a?"":q[t]||"w-1em",c=(0,l.c)("transition",o);return(0,s.jsx)(i,{title:r,"aria-hidden":!r,className:(0,l.c)(c,n),...m})},S={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans","dm-mono":"font-dm-mono"},W={normal:"font-normal",semibold:"font-semibold",bold:"font-bold",black:"font-black"},I={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"soe-quote-lg","quote-md":"soe-quote-md","quote-sm":"soe-quote-sm"},V={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},X={left:"text-left",center:"text-center",right:"text-right"},D={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},K={none:"",big:"big-paragraph",subheading:"subheading",caption:"caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var Y=r(3746);let A=e=>{let{as:t="div",font:r="dm-sans",size:a,weight:n,align:m,color:i="default",variant:o,leading:c,mb:d,useDefaultTracking:p="dm-sans"===r,italic:u,srOnly:g,uppercase:x,icon:h,iconProps:f,className:b,children:y,...w}=e,{className:v,...k}=f||{};return(0,s.jsxs)(t,{...w,className:(0,l.c)(r?S[r]:"",a?I[a]:"",n?W[n]:"",m?X[m]:"",i?D[i]:"",o?K[o]:"",c?V[c]:"",d?Y.a1[d]:Y.a1[2],u?"italic":"",g?"sr-only":"",x?"uppercase":"",p?"tracking-normal":"","serif"===r?"tracking-normal sm:tracking-wide":"",b),children:[y,h&&(0,s.jsx)(E,{icon:h,noBaseStyle:!0,className:(0,l.c)("inline-block shrink-0 w-09em ml-03em -mt-01em",v),...k})]})},B=e=>{let{as:t="h2",weight:r="bold",className:a,...n}=e;return(0,s.jsx)(A,{...n,weight:r,as:t,className:(0,l.c)("[&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4",a)})}},3746:(e,t,r)=>{r.d(t,{DK:()=>s,EN:()=>a,Vr:()=>l,Ys:()=>m,a1:()=>i,bm:()=>n});let s={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},l={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},a={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},n={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},m={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},i={none:"mb-0","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);