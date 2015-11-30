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

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var _ = require('../../..');

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Network', function () {
  describe('getNetworkConnection', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.adb = new _appiumAdb2['default']();

          case 2:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should determine nothing enabled', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isAirplaneModeOn');
            sandbox.stub(driver.adb, 'isWifiOn');
            sandbox.stub(driver.adb, 'isDataOn');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getNetworkConnection().should.eventually.equal(0));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should determine airplane mode is on', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isAirplaneModeOn').returns(true);
            sandbox.stub(driver.adb, 'isWifiOn');
            sandbox.stub(driver.adb, 'isDataOn');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getNetworkConnection().should.eventually.equal(1));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should determine wifi is on', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isAirplaneModeOn');
            sandbox.stub(driver.adb, 'isWifiOn').returns(true);
            sandbox.stub(driver.adb, 'isDataOn');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getNetworkConnection().should.eventually.equal(2));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should determine data is on', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isAirplaneModeOn');
            sandbox.stub(driver.adb, 'isWifiOn');
            sandbox.stub(driver.adb, 'isDataOn').returns(true);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getNetworkConnection().should.eventually.equal(4));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should determine wifi and data are on', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'isAirplaneModeOn');
            sandbox.stub(driver.adb, 'isWifiOn').returns(true);
            sandbox.stub(driver.adb, 'isDataOn').returns(true);
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.getNetworkConnection().should.eventually.equal(6));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
  describe('SetNetworkConnection', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        var _this2 = this;

        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.adb = new _appiumAdb2['default']();
            sandbox.stub(driver, 'getNetworkConnection');
            sandbox.stub(driver, 'wrapBootstrapDisconnect', function callee$3$0(fn) {
              return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
                while (1) switch (context$4$0.prev = context$4$0.next) {
                  case 0:
                    context$4$0.next = 2;
                    return _regeneratorRuntime.awrap(fn());

                  case 2:
                  case 'end':
                    return context$4$0.stop();
                }
              }, null, _this2);
            });
            sandbox.stub(driver.adb, 'setAirplaneMode');
            sandbox.stub(driver.adb, 'broadcastAirplaneMode');
            sandbox.stub(driver.adb, 'setWifiAndData');

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should turn off wifi and data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(0));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.setWifiAndData.calledWithExactly({ wifi: 0, data: 0 }).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should turn on and broadcast airplane mode', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(1));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(1).should.be['true'];
            driver.adb.setWifiAndData.called.should.be['false'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should turn on wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(2));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.setWifiAndData.calledWithExactly({ wifi: 1, data: 0 }).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should turn on data', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(4));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.setWifiAndData.calledWithExactly({ wifi: 0, data: 1 }).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should turn on data and wifi', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.setNetworkConnection(6));

          case 2:
            driver.adb.setAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.broadcastAirplaneMode.calledWithExactly(0).should.be['true'];
            driver.adb.setWifiAndData.calledWithExactly({ wifi: 1, data: 1 }).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
  describe('ToggleLocationSettings', function () {
    beforeEach(function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.adb = new _appiumAdb2['default']();
            sandbox.stub(driver, 'toggleSetting');

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should throw an error for API<16', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sandbox.stub(driver.adb, 'getApiLevel').returns(15);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.toggleLocationServices().should.eventually.be.rejectedWith(/implemented/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should generate the correct sequence of keys for API 16', function callee$2$0() {
      var sequence;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sequence = [19, 19, 20];

            sandbox.stub(driver.adb, 'getApiLevel').returns(16);
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.toggleLocationServices());

          case 4:
            driver.toggleSetting.calledWith('LOCATION_SOURCE_SETTINGS', sequence).should.be['true'];

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should generate the correct sequence of keys for API >= 19', function callee$2$0() {
      var sequence;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            sequence = [22, 22, 19];

            sandbox.stub(driver.adb, 'getApiLevel').returns(19);
            sandbox.stub(driver.adb, 'keyevent');
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.toggleLocationServices());

          case 5:
            driver.adb.keyevent.calledWithExactly(19).should.be['true'];
            driver.toggleSetting.calledWith('LOCATION_SOURCE_SETTINGS', sequence).should.be['true'];

          case 7:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9uZXR3b3JrLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztxQkFDM0IsT0FBTzs7Ozt5QkFDVCxZQUFZOzs7O2dCQUNFLFVBQVU7O0FBRXhDLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLE9BQU8sR0FBRyxtQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDeEIsVUFBUSxDQUFDLHNCQUFzQixFQUFFLFlBQU07QUFDckMsY0FBVSxDQUFDOzs7O0FBQ1Qsa0JBQU0sR0FBRyxxQkFBbUIsQ0FBQztBQUM3QixrQkFBTSxDQUFDLEdBQUcsR0FBRyw0QkFBUyxDQUFDOzs7Ozs7O0tBQ3hCLENBQUMsQ0FBQztBQUNILGFBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxrQ0FBa0MsRUFBRTs7OztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDN0MsbUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyQyxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs2Q0FDL0IsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0tBQy9ELENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxzQ0FBc0MsRUFBRTs7OztBQUN6QyxtQkFBTyxDQUFDLElB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QUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7OzZDQUM5QyxNQUFNLENBQUMsc0JBQXNCLEVBQUU7OztBQUNyQyxrQkFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ3RGLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyw0REFBNEQsRUFBRTtVQUMzRCxRQUFROzs7O0FBQVIsb0JBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOztBQUMzQixtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRCxtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs2Q0FDL0IsTUFBTSxDQUFDLHNCQUFzQixFQUFFOzs7QUFDckMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQUssQ0FBQztBQUN6RCxrQkFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDOzs7Ozs7O0tBQ3RGLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvY29tbWFuZHMvbmV0d29yay1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4nO1xuXG5sZXQgZHJpdmVyO1xubGV0IHNhbmRib3ggPSBzaW5vbi5zYW5kYm94LmNyZWF0ZSgpO1xuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ05ldHdvcmsnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdnZXROZXR3b3JrQ29ubmVjdGlvbicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgICBkcml2ZXIuYWRiID0gbmV3IEFEQigpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRldGVybWluZSBub3RoaW5nIGVuYWJsZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzQWlycGxhbmVNb2RlT24nKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnaXNXaWZpT24nKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnaXNEYXRhT24nKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXROZXR3b3JrQ29ubmVjdGlvbigpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKDApO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgZGV0ZXJtaW5lIGFpcnBsYW5lIG1vZGUgaXMgb24nLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzQWlycGxhbmVNb2RlT24nKS5yZXR1cm5zKHRydWUpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdpc1dpZmlPbicpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdpc0RhdGFPbicpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldE5ldHdvcmtDb25uZWN0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoMSk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBkZXRlcm1pbmUgd2lmaSBpcyBvbicsIGFzeW5jICgpID0+IHtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnaXNBaXJwbGFuZU1vZGVPbicpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdpc1dpZmlPbicpLnJldHVybnModHJ1ZSk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzRGF0YU9uJyk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0TmV0d29ya0Nvbm5lY3Rpb24oKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgyKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRldGVybWluZSBkYXRhIGlzIG9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdpc0FpcnBsYW5lTW9kZU9uJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzV2lmaU9uJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzRGF0YU9uJykucmV0dXJucyh0cnVlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXROZXR3b3JrQ29ubmVjdGlvbigpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKDQpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgZGV0ZXJtaW5lIHdpZmkgYW5kIGRhdGEgYXJlIG9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdpc0FpcnBsYW5lTW9kZU9uJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2lzV2lmaU9uJykucmV0dXJucyh0cnVlKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnaXNEYXRhT24nKS5yZXR1cm5zKHRydWUpO1xuICAgICAgYXdhaXQgZHJpdmVyLmdldE5ldHdvcmtDb25uZWN0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoNik7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnU2V0TmV0d29ya0Nvbm5lY3Rpb24nLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgICAgZHJpdmVyLmFkYiA9IG5ldyBBREIoKTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIsICdnZXROZXR3b3JrQ29ubmVjdGlvbicpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlciwgJ3dyYXBCb290c3RyYXBEaXNjb25uZWN0JywgYXN5bmMgKGZuKSA9PiB7XG4gICAgICAgIGF3YWl0IGZuKCk7XG4gICAgICB9KTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnc2V0QWlycGxhbmVNb2RlJyk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2Jyb2FkY2FzdEFpcnBsYW5lTW9kZScpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5hZGIsICdzZXRXaWZpQW5kRGF0YScpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb2ZmIHdpZmkgYW5kIGRhdGEnLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oMCk7XG4gICAgICBkcml2ZXIuYWRiLnNldEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zZXRXaWZpQW5kRGF0YS5jYWxsZWRXaXRoRXhhY3RseSh7d2lmaTowLCBkYXRhOjB9KS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb24gYW5kIGJyb2FkY2FzdCBhaXJwbGFuZSBtb2RlJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDEpO1xuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgxKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2V0V2lmaUFuZERhdGEuY2FsbGVkLnNob3VsZC5iZS5mYWxzZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHR1cm4gb24gd2lmaScsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRyaXZlci5zZXROZXR3b3JrQ29ubmVjdGlvbigyKTtcbiAgICAgIGRyaXZlci5hZGIuc2V0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5icm9hZGNhc3RBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLnNldFdpZmlBbmREYXRhLmNhbGxlZFdpdGhFeGFjdGx5KHt3aWZpOjEsIGRhdGE6MH0pLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdHVybiBvbiBkYXRhJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZHJpdmVyLnNldE5ldHdvcmtDb25uZWN0aW9uKDQpO1xuICAgICAgZHJpdmVyLmFkYi5zZXRBaXJwbGFuZU1vZGUuY2FsbGVkV2l0aEV4YWN0bHkoMCkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIuYWRiLmJyb2FkY2FzdEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuc2V0V2lmaUFuZERhdGEuY2FsbGVkV2l0aEV4YWN0bHkoe3dpZmk6MCwgZGF0YToxfSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0dXJuIG9uIGRhdGEgYW5kIHdpZmknLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0TmV0d29ya0Nvbm5lY3Rpb24oNik7XG4gICAgICBkcml2ZXIuYWRiLnNldEFpcnBsYW5lTW9kZS5jYWxsZWRXaXRoRXhhY3RseSgwKS5zaG91bGQuYmUudHJ1ZTtcbiAgICAgIGRyaXZlci5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlLmNhbGxlZFdpdGhFeGFjdGx5KDApLnNob3VsZC5iZS50cnVlO1xuICAgICAgZHJpdmVyLmFkYi5zZXRXaWZpQW5kRGF0YS5jYWxsZWRXaXRoRXhhY3RseSh7d2lmaToxLCBkYXRhOjF9KS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdUb2dnbGVMb2NhdGlvblNldHRpbmdzJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICAgIGRyaXZlci5hZGIgPSBuZXcgQURCKCk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAndG9nZ2xlU2V0dGluZycpO1xuICAgIH0pO1xuICAgIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGZvciBBUEk8MTYnLCBhc3luYyAoKSA9PiB7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2dldEFwaUxldmVsJykucmV0dXJucygxNSk7XG4gICAgICBhd2FpdCBkcml2ZXIudG9nZ2xlTG9jYXRpb25TZXJ2aWNlcygpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvaW1wbGVtZW50ZWQvKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGdlbmVyYXRlIHRoZSBjb3JyZWN0IHNlcXVlbmNlIG9mIGtleXMgZm9yIEFQSSAxNicsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBzZXF1ZW5jZSA9IFsxOSwgMTksIDIwXTtcbiAgICAgIHNhbmRib3guc3R1Yihkcml2ZXIuYWRiLCAnZ2V0QXBpTGV2ZWwnKS5yZXR1cm5zKDE2KTtcbiAgICAgIGF3YWl0IGRyaXZlci50b2dnbGVMb2NhdGlvblNlcnZpY2VzKCk7XG4gICAgICBkcml2ZXIudG9nZ2xlU2V0dGluZy5jYWxsZWRXaXRoKCdMT0NBVElPTl9TT1VSQ0VfU0VUVElOR1MnLCBzZXF1ZW5jZSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBnZW5lcmF0ZSB0aGUgY29ycmVjdCBzZXF1ZW5jZSBvZiBrZXlzIGZvciBBUEkgPj0gMTknLCBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgc2VxdWVuY2UgPSBbMjIsIDIyLCAxOV07XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2dldEFwaUxldmVsJykucmV0dXJucygxOSk7XG4gICAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmFkYiwgJ2tleWV2ZW50Jyk7XG4gICAgICBhd2FpdCBkcml2ZXIudG9nZ2xlTG9jYXRpb25TZXJ2aWNlcygpO1xuICAgICAgZHJpdmVyLmFkYi5rZXlldmVudC5jYWxsZWRXaXRoRXhhY3RseSgxOSkuc2hvdWxkLmJlLnRydWU7XG4gICAgICBkcml2ZXIudG9nZ2xlU2V0dGluZy5jYWxsZWRXaXRoKCdMT0NBVElPTl9TT1VSQ0VfU0VUVElOR1MnLCBzZXF1ZW5jZSkuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=