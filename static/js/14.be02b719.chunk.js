(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[14],{211:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return n}))},36:function(e,t,a){"use strict";var l=a(11),s=a(12),n=a(16),r=a(13),o=a(14),c=a(0),i=a.n(c),m=a(5),d=a(40),u=(a(37),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);s.setState({scrollTop:t})},s.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},s.state={articleTree:[],scrollTop:null},s.getArticleTree=s.getArticleTree.bind(Object(n.a)(s)),s}return Object(s.a)(a,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],a=0,l=e.length;a<l-1;a++){var s=e[a].nodeName;"H2"!==s&&"H3"!==s||(e[a].id=e[a].innerText,t.push({name:e[a].innerText,tag:e[a].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,a=d.a.length;t<a;t++)e[0]===d.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[t].section.length>0?d.a[t].section[e[e.length-1]]:d.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,a=document.getElementsByClassName("directory-list")[0],l=a.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var s=document.getElementsByClassName("page-footer")[0],n=0;s;)n+=s.offsetTop,s=s.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+a.offsetHeight)>n+e.offsetHeight)a.style="position:fixed;top:".concat(l-r+n,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",a.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",a.className="directory-list",t=o)),a.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.articleTree,l=t.scrollTop,s=a.length;if(document.getElementById("tree-num-0")&&s>0){for(var n=[],r=0;r<s;r++){var o=document.getElementById(a[r].name);n.push(o.offsetTop)}for(var c=n.findIndex((function(e){return e>l}))-1,m=0;m<s;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(s-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},a.map((function(t,a){return i.a.createElement("li",{key:a,id:"tree-num-".concat(a),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),a}(c.Component));t.a=Object(m.f)(u)},37:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var l=a(211),s=a(11),n=a(12),r=a(13),o=a(14),c=a(0),i=a.n(c),m=a(36),d=a(164),u=(a(47),{theme:"monokai",mode:"CSS",readOnly:!0}),j=function(e){Object(o.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={style:{maxWidth:300,transition:"transform 0.3s",transform:"skew(15deg, 15deg)"}},e}return Object(n.a)(c,[{key:"selectCode",value:function(e){var t=Object(l.a)({},this.state.style);t.transform=0===e?"skew(0)":1===e?"skew(15deg, 15deg)":2===e?"skew(-0.06turn, 18deg)":3===e?"skew(.312rad)":"",this.setState({style:t});for(var a=document.getElementsByClassName("code-box"),s=0,n=a.length;s<n;s++)e===s?a[e].className="code-box code-box-active":a[s].className="code-box"}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"skew()")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u6982\u8ff0"),i.a.createElement("p",null,"skew() \u51fd\u6570\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5143\u7d20\u5728\u4e8c\u7ef4\u5e73\u9762\u4e0a\u7684\u503e\u659c\u8f6c\u6362\u3002\u5b83\u7684\u7ed3\u679c\u662f\u4e00\u4e2a<transform-function> \u6570\u636e\u7c7b\u578b"),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("p",null,"\u70b9\u51fb\u4e0b\u9762\u7684\u4ee3\u7801\u5757\u67e5\u770b\u9884\u89c8"),i.a.createElement("div",null,i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,0)}),i.a.createElement(d.a,{value:"transform: skew(0);",options:u})),i.a.createElement("div",{className:"code-box code-box-active"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,1)}),i.a.createElement(d.a,{value:"transform: skew(15deg, 15deg);",options:u})),i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,2)}),i.a.createElement(d.a,{value:"transform: skew(-0.06turn, 18deg);",options:u})),i.a.createElement("div",{className:"code-box"},i.a.createElement("div",{className:"mask",onClick:this.selectCode.bind(this,3)}),i.a.createElement(d.a,{value:"transform: skew(.312rad);",options:u}))),i.a.createElement("div",{className:"text-center",style:{margin:"50px 0"}},i.a.createElement("img",{src:a(257),alt:"",style:this.state.style})),i.a.createElement("p",null,"\u8fd9\u79cd\u8f6c\u6362\u662f\u4e00\u79cd\u526a\u5207\u6620\u5c04(\u6a2a\u5207)\uff0c\u5b83\u5728\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u5c06\u5355\u5143\u5185\u7684\u6bcf\u4e2a\u70b9\u626d\u66f2\u4e00\u5b9a\u7684\u89d2\u5ea6\u3002\u6bcf\u4e2a\u70b9\u7684\u5750\u6807\u6839\u636e\u6307\u5b9a\u7684\u89d2\u5ea6\u4ee5\u53ca\u5230\u539f\u70b9\u7684\u8ddd\u79bb\uff0c\u8fdb\u884c\u6210\u6bd4\u4f8b\u7684\u503c\u8c03\u6574\uff1b\u56e0\u6b64\uff0c\u4e00\u4e2a\u70b9\u79bb\u539f\u70b9\u8d8a\u8fdc\uff0c\u5176\u589e\u52a0\u7684\u503c\u5c31\u8d8a\u5927\u3002"),i.a.createElement("h2",null,"\u8bed\u6cd5"),i.a.createElement("p",null,"skew() \u51fd\u6570\u6307\u5b9a\u4e00\u4e2a\u6216\u4e24\u4e2a\u53c2\u6570\uff0c\u5b83\u4eec\u8868\u793a\u5728\u6bcf\u4e2a\u65b9\u5411\u4e0a\u5e94\u7528\u7684\u503e\u659c\u91cf\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,"skew(ax)"),i.a.createElement("li",null,"skew(ax, ay)")),i.a.createElement("h3",null,"\u53c2\u6570\u503c"),i.a.createElement("ul",null,i.a.createElement("li",null,"ax"),i.a.createElement("p",null,"ax \u662f\u4e00\u4e2a <angle>\uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u6a2a\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002"),i.a.createElement("li",null,"ay"),i.a.createElement("p",null,"ay \u662f\u4e00\u4e2a <angle> \uff0c\u8868\u793a\u7528\u4e8e\u6cbf\u7eb5\u5750\u6807\u626d\u66f2\u5143\u7d20\u7684\u89d2\u5ea6\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u5219\u5176\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u5bfc\u81f4\u7eaf\u6c34\u5e73\u503e\u659c\u3002")),i.a.createElement("h2",null,"\u793a\u4f8b"),i.a.createElement("h3",null,"\u4f7f\u7528\u5355\u4e2a\u53c2\u6570"),i.a.createElement("b",null,i.a.createElement("p",null,"HTML")),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),i.a.createElement("b",null,i.a.createElement("p",null,"CSS")),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n\n.skewed {\n    transform: skew(10deg); /* Equal to skewX(10deg) */\n    background-color: pink;\n}",options:u}),i.a.createElement("b",null,i.a.createElement("p",null,"\u7ed3\u679c")),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:300,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg)"}},"Skewed")),i.a.createElement("h3",null,"\u4f7f\u7528\u4e24\u4e2a\u53c2\u6570"),i.a.createElement("b",null,i.a.createElement("p",null,"HTML")),i.a.createElement(d.a,{value:'<div>Normal</div>\n<div class="skewed">Skewed</div>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}),i.a.createElement("b",null,i.a.createElement("p",null,"CSS")),i.a.createElement(d.a,{value:"div {\n    width: 80px;\n    height: 80px;\n    background-color: skyblue;\n}\n  \n.skewed {\n    transform: skew(10deg, 10deg);\n    background-color: pink;\n}",options:u}),i.a.createElement("b",null,i.a.createElement("p",null,"\u7ed3\u679c")),i.a.createElement("div",{style:{padding:20,border:"1px solid #000",width:"100%",maxWidth:300,margin:"0 auto"}},i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"skyblue"}},"Normal"),i.a.createElement("div",{style:{width:80,height:80,backgroundColor:"pink",transform:"skew(10deg,10deg)"}},"Skewed")))),i.a.createElement(m.a,null))}}]),c}(c.Component)},59:function(e,t,a){var l={"./apl/apl.js":[60,101],"./asciiarmor/asciiarmor.js":[61,102],"./asn.1/asn.1.js":[62,103],"./asterisk/asterisk.js":[63,104],"./brainfuck/brainfuck.js":[64,105],"./clike/clike.js":[48,5],"./clojure/clojure.js":[65,106],"./cmake/cmake.js":[66,107],"./cobol/cobol.js":[67,108],"./coffeescript/coffeescript.js":[49,109],"./commonlisp/commonlisp.js":[68,110],"./crystal/crystal.js":[69,111],"./css/css.js":[42,3],"./cypher/cypher.js":[70,112],"./d/d.js":[71,113],"./dart/dart.js":[72,5,114],"./diff/diff.js":[73,115],"./django/django.js":[74,2,3,77],"./dockerfile/dockerfile.js":[75,90],"./dtd/dtd.js":[76,116],"./dylan/dylan.js":[77,117],"./ebnf/ebnf.js":[78,118],"./ecl/ecl.js":[79,119],"./eiffel/eiffel.js":[80,120],"./elm/elm.js":[81,121],"./erlang/erlang.js":[82,122],"./factor/factor.js":[83,91],"./fcl/fcl.js":[84,123],"./forth/forth.js":[85,124],"./fortran/fortran.js":[86,125],"./gas/gas.js":[87,126],"./gfm/gfm.js":[88,65,89],"./gherkin/gherkin.js":[89,127],"./go/go.js":[90,128],"./groovy/groovy.js":[91,129],"./haml/haml.js":[92,2,3,80],"./handlebars/handlebars.js":[50,85],"./haskell-literate/haskell-literate.js":[93,94],"./haskell/haskell.js":[51,130],"./haxe/haxe.js":[94,131],"./htmlembedded/htmlembedded.js":[95,2,3,76],"./htmlmixed/htmlmixed.js":[41,2,3,95],"./http/http.js":[96,132],"./idl/idl.js":[97,133],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,134],"./jsx/jsx.js":[99,2,96],"./julia/julia.js":[100,135],"./livescript/livescript.js":[101,136],"./lua/lua.js":[102,137],"./markdown/markdown.js":[56,65],"./mathematica/mathematica.js":[103,138],"./mbox/mbox.js":[104,139],"./meta.js":[46],"./mirc/mirc.js":[105,140],"./mllike/mllike.js":[106,141],"./modelica/modelica.js":[107,142],"./mscgen/mscgen.js":[108,143],"./mumps/mumps.js":[109,144],"./nginx/nginx.js":[110,145],"./nsis/nsis.js":[111,92],"./ntriples/ntriples.js":[112,146],"./octave/octave.js":[113,147],"./oz/oz.js":[114,148],"./pascal/pascal.js":[115,149],"./pegjs/pegjs.js":[116,2,150],"./perl/perl.js":[117,151],"./php/php.js":[118,2,3,5,86],"./pig/pig.js":[119,152],"./powershell/powershell.js":[120,153],"./properties/properties.js":[121,154],"./protobuf/protobuf.js":[122,155],"./pug/pug.js":[57,2,3,64],"./puppet/puppet.js":[123,156],"./python/python.js":[52,157],"./q/q.js":[124,158],"./r/r.js":[125,159],"./rpm/rpm.js":[126,160],"./rst/rst.js":[127,79],"./ruby/ruby.js":[45,161],"./rust/rust.js":[128,93],"./sas/sas.js":[129,162],"./sass/sass.js":[54,3,163],"./scheme/scheme.js":[130,164],"./shell/shell.js":[131,165],"./sieve/sieve.js":[132,166],"./slim/slim.js":[133,2,3,81],"./smalltalk/smalltalk.js":[134,167],"./smarty/smarty.js":[135,168],"./solr/solr.js":[136,169],"./soy/soy.js":[137,2,3,87],"./sparql/sparql.js":[138,170],"./spreadsheet/spreadsheet.js":[139,171],"./sql/sql.js":[140,172],"./stex/stex.js":[53,173],"./stylus/stylus.js":[58,66],"./swift/swift.js":[141,174],"./tcl/tcl.js":[142,175],"./textile/textile.js":[143,176],"./tiddlywiki/tiddlywiki.js":[144,177],"./tiki/tiki.js":[145,178],"./toml/toml.js":[146,179],"./tornado/tornado.js":[147,2,3,78],"./troff/troff.js":[148,180],"./ttcn-cfg/ttcn-cfg.js":[150,181],"./ttcn/ttcn.js":[149,182],"./turtle/turtle.js":[151,183],"./twig/twig.js":[152,88],"./vb/vb.js":[153,184],"./vbscript/vbscript.js":[154,185],"./velocity/velocity.js":[155,186],"./verilog/verilog.js":[156,187],"./vhdl/vhdl.js":[157,188],"./vue/vue.js":[158,2,3,66,64,74],"./webidl/webidl.js":[159,189],"./xml/xml.js":[39,190],"./xquery/xquery.js":[160,191],"./yacas/yacas.js":[161,192],"./yaml-frontmatter/yaml-frontmatter.js":[162,97],"./yaml/yaml.js":[55,193],"./z80/z80.js":[163,194]};function s(e){if(!a.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],s=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a.t(s,7)}))}s.keys=function(){return Object.keys(l)},s.id=59,e.exports=s}}]);
//# sourceMappingURL=14.be02b719.chunk.js.map