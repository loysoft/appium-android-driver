'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _appiumBaseDriver = require('appium-base-driver');

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _appiumChromedriver = require('appium-chromedriver');

var _appiumChromedriver2 = _interopRequireDefault(_appiumChromedriver);

var _appiumAndroidBootstrap = require('appium-android-bootstrap');

var _appiumAndroidBootstrap2 = _interopRequireDefault(_appiumAndroidBootstrap);

var _desiredCaps = require('./desired-caps');

var _desiredCaps2 = _interopRequireDefault(_desiredCaps);

var _commandsIndex = require('./commands/index');

var _commandsIndex2 = _interopRequireDefault(_commandsIndex);

var _commandsContext = require('./commands/context');

var _androidHelpers = require('./android-helpers');

var _androidHelpers2 = _interopRequireDefault(_androidHelpers);

var _webviewHelpers = require('./webview-helpers');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumSupport = require('appium-support');

var APP_EXTENSION = '.apk';
var DEVICE_PORT = 4724;

// This is a set of methods and paths that we never want to proxy to
// Chromedriver
var NO_PROXY = [['POST', new RegExp('^/session/[^/]+/context')], ['GET', new RegExp('^/session/[^/]+/context')], ['POST', new RegExp('^/session/[^/]+/appium')], ['GET', new RegExp('^/session/[^/]+/appium')], ['POST', new RegExp('^/session/[^/]+/touch/perform')], ['POST', new RegExp('^/session/[^/]+/touch/multi/perform')], ['POST', new RegExp('^/session/[^/]+/orientation')], ['GET', new RegExp('^/session/[^/]+/orientation')]];

var AndroidDriver = (function (_BaseDriver) {
  _inherits(AndroidDriver, _BaseDriver);

  function AndroidDriver() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var shouldValidateCaps = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    _classCallCheck(this, AndroidDriver);

    _get(Object.getPrototypeOf(AndroidDriver.prototype), 'constructor', this).call(this, opts, shouldValidateCaps);
    this.locatorStrategies = ['xpath', 'id', 'class name', 'tag name', 'accessibility id', '-android uiautomator'];
    this.desiredCapConstraints = _desiredCaps2['default'];
    this.curContext = this.defaultContextName();
    this.sessionChromedrivers = {};
    this.jwpProxyActive = false;
    this.jwpProxyAvoid = NO_PROXY;
    this.settings = new _appiumBaseDriver.DeviceSettings({ ignoreUnimportantViews: false }, this.onSettingsUpdate.bind(this));
    this.chromedriver = null;
    this.apkStrings = {};
    this.ignoreUnexpectedShutdown = false;
    this.acceptSslCerts = !!opts.acceptSslCerts;
  }

  _createClass(AndroidDriver, [{
    key: 'createSession',
    value: function createSession(caps) {
      var sessionId, _ref, _ref2, defaultOpts, _helpers$getChromePkg, pkg, activity;

      return _regeneratorRuntime.async(function createSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;
            sessionId = undefined;
            context$2$0.next = 4;
            return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(AndroidDriver.prototype), 'createSession', this).call(this, caps));

          case 4:
            _ref = context$2$0.sent;
            _ref2 = _slicedToArray(_ref, 1);
            sessionId = _ref2[0];
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(_appiumSupport.tempDir.staticDir());

          case 9:
            context$2$0.t0 = context$2$0.sent;
            defaultOpts = {
              action: "android.intent.action.MAIN",
              category: "android.intent.category.LAUNCHER",
              flags: "0x10200000",
              disableAndroidWatchers: false,
              tmpDir: context$2$0.t0,
              fullReset: false,
              autoLaunch: true
            };

            _lodash2['default'].defaults(this.opts, defaultOpts);

            if (this.opts.javaVersion) {
              context$2$0.next = 16;
              break;
            }

            context$2$0.next = 15;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].getJavaVersion());

          case 15:
            this.opts.javaVersion = context$2$0.sent;

          case 16:

            if (this.isChromeSession) {
              _logger2['default'].info("We're going to run a Chrome-based session");
              _helpers$getChromePkg = _androidHelpers2['default'].getChromePkg(this.opts.browserName);
              pkg = _helpers$getChromePkg.pkg;
              activity = _helpers$getChromePkg.activity;

              this.opts.appPackage = pkg;
              this.opts.appActivity = activity;
              _logger2['default'].info('Chrome-type package and activity are ' + pkg + ' and ' + activity);
            }

            // set up an instance of ADB
            context$2$0.next = 19;
            return _regeneratorRuntime.awrap(_appiumAdb2['default'].createADB());

          case 19:
            this.adb = context$2$0.sent;

            if (!this.opts.app) {
              context$2$0.next = 28;
              break;
            }

            context$2$0.next = 23;
            return _regeneratorRuntime.awrap(this.helpers.configureApp(this.opts.app, APP_EXTENSION));

          case 23:
            this.opts.app = context$2$0.sent;
            context$2$0.next = 26;
            return _regeneratorRuntime.awrap(this.checkAppPresent());

          case 26:
            context$2$0.next = 32;
            break;

          case 28:
            if (!this.appOnDevice) {
              context$2$0.next = 32;
              break;
            }

            // the app isn't an actual app file but rather something we want to
            // assume is on the device and just launch via the appPackage
            _logger2['default'].info('App file was not listed, instead we\'re going to run ' + (this.opts.appPackage + ' directly on the device'));
            context$2$0.next = 32;
            return _regeneratorRuntime.awrap(this.checkPackagePresent());

          case 32:
            context$2$0.next = 34;
            return _regeneratorRuntime.awrap(this.startAndroidSession(this.opts));

          case 34:
            return context$2$0.abrupt('return', [sessionId, caps]);

          case 37:
            context$2$0.prev = 37;
            context$2$0.t1 = context$2$0['catch'](0);
            context$2$0.next = 41;
            return _regeneratorRuntime.awrap(this.deleteSession());

          case 41:
            throw context$2$0.t1;

          case 42:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 37]]);
    }
  }, {
    key: 'onSettingsUpdate',
    value: function onSettingsUpdate(key, value) {
      return _regeneratorRuntime.async(function onSettingsUpdate$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!(key === "ignoreUnimportantViews")) {
              context$2$0.next = 3;
              break;
            }

            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.setCompressedLayoutHierarchy(value));

          case 3:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'startAndroidSession',
    value: function startAndroidSession() {
      return _regeneratorRuntime.async(function startAndroidSession$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].info('Starting Android session');
            // set up the device to run on (real or emulator, etc)
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].initDevice(this.adb, this.opts));

          case 3:
            this.defaultIME = context$2$0.sent;

            if (!this.opts.ignoreUnimportantViews) {
              context$2$0.next = 7;
              break;
            }

            context$2$0.next = 7;
            return _regeneratorRuntime.awrap(this.settings.update({ ignoreUnimportantViews: this.opts.ignoreUnimportantViews }));

          case 7:
            if (!(!this.appOnDevice && this.opts.autoLaunch)) {
              context$2$0.next = 10;
              break;
            }

            context$2$0.next = 10;
            return _regeneratorRuntime.awrap(this.initAUT());

          case 10:
            // start UiAutomator
            this.bootstrap = new _appiumAndroidBootstrap2['default'](DEVICE_PORT, this.opts.websocket, this.opts.cmdTimeout);
            context$2$0.next = 13;
            return _regeneratorRuntime.awrap(this.bootstrap.start(this.opts.appPackage, this.opts.disableAndroidWatchers));

          case 13:
            // handling unexpected shutdown
            this.bootstrap.onUnexpectedShutdown['catch'](function callee$2$0(err) {
              return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    if (this.ignoreUnexpectedShutdown) {
                      context$3$0.next = 3;
                      break;
                    }

                    context$3$0.next = 3;
                    return _regeneratorRuntime.awrap(this.startUnexpectedShutdown(err));

                  case 3:
                  case 'end':
                    return context$3$0.stop();
                }
              }, null, _this);
            });

            if (!this.isChromeSession) {
              context$2$0.next = 19;
              break;
            }

            context$2$0.next = 17;
            return _regeneratorRuntime.awrap(this.startChromeSession());

          case 17:
            context$2$0.next = 24;
            break;

          case 19:
            context$2$0.next = 21;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].unlock(this.adb));

          case 21:
            if (!this.opts.autoLaunch) {
              context$2$0.next = 24;
              break;
            }

            context$2$0.next = 24;
            return _regeneratorRuntime.awrap(this.startAUT());

          case 24:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'initAUT',
    value: function initAUT() {
      var launchInfo;
      return _regeneratorRuntime.async(function initAUT$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].getLaunchInfo(this.adb, this.opts));

          case 2:
            launchInfo = context$2$0.sent;

            _Object$assign(this.opts, launchInfo);

            if (this.opts.skipUninstall) {
              context$2$0.next = 7;
              break;
            }

            context$2$0.next = 7;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(this.opts.appPackage));

          case 7:
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].installApkRemotely(this.adb, this.opts.app, this.opts.appPackage, this.opts.fastReset));

          case 9:
            context$2$0.next = 11;
            return _regeneratorRuntime.awrap(_androidHelpers2['default'].pushStrings(this.opts.language, this.adb, this.opts));

          case 11:
            this.apkStrings[this.opts.language] = context$2$0.sent;

          case 12:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'startAUT',
    value: function startAUT() {
      return _regeneratorRuntime.async(function startAUT$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.adb.startApp({
              pkg: this.opts.appPackage,
              activity: this.opts.appActivity,
              action: this.opts.intentAction,
              category: this.opts.intentCategory,
              flags: this.opts.intentFlags,
              waitPkg: this.opts.appWaitPackage,
              waitActivity: this.opts.appWaitActivity,
              optionalIntentArguments: this.opts.optionalIntentArguments,
              stopApp: this.opts.stopAppOnReset || !this.opts.dontStopAppOnReset
            }));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'startChromeSession',
    value: function startChromeSession() {
      var opts, knownPackages;
      return _regeneratorRuntime.async(function startChromeSession$(context$2$0) {
        var _this2 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].info("Starting a chrome-based browser session");
            opts = _lodash2['default'].cloneDeep(this.opts);

            opts.chromeUseRunningApp = false;

            knownPackages = ["org.chromium.chrome.shell", "com.android.chrome", "com.chrome.beta"];

            if (!_lodash2['default'].contains(knownPackages, this.opts.appPackage)) {
              opts.chromeAndroidActivity = this.opts.appActivity;
            }
            context$2$0.next = 7;
            return _regeneratorRuntime.awrap((0, _commandsContext.setupNewChromedriver)(opts, this.adb.curDeviceId, this.adb.getAdbServerPort()));

          case 7:
            this.chromedriver = context$2$0.sent;

            this.chromedriver.on(_appiumChromedriver2['default'].EVENT_CHANGED, function (msg) {
              if (msg.state === _appiumChromedriver2['default'].STATE_STOPPED) {
                _this2.onChromedriverStop(_webviewHelpers.CHROMIUM_WIN);
              }
            });

            // Now that we have a Chrome session, we ensure that the context is
            // appropriately set and that this chromedriver is added to the list
            // of session chromedrivers so we can switch back and forth
            this.curContext = _webviewHelpers.CHROMIUM_WIN;
            this.sessionChromedrivers[_webviewHelpers.CHROMIUM_WIN] = this.chromedriver;
            this.proxyReqRes = this.chromedriver.proxyReq.bind(this.chromedriver);
            this.jwpProxyActive = true;

          case 13:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'checkAppPresent',
    value: function checkAppPresent() {
      return _regeneratorRuntime.async(function checkAppPresent$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug("Checking whether app is actually present");
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(this.opts.app));

          case 3:
            if (context$2$0.sent) {
              context$2$0.next = 5;
              break;
            }

            _logger2['default'].errorAndThrow('Could not find app apk at ' + this.opts.app);

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'checkPackagePresent',
    value: function checkPackagePresent() {
      return _regeneratorRuntime.async(function checkPackagePresent$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug("Checking whether package is present on the device");
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.adb.shell(['pm', 'list', 'packages', this.opts.appPackage]));

          case 3:
            if (context$2$0.sent) {
              context$2$0.next = 5;
              break;
            }

            _logger2['default'].errorAndThrow('Could not find package ' + this.opts.appPackage + ' on the device');

          case 5:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }

    // Set CompressedLayoutHierarchy on the device
  }, {
    key: 'setCompressedLayoutHierarchy',
    value: function setCompressedLayoutHierarchy(compress) {
      return _regeneratorRuntime.async(function setCompressedLayoutHierarchy$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(this.bootstrap.sendAction("compressedLayoutHierarchy", { compressLayout: compress }));

          case 2:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'deleteSession',
    value: function deleteSession() {
      return _regeneratorRuntime.async(function deleteSession$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            _logger2['default'].debug("Shutting down Android driver");
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(_get(Object.getPrototypeOf(AndroidDriver.prototype), 'deleteSession', this).call(this));

          case 3:
            if (!this.bootstrap) {
              context$2$0.next = 25;
              break;
            }

            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(this.stopChromedriverProxies());

          case 6:
            if (!(this.opts.unicodeKeyboard && this.opts.resetKeyboard && this.defaultIME)) {
              context$2$0.next = 10;
              break;
            }

            _logger2['default'].debug('Resetting IME to ' + this.defaultIME);
            context$2$0.next = 10;
            return _regeneratorRuntime.awrap(this.adb.setIME(this.defaultIME));

          case 10:
            if (this.isChromeSession) {
              context$2$0.next = 13;
              break;
            }

            context$2$0.next = 13;
            return _regeneratorRuntime.awrap(this.adb.forceStop(this.opts.appPackage));

          case 13:
            context$2$0.next = 15;
            return _regeneratorRuntime.awrap(this.adb.goToHome());

          case 15:
            if (!(this.opts.fullReset && !this.opts.skipUninstall && !this.appOnDevice)) {
              context$2$0.next = 18;
              break;
            }

            context$2$0.next = 18;
            return _regeneratorRuntime.awrap(this.adb.uninstallApk(this.opts.appPackage));

          case 18:
            context$2$0.next = 20;
            return _regeneratorRuntime.awrap(this.adb.stopLogcat());

          case 20:
            context$2$0.next = 22;
            return _regeneratorRuntime.awrap(this.bootstrap.shutdown());

          case 22:
            this.bootstrap = null;
            context$2$0.next = 26;
            break;

          case 25:
            _logger2['default'].warn("Cannot shut down Android driver; it has already shut down");

          case 26:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'validateDesiredCaps',
    value: function validateDesiredCaps(caps) {
      // check with the base class, and return if it fails
      var res = _get(Object.getPrototypeOf(AndroidDriver.prototype), 'validateDesiredCaps', this).call(this, caps);
      if (!res) return res;

      // make sure that the capabilities have one of `app`, `appPackage` or `browser`
      if ((!caps.browserName || !_androidHelpers2['default'].isChromeBrowser(caps.browserName)) && !caps.app && !caps.appPackage) {
        var msg = 'The desired capabilities must include either an app, package or browser';
        _logger2['default'].errorAndThrow(msg);
      }
      // make sure that the capabilities don't have both `app` and `browser`
      if (caps.browserName && caps.app) {
        var msg = 'The desired capabilities should not include both an app and a browser';
        _logger2['default'].errorAndThrow(msg);
      }
    }
  }, {
    key: 'proxyActive',
    value: function proxyActive(sessionId) {
      _get(Object.getPrototypeOf(AndroidDriver.prototype), 'proxyActive', this).call(this, sessionId);

      return this.jwpProxyActive;
    }
  }, {
    key: 'getProxyAvoidList',
    value: function getProxyAvoidList(sessionId) {
      _get(Object.getPrototypeOf(AndroidDriver.prototype), 'getProxyAvoidList', this).call(this, sessionId);

      return this.jwpProxyAvoid;
    }
  }, {
    key: 'canProxy',
    value: function canProxy(sessionId) {
      _get(Object.getPrototypeOf(AndroidDriver.prototype), 'canProxy', this).call(this, sessionId);

      // this will change depending on ChromeDriver status
      return _lodash2['default'].isFunction(this.proxyReqRes);
    }
  }, {
    key: 'appOnDevice',
    get: function get() {
      return !this.opts.app && this.helpers.isPackageOrBundle(this.opts.appPackage);
    }
  }, {
    key: 'isChromeSession',
    get: function get() {
      return _androidHelpers2['default'].isChromeBrowser(this.opts.browserName);
    }
  }]);

  return AndroidDriver;
})(_appiumBaseDriver.BaseDriver);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

  for (var _iterator = _getIterator(_lodash2['default'].pairs(_commandsIndex2['default'])), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var cmd = _step$value[0];
    var fn = _step$value[1];

    AndroidDriver.prototype[cmd] = fn;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator['return']) {
      _iterator['return']();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

exports['default'] = AndroidDriver;
module.exports = exports['default'];

// the whole createSession flow is surrounded in a try-catch statement
// if creating a session fails at any point, we teardown everything we
// set up before throwing the error.

// assigning defaults

// find and copy, or download and unzip an app url or path

// Set CompressedLayoutHierarchy on the device based on current settings object

// If the user sets autoLaunch to false, they are responsible for initAUT() and startAUT()

// set up app under test

// start a chromedriver session and proxy to it

// unlock---don't need to do this for chrome

// start app

// populate appPackage, appActivity, appWaitPackage, appWaitActivity

// install app
//# sourceMappingURL=data:application/json;base64,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ckZHLGFBQWE7Ozs7Ozs7OztBQXlRbkIsb0NBQXNCLG9CQUFFLEtBQUssNEJBQVUsNEdBQUU7OztRQUEvQixHQUFHO1FBQUUsRUFBRTs7QUFDZixpQkFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7R0FDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBRWMsYUFBYSIsImZpbGUiOiJsaWIvZHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZURyaXZlciwgRGV2aWNlU2V0dGluZ3MgfSBmcm9tICdhcHBpdW0tYmFzZS1kcml2ZXInO1xuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcbmltcG9ydCBDaHJvbWVkcml2ZXIgZnJvbSAnYXBwaXVtLWNocm9tZWRyaXZlcic7XG5pbXBvcnQgQm9vdHN0cmFwIGZyb20gJ2FwcGl1bS1hbmRyb2lkLWJvb3RzdHJhcCc7XG5pbXBvcnQgZGVzaXJlZENvbnN0cmFpbnRzIGZyb20gJy4vZGVzaXJlZC1jYXBzJztcbmltcG9ydCBjb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzL2luZGV4JztcbmltcG9ydCB7IHNldHVwTmV3Q2hyb21lZHJpdmVyIH0gZnJvbSAnLi9jb21tYW5kcy9jb250ZXh0JztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4vYW5kcm9pZC1oZWxwZXJzJztcbmltcG9ydCB7IENIUk9NSVVNX1dJTiB9IGZyb20gJy4vd2Vidmlldy1oZWxwZXJzJztcbmltcG9ydCBsb2cgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGZzLCB0ZW1wRGlyIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xuXG5jb25zdCBBUFBfRVhURU5TSU9OID0gJy5hcGsnO1xuY29uc3QgREVWSUNFX1BPUlQgPSA0NzI0O1xuXG4vLyBUaGlzIGlzIGEgc2V0IG9mIG1ldGhvZHMgYW5kIHBhdGhzIHRoYXQgd2UgbmV2ZXIgd2FudCB0byBwcm94eSB0b1xuLy8gQ2hyb21lZHJpdmVyXG5jb25zdCBOT19QUk9YWSA9IFtcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2NvbnRleHQnKV0sXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2NvbnRleHQnKV0sXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy9hcHBpdW0nKV0sXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL2FwcGl1bScpXSxcbiAgWydQT1NUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL3RvdWNoL3BlcmZvcm0nKV0sXG4gIFsnUE9TVCcsIG5ldyBSZWdFeHAoJ14vc2Vzc2lvbi9bXi9dKy90b3VjaC9tdWx0aS9wZXJmb3JtJyldLFxuICBbJ1BPU1QnLCBuZXcgUmVnRXhwKCdeL3Nlc3Npb24vW14vXSsvb3JpZW50YXRpb24nKV0sXG4gIFsnR0VUJywgbmV3IFJlZ0V4cCgnXi9zZXNzaW9uL1teL10rL29yaWVudGF0aW9uJyldLFxuXTtcblxuY2xhc3MgQW5kcm9pZERyaXZlciBleHRlbmRzIEJhc2VEcml2ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzaG91bGRWYWxpZGF0ZUNhcHMgPSB0cnVlKSB7XG4gICAgc3VwZXIob3B0cywgc2hvdWxkVmFsaWRhdGVDYXBzKTtcbiAgICB0aGlzLmxvY2F0b3JTdHJhdGVnaWVzID0gW1xuICAgICAgJ3hwYXRoJyxcbiAgICAgICdpZCcsXG4gICAgICAnY2xhc3MgbmFtZScsXG4gICAgICAndGFnIG5hbWUnLFxuICAgICAgJ2FjY2Vzc2liaWxpdHkgaWQnLFxuICAgICAgJy1hbmRyb2lkIHVpYXV0b21hdG9yJ1xuICAgIF07XG4gICAgdGhpcy5kZXNpcmVkQ2FwQ29uc3RyYWludHMgPSBkZXNpcmVkQ29uc3RyYWludHM7XG4gICAgdGhpcy5jdXJDb250ZXh0ID0gdGhpcy5kZWZhdWx0Q29udGV4dE5hbWUoKTtcbiAgICB0aGlzLnNlc3Npb25DaHJvbWVkcml2ZXJzID0ge307XG4gICAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuandwUHJveHlBdm9pZCA9IE5PX1BST1hZO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgRGV2aWNlU2V0dGluZ3Moe2lnbm9yZVVuaW1wb3J0YW50Vmlld3M6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TZXR0aW5nc1VwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNocm9tZWRyaXZlciA9IG51bGw7XG4gICAgdGhpcy5hcGtTdHJpbmdzID0ge307XG4gICAgdGhpcy5pZ25vcmVVbmV4cGVjdGVkU2h1dGRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmFjY2VwdFNzbENlcnRzID0gISFvcHRzLmFjY2VwdFNzbENlcnRzO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlU2Vzc2lvbiAoY2Fwcykge1xuICAgIC8vIHRoZSB3aG9sZSBjcmVhdGVTZXNzaW9uIGZsb3cgaXMgc3Vycm91bmRlZCBpbiBhIHRyeS1jYXRjaCBzdGF0ZW1lbnRcbiAgICAvLyBpZiBjcmVhdGluZyBhIHNlc3Npb24gZmFpbHMgYXQgYW55IHBvaW50LCB3ZSB0ZWFyZG93biBldmVyeXRoaW5nIHdlXG4gICAgLy8gc2V0IHVwIGJlZm9yZSB0aHJvd2luZyB0aGUgZXJyb3IuXG4gICAgdHJ5IHtcblxuICAgICAgbGV0IHNlc3Npb25JZDtcbiAgICAgIFtzZXNzaW9uSWRdID0gYXdhaXQgc3VwZXIuY3JlYXRlU2Vzc2lvbihjYXBzKTtcblxuICAgICAgLy8gYXNzaWduaW5nIGRlZmF1bHRzXG4gICAgICBsZXQgZGVmYXVsdE9wdHMgPSB7YWN0aW9uOiBcImFuZHJvaWQuaW50ZW50LmFjdGlvbi5NQUlOXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiYW5kcm9pZC5pbnRlbnQuY2F0ZWdvcnkuTEFVTkNIRVJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnczogXCIweDEwMjAwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFuZHJvaWRXYXRjaGVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdG1wRGlyOiBhd2FpdCB0ZW1wRGlyLnN0YXRpY0RpcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxSZXNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0xhdW5jaDogdHJ1ZX07XG4gICAgICBfLmRlZmF1bHRzKHRoaXMub3B0cywgZGVmYXVsdE9wdHMpO1xuICAgICAgaWYgKCF0aGlzLm9wdHMuamF2YVZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5vcHRzLmphdmFWZXJzaW9uID0gYXdhaXQgaGVscGVycy5nZXRKYXZhVmVyc2lvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc0Nocm9tZVNlc3Npb24pIHtcbiAgICAgICAgbG9nLmluZm8oXCJXZSdyZSBnb2luZyB0byBydW4gYSBDaHJvbWUtYmFzZWQgc2Vzc2lvblwiKTtcbiAgICAgICAgbGV0IHtwa2csIGFjdGl2aXR5fSA9IGhlbHBlcnMuZ2V0Q2hyb21lUGtnKHRoaXMub3B0cy5icm93c2VyTmFtZSk7XG4gICAgICAgIHRoaXMub3B0cy5hcHBQYWNrYWdlID0gcGtnO1xuICAgICAgICB0aGlzLm9wdHMuYXBwQWN0aXZpdHkgPSBhY3Rpdml0eTtcbiAgICAgICAgbG9nLmluZm8oYENocm9tZS10eXBlIHBhY2thZ2UgYW5kIGFjdGl2aXR5IGFyZSAke3BrZ30gYW5kICR7YWN0aXZpdHl9YCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhbiBpbnN0YW5jZSBvZiBBREJcbiAgICAgIHRoaXMuYWRiID0gYXdhaXQgQURCLmNyZWF0ZUFEQigpO1xuXG4gICAgICBpZiAodGhpcy5vcHRzLmFwcCkge1xuICAgICAgICAvLyBmaW5kIGFuZCBjb3B5LCBvciBkb3dubG9hZCBhbmQgdW56aXAgYW4gYXBwIHVybCBvciBwYXRoXG4gICAgICAgIHRoaXMub3B0cy5hcHAgPSBhd2FpdCB0aGlzLmhlbHBlcnMuY29uZmlndXJlQXBwKHRoaXMub3B0cy5hcHAsIEFQUF9FWFRFTlNJT04pO1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrQXBwUHJlc2VudCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcE9uRGV2aWNlKSB7XG4gICAgICAgIC8vIHRoZSBhcHAgaXNuJ3QgYW4gYWN0dWFsIGFwcCBmaWxlIGJ1dCByYXRoZXIgc29tZXRoaW5nIHdlIHdhbnQgdG9cbiAgICAgICAgLy8gYXNzdW1lIGlzIG9uIHRoZSBkZXZpY2UgYW5kIGp1c3QgbGF1bmNoIHZpYSB0aGUgYXBwUGFja2FnZVxuICAgICAgICBsb2cuaW5mbyhgQXBwIGZpbGUgd2FzIG5vdCBsaXN0ZWQsIGluc3RlYWQgd2UncmUgZ29pbmcgdG8gcnVuIGAgK1xuICAgICAgICAgICAgICAgICBgJHt0aGlzLm9wdHMuYXBwUGFja2FnZX0gZGlyZWN0bHkgb24gdGhlIGRldmljZWApO1xuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrUGFja2FnZVByZXNlbnQoKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zdGFydEFuZHJvaWRTZXNzaW9uKHRoaXMub3B0cyk7XG4gICAgICByZXR1cm4gW3Nlc3Npb25JZCwgY2Fwc107XG5cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuZGVsZXRlU2Vzc2lvbigpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXBwT25EZXZpY2UgKCkge1xuICAgIHJldHVybiAhdGhpcy5vcHRzLmFwcCAmJlxuICAgICAgICAgICB0aGlzLmhlbHBlcnMuaXNQYWNrYWdlT3JCdW5kbGUodGhpcy5vcHRzLmFwcFBhY2thZ2UpO1xuICB9XG5cbiAgZ2V0IGlzQ2hyb21lU2Vzc2lvbiAoKSB7XG4gICAgcmV0dXJuIGhlbHBlcnMuaXNDaHJvbWVCcm93c2VyKHRoaXMub3B0cy5icm93c2VyTmFtZSk7XG4gIH1cblxuICBhc3luYyBvblNldHRpbmdzVXBkYXRlIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gXCJpZ25vcmVVbmltcG9ydGFudFZpZXdzXCIpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0Q29tcHJlc3NlZExheW91dEhpZXJhcmNoeSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3RhcnRBbmRyb2lkU2Vzc2lvbiAoKSB7XG4gICAgbG9nLmluZm8oYFN0YXJ0aW5nIEFuZHJvaWQgc2Vzc2lvbmApO1xuICAgIC8vIHNldCB1cCB0aGUgZGV2aWNlIHRvIHJ1biBvbiAocmVhbCBvciBlbXVsYXRvciwgZXRjKVxuICAgIHRoaXMuZGVmYXVsdElNRSA9IGF3YWl0IGhlbHBlcnMuaW5pdERldmljZSh0aGlzLmFkYiwgdGhpcy5vcHRzKTtcbiAgICAvLyBTZXQgQ29tcHJlc3NlZExheW91dEhpZXJhcmNoeSBvbiB0aGUgZGV2aWNlIGJhc2VkIG9uIGN1cnJlbnQgc2V0dGluZ3Mgb2JqZWN0XG4gICAgaWYgKHRoaXMub3B0cy5pZ25vcmVVbmltcG9ydGFudFZpZXdzKSB7XG4gICAgICBhd2FpdCB0aGlzLnNldHRpbmdzLnVwZGF0ZSh7aWdub3JlVW5pbXBvcnRhbnRWaWV3czogdGhpcy5vcHRzLmlnbm9yZVVuaW1wb3J0YW50Vmlld3N9KTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHVzZXIgc2V0cyBhdXRvTGF1bmNoIHRvIGZhbHNlLCB0aGV5IGFyZSByZXNwb25zaWJsZSBmb3IgaW5pdEFVVCgpIGFuZCBzdGFydEFVVCgpXG4gICAgaWYgKCF0aGlzLmFwcE9uRGV2aWNlICYmIHRoaXMub3B0cy5hdXRvTGF1bmNoKSB7XG4gICAgICAvLyBzZXQgdXAgYXBwIHVuZGVyIHRlc3RcbiAgICAgIGF3YWl0IHRoaXMuaW5pdEFVVCgpO1xuICAgIH1cbiAgICAvLyBzdGFydCBVaUF1dG9tYXRvclxuICAgIHRoaXMuYm9vdHN0cmFwID0gbmV3IEJvb3RzdHJhcChERVZJQ0VfUE9SVCwgdGhpcy5vcHRzLndlYnNvY2tldCwgdGhpcy5vcHRzLmNtZFRpbWVvdXQpO1xuICAgIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnN0YXJ0KHRoaXMub3B0cy5hcHBQYWNrYWdlLCB0aGlzLm9wdHMuZGlzYWJsZUFuZHJvaWRXYXRjaGVycyk7XG4gICAgLy8gaGFuZGxpbmcgdW5leHBlY3RlZCBzaHV0ZG93blxuICAgIHRoaXMuYm9vdHN0cmFwLm9uVW5leHBlY3RlZFNodXRkb3duLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgIGlmICghdGhpcy5pZ25vcmVVbmV4cGVjdGVkU2h1dGRvd24pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydFVuZXhwZWN0ZWRTaHV0ZG93bihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmlzQ2hyb21lU2Vzc2lvbikge1xuICAgICAgLy8gc3RhcnQgYSBjaHJvbWVkcml2ZXIgc2Vzc2lvbiBhbmQgcHJveHkgdG8gaXRcbiAgICAgIGF3YWl0IHRoaXMuc3RhcnRDaHJvbWVTZXNzaW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVubG9jay0tLWRvbid0IG5lZWQgdG8gZG8gdGhpcyBmb3IgY2hyb21lXG4gICAgICBhd2FpdCBoZWxwZXJzLnVubG9jayh0aGlzLmFkYik7XG4gICAgICBpZiAodGhpcy5vcHRzLmF1dG9MYXVuY2gpIHtcbiAgICAgICAgLy8gc3RhcnQgYXBwXG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnRBVVQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0QVVUICgpIHtcbiAgICAvLyBwb3B1bGF0ZSBhcHBQYWNrYWdlLCBhcHBBY3Rpdml0eSwgYXBwV2FpdFBhY2thZ2UsIGFwcFdhaXRBY3Rpdml0eVxuICAgIGxldCBsYXVuY2hJbmZvID0gYXdhaXQgaGVscGVycy5nZXRMYXVuY2hJbmZvKHRoaXMuYWRiLCB0aGlzLm9wdHMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRzLCBsYXVuY2hJbmZvKTtcbiAgICBpZiAoIXRoaXMub3B0cy5za2lwVW5pbnN0YWxsKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYWRiLnVuaW5zdGFsbEFwayh0aGlzLm9wdHMuYXBwUGFja2FnZSk7XG4gICAgfVxuICAgIC8vIGluc3RhbGwgYXBwXG4gICAgYXdhaXQgaGVscGVycy5pbnN0YWxsQXBrUmVtb3RlbHkodGhpcy5hZGIsIHRoaXMub3B0cy5hcHAsIHRoaXMub3B0cy5hcHBQYWNrYWdlLCB0aGlzLm9wdHMuZmFzdFJlc2V0KTtcbiAgICB0aGlzLmFwa1N0cmluZ3NbdGhpcy5vcHRzLmxhbmd1YWdlXSA9IGF3YWl0IGhlbHBlcnMucHVzaFN0cmluZ3MoXG4gICAgICAgIHRoaXMub3B0cy5sYW5ndWFnZSwgdGhpcy5hZGIsIHRoaXMub3B0cyk7XG4gIH1cblxuICBhc3luYyBzdGFydEFVVCAoKSB7XG4gICAgYXdhaXQgdGhpcy5hZGIuc3RhcnRBcHAoe1xuICAgICAgcGtnOiB0aGlzLm9wdHMuYXBwUGFja2FnZSxcbiAgICAgIGFjdGl2aXR5OiB0aGlzLm9wdHMuYXBwQWN0aXZpdHksXG4gICAgICBhY3Rpb246IHRoaXMub3B0cy5pbnRlbnRBY3Rpb24sXG4gICAgICBjYXRlZ29yeTogdGhpcy5vcHRzLmludGVudENhdGVnb3J5LFxuICAgICAgZmxhZ3M6IHRoaXMub3B0cy5pbnRlbnRGbGFncyxcbiAgICAgIHdhaXRQa2c6IHRoaXMub3B0cy5hcHBXYWl0UGFja2FnZSxcbiAgICAgIHdhaXRBY3Rpdml0eTogdGhpcy5vcHRzLmFwcFdhaXRBY3Rpdml0eSxcbiAgICAgIG9wdGlvbmFsSW50ZW50QXJndW1lbnRzOiB0aGlzLm9wdHMub3B0aW9uYWxJbnRlbnRBcmd1bWVudHMsXG4gICAgICBzdG9wQXBwOiB0aGlzLm9wdHMuc3RvcEFwcE9uUmVzZXQgfHwgIXRoaXMub3B0cy5kb250U3RvcEFwcE9uUmVzZXQsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzdGFydENocm9tZVNlc3Npb24gKCkge1xuICAgIGxvZy5pbmZvKFwiU3RhcnRpbmcgYSBjaHJvbWUtYmFzZWQgYnJvd3NlciBzZXNzaW9uXCIpO1xuICAgIGxldCBvcHRzID0gXy5jbG9uZURlZXAodGhpcy5vcHRzKTtcbiAgICBvcHRzLmNocm9tZVVzZVJ1bm5pbmdBcHAgPSBmYWxzZTtcblxuICAgIGNvbnN0IGtub3duUGFja2FnZXMgPSBbXCJvcmcuY2hyb21pdW0uY2hyb21lLnNoZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbS5hbmRyb2lkLmNocm9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb20uY2hyb21lLmJldGFcIl07XG5cbiAgICBpZiAoIV8uY29udGFpbnMoa25vd25QYWNrYWdlcywgdGhpcy5vcHRzLmFwcFBhY2thZ2UpKSB7XG4gICAgICBvcHRzLmNocm9tZUFuZHJvaWRBY3Rpdml0eSA9IHRoaXMub3B0cy5hcHBBY3Rpdml0eTtcbiAgICB9XG4gICAgdGhpcy5jaHJvbWVkcml2ZXIgPSBhd2FpdCBzZXR1cE5ld0Nocm9tZWRyaXZlcihvcHRzLCB0aGlzLmFkYi5jdXJEZXZpY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRiLmdldEFkYlNlcnZlclBvcnQoKSk7XG4gICAgdGhpcy5jaHJvbWVkcml2ZXIub24oQ2hyb21lZHJpdmVyLkVWRU5UX0NIQU5HRUQsIChtc2cpID0+IHtcbiAgICAgIGlmIChtc2cuc3RhdGUgPT09IENocm9tZWRyaXZlci5TVEFURV9TVE9QUEVEKSB7XG4gICAgICAgIHRoaXMub25DaHJvbWVkcml2ZXJTdG9wKENIUk9NSVVNX1dJTik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgdGhhdCB3ZSBoYXZlIGEgQ2hyb21lIHNlc3Npb24sIHdlIGVuc3VyZSB0aGF0IHRoZSBjb250ZXh0IGlzXG4gICAgLy8gYXBwcm9wcmlhdGVseSBzZXQgYW5kIHRoYXQgdGhpcyBjaHJvbWVkcml2ZXIgaXMgYWRkZWQgdG8gdGhlIGxpc3RcbiAgICAvLyBvZiBzZXNzaW9uIGNocm9tZWRyaXZlcnMgc28gd2UgY2FuIHN3aXRjaCBiYWNrIGFuZCBmb3J0aFxuICAgIHRoaXMuY3VyQ29udGV4dCA9IENIUk9NSVVNX1dJTjtcbiAgICB0aGlzLnNlc3Npb25DaHJvbWVkcml2ZXJzW0NIUk9NSVVNX1dJTl0gPSB0aGlzLmNocm9tZWRyaXZlcjtcbiAgICB0aGlzLnByb3h5UmVxUmVzID0gdGhpcy5jaHJvbWVkcml2ZXIucHJveHlSZXEuYmluZCh0aGlzLmNocm9tZWRyaXZlcik7XG4gICAgdGhpcy5qd3BQcm94eUFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBhc3luYyBjaGVja0FwcFByZXNlbnQgKCkge1xuICAgIGxvZy5kZWJ1ZyhcIkNoZWNraW5nIHdoZXRoZXIgYXBwIGlzIGFjdHVhbGx5IHByZXNlbnRcIik7XG4gICAgaWYgKCEoYXdhaXQgZnMuZXhpc3RzKHRoaXMub3B0cy5hcHApKSkge1xuICAgICAgbG9nLmVycm9yQW5kVGhyb3coYENvdWxkIG5vdCBmaW5kIGFwcCBhcGsgYXQgJHt0aGlzLm9wdHMuYXBwfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNoZWNrUGFja2FnZVByZXNlbnQgKCkge1xuICAgIGxvZy5kZWJ1ZyhcIkNoZWNraW5nIHdoZXRoZXIgcGFja2FnZSBpcyBwcmVzZW50IG9uIHRoZSBkZXZpY2VcIik7XG4gICAgaWYgKCEoYXdhaXQgdGhpcy5hZGIuc2hlbGwoWydwbScsICdsaXN0JywgJ3BhY2thZ2VzJywgdGhpcy5vcHRzLmFwcFBhY2thZ2VdKSkpIHtcbiAgICAgIGxvZy5lcnJvckFuZFRocm93KGBDb3VsZCBub3QgZmluZCBwYWNrYWdlICR7dGhpcy5vcHRzLmFwcFBhY2thZ2V9IG9uIHRoZSBkZXZpY2VgKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgQ29tcHJlc3NlZExheW91dEhpZXJhcmNoeSBvbiB0aGUgZGV2aWNlXG4gIGFzeW5jIHNldENvbXByZXNzZWRMYXlvdXRIaWVyYXJjaHkgKGNvbXByZXNzKSB7XG4gICAgYXdhaXQgdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbihcImNvbXByZXNzZWRMYXlvdXRIaWVyYXJjaHlcIiwge2NvbXByZXNzTGF5b3V0OiBjb21wcmVzc30pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlU2Vzc2lvbiAoKSB7XG4gICAgbG9nLmRlYnVnKFwiU2h1dHRpbmcgZG93biBBbmRyb2lkIGRyaXZlclwiKTtcbiAgICBhd2FpdCBzdXBlci5kZWxldGVTZXNzaW9uKCk7XG4gICAgaWYgKHRoaXMuYm9vdHN0cmFwKSB7XG4gICAgICBhd2FpdCB0aGlzLnN0b3BDaHJvbWVkcml2ZXJQcm94aWVzKCk7XG4gICAgICBpZiAodGhpcy5vcHRzLnVuaWNvZGVLZXlib2FyZCAmJiB0aGlzLm9wdHMucmVzZXRLZXlib2FyZCAmJiB0aGlzLmRlZmF1bHRJTUUpIHtcbiAgICAgICAgbG9nLmRlYnVnKGBSZXNldHRpbmcgSU1FIHRvICR7dGhpcy5kZWZhdWx0SU1FfWApO1xuICAgICAgICBhd2FpdCB0aGlzLmFkYi5zZXRJTUUodGhpcy5kZWZhdWx0SU1FKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc0Nocm9tZVNlc3Npb24pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGIuZm9yY2VTdG9wKHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuYWRiLmdvVG9Ib21lKCk7XG4gICAgICBpZiAodGhpcy5vcHRzLmZ1bGxSZXNldCAmJiAhdGhpcy5vcHRzLnNraXBVbmluc3RhbGwgJiYgIXRoaXMuYXBwT25EZXZpY2UpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGIudW5pbnN0YWxsQXBrKHRoaXMub3B0cy5hcHBQYWNrYWdlKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuYWRiLnN0b3BMb2djYXQoKTtcbiAgICAgIGF3YWl0IHRoaXMuYm9vdHN0cmFwLnNodXRkb3duKCk7XG4gICAgICB0aGlzLmJvb3RzdHJhcCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy53YXJuKFwiQ2Fubm90IHNodXQgZG93biBBbmRyb2lkIGRyaXZlcjsgaXQgaGFzIGFscmVhZHkgc2h1dCBkb3duXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRGVzaXJlZENhcHMgKGNhcHMpIHtcbiAgICAvLyBjaGVjayB3aXRoIHRoZSBiYXNlIGNsYXNzLCBhbmQgcmV0dXJuIGlmIGl0IGZhaWxzXG4gICAgbGV0IHJlcyA9IHN1cGVyLnZhbGlkYXRlRGVzaXJlZENhcHMoY2Fwcyk7XG4gICAgaWYgKCFyZXMpIHJldHVybiByZXM7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgY2FwYWJpbGl0aWVzIGhhdmUgb25lIG9mIGBhcHBgLCBgYXBwUGFja2FnZWAgb3IgYGJyb3dzZXJgXG4gICAgaWYgKCghY2Fwcy5icm93c2VyTmFtZSB8fCAhaGVscGVycy5pc0Nocm9tZUJyb3dzZXIoY2Fwcy5icm93c2VyTmFtZSkpICYmXG4gICAgICAhY2Fwcy5hcHAgJiYgIWNhcHMuYXBwUGFja2FnZSkge1xuICAgICAgbGV0IG1zZyA9ICdUaGUgZGVzaXJlZCBjYXBhYmlsaXRpZXMgbXVzdCBpbmNsdWRlIGVpdGhlciBhbiBhcHAsIHBhY2thZ2Ugb3IgYnJvd3Nlcic7XG4gICAgICBsb2cuZXJyb3JBbmRUaHJvdyhtc2cpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgY2FwYWJpbGl0aWVzIGRvbid0IGhhdmUgYm90aCBgYXBwYCBhbmQgYGJyb3dzZXJgXG4gICAgaWYgKGNhcHMuYnJvd3Nlck5hbWUgJiYgY2Fwcy5hcHApIHtcbiAgICAgIGxldCBtc2cgPSAnVGhlIGRlc2lyZWQgY2FwYWJpbGl0aWVzIHNob3VsZCBub3QgaW5jbHVkZSBib3RoIGFuIGFwcCBhbmQgYSBicm93c2VyJztcbiAgICAgIGxvZy5lcnJvckFuZFRocm93KG1zZyk7XG4gICAgfVxuICB9XG5cbiAgcHJveHlBY3RpdmUgKHNlc3Npb25JZCkge1xuICAgIHN1cGVyLnByb3h5QWN0aXZlKHNlc3Npb25JZCk7XG5cbiAgICByZXR1cm4gdGhpcy5qd3BQcm94eUFjdGl2ZTtcbiAgfVxuXG4gIGdldFByb3h5QXZvaWRMaXN0IChzZXNzaW9uSWQpIHtcbiAgICBzdXBlci5nZXRQcm94eUF2b2lkTGlzdChzZXNzaW9uSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuandwUHJveHlBdm9pZDtcbiAgfVxuXG4gIGNhblByb3h5IChzZXNzaW9uSWQpIHtcbiAgICBzdXBlci5jYW5Qcm94eShzZXNzaW9uSWQpO1xuXG4gICAgLy8gdGhpcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gQ2hyb21lRHJpdmVyIHN0YXR1c1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odGhpcy5wcm94eVJlcVJlcyk7XG4gIH1cbn1cblxuZm9yIChsZXQgW2NtZCwgZm5dIG9mIF8ucGFpcnMoY29tbWFuZHMpKSB7XG4gIEFuZHJvaWREcml2ZXIucHJvdG90eXBlW2NtZF0gPSBmbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5kcm9pZERyaXZlcjtcbiJdfQ==