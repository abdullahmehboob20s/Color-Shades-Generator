(this.webpackJsonpcolorapp=this.webpackJsonpcolorapp||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),a=n(6),i=n.n(a),s=n(2),u=(n(5),n(9)),l=n.n(u),j=n(7),b=n.n(j),d=n(8),f=function(e){var t=e.item,n=e.oncopycolor,r=Object(o.useState)(!1),a=Object(s.a)(r,2),i=a[0],u=a[1];Object(o.useEffect)((function(){var e;if(!0===i)return e=setInterval((function(){u(!1)}),1e3),function(){clearInterval(e)}}),[i]);return Object(c.jsx)(d.CopyToClipboard,{text:t.hexString(),onCopy:function(){u(!0),!1===i&&n()},children:Object(c.jsx)("div",{style:{backgroundColor:t.hexString(),cursor:"pointer"},className:"item",children:i?Object(c.jsx)("span",{className:"copied",children:"copied"}):Object(c.jsx)("span",{children:t.hexString()})})})},p=n.p+"static/media/sound1.5c555b61.mp3",h=function(e){var t=e.color,n=Object(o.useState)([]),r=Object(s.a)(n,2),a=r[0],i=r[1],u=Object(o.useState)(!1),j=Object(s.a)(u,2),d=(j[0],j[1]),h=Object(o.useRef)();Object(o.useEffect)((function(){b()(t)?(O(),d(!1)):d(!0)}),[t]);var O=function(){var e=new l.a(t).shades(1);i(e)},x=function(){h.current.play()};return Object(c.jsxs)("div",{className:"Shades",children:[Object(c.jsx)("audio",{ref:h,src:p}),a.map((function(e,n){return Object(c.jsx)(f,{item:e,color:t,oncopycolor:x},n)}))]})},O=function(e){return Object(c.jsxs)("div",{className:"ShadeInput",children:[Object(c.jsx)("input",{type:"text",value:e.color,onChange:function(t){return e.oninputchange(t)},placeholder:"Search Color",className:"ShadeSearch",name:"",id:""}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"nextColor",onClick:function(){return e.nextColor()},children:"next Color"})})]})},x=n(4),v=n.n(x),m=function(e){var t=Object(o.useState)("#0000"),n=Object(s.a)(t,2),r=n[0],a=n[1];Object(o.useEffect)((function(){a(v()())}),[]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{color:r,oninputchange:function(e){a(e.target.value)},nextColor:function(){a(v()())}}),Object(c.jsx)(h,{color:r})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),g()},5:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.5638c1e8.chunk.js.map