'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var _temp = require('temp');

var _temp2 = _interopRequireDefault(_temp);

var _appiumSupport = require('appium-support');

var _admZip = require('adm-zip');

var _admZip2 = _interopRequireDefault(_admZip);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _logger3 = _interopRequireDefault(_logger);

var swipeStepsPerSec = 28,
    dragStepsPerSec = 40;

var commands = {},
    helpers = {},
    extensions = {};

commands.keyevent = function callee$0$0(keycode) {
  var metastate = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // TODO deprecate keyevent; currently wd only implements keyevent
        _logger3['default'].warn("keyevent will be deprecated use pressKeyCode");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.pressKeyCode(keycode, metastate));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.pressKeyCode = function (keycode, metastate) {
  return this.bootstrap.sendAction("pressKeyCode", { keycode: keycode, metastate: metastate });
};

commands.longPressKeyCode = function (keycode, metastate) {
  return this.bootstrap.sendAction("longPressKeyCode", { keycode: keycode, metastate: metastate });
};

commands.getOrientation = function () {
  return this.bootstrap.sendAction("orientation", {});
};

commands.setOrientation = function (orientation) {
  return this.bootstrap.sendAction("orientation", { orientation: orientation });
};

commands.fakeFlick = function (xSpeed, ySpeed) {
  return this.bootstrap.sendAction("flick", { xSpeed: xSpeed, ySpeed: ySpeed });
};

commands.fakeFlickElement = function (elementId, xoffset, yoffset, speed) {
  var param = { xoffset: xoffset, yoffset: yoffset, speed: speed, elementId: elementId };
  return this.bootstrap.sendAction("element:flick", param);
};

commands.swipe = function (startX, startY, endX, endY, duration, touchCount, elId) {
  if (startX === 'null') {
    startX = 0.5;
  }
  if (startY === 'null') {
    startY = 0.5;
  }
  var swipeOpts = { startX: startX, startY: startY, endX: endX, endY: endY,
    steps: Math.round(duration * swipeStepsPerSec) };
  // going the long way and checking for undefined and null since
  // we can't be assured `elId` is a string and not an int
  if (typeof elId !== "undefined" && elId !== null) {
    swipeOpts.elementId = elId;
    return this.bootstrap.sendAction("element:swipe", swipeOpts);
  } else {
    return this.bootstrap.sendAction("swipe", swipeOpts);
  }
};

commands.pinchClose = function (startX, startY, endX, endY, duration, percent, steps, elId) {
  var pinchOpts = {
    direction: 'in',
    elementId: elId,
    percent: percent,
    steps: steps
  };
  return this.bootstrap.sendAction("element:pinch", pinchOpts);
};

commands.pinchOpen = function (startX, startY, endX, endY, duration, percent, steps, elId) {
  var pinchOpts = { direction: 'out', elementId: elId, percent: percent, steps: steps };
  return this.bootstrap.sendAction("element:pinch", pinchOpts);
};

commands.flick = function (startX, startY, endX, endY, touchCount, elId) {
  if (startX === 'null') {
    startX = 0.5;
  }
  if (startY === 'null') {
    startY = 0.5;
  }
  var swipeOpts = { startX: startX, startY: startY, endX: endX, endY: endY, steps: Math.round(0.2 * swipeStepsPerSec) };
  if (elId !== null) {
    swipeOpts.elementId = elId;
    return this.bootstrap.sendAction("element:swipe", swipeOpts);
  } else {
    return this.bootstrap.sendAction("swipe", swipeOpts);
  }
};

commands.drag = function (startX, startY, endX, endY, duration, touchCount, elementId, destElId) {
  var dragOpts = { elementId: elementId, destElId: destElId, startX: startX, startY: startY, endX: endX, endY: endY,
    steps: Math.round(duration * dragStepsPerSec) };
  if (elementId) {
    return this.bootstrap.sendAction("element:drag", dragOpts);
  } else {
    return this.bootstrap.sendAction("drag", dragOpts);
  }
};

commands.lock = function () {
  return this.adb.lock();
};

commands.isLocked = function () {
  return this.adb.isScreenLocked();
};

commands.unlock = function () {
  return _androidHelpers2['default'].unlock(this.adb);
};

commands.openNotifications = function () {
  return this.bootstrap.sendAction("openNotification");
};

commands.setLocation = function (latitude, longitude) {
  return this.adb.sendTelnetCommand('geo fix ' + longitude + ' ' + latitude);
};

commands.pullFile = function callee$0$0(remotePath) {
  var localFile, data, b64data;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        localFile = _temp2['default'].path({ prefix: 'appium', suffix: '.tmp' });
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.pull(remotePath, localFile));

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.readFile(localFile));

      case 5:
        data = context$1$0.sent;
        b64data = new Buffer(data).toString('base64');
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(localFile));

      case 9:
        if (!context$1$0.sent) {
          context$1$0.next = 12;
          break;
        }

        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.unlink(localFile));

      case 12:
        return context$1$0.abrupt('return', b64data);

      case 13:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.pushFile = function callee$0$0(remotePath, base64Data) {
  var localFile, content, fd;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        localFile = _temp2['default'].path({ prefix: 'appium', suffix: '.tmp' });
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _appiumSupport.mkdirp)(_path2['default'].dirname(localFile)));

      case 3:
        content = new Buffer(base64Data, 'base64');
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.open(localFile, 'w'));

      case 6:
        fd = context$1$0.sent;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.write(fd, content, 0, content.length, 0));

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.close(fd));

      case 11:
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.adb.push(localFile, remotePath));

      case 13:
        context$1$0.next = 15;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(localFile));

      case 15:
        if (!context$1$0.sent) {
          context$1$0.next = 18;
          break;
        }

        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.unlink(localFile));

      case 18:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.pullFolder = function callee$0$0(remotePath) {
  var localFolder, zip;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        localFolder = _temp2['default'].path({ prefix: 'appium' });
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.pull(remotePath, localFolder));

      case 3:
        zip = new _admZip2['default']();

        zip.addLocalFolder(localFolder);
        return context$1$0.abrupt('return', new _Promise(function (resolve, reject) {
          zip.toBuffer(function (buffer) {
            _logger2['default'].debug("Converting in-memory zip file to base64 encoded string");
            resolve(buffer.toString('base64'));
          }, function (err) {
            reject(err);
          });
        }));

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getScreenshot = function callee$0$0() {
  var localFile, png, cmd, data, b64data;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        localFile = _temp2['default'].path({ prefix: 'appium', suffix: '.png' });
        png = "/data/local/tmp/screenshot.png";
        cmd = ['/system/bin/rm', png + ';', '/system/bin/screencap', '-p', png];
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.adb.shell(cmd));

      case 5:
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(localFile));

      case 7:
        if (!context$1$0.sent) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.unlink(localFile));

      case 10:
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.adb.pull(png, localFile));

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.readFile(localFile));

      case 14:
        data = context$1$0.sent;
        b64data = new Buffer(data).toString('base64');
        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.unlink(localFile));

      case 18:
        return context$1$0.abrupt('return', b64data);

      case 19:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.replaceValue = function callee$0$0(elementId, text) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        params = { elementId: elementId, text: text, replace: true };

        if (this.opts.unicodeKeyboard) {
          params.unicodeKeyboard = true;
        }
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction("element:setText", params));

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// adb push creates folders and overwrites existing files.

// TODO: find a better alternative to the AdmZip module
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzhCQUEyQixvQkFBb0I7Ozs7b0JBQzlCLE1BQU07Ozs7NkJBQ0ksZ0JBQWdCOztzQkFDeEIsU0FBUzs7OztzQkFDVCxXQUFXOzs7O29CQUNiLE1BQU07Ozs7OztBQUd2QixJQUFNLGdCQUFnQixHQUFHLEVBQUU7SUFDckIsZUFBZSxHQUFHLEVBQUUsQ0FBQzs7QUFFM0IsSUFBSSxRQUFRLEdBQUcsRUFBRTtJQUFFLE9BQU8sR0FBRyxFQUFFO0lBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFakQsUUFBUSxDQUFDLFFBQVEsR0FBRyxvQkFBZ0IsT0FBTztNQUFFLFNBQVMseURBQUcsSUFBSTs7Ozs7QUFFM0QsNEJBQUksSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7O3lDQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Q0FDbkQsQ0FBQzs7QUFFRixRQUFRLENBQUMsWUFBWSxHQUFHLFVBQVUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUNwRCxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBUCxPQUFPLEVBQUUsU0FBUyxFQUFULFNBQVMsRUFBQyxDQUFDLENBQUM7Q0FDeEUsQ0FBQzs7QUFFRixRQUFRLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQ3hELFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQVAsT0FBTyxFQUFFLFNBQVMsRUFBVCxTQUFTLEVBQUMsQ0FBQyxDQUFDO0NBQzVFLENBQUM7O0FBRUYsUUFBUSxDQUFDLGNBQWMsR0FBRyxZQUFZO0FBQ3BDLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEVB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QyxHQUFHLEVBQUUsU0FBUyxDQUFDOzs7O3lDQUNsQixrQkFBRyxRQUFRLENBQUMsU0FBUyxDQUFDOzs7QUFBbkMsWUFBSTtBQUNKLGVBQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOzt5Q0FDM0Msa0JBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7OzRDQUNuQixPQUFPOzs7Ozs7O0NBQ2YsQ0FBQzs7QUFFRixRQUFRLENBQUMsWUFBWSxHQUFHLG9CQUFnQixTQUFTLEVBQUUsSUFBSTtNQUNqRCxNQUFNOzs7O0FBQU4sY0FBTSxHQUFHLEVBQUMsU0FBUyxFQUFULFNBQVMsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUM7O0FBQzdDLFlBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDN0IsZ0JBQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQy9COzt5Q0FDSyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7Ozs7Q0FDM0QsQ0FBQzs7QUFFRixlQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxHQUFSLFFBQVE7UUFBRSxPQUFPLEdBQVAsT0FBTztxQkFDWCxVQUFVIiwiZmlsZSI6ImxpYi9jb21tYW5kcy9hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZHJvaWRIZWxwZXJzIGZyb20gJy4uL2FuZHJvaWQtaGVscGVycyc7XG5pbXBvcnQgdGVtcCBmcm9tICd0ZW1wJztcbmltcG9ydCB7IGZzLCBta2RpcnAgfSBmcm9tICdhcHBpdW0tc3VwcG9ydCc7XG5pbXBvcnQgQWRtWmlwIGZyb20gJ2FkbS16aXAnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbG9nIGZyb20gJy4uL2xvZ2dlcic7XG5cbmNvbnN0IHN3aXBlU3RlcHNQZXJTZWMgPSAyOCxcbiAgICAgIGRyYWdTdGVwc1BlclNlYyA9IDQwO1xuXG5sZXQgY29tbWFuZHMgPSB7fSwgaGVscGVycyA9IHt9LCBleHRlbnNpb25zID0ge307XG5cbmNvbW1hbmRzLmtleWV2ZW50ID0gYXN5bmMgZnVuY3Rpb24gKGtleWNvZGUsIG1ldGFzdGF0ZSA9IG51bGwpIHtcbiAgLy8gVE9ETyBkZXByZWNhdGUga2V5ZXZlbnQ7IGN1cnJlbnRseSB3ZCBvbmx5IGltcGxlbWVudHMga2V5ZXZlbnRcbiAgbG9nLndhcm4oXCJrZXlldmVudCB3aWxsIGJlIGRlcHJlY2F0ZWQgdXNlIHByZXNzS2V5Q29kZVwiKTtcbiAgcmV0dXJuIGF3YWl0IHRoaXMucHJlc3NLZXlDb2RlKGtleWNvZGUsIG1ldGFzdGF0ZSk7XG59O1xuXG5jb21tYW5kcy5wcmVzc0tleUNvZGUgPSBmdW5jdGlvbiAoa2V5Y29kZSwgbWV0YXN0YXRlKSB7XG4gIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwicHJlc3NLZXlDb2RlXCIsIHtrZXljb2RlLCBtZXRhc3RhdGV9KTtcbn07XG5cbmNvbW1hbmRzLmxvbmdQcmVzc0tleUNvZGUgPSBmdW5jdGlvbiAoa2V5Y29kZSwgbWV0YXN0YXRlKSB7XG4gIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwibG9uZ1ByZXNzS2V5Q29kZVwiLCB7a2V5Y29kZSwgbWV0YXN0YXRlfSk7XG59O1xuXG5jb21tYW5kcy5nZXRPcmllbnRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJvcmllbnRhdGlvblwiLCB7fSk7XG59O1xuXG5jb21tYW5kcy5zZXRPcmllbnRhdGlvbiA9IGZ1bmN0aW9uIChvcmllbnRhdGlvbikge1xuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcIm9yaWVudGF0aW9uXCIsIHtvcmllbnRhdGlvbn0pO1xufTtcblxuY29tbWFuZHMuZmFrZUZsaWNrID0gZnVuY3Rpb24gKHhTcGVlZCwgeVNwZWVkKSB7XG4gIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZmxpY2tcIiwge3hTcGVlZCwgeVNwZWVkfSk7XG59O1xuXG5jb21tYW5kcy5mYWtlRmxpY2tFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnRJZCwgeG9mZnNldCwgeW9mZnNldCwgc3BlZWQpIHtcbiAgbGV0IHBhcmFtID0ge3hvZmZzZXQsIHlvZmZzZXQsIHNwZWVkLCBlbGVtZW50SWR9O1xuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6ZmxpY2tcIiwgcGFyYW0pO1xufTtcblxuY29tbWFuZHMuc3dpcGUgPSBmdW5jdGlvbiAoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGR1cmF0aW9uLCB0b3VjaENvdW50LCBlbElkKSB7XG4gIGlmIChzdGFydFggPT09ICdudWxsJykge1xuICAgIHN0YXJ0WCA9IDAuNTtcbiAgfVxuICBpZiAoc3RhcnRZID09PSAnbnVsbCcpIHtcbiAgICBzdGFydFkgPSAwLjU7XG4gIH1cbiAgbGV0IHN3aXBlT3B0cyA9IHtzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSxcbiAgICAgICAgICAgICAgICAgICBzdGVwczogTWF0aC5yb3VuZChkdXJhdGlvbiAqIHN3aXBlU3RlcHNQZXJTZWMpfTtcbiAgLy8gZ29pbmcgdGhlIGxvbmcgd2F5IGFuZCBjaGVja2luZyBmb3IgdW5kZWZpbmVkIGFuZCBudWxsIHNpbmNlXG4gIC8vIHdlIGNhbid0IGJlIGFzc3VyZWQgYGVsSWRgIGlzIGEgc3RyaW5nIGFuZCBub3QgYW4gaW50XG4gIGlmICh0eXBlb2YgZWxJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbElkICE9PSBudWxsKSB7XG4gICAgc3dpcGVPcHRzLmVsZW1lbnRJZCA9IGVsSWQ7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnN3aXBlXCIsIHN3aXBlT3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJzd2lwZVwiLCBzd2lwZU9wdHMpO1xuICB9XG59O1xuXG5jb21tYW5kcy5waW5jaENsb3NlID0gZnVuY3Rpb24gKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCBkdXJhdGlvbiwgcGVyY2VudCwgc3RlcHMsIGVsSWQpIHtcbiAgbGV0IHBpbmNoT3B0cyA9IHtcbiAgICBkaXJlY3Rpb246ICdpbicsXG4gICAgZWxlbWVudElkOiBlbElkLFxuICAgIHBlcmNlbnQsXG4gICAgc3RlcHNcbiAgfTtcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnBpbmNoXCIsIHBpbmNoT3B0cyk7XG59O1xuXG5jb21tYW5kcy5waW5jaE9wZW4gPSBmdW5jdGlvbiAoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFksIGR1cmF0aW9uLCBwZXJjZW50LCBzdGVwcywgZWxJZCkge1xuICBsZXQgcGluY2hPcHRzID0ge2RpcmVjdGlvbjogJ291dCcsIGVsZW1lbnRJZDogZWxJZCwgcGVyY2VudCwgc3RlcHN9O1xuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImVsZW1lbnQ6cGluY2hcIiwgcGluY2hPcHRzKTtcbn07XG5cbmNvbW1hbmRzLmZsaWNrID0gZnVuY3Rpb24gKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLCB0b3VjaENvdW50LCBlbElkKSB7XG4gIGlmIChzdGFydFggPT09ICdudWxsJykge1xuICAgIHN0YXJ0WCA9IDAuNTtcbiAgfVxuICBpZiAoc3RhcnRZID09PSAnbnVsbCcpIHtcbiAgICBzdGFydFkgPSAwLjU7XG4gIH1cbiAgbGV0IHN3aXBlT3B0cyA9IHtzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgc3RlcHM6IE1hdGgucm91bmQoMC4yICogc3dpcGVTdGVwc1BlclNlYyl9O1xuICBpZiAoZWxJZCAhPT0gbnVsbCkge1xuICAgIHN3aXBlT3B0cy5lbGVtZW50SWQgPSBlbElkO1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDpzd2lwZVwiLCBzd2lwZU9wdHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwic3dpcGVcIiwgc3dpcGVPcHRzKTtcbiAgfVxufTtcblxuY29tbWFuZHMuZHJhZyA9IGZ1bmN0aW9uIChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSwgZHVyYXRpb24sIHRvdWNoQ291bnQsIGVsZW1lbnRJZCwgZGVzdEVsSWQpIHtcbiAgbGV0IGRyYWdPcHRzID0ge2VsZW1lbnRJZCwgZGVzdEVsSWQsIHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZLFxuICAgICAgICAgICAgICAgICAgc3RlcHM6IE1hdGgucm91bmQoZHVyYXRpb24gKiBkcmFnU3RlcHNQZXJTZWMpfTtcbiAgaWYgKGVsZW1lbnRJZCkge1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcC5zZW5kQWN0aW9uKFwiZWxlbWVudDpkcmFnXCIsIGRyYWdPcHRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImRyYWdcIiwgZHJhZ09wdHMpO1xuICB9XG59O1xuXG5jb21tYW5kcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5hZGIubG9jaygpO1xufTtcblxuY29tbWFuZHMuaXNMb2NrZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFkYi5pc1NjcmVlbkxvY2tlZCgpO1xufTtcblxuY29tbWFuZHMudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gYW5kcm9pZEhlbHBlcnMudW5sb2NrKHRoaXMuYWRiKTtcbn07XG5cbmNvbW1hbmRzLm9wZW5Ob3RpZmljYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcIm9wZW5Ob3RpZmljYXRpb25cIik7XG59O1xuXG5jb21tYW5kcy5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gIHJldHVybiB0aGlzLmFkYi5zZW5kVGVsbmV0Q29tbWFuZChgZ2VvIGZpeCAke2xvbmdpdHVkZX0gJHtsYXRpdHVkZX1gKTtcbn07XG5cbmNvbW1hbmRzLnB1bGxGaWxlID0gYXN5bmMgZnVuY3Rpb24gKHJlbW90ZVBhdGgpIHtcbiAgbGV0IGxvY2FsRmlsZSA9IHRlbXAucGF0aCh7cHJlZml4OiAnYXBwaXVtJywgc3VmZml4OiAnLnRtcCd9KTtcbiAgYXdhaXQgdGhpcy5hZGIucHVsbChyZW1vdGVQYXRoLCBsb2NhbEZpbGUpO1xuICBsZXQgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGxvY2FsRmlsZSk7XG4gIGxldCBiNjRkYXRhID0gbmV3IEJ1ZmZlcihkYXRhKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIGlmIChhd2FpdCBmcy5leGlzdHMobG9jYWxGaWxlKSkge1xuICAgIGF3YWl0IGZzLnVubGluayhsb2NhbEZpbGUpO1xuICB9XG4gIHJldHVybiBiNjRkYXRhO1xufTtcblxuY29tbWFuZHMucHVzaEZpbGUgPSBhc3luYyBmdW5jdGlvbiAocmVtb3RlUGF0aCwgYmFzZTY0RGF0YSkge1xuICBsZXQgbG9jYWxGaWxlID0gdGVtcC5wYXRoKHtwcmVmaXg6ICdhcHBpdW0nLCBzdWZmaXg6ICcudG1wJ30pO1xuICBhd2FpdCBta2RpcnAocGF0aC5kaXJuYW1lKGxvY2FsRmlsZSkpO1xuICBsZXQgY29udGVudCA9IG5ldyBCdWZmZXIoYmFzZTY0RGF0YSwgJ2Jhc2U2NCcpO1xuICBsZXQgZmQgPSBhd2FpdCBmcy5vcGVuKGxvY2FsRmlsZSwgJ3cnKTtcbiAgYXdhaXQgZnMud3JpdGUoZmQsIGNvbnRlbnQsIDAsIGNvbnRlbnQubGVuZ3RoLCAwKTtcbiAgYXdhaXQgZnMuY2xvc2UoZmQpO1xuXG4gIC8vIGFkYiBwdXNoIGNyZWF0ZXMgZm9sZGVycyBhbmQgb3ZlcndyaXRlcyBleGlzdGluZyBmaWxlcy5cbiAgYXdhaXQgdGhpcy5hZGIucHVzaChsb2NhbEZpbGUsIHJlbW90ZVBhdGgpO1xuICBpZiAoYXdhaXQgZnMuZXhpc3RzKGxvY2FsRmlsZSkpIHtcbiAgICBhd2FpdCBmcy51bmxpbmsobG9jYWxGaWxlKTtcbiAgfVxufTtcblxuY29tbWFuZHMucHVsbEZvbGRlciA9IGFzeW5jIGZ1bmN0aW9uIChyZW1vdGVQYXRoKSB7XG4gIGxldCBsb2NhbEZvbGRlciA9IHRlbXAucGF0aCh7cHJlZml4OiAnYXBwaXVtJ30pO1xuICBhd2FpdCB0aGlzLmFkYi5wdWxsKHJlbW90ZVBhdGgsIGxvY2FsRm9sZGVyKTtcbiAgLy8gVE9ETzogZmluZCBhIGJldHRlciBhbHRlcm5hdGl2ZSB0byB0aGUgQWRtWmlwIG1vZHVsZVxuICBsZXQgemlwID0gbmV3IEFkbVppcCgpO1xuICB6aXAuYWRkTG9jYWxGb2xkZXIobG9jYWxGb2xkZXIpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHppcC50b0J1ZmZlcigoYnVmZmVyKSA9PiB7XG4gICAgICBsb2dnZXIuZGVidWcoXCJDb252ZXJ0aW5nIGluLW1lbW9yeSB6aXAgZmlsZSB0byBiYXNlNjQgZW5jb2RlZCBzdHJpbmdcIik7XG4gICAgICByZXNvbHZlKGJ1ZmZlci50b1N0cmluZygnYmFzZTY0JykpO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbW1hbmRzLmdldFNjcmVlbnNob3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGxldCBsb2NhbEZpbGUgPSB0ZW1wLnBhdGgoe3ByZWZpeDogJ2FwcGl1bScsIHN1ZmZpeDogJy5wbmcnfSk7XG4gIGNvbnN0IHBuZyA9IFwiL2RhdGEvbG9jYWwvdG1wL3NjcmVlbnNob3QucG5nXCI7XG4gIGxldCBjbWQgPSAgWycvc3lzdGVtL2Jpbi9ybScsIGAke3BuZ307YCwgJy9zeXN0ZW0vYmluL3NjcmVlbmNhcCcsICctcCcsIHBuZ107XG4gIGF3YWl0IHRoaXMuYWRiLnNoZWxsKGNtZCk7XG4gIGlmIChhd2FpdCBmcy5leGlzdHMobG9jYWxGaWxlKSkge1xuICAgIGF3YWl0IGZzLnVubGluayhsb2NhbEZpbGUpO1xuICB9XG4gIGF3YWl0IHRoaXMuYWRiLnB1bGwocG5nLCBsb2NhbEZpbGUpO1xuICBsZXQgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGxvY2FsRmlsZSk7XG4gIGxldCBiNjRkYXRhID0gbmV3IEJ1ZmZlcihkYXRhKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gIGF3YWl0IGZzLnVubGluayhsb2NhbEZpbGUpO1xuICByZXR1cm4gYjY0ZGF0YTtcbn07XG5cbmNvbW1hbmRzLnJlcGxhY2VWYWx1ZSA9IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50SWQsIHRleHQpIHtcbiAgbGV0IHBhcmFtcyA9IHtlbGVtZW50SWQsIHRleHQsIHJlcGxhY2U6IHRydWV9O1xuICBpZiAodGhpcy5vcHRzLnVuaWNvZGVLZXlib2FyZCkge1xuICAgIHBhcmFtcy51bmljb2RlS2V5Ym9hcmQgPSB0cnVlO1xuICB9XG4gIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oXCJlbGVtZW50OnNldFRleHRcIiwgcGFyYW1zKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oZXh0ZW5zaW9ucywgY29tbWFuZHMsIGhlbHBlcnMpO1xuZXhwb3J0IHsgY29tbWFuZHMsIGhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=