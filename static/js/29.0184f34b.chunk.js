(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[29],{36:function(e,t,s){"use strict";var l=s(11),n=s(12),a=s(16),r=s(13),o=s(14),i=s(0),c=s.n(i),m=s(5),j=s(39),d=(s(37),function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).bindHandleScroll=function(e){var t=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);n.setState({scrollTop:t})},n.scrollToAnchor=function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({block:"start",behavior:"smooth"})}},n.state={articleTree:[],scrollTop:null},n.getArticleTree=n.getArticleTree.bind(Object(a.a)(n)),n}return Object(n.a)(s,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,t=[],s=0,l=e.length;s<l-1;s++){var n=e[s].nodeName;"H2"!==n&&"H3"!==n||(e[s].id=e[s].innerText,t.push({name:e[s].innerText,tag:e[s].nodeName}))}this.setState({articleTree:t})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),t=0,s=j.a.length;t<s;t++)e[0]===j.a[t].name&&(document.getElementsByTagName("h1")[0].innerHTML=j.a[t].section.length>0?j.a[t].section[e[e.length-1]]:j.a[t].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),t=window.scrollY,s=document.getElementsByClassName("directory-list")[0],l=s.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var n=document.getElementsByClassName("page-footer")[0],a=0;n;)a+=n.offsetTop,n=n.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+s.offsetHeight)>a+e.offsetHeight)s.style="position:fixed;top:".concat(l-r+a,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(t<o&&(e.className="ant-layout-header header header-affixed",s.className="directory-list directory-affixed",t=o),t>o&&(e.className="ant-layout-header header header-visible",s.className="directory-list",t=o)),s.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,t=this.state,s=t.articleTree,l=t.scrollTop,n=s.length;if(document.getElementById("tree-num-0")&&n>0){for(var a=[],r=0;r<n;r++){var o=document.getElementById(s[r].name);a.push(o.offsetTop)}for(var i=a.findIndex((function(e){return e>l}))-1,m=0;m<n;m++)document.getElementById("tree-num-".concat(m)).className=m===i?"tree-num directory-item-active":"tree-num";-2===i&&(document.getElementById("tree-num-".concat(n-1)).className="tree-num directory-item-active")}return c.a.createElement("div",{className:"directory"},c.a.createElement("ul",{className:"directory-list"},s.map((function(t,s){return c.a.createElement("li",{key:s,id:"tree-num-".concat(s),className:"tree-num",title:t.name,style:{paddingLeft:"H2"===t.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(t.name))}},t.name)}))))}}]),s}(i.Component));t.a=Object(m.f)(d)},37:function(e,t,s){},472:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var l=s(11),n=s(12),a=s(13),r=s(14),o=s(0),i=s.n(o),c=s(36),m=s(164),j=(s(47),function(e){Object(r.a)(s,e);var t=Object(a.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"article"},i.a.createElement("div",{className:"article-title"},i.a.createElement("h1",null,"css \u7684\u53ef\u8bbf\u95ee\u6027")),i.a.createElement("div",{className:"article-content"},i.a.createElement("h2",null,"\u53ea\u5728\u5c4f\u5e55\u9605\u8bfb\u5668\u663e\u793a"),i.a.createElement("p",null,"\u5f53\u60a8\u60f3\u8981\u5728\u89c6\u89c9\u4e0a\u9690\u85cf\u53ea\u5bf9\u5c4f\u5e55\u9605\u8bfb\u5668\u6709\u610f\u4e49\u7684\u5185\u5bb9\u65f6,CSS \u4e5f\u53ef\u4ee5\u63d0\u9ad8\u9875\u9762\u7684\u53ef\u8bbf\u95ee\u6027\u3002\u5f53\u4fe1\u606f\u4ee5\u53ef\u89c6\u683c\u5f0f(\u5982\u56fe\u8868)\u663e\u793a\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002\u4f46\u662f\uff0c\u5c4f\u5e55\u9605\u8bfb\u5668\u7528\u6237\u9700\u8981\u53e6\u4e00\u79cd\u8868\u793a(\u5982\u8868\u683c)\u6765\u8bbf\u95ee\u6570\u636e\u3002CSS\u7528\u4e8e\u5c06\u53ea\u5728\u5c4f\u5e55\u9605\u8bfb\u5668\u663e\u793a\u7684\u5143\u7d20\u7f6e\u4e8e\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u53ef\u89c6\u533a\u57df\u4e4b\u5916\u3002"),i.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a CSS \u89c4\u5219\u7684\u4f8b\u5b50:"),i.a.createElement(m.a,{value:".sr-only {\n    position: absolute;\n    left: -10000px;\n    width: 1px;\n    height: 1px;\n    top: auto;\n    overflow: hidden;\n }",options:{theme:"monokai",mode:"CSS",readOnly:!0}}),i.a.createElement("h2",null,"\u5bf9\u6bd4\u5ea6"),i.a.createElement("p",null,"\u524d\u666f\u548c\u80cc\u666f\u989c\u8272\u4e4b\u95f4\u7684\u4f4e\u5bf9\u6bd4\u5ea6\u4f1a\u4f7f\u6587\u672c\u96be\u4ee5\u9605\u8bfb\u3002\u8db3\u591f\u7684\u5bf9\u6bd4\u53ef\u4ee5\u63d0\u9ad8\u5185\u5bb9\u7684\u53ef\u8bfb\u6027\uff0c\u4f46\u662f\u201c\u8db3\u591f\u201d\u5230\u5e95\u662f\u4ec0\u4e48\u610f\u601d\u5462?"),i.a.createElement("p",null,"Web \u5185\u5bb9\u53ef\u8bbf\u95ee\u6027\u6307\u5357(Web Content Accessibility Guidelines)\u5efa\u8bae\u6b63\u5e38\u6587\u672c\u7684\u5bf9\u6bd4\u5ea6\u81f3\u5c11\u4e3a 4.5:1\u3002\u8fd9\u4e2a\u6bd4\u7387\u662f\u901a\u8fc7\u6bd4\u8f83\u4e24\u79cd\u989c\u8272\u7684\u76f8\u5bf9\u4eae\u5ea6\u503c\u8ba1\u7b97\u51fa\u6765\u7684\u3002\u8fd9\u4e2a\u8303\u56f4\u4ece\u76f8\u540c\u989c\u8272\u6216\u6ca1\u6709\u5bf9\u6bd4\u7684 1:1\uff0c\u5230\u767d\u8272\u5bf9\u9ed1\u8272\u7684 21:1\uff0c\u8fd9\u662f\u6700\u5f3a\u70c8\u7684\u5bf9\u6bd4\u3002\u7f51\u4e0a\u6709\u5f88\u591a\u5bf9\u6bd4\u68c0\u67e5\u5de5\u5177\u53ef\u4ee5\u5e2e\u4f60\u8ba1\u7b97\u8fd9\u4e2a\u6bd4\u7387\u3002"),i.a.createElement("h2",null,"\u907f\u514d\u8272\u76f2"),i.a.createElement("p",null,"\u8272\u5f69\u662f\u89c6\u89c9\u8bbe\u8ba1\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u4f46\u5b83\u7684\u4f7f\u7528\u5e26\u6765\u4e86\u4e24\u4e2a\u53ef\u8bbf\u95ee\u6027\u95ee\u9898\u3002\u7b2c\u4e00,\u4e0d\u5e94\u8be5\u4f7f\u7528\u989c\u8272\u4f5c\u4e3a\u4f20\u8fbe\u91cd\u8981\u4fe1\u606f\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u56e0\u4e3a\u5c4f\u5e55\u9605\u8bfb\u5668\u7528\u6237\u4e0d\u4f1a\u770b\u5230\u5b83\u3002\u7b2c\u4e8c\u3002\u524d\u666f\u8272\u548c\u80cc\u666f\u8272\u9700\u8981\u8db3\u591f\u7684\u5bf9\u6bd4\u5ea6\uff0c\u8fd9\u6837\u8272\u76f2\u7528\u6237\u624d\u80fd\u533a\u5206\u5b83\u4eec\u3002"),i.a.createElement("p",null,"\u8272\u76f2\u7528\u6237\u5728\u533a\u5206\u67d0\u4e9b\u989c\u8272\u65b9\u9762\u6709\u56f0\u96be\u2014\u2014\u901a\u5e38\u662f\u5728\u8272\u8c03\u65b9\u9762\uff0c\u4f46\u6709\u65f6\u5728\u4eae\u5ea6\u65b9\u9762\u4e5f\u6709\u56f0\u96be\uff0c\u4f60\u53ef\u80fd\u4f1a\u60f3\u8d77\uff0c\u5bf9\u6bd4\u5ea6\u662f\u4f7f\u7528\u524d\u666f\u548c\u80cc\u666f\u989c\u8272\u7684\u76f8\u5bf9\u4eae\u5ea6(\u6216\u4eae\u5ea6)\u503c\u8ba1\u7b97\u51fa\u6765\u7684\u3002"),i.a.createElement("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c4.5:1 \u7684\u5bf9\u6bd4\u5ea6\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u6df1\u8272\u7684\u5e95\u7eb9(\u589e\u52a0\u9ed1\u8272)\u548c\u589e\u52a0\u6d45\u8272\u7684\u5e95\u8272(\u589e\u52a0\u767d\u8272)\u6765\u8fbe\u5230\u3002\u8272\u76d8\u4e0a\u8f83\u6df1\u7684\u9634\u5f71\u88ab\u8ba4\u4e3a\u662f blue\u3001violet\u3001magenta \u548c red \u7684\u9634\u5f71\uff0c\u800c\u8f83\u6d45\u7684\u989c\u8272\u662f orange\u3001yellow\u3001green \u548c blue-green\u3002"),i.a.createElement("p",null,"\u8272\u76f2\u6709\u591a\u79cd\u5f62\u5f0f\u3002\u4ece\u5bf9\u7279\u5b9a\u6ce2\u957f\u7684\u5149\u7684\u654f\u611f\u5ea6\u964d\u4f4e\u5230\u6839\u672c\u770b\u4e0d\u89c1\u989c\u8272\u3002\u6700\u5e38\u89c1\u7684\u5f62\u5f0f\u662f\u901a\u8fc7\u7075\u654f\u5ea6\u6765\u68c0\u6d4b\u7eff\u8272\u3002"),i.a.createElement("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4e24\u4e2a\u76f8\u4f3c\u7684\u7eff\u8272\u662f\u5185\u5bb9\u7684\u524d\u666f\u548c\u80cc\u666f\u989c\u8272\u3002\u8272\u76f2\u7528\u6237\u53ef\u80fd\u65e0\u6cd5\u533a\u5206\u5b83\u4eec\u3002\u76f8\u8fd1\u7684\u989c\u8272\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u8272\u8f6e\u4e0a\u7684\u90bb\u5c45\uff0c\u5728\u4f20\u8fbe\u91cd\u8981\u4fe1\u606f\u65f6\u5e94\u8be5\u907f\u514d\u8fd9\u4e9b\u7ec4\u5408\u3002"))),i.a.createElement(c.a,null))}}]),s}(o.Component))},59:function(e,t,s){var l={"./apl/apl.js":[60,107],"./asciiarmor/asciiarmor.js":[61,108],"./asn.1/asn.1.js":[62,109],"./asterisk/asterisk.js":[63,110],"./brainfuck/brainfuck.js":[64,111],"./clike/clike.js":[48,8],"./clojure/clojure.js":[65,112],"./cmake/cmake.js":[66,113],"./cobol/cobol.js":[67,114],"./coffeescript/coffeescript.js":[49,115],"./commonlisp/commonlisp.js":[68,116],"./crystal/crystal.js":[69,117],"./css/css.js":[42,3],"./cypher/cypher.js":[70,118],"./d/d.js":[71,119],"./dart/dart.js":[72,8,120],"./diff/diff.js":[73,121],"./django/django.js":[74,2,3,82],"./dockerfile/dockerfile.js":[75,95],"./dtd/dtd.js":[76,122],"./dylan/dylan.js":[77,123],"./ebnf/ebnf.js":[78,124],"./ecl/ecl.js":[79,125],"./eiffel/eiffel.js":[80,126],"./elm/elm.js":[81,127],"./erlang/erlang.js":[82,128],"./factor/factor.js":[83,96],"./fcl/fcl.js":[84,129],"./forth/forth.js":[85,130],"./fortran/fortran.js":[86,131],"./gas/gas.js":[87,132],"./gfm/gfm.js":[88,68,94],"./gherkin/gherkin.js":[89,133],"./go/go.js":[90,134],"./groovy/groovy.js":[91,135],"./haml/haml.js":[92,2,3,85],"./handlebars/handlebars.js":[50,90],"./haskell-literate/haskell-literate.js":[93,99],"./haskell/haskell.js":[51,136],"./haxe/haxe.js":[94,137],"./htmlembedded/htmlembedded.js":[95,2,3,81],"./htmlmixed/htmlmixed.js":[41,2,3,100],"./http/http.js":[96,138],"./idl/idl.js":[97,139],"./javascript/javascript.js":[43,2],"./jinja2/jinja2.js":[98,140],"./jsx/jsx.js":[99,2,101],"./julia/julia.js":[100,141],"./livescript/livescript.js":[101,142],"./lua/lua.js":[102,143],"./markdown/markdown.js":[56,68],"./mathematica/mathematica.js":[103,144],"./mbox/mbox.js":[104,145],"./meta.js":[46],"./mirc/mirc.js":[105,146],"./mllike/mllike.js":[106,147],"./modelica/modelica.js":[107,148],"./mscgen/mscgen.js":[108,149],"./mumps/mumps.js":[109,150],"./nginx/nginx.js":[110,151],"./nsis/nsis.js":[111,97],"./ntriples/ntriples.js":[112,152],"./octave/octave.js":[113,153],"./oz/oz.js":[114,154],"./pascal/pascal.js":[115,155],"./pegjs/pegjs.js":[116,2,156],"./perl/perl.js":[117,157],"./php/php.js":[118,2,3,8,91],"./pig/pig.js":[119,158],"./powershell/powershell.js":[120,159],"./properties/properties.js":[121,160],"./protobuf/protobuf.js":[122,161],"./pug/pug.js":[57,2,3,67],"./puppet/puppet.js":[123,162],"./python/python.js":[52,163],"./q/q.js":[124,164],"./r/r.js":[125,165],"./rpm/rpm.js":[126,166],"./rst/rst.js":[127,84],"./ruby/ruby.js":[45,167],"./rust/rust.js":[128,98],"./sas/sas.js":[129,168],"./sass/sass.js":[54,3,169],"./scheme/scheme.js":[130,170],"./shell/shell.js":[131,171],"./sieve/sieve.js":[132,172],"./slim/slim.js":[133,2,3,86],"./smalltalk/smalltalk.js":[134,173],"./smarty/smarty.js":[135,174],"./solr/solr.js":[136,175],"./soy/soy.js":[137,2,3,92],"./sparql/sparql.js":[138,176],"./spreadsheet/spreadsheet.js":[139,177],"./sql/sql.js":[140,178],"./stex/stex.js":[53,179],"./stylus/stylus.js":[58,69],"./swift/swift.js":[141,180],"./tcl/tcl.js":[142,181],"./textile/textile.js":[143,182],"./tiddlywiki/tiddlywiki.js":[144,183],"./tiki/tiki.js":[145,184],"./toml/toml.js":[146,185],"./tornado/tornado.js":[147,2,3,83],"./troff/troff.js":[148,186],"./ttcn-cfg/ttcn-cfg.js":[150,187],"./ttcn/ttcn.js":[149,188],"./turtle/turtle.js":[151,189],"./twig/twig.js":[152,93],"./vb/vb.js":[153,190],"./vbscript/vbscript.js":[154,191],"./velocity/velocity.js":[155,192],"./verilog/verilog.js":[156,193],"./vhdl/vhdl.js":[157,194],"./vue/vue.js":[158,2,3,69,67,79],"./webidl/webidl.js":[159,195],"./xml/xml.js":[40,196],"./xquery/xquery.js":[160,197],"./yacas/yacas.js":[161,198],"./yaml-frontmatter/yaml-frontmatter.js":[162,102],"./yaml/yaml.js":[55,199],"./z80/z80.js":[163,200]};function n(e){if(!s.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s.t(n,7)}))}n.keys=function(){return Object.keys(l)},n.id=59,e.exports=n}}]);
//# sourceMappingURL=29.0184f34b.chunk.js.map