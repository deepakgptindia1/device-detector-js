import './App.css';
import DeviceDetector from "device-detector-js";

function App() {
  const deviceDetector = new DeviceDetector();
  const userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
  const device = deviceDetector.parse(userAgent);
  console.log(device);

  return (
    <div className="App">
      <h1></h1>
      <h2>Device details</h2>
      <p>Type: {device.device.type}</p>
      <p>Brand: {device.device.brand}</p>
      <p>Model: {device.device.model}</p>
      {device.device.model}
    </div>
  );
}

export default App;
