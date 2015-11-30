'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../../..');

var _sampleApps = require('sample-apps');

var _sampleApps2 = _interopRequireDefault(_sampleApps);

var _appiumAdb = require('appium-adb');

var _appiumAdb2 = _interopRequireDefault(_appiumAdb);

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android'
};

describe('Find - basic', function () {
  var _this = this;

  var singleResourceId = undefined;
  before(function callee$1$0() {
    var adb;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = new _.AndroidDriver();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(defaultCaps));

        case 3:
          adb = new _appiumAdb2['default']({});
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(adb.getApiLevel());

        case 6:
          context$2$0.t0 = context$2$0.sent;

          if (!(context$2$0.t0 >= 21)) {
            context$2$0.next = 11;
            break;
          }

          context$2$0.t1 = 'decor_content_parent';
          context$2$0.next = 12;
          break;

        case 11:
          context$2$0.t1 = 'home';

        case 12:
          singleResourceId = context$2$0.t1;

        case 13:
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
  it('should find a single element by content-description', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('accessibility id', 'Animation', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Animation'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element by class name', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'android.widget.TextView', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('API Demos'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by class name', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'android.widget.TextView', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find an element that doesnt exist', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'blargimarg', false).should.be.rejectedWith(/could not be located/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find multiple elements that doesnt exist', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'blargimarg', true).should.eventually.have.length(0));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should fail on empty locator', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', '', true).should.be.rejectedWith(/selector/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find a single element by string id @skip-android-all', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'activity_sample_code', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('API Demos'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find a single element by resource-id', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'android:id/' + singleResourceId, false).should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by resource-id', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'android:id/text1', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by resource-id even when theres just one', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'android:id/' + singleResourceId, true).should.eventually.have.length(1));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find a single element by resource-id with implicit package', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', singleResourceId, false).should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find a single element by resource-id with implicit package', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'text1', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find multiple elements by resource-id with implicit package even when theres just one', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('id', singleResourceId, true).should.eventually.have.length(1));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

// the app behaves differently on different api levels when it comes to
// which resource ids are available for testing, so we switch here to make
// sure we're using the right resource id below
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvZmluZC9maW5kLWJhc2ljLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNmLGFBQWE7OzBCQUNwQixhQUFhOzs7O3lCQUNwQixZQUFZOzs7O0FBRTVCLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxHQUFHO0FBQ2hCLEtBQUcsRUFBRSw2QkFBVyxnQkFBZ0IsQ0FBQztBQUNqQyxZQUFVLEVBQUUsU0FBUztBQUNyQixjQUFZLEVBQUUsU0FBUztDQUN4QixDQUFDOztBQUVGLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWTs7O0FBQ25DLE1BQUksZ0JBQWdCLFlBQUEsQ0FBQztBQUNyQixRQUFNLENBQUM7UUFHRCxHQUFHOzs7O0FBRlAsZ0JBQU0sR0FBRyxxQkFBbUIsQ0FBQzs7MkNBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOzs7QUFDbkMsYUFBRyxHQUFHLDJCQUFRLEVBQUUsQ0FBQzs7MkNBSUksR0FBRyxDQUFDLFdBQVcsRUFBRTs7Ozs7a0NBQUksRUFBRTs7Ozs7MkJBQUcsc0JBQXNCOzs7OzsyQkFBRyxNQUFNOzs7QUFBbEYsMEJBQWdCOzs7Ozs7O0dBQ2pCLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMscURBQXFELEVBQUU7UUFDcEQsRUFBRTs7Ozs7MkNBQVMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDOzs7QUFBckUsWUFBRTs7MkNBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFD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QVUsQ0FBQyxLQUFLOzs7Ozs7O0dBQzNCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxtRUFBbUUsRUFBRTs7Ozs7MkNBQ2hFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7Ozs7O0dBQzlDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw4RkFBOEYsRUFBRTs7Ozs7MkNBQzNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUNuRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0dBQ3BDLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL2ZpbmQvZmluZC1iYXNpYy1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLi8uLic7XG5pbXBvcnQgc2FtcGxlQXBwcyBmcm9tICdzYW1wbGUtYXBwcyc7XG5pbXBvcnQgQURCIGZyb20gJ2FwcGl1bS1hZGInO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5cbmRlc2NyaWJlKCdGaW5kIC0gYmFzaWMnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBzaW5nbGVSZXNvdXJjZUlkO1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICAgIGxldCBhZGIgPSBuZXcgQURCKHt9KTtcbiAgICAvLyB0aGUgYXBwIGJlaGF2ZXMgZGlmZmVyZW50bHkgb24gZGlmZmVyZW50IGFwaSBsZXZlbHMgd2hlbiBpdCBjb21lcyB0b1xuICAgIC8vIHdoaWNoIHJlc291cmNlIGlkcyBhcmUgYXZhaWxhYmxlIGZvciB0ZXN0aW5nLCBzbyB3ZSBzd2l0Y2ggaGVyZSB0byBtYWtlXG4gICAgLy8gc3VyZSB3ZSdyZSB1c2luZyB0aGUgcmlnaHQgcmVzb3VyY2UgaWQgYmVsb3dcbiAgICBzaW5nbGVSZXNvdXJjZUlkID0gYXdhaXQgYWRiLmdldEFwaUxldmVsKCkgPj0gMjEgPyAnZGVjb3JfY29udGVudF9wYXJlbnQnIDogJ2hvbWUnO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgYSBzaW5nbGUgZWxlbWVudCBieSBjb250ZW50LWRlc2NyaXB0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnYWNjZXNzaWJpbGl0eSBpZCcsICdBbmltYXRpb24nLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FuaW1hdGlvbicpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGFuIGVsZW1lbnQgYnkgY2xhc3MgbmFtZScsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2NsYXNzIG5hbWUnLCAnYW5kcm9pZC53aWRnZXQuVGV4dFZpZXcnLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FQSSBEZW1vcycpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIG11bHRpcGxlIGVsZW1lbnRzIGJ5IGNsYXNzIG5hbWUnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdjbGFzcyBuYW1lJywgJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3JywgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQgdGhhdCBkb2VzbnQgZXhpc3QnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdjbGFzcyBuYW1lJywgJ2JsYXJnaW1hcmcnLCBmYWxzZSlcbiAgICAgIC5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKC9jb3VsZCBub3QgYmUgbG9jYXRlZC8pO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBub3QgZmluZCBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGRvZXNudCBleGlzdCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2NsYXNzIG5hbWUnLCAnYmxhcmdpbWFyZycsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGgoMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZhaWwgb24gZW1wdHkgbG9jYXRvcicsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2NsYXNzIG5hbWUnLCAnJywgdHJ1ZSkuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgvc2VsZWN0b3IvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBhIHNpbmdsZSBlbGVtZW50IGJ5IHN0cmluZyBpZCBAc2tpcC1hbmRyb2lkLWFsbCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2lkJywgJ2FjdGl2aXR5X3NhbXBsZV9jb2RlJywgZmFsc2UpO1xuICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KGVsLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKCdBUEkgRGVtb3MnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBhIHNpbmdsZSBlbGVtZW50IGJ5IHJlc291cmNlLWlkJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnaWQnLCBgYW5kcm9pZDppZC8ke3NpbmdsZVJlc291cmNlSWR9YCwgZmFsc2UpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXhpc3Q7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgbXVsdGlwbGUgZWxlbWVudHMgYnkgcmVzb3VyY2UtaWQnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdpZCcsICdhbmRyb2lkOmlkL3RleHQxJywgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgbXVsdGlwbGUgZWxlbWVudHMgYnkgcmVzb3VyY2UtaWQgZXZlbiB3aGVuIHRoZXJlcyBqdXN0IG9uZScsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2lkJywgYGFuZHJvaWQ6aWQvJHtzaW5nbGVSZXNvdXJjZUlkfWAsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGgoMSk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgYSBzaW5nbGUgZWxlbWVudCBieSByZXNvdXJjZS1pZCB3aXRoIGltcGxpY2l0IHBhY2thZ2UnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdpZCcsIHNpbmdsZVJlc291cmNlSWQsIGZhbHNlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmV4aXN0O1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGEgc2luZ2xlIGVsZW1lbnQgYnkgcmVzb3VyY2UtaWQgd2l0aCBpbXBsaWNpdCBwYWNrYWdlJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnaWQnLCAndGV4dDEnLCB0cnVlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmhhdmUubGVuZ3RoLmF0LmxlYXN0KDEwKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBtdWx0aXBsZSBlbGVtZW50cyBieSByZXNvdXJjZS1pZCB3aXRoIGltcGxpY2l0IHBhY2thZ2UgZXZlbiB3aGVuIHRoZXJlcyBqdXN0IG9uZScsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2lkJywgc2luZ2xlUmVzb3VyY2VJZCwgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aCgxKTtcbiAgfSk7XG59KTtcbiJdfQ==