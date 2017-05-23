'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depsMapper = undefined;

var _mantraCore = require('mantra-core');

var _manulI18n = require('@panter/manul-i18n');

var _create = require('../components/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var depsMapper = exports.depsMapper = function depsMapper(_context) {
  return {
    context: function context() {
      return _context;
    }
  };
};

exports.default = (0, _mantraCore.composeAll)((0, _manulI18n.withTranslatedSchema)(function (_ref) {
  var collectionName = _ref.collectionName;
  return { schema: collectionName };
}), (0, _mantraCore.useDeps)(depsMapper))(_create2.default);
//# sourceMappingURL=create.js.map
