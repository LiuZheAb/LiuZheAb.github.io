(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[56],{36:function(e,t,n){"use strict";var a=n(11),l=n(12),c=n(16),r=n(13),m=n(14),s=n(0),i=n.n(s),o=n(5),u=n(40),d=(n(37),function(e){Object(m.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(c.a)(l)),l}return Object(l.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0,a=e.length;n<a-1;n++){var l=e[n].nodeName;"H2"!==l&&"H3"!==l||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,n=u.a.length;t<n;t++)e[0]===u.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[t].section.length>0?u.a[t].section[e[e.length-1]]:u.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],c=0;l;)c+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+n.offsetHeight)>c+e.offsetHeight)n.style="position:fixed;top:".concat(a-r+c,"px;transition:none");else{var m=window.scrollY;m>e.offsetHeight&&(t<m&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=m),t>m&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=m)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,l=n.length;if(document.getElementById("tree-num-0")&&l>0){for(var c=[],r=0;r<l;r++){var m=document.getElementById(n[r].name);c.push(m.offsetTop)}for(var s=c.findIndex((function(e){return e>a}))-1,o=0;o<l;o++)document.getElementById("tree-num-".concat(o)).className=o===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return i.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(s.Component));t.a=Object(o.f)(d)},365:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n(11),l=n(12),c=n(13),r=n(14),m=n(0),s=n.n(m),i=n(36),o=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"\u5199\u51fa\u597d\u7684 CL \u6587\u6863")),s.a.createElement("div",{className:"article-content"},s.a.createElement("p",{className:"indent-2"}," CL \u6587\u6863\u662f\u5bf9",s.a.createElement("b",null,"\u6b63\u5728\u8fdb\u884c\u7684\u66f4\u6539\u53ca\u5176\u539f\u56e0\u7684\u516c\u5f00\u8bb0\u5f55"),"\u3002\u5b83\u5c06\u6210\u4e3a\u6211\u4eec\u7248\u672c\u63a7\u5236\u5386\u53f2\u7684\u4e00\u4e2a\u6c38\u4e45\u90e8\u5206\uff0c\u5e76\u4e14\u53ef\u80fd\u4f1a\u88ab\u6570\u767e\u4eba\u9605\u8bfb\uff0c\u800c\u4e0d\u662f\u60a8\u7684\u8bc4\u5ba1\u4eba\u5458\u3002"),s.a.createElement("p",{className:"indent-2"},"\u672a\u6765\u7684\u5f00\u53d1\u4eba\u5458\u5c06\u6839\u636e\u60a8\u7684 CL \u7684\u6587\u6863\u6765\u641c\u7d22\u5b83\u3002\u5c06\u6765\u6709\u4eba\u53ef\u80fd\u4f1a\u5bfb\u627e\u4f60\u7684\u6539\u53d8\uff0c\u56e0\u4e3a\u4ed6\u4eec\u5bf9\u4f60\u7684\u6539\u53d8\u6709\u5fae\u5f31\u7684\u8bb0\u5fc6\uff0c\u4f46\u5374\u6ca1\u6709\u73b0\u6210\u7684\u7ec6\u8282\u3002\u5982\u679c\u6240\u6709\u91cd\u8981\u7684\u4fe1\u606f\u90fd\u5728\u4ee3\u7801\u4e2d\uff0c\u800c\u4e0d\u662f\u6587\u6863\u4e2d\uff0c\u90a3\u4e48\u67e5\u627e CL \u5c31\u4f1a\u56f0\u96be\u5f97\u591a\u3002"),s.a.createElement("h2",null,"\u7b2c\u4e00\u884c"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u5bf9\u6b63\u5728\u505a\u7684\u4e8b\u60c5\u505a\u4e00\u4e2a\u7b80\u77ed\u7684\u603b\u7ed3\u3002"),s.a.createElement("li",null,"\u5b8c\u6574\u7684\u53e5\u5b50\uff0c\u5199\u7684\u597d\u50cf\u5b83\u662f\u4e00\u4e2a\u547d\u4ee4\u3002"),s.a.createElement("li",null,"\u540e\u9762\u8ddf\u7740\u7a7a\u884c\u3002")),s.a.createElement("p",{className:"indent-2"}," CL \u6587\u6863\u7684",s.a.createElement("b",null,"\u7b2c\u4e00\u884c"),"\u5e94\u8be5\u662f\u4e00\u4e2a\u7b80\u77ed\u7684\u603b\u7ed3\uff0c\u5177\u4f53\u8bf4\u660e CL \u6b63\u5728",s.a.createElement("b",null,"\u505a\u4ec0\u4e48"),"\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u7a7a\u767d\u884c\u3002\u8fd9\u5c31\u662f\u672a\u6765\u7684\u5927\u90e8\u5206\u4ee3\u7801\u641c\u7d22\u8005\u4f1a\u770b\u5230\u5f53\u4ed6\u4eec\u6d4f\u89c8\u4e00\u6bb5\u4ee3\u7801\u7248\u672c\u63a7\u5236\u7684\u5386\u53f2,\u8fd9\u7b2c\u4e00\u884c\u5e94\u8be5\u8db3\u591f\u7684\u4fe1\u606f,\u4ed6\u4eec\u4e0d\u9700\u8981\u9605\u8bfb\u4f60\u7684 CL \u6216\u6574\u4e2a\u6587\u6863\u53ea\u662f\u4e3a\u4e86\u5f97\u5230\u4f60\u7684 CL \u7a76\u7adf\u505a\u4e86\u4ec0\u4e48\u3002"),s.a.createElement("p",{className:"indent-2"},"\u6309\u7167\u4f20\u7edf\uff0c CL \u6587\u6863\u7684\u7b2c\u4e00\u884c\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u53e5\u5b50\uff0c\u5199\u8d77\u6765\u5c31\u50cf\u4e00\u4e2a\u547d\u4ee4(\u4e00\u4e2a\u7948\u4f7f\u53e5)\u3002\u4f8b\u5982\uff0c\u8bf4\u201c\u5220\u9664 FizzBuzz RPC \u5e76\u7528\u65b0\u7cfb\u7edf\u66ff\u6362\u5b83\u201d\uff0c\u800c\u4e0d\u662f\u201c\u5c06\u8981\u5220\u9664 FizzBuzz RPC \u5e76\u5c06\u7528\u65b0\u7cfb\u7edf\u66ff\u6362\u5b83\u201d\u3002\u4e0d\u8fc7\uff0c\u4f60\u4e0d\u5fc5\u628a\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u5199\u6210\u7948\u4f7f\u53e5\u3002"),s.a.createElement("h2",null,"\u4e3b\u4f53\u63d0\u4f9b\u4fe1\u606f"),s.a.createElement("p",{className:"indent-2"},"\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u5e94\u8be5\u662f\u4fe1\u606f\u4e30\u5bcc\u7684\u3002\u5b83\u53ef\u80fd\u5305\u62ec\u5bf9\u6b63\u5728\u89e3\u51b3\u7684\u95ee\u9898\u7684\u7b80\u8981\u63cf\u8ff0\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u8fd9\u662f\u6700\u597d\u7684\u65b9\u6cd5\u3002\u5982\u679c\u8fd9\u79cd\u65b9\u6cd5\u6709\u4efb\u4f55\u7f3a\u70b9\uff0c\u5e94\u8be5\u63d0\u5230\u3002\u5982\u679c\u76f8\u5173\uff0c\u5305\u62ec\u80cc\u666f\u4fe1\u606f\uff0c\u4f8b\u5982 bug \u53f7\u3001\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c\u548c\u8bbe\u8ba1\u6587\u6863\u7684\u94fe\u63a5\u3002"),s.a.createElement("p",{className:"indent-2"},"\u5373\u4f7f\u662f\u5f88\u5c0f\u578b CL \u4e5f\u9700\u8981\u6ce8\u610f\u4e00\u4e9b\u7ec6\u8282\u3002\u5c06 CL \u653e\u5728\u4e0a\u4e0b\u6587\u4e2d\u3002"),s.a.createElement("h2",null,"\u574f\u7684 CL \u6587\u6863"),s.a.createElement("p",{className:"indent-2"},"\u201c\u4fee\u590d bug \u201d\u662f\u4e00\u4e2a\u4e0d\u5408\u9002\u7684 CL \u6587\u6863\u3002\u4ec0\u4e48\u9519\u8bef?\u4f60\u505a\u4e86\u4ec0\u4e48\u6765\u4fee\u7406\u5b83?\u5176\u4ed6\u7c7b\u4f3c\u7684\u4e0d\u826f\u6587\u6863\u5305\u62ec:"),s.a.createElement("ul",{className:"indent-2"},s.a.createElement("li",null,"\u4fee\u590d"),s.a.createElement("li",null,"\u6dfb\u52a0\u8865\u4e01"),s.a.createElement("li",null,"\u5c06\u4ee3\u7801\u4ece A \u79fb\u52a8\u5230 B"),s.a.createElement("li",null,"\u7b2c 1 \u9636\u6bb5"),s.a.createElement("li",null,"\u6dfb\u52a0\u4fbf\u5229\u529f\u80fd"),s.a.createElement("li",null,"\u5220\u9664\u5947\u602a\u7684\u5730\u5740")),s.a.createElement("p",{className:"indent-2"},"\u5176\u4e2d\u4e00\u4e9b\u662f\u771f\u5b9e\u7684 CL \u6587\u6863\u3002\u5b83\u4eec\u7684\u4f5c\u8005\u53ef\u80fd\u8ba4\u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e86\u6709\u7528\u7684\u4fe1\u606f\uff0c\u4f46\u662f\u5b83\u4eec\u6ca1\u6709\u8fbe\u5230 CL \u6587\u6863\u7684\u76ee\u7684\u3002"),s.a.createElement("h2",null,"\u597d\u7684 CL \u6587\u6863"),s.a.createElement("p",{className:"indent-2"},"\u4e0b\u9762\u662f\u4e00\u4e9b\u5f88\u597d\u7684\u4f8b\u5b50\u3002"),s.a.createElement("h3",null,"\u529f\u80fd\u53d8\u5316"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"rpc: \u5220\u9664 RPC \u670d\u52a1\u5668\u6d88\u606f\u81ea\u7531\u5217\u8868\u4e0a\u7684\u5927\u5c0f\u9650\u5236\u3002")),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u50cf FizzBuzz \u8fd9\u6837\u7684\u670d\u52a1\u5668\u62e5\u6709\u975e\u5e38\u5927\u7684\u6d88\u606f\uff0c\u5e76\u4e14\u53ef\u4ee5\u4ece\u91cd\u7528\u4e2d\u83b7\u76ca\u3002\u4f7f\u81ea\u7531\u5217\u8868\u66f4\u5927\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u7f13\u6162\u5730\u91ca\u653e\u81ea\u7531\u5217\u8868\u6761\u76ee\uff0c\u4ee5\u4fbf\u7a7a\u95f2\u670d\u52a1\u5668\u6700\u7ec8\u91ca\u653e\u6240\u6709\u81ea\u7531\u5217\u8868\u6761\u76ee\u3002")),s.a.createElement("p",{className:"indent-2"},"\u524d\u51e0\u53e5\u8bdd\u63cf\u8ff0\u4e86 CL \u7684\u5b9e\u9645\u529f\u80fd\u3002\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u5c06\u8ba8\u8bba\u6b63\u5728\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u4e3a\u4ec0\u4e48\u8fd9\u662f\u4e00\u4e2a\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u53ca\u5173\u4e8e\u7279\u5b9a\u5b9e\u73b0\u7684\u66f4\u591a\u4fe1\u606f\u3002"),s.a.createElement("h3",null,"\u91cd\u6784"),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u4f7f\u7528\u8ba1\u65f6\u5668\u6784\u9020\u4efb\u52a1\uff0c\u4ee5\u4f7f\u7528\u5176 TimeStr \u548c Now \u65b9\u6cd5\u3002")),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u5411 Task \u6dfb\u52a0\u4e00\u4e2a Now \u65b9\u6cd5\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5220\u9664 borglet() getter \u65b9\u6cd5(OOMCandidate \u53ea\u4f7f\u7528\u8be5\u65b9\u6cd5\u6765\u8c03\u7528 borglet's Now \u65b9\u6cd5)\u3002\u8fd9\u5c06\u66ff\u6362 Borglet \u4e0a\u59d4\u6258\u7ed9\u8ba1\u65f6\u5458\u7684\u65b9\u6cd5\u3002")),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u73b0\u5728\u5141\u8bb8\u4efb\u52a1\u63d0\u4f9b\u662f\u6d88\u9664\u5bf9Borglet\u4f9d\u8d56\u7684\u4e00\u6b65\u3002\u6700\u7ec8\uff0c\u4f9d\u8d56\u4e8e\u73b0\u5728\u5b8c\u6210\u4efb\u52a1\u7684\u534f\u4f5c\u8005\u5e94\u8be5\u88ab\u66f4\u6539\u4e3a\u76f4\u63a5\u4f7f\u7528\u8ba1\u65f6\u5668\uff0c\u4f46\u8fd9\u662f\u5bf9\u5c0f\u6b65\u9aa4\u91cd\u6784\u7684\u4e00\u79cd\u9002\u5e94\u3002")),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u7ee7\u7eed\u91cd\u6784 Borglet \u5c42\u6b21\u7ed3\u6784\u7684\u957f\u671f\u76ee\u6807\u3002")),s.a.createElement("p",{className:"indent-2"},"\u7b2c\u4e00\u884c\u63cf\u8ff0\u4e86 CL \u505a\u4e86\u4ec0\u4e48\uff0c\u4ee5\u53ca\u8fd9\u662f\u5982\u4f55\u4ece\u8fc7\u53bb\u7684\u53d8\u5316\u3002\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u8ba8\u8bba\u4e86\u7279\u5b9a\u7684\u5b9e\u73b0\u3001 CL \u7684\u4e0a\u4e0b\u6587\u3001\u89e3\u51b3\u65b9\u6848\u5e76\u4e0d\u7406\u60f3\u4ee5\u53ca\u672a\u6765\u53ef\u80fd\u7684\u65b9\u5411\u3002\u8fd9\u4e5f\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u79cd\u53d8\u5316\u3002"),s.a.createElement("h3",null,"\u9700\u8981\u4e00\u4e9b\u4e0a\u4e0b\u6587\u7684\u5c0f CL "),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u4e3a status.py \u521b\u5efa Python3 \u6784\u5efa\u89c4\u5219\u3002")),s.a.createElement("p",{className:"indent-2"},s.a.createElement("em",null,"\u8fd9\u5141\u8bb8\u5df2\u7ecf\u5728 Python3 \u4e2d\u4f7f\u7528\u8be5\u89c4\u5219\u7684\u6d88\u8d39\u8005\u4f9d\u8d56\u4e8e\u539f\u59cb\u72b6\u6001\u6784\u5efa\u89c4\u5219\u65c1\u8fb9\u7684\u89c4\u5219\uff0c\u800c\u4e0d\u662f\u4f9d\u8d56\u4e8e\u4ed6\u4eec\u81ea\u5df1\u6811\u4e2d\u7684\u67d0\u4e2a\u5730\u65b9\u3002\u5b83\u9f13\u52b1\u65b0\u7528\u6237\u5c3d\u53ef\u80fd\u4f7f\u7528 Python3 \uff0c\u800c\u4e0d\u662f Python2 \uff0c\u5e76\u663e\u8457\u7b80\u5316\u4e86\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u7684\u4e00\u4e9b\u81ea\u52a8\u6784\u5efa\u6587\u4ef6\u91cd\u6784\u5de5\u5177\u3002")),s.a.createElement("p",{className:"indent-2"},"\u7b2c\u4e00\u53e5\u8bdd\u63cf\u8ff0\u4e86\u5b9e\u9645\u5728\u505a\u4ec0\u4e48\u3002\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u89e3\u91ca\u4e86\u4e3a\u4ec0\u4e48\u8981\u8fdb\u884c\u66f4\u6539\uff0c\u5e76\u4e3a\u5ba1\u9605\u8005\u63d0\u4f9b\u4e86\u5f88\u591a\u4e0a\u4e0b\u6587\u3002"),s.a.createElement("h2",null,"\u5728\u63d0\u4ea4 CL \u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u6587\u6863"),s.a.createElement("p",{className:"indent-2"}," CL \u5728\u8bc4\u5ba1\u671f\u95f4\u53ef\u80fd\u4f1a\u53d1\u751f\u663e\u8457\u7684\u53d8\u5316\u3002\u5728\u63d0\u4ea4 CL \u4e4b\u524d\uff0c\u6709\u5fc5\u8981\u68c0\u67e5 CL \u6587\u6863\uff0c\u4ee5\u786e\u4fdd\u6587\u6863\u4ecd\u7136\u53cd\u6620 CL \u6240\u505a\u7684\u5de5\u4f5c\u3002"))),s.a.createElement(i.a,null))}}]),n}(m.Component)},37:function(e,t,n){}}]);
//# sourceMappingURL=56.b4b1b485.chunk.js.map