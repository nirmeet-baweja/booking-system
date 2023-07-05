import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Some initial message");

  // Fetching message from backend on mount
  useEffect(() => {
    const fetchMessage = async () => {
      const requestUrl = process.env.REACT_APP_SERVER_URL;
      console.log("requestUrl");
      console.log(requestUrl);
      const response = await fetch(requestUrl);
      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
