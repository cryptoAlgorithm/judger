(this.webpackJsonpjudger=this.webpackJsonpjudger||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),s=(a(80),a(18)),o=a(57),j=a(11),l=(a(81),a(126)),d=a(150),b=a(66),h=a(16),O=a(3),x=a(128),p=a(149),u=a(131),g=a(132),m=a(134),f=a(129),w=a(47),v=a(136),C=a(133),S=a(60),k=a.n(S),y=a(62),N=a.n(y),B=a(61),I=a.n(B),P=a(90),F=a(137),z=a(138),L=a(148),E=a(135),D=a(140),J=a(51),M=a.n(J),T=a(63),G=a.n(T),A=a(50),H=a.n(A),R=a(64),W=a.n(R),X=a(65),q=a.n(X),K=a(139),Q=a(141),U=a(69),V=a(142),Y=a(143),Z=a(144),$=a(145),_=a(146),ee=a(4),te=240,ae=Object(l.a)((function(e){return Object(d.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:te,width:"calc(100% - ".concat(te,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:te,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:te,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(j.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},navIcon:Object(j.a)({},e.breakpoints.up("sm"),{paddingLeft:e.spacing(4)/2-8}),nested:{paddingLeft:e.spacing(4)}})}));var ne=function(){var e,t,a=Object(b.a)({palette:{type:"light"}}),n=ae(a),r=Object(h.a)(),c=i.a.useState(!1),o=Object(s.a)(c,2),l=o[0],d=o[1],S=i.a.useState(!1),y=Object(s.a)(S,2),B=y[0],J=y[1],T=i.a.useState(null),A=Object(s.a)(T,2),R=A[0],X=A[1],te=Boolean(R),ne=function(){X(null)};function ie(e,t,a,n,i){return{name:e,calories:t,fat:a,carbs:n,protein:i}}var re=[ie("Frozen yoghurt",159,6,24,4),ie("Ice cream sandwich",237,9,37,4.3),ie("Eclair",262,16,24,6),ie("Cupcake",305,3.7,67,4.3),ie("Gingerbread",356,16,49,3.9)];return Object(ee.jsx)(x.a,{theme:a,children:Object(ee.jsxs)("div",{className:n.root,children:[Object(ee.jsx)(f.a,{}),Object(ee.jsx)(u.a,{position:"fixed",className:Object(O.a)(n.appBar,Object(j.a)({},n.appBarShift,l)),children:Object(ee.jsxs)(g.a,{children:[Object(ee.jsx)(C.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(O.a)(n.menuButton,Object(j.a)({},n.hide,l)),children:Object(ee.jsx)(k.a,{})}),Object(ee.jsx)(w.a,{variant:"h6",noWrap:!0,children:"Judge Demo - Problems"}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(C.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(e){X(e.currentTarget)},children:Object(ee.jsx)(H.a,{})}),Object(ee.jsxs)(L.a,{id:"menu-appbar",anchorEl:R,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:te,onClose:ne,children:[Object(ee.jsx)(E.a,{onClick:ne,children:"Profile"}),Object(ee.jsx)(E.a,{onClick:ne,children:"My account"})]})]})]})}),Object(ee.jsxs)(p.a,{variant:"permanent",className:Object(O.a)(n.drawer,(e={},Object(j.a)(e,n.drawerOpen,l),Object(j.a)(e,n.drawerClose,!l),e)),classes:{paper:Object(O.a)((t={},Object(j.a)(t,n.drawerOpen,l),Object(j.a)(t,n.drawerClose,!l),t))},children:[Object(ee.jsx)("div",{className:n.toolbar,children:Object(ee.jsx)(C.a,{onClick:function(){d(!1)},children:"rtl"===r.direction?Object(ee.jsx)(I.a,{}):Object(ee.jsx)(N.a,{})})}),Object(ee.jsx)(v.a,{}),Object(ee.jsxs)(m.a,{children:[[{text:"Home",icon:Object(ee.jsx)(M.a,{})},{text:"Problems",icon:Object(ee.jsx)(G.a,{})}].map((function(e,t){return Object(ee.jsxs)(P.a,{button:!0,children:[Object(ee.jsx)(F.a,{className:n.navIcon,children:e.icon}),Object(ee.jsx)(z.a,{primary:e.text})]},e.text)})),Object(ee.jsx)(v.a,{}),Object(ee.jsxs)(P.a,{button:!0,onClick:function(){J(!B)},children:[Object(ee.jsx)(F.a,{className:n.navIcon,children:Object(ee.jsx)(H.a,{})}),Object(ee.jsx)(z.a,{primary:"About"}),B?Object(ee.jsx)(W.a,{}):Object(ee.jsx)(q.a,{})]}),Object(ee.jsx)(K.a,{in:B,timeout:"auto",unmountOnExit:!0,children:Object(ee.jsx)(m.a,{component:"div",disablePadding:!0,children:Object(ee.jsxs)(P.a,{button:!0,className:n.nested,children:[Object(ee.jsx)(F.a,{children:Object(ee.jsx)(M.a,{})}),Object(ee.jsx)(z.a,{primary:"Starred"})]})})})]})]}),Object(ee.jsxs)("main",{className:n.content,children:[Object(ee.jsx)("div",{className:n.toolbar}),Object(ee.jsx)(w.a,{variant:"h4",children:"Problems"}),Object(ee.jsx)(D.a,{children:Object(ee.jsx)(Q.a,{component:U.a,children:Object(ee.jsxs)(V.a,{className:n.table,"aria-label":"simple table",children:[Object(ee.jsx)(Y.a,{children:Object(ee.jsxs)(Z.a,{children:[Object(ee.jsx)($.a,{children:"Dessert (100g serving)"}),Object(ee.jsx)($.a,{align:"right",children:"Calories"}),Object(ee.jsx)($.a,{align:"right",children:"Fat\xa0(g)"}),Object(ee.jsx)($.a,{align:"right",children:"Carbs\xa0(g)"}),Object(ee.jsx)($.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(ee.jsx)(_.a,{children:re.map((function(e){return Object(ee.jsxs)(Z.a,{button:!0,children:[Object(ee.jsx)($.a,{component:"th",scope:"row",children:e.name}),Object(ee.jsx)($.a,{align:"right",children:e.calories}),Object(ee.jsx)($.a,{align:"right",children:e.fat}),Object(ee.jsx)($.a,{align:"right",children:e.carbs}),Object(ee.jsx)($.a,{align:"right",children:e.protein})]},e.name)}))})]})})})]})]})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,151)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(ee.jsx)(i.a.StrictMode,{children:Object(ee.jsx)(ne,{})}),document.getElementById("root")),ie()}},[[89,1,2]]]);
//# sourceMappingURL=main.f6c47e0d.chunk.js.map