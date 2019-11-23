/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baguetteBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var yall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _gallery_editor_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




var sidebar = function sidebar() {
  var underlay = document.getElementById('sidebar-menu-underlay-1');
  var menu = document.getElementById('sidebar-menu-1');
  var button = document.getElementById('menu-button-01');

  var openMenu = function openMenu() {
    underlay.style['display'] = 'block';
    setTimeout(function () {
      underlay.style['opacity'] = '1';
    }, 10);
    menu.style['transform'] = 'translate(0, 0)';
  };

  var closeMenu = function closeMenu() {
    underlay.style['opacity'] = '0';
    setTimeout(function () {
      underlay.style['display'] = 'none';
    }, 400);
    menu.style['transform'] = 'translate(-280px, 0)';
  };

  underlay.addEventListener('click', closeMenu);
  button.addEventListener('click', openMenu);
};

var adjustPhotoHeights = function adjustPhotoHeights() {
  var spacers = document.getElementsByClassName('photo-spacer');
  var spacerList = Array.prototype.slice.call(spacers);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = spacerList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var spacer = _step.value;
      var ratio = Number(spacer.getAttribute('data-height-ratio'));

      if (ratio < 55 || ratio > 58) {
        var newRatio = Math.min(100, Math.max(30, ratio));
        spacer.setAttribute('style', 'padding-bottom: ' + newRatio + '%;');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var appInit = function appInit() {
  Object(yall_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  window.baguetteBox = _baguetteBox__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.gallery = _baguetteBox__WEBPACK_IMPORTED_MODULE_0__["default"].run('.lightbox-gallery-list');
  adjustPhotoHeights();
  sidebar(); // initPasswordManager();

  Object(_gallery_editor_init__WEBPACK_IMPORTED_MODULE_2__["loadApp"])();
};

document.addEventListener("DOMContentLoaded", appInit);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoomify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.0
 * @url https://github.com/feimosi/baguetteBox.js
 * 
 * MODIFIED -- Add a download button
 * MODIFIED -- add zoomify zoom+pan methods
 */

var dummyEvent = {};

var baguetteBox = function baguetteBox() {
  'use strict'; // SVG shapes used on the buttons

  var leftArrow = '<svg width="44" height="60">' + '<polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
      rightArrow = '<svg width="44" height="60">' + '<polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' + 'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' + '</svg>',
      closeX = '<svg width="30" height="30">' + '<g stroke="rgb(160,160,160)" stroke-width="4">' + '<line x1="5" y1="5" x2="25" y2="25"/>' + '<line x1="5" y1="25" x2="25" y2="5"/>' + '</g></svg>',
      magnifyIcon = '<svg stroke="currentColor" fill="none" stroke-width="2" ' + 'viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">' + '<circle cx="11" cy="11" r="8">' + '</circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>' + '<line x1="11" y1="8" x2="11" y2="14"></line>' + '<line x1="8" y1="11" x2="14" y2="11"></line>' + '</svg>',
      deMagnifyIcon = '<svg stroke="currentColor" fill="none" stroke-width="2" ' + 'viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">' + '<circle cx="11" cy="11" r="8"></circle>' + '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>' + '<line x1="8" y1="11" x2="14" y2="11"></line>' + '</svg>'; // Global options and their defaults

  var options = {},
      defaults = {
    captions: true,
    buttons: 'auto',
    fullScreen: false,
    noScrollbars: false,
    bodyClass: 'baguetteBox-open',
    titleTag: false,
    async: false,
    preload: 2,
    animation: 'slideIn',
    afterShow: null,
    afterHide: null,
    // MATTSAHR MODIFIED
    onChange: function onChange(index, other) {
      var src = Array.prototype.slice.call(document.getElementById('gallery-list').children)[index].href;
      var fileName = src.split('/');
      fileName = fileName[fileName.length - 1];
      var a = document.createElement('a');
      a.href = src;
      a.download = src;
      a.setAttribute("download", fileName);
      a.innerHTML = "Download";
      var div = document.createElement('div');
      div.className = 'download-link';
      div.appendChild(a);
      var caption = document.getElementById('baguetteBox-figcaption-' + index);

      if (!caption) {
        var imagePanel = document.getElementById('baguetteBox-figure-' + index);
        caption = document.createElement('figcaption');
        caption.setAttribute('id', 'baguetteBox-figcaption-' + index);
        imagePanel.appendChild(caption);
      }

      var existingLink = caption.getElementsByClassName('download-link')[0];

      if (!existingLink) {
        caption.appendChild(div);
      }
    },
    overlayBackgroundColor: 'rgba(0,0,0,.9)'
  }; // Object containing information about features compatibility

  var supports = {}; // DOM Elements references

  var overlay, slider, previousButton, nextButton, closeButton, expandButton, shrinkButton; // An array with all images in the current gallery

  var currentGallery = []; // Current image index inside the slider

  var currentIndex = 0; // Visibility of the overlay

  var isOverlayVisible = false; // Touch event start position (for slide gesture)

  var touch = {}; // If set to true ignore touch events because animation was already fired

  var touchFlag = false; // Regex pattern to match image files

  var regex = /.+\.(gif|jpe?g|png|webp)/i; // Object of all used galleries

  var data = {}; // Array containing temporary images DOM elements

  var imagesElements = []; // The last focused element before opening the overlay

  var documentLastFocus = null;

  var overlayClickHandler = function overlayClickHandler(event) {
    // Close the overlay when user clicks directly on the background
    if (event.target.id.indexOf('baguette-img') !== -1) {
      hideOverlay();
    }
  };

  var previousButtonClickHandler = function previousButtonClickHandler(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

    showPreviousImage();
  };

  var nextButtonClickHandler = function nextButtonClickHandler(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

    showNextImage();
  };

  var closeButtonClickHandler = function closeButtonClickHandler(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

    hideOverlay();
  };

  var expandButtonClickHandler = function expandButtonClickHandler(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

    expandCurrentImage();
  };

  var shrinkButtonClickHandler = function shrinkButtonClickHandler(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions

    shrinkCurrentImage();
  };

  var touchstartHandler = function touchstartHandler(event) {
    touch.count++;

    if (touch.count > 1) {
      touch.multitouch = true;
    } // Save x and y axis position


    touch.startX = event.changedTouches[0].pageX;
    touch.startY = event.changedTouches[0].pageY;
  };

  var touchmoveHandler = function touchmoveHandler(event) {
    // If action was already triggered or multitouch return
    if (touchFlag || touch.multitouch) {
      return;
    }

    event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions

    var touchEvent = event.touches[0] || event.changedTouches[0]; // Move at least 40 pixels to trigger the action

    if (touchEvent.pageX - touch.startX > 40) {
      touchFlag = true;
      showPreviousImage();
    } else if (touchEvent.pageX - touch.startX < -40) {
      touchFlag = true;
      showNextImage(); // Move 100 pixels up to close the overlay
    } else if (touch.startY - touchEvent.pageY > 100) {
      hideOverlay();
    }
  };

  var touchendHandler = function touchendHandler() {
    touch.count--;

    if (touch.count <= 0) {
      touch.multitouch = false;
    }

    touchFlag = false;
  };

  var contextmenuHandler = function contextmenuHandler() {
    touchendHandler();
  };

  var trapFocusInsideOverlay = function trapFocusInsideOverlay(event) {
    if (overlay.style.display === 'block' && overlay.contains && !overlay.contains(event.target)) {
      event.stopPropagation();
      initFocus();
    }
  }; // forEach polyfill for IE8
  // http://stackoverflow.com/a/14827443/1077846

  /* eslint-disable */


  if (![].forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // filter polyfill for IE8
  // https://gist.github.com/eliperelman/1031656


  if (![].filter) {
    Array.prototype.filter = function (a, b, c, d, e) {
      c = this;
      d = [];

      for (e = 0; e < c.length; e++) {
        a.call(b, c[e], e, c) && d.push(c[e]);
      }

      return d;
    };
  }
  /* eslint-enable */
  // Script entry point


  function run(selector, userOptions) {
    // Fill supports object
    supports.transforms = testTransformsSupport();
    supports.svg = testSvgSupport();
    supports.passiveEvents = testPassiveEventsSupport();
    buildOverlay();
    removeFromCache(selector);
    return bindImageClickListeners(selector, userOptions);
  }

  function bindImageClickListeners(selector, userOptions) {
    // For each gallery bind a click event to every image inside it
    var galleryNodeList = document.querySelectorAll(selector);
    var selectorData = {
      galleries: [],
      nodeList: galleryNodeList
    };
    data[selector] = selectorData;
    [].forEach.call(galleryNodeList, function (galleryElement) {
      if (userOptions && userOptions.filter) {
        regex = userOptions.filter;
      } // Get nodes from gallery elements or single-element galleries


      var tagsNodeList = [];

      if (galleryElement.tagName === 'A') {
        tagsNodeList = [galleryElement];
      } else {
        tagsNodeList = galleryElement.getElementsByTagName('a');
      } // Filter 'a' elements from those not linking to images


      tagsNodeList = [].filter.call(tagsNodeList, function (element) {
        if (element.className.indexOf(userOptions && userOptions.ignoreClass) === -1) {
          return regex.test(element.href);
        }
      });

      if (tagsNodeList.length === 0) {
        return;
      }

      var gallery = [];
      [].forEach.call(tagsNodeList, function (imageElement, imageIndex) {
        var imageElementClickHandler = function imageElementClickHandler(event) {
          event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions

          prepareOverlay(gallery, userOptions);
          showOverlay(imageIndex);
        };

        var imageItem = {
          eventHandler: imageElementClickHandler,
          imageElement: imageElement
        };
        bind(imageElement, 'click', imageElementClickHandler);
        gallery.push(imageItem);
      });
      selectorData.galleries.push(gallery);
    });
    return selectorData.galleries;
  }

  function clearCachedData() {
    for (var selector in data) {
      if (data.hasOwnProperty(selector)) {
        removeFromCache(selector);
      }
    }
  }

  function removeFromCache(selector) {
    if (!data.hasOwnProperty(selector)) {
      return;
    }

    var galleries = data[selector].galleries;
    [].forEach.call(galleries, function (gallery) {
      [].forEach.call(gallery, function (imageItem) {
        unbind(imageItem.imageElement, 'click', imageItem.eventHandler);
      });

      if (currentGallery === gallery) {
        currentGallery = [];
      }
    });
    delete data[selector];
  }

  function buildOverlay() {
    overlay = getByID('baguetteBox-overlay'); // Check if the overlay already exists

    if (overlay) {
      slider = getByID('baguetteBox-slider');
      previousButton = getByID('baguette-box-previous-button');
      nextButton = getByID('baguette-box-next-button');
      closeButton = getByID('baguette-box-close-button');
      expandButton = getByID('baguette-box-expand-button');
      shrinkButton = getByID('baguette-box-shrink-button');
      return;
    } // Create overlay element


    overlay = create('div');
    overlay.setAttribute('role', 'dialog');
    overlay.id = 'baguetteBox-overlay';
    document.getElementsByTagName('body')[0].appendChild(overlay); // Create gallery slider element

    slider = create('div');
    slider.id = 'baguetteBox-slider';
    overlay.appendChild(slider); // Create all necessary buttons

    previousButton = create('button');
    previousButton.setAttribute('type', 'button');
    previousButton.id = 'baguette-box-previous-button';
    previousButton.setAttribute('aria-label', 'Previous');
    previousButton.innerHTML = supports.svg ? leftArrow : '&lt;';
    overlay.appendChild(previousButton);
    nextButton = create('button');
    nextButton.setAttribute('type', 'button');
    nextButton.id = 'baguette-box-next-button';
    nextButton.setAttribute('aria-label', 'Next');
    nextButton.innerHTML = supports.svg ? rightArrow : '&gt;';
    overlay.appendChild(nextButton);
    closeButton = create('button');
    closeButton.setAttribute('type', 'button');
    closeButton.id = 'baguette-box-close-button';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.innerHTML = supports.svg ? closeX : '&times;';
    overlay.appendChild(closeButton);
    expandButton = create('div');
    expandButton.id = 'baguette-box-expand-button';
    expandButton.innerHTML = supports.svg ? magnifyIcon : '+';
    overlay.appendChild(expandButton);
    shrinkButton = create('div');
    shrinkButton.id = 'baguette-box-shrink-button';
    shrinkButton.innerHTML = supports.svg ? deMagnifyIcon : '-';
    overlay.appendChild(shrinkButton);
    previousButton.className = nextButton.className = closeButton.className = expandButton.className = shrinkButton.className = 'baguetteBox-button';
    bindEvents();
  }

  function keyDownHandler(event) {
    switch (event.keyCode) {
      case 37:
        // Left arrow
        showPreviousImage();
        break;

      case 39:
        // Right arrow
        showNextImage();
        break;

      case 27:
        // Esc
        hideOverlay();
        break;

      case 36:
        // Home
        showFirstImage(event);
        break;

      case 35:
        // End
        showLastImage(event);
        break;
    }
  }

  function bindEvents() {
    var options = supports.passiveEvents ? {
      passive: true
    } : null;
    bind(overlay, 'click', overlayClickHandler);
    bind(previousButton, 'click', previousButtonClickHandler);
    bind(nextButton, 'click', nextButtonClickHandler);
    bind(closeButton, 'click', closeButtonClickHandler);
    bind(expandButton, 'click', expandButtonClickHandler);
    bind(shrinkButton, 'click', shrinkButtonClickHandler);
    bind(slider, 'contextmenu', contextmenuHandler);
    bind(overlay, 'touchstart', touchstartHandler, options);
    bind(overlay, 'touchmove', touchmoveHandler, options);
    bind(overlay, 'touchend', touchendHandler);
    bind(document, 'focus', trapFocusInsideOverlay, true);
  }

  function unbindEvents() {
    var options = supports.passiveEvents ? {
      passive: true
    } : null;
    unbind(overlay, 'click', overlayClickHandler);
    unbind(previousButton, 'click', previousButtonClickHandler);
    unbind(nextButton, 'click', nextButtonClickHandler);
    unbind(closeButton, 'click', closeButtonClickHandler);
    unbind(expandButton, 'click', expandButtonClickHandler);
    unbind(shrinkButton, 'click', shrinkButtonClickHandler);
    unbind(slider, 'contextmenu', contextmenuHandler);
    unbind(overlay, 'touchstart', touchstartHandler, options);
    unbind(overlay, 'touchmove', touchmoveHandler, options);
    unbind(overlay, 'touchend', touchendHandler);
    unbind(document, 'focus', trapFocusInsideOverlay, true);
  }

  function prepareOverlay(gallery, userOptions) {
    // If the same gallery is being opened prevent from loading it once again
    if (currentGallery === gallery) {
      return;
    }

    currentGallery = gallery; // Update gallery specific options

    setOptions(userOptions); // Empty slider of previous contents (more effective than .innerHTML = "")

    while (slider.firstChild) {
      slider.removeChild(slider.firstChild);
    }

    imagesElements.length = 0;
    var imagesFiguresIds = [];
    var imagesCaptionsIds = []; // Prepare and append images containers and populate figure and captions IDs arrays

    for (var i = 0, fullImage; i < gallery.length; i++) {
      fullImage = create('div');
      fullImage.className = 'full-image';
      fullImage.id = 'baguette-img-' + i;
      imagesElements.push(fullImage);
      imagesFiguresIds.push('baguetteBox-figure-' + i);
      imagesCaptionsIds.push('baguetteBox-figcaption-' + i);
      slider.appendChild(imagesElements[i]);
    } // TODO -- uncomment --  overlay.setAttribute('aria-labelledby', imagesFiguresIds.join(' '));
    // TODO -- uncomment --  overlay.setAttribute('aria-describedby', imagesCaptionsIds.join(' '));

  }

  function setOptions(newOptions) {
    if (!newOptions) {
      newOptions = {};
    } // Fill options object


    for (var item in defaults) {
      options[item] = defaults[item];

      if (typeof newOptions[item] !== 'undefined') {
        options[item] = newOptions[item];
      }
    }
    /* Apply new options */
    // Change transition for proper animation


    slider.style.transition = slider.style.webkitTransition = options.animation === 'fadeIn' ? 'opacity .4s ease' : options.animation === 'slideIn' ? '' : 'none'; // Hide buttons if necessary

    if (options.buttons === 'auto' && ('ontouchstart' in window || currentGallery.length === 1)) {
      options.buttons = false;
    } // Set buttons style to hide or display them


    previousButton.style.display = nextButton.style.display = options.buttons ? '' : 'none'; // Set overlay color

    try {
      overlay.style.backgroundColor = options.overlayBackgroundColor;
    } catch (e) {// Silence the error and continue
    }
  }

  function showOverlay(chosenImageIndex) {
    if (options.noScrollbars) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'scroll';
    }

    if (overlay.style.display === 'block') {
      return;
    }

    bind(document, 'keydown', keyDownHandler);
    currentIndex = chosenImageIndex;
    touch = {
      count: 0,
      startX: null,
      startY: null
    };
    loadImage(currentIndex, function () {
      preloadNext(currentIndex);
      preloadPrev(currentIndex);
    });
    updateOffset();
    overlay.style.display = 'block';

    if (options.fullScreen) {
      enterFullScreen();
    } // Fade in overlay


    setTimeout(function () {
      overlay.className = 'visible';

      if (options.bodyClass && document.body.classList) {
        document.body.classList.add(options.bodyClass);
      }

      if (options.afterShow) {
        options.afterShow();
      }
    }, 50);

    if (options.onChange) {
      options.onChange(currentIndex, imagesElements.length);
    }

    documentLastFocus = document.activeElement;
    initFocus();
    isOverlayVisible = true;
  }

  function initFocus() {
    if (options.buttons) {
      previousButton.focus();
    } else {
      closeButton.focus();
    }
  }

  function enterFullScreen() {
    if (overlay.requestFullscreen) {
      overlay.requestFullscreen();
    } else if (overlay.webkitRequestFullscreen) {
      overlay.webkitRequestFullscreen();
    } else if (overlay.mozRequestFullScreen) {
      overlay.mozRequestFullScreen();
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  function hideOverlay() {
    if (options.noScrollbars) {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }

    if (overlay.style.display === 'none') {
      return;
    }

    removeExpandedImage();
    unbind(document, 'keydown', keyDownHandler); // Fade out and hide the overlay

    overlay.className = '';
    setTimeout(function () {
      overlay.style.display = 'none';

      if (document.fullscreen) {
        exitFullscreen();
      }

      if (options.bodyClass && document.body.classList) {
        document.body.classList.remove(options.bodyClass);
      }

      if (options.afterHide) {
        options.afterHide();
      }

      documentLastFocus && documentLastFocus.focus();
      isOverlayVisible = false;
    }, 500);
  }

  function loadImage(index, callback) {
    var imageContainer = imagesElements[index];
    var galleryItem = currentGallery[index]; // Return if the index exceeds prepared images in the overlay
    // or if the current gallery has been changed / closed

    if (typeof imageContainer === 'undefined' || typeof galleryItem === 'undefined') {
      return;
    } // If image is already loaded run callback and return


    if (imageContainer.getElementsByTagName('img')[0]) {
      if (callback) {
        callback();
      }

      return;
    } // Get element reference, optional caption and source path


    var imageElement = galleryItem.imageElement;
    var thumbnailElement = imageElement.getElementsByTagName('img')[0];
    var imageCaption = typeof options.captions === 'function' ? options.captions.call(currentGallery, imageElement) : imageElement.getAttribute('data-caption') || imageElement.title;
    var imageSrc = getImageSrc(imageElement); // Prepare figure element

    var figure = create('figure');
    figure.id = 'baguetteBox-figure-' + index;
    figure.innerHTML = '<div class="baguetteBox-spinner">' + '<div class="baguetteBox-double-bounce1"></div>' + '<div class="baguetteBox-double-bounce2"></div>' + '</div>'; // Insert caption if available

    if (options.captions && imageCaption) {
      var figcaption = create('figcaption');
      figcaption.id = 'baguetteBox-figcaption-' + index;
      figcaption.innerHTML = imageCaption;
      figure.appendChild(figcaption);
    }

    imageContainer.appendChild(figure); // Prepare gallery img element

    var image = create('img');

    image.onload = function () {
      // Remove loader element
      var spinner = document.querySelector('#baguette-img-' + index + ' .baguetteBox-spinner');
      figure.removeChild(spinner);

      if (!options.async && callback) {
        callback();
      }
    };

    image.setAttribute('src', imageSrc);
    image.alt = thumbnailElement ? thumbnailElement.alt || '' : '';

    if (options.titleTag && imageCaption) {
      image.title = imageCaption;
    }

    figure.appendChild(image); // Run callback

    if (options.async && callback) {
      callback();
    }
  } // Get image source location, mostly used for responsive images


  function getImageSrc(image) {
    // Set default image path from href
    var result = image.href; // If dataset is supported find the most suitable image

    if (image.dataset) {
      var srcs = []; // Get all possible image versions depending on the resolution

      for (var item in image.dataset) {
        if (item.substring(0, 3) === 'at-' && !isNaN(item.substring(3))) {
          srcs[item.replace('at-', '')] = image.dataset[item];
        }
      } // Sort resolutions ascending


      var keys = Object.keys(srcs).sort(function (a, b) {
        return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
      }); // Get real screen resolution

      var width = window.innerWidth * window.devicePixelRatio; // Find the first image bigger than or equal to the current width

      var i = 0;

      while (i < keys.length - 1 && keys[i] < width) {
        i++;
      }

      result = srcs[keys[i]] || result;
    }

    return result;
  } // Return false at the right end of the gallery


  function showNextImage() {
    return show(currentIndex + 1);
  } // Return false at the left end of the gallery


  function showPreviousImage() {
    return show(currentIndex - 1);
  } // Return false at the left end of the gallery


  function showFirstImage(event) {
    if (event) {
      event.preventDefault();
    }

    return show(0);
  } // Return false at the right end of the gallery


  function showLastImage(event) {
    if (event) {
      event.preventDefault();
    }

    return show(currentGallery.length - 1);
  }

  function removeExpandedImage() {
    Object(_zoomify__WEBPACK_IMPORTED_MODULE_0__["destroyZoomify"])();
    var slider = document.querySelector('#baguetteBox-slider');
    slider.className = '';
    /*
    var currentImage = document.querySelector('#baguette-img-' + currentIndex + ' img');
    if (currentImage) {
        currentImage.style.opacity = '1';
    }
    */

    var container = document.querySelector('#baguette-expanded-container');

    if (container) {
      container.remove();
    }
  }

  function getExpandedImage() {
    var container = document.querySelector('#baguette-expanded-container');

    if (!container) {
      return false;
    }

    return container.querySelector('img');
  }

  function increaseExpansion(expanded) {
    Object(_zoomify__WEBPACK_IMPORTED_MODULE_0__["image_zoom_in"])(dummyEvent);
  }

  function expandCurrentImage() {
    var container = document.querySelector('#baguette-expanded-container');

    if (!container) {
      container = document.createElement('div');
      container.id = 'baguette-expanded-container';
      overlay.appendChild(container);
    }

    var expanded = getExpandedImage();

    if (expanded) {
      return increaseExpansion(expanded);
    }

    var currentImage = document.querySelector('#baguette-img-' + currentIndex + ' img');
    expanded = new Image();

    expanded.onload = function () {
      var height = expanded.height;
      var width = expanded.width;
      var ratio = (currentImage.width / width).toFixed(3);
      expanded.style.width = Math.round(ratio * width) + 'px';
      expanded.style.height = Math.round(ratio * height) + 'px';
      expanded.style.left = '0px';
      expanded.style.top = '0px';
      container.innerHTML = '';
      container.style.display = 'block';
      container.appendChild(expanded);
      Object(_zoomify__WEBPACK_IMPORTED_MODULE_0__["zoomify"])(container, expanded, width, height);
      setTimeout(function () {
        container.style.opacity = '1';
        var slider = document.querySelector('#baguetteBox-slider');
        slider.className = 'zoom-active';
        /*
        setTimeout(function(){
            // currentImage.style.opacity = '0';
            
        }, 150);
        */
      }, 50);
    };

    expanded.src = currentImage.src;
  }

  function shrinkCurrentImage() {
    Object(_zoomify__WEBPACK_IMPORTED_MODULE_0__["image_zoom_out"])(dummyEvent);
  }
  /**
   * Move the gallery to a specific index
   * @param `index` {number} - the position of the image
   * @param `gallery` {array} - gallery which should be opened, if omitted assumes the currently opened one
   * @return {boolean} - true on success or false if the index is invalid
   */


  function show(index, gallery) {
    removeExpandedImage();

    if (!isOverlayVisible && index >= 0 && index < gallery.length) {
      prepareOverlay(gallery, options);
      showOverlay(index);
      return true;
    }

    if (index < 0) {
      if (options.animation) {
        bounceAnimation('left');
      }

      return false;
    }

    if (index >= imagesElements.length) {
      if (options.animation) {
        bounceAnimation('right');
      }

      return false;
    }

    currentIndex = index;
    loadImage(currentIndex, function () {
      preloadNext(currentIndex);
      preloadPrev(currentIndex);
    });
    updateOffset();

    if (options.onChange) {
      options.onChange(currentIndex, imagesElements.length);
    }

    return true;
  }
  /**
   * Triggers the bounce animation
   * @param {('left'|'right')} direction - Direction of the movement
   */


  function bounceAnimation(direction) {
    slider.className = 'bounce-from-' + direction;
    setTimeout(function () {
      slider.className = '';
    }, 400);
  }

  function updateOffset() {
    var offset = -currentIndex * 100 + '%';

    if (options.animation === 'fadeIn') {
      slider.style.opacity = 0;
      setTimeout(function () {
        supports.transforms ? slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)' : slider.style.left = offset;
        slider.style.opacity = 1;
      }, 400);
    } else {
      supports.transforms ? slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)' : slider.style.left = offset;
    }
  } // CSS 3D Transforms test


  function testTransformsSupport() {
    var div = create('div');
    return typeof div.style.perspective !== 'undefined' || typeof div.style.webkitPerspective !== 'undefined';
  } // Inline SVG test


  function testSvgSupport() {
    var div = create('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
  } // Borrowed from https://github.com/seiyria/bootstrap-slider/pull/680/files

  /* eslint-disable getter-return */


  function testPassiveEventsSupport() {
    var passiveEvents = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          passiveEvents = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {
      /* Silence the error and continue */
    }

    return passiveEvents;
  }
  /* eslint-enable getter-return */


  function preloadNext(index) {
    if (index - currentIndex >= options.preload) {
      return;
    }

    loadImage(index + 1, function () {
      preloadNext(index + 1);
    });
  }

  function preloadPrev(index) {
    if (currentIndex - index >= options.preload) {
      return;
    }

    loadImage(index - 1, function () {
      preloadPrev(index - 1);
    });
  }

  function bind(element, event, callback, options) {
    if (element.addEventListener) {
      element.addEventListener(event, callback, options);
    } else {
      // IE8 fallback
      element.attachEvent('on' + event, function (event) {
        // `event` and `event.target` are not provided in IE8
        event = event || window.event;
        event.target = event.target || event.srcElement;
        callback(event);
      });
    }
  }

  function unbind(element, event, callback, options) {
    if (element.removeEventListener) {
      element.removeEventListener(event, callback, options);
    } else {
      // IE8 fallback
      element.detachEvent('on' + event, callback);
    }
  }

  function getByID(id) {
    return document.getElementById(id);
  }

  function create(element) {
    return document.createElement(element);
  }

  function destroyPlugin() {
    unbindEvents();
    clearCachedData();
    unbind(document, 'keydown', keyDownHandler);
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('baguetteBox-overlay'));
    data = {};
    currentGallery = [];
    currentIndex = 0;
  }

  return {
    run: run,
    show: show,
    showNext: showNextImage,
    showPrevious: showPreviousImage,
    hide: hideOverlay,
    destroy: destroyPlugin
  };
};

var delivery = baguetteBox();
/* harmony default export */ __webpack_exports__["default"] = (delivery);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image_zoom_in", function() { return image_zoom_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image_zoom_out", function() { return image_zoom_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyZoomify", function() { return destroyZoomify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomify", function() { return zoomify; });
/*******************************************************************************************
 * zoomify
 * Written by Craig Francis
 * Absolutely minimal version of GSIV to work with touch screens and very slow processors.
*******************************************************************************************/
//--------------------------------------------------
// Variables
var html_ref = null,
    div_ref = null,
    div_half_width = null,
    div_half_height = null,
    img_ref = null,
    img_original_width = null,
    img_original_height = null,
    img_current_width = null,
    img_current_height = null,
    img_current_left = null,
    img_current_top = null,
    zoom_control_refs = {},
    zoom_levels = [],
    zoom_level_count = 0,
    zoom_limit = null,
    zoom_min_width = null,
    zoom_max_width = null,
    zoom_origin_coords = [],
    zoom_origin_distance = null,
    zoom_origin_width = null,
    move_origin_cords = null,
    move_origin_left = null,
    move_origin_top = null,
    click_last = 0; //--------------------------------------------------
// Event listener helpers:
// http://dustindiaz.com/rock-solid-addevent

function addEventListener(obj, type, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(type, fn, false);
  } else if (obj.attachEvent) {
    obj['e' + type + fn] = fn;

    obj[type + fn] = function () {
      obj['e' + type + fn](window.event);
    };

    obj.attachEvent('on' + type, obj[type + fn]);
  } else {
    obj['on' + type] = obj['e' + type + fn];
  }
}

function removeEventListener(obj, type, fn) {
  if (obj.removeEventListener) {
    obj.removeEventListener(type, fn, false);
  } else if (obj.detachEvent) {
    try {
      obj.detachEvent('on' + type, obj[type + fn]); // IE7 does not like "touchmove"
    } catch (e) {}
  } else {
    obj['on' + type] = null;
  }
}

function preventDefault(e) {
  if (!e) {
    return false;
  }

  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false; // IE: http://stackoverflow.com/questions/1000597/
  }

  return false;
}

function preventPropagationAndDefault(e) {
  if (!e) {
    return false;
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  return preventDefault(e);
}

function event_move_coords(e) {
  var coords = [];

  if (e.touches && e.touches.length) {
    coords[0] = e.touches[0].clientX;
    coords[1] = e.touches[0].clientY;
  } else {
    coords[0] = e.clientX;
    coords[1] = e.clientY;
  }

  return coords;
}

function event_zoom_coords(e) {
  var coords = [0, 0];

  if (e.touches && e.touches.length >= 2) {
    coords[0] = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    coords[1] = (e.touches[0].clientY + e.touches[1].clientY) / 2;
  }

  return coords;
}

function event_zoom_distance(e) {
  // http://stackoverflow.com/a/11183333/6632
  var distance = 0;

  if (e.touches && e.touches.length >= 2) {
    distance = Math.sqrt((e.touches[0].clientX - e.touches[1].clientX) * (e.touches[0].clientX - e.touches[1].clientX) + (e.touches[0].clientY - e.touches[1].clientY) * (e.touches[0].clientY - e.touches[1].clientY));
  }

  return distance;
} //--------------------------------------------------
// Zooming


function image_zoom_update(new_width, initialize) {
  //--------------------------------------------------
  // At width limit
  if (!img_ref) {
    return;
  }

  var new_limit = 0,
      new_height = 0,
      ratio = 0;
  if (new_width == zoom_max_width) new_limit = new_limit | 1;
  if (new_width == zoom_min_width) new_limit = new_limit | 2; //--------------------------------------------------
  // Hitting limit flash

  if (new_limit != 0 && new_limit != 3 && new_limit != zoom_limit && zoom_limit !== null) {
    // At a limit (not both), has just hit that limit, and isn't happening on page load.
    div_ref.style.opacity = 0.5;
    setTimeout(function () {
      div_ref.style.opacity = 1;
    }, 150);
  } //--------------------------------------------------
  // Change


  new_height = img_original_height / img_original_width * new_width;

  if (img_current_left === null) {
    // Position in the middle (initial page load)
    img_current_left = div_half_width - new_width / 2;
    img_current_top = div_half_height - new_height / 2;
  } else {
    ratio = new_width / img_current_width;
    img_current_left = div_half_width - (div_half_width - img_current_left) * ratio;
    img_current_top = div_half_height - (div_half_height - img_current_top) * ratio;
  }

  img_current_width = new_width;
  img_current_height = new_height;

  if (!initialize) {
    img_ref.className = 'zooming';
  }

  img_ref.style.width = img_current_width + 'px'; // Canvas element will reset any bitmap data img_ref.width

  img_ref.style.height = img_current_height + 'px';
  img_ref.style.left = img_current_left + 'px';
  img_ref.style.top = img_current_top + 'px'; //--------------------------------------------------
  // Success

  if (!initialize) {
    setTimeout(function () {
      img_ref.className = '';
    }, 410);
  }

  return true;
}

function image_zoom_event(e) {
  //--------------------------------------------------
  // Calculations
  var new_width = event_zoom_distance(e) / zoom_origin_distance * zoom_origin_width;
  if (new_width < zoom_min_width) new_width = zoom_min_width;
  if (new_width > zoom_max_width) new_width = zoom_max_width; //--------------------------------------------------
  // Update

  if (image_zoom_update(new_width) === false) {
    // Hit resize change limit, so reset reference points (i.e. zoom in to limit, keep going, then reverse... it should immediately start scaling again)
    zoom_origin_distance = event_zoom_distance(e);
    zoom_origin_width = new_width;
  } //--------------------------------------------------
  // Prevent default


  return preventDefault(e);
}

function image_zoom_change(change) {
  //--------------------------------------------------
  // Zoom level
  var current_zoom = 0,
      new_zoom = null,
      new_width = null,
      k = 0;

  for (k = zoom_level_count; k >= 0; k--) {
    if (zoom_levels[k] <= img_current_width) {
      current_zoom = k;
      break;
    }
  } //--------------------------------------------------
  // New zoom/width


  new_zoom = current_zoom + change;
  if (new_zoom < 0) new_zoom = 0;
  if (new_zoom > zoom_level_count) new_zoom = zoom_level_count;
  new_width = zoom_levels[new_zoom]; //--------------------------------------------------
  // Update position

  image_zoom_update(new_width);
}

var image_zoom_in = function image_zoom_in(e) {
  image_zoom_change(1);
  return preventPropagationAndDefault(e);
};
var image_zoom_out = function image_zoom_out(e) {
  image_zoom_change(-1);
  return preventPropagationAndDefault(e);
}; //--------------------------------------------------
// Move

function image_move_update(new_left, new_top) {
  //--------------------------------------------------
  // Boundary check
  var max_left = div_half_width - img_current_width,
      max_top = div_half_height - img_current_height;

  if (new_left > div_half_width) {
    new_left = div_half_width;
  }

  if (new_top > div_half_height) {
    new_top = div_half_height;
  }

  if (new_left < max_left) {
    new_left = max_left;
  }

  if (new_top < max_top) {
    new_top = max_top;
  } //--------------------------------------------------
  // Update


  img_current_left = new_left;
  img_current_top = new_top;
  img_ref.style.left = img_current_left + 'px';
  img_ref.style.top = img_current_top + 'px';
}

function image_move_event(e) {
  //--------------------------------------------------
  // Calculations
  var new_cords = event_move_coords(e),
      new_left = move_origin_left + (new_cords[0] - move_origin_cords[0]),
      new_top = move_origin_top + (new_cords[1] - move_origin_cords[1]);
  image_move_update(new_left, new_top); //--------------------------------------------------
  // Prevent default

  return preventDefault(e);
} //--------------------------------------------------
// Image events


function image_event_start(e) {
  //--------------------------------------------------
  // End current events... on zoom, typically 1
  // finger goes down first (move), and we need to
  // cleanup before starting a 2 finger zoom.
  image_event_end(); //--------------------------------------------------
  // Event

  if (e.type === 'touchstart' && e.touches.length == 2) {
    // zoom mode
    //--------------------------------------------------
    // Starting position
    zoom_origin_coords = event_zoom_coords(e);
    zoom_origin_distance = event_zoom_distance(e);
    zoom_origin_width = img_current_width; //--------------------------------------------------
    // Events

    addEventListener(img_ref, 'touchmove', image_zoom_event);
    addEventListener(img_ref, 'touchend', image_event_end);
  } else {
    //--------------------------------------------------
    // Double tap/click event
    var now = new Date().getTime();

    if (click_last > now - 200) {
      image_zoom_in(e);
    } else {
      click_last = now;
    } //--------------------------------------------------
    // Starting position


    move_origin_left = img_current_left;
    move_origin_top = img_current_top;
    move_origin_cords = event_move_coords(e); //--------------------------------------------------
    // Events
    // http://www.quirksmode.org/blog/archives/2010/02/the_touch_actio.html
    // http://www.quirksmode.org/m/tests/drag.html

    if (e.type === 'touchstart') {
      addEventListener(img_ref, 'touchmove', image_move_event);
      addEventListener(img_ref, 'touchend', image_event_end);
    } else {
      addEventListener(document, 'mousemove', image_move_event);
      addEventListener(document, 'mouseup', image_event_end);
    }
  } //--------------------------------------------------
  // Prevent default
  // On small touch screens, it is
  // good to be able to use the grey
  // background to scroll the page.


  if (e.type !== 'touchstart') {
    return preventDefault(e);
  } else if (e.target == img_ref) {
    return preventDefault(e); // The target is the image, so they are trying to move the image.
  } else if (e.touches && e.touches.length > 1) {
    return preventDefault(e); // 2 or more fingers, so they are trying to zoom.
  } else {
    return true;
  }
}

function image_event_end() {
  removeEventListener(img_ref, 'touchmove', image_zoom_event);
  removeEventListener(img_ref, 'touchmove', image_move_event);
  removeEventListener(document, 'mousemove', image_move_event);
  removeEventListener(img_ref, 'touchend', image_event_end);
  removeEventListener(document, 'mouseup', image_event_end);
} //--------------------------------------------------
// Initialisation


var destroyZoomify = function destroyZoomify() {
  if (!div_ref) {
    return;
  }

  removeEventListener(div_ref, 'mousedown', image_event_start);
  removeEventListener(div_ref, 'touchstart', image_event_start);
  div_ref = null;
  img_ref = null;
};
var zoomify = function zoomify(container, image, maxWidth, maxHeight) {
  div_ref = container;
  img_ref = image;

  if (div_ref && img_ref) {
    //--------------------------------------------------
    // Variables
    var div_style, div_width, width; //--------------------------------------------------
    // Wrapper size

    try {
      div_style = getComputedStyle(div_ref, '');
      div_half_width = div_style.getPropertyValue('width');
      div_half_height = div_style.getPropertyValue('height');
    } catch (e) {
      div_half_width = div_ref.currentStyle.width;
      div_half_height = div_ref.currentStyle.height;
    }

    div_half_width = Math.round(parseInt(div_half_width, 10) / 2);
    div_half_height = Math.round(parseInt(div_half_height, 10) / 2); //--------------------------------------------------
    // Original image size

    img_original_width = img_ref.width;
    img_original_height = img_ref.height; //--------------------------------------------------
    // Zoom

    div_width = div_half_width * 2;
    img_current_width = null;
    img_current_height = null;
    img_current_left = null;
    img_current_top = null;
    zoom_limit = null;
    zoom_levels = [div_width];
    width = div_width;

    while (width < maxWidth * 1.6) {
      width = Math.round(width * 1.45);
      zoom_levels.push(width);
    }

    zoom_level_count = zoom_levels.length - 1;
    zoom_min_width = zoom_levels[0];
    zoom_max_width = zoom_levels[zoom_level_count];
    image_zoom_update(zoom_levels[0], 'initialize');
    setTimeout(function () {
      image_zoom_update(zoom_levels[1]);
    }, 20); //--------------------------------------------------
    // Mouse / touch events

    addEventListener(div_ref, 'mousedown', image_event_start);
    addEventListener(div_ref, 'touchstart', image_event_start);
  }
};

/***/ }),
/* 3 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  options = options || {};

  // Options
  const lazyClass = options.lazyClass || "lazy";
  const lazyBackgroundClass = options.lazyBackgroundClass || "lazy-bg";
  const idleLoadTimeout = "idleLoadTimeout" in options ? options.idleLoadTimeout : 200;
  const observeChanges = options.observeChanges || false;
  const events = options.events || {};

  // Shorthands (saves more than a few bytes!)
  const win = window;
  const ric = "requestIdleCallback";
  const io = "IntersectionObserver";

  // App stuff
  const dataAttrs = ["srcset", "src", "poster"];
  const arr = [];
  const queryDOM = (selector, root) => arr.slice.call((root || document).querySelectorAll(selector || `img.${lazyClass},video.${lazyClass},iframe.${lazyClass},.${lazyBackgroundClass}`));

  // This function handles lazy loading of elements.
  const yallLoad = element => {
    const parentNode = element.parentNode;
    let sourceNode;

    if (parentNode.nodeName == "PICTURE") {
      sourceNode = parentNode;
    }

    if (element.nodeName == "VIDEO") {
      sourceNode = element;
    }

    yallApplyFn(queryDOM("source", sourceNode), yallFlipDataAttrs);
    yallFlipDataAttrs(element);

    if (element.autoplay) {
      element.load();
    }

    const classList = element.classList;

    // Lazy load CSS background images
    if (classList.contains(lazyBackgroundClass)) {
      classList.remove(lazyBackgroundClass);
      classList.add(options.lazyBackgroundLoaded || "lazy-bg-loaded");
    }
  };

  const yallBindEvents = element => {
    for (let eventIndex in events) {
      element.addEventListener(eventIndex, events[eventIndex].listener || events[eventIndex], events[eventIndex].options || undefined);
    }
  };

  // Added because there was a number of patterns like this peppered throughout
  // the code. This just flips necessary data- attrs on an element
  const yallFlipDataAttrs = element => {
    for (let dataAttrIndex in dataAttrs) {
      if (dataAttrs[dataAttrIndex] in element.dataset) {
        win["requestAnimationFrame"](() => {
          element.setAttribute(dataAttrs[dataAttrIndex], element.dataset[dataAttrs[dataAttrIndex]]);
        });
      }
    }
  };

  // Noticed lots of loops where a function simply gets executed on every
  // member of an array. This abstraction eliminates that repetiive code.
  const yallApplyFn = (items, fn) => {
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      fn instanceof win[io] ? fn.observe(items[itemIndex]) : fn(items[itemIndex]);
    }
  };

  const yallIntersectionObserve = entry => {
    if (entry.isIntersecting || entry.intersectionRatio) {
      const element = entry.target;

      if (ric in win && idleLoadTimeout) {
        win[ric](() => {
          yallLoad(element);
        }, {
          timeout: idleLoadTimeout
        });
      } else {
        yallLoad(element);
      }

      element.classList.remove(lazyClass);
      intersectionListener.unobserve(element);
      lazyElements = lazyElements.filter(lazyElement => lazyElement != element);

      if (!lazyElements.length && !observeChanges) {
        intersectionListener.disconnect();
      }
    }
  };

  const yallMutationObserve = newElement => {
    if (lazyElements.indexOf(newElement) < 0) {
      lazyElements.push(newElement);
      yallBindEvents(newElement);
      intersectionListener.observe(newElement);
    }
  };

  const yallCreateMutationObserver = entry => {
    new MutationObserver(() => {
      yallApplyFn(queryDOM(), yallMutationObserve);
    }).observe(entry, options.mutationObserverOptions || {
      childList: true,
      subtree: true
    });
  };

  let lazyElements = queryDOM();

  // If the current user agent is a known crawler, immediately load all media
  // for the elements yall is listening for and halt execution (good for SEO).
  if (/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent)) {
    yallApplyFn(lazyElements, yallLoad);

    return;
  }

  if (io in win && `${io}Entry` in win) {
    var intersectionListener = new win[io](entries => {
      yallApplyFn(entries, yallIntersectionObserve);
    }, {
      rootMargin: `${"threshold" in options ? options.threshold : 200}px 0%`
    });

    yallApplyFn(lazyElements, yallBindEvents);
    yallApplyFn(lazyElements, intersectionListener);

    if (observeChanges) {
      yallApplyFn(queryDOM(options.observeRootSelector || "body"), yallCreateMutationObserver);
    }
  }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApp", function() { return loadApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPasswordManager", function() { return initPasswordManager; });
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


var cipher = function cipher(salt) {
  var textToChars = function textToChars(text) {
    return text.split('').map(function (c) {
      return c.charCodeAt(0);
    });
  };

  var byteHex = function byteHex(n) {
    return ("0" + Number(n).toString(16)).substr(-2);
  };

  var applySaltToChar = function applySaltToChar(code) {
    return textToChars(salt).reduce(function (a, b) {
      return a ^ b;
    }, code);
  };

  return function (text) {
    return text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('');
  };
};

var decipher = function decipher(salt) {
  var textToChars = function textToChars(text) {
    return text.split('').map(function (c) {
      return c.charCodeAt(0);
    });
  };

  var saltChars = textToChars(salt);

  var applySaltToChar = function applySaltToChar(code) {
    return textToChars(salt).reduce(function (a, b) {
      return a ^ b;
    }, code);
  };

  return function (encoded) {
    return encoded.match(/.{1,2}/g).map(function (hex) {
      return parseInt(hex, 16);
    }).map(applySaltToChar).map(function (charCode) {
      return String.fromCharCode(charCode);
    }).join('');
  };
};

var loadFile = function () {
  var loader = function loader(fileName, callback) {
    var fileType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'js';
    var fileRequest;

    if (fileType === 'js') {
      fileRequest = document.createElement('script');
      fileRequest.setAttribute('type', "text/javascript");
      fileRequest.setAttribute('src', fileName);
      fileRequest.setAttribute('async', true);

      if (callback) {
        fileRequest.onload = callback;
      }
    } else if (fileType === 'css') {
      fileRequest = document.createElement('link');
      fileRequest.setAttribute('rel', 'stylesheet');
      fileRequest.setAttribute('type', 'text/css');
      fileRequest.setAttribute('href', fileName);
    }

    if (fileRequest) {
      document.getElementsByTagName("head")[0].appendChild(fileRequest);
    }
  };

  return loader;
}();

var loadApp = function () {
  var phase01 = function phase01() {
    loadFile('/js/jquery.3.4.1.min.js', phase02);
  };

  var phase02 = function phase02() {
    loadFile('/js/jquery-ui.min.js', phase03);
  };

  var phase03 = function phase03() {
    loadFile('//cdn.jsdelivr.net/npm/medium-editor@latest/dist/js/medium-editor.min.js', phase04);
  };

  var phase04 = function phase04() {
    loadFile('/js/gallery-editor.js');
  };

  var phase05 = function phase05() {
    if (window.editorInit) {
      window.editorInit();
    } else {
      console.log('window.editorInit not found!');
    }
  };

  return function () {
    phase01();
  };
}();
var initPasswordManager = function () {
  var togglePasswordInput = function togglePasswordInput() {
    var el = document.getElementById('edit-mode-input-wrap');
    var elementStyle = el.getAttribute('style');
    console.log('elementStyle [' + elementStyle + ']');

    if (elementStyle) {
      el.setAttribute("style", "");
    } else {
      el.setAttribute("style", "transform: scale(1,1)");
      var input = document.getElementById('edit-mode-password');
      setTimeout(function () {
        input.focus();
      }, 400);
    }
  };

  var checkHash = function checkHash(e) {
    var value = e.target ? e.target.value : '';

    if (Object(_md5__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === window.passwordHash) {
      loadApp();
      removePasswordInput();
      closeSidebar();
    }
  };

  var removePasswordInput = function removePasswordInput() {
    var asterisk = document.getElementById('edit-mode-asterisk-button');
    asterisk.removeEventListener('click', togglePasswordInput);
    var el = document.getElementById('edit-mode-password');
    el.removeEventListener('keyup', checkHash);
    var div = document.getElementById('edit-mode-ux');
    div.setAttribute('style', 'opacity: 0');
    setTimeout(function () {
      div.parentNode.removeChild(div);
    }, 800);
  };

  var closeSidebar = function closeSidebar() {
    var underlay = document.getElementById('sidebar-menu-underlay-1');
    console.log('gonna click!', underlay);
    underlay.click();
  };

  var hydrateInput = function hydrateInput() {
    var el = document.getElementById('edit-mode-password');
    el.addEventListener('keyup', checkHash);
  };

  var hydrateAsterisk = function hydrateAsterisk() {
    var asterisk = document.getElementById('edit-mode-asterisk-button');
    asterisk.addEventListener('click', togglePasswordInput);
  };

  return function () {
    hydrateAsterisk();
    hydrateInput();
  };
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*
 * http://www.myersdaily.org/joseph/javascript/md5-text.html
 */
var md5cycle = function md5cycle(x, k) {
  var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);
  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);
  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);
  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);
  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);
};

var cmn = function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32(a << s | a >>> 32 - s, b);
};

var ff = function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
};

var gg = function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
};

var hh = function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
};

var ii = function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
};

var md51 = function md51(s) {
  var txt = '',
      n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;

  for (i = 64; i <= s.length; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }

  s = s.substring(i - 64);
  var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (i = 0; i < s.length; i++) {
    tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  }

  tail[i >> 2] |= 0x80 << (i % 4 << 3);

  if (i > 55) {
    md5cycle(state, tail);

    for (i = 0; i < 16; i++) {
      tail[i] = 0;
    }
  }

  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
};
/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */


var md5blk = function md5blk(s) {
  /* I figured global was faster.   */
  var md5blks = [],
      i;
  /* Andy King said do it this way. */

  for (i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }

  return md5blks;
};

var hex_chr = '0123456789abcdef'.split('');

var rhex = function rhex(n) {
  var s = '',
      j = 0;

  for (; j < 4; j++) {
    s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
  }

  return s;
};

var hex = function hex(x) {
  for (var i = 0; i < x.length; i++) {
    x[i] = rhex(x[i]);
  }

  return x.join('');
};

var md5 = global.md5 = function (s) {
  return hex(md51(s));
};
/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */


var add32 = function add32(a, b) {
  return a + b & 0xFFFFFFFF;
};

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
  add32 = function add32(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (md5);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);