import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  useLayoutEffect(() => {
    window.location.href = "https://indra-port-folio.vercel.app/";
  }, []);
}

export default App;
