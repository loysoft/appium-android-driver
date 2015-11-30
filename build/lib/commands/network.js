'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mobileJsonWireProtocol = require('mobile-json-wire-protocol');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var commands = {},
    helpers = {},
    extensions = {};

commands.getNetworkConnection = function callee$0$0() {
  var airplaneModeOn, connection, wifiOn, dataOn;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].info("Getting network connection");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.isAirplaneModeOn());

      case 3:
        airplaneModeOn = context$1$0.sent;
        connection = airplaneModeOn ? 1 : 0;

        if (airplaneModeOn) {
          context$1$0.next = 14;
          break;
        }

        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.adb.isWifiOn());

      case 8:
        wifiOn = context$1$0.sent;

        connection += wifiOn ? 2 : 0;
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.adb.isDataOn());

      case 12:
        dataOn = context$1$0.sent;

        connection += dataOn ? 4 : 0;

      case 14:
        return context$1$0.abrupt('return', connection);

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setNetworkConnection = function callee$0$0(type) {
  var airplaneMode, wifi, data;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].info("Setting network connection");
        // decode the input
        airplaneMode = type % 2;

        type >>= 1;
        wifi = type % 2;

        type >>= 1;
        data = type % 2;
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.setAirplaneMode(airplaneMode));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }));

      case 8:
        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.broadcastAirplaneMode(airplaneMode));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }));

      case 10:
        if (airplaneMode) {
          context$1$0.next = 13;
          break;
        }

        context$1$0.next = 13;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.setWifiAndData({ wifi: wifi, data: data }));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        }));

      case 13:
        context$1$0.next = 15;
        return _regeneratorRuntime.awrap(this.getNetworkConnection());

      case 15:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 16:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.toggleData = function callee$0$0() {
  var data;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this2 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.isDataOn());

      case 2:
        data = !context$1$0.sent;

        _logger2['default'].info('Turning network data ' + (data ? 'on' : 'off'));
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.setWifiAndData({ data: data }));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this2);
        }));

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.toggleWiFi = function callee$0$0() {
  var wifi;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this3 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.isWifiOn());

      case 2:
        wifi = !context$1$0.sent;

        _logger2['default'].info('Turning WiFi ' + (wifi ? 'on' : 'off'));
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.setWifiAndData({ wifi: wifi }));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this3);
        }));

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.toggleFlightMode = function callee$0$0() {
  var flightMode;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this4 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(this.adb.isAirplaneModeOn());

      case 2:
        flightMode = !context$1$0.sent;

        _logger2['default'].info('Turning flight mode ' + (flightMode ? 'on' : 'off'));
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.setAirplaneMode(flightMode));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this4);
        }));

      case 6:
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.adb.broadcastAirplaneMode(flightMode));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this4);
        }));

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.setGeoLocation = function callee$0$0(location) {
  var cmd;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        cmd = 'geo fix ' + location.longitude + ' ' + location.latitude;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.sendTelnetCommand(cmd));

      case 3:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

commands.toggleLocationServices = function callee$0$0() {
  var api, seq;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _logger2['default'].info("Toggling location services");
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.adb.getApiLevel());

      case 3:
        api = context$1$0.sent;

        if (!(api > 15)) {
          context$1$0.next = 18;
          break;
        }

        seq = [19, 19];

        if (!(api === 16)) {
          context$1$0.next = 10;
          break;
        }

        // This version of Android has a "parent" button in its action bar
        seq.push(20); // down
        context$1$0.next = 14;
        break;

      case 10:
        if (!(api >= 19)) {
          context$1$0.next = 14;
          break;
        }

        // Newer versions of Android have the toggle in the Action bar
        seq = [22, 22, 19]; // right, right, up
        /*
         * Once the Location services switch is OFF, it won't receive focus
         * when going back to the Location Services settings screen unless we
         * send a dummy keyevent (UP) *before* opening the settings screen
         */
        context$1$0.next = 14;
        return _regeneratorRuntime.awrap(this.adb.keyevent(19));

      case 14:
        context$1$0.next = 16;
        return _regeneratorRuntime.awrap(this.toggleSetting('LOCATION_SOURCE_SETTINGS', seq));

      case 16:
        context$1$0.next = 19;
        break;

      case 18:
        throw new _mobileJsonWireProtocol.errors.NotYetImplementedError();

      case 19:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.toggleSetting = function callee$0$0(setting, preKeySeq) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, _ref, appPackage, appActivity;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this5 = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        /*
         * preKeySeq is the keyevent sequence to send over ADB in order
         * to position the cursor on the right option.
         * By default it's [up, up, down] because we usually target the 1st item in
         * the screen, and sometimes when opening settings activities the cursor is
         * already positionned on the 1st item, but we can't know for sure
         */
        if (_lodash2['default'].isNull(preKeySeq)) {
          preKeySeq = [19, 19, 20]; // up, up, down
        }

        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(this.openSettingsActivity(setting));

      case 3:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 6;
        _iterator = _getIterator(preKeySeq);

      case 8:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 15;
          break;
        }

        key = _step.value;
        context$1$0.next = 12;
        return _regeneratorRuntime.awrap(this.doKey(key));

      case 12:
        _iteratorNormalCompletion = true;
        context$1$0.next = 8;
        break;

      case 15:
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0['catch'](6);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
        context$1$0.next = 31;
        return _regeneratorRuntime.awrap(this.adb.getFocusedPackageAndActivity());

      case 31:
        _ref = context$1$0.sent;
        appPackage = _ref.appPackage;
        appActivity = _ref.appActivity;
        context$1$0.next = 36;
        return _regeneratorRuntime.awrap(this.wrapBootstrapDisconnect(function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                context$2$0.next = 2;
                return _regeneratorRuntime.awrap(this.doKey(23));

              case 2:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this5);
        }));

      case 36:
        context$1$0.prev = 36;
        context$1$0.next = 39;
        return _regeneratorRuntime.awrap(this.adb.waitForNotActivity(appPackage, appActivity, 5000));

      case 39:
        context$1$0.next = 41;
        return _regeneratorRuntime.awrap(this.doKey(22));

      case 41:
        context$1$0.next = 43;
        return _regeneratorRuntime.awrap(this.doKey(23));

      case 43:
        context$1$0.next = 45;
        return _regeneratorRuntime.awrap(this.adb.waitForNotActivity(appPackage, appActivity, 5000));

      case 45:
        context$1$0.next = 49;
        break;

      case 47:
        context$1$0.prev = 47;
        context$1$0.t1 = context$1$0['catch'](36);

      case 49:
        context$1$0.next = 51;
        return _regeneratorRuntime.awrap(this.adb.back());

      case 51:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[6, 17, 21, 29], [22,, 24, 28], [36, 47]]);
};

helpers.doKey = function callee$0$0(key) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_bluebird2['default'].delay(2000));

      case 2:
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(this.adb.keyevent(key));

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

helpers.wrapBootstrapDisconnect = function callee$0$0(wrapped) {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        this.ignoreUnexpectedShutdown = true;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(wrapped());

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(this.adb.restart());

      case 5:
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(this.bootstrap.start(this.opts.appPackage, this.opts.disableAndroidWatchers, this.acceptSslCerts));

      case 7:
        this.ignoreUnexpectedShutdown = false;

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

_Object$assign(extensions, commands, helpers);
exports.commands = commands;
exports.helpers = helpers;
exports['default'] = extensions;

// no need to check anything else if we are in airplane mode

/*
 * TODO: Implement isRealDevice(). This method fails on
 * real devices, it should throw a NotYetImplementedError
 */

/*
 * TODO: Implement isRealDevice(). This method fails on
 * real devices, it should throw a NotYetImplementedError
 */
// up, up

// There's no global location services toggle on older Android versions

/*
 * Click and handle potential ADB disconnect that occurs on official
 * emulator when the network connection is disabled
 */

/*
 * In one particular case (enable Location Services), a pop-up is
 * displayed on some platforms so the user accepts or refuses that Google
 * collects location data. So we wait for that pop-up to open, if it
 * doesn't then proceed
 */
// right
// click

// TODO: Confirm we need this delay. Seems to work without it.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9uZXR3b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3NCQUFnQixXQUFXOzs7O3NCQUNiLFFBQVE7Ozs7c0NBQ0MsMkJBQTJCOzt3QkFDcEMsVUFBVTs7OztBQUV4QixJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQUUsT0FBTyxHQUFHLEVBQUU7SUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVqRCxRQUFRLENBQUMsb0JBQW9CLEdBQUc7TUFFMUIsY0FBYyxFQUNkLFVBQVUsRUFJUixNQUFNLEVBRU4sTUFBTTs7OztBQVJaLDRCQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOzt5Q0FDWixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFOzs7QUFBbEQsc0JBQWM7QUFDZCxrQkFBVSxHQUFHLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7WUFHbEMsY0FBYzs7Ozs7O3lDQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFOzs7QUFBbEMsY0FBTTs7QUFDVixrQkFBVSxJQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7O3lDQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFOzs7QUFBbEMsY0FBTTs7QUFDVixrQkFBVSxJQUFLLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7Ozs0Q0FHMUIsVUFBVTs7Ozs7OztDQUNsQixDQUFDOztBQUVGLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxvQkFBZ0IsSUFBSTtNQUc5QyxZQUFZLEVBRVosSUFBSSxFQUVKLElBQUk7Ozs7OztBQU5SLDRCQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUVuQyxvQkFBWSxHQUFHLElBQUksR0FBRyxDQUFDOztBQUMzQixZQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ1AsWUFBSSxHQUFHLElBQUksR0FBRyxDQUFDOztBQUNuQixZQUFJLEtBQUssQ0FBQyxD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SUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Ozs7eUNBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7Ozs7eUNBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O3lDQUc1RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTs7Ozs7OztDQUN0QixDQUFDOztBQUVGLE9BQU8sQ0FBQyxLQUFLLEdBQUcsb0JBQWdCLEdBQUc7Ozs7O3lDQUUzQixzQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDOzs7O3lDQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Ozs7OztDQUM3QixDQUFDOztBQUVGLE9BQU8sQ0FBQyx1QkFBdUIsR0FBRyxvQkFBZ0IsT0FBTzs7OztBQUN2RCxZQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDOzt5Q0FDL0IsT0FBTyxFQUFFOzs7O3lDQUNULElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFOzs7O3lDQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7OztBQUN2RyxZQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O0NBQ3ZDLENBQUM7O0FBRUYsZUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsR0FBUixRQUFRO1FBQUUsT0FBTyxHQUFQLE9BQU87cUJBQ1gsVUFBVSIsImZpbGUiOiJsaWIvY29tbWFuZHMvbmV0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2cgZnJvbSAnLi4vbG9nZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBlcnJvcnMgfSBmcm9tICdtb2JpbGUtanNvbi13aXJlLXByb3RvY29sJztcbmltcG9ydCBCIGZyb20gJ2JsdWViaXJkJztcblxubGV0IGNvbW1hbmRzID0ge30sIGhlbHBlcnMgPSB7fSwgZXh0ZW5zaW9ucyA9IHt9O1xuXG5jb21tYW5kcy5nZXROZXR3b3JrQ29ubmVjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgbG9nLmluZm8oXCJHZXR0aW5nIG5ldHdvcmsgY29ubmVjdGlvblwiKTtcbiAgbGV0IGFpcnBsYW5lTW9kZU9uID0gYXdhaXQgdGhpcy5hZGIuaXNBaXJwbGFuZU1vZGVPbigpO1xuICBsZXQgY29ubmVjdGlvbiA9IGFpcnBsYW5lTW9kZU9uID8gMSA6IDA7XG5cbiAgLy8gbm8gbmVlZCB0byBjaGVjayBhbnl0aGluZyBlbHNlIGlmIHdlIGFyZSBpbiBhaXJwbGFuZSBtb2RlXG4gIGlmICghYWlycGxhbmVNb2RlT24pIHtcbiAgICBsZXQgd2lmaU9uID0gYXdhaXQgdGhpcy5hZGIuaXNXaWZpT24oKTtcbiAgICBjb25uZWN0aW9uICs9ICh3aWZpT24gPyAyIDogMCk7XG4gICAgbGV0IGRhdGFPbiA9IGF3YWl0IHRoaXMuYWRiLmlzRGF0YU9uKCk7XG4gICAgY29ubmVjdGlvbiArPSAoZGF0YU9uID8gNCA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59O1xuXG5jb21tYW5kcy5zZXROZXR3b3JrQ29ubmVjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uICh0eXBlKSB7XG4gIGxvZy5pbmZvKFwiU2V0dGluZyBuZXR3b3JrIGNvbm5lY3Rpb25cIik7XG4gIC8vIGRlY29kZSB0aGUgaW5wdXRcbiAgbGV0IGFpcnBsYW5lTW9kZSA9IHR5cGUgJSAyO1xuICB0eXBlID4+PSAxO1xuICBsZXQgd2lmaSA9IHR5cGUgJSAyO1xuICB0eXBlID4+PSAxO1xuICBsZXQgZGF0YSA9IHR5cGUgJSAyO1xuXG4gIGF3YWl0IHRoaXMud3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRoaXMuYWRiLnNldEFpcnBsYW5lTW9kZShhaXJwbGFuZU1vZGUpO1xuICB9KTtcbiAgYXdhaXQgdGhpcy53cmFwQm9vdHN0cmFwRGlzY29ubmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlKGFpcnBsYW5lTW9kZSk7XG4gIH0pO1xuICBpZiAoIWFpcnBsYW5lTW9kZSkge1xuICAgIGF3YWl0IHRoaXMud3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgdGhpcy5hZGIuc2V0V2lmaUFuZERhdGEoe3dpZmksIGRhdGF9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhd2FpdCB0aGlzLmdldE5ldHdvcmtDb25uZWN0aW9uKCk7XG59O1xuXG5jb21tYW5kcy50b2dnbGVEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsZXQgZGF0YSA9ICEoYXdhaXQgdGhpcy5hZGIuaXNEYXRhT24oKSk7XG4gIGxvZy5pbmZvKGBUdXJuaW5nIG5ldHdvcmsgZGF0YSAke2RhdGEgPyAnb24nIDogJ29mZid9YCk7XG4gIGF3YWl0IHRoaXMud3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRoaXMuYWRiLnNldFdpZmlBbmREYXRhKHtkYXRhfSk7XG4gIH0pO1xufTtcblxuY29tbWFuZHMudG9nZ2xlV2lGaSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHdpZmkgPSAhKGF3YWl0IHRoaXMuYWRiLmlzV2lmaU9uKCkpO1xuICBsb2cuaW5mbyhgVHVybmluZyBXaUZpICR7d2lmaSA/ICdvbicgOiAnb2ZmJ31gKTtcbiAgYXdhaXQgdGhpcy53cmFwQm9vdHN0cmFwRGlzY29ubmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5hZGIuc2V0V2lmaUFuZERhdGEoe3dpZml9KTtcbiAgfSk7XG59O1xuXG5jb21tYW5kcy50b2dnbGVGbGlnaHRNb2RlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAvKlxuICAgKiBUT0RPOiBJbXBsZW1lbnQgaXNSZWFsRGV2aWNlKCkuIFRoaXMgbWV0aG9kIGZhaWxzIG9uXG4gICAqIHJlYWwgZGV2aWNlcywgaXQgc2hvdWxkIHRocm93IGEgTm90WWV0SW1wbGVtZW50ZWRFcnJvclxuICAgKi9cbiAgbGV0IGZsaWdodE1vZGUgPSAhKGF3YWl0IHRoaXMuYWRiLmlzQWlycGxhbmVNb2RlT24oKSk7XG4gIGxvZy5pbmZvKGBUdXJuaW5nIGZsaWdodCBtb2RlICR7ZmxpZ2h0TW9kZSA/ICdvbicgOiAnb2ZmJ31gKTtcbiAgYXdhaXQgdGhpcy53cmFwQm9vdHN0cmFwRGlzY29ubmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5hZGIuc2V0QWlycGxhbmVNb2RlKGZsaWdodE1vZGUpO1xuICB9KTtcbiAgYXdhaXQgdGhpcy53cmFwQm9vdHN0cmFwRGlzY29ubmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5hZGIuYnJvYWRjYXN0QWlycGxhbmVNb2RlKGZsaWdodE1vZGUpO1xuICB9KTtcbn07XG5cbmNvbW1hbmRzLnNldEdlb0xvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gIC8qXG4gICAqIFRPRE86IEltcGxlbWVudCBpc1JlYWxEZXZpY2UoKS4gVGhpcyBtZXRob2QgZmFpbHMgb25cbiAgICogcmVhbCBkZXZpY2VzLCBpdCBzaG91bGQgdGhyb3cgYSBOb3RZZXRJbXBsZW1lbnRlZEVycm9yXG4gICAqL1xuICBsZXQgY21kID0gYGdlbyBmaXggJHtsb2NhdGlvbi5sb25naXR1ZGV9ICR7bG9jYXRpb24ubGF0aXR1ZGV9YDtcbiAgcmV0dXJuIGF3YWl0IHRoaXMuYWRiLnNlbmRUZWxuZXRDb21tYW5kKGNtZCk7XG59O1xuXG5jb21tYW5kcy50b2dnbGVMb2NhdGlvblNlcnZpY2VzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBsb2cuaW5mbyhcIlRvZ2dsaW5nIGxvY2F0aW9uIHNlcnZpY2VzXCIpO1xuICBsZXQgYXBpID0gYXdhaXQgdGhpcy5hZGIuZ2V0QXBpTGV2ZWwoKTtcblxuICBpZiAoYXBpID4gMTUpIHtcbiAgICBsZXQgc2VxID0gWzE5LCAxOV07IC8vIHVwLCB1cFxuICAgIGlmIChhcGkgPT09IDE2KSB7XG4gICAgICAvLyBUaGlzIHZlcnNpb24gb2YgQW5kcm9pZCBoYXMgYSBcInBhcmVudFwiIGJ1dHRvbiBpbiBpdHMgYWN0aW9uIGJhclxuICAgICAgc2VxLnB1c2goMjApOyAvLyBkb3duXG4gICAgfSBlbHNlIGlmIChhcGkgPj0gMTkpIHtcbiAgICAgIC8vIE5ld2VyIHZlcnNpb25zIG9mIEFuZHJvaWQgaGF2ZSB0aGUgdG9nZ2xlIGluIHRoZSBBY3Rpb24gYmFyXG4gICAgICBzZXEgPSBbMjIsIDIyLCAxOV07IC8vIHJpZ2h0LCByaWdodCwgdXBcbiAgICAgIC8qXG4gICAgICAgKiBPbmNlIHRoZSBMb2NhdGlvbiBzZXJ2aWNlcyBzd2l0Y2ggaXMgT0ZGLCBpdCB3b24ndCByZWNlaXZlIGZvY3VzXG4gICAgICAgKiB3aGVuIGdvaW5nIGJhY2sgdG8gdGhlIExvY2F0aW9uIFNlcnZpY2VzIHNldHRpbmdzIHNjcmVlbiB1bmxlc3Mgd2VcbiAgICAgICAqIHNlbmQgYSBkdW1teSBrZXlldmVudCAoVVApICpiZWZvcmUqIG9wZW5pbmcgdGhlIHNldHRpbmdzIHNjcmVlblxuICAgICAgICovXG4gICAgICBhd2FpdCB0aGlzLmFkYi5rZXlldmVudCgxOSk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMudG9nZ2xlU2V0dGluZygnTE9DQVRJT05fU09VUkNFX1NFVFRJTkdTJywgc2VxKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGVyZSdzIG5vIGdsb2JhbCBsb2NhdGlvbiBzZXJ2aWNlcyB0b2dnbGUgb24gb2xkZXIgQW5kcm9pZCB2ZXJzaW9uc1xuICAgIHRocm93IG5ldyBlcnJvcnMuTm90WWV0SW1wbGVtZW50ZWRFcnJvcigpO1xuICB9XG59O1xuXG5oZWxwZXJzLnRvZ2dsZVNldHRpbmcgPSBhc3luYyBmdW5jdGlvbiAoc2V0dGluZywgcHJlS2V5U2VxKSB7XG4gIC8qXG4gICAqIHByZUtleVNlcSBpcyB0aGUga2V5ZXZlbnQgc2VxdWVuY2UgdG8gc2VuZCBvdmVyIEFEQiBpbiBvcmRlclxuICAgKiB0byBwb3NpdGlvbiB0aGUgY3Vyc29yIG9uIHRoZSByaWdodCBvcHRpb24uXG4gICAqIEJ5IGRlZmF1bHQgaXQncyBbdXAsIHVwLCBkb3duXSBiZWNhdXNlIHdlIHVzdWFsbHkgdGFyZ2V0IHRoZSAxc3QgaXRlbSBpblxuICAgKiB0aGUgc2NyZWVuLCBhbmQgc29tZXRpbWVzIHdoZW4gb3BlbmluZyBzZXR0aW5ncyBhY3Rpdml0aWVzIHRoZSBjdXJzb3IgaXNcbiAgICogYWxyZWFkeSBwb3NpdGlvbm5lZCBvbiB0aGUgMXN0IGl0ZW0sIGJ1dCB3ZSBjYW4ndCBrbm93IGZvciBzdXJlXG4gICAqL1xuICBpZiAoXy5pc051bGwocHJlS2V5U2VxKSkge1xuICAgIHByZUtleVNlcSA9IFsxOSwgMTksIDIwXTsgLy8gdXAsIHVwLCBkb3duXG4gIH1cblxuICBhd2FpdCB0aGlzLm9wZW5TZXR0aW5nc0FjdGl2aXR5KHNldHRpbmcpO1xuXG4gIGZvciAobGV0IGtleSBvZiBwcmVLZXlTZXEpIHtcbiAgICBhd2FpdCB0aGlzLmRvS2V5KGtleSk7XG4gIH1cblxuICBsZXQge2FwcFBhY2thZ2UsIGFwcEFjdGl2aXR5fSA9IGF3YWl0IHRoaXMuYWRiLmdldEZvY3VzZWRQYWNrYWdlQW5kQWN0aXZpdHkoKTtcblxuICAvKlxuICAgKiBDbGljayBhbmQgaGFuZGxlIHBvdGVudGlhbCBBREIgZGlzY29ubmVjdCB0aGF0IG9jY3VycyBvbiBvZmZpY2lhbFxuICAgKiBlbXVsYXRvciB3aGVuIHRoZSBuZXR3b3JrIGNvbm5lY3Rpb24gaXMgZGlzYWJsZWRcbiAgICovXG4gIGF3YWl0IHRoaXMud3JhcEJvb3RzdHJhcERpc2Nvbm5lY3QoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRoaXMuZG9LZXkoMjMpO1xuICB9KTtcblxuICAvKlxuICAgKiBJbiBvbmUgcGFydGljdWxhciBjYXNlIChlbmFibGUgTG9jYXRpb24gU2VydmljZXMpLCBhIHBvcC11cCBpc1xuICAgKiBkaXNwbGF5ZWQgb24gc29tZSBwbGF0Zm9ybXMgc28gdGhlIHVzZXIgYWNjZXB0cyBvciByZWZ1c2VzIHRoYXQgR29vZ2xlXG4gICAqIGNvbGxlY3RzIGxvY2F0aW9uIGRhdGEuIFNvIHdlIHdhaXQgZm9yIHRoYXQgcG9wLXVwIHRvIG9wZW4sIGlmIGl0XG4gICAqIGRvZXNuJ3QgdGhlbiBwcm9jZWVkXG4gICAqL1xuICB0cnkge1xuICAgIGF3YWl0IHRoaXMuYWRiLndhaXRGb3JOb3RBY3Rpdml0eShhcHBQYWNrYWdlLCBhcHBBY3Rpdml0eSwgNTAwMCk7XG4gICAgYXdhaXQgdGhpcy5kb0tleSgyMik7IC8vIHJpZ2h0XG4gICAgYXdhaXQgdGhpcy5kb0tleSgyMyk7IC8vIGNsaWNrXG4gICAgYXdhaXQgdGhpcy5hZGIud2FpdEZvck5vdEFjdGl2aXR5KGFwcFBhY2thZ2UsIGFwcEFjdGl2aXR5LCA1MDAwKTtcbiAgfSBjYXRjaCAoaWduKSB7fVxuXG4gIGF3YWl0IHRoaXMuYWRiLmJhY2soKTtcbn07XG5cbmhlbHBlcnMuZG9LZXkgPSBhc3luYyBmdW5jdGlvbiAoa2V5KSB7XG4gIC8vIFRPRE86IENvbmZpcm0gd2UgbmVlZCB0aGlzIGRlbGF5LiBTZWVtcyB0byB3b3JrIHdpdGhvdXQgaXQuXG4gIGF3YWl0IEIuZGVsYXkoMjAwMCk7XG4gIGF3YWl0IHRoaXMuYWRiLmtleWV2ZW50KGtleSk7XG59O1xuXG5oZWxwZXJzLndyYXBCb290c3RyYXBEaXNjb25uZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHdyYXBwZWQpIHtcbiAgdGhpcy5pZ25vcmVVbmV4cGVjdGVkU2h1dGRvd24gPSB0cnVlO1xuICBhd2FpdCB3cmFwcGVkKCk7XG4gIGF3YWl0IHRoaXMuYWRiLnJlc3RhcnQoKTtcbiAgYXdhaXQgdGhpcy5ib290c3RyYXAuc3RhcnQodGhpcy5vcHRzLmFwcFBhY2thZ2UsIHRoaXMub3B0cy5kaXNhYmxlQW5kcm9pZFdhdGNoZXJzLCB0aGlzLmFjY2VwdFNzbENlcnRzKTtcbiAgdGhpcy5pZ25vcmVVbmV4cGVjdGVkU2h1dGRvd24gPSBmYWxzZTtcbn07XG5cbk9iamVjdC5hc3NpZ24oZXh0ZW5zaW9ucywgY29tbWFuZHMsIGhlbHBlcnMpO1xuZXhwb3J0IHsgY29tbWFuZHMsIGhlbHBlcnMgfTtcbmV4cG9ydCBkZWZhdWx0IGV4dGVuc2lvbnM7XG4iXX0=