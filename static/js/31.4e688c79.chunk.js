(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[31],{38:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s(8),l=s(9),a=s(10),n=s(11),o=s(0),c=s.n(o),i=(s(39),function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(e){var l;return Object(r.a)(this,s),(l=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:t})},l.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},l.state={articleTree:l.props.articleTree,scrollTop:null},l}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=document.getElementById("header"),t=window.scrollY,s=document.getElementsByClassName("directory-list")[0],r=s.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],a=0;l;)a+=l.offsetTop,l=l.offsetParent;var n=document.body.scrollTop||document.documentElement.scrollTop;if((n+=r+s.offsetHeight)>a)s.style="position:fixed;top:".concat(r-n+a-e.offsetHeight,"px;transition:none");else{var o=window.scrollY;s&&(o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",s.className="directory-list directory-affixed directory-list2",t=o),t>o&&(e.className="ant-layout-header header header-visible",s.className="directory-list directory-list2",t=o)),s.style="")}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll),this.setState({articleTree:this.props.articleTree})}},{key:"render",value:function(){var e=this,t=this.state,s=t.articleTree,r=t.scrollTop,l=s.length;if(document.getElementById("tree-num-0")&&l>0){for(var a=[],n=0;n<l;n++){var o=document.getElementById(s[n].name);a.push(o.offsetTop)}for(var i=a.findIndex((function(e){return e>r}))-1,m=0;m<l;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return c.a.createElement("ul",{className:"directory-list"},s.map((function(t,s){return c.a.createElement("li",{key:s,id:"tree-num-".concat(s),className:"tree-num",style:{paddingLeft:"H2"===t.tag?"10px":"22px"},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var s=e.articleTree;return s!==t.articleTree?{articleTree:s}:null}}]),s}(o.Component))},39:function(e,t,s){},419:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var r=s(8),l=s(9),a=s(15),n=s(10),o=s(11),c=s(0),i=s.n(c),m=(s(164),s(59),s(38)),j=s(165),d=(s.n(j).a.GraphObject.make,function(e){Object(o.a)(s,e);var t=Object(n.a)(s);function s(e){var l;return Object(r.a)(this,s),(l=t.call(this,e)).state={articleTree:[]},l.getArticleTree=l.getArticleTree.bind(Object(a.a)(l)),l}return Object(l.a)(s,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],s=0;s<e.length-1;s++){var r=e[s].nodeName;"H2"!==r&&"H3"!==r||(e[s].id=e[s].innerText,t.push({name:e[s].innerText,tag:e[s].nodeName}))}this.setState({articleTree:t})}},{key:"componentDidMount",value:function(){this.getArticleTree()}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"GoJS\u5de5\u5177\u2014\u2014\u7b2c\u4e09\u8282 \u91cd\u65b0\u94fe\u63a5,\u94fe\u63a5\u91cd\u5851,\u96f6\u4ef6")),i.a.createElement("div",{className:"article-content"},i.a.createElement("p",null,i.a.createElement("br",null)),i.a.createElement("p",null,i.a.createElement("br",null)),i.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/")))),i.a.createElement("div",{className:"directory"},i.a.createElement(m.a,{articleTree:this.state.articleTree})))}}]),s}(c.Component))},58:function(e,t,s){var r={"./apl/apl.js":[60,55],"./asciiarmor/asciiarmor.js":[61,56],"./asn.1/asn.1.js":[62,57],"./asterisk/asterisk.js":[63,58],"./brainfuck/brainfuck.js":[64,59],"./clike/clike.js":[46,4],"./clojure/clojure.js":[65,60],"./cmake/cmake.js":[66,61],"./cobol/cobol.js":[67,62],"./coffeescript/coffeescript.js":[47,63],"./commonlisp/commonlisp.js":[68,64],"./crystal/crystal.js":[69,65],"./css/css.js":[42,3],"./cypher/cypher.js":[70,66],"./d/d.js":[71,67],"./dart/dart.js":[72,4,68],"./diff/diff.js":[73,69],"./django/django.js":[74,2,3,34],"./dockerfile/dockerfile.js":[75,47],"./dtd/dtd.js":[76,70],"./dylan/dylan.js":[77,71],"./ebnf/ebnf.js":[78,72],"./ecl/ecl.js":[79,73],"./eiffel/eiffel.js":[80,74],"./elm/elm.js":[81,75],"./erlang/erlang.js":[82,76],"./factor/factor.js":[83,48],"./fcl/fcl.js":[84,77],"./forth/forth.js":[85,78],"./fortran/fortran.js":[86,79],"./gas/gas.js":[87,80],"./gfm/gfm.js":[88,6,46],"./gherkin/gherkin.js":[89,81],"./go/go.js":[90,82],"./groovy/groovy.js":[91,83],"./haml/haml.js":[92,2,3,37],"./handlebars/handlebars.js":[48,42],"./haskell-literate/haskell-literate.js":[93,51],"./haskell/haskell.js":[49,84],"./haxe/haxe.js":[94,85],"./htmlembedded/htmlembedded.js":[95,2,3,33],"./htmlmixed/htmlmixed.js":[41,2,3,52],"./http/http.js":[96,86],"./idl/idl.js":[97,87],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,88],"./jsx/jsx.js":[99,2,53],"./julia/julia.js":[100,89],"./livescript/livescript.js":[101,90],"./lua/lua.js":[102,91],"./markdown/markdown.js":[54,6],"./mathematica/mathematica.js":[103,92],"./mbox/mbox.js":[104,93],"./meta.js":[45],"./mirc/mirc.js":[105,94],"./mllike/mllike.js":[106,95],"./modelica/modelica.js":[107,96],"./mscgen/mscgen.js":[108,97],"./mumps/mumps.js":[109,98],"./nginx/nginx.js":[110,99],"./nsis/nsis.js":[111,49],"./ntriples/ntriples.js":[112,100],"./octave/octave.js":[113,101],"./oz/oz.js":[114,102],"./pascal/pascal.js":[115,103],"./pegjs/pegjs.js":[116,2,104],"./perl/perl.js":[117,105],"./php/php.js":[118,2,3,4,43],"./pig/pig.js":[119,106],"./powershell/powershell.js":[120,107],"./properties/properties.js":[121,108],"./protobuf/protobuf.js":[122,109],"./pug/pug.js":[55,2,3,5],"./puppet/puppet.js":[123,110],"./python/python.js":[50,111],"./q/q.js":[124,112],"./r/r.js":[125,113],"./rpm/rpm.js":[126,114],"./rst/rst.js":[127,36],"./ruby/ruby.js":[44,115],"./rust/rust.js":[128,50],"./sas/sas.js":[129,116],"./sass/sass.js":[52,3,117],"./scheme/scheme.js":[130,118],"./shell/shell.js":[131,119],"./sieve/sieve.js":[132,120],"./slim/slim.js":[133,2,3,38],"./smalltalk/smalltalk.js":[134,121],"./smarty/smarty.js":[135,122],"./solr/solr.js":[136,123],"./soy/soy.js":[137,2,3,44],"./sparql/sparql.js":[138,124],"./spreadsheet/spreadsheet.js":[139,125],"./sql/sql.js":[140,126],"./stex/stex.js":[51,127],"./stylus/stylus.js":[56,7],"./swift/swift.js":[141,128],"./tcl/tcl.js":[142,129],"./textile/textile.js":[143,130],"./tiddlywiki/tiddlywiki.js":[144,131],"./tiki/tiki.js":[145,132],"./toml/toml.js":[146,133],"./tornado/tornado.js":[147,2,3,35],"./troff/troff.js":[148,134],"./ttcn-cfg/ttcn-cfg.js":[150,135],"./ttcn/ttcn.js":[149,136],"./turtle/turtle.js":[151,137],"./twig/twig.js":[152,45],"./vb/vb.js":[153,138],"./vbscript/vbscript.js":[154,139],"./velocity/velocity.js":[155,140],"./verilog/verilog.js":[156,141],"./vhdl/vhdl.js":[157,142],"./vue/vue.js":[158,2,3,7,5,13],"./webidl/webidl.js":[159,143],"./xml/xml.js":[37,144],"./xquery/xquery.js":[160,145],"./yacas/yacas.js":[161,146],"./yaml-frontmatter/yaml-frontmatter.js":[162,54],"./yaml/yaml.js":[53,147],"./z80/z80.js":[163,148]};function l(e){if(!s.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],l=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(l,7)}))}l.keys=function(){return Object.keys(r)},l.id=58,e.exports=l}}]);
//# sourceMappingURL=31.4e688c79.chunk.js.map