(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[8],{175:function(e,t,a){},236:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return r}))},312:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var s=a(236),n=a(11),r=a(12),l=a(13),o=a(14),c=a(0),i=a.n(c),m=a(36),d=a(162),u=(a(175),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=t.call(this,e)).state={articleTree:[],style:{maxWidth:300,transition:"transform 0.3s",transform:"skew(15deg, 15deg)"}},a}return Object(r.a)(c,[{key:"selectCode",value:function(e){var t=Object(s.a)({},this.state.style);t.transform=0===e?"skew(0)":1===e?"skew(15deg, 15deg)":2===e?"skew(-0.06turn, 18deg)":3===e?"skew(.312rad)":"",this.setState({style:t});for(var a=document.getElementsByClassName("code-box"),n=0;n<a.length;n++)e===n?a[e].className="code-box code-box-active":a[n].className="code-box"}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"skew()")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u6982\u8ff0"),i.a.createElement("p",{className:"indent-2"},"skew() \u51fd\u6570\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5143\u7d20\u5728\u4e8c\u7ef4\u5e73\u9762\u4e0a\u7684\u503e\u659c\u8f6c\u6362\u3002\u5b83\u7684\u7ed3\u679c\u662f\u4e00\u4e2a<transform-function> \u6570\u636e\u7c7b\u578b"),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("p",null,"\u70b9\u51fb\u4e0b\u9762\u7684\u4ee3\u7801\u5757\u67e5\u770b\u9884\u89c8"),i.a.createElement("div",{style:{width:"100%",maxWidth:800,margin:"0 auto"}},i.a.createElement("div",{className:"code-box",onClick:this.selectCode.bind(this,0)},i.a.createElement(d.a,{value:"transform: skew(0);",options:{theme:"3024-day",mode:"CSS",readOnly:"nocursor"}})),i.a.createElement("div",{className:"code-box code-box-active",onClick:this.selectCode.bind(this,1)},i.a.createElement(d.a,{value:"transform: skew(15deg, 15deg);",options:{theme:"3024-day",mode:"CSS",readOnly:"nocursor"}})),i.a.createElement("div",{className:"code-box",onClick:this.selectCode.bind(this,2)},i.a.createElement(d.a,{value:"transform: skew(-0.06turn, 18deg);",options:{theme:"3024-day",mode:"CSS",readOnly:"nocursor"}})),i.a.createElement("div",{className:"code-box",onClick:this.selectCode.bind(this,3)},i.a.createElement(d.a,{value:"transform: skew(.312rad);",options:{theme:"3024-day",mode:"CSS",readOnly:"nocursor"}}))),i.a.createElement("div",{className:"text-center",style:{margin:"50px 0"}},i.a.createElement("img",{src:a(281),alt:"",style:this.state.style})),i.a.createElement("p",{className:"indent-2"},"\u8fd9\u79cd\u8f6c\u6362\u662f\u4e00\u79cd\u526a\u5207\u6620\u5c04(\u6a2a\u5207)\uff0c\u5b83\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u5c06\u5355\u5143\u5185\u7684\u6bcf\u4e2a\u70b9\u626d\u66f2\u4e00\u5b9a\u7684\u89d2\u5ea6\u3002\u6bcf\u4e2a\u70b9\u7684\u5750\u6807\u6839\u636e\u6307\u5b9a\u7684\u89d2\u5ea6\u4ee5\u53ca\u5230\u539f\u70b9\u7684\u8ddd\u79bb\uff0c\u8fdb\u884c\u6210\u6bd4\u4f8b\u7684\u503c\u8c03\u6574\uff1b\u56e0\u6b64\uff0c\u4e00\u4e2a\u70b9\u79bb\u539f\u70b9\u8d8a\u8fdc\uff0c\u5176\u589e\u52a0\u7684\u503c\u5c31\u8d8a\u5927\u3002"),i.a.createElement("h2",null,"\u8bed\u6cd5"),i.a.createElement("p",{className:"indent-2"},"skew() \u51fd\u6570\u6307\u5b9a\u4e00\u4e2a\u6216\u4e24\u4e2a\u53c2\u6570\uff0c\u5b83\u4eec\u8868\u793a\u5728\u6bcf\u4e2a\u65b9\u5411\u4e0a\u5e94\u7528\u7684\u503e\u659c\u91cf\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,"skew(ax)"),i.a.createElement("li",null,"skew(ax, ay)")),i.a.createElement("h3",null,"\u53c2\u6570\u503c"),i.a.createElement("ul",null,i.a.createElement("li",null,"ax"),i.a.createElement("p",null,"ax \u662f\u4e00\u4e2a <angle>\uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u6a2a\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002"),i.a.createElement("li",null,"ay"),i.a.createElement("p",null,"ay \u662f\u4e00\u4e2a <angle> \uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u7eb5\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u5219\u5176\u9ed8\u8ba4\u503c\u4e3a0\uff0c\u5bfc\u81f4\u7eaf\u6c34\u5e73\u503e\u659c\u3002")),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("h3",null,"\u4f7f\u7528\u5355\u4e2a\u53c2\u6570"),i.a.createElement("p",{className:"indent-2"},"HTML"),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"3024-day",mode:"HTML",readOnly:!0}}),i.a.createElement("p",{className:"indent-2"},"CSS"),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n\n.skewed {\n    transform: skew(10deg); /* Equal to skewX(10deg) */\n    background-color: pink;\n}",options:{theme:"3024-day",mode:"CSS",readOnly:!0}}),i.a.createElement("p",{className:"indent-2"},"\u7ed3\u679c"),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:800,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg)"}},"Skewed")),i.a.createElement("h3",null,"\u4f7f\u7528\u4e24\u4e2a\u53c2\u6570"),i.a.createElement("p",{className:"indent-2"},"HTML"),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"3024-day",mode:"HTML",readOnly:!0}}),i.a.createElement("p",{className:"indent-2"},"CSS"),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n  \n.skewed {\n    transform: skew(10deg, 10deg);\n    background-color: pink;\n}",options:{theme:"3024-day",mode:"CSS",readOnly:!0}}),i.a.createElement("p",{className:"indent-2"},"\u7ed3\u679c"),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:800,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg,10deg)"}},"Skewed")))),i.a.createElement(m.a,null))}}]),c}(c.Component))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(11),n=a(12),r=a(15),l=a(13),o=a(14),c=a(0),i=a.n(c),m=(a(37),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:t})},n.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0;a<e.length-1;a++){var s=e[a].nodeName;"H2"!==s&&"H3"!==s||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],s=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],r=0;n;)r+=n.offsetTop,n=n.offsetParent;var l=document.body.scrollTop||document.documentElement.scrollTop;if((l+=s+a.offsetHeight)>r+e.offsetHeight)a.style="position:fixed;top:".concat(s-l+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=o)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,s=t.scrollTop,n=a.length;if(document.getElementById("tree-num-0")&&n>0){for(var r=[],l=0;l<n;l++){var o=document.getElementById(a[l].name);r.push(o.offsetTop)}for(var c=r.findIndex((function(e){return e>s}))-1,m=0;m<n;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return i.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(c.Component))},37:function(e,t,a){},57:function(e,t,a){var s={"./apl/apl.js":[58,79],"./asciiarmor/asciiarmor.js":[59,80],"./asn.1/asn.1.js":[60,81],"./asterisk/asterisk.js":[61,82],"./brainfuck/brainfuck.js":[62,83],"./clike/clike.js":[46,5],"./clojure/clojure.js":[63,84],"./cmake/cmake.js":[64,85],"./cobol/cobol.js":[65,86],"./coffeescript/coffeescript.js":[47,87],"./commonlisp/commonlisp.js":[66,88],"./crystal/crystal.js":[67,89],"./css/css.js":[42,3],"./cypher/cypher.js":[68,90],"./d/d.js":[69,91],"./dart/dart.js":[70,5,92],"./diff/diff.js":[71,93],"./django/django.js":[72,2,3,59],"./dockerfile/dockerfile.js":[73,71],"./dtd/dtd.js":[74,94],"./dylan/dylan.js":[75,95],"./ebnf/ebnf.js":[76,96],"./ecl/ecl.js":[77,97],"./eiffel/eiffel.js":[78,98],"./elm/elm.js":[79,99],"./erlang/erlang.js":[80,100],"./factor/factor.js":[81,72],"./fcl/fcl.js":[82,101],"./forth/forth.js":[83,102],"./fortran/fortran.js":[84,103],"./gas/gas.js":[85,104],"./gfm/gfm.js":[86,48,70],"./gherkin/gherkin.js":[87,105],"./go/go.js":[88,106],"./groovy/groovy.js":[89,107],"./haml/haml.js":[90,2,3,62],"./handlebars/handlebars.js":[48,66],"./haskell-literate/haskell-literate.js":[91,75],"./haskell/haskell.js":[49,108],"./haxe/haxe.js":[92,109],"./htmlembedded/htmlembedded.js":[93,2,3,58],"./htmlmixed/htmlmixed.js":[41,2,3,76],"./http/http.js":[94,110],"./idl/idl.js":[95,111],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[96,112],"./jsx/jsx.js":[97,2,77],"./julia/julia.js":[98,113],"./livescript/livescript.js":[99,114],"./lua/lua.js":[100,115],"./markdown/markdown.js":[54,48],"./mathematica/mathematica.js":[101,116],"./mbox/mbox.js":[102,117],"./meta.js":[45],"./mirc/mirc.js":[103,118],"./mllike/mllike.js":[104,119],"./modelica/modelica.js":[105,120],"./mscgen/mscgen.js":[106,121],"./mumps/mumps.js":[107,122],"./nginx/nginx.js":[108,123],"./nsis/nsis.js":[109,73],"./ntriples/ntriples.js":[110,124],"./octave/octave.js":[111,125],"./oz/oz.js":[112,126],"./pascal/pascal.js":[113,127],"./pegjs/pegjs.js":[114,2,128],"./perl/perl.js":[115,129],"./php/php.js":[116,2,3,5,67],"./pig/pig.js":[117,130],"./powershell/powershell.js":[118,131],"./properties/properties.js":[119,132],"./protobuf/protobuf.js":[120,133],"./pug/pug.js":[55,2,3,47],"./puppet/puppet.js":[121,134],"./python/python.js":[50,135],"./q/q.js":[122,136],"./r/r.js":[123,137],"./rpm/rpm.js":[124,138],"./rst/rst.js":[125,61],"./ruby/ruby.js":[44,139],"./rust/rust.js":[126,74],"./sas/sas.js":[127,140],"./sass/sass.js":[52,3,141],"./scheme/scheme.js":[128,142],"./shell/shell.js":[129,143],"./sieve/sieve.js":[130,144],"./slim/slim.js":[131,2,3,63],"./smalltalk/smalltalk.js":[132,145],"./smarty/smarty.js":[133,146],"./solr/solr.js":[134,147],"./soy/soy.js":[135,2,3,68],"./sparql/sparql.js":[136,148],"./spreadsheet/spreadsheet.js":[137,149],"./sql/sql.js":[138,150],"./stex/stex.js":[51,151],"./stylus/stylus.js":[56,49],"./swift/swift.js":[139,152],"./tcl/tcl.js":[140,153],"./textile/textile.js":[141,154],"./tiddlywiki/tiddlywiki.js":[142,155],"./tiki/tiki.js":[143,156],"./toml/toml.js":[144,157],"./tornado/tornado.js":[145,2,3,60],"./troff/troff.js":[146,158],"./ttcn-cfg/ttcn-cfg.js":[148,159],"./ttcn/ttcn.js":[147,160],"./turtle/turtle.js":[149,161],"./twig/twig.js":[150,69],"./vb/vb.js":[151,162],"./vbscript/vbscript.js":[152,163],"./velocity/velocity.js":[153,164],"./verilog/verilog.js":[154,165],"./vhdl/vhdl.js":[155,166],"./vue/vue.js":[156,2,3,49,47,56],"./webidl/webidl.js":[157,167],"./xml/xml.js":[38,168],"./xquery/xquery.js":[158,169],"./yacas/yacas.js":[159,170],"./yaml-frontmatter/yaml-frontmatter.js":[160,78],"./yaml/yaml.js":[53,171],"./z80/z80.js":[161,172]};function n(e){if(!a.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(n,7)}))}n.keys=function(){return Object.keys(s)},n.id=57,e.exports=n}}]);
//# sourceMappingURL=8.1e28ddaf.chunk.js.map