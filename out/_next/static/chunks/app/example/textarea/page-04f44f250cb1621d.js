(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{6991:(e,i,t)=>{Promise.resolve().then(t.bind(t,4217)),Promise.resolve().then(t.bind(t,2117)),Promise.resolve().then(t.bind(t,9253)),Promise.resolve().then(t.bind(t,5218)),Promise.resolve().then(t.t.bind(t,6863,23)),Promise.resolve().then(t.t.bind(t,231,23))},4217:(e,i,t)=>{"use strict";t.r(i),t.d(i,{AnimateInView:()=>o});var d=t(7437),n=t(2265),a=t(8613),s=t(9168),l=t(7593),r=t(2351);let o=e=>{let{animation:i="zoomIn",once:t=!0,duration:o=.6,delay:C,children:c,className:u,...h}=e,p=(0,n.useRef)(null),y=(0,a.J)(),v=(0,s.Y)(p,{once:t});return"none"===i?(0,d.jsx)("div",{children:c}):(0,d.jsx)(l.E.div,{ref:p,variants:r.b[i],transition:{delay:C,duration:o,ease:"easeOut"},initial:"hidden",animate:v?"visible":y?"hiddenReduced":"hidden",className:u,...h,children:c})}},2351:(e,i,t)=>{"use strict";t.d(i,{b:()=>d});let d={fadeIn:{hidden:{opacity:0},hiddenReduced:{opacity:0},visible:{opacity:1}},zoomIn:{hidden:{opacity:0,scale:.6},hiddenReduced:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},zoomSharpen:{hidden:{opacity:.3,scale:.6,filter:"blur(20px)"},hiddenReduced:{opacity:.3,scale:.8,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}},sharpen:{hidden:{opacity:.3,filter:"blur(20px)"},hiddenReduced:{opacity:.3,filter:"blur(10px)"},visible:{opacity:1,filter:"blur(0px)"}},slideInFromLeft:{hidden:{opacity:0,x:-100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideInFromRight:{hidden:{opacity:0,x:100},hiddenReduced:{opacity:0,x:0},visible:{opacity:1,x:0}},slideUp:{hidden:{opacity:0,y:100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},slideDown:{hidden:{opacity:0,y:-100},hiddenReduced:{opacity:0,y:0},visible:{opacity:1,y:0}},bubble:{hidden:{opacity:0,height:0},hiddenReduced:{opacity:1,height:"auto"},visible:{opacity:1,height:"auto"}}}},2117:(e,i,t)=>{"use strict";t.r(i),t.d(i,{Parallax:()=>C});var d=t(7437),n=t(2265),a=t(8613),s=t(4445),l=t(949),r=t(9462),o=t(7593);let C=e=>{let{children:i,offset:t=60}=e,C=(0,a.J)(),c=(0,n.useRef)(null),{scrollYProgress:u}=(0,s.v)({target:c,offset:["start end","end start"]}),h=(0,l.H)(u,[0,1],[t,-t]),p=(0,r.q)(h,{stiffness:200,damping:30});return(0,d.jsx)(o.E.div,{ref:c,style:{y:C?0:p},children:i})}},9253:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>r});var d=t(7437),n=t(2265),a=t(7593),s=t(7382),l=t(1597);function r(){let[e,i]=(0,n.useState)("bg-digital-red"),[t,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{r(!0)},500);return()=>clearTimeout(e)},[]),(0,d.jsxs)("div",{className:"w-screen h-screen ".concat(e," transition-colors duration-[3000ms]"),children:[(0,d.jsx)(a.E.div,{className:"absolute top-0 left-0 w-full h-full z-10",animate:{backgroundColor:["#B1040E","#7A0000"]},transition:{duration:3},onAnimationComplete:()=>i("bg-cardinal-red-dark")}),(0,d.jsx)(s.M,{children:t&&(0,d.jsx)("div",{className:"absolute top-1/2 left-1/2 z-50",children:(0,d.jsx)(l.ShapeAnimation,{})})})]})}},1597:(e,i,t)=>{"use strict";t.r(i),t.d(i,{ShapeAnimation:()=>c});var d=t(7437),n=t(9075),a=t(949),s=t(742),l=t(7593),r=t(2265),o=t(5815);let C=["M0.500109 120.505C0.500109 73.5523 0.0549583 56.8291 56.0628 55.1827C54.2629 28.1046 67.9211 0 99.3185 0H231.904C276.099 0 275.603 55.0453 231.904 55.0453H66.048C62.5347 55.0453 59.2096 55.0902 56.0628 55.1827C57.7359 80.3527 72.7651 104.636 99.3185 104.636H269.147C336.185 104.636 340.898 149.329 306.39 199.353C275.603 243.985 150.962 412.096 128.12 442.346C114.041 460.99 96.7606 484.428 78.4623 491.441C40.0313 506.17 0.500109 484.004 0.500109 442.346V120.505Z","M38.1358 496C-3.71453 496 0.0900493 462.193 0.0900493 440.68L0.0900721 93.2246C0.0900725 47.1245 8.65042 47.1245 49.5496 47.1245C52.1079 47.1245 54.9749 47.1285 58.1099 47.1358V42.0023C58.1099 10.2444 85.6931 0.000103933 99.9603 5.76335e-05C131.318 -4.41265e-05 192.532 1.38215e-05 223.869 4.34863e-05L241.681 5.76335e-05C274.971 5.76335e-05 273.069 46.1001 241.681 47.1245C212.256 48.0849 105.095 47.2446 58.1099 47.1358V180.464C58.1099 215.311 76.7757 225.247 99.9603 209.88C186.106 152.786 241.203 110.89 265.176 92.52C289.148 74.1505 327 92.5201 327 125.302V448.876C327 482.682 311.782 496 265.176 496H38.1358Z","M129.086 0H372.664C421.588 0 439.588 41.5 401.088 77C376.383 99.7798 334.588 138 270.93 193.133H369.757C395.088 193.133 406.091 204.987 406.091 226.5V437C406.091 474.221 393.086 496 358.086 496H42.0877C14.5836 496 -44.4143 439.5 57.5876 358.5C80.5876 342 260.588 201.119 270.93 193.133H129.086C106.086 193.133 79.0904 182 79.0904 149.239C79.0903 126.476 79.0904 80.1499 79.0905 59.4143L79.0905 49.3805C79.0905 20.8496 97.0859 0 129.086 0Z","M719.092 496H40.9131C4.16393 496 -32.5858 431.985 49.265 396.078C62.9198 390.087 217.98 317.382 373.321 243.468V58.9903C373.321 32.5049 378.332 0 438.467 0H673.992C734.124 0 759.182 53.4123 673.992 97.5146C621.362 124.761 497.252 184.499 373.321 243.468V310.602C373.321 338.291 381.825 381.706 421.763 380.427C466.302 379 547.918 324.914 620.538 288.932C673.992 262.447 759.182 268.466 759.182 323.845V438.214C759.182 480.349 769.204 496 719.092 496Z","M387.627 492.977H388.024C426.977 492.977 461.17 466.497 471.159 428.608L549.486 131.202C557.795 99.6282 551.213 66.6457 531.398 40.7527C511.583 14.8597 481.592 0 449.103 0C402.098 0 360.81 31.9261 348.744 77.6321L315.625 203.012V86.5056C315.625 38.8043 277.045 0 229.619 0C190.642 0 156.45 26.4564 146.461 64.3687L67.7371 363.324V311.667V260.01L124.289 45.3304C127.159 34.4145 124.872 23.029 118.034 14.085C111.195 5.14104 100.832 0 89.6061 0C69.8377 0 53.7335 16.1743 53.7335 36.0812V258.179L0.916376 458.68C-1.25419 466.943 0.472928 475.582 5.65428 482.342C10.8356 489.127 18.6777 493 27.1732 493C39.4964 493 50.2792 484.643 53.4301 472.671L64.9831 428.796C83.2812 466.755 121.978 493 166.673 493C217.81 493 262.691 458.28 275.831 408.56L301.621 310.88V406.471C301.621 454.172 340.201 492.977 387.627 492.977Z","M223.626 284H223.398C196.066 284 173.833 261.645 173.833 234.165V179.096L158.97 235.368C151.398 264.012 125.532 284.014 96.0627 284.014C70.3051 284.014 48.0044 268.894 37.4592 247.026L30.8013 272.302C28.9855 279.199 22.7714 284.014 15.6696 284.014C10.7736 284.014 6.25429 281.782 3.2683 277.874C0.282312 273.979 -0.713018 269.002 0.53787 264.242L30.9761 148.735V20.7861C30.9761 9.31791 40.2569 0 51.6494 0C58.1191 0 64.091 2.96171 68.032 8.11429C71.973 13.2669 73.2911 19.8259 71.6367 26.1145L39.0464 149.79V209.308L84.4146 37.0823C90.1714 15.2413 109.876 0 132.338 0C159.67 0 181.903 22.3549 181.903 49.8352V116.954L200.989 44.7232C207.943 18.3924 231.737 0 258.826 0C277.549 0 294.833 8.56057 306.252 23.4773C317.672 38.3941 321.465 57.3951 316.676 75.5846L271.537 246.918C265.78 268.745 246.075 284 223.626 284ZM181.903 148.559V234.165C181.903 257.169 200.519 275.886 223.398 275.886H223.626C242.43 275.886 258.92 263.119 263.735 244.849L308.875 73.5154C313.018 57.7737 309.736 41.3423 299.863 28.427C289.977 15.5253 275.02 8.11429 258.826 8.11429C235.382 8.11429 214.803 24.0318 208.777 46.8059L181.89 148.546L181.903 148.559ZM41.0101 233.516C47.5739 257.899 69.7671 275.886 96.0627 275.886C122.358 275.886 144.538 258.359 151.169 233.272L173.833 147.491V49.8352C173.833 26.8312 155.218 8.11429 132.338 8.11429C113.535 8.11429 97.0445 20.8808 92.2293 39.1514L41.0101 233.516ZM30.9627 180.408L8.32565 266.311C7.72039 268.61 8.2046 271.017 9.6438 272.91C11.083 274.804 13.2754 275.886 15.6561 275.886C19.086 275.886 22.0989 273.56 22.9866 270.219L32.6709 233.462C31.5545 228.674 30.9627 223.684 30.9627 218.558V180.421V180.408ZM51.636 8.11429C44.6821 8.11429 39.0329 13.7943 39.0329 20.7861V118.103L63.822 24.0318C64.8308 20.2046 64.0372 16.2015 61.6296 13.064C59.222 9.92648 55.5904 8.11429 51.636 8.11429Z"],c=()=>{let[e,i]=(0,r.useState)(0),t=(0,n.c)(0),c=C.map((e,i)=>i),u=(0,a.H)(t,c,C,{mixer:(e,i)=>(0,o.interpolate)(e,i)});return(0,r.useEffect)(()=>{(0,s.j)(t,e,{duration:.5,ease:"easeInOut",delay:.5,onComplete:()=>{i(e+1)}})},[e,t]),(0,d.jsx)("div",{className:"cc rs-py-2",children:(0,d.jsx)(l.E.svg,{width:"100%",height:"500px",viewBox:"0 0 1820 1700",children:(0,d.jsx)(l.E.path,{d:u,fill:"#F83535"})})})}},5218:(e,i,t)=>{"use strict";t.d(i,{Skiplink:()=>s});var d=t(7437),n=t(2265),a=t(7697);let s=e=>{let{href:i="#main-content",children:t="Skip to main content",className:s,...l}=e,r=(0,n.useRef)(null);return(0,d.jsx)("a",{...l,ref:r,href:i,onFocus:()=>{var e;return null===(e=r.current)||void 0===e?void 0:e.scrollIntoView()},className:(0,a.c)("skiplink",s),children:t})}}},e=>{var i=i=>e(e.s=i);e.O(0,[231,260,173,130,215,744],()=>i(6991)),_N_E=e.O()}]);