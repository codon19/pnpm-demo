"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _pnpmDemoPackage() {
  const data = _interopRequireDefault(require("@codon/pnpm-demo-package2"));

  _pnpmDemoPackage = function _pnpmDemoPackage() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fn() {
  (0, _pnpmDemoPackage().default)();
  console.log('package2 fn');
}

var _default = fn;
exports.default = _default;