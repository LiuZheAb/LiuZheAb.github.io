(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[25],{330:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var a=s(11),l=s(12),n=s(13),r=s(14),o=s(0),c=s.n(o),i=s(36),m=s(163),j=(s(46),function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"\u94fe\u63a5\u7684\u53ef\u8bbf\u95ee\u6027")),c.a.createElement("div",{className:"article-content"},c.a.createElement("p",null,"\u5c4f\u5e55\u9605\u8bfb\u5668\u7528\u6237\u5bf9\u4e8e\u4ed6\u4eec\u7684\u8bbe\u5907\u8bfb\u53d6\u7684\u5185\u5bb9\u7c7b\u578b\u6709\u4e0d\u540c\u7684\u9009\u62e9\u3002\u8fd9\u5305\u62ec\u8df3\u8f6c\u5230(\u6216\u8df3\u8fc7)\u951a\u70b9\u5143\u7d20\u3002\u8df3\u8f6c\u5230\u4e3b\u8981\u5185\u5bb9\u3002\u6216\u8005\u4ece\u6807\u9898\u4e2d\u83b7\u53d6\u9875\u9762\u6458\u8981\u3002\u53e6\u4e00\u79cd\u9009\u62e9\u662f\u53ea\u542c\u9875\u9762\u4e0a\u53ef\u7528\u7684\u94fe\u63a5\u3002"),c.a.createElement("p",null,"\u5c4f\u5e55\u9605\u8bfb\u5668\u901a\u8fc7\u9605\u8bfb\u94fe\u63a5\u6587\u672c\u6216 a \u6807\u7b7e\u4e4b\u95f4\u7684\u5185\u5bb9\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u201c\u70b9\u51fb\u8fd9\u91cc\u201d\u6216\u201c\u9605\u8bfb\u66f4\u591a\u201d\u94fe\u63a5\u662f\u6ca1\u6709\u5e2e\u52a9\u7684\u3002\u76f8\u53cd\uff0c\u60a8\u5e94\u8be5\u5728a\u6807\u7b7e\u4e2d\u4f7f\u7528\u7b80\u77ed\u4f46\u5177\u6709\u63cf\u8ff0\u6027\u7684\u6587\u672c\uff0c\u4ee5\u4fbf\u4e3a\u8fd9\u4e9b\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u7684\u542b\u4e49\u3002"),c.a.createElement("p",null,"HTML \u63d0\u4f9b accesskey \u5c5e\u6027\u6765\u6307\u5b9a\u4e00\u4e2a\u5feb\u6377\u952e\u6765\u6fc0\u6d3b\u6216\u5c06\u7126\u70b9\u8f6c\u79fb\u5230\u4e00\u4e2a\u5143\u7d20\u4e0a\u3002\u8fd9\u53ef\u4ee5\u4f7f\u5bfc\u822a\u5bf9\u4e8e\u53ea\u6709\u952e\u76d8\u7684\u7528\u6237\u66f4\u6709\u6548\u3002"),c.a.createElement("p",null,"HTML5 \u5141\u8bb8\u5728\u4efb\u4f55\u5143\u7d20\u4e0a\u4f7f\u7528\u8fd9\u4e2a\u5c5e\u6027\uff0c\u4f46\u662f\u5f53\u5b83\u4e0e\u4ea4\u4e92\u5f0f\u5143\u7d20\u4e00\u8d77\u4f7f\u7528\u65f6\u7279\u522b\u6709\u7528\u3002\u8fd9\u5305\u62ec\u94fe\u63a5\uff0c\u6309\u94ae\u548c\u8868\u5355\u63a7\u4ef6\u3002"),c.a.createElement("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u4f8b\u5b50:"),c.a.createElement(m.a,{value:'<button accesskey="b">Important Button</button>',options:{theme:"monokai",mode:"HTML",readOnly:!0}}))),c.a.createElement(i.a,null))}}]),s}(o.Component))},36:function(e,t,s){"use strict";var a=s(11),l=s(12),n=s(16),r=s(13),o=s(14),c=s(0),i=s.n(c),m=s(5),j=s(39),d=(s(37),function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var l;return Object(a.a)(this,s),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(n.a)(l)),l}return Object(l.a)(s,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],s=0,a=e.length;s<a-1;s++){var l=e[s].nodeName;"H2"!==l&&"H3"!==l||(e[s].id=e[s].innerText,t.push({name:e[s].innerText,tag:e[s].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,s=j.a.length;t<s;t++)e[0]===j.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=j.a[t].section.length>0?j.a[t].section[e[e.length-1]]:j.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,s=document.getElementsByClassName("directory-list")[0],a=s.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],n=0;l;)n+=l.offsetTop,l=l.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=a+s.offsetHeight)>n+e.offsetHeight)s.style="position:fixed;top:".concat(a-r+n,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",s.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",s.className="directory-list",t=o)),s.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,s=t.articleTree,a=t.scrollTop,l=s.length;if(document.getElementById("tree-num-0")&&l>0){for(var n=[],r=0;r<l;r++){var o=document.getElementById(s[r].name);n.push(o.offsetTop)}for(var c=n.findIndex((function(e){return e>a}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return i.a.createElement("div",{className:"directory"},i.a.createElement("ul",{className:"directory-list"},s.map((function(t,s){return i.a.createElement("li",{key:s,id:"tree-num-".concat(s),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),s}(c.Component));t.a=Object(m.f)(d)},37:function(e,t,s){},58:function(e,t,s){var a={"./apl/apl.js":[59,96],"./asciiarmor/asciiarmor.js":[60,97],"./asn.1/asn.1.js":[61,98],"./asterisk/asterisk.js":[62,99],"./brainfuck/brainfuck.js":[63,100],"./clike/clike.js":[47,5],"./clojure/clojure.js":[64,101],"./cmake/cmake.js":[65,102],"./cobol/cobol.js":[66,103],"./coffeescript/coffeescript.js":[48,104],"./commonlisp/commonlisp.js":[67,105],"./crystal/crystal.js":[68,106],"./css/css.js":[41,3],"./cypher/cypher.js":[69,107],"./d/d.js":[70,108],"./dart/dart.js":[71,5,109],"./diff/diff.js":[72,110],"./django/django.js":[73,2,3,73],"./dockerfile/dockerfile.js":[74,85],"./dtd/dtd.js":[75,111],"./dylan/dylan.js":[76,112],"./ebnf/ebnf.js":[77,113],"./ecl/ecl.js":[78,114],"./eiffel/eiffel.js":[79,115],"./elm/elm.js":[80,116],"./erlang/erlang.js":[81,117],"./factor/factor.js":[82,86],"./fcl/fcl.js":[83,118],"./forth/forth.js":[84,119],"./fortran/fortran.js":[85,120],"./gas/gas.js":[86,121],"./gfm/gfm.js":[87,62,84],"./gherkin/gherkin.js":[88,122],"./go/go.js":[89,123],"./groovy/groovy.js":[90,124],"./haml/haml.js":[91,2,3,76],"./handlebars/handlebars.js":[49,80],"./haskell-literate/haskell-literate.js":[92,89],"./haskell/haskell.js":[50,125],"./haxe/haxe.js":[93,126],"./htmlembedded/htmlembedded.js":[94,2,3,72],"./htmlmixed/htmlmixed.js":[40,2,3,90],"./http/http.js":[95,127],"./idl/idl.js":[96,128],"./javascript/javascript.js":[42,2],"./jinja2/jinja2.js":[97,129],"./jsx/jsx.js":[98,2,91],"./julia/julia.js":[99,130],"./livescript/livescript.js":[100,131],"./lua/lua.js":[101,132],"./markdown/markdown.js":[55,62],"./mathematica/mathematica.js":[102,133],"./mbox/mbox.js":[103,134],"./meta.js":[45],"./mirc/mirc.js":[104,135],"./mllike/mllike.js":[105,136],"./modelica/modelica.js":[106,137],"./mscgen/mscgen.js":[107,138],"./mumps/mumps.js":[108,139],"./nginx/nginx.js":[109,140],"./nsis/nsis.js":[110,87],"./ntriples/ntriples.js":[111,141],"./octave/octave.js":[112,142],"./oz/oz.js":[113,143],"./pascal/pascal.js":[114,144],"./pegjs/pegjs.js":[115,2,145],"./perl/perl.js":[116,146],"./php/php.js":[117,2,3,5,81],"./pig/pig.js":[118,147],"./powershell/powershell.js":[119,148],"./properties/properties.js":[120,149],"./protobuf/protobuf.js":[121,150],"./pug/pug.js":[56,2,3,61],"./puppet/puppet.js":[122,151],"./python/python.js":[51,152],"./q/q.js":[123,153],"./r/r.js":[124,154],"./rpm/rpm.js":[125,155],"./rst/rst.js":[126,75],"./ruby/ruby.js":[44,156],"./rust/rust.js":[127,88],"./sas/sas.js":[128,157],"./sass/sass.js":[53,3,158],"./scheme/scheme.js":[129,159],"./shell/shell.js":[130,160],"./sieve/sieve.js":[131,161],"./slim/slim.js":[132,2,3,77],"./smalltalk/smalltalk.js":[133,162],"./smarty/smarty.js":[134,163],"./solr/solr.js":[135,164],"./soy/soy.js":[136,2,3,82],"./sparql/sparql.js":[137,165],"./spreadsheet/spreadsheet.js":[138,166],"./sql/sql.js":[139,167],"./stex/stex.js":[52,168],"./stylus/stylus.js":[57,63],"./swift/swift.js":[140,169],"./tcl/tcl.js":[141,170],"./textile/textile.js":[142,171],"./tiddlywiki/tiddlywiki.js":[143,172],"./tiki/tiki.js":[144,173],"./toml/toml.js":[145,174],"./tornado/tornado.js":[146,2,3,74],"./troff/troff.js":[147,175],"./ttcn-cfg/ttcn-cfg.js":[149,176],"./ttcn/ttcn.js":[148,177],"./turtle/turtle.js":[150,178],"./twig/twig.js":[151,83],"./vb/vb.js":[152,179],"./vbscript/vbscript.js":[153,180],"./velocity/velocity.js":[154,181],"./verilog/verilog.js":[155,182],"./vhdl/vhdl.js":[156,183],"./vue/vue.js":[157,2,3,63,61,70],"./webidl/webidl.js":[158,184],"./xml/xml.js":[38,185],"./xquery/xquery.js":[159,186],"./yacas/yacas.js":[160,187],"./yaml-frontmatter/yaml-frontmatter.js":[161,92],"./yaml/yaml.js":[54,188],"./z80/z80.js":[162,189]};function l(e){if(!s.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(l,7)}))}l.keys=function(){return Object.keys(a)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=25.82a667f1.chunk.js.map