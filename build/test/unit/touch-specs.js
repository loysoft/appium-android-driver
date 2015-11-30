'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _ = require('../..');

_chai2['default'].should();
_chai2['default'].use(_chaiAsPromised2['default']);

describe('android-controller', function () {
  describe('#parseTouch', function () {
    describe('given a touch sequence with absolute coordinates', function () {
      var _this = this;

      it('should use offsets for moveTo', function callee$3$0() {
        var driver, actions, touchStates, parsedActions, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, state;

        return _regeneratorRuntime.async(function callee$3$0$(context$4$0) {
          while (1) switch (context$4$0.prev = context$4$0.next) {
            case 0:
              driver = new _.AndroidDriver({ foo: 'bar' });
              actions = [{ action: 'press', options: { x: 100, y: 101 } }, { action: 'moveTo', options: { x: 50, y: 51 } }, { action: 'wait', options: { ms: 5000 } }, { action: 'moveTo', options: { x: -40, y: -41 } }, { action: 'release', options: {} }];
              context$4$0.next = 4;
              return _regeneratorRuntime.awrap(driver.parseTouch(actions, false));

            case 4:
              touchStates = context$4$0.sent;

              touchStates.length.should.equal(5);
              parsedActions = [{ action: 'press', x: 100, y: 101 }, { action: 'moveTo', x: 150, y: 152 }, { action: 'wait', x: 150, y: 152 }, { action: 'moveTo', x: 110, y: 111 }, { action: 'release' }];
              index = 0;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              context$4$0.prev = 11;

              for (_iterator = _getIterator(touchStates); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                state = _step.value;

                state.action.should.equal(parsedActions[index].action);
                if (actions[index].action !== 'release') {
                  state.options.x.should.equal(parsedActions[index].x);
                  state.options.y.should.equal(parsedActions[index].y);
                }
                index++;
              }
              context$4$0.next = 19;
              break;

            case 15:
              context$4$0.prev = 15;
              context$4$0.t0 = context$4$0['catch'](11);
              _didIteratorError = true;
              _iteratorError = context$4$0.t0;

            case 19:
              context$4$0.prev = 19;
              context$4$0.prev = 20;

              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }

            case 22:
              context$4$0.prev = 22;

              if (!_didIteratorError) {
                context$4$0.next = 25;
                break;
              }

              throw _iteratorError;

            case 25:
              return context$4$0.finish(22);

            case 26:
              return context$4$0.finish(19);

            case 27:
            case 'end':
              return context$4$0.stop();
          }
        }, null, _this, [[11, 15, 19, 27], [20,, 22, 26]]);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdW5pdC90b3VjaC1zcGVjcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztvQkFBaUIsTUFBTTs7Ozs4QkFDSSxrQkFBa0I7Ozs7Z0JBQ2YsT0FBTzs7QUFFckMsa0JBQUssTUFBTSxFQUFFLENBQUM7QUFDZCxrQkFBSyxHQUFHLDZCQUFnQixDQUFDOztBQUV6QixRQUFRLENBQUMsb0JBQW9CLEVBQUUsWUFBWTtBQUN6QyxVQUFRLENBQUMsYUFBYSxFQUFFLFlBQVk7QUFDbEMsWUFBUSxDQUFDLGtEQUFrRCxFQUFFLFlBQVk7OztBQUN2RSxRQUFFLENBQUMsK0JBQStCLEVBQUU7WUFDOUIsTUFBTSxFQUNOLE9BQU8sRUFLUCxXQUFXLEVBRVgsYUFBYSxFQUtiLEtBQUssa0ZBQ0EsS0FBSzs7Ozs7QUFkVixvQkFBTSxHQUFHLG9CQUFrQixFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUN4QyxxQkFBTyxHQUFHLENBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFDLEVBQzlDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxFQUM3QyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFDLEVBQ3ZDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsRUFDL0MsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBRTs7K0NBQzFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs7O0FBQXJELHlCQUFXOztBQUNmLHlCQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsMkJBQWEsR0FBRyxDQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFDakMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUNsQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQ2hDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFDbEMsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDdEMsbUJBQUssR0FBRyxDQUFDOzs7Ozs7QUFDYiw0Q0FBa0IsV0FBVyxxR0FBRTtBQUF0QixxQkFBSzs7QUFDWixxQkFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxvQkFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUN2Qyx1QkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckQsdUJBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDtBQUNELHFCQUFLLEVBQUUsQ0FBQztlQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FDQSxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoidGVzdC91bml0L3RvdWNoLXNwZWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG5pbXBvcnQgY2hhaUFzUHJvbWlzZWQgZnJvbSAnY2hhaS1hcy1wcm9taXNlZCc7XG5pbXBvcnQgeyBBbmRyb2lkRHJpdmVyIH0gZnJvbSAnLi4vLi4nO1xuXG5jaGFpLnNob3VsZCgpO1xuY2hhaS51c2UoY2hhaUFzUHJvbWlzZWQpO1xuXG5kZXNjcmliZSgnYW5kcm9pZC1jb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICBkZXNjcmliZSgnI3BhcnNlVG91Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVzY3JpYmUoJ2dpdmVuIGEgdG91Y2ggc2VxdWVuY2Ugd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGl0KCdzaG91bGQgdXNlIG9mZnNldHMgZm9yIG1vdmVUbycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGRyaXZlciA9IG5ldyBBbmRyb2lkRHJpdmVyKHtmb286ICdiYXInfSk7XG4gICAgICAgIGxldCBhY3Rpb25zID0gWyB7YWN0aW9uOiAncHJlc3MnLCBvcHRpb25zOiB7IHg6IDEwMCwgeTogMTAxIH19LFxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbjogJ21vdmVUbycsIG9wdGlvbnM6IHsgeDogNTAsIHk6IDUxIH19LFxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbjogJ3dhaXQnLCBvcHRpb25zOiB7IG1zOiA1MDAwIH19LFxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbjogJ21vdmVUbycsIG9wdGlvbnM6IHsgeDogLTQwLCB5OiAtNDEgfX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uOiAncmVsZWFzZScsIG9wdGlvbnM6IHt9fSBdO1xuICAgICAgICBsZXQgdG91Y2hTdGF0ZXMgPSBhd2FpdCBkcml2ZXIucGFyc2VUb3VjaChhY3Rpb25zLCBmYWxzZSk7XG4gICAgICAgIHRvdWNoU3RhdGVzLmxlbmd0aC5zaG91bGQuZXF1YWwoNSk7XG4gICAgICAgIGxldCBwYXJzZWRBY3Rpb25zID0gWyB7YWN0aW9uOiAncHJlc3MnLCB4OiAxMDAsIHk6IDEwMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uOiAnbW92ZVRvJywgeDogMTUwLCB5OiAxNTJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbjogJ3dhaXQnLCB4OiAxNTAsIHk6IDE1Mn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uOiAnbW92ZVRvJywgeDogMTEwLCB5OiAxMTF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbjogJ3JlbGVhc2UnfV07XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIHRvdWNoU3RhdGVzKSB7XG4gICAgICAgICAgc3RhdGUuYWN0aW9uLnNob3VsZC5lcXVhbChwYXJzZWRBY3Rpb25zW2luZGV4XS5hY3Rpb24pO1xuICAgICAgICAgIGlmIChhY3Rpb25zW2luZGV4XS5hY3Rpb24gIT09ICdyZWxlYXNlJykge1xuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy54LnNob3VsZC5lcXVhbChwYXJzZWRBY3Rpb25zW2luZGV4XS54KTtcbiAgICAgICAgICAgIHN0YXRlLm9wdGlvbnMueS5zaG91bGQuZXF1YWwocGFyc2VkQWN0aW9uc1tpbmRleF0ueSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4iXX0=