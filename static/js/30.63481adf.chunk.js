(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[30],{38:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s(8),l=s(9),a=s(10),n=s(11),o=s(0),c=s.n(o),i=(s(39),function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(e){var l;return Object(r.a)(this,s),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},l.state={articleTree:l.props.articleTree,scrollTop:null},l}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,s=document.getElementsByClassName("directory-list")[0],r=s.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],a=0;l;)a+=l.offsetTop,l=l.offsetParent;var n=document.body.scrollTop||document.documentElement.scrollTop;if((n+=r+s.offsetHeight)>a)s.style="position:fixed;top:".concat(r-n+a-e.offsetHeight,"px;transition:none");else{var o=window.scrollY;s&&(o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",s.className="directory-list directory-affixed directory-list2",t=o),t>o&&(e.className="ant-layout-header header header-visible",s.className="directory-list directory-list2",t=o)),s.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,t=this.state,s=t.articleTree,r=t.scrollTop,l=s.length;if(document.getElementById("tree-num-0")&&l>0){for(var a=[],n=0;n<l;n++){var o=document.getElementById(s[n].name);a.push(o.offsetTop)}for(var i=a.findIndex((function(e){return e>r}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return c.a.createElement("ul",{className:"directory-list"},s.map((function(t,s){return c.a.createElement("li",{key:s,id:"tree-num-".concat(s),className:"tree-num",style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var s=e.articleTree;return s!==t.articleTree?{articleTree:s}:null}}]),s}(o.Component))},39:function(e,t,s){},419:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var r=s(8),l=s(9),a=s(15),n=s(10),o=s(11),c=s(0),i=s.n(c),m=(s(165),s(60),s(38)),j=s(58),d=(s.n(j).a.GraphObject.make,function(e){Object(o.a)(s,e);var t=Object(n.a)(s);function s(e){var l;return Object(r.a)(this,s),(l=t.call(this,e)).state={articleTree:[]},l.getArticleTree=l.getArticleTree.bind(Object(a.a)(l)),l}return Object(l.a)(s,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],s=0;s<e.length-1;s++){var r=e[s].nodeName;"H2"!==r&&"H3"!==r||(e[s].id=e[s].innerText,t.push({name:e[s].innerText,tag:e[s].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree()}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS\u5de5\u5177\u2014\u2014\u7b2c\u4e09\u8282 \u91cd\u65b0\u94fe\u63a5,\u94fe\u63a5\u91cd\u5851,\u96f6\u4ef6")),i.a.createElement("div",{className:"article-content"},i.a.createElement("p",null,i.a.createElement("br",null)),i.a.createElement("p",null,i.a.createElement("br",null)),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/")))),i.a.createElement("div",{className:"directory"},i.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),s}(c.Component))},59:function(e,t,s){var r={"./apl/apl.js":[61,54],"./asciiarmor/asciiarmor.js":[62,55],"./asn.1/asn.1.js":[63,56],"./asterisk/asterisk.js":[64,57],"./brainfuck/brainfuck.js":[65,58],"./clike/clike.js":[46,3],"./clojure/clojure.js":[66,59],"./cmake/cmake.js":[67,60],"./cobol/cobol.js":[68,61],"./coffeescript/coffeescript.js":[47,62],"./commonlisp/commonlisp.js":[69,63],"./crystal/crystal.js":[70,64],"./css/css.js":[42,2],"./cypher/cypher.js":[71,65],"./d/d.js":[72,66],"./dart/dart.js":[73,3,67],"./diff/diff.js":[74,68],"./django/django.js":[75,1,2,33],"./dockerfile/dockerfile.js":[76,46],"./dtd/dtd.js":[77,69],"./dylan/dylan.js":[78,70],"./ebnf/ebnf.js":[79,71],"./ecl/ecl.js":[80,72],"./eiffel/eiffel.js":[81,73],"./elm/elm.js":[82,74],"./erlang/erlang.js":[83,75],"./factor/factor.js":[84,47],"./fcl/fcl.js":[85,76],"./forth/forth.js":[86,77],"./fortran/fortran.js":[87,78],"./gas/gas.js":[88,79],"./gfm/gfm.js":[89,5,45],"./gherkin/gherkin.js":[90,80],"./go/go.js":[91,81],"./groovy/groovy.js":[92,82],"./haml/haml.js":[93,1,2,36],"./handlebars/handlebars.js":[48,41],"./haskell-literate/haskell-literate.js":[94,50],"./haskell/haskell.js":[49,83],"./haxe/haxe.js":[95,84],"./htmlembedded/htmlembedded.js":[96,1,2,32],"./htmlmixed/htmlmixed.js":[41,1,2,51],"./http/http.js":[97,85],"./idl/idl.js":[98,86],"./javascript/javascript.js":[43,1],"./jinja2/jinja2.js":[99,87],"./jsx/jsx.js":[100,1,52],"./julia/julia.js":[101,88],"./livescript/livescript.js":[102,89],"./lua/lua.js":[103,90],"./markdown/markdown.js":[54,5],"./mathematica/mathematica.js":[104,91],"./mbox/mbox.js":[105,92],"./meta.js":[45],"./mirc/mirc.js":[106,93],"./mllike/mllike.js":[107,94],"./modelica/modelica.js":[108,95],"./mscgen/mscgen.js":[109,96],"./mumps/mumps.js":[110,97],"./nginx/nginx.js":[111,98],"./nsis/nsis.js":[112,48],"./ntriples/ntriples.js":[113,99],"./octave/octave.js":[114,100],"./oz/oz.js":[115,101],"./pascal/pascal.js":[116,102],"./pegjs/pegjs.js":[117,1,103],"./perl/perl.js":[118,104],"./php/php.js":[119,1,2,3,42],"./pig/pig.js":[120,105],"./powershell/powershell.js":[121,106],"./properties/properties.js":[122,107],"./protobuf/protobuf.js":[123,108],"./pug/pug.js":[55,1,2,4],"./puppet/puppet.js":[124,109],"./python/python.js":[50,110],"./q/q.js":[125,111],"./r/r.js":[126,112],"./rpm/rpm.js":[127,113],"./rst/rst.js":[128,35],"./ruby/ruby.js":[44,114],"./rust/rust.js":[129,49],"./sas/sas.js":[130,115],"./sass/sass.js":[52,2,116],"./scheme/scheme.js":[131,117],"./shell/shell.js":[132,118],"./sieve/sieve.js":[133,119],"./slim/slim.js":[134,1,2,37],"./smalltalk/smalltalk.js":[135,120],"./smarty/smarty.js":[136,121],"./solr/solr.js":[137,122],"./soy/soy.js":[138,1,2,43],"./sparql/sparql.js":[139,123],"./spreadsheet/spreadsheet.js":[140,124],"./sql/sql.js":[141,125],"./stex/stex.js":[51,126],"./stylus/stylus.js":[56,6],"./swift/swift.js":[142,127],"./tcl/tcl.js":[143,128],"./textile/textile.js":[144,129],"./tiddlywiki/tiddlywiki.js":[145,130],"./tiki/tiki.js":[146,131],"./toml/toml.js":[147,132],"./tornado/tornado.js":[148,1,2,34],"./troff/troff.js":[149,133],"./ttcn-cfg/ttcn-cfg.js":[151,134],"./ttcn/ttcn.js":[150,135],"./turtle/turtle.js":[152,136],"./twig/twig.js":[153,44],"./vb/vb.js":[154,137],"./vbscript/vbscript.js":[155,138],"./velocity/velocity.js":[156,139],"./verilog/verilog.js":[157,140],"./vhdl/vhdl.js":[158,141],"./vue/vue.js":[159,1,2,6,4,12],"./webidl/webidl.js":[160,142],"./xml/xml.js":[37,143],"./xquery/xquery.js":[161,144],"./yacas/yacas.js":[162,145],"./yaml-frontmatter/yaml-frontmatter.js":[163,53],"./yaml/yaml.js":[53,146],"./z80/z80.js":[164,147]};function l(e){if(!s.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],l=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(l,7)}))}l.keys=function(){return Object.keys(r)},l.id=59,e.exports=l}}]);
//# sourceMappingURL=30.63481adf.chunk.js.map