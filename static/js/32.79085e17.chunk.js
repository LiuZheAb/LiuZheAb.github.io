(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[32],{317:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n(11),a=n(12),l=n(13),r=n(14),i=n(0),c=n.n(i),m=(n(40),n(36)),s=n(164),u=n.n(s),d=u.a.GraphObject.make,g=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2()}},{key:"diagramRender1",value:function(){var e=d(u.a.Diagram,"myDiagramDiv1");e.layout=d(u.a.TreeLayout,{angle:90,layerSpacing:80,nodeSpacing:30,layerStyle:u.a.TreeLayout.LayerSiblings}),e.nodeTemplate=d(u.a.Node,"Auto",new u.a.Binding("location","loc"),{locationSpot:u.a.Spot.TopLeft},d(u.a.Shape,"RoundedRectangle",{fill:"#00e8ff"}),d(u.a.TextBlock,{margin:8},new u.a.Binding("text","text"))),e.linkTemplate=d(u.a.Link,d(u.a.Shape),d(u.a.Shape,{toArrow:"standard"})),e.model=d(u.a.GraphLinksModel,{nodeDataArray:[{key:0,text:"ToolManager"},{key:1,text:"MouseDownTools",isGroup:!0},{key:2,text:"MouseUpTools",isGroup:!0},{key:3,text:"MouseMoveTools",isGroup:!0},{key:4,text:"Action Tool",loc:new u.a.Point(0,0),group:1},{key:5,text:"Relinking Tool",loc:new u.a.Point(0,50),group:1},{key:6,text:"LinkReshaping Tool",loc:new u.a.Point(0,100),group:1},{key:7,text:"Resizing Tool",loc:new u.a.Point(0,150),group:1},{key:8,text:"Rotating Tool",loc:new u.a.Point(0,200),group:1},{key:9,text:"ContextMenu Tool",loc:new u.a.Point(0,0),group:2},{key:10,text:"TextEditing Tool",loc:new u.a.Point(0,50),group:2},{key:11,text:"ClickCreating Tool",loc:new u.a.Point(0,100),group:2},{key:12,text:"ClickSelecting Tool",loc:new u.a.Point(0,150),group:2},{key:13,text:"Linking Tool",loc:new u.a.Point(0,0),group:3},{key:14,text:"Dragging Tool",loc:new u.a.Point(0,50),group:3},{key:15,text:"DragSelecting Tool",loc:new u.a.Point(0,100),group:3},{key:16,text:"Panning Tool",loc:new u.a.Point(0,150),group:3}],linkDataArray:[{from:0,to:1},{from:0,to:2},{from:0,to:3}]})}},{key:"diagramRender2",value:function(){var e=d(u.a.Diagram,"myDiagramDiv2");e.nodeTemplate=d(u.a.Node,"Auto",new u.a.Binding("location","loc"),{locationSpot:u.a.Spot.Center},d(u.a.Shape,"RoundedRectangle",{fill:"lightblue",strokeWidth:0}),d(u.a.TextBlock,{margin:8},new u.a.Binding("text","text"))),e.linkTemplate=d(u.a.Link,new u.a.Binding("curve","curve"),d(u.a.Shape),d(u.a.Shape,{toArrow:"OpenTriangle"}),d(u.a.TextBlock,new u.a.Binding("text","text"),new u.a.Binding("segmentOrientation","segmentOrientation"),new u.a.Binding("segmentOffset","segmentOffset"),new u.a.Binding("alignmentFocus","alignmentFocus"))),e.model=d(u.a.GraphLinksModel,{nodeDataArray:[{key:0,text:"toolManager searches\n tool list (i.e.\n mouseDownTools)",loc:new u.a.Point(0,0)},{key:1,text:"canStart()",loc:new u.a.Point(0,100)},{key:2,text:"toolManager.currentTool\n = this.tool",loc:new u.a.Point(0,200)},{key:3,text:"doActivate()",loc:new u.a.Point(0,280)},{key:4,text:"doStart()",loc:new u.a.Point(0,360)},{key:5,text:"Tool is active",loc:new u.a.Point(0,440)},{key:6,text:"doMouseDown()\ndoMouseUp()\ndoMouseMove()\ndoKeyDown()\ndoKeyUp()",loc:new u.a.Point(-250,540)},{key:7,text:"doCancel()",loc:new u.a.Point(250,540)},{key:8,text:"stopTool()",loc:new u.a.Point(0,640)},{key:9,text:"toolManager.currentTool\n = toolManager.defaultTool",loc:new u.a.Point(0,720)},{key:10,text:"doDeactivate()",loc:new u.a.Point(0,800)},{key:11,text:"doStop()",loc:new u.a.Point(0,880)}],linkDataArray:[{from:0,to:1,text:"Finds this tool",alignmentFocus:u.a.Spot.Left,segmentOffset:new u.a.Point(0,-8)},{from:1,to:2,text:"Returns true",alignmentFocus:u.a.Spot.Left,segmentOffset:new u.a.Point(0,-8)},{from:2,to:3},{from:3,to:4},{from:4,to:5},{from:5,to:6,text:"Receives input",curve:u.a.Link.Bezier,segmentOrientation:u.a.Link.OrientUpright,alignmentFocus:u.a.Spot.Top},{from:5,to:7,text:"User cancels tool",segmentOrientation:u.a.Link.OrientUpright,alignmentFocus:u.a.Spot.Bottom},{from:6,to:5,text:"Input is not terminal",curve:u.a.Link.Bezier,segmentOrientation:u.a.Link.OrientUpright,alignmentFocus:u.a.Spot.Top},{from:6,to:8,text:"input is terminal",segmentOrientation:u.a.Link.OrientUpright,alignmentFocus:u.a.Spot.Top},{from:7,to:8},{from:8,to:9},{from:9,to:10},{from:10,to:11}]})}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"GoJS\u5de5\u5177\u2014\u2014\u7b2c\u4e8c\u8282 \u6982\u8ff0")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"ToolManager"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5de5\u5177\u5904\u7406\u8f93\u5165\u4e8b\u4ef6"),c.a.createElement("li",null,"\u5728Diagram.currentTool\u4e2d\u4f7f\u7528(\u9ed8\u8ba4\u662fToolManager)"),c.a.createElement("li",null,"ToolManager\u6709\u6bcf\u4e2a\u5de5\u5177\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b")),c.a.createElement("ul",{"data-lake-indent":"1"},c.a.createElement("li",null,"ToolManager\u6839\u636eInputEvent(\u5373MouseDown\uff0cMouseMove\u2026)\u6765\u51b3\u5b9a\u4f7f\u7528\u54ea\u4e2a\u5de5\u5177\u6765\u521b\u5efacurrentTool")),c.a.createElement("p",null,"\u9f20\u6807\u4e8b\u4ef6\u7c7b\u578b\u5982\u4e0b\u6240\u793a:"),c.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:700,height:400,border:"none"}}),c.a.createElement("p",null,"ToolManager\u5904\u7406InputEvent\u7684\u6d41\u7a0b\u5982\u4e0b\u6240\u793a:"),c.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:700,height:1e3,border:"none"}}),c.a.createElement("ul",null,c.a.createElement("li",null,"isActive:Tool\u662f\u542f\u52a8\u8fd8\u662f\u5df2\u7ecf\u5728\u5de5\u4f5c\u4e86"),c.a.createElement("li",null,"isEnabled:\u5224\u65ad\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u9f20\u6807\u4e8b\u4ef6\u542f\u52a8Tool"),c.a.createElement("li",null,"canStart():\u67e5\u770bTool\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u9f20\u6807\u6216\u89e6\u6478\u4e8b\u4ef6\u542f\u52a8"),c.a.createElement("li",null,"doActivate():\u5c06isActive\u8bbe\u7f6e\u4e3atrue")),c.a.createElement("h2",null,"CommandHandler"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5b9e\u73b0\u8bf8\u5982deleteselection()\u6216redo()\u4e4b\u7c7b\u7684\u547d\u4ee4"),c.a.createElement("li",null,"\u5305\u62ec\u952e\u76d8\u4e8b\u4ef6\u5904\u7406(\u5982Ctrl-C\u7528\u4e8e\u590d\u5236\uff0cCtrl-V\u7528\u4e8e\u7c98\u8d34\u2026)"),c.a.createElement("li",null,"\u53ef\u4ee5\u5b50\u7c7b\u5316\u6216\u6269\u5c55")),c.a.createElement("h2",null,"\u4fee\u6539Tool"),c.a.createElement("ul",null,c.a.createElement("li",null,"Tool\u884c\u4e3a\u53ef\u4ee5\u901a\u8fc7\u6539\u53d8Diagram Part\u6216\u5355\u4e2aGraphObject\u7684\u5c5e\u6027\u6765\u4fee\u6539"),c.a.createElement("li",null,"\u8fd8\u53ef\u4ee5\u8986\u76d6Tool\u65b9\u6cd5\u6216\u5b50\u7c7b\u5316Tool")),c.a.createElement("h2",null,"Adornment"),c.a.createElement("ul",null,c.a.createElement("li",null,"Tool\u7ecf\u5e38\u4f7f\u7528Adornment"),c.a.createElement("li",null,"\u8fd9\u662f\u4e00\u79cd\u4e0e\u53e6\u4e00Part(Adornment.adornedPart)\u76f8\u5173\u8054\u7684\u7279\u6b8aPart")),c.a.createElement("p",null,"\u5982\u56fe\u6240\u793a"),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:n(278),alt:""})),c.a.createElement("p",null,c.a.createElement("br",null)),c.a.createElement("p",null,c.a.createElement("br",null)),c.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/17toolsOverview.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/17toolsOverview.html")))),c.a.createElement(m.a,null))}}]),i}(i.Component)},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(11),a=n(12),l=n(15),r=n(13),i=n(14),c=n(0),m=n.n(c),s=(n(37),function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);a.setState({scrollTop:t})},a.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},a.state={articleTree:[],scrollTop:null},a.getArticleTree=a.getArticleTree.bind(Object(l.a)(a)),a}return Object(a.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0;n<e.length-1;n++){var o=e[n].nodeName;"H2"!==o&&"H3"!==o||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],o=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var a=document.getElementsByClassName("page-footer")[0],l=0;a;)l+=a.offsetTop,a=a.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=o+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(o-r+l,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=i)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,o=t.scrollTop,a=n.length;if(document.getElementById("tree-num-0")&&a>0){for(var l=[],r=0;r<a;r++){var i=document.getElementById(n[r].name);l.push(i.offsetTop)}for(var c=l.findIndex((function(e){return e>o}))-1,s=0;s<a;s++)document.getElementById("tree-num-".concat(s)).className=s===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(a-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return m.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(c.Component))},37:function(e,t,n){},40:function(e,t,n){}}]);
//# sourceMappingURL=32.79085e17.chunk.js.map