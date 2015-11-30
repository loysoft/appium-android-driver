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

describe('performTouch', function () {
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
  afterEach(function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.startActivity('io.appium.android.apis', '.view.DragAndDropDemo'));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should drag by element', function callee$1$0() {
    var startEle, endEle, gestures, resultEle;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_3"));

        case 2:
          startEle = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_2"));

        case 5:
          endEle = context$2$0.sent;
          gestures = [{ "action": "longPress", "options": { "element": startEle.ELEMENT } }, { "action": "moveTo", "options": { "element": endEle.ELEMENT } }, { "action": "release", "options": {} }];
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.performTouch(gestures));

        case 9:
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_result_text"));

        case 11:
          resultEle = context$2$0.sent;
          context$2$0.next = 14;
          return _regeneratorRuntime.awrap(driver.getText(resultEle.ELEMENT).should.eventually.equal("Dropped!"));

        case 14:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should drag by element by offset', function callee$1$0() {
    var startEle, endEle, gestures, element3;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_3"));

        case 2:
          startEle = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_2"));

        case 5:
          endEle = context$2$0.sent;
          gestures = [{ "action": "longPress",
            "options": { "element": startEle.ELEMENT, "x": 5, "y": 5 } }, { "action": "moveTo", "options": { "element": endEle.ELEMENT, "x": 5, "y": 5 } }, { "action": "release", "options": {} }];
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.performTouch(gestures));

        case 9:
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_result_text"));

        case 11:
          element3 = context$2$0.sent;
          context$2$0.next = 14;
          return _regeneratorRuntime.awrap(driver.getText(element3.ELEMENT).should.eventually.equal("Dropped!"));

        case 14:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should drag by absolute position', function callee$1$0() {
    var startEle, startLoc, startSize, endEle, endLoc, endSize, gestures, resultEle;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_3"));

        case 2:
          startEle = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getLocationInView(startEle.ELEMENT));

        case 5:
          startLoc = context$2$0.sent;
          context$2$0.next = 8;
          return _regeneratorRuntime.awrap(driver.getSize(startEle.ELEMENT));

        case 8:
          startSize = context$2$0.sent;
          context$2$0.next = 11;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_dot_2"));

        case 11:
          endEle = context$2$0.sent;
          context$2$0.next = 14;
          return _regeneratorRuntime.awrap(driver.getLocationInView(endEle.ELEMENT));

        case 14:
          endLoc = context$2$0.sent;
          context$2$0.next = 17;
          return _regeneratorRuntime.awrap(driver.getSize(endEle.ELEMENT));

        case 17:
          endSize = context$2$0.sent;
          gestures = [{ "action": "longPress",
            "options": { "x": startLoc.x + startSize.width / 2,
              "y": startLoc.y + startSize.height / 2 } }, { "action": "moveTo",
            "options": { "x": endLoc.x + endSize.width / 2,
              "y": endLoc.y + endSize.height / 2 } }, { "action": "release", "options": {} }];
          context$2$0.next = 21;
          return _regeneratorRuntime.awrap(driver.performTouch(gestures));

        case 21:
          context$2$0.next = 23;
          return _regeneratorRuntime.awrap(driver.findElement("id", "io.appium.android.apis:id/drag_result_text"));

        case 23:
          resultEle = context$2$0.sent;
          context$2$0.next = 26;
          return _regeneratorRuntime.awrap(driver.getText(resultEle.ELEMENT).should.eventually.equal("Dropped!"));

        case 26:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvdG91Y2gvcGVyZm9ybS10b3VjaC1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixhQUFhOzswQkFDcEIsYUFBYTs7OztBQUVwQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLFdBQVcsR0FBRztBQUNoQixLQUFHLEVBQUUsNkJBQVcsZ0JBQWdCLENBQUM7QUFDakMsWUFBVSxFQUFFLFNBQVM7QUFDckIsY0FBWSxFQUFFLFNBQVM7QUFDdkIsYUFBVyxFQUFFLHVCQUF1QjtDQUNyQyxDQUFDOztBQUVGLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWTs7O0FBQ25DLFFBQU0sQ0FBQzs7OztBQUNMLGdCQUFNLEdBQUcscUJBQW1CLENBQUM7OzJDQUN2QixNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztHQUN4QyxDQUFDLENBQUM7QUFDSCxXQUFTLENBQUM7Ozs7OzJDQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUM7Ozs7Ozs7R0FDOUUsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3ZCLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxFQUlSLFNBQVM7Ozs7OzJDQU5RLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxDQUFDOzs7QUFBakYsa0JBQVE7OzJDQUNPLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxDQUFDOzs7QUFBL0UsZ0JBQU07QUFDTixrQkFBUSxHQUFHLENBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsT0FBTyxF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QUFRO0FBQ2xCLHFCQUFTLEVBQUUsRUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBSSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQUFBQztBQUNuQyxpQkFBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBQyxFQUFDLEVBQ25ELEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLENBQUM7OzJDQUM3QyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7OzsyQ0FDYixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyw0Q0FBNEMsQ0FBQzs7O0FBQXZGLG1CQUFTOzsyQ0FDUCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7R0FDNUUsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvdG91Y2gvcGVyZm9ybS10b3VjaC1lMmUtc3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaSBmcm9tICdjaGFpJztcbmltcG9ydCBjaGFpQXNQcm9taXNlZCBmcm9tICdjaGFpLWFzLXByb21pc2VkJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLi8uLic7XG5pbXBvcnQgc2FtcGxlQXBwcyBmcm9tICdzYW1wbGUtYXBwcyc7XG5cbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmxldCBkcml2ZXI7XG5sZXQgZGVmYXVsdENhcHMgPSB7XG4gIGFwcDogc2FtcGxlQXBwcygnQXBpRGVtb3MtZGVidWcnKSxcbiAgZGV2aWNlTmFtZTogJ0FuZHJvaWQnLFxuICBwbGF0Zm9ybU5hbWU6ICdBbmRyb2lkJyxcbiAgYXBwQWN0aXZpdHk6ICcudmlldy5EcmFnQW5kRHJvcERlbW8nXG59O1xuXG5kZXNjcmliZSgncGVyZm9ybVRvdWNoJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICB9KTtcbiAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuc3RhcnRBY3Rpdml0eSgnaW8uYXBwaXVtLmFuZHJvaWQuYXBpcycsICcudmlldy5EcmFnQW5kRHJvcERlbW8nKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZHJhZyBieSBlbGVtZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBzdGFydEVsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudChcImlkXCIsIFwiaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9kcmFnX2RvdF8zXCIpO1xuICAgIGxldCBlbmRFbGUgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnQoXCJpZFwiLCBcImlvLmFwcGl1bS5hbmRyb2lkLmFwaXM6aWQvZHJhZ19kb3RfMlwiKTtcbiAgICBsZXQgZ2VzdHVyZXMgPSBbe1wiYWN0aW9uXCI6IFwibG9uZ1ByZXNzXCIsIFwib3B0aW9uc1wiOiB7XCJlbGVtZW50XCI6IHN0YXJ0RWxlLkVMRU1FTlR9fSxcbiAgICAgICAgICAgICAgICAgICAge1wiYWN0aW9uXCI6IFwibW92ZVRvXCIsIFwib3B0aW9uc1wiOiB7XCJlbGVtZW50XCI6IGVuZEVsZS5FTEVNRU5UfX0sXG4gICAgICAgICAgICAgICAgICAgIHtcImFjdGlvblwiOiBcInJlbGVhc2VcIiwgXCJvcHRpb25zXCI6IHt9fV07XG4gICAgYXdhaXQgZHJpdmVyLnBlcmZvcm1Ub3VjaChnZXN0dXJlcyk7XG4gICAgbGV0IHJlc3VsdEVsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudChcImlkXCIsXCJpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfcmVzdWx0X3RleHRcIik7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQocmVzdWx0RWxlLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKFwiRHJvcHBlZCFcIik7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGRyYWcgYnkgZWxlbWVudCBieSBvZmZzZXQnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHN0YXJ0RWxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50KFwiaWRcIiwgXCJpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfZG90XzNcIik7XG4gICAgbGV0IGVuZEVsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudChcImlkXCIsIFwiaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9kcmFnX2RvdF8yXCIpO1xuICAgIGxldCBnZXN0dXJlcyA9IFt7XCJhY3Rpb25cIjogXCJsb25nUHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7XCJlbGVtZW50XCI6IHN0YXJ0RWxlLkVMRU1FTlQsIFwieFwiOiA1LCBcInlcIjogNX19LFxuICAgICAgICAgICAgICAgICAgICB7XCJhY3Rpb25cIjogXCJtb3ZlVG9cIiwgXCJvcHRpb25zXCI6XG4gICAgICAgICAgICAgICAgICAgIHtcImVsZW1lbnRcIjogZW5kRWxlLkVMRU1FTlQsIFwieFwiOiA1LCBcInlcIjogNX19LFxuICAgICAgICAgICAgICAgICAgICB7XCJhY3Rpb25cIjogXCJyZWxlYXNlXCIsXCJvcHRpb25zXCI6e319XTtcbiAgICBhd2FpdCBkcml2ZXIucGVyZm9ybVRvdWNoKGdlc3R1cmVzKTtcbiAgICBsZXQgZWxlbWVudDMgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnQoXCJpZFwiLFwiaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9kcmFnX3Jlc3VsdF90ZXh0XCIpO1xuICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KGVsZW1lbnQzLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKFwiRHJvcHBlZCFcIik7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGRyYWcgYnkgYWJzb2x1dGUgcG9zaXRpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHN0YXJ0RWxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50KFwiaWRcIiwgXCJpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfZG90XzNcIik7XG4gICAgbGV0IHN0YXJ0TG9jID0gYXdhaXQgZHJpdmVyLmdldExvY2F0aW9uSW5WaWV3KHN0YXJ0RWxlLkVMRU1FTlQpO1xuICAgIGxldCBzdGFydFNpemUgPSBhd2FpdCBkcml2ZXIuZ2V0U2l6ZShzdGFydEVsZS5FTEVNRU5UKTtcbiAgICBsZXQgZW5kRWxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50KFwiaWRcIiwgXCJpby5hcHBpdW0uYW5kcm9pZC5hcGlzOmlkL2RyYWdfZG90XzJcIik7XG4gICAgbGV0IGVuZExvYyA9IGF3YWl0IGRyaXZlci5nZXRMb2NhdGlvbkluVmlldyhlbmRFbGUuRUxFTUVOVCk7XG4gICAgbGV0IGVuZFNpemUgPSBhd2FpdCBkcml2ZXIuZ2V0U2l6ZShlbmRFbGUuRUxFTUVOVCk7XG4gICAgbGV0IGdlc3R1cmVzID0gW3tcImFjdGlvblwiOiBcImxvbmdQcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25zXCI6IHtcInhcIjogc3RhcnRMb2MueCArIChzdGFydFNpemUud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBzdGFydExvYy55ICsgKHN0YXJ0U2l6ZS5oZWlnaHQgLyAyKX19LFxuICAgICAgICAgICAgICAgICAgICB7XCJhY3Rpb25cIjogXCJtb3ZlVG9cIixcbiAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiOiB7XCJ4XCI6IGVuZExvYy54ICsgKGVuZFNpemUud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieVwiOiBlbmRMb2MueSArIChlbmRTaXplLmhlaWdodCAvIDIpfX0sXG4gICAgICAgICAgICAgICAgICAgIHtcImFjdGlvblwiOiBcInJlbGVhc2VcIixcIm9wdGlvbnNcIjp7fX1dO1xuICAgIGF3YWl0IGRyaXZlci5wZXJmb3JtVG91Y2goZ2VzdHVyZXMpO1xuICAgIGxldCByZXN1bHRFbGUgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnQoXCJpZFwiLFwiaW8uYXBwaXVtLmFuZHJvaWQuYXBpczppZC9kcmFnX3Jlc3VsdF90ZXh0XCIpO1xuICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KHJlc3VsdEVsZS5FTEVNRU5UKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbChcIkRyb3BwZWQhXCIpO1xuICB9KTtcbn0pO1xuIl19