(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){var c={"./projects/0.jpg":12,"./projects/1.jpg":13,"./projects/2.jpg":14,"./projects/3.jpg":15,"./projects/4.jpg":16};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=11},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/0.465cc80d.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/1.baf696e4.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/2.8c27b722.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/3.02c0d16d.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/4.17b0bf1c.jpg"},function(e,t,r){},function(e,t,r){var c={"./projects/0.jpg":19,"./projects/1.jpg":20,"./projects/2.jpg":21,"./projects/3.jpg":22,"./projects/4.jpg":23};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=18},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/0.eccef8c4.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/1.68cc395f.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/2.2e165a63.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/3.650447ba.jpg"},function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/4.a726d2ee.jpg"},function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(3),i=r.n(n);r(8),r(9);function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var o=r(0);var l=function(e){const{categories:t=[],setCurrentCategory:r,currentCategory:a,contactSelected:n,setContactSelected:i}=e;return Object(c.useEffect)((()=>{document.title=s(a.name)}),[a]),Object(o.jsxs)("header",{className:"flex-row px-1",children:[Object(o.jsx)("h2",{children:Object(o.jsx)("a",{"data-testid":"link",href:"/portfolio-react/",style:{fontFamily:"Garamond"},children:"William Santee"})}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:"flex-row",children:[Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{"data-testid":"about",href:"#about",onClick:()=>i(!1),children:"About me"})}),Object(o.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(o.jsx)("span",{onClick:()=>i(!0),children:"Contact"})}),t.map((e=>Object(o.jsx)("li",{className:"mx-1 ".concat(a.name===e.name&&!n&&"navActive"),children:Object(o.jsx)("span",{onClick:()=>{r(e),i(!1)},children:s(e.name)})},e.name)))]})})]})},d=r.p+"static/media/will-photo.b8910a33.jpg";var u=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("h1",{id:"about",children:"Who am I?"}),Object(o.jsx)("img",{src:d,className:"my-2",style:{width:"25%"},alt:"profilePic"}),Object(o.jsx)("div",{className:"my-2",children:Object(o.jsx)("p",{children:"In a rapidly evolving world, I have embraced change and embarked on a new journey. Previously, I was captivated by the intricacies of puzzles and strategy games, and transitioning to coding felt like a natural progression. Coding has become a fascinating avenue for me, providing a platform to channel my creativity in innovative ways. With a recently earned Master of Software Development degree, I bring a strong educational foundation to my endeavors. As I navigate through this dynamic field, my passion for problem-solving and strategic thinking continues to drive my exploration of innovation and endless possibilities."})})]})};var j=function({onClose:e,currentProject:t}){const{name:c,category:a,description:n,url:i,github:s,index:l}=t;return Object(o.jsx)("div",{className:"modalBackdrop",children:Object(o.jsxs)("div",{className:"modalContainer",children:[Object(o.jsx)("h3",{className:"modalTitle",children:c}),Object(o.jsx)("img",{src:r(11)("./".concat(a,"/").concat(l,".jpg")).default,alt:"current category"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("a",{href:i,children:Object(o.jsx)("p",{children:i})}),Object(o.jsx)("a",{href:s,children:Object(o.jsx)("p",{children:s})}),Object(o.jsx)("button",{onClick:e,type:"button",children:"Close this modal"})]})})};r(17);var h=({category:e})=>{const[t,a]=Object(c.useState)(!1),[n]=Object(c.useState)([{name:"Budget Master",category:"projects",description:"This is a budget tracking calendar that my group created for our first group project in my bootcamp.",url:"https://sirubu.github.io/budget-master/",github:"https://github.com/SirUbu/budget-master"},{name:"Over Deliver",category:"projects",description:"This is site that allows users to create reviews for delivery services my group created for our second group project in my bootcamp.",url:"https://shrouded-fortress-41826.herokuapp.com/",github:"https://github.com/jlightheart24/over-deliver"},{name:"Weather Dashboard",category:"projects",description:"This project allows users to see today's weather and a 5 day forecast for any given city.",url:"https://willsan0723.github.io/weather-dashboard/",github:"https://github.com/willsan0723/weather-dashboard"},{name:"Work Day Scheduler",category:"projects",description:"This project is a simple schedule application to organize your day schedules. You can save and reload your changes.",url:"https://willsan0723.github.io/work-day-scheduler/",github:"https://github.com/willsan0723/work-day-scheduler"},{name:"Author Hub",category:"projects",description:"AuthorHub is a site for authors to share ideas and get feedback, as well as a place for editors to offer their skills and readers to read up and coming authors\u2019 work.",url:"https://vast-gorge-54301.herokuapp.com/",github:"https://github.com/ChazzKreutzkamp/author-hub"}]),[i,s]=Object(c.useState)(),l=n.filter((t=>t.category===e)),d=(e,r)=>{s({...e,index:r}),a(!t)};return Object(o.jsxs)("div",{children:[t&&Object(o.jsx)(j,{currentProject:i,onClose:d}),Object(o.jsx)("div",{className:"flex-row project-images",children:l.map(((t,c)=>Object(o.jsx)("img",{src:r(18)("./".concat(e,"/").concat(c,".jpg")).default,alt:t.name,onClick:()=>d(t,c),className:"project-img"},t.name)))})]})};var p=function(e){const{currentCategory:t}=e;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:s(t.name)}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)(h,{category:t.name})]})};var b=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:"Contact Me"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"mailto:william.santee@gmail.com",children:"Email: william.santee@gmail.com"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/willsan0723",target:"_blank",rel:"noopener noreferrer",children:"GitHub: github.com/willsan0723"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/william-santee-97568351/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn: linkedin.com/in/william-santee-97568351"})})]})]})};var m=function(){const[e]=Object(c.useState)([{name:"projects",description:"Projects that I have deployed"}]),[t,r]=Object(c.useState)(e[0]),[a,n]=Object(c.useState)(!1);return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{categories:e,setCurrentCategory:r,currentCategory:t,contactSelected:a,setContactSelected:n}),Object(o.jsx)("main",{children:a?Object(o.jsx)(b,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{currentCategory:t}),Object(o.jsx)(u,{})]})})]})};var g=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,25)).then((({getCLS:t,getFID:r,getFCP:c,getLCP:a,getTTFB:n})=>{t(e),r(e),c(e),a(e),n(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.57f6c3cd.chunk.js.map