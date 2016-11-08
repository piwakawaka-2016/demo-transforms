(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var spark=require("sparkly"),arr=[1,2,13,2,0,4,7,7,8],newArr=arr.map(function(r){return 3*r});console.log("here is a graph",spark(newArr)),console.log("here is the datas",newArr);
},{"sparkly":5}],2:[function(require,module,exports){
!function(){"use strict";var r=Array.apply(null,new Array(256)).map(function(r,e){return"[38;5;"+e+"m"}),e=Array.apply(null,new Array(256)).map(function(r,e){return"[48;5;"+e+"m"}),t=module.exports.fg={codes:r,standard:r.slice(0,8),bright:r.slice(8,16),rgb:r.slice(16,232),grayscale:r.slice(232,256),getRgb:function(r,e,n){return t.rgb[36*r+6*e+n]}},n=module.exports.bg={codes:e,standard:e.slice(0,8),bright:e.slice(8,16),rgb:e.slice(16,232),grayscale:e.slice(232,256),getRgb:function(r,e,t){return n.rgb[36*r+6*e+t]}};module.exports.reset="[0m"}();

},{}],3:[function(require,module,exports){
"use strict";var numberIsNan=require("number-is-nan");module.exports=Number.isFinite||function(e){return!("number"!=typeof e||numberIsNan(e)||e===1/0||e===-(1/0))};
},{"number-is-nan":4}],4:[function(require,module,exports){
"use strict";module.exports=Number.isNaN||function(e){return e!==e};
},{}],5:[function(require,module,exports){
"use strict";var isFinite=require("is-finite"),colors=require("ansi-256-colors");module.exports=function(r,e){if(!Array.isArray(r))throw new TypeError("Expected an array");e=e||{};var i=["▁","▂","▃","▄","▅","▆","▇","█"],t=[[5,5,4],[5,5,3],[5,5,0],[5,4,0],[5,3,0],[5,2,0],[5,1,0],[5,0,0]],n=r.filter(isFinite),a="number"==typeof e.min?e.min:Math.min.apply(null,n),o="number"==typeof e.max?e.max:Math.max.apply(null,n);return a===o&&0!==o&&(i=[i[4]]),r.map(function(r){if(!isFinite(r))return" ";var n=Math.ceil(r/o*i.length)-1;return(0===o||n<0)&&(n=0),"fire"===e.style?colors.fg.getRgb.apply(colors.fg,t[n])+i[n]+colors.reset:i[n]}).join("")};
},{"ansi-256-colors":2,"is-finite":3}]},{},[1]);
