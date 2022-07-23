(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},26:function(e,n,t){"use strict";t.r(n);var a,r,c,o,l,i,u,d,p,s,m,b,x,f,g,E,j=t(0),O=t.n(j),h=t(10),v=t(14),w=t(3),y=t(1),S=t(2),k=Object(S.a)(a||(a=Object(y.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    background-color: #f2f2f2;\n  }\n"]))),I=S.b.div(r||(r=Object(y.a)(["\n  height: 150px;\n  text-align: center;\n  background: teal;\n"]))),C=S.b.h1(c||(c=Object(y.a)([""]))),F=S.b.div(o||(o=Object(y.a)(["\n  padding-top: 20px;\n  color: #fff\n"]))),N=function(){return O.a.createElement(I,null,O.a.createElement(C,null,O.a.createElement(F,null,"Controle Financeiro")))},z=S.b.div(l||(l=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px 15px;\n  width: 30%;\n\n  @media (max-width: 750px) {\n    width: 20%;\n\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 20px;\n    }\n\n    svg {\n      display: none;\n    }\n  }\n"]))),J=S.b.header(i||(i=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  gap: 10px;\n  margin: 20px;\n  \n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"]))),R=S.b.p(u||(u=Object(y.a)(["\n  font-size: 20px;\n"]))),M=S.b.span(d||(d=Object(y.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),$=function(e){var n=e.title,t=e.Icon,a=e.value;return O.a.createElement(z,null,O.a.createElement(J,null,O.a.createElement(R,null,n),O.a.createElement(t,null)),O.a.createElement(M,null,a))},q=S.b.div(p||(p=Object(y.a)(["\n  max-width: 1120px;\n  width: 98%;\n  margin: 0 auto;\n  display: flex;\n  gap: 20px;\n  margin-top: -50px;\n  justify-content: space-around;\n\n  @media (max-width: 470px){\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  }\n"]))),A=t(5),L=function(e){var n=e.income,t=e.expense,a=e.total;return O.a.createElement(q,null,O.a.createElement($,{title:"Entradas",Icon:A.c,value:n}),O.a.createElement($,{title:"Sa\xeddas",Icon:A.b,value:t}),O.a.createElement($,{title:"Total",Icon:A.a,value:a}))},T=S.b.div(s||(s=Object(y.a)(["\n  max-width: 1120px;\n  margin: 20px auto;\n  width: 98%;\n  background-color: #fff;\n  box-shadow: 0px 0px 5px #ccc;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0px;\n  gap: 10px;\n\n  @media (max-width: 750px) {\n    display: grid;\n  }\n"]))),D=S.b.div(m||(m=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),P=S.b.label(b||(b=Object(y.a)([""]))),V=S.b.input(x||(x=Object(y.a)(["\n  outline: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 15px;\n  border: 1px solid #ccc;\n"]))),B=S.b.div(f||(f=Object(y.a)(["\n  display: flex;\n  align-items: center;\n\n  input {\n    margin-left: 20px;\n    accent-color: black;\n    margin-top: 0;\n  }\n"]))),G=S.b.button(g||(g=Object(y.a)(["\n  padding-inline: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: teal;\n  text-transform: uppercase;\n"]))),H=S.b.button(E||(E=Object(y.a)(["\n  padding-inline: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  background-color: #e32636;\n  text-transform: uppercase;\n"]))),K=function(e){var n=e.handleAdd,t=e.clearStorage,a=Object(j.useState)(""),r=Object(w.a)(a,2),c=r[0],o=r[1],l=Object(j.useState)(""),i=Object(w.a)(l,2),u=i[0],d=i[1],p=Object(j.useState)(!1),s=Object(w.a)(p,2),m=s[0],b=s[1];return O.a.createElement(O.a.Fragment,null,O.a.createElement(T,null,O.a.createElement(D,null,O.a.createElement(P,null,"Descri\xe7\xe3o"),O.a.createElement(V,{value:c,onChange:function(e){return o(e.target.value)}})),O.a.createElement(D,null,O.a.createElement(P,null,"Valor"),O.a.createElement(V,{value:u,type:"number",onChange:function(e){return d(e.target.value)}})),O.a.createElement(B,null,O.a.createElement(V,{type:"radio",defaultChecked:!0,id:"rIncome",name:"group1",onChange:function(){return b(!m)}}),O.a.createElement(P,{htmlFor:"rIncome"},"Entrada"),O.a.createElement(V,{type:"radio",id:"rExpenses",name:"group1",onChange:function(){return b(!m)}}),O.a.createElement(P,{htmlFor:"rExpenses"},"Sa\xedda")),O.a.createElement(G,{onClick:function(){if(c&&u)if(u<1)alert("O valor tem que ser positivo!");else{var e={id:Math.round(1e3*Math.random()),desc:c,amount:u,expense:m};n(e),o(""),d("")}else alert("Informe a descri\xe7\xe3o e o valor!")}},"adicionar"),O.a.createElement(H,{className:"clear",onClick:t},"limpar dados")))},Q=function(){var e=localStorage.getItem("transactions"),n=Object(j.useState)(e?JSON.parse(e):[]),t=Object(w.a)(n,2),a=t[0],r=t[1],c=Object(j.useState)(0),o=Object(w.a)(c,2),l=o[0],i=o[1],u=Object(j.useState)(0),d=Object(w.a)(u,2),p=d[0],s=d[1],m=Object(j.useState)(0),b=Object(w.a)(m,2),x=b[0],f=b[1];Object(j.useEffect)(function(){var e=a.filter(function(e){return e.expense}).map(function(e){return Number(e.amount)}),n=a.filter(function(e){return!e.expense}).map(function(e){return Number(e.amount)}),t=e.reduce(function(e,n){return e+n},0).toFixed(2),r=n.reduce(function(e,n){return e+n},0).toFixed(2),c=Math.abs(r-t).toFixed(2);i("R$ ".concat(r)),s("R$ ".concat(t)),f("".concat(Number(r)<Number(t)?"-":"","R$ ").concat(c))},[a]);return O.a.createElement(O.a.Fragment,null,O.a.createElement(N,null),O.a.createElement(L,{income:l,expense:p,total:x}),O.a.createElement(K,{clearStorage:function(){r([])},handleAdd:function(e){var n=[].concat(Object(v.a)(a),[e]);r(n),localStorage.setItem("transactions",JSON.stringify(n))},transactionsList:a,setTransactionsList:r}),O.a.createElement(k,null))};Object(h.createRoot)(document.querySelector("#root")).render(O.a.createElement(Q,null))}},[[15,2,1]]]);
//# sourceMappingURL=main.dfa72a65.chunk.js.map