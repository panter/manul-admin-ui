'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depsMapper = undefined;

var _mantraCore = require('mantra-core');

var _list = require('../components/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var depsMapper = exports.depsMapper = function depsMapper(_context, actions) {
  return {
    context: function context() {
      return _context;
    },
    downloadCsv: actions.manulAdmin.downloadCsv,

    MeteorGriddle: _context.MeteorGriddle
  };
};

exports.default = (0, _mantraCore.composeAll)((0, _mantraCore.useDeps)(depsMapper))(_list2.default);
//# sourceMappingURL=list.js.map
