(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,n){t.exports=n(319)},305:function(t,e,n){},308:function(t,e,n){},310:function(t,e,n){},312:function(t,e,n){},314:function(t,e,n){},316:function(t,e,n){},319:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(113),o=n.n(c),s=n(15),u=n.n(s),i=n(16),l={REGION:"us-west-1",URL:"https://fbj97y4ndj.execute-api.us-west-1.amazonaws.com/prod"},h={REGION:"us-west-2",USER_POOL_ID:"us-west-2_f9b0JeeMD",APP_CLIENT_ID:"7st7lq4rb5iuqc5uj3bcttimmo",IDENTITY_POOL_ID:"us-west-2:54671dce-0a57-4b44-a212-1d8cf1b2f359"},d=n(18),E=n(116),f=function(t){return{type:"SET_AUTHENTICATED",status:t}},p=function(){return{type:"LOAD_SESSION_REQUESTED"}},O=function(){return{type:"LOAD_SESSION_COMPLETED"}},b=function(){return{type:"LOGIN_SUCCESS"}},m=function(){return{type:"LOGIN_FAILURE"}},v=function(){return{type:"LOGOUT_SUCCESS"}},g=function(t){return{type:"SAVE_USER_INFO",info:t}},S=Object(d.c)({loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"LOAD_SESSION_REQUESTED":return!0;case"LOAD_SESSION_COMPLETED":return!1;default:return t}},authenticated:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.status;switch(n){case"SET_AUTHENTICATED":return a;default:return t}},loginStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LOGIN";switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN_REQUESTED":return"CHECKING";case"LOGIN_FAILURE":return"INCORRECT CREDENTIALS";case"LOGIN_SUCCESS":return"SUCCESS";case"LOGOUT_SUCCESS":default:return t}}}),x=Object(d.c)({session:S,userData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.info;switch(n){case"SAVE_USER_INFO":return a;default:return t}}}),T=n(45),_=n(38),j=function(t){return{type:"CREATE_COLUMN_SUCCESS",data:t}},U=function(t){return{type:"CREATE_COLUMN_FAILURE",data:t}},C=function(t){return{type:"ADD_THOUGHT_SUCCESS",data:t}},y=function(t){return{type:"ADD_THOUGHT_FAILURE",data:t}},N=function(t){return{type:"EDIT_THOUGHT_SUCCESS",data:t}},I=function(t){return{type:"EDIT_THOUGHT_FAILURE",data:t}},D=function(t){return{type:"DEL_THOUGHT_SUCCESS",data:t}},w=function(t){return{type:"DEL_THOUGHT_FAILURE",data:t}},L=function(t){return{type:"FETCH_COLUMN_REQUESTED",data:t}},R=function(t){return{type:"FETCH_COLUMN_SUCCESS",data:t}},k=function(t){return{type:"FETCH_COLUMN_FAILURE",data:t}},A=Object(d.c)({currRoot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.data;switch(n){case"FETCH_COLUMN_SUCCESS":return a.id;default:return t}},currColumnText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.data;switch(n){case"FETCH_COLUMN_SUCCESS":return a.children.map(function(t){return t.content.text});case"ADD_THOUGHT_SUCCESS":return[].concat(t,a.text);case"DEL_THOUGHT_SUCCESS":return[].concat(t.slice(0,a.index),t.slice(a.index+1));case"EDIT_THOUGHT_SUCCESS":return Object.assign(Object(_.a)(t),Object(T.a)({},a.index,a.text));default:return t}}}),H=Object(d.c)({currentUser:x,data:A}),G=n(8),P=n.n(G),F=n(4),Q=function(){return s.Auth.currentSession().catch(function(t){"No current user"!==t&&console.warn("No session"),console.warn(t)})},M=function(t,e){return s.Auth.signIn(t,e).catch(function(t){console.warn(t.message)})},J=function(){return s.Auth.signOut().catch(function(t){console.warn(t.message)})},V=function(){return s.API.post("users","/users",{}).catch(function(t){console.warn(t.message)})},X=function(t){return s.API.get("users","/users",{}).catch(function(t){console.warn(t.message)})},q=P.a.mark(K),Y=P.a.mark(W),z=P.a.mark(Z),B=P.a.mark($);function K(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(F.b)(Q);case 3:if(!e.sent){e.next=16;break}return e.next=7,Object(F.c)(f(!0));case 7:return e.next=9,Object(F.c)(O());case 9:return e.next=11,Object(F.b)($);case 11:return t=e.sent,e.next=14,Object(F.c)(L({id:t.thoughtRoot}));case 14:e.next=18;break;case 16:return e.next=18,Object(F.c)(O());case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),console.error(e.t0.message),"No current user"!==e.t0&&console.warn("No session");case 24:case"end":return e.stop()}},q,this,[[0,20]])}function W(t){var e,n;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=t.email,n=t.password,e&&n){a.next=3;break}return a.abrupt("return");case 3:return a.prev=3,a.next=6,Object(F.b)(M,e,n);case 6:if(!a.sent){a.next=14;break}return a.next=10,Object(F.c)(b());case 10:return a.next=12,Object(F.c)(p());case 12:a.next=16;break;case 14:return a.next=16,Object(F.c)(m());case 16:a.next=23;break;case 18:return a.prev=18,a.t0=a.catch(3),console.error(a.t0.message),a.next=23,Object(F.c)(m());case 23:case"end":return a.stop()}},Y,this,[[3,18]])}function Z(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(F.b)(J);case 3:return t.next=5,Object(F.c)(f(!1));case 5:return t.next=7,Object(F.c)(v());case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0.message);case 12:case"end":return t.stop()}},z,this,[[0,9]])}function $(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(F.b)(X);case 3:if(t=e.sent){e.next=9;break}return e.next=7,Object(F.b)(V);case 7:e.next=12;break;case 9:return e.next=11,Object(F.c)(g(t));case 11:return e.abrupt("return",t);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}},B,this,[[0,14]])}var tt=[Object(F.d)("LOAD_SESSION_REQUESTED",K),Object(F.d)("LOGIN_REQUESTED",W),Object(F.d)("LOGOUT_REQUESTED",Z)],et=function(t,e){return s.API.post("thoughts","/thoughts",{body:{id:t,text:e}}).catch(function(t){console.warn(t||t.message)})},nt=function(t,e){return s.API.put("thoughts","/thoughts/".concat(t),{body:{action:"add",text:e}}).catch(function(t){console.warn(t||t.message)})},at=function(t,e){return s.API.put("thoughts","/thoughts/".concat(t),{body:{action:"delete",index:e}}).catch(function(t){console.warn(t||t.message)})},rt=function(t,e,n){return s.API.put("thoughts","/thoughts/".concat(t),{body:{action:"update",index:e,text:n}}).catch(function(t){console.warn(t||t.message)})},ct=function(t){return s.API.get("thoughts","/thoughts/".concat(t)).catch(function(t){console.warn(t.message)})},ot=P.a.mark(ht),st=P.a.mark(dt),ut=P.a.mark(Et),it=P.a.mark(ft),lt=P.a.mark(pt);function ht(t){var e,n,a,r;return P.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.data,n=e.thoughtRoot,a=e.text,c.prev=1,c.next=4,Object(F.b)(et,n,a);case 4:return r=c.sent,c.next=7,Object(F.c)(j(r));case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),console.error(c.t0.message),c.next=14,Object(F.c)(U());case 14:case"end":return c.stop()}},ot,this,[[1,9]])}function dt(t){var e,n,a;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.data,n=e.id,a=e.text,r.prev=1,r.next=4,Object(F.b)(nt,n,a);case 4:return r.next=6,Object(F.c)(C(n,a));case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0.message),r.next=13,Object(F.c)(y());case 13:case"end":return r.stop()}},st,this,[[1,8]])}function Et(t){var e,n,a,r;return P.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.data,n=e.id,a=e.index,r=e.text,c.prev=1,c.next=4,Object(F.b)(rt,n,a,r);case 4:return c.next=6,Object(F.c)(N({id:n,index:a,text:r}));case 6:c.next=13;break;case 8:return c.prev=8,c.t0=c.catch(1),console.error(c.t0.message),c.next=13,Object(F.c)(I());case 13:case"end":return c.stop()}},ut,this,[[1,8]])}function ft(t){var e,n,a;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.data,n=e.id,a=e.index,r.prev=1,r.next=4,Object(F.b)(at,n,a);case 4:return r.next=6,Object(F.c)(D({id:n,index:a}));case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(1),console.error(r.t0.message),r.next=13,Object(F.c)(w());case 13:case"end":return r.stop()}},it,this,[[1,8]])}function pt(t){var e,n;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.data.id,a.prev=1,a.next=4,Object(F.b)(ct,e);case 4:return n=a.sent,a.next=7,Object(F.c)(R(n));case 7:a.next=14;break;case 9:return a.prev=9,a.t0=a.catch(1),console.error(a.t0.message),a.next=14,Object(F.c)(k());case 14:case"end":return a.stop()}},lt,this,[[1,9]])}var Ot=[Object(F.d)("CREATE_COLUMN_REQUESTED",ht),Object(F.d)("ADD_THOUGHT_REQUESTED",dt),Object(F.d)("EDIT_THOUGHT_REQUESTED",Et),Object(F.d)("DEL_THOUGHT_REQUESTED",ft),Object(F.d)("FETCH_COLUMN_REQUESTED",pt)],bt=P.a.mark(mt);function mt(){return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(F.a)([].concat(Object(_.a)(tt),Object(_.a)(Ot)));case 2:case"end":return t.stop()}},bt,this)}var vt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,gt=function(t){var e=Object(E.a)(),n=Object(d.e)(H,t,vt(Object(d.a)(e)));return e.run(mt),n},St=(n(303),n(305),n(22)),xt=n(23),Tt=n(25),_t=n(24),jt=n(26),Ut=n(323),Ct=n(325),yt=n(324),Nt=n(322),It=function(t){function e(){return Object(St.a)(this,e),Object(Tt.a)(this,Object(_t.a)(e).apply(this,arguments))}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"render",value:function(){return this.props.authenticated?r.a.createElement(Nt.a,{to:"/dash"}):r.a.createElement(Nt.a,{to:"/login"})}}]),e}(a.Component),Dt=Object(i.b)(function(t){return{authenticated:t.currentUser.authenticated}})(It),wt=n(321),Lt=(n(308),function(t){function e(t){var n;return Object(St.a)(this,e),(n=Object(Tt.a)(this,Object(_t.a)(e).call(this,t))).handleEntry=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(T.a)({},"".concat(a),r))},n.handleSubmit=function(t){t.preventDefault();var e=n.props.login,a=n.state,r=a.email,c=a.password;r&&c&&e(r,c)},n.state={email:"",password:""},n}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password,a=this.props,c=a.loginStatus;return a.authenticated?r.a.createElement(wt.a,{to:"/dash"}):r.a.createElement("div",{className:"login-container"},r.a.createElement("h1",null,"trickl"),r.a.createElement("h5",null,"placeholder logo"),r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",value:e,onChange:this.handleEntry,autoFocus:!0})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleEntry})),r.a.createElement("div",{className:"login-actions"},r.a.createElement("input",{className:"button",type:"submit",value:c}),r.a.createElement("button",{className:"button-secondary"},"Sign Up")))),r.a.createElement("div",{className:"login-footer"},r.a.createElement("a",{href:"https://github.com/keytrain/trickl"},"github"),"thanks for visiting"))}}]),e}(a.Component)),Rt=Object(i.b)(function(t){var e=t.currentUser.session;return{authenticated:e.authenticated,loginStatus:e.loginStatus}},function(t){return{setAuth:function(e){return t(f(e))},login:function(e,n){return t(function(t,e){return{type:"LOGIN_REQUESTED",email:t,password:e}}(e,n))}}})(Lt),kt=(n(310),function(t){function e(t){var n;return Object(St.a)(this,e),(n=Object(Tt.a)(this,Object(_t.a)(e).call(this,t))).saveEntry=function(){var t=n.props,e=t.parentId;(0,t.editThought)(e,t.index,n.state.draft),n.setState({dirty:!1})},n.resetEntry=function(){n.setState({draft:"",dirty:!1})},n.handleEntry=function(t){var e=t.target.value;n.refreshHeight(),n.setState({draft:e,dirty:!0})},n.deleteEntry=function(){var t=n.props,e=t.parentId;(0,t.delThought)(e,t.index)},n.state={draft:"",dirty:!1},n.textArea=r.a.createRef(),n}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"componentDidMount",value:function(){this.refreshHeight()}},{key:"refreshHeight",value:function(){this.textArea.current.style.height="auto";var t=this.textArea.current.scrollHeight;this.textArea.current.style.height=t+"px"}},{key:"render",value:function(){var t=this.props.thought,e=this.state,n=e.draft,c=e.dirty;return r.a.createElement("div",{className:"entry-container"},r.a.createElement("div",{className:"entry-actions-corner"},r.a.createElement("button",{className:"button-secondary",onClick:this.deleteEntry},"X")),r.a.createElement("textarea",{ref:this.textArea,rows:"1",className:"entry",onChange:this.handleEntry,value:c?n:t}),r.a.createElement("div",{className:"entry-actions"},c&&r.a.createElement(a.Fragment,null,r.a.createElement("button",{className:"button-secondary",onClick:this.resetEntry},"Cancel"),r.a.createElement("button",{className:"button-secondary",onClick:this.saveEntry},"Save"))))}}]),e}(a.Component)),At=Object(i.b)(null,function(t){return{editThought:function(e,n,a){return t({type:"EDIT_THOUGHT_REQUESTED",data:{id:e,index:n,text:a}})},delThought:function(e,n){return t({type:"DEL_THOUGHT_REQUESTED",data:{id:e,index:n}})}}})(kt),Ht=(n(312),function(t){function e(t){var n;return Object(St.a)(this,e),(n=Object(Tt.a)(this,Object(_t.a)(e).call(this,t))).addMessage=function(){},n.addThought=function(){var t=n.props;(0,t.addThought)(t.thoughtRoot," ")},n.state={},n}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"render",value:function(){var t=this.props,e=t.thoughtRoot,n=t.currColumnText;return r.a.createElement("div",null,r.a.createElement("div",null,n?n.map(function(t,n){return r.a.createElement(At,{parentId:e,thought:t,index:n,key:n})}):r.a.createElement("div",{className:"loading-content"},"Loading thoughts...")),r.a.createElement("div",{className:"add-thought-icon"},r.a.createElement("button",{className:"button-secondary",onClick:this.addThought},"+")))}}]),e}(a.Component)),Gt=Object(i.b)(function(t){var e=t.currentUser.userData.thoughtRoot;return{currColumnText:t.data.currColumnText,thoughtRoot:e}},function(t){return{addThought:function(e,n){return t({type:"ADD_THOUGHT_REQUESTED",data:{id:e,text:n}})}}})(Ht),Pt=(n(314),function(t){function e(t){var n;return Object(St.a)(this,e),(n=Object(Tt.a)(this,Object(_t.a)(e).call(this,t))).handleLogout=function(t){t.preventDefault(),(0,n.props.logout)()},n.state={isProfileOpen:!1},n}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.authenticated,a=e.thoughtRoot,c=this.state.isProfileOpen;return n?r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",null,r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"avatar",onClick:function(){return t.setState({isProfileOpen:!c})}}))),c&&r.a.createElement("div",{className:"profile-actions"},r.a.createElement("button",{onClick:this.handleLogout,className:"button-secondary"},"logout")),r.a.createElement("div",{className:"content"},a&&r.a.createElement(Gt,{root:a}))):r.a.createElement(wt.a,{to:"/login"})}}]),e}(a.Component)),Ft=Object(i.b)(function(t){var e=t.currentUser,n=e.session.authenticated,a=e.userData;return{authenticated:n,thoughtRoot:a&&a.thoughtRoot}},function(t){return{setAuth:function(e){return t(f(e))},logout:function(){return t({type:"LOGOUT_REQUESTED"})}}})(Pt),Qt=function(){return r.a.createElement("div",{className:"fourohfour"},r.a.createElement("div",{className:"fourohfour-content"},"Page not found."))},Mt=(n(316),function(t){function e(){return Object(St.a)(this,e),Object(Tt.a)(this,Object(_t.a)(e).apply(this,arguments))}return Object(jt.a)(e,t),Object(xt.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.init)()}},{key:"render",value:function(){var t=this.props.isLoadingSession;return r.a.createElement(Ut.a,null,t?r.a.createElement("div",{className:"loading-content"},"Checking Session..."):r.a.createElement(Ct.a,null,r.a.createElement(yt.a,{exact:!0,path:"/",component:Dt}),r.a.createElement(yt.a,{path:"/dash",component:Ft}),r.a.createElement(yt.a,{path:"/login",component:Rt}),r.a.createElement(yt.a,{component:Qt})))}}]),e}(a.Component)),Jt=Object(i.b)(function(t){return{isLoadingSession:t.currentUser.session.loading}},function(t){return{init:function(){return t(p())}}})(Mt);u.a.configure({Auth:{mandatorySignIn:!0,region:h.REGION,userPoolId:h.USER_POOL_ID,identityPoolId:h.IDENTITY_POOL_ID,userPoolWebClientId:h.APP_CLIENT_ID},API:{endpoints:[{name:"users",endpoint:l.URL,region:l.REGION},{name:"thoughts",endpoint:l.URL,region:l.REGION}]}});var Vt=gt();o.a.render(r.a.createElement(i.a,{store:Vt},r.a.createElement("div",null,r.a.createElement(Jt,null))),document.getElementById("root"))},52:function(t,e){}},[[119,2,1]]]);