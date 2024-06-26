import { useEffect, useState } from "react";
import "./App.css";
import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();

function App() {
  const [userAgent, setUserAgent] = useState(undefined);
  const [device, setDevice] = useState(undefined);

  useEffect(() => {
    if (window.location.hash) {
      const userAgent = decodeURIComponent(window.location.hash.substr(1));

      return parseUserAgent(userAgent);
    }

    parseUserAgent(navigator.userAgent);
  }, []);

  const parseUserAgent = (userAgentVal) => {
    if (userAgentVal.trim() === (userAgent || "").trim()) {
      return setUserAgent({ userAgent });
    }

    const device = deviceDetector.parse(userAgentVal);

    setUserAgent(userAgentVal);
    setDevice(device);
  };

  return (
    <div className="App">
      <h1>Device Details</h1>

      {JSON.stringify(device)}
    </div>
  );
}

export default App;
