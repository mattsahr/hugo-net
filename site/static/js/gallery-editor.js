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
/* harmony import */ var _styles_medium_editor_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_medium_editor_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_medium_editor_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_medium_editor_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _styles_medium_editor_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_medium_editor_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);



var editGallery = function editGallery() {
  var $ = null;

  if (!window.$) {
    return;
  }

  var masterDoc = {
    title: '',
    subA: '',
    subB: '',
    subC: '',
    url: '',
    month: '',
    year: '',
    resources: [],
    gallery_data: []
  };
  var allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  window.masterDoc = masterDoc;

  var moveUpDown = function moveUpDown($upEl, $downEl, upHeight, downHeight) {
    var $switcher = $('<div />', {
      "class": 'up-down-switcher',
      style: 'height: ' + (upHeight + downHeight) + 'px'
    }).insertBefore($downEl);
    $switcher.append($downEl);
    $switcher.append($upEl);
    $upEl.css('transform', 'translate(0, -' + downHeight + 'px)');
    $downEl.css('transform', 'translate(0, ' + upHeight + 'px)');
    setTimeout(function () {
      $downEl.detach();
      $downEl.css('transform', 'translate(0, 0)').css('opacity', 1);
      $upEl.detach();
      $upEl.css('transform', 'translate(0, 0)').css('opacity', 1);
      $upEl.insertBefore($switcher);
      $downEl.insertBefore($switcher);
      $switcher.remove();
    }, 350);
  };

  var moveUp = function moveUp($upEl) {
    var index = $upEl.index();
    var HEIGHT_ADJUSTMENT = 40 * 2 +
    /*padding*/
    6
    /*margins*/
    + 2
    /*borders*/
    ;
    var $downEl = $upEl.siblings('.photoframe:nth-child(' + index + ')');
    var upHeight = $upEl.height() + HEIGHT_ADJUSTMENT;
    var downHeight = $downEl.height() + HEIGHT_ADJUSTMENT;
    moveUpDown($upEl, $downEl, upHeight, downHeight);
  };

  var moveDown = function moveDown($downEl) {
    var index = $downEl.index() + 2;
    var HEIGHT_ADJUSTMENT = 40 * 2 +
    /*padding*/
    6
    /*margins*/
    + 2
    /*borders*/
    ;
    var $upEl = $downEl.siblings('.photoframe:nth-child(' + index + ')');
    var upHeight = $upEl.height() + HEIGHT_ADJUSTMENT;
    var downHeight = $downEl.height() + HEIGHT_ADJUSTMENT;
    moveUpDown($upEl, $downEl, upHeight, downHeight);
  };

  var toggleUnusedPhotos = function toggleUnusedPhotos(forceClose) {
    var $unused = $('#unused-pics-wrap');
    var $closeX = $('.unused-bug .close-x');

    if (forceClose === 'forceClose' || $unused.css('display') === 'block') {
      $unused.css('opacity', '0');
      $closeX.css('display', 'none');
      setTimeout(function () {
        $unused.css('display', 'none');
      }, 300);
    } else {
      $unused.css('display', 'block');
      $closeX.css('display', 'block');
      setTimeout(function () {
        $unused.css('opacity', '1');
      }, 10);
    }
  };

  var hydrateUnusedBug = function hydrateUnusedBug() {
    var $bug = $('.header-column .unused-bug');
    $bug.click(toggleUnusedPhotos);
  };

  var updateUnusedBug = function updateUnusedBug() {
    var unusedPicsIsEmpty = $('#unused-pics .photoframe').length === 0;
    var $bug = $('.header-column .unused-bug');

    if (unusedPicsIsEmpty) {
      toggleUnusedPhotos('forceClose');
      $bug.css('display', 'none');
    } else {
      $bug.css('display', 'flex');
    }
  };

  var removeMe = function removeMe($el) {
    var HEIGHT_ADJUSTMENT = 40 * 2 +
    /*padding*/
    6
    /*margins*/
    + 2
    /*borders*/
    ;
    var heightStyle = 'style="height: ' + ($el.height() + HEIGHT_ADJUSTMENT) + 'px;"';
    $el.wrap('<div class="remove-wrapper" ' + heightStyle + ' />');
    var $removeWrapper = $('.remove-wrapper');
    setTimeout(function () {
      $el.css('transform', 'scale(1, 0) translate(0, -100px)');
      $removeWrapper.css('height', '0px');
    }, 10);
    setTimeout(function () {
      $el.appendTo('#unused-pics');
      $el.css('transform', '');
      setTimeout(function () {
        $removeWrapper.remove();
        updateUnusedBug();
      }, 10);
    }, 350);
  };

  var arrangeRemoveMe = function arrangeRemoveMe($el) {
    var HEIGHT_ADJUSTMENT = 4
    /*padding*/
    + 8
    /*margins*/
    + 2
    /*borders*/
    ;
    var heightStyle = 'style="height: ' + ($el.height() + HEIGHT_ADJUSTMENT) + 'px;"';
    $el.wrap('<div class="remove-wrapper" ' + heightStyle + ' />');
    var $removeWrapper = $('.remove-wrapper');
    $el.css('transform', 'scale(1, 0)');
    setTimeout(function () {
      $el.css('transform', 'scale(1, 0) translate(0, -100px)');
      $removeWrapper.css('height', '0px');
    }, 10);
    setTimeout(function () {
      $el.appendTo('#arrange-unused');
      $el.css('transform', '');
      setTimeout(function () {
        $removeWrapper.remove();
      }, 10);
    }, 350);
  };

  var addMe = function addMe($el) {
    $el.css('transform', 'scale(0, 0)');
    setTimeout(function () {
      $el.prependTo('#good-pics');
      setTimeout(function () {
        updateUnusedBug();
        $el.css('transform', '');
      }, 10);
    }, 350);
  };

  var actuallySaveDoc = function actuallySaveDoc(content, fileName) {
    var data = JSON.stringify(content, null, 2);
    var href = "data:text/json;charset=utf-8," + encodeURIComponent(data);
    var anchor = document.createElement('a');
    anchor.setAttribute("href", href);
    anchor.setAttribute("download", fileName);
    anchor.click();
  };

  var saveMasterDoc = function saveMasterDoc() {
    var url = 'empty-url';
    $('#page-meta input').each(function (index, input) {
      var value = input.value;
      var ref = $(input).attr('data-ref');
      masterDoc[ref] = value;

      if (ref === 'url' && value) {
        url = value;
      }
    });
    var weight = '';
    $('#page-meta select').each(function (index, input) {
      var value = input.value < 10 ? '0' + input.value : input.value;
      weight = value + weight;
    });
    masterDoc.weight = weight;
    var month = $('#page-month').val();
    console.log('month!', month);
    masterDoc.month = month;
    masterDoc.year = $('#page-year').val();
    console.log('year!', masterDoc.year);
    masterDoc.resources = [];
    masterDoc.gallery_data = [];
    $('#good-pics .gallery-pic').each(function (index, photo) {
      var src = $(photo).attr('data-filename');
      masterDoc.resources.push({
        src: src
      });
      masterDoc.gallery_data.push({
        fileLocation: src
      });
    });
    $('#good-pics .photo-description').each(function (index, photo) {
      masterDoc.gallery_data[index].description = photo.innerHTML;
    });
    console.log('MASTER DOC', masterDoc);
    console.log('RESOURCES', masterDoc.gallery_data); // actuallySaveDoc(masterDoc, url + '.json');
  };

  var arrangerMouseTimer = null;

  var populateGalleryFromArranger = function () {
    var getPhotosOrder = function getPhotosOrder() {
      var orderedPhotos = [];
      $('#gallery-arranger .sort-column').each(function (index) {
        $(this).find('.sort-item').each(function (subIndex) {
          orderedPhotos.push(this.getAttribute('data-index'));
        });
      });
      return orderedPhotos;
    };

    var getUnusedOrder = function getUnusedOrder() {
      var unusedPhotos = [];
      $('#arrange-unused .sort-item').each(function (subIndex) {
        unusedPhotos.push(this.getAttribute('data-index'));
      });
      return unusedPhotos;
    };

    var getAllPhotos = function getAllPhotos() {
      var batchA = $.makeArray($('#good-pics .photoframe').detach());
      var batchB = $.makeArray($('#unused-pics .photoframe').detach());
      return batchA.concat(batchB);
    };

    var getPhotoByPicOrder = function getPhotoByPicOrder(orderIndex, batch) {
      var batchIndex = batch.findIndex(function (el) {
        return Number(el.getAttribute('data-pic-order')) === Number(orderIndex);
      });

      if (batchIndex !== -1) {
        return batch.splice(batchIndex, 1);
      }

      return undefined;
    };

    return function () {
      var orderedPhotos = getPhotosOrder();
      var unusedPhotos = getUnusedOrder();
      var batch = getAllPhotos();
      var $goodDiv = $('#good-pics');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = orderedPhotos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var orderIndex = _step.value;
          var photo = getPhotoByPicOrder(orderIndex, batch);

          if (photo) {
            $goodDiv.append(photo);
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

      var $unusedDiv = $('#unused-pics');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = unusedPhotos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _orderIndex = _step2.value;

          var _photo = getPhotoByPicOrder(_orderIndex, batch);

          if (_photo) {
            $unusedDiv.append(_photo);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      updateUnusedBug();
    };
  }();

  var buildArranger = function buildArranger() {
    var $allPics = $('#good-pics .gallery-pic');
    $('body').append('<div id="gallery-arranger" style="display:block;">' + '<div id="close-arranger">X</div>' + '<div id="work-surface"></div>' + '</div>');
    $('body').append('<div id="arrange-unused" style="display: none;" />');
    var $surface = $('#work-surface');
    var totalWidth = $('#gallery-arranger').width(); // CHECK MARK   ✓   FAT CHECK MARK   ✔

    toggleArrangePanel();
    var columns = Math.round(Math.min(5, $allPics.length / 20));
    columns = Math.round(Math.min(columns, totalWidth / 200));
    var perColumn = Math.ceil($allPics.length / columns);
    var index = 0;
    var column = 0;

    if (columns < 1 || totalWidth < 1) {
      return;
    }

    while (index < $allPics.length - 1) {
      $surface.append('<div class="sort-column" id="sort-column-' + column + '" />');
      var $column = $('#sort-column-' + column);

      for (var i = 0; i < perColumn; i++) {
        if ($allPics[index]) {
          var tinySrc = $($allPics[index]).attr('data-tiny');
          $column.append('<div class="sort-item" data-index="' + index + '">' + '<div class="remove-me">X</div>' + '<div class="inner">' + '<div class="img-framer" />' + '<img data-index="' + index + '" src="' + tinySrc + '" />' + '</div>' + '</div>');
        }

        index++;
      }

      column++;
    } // ARRANGE PANEL CLOSE BUTTON


    $('#close-arranger').click(function (e) {
      populateGalleryFromArranger();
      toggleArrangePanel();
    }); // REMOVE AN IMAGE X BUTTON

    $('.sort-item .remove-me').click(function (e) {
      var photoFrame = $(this).parents('.sort-item');
      arrangeRemoveMe(photoFrame);
    }); // IMAGE CLICK SHOW LIGHTBOX

    $('.sort-item img').click(function (e) {
      var dataIndex = $(this).attr('data-index');
      baguetteBox.show(dataIndex, gallery[0]);
    }); // IMAGE EXPAND ON HOVER

    $('.sort-item img').on('mouseenter', function (e) {
      clearTimeout(arrangerMouseTimer);
      var $img = $(this);
      arrangerMouseTimer = setTimeout(function () {
        $img.css('z-index', '10');
        $img.css('box-shadow', '2px 2px 10px rgba(0, 0, 0, 0.8)');
        $img.css('transform', 'scale(3, 3)');
      }, 600);
    }); // IMAGE REDUCE ON MOUSE-OUT

    $('.sort-item img').on('mouseleave', function (e) {
      clearTimeout(arrangerMouseTimer);
      var $img = $(this);
      $img.css('transform', '');
      setTimeout(function () {
        $img.css('box-shadow', '');
        $img.css('z-index', '');
      }, 600);
    }); // DRAG AND DROP FUNCTIONALITY

    $('.sort-column').sortable({
      connectWith: ".sort-column"
    }).disableSelection();
    console.log('PHOTO COUNT', $allPics.length, ' totalW', totalWidth, perColumn, columns);
  };

  var toggleArrangePanel = function toggleArrangePanel() {
    var display = $('#gallery-arranger').css('display');

    if (display === 'block') {
      $('#gallery-arranger').css('opacity', '0');
      setTimeout(function () {
        $('#gallery-arranger').css('display', 'none');
      }, 600);
    } else {
      $('#gallery-arranger').css('display', 'block');
      setTimeout(function () {
        $('#gallery-arranger').css('opacity', '1');
      }, 20);
    }
  };

  var hydrateUpDownUX = function hydrateUpDownUX() {
    $('#good-pics .description-block').addClass('edit-mode').append('<div class="up-down-controls">' + '<div class="move-up-button"><div class="internal">^</div></div>' + '<div class="move-down-button"><div class="internal">v</div></div>' + '</div>');
    $('#good-pics .photoframe').append('<div class="remove-me">X</div>');
    $('#good-pics .photoframe').append('<div class="add-me">+</div>');
    $('.move-up-button').click(function (e) {
      var photoFrame = $(this).parents('.photoframe');
      moveUp(photoFrame);
    });
    $('.move-down-button').click(function (e) {
      var photoFrame = $(this).parents('.photoframe');
      moveDown(photoFrame);
    });
    $('#good-pics .remove-me').click(function (e) {
      var photoFrame = $(this).parents('.photoframe');
      removeMe(photoFrame);
    });
    $('.add-me').click(function (e) {
      var photoFrame = $(this).parents('.photoframe');
      addMe(photoFrame);
    });
  };

  var hydratePageDetails = function hydratePageDetails() {
    var mSelected = function mSelected(mo) {
      return String(mo) === (GalleryEditSettings.month || '0') ? 'selected="selected" ' : '';
    };

    var ySelected = function ySelected(yr) {
      return String(yr) === (GalleryEditSettings.year || '2020') ? 'selected="selected" ' : '';
    };

    var getVal = function getVal(type) {
      return GalleryEditSettings[type] ? 'value="' + GalleryEditSettings[type] + '"' : '';
    };

    var $details = $('#page-details');
    $details.append('<form id="page-meta">' + '<h2>Gallery Page Details</h2>' + '<div class="side">' + '<div class="input-pair">' + '<label for="page-title">Title</label>' + '<input id="page-title" data-ref="title" type="text" ' + getVal('title') + ' />' + '</div>' + '<div class="input-pair">' + '<label for="page-sub-title-A">subtitle A</label>' + '<input id="page-sub-title-A" data-ref="subA" type="text" ' + getVal('subA') + ' />' + '</div>' + '<div class="input-pair">' + '<label for="page-sub-title-B">subtitle B</label>' + '<input id="page-sub-title-B" data-ref="subB" type="text" ' + getVal('subB') + ' />' + '</div>' + '</div>' + '<div class="side">' + '<div class="input-pair">' + '<label for="page-url">URL</label>' + '<input id="page-url" type="text" data-ref="url"  placeholder="my-page-slug" ' + getVal('url') + ' />' + '</div>' + '<div class="input-pair">' + '<label for="page-month">Month</label>' + '<select id="page-month">' + '<option value="0"' + mSelected(0) + '>' + allMonths[0] + '</option>' + '<option value="1"' + mSelected(1) + '>' + allMonths[1] + '</option>' + '<option value="2"' + mSelected(2) + '>' + allMonths[2] + '</option>' + '<option value="3"' + mSelected(3) + '>' + allMonths[3] + '</option>' + '<option value="4"' + mSelected(4) + '>' + allMonths[4] + '</option>' + '<option value="5"' + mSelected(5) + '>' + allMonths[5] + '</option>' + '<option value="6"' + mSelected(6) + '>' + allMonths[6] + '</option>' + '<option value="7"' + mSelected(7) + '>' + allMonths[7] + '</option>' + '<option value="8"' + mSelected(8) + '>' + allMonths[8] + '</option>' + '<option value="9"' + mSelected(9) + '>' + allMonths[9] + '</option>' + '<option value="10"' + mSelected(10) + '>' + allMonths[10] + '</option>' + '<option value="11"' + mSelected(11) + '>' + allMonths[11] + '</option>' + '</select>' + '</div>' + '<div class="input-pair">' + '<label for="page-year">Year</label>' + '<select id="page-year">' + '<option value="2021"' + ySelected(2021) + '>2021</option>' + '<option value="2020"' + ySelected(2020) + '>2020</option>' + '<option value="2019"' + ySelected(2019) + '>2019</option>' + '<option value="2018"' + ySelected(2018) + '>2018</option>' + '<option value="2017"' + ySelected(2017) + '>2017</option>' + '<option value="2016"' + ySelected(2016) + '>2016</option>' + '<option value="2015"' + ySelected(2015) + '>2015</option>' + '<option value="2014"' + ySelected(2014) + '>2014</option>' + '<option value="2013"' + ySelected(2013) + '>2013</option>' + '<option value="2012"' + ySelected(2012) + '>2012</option>' + '<option value="2011"' + ySelected(2011) + '>2011</option>' + '<option value="2010"' + ySelected(2010) + '>2010</option>' + '</select>' + '</div>' + '</div>' + '<div class="button-frame">' + '<button id="save-doc">Save Gallery</button>' + '<button id="arrange-button">Arrange</button>' + '</div>' + '</form>');
    $('#save-doc').on('click', function (e) {
      e.preventDefault();
      saveMasterDoc();
    });
    $('#arrange-button').on('click', function (e) {
      e.preventDefault();
      toggleArrangePanel();
    });
    var height = $('#page-meta').height();
    $details.css('height', height + 40 + 'px');
  };

  var hydrateDescriptionUX = function hydrateDescriptionUX() {
    $('.original-description').css('display', 'none');
    $('#good-pics .description-block').addClass('edit-mode').append('<div class="text-area-wrap">' + '<h4>Description</h4>' + '<div class="photo-description" />' + '</div>');
    $('#good-pics .photoframe').each(function (index, el) {
      var content = $(el).find('.original-description').html();

      if (content) {
        $(el).find('.photo-description').html(content);
      }
    });
  };

  var Editor = null;

  var initMediumEditor = function initMediumEditor() {
    if (typeof window.MediumEditor !== 'undefined') {
      var elements = document.querySelectorAll('.photo-description');
      Editor = new window.MediumEditor(elements);
    }
  };

  var init = function init() {
    $ = window.$;

    $.fn.filterByData = function (prop, val) {
      return this.filter(function () {
        return $(this).data(prop) == val;
      });
    };

    var details = $('#page-details');

    if (details.length) {
      hydrateUpDownUX();
      hydrateUnusedBug();
      hydrateDescriptionUX();
      hydratePageDetails();
      buildArranger();
      initMediumEditor();
    } else {
      console.log('NO DETAILS');
    }
  };

  init();
};

editGallery();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(4)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".medium-editor-anchor-preview, .medium-editor-toolbar {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 16px;\n  z-index: 2000; }\n\n@-webkit-keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@-webkit-keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n    transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n    transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n    transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n    transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n@keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n    transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n    transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n    transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n    transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n.medium-editor-anchor-preview {\n  left: 0;\n  line-height: 1.4;\n  max-width: 280px;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  visibility: hidden; }\n\n.medium-editor-anchor-preview a {\n  color: #fff;\n  display: inline-block;\n  margin: 5px 5px 10px; }\n\n.medium-editor-placeholder-relative:after, .medium-editor-placeholder:after {\n  content: attr(data-placeholder) !important;\n  white-space: pre;\n  padding: inherit;\n  margin: inherit;\n  font-style: italic; }\n\n.medium-editor-anchor-preview-active {\n  visibility: visible; }\n\n.medium-editor-dragover {\n  background: #ddd; }\n\n.medium-editor-image-loading {\n  -webkit-animation: medium-editor-image-loading 1s infinite ease-in-out;\n  animation: medium-editor-image-loading 1s infinite ease-in-out;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  height: 40px;\n  width: 40px; }\n\n.medium-editor-placeholder {\n  position: relative; }\n\n.medium-editor-placeholder:after {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.medium-editor-placeholder-relative, .medium-editor-placeholder-relative:after {\n  position: relative; }\n\n.medium-toolbar-arrow-over:before, .medium-toolbar-arrow-under:after {\n  border-style: solid;\n  content: '';\n  display: block;\n  height: 0;\n  left: 50%;\n  margin-left: -8px;\n  position: absolute;\n  width: 0; }\n\n.medium-toolbar-arrow-under:after {\n  border-width: 8px 8px 0; }\n\n.medium-toolbar-arrow-over:before {\n  border-width: 0 8px 8px;\n  top: -8px; }\n\n.medium-editor-toolbar {\n  left: 0;\n  position: absolute;\n  top: 0;\n  visibility: hidden; }\n\n.medium-editor-toolbar ul {\n  margin: 0;\n  padding: 0; }\n\n.medium-editor-toolbar li {\n  float: left;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.medium-editor-toolbar li button {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  font-size: 14px;\n  line-height: 1.33;\n  margin: 0;\n  padding: 15px;\n  text-decoration: none; }\n\n.medium-editor-toolbar li button:focus {\n  outline: 0; }\n\n.medium-editor-toolbar li .medium-editor-action-underline {\n  text-decoration: underline; }\n\n.medium-editor-toolbar li .medium-editor-action-pre {\n  font-family: Consolas,\"Liberation Mono\",Menlo,Courier,monospace;\n  font-size: 12px;\n  font-weight: 100;\n  padding: 15px 0; }\n\n.medium-editor-toolbar-active {\n  visibility: visible; }\n\n.medium-editor-sticky-toolbar {\n  position: fixed;\n  top: 1px; }\n\n.medium-editor-relative-toolbar {\n  position: relative; }\n\n.medium-editor-toolbar-active.medium-editor-stalker-toolbar {\n  -webkit-animation: medium-editor-pop-upwards 160ms forwards linear;\n  animation: medium-editor-pop-upwards 160ms forwards linear; }\n\n.medium-editor-action-bold {\n  font-weight: bolder; }\n\n.medium-editor-action-italic {\n  font-style: italic; }\n\n.medium-editor-toolbar-form {\n  display: none; }\n\n.medium-editor-toolbar-form a, .medium-editor-toolbar-form input {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-form-row {\n  line-height: 14px;\n  margin-left: 5px;\n  padding-bottom: 5px; }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input, .medium-editor-toolbar-form label {\n  border: none;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin: 0;\n  padding: 6px;\n  width: 316px;\n  display: inline-block; }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input:focus, .medium-editor-toolbar-form label:focus {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  box-shadow: none;\n  outline: 0; }\n\n.medium-editor-toolbar-form a {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bolder;\n  margin: 0 10px;\n  text-decoration: none; }\n\n.medium-editor-toolbar-form-active {\n  display: block; }\n\n.medium-editor-toolbar-actions:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.medium-editor-element {\n  word-wrap: break-word;\n  min-height: 30px; }\n\n.medium-editor-element img {\n  max-width: 100%; }\n\n.medium-editor-element sub {\n  vertical-align: sub; }\n\n.medium-editor-element sup {\n  vertical-align: super; }\n\n.medium-editor-hidden {\n  display: none; }\n", "",{"version":3,"sources":["c:/zerver/hugo-net/site/babel/styles/medium-editor.min.css"],"names":[],"mappings":"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","file":"medium-editor.min.css","sourcesContent":[".medium-editor-anchor-preview,.medium-editor-toolbar{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:16px;z-index:2000}@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}.medium-editor-anchor-preview{left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-placeholder-relative:after,.medium-editor-placeholder:after{content:attr(data-placeholder)!important;white-space:pre;padding:inherit;margin:inherit;font-style:italic}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{position:absolute;left:0;top:0}.medium-editor-placeholder-relative,.medium-editor-placeholder-relative:after{position:relative}.medium-toolbar-arrow-over:before,.medium-toolbar-arrow-under:after{border-style:solid;content:'';display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0}.medium-toolbar-arrow-over:before{border-width:0 8px 8px;top:-8px}.medium-editor-toolbar{left:0;position:absolute;top:0;visibility:hidden}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:0}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas,\"Liberation Mono\",Menlo,Courier,monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards 160ms forwards linear;animation:medium-editor-pop-upwards 160ms forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form a,.medium-editor-toolbar-form input{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:\"\";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}"]}]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(4)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".medium-toolbar-arrow-under:after {\n  border-color: #428bca transparent transparent transparent;\n  top: 60px; }\n\n.medium-toolbar-arrow-over:before {\n  border-color: transparent transparent #428bca transparent; }\n\n.medium-editor-toolbar {\n  background-color: #428bca;\n  border: 1px solid #357ebd;\n  border-radius: 4px; }\n\n.medium-editor-toolbar li button {\n  background-color: transparent;\n  border: none;\n  border-right: 1px solid #357ebd;\n  box-sizing: border-box;\n  color: #fff;\n  height: 60px;\n  min-width: 60px;\n  -webkit-transition: background-color .2s ease-in, color .2s ease-in;\n  transition: background-color .2s ease-in, color .2s ease-in; }\n\n.medium-editor-toolbar li button:hover {\n  background-color: #3276b1;\n  color: #fff; }\n\n.medium-editor-toolbar li .medium-editor-button-first {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.medium-editor-toolbar li .medium-editor-button-last {\n  border-bottom-right-radius: 4px;\n  border-right: none;\n  border-top-right-radius: 4px; }\n\n.medium-editor-toolbar li .medium-editor-button-active {\n  background-color: #3276b1;\n  color: #fff; }\n\n.medium-editor-toolbar-form {\n  background: #428bca;\n  border-radius: 4px;\n  color: #fff; }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input {\n  background: #428bca;\n  color: #fff;\n  height: 60px; }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input::-webkit-input-placeholder {\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8); }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8); }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8); }\n\n.medium-editor-toolbar-form .medium-editor-toolbar-input:-ms-input-placeholder {\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8); }\n\n.medium-editor-toolbar-form a {\n  color: #fff; }\n\n.medium-editor-toolbar-anchor-preview {\n  background: #428bca;\n  border-radius: 4px;\n  color: #fff; }\n\n.medium-editor-placeholder:after {\n  color: #357ebd; }\n", "",{"version":3,"sources":["c:/zerver/hugo-net/site/babel/styles/medium-editor-bootstrap.css"],"names":[],"mappings":"AAAA;EACE,yDAAyD;EACzD,SAAS,EAAA;;AAEX;EACE,yDAAyD,EAAA;;AAE3D;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB,EAAA;;AAClB;EACE,6BAA6B;EAC7B,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,mEAAmE;EAC3D,2DAA2D,EAAA;;AACnE;EACE,yBAAyB;EACzB,WAAW,EAAA;;AACf;EACE,8BAA8B;EAC9B,2BAA2B,EAAA;;AAC7B;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,4BAA4B,EAAA;;AAC9B;EACE,yBAAyB;EACzB,WAAW,EAAA;;AAEf;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW,EAAA;;AACX;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY,EAAA;;AACZ;EACE,WAAW;EACX,+BAA+B,EAAA;;AACjC;EACE,gBAAA;EACA,WAAW;EACX,+BAA+B,EAAA;;AACjC;EACE,gBAAA;EACA,WAAW;EACX,+BAA+B,EAAA;;AACjC;EACE,WAAW;EACX,+BAA+B,EAAA;;AACnC;EACE,WAAW,EAAA;;AAEf;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW,EAAA;;AAEb;EACE,cAAc,EAAA","file":"medium-editor-bootstrap.css","sourcesContent":[".medium-toolbar-arrow-under:after {\n  border-color: #428bca transparent transparent transparent;\n  top: 60px; }\n\n.medium-toolbar-arrow-over:before {\n  border-color: transparent transparent #428bca transparent; }\n\n.medium-editor-toolbar {\n  background-color: #428bca;\n  border: 1px solid #357ebd;\n  border-radius: 4px; }\n  .medium-editor-toolbar li button {\n    background-color: transparent;\n    border: none;\n    border-right: 1px solid #357ebd;\n    box-sizing: border-box;\n    color: #fff;\n    height: 60px;\n    min-width: 60px;\n    -webkit-transition: background-color .2s ease-in, color .2s ease-in;\n            transition: background-color .2s ease-in, color .2s ease-in; }\n    .medium-editor-toolbar li button:hover {\n      background-color: #3276b1;\n      color: #fff; }\n  .medium-editor-toolbar li .medium-editor-button-first {\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px; }\n  .medium-editor-toolbar li .medium-editor-button-last {\n    border-bottom-right-radius: 4px;\n    border-right: none;\n    border-top-right-radius: 4px; }\n  .medium-editor-toolbar li .medium-editor-button-active {\n    background-color: #3276b1;\n    color: #fff; }\n\n.medium-editor-toolbar-form {\n  background: #428bca;\n  border-radius: 4px;\n  color: #fff; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-input {\n    background: #428bca;\n    color: #fff;\n    height: 60px; }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input::-webkit-input-placeholder {\n      color: #fff;\n      color: rgba(255, 255, 255, 0.8); }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input:-moz-placeholder {\n      /* Firefox 18- */\n      color: #fff;\n      color: rgba(255, 255, 255, 0.8); }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #fff;\n      color: rgba(255, 255, 255, 0.8); }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input:-ms-input-placeholder {\n      color: #fff;\n      color: rgba(255, 255, 255, 0.8); }\n  .medium-editor-toolbar-form a {\n    color: #fff; }\n\n.medium-editor-toolbar-anchor-preview {\n  background: #428bca;\n  border-radius: 4px;\n  color: #fff; }\n\n.medium-editor-placeholder:after {\n  color: #357ebd; }\n"]}]);


/***/ })
/******/ ]);