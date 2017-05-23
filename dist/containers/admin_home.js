'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depsMapper = undefined;

var _mantraCore = require('mantra-core');

var _admin_home = require('../components/admin_home');

var _admin_home2 = _interopRequireDefault(_admin_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var depsMapper = exports.depsMapper = function depsMapper(_context) {
  return {
    context: function context() {
      return _context;
    },
    adminConfig: _context.adminContext.config
  };
};

exports.default = (0, _mantraCore.composeAll)((0, _mantraCore.useDeps)(depsMapper))(_admin_home2.default);
//# sourceMappingURL=admin_home.js.map
