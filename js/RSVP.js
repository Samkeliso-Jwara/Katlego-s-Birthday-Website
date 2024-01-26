function submitRSVP() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const attendance = document.getElementById("attendance").value;

  // Generate unique QR code data
  const qrCodeData = `${name},${email},${attendance}`;

  // Create QR code
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: qrCodeData,
    width: 128,
    height: 128,
  });

  // Download QR code as an image
  const qrCodeImage = document
    .getElementById("qrcode")
    .getElementsByTagName("img")[0];
  const link = document.createElement("a");
  link.href = qrCodeImage.src;
  link.download = "RSVP_QR_Code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
