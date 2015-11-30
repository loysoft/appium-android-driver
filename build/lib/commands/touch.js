'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mobileJsonWireProtocol = require('mobile-json-wire-protocol');

var _asyncbox = require('asyncbox');

var commands = {},
    helpers = {},
    extensions = {};

commands.doTouchAction = function callee$0$0(action, opts) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.t0 = action;
        context$1$0.next = context$1$0.t0 === 'tap' ? 3 : context$1$0.t0 === 'press' ? 6 : context$1$0.t0 === 'release' ? 9 : context$1$0.t0 === 'moveTo' ? 12 : context$1$0.t0 === 'wait' ? 15 : context$1$0.t0 === 'longPress' ? 18 : context$1$0.t0 === 'cancel' ? 22 : 24;
        break;

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.tap(opts.element, opts.x, opts.y, opts.count));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.touchDown(opts.element, opts.x, opts.y));

      case 8:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.touchUp(opts.element, opts.x, opts.y));

      case 11:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(this.touchMove(opts.element, opts.x, opts.y));

      case 14:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 15:
        context$1$0.next = 17;
        return _regeneratorRuntime.awrap(_bluebird2['default'].delay(opts.ms));

      case 17:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 18:
        if (typeof opts.duration === 'undefined' || !opts.duration) {
          opts.duration = 1000;
        }
        context$1$0.next = 21;
        return _regeneratorRuntime.awrap(this.touchLongClick(opts.element, opts.x, opts.y, opts.duration));

      case 21:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 22:
        // TODO: clarify behavior of 'cancel' action and fix this
        _logger2['default'].warn("Cancel action currently has no effect");
        return context$1$0.abrupt('break', 25);

      case 24:
        _logger2['default'].errorAndThrow('unknown action ' + action);

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// drag is *not* press-move-release, so we need to translate
// drag works fine for scroll, as well
commands.doTouchDrag = function callee$0$0(gestures) {
  var longPress, moveTo, startX, startY, endX, endY, loc, apiLevel, duration;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        longPress = gestures[0];
        moveTo = gestures[1];
        startX = longPress.options.x || 0, startY = longPress.options.y || 0, endX = moveTo.options.x || 0, endY = moveTo.options.y || 0;

        if (!longPress.options.element) {
          context$1$0.next = 9;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.getLocationInView(longPress.options.element));

      case 6:
        loc = context$1$0.sent;

        startX += loc.x || 0;
        startY += loc.y || 0;

      case 9:
        if (!moveTo.options.element) {
          context$1$0.next = 15;
          break;
        }

        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.getLocationInView(moveTo.options.element));

      case 12:
        loc = context$1$0.sent;

        endX += loc.x || 0;
        endY += loc.y || 0;

      case 15:
        context$1$0.next = 17;
        return _regeneratorRuntime.awrap(this.adb.getApiLevel());

      case 17:
        apiLevel = context$1$0.sent;
        duration = apiLevel >= 5 ? 2 : 1;
        context$1$0.next = 21;
        return _regeneratorRuntime.awrap(this.drag(startX, startY, endX, endY, duration, 1, longPress.options.element, moveTo.options.element));

      case 21:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 22:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Release gesture needs element or co-ordinates to release it from that position
// or else release gesture is performed from center of the screen, so to fix it
// This method sets co-ordinates/element to release gesture if it has no options set already.
helpers.fixRelease = function callee$0$0(gestures, release) {
  var ref, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, gesture, opts, loc, size;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // sometimes there are no options
        release.options = release.options || {};
        // nothing to do if release options are already set

        if (!(release.options.element || release.options.x && release.options.y)) {
          context$1$0.next = 3;
          break;
        }

        return context$1$0.abrupt('return');

      case 3:
        // without coordinates, `release` uses the center of the screen, which,
        // generally speaking, is not what we want
        // therefore: loop backwards and use the last command with an element and/or
        // offset coordinates
        gestures = _lodash2['default'].clone(gestures);
        ref = null;
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 8;
        _iterator = _getIterator(gestures.reverse());

      case 10:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 19;
          break;
        }

        gesture = _step.value;
        opts = gesture.options;

        ref = opts.element || opts.x && opts.y;

        if (!ref) {
          context$1$0.next = 16;
          break;
        }

        return context$1$0.abrupt('break', 19);

      case 16:
        _iteratorNormalCompletion = true;
        context$1$0.next = 10;
        break;

      case 19:
        context$1$0.next = 25;
        break;

      case 21:
        context$1$0.prev = 21;
        context$1$0.t0 = context$1$0['catch'](8);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 25:
        context$1$0.prev = 25;
        context$1$0.prev = 26;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 28:
        context$1$0.prev = 28;

        if (!_didIteratorError) {
          context$1$0.next = 31;
          break;
        }

        throw _iteratorError;

      case 31:
        return context$1$0.finish(28);

      case 32:
        return context$1$0.finish(25);

      case 33:
        if (!ref) {
          context$1$0.next = 44;
          break;
        }

        opts = ref.options || {};

        if (!opts.element) {
          context$1$0.next = 43;
          break;
        }

        context$1$0.next = 38;
        return _regeneratorRuntime.awrap(this.getLocationInView(opts.element));

      case 38:
        loc = context$1$0.sent;
        context$1$0.next = 41;
        return _regeneratorRuntime.awrap(this.getSize(opts.element));

      case 41:
        size = context$1$0.sent;

        release.options = {
          element: opts.element,
          x: loc.x + size.width / 2,
          y: loc.y + size.height / 2
        };

      case 43:
        if (opts.x && opts.y) {
          release.options = _lodash2['default'].pick(opts, 'x', 'y');
        }

      case 44:
        return context$1$0.abrupt('return', release);

      case 45:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[8, 21, 25, 33], [26,, 28, 32]]);
};

// Perform one gesture
helpers.performGesture = function callee$0$0(gesture) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.doTouchAction(gesture.action, gesture.options || {}));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
        context$1$0.prev = 6;
        context$1$0.t0 = context$1$0['catch'](0);

        if (!((0, _mobileJsonWireProtocol.isErrorType)(context$1$0.t0, _mobileJsonWireProtocol.errors.NoSuchElementError) && gesture.action === 'release' && gesture.options.element)) {
          context$1$0.next = 14;
          break;
        }

        delete gesture.options.element;
        _logger2['default'].debug('retrying release without element opts: ' + gesture.options + '.');
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.doTouchAction(gesture.action, gesture.options || {}));

      case 13:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 14:
        throw context$1$0.t0;

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 6]]);
};

commands.performTouch = function callee$0$0(gestures) {
  var swipeOpts, actions, fixedGestures, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, g;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.isWebContext()) {
          context$1$0.next = 2;
          break;
        }

        throw new _mobileJsonWireProtocol.errors.NotYetImplementedError();

      case 2:
        if (!(gestures.length === 4 && gestures[0].action === 'press' && gestures[1].action === 'wait' && gestures[2].action === 'moveTo' && gestures[3].action === 'release')) {
          context$1$0.next = 9;
          break;
        }

        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.getSwipeOptions(gestures));

      case 5:
        swipeOpts = context$1$0.sent;
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.swipe(swipeOpts.startX, swipeOpts.startY, swipeOpts.endX, swipeOpts.endY, swipeOpts.duration, swipeOpts.touchCount, swipeOpts.element));

      case 8:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 9:
        actions = _lodash2['default'].pluck(gestures, "action");

        if (!(actions[0] === 'longPress' && actions[1] === 'moveTo' && actions[2] === 'release')) {
          context$1$0.next = 16;
          break;
        }

        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.doTouchDrag(gestures));

      case 13:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 16:
        // `press` without a wait is too slow and gets interpretted as a `longPress`
        if (actions[actions.length - 2] === 'press' && actions[actions.length - 1] === 'release') {
          actions[actions.length - 2] = 'tap';
          gestures[gestures.length - 2].action = 'tap';
        }

        // the `longPress` and `tap` methods release on their own
        if ((actions[actions.length - 2] === 'tap' || actions[actions.length - 2] === 'longPress') && actions[actions.length - 1] === 'release') {
          gestures.pop();
          actions.pop();
        }

        // fix release action then perform all actions

        if (!(actions[actions.length - 1] === 'release')) {
          context$1$0.next = 22;
          break;
        }

        context$1$0.next = 21;
        return _regeneratorRuntime.awrap(this.fixRelease(gestures, actions));

      case 21:
        actions[actions.length - 1] = context$1$0.sent;

      case 22:
        context$1$0.next = 24;
        return _regeneratorRuntime.awrap(this.parseTouch(gestures, false));

      case 24:
        fixedGestures = context$1$0.sent;
        _iteratorNormalCompletion2 = true;
        _didIteratorError2 = false;
        _iteratorError2 = undefined;
        context$1$0.prev = 28;
        _iterator2 = _getIterator(fixedGestures);

      case 30:
        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
          context$1$0.next = 37;
          break;
        }

        g = _step2.value;
        context$1$0.next = 34;
        return _regeneratorRuntime.awrap(this.performGesture(g));

      case 34:
        _iteratorNormalCompletion2 = true;
        context$1$0.next = 30;
        break;

      case 37:
        context$1$0.next = 43;
        break;

      case 39:
        context$1$0.prev = 39;
        context$1$0.t0 = context$1$0['catch'](28);
        _didIteratorError2 = true;
        _iteratorError2 = context$1$0.t0;

      case 43:
        context$1$0.prev = 43;
        context$1$0.prev = 44;

        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }

      case 46:
        context$1$0.prev = 46;

        if (!_didIteratorError2) {
          context$1$0.next = 49;
          break;
        }

        throw _iteratorError2;

      case 49:
        return context$1$0.finish(46);

      case 50:
        return context$1$0.finish(43);

      case 51:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[28, 39, 43, 51], [44,, 46, 50]]);
};

helpers.parseTouch = function callee$0$0(gestures, multi) {
  var touchStateObjects, prevPos, time, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, state, timeOffset;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // because multi-touch releases at the end by default
        if (multi && _lodash2['default'].last(gestures).action === 'release') {
          gestures.pop();
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _asyncbox.asyncmap)(gestures, function callee$1$0(gesture) {
          var options, elementId, pos, size, touchStateObject, offset;
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                options = gesture.options;

                if (!_lodash2['default'].contains(['press', 'moveTo', 'tap', 'longPress'], gesture.action)) {
                  context$2$0.next = 23;
                  break;
                }

                options.offset = false;
                elementId = gesture.options.element;

                if (!elementId) {
                  context$2$0.next = 16;
                  break;
                }

                context$2$0.next = 7;
                return _regeneratorRuntime.awrap(this.getLocationInView(elementId));

              case 7:
                pos = context$2$0.sent;
                context$2$0.next = 10;
                return _regeneratorRuntime.awrap(this.getSize(elementId));

              case 10:
                size = context$2$0.sent;

                if (gesture.options.x || gesture.options.y) {
                  options.x = pos.x + (gesture.options.x || 0);
                  options.y = pos.y + (gesture.options.y || 0);
                } else {
                  options.x = pos.x + size.width / 2;
                  options.y = pos.y + size.height / 2;
                }
                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: 0.005
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 16:
                // expects absolute coordinates, so we need to save these as offsets
                // and then translate when everything is done
                options.offset = true;
                options.x = gesture.options.x || 0;
                options.y = gesture.options.y || 0;

                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: 0.005
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 21:
                context$2$0.next = 27;
                break;

              case 23:
                offset = 0.005;

                if (gesture.action === 'wait') {
                  options = gesture.options;
                  offset = parseInt(gesture.options.ms) / 1000;
                }
                touchStateObject = {
                  action: gesture.action,
                  options: options,
                  timeOffset: offset
                };
                return context$2$0.abrupt('return', touchStateObject);

              case 27:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }, false));

      case 3:
        touchStateObjects = context$1$0.sent;
        prevPos = null, time = 0;
        _iteratorNormalCompletion3 = true;
        _didIteratorError3 = false;
        _iteratorError3 = undefined;
        context$1$0.prev = 8;

        for (_iterator3 = _getIterator(touchStateObjects); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          state = _step3.value;

          if (_lodash2['default'].isUndefined(state.options.x) && _lodash2['default'].isUndefined(state.options.y)) {
            // this happens with wait
            state.options.x = prevPos.x;
            state.options.y = prevPos.y;
          }
          if (state.options.offset && prevPos) {
            // the current position is an offset
            state.options.x += prevPos.x;
            state.options.y += prevPos.y;
          }
          delete state.options.offset;
          prevPos = state.options;

          if (multi) {
            timeOffset = state.timeOffset;

            time += timeOffset;
            state.time = _androidHelpers2['default'].truncateDecimals(time, 3);

            // multi gestures require 'touch' rather than 'options'
            state.touch = state.options;
            delete state.options;
          }
          delete state.timeOffset;
        }
        context$1$0.next = 16;
        break;

      case 12:
        context$1$0.prev = 12;
        context$1$0.t0 = context$1$0['catch'](8);
        _didIteratorError3 = true;
        _iteratorError3 = context$1$0.t0;

      case 16:
        context$1$0.prev = 16;
        context$1$0.prev = 17;

        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }

      case 19:
        context$1$0.prev = 19;

        if (!_didIteratorError3) {
          context$1$0.next = 22;
          break;
        }

        throw _iteratorError3;

      case 22:
        return context$1$0.finish(19);

      case 23:
        return context$1$0.finish(16);

      case 24:
        return context$1$0.abrupt('return', touchStateObjects);

      case 25:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[8, 12, 16, 24], [17,, 19, 23]]);
};

commands.performMultiAction = function callee$0$0(actions, elementId) {
  var states, opts;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this2 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.isWebContext()) {
          context$1$0.next = 2;
          break;
        }

        throw new _mobileJsonWireProtocol.errors.NotYetImplementedError();

      case 2:
        if (!(actions.length === 1)) {
          context$1$0.next = 4;
          break;
        }

        throw new Error("Multi Pointer Gestures need at least two actions. " + "Use Touch Actions for a single action.");

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap((0, _asyncbox.asyncmap)(actions, function callee$1$0(action) {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.parseTouch(action, true));

              case 2:
                return context$2$0.abrupt('return', context$2$0.sent);

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this2);
        }, false));

      case 6:
        states = context$1$0.sent;
        opts = undefined;

        if (!elementId) {
          context$1$0.next = 15;
          break;
        }

        opts = {
          elementId: elementId,
          actions: states
        };
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:performMultiPointerGesture", opts));

      case 12:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 15:
        opts = {
          actions: states
        };
        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("performMultiPointerGesture", opts));

      case 18:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 19:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// lollipop takes a little longer to get things rolling

// `drag` will take care of whether there is an element or not at that level

// we retrieve the element location, might be useful in
// case the element becomes invalid

// sometime the element is not available when releasing, retry without it

// press-wait-moveTo-release is `swipe`, so use native method

// some things are special

// we need to change the time (which is now an offset)
// and the position (which may be an offset)

// Android needs at least two actions to be able to perform a multi pointer gesture
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy90b3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztzQkFBZ0IsV0FBVzs7OztzQkFDYixRQUFROzs7OzhCQUNLLG9CQUFvQjs7Ozt3QkFDakMsVUFBVTs7OztzQ0FDWSwyQkFBMkI7O3dCQUN0QyxVQUFVOztBQUVuQyxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVqRCxRQUFRLENBQUMsYUFBYSxHQUFHLG9CQUFnQixNQUFNLEVBQUUsSUFBSTs7Ozt5QkFDM0MsTUFBTTs4Q0FDUCxLQUFLLDBCQUVMLE9BQU8sMEJBRVAsU0FBUywwQkFFVCxRQUFRLDJCQUVSLE1BQU0sMkJBRU4sV0FBVywyQkFLWCxRQUFROzs7Ozt5Q0FkRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7eUNBRWxELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7eUNBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7eUNBRTFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7eUNBRTVDLHNCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFN0IsWUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtB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WyJpbXBvcnQgbG9nIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFuZHJvaWRIZWxwZXJzIGZyb20gJy4uL2FuZHJvaWQtaGVscGVycyc7XG5pbXBvcnQgQiBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgeyBlcnJvcnMsIGlzRXJyb3JUeXBlIH0gZnJvbSAnbW9iaWxlLWpzb24td2lyZS1wcm90b2NvbCc7XG5pbXBvcnQgeyBhc3luY21hcCB9IGZyb20gJ2FzeW5jYm94JztcblxubGV0IGNvbW1hbmRzID0ge30sIGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xuXG5jb21tYW5kcy5kb1RvdWNoQWN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGFjdGlvbiwgb3B0cykge1xuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgJ3RhcCc6XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50YXAob3B0cy5lbGVtZW50LCBvcHRzLngsIG9wdHMueSwgb3B0cy5jb3VudCk7XG4gICAgY2FzZSAncHJlc3MnOlxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudG91Y2hEb3duKG9wdHMuZWxlbWVudCwgb3B0cy54LCBvcHRzLnkpO1xuICAgIGNhc2UgJ3JlbGVhc2UnOlxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudG91Y2hVcChvcHRzLmVsZW1lbnQsIG9wdHMueCwgb3B0cy55KTtcbiAgICBjYXNlICdtb3ZlVG8nOlxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudG91Y2hNb3ZlKG9wdHMuZWxlbWVudCwgb3B0cy54LCBvcHRzLnkpO1xuICAgIGNhc2UgJ3dhaXQnOlxuICAgICAgcmV0dXJuIGF3YWl0IEIuZGVsYXkob3B0cy5tcyk7XG4gICAgY2FzZSAnbG9uZ1ByZXNzJzpcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5kdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIW9wdHMuZHVyYXRpb24pIHtcbiAgICAgICAgb3B0cy5kdXJhdGlvbiA9IDEwMDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50b3VjaExvbmdDbGljayhvcHRzLmVsZW1lbnQsIG9wdHMueCwgb3B0cy55LCBvcHRzLmR1cmF0aW9uKTtcbiAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgLy8gVE9ETzogY2xhcmlmeSBiZWhhdmlvciBvZiAnY2FuY2VsJyBhY3Rpb24gYW5kIGZpeCB0aGlzXG4gICAgICBsb2cud2FybihcIkNhbmNlbCBhY3Rpb24gY3VycmVudGx5IGhhcyBubyBlZmZlY3RcIik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbG9nLmVycm9yQW5kVGhyb3coYHVua25vd24gYWN0aW9uICR7YWN0aW9ufWApO1xuICB9XG59O1xuXG5cbi8vIGRyYWcgaXMgKm5vdCogcHJlc3MtbW92ZS1yZWxlYXNlLCBzbyB3ZSBuZWVkIHRvIHRyYW5zbGF0ZVxuLy8gZHJhZyB3b3JrcyBmaW5lIGZvciBzY3JvbGwsIGFzIHdlbGxcbmNvbW1hbmRzLmRvVG91Y2hEcmFnID0gYXN5bmMgZnVuY3Rpb24gKGdlc3R1cmVzKSB7XG4gIGxldCBsb25nUHJlc3MgPSBnZXN0dXJlc1swXTtcbiAgbGV0IG1vdmVUbyA9IGdlc3R1cmVzWzFdO1xuICBsZXQgc3RhcnRYID0gbG9uZ1ByZXNzLm9wdGlvbnMueCB8fCAwLFxuICAgICAgc3RhcnRZID0gbG9uZ1ByZXNzLm9wdGlvbnMueSB8fCAwLFxuICAgICAgZW5kWCA9IG1vdmVUby5vcHRpb25zLnggfHwgMCxcbiAgICAgIGVuZFkgPSBtb3ZlVG8ub3B0aW9ucy55IHx8IDA7XG4gIGlmIChsb25nUHJlc3Mub3B0aW9ucy5lbGVtZW50KSB7XG4gICAgbGV0IGxvYyA9IGF3YWl0IHRoaXMuZ2V0TG9jYXRpb25JblZpZXcobG9uZ1ByZXNzLm9wdGlvbnMuZWxlbWVudCk7XG4gICAgc3RhcnRYICs9IGxvYy54IHx8IDA7XG4gICAgc3RhcnRZICs9IGxvYy55IHx8IDA7XG4gIH1cbiAgaWYgKG1vdmVUby5vcHRpb25zLmVsZW1lbnQpIHtcbiAgICBsZXQgbG9jID0gYXdhaXQgdGhpcy5nZXRMb2NhdGlvbkluVmlldyhtb3ZlVG8ub3B0aW9ucy5lbGVtZW50KTtcbiAgICBlbmRYICs9IGxvYy54IHx8IDA7XG4gICAgZW5kWSArPSBsb2MueSB8fCAwO1xuICB9XG4gIGxldCBhcGlMZXZlbCA9ICBhd2FpdCB0aGlzLmFkYi5nZXRBcGlMZXZlbCgpO1xuICAvLyBsb2xsaXBvcCB0YWtlcyBhIGxpdHRsZSBsb25nZXIgdG8gZ2V0IHRoaW5ncyByb2xsaW5nXG4gIGxldCBkdXJhdGlvbiA9IGFwaUxldmVsID49IDUgPyAyIDogMTtcbiAgLy8gYGRyYWdgIHdpbGwgdGFrZSBjYXJlIG9mIHdoZXRoZXIgdGhlcmUgaXMgYW4gZWxlbWVudCBvciBub3QgYXQgdGhhdCBsZXZlbFxuICByZXR1cm4gYXdhaXQgdGhpcy5kcmFnKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBkdXJhdGlvbiwgMSwgbG9uZ1ByZXNzLm9wdGlvbnMuZWxlbWVudCwgbW92ZVRvLm9wdGlvbnMuZWxlbWVudCk7XG59O1xuXG4vLyBSZWxlYXNlIGdlc3R1cmUgbmVlZHMgZWxlbWVudCBvciBjby1vcmRpbmF0ZXMgdG8gcmVsZWFzZSBpdCBmcm9tIHRoYXQgcG9zaXRpb25cbi8vIG9yIGVsc2UgcmVsZWFzZSBnZXN0dXJlIGlzIHBlcmZvcm1lZCBmcm9tIGNlbnRlciBvZiB0aGUgc2NyZWVuLCBzbyB0byBmaXggaXRcbi8vIFRoaXMgbWV0aG9kIHNldHMgY28tb3JkaW5hdGVzL2VsZW1lbnQgdG8gcmVsZWFzZSBnZXN0dXJlIGlmIGl0IGhhcyBubyBvcHRpb25zIHNldCBhbHJlYWR5LlxuaGVscGVycy5maXhSZWxlYXNlID0gYXN5bmMgZnVuY3Rpb24gKGdlc3R1cmVzLCByZWxlYXNlKSB7XG4gIC8vIHNvbWV0aW1lcyB0aGVyZSBhcmUgbm8gb3B0aW9uc1xuICByZWxlYXNlLm9wdGlvbnMgPSByZWxlYXNlLm9wdGlvbnMgfHwge307XG4gIC8vIG5vdGhpbmcgdG8gZG8gaWYgcmVsZWFzZSBvcHRpb25zIGFyZSBhbHJlYWR5IHNldFxuICBpZiAocmVsZWFzZS5vcHRpb25zLmVsZW1lbnQgfHwgKHJlbGVhc2Uub3B0aW9ucy54ICYmIHJlbGVhc2Uub3B0aW9ucy55KSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB3aXRob3V0IGNvb3JkaW5hdGVzLCBgcmVsZWFzZWAgdXNlcyB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4sIHdoaWNoLFxuICAvLyBnZW5lcmFsbHkgc3BlYWtpbmcsIGlzIG5vdCB3aGF0IHdlIHdhbnRcbiAgLy8gdGhlcmVmb3JlOiBsb29wIGJhY2t3YXJkcyBhbmQgdXNlIHRoZSBsYXN0IGNvbW1hbmQgd2l0aCBhbiBlbGVtZW50IGFuZC9vclxuICAvLyBvZmZzZXQgY29vcmRpbmF0ZXNcbiAgZ2VzdHVyZXMgPSBfLmNsb25lKGdlc3R1cmVzKTtcbiAgbGV0IHJlZiA9IG51bGw7XG4gIGZvciAobGV0IGdlc3R1cmUgb2YgZ2VzdHVyZXMucmV2ZXJzZSgpKSB7XG4gICAgbGV0IG9wdHMgPSBnZXN0dXJlLm9wdGlvbnM7XG4gICAgcmVmID0gb3B0cy5lbGVtZW50IHx8IChvcHRzLnggJiYgb3B0cy55KTtcbiAgICBpZiAocmVmKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKHJlZikge1xuICAgIGxldCBvcHRzID0gcmVmLm9wdGlvbnMgfHwge307XG4gICAgaWYgKG9wdHMuZWxlbWVudCkge1xuICAgICAgLy8gd2UgcmV0cmlldmUgdGhlIGVsZW1lbnQgbG9jYXRpb24sIG1pZ2h0IGJlIHVzZWZ1bCBpblxuICAgICAgLy8gY2FzZSB0aGUgZWxlbWVudCBiZWNvbWVzIGludmFsaWRcbiAgICAgIGxldCBsb2MgPSBhd2FpdCB0aGlzLmdldExvY2F0aW9uSW5WaWV3KG9wdHMuZWxlbWVudCk7XG4gICAgICBsZXQgc2l6ZSA9IGF3YWl0IHRoaXMuZ2V0U2l6ZShvcHRzLmVsZW1lbnQpO1xuICAgICAgcmVsZWFzZS5vcHRpb25zID0ge1xuICAgICAgICBlbGVtZW50OiBvcHRzLmVsZW1lbnQsXG4gICAgICAgIHg6IGxvYy54ICsgc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIHk6IGxvYy55ICsgc2l6ZS5oZWlnaHQgLyAyXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAob3B0cy54ICYmIG9wdHMueSkge1xuICAgICAgcmVsZWFzZS5vcHRpb25zID0gXy5waWNrKG9wdHMsICd4JywgJ3knKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbGVhc2U7XG59O1xuXG4vLyBQZXJmb3JtIG9uZSBnZXN0dXJlXG5oZWxwZXJzLnBlcmZvcm1HZXN0dXJlID0gYXN5bmMgZnVuY3Rpb24gKGdlc3R1cmUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5kb1RvdWNoQWN0aW9uKGdlc3R1cmUuYWN0aW9uLCBnZXN0dXJlLm9wdGlvbnMgfHwge30pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gc29tZXRpbWUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSB3aGVuIHJlbGVhc2luZywgcmV0cnkgd2l0aG91dCBpdFxuICAgIGlmIChpc0Vycm9yVHlwZShlLCBlcnJvcnMuTm9TdWNoRWxlbWVudEVycm9yKSAmJiBnZXN0dXJlLmFjdGlvbiA9PT0gJ3JlbGVhc2UnICYmXG4gICAgICAgIGdlc3R1cmUub3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICBkZWxldGUgZ2VzdHVyZS5vcHRpb25zLmVsZW1lbnQ7XG4gICAgICBsb2cuZGVidWcoYHJldHJ5aW5nIHJlbGVhc2Ugd2l0aG91dCBlbGVtZW50IG9wdHM6ICR7Z2VzdHVyZS5vcHRpb25zfS5gKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvVG91Y2hBY3Rpb24oZ2VzdHVyZS5hY3Rpb24sIGdlc3R1cmUub3B0aW9ucyB8fCB7fSk7XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbn07XG5cbmNvbW1hbmRzLnBlcmZvcm1Ub3VjaCA9IGFzeW5jIGZ1bmN0aW9uIChnZXN0dXJlcykge1xuICBpZiAodGhpcy5pc1dlYkNvbnRleHQoKSkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuTm90WWV0SW1wbGVtZW50ZWRFcnJvcigpO1xuICB9XG5cbiAgLy8gcHJlc3Mtd2FpdC1tb3ZlVG8tcmVsZWFzZSBpcyBgc3dpcGVgLCBzbyB1c2UgbmF0aXZlIG1ldGhvZFxuICBpZiAoZ2VzdHVyZXMubGVuZ3RoID09PSA0ICYmXG4gICAgICBnZXN0dXJlc1swXS5hY3Rpb24gPT09ICdwcmVzcycgJiZcbiAgICAgIGdlc3R1cmVzWzFdLmFjdGlvbiA9PT0gJ3dhaXQnICYmXG4gICAgICBnZXN0dXJlc1syXS5hY3Rpb24gPT09ICdtb3ZlVG8nICYmXG4gICAgICBnZXN0dXJlc1szXS5hY3Rpb24gPT09ICdyZWxlYXNlJykge1xuXG4gICAgICBsZXQgc3dpcGVPcHRzID0gYXdhaXQgdGhpcy5nZXRTd2lwZU9wdGlvbnMoZ2VzdHVyZXMpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3dpcGUoc3dpcGVPcHRzLnN0YXJ0WCwgc3dpcGVPcHRzLnN0YXJ0WSwgc3dpcGVPcHRzLmVuZFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZU9wdHMuZW5kWSwgc3dpcGVPcHRzLmR1cmF0aW9uLCBzd2lwZU9wdHMudG91Y2hDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXBlT3B0cy5lbGVtZW50KTtcbiAgfVxuICBsZXQgYWN0aW9ucyA9IF8ucGx1Y2soZ2VzdHVyZXMsIFwiYWN0aW9uXCIpO1xuXG4gIGlmIChhY3Rpb25zWzBdID09PSAnbG9uZ1ByZXNzJyAmJiBhY3Rpb25zWzFdID09PSAnbW92ZVRvJyAmJiBhY3Rpb25zWzJdID09PSAncmVsZWFzZScpIHtcbiAgICAvLyBzb21lIHRoaW5ncyBhcmUgc3BlY2lhbFxuICAgIHJldHVybiBhd2FpdCB0aGlzLmRvVG91Y2hEcmFnKGdlc3R1cmVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBgcHJlc3NgIHdpdGhvdXQgYSB3YWl0IGlzIHRvbyBzbG93IGFuZCBnZXRzIGludGVycHJldHRlZCBhcyBhIGBsb25nUHJlc3NgXG4gICAgaWYgKGFjdGlvbnNbYWN0aW9ucy5sZW5ndGggLSAyXSA9PT0gJ3ByZXNzJyAmJiBhY3Rpb25zW2FjdGlvbnMubGVuZ3RoIC0gMV0gPT09ICdyZWxlYXNlJykge1xuICAgICAgYWN0aW9uc1thY3Rpb25zLmxlbmd0aCAtIDJdID0gJ3RhcCc7XG4gICAgICBnZXN0dXJlc1tnZXN0dXJlcy5sZW5ndGggLSAyXS5hY3Rpb24gPSAndGFwJztcbiAgICB9XG5cbiAgICAvLyB0aGUgYGxvbmdQcmVzc2AgYW5kIGB0YXBgIG1ldGhvZHMgcmVsZWFzZSBvbiB0aGVpciBvd25cbiAgICBpZiAoKGFjdGlvbnNbYWN0aW9ucy5sZW5ndGggLSAyXSA9PT0gJ3RhcCcgfHxcbiAgICAgIGFjdGlvbnNbYWN0aW9ucy5sZW5ndGggLSAyXSA9PT0gJ2xvbmdQcmVzcycpICYmIGFjdGlvbnNbYWN0aW9ucy5sZW5ndGggLSAxXSA9PT0gJ3JlbGVhc2UnKSB7XG4gICAgICBnZXN0dXJlcy5wb3AoKTtcbiAgICAgIGFjdGlvbnMucG9wKCk7XG4gICAgfVxuXG4gICAgLy8gZml4IHJlbGVhc2UgYWN0aW9uIHRoZW4gcGVyZm9ybSBhbGwgYWN0aW9uc1xuICAgIGlmIChhY3Rpb25zW2FjdGlvbnMubGVuZ3RoIC0gMV0gPT09ICdyZWxlYXNlJykge1xuICAgICAgYWN0aW9uc1thY3Rpb25zLmxlbmd0aCAtIDFdID0gYXdhaXQgdGhpcy5maXhSZWxlYXNlKGdlc3R1cmVzLCBhY3Rpb25zKTtcbiAgICB9XG5cbiAgICBsZXQgZml4ZWRHZXN0dXJlcyA9IGF3YWl0IHRoaXMucGFyc2VUb3VjaChnZXN0dXJlcywgZmFsc2UpO1xuICAgIGZvciAobGV0IGcgb2YgZml4ZWRHZXN0dXJlcykge1xuICAgICAgYXdhaXQgdGhpcy5wZXJmb3JtR2VzdHVyZShnKTtcbiAgICB9XG4gIH1cbn07XG5cbmhlbHBlcnMucGFyc2VUb3VjaCA9IGFzeW5jIGZ1bmN0aW9uIChnZXN0dXJlcywgbXVsdGkpIHtcbiAgLy8gYmVjYXVzZSBtdWx0aS10b3VjaCByZWxlYXNlcyBhdCB0aGUgZW5kIGJ5IGRlZmF1bHRcbiAgaWYgKG11bHRpICYmIF8ubGFzdChnZXN0dXJlcykuYWN0aW9uID09PSAncmVsZWFzZScpIHtcbiAgICBnZXN0dXJlcy5wb3AoKTtcbiAgfVxuXG4gIGxldCB0b3VjaFN0YXRlT2JqZWN0cyA9IGF3YWl0IGFzeW5jbWFwKGdlc3R1cmVzLCBhc3luYyAoZ2VzdHVyZSkgPT4ge1xuICAgIGxldCBvcHRpb25zID0gZ2VzdHVyZS5vcHRpb25zO1xuICAgIGlmIChfLmNvbnRhaW5zKFsncHJlc3MnLCAnbW92ZVRvJywgJ3RhcCcsICdsb25nUHJlc3MnXSwgZ2VzdHVyZS5hY3Rpb24pKSB7XG4gICAgICBvcHRpb25zLm9mZnNldCA9IGZhbHNlO1xuICAgICAgbGV0IGVsZW1lbnRJZCA9IGdlc3R1cmUub3B0aW9ucy5lbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnRJZCkge1xuICAgICAgICBsZXQgcG9zID0gYXdhaXQgdGhpcy5nZXRMb2NhdGlvbkluVmlldyhlbGVtZW50SWQpO1xuICAgICAgICBsZXQgc2l6ZSA9IGF3YWl0IHRoaXMuZ2V0U2l6ZShlbGVtZW50SWQpO1xuICAgICAgICBpZiAoZ2VzdHVyZS5vcHRpb25zLnggfHwgZ2VzdHVyZS5vcHRpb25zLnkpIHtcbiAgICAgICAgICBvcHRpb25zLnggPSBwb3MueCArIChnZXN0dXJlLm9wdGlvbnMueCB8fCAwKTtcbiAgICAgICAgICBvcHRpb25zLnkgPSBwb3MueSArIChnZXN0dXJlLm9wdGlvbnMueSB8fCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLnggPSAgcG9zLnggKyAoc2l6ZS53aWR0aCAvIDIpO1xuICAgICAgICAgIG9wdGlvbnMueSA9IHBvcy55ICsgKHNpemUuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdWNoU3RhdGVPYmplY3QgPSB7XG4gICAgICAgICAgYWN0aW9uOiBnZXN0dXJlLmFjdGlvbixcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgIHRpbWVPZmZzZXQ6IDAuMDA1LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdG91Y2hTdGF0ZU9iamVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGV4cGVjdHMgYWJzb2x1dGUgY29vcmRpbmF0ZXMsIHNvIHdlIG5lZWQgdG8gc2F2ZSB0aGVzZSBhcyBvZmZzZXRzXG4gICAgICAgIC8vIGFuZCB0aGVuIHRyYW5zbGF0ZSB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuICAgICAgICBvcHRpb25zLm9mZnNldCA9IHRydWU7XG4gICAgICAgIG9wdGlvbnMueCA9IChnZXN0dXJlLm9wdGlvbnMueCB8fCAwKTtcbiAgICAgICAgb3B0aW9ucy55ID0gKGdlc3R1cmUub3B0aW9ucy55IHx8IDApO1xuXG4gICAgICAgIGxldCB0b3VjaFN0YXRlT2JqZWN0ID0ge1xuICAgICAgICAgIGFjdGlvbjogZ2VzdHVyZS5hY3Rpb24sXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICB0aW1lT2Zmc2V0OiAwLjAwNSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRvdWNoU3RhdGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBvZmZzZXQgPSAwLjAwNTtcbiAgICAgIGlmIChnZXN0dXJlLmFjdGlvbiA9PT0gJ3dhaXQnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBnZXN0dXJlLm9wdGlvbnM7XG4gICAgICAgIG9mZnNldCA9IChwYXJzZUludChnZXN0dXJlLm9wdGlvbnMubXMpIC8gMTAwMCk7XG4gICAgICB9XG4gICAgICBsZXQgdG91Y2hTdGF0ZU9iamVjdCA9IHtcbiAgICAgICAgYWN0aW9uOiBnZXN0dXJlLmFjdGlvbixcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgdGltZU9mZnNldDogb2Zmc2V0LFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0b3VjaFN0YXRlT2JqZWN0O1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICAvLyB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgdGltZSAod2hpY2ggaXMgbm93IGFuIG9mZnNldClcbiAgLy8gYW5kIHRoZSBwb3NpdGlvbiAod2hpY2ggbWF5IGJlIGFuIG9mZnNldClcbiAgbGV0IHByZXZQb3MgPSBudWxsLFxuICAgICAgdGltZSA9IDA7XG4gIGZvciAobGV0IHN0YXRlIG9mIHRvdWNoU3RhdGVPYmplY3RzKSB7XG4gICAgaWYgKF8uaXNVbmRlZmluZWQoc3RhdGUub3B0aW9ucy54KSAmJiBfLmlzVW5kZWZpbmVkKHN0YXRlLm9wdGlvbnMueSkpIHtcbiAgICAgIC8vIHRoaXMgaGFwcGVucyB3aXRoIHdhaXRcbiAgICAgIHN0YXRlLm9wdGlvbnMueCA9IHByZXZQb3MueDtcbiAgICAgIHN0YXRlLm9wdGlvbnMueSA9IHByZXZQb3MueTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLm9wdGlvbnMub2Zmc2V0ICYmIHByZXZQb3MpIHtcbiAgICAgIC8vIHRoZSBjdXJyZW50IHBvc2l0aW9uIGlzIGFuIG9mZnNldFxuICAgICAgc3RhdGUub3B0aW9ucy54ICs9IHByZXZQb3MueDtcbiAgICAgIHN0YXRlLm9wdGlvbnMueSArPSBwcmV2UG9zLnk7XG4gICAgfVxuICAgIGRlbGV0ZSBzdGF0ZS5vcHRpb25zLm9mZnNldDtcbiAgICBwcmV2UG9zID0gc3RhdGUub3B0aW9ucztcblxuICAgIGlmIChtdWx0aSkge1xuICAgICAgdmFyIHRpbWVPZmZzZXQgPSBzdGF0ZS50aW1lT2Zmc2V0O1xuICAgICAgdGltZSArPSB0aW1lT2Zmc2V0O1xuICAgICAgc3RhdGUudGltZSA9IGFuZHJvaWRIZWxwZXJzLnRydW5jYXRlRGVjaW1hbHModGltZSwgMyk7XG5cbiAgICAgIC8vIG11bHRpIGdlc3R1cmVzIHJlcXVpcmUgJ3RvdWNoJyByYXRoZXIgdGhhbiAnb3B0aW9ucydcbiAgICAgIHN0YXRlLnRvdWNoID0gc3RhdGUub3B0aW9ucztcbiAgICAgIGRlbGV0ZSBzdGF0ZS5vcHRpb25zO1xuICAgIH1cbiAgICBkZWxldGUgc3RhdGUudGltZU9mZnNldDtcbiAgfVxuICByZXR1cm4gdG91Y2hTdGF0ZU9iamVjdHM7XG59O1xuXG5cbmNvbW1hbmRzLnBlcmZvcm1NdWx0aUFjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIChhY3Rpb25zLCBlbGVtZW50SWQpIHtcbiAgaWYgKHRoaXMuaXNXZWJDb250ZXh0KCkpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLk5vdFlldEltcGxlbWVudGVkRXJyb3IoKTtcbiAgfVxuXG4gIC8vIEFuZHJvaWQgbmVlZHMgYXQgbGVhc3QgdHdvIGFjdGlvbnMgdG8gYmUgYWJsZSB0byBwZXJmb3JtIGEgbXVsdGkgcG9pbnRlciBnZXN0dXJlXG4gIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpIFBvaW50ZXIgR2VzdHVyZXMgbmVlZCBhdCBsZWFzdCB0d28gYWN0aW9ucy4gXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIlVzZSBUb3VjaCBBY3Rpb25zIGZvciBhIHNpbmdsZSBhY3Rpb24uXCIpO1xuICB9XG5cbiAgbGV0IHN0YXRlcyA9IGF3YWl0IGFzeW5jbWFwKGFjdGlvbnMsIGFzeW5jIChhY3Rpb24pID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wYXJzZVRvdWNoKGFjdGlvbiwgdHJ1ZSk7XG4gIH0sIGZhbHNlKTtcblxuICBsZXQgb3B0cztcbiAgaWYgKGVsZW1lbnRJZCkge1xuICAgIG9wdHMgPSB7XG4gICAgICBlbGVtZW50SWQ6IGVsZW1lbnRJZCxcbiAgICAgIGFjdGlvbnM6IHN0YXRlc1xuICAgIH07XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnBlcmZvcm1NdWx0aVBvaW50ZXJHZXN0dXJlXCIsIG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIG9wdHMgPSB7XG4gICAgICBhY3Rpb25zOiBzdGF0ZXNcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwicGVyZm9ybU11bHRpUG9pbnRlckdlc3R1cmVcIiwgb3B0cyk7XG4gIH1cbn07XG5cbk9iamVjdC5hc3NpZ24oZXh0ZW5zaW9ucywgY29tbWFuZHMsIGhlbHBlcnMpO1xuZXhwb3J0IHsgY29tbWFuZHMsIGhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=