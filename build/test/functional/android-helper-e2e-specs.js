'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _buildLibAndroidHelpers = require('../../../build/lib/android-helpers');

var _buildLibAndroidHelpers2 = _interopRequireDefault(_buildLibAndroidHelpers);

var _sampleApps = require('sample-apps');

var _sampleApps2 = _interopRequireDefault(_sampleApps);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

var apiDemos = (0, _sampleApps2['default'])('ApiDemos-debug');
var appPackage = 'io.appium.android.apis';

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('android-helpers e2e', function () {
  describe('installApkRemotely', function () {
    it('installs an apk by pushing it to the device then installing it from within', function callee$2$0() {
      var adb;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            this.timeout(15000);
            context$3$0.next = 3;
            return _regeneratorRuntime.awrap(_appiumAdb2['default'].createADB());

          case 3:
            adb = context$3$0.sent;
            context$3$0.next = 6;
            return _regeneratorRuntime.awrap(adb.uninstallApk(appPackage));

          case 6:
            context$3$0.next = 8;
            return _regeneratorRuntime.awrap(adb.isAppInstalled(appPackage).should.eventually.be['false']);

          case 8:
            context$3$0.next = 10;
            return _regeneratorRuntime.awrap(_buildLibAndroidHelpers2['default'].installApkRemotely(adb, apiDemos, appPackage));

          case 10:
            context$3$0.next = 12;
            return _regeneratorRuntime.awrap(adb.isAppInstalled(appPackage).should.eventually.be['true']);

          case 12:
          case 'end':
            return context$3$0.stop();
        }
      }, null, this);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hbmRyb2lkLWhlbHBlci1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztzQ0FDekIsb0NBQW9DOzs7OzBCQUNqQyxhQUFhOzs7O3lCQUNwQixZQUFZOzs7O0FBRTVCLElBQUksUUFBUSxHQUFHLDZCQUFXLGdCQUFnQixDQUFDLENBQUM7QUFDNUMsSUFBSSxVQUFVLEdBQUcsd0JBQXdCLENBQUM7O0FBRTFDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsUUFBUSxDQUFDLHFCQUFxQixFQUFFLFlBQU07QUFDcEMsVUFBUSxDQUFDLG9CQUFvQixFQUFFLFlBQU07QUFDbkMsTUFBRSxDQUFDLDRFQUE0RSxFQUFFO1VBRTNFLEdBQUc7Ozs7QUFEUCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7NkNBQ0osdUJBQUksU0FBUyxFQUFFOzs7QUFBM0IsZUFBRzs7NkNBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Ozs7NkNBQzVCLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQU07Ozs7NkNBQ3pELG9DQUFRLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDOzs7OzZDQUNyRCxHQUFHLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFLOzs7Ozs7O0tBQy9ELENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYW5kcm9pZC1oZWxwZXItZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9idWlsZC9saWIvYW5kcm9pZC1oZWxwZXJzJztcbmltcG9ydCBzYW1wbGVBcHBzIGZyb20gJ3NhbXBsZS1hcHBzJztcbmltcG9ydCBBREIgZnJvbSAnYXBwaXVtLWFkYic7XG5cbmxldCBhcGlEZW1vcyA9IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyk7XG5sZXQgYXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcblxuY2hhaS5zaG91bGQoKTtcbmNoYWkudXNlKGNoYWlBc1Byb21pc2VkKTtcblxuZGVzY3JpYmUoJ2FuZHJvaWQtaGVscGVycyBlMmUnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdpbnN0YWxsQXBrUmVtb3RlbHknLCAoKSA9PiB7XG4gICAgaXQoJ2luc3RhbGxzIGFuIGFwayBieSBwdXNoaW5nIGl0IHRvIHRoZSBkZXZpY2UgdGhlbiBpbnN0YWxsaW5nIGl0IGZyb20gd2l0aGluJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50aW1lb3V0KDE1MDAwKTtcbiAgICAgIHZhciBhZGIgPSBhd2FpdCBBREIuY3JlYXRlQURCKCk7XG4gICAgICBhd2FpdCBhZGIudW5pbnN0YWxsQXBrKGFwcFBhY2thZ2UpO1xuICAgICAgYXdhaXQgYWRiLmlzQXBwSW5zdGFsbGVkKGFwcFBhY2thZ2UpLnNob3VsZC5ldmVudHVhbGx5LmJlLmZhbHNlO1xuICAgICAgYXdhaXQgaGVscGVycy5pbnN0YWxsQXBrUmVtb3RlbHkoYWRiLCBhcGlEZW1vcywgYXBwUGFja2FnZSk7XG4gICAgICBhd2FpdCBhZGIuaXNBcHBJbnN0YWxsZWQoYXBwUGFja2FnZSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==