(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[18],{378:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return s}));var n=l(8),a=l(9),r=l(17),c=l(10),i=l(11),o=l(0),u=l.n(o),m=l(46),s=function(e){Object(i.a)(l,e);var t=Object(c.a)(l);function l(e){var a;return Object(n.a)(this,l),(a=t.call(this,e)).state={articleTree:[]},a.getArticleTree=a.getArticleTree.bind(Object(r.a)(a)),a}return Object(a.a)(l,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],l=0;l<e.length-1;l++){var n=e[l].nodeName;"H2"!==n&&"H3"!==n||(e[l].id=e[l].innerText,t.push({name:e[l].innerText,tag:e[l].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree()}},{key:"render",value:function(){return u.a.createElement("div",{className:"page-content"},u.a.createElement("div",{className:"article"},u.a.createElement("div",{className:"article-title"},u.a.createElement("h1",null,"GoJS\u4ecb\u7ecd")),u.a.createElement("div",{className:"article-content"},u.a.createElement("h2",null,"\u7eafJavaScript\u5e93"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4ea4\u4e92\u5f0f\u5173\u7cfb\u56fe\u548c\u590d\u6742\u7684\u6570\u636e\u53ef\u89c6\u5316")),u.a.createElement("h3",null,"\u5b8c\u5168\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u4e0d\u9700\u8981\u4e0e\u670d\u52a1\u5668\u8054\u7cfb"),u.a.createElement("li",null,"\u6ca1\u6709\u7b2c\u4e09\u65b9\u4f9d\u8d56\u2014\u2014\u4e0e\u5176\u4ed6\u5e93(Angular\u3001React\u3001Node)\u53ef\u4ea4\u4e92\u64cd\u4f5c")),u.a.createElement("h2",null,"\u4e00\u4e2a\u5b9d\u8d35\u7684\u6295\u8d44"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u8282\u7701\u51e0\u5468\u6216\u51e0\u4e2a\u6708\u7684\u5f00\u53d1\u65f6\u95f4"),u.a.createElement("li",null,"\u9884\u5148\u52a0\u8f7d\u4e86\u51e0\u5341\u4e2a\u5e38\u89c1\u7684\u529f\u80fd(\u590d\u5236/\u7c98\u8d34/\u64a4\u6d88/\u91cd\u505a\u7b49)"),u.a.createElement("li",null,"\u81ea\u52a8\u5904\u7406\u5e73\u53f0/\u6d4f\u89c8\u5668\u5dee\u5f02")),u.a.createElement("h2",null,"GoJS\u662f\u4ec0\u4e48"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u7b80\u5355"),u.a.createElement("li",null,"\u7075\u6d3b"),u.a.createElement("li",null,"\u53ef\u6269\u5c55"),u.a.createElement("li",null,"\u5feb\u901f")),u.a.createElement("h2",null,"GoJS\u7279\u6027"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u57fa\u672c\u7684HTML"),u.a.createElement("li",null,"JavaScript"),u.a.createElement("li",null,"\u5c31\u662f\u8fd9\u4e9b\uff01")),u.a.createElement("h2",null,"GoJS\u9700\u8981\u4ec0\u4e48"),u.a.createElement("h2",null,"\u5982\u4f55\u83b7\u5f97GoJS"),u.a.createElement("ul",null,u.a.createElement("li",null,"gojs.net")),u.a.createElement("ul",{"data-lake-indent":"1"},u.a.createElement("li",null,"\u6570\u4ee5\u767e\u8ba1\u7684\u6837\u54c1"),u.a.createElement("li",null,"\u51e0\u5341\u4e2a\u4ecb\u7ecd\u9875\u9762"),u.a.createElement("li",null,"\u5b8c\u6574\u7684API\u6587\u6863"),u.a.createElement("li",null,"\u514d\u8d39\u6ce8\u518c\u8bd5\u7528\u5e76\u83b7\u5f97\u652f\u630130\u5929\u514d\u8d39\u652f\u6301")),u.a.createElement("ul",null,u.a.createElement("li",null,"npm/NuGet/GitHub")))),u.a.createElement("div",{className:"directory"},u.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),l}(o.Component)},46:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var n=l(8),a=l(9),r=l(10),c=l(11),i=l(0),o=l.n(i),u=(l(47),function(e){Object(c.a)(l,e);var t=Object(r.a)(l);function l(e){var a;return Object(n.a)(this,l),(a=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);a.setState({scrollTop:t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},a.state={articleTree:a.props.articleTree,scrollTop:null},a}return Object(a.a)(l,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,l=document.getElementsByClassName("directory-list")[0],n=l.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var a=document.getElementsByClassName("page-footer")[0],r=0;a;)r+=a.offsetTop,a=a.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=n+l.offsetHeight)>r)l.style="position:fixed;top:".concat(n-c+r-e.offsetHeight,"px;transition:none");else{var i=document.getElementsByClassName("directory-list")[0],o=window.scrollY;i&&(o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",i.className="directory-list directory-affixed directory-list2",t=o),t>o&&(e.className="ant-layout-header header header-visible",i.className="directory-list directory-list2",t=o)),i.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:"this.props.articleTree"})}},{key:"render",value:function(){var e=this,t=this.state,l=t.articleTree,n=t.scrollTop,a=l.length;if(document.getElementById("tree-num-0")&&a>0){for(var r=[],c=0;c<a;c++){var i=document.getElementById(l[c].name);r.push(i.offsetTop)}for(var u=r.findIndex((function(e){return e>n}))-1,m=0;m<a;m++)document.getElementById("tree-num-".concat(m)).className=m===u?"tree-num directory-item-active":"tree-num";-2===u&&(document.getElementById("tree-num-".concat(a-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},l.map((function(t,l){return o.a.createElement("li",{key:l,id:"tree-num-".concat(l),className:"tree-num",style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){return e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var l=e.articleTree;return l!==t.articleTree?{articleTree:l}:null}}]),l}(i.Component))},47:function(e,t,l){}}]);
//# sourceMappingURL=18.8a4876de.chunk.js.map