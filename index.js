const express = require('express');
const moment = require('moment-timezone');

const app = express();
const port = 80;


app.get('/', (req, res) => {

  console.log('GET request received');

  const currentTimeUTC = moment().utc();
  const philippineTime = currentTimeUTC.tz('Asia/Manila').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

  res.json({
    "androidversion": 0,
    "checkvpn": false,
    "country": {
      "country": {
        "iso_code": "PH"
      }
    },
    "forceUpdate": false,
    "iosversion": 0,
    "ip": "119.94.32.185",
    "systemTime": philippineTime,
    "vmsversion": "release-Vivaone-R41-10",
    "voucherRedemption": true
  })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
