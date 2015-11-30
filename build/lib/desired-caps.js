'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _androidHelpers = require('./android-helpers');

var commonCapConstraints = {
  platformName: {
    isString: true,
    inclusion: ['Android'],
    presence: true
  },
  app: {
    isString: true
  },
  appActivity: {
    isString: true
  },
  appPackage: {
    isString: true
  },
  appWaitActivity: {
    isString: true
  },
  appWaitPackage: {
    isString: true
  },
  deviceReadyTimeout: {
    isNumber: true
  },
  androidCoverage: {
    isString: true
  },
  androidDeviceReadyTimeout: {
    isNumber: true
  },
  androidDeviceSocket: {
    isString: true
  },
  avd: {
    isString: true
  },
  avdLaunchTimeout: {
    isNumber: true
  },
  avdReadyTimeout: {
    isNumber: true
  },
  avdArgs: {
    isString: true
  },
  useKeystore: {
    isBoolean: true
  },
  keystorePath: {
    isString: true
  },
  keystorePassword: {
    isBoolean: true
  },
  keyAlias: {
    isString: true
  },
  keyPassword: {
    isString: true
  },
  chromedriverExecutable: {
    isString: true
  },
  autoWebviewTimeout: {
    isNumber: true
  },
  intentAction: {
    isString: true
  },
  intentCategory: {
    isString: true
  },
  intentFlags: {
    isString: true
  },
  optionalIntentArguments: {
    isString: true
  },
  dontStopAppOnReset: {
    isBoolean: true
  },
  unicodeKeyboard: {
    isBoolean: true
  },
  resetKeyboard: {
    isBoolean: true
  },
  noSign: {
    isBoolean: true
  },
  recreateChromeDriverSessions: {
    isBoolean: false
  },
  autoLaunch: {
    isBoolean: true
  }
};

var uiautomatorCapConstraints = {
  browserName: {
    isString: true,
    inclusion: _androidHelpers.CHROME_BROWSERS
  },
  enablePerformanceLogging: {
    isBoolean: true
  },
  ignoreUnimportantViews: {
    isBoolean: true
  },
  disableAndroidWatchers: {
    isBoolean: true
  },
  acceptSslCerts: {
    isBoolean: true
  },
  chromeOptions: {
    isObject: true
  }
};

var desiredCapConstraints = {};

_Object$assign(desiredCapConstraints, commonCapConstraints, uiautomatorCapConstraints);

exports['default'] = desiredCapConstraints;
exports.commonCapConstraints = commonCapConstraints;
//# sourceMappingURL=data:application/json;base64,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Qzs7QUFFL0IsZUFBYyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFDM0MseUJBQXlCLENBQUMsQ0FBQzs7cUJBRTFCLHFCQUFxQjtRQUMzQixvQkFBb0IsR0FBcEIsb0JBQW9CIiwiZmlsZSI6ImxpYi9kZXNpcmVkLWNhcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSFJPTUVfQlJPV1NFUlMgfSBmcm9tICcuL2FuZHJvaWQtaGVscGVycyc7XG5cbmxldCBjb21tb25DYXBDb25zdHJhaW50cyA9IHtcbiAgcGxhdGZvcm1OYW1lOiB7XG4gICAgaXNTdHJpbmc6IHRydWUsXG4gICAgaW5jbHVzaW9uOiBbJ0FuZHJvaWQnXSxcbiAgICBwcmVzZW5jZTogdHJ1ZVxuICB9LFxuICBhcHA6IHtcbiAgICBpc1N0cmluZzogdHJ1ZVxuICB9LFxuICBhcHBBY3Rpdml0eToge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGFwcFBhY2thZ2U6IHtcbiAgICBpc1N0cmluZzogdHJ1ZVxuICB9LFxuICBhcHBXYWl0QWN0aXZpdHk6IHtcbiAgICBpc1N0cmluZzogIHRydWVcbiAgfSxcbiAgYXBwV2FpdFBhY2thZ2U6IHtcbiAgICBpc1N0cmluZzogdHJ1ZVxuICB9LFxuICBkZXZpY2VSZWFkeVRpbWVvdXQ6IHtcbiAgICBpc051bWJlcjogdHJ1ZVxuICB9LFxuICBhbmRyb2lkQ292ZXJhZ2U6IHtcbiAgICBpc1N0cmluZzogdHJ1ZVxuICB9LFxuICBhbmRyb2lkRGV2aWNlUmVhZHlUaW1lb3V0OiB7XG4gICAgaXNOdW1iZXI6IHRydWVcbiAgfSxcbiAgYW5kcm9pZERldmljZVNvY2tldDoge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGF2ZDoge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGF2ZExhdW5jaFRpbWVvdXQ6IHtcbiAgICBpc051bWJlcjogdHJ1ZVxuICB9LFxuICBhdmRSZWFkeVRpbWVvdXQ6IHtcbiAgICBpc051bWJlcjogdHJ1ZVxuICB9LFxuICBhdmRBcmdzOiB7XG4gICAgaXNTdHJpbmc6IHRydWVcbiAgfSxcbiAgdXNlS2V5c3RvcmU6IHtcbiAgICBpc0Jvb2xlYW46IHRydWVcbiAgfSxcbiAga2V5c3RvcmVQYXRoOiB7XG4gICAgaXNTdHJpbmc6IHRydWVcbiAgfSxcbiAga2V5c3RvcmVQYXNzd29yZDoge1xuICAgIGlzQm9vbGVhbjogdHJ1ZVxuICB9LFxuICBrZXlBbGlhczoge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGtleVBhc3N3b3JkOiB7XG4gICAgaXNTdHJpbmc6IHRydWVcbiAgfSxcbiAgY2hyb21lZHJpdmVyRXhlY3V0YWJsZToge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGF1dG9XZWJ2aWV3VGltZW91dDoge1xuICAgIGlzTnVtYmVyOiB0cnVlXG4gIH0sXG4gIGludGVudEFjdGlvbjoge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGludGVudENhdGVnb3J5OiB7XG4gICAgaXNTdHJpbmc6IHRydWVcbiAgfSxcbiAgaW50ZW50RmxhZ3M6IHtcbiAgICBpc1N0cmluZzogdHJ1ZVxuICB9LFxuICBvcHRpb25hbEludGVudEFyZ3VtZW50czoge1xuICAgIGlzU3RyaW5nOiB0cnVlXG4gIH0sXG4gIGRvbnRTdG9wQXBwT25SZXNldDoge1xuICAgIGlzQm9vbGVhbjogdHJ1ZVxuICB9LFxuICB1bmljb2RlS2V5Ym9hcmQ6IHtcbiAgICBpc0Jvb2xlYW46IHRydWVcbiAgfSxcbiAgcmVzZXRLZXlib2FyZDoge1xuICAgIGlzQm9vbGVhbjogdHJ1ZVxuICB9LFxuICBub1NpZ246IHtcbiAgICBpc0Jvb2xlYW46IHRydWVcbiAgfSxcbiAgcmVjcmVhdGVDaHJvbWVEcml2ZXJTZXNzaW9uczoge1xuICAgIGlzQm9vbGVhbjogZmFsc2VcbiAgfSxcbiAgYXV0b0xhdW5jaDoge1xuICAgIGlzQm9vbGVhbjogdHJ1ZVxuICB9XG59O1xuXG5sZXQgdWlhdXRvbWF0b3JDYXBDb25zdHJhaW50cyA9IHtcbiAgYnJvd3Nlck5hbWU6IHtcbiAgICBpc1N0cmluZzogdHJ1ZSxcbiAgICBpbmNsdXNpb246IENIUk9NRV9CUk9XU0VSU1xuICB9LFxuICBlbmFibGVQZXJmb3JtYW5jZUxvZ2dpbmc6IHtcbiAgICBpc0Jvb2xlYW46IHRydWVcbiAgfSxcbiAgaWdub3JlVW5pbXBvcnRhbnRWaWV3czoge1xuICAgIGlzQm9vbGVhbjogdHJ1ZVxuICB9LFxuICBkaXNhYmxlQW5kcm9pZFdhdGNoZXJzOiB7XG4gICAgaXNCb29sZWFuOiB0cnVlXG4gIH0sXG4gIGFjY2VwdFNzbENlcnRzOiB7XG4gICAgaXNCb29sZWFuOiB0cnVlXG4gIH0sXG4gIGNocm9tZU9wdGlvbnM6IHtcbiAgICBpc09iamVjdDogdHJ1ZVxuICB9LFxufTtcblxubGV0IGRlc2lyZWRDYXBDb25zdHJhaW50cyA9IHt9O1xuXG5PYmplY3QuYXNzaWduKGRlc2lyZWRDYXBDb25zdHJhaW50cywgY29tbW9uQ2FwQ29uc3RyYWludHMsXG4gICAgICAgICAgICAgIHVpYXV0b21hdG9yQ2FwQ29uc3RyYWludHMpO1xuXG5leHBvcnQgZGVmYXVsdCBkZXNpcmVkQ2FwQ29uc3RyYWludHM7XG5leHBvcnQgeyBjb21tb25DYXBDb25zdHJhaW50cyB9O1xuIl19