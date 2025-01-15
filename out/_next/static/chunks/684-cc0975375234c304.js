"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{4217:(e,t,r)=>{r.r(t),r.d(t,{AnimateInView:()=>d});var s=r(7437),i=r(2265),a=r(4501),n=r(7476),l=r(5856),o=r(2351);let d=e=>{let{animation:t="zoomIn",once:r=!0,duration:d=.6,delay:m,children:c,className:u,...p}=e,h=(0,i.useRef)(null),x=(0,a.J)(),f=(0,n.Y)(h,{once:r});return"none"===t?(0,s.jsx)("div",{children:c}):(0,s.jsx)(l.E.div,{ref:h,variants:o.b[t],transition:{delay:m,duration:d,ease:"easeOut"},initial:"hidden",animate:f?"visible":x?"hiddenReduced":"hidden",className:u,...p,children:c})}},2351:(e,t,r)=>{r.d(t,{b:()=>s});let s={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}}}},6208:(e,t,r)=>{r.d(t,{W2:()=>o});var s=r(7437),i=r(7697),a=r(3746);let n={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},l={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},o=e=>{let{as:t="div",width:r="site",py:o,pt:d,pb:m,mt:c,mb:u,my:p,bgColor:h,style:x,className:f,children:g,...b}=e;return(0,s.jsx)(t,{...b,style:x,className:(0,i.c)(h?l[h]:"",o?a.EN[o]:"",d?a.DK[d]:"",m?a.Vr[m]:"",p?a.bm[p]:"",c?a.Ys[c]:"",u?a.a1[u]:"",r?n[r]:"",f),children:g})}},6486:(e,t,r)=>{r.d(t,{hs:()=>m});var s=r(7437);r(2265);var i=r(7697);let a={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},n={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},l={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},o={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},d={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},m=e=>{let{as:t="div",direction:r,gap:m,wrap:c,justifyContent:u,alignContent:p,alignItems:h,children:x,className:f,...g}=e;return(0,s.jsx)(t,{...g,className:(0,i.c)("flex",r?a[r]:"",c?n[c]:"",u?l[u]:"",p?o[p]:"",h?d[h]:"",m?"grid-gap":"",f),children:x})}},5218:(e,t,r)=>{r.d(t,{Skiplink:()=>n});var s=r(7437),i=r(2265),a=r(7697);let n=e=>{let{href:t="#main-content",children:r="Skip to main content",className:n,...l}=e,o=(0,i.useRef)(null);return(0,s.jsx)("a",{...l,ref:o,href:t,onFocus:()=>{var e;return null===(e=o.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,a.c)("skiplink",n),children:r})}},9867:(e,t,r)=>{r.r(t),r.d(t,{default:()=>er});var s=r(7437),i=r(2265),a=r(6208),n=r(7697);let l={small:"w-200 md:w-250",medium:"w-250 md:w-[300px] xl:w-[340px]",large:"w-250 md:w-[300px] lg:w-[340px] xl:w-[420px]",xlarge:"w-250 md:w-[300px] lg:w-[340px] xl:w-[420px] 2xl:w-600",full:"w-full"},o=(e,t)=>(0,n.c)({"rotate-y-[15deg]":"left"===e,"rotate-y-[-15deg]":"right"===e,"rotate-y-0 perspective-0":t});var d=r(9808),m=r(3),c=r(6514),u=r(9160),p=r(3050),h=r(7470),x=r(8906),f=r(5014),g=r(6218),b=r(7361),y=r(4573),w=r(2009),v=r(8086),k=r(4728),j=r(4954),N=r(9489),Z=r(4589),_=r(1226),z=r(8583),R=r(5054),I=r(8357),C=r(8624),E=r(5135);let S={action:d.Z,"arrow-right":m.Z,"arrow-left":c.Z,"arrow-up":u.Z,"arrow-down":p.Z,back:c.Z,copy:h.Z,check:C.Z,"chevron-down":x.Z,"chevron-right":d.Z,"chevron-up":f.Z,download:g.Z,"triangle-down":E.Z,"triangle-right":E.Z,"triangle-up":E.Z,cursor:b.Z,close:y.Z,email:w.Z,external:v.Z,flip:k.Z,left:c.Z,link:j.Z,location:N.Z,menu:Z.Z,minus:_.Z,more:m.Z,pause:z.Z,play:E.Z,"play-outline":R.Z,plus:I.Z,right:m.Z,up:u.Z},q={"arrow-left":"w-09em -mt-01em","arrow-right":"w-09em -mt-01em","triangle-right":"w-09em scale-x-90 mt-01em","triangle-down":"w-09em scale-x-90 rotate-90 mt-01em","triangle-up":"w-09em scale-x-90 -rotate-90 mt-02em",download:"w-09em",email:"w-1em",external:"w-08em stroke-[2.5]",left:"w-08em",link:"w-09em -mt-01em",more:"w-08em",plus:"w-08em",right:"w-08em"},V=e=>{let{icon:t,title:r,noBaseStyle:i,className:a,...l}=e,o=S[t],d=i?"":q[t]||"w-1em",m=(0,n.c)("transition",d);return(0,s.jsx)(o,{title:r,"aria-hidden":!r,className:(0,n.c)(m,a),...l})},W={sans:"font-sans",serif:"font-serif","dm-sans":"font-dm-sans tracking-tight","dm-mono":"font-dm-mono tracking-[0.3rem]"},A={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},D={base:"type-0",1:"type-1",2:"type-2",3:"type-3",4:"type-4",5:"type-5",6:"type-6",7:"type-7",8:"type-8",9:"type-9",f4:"fluid-type-4",f5:"fluid-type-5",f6:"fluid-type-6",f7:"fluid-type-7",f8:"fluid-type-8",f9:"fluid-type-9",splash:"splash",hero:"hero","quote-lg":"cen-quote-lg","quote-md":"cen-quote-md","quote-sm":"cen-quote-sm",small:"text-17 md:text-18"},F={none:"leading-none",tight:"leading-tight",display:"leading-display",snug:"leading-snug",cozy:"leading-cozy",normal:"leading",trim:"leading-trim",druk:"leading-druk"},Y={left:"text-left",center:"text-center",right:"text-right"},K={default:"",black:"text-black","cool-grey":"text-cool-grey",white:"text-white","black-20":"text-black-20","black-40":"text-black-40","black-60":"text-black-60","black-80":"text-black-80","black-90":"text-black-90"},T={none:"",subheading:"subheading",big:"cen-big-paragraph",caption:"cen-caption",card:"card",changemaker:"text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy",changemakerHorizontal:"leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22",intro:"intro-text",overview:"overview"};var B=r(3746);let H=e=>{let{as:t="p",font:r="dm-sans",size:i,weight:a,align:l,color:o="default",variant:d,leading:m,mb:c,useDefaultTracking:u="dm-sans"===r,italic:p,srOnly:h,uppercase:x,icon:f,iconProps:g,className:b,children:y,footnoteRefs:w,...v}=e,{className:k,...j}=g||{};return(0,s.jsxs)(t,{...v,className:(0,n.c)(r?W[r]:"",i?D[i]:"",a?A[a]:"",l?Y[l]:"",o?K[o]:"",d?T[d]:"",m?F[m]:"",c?B.a1[c]:B.a1[2],p?"italic":"",h?"sr-only":"",x?"uppercase":"",u?"tracking-normal":"",b),children:[y,f&&(0,s.jsx)(V,{icon:f,noBaseStyle:!0,className:(0,n.c)("inline-block shrink-0 w-09em ml-03em -mt-01em",k),...j}),w&&w.map(e=>{let{id:t,number:r}=e;return(0,s.jsx)("sup",{className:"top-0 ml-03em",children:(0,s.jsxs)("a",{href:"#".concat(t),id:"ref-".concat(t),className:"font-normal text-stone-dark hocus:text-digital-red-xlight",children:["(",r,")"]})},t)})]})},J=e=>{let{as:t="h2",weight:r="medium",className:i,linkType:a,...l}=e,o="[&_a]:transition [&_a]:duration-500 [&_a]:text-stone-dark [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:decoration-digital-red-light [&_a]:cursor-pointer [&_a]:decoration-4";switch(a){case"story":o="[&_a]:transition [&_a]:duration-500 [&_a]:font-normal [&_a]:text-stone-dark [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-stone-dark [&_a]:group-hocus:cursor-pointer [&_a]:decoration-2";break;case"poster":o="[&_a]:transition [&_a]:duration-500 [&_a]:text-white [&_a]:font-normal [&_a]:group-hocus:underline [&_a]:underline-offset-[5px] [&_a]:group-hocus:decoration-white [&_a]:group-hocus:cursor-pointer [&_a]:decoration-4"}return(0,s.jsx)(H,{...l,weight:r,as:t,className:(0,n.c)(o,i)})};var L=r(6648),M=r(4982);let O=e=>{let{src:t,alt:r="",size:i="medium",trapezoidAngle:a="left",className:d,isExpanded:m=!1}=e,c=l[i],u=o(a,m);return(0,s.jsx)("div",{className:(0,n.c)("flex justify-center z-50 mx-10",d),children:(0,s.jsxs)("div",{className:(0,n.c)("aspect-[1/1] relative h-full transform ease-in-out perspective-1000 flex items-center justify-center",u,c),children:[m&&(0,s.jsx)(M.Z,{width:60,className:"absolute bg-stone-dark text-white rounded-full z-50 border-2 border-fog-dark"}),(0,s.jsx)(L.default,{alt:r,src:t,fill:!0,className:(0,n.c)("z-0 object-cover rounded-[20px] shadow-lg transform ease-in-out perspective-1000 duration-[1500ms] group-hocus-within:perspective-0 group-hocus-within:rotate-y-0 hocus:perspective-0 hocus:rotate-y-0 outline outline-4 group-hocus-within:outline-stone",{"contrast-50 brightness-100 perspective-0 rotate-y-0 outline-stone":m})})]})})};var U=r(41);let G=(0,i.forwardRef)((e,t)=>{let{heading:r,year:i,image:a,size:o="medium",trapezoid:d="left",className:m,onClick:c,isExpanded:u,...p}=e,h=l[o];return(0,s.jsxs)("button",{...p,ref:t,type:"button",className:(0,n.c)("group flex flex-col relative",m,h),onClick:c,role:"button",tabIndex:0,children:[(0,s.jsx)(O,{src:a,alt:r,size:o,trapezoidAngle:d,isExpanded:u}),(0,s.jsxs)("div",{className:"flex flex-col items-start md:rs-px-1",children:[(0,s.jsxs)(J,{align:"left",font:"dm-sans",size:"base",weight:"normal",leading:"normal",className:"stretched-link transition text-stone-dark underline underline-offset-[5px] decoration-digital-red-light cursor-pointer decoration-[2.5px] group-hover:no-underline",children:[r,(0,s.jsx)(U.Z,{width:21,className:"transition ml-03em group-hocus:translate-x-02em text-digital-red-light inline-block"})]}),(0,s.jsx)(H,{font:"dm-mono",weight:"normal",mb:"base",size:2,className:"order-first rs-mt-2",align:"left",children:i})]})]})});G.displayName="TimelineItem";var P=r(6486);let Q=e=>{let{heading:t,year:r,href:i,body:l,cta:o,image:d,bgColor:m="fog-light",align:c="left",isSelected:u,onClose:p,...h}=e;return(0,s.jsx)(a.W2,{...h,as:"section",bgColor:m,width:"site",py:5,className:"overflow-hidden",children:(0,s.jsxs)(P.hs,{alignItems:"start",justifyContent:"between",gap:!0,className:"relative mr-0 au-ml-auto flex-col lg:flex-row items-center",children:[(0,s.jsxs)(a.W2,{className:"w-1/2 lg:rs-pr-9 ml-0 flex flex-col",children:[t&&(0,s.jsx)(J,{align:"left",font:"dm-sans",size:3,weight:"normal",className:"2xl:whitespace-pre-line -mt-01em xl:max-w-1200",children:t}),r&&(0,s.jsx)(H,{font:"dm-mono",weight:"normal",mb:"none",size:2,className:"order-first mt-28 mb-38",children:r}),l&&(0,s.jsx)(H,{font:"dm-sans",variant:"big",weight:"normal",className:"max-w-[50ch] rs-mb-3 *:*:leading-snug",children:l}),o]}),(0,s.jsx)("div",{className:(0,n.c)("aspect-[1/1] group relative w-1/2 h-full perspective-600",{"order-first":"left"===c}),children:(0,s.jsx)(O,{size:"full",src:d})}),(0,s.jsxs)("button",{className:"absolute top-0 right-0 group",onClick:p,children:[(0,s.jsxs)("span",{className:"sr-only",children:["Close ",t," details"]}),(0,s.jsx)(M.Z,{width:50,className:"transition p-6 rounded-full text-fog-dark border-fog-dark border-2 group-hocus:border-digital-red group-hocus:text-digital-red"})]})]})})};var X=r(5856),$=r(750),ee=r(8930),et=r(4217);r(2351);let er=e=>{let{timelineData:t}=e,[r,n]=(0,i.useState)(!1),[l,o]=(0,i.useState)(null),[d,m]=(0,i.useState)(""),c=(0,i.useRef)({}),u=(0,i.useRef)(null);(0,i.useEffect)(()=>{n(!0);let e=window.location.hash.replace("#","");e&&t.find(t=>{if(t.anchor===e)return o(t.uuid)})},[t]),(0,i.useEffect)(()=>{l&&u.current&&setTimeout(()=>{var e,t;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"}),null===(t=u.current)||void 0===t||t.focus()},0)},[l]);let p=(0,$.ac)("(min-width: 1024px)"),h=(0,$.ac)("(min-width: 768px)"),x=p?3:h?2:1,f=t.reduce((e,t,r)=>{let s=Math.floor(r/x);return e[s]||(e[s]=[]),e[s].push(t),e},[]),g=(e,t)=>{o(t=>t===e?null:e),m(e=>e===t?"":t)};return r?(0,s.jsx)(a.W2,{id:"main-content",width:"site",pb:5,bgColor:"fog-light",children:(0,s.jsx)("div",{className:"grid rs-mb-10 sm:mb-0 sm:gap-[32px] md:gap-[76px]",children:f.map((e,r)=>(0,s.jsxs)("div",{id:"".concat(r),className:"odd:children:children:even:rs-pt-6 even:children:children:odd:rs-pt-6",children:[(0,s.jsx)("div",{className:"flex flex-col items-center md:items-start md:flex-row md:justify-between",children:e.map((e,t)=>{let i=r%2==0?["large","medium","small"]:["small","large","medium"],a=i[t%i.length];return(0,s.jsx)(et.AnimateInView,{children:(0,s.jsx)(G,{...e,id:e.uuid,"aria-expanded":l===e.uuid,"aria-controls":e.anchor,isExpanded:l===e.uuid,size:a,trapezoid:t%2==0?"left":"right",onClick:()=>g(e.uuid,e.anchor),ref:t=>{c.current[e.uuid]=t}})},e.uuid)})}),l&&e.some(e=>e.uuid===l)&&(0,s.jsx)(X.E.div,{id:d,"aria-labelledby":l,className:"w-full",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.5},ref:u,tabIndex:-1,children:(0,s.jsx)(Q,{...t.find(e=>e.uuid===l),onClose:()=>{if(l){let e=c.current[l];e&&e.focus()}o(null)}})})]},"row-".concat(r)))})}):(0,s.jsx)(ee.Z,{})}},3746:(e,t,r)=>{r.d(t,{DK:()=>s,EN:()=>a,Vr:()=>i,Ys:()=>l,a1:()=>o,bm:()=>n});let s={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},i={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},a={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},n={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},l={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},o={none:"","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}}]);