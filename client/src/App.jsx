import { useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function App() {
  const [scanResult, setScanResult] = useState(null);

  const onScanSuccess = (decodedText, decodedResult) => {
    setScanResult(decodedText);
    fetch("http://localhost:5000/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: decodedText }),
    });
  };

  const startScanner = () => {
    const scanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 });
    scanner.render(onScanSuccess);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">ScanGenius - QR Scanner</h1>
      <button onClick={startScanner} className="btn">Start Scanner</button>
      <div id="reader" className="my-4"></div>
      {scanResult && <p>Result: {scanResult}</p>}
    </div>
  );
}

export default App;
