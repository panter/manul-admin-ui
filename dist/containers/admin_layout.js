'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depsMapper = exports.composer = undefined;

var _mantraCore = require('mantra-core');

var _admin_layout = require('../components/admin_layout');

var _admin_layout2 = _interopRequireDefault(_admin_layout);

var _restrict_to_roles = require('../hocs/restrict_to_roles');

var _restrict_to_roles2 = _interopRequireDefault(_restrict_to_roles);

var _not_allowed = require('../components/not_allowed');

var _not_allowed2 = _interopRequireDefault(_not_allowed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composer = exports.composer = function composer(_ref, onData) {
  var context = _ref.context;

  onData(null, {});
};

var depsMapper = exports.depsMapper = function depsMapper(_context) {
  return {
    context: function context() {
      return _context;
    }
  };
};

exports.default = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer),
// restrictToRoles('admin', () => NotAllowed),
(0, _mantraCore.useDeps)(depsMapper))(_admin_layout2.default);
//# sourceMappingURL=admin_layout.js.map