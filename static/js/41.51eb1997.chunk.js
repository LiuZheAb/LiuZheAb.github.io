(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[41],{36:function(e,t,n){"use strict";var a=n(11),o=n(12),l=n(16),r=n(13),i=n(14),s=n(0),m=n.n(s),p=n(5),d=n(39),c=(n(37),function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);o.setState({scrollTop:t})},o.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},o.state={articleTree:[],scrollTop:null},o.getArticleTree=o.getArticleTree.bind(Object(l.a)(o)),o}return Object(o.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],n=0,a=e.length;n<a-1;n++){var o=e[n].nodeName;"H2"!==o&&"H3"!==o||(e[n].id=e[n].innerText,t.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,n=d.a.length;t<n;t++)e[0]===d.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[t].section.length>0?d.a[t].section[e[e.length-1]]:d.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,n=document.getElementsByClassName("directory-list")[0],a=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var o=document.getElementsByClassName("page-footer")[0],l=0;o;)l+=o.offsetTop,o=o.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+n.offsetHeight)>l+e.offsetHeight)n.style="position:fixed;top:".concat(a-r+l,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(t<i&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",t=i),t>i&&(e.className="ant-layout-header header header-visible",n.className="directory-list",t=i)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articleTree,a=t.scrollTop,o=n.length;if(document.getElementById("tree-num-0")&&o>0){for(var l=[],r=0;r<o;r++){var i=document.getElementById(n[r].name);l.push(i.offsetTop)}for(var s=l.findIndex((function(e){return e>a}))-1,p=0;p<o;p++)document.getElementById("tree-num-".concat(p)).className=p===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(o-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},n.map((function(t,n){return m.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),n}(s.Component));t.a=Object(p.f)(c)},37:function(e,t,n){},487:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(11),o=n(12),l=n(13),r=n(14),i=n(0),s=n.n(i),m=n(164),p=(n(47),n(36)),d=n(168),c=n.n(d),g=c.a.GraphObject.make,f={theme:"monokai",mode:"JSX",readOnly:!0},u=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=g(c.a.Diagram,"myDiagramDiv1");e.nodeTemplate=g(c.a.Node,"Vertical",{fromSpot:c.a.Spot.Right,toSpot:c.a.Spot.Left},g(c.a.Shape,"Ellipse",{fill:"green",width:30,height:30}),g(c.a.TextBlock,{font:"20px sans-serif"},new c.a.Binding("text","key"))),e.model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta"}])}},{key:"diagramRender2",value:function(){var e=g(c.a.Diagram,"myDiagramDiv2");e.nodeTemplate=g(c.a.Node,"Vertical",{},g(c.a.Shape,"Ellipse",{fill:"green",width:30,height:30,portId:"",fromSpot:c.a.Spot.Right,toSpot:c.a.Spot.Left}),g(c.a.TextBlock,{font:"20px sans-serif"},new c.a.Binding("text","key"))),e.model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta"}])}},{key:"diagramRender3",value:function(){var e=g(c.a.Diagram,"myDiagramDiv3");e.nodeTemplate=g(c.a.Node,"Spot",g(c.a.Panel,"Auto",g(c.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(c.a.TextBlock,{margin:10},new c.a.Binding("text","key"))),g(c.a.Shape,"Ellipse",{fill:"pink",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Left,portId:"l",fromSpot:c.a.Spot.Left,toSpot:c.a.Spot.Left}),g(c.a.Shape,"Ellipse",{fill:"green",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Right,portId:"r",fromSpot:c.a.Spot.Right,toSpot:c.a.Spot.Right})),e.model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}],[{from:"Alpha",to:"Beta",fromPort:"r",toPort:"l"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"diagramRender4",value:function(){var e=g(c.a.Diagram,"myDiagramDiv4");e.nodeTemplate=g(c.a.Node,"Spot",g(c.a.Panel,"Auto",g(c.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(c.a.TextBlock,{margin:10},new c.a.Binding("text","key"))),g(c.a.Shape,"Ellipse",{fill:"pink",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Left,portId:"l",fromSpot:c.a.Spot.Left,toSpot:c.a.Spot.Left,fromLinkable:!0,toLinkable:!0}),g(c.a.Shape,"Ellipse",{fill:"green",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Right,portId:"r",fromSpot:c.a.Spot.Right,toSpot:c.a.Spot.Right,fromLinkable:!0,toLinkable:!0})),e.model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"diagramRender5",value:function(){var e=g(c.a.Diagram,"myDiagramDiv5");e.nodeTemplate=g(c.a.Node,"Spot",g(c.a.Panel,"Auto",g(c.a.Shape,"RoundedRectangle",{fill:"lightblue"}),g(c.a.TextBlock,{margin:10},new c.a.Binding("text","key"))),g(c.a.Shape,"Ellipse",{fill:"pink",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Left,portId:"l",fromSpot:c.a.Spot.Left,toSpot:c.a.Spot.Left,fromLinkable:!0,toLinkable:!0,fromLinkableDuplicates:!0,fromLinkableSelfNode:!0,toLinkableSelfNode:!0}),g(c.a.Shape,"Ellipse",{fill:"green",desiredSize:new c.a.Size(10,10),alignment:c.a.Spot.Right,portId:"r",fromSpot:c.a.Spot.Right,toSpot:c.a.Spot.Right,fromLinkable:!0,toLinkable:!0,fromLinkableDuplicates:!0,fromLinkableSelfNode:!0,toLinkableSelfNode:!0})),e.model=new c.a.GraphLinksModel([{key:"Alpha"},{key:"Beta"}]),e.model.linkFromPortIdProperty="fromPort",e.model.linkToPortIdProperty="toPort"}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS Ports")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"GoJS Ports \u6982\u8ff0"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5728 Node \u4e0a\u63d0\u4f9b Link \u8fde\u63a5\u7684\u7279\u5b9a\u56fe\u5f62\u4f4d\u7f6e"),s.a.createElement("li",null,"\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u91cf\u7684 port/Node"),s.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6574\u4e2a Node \u662f\u552f\u4e00\u7684\u7aef\u53e3"),s.a.createElement("li",null,"\u8981\u5728 nodeTemplate \u4e2d\u7684 GraphObject \u751f\u6210\u4e00\u4e2a\u7aef\u53e3\uff0c\u8bbe\u7f6e\u201cportId\u201d\u5c5e\u6027"),s.a.createElement("li",null,"port \u53ea\u80fd\u5b58\u5728\u4e8e Node/Group \u4e0a")),s.a.createElement("p",null,"\u5148\u770b\u4e00\u4e2a\u8bbe\u7f6e\u7aef\u53e3\u7684\u4f8b\u5b50:"),s.a.createElement(m.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Vertical", {\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Left\n        },\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            width: 30,\n            height: 30\n        }),\n        $(go.TextBlock, {\n                font: "20px sans-serif"\n            },\n            new go.Binding("text", "key"))\n    );\n\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }], [{\n        from: "Alpha",\n        to: "Beta"\n    }]\n)',options:f}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),s.a.createElement("p",null,"Link \u5728 Node \u4e0a\u94fe\u63a5\u7684\u4f4d\u7f6e\u662f\u56fa\u5b9a\u7684"),s.a.createElement("h3",null,"GraphObject.portld"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u5b9a\u4e49\u4ee5 GraphObject \u4e3a\u7aef\u53e3")),s.a.createElement(m.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Vertical", {},\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            width: 30,\n            height: 30,\n            portId: "",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Left\n        }),\n        $(go.TextBlock, {\n                font: "20px sans-serif"\n            },\n            new go.Binding("text", "key")\n        )\n    );',options:f}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),s.a.createElement("h2",null,"Multiple Ports"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u6709\u591a\u4e2a\u7aef\u53e3\u65f6\uff0cLink \u6570\u636e\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u6765\u77e5\u9053\u5b83\u6765\u81ea\u6216\u5c06\u8981\u8bbf\u95ee\u54ea\u4e2a\u7aef\u53e3")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"\u8bbe\u7f6e GraphLinksModel.linkToPortldProperty / GraphLinksModel.linkFromPortldProperty \u4e3a\u4efb\u4f55\u975e\u7a7a\u5b57\u7b26\u4e32\u503c"),s.a.createElement("li",null,"\u7136\u540e\uff0c\u5728 Link \u6570\u636e\u4e0a\u8bbe\u7f6e\u8fd9\u4e9b\u5c5e\u6027")),s.a.createElement(m.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                    margin: 10\n                },\n                new go.Binding("text", "key")\n            )\n        ),\n        //left port\n        $(go.Shape, "Ellipse", {\n            fill: "pink",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Left,\n            portId: "l",\n            fromSpot: go.Spot.Left,\n            toSpot: go.Spot.Left\n        }),\n        //right port\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Right,\n            portId: "r",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Right\n        }),\n    );\n\nmyDiagram.model = new go.GraphLinksModel(\n[{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}], [{\n    from: "Alpha",\n    to: "Beta",\n    fromPort: "r",\n    toPort: "l"\n}]\n)\n\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";',options:f}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),s.a.createElement(m.a,{value:'myDiagram.nodeTemplate =\n    $(go.Node, "Spot",\n        $(go.Panel, "Auto", $(go.Shape, "RoundedRectangle", {\n                fill: "lightblue"\n            }),\n            $(go.TextBlock, {\n                    margin: 10\n                },\n                new go.Binding("text", "key")\n            )\n        ),\n        //left port\n        $(go.Shape, "Ellipse", {\n            fill: "pink",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Left,\n            portId: "l",\n            fromSpot: go.Spot.Left,\n            toSpot: go.Spot.Left,\n            fromLinkable: true,\n            toLinkable: true\n        }),\n        //right port\n        $(go.Shape, "Ellipse", {\n            fill: "green",\n            desiredSize: new go.Size(10, 10),\n            alignment: go.Spot.Right,\n            portId: "r",\n            fromSpot: go.Spot.Right,\n            toSpot: go.Spot.Right,\n            fromLinkable: true,\n            toLinkable: true\n        }),\n    );\nmyDiagram.model = new go.GraphLinksModel(\n    [{\n        key: "Alpha"\n    }, {\n        key: "Beta"\n    }], \n)\nmyDiagram.model.linkFromPortIdProperty = "fromPort";\nmyDiagram.model.linkToPortIdProperty = "toPort";',options:f}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),s.a.createElement("h3",null,"fromLinkableDuplicates / toLinkableDuplicates"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4e00\u4e2a port \u662f\u5426\u53ef\u80fd\u6709\u591a\u4e2a Link \u5230\u5b83\u6216\u4ece\u5b83\u6765")),s.a.createElement("p",null,"\u540c\u65f6\u5c06 fromLinkableSelfNode/toLinkableSelfNode \u8bbe\u7f6e\u4e3a true,Node \u5373\u53ef\u94fe\u63a5\u81ea\u8eab"),s.a.createElement(m.a,{value:'//left port\n$(go.Shape, "Ellipse", {\n    fill: "pink",\n    desiredSize: new go.Size(10, 10),\n    alignment: go.Spot.Left,\n    portId: "l",\n    fromSpot: go.Spot.Left,\n    toSpot: go.Spot.Left,\n    fromLinkable: true,\n    toLinkable: true,\n    fromLinkableDuplicates: true,\n    fromLinkableSelfNode: true,\n    toLinkableSelfNode: true\n}),\n//right port\n$(go.Shape, "Ellipse", {\n    fill: "green",\n    desiredSize: new go.Size(10, 10),\n    alignment: go.Spot.Right,\n    portId: "r",\n    fromSpot: go.Spot.Right,\n    toSpot: go.Spot.Right,\n    fromLinkable: true,\n    toLinkable: true,\n    fromLinkableDuplicates: true,\n    fromLinkableSelfNode: true,\n    toLinkableSelfNode: true\n}),',options:f}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/19gojsPorts.html")))),s.a.createElement(p.a,null))}}]),n}(i.Component)},59:function(e,t,n){var a={"./apl/apl.js":[60,107],"./asciiarmor/asciiarmor.js":[61,108],"./asn.1/asn.1.js":[62,109],"./asterisk/asterisk.js":[63,110],"./brainfuck/brainfuck.js":[64,111],"./clike/clike.js":[48,8],"./clojure/clojure.js":[65,112],"./cmake/cmake.js":[66,113],"./cobol/cobol.js":[67,114],"./coffeescript/coffeescript.js":[49,115],"./commonlisp/commonlisp.js":[68,116],"./crystal/crystal.js":[69,117],"./css/css.js":[42,3],"./cypher/cypher.js":[70,118],"./d/d.js":[71,119],"./dart/dart.js":[72,8,120],"./diff/diff.js":[73,121],"./django/django.js":[74,2,3,82],"./dockerfile/dockerfile.js":[75,95],"./dtd/dtd.js":[76,122],"./dylan/dylan.js":[77,123],"./ebnf/ebnf.js":[78,124],"./ecl/ecl.js":[79,125],"./eiffel/eiffel.js":[80,126],"./elm/elm.js":[81,127],"./erlang/erlang.js":[82,128],"./factor/factor.js":[83,96],"./fcl/fcl.js":[84,129],"./forth/forth.js":[85,130],"./fortran/fortran.js":[86,131],"./gas/gas.js":[87,132],"./gfm/gfm.js":[88,68,94],"./gherkin/gherkin.js":[89,133],"./go/go.js":[90,134],"./groovy/groovy.js":[91,135],"./haml/haml.js":[92,2,3,85],"./handlebars/handlebars.js":[50,90],"./haskell-literate/haskell-literate.js":[93,99],"./haskell/haskell.js":[51,136],"./haxe/haxe.js":[94,137],"./htmlembedded/htmlembedded.js":[95,2,3,81],"./htmlmixed/htmlmixed.js":[41,2,3,100],"./http/http.js":[96,138],"./idl/idl.js":[97,139],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,140],"./jsx/jsx.js":[99,2,101],"./julia/julia.js":[100,141],"./livescript/livescript.js":[101,142],"./lua/lua.js":[102,143],"./markdown/markdown.js":[56,68],"./mathematica/mathematica.js":[103,144],"./mbox/mbox.js":[104,145],"./meta.js":[46],"./mirc/mirc.js":[105,146],"./mllike/mllike.js":[106,147],"./modelica/modelica.js":[107,148],"./mscgen/mscgen.js":[108,149],"./mumps/mumps.js":[109,150],"./nginx/nginx.js":[110,151],"./nsis/nsis.js":[111,97],"./ntriples/ntriples.js":[112,152],"./octave/octave.js":[113,153],"./oz/oz.js":[114,154],"./pascal/pascal.js":[115,155],"./pegjs/pegjs.js":[116,2,156],"./perl/perl.js":[117,157],"./php/php.js":[118,2,3,8,91],"./pig/pig.js":[119,158],"./powershell/powershell.js":[120,159],"./properties/properties.js":[121,160],"./protobuf/protobuf.js":[122,161],"./pug/pug.js":[57,2,3,67],"./puppet/puppet.js":[123,162],"./python/python.js":[52,163],"./q/q.js":[124,164],"./r/r.js":[125,165],"./rpm/rpm.js":[126,166],"./rst/rst.js":[127,84],"./ruby/ruby.js":[45,167],"./rust/rust.js":[128,98],"./sas/sas.js":[129,168],"./sass/sass.js":[54,3,169],"./scheme/scheme.js":[130,170],"./shell/shell.js":[131,171],"./sieve/sieve.js":[132,172],"./slim/slim.js":[133,2,3,86],"./smalltalk/smalltalk.js":[134,173],"./smarty/smarty.js":[135,174],"./solr/solr.js":[136,175],"./soy/soy.js":[137,2,3,92],"./sparql/sparql.js":[138,176],"./spreadsheet/spreadsheet.js":[139,177],"./sql/sql.js":[140,178],"./stex/stex.js":[53,179],"./stylus/stylus.js":[58,69],"./swift/swift.js":[141,180],"./tcl/tcl.js":[142,181],"./textile/textile.js":[143,182],"./tiddlywiki/tiddlywiki.js":[144,183],"./tiki/tiki.js":[145,184],"./toml/toml.js":[146,185],"./tornado/tornado.js":[147,2,3,83],"./troff/troff.js":[148,186],"./ttcn-cfg/ttcn-cfg.js":[150,187],"./ttcn/ttcn.js":[149,188],"./turtle/turtle.js":[151,189],"./twig/twig.js":[152,93],"./vb/vb.js":[153,190],"./vbscript/vbscript.js":[154,191],"./velocity/velocity.js":[155,192],"./verilog/verilog.js":[156,193],"./vhdl/vhdl.js":[157,194],"./vue/vue.js":[158,2,3,69,67,79],"./webidl/webidl.js":[159,195],"./xml/xml.js":[40,196],"./xquery/xquery.js":[160,197],"./yacas/yacas.js":[161,198],"./yaml-frontmatter/yaml-frontmatter.js":[162,102],"./yaml/yaml.js":[55,199],"./z80/z80.js":[163,200]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(a)},o.id=59,e.exports=o}}]);
//# sourceMappingURL=41.51eb1997.chunk.js.map