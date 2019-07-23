import React, { Component } from "react";

export const GlobalContext = React.createContext<ProviderState>(
  {} as ProviderState
);

class GlobalComponent extends Component<ProviderProps, ProviderState> {
  setData = (payload: any) => {
    this.setState({ data: payload });
  };

  state = {
    data: {
      name: "default name"
    },
    setData: this.setData
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
export default GlobalComponent;

export interface ProviderState {
  data: IAppContextData;
  setData: <K extends keyof IAppContextData>(
    state: CustomState<K>,
    callback?: () => void
  ) => void;
}

type CustomState<K extends keyof IAppContextData> =
  | ((
      prevState: Readonly<IAppContextData>
    ) => Pick<IAppContextData, K> | IAppContextData | null)
  | (Pick<IAppContextData, K> | IAppContextData | null);

interface IAppContextData {
  name: string;
}

interface ProviderProps {
  children: any;
}
