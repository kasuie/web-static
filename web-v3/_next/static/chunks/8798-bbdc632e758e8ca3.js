(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8798],{375:function(e,s,t){"use strict";t.d(s,{L:function(){return k}});var r=t(5893),a=t(6193),l=t(5650),n=t(6979),i=t(8250),o=t(9372),c=t(4017),d=t(7690),m=t(7501),u=t(5118),p=t(8977),x=t(7055),h=t.n(x),g=t(7294),b=t(1899),j=t(647),f=t(5152),y=t.n(f);let k=e=>{let{isLinkPage:s=!1,coverProps:x={}}=e,[f,k]=(0,g.useState)(!1),[v,Z]=(0,g.useState)(!1),[w,P]=(0,g.useState)(!1),_=y()(async()=>(await t.e(7557).then(t.bind(t,7557))).EmailOutline,{loadableGenerated:{webpack:()=>[7557]}}),[C,z]=(0,g.useState)({blogName:"",blogAddress:"",pictureAddress:"",email:"",detail:""}),N=()=>{k(!0),console.log("add>>>>>")},A=()=>{k(!1)},S=()=>{if(P(!0),C.email&&!B(C.email))return b.ZP.error("请检查邮箱格式~");C.blogName&&C.blogAddress&&C.pictureAddress&&(Z(!0),P(!1),j.WY.post("/api/friend/save",C).then(e=>{e.success?(b.ZP.success("提交成功，请确保自己网站已添加本站为友链哦~"),k(!1)):b.ZP.error(e.message),Z(!1)}).catch(()=>Z(!1)))},B=e=>e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i),G=(0,g.useMemo)(()=>{if(!C.email)return{text:"",color:""};let e=B(C.email);return{text:e&&!w?"":"邮箱格式不正确",color:e&&!w?"primary":"error"}},[C.email,w]),T=(0,g.useMemo)(()=>C.blogAddress||w?{text:C.blogAddress?"":"请输入友链地址",color:C.blogAddress?"primary":"error"}:{text:"",color:""},[C.blogAddress,w]),E=(0,g.useMemo)(()=>C.blogName||w?{text:C.blogName?"":"请输入友链名称",color:C.blogName?"primary":"error"}:{text:"",color:""},[C.blogName,w]),R=(0,g.useMemo)(()=>C.pictureAddress||w?{text:C.pictureAddress?"":"请输入友链图标地址",color:C.pictureAddress?"primary":"error"}:{text:"",color:""},[C.pictureAddress,w]);return(0,r.jsx)(p.B,{...x,content:(0,r.jsxs)("div",{className:h()["k-about-content"],children:[!s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Tips："}),(0,r.jsx)("p",{children:"请使用真实的邮箱，不要打广告，引流什么的，一旦发现会被删除的，谢谢。"})]}),(0,r.jsxs)("p",{children:["友链添加：",(0,r.jsx)(a.ZP,{onPress:()=>N(),css:{margin:"0 10px 0 0"},children:"请戳此处"}),"输入友链信息提交即可。请注意提交时请在自己网站把本站添加为友链哦~"]}),(0,r.jsx)(u.J,{className:h()["k-about-main-markdown"],content:"\n        blogName: 'KASUIEの次元'  #网站的名称\n        blogAddress: 'https://kasuie.top' #网站的地址\n        pictureAddress: 'https://i.loli.net/2020/11/19/hY1NXDLvmkRptTi.jpg' #网站的图标/或你的头像\n        detail: '喜欢温柔的人' #网站的描述\n    "}),!s&&(0,r.jsx)("p",{children:"私信：你可以在PC端左侧查看到我的联系方式，或者在下方留言并勾选“私密评论”。"}),(0,r.jsxs)(l.ZP,{closeButton:!0,blur:!0,preventClose:!0,"aria-labelledby":"apply filendlink",width:"500px",open:f,onClose:A,css:{maxWidth:"94vw",margin:"0 auto"},children:[(0,r.jsx)(l.ZP.Header,{children:(0,r.jsx)(n.Z,{size:18,children:"友链信息"})}),(0,r.jsxs)(l.ZP.Body,{css:{gap:"$sm"},children:[(0,r.jsx)(i.ZP,{required:!0,clearable:!0,bordered:!0,fullWidth:!0,"aria-labelledby":"modal-title",size:"lg",placeholder:"友链名称",status:E.color,color:E.color,helperColor:E.color,helperText:E.text,onChange:e=>{z({...C,blogName:e.target.value})}}),(0,r.jsx)(i.ZP,{required:!0,clearable:!0,bordered:!0,fullWidth:!0,"aria-labelledby":"modal-title",size:"lg",placeholder:"友链地址",status:T.color,color:T.color,helperColor:T.color,helperText:T.text,onChange:e=>{z({...C,blogAddress:e.target.value})}}),(0,r.jsx)(i.ZP,{required:!0,clearable:!0,bordered:!0,fullWidth:!0,"aria-labelledby":"modal-title",size:"lg",placeholder:"友链图标",status:R.color,color:R.color,helperColor:R.color,helperText:R.text,contentLeft:C.pictureAddress&&(0,r.jsx)(o.ZP,{size:"sm",src:C.pictureAddress,pointer:!0}),onBlur:e=>{z({...C,pictureAddress:e.target.value})}}),(0,r.jsx)(i.ZP,{required:!0,clearable:!0,bordered:!0,fullWidth:!0,size:"lg",placeholder:"联系邮箱（非必填，添加成功后会发邮件给你）",status:G.color,color:G.color,helperColor:G.color,helperText:G.text,"aria-labelledby":"modal-title",contentLeft:(0,r.jsx)(_,{}),onChange:e=>{P(!1),z({...C,email:e.target.value})}}),(0,r.jsx)(c.Z,{required:!0,bordered:!0,fullWidth:!0,maxLength:100,color:"primary",size:"lg","aria-labelledby":"modal-title",placeholder:"友链描述",onChange:e=>{z({...C,detail:e.target.value})},minRows:2,maxRows:5})]}),(0,r.jsxs)(l.ZP.Footer,{justify:"flex-end",children:[(0,r.jsx)(d.ZP,{auto:!0,flat:!0,color:"error",onPress:()=>k(!1),children:"关闭"}),(0,r.jsx)(d.ZP,{auto:!0,onPress:()=>S(),icon:v&&(0,r.jsx)(m.ZP,{color:"currentColor",size:"xs"}),children:"提交"})]})]})]})})}},5118:function(e,s,t){"use strict";t.d(s,{J:function(){return g}});var r=t(5893),a=t(1157),l=t(5146),n=t(6199),i=t(2687),o=t(7501),c=t(9837),d=t(6193),m=t(1455),u=t(3944);t(2428);var p=t(7294),x=t(9927);function h(e){let s=(0,p.useRef)(null);return(0,r.jsxs)("pre",{ref:s,children:[(0,r.jsx)("span",{className:"k-copy-code",onClick:()=>{if(s.current){let e=s.current.innerText;(0,x.vQ)(e)}},title:"copy",children:(0,r.jsx)(u.C,{size:16})}),e.children]})}let g=e=>{let{content:s}=e;return(0,r.jsx)(a.D,{className:"k-markdown",children:s,rehypePlugins:[l.Z,[i.Z,{detect:!1,ignoreMissing:!0}]],remarkPlugins:[n.Z],components:{pre:h,img:e=>{let{src:s,alt:t}=e;return(0,r.jsx)(m.TV,{maskOpacity:.7,loadingElement:(0,r.jsx)(o.ZP,{children:"加载中..."}),children:(0,r.jsx)(m.HI,{src:s,children:(0,r.jsx)(c.ZP,{showSkeleton:!0,src:s,alt:t,loading:"lazy",objectFit:"cover",css:{cursor:"pointer",maxHeight:"320px",borderRadius:"5px",padding:"2px"}})})},t)},a:e=>{let{href:s,children:t,target:a}=e;return(0,r.jsx)(d.ZP,{href:s,target:a,underline:!0,isExternal:!0,children:t&&t[0]})}}})}},7323:function(e,s,t){"use strict";t.d(s,{r:function(){return J}});var r=t(5893),a=t(3165),l=t(6979),n=t(7294),i=t(4040),o=t(967),c=t(7690),d=t(2495),m=t(5596),u=t.n(m),p=t(5152),x=t.n(p),h=t(9927);let g=x()(async()=>(await t.e(9164).then(t.bind(t,9164))).DeleteItem,{loadableGenerated:{webpack:()=>[9164]}}),b=x()(async()=>(await t.e(4980).then(t.bind(t,4980))).Windows,{loadableGenerated:{webpack:()=>[4980]}}),j=x()(async()=>(await t.e(4095).then(t.bind(t,4095))).Chrome,{loadableGenerated:{webpack:()=>[4095]}}),f=x()(async()=>(await t.e(4225).then(t.bind(t,4225))).Android,{loadableGenerated:{webpack:()=>[4225]}}),y=x()(async()=>(await t.e(401).then(t.bind(t,8827))).Apple,{loadableGenerated:{webpack:()=>[8827]}}),k=x()(async()=>(await t.e(7940).then(t.bind(t,7940))).Opera,{loadableGenerated:{webpack:()=>[7940]}}),v=x()(async()=>(await t.e(2756).then(t.bind(t,2756))).Firefox,{loadableGenerated:{webpack:()=>[2756]}}),Z=x()(async()=>(await t.e(4256).then(t.bind(t,4256))).InternetExplorer,{loadableGenerated:{webpack:()=>[4256]}}),w=x()(async()=>(await t.e(7832).then(t.bind(t,7832))).Linux,{loadableGenerated:{webpack:()=>[7832]}}),P=x()(async()=>(await t.e(3314).then(t.bind(t,3314))).Safari,{loadableGenerated:{webpack:()=>[3314]}}),_=x()(async()=>(await t.e(6014).then(t.bind(t,6014))).Edge,{loadableGenerated:{webpack:()=>[6014]}}),C=x()(async()=>(await t.e(6918).then(t.bind(t,6918))).Verified,{loadableGenerated:{webpack:()=>[6918]}}),z=x()(async()=>(await t.e(5769).then(t.bind(t,5769))).LaptopMac,{loadableGenerated:{webpack:()=>[5769]}}),N=x()(async()=>(await t.e(9321).then(t.bind(t,9321))).RibbonStar,{loadableGenerated:{webpack:()=>[9321]}}),A=x()(async()=>(await t.e(2450).then(t.bind(t,2450))).CommentError,{loadableGenerated:{webpack:()=>[2450]}}),S=x()(async()=>(await t.e(8797).then(t.bind(t,8797))).SendClock,{loadableGenerated:{webpack:()=>[8797]}}),B=e=>{let{data:s,id:t,typeReply:n,onProxy:m,disabled:p,user:x}=e||{},B=function(e){let s=!(arguments.length>1)||void 0===arguments[1]||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,a=e.toLowerCase();if(s){if(a.includes("windows"))return(0,r.jsx)(b,{size:t});if(a.includes("android"))return(0,r.jsx)(f,{size:t});if(a.includes("iphone"))return(0,r.jsx)(y,{size:t});if(a.includes("linux"))return(0,r.jsx)(w,{size:t});else if(a.includes("mac"))return(0,r.jsx)(z,{size:t});else if(a.includes("Unix"))return(0,r.jsx)(w,{size:t})}else{if(a.includes("opera"))return(0,r.jsx)(k,{size:t});if(a.includes("edge"))return(0,r.jsx)(_,{size:t});if(a.includes("chrome"))return(0,r.jsx)(j,{size:t});if(a.includes("firefox"))return(0,r.jsx)(v,{size:t});else if(a.includes("safari"))return(0,r.jsx)(P,{size:t});else if(a.includes("ie"))return(0,r.jsx)(Z,{size:t})}return""};return(0,r.jsxs)(a.Z,{id:t,gap:0,justify:"flex-start",className:u()["message-item"],children:[(0,r.jsx)(i.Z,{gap:1,css:{marginBottom:"$xs"},className:u()["message-item-header"],children:(0,r.jsx)(o.ZP,{className:u()["message-item-user"],size:"lg",pointer:!0,bordered:!0,zoomed:!0,color:"primary",src:s.avatar?"https://kasuie.cc".concat(s.avatar):"https://cdn.staticaly.com/gh/pixlips/picx-images-hosting@master/avatar/default.1srjnccqnby8.webp",text:s.nickname,description:(0,h.vc)(s.createTime,"yyyy-MM-dd HH:mm:ss aaa cccc"),name:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{css:{display:"flex",alignItems:"center",gap:"5px",fontWeight:"600"},children:[(0,r.jsx)(l.Z,{span:!0,children:s.nickname}),s.uid>=0?s.isAdmin?(0,r.jsx)(C,{size:16}):(0,r.jsx)(N,{size:16}):null]}),s.os||s.browser?(0,r.jsxs)(l.Z,{className:u()["message-item-meta-device"],children:[s.os?(0,r.jsxs)(l.Z,{span:!0,children:[s.os,B(s.os)]}):null,s.browser?(0,r.jsxs)(l.Z,{span:!0,children:[s.browser,B(s.browser,!1)]}):null]}):null]})})}),(0,r.jsx)(i.Z,{gap:1,className:u()["message-item-content"],children:(0,r.jsx)(l.Z,{css:{paddingLeft:"$3xl",display:"flex",alignItems:"center",flexWrap:"wrap",gap:"5px"},children:s.isPrivate?x&&x.uid==s.uid||x&&!(x.level<2)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{size:16}),(0,r.jsx)(l.Z,{span:!0,children:s.content})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A,{size:16}),(0,r.jsx)(l.Z,{span:!0,children:"该评论为私密评论，仅评论双方可见"})]}):s.content})}),!p&&!(s.isPrivate&&(!x||x.uid!=s.uid)&&(!x||x.level<2))&&(0,r.jsxs)(i.Z,{className:u()["message-item-button"],gap:1,css:{padding:"$sm 0 $sm $3xl",gap:"$sm"},children:[(0,r.jsx)(c.ZP,{auto:!0,ghost:!0,rounded:!0,size:"xs",color:"primary",onPress:()=>n(t,s.nickname),children:"Reply"}),x&&(x.level>2||s.uid===x.uid)&&(0,r.jsx)(d.ZP,{placement:"bottom",trigger:"click",content:(0,r.jsx)(g,{onConfirm:()=>m("delete",s)}),children:(0,r.jsx)(c.ZP,{auto:!0,ghost:!0,rounded:!0,size:"xs",color:"error",children:"Delete"})})]})]})};var G=t(5972),T=t(2553),E=t(4017),R=t(8250),$=t(7501),L=t(6322),W=t(647),q=t(1109),I=t.n(q);let M=e=>{let{data:s,id:t,onSubmit:a,onCancle:i,parentId:o,isLoading:m,user:u}=e||{},{value:p,reset:x,bindings:g}=(0,G.Z)(""),[b,j]=(0,n.useState)(""),[f,y]=(0,n.useState)(""),[k,v]=(0,n.useState)(""),[Z,w]=(0,n.useState)(""),[P,_]=(0,n.useState)(0),[C,z]=(0,n.useState)(!0),[N,A]=(0,n.useState)(!1),[S,B]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(u){let{username:e,email:s}=u||{};y(e),v(s)}},[u]);let q=e=>e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i),M=(0,n.useMemo)(()=>{if(!k)return{text:"",color:""};let e=q(k);return{text:e?"":"邮箱格式不正确",color:e?"primary":"error"}},[k]),F=async e=>{e?(A(!0),W.WY.get("/api/checkName",{username:e}).then(e=>{_(e&&e.data?0:1),A(!1)}).catch(()=>A(!1))):_(2)},O=(0,n.useMemo)(()=>({text:0==P?"":1==P?"昵称已被占用":"请输入昵称",color:0==P?"primary":"error"}),[P]),J=(0,n.useMemo)(()=>({text:C?"":"请输入内容",color:C?"primary":"error"}),[C]),H=()=>{z(!!b),f||_(2),f&&b&&a&&a({uid:u&&u.uid||-1,content:b,nickname:f,avatar:u&&u.avatar||null,email:k,site:p,isPrivate:S,browser:(0,h.Xh)(),os:(0,h.Ij)()})};return(0,r.jsxs)(T.ZP.Container,{id:"respond",gap:2,css:{padding:"0 $2",width:"100%"},className:I()["k-leave"],children:[(0,r.jsxs)(T.ZP,{xs:12,alignItems:"center",css:{paddingBottom:"$lg"},children:[(0,r.jsx)(l.Z,{h4:!0,css:{marginBottom:"0"},children:"留下你的评论吧"}),-1!=o&&(0,r.jsx)(c.ZP,{auto:!0,bordered:!0,color:"error",size:"xs",css:{marginLeft:"$md"},onPress:()=>{i&&i()},children:"取消评论"})]}),(0,r.jsx)(T.ZP,{xs:12,css:{marginBottom:"$sm"},children:(0,r.jsx)(E.Z,{required:!0,bordered:!0,fullWidth:!0,maxLength:2e3,status:J.color||"primary",color:J.color,helperColor:J.color,helperText:J.text,labelPlaceholder:"说点什么吧 o(〃＾▽＾〃)o",minRows:5,maxRows:12,onChange:e=>j(e.target.value),onBlur:()=>z(!!b)})}),(0,r.jsx)(T.ZP,{xs:2.8,className:I()["k-leave-input"],children:(0,r.jsx)(R.ZP,{required:!0,underlined:!0,fullWidth:!0,value:f,labelPlaceholder:"Name",status:O.color||"primary",color:O.color,helperColor:O.color,helperText:O.text,contentRight:N&&(0,r.jsx)($.ZP,{size:"xs"}),onClearClick:()=>y(""),onChange:e=>y(e.target.value),onBlur:()=>{u&&u.username==f||F(f)}})}),(0,r.jsx)(T.ZP,{xs:2.8,className:I()["k-leave-input"],children:(0,r.jsx)(R.ZP,{value:k,clearable:!0,required:!0,underlined:!0,fullWidth:!0,type:"email",labelPlaceholder:"Email",status:M.color||"primary",color:M.color,helperColor:M.color,helperText:M.text,onClearClick:()=>v(""),onChange:e=>v(e.target.value)})}),(0,r.jsx)(T.ZP,{xs:2.8,className:I()["k-leave-input"],children:(0,r.jsx)(R.ZP,{...g,clearable:!0,required:!0,underlined:!0,fullWidth:!0,labelPlaceholder:"Site",labelLeft:Z,status:"primary",onClearClick:x,onFocus:()=>w("http(s)://"),onBlur:()=>w("")})}),(0,r.jsxs)(T.ZP,{xs:3.6,className:I()["k-leave-button"],justify:"flex-end",children:[(0,r.jsx)(d.ZP,{content:"私密评论仅自己和对方可见",trigger:"hover",children:(0,r.jsx)(L.ZP,{color:"primary",labelColor:"primary",size:"xs",onChange:e=>{B(e)},css:{marginRight:"$sm"},children:"私密"})}),(0,r.jsx)(c.ZP,{color:"primary",auto:!0,onPress:()=>!N&&H(),icon:(N||m)&&(0,r.jsx)($.ZP,{color:"currentColor",size:"xs"}),children:"Leave a Comment"})]})]})};var F=t(4712),O=t.n(F);let J=e=>{let{data:s,maps:t,isLoading:i,onProxy:o,title:c,disabled:d,user:m}=e||{},u=Object.keys(t),[p,x]=(0,n.useState)(-1),[h,g]=(0,n.useState)("");(0,n.useEffect)(()=>{let{activeId:s}=e;setTimeout(()=>{s&&b(0,s)},100)},[e]);let b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0,t=s?v("comment-".concat(s)):null,r=document&&document.getElementsByTagName("html")[0];r&&r.scrollTo({top:s?t?t.offsetTop+100:0:e,behavior:"smooth"})},j=function(e,s){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)for(let t in s)e[s[t]]=e[t];return t?Object.assign({},e):e.map(e=>(u.forEach(t=>{e[t]=e["".concat(s[t])]}),e.replys&&e.replys.length&&(e.replys=j(e.replys,s)),e))},f=e=>{o("submit",e=j({...e,parentId:p,parentName:h},t,!0))},y=(e,s,t)=>{if(p!=s){x(s),g(t);let r=v("respond"),a=v(e);a.append(r)}},k=()=>{x(-1),g("");let e=v("comments-tips"),s=v("respond");e.parentNode.insertBefore(s,e)},v=e=>document.getElementById(e);return t&&u.length&&s&&s.length&&(s=j(s,t)),(0,r.jsxs)(a.Z,{gap:0,display:"flex",direction:"column",justify:"center",css:{gap:"$md",padding:"$lg 0"},className:O()["k-messages-main"],children:[!d&&(0,r.jsx)(M,{onSubmit:f,onCancle:k,parentId:p,isLoading:i,user:m}),(0,r.jsx)(l.Z,{h3:!0,id:"comments-tips",children:s&&s.length?"已有".concat(s.length,"条").concat(c||"评论"):""}),s&&s.map((e,s)=>(0,r.jsxs)("div",{className:O()["k-messages-main-item"],children:[(0,r.jsx)(B,{id:"comment-".concat(e.id),data:e,user:m,typeReply:(s,t)=>y(s,e.id,t),onProxy:o},"m".concat(s)),e.replys&&e.replys.length?(0,r.jsx)("div",{className:O()["k-messages-main-item-child"],children:e.replys.map((s,t)=>(0,r.jsx)(B,{id:"comment-".concat(s.id),data:s,user:m,disabled:d,typeReply:(e,t)=>y(e,s.id,t),onProxy:o},"mm".concat(e.id).concat(s.id).concat(t)))},"c".concat(e.id)):null]},"".concat(s)))]})}},8977:function(e,s,t){"use strict";t.d(s,{B:function(){return c}});var r=t(5893),a=t(3950),l=t(5675),n=t.n(l),i=t(2893),o=t.n(i);let c=e=>{let{content:s,header:t,cover:l,hiddenProgress:i=!1}=e;return(0,r.jsxs)("div",{className:o()["k-top"],children:[(0,r.jsxs)("div",{className:"".concat(o()["k-top-cover"]," ").concat(t?o()["k-top-cover-has"]:""),children:[(0,r.jsx)(n(),{className:o()["k-top-cover"],fill:!0,sizes:"100%",src:l||"https://cdn.staticaly.com/gh/pixlips/picx-images-hosting@master/next/UwkpdyfvRr1nVKj.13dp8z42m4zk.webp",alt:"kasuie page cover",style:{objectFit:"cover"}}),t]}),(0,r.jsxs)("div",{className:o()["k-top-main"],children:[s,!i&&(0,r.jsx)(a.ZP,{color:"primary",size:"xs",value:100,css:{margin:"20px 0"}})]})]})}},7055:function(e){e.exports={"k-about-content":"index_k-about-content__f_Uq1"}},4712:function(e){e.exports={"k-messages-main-item-child":"index_k-messages-main-item-child__Y5Rfx"}},5596:function(e){e.exports={"message-item-user":"index_message-item-user__INBPi","message-item-meta-device":"index_message-item-meta-device__sTJNk","message-item":"index_message-item__m6yjJ","message-item-header":"index_message-item-header__RaX_y","message-item-content":"index_message-item-content__nvr7K","message-item-button":"index_message-item-button__gUzZB"}},1109:function(e){e.exports={"k-leave-input":"index_k-leave-input__ldr0F","k-leave-button":"index_k-leave-button__Obywp"}},2893:function(e){e.exports={"k-top":"index_k-top__JCoCl","k-top-cover":"index_k-top-cover__qh5tO","k-top-cover-has":"index_k-top-cover-has__LhE1J","k-top-main":"index_k-top-main__hAbdV"}}}]);