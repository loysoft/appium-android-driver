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
var atv = 'android.widget.TextView';
var f = "android.widget.FrameLayout";

describe('Find - xpath', function () {
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
  it('should throw when matching nothing', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//whatthat', false).should.eventually.be.rejectedWith(/could not be located/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should throw with status 7 for hierarchy root', function callee$1$0() {
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '/*', false).should.eventually.be.rejectedWith(/could not be located/));

        case 2:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by type', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//' + atv, false));

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
  it('should find element by text', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//' + atv + '[@text=\'Accessibility\']', false));

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
  it('should find exactly one element via elementsByXPath', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//' + atv + '[@text=\'Accessibility\']', true));

        case 2:
          el = context$2$0.sent;

          el.length.should.equal(1);
          context$2$0.next = 6;
          return _regeneratorRuntime.awrap(driver.getText(el[0].ELEMENT).should.eventually.equal('Accessibility'));

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find element by partial text', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//' + atv + '[contains(@text, \'Accessibility\')]', false));

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
  it('should find the last element', function callee$1$0() {
    var el, text;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '(//' + atv + ')[last()]', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT));

        case 5:
          text = context$2$0.sent;

          ["OS", "Text", "Views", "Preference"].should.include(text);

        case 7:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  // TODO: Doesn't work on CI. Works locally on API_LEVEL 23
  //it('should find element by xpath index and child @skip-ci', async () => {
  // let alv = 'android.widget.ListView';
  // let el = await driver.findElOrEls('xpath', `//${f}[2]/${alv}[1]/${atv}[4]`, false);
  // await driver.getText(el.ELEMENT).should.eventually.equal('App');
  //});

  it('should find element by index and embedded desc', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//' + f + '//' + atv + '[5]', false));

        case 2:
          el = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(driver.getText(el.ELEMENT).should.eventually.equal('Content'));

        case 5:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find all elements', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//*', true));

        case 2:
          el = context$2$0.sent;

          el.length.should.be.above(2);

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find the first element when searching for all elements', function callee$1$0() {
    var el;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//*', true));

        case 2:
          el = context$2$0.sent;

          el[0].should.exist;

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
  it('should find less elements with compression turned on', function callee$1$0() {
    var elementsWithoutCompression, elementsWithCompression;
    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": false }));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//*', true));

        case 4:
          elementsWithoutCompression = context$2$0.sent;
          context$2$0.next = 7;
          return _regeneratorRuntime.awrap(driver.updateSettings({ "ignoreUnimportantViews": true }));

        case 7:
          context$2$0.next = 9;
          return _regeneratorRuntime.awrap(driver.findElOrEls('xpath', '//*', true));

        case 9:
          elementsWithCompression = context$2$0.sent;

          elementsWithoutCompression.length.should.be.greaterThan(elementsWithCompression.length);

        case 11:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZnVuY3Rpb25hbC9hcGktZGVtb3MvZmluZC9ieS14cGF0aC1lMmUtc3BlY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O29CQUFpQixNQUFNOzs7OzhCQUNJLGtCQUFrQjs7OztnQkFDZixhQUFhOzswQkFDcEIsYUFBYTs7OztBQUVwQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLElBQUksTUFBTSxZQUFBLENBQUM7QUFDWCxJQUFJLFdBQVcsR0FBRztBQUNoQixLQUFHLEVBQUUsNkJBQVcsZ0JBQWdCLENBQUM7QUFDakMsWUFBVSxFQUFFLFNBQVM7QUFDckIsY0FBWSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQztBQUNGLElBQUksR0FBRyxHQUFHLHlCQUF5QixDQUFDO0FBQ3BDLElBQUksQ0FBQyxHQUFHLDRCQUE0QixDQUFDOztBQUVyQyxRQUFRLENBQUMsY0FBYyxFQUFFLFlBQVk7OztBQUNuQyxRQUFNLENBQUM7Ozs7QUFDTCxnQkFBTSxHQUFHLHFCQUFtQixDQUFDOzsyQ0FDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7Ozs7R0FDeEMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDOzs7OzsyQ0FDRSxNQUFNLENBQUMsYUFBYSxFQUFFOzs7Ozs7O0dBQzdCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxvQ0FBb0MsRUFBRTs7Ozs7MkNBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUM7Ozs7Ozs7R0FDakgsQ0FBQyxDQUFDO0FBQ0gsSUFBRSxDQUFDLCtDQUErQyxFQUFFOzs7OzsyQ0FDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxV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RUFBRTtRQUM5RCxFQUFFOzs7OzsyQ0FBUyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sU0FBUyxJQUFJLENBQUM7OztBQUFuRCxZQUFFOztBQUNOLFlBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDOzs7Ozs7O0dBQ3BCLENBQUMsQ0FBQztBQUNILElBQUUsQ0FBQyxzREFBc0QsRUFBRTtRQUVyRCwwQkFBMEIsRUFFMUIsdUJBQXVCOzs7OzsyQ0FIckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDOzs7OzJDQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sU0FBUyxJQUFJLENBQUM7OztBQUEzRSxvQ0FBMEI7OzJDQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFDLENBQUM7Ozs7MkNBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxTQUFTLElBQUksQ0FBQzs7O0FBQXhFLGlDQUF1Qjs7QUFDM0Isb0NBQTBCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0dBQ3pGLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L2Z1bmN0aW9uYWwvYXBpLWRlbW9zL2ZpbmQvYnkteHBhdGgtZTJlLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4nO1xuaW1wb3J0IHNhbXBsZUFwcHMgZnJvbSAnc2FtcGxlLWFwcHMnO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5sZXQgZHJpdmVyO1xubGV0IGRlZmF1bHRDYXBzID0ge1xuICBhcHA6IHNhbXBsZUFwcHMoJ0FwaURlbW9zLWRlYnVnJyksXG4gIGRldmljZU5hbWU6ICdBbmRyb2lkJyxcbiAgcGxhdGZvcm1OYW1lOiAnQW5kcm9pZCdcbn07XG5sZXQgYXR2ID0gJ2FuZHJvaWQud2lkZ2V0LlRleHRWaWV3JztcbmxldCBmID0gXCJhbmRyb2lkLndpZGdldC5GcmFtZUxheW91dFwiO1xuXG5kZXNjcmliZSgnRmluZCAtIHhwYXRoJywgZnVuY3Rpb24gKCkge1xuICBiZWZvcmUoYXN5bmMgKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgYXdhaXQgZHJpdmVyLmNyZWF0ZVNlc3Npb24oZGVmYXVsdENhcHMpO1xuICB9KTtcbiAgYWZ0ZXIoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRyaXZlci5kZWxldGVTZXNzaW9uKCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHRocm93IHdoZW4gbWF0Y2hpbmcgbm90aGluZycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ3hwYXRoJywgJy8vd2hhdHRoYXQnLCBmYWxzZSkuc2hvdWxkLmV2ZW50dWFsbHkuYmUucmVqZWN0ZWRXaXRoKC9jb3VsZCBub3QgYmUgbG9jYXRlZC8pO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCB0aHJvdyB3aXRoIHN0YXR1cyA3IGZvciBoaWVyYXJjaHkgcm9vdCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ3hwYXRoJywgJy8qJywgZmFsc2UpLnNob3VsZC5ldmVudHVhbGx5LmJlLnJlamVjdGVkV2l0aCgvY291bGQgbm90IGJlIGxvY2F0ZWQvKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50IGJ5IHR5cGUnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCd4cGF0aCcsIGAvLyR7YXR2fWAsIGZhbHNlKTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChlbC5FTEVNRU5UKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnQVBJIERlbW9zJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgZWxlbWVudCBieSB0ZXh0JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgLy8ke2F0dn1bQHRleHQ9J0FjY2Vzc2liaWxpdHknXWAsIGZhbHNlKTtcbiAgICBhd2FpdCBkcml2ZXIuZ2V0VGV4dChlbC5FTEVNRU5UKS5zaG91bGQuZXZlbnR1YWxseS5lcXVhbCgnQWNjZXNzaWJpbGl0eScpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIGV4YWN0bHkgb25lIGVsZW1lbnQgdmlhIGVsZW1lbnRzQnlYUGF0aCcsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgZWwgPSBhd2FpdCBkcml2ZXIuZmluZEVsT3JFbHMoJ3hwYXRoJywgYC8vJHthdHZ9W0B0ZXh0PSdBY2Nlc3NpYmlsaXR5J11gLCB0cnVlKTtcbiAgICBlbC5sZW5ndGguc2hvdWxkLmVxdWFsKDEpO1xuICAgIGF3YWl0IGRyaXZlci5nZXRUZXh0KGVsWzBdLkVMRU1FTlQpLnNob3VsZC5ldmVudHVhbGx5LmVxdWFsKCdBY2Nlc3NpYmlsaXR5Jyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgZWxlbWVudCBieSBwYXJ0aWFsIHRleHQnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCd4cGF0aCcsIGAvLyR7YXR2fVtjb250YWlucyhAdGV4dCwgJ0FjY2Vzc2liaWxpdHknKV1gLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FjY2Vzc2liaWxpdHknKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCB0aGUgbGFzdCBlbGVtZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgKC8vJHthdHZ9KVtsYXN0KCldYCwgZmFsc2UpO1xuICAgIGxldCB0ZXh0ID0gYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCk7XG4gICAgW1wiT1NcIiwgXCJUZXh0XCIsIFwiVmlld3NcIiwgXCJQcmVmZXJlbmNlXCJdLnNob3VsZC5pbmNsdWRlKHRleHQpO1xuICB9KTtcblxuICAvLyBUT0RPOiBEb2Vzbid0IHdvcmsgb24gQ0kuIFdvcmtzIGxvY2FsbHkgb24gQVBJX0xFVkVMIDIzXG4gIC8vaXQoJ3Nob3VsZCBmaW5kIGVsZW1lbnQgYnkgeHBhdGggaW5kZXggYW5kIGNoaWxkIEBza2lwLWNpJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIGxldCBhbHYgPSAnYW5kcm9pZC53aWRnZXQuTGlzdFZpZXcnO1xuICAgIC8vIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgLy8ke2Z9WzJdLyR7YWx2fVsxXS8ke2F0dn1bNF1gLCBmYWxzZSk7XG4gICAgLy8gYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0FwcCcpO1xuICAvL30pO1xuXG4gIGl0KCdzaG91bGQgZmluZCBlbGVtZW50IGJ5IGluZGV4IGFuZCBlbWJlZGRlZCBkZXNjJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBlbCA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgLy8ke2Z9Ly8ke2F0dn1bNV1gLCBmYWxzZSk7XG4gICAgYXdhaXQgZHJpdmVyLmdldFRleHQoZWwuRUxFTUVOVCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoJ0NvbnRlbnQnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgZmluZCBhbGwgZWxlbWVudHMnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCd4cGF0aCcsIGAvLypgLCB0cnVlKTtcbiAgICBlbC5sZW5ndGguc2hvdWxkLmJlLmFib3ZlKDIpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBmaW5kIHRoZSBmaXJzdCBlbGVtZW50IHdoZW4gc2VhcmNoaW5nIGZvciBhbGwgZWxlbWVudHMnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGVsID0gYXdhaXQgZHJpdmVyLmZpbmRFbE9yRWxzKCd4cGF0aCcsIGAvLypgLCB0cnVlKTtcbiAgICBlbFswXS5zaG91bGQuZXhpc3Q7XG4gIH0pO1xuICBpdCgnc2hvdWxkIGZpbmQgbGVzcyBlbGVtZW50cyB3aXRoIGNvbXByZXNzaW9uIHR1cm5lZCBvbicsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkcml2ZXIudXBkYXRlU2V0dGluZ3Moe1wiaWdub3JlVW5pbXBvcnRhbnRWaWV3c1wiOiBmYWxzZX0pO1xuICAgIGxldCBlbGVtZW50c1dpdGhvdXRDb21wcmVzc2lvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgLy8qYCwgdHJ1ZSk7XG4gICAgYXdhaXQgZHJpdmVyLnVwZGF0ZVNldHRpbmdzKHtcImlnbm9yZVVuaW1wb3J0YW50Vmlld3NcIjogdHJ1ZX0pO1xuICAgIGxldCBlbGVtZW50c1dpdGhDb21wcmVzc2lvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxPckVscygneHBhdGgnLCBgLy8qYCwgdHJ1ZSk7XG4gICAgZWxlbWVudHNXaXRob3V0Q29tcHJlc3Npb24ubGVuZ3RoLnNob3VsZC5iZS5ncmVhdGVyVGhhbihlbGVtZW50c1dpdGhDb21wcmVzc2lvbi5sZW5ndGgpO1xuICB9KTtcbn0pO1xuIl19