(window["webpackJsonpubuntu-portfolio-v2"]=window["webpackJsonpubuntu-portfolio-v2"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(12),r=t.n(l),m=(t(20),t(21),t(3)),i=t(4);t(22);function o(){var e=new Date,a={year:e.getFullYear(),monthName:["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],month:String(e.getMonth()+1).padStart(2,"0"),date:String(e.getDate()).padStart(2,"0"),day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],hour:String(e.getHours()).padStart(2,"0"),minute:String(e.getMinutes()).padStart(2,"0")},t="".concat(a.hour,":").concat(a.minute),n="".concat(a.day,", ").concat(a.monthName," ").concat(a.date),l="".concat(a.year,"-").concat(a.month,"-").concat(a.date);return c.a.createElement("div",{className:"LockScreenClock"},c.a.createElement("time",{className:"LockScreenTime",dateTime:"T".concat(t)},t),c.a.createElement("br",null),c.a.createElement("time",{className:"LockScreenDate",dateTime:l},n))}t(23);function s(e){return c.a.createElement("div",{className:"LockScreen",onClick:function(){return e.history.replace("/desktop/About")}},c.a.createElement(o,null))}t(24);function u(){return c.a.createElement("div",{className:"topBar"},c.a.createElement("div",{className:"leftBarContent"},c.a.createElement("a",{className:"hamburgerIcon"},c.a.createElement("img",{src:"/images/icons/system/open-menu-symbolic.svg"})),c.a.createElement("span",null,"Prasham's Portfolio")),c.a.createElement("div",{className:"centeredBarContent"},"Sep ",(new Date).getDate()," ","".concat(String((new Date).getHours()).padStart(2,"0"),":").concat(String((new Date).getMinutes()).padStart(2,"0"))),c.a.createElement("div",{className:"rightBarContent"},c.a.createElement("a",{href:"https://linkedin.com/in/prashesh09/",target:"_blank"},c.a.createElement("i",{className:"fab fa-linkedin-in"})),c.a.createElement("a",{href:"https://github.com/p-racoon",target:"_blank"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{href:"https://medium.com/@prasham9.ash",target:"_blank"},c.a.createElement("i",{className:"fab fa-medium-m"})),c.a.createElement("a",{href:"https://twitter.com/Prasham09",target:"_blank"},c.a.createElement("i",{className:"fab fa-twitter"})),c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:"/images/icons/system/system-shutdown-symbolic.svg"}))))}t(30),t(31);function E(e){return c.a.createElement(m.c,{className:"appIconContainer",to:"/desktop/".concat(e.iconDetail.name),activeClassName:"selectedNav"},c.a.createElement("div",{className:" tooltip"},c.a.createElement("img",{className:"appIcon",src:e.iconDetail.src,alt:e.iconDetail.altText}),c.a.createElement("span",{className:"right"},e.iconDetail.altText)))}function d(e){return c.a.createElement("div",{className:"sideBar"},[{name:"About",altText:"About",src:"/images/icons/app/about.svg"},{name:"ContactMe",altText:"Contacts & Social Links",src:"/images/icons/app/mail-app.png"},{name:"TechnicalSkills",altText:"Technical Skills",src:"/images/icons/app/tools.png"},{name:"Help",altText:"Help",src:"/images/icons/app/help.png"}].map(function(e){return c.a.createElement(E,{iconDetail:e})}),c.a.createElement("div",{className:"lastAppIcon"},c.a.createElement(E,{iconDetail:{name:"Help",altText:"MyProjects",src:"/images/icons/app/view-app-grid-symbolic.svg"}})))}t(32);var p=t(9);t(33),t(34);function h(e){return c.a.createElement("div",{className:"WindowControls"},c.a.createElement("div",{className:"WindowControlButton",onClick:e.handles.handleOnMinimize},c.a.createElement("img",{className:"WindowControlIcon",src:"/images/icons/system/window-minimize-symbolic.svg",alt:"minimize ".concat(e.windowName)})),c.a.createElement("div",{className:"WindowControlButton"},c.a.createElement(m.b,{to:"/desktop"},c.a.createElement("img",{className:"WindowControlIcon",src:"/images/icons/system/window-close-symbolic.svg",alt:"close ".concat(e.windowName)}))))}function g(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),l=t[0],r=t[1],m=Object(n.useState)(!1),i=Object(p.a)(m,2),o=i[0],s=i[1];Object(n.useEffect)(function(){r(!1)},[e.history.location]);return c.a.createElement("div",{className:"appWindow ".concat(l?"appWindowHidden":null)},c.a.createElement("div",{className:"mainWindow"},c.a.createElement("div",{className:"windowTopBar windowTopBarRight"},c.a.createElement("div",null),c.a.createElement("div",null,e.content.name),c.a.createElement(h,{handles:{handleOnMinimize:function(e){r(!l)},handleOnMaximize:function(e){s(function(){return!o})},handleOnRestore:function(e){}}})),c.a.createElement("div",{className:"mainWindow"},e.content.content)))}t(35);function f(){return c.a.createElement("div",{className:"AboutBody"},c.a.createElement("div",{className:"ProfilePic"},c.a.createElement("img",{className:"",src:"/images/prasham.jpeg",alt:"Prasham's Face"})),c.a.createElement("p",null,"Hi ",c.a.createElement("br",null),"I am Prasham Ashesh",c.a.createElement("br",null),c.a.createElement("br",null),"Currently undergoing"," ",c.a.createElement("a",{href:"https://www.pesto.tech/",target:"_blank"},"Pesto Tech's Career Accelerator Program",c.a.createElement("br",null)),c.a.createElement("br",null),"Aim to become a Full Stack Product Engineer",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{href:"/desktop/ContactMe"},"Contact Me"),c.a.createElement("br",null),"View my full resume"," ",c.a.createElement("a",{href:"http://bit.ly/PrashamCv",target:"_blank"},"Here")))}t(36);function b(){return c.a.createElement("div",{className:"WebExpBody"},c.a.createElement("div",{className:"ExpCard"},c.a.createElement("div",{className:"ExpImage"},c.a.createElement("img",{src:"/logo192.png",alt:"React Logo"})),c.a.createElement("div",{className:"ExpContent"},c.a.createElement("p",null,"Proficient with React, Have worked on React Hooks. Helped create an e-commerce Website, at Infosys.",c.a.createElement("br",null),"Experience: 8 months"))),c.a.createElement("div",{className:"ExpCard"},c.a.createElement("div",{className:"ExpImage"},c.a.createElement("img",{src:"/images/icons/php.png",alt:"React Logo"})),c.a.createElement("div",{className:"ExpContent"},c.a.createElement("p",null,'Used PHP to create Shopping cart at Infosys for Client "AWS". Used it to Develop a website for a Freelancing Client.',c.a.createElement("br",null),"Experience: 5 months"))))}t(37);function v(){return c.a.createElement("div",{className:"ContactBody"},c.a.createElement("h4",null,"Mail Id ",c.a.createElement("br",null),c.a.createElement("a",{href:"mailto:prasham9.ash@gmail.com",target:"_blank"},"prasham9.ash@gmail.com")),c.a.createElement("h4",null,"Linkedin:"," ",c.a.createElement("a",{href:"https://linkedin.com/in/prashesh09/",target:"_blank"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))),c.a.createElement("h4",null,"Github:"," ",c.a.createElement("a",{href:"https://github.com/p-racoon",target:"_blank"},c.a.createElement("i",{className:"fab fa-github"}))),c.a.createElement("h4",null,"Medium:"," ",c.a.createElement("a",{href:"https://medium.com/@prasham9.ash",target:"_blank"},c.a.createElement("i",{className:"fab fa-medium-m"}))),c.a.createElement("h4",null,"Twitter :"," ",c.a.createElement("a",{href:"https://twitter.com/Prasham09",target:"_blank"},c.a.createElement("i",{className:"fab fa-twitter"}))))}t(38);function w(){return c.a.createElement("div",{className:"HelpBody"},"This project is being created as Personal Portfolio to showcase my skills as a Web Developer.",c.a.createElement("br",null),c.a.createElement("br",null),"It is being developed as a part of Pesto Tech's 1st month's curriculum.",c.a.createElement("br",null),c.a.createElement("br",null),"Hope to learn new things on the way. :)",c.a.createElement("br",null),c.a.createElement("br",null),"Use the Left Sidebar to navigate through different pages.")}function N(e){var a=e.activeWindow||"Help",t={About:{name:"About Me",content:c.a.createElement(f,null)},ContactMe:{name:"Contact Me",content:c.a.createElement(v,null)},TechnicalSkills:{name:"Technical Skills",content:c.a.createElement(b,null)},Help:{name:"Help",content:c.a.createElement(w,null)}}[a];return c.a.createElement("div",null,c.a.createElement(g,Object.assign({},e,{content:t})))}function k(e){return c.a.createElement("div",{className:"fullDesktop"},c.a.createElement(u,null),c.a.createElement("div",{className:"mainDesktop"},c.a.createElement(d,null),e.match.params.activeWindow?c.a.createElement(N,Object.assign({},e,{activeWindow:e.match.params.activeWindow})):null))}var y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:s}),"l",c.a.createElement(i.a,{path:"/desktop/:activeWindow",render:function(e){return c.a.createElement(k,e)}}),c.a.createElement(i.a,{path:"/desktop",component:k}))))};r.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.1615af4b.chunk.js.map