(this.webpackJsonpqrcoder=this.webpackJsonpqrcoder||[]).push([[0],{42:function(t,e,n){},43:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(13),a=n.n(r),l=(n(42),n(43),n(12)),s=n(26),o=n(18),b=n(7),i=(n(44),n(1)),j=Object(c.createContext)({});function d(t){var e=t.children,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],l=r[1],d=Object(c.useState)([]),x=Object(o.a)(d,2),u=x[0],O=x[1],f=Object(c.useState)(""===a),h=Object(o.a)(f,2),m=h[0],g=h[1],p=Object(c.useState)(!1),v=Object(o.a)(p,2),y=v[0],w=v[1],S=Object(c.useState)(!1),N=Object(o.a)(S,2),C=N[0],E=N[1];function k(t){l(t),g(""===t)}return Object(c.useEffect)((function(){var t=localStorage.getItem("qrcoder");if(t){var e=JSON.parse(t);O(e)}}),[]),Object(i.jsxs)(j.Provider,{value:{content:a,saved:u,isEmpty:m,isDownloading:y,isSaving:C,updateContent:k,downloadAsImage:function(){w(!0);var t=document.getElementById("qrcode");if(t){var e=t.querySelector("svg"),n=null===e||void 0===e?void 0:e.outerHTML,c=document.createElement("canvas"),r=c.getContext("2d"),a=new Image;a.onload=function(){c.width=a.width,c.height=a.height,null===r||void 0===r||r.drawImage(a,0,0);var t=new Date,e=c.toDataURL("image/png"),n="qrcode_".concat(t.getTime(),"__qrcoder"),l=document.createElement("a");l.download=n,l.href="".concat(e),l.click(),w(!1),Object(b.b)("Downloaded successfully!",{type:b.b.TYPE.SUCCESS})},n?a.src="data:image/svg+xml;base64,".concat(btoa(n)):(w(!1),Object(b.b)("An error occurred, please try again",{type:b.b.TYPE.ERROR}))}else w(!1)},save:function(){-1===u.indexOf(a)?(E(!0),O((function(t){var e=[].concat(Object(s.a)(t),[a]),n=JSON.stringify(e);return localStorage.setItem("qrcoder",n),e})),E(!1),Object(b.b)("Saved successfully!",{type:b.b.TYPE.SUCCESS})):Object(b.b)("An error occurred, please try again",{type:b.b.TYPE.ERROR})},remove:function(t){var e=Object(s.a)(u),n=e.indexOf(t);if(-1!==n){e.splice(n,1),O(e);var c=JSON.stringify(e);localStorage.setItem("qrcoder",c),k(""),Object(b.b)("Deleted successfully!",{type:b.b.TYPE.SUCCESS})}else Object(b.b)("An error occurred, please try again",{type:b.b.TYPE.ERROR})},removeAll:function(){O([]),localStorage.setItem("qrcoder",JSON.stringify([])),g(!0)}},children:[Object(i.jsx)(b.a,{}),e]})}var x,u,O,f,h,m=n(6),g=n(2),p=n(3),v=n.n(p),y=v.a.nav(x||(x=Object(g.a)(["\n\tlg:w-1/4\n\th-screen\n\tbg-gray-900\n\ttext-gray-200\n\tz-10\n\tshadow-xl\n\tflex\n\tflex-col\n"]))),w=v.a.h1(u||(u=Object(g.a)(["\n\ttext-center\n\tw-full\n\tmb-0\n\tfont-bold\n\tmd:py-8\n\tpy-4\n\tmd:px-6\n\tpx-2\n\tbg-blue-900\n\tbg-opacity-40\n\tlg:text-2xl\n\ttracking-widest\n\tborder-b-2\n\tborder-blue-900\n"]))),S=v.a.ul(O||(O=Object(g.a)(["\n\tflex-grow\n\tflex\n\tflex-col\n"]))),N=v.a.li(f||(f=Object(g.a)(["\n\tborder-b-2\n\tborder-blue-900\n\tbg-transparent\n\ttransition-colors\n\tfont-bold\n\n\thover:bg-blue-600\n\thover:text-white\n"]))),C=v.a.span(h||(h=Object(g.a)(["\n\tlg:inline-block\n\tml-2\n\thidden\n"])));function E(){return Object(i.jsxs)(y,{children:[Object(i.jsx)(w,{children:"qrcoder"}),Object(i.jsxs)(S,{children:[Object(i.jsx)(N,{children:Object(i.jsxs)(l.b,{to:"/",exact:!0,activeClassName:"bg-blue-700",className:"py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl",children:[Object(i.jsx)(m.f,{}),Object(i.jsx)(C,{children:"New"})]})}),Object(i.jsx)(N,{children:Object(i.jsxs)(l.b,{to:"/saved",exact:!0,activeClassName:"bg-blue-700",className:"py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl",children:[Object(i.jsx)(m.g,{}),Object(i.jsx)(C,{children:"Saved"})]})}),Object(i.jsx)(N,{children:Object(i.jsxs)(l.b,{to:"/about",exact:!0,activeClassName:"bg-blue-700",className:"py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl",children:[Object(i.jsx)(m.e,{}),Object(i.jsx)(C,{children:"About"})]})}),Object(i.jsx)(N,{className:"mt-auto border-t-2",children:Object(i.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/luan11/qrcoder",className:"py-5 px-6 w-full flex items-center md:justify-start justify-center md:text-base text-xl",children:[Object(i.jsx)(m.d,{}),Object(i.jsx)(C,{children:"GitHub"})]})})]})]})}var k,q,R,I,A,D,T,J,P=n(4),Y=n(73),$=n(72),U=n(36),_=n.n(U),z=v.a.div(k||(k=Object(g.a)(["\n\tabsolute\n\tleft-0\n\ttop-0\n\tright-0\n\tbottom-0\n\th-full\n\tw-full\n\tflex\n\tflex-col\n\titems-center\n\tjustify-center\n\tpx-4\n\tpage\n"]))),B=v.a.textarea(q||(q=Object(g.a)(["\n\tpy-4 \n\tpx-8 \n\trounded-md\n\tresize-none \n\tmy-6 \n\tmd:w-3/5\n\tw-full\n\tbg-gray-900\n\ttext-gray-200\n\tmd:h-28\n\tshadow-lg\n\tfont-mono\n"]))),H=v.a.div(R||(R=Object(g.a)(["\n\tflex\n\tflex-wrap\n\tjustify-center\n"]))),L=v.a.button(I||(I=Object(g.a)(["\n\tflex\n\titems-center\n\ttext-center\n\tpx-4\n\tpy-2\n\trounded\n\ttext-gray-200\n\ttransition-transform\n\tease-in-out\n\tduration-500\n\ttransform\n\thover:scale-110\n\tmd:mr-4\n\tmr-2\n\tmd:mb-0\n\tmb-4\n\tfont-bold\n\t\n\t","\n\t","\n\t","\n\n\tdisabled:opacity-50\n\tdisabled:bg-gray-700\n\tdisabled:cursor-default\n\tdisabled:transform-none\n"])),(function(t){return t.$default?"bg-blue-500":""}),(function(t){return t.$success?"bg-green-500":""}),(function(t){return t.$error?"bg-red-500":""})),F=v.a.div(A||(A=Object(g.a)(["\n\tw-64\n\th-64\n\tbg-gray-700\n"])));function G(){var t=Object(c.useContext)(j),e=t.content,n=t.isEmpty,r=t.isDownloading,a=t.isSaving,l=t.updateContent,s=t.downloadAsImage,o=t.save;return Object(i.jsxs)(z,{children:[n?Object(i.jsx)(F,{}):Object(i.jsx)("div",{id:"qrcode",className:"overflow-x-auto w-full flex justify-center",children:Object(i.jsx)(_.a,{value:e})}),Object(i.jsx)(B,{placeholder:"Input your content...",value:e,onChange:function(t){return l(t.currentTarget.value)}}),Object(i.jsxs)(H,{children:[Object(i.jsxs)(L,{type:"button",$default:!0,disabled:a||n,onClick:o,title:"Save it",children:[Object(i.jsx)(m.g,{className:"mr-2"}),"Save"]}),Object(i.jsxs)(L,{type:"button",$success:!0,onClick:s,disabled:r||n,title:"Download it",children:[Object(i.jsx)(m.b,{className:"mr-2"}),"Download"]}),Object(i.jsx)(L,{type:"button",$error:!0,disabled:n,onClick:function(){l("")},title:"Clean the content",children:Object(i.jsx)(m.a,{})})]})]})}var M,Q,K,V,W=v.a.tr(D||(D=Object(g.a)(["\n\tborder-b-2\n\tborder-gray-700\n"]))),X=v.a.td(T||(T=Object(g.a)(["\n\tpy-4\n\tpx-4\n\ttext-center\n"]))),Z=v.a.button(J||(J=Object(g.a)(["\n\tmr-5\n\ttext-xl\n\ttransition\n\tduration-300\n"])));function tt(t){var e=t.data,n=Object(c.useContext)(j),r=n.updateContent,a=n.remove,l=Object(P.f)();return Object(i.jsxs)(W,{children:[Object(i.jsx)(X,{className:"border-r-2 border-gray-700",children:Object(i.jsx)("code",{className:"bg-gray-700 px-4 py-2 lg:break-normal break-all shadow-lg text-sm",children:e})}),Object(i.jsxs)(X,{children:[Object(i.jsx)(Z,{type:"button",className:"hover:text-green-500",onClick:function(){r(e),l.push("/")},title:"Download",children:Object(i.jsx)(m.b,{})}),Object(i.jsx)(Z,{type:"button",className:"hover:text-red-500",onClick:function(){return a(e)},title:"Delete",children:Object(i.jsx)(m.i,{})})]})]})}var et,nt,ct,rt=v.a.div(M||(M=Object(g.a)(["\n\tabsolute\n\tleft-0\n\ttop-0\n\tright-0\n\tbottom-0\n\th-full\n\tw-full\n\tflex\n\tflex-col\n\titems-center\n\tp-4\n\tpage\n\toverflow-y-auto\n"]))),at=v.a.table(Q||(Q=Object(g.a)(["\n\tlg:table-auto\n\ttable-fixed\n\tw-full\n\ttext-gray-200\n"]))),lt=v.a.th(K||(K=Object(g.a)(["\n\tborder-b-2\n\tpy-4\n\tpx-4\n\ttext-center\n\tborder-gray-600\n\tuppercase\n\ttracking-wider\n\tlg:w-auto\n\tw-3/6\n\ttext-2xl\n\ttext-blue-600\n"]))),st=v.a.button(V||(V=Object(g.a)(["\n\ttext-gray-200\n\thover:text-red-500\n\ttransition-colors\n\tmt-10\n\ttext-center\n\tpy-2\n\tpx-4\n\trounded-md\n\tborder-2\n\tborder-gray-200\n\thover:border-red-500\n"])));function ot(){var t=Object(c.useContext)(j),e=t.saved,n=t.removeAll,r=Object(P.f)();return Object(i.jsxs)(rt,{children:[Object(i.jsxs)(at,{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)(lt,{className:"border-r-2",children:Object(i.jsx)(m.c,{className:"inline-block"})}),Object(i.jsx)(lt,{children:Object(i.jsx)(m.h,{className:"inline-block"})})]})}),Object(i.jsx)("tbody",{children:e.length>0&&e.map((function(t,e){return Object(i.jsx)(tt,{data:t},e)}))})]}),e.length>1&&Object(i.jsxs)(st,{type:"button",onClick:function(){n(),r.push("/")},children:[Object(i.jsx)(m.j,{className:"inline-block mr-2"}),"Remove all"]}),0===e.length&&Object(i.jsx)("p",{className:"text-center text-gray-300 mt-10 text-lg italic",children:"No saved QR Codes found..."})]})}var bt,it,jt=v.a.div(et||(et=Object(g.a)(["\n\tabsolute\n\ttop-0\n\tleft-0\n\tbottom-0\n\tright-0\n\ttext-center\n\ttext-gray-200\n\tpt-24\n\tpx-4\n\tpage\n"]))),dt=v.a.h1(nt||(nt=Object(g.a)(["\n\ttext-2xl\n\tfont-bold\n\tmb-6\n"]))),xt=v.a.p(ct||(ct=Object(g.a)(["\n\tlg:w-3/4\n\tmx-auto\n\tmb-2\n"])));function ut(){return Object(i.jsxs)(jt,{children:[Object(i.jsx)(dt,{children:"About"}),Object(i.jsxs)(xt,{children:["Application developed to practice my learning about ",Object(i.jsx)("b",{children:"ReactJS"})," ecosystem. \ud83e\udd13"]}),Object(i.jsxs)(xt,{children:["Contact me ",Object(i.jsx)("a",{className:"text-blue-500 hover:underline",href:"mailto:oi@luandev.ml",children:"oi@luandev.ml"})]})]})}var Ot,ft=v.a.div(bt||(bt=Object(g.a)(["\n\tabsolute\n\tleft-0\n\ttop-0\n\tright-0\n\tbottom-0\n\th-full\n\tw-full\n\tflex\n\tflex-col\n\titems-center\n\tjustify-center\n\tpx-4\n\tpage\n"]))),ht=v.a.h2(it||(it=Object(g.a)(["\n\ttext-center\n\tmd:text-3xl\n\ttext-xl\n\ttext-gray-200\n\tfont-bold\n"])));function mt(){return Object(i.jsx)(ft,{children:Object(i.jsx)(ht,{children:"404 - Not Found"})})}var gt=v.a.div(Ot||(Ot=Object(g.a)(["\n\trelative\t\n\toverflow-hidden\n\tflex-grow \n\th-screen \n\tbg-gray-800\n"])));function pt(){var t=Object(P.g)();return Object(i.jsx)(gt,{children:Object(i.jsx)(Y.a,{children:Object(i.jsx)($.a,{timeout:{enter:800,exit:400},classNames:"pageSlider",children:Object(i.jsxs)(P.c,{location:t,children:[Object(i.jsx)(P.a,{exact:!0,path:"/",children:Object(i.jsx)(G,{})}),Object(i.jsx)(P.a,{exact:!0,path:"/saved",children:Object(i.jsx)(ot,{})}),Object(i.jsx)(P.a,{exact:!0,path:"/about",children:Object(i.jsx)(ut,{})}),Object(i.jsx)(P.a,{path:"*",children:Object(i.jsx)(mt,{})})]})},t.pathname)})})}function vt(){return Object(i.jsx)(d,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(E,{}),Object(i.jsx)(pt,{})]})})}a.a.render(Object(i.jsx)(vt,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.a9277bbf.chunk.js.map