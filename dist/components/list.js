'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flat = require('flat');

var _flat2 = _interopRequireDefault(_flat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var resultsPerPage = _ref.resultsPerPage,
      collectionName = _ref.collectionName,
      collection = _ref.collection,
      publications = _ref.publications,
      gotoEdit = _ref.gotoEdit,
      columns = _ref.columns,
      columnMetadata = _ref.columnMetadata,
      listTransformEntry = _ref.listTransformEntry,
      filteredFields = _ref.filteredFields,
      baseQuery = _ref.baseQuery,
      sortBy = _ref.sortBy,
      MeteorGriddle = _ref.MeteorGriddle;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(MeteorGriddle, {
      transformResult: listTransformEntry || _flat2.default,
      columns: columns,
      columnMetadata: columnMetadata,
      publication: publications.list,
      collection: collection,
      externalResultsPerPage: resultsPerPage,
      matchingResultsCount: publications.counts,
      filteredFields: filteredFields,
      initialSort: sortBy || columns[0],
      onRowClick: function onRowClick(event) {
        return gotoEdit(collectionName, event.props.data._id);
      },
      showFilter: true,
      baseQuery: baseQuery
    })
  );
};

List.propTypes = {};

List.defaultProps = {
  showActions: true,
  resultsPerPage: 100
};

List.displayName = 'Admin.List';

exports.default = List;
//# sourceMappingURL=list.js.map