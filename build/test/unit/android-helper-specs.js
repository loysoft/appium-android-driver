'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _libAndroidHelpers = require('../../lib/android-helpers');

var _libAndroidHelpers2 = _interopRequireDefault(_libAndroidHelpers);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _appiumTestSupport = require('appium-test-support');

var _teen_process = require('teen_process');

var teen_process = _interopRequireWildcard(_teen_process);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _appiumSupport = require('appium-support');

var _ioAppiumSettings = require('io.appium.settings');

var _appiumUnlock = require('appium-unlock');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var should = _chai2['default'].should(),
    REMOTE_TEMP_PATH = "/data/local/tmp";
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Android Helpers', function () {
  var adb = new _appiumAdb2['default']();

  describe('parseJavaVersion', function () {
    it('should correctly parse java version', function () {
      _libAndroidHelpers2['default'].parseJavaVersion('java version "1.8.0_40"\n        Java(TM) SE Runtime Environment (build 1.8.0_40-b27)').should.be.equal("1.8.0_40");
    });
    it('should return null if it cannot parse java verstion', function () {
      should.not.exist(_libAndroidHelpers2['default'].parseJavaVersion('foo bar'));
    });
    it('should parse OpenJDK versioning', function () {
      _libAndroidHelpers2['default'].parseJavaVersion('openjdk version 1.8').should.be.equal('1.8');
    });
  });

  describe('getJavaVersion', (0, _appiumTestSupport.withMocks)({ teen_process: teen_process }, function (mocks) {
    it('should correctly get java version', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.teen_process.expects('exec').withExactArgs('java', ['-version']).returns({ stderr: 'java version "1.8.0_40"' });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getJavaVersion());

          case 3:
            context$3$0.sent.should.equal('1.8.0_40');

            mocks.teen_process.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return null if it cannot parse java verstion', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.teen_process.expects('exec').withExactArgs('java', ['-version']).returns({ stderr: 'foo bar' });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getJavaVersion().should.eventually.be.rejectedWith('Java'));

          case 3:
            mocks.teen_process.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('prepareEmulator', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    var opts = { avd: "foo@bar", avdArgs: "", language: "en", locale: "us" };
    it('should not launch avd if one is already running', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getRunningAVD').withExactArgs('foobar').returns("foo");
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].prepareEmulator(adb, opts));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should launch avd if one is already running', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getRunningAVD').withExactArgs('foobar').returns(null);
            mocks.adb.expects('launchAVD').withExactArgs('foo@bar', '', 'en', 'us', undefined, undefined).returns("");
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].prepareEmulator(adb, opts));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('ensureDeviceLocale', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should return if language and locale are not passed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDeviceLanguage').never();
            mocks.adb.expects('getDeviceCountry').never();
            mocks.adb.expects('setDeviceLanguage').never();
            mocks.adb.expects('setDeviceCountry').never();
            mocks.adb.expects('reboot').never();
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].ensureDeviceLocale(adb));

          case 7:
            mocks.adb.verify();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should not set language and locale if it does not change', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDeviceLanguage').returns('en');
            mocks.adb.expects('getDeviceCountry').returns('us');
            mocks.adb.expects('setDeviceLanguage').never();
            mocks.adb.expects('setDeviceCountry').never();
            mocks.adb.expects('reboot').never();
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].ensureDeviceLocale(adb, 'en', 'us'));

          case 7:
            mocks.adb.verify();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should set language and locale if they are different', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDeviceLanguage').returns('fr');
            mocks.adb.expects('getDeviceCountry').returns('FR');
            mocks.adb.expects('setDeviceLanguage').withExactArgs('en').returns("");
            mocks.adb.expects('setDeviceCountry').withExactArgs('us').returns("");
            mocks.adb.expects('reboot').returns(null);
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].ensureDeviceLocale(adb, 'en', 'us'));

          case 7:
            mocks.adb.verify();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('getActiveDevice', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should throw error when udid not in list', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDevicesWithRetry').withExactArgs().returns(["foo"]);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getActiveDevice(adb, "bar").should.eventually.be.rejectedWith("bar"));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get deviceId and emPort when udid is present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDevicesWithRetry').withExactArgs().returns([{ udid: 'emulator-1234' }]);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getActiveDevice(adb, "emulator-1234"));

          case 3:
            context$3$0.t0 = { deviceId: 'emulator-1234', emPort: 1234 };
            context$3$0.sent.should.deep.equal(context$3$0.t0);

            mocks.adb.verify();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get first deviceId and emPort', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('getDevicesWithRetry').withExactArgs().returns([{ udid: 'emulator-1234' }, { udid: 'emulator2-2345' }]);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getActiveDevice(adb));

          case 3:
            context$3$0.t0 = { deviceId: 'emulator-1234', emPort: 1234 };
            context$3$0.sent.should.deep.equal(context$3$0.t0);

            mocks.adb.verify();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('getLaunchInfoFromManifest', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should return when no app present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('packageAndLaunchActivityFromManifest').never();
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getLaunchInfo(adb, {}));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return when appPackage & appActivity are already present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('packageAndLaunchActivityFromManifest').never();
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getLaunchInfo(adb, { app: "foo", appPackage: "bar",
              appActivity: "act" }));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return package and launch activity from manifest', function callee$2$0() {
      var result;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('packageAndLaunchActivityFromManifest').withExactArgs('foo').returns({ apkPackage: 'pkg', apkActivity: 'ack' });
            result = { appPackage: 'pkg', appWaitPackage: 'pkg',
              appActivity: 'ack', appWaitActivity: 'ack' };
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].getLaunchInfo(adb, { app: "foo" }));

          case 4:
            context$3$0.t0 = result;
            context$3$0.sent.should.deep.equal(context$3$0.t0);

            mocks.adb.verify();

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('getRemoteApkPath', function () {
    it('should return remote path', function () {
      _libAndroidHelpers2['default'].getRemoteApkPath('foo').should.equal(_path2['default'].resolve(REMOTE_TEMP_PATH, 'foo.apk'));
    });
  });
  describe('resetApp', (0, _appiumTestSupport.withMocks)({ adb: adb, fs: _appiumSupport.fs, helpers: _libAndroidHelpers2['default'] }, function (mocks) {
    var localApkPath = 'local',
        pkg = 'pkg';
    it('should throw error if remote file does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects('md5').withExactArgs(localApkPath).returns('apkmd5');
            mocks.adb.expects('fileExists').returns(false);
            mocks.helpers.expects('reinstallRemoteApk').never();
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].resetApp(adb, localApkPath, pkg, false).should.eventually.be.rejectedWith('slow'));

          case 5:
            mocks.adb.verify();
            mocks.fs.verify();
            mocks.helpers.verify();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should throw error if remote file does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects('md5').withExactArgs(localApkPath).returns('apkmd5');
            mocks.adb.expects('fileExists').returns(true);
            mocks.helpers.expects('reinstallRemoteApk').once().returns('');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].resetApp(adb, localApkPath, pkg, false));

          case 5:
            mocks.adb.verify();
            mocks.fs.verify();
            mocks.helpers.verify();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));

  describe.skip('reinstallRemoteApk', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    var localApkPath = 'local',
        pkg = 'pkg',
        remotePath = 'remote';
    it('should throw error if remote file does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('uninstallApk').withExactArgs(pkg).returns('');
            // install remote is not defines do we mean installApkRemotely?
            mocks.adb.expects('installRemote').withExactArgs(remotePath).returns('');
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].reinstallRemoteApk(adb, localApkPath, pkg, remotePath));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('installApkRemotely', (0, _appiumTestSupport.withMocks)({ adb: adb, fs: _appiumSupport.fs, helpers: _libAndroidHelpers2['default'] }, function (mocks) {
    var localApkPath = 'local',
        pkg = 'pkg';
    it('should reset app if already installed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects('md5').withExactArgs(localApkPath).returns('apkmd5');
            mocks.helpers.expects('getRemoteApkPath').returns(false);
            mocks.adb.expects('fileExists').returns(true);
            mocks.adb.expects('isAppInstalled').returns(true);
            mocks.helpers.expects('resetApp').once().returns("");
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].installApkRemotely(adb, localApkPath, pkg, true));

          case 7:
            mocks.adb.verify();
            mocks.fs.verify();
            mocks.helpers.verify();

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it.skip('should push and reinstall apk when apk is not installed', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.fs.expects('md5').withExactArgs(localApkPath).returns('apkmd5');
            mocks.helpers.expects('getRemoteApkPath').returns(true);
            mocks.adb.expects('fileExists').returns(true);
            mocks.adb.expects('isAppInstalled').returns(true);
            mocks.helpers.expects('resetApp').once().returns("");
            mocks.helpers.expects('reinstallRemoteApk').once().returns("");
            mocks.helpers.expects('removeTempApks').once().returns(true);
            mocks.adb.expects('mkdir').once().returns("");
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].installApkRemotely(adb, localApkPath, pkg, true));

          case 10:
            mocks.adb.verify();
            mocks.fs.verify();
            mocks.helpers.verify();

          case 13:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('removeRemoteApks', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should return when no apks present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('ls').returns([]);
            mocks.adb.expects('shell').never();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].removeRemoteApks(adb));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should return when only exceptMd5s are present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('ls').returns(['foo']);
            mocks.adb.expects('shell').never();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].removeRemoteApks(adb, ['foo']));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should remove all remote apks', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('ls').returns(['foo']);
            mocks.adb.expects('shell').once().returns('');
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].removeRemoteApks(adb, ['bar']));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('initUnicodeKeyboard', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should install and enable unicodeIME', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('install').once().returns('');
            mocks.adb.expects('defaultIME').once().returns('defaultIME');
            mocks.adb.expects('enableIME').once().returns('');
            mocks.adb.expects('setIME').once().returns('');
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].initUnicodeKeyboard(adb));

          case 6:
            mocks.adb.verify();

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('pushSettingsApp', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should install settingsApp', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('install').withExactArgs(_ioAppiumSettings.path, false).once().returns('');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].pushSettingsApp(adb));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('pushUnlock', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should install unlockApp', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('install').withExactArgs(_appiumUnlock.path, false).once().returns('');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].pushUnlock(adb));

          case 3:
            mocks.adb.verify();

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('unlock', (0, _appiumTestSupport.withMocks)({ adb: adb }, function (mocks) {
    it('should return if screen is already unlocked', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('isScreenLocked').withExactArgs().once().returns(false);
            mocks.adb.expects('startApp').never();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].unlock(adb));

          case 4:
            mocks.adb.verify();

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should start unlock app', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            mocks.adb.expects('isScreenLocked').onCall(0).returns(true);
            mocks.adb.expects('isScreenLocked').returns(false);
            mocks.adb.expects('startApp').once().returns('');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(_libAndroidHelpers2['default'].unlock(adb));

          case 5:
            mocks.adb.verify();

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  }));
  describe('removeNullProperties', function () {
    it('should ignore null properties', function callee$2$0() {
      var test;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            test = { foo: null, bar: true };

            _libAndroidHelpers2['default'].removeNullProperties(test);
            _lodash2['default'].keys(test).length.should.equal(1);

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should ignore undefined properties', function callee$2$0() {
      var test;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            test = { foo: undefined, bar: true };

            _libAndroidHelpers2['default'].removeNullProperties(test);
            _lodash2['default'].keys(test).length.should.equal(1);

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should not ignore falsy properties like 0 and false', function callee$2$0() {
      var test;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            test = { foo: false, bar: true, zero: 0 };

            _libAndroidHelpers2['default'].removeNullProperties(test);
            _lodash2['default'].keys(test).length.should.equal(3);

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9hbmRyb2lkLWhlbHBlci1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztpQ0FDekIsMkJBQTJCOzs7O3lCQUMvQixZQUFZOzs7O2lDQUNGLHFCQUFxQjs7NEJBQ2pCLGNBQWM7O0lBQWhDLFlBQVk7O29CQUNQLE1BQU07Ozs7NkJBQ0osZ0JBQWdCOztnQ0FDSyxvQkFBb0I7OzRCQUN0QixlQUFlOztzQkFDdkMsUUFBUTs7OztBQUV0QixJQUFNLE1BQU0sR0FBRyxrQkFBSyxNQUFNLEVBQUU7SUFDdEIsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7QUFDM0Msa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFlBQU07QUFDaEMsTUFBSSxHQUFHLEdBQUcsNEJBQVMsQ0FBQzs7QUFFcEIsVUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQU07QUFDakMsTUFBRSxDQUFDLHFDQUFxQyxFQUFFLFlBQU07QUFDOUMscUNBQVEsZ0JBQWdCLHlGQUNnQyxDQUFDLE1BQU0sQ0FDNUQsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMscURBQXFELEVBQUUsWUFBTTtBQUM5RCxZQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBUSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3ZELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxpQ0FBaUMsRUFBRSxZQUFZO0FBQ2hELHFDQUFRLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxrQ0FBVSxFQUFDLFlB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QW9DLEVBQUU7VUFDbkMsSUFBSTs7OztBQUFKLGdCQUFJLEdBQUcsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUM7O0FBQ3RDLDJDQUFRLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLGdDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztLQUNyQyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMscURBQXFELEVBQUU7VUFDcEQsSUFBSTs7OztBQUFKLGdCQUFJLEdBQUcsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQzs7QUFDM0MsMkNBQVEsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsZ0NBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0tBQ3JDLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvYW5kcm9pZC1oZWxwZXItc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2xpYi9hbmRyb2lkLWhlbHBlcnMnO1xuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcbmltcG9ydCB7IHdpdGhNb2NrcyB9IGZyb20gJ2FwcGl1bS10ZXN0LXN1cHBvcnQnO1xuaW1wb3J0ICogYXMgdGVlbl9wcm9jZXNzIGZyb20gJ3RlZW5fcHJvY2Vzcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZzIH0gZnJvbSAnYXBwaXVtLXN1cHBvcnQnO1xuaW1wb3J0IHsgcGF0aCBhcyBzZXR0aW5nc0Fwa1BhdGggfSBmcm9tICdpby5hcHBpdW0uc2V0dGluZ3MnO1xuaW1wb3J0IHsgcGF0aCBhcyB1bmxvY2tBcGtQYXRoIH0gZnJvbSAnYXBwaXVtLXVubG9jayc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBzaG91bGQgPSBjaGFpLnNob3VsZCgpLFxuICAgICAgUkVNT1RFX1RFTVBfUEFUSCA9IFwiL2RhdGEvbG9jYWwvdG1wXCI7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmRlc2NyaWJlKCdBbmRyb2lkIEhlbHBlcnMnLCAoKSA9PiB7XG4gIGxldCBhZGIgPSBuZXcgQURCKCk7XG5cbiAgZGVzY3JpYmUoJ3BhcnNlSmF2YVZlcnNpb24nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBjb3JyZWN0bHkgcGFyc2UgamF2YSB2ZXJzaW9uJywgKCkgPT4ge1xuICAgICAgaGVscGVycy5wYXJzZUphdmFWZXJzaW9uKGBqYXZhIHZlcnNpb24gXCIxLjguMF80MFwiXG4gICAgICAgIEphdmEoVE0pIFNFIFJ1bnRpbWUgRW52aXJvbm1lbnQgKGJ1aWxkIDEuOC4wXzQwLWIyNylgKS5zaG91bGRcbiAgICAgICAgLmJlLmVxdWFsKFwiMS44LjBfNDBcIik7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gbnVsbCBpZiBpdCBjYW5ub3QgcGFyc2UgamF2YSB2ZXJzdGlvbicsICgpID0+IHtcbiAgICAgIHNob3VsZC5ub3QuZXhpc3QoaGVscGVycy5wYXJzZUphdmFWZXJzaW9uKCdmb28gYmFyJykpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcGFyc2UgT3BlbkpESyB2ZXJzaW9uaW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGVscGVycy5wYXJzZUphdmFWZXJzaW9uKCdvcGVuamRrIHZlcnNpb24gMS44Jykuc2hvdWxkLmJlLmVxdWFsKCcxLjgnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2dldEphdmFWZXJzaW9uJywgd2l0aE1vY2tzKHt0ZWVuX3Byb2Nlc3N9LCAobW9ja3MpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNvcnJlY3RseSBnZXQgamF2YSB2ZXJzaW9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MudGVlbl9wcm9jZXNzLmV4cGVjdHMoJ2V4ZWMnKS53aXRoRXhhY3RBcmdzKCdqYXZhJywgWyctdmVyc2lvbiddKVxuICAgICAgICAucmV0dXJucyh7c3RkZXJyOiAnamF2YSB2ZXJzaW9uIFwiMS44LjBfNDBcIid9KTtcbiAgICAgIChhd2FpdCBoZWxwZXJzLmdldEphdmFWZXJzaW9uKCkpLnNob3VsZC5lcXVhbCgnMS44LjBfNDAnKTtcbiAgICAgIG1vY2tzLnRlZW5fcHJvY2Vzcy52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBudWxsIGlmIGl0IGNhbm5vdCBwYXJzZSBqYXZhIHZlcnN0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MudGVlbl9wcm9jZXNzLmV4cGVjdHMoJ2V4ZWMnKS53aXRoRXhhY3RBcmdzKCdqYXZhJywgWyctdmVyc2lvbiddKVxuICAgICAgICAucmV0dXJucyh7c3RkZXJyOiAnZm9vIGJhcid9KTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0SmF2YVZlcnNpb24oKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoJ0phdmEnKTtcbiAgICAgIG1vY2tzLnRlZW5fcHJvY2Vzcy52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSkpO1xuICBkZXNjcmliZSgncHJlcGFyZUVtdWxhdG9yJywgd2l0aE1vY2tzKHthZGJ9LCAobW9ja3MpID0+IHtcbiAgICBjb25zdCBvcHRzID0ge2F2ZDogXCJmb29AYmFyXCIsIGF2ZEFyZ3M6IFwiXCIsIGxhbmd1YWdlOiBcImVuXCIsIGxvY2FsZTogXCJ1c1wifTtcbiAgICBpdCgnc2hvdWxkIG5vdCBsYXVuY2ggYXZkIGlmIG9uZSBpcyBhbHJlYWR5IHJ1bm5pbmcnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZ2V0UnVubmluZ0FWRCcpLndpdGhFeGFjdEFyZ3MoJ2Zvb2JhcicpXG4gICAgICAgIC5yZXR1cm5zKFwiZm9vXCIpO1xuICAgICAgYXdhaXQgaGVscGVycy5wcmVwYXJlRW11bGF0b3IoYWRiLCBvcHRzKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGxhdW5jaCBhdmQgaWYgb25lIGlzIGFscmVhZHkgcnVubmluZycsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdnZXRSdW5uaW5nQVZEJykud2l0aEV4YWN0QXJncygnZm9vYmFyJylcbiAgICAgICAgLnJldHVybnMobnVsbCk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnbGF1bmNoQVZEJykud2l0aEV4YWN0QXJncygnZm9vQGJhcicsICcnLCAnZW4nLCAndXMnLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZClcbiAgICAgICAgLnJldHVybnMoXCJcIik7XG4gICAgICBhd2FpdCBoZWxwZXJzLnByZXBhcmVFbXVsYXRvcihhZGIsIG9wdHMpO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICB9KSk7XG4gIGRlc2NyaWJlKCdlbnN1cmVEZXZpY2VMb2NhbGUnLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIGlmIGxhbmd1YWdlIGFuZCBsb2NhbGUgYXJlIG5vdCBwYXNzZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZ2V0RGV2aWNlTGFuZ3VhZ2UnKS5uZXZlcigpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2dldERldmljZUNvdW50cnknKS5uZXZlcigpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3NldERldmljZUxhbmd1YWdlJykubmV2ZXIoKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdzZXREZXZpY2VDb3VudHJ5JykubmV2ZXIoKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdyZWJvb3QnKS5uZXZlcigpO1xuICAgICAgYXdhaXQgaGVscGVycy5lbnN1cmVEZXZpY2VMb2NhbGUoYWRiKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIG5vdCBzZXQgbGFuZ3VhZ2UgYW5kIGxvY2FsZSBpZiBpdCBkb2VzIG5vdCBjaGFuZ2UnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZ2V0RGV2aWNlTGFuZ3VhZ2UnKS5yZXR1cm5zKCdlbicpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2dldERldmljZUNvdW50cnknKS5yZXR1cm5zKCd1cycpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3NldERldmljZUxhbmd1YWdlJykubmV2ZXIoKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdzZXREZXZpY2VDb3VudHJ5JykubmV2ZXIoKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdyZWJvb3QnKS5uZXZlcigpO1xuICAgICAgYXdhaXQgaGVscGVycy5lbnN1cmVEZXZpY2VMb2NhbGUoYWRiLCAnZW4nLCAndXMnKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHNldCBsYW5ndWFnZSBhbmQgbG9jYWxlIGlmIHRoZXkgYXJlIGRpZmZlcmVudCcsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdnZXREZXZpY2VMYW5ndWFnZScpLnJldHVybnMoJ2ZyJyk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZ2V0RGV2aWNlQ291bnRyeScpLnJldHVybnMoJ0ZSJyk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnc2V0RGV2aWNlTGFuZ3VhZ2UnKS53aXRoRXhhY3RBcmdzKCdlbicpXG4gICAgICAgIC5yZXR1cm5zKFwiXCIpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3NldERldmljZUNvdW50cnknKS53aXRoRXhhY3RBcmdzKCd1cycpXG4gICAgICAgIC5yZXR1cm5zKFwiXCIpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3JlYm9vdCcpLnJldHVybnMobnVsbCk7XG4gICAgICBhd2FpdCBoZWxwZXJzLmVuc3VyZURldmljZUxvY2FsZShhZGIsICdlbicsICd1cycpO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICB9KSk7XG4gIGRlc2NyaWJlKCdnZXRBY3RpdmVEZXZpY2UnLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3Igd2hlbiB1ZGlkIG5vdCBpbiBsaXN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2dldERldmljZXNXaXRoUmV0cnknKS53aXRoRXhhY3RBcmdzKClcbiAgICAgICAgLnJldHVybnMoW1wiZm9vXCJdKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0QWN0aXZlRGV2aWNlKGFkYiwgXCJiYXJcIikuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmJlLnJlamVjdGVkV2l0aChcImJhclwiKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdldCBkZXZpY2VJZCBhbmQgZW1Qb3J0IHdoZW4gdWRpZCBpcyBwcmVzZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2dldERldmljZXNXaXRoUmV0cnknKS53aXRoRXhhY3RBcmdzKClcbiAgICAgICAgLnJldHVybnMoW3t1ZGlkOiAnZW11bGF0b3ItMTIzNCd9XSk7XG4gICAgICAoYXdhaXQgaGVscGVycy5nZXRBY3RpdmVEZXZpY2UoYWRiLCBcImVtdWxhdG9yLTEyMzRcIikpLnNob3VsZC5kZWVwXG4gICAgICAgIC5lcXVhbCh7IGRldmljZUlkOiAnZW11bGF0b3ItMTIzNCcsIGVtUG9ydDogMTIzNCB9KTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdldCBmaXJzdCBkZXZpY2VJZCBhbmQgZW1Qb3J0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2dldERldmljZXNXaXRoUmV0cnknKS53aXRoRXhhY3RBcmdzKClcbiAgICAgICAgLnJldHVybnMoW3t1ZGlkOiAnZW11bGF0b3ItMTIzNCd9LCB7dWRpZDogJ2VtdWxhdG9yMi0yMzQ1J31dKTtcbiAgICAgIChhd2FpdCBoZWxwZXJzLmdldEFjdGl2ZURldmljZShhZGIpKS5zaG91bGQuZGVlcFxuICAgICAgICAuZXF1YWwoeyBkZXZpY2VJZDogJ2VtdWxhdG9yLTEyMzQnLCBlbVBvcnQ6IDEyMzQgfSk7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgZGVzY3JpYmUoJ2dldExhdW5jaEluZm9Gcm9tTWFuaWZlc3QnLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHdoZW4gbm8gYXBwIHByZXNlbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygncGFja2FnZUFuZExhdW5jaEFjdGl2aXR5RnJvbU1hbmlmZXN0JykubmV2ZXIoKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0TGF1bmNoSW5mbyhhZGIsIHt9KTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHJldHVybiB3aGVuIGFwcFBhY2thZ2UgJiBhcHBBY3Rpdml0eSBhcmUgYWxyZWFkeSBwcmVzZW50JyxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3BhY2thZ2VBbmRMYXVuY2hBY3Rpdml0eUZyb21NYW5pZmVzdCcpLm5ldmVyKCk7XG4gICAgICAgIGF3YWl0IGhlbHBlcnMuZ2V0TGF1bmNoSW5mbyhhZGIsIHthcHA6IFwiZm9vXCIsIGFwcFBhY2thZ2U6IFwiYmFyXCIsXG4gICAgICAgICAgYXBwQWN0aXZpdHk6IFwiYWN0XCJ9KTtcbiAgICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHBhY2thZ2UgYW5kIGxhdW5jaCBhY3Rpdml0eSBmcm9tIG1hbmlmZXN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3BhY2thZ2VBbmRMYXVuY2hBY3Rpdml0eUZyb21NYW5pZmVzdCcpLndpdGhFeGFjdEFyZ3MoJ2ZvbycpXG4gICAgICAgIC5yZXR1cm5zKHthcGtQYWNrYWdlOiAncGtnJywgYXBrQWN0aXZpdHk6ICdhY2snfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSB7IGFwcFBhY2thZ2U6ICdwa2cnLCBhcHBXYWl0UGFja2FnZTogJ3BrZycsXG4gICAgICAgICAgICAgICAgICAgICAgIGFwcEFjdGl2aXR5OiAnYWNrJywgYXBwV2FpdEFjdGl2aXR5OiAnYWNrJyB9O1xuICAgICAgKGF3YWl0IGhlbHBlcnMuZ2V0TGF1bmNoSW5mbyhhZGIsIHthcHA6IFwiZm9vXCJ9KSkuc2hvdWxkLmRlZXBcbiAgICAgICAgLmVxdWFsKHJlc3VsdCk7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgZGVzY3JpYmUoJ2dldFJlbW90ZUFwa1BhdGgnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gcmVtb3RlIHBhdGgnLCAoKSA9PiB7XG4gICAgICBoZWxwZXJzLmdldFJlbW90ZUFwa1BhdGgoJ2ZvbycpLnNob3VsZC5lcXVhbChwYXRoLnJlc29sdmUoUkVNT1RFX1RFTVBfUEFUSCxcbiAgICAgICAgJ2Zvby5hcGsnKSk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgncmVzZXRBcHAnLCB3aXRoTW9ja3Moe2FkYiwgZnMsIGhlbHBlcnN9LCAobW9ja3MpID0+IHtcbiAgICBjb25zdCBsb2NhbEFwa1BhdGggPSAnbG9jYWwnLFxuICAgICAgICAgIHBrZyA9ICdwa2cnO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgcmVtb3RlIGZpbGUgZG9lcyBub3QgZXhpc3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5mcy5leHBlY3RzKCdtZDUnKS53aXRoRXhhY3RBcmdzKGxvY2FsQXBrUGF0aCkucmV0dXJucygnYXBrbWQ1Jyk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZmlsZUV4aXN0cycpLnJldHVybnMoZmFsc2UpO1xuICAgICAgbW9ja3MuaGVscGVycy5leHBlY3RzKCdyZWluc3RhbGxSZW1vdGVBcGsnKS5uZXZlcigpO1xuICAgICAgYXdhaXQgaGVscGVycy5yZXNldEFwcChhZGIsIGxvY2FsQXBrUGF0aCwgcGtnLCBmYWxzZSkuc2hvdWxkLmV2ZW50dWFsbHlcbiAgICAgICAgLmJlLnJlamVjdGVkV2l0aCgnc2xvdycpO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgICAgbW9ja3MuZnMudmVyaWZ5KCk7XG4gICAgICBtb2Nrcy5oZWxwZXJzLnZlcmlmeSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgZXJyb3IgaWYgcmVtb3RlIGZpbGUgZG9lcyBub3QgZXhpc3QnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5mcy5leHBlY3RzKCdtZDUnKS53aXRoRXhhY3RBcmdzKGxvY2FsQXBrUGF0aCkucmV0dXJucygnYXBrbWQ1Jyk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZmlsZUV4aXN0cycpLnJldHVybnModHJ1ZSk7XG4gICAgICBtb2Nrcy5oZWxwZXJzLmV4cGVjdHMoJ3JlaW5zdGFsbFJlbW90ZUFwaycpLm9uY2UoKS5yZXR1cm5zKCcnKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMucmVzZXRBcHAoYWRiLCBsb2NhbEFwa1BhdGgsIHBrZywgZmFsc2UpO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgICAgbW9ja3MuZnMudmVyaWZ5KCk7XG4gICAgICBtb2Nrcy5oZWxwZXJzLnZlcmlmeSgpO1xuICAgIH0pO1xuICB9KSk7XG5cbiAgZGVzY3JpYmUuc2tpcCgncmVpbnN0YWxsUmVtb3RlQXBrJywgd2l0aE1vY2tzKHthZGJ9LCAobW9ja3MpID0+IHtcbiAgICBjb25zdCBsb2NhbEFwa1BhdGggPSAnbG9jYWwnLFxuICAgICAgICAgIHBrZyA9ICdwa2cnLFxuICAgICAgICAgIHJlbW90ZVBhdGggPSAncmVtb3RlJztcbiAgICBpdCgnc2hvdWxkIHRocm93IGVycm9yIGlmIHJlbW90ZSBmaWxlIGRvZXMgbm90IGV4aXN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3VuaW5zdGFsbEFwaycpLndpdGhFeGFjdEFyZ3MocGtnKS5yZXR1cm5zKCcnKTtcbiAgICAgIC8vIGluc3RhbGwgcmVtb3RlIGlzIG5vdCBkZWZpbmVzIGRvIHdlIG1lYW4gaW5zdGFsbEFwa1JlbW90ZWx5P1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2luc3RhbGxSZW1vdGUnKS53aXRoRXhhY3RBcmdzKHJlbW90ZVBhdGgpXG4gICAgICAgIC5yZXR1cm5zKCcnKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMucmVpbnN0YWxsUmVtb3RlQXBrKGFkYiwgbG9jYWxBcGtQYXRoLCBwa2csIHJlbW90ZVBhdGgpO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICB9KSk7XG4gIGRlc2NyaWJlKCdpbnN0YWxsQXBrUmVtb3RlbHknLCB3aXRoTW9ja3Moe2FkYiwgZnMsIGhlbHBlcnN9LCAobW9ja3MpID0+IHtcbiAgICBjb25zdCBsb2NhbEFwa1BhdGggPSAnbG9jYWwnLFxuICAgICAgICAgIHBrZyA9ICdwa2cnO1xuICAgIGl0KCdzaG91bGQgcmVzZXQgYXBwIGlmIGFscmVhZHkgaW5zdGFsbGVkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuZnMuZXhwZWN0cygnbWQ1Jykud2l0aEV4YWN0QXJncyhsb2NhbEFwa1BhdGgpLnJldHVybnMoJ2Fwa21kNScpO1xuICAgICAgbW9ja3MuaGVscGVycy5leHBlY3RzKCdnZXRSZW1vdGVBcGtQYXRoJykucmV0dXJucyhmYWxzZSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZmlsZUV4aXN0cycpLnJldHVybnModHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaXNBcHBJbnN0YWxsZWQnKS5yZXR1cm5zKHRydWUpO1xuICAgICAgbW9ja3MuaGVscGVycy5leHBlY3RzKCdyZXNldEFwcCcpLm9uY2UoKS5yZXR1cm5zKFwiXCIpO1xuICAgICAgYXdhaXQgaGVscGVycy5pbnN0YWxsQXBrUmVtb3RlbHkoYWRiLCBsb2NhbEFwa1BhdGgsIHBrZywgdHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgICBtb2Nrcy5mcy52ZXJpZnkoKTtcbiAgICAgIG1vY2tzLmhlbHBlcnMudmVyaWZ5KCk7XG4gICAgfSk7XG4gICAgaXQuc2tpcCgnc2hvdWxkIHB1c2ggYW5kIHJlaW5zdGFsbCBhcGsgd2hlbiBhcGsgaXMgbm90IGluc3RhbGxlZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmZzLmV4cGVjdHMoJ21kNScpLndpdGhFeGFjdEFyZ3MobG9jYWxBcGtQYXRoKS5yZXR1cm5zKCdhcGttZDUnKTtcbiAgICAgIG1vY2tzLmhlbHBlcnMuZXhwZWN0cygnZ2V0UmVtb3RlQXBrUGF0aCcpLnJldHVybnModHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnZmlsZUV4aXN0cycpLnJldHVybnModHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaXNBcHBJbnN0YWxsZWQnKS5yZXR1cm5zKHRydWUpO1xuICAgICAgbW9ja3MuaGVscGVycy5leHBlY3RzKCdyZXNldEFwcCcpLm9uY2UoKS5yZXR1cm5zKFwiXCIpO1xuICAgICAgbW9ja3MuaGVscGVycy5leHBlY3RzKCdyZWluc3RhbGxSZW1vdGVBcGsnKS5vbmNlKCkucmV0dXJucyhcIlwiKTtcbiAgICAgIG1vY2tzLmhlbHBlcnMuZXhwZWN0cygncmVtb3ZlVGVtcEFwa3MnKS5vbmNlKCkucmV0dXJucyh0cnVlKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdta2RpcicpLm9uY2UoKS5yZXR1cm5zKFwiXCIpO1xuICAgICAgYXdhaXQgaGVscGVycy5pbnN0YWxsQXBrUmVtb3RlbHkoYWRiLCBsb2NhbEFwa1BhdGgsIHBrZywgdHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgICBtb2Nrcy5mcy52ZXJpZnkoKTtcbiAgICAgIG1vY2tzLmhlbHBlcnMudmVyaWZ5KCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgZGVzY3JpYmUoJ3JlbW92ZVJlbW90ZUFwa3MnLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHdoZW4gbm8gYXBrcyBwcmVzZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2xzJykucmV0dXJucyhbXSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnc2hlbGwnKS5uZXZlcigpO1xuICAgICAgYXdhaXQgaGVscGVycy5yZW1vdmVSZW1vdGVBcGtzKGFkYik7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gd2hlbiBvbmx5IGV4Y2VwdE1kNXMgYXJlIHByZXNlbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnbHMnKS5yZXR1cm5zKFsnZm9vJ10pO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3NoZWxsJykubmV2ZXIoKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMucmVtb3ZlUmVtb3RlQXBrcyhhZGIsIFsnZm9vJ10pO1xuICAgICAgbW9ja3MuYWRiLnZlcmlmeSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmVtb3ZlIGFsbCByZW1vdGUgYXBrcycsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdscycpLnJldHVybnMoWydmb28nXSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnc2hlbGwnKS5vbmNlKCkucmV0dXJucygnJyk7XG4gICAgICBhd2FpdCBoZWxwZXJzLnJlbW92ZVJlbW90ZUFwa3MoYWRiLCBbJ2JhciddKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSkpO1xuICBkZXNjcmliZSgnaW5pdFVuaWNvZGVLZXlib2FyZCcsIHdpdGhNb2Nrcyh7YWRifSwgKG1vY2tzKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBpbnN0YWxsIGFuZCBlbmFibGUgdW5pY29kZUlNRScsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdpbnN0YWxsJykub25jZSgpLnJldHVybnMoJycpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2RlZmF1bHRJTUUnKS5vbmNlKCkucmV0dXJucygnZGVmYXVsdElNRScpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2VuYWJsZUlNRScpLm9uY2UoKS5yZXR1cm5zKCcnKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdzZXRJTUUnKS5vbmNlKCkucmV0dXJucygnJyk7XG4gICAgICBhd2FpdCBoZWxwZXJzLmluaXRVbmljb2RlS2V5Ym9hcmQoYWRiKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSkpO1xuICBkZXNjcmliZSgncHVzaFNldHRpbmdzQXBwJywgd2l0aE1vY2tzKHthZGJ9LCAobW9ja3MpID0+IHtcbiAgICBpdCgnc2hvdWxkIGluc3RhbGwgc2V0dGluZ3NBcHAnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaW5zdGFsbCcpLndpdGhFeGFjdEFyZ3Moc2V0dGluZ3NBcGtQYXRoLCBmYWxzZSkub25jZSgpXG4gICAgICAgIC5yZXR1cm5zKCcnKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMucHVzaFNldHRpbmdzQXBwKGFkYik7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgZGVzY3JpYmUoJ3B1c2hVbmxvY2snLCB3aXRoTW9ja3Moe2FkYn0sIChtb2NrcykgPT4ge1xuICAgIGl0KCdzaG91bGQgaW5zdGFsbCB1bmxvY2tBcHAnLCBhc3luYyAoKSA9PiB7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaW5zdGFsbCcpLndpdGhFeGFjdEFyZ3ModW5sb2NrQXBrUGF0aCwgZmFsc2UpLm9uY2UoKVxuICAgICAgICAucmV0dXJucygnJyk7XG4gICAgICBhd2FpdCBoZWxwZXJzLnB1c2hVbmxvY2soYWRiKTtcbiAgICAgIG1vY2tzLmFkYi52ZXJpZnkoKTtcbiAgICB9KTtcbiAgfSkpO1xuICBkZXNjcmliZSgndW5sb2NrJywgd2l0aE1vY2tzKHthZGJ9LCAobW9ja3MpID0+IHtcbiAgICBpdCgnc2hvdWxkIHJldHVybiBpZiBzY3JlZW4gaXMgYWxyZWFkeSB1bmxvY2tlZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdpc1NjcmVlbkxvY2tlZCcpLndpdGhFeGFjdEFyZ3MoKS5vbmNlKClcbiAgICAgICAgLnJldHVybnMoZmFsc2UpO1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ3N0YXJ0QXBwJykubmV2ZXIoKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMudW5sb2NrKGFkYik7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzdGFydCB1bmxvY2sgYXBwJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbW9ja3MuYWRiLmV4cGVjdHMoJ2lzU2NyZWVuTG9ja2VkJykub25DYWxsKDApLnJldHVybnModHJ1ZSk7XG4gICAgICBtb2Nrcy5hZGIuZXhwZWN0cygnaXNTY3JlZW5Mb2NrZWQnKS5yZXR1cm5zKGZhbHNlKTtcbiAgICAgIG1vY2tzLmFkYi5leHBlY3RzKCdzdGFydEFwcCcpLm9uY2UoKS5yZXR1cm5zKCcnKTtcbiAgICAgIGF3YWl0IGhlbHBlcnMudW5sb2NrKGFkYik7XG4gICAgICBtb2Nrcy5hZGIudmVyaWZ5KCk7XG4gICAgfSk7XG4gIH0pKTtcbiAgZGVzY3JpYmUoJ3JlbW92ZU51bGxQcm9wZXJ0aWVzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgaWdub3JlIG51bGwgcHJvcGVydGllcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCB0ZXN0ID0ge2ZvbzogbnVsbCwgYmFyOiB0cnVlfTtcbiAgICAgIGhlbHBlcnMucmVtb3ZlTnVsbFByb3BlcnRpZXModGVzdCk7XG4gICAgICBfLmtleXModGVzdCkubGVuZ3RoLnNob3VsZC5lcXVhbCgxKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGlnbm9yZSB1bmRlZmluZWQgcHJvcGVydGllcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCB0ZXN0ID0ge2ZvbzogdW5kZWZpbmVkLCBiYXI6IHRydWV9O1xuICAgICAgaGVscGVycy5yZW1vdmVOdWxsUHJvcGVydGllcyh0ZXN0KTtcbiAgICAgIF8ua2V5cyh0ZXN0KS5sZW5ndGguc2hvdWxkLmVxdWFsKDEpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbm90IGlnbm9yZSBmYWxzeSBwcm9wZXJ0aWVzIGxpa2UgMCBhbmQgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgdGVzdCA9IHtmb286IGZhbHNlLCBiYXI6IHRydWUsIHplcm86IDB9O1xuICAgICAgaGVscGVycy5yZW1vdmVOdWxsUHJvcGVydGllcyh0ZXN0KTtcbiAgICAgIF8ua2V5cyh0ZXN0KS5sZW5ndGguc2hvdWxkLmVxdWFsKDMpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19