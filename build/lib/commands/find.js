//import _ from 'lodash';
//import { errors } from 'mobile-json-wire-protocol';
//import log from '../logger';

"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
var commands = {},
    helpers = {},
    extensions = {};

// stategy: locator strategy
// selector: the actual selector for finding an element
// mult: multiple elements or just one?
// context: finding an element from the root context? or starting from another element
helpers.findElOrEls = function callee$0$0(strategy, selector, mult) {
  var context = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
  var params;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        // throws error if not valid, uses this.locatorStrategies
        this.validateLocatorStrategy(strategy);

        if (!(strategy === "xpath" && context)) {
          context$1$0.next = 3;
          break;
        }

        throw new Error("Cannot use xpath locator strategy from an element. " + "It can only be used from the root element");

      case 3:
        if (selector) {
          context$1$0.next = 5;
          break;
        }

        throw new Error("Must provide a selector when finding elements");

      case 5:
        params = {
          strategy: strategy,
          selector: selector,
          context: context,
          multiple: mult
        };
        return context$1$0.abrupt("return", this.bootstrap.sendAction('find', params));

      case 7:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports["default"] = extensions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9maW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOzs7Ozs7QUFNakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBZ0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJO01BQUUsT0FBTyx5REFBRyxFQUFFO01BYXRFLE1BQU07Ozs7O0FBWFYsWUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUVuQyxRQUFRLEtBQUssT0FBTyxJQUFJLE9BQU8sQ0FBQTs7Ozs7Y0FDM0IsSUFBSSxLQUFLLENBQUMscURBQXFELEdBQ3JELDJDQUEyQyxDQUFDOzs7WUFHekQsUUFBUTs7Ozs7Y0FDTCxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQzs7O0FBRzlELGNBQU0sR0FBRztBQUNYLGtCQUFRLEVBQUUsUUFBUTtBQUNsQixrQkFBUSxFQUFFLFFBQVE7QUFDbEIsaUJBQU8sRUFBRSxPQUFPO0FBQ2hCLGtCQUFRLEVBQUUsSUFBSTtTQUNmOzRDQUVNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Ozs7Ozs7Q0FDakQsQ0FBQzs7QUFFRixlQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEMsUUFBUSxHQUFSLFFBQVE7UUFBRSxPQUFPLEdBQVAsT0FBTztxQkFDWCxVQUFVIiwiZmlsZSI6ImxpYi9jb21tYW5kcy9maW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy9pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICdtb2JpbGUtanNvbi13aXJlLXByb3RvY29sJztcbi8vaW1wb3J0IGxvZyBmcm9tICcuLi9sb2dnZXInO1xuXG5sZXQgY29tbWFuZHMgPSB7fSwgaGVscGVycyA9IHt9LCBleHRlbnNpb25zID0ge307XG5cbi8vIHN0YXRlZ3k6IGxvY2F0b3Igc3RyYXRlZ3lcbi8vIHNlbGVjdG9yOiB0aGUgYWN0dWFsIHNlbGVjdG9yIGZvciBmaW5kaW5nIGFuIGVsZW1lbnRcbi8vIG11bHQ6IG11bHRpcGxlIGVsZW1lbnRzIG9yIGp1c3Qgb25lP1xuLy8gY29udGV4dDogZmluZGluZyBhbiBlbGVtZW50IGZyb20gdGhlIHJvb3QgY29udGV4dD8gb3Igc3RhcnRpbmcgZnJvbSBhbm90aGVyIGVsZW1lbnRcbmhlbHBlcnMuZmluZEVsT3JFbHMgPSBhc3luYyBmdW5jdGlvbiAoc3RyYXRlZ3ksIHNlbGVjdG9yLCBtdWx0LCBjb250ZXh0ID0gJycpIHtcbiAgLy8gdGhyb3dzIGVycm9yIGlmIG5vdCB2YWxpZCwgdXNlcyB0aGlzLmxvY2F0b3JTdHJhdGVnaWVzXG4gIHRoaXMudmFsaWRhdGVMb2NhdG9yU3RyYXRlZ3koc3RyYXRlZ3kpO1xuXG4gIGlmIChzdHJhdGVneSA9PT0gXCJ4cGF0aFwiICYmIGNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIHhwYXRoIGxvY2F0b3Igc3RyYXRlZ3kgZnJvbSBhbiBlbGVtZW50LiBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiSXQgY2FuIG9ubHkgYmUgdXNlZCBmcm9tIHRoZSByb290IGVsZW1lbnRcIik7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBwcm92aWRlIGEgc2VsZWN0b3Igd2hlbiBmaW5kaW5nIGVsZW1lbnRzXCIpO1xuICB9XG5cbiAgbGV0IHBhcmFtcyA9IHtcbiAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgbXVsdGlwbGU6IG11bHRcbiAgfTtcblxuICByZXR1cm4gdGhpcy5ib290c3RyYXAuc2VuZEFjdGlvbignZmluZCcsIHBhcmFtcyk7XG59O1xuXG5PYmplY3QuYXNzaWduKGV4dGVuc2lvbnMsIGNvbW1hbmRzLCBoZWxwZXJzKTtcbmV4cG9ydCB7IGNvbW1hbmRzLCBoZWxwZXJzfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=