(this.webpackJsonptrickl=this.webpackJsonptrickl||[]).push([[0],{109:function(e,t,n){e.exports=n(238)},228:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(95),o=n.n(c),u=n(17),s=n.n(u),i=n(14),l={REGION:"us-west-1",URL:"https://fbj97y4ndj.execute-api.us-west-1.amazonaws.com/prod"},d={REGION:"us-west-2",USER_POOL_ID:"us-west-2_f9b0JeeMD",APP_CLIENT_ID:"7st7lq4rb5iuqc5uj3bcttimmo",IDENTITY_POOL_ID:"us-west-2:54671dce-0a57-4b44-a212-1d8cf1b2f359"},h=n(22),E=n(104),p=function(e){return{type:"SET_AUTHENTICATED",status:e}},f=function(){return{type:"LOAD_SESSION_REQUESTED"}},b=function(){return{type:"LOAD_SESSION_COMPLETED"}},m=function(e,t){return{type:"LOGIN_REQUESTED",email:e,password:t}},O=function(){return{type:"LOGIN_SUCCESS"}},g=function(){return{type:"LOGIN_FAILURE"}},v=function(){return{type:"LOGOUT_SUCCESS"}},S=function(e){return{type:"SAVE_USER_INFO",info:e}},x=function(){return{type:"SIGNUP_SUCCESS"}},T=function(){return{type:"SIGNUP_FAILURE"}},C=function(){return{type:"VERIFY_SIGNUP_SUCCESS"}},U=function(){return{type:"VERIFY_SIGNUP_FAILURE"}},_=Object(h.c)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"LOAD_SESSION_REQUESTED":return!0;case"LOAD_SESSION_COMPLETED":return!1;default:return e}},authenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.status;switch(n){case"SET_AUTHENTICATED":return r;default:return e}},loginStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LOGIN",t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"LOGIN_REQUESTED":return"CHECKING";case"LOGIN_FAILURE":return"INCORRECT CREDENTIALS";case"LOGIN_SUCCESS":return"SUCCESS";case"LOGOUT_SUCCESS":return"LOGIN";default:return e}},signUpStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SIGN UP",t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"SIGNUP_REQUESTED":return"SIGNING UP";case"SIGNUP_FAILURE":return"SIGN UP FAILED";case"SIGNUP_SUCCESS":return"VERIFY";case"VERIFY_SIGNUP_REQUESTED":return"VERIFYING";case"VERIFY_SIGNUP_FAILURE":return"INCORRECT CODE";case"VERIFY_SIGNUP_SUCCESS":return"SIGN UP";default:return e}}}),y=Object(h.c)({session:_,userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.info;switch(n){case"SAVE_USER_INFO":return r;default:return e}}}),j=n(47),I=n(41),N="CREATE_COLUMN_SUCCESS",R=function(e){return{type:"CREATE_COLUMN_REQUESTED",data:e}},D=function(e){return{type:N,data:e}},w=function(e){return{type:"CREATE_COLUMN_FAILURE",data:e}},A=function(e){return{type:"ADD_THOUGHT_SUCCESS",data:e}},k=function(e){return{type:"ADD_THOUGHT_FAILURE",data:e}},L=function(e){return{type:"EDIT_THOUGHT_SUCCESS",data:e}},G=function(e){return{type:"EDIT_THOUGHT_FAILURE",data:e}},P=function(e){return{type:"DEL_THOUGHT_SUCCESS",data:e}},H=function(e){return{type:"DEL_THOUGHT_FAILURE",data:e}},F=function(e){return{type:"FETCH_COLUMN_REQUESTED",data:e}},Q=function(e){return{type:"FETCH_COLUMN_SUCCESS",data:e}},Y=function(e){return{type:"FETCH_COLUMN_FAILURE",data:e}},V=Object(h.c)({currRoot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case"FETCH_COLUMN_SUCCESS":return r.id;default:return e}},currColumnText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case"FETCH_COLUMN_SUCCESS":return r.children.map((function(e){return{id:e.id,text:e.content.text}}));case"ADD_THOUGHT_SUCCESS":return[].concat(e,{id:r.newThoughtId,text:r.text});case"DEL_THOUGHT_SUCCESS":return[].concat(e.slice(0,r.index),e.slice(Number(r.index)+1));case"EDIT_THOUGHT_SUCCESS":return Object.assign(Object(I.a)(e),Object(j.a)({},r.index,{id:e[r.index].id,text:r.text}));default:return e}},currThought:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case"SET_CURRENT_THOUGHT":return r.index;case"DEL_THOUGHT_SUCCESS":return 0;default:return e}}}),M=Object(h.c)({collapseSidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"COLLAPSE_SIDEBAR":return!e;default:return e}}}),K=Object(h.c)({ui:M,currentUser:y,data:V}),B=n(8),J=n.n(B),q=n(3),z=function(){return u.Auth.currentSession().catch((function(e){"No current user"!==e&&console.warn("No session"),console.warn(e)}))},X=function(e,t){return u.Auth.signIn(e,t)},W=function(){return u.Auth.signOut()},Z=function(e,t){return u.Auth.signUp({username:e,password:t})},$=function(e,t){return u.Auth.confirmSignUp(e,t)},ee=function(e){return u.Auth.resendSignUp(e)},te=function(e){return u.API.get("users","/users",{}).catch((function(e){console.warn(e.message)}))},ne=J.a.mark(se),re=J.a.mark(ie),ae=J.a.mark(le),ce=J.a.mark(de),oe=J.a.mark(he),ue=J.a.mark(Ee);function se(){var e;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.b)(z);case 3:if(!t.sent){t.next=16;break}return t.next=7,Object(q.c)(p(!0));case 7:return t.next=9,Object(q.c)(b());case 9:return t.next=11,Object(q.b)(Ee);case 11:return e=t.sent,t.next=14,Object(q.c)(F({id:e.thoughtRoot}));case 14:t.next=18;break;case 16:return t.next=18,Object(q.c)(b());case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.error(t.t0.message),"No current user"!==t.t0&&console.warn("No session");case 24:case"end":return t.stop()}}),ne,null,[[0,20]])}function ie(e){var t,n;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.email,n=e.password,t&&n){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,r.next=6,Object(q.b)(X,t,n);case 6:if(!r.sent){r.next=14;break}return r.next=10,Object(q.c)(O());case 10:return r.next=12,Object(q.c)(f());case 12:r.next=16;break;case 14:return r.next=16,Object(q.c)(g());case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r.catch(3),console.error(r.t0.message),r.next=23,Object(q.c)(g());case 23:case"end":return r.stop()}}),re,null,[[3,18]])}function le(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(q.b)(W);case 3:return e.next=5,Object(q.c)(p(!1));case 5:return e.next=7,Object(q.c)(v());case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),ae,null,[[0,9]])}function de(e){var t,n;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.email,n=e.password,t&&n){r.next=3;break}return r.abrupt("return");case 3:return r.prev=3,r.next=6,Object(q.b)(Z,t,n);case 6:if(!r.sent){r.next=10;break}return r.next=10,Object(q.c)(x());case 10:r.next=31;break;case 12:if(r.prev=12,r.t0=r.catch(3),"UsernameExistsException"!==r.t0.name){r.next=29;break}return r.prev=15,r.next=18,Object(q.b)(X,t,n);case 18:r.next=27;break;case 20:if(r.prev=20,r.t1=r.catch(15),"UserNotConfirmedException"!==r.t1.name){r.next=27;break}return r.next=25,Object(q.b)(ee,t);case 25:return r.next=27,Object(q.c)(x());case 27:r.next=31;break;case 29:return r.next=31,Object(q.c)(T());case 31:case"end":return r.stop()}}),ce,null,[[3,12],[15,20]])}function he(e){var t,n,r;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.email,n=e.password,r=e.confirmationCode,t&&n&&r){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,a.next=6,Object(q.b)($,t,r);case 6:return a.next=8,Object(q.c)(C());case 8:return a.next=10,Object(q.c)(m(t,n));case 10:a.next=17;break;case 12:return a.prev=12,a.t0=a.catch(3),console.error(a.t0.message),a.next=17,Object(q.c)(U());case 17:case"end":return a.stop()}}),oe,null,[[3,12]])}function Ee(){var e;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.b)(te);case 3:if(e=t.sent){t.next=13;break}throw new Error("Can't fetch user for some reason");case 8:return e=t.sent,t.next=11,Object(q.c)(R({thoughtRoot:e.thoughtRoot,text:" "}));case 11:return t.next=13,Object(q.d)(N);case 13:return t.next=15,Object(q.c)(S(e));case 15:return t.abrupt("return",e);case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0.message);case 21:case"end":return t.stop()}}),ue,null,[[0,18]])}var pe=[Object(q.e)("LOAD_SESSION_REQUESTED",se),Object(q.e)("LOGIN_REQUESTED",ie),Object(q.e)("LOGOUT_REQUESTED",le),Object(q.e)("SIGNUP_REQUESTED",de),Object(q.e)("VERIFY_SIGNUP_REQUESTED",he)],fe=function(e,t){return u.API.post("thoughts","/thoughts",{body:{id:e,text:t}})},be=function(e,t){return u.API.put("thoughts","/thoughts/".concat(e),{body:{action:"add",text:t}})},me=function(e,t){return u.API.put("thoughts","/thoughts/".concat(e),{body:{action:"delete",index:t}})},Oe=function(e,t,n){return u.API.put("thoughts","/thoughts/".concat(e),{body:{action:"update",index:t,text:n}})},ge=function(e){return u.API.get("thoughts","/thoughts/".concat(e))},ve=J.a.mark(Ue),Se=J.a.mark(_e),xe=J.a.mark(ye),Te=J.a.mark(je),Ce=J.a.mark(Ie);function Ue(e){var t,n,r,a;return J.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.data,n=t.thoughtRoot,r=t.text,c.prev=1,c.next=4,Object(q.b)(fe,n,r);case 4:return a=c.sent,c.next=7,Object(q.c)(D(a));case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),console.error(c.t0.message),c.next=14,Object(q.c)(w());case 14:case"end":return c.stop()}}),ve,null,[[1,9]])}function _e(e){var t,n,r,a;return J.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.data,n=t.id,r=t.text,c.prev=1,c.next=4,Object(q.b)(be,n,r);case 4:return a=c.sent,c.next=7,Object(q.c)(A({id:n,newThoughtId:a,text:r}));case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),console.error(c.t0.message),c.next=14,Object(q.c)(k());case 14:case"end":return c.stop()}}),Se,null,[[1,9]])}function ye(e){var t,n,r,a;return J.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.data,n=t.id,r=t.index,a=t.text,c.prev=1,c.next=4,Object(q.b)(Oe,n,r,a);case 4:return c.next=6,Object(q.c)(L({id:n,index:r,text:a}));case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(1),console.error(c.t0.message),c.next=13,Object(q.c)(G());case 13:case"end":return c.stop()}}),xe,null,[[1,8]])}function je(e){var t,n,r;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.data,n=t.id,r=t.index,a.prev=1,a.next=4,Object(q.b)(me,n,r);case 4:return a.next=6,Object(q.c)(P({id:n,index:r}));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(1),console.error(a.t0.message),a.next=13,Object(q.c)(H());case 13:case"end":return a.stop()}}),Te,null,[[1,8]])}function Ie(e){var t,n;return J.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.data.id,r.prev=1,r.next=4,Object(q.b)(ge,t);case 4:return n=r.sent,r.next=7,Object(q.c)(Q(n));case 7:r.next=14;break;case 9:return r.prev=9,r.t0=r.catch(1),console.error(r.t0.message),r.next=14,Object(q.c)(Y());case 14:case"end":return r.stop()}}),Ce,null,[[1,9]])}var Ne=[Object(q.e)("CREATE_COLUMN_REQUESTED",Ue),Object(q.e)("ADD_THOUGHT_REQUESTED",_e),Object(q.e)("EDIT_THOUGHT_REQUESTED",ye),Object(q.e)("DEL_THOUGHT_REQUESTED",je),Object(q.e)("FETCH_COLUMN_REQUESTED",Ie)],Re=J.a.mark(De);function De(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([].concat(Object(I.a)(pe),Object(I.a)(Ne)));case 2:case"end":return e.stop()}}),Re)}var we=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,Ae=function(e){var t=Object(E.a)(),n=Object(h.e)(K,e,we(Object(h.a)(t)));return t.run(De),n},ke=(n(227),n(228),n(11)),Le=n(12),Ge=n(15),Pe=n(13),He=n(16),Fe=n(247),Qe=n(249),Ye=n(248),Ve=n(246),Me=function(e){function t(){return Object(ke.a)(this,t),Object(Ge.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){return this.props.authenticated?a.a.createElement(Ve.a,{to:"/dash"}):a.a.createElement(Ve.a,{to:"/login"})}}]),t}(r.Component),Ke=Object(i.b)((function(e){return{authenticated:e.currentUser.authenticated}}))(Me),Be=n(105),Je=(n(230),function(e){function t(e){var n;return Object(ke.a)(this,t),(n=Object(Ge.a)(this,Object(Pe.a)(t).call(this,e))).handleEntry=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(j.a)({},"".concat(r),a))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,r=t.login,a=t.signUp,c=t.verifySignUp,o=t.signUpStatus,u=n.state,s=u.email,i=u.password,l=u.confirmPassword,d=u.confirmationCode,h=u.view;if("VERIFY"!==o&&"INCORRECT CODE"!==o)switch(h){case"login":if(!s||!i)return;r(s,i);break;case"signup":if(!s||!i)return;l===i&&a(s,i)}else{if(!s||!i||!d)return;c(s,i,d)}},n.state={email:"",password:"",view:"login"},n}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.email,c=t.password,o=t.confirmPassword,u=t.confirmationCode,s=t.view,i=this.props,l=i.loginStatus,d=i.authenticated,h=i.signUpStatus;return d?a.a.createElement(Be.a,{to:"/dash"}):a.a.createElement("div",{className:"login-container"},a.a.createElement("h1",null,"trickl"),a.a.createElement("h5",null,"placeholder logo"),a.a.createElement("div",{className:"login-form"},a.a.createElement("form",{onSubmit:this.handleSubmit},"VERIFY"!==h&&"INCORRECT CODE"!==h&&"VERIFYING"!==h&&a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"input-group"},a.a.createElement("label",null,"Email"),a.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleEntry,autoFocus:!0})),a.a.createElement("div",{className:"input-group"},a.a.createElement("label",null,"Password"),a.a.createElement("input",{type:"password",name:"password",value:c,onChange:this.handleEntry}))),"signup"===s&&"VERIFY"!==h&&"VERIFYING"!==h&&"INCORRECT CODE"!==h&&a.a.createElement("div",{className:"input-group"},a.a.createElement("label",null,"Confirm Password"),a.a.createElement("input",{type:"password",name:"confirmPassword",value:o,onChange:this.handleEntry})),("VERIFY"===h||"VERIFYING"===h||"INCORRECT CODE"===h)&&a.a.createElement("div",{className:"input-group"},a.a.createElement("label",null,"Confirmation Code"),a.a.createElement("input",{type:"text",name:"confirmationCode",value:u,onChange:this.handleEntry})),a.a.createElement("div",{className:"login-actions"},a.a.createElement("button",{className:"button",type:"submit"},"signup"===s?h:l),a.a.createElement("button",{className:"button-secondary",onClick:function(){e.setState({view:"login"===s?"signup":"login"})}},"login"===s&&"Sign Up","signup"===s&&"Back")))),a.a.createElement("div",{className:"login-footer"},a.a.createElement("a",{href:"https://github.com/keytrain/trickl"},"github"),"thanks for visiting"))}}]),t}(r.Component)),qe=Object(i.b)((function(e){var t=e.currentUser.session;return{authenticated:t.authenticated,loginStatus:t.loginStatus,signUpStatus:t.signUpStatus}}),(function(e){return{setAuth:function(t){return e(p(t))},login:function(t,n){return e(m(t,n))},signUp:function(t,n){return e(function(e,t){return{type:"SIGNUP_REQUESTED",email:e,password:t}}(t,n))},verifySignUp:function(t,n,r){return e(function(e,t,n){return{type:"VERIFY_SIGNUP_REQUESTED",email:e,password:t,confirmationCode:n}}(t,n,r))}}}))(Je),ze=(n(231),function(e){function t(){return Object(ke.a)(this,t),Object(Ge.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currThoughtIndex,n=e.index,r=e.thought,c=e.setThought;return a.a.createElement("div",{className:"tile-container",onClick:function(){c(n)}},a.a.createElement("div",{className:"tile ".concat(n===t?"tile-selected":"")},r.length>0?r:"untitled"))}}]),t}(r.Component)),Xe=Object(i.b)((function(e){return{currThoughtIndex:e.data.currThought}}),(function(e){return{setThought:function(t){return e({type:"SET_CURRENT_THOUGHT",data:{index:t}})}}}))(ze),We=(n(232),function(e){function t(){var e,n;Object(ke.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(Ge.a)(this,(e=Object(Pe.a)(t)).call.apply(e,[this].concat(a)))).addThought=function(){var e=n.props;(0,e.addThought)(e.thoughtRoot,null)},n}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.thoughtRoot,n=e.currColumnText;return a.a.createElement("div",{className:"column-container"},n?a.a.createElement(r.Fragment,null,a.a.createElement("div",null,n.map((function(e,n){return a.a.createElement(Xe,{parentId:t,thought:e.text?e.text.split("\n")[0]:"",index:n,key:e.id})}))),a.a.createElement("div",{className:"add-thought-icon"},a.a.createElement("button",{className:"add-thought-button",onClick:this.addThought},"+"))):a.a.createElement("div",{className:"loading-content"},"Loading thoughts..."))}}]),t}(r.Component)),Ze=Object(i.b)((function(e){var t=e.currentUser.userData.thoughtRoot;return{currColumnText:e.data.currColumnText,collapseSidebar:e.ui.collapseSidebar,thoughtRoot:t}}),(function(e){return{addThought:function(t,n){return e({type:"ADD_THOUGHT_REQUESTED",data:{id:t,text:n}})}}}))(We),$e=(n(233),n(234),function(e){function t(){return Object(ke.a)(this,t),Object(Ge.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"logo-container"},a.a.createElement("div",{className:"teardrop"}))}}]),t}(r.Component)),et=(n(235),function(e){function t(e){var n;return Object(ke.a)(this,t),(n=Object(Ge.a)(this,Object(Pe.a)(t).call(this,e))).saveEntry=function(){var e=n.props,t=e.parentId;(0,e.editThought)(t,e.index,n.state.draft),n.setState({dirty:!1})},n.resetEntry=function(){var e=n.props.thought;n.setState({draft:e,dirty:!1},(function(){}))},n.handleEntry=function(e){var t=e.target.value;n.setState({draft:t,dirty:!0})},n.deleteEntry=function(){var e=n.props,t=e.parentId;(0,e.delThought)(t,e.index)},n.focusTextArea=function(){n.textArea.current.blur(),n.textArea.current.focus()},n.handleKeyDown=function(e){var t=n.textArea.current.selectionStart,r=n.textArea.current.selectionEnd;if(e.ctrlKey)switch(e.keyCode){case 83:e.preventDefault(),n.saveEntry();break;case 88:e.preventDefault();break;case 90:n.focusTextArea()}else switch(e.keyCode){case 9:e.preventDefault(),t===r&&(n.focusTextArea(),n.insertTab(2));break;case 27:n.resetEntry(),n.textArea.current.blur()}},n.insertTab=function(e){document.execCommand("insertText",!1,"  ")},n.handleTextAreaStyle=function(){var e={};return n.state.draft||(e.border="1px dashed #ddd"),e},n.checkEntryClosed=function(){return n.state.isEntryClosed?"entry entry-closed":"entry"},n.state={draft:e.thought,dirty:!1,focus:!1},n.textArea=a.a.createRef(),n}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"refreshHeight",value:function(){if(this.textArea.current.style.height="inherit",this.textArea.current.style.height!==this.textArea.current.scrollHeight+"px"){var e=this.textArea.current.scrollHeight;e>499?this.textArea.current.style.overflowY="scroll":(this.textArea.current.style.overflowY="hidden",e=this.textArea.current.scrollHeight),this.textArea.current.style.height=e+"px"}}},{key:"render",value:function(){var e=this.state,t=e.draft,n=e.dirty;return a.a.createElement("div",{className:"entry-container"},a.a.createElement("textarea",{ref:this.textArea,rows:"1",className:"entry ".concat(n?"entry-dirty":""),style:this.handleTextAreaStyle(),onChange:this.handleEntry,value:t,autoCapitalize:"none",spellCheck:"false",onKeyDown:this.handleKeyDown}),a.a.createElement("div",{className:"entry-actions"},n&&a.a.createElement(r.Fragment,null,a.a.createElement("button",{className:"button-secondary",onClick:this.saveEntry},"Save"),a.a.createElement("button",{className:"button-secondary",onClick:this.resetEntry},"Cancel"),a.a.createElement("button",{className:"button-secondary",onClick:this.deleteEntry},"Delete"))))}}]),t}(r.Component)),tt=Object(i.b)(null,(function(e){return{editThought:function(t,n,r){return e({type:"EDIT_THOUGHT_REQUESTED",data:{id:t,index:n,text:r}})},delThought:function(t,n){return e({type:"DEL_THOUGHT_REQUESTED",data:{id:t,index:n}})}}}))(et),nt=(n(236),function(e){function t(){return Object(ke.a)(this,t),Object(Ge.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.thoughtRoot,n=e.currColumnText,c=e.currThought;return a.a.createElement("div",{className:"content"},n.length>0&&null!==c?a.a.createElement(r.Fragment,null,a.a.createElement(tt,{parentId:t,thought:n[c].text?n[c].text:"",index:c,key:n[c].id})):a.a.createElement("div",{className:"loading-content"}))}}]),t}(r.Component)),rt=Object(i.b)((function(e){var t=e.currentUser.userData.thoughtRoot,n=e.data;return{currColumnText:n.currColumnText,currThought:n.currThought,thoughtRoot:t}}))(nt),at=function(e){function t(e){var n;return Object(ke.a)(this,t),(n=Object(Ge.a)(this,Object(Pe.a)(t).call(this,e))).handleLogout=function(e){e.preventDefault(),(0,n.props.logout)()},n.state={isProfileOpen:!1},n}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.authenticated,c=t.thoughtRoot,o=t.collapseSidebar,u=t._collapseSidebar,s=this.state.isProfileOpen;return n?a.a.createElement("div",{className:"wrapper"},c&&a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"sidebar-container ".concat(o?"sidebar-container-collapse":"")},a.a.createElement("div",{className:"sidebar"},a.a.createElement("nav",null,a.a.createElement("div",{className:"user",onClick:function(){return e.setState({isProfileOpen:!s})}},a.a.createElement($e,null))),s&&a.a.createElement("div",null,a.a.createElement("div",{className:"profile-actions"},a.a.createElement("button",{onClick:this.handleLogout,className:"button-secondary"},"logout"))),c&&a.a.createElement(Ze,{root:c}))),a.a.createElement("div",{className:"content-container ".concat(o?"content-container-collapse":"")},a.a.createElement("div",{className:"content"},c&&a.a.createElement(rt,{root:c}))),a.a.createElement("div",{className:"collapse-thought-container ".concat(o?"collapse-thought-transition":"")},a.a.createElement("button",{className:"collapse-thought-button",onClick:u},"<")))):a.a.createElement(Be.a,{to:"/login"})}}]),t}(r.Component),ct=Object(i.b)((function(e){var t=e.currentUser,n=t.session.authenticated,r=t.userData;return{authenticated:n,collapseSidebar:e.ui.collapseSidebar,thoughtRoot:r&&r.thoughtRoot}}),(function(e){return{setAuth:function(t){return e(p(t))},logout:function(){return e({type:"LOGOUT_REQUESTED"})},_collapseSidebar:function(t){return e({type:"COLLAPSE_SIDEBAR"})}}}))(at),ot=function(){return a.a.createElement("div",{className:"fourohfour"},a.a.createElement("div",{className:"fourohfour-content"},"Page not found."))},ut=(n(237),function(e){function t(){return Object(ke.a)(this,t),Object(Ge.a)(this,Object(Pe.a)(t).apply(this,arguments))}return Object(He.a)(t,e),Object(Le.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.init)()}},{key:"render",value:function(){var e=this.props.isLoadingSession;return a.a.createElement(Fe.a,null,e?a.a.createElement("div",{className:"logo-loader"},a.a.createElement($e,null)):a.a.createElement(Qe.a,null,a.a.createElement(Ye.a,{exact:!0,path:"/",component:Ke}),a.a.createElement(Ye.a,{path:"/dash",component:ct}),a.a.createElement(Ye.a,{path:"/login",component:qe}),a.a.createElement(Ye.a,{component:ot})))}}]),t}(r.Component)),st=Object(i.b)((function(e){return{isLoadingSession:e.currentUser.session.loading}}),(function(e){return{init:function(){return e(f())}}}))(ut);s.a.configure({Auth:{mandatorySignIn:!0,region:d.REGION,userPoolId:d.USER_POOL_ID,identityPoolId:d.IDENTITY_POOL_ID,userPoolWebClientId:d.APP_CLIENT_ID},API:{endpoints:[{name:"users",endpoint:l.URL,region:l.REGION},{name:"thoughts",endpoint:l.URL,region:l.REGION}]}});var it=Ae();o.a.render(a.a.createElement(i.a,{store:it},a.a.createElement("div",null,a.a.createElement(st,null))),document.getElementById("root"))},55:function(e,t){}},[[109,1,2]]]);