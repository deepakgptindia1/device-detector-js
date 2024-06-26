import { useEffect, useState } from 'react';
import './App.css';
import DeviceDetector from "device-detector-js";

function App() {
  const [state, setState] = useState({});
  const date = new Date().toString();  

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
      

      {JSON.stringify(new DeviceDetector().parse("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36"))}
    </div>
  );
}

export default App;
