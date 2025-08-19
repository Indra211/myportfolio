import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    window.location.href = "https://indra-port-folio.vercel.app/";
  }, []);

  return null;
}

export default App;
