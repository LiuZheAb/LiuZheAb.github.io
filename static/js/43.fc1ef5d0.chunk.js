(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[43],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),r=n(12),l=n(15),c=n(13),o=n(14),i=n(0),s=n.n(i),m=n(37),d=n(16),u=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={articleTree:[]},r.getArticleTree=r.getArticleTree.bind(Object(l.a)(r)),r}return Object(r.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var a=e[n].nodeName;"H2"!==a&&"H3"!==a||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree()}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u5982\u4f55\u5904\u7406\u8bc4\u5ba1\u4eba\u5458\u7684\u8bc4\u8bba")),s.a.createElement("div",{className:"article-content"},s.a.createElement("p",{className:"indent-2"},"\u5f53\u60a8\u53d1\u9001\u4e86\u4e00\u4e2aCL\u4f9b\u8bc4\u5ba1\u65f6\uff0c\u8bc4\u5ba1\u4eba\u5458\u5f88\u53ef\u80fd\u4f1a\u5bf9\u60a8\u7684CL\u7ed9\u51fa\u51e0\u4e2a\u8bc4\u8bba\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u5173\u4e8e\u5904\u7406\u8bc4\u5ba1\u4eba\u5458\u8bc4\u8bba\u7684\u6709\u7528\u4fe1\u606f\u3002"),s.a.createElement("h2",null,"\u4e0d\u8981\u628a\u5b83\u770b\u6210\u662f\u9488\u5bf9\u4f60\u4e2a\u4eba\u7684"),s.a.createElement("p",{className:"indent-2"},"\u8bc4\u5ba1\u7684\u76ee\u7684\u662f\u4fdd\u6301\u4ee3\u7801\u5e93\u548c\u4ea7\u54c1\u7684\u8d28\u91cf\u3002\u5f53\u8bc4\u5ba1\u4eba\u5458\u5bf9\u60a8\u7684\u4ee3\u7801\u63d0\u51fa\u6279\u8bc4\u65f6\uff0c\u8bf7\u5c06\u5176\u89c6\u4e3a\u4ed6\u4eec\u8bd5\u56fe\u5e2e\u52a9\u60a8\u3001\u4ee3\u7801\u5e93\u548c\u8c37\u6b4c\uff0c\u800c\u4e0d\u662f\u9488\u5bf9\u60a8\u6216\u60a8\u7684\u80fd\u529b\u7684\u4e2a\u4eba\u653b\u51fb\u3002"),s.a.createElement("p",{className:"indent-2"},"\u6709\u65f6\u8bc4\u5ba1\u4eba\u5458\u611f\u5230\u6cae\u4e27\uff0c\u4ed6\u4eec\u5728\u8bc4\u5ba1\u4e2d\u8868\u8fbe\u4e86\u8fd9\u79cd\u6cae\u4e27\u3002\u5bf9\u4e8e\u8bc4\u5ba1\u4eba\u5458\u6765\u8bf4\uff0c\u8fd9\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u5b9e\u8df5\uff0c\u4f46\u662f\u4f5c\u4e3a\u5f00\u53d1\u4eba\u5458\uff0c\u60a8\u5e94\u8be5\u4e3a\u6b64\u505a\u597d\u51c6\u5907\u3002\u95ee\u95ee\u81ea\u5df1\uff0c\u201c\u8bc4\u5ba1\u4eba\u5458\u60f3\u8981\u548c\u6211\u4ea4\u6d41\u7684\u6709\u5efa\u8bbe\u6027\u7684\u4e1c\u897f\u662f\u4ec0\u4e48?\u201d"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("b",null,"\u6c38\u8fdc\u4e0d\u8981\u5bf9\u4ee3\u7801\u8bc4\u5ba1\u8bc4\u8bba\u505a\u51fa\u6124\u6012\u7684\u56de\u5e94"),"\u3002\u8fd9\u4e25\u91cd\u8fdd\u53cd\u4e86\u804c\u4e1a\u793c\u4eea\uff0c\u5c06\u6c38\u8fdc\u5b58\u5728\u4e8e\u4ee3\u7801\u8bc4\u5ba1\u5de5\u5177\u4e2d\u3002\u5982\u679c\u4f60\u592a\u751f\u6c14\u6216\u751f\u6c14\u800c\u65e0\u6cd5\u53cb\u597d\u5730\u56de\u590d\uff0c\u90a3\u4e48\u79bb\u5f00\u7535\u8111\u4e00\u4f1a\u513f\uff0c\u6216\u8005\u505a\u70b9\u522b\u7684\u4e8b\u60c5\uff0c\u76f4\u5230\u4f60\u611f\u5230\u8db3\u591f\u5e73\u9759\uff0c\u53ef\u4ee5\u793c\u8c8c\u5730\u56de\u590d\u4e3a\u6b62\u3002"),s.a.createElement("p",{className:"indent-2"},"\u4e00\u822c\u6765\u8bf4\uff0c\u5982\u679c\u4e00\u4e2a\u8bc4\u5ba1\u4eba\u5458\u6ca1\u6709\u4ee5\u4e00\u79cd\u5efa\u8bbe\u6027\u548c\u793c\u8c8c\u7684\u65b9\u5f0f\u63d0\u4f9b\u53cd\u9988\uff0c\u90a3\u5c31\u5f53\u9762\u5411\u4ed6\u4eec\u89e3\u91ca\u4e00\u4e0b\u3002\u5982\u679c\u4f60\u4e0d\u80fd\u548c\u4ed6\u4eec\u9762\u5bf9\u9762\u6216\u89c6\u9891\u901a\u8bdd\uff0c\u90a3\u5c31\u7ed9\u4ed6\u4eec\u53d1\u4e00\u5c01\u79c1\u4eba\u90ae\u4ef6\u3002\u7528\u4e00\u79cd\u53cb\u5584\u7684\u65b9\u5f0f\u5411\u4ed6\u4eec\u89e3\u91ca\u4f60\u4e0d\u559c\u6b22\u4ec0\u4e48\uff0c\u4ee5\u53ca\u4f60\u5e0c\u671b\u4ed6\u4eec\u505a\u7684\u4e0d\u540c\u4e4b\u5904\u3002\u5982\u679c\u4ed6\u4eec\u4e5f\u4ee5\u975e\u5efa\u8bbe\u6027\u7684\u65b9\u5f0f\u56de\u5e94\u8fd9\u4e2a\u79c1\u4eba\u8ba8\u8bba\uff0c\u6216\u8005\u5b83\u6ca1\u6709\u9884\u671f\u7684\u6548\u679c\uff0c\u90a3\u4e48\u6839\u636e\u60c5\u51b5\u5347\u7ea7\u5230\u4f60\u7684\u7ecf\u7406\u3002"),s.a.createElement("h2",null,"\u4fee\u590d\u4ee3\u7801"),s.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u8bc4\u5ba1\u4eba\u5458\u8bf4\u4ed6\u4eec\u4e0d\u7406\u89e3\u4ee3\u7801\u4e2d\u7684\u67d0\u4e9b\u5185\u5bb9\uff0c\u60a8\u7684\u7b2c\u4e00\u53cd\u5e94\u5e94\u8be5\u662f\u6f84\u6e05\u4ee3\u7801\u672c\u8eab\u3002\u5982\u679c\u65e0\u6cd5\u6f84\u6e05\u4ee3\u7801\uff0c\u5219\u6dfb\u52a0\u4e00\u4e2a\u4ee3\u7801\u6ce8\u91ca\uff0c\u89e3\u91ca\u4e3a\u4ec0\u4e48\u6709\u4ee3\u7801\u3002\u5982\u679c\u4e00\u6761\u6ce8\u91ca\u770b\u8d77\u6765\u6beb\u65e0\u610f\u4e49\uff0c\u90a3\u4e48\u53ea\u6709\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u624d\u5e94\u8be5\u5728\u4ee3\u7801\u8bc4\u5ba1\u5de5\u5177\u4e2d\u7ed9\u51fa\u89e3\u91ca\u3002"),s.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u8bc4\u5ba1\u4eba\u5458\u4e0d\u7406\u89e3\u60a8\u7684\u4ee3\u7801\uff0c\u90a3\u4e48\u5c06\u6765\u7684\u5176\u4ed6\u4ee3\u7801\u8bfb\u8005\u4e5f\u53ef\u80fd\u4e0d\u7406\u89e3\u3002\u5728\u4ee3\u7801\u8bc4\u5ba1\u5de5\u5177\u4e2d\u7f16\u5199\u54cd\u5e94\u5bf9\u5c06\u6765\u7684\u4ee3\u7801\u8bfb\u8005\u6ca1\u6709\u5e2e\u52a9\uff0c\u4f46\u662f\u6f84\u6e05\u4ee3\u7801\u6216\u6dfb\u52a0\u4ee3\u7801\u6ce8\u91ca\u786e\u5b9e\u5bf9\u4ed6\u4eec\u6709\u5e2e\u52a9\u3002"),s.a.createElement("h2",null,"\u72ec\u7acb\u601d\u8003"),s.a.createElement("p",{className:"indent-2"},"\u7f16\u5199CL\u9700\u8981\u505a\u5f88\u591a\u5de5\u4f5c\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4f1a\u5f88\u6ee1\u610f\u81ea\u5df1\u7ec8\u4e8e\u5b8c\u6210\u4e86\u4e00\u4efd\u8bc4\u4f30\u62a5\u544a\uff0c\u5e76\u786e\u4fe1\u4e0d\u9700\u8981\u518d\u505a\u66f4\u591a\u7684\u5de5\u4f5c\u3002\u56e0\u6b64\uff0c\u5f53\u8bc4\u5ba1\u4eba\u5458\u56de\u6765\u5bf9\u53ef\u4ee5\u6539\u8fdb\u7684\u5185\u5bb9\u63d0\u51fa\u8bc4\u8bba\u65f6\uff0c\u5f88\u5bb9\u6613\u672c\u80fd\u5730\u8ba4\u4e3a\u8fd9\u4e9b\u8bc4\u8bba\u662f\u9519\u8bef\u7684\uff0c\u5ba1\u67e5\u5458\u4e0d\u5fc5\u8981\u5730\u963b\u6b62\u4e86\u60a8\uff0c\u6216\u8005\u4ed6\u4eec\u5e94\u8be5\u8ba9\u60a8\u63d0\u4ea4CL\u3002\u7136\u800c\uff0c",s.a.createElement("b",null,"\u65e0\u8bba\u60a8\u73b0\u5728\u6709\u591a\u786e\u5b9a"),"\uff0c\u8bf7\u82b1\u70b9\u65f6\u95f4\u9000\u540e\u4e00\u6b65\uff0c\u8003\u8651\u8bc4\u5ba1\u4eba\u5458\u662f\u5426\u63d0\u4f9b\u4e86\u6709\u4ef7\u503c\u7684\u53cd\u9988\uff0c\u8fd9\u5c06\u6709\u52a9\u4e8e\u4ee3\u7801\u5e93\u548c\u8c37\u6b4c\u3002\u4f60\u5bf9\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2a\u95ee\u9898\u5e94\u8be5\u662f\uff0c\u201c\u8bc4\u5ba1\u4eba\u5458\u662f\u6b63\u786e\u7684\u5417?\u201d"),s.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u4f60\u4e0d\u80fd\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u5f88\u53ef\u80fd\u8bc4\u5ba1\u4eba\u5458\u9700\u8981\u6f84\u6e05\u4ed6\u4eec\u7684\u8bc4\u8bba\u3002"),s.a.createElement("p",{className:"indent-2"},"\u5982\u679c\u60a8\u5df2\u7ecf\u8003\u8651\u8fc7\u4e86\uff0c\u5e76\u4e14\u4ecd\u7136\u8ba4\u4e3a\u81ea\u5df1\u662f\u6b63\u786e\u7684\uff0c\u90a3\u4e48\u8bf7\u968f\u610f\u89e3\u91ca\u4e3a\u4ec0\u4e48\u60a8\u7684\u65b9\u6cd5\u66f4\u9002\u5408\u4ee3\u7801\u5e93\u3001\u7528\u6237\u548c/\u6216\u8c37\u6b4c\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8bc4\u5ba1\u4eba\u5458\u5b9e\u9645\u4e0a\u662f\u5728\u63d0\u4f9b\u5efa\u8bae\uff0c\u4ed6\u4eec\u5e0c\u671b\u60a8\u81ea\u5df1\u8003\u8651\u4ec0\u4e48\u662f\u6700\u597d\u7684\u3002\u5b9e\u9645\u4e0a\uff0c\u60a8\u53ef\u80fd\u77e5\u9053\u4e00\u4e9b\u5173\u4e8e\u7528\u6237\u3001\u4ee3\u7801\u5e93\u6216CL\u7684\u4fe1\u606f\uff0c\u800c\u8bc4\u5ba1\u4eba\u5458\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e9b\u4fe1\u606f\u3002\u628a\u5b83\u4eec\u586b\u8fdb\u53bb;\u7ed9\u4ed6\u4eec\u66f4\u591a\u7684\u80cc\u666f\u3002\u901a\u5e38\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u6280\u672f\u4e8b\u5b9e\u4e0e\u8bc4\u5ba1\u4eba\u5458\u8fbe\u6210\u4e00\u4e9b\u5171\u8bc6\u3002"),s.a.createElement("h2",null,"\u89e3\u51b3\u51b2\u7a81"),s.a.createElement("p",{className:"indent-2"},"\u89e3\u51b3\u51b2\u7a81\u7684\u7b2c\u4e00\u6b65\u5e94\u8be5\u662f\u4e0e\u4f60\u7684\u8bc4\u5ba1\u4eba\u5458\u8fbe\u6210\u5171\u8bc6\u3002\u5982\u679c\u60a8\u4e0d\u80fd\u8fbe\u6210\u5171\u8bc6\uff0c\u8bf7\u53c2\u9605",s.a.createElement(d.b,{to:"/codereview/1"},"\u4ee3\u7801\u8bc4\u5ba1\u6807\u51c6"),"\uff0c\u5b83\u7ed9\u51fa\u4e86\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5e94\u8be5\u9075\u5faa\u7684\u539f\u5219\u3002"))),s.a.createElement("div",{className:"directory"},s.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),n}(i.Component)},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(11),r=n(12),l=n(13),c=n(14),o=n(0),i=n.n(o),s=(n(38),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);r.setState({scrollTop:t})},r.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},r.state={articleTree:r.props.articleTree,scrollTop:null},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var r=document.getElementsByClassName("page-footer")[0],l=0;r;)l+=r.offsetTop,r=r.offsetParent;var c=document.body.scrollTop||document.documentElement.scrollTop;if((c+=a+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(a-c+l,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=o)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,r=n.length;if(document.getElementById("tree-num-0")&&r>0){for(var l=[],c=0;c<r;c++){var o=document.getElementById(n[c].name);l.push(o.offsetTop)}for(var s=l.findIndex((function(e){return e>a}))-1,m=0;m<r;m++)document.getElementById("tree-num-".concat(m)).className=m===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(r-1)).className="tree-num directory-item-active")}return i.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return i.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.articleTree;return n!==t.articleTree?{articleTree:n}:null}}]),n}(o.Component))},38:function(e,t,n){}}]);
//# sourceMappingURL=43.fc1ef5d0.chunk.js.map