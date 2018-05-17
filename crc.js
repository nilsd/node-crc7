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

exports.getCRCForString = (string) => {
    const CRC7_POLY = 0x91;
    let crc = 0

	for (let i = 0, L = string.length; i < L; i++) {
		crc ^= string.charCodeAt(i)

		for (let j = 0; j < 8; j++) {
			crc = (crc & 0x80) ? ((crc << 1) ^ (CRC7_POLY << (8 - 7))) : (crc << 1)
		}
	}
	crc = (crc & 0xff) >> (8 - 7)

	return crc
}