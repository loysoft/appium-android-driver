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
var animationEl = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android'
};

describe('apidemo - attributes', function () {
  var _this = this;

  before(function callee$1$0() {
    var animation;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          driver = new _.AndroidDriver();
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.createSession(defaultCaps));

        case 3:
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.findElOrEls('accessibility id', 'Animation', false));

        case 5:
          animation = context$2$0.sent;

          animationEl = animation.ELEMENT;

        case 7:
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
  it('should be able to find resourceId attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getAttribute('resourceId', animationEl).should.eventually.become('android:id/text1'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find text attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getAttribute('text', animationEl).should.eventually.become('Animation'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find name attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getAttribute('name', animationEl).should.eventually.become('Animation'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find name attribute, falling back to text', function callee$1$0() {
    var textView, textViewEl;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.click(animationEl));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.findElOrEls('class name', 'android.widget.TextView', true));

        case 4:
          textView = context$2$0.sent;
          textViewEl = textView[1].ELEMENT;
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.getAttribute('name', textViewEl).should.eventually.become('Bouncing Balls'));

        case 8:
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.back());

        case 10:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find content description attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getAttribute('contentDescription', animationEl).should.eventually.become("Animation"));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find displayed attribute', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getAttribute('displayed', animationEl).should.eventually.become('true'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to find displayed attribute through normal func', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.elementDisplayed(animationEl).should.eventually.become(true));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to get element location', function callee$1$0() {
    var location;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getLocationInView(animationEl));

        case 2:
          location = context$2$0.sent;

          location.x.should.be.at.least(0);
          location.y.should.be.at.least(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should be able to get element size', function callee$1$0() {
    var size;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.getSize(animationEl));

        case 2:
          size = context$2$0.sent;

          size.width.should.be.at.least(0);
          size.height.should.be.at.least(0);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvYXR0cmlidXRlLWUyZS1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O2dCQUNmLFVBQVU7OzBCQUNqQixhQUFhOzs7O0FBRXBDLGtCQUFLLE1BQU0sRUFBRSxDQUFDO0FBQ2Qsa0JBQUssR0FBRyw2QkFBZ0IsQ0FBQzs7QUFFekIsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksV0FBVyxZQUFBLENBQUM7QUFDaEIsSUFBSSxXQUFXLEdBQUc7QUFDaEIsS0FBRyxFQUFFLDZCQUFXLGdCQUFnQixDQUFDO0FBQ2pDLFlBQVUsRUFBRSxTQUFTO0FBQ3JCLGNBQVksRUFBRSxTQUFTO0NBQ3hCLENBQUM7O0FBRUYsUUFBUSxDQUFDLHNCQUFzQixFQUFFLFlBQVk7OztBQUMzQyxRQUFNLENBQUM7UUFHRCxTQUFTOzs7O0FBRmIsZ0JBQU0sR0FBRyxxQkFBbUIsQ0FBQzs7MkNBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOzs7OzJDQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7OztBQUE1RSxtQkFBUzs7QUFDYixxQkFBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7R0FDakMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw2Q0FBNkMsRUFBRTs7Ozs7MkNBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDOzs7Ozs7O0dBQ2xHLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7Ozs7MkNBQ3BDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztHQUNyRixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsdUNBQXVDLEVBQUU7Ozs7OzJDQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDckYsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBRTVELFFBQVEsRUFDUixVQUFVOzs7OzsyQ0FGUixNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7OzsyQ0FDVixNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUM7OztBQUFsRixrQkFBUTtBQUNSLG9CQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87OzJDQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs7OzsyQ0FDbEYsTUFBTSxDQUFDLElBQUksRUFBRTs7Ozs7OztHQUNwQixDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsc0RBQXNELEVBQUU7Ozs7OzJDQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztHQUNuRyxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsNENBQTRDLEVBQUU7Ozs7OzJDQUN6QyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7R0FDckYsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLGdFQUFnRSxFQUFFOzs7OzsyQ0FDN0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7OztHQUMxRSxDQUFDLENBQUM7QUFDSCxJQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDdkMsUUFBUTs7Ozs7MkNBQVMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQzs7O0FBQXRELGtCQUFROztBQUNaLGtCQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxrQkFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7R0FDbEMsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLG9DQUFvQyxFQUFFO1FBQ25DLElBQUk7Ozs7OzJDQUFTLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzs7QUFBeEMsY0FBSTs7QUFDUixjQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxjQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztHQUNuQyxDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC9mdW5jdGlvbmFsL2FwaS1kZW1vcy9hdHRyaWJ1dGUtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4nO1xuaW1wb3J0IHNhbXBsZUFwcHMgZnJvbSAnc2FtcGxlLWFwcHMnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGFuaW1hdGlvbkVsO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5cbmRlc2NyaWJlKCdhcGlkZW1vIC0gYXR0cmlidXRlcycsIGZ1bmN0aW9uICgpIHtcbiAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICBkcml2ZXIgPSBuZXcgQW5kcm9pZERyaXZlcigpO1xuICAgIGF3YWl0IGRyaXZlci5jcmVhdGVTZXNzaW9uKGRlZmF1bHRDYXBzKTtcbiAgICBsZXQgYW5pbWF0aW9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdhY2Nlc3NpYmlsaXR5IGlkJywgJ0FuaW1hdGlvbicsIGZhbHNlKTtcbiAgICBhbmltYXRpb25FbCA9IGFuaW1hdGlvbi5FTEVNRU5UO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCByZXNvdXJjZUlkIGF0dHJpYnV0ZScsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0QXR0cmlidXRlKCdyZXNvdXJjZUlkJywgYW5pbWF0aW9uRWwpLnNob3VsZC5ldmVudHVhbGx5LmJlY29tZSgnYW5kcm9pZDppZC90ZXh0MScpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGZpbmQgdGV4dCBhdHRyaWJ1dGUnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmdldEF0dHJpYnV0ZSgndGV4dCcsIGFuaW1hdGlvbkVsKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ0FuaW1hdGlvbicpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGZpbmQgbmFtZSBhdHRyaWJ1dGUnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmdldEF0dHJpYnV0ZSgnbmFtZScsIGFuaW1hdGlvbkVsKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ0FuaW1hdGlvbicpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGZpbmQgbmFtZSBhdHRyaWJ1dGUsIGZhbGxpbmcgYmFjayB0byB0ZXh0JywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5jbGljayhhbmltYXRpb25FbCk7XG4gICAgbGV0IHRleHRWaWV3ID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdjbGFzcyBuYW1lJywgJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3JywgdHJ1ZSk7XG4gICAgbGV0IHRleHRWaWV3RWwgPSB0ZXh0Vmlld1sxXS5FTEVNRU5UO1xuICAgIGF3YWl0IGRyaXZlci5nZXRBdHRyaWJ1dGUoJ25hbWUnLCB0ZXh0Vmlld0VsKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ0JvdW5jaW5nIEJhbGxzJyk7XG4gICAgYXdhaXQgZHJpdmVyLmJhY2soKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBmaW5kIGNvbnRlbnQgZGVzY3JpcHRpb24gYXR0cmlidXRlJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnREZXNjcmlwdGlvbicsIGFuaW1hdGlvbkVsKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoXCJBbmltYXRpb25cIik7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZmluZCBkaXNwbGF5ZWQgYXR0cmlidXRlJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5nZXRBdHRyaWJ1dGUoJ2Rpc3BsYXllZCcsIGFuaW1hdGlvbkVsKS5zaG91bGQuZXZlbnR1YWxseS5iZWNvbWUoJ3RydWUnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBmaW5kIGRpc3BsYXllZCBhdHRyaWJ1dGUgdGhyb3VnaCBub3JtYWwgZnVuYycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZWxlbWVudERpc3BsYXllZChhbmltYXRpb25FbCkuc2hvdWxkLmV2ZW50dWFsbHkuYmVjb21lKHRydWUpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGdldCBlbGVtZW50IGxvY2F0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBsb2NhdGlvbiA9IGF3YWl0IGRyaXZlci5nZXRMb2NhdGlvbkluVmlldyhhbmltYXRpb25FbCk7XG4gICAgbG9jYXRpb24ueC5zaG91bGQuYmUuYXQubGVhc3QoMCk7XG4gICAgbG9jYXRpb24ueS5zaG91bGQuYmUuYXQubGVhc3QoMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGJlIGFibGUgdG8gZ2V0IGVsZW1lbnQgc2l6ZScsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgc2l6ZSA9IGF3YWl0IGRyaXZlci5nZXRTaXplKGFuaW1hdGlvbkVsKTtcbiAgICBzaXplLndpZHRoLnNob3VsZC5iZS5hdC5sZWFzdCgwKTtcbiAgICBzaXplLmhlaWdodC5zaG91bGQuYmUuYXQubGVhc3QoMCk7XG4gIH0pO1xufSk7XG4iXX0=