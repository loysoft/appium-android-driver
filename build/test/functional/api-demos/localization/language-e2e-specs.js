'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../../../..');

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

describe('Localization - language and country @skip-ci @skip-real-device', function () {
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
  it('should set language to FR', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.adb.setDeviceLanguage('FR'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.adb.getDeviceLanguage().should.eventually.equal('fr'));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should set country to US', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.adb.setDeviceCountry('US'));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.adb.getDeviceCountry().should.eventually.equal('US'));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});

describe('Localization - locale @skip-ci @skip-real-device', function () {
  var _this2 = this;

  // Stalls on API 23, works in CI
  beforeEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = new _.AndroidDriver();

        case 1:
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
  it('should start as FR', function callee$1$0() {
    var frCaps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          frCaps = _Object$assign({}, defaultCaps, { locale: 'FR' });
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(frCaps));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.adb.getDeviceCountry().should.eventually.equal('FR'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
  it('should start as US', function callee$1$0() {
    var usCaps;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          usCaps = _Object$assign({}, defaultCaps, { locale: 'US' });
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(usCaps));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.adb.getDeviceCountry().should.eventually.equal('US'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this2);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvbG9jYWxpemF0aW9uL2xhbmd1YWdlLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7Z0JBQ2YsYUFBYTs7MEJBQ3BCLGFBQWE7Ozs7QUFFcEMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixJQUFJLE1BQU0sWUFBQSxDQUFDO0FBQ1gsSUFBSSxXQUFXLEdBQUc7QUFDaEIsS0FBRyxFQUFFLDZCQUFXLGdCQUFnQixDQUFDO0FBQ2pDLFlBQVUsRUFBRSxTQUFTO0FBQ3JCLGNBQVksRUFBRSxTQUFTO0NBQ3hCLENBQUM7O0FBRUYsUUFBUSxDQUFDLGdFQUFnRSxFQUFFLFlBQVk7OztBQUNyRixRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywyQkFBMkIsRUFBRTs7Ozs7MkNBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzs7OzJDQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0dBQ25FLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQywwQkFBMEIsRUFBRTs7Ozs7MkNBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOzs7OzJDQUNqQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0dBQ2xFLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsa0RBQWtELEVBQUUsWUFBVzs7OztBQUV0RSxZQUFVLENBQUM7Ozs7QUFDVCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzs7Ozs7O0dBQzlCLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFDbkIsTUFBTTs7OztBQUFOLGdCQUFNLEdBQUcsZUFBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzsyQ0FDckQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Ozs7MkNBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7R0FDbEUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBQ25CLE1BQU07Ozs7QUFBTixnQkFBTSxHQUFHLGVBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzs7MkNBQ3JELE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOzs7OzJDQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0dBQ2xFLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL2xvY2FsaXphdGlvbi9sYW5ndWFnZS1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLi8uLic7XG5pbXBvcnQgc2FtcGxlQXBwcyBmcm9tICdzYW1wbGUtYXBwcyc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmxldCBkcml2ZXI7XG5sZXQgZGVmYXVsdENhcHMgPSB7XG4gIGFwcDogc2FtcGxlQXBwcygnQXBpRGVtb3MtZGVidWcnKSxcbiAgZGV2aWNlTmFtZTogJ0FuZHJvaWQnLFxuICBwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJ1xufTtcblxuZGVzY3JpYmUoJ0xvY2FsaXphdGlvbiAtIGxhbmd1YWdlIGFuZCBjb3VudHJ5IEBza2lwLWNpIEBza2lwLXJlYWwtZGV2aWNlJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHNldCBsYW5ndWFnZSB0byBGUicsIGFzeW5jICgpID0+IHsgICAgXG4gICAgYXdhaXQgZHJpdmVyLmFkYi5zZXREZXZpY2VMYW5ndWFnZSgnRlInKTtcbiAgICBhd2FpdCBkcml2ZXIuYWRiLmdldERldmljZUxhbmd1YWdlKCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ2ZyJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHNldCBjb3VudHJ5IHRvIFVTJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5hZGIuc2V0RGV2aWNlQ291bnRyeSgnVVMnKTtcbiAgICBhd2FpdCBkcml2ZXIuYWRiLmdldERldmljZUNvdW50cnkoKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnVVMnKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ0xvY2FsaXphdGlvbiAtIGxvY2FsZSBAc2tpcC1jaSBAc2tpcC1yZWFsLWRldmljZScsIGZ1bmN0aW9uKCkge1xuICAvLyBTdGFsbHMgb24gQVBJIDIzLCB3b3JrcyBpbiBDSVxuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHN0YXJ0IGFzIEZSJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmckNhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2Fwcywge2xvY2FsZTogJ0ZSJ30pO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGZyQ2Fwcyk7XG4gICAgYXdhaXQgZHJpdmVyLmFkYi5nZXREZXZpY2VDb3VudHJ5KCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0ZSJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHN0YXJ0IGFzIFVTJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCB1c0NhcHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2Fwcywge2xvY2FsZTogJ1VTJ30pO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKHVzQ2Fwcyk7XG4gICAgYXdhaXQgZHJpdmVyLmFkYi5nZXREZXZpY2VDb3VudHJ5KCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ1VTJyk7XG4gIH0pO1xufSk7XG4iXX0=