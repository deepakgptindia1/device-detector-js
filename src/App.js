import { useEffect, useState } from 'react';
import './App.css';
import DeviceDetector from "device-detector-js";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    const deviceDetector = new DeviceDetector();
    const userAgent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
    const device = deviceDetector.parse(userAgent);
    setState(device);
  }, []);

  return (
    <div className="App">
      <h1>Device Details</h1>
      {state.device ? (
        <>
          <p>Type: {state.device.type}</p>
          <p>Brand: {state.device.brand}</p>
          <p>Model: {state.device.model}</p>
        </>
      ) : (
        <p>Loading device details...</p>
      )}
    </div>
  );
}

export default App;
