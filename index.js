
const CRC = require("./crc");

const message = new Buffer([0x83, 0x01]);
const crc = CRC.getCRC(message);
const messageWithCRC = Buffer.concat([message, new Buffer([crc])]);

console.log(messageWithCRC); // Outputs 83 01 17
