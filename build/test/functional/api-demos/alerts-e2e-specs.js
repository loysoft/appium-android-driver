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
  platformName: 'Android'
};

describe('Commands', function () {
  var _this = this;

  before(function () {
    driver = new _.AndroidDriver();
  });
  afterEach(function callee$1$0() {
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
  describe('Alerts', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      var _this2 = this;

      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          it('should throw a notYetImplemented error for alert methods', function callee$2$0() {
            return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
                case 0:
                  context$3$0.next = 2;
                  return _regeneratorRuntime.awrap(driver.createSession(defaultCaps));

                case 2:
                  context$3$0.next = 4;
                  return _regeneratorRuntime.awrap(driver.getAlertText().should.eventually.be.rejectedWith(/implemented/));

                case 4:
                  context$3$0.next = 6;
                  return _regeneratorRuntime.awrap(driver.setAlertText('new text').should.eventually.be.rejectedWith(/implemented/));

                case 6:
                  context$3$0.next = 8;
                  return _regeneratorRuntime.awrap(driver.postAcceptAlert().should.eventually.be.rejectedWith(/implemented/));

                case 8:
                  context$3$0.next = 10;
                  return _regeneratorRuntime.awrap(driver.postDismissAlert().should.eventually.be.rejectedWith(/implemented/));

                case 10:
                case 'end':
                  return context$3$0.stop();
              }
            }, null, _this2);
          });

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvYWxlcnRzLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNmLFVBQVU7OzBCQUNqQixhQUFhOzs7O0FBRXBDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSw2QkFBVyxnQkFBZ0IsQ0FBQztBQUNqQyxZQUFVLEVBQUUsU0FBUztBQUNyQixjQUFZLEVBQUUsU0FBUztDQUN4QixDQUFDOztBQUVGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWTs7O0FBQy9CLFFBQU0sQ0FBQyxZQUFNO0FBQ1gsVUFBTSxHQUFHLHFCQUFtQixDQUFDO0dBQzlCLENBQUMsQ0FBQztBQUNILFdBQVMsQ0FBQzs7Ozs7MkNBQ0YsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsUUFBUSxFQUFFOzs7Ozs7QUFDakIsWUFBRSxDQUFDLDBEQUEwRCxFQUFFOzs7OzttREFDdkQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7bURBQ2pDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDOzs7O21EQUN0RSxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7Ozs7bURBQ2hGLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDOzs7O21EQUN6RSxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDOzs7Ozs7O1dBQ2pGLENBQUMsQ0FBQzs7Ozs7OztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL2FsZXJ0cy1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgc2FtcGxlQXBwcyBmcm9tICdzYW1wbGUtYXBwcyc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmxldCBkcml2ZXI7XG5sZXQgZGVmYXVsdENhcHMgPSB7XG4gIGFwcDogc2FtcGxlQXBwcygnQXBpRGVtb3MtZGVidWcnKSxcbiAgZGV2aWNlTmFtZTogJ0FuZHJvaWQnLFxuICBwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJ1xufTtcblxuZGVzY3JpYmUoJ0NvbW1hbmRzJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gIH0pO1xuICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBkZXNjcmliZSgnQWxlcnRzJywgYXN5bmMgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgdGhyb3cgYSBub3RZZXRJbXBsZW1lbnRlZCBlcnJvciBmb3IgYWxlcnQgbWV0aG9kcycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGRlZmF1bHRDYXBzKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRBbGVydFRleHQoKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL2ltcGxlbWVudGVkLyk7XG4gICAgICBhd2FpdCBkcml2ZXIuc2V0QWxlcnRUZXh0KCduZXcgdGV4dCcpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvaW1wbGVtZW50ZWQvKTtcbiAgICAgIGF3YWl0IGRyaXZlci5wb3N0QWNjZXB0QWxlcnQoKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL2ltcGxlbWVudGVkLyk7XG4gICAgICBhd2FpdCBkcml2ZXIucG9zdERpc21pc3NBbGVydCgpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvaW1wbGVtZW50ZWQvKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==