/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"2534745","c":[".tk-share-techmono","\"share-techmono\",sans-serif",".tk-proxima-nova","\"proxima-nova\",sans-serif"],"f":"//use.typekit.net/c/32f9fa/1w;proxima-nova,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,gbh:W:i1,gbm:W:i4,gbt:W:i7,gby:W:i9,gbg:W:n1,gbl:W:n4,gbs:W:n7,gbx:W:n9;share-techmono,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,TGJ:W:n4/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bf31e5b2a62a22e335ed34a09c9781632f698bc38583eb0c2b31573f95d6eac31c3dbeab18570553038924816e5c0ed6573616a620814c6655668facb38a0f198a8c79fa071bacad5d1908aed2b319fe0ef23fdae1052fde25864aab400ee2b2d711250a28a19b2b4bd343215df022068dc3895f2ea5b51cb787a2e2116d21086447a134943fa5635b3ae8460e332ff","fi":[38,137,138,139,140,171,172,175,176],"fn":["proxima-nova",["i1","i4","i7","i9","n1","n4","n7","n9"],"share-techmono",["n4"]],"ht":"tk","js":"1.14.0","k":"//use.typekit.net/{id}.js","kt":"zxo8nth","l":"typekit","p":"//p.typekit.net/p.gif?s=1&k=zxo8nth&ht=tk&h={host}&f=38.137.138.139.140.171.172.175.176&a=2534745&_={_}","ps":1,"w":"zxo8nth"};
/*{"k":"1.14.0","last_published":"2015-09-23 20:28:30 UTC","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.qa=a;this.X=b||a;this.B=this.X.document}da.prototype.createElement=function(a,b,c){a=this.B.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.B.createTextNode(c));return a};function ea(a,b,c){a=a.B.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.B.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){if("string"===typeof a.Ha)return a.Ha;var b=a.X.location.protocol;"about:"==b&&(b=a.qa.location.protocol);return"https:"==b?"https:":"http:"}function ia(a){return a.X.location.hostname||a.qa.location.hostname}
function ja(a,b,c,d){function e(a){for(var c=0;c<g.length;c++)if(g[c].href&&-1!==g[c].href.indexOf(b)){a();return}setTimeout(function(){e(a)},0)}var f=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),g=a.B.styleSheets,k=!1;f.onload=function(){k||(k=!0,c&&c(null))};f.onerror=function(){k||(k=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",f);d&&e(function(){f.media="all"})}
function ka(a,b,c){var d=a.B.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function la(a){this.Fa=a||"-"}
la.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Fa)};function ma(a,b){this.e=a;this.u=a.X.document.documentElement;this.$=b;this.p="wf";this.o=new la("-");this.Aa=!1!==b.events;this.J=!1!==b.classes}function na(a){if(a.J){var b=ga(a.u,a.o.h(a.p,"active")),c=[],d=[a.o.h(a.p,"loading")];b||c.push(a.o.h(a.p,"inactive"));l(a.u,c,d)}m(a,"inactive")}
function m(a,b,c){if(a.Aa&&a.$[b])if(c)a.$[b](c.getName(),n(c));else a.$[b]()}function q(a,b){this.Y=a;this.ga=4;this.Z="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Z=c[1],this.ga=parseInt(c[2],10))}q.prototype.getName=function(){return this.Y};function n(a){return a.Z+a.ga}function s(a,b){this.e=a;this.G=b;this.r=this.e.createElement("span",{"aria-hidden":"true"},this.G)}function t(a){ea(a.e,"body",a.r)}
function u(a){var b;b=[];for(var c=a.Y.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Z?c="oblique":"i"===a.Z&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.ga+"00")+";")}
s.prototype.remove=function(){var a=this.r;a.parentNode&&a.parentNode.removeChild(a)};
function oa(a,b,c,d,e,f,g){this.ha=a;this.Ea=b;this.e=c;this.A=d;this.G=g||"BESbswy";this.I={};this.fa=e||3E3;this.ra=f||null;this.R=this.Q=this.P=this.O=null;this.O=new s(this.e,this.G);this.P=new s(this.e,this.G);this.Q=new s(this.e,this.G);this.R=new s(this.e,this.G);a=new q(this.A.getName()+",serif",n(this.A));a=u(a);this.O.r.style.cssText=a;a=new q(this.A.getName()+",sans-serif",n(this.A));a=u(a);this.P.r.style.cssText=a;a=new q("serif",n(this.A));a=u(a);this.Q.r.style.cssText=a;a=new q("sans-serif",
n(this.A));a=u(a);this.R.r.style.cssText=a;t(this.O);t(this.P);t(this.Q);t(this.R)}var w={Sa:"serif",Ra:"sans-serif"},pa=null;function qa(){if(null===pa){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);pa=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return pa}oa.prototype.start=function(){this.I.serif=this.Q.r.offsetWidth;this.I["sans-serif"]=this.R.r.offsetWidth;this.Ka=ca();ra(this)};
function sa(a,b,c){for(var d in w)if(w.hasOwnProperty(d)&&b===a.I[w[d]]&&c===a.I[w[d]])return!0;return!1}function ra(a){var b=a.O.r.offsetWidth,c=a.P.r.offsetWidth,d;(d=b===a.I.serif&&c===a.I["sans-serif"])||(d=qa()&&sa(a,b,c));d?ca()-a.Ka>=a.fa?qa()&&sa(a,b,c)&&(null===a.ra||a.ra.hasOwnProperty(a.A.getName()))?ta(a,a.ha):ta(a,a.Ea):ua(a):ta(a,a.ha)}function ua(a){setTimeout(h(function(){ra(this)},a),50)}
function ta(a,b){setTimeout(h(function(){this.O.remove();this.P.remove();this.Q.remove();this.R.remove();b(this.A)},a),0)}function va(a,b,c){this.e=a;this.F=b;this.ba=0;this.va=this.pa=!1;this.fa=c}va.prototype.Ba=function(a){var b=this.F;b.J&&l(b.u,[b.o.h(b.p,a.getName(),n(a).toString(),"active")],[b.o.h(b.p,a.getName(),n(a).toString(),"loading"),b.o.h(b.p,a.getName(),n(a).toString(),"inactive")]);m(b,"fontactive",a);this.va=!0;wa(this)};
va.prototype.Ca=function(a){var b=this.F;if(b.J){var c=ga(b.u,b.o.h(b.p,a.getName(),n(a).toString(),"active")),d=[],e=[b.o.h(b.p,a.getName(),n(a).toString(),"loading")];c||d.push(b.o.h(b.p,a.getName(),n(a).toString(),"inactive"));l(b.u,d,e)}m(b,"fontinactive",a);wa(this)};function wa(a){0==--a.ba&&a.pa&&(a.va?(a=a.F,a.J&&l(a.u,[a.o.h(a.p,"active")],[a.o.h(a.p,"loading"),a.o.h(a.p,"inactive")]),m(a,"active")):na(a.F))}function x(){this.K=this.T=-1}x.prototype.now=function(){return(new Date).getTime()};
x.prototype.start=function(){this.T=this.now();this.K=-1};x.prototype.stop=function(){this.K=this.now()};function xa(){var a=[{name:"font-family",value:y.c[z+1]}];this.Ia=[y.c[z]];this.ka=a}function ya(a){for(var b=a.Ia.join(","),c=[],d=0;d<a.ka.length;d++){var e=a.ka[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function A(a,b,c,d){this.n=null!=a?a:null;this.w=null!=b?b:null;this.S=null!=c?c:null;this.h=null!=d?d:null}var za=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
A.prototype.compare=function(a){return this.n>a.n||this.n===a.n&&this.w>a.w||this.n===a.n&&this.w===a.w&&this.S>a.S?1:this.n<a.n||this.n===a.n&&this.w<a.w||this.n===a.n&&this.w===a.w&&this.S<a.S?-1:0};function B(a,b){return-1===a.compare(b)}function D(a,b){return 0===a.compare(b)||1===a.compare(b)}function Aa(a,b){return 0===a.compare(b)||-1===a.compare(b)}function E(a,b){return 0===a.compare(b)}A.prototype.toString=function(){return[this.n,this.w||"",this.S||"",this.h||""].join("")};
function F(a){a=za.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new A(b,c,d,e)}function G(a,b,c,d,e,f,g){this.Y=a;this.q=b;this.D=c;this.C=d;this.m=e;this.g=f;this.ca=g}G.prototype.getName=function(){return this.Y};function Ba(a,b){this.b=a;this.M=b}
var Ca=new G("Unknown",new A,"Unknown",new A,"Unknown",new A,void 0);
Ba.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=H(this);var b=F(I(this)),c=null,d=null,e=null,e=J(this.b,/Trident\/([\d\w\.]+)/,1),f=K(this.M),c=-1!=this.b.indexOf("MSIE")?F(J(this.b,/MSIE ([\d\w\.]+)/,1)):F(J(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=F(e)):(d="Unknown",e=new A);a=new G("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Edge/"))a=H(this),b=F(I(this)),c=F(J(this.b,/Edge\/([\d\w\.]+)/,1)),a=new G("Edge",c,"Edge",c,a,b,K(this.M));
else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=F(J(this.b,/Presto\/([\d\w\.]+)/,1)),c=F(I(this)),d=K(this.M),null!==b.n?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=F(J(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=F(J(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new G("OperaMini",f,a,b,H(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=F(J(this.b,/Version\/([\d\.]+)/,1)),null!==f.n)){a=new G("Opera",f,a,b,H(this),c,d);break a}f=F(J(this.b,/Opera[\/ ]([\d\.]+)/,1));
a=null!==f.n?new G("Opera",f,a,b,H(this),c,d):new G("Opera",new A,a,b,H(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=Da(this):/AppleWeb(K|k)it/.test(this.b)?a=Da(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new A,c=F(I(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=F(J(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=F(J(this.b,/rv:([^\)]+)/,1)),a=new G(a,b,"Gecko",d,H(this),c,K(this.M))):a=Ca;return a};
function H(a){var b=J(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=J(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function I(a){var b=J(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=J(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=J(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=J(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=J(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Da(a){var b=H(a),c=F(I(a)),d=F(J(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new A,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=J(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=J(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=J(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=J(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=J(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=J(a.b,/PhantomJS\/([\d.]+)/,1));f=F(f);return new G(e,f,"AppleWebKit",d,b,c,K(a.M))}function J(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function K(a){if(a.documentMode)return a.documentMode}function Ea(a){this.e=a}
Ea.prototype.toString=function(){return encodeURIComponent(ia(this.e))};function Fa(a,b){this.s=a;this.t=b}Fa.prototype.toString=function(){for(var a=[],b=0;b<this.t.length;b++)for(var c=this.t[b],d=c.H(),c=c.H(this.s),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function N(a){this.Ma=a}
N.prototype.h=function(a,b){var c=a||{},d=this.Ma.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(b?"http:":"https:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ga(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Ha(a,b){this.N=a;this.W=b;this.na={};this.ma={}}Ha.prototype.H=function(a){return a?(this.na[a]||this.W).slice(0):this.W.slice(0)};
function Ia(a,b,c){for(var d=[],e=a.N.split(",")[0].replace(/"|'/g,""),f=a.H(),g,k=[],C={},r=0;r<f.length;r++)g=f[r],0<g.length&&!C[g]&&(C[g]=!0,k.push(g));c=c.ua?c.ua(e,k,d):k;a.na[b]=c;a.ma[b]=d}function Ja(a,b){for(var c=a.H(b),d=a.ma[b]||[],e=[],f=0;f<c.length;f++)e.push(new q(a.N,c[f]));for(f=0;f<d.length;f++)if(c=d[f].N,c!==a.N)for(var g=d[f].H(),k=0;k<g.length;k++)e.push(new q(c,g[k]));return e}function Ka(a,b){this.N=a;this.W=b}Ka.prototype.H=function(){return this.W};
function La(a,b,c,d,e,f,g){this.Ja=a;this.Da=b;this.V=c||[];this.xa=d||null;this.La=e||null;this.version=f||null;this.za=g||null}
La.prototype.send=function(a,b,c){var d=new N("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.za||"").toString().substr(0,20));a=encodeURIComponent(ia(a));var f=[],g=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var g=window.Typekit.fonts,k=0;k<this.V.length;k++){for(var C=!1,r=0;r<g.length;r++)if(this.V[k]===g[r]){C=
!0;break}C||(f.push(this.V[k]),g.push(this.V[k]))}f.length&&Ma(d.h({service:this.Ja,token:this.La,app:e,hosting:this.Da,host:a,variations:f.join("."),account:this.xa,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Ma(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Na(){this.ia=this.wa=this.L=this.da=this.ea=!0}function O(a){return"Windows"===a.m}
function Oa(a){return O(a)&&D(a.g,new A(6,1))}function P(a){return O(a)&&E(a.g,new A(5,1))||O(a)&&E(a.g,new A(5,2))||O(a)&&E(a.g,new A(6,0))||Oa(a)}function Q(a){return"Macintosh"===a.m&&(D(a.g,new A(10,4))||null===a.g.n)}function Pa(a,b){return b.ea&&("iPhone"===a.m||"iPod"===a.m)&&D(a.g,new A(4,2))&&B(a.g,new A(5))}function Ra(a,b){return b.ea&&("iPhone"===a.m||"iPod"===a.m)&&D(a.g,new A(5))}function Sa(a,b){return b.da&&"iPad"===a.m&&D(a.g,new A(4,2))&&B(a.g,new A(5))}
function Ta(a,b){return b.da&&"iPad"===a.m&&D(a.g,new A(5))}function R(a,b){return b.L&&"Android"===a.m}function Ua(a,b){return R(a,b)&&D(a.g,new A(2,2))&&B(a.g,new A(3,1))}function Va(a,b){return R(a,b)&&D(a.g,new A(3,1))&&B(a.g,new A(4,1))}function S(a){return"Linux"===a.m||"Ubuntu"===a.m}function Wa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.D||"Unknown"===a.getName()&&"AppleWebKit"===a.D&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}
function Xa(a){return"Chrome"===a.getName()&&D(a.q,new A(6))&&Aa(a.q,new A(35))}function Ya(a){return"Chrome"===a.getName()&&D(a.q,new A(36))}function Za(a){return"BuiltinBrowser"===a.getName()}function $a(a){this.ua=a}function ab(a,b){return b}
var U={Pa:"a",Ua:"d",Oa:"i",Qa:"j",Na:"k",Ta:"l",NONE:"x"},V={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.D&&D(a.C,new A(525,13))&&B(a.C,new A(534,50))&&(P(a)||Q(a))||Za(a)&&(Ua(a,b)||R(a,b)&&D(a.g,new A(4,1)))||b.L&&"Silk"===a.getName()&&B(a.q,new A(2))&&(Ua(a,b)||Q)||b.L&&"Silk"===a.getName()&&D(a.q,new A(2))&&R(a,b)&&D(a.g,new A(4,1))||Wa(a)&&(Sa(a,b)||Pa(a,b))||Xa(a)&&(Sa(a,b)||Pa(a,b))||Ya(a)&&(Sa(a,b)||Pa(a,b))||"AdobeAIR"===a.getName()&&D(a.q,new A(2,5))&&(O(a)&&null===
a.g.n||S(a)||Q(a))},d:function(a,b){var c;(c=Xa(a)&&(P(a)||S(a)||Q(a)||R(a,b)||"CrOS"===a.m||"CrKey"===a.m||Ta(a,b)||Ra(a,b))||Ya(a)&&(Ta(a,b)||Ra(a,b)))||(c="Gecko"===a.D&&1===a.C.compare(new A(1,9,1))&&Aa(a.C,new A(38))&&(P(a)||S(a)||Q(a)||R(a,b)));(c=c||"Safari"===a.getName()&&"AppleWebKit"===a.D&&D(a.C,new A(534,50))&&(P(a)||Q(a))||Wa(a)&&(Ta(a,b)||Ra(a,b)))||(c="Opera"===a.getName()&&D(a.q,new A(11,10))&&Aa(a.q,new A(22))&&(P(a)||S(a)||Q(a)||R(a,b)));return c||"MSIE"===a.getName()&&9<=a.ca&&
(Oa(a)||O(a)&&E(a.g,new A(6,0)))||"Edge"===a.getName()&&Oa(a)||"MSIE"===a.getName()&&b.wa&&"Windows Phone"===a.m&&D(a.g,new A(8))||Za(a)&&(b.ia&&"BlackBerry"===a.m&&D(a.g,new A(10))||S(a))},j:function(a,b){return Za(a)&&Va(a,b)||b.L&&"Silk"===a.getName()&&D(a.q,new A(2))&&(Va(a,b)||S(a))},i:function(a){return"MSIE"===a.getName()&&D(a.q,new A(6,0))&&(void 0===a.ca||9>a.ca)&&P(a)},l:function(a,b){return Ya(a)&&(P(a)||S(a)||Q(a)||R(a,b)||"CrOS"===a.m||"CrKey"===a.m)||"Gecko"===a.D&&D(a.C,new A(39))&&
(P(a)||S(a)||Q(a)||R(a,b))||"Opera"===a.getName()&&D(a.q,new A(23))&&(P(a)||S(a)||Q(a)||R(a,b))},x:function(){return!1}},bb={};
bb.i=new $a(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ka(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var W={};W.a=W.d=W.l=W.j=function(){return[]};W.i=function(a,b,c){return[new Ea(a),new Fa(b,c)]};W.k=function(a){return[new Ea(a)]};function cb(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.s="x";this.ja=this.b=null;this.t=[];this.U=[];this.oa=this.aa=null;this.la=!1}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.s};
X.prototype.init=function(){if(0<this.U.length){for(var a=[],b=0;b<this.U.length;b++)a.push(ya(this.U[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",k=f.hostname||this.oa;a=f.timeout;c=!!f.async;var C=!1!==f.events,r=null,L=new x,M=new x;f.active&&(d=f.active);f.active=function(){M.stop();e.ta&&e.ta.send(e.e,-1!==L.T&&-1!==L.K?L.K-L.T:-1,-1!==M.T&&-1!==M.K?M.K-M.T:-1);d()};r=new ma(this.e,f);if(this.s){for(var f=bb[this.s]||new $a(ab),p=0;p<this.t.length;p++)Ia(this.t[p],this.s,f);this.aa&&(f=cb(this.e,this.s,this.t),f=Ga(this.s,f),f.contextPath=g,k&&(f.hostname=
k),g=this.aa.h(f,this.la?"https:"!==ha(this.e):!1),L.start(),ja(this.e,g,function(){L.stop();M.start()},c));if(C){for(var T=[],Qa={},v=new va(this.e,r,a),p=0;p<this.t.length;p++)T=T.concat(Ja(this.t[p],this.s));for(p=0;p<T.length;p++)Qa[T[p].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=T,c={},d=Qa||{};if(0===a.length&&b)na(v.F);else{v.ba+=a.length;b&&(v.pa=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],k=d[g.getName()],p=v.F,r=g;p.J&&l(p.u,[p.o.h(p.p,
r.getName(),n(r).toString(),"loading")]);m(p,"fontloading",r);p=null;p=new oa(h(v.Ba,v),h(v.Ca,v),v.e,g,v.fa,c,k);f.push(p)}for(e=0;e<f.length;e++)f[e].start()}})}}};X.prototype.performOptionalActions=function(){};function db(a,b,c,d){this.Ga=a;this.e=b;this.b=c;this.u=d;this.v=[]}db.prototype.ya=function(a){this.v.push(a)};
db.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)eb(this,c[g],function(){0==--f&&fb(e,d)});else fb(this,d)};function eb(a,b,c){b=a.Ga.h({id:encodeURIComponent(b)});ka(a.e,b,c)}
function fb(a,b){if(0!=a.v.length){for(var c=new ma(a.e,b),d=!1,e=0;e<a.v.length;e++)a.v[e].init(),d=d||a.v[e].supportsConfiguredBrowser();if(d)for(c.J&&l(c.u,[c.o.h(c.p,"loading")]),m(c,"loading"),c=0;c<a.v.length;c++)d=a.v[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.v.length-1,b);else na(c);a.v=[]}}var gb=(new Ba(navigator.userAgent,document)).parse(),hb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var ib=window.Typekit.config||{},jb=null;ib.k&&(jb=new N(ib.k));var kb=new db(jb,hb,gb,document.documentElement);window.Typekit.load=function(){kb.load.apply(kb,arguments)};window.Typekit.addKit=function(){kb.ya.apply(kb,arguments)}}var lb,Y,Z,y=window.Typekit.config||{};Z=new X(hb);Z.ta=new La(y.ps,y.ht,y.fi,y.a,y.kt,y.js,y.l);Y=new Na;Y.ea=!y.si;Y.da=!y.st;Y.L=!y.sa;Y.wa=!y.sw;Y.ia=!y.sb;Z.ja=Y;y.ds&&(Z.la=y.ds);y.f&&(lb=new N(y.f),Z.aa=lb);y.hn&&(Z.oa=y.hn);var z;
if(y.fn)for(z=0;z<y.fn.length;z+=2)Z.t.push(new Ha(y.fn[z],y.fn[z+1]));if(y.c)for(z=0;z<y.c.length;z+=2)Z.U.push(new xa);Z.b=gb;var mb;a:{var nb=Z.b,ob=new Na,pb=Z.ja||ob,qb;for(qb in U){var $=U[qb];if(V[$]&&V[$](nb,pb)){mb=$;break a}}for(qb in U)if($=U[qb],V[$]&&V[$](nb,ob)){mb="x";break a}mb="k"}Z.s=mb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(rb){};
})(this,document);