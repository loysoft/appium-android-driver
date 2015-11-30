'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../..');

var _sampleApps = require('sample-apps');

var _sampleApps2 = _interopRequireDefault(_sampleApps);

var _xmldom = require('xmldom');

var _xpath = require('xpath');

var _xpath2 = _interopRequireDefault(_xpath);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android'
};
var assertSource = function assertSource(source) {
  var dom, nodes;
  return _regeneratorRuntime.async(function assertSource$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        source.should.exist;
        dom = new _xmldom.DOMParser().parseFromString(source);
        nodes = _xpath2['default'].select('//android.widget.TextView[@content-desc="App"]', dom);

        nodes.length.should.equal(1);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
};

describe('apidemo - source', function () {
  var _this2 = this;

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
    }, null, _this2);
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
    }, null, _this2);
  });
  it('should return the page source', function callee$1$0() {
    var source;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getPageSource());

        case 2:
          source = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(assertSource(source));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
  it('should get less source when compression is enabled', function callee$1$0() {
    var getSourceWithoutCompression, getSourceWithCompression, sourceWithoutCompression, sourceWithCompression;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this3 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          getSourceWithoutCompression = function getSourceWithoutCompression() {
            return _regeneratorRuntime.async(function getSourceWithoutCompression$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.updateSettings({ 'ignoreUnimportantViews': false }));

                case 2:
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(driver.getPageSource());

                case 4:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 5:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this3);
          };

          getSourceWithCompression = function getSourceWithCompression() {
            return _regeneratorRuntime.async(function getSourceWithCompression$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": true }));

                case 2:
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(driver.getPageSource());

                case 4:
                  return context$3$0.abrupt('return', context$3$0.sent);

                case 5:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this3);
          };

          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(getSourceWithoutCompression());

        case 4:
          sourceWithoutCompression = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(getSourceWithCompression());

        case 7:
          sourceWithCompression = context$2$0.sent;

          sourceWithoutCompression.length.should.be.greaterThan(sourceWithCompression.length);

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3Mvc291cmNlLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7Z0JBQ2YsVUFBVTs7MEJBQ2pCLGFBQWE7Ozs7c0JBQ1YsUUFBUTs7cUJBQ2hCLE9BQU87Ozs7QUFFekIsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsSUFBSSxXQUFXLEdBQUc7QUFDaEIsS0FBRyxFQUFFLDZCQUFXLGdCQUFnQixDQUFDO0FBQ2pDLFlBQVUsRUFBRSxTQUFTO0FBQ3JCLGNBQVksRUFBRSxTQUFTO0NBQ3hCLENBQUM7QUFDRixJQUFJLFlBQVksR0FBRyxTQUFmLFlBQVksQ0FBVSxNQUFNO01BRTFCLEdBQUcsRUFDSCxLQUFLOzs7O0FBRlQsY0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDaEIsV0FBRyxHQUFHLHVCQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztBQUM3QyxhQUFLLEdBQUcsbUJBQU0sTUFBTSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsQ0FBQzs7QUFDL0UsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0NBQzlCLENBQUM7O0FBRUYsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVk7OztBQUN2QyxRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywrQkFBK0IsRUFBRTtRQUM5QixNQUFNOzs7OzsyQ0FBUyxNQUFNLENBQUMsYUFBYSxFQUFFOzs7QUFBckMsZ0JBQU07OzJDQUNKLFlBQVksQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7R0FDM0IsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG9EQUFvRCxFQUFFO1FBQ25ELDJCQUEyQixFQUkzQix3QkFBd0IsRUFJeEIsd0JBQXdCLEVBQ3hCLHFCQUFxQjs7Ozs7O0FBVHJCLHFDQUEyQixHQUFHLFNBQTlCLDJCQUEyQjs7Ozs7bURBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQzs7OzttREFDakQsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7Ozs7OztXQUNwQzs7QUFDRyxrQ0FBd0IsR0FBRyxTQUEzQix3QkFBd0I7Ozs7O21EQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFDLENBQUM7Ozs7bURBQ2hELE1BQU0sQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7Ozs7V0FDcEM7OzsyQ0FDb0MsMkJBQTJCLEVBQUU7OztBQUE5RCxrQ0FBd0I7OzJDQUNNLHdCQUF3QixFQUFFOzs7QUFBeEQsK0JBQXFCOztBQUN6QixrQ0FBd0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7R0FDckYsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3Mvc291cmNlLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHsgQW5kcm9pZERyaXZlciB9IGZyb20gJy4uLy4uLy4uJztcbmltcG9ydCBzYW1wbGVBcHBzIGZyb20gJ3NhbXBsZS1hcHBzJztcbmltcG9ydCB7IERPTVBhcnNlciB9IGZyb20gJ3htbGRvbSc7XG5pbXBvcnQgeHBhdGggZnJvbSAneHBhdGgnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5sZXQgYXNzZXJ0U291cmNlID0gYXN5bmMgKHNvdXJjZSkgPT4ge1xuICBzb3VyY2Uuc2hvdWxkLmV4aXN0O1xuICBsZXQgZG9tID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzb3VyY2UpO1xuICBsZXQgbm9kZXMgPSB4cGF0aC5zZWxlY3QoJy8vYW5kcm9pZC53aWRnZXQuVGV4dFZpZXdbQGNvbnRlbnQtZGVzYz1cIkFwcFwiXScsIGRvbSk7XG4gIG5vZGVzLmxlbmd0aC5zaG91bGQuZXF1YWwoMSk7XG59O1xuXG5kZXNjcmliZSgnYXBpZGVtbyAtIHNvdXJjZScsIGZ1bmN0aW9uICgpIHtcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGRlZmF1bHRDYXBzKTtcbiAgfSk7XG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZGVsZXRlU2Vzc2lvbigpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIHBhZ2Ugc291cmNlJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBzb3VyY2UgPSBhd2FpdCBkcml2ZXIuZ2V0UGFnZVNvdXJjZSgpO1xuICAgIGF3YWl0IGFzc2VydFNvdXJjZShzb3VyY2UpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBnZXQgbGVzcyBzb3VyY2Ugd2hlbiBjb21wcmVzc2lvbiBpcyBlbmFibGVkJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBnZXRTb3VyY2VXaXRob3V0Q29tcHJlc3Npb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBkcml2ZXIudXBkYXRlU2V0dGluZ3MoeydpZ25vcmVVbmltcG9ydGFudFZpZXdzJzogZmFsc2V9KTtcbiAgICAgIHJldHVybiBhd2FpdCBkcml2ZXIuZ2V0UGFnZVNvdXJjZSgpO1xuICAgIH07XG4gICAgbGV0IGdldFNvdXJjZVdpdGhDb21wcmVzc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRyaXZlci51cGRhdGVTZXR0aW5ncyh7XCJpZ25vcmVVbmltcG9ydGFudFZpZXdzXCI6IHRydWV9KTtcbiAgICAgIHJldHVybiBhd2FpdCBkcml2ZXIuZ2V0UGFnZVNvdXJjZSgpO1xuICAgIH07XG4gICAgbGV0IHNvdXJjZVdpdGhvdXRDb21wcmVzc2lvbiA9IGF3YWl0IGdldFNvdXJjZVdpdGhvdXRDb21wcmVzc2lvbigpO1xuICAgIGxldCBzb3VyY2VXaXRoQ29tcHJlc3Npb24gPSBhd2FpdCBnZXRTb3VyY2VXaXRoQ29tcHJlc3Npb24oKTtcbiAgICBzb3VyY2VXaXRob3V0Q29tcHJlc3Npb24ubGVuZ3RoLnNob3VsZC5iZS5ncmVhdGVyVGhhbihzb3VyY2VXaXRoQ29tcHJlc3Npb24ubGVuZ3RoKTtcbiAgfSk7XG59KTtcbiJdfQ==