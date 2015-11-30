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

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

var driver = undefined;
var defaultCaps = {
  app: (0, _sampleApps2['default'])('ApiDemos-debug'),
  deviceName: 'Android',
  platformName: 'Android',
  appActivity: '.view.DragAndDropDemo'
};

describe('apidemo - touch', function () {
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
  describe('drag', function () {
    var _this2 = this;

    it('should drag by element', function callee$2$0() {
      var dot3, dot2, gestures, results;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_dot_3', false));

          case 2:
            dot3 = context$3$0.sent;
            context$3$0.next = 5;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_dot_2', false));

          case 5:
            dot2 = context$3$0.sent;
            gestures = [{ options: { element: dot3.ELEMENT } }, { options: { element: dot2.ELEMENT } }];
            context$3$0.next = 9;
            return _regeneratorRuntime.awrap(driver.doTouchDrag(gestures));

          case 9:
            context$3$0.next = 11;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_result_text', false));

          case 11:
            results = context$3$0.sent;
            context$3$0.next = 14;
            return _regeneratorRuntime.awrap(driver.getText(results.ELEMENT).should.eventually.include('Dropped'));

          case 14:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
    it('should drag by element with an offset', function callee$2$0() {
      var dot3, dot2, gestures, results;
      return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            context$3$0.next = 2;
            return _regeneratorRuntime.awrap(driver.startActivity('io.appium.android.apis', '.view.DragAndDropDemo'));

          case 2:
            context$3$0.next = 4;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_dot_3', false));

          case 4:
            dot3 = context$3$0.sent;
            context$3$0.next = 7;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_dot_2', false));

          case 7:
            dot2 = context$3$0.sent;
            gestures = [{ options: { element: dot3.ELEMENT, x: 5, y: 5 } }, { options: { element: dot2.ELEMENT, x: 5, y: 5 } }];
            context$3$0.next = 11;
            return _regeneratorRuntime.awrap(driver.doTouchDrag(gestures));

          case 11:
            context$3$0.next = 13;
            return _regeneratorRuntime.awrap(driver.findElOrEls('id', 'io.appium.android.apis:id/drag_result_text', false));

          case 13:
            results = context$3$0.sent;
            context$3$0.next = 16;
            return _regeneratorRuntime.awrap(driver.getText(results.ELEMENT).should.eventually.include('Dropped'));

          case 16:
          case 'end':
            return context$3$0.stop();
        }
      }, null, _this2);
    });
  });
});

// reset
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvdG91Y2gvZHJhZy1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixhQUFhOzswQkFDcEIsYUFBYTs7OztBQUVwQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLFdBQVcsR0FBRztBQUNoQixLQUFHLEVBQUUsNkJBQVcsZ0JBQWdCLENBQUM7QUFDakMsWUFBVSxFQUFFLFNBQVM7QUFDckIsY0FBWSxFQUFFLFNBQVM7QUFDdkIsYUFBVyxFQUFFLHVCQUF1QjtDQUNyQyxDQUFDOztBQUVGLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZOzs7QUFDdEMsUUFBTSxDQUFDOzs7O0FBQ0wsZ0JBQU0sR0FBRyxxQkFBbUIsQ0FBQzs7MkNBQ3ZCLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDOzs7Ozs7O0dBQ3hDLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQzs7Ozs7MkNBQ0UsTUFBTSxDQUFDLGFBQWEsRUFBRTs7Ozs7OztHQUM3QixDQUFDLENBQUM7QUFDSCxVQUFRLENBQUMsTUFBTSxFQUFFLFlBQVk7OztBQUMzQixNQUFFLENBQUMsd0JBQXdCLEVBQUU7VUFDdkIsSUFBSSxFQUNKLElBQUksRUFDSixRQUFRLEVBS1IsT0FBTzs7Ozs7NkNBUE0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsS0FBSyxDQUFDOzs7QUFBcEYsZ0JBQUk7OzZDQUNTLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLEtBQUssQ0FBQzs7O0FBQXBGLGdCQUFJO0FBQ0osb0JBQVEsR0FBRyxDQUNiLEVBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxFQUNsQyxFQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsQ0FDbkM7OzZDQUNLLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDOzs7OzZDQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxFQUFFLEtBQUssQ0FBQzs7O0FBQTdGLG1CQUFPOzs2Q0FDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7S0FDM0UsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLHVDQUF1QyxFQUFFO1VBSXRDLElBQUksRUFDSixJQUFJLEVBQ0osUUFBUSxFQUtSLE9BQU87Ozs7OzZDQVRMLE1BQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUM7Ozs7NkNBRTVELE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLEtBQUssQ0FBQzs7O0FBQXBGLGdCQUFJOzs2Q0FDUyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxLQUFLLENBQUM7OztBQUFwRixnQkFBSTtBQUNKLG9CQUFRLEdBQUcsQ0FDYixFQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFDLEVBQzlDLEVBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUMsQ0FDL0M7OzZDQUNLLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDOzs7OzZDQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxFQUFFLEtBQUssQ0FBQzs7O0FBQTdGLG1CQUFPOzs2Q0FDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7S0FDM0UsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvdG91Y2gvZHJhZy1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLi8uLic7XG5pbXBvcnQgc2FtcGxlQXBwcyBmcm9tICdzYW1wbGUtYXBwcyc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmxldCBkcml2ZXI7XG5sZXQgZGVmYXVsdENhcHMgPSB7XG4gIGFwcDogc2FtcGxlQXBwcygnQXBpRGVtb3MtZGVidWcnKSxcbiAgZGV2aWNlTmFtZTogJ0FuZHJvaWQnLFxuICBwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJyxcbiAgYXBwQWN0aXZpdHk6ICcudmlldy5EcmFnQW5kRHJvcERlbW8nXG59O1xuXG5kZXNjcmliZSgnYXBpZGVtbyAtIHRvdWNoJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBkZXNjcmliZSgnZHJhZycsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnc2hvdWxkIGRyYWcgYnkgZWxlbWVudCcsIGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBkb3QzID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdpZCcsICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfZG90XzMnLCBmYWxzZSk7XG4gICAgICBsZXQgZG90MiA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnaWQnLCAnaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9kcmFnX2RvdF8yJywgZmFsc2UpO1xuICAgICAgbGV0IGdlc3R1cmVzID0gW1xuICAgICAgICB7b3B0aW9uczoge2VsZW1lbnQ6IGRvdDMuRUxFTUVOVH19LFxuICAgICAgICB7b3B0aW9uczoge2VsZW1lbnQ6IGRvdDIuRUxFTUVOVH19XG4gICAgICBdO1xuICAgICAgYXdhaXQgZHJpdmVyLmRvVG91Y2hEcmFnKGdlc3R1cmVzKTtcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdpZCcsICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfcmVzdWx0X3RleHQnLCBmYWxzZSk7XG4gICAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChyZXN1bHRzLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmluY2x1ZGUoJ0Ryb3BwZWQnKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRyYWcgYnkgZWxlbWVudCB3aXRoIGFuIG9mZnNldCcsIGFzeW5jICgpID0+IHtcbiAgICAgIC8vIHJlc2V0XG4gICAgICBhd2FpdCBkcml2ZXIuc3RhcnRBY3Rpdml0eSgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsICcudmlldy5EcmFnQW5kRHJvcERlbW8nKTtcblxuICAgICAgbGV0IGRvdDMgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2lkJywgJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXM6aWQvZHJhZ19kb3RfMycsIGZhbHNlKTtcbiAgICAgIGxldCBkb3QyID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCdpZCcsICdpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfZG90XzInLCBmYWxzZSk7XG4gICAgICBsZXQgZ2VzdHVyZXMgPSBbXG4gICAgICAgIHtvcHRpb25zOiB7ZWxlbWVudDogZG90My5FTEVNRU5ULCB4OiA1LCB5OiA1fX0sXG4gICAgICAgIHtvcHRpb25zOiB7ZWxlbWVudDogZG90Mi5FTEVNRU5ULCB4OiA1LCB5OiA1fX1cbiAgICAgIF07XG4gICAgICBhd2FpdCBkcml2ZXIuZG9Ub3VjaERyYWcoZ2VzdHVyZXMpO1xuICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ2lkJywgJ2lvLmFwcGl1bS5hbmRyb2lkLmFwaXM6aWQvZHJhZ19yZXN1bHRfdGV4dCcsIGZhbHNlKTtcbiAgICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KHJlc3VsdHMuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuaW5jbHVkZSgnRHJvcHBlZCcpO1xuICAgIH0pO1xuICB9KTsgXG59KTtcbiJdfQ==