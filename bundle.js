(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const spark = require('sparkly')


const arr = [1, 2, 13, 2, 0, 4, 7, 7, 8]

const newArr = arr.map(x => x*2)

console.log('here is a graph', spark(newArr))
console.log('here is the datas', newArr)


},{"sparkly":5}],2:[function(require,module,exports){
(function () {
  'use strict';

  /*
   * Wrap the numbers 0 to 256 in their foreground or background terminal escape code
   */
  var fgcodes = Array.apply(null, new Array(256)).map(function (_, i) { return '\x1b[38;5;' + i + 'm'; });
  var bgcodes = Array.apply(null, new Array(256)).map(function (_, i) { return '\x1b[48;5;' + i + 'm'; });

  /*
   * Slice the foreground and background codes in their respective sections
   */
  var fg = module.exports.fg = {
    codes: fgcodes,
    standard: fgcodes.slice(0, 8),
    bright: fgcodes.slice(8, 16),
    rgb: fgcodes.slice(16, 232),
    grayscale: fgcodes.slice(232, 256),
    // get a red-green-blue value by index, in the ranged 0 to 6
    getRgb: function (r, g, b) { return fg.rgb[36*r + 6*g + b]; }
  };

  var bg = module.exports.bg = {
    codes: bgcodes,
    standard: bgcodes.slice(0, 8),
    bright: bgcodes.slice(8, 16),
    rgb: bgcodes.slice(16, 232),
    grayscale: bgcodes.slice(232, 256),
    // get a red-green-blue value by index, in the ranged 0 to 6
    getRgb: function (r, g, b) { return bg.rgb[36*r + 6*g + b]; }
  };

  var reset = module.exports.reset = '\x1b[0m';

}());

},{}],3:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":4}],4:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],5:[function(require,module,exports){
'use strict';
var isFinite = require('is-finite');
var colors = require('ansi-256-colors');

module.exports = function (numbers, opts) {
	if (!Array.isArray(numbers)) {
		throw new TypeError('Expected an array');
	}

	opts = opts || {};

	var ticks = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
	var color = [[5, 5, 4], [5, 5, 3], [5, 5, 0], [5, 4, 0], [5, 3, 0], [5, 2, 0], [5, 1, 0], [5, 0, 0]];
	var finiteNumbers = numbers.filter(isFinite);
	var min = typeof opts.min === 'number' ? opts.min : Math.min.apply(null, finiteNumbers);
	var max = typeof opts.max === 'number' ? opts.max : Math.max.apply(null, finiteNumbers);

	// use a high tick if data is constant and max is not equal to 0
	if (min === max && max !== 0) {
		ticks = [ticks[4]];
	}

	return numbers.map(function (el) {
		if (!isFinite(el)) {
			return ' ';
		}

		var tickIndex = Math.ceil((el / max) * ticks.length) - 1;

		if (max === 0 || tickIndex < 0) {
			tickIndex = 0;
		}

		if (opts.style === 'fire') {
			return colors.fg.getRgb.apply(colors.fg, color[tickIndex]) + ticks[tickIndex] + colors.reset;
		}

		return ticks[tickIndex];
	}).join('');
};

},{"ansi-256-colors":2,"is-finite":3}]},{},[1]);
