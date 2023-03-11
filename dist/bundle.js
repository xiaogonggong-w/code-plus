var e,n;function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(r=a.key,o=void 0,"symbol"==typeof(o=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(r,"string"))?o:String(o)),a)}var r,o}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function i(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(e=self.document)&&!e.getElementById("livereloadscript")&&((n=e.createElement("script")).async=1,n.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",n.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(n));i('@charset "UTF-8";\n.code-plus__inside {\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  color: #595959;\n  line-height: 22px;\n  font-size: 14px;\n  border: none;\n  box-shadow: none;\n  white-space: pre;\n  border: none;\n  min-width: 100%;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n  padding: 0;\n  display: inline-block;\n}\n\n.code-plus__inside:empty:before {\n  content: attr(data-placeholder);\n}\n\n.code-plus__outside {\n  width: 100%;\n  overflow-x: auto;\n  background-color: #fafafa;\n  padding: 0 12px 32px;\n  box-sizing: border-box;\n  transition: background-color 0.15s ease;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.code-plus-svg-wrapper {\n  display: flex;\n  justify-content: space-between;\n  height: 24px;\n  align-items: center;\n  border-radius: 4px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.code-plus-language {\n  height: 32px;\n  padding: 0 8px;\n  background-color: #fafafa;\n  transition: background-color 0.15s ease;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.ce-block--selected .code-plus-language {\n  background-color: inherit;\n}\n.ce-block--selected .code-plus__outside {\n  background-color: inherit;\n}\n.ce-block--selected .operator {\n  background: transparent;\n}\n\n.code-plus-text {\n  cursor: pointer;\n  border-radius: 2px;\n  padding: 2px;\n  transition: background 0.2s;\n}\n.code-plus-text:hover {\n  background-color: #ebebeb;\n}\n\n.code-plus-library-menu .code-plus-select-language-menu {\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 4px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: rgba(55, 53, 47, 0.65);\n  transition: opacity 300ms ease-in 0s;\n  opacity: 0;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-copy,\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-language-item {\n  display: flex;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-copy {\n  padding: 0px 6px 0 4px;\n  background-color: #EAEAEA;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-language-menu {\n  position: relative;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-language-menu .code-plus-language-item {\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-language-menu .code-plus-language-item .code-plus-language-svg {\n  transition: all 297ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 198ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n.code-plus-library-menu .code-plus-select-language-menu .code-plus-language-menu .code-plus-language-item:hover {\n  background-color: #EAEAEA;\n}\n\n.code-plus-language-outside {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2023;\n  overflow: hidden;\n}\n.code-plus-language-outside .code-plus-language-options {\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  max-height: 200px;\n  overflow: auto;\n  padding-top: 10px;\n  margin-top: 5px;\n  padding-bottom: 10px;\n  padding-right: 4px;\n  transition: all 297ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 198ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  /* 整个滚动条 */\n}\n.code-plus-language-outside .code-plus-language-options::-webkit-scrollbar {\n  /* 对应纵向滚动条的宽度 */\n  width: 8px;\n  /* 对应横向滚动条的宽度 */\n  height: 8px;\n}\n.code-plus-language-outside .code-plus-language-options::-webkit-scrollbar-thumb {\n  background-color: #cfcfcf;\n  border-radius: 4px;\n}\n.code-plus-language-outside .code-plus-language-options::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.code-plus-language-outside .code-plus-language-options .code-plus-language-option {\n  cursor: pointer;\n  padding: 0 15px;\n  height: 30px;\n  display: flex;\n  color: #4c4c4c;\n  align-items: center;\n  font-size: 14px;\n}\n.code-plus-language-outside .code-plus-language-options .code-plus-language-option:hover {\n  background-color: #EAEAEA;\n}');i("/* PrismJS 1.29.0\nhttps://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */\ncode[class*=language-],\npre[class*=language-] {\n    color: #000;\n    background: 0 0;\n    text-shadow: 0 1px #fff;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    font-size: 1em;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n    -webkit-hyphens: none;\n    hyphens: none\n}\n\ncode[class*=language-] ::-moz-selection,\ncode[class*=language-]::-moz-selection,\npre[class*=language-] ::-moz-selection,\npre[class*=language-]::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc\n}\n\ncode[class*=language-] ::-moz-selection, code[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection {\n    text-shadow: none;\n    background: #b3d4fc\n}\n\ncode[class*=language-] ::selection,\ncode[class*=language-]::selection,\npre[class*=language-] ::selection,\npre[class*=language-]::selection {\n    text-shadow: none;\n    background: #b3d4fc\n}\n\n@media print {\n\n    code[class*=language-],\n    pre[class*=language-] {\n        text-shadow: none\n    }\n}\n\npre[class*=language-] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto\n}\n\n:not(pre)>code[class*=language-],\npre[class*=language-] {\n    background: #f5f2f0\n}\n\n:not(pre)>code[class*=language-] {\n    padding: .1em;\n    border-radius: .3em;\n    white-space: normal\n}\n\n.token.cdata,\n.token.comment,\n.token.doctype,\n.token.prolog {\n    color: #708090\n}\n\n.token.punctuation {\n    color: #999\n}\n\n.token.namespace {\n    opacity: .7\n}\n\n.token.boolean,\n.token.constant,\n.token.deleted,\n.token.number,\n.token.property,\n.token.symbol,\n.token.tag {\n    color: #905\n}\n\n.token.attr-name,\n.token.builtin,\n.token.char,\n.token.inserted,\n.token.selector,\n.token.string {\n    color: #690\n}\n\n.language-css .token.string,\n.style .token.string,\n.token.entity,\n.token.operator,\n.token.url {\n    color: #9a6e3a;\n    background: hsla(0, 0%, 100%, .5)\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n    color: #07a\n}\n\n.token.class-name,\n.token.function {\n    color: #dd4a68\n}\n\n.token.important,\n.token.regex,\n.token.variable {\n    color: #e90\n}\n\n.token.bold,\n.token.important {\n    font-weight: 700\n}\n\n.token.italic {\n    font-style: italic\n}\n\n.token.entity {\n    cursor: help\n}");var s=function(){var e=window.getSelection();return{getRange:function(){return e.getRangeAt(0)},haveRange:function(){return e.rangeCount>0},deleteContents:function(){e.getRangeAt(0).deleteContents()},getStartContainer:function(){return e.getRangeAt(0).startContainer},getEndContainer:function(){return e.getRangeAt(0).endContainer},getCursorOffset:function(){return e.getRangeAt(0).endOffset},setCursorOffset:function(n,t){if(t||0===t){var a=document.createRange();a.selectNodeContents(n),a.setStart(n,t),a.setEnd(n,t),e.removeAllRanges(),e.addRange(a)}}}}();var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u={};!function(e){var n=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof o?new o(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,o;switch(t=t||{},r.util.type(n)){case"Object":if(o=r.util.objId(n),t[o])return t[o];for(var i in a={},t[o]=a,n)n.hasOwnProperty(i)&&(a[i]=e(n[i],t));return a;case"Array":return o=r.util.objId(n),t[o]?t[o]:(a=[],t[o]=a,n.forEach((function(n,r){a[r]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var a="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!t}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var o=(a=a||r.languages)[e],i={};for(var s in o)if(o.hasOwnProperty(s)){if(s==n)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(s)||(i[s]=o[s])}var u=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(n,t){t===u&&n!=e&&(this[n]=i)})),i},DFS:function e(n,t,a,o){o=o||{};var i=r.util.objId;for(var s in n)if(n.hasOwnProperty(s)){t.call(n,s,n[s],a||s);var l=n[s],u=r.util.type(l);"Object"!==u||o[i(l)]?"Array"!==u||o[i(l)]||(o[i(l)]=!0,e(l,t,s,o)):(o[i(l)]=!0,e(l,t,null,o))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var o,i=0;o=a.elements[i++];)r.highlightElement(o,!0===n,a.callback)},highlightElement:function(n,t,a){var o=r.util.getLanguage(n),i=r.languages[o];r.util.setLanguage(n,o);var s=n.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&r.util.setLanguage(s,o);var l={element:n,language:o,grammar:i,code:n.textContent};function u(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),a&&a.call(l.element)}if(r.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(a&&a.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(t&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(r.highlight(l.code,l.grammar,l.language));else u(r.util.encode(l.code))},highlight:function(e,n,t){var a={code:e,grammar:n,language:t};if(r.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}var r=new l;return u(r,r.head,e),s(e,r,n,r.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(r)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,o=0;a=t[o++];)a(n)}},Token:o};function o(e,n,t,a){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length}function i(e,n,t,a){e.lastIndex=n;var r=e.exec(t);if(r&&a&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function s(e,n,t,a,l,c){for(var g in t)if(t.hasOwnProperty(g)&&t[g]){var p=t[g];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(c&&c.cause==g+","+h)return;var f=p[h],m=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=f.alias;if(b&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var x=f.pattern||f,w=a.next,C=l;w!==n.tail&&!(c&&C>=c.reach);C+=w.value.length,w=w.next){var A=w.value;if(n.length>e.length)return;if(!(A instanceof o)){var F,E=1;if(b){if(!(F=i(x,C,e,v))||F.index>=e.length)break;var S=F.index,_=F.index+F[0].length,L=C;for(L+=w.value.length;S>=L;)L+=(w=w.next).value.length;if(C=L-=w.value.length,w.value instanceof o)continue;for(var $=w;$!==n.tail&&(L<_||"string"==typeof $.value);$=$.next)E++,L+=$.value.length;E--,A=e.slice(C,L),F.index-=C}else if(!(F=i(x,0,A,v)))continue;S=F.index;var M=F[0],j=A.slice(0,S),O=A.slice(S+M.length),z=C+A.length;c&&z>c.reach&&(c.reach=z);var T=w.prev;if(j&&(T=u(n,T,j),C+=j.length),d(n,T,E),w=u(n,T,new o(g,m?r.tokenize(M,m):M,y,M)),O&&u(n,w,O),E>1){var P={cause:g+","+h,reach:z};s(e,n,t,w.prev,C,P),c&&P.reach>c.reach&&(c.reach=P.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var a=n.next,r={value:t,prev:n,next:a};return n.next=r,a.prev=r,e.length++,r}function d(e,n,t){for(var a=n.next,r=0;r<t&&a!==e.tail;r++)a=a.next;n.next=a,a.prev=n,e.length-=r}if(e.Prism=r,o.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var o={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},i=n.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(o.classes,i):o.classes.push(i)),r.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,o=t.code,i=t.immediateClose;e.postMessage(r.highlight(o,r.languages[a],a)),i&&e.close()}),!1),r):r;var c=r.util.currentScript();function g(){r.manual||r.highlightAll()}if(c&&(r.filename=c.src,c.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&c&&c.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 *
	 * @license MIT <https://opensource.org/licenses/MIT>
	 * @author Lea Verou <https://lea.verou.me>
	 * @namespace
	 * @public
	 */e.exports&&(e.exports=n),void 0!==l&&(l.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(void 0!==n&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=function(e,n){return"✖ Error "+e+" while fetching file: "+n},t="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",o="loading",i="loaded",s="pre[data-src]:not(["+r+'="'+i+'"]):not(['+r+'="'+o+'"])';n.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),n.hooks.add("before-sanity-check",(function(l){var u=l.element;if(u.matches(s)){l.code="",u.setAttribute(r,o);var d=u.appendChild(document.createElement("CODE"));d.textContent="Loading…";var c=u.getAttribute("data-src"),g=l.language;if("none"===g){var p=(/\.(\w+)$/.exec(c)||[,"none"])[1];g=a[p]||p}n.util.setLanguage(d,g),n.util.setLanguage(u,g);var h=n.plugins.autoloader;h&&h.loadLanguages(g),function(n,a,r){var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?a(o.responseText):o.status>=400?r(e(o.status,o.statusText)):r(t))},o.send(null)}(c,(function(e){u.setAttribute(r,i);var t=function(e){var n=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(n){var t=Number(n[1]),a=n[2],r=n[3];return a?r?[t,Number(r)]:[t,void 0]:[t,t]}}(u.getAttribute("data-range"));if(t){var a=e.split(/\r\n?|\n/g),o=t[0],s=null==t[1]?a.length:t[1];o<0&&(o+=a.length),o=Math.max(0,Math.min(o-1,a.length)),s<0&&(s+=a.length),s=Math.max(0,Math.min(s,a.length)),e=a.slice(o,s).join("\n"),u.hasAttribute("data-start")||u.setAttribute("data-start",String(o+1))}d.textContent=e,n.highlightElement(d)}),(function(e){u.setAttribute(r,"failed"),d.textContent=e}))}})),n.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(s),r=0;t=a[r++];)n.highlightElement(t)}};var l=!1;n.fileHighlight=function(){l||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),l=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}({get exports(){return u},set exports(e){u=e}});var d,c,g,p=u,h=(d="",c="",g=!1,function e(n,t,a,r,o){if("_is_not_first_"!==o&&(d=n.textContent.replace(/\r\n/g,"\n"),c="",console.log(d),g=!1),t===n)return g=!0,void("_is_not_first_"===o?(/\n$/.test(d)||(c+="\n"),r&&r(c.length,c)):d.length?(/\n$/.test(d)?d+="\n":d+="\n\n",r&&r(d.length,d)):r&&r(a.length,a));for(var i=0;i<n.childNodes.length;i+=1){if(g)return;if(3!==n.childNodes[i].nodeType)e(n.childNodes[i],t,a,r,"_is_not_first_");else{if(n.childNodes[i]===t){g=!0;var l=s.getCursorOffset();return c+=n.childNodes[i].textContent.substring(0,l),d="".concat(c).concat(a).concat(d.substring(c.length)),c=(c="".concat(c).concat(a)).replace(/\r\n/g,"\n"),void(r&&r(c.length,d))}c+=n.childNodes[i].textContent}}"_is_not_first_"===o||g||r&&r(0,"")}),f=function(){var e=0,n=!1;return function t(a,r,o,i){"_is_not_first_"!==i&&(e=r,n=!1);for(var s=0;s<a.childNodes.length;s+=1){if(n)return;var l=a.childNodes[s];if(3===l.nodeType){var u=l.textContent.length,d=e;if((e-=u)<=0)return n=!0,void(o&&o(l,d))}else t(l,e,o,"_is_not_first_")}"_is_not_first_"===i||n||o&&o(null)}}(),m=function(){function e(n){var t=n.data,a=n.config,r=n.api,o=n.readOnly,i=n.block;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.readOnly=o,this.blockAPI=i,this.placeholder=this.api.i18n.t(a.placeholder||e.DEFAULT_PLACEHOLDER),this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"code-plus",div:"code-plus__inside",svgWrapper:"code-plus-svg-wrapper",divOutside:"code-plus__outside",language:"code-plus-language"},this.nodes={holder:null,div:null,languageText:null,codePlusLibraryMenu:null,languageMenu:null,languageOutside:null,languageOptions:null},this.data={code:t.code||"",language:t.language||"纯文本"},this.languages=a.languages||this.defaultLanguages(),this.range=null,this.selection=null,this.isEnterPress=!1,this.isInput=!0,this.nodes.holder=this.drawView()}var n,o,i;return n=e,o=[{key:"defaultLanguages",get:function(){return["纯文本","Css","Python","Git","JavaScript","Go","C","Java"]}},{key:"drawView",value:function(){var e=this,n=this.make("div",[this.CSS.baseClass,this.CSS.wrapper]),t=this.make("div",[this.CSS.div,this.CSS.input]),a=this.make("div",[this.CSS.divOutside]);n.style.position="relative",t.setAttribute("contenteditable","true"),t.setAttribute("spellcheck",!1),t.setAttribute("data-placeholder",this.placeholder),this.data.language&&"纯文本"!==this.data.language?t.innerHTML=this.generateHtml(this.data.language.toLocaleLowerCase()):t.textContent=this.data.code,this.readOnly&&t.setAttribute("contenteditable",!1);var r=this.makeLanguageMenu();return a.appendChild(t),n.appendChild(r),n.appendChild(a),t.addEventListener("paste",(function(n){return e.insideInput(n,"paste")})),t.addEventListener("input",(function(n){return e.insideInput(n,"input")})),t.addEventListener("keydown",(function(n){return e.insideInput(n,"keydown")})),t.addEventListener("compositionstart",(function(n){return e.handlerComposition(n,"input")})),t.addEventListener("compositionend",(function(n){return e.handlerComposition(n,"input")})),n.addEventListener("mouseenter",(function(n){return e.wrapperMouseEnter(n)})),n.addEventListener("mouseleave",(function(n){return e.wrapperMouseLeave(n)})),this.nodes.div=t,n}},{key:"makeLanguageMenu",value:function(){var e=this,n="http://www.w3.org/2000/svg",t=this.make("div",["code-plus-library-menu",this.CSS.language]),a=this.make("div","code-plus-select-language-menu"),o=this.make("div","code-plus-language-menu"),i=this.make("div","code-plus-language-item"),s=this.make("span"),l=this.make("div","code-plus-language-outside"),u=this.make("div","code-plus-language-options"),d=this.make("div","code-plus-copy"),c=document.createElementNS(n,"svg"),g=document.createElementNS(n,"path"),p=this.make("div",[this.CSS.svgWrapper]),h=document.createElement("span");p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.5H10.25C9.2835 8.5 8.5 9.2835 8.5 10.25V17.25C8.5 18.2165 9.2835 19 10.25 19H17.25C18.2165 19 19 18.2165 19 17.25V10.25C19 9.2835 18.2165 8.5 17.25 8.5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.5V6.75C15.5 6.28587 15.3156 5.84075 14.9874 5.51256C14.6592 5.18437 14.2141 5 13.75 5H6.75C6.28587 5 5.84075 5.18437 5.51256 5.51256C5.18437 5.84075 5 6.28587 5 6.75V13.75C5 14.2141 5.18437 14.6592 5.51256 14.9874C5.84075 15.3156 6.28587 15.5 6.75 15.5H8.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L15.5 12"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.5L15.5 15.5"/></svg>',l.appendChild(u),this.nodes.languageOutside=l,this.nodes.languageOptions=u,l.addEventListener("click",(function(){document.body.contains(l)&&document.body.removeChild(l)})),h.textContent="Copy",g.setAttribute("d","M14.566 7.434a.8.8 0 010 1.132l-4 4a.8.8 0 01-1.132 0l-4-4a.8.8 0 111.132-1.132L10 10.87l3.434-3.435a.8.8 0 011.132 0z"),g.setAttribute("fill","rgba(55, 53, 47, 0.65)"),g.setAttribute("fill-rule","evenodd"),g.setAttribute("clip-rule","evenodd"),c.setAttribute("width",16),c.setAttribute("height",16),c.setAttribute("viewBox","0 0 20 20"),c.classList.add("code-plus-language-svg"),s.textContent=this.data.language,this.nodes.languageText=s,i.appendChild(s),c.appendChild(g),i.appendChild(c);var f,m=document.createDocumentFragment(),v=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw i}}}}(this.languages);try{for(v.s();!(f=v.n()).done;){var b=f.value,y=this.make("div","code-plus-language-option");y.textContent=b,m.appendChild(y)}}catch(e){v.e(e)}finally{v.f()}return u.appendChild(m),u.addEventListener("click",(function(n){var t=n.target.textContent;if(t&&"纯文本"!==t){var a=e.generateHtml(t);a&&(e.nodes.languageText.textContent=t,e.nodes.div.innerHTML=a)}else e.nodes.languageText.textContent=t,e.nodes.div.textContent=e.nodes.div.textContent;e.blockAPI.dispatchChange(),document.body.contains(e.nodes.languageOutside)&&document.body.removeChild(e.nodes.languageOutside),n.preventDefault(),n.stopPropagation()})),o.appendChild(i),o.addEventListener("click",(function(n){return e.languageMenuClick(n)})),a.appendChild(o),p.appendChild(h),d.appendChild(p),a.appendChild(d),d.addEventListener("click",(function(){var n=document.createElement("input");n.value=e.nodes.div.textContent,document.body.appendChild(n),n.select(),document.execCommand("Copy"),n.className="oInput",n.style.display="none",h.textContent="Copied";var t=setTimeout((function(){h.textContent="Copy",clearTimeout(t)}),1e3)})),t.appendChild(a),this.nodes.codePlusLibraryMenu=t,this.nodes.languageMenu=a,t}},{key:"make",value:function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);for(var i in Array.isArray(t)?(n=o.classList).add.apply(n,a(t)):t&&o.classList.add(t),r)o[i]=r[i];return o}},{key:"makeSvg",value:function(e,n,t,a,r,o){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=document.createElementNS("http://www.w3.org/2000/svg",e),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("d",n),l.setAttribute("fill",o),l.setAttribute("fill-rule","evenodd"),l.setAttribute("clip-rule","evenodd"),svg.setAttribute("width",t),svg.setAttribute("height",a),svg.setAttribute("viewBox",r),i&&svg.classList.add(i),s}},{key:"render",value:function(){return this.nodes.holder}},{key:"save",value:function(e){return{code:e.querySelector(".code-plus__inside").textContent,language:e.querySelector(".code-plus-language-item").textContent}}},{key:"data",get:function(){return this._data},set:function(e){this._data=e,this.nodes.div&&(this.nodes.div.textContent=e.code)}},{key:"generateHtml",value:function(e){return p.highlight(this.nodes.div?this.nodes.div.textContent:this.data.code,p.languages[e.toLocaleLowerCase()],e.toLocaleLowerCase())}},{key:"handlerComposition",value:function(e,n){this.isInput=!e.isTrusted,this.isInput&&e.data&&this.insideInput(e,n)}},{key:"insideInput",value:function(e,n){var t=this;if(this.isInput){var a=s.getEndContainer(),r="";if("keydown"!==n||9===e.keyCode){if("paste"===n){e.preventDefault(),e.stopPropagation();var o=e.clipboardData||window.clipboardData;if(!o)return void alert("Paste is not supported, please enter it manually!");s.deleteContents(),r=o.getData("text/plain").toString().replace(/\r\n/g,"\n")}h(this.nodes.div,a,r,(function(e,n){var a=p.highlight(n,p.languages[t.data.language.toLocaleLowerCase()],t.data.language.toLocaleLowerCase());t.nodes.div.innerHTML=a,f(t.nodes.div,e,(function(e,n){s.setCursorOffset(e,n)}))}))}}}},{key:"languageMenuClick",value:function(e){var n=e.target.getBoundingClientRect(),t=n.bottom,a=n.left;document.body.contains(this.nodes.languageOutside)||document.body.appendChild(this.nodes.languageOutside),this.nodes.languageOptions.style.top="".concat(t,"px"),this.nodes.languageOptions.style.left="".concat(a,"px")}},{key:"wrapperMouseEnter",value:function(e){e.preventDefault(),e.stopPropagation(),""!==this.nodes.languageMenu.style.opacity&&"0"!==this.nodes.languageMenu.style.opacity||(this.nodes.languageMenu.style.opacity="1")}},{key:"wrapperMouseLeave",value:function(e){e.preventDefault(),e.stopPropagation(),"1"!==this.nodes.languageMenu.style.opacity||document.body.contains(this.nodes.languageOutside)||(this.nodes.languageMenu.style.opacity="0")}}],i=[{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>',title:"Code"}}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter a code"}},{key:"pasteConfig",get:function(){return{tags:["pre"]}}},{key:"sanitize",get:function(){return{code:!0}}}],o&&t(n.prototype,o),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();export{m as default};
