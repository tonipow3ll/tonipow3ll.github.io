(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{79:function(e,t,s){},80:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),r=s(25),a=s.n(r),n=(s(79),s(10)),l=s(14),o=s(15),j=s(16),h=s(43),b=s(12),d=s(48),p=s(44),m=s(74),u=(s(80),s(70)),x=s(61),O=s(9),f=s.p+"static/media/TPResume.82daf002.pdf",g=s(2);var w=function(){return Object(g.jsx)("footer",{className:"mt-5",children:Object(g.jsx)(d.a,{fluid:!0,children:Object(g.jsxs)(u.a,{className:"border-top justify-content-between p-3",children:[Object(g.jsxs)(x.a,{className:"p-0",md:3,sm:12,children:[Object(g.jsxs)("a",{className:"footer-link",href:f,target:"_blank",rel:"noopener noreferrer",children:[" ",Object(g.jsx)(O.i,{size:28})," "]}),Object(g.jsxs)("a",{className:"footer-link",href:"mailto:tonipow3ll@gmail.com",rel:"noopener noreferrer",children:[Object(g.jsx)(O.g,{size:28}),"  "]}),Object(g.jsxs)("a",{className:"footer-link",href:"https://github.com/tonipow3ll",target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)(O.j,{size:28}),"  "]}),Object(g.jsxs)("a",{className:"footer-link",href:"https://linkedin.com/in/tonipowell13",target:"_blank",rel:"noopener noreferrer",children:[Object(g.jsx)(O.n,{size:28}),"  "]})]}),Object(g.jsx)(x.a,{className:"p-0 d-flex justify-content-end",md:3,children:"Made with \ud83d\udda4"})]})})})},k=s(93);var y=function(e){return Object(g.jsx)(k.a,{className:"bg-transparent jumbotron-fluid p-0 bg-img ",children:Object(g.jsxs)(d.a,{className:"bg-photo",children:[Object(g.jsx)(u.a,{className:"justify-content-center py-5",children:Object(g.jsxs)(x.a,{md:8,sm:12,children:[e.title&&Object(g.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(g.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(g.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})}),Object(g.jsx)("div",{className:"arrow"}),Object(g.jsx)("div",{className:"arrow bounce",children:Object(g.jsx)(O.a,{className:"arrow",size:56})})]})})},v=s(28),N=s(18),T=s(95),S=s(94),A=s(71);var I=function(e){var t=Object(i.useState)(!1),s=Object(N.a)(t,2),c=s[0],r=s[1],a=Object(A.useSpring)({opacity:1,from:{opacity:0}});return Object(g.jsxs)(T.a,{className:"col-sm-3 d-inline-block t-card",id:"projects",style:a,children:[Object(g.jsx)("a",{href:e.item.link,target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)(T.a.Img,{className:"py-3",src:e.item.imgSrc})}),Object(g.jsx)(T.a.Body,{children:Object(g.jsxs)("button",{className:"btn btn-dark mt-2",onClick:function(){return r(!0)},children:[e.item.title," ",Object(g.jsx)(O.h,{size:14})]})}),Object(g.jsxs)(S.a,{show:c,onHide:function(){return r(!1)},children:[Object(g.jsx)(S.a.Header,{closeButton:!0,children:Object(g.jsx)(S.a.Title,{children:e.item.title})}),Object(g.jsxs)(S.a.Body,{children:[Object(g.jsx)("p",{children:e.item.subTitle}),Object(g.jsx)("a",{href:e.item.link,target:"_blank",rel:"noopener noreferrer",children:"View The Deployed Application"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:e.item.github,target:"_blank",rel:"noopener noreferrer",children:"View Code"})]}),Object(g.jsx)(S.a.Footer,{children:Object(g.jsx)("p",{children:"Made with \ud83d\udda4 by TP"})})]})]})},C=s.p+"static/media/StretchNStrengthen.e7c1b48b.png",P=s.p+"static/media/TechBlog.85662120.png",B=s.p+"static/media/WeatherAppLite.29b14d7b.png",M=s.p+"static/media/EasyRecipeazy.4e651172.png",H=s.p+"static/media/Weather-App.ad5a6952.png",W=s.p+"static/media/Pupster3.5906ca66.png",z=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).handleCardClick=function(e,t){var s=Object(v.a)(i.state.items);s[e].selected=!s[e].selected,s.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:s})},i.makeItems=function(e){return e.map((function(e){return Object(g.jsx)(I,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"Weather Dashboard",subTitle:"A simple weather application, users can search for a city, and see previously searched cities. Current day forecast as well as 5 day forecast will populate. Made with the Open Weather Map API",imgSrc:H,link:"https://www.tonipow3ll.com/Weather-App/",github:"https://github.com/tonipow3ll/Weather-App",selected:!1},{id:1,title:"Easy Recipeazy",subTitle:"A recipe randomizer app. Users can select ingredients and see recipes populated with those specific ingredients. ",imgSrc:M,link:"https://tonipow3ll.github.io/drinks-and-dinner/",github:"https://github.com/tonipow3ll/drinks-and-dinner",selected:!1},{id:2,title:"Bookish-Happiness",subTitle:'A simple "blog" application. This was made mostly for fun - and to experiment with Passport, as well as MongoDB/Mongoose, and Handlebars.',imgSrc:P,link:"http://bookish-happiness.herokuapp.com",github:"https://github.com/tonipow3ll/bookish-happiness",selected:!1},{id:3,title:"Pupster",subTitle:"A simple application that allows users to search for different dog photos based on breed, or randomly. ",imgSrc:W,link:"https://www.tonipow3ll.com/pupster/",github:"https://github.com/tonipow3ll/pupster",selected:!1},{id:4,title:"Weather App (Lite)",subTitle:"A simplified version of the Weather Dashboard - with this application users can load the page, and see weather data based on their current location (if location services are turned on / accepted), or enter in a city and see current weather data for that city.",imgSrc:B,link:"https://tonipow3ll.github.io/Weather-App-Lite/",github:"https://github.com/tonipow3ll/Weather-App-Lite",selected:!1},{id:5,title:"Stretch n Strengthen",subTitle:"An application that allows users to view different exercises based on body parts, as well as create an account and save specific routines to their profile.",imgSrc:C,link:"http://stretch-n-strengthen.herokuapp.com",github:"https://github.com/crrmarchese/stretch-n-strengthen",selected:!1}]},i}return Object(l.a)(s,[{key:"render",value:function(){return Object(g.jsx)(k.a,{className:"bg-transparent jumbotron-fluid p-0 text-center",children:Object(g.jsxs)(d.a,{className:"projects text-center",fluid:!0,children:[Object(g.jsx)("h1",{className:"projects",children:"Projects"}),Object(g.jsx)(u.a,{className:"justify-content-around pr-5 mr-5",children:this.makeItems(this.state.items)})]})})}}]),s}(c.a.Component);var D=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(g.jsx)(z,{})]})},F=s.p+"static/media/headshot.4acc0ffc.JPG",L=s.p+"static/media/Abel.c70a08a6.jpg",_=s.p+"static/media/Boston.bcdeb949.jpg";var E=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)(k.a,{className:"bg-transparent jumbotron-fluid",children:[Object(g.jsx)(d.a,{children:Object(g.jsxs)(u.a,{className:"justify-content-center",children:[Object(g.jsxs)(x.a,{lg:8,children:[Object(g.jsx)("h3",{id:"about",children:"About Me"}),Object(g.jsx)("p",{children:"My name is Toni. I am a full stack developer from Weare, NH. "}),Object(g.jsx)("p",{children:"I am an adventurer, explorer, tinker-er. I enjoy creating code (of course), as well as sometimes working on small engine mechanical projects. I also enjoy hiking with my dogs and husband, and exploring NH on my four wheeler or snowmobile. "}),Object(g.jsx)("p",{children:"I am currently attending the University of New Hampshire's 24 week Coding Bootcamp, and I am hoping to land a new position as a Junior Software Engineer, or Junior Developer by September 2021. "}),Object(g.jsx)("p",{children:"I completed my undergraduate studies in 2016, and earned my Bachelors of Fine Arts (Photography). I enjoy programming because it lets me scratch my 'creative itch', and just being able to make cool stuff on the web is.. well.. cool! "}),Object(g.jsx)("p",{children:"Feel free to check out my GitHub, for the most comprehensive list of projects that I have created, am working on creating, or have contributed to. Alternatively - you can see a few of my featured projects in my project section."}),Object(g.jsx)("p",{children:" I always love to hear from other developers, feel free to shoot me a message and start a conversation! I would love to chat!"}),Object(g.jsx)("p",{children:"Best,"}),Object(g.jsx)("h3",{children:"Toni Powell"}),Object(g.jsxs)("p",{children:["Developer, Discoverer, Dogmom",Object(g.jsx)("br",{}),"Weare, NH",Object(g.jsx)("br",{}),Object(g.jsx)("a",{className:"footer-link projects",href:"mailto:tonipow3ll@gmail.com",children:"tonipow3ll@gmail.com "})]})]}),Object(g.jsxs)(x.a,{lg:2,className:"py-5",children:[Object(g.jsx)("img",{className:"headshot py-3",src:F}),Object(g.jsx)("img",{className:"headshot py-3",src:L}),Object(g.jsx)("img",{className:"headshot py-3",src:_})]})]})}),Object(g.jsx)("div",{id:"border"})]}),Object(g.jsx)(d.a,{fluid:!0,children:Object(g.jsxs)(u.a,{className:"justify-content-center text-center",children:[Object(g.jsxs)(x.a,{children:[Object(g.jsx)("h1",{children:"Skills"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.o,{}),"Node.js"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.f,{}),"MySql"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.p,{}),"NoSql(Mongo)"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.l,{}),"Javascript"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.e,{}),"CSS"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.k,{})," HTML5"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.m,{}),"Passport"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.f,{}),"Sequelize"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.d,{}),"Mongoose"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.r,{}),"Express"]})]})]}),Object(g.jsxs)(x.a,{children:[Object(g.jsx)("h1",{children:"Frameworks"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)(O.q,{}),"React"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.b,{}),"Bootstrap"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.c,{}),"Bulma"]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(O.c,{}),"Materialize"]})]})]})]})})]})},J=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).state={title:"Toni Powell",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"}],home:{title:"Toni Powell",subTitle:"Full Stack Developer",text:"Checkout my projects below"},about:{title:"About Me"}},i}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)(h.a,{children:Object(g.jsxs)(d.a,{className:"p-0",fluid:!0,children:[Object(g.jsxs)(p.a,{className:"border-bottom text-center",bg:"transparent",expand:"lg",children:[Object(g.jsx)(p.a.Brand,{children:Object(g.jsx)(h.b,{to:"/",id:"brand",children:"Toni Powell"})}),Object(g.jsx)(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(g.jsx)(p.a.Collapse,{id:"navbar-toggle",children:Object(g.jsxs)(m.a,{className:"ml-auto",children:[Object(g.jsx)(h.b,{className:"nav-link",to:"/",children:"Home"}),Object(g.jsx)(h.b,{className:"nav-link",to:"/about",children:"About"}),Object(g.jsx)("a",{className:"nav-link",href:"https://github.com/tonipow3ll",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(g.jsx)("a",{className:"nav-link",href:"https://www.linkedin.com/in/tonipowell13/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),Object(g.jsx)("a",{className:"nav-link",href:f,target:"_blank",rel:"noopener noreferrer",children:"Resume"})]})})]}),Object(g.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(D,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(g.jsx)(b.a,{path:"/about",render:function(){return Object(g.jsx)(E,{title:e.state.about.title})}}),Object(g.jsx)(w,{})]})})}}]),s}(c.a.Component),R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,96)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),r(e),a(e)}))};s(90);a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),R()}},[[91,1,2]]]);
//# sourceMappingURL=main.9b4eb068.chunk.js.map