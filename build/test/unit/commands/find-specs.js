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

describe('Find', function () {
  before(function () {
    driver = new _.AndroidDriver();
    driver.bootstrap = new _appiumAndroidBootstrap2['default']();
    sandbox.stub(driver, 'validateLocatorStrategy');
    sandbox.stub(driver.bootstrap, 'sendAction');
  });
  after(function () {
    sandbox.restore();
  });
  describe('findElorEls', function () {
    it('should throw an error if both strategy and context are defined', function () {
      driver.findElOrEls('xpath', 'selector', false, 'some context').should.be.rejectedWith(/from an element/);
    });
    it('should throw an error if there is no selector', function () {
      driver.findElOrEls('xpath', null, false, 'some context').should.be.rejectedWith(/provide a selector/);
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC9jb21tYW5kcy9maW5kLXNwZWNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7b0JBQWlCLE1BQU07Ozs7OEJBQ0ksa0JBQWtCOzs7O3FCQUMzQixPQUFPOzs7O3NDQUNILDBCQUEwQjs7OztnQkFDbEIsVUFBVTs7QUFFeEMsSUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLElBQUksT0FBTyxHQUFHLG1CQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQyxrQkFBSyxNQUFNLEVBQUUsQ0FBQztBQUNkLGtCQUFLLEdBQUcsNkJBQWdCLENBQUM7O0FBRXpCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBTTtBQUNyQixRQUFNLENBQUMsWUFBTTtBQUNYLFVBQU0sR0FBRyxxQkFBbUIsQ0FBQztBQUM3QixVQUFNLENBQUMsU0FBUyxHQUFHLHlDQUFlLENBQUM7QUFDbkMsV0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUNoRCxXQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDOUMsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDLFlBQU07QUFDVixXQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDbkIsQ0FBQyxDQUFDO0FBQ0gsVUFBUSxDQUFDLGFBQWEsRUFBRSxZQUFNO0FBQzVCLE1BQUUsQ0FBQyxnRUFBZ0UsRUFBRSxZQUFNO0FBQ3pFLFlBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUMxRyxDQUFDLENBQUM7QUFDSCxNQUFFLENBQUMsK0NBQStDLEVBQUUsWUFBTTtBQUN4RCxZQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDdkcsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QvdW5pdC9jb21tYW5kcy9maW5kLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nO1xuaW1wb3J0IEJvb3RzdHJhcCBmcm9tICdhcHBpdW0tYW5kcm9pZC1ib290c3RyYXAnO1xuaW1wb3J0IHsgQW5kcm9pZERyaXZlciB9IGZyb20gJy4uLy4uLy4uJztcblxubGV0IGRyaXZlcjtcbmxldCBzYW5kYm94ID0gc2lub24uc2FuZGJveC5jcmVhdGUoKTtcbmNoYWkuc2hvdWxkKCk7XG5jaGFpLnVzZShjaGFpQXNQcm9taXNlZCk7XG5cbmRlc2NyaWJlKCdGaW5kJywgKCkgPT4ge1xuICBiZWZvcmUoKCkgPT4ge1xuICAgIGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKCk7XG4gICAgZHJpdmVyLmJvb3RzdHJhcCA9IG5ldyBCb290c3RyYXAoKTtcbiAgICBzYW5kYm94LnN0dWIoZHJpdmVyLCAndmFsaWRhdGVMb2NhdG9yU3RyYXRlZ3knKTtcbiAgICBzYW5kYm94LnN0dWIoZHJpdmVyLmJvb3RzdHJhcCwgJ3NlbmRBY3Rpb24nKTtcbiAgfSk7XG4gIGFmdGVyKCgpID0+IHtcbiAgICBzYW5kYm94LnJlc3RvcmUoKTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdmaW5kRWxvckVscycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIGJvdGggc3RyYXRlZ3kgYW5kIGNvbnRleHQgYXJlIGRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBkcml2ZXIuZmluZEVsT3JFbHMoJ3hwYXRoJywgJ3NlbGVjdG9yJywgZmFsc2UsICdzb21lIGNvbnRleHQnKS5zaG91bGQuYmUucmVqZWN0ZWRXaXRoKC9mcm9tIGFuIGVsZW1lbnQvKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIG5vIHNlbGVjdG9yJywgKCkgPT4ge1xuICAgICAgZHJpdmVyLmZpbmRFbE9yRWxzKCd4cGF0aCcsIG51bGwsIGZhbHNlLCAnc29tZSBjb250ZXh0Jykuc2hvdWxkLmJlLnJlamVjdGVkV2l0aCgvcHJvdmlkZSBhIHNlbGVjdG9yLyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=