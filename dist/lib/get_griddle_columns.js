'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _isString2 = require('lodash/fp/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _griddleReact = require('griddle-react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColumns = function getColumns(_ref) {
  var collectionName = _ref.collectionName,
      columns = _ref.columns,
      _ref$columnsI18n = _ref.columnsI18n,
      columnsI18n = _ref$columnsI18n === undefined ? '' + collectionName : _ref$columnsI18n;

  var getTitle = function getTitle(id) {
    return columnsI18n + '.' + id;
  };
  return columns.map(function (props, index) {
    if ((0, _isString3.default)(props)) {
      return _react2.default.createElement(_griddleReact.ColumnDefinition, {
        order: index + 1,
        key: props,
        title: getTitle(props),
        id: props
      });
    }
    return _react2.default.createElement(_griddleReact.ColumnDefinition, (0, _extends3.default)({
      title: getTitle(props.id),
      key: props.id
    }, props, {
      order: index + 1
    }));
  });
};

exports.default = getColumns;
//# sourceMappingURL=get_griddle_columns.js.map
