'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _androidHelpers = require('../android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var _appiumSupport = require('appium-support');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

//import { errors } from 'mobile-json-wire-protocol';

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var commands = {},
    helpers = {},
    extensions = {};

var logTypesSupported = {
  'logcat': 'Logs for Android applications on real device and emulators ' + 'via ADB'
};

commands.keys = function callee$0$0(keys) {
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // Protocol sends an array; rethink approach
        keys = keys.join('');
        params = {
          text: keys,
          replace: false
        };

        if (this.opts.unicodeKeyboard) {
          params.unicodeKeyboard = true;
        }
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction('setText', params));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getPageSource = function () {
  return this.bootstrap.sendAction('source');
};

commands.back = function () {
  return this.bootstrap.sendAction('pressBack');
};

commands.hideKeyboard = function callee$0$0() {
  var _ref, isKeyboardShown, canCloseKeyboard;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.isSoftKeyboardPresent());

      case 2:
        _ref = context$1$0.sent;
        isKeyboardShown = _ref.isKeyboardShown;
        canCloseKeyboard = _ref.canCloseKeyboard;

        if (isKeyboardShown) {
          context$1$0.next = 7;
          break;
        }

        throw new Error("Soft keyboard not present, cannot hide keyboard");

      case 7:
        if (!canCloseKeyboard) {
          context$1$0.next = 11;
          break;
        }

        return context$1$0.abrupt('return', this.back());

      case 11:
        _logger2['default'].info("Keyboard has no UI; no closing necessary");

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.openSettingsActivity = function callee$0$0(setting) {
  var _ref2, appPackage, appActivity;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.getFocusedPackageAndActivity());

      case 2:
        _ref2 = context$1$0.sent;
        appPackage = _ref2.appPackage;
        appActivity = _ref2.appActivity;
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(this.adb.shell(['am', 'start', '-a', 'android.settings.' + setting]));

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(this.adb.waitForNotActivity(appPackage, appActivity, 5000));

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getWindowSize = function () {
  return this.bootstrap.sendAction('getDeviceSize');
};

commands.getCurrentActivity = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.getFocusedPackageAndActivity());

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent.appActivity);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getLogTypes = function () {
  return _lodash2['default'].keys(logTypesSupported);
};

commands.getLog = function (logType) {
  if (!_lodash2['default'].has(logTypesSupported, logType)) {
    throw new Error('Unsupported log type ' + logType + '.' + ('supported types are ' + JSON.stringify(logTypesSupported)));
  }

  if (logType === 'logcat') {
    return this.adb.getLogcatLogs();
  }
};

commands.isAppInstalled = function (appPackage) {
  return this.adb.isAppInstalled(appPackage);
};

commands.removeApp = function (appPackage) {
  return this.adb.uninstallApk(appPackage);
};

commands.installApp = function callee$0$0(appPath) {
  var _ref3, apkPackage;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(appPath));

      case 2:
        if (context$1$0.sent) {
          context$1$0.next = 4;
          break;
        }

        _logger2['default'].errorAndThrow('Could not find app apk at ' + appPath);

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.adb.packageAndLaunchActivityFromManifest(appPath));

      case 6:
        _ref3 = context$1$0.sent;
        apkPackage = _ref3.apkPackage;
        return context$1$0.abrupt('return', _androidHelpers2['default'].installApkRemotely(this.adb, appPath, apkPackage, this.opts.fastReset));

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.background = function callee$0$0(seconds) {
  var _ref4, appPackage, appActivity;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.getFocusedPackageAndActivity());

      case 2:
        _ref4 = context$1$0.sent;
        appPackage = _ref4.appPackage;
        appActivity = _ref4.appActivity;
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(this.adb.goToHome());

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_bluebird2['default'].delay(seconds * 1000));

      case 9:
        return context$1$0.abrupt('return', this.adb.startApp({
          pkg: this.opts.appPackage,
          activity: this.opts.appActivity,
          action: this.opts.intentAction,
          category: this.opts.intentCategory,
          flags: this.opts.intentFlags,
          waitPkg: appPackage,
          waitActivity: appActivity,
          optionalIntentArguments: this.opts.optionalIntentArguments,
          stopApp: this.opts.stopAppOnReset || !this.opts.dontStopAppOnReset
        }));

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getStrings = function callee$0$0(language) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (language) {
          context$1$0.next = 5;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.getDeviceLanguage());

      case 3:
        language = context$1$0.sent;

        _logger2['default'].info('No language specified, returning strings for: ' + language);

      case 5:
        if (!this.apkStrings[language]) {
          context$1$0.next = 7;
          break;
        }

        return context$1$0.abrupt('return', this.apkStrings[language]);

      case 7:
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(this.pushStrings(language));

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.bootstrap.sendAction('updateStrings'));

      case 11:
        return context$1$0.abrupt('return', this.apkStrings[language]);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.startActivity = function callee$0$0(appPackage, appActivity) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.startApp({
          pkg: appPackage,
          activity: appActivity,
          action: this.opts.intentAction,
          category: this.opts.intentCategory,
          flags: this.opts.intentFlags,
          optionalIntentArguments: this.opts.optionalIntentArguments,
          stopApp: this.opts.stopAppOnReset || !this.opts.dontStopAppOnReset
        }));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.reset = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.opts.fastReset) {
          context$1$0.next = 6;
          break;
        }

        _logger2['default'].info("Running fast reset (stop and clear)");
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.adb.stopAndClear(this.opts.appPackage));

      case 4:
        context$1$0.next = 13;
        break;

      case 6:
        _logger2['default'].info("Running old fashion reset (reinstall)");
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(this.adb.stopAndClear(this.opts.appPackage));

      case 9:
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(this.adb.uninstallApk(this.opts.appPackage));

      case 11:
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(_androidHelpers2['default'].installApkRemotely(this.adb, this.opts.app, this.opts.appPackage, this.opts.fastReset));

      case 13:
        context$1$0.next = 15;
        return _regeneratorRuntime.awrap(this.startAUT());

      case 15:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 16:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// Return cached strings

// TODO: This is mutating the current language, but it's how appium currently works
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBYyxRQUFROzs7OzhCQUNLLG9CQUFvQjs7Ozs2QkFDNUIsZ0JBQWdCOzt3QkFDckIsVUFBVTs7Ozs7O3NCQUVSLFdBQVc7Ozs7QUFFM0IsSUFBSSxRQUFRLEdBQUcsRUFBRTtJQUFFLE9BQU8sR0FBRyxFQUFFO0lBQUUsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFakQsSUFBTSxpQkFBaUIsR0FBRztBQUN4QixVQUFRLEVBQUcsNkRBQTZELEdBQzdELFNBQVM7Q0FDckIsQ0FBQzs7QUFFRixRQUFRLENBQUMsSUFBSSxHQUFHLG9CQUFnQixJQUFJO01BRzlCLE1BQU07Ozs7O0FBRFYsWUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakIsY0FBTSxHQUFHO0FBQ1gsY0FBSSxFQUFFLElBQUk7QUFDVixpQkFBTyxFQUFFLEtBQUs7U0FDZjs7QUFDRCxZQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQzdCLGdCQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjs7eUNBQ1ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzs7Ozs7Ozs7OztDQUMxRCxDQUFDOztBQUVGLFFBQVEsQ0FBQyxhQUFhLEdBQUcsWUFBWTtBQUNuQyxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzVDLENBQUM7O0FBRUYsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZO0FBQzFCLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Q0FDL0MsQ0FBQzs7QUFFRixRQUFRLENBQUMsWUFBWSxHQUFHO1lBQ2pCLGVBQWUsRUFBRSxnQkFBZ0I7Ozs7Ozt5Q0FBVSxJQUFJLENBQUMsR0FBRyxD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Ozs7O3lDQUdoRyxJQUFJLENBQUMsUUFBUSxFQUFFOzs7Ozs7Ozs7O0NBQzdCLENBQUM7O0FBRUYsZUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsR0FBUixRQUFRO1FBQUUsT0FBTyxHQUFQLE9BQU87cUJBQ1gsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvZ2VuZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYW5kcm9pZEhlbHBlcnMgZnJvbSAnLi4vYW5kcm9pZC1oZWxwZXJzJztcbmltcG9ydCB7IGZzIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xuaW1wb3J0IEIgZnJvbSAnYmx1ZWJpcmQnO1xuLy9pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICdtb2JpbGUtanNvbi13aXJlLXByb3RvY29sJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vbG9nZ2VyJztcblxubGV0IGNvbW1hbmRzID0ge30sIGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xuXG5jb25zdCBsb2dUeXBlc1N1cHBvcnRlZCA9IHtcbiAgJ2xvZ2NhdCcgOiAnTG9ncyBmb3IgQW5kcm9pZCBhcHBsaWNhdGlvbnMgb24gcmVhbCBkZXZpY2UgYW5kIGVtdWxhdG9ycyAnICtcbiAgICAgICAgICAgICAndmlhIEFEQidcbn07XG5cbmNvbW1hbmRzLmtleXMgPSBhc3luYyBmdW5jdGlvbiAoa2V5cykge1xuICAvLyBQcm90b2NvbCBzZW5kcyBhbiBhcnJheTsgcmV0aGluayBhcHByb2FjaFxuICBrZXlzID0ga2V5cy5qb2luKCcnKTtcbiAgbGV0IHBhcmFtcyA9IHtcbiAgICB0ZXh0OiBrZXlzLFxuICAgIHJlcGxhY2U6IGZhbHNlXG4gIH07XG4gIGlmICh0aGlzLm9wdHMudW5pY29kZUtleWJvYXJkKSB7XG4gICAgcGFyYW1zLnVuaWNvZGVLZXlib2FyZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oJ3NldFRleHQnLCBwYXJhbXMpO1xufTtcblxuY29tbWFuZHMuZ2V0UGFnZVNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oJ3NvdXJjZScpO1xufTtcblxuY29tbWFuZHMuYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oJ3ByZXNzQmFjaycpO1xufTtcblxuY29tbWFuZHMuaGlkZUtleWJvYXJkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsZXQge2lzS2V5Ym9hcmRTaG93biwgY2FuQ2xvc2VLZXlib2FyZH0gPSBhd2FpdCB0aGlzLmFkYi5pc1NvZnRLZXlib2FyZFByZXNlbnQoKTtcbiAgaWYgKCFpc0tleWJvYXJkU2hvd24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb2Z0IGtleWJvYXJkIG5vdCBwcmVzZW50LCBjYW5ub3QgaGlkZSBrZXlib2FyZFwiKTtcbiAgfVxuXG4gIGlmIChjYW5DbG9zZUtleWJvYXJkKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIGxvZy5pbmZvKFwiS2V5Ym9hcmQgaGFzIG5vIFVJOyBubyBjbG9zaW5nIG5lY2Vzc2FyeVwiKTtcbiAgfVxufTtcblxuY29tbWFuZHMub3BlblNldHRpbmdzQWN0aXZpdHkgPSBhc3luYyBmdW5jdGlvbiAoc2V0dGluZykge1xuICBsZXQge2FwcFBhY2thZ2UsIGFwcEFjdGl2aXR5fSA9IGF3YWl0IHRoaXMuYWRiLmdldEZvY3VzZWRQYWNrYWdlQW5kQWN0aXZpdHkoKTtcbiAgYXdhaXQgdGhpcy5hZGIuc2hlbGwoWydhbScsICdzdGFydCcsICctYScsIGBhbmRyb2lkLnNldHRpbmdzLiR7c2V0dGluZ31gXSk7XG4gIGF3YWl0IHRoaXMuYWRiLndhaXRGb3JOb3RBY3Rpdml0eShhcHBQYWNrYWdlLCBhcHBBY3Rpdml0eSwgNTAwMCk7XG59O1xuXG5jb21tYW5kcy5nZXRXaW5kb3dTaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbignZ2V0RGV2aWNlU2l6ZScpO1xufTtcblxuY29tbWFuZHMuZ2V0Q3VycmVudEFjdGl2aXR5ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKGF3YWl0IHRoaXMuYWRiLmdldEZvY3VzZWRQYWNrYWdlQW5kQWN0aXZpdHkoKSkuYXBwQWN0aXZpdHk7XG59O1xuXG5jb21tYW5kcy5nZXRMb2dUeXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8ua2V5cyhsb2dUeXBlc1N1cHBvcnRlZCk7XG59O1xuXG5jb21tYW5kcy5nZXRMb2cgPSBmdW5jdGlvbiAobG9nVHlwZSkge1xuICBpZiAoIV8uaGFzKGxvZ1R5cGVzU3VwcG9ydGVkLCBsb2dUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBsb2cgdHlwZSAke2xvZ1R5cGV9LmAgK1xuICAgICAgICAgICAgICAgICAgICAgIGBzdXBwb3J0ZWQgdHlwZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkobG9nVHlwZXNTdXBwb3J0ZWQpfWApO1xuICB9XG5cbiAgaWYgKGxvZ1R5cGUgPT09ICdsb2djYXQnKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRiLmdldExvZ2NhdExvZ3MoKTtcbiAgfVxufTtcblxuY29tbWFuZHMuaXNBcHBJbnN0YWxsZWQgPSBmdW5jdGlvbiAoYXBwUGFja2FnZSkge1xuICByZXR1cm4gdGhpcy5hZGIuaXNBcHBJbnN0YWxsZWQoYXBwUGFja2FnZSk7XG59O1xuXG5jb21tYW5kcy5yZW1vdmVBcHAgPSBmdW5jdGlvbiAoYXBwUGFja2FnZSkge1xuICByZXR1cm4gdGhpcy5hZGIudW5pbnN0YWxsQXBrKGFwcFBhY2thZ2UpO1xufTtcblxuY29tbWFuZHMuaW5zdGFsbEFwcCA9IGFzeW5jIGZ1bmN0aW9uIChhcHBQYXRoKSB7XG4gIGlmICghKGF3YWl0IGZzLmV4aXN0cyhhcHBQYXRoKSkpIHtcbiAgICBsb2cuZXJyb3JBbmRUaHJvdyhgQ291bGQgbm90IGZpbmQgYXBwIGFwayBhdCAke2FwcFBhdGh9YCk7XG4gIH1cblxuICBsZXQge2Fwa1BhY2thZ2V9ID0gYXdhaXQgdGhpcy5hZGIucGFja2FnZUFuZExhdW5jaEFjdGl2aXR5RnJvbU1hbmlmZXN0KGFwcFBhdGgpO1xuICByZXR1cm4gYW5kcm9pZEhlbHBlcnMuaW5zdGFsbEFwa1JlbW90ZWx5KHRoaXMuYWRiLCBhcHBQYXRoLCBhcGtQYWNrYWdlLCB0aGlzLm9wdHMuZmFzdFJlc2V0KTtcbn07XG5cbmNvbW1hbmRzLmJhY2tncm91bmQgPSBhc3luYyBmdW5jdGlvbiAoc2Vjb25kcykge1xuICBsZXQge2FwcFBhY2thZ2UsIGFwcEFjdGl2aXR5fSA9IGF3YWl0IHRoaXMuYWRiLmdldEZvY3VzZWRQYWNrYWdlQW5kQWN0aXZpdHkoKTtcbiAgYXdhaXQgdGhpcy5hZGIuZ29Ub0hvbWUoKTtcbiAgYXdhaXQgQi5kZWxheShzZWNvbmRzICogMTAwMCk7XG4gIHJldHVybiB0aGlzLmFkYi5zdGFydEFwcCh7XG4gICAgcGtnOiB0aGlzLm9wdHMuYXBwUGFja2FnZSxcbiAgICBhY3Rpdml0eTogdGhpcy5vcHRzLmFwcEFjdGl2aXR5LFxuICAgIGFjdGlvbjogdGhpcy5vcHRzLmludGVudEFjdGlvbixcbiAgICBjYXRlZ29yeTogdGhpcy5vcHRzLmludGVudENhdGVnb3J5LFxuICAgIGZsYWdzOiB0aGlzLm9wdHMuaW50ZW50RmxhZ3MsXG4gICAgd2FpdFBrZzogYXBwUGFja2FnZSxcbiAgICB3YWl0QWN0aXZpdHk6IGFwcEFjdGl2aXR5LFxuICAgIG9wdGlvbmFsSW50ZW50QXJndW1lbnRzOiB0aGlzLm9wdHMub3B0aW9uYWxJbnRlbnRBcmd1bWVudHMsXG4gICAgc3RvcEFwcDogdGhpcy5vcHRzLnN0b3BBcHBPblJlc2V0IHx8ICF0aGlzLm9wdHMuZG9udFN0b3BBcHBPblJlc2V0LFxuICB9KTtcbn07XG5cbmNvbW1hbmRzLmdldFN0cmluZ3MgPSBhc3luYyBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcbiAgaWYgKCFsYW5ndWFnZSkge1xuICAgIGxhbmd1YWdlID0gYXdhaXQgdGhpcy5hZGIuZ2V0RGV2aWNlTGFuZ3VhZ2UoKTtcbiAgICBsb2cuaW5mbyhgTm8gbGFuZ3VhZ2Ugc3BlY2lmaWVkLCByZXR1cm5pbmcgc3RyaW5ncyBmb3I6ICR7bGFuZ3VhZ2V9YCk7XG4gIH1cblxuICBpZiAodGhpcy5hcGtTdHJpbmdzW2xhbmd1YWdlXSkge1xuICAgIC8vIFJldHVybiBjYWNoZWQgc3RyaW5nc1xuICAgIHJldHVybiB0aGlzLmFwa1N0cmluZ3NbbGFuZ3VhZ2VdO1xuICB9XG5cbiAgLy8gVE9ETzogVGhpcyBpcyBtdXRhdGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgYnV0IGl0J3MgaG93IGFwcGl1bSBjdXJyZW50bHkgd29ya3NcbiAgYXdhaXQgdGhpcy5wdXNoU3RyaW5ncyhsYW5ndWFnZSk7XG4gIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNlbmRBY3Rpb24oJ3VwZGF0ZVN0cmluZ3MnKTtcblxuICByZXR1cm4gdGhpcy5hcGtTdHJpbmdzW2xhbmd1YWdlXTtcbn07XG5cbmNvbW1hbmRzLnN0YXJ0QWN0aXZpdHkgPSBhc3luYyBmdW5jdGlvbiAoYXBwUGFja2FnZSwgYXBwQWN0aXZpdHkpIHtcbiAgYXdhaXQgdGhpcy5hZGIuc3RhcnRBcHAoe1xuICAgIHBrZzogYXBwUGFja2FnZSxcbiAgICBhY3Rpdml0eTogYXBwQWN0aXZpdHksXG4gICAgYWN0aW9uOiB0aGlzLm9wdHMuaW50ZW50QWN0aW9uLFxuICAgIGNhdGVnb3J5OiB0aGlzLm9wdHMuaW50ZW50Q2F0ZWdvcnksXG4gICAgZmxhZ3M6IHRoaXMub3B0cy5pbnRlbnRGbGFncyxcbiAgICBvcHRpb25hbEludGVudEFyZ3VtZW50czogdGhpcy5vcHRzLm9wdGlvbmFsSW50ZW50QXJndW1lbnRzLFxuICAgIHN0b3BBcHA6IHRoaXMub3B0cy5zdG9wQXBwT25SZXNldCB8fCAhdGhpcy5vcHRzLmRvbnRTdG9wQXBwT25SZXNldCxcbiAgfSk7XG59O1xuXG5jb21tYW5kcy5yZXNldCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3B0cy5mYXN0UmVzZXQpIHtcbiAgICBsb2cuaW5mbyhcIlJ1bm5pbmcgZmFzdCByZXNldCAoc3RvcCBhbmQgY2xlYXIpXCIpO1xuICAgIGF3YWl0IHRoaXMuYWRiLnN0b3BBbmRDbGVhcih0aGlzLm9wdHMuYXBwUGFja2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgbG9nLmluZm8oXCJSdW5uaW5nIG9sZCBmYXNoaW9uIHJlc2V0IChyZWluc3RhbGwpXCIpO1xuICAgIGF3YWl0IHRoaXMuYWRiLnN0b3BBbmRDbGVhcih0aGlzLm9wdHMuYXBwUGFja2FnZSk7XG4gICAgYXdhaXQgdGhpcy5hZGIudW5pbnN0YWxsQXBrKHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcbiAgICBhd2FpdCBhbmRyb2lkSGVscGVycy5pbnN0YWxsQXBrUmVtb3RlbHkodGhpcy5hZGIsIHRoaXMub3B0cy5hcHAsIHRoaXMub3B0cy5hcHBQYWNrYWdlLCB0aGlzLm9wdHMuZmFzdFJlc2V0KTtcbiAgfVxuXG4gIHJldHVybiBhd2FpdCB0aGlzLnN0YXJ0QVVUKCk7XG59O1xuXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzLCBoZWxwZXJzKTtcbmV4cG9ydCB7IGNvbW1hbmRzLCBoZWxwZXJzIH07XG5leHBvcnQgZGVmYXVsdCBleHRlbnNpb25zO1xuIl19