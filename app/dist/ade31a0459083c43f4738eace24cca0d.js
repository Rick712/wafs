require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({19:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=document.querySelector("#start"),s=document.querySelector("#pokemon"),t={start:function(){e.classList.remove("no-display"),s.classList.add("no-display")},pokemon:function(){s.classList.remove("no-display"),e.classList.add("no-display")}};exports.default=t;
},{}],9:[function(require,module,exports) {
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e=function(e,t){var o=[],r={},i=e.routie,a=function(n,e){this.name=e,this.path=n,this.keys=[],this.fns=[],this.params={},this.regex=s(this.path,this.keys,!1,!1)};a.prototype.addHandler=function(n){this.fns.push(n)},a.prototype.removeHandler=function(n){for(var e=0,t=this.fns.length;e<t;e++){if(n==this.fns[e])return void this.fns.splice(e,1)}},a.prototype.run=function(n){for(var e=0,t=this.fns.length;e<t;e++)this.fns[e].apply(this,n)},a.prototype.match=function(n,e){var t=this.regex.exec(n);if(!t)return!1;for(var o=1,r=t.length;o<r;++o){var i=this.keys[o-1],a="string"==typeof t[o]?decodeURIComponent(t[o]):t[o];i&&(this.params[i.name]=a),e.push(a)}return!0},a.prototype.toURL=function(n){var e=this.path;for(var t in n)e=e.replace("/:"+t,"/"+n[t]);if(-1!=(e=e.replace(/\/:.*\?/g,"/").replace(/\?/g,"")).indexOf(":"))throw new Error("missing parameters for url: "+e);return e};var s=function(n,e,t,o){return n instanceof RegExp?n:(n instanceof Array&&(n="("+n.join("|")+")"),n=n.concat(o?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(n,t,o,r,i,a){return e.push({name:r,optional:!!a}),t=t||"",(a?"":t)+"(?:"+(a?t:"")+(o||"")+(i||o&&"([^/.]+?)"||"([^/]+?)")+")"+(a||"")}).replace(/([\/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),new RegExp("^"+n+"$",t?"":"i"))},f=function(n,e){var t=n.split(" "),i=2==t.length?t[0]:null;n=2==t.length?t[1]:t[0],r[n]||(r[n]=new a(n,i),o.push(r[n])),r[n].addHandler(e)},u=function e(t,o){if("function"==typeof o)f(t,o),e.reload();else if("object"==(void 0===t?"undefined":n(t))){for(var r in t)f(r,t[r]);e.reload()}else void 0===o&&e.navigate(t)};u.lookup=function(n,e){for(var t=0,r=o.length;t<r;t++){var i=o[t];if(i.name==n)return i.toURL(e)}},u.remove=function(n,e){var t=r[n];t&&t.removeHandler(e)},u.removeAll=function(){r={},o=[]},u.navigate=function(n,e){var t=(e=e||{}).silent||!1;t&&l(),setTimeout(function(){window.location.hash=n,t&&setTimeout(function(){p()},1)},1)},u.noConflict=function(){return e.routie=i,u};var c=function(n,e){var t=[];return!!e.match(n,t)&&(e.run(t),!0)},h=u.reload=function(){for(var n=window.location.hash.substring(1),e=0,t=o.length;e<t;e++){var r=o[e];if(c(n,r))return}},p=function(){e.addEventListener?e.addEventListener("hashchange",h,!1):e.attachEvent("onhashchange",h)},l=function(){e.removeEventListener?e.removeEventListener("hashchange",h):e.detachEvent("onhashchange",h)};if(p(),t)return u;e.routie=u};"undefined"==typeof module?e(window):module.exports=e(window,!0);
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./sections"),t=s(e),o=require("./routie"),n=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var r=document.querySelector(".template"),a={},c={},i=document.querySelector(".pokemon-list"),u={},l={},p={call:function(){var e=new XMLHttpRequest;e.open("GET","https://www.pokeapi.co/api/v2/pokemon/?limit=151",!0),e.onload=function(){if(console.log(e.status),e.status>=200&&e.status<400){this.data=JSON.parse(e.responseText);var t=this.data.results;p.makeList(t),p.orderPokemon(t),document.querySelector(".loading").style.display="none"}},e.onerror=function(){document.querySelector(".error").style.display="block"},e.timeout=function(){document.querySelector(".error").style.display="block"},e.send()},orderPokemon:function(e){var t=document.querySelector(".button");document.querySelectorAll(".pokemon");t.addEventListener("click",function(){var t=document.querySelector(".input").value;console.log(t);var o=e.filter(function(e,o){return 0==e.name.startsWith(t)});console.log(o),o.forEach(function(e){document.querySelector('[href="#'+e.name+'"]').parentNode.classList.add("weg")})})},makeList:function(e){e.forEach(function(e){u=e;var t=document.createElement("li"),o=document.createElement("a"),s=document.createTextNode(u.name);t.appendChild(o),o.setAttribute("href","#"+u.name),o.appendChild(s),i.appendChild(t),t.className="pokemon",(0,n.default)(u.name,function(){console.log(window.location.hash.split("#")[1]),p.openPokemonInfo(u)})})},openPokemonInfo:function(e){var t=window.location.hash.split("#")[1],o=new XMLHttpRequest;o.open("GET","https://www.pokeapi.co/api/v2/pokemon/"+t,!0),o.onload=function(){if(console.log(o.status),o.status>=200&&o.status<400){console.log(o.status),this.newData=JSON.parse(o.responseText);this.newData.sprites;var e=this.newData,t={name:e.name,height:"Height: "+e.height/10+" meter",weight:"Weight: "+e.weight/10+" kilogram",statsHP:"HP: "+e.stats[5].base_stat,statsDef:"Defense: "+e.stats[3].base_stat,statsAtt:"Attack: "+e.stats[4].base_stat,statsSpeed:"Speed: "+e.stats[0].base_stat,statsSpDef:"Special Defense: "+e.stats[1].base_stat,statsSpAtt:"Special Attack: "+e.stats[2].base_stat};e.types.length>1?(document.querySelector(".type1").innerHTML="Type: "+e.types[0].type.name+" & ",document.querySelector(".type2").innerHTML=e.types[1].type.name):(document.querySelector(".type1").innerHTML="Type: "+e.types[0].type.name,document.querySelector(".type2").innerHTML=""),document.querySelector(".sprite_front").setAttribute("src",e.sprites.front_default),document.querySelector(".sprite_back").setAttribute("src",e.sprites.back_default),document.querySelector(".sprite_shiny_front").setAttribute("src",e.sprites.front_shiny),document.querySelector(".sprite_shiny_back").setAttribute("src",e.sprites.back_shiny),setTimeout(function(){r.classList.add("showPokemon")},1),Transparency.render(r,t)}},o.onerror=function(){document.querySelector(".error").style.display="none"},o.timeout=function(){document.querySelector(".error").style.display="none"},o.send()}};exports.default=p;
},{"./sections":19,"./routie":9}],16:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./sections"),t=o(e),u=require("./routie"),r=o(u);function o(e){return e&&e.__esModule?e:{default:e}}var n={init:function(){(0,r.default)({start:function(){t.default.start()},pokemon:function(){t.default.pokemon()}})}};exports.default=n;
},{"./sections":19,"./routie":9}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./api"),t=i(e),r=require("./routes"),u=i(r);function i(e){return e&&e.__esModule?e:{default:e}}var a={init:function(){t.default.call(),u.default.init()}};exports.default=a;
},{"./api":15,"./routes":16}],10:[function(require,module,exports) {
"use strict";var e=require("./app"),t=o(e);function o(e){return e&&e.__esModule?e:{default:e}}!function(){"strict mode";var e=document.querySelector(".template"),o=document.querySelector(".template a");document.querySelector(".pokemonlink").addEventListener("click",function(){e.classList.remove("showPokemon")}),o.addEventListener("click",function(){e.classList.remove("showPokemon")}),t.default.init()}();
},{"./app":13}]},{},[10])