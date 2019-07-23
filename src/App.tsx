import React from "react";
import "./App.css";
import CivilizationsList from "./views/CivilizationsList";
import CreateCivilization from "./components/createCivilization";
import GlobalComponent from "./contextApi/globalProvider";

const App: React.FC = () => {
  return (
    <GlobalComponent>
      <div className="App">
        <CivilizationsList />
        <CreateCivilization />
      </div>
    </GlobalComponent>
  );
};

export default App;
