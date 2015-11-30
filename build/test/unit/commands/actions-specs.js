'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _appiumAndroidBootstrap = require('appium-android-bootstrap');

var _appiumAndroidBootstrap2 = _interopRequireDefault(_appiumAndroidBootstrap);

var _ = require('../../..');

var driver = undefined;
var sandbox = _sinon2['default'].sandbox.create();
_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('Actions', function () {
  before(function () {
    driver = new _.AndroidDriver();
    driver.bootstrap = new _appiumAndroidBootstrap2['default']();
    sandbox.stub(driver.bootstrap, 'sendAction');
  });
  after(function () {
    sandbox.restore();
  });
  describe('Swipe', function () {
    it('should swipe an element', function () {
      driver.swipe(0, 0, 1, 1, 0, 1, 'someElementId');
      driver.bootstrap.sendAction.calledWith('element:swipe').should.be['true'];
    });
    it('should swipe without an element', function () {
      driver.swipe(0, 0, 1, 1, 0, 1);
      driver.bootstrap.sendAction.calledWith('swipe').should.be['true'];
    });
  });
  describe('Flick', function () {
    it('should flick an element', function () {
      driver.flick(0, 0, 1, 1, 1, 'someElementId');
      driver.bootstrap.sendAction.calledWith('element:swipe').should.be['true'];
    });
    it('should flick without an element', function () {
      driver.flick(0, 0, 1, 1, 1, null);
      driver.bootstrap.sendAction.calledWith('swipe').should.be['true'];
    });
  });
  describe('Drag', function () {
    it('should drag an element', function () {
      driver.drag(0, 0, 1, 1, 1, 1, 'someElementId');
      driver.bootstrap.sendAction.calledWith('element:drag').should.be['true'];
    });
    it('should drag without an element', function () {
      driver.drag(0, 0, 1, 1, 1, 1);
      driver.bootstrap.sendAction.calledWith('drag').should.be['true'];
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9hY3Rpb25zLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3FCQUMzQixPQUFPOzs7O3NDQUNILDBCQUEwQjs7OztnQkFDbEIsVUFBVTs7QUFFeEMsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUN4QixRQUFNLENBQUMsWUFBTTtBQUNYLFVBQU0sR0FBRyxxQkFBbUIsQ0FBQztBQUM3QixVQUFNLENBQUMsU0FBUyxHQUFHLHlDQUFlLENBQUM7QUFDbkMsV0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQzlDLENBQUMsQ0FBQztBQUNILE9BQUssQ0FBQyxZQUFNO0FBQ1YsV0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ25CLENBQUMsQ0FBQztBQUNILFVBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBTTtBQUN0QixNQUFFLENBQUMseUJBQXlCLEVBQUUsWUFBTTtBQUNsQyxZQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2hELFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7S0FDeEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLGlDQUFpQyxFQUFFLFlBQU07QUFDMUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7S0FDaEUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFNO0FBQ3RCLE1BQUUsQ0FBQyx5QkFBeUIsRUFBRSxZQUFNO0FBQ2xDLFlBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM3QyxZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0tBQ3hFLENBQUMsQ0FBQztBQUNILE1BQUUsQ0FBQyxpQ0FBaUMsRUFBRSxZQUFNO0FBQzFDLFlBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsQyxZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0tBQ2hFLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztBQUNILFVBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBTTtBQUNyQixNQUFFLENBQUMsd0JBQXdCLEVBQUUsWUFBTTtBQUNqQyxZQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQy9DLFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7S0FDdkUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLGdDQUFnQyxFQUFFLFlBQU07QUFDekMsWUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7S0FDL0QsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9hY3Rpb25zLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IEJvb3RzdHJhcCBmcm9tICdhcHBpdW0tYW5kcm9pZC1ib290c3RyYXAnO1xuaW1wb3J0IHsgQW5kcm9pZERyaXZlciB9IGZyb20gJy4uLy4uLy4uJztcblxubGV0IGRyaXZlcjtcbmxldCBzYW5kYm94ID0gc2lub24uc2FuZGJveC5jcmVhdGUoKTtcbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmRlc2NyaWJlKCdBY3Rpb25zJywgKCkgPT4ge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgZHJpdmVyLmJvb3RzdHJhcCA9IG5ldyBCb290c3RyYXAoKTtcbiAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmJvb3RzdHJhcCwgJ3NlbmRBY3Rpb24nKTtcbiAgfSk7XG4gIGFmdGVyKCgpID0+IHtcbiAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdTd2lwZScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHN3aXBlIGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIuc3dpcGUoMCwgMCwgMSwgMSwgMCwgMSwgJ3NvbWVFbGVtZW50SWQnKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvbi5jYWxsZWRXaXRoKCdlbGVtZW50OnN3aXBlJykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBzd2lwZSB3aXRob3V0IGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIuc3dpcGUoMCwgMCwgMSwgMSwgMCwgMSk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aCgnc3dpcGUnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdGbGljaycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGZsaWNrIGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIuZmxpY2soMCwgMCwgMSwgMSwgMSwgJ3NvbWVFbGVtZW50SWQnKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvbi5jYWxsZWRXaXRoKCdlbGVtZW50OnN3aXBlJykuc2hvdWxkLmJlLnRydWU7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCBmbGljayB3aXRob3V0IGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIuZmxpY2soMCwgMCwgMSwgMSwgMSwgbnVsbCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aCgnc3dpcGUnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdEcmFnJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZHJhZyBhbiBlbGVtZW50JywgKCkgPT4ge1xuICAgICAgZHJpdmVyLmRyYWcoMCwgMCwgMSwgMSwgMSwgMSwgJ3NvbWVFbGVtZW50SWQnKTtcbiAgICAgIGRyaXZlci5ib290c3RyYXAuc2VuZEFjdGlvbi5jYWxsZWRXaXRoKCdlbGVtZW50OmRyYWcnKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRyYWcgd2l0aG91dCBhbiBlbGVtZW50JywgKCkgPT4ge1xuICAgICAgZHJpdmVyLmRyYWcoMCwgMCwgMSwgMSwgMSwgMSk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aCgnZHJhZycpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19