#!/usr/bin/env node

require('source-map-support').install();

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _asyncbox = require('asyncbox');

var _libServer = require('./lib/server');

var _libDriver = require('./lib/driver');

var _libDriver2 = _interopRequireDefault(_libDriver);

var _libAndroidHelpers = require('./lib/android-helpers');

var _libAndroidHelpers2 = _interopRequireDefault(_libAndroidHelpers);

var _libCommandsIndex = require('./lib/commands/index');

var _libCommandsIndex2 = _interopRequireDefault(_libCommandsIndex);

var _libWebviewHelpers = require('./lib/webview-helpers');

var _libWebviewHelpers2 = _interopRequireDefault(_libWebviewHelpers);

var _libDesiredCaps = require('./lib/desired-caps');

var DEFAULT_HOST = "localhost";
var DEFAULT_PORT = 4723;

function main() {
  var port, host;
  return _regeneratorRuntime.async(function main$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        port = _yargs2['default'].argv.port || DEFAULT_PORT;
        host = _yargs2['default'].argv.host || DEFAULT_HOST;
        return context$1$0.abrupt('return', (0, _libServer.startServer)(port, host));

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

if (require.main === module) {
  (0, _asyncbox.asyncify)(main);
}

exports.androidHelpers = _libAndroidHelpers2['default'];
exports.androidCommands = _libCommandsIndex2['default'];
exports.AndroidDriver = _libDriver2['default'];
exports.startServer = _libServer.startServer;
exports.commonCapConstraints = _libDesiredCaps.commonCapConstraints;
exports.webviewHelpers = _libWebviewHelpers2['default'];
exports.NATIVE_WIN = _libWebviewHelpers.NATIVE_WIN;
exports.WEBVIEW_WIN = _libWebviewHelpers.WEBVIEW_WIN;
exports.WEBVIEW_BASE = _libWebviewHelpers.WEBVIEW_BASE;
exports.CHROMIUM_WIN = _libWebviewHelpers.CHROMIUM_WIN;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7cUJBR2tCLE9BQU87Ozs7d0JBQ0EsVUFBVTs7eUJBQ1AsY0FBYzs7eUJBQ2hCLGNBQWM7Ozs7aUNBQ2IsdUJBQXVCOzs7O2dDQUN0QixzQkFBc0I7Ozs7aUNBQ3ZCLHVCQUF1Qjs7Ozs4QkFHYixvQkFBb0I7O0FBRXpELElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUNqQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7O0FBRTFCLFNBQWUsSUFBSTtNQUNiLElBQUksRUFDSixJQUFJOzs7O0FBREosWUFBSSxHQUFHLG1CQUFNLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWTtBQUN0QyxZQUFJLEdBQUcsbUJBQU0sSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZOzRDQUNuQyw0QkFBWSxJQUFJLEVBQUUsSUFBSSxDQUFDOzs7Ozs7O0NBQy9COztBQUVELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7QUFDM0IsMEJBQVMsSUFBSSxDQUFDLENBQUM7Q0FDaEI7O1FBRVEsY0FBYztRQUFFLGVBQWU7UUFBRSxhQUFhO1FBQUUsV0FBVztRQUMzRCxvQkFBb0I7UUFBRSxjQUFjO1FBQUUsVUFBVTtRQUFFLFdBQVc7UUFDN0QsWUFBWTtRQUFFLFlBQVkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHRyYW5zcGlsZTptYWluXG5cbmltcG9ydCB5YXJncyBmcm9tICd5YXJncyc7XG5pbXBvcnQgeyBhc3luY2lmeSB9IGZyb20gJ2FzeW5jYm94JztcbmltcG9ydCB7IHN0YXJ0U2VydmVyIH0gZnJvbSAnLi9saWIvc2VydmVyJztcbmltcG9ydCBBbmRyb2lkRHJpdmVyIGZyb20gJy4vbGliL2RyaXZlcic7XG5pbXBvcnQgYW5kcm9pZEhlbHBlcnMgZnJvbSAnLi9saWIvYW5kcm9pZC1oZWxwZXJzJztcbmltcG9ydCBhbmRyb2lkQ29tbWFuZHMgZnJvbSAnLi9saWIvY29tbWFuZHMvaW5kZXgnO1xuaW1wb3J0IHdlYnZpZXdIZWxwZXJzIGZyb20gJy4vbGliL3dlYnZpZXctaGVscGVycyc7XG5pbXBvcnQgeyBOQVRJVkVfV0lOLCBXRUJWSUVXX1dJTiwgV0VCVklFV19CQVNFLFxuICAgICAgICAgQ0hST01JVU1fV0lOIH0gZnJvbSAnLi9saWIvd2Vidmlldy1oZWxwZXJzJztcbmltcG9ydCB7IGNvbW1vbkNhcENvbnN0cmFpbnRzIH0gZnJvbSAnLi9saWIvZGVzaXJlZC1jYXBzJztcblxuY29uc3QgREVGQVVMVF9IT1NUID0gXCJsb2NhbGhvc3RcIjtcbmNvbnN0IERFRkFVTFRfUE9SVCA9IDQ3MjM7XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4gKCkge1xuICBsZXQgcG9ydCA9IHlhcmdzLmFyZ3YucG9ydCB8fCBERUZBVUxUX1BPUlQ7XG4gIGxldCBob3N0ID0geWFyZ3MuYXJndi5ob3N0IHx8IERFRkFVTFRfSE9TVDtcbiAgcmV0dXJuIHN0YXJ0U2VydmVyKHBvcnQsIGhvc3QpO1xufVxuXG5pZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbiAgYXN5bmNpZnkobWFpbik7XG59XG5cbmV4cG9ydCB7IGFuZHJvaWRIZWxwZXJzLCBhbmRyb2lkQ29tbWFuZHMsIEFuZHJvaWREcml2ZXIsIHN0YXJ0U2VydmVyLFxuICAgICAgICAgY29tbW9uQ2FwQ29uc3RyYWludHMsIHdlYnZpZXdIZWxwZXJzLCBOQVRJVkVfV0lOLCBXRUJWSUVXX1dJTixcbiAgICAgICAgIFdFQlZJRVdfQkFTRSwgQ0hST01JVU1fV0lOIH07XG4iXX0=