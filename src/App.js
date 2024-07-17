import React, { useEffect } from "react";
import Login from "./Components/Login";
import Spotify from "./Components/Spotify";
import { useStateProvider } from "./Utils/StateProvider";
import { reducerCases } from "./Utils/Constants";

function App() {
  const [{ token } = {}, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Spotify /> : <Login />}
    </div>
  );
}

export default App;

