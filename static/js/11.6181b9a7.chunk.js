(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[11,101],{217:function(e,a,t){},36:function(e,a,t){"use strict";var l=t(11),n=t(12),s=t(16),r=t(13),c=t(14),i=t(0),m=t.n(i),d=t(5),o=t(40),u=(t(37),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(s.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,l=e.length;t<l-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=o.a.length;a<t;a++)e[0]===o.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=o.a[a].section.length>0?o.a[a].section[e[e.length-1]]:o.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],s=0;n;)s+=n.offsetTop,n=n.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+t.offsetHeight)>s+e.offsetHeight)t.style="position:fixed;top:".concat(l-r+s,"px;transition:none");else{var c=window.scrollY;c>e.offsetHeight&&(a<c&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=c),a>c&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=c)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var s=[],r=0;r<n;r++){var c=document.getElementById(t[r].name);s.push(c.offsetTop)}for(var i=s.findIndex((function(e){return e>l}))-1,d=0;d<n;d++)document.getElementById("tree-num-".concat(d)).className=d===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(i.Component));a.a=Object(d.f)(u)},37:function(e,a,t){},429:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var l=t(11),n=t(12),s=t(13),r=t(14),c=t(0),i=t.n(c),m=t(36),d=t(164),o=(t(47),t(730)),u=(t(217),{theme:"monokai",mode:"CSS",readOnly:!0}),p=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"grid \u5e03\u5c40(\u4e8c)")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"justify-self"),i.a.createElement("p",null,"\u5728 CSS \u7f51\u683c\u4e2d\uff0c\u6bcf\u4e2a\u5355\u5143\u7684\u5185\u5bb9\u90fd\u4f4d\u4e8e\u4e00\u4e2a\u79f0\u4e3a\u5355\u5143\u683c\u7684\u6846\u4e2d\u3002\u53ef\u4ee5\u4f7f\u7528\u7f51\u683c\u5355\u5143\u4e0a\u7684 justify-self \u8bbe\u7f6e\u5185\u5bb9\u5728\u5355\u5143\u683c\u4e2d\u6c34\u5e73\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u5c5e\u6027\u7684\u503c\u4e3a stretch\uff0c\u5b83\u5c06\u4f7f\u5185\u5bb9\u586b\u5145\u6574\u4e2a\u5355\u5143\u683c\u7684\u5bbd\u5ea6\u3002\u8fd9\u4e2a CSS \u7f51\u683c\u5c5e\u6027\u4e5f\u63a5\u53d7\u5176\u4ed6\u503c:"),i.a.createElement("ul",null,i.a.createElement("li",null,"start"),i.a.createElement("p",null,"\u5185\u5bb9\u5bf9\u9f50\u5355\u5143\u683c\u5de6\u4fa7"),i.a.createElement("li",null,"center"),i.a.createElement("p",null,"\u5185\u5bb9\u5bf9\u9f50\u5355\u5143\u683c\u4e2d\u95f4"),i.a.createElement("li",null,"end"),i.a.createElement("p",null,"\u5185\u5bb9\u5bf9\u9f50\u5355\u5143\u683c\u53f3\u4fa7")),i.a.createElement("p",null,'\u5c06 "2" \u8bbe\u7f6e\u4e3a justify-self:center;'),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-6"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"align-self"),i.a.createElement("p",null,"\u6b64\u5c5e\u6027\u8bbe\u7f6e\u5185\u5bb9\u5728\u5355\u5143\u683c\u4e2d\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002"),i.a.createElement("p",null,'\u5c06 "3" \u8bbe\u7f6e\u4e3a align-self:end;'),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-7"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("div",{className:"tip",style:{margin:"10px 0"}},i.a.createElement("div",{className:"tip-content"},"\u7ecf\u5b9e\u8df5,\u7f51\u683c\u5bb9\u5668\u987b\u8bbe\u7f6e height \u6216 min-height \u5c5e\u6027,\u5176\u5b50\u5355\u5143\u7684 align-self \u5c5e\u6027\u65b9\u53ef\u751f\u6548\u3002")),i.a.createElement("h2",null,"justify-items"),i.a.createElement("p",null,"\u6709\u65f6\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b CSS \u7f51\u683c\u4e2d\u7684\u6240\u6709\u5355\u5143\u90fd\u5177\u6709\u76f8\u540c\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u53ef\u4ee5\u4f7f\u7528\u7f51\u683c\u5bb9\u5668\u7684 justify-items \u5c5e\u6027\u5c06\u540c\u65f6\u8bbe\u7f6e\u5b83\u4eec\u6c34\u5e73\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002"),i.a.createElement(d.a,{value:"justify-items:center;",options:u}),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-8"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"align-items"),i.a.createElement("p",null,"\u6b64\u5c5e\u6027\u5c06\u540c\u65f6\u8bbe\u7f6e\u6240\u6709\u5355\u5143\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002"),i.a.createElement(d.a,{value:"align-items:end;",options:u}),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-9"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"grid-template-areas"),i.a.createElement("p",null,"\u60a8\u53ef\u4ee5\u5c06\u7f51\u683c\u7684\u5355\u5143\u683c\u5206\u7ec4\u5230\u4e00\u4e2a\u533a\u57df\u4e2d\uff0c\u5e76\u4e3a\u8be5\u533a\u57df\u63d0\u4f9b\u81ea\u5b9a\u4e49\u540d\u79f0\u3002\u901a\u8fc7\u5728\u5bb9\u5668\u4e0a\u4f7f\u7528 rid-template-areas \u5c5e\u6027\u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),i.a.createElement(d.a,{value:'grid-template-areas:\n    "header header header"\n    "advert content content"\n    "footer footer footer";',options:u}),i.a.createElement("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5c06\u524d\u4e09\u4e2a\u5355\u5143\u5408\u5e76\u5230\u4e00\u4e2a\u540d\u4e3a header \u7684\u533a\u57df\u4e2d\u3002\u5e95\u90e8\u4e09\u4e2a\u5355\u5143\u683c\u7ec4\u6210\u4e00\u4e2a footer \u533a\u57df\uff0c\u5e76\u5728\u4e2d\u95f4\u4e00\u884c\u4e2d\u521b\u5efa\u4e24\u4e2a\u533a\u57df:advert \u548c content\u3002\u6ce8\u610f:\u4ee3\u7801\u4e2d\u7684\u6bcf\u4e2a\u5355\u8bcd\u8868\u793a\u4e00\u4e2a\u5355\u5143\u683c\uff0c\u6bcf\u4e00\u5bf9\u5f15\u53f7\u8868\u793a\u4e00\u884c\u3002\u9664\u4e86\u81ea\u5b9a\u4e49\u6807\u7b7e\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u53e5\u70b9(.)\u6765\u6307\u5b9a\u7f51\u683c\u4e2d\u7684\u7a7a\u5355\u5143\u683c\u3002"),i.a.createElement("h2",null,"grid-area"),i.a.createElement("p",null,"\u5728\u4e3a\u7f51\u683c\u5bb9\u5668\u521b\u5efa\u533a\u57df\u6a21\u677f\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f15\u7528\u6307\u5b9a\u7684\u540d\u79f0\u5c06\u5355\u5143\u653e\u7f6e\u5230\u81ea\u5b9a\u4e49\u533a\u57df\u4e2d\u3002\u4e3a\u6b64\uff0c\u8981\u5bf9\u8fd9\u6837\u7684\u5355\u5143\u4f7f\u7528 grid-area \u5c5e\u6027"),i.a.createElement(d.a,{value:"grid-area: footer;",options:u}),i.a.createElement("p",null,"\u8fd9\u8ba9\u7f51\u683c\u77e5\u9053\u5e0c\u671b\u8be5\u5355\u5143\u4f4d\u4e8e\u540d\u4e3a footer \u7684\u533a\u57df\u4e2d\u3002"),i.a.createElement("p",null,"\u4e3a \u201c5\u201d \u8bbe\u7f6e\u6b64\u5c5e\u6027"),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-10"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("p",null,"\u5982\u679c\u7f51\u683c\u6ca1\u6709\u4e00\u4e2a\u533a\u57df\u6a21\u677f\u6765\u53c2\u8003\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u533a\u57df\uff0c\u8ba9\u4e00\u4e2a\u5355\u5143\u50cf\u8fd9\u6837\u653e\u7f6e:"),i.a.createElement(d.a,{value:"grid-area: 3/1/4/4;",options:u}),i.a.createElement("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\u7684\u6570\u5b57\u662f gird \u5e03\u5c40(\u4e00)\u4e2d\u63d0\u5230\u7684\u884c\u53f7\uff0c\u5176\u4ee3\u8868\u4e86\u4e0b\u9762\u7684\u503c\uff1a"),i.a.createElement(d.a,{value:"grid-area: \u6c34\u5e73\u8d77\u59cb\u884c\u53f7 / \u5782\u76f4\u8d77\u59cb\u5217\u53f7 / \u6c34\u5e73\u7ec8\u6b62\u884c\u53f7 / \u5782\u76f4\u7ec8\u6b62\u5217\u53f7;",options:u}),i.a.createElement("p",null,"\u56e0\u6b64\uff0c\u8be5\u5355\u5143\u5c06\u4f7f\u7528\u7b2c3\u548c\u7b2c4\u884c\u4e4b\u95f4\u7684\u884c\uff0c\u4ee5\u53ca\u7b2c1\u548c\u7b2c4\u5217\u4e4b\u95f4\u7684\u5217\u3002"),i.a.createElement("p",null,"\u4e3a \u201c5\u201d \u8bbe\u7f6e\u6b64\u5c5e\u6027"),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-11"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"repeat()\u7f51\u683c\u91cd\u590d\u5355\u5143"),i.a.createElement("p",null,"\u5f53\u4f7f\u7528 grid-templatecolumns \u548c qrid-template-rows \u6765\u5b9a\u4e49\u7f51\u683c\u7684\u7ed3\u6784\u65f6\u3002\u8981\u4e3a\u521b\u5efa\u7684\u6bcf\u4e00\u884c\u6216\u6bcf\u4e00\u5217\u8f93\u5165\u503c\u3002"),i.a.createElement("p",null,"\u5047\u8bbe\u60f3\u8981\u4e00\u4e2a 100 \u884c\u9ad8\u5ea6\u76f8\u540c\u7684\u7f51\u683c\u3002\u4e0a\u9762\u7684\u65b9\u6cd5\u9700\u8981\u5206\u522b\u63d2\u5165100\u4e2a\u503c\uff0c\u5c31\u4e0d\u662f\u5f88\u5b9e\u7528\u4e86\u3002"),i.a.createElement("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u6709\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u6cd5\u2014\u901a\u8fc7\u4f7f\u7528 repeat \u51fd\u6570\uff0c\u5e76\u5728\u540e\u9762\u52a0\u4e0a\u9017\u53f7\u548c\u91cd\u590d\u7684\u503c\u6765\u6307\u5b9a\u91cd\u590d\u5217\u6216\u884c\u7684\u6b21\u6570\u3002"),i.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u521b\u5efa\u201c100 \u884c\u7f51\u683c\uff0c\u6bcf\u884c\u9ad850 px\u201d\u7684\u4f8b\u5b50\u3002"),i.a.createElement(d.a,{value:"grid-template-rows: repeat(100, 50px);",options:u}),i.a.createElement("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528repeat function\u91cd\u590d\u591a\u4e2a\u503c\uff0c\u5e76\u5728\u5b9a\u4e49\u7f51\u683c\u7ed3\u6784\u65f6\u5c06\u8be5\u51fd\u6570\u63d2\u5165\u5230\u5176\u4ed6\u503c\u4e2d\u3002\u5b83\u662f\u8fd9\u6837\u7684:"),i.a.createElement(d.a,{value:"grid-template-columns: repeat(2, 1fr 50px) 20px;",options:u}),i.a.createElement("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u7b49\u4ef7\u4e8e"),i.a.createElement(d.a,{value:"grid-template-columns: 1fr 50px 1fr 50px 20px;",options:u}),i.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50"),i.a.createElement(d.a,{value:".container {\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: repeat(3,1fr);\n    grid-gap: 10px;\n}",options:u}),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-12"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"\u4f7f\u7528 minmax()\u9650\u5236\u5927\u5c0f"),i.a.createElement("p",null,"\u8fd8\u6709\u53e6\u4e00\u4e2a\u5185\u7f6e\u51fd\u6570\u7528\u4e8e gridtemplate-columns \u548c grid-template-rows\uff0c\u79f0\u4e3a minmax\u3002\u5b83\u7528\u4e8e\u5728\u7f51\u683c\u5bb9\u5668\u66f4\u6539\u5927\u5c0f\u65f6\u9650\u5236\u5355\u5143\u7684\u5927\u5c0f\u3002\u4e3a\u6b64\uff0c\u60a8\u9700\u8981\u4e3a\u5355\u5143\u6307\u5b9a\u53ef\u63a5\u53d7\u7684\u5927\u5c0f\u8303\u56f4\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50:"),i.a.createElement(d.a,{value:"grid-template-columns: 100px minmax(50px, 200px);",options:u}),i.a.createElement("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0cgrid-template-columns \u88ab\u8bbe\u7f6e\u4e3a\u521b\u5efa\u4e24\u4e2a\u5217:\u7b2c\u4e00\u4e2a\u5217\u7684\u5bbd\u5ea6\u4e3a 100px\uff0c\u7b2c\u4e8c\u4e2a\u5217\u7684\u6700\u5c0f\u5bbd\u5ea6\u4e3a 50px\uff0c\u6700\u5927\u5bbd\u5ea6\u4e3a 200px"),i.a.createElement("p",null,"\u7ed3\u679c\u5982\u4e0b:"),i.a.createElement("div",{className:"grid-container grid-container-13"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("h2",null,"\u4f7f\u7528 auto-fill \u521b\u5efa\u5f39\u6027\u5e03\u5c40"),i.a.createElement("p",null,"repeat \u51fd\u6570\u5e26\u6709\u4e00\u4e2aauto-fill \u7684\u9009\u9879\u3002\u8fd9\u5141\u8bb8\u6839\u636e\u5bb9\u5668\u7684\u5927\u5c0f\u81ea\u52a8\u5728\u6240\u9700\u5927\u5c0f\u7684\u5217\u4e0a\u63d2\u5165\u5c3d\u53ef\u80fd\u591a\u7684\u884c\u3002\u521b\u5efa\u4f38\u7f29\u5e03\u5c40\u65f6\uff0c\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528 auto-fill \u4e0e minmax\uff0c\u50cf\u8fd9\u6837:"),i.a.createElement(d.a,{value:"repeat(auto-fill, minmax(60px, 1fr));",options:u}),i.a.createElement("p",null,"\u5f53\u5bb9\u5668\u6539\u53d8\u5927\u5c0f\u65f6\uff0c\u8fd9\u4e2a\u8bbe\u7f6e\u4f1a\u63d2\u5165 60px \u7684\u5217\u5e76\u62c9\u4f38\u5b83\u4eec\uff0c\u76f4\u5230\u53ef\u4ee5\u63d2\u5165\u53e6\u4e00\u4e2a\u5217\u4e3a\u6b62\u3002"),i.a.createElement("p",null,"\u6ce8\u610f:\u5982\u679c\u5bb9\u5668\u4e0d\u80fd\u5728\u4e00\u884c\u4e2d\u5bb9\u7eb3\u6240\u6709\u7684\u5355\u5143\u3002\u5b83\u4f1a\u628a\u4ed6\u4eec\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u4e00\u884c\u3002"),i.a.createElement("p",null,"\u5c06\u7b2c\u4e00\u4e2a\u5bb9\u5668\u7684 grid-template-columns \u8bbe\u7f6e\u4e3a\u6b64\u503c,\u7ed3\u679c\u5982\u4e0b\uff0c\u62d6\u52a8\u53f3\u4fa7",i.a.createElement("b",null,"\u5c16\u62ec\u53f7"),"\u4ee5\u67e5\u770b\u4e24\u4e2a\u5bb9\u5668\u7684\u533a\u522b\u3002"),i.a.createElement(o.ResizableBox,{width:300,height:316,axis:"x",handle:i.a.createElement("span",{className:"react-resizable-handle"}),minConstraints:[100,316],maxConstraints:[1/0,316]},i.a.createElement("div",null,i.a.createElement("div",{className:"grid-container grid-container-14"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("div",{className:"grid-container grid-container-15"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")))),i.a.createElement("h2",null,"\u4f7f\u7528 auto-fit \u521b\u5efa\u5f39\u6027\u5e03\u5c40"),i.a.createElement("p",null,"auto-fit \u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e auto-fill \u51e0\u4e4e\u76f8\u540c\u3002\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u5f53\u5bb9\u5668\u7684\u5927\u5c0f\u8d85\u8fc7\u6240\u6709\u5355\u5143\u7684\u603b\u548c\u65f6\uff0cauto-fill \u4f1a\u4e0d\u65ad\u63d2\u5165\u7a7a\u884c\u6216\u5217\uff0c\u5e76\u5c06\u5355\u5143\u63a8\u5230\u4e00\u8fb9\uff0c\u800c auto-fit \u4f1a\u6298\u53e0\u8fd9\u4e9b\u7a7a\u884c\u6216\u5217\uff0c\u5e76\u62c9\u4f38\u9879\u76ee\u4ee5\u9002\u5e94\u5bb9\u5668\u7684\u5927\u5c0f\u3002"),i.a.createElement("p",null,"\u6ce8\u610f:\u5982\u679c\u5bb9\u5668\u4e0d\u80fd\u5728\u4e00\u884c\u4e2d\u5bb9\u7eb3\u6240\u6709\u7684\u5355\u5143\u3002\u5b83\u4f1a\u628a\u4ed6\u4eec\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u4e00\u884c\u3002"),i.a.createElement(d.a,{value:"repeat(auto-fit, minmax(60px, 1fr));",options:u}),i.a.createElement("p",null,"\u5c06\u7b2c\u4e00\u4e2a\u5bb9\u5668\u7684 grid-template-columns \u8bbe\u7f6e\u4e3a\u6b64\u503c,\u7ed3\u679c\u5982\u4e0b\uff0c\u62d6\u52a8\u53f3\u4fa7",i.a.createElement("b",null,"\u5c16\u62ec\u53f7"),"\u4ee5\u67e5\u770b\u4e24\u4e2a\u5bb9\u5668\u7684\u533a\u522b\u3002"),i.a.createElement(o.ResizableBox,{width:300,height:316,axis:"x",handle:i.a.createElement("span",{className:"react-resizable-handle"}),minConstraints:[100,316],maxConstraints:[1/0,316]},i.a.createElement("div",null,i.a.createElement("div",{className:"grid-container grid-container-16"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")),i.a.createElement("div",{className:"grid-container grid-container-17"},i.a.createElement("div",{className:"d1"},"1"),i.a.createElement("div",{className:"d2"},"2"),i.a.createElement("div",{className:"d3"},"3"),i.a.createElement("div",{className:"d4"},"4"),i.a.createElement("div",{className:"d5"},"5")))))),i.a.createElement(m.a,null))}}]),t}(c.Component)},59:function(e,a,t){var l={"./apl/apl.js":[60,104],"./asciiarmor/asciiarmor.js":[61,105],"./asn.1/asn.1.js":[62,106],"./asterisk/asterisk.js":[63,107],"./brainfuck/brainfuck.js":[64,108],"./clike/clike.js":[48,7],"./clojure/clojure.js":[65,109],"./cmake/cmake.js":[66,110],"./cobol/cobol.js":[67,111],"./coffeescript/coffeescript.js":[49,112],"./commonlisp/commonlisp.js":[68,113],"./crystal/crystal.js":[69,114],"./css/css.js":[42,3],"./cypher/cypher.js":[70,115],"./d/d.js":[71,116],"./dart/dart.js":[72,7,117],"./diff/diff.js":[73,118],"./django/django.js":[74,2,3,80],"./dockerfile/dockerfile.js":[75,93],"./dtd/dtd.js":[76,119],"./dylan/dylan.js":[77,120],"./ebnf/ebnf.js":[78,121],"./ecl/ecl.js":[79,122],"./eiffel/eiffel.js":[80,123],"./elm/elm.js":[81,124],"./erlang/erlang.js":[82,125],"./factor/factor.js":[83,94],"./fcl/fcl.js":[84,126],"./forth/forth.js":[85,127],"./fortran/fortran.js":[86,128],"./gas/gas.js":[87,129],"./gfm/gfm.js":[88,66,92],"./gherkin/gherkin.js":[89,130],"./go/go.js":[90,131],"./groovy/groovy.js":[91,132],"./haml/haml.js":[92,2,3,83],"./handlebars/handlebars.js":[50,88],"./haskell-literate/haskell-literate.js":[93,97],"./haskell/haskell.js":[51,133],"./haxe/haxe.js":[94,134],"./htmlembedded/htmlembedded.js":[95,2,3,79],"./htmlmixed/htmlmixed.js":[41,2,3,98],"./http/http.js":[96,135],"./idl/idl.js":[97,136],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,137],"./jsx/jsx.js":[99,2,99],"./julia/julia.js":[100,138],"./livescript/livescript.js":[101,139],"./lua/lua.js":[102,140],"./markdown/markdown.js":[56,66],"./mathematica/mathematica.js":[103,141],"./mbox/mbox.js":[104,142],"./meta.js":[46],"./mirc/mirc.js":[105,143],"./mllike/mllike.js":[106,144],"./modelica/modelica.js":[107,145],"./mscgen/mscgen.js":[108,146],"./mumps/mumps.js":[109,147],"./nginx/nginx.js":[110,148],"./nsis/nsis.js":[111,95],"./ntriples/ntriples.js":[112,149],"./octave/octave.js":[113,150],"./oz/oz.js":[114,151],"./pascal/pascal.js":[115,152],"./pegjs/pegjs.js":[116,2,153],"./perl/perl.js":[117,154],"./php/php.js":[118,2,3,7,89],"./pig/pig.js":[119,155],"./powershell/powershell.js":[120,156],"./properties/properties.js":[121,157],"./protobuf/protobuf.js":[122,158],"./pug/pug.js":[57,2,3,65],"./puppet/puppet.js":[123,159],"./python/python.js":[52,160],"./q/q.js":[124,161],"./r/r.js":[125,162],"./rpm/rpm.js":[126,163],"./rst/rst.js":[127,82],"./ruby/ruby.js":[45,164],"./rust/rust.js":[128,96],"./sas/sas.js":[129,165],"./sass/sass.js":[54,3,166],"./scheme/scheme.js":[130,167],"./shell/shell.js":[131,168],"./sieve/sieve.js":[132,169],"./slim/slim.js":[133,2,3,84],"./smalltalk/smalltalk.js":[134,170],"./smarty/smarty.js":[135,171],"./solr/solr.js":[136,172],"./soy/soy.js":[137,2,3,90],"./sparql/sparql.js":[138,173],"./spreadsheet/spreadsheet.js":[139,174],"./sql/sql.js":[140,175],"./stex/stex.js":[53,176],"./stylus/stylus.js":[58,67],"./swift/swift.js":[141,177],"./tcl/tcl.js":[142,178],"./textile/textile.js":[143,179],"./tiddlywiki/tiddlywiki.js":[144,180],"./tiki/tiki.js":[145,181],"./toml/toml.js":[146,182],"./tornado/tornado.js":[147,2,3,81],"./troff/troff.js":[148,183],"./ttcn-cfg/ttcn-cfg.js":[150,184],"./ttcn/ttcn.js":[149,185],"./turtle/turtle.js":[151,186],"./twig/twig.js":[152,91],"./vb/vb.js":[153,187],"./vbscript/vbscript.js":[154,188],"./velocity/velocity.js":[155,189],"./verilog/verilog.js":[156,190],"./vhdl/vhdl.js":[157,191],"./vue/vue.js":[158,2,3,67,65,77],"./webidl/webidl.js":[159,192],"./xml/xml.js":[39,193],"./xquery/xquery.js":[160,194],"./yacas/yacas.js":[161,195],"./yaml-frontmatter/yaml-frontmatter.js":[162,100],"./yaml/yaml.js":[55,196],"./z80/z80.js":[163,197]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=59,e.exports=n}}]);
//# sourceMappingURL=11.6181b9a7.chunk.js.map