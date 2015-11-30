'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _libLogger = require('../../lib/logger');

var _libLogger2 = _interopRequireDefault(_libLogger);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _libAndroidHelpers = require('../../lib/android-helpers');

var _libAndroidHelpers2 = _interopRequireDefault(_libAndroidHelpers);

var _ = require('../..');

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _appiumAndroidBootstrap = require('appium-android-bootstrap');

var _appiumAndroidBootstrap2 = _interopRequireDefault(_appiumAndroidBootstrap);

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
var expect = _chai2['default'].expect;
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('driver', function () {
  describe('constructor', function () {
    it('should call BaseDriver constructor with opts', function () {
      var driver = new _.AndroidDriver({ foo: 'bar' });
      driver.should.exist;
      driver.opts.foo.should.equal('bar');
    });
    it('should have this.findElOrEls', function () {
      var driver = new _.AndroidDriver({ foo: 'bar' });
      driver.findElOrEls.should.exist;
      driver.findElOrEls.should.be.a('function');
    });
  });
  describe('createSession', function () {
    beforeEach(function () {
      driver = new _.AndroidDriver();
      sandbox.stub(driver, 'checkAppPresent');
      sandbox.stub(driver, 'checkPackagePresent');
      sandbox.stub(driver, 'startAndroidSession');
      sandbox.stub(_appiumAdb2['default'], 'createADB');
    });
    afterEach(function () {

      sandbox.restore();
    });
    it('should get java version if none is provided', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', app: 'some.apk' }));

          case 2:
            driver.opts.javaVersion.should.exist;

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should get browser package details if browserName is provided', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.spy(_libAndroidHelpers2['default'], 'getChromePkg');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', browserName: 'Chrome' }));

          case 3:
            _libAndroidHelpers2['default'].getChromePkg.calledOnce.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should check an app is present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', app: 'some.apk' }));

          case 2:
            driver.checkAppPresent.calledOnce.should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should check a package is present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', appPackage: 'some.app.package' }));

          case 2:
            driver.checkPackagePresent.calledOnce.should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should delete a session on failure', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            // Force an error to make sure deleteSession gets called
            sandbox.stub(_libAndroidHelpers2['default'], 'getJavaVersion').throws();
            sandbox.stub(driver, 'deleteSession');
            context$3$0.prev = 2;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.createSession({ platformName: 'Android', deviceName: 'device', appPackage: 'some.app.package' }));

          case 5:
            context$3$0.next = 9;
            break;

          case 7:
            context$3$0.prev = 7;
            context$3$0.t0 = context$3$0['catch'](2);

          case 9:
            driver.deleteSession.calledOnce.should.be['true'];

          case 10:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this, [[2, 7]]);
    });
  });
  describe('deleteSession', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.adb = new _appiumAdb2['default']();
            driver.bootstrap = new _appiumAndroidBootstrap2['default']();
            sandbox.stub(driver, 'stopChromedriverProxies');
            sandbox.stub(driver.adb, 'setIME');
            sandbox.stub(driver.adb, 'forceStop');
            sandbox.stub(driver.adb, 'goToHome');
            sandbox.stub(driver.adb, 'uninstallApk');
            sandbox.stub(driver.adb, 'stopLogcat');
            sandbox.stub(driver.bootstrap, 'shutdown');
            sandbox.spy(_libLogger2['default'], 'warn');

          case 11:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should not do anything if Android Driver has already shut down', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.bootstrap = null;
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.deleteSession());

          case 3:
            _libLogger2['default'].warn.calledOnce.should.be['true'];
            driver.stopChromedriverProxies.called.should.be['false'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should reset keyboard to default IME', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.unicodeKeyboard = true;
            driver.opts.resetKeyboard = true;
            driver.defaultIME = 'someDefaultIME';
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.deleteSession());

          case 5:
            driver.adb.setIME.calledOnce.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should force stop non-Chrome sessions', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.deleteSession());

          case 2:
            driver.adb.forceStop.calledOnce.should.be['true'];

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should uninstall APK if required', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver.opts.fullReset = true;
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.deleteSession());

          case 3:
            driver.adb.uninstallApk.calledOnce.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
  describe('validateDesiredCaps', function () {
    before(function () {
      driver = new _.AndroidDriver();
    });
    it('should throw an error if caps do not contain an app, package or valid browser', function () {
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device' });
      }).to['throw'](/must include/);
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device', browserName: 'Netscape Navigator' });
      }).to['throw'](/Netscape Navigator/);
    });
    it('should not throw an error if caps contain an app, package or valid browser', function () {
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device', app: 'some.apk' });
      }).to.not['throw'](Error);
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device', browserName: 'Chrome' });
      }).to.not['throw'](Error);
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device', appPackage: 'some.app.package' });
      }).to.not['throw'](/must include/);
    });
    it('should throw an error if caps contain both an app and browser', function () {
      expect(function () {
        driver.validateDesiredCaps({ platformName: 'Android', deviceName: 'device', app: 'some.apk', browserName: 'Chrome' });
      }).to['throw'](/should not include both/);
    });
  });

  describe('proxying', function () {
    before(function () {
      driver = new _.AndroidDriver();
      driver.sessionId = 'abc';
    });
    describe('#proxyActive', function () {
      it('should exist', function () {
        driver.proxyActive.should.be.an['instanceof'](Function);
      });
      it('should return false', function () {
        driver.proxyActive('abc').should.be['false'];
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.proxyActive('aaa');
        }).should['throw'];
      });
    });

    describe('#getProxyAvoidList', function () {
      it('should exist', function () {
        driver.getProxyAvoidList.should.be.an['instanceof'](Function);
      });
      it('should return jwpProxyAvoid array', function () {
        var avoidList = driver.getProxyAvoidList('abc');
        avoidList.should.be.an['instanceof'](Array);
        avoidList.should.eql(driver.jwpProxyAvoid);
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.getProxyAvoidList('aaa');
        }).should['throw'];
      });
    });

    describe('#canProxy', function () {
      it('should exist', function () {
        driver.canProxy.should.be.an['instanceof'](Function);
      });
      it('should return false', function () {
        driver.canProxy('abc').should.be['false'];
      });
      it('should throw an error if session id is wrong', function () {
        (function () {
          driver.canProxy('aaa');
        }).should['throw'];
      });
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9kcml2ZXItc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3lCQUM3QixrQkFBa0I7Ozs7cUJBQ2hCLE9BQU87Ozs7aUNBQ0wsMkJBQTJCOzs7O2dCQUNqQixPQUFPOzt5QkFDckIsWUFBWTs7OztzQ0FDTiwwQkFBMEI7Ozs7QUFFaEQsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxrQkFBSyxNQUFNLENBQUM7QUFDekIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsUUFBUSxFQUFFLFlBQU07QUFDdkIsVUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFNO0FBQzVCLE1BQUUsQ0FBQyw4Q0FBOEMsRUFBRSxZQUFNO0FBQ3ZELFVBQUksTUFBTSxHQUFHLG9CQUFrQixFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQzdDLFlBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3BCLFlBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckMsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLDhCQUE4QixFQUFFLFlBQU07QUFDdkMsVUFBSSxNQUFNLEdBQUcsb0JBQWtCLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7QUFDN0MsWUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2hDLFlBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDNUMsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFD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QUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7T0FDNUMsQ0FBQyxDQUFDO0FBQ0gsUUFBRSxDQUFDLDhDQUE4QyxFQUFFLFlBQU07QUFDdkQsU0FBQyxZQUFNO0FBQUUsZ0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFLENBQUEsQ0FBRSxNQUFNLFNBQU0sQ0FBQztPQUMzRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7O0FBRUgsWUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFNO0FBQzFCLFFBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBTTtBQUN2QixjQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDbkQsQ0FBQyxDQUFDO0FBQ0gsUUFBRSxDQUFDLHFCQUFxQixFQUFFLFlBQU07QUFDOUIsY0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFNLENBQUM7T0FDeEMsQ0FBQyxDQUFDO0FBQ0gsUUFBRSxDQUFDLDhDQUE4QyxFQUFFLFlBQU07QUFDdkQsU0FBQyxZQUFNO0FBQUUsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRSxDQUFBLENBQUUsTUFBTSxTQUFNLENBQUM7T0FDbEQsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9kcml2ZXItc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBsb2cgZnJvbSAnLi4vLi4vbGliL2xvZ2dlcic7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vbGliL2FuZHJvaWQtaGVscGVycyc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IEFEQiBmcm9tICdhcHBpdW0tYWRiJztcbmltcG9ydCBCb290c3RyYXAgZnJvbSAnYXBwaXVtLWFuZHJvaWQtYm9vdHN0cmFwJztcblxubGV0IGRyaXZlcjtcbmxldCBzYW5kYm94ID0gc2lub24uc2FuZGJveC5jcmVhdGUoKTtcbmxldCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmRlc2NyaWJlKCdkcml2ZXInLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdjb25zdHJ1Y3RvcicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNhbGwgQmFzZURyaXZlciBjb25zdHJ1Y3RvciB3aXRoIG9wdHMnLCAoKSA9PiB7XG4gICAgICBsZXQgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoe2ZvbzogJ2Jhcid9KTtcbiAgICAgIGRyaXZlci5zaG91bGQuZXhpc3Q7XG4gICAgICBkcml2ZXIub3B0cy5mb28uc2hvdWxkLmVxdWFsKCdiYXInKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGhhdmUgdGhpcy5maW5kRWxPckVscycsICgpID0+IHtcbiAgICAgIGxldCBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcih7Zm9vOiAnYmFyJ30pO1xuICAgICAgZHJpdmVyLmZpbmRFbE9yRWxzLnNob3VsZC5leGlzdDtcbiAgICAgIGRyaXZlci5maW5kRWxPckVscy5zaG91bGQuYmUuYSgnZnVuY3Rpb24nKTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdjcmVhdGVTZXNzaW9uJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdjaGVja0FwcFByZXNlbnQnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdjaGVja1BhY2thZ2VQcmVzZW50Jyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc3RhcnRBbmRyb2lkU2Vzc2lvbicpO1xuICAgICAgc2FuZGJveC5zdHViKEFEQiwgJ2NyZWF0ZUFEQicpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG5cbiAgICAgIHNhbmRib3gucmVzdG9yZSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgZ2V0IGphdmEgdmVyc2lvbiBpZiBub25lIGlzIHByb3ZpZGVkJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oe3BsYXRmb3JtTmFtZTogJ0FuZHJvaWQnLCBkZXZpY2VOYW1lOiAnZGV2aWNlJywgYXBwOiAnc29tZS5hcGsnfSk7XG4gICAgICBkcml2ZXIub3B0cy5qYXZhVmVyc2lvbi5zaG91bGQuZXhpc3Q7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBnZXQgYnJvd3NlciBwYWNrYWdlIGRldGFpbHMgaWYgYnJvd3Nlck5hbWUgaXMgcHJvdmlkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnNweShoZWxwZXJzLCAnZ2V0Q2hyb21lUGtnJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbih7cGxhdGZvcm1OYW1lOiAnQW5kcm9pZCcsIGRldmljZU5hbWU6ICdkZXZpY2UnLCBicm93c2VyTmFtZTogJ0Nocm9tZSd9KTtcbiAgICAgIGhlbHBlcnMuZ2V0Q2hyb21lUGtnLmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBjaGVjayBhbiBhcHAgaXMgcHJlc2VudCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGFwcDogJ3NvbWUuYXBrJ30pO1xuICAgICAgZHJpdmVyLmNoZWNrQXBwUHJlc2VudC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgY2hlY2sgYSBwYWNrYWdlIGlzIHByZXNlbnQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbih7cGxhdGZvcm1OYW1lOiAnQW5kcm9pZCcsIGRldmljZU5hbWU6ICdkZXZpY2UnLCBhcHBQYWNrYWdlOiAnc29tZS5hcHAucGFja2FnZSd9KTtcbiAgICAgIGRyaXZlci5jaGVja1BhY2thZ2VQcmVzZW50LmNhbGxlZE9uY2Uuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBkZWxldGUgYSBzZXNzaW9uIG9uIGZhaWx1cmUnLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBGb3JjZSBhbiBlcnJvciB0byBtYWtlIHN1cmUgZGVsZXRlU2Vzc2lvbiBnZXRzIGNhbGxlZFxuICAgICAgc2FuZGJveC5zdHViKGhlbHBlcnMsICdnZXRKYXZhVmVyc2lvbicpLnRocm93cygpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2RlbGV0ZVNlc3Npb24nKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGFwcFBhY2thZ2U6ICdzb21lLmFwcC5wYWNrYWdlJ30pO1xuICAgICAgfSBjYXRjaCAoaWduKSB7fVxuICAgICAgZHJpdmVyLmRlbGV0ZVNlc3Npb24uY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdkZWxldGVTZXNzaW9uJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICAgIGRyaXZlci5hZGIgPSBuZXcgQURCKCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwID0gbmV3IEJvb3RzdHJhcCgpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3N0b3BDaHJvbWVkcml2ZXJQcm94aWVzJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3NldElNRScpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdmb3JjZVN0b3AnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnZ29Ub0hvbWUnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAndW5pbnN0YWxsQXBrJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ3N0b3BMb2djYXQnKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYm9vdHN0cmFwLCAnc2h1dGRvd24nKTtcbiAgICAgIHNhbmRib3guc3B5KGxvZywgJ3dhcm4nKTtcbiAgICB9KTtcbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBub3QgZG8gYW55dGhpbmcgaWYgQW5kcm9pZCBEcml2ZXIgaGFzIGFscmVhZHkgc2h1dCBkb3duJywgYXN5bmMgKCkgPT4ge1xuICAgICAgZHJpdmVyLmJvb3RzdHJhcCA9IG51bGw7XG4gICAgICBhd2FpdCBkcml2ZXIuZGVsZXRlU2Vzc2lvbigpO1xuICAgICAgbG9nLndhcm4uY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5zdG9wQ2hyb21lZHJpdmVyUHJveGllcy5jYWxsZWQuc2hvdWxkLmJlLmZhbHNlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgcmVzZXQga2V5Ym9hcmQgdG8gZGVmYXVsdCBJTUUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBkcml2ZXIub3B0cy51bmljb2RlS2V5Ym9hcmQgPSB0cnVlO1xuICAgICAgZHJpdmVyLm9wdHMucmVzZXRLZXlib2FyZCA9IHRydWU7XG4gICAgICBkcml2ZXIuZGVmYXVsdElNRSA9ICdzb21lRGVmYXVsdElNRSc7XG4gICAgICBhd2FpdCBkcml2ZXIuZGVsZXRlU2Vzc2lvbigpO1xuICAgICAgZHJpdmVyLmFkYi5zZXRJTUUuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGZvcmNlIHN0b3Agbm9uLUNocm9tZSBzZXNzaW9ucycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gICAgICBkcml2ZXIuYWRiLmZvcmNlU3RvcC5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdW5pbnN0YWxsIEFQSyBpZiByZXF1aXJlZCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGRyaXZlci5vcHRzLmZ1bGxSZXNldCA9IHRydWU7XG4gICAgICBhd2FpdCBkcml2ZXIuZGVsZXRlU2Vzc2lvbigpO1xuICAgICAgZHJpdmVyLmFkYi51bmluc3RhbGxBcGsuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCd2YWxpZGF0ZURlc2lyZWRDYXBzJywgKCkgPT4ge1xuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgY2FwcyBkbyBub3QgY29udGFpbiBhbiBhcHAsIHBhY2thZ2Ugb3IgdmFsaWQgYnJvd3NlcicsICgpID0+IHtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZSd9KTtcbiAgICAgIH0pLnRvLnRocm93KC9tdXN0IGluY2x1ZGUvKTtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGJyb3dzZXJOYW1lOiAnTmV0c2NhcGUgTmF2aWdhdG9yJ30pO1xuICAgICAgfSkudG8udGhyb3coL05ldHNjYXBlIE5hdmlnYXRvci8pO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgbm90IHRocm93IGFuIGVycm9yIGlmIGNhcHMgY29udGFpbiBhbiBhcHAsIHBhY2thZ2Ugb3IgdmFsaWQgYnJvd3NlcicsICgpID0+IHtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGFwcDogJ3NvbWUuYXBrJ30pO1xuICAgICAgfSkudG8ubm90LnRocm93KEVycm9yKTtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGJyb3dzZXJOYW1lOiAnQ2hyb21lJ30pO1xuICAgICAgfSkudG8ubm90LnRocm93KEVycm9yKTtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGFwcFBhY2thZ2U6ICdzb21lLmFwcC5wYWNrYWdlJ30pO1xuICAgICAgfSkudG8ubm90LnRocm93KC9tdXN0IGluY2x1ZGUvKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIGNhcHMgY29udGFpbiBib3RoIGFuIGFwcCBhbmQgYnJvd3NlcicsICgpID0+IHtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGRyaXZlci52YWxpZGF0ZURlc2lyZWRDYXBzKHtwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJywgZGV2aWNlTmFtZTogJ2RldmljZScsIGFwcDogJ3NvbWUuYXBrJywgYnJvd3Nlck5hbWU6ICdDaHJvbWUnfSk7XG4gICAgICB9KS50by50aHJvdygvc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGgvKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Byb3h5aW5nJywgKCkgPT4ge1xuICAgIGJlZm9yZSgoKSA9PiB7XG4gICAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgICAgZHJpdmVyLnNlc3Npb25JZCA9ICdhYmMnO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKCcjcHJveHlBY3RpdmUnLCAoKSA9PiB7XG4gICAgICBpdCgnc2hvdWxkIGV4aXN0JywgKCkgPT4ge1xuICAgICAgICBkcml2ZXIucHJveHlBY3RpdmUuc2hvdWxkLmJlLmFuLmluc3RhbmNlb2YoRnVuY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZScsICgpID0+IHtcbiAgICAgICAgZHJpdmVyLnByb3h5QWN0aXZlKCdhYmMnKS5zaG91bGQuYmUuZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc2Vzc2lvbiBpZCBpcyB3cm9uZycsICgpID0+IHtcbiAgICAgICAgKCgpID0+IHsgZHJpdmVyLnByb3h5QWN0aXZlKCdhYWEnKTsgfSkuc2hvdWxkLnRocm93O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnI2dldFByb3h5QXZvaWRMaXN0JywgKCkgPT4ge1xuICAgICAgaXQoJ3Nob3VsZCBleGlzdCcsICgpID0+IHtcbiAgICAgICAgZHJpdmVyLmdldFByb3h5QXZvaWRMaXN0LnNob3VsZC5iZS5hbi5pbnN0YW5jZW9mKEZ1bmN0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gandwUHJveHlBdm9pZCBhcnJheScsICgpID0+IHtcbiAgICAgICAgbGV0IGF2b2lkTGlzdCA9IGRyaXZlci5nZXRQcm94eUF2b2lkTGlzdCgnYWJjJyk7XG4gICAgICAgIGF2b2lkTGlzdC5zaG91bGQuYmUuYW4uaW5zdGFuY2VvZihBcnJheSk7XG4gICAgICAgIGF2b2lkTGlzdC5zaG91bGQuZXFsKGRyaXZlci5qd3BQcm94eUF2b2lkKTtcbiAgICAgIH0pO1xuICAgICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiBzZXNzaW9uIGlkIGlzIHdyb25nJywgKCkgPT4ge1xuICAgICAgICAoKCkgPT4geyBkcml2ZXIuZ2V0UHJveHlBdm9pZExpc3QoJ2FhYScpOyB9KS5zaG91bGQudGhyb3c7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCcjY2FuUHJveHknLCAoKSA9PiB7XG4gICAgICBpdCgnc2hvdWxkIGV4aXN0JywgKCkgPT4ge1xuICAgICAgICBkcml2ZXIuY2FuUHJveHkuc2hvdWxkLmJlLmFuLmluc3RhbmNlb2YoRnVuY3Rpb24pO1xuICAgICAgfSk7XG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZScsICgpID0+IHtcbiAgICAgICAgZHJpdmVyLmNhblByb3h5KCdhYmMnKS5zaG91bGQuYmUuZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIGl0KCdzaG91bGQgdGhyb3cgYW4gZXJyb3IgaWYgc2Vzc2lvbiBpZCBpcyB3cm9uZycsICgpID0+IHtcbiAgICAgICAgKCgpID0+IHsgZHJpdmVyLmNhblByb3h5KCdhYWEnKTsgfSkuc2hvdWxkLnRocm93O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=