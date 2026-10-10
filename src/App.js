import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    window.location.href = "https://indra-omega.vercel.app/";
  }, []);

  return null;
}

export default App;
