(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[12],{310:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var l=t(11),n=t(12),r=t(13),o=t(14),i=t(0),s=t.n(i),m=t(162),c=(t(40),t(36)),d=t(164),u=t.n(d),h=u.a.GraphObject.make,p=function(e){Object(o.a)(i,e);var a=Object(r.a)(i);function i(){return Object(l.a)(this,i),a.apply(this,arguments)}return Object(n.a)(i,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5()}},{key:"diagramRender1",value:function(){var e=h(u.a.Diagram,"myDiagramDiv1");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"},{key:"Omega"},{key:"Phi"},{key:"Kappa"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Alpha",to:"Delta"},{from:"Alpha",to:"Epsilon"},{from:"Alpha",to:"Zeta"},{from:"Alpha",to:"Omega"},{from:"Alpha",to:"Phi"},{from:"Alpha",to:"Kappa"}]})}},{key:"diagramRender2",value:function(){var e=h(u.a.Diagram,"myDiagramDiv2");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender3",value:function(){var e=h(u.a.Diagram,"myDiagramDiv3");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:100}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender4",value:function(){var e=h(u.a.Diagram,"myDiagramDiv4");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:100,defaultSpringStiffness:.2}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"diagramRender5",value:function(){var e=h(u.a.Diagram,"myDiagramDiv5");e.nodeTemplate=h(u.a.Node,"Auto",h(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),h(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=h(u.a.ForceDirectedLayout,{defaultElectricalCharge:300,defaultSpringLength:200,defaultSpringStiffness:.2,defaultGravitationalMass:0,isFixed:function(e){var a=e.node;return!!a&&"Beta"===a.data.key}}),e.model=h(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"}]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS\u5e03\u5c40\u2014\u2014\u7b2c\u56db\u8282 \u529b\u5bfc\u5411\u5e03\u5c40(ForceDirectedLayout)")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u793a\u4f8b"),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\n\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n            margin: 8\n        },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.ForceDirectedLayout);\nmyDiagram.model =\n    $(go.GraphLinksModel, {\n        nodeDataArray: [{\n            key: "Alpha",\n        }, {\n            key: "Beta",\n        }, {\n            key: "Gamma"\n        }, {\n            key: "Delta"\n        }, {\n            key: "Epsilon"\n        }, {\n            key: "Zeta"\n        }, {\n            key: "Omega"\n        }, {\n            key: "Phi"\n        }, {\n            key: "Kappa"\n        },],\n        linkDataArray: [{\n            from: "Alpha",\n            to: "Beta"\n        }, {\n            from: "Alpha",\n            to: "Gamma"\n        }, {\n            from: "Alpha",\n            to: "Delta"\n        }, {\n            from: "Alpha",\n            to: "Epsilon"\n        }, {\n            from: "Alpha",\n            to: "Zeta"\n        }, {\n            from: "Alpha",\n            to: "Omega"\n        }, {\n            from: "Alpha",\n            to: "Phi"\n        }, {\n            from: "Alpha",\n            to: "Kappa"\n        }]\n    })',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"\u7b80\u4ecb"),s.a.createElement("p",null,"\u529b\u5bfc\u5411\u5e03\u5c40\u7b97\u6cd5\u662f\u4e00\u7c7b\u7ed8\u56fe\u7b97\u6cd5\uff0c\u5b83\u4ec5\u4ec5\u57fa\u4e8e\u56fe\u7684\u7ed3\u6784\u672c\u8eab\u6765\u7ed8\u56fe\uff0c\u800c\u4e0d\u4f9d\u8d56\u4e8e\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),s.a.createElement("p",null,"GoJS ForceDirected Layout\u6709\u4e09\u79cd"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u7535\u573a\u65a5\u529b"),s.a.createElement("li",null,"\u5f15\u529b"),s.a.createElement("li",null,"\u5f39\u7c27\u529b")),s.a.createElement("h2",null,"\u7535\u573a\u65a5\u529b"),s.a.createElement("p",null,"\u628a\u6bcf\u4e2aNode\u770b\u505a\u4e00\u4e2a\u7535\u8377,\u7535\u8377\u4e0e\u7535\u8377\u4e4b\u95f4\u5b58\u5728\u65a5\u529b,\u4e5f\u5c31\u662f\u5e93\u4ed1\u529b,\u6839\u636e\u5e93\u4ed1\u5b9a\u5f8b(Coulomb's law),\u7535\u8377\u4e4b\u95f4\u7684\u65a5\u529b\u53ef\u4ee5\u8fd9\u4e48\u8ba1\u7b97:"),s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:t(279),alt:""})),s.a.createElement("p",{className:"text-center"},"Coulomb's law"),s.a.createElement("ul",null,s.a.createElement("li",null,"k\u4e3a\u5e93\u4ed1\u5e38\u6570(\u9759\u7535\u529b\u5e38\u91cf)"),s.a.createElement("li",null,"q\u4e3a\u7535\u8377\u5e26\u7535\u91cf"),s.a.createElement("li",null,"r\u4e3a\u7535\u8377\u95f4\u8ddd")),s.a.createElement("h3",null,"defaultElectricalCharge"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9aNode\u95f4\u7684\u8ddd\u79bb\uff0c\u5373r"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a150")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n     defaultElectricalCharge: 300,\n     }\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"\u5f15\u529b"),s.a.createElement("h3",null,"defaultGravitationalMass "),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9aNode\u95f4\u7684\u5f15\u529b\u7cfb\u6570"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a0")),s.a.createElement("h2",null,"\u5f39\u7c27\u529b"),s.a.createElement("h3",null,"defaultSpringLength"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9aNode\u95f4\u5f39\u7c27\u7684\u957f\u5ea6"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a50")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 100\n    }\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h3",null,"defaultSpringStiffness"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9aNode\u95f4\u5f39\u7c27\u7684\u521a\u5ea6"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a0.05")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 100,\n    defaultSpringStiffness: 0.2,\n    }\n});",options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("h2",null,"isFixed"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u4e3atrue\u65f6Node\u4e0d\u4f1a\u88abLayout\u5f71\u54cd\uff0c\u4f46\u4ecd\u7136\u5bf9\u9644\u8fd1\u548c\u8fde\u63a5\u7684Node\u6709\u5f71\u54cd\u3002\u5373Node\u81ea\u8eab\u88ab\u56fa\u5b9a")),s.a.createElement(m.a,{value:'myDiagram.layout = $(go.ForceDirectedLayout, {\n    defaultElectricalCharge: 300,\n    defaultSpringLength: 200,\n    defaultSpringStiffness: 0.2,\n    defaultGravitationalMass:0,\n    isFixed: function (v) {\n        let node = v.node;\n        if (!node) return false;\n        else return node.data.key === "Beta";\n    }\n});',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{height:500,maxWidth:600}}),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,s.a.createElement("br",null)),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/10forceDirectedLayout.html")))),s.a.createElement(c.a,null))}}]),i}(i.Component)},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(11),n=t(12),r=t(15),o=t(13),i=t(14),s=t(0),m=t.n(s),c=(t(37),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(r.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var o=document.body.scrollTop||document.documentElement.scrollTop;if((o+=l+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(l-o+r,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=i)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],o=0;o<n;o++){var i=document.getElementById(t[o].name);r.push(i.offsetTop)}for(var s=r.findIndex((function(e){return e>l}))-1,c=0;c<n;c++)document.getElementById("tree-num-".concat(c)).className=c===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(s.Component))},37:function(e,a,t){},40:function(e,a,t){},57:function(e,a,t){var l={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=57,e.exports=n}}]);
//# sourceMappingURL=12.845dd805.chunk.js.map