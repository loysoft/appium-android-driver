'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../..');

var driver = undefined;
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('General', function () {
  describe('hideKeyboard', function () {
    it('should throw an error if no keyboard is present', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            driver.adb = {};
            driver.adb.isSoftKeyboardPresent = function () {
              return false;
            };
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.hideKeyboard().should.be.rejectedWith(/not present/));

          case 5:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
    it('should throw an error if there is no selector', function () {
      driver.findElOrEls('xpath', null, false, 'some context').should.be.rejected;
    });
  });
  describe('Install App', function () {
    it('should throw an error if APK does not exist', function callee$2$0() {
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            driver = new _.AndroidDriver();
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(driver.installApp('non/existent/app.apk').should.be.rejectedWith(/Could not find/));

          case 3:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9nZW5lcmFsLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixVQUFVOztBQUV4QyxJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsU0FBUyxFQUFFLFlBQU07QUFDeEIsVUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFNO0FBQzdCLE1BQUUsQ0FBQyxpREFBaUQsRUFBRTs7OztBQUNwRCxrQkFBTSxHQUFHLHFCQUFtQixDQUFDO0FBQzdCLGtCQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNoQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxZQUFVO0FBQUUscUJBQU8sS0FBSyxDQUFDO2FBQUUsQ0FBQzs7NkNBQ3pELE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7S0FDbEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLCtDQUErQyxFQUFFLFlBQU07QUFDeEQsWUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUM3RSxDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsYUFBYSxFQUFFLFlBQU07QUFDNUIsTUFBRSxDQUFDLDZDQUE2QyxFQUFFOzs7O0FBQ2hELGtCQUFNLEdBQUcscUJBQW1CLENBQUM7OzZDQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7Ozs7Ozs7S0FDekYsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9nZW5lcmFsLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4nO1xuXG5sZXQgZHJpdmVyO1xuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ0dlbmVyYWwnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdoaWRlS2V5Ym9hcmQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiBubyBrZXlib2FyZCBpcyBwcmVzZW50JywgYXN5bmMgKCkgPT4ge1xuICAgICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICAgIGRyaXZlci5hZGIgPSB7fTtcbiAgICAgIGRyaXZlci5hZGIuaXNTb2Z0S2V5Ym9hcmRQcmVzZW50ID0gZnVuY3Rpb24oKXsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgYXdhaXQgZHJpdmVyLmhpZGVLZXlib2FyZCgpLnNob3VsZC5iZS5yZWplY3RlZFdpdGgoL25vdCBwcmVzZW50Lyk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBubyBzZWxlY3RvcicsICgpID0+IHtcbiAgICAgIGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBudWxsLCBmYWxzZSwgJ3NvbWUgY29udGV4dCcpLnNob3VsZC5iZS5yZWplY3RlZDtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdJbnN0YWxsIEFwcCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIEFQSyBkb2VzIG5vdCBleGlzdCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgICBhd2FpdCBkcml2ZXIuaW5zdGFsbEFwcCgnbm9uL2V4aXN0ZW50L2FwcC5hcGsnKS5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKC9Db3VsZCBub3QgZmluZC8pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19