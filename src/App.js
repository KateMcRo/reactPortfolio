import "./App.css";
import React, { useState } from "react";
import View from "./components/view/View";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

function App() {
  const [view, setView] = useState("about");

  return (
    <div className="App">
      <Navigation view={view} setView={setView} />
      <View view={view} setView={setView} />
      <Footer view={view} setView={setView} />
    </div>
  );
}

export default App;
