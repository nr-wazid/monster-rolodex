(this.webpackJsonpexersise2=this.webpackJsonpexersise2||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(2),c=n.n(s),o=(n(12),n(3)),l=n(4),i=n(5),u=n(6),m=(n(13),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=180x180"),alt:"monster"}),a.a.createElement("h2",null," ",e.monster.name," "),a.a.createElement("h4",null,e.monster.email))}),h=(n(14),function(e){return console.log(e),a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(15),n(16),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monster Contact"),a.a.createElement(d,{placeholder:"search monster",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(h,{monsters:s}))}}]),n}(r.Component);c.a.render(a.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1d310a57.chunk.js.map