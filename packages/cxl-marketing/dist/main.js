!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){var n;n=function(){"use strict";var e=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},n=function(e){try{return!!e()}catch(e){return!0}},o={}.toString,i=function(e){return o.call(e).slice(8,-1)},r="".split,s=n(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?r.call(e,""):Object(e)}:Object,a=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},l=function(e){return Object(a(e))},c=Math.ceil,d=Math.floor,h=function(e){return isNaN(e=+e)?0:(e>0?d:c)(e)},u=Math.min,p=function(e){return e>0?u(h(e),9007199254740991):0},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},f=Array.isArray||function(e){return"Array"==i(e)},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function b(e,t){return e(t={exports:{}},t.exports),t.exports}var g,y,_,x,w="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")(),C=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),S=w.document,E=m(S)&&m(S.createElement),k=!C&&!n(function(){return 7!=Object.defineProperty((e="div",E?S.createElement(e):{}),"a",{get:function(){return 7}}).a;var e}),A=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},O=function(e,t){if(!m(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!m(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!m(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!m(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")},P=Object.defineProperty,T={f:C?P:function(e,t,n){if(A(e),t=O(t,!0),A(n),k)try{return P(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},z=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},L=C?function(e,t,n){return T.f(e,t,z(1,n))}:function(e,t,n){return e[t]=n,e},N=function(e,t){try{L(w,e,t)}catch(n){w[e]=t}return t},M=b(function(e){var t=w["__core-js_shared__"]||N("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.0.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),I=0,R=Math.random(),j=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++I+R).toString(36))},D=!n(function(){return!String(Symbol())}),F=M("wks"),q=w.Symbol,B=function(e){return F[e]||(F[e]=D&&q[e]||(D?q:j)("Symbol."+e))},H=B("species"),V=function(e,t){var n;return f(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!f(n.prototype)?m(n)&&null===(n=n[H])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},W=function(t,n){var o=1==t,i=2==t,r=3==t,a=4==t,c=6==t,d=5==t||c,h=n||V;return function(n,u,m){for(var f,v,b=l(n),g=s(b),y=function(t,n,o){if(e(t),void 0===n)return t;switch(o){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,i){return t.call(n,e,o,i)}}return function(){return t.apply(n,arguments)}}(u,m,3),_=p(g.length),x=0,w=o?h(n,_):i?h(n,0):void 0;_>x;x++)if((d||x in g)&&(v=y(f=g[x],x,b),t))if(o)w[x]=v;else if(v)switch(t){case 3:return!0;case 5:return f;case 6:return x;case 2:w.push(f)}else if(a)return!1;return c?-1:r||a?a:w}},$=B("species"),U={}.propertyIsEnumerable,Y=Object.getOwnPropertyDescriptor,G={f:Y&&!U.call({1:2},1)?function(e){var t=Y(this,e);return!!t&&t.enumerable}:U},X=function(e){return s(a(e))},J={}.hasOwnProperty,K=function(e,t){return J.call(e,t)},Z=Object.getOwnPropertyDescriptor,Q={f:C?Z:function(e,t){if(e=X(e),t=O(t,!0),k)try{return Z(e,t)}catch(e){}if(K(e,t))return z(!G.f.call(e,t),e[t])}},ee=M("native-function-to-string",Function.toString),te=w.WeakMap,ne="function"==typeof te&&/native code/.test(ee.call(te)),oe=M("keys"),ie={},re=w.WeakMap;if(ne){var se=new re,ae=se.get,le=se.has,ce=se.set;g=function(e,t){return ce.call(se,e,t),t},y=function(e){return ae.call(se,e)||{}},_=function(e){return le.call(se,e)}}else{var de=oe[x="state"]||(oe[x]=j(x));ie[de]=!0,g=function(e,t){return L(e,de,t),t},y=function(e){return K(e,de)?e[de]:{}},_=function(e){return K(e,de)}}var he,ue,pe={set:g,get:y,has:_,enforce:function(e){return _(e)?y(e):g(e,{})},getterFor:function(e){return function(t){var n;if(!m(t)||(n=y(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},me=b(function(e){var t=pe.get,n=pe.enforce,o=String(ee).split("toString");M("inspectSource",function(e){return ee.call(e)}),(e.exports=function(e,t,i,r){var s=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,l=!!r&&!!r.noTargetGet;"function"==typeof i&&("string"!=typeof t||K(i,"name")||L(i,"name",t),n(i).source=o.join("string"==typeof t?t:"")),e!==w?(s?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=i:L(e,t,i)):a?e[t]=i:N(t,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||ee.call(this)})}),fe=Math.max,ve=Math.min,be=(he=!1,function(e,t,n){var o,i=X(e),r=p(i.length),s=function(e,t){var n=h(e);return n<0?fe(n+t,0):ve(n,t)}(n,r);if(he&&t!=t){for(;r>s;)if((o=i[s++])!=o)return!0}else for(;r>s;s++)if((he||s in i)&&i[s]===t)return he||s||0;return!he&&-1}),ge=function(e,t){var n,o=X(e),i=0,r=[];for(n in o)!K(ie,n)&&K(o,n)&&r.push(n);for(;t.length>i;)K(o,n=t[i++])&&(~be(r,n)||r.push(n));return r},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_e=ye.concat("length","prototype"),xe={f:Object.getOwnPropertyNames||function(e){return ge(e,_e)}},we={f:Object.getOwnPropertySymbols},Ce=w.Reflect,Se=Ce&&Ce.ownKeys||function(e){var t=xe.f(A(e)),n=we.f;return n?t.concat(n(e)):t},Ee=function(e,t){for(var n=Se(t),o=T.f,i=Q.f,r=0;r<n.length;r++){var s=n[r];K(e,s)||o(e,s,i(t,s))}},ke=/#|\.prototype\./,Ae=function(e,t){var o=Pe[Oe(e)];return o==ze||o!=Te&&("function"==typeof t?n(t):!!t)},Oe=Ae.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},Pe=Ae.data={},Te=Ae.NATIVE="N",ze=Ae.POLYFILL="P",Le=Ae,Ne=Q.f,Me=function(e,t){var n,o,i,r,s,a=e.target,l=e.global,c=e.stat;if(n=l?w:c?w[a]||N(a,{}):(w[a]||{}).prototype)for(o in t){if(r=t[o],i=e.noTargetGet?(s=Ne(n,o))&&s.value:n[o],!Le(l?o:a+(c?".":"#")+o,e.forced)&&void 0!==i){if(typeof r==typeof i)continue;Ee(r,i)}(e.sham||i&&i.sham)&&L(r,"sham",!0),me(n,o,r,e)}},Ie=W(2);Me({target:"Array",proto:!0,forced:!(ue="filter",!n(function(){var e=[];return(e.constructor={})[$]=function(){return{foo:1}},1!==e[ue](Boolean).foo}))},{filter:function(e){return Ie(this,e,arguments[1])}});var Re=function(e,t){var o=[][e];return!o||!n(function(){o.call(null,t||function(){throw 1},1)})},je=[].forEach,De=W(0),Fe=Re("forEach")?function(e){return De(this,e,arguments[1])}:je;Me({target:"Array",proto:!0,forced:[].forEach!=Fe},{forEach:Fe}),Me({target:"Array",proto:!0,forced:Re("reduce")},{reduce:function(t){return function(t,n,o,i,r){e(n);var a=l(t),c=s(a),d=p(a.length),h=r?d-1:0,u=r?-1:1;if(o<2)for(;;){if(h in c){i=c[h],h+=u;break}if(h+=u,r?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;r?h>=0:d>h;h+=u)h in c&&(i=n(i,c[h],h,a));return i}(this,t,arguments.length,arguments[1],!1)}});var qe=T.f,Be=Function.prototype,He=Be.toString,Ve=/^\s*function ([^ (]*)/;!C||"name"in Be||qe(Be,"name",{configurable:!0,get:function(){try{return He.call(this).match(Ve)[1]}catch(e){return""}}});var We=Object.keys||function(e){return ge(e,ye)},$e=Object.assign,Ue=!$e||n(function(){var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),7!=$e({},e)[n]||"abcdefghijklmnopqrst"!=We($e({},t)).join("")})?function(e,t){for(var n=l(e),o=arguments.length,i=1,r=we.f,a=G.f;o>i;)for(var c,d=s(arguments[i++]),h=r?We(d).concat(r(d)):We(d),u=h.length,p=0;u>p;)a.call(d,c=h[p++])&&(n[c]=d[c]);return n}:$e;Me({target:"Object",stat:!0,forced:Object.assign!==Ue},{assign:Ue});var Ye="\t\n\v\f\r                　\u2028\u2029\ufeff",Ge="["+Ye+"]",Xe=RegExp("^"+Ge+Ge+"*"),Je=RegExp(Ge+Ge+"*$"),Ke=w.parseInt,Ze=/^[-+]?0[xX]/,Qe=8!==Ke(Ye+"08")||22!==Ke(Ye+"0x16")?function(e,t){var n=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(Xe,"")),2&t&&(e=e.replace(Je,"")),e}(String(e),3);return Ke(n,t>>>0||(Ze.test(n)?16:10))}:Ke;Me({global:!0,forced:parseInt!=Qe},{parseInt:Qe});var et,tt,nt=RegExp.prototype.exec,ot=String.prototype.replace,it=nt,rt=(et=/a/,tt=/b*/g,nt.call(et,"a"),nt.call(tt,"a"),0!==et.lastIndex||0!==tt.lastIndex),st=void 0!==/()??/.exec("")[1];(rt||st)&&(it=function(e){var t,n,o,i,r=this;return st&&(n=new RegExp("^"+r.source+"$(?!\\s)",function(){var e=A(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}.call(r))),rt&&(t=r.lastIndex),o=nt.call(r,e),rt&&o&&(r.lastIndex=r.global?o.index+o[0].length:t),st&&o&&o.length>1&&ot.call(o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o});var at=it;Me({target:"RegExp",proto:!0,forced:/./.exec!==at},{exec:at});var lt=function(e,t,n){return t+(n?function(e,t,n){var o,i,r=String(a(e)),s=h(t),l=r.length;return s<0||s>=l?n?"":void 0:(o=r.charCodeAt(s))<55296||o>56319||s+1===l||(i=r.charCodeAt(s+1))<56320||i>57343?n?r.charAt(s):o:n?r.slice(s,s+2):i-56320+(o-55296<<10)+65536}(e,t,!0).length:1)},ct=function(e,t){var n=e.exec;if("function"==typeof n){var o=n.call(e,t);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return at.call(e,t)},dt=B("species"),ht=!n(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),ut=!n(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),pt=function(e,t,o,i){var r=B(e),s=!n(function(){var t={};return t[r]=function(){return 7},7!=""[e](t)}),a=s&&!n(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[dt]=function(){return n}),n[r](""),!t});if(!s||!a||"replace"===e&&!ht||"split"===e&&!ut){var l=/./[r],c=o(r,""[e],function(e,t,n,o,i){return t.exec===at?s&&!i?{done:!0,value:l.call(t,n,o)}:{done:!0,value:e.call(n,t,o)}:{done:!1}}),d=c[0],h=c[1];me(String.prototype,e,d),me(RegExp.prototype,r,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)}),i&&L(RegExp.prototype[r],"sham",!0)}};pt("match",1,function(e,t,n){return[function(t){var n=a(this),o=null==t?void 0:t[e];return void 0!==o?o.call(t,n):new RegExp(t)[e](String(n))},function(e){var o=n(t,e,this);if(o.done)return o.value;var i=A(e),r=String(this);if(!i.global)return ct(i,r);var s=i.unicode;i.lastIndex=0;for(var a,l=[],c=0;null!==(a=ct(i,r));){var d=String(a[0]);l[c]=d,""===d&&(i.lastIndex=lt(r,p(i.lastIndex),s)),c++}return 0===c?null:l}]});var mt=Math.max,ft=Math.min,vt=Math.floor,bt=/\$([$&`']|\d\d?|<[^>]*>)/g,gt=/\$([$&`']|\d\d?)/g;for(var yt in pt("replace",2,function(e,t,n){return[function(n,o){var i=a(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i,o):t.call(String(i),n,o)},function(e,i){var r=n(t,e,this,i);if(r.done)return r.value;var s=A(e),a=String(this),l="function"==typeof i;l||(i=String(i));var c=s.global;if(c){var d=s.unicode;s.lastIndex=0}for(var u=[];;){var m=ct(s,a);if(null===m)break;if(u.push(m),!c)break;""===String(m[0])&&(s.lastIndex=lt(a,p(s.lastIndex),d))}for(var f,v="",b=0,g=0;g<u.length;g++){m=u[g];for(var y=String(m[0]),_=mt(ft(h(m.index),a.length),0),x=[],w=1;w<m.length;w++)x.push(void 0===(f=m[w])?f:String(f));var C=m.groups;if(l){var S=[y].concat(x,_,a);void 0!==C&&S.push(C);var E=String(i.apply(void 0,S))}else E=o(y,a,_,x,C,i);_>=b&&(v+=a.slice(b,_)+E,b=_+y.length)}return v+a.slice(b)}];function o(e,n,o,i,r,s){var a=o+e.length,c=i.length,d=gt;return void 0!==r&&(r=l(r),d=bt),t.call(s,d,function(t,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,o);case"'":return n.slice(a);case"<":l=r[s.slice(1,-1)];break;default:var d=+s;if(0===d)return t;if(d>c){var h=vt(d/10);return 0===h?t:h<=c?void 0===i[h-1]?s.charAt(1):i[h-1]+s.charAt(1):t}l=i[d-1]}return void 0===l?"":l})}}),{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var _t=w[yt],xt=_t&&_t.prototype;if(xt&&xt.forEach!==Fe)try{L(xt,"forEach",Fe)}catch(e){xt.forEach=Fe}}var wt=b(function(e,t){
/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
e.exports=function(){if("undefined"==typeof document)return 0;var e,t=document.body,n=document.createElement("div"),o=n.style;return o.position="absolute",o.top=o.left="-9999px",o.width=o.height="100px",o.overflow="scroll",t.appendChild(n),e=n.offsetWidth-n.clientWidth,t.removeChild(n),e}}),Ct="Expected a function",St=NaN,Et="[object Symbol]",kt=/^\s+|\s+$/g,At=/^[-+]0x[0-9a-f]+$/i,Ot=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,Tt=parseInt,zt="object"==typeof v&&v&&v.Object===Object&&v,Lt="object"==typeof self&&self&&self.Object===Object&&self,Nt=zt||Lt||Function("return this")(),Mt=Object.prototype.toString,It=Math.max,Rt=Math.min,jt=function(){return Nt.Date.now()};function Dt(e,t,n){var o,i,r,s,a,l,c=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError(Ct);function p(t){var n=o,r=i;return o=i=void 0,c=t,s=e.apply(r,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=r}function f(){var e=jt();if(m(e))return v(e);a=setTimeout(f,function(e){var n=t-(e-l);return h?Rt(n,r-(e-c)):n}(e))}function v(e){return a=void 0,u&&o?p(e):(o=i=void 0,s)}function b(){var e=jt(),n=m(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(f,t),d?p(e):s}(l);if(h)return a=setTimeout(f,t),p(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=qt(t)||0,Ft(n)&&(d=!!n.leading,r=(h="maxWait"in n)?It(qt(n.maxWait)||0,t):r,u="trailing"in n?!!n.trailing:u),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},b.flush=function(){return void 0===a?s:v(jt())},b}function Ft(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function qt(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Mt.call(e)==Et}(e))return St;if(Ft(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ft(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(kt,"");var n=Ot.test(e);return n||Pt.test(e)?Tt(e.slice(2),n?2:8):At.test(e)?St:+e}var Bt=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(Ct);return Ft(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Dt(e,t,{leading:o,maxWait:t,trailing:i})},Ht="Expected a function",Vt=NaN,Wt="[object Symbol]",$t=/^\s+|\s+$/g,Ut=/^[-+]0x[0-9a-f]+$/i,Yt=/^0b[01]+$/i,Gt=/^0o[0-7]+$/i,Xt=parseInt,Jt="object"==typeof v&&v&&v.Object===Object&&v,Kt="object"==typeof self&&self&&self.Object===Object&&self,Zt=Jt||Kt||Function("return this")(),Qt=Object.prototype.toString,en=Math.max,tn=Math.min,nn=function(){return Zt.Date.now()};function on(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function rn(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Qt.call(e)==Wt}(e))return Vt;if(on(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=on(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace($t,"");var n=Yt.test(e);return n||Gt.test(e)?Xt(e.slice(2),n?2:8):Ut.test(e)?Vt:+e}var sn=function(e,t,n){var o,i,r,s,a,l,c=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError(Ht);function p(t){var n=o,r=i;return o=i=void 0,c=t,s=e.apply(r,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=r}function f(){var e=nn();if(m(e))return v(e);a=setTimeout(f,function(e){var n=t-(e-l);return h?tn(n,r-(e-c)):n}(e))}function v(e){return a=void 0,u&&o?p(e):(o=i=void 0,s)}function b(){var e=nn(),n=m(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(f,t),d?p(e):s}(l);if(h)return a=setTimeout(f,t),p(l)}return void 0===a&&(a=setTimeout(f,t)),s}return t=rn(t)||0,on(n)&&(d=!!n.leading,r=(h="maxWait"in n)?en(rn(n.maxWait)||0,t):r,u="trailing"in n?!!n.trailing:u),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},b.flush=function(){return void 0===a?s:v(nn())},b},an="Expected a function",ln="__lodash_hash_undefined__",cn="[object Function]",dn="[object GeneratorFunction]",hn=/^\[object .+?Constructor\]$/,un="object"==typeof v&&v&&v.Object===Object&&v,pn="object"==typeof self&&self&&self.Object===Object&&self,mn=un||pn||Function("return this")(),fn=Array.prototype,vn=Function.prototype,bn=Object.prototype,gn=mn["__core-js_shared__"],yn=function(){var e=/[^.]+$/.exec(gn&&gn.keys&&gn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),_n=vn.toString,xn=bn.hasOwnProperty,wn=bn.toString,Cn=RegExp("^"+_n.call(xn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Sn=fn.splice,En=Nn(mn,"Map"),kn=Nn(Object,"create");function An(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function On(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function Pn(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function Tn(e,t){for(var n,o,i=e.length;i--;)if((n=e[i][0])===(o=t)||n!=n&&o!=o)return i;return-1}function zn(e){return!(!In(e)||(t=e,yn&&yn in t))&&(function(e){var t=In(e)?wn.call(e):"";return t==cn||t==dn}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?Cn:hn).test(function(e){if(null!=e){try{return _n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function Ln(e,t){var n,o,i=e.__data__;return("string"==(o=typeof(n=t))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function Nn(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return zn(n)?n:void 0}function Mn(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(an);var n=function(){var o=arguments,i=t?t.apply(this,o):o[0],r=n.cache;if(r.has(i))return r.get(i);var s=e.apply(this,o);return n.cache=r.set(i,s),s};return n.cache=new(Mn.Cache||Pn),n}function In(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}An.prototype.clear=function(){this.__data__=kn?kn(null):{}},An.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},An.prototype.get=function(e){var t=this.__data__;if(kn){var n=t[e];return n===ln?void 0:n}return xn.call(t,e)?t[e]:void 0},An.prototype.has=function(e){var t=this.__data__;return kn?void 0!==t[e]:xn.call(t,e)},An.prototype.set=function(e,t){return this.__data__[e]=kn&&void 0===t?ln:t,this},On.prototype.clear=function(){this.__data__=[]},On.prototype.delete=function(e){var t=this.__data__,n=Tn(t,e);return!(n<0||(n==t.length-1?t.pop():Sn.call(t,n,1),0))},On.prototype.get=function(e){var t=this.__data__,n=Tn(t,e);return n<0?void 0:t[n][1]},On.prototype.has=function(e){return Tn(this.__data__,e)>-1},On.prototype.set=function(e,t){var n=this.__data__,o=Tn(n,e);return o<0?n.push([e,t]):n[o][1]=t,this},Pn.prototype.clear=function(){this.__data__={hash:new An,map:new(En||On),string:new An}},Pn.prototype.delete=function(e){return Ln(this,e).delete(e)},Pn.prototype.get=function(e){return Ln(this,e).get(e)},Pn.prototype.has=function(e){return Ln(this,e).has(e)},Pn.prototype.set=function(e,t){return Ln(this,e).set(e,t),this},Mn.Cache=Pn;var Rn=Mn,jn=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some(function(e,o){return e[0]===t&&(n=o,!0)}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),o=this.__entries__[n];return o&&o[1]},t.prototype.set=function(t,n){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,o=e(n,t);~o&&n.splice(o,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];e.call(t,i[1],i[0])}},t}()}(),Dn="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Fn=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),qn="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Fn):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)},Bn=2,Hn=20,Vn=["top","right","bottom","left","width","height","size","weight"],Wn="undefined"!=typeof MutationObserver,$n=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,o=!1,i=0;function r(){n&&(n=!1,e()),o&&a()}function s(){qn(r)}function a(){var e=Date.now();if(n){if(e-i<Bn)return;o=!0}else n=!0,o=!1,setTimeout(s,t);i=e}return a}(this.refresh.bind(this),Hn)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter(function(e){return e.gatherActive(),e.hasActive()});return e.forEach(function(e){return e.broadcastActive()}),e.length>0},e.prototype.connect_=function(){Dn&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Wn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){Dn&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;Vn.some(function(e){return!!~n.indexOf(e)})&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Un=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var i=o[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},Yn=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||Fn},Gn=eo(0,0,0,0);function Xn(e){return parseFloat(e)||0}function Jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(t,n){return t+Xn(e["border-"+n+"-width"])},0)}function Kn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Gn;var o=Yn(e).getComputedStyle(e),i=function(e){for(var t={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=e["padding-"+i];t[i]=Xn(r)}return t}(o),r=i.left+i.right,s=i.top+i.bottom,a=Xn(o.width),l=Xn(o.height);if("border-box"===o.boxSizing&&(Math.round(a+r)!==t&&(a-=Jn(o,"left","right")+r),Math.round(l+s)!==n&&(l-=Jn(o,"top","bottom")+s)),!function(e){return e===Yn(e).document.documentElement}(e)){var c=Math.round(a+r)-t,d=Math.round(l+s)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(l-=d)}return eo(i.left,i.top,a,l)}var Zn="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof Yn(e).SVGGraphicsElement}:function(e){return e instanceof Yn(e).SVGElement&&"function"==typeof e.getBBox};function Qn(e){return Dn?Zn(e)?function(e){var t=e.getBBox();return eo(0,0,t.width,t.height)}(e):Kn(e):Gn}function eo(e,t,n,o){return{x:e,y:t,width:n,height:o}}var to=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=eo(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=Qn(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),no=function(){return function(e,t){var n,o,i,r,s,a,l,c=(o=(n=t).x,i=n.y,r=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),Un(l,{x:o,y:i,width:r,height:s,top:i,right:o+r,bottom:s+i,left:o}),l);Un(this,{target:e,contentRect:c})}}(),oo=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new jn,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Yn(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new to(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Yn(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(e){return new no(e.target,e.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),io="undefined"!=typeof WeakMap?new WeakMap:new jn,ro=function(){return function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=$n.getInstance(),o=new oo(t,n,this);io.set(this,o)}}();["observe","unobserve","disconnect"].forEach(function(e){ro.prototype[e]=function(){var t;return(t=io.get(this))[e].apply(t,arguments)}});var so=void 0!==Fn.ResizeObserver?Fn.ResizeObserver:ro,ao=!("undefined"==typeof window||!window.document||!window.document.createElement),lo=function(){function e(t,n){var o=this;this.onScroll=function(){o.scrollXTicking||(window.requestAnimationFrame(o.scrollX),o.scrollXTicking=!0),o.scrollYTicking||(window.requestAnimationFrame(o.scrollY),o.scrollYTicking=!0)},this.scrollX=function(){o.axis.x.isOverflowing&&(o.showScrollbar("x"),o.positionScrollbar("x")),o.scrollXTicking=!1},this.scrollY=function(){o.axis.y.isOverflowing&&(o.showScrollbar("y"),o.positionScrollbar("y")),o.scrollYTicking=!1},this.onMouseEnter=function(){o.showScrollbar("x"),o.showScrollbar("y")},this.onMouseMove=function(e){o.mouseX=e.clientX,o.mouseY=e.clientY,(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&o.onMouseMoveForAxis("x"),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&o.onMouseMoveForAxis("y")},this.onMouseLeave=function(){o.onMouseMove.cancel(),(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&o.onMouseLeaveForAxis("x"),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&o.onMouseLeaveForAxis("y"),o.mouseX=-1,o.mouseY=-1},this.onWindowResize=function(){o.scrollbarWidth=wt(),o.hideNativeScrollbar()},this.hideScrollbars=function(){o.axis.x.track.rect=o.axis.x.track.el.getBoundingClientRect(),o.axis.y.track.rect=o.axis.y.track.el.getBoundingClientRect(),o.isWithinBounds(o.axis.y.track.rect)||(o.axis.y.scrollbar.el.classList.remove(o.classNames.visible),o.axis.y.isVisible=!1),o.isWithinBounds(o.axis.x.track.rect)||(o.axis.x.scrollbar.el.classList.remove(o.classNames.visible),o.axis.x.isVisible=!1)},this.onPointerEvent=function(e){var t,n;o.axis.x.scrollbar.rect=o.axis.x.scrollbar.el.getBoundingClientRect(),o.axis.y.scrollbar.rect=o.axis.y.scrollbar.el.getBoundingClientRect(),(o.axis.x.isOverflowing||o.axis.x.forceVisible)&&(n=o.isWithinBounds(o.axis.x.scrollbar.rect)),(o.axis.y.isOverflowing||o.axis.y.forceVisible)&&(t=o.isWithinBounds(o.axis.y.scrollbar.rect)),(t||n)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(t&&o.onDragStart(e,"y"),n&&o.onDragStart(e,"x")))},this.drag=function(t){var n=o.axis[o.draggedAxis].track,i=n.rect[o.axis[o.draggedAxis].sizeAttr],r=o.axis[o.draggedAxis].scrollbar;t.preventDefault(),t.stopPropagation();var s=(("y"===o.draggedAxis?t.pageY:t.pageX)-n.rect[o.axis[o.draggedAxis].offsetAttr]-o.axis[o.draggedAxis].dragOffset)/n.rect[o.axis[o.draggedAxis].sizeAttr]*o.contentWrapperEl[o.axis[o.draggedAxis].scrollSizeAttr];"x"===o.draggedAxis&&(s=o.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?s-(i+r.size):s,s=o.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-s:s),o.contentWrapperEl[o.axis[o.draggedAxis].scrollOffsetAttr]=s},this.onEndDrag=function(e){e.preventDefault(),e.stopPropagation(),o.el.classList.remove(o.classNames.dragging),document.removeEventListener("mousemove",o.drag,!0),document.removeEventListener("mouseup",o.onEndDrag,!0),o.removePreventClickId=window.setTimeout(function(){document.removeEventListener("click",o.preventClick,!0),document.removeEventListener("dblclick",o.preventClick,!0),o.removePreventClickId=null})},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.flashTimeout,this.contentEl,this.contentWrapperEl,this.offsetEl,this.maskEl,this.globalObserver,this.mutationObserver,this.resizeObserver,this.scrollbarWidth,this.minScrollbarWidth=20,this.options=Object.assign({},e.defaultOptions,n),this.classNames=Object.assign({},e.defaultOptions.classNames,this.options.classNames),this.isRtl,this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,this.el.SimpleBar||(this.recalculate=Bt(this.recalculate.bind(this),64),this.onMouseMove=Bt(this.onMouseMove.bind(this),64),this.hideScrollbars=sn(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=sn(this.onWindowResize.bind(this),64,{leading:!0}),e.getRtlHelpers=Rn(e.getRtlHelpers),this.init())}e.getRtlHelpers=function(){var t=document.createElement("div");t.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var n=t.firstElementChild;document.body.appendChild(n);var o=n.firstElementChild;n.scrollLeft=0;var i=e.getOffset(n),r=e.getOffset(o);n.scrollLeft=999;var s=e.getOffset(o);return{isRtlScrollingInverted:i.left!==r.left&&r.left-s.left!=0,isRtlScrollbarInverted:i.left!==r.left}},e.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(t){t.forEach(function(t){Array.prototype.forEach.call(t.addedNodes,function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!t.SimpleBar&&new e(t,e.getElOptions(t)):Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"),function(t){!t.SimpleBar&&new e(t,e.getElOptions(t))}))}),Array.prototype.forEach.call(t.removedNodes,function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?e.SimpleBar&&e.SimpleBar.unMount():Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"),function(e){e.SimpleBar&&e.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},e.getElOptions=function(e){return Array.prototype.reduce.call(e.attributes,function(e,t){var n=t.name.match(/data-simplebar-(.+)/);if(n){var o=n[1].replace(/\W+(.)/g,function(e,t){return t.toUpperCase()});switch(t.value){case"true":e[o]=!0;break;case"false":e[o]=!1;break;case void 0:e[o]=!0;break;default:e[o]=t.value}}return e},{})},e.removeObserver=function(){this.globalObserver.disconnect()},e.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(t){t.SimpleBar||new e(t,e.getElOptions(t))})},e.getOffset=function(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft)}};var t=e.prototype;return t.init=function(){this.el.SimpleBar=this,ao&&(this.initDOM(),this.scrollbarWidth=wt(),this.recalculate(),this.initListeners())},t.initDOM=function(){var e=this;if(Array.prototype.filter.call(this.el.children,function(t){return t.classList.contains(e.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.el.querySelector("."+this.classNames.contentWrapper),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.contentEl=this.el.querySelector("."+this.classNames.contentEl),this.placeholderEl=this.el.querySelector("."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.el.querySelector("."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.el.querySelector("."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var t=document.createElement("div"),n=document.createElement("div");t.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),t.appendChild(n),this.axis.x.track.el=t.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=t.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},t.initListeners=function(){var e=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick","touchstart","touchend","touchmove"].forEach(function(t){e.el.addEventListener(t,e.onPointerEvent,!0)}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onWindowResize),this.resizeObserver=new so(this.recalculate),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl)},t.recalculate=function(){var e=this.heightAutoObserverEl.offsetHeight<=1,t=this.heightAutoObserverEl.offsetWidth<=1;this.elStyles=window.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction,this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft,this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=t?this.contentEl.offsetWidth+"px":"auto",this.placeholderEl.style.height=this.contentEl.scrollHeight+"px",this.axis.x.isOverflowing=this.contentWrapperEl.scrollWidth>this.contentWrapperEl.offsetWidth,this.axis.y.isOverflowing=this.contentWrapperEl.scrollHeight>this.contentWrapperEl.offsetHeight,this.axis.x.isOverflowing="hidden"!==this.elStyles.overflowX&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==this.elStyles.overflowY&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar(),this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect(),this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect(),this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},t.getScrollbarSize=function(e){void 0===e&&(e="y");var t,n=this.scrollbarWidth?this.contentWrapperEl[this.axis[e].scrollSizeAttr]:this.contentWrapperEl[this.axis[e].scrollSizeAttr]-this.minScrollbarWidth,o=this.axis[e].track.rect[this.axis[e].sizeAttr];if(this.axis[e].isOverflowing){var i=o/n;return t=Math.max(~~(i*o),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(t=Math.min(t,this.options.scrollbarMaxSize)),t}},t.positionScrollbar=function(t){void 0===t&&(t="y");var n=this.contentWrapperEl[this.axis[t].scrollSizeAttr],o=this.axis[t].track.rect[this.axis[t].sizeAttr],i=parseInt(this.elStyles[this.axis[t].sizeAttr],10),r=this.axis[t].scrollbar,s=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=(s="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-s:s)/(n-i),l=~~((o-r.size)*a);l="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l+(o-r.size):l,r.el.style.transform="x"===t?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"},t.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,n=this.axis[e].scrollbar.el;this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll"):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden"),this.axis[e].isOverflowing?n.style.display="block":n.style.display="none"},t.hideNativeScrollbar=function(){if(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0,!this.scrollbarWidth){var e=[this.isRtl?"paddingLeft":"paddingRight"];this.contentWrapperEl.style[e]=this.axis.y.isOverflowing||this.axis.y.forceVisible?this.minScrollbarWidth+"px":0,this.contentWrapperEl.style.paddingBottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?this.minScrollbarWidth+"px":0}},t.onMouseMoveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.rect=this.axis[e].track.el.getBoundingClientRect(),this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[e].scrollbar.rect)?this.axis[e].scrollbar.el.classList.add(this.classNames.hover):this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[e].track.rect)?(this.showScrollbar(e),this.axis[e].track.el.classList.add(this.classNames.hover)):this.axis[e].track.el.classList.remove(this.classNames.hover)},t.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.el.classList.remove(this.classNames.hover),this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)},t.showScrollbar=function(e){void 0===e&&(e="y");var t=this.axis[e].scrollbar.el;this.axis[e].isVisible||(t.classList.add(this.classNames.visible),this.axis[e].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},t.onDragStart=function(e,t){void 0===t&&(t="y");var n=this.axis[t].scrollbar.el,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-n.getBoundingClientRect()[this.axis[t].offsetAttr],this.draggedAxis=t,this.el.classList.add(this.classNames.dragging),document.addEventListener("mousemove",this.drag,!0),document.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(document.addEventListener("click",this.preventClick,!0),document.addEventListener("dblclick",this.preventClick,!0)):(window.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.getContentElement=function(){return this.contentEl},t.getScrollElement=function(){return this.contentWrapperEl},t.removeListeners=function(){var e=this;this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick","touchstart","touchend","touchmove"].forEach(function(t){e.el.removeEventListener(t,e.onPointerEvent)}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},t.unMount=function(){this.removeListeners(),this.el.SimpleBar=null},t.isChildNode=function(e){return null!==e&&(e===this.el||this.isChildNode(e.parentNode))},t.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},e}();return lo.defaultOptions={autoHide:!0,forceVisible:!1,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},ao&&lo.initHtmlApi(),lo},e.exports=n()}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,i=e=>"function"==typeof e&&o.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${d}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],i=document.createTreeWalker(t.content,133,null,!1);let r=0,s=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let o=0;for(let e=0;e<n;e++)m(t[e].name,u)&&o++;for(;o-- >0;){const t=l[a],n=b.exec(t)[2],o=n.toLowerCase()+u,i=e.getAttribute(o);e.removeAttribute(o);const r=i.split(h);this.parts.push({type:"attribute",index:s,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const o=e.parentNode,i=t.split(h),r=i.length-1;for(let t=0;t<r;t++){let n,r=i[t];if(""===r)n=v();else{const e=b.exec(r);null!==e&&m(e[2],u)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-u.length)+e[3]),n=document.createTextNode(r)}o.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===i[r]?(o.insertBefore(v(),e),n.push(e)):e.data=i[r],a+=r}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&s!==r||(s++,t.insertBefore(v(),e)),r=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const m=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},f=e=>-1!==e.index,v=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,l=o.nextNode();for(;s<n.length;)if(i=n[s],f(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=t.pop(),l=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,n,o){this.strings=e,this.values=t,this.type=n,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],i=e.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===e.indexOf("--\x3e",i+1);const r=b.exec(e);t+=null===r?e+(n?c:d):e.substr(0,r.index)+r[1]+r[2]+u+r[3]+c}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let o=0;o<t;o++){n+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(_(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||_(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(v()),this.endNode=e.appendChild(v())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=v()),e.__insert(this.endNode=v())}insertAfterPart(e){e.__insert(this.startNode=v()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(_(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),o=n._clone();n.update(e.values),this.__commitNode(o),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,o=0;for(const i of e)void 0===(n=t[o])&&(n=new S(this.options),t.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(i),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class k extends w{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let O=!1;try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class P{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new class{handleAttributeExpressions(e,t,n,o){const i=t[0];return"."===i?new k(e,t.slice(1),n).parts:"@"===i?[new P(e,t.slice(1),o.eventContext)]:"?"===i?[new E(e,t.slice(1),n)]:new w(e,t,n).parts}handleTextExpression(e){return new S(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function L(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(c);return void 0===(n=t.keyString.get(o))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const N=new Map,M=new WeakMap,I=(e,t,n)=>{let o=M.get(t);void 0===o&&(s(t,t.firstChild),M.set(t,o=new S(Object.assign({templateFactory:L},n))),o.appendInto(t)),o.setValue(e),o.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const R=(e,...t)=>new y(e,t,"html",z),j=133;function D(e,t){const{element:{content:n},parts:o}=e,i=document.createTreeWalker(n,j,null,!1);let r=q(o),s=o[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=o[r=q(o,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const F=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,j,null,!1);for(;n.nextNode();)t++;return t},q=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(f(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const V=e=>t=>{const n=B(t.type,e);let o=N.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},N.set(n,o));let i=o.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=o.keyString.get(r))){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),o.keyString.set(r,i)}return o.stringsArray.set(t.strings,i),i},W=["html","svg"],$=new Set,U=(e,t,n)=>{$.add(n);const o=e.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const r=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{W.forEach(t=>{const n=N.get(B(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),D(e,n)})})})(n);const s=t.element.content;!function(e,t,n=null){const{element:{content:o},parts:i}=e;if(null==n)return void o.appendChild(t);const r=document.createTreeWalker(o,j,null,!1);let s=q(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=F(t),n.parentNode.insertBefore(t,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=q(i,s);return}s=q(i,s)}}(t,r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);const a=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),D(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const Y={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:G},J=Promise.resolve(!0),K=1,Z=4,Q=8,ee=16,te=32;class ne extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const o=this._attributeNameForProperty(n,t);void 0!==o&&(this._attributeToPropertyMap.set(o,n),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const o=this[e];this[n]=t,this._requestUpdate(e,o)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=G){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,o=t.converter||Y,i="function"==typeof o?o:o.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,o=t.converter;return(o&&o.toAttribute||Y.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=X){const o=this.constructor,i=o._attributeNameForProperty(e,n);if(void 0!==i){const e=o._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Q,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Q}}_attributeToProperty(e,t){if(this._updateState&Q)return;const n=this.constructor,o=n._attributeToPropertyMap.get(e);if(void 0!==o){const e=n._classProperties.get(o)||X;this._updateState=this._updateState|ee,this[o]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const o=this.constructor,i=o._classProperties.get(e)||X;o._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Z;const n=this._updatePromise;this._updatePromise=new Promise((n,o)=>{e=n,t=o});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&Z}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Z}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ne.finalized=!0;const oe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class re{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(oe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const n=t.reduce((t,n,o)=>t+(e=>{if(e instanceof re)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new re(n,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ae=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let o=0,i=t.length;o<i;o++){const i=t[o];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class le extends ne{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ae(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?oe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}le.finalized=!0,le.render=(e,t,n)=>{const o=n.scopeName,i=M.has(t),r=H&&11===t.nodeType&&!!t.host&&e instanceof y,a=r&&!$.has(o),l=a?document.createDocumentFragment():t;if(I(e,l,Object.assign({templateFactory:V(o)},n)),a){const e=M.get(l);M.delete(l),e.value instanceof g&&U(l,e.value.template,o),s(t,t.firstChild),t.appendChild(l),M.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};var ce=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}html,body{height:100%;margin:0;min-height:100%}a{text-decoration:none}a:hover{text-decoration:underline}iframe{max-width:100%}img{height:auto;max-width:100%}.align-left{text-align:left}.align-center{text-align:center}.align-right{text-align:right}h1,h2,h3,h4,h5{font-weight:900}h1 strong,h2 strong,h3 strong,h4 strong,h5 strong{color:var(--lumo-primary-color);font-weight:900}.screen-reader-text{display:none}.text-center{text-align:center}.flex{display:flex;flex-direction:column}.flex .column{flex:100%}@media(min-width: 45em){.flex{flex-direction:row}.flex .column{flex:50%}}.wrap{box-sizing:border-box;margin-left:auto;margin-right:auto;max-width:720px;padding-left:calc(var(--lumo-space-m));padding-right:calc(var(--lumo-space-m));width:100%}.wrap.no-padding{padding:0}@media(min-width: 45em){.wrap{max-width:960px}}@media(min-width: 60em){.wrap{max-width:1280px}.wrap.shrunk{max-width:720px}}html,body{overflow-x:hidden}hr{margin:30px 0}section.padding{padding:var(--lumo-space-xl) 0}section.padding-top{padding-top:var(--lumo-space-xl)}section.padding-bottom{padding-bottom:var(--lumo-space-xl)}section ul{list-style:none;margin:0 var(--lumo-space-xl);padding:0;text-align:left}section ul li{margin-bottom:var(--lumo-space-xl);padding-left:var(--lumo-space-l);position:relative}section ul li::before{color:var(--lumo-primary-color);content:var(--lumo-icons-angle-right);font-family:var(--lumo-icons);font-weight:900;left:0;position:absolute}@media(min-width: 45em){section ul{padding-left:40px}}section .column br{display:none}section .column h2{font-size:calc(var(--lumo-font-size-xl) * 1.3);line-height:calc(var(--lumo-font-size-xl) * 1.3);margin-top:var(--lumo-space-m)}section .column h2 img{border-radius:0;box-shadow:none;display:block;float:none !important;width:auto}section .column img{border-radius:var(--lumo-border-radius-s);box-shadow:var(--lumo-space-s) var(--lumo-space-s) var(--lumo-contrast-30pct);margin:var(--lumo-space-m) 0;width:100%}@media(min-width: 45em){section.padding{padding:calc(var(--lumo-space-xl) * 1.5) 0}section.padding-top{padding-top:calc(var(--lumo-space-xl) * 1.5)}section.padding-bottom{padding-bottom:calc(var(--lumo-space-xl) * 1.5)}section .column br{display:block}section .column h2{font-size:calc(var(--lumo-font-size-xl) * 2);line-height:calc(var(--lumo-font-size-xl) * 2)}section .column img{width:90%}section .column:last-child img{float:right}section .column:first-child img{float:left}}footer{background-color:var(--lumo-shade);color:var(--lumo-base-color);padding:var(--lumo-space-m) 0}footer a{color:var(--lumo-base-color);font-size:calc(var(--lumo-font-size-s))}footer a:hover{color:var(--lumo-base-color)}footer .menu__items{padding:0;list-style:none;margin:0}footer .menu__item{position:relative;padding-left:var(--lumo-space-s);padding-right:var(--lumo-space-s);display:inline-flex}footer .menu__item::after{content:"";border-right:1px solid #fff;position:absolute;width:1px;height:13px;top:7px;right:0}footer .menu__item:first-child::after,footer .menu__item:last-child::after{display:none}footer .menu__item:first-child{padding-left:0}footer .menu__item:last-child{padding-right:0}`;const de=document.createElement("template");de.innerHTML=`\n<custom-style>\n  <style>${ce}</style>\n</custom-style>`,document.head.appendChild(de.content);customElements.define("vaadin-lumo-styles",class extends HTMLElement{static get version(){return"1.5.0"}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let he,ue=null,pe=window.HTMLImports&&window.HTMLImports.whenReady||null;function me(e){requestAnimationFrame(function(){pe?pe(e):(ue||(ue=new Promise(e=>{he=e}),"complete"===document.readyState?he():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&he()})),ue.then(function(){e&&e()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fe="__seenByShadyCSS",ve="__shadyCSSCachedStyle";let be=null,ge=null;class ye{constructor(){this.customStyles=[],this.enqueued=!1,me(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&ge&&(this.enqueued=!0,me(ge))}addCustomStyle(e){e[fe]||(e[fe]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[ve])return e[ve];let t;return t=e.getStyle?e.getStyle():e}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const n=e[t];if(n[ve])continue;const o=this.getStyleForCustomStyle(n);if(o){const e=o.__appliedElement||o;be&&be(e),n[ve]=e}}return e}}ye.prototype.addCustomStyle=ye.prototype.addCustomStyle,ye.prototype.getStyleForCustomStyle=ye.prototype.getStyleForCustomStyle,ye.prototype.processStyles=ye.prototype.processStyles,Object.defineProperties(ye.prototype,{transformCallback:{get:()=>be,set(e){be=e}},validateCallback:{get:()=>ge,set(e){let t=!1;ge||(t=!0),ge=e,t&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _e=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,xe=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,we=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ce(e,t){for(let n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function Se(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ee=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ke,Ae;function Oe(e){ke=(!e||!e.shimcssproperties)&&(Ee||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(Ae=window.ShadyCSS.cssBuild);const Pe=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ke=window.ShadyCSS.nativeCss:window.ShadyCSS?(Oe(window.ShadyCSS),window.ShadyCSS=void 0):Oe(window.WebComponents&&window.WebComponents.flags);const Te=ke,ze=new ye;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){ze.processStyles(),Ce(e,t)},styleElement(e){ze.processStyles()},styleDocument(e){ze.processStyles(),Ce(document.body,e)},getComputedStyleValue:(e,t)=>Se(e,t),flushCustomStyles(){},nativeCss:Te,nativeShadow:Ee,cssBuild:Ae,disableRuntime:Pe}),window.ShadyCSS.CustomStyleInterface=ze,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Le,Ne,Me=/(url\()([^)]*)(\))/g,Ie=/(^\/)|(^#)|(^[\w-\d]*:)/;function Re(e,t){if(e&&Ie.test(e))return e;if(void 0===Le){Le=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",Le="http://a/c%20d"===e.href}catch(e){}}return t||(t=document.baseURI||window.location.href),Le?new URL(e,t).href:(Ne||((Ne=document.implementation.createHTMLDocument("temp")).base=Ne.createElement("base"),Ne.head.appendChild(Ne.base),Ne.anchor=Ne.createElement("a"),Ne.body.appendChild(Ne.anchor)),Ne.base.href=t,Ne.anchor.href=e,Ne.anchor.href||e)}function je(e,t){return e.replace(Me,function(e,n,o,i){return n+"'"+Re(o.replace(/["']/g,""),t)+"'"+i})}function De(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fe=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let qe=De(document.baseURI||window.location.href);let Be=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let He=!1;let Ve=!1;let We=!1;let $e=!1;let Ue=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ye={},Ge={};function Xe(e,t){Ye[e]=Ge[e.toLowerCase()]=t}function Je(e){return Ye[e]||Ge[e.toLowerCase()]}class Ke extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let n=Je(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,o){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Re(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=De(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Ve&&void 0!==Je(e))throw Xe(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Xe(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}Ke.prototype.modules=Ye,customElements.define("dom-module",Ke);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ze="link[rel=import][type~=css]",Qe="include",et="shady-unscoped";function tt(e){return Ke.import(e)}function nt(e){const t=je((e.body?e.body:e).textContent,e.baseURI),n=document.createElement("style");return n.textContent=t,n}function ot(e){const t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...it(t[e]));return n}function it(e){const t=tt(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...st(t));const n=t.querySelector("template");n&&e.push(...rt(n,t.assetpath)),t._styles=e}return t._styles}function rt(e,t){if(!e._styles){const n=[],o=e.content.querySelectorAll("style");for(let e=0;e<o.length;e++){let i=o[e],r=i.getAttribute(Qe);r&&n.push(...ot(r).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=je(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function st(e){const t=[],n=e.querySelectorAll(Ze);for(let e=0;e<n.length;e++){let o=n[e];if(o.import){const e=o.import,n=o.hasAttribute(et);if(n&&!e._unscopedStyle){const t=nt(e);t.setAttribute(et,""),e._unscopedStyle=t}else e._style||(e._style=nt(e));t.push(n?e._unscopedStyle:e._style)}}return t}function at(e){let t=tt(e);if(t&&void 0===t._cssText){let e=lt(t),n=t.querySelector("template");n&&(e+=function(e,t){let n="";const o=rt(e,t);for(let e=0;e<o.length;e++){let t=o[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}(n,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function lt(e){let t="",n=st(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ct="include",dt=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,dt.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute(ct);return t&&(e.removeAttribute(ct),e.textContent=function(e){let t=e.trim().split(/\s+/),n="";for(let e=0;e<t.length;e++)n+=at(t[e]);return n}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}});const ht=document.createElement("template");ht.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ht.content);const ut=document.createElement("template");ut.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(ut.content);const pt=document.createElement("template");pt.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(pt.content);const mt=document.createElement("template");mt.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(mt.content);const ft=document.createElement("template");ft.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ft.content);const vt=document.createElement("template");vt.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(vt.content);const bt=document.createElement("template");bt.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(bt.content);const gt=document.createElement("template");gt.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(gt.content);const yt=document.createElement("template");yt.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(yt.content);const _t=document.createElement("template");_t.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(_t.content);const xt=document.createElement("template");xt.innerHTML='<dom-module id="lumo-badge">\n  <template>\n    <style>\n      [theme~="badge"] {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-primary-color-10pct);\n        border-radius: var(--lumo-border-radius-s);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-s);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);\n      }\n\n      /* Ensure proper vertical alignment */\n      [theme~="badge"]::before {\n        display: inline-block;\n        content: "\\2003";\n        width: 0;\n      }\n\n      [theme~="badge"][theme~="small"] {\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n      }\n\n      /* Colors */\n\n      [theme~="badge"][theme~="success"] {\n        color: var(--lumo-success-text-color);\n        background-color: var(--lumo-success-color-10pct);\n      }\n\n      [theme~="badge"][theme~="error"] {\n        color: var(--lumo-error-text-color);\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      [theme~="badge"][theme~="contrast"] {\n        color: var(--lumo-contrast-80pct);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* Primary */\n\n      [theme~="badge"][theme~="primary"] {\n        color: var(--lumo-primary-contrast-color);\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="success"][theme~="primary"] {\n        color: var(--lumo-success-contrast-color);\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"][theme~="primary"] {\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n      }\n\n      [theme~="badge"][theme~="contrast"][theme~="primary"] {\n        color: var(--lumo-base-color);\n        background-color: var(--lumo-contrast);\n      }\n\n      /* Links */\n\n      [theme~="badge"][href]:hover {\n        text-decoration: none;\n      }\n\n      /* Icon */\n\n      [theme~="badge"] iron-icon {\n        margin: -0.25em 0;\n        --iron-icon-width: 1.5em;\n        --iron-icon-height: 1.5em;\n      }\n\n      [theme~="badge"] iron-icon:first-child {\n        margin-left: -0.375em;\n      }\n\n      [theme~="badge"] iron-icon:last-child {\n        margin-right: -0.375em;\n      }\n\n      [theme~="badge"][icon] {\n        min-width: 0;\n        padding: 0;\n        font-size: 1rem;\n        --iron-icon-width: var(--lumo-icon-size-m);\n        --iron-icon-height: var(--lumo-icon-size-m);\n      }\n\n      [theme~="badge"][icon][theme~="small"] {\n        --iron-icon-width: var(--lumo-icon-size-s);\n        --iron-icon-height: var(--lumo-icon-size-s);\n      }\n\n      /* Empty */\n\n      [theme~="badge"]:not([icon]):empty {\n        min-width: 0;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        border-radius: 50%;\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="small"]:not([icon]):empty {\n        width: 0.75em;\n        height: 0.75em;\n      }\n\n      [theme~="badge"][theme~="contrast"]:not([icon]):empty {\n        background-color: var(--lumo-contrast);\n      }\n\n      [theme~="badge"][theme~="success"]:not([icon]):empty {\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"]:not([icon]):empty {\n        background-color: var(--lumo-error-color);\n      }\n\n      /* Pill */\n\n      [theme~="badge"][theme~="pill"] {\n        --lumo-border-radius-s: 1em;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(xt.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class wt{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Ct(e){return function e(t,n){let o=n.substring(t.start,t.end-1);t.parsedCssText=t.cssText=o.trim();if(t.parent){let e=t.previous?t.previous.end:t.parent.start;o=(o=(o=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}(o=n.substring(e,t.start-1))).replace(Ot.multipleSpaces," ")).substring(o.lastIndexOf(";")+1);let i=t.parsedSelector=t.selector=o.trim();t.atRule=0===i.indexOf(zt),t.atRule?0===i.indexOf(Tt)?t.type=Et.MEDIA_RULE:i.match(Ot.keyframesRule)&&(t.type=Et.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ot.multipleSpaces).pop()):0===i.indexOf(Pt)?t.type=Et.MIXIN_RULE:t.type=Et.STYLE_RULE}let i=t.rules;if(i)for(let t,o=0,r=i.length;o<r&&(t=i[o]);o++)e(t,n);return t}(function(e){let t=new wt;t.start=0,t.end=e.length;let n=t;for(let o=0,i=e.length;o<i;o++)if(e[o]===kt){n.rules||(n.rules=[]);let e=n,t=e.rules[e.rules.length-1]||null;(n=new wt).start=o+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[o]===At&&(n.end=o+1,n=n.parent||t);return t}(e=e.replace(Ot.comments,"").replace(Ot.port,"")),e)}function St(e,t,n=""){let o="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Pt)}(n))for(let e,i=0,r=n.length;i<r&&(e=n[i]);i++)o=St(e,t,o);else(o=(o=t?e.cssText:function(e){return function(e){return e.replace(Ot.mixinApply,"").replace(Ot.varApply,"")}(e=function(e){return e.replace(Ot.customProp,"").replace(Ot.mixinProp,"")}(e))}(e.cssText)).trim())&&(o="  "+o+"\n")}return o&&(e.selector&&(n+=e.selector+" "+kt+"\n"),n+=o,e.selector&&(n+=At+"\n\n")),n}const Et={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},kt="{",At="}",Ot={comments:/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Pt="--",Tt="@media",zt="@",Lt=new Set,Nt="shady-unscoped";function Mt(e){const t=e.textContent;if(!Lt.has(t)){Lt.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}}function It(e){return e.hasAttribute(Nt)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Rt(e,t){return e?("string"==typeof e&&(e=Ct(e)),t&&Dt(e,t),St(e,Te)):""}function jt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Ct(e.textContent)),e.__cssRules||null}function Dt(e,t,n,o){if(!e)return;let i=!1,r=e.type;if(o&&r===Et.MEDIA_RULE){let t=e.selector.match(we);t&&(window.matchMedia(t[1]).matches||(i=!0))}r===Et.STYLE_RULE?t(e):n&&r===Et.KEYFRAMES_RULE?n(e):r===Et.MIXIN_RULE&&(i=!0);let s=e.rules;if(s&&!i)for(let e,i=0,r=s.length;i<r&&(e=s[i]);i++)Dt(e,t,n,o)}function Ft(e,t){let n=0;for(let o=t,i=e.length;o<i;o++)if("("===e[o])n++;else if(")"===e[o]&&0==--n)return o;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;const qt="css-build";function Bt(e){if(void 0!==Ae)return Ae;if(void 0===e.__cssBuild){const t=e.getAttribute(qt);if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if(e[0]===qt)return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),e.__cssBuild=t}}return e.__cssBuild||""}function Ht(e){return""!==Bt(e)}const Vt=/;\s*/m,Wt=/^\s*(initial)|(inherit)\s*$/,$t=/\s*!important/,Ut="_-_";class Yt{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Gt=null;class Xt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Yt}detectMixin(e){return function(e){const t=xe.test(e)||_e.test(e);return xe.lastIndex=0,_e.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],n=e.querySelectorAll("style");for(let e=0;e<n.length;e++){const o=n[e];It(o)?Ee||(Mt(o),o.parentNode.removeChild(o)):(t.push(o.textContent),o.parentNode.removeChild(o))}return t.join("").trim()}(e.content);if(t){const n=document.createElement("style");return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=""){let n=jt(e);return this.transformRules(n,t),e.textContent=Rt(n),n}transformCustomStyle(e){let t=jt(e);return Dt(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Rt(t),t}transformRules(e,t){this._currentElement=t,Dt(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(_e,(e,n,o,i)=>this._produceCssProperties(e,n,o,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const n={};let o=!1;return Dt(t,t=>{(o=o||t===e)||t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=xe.exec(e);){let o=n[0],i=n[1],r=n.index,s=r+o.indexOf("@apply"),a=r+o.length,l=e.slice(0,s),c=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let h=this._atApplyToCssProperties(i,d);e=`${l}${h}${c}`,xe.lastIndex=r+h.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Vt,"");let n=[],o=this._map.get(e);if(o||(this._map.set(e,{}),o=this._map.get(e)),o){let i,r,s;this._currentElement&&(o.dependants[this._currentElement]=!0);const a=o.properties;for(i in a)s=t&&t[i],r=[i,": var(",e,Ut,i],s&&r.push(",",s.replace($t,"")),r.push(")"),$t.test(a[i])&&r.push(" !important"),n.push(r.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,t){let n=Wt.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let n,o,i=e.split(";"),r={};for(let e,s,a=0;a<i.length;a++)(e=i[a])&&(s=e.split(":")).length>1&&(n=s[0].trim(),o=s.slice(1).join(":"),t&&(o=this._replaceInitialOrInherit(n,o)),r[n]=o);return r}_invalidateMixinEntry(e){if(Gt)for(let t in e.dependants)t!==this._currentElement&&Gt(t)}_produceCssProperties(e,t,n,o,i){if(n&&function e(t,n){let o=t.indexOf("var(");if(-1===o)return n(t,"","","");let i=Ft(t,o+3),r=t.substring(o+4,i),s=t.substring(0,o),a=e(t.substring(i+1),n),l=r.indexOf(",");return-1===l?n(s,r.trim(),"",a):n(s,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(n,(e,t)=>{t&&this._map.get(t)&&(o=`@apply ${t};`)}),!o)return e;let r=this._consumeCssProperties(""+o,i),s=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,c=this._map.get(t),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let h,u,p=[],m=!1;for(h in l)void 0===(u=a[h])&&(u="initial"),!d||h in d||(m=!0),p.push(`${t}${Ut}${h}: ${u}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(s=`${e};${s}`),`${s}${p.join("; ")};`}}Xt.prototype.detectMixin=Xt.prototype.detectMixin,Xt.prototype.transformStyle=Xt.prototype.transformStyle,Xt.prototype.transformCustomStyle=Xt.prototype.transformCustomStyle,Xt.prototype.transformRules=Xt.prototype.transformRules,Xt.prototype.transformRule=Xt.prototype.transformRule,Xt.prototype.transformTemplate=Xt.prototype.transformTemplate,Xt.prototype._separator=Ut,Object.defineProperty(Xt.prototype,"invalidCallback",{get:()=>Gt,set(e){Gt=e}});var Jt=Xt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var Kt={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zt="_applyShimCurrentVersion",Qt="_applyShimNextVersion",en="_applyShimValidatingVersion",tn=Promise.resolve();function nn(e){let t=Kt[e];t&&function(e){e[Zt]=e[Zt]||0,e[en]=e[en]||0,e[Qt]=(e[Qt]||0)+1}(t)}function on(e){return e[Zt]===e[Qt]}function rn(e){return!on(e)&&e[en]===e[Qt]}function sn(e){e[en]=e[Qt],e._validating||(e._validating=!0,tn.then(function(){e[Zt]=e[Qt],e._validating=!1}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const an=new Jt;class ln{constructor(){this.customStyleInterface=null,an.invalidCallback=nn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{an.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Ht(e))return;Kt[t]=e;let n=an.transformTemplate(e,t);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],o=this.customStyleInterface.getStyleForCustomStyle(n);o&&an.transformCustomStyle(o)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Ce(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,n="",o="";return t?t.indexOf("-")>-1?n=t:(o=t,n=e.getAttribute&&e.getAttribute("is")||""):(n=e.is,o=e.extends),{is:n,typeExtension:o}}(e),n=Kt[t];if((!n||!Ht(n))&&n&&!on(n)){rn(n)||(this.prepareTemplate(n,t),sn(n));let o=e.shadowRoot;if(o){let e=o.querySelector("style");e&&(e.__cssRules=n._styleAst,e.textContent=Rt(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new ln;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,o){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Se(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:Te,nativeShadow:Ee,cssBuild:Ae,disableRuntime:Pe},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=an;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let cn=0;function dn(){}dn.prototype.__mixinApplications,dn.prototype.__mixinSet;const hn=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=cn++;return function(o){let i=o.__mixinSet;if(i&&i[n])return o;let r=t,s=r.get(o);s||(s=e(o),r.set(o,s));let a=Object.create(s.__mixinSet||i||null);return a[n]=!0,s.__mixinSet=a,s}},un=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function pn(e){return e.indexOf(".")>=0}function mn(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function fn(e,t){return 0===e.indexOf(t+".")}function vn(e,t){return 0===t.indexOf(e+".")}function bn(e,t,n){return t+n.slice(e.length)}function gn(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let o=e[n].toString().split(".");for(let e=0;e<o.length;e++)t.push(o[e])}return t.join(".")}return e}function yn(e){return Array.isArray(e)?gn(e).split("."):e.toString().split(".")}function _n(e,t,n){let o=e,i=yn(t);for(let e=0;e<i.length;e++){if(!o)return;o=o[i[e]]}return n&&(n.path=i.join(".")),o}function xn(e,t,n){let o=e,i=yn(t),r=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){if(!(o=o[i[e]]))return}o[r]=n}else o[t]=n;return i.join(".")}const wn={},Cn=/-[a-z]/g,Sn=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function En(e){return wn[e]||(wn[e]=e.indexOf("-")<0?e:e.replace(Cn,e=>e[1].toUpperCase()))}function kn(e){return wn[e]||(wn[e]=e.replace(Sn,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let An=0,On=0,Pn=[],Tn=0,zn=document.createTextNode("");new window.MutationObserver(function(){const e=Pn.length;for(let t=0;t<e;t++){let e=Pn[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Pn.splice(0,e),On+=e}).observe(zn,{characterData:!0});const Ln={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Nn={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Mn={run:e=>(zn.textContent=Tn++,Pn.push(e),An++),cancel(e){const t=e-On;if(t>=0){if(!Pn[t])throw new Error("invalid async handle: "+e);Pn[t]=null}}},In=Mn,Rn=hn(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let o=this.__data[e],i=this._shouldPropertyChange(e,t,o);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=o),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,In.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n))}_shouldPropertiesChange(e,t,n){return Boolean(t)}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n==n||t==t)}attributeChangedCallback(e,t,n,o){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,o)}_attributeToProperty(e,t,n){if(!this.__serializing){const o=this.__dataAttributes,i=o&&o[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){const o=this._serializeValue(t);void 0===o?e.removeAttribute(n):("class"!==n&&"name"!==n&&"slot"!==n||(e=un(e)),e.setAttribute(n,o))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}}),jn={};let Dn=HTMLElement.prototype;for(;Dn;){let e=Object.getOwnPropertyNames(Dn);for(let t=0;t<e.length;t++)jn[e[t]]=!0;Dn=Object.getPrototypeOf(Dn)}const Fn=hn(e=>{const t=Rn(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(En(e[t]))}static attributeNameForProperty(e){return kn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch(t){n=e}break;case Array:try{n=JSON.parse(e)}catch(t){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){!function(e,t){if(!jn[t]){let n=e[t];void 0!==n&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),qn=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),Bn={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(e){let t=e.getAttribute("is");if(t&&Bn[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function Vn(e,t){let n=t.parentInfo&&Vn(e,t.parentInfo);if(!n)return e;qn.currentNode=n;for(let e=qn.firstChild(),n=0;e;e=qn.nextSibling())if(t.parentIndex===n++)return e}function Wn(e,t,n,o){o.id&&(t[o.id]=n)}function $n(e,t,n){if(n.events&&n.events.length)for(let o,i=0,r=n.events;i<r.length&&(o=r[i]);i++)e._addMethodEventListenerToNode(t,o.name,o.value,e)}function Un(e,t,n){n.templateInfo&&(t._templateInfo=n.templateInfo)}const Yn=hn(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let o,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(i,t,n)||o,qn.currentNode=i,qn.firstChild()&&(o=this._parseTemplateChildNodes(i,t,n)||o),i.hasAttributes&&i.hasAttributes()&&(o=this._parseTemplateNodeAttributes(i,t,n)||o),o}static _parseTemplateChildNodes(e,t,n){if("script"!==e.localName&&"style"!==e.localName){qn.currentNode=e;for(let o,i=qn.firstChild(),r=0;i;i=o){if("template"==i.localName&&(i=Hn(i)),qn.currentNode=i,o=qn.nextSibling(),i.nodeType===Node.TEXT_NODE){let n=o;for(;n&&n.nodeType===Node.TEXT_NODE;)i.textContent+=n.textContent,o=qn.nextSibling(),e.removeChild(n),n=o;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}let s={parentIndex:r,parentInfo:n};this._parseTemplateNode(i,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),qn.currentNode=i,qn.parentNode()&&r++}}}static _parseTemplateNestedTemplate(e,t,n){let o=this._parseTemplate(e,t);return(o.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),n.templateInfo=o,!0}static _parseTemplateNodeAttributes(e,t,n){let o=!1,i=Array.from(e.attributes);for(let r,s=i.length-1;r=i[s];s--)o=this._parseTemplateNodeAttribute(e,t,n,r.name,r.value)||o;return o}static _parseTemplateNodeAttribute(e,t,n,o,i){return"on-"===o.slice(0,3)?(e.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:i}),!0):"id"===o&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),n=t.nodeInfoList,o=t.content||e.content,i=document.importNode(o,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let r=i.nodeList=new Array(n.length);i.$={};for(let e,t=0,o=n.length;t<o&&(e=n[t]);t++){let n=r[t]=Vn(i,e);Wn(0,i.$,n,e),Un(0,n,e),$n(this,n,e)}return i=i}_addMethodEventListenerToNode(e,t,n,o){let i=function(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}(o=o||e,0,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Gn=0;const Xn={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Jn=/[A-Z]/;function Kn(e,t){let n=e[t];if(n){if(!e.hasOwnProperty(t)){n=e[t]=Object.create(e[t]);for(let e in n){let t=n[e],o=n[e]=Array(t.length);for(let e=0;e<t.length;e++)o[e]=t[e]}}}else n=e[t]={};return n}function Zn(e,t,n,o,i,r){if(t){let s=!1,a=Gn++;for(let l in n)Qn(e,t,a,l,n,o,i,r)&&(s=!0);return s}return!1}function Qn(e,t,n,o,i,r,s,a){let l=!1,c=t[s?mn(o):o];if(c)for(let t,d=0,h=c.length;d<h&&(t=c[d]);d++)t.info&&t.info.lastRun===n||s&&!eo(o,t.trigger)||(t.info&&(t.info.lastRun=n),t.fn(e,o,i,r,t.info,s,a),l=!0);return l}function eo(e,t){if(t){let n=t.name;return n==e||!(!t.structured||!fn(n,e))||!(!t.wildcard||!vn(n,e))}return!0}function to(e,t,n,o,i){let r="string"==typeof i.method?e[i.method]:i.method,s=i.property;r?r.call(e,e.__data[s],o[s]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function no(e,t,n){let o=mn(t);if(o!==t){return oo(e,kn(o)+"-changed",n[t],t),!0}return!1}function oo(e,t,n,o){let i={value:n,queueProperty:!0};o&&(i.path=o),un(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function io(e,t,n,o,i,r){let s=(r?mn(t):t)!=t?t:null,a=s?_n(e,s):e.__data[t];s&&void 0===a&&(a=n[t]),oo(e,i.eventName,a,s)}function ro(e,t,n,o,i){let r=e.__data[t];Be&&(r=Be(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function so(e,t,n,o,i){let r=mo(e,t,n,o,i),s=i.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,r,!0):e[s]=r}function ao(e,t,n,o,i,r,s){n.bindings=n.bindings||[];let a={kind:o,target:i,parts:r,literal:s,isCompound:1!==r.length};if(n.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||kn(i)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let o=a.parts[n];o.compoundIndex=n,lo(e,t,a,o,l)}}function lo(e,t,n,o,i){if(!o.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=o.dependencies,s={index:i,binding:n,part:o,evaluator:e};for(let n=0;n<r.length;n++){let o=r[n];"string"==typeof o&&((o=yo(o)).wildcard=!0),e._addTemplatePropertyEffect(t,o.rootProperty,{fn:co,info:s,trigger:o})}}}function co(e,t,n,o,i,r,s){let a=s[i.index],l=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let o=n[t];t=bn(c.source,l.target,t),a._setPendingPropertyOrPath(t,o,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,n,o,i){i=function(e,t,n,o){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[o.compoundIndex]=t,t=i.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,i,n,o),Be&&(i=Be(i,n.target,n.kind,t));if("attribute"==n.kind)e._valueToNodeAttribute(t,i,n.target);else{let o=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?t[Xn.READ_ONLY]&&t[Xn.READ_ONLY][o]||t._setPendingProperty(o,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,i)}}(e,a,l,c,i.evaluator._evaluateBinding(e,c,t,n,o,r))}}function ho(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),o=t.parts,i=new Array(o.length);for(let e=0;e<o.length;e++)i[e]=o[e].literal;let r=t.target;n[r]=i,t.literal&&"property"==t.kind&&(e[r]=t.literal)}}function uo(e,t,n){if(n.listenerEvent){let o=n.parts[0];e.addEventListener(n.listenerEvent,function(e){!function(e,t,n,o,i){let r,s=e.detail,a=s&&s.path;a?(o=bn(n,o,a),r=s&&s.value):r=e.currentTarget[n],r=i?!r:r,t[Xn.READ_ONLY]&&t[Xn.READ_ONLY][o]||!t._setPendingPropertyOrPath(o,r,!0,Boolean(a))||s&&s.queueProperty||t._invalidateProperties()}(e,t,n.target,o.source,o.negate)})}}function po(e,t,n,o,i,r){r=t.static||r&&("object"!=typeof r||r[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let i,r=0;r<t.args.length&&(i=t.args[r]);r++)i.literal||e._addPropertyEffect(i.rootProperty,n,{fn:o,info:s,trigger:i});r&&e._addPropertyEffect(t.methodName,n,{fn:o,info:s})}function mo(e,t,n,o,i){let r=e._methodHost||e,s=r[i.methodName];if(s){let o=e._marshalArgs(i.args,t,n);return s.apply(r,o)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const fo=[],vo=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function bo(e){let t="";for(let n=0;n<e.length;n++){t+=e[n].literal||""}return t}function go(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:fo};if(t[2].trim()){return function(e,t){return t.args=e.map(function(e){let n=yo(e);return n.literal||(t.static=!1),n},this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function yo(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},o=t[0];switch("-"===o&&(o=t[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=mn(t),n.structured=pn(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n}function _o(e,t,n){let o=_n(e,n);return void 0===o&&(o=t[n]),o}function xo(e,t,n,o){e.notifyPath(n+".splices",{indexSplices:o}),e.notifyPath(n+".length",t.length)}function wo(e,t,n,o,i,r){xo(e,t,n,[{index:o,addedCount:i,removed:r,object:t,type:"splice"}])}const Co=hn(e=>{const t=Yn(Fn(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Xn}_initializeProperties(){super._initializeProperties(),So.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Xn.READ_ONLY];for(let n in e)t&&t[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Xn.READ_ONLY);let o=Kn(this,t)[e];o||(o=this[t][e]=[]),o.push(n)}_removePropertyEffect(e,t,n){let o=Kn(this,t)[e],i=o.indexOf(n);i>=0&&o.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return Boolean(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Xn.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Xn.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Xn.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Xn.COMPUTE)}_setPendingPropertyOrPath(e,t,n,o){if(o||mn(Array.isArray(e)?e[0]:e)!==e){if(!o){let n=_n(this,e);if(!(e=xn(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return function(e,t,n){let o=e.__dataLinkedPaths;if(o){let i;for(let r in o){let s=o[r];vn(r,t)?(i=bn(r,s,t),e._setPendingPropertyOrPath(i,n,!0,!0)):vn(s,t)&&(i=bn(s,r,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,n){n===e[t]&&"object"!=typeof n||(e[t]=n)}_setPendingProperty(e,t,n){let o=this.__dataHasPaths&&pn(e),i=o?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,i[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),o?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(o||this[Xn.NOTIFY]&&this[Xn.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)!t&&this[Xn.READ_ONLY]&&this[Xn.READ_ONLY][n]||this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let o=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,n,o){let i=e[Xn.COMPUTE];if(i){let r=t;for(;Zn(e,i,r,n,o);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}(this,t,n,o);let i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,n,o),this._flushClients(),Zn(this,this[Xn.REFLECT],t,n,o),Zn(this,this[Xn.OBSERVE],t,n,o),i&&function(e,t,n,o,i){let r,s,a=e[Xn.NOTIFY],l=Gn++;for(let s in t)t[s]&&(a&&Qn(e,a,l,s,n,o,i)?r=!0:i&&no(e,s,n)&&(r=!0));r&&(s=e.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,i,t,n,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Xn.PROPAGATE]&&Zn(this,this[Xn.PROPAGATE],e,t,n);let o=this.__templateInfo;for(;o;)Zn(this,o.propertyEffects,e,t,n,o.nodeList),o=o.nextTemplateInfo}linkPaths(e,t){e=gn(e),t=gn(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=gn(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:""};xo(this,_n(this,e,n),n.path,t)}get(e,t){return _n(t||this,e)}set(e,t,n){n?xn(n,e,t):this[Xn.READ_ONLY]&&this[Xn.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:""},o=_n(this,e,n),i=o.length,r=o.push(...t);return t.length&&wo(this,o,n.path,i,t.length,[]),r}pop(e){let t={path:""},n=_n(this,e,t),o=Boolean(n.length),i=n.pop();return o&&wo(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...o){let i,r={path:""},s=_n(this,e,r);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),i=2===arguments.length?s.splice(t):s.splice(t,n,...o),(o.length||i.length)&&wo(this,s,r.path,t,o.length,i),i}shift(e){let t={path:""},n=_n(this,e,t),o=Boolean(n.length),i=n.shift();return o&&wo(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:""},o=_n(this,e,n),i=o.unshift(...t);return t.length&&wo(this,o,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(1==arguments.length){let o={path:""};t=_n(this,e,o),n=o.path}else n=Array.isArray(e)?gn(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var n;this._addPropertyEffect(e,Xn.READ_ONLY),t&&(this["_set"+(n=e,n[0].toUpperCase()+n.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let o={property:e,method:t,dynamicFn:Boolean(n)};this._addPropertyEffect(e,Xn.OBSERVE,{fn:to,info:o,trigger:{name:e}}),n&&this._addPropertyEffect(t,Xn.OBSERVE,{fn:to,info:o,trigger:{name:t}})}_createMethodObserver(e,t){let n=go(e);if(!n)throw new Error("Malformed observer expression '"+e+"'");po(this,n,Xn.OBSERVE,mo,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Xn.NOTIFY,{fn:io,info:{eventName:kn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Xn.REFLECT,{fn:ro,info:{attrName:t}})}_createComputedProperty(e,t,n){let o=go(t);if(!o)throw new Error("Malformed computed expression '"+t+"'");po(this,o,Xn.COMPUTE,so,e,n)}_marshalArgs(e,t,n){const o=this.__data,i=[];for(let r=0,s=e.length;r<s;r++){let{name:s,structured:a,wildcard:l,value:c,literal:d}=e[r];if(!d)if(l){const e=vn(s,t),i=_o(o,n,e?t:s);c={path:e?t:s,value:i,base:e?_n(o,s):i}}else c=a?_o(o,n,s):o[s];i[r]=c}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),o=this.__templateInfo==n;if(!o)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t&&((n=Object.create(n)).wasPreBound=o,!o&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=n,n.previousTemplateInfo=e,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(e,t,n){(e.hostProps=e.hostProps||{})[t]=!0;let o=e.propertyEffects=e.propertyEffects||{};(o[t]=o[t]||[]).push(n)}_stampTemplate(e){So.beginHosting(this);let t=super._stampTemplate(e);So.endHosting(this);let n=this._bindTemplate(e,!0);if(n.nodeList=t.nodeList,!n.wasPreBound){let e=n.childNodes=[];for(let n=t.firstChild;n;n=n.nextSibling)e.push(n)}return t.templateInfo=n,function(e,t){let{nodeList:n,nodeInfoList:o}=t;if(o.length)for(let t=0;t<o.length;t++){let i=o[t],r=n[t],s=i.bindings;if(s)for(let t=0;t<s.length;t++){let n=s[t];ho(r,n),uo(r,e,n)}r.__dataHost=e}}(this,n),this.__dataReady&&Zn(this,n.propertyEffects,this.__data,null,!1,n.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let n=t.childNodes;for(let e=0;e<n.length;e++){let t=n[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,t,n){let o=super._parseTemplateNode(e,t,n);if(e.nodeType===Node.TEXT_NODE){let i=this._parseBindings(e.textContent,t);i&&(e.textContent=bo(i)||" ",ao(this,t,n,"text","textContent",i),o=!0)}return o}static _parseTemplateNodeAttribute(e,t,n,o,i){let r=this._parseBindings(i,t);if(r){let i=o,s="property";Jn.test(o)?s="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),s="attribute");let a=bo(r);return a&&"attribute"==s&&("class"==o&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(o)),e.setAttribute(o,a)),"input"===e.localName&&"value"===i&&e.setAttribute(i,""),e.removeAttribute(i),"property"===s&&(o=En(o)),ao(this,t,n,s,o,r,a),!0}return super._parseTemplateNodeAttribute(e,t,n,o,i)}static _parseTemplateNestedTemplate(e,t,n){let o=super._parseTemplateNestedTemplate(e,t,n),i=n.templateInfo.hostProps;for(let e in i)ao(this,t,n,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}]);return o}static _parseBindings(e,t){let n,o=[],i=0;for(;null!==(n=vo.exec(e));){n.index>i&&o.push({literal:e.slice(i,n.index)});let r=n[1][0],s=Boolean(n[2]),a=n[3].trim(),l=!1,c="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let h=go(a),u=[];if(h){let{args:e,methodName:n}=h;for(let t=0;t<e.length;t++){let n=e[t];n.literal||u.push(n)}let o=t.dynamicFns;(o&&o[n]||h.static)&&(u.push(n),h.dynamicFn=!0)}else u.push(a);o.push({source:a,mode:r,negate:s,customEvent:l,signature:h,dependencies:u,event:c}),i=vo.lastIndex}if(i&&i<e.length){let t=e.substring(i);t&&o.push({literal:t})}return o.length?o:null}static _evaluateBinding(e,t,n,o,i,r){let s;return s=t.signature?mo(e,n,o,0,t.signature):n!=t.source?_n(e,t.source):r&&pn(n)?_n(e,n):e.__data[n],t.negate&&(s=!s),s}}});const So=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Eo=[];const ko=hn(e=>{const t=Rn(e);function n(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function o(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const n=e.properties;n&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let n in e){const o=e[n];t[n]="function"==typeof o?{type:o}:o}return t}(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){e=this.prototype,Eo.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.attributeNameForProperty(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=o(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=n(this);this.__properties=Object.assign({},e&&e._properties,o(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),Ao="3.2.0",Oo=window.ShadyCSS&&window.ShadyCSS.cssBuild,Po=hn(e=>{const t=ko(Co(e));function n(e,t,n,o){if(!Oo){const i=t.content.querySelectorAll("style"),r=rt(t),s=function(e){let t=tt(e);return t?st(t):[]}(n),a=t.content.firstElementChild;for(let n=0;n<s.length;n++){let i=s[n];i.textContent=e._processStyleText(i.textContent,o),t.content.insertBefore(i,a)}let l=0;for(let t=0;t<r.length;t++){let n=r[t],s=i[l];s!==n?(n=n.cloneNode(!0),s.parentNode.insertBefore(n,s)):l++,n.textContent=e._processStyleText(n.textContent,o)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n)}return class extends t{static get polymerElementVersion(){return Ao}static _finalizeClass(){super._finalizeClass();const e=((t=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",t))||(t.__ownObservers=t.hasOwnProperty(JSCompiler_renameProperty("observers",t))?t.observers:null),t.__ownObservers);var t;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):$e||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let r in e)t=this.prototype,n=r,o=e[r],i=e,o.computed&&(o.readOnly=!0),o.computed&&(t._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):t._createComputedProperty(n,o.computed,i)),o.readOnly&&!t._hasReadOnlyEffect(n)?t._createReadOnlyProperty(n,!o.computed):!1===o.readOnly&&t._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),o.reflectToAttribute&&!t._hasReflectEffect(n)?t._createReflectedProperty(n):!1===o.reflectToAttribute&&t._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),o.notify&&!t._hasNotifyEffect(n)?t._createNotifyingProperty(n):!1===o.notify&&t._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),o.observer&&t._createPropertyObserver(n,o.observer,i[o.observer]),t._addPropertyToAttributeMap(n);var t,n,o,i}static createObservers(e,t){const n=this.prototype;for(let o=0;o<e.length;o++)n._createMethodObserver(e[o],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;if(e&&(!Ve||We)&&(t=Ke.import(e,"template"),Ve&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=De(e.url);else{const e=Ke.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=qe,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let o=t[n];"value"in o&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=o)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let n=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return je(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const o=this.importPath;n(this,t,e,o?Re(o):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=un(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),Ue&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Re(this.importPath)),Re(e,t)}static _parseTemplateContent(e,t,n){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,n)}static _addTemplatePropertyEffect(e,t,n){return!$e||t in this._properties||console.warn(`Property '${t}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(e,t,n)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class To{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,zo.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),zo.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,n){return e instanceof To?e._cancelAsync():e=new To,e.setConfig(t,n),e}}let zo=new Set;const Lo=function(e){zo.add(e)},No=function(){const e=Boolean(zo.size);return zo.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Mo="string"==typeof document.head.style.touchAction,Io="__polymerGestures",Ro="__polymerGesturesHandled",jo="__polymerGesturesTouchAction",Do=25,Fo=5,qo=2500,Bo=["mousedown","mousemove","mouseup","click"],Ho=[0,1,4,2],Vo=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Wo(e){return Bo.indexOf(e)>-1}let $o=!1;function Uo(e){if(!Wo(e)&&"touchend"!==e)return Mo&&$o&&He?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){$o=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Yo=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Go=[],Xo={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Jo={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ko(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let n=e.getRootNode();if(e.id){let o=n.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<o.length;e++)t.push(o[e])}}return t}let Zo=function(e){let t=e.sourceCapabilities;var n;if((!t||t.firesTouchEvents)&&(e[Ro]={skip:!0},"click"===e.type)){let t=!1,o=ii(e);for(let e=0;e<o.length;e++){if(o[e].nodeType===Node.ELEMENT_NODE)if("label"===o[e].localName)Go.push(o[e]);else if(n=o[e],Xo[n.localName]){let n=Ko(o[e]);for(let e=0;e<n.length;e++)t=t||Go.indexOf(n[e])>-1}if(o[e]===ti.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Qo(e){let t=Yo?["click"]:Bo;for(let n,o=0;o<t.length;o++)n=t[o],e?(Go.length=0,document.addEventListener(n,Zo,!0)):document.removeEventListener(n,Zo,!0)}function ei(e){let t=e.type;if(!Wo(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Vo&&(t=Ho[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let ti={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ni(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function oi(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",function(e){ti.mouse.mouseIgnoreJob||Qo(!0),ti.mouse.target=ii(e)[0],ti.mouse.mouseIgnoreJob=To.debounce(ti.mouse.mouseIgnoreJob,Ln.after(qo),function(){Qo(),ti.mouse.target=null,ti.mouse.mouseIgnoreJob=null})},!!$o&&{passive:!0});const ii=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],ri={},si=[];function ai(e){const t=ii(e);return t.length>0?t[0]:e.target}function li(e){let t,n=e.type,o=e.currentTarget[Io];if(!o)return;let i=o[n];if(i){if(!e[Ro]&&(e[Ro]={},"touch"===n.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(ti.touch.id=t.identifier),ti.touch.id!==t.identifier)return;Mo||"touchstart"!==n&&"touchmove"!==n||function(e){let t=e.changedTouches[0],n=e.type;if("touchstart"===n)ti.touch.x=t.clientX,ti.touch.y=t.clientY,ti.touch.scrollDecided=!1;else if("touchmove"===n){if(ti.touch.scrollDecided)return;ti.touch.scrollDecided=!0;let n=function(e){let t="auto",n=ii(e);for(let e,o=0;o<n.length;o++)if((e=n[o])[jo]){t=e[jo];break}return t}(e),o=!1,i=Math.abs(ti.touch.x-t.clientX),r=Math.abs(ti.touch.y-t.clientY);e.cancelable&&("none"===n?o=!0:"pan-x"===n?o=r>i:"pan-y"===n&&(o=i>r)),o?e.preventDefault():mi("track")}}(e)}if(!(t=e[Ro]).skip){for(let n,o=0;o<si.length;o++)i[(n=si[o]).name]&&!t[n.name]&&n.flow&&n.flow.start.indexOf(e.type)>-1&&n.reset&&n.reset();for(let o,r=0;r<si.length;r++)i[(o=si[r]).name]&&!t[o.name]&&(t[o.name]=!0,o[n](e))}}}function ci(e,t,n){return!!ri[t]&&(function(e,t,n){let o=ri[t],i=o.deps,r=o.name,s=e[Io];s||(e[Io]=s={});for(let t,n,o=0;o<i.length;o++)t=i[o],Yo&&Wo(t)&&"click"!==t||((n=s[t])||(s[t]=n={_count:0}),0===n._count&&e.addEventListener(t,li,Uo(t)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);e.addEventListener(t,n),o.touchAction&&ui(e,o.touchAction)}(e,t,n),!0)}function di(e,t,n){return!!ri[t]&&(function(e,t,n){let o=ri[t],i=o.deps,r=o.name,s=e[Io];if(s)for(let t,n,o=0;o<i.length;o++)t=i[o],(n=s[t])&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(t,li,Uo(t)));e.removeEventListener(t,n)}(e,t,n),!0)}function hi(e){si.push(e);for(let t=0;t<e.emits.length;t++)ri[e.emits[t]]=e}function ui(e,t){Mo&&e instanceof HTMLElement&&Mn.run(()=>{e.style.touchAction=t}),e[jo]=t}function pi(e,t,n){let o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,un(e).dispatchEvent(o),o.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function mi(e){let t=function(e){for(let t,n=0;n<si.length;n++){t=si[n];for(let n,o=0;o<t.emits.length;o++)if((n=t.emits[o])===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function fi(e,t,n,o){t&&pi(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(e){return mi(e)}})}function vi(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let o=Math.abs(e.x-t),i=Math.abs(e.y-n);return o>=Fo||i>=Fo}function bi(e,t,n){if(!t)return;let o,i=e.moves[e.moves.length-2],r=e.moves[e.moves.length-1],s=r.x-e.x,a=r.y-e.y,l=0;i&&(o=r.x-i.x,l=r.y-i.y),pi(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:s,dy:a,ddx:o,ddy:l,sourceEvent:n,hover:function(){return function(e,t){let n=document.elementFromPoint(e,t),o=n;for(;o&&o.shadowRoot&&!window.ShadyDOM&&o!==(o=o.shadowRoot.elementFromPoint(e,t));)o&&(n=o);return n}(n.clientX,n.clientY)}})}function gi(e,t,n){let o=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),r=ai(n||t);!r||Jo[r.localName]&&r.hasAttribute("disabled")||(isNaN(o)||isNaN(i)||o<=Do&&i<=Do||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=ai(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),o=e.pageX,i=e.pageY;return!(o>=n.left&&o<=n.right&&i>=n.top&&i<=n.bottom)}return!1}(t))&&(e.prevent||pi(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}hi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){oi(this.info)},mousedown:function(e){if(!ei(e))return;let t=ai(e),n=this;ni(this.info,function(e){ei(e)||(fi("up",t,e),oi(n.info))},function(e){ei(e)&&fi("up",t,e),oi(n.info)}),fi("down",t,e)},touchstart:function(e){fi("down",ai(e),e.changedTouches[0],e)},touchend:function(e){fi("up",ai(e),e.changedTouches[0],e)}}),hi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,oi(this.info)},mousedown:function(e){if(!ei(e))return;let t=ai(e),n=this,o=function(e){let o=e.clientX,i=e.clientY;vi(n.info,o,i)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&mi("tap"),n.info.addMove({x:o,y:i}),ei(e)||(n.info.state="end",oi(n.info)),t&&bi(n.info,t,e),n.info.started=!0)};ni(this.info,o,function(e){n.info.started&&o(e),oi(n.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=ai(e),n=e.changedTouches[0],o=n.clientX,i=n.clientY;vi(this.info,o,i)&&("start"===this.info.state&&mi("tap"),this.info.addMove({x:o,y:i}),bi(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=ai(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),bi(this.info,t,n))}}),hi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){ei(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){ei(e)&&gi(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){gi(this.info,e.changedTouches[0],e)}});const yi=hn(e=>{return class extends e{_addEventListenerToNode(e,t,n){ci(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){di(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}}),_i=/:host\(:dir\((ltr|rtl)\)\)/g,xi=':host([dir="$1"])',wi=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ci=':host([dir="$2"]) $1',Si=/:dir\((?:ltr|rtl)\)/,Ei=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),ki=[];let Ai=null,Oi="";function Pi(){Oi=document.documentElement.getAttribute("dir")}function Ti(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Oi)}}function zi(){Pi(),Oi=document.documentElement.getAttribute("dir");for(let e=0;e<ki.length;e++)Ti(ki[e])}const Li=hn(e=>{Ei||Ai||(Pi(),(Ai=new MutationObserver(zi)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Fn(e);class n extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!Ei&&Si.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=(t=t.replace(_i,xi)).replace(wi,Ci)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ai&&Ai.takeRecords().length&&zi(),ki.push(this),Ti(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=ki.indexOf(this);e>-1&&ki.splice(e,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ni=!1,Mi=[],Ii=[];function Ri(){Ni=!0,requestAnimationFrame(function(){Ni=!1,ji(Mi),setTimeout(function(){!function(e){for(let t=0,n=e.length;t<n;t++)Di(e.shift())}(Ii)})})}function ji(e){for(;e.length;)Di(e.shift())}function Di(e){const t=e[0],n=e[1],o=e[2];try{n.apply(t,o)}catch(e){setTimeout(()=>{throw e})}}function Fi(e,t,n){Ni||Ri(),Mi.push([e,t,n])}function qi(e,t,n){Ni||Ri(),Ii.push([e,t,n])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bi(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Hi(e,t,n){return{index:e,removed:t,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?Bi():window.addEventListener("DOMContentLoaded",Bi);const Vi=0,Wi=1,$i=2,Ui=3;function Yi(e,t,n,o,i,r){let s,a=0,l=0,c=Math.min(n-t,r-i);if(0==t&&0==i&&(a=function(e,t,n){for(let o=0;o<n;o++)if(!Xi(e[o],t[o]))return o;return n}(e,o,c)),n==e.length&&r==o.length&&(l=function(e,t,n){let o=e.length,i=t.length,r=0;for(;r<n&&Xi(e[--o],t[--i]);)r++;return r}(e,o,c-a)),i+=a,r-=l,(n-=l)-(t+=a)==0&&r-i==0)return[];if(t==n){for(s=Hi(t,[],0);i<r;)s.removed.push(o[i++]);return[s]}if(i==r)return[Hi(t,[],n-t)];let d=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n],i=[];for(;t>0||n>0;){if(0==t){i.push($i),n--;continue}if(0==n){i.push(Ui),t--;continue}let r,s=e[t-1][n-1],a=e[t-1][n],l=e[t][n-1];(r=a<l?a<s?a:s:l<s?l:s)==s?(s==o?i.push(Vi):(i.push(Wi),o=s),t--,n--):r==a?(i.push(Ui),t--,o=a):(i.push($i),n--,o=l)}return i.reverse(),i}(function(e,t,n,o,i,r){let s=r-i+1,a=n-t+1,l=new Array(s);for(let e=0;e<s;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let n=1;n<s;n++)for(let r=1;r<a;r++)if(Xi(e[t+r-1],o[i+n-1]))l[n][r]=l[n-1][r-1];else{let e=l[n-1][r]+1,t=l[n][r-1]+1;l[n][r]=e<t?e:t}return l}(e,t,n,o,i,r));s=void 0;let h=[],u=t,p=i;for(let e=0;e<d.length;e++)switch(d[e]){case Vi:s&&(h.push(s),s=void 0),u++,p++;break;case Wi:s||(s=Hi(u,[],0)),s.addedCount++,u++,s.removed.push(o[p]),p++;break;case $i:s||(s=Hi(u,[],0)),s.addedCount++,u++;break;case Ui:s||(s=Hi(u,[],0)),s.removed.push(o[p]),p++}return s&&h.push(s),h}function Gi(e,t){return Yi(e,0,e.length,t,0,t.length)}function Xi(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ji(e){return"slot"===e.localName}let Ki=class{static getFlattenedNodes(e){const t=un(e);return Ji(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Ji(e)?un(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ji(this._target)?this._listenSlots([this._target]):un(this._target).children&&(this._listenSlots(un(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ji(this._target)?this._unlistenSlots([this._target]):un(this._target).children&&(this._unlistenSlots(un(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Mn.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=Gi(t,this._effectiveNodes);for(let t,o=0;o<n.length&&(t=n[o]);o++)for(let n,o=0;o<t.removed.length&&(n=t.removed[o]);o++)e.removedNodes.push(n);for(let o,i=0;i<n.length&&(o=n[i]);i++)for(let n=o.index;n<o.index+o.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let o=!1;return(e.addedNodes.length||e.removedNodes.length)&&(o=!0,this.callback.call(this._target,e)),o}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Ji(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];Ji(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zi=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=No()}while(e||t)},Qi=Element.prototype,er=Qi.matches||Qi.matchesSelector||Qi.mozMatchesSelector||Qi.msMatchesSelector||Qi.oMatchesSelector||Qi.webkitMatchesSelector,tr=function(e,t){return er.call(e,t)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class nr{constructor(e){this.node=e}observeNodes(e){return new Ki(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(un(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=un(t).parentNode||un(t).host;return t===this.node}getOwnerRoot(){return un(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?un(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=un(this.node).assignedSlot;for(;t;)e.push(t),t=un(t).assignedSlot;return e}importNode(e,t){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return un(n).importNode(e,t)}getEffectiveChildNodes(){return Ki.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let o,i=0,r=t.length;i<r&&(o=t[i]);i++)o.nodeType===Node.ELEMENT_NODE&&tr(o,e)&&n.push(o);return n}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function or(e,t){for(let n=0;n<t.length;n++){let o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},configurable:!0})}}class ir{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}nr.prototype.cloneNode,nr.prototype.appendChild,nr.prototype.insertBefore,nr.prototype.removeChild,nr.prototype.replaceChild,nr.prototype.setAttribute,nr.prototype.removeAttribute,nr.prototype.querySelector,nr.prototype.querySelectorAll,nr.prototype.parentNode,nr.prototype.firstChild,nr.prototype.lastChild,nr.prototype.nextSibling,nr.prototype.previousSibling,nr.prototype.firstElementChild,nr.prototype.lastElementChild,nr.prototype.nextElementSibling,nr.prototype.previousElementSibling,nr.prototype.childNodes,nr.prototype.children,nr.prototype.classList,nr.prototype.textContent,nr.prototype.innerHTML;let rr=nr;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(nr.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=nr.prototype[t])}),or(e.prototype,["classList"]),rr=e,Object.defineProperties(ir.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let n=0;n<t.length;n++){let o=t[n];e[o]=function(){return this.node[o].apply(this.node,arguments)}}}(nr.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),or(nr.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let n=0;n<t.length;n++){let o=t[n];Object.defineProperty(e,o,{get:function(){return this.node[o]},set:function(e){this.node[o]=e},configurable:!0})}}(nr.prototype,["textContent","innerHTML"]);const sr=function(e){if((e=e||document)instanceof rr)return e;if(e instanceof ir)return e;let t=e.__domApi;return t||(t=e instanceof Event?new ir(e):new rr(e),e.__domApi=t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ar=window.ShadyCSS;const lr=hn(e=>{const t=Li(yi(Po(e))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class o extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,n,o){t!==n&&(super.attributeChangedCallback(e,t,n,o),this.attributeChanged(e,t,n))}attributeChanged(e,t,n){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!e||!t)return e||t;let n=Object.getOwnPropertyNames(t);for(let o,i=0;i<n.length&&(o=n[i]);i++){let n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(e,o,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n=n||{},t=null==t?{}:t;let o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});o.detail=t;let i=n.node||this;return un(i).dispatchEvent(o),o}listen(e,t,n){e=e||this;let o=this.__boundListeners||(this.__boundListeners=new WeakMap),i=o.get(e);i||(i={},o.set(e,i));let r=t+n;i[r]||(i[r]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e=e||this;let o=this.__boundListeners&&this.__boundListeners.get(e),i=t+n,r=o&&o[i];r&&(this._removeEventListenerFromNode(e,t,r),o[i]=null)}setScrollDirection(e,t){ui(t||this,n[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=un(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=sr(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return sr(this).getEffectiveChildNodes()}queryDistributedElements(e){return sr(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n,o=0;n=e[o];o++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?sr(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&un(this).contains(e)&&un(this).getRootNode()===un(e).getRootNode()}isLocalDescendant(e){return this.root===un(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return ar.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=To.debounce(this._debouncers[e],n>0?Ln.after(n):Mn,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Ln.run(e.bind(this),t):~Mn.run(e.bind(this))}cancelAsync(e){e<0?Mn.cancel(~e):Ln.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return tr(t||this,e)}toggleAttribute(e,t){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(t=!n.hasAttribute(e)),t?(un(n).setAttribute(e,""),!0):(un(n).removeAttribute(e),!1)}toggleClass(e,t,n){n=n||this,1==arguments.length&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,o){o=o||this,this.transform("translate3d("+e+","+t+","+n+")",o)}arrayDelete(e,t){let n;if(Array.isArray(e)){if((n=e.indexOf(t))>=0)return e.splice(n,1)}else{if((n=_n(this,e).indexOf(t))>=0)return this.splice(e,n,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return o.prototype.is="",o}),cr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},dr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},hr=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},dr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ur(e,t){return fr({},lr(t),e)}function pr(e,t,n,o){!function(e,t,n){const o=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let r=0;r<i.length;r++){let s=i[r];if(!(s in n))if(o)t[s]=e[s];else{let n=Object.getOwnPropertyDescriptor(e,s);n&&(n.configurable=!0,Object.defineProperty(t,s,n))}}}(t,e,o);for(let e in cr)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function mr(e,t){for(const n in t){const o=e[n],i=t[n];e[n]=!("value"in i)&&o&&"value"in o?Object.assign({value:o.value},i):i}}function fr(e,t,n){let o;const i={};class r extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(o)for(let e,t=0;t<o.length;t++)(e=o[t]).properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){const t={};if(o)for(let e=0;e<o.length;e++)mr(t,o[e].properties);return mr(t,e.properties),t}static get observers(){let t=[];if(o)for(let e,n=0;n<o.length;n++)(e=o[n]).observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=r.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),$e&&s(e);const t=Object.getPrototypeOf(this);let n=i.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=i.registered)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();const e=i.listeners;if(e)for(let t=0;t<e.length;t++){const n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){const e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let o=i.attributeChanged;if(o)for(let i=0;i<o.length;i++)o[i].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;o=function e(t,n,o){n=n||[];for(let i=t.length-1;i>=0;i--){let r=t[i];r?Array.isArray(r)?e(r,n):n.indexOf(r)<0&&(!o||o.indexOf(r)<0)&&n.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,e),r.prototype.behaviors=e?e.concat(n):o}const s=t=>{o&&function(e,t,n){for(let o=0;o<t.length;o++)pr(e,t[o],n,hr)}(t,o,i),pr(t,e,i,dr)};return $e||s(r.prototype),r.generatedFrom=e,r}const vr=function(e){let t;return t="function"==typeof e?e:vr.Class(e),customElements.define(t.is,t),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function br(e,t,n,o,i){let r;i&&(r="object"==typeof n&&null!==n)&&(o=e.__dataTemp[t]);let s=o!==n&&(o==o||n==n);return r&&s&&(e.__dataTemp[t]=n),s}vr.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(lr(HTMLElement)):lr(HTMLElement);return(n=fr(e,n,e.behaviors)).is=n.prototype.is=e.is,n};const gr=hn(e=>{return class extends e{_shouldPropertyChange(e,t,n){return br(this,e,t,n,!0)}}}),yr=hn(e=>{return class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return br(this,e,t,n,this.mutableData)}}});gr._mutablePropertyChange=br;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let _r=null;function xr(){return _r}xr.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:xr,writable:!0}});const wr=Co(xr),Cr=gr(wr);const Sr=Co(class{});class Er extends Sr{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(e,t,n)}}_showHideChildren(e){let t=this.children;for(let n=0;n<t.length;n++){let o=t[n];if(Boolean(e)!=Boolean(o.__hideTemplateChildren__))if(o.nodeType===Node.TEXT_NODE)e?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__;else if("slot"===o.localName)if(e)o.__polymerReplaced__=document.createComment("hidden-slot"),un(un(o).parentNode).replaceChild(o.__polymerReplaced__,o);else{const e=o.__polymerReplaced__;e&&un(un(e).parentNode).replaceChild(o,e)}else o.style&&(e?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__);o.__hideTemplateChildren__=e,o._showHideChildren&&o._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Er.prototype.__dataHost,Er.prototype.__templatizeOptions,Er.prototype._methodHost,Er.prototype.__templatizeOwner,Er.prototype.__hostProps;const kr=gr(Er);function Ar(e){let t=e.__dataHost;return t&&t._methodHost||t}function Or(e,t,n){let o=n.mutableData?kr:Er;Lr.mixin&&(o=Lr.mixin(o));let i=class extends o{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(e),function(e,t,n,o){let i=n.hostProps||{};for(let t in o.instanceProps){delete i[t];let n=o.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:zr(t,n)})}if(o.forwardHostProp&&t.__dataHost)for(let t in i)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,n){e.__dataHost._setPendingPropertyOrPath("_host_"+t,n[t],!0,!0)}})}(i,e,t,n),i}function Pr(e,t,n){let o=n.forwardHostProp;if(o){let i=t.templatizeTemplateClass;if(!i){let e=n.mutableData?Cr:wr;i=t.templatizeTemplateClass=class extends e{};let r=t.hostProps;for(let e in r)i.prototype._addPropertyEffect("_host_"+e,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Tr(e,o)}),i.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){_r=e,Object.setPrototypeOf(e,t.prototype),new t,_r=null}(e,i),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function Tr(e,t){return function(e,n,o){t.call(e.__templatizeOwner,n.substring("_host_".length),o[n])}}function zr(e,t){return function(e,n,o){t.call(e.__templatizeOwner,e,n,o[n])}}function Lr(e,t,n){if(Ve&&!Ar(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let o=(t?t.constructor:Er)._parseTemplate(e),i=o.templatizeInstanceClass;i||(i=Or(e,o,n),o.templatizeInstanceClass=i),Pr(e,o,n);let r=class extends i{};return r.prototype._methodHost=Ar(e),r.prototype.__dataHost=e,r.prototype.__templatizeOwner=t,r.prototype.__hostProps=o.hostProps,r=r}function Nr(e,t){let n;for(;t;)if(n=t.__templatizeInstance){if(n.__dataHost==e)return n;t=n.__dataHost}else t=un(t).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mr=yi(yr(Co(HTMLElement)));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/customElements.define("dom-bind",class extends Mr{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Ve)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){un(un(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(!(e=e||this.querySelector("template"))){let t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ir{constructor(e){this.value=e.toString()}toString(){return this.value}}function Rr(e){if(e instanceof Ir)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const jr=function(e,...t){const n=document.createElement("template");return n.innerHTML=t.reduce((t,n,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Ir)return Rr(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(n)+e[o+1],e[0]),n},Dr=Po(HTMLElement),Fr=yr(Dr);class qr extends Fr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=un(un(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=Lr(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let n=this.__instances;for(let o,i=0;i<n.length&&(o=n[i]);i++)o.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if((o=this.as)===(i=t)||fn(o,i)||vn(o,i)){let o=e[this.itemsIndexAs];t==this.as&&(this.items[o]=n);let i=bn(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,t);this.notifyPath(i,n)}var o,i}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)0===e.indexOf(t[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=To.debounce(this.__renderDebouncer,t>0?Ln.after(t):Mn,e.bind(this)),Lo(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Zi()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;this.__filterFn&&(t=t.filter((t,n,o)=>this.__filterFn(e[t],n,o))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n]));const n=this.__itemsIdxToInstIdx={};let o=0;const i=Math.min(t.length,this.__limit);for(;o<i;o++){let i=this.__instances[o],r=t[o],s=e[r];n[r]=o,i?(i._setPendingProperty(this.as,s),i._setPendingProperty(this.indexAs,o),i._setPendingProperty(this.itemsIndexAs,r),i._flushProperties()):this.__insertInstance(s,o,r)}for(let e=this.__instances.length-1;e>=o;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const n=un(t.root);for(let e=0;e<t.children.length;e++){let o=t.children[e];n.appendChild(o)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,n){let o={};return o[this.as]=e,o[this.indexAs]=t,o[this.itemsIndexAs]=n,new this.__ctor(o)}__insertInstance(e,t,n){let o=this.__pool.pop();o?(o._setPendingProperty(this.as,e),o._setPendingProperty(this.indexAs,t),o._setPendingProperty(this.itemsIndexAs,n),o._flushProperties()):o=this.__stampInstance(e,t,n);let i=this.__instances[t+1],r=i?i.children[0]:this;return un(un(this).parentNode).insertBefore(o.root,r),this.__instances[t]=o,o}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),o=n.indexOf("."),i=o<0?n:n.substring(0,o);if(i==parseInt(i,10)){let e=o<0?"":n.substring(o+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[i],s=this.__instances[r];if(s){let n=this.as+(e?"."+e:"");s._setPendingPropertyOrPath(n,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Nr(this.template,e)}}customElements.define(qr.is,qr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Br extends Dr{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=To.debounce(this.__renderDebouncer,Mn,()=>this.__render()),Lo(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=un(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||un(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Zi()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=un(this).parentNode;if(e){if(!this.__ctor){let e=un(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!un(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=Lr(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[mn(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(un(this).previousSibling!==t[t.length-1])for(let n,o=0;o<t.length&&(n=t[o]);o++)un(e).insertBefore(n,this)}}else this.__instance=new this.__ctor,un(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=un(e[0]).parentNode;if(t){t=un(t);for(let n,o=0;o<e.length&&(n=e[o]);o++)t.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(Br.is,Br);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Hr,Vr=hn(e=>{let t=Po(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty("items",this)){let n=t.base||[],o=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),o){let e=Gi(n,o);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let o=e[n];t.forEach((e,n)=>{e<o.index||(e>=o.index+o.removed.length?t.set(n,e+o.addedCount-o.removed.length):t.set(n,-1))});for(let e=0;e<o.addedCount;e++){let n=o.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,o)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,t.delete(o)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,o)=>{t==e++&&this.deselect(o)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let n;this.__selectedMap.delete(e),this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(Dr);class Wr extends Vr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Wr.is,Wr),Hr=gr._mutablePropertyChange;Boolean;const $r=lr(HTMLElement).prototype,Ur=jr`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Ur.setAttribute("style","display: none;"),document.head.appendChild(Ur.content);var Yr=document.createElement("style");Yr.textContent="[hidden] { display: none !important; }",document.head.appendChild(Yr);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class Gr{constructor(e){Gr[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return Gr.types[e]&&Gr.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=Gr.types[t]=Gr.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=Gr.types[this.type];return e?Object.keys(e).map(function(e){return Xr[this.type][e]},this):[]}}byKey(e){return this.key=e,this.value}}Gr[" "]=function(){},Gr.types={};var Xr=Gr.types;vr({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var o=new Gr({type:e,key:t});return void 0!==n&&n!==o.value?o.value=n:this.value!==o.value&&(this.value=o.value),o},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new Gr({type:this.type,key:e}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
vr({_template:jr`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:$r.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&sr(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,sr(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
vr({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new Gr({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var n=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(n){var o=sr(e.root||e);return o.insertBefore(n,o.childNodes[0]),e._svgIcon=n}return null},removeIcon:function(e){e._svgIcon&&(sr(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return sr(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,n){if(e){var o=e.cloneNode(!0),i=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=o.getAttribute("viewBox")||"0 0 "+t+" "+t,s="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&o.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),i.setAttribute("viewBox",r),i.setAttribute("preserveAspectRatio","xMidYMid meet"),i.setAttribute("focusable","false"),i.style.cssText=s,i.appendChild(o).removeAttribute("id"),i}return null}});const Jr=document.createElement("template");Jr.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(Jr.content);var Kr=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}html,:host{--lumo-primary-color: hsl(8, 100%, 39%);--lumo-primary-color-10pct: hsla(8, 100%, 39%, 0.1);--lumo-primary-color-50pct: hsla(8, 100%, 39%, 0.5);--lumo-contrast-90pct: hsla(214, 40%, 16%, 0.94);--lumo-white: #FFF;--lumo-black: #000}a{color:var(--lumo-contrast-90pct)}a:hover{color:var(--lumo-primary-color)}vaadin-button[theme~=cxl-transparent] a{color:var(--lumo-base-color)}vaadin-button[theme~=cxl-button]:not([theme~=contrast]):not([theme~=cxl-transparent]) a{color:var(--lumo-base-color)}vaadin-button[theme~=contrast] a{color:var(--lumo-base-color)}@media(min-width: 45em){vaadin-button[theme~=cxl-transparent] a{color:var(--lumo-primary-color)}vaadin-button[theme~=contrast] a{color:var(--lumo-contrast-90pct)}}vaadin-context-menu[theme~=cxl-nav-dropdown] a{color:var(--lumo-base-color)}@media(min-width: 45em){vaadin-context-menu[theme~=cxl-nav-dropdown] a{color:var(--lumo-contrast-90pct)}vaadin-context-menu[theme~=cxl-nav-dropdown] a:hover{color:var(--lumo-primary-color)}}`;const Zr=document.createElement("template");Zr.innerHTML=`\n<custom-style>\n  <style include="lumo-color">${Kr}</style>\n</custom-style>`,document.head.appendChild(Zr.content);var Qr=se`html,:host{--lumo-font-family: "Roboto", arial, sans-serif;--lumo-font-secondary: "Libre Baskerville", georgia, serif;--lumo-icons: "lumo-icons"}p{font-family:var(--lumo-font-secondary)}`;const es=document.createElement("template");es.innerHTML=`\n<custom-style>\n  <style include="lumo-typography">${Qr}</style>\n</custom-style>`,document.head.appendChild(es.content);const ts=document.createElement("template");ts.innerHTML='\n<custom-style>\n  <style>\n    iron-icon.size-s {\n      width: var(--lumo-icon-size-s);\n      height: var(--lumo-icon-size-s);\n    }\n    \n    iron-icon.size-m {\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n    \n    iron-icon.size-l {\n      width: var(--lumo-icon-size-l);\n      height: var(--lumo-icon-size-l);\n    }\n\n    iron-icon.size-xl {\n      width: 50px; // var(--lumo-space-l) doesn\'t work\n      height: 50px;\n    }\n  </style>\n</custom-style>\n\n<iron-iconset-svg size="1000" id="asd" name="cxl">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <defs>\n    <g id="nav-trainings-active" width="32" height="32" viewBox="0 2 28 33" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C18.3238 8 22.7804 10.4778 25.1916 14.5C27.6028 18.5222 27.6028 23.4778 25.1916 27.5C22.7804 31.5222 18.3238 34 13.5 34C8.67621 34 4.21964 31.5222 1.80842 27.5C-0.602805 23.4778 -0.602805 18.5222 1.80842 14.5C4.21964 10.4778 8.67621 8 13.5 8V10.6C9.64151 10.6 6.07598 12.5825 4.14673 15.8C2.21749 19.0175 2.21749 22.9825 4.14673 26.2C6.07598 29.4175 9.64151 31.4 13.5 31.4C17.3585 31.4 20.924 29.4175 22.8533 26.2C24.7825 22.9825 24.7825 19.0175 22.8533 15.8C20.924 12.5825 17.3585 10.6 13.5 10.6V8Z" fill="#373737" fill-opacity="0.01"/>\n      <path opacity="0.376786" fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6C18.3238 6 22.7804 8.5731 25.1916 12.75C27.6028 16.9269 27.6028 22.0731 25.1916 26.25C22.7804 30.4269 18.3238 33 13.5 33C8.67621 33 4.21964 30.4269 1.80842 26.25C-0.602805 22.0731 -0.602805 16.9269 1.80842 12.75C4.21964 8.5731 8.67621 6 13.5 6V8.7C9.64151 8.7 6.07598 10.7588 4.14673 14.1C2.21749 17.4412 2.21749 21.5588 4.14673 24.9C6.07598 28.2412 9.64151 30.3 13.5 30.3C17.3585 30.3 20.924 28.2412 22.8533 24.9C23.665 23.4942 24.1352 21.9509 24.2639 20.3859C24.441 18.2313 23.9708 16.0354 22.8533 14.1C20.924 10.7588 17.3585 8.7 13.5 8.7V6Z" fill="white"/>\n      <path d="M21.2035 30.7858L21.8406 31.528L22.5967 30.9074C26.6507 27.5799 28.639 22.4201 27.778 17.3638C26.9167 12.3057 23.3418 8.14928 18.4193 6.45168C16.8123 5.89743 15.1138 5.62363 13.4009 5.64215L12.4228 5.65273L12.4118 6.63087L12.3818 9.30166L12.3704 10.3238L13.3925 10.3128C16.9665 10.2744 20.2245 12.0941 21.9589 15.0581C23.6923 18.0203 23.6577 21.7017 21.8451 24.7229C21.2524 25.7108 20.4893 26.5954 19.5883 27.3346L18.7977 27.9832L19.4638 28.7591L21.2035 30.7858Z" fill="white" stroke="white" stroke-width="2"/>\n    </g>\n    <g id="nav-trainings" width="32" height="32" viewBox="0 2 28 33" fill="none">\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C18.3238 8 22.7804 10.4778 25.1916 14.5C27.6028 18.5222 27.6028 23.4778 25.1916 27.5C22.7804 31.5222 18.3238 34 13.5 34C8.67621 34 4.21964 31.5222 1.80842 27.5C-0.602805 23.4778 -0.602805 18.5222 1.80842 14.5C4.21964 10.4778 8.67621 8 13.5 8V10.6C9.64151 10.6 6.07598 12.5825 4.14673 15.8C2.21749 19.0175 2.21749 22.9825 4.14673 26.2C6.07598 29.4175 9.64151 31.4 13.5 31.4C17.3585 31.4 20.924 29.4175 22.8533 26.2C24.7825 22.9825 24.7825 19.0175 22.8533 15.8C20.924 12.5825 17.3585 10.6 13.5 10.6V8Z" fill="#373737" fill-opacity="0.01"/>\n      <path opacity="0.839063" fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6C18.3238 6 22.7804 8.5731 25.1916 12.75C27.6028 16.9269 27.6028 22.0731 25.1916 26.25C22.7804 30.4269 18.3238 33 13.5 33C8.67621 33 4.21964 30.4269 1.80842 26.25C-0.602805 22.0731 -0.602805 16.9269 1.80842 12.75C4.21964 8.5731 8.67621 6 13.5 6V8.7C9.64151 8.7 6.07598 10.7588 4.14673 14.1C2.21749 17.4412 2.21749 21.5588 4.14673 24.9C6.07598 28.2412 9.64151 30.3 13.5 30.3C17.3585 30.3 20.924 28.2412 22.8533 24.9C23.665 23.4942 24.1352 21.9509 24.2639 20.3859C24.441 18.2313 23.9708 16.0354 22.8533 14.1C20.924 10.7588 17.3585 8.7 13.5 8.7V6Z" fill="black"/>\n      <path d="M21.2035 30.7855L21.8406 31.5277L22.5967 30.9071C26.6507 27.5797 28.639 22.4198 27.778 17.3636C26.9167 12.3054 23.3418 8.14904 18.4193 6.45144C16.8123 5.89719 15.1138 5.62338 13.4009 5.64191L12.4228 5.65248L12.4118 6.63063L12.3818 9.30141L12.3704 10.3236L13.3925 10.3126C16.9665 10.2741 20.2245 12.0938 21.9589 15.0578C23.6923 18.02 23.6577 21.7014 21.8451 24.7227C21.2524 25.7105 20.4893 26.5952 19.5883 27.3344L18.7977 27.9829L19.4638 28.7588L21.2035 30.7855Z" fill="#C53B26" stroke="#C53B26" stroke-width="2"/>\n    </g>\n    <g id="nav-discover-active" width="32" height="30" viewBox="0 0 32 30" fill="none">\n      <path d="M11.4709 9.54534L9.60282 7.73318C9.82041 7.32743 9.95501 6.86802 9.95501 6.37239C9.95501 4.80168 8.71549 3.52941 7.18454 3.52941C5.65359 3.52941 4.41211 4.80101 4.41211 6.37239C4.41211 7.94378 5.65359 9.21671 7.18454 9.21671C7.72426 9.21671 8.22347 9.05173 8.64949 8.77809L10.515 10.5882C10.7973 10.2053 11.1155 9.85452 11.4709 9.54534Z" fill="white"/>\n      <path d="M19.6997 9.70588L22.1281 5.48165C22.3671 5.55235 22.6151 5.60323 22.8753 5.60323C24.3755 5.60323 25.5881 4.34911 25.5881 2.80096C25.5881 1.25346 24.3755 0 22.8753 0C21.3776 0 20.1657 1.2528 20.1657 2.80096C20.1657 3.56942 20.4655 4.26388 20.95 4.77068L18.5293 8.98301C18.9454 9.17794 19.3379 9.42109 19.6997 9.70588Z" fill="white"/>\n      <path d="M29.0336 13.2353C27.8581 13.2353 26.8624 13.9591 26.4764 14.9684L23.0748 14.643C23.0748 14.668 23.0787 14.6917 23.0787 14.716C23.0787 15.1457 23.0297 15.5654 22.9414 15.9707L26.3417 16.2961C26.5473 17.5601 27.6706 18.5294 29.0336 18.5294C30.543 18.5294 31.7649 17.3453 31.7649 15.8827C31.7649 14.4206 30.543 13.2353 29.0336 13.2353Z" fill="white"/>\n      <path d="M18.6107 24.5165L17.8741 21.1765C17.4584 21.3268 17.0258 21.4343 16.5745 21.4881L17.3123 24.8287C16.4665 25.288 15.8828 26.1955 15.8828 27.2553C15.8828 28.7724 17.0664 30 18.5314 30C19.9934 30 21.1769 28.7718 21.1769 27.2553C21.1788 25.7661 20.0352 24.5605 18.6107 24.5165Z" fill="white"/>\n      <path d="M10.1054 15.8824L5.48099 17.4349C4.94746 16.6181 4.02892 16.0763 2.98368 16.0763C1.33453 16.0763 0 17.4145 0 19.0665C0 20.7207 1.33453 22.0588 2.98368 22.0588C4.63143 22.0588 5.96948 20.7207 5.96948 19.0665C5.96948 18.9974 5.95469 18.9339 5.94906 18.8662L10.5882 17.3094C10.3792 16.8572 10.2131 16.3811 10.1054 15.8824Z" fill="white"/>\n      <path d="M16.3236 19.4118C19.0038 19.4118 21.1766 17.239 21.1766 14.5588C21.1766 11.8786 19.0038 9.70588 16.3236 9.70588C13.6434 9.70588 11.4707 11.8786 11.4707 14.5588C11.4707 17.239 13.6434 19.4118 16.3236 19.4118Z" fill="white"/>\n    </g>\n    <g id="nav-discover" width="32" height="30" viewBox="0 -4 32 34" fill="none" opacity="0.866484">\n      <path d="M11.4709 9.54523L9.60282 7.73307C9.82041 7.32731 9.95501 6.8679 9.95501 6.37228C9.95501 4.80156 8.71549 3.5293 7.18454 3.5293C5.65359 3.5293 4.41211 4.80089 4.41211 6.37228C4.41211 7.94366 5.65359 9.2166 7.18454 9.2166C7.72426 9.2166 8.22347 9.05161 8.64949 8.77798L10.515 10.5881C10.7973 10.2052 11.1155 9.8544 11.4709 9.54523Z" fill="black"/>\n      <path d="M19.6997 9.70588L22.1281 5.48165C22.3671 5.55235 22.6151 5.60323 22.8753 5.60323C24.3755 5.60323 25.5881 4.34911 25.5881 2.80096C25.5881 1.25346 24.3755 0 22.8753 0C21.3776 0 20.1657 1.2528 20.1657 2.80096C20.1657 3.56942 20.4655 4.26388 20.95 4.77068L18.5293 8.98301C18.9454 9.17794 19.3379 9.42109 19.6997 9.70588Z" fill="black"/>\n      <path d="M29.0336 13.2354C27.8581 13.2354 26.8624 13.9592 26.4764 14.9684L23.0748 14.643C23.0748 14.668 23.0787 14.6917 23.0787 14.7161C23.0787 15.1458 23.0297 15.5655 22.9414 15.9708L26.3417 16.2962C26.5473 17.5602 27.6706 18.5295 29.0336 18.5295C30.543 18.5295 31.7649 17.3454 31.7649 15.8827C31.7649 14.4207 30.543 13.2354 29.0336 13.2354Z" fill="black"/>\n      <path d="M18.6107 24.5163L17.8741 21.1763C17.4584 21.3266 17.0258 21.4341 16.5745 21.4879L17.3123 24.8285C16.4665 25.2878 15.8828 26.1953 15.8828 27.2551C15.8828 28.7722 17.0664 29.9998 18.5314 29.9998C19.9934 29.9998 21.1769 28.7716 21.1769 27.2551C21.1788 25.7659 20.0352 24.5603 18.6107 24.5163Z" fill="black"/>\n      <path d="M10.1054 15.8823L5.48099 17.4349C4.94746 16.6181 4.02892 16.0763 2.98368 16.0763C1.33453 16.0763 0 17.4145 0 19.0665C0 20.7207 1.33453 22.0588 2.98368 22.0588C4.63143 22.0588 5.96948 20.7207 5.96948 19.0665C5.96948 18.9974 5.95469 18.9339 5.94906 18.8662L10.5882 17.3093C10.3792 16.8572 10.2131 16.381 10.1054 15.8823Z" fill="black"/>\n      <path d="M16.3236 19.4119C19.0038 19.4119 21.1766 17.2392 21.1766 14.559C21.1766 11.8788 19.0038 9.70605 16.3236 9.70605C13.6434 9.70605 11.4707 11.8788 11.4707 14.559C11.4707 17.2392 13.6434 19.4119 16.3236 19.4119Z" fill="black"/>\n    </g>\n    <g id="nav-roadmap-active" height="20" viewBox="-2 0 34 18" fill="none">\n      <path d="M10.4114 10.9901L2.26489 19.5895C1.74667 20.1368 0.906473 20.1368 0.388506 19.5895C-0.129502 19.0427 -0.129502 18.1558 0.388506 17.609L7.59693 9.99986L0.388716 2.39095C-0.129292 1.84391 -0.129292 0.957105 0.388716 0.410283C0.906725 -0.136761 1.74688 -0.136761 2.2651 0.410283L10.4116 9.00983C10.6706 9.28337 10.8 9.64151 10.8 9.99981C10.8 10.3583 10.6704 10.7167 10.4114 10.9901Z" fill="white"/>\n      <path d="M20.011 10.9901L11.8645 19.5895C11.3463 20.1368 10.5061 20.1368 9.98812 19.5895C9.47011 19.0427 9.47011 18.1558 9.98812 17.609L17.1965 9.99986L9.98833 2.39095C9.47032 1.84391 9.47032 0.957105 9.98833 0.410283C10.5063 -0.136761 11.3465 -0.136761 11.8647 0.410283L20.0112 9.00983C20.2703 9.28337 20.3996 9.64151 20.3996 9.99981C20.3996 10.3583 20.27 10.7167 20.011 10.9901Z" fill="white"/>\n      <path d="M29.6106 10.9901L21.4641 19.5895C20.9459 20.1368 20.1057 20.1368 19.5877 19.5895C19.0697 19.0427 19.0697 18.1558 19.5877 17.609L26.7962 9.99986L19.5879 2.39095C19.0699 1.84391 19.0699 0.957105 19.5879 0.410283C20.1059 -0.136761 20.9461 -0.136761 21.4643 0.410283L29.6109 9.00983C29.8699 9.28337 29.9992 9.64151 29.9992 9.99981C29.9992 10.3583 29.8696 10.7167 29.6106 10.9901Z" fill="white"/>\n    </g>\n    <g id="nav-roadmap" height="20" viewBox="-2 0 34 18" fill="none">\n      <path d="M10.4114 10.9901L2.26489 19.5895C1.74667 20.1368 0.906473 20.1368 0.388506 19.5895C-0.129502 19.0427 -0.129502 18.1558 0.388506 17.609L7.59693 9.99986L0.388716 2.39095C-0.129292 1.84391 -0.129292 0.957105 0.388716 0.410283C0.906725 -0.136761 1.74688 -0.136761 2.2651 0.410283L10.4116 9.00983C10.6706 9.28337 10.8 9.64151 10.8 9.99981C10.8 10.3583 10.6704 10.7167 10.4114 10.9901Z" fill="#1A1A1A"/>\n      <path d="M20.011 10.9901L11.8645 19.5895C11.3463 20.1368 10.5061 20.1368 9.98812 19.5895C9.47011 19.0427 9.47011 18.1558 9.98812 17.609L17.1965 9.99986L9.98833 2.39095C9.47032 1.84391 9.47032 0.957105 9.98833 0.410283C10.5063 -0.136761 11.3465 -0.136761 11.8647 0.410283L20.0112 9.00983C20.2703 9.28337 20.3996 9.64151 20.3996 9.99981C20.3996 10.3583 20.27 10.7167 20.011 10.9901Z" fill="#1A1A1A"/>\n      <path d="M29.6106 10.9901L21.4641 19.5895C20.9459 20.1368 20.1057 20.1368 19.5877 19.5895C19.0697 19.0427 19.0697 18.1558 19.5877 17.609L26.7962 9.99986L19.5879 2.39095C19.0699 1.84391 19.0699 0.957105 19.5879 0.410283C20.1059 -0.136761 20.9461 -0.136761 21.4643 0.410283L29.6109 9.00983C29.8699 9.28337 29.9992 9.64151 29.9992 9.99981C29.9992 10.3583 29.8696 10.7167 29.6106 10.9901Z" fill="#1A1A1A"/>\n    </g>\n    <g id="logo" height="20" viewBox="10 60 380 55">\n      <path fill="#010101" d="M124.244,114.398l0.297,0.632c-4.29,18.413-11.639,32.315-22.076,41.721\n      c-10.386,9.411-24.447,14.13-42.125,14.13c-17.056,0-30.713-5.994-40.98-18.006c-10.274-12.001-13.547-27.114-9.876-45.376\n      l6.471-32.281c4.031-20.238,11.892-35.864,23.517-46.873C51.1,17.343,65.531,11.839,82.721,11.839\n      c17.575,0,31.069,5.095,40.521,15.297c9.449,10.187,13.004,24.019,10.664,41.511l-0.213,0.53H98.979\n      c1.709-9.92,1.055-17.34-1.917-22.303c-2.959-4.94-8.822-7.427-17.524-7.427c-6.5,0-12.294,3.283-17.355,9.818\n      c-5.05,6.551-8.653,15.125-10.753,25.745l-6.479,32.49c-2.336,11.464-1.991,20.281,1.003,26.477\n      c2.985,6.204,8.468,9.311,16.396,9.311c7.226,0,13.025-2.387,17.426-7.121c4.376-4.748,7.697-11.999,9.962-21.767H124.244z"/>\n      <path fill="#D61F2D" d="M203.857,66.206l25.477-52.137h41.409l-44.259,76.656l47.642,77.915H230.6l-26.312-53.173l-26.321,53.173\n      h-41.402l45.43-77.915l-44.257-76.656h41.07L203.857,66.206z"/>\n      <path fill="#D61F2D" d="M321.929,141.03h66.542v27.61H285.914V14.069h36.016V141.03z"/>\n    </g>\n    </defs>\n  </svg>\n</iron-iconset-svg>\n',document.head.appendChild(ts.content);var ns=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host([theme~=cxl-search-overlay]) [part=backdrop]{background-color:var(--lumo-shade-40pct)}:host([theme~=cxl-search-overlay]) [part=overlay],:host([theme~=cxl-search-overlay]) [part=content]{box-sizing:border-box;min-width:100%;width:100%}:host([theme~=cxl-search-overlay]) ::slotted(iron-icon){color:var(--lumo-shade-50pct);cursor:pointer;float:right}:host([theme~=cxl-search-overlay]) ::slotted(iron-icon:hover){color:var(--lumo-shade-80pct)}@media(min-width: 45em){:host([theme~=cxl-search-overlay]) [part=overlay]{min-width:40em;width:auto}}::slotted(vaadin-form-layout){margin:var(--lumo-space-m) var(--lumo-space-l)}:host([theme~=cxl-optin]) [part=overlay]{max-width:550px}`;const os=document.createElement("template");os.innerHTML=`\n<dom-module id="cxl-lumo-dialog-overlay" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>${ns}</style>\n  </template>\n</custom-style>`,document.head.appendChild(os.content);var is=se`:host([theme~=cxl-button]){cursor:pointer;font-weight:500;height:calc(var(--lumo-button-size) * 1.1);padding:0 calc(var(--lumo-button-size) / 2)}:host([theme~=cxl-button]) ::slotted(a){color:var(--lumo-base-color)}:host([theme~=cxl-transparent]){background-color:transparent;border:1px solid var(--lumo-primary-color)}:host([theme~=cxl-transparent]) ::slotted(a){color:var(--lumo-primary-color)}:host([theme~=contrast]){background-color:transparent;border:1px solid var(--lumo-shade-90pct);color:var(--lumo-shade-90pct)}:host([theme~=contrast]) ::slotted(a){color:var(--lumo-shade-90pct)}:host([theme~=margin-right]){margin-right:var(--lumo-space-m)}`;const rs=document.createElement("template");rs.innerHTML=`\n<dom-module id="cxl-lumo-button" theme-for="vaadin-button">\n  <template>\n    <style>${is}</style>\n  </template>\n</custom-style>`,document.head.appendChild(rs.content);var ss=se`[part=input-field]{background-color:transparent;border:1px solid var(--lumo-shade-20pct)}[part=value],[part=input-field] ::slotted(input),[part=input-field] ::slotted(textarea),[part=input-field] ::slotted([part=value]){min-height:var(--lumo-size-l);background:#fff;-webkit-mask-image:none}[part=label]{text-transform:uppercase;font-weight:600}:host([invalid]) [part=input-field]{background-color:transparent;border:1px solid var(--lumo-error-color-50pct)}`;const as=document.createElement("template");as.innerHTML=`\n<dom-module id="cxl-lumo-text-field" theme-for="vaadin-text-field">\n  <template>\n    <style>${ss}</style>\n  </template>\n</custom-style>`,document.head.appendChild(as.content),[`<dom-module id="cxl-institute-layout-tab" theme-for="vaadin-tab">\n    <template>\n      <style>${se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]:first-child){padding-left:0}:host([theme~=cxl-marketing-nav-tab]){align-self:center}:host([theme~=cxl-marketing-nav-tab])::after,:host([theme~=cxl-marketing-nav-tab])::before{display:none}:host([theme~=cxl-marketing-nav-tab]) ::slotted(vaadin-context-menu)::after{color:var(--lumo-shade-90pct);content:var(--lumo-icons-angle-down);font-family:var(--lumo-icons);font-weight:900;position:absolute;right:0;top:14px}:host([theme~=cxl-marketing-nav-tab]:hover) ::slotted(vaadin-context-menu)::before{color:var(--lumo-primary-color)}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]){height:100%;overflow:visible;padding:0;position:relative}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(a[href]),:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(vaadin-context-menu){color:var(--lumo-shade-90pct);display:flex;font-size:var(--lumo-font-size-m);font-weight:500;height:auto;height:100%;justify-content:center;margin:0;min-height:50px;padding:0 var(--lumo-space-l);width:auto}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(a[href]):hover,:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(vaadin-context-menu):hover{color:var(--lumo-primary-color);text-decoration:none}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(vaadin-context-menu){padding-right:calc(var(--lumo-space-l) * 1.5)}:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(vaadin-context-menu)::after{right:var(--lumo-space-m)}@media(min-width: 45em){:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]){display:flex}}@media(max-width: 44.99em){:host([theme~=cxl-marketing-nav-tab][orientation=horizontal]) ::slotted(vaadin-button[theme~=cxl-transparent]){border-color:var(--lumo-tint-10pct)}}:host([theme~=cxl-marketing-nav-tab][theme~=cxl-mobile-nav-icon]:not([orientation=vertical])){display:none}:host([theme~=cxl-marketing-nav-tab][theme~=cxl-mobile-icon]){margin-left:auto;padding-right:0}@media(min-width: 45em){:host([theme~=cxl-marketing-nav-tab][theme~=cxl-mobile-icon]){display:none}}@media(max-width: 44.99em){:host([theme~=cxl-marketing-nav-tab][theme~=cxl-from-tablet]:not([orientation=vertical])){display:none}}@media(min-width: 45em){:host([theme~=cxl-marketing-nav-tab][theme~=cxl-from-tablet]:not([orientation=vertical])){display:flex}}:host([theme~=cxl-marketing-nav-tab][orientation=vertical]) ::slotted(a),:host([theme~=cxl-marketing-nav-tab][orientation=vertical]) ::slotted(vaadin-context-menu){color:var(--lumo-base-color) !important;font-size:var(--lumo-font-size-l);justify-content:left;padding:var(--lumo-space-m) var(--lumo-space-l)}:host([theme~=cxl-marketing-nav-tab][orientation=vertical]) ::slotted(vaadin-context-menu){padding-left:11px;position:relative}:host([theme~=cxl-marketing-nav-tab][orientation=vertical]) ::slotted(vaadin-context-menu)::after{color:var(--lumo-base-color);top:16px}:host([theme~=cxl-marketing-nav-tab][orientation=vertical]) ::slotted(vaadin-button[theme~=cxl-button]){border-color:var(--lumo-base-color);color:var(--lumo-base-color);margin:var(--lumo-space-l) var(--lumo-space-s);width:100%}:host([theme~=cxl-marketing-nav-tab][orientation=vertical]:first-child){margin-top:calc(var(--lumo-space-l) * 2)}:host([theme~=cxl-marketing-nav-tab][orientation~=vertical][theme~=cxl-mobile-icon]){display:none}:host([theme~=cxl-marketing-nav-tab][orientation~=vertical][theme~=cxl-logo]){padding:0 var(--lumo-space-m)}:host([theme~=cxl-marketing-nav-tab][orientation~=vertical][theme~=cxl-mobile-nav-icon]){position:absolute;right:0;top:var(--lumo-space-xs)}`}</style>\n    </template>\n  </dom-module>`,`<dom-module id="cxl-list-box" theme-for="vaadin-list-box">\n    <template>\n      <style>${se`:host([theme~=cxl-nav-dropdown]){min-width:150px;padding:var(--lumo-space-s) 0}:host([theme~=cxl-nav-dropdown]) ::slotted(a){padding:var(--lumo-space-xs) var(--lumo-space-m)}`}</style>\n    </template>\n  </dom-module>`].forEach(function(e){const t=document.createElement("template");t.innerHTML=e,document.head.appendChild(t.content)});var ls=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}html,body{height:100%;margin:0;min-height:100%}a{text-decoration:none}a:hover{text-decoration:underline}iframe{max-width:100%}img{height:auto;max-width:100%}.align-left{text-align:left}.align-center{text-align:center}.align-right{text-align:right}h1,h2,h3,h4,h5{font-weight:900}h1 strong,h2 strong,h3 strong,h4 strong,h5 strong{color:var(--lumo-primary-color);font-weight:900}.screen-reader-text{display:none}.text-center{text-align:center}.flex{display:flex;flex-direction:column}.flex .column{flex:100%}@media(min-width: 45em){.flex{flex-direction:row}.flex .column{flex:50%}}.wrap{box-sizing:border-box;margin-left:auto;margin-right:auto;max-width:720px;padding-left:calc(var(--lumo-space-m));padding-right:calc(var(--lumo-space-m));width:100%}.wrap.no-padding{padding:0}@media(min-width: 45em){.wrap{max-width:960px}}@media(min-width: 60em){.wrap{max-width:1280px}.wrap.shrunk{max-width:720px}}`,cs=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{display:flex;height:57px}:host([hidden]){display:none}::slotted(a[slot=cxl-logo]){align-self:center;height:auto;justify-content:center;margin:0;padding:var(--lumo-space-s) var(--lumo-space-m);width:auto}@media(min-width: 45em)and (max-width: 59.99em){::slotted(a[slot=cxl-logo]){align-items:center;background-color:var(--lumo-base-color);box-shadow:-9px 5px 9px rgba(26,57,96,.1);box-sizing:border-box;display:flex;height:57px;z-index:10}}[part=topnav]{align-items:center}@media(min-width: 45em){[part=topnav] ::slotted(vaadin-tabs){float:right}}[part=topnav],[part=bottomnav]{background:transparent;display:flex;flex-direction:row;position:relative;width:100%;z-index:1}[part=topnav] ::slotted(vaadin-tabs),[part=bottomnav] ::slotted(vaadin-tabs){box-shadow:none !important}[part=topnav] .wrap,[part=bottomnav] .wrap{padding:0}@media(min-width: 45em)and (max-width: 59.99em){[part=topnav],[part=bottomnav]{background-color:var(--lumo-base-color);box-shadow:-10px 5px 9px var(--lumo-shade-10pct)}}[part=bottomnav]{background-color:var(--lumo-shade);border-bottom:1px solid var(--lumo-shade-10pct);bottom:0;box-shadow:0 -1px 5px 0 var(--lumo-shade-5pct);left:0;padding:var(--lumo-space-s) 0;position:absolute;right:0;width:100%}[part=bottomnav].fixed{background-color:var(--lumo-base-color);bottom:initial;position:fixed;top:0}@media(min-width: 45em){[part=bottomnav]{background-color:var(--lumo-tint-50pct)}}@media(min-width: 45em){:host([waves]) [part=bottomnav]{background-color:transparent;box-shadow:none;position:relative}}:host([orientation=vertical]) [part=topnav]{background:#1e2122;bottom:0;box-shadow:-2px 0 24px 16px var(--lumo-contrast-30pct);position:fixed;right:0;top:0;width:265px;z-index:9}`;customElements.define("cxl-marketing-nav",class extends le{static get properties(){return{navType:{type:String,attribute:"nav-type"},fixed:{type:Boolean,value:!1,reflect:!0},mobileNav:{type:Boolean,value:!1}}}static get styles(){return[ls,cs]}render(){return R`
      <slot name="cxl-logo"></slot>
      <nav part="${this.navType}" class="${this.fixed?"fixed":""}">
        ${this.navType,R`
              <div class="wrap">
                <slot></slot>
              </div>
            `}
      </nav>
    `}firstUpdated(){const e=this;document.querySelector("body").addEventListener("scroll",function(){e._isScrolledIntoView(e)?e.removeAttribute("fixed"):e.setAttribute("fixed","")}),"topnav"===this.navType&&[document.querySelector('cxl-marketing-nav vaadin-tabs vaadin-tab[theme="cxl-marketing-nav-tab cxl-mobile-icon"] a'),document.querySelector('cxl-marketing-nav vaadin-tabs vaadin-tab[theme="cxl-marketing-nav-tab cxl-mobile-nav-icon"] a')].forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),e.toggleMobileNav()})})}_isScrolledIntoView(e){return e.getBoundingClientRect().top>=0}toggleMobileNav(){this.mobileNav=!this.mobileNav,this.setAttribute("orientation","horizontal"),this.querySelector("vaadin-tabs").setAttribute("orientation","horizontal"),this.mobileNav&&(this.setAttribute("orientation","vertical"),this.querySelector("vaadin-tabs").setAttribute("orientation","vertical"))}});const ds=jr`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        text-align: center;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host([orientation="vertical"]) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
      }

      :host(:hover),
      :host([focus-ring]) {
        color: var(--lumo-body-text-color);
      }

      :host([selected]) {
        color: var(--lumo-primary-text-color);
        transition: 0.6s color;
      }

      :host([active]:not([selected])) {
        color: var(--lumo-primary-text-color);
        transition-duration: 0.1s;
      }

      :host::before,
      :host::after {
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
        transform-origin: 100% 50%;
      }

      :host::after {
        box-shadow: 0 0 0 4px var(--lumo-primary-color);
        opacity: 0.15;
        transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
      }

      :host([selected])::before,
      :host([selected])::after {
        transform: translateX(-50%) scale(1);
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host ::slotted(a[href]) {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: -0.5rem -0.75rem;
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        color: inherit;
        outline: none;
      }

      :host ::slotted(a[href]:hover),
      :host ::slotted(a[href]:focus) {
        color: inherit;
      }

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(a) {
        flex-direction: column;
        align-items: center;
        margin-top: -0.25rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
        margin: 0;
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        opacity: 1;
        color: var(--lumo-disabled-text-color);
      }

      /* Focus-ring */

      :host([focus-ring]) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
        border-radius: var(--lumo-border-radius);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ds.content);const hs=e=>(class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),"theme"===e&&this._setTheme(n)}}),us=e=>(class extends(hs(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,n=Object.getPrototypeOf(this.prototype)._template;n&&!t&&Array.from(n.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Ke.prototype.modules;let n=!1;const o=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const n=0===e.indexOf("vaadin-"),o=0===t.indexOf("vaadin-"),i=["lumo-","material-"],r=i.filter(t=>0===e.indexOf(t)).length>0,s=i.filter(e=>0===t.indexOf(e)).length>0;return n!==o?n?-1:1:r!==s?r?-1:1:0}).forEach(i=>{if(i!==o){const o=t[i].getAttribute("theme-for");o&&o.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(n=!0,this._includeStyle(i,e))})}}),!n&&t[o]&&this._includeStyle(o,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const n=document.createElement("style");n.setAttribute("include",e),t.content.appendChild(n)}}}),ps=e=>(class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}constructor(){super(),this.value}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}),ms=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;function fs(e,t){if("function"!=typeof e)return;const n=ms.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const vs=function(e,t){if(window.Vaadin.developmentMode)return fs(e,t)};function bs(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&!fs(function(){return!0})&&!function(){if(window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients){const e=Object.keys(window.Vaadin.Flow.clients).map(e=>window.Vaadin.Flow.clients[e]).filter(e=>e.productionMode);if(e.length>0)return!0}return!1}()}catch(e){return!1}}());const gs=function(){return vs(bs)};let ys;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){gs&&gs()};const _s=e=>(class extends e{static _finalizeClass(){super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(ys=To.debounce(ys,Nn,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Lo(ys)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class xs extends(_s(us(ps(Dr)))){static get template(){return jr`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.0.0"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(e){const t=this.hasAttribute("active");if(super._onKeyup(e),t){const e=this.querySelector("a");e&&e.click()}}}customElements.define(xs.is,xs);const ws=jr`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
        position: absolute;
        z-index: 1;
        font-family: lumo-icons;
        color: var(--lumo-tertiary-text-color);
        font-size: var(--lumo-icon-size-m);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5em;
        height: 100%;
        transition: 0.2s opacity;
        top: 0;
      }

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ws.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const Cs=e=>(class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new Ki(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,n){if(e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(n);const o=e[n];e.forEach(e=>e.selected=e===o),o&&!o.disabled&&this._scrollToItem(n)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey)return;const t=this._filterItems(e.composedPath())[0];let n;t&&!t.disabled&&(n=this.items.indexOf(t))>=0&&(this.selected=n)}_searchKey(e,t){this._searchReset=To.debounce(this._searchReset,Ln.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());const n=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(n,1,e=>!e.disabled&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key.replace(/^Arrow/,""),n=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){const e=this._searchKey(n,t);return void(e>=0&&this._focus(e))}let o,i;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(i=-1,o=n-1):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(i=1,o=n+1):"Home"===t?(i=1,o=0):"End"===t&&(i=-1,o=this.items.length-1),(o=this._getAvailableIndex(o,i,e=>!e.disabled))>=0&&(this._focus(o),e.preventDefault())}_getAvailableIndex(e,t,n){const o=this.items.length;for(let i=0;"number"==typeof e&&i<o;i++,e+=t||1){if(e<0?e=o-1:e>=o&&(e=0),n(this.items[e]))return e}return-1}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);const t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){const t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();const e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){const t=this.items[e];if(!t)return;const n=this._vertical?["top","bottom"]:["left","right"],o=this._scrollerElement.getBoundingClientRect(),i=(this.items[e+1]||t).getBoundingClientRect(),r=(this.items[e-1]||t).getBoundingClientRect();let s=0;i[n[1]]>=o[n[1]]?s=i[n[1]]-o[n[1]]:r[n[0]]<=o[n[0]]&&(s=r[n[0]]-o[n[0]]),this._scroll(s)}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){this._scrollerElement["scroll"+(this._vertical?"Top":"Left")]+=e}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ss=new Set;const Es={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Ss.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():Fe||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=sr(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(Ss.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Ss.delete(this):Ss.add(this)}},ks=/Apple.* Version\/(9|10)/.test(navigator.userAgent);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class As extends(_s(Cs(us(ur([Es],Dr))))){static get template(){return jr`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '◀';
      }

      [part="forward-button"]::after {
        content: '▶';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"3.0.0"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),qi(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(this._scrollOffset)}_scrollBack(){this._scroll(-1*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this._scrollerElement.scrollLeft;let t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;t-=1;let n=e>0?"start":"";(n+=e+this._scrollOffset<t?" end":"")?this.setAttribute("overflow",n.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(ks&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}}customElements.define(As.is,As);customElements.define("cxl-marketing-layout",class extends le{static get properties(){return{}}static get styles(){return[ls]}render(){return R`
      <slot></slot>
    `}}),[`<dom-module id="cxl-marketing-hero-item" theme-for="vaadin-item">\n     <template>\n       <style>${se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host([theme~=cxl-hero-content]){padding:0}`}</style>\n     </template>\n   </dom-module>`,`<custom-style id="cxl-marketing-hero-global">\n     <style>${se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}[theme~=cxl-hero-content] h1,[theme~=cxl-hero-content] h2,[theme~=cxl-hero-content] h5,[theme~=cxl-hero-content] p{display:none}[theme~=cxl-hero-content] h1{display:block;font-size:var(--lumo-font-size-xxxl);font-weight:900;line-height:calc(var(--lumo-line-height-xs) / 1.1);margin-top:var(--lumo-space-l)}[theme~=cxl-hero-content] h1 strong{color:var(--lumo-primary-color)}[theme~=cxl-hero-content] h2{display:block;font-size:var(--lumo-font-size-xl);font-weight:900;line-height:calc(var(--lumo-line-height-xs) / 1.3)}[theme~=cxl-hero-content] h2 span{display:block;font-weight:300;margin-bottom:var(--lumo-space-m)}[theme~=cxl-hero-content] p{display:block}@media(min-width: 45em){[theme~=cxl-hero-content] h1{font-size:calc(var(--lumo-font-size-xxxl) * 1.2);line-height:calc(var(--lumo-font-size-xxxl) * 1.2);margin-top:0}[theme~=cxl-hero-content] h2 span{display:inline-block;margin-bottom:0}[theme~=cxl-hero-content] h2 strong{color:var(--lumo-primary-color)}[theme~=cxl-hero-content] h5{display:block;font-size:var(--lumo-font-size-m);font-weight:400;margin-top:0}[theme~=cxl-hero-content] p{display:block;font-size:var(--lumo-font-size-m);font-weight:500;line-height:var(--lumo-line-height-s);margin-top:var(--lumo-space-m);padding-right:20%}}@media(min-width: 60em){[theme~=cxl-hero-content] h1{font-size:calc(var(--lumo-font-size-xxxl) * 1.6);line-height:calc(var(--lumo-font-size-xxxl) * 1.6);padding-right:10%}[theme~=cxl-hero-content] p{padding-right:30%}}[theme~=cxl-hero-style-catalog-content] p{display:block;font-size:var(--lumo-font-size-s);line-height:var(--lumo-line-height-s)}@media(min-width: 45em){[theme~=cxl-hero-style-catalog-content] h1{font-size:calc(var(--lumo-font-size-xl) * 2);line-height:calc(var(--lumo-font-size-xl) * 2.25)}[theme~=cxl-hero-style-catalog-content] p{font-size:var(--lumo-font-size-m);line-height:var(--lumo-line-height-m)}}[theme~=cxl-hero-style-catalog] .catalog-search-form{bottom:calc(var(--lumo-space-l) * -1.25);box-sizing:border-box;display:flex;position:relative;width:100%}[theme~=cxl-hero-style-catalog] .catalog-search-form .screen-reader-text{display:none}[theme~=cxl-hero-style-catalog] .catalog-search-form input[type=search]{background:transparent;background:var(--lumo-shade);border:0;border-radius:6px;box-shadow:none;color:var(--lumo-tint-90pct);font-size:var(--lumo-font-size-l);height:var(--lumo-size-m);margin-right:calc(var(--lumo-space-l) * -1);padding:var(--lumo-space-l) var(--lumo-space-m);width:100%}[theme~=cxl-hero-style-catalog] .catalog-search-form input[type=search]::placeholder{color:var(--lumo-tint-90pct);opacity:1}[theme~=cxl-hero-style-catalog] .catalog-search-form input[type=search]:focus{outline:none}[theme~=cxl-hero-style-catalog] .catalog-search-form input[type=submit]{background-color:var(--lumo-primary-color);border:none;border-radius:var(--lumo-border-radius);box-sizing:border-box;color:var(--lumo-primary-contrast-color);cursor:pointer;font-family:var(--lumo-font-family);font-size:var(--lumo-font-size-s);font-weight:600;min-width:calc(var(--lumo-size-m) * 2.5);padding:var(--lumo-space-m) var(--lumo-space-xs)}@media(min-width: 45em){[theme~=cxl-hero-style-catalog] form{max-width:600px}}`}</style>\n   </custom-style>`].forEach(function(e){const t=document.createElement("template");t.innerHTML=e,document.head.appendChild(t.content)});var Os=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{background-repeat:no-repeat;display:flex;height:auto;min-height:575px;position:relative}:host ::slotted(cxl-marketing-nav){margin-left:calc(var(--lumo-space-m) / -1);margin-right:calc(var(--lumo-space-m) / -1)}:host .bgimage{background-position:right -260px top 100px;background-repeat:no-repeat;background-size:550px;bottom:0;height:100%;left:0;min-height:575px;position:absolute;right:0;top:0;width:100%;z-index:0}:host [part=hero-content]{display:flex;padding-bottom:calc(var(--lumo-space-xl) * 3);padding-right:35%;padding-top:calc(var(--lumo-space-xxl) * 3);position:relative}:host ::slotted(h1){margin:0}:host .waves{display:none}@media(min-width: 45em){:host .bgimage{background-position:right -425px top 10px;background-size:1000px}:host [part=hero-content]{padding-bottom:calc(var(--lumo-space-xl) * 3);padding-right:40%;padding-top:calc(var(--lumo-space-l))}}@media(min-width: 45em)and (max-width: 59.99em){:host [part=hero-content]{padding-right:35%;padding-top:calc(var(--lumo-space-xl) * 1.4)}}@media(min-width: 60em){:host{padding-top:var(--lumo-space-m)}:host .bgimage{background-position:right -300px top 30%;background-size:100%;padding-right:200px}:host [part=hero-content]{padding-bottom:calc(var(--lumo-space-xl) * 3);padding-right:40%}}@media(min-width: 80em){:host .bgimage{background-position:center top 10%;background-repeat:no-repeat;background-size:1000px;padding-right:750px}}:host([hero-style=video]){min-height:485px}:host([hero-style=video]) .bgimage{display:none}:host([hero-style=video]) [part=hero-content]{padding:0}:host([hero-style=video]) .flex{height:75%}:host([hero-style=video]) .video{align-items:center;display:flex;height:100%;justify-content:center;margin:var(--lumo-space-l) 0;width:100%}:host([hero-style=video]) .video .video-image{cursor:pointer;position:relative}:host([hero-style=video]) .video .video-image ::slotted(img){border-radius:var(--lumo-border-radius-s);box-shadow:var(--lumo-space-s) var(--lumo-space-s) var(--lumo-contrast-30pct)}:host([hero-style=video]) .video .video-image::before{background-color:var(--lumo-shade-80pct);border-radius:50%;color:var(--lumo-base-color);content:var(--lumo-icons-play);font-family:var(--lumo-icons);font-size:calc(var(--lumo-font-size-xxl) * 1.3);height:calc(var(--lumo-space-xl) * 1.5);left:calc(50% - 32px);padding-left:4px;padding-top:4px;position:absolute;text-align:center;top:calc(50% - 32px);transition:padding .1s ease,background .2s ease;width:calc(var(--lumo-space-xl) * 1.5)}:host([hero-style=video]) .video .video-image:hover::before{background-color:var(--lumo-shade-20pct)}@media(min-width: 45em){:host([hero-style=video]) .video{margin:0}}@media(min-width: 45em)and (max-width: 59.99em){:host([hero-style=video]){min-height:485px}}@media(min-width: 60em){:host([hero-style=video]){min-height:500px}:host([hero-style=video]) .video .video-image::before{font-size:calc(var(--lumo-font-size-xxl) * 2.15);height:calc(var(--lumo-space-xl) * 2.5);left:calc(50% - 50px);top:calc(50% - 50px);width:calc(var(--lumo-space-xl) * 2.5)}}@media(min-width: 45em){:host([hero-style=waves]) [part=hero-content]{padding-bottom:calc(var(--lumo-space-xs))}:host([hero-style=waves]) .waves{bottom:0;display:block;position:absolute;width:100%}}@media(min-width: 45em)and (max-width: 59.99em){:host([hero-style=waves]){min-height:850px}}@media(min-width: 60em){:host([hero-style=waves]){min-height:700px}}:host([hero-style=catalog]){min-height:475px}:host([hero-style=catalog]) [part=hero-content]{padding-bottom:var(--lumo-space-xl);padding-top:var(--lumo-space-l)}:host([hero-style=catalog]) .bgimage{min-height:475px}@media(min-width: 45em)and (max-width: 59.99em){:host([hero-style=catalog]){min-height:450px}:host([hero-style=catalog]) [part=hero-content]{padding-bottom:var(--lumo-space-xl);padding-top:calc(var(--lumo-space-l) * 3)}:host([hero-style=catalog]) .bgimage{background-position:right -225px top 10px;background-size:700px;min-height:450px}}@media(min-width: 60em){:host([hero-style=catalog]){min-height:450px}:host([hero-style=catalog]) [part=hero-content]{padding-bottom:var(--lumo-space-xl);padding-top:calc(var(--lumo-space-l) * 3)}:host([hero-style=catalog]) .bgimage{background-size:800px;min-height:450px}}`;customElements.define("cxl-marketing-hero",class extends le{static get properties(){return{backgroundImage:{type:String,attribute:"background-image"},backgroundColor:{type:String,attribute:"background-color"},heroStyle:{type:String,attribute:"hero-style"},video:{type:String},videoOpened:{type:Boolean}}}static get styles(){return[ls,Os]}constructor(){super(),this._boundDialogRenderer=this.dialogRenderer.bind(this)}render(){return R`
      <div class="wrap">
        <slot name="topnav"></slot>
        <div class="bgimage"></div>

        <div class="flex">
          <div class="column" part="hero-content">
            <slot></slot>
          </div>

          ${"video"===this.heroStyle?R`
                <div class="video column">
                  <div class="video-image">
                    <slot name="video"></slot>
                  </div>
                </div>

                <vaadin-dialog
                  id="video"
                  theme="video"
                  ?opened="${this.videoOpened}"
                  @opened-changed="${this._onOpenedChanged}"
                  .renderer="${this._boundDialogRenderer}"
                >
                </vaadin-dialog>
              `:""}
        </div>

        <slot name="bottomnav"></slot>
        <slot name="catalog-search"></slot>
      </div>

      ${"waves"===this.heroStyle?R`
            <svg class="waves" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2054 128.79c-106.66 2.043-211.23 3.9-317.46 12.811-138.06 11.581-273.38 4.22-407.8-23.61C1134.57 77.796 984.18 17.54 742.28 14.259 565.44 11.857 259.72 7.614 0 0v246.37h2560c-65.21-27.369-126.32-63.768-195.36-84.649-98.3-29.68-205.7-34.945-310.64-32.932z"
                fill="#fff"
              ></path>
            </svg>
          `:""}
    `}firstUpdated(){this.shadowRoot.querySelector(".wrap .bgimage").style.backgroundImage=`url(${this.backgroundImage})`,this.style.backgroundColor=this.backgroundColor,"waves"===this.heroStyle&&document.querySelector('cxl-marketing-nav[nav-type="bottomnav"]').setAttribute("waves",""),this.video&&this.shadowRoot.querySelector(".video-image").addEventListener("click",()=>{this.openVideo()})}_onOpenedChanged(e){this.videoOpened=e.detail.value}openVideo(){this.videoOpened=!0}dialogRenderer(e){I(R`
        <iframe
          src="${this.video}"
          width="800"
          height="440"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      `,e)}});var Ps=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{background:var(--lumo-white);border:1px solid var(--lumo-contrast-30pct);border-radius:var(--lumo-border-radius-s);box-shadow:var(--lumo-box-shadow-s);box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;font-family:var(--lumo-font-family);font-size:var(--lumo-font-size-m);height:auto;line-height:var(--lumo-line-height-xs);max-width:100%;min-width:270px;padding:var(--lumo-space-l);text-align:left;width:auto}:host header{align-items:center;display:flex;flex-direction:row;margin-bottom:var(--lumo-space-m)}:host header ::slotted([part=thumbnail]){background-position:center;background-size:cover;border-radius:50%;height:calc(var(--lumo-space-xl) * 1.5);line-height:calc(var(--lumo-space-xl) * 1.5);margin:0;margin-right:var(--lumo-space-l);text-align:center;width:calc(var(--lumo-space-xl) * 1.5)}:host header [part=header-right]{display:flex;flex-direction:column}:host header [part=header-right] ::slotted(img){height:30px !important}:host header [part=header-right] ::slotted(small){font-size:var(--lumo-font-size-s) !important}:host footer{display:flex;flex-direction:column;font-size:var(--lumo-font-size-s) !important;margin-top:auto;padding-top:var(--lumo-space-l)}:host ::slotted(h2){font-size:var(--lumo-font-size-l) !important;margin:0 !important}:host ::slotted(small){font-size:var(--lumo-font-size-m) !important;margin-top:var(--lumo-space-xs)}:host ::slotted([slot=content]){font-family:var(--lumo-font-family) !important;font-size:var(--lumo-font-size-m) !important;line-height:var(--lumo-font-size-xl) !important;margin-top:var(--lumo-space-l) !important}:host(:hover){border-color:var(--lumo-primary-color);box-shadow:none}@media(min-width: 45em){:host{margin-bottom:var(--lumo-space-l)}}:host([theme~=no-padding]){padding:0}:host([theme~=no-header]) header{display:none}:host([theme~=no-header]) ::slotted([slot=content]){margin-top:0 !important;padding-top:0 !important}:host([theme~=no-border]){border:0;box-shadow:none}:host([theme~=no-shadow]){box-shadow:none}`;class Ts extends le{static get properties(){return{}}static get styles(){return[Ps]}render(){return R`
      <header>
        <slot name="thumbnail"></slot>
        <div part="header-right">
          <slot name="header-right"></slot>
        </div>
      </header>
      <slot name="title"></slot>
      <slot name="content"></slot>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","article")}}var zs=n(0),Ls=n.n(zs),Ns=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}[data-simplebar]{align-content:flex-start;align-items:flex-start;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;position:relative}.simplebar-wrapper{height:inherit;max-height:inherit;max-width:inherit;overflow:hidden;width:inherit}.simplebar-mask{bottom:0;direction:inherit;height:auto !important;left:0;margin:0;overflow:hidden;padding:0;position:absolute;right:0;top:0;width:auto !important;z-index:0}.simplebar-offset{bottom:0;box-sizing:inherit !important;direction:inherit !important;left:0;margin:0;-webkit-overflow-scrolling:touch;padding:0;position:absolute;resize:none !important;right:0;top:0}.simplebar-content-wrapper{box-sizing:border-box !important;direction:inherit;display:block;height:100%;max-height:100%;max-width:100%;overflow:auto;position:relative;visibility:visible;width:auto}.simplebar-content::before,.simplebar-content::after{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;pointer-events:none;width:100%}.simplebar-height-auto-observer-wrapper{box-sizing:inherit !important;flex-basis:0;flex-grow:inherit;flex-shrink:0;float:left;height:100%;margin:0;max-height:1px;max-width:1px;overflow:hidden;padding:0;pointer-events:none;position:relative;width:inherit;z-index:-1}.simplebar-height-auto-observer{box-sizing:inherit;display:block;height:1000%;left:0;min-height:1px;min-width:1px;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;width:1000%;z-index:-1}.simplebar-track{bottom:0;overflow:hidden;pointer-events:none;position:absolute;right:0;z-index:1}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{min-height:10px;position:absolute;right:2px;width:7px}.simplebar-scrollbar::before{background:#000;border-radius:7px;content:"";left:0;opacity:0;position:absolute;right:0;transition:opacity .2s linear}.simplebar-track .simplebar-scrollbar.simplebar-visible::before{opacity:.5;transition:opacity 0s linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar::before{bottom:2px;top:2px}.simplebar-track.simplebar-horizontal{height:11px;left:0}.simplebar-track.simplebar-horizontal .simplebar-scrollbar::before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{height:7px;left:0;min-height:0;min-width:10px;right:auto;top:2px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{left:0;right:auto}.hs-dummy-scrollbar-size{direction:rtl;height:500px;opacity:0;overflow-x:scroll;overflow-y:hidden;position:fixed;visibility:hidden;width:500px}.simplebar-vertical{background:rgba(227,227,227,.42);border-radius:8px;-webkit-transition:all .1s;transition:all .1s}.simplebar-vertical .simplebar-scrollbar{-webkit-transition:all .1s;transition:all .1s}.simplebar-vertical .simplebar-scrollbar.simplebar-visible::before{background:var(--lumo-primary-color);border-radius:8px;opacity:1}.simplebar-vertical.simplebar-hover{background:rgba(227,227,227,.42);width:17px}.simplebar-vertical.simplebar-hover .simplebar-scrollbar{width:13px}.simplebar-horizontal{background:rgba(227,227,227,.42);border-radius:8px;-webkit-transition:all .1s;transition:all .1s}.simplebar-horizontal .simplebar-scrollbar{-webkit-transition:all .1s;transition:all .1s}.simplebar-horizontal .simplebar-scrollbar.simplebar-visible::before{background:var(--lumo-primary-color);border-radius:8px;opacity:1}.simplebar-horizontal.simplebar-hover{background:rgba(227,227,227,.42);height:14px}.simplebar-horizontal.simplebar-hover .simplebar-scrollbar{height:10px}.simplebar-wrapper{margin-bottom:20px !important}@media(min-width: 45em){.simplebar-wrapper{margin-bottom:0 !important}}:host([columns="2"]) .grid-container{margin:0 var(--lumo-space-l)}@media(min-width: 60em){:host([columns="2"]) .grid-container .wrap{padding:0 calc(var(--lumo-space-l) * 5)}}@media(min-width: 45em){:host .grid{display:grid;grid-gap:var(--lumo-space-l);grid-template-columns:repeat(auto-fill, minmax(265px, 1fr))}:host .grid-container .wrap{padding:0}:host ::slotted(*){max-width:100%}}:host([flow=horizontal]) .wrap,:host([flow=auto]) .wrap{padding:0;position:relative}:host([flow=horizontal]) .grid,:host([flow=auto]) .grid{display:flex;flex-direction:row;position:relative;width:100%}:host([flow=horizontal]) .grid ::slotted(*),:host([flow=auto]) .grid ::slotted(*){margin-right:var(--lumo-space-l)}`;customElements.define("cxl-card-grid",class extends le{static get properties(){return{flow:{type:String,reflect:!0},columns:{type:Number},simplebarObject:{type:Object},originalGridContent:{type:String}}}static get styles(){return[ls,Ns]}render(){return R`
      <div class="grid-container">
        <div class="wrap">
          <div class="grid">
            <slot></slot>
          </div>
        </div>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","article");let e=this.shadowRoot.querySelector(".grid-container");this.originalGridContent=e.innerHTML,"horizontal"===this.flow&&this._initSimplebar();const t=this;if(!this.flow||"auto"===this.flow){const n=window.matchMedia("(max-width: 45em)");n.matches&&(this.flow="auto",this._initSimplebar(e)),n.addListener(function(n){e=t.shadowRoot.querySelector(".grid-container"),n.matches?(t.flow="auto",t._initSimplebar(e)):t._destroySimplebar(e)})}this._setGridColumns()}_setGridColumns(){this.columns&&(this.shadowRoot.querySelector(".grid").style.gridTemplateColumns=`repeat(${this.columns}, minmax(260px, 1fr))`)}_destroySimplebar(e){if(this.flow=null,!this.simplebarObject)return;this.simplebarObject=null,e.parentNode&&e.parentNode.removeChild(e);const t=document.createElement("div");t.classList.add("grid-container"),t.innerHTML=this.originalGridContent,this.shadowRoot.appendChild(t),this._setGridColumns()}_initSimplebar(){const e=this.shadowRoot.querySelector(".grid-container");this.simplebarObject=new Ls.a(e,{forceVisible:"x",autoHide:!1});const t=document.createElement("div");t.classList.add("wrap");const n=this.shadowRoot.querySelector(".simplebar-track.simplebar-horizontal");n.parentNode.insertBefore(t,n),t.appendChild(n)}});customElements.define("cxl-course-card",class extends Ts{static get styles(){return[super.styles]}});var Ms=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{min-width:290px;width:100%}:host header{border-bottom:1px solid var(--lumo-shade-10pct);margin-bottom:0;padding-bottom:var(--lumo-space-m)}:host footer{display:contents}`;customElements.define("cxl-lesson-card",class extends Ts{static get styles(){return[super.styles,Ms]}});var Is=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{background-color:var(--lumo-black);color:var(--lumo-white)}:host header ::slotted([part=thumbnail]){border-radius:0;height:calc(var(--lumo-space-xl) * 2.5);margin-right:0;width:100%}:host ::slotted([slot=title]){color:var(--lumo-white) !important}:host footer ::slotted([slot=footer]){color:var(--lumo-primary-color) !important}`;customElements.define("cxl-minidegree-card",class extends Ts{static get styles(){return[super.styles,Is]}});customElements.define("cxl-testimonial-card",class extends Ts{static get styles(){return[super.styles]}});const Rs=jr`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Rs.content);const js=Element.prototype,Ds=js.matches||js.matchesSelector||js.mozMatchesSelector||js.msMatchesSelector||js.oMatchesSelector||js.webkitMatchesSelector,Fs={getTabbableNodes:function(e){const t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t},isFocusable:function(e){return Ds.call(e,"input, select, textarea, button, object")?Ds.call(e,":not([disabled])"):Ds.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")},isTabbable:function(e){return this.isFocusable(e)&&Ds.call(e,':not([tabindex="-1"])')&&this._isVisible(e)},_normalizedTabIndex:function(e){if(this.isFocusable(e)){const t=e.getAttribute("tabindex")||0;return Number(t)}return-1},_collectTabbableNodes:function(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;const n=e,o=this._normalizedTabIndex(n);let i,r=o>0;o>=0&&t.push(n),i="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children;for(let e=0;e<i.length;e++)r=this._collectTabbableNodes(i[e],t)||r;return r},_isVisible:function(e){let t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)},_sortByTabIndex:function(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),o=this._sortByTabIndex(e.slice(0,n)),i=this._sortByTabIndex(e.slice(n));return this._mergeSortByTabIndex(o,i)},_mergeSortByTabIndex:function(e,t){const n=[];for(;e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)},_hasLowerTabOrder:function(e,t){const n=Math.max(e.tabIndex,0),o=Math.max(t.tabIndex,0);return 0===n||0===o?o>n:n>o}};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let qs=0;const Bs={},Hs=e=>{const t=Bs[e]||Vs(e);return document.createElement(t)},Vs=e=>{const t=`vaadin-overlay-content-${++qs}`,n=document.createElement("template"),o=document.createElement("style");o.textContent=":host { display: block; }"+e,n.content.appendChild(o),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(n,t);const i=(()=>(class extends HTMLElement{static get is(){return t}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(n.content,!0)))}}))();return customElements.define(i.is,i),Bs[e]=t,t};class Ws extends(us(Dr)){static get template(){return jr`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new Ki(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,t=window.innerWidth>e,n=document.documentElement.clientHeight;t&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",n-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),qi(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);const e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){const n=`__${e}Handler`,o=()=>{t(),this.removeEventListener("animationend",o),delete this[n]};this[n]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.setAttribute("opening","");const e=()=>{this.removeAttribute("opening"),document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.modeless||this._enterModalState()};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this.setAttribute("closing","");const e=()=>{if(this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this._exitModalState(),document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.removeAttribute("closing"),this.restoreFocusOnClose&&this.__restoreFocusNode){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}};this._shouldAnimate()?this._enqueueAnimation("closing",e):e()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof Ws)}get _last(){return this===Ws.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Ws.__attachedInstances.forEach(e=>{e===this||e.hasAttribute("opening")||e.hasAttribute("closing")||(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Ws.__attachedInstances;let t;for(;(t=e.pop())&&(t===this||(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),t.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Lr(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const n=e._templateRoot||(e._templateRoot=e.getRootNode());if(n!==document){const e=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let t=Array.from(n.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(e){const e=window.ShadyCSS.ScopingShim._styleInfoForNode(n.host);e&&(t+=e._getStyleRules().parsedCssText,t+="}")}if(t=t.replace(/:host/g,":host-nomatch"))if(e){const e=Hs(t);e.id="content",e.setAttribute("part","content"),this.$.content.parentNode.replaceChild(e,this.$.content),e.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=e}else{const e=document.createElement("style");e.textContent=t,this.$.content.shadowRoot.appendChild(e),this._contentNodes.unshift(e)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this.template=void 0:n!==o&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,n,o,i,r){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const s=this._oldOwner!==n||this._oldModel!==o;this._oldModel=o,this._oldOwner=n;const a=this._oldInstanceProps!==i||this._oldTemplate!==e;this._oldInstanceProps=i,this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const c=this._oldOpened!==r;if(this._oldOpened=r,e&&a)this._stampOverlayTemplate(e,i);else if(t&&(l||c||s)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);r&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){const n=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(n)),(t+=e)>=n.length?t=0:t<0&&(t=n.length-1),n[t].focus()}_getFocusableElements(){return Fs.getTabbableNodes(this.$.overlay)}_getActiveElement(){let e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const n=e.ownerDocument;for(;t&&t!==n&&t!==this;)t=t.parentNode||t.host;return t===this}}customElements.define(Ws.is,Ws);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const $s=document.createElement("template");$s.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>\n      /*\n        NOTE(platosha): Make some min-width to prevent collapsing of the content\n        taking the parent width, e. g., <vaadin-grid> and such.\n      */\n      [part="content"] {\n        min-width: 12em; /* matches the default <vaadin-text-field> width */\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($s.content);class Us extends Ws{static get is(){return"vaadin-dialog-overlay"}}customElements.define(Us.is,Us);class Ys extends(hs(_s(Dr))){static get template(){return jr`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" with-backdrop="" theme\$="[[theme]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.2.1"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},theme:String,_contentTemplate:Object,renderer:Function,_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new Ki(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}}customElements.define(Ys.is,Ys);var Gs=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host header ::slotted([part=thumbnail]){height:calc(var(--lumo-space-xl) * 3);line-height:calc(var(--lumo-space-xl) * 3);width:calc(var(--lumo-space-xl) * 3)}:host header ::slotted([part=thumbnail])::before{background-color:var(--lumo-shade-60pct);border-radius:50%;color:var(--lumo-base-color);content:var(--lumo-icons-play);font-family:var(--lumo-icons);font-size:calc(var(--lumo-font-size-xxl) * 2);transition:padding .1s ease,background .2s ease}:host header ::slotted([part=thumbnail]:hover)::before{background-color:var(--lumo-shade-20pct);padding:calc(var(--lumo-space-l) * 1.35)}`;customElements.define("cxl-training-card",class extends Ts{static get styles(){return[super.styles,Gs]}static get properties(){return{opened:{type:Boolean},video:{type:String}}}constructor(){super(),this.addEventListener("click",()=>{this.open()}),this._boundDialogRenderer=this.dialogRenderer.bind(this)}render(){return R`
      <header>
        <slot name="thumbnail"></slot>
        <div part="header-right">
          <slot name="header-right"></slot>
        </div>
      </header>
      <slot name="title"></slot>
      <slot name="content"></slot>
      <footer>
        <slot name="footer"></slot>
      </footer>

      <vaadin-dialog
        id="video"
        theme="video"
        ?opened="${this.opened}"
        @opened-changed="${this._onOpenedChanged}"
        .renderer="${this._boundDialogRenderer}"
      >
      </vaadin-dialog>
    `}_onOpenedChanged(e){this.opened=e.detail.value}open(){this.opened=!0}dialogRenderer(e){I(R`
        <iframe
          src="${this.video}"
          width="800"
          height="440"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      `,e)}});var Xs=se`﻿body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;pointer-events:none;position:fixed;right:0;top:0;z-index:100}@media(min-width: 20em){body:before{content:"mobile ≥ 20em (20em)"}}@media(min-width: 30em){body:before{content:"mobilelandscape ≥ 30em (30em)"}}@media(min-width: 45em){body:before{content:"tablet ≥ 45em (45em)"}}@media(min-width: 60em){body:before{content:"desktop ≥ 60em (60em)"}}@media(min-width: 80em){body:before{content:"wide ≥ 80em (80em)"}}:host{grid-column-gap:10px;grid-row-gap:15px;grid-template-columns:100px 50px 100px;grid-template-rows:80px auto 80px;padding:var(--lumo-space-m) 0}:host ::slotted(*){padding:0 var(--lumo-space-l)}@media(min-width: 45em){:host{display:flex;flex-direction:row;justify-content:center}}`;customElements.define("cxl-partner-logos",class extends le{static get properties(){return{}}static get styles(){return[ls,Xs]}render(){return R`
      <slot></slot>
    `}});var Js=se`[hidden]{display:none}`;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/vr({is:"iron-request",hostAttributes:{hidden:!0},properties:{xhr:{type:Object,notify:!0,readOnly:!0,value:function(){return new XMLHttpRequest}},response:{type:Object,notify:!0,readOnly:!0,value:function(){return null}},status:{type:Number,notify:!0,readOnly:!0,value:0},statusText:{type:String,notify:!0,readOnly:!0,value:""},completes:{type:Object,readOnly:!0,notify:!0,value:function(){return new Promise(function(e,t){this.resolveCompletes=e,this.rejectCompletes=t}.bind(this))}},progress:{type:Object,notify:!0,readOnly:!0,value:function(){return{}}},aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},get succeeded(){if(this.errored||this.aborted||this.timedOut)return!1;var e=this.xhr.status||0;return 0===e||e>=200&&e<300},send:function(e){var t=this.xhr;if(t.readyState>0)return null;t.addEventListener("progress",function(e){this._setProgress({lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total}),this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this)),t.addEventListener("error",function(t){this._setErrored(!0),this._updateStatus();var n=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(n)}.bind(this)),t.addEventListener("timeout",function(t){this._setTimedOut(!0),this._updateStatus();var n=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(n)}.bind(this)),t.addEventListener("abort",function(){this._setAborted(!0),this._updateStatus();var t=new Error("Request aborted."),n=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(n)}.bind(this)),t.addEventListener("loadend",function(){if(this._updateStatus(),this._setResponse(this.parseResponse()),this.succeeded)this.resolveCompletes(this);else{var t=new Error("The request failed with status code: "+this.xhr.status),n=e.rejectWithRequest?{error:t,request:this}:t;this.rejectCompletes(n)}}.bind(this)),this.url=e.url;var n=!1!==e.async;t.open(e.method||"GET",e.url,n);var o={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[e.handleAs],i=e.headers||Object.create(null),r=Object.create(null);for(var s in i)r[s.toLowerCase()]=i[s];if(i=r,o&&!i.accept&&(i.accept=o),Object.keys(i).forEach(function(e){/[A-Z]/.test(e)&&$r._error("Headers must be lower case, got",e),t.setRequestHeader(e,i[e])},this),n){t.timeout=e.timeout;var a=e.handleAs;!e.jsonPrefix&&a||(a="text"),t.responseType=t._responseType=a,e.jsonPrefix&&(t._jsonPrefix=e.jsonPrefix)}t.withCredentials=!!e.withCredentials;var l=this._encodeBodyObject(e.body,i["content-type"]);return t.send(l),this.completes},parseResponse:function(){var e=this.xhr,t=e.responseType||e._responseType,n=!this.xhr.responseType,o=e._jsonPrefix&&e._jsonPrefix.length||0;try{switch(t){case"json":if(n||void 0===e.response)try{return JSON.parse(e.responseText)}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.response;case"xml":return e.responseXML;case"blob":case"document":case"arraybuffer":return e.response;case"text":default:if(o)try{return JSON.parse(e.responseText.substring(o))}catch(t){return console.warn("Failed to parse JSON sent from "+e.responseURL),null}return e.responseText}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},abort:function(){this._setAborted(!0),this.xhr.abort()},_encodeBodyObject:function(e,t){if("string"==typeof e)return e;var n=e;switch(t){case"application/json":return JSON.stringify(n);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(n)}return e},_wwwFormUrlEncode:function(e){if(!e)return"";var t=[];return Object.keys(e).forEach(function(n){t.push(this._wwwFormUrlEncodePiece(n)+"="+this._wwwFormUrlEncodePiece(e[n]))},this),t.join("&")},_wwwFormUrlEncodePiece:function(e){return null!=e&&e.toString?encodeURIComponent(e.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+"):""},_updateStatus:function(){this._setStatus(this.xhr.status),this._setStatusText(void 0===this.xhr.statusText?"":this.xhr.statusText)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
vr({is:"iron-ajax",hostAttributes:{hidden:!0},properties:{url:{type:String},params:{type:Object,value:function(){return{}}},method:{type:String,value:"GET"},headers:{type:Object,value:function(){return{}}},contentType:{type:String,value:null},body:{type:Object,value:null},sync:{type:Boolean,value:!1},handleAs:{type:String,value:"json"},withCredentials:{type:Boolean,value:!1},timeout:{type:Number,value:0},auto:{type:Boolean,value:!1},verbose:{type:Boolean,value:!1},lastRequest:{type:Object,notify:!0,readOnly:!0},lastProgress:{type:Object,notify:!0,readOnly:!0},loading:{type:Boolean,notify:!0,readOnly:!0},lastResponse:{type:Object,notify:!0,readOnly:!0},lastError:{type:Object,notify:!0,readOnly:!0},activeRequests:{type:Array,notify:!0,readOnly:!0,value:function(){return[]}},debounceDuration:{type:Number,value:0,notify:!0},jsonPrefix:{type:String,value:""},bubbles:{type:Boolean,value:!1},rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},get queryString(){var e,t,n=[];for(e in this.params)if(t=this.params[e],e=window.encodeURIComponent(e),Array.isArray(t))for(var o=0;o<t.length;o++)n.push(e+"="+window.encodeURIComponent(t[o]));else null!==t?n.push(e+"="+window.encodeURIComponent(t)):n.push(e);return n.join("&")},get requestUrl(){var e=this.queryString,t=this.url||"";if(e){var n=t.indexOf("?")>=0?"&":"?";return t+n+e}return t},get requestHeaders(){var e,t={},n=this.contentType;if(null==n&&"string"==typeof this.body&&(n="application/x-www-form-urlencoded"),n&&(t["content-type"]=n),"object"==typeof this.headers)for(e in this.headers)t[e]=this.headers[e].toString();return t},_onProgressChanged:function(e){this._setLastProgress(e.detail.value)},toRequestOptions:function(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},generateRequest:function(){var e=document.createElement("iron-request"),t=this.toRequestOptions();return this.push("activeRequests",e),e.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,e)).then(this._discardRequest.bind(this,e)),this.fire("iron-ajax-presend",{request:e,options:t},{bubbles:this.bubbles,cancelable:!0}).defaultPrevented?(e.abort(),e.rejectCompletes(e),e):(this.lastRequest&&this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged),e.send(t),this._setLastProgress(null),this._setLastRequest(e),this._setLoading(!0),this.fire("request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-request",{request:e,options:t},{bubbles:this.bubbles,composed:!0}),e)},_handleResponse:function(e){e===this.lastRequest&&(this._setLastResponse(e.response),this._setLastError(null),this._setLoading(!1)),this.fire("response",e,{bubbles:this.bubbles,composed:!0}),this.fire("iron-ajax-response",e,{bubbles:this.bubbles,composed:!0})},_handleError:function(e,t){this.verbose&&$r._error(t),e===this.lastRequest&&(this._setLastError({request:e,error:t,status:e.xhr.status,statusText:e.xhr.statusText,response:e.xhr.response}),this._setLastResponse(null),this._setLoading(!1)),this.fire("iron-ajax-error",{request:e,error:t},{bubbles:this.bubbles,composed:!0}),this.fire("error",{request:e,error:t},{bubbles:this.bubbles,composed:!0})},_discardRequest:function(e){var t=this.activeRequests.indexOf(e);t>-1&&this.splice("activeRequests",t,1)},_requestOptionsChanged:function(){this.debounce("generate-request",function(){null!=this.url&&this.auto&&this.generateRequest()},this.debounceDuration)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
vr({_template:jr`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,is:"iron-form",properties:{allowRedirect:{type:Boolean,value:!1},headers:{type:Object,value:function(){return{}}},withCredentials:{type:Boolean,value:!1}},attached:function(){this._form||(this._form=sr(this).querySelector("form"),this._form?(this._init(),this.async(this._saveInitialValues.bind(this),1)):this._nodeObserver=sr(this).observeNodes(function(e){for(var t=0;t<e.addedNodes.length;t++)"FORM"===e.addedNodes[t].tagName&&(this._form=e.addedNodes[t],this._init(),sr(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)}.bind(this)))},detached:function(){this._nodeObserver&&(sr(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)},_init:function(){this._form.addEventListener("submit",this.submit.bind(this)),this._form.addEventListener("reset",this.reset.bind(this)),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()},saveResetValues:function(){this._saveInitialValues(!0)},_saveInitialValues:function(e){for(var t=this._getValidatableElements(),n=0;n<t.length;n++){var o=t[n];if(!this._defaults.has(o)||e){var i={value:o.value};"checked"in o&&(i.checked=o.checked),"invalid"in o&&(i.invalid=o.invalid),this._defaults.set(o,i)}}},validate:function(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;for(var e,t=this._form.checkValidity(),n=this._getValidatableElements(),o=0;e=n[o],o<n.length;o++){var i=e;i.validate&&(t=!!i.validate()&&t)}return t},submit:function(e){if(e&&e.preventDefault(),this._form)if(this.validate()){this.$.helper.textContent="";var t=this.serializeForm();if(this.allowRedirect){for(var n in t)this.$.helper.appendChild(this._createHiddenElement(n,t[n]));this.$.helper.action=this._form.getAttribute("action"),this.$.helper.method=this._form.getAttribute("method")||"GET",this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.$.helper.submit(),this.fire("iron-form-submit")}else this._makeAjaxRequest(t)}else this.fire("iron-form-invalid")},reset:function(e){if(e&&e.preventDefault(),this._form)if(e&&"reset"===e.type&&e.target===this._form){for(var t=this._getValidatableElements(),n=0;n<t.length;n++){var o=t[n];if(this._defaults.has(o)){var i=this._defaults.get(o);for(var r in i)o[r]=i[r]}}this.fire("iron-form-reset")}else this._form.reset()},serializeForm:function(){for(var e=this._getSubmittableElements(),t={},n=0;n<e.length;n++)for(var o=this._serializeElementValues(e[n]),i=0;i<o.length;i++)this._addSerializedElement(t,e[n].name,o[i]);return t},_handleFormResponse:function(e){this.fire("iron-form-response",e.detail)},_handleFormError:function(e){this.fire("iron-form-error",e.detail)},_makeAjaxRequest:function(e){this.request||(this.request=document.createElement("iron-ajax"),this.request.addEventListener("response",this._handleFormResponse.bind(this)),this.request.addEventListener("error",this._handleFormError.bind(this))),this.request.url=this._form.getAttribute("action"),this.request.method=this._form.getAttribute("method")||"GET",this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.request.withCredentials=this.withCredentials,this.request.headers=this.headers,"POST"===this._form.method.toUpperCase()?this.request.body=e:this.request.params=e,this.fire("iron-form-presubmit",{},{cancelable:!0}).defaultPrevented||(this.request.generateRequest(),this.fire("iron-form-submit",e))},_getValidatableElements:function(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function(){return this._findElements(this._form,!1,!1)},_findElements:function(e,t,n,o){o=o||[];for(var i=sr(e).querySelectorAll("*"),r=0;r<i.length;r++)n||"slot"!==i[r].localName&&"content"!==i[r].localName?this._searchSubmittable(o,i[r],t):this._searchSubmittableInSlot(o,i[r],t);return o},_searchSubmittableInSlot:function(e,t,n){for(var o=sr(t).getDistributedNodes(),i=0;i<o.length;i++)if(o[i].nodeType!==Node.TEXT_NODE){this._searchSubmittable(e,o[i],n);for(var r=sr(o[i]).querySelectorAll("*"),s=0;s<r.length;s++)this._searchSubmittable(e,r[s],n)}},_searchSubmittable:function(e,t,n){this._isSubmittable(t,n)?e.push(t):t.root&&this._findElements(t.root,n,!0,e)},_isSubmittable:function(e,t){return!e.disabled&&(t?e.name||"function"==typeof e.validate:e.name)},_serializeElementValues:function(e){var t=e.tagName.toLowerCase();return"button"===t||"input"===t&&("submit"===e.type||"reset"===e.type)?[]:"select"===t?this._serializeSelectValues(e):"input"===t?this._serializeInputValues(e):e._hasIronCheckedElementBehavior&&!e.checked?[]:[e.value]},_serializeSelectValues:function(e){for(var t=[],n=0;n<e.options.length;n++)e.options[n].selected&&t.push(e.options[n].value);return t},_serializeInputValues:function(e){var t=e.type.toLowerCase();return("checkbox"!==t&&"radio"!==t||e.checked)&&"file"!==t?[e.value]:[]},_createHiddenElement:function(e,t){var n=document.createElement("input");return n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",t),n},_addSerializedElement:function(e,t,n){void 0===e[t]?e[t]=n:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(n))}});customElements.define("cxl-iron-form",class extends le{static get properties(){return{formMethod:{type:String,attribute:"form-method"},formAction:{type:String,attribute:"form-action"}}}static get styles(){return[ls,Js]}render(){return R`
      <iron-form>
        <form method="${this.formMethod}" action="${this.formAction}">
          <slot></slot>
        </form>
      </iron-form>

      <div part="confirmation" hidden>
        <slot name="confirmation"></slot>
      </div>
    `}firstUpdated(){}submit(){const e=this.shadowRoot.querySelector("iron-form"),t=this;if(e.validate()){let n=e.serializeForm();n.created_at=(new Date).toISOString().slice(0,10),n.source_martech_id="custom",n.source=location.host,fetch(this.formAction,{method:this.formMethod,crossDomain:!0,headers:{"Content-type":"multipart/form-data; charset=UTF-8"},data:n,processData:!1,contentType:!1}).then(function(n){n.ok&&(t.shadowRoot.querySelector('[part="confirmation"]').removeAttribute("hidden"),e.setAttribute("hidden",""))}).catch(function(e){console.log("Request failed",e)})}}});const Ks=jr`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Ks.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const Zs=e=>(class extends((e=>(class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}}))(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Qs extends(_s(Zs(us(yi(Dr))))){static get template(){return jr`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){ci(this,"down",()=>!this.disabled&&this.setAttribute("active","")),ci(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(Qs.is,Qs);const ea=document.createElement("template");ea.innerHTML='<dom-module id="lumo-item" theme-for="vaadin-item">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part="content"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ea.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ta extends(ps(us(Dr))){static get template(){return jr`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.0"}}customElements.define(ta.is,ta);const na=document.createElement("template");na.innerHTML='<dom-module id="lumo-list-box" theme-for="vaadin-list-box">\n  <template>\n    <style>\n      :host {\n        -webkit-tap-highlight-color: transparent;\n        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);\n      }\n\n      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */\n      [part="items"] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="items"] ::slotted(*) {\n        flex: none;\n      }\n\n      /* Normal item */\n\n      [part="items"] ::slotted(vaadin-item) {\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        cursor: default;\n      }\n\n      [part="items"] ::slotted(vaadin-item) {\n        outline: none;\n        border-radius: var(--lumo-border-radius);\n        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n      }\n\n      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */\n      [part="items"] ::slotted(vaadin-item)::before {\n        display: var(--_lumo-item-selected-icon-display);\n      }\n\n      /* Hovered item */\n      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */\n\n      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      /* Focused item */\n\n      [part="items"] ::slotted([focus-ring]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {\n          background-color: transparent;\n        }\n\n        [part="items"] ::slotted([focus-ring]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n\n      /* Easily add section dividers */\n\n      [part="items"] ::slotted(hr) {\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(na.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class oa extends(_s(Cs(us(Dr)))){static get template(){return jr`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.1.0"}static get properties(){return{orientation:{readOnly:!0}}}ready(){super.ready(),this.setAttribute("role","list")}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}}customElements.define(oa.is,oa);const ia=jr`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

      :host([phone]) [part="content"] {
        /* Ideally should be 100vh but iOS phone addr-bar covers view port */
        max-height: 80vh;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ia.content),
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
hi({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};const t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{const n=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,n.clientX,n.clientY)),mi("tap"))},500)},touchmove:function(e){const t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),mi("tap"))},fire:function(e,t,n){const o=this.info.sourceEvent,i=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});i.detail={x:t,y:n,sourceEvent:o},e.dispatchEvent(i),i.defaultPrevented&&o&&o.preventDefault&&o.preventDefault()}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
vr({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ra extends class extends Dr{}{static get template(){return jr`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(ra.is,ra);class sa extends ta{static get is(){return"vaadin-context-menu-item"}}class aa extends oa{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(sa.is,sa),customElements.define(aa.is,aa);const la=e=>(class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){const n=e.parentOverlay.querySelector("[expanded]");n&&n.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;const n=t.getBoundingClientRect(),o=e.$.overlay.$.content,i=getComputedStyle(o),r=this.$.overlay,s=r.hasAttribute("bottom-aligned")?n.bottom+parseFloat(i.paddingBottom):n.top-parseFloat(i.paddingTop);let a;e.$.overlay._setParentOverlay(r),r.theme?e.setAttribute("theme",r.theme):e.removeAttribute("theme"),o.style.minWidth="",document.documentElement.clientWidth-n.right>n.width?a=n.right:(a=n.left-n.width,o.style.minWidth=r.$.content.clientWidth+"px"),a=Math.max(a,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:a,y:s,children:t._item.children}}))}__itemsRenderer(e,t,n){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;const o=e.querySelector("vaadin-context-menu-list-box");o.innerHTML="",Array.from(n.detail.children||t.items).forEach(e=>{let t;"vaadin-context-menu-item"===(t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item")).localName?t.setAttribute("role","menuitem"):"hr"===t.localName&&t.setAttribute("role","separator"),t.classList.add("vaadin-menu-item"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),o.appendChild(t)})}__toggleMenuComponentAttribute(e,t,n){n?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){const t=e.querySelector("vaadin-context-menu-list-box");this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}else{const n=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${n} hidden></${n}>\n      `,Zi();const o=e.querySelector("vaadin-context-menu-list-box");this.theme&&o.setAttribute("theme",this.theme),o.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>o.setAttribute("role","menu"));const i=e.querySelector(n);i.$.overlay.modeless=!0,i.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&i.close()),i.addEventListener("opened-changed",e=>{if(!e.detail.value){const e=o.querySelector("[expanded]");e&&(e.setAttribute("aria-expanded","false"),e.removeAttribute("expanded"))}}),o.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){const n=e.target.items[e.detail.value]._item;if(!n.children){const e={value:n};t.dispatchEvent(new CustomEvent("item-selected",{detail:e}))}o.selected=null}}),i.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),i.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{37===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);const r=(e,n=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>r(e,n));else if(n){if(i.items!==n._item.children&&i.close(),!t.opened)return;n._item.children&&n._item.children.length?(n.setAttribute("aria-expanded","true"),n.setAttribute("expanded",""),this.__openSubMenu(i,n)):i.listenOn.focus()}},s=this._touch?"touchstart":"mouseover";t.$.overlay.addEventListener(s,r),t.$.overlay.addEventListener("keydown",e=>(39===e.keyCode||13===e.keyCode||32===e.keyCode)&&r(e))}}}),ca=document.createElement("template");
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/ca.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ca.content);class da extends Ws{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let n=e.bottom-t.height;const o=this.parentOverlay;if(o&&o.hasAttribute("bottom-aligned")){const e=getComputedStyle(o);n=n-parseFloat(e.bottom)-parseFloat(e.height)}return{xMax:e.right-t.width,yMax:n,left:e.left,top:e.top,width:t.width}}}customElements.define(da.is,da);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ha extends(_s(hs(la(yi(Dr))))){static get template(){return jr`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.3.10"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0)}ready(){super.ready(),this._observer=new Ki(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value)}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",this._oldListenOn=e,this._oldOpenOn=t)}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0)):document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,n,o){e!==t?this._contentTemplate=void 0:n!==o&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,n,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,o){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&n&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const n=this.$.overlay.style;n[e]=(parseInt(n[e])||0)+t+"px"}__alignOverlayPosition(){const e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));const{xMax:n,yMax:o,left:i,top:r,width:s}=e.getBoundaries(),a=this.__x||i,l=this.__y||r,c=document.documentElement.clientWidth,d=document.documentElement.clientHeight,h=e.parentOverlay;let u=!1;if(h){const n=h.$.overlay.getBoundingClientRect();if(h.hasAttribute("right-aligned")){const o=getComputedStyle(h),i=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),r=parseFloat(o.right)+n.width,a=i(h,"Left")+i(e,"Right");c-(r-a)>s&&(e.setAttribute("right-aligned",""),t.right=r-a+"px",u=!0)}}u||(a<c/2||a<n?t.left=a+"px":(t.right=Math.max(0,c-a)+"px",e.setAttribute("right-aligned",""))),l<d/2||l<o?t.top=l+"px":(t.bottom=Math.max(0,d-l)+"px",e.setAttribute("bottom-aligned",""))}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){const n="client"+t.toUpperCase(),o=e.changedTouches?e.changedTouches[0][n]:e[n];if(0===o){const n=e.target.getBoundingClientRect();return"x"===t?n.left:n.top+n.height}return o}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,n){ri[t]?ci(e,t,n):e.addEventListener(t,n)}_unlisten(e,t,n){ri[t]?di(e,t,n):e.removeEventListener(t,n)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(ha.is,ha);const ua=jr`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ua.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class pa extends(_s(us(ur([Es],Dr)))){static get template(){return jr`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        display: none;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.1.4"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",window.ShadyDOM&&window.ShadyDOM.flush(),super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),Fi(this,this._selectResponsiveStep),Fi(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"colspan"===e.attributeName&&this._invokeUpdateStyles()})}),this.__childObserver=new Ki(this,t=>{const n=["template","style","dom-repeat","dom-if"],o=Array.from(t.addedNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===n.indexOf(e.localName.toLowerCase()));o.forEach(t=>{this.__mutationObserver.observe(t,e)}),o.some(e=>e.hasAttribute("colspan"))&&this._invokeUpdateStyles()})}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(n){t&&t!==e?(console.warn(`${n.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=t):(console.warn(`${n.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition),/\b(Edge|Trident)\//.test(navigator.userAgent)&&this.offsetWidth!==this._lastOffsetWidth&&(this.updateStyles(),this._lastOffsetWidth=this.offsetWidth)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(...e){super.updateStyles(...e);const t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),n=getComputedStyle(this).direction,o="margin-"+("ltr"===n?"left":"right"),i="margin-"+("ltr"===n?"right":"left"),r=this.offsetWidth;window.ShadyDOM&&window.ShadyDOM.flush();let s=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,n,a)=>{if("br"===e.localName)return void(s=0);let l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan")));const c=(l=Math.min(l,this._columnCount))/this._columnCount;e.style.width=`calc(${99.9*c}% - ${1-c} * ${t})`,s+l>this._columnCount&&(s=0),0===s?e.style.setProperty(o,"0px"):e.style.removeProperty(o);const d=n+1,h=d<a.length&&"br"===a[d].localName;if(s+l===this._columnCount)e.style.setProperty(i,"0px");else if(h){const n=(this._columnCount-s-l)/this._columnCount;e.style.setProperty(i,`calc(${n*r}px + ${n} * ${t})`)}else e.style.removeProperty(i);s=(s+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))})}}customElements.define(pa.is,pa);const ma=jr`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      [part="input-field"] ::slotted(input):focus,
      [part="input-field"] ::slotted(textarea):focus {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(ma.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const fa=document.createElement("template");fa.innerHTML='<dom-module id="vaadin-text-field-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: "\\2003";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part="label"]:empty {\n        display: none;\n      }\n\n      [part="input-field"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part="input-field"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part="input-field"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part="value"],\n      [part="input-field"] ::slotted(input),\n      [part="input-field"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part="input-field"] ::slotted([part="value"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part="input-field"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part="value"]::-ms-clear,\n      [part="input-field"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part="clear-button"] {\n        cursor: default;\n      }\n\n      [part="clear-button"]::before {\n        content: "✕";\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(fa.content);const va={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},ba={DEFAULT:"default",ACCESSIBLE:"accessible"},ga=e=>(class extends(Zs(e)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:""},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_labelId:{type:String},_errorId:{type:String}}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+va.default.join(", ")+")","_hostAccessiblePropsChanged("+va.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId)"]}get focusElement(){if(!this.shadowRoot)return;const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){const e=this.inputElement;if(e.value.length>0&&!this.checkValidity())return e.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=To.debounce(this._inputDebouncer,Ln.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value}_stateChanged(e,t,n,o){!e&&!t&&n&&o?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(this._valueClearing)return;const t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput?this.__userInput=!1:(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}_onSlotChange(){const e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(ba).map(e=>ba[e]).forEach(e=>this._propagateHostAttributes(va[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,ba.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,ba.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){const n=this.inputElement,o=va[t];"accessible"===t?o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n),this._setOrToggleAttribute(`aria-${t}`,e[o],n)}):o.forEach((t,o)=>{this._setOrToggleAttribute(t,e[o],n)})}_setOrToggleAttribute(e,t,n){e&&n&&(t?n.setAttribute(e,"boolean"==typeof t?"":t):n.removeAttribute(e))}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}ready(){super.ready(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this);const e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=ga._uniqueId=1+ga._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{this.inputElement.setSelectionRange(0,9999)}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);const t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;const n=new Event("change",{bubbles:!this._slottedInput});n.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(n)}_onKeyDown(e){27===e.keyCode&&this.clearButtonVisible&&this.clear()}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,n){this._setOrToggleAttribute("aria-describedby",t&&e?n:void 0,this.inputElement)}_getActiveLabelId(e,t){this._setOrToggleAttribute("aria-labelledby",e?t:void 0,this.inputElement)}_getErrorMessageAriaHidden(e,t,n){return(!(t&&e?n:void 0)).toString()}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){const e="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(t=>{t.style[e]="visible",t.style[e]=""})}}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ya extends(_s(ga(us(Dr)))){static get template(){return jr`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.4.4"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(ya.is,ya),window.addEventListener("DOMContentLoaded",function(){console.log("ready");const e=document.querySelectorAll("[open-download-dialog]"),t=document.querySelector("vaadin-dialog#caseStudies");console.log(e,t),e.forEach(e=>{console.log("click"),e.addEventListener("click",function(){t.opened=!0})})})}]);