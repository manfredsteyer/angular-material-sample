webpackJsonp([2,5],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "body::before {\n    background-size: cover;\n    background-attachment: fixed;\n    content: '';\n    will-change: transform;\n    z-index: -1;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    position: fixed;\n}\n@media (max-width: 512px)  and (-webkit-min-device-pixel-ratio: 1.5),\n       (max-width: 512px)  and (min-resolution: 1.5dppx),\n       (max-width: 1024px) and (-webkit-max-device-pixel-ratio: 1.5),\n       (max-width: 1024px) and (max-resolution: 1.5dppx) {\n  body::before {\n    background-image: url(" + __webpack_require__(165) + ");\n  }\n}\n@media (min-width: 513px)  and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1.5),\n       (min-width: 513px)  and (max-width: 1024px) and (min-resolution: 1.5dppx),\n       (min-width: 1025px) and (max-width: 2048px) and (-webkit-max-device-pixel-ratio: 1.5),\n       (min-width: 1025px) and (max-width: 2048px) and (max-resolution: 1.5dppx)  {\n  body::before {\n    background-image: url(" + __webpack_require__(166) + ");\n  }\n}\n@media (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 1.5),\n       (min-width: 1025px) and (min-resolution: 1.5dppx),\n       (min-width: 2049px) and (-webkit-max-device-pixel-ratio: 1.5),\n       (min-width: 2049px) and (max-resolution: 1.5dppx) {\n  body::before {\n    background-image: url(" + __webpack_require__(167) + ");\n  }\n}\nbody .demo-blog {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n}\n\n.demo-blog .demo-blog__posts {\n  max-width: 900px;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.demo-blog.mdl-layout .mdl-layout__content {\n  padding-top: 230px;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n}\n.demo-blog .mdl-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  \n}\n.demo-blog .mdl-card__title {\n  padding: 16px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.demo-blog .mdl-card__media {\n  box-sizing: border-box;\n  background-size: cover;\n  padding: 24px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  cursor: pointer;\n}\n.demo-blog .mdl-card__media a,\n.demo-blog .mdl-card__title a {\n  color: inherit;\n}\n.demo-blog .mdl-card__supporting-text {\n  width: 100%;\n  padding: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.demo-blog .mdl-card__supporting-text strong {\n  font-weight: 400;\n}\n.demo-blog .mdl-card__media ~ .mdl-card__supporting-text {\n  \n}\n.demo-blog .mdl-card__supporting-text:not(:last-child) {\n  box-sizing: border-box;\n}\n.demo-blog:not(.demo-blog--blogpost) .mdl-card__supporting-text ~ .mdl-card__supporting-text {\n  border-top: 1px solid rgba(0,0,0,0.1);\n}\n\n.demo-blog .mdl-card__actions:first-child {\n  margin-left: 0;\n}\n.demo-blog .meta {\n  box-sizing: border-box;\n  padding: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: auto;\n}\n.demo-blog .meta  .meta__favorites{\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 8px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.demo-blog .meta  .meta__favorites .material-icons {\n  font-size: 2em;\n  cursor: pointer;\n  margin-left: 12px;\n}\n.demo-blog .mdl-card .meta.meta--fill {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.demo-blog .meta  *:first-child {\n  margin-right: 16px;\n}\n.demo-blog .meta  * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.demo-blog.is-small-screen .demo-blog__posts  .mdl-card.coffee-pic {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.demo-blog.is-small-screen .demo-blog__posts  .mdl-card.something-else {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1;\n}\n.demo-blog .coffee-pic .mdl-card__media {\n  /* background-image: url('images/coffee.jpg');*/\n}\n.demo-blog .something-else .mdl-card__media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.demo-blog .something-else  button {\n  position: absolute;\n  top: 0;\n  right: 28px;\n  -webkit-transform: translate(0px, -28px);\n          transform: translate(0px, -28px);\n}\n.demo-blog .something-else .mdl-card__media {\n  font-size: 13px;\n  font-weight: 500;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.demo-blog .something-else .mdl-card__media img {\n  width: 64px;\n  margin-bottom: 10px;\n}\n.demo-blog .something-else .mdl-card__supporting-text {\n  background-color: #F5F5F5;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.demo-blog .on-the-road-again .mdl-card__media {\n  /*background-image: url('images/road.jpg');*/\n}\n.demo-blog .shopping .mdl-card__media {\n  /*background-image: url('images/shopping.jpg');*/\n}\n.demo-blog .demo-blog__posts  .demo-nav {\n  margin: 12px 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n  font-weight: 500;\n}\n.demo-blog .demo-blog__posts  .demo-nav  .demo-nav__button {\n  color: white;\n  text-decoration: none;\n}\n.demo-blog .demo-blog__posts  .demo-nav .mdl-button {\n  color: rgba(0,0,0,0.54);\n  background-color: white;\n}\n.demo-blog .demo-blog__posts  .demo-nav  .demo-nav__button:first-child .mdl-button {\n  margin-right: 16px;\n}\n.demo-blog .demo-blog__posts  .demo-nav  .demo-nav__button:last-child .mdl-button {\n  margin-left: 16px;\n}\n.demo-blog .mdl-card  a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: inherit;\n}\n.demo-blog .mdl-card h3 {\n  margin: 0;\n}\n.demo-blog .mdl-card h3 a {\n  text-decoration: none;\n}\n.demo-blog .mdl-card h3.quote:before, .demo-blog .mdl-card h3.quote:after {\n  display: block;\n  font-size: 3em;\n  margin-top: 0.5em;\n}\n.demo-blog .mdl-card h3.quote:before {\n  content: '\\201C';\n}\n.demo-blog .mdl-card h3.quote:after {\n  content: '\\201D';\n}\n.demo-blog--blogpost .custom-header {\n  background-color: transparent;\n}\n.demo-blog--blogpost .demo-blog__posts  .mdl-card .mdl-card__media {\n  /*background-image: url('images/road_big.jpg');*/\n}\n.demo-blog--blogpost .comments {\n  background-color: #EEE;\n}\n.demo-blog--blogpost .meta  * {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.demo-blog--blogpost .meta + .mdl-card__supporting-text {\n  border: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.demo-blog--blogpost .meta + .mdl-card__supporting-text p {\n  max-width: 512px;\n  margin: 16px auto;\n  font-size: 16px;\n  line-height: 28px;\n}\n\n.demo-blog--blogpost .comments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 32px;\n  box-sizing: border-box;\n}\n.demo-blog--blogpost .comments  form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 16px;\n}\n.demo-blog--blogpost .comments  form .mdl-textfield {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-right: 16px;\n  color: rgb(97, 97, 97);\n}\n/* Workaround for Firefox.\n * User agent stylesheet kept overwriting the font in FF only.\n */\n.demo-blog--blogpost .comments  form .mdl-textfield .mdl-textfield__input {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n}\n.demo-blog--blogpost .comments  form .mdl-textfield input,\n.demo-blog--blogpost .comments  form .mdl-textfield textarea {\n  resize: none;\n}\n.demo-blog--blogpost .comments  form button {\n  margin-top: 20px;\n  background-color: rgba(0, 0, 0, 0.24);\n  color: white;\n}\n.demo-blog--blogpost .comments .comment {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.demo-blog--blogpost .comments .comment  .comment__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 16px;\n}\n.demo-blog--blogpost .comments .comment  .comment__header  .comment__avatar {\n  width: 48px;\n  border-radius: 24px;\n  margin-right: 16px;\n}\n.demo-blog--blogpost .comments .comment  .comment__header  .comment__author {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.demo-blog--blogpost .comments .comment  .comment__text {\n  line-height: 1.5em;\n}\n.demo-blog--blogpost .comments .comment  .comment__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 0.8em;\n  margin-top: 16px;\n}\n.demo-blog--blogpost .comments .comment  .comment__actions button {\n  margin-right: 16px;\n  color: rgba(0, 0, 0, 0.24);\n}\n.demo-blog--blogpost .comments .comment  .comment__answers {\n  padding-top: 32px;\n  padding-left: 48px;\n}\n\n.demo-blog--blogpost .demo-back {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  color: white;\n  z-index: 9999;\n}\n.demo-blog .section-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.demo-blog .something-else {\n  overflow: visible;\n  z-index: 10;\n}\n.demo-blog .amazing .mdl-card__title {\n  background-color: #263238;\n}\n.demo-blog .minilogo {\n  width: 44px;\n  height: 44px;\n/*  background-image: url('images/avatar.png');*/\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 50%;\n  border-radius: 22px;\n  background-color: #F5F5F5;\n}\n\n/* Fixes for IE 10 */\n.mdl-grid {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.social-btn {\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  margin: 0 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  opacity: 0.46;\n  border-radius: 2px;\n}\n.social-btn__twitter {\n  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_twitter_black_24dp.png');\n}\n.social-btn__blogger {\n  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_facebook_black_24dp.png');\n}\n.social-btn__gplus {\n  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_gplus_black_24dp.png');\n}\n.social-btn__share {\n  color: rgba(0, 0, 0, 0.54);\n  background: transparent;\n}\n\n.demo-blog .mdl-mini-footer {\n  margin-top: 80px;\n  height: 120px;\n  padding: 40px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n\n.mdl-card {\n    background-color: white!important;\n    color: black!important;\n}\n\n.mdl-card__actions {\n    background-color: white!important;\n}\n\n.mdl-card__title {\n    background-color: rgba(0,0,0,0.54);\n    color:white;\n    \n}\n\n.mdl-button, .mdl-card__supporting-text {\n    color:black!important;\n}", ""]);

// exports


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_1024.f1716de7961fe4ae73b7.jpg";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_2048.8d37d9f38989df1b143b.jpg";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_2880.040f258af6215aef1bae.jpg";

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(164)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[171]);
//# sourceMappingURL=styles.bundle.js.map