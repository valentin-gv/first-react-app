import React, { Component } from "react";

export const AppContext = React.createContext({
  authenticated: true,
  lang: "en",
  theme: "dark"
});

class GeneralContext extends Component {
  render() {
    return (
      <AppContext.Provider
        value={{
          lang: "de",
          authenticated: true,
          theme: "light"
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default GeneralContext;
