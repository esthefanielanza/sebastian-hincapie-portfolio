(this["webpackJsonpsebastian-hincapie-portfolio"]=this["webpackJsonpsebastian-hincapie-portfolio"]||[]).push([[0],Array(29).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),l=n.n(r),s=(n(29),n(11)),i=n(2),o=n(9),j=n(3),u=n.n(j),d=n(21),b=n(22),h=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,null,[{key:"fallbackCopyTextToClipboard",value:function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error("[Error] Could not copy text: ",n)}document.body.removeChild(t)}},{key:"copyToClipboard",value:function(e){navigator.clipboard?navigator.clipboard.writeText(e).then(null,(function(e){console.error("[Error] Could not copy text: ",e)})):this.fallbackCopyTextToClipboard(e)}}]),e}(),v=n(5),f=n(12),O=(n(30),n(0)),m=["children","className","variant","type"],p=function(e){var t=e.children,n=e.className,c=e.variant,a=e.type,r=Object(f.a)(e,m);return Object(O.jsx)("button",Object(v.a)(Object(v.a)({},r),{},{type:a,className:u()(n,c,"button"),children:t}))};p.defaultProps={variant:(p.VARIANTS={DEFAULT:"--default",OUTLINE:"--outline"}).DEFAULT,type:"button",className:null};var x=p,g=(n(32),["href","variant","children","external","className"]),_=function(e){var t=e.href,n=e.variant,c=e.children,a=e.external,r=e.className,l=Object(f.a)(e,g),i=u()("link",r,n);return a?Object(O.jsx)("a",Object(v.a)(Object(v.a)({},l),{},{href:t,target:"_blank",rel:"noreferrer",className:i,children:c})):Object(O.jsx)(s.b,Object(v.a)(Object(v.a)({},l),{},{className:i,to:t,children:c}))};_.defaultProps={variant:(_.VARIANTS={DEFAULT:"--default",BUTTON:"--button",UNDERLINE:"--underline",SCALE:"--scale",LIGHT:"--light"}).DEFAULT,children:null,external:!1,href:null,className:null};var y=_,N=(n(38),function(e){var t=e.children,n=e.gap,r=e.reverse,l=e.className;if(!t)return null;var s=u()("columns",{"--reverse":r},l);return Object(O.jsx)("div",{className:s,style:{"--gap-value":n},children:c.Children.map(t,(function(e){return a.a.cloneElement(e,{className:u()("col",e.props.className)})}))})});N.defaultProps={children:null,gap:0,className:null,reverse:!1};var w=N,E=["children","tag"],C=function(e){var t=e.children,n=e.tag,c=Object(f.a)(e,E);return Object(O.jsx)(n,Object(v.a)(Object(v.a)({},c),{},{dangerouslySetInnerHTML:{__html:t}}))};C.defaultProps={children:null,tag:"div"};var S=C,A=(n(39),function(e){var t=e.color,n=e.className;return Object(O.jsx)("div",{className:u()("color-block",n),style:{backgroundColor:t}})});A.defaultProps={color:null,className:null};var T,I,k=A,R=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),l=Object(o.a)(r,2),s=l[0],i=l[1];return Object(c.useEffect)((function(){try{fetch("".concat("/sebastian-hincapie-portfolio","/data/content.json")).then((function(e){return e.json()})).then((function(e){a(e)})),fetch("".concat("/sebastian-hincapie-portfolio","/data/contact.json")).then((function(e){return e.json()})).then((function(e){i(e)}))}catch(e){console.error(e)}}),[]),{content:n,contact:s}},M=n(14),L=["title","titleId"];function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function V(e,t){var n=e.title,a=e.titleId,r=z(e,L);return c.createElement("svg",P({width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,T||(T=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.93934 0.93934C1.52513 0.353553 2.47487 0.353553 3.06066 0.93934L21.0607 18.9393C21.6464 19.5251 21.6464 20.4749 21.0607 21.0607C20.4749 21.6464 19.5251 21.6464 18.9393 21.0607L0.93934 3.06066C0.353553 2.47487 0.353553 1.52513 0.93934 0.93934Z"})),I||(I=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.0607 0.93934C20.4749 0.353553 19.5251 0.353553 18.9393 0.93934L0.939341 18.9393C0.353554 19.5251 0.353554 20.4749 0.939341 21.0607C1.52513 21.6464 2.47487 21.6464 3.06066 21.0607L21.0607 3.06066C21.6464 2.47487 21.6464 1.52513 21.0607 0.93934Z"})))}var H=c.forwardRef(V),U=(n.p,function(e){var t=e.open,n=e.renderLogo,c=e.handleMobileMenu,a=e.links,r=e.handleSuccessMessage,l=e.successMessages,s=u()("nav__menu--mobile__overlay",{"--open":t}),i=function(){return c(!1)};return Object(O.jsxs)("div",{className:s,children:[Object(O.jsxs)("div",{className:"nav__menu--mobile__overlay__header",children:[n(),Object(O.jsx)("button",{type:"button",onClick:i,children:Object(O.jsx)(H,{})})]}),Object(O.jsx)("div",{className:"nav__menu--mobile__overlay__links",children:a.map((function(e){var t=e.name,n=e.href,c=e.external,a=e.onClick,s=e.successMessage,o=u()("nav__menu__success",{visible:l[t]});return Object(O.jsxs)("div",{children:[Object(O.jsx)(y,{href:n,external:c,onClick:function(){return function(e,t){r(e),t?t((function(){return r(e)})):i()}(t,a)},children:t}),Object(O.jsx)("span",{className:o,children:s})]},t)}))})]})});U.defaultProps={open:!1,links:[],successMessages:{}};var B=U,D=(n(40),function(e){var t=e.links,n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],l=a[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),j=i[0],d=i[1],b=function(){return Object(O.jsx)(y,{variant:y.VARIANTS.BUTTON,href:"/",children:"Sebastian Hincapie"})},h=function(e){d(Object(v.a)(Object(v.a)({},j),{},Object(M.a)({},e,!0))),setTimeout((function(){d(Object(v.a)(Object(v.a)({},j),{},Object(M.a)({},e,!1)))}),3e3)};return Object(O.jsxs)("nav",{className:"nav",children:[b(),Object(O.jsx)("div",{className:"nav__menu",children:Object(O.jsx)("div",{className:"nav__menu__links",children:t.map((function(e){var t=e.name,n=e.href,c=e.external,a=e.onClick,r=e.successMessage,l=u()("nav__menu__success",{visible:j[t]});return Object(O.jsxs)("div",{children:[Object(O.jsx)(y,{variant:y.VARIANTS.BUTTON,href:n,external:c,onClick:function(){a&&a((function(){return h(t)}))},children:t}),Object(O.jsx)("span",{className:l,children:r})]},t)}))})}),Object(O.jsxs)("div",{className:"nav__menu--mobile",children:[Object(O.jsxs)("button",{type:"button",onClick:function(){return l(!0)},children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]}),Object(O.jsx)(B,{links:t,open:r,renderLogo:b,handleMobileMenu:l,handleSuccessMessage:h,successMessages:j})]})]})});D.defaultProps={links:[]};var F,G=D,J=(n(41),function(e){var t=e.text;return Object(O.jsx)("div",{className:"welcome",children:Object(O.jsx)(S,{tag:"h1",children:t})})}),Z=(n(42),function(e){var t=e.children;return Object(O.jsx)("div",{className:"page",children:Object(O.jsx)("div",{className:"page__container",children:t})})}),q=(n(43),function(e){var t=e.feature;return Object(O.jsxs)("div",{className:"feature",children:[Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+t.icon,alt:t.title}),Object(O.jsx)("h4",{children:t.title}),Object(O.jsx)("p",{children:t.description})]})}),Q=(n(44),function(e){var t=e.content,n=e.image;return Object(O.jsxs)("div",{className:"home-case",children:[Object(O.jsxs)("div",{className:"home-case__wrapper",children:[Object(O.jsxs)("div",{className:"home-case__wrapper__info",children:[Object(O.jsx)("span",{children:t.type}),Object(O.jsx)("h2",{children:t.name}),Object(O.jsx)("p",{children:t.slogan}),Object(O.jsx)(y,{href:"/case/".concat(t.slug),children:Object(O.jsx)(x,{children:" See use case "})})]}),Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+n.url,alt:n.alt})]}),Object(O.jsx)("div",{className:"home-case__features",children:t.features.map((function(e){return Object(O.jsx)(q,{feature:e},e.title)}))})]})}),Y=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function X(e,t){var n=e.title,a=e.titleId,r=W(e,Y);return c.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:26,height:25,viewBox:"0 0 26 25",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,F||(F=c.createElement("g",{fillRule:"nonzero"},c.createElement("g",null,c.createElement("path",{d:"M8.624 15.635H6.29v-2.093h2.37c1.968 0 2.1 2.093-.035 2.093zm7.084-2.788h3.163c-.122-1.787-2.861-2.06-3.163 0zM8.576 9.375H6.29v2.083h2.504c1.754 0 2.03-2.083-.217-2.083zm16.58-4.167v14.584c0 2.876-2.346 5.208-5.24 5.208H5.24C2.346 25 0 22.668 0 19.792V5.208C0 2.332 2.346 0 5.24 0h14.675c2.895 0 5.241 2.332 5.241 5.208zM14.674 8.333h5.241V7.292h-5.24v1.041zm-3.723 3.77c2-1.015 1.926-4.74-1.9-4.797H4.193V17.7H8.71c4.74 0 4.66-4.723 2.24-5.598zm9.944.626c-.287-1.836-1.601-3.073-3.755-3.073-2.195 0-3.514 1.396-3.514 4.112 0 2.74 1.433 3.94 3.58 3.94 2.149 0 3.257-1.182 3.565-2.083h-2.213c-.771.89-3.032.543-2.9-1.41h5.303c.01-.66-.012-1.134-.066-1.486z",transform:"translate(-779.000000, -724.000000) translate(779.000000, 724.000000)"})))))}var $,ee=c.forwardRef(X),te=(n.p,["title","titleId"]);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ae(e,t){var n=e.title,a=e.titleId,r=ce(e,te);return c.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:26,height:25,viewBox:"0 0 26 25",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,$||($=c.createElement("g",null,c.createElement("path",{d:"M12.578 0C5.634 0 0 5.6 0 12.5S5.634 25 12.578 25c6.93 0 12.578-5.6 12.578-12.5S19.508 0 12.578 0zm8.308 5.762c1.5 1.817 2.401 4.135 2.429 6.643-.355-.068-3.902-.786-7.476-.339-.082-.176-.15-.366-.232-.556-.219-.515-.464-1.044-.71-1.545 3.957-1.6 5.757-3.905 5.99-4.203zm-8.308-3.918c2.729 0 5.225 1.017 7.121 2.684-.19.271-1.814 2.427-5.634 3.85-1.76-3.213-3.71-5.843-4.01-6.25.804-.19 1.65-.284 2.523-.284zm-4.57 1.003c.286.38 2.196 3.023 3.984 6.169-5.02 1.328-9.455 1.301-9.932 1.301.696-3.308 2.947-6.06 5.948-7.47zm-6.18 9.667v-.326c.464.014 5.675.082 11.037-1.518.313.596.6 1.206.873 1.816-.137.041-.287.082-.423.122-5.539 1.776-8.486 6.63-8.731 7.037-1.705-1.885-2.756-4.393-2.756-7.131zm10.75 10.67c-2.483 0-4.775-.841-6.59-2.251.192-.393 2.375-4.57 8.432-6.67.027-.014.04-.014.068-.028 1.514 3.891 2.128 7.159 2.292 8.094-1.296.556-2.715.854-4.202.854zm5.99-1.831c-.11-.65-.683-3.769-2.088-7.606 3.37-.528 6.316.34 6.684.461-.463 2.97-2.182 5.532-4.597 7.145z",transform:"translate(-860.000000, -724.000000) translate(860.156250, 724.000000)"}))))}var re,le=c.forwardRef(ae),se=(n.p,["title","titleId"]);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function je(e,t){var n=e.title,a=e.titleId,r=oe(e,se);return c.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:26,height:25,viewBox:"0 0 26 25",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,re||(re=c.createElement("g",null,c.createElement("path",{d:"M12.578 0C9.162 0 8.734.014 7.392.075 6.053.135 5.14.347 4.34.656c-.827.32-1.529.747-2.228 1.442-.7.695-1.13 1.392-1.45 2.214-.312.795-.524 1.704-.585 3.034C.014 8.68 0 9.106 0 12.5c0 3.395.014 3.82.076 5.154.06 1.33.273 2.239.584 3.034.322.822.752 1.52 1.451 2.214.7.695 1.4 1.122 2.228 1.442.8.309 1.714.52 3.053.58 1.342.062 1.77.076 5.186.076s3.844-.014 5.186-.075c1.339-.06 2.253-.272 3.053-.581.827-.32 1.529-.747 2.228-1.442.7-.695 1.13-1.392 1.45-2.214.312-.795.524-1.704.586-3.034.06-1.334.075-1.76.075-5.154 0-3.395-.014-3.82-.075-5.154-.062-1.33-.274-2.239-.585-3.034-.322-.822-.752-1.52-1.45-2.214-.7-.695-1.402-1.122-2.229-1.442-.8-.309-1.714-.52-3.053-.58C16.422.013 15.994 0 12.578 0zm0 2.252c3.359 0 3.756.013 5.083.073 1.226.056 1.892.26 2.335.43.587.227 1.006.498 1.447.936.44.437.712.853.94 1.437.173.44.378 1.102.434 2.32.06 1.319.073 1.714.073 5.052 0 3.338-.013 3.733-.073 5.051-.056 1.219-.261 1.88-.434 2.321-.228.584-.5 1-.94 1.437-.44.438-.86.709-1.447.935-.443.172-1.109.375-2.335.43-1.326.061-1.724.074-5.083.074s-3.756-.013-5.083-.073c-1.226-.056-1.892-.26-2.335-.43-.587-.227-1.006-.498-1.446-.936-.44-.437-.713-.853-.941-1.437-.173-.44-.377-1.102-.433-2.32-.06-1.319-.074-1.714-.074-5.052 0-3.338.013-3.733.074-5.051.056-1.219.26-1.88.433-2.321.228-.584.5-1 .94-1.437.44-.438.86-.709 1.447-.935.443-.172 1.11-.375 2.335-.43 1.327-.061 1.725-.074 5.083-.074z",transform:"translate(-941.000000, -724.000000) translate(941.312500, 724.000000)"}),c.createElement("path",{d:"M12.578 16.667c-2.315 0-4.193-1.866-4.193-4.167 0-2.301 1.878-4.167 4.193-4.167 2.316 0 4.193 1.866 4.193 4.167 0 2.301-1.877 4.167-4.193 4.167zm0-10.586c-3.567 0-6.459 2.874-6.459 6.419 0 3.545 2.892 6.419 6.46 6.419 3.566 0 6.458-2.874 6.458-6.419 0-3.545-2.892-6.419-6.459-6.419zM20.802 5.827c0 .829-.676 1.5-1.51 1.5-.833 0-1.509-.671-1.509-1.5 0-.828.676-1.5 1.51-1.5.833 0 1.509.672 1.509 1.5",transform:"translate(-941.000000, -724.000000) translate(941.312500, 724.000000)"}))))}var ue,de=c.forwardRef(je),be=(n.p,["title","titleId"]);function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function fe(e,t){var n=e.title,a=e.titleId,r=ve(e,be);return c.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",width:26,height:25,viewBox:"0 0 26 25",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,ue||(ue=c.createElement("g",{fillRule:"nonzero"},c.createElement("g",null,c.createElement("path",{d:"M19.915 0H5.241C2.347 0 0 2.332 0 5.208v14.584C0 22.668 2.347 25 5.24 25h14.675c2.895 0 5.241-2.332 5.241-5.208V5.208C25.156 2.332 22.81 0 19.916 0zM8.385 19.792H5.241V8.333h3.144v11.459zM6.813 7.012c-1.012 0-1.834-.822-1.834-1.837 0-1.015.822-1.837 1.834-1.837 1.013 0 1.834.822 1.834 1.837 0 1.015-.82 1.838-1.834 1.838zm14.15 12.78H17.82v-5.838c0-3.508-4.193-3.243-4.193 0v5.838h-3.144V8.333h3.144v1.839c1.464-2.694 7.338-2.893 7.338 2.579v7.04z",transform:"translate(-1022.000000, -724.000000) translate(1022.468750, 724.000000)"})))))}var Oe=c.forwardRef(fe),me=(n.p,n(45),function(e){var t=e.className,n=R().contact;return Object(O.jsxs)("div",{className:u()("social",t),children:[Object(O.jsx)(y,{variant:y.VARIANTS.SCALE,external:!0,href:n.behance,children:Object(O.jsx)(ee,{})}),Object(O.jsx)(y,{variant:y.VARIANTS.SCALE,external:!0,href:n.dribble,children:Object(O.jsx)(le,{})}),Object(O.jsx)(y,{variant:y.VARIANTS.SCALE,external:!0,href:n.instagram,children:Object(O.jsx)(de,{})}),Object(O.jsx)(y,{variant:y.VARIANTS.SCALE,external:!0,href:n.linkedin,target:"_blank",rel:"noopener",children:Object(O.jsx)(Oe,{})})]})});me.defaultProps={className:null};var pe=me,xe=(n(46),function(){var e=R().contact;return Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsx)("span",{children:"Let\u2019s Connect"}),Object(O.jsx)("p",{children:"Feel free to reach out for collaborations or just a friendly hello \ud83d\ude04"}),Object(O.jsxs)("div",{className:"footer__links",children:[Object(O.jsx)(y,{variant:y.VARIANTS.LIGHT,href:"mailto:".concat(e.email,"?subject=Let\u2019s%20Connect"),external:!0,children:e.email}),Object(O.jsx)(y,{variant:y.VARIANTS.LIGHT,href:"tel:".concat(e.phone),external:!0,children:e.phone_display})]}),Object(O.jsx)(pe,{className:"footer__social"})]})}),ge=function(e){var t=e.title,n=e.data,c=e.className;return Object(O.jsxs)("div",{className:c,children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("div",{className:"about__section",children:n.map((function(e){return Object(O.jsxs)("div",{className:"about__section__item",children:[Object(O.jsx)(y,{external:!0,href:e.link,variant:y.VARIANTS.SCALE,children:Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+e.image,alt:e.name})}),e.description&&Object(O.jsx)("p",{children:e.description})]},e.name)}))})]})};ge.defaultProps={title:null,data:[],className:null};var _e=ge,ye=(n(47),function(){var e,t,n,a,r,l=Object(c.useState)(null),s=Object(o.a)(l,2),i=s[0],j=s[1],d=R(),b=d.content.about,v=void 0===b?{}:b,f=d.contact;return Object(O.jsxs)("div",{className:"about",children:[null===(e=v.paragraphs)||void 0===e?void 0:e.map((function(e,t){var n=e.title,c=e.text,a=e.image,r=e.social;return Object(O.jsxs)(w,{className:"about__column",gap:"8%",reverse:Boolean(t%2),children:[a?Object(O.jsx)("div",{className:"about__column__img",children:Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+a.url,alt:a.alt})}):Object(O.jsx)(k,{}),Object(O.jsxs)("div",{children:[n&&Object(O.jsx)("h1",{children:n}),c&&Object(O.jsx)(S,{children:c}),r&&Object(O.jsxs)(w,{className:"about__social",gap:10,reverse:!0,children:[Object(O.jsx)("div",{className:"about__social__cv",children:Object(O.jsx)(y,{href:"/static/about/cv.pdf",download:"SebastianHincapie HV English.pdf",external:!0,variant:y.VARIANTS.BUTTON,children:"Download CV"})}),Object(O.jsx)(pe,{reverse:!0})]})]})]},c)})),Object(O.jsx)(_e,{title:null===(t=v.clients)||void 0===t?void 0:t.title,data:null===(n=v.clients)||void 0===n?void 0:n.data}),Object(O.jsx)(_e,{title:null===(a=v.education)||void 0===a?void 0:a.title,data:null===(r=v.education)||void 0===r?void 0:r.data,className:"education"}),Object(O.jsxs)("div",{className:"about__contact",children:[Object(O.jsx)(x,{variant:x.VARIANTS.OUTLINE,onClick:function(){h.copyToClipboard(f.email),j(!0),setTimeout((function(){j(!1)}),3e3)},children:"Get in touch"}),Object(O.jsx)("p",{className:u()({visible:i}),children:"My email address has been copied!"})]})]})}),Ne=(n(48),function(e){var t=e.name,n=e.logo,c=e.image,a=e.slogan;return Object(O.jsx)("div",{className:"case-hero",children:Object(O.jsxs)("div",{className:"case-hero__wrapper",children:[Object(O.jsxs)("div",{className:"case-hero__wrapper__left",children:[Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+n,alt:"".concat(t," logo")}),Object(O.jsx)("p",{children:a})]}),c&&Object(O.jsx)("img",{src:"/sebastian-hincapie-portfolio"+c,alt:a})]})})});Ne.defaultProps={image:null};var we=Ne,Ee=(n(49),function(e){var t,n=e.content;return Object(O.jsxs)("div",{className:"case-overview",children:[Object(O.jsxs)("div",{className:"case-overview__left",children:[Object(O.jsx)("h2",{children:"Overview:"}),Object(O.jsx)(S,{tag:"p",children:n.overview})]}),Object(O.jsxs)("div",{className:"case-overview__right",children:[Object(O.jsx)("div",{className:"case-overview__right__item",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Year: "}),n.year]})}),Object(O.jsx)("div",{className:"case-overview__right__item",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Project Role: "}),n.role]})}),Object(O.jsx)("div",{className:"case-overview__right__item",children:Object(O.jsx)(S,{tag:"p",children:"<b>Collaborators: </b>".concat(n.collaborators)})}),Object(O.jsx)("div",{className:"case-overview__right__item",children:Object(O.jsx)("p",{children:Object(O.jsxs)("b",{children:["Agency: ",n.agency]})})}),Object(O.jsxs)("div",{className:"case-overview__right__stack",children:[Object(O.jsx)("p",{children:n.type}),Object(O.jsx)("span",{children:n.stack})]}),Object(O.jsxs)("div",{className:"case-overview__right__apps",children:[n.website&&Object(O.jsx)(y,{variant:y.VARIANTS.UNDERLINE,href:n.website,external:!0,children:"See site live"}),n.app&&Object(O.jsx)(y,{variant:y.VARIANTS.UNDERLINE,href:null===(t=n.app)||void 0===t?void 0:t.ios,external:!0,children:"Download app"})]})]})]})}),Ce=n(24),Se=(n(50),function(e){var t,n,c=e.section,a=Object(Ce.useMediaQuery)({query:"(max-width: 768px)"}),r={boxShadow:c.shadow};return Object(O.jsxs)("div",{className:"case-section",children:[Object(O.jsxs)("div",{className:"case-section__content",children:[Object(O.jsx)("h2",{children:c.title}),Object(O.jsx)(S,{tag:"p",children:c.content})]}),(null===(t=c.images)||void 0===t?void 0:t.length)>0&&Object(O.jsx)("div",{style:{"--padding-value":"".concat(c.padding,"px")},className:u()("case-section__images",{"--padding":c.padding}),children:null===(n=c.images)||void 0===n?void 0:n.map((function(e){return Object(O.jsxs)("div",{className:"case-section__images__wrapper",children:[Object(O.jsx)("img",{style:r,height:a?e.mobile_height:e.height,src:"/sebastian-hincapie-portfolio"+(a&&e.url_mobile?e.url_mobile:e.url),alt:e.label||c.title}),(e.label||e.sub_label)&&Object(O.jsxs)("div",{className:"case-section__images__wrapper__label",children:[e.label&&Object(O.jsx)("span",{children:e.label}),e.sub_label&&Object(O.jsx)("p",{children:e.sub_label})]})]},e.url)}))})]})}),Ae=(n(51),function(e){var t=e.name,n=e.year,c=e.trademark;return Object(O.jsxs)("div",{className:"case-rights",children:[Object(O.jsxs)("span",{children:["\xa9 ",n," ",t]}),Object(O.jsx)("p",{children:c})]})}),Te=function(){var e=function(e,t){var n;return null===(n=t.cases)||void 0===n?void 0:n.find((function(t){return t.slug===e}))}(function(){var e=Object(i.f)().pathname.split("/");return e[e.length-1]}(),R().content);return e?Object(O.jsxs)("div",{className:"case",children:[Object(O.jsx)(we,{name:e.name,logo:e.logo,slogan:e.slogan,image:e.cover_img}),Object(O.jsxs)("div",{className:"case__content",children:[Object(O.jsx)(Ee,{content:e}),e.sections.map((function(e){return Object(O.jsx)(Se,{section:e},e.title)})),Object(O.jsx)(Ae,{name:e.name,year:e.year,trademark:e.trademark})]})]}):null},Ie=(n(52),function(){var e,t=R().content;return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(J,{text:t.welcome}),null===(e=t.cases)||void 0===e?void 0:e.map((function(e){return Object(O.jsx)(Q,{content:e,image:e.images.home},e.id)}))]})}),ke=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},Re="/about",Me=function(e){return[{name:"Art",href:e.behance,external:!0},{name:"About",href:Re},{name:"Contact",successMessage:"My email address has been copied!",href:"#",onClick:function(t){h.copyToClipboard(e.email),t()}}]},Le=function(){var e=R().contact;return Object(O.jsxs)(s.a,{children:[Object(O.jsx)(ke,{}),Object(O.jsx)(G,{links:Me(e)}),Object(O.jsx)(Z,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:Re,children:Object(O.jsx)(ye,{})}),Object(O.jsx)(i.a,{path:"/case/:caseId",children:Object(O.jsx)(Te,{})}),Object(O.jsx)(i.a,{path:"/",children:Object(O.jsx)(Ie,{})})]})}),Object(O.jsx)(xe,{})]})};var Pe=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Le,{})})};n(53);l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Pe,{})}),document.getElementById("root"))}]),[[54,1,2]]]);
//# sourceMappingURL=main.417913af.chunk.js.map