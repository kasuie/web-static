(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7793],{3165:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(7294),r=i(2903),s=i(6212);let a=(0,s.zo)("div",{w:"100%",mr:"auto",ml:"auto",variants:{fluid:{true:{maxWidth:"100%"}},responsive:{true:{"@xs":{maxWidth:"$breakpoints$xs"},"@sm":{maxWidth:"$breakpoints$sm"},"@md":{maxWidth:"$breakpoints$md"},"@lg":{maxWidth:"$breakpoints$lg"},"@xl":{maxWidth:"$breakpoints$xl"}}}},defaultVariants:{fluid:!1,responsive:!0}});var o=i(5893);let l=n.forwardRef((e,t)=>{let{xs:i,sm:s,md:l,lg:c,xl:u,wrap:d,gap:m,as:p,display:h,justify:g,direction:x,alignItems:f,alignContent:k,children:_,responsive:w,fluid:v,css:y,...$}=e,j=(0,r.gy)(t),N=(0,n.useMemo)(()=>`calc(${m} * $space$sm)`,[m]);return(0,o.jsx)(a,{ref:j,as:p,css:{px:N,maxWidth:i?"$breakpoints$xs":s?"$breakpoints$sm":l?"$breakpoints$md":c?"$breakpoints$lg":u?"$breakpoints$xl":"",alignItems:f,alignContent:k,flexWrap:d,display:h,justifyContent:g,flexDirection:x,...y},fluid:v,responsive:w,...$,children:_})});l.displayName="NextUI.Container",l.toString=()=>".nextui-container",l.defaultProps={gap:2,xs:!1,sm:!1,md:!1,lg:!1,xl:!1,responsive:!0,fluid:!1,wrap:"wrap",as:"div",display:"block"};var c=n.memo(l)},9837:function(e,t,i){"use strict";i.d(t,{ZP:function(){return y}});var n=i(7294);let r=(e,t)=>{if(!e)return 0;let i=e.includes("px")?+e.split("px")[0]:e.includes("%")?+e.split("%")[0]*t*.01:e;return Number.isNaN(+i)?0:+i},s=e=>{if(!e||"undefined"==typeof window)return{width:0,height:0};let t=e.getBoundingClientRect(),{width:i,height:n}=window.getComputedStyle(e);return{width:r(`${i}`,t.width),height:r(`${n}`,t.height)}};var a=e=>{let[t,i]=(0,n.useState)({width:0,height:0}),r=()=>{let{width:t,height:n}=s(e.current);i({width:t,height:n})};return(0,n.useEffect)(()=>r(),[e.current]),[t,r]},o=i(6391),l=i(6693),c=i(2903),u=i(3569),d=i(1309),m=i(6212);let p=(0,m.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),h=(0,m.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),g=(0,m.zo)("img",{size:"100%",display:"block"}),x=(0,m.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:`${p} 5s ease-in-out infinite`,transition:"opacity 300ms ease-out"});var f=i(88),k=i(5893);let _=n.memo(({opacity:e,css:t,className:i,...n})=>(0,k.jsx)(x,{className:(0,d.Z)("nextui-image-skeleton",i),css:{opacity:e,...t},...n}));u.Ts&&(_.displayName="NextUI.ImageSkeleton"),_.toString=()=>".nextui-image-skeleton";var w=(0,f.Z)(_,{opacity:.5,className:""});let v=n.forwardRef((e,t)=>{let{src:i,width:r,height:s,showSkeleton:u=!0,className:m,maxDelay:p=3e3,autoResize:x=!1,objectFit:f="scale-down",containerCss:_,css:v,...y}=e,$=(0,c.gy)(t),[j,N]=(0,n.useState)(!0),[b,Z]=(0,n.useState)(u),{w:C,h:S}=(0,n.useMemo)(()=>({w:r?"number"==typeof r?`${r}px`:r:"auto",h:s?"number"==typeof s?`${s}px`:s:"auto"}),[r,s]),[P,E,R]=(0,o.Z)(S),[W,F]=a($),z=u&&!!r&&!!s;(0,n.useEffect)(()=>{$.current&&$.current.complete&&(N(!1),Z(!1))}),(0,n.useEffect)(()=>{let e=setTimeout(()=>{z&&Z(!1),clearTimeout(e)},p);return()=>clearTimeout(e)},[j]),(0,n.useEffect)(()=>{if(!x)return;let e=0===W.width,t="auto"===R.current;!e&&r&&s&&(W.width<r?t||E("auto"):t&&E(S))},[W,r]),(0,l.Z)(()=>{x&&F()});let I=(0,n.useMemo)(()=>j?"loading":"ready",[j]);return(0,k.jsxs)(h,{className:(0,d.Z)("nextui-image-container",`nextui-image--${I}`,m),css:{width:C,height:P,..._},"data-state":I,ready:!j||b,children:[b&&(0,k.jsx)(w,{opacity:1}),(0,k.jsx)(g,{ref:$,alt:e.alt||"",className:"nextui-image",css:{objectFit:f,...v},"data-state":I,height:s,src:i,width:r,onLoad:()=>{N(!1)},...y})]})});u.Ts&&(v.displayName="NextUI.Image"),v.toString=()=>".nextui-image";var y=n.memo(v)},6391:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),r=e=>{let[t,i]=(0,n.useState)(()=>"function"==typeof e?e():e),r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=t},[t]),[t,e=>{let t="function"==typeof e?e(r.current):e;r.current=t,i(t)},r]}},5078:function(e,t,i){"use strict";i.d(t,{h:function(){return a}});var n=i(7462),r=i(7294),s=i(597),a=r.forwardRef(function(e,t){return r.createElement(s.r,(0,n.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),r.createElement("path",{fillRule:"evenodd",d:"M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"}))});a.displayName="ArrowReturnRight"},3381:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tag/[id]",function(){return i(5389)}])},2626:function(e,t,i){"use strict";i.d(t,{w:function(){return p}});var n=i(5893),r=i(6979),s=i(9837),a=i(189),o=i(7294),l=i(5078),c=i(1163),u=i.n(c),d=i(20),m=i.n(d);let p=e=>{let{data:t,title:i}=e,[c,d]=(0,o.useState)([]),p=e=>{u().push("/article/".concat(e))},h=(e,t)=>(0,n.jsxs)("div",{className:m()["k-line-group-item"],children:[(0,n.jsx)(r.Z,{className:m()["k-line-group-item-date"],span:!0,children:e.month}),(0,n.jsxs)("div",{className:m()["k-line-group-item-main"],children:[(0,n.jsx)(s.ZP,{src:e.topImg,width:"30%",height:"100%",objectFit:"cover",alt:e.title}),(0,n.jsxs)("div",{children:[(0,n.jsx)(r.Z,{css:{cursor:"pointer"},onClick:()=>e.aid&&p(e.aid),children:e.title}),(0,n.jsx)(r.Z,{className:m()["k-line-group-item-main-desc"],children:e.description}),(0,n.jsx)("span",{className:m()["k-line-group-item-main-button"],onClick:()=>e.aid&&p(e.aid)}),(0,n.jsx)(r.Z,{className:m()["k-line-group-item-main-arrow"],onClick:()=>e.aid&&p(e.aid),children:(0,n.jsx)(l.h,{})})]})]})]},t),g=e=>(0,n.jsxs)("div",{className:m()["k-line-group-title"],children:[(0,n.jsx)(a.ZP,{color:"primary",variant:"dot"}),(0,n.jsx)(r.Z,{span:!0,children:e})]});return(0,n.jsxs)("div",{className:m()["k-line-cards"],children:[(0,n.jsxs)("div",{className:m()["k-line-cards-title"],children:[(0,n.jsx)(a.ZP,{color:"primary",variant:"dot"}),(0,n.jsx)(a.ZP,{isSquared:!0,color:"primary",variant:"bordered",children:i})]}),t&&t.map(e=>(0,n.jsxs)("div",{className:m()["k-line-group"],children:[g(e.year),(0,n.jsx)("div",{className:m()["k-line-group-main"],children:e.options&&e.options.map((e,t)=>h(e,t))})]},e.year))]})}},5389:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return u},default:function(){return d}});var n=i(5893),r=i(2459),s=i(3165),a=i(2626),o=i(1158),l=i(9008),c=i.n(l),u=!0;function d(e){let{name:t,data:i,statistics:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.A,{statistics:l,sider:(0,n.jsx)(o.o,{statistics:l}),content:(0,n.jsx)(s.Z,{sm:!0,children:(0,n.jsx)(a.w,{data:i,title:t?"标签 --- ".concat(t):"标签"})})}),(0,n.jsx)(c(),{children:(0,n.jsxs)("title",{children:[" ",t?"标签-".concat(t,"\uD83C\uDFF7️"):"标签\uD83C\uDFF7️"]})})]})}},20:function(e){e.exports={"k-line-cards":"index_k-line-cards__NvWF2","k-line-cards-title":"index_k-line-cards-title__Rh15V","k-line-group":"index_k-line-group__ddEQZ","k-line-group-main":"index_k-line-group-main__iD3_6","k-line-group-item":"index_k-line-group-item__BTH3h","k-line-group-item-date":"index_k-line-group-item-date__oPNgK","k-line-group-item-main":"index_k-line-group-item-main__iX3rQ","k-line-group-item-main-desc":"index_k-line-group-item-main-desc__P2_FP","k-line-group-item-main-arrow":"index_k-line-group-item-main-arrow__0nNqJ","k-line-group-item-main-button":"index_k-line-group-item-main-button__hlye_","k-line-group-title":"index_k-line-group-title__qkJmW"}},9008:function(e,t,i){e.exports=i(3121)}},function(e){e.O(0,[1359,102,9774,2888,179],function(){return e(e.s=3381)}),_N_E=e.O()}]);