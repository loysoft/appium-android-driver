'use strict';

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _general = require('./general');

var _general2 = _interopRequireDefault(_general);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _touch = require('./touch');

var _touch2 = _interopRequireDefault(_touch);

var _ime = require('./ime');

var _ime2 = _interopRequireDefault(_ime);

var _network = require('./network');

var _network2 = _interopRequireDefault(_network);

var commands = {};
_Object$assign(commands, _find2['default'], _general2['default'], _alert2['default'], _element2['default'], _context2['default'], _actions2['default'], _touch2['default'], _ime2['default'], _network2['default']
// add other command types here
);

exports['default'] = commands;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9jb21tYW5kcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O29CQUFxQixRQUFROzs7O3VCQUNMLFdBQVc7Ozs7cUJBQ2IsU0FBUzs7Ozt1QkFDUCxXQUFXOzs7O3VCQUNYLFdBQVc7Ozs7dUJBQ1osV0FBVzs7OztxQkFDWixTQUFTOzs7O21CQUNYLE9BQU87Ozs7dUJBQ0gsV0FBVzs7OztBQUduQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsZUFDRSxRQUFROztDQVdULENBQUM7O3FCQUVhLFFBQVEiLCJmaWxlIjoibGliL2NvbW1hbmRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRDbWRzIGZyb20gJy4vZmluZCc7XG5pbXBvcnQgZ2VuZXJhbENtZHMgZnJvbSAnLi9nZW5lcmFsJztcbmltcG9ydCBhbGVydENtZHMgZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgZWxlbWVudENtZHMgZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCBjb250ZXh0Q21kcyBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IGFjdGlvbkNtZHMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB0b3VjaENtZHMgZnJvbSAnLi90b3VjaCc7XG5pbXBvcnQgaW1lQ21kcyBmcm9tICcuL2ltZSc7XG5pbXBvcnQgbmV0d29ya0NtZHMgZnJvbSAnLi9uZXR3b3JrJztcblxuXG5sZXQgY29tbWFuZHMgPSB7fTtcbk9iamVjdC5hc3NpZ24oXG4gIGNvbW1hbmRzLFxuICBmaW5kQ21kcyxcbiAgZ2VuZXJhbENtZHMsXG4gIGFsZXJ0Q21kcyxcbiAgZWxlbWVudENtZHMsXG4gIGNvbnRleHRDbWRzLFxuICBhY3Rpb25DbWRzLFxuICB0b3VjaENtZHMsXG4gIGltZUNtZHMsXG4gIG5ldHdvcmtDbWRzXG4gIC8vIGFkZCBvdGhlciBjb21tYW5kIHR5cGVzIGhlcmVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hbmRzO1xuIl19