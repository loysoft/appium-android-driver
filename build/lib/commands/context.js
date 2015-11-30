'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _webviewHelpers = require('../webview-helpers');

var _webviewHelpers2 = _interopRequireDefault(_webviewHelpers);

var _appiumChromedriver = require('appium-chromedriver');

var _appiumChromedriver2 = _interopRequireDefault(_appiumChromedriver);

var _mobileJsonWireProtocol = require('mobile-json-wire-protocol');

var commands = {},
    helpers = {},
    extensions = {};

/* -------------------------------
 * Actual MJSONWP command handlers
 * ------------------------------- */
commands.getCurrentContext = function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        return context$1$0.abrupt('return', this.curContext);

      case 1:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.getContexts = function callee$0$0() {
  var webviews;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        webviews = undefined;

        if (!this.isChromeSession) {
          context$1$0.next = 5;
          break;
        }

        // if we have a Chrome browser session, we only care about the Chrome
        // context and the native context
        webviews = [_webviewHelpers.CHROMIUM_WIN];
        context$1$0.next = 8;
        break;

      case 5:
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(_webviewHelpers2['default'].getWebviews(this.adb, this.opts.androidDeviceSocket));

      case 7:
        webviews = context$1$0.sent;

      case 8:
        this.contexts = _lodash2['default'].union([_webviewHelpers.NATIVE_WIN], webviews);
        _logger2['default'].debug('Available contexts: ' + JSON.stringify(this.contexts));
        return context$1$0.abrupt('return', this.contexts);

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setContext = function callee$0$0(name) {
  var contexts;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (name === null) {
          name = this.defaultContextName();
        } else if (name === _webviewHelpers.WEBVIEW_WIN) {
          // handle setContext "WEBVIEW"
          name = this.defaultWebviewName();
        }
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.getContexts());

      case 3:
        contexts = context$1$0.sent;

        if (_lodash2['default'].contains(contexts, name)) {
          context$1$0.next = 6;
          break;
        }

        throw new _mobileJsonWireProtocol.errors.NoSuchContextError();

      case 6:
        if (!(name === this.curContext)) {
          context$1$0.next = 8;
          break;
        }

        return context$1$0.abrupt('return');

      case 8:
        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(this.switchContext(name));

      case 10:
        this.curContext = name;

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.switchContext = function callee$0$0(name) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!this.isChromedriverContext(name)) {
          context$1$0.next = 5;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.startChromedriverProxy(name));

      case 3:
        context$1$0.next = 10;
        break;

      case 5:
        if (!this.isChromedriverContext(this.curContext)) {
          context$1$0.next = 9;
          break;
        }

        // if we're moving to a non-chromedriver webview, and our current context
        // _is_ a chromedriver webview, if caps recreateChromeDriverSessions is set
        // to true then kill chromedriver session using stopChromedriverProxies or
        // else simply suspend proxying to the latter
        if (this.opts.recreateChromeDriverSessions) {
          _logger2['default'].debug("recreateChromeDriverSessions set to true; killing existing chromedrivers");
          this.stopChromedriverProxies();
        } else {
          this.suspendChromedriverProxy();
        }
        context$1$0.next = 10;
        break;

      case 9:
        throw new Error('Didn\'t know how to handle switching to context \'' + name + '\'');

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

/* ---------------------------------
 * On-object context-related helpers
 * --------------------------------- */

// The reason this is a function and not just a constant is that both android-
// driver and selendroid-driver use this logic, and each one returns
// a different default context name
helpers.defaultContextName = function () {
  return _webviewHelpers.NATIVE_WIN;
};

helpers.defaultWebviewName = function () {
  return _webviewHelpers.WEBVIEW_BASE + this.opts.appPackage;
};

helpers.isWebContext = function () {
  return this.curContext !== null && this.curContext !== _webviewHelpers.NATIVE_WIN;
};

// Turn on proxying to an existing Chromedriver session or a new one
helpers.startChromedriverProxy = function callee$0$0(context) {
  var cd, opts;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug('Connecting to chrome-backed webview context \'' + context + '\'');

        if (!(this.chromedriver !== null)) {
          context$1$0.next = 3;
          break;
        }

        throw new Error("We already have a chromedriver instance running");

      case 3:
        cd = undefined;

        if (!this.sessionChromedrivers[context]) {
          context$1$0.next = 11;
          break;
        }

        // in the case where we've already set up a chromedriver for a context,
        // we want to reconnect to it, not create a whole new one
        _logger2['default'].debug('Found existing Chromedriver for context \'' + context + '\'. Using it.');
        cd = this.sessionChromedrivers[context];
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(setupExistingChromedriver(cd));

      case 9:
        context$1$0.next = 18;
        break;

      case 11:
        opts = _lodash2['default'].cloneDeep(this.opts);

        opts.chromeUseRunningApp = true;
        context$1$0.next = 15;
        return _regeneratorRuntime.awrap(setupNewChromedriver(opts, this.adb.curDeviceId, this.adb.getAdbServerPort()));

      case 15:
        cd = context$1$0.sent;

        // bind our stop/exit handler, passing in context so we know which
        // one stopped unexpectedly
        cd.on(_appiumChromedriver2['default'].EVENT_CHANGED, function (msg) {
          if (msg.state === _appiumChromedriver2['default'].STATE_STOPPED) {
            _this.onChromedriverStop(context);
          }
        });
        // save the chromedriver object under the context
        this.sessionChromedrivers[context] = cd;

      case 18:
        // hook up the local variables so we can proxy this biz
        this.chromedriver = cd;
        this.proxyReqRes = this.chromedriver.proxyReq.bind(this.chromedriver);
        this.jwpProxyActive = true;

      case 21:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Stop proxying to any Chromedriver
helpers.suspendChromedriverProxy = function () {
  this.chromedriver = null;
  this.proxyReqRes = null;
  this.jwpProxyActive = false;
};

// Handle an out-of-band Chromedriver stop event
helpers.onChromedriverStop = function callee$0$0(context) {
  var err;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].warn('Chromedriver for context ' + context + ' stopped unexpectedly');

        if (!(context === this.curContext)) {
          context$1$0.next = 7;
          break;
        }

        err = new Error("Chromedriver quit unexpectedly during session");
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.startUnexpectedShutdown(err));

      case 5:
        context$1$0.next = 9;
        break;

      case 7:
        // if a Chromedriver in the non-active context barfs, we don't really
        // care, we'll just make a new one next time we need the context.
        _logger2['default'].warn("Chromedriver quit unexpectedly, but it wasn't the active " + "context, ignoring");
        delete this.sessionChromedrivers[context];

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// Intentionally stop all the chromedrivers currently active, and ignore
// their exit events
helpers.stopChromedriverProxies = function callee$0$0() {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, context, cd;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        this.suspendChromedriverProxy(); // make sure we turn off the proxy flag
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 4;
        _iterator = _getIterator(_lodash2['default'].keys(this.sessionChromedrivers));

      case 6:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 23;
          break;
        }

        context = _step.value;
        cd = this.sessionChromedrivers[context];

        _logger2['default'].debug('Stopping chromedriver for context ' + context);
        // stop listening for the stopped state event
        cd.removeAllListeners(_appiumChromedriver2['default'].EVENT_CHANGED);
        context$1$0.prev = 11;
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(cd.stop());

      case 14:
        context$1$0.next = 19;
        break;

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0['catch'](11);

        _logger2['default'].warn('Error stopping Chromedriver: ' + context$1$0.t0.message);

      case 19:
        delete this.sessionChromedrivers[context];

      case 20:
        _iteratorNormalCompletion = true;
        context$1$0.next = 6;
        break;

      case 23:
        context$1$0.next = 29;
        break;

      case 25:
        context$1$0.prev = 25;
        context$1$0.t1 = context$1$0['catch'](4);
        _didIteratorError = true;
        _iteratorError = context$1$0.t1;

      case 29:
        context$1$0.prev = 29;
        context$1$0.prev = 30;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 32:
        context$1$0.prev = 32;

        if (!_didIteratorError) {
          context$1$0.next = 35;
          break;
        }

        throw _iteratorError;

      case 35:
        return context$1$0.finish(32);

      case 36:
        return context$1$0.finish(29);

      case 37:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[4, 25, 29, 37], [11, 16], [30,, 32, 36]]);
};

helpers.isChromedriverContext = function (viewName) {
  return viewName.indexOf(_webviewHelpers.WEBVIEW_WIN) !== -1 || viewName === _webviewHelpers.CHROMIUM_WIN;
};

/* --------------------------
 * Internal library functions
 * -------------------------- */

function setupExistingChromedriver(chromedriver) {
  return _regeneratorRuntime.async(function setupExistingChromedriver$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(chromedriver.hasWorkingWebview());

      case 2:
        if (context$1$0.sent) {
          context$1$0.next = 6;
          break;
        }

        _logger2['default'].debug("ChromeDriver is not associated with a window. " + "Re-initializing the session.");
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(chromedriver.restart());

      case 6:
        return context$1$0.abrupt('return', chromedriver);

      case 7:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function setupNewChromedriver(opts, curDeviceId, adbPort) {
  var chromeArgs, chromedriver, caps;
  return _regeneratorRuntime.async(function setupNewChromedriver$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        chromeArgs = {
          port: opts.chromeDriverPort,
          executable: opts.chromedriverExecutable,
          adbPort: adbPort
        };
        chromedriver = new _appiumChromedriver2['default'](chromeArgs);
        caps = {
          chromeOptions: {
            androidPackage: opts.appPackage
          }
        };

        if (opts.chromeUseRunningApp) {
          caps.chromeOptions.androidUseRunningApp = opts.chromeUseRunningApp;
        }
        if (opts.chromeAndroidActivity) {
          caps.chromeOptions.androidActivity = opts.chromeAndroidActivity;
        }
        if (opts.enablePerformanceLogging) {
          caps.loggingPrefs = { performance: 'ALL' };
        }
        caps = _webviewHelpers2['default'].decorateChromeOptions(caps, opts, curDeviceId);
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(chromedriver.start(caps));

      case 9:
        return context$1$0.abrupt('return', chromedriver);

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports.setupNewChromedriver = setupNewChromedriver;
exports['default'] = extensions;

// otherwise we use ADB to figure out which webviews are available

// if the context we want doesn't exist, fail

// if we're already in the context we want, do nothing

// We have some options when it comes to webviews. If we want a
// Chromedriver webview, we can only control one at a time.

// start proxying commands directly to chromedriver

// we exited unexpectedly while automating the current context and so want
// to shut down the session and respond with an error

// check the status by sending a simple window-based command to ChromeDriver
// if there is an error, we want to recreate the ChromeDriver session
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9jb250ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7c0JBQ0gsV0FBVzs7Ozs4QkFDSCxvQkFBb0I7Ozs7a0NBQ3RCLHFCQUFxQjs7OztzQ0FDdkIsMkJBQTJCOztBQUdsRCxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOzs7OztBQU1qRCxRQUFRLENBQUMsaUJBQWlCLEdBQUc7Ozs7NENBQ3BCLElBQUksQ0FBQyxVQUFVOzs7Ozs7O0NBQ3ZCLENBQUM7O0FBRUYsUUFBUSxDQUFDLFdBQVcsR0FBRztNQUNqQixRQUFROzs7O0FBQVIsZ0JBQVE7O2FBQ1IsSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7QUFHdEIsZ0JBQVEsR0FBRyw4QkFBYyxDQUFDOzs7Ozs7eUNBR1QsNEJBQWUsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7OztBQURoQyxnQkFBUTs7O0FBR1YsWUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBRSxLQUFLLENBQUMsNEJBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNoRCw0QkFBTyxLQUFLLDBCQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBRyxDQUFDOzRDQUM5RCxJQUFJLENBQUMsUUFBUTs7Ozs7OztDQUNyQixDQUFDOztBQUVGLFFBQVEsQ0FBQyxVQUFVLEdBQUcsb0JBQWdCLElBQUk7TUFPcEMsUUFBUTs7OztBQU5aLFlBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUNqQixjQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDbEMsTUFBTSxJQUFJLElBQUksZ0NBQWdCLEVBQUU7O0FBRS9CLGNBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUNsQzs7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Y0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ2pFO0FBQ0QsWUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7QUFDakMsY0FBSSxDQUFDLFlBQVksR0FBRyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsQ0FBQztTQUMxQztBQUNELFlBQUksR0FBRyw0QkFBZSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOzt5Q0FDL0QsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs0Q0FDdkIsWUFBWTs7Ozs7OztDQUNwQjs7QUFFRCxlQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxHQUFSLFFBQVE7UUFBRSxPQUFPLEdBQVAsT0FBTztRQUFFLG9CQUFvQixHQUFwQixvQkFBb0I7cUJBQ2pDLFVBQVUiLCJmaWxlIjoibGliL2NvbW1hbmRzL2NvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IHdlYnZpZXdIZWxwZXJzIGZyb20gJy4uL3dlYnZpZXctaGVscGVycyc7XG5pbXBvcnQgQ2hyb21lZHJpdmVyIGZyb20gJ2FwcGl1bS1jaHJvbWVkcml2ZXInO1xuaW1wb3J0IHsgZXJyb3JzIH0gZnJvbSAnbW9iaWxlLWpzb24td2lyZS1wcm90b2NvbCc7XG5pbXBvcnQgeyBOQVRJVkVfV0lOLCBXRUJWSUVXX0JBU0UsIFdFQlZJRVdfV0lOLCBDSFJPTUlVTV9XSU4gfSBmcm9tICcuLi93ZWJ2aWV3LWhlbHBlcnMnO1xuXG5sZXQgY29tbWFuZHMgPSB7fSwgaGVscGVycyA9IHt9LCBleHRlbnNpb25zID0ge307XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWN0dWFsIE1KU09OV1AgY29tbWFuZCBoYW5kbGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY29tbWFuZHMuZ2V0Q3VycmVudENvbnRleHQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmN1ckNvbnRleHQ7XG59O1xuXG5jb21tYW5kcy5nZXRDb250ZXh0cyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHdlYnZpZXdzO1xuICBpZiAodGhpcy5pc0Nocm9tZVNlc3Npb24pIHtcbiAgICAvLyBpZiB3ZSBoYXZlIGEgQ2hyb21lIGJyb3dzZXIgc2Vzc2lvbiwgd2Ugb25seSBjYXJlIGFib3V0IHRoZSBDaHJvbWVcbiAgICAvLyBjb250ZXh0IGFuZCB0aGUgbmF0aXZlIGNvbnRleHRcbiAgICB3ZWJ2aWV3cyA9IFtDSFJPTUlVTV9XSU5dO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aGVyd2lzZSB3ZSB1c2UgQURCIHRvIGZpZ3VyZSBvdXQgd2hpY2ggd2Vidmlld3MgYXJlIGF2YWlsYWJsZVxuICAgIHdlYnZpZXdzID0gYXdhaXQgd2Vidmlld0hlbHBlcnMuZ2V0V2Vidmlld3ModGhpcy5hZGIsXG4gICAgICB0aGlzLm9wdHMuYW5kcm9pZERldmljZVNvY2tldCk7XG4gIH1cbiAgdGhpcy5jb250ZXh0cyA9IF8udW5pb24oW05BVElWRV9XSU5dLCB3ZWJ2aWV3cyk7XG4gIGxvZ2dlci5kZWJ1ZyhgQXZhaWxhYmxlIGNvbnRleHRzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMuY29udGV4dHMpfWApO1xuICByZXR1cm4gdGhpcy5jb250ZXh0cztcbn07XG5cbmNvbW1hbmRzLnNldENvbnRleHQgPSBhc3luYyBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAobmFtZSA9PT0gbnVsbCkge1xuICAgIG5hbWUgPSB0aGlzLmRlZmF1bHRDb250ZXh0TmFtZSgpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09IFdFQlZJRVdfV0lOKSB7XG4gICAgLy8gaGFuZGxlIHNldENvbnRleHQgXCJXRUJWSUVXXCJcbiAgICBuYW1lID0gdGhpcy5kZWZhdWx0V2Vidmlld05hbWUoKTtcbiAgfVxuICBsZXQgY29udGV4dHMgPSBhd2FpdCB0aGlzLmdldENvbnRleHRzKCk7XG4gIC8vIGlmIHRoZSBjb250ZXh0IHdlIHdhbnQgZG9lc24ndCBleGlzdCwgZmFpbFxuICBpZiAoIV8uY29udGFpbnMoY29udGV4dHMsIG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5Ob1N1Y2hDb250ZXh0RXJyb3IoKTtcbiAgfVxuICAvLyBpZiB3ZSdyZSBhbHJlYWR5IGluIHRoZSBjb250ZXh0IHdlIHdhbnQsIGRvIG5vdGhpbmdcbiAgaWYgKG5hbWUgPT09IHRoaXMuY3VyQ29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IHRoaXMuc3dpdGNoQ29udGV4dChuYW1lKTtcbiAgdGhpcy5jdXJDb250ZXh0ID0gbmFtZTtcbn07XG5cbmhlbHBlcnMuc3dpdGNoQ29udGV4dCA9IGFzeW5jIGZ1bmN0aW9uIChuYW1lKSB7XG4gIC8vIFdlIGhhdmUgc29tZSBvcHRpb25zIHdoZW4gaXQgY29tZXMgdG8gd2Vidmlld3MuIElmIHdlIHdhbnQgYVxuICAvLyBDaHJvbWVkcml2ZXIgd2Vidmlldywgd2UgY2FuIG9ubHkgY29udHJvbCBvbmUgYXQgYSB0aW1lLlxuICBpZiAodGhpcy5pc0Nocm9tZWRyaXZlckNvbnRleHQobmFtZSkpIHtcbiAgICAvLyBzdGFydCBwcm94eWluZyBjb21tYW5kcyBkaXJlY3RseSB0byBjaHJvbWVkcml2ZXJcbiAgICBhd2FpdCB0aGlzLnN0YXJ0Q2hyb21lZHJpdmVyUHJveHkobmFtZSk7XG4gIH0gZWxzZSBpZiAodGhpcy5pc0Nocm9tZWRyaXZlckNvbnRleHQodGhpcy5jdXJDb250ZXh0KSkge1xuICAgIC8vIGlmIHdlJ3JlIG1vdmluZyB0byBhIG5vbi1jaHJvbWVkcml2ZXIgd2VidmlldywgYW5kIG91ciBjdXJyZW50IGNvbnRleHRcbiAgICAvLyBfaXNfIGEgY2hyb21lZHJpdmVyIHdlYnZpZXcsIGlmIGNhcHMgcmVjcmVhdGVDaHJvbWVEcml2ZXJTZXNzaW9ucyBpcyBzZXRcbiAgICAvLyB0byB0cnVlIHRoZW4ga2lsbCBjaHJvbWVkcml2ZXIgc2Vzc2lvbiB1c2luZyBzdG9wQ2hyb21lZHJpdmVyUHJveGllcyBvclxuICAgIC8vIGVsc2Ugc2ltcGx5IHN1c3BlbmQgcHJveHlpbmcgdG8gdGhlIGxhdHRlclxuICAgIGlmICh0aGlzLm9wdHMucmVjcmVhdGVDaHJvbWVEcml2ZXJTZXNzaW9ucykge1xuICAgICAgbG9nZ2VyLmRlYnVnKFwicmVjcmVhdGVDaHJvbWVEcml2ZXJTZXNzaW9ucyBzZXQgdG8gdHJ1ZTsga2lsbGluZyBleGlzdGluZyBjaHJvbWVkcml2ZXJzXCIpO1xuICAgICAgdGhpcy5zdG9wQ2hyb21lZHJpdmVyUHJveGllcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1c3BlbmRDaHJvbWVkcml2ZXJQcm94eSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYERpZG4ndCBrbm93IGhvdyB0byBoYW5kbGUgc3dpdGNoaW5nIHRvIGNvbnRleHQgJyR7bmFtZX0nYCk7XG4gIH1cbn07XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBPbi1vYmplY3QgY29udGV4dC1yZWxhdGVkIGhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vLyBUaGUgcmVhc29uIHRoaXMgaXMgYSBmdW5jdGlvbiBhbmQgbm90IGp1c3QgYSBjb25zdGFudCBpcyB0aGF0IGJvdGggYW5kcm9pZC1cbi8vIGRyaXZlciBhbmQgc2VsZW5kcm9pZC1kcml2ZXIgdXNlIHRoaXMgbG9naWMsIGFuZCBlYWNoIG9uZSByZXR1cm5zXG4vLyBhIGRpZmZlcmVudCBkZWZhdWx0IGNvbnRleHQgbmFtZVxuaGVscGVycy5kZWZhdWx0Q29udGV4dE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBOQVRJVkVfV0lOO1xufTtcblxuaGVscGVycy5kZWZhdWx0V2Vidmlld05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBXRUJWSUVXX0JBU0UgKyB0aGlzLm9wdHMuYXBwUGFja2FnZTtcbn07XG5cbmhlbHBlcnMuaXNXZWJDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5jdXJDb250ZXh0ICE9PSBudWxsICYmIHRoaXMuY3VyQ29udGV4dCAhPT0gTkFUSVZFX1dJTjtcbn07XG5cbi8vIFR1cm4gb24gcHJveHlpbmcgdG8gYW4gZXhpc3RpbmcgQ2hyb21lZHJpdmVyIHNlc3Npb24gb3IgYSBuZXcgb25lXG5oZWxwZXJzLnN0YXJ0Q2hyb21lZHJpdmVyUHJveHkgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBsb2dnZXIuZGVidWcoYENvbm5lY3RpbmcgdG8gY2hyb21lLWJhY2tlZCB3ZWJ2aWV3IGNvbnRleHQgJyR7Y29udGV4dH0nYCk7XG4gIGlmICh0aGlzLmNocm9tZWRyaXZlciAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIldlIGFscmVhZHkgaGF2ZSBhIGNocm9tZWRyaXZlciBpbnN0YW5jZSBydW5uaW5nXCIpO1xuICB9XG5cbiAgbGV0IGNkO1xuICBpZiAodGhpcy5zZXNzaW9uQ2hyb21lZHJpdmVyc1tjb250ZXh0XSkge1xuICAgIC8vIGluIHRoZSBjYXNlIHdoZXJlIHdlJ3ZlIGFscmVhZHkgc2V0IHVwIGEgY2hyb21lZHJpdmVyIGZvciBhIGNvbnRleHQsXG4gICAgLy8gd2Ugd2FudCB0byByZWNvbm5lY3QgdG8gaXQsIG5vdCBjcmVhdGUgYSB3aG9sZSBuZXcgb25lXG4gICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBleGlzdGluZyBDaHJvbWVkcml2ZXIgZm9yIGNvbnRleHQgJyR7Y29udGV4dH0nLiBVc2luZyBpdC5gKTtcbiAgICBjZCA9IHRoaXMuc2Vzc2lvbkNocm9tZWRyaXZlcnNbY29udGV4dF07XG4gICAgYXdhaXQgc2V0dXBFeGlzdGluZ0Nocm9tZWRyaXZlcihjZCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG9wdHMgPSBfLmNsb25lRGVlcCh0aGlzLm9wdHMpO1xuICAgIG9wdHMuY2hyb21lVXNlUnVubmluZ0FwcCA9IHRydWU7XG4gICAgY2QgPSBhd2FpdCBzZXR1cE5ld0Nocm9tZWRyaXZlcihvcHRzLCB0aGlzLmFkYi5jdXJEZXZpY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRiLmdldEFkYlNlcnZlclBvcnQoKSk7XG4gICAgLy8gYmluZCBvdXIgc3RvcC9leGl0IGhhbmRsZXIsIHBhc3NpbmcgaW4gY29udGV4dCBzbyB3ZSBrbm93IHdoaWNoXG4gICAgLy8gb25lIHN0b3BwZWQgdW5leHBlY3RlZGx5XG4gICAgY2Qub24oQ2hyb21lZHJpdmVyLkVWRU5UX0NIQU5HRUQsIChtc2cpID0+IHtcbiAgICAgIGlmIChtc2cuc3RhdGUgPT09IENocm9tZWRyaXZlci5TVEFURV9TVE9QUEVEKSB7XG4gICAgICAgIHRoaXMub25DaHJvbWVkcml2ZXJTdG9wKGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNhdmUgdGhlIGNocm9tZWRyaXZlciBvYmplY3QgdW5kZXIgdGhlIGNvbnRleHRcbiAgICB0aGlzLnNlc3Npb25DaHJvbWVkcml2ZXJzW2NvbnRleHRdID0gY2Q7XG4gIH1cbiAgLy8gaG9vayB1cCB0aGUgbG9jYWwgdmFyaWFibGVzIHNvIHdlIGNhbiBwcm94eSB0aGlzIGJpelxuICB0aGlzLmNocm9tZWRyaXZlciA9IGNkO1xuICB0aGlzLnByb3h5UmVxUmVzID0gdGhpcy5jaHJvbWVkcml2ZXIucHJveHlSZXEuYmluZCh0aGlzLmNocm9tZWRyaXZlcik7XG4gIHRoaXMuandwUHJveHlBY3RpdmUgPSB0cnVlO1xufTtcblxuLy8gU3RvcCBwcm94eWluZyB0byBhbnkgQ2hyb21lZHJpdmVyXG5oZWxwZXJzLnN1c3BlbmRDaHJvbWVkcml2ZXJQcm94eSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jaHJvbWVkcml2ZXIgPSBudWxsO1xuICB0aGlzLnByb3h5UmVxUmVzID0gbnVsbDtcbiAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IGZhbHNlO1xufTtcblxuLy8gSGFuZGxlIGFuIG91dC1vZi1iYW5kIENocm9tZWRyaXZlciBzdG9wIGV2ZW50XG5oZWxwZXJzLm9uQ2hyb21lZHJpdmVyU3RvcCA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGxvZ2dlci53YXJuKGBDaHJvbWVkcml2ZXIgZm9yIGNvbnRleHQgJHtjb250ZXh0fSBzdG9wcGVkIHVuZXhwZWN0ZWRseWApO1xuICBpZiAoY29udGV4dCA9PT0gdGhpcy5jdXJDb250ZXh0KSB7XG4gICAgLy8gd2UgZXhpdGVkIHVuZXhwZWN0ZWRseSB3aGlsZSBhdXRvbWF0aW5nIHRoZSBjdXJyZW50IGNvbnRleHQgYW5kIHNvIHdhbnRcbiAgICAvLyB0byBzaHV0IGRvd24gdGhlIHNlc3Npb24gYW5kIHJlc3BvbmQgd2l0aCBhbiBlcnJvclxuICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoXCJDaHJvbWVkcml2ZXIgcXVpdCB1bmV4cGVjdGVkbHkgZHVyaW5nIHNlc3Npb25cIik7XG4gICAgYXdhaXQgdGhpcy5zdGFydFVuZXhwZWN0ZWRTaHV0ZG93bihlcnIpO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGEgQ2hyb21lZHJpdmVyIGluIHRoZSBub24tYWN0aXZlIGNvbnRleHQgYmFyZnMsIHdlIGRvbid0IHJlYWxseVxuICAgIC8vIGNhcmUsIHdlJ2xsIGp1c3QgbWFrZSBhIG5ldyBvbmUgbmV4dCB0aW1lIHdlIG5lZWQgdGhlIGNvbnRleHQuXG4gICAgbG9nZ2VyLndhcm4oXCJDaHJvbWVkcml2ZXIgcXVpdCB1bmV4cGVjdGVkbHksIGJ1dCBpdCB3YXNuJ3QgdGhlIGFjdGl2ZSBcIiArXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0LCBpZ25vcmluZ1wiKTtcbiAgICBkZWxldGUgdGhpcy5zZXNzaW9uQ2hyb21lZHJpdmVyc1tjb250ZXh0XTtcbiAgfVxufTtcblxuLy8gSW50ZW50aW9uYWxseSBzdG9wIGFsbCB0aGUgY2hyb21lZHJpdmVycyBjdXJyZW50bHkgYWN0aXZlLCBhbmQgaWdub3JlXG4vLyB0aGVpciBleGl0IGV2ZW50c1xuaGVscGVycy5zdG9wQ2hyb21lZHJpdmVyUHJveGllcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdXNwZW5kQ2hyb21lZHJpdmVyUHJveHkoKTsgLy8gbWFrZSBzdXJlIHdlIHR1cm4gb2ZmIHRoZSBwcm94eSBmbGFnXG4gIGZvciAobGV0IGNvbnRleHQgb2YgXy5rZXlzKHRoaXMuc2Vzc2lvbkNocm9tZWRyaXZlcnMpKSB7XG4gICAgbGV0IGNkID0gdGhpcy5zZXNzaW9uQ2hyb21lZHJpdmVyc1tjb250ZXh0XTtcbiAgICBsb2dnZXIuZGVidWcoYFN0b3BwaW5nIGNocm9tZWRyaXZlciBmb3IgY29udGV4dCAke2NvbnRleHR9YCk7XG4gICAgLy8gc3RvcCBsaXN0ZW5pbmcgZm9yIHRoZSBzdG9wcGVkIHN0YXRlIGV2ZW50XG4gICAgY2QucmVtb3ZlQWxsTGlzdGVuZXJzKENocm9tZWRyaXZlci5FVkVOVF9DSEFOR0VEKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2Quc3RvcCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLndhcm4oYEVycm9yIHN0b3BwaW5nIENocm9tZWRyaXZlcjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuc2Vzc2lvbkNocm9tZWRyaXZlcnNbY29udGV4dF07XG4gIH1cbn07XG5cbmhlbHBlcnMuaXNDaHJvbWVkcml2ZXJDb250ZXh0ID0gZnVuY3Rpb24gKHZpZXdOYW1lKSB7XG4gIHJldHVybiB2aWV3TmFtZS5pbmRleE9mKFdFQlZJRVdfV0lOKSAhPT0gLTEgfHwgdmlld05hbWUgPT09IENIUk9NSVVNX1dJTjtcbn07XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEludGVybmFsIGxpYnJhcnkgZnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5hc3luYyBmdW5jdGlvbiBzZXR1cEV4aXN0aW5nQ2hyb21lZHJpdmVyIChjaHJvbWVkcml2ZXIpIHtcbiAgLy8gY2hlY2sgdGhlIHN0YXR1cyBieSBzZW5kaW5nIGEgc2ltcGxlIHdpbmRvdy1iYXNlZCBjb21tYW5kIHRvIENocm9tZURyaXZlclxuICAvLyBpZiB0aGVyZSBpcyBhbiBlcnJvciwgd2Ugd2FudCB0byByZWNyZWF0ZSB0aGUgQ2hyb21lRHJpdmVyIHNlc3Npb25cbiAgaWYgKCFhd2FpdCBjaHJvbWVkcml2ZXIuaGFzV29ya2luZ1dlYnZpZXcoKSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIkNocm9tZURyaXZlciBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIGEgd2luZG93LiBcIiArXG4gICAgICAgICAgICAgICAgIFwiUmUtaW5pdGlhbGl6aW5nIHRoZSBzZXNzaW9uLlwiKTtcbiAgICBhd2FpdCBjaHJvbWVkcml2ZXIucmVzdGFydCgpO1xuICB9XG4gIHJldHVybiBjaHJvbWVkcml2ZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwTmV3Q2hyb21lZHJpdmVyIChvcHRzLCBjdXJEZXZpY2VJZCwgYWRiUG9ydCkge1xuICBsZXQgY2hyb21lQXJncyA9IHtcbiAgICBwb3J0OiBvcHRzLmNocm9tZURyaXZlclBvcnQsXG4gICAgZXhlY3V0YWJsZTogb3B0cy5jaHJvbWVkcml2ZXJFeGVjdXRhYmxlLFxuICAgIGFkYlBvcnRcbiAgfTtcbiAgbGV0IGNocm9tZWRyaXZlciA9IG5ldyBDaHJvbWVkcml2ZXIoY2hyb21lQXJncyk7XG4gIGxldCBjYXBzID0ge1xuICAgIGNocm9tZU9wdGlvbnM6IHtcbiAgICAgIGFuZHJvaWRQYWNrYWdlOiBvcHRzLmFwcFBhY2thZ2VcbiAgICB9XG4gIH07XG4gIGlmIChvcHRzLmNocm9tZVVzZVJ1bm5pbmdBcHApIHtcbiAgICBjYXBzLmNocm9tZU9wdGlvbnMuYW5kcm9pZFVzZVJ1bm5pbmdBcHAgPSBvcHRzLmNocm9tZVVzZVJ1bm5pbmdBcHA7XG4gIH1cbiAgaWYgKG9wdHMuY2hyb21lQW5kcm9pZEFjdGl2aXR5KSB7XG4gICAgY2Fwcy5jaHJvbWVPcHRpb25zLmFuZHJvaWRBY3Rpdml0eSA9IG9wdHMuY2hyb21lQW5kcm9pZEFjdGl2aXR5O1xuICB9XG4gIGlmIChvcHRzLmVuYWJsZVBlcmZvcm1hbmNlTG9nZ2luZykge1xuICAgIGNhcHMubG9nZ2luZ1ByZWZzID0ge3BlcmZvcm1hbmNlOiAnQUxMJ307XG4gIH1cbiAgY2FwcyA9IHdlYnZpZXdIZWxwZXJzLmRlY29yYXRlQ2hyb21lT3B0aW9ucyhjYXBzLCBvcHRzLCBjdXJEZXZpY2VJZCk7XG4gIGF3YWl0IGNocm9tZWRyaXZlci5zdGFydChjYXBzKTtcbiAgcmV0dXJuIGNocm9tZWRyaXZlcjtcbn1cblxuT2JqZWN0LmFzc2lnbihleHRlbnNpb25zLCBjb21tYW5kcywgaGVscGVycyk7XG5leHBvcnQgeyBjb21tYW5kcywgaGVscGVycywgc2V0dXBOZXdDaHJvbWVkcml2ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=