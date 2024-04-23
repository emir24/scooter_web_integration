import { useState } from "react";
import "./App.css";
import AppHeader from "./components/appHeader";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppHeader />
    </div>
  );
}

export default App;
