(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{8301:(e,t,r)=>{Promise.resolve().then(r.bind(r,4217)),Promise.resolve().then(r.bind(r,2117)),Promise.resolve().then(r.bind(r,2877)),Promise.resolve().then(r.bind(r,5517)),Promise.resolve().then(r.bind(r,5218)),Promise.resolve().then(r.bind(r,3918)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23))},4217:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnimateInView:()=>l});var s=r(7437),i=r(2265),n=r(8613),m=r(9168),d=r(4032),a=r(2351);let l=e=>{let{animation:t="zoomIn",once:r=!0,duration:l=.6,delay:o,children:c,className:b,...p}=e,y=(0,i.useRef)(null),u=(0,n.J)(),h=(0,m.Y)(y,{once:r});return"none"===t?(0,s.jsx)("div",{children:c}):(0,s.jsx)(d.E.div,{ref:y,variants:a.b[t],transition:{delay:o,duration:l,ease:"easeOut"},initial:"hidden",animate:h?"visible":u?"hiddenReduced":"hidden",className:b,...p,children:c})}},2351:(e,t,r)=>{"use strict";r.d(t,{b:()=>s});let s={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}}}},2117:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Parallax:()=>o});var s=r(7437),i=r(2265),n=r(8613),m=r(4445),d=r(949),a=r(9462),l=r(4032);let o=e=>{let{children:t,offset:r=60}=e,o=(0,n.J)(),c=(0,i.useRef)(null),{scrollYProgress:b}=(0,m.v)({target:c,offset:["start end","end start"]}),p=(0,d.H)(b,[0,1],[r,-r]),y=(0,a.q)(p,{stiffness:200,damping:30});return(0,s.jsx)(l.E.div,{ref:c,style:{y:o?0:y},children:t})}},6208:(e,t,r)=>{"use strict";r.d(t,{W2:()=>a});var s=r(7437),i=r(7697),n=r(3746);let m={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},d={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},a=e=>{let{as:t="div",width:r="site",py:a,pt:l,pb:o,mt:c,mb:b,my:p,bgColor:y,style:u,className:h,children:f,...v}=e;return(0,s.jsx)(t,{...v,style:u,className:(0,i.c)(y?d[y]:"",a?n.EN[a]:"",l?n.DK[l]:"",o?n.Vr[o]:"",p?n.bm[p]:"",c?n.Ys[c]:"",b?n.a1[b]:"",r?m[r]:"",h),children:f})}},6486:(e,t,r)=>{"use strict";r.d(t,{hs:()=>o});var s=r(7437);r(2265);var i=r(7697);let n={row:"flex-row","row-reverse":"flex-row-reverse",col:"flex-col","col-reverse":"flex-col-reverse"},m={wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse",nowrap:"flex-nowrap"},d={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},a={start:"content-start",end:"content-end",center:"content-center",between:"content-between",around:"content-around",evenly:"content-evenly"},l={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"},o=e=>{let{as:t="div",direction:r,gap:o,wrap:c,justifyContent:b,alignContent:p,alignItems:y,children:u,className:h,...f}=e;return(0,s.jsx)(t,{...f,className:(0,i.c)("flex",r?n[r]:"",c?m[c]:"",b?d[b]:"",p?a[p]:"",y?l[y]:"",o?"grid-gap":"",h),children:u})}},5218:(e,t,r)=>{"use strict";r.d(t,{Skiplink:()=>m});var s=r(7437),i=r(2265),n=r(7697);let m=e=>{let{href:t="#main-content",children:r="Skip to main content",className:m,...d}=e,a=(0,i.useRef)(null);return(0,s.jsx)("a",{...d,ref:a,href:t,onFocus:()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,n.c)("skiplink",m),children:r})}},6648:(e,t,r)=>{"use strict";r.d(t,{default:()=>i.a});var s=r(5601),i=r.n(s)},5601:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return d}});let s=r(9920),i=r(497),n=r(8173),m=s._(r(1241));function d(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:m.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=n.Image},3746:(e,t,r)=>{"use strict";r.d(t,{DK:()=>s,EN:()=>n,Vr:()=>i,Ys:()=>d,a1:()=>a,bm:()=>m});let s={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},i={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},n={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},m={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},d={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},a={none:"","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}},e=>{var t=t=>e(e.s=t);e.O(0,[231,790,173,693,130,215,744],()=>t(8301)),_N_E=e.O()}]);