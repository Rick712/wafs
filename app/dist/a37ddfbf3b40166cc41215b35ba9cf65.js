require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./script"),o=t(e);function t(e){return e&&e.__esModule?e:{default:e}}var s=document.querySelector("#start"),r=document.querySelector("#pokemon"),n=document.querySelector(".template"),c=document.querySelector(".form"),l=document.querySelector(".pokemon-list"),a=document.querySelector(".pokemonlink");a.addEventListener("click",function(){n.classList.remove("showPokemon")});var i={start:function(){s.classList.remove("no-display"),r.classList.add("no-display")},pokemon:function(){r.classList.remove("no-display"),s.classList.add("no-display")},back:function(){n.classList.add("gone"),c.classList.remove("gone"),l.classList.remove("gone")}};exports.default=i;
},{"./script":10}],9:[function(require,module,exports) {
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e=function(e,t){var o=[],r={},i=e.routie,a=function(n,e){this.name=e,this.path=n,this.keys=[],this.fns=[],this.params={},this.regex=s(this.path,this.keys,!1,!1)};a.prototype.addHandler=function(n){this.fns.push(n)},a.prototype.removeHandler=function(n){for(var e=0,t=this.fns.length;e<t;e++){if(n==this.fns[e])return void this.fns.splice(e,1)}},a.prototype.run=function(n){for(var e=0,t=this.fns.length;e<t;e++)this.fns[e].apply(this,n)},a.prototype.match=function(n,e){var t=this.regex.exec(n);if(!t)return!1;for(var o=1,r=t.length;o<r;++o){var i=this.keys[o-1],a="string"==typeof t[o]?decodeURIComponent(t[o]):t[o];i&&(this.params[i.name]=a),e.push(a)}return!0},a.prototype.toURL=function(n){var e=this.path;for(var t in n)e=e.replace("/:"+t,"/"+n[t]);if(-1!=(e=e.replace(/\/:.*\?/g,"/").replace(/\?/g,"")).indexOf(":"))throw new Error("missing parameters for url: "+e);return e};var s=function(n,e,t,o){return n instanceof RegExp?n:(n instanceof Array&&(n="("+n.join("|")+")"),n=n.concat(o?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(n,t,o,r,i,a){return e.push({name:r,optional:!!a}),t=t||"",(a?"":t)+"(?:"+(a?t:"")+(o||"")+(i||o&&"([^/.]+?)"||"([^/]+?)")+")"+(a||"")}).replace(/([\/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),new RegExp("^"+n+"$",t?"":"i"))},f=function(n,e){var t=n.split(" "),i=2==t.length?t[0]:null;n=2==t.length?t[1]:t[0],r[n]||(r[n]=new a(n,i),o.push(r[n])),r[n].addHandler(e)},u=function e(t,o){if("function"==typeof o)f(t,o),e.reload();else if("object"==(void 0===t?"undefined":n(t))){for(var r in t)f(r,t[r]);e.reload()}else void 0===o&&e.navigate(t)};u.lookup=function(n,e){for(var t=0,r=o.length;t<r;t++){var i=o[t];if(i.name==n)return i.toURL(e)}},u.remove=function(n,e){var t=r[n];t&&t.removeHandler(e)},u.removeAll=function(){r={},o=[]},u.navigate=function(n,e){var t=(e=e||{}).silent||!1;t&&l(),setTimeout(function(){window.location.hash=n,t&&setTimeout(function(){p()},1)},1)},u.noConflict=function(){return e.routie=i,u};var c=function(n,e){var t=[];return!!e.match(n,t)&&(e.run(t),!0)},h=u.reload=function(){for(var n=window.location.hash.substring(1),e=0,t=o.length;e<t;e++){var r=o[e];if(c(n,r))return}},p=function(){e.addEventListener?e.addEventListener("hashchange",h,!1):e.attachEvent("onhashchange",h)},l=function(){e.removeEventListener?e.removeEventListener("hashchange",h):e.detachEvent("onhashchange",h)};if(p(),t)return u;e.routie=u};"undefined"==typeof module?e(window):module.exports=e(window,!0);
},{}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={makeList:function(e){e.forEach(function(e){var t=e,n=document.createElement("li"),o=document.createElement("a"),r=document.createTextNode(t.name),c=document.querySelector(".pokemon-list");n.appendChild(o),o.setAttribute("href","#pokemon/"+t.name),o.appendChild(r),c.appendChild(n),n.className="pokemon"})},pokemon:function(e){var t=document.querySelector(".button");document.querySelectorAll(".pokemon");t.addEventListener("click",function(){var t=document.querySelector(".input").value;e.filter(function(e,n){return 0==e.name.startsWith(t)}).forEach(function(e){document.querySelector('[href="'+e.name+'"]').parentNode.classList.add("gone")})})}};exports.default=e;
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./sections"),t=r(e),s=require("./routie"),a=r(s),o=require("./order"),n=r(o);function r(e){return e&&e.__esModule?e:{default:e}}var i=document.querySelector(".template"),u={},c={},l=document.querySelector(".pokemon-list"),d={},p={},f={call:function(){var e=new XMLHttpRequest;e.open("GET","https://www.pokeapi.co/api/v2/pokemon/?limit=151",!0),e.onload=function(){if(e.status>=200&&e.status<400){this.data=JSON.parse(e.responseText);var t=this.data.results;n.default.makeList(t),n.default.pokemon(t),document.querySelector(".loading").classList.add("gone")}},e.onerror=function(){document.querySelector(".error").classList.remove("gone")},e.timeout=function(){document.querySelector(".timeOut").classList.remove("gone")},e.send()},pokemonDetail:function(e){var s=new XMLHttpRequest;s.open("GET","https://www.pokeapi.co/api/v2/pokemon/"+e,!0),s.onload=function(){if(s.status>=200&&s.status<400){var e=document.querySelector(".pokemon-list"),a=document.querySelector(".template"),o=document.querySelector(".form");e.classList.add("gone"),a.classList.remove("gone"),o.classList.add("gone"),this.newData=JSON.parse(s.responseText);this.newData.sprites;var n=this.newData,r={name:n.name,height:"Height: "+n.height/10+" meter",weight:"Weight: "+n.weight/10+" kilogram",statsHP:"HP: "+n.stats[5].base_stat,statsDef:"Defense: "+n.stats[3].base_stat,statsAtt:"Attack: "+n.stats[4].base_stat,statsSpeed:"Speed: "+n.stats[0].base_stat,statsSpDef:"Special Defense: "+n.stats[1].base_stat,statsSpAtt:"Special Attack: "+n.stats[2].base_stat},u={front_default:{src:function(){return""+n.sprites.front_default}},back_default:{src:function(){return""+n.sprites.back_default}},front_shiny:{src:function(){return""+n.sprites.front_shiny}},back_shiny:{src:function(){return""+n.sprites.back_shiny}}};setTimeout(function(){i.classList.add("showPokemon")},1),Transparency.render(i,r,u)}document.querySelector(".template a").addEventListener("click",function(){t.default.back()})},s.onerror=function(){document.querySelector(".error").classList.add("gone")},s.timeout=function(){document.querySelector(".timeOut");loading.classList.add("gone")},s.send()}};exports.default=f;
},{"./sections":14,"./routie":9,"./order":15}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./sections"),t=i(e),o=require("./routie"),u=i(o),n=require("./api"),r=i(n);function i(e){return e&&e.__esModule?e:{default:e}}var a={init:function(){(0,u.default)({start:function(){t.default.start()},pokemon:function(){t.default.pokemon()},"pokemon/:id":function(e){r.default.pokemonDetail(e)}})}};exports.default=a;
},{"./sections":14,"./routie":9,"./api":12}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./api"),t=i(e),r=require("./routes"),u=i(r);function i(e){return e&&e.__esModule?e:{default:e}}var a={init:function(){t.default.call(),u.default.init()}};exports.default=a;
},{"./api":12,"./routes":13}],10:[function(require,module,exports) {
"use strict";var t=require("./app"),e=u(t);function u(t){return t&&t.__esModule?t:{default:t}}!function(){"strict mode";e.default.init()}();
},{"./app":11}]},{},[10])