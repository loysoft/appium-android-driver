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

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android'
};

describe('apidemo - orientation', function () {
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
  it('should rotate screen to landscape', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.setOrientation('LANDSCAPE'));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 8:
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('LANDSCAPE'));

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should rotate screen to landscape', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.setOrientation('LANDSCAPE'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 8:
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('PORTRAIT'));

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not error when trying to rotate to portrait again', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 4:
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.setOrientation('PORTRAIT'));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(3000));

        case 8:
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.getOrientation().should.eventually.become('PORTRAIT'));

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3Mvb3JpZW50YXRpb24tZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7Z0JBQ2YsVUFBVTs7MEJBQ2pCLGFBQWE7Ozs7d0JBQ3RCLFVBQVU7Ozs7QUFFeEIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsSUFBSSxXQUFXLEdBQUc7QUFDaEIsS0FBRyxFQUFFLDZCQUFXLGdCQUFnQixDQUFDO0FBQ2pDLFlBQVUsRUFBRSxTQUFTO0FBQ3JCLGNBQVksRUFBRSxTQUFTO0NBQ3hCLENBQUM7O0FBRUYsUUFBUSxDQUFDLHVCQUF1QixFQUFFLFlBQVk7OztBQUM1QyxRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxtQ0FBbUMsRUFBRTs7Ozs7MkNBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOzs7OzJDQUNqQyxzQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzs7OzJDQUNiLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDOzs7OzJDQUNsQyxzQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzs7OzJDQUNiLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDcEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG1DQUFtQyxFQUFFOzs7OzsyQ0FDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7Ozs7MkNBQ2xDLHNCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7MkNBQ2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Ozs7MkNBQ2pDLHNCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7MkNBQ2IsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7Ozs7OztHQUNuRSxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsMERBQTBELEVBQUU7Ozs7OzJDQUN2RCxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7OzsyQ0FDakMsc0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQzs7OzsyQ0FDYixNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7OzsyQ0FDakMsc0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQzs7OzsyQ0FDYixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs7Ozs7O0dBQ25FLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL29yaWVudGF0aW9uLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHsgQW5kcm9pZERyaXZlciB9IGZyb20gJy4uLy4uLy4uJztcbmltcG9ydCBzYW1wbGVBcHBzIGZyb20gJ3NhbXBsZS1hcHBzJztcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxubGV0IGRyaXZlcjtcbmxldCBkZWZhdWx0Q2FwcyA9IHtcbiAgYXBwOiBzYW1wbGVBcHBzKCdBcGlEZW1vcy1kZWJ1ZycpLFxuICBkZXZpY2VOYW1lOiAnQW5kcm9pZCcsXG4gIHBsYXRmb3JtTmFtZTogJ0FuZHJvaWQnXG59O1xuXG5kZXNjcmliZSgnYXBpZGVtbyAtIG9yaWVudGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHJvdGF0ZSBzY3JlZW4gdG8gbGFuZHNjYXBlJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignUE9SVFJBSVQnKTtcbiAgICBhd2FpdCBCLmRlbGF5KDMwMDApO1xuICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignTEFORFNDQVBFJyk7XG4gICAgYXdhaXQgQi5kZWxheSgzMDAwKTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0T3JpZW50YXRpb24oKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ0xBTkRTQ0FQRScpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCByb3RhdGUgc2NyZWVuIHRvIGxhbmRzY2FwZScsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuc2V0T3JpZW50YXRpb24oJ0xBTkRTQ0FQRScpO1xuICAgIGF3YWl0IEIuZGVsYXkoMzAwMCk7XG4gICAgYXdhaXQgZHJpdmVyLnNldE9yaWVudGF0aW9uKCdQT1JUUkFJVCcpO1xuICAgIGF3YWl0IEIuZGVsYXkoMzAwMCk7XG4gICAgYXdhaXQgZHJpdmVyLmdldE9yaWVudGF0aW9uKCkuc2hvdWxkLmV2ZW50dWFsbHkuYmVjb21lKCdQT1JUUkFJVCcpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBub3QgZXJyb3Igd2hlbiB0cnlpbmcgdG8gcm90YXRlIHRvIHBvcnRyYWl0IGFnYWluJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignUE9SVFJBSVQnKTtcbiAgICBhd2FpdCBCLmRlbGF5KDMwMDApO1xuICAgIGF3YWl0IGRyaXZlci5zZXRPcmllbnRhdGlvbignUE9SVFJBSVQnKTtcbiAgICBhd2FpdCBCLmRlbGF5KDMwMDApO1xuICAgIGF3YWl0IGRyaXZlci5nZXRPcmllbnRhdGlvbigpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgnUE9SVFJBSVQnKTtcbiAgfSk7XG59KTtcbiJdfQ==