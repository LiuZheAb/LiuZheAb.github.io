(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[27],{326:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var l=t(11),n=t(12),r=t(13),i=t(14),s=t(0),o=t.n(s),c=t(162),m=(t(40),t(36)),d=t(164),u=t.n(d),p=u.a.GraphObject.make,g=function(e){Object(i.a)(s,e);var a=Object(r.a)(s);function s(){return Object(l.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6(),this.diagramRender7()}},{key:"diagramRender1",value:function(){var e=p(u.a.Diagram,"myDiagramDiv1");e.nodeTemplate=p(u.a.Node,"Vertical",p(u.a.TextBlock,"text",{text:"Example"}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle"),p(u.a.Shape))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender2",value:function(){var e=p(u.a.Diagram,"myDiagramDiv2");e.nodeTemplate=p(u.a.Node,"Vertical",p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle"),p(u.a.Shape))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender3",value:function(){var e=p(u.a.Diagram,"myDiagramDiv3");e.nodeTemplate=p(u.a.Node,"Vertical",p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle",{figure:"Ellipse"}),p(u.a.Shape))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender4",value:function(){var e=p(u.a.Diagram,"myDiagramDiv4");e.nodeTemplate=p(u.a.Node,"Vertical",p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),p(u.a.Shape))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender5",value:function(){var e=p(u.a.Diagram,"myDiagramDiv5");e.nodeTemplate=p(u.a.Node,"Vertical",p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),p(u.a.Picture,t(194),{desiredSize:new u.a.Size(150,100),margin:new u.a.Margin(25,0,0,0)}))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender6",value:function(){var e=p(u.a.Diagram,"myDiagramDiv6");e.nodeTemplate=p(u.a.Node,"Vertical",{selectable:!0,deletable:!0,resizable:!0,rotatable:!0},p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",p(u.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),p(u.a.Picture,t(194),{desiredSize:new u.a.Size(150,100),margin:new u.a.Margin(25,0,0,0)}))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"diagramRender7",value:function(){var e=p(u.a.Diagram,"myDiagramDiv7");e.nodeTemplate=p(u.a.Node,"Vertical",{selectable:!0,deletable:!0,resizable:!0,rotatable:!0,resizeObjectName:"PANEL",rotateObjectName:"PANEL"},p(u.a.TextBlock,"text",{text:"Example",font:"Italic small-caps bold 12pt Georgia,Serif",stroke:"purple",editable:!0}),p(u.a.Panel,"Auto",{name:"PANEL"},p(u.a.Shape,"RoundedRectangle",{figure:"Ellipse",fill:"pink",stroke:"purple",strokeWidth:10}),p(u.a.Picture,t(194),{desiredSize:new u.a.Size(150,100),margin:new u.a.Margin(25,0,0,0)}))),e.model=new u.a.GraphLinksModel([{key:"Alpha"}])}},{key:"render",value:function(){return o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{className:"article"},o.a.createElement("div",{className:"article-title"},o.a.createElement("h1",null,"GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u516d\u8282 GoJS GraphObject\u5c5e\u6027")),o.a.createElement("div",{className:"article-content"},o.a.createElement("h2",null,"GraphObject\u5c5e\u6027"),o.a.createElement("ul",null,o.a.createElement("li",null,"GraphObject(\u4f8b\u5982 Shapes,TextBlocks,Pictures)\u652f\u6301\u591a\u79cd\u5c5e\u6027\u6765\u8bbe\u7f6e\u5b83\u4eec\u6837\u5f0f\u548c\u8868\u73b0"),o.a.createElement("li",null,"\u6709\u5173\u8fd9\u4e9b\u5c5e\u6027\u7684\u5b8c\u6574\u8bb0\u5f55\uff0c\u8bf7\u53c2\u9605",o.a.createElement("a",{href:"https://gojs.net/latest/api/index.html",target:"_blank",rel:"noopener noreferrer"},"API\u6587\u6863"))),o.a.createElement("h3",null,"TextBlock\u7684\u5c5e\u6027"),o.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\uff1a"),o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:t(271),alt:""})),o.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),o.a.createElement("ul",null,o.a.createElement("li",null,'"font"\u5c5e\u6027\u503c\u5fc5\u987b\u662f\u6b63\u786e\u683c\u5f0f\u7684\u5b57\u7b26\u4e32,',"<font-style font-variant fong-weight font-size font-family>"),o.a.createElement("li",null,'"stroke"\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u4efb\u610fcss color\u5b57\u7b26\u4e32')),o.a.createElement("ul",{"data-lake-indent":"1"},o.a.createElement("li",null,"\u6307\u5b9a\u540d\u79f0\u7684\u989c\u8272\uff0c\u5982red\u3001blue"),o.a.createElement("li",null,"\u5341\u516d\u8fdb\u5236"),o.a.createElement("li",null,"RGB"),o.a.createElement("li",null,"HSL")),o.a.createElement("ul",null,o.a.createElement("li",null,'"editable"\u5e03\u5c14\u5c5e\u6027\u51b3\u5b9a\u6587\u672c\u5757\u7684\u6587\u672c\u662f\u5426\u53ef\u4ee5\u7f16\u8f91')),o.a.createElement("p",null),o.a.createElement("p",null,"\u4ee3\u7801\u53ca\u6548\u679c\u5982\u4e0b\uff1a"),o.a.createElement(c.a,{value:'$(go.TextBlock, "text",{\n    text:"Example",\n    font:"Italic small-caps bold 12pt Georgia,Serif",\n    stroke:"purple",\n    editable:true\n})',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),o.a.createElement("h3",null,"Shape\u7684\u5c5e\u6027"),o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:t(272),alt:""})),o.a.createElement(c.a,{value:'$(go.Panel, "Auto",\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse"\n    }),\n    $(go.Shape)\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),o.a.createElement("ul",null,o.a.createElement("li",null,'"figure"\u5c5e\u6027\u51b3\u5b9a\u5f62\u72b6'),o.a.createElement("li",null,'"fill"\u5c5e\u6027\u51b3\u5b9a\u989c\u8272'),o.a.createElement("li",null,'"stroke"\u5c5e\u6027\u503c\u53ef\u4ee5\u662f\u4efb\u610fcss color\u5b57\u7b26\u4e32'),o.a.createElement("li",null,'"strokeWidth"\u5c5e\u6027\u503c\u662f\u6570\u5b57\uff0c\u51b3\u5b9a\u8fb9\u6846\u5bbd\u5ea6')),o.a.createElement(c.a,{value:'$(go.Panel, "Auto",\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse",\n        fill:"pink",\n        stroke:"purple",\n        strokeWith:10\n    }),\n    $(go.Shape)\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),o.a.createElement("h3",null,"Picture\u7684\u5c5e\u6027"),o.a.createElement("ul",null,o.a.createElement("li",null,'"Source"\u5c5e\u6027\u51b3\u5b9a\u56fe\u7247\u7684\u8def\u5f84,\u5728\u9009\u9879\u5bf9\u8c61\u4e2d\u8bbe\u7f6e\u6216\u4f5c\u4e3a\u53ef\u9009\u5b57\u7b26\u4e32\u53c2\u6570'),o.a.createElement("li",null,'"desiredSize"\u5c5e\u6027\u901a\u8fc7new go.Size(width,height)\u51b3\u5b9a\u56fe\u7247\u5927\u5c0f'),o.a.createElement("li",null,'"margin"\u5c5e\u6027\u901a\u8fc7new go.Margin(top,right,bottom,left)\u51b3\u5b9a\u56fe\u7247\u7684margin')),o.a.createElement(c.a,{value:'$(go.Picture,"./avatar.54d15c2f.jpg",\n    {\n        desiredSize:new go.Size(150,100),\n        margin:new go.Margin(25,0,0,0)\n    }\n)',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),o.a.createElement("h3",null,"Node\u7684\u5c5e\u6027"),o.a.createElement("ul",null,o.a.createElement("li",null,'"selectable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u9009'),o.a.createElement("li",null,'"deletable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u5220\u9664'),o.a.createElement("li",null,'"resizable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u6539\u53d8\u5927\u5c0f'),o.a.createElement("li",null,'"rotatable"\u5c5e\u6027\u51b3\u5b9a\u8282\u70b9\u662f\u5426\u53ef\u65cb\u8f6c')),o.a.createElement(c.a,{value:'$(go.Node, "Vertical", {\n    selectable:true,\n    deletable:true,\n    resizable:true,\n    rotatable:true\n},',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),o.a.createElement("ul",null,o.a.createElement("li",null,"resizeObjectName:\u8981\u8c03\u6574\u5927\u5c0f\u7684GraphObject\u7684\u540d\u79f0"),o.a.createElement("li",null,"rotateobjectName:\u8981\u65cb\u8f6c\u7684GraphObiect\u7684\u540d\u79f0"),o.a.createElement("li",null,"\u503c\u5fc5\u987b\u4e0e\u90e8\u4ef6\u4e2d\u7684\u547d\u540d\u5143\u7d20\u76f8\u5bf9\u5e94")),o.a.createElement(c.a,{value:'$(go.Node, "Vertical", {\n    selectable: true,\n    deletable: true,\n    resizable: true,\n    rotatable: true,\n    resizeObjectName: "PANEL",\n    rotateObjectName: "PANEL"\n},\n$(go.TextBlock, "text", {\n    text: "Example",\n    font: "Italic small-caps bold 12pt Georgia,Serif",\n    stroke: "purple",\n    editable: true\n}),\n$(go.Panel, "Auto", {\n        name: "PANEL"\n    },\n    $(go.Shape, "RoundedRectangle", {\n        figure: "Ellipse",\n        fill: "pink",\n        stroke: "purple",\n        strokeWidth: 10\n    }),\n    $(go.Picture, "./avatar.54d15c2f.jpg", {\n        desiredSize: new go.Size(150, 100),\n        margin: new go.Margin(25, 0, 0, 0)\n    })\n)\n);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),o.a.createElement("div",{id:"myDiagramDiv7",className:"diagram"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/06graphObjectProperties.html")))),o.a.createElement(m.a,null))}}]),s}(s.Component)},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(11),n=t(12),r=t(15),i=t(13),s=t(14),o=t(0),c=t.n(o),m=(t(37),function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(r.a)(n)),n}return Object(n.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var i=document.body.scrollTop||document.documentElement.scrollTop;if((i+=l+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(l-i+r,"px;transition:none");else{var s=window.scrollY;s>e.offsetHeight&&(a<s&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=s),a>s&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=s)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],i=0;i<n;i++){var s=document.getElementById(t[i].name);r.push(s.offsetTop)}for(var o=r.findIndex((function(e){return e>l}))-1,m=0;m<n;m++)document.getElementById("tree-num-".concat(m)).className=m===o?"tree-num directory-item-active":"tree-num";-2===o&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return c.a.createElement("div",{className:"directory"},c.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return c.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(o.Component))},37:function(e,a,t){},40:function(e,a,t){},57:function(e,a,t){var l={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=57,e.exports=n}}]);
//# sourceMappingURL=27.74d55865.chunk.js.map