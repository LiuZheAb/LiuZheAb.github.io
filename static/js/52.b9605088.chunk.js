(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[52],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(11),a=n(12),c=n(13),o=n(14),l=n(0),i=n.n(l),s=(n(38),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);a.setState({scrollTop:t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},a.state={articleTree:a.props.articleTree,scrollTop:null},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],r=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var a=document.getElementsByClassName("page-footer")[0],c=0;a;)c+=a.offsetTop,a=a.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=r+n.offsetHeight)>c+e.offsetHeight)n.style="position:fixed;top:".concat(r-o+c,"px;transition:none");else{var l=window.scrollY;l>e.offsetHeight&&(t<l&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=l),t>l&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=l)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,r=t.scrollTop,a=n.length;if(document.getElementById("tree-num-0")&&a>0){for(var c=[],o=0;o<a;o++){var l=document.getElementById(n[o].name);c.push(l.offsetTop)}for(var s=c.findIndex((function(e){return e>r}))-1,m=0;m<a;m++)document.getElementById("tree-num-".concat(m)).className=m===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(a-1)).className="tree-num directory-item-active")}return i.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return i.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.articleTree;return n!==t.articleTree?{articleTree:n}:null}}]),n}(l.Component))},38:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(11),a=n(12),c=n(15),o=n(13),l=n(14),i=n(0),s=n.n(i),m=n(37),d=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={articleTree:[]},a.getArticleTree=a.getArticleTree.bind(Object(c.a)(a)),a}return Object(a.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var r=e[n].nodeName;"H2"!==r&&"H3"!==r||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){document.title="\u95ee\u9898\u6c47\u603b\u2014\u2014\u95ee\u9898\u4e8c",this.getArticleTree()}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u95ee\u9898\u4e8c")),s.a.createElement("div",{className:"article-content"})),s.a.createElement("div",{className:"directory"},s.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),n}(i.Component)}}]);
//# sourceMappingURL=52.b9605088.chunk.js.map