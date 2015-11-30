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

describe('Element', function () {
  describe('Tap', function () {
    beforeEach(function () {
      driver = new _.AndroidDriver();
      driver.bootstrap = new _appiumAndroidBootstrap2['default']();
      sandbox.stub(driver.bootstrap, 'sendAction');
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('should tap an element', function () {
      driver.tap('someElementId');
      driver.bootstrap.sendAction.calledWith('element:click').should.be['true'];
    });
    it('should tap without an element', function () {
      driver.tap(null);
      driver.bootstrap.sendAction.calledWith('click').should.be['true'];
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9lbGVtZW50LXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3FCQUMzQixPQUFPOzs7O3NDQUNILDBCQUEwQjs7OztnQkFDbEIsVUFBVTs7QUFFeEMsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBTTtBQUN4QixVQUFRLENBQUMsS0FBSyxFQUFFLFlBQU07QUFDcEIsY0FBVSxDQUFDLFlBQU07QUFDZixZQUFNLEdBQUcscUJBQW1CLENBQUM7QUFDN0IsWUFBTSxDQUFDLFNBQVMsR0FBRyx5Q0FBZSxDQUFDO0FBQ25DLGFBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUM5QyxDQUFDLENBQUM7QUFDSCxhQUFTLENBQUMsWUFBTTtBQUNkLGFBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuQixDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsdUJBQXVCLEVBQUUsWUFBTTtBQUNoQyxZQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVCLFlBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFLLENBQUM7S0FDeEUsQ0FBQyxDQUFDO0FBQ0gsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQU07QUFDeEMsWUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQixZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBSyxDQUFDO0tBQ2hFLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0L3VuaXQvY29tbWFuZHMvZWxlbWVudC1zcGVjcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpIGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlBc1Byb21pc2VkIGZyb20gJ2NoYWktYXMtcHJvbWlzZWQnO1xuaW1wb3J0IHNpbm9uIGZyb20gJ3Npbm9uJztcbmltcG9ydCBCb290c3RyYXAgZnJvbSAnYXBwaXVtLWFuZHJvaWQtYm9vdHN0cmFwJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICcuLi8uLi8uLic7XG5cbmxldCBkcml2ZXI7XG5sZXQgc2FuZGJveCA9IHNpbm9uLnNhbmRib3guY3JlYXRlKCk7XG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5kZXNjcmliZSgnRWxlbWVudCcsICgpID0+IHtcbiAgZGVzY3JpYmUoJ1RhcCcsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwID0gbmV3IEJvb3RzdHJhcCgpO1xuICAgICAgc2FuZGJveC5zdHViKGRyaXZlci5ib290c3RyYXAsICdzZW5kQWN0aW9uJyk7XG4gICAgfSk7XG4gICAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICAgIHNhbmRib3gucmVzdG9yZSgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGFwIGFuIGVsZW1lbnQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIudGFwKCdzb21lRWxlbWVudElkJyk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aCgnZWxlbWVudDpjbGljaycpLnNob3VsZC5iZS50cnVlO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgdGFwIHdpdGhvdXQgYW4gZWxlbWVudCcsICgpID0+IHtcbiAgICAgIGRyaXZlci50YXAobnVsbCk7XG4gICAgICBkcml2ZXIuYm9vdHN0cmFwLnNlbmRBY3Rpb24uY2FsbGVkV2l0aCgnY2xpY2snKS5zaG91bGQuYmUudHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==