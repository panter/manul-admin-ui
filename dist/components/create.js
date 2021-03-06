'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoForm = require('./forms/AutoForm');

var _AutoForm2 = _interopRequireDefault(_AutoForm);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Create = function Create(_ref) {
  var collectionName = _ref.collectionName,
      schema = _ref.schema,
      create = _ref.create,
      title = _ref.title,
      gotoList = _ref.gotoList;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Create ',
      title
    ),
    _react2.default.createElement(_AutoForm2.default, { schema: schema, onSubmit: function onSubmit(doc) {
        return create(collectionName, doc);
      } }),
    _react2.default.createElement(
      _button2.default,
      { onClick: function onClick() {
          return gotoList(collectionName);
        } },
      'Back to list'
    )
  );
};

Create.propTypes = {};

Create.defaultProps = {};

Create.displayName = 'Admin.Create';

exports.default = Create;
//# sourceMappingURL=create.js.map