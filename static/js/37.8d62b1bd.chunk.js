(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[37],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(11),l=n(12),r=n(13),c=n(14),o=n(0),i=n.n(o),s=(n(38),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:l.props.articleTree,scrollTop:null},l}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=a+n.offsetHeight)>r)n.style="position:fixed;top:".concat(a-c+r-e.offsetHeight,"px;transition:none");else{var o=window.scrollY;n&&(o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,l=n.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],c=0;c<l;c++){var o=document.getElementById(n[c].name);r.push(o.offsetTop)}for(var s=r.findIndex((function(e){return e>a}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return i.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.articleTree;return n!==t.articleTree?{articleTree:n}:null}}]),n}(o.Component))},38:function(e,t,n){},471:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),l=n(12),r=n(15),c=n(13),o=n(14),i=n(0),s=n.n(i),m=n(37),u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={articleTree:[]},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){document.title="Code Review\u2014\u2014\u7b80\u4ecb",this.getArticleTree()}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u7b80\u4ecb")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u5199\u5728\u524d\u9762"),s.a.createElement("p",{className:"indent-2"},"\u8be5\u6587\u6863\u7ffb\u8bd1\u81ea\u8c37\u6b4c\u5de5\u7a0b\u5b9e\u8df5\u6587\u6863(Google Engineering Practices Documentation),\u539f\u6587\u5730\u5740",s.a.createElement("a",{href:"https://github.com/google/eng-practices",target:"_blank",rel:"noopener noreferrer"},"https://github.com/google/eng-practices")),s.a.createElement("h2",null,"\u6b63\u6587\u5f00\u59cb"),s.a.createElement("p",{className:"indent-2"},"\u8c37\u6b4c\u6709\u8bb8\u591a\u6db5\u76d6\u6240\u6709\u8bed\u8a00\u548c\u6240\u6709\u9879\u76ee\u7684\u901a\u7528\u5de5\u7a0b\u5b9e\u8df5\u3002\u8fd9\u4e9b\u6587\u6863\u4ee3\u8868\u4e86\u6211\u4eec\u957f\u671f\u4ee5\u6765\u5f00\u53d1\u7684\u5404\u79cd\u6700\u4f73\u5b9e\u8df5\u7684\u96c6\u4f53\u7ecf\u9a8c\u3002\u5f00\u6e90\u9879\u76ee\u6216\u5176\u4ed6\u7ec4\u7ec7\u53ef\u80fd\u4f1a\u4ece\u8fd9\u4e9b\u77e5\u8bc6\u4e2d\u53d7\u76ca\uff0c\u56e0\u6b64\u6211\u4eec\u52aa\u529b\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\u516c\u5f00\u8fd9\u4e9b\u77e5\u8bc6\u3002"),s.a.createElement("p",{className:"indent-2"},"\u76ee\u524d\u8fd9\u5305\u62ec\u4e0b\u5217\u6587\u6863:"),s.a.createElement("p",{className:"indent-2"},"\u8c37\u6b4c\u7684\u4ee3\u7801\u8bc4\u5ba1\u6307\u5357\uff0c\u5b9e\u9645\u4e0a\u662f\u4e24\u5957\u72ec\u7acb\u7684\u6587\u6863:"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u4ee3\u7801\u8bc4\u5ba1\u8005\u6307\u5357"),s.a.createElement("li",null,"\u4ee3\u7801\u5f00\u53d1\u8005\u6307\u5357")),s.a.createElement("h3",null,"\u672f\u8bed"),s.a.createElement("p",{className:"indent-2"},"\u5176\u4e2d\u4e00\u4e9b\u6587\u6863\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e9bgoogle\u5185\u90e8\u672f\u8bed\uff0c\u6211\u4eec\u5728\u6b64\u5411\u5916\u90e8\u8bfb\u8005\u6f84\u6e05:"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("b",null,"CL"),":\u4ee3\u8868\u201c\u53d8\u66f4\u5217\u8868(Change List)\u201d\uff0c\u610f\u601d\u662f\u5df2\u7ecf\u63d0\u4ea4\u5230\u7248\u672c\u63a7\u5236\u6216\u6b63\u5728\u8fdb\u884c\u4ee3\u7801\u8bc4\u5ba1\u7684\u4e00\u4e2a\u72ec\u7acb\u66f4\u6539\u3002\u901a\u5e38\u5c06\u6b64\u79f0\u4e3a\u201c\u66f4\u6539\u201d\u6216\u201c\u8865\u4e01\u201d\u3002"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("b",null,"LGTM"),":\u610f\u601d\u662f\u201c\u770b\u8d77\u6765\u4e0d\u9519(Looks Good to Me)\u201d\u3002\u5b83\u662f\u4ee3\u7801\u5ba1\u67e5\u5458\u5728\u6279\u51c6CL\u65f6\u6240\u8bf4\u7684\u8bdd\u3002"),s.a.createElement("h3",null,"\u8bb8\u53ef\u8bc1"),s.a.createElement("p",{className:"indent-2"},"\u672c\u9879\u76ee\u4e2d\u7684\u6587\u6863\u662f\u6839\u636eCC-By 3.0\u8bb8\u53ef\u534f\u8bae\u6388\u6743\u7684\uff0c\u8be5\u534f\u8bae\u9f13\u52b1\u60a8\u5171\u4eab\u8fd9\u4e9b\u6587\u6863\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1",s.a.createElement("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noopener noreferrer"},"https://creativecommons.org/licenses/by/3.0/"),"\u3002"),s.a.createElement("h2",null,"\u4ee3\u7801\u8bc4\u5ba1\u8005\u6307\u5357"),s.a.createElement("h3",null,"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u8bc4\u5ba1"),s.a.createElement("p",{className:"indent-2"},"\u672c\u8282\u4e2d\u7684\u9875\u9762\u5305\u542b\u4e86\u57fa\u4e8e\u957f\u671f\u7ecf\u9a8c\u7684\u4ee3\u7801\u8bc4\u5ba1\u6700\u4f73\u65b9\u6cd5\u7684\u5efa\u8bae\u3002\u5b83\u4eec\u4e00\u8d77\u8868\u793a\u4e00\u4e2a\u5b8c\u6574\u7684\u6587\u6863\uff0c\u88ab\u5206\u6210\u8bb8\u591a\u5355\u72ec\u7684\u90e8\u5206\u3002\u4f60\u4e0d\u9700\u8981\u5168\u90e8\u8bfb\u5b8c\uff0c\u4f46\u662f\u5f88\u591a\u4eba\u53d1\u73b0\u9605\u8bfb\u6574\u672c\u4e66\u5bf9\u4ed6\u4eec\u81ea\u5df1\u548c\u4ed6\u4eec\u7684\u56e2\u961f\u90fd\u5f88\u6709\u5e2e\u52a9\u3002"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u4ee3\u7801\u8bc4\u5ba1\u6807\u51c6"),s.a.createElement("li",null,"\u4ee3\u7801\u8bc4\u5ba1\u8981\u70b9"),s.a.createElement("li",null,"\u5728\u8bc4\u5ba1\u4e2d\u5982\u4f55\u67e5\u770bCL"),s.a.createElement("li",null,"\u4ee3\u7801\u8bc4\u5ba1\u7684\u901f\u5ea6"),s.a.createElement("li",null,"\u5982\u4f55\u7f16\u5199\u4ee3\u7801\u8bc4\u5ba1\u7684\u8bc4\u8bba"),s.a.createElement("li",null,"\u5982\u4f55\u5904\u7406\u8bc4\u5ba1\u540e\u7a0b\u5e8f\u5458\u62d2\u7edd\u4fee\u6539\u7684\u60c5\u51b5")),s.a.createElement("p",{className:"indent-2"},"\u8fd8\u8bf7\u53c2\u9605\u4ee3\u7801\u5f00\u53d1\u8005\u6307\u5357\uff0c\u8be5\u6307\u5357\u4e3a\u6b63\u5728\u8bc4\u5ba1CLs\u7684\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u6307\u5bfc\u3002"),s.a.createElement("h2",null,"\u4ee3\u7801\u5f00\u53d1\u8005\u6307\u5357"),s.a.createElement("p",{className:"indent-2"},"\u672c\u8282\u4e2d\u7684\u9875\u9762\u5305\u542b\u4e86\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u4ee3\u7801\u8bc4\u5ba1\u7684\u6700\u4f73\u5b9e\u8df5\u3002\u8fd9\u4e9b\u6307\u5bfc\u65b9\u9488\u5e94\u8be5\u5e2e\u52a9\u60a8\u66f4\u5feb\u5730\u5b8c\u6210\u8bc4\u5ba1\uff0c\u5e76\u83b7\u5f97\u66f4\u9ad8\u8d28\u91cf\u7684\u7ed3\u679c\u3002\u60a8\u4e0d\u5fc5\u5168\u90e8\u9605\u8bfb\u5b83\u4eec\uff0c\u4f46\u662f\u5b83\u4eec\u9002\u7528\u4e8e\u6bcf\u4e2a\u8c37\u6b4c\u5f00\u53d1\u4eba\u5458\uff0c\u8bb8\u591a\u4eba\u53d1\u73b0\u9605\u8bfb\u6574\u4e2a\u96c6\u5408\u5f88\u6709\u5e2e\u52a9\u3002"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u5199\u51fa\u597d\u7684CL"),s.a.createElement("li",null,"\u5c0f\u578bCL"),s.a.createElement("li",null,"\u5982\u4f55\u5904\u7406\u8bc4\u5ba1\u4eba\u5458\u7684\u8bc4\u8bba")),s.a.createElement("p",{className:"indent-2"},"\u8fd8\u8bf7\u53c2\u9605\u4ee3\u7801\u8bc4\u5ba1\u8005\u6307\u5357\uff0c\u5b83\u4e3a\u4ee3\u7801\u8bc4\u5ba1\u4eba\u5458\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u6307\u5bfc\u3002"))),s.a.createElement("div",{className:"directory"},s.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),n}(i.Component)}}]);
//# sourceMappingURL=37.8d62b1bd.chunk.js.map