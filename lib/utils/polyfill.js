'use strict';

const typedarray = require('typedarray');

module.exports = {
  Uint8Array: Uint8Array ? Uint8Array : typedarray.Uint8Array,
  Uint16Array: Uint16Array ? Uint16Array : typedarray.Uint16Array
};
