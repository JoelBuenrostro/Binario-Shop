(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,a,t){e.exports=t(37)},29:function(e,a,t){},30:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),c=(t(29),t(30),t(39)),i=t(42),s=t(43),m=function(){return r.a.createElement("header",null,r.a.createElement(i.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},r.a.createElement(c.a,null,r.a.createElement(i.a.Brand,{href:"/"},"Binario"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"ml-auto"},r.a.createElement(s.a.Link,{href:"/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"})," Carro"),r.a.createElement(s.a.Link,{href:"/login"},r.a.createElement("i",{className:"fas fa-user"})," Inicio de sesion"))))))},u=t(40),d=t(41),p=function(){return r.a.createElement("footer",null,r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{className:"text-center py-3"},"Derechos reservados \xa9 Binario Shop"))))},f=t(44),g=function(e){var a=e.value,t=e.text,n=e.color;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,t&&t))};g.defaultProps={color:"#f8e825"};var E=g,h=function(e){var a=e.product;return r.a.createElement(f.a,{className:"my-3 p-3 rounded"},r.a.createElement("a",{href:"/product/".concat(a._id)},r.a.createElement(f.a.Img,{src:a.image,variant:"top"})),r.a.createElement(f.a.Body,null,r.a.createElement("a",{href:"/product/".concat(a._id)},r.a.createElement(f.a.Title,{as:"div"},r.a.createElement("strong",null,a.name))),r.a.createElement(f.a.Text,{as:"div"},r.a.createElement(E,{value:a.rating,text:"".concat(a.numReviews," reviews")})),r.a.createElement(f.a.Text,{as:"h3"},"$",a.price)))},v=[{_id:"1",name:"Audifonos Airpods inalambricos Bluetooth",image:"/images/airpods.jpg",description:"La tecnolog\xeda Bluetooth le permite conectarlo con dispositivos compatibles de forma inal\xe1mbrica El audio AAC de alta calidad ofrece una experiencia auditiva inmersiva El micr\xf3fono incorporado le permite recibir llamadas mientras trabaja",brand:"Apple",category:"Electronics",price:1792.42,countInStock:3,rating:4.5,numReviews:4},{_id:"2",name:"iPhone 11 Pro Memoria 256GB",image:"/images/phone.jpg",description:"Presentamos el iPhone 11 Pro. Un sistema transformador de triple c\xe1mara que agrega toneladas de capacidad sin complejidad. Un salto sin precedentes en la duraci\xf3n de la bater\xeda",brand:"Apple",category:"Electronics",price:11950.6,countInStock:10,rating:4,numReviews:4},{_id:"3",name:"Camara Cannon EOS 80D DSLR",image:"/images/camera.jpg",description:"Caracterizada por especificaciones de imagen vers\xe1tiles, la Canon EOS 80D se aclara a\xfan m\xe1s utilizando un par de sistemas de enfoque robustos y un dise\xf1o intuitivo.",brand:"Cannon",category:"Electronics",price:918523.54,countInStock:5,rating:3,numReviews:3},{_id:"4",name:"Sony Playstation 4 Pro Version Blanca",image:"/images/playstation.jpg",description:"El mejor centro de entretenimiento en el hogar comienza con PlayStation. Ya sea que te gusten los juegos, las pel\xedculas HD, la televisi\xf3n, la m\xfasica",brand:"Sony",category:"Electronics",price:7967,countInStock:10,rating:5,numReviews:3},{_id:"5",name:"Mouse Gaming Logitech G-Series",image:"/images/mouse.jpg",description:"Controle mejor sus juegos con este mouse para juegos Logitech LIGHTSYNC. Los seis botones programables permiten la personalizaci\xf3n para una experiencia de juego fluida",brand:"Logitech",category:"Electronics",price:995.7,countInStock:7,rating:3.5,numReviews:2},{_id:"6",name:"Amazon Echo Dot 3rd Generacion",image:"/images/alexa.jpg",description:"Conoce a Echo Dot: nuestro altavoz inteligente m\xe1s popular con un dise\xf1o de tela. Es nuestro altavoz inteligente m\xe1s compacto que encaja perfectamente en un espacio reducido",brand:"Amazon",category:"Electronics",price:597.34,countInStock:0,rating:4,numReviews:4}],y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Ultimos Productos"),r.a.createElement(u.a,null,v.map((function(e){return r.a.createElement(d.a,{key:e._id,sm:12,md:6,lg:4,xl:3},r.a.createElement(h,{product:e}))}))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("main",{className:"py-3"},r.a.createElement(c.a,null,r.a.createElement(y,null))),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a4a2aa22.chunk.js.map