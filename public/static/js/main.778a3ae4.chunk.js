(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=n(10),i=n(22),l=n(61),u=n(5),d="[ui] open modal",j="[ui] close modal",b="[event] Set active",m="[event] Add new",f="[event] Clear active event",p="[event] Updated event",v="[event] Deleted event",O="[event] Loaded events",h="[event] Logout",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Logout",N={checking:!0},k=n(25),w={events:[],activeEvent:null},E={modalOpen:!1},S=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(k.a)(e.events),Object(k.a)(t.payload))});case f:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case p:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case v:var n=t.payload||e.activeEvent.id;return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(e){return e.id!==n})),activeEvent:null});case O:return Object(u.a)(Object(u.a)({},e),{},{events:Object(k.a)(t.payload)});case h:return w;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{checking:!1},t.payload);case x:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,D=Object(i.e)(S,C(Object(i.a)(l.a))),T=n(36),A=n(11),P=n(13),I=n.n(P),L=n(21),M=n(17),V=n.n(M),_="https://turns-getienot.herokuapp.com/api",J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(_,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-Type":"application/json","x-token":c},body:JSON.stringify(t)})},G=n(9),F=n.n(G),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:F()(e.end).toDate(),start:F()(e.start).toDate()})}))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];if(t&&n.push(e),e.fixedEvent){var a,c=F()(e.start),r=e.start.getFullYear(),o=c.diff("".concat(r,"-12-31"),"weeks");for(a=0;a<-o;a++)n.push(Object(u.a)(Object(u.a)({},e),{},{start:F()(e.start).add(7*(a+1),"days").toDate(),end:F()(e.end).add(7*(a+1),"days").toDate()}))}return n},U=function(e){return{type:b,payload:e}},B=function(e){return{type:m,payload:e}},q=function(){return{type:f}},W=function(e){return{type:v,payload:e}},X=function(e){return{type:O,payload:e}},Y=function(){return{type:x}},K=function(e){return{type:g,payload:e}},Q=function(){return function(e){localStorage.clear(),e(Z()),e({type:h})}},Z=function(){return{type:y}},$=n(18),ee=n(26),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object($.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(u.a)(Object(u.a)({},c),{},Object(ee.a)({},t.name,t.value)))};return[c,s,o]},ne=(n(74),n(2)),ae=function(){var e=te({lEmail:"",lPassword:""}),t=Object($.a)(e,2),n=t[0],a=t[1],c=te({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),r=Object($.a)(c,2),o=r[0],i=r[1],l=o.rName,u=o.rEmail,d=o.rPassword1,j=o.rPassword2,b=Object(s.b)(),m=n.lEmail,f=n.lPassword;return Object(ne.jsx)("div",{className:"main-container",children:Object(ne.jsx)("div",{className:"container-sm login-container",children:Object(ne.jsxs)("div",{className:"row",children:[Object(ne.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ne.jsx)("h3",{children:"Ingreso"}),Object(ne.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),b((t=m,n=f,function(){var e=Object(L.a)(I.a.mark((function e(a){var c,r,o,s,i,l,u;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth",{email:t,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,o=r.ok,s=r.token,i=r.uid,l=r.name,u=r.msg,o?(localStorage.setItem("token",s),localStorage.setItem("token-init-date",(new Date).getTime()),a(K({uid:i,name:l}))):V.a.fire("Error",u,"error");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",autoComplete:"off",name:"lEmail",value:m,onChange:a})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:f,onChange:a})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ne.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ne.jsx)("h3",{children:"Registro"}),Object(ne.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),d!==j)return V.a.fire("Error","Las constrase\xf1as deben ser iguales","error");var t,n,a;b((t=u,n=d,a=l,function(){var e=Object(L.a)(I.a.mark((function e(c){var r,o,s,i,l,u,d,j,b;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("auth/new",{email:t,password:n,name:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:if(o=e.sent,s=o.ok,i=o.token,l=o.uid,u=o.name,d=o.errors,s)localStorage.setItem("token",i),localStorage.setItem("token-init-date",(new Date).getTime()),c(K({uid:l,name:u}));else{for(b in console.log(d),j="",d)j=j.concat("".concat(d[b].msg,". "));V.a.fire("Error",j,"error")}case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre y apellido",name:"rName",value:l,onChange:i})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:u,onChange:i})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:d,onChange:i})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:j,onChange:i})}),Object(ne.jsx)("div",{className:"form-group",children:Object(ne.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})})},ce=n(53),re=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(ne.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ne.jsx)("span",{className:"navbar-brand",children:"".concat(e.charAt(0).toUpperCase()).concat(e.substr(1,e.length))}),Object(ne.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(Q())},children:[Object(ne.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ne.jsx)("span",{children:" Salir"})]})]})},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=(n(76),n(77),function(e){var t=e.event,n=(t.title,t.user),a=t.field;return Object(ne.jsxs)("div",{children:[Object(ne.jsxs)("div",{children:[" ","Cancha ".concat(a)," "]}),Object(ne.jsxs)("strong",{children:[" ",null===n||void 0===n?void 0:n.name," "]})]})}),ie=n(49),le=n.n(ie),ue=n(64),de=n.n(ue),je=function(){return{type:d}},be={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};le.a.setAppElement("#root");var me=F()().minutes(0).seconds(0).add(1,"hours"),fe=F()(me).add(1,"hours"),pe={players:[],start:me.toDate(),end:fe.toDate(),field:0,fixedEvent:!1},ve=["Domingo","Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado"],Oe=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],he=["1","2","3","4","5","6","7","8","9","10"],xe=function(){var e=Object(a.useState)(pe),t=Object($.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object($.a)(r,2),i=o[0],l=o[1],d=Object(a.useState)(""),b=Object($.a)(d,2),m=b[0],f=b[1],p=Object(s.c)((function(e){return e.auth})).name,v=Object(s.c)((function(e){return e.ui})).modalOpen,O=Object(s.c)((function(e){return e.calendar})).activeEvent,h=Object(s.b)(),x=n.players,g=n.start,y=n.end,N=n.field,k=n.fixedEvent;Object(a.useEffect)((function(){O?(c(O),f(O.user?O.user.name:p),O.players.length>0&&O.players.some((function(e){return""!==e}))&&l(!0)):c(pe)}),[O]);var w=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},n),{},Object(ee.a)({},t.name,"checkbox"===t.type?t.checked:t.value)))},E=function(){h({type:j}),h(q()),c(pe),l(!1)},S=function(e){var t=e.target,a=x;a[t.name-1]=t.value,c(Object(u.a)(Object(u.a)({},n),{},{players:a}))};return Object(ne.jsxs)(le.a,{isOpen:v,onRequestClose:E,style:be,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ne.jsxs)("h2",{children:[" ",(null===O||void 0===O?void 0:O.user)?"Editar turno":"Nuevo turno"," "]}),Object(ne.jsx)("hr",{}),Object(ne.jsx)("div",{className:"container-fluid",children:Object(ne.jsxs)("form",{className:"row g-3 justify-content-center",onSubmit:function(e){e.preventDefault();var t=F()(g),a=F()(y);if(t.isSameOrAfter(a))return V.a.fire("Error","La fecha fin debe ser mayor que la fecha de inicio","error");var c,r=Object(u.a)(Object(u.a)({},n),{},{field:parseInt(n.field)});r.id?h((c=r,function(){var e=Object(L.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events/".concat(c.id),c,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?(t(W(c.id)),t(B(z(c,!0)))):V.a.fire("Error",a.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())):h(function(e){return function(){var t=Object(L.a)(I.a.mark((function t(n,a){var c,r,o,s,i,l;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a().auth,r=c.uid,o=c.name,s=a().calendar.events,!s.filter((function(t){return t.start.toString()===e.start.toString()})).find((function(t){return t.field===e.field}))){t.next=6;break}return t.abrupt("return",V.a.fire("Error","La cancha ".concat(e.field.toString()," ya est\xe1 ocupada"),"error"));case 6:return t.prev=6,t.next=9,R("events",e,"POST");case 9:return i=t.sent,t.next=12,i.json();case 12:(l=t.sent).ok&&(e.id=l.event.id,e.user={_id:r,name:o},n(B(z(e,!0)))),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e,n){return t.apply(this,arguments)}}()}(r)),E()},children:[Object(ne.jsxs)("div",{className:"col-md-".concat(O?"6":"8"," mb-2"),children:[Object(ne.jsx)("label",{children:"Fecha"}),O?Object(ne.jsx)("div",{className:"form-control",children:"".concat(ve[g.getDay()]," ").concat(g.getDate()," de ").concat(Oe[g.getMonth()])}):Object(ne.jsx)(de.a,{onChange:function(e){var t=F()(e).add(1,"hours").toDate();c(Object(u.a)(Object(u.a)({},n),{},{start:e,end:t}))},value:g,className:"form-control"})]}),Object(ne.jsxs)("div",{className:"col-md-".concat(O?"6":"4"," mb-2"),children:[Object(ne.jsx)("label",{children:"Hora"}),Object(ne.jsx)("div",{className:"form-control",children:"".concat(g.getHours()," a ").concat(y.getHours(),"hs")})]}),Object(ne.jsx)("hr",{}),Object(ne.jsxs)("div",{className:"col-md-6 mb-2",children:[Object(ne.jsx)("label",{className:"form-label",children:"Cancha"}),Object(ne.jsxs)("select",{className:"form-control",id:"inputState",type:"number",name:"field",value:N,onChange:w,children:[Object(ne.jsx)("option",{defaultValue:!0,children:"Elegir..."}),Object(ne.jsx)("option",{value:1,children:"1"}),Object(ne.jsx)("option",{value:2,children:"2"}),Object(ne.jsx)("option",{value:3,children:"3"})]})]}),Object(ne.jsxs)("div",{className:"col-md-6 mb-2",children:[Object(ne.jsx)("label",{className:"form-label",children:"Nombre"}),Object(ne.jsx)("input",{type:"text",className:"form-control",name:"user",value:m,readOnly:!0})]}),Object(ne.jsx)("div",{className:"col-md-6 mb-2",children:Object(ne.jsxs)("div",{className:"form-check",children:[Object(ne.jsx)("input",{type:"checkbox",className:"form-check-input",id:"gridCheck",name:"fixedEvent",checked:k,onChange:w}),Object(ne.jsx)("label",{className:"form-check-label",children:"Turno fijo semanal"})]})}),i?Object(ne.jsx)("div",{className:"col-12",children:he.map((function(e,t){return Object(ne.jsxs)("div",{className:"input-group mb-3",children:[Object(ne.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:e}),Object(ne.jsx)("input",{type:"text",className:"form-control",name:e,value:x[t],onChange:S})]},e)}))}):Object(ne.jsx)("div",{className:"col-md-6 mb-2",children:Object(ne.jsx)("button",{onClick:function(){return l(!0)},className:"btn btn-outline-secondary btn-sm mb-2",children:"Anotar jugadores"})}),Object(ne.jsx)("div",{className:"col-12 justify-content-center",children:Object(ne.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ne.jsx)("i",{className:"far fa-save"}),Object(ne.jsx)("span",{children:" Guardar"})]})})]})})]})},ge=function(){var e=Object(s.b)();return Object(ne.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(je())},children:Object(ne.jsx)("i",{className:"fas fa-plus"})})},ye=function(){var e=Object(s.b)();return Object(ne.jsxs)("button",{className:"btn btn-danger fab-danger",style:{zIndex:99},onClick:function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t,n){var a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,R("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t(W(a)):V.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ne.jsx)("i",{className:"fas fa-trash"}),Object(ne.jsx)("span",{children:" Borrar evento "})]})},Ne=(F()().toDate(),function(e){var t=e.children;e.value;return c.a.cloneElement(a.Children.only(t),{style:Object(u.a)({},t.style)})});F.a.locale("es");var ke=Object(ce.b)(F.a),we=["blue","green","red"],Ee=function(){var e=Object(a.useState)(localStorage.getItem("lastView")||"week"),t=Object($.a)(e,2),n=t[0],c=t[1],r=Object(s.b)(),o=Object(s.c)((function(e){return e.calendar})),i=o.events,l=o.activeEvent;Object(a.useEffect)((function(){r(function(){var e=Object(L.a)(I.a.mark((function e(t){var n,a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=H(a.events),r=c,c.forEach((function(e){e.fixedEvent&&(r=[].concat(Object(k.a)(r),Object(k.a)(z(e))))})),t(X(r)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);return Object(ne.jsxs)("div",{className:"calendar-screen",children:[Object(ne.jsx)(re,{}),Object(ne.jsx)(ce.a,{localizer:ke,events:i,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,n,a){var c=F()();return{style:{backgroundColor:we[e.field-1],border:a&&l?"3px solid black":"",borderRadius:a&&l?"4px":"opx",opacity:F()(c).isBefore(F()(t))?.8:.4,display:"block",color:"white",fontSize:"0.8rem",maxWidth:"33.33%"}}},defaultView:"week",onDoubleClickEvent:function(e){r(je())},onSelectEvent:function(e){r(U(e))},onSelectSlot:function(e){if(l)r(q());else if("doubleClick"===e.action||"select"===e.action){var t=F()(e.start).minutes(0).seconds(0).toDate(),n=F()(t).add(1,"hours").toDate();e.start=t,e.end=n,r(U({players:[],start:t,end:n,field:0,fixedEvent:!1})),r(je())}},selectable:!0,longPressThreshold:10,onView:function(e){c(e),localStorage.setItem("lastView",e)},components:{event:se,dateCellWrapper:Ne},view:n,min:new Date(2016,10,0,17,0,0),scrollToTime:new Date(2016,1,1,10),popup:!0}),Object(ne.jsx)(ge,{}),l&&Object(ne.jsx)(ye,{}),Object(ne.jsx)(xe,{})]})},Se=n(39),Ce=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(ne.jsx)(A.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(n,Object(u.a)({},e)):Object(ne.jsx)(A.a,{to:"/login"})}}))},De=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Se.a)(e,["isAuthenticated","component"]);return Object(ne.jsx)(A.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ne.jsx)(A.a,{to:"/"}):Object(ne.jsx)(n,Object(u.a)({},e))}}))},Te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(L.a)(I.a.mark((function e(t){var n,a,c,r,o,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c=a.ok,r=a.token,o=a.uid,s=a.name,a.msg,c?(localStorage.setItem("token",r),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o,name:s}))):t(Y());case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ne.jsx)("h5",{children:"Espere..."}):Object(ne.jsx)(T.a,{children:Object(ne.jsx)("div",{style:{height:"100%"},children:Object(ne.jsxs)(A.d,{children:[Object(ne.jsx)(De,{exact:!0,path:"/login",component:ae,isAuthenticated:!!c}),Object(ne.jsx)(Ce,{exact:!0,path:"/",component:Ee,isAuthenticated:!!c}),Object(ne.jsx)(A.a,{to:"/"})]})})})},Ae=function(){return Object(ne.jsx)(s.a,{store:D,children:Object(ne.jsx)(Te,{})})};n(107);o.a.render(Object(ne.jsx)(Ae,{}),document.getElementById("root"))},74:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.778a3ae4.chunk.js.map