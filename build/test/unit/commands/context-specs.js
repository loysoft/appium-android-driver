'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _libWebviewHelpers = require('../../../lib/webview-helpers');

var _libWebviewHelpers2 = _interopRequireDefault(_libWebviewHelpers);

var _ = require('../../..');

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
var expect = _chai2['default'].expect;
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Context', function () {
  describe('getContexts', function () {
    after(function () {
      sandbox.restore();
    });
    it('should get Chromium context where appropriate', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver({ browserName: 'Chrome' });
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.getContexts());

          case 3:
            context$3$0.t0 = context$3$0.sent;
            expect(context$3$0.t0).to.include('CHROMIUM');

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should use ADB to figure out which webviews are available', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(_libWebviewHelpers2['default'], 'getWebviews');
            driver = new _.AndroidDriver();
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.getContexts());

          case 4:
            context$3$0.t0 = context$3$0.sent;
            expect(context$3$0.t0).to.not.include('CHROMIUM');

            _libWebviewHelpers2['default'].getWebviews.calledOnce.should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
  describe('setContext', function () {
    beforeEach(function () {
      driver = new _.AndroidDriver();
      sandbox.stub(driver, 'getContexts', function () {
        return ['CHROMIUM', 'ANOTHER'];
      });
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should proxy commands directly to chromedriver', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'startChromedriverProxy');
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.setContext('CHROMIUM'));

          case 3:
            driver.startChromedriverProxy.calledOnce.should.be['true'];

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should kill existing chromedrivers', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'stopChromedriverProxies');
            driver.opts.recreateChromeDriverSessions = true;
            driver.curContext = 'CHROMIUM';
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.setContext('ANOTHER'));

          case 5:
            driver.stopChromedriverProxies.calledOnce.should.be['true'];

          case 6:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should suspend Chromedriver proxy', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'suspendChromedriverProxy');
            driver.curContext = 'CHROMIUM';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.setContext('ANOTHER'));

          case 4:
            driver.suspendChromedriverProxy.calledOnce.should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should throw an error for unkown contexts', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver, 'suspendChromedriverProxy');
            driver.curContext = 'FOO';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.setContext('ANOTHER').should.eventually.be.rejectedWith(/switching to context/));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
  describe('startChromedriverProxy', function () {
    it('should throw an error if a chromedriver instance is already running', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.chromedriver = 'CHROMIUM';
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.startChromedriverProxy('CHROMIUM').should.eventually.be.rejectedWith(/instance running/));

          case 4:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9jb250ZXh0LXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztxQkFDM0IsT0FBTzs7OztpQ0FDRSw4QkFBOEI7Ozs7Z0JBQzNCLFVBQVU7O0FBRXhDLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLE9BQU8sR0FBRyxtQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsSUFBSSxNQUFNLEdBQUcsa0JBQUssTUFBTSxDQUFDO0FBQ3pCLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFNO0FBQ3hCLFVBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBTTtBQUM1QixTQUFLLENBQUMsWUFBTTtBQUNWLGFBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsK0NBQStDLEVBQUU7Ozs7QUFDbEQsa0JBQU0sR0FBRyxvQkFBa0IsRUFBQyxXQUFXLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzs7NkNBQ3ZDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Ozs7QUFBakMsa0JBQU0saUJBQTZCLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVTs7Ozs7OztLQUN6RCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsMkRBQTJELEVBQUU7Ozs7QUFDOUQsbUJBQU8sQ0FBQyxJQUFJLGlDQUFpQixhQUFhLENBQUMsQ0FBQztBQUM1QyxrQkFBTSxHQUFHLHFCQUFtQixDQUFDOzs2Q0FDaEIsTUFBTSxDQUFDLFdBQVcsRUFBRTs7OztBQUFqQyxrQkFBTSxpQkFBNkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVTs7QUFDNUQsMkNBQWUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7Ozs7Ozs7S0FDdEQsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLFlBQVksRUFBRSxZQUFNO0FBQzNCLGNBQVUsQ0FBQyxZQUFNO0FBQ2YsWUFBTSxHQUFHLHFCQUFtQixDQUFDO0FBQzdCLGFBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxZQUFVO0FBQUUsZUFBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztPQUFFLENBQUMsQ0FBQztLQUNwRixDQUFDLENBQUM7QUFDSCxhQUFTLENBQUMsWUFBTTtBQUNkLGFBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsZ0RBQWdELEVBQUU7Ozs7QUFDbkQsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHdCQUF3QixDQUFDLENBQUM7OzZDQUN6QyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzs7O0FBQ25DLGtCQUFNLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUN6RCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsb0NBQW9DLEVBQUU7Ozs7QUFDdkMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFDaEQsa0JBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO0FBQ2hELGtCQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7NkNBQ3pCLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDOzs7QUFDbEMsa0JBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQzFELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxtQ0FBbUMsRUFBRTs7OztBQUN0QyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxrQkFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7OzZDQUN6QixNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7O0FBQ2xDLGtCQUFNLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQzs7Ozs7OztLQUMzRCxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsMkNBQTJDLEVBQUU7Ozs7QUFDOUMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLDBCQUEwQixDQUFDLENBQUM7QUFDakQsa0JBQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOzs2Q0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUM7Ozs7Ozs7S0FDN0YsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLHdCQUF3QixFQUFFLFlBQU07QUFDdkMsTUFBRSxDQUFDLHFFQUFxRSxFQUFFOzs7O0FBQ3hFLGtCQUFNLEdBQUcscUJBQW1CLENBQUM7QUFDN0Isa0JBQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDOzs2Q0FDM0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs7OztLQUN0RyxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L2NvbW1hbmRzL2NvbnRleHQtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCBzaW5vbiBmcm9tICdzaW5vbic7XG5pbXBvcnQgd2Vidmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vbGliL3dlYnZpZXctaGVscGVycyc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4nO1xuXG5sZXQgZHJpdmVyO1xubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xubGV0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ0NvbnRleHQnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdnZXRDb250ZXh0cycsICgpID0+IHtcbiAgICBhZnRlcigoKSA9PiB7XG4gICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdldCBDaHJvbWl1bSBjb250ZXh0IHdoZXJlIGFwcHJvcHJpYXRlJywgYXN5bmMgKCkgPT4ge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoe2Jyb3dzZXJOYW1lOiAnQ2hyb21lJ30pO1xuICAgICAgZXhwZWN0KGF3YWl0IGRyaXZlci5nZXRDb250ZXh0cygpKS50by5pbmNsdWRlKCdDSFJPTUlVTScpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdXNlIEFEQiB0byBmaWd1cmUgb3V0IHdoaWNoIHdlYnZpZXdzIGFyZSBhdmFpbGFibGUnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIod2Vidmlld0hlbHBlcnMsICdnZXRXZWJ2aWV3cycpO1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICAgIGV4cGVjdChhd2FpdCBkcml2ZXIuZ2V0Q29udGV4dHMoKSkudG8ubm90LmluY2x1ZGUoJ0NIUk9NSVVNJyk7XG4gICAgICB3ZWJ2aWV3SGVscGVycy5nZXRXZWJ2aWV3cy5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbiAgZGVzY3JpYmUoJ3NldENvbnRleHQnLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ2dldENvbnRleHRzJywgZnVuY3Rpb24oKXsgcmV0dXJuIFsnQ0hST01JVU0nLCAnQU5PVEhFUiddOyB9KTtcbiAgICB9KTtcbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgc2FuZGJveC5yZXN0b3JlKCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBwcm94eSBjb21tYW5kcyBkaXJlY3RseSB0byBjaHJvbWVkcml2ZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc3RhcnRDaHJvbWVkcml2ZXJQcm94eScpO1xuICAgICAgYXdhaXQgZHJpdmVyLnNldENvbnRleHQoJ0NIUk9NSVVNJyk7XG4gICAgICBkcml2ZXIuc3RhcnRDaHJvbWVkcml2ZXJQcm94eS5jYWxsZWRPbmNlLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQga2lsbCBleGlzdGluZyBjaHJvbWVkcml2ZXJzJywgYXN5bmMgKCkgPT4ge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3N0b3BDaHJvbWVkcml2ZXJQcm94aWVzJyk7XG4gICAgICBkcml2ZXIub3B0cy5yZWNyZWF0ZUNocm9tZURyaXZlclNlc3Npb25zID0gdHJ1ZTtcbiAgICAgIGRyaXZlci5jdXJDb250ZXh0ID0gJ0NIUk9NSVVNJztcbiAgICAgIGF3YWl0IGRyaXZlci5zZXRDb250ZXh0KCdBTk9USEVSJyk7XG4gICAgICBkcml2ZXIuc3RvcENocm9tZWRyaXZlclByb3hpZXMuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHN1c3BlbmQgQ2hyb21lZHJpdmVyIHByb3h5JywgYXN5bmMgKCkgPT4ge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3N1c3BlbmRDaHJvbWVkcml2ZXJQcm94eScpO1xuICAgICAgZHJpdmVyLmN1ckNvbnRleHQgPSAnQ0hST01JVU0nO1xuICAgICAgYXdhaXQgZHJpdmVyLnNldENvbnRleHQoJ0FOT1RIRVInKTtcbiAgICAgIGRyaXZlci5zdXNwZW5kQ2hyb21lZHJpdmVyUHJveHkuY2FsbGVkT25jZS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGZvciB1bmtvd24gY29udGV4dHMnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAnc3VzcGVuZENocm9tZWRyaXZlclByb3h5Jyk7XG4gICAgICBkcml2ZXIuY3VyQ29udGV4dCA9ICdGT08nO1xuICAgICAgYXdhaXQgZHJpdmVyLnNldENvbnRleHQoJ0FOT1RIRVInKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL3N3aXRjaGluZyB0byBjb250ZXh0Lyk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnc3RhcnRDaHJvbWVkcml2ZXJQcm94eScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIGEgY2hyb21lZHJpdmVyIGluc3RhbmNlIGlzIGFscmVhZHkgcnVubmluZycsIGFzeW5jICgpID0+IHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgICBkcml2ZXIuY2hyb21lZHJpdmVyID0gJ0NIUk9NSVVNJztcbiAgICAgIGF3YWl0IGRyaXZlci5zdGFydENocm9tZWRyaXZlclByb3h5KCdDSFJPTUlVTScpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvaW5zdGFuY2UgcnVubmluZy8pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19