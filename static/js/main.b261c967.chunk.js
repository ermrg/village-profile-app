(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(37),c=n.n(s),i=n(10),o=n(5),u=n(0);function d(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h3",{children:"\u0916\u093e\u0901\u0921\u093e\u0926\u0947\u0935\u0940 \u0917\u093e\u0909\u0901\u092a\u093e\u0932\u093f\u0915\u093e"}),Object(u.jsx)("p",{children:"\u092e\u093e\u0915\u093e\u0926\u0941\u092e , \u0930\u093e\u092e\u0947\u091b\u093e\u092a, \u092a\u094d\u0930\u0926\u0947\u0936 \u0928\u0902 \u0969"})]}),Object(u.jsx)(i.b,{to:"/vp-app/app",children:"Village Profile App"})]})})}var l=n(18),h=n(16),p=n(1),b=n.n(p),j=n(3),f=n(4),v=n(11),m=n(13),O=n(15),x=n(19),w=n(24),g=n(41),_=n(40),y=new(function(e){Object(g.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(O.a)(this,n),(e=t.call(this,"VPDB")).users=void 0,e.wards=void 0,e.bastis=void 0,e.households=void 0;var a=Object(w.a)(e);return a.version(1).stores({users:"++id, name, phone, password",wards:"id, name, status",bastis:"id, name, status, wardId",households:"++id, name, phone, password, [user_id+is_posted]"}),a.open().then(function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("DB opened Succefully"),console.log("Sync Complete");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("DB error",e)})),e}return n}(n(39).a)),k=function(){function e(t,n,a,r){Object(O.a)(this,e),this.id=void 0,this.name=void 0,this.status=void 0,this.wardId=void 0,this.name=t,this.status=n,this.wardId=a,r&&(this.id=r),y.bastis.mapToClass(e)}return Object(x.a)(e,[{key:"save",value:function(){return y.bastis.put(this)}}]),e}();function N(e){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.transaction("rw",y.bastis,Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.bastis.add(new k(t.name,t.status,t.wardId,t.id));case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return W.apply(this,arguments)}function W(){return(W=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.bastis.where("name").startsWithAnyOfIgnoreCase(t).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.bastis.where({wardId:parseInt(t)}).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){function e(t){Object(O.a)(this,e),this.id=void 0,this.hoh_name=void 0,this.hoh=void 0,this.ward_id=void 0,this.basti_id=void 0,this.marga_id=void 0,this.religion=void 0,this.jaati=void 0,this.mother_tongue=void 0,this.main_occupation=void 0,this.has_bank_acc=void 0,this.has_cooperative_acc=void 0,this.has_garden=void 0,this.member_with_life_insurance=void 0,this.member_with_health_insurance=void 0,this.responder_name=void 0,this.house_num=void 0,this.num_of_member=void 0,this.resident_type=void 0,this.phone_num=void 0,this.mobile_num=void 0,this.longitude=void 0,this.latitude=void 0,this.geo_location=void 0,this.altitude=void 0,this.accuracy=void 0,this.responder_image=void 0,this.step=void 0,this.status=void 0,this.remarks=void 0,this.user_id=void 0,this.is_posted=void 0,this.hoh_name=t.hoh_name,this.hoh=t.hoh,this.ward_id=t.ward_id,this.basti_id=t.basti_id,this.marga_id=t.marga_id,this.religion=t.religion,this.jaati=t.jaati,this.mother_tongue=t.mother_tongue,this.main_occupation=t.main_occupation,this.has_bank_acc=t.has_bank_acc,this.has_cooperative_acc=t.has_cooperative_acc,this.has_garden=t.has_garden,this.member_with_life_insurance=t.member_with_life_insurance,this.member_with_health_insurance=t.member_with_health_insurance,this.responder_name=t.responder_name,this.house_num=t.house_num,this.num_of_member=t.num_of_member,this.resident_type=t.resident_type,this.phone_num=t.phone_num,this.mobile_num=t.mobile_num,this.longitude=t.longitude,this.latitude=t.latitude,this.geo_location=t.geo_location,this.altitude=t.altitude,this.accuracy=t.accuracy,this.responder_image=t.responder_image,this.step=t.step,this.status=t.status,this.remarks=t.remarks,this.user_id=t.user_id,this.is_posted=t.is_posted,y.households.mapToClass(e)}return Object(x.a)(e,[{key:"save",value:function(){return y.households.put(this)}}]),e}();function P(e){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.transaction("rw",y.households,Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.households.add(new I(Object(f.a)({},t)));case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return q.apply(this,arguments)}function q(){return(q=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.transaction("r",y.households,Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.households.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.households.where("[user_id+is_posted]").equals([t,"0"]).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.households.put(Object(f.a)({},t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function(){function e(t,n,a){Object(O.a)(this,e),this.id=void 0,this.name=void 0,this.status=void 0,this.name=t,this.status=n,a&&(this.id=a),y.wards.mapToClass(e)}return Object(x.a)(e,[{key:"save",value:function(){return y.wards.put(this)}}]),e}();function z(e){return J.apply(this,arguments)}function J(){return(J=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.transaction("rw",y.wards,Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.wards.add(new U(t.name,t.status,t.id));case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return R.apply(this,arguments)}function R(){return(R=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.transaction("r",y.wards,Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.wards.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.wards.where("name").startsWithAnyOfIgnoreCase(t).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){var t=e.data,n=e.bastis,a=e.wards,r=e.household,s=e.handleChange,c=function(e){return((null===t||void 0===t?void 0:t.requiredFields)||[]).indexOf(e)>-1};return Object(u.jsxs)("div",{className:"vp-form",children:[Object(u.jsxs)("div",{className:"form-group ".concat(t&&c(1)?"required":""),id:"1",children:[Object(u.jsx)("label",{className:"label",children:"1. Ward No"}),Object(u.jsx)("div",{className:"options-verical",onChange:function(e){return s(e)},children:a.map((function(e,t){return Object(u.jsx)("div",{className:"radio",children:Object(u.jsxs)("label",{children:[r.ward_id==e.id?Object(u.jsx)("input",{type:"radio",value:e.id,name:"ward_id",defaultChecked:!0}):Object(u.jsx)("input",{type:"radio",value:e.id,name:"ward_id"}),e.name]})},t)}))})]}),Object(u.jsxs)("div",{className:"form-group ".concat(t&&c(2)?"required":""),id:"2",children:[Object(u.jsx)("label",{className:"label",children:"2. Basti ko Naam"}),Object(u.jsx)("div",{className:"options-verical",onChange:function(e){return s(e)},children:n.map((function(e,t){return Object(u.jsx)("div",{className:"radio",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:e.id,name:"basti_id"}),e.name]})},t)}))})]})]})}var X=[1,2],$=new m.a;function G(e){var t=Object(o.f)(),n=e.data,r=$.get("auth"),s=Object(a.useState)([]),c=Object(v.a)(s,2),i=c[0],d=c[1],p=Object(a.useState)([]),m=Object(v.a)(p,2),O=m[0],x=m[1],w=Object(a.useState)(Object(f.a)({},n.household)),g=Object(v.a)(w,2),_=g[0],y=g[1];function k(){return(k=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:t=e.sent,d(Object(h.a)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.requiredFields=X,Object(a.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]);var N=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(Object(f.a)(Object(f.a)({},_),{},{status:"0",is_posted:"0",user_id:r.id}));case 2:t.push("/vp-app/app");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,A(n);case 3:a=e.sent,x(Object(h.a)(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"vp-form-wrapper",children:[Object(u.jsxs)("div",{className:"save-btns",children:[Object(u.jsx)("button",{onClick:N,children:"Save"}),Object(u.jsx)("button",{children:"Save & Exit"})]}),Object(u.jsx)(K,{data:n,household:_,handleChange:function(e){"ward_id"===e.target.name&&S(e),y((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},wards:i,bastis:O})]})}var Q=n(14),Z=n.n(Q);Z.a.defaults.xsrfHeaderName="X-CSRFTOKEN",Z.a.defaults.xsrfCookieName="csrftoken";var ee="".concat("http://127.0.0.1:8000","/api/"),te={loadCollectors:function(){return Z.a.get("".concat(ee,"collectors/"))},loadWada:function(e){return Z.a.get("".concat(ee,"wards/"),{params:{office_id:e}})},loadMarga:function(e){return Z.a.get("".concat(ee,"margas/"),{params:{office_id:e}})},loadBasti:function(e){return Z.a.get("".concat(ee,"bastis/"),{params:{office_id:e}})},login:function(e){return Z.a.post("".concat(ee,"login/"),{data:e})},postHousehold:function(e){return Z.a.post("".concat(ee,"post-household/"),{data:e})}},ne=new m.a;function ae(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1],s=ne.get("auth"),c=Object(o.f)();Object(a.useEffect)((function(){i()}),[]);var i=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(s.id);case 2:t=e.sent,r(Object(h.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.postHousehold(t);case 2:if(200!==e.sent.status){e.next=10;break}return e.next=6,T(Object(f.a)(Object(f.a)({},t),{},{is_posted:1}));case 6:n=e.sent,console.log(n),e.next=11;break;case 10:console.log(t.id,"Failed");case 11:i();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return c.push("/vp-app/app")},children:"Back"}),Object(u.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"SN"}),Object(u.jsx)("th",{children:"Household Id"}),Object(u.jsx)("th",{children:"Ward"}),Object(u.jsx)("th",{children:"Posted"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:++t}),Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.ward_id}),Object(u.jsx)("td",{children:"1"==e.is_posted?Object(u.jsx)("label",{className:"badge badge-success",children:"YES"}):Object(u.jsx)("label",{className:"badge badge-danger",children:"NO"})}),Object(u.jsx)("td",{children:"0"==e.is_posted&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return d(e)},children:"Edit"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return d(e)},children:"Post"})]})})]},t)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"No Data"})})})]})]})}(new m.a).get("auth");function re(e){return se.apply(this,arguments)}function se(){return(se=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Synchronizing Wards..."),e.next=3,te.loadWada(t);case 3:if(200!==(n=e.sent).status){e.next=9;break}return(a=n.data).map(function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t.name);case 2:if(0!==e.sent.length){e.next=6;break}return e.next=6,z({name:t.name,status:t.status,id:t.id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(a.length," Wards Synced."),e.abrupt("return",a);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(j.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Synchronizing Basti..."),e.next=3,te.loadBasti(t);case 3:200===(n=e.sent).status&&((a=n.data).map(function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t.name);case 2:if(0!==e.sent.length){e.next=6;break}return e.next=6,N({name:t.name,status:t.status,id:t.id,wardId:t.ward_id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(a.length," Bastis Synced."));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.navigator.onLine){e.next=5;break}return e.next=3,re(t.office_id);case 3:return e.next=5,ce(t.office_id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=new m.a,le={name:"",username:"",phone:"",password:"",office_name:"",office_id:""};function he(){var e=Object(a.useState)(le),t=Object(v.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(v.a)(s,2),o=c[0],d=c[1],h=Object(a.useState)(""),p=Object(v.a)(h,2),m=p[0],O=p[1];Object(a.useEffect)((function(){g()}),[]);var x=function(e){e.persist(),r((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},w=function(){var e=Object(j.a)(b.a.mark((function e(t){var a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(!0),e.next=4,te.login(n);case 4:if(!(a=e.sent).data){e.next=13;break}return s=a.data,r((function(e){return Object(f.a)(Object(f.a)({},e),{},{id:(null===s||void 0===s?void 0:s.id)?null===s||void 0===s?void 0:s.id:le.id,name:(null===s||void 0===s?void 0:s.name)?null===s||void 0===s?void 0:s.name:"",office_name:(null===s||void 0===s?void 0:s.office_name)?null===s||void 0===s?void 0:s.office_name:le.office_name,office_id:(null===s||void 0===s?void 0:s.office_id)?null===s||void 0===s?void 0:s.office_id:le.office_id})})),_(s),e.next=11,oe(s);case 11:e.next=14;break;case 13:O("Phone or Password did not match!");case 14:d(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=de.get("auth");e&&r(Object(f.a)({},e))},_=function(e){de.set("auth",e)};return console.log(n),o?Object(u.jsx)("div",{className:"vp-home",children:"Loading..."}):n.id?Object(u.jsxs)("div",{className:"vp-home",children:[Object(u.jsxs)("div",{className:"welcome",children:["Welcome ",Object(u.jsx)("br",{}),null===n||void 0===n?void 0:n.name,Object(u.jsx)("p",{className:"logout",onClick:function(){r(Object(f.a)({},le)),de.remove("auth")},children:"Logout"})]}),Object(u.jsx)(i.b,{to:"/vp-app/app/add-new",children:"Add New Household"}),Object(u.jsx)(i.b,{to:"/vp-app/app/pending",children:"Pending Data"}),Object(u.jsx)(i.b,{to:"/vp-app/app/incomplete",children:"Incomplete Data"}),Object(u.jsx)(i.b,{to:"/vp-app/app/all",children:"All Data"})]}):Object(u.jsx)("div",{className:"vp-home",children:Object(u.jsxs)("form",{method:"post",onSubmit:w,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"username",placeholder:"Username",name:"username",value:null===n||void 0===n?void 0:n.username,onChange:x,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:null===n||void 0===n?void 0:n.password,onChange:x,required:!0})]}),Object(u.jsx)("p",{style:{color:"red"},children:m}),Object(u.jsx)("button",{children:"Submit"})]})})}n(74);var pe=new m.a;function be(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],r=t[1],s=(pe.get("auth"),Object(o.f)());Object(a.useEffect)((function(){c()}),[]);var c=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,console.log(t),r(Object(h.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.postHousehold(t);case 2:if(200!==e.sent.status){e.next=10;break}return e.next=6,T(Object(f.a)(Object(f.a)({},t),{},{is_posted:1}));case 6:n=e.sent,console.log(n),e.next=11;break;case 10:console.log(t.id,"Failed");case 11:c();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return s.push("/vp-app/app")},children:"Back"}),Object(u.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"SN"}),Object(u.jsx)("th",{children:"Household Id"}),Object(u.jsx)("th",{children:"Ward"}),Object(u.jsx)("th",{children:"Posted"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:++t}),Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.ward_id}),Object(u.jsx)("td",{children:"1"==e.is_posted?Object(u.jsx)("label",{className:"badge badge-success",children:"YES"}):Object(u.jsx)("label",{className:"badge badge-danger",children:"NO"})}),Object(u.jsx)("td",{children:"0"==e.is_posted&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return i(e)},children:"Edit"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(e)},children:"Post"})]})})]},t)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"No Data"})})})]})]})}function je(){return y.open(),Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/vp-app/app/add-new",children:Object(u.jsx)(G,{data:{}})}),Object(u.jsx)(o.a,{path:"/vp-app/app/pending",children:Object(u.jsx)(ae,{})}),Object(u.jsx)(o.a,{path:"/vp-app/app/all",children:Object(u.jsx)(be,{})}),Object(u.jsx)(o.a,{path:"/vp-app/app",children:Object(u.jsx)(he,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/vp-app",children:Object(u.jsx)(d,{})})]})})}var fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(je,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ve(t,e)}))}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.b261c967.chunk.js.map