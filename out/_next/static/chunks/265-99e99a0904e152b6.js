"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{8002:(e,t,r)=>{r.d(t,{W2:()=>p});var m=r(7437),s=r(7697);let l={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},a={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},n={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},i={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},o={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},c={none:"mb-0","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"},d={full:"w-full",site:"cc",screen:"w-screen"},b={black:"bg-black text-white",white:"bg-white text-black","fog-light":"bg-fog-light text-black","red-gradient":"bg-soe-red-gradient text-white"},p=e=>{let{as:t="div",width:r="site",py:p,pt:g,pb:h,mt:u,mb:y,my:x,bgColor:f,style:w,className:k,children:v,...Z}=e;return(0,m.jsx)(t,{...Z,style:w,className:(0,s.c)(f?b[f]:"",p?n[p]:"",g?l[g]:"",h?a[h]:"",x?i[x]:"",u?o[u]:"",y?c[y]:"",r?d[r]:"",k),children:v})}},9811:(e,t,r)=>{r.d(t,{Skiplink:()=>a});var m=r(7437),s=r(2265),l=r(7697);let a=e=>{let{href:t="#main-content",children:r="Skip to main content",className:a,...n}=e,i=(0,s.useRef)(null);return(0,m.jsx)("a",{...n,ref:i,href:t,onFocus:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,l.c)("skiplink",a),children:r})}},9346:(e,t,r)=>{r.d(t,{j:()=>c});var m=r(7437),s=r(7697);let l={small:"max-w-150 max-h-150",medium:"max-w-200 max-h-200",large:"max-w-300 max-h-300",full:"w-full h-full"},a={left:"rotate-y-[25deg] hocus:rotate-y-[-25deg]",right:"rotate-y-[-25deg] hocus:rotate-y-[25deg]"};var n=r(4996),i=r(4446),o=r(7057);let c=e=>{let{heading:t,year:r,image:c,size:d="medium",trapezoid:b="left",className:p,animationProps:g,...h}=e,u=l[d],y=a[b];return(0,m.jsx)("div",{...h,className:(0,s.c)("flex flex-col items-center justify-center",p),children:(0,m.jsxs)(i.M,{children:[(0,m.jsx)("button",{className:(0,s.c)("group relative",y),children:(0,m.jsxs)("div",{className:(0,s.c)("aspect-[1/1] relative perspective-600",u),children:[(0,m.jsx)(o.E.div,{...g,className:"absolute perspective-600 z-10 w-full h-full",children:(0,m.jsx)("div",{className:(0,s.c)("relative transform rounded-lg opacity-60 bg-digital-blue w-full h-full ease-in-out duration-500",y,u)})}),(0,m.jsx)("img",{alt:"",src:c,className:"inset-0 w-full h-full object-cover rounded-lg transform ease-in-out duration-500"})]})}),(0,m.jsxs)("div",{className:"flex flex-col *:font-dm-sans",children:[(0,m.jsx)(n.X6,{className:"type-0",weight:"normal",children:t}),(0,m.jsx)(n.xv,{font:"serif",variant:"overview",weight:"normal",className:"order-first mt-28",children:r})]})]})})}},5280:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var m=r(7437),s=r(8002),l=r(9346),a=r(7697);let n={visible:{opacity:1},hidden:e=>({opacity:0,transition:{duration:1,delay:e}})},i=e=>{let{timelineData:t,hasBorder:r}=e,i=["large","medium","small"];return(0,m.jsx)(s.W2,{width:"site",py:5,bgColor:"fog-light",className:"mb-50",children:(0,m.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4",children:t.map((e,t)=>{let s=i[t%i.length],o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Math.random()*(t-e)+e}();return(0,m.jsx)(l.j,{...e,size:s,trapezoid:t%2==0?"right":"left",className:(0,a.c)("rs-pb-3 rs-pt-5 rs-px-4",r&&"border-r-3 border-black nth-2n:border-0 md:nth-2n:border-r-3 md:nth-3n:border-0 xl:nth-3n:border-r-3 xl:nth-4n:border-0"),animationProps:{custom:o,initial:"visible",animate:"hidden",exit:"visible",variants:n}},t)})})})}},4996:(e,t,r)=>{r.d(t,{X6:()=>R,xv:()=>P});var m=r(7437),s=r(7697),l=r(9808),a=r(3),n=r(6514),i=r(9160),o=r(3050),c=r(7470),d=r(8906),b=r(5014),p=r(6218),g=r(7361),h=r(4573),u=r(2009),y=r(8086),x=r(4728),f=r(4954),w=r(9489),k=r(4589),v=r(1226),Z=r(8583),j=r(5054),N=r(8357),z=r(8624),_=r(5135);let C={action:l.Z,"arrow-right":a.Z,"arrow-left":n.Z,"arrow-up":i.Z,"arrow-down":o.Z,back:n.Z,copy:c.Z,check:z.Z,"chevron-down":d.Z,"chevron-right":l.Z,"chevron-up":b.Z,download:p.Z,"triangle-down":_.Z,"triangle-right":_.Z,"triangle-up":_.Z,cursor:g.Z,close:h.Z,email:u.Z,external:y.Z,flip:x.Z,left:n.Z,link:f.Z,location:w.Z,menu:k.Z,minus:v.Z,more:a.Z,pause:Z.Z,play:_.Z,"play-outline":j.Z,plus:N.Z,right:a.Z,up:i.Z},E={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},S=e=>{let{icon:t,title:r,noBaseStyle:l,className:a,...n}=e,i=C[t],o=l?"":E[t]||"w-1em",c=(0,s.c)("transition",o);return(0,m.jsx)(i,{title:r,"aria-hidden":!r,className:(0,s.c)(c,a),...n})},M={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans"},W={normal:"font-normal",semibold:"font-semibold",bold:"font-bold",black:"font-black"},X={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero"},B={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},F={left:"text-left",center:"text-center",right:"text-right"},H={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},I={none:"",big:"big-paragraph",subheading:"subheading",caption:"caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"},P=e=>{let{as:t="div",font:r="dm-sans",size:l,weight:a,align:n,color:i="default",variant:o,leading:c,useDefaultTracking:d="dm-sans"===r,italic:b,srOnly:p,uppercase:g,icon:h,iconProps:u,className:y,children:x,...f}=e,{className:w,...k}=u||{};return(0,m.jsxs)(t,{...f,className:(0,s.c)("rs-mb-2",r?M[r]:"",l?X[l]:"",a?W[a]:"",n?F[n]:"",i?H[i]:"",o?I[o]:"",c?B[c]:"",b?"italic":"",p?"sr-only":"",g?"uppercase":"",d?"tracking-normal":"","dm-sans"===r?"tracking-normal sm:tracking-wide":"",y),children:[x,h&&(0,m.jsx)(S,{icon:h,noBaseStyle:!0,className:(0,s.c)("inline-block shrink-0 w-09em ml-03em -mt-01em",w),...k})]})},R=e=>{let{as:t="h2",weight:r="bold",...s}=e;return(0,m.jsx)(P,{...s,weight:r,as:t})}}}]);