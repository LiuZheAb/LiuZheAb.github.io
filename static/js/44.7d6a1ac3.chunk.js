(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[44],{36:function(e,t,a){"use strict";var n=a(11),l=a(12),r=a(16),o=a(13),s=a(14),i=a(0),c=a.n(i),m=a(5),u=a(40),d=(a(37),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0,n=e.length;a<n-1;a++){var l=e[a].nodeName;"H2"!==l&&"H3"!==l||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,a=u.a.length;t<a;t++)e[0]===u.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[t].section.length>0?u.a[t].section[e[e.length-1]]:u.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],n=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=n+a.offsetHeight)>r+e.offsetHeight)a.style="position:fixed;top:".concat(n-o+r,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(t<s&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=s),t>s&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=s)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,n=t.scrollTop,l=a.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],o=0;o<l;o++){var s=document.getElementById(a[o].name);r.push(s.offsetTop)}for(var i=r.findIndex((function(e){return e>n}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return c.a.createElement("div",{className:"directory"},c.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return c.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(i.Component));t.a=Object(m.f)(d)},37:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(11),l=a(12),r=a(13),o=a(14),s=a(0),i=a.n(s),c=a(164),m=(a(47),a(36)),u=a(167),d=a.n(u),j=d.a.GraphObject.make,p={theme:"monokai",mode:"JSX",readOnly:!0},g=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.diagramRender1()}},{key:"diagramRender1",value:function(){var e=j(d.a.Diagram,"myDiagramDiv1");e.nodeTemplate=j(d.a.Node,"Auto",{locationSpot:d.a.Spot.Center},new d.a.Binding("location","loc",d.a.Point.parse).makeTwoWay(d.a.Point.stringify),j(d.a.Shape,"RoundedRectangle",{fill:"lightblue"}),j(d.a.TextBlock,{margin:8},new d.a.Binding("text","key"))),e.model=j(d.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha",loc:"100 100"},{key:"Beta",loc:"100 120"},{key:"Delta"},{key:"Gamma"}]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u4e00\u8282 GoJS \u5e03\u5c40\u6559\u7a0b\u6982\u8ff0")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u5e03\u5c40 Layouts"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5b9a\u4f4d Part \u96c6\u5408\u7684 Node \u6216 Link"),i.a.createElement("li",null,"GoJS Layout \u662f\u81ea\u52a8\u5e03\u5c40"),i.a.createElement("li",null,"Diagram.layout \u9ed8\u8ba4\u4e3a\u57fa\u672c\u5e03\u5c40\u7c7b\u7684\u5b9e\u4f8b")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"\u8bbe\u7f6e\u6ca1\u6709\u5b9a\u4f4d\u7684 Node \u7684\u4f4d\u7f6e"),i.a.createElement("li",null,"\u5b8c\u5168\u5ffd\u7565 Link")),i.a.createElement(c.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto", {\n            locationSpot: go.Spot.Center\n        },\n        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\n\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n                key: "Alpha",\n                loc: "100 100"\n            },\n            {\n                key: "Beta",\n                loc: "100 120"\n            },\n            {\n                key: "Delta"\n            },\n            {\n                key: "Gamma"\n            },\n        ]\n    });',options:p}),i.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),i.a.createElement("h2",null,"Layout \u521d\u59cb\u5316"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u7b80\u5355\u7684\u58f0\u660e")),i.a.createElement(c.a,{value:"diagram.layout = new go.ForceDirectedLayout();",options:p}),i.a.createElement("ul",null,i.a.createElement("li",null,"\u4f7f\u7528 go.GraphObject.make(",i.a.createElement("em",null,"\u5df2\u5b9a\u4e49\u4e3a$"),")\u521d\u59cb\u5316")),i.a.createElement(c.a,{value:'let diagram = $(go.Diagram, "maDiagramDiv",\n    {\n        initialContentAlignment: go.Spot.Center,\n        layout: $(go.TreeLayout,\n            {angle: 90, nodeSpacing: 10,layerSpacing: 30 })\n    })',options:p}),i.a.createElement("p",null,"\u66f4\u591a Layout \u793a\u4f8b\u8bf7\u53c2\u8003 ",i.a.createElement("a",{href:"https://gojs.net/latest/samples/gLayout.html",target:"_blank",rel:"noopener noreferrer"},"GridLayout"),"\u3001",i.a.createElement("a",{href:"https://gojs.net/latest/samples/tLayout.html",target:"_blank",rel:"noopener noreferrer"},"Tree Layout"),"\u3001",i.a.createElement("a",{href:"https://gojs.net/latest/intro/extensions.html",target:"_blank",rel:"noopener noreferrer"},"Extending GoJS")),i.a.createElement("h2",null,"Layout \u5931\u6548"),i.a.createElement("ul",null,i.a.createElement("li",null,'Layout \u53ef\u4ee5\u662f"\u6709\u6548\u7684"\u4e5f\u53ef\u4ee5\u662f"\u65e0\u6548\u7684",Layout \u5931\u6548\u7684\u539f\u56e0\u5305\u62ec:')),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"\u4ece Layout \u4e2d\u6dfb\u52a0/\u5220\u9664\u7684 Node/Link"),i.a.createElement("li",null,"Node/Link \u6539\u53d8\u4e86\u53ef\u89c1\u6027"),i.a.createElement("li",null,"Node \u6539\u53d8\u4e86\u5927\u5c0f")),i.a.createElement("ul",null,i.a.createElement("li",null,"Layout.isOngoing \u63a7\u5236\u5f53\u8fd9\u4e9b\u6539\u53d8\u53d1\u751f\u65f6 Layout \u662f\u5426\u53d1\u751f\u6539\u53d8"),i.a.createElement("li",null,"Layout.isInitial \u63a7\u5236\u5f53 Diagram \u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6 Layout \u662f\u5426\u751f\u6548")),i.a.createElement("p",null,"Layout.invalidateLayout()"),i.a.createElement("p",null,"Diagram.layoutDiagram(true)"),i.a.createElement("h3",null,"Layout Invalidation(cont.)"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 Part \u7684\u201clayoutConditions\u201d\u5c5e\u6027\uff0c\u5219 Layout \u5931\u6548\u53ef\u4ee5\u66f4\u52a0\u5177\u4f53")),i.a.createElement(c.a,{value:"$(go.Node, \xb7 \xb7 \xb7,\n    { layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized },\n    \xb7 \xb7 \xb7\n)",options:p}),i.a.createElement("ul",null,i.a.createElement("li",null,"\u4e34\u65f6 layer \u4e2d\u7684 Part \u4e0d\u4f1a\u4f7f\u4efb\u4f55 Layout \u5931\u6548"),i.a.createElement("li",null,"\u8bbe\u7f6e Part.islayoutposition \u4e3a false\uff0cLayout \u5c06\u5b8c\u5168\u5ffd\u7565\u8fd9\u4e00 Part")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/07overviewLayout.html")))),i.a.createElement(m.a,null))}}]),a}(s.Component)},59:function(e,t,a){var n={"./apl/apl.js":[60,101],"./asciiarmor/asciiarmor.js":[61,102],"./asn.1/asn.1.js":[62,103],"./asterisk/asterisk.js":[63,104],"./brainfuck/brainfuck.js":[64,105],"./clike/clike.js":[48,5],"./clojure/clojure.js":[65,106],"./cmake/cmake.js":[66,107],"./cobol/cobol.js":[67,108],"./coffeescript/coffeescript.js":[49,109],"./commonlisp/commonlisp.js":[68,110],"./crystal/crystal.js":[69,111],"./css/css.js":[42,3],"./cypher/cypher.js":[70,112],"./d/d.js":[71,113],"./dart/dart.js":[72,5,114],"./diff/diff.js":[73,115],"./django/django.js":[74,2,3,77],"./dockerfile/dockerfile.js":[75,90],"./dtd/dtd.js":[76,116],"./dylan/dylan.js":[77,117],"./ebnf/ebnf.js":[78,118],"./ecl/ecl.js":[79,119],"./eiffel/eiffel.js":[80,120],"./elm/elm.js":[81,121],"./erlang/erlang.js":[82,122],"./factor/factor.js":[83,91],"./fcl/fcl.js":[84,123],"./forth/forth.js":[85,124],"./fortran/fortran.js":[86,125],"./gas/gas.js":[87,126],"./gfm/gfm.js":[88,65,89],"./gherkin/gherkin.js":[89,127],"./go/go.js":[90,128],"./groovy/groovy.js":[91,129],"./haml/haml.js":[92,2,3,80],"./handlebars/handlebars.js":[50,85],"./haskell-literate/haskell-literate.js":[93,94],"./haskell/haskell.js":[51,130],"./haxe/haxe.js":[94,131],"./htmlembedded/htmlembedded.js":[95,2,3,76],"./htmlmixed/htmlmixed.js":[41,2,3,95],"./http/http.js":[96,132],"./idl/idl.js":[97,133],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,134],"./jsx/jsx.js":[99,2,96],"./julia/julia.js":[100,135],"./livescript/livescript.js":[101,136],"./lua/lua.js":[102,137],"./markdown/markdown.js":[56,65],"./mathematica/mathematica.js":[103,138],"./mbox/mbox.js":[104,139],"./meta.js":[46],"./mirc/mirc.js":[105,140],"./mllike/mllike.js":[106,141],"./modelica/modelica.js":[107,142],"./mscgen/mscgen.js":[108,143],"./mumps/mumps.js":[109,144],"./nginx/nginx.js":[110,145],"./nsis/nsis.js":[111,92],"./ntriples/ntriples.js":[112,146],"./octave/octave.js":[113,147],"./oz/oz.js":[114,148],"./pascal/pascal.js":[115,149],"./pegjs/pegjs.js":[116,2,150],"./perl/perl.js":[117,151],"./php/php.js":[118,2,3,5,86],"./pig/pig.js":[119,152],"./powershell/powershell.js":[120,153],"./properties/properties.js":[121,154],"./protobuf/protobuf.js":[122,155],"./pug/pug.js":[57,2,3,64],"./puppet/puppet.js":[123,156],"./python/python.js":[52,157],"./q/q.js":[124,158],"./r/r.js":[125,159],"./rpm/rpm.js":[126,160],"./rst/rst.js":[127,79],"./ruby/ruby.js":[45,161],"./rust/rust.js":[128,93],"./sas/sas.js":[129,162],"./sass/sass.js":[54,3,163],"./scheme/scheme.js":[130,164],"./shell/shell.js":[131,165],"./sieve/sieve.js":[132,166],"./slim/slim.js":[133,2,3,81],"./smalltalk/smalltalk.js":[134,167],"./smarty/smarty.js":[135,168],"./solr/solr.js":[136,169],"./soy/soy.js":[137,2,3,87],"./sparql/sparql.js":[138,170],"./spreadsheet/spreadsheet.js":[139,171],"./sql/sql.js":[140,172],"./stex/stex.js":[53,173],"./stylus/stylus.js":[58,66],"./swift/swift.js":[141,174],"./tcl/tcl.js":[142,175],"./textile/textile.js":[143,176],"./tiddlywiki/tiddlywiki.js":[144,177],"./tiki/tiki.js":[145,178],"./toml/toml.js":[146,179],"./tornado/tornado.js":[147,2,3,78],"./troff/troff.js":[148,180],"./ttcn-cfg/ttcn-cfg.js":[150,181],"./ttcn/ttcn.js":[149,182],"./turtle/turtle.js":[151,183],"./twig/twig.js":[152,88],"./vb/vb.js":[153,184],"./vbscript/vbscript.js":[154,185],"./velocity/velocity.js":[155,186],"./verilog/verilog.js":[156,187],"./vhdl/vhdl.js":[157,188],"./vue/vue.js":[158,2,3,66,64,74],"./webidl/webidl.js":[159,189],"./xml/xml.js":[39,190],"./xquery/xquery.js":[160,191],"./yacas/yacas.js":[161,192],"./yaml-frontmatter/yaml-frontmatter.js":[162,97],"./yaml/yaml.js":[55,193],"./z80/z80.js":[163,194]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=59,e.exports=l}}]);
//# sourceMappingURL=44.7d6a1ac3.chunk.js.map