(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[26],{38:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(8),n=t(9),i=t(10),r=t(11),s=t(0),o=t.n(s),m=(t(39),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView()}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],i=0;n;)i+=n.offsetTop,n=n.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+t.offsetHeight)>i)t.style="position:fixed;top:".concat(l-r+i-e.offsetHeight,"px;transition:none");else{var s=window.scrollY;t&&(s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var i=[],r=0;r<n;r++){var s=document.getElementById(t[r].name);i.push(s.offsetTop)}for(var m=i.findIndex((function(e){return e>l}))-1,d=0;d<n;d++)document.getElementById("tree-num-".concat(d)).className=d===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return o.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(s.Component))},39:function(e,a,t){},419:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var l=t(8),n=t(9),i=t(15),r=t(10),s=t(11),o=t(0),m=t.n(o),d=t(164),c=(t(59),t(38)),g=t(57),h=t.n(g),p=h.a.GraphObject.make,u=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={articleTree:[]},n.getArticleTree=n.getArticleTree.bind(Object(i.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u9762\u677f(Grid Panel)",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=p(h.a.Diagram,"myDiagramDiv1");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50)}},{key:"diagramRender2",value:function(){var e=p(h.a.Diagram,"myDiagramDiv2");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},p(h.a.Shape,"lineH",{stroke:"blue"}),p(h.a.Shape,"lineV",{stroke:"green"}))}},{key:"diagramRender3",value:function(){var e=p(h.a.Diagram,"myDiagramDiv3");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},p(h.a.Shape,"lineH",{stroke:"blue",interval:5}),p(h.a.Shape,"lineV",{stroke:"green",interval:5}),p(h.a.Shape,"lineH",{stroke:"lightblue"}),p(h.a.Shape,"lineV",{stroke:"lightgreen"}))}},{key:"diagramRender4",value:function(){var e=p(h.a.Diagram,"myDiagramDiv4");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},p(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2}))}},{key:"diagramRender5",value:function(){var e=p(h.a.Diagram,"myDiagramDiv5");e.grid.visible=!0,e.nodeTemplate=p(h.a.Node,"Auto",{resizable:!0},p(h.a.Shape,"Rectangle",{fill:"lightgray"}),p(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=p(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},p(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2,opacity:.25}),p(h.a.Shape,"BarV",{fill:"lime",height:50,interval:2,opacity:.25}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS\u9762\u677f\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u9762\u677f(Grid Panel)")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"Grid Panels"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u663e\u793a\u6309\u4e00\u5b9a\u95f4\u9694\u7ed8\u5236\u7684\u7ebf\u6761\u7f51\u683c"),m.a.createElement("li",null,"Diagram.grid\u662f\u4e00\u4e2aGrid Panel"),m.a.createElement("li",null,"\u8bbe\u7f6e\u4e86Diagram.grid\u540e,Part\u53ef\u4ee5\u6839\u636e\u7f51\u683c\u5bf9\u9f50\u6216\u8c03\u6574\u5927\u5c0f"),m.a.createElement("li",null,"Grid Panel\u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u662fShape")),m.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b:"),m.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.grid.visible = true;\nmyDiagram.nodeTemplate = $(go.Node, "Auto", {\n        resizable: true\n    },\n    $(go.Shape, "Rectangle", {\n        fill: "lightgray"\n    }),\n    $(go.TextBlock, {\n        margin: 5\n    }, new go.Binding("text", "key")));\nlet nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}];\nmyDiagram.model = new go.GraphLinksModel(nodeDataArray);\nmyDiagram.toolManager.draggingTool.isGridSnapEnabled = true;\nmyDiagram.toolManager.resizingTool.isGridSnapEnabled = true;\nmyDiagram.grid.gridCellSize = new go.Size(50, 50);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h2",null,"\u8bbe\u7f6e\u7f51\u683c\u6837\u5f0f"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green"\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h2",null,"Shape.Interval"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u6307\u5b9a\u5728\u7f51\u683c\u4e2d\u7ed8\u5236Shape\u7684\u9891\u7387(\u4ee5gridCellSize\u7684\u500d\u6570\u8ba1\u7b97)"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:1"),m.a.createElement("li",null,"\u5141\u8bb8\u503c:\u6b63\u6574\u6570")),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue",\n            interval: 5\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green",\n            interval: 5\n        }),\n        $(go.Shape, "lineH", {\n            stroke: "lightblue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "lightgreen"\n        }),\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h3",null,"\u8bbe\u7f6e\u4e3a\u6761\u5e26\u72b6"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("h3",null,"\u652f\u6301\u900f\u660e\u5ea6\u5c5e\u6027"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        }),\n        $(go.Shape, "BarV", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{width:"100%",maxWidth:"600px",height:"400px"}}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html")))),m.a.createElement("div",{className:"directory"},m.a.createElement(c.a,{articleTree:this.state.articleTree})))}}]),t}(o.Component)},58:function(e,a,t){var l={"./apl/apl.js":[60,56],"./asciiarmor/asciiarmor.js":[61,57],"./asn.1/asn.1.js":[62,58],"./asterisk/asterisk.js":[63,59],"./brainfuck/brainfuck.js":[64,60],"./clike/clike.js":[46,3],"./clojure/clojure.js":[65,61],"./cmake/cmake.js":[66,62],"./cobol/cobol.js":[67,63],"./coffeescript/coffeescript.js":[47,64],"./commonlisp/commonlisp.js":[68,65],"./crystal/crystal.js":[69,66],"./css/css.js":[42,2],"./cypher/cypher.js":[70,67],"./d/d.js":[71,68],"./dart/dart.js":[72,3,69],"./diff/diff.js":[73,70],"./django/django.js":[74,1,2,35],"./dockerfile/dockerfile.js":[75,48],"./dtd/dtd.js":[76,71],"./dylan/dylan.js":[77,72],"./ebnf/ebnf.js":[78,73],"./ecl/ecl.js":[79,74],"./eiffel/eiffel.js":[80,75],"./elm/elm.js":[81,76],"./erlang/erlang.js":[82,77],"./factor/factor.js":[83,49],"./fcl/fcl.js":[84,78],"./forth/forth.js":[85,79],"./fortran/fortran.js":[86,80],"./gas/gas.js":[87,81],"./gfm/gfm.js":[88,5,47],"./gherkin/gherkin.js":[89,82],"./go/go.js":[90,83],"./groovy/groovy.js":[91,84],"./haml/haml.js":[92,1,2,38],"./handlebars/handlebars.js":[48,43],"./haskell-literate/haskell-literate.js":[93,52],"./haskell/haskell.js":[49,85],"./haxe/haxe.js":[94,86],"./htmlembedded/htmlembedded.js":[95,1,2,34],"./htmlmixed/htmlmixed.js":[40,1,2,53],"./http/http.js":[96,87],"./idl/idl.js":[97,88],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[98,89],"./jsx/jsx.js":[99,1,54],"./julia/julia.js":[100,90],"./livescript/livescript.js":[101,91],"./lua/lua.js":[102,92],"./markdown/markdown.js":[54,5],"./mathematica/mathematica.js":[103,93],"./mbox/mbox.js":[104,94],"./meta.js":[45],"./mirc/mirc.js":[105,95],"./mllike/mllike.js":[106,96],"./modelica/modelica.js":[107,97],"./mscgen/mscgen.js":[108,98],"./mumps/mumps.js":[109,99],"./nginx/nginx.js":[110,100],"./nsis/nsis.js":[111,50],"./ntriples/ntriples.js":[112,101],"./octave/octave.js":[113,102],"./oz/oz.js":[114,103],"./pascal/pascal.js":[115,104],"./pegjs/pegjs.js":[116,1,105],"./perl/perl.js":[117,106],"./php/php.js":[118,1,2,3,44],"./pig/pig.js":[119,107],"./powershell/powershell.js":[120,108],"./properties/properties.js":[121,109],"./protobuf/protobuf.js":[122,110],"./pug/pug.js":[55,1,2,4],"./puppet/puppet.js":[123,111],"./python/python.js":[50,112],"./q/q.js":[124,113],"./r/r.js":[125,114],"./rpm/rpm.js":[126,115],"./rst/rst.js":[127,37],"./ruby/ruby.js":[44,116],"./rust/rust.js":[128,51],"./sas/sas.js":[129,117],"./sass/sass.js":[52,2,118],"./scheme/scheme.js":[130,119],"./shell/shell.js":[131,120],"./sieve/sieve.js":[132,121],"./slim/slim.js":[133,1,2,39],"./smalltalk/smalltalk.js":[134,122],"./smarty/smarty.js":[135,123],"./solr/solr.js":[136,124],"./soy/soy.js":[137,1,2,45],"./sparql/sparql.js":[138,125],"./spreadsheet/spreadsheet.js":[139,126],"./sql/sql.js":[140,127],"./stex/stex.js":[51,128],"./stylus/stylus.js":[56,6],"./swift/swift.js":[141,129],"./tcl/tcl.js":[142,130],"./textile/textile.js":[143,131],"./tiddlywiki/tiddlywiki.js":[144,132],"./tiki/tiki.js":[145,133],"./toml/toml.js":[146,134],"./tornado/tornado.js":[147,1,2,36],"./troff/troff.js":[148,135],"./ttcn-cfg/ttcn-cfg.js":[150,136],"./ttcn/ttcn.js":[149,137],"./turtle/turtle.js":[151,138],"./twig/twig.js":[152,46],"./vb/vb.js":[153,139],"./vbscript/vbscript.js":[154,140],"./velocity/velocity.js":[155,141],"./verilog/verilog.js":[156,142],"./vhdl/vhdl.js":[157,143],"./vue/vue.js":[158,1,2,6,4,12],"./webidl/webidl.js":[159,144],"./xml/xml.js":[37,145],"./xquery/xquery.js":[160,146],"./yacas/yacas.js":[161,147],"./yaml-frontmatter/yaml-frontmatter.js":[162,55],"./yaml/yaml.js":[53,148],"./z80/z80.js":[163,149]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=58,e.exports=n}}]);
//# sourceMappingURL=26.f642ea02.chunk.js.map