(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[18],{37:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t(11),n=t(12),r=t(13),s=t(14),o=t(0),m=t.n(o),i=(t(38),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:a})},n.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:n.props.articleTree,scrollTop:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],l=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var s=document.body.scrollTop||document.documentElement.scrollTop;if((s+=l+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(l-s+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(a<o&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=o),a>o&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=o)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,l=a.scrollTop,n=t.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],s=0;s<n;s++){var o=document.getElementById(t[s].name);r.push(o.offsetTop)}for(var i=r.findIndex((function(e){return e>l}))-1,c=0;c<n;c++)document.getElementById("tree-num-".concat(c)).className=c===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var t=e.articleTree;return t!==a.articleTree?{articleTree:t}:null}}]),t}(o.Component))},38:function(e,a,t){},41:function(e,a,t){},450:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var l=t(11),n=t(12),r=t(15),s=t(13),o=t(14),m=t(0),i=t.n(m),c=t(165),d=(t(41),t(37)),u=t(16),j=t(59),p=t.n(j),y=p.a.GraphObject.make,h=function(e){Object(o.a)(m,e);var a=Object(s.a)(m);function m(e){var t;return Object(l.a)(this,m),(t=a.call(this,e)).state={articleTree:[]},t.getArticleTree=t.getArticleTree.bind(Object(r.a)(t)),t}return Object(n.a)(m,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0;t<e.length-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"componentDidMount",value:function(){document.title="GoJS\u6559\u7a0b\u2014\u2014\u7b2c\u4e8c\u8282 GoJS\u5e94\u7528\u4e2d\u6709\u4ec0\u4e48",this.getArticleTree(),this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4()}},{key:"diagramRender1",value:function(){y(p.a.Diagram,"myDiagramDiv1")}},{key:"diagramRender2",value:function(){var e=y(p.a.Diagram,"myDiagramDiv2");e.model=y(p.a.Model),e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"}]}},{key:"diagramRender3",value:function(){var e=y(p.a.Diagram,"myDiagramDiv3");e.model=y(p.a.GraphLinksModel),e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"}],e.model.linkDataArray=[{from:"Alpha",to:"Beta"}]}},{key:"diagramRender4",value:function(){var e=y(p.a.Diagram,"myDiagramDiv4");e.model=y(p.a.GraphLinksModel),e.model.nodeDataArray=[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"}],e.model.linkDataArray=[{from:"Alpha",to:"Beta"}],e.layout=y(p.a.CircularLayout)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u4e8c\u8282 GoJS\u5e94\u7528\u4e2d\u6709\u4ec0\u4e48")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"(Model-View)\u6a21\u578b-\u89c6\u56fe\u4f53\u7cfb\u7ed3\u6784"),i.a.createElement("ul",null,i.a.createElement("li",null,"Diagram\u4fdd\u5b58\u5e76\u663e\u793aParts")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"Parts\u662fNodes\u3001Links\u3001Groups\u548cAdornments")),i.a.createElement("ul",null,i.a.createElement("li",null,"Model\u5b58\u50a8\u63cf\u8ff0Diagram Parts\u7684\u6570\u636e")),i.a.createElement("p",null,"\u5982\u56fe\u6240\u793a\uff1a"),i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:t(264),style:{width:300},alt:""})),i.a.createElement("p",null,"\u6570\u636e\u53cc\u5411\u7ed1\u5b9a\u7684\u4f8b\u5b50\u8bf7\u770b",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gojs.net/latest/samples/updateDemo.html"},"GoJS_updateDemo")),i.a.createElement("h2",null,"\u6784\u5efa\u4e00\u4e2aDiagram"),i.a.createElement("ul",null,i.a.createElement("li",null,'"View"\u2014\u2014\u5c06Model\u4e2d\u7684\u8282\u70b9\u548c\u94fe\u63a5\u6570\u636e\u53ef\u89c6\u5316\u5230GoJS Node/Link\u5bf9\u8c61\u4e2d'),i.a.createElement("li",null,"go.GraphObject.make(go.Diagram,","<DIV element | DIV id>",")")),i.a.createElement(c.a,{value:'<div id="myDiagramDiv" style="height: 400px;width: 400px;border: 1px solid #000;"></div>\n\nlet $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("p",null,"\u4e0b\u9762\u5c31\u662f\u6784\u5efa\u51fa\u7684Diagram,\u6ca1\u6709\u5b9a\u4e49\u4efb\u4f55Node\u548cLink,\u6240\u4ee5\u663e\u793a\u4e3a\u7a7a\u767d"),i.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),i.a.createElement("h2",null,"\u6784\u5efa\u4e00\u4e2aModel"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5b58\u50a8\u7a0d\u540e\u5c06\u5728Diagram\u4e2d\u663e\u793a\u7684\u6570\u636e")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"nodeDataArray\u5b58\u50a8\u8282\u70b9\u6570\u636e"),i.a.createElement("li",null,"linkDataArray\u5b58\u50a8\u94fe\u63a5\u6570\u636e")),i.a.createElement("ul",null,i.a.createElement("li",null,"go.GraphObject.make(go.Model)")),i.a.createElement(c.a,{value:'myDiagram.model = $(go.Model);\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}, {\n    key: "Delta"\n}, {\n    key: "Epsilon"\n}];',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),i.a.createElement("div",{className:"tip"},i.a.createElement("div",{className:"tip-content"},i.a.createElement("p",null,i.a.createElement("em",null,"Tool\u548cCommandHandler\u9ed8\u8ba4\u53ef\u7528\uff0c\u4f8b\u5982\uff1a\u4f60\u53ef\u4ee5\u4f7f\u7528delete\u952e\u5220\u9664\u5143\u7d20\uff0cCtrl-C\u3001Ctrl-V\u590d\u5236\u7c98\u8d34\u5143\u7d20")),i.a.createElement("p",null,i.a.createElement("em",null,"\u5728\u89e6\u6478\u8bbe\u5907\u4e0a,\u957f\u6309\u5143\u7d20\u5c06\u5f39\u51facommand\u83dc\u5355")),i.a.createElement("p",null,i.a.createElement("em",null,"\u66f4\u591a\u8be6\u60c5\u8bf7\u770b",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://gojs.net/latest/intro/commands.html"},"GoJS_Intro_Commands"))))),i.a.createElement("h2",null,"Model\u7684\u79cd\u7c7b"),i.a.createElement("ul",null,i.a.createElement("li",null,"GoJS Model\u67093\u79cd\u7c7b\u578b")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"Model(\u9ed8\u8ba4)"),i.a.createElement("li",null,"GraphLinksModel"),i.a.createElement("li",null,"TreeModel")),i.a.createElement("p",null,i.a.createElement("em",null,"\u6bcf\u79cdModel\u7684\u8be6\u60c5\u8bf7\u770b",i.a.createElement(u.b,{to:"/gojs/4"},"GoJS\u5165\u95e8\u6559\u7a0b\u2014\u2014\u7b2c\u56db\u8282 GoJS Diatram Model"))),i.a.createElement(c.a,{value:'myDiagram.model = $(go.GraphLinksModel);\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}, {\n    key: "Delta"\n}, {\n    key: "Epsilon"\n}];\nmyDiagram.model.linkDataArray = [{\n    from: "Alpha",\n    to: "Beta"\n}];',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),i.a.createElement("h2",null,"Layouts"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u53ef\u4ee5\u5e94\u7528\u4e8eDiagram\u6216Group"),i.a.createElement("li",null,"\u6392\u5217\u5176\u5143\u7d20\u7684Node")),i.a.createElement(c.a,{value:'myDiagram.model = $(go.GraphLinksModel);\nmyDiagram.model.nodeDataArray = [{\n    key: "Alpha"\n}, {\n    key: "Beta"\n}, {\n    key: "Gamma"\n}, {\n    key: "Delta"\n}, {\n    key: "Epsilon"\n}];\nmyDiagram.model.linkDataArray = [{\n    from: "Alpha",\n    to: "Beta"\n}];\nmyDiagram.layout = $(go.CircularLayout);',options:{theme:"monokai",mode:"JSX",readOnly:!0}}),i.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),i.a.createElement("p",null,i.a.createElement("em",null,"\u66f4\u591a\u8be6\u60c5\u8bf7\u770b",i.a.createElement("a",{href:"https://gojs.net/latest/intro/layouts.html"},"GoJS_Intro_Layouts"))),i.a.createElement("h2",null,"\u603b\u7ed3"),i.a.createElement("ul",null,i.a.createElement("li",null,"GoJS\u6709\u4e00\u4e2amodel-view\u67b6\u6784")),i.a.createElement("ul",{"data-lake-indent":"1"},i.a.createElement("li",null,"Diagram \u2248 View"),i.a.createElement("li",null,"Diagram.model \u2248 Model")),i.a.createElement("ul",null,i.a.createElement("li",null,"GoJS\u4ea4\u4e92\u7531Tools\u548cCommandHandler\u63a7\u5236"),i.a.createElement("li",null,"Layouts\u53ef\u4ee5\u5e94\u7528\u4e8eDiagram\u6216Groups\u6765\u5b89\u6392\u5b83\u4eec\u7684\u5185\u5bb9\u81ea\u9002\u5e94")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/02whatIsInGojsApp.html")))),i.a.createElement("div",{className:"directory"},i.a.createElement(d.a,{articleTree:this.state.articleTree})))}}]),m}(m.Component)},60:function(e,a,t){var l={"./apl/apl.js":[61,75],"./asciiarmor/asciiarmor.js":[62,76],"./asn.1/asn.1.js":[63,77],"./asterisk/asterisk.js":[64,78],"./brainfuck/brainfuck.js":[65,79],"./clike/clike.js":[48,4],"./clojure/clojure.js":[66,80],"./cmake/cmake.js":[67,81],"./cobol/cobol.js":[68,82],"./coffeescript/coffeescript.js":[49,83],"./commonlisp/commonlisp.js":[69,84],"./crystal/crystal.js":[70,85],"./css/css.js":[43,3],"./cypher/cypher.js":[71,86],"./d/d.js":[72,87],"./dart/dart.js":[73,4,88],"./diff/diff.js":[74,89],"./django/django.js":[75,2,3,52],"./dockerfile/dockerfile.js":[76,63],"./dtd/dtd.js":[77,90],"./dylan/dylan.js":[78,91],"./ebnf/ebnf.js":[79,92],"./ecl/ecl.js":[80,93],"./eiffel/eiffel.js":[81,94],"./elm/elm.js":[82,95],"./erlang/erlang.js":[83,96],"./factor/factor.js":[84,64],"./fcl/fcl.js":[85,97],"./forth/forth.js":[86,98],"./fortran/fortran.js":[87,99],"./gas/gas.js":[88,100],"./gfm/gfm.js":[89,6,62],"./gherkin/gherkin.js":[90,101],"./go/go.js":[91,102],"./groovy/groovy.js":[92,103],"./haml/haml.js":[93,2,3,55],"./handlebars/handlebars.js":[50,58],"./haskell-literate/haskell-literate.js":[94,67],"./haskell/haskell.js":[51,104],"./haxe/haxe.js":[95,105],"./htmlembedded/htmlembedded.js":[96,2,3,51],"./htmlmixed/htmlmixed.js":[42,2,3,68],"./http/http.js":[97,106],"./idl/idl.js":[98,107],"./javascript/javascript.js":[44,2],"./jinja2/jinja2.js":[99,108],"./jsx/jsx.js":[100,2,69],"./julia/julia.js":[101,109],"./livescript/livescript.js":[102,110],"./lua/lua.js":[103,111],"./markdown/markdown.js":[56,6],"./mathematica/mathematica.js":[104,112],"./mbox/mbox.js":[105,113],"./meta.js":[47],"./mirc/mirc.js":[106,114],"./mllike/mllike.js":[107,115],"./modelica/modelica.js":[108,116],"./mscgen/mscgen.js":[109,117],"./mumps/mumps.js":[110,118],"./nginx/nginx.js":[111,119],"./nsis/nsis.js":[112,65],"./ntriples/ntriples.js":[113,120],"./octave/octave.js":[114,121],"./oz/oz.js":[115,122],"./pascal/pascal.js":[116,123],"./pegjs/pegjs.js":[117,2,124],"./perl/perl.js":[118,125],"./php/php.js":[119,2,3,4,59],"./pig/pig.js":[120,126],"./powershell/powershell.js":[121,127],"./properties/properties.js":[122,128],"./protobuf/protobuf.js":[123,129],"./pug/pug.js":[57,2,3,5],"./puppet/puppet.js":[124,130],"./python/python.js":[52,131],"./q/q.js":[125,132],"./r/r.js":[126,133],"./rpm/rpm.js":[127,134],"./rst/rst.js":[128,54],"./ruby/ruby.js":[45,135],"./rust/rust.js":[129,66],"./sas/sas.js":[130,136],"./sass/sass.js":[54,3,137],"./scheme/scheme.js":[131,138],"./shell/shell.js":[132,139],"./sieve/sieve.js":[133,140],"./slim/slim.js":[134,2,3,56],"./smalltalk/smalltalk.js":[135,141],"./smarty/smarty.js":[136,142],"./solr/solr.js":[137,143],"./soy/soy.js":[138,2,3,60],"./sparql/sparql.js":[139,144],"./spreadsheet/spreadsheet.js":[140,145],"./sql/sql.js":[141,146],"./stex/stex.js":[53,147],"./stylus/stylus.js":[58,7],"./swift/swift.js":[142,148],"./tcl/tcl.js":[143,149],"./textile/textile.js":[144,150],"./tiddlywiki/tiddlywiki.js":[145,151],"./tiki/tiki.js":[146,152],"./toml/toml.js":[147,153],"./tornado/tornado.js":[148,2,3,53],"./troff/troff.js":[149,154],"./ttcn-cfg/ttcn-cfg.js":[151,155],"./ttcn/ttcn.js":[150,156],"./turtle/turtle.js":[152,157],"./twig/twig.js":[153,61],"./vb/vb.js":[154,158],"./vbscript/vbscript.js":[155,159],"./velocity/velocity.js":[156,160],"./verilog/verilog.js":[157,161],"./vhdl/vhdl.js":[158,162],"./vue/vue.js":[159,2,3,7,5,36],"./webidl/webidl.js":[160,163],"./xml/xml.js":[40,164],"./xquery/xquery.js":[161,165],"./yacas/yacas.js":[162,166],"./yaml-frontmatter/yaml-frontmatter.js":[163,70],"./yaml/yaml.js":[55,167],"./z80/z80.js":[164,168]};function n(e){if(!t.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],n=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=60,e.exports=n}}]);
//# sourceMappingURL=18.dab73f03.chunk.js.map