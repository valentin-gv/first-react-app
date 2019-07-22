import React from "react";
import "./App.css";
import CivilizationsList from "./views/CivilizationsList";
import CreateCivilization from "./components/createCivilization";

const App: React.FC = () => {
  return (
    <div className="App">
      <CivilizationsList />
      <CreateCivilization />
    </div>
  );
};

export default App;
