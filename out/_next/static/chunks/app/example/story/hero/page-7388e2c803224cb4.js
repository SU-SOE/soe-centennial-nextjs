(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979,352],{1722:(e,t,s)=>{Promise.resolve().then(s.bind(s,4217)),Promise.resolve().then(s.bind(s,2117)),Promise.resolve().then(s.bind(s,5218)),Promise.resolve().then(s.bind(s,3918)),Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23))},4217:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AnimateInView:()=>a});var r=s(7437),i=s(2265),m=s(8613),n=s(9168),d=s(4032),l=s(2351);let a=e=>{let{animation:t="zoomIn",once:s=!0,duration:a=.6,delay:c,children:b,className:o,...p}=e,y=(0,i.useRef)(null),h=(0,m.J)(),u=(0,n.Y)(y,{once:s});return"none"===t?(0,r.jsx)("div",{children:b}):(0,r.jsx)(d.E.div,{ref:y,variants:l.b[t],transition:{delay:c,duration:a,ease:"easeOut"},initial:"hidden",animate:u?"visible":h?"hiddenReduced":"hidden",className:o,...p,children:b})}},2351:(e,t,s)=>{"use strict";s.d(t,{b:()=>r});let r={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}}}},2117:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Parallax:()=>c});var r=s(7437),i=s(2265),m=s(8613),n=s(4445),d=s(949),l=s(9462),a=s(4032);let c=e=>{let{children:t,offset:s=60}=e,c=(0,m.J)(),b=(0,i.useRef)(null),{scrollYProgress:o}=(0,n.v)({target:b,offset:["start end","end start"]}),p=(0,d.H)(o,[0,1],[s,-s]),y=(0,l.q)(p,{stiffness:200,damping:30});return(0,r.jsx)(a.E.div,{ref:b,style:{y:c?0:y},children:t})}},6208:(e,t,s)=>{"use strict";s.d(t,{W2:()=>l});var r=s(7437),i=s(7697),m=s(3746);let n={full:"w-full",site:"cc",screen:"w-screen",wysiwyg:"cc lg:max-w-[725px]"},d={black:"bg-black text-white",white:"bg-white text-stone-dark",blue:"bg-cen-blue-xlight text-stone-dark","fog-light":"bg-fog-light text-stone-dark",red:"bg-cardinal-red-dark text-white","red-gradient":"bg-cen-red-gradient text-white","stone-dark":"bg-stone-dark text-white"},l=e=>{let{as:t="div",width:s="site",py:l,pt:a,pb:c,mt:b,mb:o,my:p,bgColor:y,style:h,className:u,children:f,...v}=e;return(0,r.jsx)(t,{...v,style:h,className:(0,i.c)(y?d[y]:"",l?m.EN[l]:"",a?m.DK[a]:"",c?m.Vr[c]:"",p?m.bm[p]:"",b?m.Ys[b]:"",o?m.a1[o]:"",s?n[s]:"",u),children:f})}},5218:(e,t,s)=>{"use strict";s.d(t,{Skiplink:()=>n});var r=s(7437),i=s(2265),m=s(7697);let n=e=>{let{href:t="#main-content",children:s="Skip to main content",className:n,...d}=e,l=(0,i.useRef)(null);return(0,r.jsx)("a",{...d,ref:l,href:t,onFocus:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,m.c)("skiplink",n),children:s})}},3918:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GradientBanner:()=>a});var r=s(7437),i=s(2265),m=s(6208),n=s(4445),d=s(949),l=s(4032);let a=e=>{let{children:t,...s}=e,a=(0,i.useRef)(null),{scrollYProgress:c}=(0,n.v)({target:a}),b=(0,d.H)(c,[0,1],["linear-gradient(90deg, #C74632 20%, #610058 100%)","linear-gradient(90deg, #610058 20%, #C74632 100%)"]);return(0,r.jsx)(m.W2,{width:"full",...s,children:(0,r.jsx)(l.E.div,{ref:a,style:{background:b},className:"flex flex-col justify-center text-white w-full h-full rs-py-9 cc *:font-dm-sans",children:t})})}},3746:(e,t,s)=>{"use strict";s.d(t,{DK:()=>r,EN:()=>m,Vr:()=>i,Ys:()=>d,a1:()=>l,bm:()=>n});let r={none:"",base:"rs-pt-0",1:"rs-pt-1",2:"rs-pt-2",3:"rs-pt-3",4:"rs-pt-4",5:"rs-pt-5",6:"rs-pt-6",7:"rs-pt-7",8:"rs-pt-8",9:"rs-pt-9",10:"rs-pt-10"},i={none:"",base:"rs-pb-0",1:"rs-pb-1",2:"rs-pb-2",3:"rs-pb-3",4:"rs-pb-4",5:"rs-pb-5",6:"rs-pb-6",7:"rs-pb-7",8:"rs-pb-8",9:"rs-pb-9",10:"rs-pb-10"},m={none:"",base:"rs-py-0",1:"rs-py-1",2:"rs-py-2",3:"rs-py-3",4:"rs-py-4",5:"rs-py-5",6:"rs-py-6",7:"rs-py-7",8:"rs-py-8",9:"rs-py-9",10:"rs-py-10"},n={none:"my-0","01em":"my-01em","02em":"my-02em","03em":"my-03em","04em":"my-04em","05em":"my-05em","06em":"my-06em","07em":"my-07em","08em":"my-08em","09em":"my-09em","1em":"my-1em",base:"rs-my-0",1:"rs-my-1",2:"rs-my-2",3:"rs-my-3",4:"rs-my-4",5:"rs-my-5",6:"rs-my-6",7:"rs-my-7",8:"rs-my-8",9:"rs-my-9",10:"rs-my-10"},d={none:"mt-0","01em":"mt-01em","02em":"mt-02em","03em":"mt-03em","04em":"mt-04em","05em":"mt-05em","06em":"mt-06em","07em":"mt-07em","08em":"mt-08em","09em":"mt-09em","1em":"mt-1em",base:"rs-mt-0",1:"rs-mt-1",2:"rs-mt-2",3:"rs-mt-3",4:"rs-mt-4",5:"rs-mt-5",6:"rs-mt-6",7:"rs-mt-7",8:"rs-mt-8",9:"rs-mt-9",10:"rs-mt-10"},l={none:"","01em":"mb-01em","02em":"mb-02em","03em":"mb-03em","04em":"mb-04em","05em":"mb-05em","06em":"mb-06em","07em":"mb-07em","08em":"mb-08em","09em":"mb-09em","1em":"mb-1em",base:"rs-mb-0",1:"rs-mb-1",2:"rs-mb-2",3:"rs-mb-3",4:"rs-mb-4",5:"rs-mb-5",6:"rs-mb-6",7:"rs-mb-7",8:"rs-mb-8",9:"rs-mb-9",10:"rs-mb-10"}}},e=>{var t=t=>e(e.s=t);e.O(0,[231,790,173,130,215,744],()=>t(1722)),_N_E=e.O()}]);