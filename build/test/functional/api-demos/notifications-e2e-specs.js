'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

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
  platformName: 'Android',
  appActivity: '.app.StatusBarNotifications'
};

describe('apidemo - notifications', function () {
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
  it('should open the notification shade @skip-ci', function callee$1$0() {
    var el, textViews, text, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, view;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('accessibility id', ':-|', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.click(el.ELEMENT));

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.openNotifications());

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(_bluebird2['default'].delay(500));

        case 9:
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'android.widget.TextView', true));

        case 11:
          textViews = context$2$0.sent;
          text = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          context$2$0.prev = 16;
          _iterator = _getIterator(textViews);

        case 18:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            context$2$0.next = 28;
            break;
          }

          view = _step.value;
          context$2$0.t0 = text;
          context$2$0.next = 23;
          return _regeneratorRuntime.awrap(driver.getText(view.ELEMENT));

        case 23:
          context$2$0.t1 = context$2$0.sent;
          context$2$0.t0.push.call(context$2$0.t0, context$2$0.t1);

        case 25:
          _iteratorNormalCompletion = true;
          context$2$0.next = 18;
          break;

        case 28:
          context$2$0.next = 34;
          break;

        case 30:
          context$2$0.prev = 30;
          context$2$0.t2 = context$2$0['catch'](16);
          _didIteratorError = true;
          _iteratorError = context$2$0.t2;

        case 34:
          context$2$0.prev = 34;
          context$2$0.prev = 35;

          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }

        case 37:
          context$2$0.prev = 37;

          if (!_didIteratorError) {
            context$2$0.next = 40;
            break;
          }

          throw _iteratorError;

        case 40:
          return context$2$0.finish(37);

        case 41:
          return context$2$0.finish(34);

        case 42:
          text.should.include('Mood ring');
          context$2$0.next = 45;
          return _regeneratorRuntime.awrap(driver.keyevent(4));

        case 45:
          context$2$0.next = 47;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.become(':-|'));

        case 47:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this, [[16, 30, 34, 42], [35,, 37, 41]]);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3Mvbm90aWZpY2F0aW9ucy1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNmLFVBQVU7OzBCQUNqQixhQUFhOzs7O3dCQUN0QixVQUFVOzs7O0FBRXhCLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSw2QkFBVyxnQkFBZ0IsQ0FBQztBQUNqQyxZQUFVLEVBQUUsU0FBUztBQUNyQixjQUFZLEVBQUUsU0FBUztBQUN2QixhQUFXLEVBQUUsNkJBQTZCO0NBQzNDLENBQUM7O0FBRUYsUUFBUSxDQUFDLHlCQUF5QixFQUFFLFlBQVk7OztBQUM5QyxRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtRQUM1QyxFQUFFLEVBSUYsU0FBUyxFQUNULElBQUksa0ZBQ0MsSUFBSTs7Ozs7OzJDQU5FLE1BQU0sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzs7O0FBQS9ELFlBQUU7OzJDQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs7OzsyQ0FDeEIsTUFBTSxDQUFDLGlCQUFpQixFQUFFOzs7OzJDQUMxQixzQkFBRSxLQUFLLENBQUMsR0FBRyxDQUFDOzs7OzJDQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLHlCQUF5QixFQUFFLElBQUksQ0FBQzs7O0FBQW5GLG1CQUFTO0FBQ1QsY0FBSSxHQUFHLEVBQUU7Ozs7O21DQUNJLFNBQVM7Ozs7Ozs7O0FBQWpCLGNBQUk7MkJBQ1gsSUFBSTs7MkNBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7O3lCQUF2QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxjQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7MkNBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OzJDQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzs7Ozs7OztHQUN0RCxDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2FwaS1kZW1vcy9ub3RpZmljYXRpb25zLWUyZS1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHsgQW5kcm9pZERyaXZlciB9IGZyb20gJy4uLy4uLy4uJztcbmltcG9ydCBzYW1wbGVBcHBzIGZyb20gJ3NhbXBsZS1hcHBzJztcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxubGV0IGRyaXZlcjtcbmxldCBkZWZhdWx0Q2FwcyA9IHtcbiAgYXBwOiBzYW1wbGVBcHBzKCdBcGlEZW1vcy1kZWJ1ZycpLFxuICBkZXZpY2VOYW1lOiAnQW5kcm9pZCcsXG4gIHBsYXRmb3JtTmFtZTogJ0FuZHJvaWQnLFxuICBhcHBBY3Rpdml0eTogJy5hcHAuU3RhdHVzQmFyTm90aWZpY2F0aW9ucydcbn07XG5cbmRlc2NyaWJlKCdhcGlkZW1vIC0gbm90aWZpY2F0aW9ucycsIGZ1bmN0aW9uICgpIHtcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGRlZmF1bHRDYXBzKTtcbiAgfSk7XG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZGVsZXRlU2Vzc2lvbigpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBvcGVuIHRoZSBub3RpZmljYXRpb24gc2hhZGUgQHNraXAtY2knLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdhY2Nlc3NpYmlsaXR5IGlkJywgJzotfCcsIGZhbHNlKTtcbiAgICBhd2FpdCBkcml2ZXIuY2xpY2soZWwuRUxFTUVOVCk7XG4gICAgYXdhaXQgZHJpdmVyLm9wZW5Ob3RpZmljYXRpb25zKCk7XG4gICAgYXdhaXQgQi5kZWxheSg1MDApO1xuICAgIGxldCB0ZXh0Vmlld3MgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2NsYXNzIG5hbWUnLCAnYW5kcm9pZC53aWRnZXQuVGV4dFZpZXcnLCB0cnVlKTtcbiAgICBsZXQgdGV4dCA9IFtdO1xuICAgIGZvciAobGV0IHZpZXcgb2YgdGV4dFZpZXdzKSB7XG4gICAgICB0ZXh0LnB1c2goYXdhaXQgZHJpdmVyLmdldFRleHQodmlldy5FTEVNRU5UKSk7XG4gICAgfVxuICAgIHRleHQuc2hvdWxkLmluY2x1ZGUoJ01vb2QgcmluZycpO1xuICAgIGF3YWl0IGRyaXZlci5rZXlldmVudCg0KTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChlbC5FTEVNRU5UKS5zaG91bGQuYmVjb21lKCc6LXwnKTtcbiAgfSk7XG59KTtcbiJdfQ==