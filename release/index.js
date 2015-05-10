'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createThenable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

var _uniqueConcat = require('unique-concat');

var _uniqueConcat2 = _interopRequireDefault(_uniqueConcat);

var _objectOmit = require('object-omit');

var _objectOmit2 = _interopRequireDefault(_objectOmit);

'use strict';

function createThenable(Promise, resolver) {
  return methods(Promise).reduce(createMethod, { then: then });
  function createMethod(thenable, name) {
    return _extends(thenable, _defineProperty({}, name, method(name)));
  }
  function method(name) {
    return function () {
      var _then;

      return (_then = this.then())[name].apply(_then, arguments);
    };
  }
  function then() {
    var _ref;

    return (_ref = new Promise(resolver)).then.apply(_ref, arguments);
  }
}

function methods(Promise) {
  return _uniqueConcat2['default'](['catch', 'finally'], Object.keys(_objectOmit2['default'](Promise.prototype, 'then')));
}
module.exports = exports['default'];
/*onFulfill, onReject*/