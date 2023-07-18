"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6163],{76163:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(59499),o=t(50029),a=t(87794),c=t.n(a),l=t(45650),s=t(86979),u=t(68250),i=t(97501),p=t(27690),d=t(67294),f=t(95516),h=t(5152),m=t.n(h),b=t(85893);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function g(e){e.visible,e.onClose;var r,n=e.onSubmit,a=m()((0,o.Z)(c().mark(function e(){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2431),t.e(2845)]).then(t.bind(t,92845));case 2:return e.abrupt("return",e.sent.User);case 3:case"end":return e.stop()}},e)})),{loadableGenerated:{webpack:function(){return[92845]}}}),h=m()((0,o.Z)(c().mark(function e(){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2431),t.e(6957)]).then(t.bind(t,46957));case 2:return e.abrupt("return",e.sent.Lock);case 3:case"end":return e.stop()}},e)})),{loadableGenerated:{webpack:function(){return[46957]}}}),x=m()((0,o.Z)(c().mark(function e(){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2431),t.e(7557)]).then(t.bind(t,97557));case 2:return e.abrupt("return",e.sent.EmailOutline);case 3:case"end":return e.stop()}},e)})),{loadableGenerated:{webpack:function(){return[97557]}}}),g=(0,d.useState)({nickname:"",email:"",password:"",comfirmpwd:""}),j=g[0],y=g[1],P=(0,d.useState)(!1),v=P[0],O=P[1],Z=(0,d.useState)(0),k=Z[0],C=Z[1],z=(r=(0,o.Z)(c().mark(function e(r){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r&&r.length>3?(O(!0),f.WY.get("/api/checkName",{username:r}).then(function(e){C(e&&e.data?0:1),O(!1)}).catch(function(){return O(!1)})):C(2);case 1:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),S=(0,d.useMemo)(function(){if(!j.email)return{text:"",color:""};var e=j.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);return{text:e?"":"邮箱格式不正确",color:e?"primary":"error"}},[j.email]),E=(0,d.useMemo)(function(){return{text:0==k?"":1==k?"昵称已被使用":"昵称需大于三个字符",color:0==k?"":"error"}},[k]),L=(0,d.useMemo)(function(){if(!j.password)return{text:"",color:""};var e=j.password.length>4&&32>j.password.length;return{text:e?"":"5-32个字符之间",color:e?"primary":"error"}},[j.password]),W=(0,d.useMemo)(function(){if(!j.comfirmpwd||!j.password)return{text:"",color:""};var e=j.comfirmpwd===j.password;return{text:e?"":"两次密码不一致",color:e?"primary":"error"}},[j.comfirmpwd,j.password]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.ZP.Header,{children:(0,b.jsx)(s.Z,{size:18,children:"注册"})}),(0,b.jsxs)(l.ZP.Body,{css:{gap:"$sm",minHeight:"310px"},children:[(0,b.jsx)(u.ZP,{required:!0,clearable:!0,bordered:!0,fullWidth:!0,size:"lg",placeholder:"用户名",status:E.color,color:E.color,helperColor:E.color,helperText:E.text,"aria-labelledby":"modal-title",contentLeft:(0,b.jsx)(a,{}),contentRight:v&&(0,b.jsx)(i.ZP,{size:"xs"}),onChange:function(e){return y(w(w({},j),{},{nickname:e.target.value}))},onBlur:function(){return z(j.nickname)}}),(0,b.jsx)(u.ZP,{clearable:!0,bordered:!0,fullWidth:!0,size:"lg",placeholder:"邮箱",status:S.color,color:S.color,helperColor:S.color,helperText:S.text,"aria-labelledby":"modal-title",contentLeft:(0,b.jsx)(x,{}),onChange:function(e){return y(w(w({},j),{},{email:e.target.value}))}}),(0,b.jsx)(u.ZP.Password,{clearable:!0,bordered:!0,fullWidth:!0,type:"password",size:"lg",placeholder:"密码",status:L.color,color:L.color,helperColor:L.color,helperText:L.text,"aria-labelledby":"modal-title",contentLeft:(0,b.jsx)(h,{}),onChange:function(e){return y(w(w({},j),{},{password:e.target.value}))}}),(0,b.jsx)(u.ZP.Password,{clearable:!0,bordered:!0,fullWidth:!0,type:"password",size:"lg",placeholder:"确认密码",status:W.color,color:W.color,helperColor:W.color,helperText:W.text,"aria-labelledby":"modal-title",contentLeft:(0,b.jsx)(h,{}),onChange:function(e){return y(w(w({},j),{},{comfirmpwd:e.target.value}))}})]}),(0,b.jsx)(l.ZP.Footer,{justify:"center",children:(0,b.jsx)(p.ZP,{rounded:!0,auto:!0,onPress:function(){return n(j)},css:{width:"50%"},children:"注 册"})})]})}}}]);