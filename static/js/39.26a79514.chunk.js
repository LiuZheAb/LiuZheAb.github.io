(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[39],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),l=n(12),r=n(15),c=n(13),o=n(14),i=n(0),s=n.n(i),m=n(37),u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={articleTree:[]},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree()}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u5982\u4f55\u7f16\u5199\u4ee3\u7801\u8bc4\u5ba1\u7684\u8bc4\u8bba")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u603b\u7ed3"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u4fdd\u6301\u53cb\u597d\u3002"),s.a.createElement("li",null,"\u89e3\u91ca\u4f60\u7684\u7406\u7531\u3002"),s.a.createElement("li",null,"\u7ed9\u51fa\u660e\u786e\u7684\u65b9\u5411\u6216\u6307\u51fa\u95ee\u9898\u8ba9\u5f00\u53d1\u4eba\u5458\u6765\u6743\u8861\u3002"),s.a.createElement("li",null,"\u9f13\u52b1\u5f00\u53d1\u4eba\u5458\u7b80\u5316\u4ee3\u7801\u6216\u6dfb\u52a0\u4ee3\u7801\u6ce8\u91ca\uff0c\u800c\u4e0d\u662f\u4ec5\u4ec5\u5411\u60a8\u89e3\u91ca\u4ee3\u7801\u7684\u590d\u6742\u6027\u3002")),s.a.createElement("h2",null,"\u793c\u8c8c"),s.a.createElement("p",{className:"indent-2"},"\u4e00\u822c\u6765\u8bf4\uff0c\u793c\u8c8c\u548c\u5c0a\u91cd\u662f\u5f88\u91cd\u8981\u7684\uff0c\u540c\u65f6\u4e5f\u5bf9\u60a8\u6b63\u5728\u8bc4\u5ba1\u7684\u4ee3\u7801\u7684\u5f00\u53d1\u4eba\u5458\u975e\u5e38\u6e05\u6670\u548c\u6709\u5e2e\u52a9\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u786e\u4fdd\u60a8\u603b\u662f\u5bf9\u4ee3\u7801\u8fdb\u884c\u6ce8\u91ca\uff0c\u800c\u4ece\u4e0d\u5bf9\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u6ce8\u91ca\u3002\u4f60\u4e0d\u5fc5\u603b\u662f\u9075\u5faa\u8fd9\u4e2a\u4e60\u60ef\uff0c\u4f46\u662f\u5f53\u4f60\u8bf4\u4e00\u4e9b\u53ef\u80fd\u4f1a\u8ba9\u4eba\u5fc3\u70e6\u610f\u4e71\u6216\u6709\u4e89\u8bae\u7684\u8bdd\u65f6\uff0c\u4f60\u7edd\u5bf9\u5e94\u8be5\u4f7f\u7528\u8fd9\u4e2a\u4e60\u60ef\u3002\u4f8b\u5982:"),s.a.createElement("p",{className:"indent-2"},"\u574f:\u201c\u4e3a\u4ec0\u4e48\u60a8\u5728\u8fd9\u91cc\u4f7f\u7528\u7ebf\u7a0b\uff0c\u800c\u663e\u7136\u6ca1\u6709\u4ece\u5e76\u53d1\u4e2d\u83b7\u5f97\u4efb\u4f55\u597d\u5904?\u201d"),s.a.createElement("p",{className:"indent-2"},"\u597d:\u201c\u8fd9\u91cc\u7684\u5e76\u53d1\u6a21\u578b\u589e\u52a0\u4e86\u7cfb\u7edf\u7684\u590d\u6742\u6027\uff0c\u4f46\u6211\u770b\u4e0d\u5230\u4efb\u4f55\u5b9e\u9645\u7684\u6027\u80fd\u4f18\u52bf\u3002\u56e0\u4e3a\u6ca1\u6709\u6027\u80fd\u4e0a\u7684\u597d\u5904\uff0c\u6240\u4ee5\u8fd9\u6bb5\u4ee3\u7801\u6700\u597d\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u591a\u4e2a\u7ebf\u7a0b\u3002\u201d"),s.a.createElement("h2",null,"\u89e3\u91ca\u4e3a\u4ec0\u4e48"),s.a.createElement("p",{className:"indent-2"},"\u5173\u4e8e\u4e0a\u9762\u7684\u201c\u597d\u201d\u793a\u4f8b\uff0c\u60a8\u5c06\u6ce8\u610f\u5230\u7684\u4e00\u4ef6\u4e8b\u662f\uff0c\u5b83\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u7406\u89e3\u60a8\u4e3a\u4ec0\u4e48\u8981\u53d1\u8868\u8bc4\u8bba\u3002\u60a8\u5e76\u4e0d\u603b\u662f\u9700\u8981\u5728\u8bc4\u5ba1\u6ce8\u91ca\u4e2d\u5305\u542b\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4f46\u662f\u6709\u65f6\u5019\uff0c\u5bf9\u4e8e\u60a8\u7684\u610f\u56fe\u3001\u60a8\u6240\u9075\u5faa\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u6216\u8005\u60a8\u7684\u5efa\u8bae\u5982\u4f55\u6539\u8fdb\u4ee3\u7801\u5065\u5eb7\u72b6\u51b5\uff0c\u7ed9\u51fa\u66f4\u591a\u7684\u89e3\u91ca\u662f\u5408\u9002\u7684\u3002"),s.a.createElement("h2",null,"\u7ed9\u6307\u5bfc"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("b",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4fee\u590dCL\u662f\u5f00\u53d1\u4eba\u5458\u7684\u8d23\u4efb\uff0c\u800c\u4e0d\u662f\u8bc4\u5ba1\u4eba\u5458\u7684\u8d23\u4efb"),"\u3002\u60a8\u4e0d\u9700\u8981\u4e3a\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u89e3\u51b3\u65b9\u6848\u7684\u8be6\u7ec6\u8bbe\u8ba1\u6216\u7f16\u5199\u4ee3\u7801\u3002"),s.a.createElement("p",{className:"indent-2"},"\u4e0d\u8fc7\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u8bc4\u5ba1\u4eba\u5458\u5e94\u8be5\u6beb\u65e0\u5e2e\u52a9\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u5e94\u8be5\u5728\u6307\u51fa\u95ee\u9898\u548c\u63d0\u4f9b\u76f4\u63a5\u6307\u5bfc\u4e4b\u95f4\u53d6\u5f97\u9002\u5f53\u7684\u5e73\u8861\u3002\u6307\u51fa\u95ee\u9898\u5e76\u8ba9\u5f00\u53d1\u4eba\u5458\u505a\u51fa\u51b3\u7b56\u901a\u5e38\u6709\u52a9\u4e8e\u5f00\u53d1\u4eba\u5458\u5b66\u4e60\uff0c\u5e76\u4f7f\u4ee3\u7801\u8bc4\u5ba1\u53d8\u5f97\u66f4\u5bb9\u6613\u3002\u5b83\u8fd8\u53ef\u4ee5\u4ea7\u751f\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u4e3a\u5f00\u53d1\u4eba\u5458\u6bd4\u8bc4\u5ba1\u4eba\u5458\u66f4\u63a5\u8fd1\u4ee3\u7801\u3002"),s.a.createElement("p",{className:"indent-2"},"\u7136\u800c\uff0c\u6709\u65f6\u76f4\u63a5\u7684\u6307\u4ee4\u3001\u5efa\u8bae\u751a\u81f3\u4ee3\u7801\u66f4\u6709\u5e2e\u52a9\u3002\u4ee3\u7801\u8bc4\u5ba1\u7684\u4e3b\u8981\u76ee\u6807\u662f\u83b7\u5f97\u5c3d\u53ef\u80fd\u597d\u7684CL\u3002\u7b2c\u4e8c\u4e2a\u76ee\u6807\u662f\u63d0\u9ad8\u5f00\u53d1\u4eba\u5458\u7684\u6280\u80fd\uff0c\u8fd9\u6837\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u4ed6\u4eec\u9700\u8981\u7684\u8bc4\u5ba1\u5c31\u4f1a\u8d8a\u6765\u8d8a\u5c11\u3002"),s.a.createElement("h2",null,"\u63a5\u53d7\u89e3\u91ca"),s.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u60a8\u8981\u6c42\u5f00\u53d1\u4eba\u5458\u89e3\u91ca\u4e00\u6bb5\u60a8\u4e0d\u7406\u89e3\u7684\u4ee3\u7801\uff0c\u901a\u5e38\u4f1a\u5bfc\u81f4\u4ed6\u4eec",s.a.createElement("b",null,"\u66f4\u6e05\u695a\u5730\u91cd\u5199\u4ee3\u7801"),"\u3002\u5076\u5c14\uff0c\u5728\u4ee3\u7801\u4e2d\u6dfb\u52a0\u6ce8\u91ca\u4e5f\u662f\u4e00\u79cd\u9002\u5f53\u7684\u54cd\u5e94\uff0c\u53ea\u8981\u5b83\u4e0d\u53ea\u662f\u89e3\u91ca\u8fc7\u4e8e\u590d\u6742\u7684\u4ee3\u7801\u3002"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("b",null,"\u4ec5\u5728\u4ee3\u7801\u8bc4\u5ba1\u5de5\u5177\u4e2d\u7f16\u5199\u7684\u89e3\u91ca\u5bf9\u5c06\u6765\u7684\u4ee3\u7801\u8bfb\u8005\u6ca1\u6709\u5e2e\u52a9"),"\u3002\u5b83\u4eec\u53ea\u5728\u5c11\u6570\u60c5\u51b5\u4e0b\u662f\u53ef\u63a5\u53d7\u7684\uff0c\u4f8b\u5982\u5f53\u60a8\u6b63\u5728\u68c0\u67e5\u4e00\u4e2a\u60a8\u4e0d\u592a\u719f\u6089\u7684\u533a\u57df\uff0c\u5e76\u4e14\u5f00\u53d1\u4eba\u5458\u89e3\u91ca\u4e86\u4e00\u4e9b\u4ee3\u7801\u7684\u666e\u901a\u8bfb\u8005\u53ef\u80fd\u5df2\u7ecf\u77e5\u9053\u7684\u5185\u5bb9\u65f6\u3002"))),s.a.createElement("div",{className:"directory"},s.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),n}(i.Component)},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(11),l=n(12),r=n(13),c=n(14),o=n(0),i=n.n(o),s=(n(38),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:l.props.articleTree,scrollTop:null},l}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=a+n.offsetHeight)>r+e.offsetHeight)n.style="position:fixed;top:".concat(a-c+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,l=n.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],c=0;c<l;c++){var o=document.getElementById(n[c].name);r.push(o.offsetTop)}for(var s=r.findIndex((function(e){return e>a}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return i.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.articleTree;return n!==t.articleTree?{articleTree:n}:null}}]),n}(o.Component))},38:function(e,t,n){}}]);
//# sourceMappingURL=39.26a79514.chunk.js.map