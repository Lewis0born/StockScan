

// DOM element where the camera feed will be displayed
const scannerContainer = document.getElementById('scanner-container');

// Configure QuaggaJS
Quagga.init({
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: scannerContainer,
    constraints: {
      width: 640,
      height: 480,
      facingMode: 'environment', // Use the rear camera (change if needed)
    },
  },
  decoder: {
    readers: ['code_128_reader', 'ean_reader'], // Specify barcode types to scan
  },
}, function (err) {
  if (err) {
    console.error('QuaggaJS initialization failed:', err);
    return;
  }
  console.log('QuaggaJS initialization succeeded');
  Quagga.start();
});


// Listen for barcode scan results
Quagga.onDetected(function (result) {
  const scannedCode = result.codeResult.code;
  console.log('Scanned code:', scannedCode);

  // Handle the scanned barcode data here
  // You can validate it and perform actions (e.g., update stock status)

  // Stop the scanner after a successful scan
  Quagga.stop();
});