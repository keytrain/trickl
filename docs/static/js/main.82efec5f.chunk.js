(this.webpackJsonptrickl=this.webpackJsonptrickl||[]).push([[0],{199:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(120),a=n.n(r),s=n(59),o=n(18);var u={apiGateway:{REGION:"us-west-1",URL:"https://fbj97y4ndj.execute-api.us-west-1.amazonaws.com/prod"},cognito:{REGION:"us-west-2",USER_POOL_ID:"us-west-2_f9b0JeeMD",APP_CLIENT_ID:"7st7lq4rb5iuqc5uj3bcttimmo",IDENTITY_POOL_ID:"us-west-2:54671dce-0a57-4b44-a212-1d8cf1b2f359"}},i=n(22),d=n(131);const l="SET_AUTHENTICATED",b="LOAD_SESSION_REQUESTED",j="LOAD_SESSION_COMPLETED",h="LOGIN_REQUESTED",O="LOGIN_SUCCESS",p="LOGIN_FAILURE",x="LOGOUT_REQUESTED",g="LOGOUT_SUCCESS",m="SAVE_USER_INFO",f="SIGNUP_REQUESTED",E="SIGNUP_SUCCESS",v="SIGNUP_FAILURE",S="VERIFY_SIGNUP_REQUESTED",C="VERIFY_SIGNUP_SUCCESS",N="VERIFY_SIGNUP_FAILURE",I=e=>({type:l,status:e}),T=()=>({type:b}),U=()=>({type:j}),y=(e,t)=>({type:h,email:e,password:t}),R=()=>({type:p}),_=()=>({type:E}),w=Object(i.c)({loading:(e=!1,{type:t})=>{switch(t){case b:return!0;case j:return!1;default:return e}},authenticated:(e=!1,{type:t,status:n})=>{switch(t){case l:return n;default:return e}},loginStatus:(e="LOGIN",{type:t})=>{switch(t){case h:return"CHECKING";case p:return"INCORRECT CREDENTIALS";case O:return"SUCCESS";case g:return"LOGIN";default:return e}},signUpStatus:(e="SIGN UP",{type:t})=>{switch(t){case f:return"SIGNING UP";case v:return"SIGN UP FAILED";case E:return"VERIFY";case S:return"VERIFYING";case N:return"INCORRECT CODE";case C:return"SIGN UP";default:return e}}});var k=Object(i.c)({session:w,userData:(e={},{type:t,info:n})=>{switch(t){case m:return n;default:return e}}});const D="CREATE_COLUMN_REQUESTED",L="CREATE_COLUMN_SUCCESS",G="ADD_THOUGHT_REQUESTED",F="ADD_THOUGHT_SUCCESS",A="EDIT_THOUGHT_REQUESTED",P="EDIT_THOUGHT_SUCCESS",H="DEL_THOUGHT_REQUESTED",V="DEL_THOUGHT_SUCCESS",Y="FETCH_COLUMN_REQUESTED",M="FETCH_COLUMN_SUCCESS",Q="SET_CURRENT_THOUGHT",B=e=>({type:"CREATE_COLUMN_FAILURE",data:e}),J=e=>({type:"ADD_THOUGHT_FAILURE",data:e}),K=e=>({type:"EDIT_THOUGHT_FAILURE",data:e}),q=e=>({type:"DEL_THOUGHT_FAILURE",data:e}),z=e=>({type:"FETCH_COLUMN_FAILURE",data:e});var X=Object(i.c)({currRoot:(e="",{type:t,data:n})=>{switch(t){case M:return n.id;default:return e}},currColumnText:(e=[],{type:t,data:n})=>{switch(t){case M:return n.children.map((e=>({id:e.id,text:e.content.text})));case F:return[].concat(e,{id:n.newThoughtId,text:n.text});case V:return[].concat(e.slice(0,n.index),e.slice(Number(n.index)+1));case P:return Object.assign([...e],{[n.index]:{id:e[n.index].id,text:n.text}});default:return e}},currThought:(e=0,{type:t,data:n})=>{switch(t){case Q:return n.index;case V:return 0;default:return e}}});const W="COLLAPSE_SIDEBAR";var Z=Object(i.c)({collapseSidebar:(e=!1,{type:t})=>{switch(t){case W:return!e;default:return e}}});var $=Object(i.c)({ui:Z,currentUser:k,data:X}),ee=n(11),te=n.n(ee),ne=n(5),ce=n(61);const re=()=>ce.a.currentSession().catch((e=>{"No current user"!==e&&console.warn("No session"),console.warn(e)})),ae=(e,t)=>ce.a.signIn(e,t),se=()=>ce.a.signOut(),oe=(e,t)=>ce.a.signUp({username:e,password:t}),ue=(e,t)=>ce.a.confirmSignUp(e,t),ie=e=>ce.a.resendSignUp(e);var de=n(119);const le=()=>de.a.post("users","/users",{}).catch((e=>{console.warn(e.message)})),be=e=>de.a.get("users","/users",{}).catch((e=>{console.warn(e.message)}));var je=te.a.mark(me),he=te.a.mark(fe),Oe=te.a.mark(Ee),pe=te.a.mark(ve),xe=te.a.mark(Se),ge=te.a.mark(Ce);function me(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ne.b)(re);case 3:if(!t.sent){t.next=16;break}return t.next=7,Object(ne.c)(I(!0));case 7:return t.next=9,Object(ne.c)(U());case 9:return t.next=11,Object(ne.b)(Ce);case 11:return e=t.sent,t.next=14,Object(ne.c)((n={id:e.thoughtRoot},{type:Y,data:n}));case 14:t.next=18;break;case 16:return t.next=18,Object(ne.c)(U());case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.error(t.t0.message),"No current user"!==t.t0&&console.warn("No session");case 24:case"end":return t.stop()}var n}),je,null,[[0,20]])}function fe({email:e,password:t}){return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,Object(ne.b)(ae,e,t);case 5:if(!n.sent){n.next=13;break}return n.next=9,Object(ne.c)({type:O});case 9:return n.next=11,Object(ne.c)(T());case 11:n.next=15;break;case 13:return n.next=15,Object(ne.c)(R());case 15:n.next=22;break;case 17:return n.prev=17,n.t0=n.catch(2),console.error(n.t0.message),n.next=22,Object(ne.c)(R());case 22:case"end":return n.stop()}}),he,null,[[2,17]])}function Ee(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ne.b)(se);case 3:return e.next=5,Object(ne.c)(I(!1));case 5:return e.next=7,Object(ne.c)({type:g});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),Oe,null,[[0,9]])}function ve({email:e,password:t}){return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,Object(ne.b)(oe,e,t);case 5:if(!n.sent){n.next=9;break}return n.next=9,Object(ne.c)(_());case 9:n.next=30;break;case 11:if(n.prev=11,n.t0=n.catch(2),"UsernameExistsException"!==n.t0.name){n.next=28;break}return n.prev=14,n.next=17,Object(ne.b)(ae,e,t);case 17:n.next=26;break;case 19:if(n.prev=19,n.t1=n.catch(14),"UserNotConfirmedException"!==n.t1.name){n.next=26;break}return n.next=24,Object(ne.b)(ie,e);case 24:return n.next=26,Object(ne.c)(_());case 26:n.next=30;break;case 28:return n.next=30,Object(ne.c)({type:v});case 30:case"end":return n.stop()}}),pe,null,[[2,11],[14,19]])}function Se({email:e,password:t,confirmationCode:n}){return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(e&&t&&n){c.next=2;break}return c.abrupt("return");case 2:return c.prev=2,c.next=5,Object(ne.b)(ue,e,n);case 5:return c.next=7,Object(ne.c)({type:C});case 7:return c.next=9,Object(ne.c)(y(e,t));case 9:c.next=16;break;case 11:return c.prev=11,c.t0=c.catch(2),console.error(c.t0.message),c.next=16,Object(ne.c)({type:N});case 16:case"end":return c.stop()}}),xe,null,[[2,11]])}function Ce(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ne.b)(be);case 3:if(e=t.sent){t.next=13;break}return console.error("Can't fetch user for some reason"),t.next=8,Object(ne.b)(le);case 8:return e=t.sent,t.next=11,Object(ne.c)((n={thoughtRoot:e.thoughtRoot,text:" "},{type:D,data:n}));case 11:return t.next=13,Object(ne.d)(L);case 13:return t.next=15,Object(ne.c)({type:m,info:e});case 15:return t.abrupt("return",e);case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0.message);case 21:case"end":return t.stop()}var n}),ge,null,[[0,18]])}var Ne=[Object(ne.e)(b,me),Object(ne.e)(h,fe),Object(ne.e)(x,Ee),Object(ne.e)(f,ve),Object(ne.e)(S,Se)];const Ie=(e,t)=>de.a.post("thoughts","/thoughts",{body:{id:e,text:t}}),Te=(e,t)=>de.a.put("thoughts","/thoughts/".concat(e),{body:{action:"add",text:t}}),Ue=(e,t)=>de.a.put("thoughts","/thoughts/".concat(e),{body:{action:"delete",index:t}}),ye=(e,t,n)=>de.a.put("thoughts","/thoughts/".concat(e),{body:{action:"update",index:t,text:n}}),Re=e=>de.a.get("thoughts","/thoughts/".concat(e));var _e=te.a.mark(Ge),we=te.a.mark(Fe),ke=te.a.mark(Ae),De=te.a.mark(Pe),Le=te.a.mark(He);function Ge({data:{thoughtRoot:e,text:t}}){var n;return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(ne.b)(Ie,e,t);case 3:return n=c.sent,c.next=6,Object(ne.c)({type:L,data:n});case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(0),console.error(c.t0.message),c.next=13,Object(ne.c)(B());case 13:case"end":return c.stop()}}),_e,null,[[0,8]])}function Fe({data:{id:e,text:t}}){var n;return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(ne.b)(Te,e,t);case 3:return n=c.sent,c.next=6,Object(ne.c)({type:F,data:{id:e,newThoughtId:n,text:t}});case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(0),console.error(c.t0.message),c.next=13,Object(ne.c)(J());case 13:case"end":return c.stop()}}),we,null,[[0,8]])}function Ae({data:{id:e,index:t,text:n}}){return te.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(ne.b)(ye,e,t,n);case 3:return c.next=5,Object(ne.c)({type:P,data:{id:e,index:t,text:n}});case 5:c.next=12;break;case 7:return c.prev=7,c.t0=c.catch(0),console.error(c.t0.message),c.next=12,Object(ne.c)(K());case 12:case"end":return c.stop()}}),ke,null,[[0,7]])}function Pe({data:{id:e,index:t}}){return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ne.b)(Ue,e,t);case 3:return n.next=5,Object(ne.c)({type:V,data:{id:e,index:t}});case 5:n.next=12;break;case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0.message),n.next=12,Object(ne.c)(q());case 12:case"end":return n.stop()}}),De,null,[[0,7]])}function He({data:{id:e}}){var t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ne.b)(Re,e);case 3:return t=n.sent,n.next=6,Object(ne.c)({type:M,data:t});case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0.message),n.next=13,Object(ne.c)(z());case 13:case"end":return n.stop()}}),Le,null,[[0,8]])}var Ve=[Object(ne.e)(D,Ge),Object(ne.e)(G,Fe),Object(ne.e)(A,Ae),Object(ne.e)(H,Pe),Object(ne.e)(Y,He)],Ye=te.a.mark(Me);function Me(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([...Ne,...Ve]);case 2:case"end":return e.stop()}}),Ye)}const Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d;var Be=e=>{const t=Object(d.a)(),n=Object(i.e)($,e,Qe(Object(i.a)(t)));return t.run(Me),n},Je=(n(198),n(199),n(243)),Ke=n(244),qe=n(245),ze=n(242),Xe=n(4);class We extends c.Component{render(){return this.props.authenticated?Object(Xe.jsx)(ze.a,{to:"/dash"}):Object(Xe.jsx)(ze.a,{to:"/login"})}}var Ze=Object(o.b)((e=>({authenticated:e.currentUser.authenticated})))(We),$e=n(32),et=n(132);n(202);var tt=Object(o.b)((e=>{const t=e.currentUser.session;return{authenticated:t.authenticated,loginStatus:t.loginStatus,signUpStatus:t.signUpStatus}}),(e=>({setAuth:t=>e(I(t)),login:(t,n)=>e(y(t,n)),signUp:(t,n)=>e(((e,t)=>({type:f,email:e,password:t}))(t,n)),verifySignUp:(t,n,c)=>e(((e,t,n)=>({type:S,email:e,password:t,confirmationCode:n}))(t,n,c))})))((function({login:e,loginStatus:t,authenticated:n,signUp:r,verifySignUp:a,signUpStatus:s}){const o=Object(c.useState)(""),u=Object($e.a)(o,2),i=u[0],d=u[1],l=Object(c.useState)(""),b=Object($e.a)(l,2),j=b[0],h=b[1],O=Object(c.useState)("login"),p=Object($e.a)(O,2),x=p[0],g=p[1],m=Object(c.useState)(""),f=Object($e.a)(m,2),E=f[0],v=f[1],S=Object(c.useState)(""),C=Object($e.a)(S,2),N=C[0],I=C[1];return n?Object(Xe.jsx)(et.a,{to:"/dash"}):Object(Xe.jsxs)("div",{className:"login-container",children:[Object(Xe.jsx)("h1",{children:"trickl"}),Object(Xe.jsx)("h5",{children:"a place for thoughts"}),Object(Xe.jsx)("div",{className:"login-form",children:Object(Xe.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),"VERIFY"!==s&&"INCORRECT CODE"!==s)switch(x){case"login":if(!i||!j)return;e(i,j);break;case"signup":if(!i||!j)return;N===j&&r(i,j)}else{if(!i||!j||!E)return;a(i,j,E)}},children:["VERIFY"!==s&&"INCORRECT CODE"!==s&&"VERIFYING"!==s&&Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsxs)("div",{className:"input-group",children:[Object(Xe.jsx)("label",{children:"Email"}),Object(Xe.jsx)("input",{type:"text",name:"email",value:i,onChange:function(e){const t=e.target.value;d(t)},autoFocus:!0})]}),Object(Xe.jsxs)("div",{className:"input-group",children:[Object(Xe.jsx)("label",{children:"Password"}),Object(Xe.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){const t=e.target.value;h(t)}})]})]}),"signup"===x&&"VERIFY"!==s&&"VERIFYING"!==s&&"INCORRECT CODE"!==s&&Object(Xe.jsxs)("div",{className:"input-group",children:[Object(Xe.jsx)("label",{children:"Confirm Password"}),Object(Xe.jsx)("input",{type:"password",name:"confirmPassword",value:N,onChange:function(e){const t=e.target.value;I(t)}})]}),("VERIFY"===s||"VERIFYING"===s||"INCORRECT CODE"===s)&&Object(Xe.jsxs)("div",{className:"input-group",children:[Object(Xe.jsx)("label",{children:"Confirmation Code"}),Object(Xe.jsx)("input",{type:"text",name:"confirmationCode",value:E,onChange:function(e){const t=e.target.value;v(t)}})]}),Object(Xe.jsxs)("div",{className:"login-actions",children:[Object(Xe.jsx)("button",{className:"button",type:"submit",children:"signup"===x?s:t}),Object(Xe.jsxs)("button",{className:"button-secondary",onClick:()=>{g("login"===x?"signup":"login")},children:["login"===x&&"Sign Up","signup"===x&&"Back"]})]})]})}),Object(Xe.jsxs)("div",{className:"login-footer",children:[Object(Xe.jsx)("a",{href:"https://github.com/keytrain/trickl",children:"github"}),"thanks for visiting"]})]})}));n(203);var nt=Object(o.b)((e=>({currThoughtIndex:e.data.currThought})),(e=>({setThought:t=>e({type:Q,data:{index:t}})})))((function({currThoughtIndex:e,index:t,thought:n,setThought:c}){return Object(Xe.jsx)("div",{className:"tile-container",onClick:()=>{c(t)},children:Object(Xe.jsx)("div",{className:"tile ".concat(t===e?"tile-selected":""),children:n.length>0?n:"untitled"})})}));n(204);var ct=Object(o.b)((e=>{const t=e.currentUser.userData.thoughtRoot;return{currColumnText:e.data.currColumnText,collapseSidebar:e.ui.collapseSidebar,thoughtRoot:t}}),(e=>({addThought:(t,n)=>e({type:G,data:{id:t,text:n}})})))((function({addThought:e,currColumnText:t,thoughtRoot:n}){return Object(Xe.jsx)("div",{className:"column-container",children:t?Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)("div",{children:t.map(((e,t)=>Object(Xe.jsx)(nt,{parentId:n,thought:e.text?e.text.split("\n")[0]:"",index:t},e.id)))}),Object(Xe.jsx)("div",{className:"add-thought-icon",children:Object(Xe.jsx)("button",{className:"add-thought-button",onClick:function(){e(n,null)},children:"new note"})})]}):Object(Xe.jsx)("div",{className:"loading-content",children:"Loading thoughts..."})})}));n(205),n(206);class rt extends c.Component{render(){return Object(Xe.jsx)("div",{className:"logo-container",children:Object(Xe.jsx)("div",{className:"teardrop"})})}}var at=rt;n(207);var st=Object(o.b)(null,(e=>({editThought:(t,n,c)=>e({type:A,data:{id:t,index:n,text:c}}),delThought:(t,n)=>e({type:H,data:{id:t,index:n}})})))((function({parentId:e,editThought:t,delThought:n,index:r,thought:a}){const s=Object(c.useState)(a),o=Object($e.a)(s,2),u=o[0],i=o[1],d=Object(c.useState)(!1),l=Object($e.a)(d,2),b=l[0],j=l[1],h=Object(c.useRef)(null);function O(){t(e,r,u),j(!1)}function p(){j(!1),i(a)}function x(){h.current.blur(),h.current.focus()}return Object(Xe.jsxs)("div",{className:"entry-container",children:[Object(Xe.jsx)("textarea",{ref:h,rows:"1",className:"entry ".concat(b?"entry-dirty":""),style:function(){let e={};return u||(e.border="1px dashed #ddd"),e}(),onChange:function(e){const t=e.target.value;b||j(!0),i(t)},value:u,autoCapitalize:"none",spellCheck:"false",onKeyUp:function(e){const t=h.current.selectionStart,n=h.current.selectionEnd;if(e.ctrlKey)switch(e.keyCode){case 83:e.preventDefault(),O();break;case 88:e.preventDefault();break;case 90:x()}else switch(e.keyCode){case 9:e.preventDefault(),t===n&&(x(),document.execCommand("insertText",!1,"  "));break;case 27:p(),h.current.blur()}}}),Object(Xe.jsx)("div",{className:"entry-actions",children:b&&Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)("button",{className:"button-secondary",onClick:O,children:"Save"}),Object(Xe.jsx)("button",{className:"button-secondary",onClick:p,children:"Cancel"}),Object(Xe.jsx)("button",{className:"button-secondary",onClick:function(){n(e,r)},children:"Delete"})]})})]})}));n(208);class ot extends c.Component{render(){const e=this.props,t=e.thoughtRoot,n=e.currColumnText,c=e.currThought;return Object(Xe.jsx)("div",{className:"content",children:n.length>0&&null!==c?Object(Xe.jsx)(Xe.Fragment,{children:Object(Xe.jsx)(st,{parentId:t,thought:n[c].text?n[c].text:"",index:c},n[c].id)}):Object(Xe.jsx)("div",{className:"loading-content"})})}}var ut=Object(o.b)((e=>{const t=e.currentUser.userData.thoughtRoot,n=e.data;return{currColumnText:n.currColumnText,currThought:n.currThought,thoughtRoot:t}}))(ot);var it=Object(o.b)((e=>{const t=e.currentUser,n=t.session.authenticated,c=t.userData;return{authenticated:n,collapseSidebar:e.ui.collapseSidebar,thoughtRoot:c&&c.thoughtRoot}}),(e=>({setAuth:t=>e(I(t)),logout:()=>e({type:x}),_collapseSidebar:t=>e({type:W})})))((function({authenticated:e,thoughtRoot:t,collapseSidebar:n,_collapseSidebar:r,logout:a}){const s=Object(c.useState)(!1),o=Object($e.a)(s,2),u=o[0];return o[1],e?Object(Xe.jsx)("div",{className:"wrapper",children:t&&Object(Xe.jsxs)(Xe.Fragment,{children:[Object(Xe.jsx)("div",{className:"sidebar-container ".concat(n?"sidebar-container-collapse":""),children:Object(Xe.jsxs)("div",{className:"sidebar",children:[Object(Xe.jsx)("nav",{children:Object(Xe.jsx)("div",{className:"user",children:Object(Xe.jsx)(at,{})})}),u&&Object(Xe.jsx)("div",{}),t&&Object(Xe.jsx)(ct,{root:t}),Object(Xe.jsx)("div",{className:"menu-bottom",children:Object(Xe.jsx)("div",{className:"profile-actions",children:Object(Xe.jsx)("button",{onClick:function(e){e.preventDefault(),a()},className:"button-secondary",children:"logout"})})})]})}),Object(Xe.jsx)("div",{className:"content-container ".concat(n?"content-container-collapse":""),children:Object(Xe.jsx)("div",{className:"content",children:t&&Object(Xe.jsx)(ut,{root:t})})})]})}):Object(Xe.jsx)(et.a,{to:"/login"})}));var dt=()=>Object(Xe.jsx)("div",{className:"fourohfour",children:Object(Xe.jsx)("div",{className:"fourohfour-content",children:"Page not found."})});n(209);class lt extends c.Component{componentDidMount(){(0,this.props.init)()}render(){const e=this.props.isLoadingSession;return Object(Xe.jsx)(Je.a,{children:e?Object(Xe.jsx)("div",{className:"logo-loader",children:Object(Xe.jsx)(at,{})}):Object(Xe.jsxs)(Ke.a,{children:[Object(Xe.jsx)(qe.a,{exact:!0,path:"/",component:Ze}),Object(Xe.jsx)(qe.a,{path:"/dash",component:it}),Object(Xe.jsx)(qe.a,{path:"/login",component:tt}),Object(Xe.jsx)(qe.a,{component:dt})]})})}}var bt=Object(o.b)((e=>({isLoadingSession:e.currentUser.session.loading})),(e=>({init:()=>e(T())})))(lt);s.default.configure({Auth:{mandatorySignIn:!0,region:u.cognito.REGION,userPoolId:u.cognito.USER_POOL_ID,identityPoolId:u.cognito.IDENTITY_POOL_ID,userPoolWebClientId:u.cognito.APP_CLIENT_ID},API:{endpoints:[{name:"users",endpoint:u.apiGateway.URL,region:u.apiGateway.REGION},{name:"thoughts",endpoint:u.apiGateway.URL,region:u.apiGateway.REGION}]}});const jt=Be();a.a.render(Object(Xe.jsx)(o.a,{store:jt,children:Object(Xe.jsx)("div",{children:Object(Xe.jsx)(bt,{})})}),document.getElementById("root"))}},[[216,1,2]]]);