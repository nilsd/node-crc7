const CRC7_POLY = 0x91;

exports.getCRC = (buffer) => {
    var i, j, crc = 0;

    for (i = 0; i < buffer.length; i++) {
        crc ^= buffer[i];

        for (j = 0; j < 8; j++) {
            if (crc & 1)
                crc ^= CRC7_POLY;
            crc >>= 1;
        }
    }
    
    return crc;
}