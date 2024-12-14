const crc32Lib = require("crc-32");
const crc32cLib = require("crc-32/crc32c");

module.exports.crc32 =  function crc32(input, crc) {
  return crc32Lib.buf(input, crc) >>> 0;
}
module.exports.crc32c = function crc32c(input, crc) {
  return crc32cLib.buf(input, crc) >>> 0;
}
