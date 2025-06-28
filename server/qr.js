const QRCode = require('qrcode');

const generateQR = async (text) => {
  try {
    const url = await QRCode.toDataURL(text);
    return url;
  } catch (err) {
    console.error(err);
  }
};
