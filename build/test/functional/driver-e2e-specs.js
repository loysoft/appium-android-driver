'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../..');

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

describe('createSession', function () {
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
  it('should start android session focusing on default pkg and act', function callee$1$0() {
    var _ref, appPackage, appActivity;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.createSession(defaultCaps));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.adb.getFocusedPackageAndActivity());

        case 4:
          _ref = context$2$0.sent;
          appPackage = _ref.appPackage;
          appActivity = _ref.appActivity;

          appPackage.should.equal('io.appium.android.apis');
          appActivity.should.equal('.ApiDemos');

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should start android session focusing on custom pkg and act', function callee$1$0() {
    var caps, _ref2, appPackage, appActivity;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = '.view.SplitTouchView';
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.createSession(caps));

        case 5:
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.adb.getFocusedPackageAndActivity());

        case 7:
          _ref2 = context$2$0.sent;
          appPackage = _ref2.appPackage;
          appActivity = _ref2.appActivity;

          appPackage.should.equal(caps.appPackage);
          appActivity.should.equal(caps.appActivity);

        case 12:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error out for not apk extention', function callee$1$0() {
    var caps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.app = 'foo';
          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = '.view.SplitTouchView';
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps).should.eventually.be.rejectedWith(/apk/));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error out if neither an app or a browser is defined', function callee$1$0() {
    var caps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.app = '';
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.createSession(caps).should.eventually.be.rejectedWith(/include/));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error out if both an app and a browser is defined', function callee$1$0() {
    var caps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.browserName = 'Chrome';
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.createSession(caps).should.eventually.be.rejectedWith(/both/));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error out for invalid app path', function callee$1$0() {
    var caps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.app = 'foo.apk';
          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = '.view.SplitTouchView';
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps).should.eventually.be.rejectedWith(/Could not find app/));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to start session without launching or installing app', function callee$1$0() {
    var caps, _ref3, appPackage, appActivity;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = '.view.SplitTouchView';
          caps.autoLaunch = false;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.adb.getFocusedPackageAndActivity());

        case 8:
          _ref3 = context$2$0.sent;
          appPackage = _ref3.appPackage;
          appActivity = _ref3.appActivity;

          appPackage.should.not.equal(caps.appPackage);
          appActivity.should.not.equal(caps.appActivity);

        case 13:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to launch activity with custom intent parameter category', function callee$1$0() {
    var caps, _ref4, appActivity;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = 'io.appium.android.apis.app.HelloWorld';
          caps.intentCategory = 'appium.android.intent.category.SAMPLE_CODE';
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.adb.getFocusedPackageAndActivity());

        case 8:
          _ref4 = context$2$0.sent;
          appActivity = _ref4.appActivity;

          appActivity.should.include('HelloWorld');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to load an app via package', function callee$1$0() {
    var caps, _ref5, appPackage;

    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.app = '';
          caps.appPackage = 'io.appium.android.apis';
          caps.appActivity = '.ApiDemos';
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps));

        case 6:
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.adb.getFocusedPackageAndActivity());

        case 8:
          _ref5 = context$2$0.sent;
          appPackage = _ref5.appPackage;

          appPackage.should.include('io.appium.android.apis');

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error out if package is not on the device', function callee$1$0() {
    var caps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          caps = _Object$assign({}, defaultCaps);

          caps.app = '';
          caps.appPackage = 'sipa.diordna.muippa.oi';
          caps.appActivity = '.ApiDemos';
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.createSession(caps).should.eventually.be.rejectedWith(/Could not find package/));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9kcml2ZXItZTJlLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixPQUFPOzswQkFDZCxhQUFhOzs7O0FBRXBDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSw2QkFBVyxnQkFBZ0IsQ0FBQztBQUNqQyxZQUFVLEVBQUUsU0FBUztBQUNyQixjQUFZLEVBQUUsU0FBUztDQUN4QixDQUFDOztBQUVGLFFBQVEsQ0FBQyxlQUFlLEVBQUUsWUFBWTs7O0FBQ3BDLFFBQU0sQ0FBQyxZQUFNO0FBQ1gsVUFBTSxHQUFHLHFCQUFtQixDQUFDO0dBQzlCLENBQUMsQ0FBQztBQUNILFdBQVMsQ0FBQzs7Ozs7MkNBQ0YsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsOERBQThELEVBQUU7Y0FFNUQsVUFBVSxFQUFFLFdBQVc7Ozs7OzsyQ0FEdEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7MkNBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRTs7OztBQUExRSxvQkFBVSxRQUFWLFVBQVU7QUFBRSxxQkFBVyxRQUFYLFdBQVc7O0FBQzVCLG9CQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2xELHFCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7OztHQUN2QyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsNkRBQTZELEVBQUU7UUFDNUQsSUFBSSxTQUlILFVBQVUsRUFBRSxXQUFXOzs7OztBQUp4QixjQUFJLEdBQUcsZUFBYyxFQUFFLEVB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Ozs7Ozs7O0dBQ3JELENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxrREFBa0QsRUFBRTtRQUNqRCxJQUFJOzs7O0FBQUosY0FBSSxHQUFHLGVBQWMsRUFBRSxFQUFFLFdBQVcsQ0FBQzs7QUFDekMsY0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZCxjQUFJLENBQUMsVUFBVSxHQUFHLHdCQUF3QixDQUFDO0FBQzNDLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDOzsyQ0FDekIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUM7Ozs7Ozs7R0FDN0YsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9kcml2ZXItZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHNhbXBsZUFwcHMgZnJvbSAnc2FtcGxlLWFwcHMnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5cbmRlc2NyaWJlKCdjcmVhdGVTZXNzaW9uJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gIH0pO1xuICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHN0YXJ0IGFuZHJvaWQgc2Vzc2lvbiBmb2N1c2luZyBvbiBkZWZhdWx0IHBrZyBhbmQgYWN0JywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGRlZmF1bHRDYXBzKTtcbiAgICBsZXQge2FwcFBhY2thZ2UsIGFwcEFjdGl2aXR5fSA9IGF3YWl0IGRyaXZlci5hZGIuZ2V0Rm9jdXNlZFBhY2thZ2VBbmRBY3Rpdml0eSgpO1xuICAgIGFwcFBhY2thZ2Uuc2hvdWxkLmVxdWFsKCdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJyk7XG4gICAgYXBwQWN0aXZpdHkuc2hvdWxkLmVxdWFsKCcuQXBpRGVtb3MnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgc3RhcnQgYW5kcm9pZCBzZXNzaW9uIGZvY3VzaW5nIG9uIGN1c3RvbSBwa2cgYW5kIGFjdCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDYXBzKTtcbiAgICBjYXBzLmFwcFBhY2thZ2UgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcyc7XG4gICAgY2Fwcy5hcHBBY3Rpdml0eSA9ICcudmlldy5TcGxpdFRvdWNoVmlldyc7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oY2Fwcyk7XG4gICAgbGV0IHthcHBQYWNrYWdlLCBhcHBBY3Rpdml0eX0gPSBhd2FpdCBkcml2ZXIuYWRiLmdldEZvY3VzZWRQYWNrYWdlQW5kQWN0aXZpdHkoKTtcbiAgICBhcHBQYWNrYWdlLnNob3VsZC5lcXVhbChjYXBzLmFwcFBhY2thZ2UpO1xuICAgIGFwcEFjdGl2aXR5LnNob3VsZC5lcXVhbChjYXBzLmFwcEFjdGl2aXR5KTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZXJyb3Igb3V0IGZvciBub3QgYXBrIGV4dGVudGlvbicsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDYXBzKTtcbiAgICBjYXBzLmFwcCA9ICdmb28nO1xuICAgIGNhcHMuYXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcbiAgICBjYXBzLmFwcEFjdGl2aXR5ID0gJy52aWV3LlNwbGl0VG91Y2hWaWV3JztcbiAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbihjYXBzKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL2Fway8pO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBlcnJvciBvdXQgaWYgbmVpdGhlciBhbiBhcHAgb3IgYSBicm93c2VyIGlzIGRlZmluZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2Fwcyk7XG4gICAgY2Fwcy5hcHAgPSAnJztcbiAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbihjYXBzKS5zaG91bGQuZXZlbnR1YWxseS5iZS5yZWplY3RlZFdpdGgoL2luY2x1ZGUvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZXJyb3Igb3V0IGlmIGJvdGggYW4gYXBwIGFuZCBhIGJyb3dzZXIgaXMgZGVmaW5lZCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDYXBzKTtcbiAgICBjYXBzLmJyb3dzZXJOYW1lID0gJ0Nocm9tZSc7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oY2Fwcykuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9ib3RoLyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGVycm9yIG91dCBmb3IgaW52YWxpZCBhcHAgcGF0aCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDYXBzKTtcbiAgICBjYXBzLmFwcCA9ICdmb28uYXBrJztcbiAgICBjYXBzLmFwcFBhY2thZ2UgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcyc7XG4gICAgY2Fwcy5hcHBBY3Rpdml0eSA9ICcudmlldy5TcGxpdFRvdWNoVmlldyc7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oY2Fwcykuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9Db3VsZCBub3QgZmluZCBhcHAvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBzdGFydCBzZXNzaW9uIHdpdGhvdXQgbGF1bmNoaW5nIG9yIGluc3RhbGxpbmcgYXBwJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjYXBzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENhcHMpO1xuICAgIGNhcHMuYXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcbiAgICBjYXBzLmFwcEFjdGl2aXR5ID0gJy52aWV3LlNwbGl0VG91Y2hWaWV3JztcbiAgICBjYXBzLmF1dG9MYXVuY2ggPSBmYWxzZTtcbiAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbihjYXBzKTtcbiAgICBsZXQge2FwcFBhY2thZ2UsIGFwcEFjdGl2aXR5fSA9IGF3YWl0IGRyaXZlci5hZGIuZ2V0Rm9jdXNlZFBhY2thZ2VBbmRBY3Rpdml0eSgpO1xuICAgIGFwcFBhY2thZ2Uuc2hvdWxkLm5vdC5lcXVhbChjYXBzLmFwcFBhY2thZ2UpO1xuICAgIGFwcEFjdGl2aXR5LnNob3VsZC5ub3QuZXF1YWwoY2Fwcy5hcHBBY3Rpdml0eSk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gbGF1bmNoIGFjdGl2aXR5IHdpdGggY3VzdG9tIGludGVudCBwYXJhbWV0ZXIgY2F0ZWdvcnknLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2Fwcyk7XG4gICAgY2Fwcy5hcHBQYWNrYWdlID0gJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnO1xuICAgIGNhcHMuYXBwQWN0aXZpdHkgPSAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcy5hcHAuSGVsbG9Xb3JsZCc7XG4gICAgY2Fwcy5pbnRlbnRDYXRlZ29yeSA9ICdhcHBpdW0uYW5kcm9pZC5pbnRlbnQuY2F0ZWdvcnkuU0FNUExFX0NPREUnO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGNhcHMpO1xuICAgIGxldCB7YXBwQWN0aXZpdHl9ID0gYXdhaXQgZHJpdmVyLmFkYi5nZXRGb2N1c2VkUGFja2FnZUFuZEFjdGl2aXR5KCk7XG4gICAgYXBwQWN0aXZpdHkuc2hvdWxkLmluY2x1ZGUoJ0hlbGxvV29ybGQnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBsb2FkIGFuIGFwcCB2aWEgcGFja2FnZScsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2FwcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDYXBzKTtcbiAgICBjYXBzLmFwcCA9ICcnO1xuICAgIGNhcHMuYXBwUGFja2FnZSA9ICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzJztcbiAgICBjYXBzLmFwcEFjdGl2aXR5ID0gJy5BcGlEZW1vcyc7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oY2Fwcyk7XG4gICAgbGV0IHthcHBQYWNrYWdlfSA9IGF3YWl0IGRyaXZlci5hZGIuZ2V0Rm9jdXNlZFBhY2thZ2VBbmRBY3Rpdml0eSgpO1xuICAgIGFwcFBhY2thZ2Uuc2hvdWxkLmluY2x1ZGUoJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXMnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZXJyb3Igb3V0IGlmIHBhY2thZ2UgaXMgbm90IG9uIHRoZSBkZXZpY2UnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2Fwcyk7XG4gICAgY2Fwcy5hcHAgPSAnJztcbiAgICBjYXBzLmFwcFBhY2thZ2UgPSAnc2lwYS5kaW9yZG5hLm11aXBwYS5vaSc7XG4gICAgY2Fwcy5hcHBBY3Rpdml0eSA9ICcuQXBpRGVtb3MnO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGNhcHMpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvQ291bGQgbm90IGZpbmQgcGFja2FnZS8pO1xuICB9KTtcbn0pO1xuIl19