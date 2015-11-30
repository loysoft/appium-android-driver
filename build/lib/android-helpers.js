'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _teen_process = require('teen_process');

var _asyncbox = require('asyncbox');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _appiumSupport = require('appium-support');

var _appiumAndroidIme = require('appium-android-ime');

var _ioAppiumSettings = require('io.appium.settings');

var _appiumUnlock = require('appium-unlock');

var REMOTE_TEMP_PATH = "/data/local/tmp";
var REMOTE_INSTALL_TIMEOUT = 90000; // milliseconds
var CHROME_BROWSERS = ["Chrome", "Chromium", "Chromebeta", "Browser", "chrome", "chromium", "chromebeta", "browser"];

var helpers = {};

helpers.parseJavaVersion = function (stderr) {
  var lines = stderr.split("\n");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(lines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;

      if (new RegExp(/(java|openjdk) version/).test(line)) {
        return line.split(" ")[2].replace(/"/g, '');
      }
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

  return null;
};

helpers.getJavaVersion = function callee$0$0() {
  var _ref, stderr, javaVer;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug("Getting Java version");

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _teen_process.exec)('java', ['-version']));

      case 3:
        _ref = context$1$0.sent;
        stderr = _ref.stderr;
        javaVer = helpers.parseJavaVersion(stderr);

        if (!(javaVer === null)) {
          context$1$0.next = 8;
          break;
        }

        throw new Error("Could not get the Java version. Is Java installed?");

      case 8:
        _logger2['default'].info('Java version is: ' + javaVer);
        return context$1$0.abrupt('return', javaVer);

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.prepareEmulator = function callee$0$0(adb, opts) {
  var avd, avdArgs, language, locale, avdLaunchTimeout, avdReadyTimeout, avdName, runningAVD;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        avd = opts.avd;
        avdArgs = opts.avdArgs;
        language = opts.language;
        locale = opts.locale;
        avdLaunchTimeout = opts.avdLaunchTimeout;
        avdReadyTimeout = opts.avdReadyTimeout;

        if (avd) {
          context$1$0.next = 8;
          break;
        }

        throw new Error("Cannot launch AVD without AVD name");

      case 8:
        avdName = avd.replace('@', '');
        context$1$0.next = 11;
        return _regeneratorRuntime.awrap(adb.getRunningAVD(avdName));

      case 11:
        runningAVD = context$1$0.sent;

        if (!(runningAVD !== null)) {
          context$1$0.next = 15;
          break;
        }

        _logger2['default'].debug("Not launching AVD because it is already running.");
        return context$1$0.abrupt('return');

      case 15:
        context$1$0.next = 17;
        return _regeneratorRuntime.awrap(adb.launchAVD(avd, avdArgs, language, locale, avdLaunchTimeout, avdReadyTimeout));

      case 17:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.ensureDeviceLocale = function callee$0$0(adb, language, locale) {
  var haveLanguage, haveCountry, curLanguage, country, changed;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        haveLanguage = language && typeof language === "string";
        haveCountry = locale && typeof locale === "string";

        if (!(!haveLanguage && !haveCountry)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt('return');

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(adb.getDeviceLanguage());

      case 6:
        curLanguage = context$1$0.sent;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(adb.getDeviceCountry());

      case 9:
        country = context$1$0.sent;
        changed = false;

        if (!(haveLanguage && language !== curLanguage)) {
          context$1$0.next = 15;
          break;
        }

        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(adb.setDeviceLanguage(language));

      case 14:
        changed = true;

      case 15:
        if (!(haveCountry && locale !== country)) {
          context$1$0.next = 19;
          break;
        }

        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(adb.setDeviceCountry(locale));

      case 18:
        changed = true;

      case 19:
        if (!changed) {
          context$1$0.next = 22;
          break;
        }

        context$1$0.next = 22;
        return _regeneratorRuntime.awrap(adb.reboot());

      case 22:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.getActiveDevice = function callee$0$0(adb, udid) {
  var devices, deviceId, emPort;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].info("Retrieving device list");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(adb.getDevicesWithRetry());

      case 3:
        devices = context$1$0.sent;
        deviceId = null, emPort = null;

        if (udid) {
          if (!_lodash2['default'].contains(_lodash2['default'].pluck(devices, 'udid'), udid)) {
            _logger2['default'].errorAndThrow('Device ' + udid + ' was not in the list ' + 'of connected devices');
          }
          deviceId = udid;
          emPort = adb.getPortFromEmulatorString(deviceId);
        } else {
          deviceId = devices[0].udid;
          emPort = adb.getPortFromEmulatorString(deviceId);
        }
        _logger2['default'].info('Found device: ' + deviceId);
        return context$1$0.abrupt('return', { deviceId: deviceId, emPort: emPort });

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.getLaunchInfo = function callee$0$0(adb, opts) {
  var app, appPackage, appActivity, appWaitPackage, appWaitActivity, _ref2, apkPackage, apkActivity;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        app = opts.app;
        appPackage = opts.appPackage;
        appActivity = opts.appActivity;
        appWaitPackage = opts.appWaitPackage;
        appWaitActivity = opts.appWaitActivity;

        if (app) {
          context$1$0.next = 8;
          break;
        }

        _logger2['default'].warn("No app sent in, not parsing package/activity");
        return context$1$0.abrupt('return');

      case 8:
        if (!(appPackage && appActivity)) {
          context$1$0.next = 10;
          break;
        }

        return context$1$0.abrupt('return');

      case 10:

        _logger2['default'].debug("Parsing package and activity from app manifest");
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(adb.packageAndLaunchActivityFromManifest(app));

      case 13:
        _ref2 = context$1$0.sent;
        apkPackage = _ref2.apkPackage;
        apkActivity = _ref2.apkActivity;

        if (apkPackage && !appPackage) {
          appPackage = apkPackage;
        }
        if (!appWaitPackage) {
          appWaitPackage = appPackage;
        }
        if (apkActivity && !appActivity) {
          appActivity = apkActivity;
        }
        if (!appWaitActivity) {
          appWaitActivity = appActivity;
        }
        _logger2['default'].debug('Parsed package and activity are: ' + apkPackage + '/' + apkActivity);
        return context$1$0.abrupt('return', { appPackage: appPackage, appWaitPackage: appWaitPackage, appActivity: appActivity, appWaitActivity: appWaitActivity });

      case 22:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.getRemoteApkPath = function (localApkMd5) {
  var remotePath = _path2['default'].resolve(REMOTE_TEMP_PATH, localApkMd5 + '.apk');
  _logger2['default'].info('Remote apk path is ' + remotePath);
  return remotePath;
};

helpers.resetApp = function callee$0$0(adb, localApkPath, pkg, fastReset) {
  var apkMd5, remotePath;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!fastReset) {
          context$1$0.next = 6;
          break;
        }

        _logger2['default'].debug("Running fast reset (stop and clear)");
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(adb.stopAndClear(pkg));

      case 4:
        context$1$0.next = 17;
        break;

      case 6:
        _logger2['default'].debug("Running old fashion reset (reinstall)");
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.md5(localApkPath));

      case 9:
        apkMd5 = context$1$0.sent;
        remotePath = helpers.getRemoteApkPath(apkMd5, localApkPath);
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(adb.fileExists(remotePath));

      case 13:
        if (context$1$0.sent) {
          context$1$0.next = 15;
          break;
        }

        throw new Error("Can't run slow reset without a remote apk!");

      case 15:
        context$1$0.next = 17;
        return _regeneratorRuntime.awrap(helpers.reinstallRemoteApk(adb, localApkPath, pkg, remotePath));

      case 17:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.reinstallRemoteApk = function callee$0$0(adb, localApkPath, pkg, remotePath) {
  var tries = arguments.length <= 4 || arguments[4] === undefined ? 2 : arguments[4];
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap((0, _asyncbox.retry)(tries, function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.prev = 0;
                context$2$0.next = 3;
                return _regeneratorRuntime.awrap(adb.uninstallApk(pkg));

              case 3:
                context$2$0.next = 8;
                break;

              case 5:
                context$2$0.prev = 5;
                context$2$0.t0 = context$2$0['catch'](0);

                _logger2['default'].warn("Uninstalling remote APK failed, maybe it wasn't installed");

              case 8:
                context$2$0.prev = 8;
                context$2$0.next = 11;
                return _regeneratorRuntime.awrap(adb.installFromDevicePath(remotePath, { timeout: 90000 }));

              case 11:
                context$2$0.next = 21;
                break;

              case 13:
                context$2$0.prev = 13;
                context$2$0.t1 = context$2$0['catch'](8);

                _logger2['default'].warn("Installing remote APK failed, going to uninstall and try " + "again");
                // if remote install failed, remove ALL the apks and re-push ours
                // to the remote cache
                context$2$0.next = 18;
                return _regeneratorRuntime.awrap(helpers.removeRemoteApks(adb));

              case 18:
                context$2$0.next = 20;
                return _regeneratorRuntime.awrap(adb.push(localApkPath, remotePath));

              case 20:
                throw context$2$0.t1;

              case 21:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this, [[0, 5], [8, 13]]);
        }));

      case 2:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// throw an error to trigger the retry
helpers.installApkRemotely = function callee$0$0(adb, localApkPath, pkg, fastReset) {
  var installTimeout, apkMd5, remotePath, remoteApkExists, installed;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        installTimeout = REMOTE_INSTALL_TIMEOUT;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.md5(localApkPath));

      case 3:
        apkMd5 = context$1$0.sent;
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(helpers.getRemoteApkPath(apkMd5, localApkPath));

      case 6:
        remotePath = context$1$0.sent;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap(adb.fileExists(remotePath));

      case 9:
        remoteApkExists = context$1$0.sent;

        _logger2['default'].debug("Checking if app is installed");
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(adb.isAppInstalled(pkg));

      case 13:
        installed = context$1$0.sent;

        if (!(installed && remoteApkExists && fastReset)) {
          context$1$0.next = 20;
          break;
        }

        _logger2['default'].info("Apk is already on remote and installed, resetting");
        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(helpers.resetApp(adb, localApkPath, pkg, fastReset));

      case 18:
        context$1$0.next = 34;
        break;

      case 20:
        if (!(!installed || !remoteApkExists && fastReset)) {
          context$1$0.next = 34;
          break;
        }

        if (!installed) {
          _logger2['default'].info("Apk is not yet installed");
        } else {
          _logger2['default'].info("Apk was already installed but not from our remote path");
        }
        _logger2['default'].info((installed ? 'Re' : '') + 'installing apk from remote');
        context$1$0.next = 25;
        return _regeneratorRuntime.awrap(adb.mkdir(REMOTE_TEMP_PATH));

      case 25:
        _logger2['default'].info("Clearing out any existing remote apks with the same hash");
        context$1$0.next = 28;
        return _regeneratorRuntime.awrap(helpers.removeRemoteApks(adb, [apkMd5]));

      case 28:
        if (remoteApkExists) {
          context$1$0.next = 32;
          break;
        }

        // push from local to remote
        _logger2['default'].info('Pushing ' + pkg + ' to device. Will wait up to ' + installTimeout + ' ' + 'milliseconds before aborting');
        context$1$0.next = 32;
        return _regeneratorRuntime.awrap(adb.push(localApkPath, remotePath, { timeout: installTimeout }));

      case 32:
        context$1$0.next = 34;
        return _regeneratorRuntime.awrap(helpers.reinstallRemoteApk(adb, localApkPath, pkg, remotePath));

      case 34:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.removeRemoteApks = function callee$0$0(adb) {
  var exceptMd5s = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  var apks, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, apk;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug("Removing any old apks");
        if (exceptMd5s) {
          _logger2['default'].debug('Except ' + JSON.stringify(exceptMd5s));
        } else {
          exceptMd5s = [];
        }
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(adb.ls(REMOTE_TEMP_PATH + '/*.apk'));

      case 4:
        apks = context$1$0.sent;

        if (!(apks.length < 1)) {
          context$1$0.next = 8;
          break;
        }

        _logger2['default'].debug("No apks to examine");
        return context$1$0.abrupt('return');

      case 8:
        apks = apks.filter(function (apk) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _getIterator(exceptMd5s), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var md5 = _step2.value;

              return apk.indexOf(md5) === -1;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        });
        _iteratorNormalCompletion3 = true;
        _didIteratorError3 = false;
        _iteratorError3 = undefined;
        context$1$0.prev = 12;
        _iterator3 = _getIterator(apks);

      case 14:
        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
          context$1$0.next = 22;
          break;
        }

        apk = _step3.value;

        _logger2['default'].info('Will remove ' + apk);
        context$1$0.next = 19;
        return _regeneratorRuntime.awrap(adb.shell(['rm', apk]));

      case 19:
        _iteratorNormalCompletion3 = true;
        context$1$0.next = 14;
        break;

      case 22:
        context$1$0.next = 28;
        break;

      case 24:
        context$1$0.prev = 24;
        context$1$0.t0 = context$1$0['catch'](12);
        _didIteratorError3 = true;
        _iteratorError3 = context$1$0.t0;

      case 28:
        context$1$0.prev = 28;
        context$1$0.prev = 29;

        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }

      case 31:
        context$1$0.prev = 31;

        if (!_didIteratorError3) {
          context$1$0.next = 34;
          break;
        }

        throw _iteratorError3;

      case 34:
        return context$1$0.finish(31);

      case 35:
        return context$1$0.finish(28);

      case 36:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[12, 24, 28, 36], [29,, 31, 35]]);
};

helpers.initUnicodeKeyboard = function callee$0$0(adb) {
  var defaultIME, appiumIME;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug('Enabling Unicode keyboard support');
        _logger2['default'].debug("Pushing unicode ime to device...");
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(adb.install(_appiumAndroidIme.path, false));

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(adb.defaultIME());

      case 6:
        defaultIME = context$1$0.sent;

        _logger2['default'].debug('Unsetting previous IME ' + defaultIME);
        appiumIME = 'io.appium.android.ime/.UnicodeIME';

        _logger2['default'].debug('Setting IME to \'' + appiumIME + '\'');
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(adb.enableIME(appiumIME));

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(adb.setIME(appiumIME));

      case 14:
        return context$1$0.abrupt('return', defaultIME);

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.pushSettingsApp = function callee$0$0(adb) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug("Pushing settings apk to device...");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(adb.install(_ioAppiumSettings.path, false));

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.pushUnlock = function callee$0$0(adb) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].debug("Pushing unlock helper app to device...");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(adb.install(_appiumUnlock.path, false));

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

// pushStrings method extracts string.xml and converts it to string.json and pushes
// it to /data/local/tmp/string.json on for use of bootstrap
// if app is not present to extract string.xml it deletes remote strings.json
// if app does not have strings.xml we push an empty json object to remote
helpers.pushStrings = function callee$0$0(language, adb, opts) {
  var remotePath, stringsJson, stringsTmpDir, _ref3, apkStrings, localPath, remoteFile;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        remotePath = '/data/local/tmp';
        stringsJson = 'strings.json';
        stringsTmpDir = _path2['default'].resolve(opts.tmpDir, opts.appPackage);
        context$1$0.prev = 3;

        _logger2['default'].debug('Extracting strings from apk', opts.app, language, stringsTmpDir);
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(adb.extractStringsFromApk(opts.app, language, stringsTmpDir));

      case 7:
        _ref3 = context$1$0.sent;
        apkStrings = _ref3.apkStrings;
        localPath = _ref3.localPath;

        this.apkStrings[language] = apkStrings;
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.adb.push(localPath, remotePath));

      case 13:
        return context$1$0.abrupt('return', apkStrings);

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0['catch'](3);
        context$1$0.next = 20;
        return _regeneratorRuntime.awrap(_appiumSupport.fs.exists(opts.app));

      case 20:
        if (context$1$0.sent) {
          context$1$0.next = 25;
          break;
        }

        context$1$0.next = 23;
        return _regeneratorRuntime.awrap(adb.rimraf(remotePath + '/' + stringsJson));

      case 23:
        context$1$0.next = 29;
        break;

      case 25:
        _logger2['default'].warn("Could not get strings, continuing anyway");
        remoteFile = remotePath + '/' + stringsJson;
        context$1$0.next = 29;
        return _regeneratorRuntime.awrap(adb.shell('echo', ['\'{}\' > ' + remoteFile]));

      case 29:
        return context$1$0.abrupt('return', {});

      case 30:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[3, 16]]);
};

helpers.unlock = function callee$0$0(adb) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this2 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(adb.isScreenLocked());

      case 2:
        if (context$1$0.sent) {
          context$1$0.next = 5;
          break;
        }

        _logger2['default'].info("Screen already unlocked, doing nothing");
        return context$1$0.abrupt('return');

      case 5:
        _logger2['default'].info("Unlocking screen");

        context$1$0.next = 8;
        return _regeneratorRuntime.awrap((0, _asyncbox.retryInterval)(10, 1000, function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                _logger2['default'].debug("Screen is locked, trying to unlock");
                context$2$0.next = 3;
                return _regeneratorRuntime.awrap(adb.startApp({
                  pkg: "io.appium.unlock",
                  activity: ".Unlock",
                  action: "android.intent.action.MAIN",
                  category: "android.intent.category.LAUNCHER",
                  flags: "0x10200000"
                }));

              case 3:
                context$2$0.next = 5;
                return _regeneratorRuntime.awrap(adb.isScreenLocked());

              case 5:
                if (context$2$0.sent) {
                  context$2$0.next = 9;
                  break;
                }

                _logger2['default'].debug("Screen unlocked successfully");
                context$2$0.next = 10;
                break;

              case 9:
                throw new Error("Screen did not unlock successfully, retrying");

              case 10:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this2);
        }));

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.initDevice = function callee$0$0(adb, opts) {
  var _ref4, deviceId, emPort, defaultIME;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!opts.avd) {
          context$1$0.next = 3;
          break;
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(helpers.prepareEmulator(adb, opts));

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(helpers.getActiveDevice(adb, opts.udid));

      case 5:
        _ref4 = context$1$0.sent;
        deviceId = _ref4.deviceId;
        emPort = _ref4.emPort;

        adb.setDeviceId(deviceId);
        if (emPort) {
          adb.setEmulatorPort(emPort);
        }

        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(adb.waitForDevice());

      case 12:
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(helpers.ensureDeviceLocale(adb, opts.language, opts.locale));

      case 14:
        context$1$0.next = 16;
        return _regeneratorRuntime.awrap(adb.startLogcat());

      case 16:
        defaultIME = undefined;

        if (!opts.unicodeKeyboard) {
          context$1$0.next = 21;
          break;
        }

        context$1$0.next = 20;
        return _regeneratorRuntime.awrap(helpers.initUnicodeKeyboard(adb));

      case 20:
        defaultIME = context$1$0.sent;

      case 21:
        context$1$0.next = 23;
        return _regeneratorRuntime.awrap(helpers.pushSettingsApp(adb));

      case 23:
        context$1$0.next = 25;
        return _regeneratorRuntime.awrap(helpers.pushUnlock(adb));

      case 25:
        return context$1$0.abrupt('return', defaultIME);

      case 26:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.removeNullProperties = function (obj) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = _getIterator(_lodash2['default'].keys(obj)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var key = _step4.value;

      if (_lodash2['default'].isNull(obj[key]) || _lodash2['default'].isUndefined(obj[key])) {
        delete obj[key];
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4['return']) {
        _iterator4['return']();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
};

helpers.truncateDecimals = function (number, digits) {
  var multiplier = Math.pow(10, digits),
      adjustedNum = number * multiplier,
      truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

  return truncatedNum / multiplier;
};

helpers.isChromeBrowser = function (browser) {
  return _lodash2['default'].contains(CHROME_BROWSERS, browser);
};

helpers.getChromePkg = function (browser) {
  var pkg = undefined,
      act = undefined;

  browser = browser.toLowerCase();
  if (browser === "chromium") {
    pkg = "org.chromium.chrome.shell";
    act = ".ChromeShellActivity";
  } else if (browser === "chromebeta") {
    pkg = "com.chrome.beta";
    act = "com.google.android.apps.chrome.Main";
  } else if (browser === "browser") {
    pkg = "com.android.browser";
    act = "com.android.browser.BrowserActivity";
  } else {
    pkg = "com.android.chrome";
    act = "com.google.android.apps.chrome.Main";
  }
  return { pkg: pkg, activity: act };
};

exports['default'] = helpers;
exports.CHROME_BROWSERS = CHROME_BROWSERS;

// first do an uninstall of the package to make sure it's not there

// Next, install from the remote path. This can be flakey. If it doesn't
// work, clear out any cached apks, re-push from local, and try again

// get the default IME so we can return back to it later if we want

// delete remote string.json if present
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hbmRyb2lkLWhlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7b0JBQ0wsTUFBTTs7Ozs0QkFDRixjQUFjOzt3QkFDRSxVQUFVOztzQkFDNUIsVUFBVTs7Ozs2QkFDVixnQkFBZ0I7O2dDQUNJLG9CQUFvQjs7Z0NBQ25CLG9CQUFvQjs7NEJBQ3RCLGVBQWU7O0FBRXJELElBQU0sZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7QUFDM0MsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzdDLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztBQUV4RSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRWpCLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUMzQyxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7QUFDL0Isc0NBQWlCLEtBQUssNEdBQUU7VUFBZixJQUFJOztBQUNYLFVBQUksSUFBSSxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbkQsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDN0M7S0FDRjs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQzs7QUFFRixPQUFPLENBQUMsY0FBYyxHQUFHO1lBR2xCLE1BQU0sRUFDUCxPQUFPOzs7OztBQUhYLDRCQUFPLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzs7eUNBRWhCLHdCQUFLLE1BQU0sRUFBRSxDQUFDLFVB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QUFpQixDQUFDO0FBQ3hCLE9BQUcsR0FBRyxxQ0FBcUMsQ0FBQztHQUM3QyxNQUFNLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUNoQyxPQUFHLEdBQUcscUJBQXFCLENBQUM7QUFDNUIsT0FBRyxHQUFHLHFDQUFxQyxDQUFDO0dBQzdDLE1BQU07QUFDTCxPQUFHLEdBQUcsb0JBQW9CLENBQUM7QUFDM0IsT0FBRyxHQUFHLHFDQUFxQyxDQUFDO0dBQzdDO0FBQ0QsU0FBTyxFQUFDLEdBQUcsRUFBSCxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDO0NBQzdCLENBQUM7O3FCQUVhLE9BQU87UUFDYixlQUFlLEdBQWYsZUFBZSIsImZpbGUiOiJsaWIvYW5kcm9pZC1oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ3RlZW5fcHJvY2Vzcyc7XG5pbXBvcnQgeyByZXRyeSwgcmV0cnlJbnRlcnZhbCB9IGZyb20gJ2FzeW5jYm94JztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgZnMgfSBmcm9tICdhcHBpdW0tc3VwcG9ydCc7XG5pbXBvcnQgeyBwYXRoIGFzIHVuaWNvZGVJTUVQYXRoIH0gZnJvbSAnYXBwaXVtLWFuZHJvaWQtaW1lJztcbmltcG9ydCB7IHBhdGggYXMgc2V0dGluZ3NBcGtQYXRoIH0gZnJvbSAnaW8uYXBwaXVtLnNldHRpbmdzJztcbmltcG9ydCB7IHBhdGggYXMgdW5sb2NrQXBrUGF0aCB9IGZyb20gJ2FwcGl1bS11bmxvY2snO1xuXG5jb25zdCBSRU1PVEVfVEVNUF9QQVRIID0gXCIvZGF0YS9sb2NhbC90bXBcIjtcbmNvbnN0IFJFTU9URV9JTlNUQUxMX1RJTUVPVVQgPSA5MDAwMDsgLy8gbWlsbGlzZWNvbmRzXG5jb25zdCBDSFJPTUVfQlJPV1NFUlMgPSBbXCJDaHJvbWVcIiwgXCJDaHJvbWl1bVwiLCBcIkNocm9tZWJldGFcIiwgXCJCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJjaHJvbWVcIiwgXCJjaHJvbWl1bVwiLCBcImNocm9tZWJldGFcIiwgXCJicm93c2VyXCJdO1xuXG5sZXQgaGVscGVycyA9IHt9O1xuXG5oZWxwZXJzLnBhcnNlSmF2YVZlcnNpb24gPSBmdW5jdGlvbiAoc3RkZXJyKSB7XG4gIGxldCBsaW5lcyA9IHN0ZGVyci5zcGxpdChcIlxcblwiKTtcbiAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xuICAgIGlmIChuZXcgUmVnRXhwKC8oamF2YXxvcGVuamRrKSB2ZXJzaW9uLykudGVzdChsaW5lKSkge1xuICAgICAgcmV0dXJuIGxpbmUuc3BsaXQoXCIgXCIpWzJdLnJlcGxhY2UoL1wiL2csICcnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5oZWxwZXJzLmdldEphdmFWZXJzaW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsb2dnZXIuZGVidWcoXCJHZXR0aW5nIEphdmEgdmVyc2lvblwiKTtcblxuICBsZXQge3N0ZGVycn0gPSBhd2FpdCBleGVjKCdqYXZhJywgWyctdmVyc2lvbiddKTtcbiAgbGV0IGphdmFWZXIgPSBoZWxwZXJzLnBhcnNlSmF2YVZlcnNpb24oc3RkZXJyKTtcbiAgaWYgKGphdmFWZXIgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHRoZSBKYXZhIHZlcnNpb24uIElzIEphdmEgaW5zdGFsbGVkP1wiKTtcbiAgfVxuICBsb2dnZXIuaW5mbyhgSmF2YSB2ZXJzaW9uIGlzOiAke2phdmFWZXJ9YCk7XG4gIHJldHVybiBqYXZhVmVyO1xufTtcblxuaGVscGVycy5wcmVwYXJlRW11bGF0b3IgPSBhc3luYyBmdW5jdGlvbiAoYWRiLCBvcHRzKSB7XG4gIGxldCB7YXZkLCBhdmRBcmdzLCBsYW5ndWFnZSwgbG9jYWxlLCBhdmRMYXVuY2hUaW1lb3V0LFxuICAgICAgIGF2ZFJlYWR5VGltZW91dH0gPSBvcHRzO1xuICBpZiAoIWF2ZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBsYXVuY2ggQVZEIHdpdGhvdXQgQVZEIG5hbWVcIik7XG4gIH1cbiAgbGV0IGF2ZE5hbWUgPSBhdmQucmVwbGFjZSgnQCcsICcnKTtcbiAgbGV0IHJ1bm5pbmdBVkQgPSBhd2FpdCBhZGIuZ2V0UnVubmluZ0FWRChhdmROYW1lKTtcbiAgaWYgKHJ1bm5pbmdBVkQgIT09IG51bGwpIHtcbiAgICBsb2dnZXIuZGVidWcoXCJOb3QgbGF1bmNoaW5nIEFWRCBiZWNhdXNlIGl0IGlzIGFscmVhZHkgcnVubmluZy5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGF3YWl0IGFkYi5sYXVuY2hBVkQoYXZkLCBhdmRBcmdzLCBsYW5ndWFnZSwgbG9jYWxlLCBhdmRMYXVuY2hUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgIGF2ZFJlYWR5VGltZW91dCk7XG59O1xuXG5oZWxwZXJzLmVuc3VyZURldmljZUxvY2FsZSA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIGxhbmd1YWdlLCBsb2NhbGUpIHtcbiAgbGV0IGhhdmVMYW5ndWFnZSA9IGxhbmd1YWdlICYmIHR5cGVvZiBsYW5ndWFnZSA9PT0gXCJzdHJpbmdcIjtcbiAgbGV0IGhhdmVDb3VudHJ5ID0gbG9jYWxlICYmIHR5cGVvZiBsb2NhbGUgPT09IFwic3RyaW5nXCI7XG4gIGlmICghaGF2ZUxhbmd1YWdlICYmICFoYXZlQ291bnRyeSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgY3VyTGFuZ3VhZ2UgPSBhd2FpdCBhZGIuZ2V0RGV2aWNlTGFuZ3VhZ2UoKTtcbiAgbGV0IGNvdW50cnkgPSBhd2FpdCBhZGIuZ2V0RGV2aWNlQ291bnRyeSgpO1xuICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICBpZiAoaGF2ZUxhbmd1YWdlICYmIGxhbmd1YWdlICE9PSBjdXJMYW5ndWFnZSkge1xuICAgIGF3YWl0IGFkYi5zZXREZXZpY2VMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gIH1cbiAgaWYgKGhhdmVDb3VudHJ5ICYmIGxvY2FsZSAhPT0gY291bnRyeSkge1xuICAgIGF3YWl0IGFkYi5zZXREZXZpY2VDb3VudHJ5KGxvY2FsZSk7XG4gICAgY2hhbmdlZCA9IHRydWU7XG4gIH1cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICBhd2FpdCBhZGIucmVib290KCk7XG4gIH1cbn07XG5cbmhlbHBlcnMuZ2V0QWN0aXZlRGV2aWNlID0gYXN5bmMgZnVuY3Rpb24gKGFkYiwgdWRpZCkge1xuICBsb2dnZXIuaW5mbyhcIlJldHJpZXZpbmcgZGV2aWNlIGxpc3RcIik7XG4gIGxldCBkZXZpY2VzID0gYXdhaXQgYWRiLmdldERldmljZXNXaXRoUmV0cnkoKTtcbiAgbGV0IGRldmljZUlkID0gbnVsbCwgZW1Qb3J0ID0gbnVsbDtcbiAgaWYgKHVkaWQpIHtcbiAgICBpZiAoIV8uY29udGFpbnMoXy5wbHVjayhkZXZpY2VzLCAndWRpZCcpLCB1ZGlkKSkge1xuICAgICAgbG9nZ2VyLmVycm9yQW5kVGhyb3coYERldmljZSAke3VkaWR9IHdhcyBub3QgaW4gdGhlIGxpc3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgb2YgY29ubmVjdGVkIGRldmljZXNgKTtcbiAgICB9XG4gICAgZGV2aWNlSWQgPSB1ZGlkO1xuICAgIGVtUG9ydCA9IGFkYi5nZXRQb3J0RnJvbUVtdWxhdG9yU3RyaW5nKGRldmljZUlkKTtcbiAgfSBlbHNlIHtcbiAgICBkZXZpY2VJZCA9IGRldmljZXNbMF0udWRpZDtcbiAgICBlbVBvcnQgPSBhZGIuZ2V0UG9ydEZyb21FbXVsYXRvclN0cmluZyhkZXZpY2VJZCk7XG4gIH1cbiAgbG9nZ2VyLmluZm8oYEZvdW5kIGRldmljZTogJHtkZXZpY2VJZH1gKTtcbiAgcmV0dXJuIHtkZXZpY2VJZCwgZW1Qb3J0fTtcbn07XG5cbmhlbHBlcnMuZ2V0TGF1bmNoSW5mbyA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIG9wdHMpIHtcbiAgbGV0IHthcHAsIGFwcFBhY2thZ2UsIGFwcEFjdGl2aXR5LCBhcHBXYWl0UGFja2FnZSwgYXBwV2FpdEFjdGl2aXR5fSA9IG9wdHM7XG4gIGlmICghYXBwKSB7XG4gICAgbG9nZ2VyLndhcm4oXCJObyBhcHAgc2VudCBpbiwgbm90IHBhcnNpbmcgcGFja2FnZS9hY3Rpdml0eVwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFwcFBhY2thZ2UgJiYgYXBwQWN0aXZpdHkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2dnZXIuZGVidWcoXCJQYXJzaW5nIHBhY2thZ2UgYW5kIGFjdGl2aXR5IGZyb20gYXBwIG1hbmlmZXN0XCIpO1xuICBsZXQge2Fwa1BhY2thZ2UsIGFwa0FjdGl2aXR5fSA9XG4gICAgYXdhaXQgYWRiLnBhY2thZ2VBbmRMYXVuY2hBY3Rpdml0eUZyb21NYW5pZmVzdChhcHApO1xuICBpZiAoYXBrUGFja2FnZSAmJiAhYXBwUGFja2FnZSkge1xuICAgIGFwcFBhY2thZ2UgPSBhcGtQYWNrYWdlO1xuICB9XG4gIGlmICghYXBwV2FpdFBhY2thZ2UpIHtcbiAgICBhcHBXYWl0UGFja2FnZSA9IGFwcFBhY2thZ2U7XG4gIH1cbiAgaWYgKGFwa0FjdGl2aXR5ICYmICFhcHBBY3Rpdml0eSkge1xuICAgIGFwcEFjdGl2aXR5ID0gYXBrQWN0aXZpdHk7XG4gIH1cbiAgaWYgKCFhcHBXYWl0QWN0aXZpdHkpIHtcbiAgICBhcHBXYWl0QWN0aXZpdHkgPSBhcHBBY3Rpdml0eTtcbiAgfVxuICBsb2dnZXIuZGVidWcoYFBhcnNlZCBwYWNrYWdlIGFuZCBhY3Rpdml0eSBhcmU6ICR7YXBrUGFja2FnZX0vJHthcGtBY3Rpdml0eX1gKTtcbiAgcmV0dXJuIHthcHBQYWNrYWdlLCBhcHBXYWl0UGFja2FnZSwgYXBwQWN0aXZpdHksIGFwcFdhaXRBY3Rpdml0eX07XG59O1xuXG5oZWxwZXJzLmdldFJlbW90ZUFwa1BhdGggPSBmdW5jdGlvbiAobG9jYWxBcGtNZDUpIHtcbiAgbGV0IHJlbW90ZVBhdGggPSBwYXRoLnJlc29sdmUoUkVNT1RFX1RFTVBfUEFUSCwgYCR7bG9jYWxBcGtNZDV9LmFwa2ApO1xuICBsb2dnZXIuaW5mbyhgUmVtb3RlIGFwayBwYXRoIGlzICR7cmVtb3RlUGF0aH1gKTtcbiAgcmV0dXJuIHJlbW90ZVBhdGg7XG59O1xuXG5oZWxwZXJzLnJlc2V0QXBwID0gYXN5bmMgZnVuY3Rpb24gKGFkYiwgbG9jYWxBcGtQYXRoLCBwa2csIGZhc3RSZXNldCkge1xuICBpZiAoZmFzdFJlc2V0KSB7XG4gICAgbG9nZ2VyLmRlYnVnKFwiUnVubmluZyBmYXN0IHJlc2V0IChzdG9wIGFuZCBjbGVhcilcIik7XG4gICAgYXdhaXQgYWRiLnN0b3BBbmRDbGVhcihwa2cpO1xuICB9IGVsc2Uge1xuICAgIGxvZ2dlci5kZWJ1ZyhcIlJ1bm5pbmcgb2xkIGZhc2hpb24gcmVzZXQgKHJlaW5zdGFsbClcIik7XG4gICAgbGV0IGFwa01kNSA9IGF3YWl0IGZzLm1kNShsb2NhbEFwa1BhdGgpO1xuICAgIGxldCByZW1vdGVQYXRoID0gaGVscGVycy5nZXRSZW1vdGVBcGtQYXRoKGFwa01kNSwgbG9jYWxBcGtQYXRoKTtcbiAgICBpZiAoIWF3YWl0IGFkYi5maWxlRXhpc3RzKHJlbW90ZVBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBydW4gc2xvdyByZXNldCB3aXRob3V0IGEgcmVtb3RlIGFwayFcIik7XG4gICAgfVxuICAgIGF3YWl0IGhlbHBlcnMucmVpbnN0YWxsUmVtb3RlQXBrKGFkYiwgbG9jYWxBcGtQYXRoLCBwa2csIHJlbW90ZVBhdGgpO1xuICB9XG59O1xuXG5oZWxwZXJzLnJlaW5zdGFsbFJlbW90ZUFwayA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIGxvY2FsQXBrUGF0aCwgcGtnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlUGF0aCwgdHJpZXMgPSAyKSB7XG4gIGF3YWl0IHJldHJ5KHRyaWVzLCBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGZpcnN0IGRvIGFuIHVuaW5zdGFsbCBvZiB0aGUgcGFja2FnZSB0byBtYWtlIHN1cmUgaXQncyBub3QgdGhlcmVcbiAgICAgIGF3YWl0IGFkYi51bmluc3RhbGxBcGsocGtnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIud2FybihcIlVuaW5zdGFsbGluZyByZW1vdGUgQVBLIGZhaWxlZCwgbWF5YmUgaXQgd2Fzbid0IGluc3RhbGxlZFwiKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFkYi5pbnN0YWxsRnJvbURldmljZVBhdGgocmVtb3RlUGF0aCwge3RpbWVvdXQ6IDkwMDAwfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLndhcm4oXCJJbnN0YWxsaW5nIHJlbW90ZSBBUEsgZmFpbGVkLCBnb2luZyB0byB1bmluc3RhbGwgYW5kIHRyeSBcIiArXG4gICAgICAgICAgICAgICAgICBcImFnYWluXCIpO1xuICAgICAgLy8gaWYgcmVtb3RlIGluc3RhbGwgZmFpbGVkLCByZW1vdmUgQUxMIHRoZSBhcGtzIGFuZCByZS1wdXNoIG91cnNcbiAgICAgIC8vIHRvIHRoZSByZW1vdGUgY2FjaGVcbiAgICAgIGF3YWl0IGhlbHBlcnMucmVtb3ZlUmVtb3RlQXBrcyhhZGIpO1xuICAgICAgYXdhaXQgYWRiLnB1c2gobG9jYWxBcGtQYXRoLCByZW1vdGVQYXRoKTtcbiAgICAgIHRocm93IGU7IC8vIHRocm93IGFuIGVycm9yIHRvIHRyaWdnZXIgdGhlIHJldHJ5XG4gICAgfVxuICB9KTtcbn07XG5cbmhlbHBlcnMuaW5zdGFsbEFwa1JlbW90ZWx5ID0gYXN5bmMgZnVuY3Rpb24gKGFkYiwgbG9jYWxBcGtQYXRoLCBwa2csIGZhc3RSZXNldCkge1xuICBsZXQgaW5zdGFsbFRpbWVvdXQgPSBSRU1PVEVfSU5TVEFMTF9USU1FT1VUO1xuXG4gIGxldCBhcGtNZDUgPSBhd2FpdCBmcy5tZDUobG9jYWxBcGtQYXRoKTtcbiAgbGV0IHJlbW90ZVBhdGggPSBhd2FpdCBoZWxwZXJzLmdldFJlbW90ZUFwa1BhdGgoYXBrTWQ1LCBsb2NhbEFwa1BhdGgpO1xuICBsZXQgcmVtb3RlQXBrRXhpc3RzID0gYXdhaXQgYWRiLmZpbGVFeGlzdHMocmVtb3RlUGF0aCk7XG4gIGxvZ2dlci5kZWJ1ZyhcIkNoZWNraW5nIGlmIGFwcCBpcyBpbnN0YWxsZWRcIik7XG4gIGxldCBpbnN0YWxsZWQgPSBhd2FpdCBhZGIuaXNBcHBJbnN0YWxsZWQocGtnKTtcblxuICBpZiAoaW5zdGFsbGVkICYmIHJlbW90ZUFwa0V4aXN0cyAmJiBmYXN0UmVzZXQpIHtcbiAgICBsb2dnZXIuaW5mbyhcIkFwayBpcyBhbHJlYWR5IG9uIHJlbW90ZSBhbmQgaW5zdGFsbGVkLCByZXNldHRpbmdcIik7XG4gICAgYXdhaXQgaGVscGVycy5yZXNldEFwcChhZGIsIGxvY2FsQXBrUGF0aCwgcGtnLCBmYXN0UmVzZXQpO1xuICB9IGVsc2UgaWYgKCFpbnN0YWxsZWQgfHwgKCFyZW1vdGVBcGtFeGlzdHMgJiYgZmFzdFJlc2V0KSkge1xuICAgIGlmICghaW5zdGFsbGVkKSB7XG4gICAgICBsb2dnZXIuaW5mbyhcIkFwayBpcyBub3QgeWV0IGluc3RhbGxlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmluZm8oXCJBcGsgd2FzIGFscmVhZHkgaW5zdGFsbGVkIGJ1dCBub3QgZnJvbSBvdXIgcmVtb3RlIHBhdGhcIik7XG4gICAgfVxuICAgIGxvZ2dlci5pbmZvKGAke2luc3RhbGxlZCA/ICdSZScgOiAnJ31pbnN0YWxsaW5nIGFwayBmcm9tIHJlbW90ZWApO1xuICAgIGF3YWl0IGFkYi5ta2RpcihSRU1PVEVfVEVNUF9QQVRIKTtcbiAgICBsb2dnZXIuaW5mbyhcIkNsZWFyaW5nIG91dCBhbnkgZXhpc3RpbmcgcmVtb3RlIGFwa3Mgd2l0aCB0aGUgc2FtZSBoYXNoXCIpO1xuICAgIGF3YWl0IGhlbHBlcnMucmVtb3ZlUmVtb3RlQXBrcyhhZGIsIFthcGtNZDVdKTtcbiAgICBpZiAoIXJlbW90ZUFwa0V4aXN0cykge1xuICAgICAgLy8gcHVzaCBmcm9tIGxvY2FsIHRvIHJlbW90ZVxuICAgICAgbG9nZ2VyLmluZm8oYFB1c2hpbmcgJHtwa2d9IHRvIGRldmljZS4gV2lsbCB3YWl0IHVwIHRvICR7aW5zdGFsbFRpbWVvdXR9IGAgK1xuICAgICAgICAgICAgICAgICAgYG1pbGxpc2Vjb25kcyBiZWZvcmUgYWJvcnRpbmdgKTtcbiAgICAgIGF3YWl0IGFkYi5wdXNoKGxvY2FsQXBrUGF0aCwgcmVtb3RlUGF0aCwge3RpbWVvdXQ6IGluc3RhbGxUaW1lb3V0fSk7XG4gICAgfVxuXG4gICAgLy8gTmV4dCwgaW5zdGFsbCBmcm9tIHRoZSByZW1vdGUgcGF0aC4gVGhpcyBjYW4gYmUgZmxha2V5LiBJZiBpdCBkb2Vzbid0XG4gICAgLy8gd29yaywgY2xlYXIgb3V0IGFueSBjYWNoZWQgYXBrcywgcmUtcHVzaCBmcm9tIGxvY2FsLCBhbmQgdHJ5IGFnYWluXG4gICAgYXdhaXQgaGVscGVycy5yZWluc3RhbGxSZW1vdGVBcGsoYWRiLCBsb2NhbEFwa1BhdGgsIHBrZywgcmVtb3RlUGF0aCk7XG4gIH1cbn07XG5cbmhlbHBlcnMucmVtb3ZlUmVtb3RlQXBrcyA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIGV4Y2VwdE1kNXMgPSBudWxsKSB7XG4gIGxvZ2dlci5kZWJ1ZyhcIlJlbW92aW5nIGFueSBvbGQgYXBrc1wiKTtcbiAgaWYgKGV4Y2VwdE1kNXMpIHtcbiAgICBsb2dnZXIuZGVidWcoYEV4Y2VwdCAke0pTT04uc3RyaW5naWZ5KGV4Y2VwdE1kNXMpfWApO1xuICB9IGVsc2Uge1xuICAgIGV4Y2VwdE1kNXMgPSBbXTtcbiAgfVxuICBsZXQgYXBrcyA9IGF3YWl0IGFkYi5scyhgJHtSRU1PVEVfVEVNUF9QQVRIfS8qLmFwa2ApO1xuICBpZiAoYXBrcy5sZW5ndGggPCAxKSB7XG4gICAgbG9nZ2VyLmRlYnVnKFwiTm8gYXBrcyB0byBleGFtaW5lXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBhcGtzID0gYXBrcy5maWx0ZXIoYXBrID0+IHtcbiAgICBmb3IgKGxldCBtZDUgb2YgZXhjZXB0TWQ1cykge1xuICAgICAgcmV0dXJuIGFway5pbmRleE9mKG1kNSkgPT09IC0xO1xuICAgIH1cbiAgfSk7XG4gIGZvciAobGV0IGFwayBvZiBhcGtzKSB7XG4gICAgbG9nZ2VyLmluZm8oYFdpbGwgcmVtb3ZlICR7YXBrfWApO1xuICAgIGF3YWl0IGFkYi5zaGVsbChbJ3JtJywgYXBrXSk7XG4gIH1cbn07XG5cbmhlbHBlcnMuaW5pdFVuaWNvZGVLZXlib2FyZCA9IGFzeW5jIGZ1bmN0aW9uIChhZGIpIHtcbiAgbG9nZ2VyLmRlYnVnKCdFbmFibGluZyBVbmljb2RlIGtleWJvYXJkIHN1cHBvcnQnKTtcbiAgbG9nZ2VyLmRlYnVnKFwiUHVzaGluZyB1bmljb2RlIGltZSB0byBkZXZpY2UuLi5cIik7XG4gIGF3YWl0IGFkYi5pbnN0YWxsKHVuaWNvZGVJTUVQYXRoLCBmYWxzZSk7XG5cbiAgLy8gZ2V0IHRoZSBkZWZhdWx0IElNRSBzbyB3ZSBjYW4gcmV0dXJuIGJhY2sgdG8gaXQgbGF0ZXIgaWYgd2Ugd2FudFxuICBsZXQgZGVmYXVsdElNRSA9IGF3YWl0IGFkYi5kZWZhdWx0SU1FKCk7XG5cbiAgbG9nZ2VyLmRlYnVnKGBVbnNldHRpbmcgcHJldmlvdXMgSU1FICR7ZGVmYXVsdElNRX1gKTtcbiAgY29uc3QgYXBwaXVtSU1FID0gJ2lvLmFwcGl1bS5hbmRyb2lkLmltZS8uVW5pY29kZUlNRSc7XG4gIGxvZ2dlci5kZWJ1ZyhgU2V0dGluZyBJTUUgdG8gJyR7YXBwaXVtSU1FfSdgKTtcbiAgYXdhaXQgYWRiLmVuYWJsZUlNRShhcHBpdW1JTUUpO1xuICBhd2FpdCBhZGIuc2V0SU1FKGFwcGl1bUlNRSk7XG4gIHJldHVybiBkZWZhdWx0SU1FO1xufTtcblxuaGVscGVycy5wdXNoU2V0dGluZ3NBcHAgPSBhc3luYyBmdW5jdGlvbiAoYWRiKSB7XG4gIGxvZ2dlci5kZWJ1ZyhcIlB1c2hpbmcgc2V0dGluZ3MgYXBrIHRvIGRldmljZS4uLlwiKTtcbiAgYXdhaXQgYWRiLmluc3RhbGwoc2V0dGluZ3NBcGtQYXRoLCBmYWxzZSk7XG59O1xuXG5oZWxwZXJzLnB1c2hVbmxvY2sgPSBhc3luYyBmdW5jdGlvbiAoYWRiKSB7XG4gIGxvZ2dlci5kZWJ1ZyhcIlB1c2hpbmcgdW5sb2NrIGhlbHBlciBhcHAgdG8gZGV2aWNlLi4uXCIpO1xuICBhd2FpdCBhZGIuaW5zdGFsbCh1bmxvY2tBcGtQYXRoLCBmYWxzZSk7XG59O1xuXG4vLyBwdXNoU3RyaW5ncyBtZXRob2QgZXh0cmFjdHMgc3RyaW5nLnhtbCBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nLmpzb24gYW5kIHB1c2hlc1xuLy8gaXQgdG8gL2RhdGEvbG9jYWwvdG1wL3N0cmluZy5qc29uIG9uIGZvciB1c2Ugb2YgYm9vdHN0cmFwXG4vLyBpZiBhcHAgaXMgbm90IHByZXNlbnQgdG8gZXh0cmFjdCBzdHJpbmcueG1sIGl0IGRlbGV0ZXMgcmVtb3RlIHN0cmluZ3MuanNvblxuLy8gaWYgYXBwIGRvZXMgbm90IGhhdmUgc3RyaW5ncy54bWwgd2UgcHVzaCBhbiBlbXB0eSBqc29uIG9iamVjdCB0byByZW1vdGVcbmhlbHBlcnMucHVzaFN0cmluZ3MgPSBhc3luYyBmdW5jdGlvbiAobGFuZ3VhZ2UsIGFkYiwgb3B0cykge1xuICBsZXQgcmVtb3RlUGF0aCA9ICcvZGF0YS9sb2NhbC90bXAnO1xuICBsZXQgc3RyaW5nc0pzb24gPSAnc3RyaW5ncy5qc29uJztcbiAgbGV0IHN0cmluZ3NUbXBEaXIgPSBwYXRoLnJlc29sdmUob3B0cy50bXBEaXIsIG9wdHMuYXBwUGFja2FnZSk7XG4gIHRyeSB7XG4gICAgbG9nZ2VyLmRlYnVnKCdFeHRyYWN0aW5nIHN0cmluZ3MgZnJvbSBhcGsnLCBvcHRzLmFwcCwgbGFuZ3VhZ2UsIHN0cmluZ3NUbXBEaXIpO1xuICAgIGxldCB7YXBrU3RyaW5ncywgbG9jYWxQYXRofSA9IGF3YWl0IGFkYi5leHRyYWN0U3RyaW5nc0Zyb21BcGsoXG4gICAgICAgICAgb3B0cy5hcHAsIGxhbmd1YWdlLCBzdHJpbmdzVG1wRGlyKTtcbiAgICB0aGlzLmFwa1N0cmluZ3NbbGFuZ3VhZ2VdID0gYXBrU3RyaW5ncztcbiAgICBhd2FpdCB0aGlzLmFkYi5wdXNoKGxvY2FsUGF0aCwgcmVtb3RlUGF0aCk7XG4gICAgcmV0dXJuIGFwa1N0cmluZ3M7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICghKGF3YWl0IGZzLmV4aXN0cyhvcHRzLmFwcCkpKSB7XG4gICAgICAvLyBkZWxldGUgcmVtb3RlIHN0cmluZy5qc29uIGlmIHByZXNlbnRcbiAgICAgIGF3YWl0IGFkYi5yaW1yYWYoYCR7cmVtb3RlUGF0aH0vJHtzdHJpbmdzSnNvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLndhcm4oXCJDb3VsZCBub3QgZ2V0IHN0cmluZ3MsIGNvbnRpbnVpbmcgYW55d2F5XCIpO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBgJHtyZW1vdGVQYXRofS8ke3N0cmluZ3NKc29ufWA7XG4gICAgICBhd2FpdCBhZGIuc2hlbGwoJ2VjaG8nLCBbYCd7fScgPiAke3JlbW90ZUZpbGV9YF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge307XG59O1xuXG5oZWxwZXJzLnVubG9jayA9IGFzeW5jIGZ1bmN0aW9uIChhZGIpIHtcbiAgaWYgKCEoYXdhaXQgYWRiLmlzU2NyZWVuTG9ja2VkKCkpKSB7XG4gICAgbG9nZ2VyLmluZm8oXCJTY3JlZW4gYWxyZWFkeSB1bmxvY2tlZCwgZG9pbmcgbm90aGluZ1wiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbG9nZ2VyLmluZm8oXCJVbmxvY2tpbmcgc2NyZWVuXCIpO1xuXG4gIGF3YWl0IHJldHJ5SW50ZXJ2YWwoMTAsIDEwMDAsIGFzeW5jICgpID0+IHtcbiAgICBsb2dnZXIuZGVidWcoXCJTY3JlZW4gaXMgbG9ja2VkLCB0cnlpbmcgdG8gdW5sb2NrXCIpO1xuICAgIGF3YWl0IGFkYi5zdGFydEFwcCh7XG4gICAgICBwa2c6IFwiaW8uYXBwaXVtLnVubG9ja1wiLFxuICAgICAgYWN0aXZpdHk6IFwiLlVubG9ja1wiLFxuICAgICAgYWN0aW9uOiBcImFuZHJvaWQuaW50ZW50LmFjdGlvbi5NQUlOXCIsXG4gICAgICBjYXRlZ29yeTogXCJhbmRyb2lkLmludGVudC5jYXRlZ29yeS5MQVVOQ0hFUlwiLFxuICAgICAgZmxhZ3M6IFwiMHgxMDIwMDAwMFwiXG4gICAgfSk7XG4gICAgaWYgKCFhd2FpdCBhZGIuaXNTY3JlZW5Mb2NrZWQoKSkge1xuICAgICAgbG9nZ2VyLmRlYnVnKFwiU2NyZWVuIHVubG9ja2VkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NyZWVuIGRpZCBub3QgdW5sb2NrIHN1Y2Nlc3NmdWxseSwgcmV0cnlpbmdcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmhlbHBlcnMuaW5pdERldmljZSA9IGFzeW5jIGZ1bmN0aW9uIChhZGIsIG9wdHMpIHtcbiAgaWYgKG9wdHMuYXZkKSB7XG4gICAgYXdhaXQgaGVscGVycy5wcmVwYXJlRW11bGF0b3IoYWRiLCBvcHRzKTtcbiAgfVxuICBsZXQge2RldmljZUlkLCBlbVBvcnR9ID0gYXdhaXQgaGVscGVycy5nZXRBY3RpdmVEZXZpY2UoYWRiLCBvcHRzLnVkaWQpO1xuICBhZGIuc2V0RGV2aWNlSWQoZGV2aWNlSWQpO1xuICBpZiAoZW1Qb3J0KSB7XG4gICAgYWRiLnNldEVtdWxhdG9yUG9ydChlbVBvcnQpO1xuICB9XG5cbiAgYXdhaXQgYWRiLndhaXRGb3JEZXZpY2UoKTtcbiAgYXdhaXQgaGVscGVycy5lbnN1cmVEZXZpY2VMb2NhbGUoYWRiLCBvcHRzLmxhbmd1YWdlLCBvcHRzLmxvY2FsZSk7XG4gIGF3YWl0IGFkYi5zdGFydExvZ2NhdCgpO1xuICBsZXQgZGVmYXVsdElNRTtcbiAgaWYgKG9wdHMudW5pY29kZUtleWJvYXJkKSB7XG4gICAgZGVmYXVsdElNRSA9IGF3YWl0IGhlbHBlcnMuaW5pdFVuaWNvZGVLZXlib2FyZChhZGIpO1xuICB9XG4gIGF3YWl0IGhlbHBlcnMucHVzaFNldHRpbmdzQXBwKGFkYik7XG4gIGF3YWl0IGhlbHBlcnMucHVzaFVubG9jayhhZGIpO1xuICByZXR1cm4gZGVmYXVsdElNRTtcbn07XG5cbmhlbHBlcnMucmVtb3ZlTnVsbFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBvZiBfLmtleXMob2JqKSkge1xuICAgIGlmIChfLmlzTnVsbChvYmpba2V5XSkgfHwgXy5pc1VuZGVmaW5lZChvYmpba2V5XSkpIHtcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbn07XG5cbmhlbHBlcnMudHJ1bmNhdGVEZWNpbWFscyA9IGZ1bmN0aW9uIChudW1iZXIsIGRpZ2l0cykge1xuICBsZXQgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdHMpLFxuICAgICAgYWRqdXN0ZWROdW0gPSBudW1iZXIgKiBtdWx0aXBsaWVyLFxuICAgICAgdHJ1bmNhdGVkTnVtID0gTWF0aFthZGp1c3RlZE51bSA8IDAgPyAnY2VpbCcgOiAnZmxvb3InXShhZGp1c3RlZE51bSk7XG5cbiAgcmV0dXJuIHRydW5jYXRlZE51bSAvIG11bHRpcGxpZXI7XG59O1xuXG5oZWxwZXJzLmlzQ2hyb21lQnJvd3NlciA9IGZ1bmN0aW9uIChicm93c2VyKSB7XG4gIHJldHVybiBfLmNvbnRhaW5zKENIUk9NRV9CUk9XU0VSUywgYnJvd3Nlcik7XG59O1xuXG5oZWxwZXJzLmdldENocm9tZVBrZyA9IGZ1bmN0aW9uIChicm93c2VyKSB7XG4gIGxldCBwa2csIGFjdDtcblxuICBicm93c2VyID0gYnJvd3Nlci50b0xvd2VyQ2FzZSgpO1xuICBpZiAoYnJvd3NlciA9PT0gXCJjaHJvbWl1bVwiKSB7XG4gICAgcGtnID0gXCJvcmcuY2hyb21pdW0uY2hyb21lLnNoZWxsXCI7XG4gICAgYWN0ID0gXCIuQ2hyb21lU2hlbGxBY3Rpdml0eVwiO1xuICB9IGVsc2UgaWYgKGJyb3dzZXIgPT09IFwiY2hyb21lYmV0YVwiKSB7XG4gICAgcGtnID0gXCJjb20uY2hyb21lLmJldGFcIjtcbiAgICBhY3QgPSBcImNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmNocm9tZS5NYWluXCI7XG4gIH0gZWxzZSBpZiAoYnJvd3NlciA9PT0gXCJicm93c2VyXCIpIHtcbiAgICBwa2cgPSBcImNvbS5hbmRyb2lkLmJyb3dzZXJcIjtcbiAgICBhY3QgPSBcImNvbS5hbmRyb2lkLmJyb3dzZXIuQnJvd3NlckFjdGl2aXR5XCI7XG4gIH0gZWxzZSB7XG4gICAgcGtnID0gXCJjb20uYW5kcm9pZC5jaHJvbWVcIjtcbiAgICBhY3QgPSBcImNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLmNocm9tZS5NYWluXCI7XG4gIH1cbiAgcmV0dXJuIHtwa2csIGFjdGl2aXR5OiBhY3R9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVycztcbmV4cG9ydCB7IENIUk9NRV9CUk9XU0VSUyB9O1xuIl19