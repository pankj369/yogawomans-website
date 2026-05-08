import{r as h,j as e,L as C,m as O,h as Z,c as K,s as J,a as X,b as Q,k as ee,v as te,y as ae,d as re,p as ne,G as R}from"./index-BiUW3aY9.js";import{F as W,a as ie,b as se,c as oe,d as le,e as de,f as ce,g as pe,h as ge}from"./index-vb6mB0zv.js";import{h as ue}from"./herobg-BwR66x1K.js";import{p as me,h as he,a as xe}from"./parental-BS5fwJbK.js";const B="/assets/navlogo-DNS0k7I1.png",U=[{label:"Home",href:"#home"},{label:"Discover Yoga",href:"#discover"},{label:"Live Schedules",href:"#events"},{label:"Shop",href:"#footer"}];function fe(){const[t,a]=h.useState(!1),[r,n]=h.useState(!1),[l,o]=h.useState(0);return h.useEffect(()=>{const i=document.getElementById("home");i&&o(i.offsetHeight)},[]),h.useEffect(()=>{const i=()=>{const d=window.scrollY>l;a(d)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[l]),e.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${t?"border-b border-white/20 bg-transparent backdrop-blur-xl":"bg-white"}`,children:[e.jsxs("nav",{className:"section-container flex h-20 items-center justify-between","aria-label":"Main navigation",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("a",{href:"#home",className:"flex items-center",children:e.jsx("img",{src:B,alt:"YogaWomans Logo",className:`\r
              relative\r
              top-1\r
            \r
              block\r
              h-14\r
              w-auto\r
              object-contain\r
              align-middle\r
\r
              sm:h-16\r
              md:h-[72px]\r
              `})}),e.jsx("span",{className:`
            hidden
            xl:block

            text-xs
            font-heading
            font-medium
            uppercase
            tracking-[0.14em]
            transition-colors
            ${t?"text-white":"text-gray-700"}
            `,children:"Why should all superheroes be men?"})]}),e.jsx("ul",{className:`\r
          hidden\r
          items-center\r
\r
          gap-4\r
          lg:flex\r
          xl:gap-6\r
          `,children:U.map(i=>e.jsx("li",{children:e.jsx("a",{href:i.href,className:`
                font-heading
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                transition-colors
                ${t?"text-white hover:text-primaryOrange":"text-gray-800 hover:text-primaryOrange"}
                `,children:i.label})},i.label))}),e.jsxs("div",{className:`\r
          hidden\r
          items-center\r
          gap-3\r
\r
          lg:flex\r
          `,children:[e.jsx(C,{to:"/login",className:`
            rounded-full
            border
            px-5
            py-2
            text-sm
            font-heading
            font-medium
            transition-all
            ${t?"border-white/70 text-white hover:bg-white/15":"border-gray-800 text-gray-800 hover:bg-gray-100"}
            `,children:"Login"}),e.jsx(C,{to:"/auth",className:`\r
            rounded-full\r
            bg-primaryOrange\r
            px-5\r
            py-2\r
            text-sm\r
            font-heading\r
            font-bold\r
            text-white\r
            shadow-soft\r
            transition\r
            hover:-translate-y-0.5\r
            `,children:"Upgrade"})]}),e.jsx("button",{type:"button",className:`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          transition-colors
          ${t?"border-white/60 text-white":"border-gray-800 text-gray-800"}

          lg:hidden
          `,"aria-label":"Toggle menu",onClick:()=>n(i=>!i),children:r?e.jsx(W,{}):e.jsx(ie,{})})]}),r&&e.jsx("div",{className:`\r
    fixed\r
    inset-0\r
    z-[999]\r
    bg-black/40\r
    backdrop-blur-[2px]\r
    lg:hidden\r
    `,onClick:()=>n(!1),children:e.jsxs("div",{onClick:i=>i.stopPropagation(),className:`\r
      absolute\r
      right-0\r
      top-0\r
\r
      h-screen\r
      w-[80%]\r
      max-w-[340px]\r
\r
      bg-[#f6f1ec]\r
      shadow-2xl\r
\r
      px-6\r
      py-8\r
\r
      animate-slideLeft\r
      `,children:[e.jsxs("div",{className:"mb-10 flex items-center justify-between",children:[e.jsx("img",{src:B,alt:"YogaWomans Logo",className:"h-14 w-auto object-contain"}),e.jsx("button",{onClick:()=>n(!1),className:`\r
          flex\r
          h-10\r
          w-10\r
          items-center\r
          justify-center\r
          rounded-full\r
          border\r
          border-black/20\r
          text-black\r
          `,children:e.jsx(W,{})})]}),e.jsx("ul",{className:"space-y-7",children:U.map(i=>e.jsx("li",{children:e.jsx("a",{href:i.href,onClick:()=>n(!1),className:`\r
              block\r
              font-heading\r
              text-sm\r
              font-semibold\r
              uppercase\r
              tracking-[0.18em]\r
              text-darkText\r
              transition\r
              hover:text-primaryOrange\r
              `,children:i.label})},i.label))}),e.jsxs("div",{className:"mt-10 flex gap-3",children:[e.jsx(C,{to:"/login",className:`\r
          rounded-full\r
          border\r
          border-primaryBlue\r
          px-5\r
          py-2\r
          text-sm\r
          font-heading\r
          text-primaryBlue\r
          `,children:"Login"}),e.jsx(C,{to:"/pricing",className:`\r
          rounded-full\r
          bg-primaryOrange\r
          px-5\r
          py-2\r
          text-sm\r
          font-heading\r
          text-white\r
          `,children:"Upgrade"})]})]})})]})}function be(){return e.jsx("section",{id:"home",className:"relative overflow-hidden bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${ue})`},children:e.jsxs("div",{className:"section-container relative z-10 flex min-h-screen flex-col px-3 pt-24",children:[e.jsxs("div",{className:"grid flex-1 items-center gap-4 lg:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col justify-center text-center lg:text-left",children:[e.jsxs(O.h1,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{duration:.8},className:`\r
  font-heading\r
  font-extrabold\r
  leading-[0.9]\r
\r
  [paint-order:stroke_fill]\r
  [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]\r
\r
  drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)]\r
\r
  text-[2.5rem]\r
  sm:text-[3.2rem]\r
  md:text-[4rem]\r
  lg:text-[5rem]\r
  xl:text-[5.8rem]\r
  `,children:[e.jsx("span",{className:"block text-primaryBlue",children:"Find Balance."}),e.jsx("span",{className:"block text-primaryOrange",children:"Inner Peace."}),e.jsx("span",{className:"block text-primaryGreen",children:"Better You."})]}),e.jsx(O.p,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:`\r
  mx-auto\r
  mt-4\r
  max-w-xl\r
\r
  text-sm\r
  leading-relaxed\r
\r
  text-white\r
\r
  drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]\r
\r
  sm:text-base\r
  md:text-lg\r
  lg:mx-0\r
  `,children:"Yoga and meditation for a healthier body, calmer mind, and happier life."}),e.jsxs(O.div,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.8,delay:.35},className:`\r
              mt-5\r
              flex\r
              flex-wrap\r
              items-center\r
              justify-center\r
              gap-3\r
\r
              lg:justify-start\r
              `,children:[e.jsx(C,{to:"/auth",className:`\r
                rounded-full\r
                bg-primaryOrange\r
                px-7\r
                py-3\r
                font-heading\r
                text-sm\r
                font-bold\r
                text-white\r
                shadow-soft\r
                transition\r
                duration-300\r
                hover:-translate-y-1\r
                `,children:"Explore Classes"}),e.jsx("a",{href:"#about",className:`\r
                rounded-full\r
                border-2\r
                border-primaryGreen\r
                px-6\r
                py-3\r
                font-heading\r
                text-sm\r
                font-semibold\r
                text-primaryGreen\r
                transition\r
                duration-300\r
                hover:bg-primaryGreen\r
                hover:text-white\r
                `,children:"Learn More"})]})]}),e.jsx(O.div,{initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{duration:1},className:`\r
            flex\r
            items-center\r
            justify-center\r
\r
            lg:justify-end\r
            `,children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:`\r
              absolute\r
              bottom-8\r
              right-8\r
              h-32\r
              w-32\r
              rounded-full\r
              bg-primaryOrange/20\r
              blur-3xl\r
\r
              sm:h-40\r
              sm:w-40\r
              md:h-48\r
              md:w-48\r
              `}),e.jsx("img",{src:Z,alt:"Yoga Woman",className:`\r
                relative\r
                z-10\r
                object-contain\r
\r
                w-[240px]\r
                sm:w-[280px]\r
                md:w-[380px]\r
                lg:w-[540px]\r
                xl:w-[680px]\r
                `})]})})]}),e.jsx("div",{className:`\r
        relative\r
        overflow-hidden\r
        border-t\r
        border-white/20\r
        py-3\r
        `,children:e.jsxs("div",{className:`\r
          animate-marquee\r
          flex\r
          min-w-max\r
          items-center\r
          gap-10\r
          `,children:[e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs",children:"Surya Namaskar Classes"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs",children:"Spiritual Wellness Journey"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs",children:"Sacred Flow"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs",children:"Breath • Balance • Harmony"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryBlue sm:text-xs",children:"Mindfulness & Meditation"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryOrange sm:text-xs",children:"Surya Namaskar Classes"}),e.jsx("span",{className:"font-heading text-[10px] uppercase tracking-[0.3em] text-primaryGreen sm:text-xs",children:"Spiritual Wellness Journey"})]})})]})})}var T={},F={exports:{}};(function(t,a){(function(r,n){n(a)})(K,function(r){var n=function(){return n=Object.assign||function(o){for(var i,d=1,c=arguments.length;d<c;d++)for(var s in i=arguments[d])Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s]);return o},n.apply(this,arguments)},l=function(){function o(i,d,c){var s=this;this.endVal=d,this.options=c,this.version="2.10.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",autoAnimate:!1,autoAnimateDelay:200,autoAnimateOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(p){s.startTime||(s.startTime=p);var g=p-s.startTime;s.remaining=s.duration-g,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(g,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(g,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(g/s.duration);var m=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=m?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),g<s.duration?s.rAF=requestAnimationFrame(s.count):s.finalEndVal!==null?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(p){var g,m,y,v,k=p<0?"-":"";g=Math.abs(p).toFixed(s.options.decimalPlaces);var b=(g+="").split(".");if(m=b[0],y=b.length>1?s.options.decimal+b[1]:"",s.options.useGrouping){v="";for(var S=3,f=0,j=0,N=m.length;j<N;++j)s.options.useIndianSeparators&&j===4&&(S=2,f=1),j!==0&&f%S==0&&(v=s.options.separator+v),f++,v=m[N-j-1]+v;m=v}return s.options.numerals&&s.options.numerals.length&&(m=m.replace(/[0-9]/g,function(w){return s.options.numerals[+w]}),y=y.replace(/[0-9]/g,function(w){return s.options.numerals[+w]})),k+s.options.prefix+m+y+s.options.suffix},this.easeOutExpo=function(p,g,m,y){return m*(1-Math.pow(2,-10*p/y))*1024/1023+g},this.options=n(n({},this.defaults),c),this.options.enableScrollSpy&&(this.options.autoAnimate=!0),this.options.scrollSpyDelay!==void 0&&(this.options.autoAnimateDelay=this.options.scrollSpyDelay),this.options.scrollSpyOnce&&(this.options.autoAnimateOnce=!0),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el=typeof i=="string"?document.getElementById(i):i,d=d??this.parse(this.el.innerHTML),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(d),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.autoAnimate&&(this.error||typeof IntersectionObserver>"u"?this.error?console.error(this.error,i):console.error("IntersectionObserver is not supported by this browser"):this.setupObserver())}return o.prototype.setupObserver=function(){var i=this,d=o.observedElements.get(this.el);d&&d.unobserve(),o.observedElements.set(this.el,this),this.observer=new IntersectionObserver(function(c){for(var s=0,p=c;s<p.length;s++){var g=p[s];g.isIntersecting&&i.paused&&!i.once?(i.paused=!1,i.autoAnimateTimeout=setTimeout(function(){return i.start()},i.options.autoAnimateDelay),i.options.autoAnimateOnce&&(i.once=!0,i.observer.disconnect())):g.isIntersecting||i.paused||(clearTimeout(i.autoAnimateTimeout),i.reset())}},{threshold:0}),this.observer.observe(this.el)},o.prototype.unobserve=function(){var i;clearTimeout(this.autoAnimateTimeout),(i=this.observer)===null||i===void 0||i.disconnect(),o.observedElements.delete(this.el)},o.prototype.onDestroy=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.unobserve(),this.options.onCompleteCallback=null,this.options.onStartCallback=null},o.prototype.determineDirectionAndSmartEasing=function(){var i=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>i;var d=i-this.startVal;if(Math.abs(d)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=i;var c=this.countDown?1:-1;this.endVal=i+c*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=i,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},o.prototype.start=function(i){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),i&&(this.options.onCompleteCallback=i),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},o.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},o.prototype.reset=function(){clearTimeout(this.autoAnimateTimeout),cancelAnimationFrame(this.rAF),this.paused=!0,this.once=!1,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},o.prototype.update=function(i){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(i),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},o.prototype.printValue=function(i){var d;if(this.el){var c=this.formattingFn(i);!((d=this.options.plugin)===null||d===void 0)&&d.render?this.options.plugin.render(this.el,c):this.el.tagName==="INPUT"?this.el.value=c:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=c:this.el.innerHTML=c}},o.prototype.ensureNumber=function(i){return typeof i=="number"&&!isNaN(i)},o.prototype.validateValue=function(i){var d=Number(i);return this.ensureNumber(d)?d:(this.error="[CountUp] invalid start or end value: ".concat(i),null)},o.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},o.prototype.parse=function(i){var d=function(g){return g.replace(/([.,'  ])/g,"\\$1")},c=d(this.options.separator),s=d(this.options.decimal),p=i.replace(new RegExp(c,"g"),"").replace(new RegExp(s,"g"),".");return parseFloat(p)},o.observedElements=new WeakMap,o}();r.CountUp=l})})(F,F.exports);var ye=F.exports;Object.defineProperty(T,"__esModule",{value:!0});var x=h,ve=ye;function we(t,a){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n,l,o,i,d=[],c=!0,s=!1;try{if(o=(r=r.call(t)).next,a!==0)for(;!(c=(n=o.call(r)).done)&&(d.push(n.value),d.length!==a);c=!0);}catch(p){s=!0,l=p}finally{try{if(!c&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw l}}return d}}function H(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,n)}return r}function I(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?H(Object(r),!0).forEach(function(n){ke(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function je(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Ne(t){var a=je(t,"string");return typeof a=="symbol"?a:String(a)}function ke(t,a,r){return a=Ne(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function V(){return V=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},V.apply(this,arguments)}function Ee(t,a){if(t==null)return{};var r={},n=Object.keys(t),l,o;for(o=0;o<n.length;o++)l=n[o],!(a.indexOf(l)>=0)&&(r[l]=t[l]);return r}function q(t,a){if(t==null)return{};var r=Ee(t,a),n,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Ae(t,a){return Ce(t)||we(t,a)||Se(t,a)||Pe()}function Ce(t){if(Array.isArray(t))return t}function Se(t,a){if(t){if(typeof t=="string")return _(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,a)}}function _(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,n=new Array(a);r<a;r++)n[r]=t[r];return n}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ye=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?x.useLayoutEffect:x.useEffect;function E(t){var a=x.useRef(t);return Ye(function(){a.current=t}),x.useCallback(function(){for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return a.current.apply(void 0,n)},[])}var ze=function(a,r){var n=r.decimal,l=r.decimals,o=r.duration,i=r.easingFn,d=r.end,c=r.formattingFn,s=r.numerals,p=r.prefix,g=r.separator,m=r.start,y=r.suffix,v=r.useEasing,k=r.useGrouping,b=r.useIndianSeparators,S=r.enableScrollSpy,f=r.scrollSpyDelay,j=r.scrollSpyOnce,N=r.plugin;return new ve.CountUp(a,d,{startVal:m,duration:o,decimal:n,decimalPlaces:l,easingFn:i,formattingFn:c,numerals:s,separator:g,prefix:p,suffix:y,plugin:N,useEasing:v,useIndianSeparators:b,useGrouping:k,enableScrollSpy:S,scrollSpyDelay:f,scrollSpyOnce:j})},Me=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],Oe={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},$=function(a){var r=Object.fromEntries(Object.entries(a).filter(function(A){var z=Ae(A,2),M=z[1];return M!==void 0})),n=x.useMemo(function(){return I(I({},Oe),r)},[a]),l=n.ref,o=n.startOnMount,i=n.enableReinitialize,d=n.delay,c=n.onEnd,s=n.onStart,p=n.onPauseResume,g=n.onReset,m=n.onUpdate,y=q(n,Me),v=x.useRef(),k=x.useRef(),b=x.useRef(!1),S=E(function(){return ze(typeof l=="string"?l:l.current,y)}),f=E(function(A){var z=v.current;if(z&&!A)return z;var M=S();return v.current=M,M}),j=E(function(){var A=function(){return f(!0).start(function(){c==null||c({pauseResume:N,reset:w,start:Y,update:P})})};d&&d>0?k.current=setTimeout(A,d*1e3):A(),s==null||s({pauseResume:N,reset:w,update:P})}),N=E(function(){f().pauseResume(),p==null||p({reset:w,start:Y,update:P})}),w=E(function(){f().el&&(k.current&&clearTimeout(k.current),f().reset(),g==null||g({pauseResume:N,start:Y,update:P}))}),P=E(function(A){f().update(A),m==null||m({pauseResume:N,reset:w,start:Y})}),Y=E(function(){w(),j()}),L=E(function(A){o&&(A&&w(),j())});return x.useEffect(function(){b.current?i&&L(!0):(b.current=!0,L())},[i,b,L,d,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.formattingFn]),x.useEffect(function(){return function(){w()}},[w]),{start:Y,pauseResume:N,reset:w,update:P,getCountUp:f}},Ie=["className","redraw","containerProps","children","style"],Le=function(a){var r=a.className,n=a.redraw,l=a.containerProps,o=a.children,i=a.style,d=q(a,Ie),c=x.useRef(null),s=x.useRef(!1),p=$(I(I({},d),{},{ref:c,startOnMount:typeof o!="function"||a.delay===0,enableReinitialize:!1})),g=p.start,m=p.reset,y=p.update,v=p.pauseResume,k=p.getCountUp,b=E(function(){g()}),S=E(function(N){a.preserveValue||m(),y(N)}),f=E(function(){if(typeof a.children=="function"&&!(c.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}k()});x.useEffect(function(){f()},[f]),x.useEffect(function(){s.current&&S(a.end)},[a.end,S]);var j=n&&a;return x.useEffect(function(){n&&s.current&&b()},[b,n,j]),x.useEffect(function(){!n&&s.current&&b()},[b,n,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.className,a.formattingFn]),x.useEffect(function(){s.current=!0},[]),typeof o=="function"?o({countUpRef:c,start:g,reset:m,update:y,pauseResume:v,getCountUp:k}):x.createElement("span",V({className:r,ref:c,style:i},l),typeof a.start<"u"?k().formattingFn(a.start):"")};T.default=Le;T.useCountUp=$;const Fe=[{icon:"🌿",title:"Ancient Roots",desc:"Grounded in 5000+ years of yogic tradition and wisdom."},{icon:"💡",title:"Modern Approach",desc:"Science-backed methods tailored for today's lifestyle."},{icon:"🤝",title:"Community First",desc:"A nurturing space where every journey is celebrated."}],Ve=[{icon:"✓",label:"Certified Instructors"},{icon:"✓",label:"Trusted by 10k+ Students"},{icon:"✓",label:"Online & Offline Classes"}];if(!document.head.querySelector("[data-yoga-about]")){const t=document.createElement("style");t.setAttribute("data-yoga-about","true"),t.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yoga-fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes yoga-scaleIn {
      from { opacity: 0; transform: scale(0.88); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes yoga-floatOrb {
      0%, 100% { transform: translateY(0px) scale(1); }
      50%       { transform: translateY(-18px) scale(1.04); }
    }
    @keyframes yoga-rotateLotus {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes yoga-countUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes yoga-floatingImage {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }

    .yoga-about-section *,
    .yoga-about-section *::before,
    .yoga-about-section *::after {
      box-sizing: border-box;
    }

    .yoga-about-section {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(180deg, #ffffff 0%, #f6fbf3 100%);
      padding: 90px 28px;
      position: relative;
      overflow: hidden;
    }

    /* ---------- Background orbs ---------- */
    .yoga-orb {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .yoga-orb-1 {
      width: 420px; height: 420px;
      top: -140px; left: -120px;
      background: radial-gradient(circle, rgba(46,125,50,0.07) 0%, transparent 70%);
      animation: yoga-floatOrb 7s ease-in-out infinite;
    }
    .yoga-orb-2 {
      width: 320px; height: 320px;
      bottom: -100px; right: -80px;
      background: radial-gradient(circle, rgba(232,101,26,0.07) 0%, transparent 70%);
      animation: yoga-floatOrb 9s ease-in-out infinite reverse;
    }
    .yoga-orb-3 {
      width: 200px; height: 200px;
      top: 40%; left: 50%;
      transform: translateX(-50%);
      background: radial-gradient(circle, rgba(46,125,50,0.04) 0%, transparent 70%);
      animation: yoga-floatOrb 11s ease-in-out infinite;
    }

    /* ---------- Inner layout ---------- */
    .yoga-about-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 72px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    /* ---------- LEFT SIDE ---------- */
    .yoga-left { }

    .yoga-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(46,125,50,0.09);
      color: #2E7D32;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 7px 18px;
      border-radius: 50px;
      margin-bottom: 22px;
      border: 1px solid rgba(46,125,50,0.18);
    }

    .yoga-heading {
      font-size: 42px;
      font-weight: 800;
      color: #1A2E1A;
      line-height: 1.18;
      margin: 0 0 24px;
    }
    .yoga-heading .accent-orange { color: #E8651A; }
    .yoga-heading .accent-green  { color: #2E7D32; }

    .yoga-desc {
      font-family: 'Lato', sans-serif;
      font-size: 16.5px;
      color: #555;
      line-height: 1.8;
      margin: 0 0 32px;
      max-width: 480px;
    }

    /* Feature pills */
    .yoga-features {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 38px;
    }
    .yoga-feature-pill {
      display: flex;
      align-items: center;
      gap: 14px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(46,125,50,0.12);
      border-radius: 18px;
      padding: 18px 20px;
      backdrop-filter: blur(18px);
      transition: transform 0.28s ease, border-color 0.28s ease, background 0.28s ease;
    }
    .yoga-feature-pill:hover {
      border-color: rgba(46,125,50,0.24);
      background: rgba(46,125,50,0.08);
      transform: translateX(4px);
    }
    .yoga-pill-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    .yoga-pill-title {
      font-size: 14px;
      font-weight: 700;
      color: #1A2E1A;
      margin: 0 0 4px;
    }
    .yoga-pill-desc {
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      color: #777;
      margin: 0;
    }

    /* CTA button */
    .yoga-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, rgba(46,125,50,0.95), rgba(232,101,26,0.95));
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 700;
      padding: 16px 38px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.18);
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      box-shadow: 0 18px 40px rgba(46,125,50,0.18);
      transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .yoga-cta-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 38%);
      opacity: 0.4;
      transition: opacity 0.3s ease;
    }
    .yoga-cta-btn:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 24px 54px rgba(232,101,26,0.22);
    }
    .yoga-cta-btn:hover::before {
      opacity: 0.55;
    }
    .yoga-cta-btn .arrow {
      font-size: 18px;
      transition: transform 0.3s ease;
      position: relative;
      display: inline-flex;
    }
    .yoga-cta-btn:hover .arrow {
      transform: translateX(5px);
    }

    .yoga-trust-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 28px;
    }
    .yoga-trust-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 999px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(46,125,50,0.12);
      font-size: 12px;
      font-weight: 700;
      color: #1A2E1A;
      backdrop-filter: blur(16px);
      transition: transform 0.25s ease, border-color 0.25s ease;
    }
    .yoga-trust-badge:hover {
      transform: translateY(-2px);
      border-color: rgba(46,125,50,0.24);
    }

    /* ---------- RIGHT SIDE ---------- */
    .yoga-right {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

.yoga-image-panel {
      position: relative;
      overflow: hidden;
      border-radius: 34px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(46,125,50,0.16);
      box-shadow: 0 30px 70px rgba(46,125,50,0.08);
      padding: 24px;
      backdrop-filter: blur(20px);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .yoga-image-panel:hover {
      transform: translateY(-5px);
      box-shadow: 0 36px 88px rgba(46,125,50,0.14);
    }
    .yoga-image-glow {
      position: absolute;
      inset: -24px;
      background: radial-gradient(circle at 50% 20%, rgba(232,101,26,0.16), transparent 42%);
      filter: blur(32px);
      pointer-events: none;
      z-index: 0;
    }
    .yoga-yoga-image {
      position: relative;
      width: 100%;
      height: auto;
      border-radius: 28px;
      object-fit: cover;
      box-shadow: 0 18px 40px rgba(0,0,0,0.12);
      animation: yoga-floatingImage 12s ease-in-out infinite;
      z-index: 1;
    }
    .yoga-image-label {
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 999px;
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(232,101,26,0.16);
      color: #1A2E1A;
      font-size: 12px;
      font-weight: 700;
      backdrop-filter: blur(16px);
      z-index: 2;
    }

    .yoga-visual-card {
      background: rgba(255,255,255,0.72);
      border: 1px solid rgba(46,125,50,0.15);
      border-radius: 28px;
      padding: 40px 34px;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(24px);
      box-shadow: 0 22px 60px rgba(46,125,50,0.1);
    }
    .yoga-visual-card::before {
      content: '';
      position: absolute;
      top: -28px;
      right: -28px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: rgba(232,101,26,0.12);
      filter: blur(16px);
    }
    .yoga-visual-card::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: -20px;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background: rgba(46,125,50,0.10);
      filter: blur(14px);
    }

    .yoga-quote-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 66px;
      height: 66px;
      border-radius: 50%;
      background: rgba(46,125,50,0.12);
      color: #2E7D32;
      font-size: 32px;
      margin-bottom: 22px;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
    }
    .yoga-quote {
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      font-style: italic;
      color: #1A2E1A;
      font-weight: 700;
      line-height: 1.75;
      margin: 0 0 18px;
      position: relative;
      z-index: 1;
    }
    .yoga-quote-attr {
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      color: #66755c;
      margin: 0;
      position: relative;
      z-index: 1;
    }
    .yoga-quote-lotus {
      position: absolute;
      right: 24px;
      top: 30px;
      font-size: 24px;
      color: rgba(232,101,26,0.24);
      animation: yoga-rotateLotus 16s linear infinite;
      z-index: 0;
    }

    .yoga-stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .yoga-stat-card {
      background: rgba(255,255,255,0.72);
      border: 1.5px solid rgba(46,125,50,0.14);
      border-radius: 22px;
      padding: 24px 18px;
      text-align: center;
      transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
      cursor: default;
      backdrop-filter: blur(18px);
    }
    .yoga-stat-card:hover {
      border-color: rgba(46,125,50,0.22);
      transform: translateY(-6px);
      box-shadow: 0 18px 34px rgba(46,125,50,0.12);
    }
    .yoga-stat-icon {
      font-size: 28px;
      margin-bottom: 12px;
    }
    .yoga-stat-value {
      font-size: 32px;
      font-weight: 800;
      color: #1A2E1A;
      line-height: 1.05;
      margin-bottom: 8px;
    }
    .yoga-stat-value span {
      color: #E8651A;
    }
    .yoga-stat-label {
      font-family: 'Lato', sans-serif;
      font-size: 12px;
      color: #888;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ---------- Divider ---------- */
    .yoga-section-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 64px;
      position: relative;
      z-index: 1;
    }
    .yoga-div-line {
      flex: 1;
      max-width: 160px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(46,125,50,0.3), transparent);
    }

    /* ---------- Animations on mount ---------- */
    .yoga-anim-left {
      animation: yoga-fadeUp 0.7s ease both;
    }
    .yoga-anim-right {
      animation: yoga-scaleIn 0.7s 0.2s ease both;
    }
    .yoga-anim-stat {
      animation: yoga-countUp 0.5s ease both;
    }
    .yoga-anim-stat:nth-child(1) { animation-delay: 0.1s; }
    .yoga-anim-stat:nth-child(2) { animation-delay: 0.2s; }
    .yoga-anim-stat:nth-child(3) { animation-delay: 0.3s; }
    .yoga-anim-stat:nth-child(4) { animation-delay: 0.4s; }

    /* ---------- Responsive ---------- */
    @media (max-width: 768px) {
      .yoga-about-inner {
        grid-template-columns: 1fr;
        gap: 48px;
      }
      .yoga-heading { font-size: 32px; }
      .yoga-right { order: -1; }
      .yoga-trust-grid { grid-template-columns: 1fr; }
      .yoga-image-panel { padding: 20px; }
    }
  `,document.head.appendChild(t)}function De(){const[t,a]=h.useState(!1),[r,n]=h.useState(0),l=h.useRef(null);return h.useEffect(()=>{const o=new IntersectionObserver(([i])=>{i.isIntersecting&&a(!0)},{threshold:.15});return l.current&&o.observe(l.current),()=>o.disconnect()},[]),h.useEffect(()=>{const o=()=>{if(!l.current)return;const i=l.current.getBoundingClientRect().top;n(Math.max(-28,Math.min(28,-i*.04)))};return window.addEventListener("scroll",o,{passive:!0}),o(),()=>window.removeEventListener("scroll",o)},[]),e.jsxs("section",{className:"yoga-about-section",ref:l,children:[e.jsx("div",{className:"yoga-orb yoga-orb-1","aria-hidden":"true"}),e.jsx("div",{className:"yoga-orb yoga-orb-2","aria-hidden":"true"}),e.jsx("div",{className:"yoga-orb yoga-orb-3","aria-hidden":"true"}),e.jsxs("div",{className:"yoga-about-inner",children:[e.jsxs("div",{className:`yoga-left ${t?"yoga-anim-left":""}`,style:{opacity:t?1:0},children:[e.jsxs("div",{className:"yoga-badge",children:[e.jsx("span",{children:"🌿"})," Who We Are"]}),e.jsxs("h2",{className:"yoga-heading",children:["Ancient ",e.jsx("span",{className:"accent-orange",children:"Wisdom,"}),e.jsx("br",{}),"Modern ",e.jsx("span",{className:"accent-green",children:"Wellness"})]}),e.jsx("p",{className:"yoga-desc",children:"At YOGAWOMANS, we believe that true wellness begins from within. Founded on the timeless principles of yoga, we bring together expert instructors, personalized programs, and a supportive community to help you transform your mind, body, and soul."}),e.jsx("div",{className:"yoga-features",children:Fe.map(o=>e.jsxs("div",{className:"yoga-feature-pill",children:[e.jsx("span",{className:"yoga-pill-icon","aria-hidden":"true",children:o.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"yoga-pill-title",children:o.title}),e.jsx("p",{className:"yoga-pill-desc",children:o.desc})]})]},o.title))}),e.jsxs(C,{to:"/auth",className:"yoga-cta-btn",style:{display:"inline-block"},children:["Discover Our Story",e.jsx("span",{className:"arrow","aria-hidden":"true",children:"→"})]}),e.jsx("div",{className:"yoga-trust-grid",children:Ve.map(o=>e.jsxs("div",{className:"yoga-trust-badge",children:[e.jsx("span",{"aria-hidden":"true",children:o.icon}),e.jsx("span",{children:o.label})]},o.label))})]}),e.jsxs("div",{className:`yoga-right ${t?"yoga-anim-right":""}`,style:{opacity:t?1:0},children:[e.jsxs("div",{className:"yoga-image-panel",style:{transform:`translateY(${r}px)`},children:[e.jsx("div",{className:"yoga-image-glow","aria-hidden":"true"}),e.jsx("img",{src:J,alt:"Yoga woman practicing wellness",className:"sacredimage"}),e.jsx("div",{className:"yoga-image-label",children:"Sacred Flow"})]}),e.jsxs("div",{className:"yoga-visual-card",children:[e.jsx("div",{className:"yoga-quote-icon","aria-hidden":"true",children:"“"}),e.jsxs("p",{className:"yoga-quote",children:['"Yoga is not about touching your toes.',e.jsx("br",{}),`It's about what you learn on the way down."`]}),e.jsx("p",{className:"yoga-quote-attr",children:"— Jigar Gor"}),e.jsx("div",{className:"yoga-quote-lotus","aria-hidden":"true",children:"🪷"})]})]})]}),e.jsxs("div",{className:"yoga-section-divider","aria-hidden":"true",children:[e.jsx("div",{className:"yoga-div-line"}),e.jsx("span",{style:{fontSize:20},children:"🪷"}),e.jsx("div",{className:"yoga-div-line"})]})]})}if(!document.head.querySelector("[data-yoga-why]")){const t=document.createElement("style");t.setAttribute("data-yoga-why","true"),t.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yw-fadeUp {
      from{opacity:0;transform:translateY(24px);}
      to{opacity:1;transform:translateY(0);}
    }

    .yw-section {
      font-family:'Poppins',sans-serif;
      background:linear-gradient(180deg,#1A2E1A 0%,#0f1f0f 100%);
      padding:90px 28px;position:relative;overflow:hidden;
    }

    .yw-orb {
      position:absolute;border-radius:50%;pointer-events:none;
    }
    .yw-orb-1{width:400px;height:400px;top:-100px;left:-100px;
      background:radial-gradient(circle,rgba(46,125,50,0.15) 0%,transparent 70%);}
    .yw-orb-2{width:350px;height:350px;bottom:-80px;right:-80px;
      background:radial-gradient(circle,rgba(232,101,26,0.12) 0%,transparent 70%);}

    .yw-inner{max-width:1100px;margin:0 auto;position:relative;z-index:1;}

    .yw-top{text-align:center;margin-bottom:60px;animation:yw-fadeUp 0.6s ease both;}
    .yw-heading{
      font-size:42px;font-weight:800;color:#ffffff;margin:0 0 6px;line-height:1.2;
    }
    .yw-heading .acc{color:#E8651A;}
    .yw-subtext{
      font-family:'Lato',sans-serif;font-size:16px;color:rgba(255,255,255,0.6);
      max-width:400px;margin:12px auto 0;line-height:1.7;
    }

    .yw-divider{
      display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:56px;
    }
    .yw-div-line{width:60px;height:2px;background:#E8651A;border-radius:2px;}

    .yw-grid{
      display:grid;grid-template-columns:repeat(3,1fr);gap:24px;
    }

    .yw-card {
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:22px;padding:36px 28px;
      transition:all 0.28s;cursor:default;
      position:relative;overflow:hidden;
    }
    .yw-card::before {
      content:'';position:absolute;inset:0;
      background:linear-gradient(135deg,rgba(46,125,50,0.08),transparent);
      opacity:0;transition:opacity 0.28s;border-radius:22px;
    }
    .yw-card:hover{
      border-color:rgba(46,125,50,0.4);
      background:rgba(255,255,255,0.07);
      transform:translateY(-6px);
      box-shadow:0 20px 40px rgba(0,0,0,0.3);
    }
    .yw-card:hover::before{opacity:1;}

    .yw-icon-wrap{
      width:64px;height:64px;border-radius:18px;
      background:rgba(46,125,50,0.15);border:1px solid rgba(46,125,50,0.25);
      display:flex;align-items:center;justify-content:center;
      font-size:30px;margin-bottom:20px;transition:all 0.28s;
    }
    .yw-card:hover .yw-icon-wrap{
      background:rgba(232,101,26,0.2);border-color:rgba(232,101,26,0.4);
      transform:scale(1.08);
    }

    .yw-card-title{
      font-size:17px;font-weight:700;color:#fff;margin:0 0 10px;
    }
    .yw-card-desc{
      font-family:'Lato',sans-serif;font-size:14px;
      color:rgba(255,255,255,0.55);line-height:1.7;margin:0;
    }

    .yw-card-num{
      position:absolute;top:20px;right:22px;
      font-size:48px;font-weight:800;
      color:rgba(255,255,255,0.04);line-height:1;
      font-variant-numeric:tabular-nums;
    }

    @media(max-width:900px){.yw-grid{grid-template-columns:1fr 1fr;}}
    @media(max-width:560px){
      .yw-grid{grid-template-columns:1fr;}
      .yw-heading{font-size:28px;}
    }
  `,document.head.appendChild(t)}const Re=[{icon:"🧑‍🏫",title:"Expert Instructors",desc:"Certified yoga teachers with 10+ years of hands-on teaching experience."},{icon:"📱",title:"Online & Offline Classes",desc:"Practice from home or join us at our serene studio — your choice."},{icon:"🎯",title:"Personalized Programs",desc:"Custom yoga plans based on your unique goals and current fitness level."},{icon:"🌍",title:"Global Community",desc:"Join 10,000+ students across 25+ cities who've transformed their lives."},{icon:"⏰",title:"Flexible Scheduling",desc:"Morning, evening & weekend batches designed to fit your lifestyle."},{icon:"💰",title:"Affordable Pricing",desc:"Premium yoga experience at prices that everyone can comfortably afford."}];function Te(){const[t,a]=h.useState(!1),r=h.useRef(null);return h.useEffect(()=>{const n=new IntersectionObserver(([l])=>{l.isIntersecting&&a(!0)},{threshold:.1});return r.current&&n.observe(r.current),()=>n.disconnect()},[]),e.jsxs("section",{className:"yw-section",ref:r,children:[e.jsx("div",{className:"yw-orb yw-orb-1","aria-hidden":"true"}),e.jsx("div",{className:"yw-orb yw-orb-2","aria-hidden":"true"}),e.jsxs("div",{className:"yw-inner",children:[e.jsxs("div",{className:"yw-top",children:[e.jsxs("h2",{className:"yw-heading",children:["Why Thousands ",e.jsx("span",{className:"acc",children:"Choose"})," yoga"]}),e.jsxs("div",{className:"yw-divider",children:[e.jsx("div",{className:"yw-div-line"}),e.jsx("span",{style:{fontSize:20},children:"🪷"}),e.jsx("div",{className:"yw-div-line"})]}),e.jsx("p",{className:"yw-subtext",children:"We go beyond yoga classes — we build a lifestyle."})]}),e.jsx("div",{className:"yw-grid",children:Re.map((n,l)=>e.jsxs("div",{className:"yw-card",style:t?{animation:`yw-fadeUp 0.55s ${l*.1}s ease both`}:{opacity:0},children:[e.jsx("span",{className:"yw-card-num","aria-hidden":"true",children:String(l+1).padStart(2,"0")}),e.jsx("div",{className:"yw-icon-wrap","aria-hidden":"true",children:n.icon}),e.jsx("h3",{className:"yw-card-title",children:n.title}),e.jsx("p",{className:"yw-card-desc",children:n.desc})]},n.title))})]})]})}const We=[{name:"Priya Sharma",role:"Hatha & Vinyasa",exp:"12 years",image:me,whatsapp:"919876543210",color:"#2E7D32",specialties:["Morning Flow","Prenatal Yoga","Meditation"],quote:"Every breath is a new beginning."},{name:"Ananya Rao",role:"Kundalini & Yin",exp:"9 years",image:X,whatsapp:"919876543210",color:"#E8651A",specialties:["Energy Healing","Yin Yoga","Chakra Work"],quote:"Stillness is where strength is born."},{name:"Meera Nair",role:"Power & Ashtanga",exp:"14 years",image:Q,whatsapp:"919876543210",color:"#5B6ABF",specialties:["Core Strength","Flexibility","Breathwork"],quote:"Push limits. Find peace within them."},{name:"Kavitha Iyer",role:"Restorative & Therapy",exp:"10 years",image:ee,whatsapp:"919876543210",color:"#2E7D32",specialties:["Back Therapy","Stress Relief","Gentle Flow"],quote:"Healing begins where effort ends."}];if(!document.head.querySelector("[data-instructors]")){const t=document.createElement("style");t.setAttribute("data-instructors","true"),t.textContent=`
  
    @keyframes ins-up {
      from {
        opacity: 0;
        transform: translateY(24px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .ins-section{
      font-family:'Poppins',sans-serif;
      background:linear-gradient(180deg,#f6fbf3 0%,#ffffff 100%);
      padding:90px 28px;
      position:relative;
      overflow:hidden;
    }

    .ins-bg-pattern{
      position:absolute;
      inset:0;

      background-image:
      radial-gradient(circle,rgba(46,125,50,0.04) 1px,transparent 1px);

      background-size:32px 32px;

      pointer-events:none;
    }

    .ins-inner{
      max-width:1100px;
      margin:0 auto;
      position:relative;
      z-index:1;
    }

    .ins-header{
      text-align:center;
      margin-bottom:56px;
      animation:ins-up 0.6s ease both;
    }

    .ins-badge{
      display:inline-flex;
      align-items:center;
      gap:8px;

      background:rgba(46,125,50,0.09);

      color:#2E7D32;

      font-size:11px;
      font-weight:700;

      letter-spacing:0.14em;
      text-transform:uppercase;

      padding:7px 18px;

      border-radius:50px;

      margin-bottom:16px;

      border:1px solid rgba(46,125,50,0.18);
    }

    .ins-title{
      font-size:42px;
      font-weight:800;
      color:#1A2E1A;
      line-height:1.18;
      margin:0 0 16px;
    }

    .ins-title .ot{
      color:#E8651A;
    }

    .ins-subtitle{
      font-size:16px;
      color:#777;
      max-width:520px;
      margin:0 auto;
      line-height:1.75;
    }

    .ins-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:24px;
    }

    .ins-card{
      background:rgba(255,255,255,0.8);

      border:1.5px solid rgba(46,125,50,0.12);

      border-radius:28px;

      padding:32px 24px;

      text-align:center;

      backdrop-filter:blur(16px);

      box-shadow:0 8px 32px rgba(46,125,50,0.06);

      transition:
      transform 0.32s ease,
      box-shadow 0.32s ease,
      border-color 0.32s ease;

      animation:ins-up 0.6s ease both;

      position:relative;
      overflow:hidden;
    }

    .ins-card:hover{
      transform:translateY(-8px);

      box-shadow:
      0 24px 56px rgba(46,125,50,0.14);

      border-color:
      rgba(46,125,50,0.22);
    }

    .ins-exp-badge{
      display:inline-block;

      font-size:10px;
      font-weight:700;

      letter-spacing:0.1em;
      text-transform:uppercase;

      padding:4px 12px;

      border-radius:50px;

      margin-bottom:10px;

      color:#fff;
    }

    .ins-name{
      font-size:18px;
      font-weight:800;
      color:#1A2E1A;
      margin:0 0 4px;
    }

    .ins-role{
      font-size:13px;
      color:#888;
      margin:0 0 16px;
    }

    .ins-specialties{
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      justify-content:center;
      margin-bottom:18px;
    }

    .ins-tag{
      font-size:11px;
      font-weight:600;

      padding:4px 10px;

      border-radius:50px;

      background:rgba(46,125,50,0.08);

      color:#2E7D32;

      border:1px solid rgba(46,125,50,0.14);
    }

    .ins-quote{
      font-size:13px;
      font-style:italic;
      color:#999;

      border-top:
      1px solid rgba(46,125,50,0.1);

      padding-top:14px;

      margin:0;
    }

    @media (max-width:900px){

      .ins-grid{
        grid-template-columns:repeat(2,1fr);
      }

    }

    @media (max-width:540px){

      .ins-grid{
        grid-template-columns:1fr;
      }

      .ins-title{
        font-size:30px;
      }

    }

  `,document.head.appendChild(t)}function Be(){return e.jsxs("section",{className:"ins-section",children:[e.jsx("div",{className:"ins-bg-pattern","aria-hidden":"true"}),e.jsxs("div",{className:"ins-inner",children:[e.jsxs("div",{className:"ins-header",children:[e.jsx("div",{className:"ins-badge",children:"🌸 Meet the Team"}),e.jsxs("h2",{className:"ins-title",children:["Learn From the ",e.jsx("span",{className:"ot",children:"Best"})]}),e.jsx("p",{className:"ins-subtitle",children:"Our certified instructors bring decades of experience, compassion, and deep yogic knowledge to guide your transformation."})]}),e.jsx("div",{className:"ins-grid",children:We.map(t=>e.jsxs("div",{className:"ins-card",style:{"--ins-accent":t.color},children:[e.jsx("div",{className:`
                mx-auto
                mb-[18px]

                h-[90px]
                w-[90px]

                overflow-hidden
                rounded-full

                border-[3px]
                border-white/70

                shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                `,children:e.jsx("img",{src:t.image,alt:t.name,className:`
                  block
                  h-full
                  w-full
                  object-cover
                  `})}),e.jsx("div",{className:"ins-exp-badge",style:{background:t.color},children:t.exp}),e.jsx("h3",{className:"ins-name",children:t.name}),e.jsx("p",{className:"ins-role",children:t.role}),e.jsx("div",{className:"ins-specialties",children:t.specialties.map(a=>e.jsx("span",{className:"ins-tag",children:a},a))}),e.jsxs("p",{className:"ins-quote",children:['"',t.quote,'"']}),e.jsx("a",{href:`https://wa.me/${t.whatsapp}`,target:"_blank",rel:"noreferrer",className:`
                mt-5
                inline-flex
                w-full

                items-center
                justify-center

                rounded-xl

                bg-[#E8651A]

                px-4
                py-3

                text-[13px]
                font-bold
                uppercase
                tracking-[0.05em]

                text-white

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:bg-[#d45a14]

                hover:shadow-[0_14px_28px_rgba(232,101,26,0.22)]
                `,children:"Book Session"})]},t.name))})]})]})}if(!document.head.querySelector("[data-yoga-classes]")){const t=document.createElement("style");t.setAttribute("data-yoga-classes","true"),t.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

    @keyframes yc-fadeUp {
      from{opacity:0;transform:translateY(28px);}
      to{opacity:1;transform:translateY(0);}
    }

    @keyframes yc-cardIn {
      from{opacity:0;transform:translateY(20px) scale(0.96);}
      to{opacity:1;transform:translateY(0) scale(1);}
    }

    .yc-section{
      font-family:'Poppins',sans-serif;
      background:#fff;
      padding:90px 28px;
      position:relative;
      overflow:hidden;
    }

    .yc-bg-pattern{
      position:absolute;
      inset:0;
      pointer-events:none;
      background-image:
      radial-gradient(circle,rgba(46,125,50,0.04) 1.5px,transparent 1.5px);
      background-size:28px 28px;
    }

    .yc-inner{
      max-width:1100px;
      margin:0 auto;
      position:relative;
      z-index:1;
    }

    .yc-top{
      text-align:center;
      margin-bottom:56px;
      animation:yc-fadeUp 0.6s ease both;
    }

    .yc-badge{
      display:inline-flex;
      align-items:center;
      gap:7px;
      background:rgba(46,125,50,0.09);
      color:#2E7D32;
      font-size:11px;
      font-weight:700;
      letter-spacing:0.14em;
      text-transform:uppercase;
      padding:7px 18px;
      border-radius:50px;
      border:1px solid rgba(46,125,50,0.18);
      margin-bottom:18px;
    }

    .yc-heading{
      font-size:42px;
      font-weight:800;
      color:#1A2E1A;
      margin:0 0 12px;
      line-height:1.2;
    }

    .yc-heading .acc-o{color:#E8651A;}
    .yc-heading .acc-g{color:#2E7D32;}

    .yc-subtext{
      font-family:'Lato',sans-serif;
      font-size:16px;
      color:#666;
      max-width:440px;
      margin:0 auto;
      line-height:1.7;
    }

    .yc-filters{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-wrap:wrap;
      gap:10px;
      margin-bottom:44px;
    }

    .yc-filter-btn{
      padding:9px 22px;
      border-radius:50px;
      border:1.5px solid rgba(46,125,50,0.2);
      background:#fff;
      color:#555;
      font-family:'Poppins',sans-serif;
      font-size:13px;
      font-weight:600;
      cursor:pointer;
      transition:all 0.22s;
    }

    .yc-filter-btn.active,
    .yc-filter-btn:hover{
      background:#2E7D32;
      color:#fff;
      border-color:#2E7D32;
    }

    .yc-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:24px;
      margin-bottom:48px;
    }

    .yc-card{
      background:#fff;
      border:1.5px solid rgba(46,125,50,0.13);
      border-radius:22px;
      overflow:hidden;
      transition:all 0.28s;
      cursor:pointer;
      animation:yc-cardIn 0.5s ease both;
    }

    .yc-card:hover{
      transform:translateY(-7px);
      box-shadow:0 20px 48px rgba(46,125,50,0.14);
      border-color:#2E7D32;
    }

    /* UPDATED HEADER */
    .yc-card-header{
      position:relative;
    }

    .yc-card-image{
      width:100%;
      height:240px;
      object-fit:cover;
      display:block;
    }

    .yc-card-title-wrap{
      padding:20px 24px 0;
    }

    .yc-card-title{
      font-size:19px;
      font-weight:700;
      color:#1A2E1A;
      margin:0;
    }

    .yc-popular-badge{
      position:absolute;
      top:16px;
      right:16px;
      background:#E8651A;
      color:#fff;
      font-size:10px;
      font-weight:700;
      padding:4px 12px;
      border-radius:50px;
      letter-spacing:0.06em;
      text-transform:uppercase;
    }

    .yc-card-body{
      padding:20px 24px 24px;
    }

    .yc-card-desc{
      font-family:'Lato',sans-serif;
      font-size:14px;
      color:#666;
      line-height:1.7;
      margin:0 0 18px;
    }

    .yc-card-meta{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-bottom:18px;
    }

    .yc-meta-tag{
      display:inline-flex;
      align-items:center;
      gap:5px;
      background:#f0f7e6;
      color:#2E7D32;
      font-size:11px;
      font-weight:600;
      padding:5px 12px;
      border-radius:50px;
      border:1px solid rgba(46,125,50,0.15);
    }

    .yc-enroll-btn{
      width:100%;
      padding:12px;
      border-radius:10px;
      border:1.5px solid #2E7D32;
      background:transparent;
      color:#2E7D32;
      font-family:'Poppins',sans-serif;
      font-size:13px;
      font-weight:700;
      cursor:pointer;
      text-transform:uppercase;
      letter-spacing:0.05em;
      transition:all 0.22s;
      text-align:center;
    }

    .yc-enroll-btn:hover{
      background:#2E7D32;
      color:#fff;
    }

    .yc-cta-wrap{
      text-align:center;
    }

    .yc-cta-btn{
      display:inline-flex;
      align-items:center;
      gap:10px;
      background:#E8651A;
      color:#fff;
      font-family:'Poppins',sans-serif;
      font-size:15px;
      font-weight:700;
      padding:16px 44px;
      border-radius:50px;
      border:none;
      cursor:pointer;
      text-transform:uppercase;
      letter-spacing:0.06em;
      transition:all 0.28s;
    }

    .yc-cta-btn:hover{
      background:#d45a14;
      transform:translateY(-3px);
      box-shadow:0 12px 30px rgba(232,101,26,0.32);
    }

    @media(max-width:900px){
      .yc-grid{
        grid-template-columns:1fr 1fr;
      }
    }

    @media(max-width:580px){

      .yc-section{
        padding:70px 16px;
      }

      .yc-grid{
        grid-template-columns:1fr;
      }

      .yc-heading{
        font-size:30px;
      }

      .yc-card-image{
        height:220px;
      }
    }
  `,document.head.appendChild(t)}const G=[{id:1,image:he,title:"Hatha Yoga",desc:"Perfect for beginners. Focus on breathing, posture & deep relaxation.",level:"Beginner",duration:"60 min",time:"Morning",filter:"Beginner",popular:!1},{id:2,image:te,title:"Vinyasa Flow",desc:"Dynamic, flowing sequences that build strength and flexibility.",level:"Intermediate",duration:"75 min",time:"Evening",filter:"Intermediate",popular:!0},{id:3,image:ae,title:"Yin Yoga",desc:"Deep stretching and mindfulness for stress relief and recovery.",level:"All Levels",duration:"60 min",time:"Night",filter:"All Levels",popular:!1},{id:4,image:re,title:"Meditation",desc:"Guided mindfulness sessions for a calmer, more focused mind.",level:"All Levels",duration:"45 min",time:"Flexible",filter:"All Levels",popular:!1},{id:5,image:ne,title:"Power Yoga",desc:"High-energy workout that builds core strength and endurance.",level:"Advanced",duration:"90 min",time:"Morning",filter:"Advanced",popular:!1},{id:6,image:xe,title:"Prenatal Yoga",desc:"Gentle, safe yoga designed especially for mothers-to-be.",level:"All Levels",duration:"50 min",time:"Morning",filter:"All Levels",popular:!1}],Ue=["All","Beginner","Intermediate","Advanced","All Levels"];function He(){const[t,a]=h.useState("All"),r=t==="All"?G:G.filter(n=>n.filter===t);return e.jsxs("section",{id:"classes",className:"yc-section",children:[e.jsx("div",{className:"yc-bg-pattern","aria-hidden":"true"}),e.jsxs("div",{className:"yc-inner",children:[e.jsxs("div",{className:"yc-top",children:[e.jsx("div",{className:"yc-badge",children:"🧘 What We Offer"}),e.jsxs("h2",{className:"yc-heading",children:["Yoga For ",e.jsx("span",{className:"acc-o",children:"Every"})," ",e.jsx("span",{className:"acc-g",children:"Body"})]}),e.jsx("p",{className:"yc-subtext",children:"Choose from our wide range of expertly designed yoga programs"})]}),e.jsx("div",{className:"yc-filters",children:Ue.map(n=>e.jsx("button",{className:`yc-filter-btn${t===n?" active":""}`,onClick:()=>a(n),children:n},n))}),e.jsx("div",{className:"yc-grid",children:r.map((n,l)=>e.jsxs("div",{className:"yc-card",style:{animationDelay:`${l*.08}s`},children:[e.jsxs("div",{className:"yc-card-header",children:[e.jsx("img",{src:n.image,alt:n.title,className:"yc-card-image"}),n.popular&&e.jsx("span",{className:"yc-popular-badge",children:"Popular"})]}),e.jsxs("div",{className:"yc-card-body",children:[e.jsx("div",{className:"yc-card-title-wrap",children:e.jsx("h3",{className:"yc-card-title",children:n.title})}),e.jsx("p",{className:"yc-card-desc",children:n.desc}),e.jsxs("div",{className:"yc-card-meta",children:[e.jsxs("span",{className:"yc-meta-tag",children:["📊 ",n.level]}),e.jsxs("span",{className:"yc-meta-tag",children:["⏱ ",n.duration]}),e.jsxs("span",{className:"yc-meta-tag",children:["🌤 ",n.time]})]}),e.jsx(C,{to:"/auth",className:"yc-enroll-btn",style:{display:"inline-block"},children:"Enroll Now"})]})]},n.id))}),e.jsx("div",{className:"yc-cta-wrap",children:e.jsx(C,{to:"/auth",className:"yc-cta-btn",children:"View All Classes →"})})]})]})}const _e=[{name:"Starter",emoji:"🌱",monthlyPrice:999,yearlyPrice:799,color:"#2E7D32",tagline:"Perfect to begin your journey",features:["4 Classes per month","Access to recorded sessions","Community WhatsApp group","Beginner's yoga guide PDF"],missing:["Live Q&A sessions","1-on-1 consultations","Retreats access"],cta:"Start Free Trial",popular:!1},{name:"Wellness",emoji:"🌸",monthlyPrice:2499,yearlyPrice:1999,color:"#E8651A",tagline:"Most popular — complete wellness",features:["Unlimited live classes","All recorded sessions","Live Q&A every week","Nutrition & diet guide","Priority community support","Monthly progress tracking"],missing:["1-on-1 consultations","Retreats access"],cta:"Join Wellness Plan",popular:!0},{name:"Transform",emoji:"🏆",monthlyPrice:4999,yearlyPrice:3999,color:"#5B6ABF",tagline:"Full transformation experience",features:["Everything in Wellness","2 × 1-on-1 sessions/month","Personalized yoga roadmap","Retreat discounts (30% off)","Exclusive masterclasses","Direct instructor access","Certification support"],missing:[],cta:"Transform Now",popular:!1}];if(!document.head.querySelector("[data-pricing]")){const t=document.createElement("style");t.setAttribute("data-pricing","true"),t.textContent=`
    @keyframes pr-up {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pr-badge-pulse {
      0%, 100% { transform: scale(1); }
      50%       { transform: scale(1.06); }
    }

    .pr-section {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(180deg, #fff 0%, #f6fbf3 100%);
      padding: 90px 28px;
      position: relative;
      overflow: hidden;
    }
    .pr-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

    .pr-header { text-align: center; margin-bottom: 48px; animation: pr-up 0.6s ease both; }
    .pr-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(46,125,50,0.09); color: #2E7D32;
      font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
      text-transform: uppercase; padding: 7px 18px; border-radius: 50px;
      margin-bottom: 16px; border: 1px solid rgba(46,125,50,0.18);
    }
    .pr-title {
      font-size: 42px; font-weight: 800; color: #1A2E1A; line-height: 1.18; margin: 0 0 16px;
    }
    .pr-title .ot { color: #E8651A; }
    .pr-subtitle { font-size: 16px; color: #777; max-width: 480px; margin: 0 auto 28px; line-height: 1.75; }

    /* Toggle */
    .pr-toggle-wrap { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 48px; }
    .pr-toggle-label { font-size: 14px; font-weight: 600; color: #888; transition: color 0.2s; }
    .pr-toggle-label.active { color: #1A2E1A; }
    .pr-toggle {
      width: 56px; height: 30px; border-radius: 50px;
      background: #2E7D32; border: none; cursor: pointer; position: relative;
      transition: background 0.3s; outline: none;
    }
    .pr-toggle-thumb {
      position: absolute; top: 4px; left: 4px;
      width: 22px; height: 22px; border-radius: 50%;
      background: #fff; transition: transform 0.3s ease;
      box-shadow: 0 2px 6px rgba(0,0,0,0.18);
    }
    .pr-toggle-thumb.yearly { transform: translateX(26px); }
    .pr-save-badge {
      background: #E8651A; color: #fff;
      font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 50px;
      animation: pr-badge-pulse 2s ease-in-out infinite;
    }

    /* Grid */
    .pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start; }

    .pr-card {
      background: rgba(255,255,255,0.85); border: 1.5px solid rgba(46,125,50,0.12);
      border-radius: 28px; padding: 36px 28px;
      backdrop-filter: blur(16px); box-shadow: 0 8px 32px rgba(46,125,50,0.06);
      transition: transform 0.32s ease, box-shadow 0.32s ease;
      animation: pr-up 0.6s ease both;
      position: relative; overflow: hidden;
    }
    .pr-card:nth-child(1) { animation-delay: 0.1s; }
    .pr-card:nth-child(2) { animation-delay: 0.2s; }
    .pr-card:nth-child(3) { animation-delay: 0.3s; }
    .pr-card.popular {
      border-color: #E8651A;
      box-shadow: 0 20px 60px rgba(232,101,26,0.18);
      transform: scale(1.04);
    }
    .pr-card.popular:hover { transform: scale(1.04) translateY(-6px); }
    .pr-card:not(.popular):hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(46,125,50,0.12); }

    .pr-popular-ribbon {
      position: absolute; top: 18px; right: -28px;
      background: #E8651A; color: #fff;
      font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
      padding: 6px 42px; transform: rotate(40deg);
    }

    .pr-plan-emoji { font-size: 36px; margin-bottom: 12px; }
    .pr-plan-name { font-size: 22px; font-weight: 800; color: #1A2E1A; margin: 0 0 4px; }
    .pr-plan-tagline { font-size: 13px; color: #888; margin: 0 0 24px; line-height: 1.5; }

    .pr-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: 6px; }
    .pr-currency { font-size: 20px; font-weight: 700; color: #1A2E1A; }
    .pr-amount { font-size: 48px; font-weight: 900; color: #1A2E1A; line-height: 1; }
    .pr-period { font-size: 14px; color: #888; }
    .pr-billed-note { font-size: 12px; color: #aaa; margin-bottom: 28px; }

    .pr-divider { height: 1px; background: rgba(46,125,50,0.1); margin-bottom: 22px; }

    .pr-features { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; }
    .pr-feat-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #444; }
    .pr-feat-icon { font-size: 16px; flex-shrink: 0; }
    .pr-feat-miss { color: #ccc; text-decoration: line-through; }

    .pr-cta-btn {
      width: 100%; padding: 16px; border-radius: 999px; border: none; cursor: pointer;
      font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      transition: transform 0.28s ease, box-shadow 0.28s ease;
    }
    .pr-cta-btn.primary {
      background: linear-gradient(135deg, #E8651A, #d45c17);
      color: #fff;
      box-shadow: 0 12px 32px rgba(232,101,26,0.28);
    }
    .pr-cta-btn.secondary {
      background: rgba(46,125,50,0.08);
      color: #2E7D32;
      border: 1.5px solid rgba(46,125,50,0.2);
    }
    .pr-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(232,101,26,0.22); }

    .pr-footer-note {
      text-align: center; margin-top: 40px;
      font-size: 13px; color: #aaa;
      animation: pr-up 0.6s 0.5s ease both;
    }

    @media (max-width: 900px) {
      .pr-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
      .pr-card.popular { transform: scale(1); }
      .pr-title { font-size: 30px; }
    }
  `,document.head.appendChild(t)}function Ge(){const[t,a]=h.useState(!1);return e.jsx("section",{className:"pr-section",children:e.jsxs("div",{className:"pr-inner",children:[e.jsxs("div",{className:"pr-header",children:[e.jsx("div",{className:"pr-badge",children:"💎 Simple Pricing"}),e.jsxs("h2",{className:"pr-title",children:["Choose Your ",e.jsx("span",{className:"ot",children:"Path"})]}),e.jsx("p",{className:"pr-subtitle",children:"Transparent pricing. No hidden fees. Cancel anytime. Start your free 7-day trial on any plan."}),e.jsxs("div",{className:"pr-toggle-wrap",children:[e.jsx("span",{className:`pr-toggle-label ${t?"":"active"}`,children:"Monthly"}),e.jsx("button",{className:"pr-toggle",onClick:()=>a(!t),type:"button","aria-label":"Toggle billing",children:e.jsx("div",{className:`pr-toggle-thumb ${t?"yearly":""}`})}),e.jsx("span",{className:`pr-toggle-label ${t?"active":""}`,children:"Yearly"}),e.jsx("span",{className:"pr-save-badge",children:"Save 20%"})]})]}),e.jsx("div",{className:"pr-grid",children:_e.map(r=>e.jsxs("div",{className:`pr-card ${r.popular?"popular":""}`,children:[r.popular&&e.jsx("div",{className:"pr-popular-ribbon",children:"Most Popular"}),e.jsx("div",{className:"pr-plan-emoji",children:r.emoji}),e.jsx("h3",{className:"pr-plan-name",children:r.name}),e.jsx("p",{className:"pr-plan-tagline",children:r.tagline}),e.jsxs("div",{className:"pr-price",children:[e.jsx("span",{className:"pr-currency",children:"₹"}),e.jsx("span",{className:"pr-amount",children:t?r.yearlyPrice:r.monthlyPrice}),e.jsx("span",{className:"pr-period",children:"/mo"})]}),e.jsx("p",{className:"pr-billed-note",children:t?"Billed annually":"Billed monthly"}),e.jsx("div",{className:"pr-divider"}),e.jsxs("ul",{className:"pr-features",children:[r.features.map(n=>e.jsxs("li",{className:"pr-feat-item",children:[e.jsx("span",{className:"pr-feat-icon",children:"✅"})," ",n]},n)),r.missing.map(n=>e.jsxs("li",{className:"pr-feat-item pr-feat-miss",children:[e.jsx("span",{className:"pr-feat-icon",children:"✗"})," ",n]},n))]}),e.jsx(C,{to:"/auth",className:`pr-cta-btn ${r.popular?"primary":"secondary"}`,style:{display:"inline-block"},children:r.cta})]},r.name))}),e.jsx("p",{className:"pr-footer-note",children:"🔒 Secure payment · 7-day free trial · Cancel anytime · No credit card required to start"})]})})}const qe=[{id:"stress",label:"Stress",icon:"🧘",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),e.jsx("path",{d:"M9 9h.01M15 9h.01"}),e.jsx("path",{d:"M8 6c0-1 .5-2 2-2M16 6c0-1-.5-2-2-2"})]}),title:"Stress — Yoga Can Help",desc:"Chronic stress affects your body and mind. Our breathing techniques and restorative yoga help activate the parasympathetic nervous system, reducing cortisol levels naturally.",tags:["Pranayama","Restorative Yoga","Meditation","Yoga Nidra"]},{id:"mental",label:"Mental Health",icon:"🧠",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"}),e.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"})]}),title:"Mental Health — Yoga Can Help",desc:"Yoga supports mental wellness through mindfulness, breathwork, and gentle movement — proven to reduce anxiety, boost mood and build emotional resilience.",tags:["Mindfulness Yoga","Breathing","Yin Yoga","Guided Meditation"]},{id:"weight",label:"Weight Loss",icon:"⚖️",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M12 3a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Z"}),e.jsx("path",{d:"M3 6h18l-1.5 9H4.5L3 6Z"}),e.jsx("path",{d:"M6 15v4M18 15v4M6 19h12"})]}),title:"Weight Loss — Yoga Can Help",desc:"Power Yoga and Vinyasa Flow combine cardio and strength training holistically — burning calories while improving metabolism and body awareness.",tags:["Power Yoga","Vinyasa Flow","Hot Yoga","Core Yoga"]},{id:"depression",label:"Depression",icon:"🌧️",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"}),e.jsx("line",{x1:"8",y1:"19",x2:"8",y2:"21"}),e.jsx("line",{x1:"8",y1:"13",x2:"8",y2:"15"}),e.jsx("line",{x1:"16",y1:"19",x2:"16",y2:"21"}),e.jsx("line",{x1:"16",y1:"13",x2:"16",y2:"15"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"17"})]}),title:"Depression — Yoga Can Help",desc:"Gentle yoga combined with breathwork lifts mood naturally by increasing serotonin and dopamine. Our guided sessions provide safe, nurturing support.",tags:["Gentle Yoga","Pranayama","Sun Salutation","Yoga Nidra"]},{id:"anger",label:"Anger",icon:"😤",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}),e.jsx("path",{d:"M9 9l2 2M13 9l2 2"}),e.jsx("path",{d:"M8 5l2 2M14 5l2 2"})]}),title:"Anger — Yoga Can Help",desc:"Yoga teaches you to pause, breathe, and respond instead of react. Our specialized sessions help release suppressed anger through movement and mindfulness.",tags:["Cooling Pranayama","Yin Yoga","Meditation","Chanting"]},{id:"sleep",label:"Sleep",icon:"😴",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),e.jsx("path",{d:"M15 9h2M17 7v4"})]}),title:"Sleep — Yoga Can Help",desc:"Evening yoga routines calm the nervous system and signal your body it's time to rest. Reduce insomnia naturally without medication.",tags:["Yin Yoga","Yoga Nidra","Restorative Yoga","Bedtime Stretching"]},{id:"wellness",label:"Wellness",icon:"🌸",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M12 22c4-4 8-7 8-12a8 8 0 0 0-16 0c0 5 4 8 8 12Z"}),e.jsx("path",{d:"M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"})]}),title:"Wellness — Yoga Can Help",desc:"Holistic wellness is achieved through consistent yoga practice that nourishes your body, clears your mind, and uplifts your spirit every single day.",tags:["Hatha Yoga","Meditation","Pranayama","Detox Yoga"]},{id:"relationships",label:"Relationships",icon:"🤝",svgIcon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),title:"Relationships — Yoga Can Help",desc:"Yoga builds emotional intelligence, patience, and empathy — the foundation of healthy relationships. Partner yoga and group sessions deepen connections.",tags:["Partner Yoga","Group Meditation","Compassion Practice","Communication Yoga"]},{id:"parenting",label:"Parenting",icon:"👨‍👧",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"Parenting — Yoga Can Help",desc:"Yoga helps parents manage stress, stay present, and model mindfulness for their children. Family yoga sessions create stronger bonds and calmer homes.",tags:["Family Yoga","Stress Relief","Mindful Parenting","Breathing Techniques"]},{id:"backpain",label:"Back Pain",icon:"🦴",svgIcon:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:e.jsx("path",{d:"M12 2v20M8 6c0 0 2 2 4 2s4-2 4-2M8 10c0 0 2 2 4 2s4-2 4-2M8 14c0 0 2 2 4 2s4-2 4-2M8 18c0 0 2 2 4 2s4-2 4-2"})}),title:"Back Pain — Yoga Can Help",desc:"Targeted yoga sequences strengthen core muscles, improve spinal alignment, and release tension — providing long-term relief from chronic back pain.",tags:["Therapeutic Yoga","Core Strengthening","Spinal Yoga","Stretching"]},{id:"fatigue",label:"Fatigue",icon:"🔋",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"2"}),e.jsx("path",{d:"M10 2v2h4V2"}),e.jsx("path",{d:"M12 7v5l3 3"})]}),title:"Fatigue — Yoga Can Help",desc:"Energizing yoga practices stimulate the lymphatic system, improve circulation, and boost vitality. Reclaim your energy and zest for life naturally.",tags:["Energy Yoga","Sun Salutation","Inversions","Breathwork"]},{id:"immunity",label:"Immunity",icon:"🛡️",svgIcon:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",width:26,height:26,children:[e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),e.jsx("path",{d:"M9 12l2 2 4-4"})]}),title:"Immunity — Yoga Can Help",desc:"Regular yoga practice reduces inflammation, improves lymphatic flow, and strengthens your immune response — keeping you naturally healthy year-round.",tags:["Detox Yoga","Twists","Inversions","Pranayama"]}],u={section:{fontFamily:"'Poppins', sans-serif",background:"linear-gradient(180deg, #f0f7e6 0%, #ffffff 100%)",padding:"80px 28px",textAlign:"center",position:"relative",overflow:"hidden"},decorCircle1:{position:"absolute",top:-60,left:-60,width:200,height:200,borderRadius:"50%",background:"rgba(46,125,50,0.06)",pointerEvents:"none"},decorCircle2:{position:"absolute",bottom:-40,right:-40,width:160,height:160,borderRadius:"50%",background:"rgba(232,101,26,0.06)",pointerEvents:"none"},badge:{display:"inline-block",background:"rgba(46,125,50,0.1)",color:"#2E7D32",fontSize:12,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",padding:"6px 18px",borderRadius:50,marginBottom:16},heading:{fontSize:42,fontWeight:700,color:"#1A2E1A",margin:"0 0 10px",lineHeight:1.2},headingAccent:{color:"#E8651A"},subtext:{fontFamily:"'Lato', sans-serif",fontSize:17,color:"#555",margin:"0 auto 16px",maxWidth:480,lineHeight:1.6},divider:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:48},dividerLine:{width:60,height:2,background:"#2E7D32",borderRadius:2},grid:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:16,maxWidth:900,margin:"0 auto 36px"},card:(t,a)=>({background:t?"rgba(232,101,26,0.05)":"rgba(255,255,255,0.9)",border:`1.5px solid ${t?"#E8651A":a?"#2E7D32":"rgba(46,125,50,0.18)"}`,borderRadius:18,padding:"24px 12px 20px",cursor:"pointer",transition:"all 0.25s ease",display:"flex",flexDirection:"column",alignItems:"center",gap:10,transform:a&&!t?"translateY(-5px)":"translateY(0)",boxShadow:a?"0 12px 28px rgba(46,125,50,0.15)":"none"}),iconWrap:t=>({width:58,height:58,borderRadius:"50%",background:t?"rgba(232,101,26,0.12)":"rgba(46,125,50,0.08)",border:`1.5px solid ${t?"rgba(232,101,26,0.3)":"rgba(46,125,50,0.2)"}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.25s",color:t?"#E8651A":"#2E7D32"}),cardLabel:t=>({fontSize:13,fontWeight:600,color:t?"#E8651A":"#1A2E1A",transition:"color 0.25s"}),resultBox:{background:"#fff",border:"1.5px solid rgba(46,125,50,0.2)",borderRadius:16,padding:"22px 28px",maxWidth:900,margin:"0 auto 36px",textAlign:"left",display:"flex",gap:20,alignItems:"flex-start",animation:"fadeSlideIn 0.3s ease"},resultEmoji:{fontSize:40,flexShrink:0,marginTop:2},resultTitle:{fontSize:18,fontWeight:700,color:"#1A2E1A",margin:"0 0 8px"},resultDesc:{fontFamily:"'Lato', sans-serif",fontSize:15,color:"#555",lineHeight:1.7,margin:"0 0 14px"},tagsWrap:{display:"flex",flexWrap:"wrap",gap:8},tag:{background:"rgba(46,125,50,0.08)",color:"#2E7D32",fontSize:12,fontWeight:600,padding:"5px 14px",borderRadius:50,border:"1px solid rgba(46,125,50,0.15)"},ctaBtn:{display:"inline-flex",alignItems:"center",gap:10,background:"#E8651A",color:"#fff",fontFamily:"'Poppins', sans-serif",fontSize:15,fontWeight:600,padding:"15px 40px",borderRadius:50,border:"none",cursor:"pointer",textTransform:"uppercase",letterSpacing:"0.05em",transition:"all 0.25s"}},D=document.createElement("style");D.textContent=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;document.head.querySelector("[data-yoga-style]")||(D.setAttribute("data-yoga-style","true"),document.head.appendChild(D));function $e({item:t,isActive:a,onClick:r}){const[n,l]=h.useState(!1);return e.jsxs("div",{style:u.card(a,n),onClick:()=>r(t),onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),role:"button",tabIndex:0,"aria-pressed":a,onKeyDown:o=>o.key==="Enter"&&r(t),children:[e.jsx("div",{style:u.iconWrap(a),children:t.svgIcon}),e.jsx("span",{style:u.cardLabel(a),children:t.label})]})}function Ze(){const[t,a]=h.useState(null),[r,n]=h.useState(!1),l=o=>{a(i=>(i==null?void 0:i.id)===o.id?null:o)};return e.jsxs("section",{style:u.section,children:[e.jsx("div",{style:u.decorCircle1,"aria-hidden":"true"}),e.jsx("div",{style:u.decorCircle2,"aria-hidden":"true"}),e.jsx("div",{style:u.badge,children:"Yoga Solutions"}),e.jsxs("h2",{style:u.heading,children:["Find a Solution"," ",e.jsx("span",{style:u.headingAccent,children:"For.."})]}),e.jsx("p",{style:u.subtext,children:"Whatever you're going through, yoga has an answer. Choose your challenge below."}),e.jsxs("div",{style:u.divider,children:[e.jsx("div",{style:u.dividerLine}),e.jsx("span",{style:{fontSize:22},children:"🪷"}),e.jsx("div",{style:u.dividerLine})]}),e.jsx("div",{style:u.grid,children:qe.map(o=>e.jsx($e,{item:o,isActive:(t==null?void 0:t.id)===o.id,onClick:l},o.id))}),t&&e.jsxs("div",{style:u.resultBox,children:[e.jsx("div",{style:u.resultEmoji,"aria-hidden":"true",children:t.icon}),e.jsxs("div",{children:[e.jsx("h3",{style:u.resultTitle,children:t.title}),e.jsx("p",{style:u.resultDesc,children:t.desc}),e.jsx("div",{style:u.tagsWrap,children:t.tags.map(o=>e.jsx("span",{style:u.tag,children:o},o))})]})]},t.id),e.jsx(C,{to:"/auth",style:{...u.ctaBtn,...r?{background:"#d45a14",transform:"translateY(-2px)",boxShadow:"0 8px 20px rgba(232,101,26,0.3)"}:{},display:"inline-block"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:"🧘 Explore All Classes"})]})}const Ke=[{name:"Ananya R.",text:"I found strength and softness in one place. Every class feels designed for real women and real lives."},{name:"Meera K.",text:"YogaWomans helped me reduce stress and reconnect with myself after years of burnout."},{name:"Sara M.",text:"The instructors are compassionate, powerful, and deeply inspiring. I finally stay consistent."}];function Je(){return e.jsx("section",{id:"testimonials",className:"bg-lightSage py-16 sm:py-20",children:e.jsxs("div",{className:"section-container",children:[e.jsx("h2",{className:"text-center font-heading text-3xl font-extrabold sm:text-4xl",children:"What Women Are Saying"}),e.jsx("div",{className:"mt-10 grid gap-6 lg:grid-cols-3",children:Ke.map(t=>e.jsxs("article",{className:"glass-card p-6 shadow-soft",children:[e.jsx("div",{className:"h-12 w-12 rounded-full bg-primaryBlue/20","aria-hidden":"true"}),e.jsx("h3",{className:"mt-4 font-heading text-lg font-bold text-darkText",children:t.name}),e.jsx("p",{className:"mt-3 text-grayText",children:t.text}),e.jsx("div",{className:"mt-4 flex gap-1 text-primaryOrange","aria-label":"5 star rating",children:Array.from({length:5}).map((a,r)=>e.jsx(se,{},r))})]},t.name))})]})})}function Xe(t){return R({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",clipRule:"evenodd"},child:[]}]})(t)}function Qe(t){return R({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"},child:[]}]})(t)}function et(t){return R({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"},child:[]}]})(t)}const tt="/assets/fotlogo-CI4twKYU.png",at=["Home","About Us","Classes","Retreats","Blog","Contact Us","Join Us"],rt=["Hatha Yoga","Vinyasa Flow","Yin Yoga","Meditation & Mindfulness","Prenatal Yoga","Power Yoga","Kids Yoga","Online Classes"],nt=[{label:"Facebook",href:"https://facebook.com",icon:oe},{label:"Instagram",href:"https://instagram.com",icon:le},{label:"YouTube",href:"https://youtube.com",icon:de},{label:"Twitter",href:"https://x.com",icon:ce},{label:"Pinterest",href:"https://pinterest.com",icon:pe}];function it(){return e.jsx("footer",{id:"footer",className:"bg-[#1A2E1A] font-body text-[#CCCCCC]",children:e.jsxs("div",{className:"section-container px-3 pb-0 pt-20 sm:pt-24",children:[e.jsx("div",{className:"rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-10",children:e.jsxs("div",{className:"grid gap-10 sm:grid-cols-2 lg:grid-cols-5",children:[e.jsxs("div",{className:"lg:col-span-1",children:[e.jsx("a",{href:"#home","aria-label":"YOGAWOMANS home",className:`\r
    inline-flex\r
    items-center\r
    rounded-2xl\r
    border\r
    border-[#E8651A]/30\r
    bg-white/10\r
    px-4\r
    py-3\r
    backdrop-blur-md\r
    transition\r
    duration-300\r
    hover:scale-[1.02]\r
    hover:border-[#E8651A]\r
  `,children:e.jsx("img",{src:tt,alt:"YOGAWOMANS Logo",className:`\r
      h-12\r
      w-auto\r
      object-contain\r
\r
      sm:h-14\r
      md:h-16\r
    `})}),e.jsx("p",{className:"mt-5 font-heading text-xs uppercase tracking-[0.35em] text-white/80",children:"Body • Mind • Soul"}),e.jsx("p",{className:"mt-4 text-sm leading-7 text-[#CCCCCC]",children:"Empowering lives through the ancient wisdom of yoga and meditation. Join our community and begin your journey to a healthier body, calmer mind, and happier life."}),e.jsx("div",{className:"mt-6 flex flex-wrap gap-3",children:nt.map(({label:t,href:a,icon:r})=>e.jsx("a",{href:a,target:"_blank",rel:"noreferrer","aria-label":t,className:"inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white/80 transition-all duration-300 hover:scale-110 hover:border-[#E8651A] hover:bg-[#E8651A] hover:text-white",children:e.jsx(r,{})},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#E8651A]",children:"Quick Links"}),e.jsx("ul",{className:"mt-5 space-y-3 text-sm",children:at.map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"inline-flex transition-all duration-300 hover:translate-x-1.5 hover:text-[#43A047]",children:t})},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#E8651A]",children:"Our Classes"}),e.jsx("ul",{className:"mt-5 space-y-3 text-sm",children:rt.map(t=>e.jsx("li",{children:e.jsx("a",{href:"#",className:"inline-flex transition-all duration-300 hover:translate-x-1.5 hover:text-[#43A047]",children:t})},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#E8651A]",children:"Contact Us"}),e.jsxs("ul",{className:"mt-5 space-y-4 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-3 leading-6",children:[e.jsx(Xe,{className:"mt-0.5 shrink-0 text-lg text-[#E8651A]"}),e.jsxs("span",{children:["123 Serenity Lane, Wellness District,",e.jsx("br",{}),"Mumbai, Maharashtra - 400001, India"]})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx(Qe,{className:"shrink-0 text-lg text-[#E8651A]"}),e.jsx("a",{href:"tel:+919876543210",className:"transition-colors duration-300 hover:text-[#43A047]",children:"+91 98765 43210"})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx(et,{className:"shrink-0 text-lg text-[#E8651A]"}),e.jsx("a",{href:"mailto:hello@yogawomans.com",className:"transition-colors duration-300 hover:text-[#43A047]",children:"hello@yogawomans.com"})]}),e.jsxs("li",{className:"flex items-start gap-3 leading-6",children:[e.jsx(ge,{className:"mt-0.5 shrink-0 text-base text-[#E8651A]"}),e.jsxs("span",{children:["Mon - Sat: 6:00 AM - 9:00 PM",e.jsx("br",{}),"Sunday: 7:00 AM - 6:00 PM"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#E8651A]",children:"Stay Inspired"}),e.jsx("p",{className:"mt-5 text-sm leading-7",children:"Subscribe to receive wellness tips, yoga guides, and exclusive class offers."}),e.jsxs("form",{className:"mt-5 space-y-4",onSubmit:t=>t.preventDefault(),children:[e.jsx("label",{htmlFor:"newsletter-email",className:"sr-only",children:"Enter your email address"}),e.jsx("input",{id:"newsletter-email",name:"newsletterEmail",type:"email",placeholder:"Enter your email address",className:"w-full rounded-full border border-[#2E7D32] bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#CCCCCC]/70 outline-none transition duration-300 focus:border-[#E8651A] focus:ring-2 focus:ring-[#E8651A]/50"}),e.jsx("button",{type:"submit",className:"w-full rounded-full bg-[#E8651A] px-5 py-3 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_0_0_0_rgba(232,101,26,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(232,101,26,0.4)]",children:"Subscribe"}),e.jsxs("label",{className:"flex cursor-pointer items-start gap-3 text-xs leading-5 text-[#CCCCCC]",children:[e.jsx("input",{type:"checkbox",className:"mt-0.5 h-4 w-4 rounded border border-[#2E7D32] bg-transparent text-[#E8651A] accent-[#E8651A] focus:ring-[#E8651A]"}),e.jsx("span",{children:"I agree to receive wellness updates from YOGAWOMANS"})]})]})]})]})}),e.jsx("div",{className:"mt-10 border-t border-[#2E4A2E] bg-[#111F11]/80 px-3 py-5",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-[#999999] md:flex-row md:text-left",children:[e.jsx("p",{children:"© 2025 YOGAWOMANS. All Rights Reserved."}),e.jsx("p",{children:"Made with 🧘 for Mind, Body & Soul"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 md:justify-end",children:[e.jsx("a",{href:"#",className:"transition-colors duration-300 hover:text-[#43A047]",children:"Privacy Policy"}),e.jsx("span",{children:"|"}),e.jsx("a",{href:"#",className:"transition-colors duration-300 hover:text-[#43A047]",children:"Terms of Service"}),e.jsx("span",{children:"|"}),e.jsx("a",{href:"#",className:"transition-colors duration-300 hover:text-[#43A047]",children:"Cookie Policy"})]})]})})]})})}function ct(){return e.jsxs("div",{className:"overflow-x-hidden",children:[e.jsx(fe,{}),e.jsxs("main",{children:[e.jsx(be,{}),e.jsx(Ze,{}),e.jsx(He,{}),e.jsx(Be,{}),e.jsx(De,{}),e.jsx(Te,{}),e.jsx(Ge,{}),e.jsx(Je,{})]}),e.jsx(it,{})]})}export{ct as default};
