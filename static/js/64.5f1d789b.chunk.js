(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[64],{36:function(e,t,n){"use strict";var l=n(11),a=n(12),r=n(16),c=n(13),o=n(14),i=n(0),s=n.n(i),m=n(5),u=n(39),d=(n(37),function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);a.setState({scrollTop:t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},a.state={articleTree:[],scrollTop:null},a.getArticleTree=a.getArticleTree.bind(Object(r.a)(a)),a}return Object(a.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0,l=e.length;n<l-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,n=u.a.length;t<n;t++)e[0]===u.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[t].section.length>0?u.a[t].section[e[e.length-1]]:u.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],l=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var a=document.getElementsByClassName("page-footer")[0],r=0;a;)r+=a.offsetTop,a=a.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=l+n.offsetHeight)>r+e.offsetHeight)n.style="position:fixed;top:".concat(l-c+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,l=t.scrollTop,a=n.length;if(document.getElementById("tree-num-0")&&a>0){for(var r=[],c=0;c<a;c++){var o=document.getElementById(n[c].name);r.push(o.offsetTop)}for(var i=r.findIndex((function(e){return e>l}))-1,m=0;m<a;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(a-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(i.Component));t.a=Object(m.f)(d)},37:function(e,t,n){},452:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var l=n(11),a=n(12),r=n(13),c=n(14),o=n(0),i=n.n(o),s=n(36),m=n(15),u=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"\u81ea\u5b9a\u4e49\u8868\u5355")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u7b80\u4ecb"),i.a.createElement("p",null,"\u4f7f\u7528react-dnd\u62d6\u653e\u5e93\u5b9e\u73b0\u4e86\u4e0b\u5217\u529f\u80fd\uff0c"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u8868\u5355\u63a7\u4ef6\u62d6\u62fd\u751f\u6210"),i.a.createElement("li",null,"\u81ea\u5b9a\u4e49\u8868\u5355\u63a7\u4ef6\u6837\u5f0f\u53ca\u5185\u5bb9"),i.a.createElement("li",null,"\u8868\u5355\u63a7\u4ef6\u81ea\u7531\u6446\u653e"),i.a.createElement("li",null,"\u62d6\u62fd\u751f\u6210\u7684\u8868\u5355\u4fdd\u5b58\u4e3a\u672c\u5730json\u6587\u4ef6"),i.a.createElement("li",null,"\u8bfb\u53d6json\u6587\u4ef6\u5e76\u8f6c\u4e3adom\u5143\u7d20"),i.a.createElement("li",null,"\u2026\u2026\u5176\u4ed6")),i.a.createElement("p",null,"\u8be6\u60c5\u8bf7\u70b9\u51fb\u4e0b\u65b9demo\u5730\u5740\u67e5\u770b\u3002"),i.a.createElement(m.b,{to:"/webide2",target:"_blank"},"demo\u9884\u89c8"),i.a.createElement("p",null,"PC\u7aef\u6d4f\u89c8\u4f53\u9a8c\u6700\u4f73\uff0c\u79fb\u52a8\u7aef\u5efa\u8bae\u6a2a\u5c4f\u6d4f\u89c8\u3002"))),i.a.createElement(s.a,null))}}]),n}(o.Component)}}]);
//# sourceMappingURL=64.5f1d789b.chunk.js.map