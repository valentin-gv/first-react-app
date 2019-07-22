import React from "react";
import "./App.css";
import CivilizationsList from "./views/CivilizationsList";
import CreateCivilization from "./components/createCivilization";
import GeneralContext from "./contextApi/themeProvider";

const App: React.FC = () => {
  return (
    <GeneralContext>
      <div className="App">
        <CivilizationsList />
        <CreateCivilization />
      </div>
    </GeneralContext>
  );
};

export default App;
