(window["webpackJsonpevent-planners"]=window["webpackJsonpevent-planners"]||[]).push([[0],{26:function(e,a,t){e.exports=t(42)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(23),r=t.n(c),s=(t(31),t(2)),o=t(3),i=t(5),m=t(4),d=t(6),u=t(9),h=t(13),v=(t(32),t(11)),f=t.n(v),E=(t(33),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){f.a.AutoInit()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ul",{id:"dropdown1",className:"dropdown-content"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Wedding")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Wedding Related Events")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Corporate Events")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Parties"))),l.a.createElement("nav",{id:"mainNav"},l.a.createElement("div",{className:"nav-center center"},l.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{id:"nav-mobile",className:"hide-on-med-and-down center"},l.a.createElement("li",null,l.a.createElement("a",{href:"/",className:"waves-effect waves-teal accent-3 btn-flat"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/Portfolio",className:"waves-effect waves-teal accent-3 btn-flat"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-trigger waves-effect waves-teal accent-3 btn-flat",href:"#!","data-target":"dropdown1"},"Packages & investments",l.a.createElement("i",{className:"material-icons right"},"arrow_drop_down"))),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/Contact",className:"waves-effect waves-teal accent-3 btn-flat"},"Contact Us")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/About",className:"waves-effect waves-teal accent-3 btn-flat"},"About Us"))))),l.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/",className:"waves-effect waves-teal accent-3 btn-flat"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/Portfolio",className:"waves-effect waves-teal accent-3 btn-flat"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/Packages",className:"waves-effect waves-teal accent-3 btn-flat"},"Packages & investments")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/Contact",className:"waves-effect waves-teal accent-3 btn-flat"},"Contact Us")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/About",className:"waves-effect waves-teal accent-3 btn-flat"},"About Us"))))}}]),a}(n.Component)),p=(t(38),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".carousel");f.a.Carousel.init(e)}},{key:"componentDidUpdate",value:function(){console.log("made it to function")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"carousel"},l.a.createElement("a",{className:"carousel-item",href:"#one!"},l.a.createElement("img",{src:"../images/welcome.jpeg",alt:"This"})),l.a.createElement("a",{className:"carousel-item",href:"#two!"},l.a.createElement("img",{src:"../images/flowers.jpg",alt:"Welcome"})),l.a.createElement("a",{className:"carousel-item",href:"#three!"},l.a.createElement("img",{src:"../images/vase.jpg",alt:"This"})),l.a.createElement("a",{className:"carousel-item",href:"#four!"},l.a.createElement("img",{src:"../images/kiss.jpeg",alt:"This"})),l.a.createElement("a",{className:"carousel-item",href:"#five!"},l.a.createElement("img",{src:"../images/table.jpg",alt:"This"}))))}}]),a}(n.Component)),g=t(16),b=t(12),N=(t(39),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l))},t.validatePhone=function(){console.log(t.state.phone);var e=t.state.phone;console.log(e.length),e.length<10||t.setState({validated:!0})},t.handleContact=function(e){e.preventDefault(),console.log("submit button clicked"),t.validatePhone();var a={firstName:t.state.fName,lastName:t.state.lName,email:t.state.email,phone:t.state.phone,location:t.state.location,date:t.state.date,comment:t.state.comment};console.log("Submitted content: ",a),""!==t.state.firstName&&""!==t.state.lastName&&""!==t.state.email&&""!==t.state.phone?(fetch("/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return console.log({res:e}),e.ok,JSON.stringify(e)}),t.setState({fName:"",lName:"",email:"",phone:"",location:"",date:"",comment:"",validated:!1})):f.a.toast({html:"Please check *required information and phone number length."})},t.state={email:"",fName:"",lName:"",phone:"",validatedPhone:"",validated:!1,location:"",date:"",comment:""},t.handleInputChange=t.handleInputChange.bind(Object(b.a)(t)),t.handleContact=t.handleContact.bind(Object(b.a)(t)),t.validatePhone=t.validatePhone.bind(Object(b.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"col s12 m7"},l.a.createElement("h2",{id:"mHeader",className:"header center"},"Contact Us")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col m3"}),l.a.createElement("div",{className:"col s12 m7"},l.a.createElement("div",{className:"card horizontal"},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{id:"flowers",src:"../images/flowers.jpg",alt:"Flowers"})),l.a.createElement("div",{className:"card-stacked"},l.a.createElement("div",{id:"formStyle",className:"card-content"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{onSubmit:this.handleContact,className:"col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"first_name",name:"fName",value:this.state.fName,onChange:this.handleInputChange,type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"first_name"},"First Name *")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"last_name",name:"lName",value:this.state.lName,onChange:this.handleInputChange,type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"last_name"},"Last Name *"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"phone",name:"phone",value:this.state.phone,onChange:this.handleInputChange,type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"phone"},"801-755-7555",l.a.createElement("i",{className:"fa fa-italic"},"*"))),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"email_inline",name:"email",value:this.state.email,onChange:this.handleInputChange,type:"email",className:"validate"}),l.a.createElement("label",{htmlFor:"email_inline"},"Email *"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"location",name:"location",value:this.state.location,onChange:this.handleInputChange,type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"location"},"Event Location")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"date",name:"date",value:this.state.date,onChange:this.handleInputChange,type:"text",className:"validate"}),l.a.createElement("label",{htmlFor:"date"},"Event Date(s)"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s8"},l.a.createElement("textarea",{id:"textarea1",name:"comment",value:this.state.comment,onChange:this.handleInputChange,className:"materialize-textarea"}),l.a.createElement("label",{htmlFor:"textarea1"},"Comments/Questions"))),l.a.createElement("small",null,"* Required"),l.a.createElement("div",{className:"card-action"},l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",onSubmit:this.handleContact,name:"action"},l.a.createElement("i",{className:"material-icons right"},"send")))))))))))}}]),a}(n.Component)),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("Packages")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null))}}]),a}(n.Component),y=function(e){return l.a.createElement("div",{className:"card medium"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{id:"kenny",className:"activator",src:"../images/vase.jpg",alt:"Headshot"})),l.a.createElement("div",{className:"card-reveal"},l.a.createElement("h6",{className:"card-title grey-text text-darken-4"},"Kenneth Jimenez"),l.a.createElement("br",null),l.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))},j=function(e){return l.a.createElement("div",{className:"card medium"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{id:"cortney",className:"activator",src:"../images/kiss.jpeg",alt:"Headshot"})),l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},"Cortney Kuntz")),l.a.createElement("div",{className:"card-reveal"},l.a.createElement("h6",{className:"card-title grey-text text-darken-4"},"Cortney M Kuntz"),l.a.createElement("br",null),l.a.createElement("p",null,"Hello my dear! My name is Cortney Kuntz and I am Founder and Lead Planner of Bow & Tie Events. I love traveling, being a dog mom, murder mystery shows, trying new foods and laundry as odd as it sounds. I have always been a planner by nature and now as a professional! I remember planning all my birthday parties as a kid almost a year in advance. I loved coming up with various themes, color palettes, and activities in my Lisa Frank notebook. I am a 911 dispatcher which shares similar qualities with being an event planner. I\u2019m used to working with all different types of people including difficult people, strange, long hours without breaks all in high stress situations where decisions need to be made quickly. I\u2019ve always considered being an event planner, but just never pulled the trigger. After getting engaged in May of 2018 and planning my own wedding, I enjoyed it so much that I knew after ours was complete, I needed to give it a shot. So, here we are! I\u2019m so excited to meet you and can\u2019t wait to get started on making your vision a reality.")))},k=(t(40),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"row",style:{marginTop:"5%"}},l.a.createElement("div",{className:"col s2"}),l.a.createElement("div",{className:"col s4"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col s4"},l.a.createElement(j,null)),l.a.createElement("div",{className:"col s2"})))}}]),a}(n.Component)),C=(t(41),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(e){e.preventDefault();var a=e.target,n=a.name,l=a.value;t.setState(Object(g.a)({},n,l)),console.log("Portfolio Image :",t.state.cortJosh)},t.state={cortJosh:[]},t.handleClick=t.handleClick.bind(Object(b.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("div",{className:"card medium p-card",name:"cortneyJosh",value:this.state.cortJosh,onClick:this.handleClick},l.a.createElement("img",{id:"cort",src:"../images/cort.jpeg",alt:"Cort"}),l.a.createElement("span",{className:"card-title"},"Cortney + Josh")))))}}]),a}(n.Component)),O=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:p}),l.a.createElement(h.a,{exact:!0,path:"/Portfolio",component:C}),l.a.createElement(h.a,{exact:!0,path:"/Packages",component:w}),l.a.createElement(h.a,{exact:!0,path:"/Contact",component:N}),l.a.createElement(h.a,{exact:!0,path:"/About",component:k}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a328338a.chunk.js.map