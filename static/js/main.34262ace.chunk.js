(this.webpackJsonpwatch=this.webpackJsonpwatch||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(11),r=n.n(i),o=(n(35),n(28)),s=n(2),a=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)(o.a,{body:!0,children:[" ",Object(s.jsx)("h2",{className:"justify-content-end",children:" Expense Tracker "}),"  "]})," "]})},j=n(10),l=n(15),u=n(21),d=function(e,t){switch(t.type){case"DELETE_BOOK":return Object(u.a)(Object(u.a)({},e),{},{list:e.list.filter((function(e){return e.id!==t.payload}))});case"ADD_BOOK":return Object(u.a)(Object(u.a)({},e),{},{list:[t.payload].concat(Object(l.a)(e.list))});default:return e}},b={list:[{id:1,text:"Flower",amount:-20},{id:2,text:"Mariem",amount:100},{id:3,text:"book",amount:-30}]},O=Object(c.createContext)(b),x=function(e){var t=e.children,n=Object(c.useReducer)(d,b),i=Object(j.a)(n,2),r=i[0],o=i[1];return Object(s.jsx)(O.Provider,{value:{list:r.list,deleteBokk:function(e){o({type:"DELETE_BOOK",payload:e})},Add:function(e){o({type:"ADD_BOOK",payload:e}),console.log(b)}},children:t})},h=function(){var e=Object(c.useContext)(O).list,t=e.map((function(e){return e.amount}));console.log(e);var n=t.reduce((function(e,t){return e+t}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{id:"balance",children:" Your Balance "}),"  ",Object(s.jsxs)("h4",{children:[" $ ",n," "]})," "]})},f=n(59),p=n(63),m=n(61),v=Object(f.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),g=function(){var e=Object(c.useContext)(O).list.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(s.jsx)(p.a,{className:v.root,children:Object(s.jsxs)(m.a,{width:"50px",children:[Object(s.jsxs)("div",{children:[" ",Object(s.jsxs)("h2",{children:[" Income ",Object(s.jsx)("span",{children:" Expense "})," "]})," ",Object(s.jsxs)("p",{children:[" +$ ",t," ",Object(s.jsxs)("span",{children:[" -$ ",n," "]})]})," "]})," "]})})},y=n(62),C=n(17),k=function(){var e=Object(c.useContext)(O).list,t=Object(c.useContext)(O).deleteBokk,n=Object(c.useState)(!1),i=Object(j.a)(n,2),r=i[0],o=i[1],a=Object(c.useState)([]),l=Object(j.a)(a,2),u=l[0],d=l[1],b=function(){return o(!1)};return Object(s.jsxs)("div",{children:[" "," ",Object(s.jsx)("h3",{children:" History "}),"   ",Object(s.jsxs)("ul",{children:[" ",e.map((function(e){return Object(s.jsxs)("li",{children:[e.text," ",Object(s.jsxs)("span",{children:[" ",e.amount," "]}),Object(s.jsx)("button",{onClick:function(){t(e.id)},children:" * "}),Object(s.jsx)(y.a,{variant:"primary",onClick:function(){o(!0),d(e),console.log(u)},children:"Launch demo modal "}),Object(s.jsxs)(C.a,{show:r,onHide:b,children:[Object(s.jsxs)(C.a.Header,{closeButton:!0,children:[Object(s.jsxs)(C.a.Title,{children:[" ",u.text," "]})," "]})," ",Object(s.jsx)(C.a.Body,{children:" Woohoo, you 're reading this text in a modal!"})," ",Object(s.jsxs)(C.a.Footer,{children:[Object(s.jsx)(y.a,{variant:"secondary",onClick:b,children:"close "})," ",Object(s.jsx)(y.a,{variant:"primary",onClick:b,children:"Save Changes "})," "]})," "]})," "]},e.id)}))]})]})},B=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),o=Object(j.a)(r,2),a=o[0],l=o[1],u=Object(c.useContext)(O).Add;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{style:{color:"blue"},children:" Add Transaction "})," ",Object(s.jsx)("label",{htmlFor:"text",children:" Text "})," ",Object(s.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}})," ",Object(s.jsx)("label",{children:" Amount "})," ",Object(s.jsx)("p",{children:" (negative - expense, positive - income...) "})," ",Object(s.jsx)("input",{type:"text",value:a,onChange:function(e){l(e.target.value),console.log(e.target.value)}})," ",Object(s.jsx)("br",{})," ",Object(s.jsx)("input",{type:"submit",value:"ADD",onClick:function(e){e.preventDefault();var t={id:Math.floor(1e9*Math.random()),text:n,amount:+a};console.log(t.id),u(t),i(""),l("")}})," "]})};var F=function(){return Object(s.jsxs)("div",{className:"App container",children:[Object(s.jsxs)(x,{children:[Object(s.jsx)(a,{}),Object(s.jsx)(h,{}),Object(s.jsx)(g,{}),Object(s.jsx)(k,{}),Object(s.jsx)(B,{})]})," "]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};r.a.render(Object(s.jsx)(F,{}),document.getElementById("root")),D()}},[[42,1,2]]]);
//# sourceMappingURL=main.34262ace.chunk.js.map