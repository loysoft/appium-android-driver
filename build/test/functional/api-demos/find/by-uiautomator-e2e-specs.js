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
  platformName: 'Android'
};

describe('Find - uiautomator', function () {
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
  it('should find elements with a boolean argument', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find elements within the context of another element', function callee$1$0() {
    var els;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().className("android.widget.TextView")', true));

        case 2:
          els = context$2$0.sent;

          els.length.should.be.above(8);
          els.length.should.be.below(12);

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find elements without prepending "new UiSelector()"', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', '.clickable(true)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find elements without prepending "new UiSelector()"', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', '.clickable(true)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find elements without prepending "new UiSelector()"', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'clickable(true)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find elements without prepending "new "', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'UiSelector().clickable(true)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should ignore trailing semicolons', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true);', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with an int argument', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().index(0)', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getName(el.ELEMENT).should.eventually.equal('android.widget.FrameLayout'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with a string argument', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().description("Animation")', false).should.eventually.exist);

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with an overloaded method argument', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().className("android.widget.TextView")', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with a Class<T> method argument', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().className(android.widget.TextView)', true).should.eventually.have.length.at.least(10));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with a long chain of methods', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true).className(android.widget.TextView).index(1)', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Accessibility'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element with recursive UiSelectors', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().childSelector(new UiSelector().clickable(true)).clickable(true)', true).should.eventually.have.length(1));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find an element with bad syntax', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable((true)', true).should.eventually.be.rejectedWith(/resource could not be found/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find an element with bad syntax', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().drinkable(true)', true).should.eventually.be.rejectedWith(/resource could not be found/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should not find an element which does not exist', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().description("chuckwudi")', true).should.eventually.have.length(0));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should allow multiple selector statements and return the Union of the two sets', function callee$1$0() {
    var clickable, notClickable, both;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true)', true));

        case 2:
          clickable = context$2$0.sent;

          clickable.length.should.be.above(0);
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(false)', true));

        case 6:
          notClickable = context$2$0.sent;

          notClickable.length.should.be.above(0);
          context$2$0.next = 10;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true); new UiSelector().clickable(false);', true));

        case 10:
          both = context$2$0.sent;

          both.should.have.length(clickable.length + notClickable.length);

        case 12:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should allow multiple selector statements and return the Union of the two sets', function callee$1$0() {
    var clickable, clickableClickable;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true)', true));

        case 2:
          clickable = context$2$0.sent;

          clickable.length.should.be.above(0);
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', 'new UiSelector().clickable(true); new UiSelector().clickable(true);', true));

        case 6:
          clickableClickable = context$2$0.sent;

          clickableClickable.length.should.be.above(0);
          clickableClickable.should.have.length(clickable.length);

        case 9:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find an element in the second selector if the first finds no elements', function callee$1$0() {
    var selector;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          selector = 'new UiSelector().className("not.a.class"); new UiSelector().className("android.widget.TextView")';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', selector, true).should.eventually.exist);

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should scroll to, and return elements using UiScrollable', function callee$1$0() {
    var selector, el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          selector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("Views").instance(0))';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', selector, false));

        case 3:
          el = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Views'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should allow chaining UiScrollable methods', function callee$1$0() {
    var selector, el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          selector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).setMaxSearchSwipes(10).scrollIntoView(new UiSelector().text("Views").instance(0))';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', selector, false));

        case 3:
          el = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Views'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should allow UiScrollable scrollIntoView', function callee$1$0() {
    var selector, el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          selector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("Views").instance(0));';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', selector, false));

        case 3:
          el = context$2$0.sent;
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Views'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should error reasonably if a UiScrollable does not return a UiObject', function callee$1$0() {
    var selector;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          selector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).setMaxSearchSwipes(10)';
          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(driver.findElOrEls('-android uiautomator', selector, false).should.eventually.be.rejectedWith(/resource could not be found/));

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvZmluZC9ieS11aWF1dG9tYXRvci1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixhQUFhOzswQkFDcEIsYUFBYTs7OztBQUVwQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLFdBQVcsR0FBRztBQUNoQixLQUFHLEVBQUUsNkJBQVcsZ0JBQWdCLENBQUM7QUFDakMsWUFBVSxFQUFFLFNBQVM7QUFDckIsY0FBWSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQzs7QUFFRixRQUFRLENBQUMsb0JBQW9CLEVBQUUsWUFBWTs7O0FBQ3pDLFFBQU0sQ0FBQzs7OztBQUNMLGdCQUFNLEdBQUcscUJBQW1CLENBQUM7OzJDQUN2QixNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztHQUN4QyxDQUFDLENBQUM7QUFDSCxPQUFLLENBQUM7Ozs7OzJDQUNFLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Ozs7Ozs7R0FDN0IsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLDhDQUE4QyxFQUFFOzs7OzsyQ0FDM0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FDdkYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7Ozs7O0dBQzlDLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyw0REFBNEQsRUFBRTtRQUMzRCxHQUFHOzs7OzsyQ0FBUyxNQUFNLENBQ25CLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSx1REFBdUQsRUFBRSxJQUFJLENBQUM7OztBQURqRyxhQUFHOztBQUVQLGFBQUcsQ0FBQyxNQUFNLENB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QURGLGtCQUFRLEdBQUcsNkhBQTZIOzsyQ0FDN0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDOzs7QUFBdEUsWUFBRTs7MkNBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7O0dBQ2xFLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxzRUFBc0UsRUFBRTtRQUNyRSxRQUFROzs7O0FBQVIsa0JBQVEsR0FBRyx3RkFBd0Y7OzJDQUNqRyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FDOUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDOzs7Ozs7O0dBQ3BFLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL2ZpbmQvYnktdWlhdXRvbWF0b3ItZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4nO1xuaW1wb3J0IHNhbXBsZUFwcHMgZnJvbSAnc2FtcGxlLWFwcHMnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5cbmRlc2NyaWJlKCdGaW5kIC0gdWlhdXRvbWF0b3InLCBmdW5jdGlvbiAoKSB7XG4gIGJlZm9yZShhc3luYyAoKSA9PiB7XG4gICAgZHJpdmVyID0gbmV3IEFuZHJvaWREcml2ZXIoKTtcbiAgICBhd2FpdCBkcml2ZXIuY3JlYXRlU2Vzc2lvbihkZWZhdWx0Q2Fwcyk7XG4gIH0pO1xuICBhZnRlcihhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmRlbGV0ZVNlc3Npb24oKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50cyB3aXRoIGEgYm9vbGVhbiBhcmd1bWVudCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xpY2thYmxlKHRydWUpJywgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgZWxlbWVudHMgd2l0aGluIHRoZSBjb250ZXh0IG9mIGFub3RoZXIgZWxlbWVudCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWxzID0gYXdhaXQgZHJpdmVyXG4gICAgICAuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xhc3NOYW1lKFwiYW5kcm9pZC53aWRnZXQuVGV4dFZpZXdcIiknLCB0cnVlKTtcbiAgICBlbHMubGVuZ3RoLnNob3VsZC5iZS5hYm92ZSg4KTtcbiAgICBlbHMubGVuZ3RoLnNob3VsZC5iZS5iZWxvdygxMik7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgZWxlbWVudHMgd2l0aG91dCBwcmVwZW5kaW5nIFwibmV3IFVpU2VsZWN0b3IoKVwiJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCAnLmNsaWNrYWJsZSh0cnVlKScsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGguYXQubGVhc3QoMTApO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGVsZW1lbnRzIHdpdGhvdXQgcHJlcGVuZGluZyBcIm5ldyBVaVNlbGVjdG9yKClcIicsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJy5jbGlja2FibGUodHJ1ZSknLCB0cnVlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmhhdmUubGVuZ3RoLmF0LmxlYXN0KDEwKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50cyB3aXRob3V0IHByZXBlbmRpbmcgXCJuZXcgVWlTZWxlY3RvcigpXCInLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICdjbGlja2FibGUodHJ1ZSknLCB0cnVlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmhhdmUubGVuZ3RoLmF0LmxlYXN0KDEwKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50cyB3aXRob3V0IHByZXBlbmRpbmcgXCJuZXcgXCInLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICdVaVNlbGVjdG9yKCkuY2xpY2thYmxlKHRydWUpJywgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGlnbm9yZSB0cmFpbGluZyBzZW1pY29sb25zJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCAnbmV3IFVpU2VsZWN0b3IoKS5jbGlja2FibGUodHJ1ZSk7JywgdHJ1ZSlcbiAgICAgIC5zaG91bGQuZXZlbnR1YWxseS5oYXZlLmxlbmd0aC5hdC5sZWFzdCgxMCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgYW4gZWxlbWVudCB3aXRoIGFuIGludCBhcmd1bWVudCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuaW5kZXgoMCknLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldE5hbWUoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ2FuZHJvaWQud2lkZ2V0LkZyYW1lTGF5b3V0Jyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgYW4gZWxlbWVudCB3aXRoIGEgc3RyaW5nIGFyZ3VtZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlclxuICAgICAgLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICduZXcgVWlTZWxlY3RvcigpLmRlc2NyaXB0aW9uKFwiQW5pbWF0aW9uXCIpJywgZmFsc2UpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXhpc3Q7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgYW4gZWxlbWVudCB3aXRoIGFuIG92ZXJsb2FkZWQgbWV0aG9kIGFyZ3VtZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCAnbmV3IFVpU2VsZWN0b3IoKS5jbGFzc05hbWUoXCJhbmRyb2lkLndpZGdldC5UZXh0Vmlld1wiKScsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGguYXQubGVhc3QoMTApO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGFuIGVsZW1lbnQgd2l0aCBhIENsYXNzPFQ+IG1ldGhvZCBhcmd1bWVudCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xhc3NOYW1lKGFuZHJvaWQud2lkZ2V0LlRleHRWaWV3KScsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuaGF2ZS5sZW5ndGguYXQubGVhc3QoMTApO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGFuIGVsZW1lbnQgd2l0aCBhIGxvbmcgY2hhaW4gb2YgbWV0aG9kcycsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xpY2thYmxlKHRydWUpLmNsYXNzTmFtZShhbmRyb2lkLndpZGdldC5UZXh0VmlldykuaW5kZXgoMSknLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FjY2Vzc2liaWxpdHknKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBhbiBlbGVtZW50IHdpdGggcmVjdXJzaXZlIFVpU2VsZWN0b3JzJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCAnbmV3IFVpU2VsZWN0b3IoKS5jaGlsZFNlbGVjdG9yKG5ldyBVaVNlbGVjdG9yKCkuY2xpY2thYmxlKHRydWUpKS5jbGlja2FibGUodHJ1ZSknLCB0cnVlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmhhdmUubGVuZ3RoKDEpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBub3QgZmluZCBhbiBlbGVtZW50IHdpdGggYmFkIHN5bnRheCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xpY2thYmxlKCh0cnVlKScsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9yZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgbm90IGZpbmQgYW4gZWxlbWVudCB3aXRoIGJhZCBzeW50YXgnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICduZXcgVWlTZWxlY3RvcigpLmRyaW5rYWJsZSh0cnVlKScsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9yZXNvdXJjZSBjb3VsZCBub3QgYmUgZm91bmQvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgbm90IGZpbmQgYW4gZWxlbWVudCB3aGljaCBkb2VzIG5vdCBleGlzdCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuZGVzY3JpcHRpb24oXCJjaHVja3d1ZGlcIiknLCB0cnVlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmhhdmUubGVuZ3RoKDApO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBhbGxvdyBtdWx0aXBsZSBzZWxlY3RvciBzdGF0ZW1lbnRzIGFuZCByZXR1cm4gdGhlIFVuaW9uIG9mIHRoZSB0d28gc2V0cycsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2xpY2thYmxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICduZXcgVWlTZWxlY3RvcigpLmNsaWNrYWJsZSh0cnVlKScsIHRydWUpO1xuICAgIGNsaWNrYWJsZS5sZW5ndGguc2hvdWxkLmJlLmFib3ZlKDApO1xuICAgIGxldCBub3RDbGlja2FibGUgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgJ25ldyBVaVNlbGVjdG9yKCkuY2xpY2thYmxlKGZhbHNlKScsIHRydWUpO1xuICAgIG5vdENsaWNrYWJsZS5sZW5ndGguc2hvdWxkLmJlLmFib3ZlKDApO1xuICAgIGxldCBib3RoID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICduZXcgVWlTZWxlY3RvcigpLmNsaWNrYWJsZSh0cnVlKTsgbmV3IFVpU2VsZWN0b3IoKS5jbGlja2FibGUoZmFsc2UpOycsIHRydWUpO1xuICAgIGJvdGguc2hvdWxkLmhhdmUubGVuZ3RoKGNsaWNrYWJsZS5sZW5ndGggKyBub3RDbGlja2FibGUubGVuZ3RoKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYWxsb3cgbXVsdGlwbGUgc2VsZWN0b3Igc3RhdGVtZW50cyBhbmQgcmV0dXJuIHRoZSBVbmlvbiBvZiB0aGUgdHdvIHNldHMnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNsaWNrYWJsZSA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCAnbmV3IFVpU2VsZWN0b3IoKS5jbGlja2FibGUodHJ1ZSknLCB0cnVlKTtcbiAgICBjbGlja2FibGUubGVuZ3RoLnNob3VsZC5iZS5hYm92ZSgwKTtcbiAgICBsZXQgY2xpY2thYmxlQ2xpY2thYmxlID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsICduZXcgVWlTZWxlY3RvcigpLmNsaWNrYWJsZSh0cnVlKTsgbmV3IFVpU2VsZWN0b3IoKS5jbGlja2FibGUodHJ1ZSk7JywgdHJ1ZSk7XG4gICAgY2xpY2thYmxlQ2xpY2thYmxlLmxlbmd0aC5zaG91bGQuYmUuYWJvdmUoMCk7XG4gICAgY2xpY2thYmxlQ2xpY2thYmxlLnNob3VsZC5oYXZlLmxlbmd0aChjbGlja2FibGUubGVuZ3RoKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBhbiBlbGVtZW50IGluIHRoZSBzZWNvbmQgc2VsZWN0b3IgaWYgdGhlIGZpcnN0IGZpbmRzIG5vIGVsZW1lbnRzJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBzZWxlY3RvciA9ICduZXcgVWlTZWxlY3RvcigpLmNsYXNzTmFtZShcIm5vdC5hLmNsYXNzXCIpOyBuZXcgVWlTZWxlY3RvcigpLmNsYXNzTmFtZShcImFuZHJvaWQud2lkZ2V0LlRleHRWaWV3XCIpJztcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgc2VsZWN0b3IsIHRydWUpXG4gICAgICAuc2hvdWxkLmV2ZW50dWFsbHkuZXhpc3Q7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHNjcm9sbCB0bywgYW5kIHJldHVybiBlbGVtZW50cyB1c2luZyBVaVNjcm9sbGFibGUnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gJ25ldyBVaVNjcm9sbGFibGUobmV3IFVpU2VsZWN0b3IoKS5zY3JvbGxhYmxlKHRydWUpLmluc3RhbmNlKDApKS5zY3JvbGxJbnRvVmlldyhuZXcgVWlTZWxlY3RvcigpLnRleHQoXCJWaWV3c1wiKS5pbnN0YW5jZSgwKSknO1xuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygnLWFuZHJvaWQgdWlhdXRvbWF0b3InLCBzZWxlY3RvciwgZmFsc2UpO1xuICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KGVsLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKCdWaWV3cycpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBhbGxvdyBjaGFpbmluZyBVaVNjcm9sbGFibGUgbWV0aG9kcycsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSAnbmV3IFVpU2Nyb2xsYWJsZShuZXcgVWlTZWxlY3RvcigpLnNjcm9sbGFibGUodHJ1ZSkuaW5zdGFuY2UoMCkpLnNldE1heFNlYXJjaFN3aXBlcygxMCkuc2Nyb2xsSW50b1ZpZXcobmV3IFVpU2VsZWN0b3IoKS50ZXh0KFwiVmlld3NcIikuaW5zdGFuY2UoMCkpJztcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgc2VsZWN0b3IsIGZhbHNlKTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChlbC5FTEVNRU5UKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnVmlld3MnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgYWxsb3cgVWlTY3JvbGxhYmxlIHNjcm9sbEludG9WaWV3JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBzZWxlY3RvciA9ICduZXcgVWlTY3JvbGxhYmxlKG5ldyBVaVNlbGVjdG9yKCkuc2Nyb2xsYWJsZSh0cnVlKS5pbnN0YW5jZSgwKSkuc2Nyb2xsSW50b1ZpZXcobmV3IFVpU2VsZWN0b3IoKS50ZXh0KFwiVmlld3NcIikuaW5zdGFuY2UoMCkpOyc7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCctYW5kcm9pZCB1aWF1dG9tYXRvcicsIHNlbGVjdG9yLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ1ZpZXdzJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGVycm9yIHJlYXNvbmFibHkgaWYgYSBVaVNjcm9sbGFibGUgZG9lcyBub3QgcmV0dXJuIGEgVWlPYmplY3QnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHNlbGVjdG9yID0gJ25ldyBVaVNjcm9sbGFibGUobmV3IFVpU2VsZWN0b3IoKS5zY3JvbGxhYmxlKHRydWUpLmluc3RhbmNlKDApKS5zZXRNYXhTZWFyY2hTd2lwZXMoMTApJztcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJy1hbmRyb2lkIHVpYXV0b21hdG9yJywgc2VsZWN0b3IsIGZhbHNlKVxuICAgICAgLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvcmVzb3VyY2UgY291bGQgbm90IGJlIGZvdW5kLyk7XG4gIH0pO1xufSk7IFxuIl19