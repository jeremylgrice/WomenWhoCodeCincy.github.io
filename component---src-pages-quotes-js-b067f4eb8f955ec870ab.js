(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5H7b":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),a=r.n(n),o=(r("ls82"),r("HaE+")),s=r("dI71"),c=r("q1tI"),u=r.n(c),i=r("Bl7J"),l=r("vrFN"),h=r("fBUP"),p=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={quoteList:[],hasError:!1},e}Object(s.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){var t=Object(o.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.a)("http://my-json-server.typicode.com/WomenWhoCodeCincy/wwcode-cincy-database/quotes");case 3:(e=t.sent).success?this.setState({quoteList:e.results,hasError:!1}):this.setState({hasError:!0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState({hasError:!0});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),r.render=function(){var t=this.state,e=t.quoteList,r=t.hasError,n=e.map((function(t,e){return u.a.createElement("li",{key:e},t.quote," ",t.author)}));return u.a.createElement(i.a,null,u.a.createElement(l.a,{title:"Quotes"}),u.a.createElement("h1",null,"Quotes"),r&&u.a.createElement("p",null,"Unable to fetch quotes"),u.a.createElement("ul",null,n))},e}(c.Component);e.default=p}}]);
//# sourceMappingURL=component---src-pages-quotes-js-b067f4eb8f955ec870ab.js.map