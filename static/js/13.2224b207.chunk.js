(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[13],{311:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t(11),l=t(12),r=t(13),o=t(14),i=t(0),m=t.n(i),s=t(162),c=(t(40),t(36)),d=t(164),y=t.n(d),u=y.a.GraphObject.make,p=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=u(y.a.Diagram,"myDiagramDiv1");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender2",value:function(){var e=u(y.a.Diagram,"myDiagramDiv2");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender3",value:function(){var e=u(y.a.Diagram,"myDiagramDiv3");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:50,columnSpacing:100}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender4",value:function(){var e=u(y.a.Diagram,"myDiagramDiv4");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerLongestPathSink}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender5",value:function(){var e=u(y.a.Diagram,"myDiagramDiv5");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerLongestPathSource}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender6",value:function(){var e=u(y.a.Diagram,"myDiagramDiv6");e.nodeTemplate=u(y.a.Node,"Auto",u(y.a.Shape,"RoundedRectangle",{fill:"lightblue"}),u(y.a.TextBlock,{margin:8},new y.a.Binding("text","key"))),e.layout=u(y.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:y.a.LayeredDigraphLayout.LayerOptimalLinkLength}),e.model=u(y.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"render",value:function(){return m.a.createElement("div",{className:"page-content"},m.a.createElement("div",{className:"article"},m.a.createElement("div",{className:"article-title"},m.a.createElement("h1",null,"GoJS\u5e03\u5c40\u2014\u2014\u7b2c\u4e94\u8282 \u5c42\u6b21\u5e03\u5c40(LayeredDigraphLayout)")),m.a.createElement("div",{className:"article-content"},m.a.createElement("h2",null,"\u793a\u4f8b"),m.a.createElement(s.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.LayeredDigraphLayout);\nmyDiagram.model =$(go.GraphLinksModel, {\n    nodeDataArray: [{\n        key: "Alpha",\n    }, {\n        key: "Beta",\n    }, {\n        key: "Gamma"\n    }, {\n        key: "Delta"\n    }, {\n        key: "Epsilon"\n    }, {\n        key: "Zeta"\n    }],\n    linkDataArray: [{\n        from: "Alpha",\n        to: "Beta"\n    },\n    {\n        from: "Alpha",\n        to: "Gamma"\n    },\n    {\n        from: "Beta",\n        to: "Delta"\n    },\n    {\n        from: "Delta",\n        to: "Epsilon"\n    },\n    {\n        from: "Zeta",\n        to: "Epsilon"\n    }]\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600}}),m.a.createElement("h2",null,"direction"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5c55\u5f00\u7684\u65b9\u5411"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:0"),m.a.createElement("li",null,"\u5141\u8bb8\u503c:0 | 90 | 180 | 270")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("h2",null,"layerSpacing"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5c42\u95f4\u8ddd"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),m.a.createElement("h2",null,"columnSpacing"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5217\u95f4\u8ddd"),m.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90,\n    layerSpacing: 50,\n    columnSpacing: 100\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600,height:400}}),m.a.createElement("h2",null,"layingOption"),m.a.createElement("ul",null,m.a.createElement("li",null,"\u51b3\u5b9a\u5e03\u5c40\u4e2d\u7684Node\u5982\u4f55\u5206\u914d\u5230\u4e0d\u540c\u7684layer\u4e2d"),m.a.createElement("li",null,"\u53ef\u80fd\u7684\u503c:")),m.a.createElement("ul",{"data-lake-indent":"1"},m.a.createElement("li",null,"LayerLongestPathSink"),m.a.createElement("li",null,"LayerLongestPathSource"),m.a.createElement("li",null,"LayerOptimalLinkLength")),m.a.createElement("h3",null,"LayerLongestPathSink"),m.a.createElement("p",null,"sink = \u6ca1\u6709Link\u79bb\u5f00\u7684Node"),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption:go.LayeredDigraphLayout.LayerLongestPathSink\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d\uff0cEpsilon\u548cGamma\u4e3asink"),m.a.createElement("h3",null,"LaverLongestPathSource"),m.a.createElement("p",null,"source = \u6ca1\u6709Link\u8fdb\u5165\u7684Node"),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d\uff0cAlpha\u548cZeta\u4e3asource"),m.a.createElement("h3",null,"LayerOptimalLinkLength"),m.a.createElement("ul",null,m.a.createElement("li",null,"Node\u4ee5\u6700\u5c0f\u5316\u603b\u52a0\u6743Link\u957f\u5ea6\u5206\u5c42"),m.a.createElement("li",null,"linkLength = layer(fromNode) - layer(toNode)")),m.a.createElement(s.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),m.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:600,height:350}}),m.a.createElement("p",null,"\u5176\u4e2d,\u7531\u4e0b\u5411\u4e0a,Episilon\u4e3a\u7b2c\u4e00\u5c42,Delta\u548cZeta\u4e3a\u7b2c\u4e8c\u5c42,Beta\u548cGamma\u4e3a\u7b2c\u4e09\u5c42,Alpha\u4e3a\u7b2c\u56db\u5c42"),m.a.createElement("p",null,"\u5171\u67095\u6761Link,\u6bcf\u6761Link\u7684linkLength\u5747\u4e3a1,\u5171\u8ba15,\u662f\u6700\u5c0f\u65b9\u6848"),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,m.a.createElement("br",null)),m.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),m.a.createElement("p",null,m.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html")))),m.a.createElement(c.a,null))}}]),t}(i.Component)},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(11),l=t(12),r=t(15),o=t(13),i=t(14),m=t(0),s=t.n(m),c=(t(37),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var n=e[t].nodeName;"H2"!==n&&"H3"!==n||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var i=document.getElementById(t[o].name);r.push(i.offsetTop)}for(var m=r.findIndex((function(e){return e>n}))-1,c=0;c<l;c++)document.getElementById("tree-num-".concat(c)).className=c===m?"tree-num directory-item-active":"tree-num";-2===m&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return s.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(m.Component))},37:function(e,a,t){},40:function(e,a,t){},57:function(e,a,t){var n={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=57,e.exports=l}}]);
//# sourceMappingURL=13.2224b207.chunk.js.map