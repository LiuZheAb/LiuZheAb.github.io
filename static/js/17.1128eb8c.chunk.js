(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[17],{314:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var l=t(11),n=t(12),i=t(15),r=t(13),s=t(14),o=t(0),m=t.n(o),d=t(163),c=(t(41),t(37)),g=t(165),h=t.n(g),u=h.a.GraphObject.make,p=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={articleTree:[]},n.getArticleTree=n.getArticleTree.bind(Object(i.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=u(h.a.Diagram,"myDiagramDiv1");e.grid.visible=!0,e.nodeTemplate=u(h.a.Node,"Auto",{resizable:!0},u(h.a.Shape,"Rectangle",{fill:"lightgray"}),u(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50)}},{key:"diagramRender2",value:function(){var e=u(h.a.Diagram,"myDiagramDiv2");e.grid.visible=!0,e.nodeTemplate=u(h.a.Node,"Auto",{resizable:!0},u(h.a.Shape,"Rectangle",{fill:"lightgray"}),u(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=u(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},u(h.a.Shape,"lineH",{stroke:"blue"}),u(h.a.Shape,"lineV",{stroke:"green"}))}},{key:"diagramRender3",value:function(){var e=u(h.a.Diagram,"myDiagramDiv3");e.grid.visible=!0,e.nodeTemplate=u(h.a.Node,"Auto",{resizable:!0},u(h.a.Shape,"Rectangle",{fill:"lightgray"}),u(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=u(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(10,10)},u(h.a.Shape,"lineH",{stroke:"blue",interval:5}),u(h.a.Shape,"lineV",{stroke:"green",interval:5}),u(h.a.Shape,"lineH",{stroke:"lightblue"}),u(h.a.Shape,"lineV",{stroke:"lightgreen"}))}},{key:"diagramRender4",value:function(){var e=u(h.a.Diagram,"myDiagramDiv4");e.grid.visible=!0,e.nodeTemplate=u(h.a.Node,"Auto",{resizable:!0},u(h.a.Shape,"Rectangle",{fill:"lightgray"}),u(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=u(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},u(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2}))}},{key:"diagramRender5",value:function(){var e=u(h.a.Diagram,"myDiagramDiv5");e.grid.visible=!0,e.nodeTemplate=u(h.a.Node,"Auto",{resizable:!0},u(h.a.Shape,"Rectangle",{fill:"lightgray"}),u(h.a.TextBlock,{margin:5},new h.a.Binding("text","key")));e.model=new h.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"},{key:"Gamma"}]),e.toolManager.draggingTool.isGridSnapEnabled=!0,e.toolManager.resizingTool.isGridSnapEnabled=!0,e.grid.gridCellSize=new h.a.Size(50,50),e.grid=u(h.a.Panel,"Grid",{gridCellSize:new h.a.Size(50,50)},u(h.a.Shape,"BarH",{fill:"lime",height:50,interval:2,opacity:.25}),u(h.a.Shape,"BarV",{fill:"lime",height:50,interval:2,opacity:.25}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS\u9762\u677f\u2014\u2014\u7b2c\u4e8c\u8282 \u7f51\u683c\u9762\u677f(Grid Panel)")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"Grid Panels"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u663e\u793a\u6309\u4e00\u5b9a\u95f4\u9694\u7ed8\u5236\u7684\u7ebf\u6761\u7f51\u683c"),m.a.createElement("li",null,"Diagram.grid\u662f\u4e00\u4e2aGrid Panel"),m.a.createElement("li",null,"\u8bbe\u7f6e\u4e86Diagram.grid\u540e,Part\u53ef\u4ee5\u6839\u636e\u7f51\u683c\u5bf9\u9f50\u6216\u8c03\u6574\u5927\u5c0f"),m.a.createElement("li",null,"Grid Panel\u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u662fShape")),m.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b:"),m.a.createElement(d.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.grid.visible = true;\nmyDiagram.nodeTemplate = $(go.Node, "Auto", {\n        resizable: true\n    },\n    $(go.Shape, "Rectangle", {\n        fill: "lightgray"\n    }),\n    $(go.TextBlock, {\n        margin: 5\n    }, new go.Binding("text", "key")));\nlet nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}];\nmyDiagram.model = new go.GraphLinksModel(nodeDataArray);\nmyDiagram.toolManager.draggingTool.isGridSnapEnabled = true;\nmyDiagram.toolManager.resizingTool.isGridSnapEnabled = true;\nmyDiagram.grid.gridCellSize = new go.Size(50, 50);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h2",null,"\u8bbe\u7f6e\u7f51\u683c\u6837\u5f0f"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green"\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h2",null,"Shape.Interval"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u6307\u5b9a\u5728\u7f51\u683c\u4e2d\u7ed8\u5236Shape\u7684\u9891\u7387(\u4ee5gridCellSize\u7684\u500d\u6570\u8ba1\u7b97)"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:1"),m.a.createElement("li",null,"\u5141\u8bb8\u503c:\u6b63\u6574\u6570")),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(10, 10)\n        },\n        $(go.Shape, "lineH", {\n            stroke: "blue",\n            interval: 5\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "green",\n            interval: 5\n        }),\n        $(go.Shape, "lineH", {\n            stroke: "lightblue"\n        }),\n        $(go.Shape, "lineV", {\n            stroke: "lightgreen"\n        }),\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h3",null,"\u8bbe\u7f6e\u4e3a\u6761\u5e26\u72b6"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h3",null,"\u652f\u6301\u900f\u660e\u5ea6\u5c5e\u6027"),m.a.createElement(d.a,{value:'myDiagram.grid =\n    $(go.Panel, "Grid", {\n            gridCellSize: new go.Size(50, 50)\n        },\n        $(go.Shape, "BarH", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        }),\n        $(go.Shape, "BarV", {\n            fill: "lime",\n            height: 50,\n            interval: 2,\n            opacity: .25\n        })\n    );',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/14gridPanel.html")))),m.a.createElement("div",{className:"directory"},m.a.createElement(c.a,{articleTree:this.state.articleTree})))}}]),t}(o.Component)},37:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(11),n=t(12),i=t(13),r=t(14),s=t(0),o=t.n(s),m=(t(38),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],i=0;n;)i+=n.offsetTop,n=n.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+t.offsetHeight)>i+e.offsetHeight)t.style="position:fixed;top:".concat(l-r+i,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var i=[],r=0;r<n;r++){var s=document.getElementById(t[r].name);i.push(s.offsetTop)}for(var m=i.findIndex((function(e){return e>l}))-1,d=0;d<n;d++)document.getElementById("tree-num-".concat(d)).className=d===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return o.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return o.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(s.Component))},38:function(e,a,t){},41:function(e,a,t){},58:function(e,a,t){var l={"./apl/apl.js":[59,79],"./asciiarmor/asciiarmor.js":[60,80],"./asn.1/asn.1.js":[61,81],"./asterisk/asterisk.js":[62,82],"./brainfuck/brainfuck.js":[63,83],"./clike/clike.js":[47,6],"./clojure/clojure.js":[64,84],"./cmake/cmake.js":[65,85],"./cobol/cobol.js":[66,86],"./coffeescript/coffeescript.js":[48,87],"./commonlisp/commonlisp.js":[67,88],"./crystal/crystal.js":[68,89],"./css/css.js":[43,3],"./cypher/cypher.js":[69,90],"./d/d.js":[70,91],"./dart/dart.js":[71,6,92],"./diff/diff.js":[72,93],"./django/django.js":[73,2,3,59],"./dockerfile/dockerfile.js":[74,70],"./dtd/dtd.js":[75,94],"./dylan/dylan.js":[76,95],"./ebnf/ebnf.js":[77,96],"./ecl/ecl.js":[78,97],"./eiffel/eiffel.js":[79,98],"./elm/elm.js":[80,99],"./erlang/erlang.js":[81,100],"./factor/factor.js":[82,71],"./fcl/fcl.js":[83,101],"./forth/forth.js":[84,102],"./fortran/fortran.js":[85,103],"./gas/gas.js":[86,104],"./gfm/gfm.js":[87,49,69],"./gherkin/gherkin.js":[88,105],"./go/go.js":[89,106],"./groovy/groovy.js":[90,107],"./haml/haml.js":[91,2,3,62],"./handlebars/handlebars.js":[49,65],"./haskell-literate/haskell-literate.js":[92,74],"./haskell/haskell.js":[50,108],"./haxe/haxe.js":[93,109],"./htmlembedded/htmlembedded.js":[94,2,3,58],"./htmlmixed/htmlmixed.js":[42,2,3,75],"./http/http.js":[95,110],"./idl/idl.js":[96,111],"./javascript/javascript.js":[44,2],"./jinja2/jinja2.js":[97,112],"./jsx/jsx.js":[98,2,76],"./julia/julia.js":[99,113],"./livescript/livescript.js":[100,114],"./lua/lua.js":[101,115],"./markdown/markdown.js":[55,49],"./mathematica/mathematica.js":[102,116],"./mbox/mbox.js":[103,117],"./meta.js":[46],"./mirc/mirc.js":[104,118],"./mllike/mllike.js":[105,119],"./modelica/modelica.js":[106,120],"./mscgen/mscgen.js":[107,121],"./mumps/mumps.js":[108,122],"./nginx/nginx.js":[109,123],"./nsis/nsis.js":[110,72],"./ntriples/ntriples.js":[111,124],"./octave/octave.js":[112,125],"./oz/oz.js":[113,126],"./pascal/pascal.js":[114,127],"./pegjs/pegjs.js":[115,2,128],"./perl/perl.js":[116,129],"./php/php.js":[117,2,3,6,66],"./pig/pig.js":[118,130],"./powershell/powershell.js":[119,131],"./properties/properties.js":[120,132],"./protobuf/protobuf.js":[121,133],"./pug/pug.js":[56,2,3,48],"./puppet/puppet.js":[122,134],"./python/python.js":[51,135],"./q/q.js":[123,136],"./r/r.js":[124,137],"./rpm/rpm.js":[125,138],"./rst/rst.js":[126,61],"./ruby/ruby.js":[45,139],"./rust/rust.js":[127,73],"./sas/sas.js":[128,140],"./sass/sass.js":[53,3,141],"./scheme/scheme.js":[129,142],"./shell/shell.js":[130,143],"./sieve/sieve.js":[131,144],"./slim/slim.js":[132,2,3,63],"./smalltalk/smalltalk.js":[133,145],"./smarty/smarty.js":[134,146],"./solr/solr.js":[135,147],"./soy/soy.js":[136,2,3,67],"./sparql/sparql.js":[137,148],"./spreadsheet/spreadsheet.js":[138,149],"./sql/sql.js":[139,150],"./stex/stex.js":[52,151],"./stylus/stylus.js":[57,50],"./swift/swift.js":[140,152],"./tcl/tcl.js":[141,153],"./textile/textile.js":[142,154],"./tiddlywiki/tiddlywiki.js":[143,155],"./tiki/tiki.js":[144,156],"./toml/toml.js":[145,157],"./tornado/tornado.js":[146,2,3,60],"./troff/troff.js":[147,158],"./ttcn-cfg/ttcn-cfg.js":[149,159],"./ttcn/ttcn.js":[148,160],"./turtle/turtle.js":[150,161],"./twig/twig.js":[151,68],"./vb/vb.js":[152,162],"./vbscript/vbscript.js":[153,163],"./velocity/velocity.js":[154,164],"./verilog/verilog.js":[155,165],"./vhdl/vhdl.js":[156,166],"./vue/vue.js":[157,2,3,50,48,57],"./webidl/webidl.js":[158,167],"./xml/xml.js":[39,168],"./xquery/xquery.js":[159,169],"./yacas/yacas.js":[160,170],"./yaml-frontmatter/yaml-frontmatter.js":[161,77],"./yaml/yaml.js":[54,171],"./z80/z80.js":[162,172]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=58,e.exports=n}}]);
//# sourceMappingURL=17.1128eb8c.chunk.js.map