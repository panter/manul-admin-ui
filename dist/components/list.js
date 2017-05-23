'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _griddleReact = require('griddle-react');

var _griddle = require('./griddle');

var _griddle2 = _interopRequireDefault(_griddle);

var _get_griddle_columns = require('../lib/get_griddle_columns');

var _get_griddle_columns2 = _interopRequireDefault(_get_griddle_columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  var docs = props.docs,
      docsLoaded = props.docsLoaded,
      sortProperties = props.sortProperties,
      pageProperties = props.pageProperties,
      recordCount = props.recordCount;


  return _react2.default.createElement(
    _griddle2.default,
    {
      data: docs,
      docsLoaded: docsLoaded,
      sortProperties: sortProperties,
      pageProperties: (0, _extends3.default)({}, pageProperties, {
        recordCount: recordCount
      }),

      events: {}
    },
    _react2.default.createElement(
      _griddleReact.RowDefinition,
      null,
      (0, _get_griddle_columns2.default)(props)
    )
  );
};

exports.default = List;
//# sourceMappingURL=list.js.map
