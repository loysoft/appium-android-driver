"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

//import _ from 'lodash';
//import { errors } from 'mobile-json-wire-protocol';
//import log from '../logger';

var commands = {},
    helpers = {},
    extensions = {};

commands.getAttribute = function callee$0$0(attribute, elementId) {
  var p;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        p = { attribute: attribute, elementId: elementId };
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:getAttribute", p));

      case 3:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getName = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("className", elementId));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementDisplayed = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("displayed", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt("return", context$1$0.t0 === 'true');

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementEnabled = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("enabled", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt("return", context$1$0.t0 === 'true');

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.elementSelected = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.getAttribute("selected", elementId));

      case 2:
        context$1$0.t0 = context$1$0.sent;
        return context$1$0.abrupt("return", context$1$0.t0 === 'true');

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setValue = function callee$0$0(keys, elementId) {
  var text, p;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        text = keys;

        if (keys instanceof Array) {
          text = keys.join("");
        }

        p = {
          elementId: elementId,
          text: text,
          replace: false,
          unicodeKeyboard: this.opts.unicodeKeyboard
        };
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:setText", p));

      case 5:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 6:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getText = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:getText", { elementId: elementId }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.clear = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:clear", { elementId: elementId }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.click = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:click", { elementId: elementId }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getLocationInView = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:getLocation", { elementId: elementId }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getSize = function callee$0$0(elementId) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:getSize", { elementId: elementId }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchLongClick = function callee$0$0(elementId, x, y, duration) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { elementId: elementId, x: x, y: y, duration: duration };

        _androidHelpers2["default"].removeNullProperties(params);
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:touchLongClick", params));

      case 4:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchDown = function callee$0$0(elementId, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { elementId: elementId, x: x, y: y };

        _androidHelpers2["default"].removeNullProperties(params);
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:touchDown", params));

      case 4:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchUp = function callee$0$0(elementId, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { elementId: elementId, x: x, y: y };

        _androidHelpers2["default"].removeNullProperties(params);
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:touchUp", params));

      case 4:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.touchMove = function callee$0$0(elementId, x, y) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { elementId: elementId, x: x, y: y };

        _androidHelpers2["default"].removeNullProperties(params);
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:touchMove", params));

      case 4:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 5:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.complexTap = function callee$0$0(tapCount, touchCount, duration, x, y) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("click", { x: x, y: y }));

      case 2:
        return context$1$0.abrupt("return", context$1$0.sent);

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

commands.tap = function callee$0$0(elementId) {
  var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var count = arguments.length <= 3 || arguments[3] === undefined ? 1 : arguments[3];
  var i;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < count)) {
          context$1$0.next = 17;
          break;
        }

        if (!elementId) {
          context$1$0.next = 12;
          break;
        }

        if (!(x !== 0 || y !== 0)) {
          context$1$0.next = 8;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:click", { elementId: elementId, x: x, y: y }));

      case 6:
        context$1$0.next = 10;
        break;

      case 8:
        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:click", { elementId: elementId }));

      case 10:
        context$1$0.next = 14;
        break;

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("click", { x: x, y: y }));

      case 14:
        i++;
        context$1$0.next = 1;
        break;

      case 17:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports["default"] = extensions;

// we are either tapping on the default location of the element
// or an offset from the top left corner
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs4QkFBMkIsb0JBQW9COzs7Ozs7OztBQUsvQyxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVqRCxRQUFRLENBQUMsWUFBWSxHQUFHLG9CQUFnQixTQUFTLEVBQUUsU0FBUztNQUN0RCxDQUFDOzs7O0FBQUQsU0FBQyxHQUFHLEVBQUMsU0FBUyxFQUFULFNBQVMsRUFBRSxTQUFTLEVBQVQsU0FBUyxFQUFDOzt5Q0FDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0NBQ2xFLENBQUM7O0FBRUYsUUFBUSxDQUFDLE9BQU8sR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7Ozs7Ozs7OztDQUN2RCxDQUFDOztBQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7OzsrREFBSyxNQUFNOzs7Ozs7O0NBQ2xFLENBQUM7O0FBRUYsUUFBUSxDQUFDLGNBQWMsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzs7OzsrREFBSyxNQUFNOzs7Ozs7O0NBQ2hFLENBQUM7O0FBRUYsUUFBUSxDQUFDLGVBQWUsR0FBRyxvQkFBZ0IsU0FBUzs7Ozs7eUNBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQzs7OzsrREFBSyxNQUFNOzs7Ozs7O0NBQ2pFLENBQUM7O0FBRUYsUUFBUSxDQUFDLFFBQVEsR0FBRyxvQkFBZ0IsSUFBSSxFQUFFLFNBQVM7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QUFDOzs7Ozs7Ozt5Q0FFN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEVBQUMsU0FBUyxFQUFULFNBQVMsRUFBQyxDQUFDOzs7Ozs7Ozt5Q0FHekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7OztBQVYvQixTQUFDLEVBQUU7Ozs7Ozs7OztDQWEvQixDQUFDOztBQUVGLGVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxRQUFRLEdBQVIsUUFBUTtRQUFFLE9BQU8sR0FBUCxPQUFPO3FCQUNYLFVBQVUiLCJmaWxlIjoibGliL2NvbW1hbmRzL2VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5kcm9pZEhlbHBlcnMgZnJvbSAnLi4vYW5kcm9pZC1oZWxwZXJzJztcbi8vaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vaW1wb3J0IHsgZXJyb3JzIH0gZnJvbSAnbW9iaWxlLWpzb24td2lyZS1wcm90b2NvbCc7XG4vL2ltcG9ydCBsb2cgZnJvbSAnLi4vbG9nZ2VyJztcblxubGV0IGNvbW1hbmRzID0ge30sIGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xuXG5jb21tYW5kcy5nZXRBdHRyaWJ1dGUgPSBhc3luYyBmdW5jdGlvbiAoYXR0cmlidXRlLCBlbGVtZW50SWQpIHtcbiAgbGV0IHAgPSB7YXR0cmlidXRlLCBlbGVtZW50SWR9O1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Z2V0QXR0cmlidXRlXCIsIHApO1xufTtcblxuY29tbWFuZHMuZ2V0TmFtZSA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQpIHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsIGVsZW1lbnRJZCk7XG59O1xuXG5jb21tYW5kcy5lbGVtZW50RGlzcGxheWVkID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBdHRyaWJ1dGUoXCJkaXNwbGF5ZWRcIiwgZWxlbWVudElkKSA9PT0gJ3RydWUnO1xufTtcblxuY29tbWFuZHMuZWxlbWVudEVuYWJsZWQgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkKSB7XG4gIHJldHVybiBhd2FpdCB0aGlzLmdldEF0dHJpYnV0ZShcImVuYWJsZWRcIiwgZWxlbWVudElkKSA9PT0gJ3RydWUnO1xufTtcblxuY29tbWFuZHMuZWxlbWVudFNlbGVjdGVkID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBlbGVtZW50SWQpID09PSAndHJ1ZSc7XG59O1xuXG5jb21tYW5kcy5zZXRWYWx1ZSA9IGFzeW5jIGZ1bmN0aW9uIChrZXlzLCBlbGVtZW50SWQpIHtcbiAgbGV0IHRleHQgPSBrZXlzO1xuICBpZiAoa2V5cyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgdGV4dCA9IGtleXMuam9pbihcIlwiKTtcbiAgfVxuXG4gIGxldCBwID0ge1xuICAgIGVsZW1lbnRJZDogZWxlbWVudElkLFxuICAgIHRleHQ6IHRleHQsXG4gICAgcmVwbGFjZTogZmFsc2UsXG4gICAgdW5pY29kZUtleWJvYXJkOiB0aGlzLm9wdHMudW5pY29kZUtleWJvYXJkXG4gIH07XG5cbiAgcmV0dXJuIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnNldFRleHRcIiwgcCk7XG59O1xuXG5jb21tYW5kcy5nZXRUZXh0ID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Z2V0VGV4dFwiLCB7ZWxlbWVudElkfSk7XG59O1xuXG5jb21tYW5kcy5jbGVhciA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQpIHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OmNsZWFyXCIsIHtlbGVtZW50SWR9KTtcbn07XG5cbmNvbW1hbmRzLmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Y2xpY2tcIiwge2VsZW1lbnRJZH0pO1xufTtcblxuY29tbWFuZHMuZ2V0TG9jYXRpb25JblZpZXcgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkKSB7XG4gIHJldHVybiBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDpnZXRMb2NhdGlvblwiLCB7ZWxlbWVudElkfSk7XG59O1xuXG5jb21tYW5kcy5nZXRTaXplID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Z2V0U2l6ZVwiLCB7ZWxlbWVudElkfSk7XG59O1xuXG5jb21tYW5kcy50b3VjaExvbmdDbGljayA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQsIHgsIHksIGR1cmF0aW9uKSB7XG4gIGxldCBwYXJhbXMgPSB7ZWxlbWVudElkLCB4LCB5LCBkdXJhdGlvbn07XG4gIGFuZHJvaWRIZWxwZXJzLnJlbW92ZU51bGxQcm9wZXJ0aWVzKHBhcmFtcyk7XG4gIHJldHVybiBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDp0b3VjaExvbmdDbGlja1wiLCBwYXJhbXMpO1xufTtcblxuY29tbWFuZHMudG91Y2hEb3duID0gYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRJZCwgeCwgeSkge1xuICBsZXQgcGFyYW1zID0ge2VsZW1lbnRJZCwgeCwgeX07XG4gIGFuZHJvaWRIZWxwZXJzLnJlbW92ZU51bGxQcm9wZXJ0aWVzKHBhcmFtcyk7XG4gIHJldHVybiBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDp0b3VjaERvd25cIiwgcGFyYW1zKTtcbn07XG5cbmNvbW1hbmRzLnRvdWNoVXAgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkLCB4LCB5KSB7XG4gIGxldCBwYXJhbXMgPSB7ZWxlbWVudElkLCB4LCB5fTtcbiAgYW5kcm9pZEhlbHBlcnMucmVtb3ZlTnVsbFByb3BlcnRpZXMocGFyYW1zKTtcbiAgcmV0dXJuIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnRvdWNoVXBcIiwgcGFyYW1zKTtcbn07XG5cbmNvbW1hbmRzLnRvdWNoTW92ZSA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQsIHgsIHkpIHtcbiAgbGV0IHBhcmFtcyA9IHtlbGVtZW50SWQsIHgsIHl9O1xuICBhbmRyb2lkSGVscGVycy5yZW1vdmVOdWxsUHJvcGVydGllcyhwYXJhbXMpO1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6dG91Y2hNb3ZlXCIsIHBhcmFtcyk7XG59O1xuXG5jb21tYW5kcy5jb21wbGV4VGFwID0gYXN5bmMgZnVuY3Rpb24gKHRhcENvdW50LCB0b3VjaENvdW50LCBkdXJhdGlvbiwgeCwgeSkge1xuICByZXR1cm4gYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImNsaWNrXCIsIHt4OiB4LCB5OiB5fSk7XG59O1xuXG5jb21tYW5kcy50YXAgPSBhc3luYyBmdW5jdGlvbiAoZWxlbWVudElkLCB4ID0gMCwgeSA9IDAsIGNvdW50ID0gMSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBpZiAoZWxlbWVudElkKSB7XG4gICAgICAvLyB3ZSBhcmUgZWl0aGVyIHRhcHBpbmcgb24gdGhlIGRlZmF1bHQgbG9jYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgIC8vIG9yIGFuIG9mZnNldCBmcm9tIHRoZSB0b3AgbGVmdCBjb3JuZXJcbiAgICAgIGlmICh4ICE9PSAwIHx8IHkgIT09IDApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Y2xpY2tcIiwge2VsZW1lbnRJZCwgeCwgeX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6Y2xpY2tcIiwge2VsZW1lbnRJZH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiY2xpY2tcIiwge3g6IHgsIHk6IHl9KTtcbiAgICB9XG4gIH1cbn07XG5cbk9iamVjdC5hc3NpZ24oZXh0ZW5zaW9ucywgY29tbWFuZHMsIGhlbHBlcnMpO1xuZXhwb3J0IHsgY29tbWFuZHMsIGhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=