(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[22],{321:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var r=t(11),o=t(12),n=t(13),l=t(14),i=t(0),m=t.n(i),s=t(162),d=(t(40),t(36)),c=t(164),p=t.n(c),g=p.a.GraphObject.make,y=function(e){Object(l.a)(t,e);var a=Object(n.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=p.a.GraphObject.make,a=e(p.a.Diagram,"myDiagramDiv1");a.nodeTemplate=e(p.a.Node,"Vertical",new p.a.Binding("itemArray","items")),a.model=new p.a.GraphLinksModel([{key:1,items:["Alpha","Beta","Gamma"]}])}},{key:"diagramRender2",value:function(){var e=g(p.a.Diagram,"myDiagramDiv2");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key")))),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Delta"}]}},{key:"diagramRender3",value:function(){var e=g(p.a.Diagram,"myDiagramDiv3");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}]}},{key:"diagramRender4",value:function(){var e=g(p.a.Diagram,"myDiagramDiv4");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var a=e.findNodeForKey("Alpha");e.model.removeArrayItem(a.data.ports,0)}},{key:"diagramRender5",value:function(){var e=g(p.a.Diagram,"myDiagramDiv5");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var a=e.findNodeForKey("Alpha");e.model.removeArrayItem(a.data.ports,0),e.model.addArrayItem(a.data.ports,{portID:"right2",color:"white"})}},{key:"diagramRender6",value:function(){var e=g(p.a.Diagram,"myDiagramDiv6");e.nodeTemplate=g(p.a.Node,"Spot",g(p.a.Panel,"Auto",g(p.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(p.a.TextBlock,{margin:10},new p.a.Binding("text","key"))),g(p.a.Panel,"Horizontal",{alignment:p.a.Spot.Top},new p.a.Binding("itemArray","ports"),{itemTemplate:g(p.a.Panel,{portId:"",fromSpot:p.a.Spot.Top,toSpot:p.a.Spot.Top,fromLinkable:!0,toLinkable:!0},new p.a.Binding("portId","portID"),g(p.a.Shape,"Ellipse",{desiredSize:new p.a.Size(10,10),fill:"green"},new p.a.Binding("fill","color")))})),e.model=new p.a.GraphLinksModel,e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort",e.model.nodeDataArray=[{key:"Alpha",ports:[{portId:"left",color:"red"},{portId:"middle",color:"yellow"},{portId:"right",color:"green"},{portId:"farright",color:"pink"}]},{key:"Beta",ports:[{portId:"left",color:"purple"}]},{key:"Delta"}];var a=e.findNodeForKey("Alpha");e.model.removeArrayItem(a.data.ports,0),e.model.addArrayItem(a.data.ports,{portID:"right2",color:"white"}),e.model.insertArrayItem(a.data.ports,1,{portID:"middleleft",color:"pink"})}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS Item Arrays")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"Item Arrays\u6982\u8ff0"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u5141\u8bb8\u5728\u4e00\u4e2aNode\u4e2d\u663e\u793a\u53ef\u53d8\u6570\u91cf\u7684\u5143\u7d20"),m.a.createElement("li",null,"\u901a\u8fc7\u8bbe\u7f6ePanel.itemArray\u5b9e\u73b0\uff0c\u901a\u5e38\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"Panel\u5c06\u5305\u542b\u4e0e\u7ed1\u5b9aArray\u4e2d\u7684\u503c\u76f8\u540c\u591a\u7684\u5143\u7d20")),m.a.createElement(s.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", new go.Binding("itemArray", "items"));\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: 1,\n        items: ["Alpha", "Beta", "Gamma"]\n    }, ]\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),m.a.createElement("h2",null,"Item\u6a21\u677f"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u7528\u4e8e\u5b9a\u4e49\u9879item array\u4e2d\u6bcf\u4e2aitem\u7684\u5916\u89c2"),m.a.createElement("li",null,"\u5fc5\u987b\u662f\u4e00\u4e2aPanel")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"Panel.data\u5c06\u662f\u6b64\u5143\u7d20item array\u4e2d\u7684\u9879")),m.a.createElement(s.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }, {\n        key: "Delta"\n    }, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),m.a.createElement(s.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto",\n            $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                margin: 10\n            }, new go.Binding("text", "key"))\n        ),\n        $(go.Panel, "Horizontal", {\n            alignment: go.Spot.Top\n        },\n            new go.Binding("itemArray", "ports"), {\n                itemTemplate: $(go.Panel, {\n                        portId: "",\n                        fromSpot: go.Spot.Top,\n                        toSpot: go.Spot.Top,\n                        fromLinkable: true,\n                        toLinkable: true\n                    }, new go.Binding("portId", "portID"),\n                    $(go.Shape, "Ellipse", {\n                            desiredSize: new go.Size(10, 10),\n                            fill: "green"\n                        },\n                        new go.Binding("fill", "color")\n                    ))\n            }\n        )\n    );\n\nmyDiagram.model = new go.GraphLinksModel();\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha",\n    ports: [{\n        portId: "left",\n        color: "red"\n    }, {\n        portId: "middle",\n        color: "yellow"\n    }, {\n        portId: "right",\n        color: "green"\n    }, {\n        portId: "farright",\n        color: "pink"\n    }]\n}, {\n    key: "Beta",\n    ports: [{\n        portId: "left",\n        color: "purple"\n    }]\n}, {\n    key: "Delta"\n}, ]',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),m.a.createElement("p",null,"\u8981\u52a8\u6001\u66f4\u65b0\u9879\u76ee\u6570\u7ec4\uff0c\u8bf7\u4f7f\u7528\u7279\u5b9a\u7684\u6a21\u578b\u65b9\u6cd5:"),m.a.createElement("ul",null,m.a.createElement("li",null,"addArrayItem"),m.a.createElement("li",null,"removeArrayItem"),m.a.createElement("li",null,"insertArrayItem")),m.a.createElement("h3",null,"removeArrayItem(array,index)"),m.a.createElement("p",null,"index\u4e3aitem\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),m.a.createElement(s.a,{value:'let alphaNode = myDiagram.findNodeForKey("Alpha");\nmyDiagram.model.removeArrayItem(alphaNode.data.ports, 0);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),m.a.createElement("h3",null,"addArrayItem(array,value)"),m.a.createElement(s.a,{value:'myDiagram.model.addArrayItem(alphaNode.data.ports, {\n    portID: "right2",\n    color: "white"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),m.a.createElement("h3",null,"insertArrayItem(array,index,value)"),m.a.createElement("p",null,"index\u4e3a\u63d2\u5165item\u540e\u5728\u6570\u7ec4\u4e2d\u7684\u5e8f\u53f7"),m.a.createElement(s.a,{value:'myDiagram.model.insertArrayItem(alphaNode.data.ports, 1,{\n    portID: "middleleft",\n    color: "pink"\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/20gojsItemArrays.html")))),m.a.createElement(d.a,null))}}]),t}(i.Component)},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(11),o=t(12),n=t(15),l=t(13),i=t(14),m=t(0),s=t.n(m),d=(t(37),function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:a})},o.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},o.state={articleTree:[],scrollTop:null},o.getArticleTree=o.getArticleTree.bind(Object(n.a)(o)),o}return Object(o.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var r=e[t].nodeName;"H2"!==r&&"H3"!==r||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],r=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],n=0;o;)n+=o.offsetTop,o=o.offsetParent;var l=document.body.scrollTop||document.documentElement.scrollTop;if((l+=r+t.offsetHeight)>n+e.offsetHeight)t.style="position:fixed;top:".concat(r-l+n,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,r=a.scrollTop,o=t.length;if(document.getElementById("tree-num-0")&&o>0){for(var n=[],l=0;l<o;l++){var i=document.getElementById(t[l].name);n.push(i.offsetTop)}for(var m=n.findIndex((function(e){return e>r}))-1,d=0;d<o;d++)document.getElementById("tree-num-".concat(d)).className=d===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return s.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(m.Component))},37:function(e,a,t){},40:function(e,a,t){},57:function(e,a,t){var r={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=r[e],o=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(o,7)}))}o.keys=function(){return Object.keys(r)},o.id=57,e.exports=o}}]);
//# sourceMappingURL=22.a728d0a1.chunk.js.map