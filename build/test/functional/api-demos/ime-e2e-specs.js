'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../..');

var _sampleApps = require('sample-apps');

var _sampleApps2 = _interopRequireDefault(_sampleApps);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android',
  unicodeKeyboard: true,
  resetKeyboard: true
};
var unicodeImeId = 'io.appium.android.ime/.UnicodeIME';

describe('apidemo - IME', function () {
  var _this = this;

  before(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = new _.AndroidDriver();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(defaultCaps));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.ApiDemos'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  after(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.deleteSession());

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should get the default (enabled) input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getActiveIMEEngine().should.eventually.equal(unicodeImeId));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should get the available input methods', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.availableIMEEngines().should.eventually.have.length.at.least(4));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should activate an installed input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(unicodeImeId).should.not.be.rejected);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should fail to activate an uninstalled input method', function callee$1$0() {
    var invalidImeId;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          invalidImeId = 'sdf.wer.gdasdfsf/.OsdfEfgd';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(invalidImeId).should.eventually.be.rejectedWith(/not available/));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should deactivate the current input method', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.activateIMEEngine(unicodeImeId));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.getActiveIMEEngine().should.eventually.equal(unicodeImeId));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.deactivateIMEEngine());

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.getActiveIMEEngine().should.eventually.not.equal(unicodeImeId));

        case 8:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvaW1lLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNmLFVBQVU7OzBCQUNqQixhQUFhOzs7O0FBRXBDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSw2QkFBVyxnQkFBZ0IsQ0FBQztBQUNqQyxZQUFVLEVBQUUsU0FBUztBQUNyQixjQUFZLEVBQUUsU0FBUztBQUN2QixpQkFBZSxFQUFFLElBQUk7QUFDckIsZUFBYSxFQUFFLElBQUk7Q0FDcEIsQ0FBQztBQUNGLElBQUksWUFBWSxHQUFHLG1DQUFtQyxDQUFDOztBQUV2RCxRQUFRLENBQUMsZUFBZSxFQUFFLFlBQVk7OztBQUNwQyxRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsWUFBVSxDQUFDOzs7OzsyQ0FDSCxNQUFNLENBQUMsYUFBYSxDQUFDLHdCQUF3QixFQUFFLGlDQUFpQyxDQUFDOzs7Ozs7O0dBQ3hGLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsK0NBQStDLEVBQUU7Ozs7OzJDQUM1QyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7R0FDeEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLHdDQUF3QyxFQUFFOzs7OzsyQ0FDckMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0dBQzdFLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywyQ0FBMkMsRUFBRTs7Ozs7MkNBQ3hDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Ozs7O0dBQ3BFLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxxREFBcUQsRUFBRTtRQUNwRCxZQUFZOzs7O0FBQVosc0JBQVksR0FBRyw0QkFBNEI7OzJDQUN6QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7Ozs7OztHQUNoRyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsNENBQTRDLEVBQUU7Ozs7OzJDQUN6QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDOzs7OzJDQUN0QyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Ozs7MkNBQ2pFLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTs7OzsyQ0FDNUIsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzs7Ozs7OztHQUM1RSxDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2FwaS1kZW1vcy9pbWUtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IHNhbXBsZUFwcHMgZnJvbSAnc2FtcGxlLWFwcHMnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCcsXG4gIHVuaWNvZGVLZXlib2FyZDogdHJ1ZSxcbiAgcmVzZXRLZXlib2FyZDogdHJ1ZVxufTtcbmxldCB1bmljb2RlSW1lSWQgPSAnaW8uYXBwaXVtLmFuZHJvaWQuaW1lLy5Vbmljb2RlSU1FJztcblxuZGVzY3JpYmUoJ2FwaWRlbW8gLSBJTUUnLCBmdW5jdGlvbiAoKSB7XG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbihkZWZhdWx0Q2Fwcyk7XG4gIH0pO1xuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuc3RhcnRBY3Rpdml0eSgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzLkFwaURlbW9zJyk7XG4gIH0pO1xuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmRlbGV0ZVNlc3Npb24oKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZ2V0IHRoZSBkZWZhdWx0IChlbmFibGVkKSBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmdldEFjdGl2ZUlNRUVuZ2luZSgpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKHVuaWNvZGVJbWVJZCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGdldCB0aGUgYXZhaWxhYmxlIGlucHV0IG1ldGhvZHMnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmF2YWlsYWJsZUlNRUVuZ2luZXMoKS5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCg0KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYWN0aXZhdGUgYW4gaW5zdGFsbGVkIGlucHV0IG1ldGhvZCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuYWN0aXZhdGVJTUVFbmdpbmUodW5pY29kZUltZUlkKS5zaG91bGQubm90LmJlLnJlamVjdGVkO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmYWlsIHRvIGFjdGl2YXRlIGFuIHVuaW5zdGFsbGVkIGlucHV0IG1ldGhvZCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgaW52YWxpZEltZUlkID0gJ3NkZi53ZXIuZ2Rhc2Rmc2YvLk9zZGZFZmdkJztcbiAgICBhd2FpdCBkcml2ZXIuYWN0aXZhdGVJTUVFbmdpbmUoaW52YWxpZEltZUlkKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL25vdCBhdmFpbGFibGUvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZGVhY3RpdmF0ZSB0aGUgY3VycmVudCBpbnB1dCBtZXRob2QnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmFjdGl2YXRlSU1FRW5naW5lKHVuaWNvZGVJbWVJZCk7XG4gICAgYXdhaXQgZHJpdmVyLmdldEFjdGl2ZUlNRUVuZ2luZSgpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKHVuaWNvZGVJbWVJZCk7XG4gICAgYXdhaXQgZHJpdmVyLmRlYWN0aXZhdGVJTUVFbmdpbmUoKTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0QWN0aXZlSU1FRW5naW5lKCkuc2hvdWxkLmV2ZW50dWFsbHkubm90LmVxdWFsKHVuaWNvZGVJbWVJZCk7XG4gIH0pO1xufSk7XG4iXX0=