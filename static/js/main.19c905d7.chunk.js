(this["webpackJsonpjobs-client"]=this["webpackJsonpjobs-client"]||[]).push([[0],{103:function(t,n,e){t.exports=e(152)},108:function(t,n,e){},109:function(t,n,e){t.exports=e.p+"static/media/fistbump-logo.0296bf0e.svg"},110:function(t,n){t.exports="data:image/png;base64,PHN2ZyB3aWR0aD0iMTQzMiIgaGVpZ2h0PSI4MzIiIHZpZXdCb3g9IjAgMCAxNDMyIDgzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyMzggMTE4LjVDMTIzOCAxMTguNSAxMjkwLjAxIDU0LjA1NyAxMzUxIDMwLjVDMTM4Mi40NyAxOC4zNDY1IDE0MzIgMC41IDE0MzIgMC41TDE0MzIgODMyTDAuNSA4MzJDMC41IDgzMiA0MjYuNDAzIDgxMC4wNjIgNjU1IDY4MS41Qzc4MS4wMTcgNjEwLjYyOCA4MTUuNDYgNTc4LjY5OSA5NDUuNSA0NTJDMTA2OS41OCAzMzEuMTA4IDEyMzggMTE4LjUgMTIzOCAxMTguNVoiIGZpbGw9IiMyNzZFQjAiLz4KPC9zdmc+Cg=="},142:function(t,n,e){t.exports=e.p+"static/media/loader-white.ceaa0781.svg"},152:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(12),c=e.n(o),i=(e(108),e(24)),u=e(15),l=e(4),s=e(5),b=(e(109),e(110),e(91));function p(){var t=Object(l.a)(["\n\twidth: 60px;\n\tmargin: auto;\n"]);return p=function(){return t},t}function f(){var t=Object(l.a)(["\n\tmax-width: 1140px;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return f=function(){return t},t}function d(){var t=Object(l.a)(["\n\tcolor: black;\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: black;\n\t\ttext-decoration: none;\n\t}\n\t&:active {\n\t\tcolor: black;\n\t\ttext-decoration: none;\n\t}\n"]);return d=function(){return t},t}function m(){var t=Object(l.a)(["\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tpadding: 5px 10px;\n\twidth: 150px;\n\t/* border-radius: 9px; */\n\tcolor: white;\n\tfont-weight: bold;\n\ttransition: all 0.5s;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:hover {\n\t\tbackground-color: transparent;\n\t\tcolor: ",";\n\t}\n"]);return m=function(){return t},t}function g(){var t=Object(l.a)(["\n\ttext-align: left;\n\tfont-weight: bold;\n\tfont-size: 1.3em;\n"]);return g=function(){return t},t}function x(){var t=Object(l.a)(["\n\tbackground-color: #276eb012;\n\tdisplay: grid;\n\tgap: 0rem;\n\trow-gap: 0rem;\n\tgrid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n\t@media (max-width: 400px) {\n\t\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\t}\n"]);return x=function(){return t},t}function v(){var t=Object(l.a)(["\n\tbackground-color: white;\n\tpadding: 20px;\n\ttext-align: left;\n\tbox-shadow: 1px 1px 5px 0px #00000026;\n\tmargin: 10px 10px 5px 10px;\n"]);return v=function(){return t},t}function j(){var t=Object(l.a)(["\n\theight: 80vh;\n"]);return j=function(){return t},t}var O=" #0066B3",E="#F5821F",h=s.b.div(j()),y=Object(s.b)(b.a.div)(v()),w=(s.b.div(x()),s.b.p(g())),D=Object(s.a)(m(),"#2B96DC","#2B96DC","#2B96DC"),I=Object(s.b)(i.b)(d()),M=s.b.div(f()),k=s.b.img(p()),A=e(64),C=e.n(A);C.a.initializeApp({apiKey:"AIzaSyDD9FayZJXFe5GGyKKih4q-9EZMzPJfI3o",authDomain:"jobs-app-dfeee.firebaseapp.com",databaseURL:"https://jobs-app-dfeee.firebaseio.com",projectId:"jobs-app-dfeee",storageBucket:"jobs-app-dfeee.appspot.com",messagingSenderId:"543805295350",appId:"1:543805295350:web:fd56ec32f022ebeb9fbad7"});var S=C.a,z="SAVE_CURRENT_JOB",N="SAVE_ALL_JOBS",T="LOGGED_IN",L="LOGGED_OUT",B=function(t){return{type:T,payload:t}},F=e(13),_=e(25),R=e.n(_),P="https://sos-client-api.herokuapp.com/",G=e(20),U=e(189),Z=e(188),J=e(191),V=e(185),Y=e(183),q=e(193),K=e(192);function H(){var t=Object(l.a)(["\n\tcolor: black;\n\ttext-decoration: none;\n"]);return H=function(){return t},t}function Q(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n\tcolor: ",";\n"]);return Q=function(){return t},t}function W(){var t=Object(l.a)(["\n\t&:focus {\n\t\toutline: none;\n\t}\n"]);return W=function(){return t},t}var X=function(t){var n=t.title,e=t.link;console.log(e);var o=Object(a.useState)(!1),c=Object(G.a)(o,2),i=c[0];c[1],console.log(i);var l=r.a.useState(!1),s=Object(G.a)(l,2),b=s[0],p=s[1],f=r.a.useRef(null),d=Object(F.b)(),m=function(){S.auth().signOut(),d({type:L,payload:!1})},g=function(t){f.current&&f.current.contains(t.target)||p(!1)};function x(t){"Tab"===t.key&&(t.preventDefault(),p(!1))}var v=r.a.useRef(b);return r.a.useEffect((function(){!0===v.current&&!1===b&&f.current.focus(),v.current=b}),[b]),r.a.createElement(r.a.Fragment,null,r.a.createElement($,{ref:f,"aria-controls":b?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){p((function(t){return!t}))}},r.a.createElement(tt,null,n)),r.a.createElement(Y.a,{open:b,anchorEl:f.current,role:void 0,transition:!0,disablePortal:!0},(function(t){var n=t.TransitionProps,a=t.placement;return r.a.createElement(J.a,Object.assign({},n,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(V.a,null,r.a.createElement(Z.a,{onClickAway:g},r.a.createElement(K.a,{autoFocusItem:b,id:"menu-list-grow",onKeyDown:x},r.a.createElement(q.a,null,r.a.createElement(nt,{onClick:g,to:e},"Profile")),r.a.createElement(q.a,{onClick:m},"Logout")))))})),i&&r.a.createElement(u.a,{to:"/register"}))},$=Object(s.b)(U.a)(W()),tt=s.b.p(Q(),O),nt=Object(s.b)(i.b)(H());function et(){var t=Object(l.a)(["\n\tcolor: white;\n\tborder-style: none;\n\tpadding: 5px 15px;\n\tfont-size: 0.8em;\n\tborder-radius: 6px;\n\tbackground-color: #2b96dc;\n"]);return et=function(){return t},t}s.b.button(et());function at(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]);return at=function(){return t},t}function rt(){var t=Object(l.a)(["\n\tcolor: ",";\n\tmargin-left: 10px;\n"]);return rt=function(){return t},t}function ot(){var t=Object(l.a)(["\n\tgrid-column: 2/6;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tlist-style: none;\n\tmargin: 0px;\n\tpadding: 0px;\n"]);return ot=function(){return t},t}function ct(){var t=Object(l.a)(["\n\twidth: 80px;\n"]);return ct=function(){return t},t}function it(){var t=Object(l.a)(["\n\tcolor: ",";\n\ttext-decoration: none;\n\tfont-weight: bold;\n\t&:hover {\n\t\ttext-decoration: none;\n\t\t/* color: white; */\n\t}\n\t&:active {\n\t\ttext-decoration: none;\n\t\t/* color: white; */\n\t}\n"]);return it=function(){return t},t}function ut(){var t=Object(l.a)(["\n\tdisplay: flex;\n\t/* grid-template-columns: repeat(6, 1fr); */\n\tjustify-content: space-between;\n\ttext-align: left;\n\tmax-width: 1140px;\n\tmargin: auto;\n\tpadding: 0px 0px 0px 10px;\n"]);return ut=function(){return t},t}function lt(){var t=Object(l.a)(["\n\tposition: sticky;\n\ttop: 0;\n\tcolor: white;\n\t/* background-color: ","; */\n\t/* border: 1px solid black; */\n\tpadding: 10px 20px;\n"]);return lt=function(){return t},t}var st=function(){var t=Object(F.b)();Object(a.useEffect)((function(){S.auth().onAuthStateChanged((function(n){if(n){var e={uid:n.uid,email:n.email,name:n.displayName};console.log(e),R.a.post("".concat(P,"create-user-client"),e).then((function(n){var e=n.data;t(B(e))})).catch((function(t){return console.log(t)}))}}))}),[]);var n=Object(F.c)((function(t){return t.usersData})),e=n.userDataMongoDB,o=n.isLoggedIn?r.a.createElement(X,{title:e.name,link:"profile/".concat(e&&e._id)}):r.a.createElement(ft,{to:"/register"},"Register");return r.a.createElement(bt,null,r.a.createElement(pt,null,r.a.createElement(ft,{to:"/"},r.a.createElement("span",{style:{color:E}},"switch On")," Success"),r.a.createElement(dt,null,r.a.createElement(mt,null,o))))},bt=s.b.header(lt(),"#2B96DC"),pt=s.b.div(ut()),ft=Object(s.b)(i.b)(it(),O),dt=(s.b.img(ct()),s.b.ul(ot())),mt=s.b.li(rt(),"#2B96DC");s.b.div(at());function gt(){var t=Object(l.a)(["\n    ","\n    width: 200px;\n    text-decoration: none;\n    font-weight: bold;\n    padding: 6px 20px;\n    transition: all 0.4s;\n    &:hover{\n        text-decoration: none;\n    }\n"]);return gt=function(){return t},t}function xt(){var t=Object(l.a)(["\n    margin: 20px 0px;\n    padding: 0px;\n    text-align: left;\n    font-weight: bold;\n    font-size: 3.5em;\n"]);return xt=function(){return t},t}function vt(){var t=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    \n"]);return vt=function(){return t},t}s.b.div(vt()),s.b.p(xt()),Object(s.b)(i.b)(gt(),D),e(84);function jt(){var t=Object(l.a)(["\n    max-width: 500px;\n    transition: all 0.5s;\n    @media (max-width: 500px) {\n        width: 300px;\n    }\n"]);return jt=function(){return t},t}function Ot(){var t=Object(l.a)(["\n    margin: auto;\n    margin-top: 8%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 900px;\n"]);return Ot=function(){return t},t}function Et(){var t=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Et=function(){return t},t}s.b.div(Et()),s.b.div(Ot()),s.b.img(jt());var ht=e(49),yt=e.n(ht),wt=e(58),Dt=function(t){return{type:z,payload:t}},It=function(t){return{type:N,payload:t}},Mt=function(t){var n=function(t){var n=(new Date-t)/864e5;return Math.floor(n)}(new Date(t));return 1===n?"Yesterday":0===n?"Today":"".concat(n," days ago")},kt=e(85),At=e.n(kt),Ct=e(86),St=e.n(Ct),zt=e(66),Nt=e.n(zt),Tt=e(87),Lt=e.n(Tt);function Bt(){var t=Object(l.a)(["\n    padding: 3px 10px;\n    border-style: none;\n    border-bottom: 1px solid #0000002e;\n    \n    background-color: white;\n    &:focus{\n        outline: none;\n    border-bottom: 1px solid ",";\n\n    }\n"]);return Bt=function(){return t},t}function Ft(){var t=Object(l.a)(["\n    color: #00000073;\n    font-weight: bold;\n"]);return Ft=function(){return t},t}function _t(){var t=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n"]);return _t=function(){return t},t}s.b.div(_t()),s.b.label(Ft()),s.b.input(Bt(),"#2B96DC"),e(142);function Rt(){var t=Object(l.a)(["\n\twidth: 25px;\n\tmargin: auto;\n"]);return Rt=function(){return t},t}function Pt(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return Pt=function(){return t},t}function Gt(){var t=Object(l.a)(["\n\tcolor: white;\n\tpadding: 5px 8px;\n\twidth: 100px;\n\tborder-radius: 0px;\n\tbackground-color: #30af9e;\n\tborder: 1px solid #30af9e;\n\ttransition: all 0.3s;\n\t&:disabled {\n\t\topacity: 0.3;\n\t}\n"]);return Gt=function(){return t},t}function Ut(){var t=Object(l.a)(["\n\tcolor: red;\n\tpadding: 5px 8px;\n\twidth: 100px;\n\tborder-radius: 0px;\n\tbackground-color: transparent;\n\tborder: 1px solid red;\n\ttransition: all 0.3s;\n\t&:hover {\n\t\tbackground-color: red;\n\t\tcolor: white;\n\t}\n"]);return Ut=function(){return t},t}function Zt(){var t=Object(l.a)(["\n\topacity: 0.6;\n\twidth: fit-content;\n\ttext-align: left;\n\tmargin: 0px 15px 0px 0px;\n\tpadding: 0px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-weight: 600;\n"]);return Zt=function(){return t},t}function Jt(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n\tfont-weight: bold;\n"]);return Jt=function(){return t},t}function Vt(){var t=Object(l.a)(["\n\tmargin-right: 2px;\n"]);return Vt=function(){return t},t}function Yt(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n\tfont-weight: bold;\n\tcolor: grey;\n"]);return Yt=function(){return t},t}function qt(){var t=Object(l.a)(["\n\tmargin-top: 10px;\n\tdisplay: flex;\n\talign-items: center;\n"]);return qt=function(){return t},t}function Kt(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n\tcolor: grey;\n\tfont-weight: 600;\n"]);return Kt=function(){return t},t}function Ht(){var t=Object(l.a)(["\n\tmargin-right: 15px;\n\topacity: 0.6;\n"]);return Ht=function(){return t},t}function Qt(){var t=Object(l.a)([""]);return Qt=function(){return t},t}function Wt(){var t=Object(l.a)(["\n\t",";\n\t@media (max-width: 500px) {\n\t\tmargin-top: 20px;\n\t}\n\n\t&:disabled {\n\t\tbackground-color: transparent;\n\t\tborder-color: green;\n\t\tcolor: green;\n\t\tcursor: not-allowed;\n\t}\n"]);return Wt=function(){return t},t}function Xt(){var t=Object(l.a)([""]);return Xt=function(){return t},t}var $t=function(t){t.variants;var n=t.job,e=t.canApply,o=Object(a.useState)("Apply"),c=Object(G.a)(o,2),i=c[0],l=c[1],s=Object(a.useState)(!1),b=Object(G.a)(s,2),p=b[0],f=b[1],d=Object(F.c)((function(t){return t.usersData})),m=d.isLoggedIn,g=d.userDataMongoDB,x=Object(a.useState)(!1),v=Object(G.a)(x,2),j=v[0],O=v[1],E=Object(a.useState)(!1),h=Object(G.a)(E,2),w=h[0],D=h[1],M=Object(F.b)(),k=(n.title,n.company,n.experience,n.salary,n.location,n.createdAt,n.user),A=g?g._id:"";Object(a.useEffect)((function(){k.includes(A)&&(f(!0),l("Applied"))}),[A]);var C=function(){var t=Object(wt.a)(yt.a.mark((function t(){var e,a,r,o,c,i,u;return yt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m){t.next=22;break}if(console.log("Logged in"),!g){t.next=20;break}if(e=g._id,a=g.name,r=g.email,o=g.education,c=g.skills,i=g.resume,u=g.number,t.prev=4,!(a&&r&&o&&c&&i&&u)){t.next=14;break}if(k.includes(e)){t.next=12;break}return t.next=9,R.a.patch("".concat(P,"apply/").concat(n._id),{candidateID:e},{withCredentials:!0});case 9:t.sent,f(!0),l("Applied");case 12:t.next=15;break;case 14:O(!0);case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(4),O(!0);case 20:t.next=23;break;case 22:D(!0);case 23:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(){return t.apply(this,arguments)}}();return console.log(n),r.a.createElement(y,{onClick:function(){M(Dt(n))}},r.a.createElement(I,{to:"/".concat(n._id)},r.a.createElement(tn,null,r.a.createElement(bn,null,r.a.createElement(cn,null,n.companyDetails.companyId.companyName),r.a.createElement(rn,null,"Posted ",Mt(n.createdAt))),r.a.createElement(bn,{style:{alignItems:"flex-end"}},r.a.createElement("div",null,r.a.createElement(ln,null,n.jobOpeningInfo.jobTitle),r.a.createElement(on,null,r.a.createElement(sn,null,r.a.createElement(un,{src:At.a}),n.jobOpeningInfo.jobType),r.a.createElement(an,{src:Nt.a}),r.a.createElement(sn,null,r.a.createElement(un,{src:Lt.a}),n.jobOpeningInfo.salary?r.a.createElement(r.a.Fragment,null,n.jobOpeningInfo.salary.from," - ",n.jobOpeningInfo.salary.to):r.a.createElement(r.a.Fragment,null,"Not Specified")),r.a.createElement(an,{src:Nt.a}),r.a.createElement(sn,{style:{textTransform:"capitalize"}},r.a.createElement(un,{src:St.a}),n.jobAddress.city))),e&&r.a.createElement(en,null,r.a.createElement(nn,{disabled:p,onClick:C},i))))),j&&r.a.createElement(u.a,{to:"profile/".concat(g&&g._id)}),w&&r.a.createElement(u.a,{to:"/register"}))},tn=s.b.div(Xt()),nn=s.b.button(Wt(),D),en=s.b.div(Qt()),an=s.b.img(Ht()),rn=s.b.p(Kt()),on=s.b.div(qt()),cn=s.b.p(Yt()),un=s.b.img(Vt()),ln=s.b.h2(Jt()),sn=s.b.p(Zt()),bn=(s.b.button(Ut()),s.b.button(Gt()),s.b.div(Pt())),pn=(s.b.img(Rt()),e(59)),fn=e.n(pn);function dn(){var t=Object(l.a)(["\n\twidth: 100%;\n\theight: 80vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return dn=function(){return t},t}var mn=function(){!function(t,n){var e=Object(F.b)();Object(a.useEffect)((function(){R.a.get(t).then((function(t){var a=t.data;return e(n(a))})).catch((function(t){return console.log(t)}))}),[t])}("".concat(P,"public-jobs"),It);var t=Object(F.c)((function(t){return t.jobsData})).jobs;return r.a.createElement(M,null,function(){if(t)return t.length>0?t.map((function(t,n){return r.a.createElement($t,{key:t._id,job:t})})):r.a.createElement(gn,null,r.a.createElement(k,{src:fn.a}))}())},gn=s.b.div(dn());function xn(){var t=Object(l.a)(["\n\tmax-width: 1140px;\n\n\tmargin: auto;\n"]);return xn=function(){return t},t}function vn(){var t=Object(l.a)(["\n\tfont-weight: bold;\n"]);return vn=function(){return t},t}var jn={initial:{opacity:0,x:"+5vw"},animate:{opacity:1,x:0,transition:{duration:.5,ease:"easeOut"}}},On={initial:{opacity:0,x:"+5vw"},animate:{opacity:1,x:0,transition:{delay:.2,duration:.5,ease:"easeOut"}}},En={initial:{opacity:0,x:"+5vw"},animate:{opacity:1,x:0,transition:{delay:.4,duration:.5,ease:"easeOut"}}};var hn=function(t){var n=t.match.params.id,e=Object(F.b)(),o=Object(F.c)((function(t){return t.jobsData})).job;Object(a.useEffect)((function(){if(!o){var t="".concat(P).concat(n);R.a.get(t).then((function(t){var n=t.data;console.log(n),e(Dt(n))})).catch((function(t){return console.log(t)}))}}),[]);var c=function(t){return console.log(t),t.map((function(t){return r.a.createElement("li",{key:t},t)}))};return o&&r.a.createElement(wn,null,r.a.createElement($t,{variants:jn,job:o,canApply:!0}),r.a.createElement(y,{variants:On,initial:"initial",animate:"animate"},r.a.createElement(w,null,"Job Details"),r.a.createElement(yn,null,"Description"),r.a.createElement("p",null,o.jobDetails.jobDescription),r.a.createElement(yn,null,"Eligibility"),r.a.createElement("ul",null,c(o.jobDetails.eligibility)),r.a.createElement(yn,null,"Responsibilities"),r.a.createElement("ul",null,c(o.jobDetails.responsibilities))),r.a.createElement(y,{variants:En,initial:"initial",animate:"animate"},r.a.createElement(w,null,"About Company"),r.a.createElement("p",null,o.companyDetails.companyId.companyName),r.a.createElement("p",null,o.companyDetails.companyId.companyAddress)))},yn=s.b.p(vn()),wn=s.b.div(xn()),Dn=e(190);function In(){var t=Object(l.a)(["\n\twidth: 100%;\n"]);return In=function(){return t},t}function Mn(){var t=Object(l.a)(["\n\tmargin: 20px 0px;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return Mn=function(){return t},t}function kn(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n"]);return kn=function(){return t},t}function An(){var t=Object(l.a)(["\n\tmargin: 0px;\n\tpadding: 0px;\n"]);return An=function(){return t},t}function Cn(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return Cn=function(){return t},t}function Sn(){var t=Object(l.a)(["\n\t","\n"]);return Sn=function(){return t},t}function zn(){var t=Object(l.a)(["\n\tmargin: auto;\n\tmax-width: 900px;\n"]);return zn=function(){return t},t}var Nn=function(t){var n=t.match,e=Object(a.useState)(!1),o=Object(G.a)(e,2),c=o[0],i=o[1],l=n.params.id,s=n.url.split("/")[1],b=Object(F.b)(),p=Object(F.c)((function(t){return t.usersData})).userDataMongoDB;Object(a.useEffect)((function(){R.a.get("".concat(P,"user-client/").concat(l),{withCredentials:!0}).then((function(t){var n=t.data;b(B(n))})).catch((function(t){return console.log(t)}))}),[]);var f=Object(a.useState)(p&&p.name),d=Object(G.a)(f,2),m=d[0],g=d[1],x=Object(a.useState)(p&&p.email),v=Object(G.a)(x,2),j=v[0],O=v[1],E=Object(a.useState)(p&&p.number),h=Object(G.a)(E,2),w=h[0],D=h[1],I=Object(a.useState)(p&&p.education),M=Object(G.a)(I,2),k=M[0],A=M[1],C=Object(a.useState)(p&&p.skills),S=Object(G.a)(C,2),z=S[0],N=S[1],T=Object(a.useState)(),L=Object(G.a)(T,2),_=L[0],U=L[1],Z=Object(a.useState)(p&&p.resumename),J=Object(G.a)(Z,2),V=J[0];J[1],Object(a.useEffect)((function(){m&&j&&w&&k&&z&&V&&"profile"!==s&&i(!0)}),[]);var Y=function(){var t=Object(wt.a)(yt.a.mark((function t(n){var e,a,r,o;return yt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Update"),n.preventDefault(),e={name:m,email:j,number:w,education:k,skills:z},(a=new FormData).append("data",JSON.stringify(e)),_&&a.append("file",_),t.prev=6,t.next=9,R.a.patch("".concat(P,"update-client-profile/").concat(l),a,{withCredentials:!0});case 9:r=t.sent,o=r.data,b(B(o)),i(!0),console.log(o),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(n){return t.apply(this,arguments)}}();return r.a.createElement(Tn,null,r.a.createElement(y,null,r.a.createElement("form",{onSubmit:Y},r.a.createElement(Bn,null,r.a.createElement(Fn,null,"Profile"),r.a.createElement(Bn,null,r.a.createElement(Ln,null,"Save"))),r.a.createElement(_n,null,r.a.createElement(Rn,{value:m,onChange:function(t){return g(t.target.value)},required:!0,label:"Full Name"})),r.a.createElement(_n,null,r.a.createElement(Rn,{disabled:!0,value:j,onChange:function(t){return O(t.target.value)},required:!0,type:"email",label:"Email"})),r.a.createElement(_n,null,r.a.createElement(Rn,{value:w,required:!0,onChange:function(t){return D(t.target.value)},type:"number",label:"Contact Number"})),r.a.createElement(_n,null,r.a.createElement(Rn,{value:k,required:!0,onChange:function(t){return A(t.target.value)},label:"Education"})),r.a.createElement(_n,null,r.a.createElement(Rn,{value:z,required:!0,onChange:function(t){return N(t.target.value)},label:"Skills"})),r.a.createElement(_n,null,r.a.createElement("label",{htmlFor:"resume"},V?"".concat(V," (Old Resume) - Click on 'Choose File' to upload updated RESUME (If any)"):"RESUME"),r.a.createElement("input",{onChange:function(t){return U(t.target.files[0])},type:"file",name:"resume"})))),c&&r.a.createElement(u.a,{to:"/jobs"}))},Tn=s.b.div(zn()),Ln=s.b.button(Sn(),D),Bn=s.b.div(Cn()),Fn=s.b.h2(An()),_n=(s.b.p(kn()),s.b.div(Mn())),Rn=Object(s.b)(Dn.a)(In()),Pn=e(88),Gn=e.n(Pn),Un=e(90),Zn=e.n(Un);function Jn(){var t=Object(l.a)(["\n\twidth: 60px;\n"]);return Jn=function(){return t},t}s.b.img(Jn());function Vn(){var t=Object(l.a)([""]);return Vn=function(){return t},t}function Yn(){var t=Object(l.a)(["\n\twidth: 500px;\n"]);return Yn=function(){return t},t}function qn(){var t=Object(l.a)(["\n\tdisplay: flex;\n\tmargin: auto;\n\tmax-width: 900px;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return qn=function(){return t},t}var Kn={signInFlow:"popup",signInOptions:[S.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}};var Hn=function(){console.log("registerPage REnder");var t=Object(F.c)((function(t){return t.usersData})),n=t.userDataMongoDB,e=t.isLoggedIn;return console.log(n),console.log(e),Object(F.b)(),r.a.createElement(Qn,null,r.a.createElement(Wn,{src:Zn.a}),r.a.createElement(Xn,null,r.a.createElement(Gn.a,{uiConfig:Kn,firebaseAuth:S.auth()})),e&&r.a.createElement(u.a,{to:"form/".concat(n&&n._id)}))},Qn=Object(s.b)(h)(qn()),Wn=s.b.img(Yn()),Xn=s.b.div(Vn());var $n=function(t){return console.log(t),r.a.createElement("div",{onContextMenu:function(t){t.preventDefault()},className:"App"},r.a.createElement(i.a,{basename:"/"},r.a.createElement(st,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:mn}),r.a.createElement(u.b,{path:"/register",component:Hn}),r.a.createElement(u.b,{path:"/profile/:id",component:Nn}),r.a.createElement(u.b,{path:"/form/:id",component:Nn}),r.a.createElement(u.b,{path:"/:id",component:hn}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));e(151);var te=e(42),ne=e(33),ee={isLoggedIn:!1,userDataFirebase:null,userDataMongoDB:null},ae=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0,e=n.type,a=n.payload;switch(e){case T:return console.log(a),Object(ne.a)(Object(ne.a)({},t),{},{isLoggedIn:!0,userDataMongoDB:a});case L:return Object(ne.a)(Object(ne.a)({},t),{},{isLoggedIn:a,userDataMongoDB:null});default:return t}},re={jobs:[],job:null},oe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,n=arguments.length>1?arguments[1]:void 0,e=n.type,a=n.payload;switch(e){case N:return console.log(a),Object(ne.a)(Object(ne.a)({},t),{},{jobs:a});case z:return console.log(a),Object(ne.a)(Object(ne.a)({},t),{},{job:a});default:return t}},ce=Object(te.b)({jobsData:oe,usersData:ae}),ie=Object(te.c)(ce);c.a.render(r.a.createElement(F.a,{store:ie},r.a.createElement($n,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},59:function(t,n,e){t.exports=e.p+"static/media/loader.34573990.svg"},66:function(t,n,e){t.exports=e.p+"static/media/dot.720a0ad7.svg"},84:function(t,n,e){t.exports=e.p+"static/media/interview.eeee66c5.svg"},85:function(t,n,e){t.exports=e.p+"static/media/exp.48804530.svg"},86:function(t,n,e){t.exports=e.p+"static/media/location.9f46df7f.svg"},87:function(t,n,e){t.exports=e.p+"static/media/salary.cb6077d6.svg"},90:function(t,n,e){t.exports=e.p+"static/media/register.815c6cc3.svg"}},[[103,1,2]]]);
//# sourceMappingURL=main.19c905d7.chunk.js.map