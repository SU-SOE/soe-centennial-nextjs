"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{4217:(e,t,r)=>{r.r(t),r.d(t,{AnimateInView:()=>d});var s=r(7437),i=r(2265),a=r(4501),n=r(7476),l=r(5856),o=r(2351);let d=e=>{let{animation:t="zoomIn",once:r=!0,duration:d=.6,delay:m,children:c,className:u,...p}=e,h=(0,i.useRef)(null),x=(0,a.J)(),f=(0,n.Y)(h,{once:r});return"none"===t?(0,s.jsx)("div",{children:c}):(0,s.jsx)(l.E.div,{ref:h,variants:o.b[t],transition:{delay:m,duration:d,ease:"easeOut"},initial:"hidden",animate:f?"visible":x?"hiddenReduced":"hidden",className:u,...p,children:c})}},2351:(e,t,r)=>{r.d(t,{b:()=>s});let s={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}}}},6208:(e,t,r)=>{r.d(t,{W2:()=>o});var s=r(7437),i=r(7697),a=r(3746);let n={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},l={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},o=e=>{let{as:t="div",width:r="site",py:o,pt:d,pb:m,mt:c,mb:u,my:p,bgColor:h,style:x,className:f,children:g,...b}=e;return(0,s.jsx)(t,{...b,style:x,className:(0,i.c)(h?l[h]:"",o?a.EN[o]:"",d?a.DK[d]:"",m?a.Vr[m]:"",p?a.bm[p]:"",c?a.Ys[c]:"",u?a.a1[u]:"",r?n[r]:"",f),children:g})}},6486:(e,t,r)=>{r.d(t,{hs:()=>m});var s=r(7437);r(2265);var i=r(7697);let a={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},n={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},l={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},o={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},d={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},m=e=>{let{as:t="div",direction:r,gap:m,wrap:c,justifyContent:u,alignContent:p,alignItems:h,children:x,className:f,...g}=e;return(0,s.jsx)(t,{...g,className:(0,i.c)("flex",r?a[r]:"",c?n[c]:"",u?l[u]:"",p?o[p]:"",h?d[h]:"",m?"grid-gap":"",f),children:x})}},5218:(e,t,r)=>{r.d(t,{Skiplink:()=>n});var s=r(7437),i=r(2265),a=r(7697);let n=e=>{let{href:t="#main-content",children:r="Skip to main content",className:n,...l}=e,o=(0,i.useRef)(null);return(0,s.jsx)("a",{...l,ref:o,href:t,onFocus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,a.c)("skiplink",n),children:r})}},5192:(e,t,r)=>{r.d(t,{dp:()=>i,hh:()=>a});var s=r(7697);let i={small:"w-200 md:w-250",medium:"w-250 md:w-[300px] xl:w-[340px]",large:"w-250 md:w-[300px] xl:w-[420px]",xlarge:"w-250 md:w-[300px] lg:w-[340px] xl:w-[420px] 2xl:w-600",full:"w-full"},a=(e,t)=>(0,s.c)({"rotate-y-[15deg]":"left"===e,"rotate-y-[-15deg]":"right"===e,"rotate-y-0 perspective-0":t})},1809:(e,t,r)=>{r.d(t,{f:()=>o});var s=r(7437),i=r(6648),a=r(7697),n=r(4982),l=r(5192);let o=e=>{let{src:t,alt:r="",size:o="medium",trapezoidAngle:d="left",className:m,isExpanded:c=!1}=e,u=l.dp[o],p=l.hh(d,c);return(0,s.jsx)("div",{className:(0,a.c)("group relative flex justify-center stretch-link z-50",m),children:(0,s.jsxs)("div",{className:(0,a.c)("aspect-[1/1] relative h-full transform ease-in-out perspective-1000 flex items-center justify-center",p,u),children:[c&&(0,s.jsx)(n.Z,{width:60,className:"absolute bg-stone-dark text-white rounded-full z-50 border-2 border-fog-dark"}),(0,s.jsx)(i.default,{alt:r,src:t,fill:!0,className:(0,a.c)("z-0 object-cover overflow-hidden rounded-[20px] shadow-lg transform ease-in-out perspective-1000 duration-[2s] hocus:perspective-0 hocus:rotate-y-0",{"contrast-50 brightness-100 perspective-0 rotate-y-0":c})})]})})}},7345:(e,t,r)=>{r.d(t,{j:()=>m});var s=r(7437),i=r(7697),a=r(5192),n=r(8588),l=r(1809),o=r(2265),d=r(41);let m=(0,o.forwardRef)((e,t)=>{let{heading:r,year:o,image:m,size:c="medium",trapezoid:u="left",className:p,onClick:h,isExpanded:x,...f}=e,g=a.dp[c];return(0,s.jsxs)("button",{...f,ref:t,type:"button",className:(0,i.c)("group flex flex-col",p,g),onClick:h,role:"button",tabIndex:0,children:[(0,s.jsx)(l.f,{src:m,alt:r,size:c,trapezoidAngle:u,isExpanded:x}),(0,s.jsxs)("div",{className:"flex flex-col items-start md:px-28",children:[(0,s.jsxs)(n.X6,{align:"left",font:"dm-sans",size:"base",weight:"normal",leading:"normal",className:"transition duration-1000 text-stone-dark underline underline-offset-[5px] decoration-digital-red-light cursor-pointer decoration-[2.5px] group-hover:no-underline",children:[r,(0,s.jsx)(d.Z,{width:21,className:"ml-03em text-digital-red-light inline-block"})]}),(0,s.jsx)(n.xv,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"order-first rs-mt-2",children:o})]})]})});m.displayName="TimelineItem"},2938:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(7437),i=r(2265),a=r(6208),n=r(7345),l=r(8588),o=r(6486),d=r(7697),m=r(9519),c=r(1809);let u=e=>{let{heading:t,year:r,href:i,body:n,cta:u,image:p,bgColor:h="fog-light",align:x="left",isSelected:f,onClose:g,...b}=e;return(0,s.jsx)(a.W2,{...b,as:"section",bgColor:h,width:"site",py:5,className:"overflow-hidden",children:(0,s.jsxs)(o.hs,{alignItems:"start",justifyContent:"between",gap:!0,className:"relative mr-0 au-ml-auto flex-col lg:flex-row",children:[(0,s.jsxs)(a.W2,{className:"w-1/2 lg:rs-pr-9 ml-0 flex flex-col",children:[t&&(0,s.jsx)(l.X6,{align:"left",font:"dm-sans",size:3,weight:"normal",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t}),r&&(0,s.jsx)(l.xv,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"order-first mt-28 mb-38",children:r}),n&&(0,s.jsx)(l.xv,{font:"dm-sans",variant:"big",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:n}),u]}),(0,s.jsx)("div",{className:(0,d.c)("aspect-[1/1] group relative w-1/2 h-full perspective-600",{"order-first":"left"===x}),children:(0,s.jsx)(c.f,{size:"full",src:p})}),(0,s.jsxs)("button",{className:"absolute top-0 right-0 group",onClick:g,children:[(0,s.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,s.jsx)(m.Z,{width:50,className:"text-fog-dark group-hocus:text-digital-red"})]})]})})};var p=r(5856),h=r(750),x=r(8930),f=r(4217);r(2351);let g=e=>{let{timelineData:t}=e,[r,l]=(0,i.useState)(!1),[o,d]=(0,i.useState)(null),[m,c]=(0,i.useState)(""),g=(0,i.useRef)({}),b=(0,i.useRef)(null);(0,i.useEffect)(()=>{l(!0);let e=window.location.hash.replace("#","");e&&t.find(t=>{if(t.anchor===e)return d(t.uuid)})},[t]),(0,i.useEffect)(()=>{o&&b.current&&(b.current.scrollIntoView({behavior:"smooth",block:"start"}),b.current.focus())},[o]);let y=(0,h.ac)("(min-width: 1024px)"),w=(0,h.ac)("(min-width: 768px)"),v=y?3:w?2:1,k=t.reduce((e,t,r)=>{let s=Math.floor(r/v);return e[s]||(e[s]=[]),e[s].push(t),e},[]),j=(e,t)=>{d(t=>t===e?null:e),c(e=>e===t?"":t)};return r?(0,s.jsx)(a.W2,{id:"main-content",width:"site",pb:5,bgColor:"fog-light",children:(0,s.jsx)("div",{className:"grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]",children:k.map((e,r)=>(0,s.jsxs)("div",{id:"".concat(r),className:"odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6",children:[(0,s.jsx)("div",{className:"flex flex-col items-center md:items-start md:flex-row md:justify-between",children:e.map((e,t)=>{let i=r%2==0?["large","medium","small"]:["small","large","medium"],a=i[t%i.length];return(0,s.jsx)(f.AnimateInView,{children:(0,s.jsx)(n.j,{...e,id:e.uuid,"aria-expanded":o===e.uuid,"aria-controls":"drawer-".concat(e.uuid),isExpanded:o===e.uuid,size:a,trapezoid:t%2==0?"left":"right",onClick:()=>j(e.uuid,e.anchor),ref:t=>{g.current[e.uuid]=t}})},e.uuid)})}),o&&e.some(e=>e.uuid===o)&&(0,s.jsx)(p.E.div,{id:m,className:"w-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},ref:b,tabIndex:-1,children:(0,s.jsx)(u,{...t.find(e=>e.uuid===o),onClose:()=>{if(o){let e=g.current[o];e&&e.focus()}d(null)}})})]},"row-".concat(r)))})}):(0,s.jsx)(x.Z,{})}},8588:(e,t,r)=>{r.d(t,{X6:()=>Y,xv:()=>X});var s=r(7437),i=r(7697),a=r(9808),n=r(3),l=r(6514),o=r(9160),d=r(3050),m=r(7470),c=r(8906),u=r(5014),p=r(6218),h=r(7361),x=r(4573),f=r(2009),g=r(8086),b=r(4728),y=r(4954),w=r(9489),v=r(4589),k=r(1226),j=r(8583),N=r(5054),Z=r(8357),_=r(8624),z=r(5135);let R={action:a.Z,"arrow-right":n.Z,"arrow-left":l.Z,"arrow-up":o.Z,"arrow-down":d.Z,back:l.Z,copy:m.Z,check:_.Z,"chevron-down":c.Z,"chevron-right":a.Z,"chevron-up":u.Z,download:p.Z,"triangle-down":z.Z,"triangle-right":z.Z,"triangle-up":z.Z,cursor:h.Z,close:x.Z,email:f.Z,external:g.Z,flip:b.Z,left:l.Z,link:y.Z,location:w.Z,menu:v.Z,minus:k.Z,more:n.Z,pause:j.Z,play:z.Z,"play-outline":N.Z,plus:Z.Z,right:n.Z,up:o.Z},I={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},C=e=>{let{icon:t,title:r,noBaseStyle:a,className:n,...l}=e,o=R[t],d=a?"":I[t]||"w-1em",m=(0,i.c)("transition",d);return(0,s.jsx)(o,{title:r,"aria-hidden":!r,className:(0,i.c)(m,n),...l})},E={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans tracking-tight","dm-mono":"font-dm-mono tracking-[0.3em]"},S={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},q={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"cen-quote-lg","quote-md":"cen-quote-md","quote-sm":"cen-quote-sm",small:"text-17 md:text-18"},V={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},W={left:"text-left",center:"text-center",right:"text-right"},A={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},D={none:"",subheading:"subheading",big:"cen-big-paragraph",caption:"cen-caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var F=r(3746);let X=e=>{let{as:t="p",font:r="dm-sans",size:a,weight:n,align:l,color:o="default",variant:d,leading:m,mb:c,useDefaultTracking:u="dm-sans"===r,italic:p,srOnly:h,uppercase:x,icon:f,iconProps:g,className:b,children:y,...w}=e,{className:v,...k}=g||{};return(0,s.jsxs)(t,{...w,className:(0,i.c)(r?E[r]:"",a?q[a]:"",n?S[n]:"",l?W[l]:"",o?A[o]:"",d?D[d]:"",m?V[m]:"",c?F.a1[c]:F.a1[2],p?"italic":"",h?"sr-only":"",x?"uppercase":"",u?"tracking-normal":"",b),children:[y,f&&(0,s.jsx)(C,{icon:f,noBaseStyle:!0,className:(0,i.c)("inline-block shrink-0 w-09em ml-03em -mt-01em",v),...k})]})},Y=e=>{let{as:t="h2",weight:r="medium",className:a,linkType:n,...l}=e,o="[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4";switch(n){case"story":o="[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-digital-red-light [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4";break;case"poster":o="[&_a]:transition [&_a]:duration-500 [&_a]:text-white [&_a]:font-normal [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-white [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4"}return(0,s.jsx)(X,{...l,weight:r,as:t,className:(0,i.c)(o,a)})}},3746:(e,t,r)=>{r.d(t,{DK:()=>s,EN:()=>a,Vr:()=>i,Ys:()=>l,a1:()=>o,bm:()=>n});let s={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},i={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},a={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},n={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},l={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},o={none:"mb-0","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);