import React, { Component, PureComponent } from "react";

export const GlobalContext = React.createContext<ProviderState>(
  {} as ProviderState
);

class GlobalComponent extends Component<ProviderProps, ProviderState> {
  setData = (payload: any, cb: any) => {
    console.log("setting Data...")
    this.setState({ data: payload }, cb);
  };

  state = {
    data: {
      name: "default name"
    },
    setData: this.setData
  };

  shouldComponentUpdate(_prevProps: any, prevState: any) {
    return prevState.data.name !== this.state.data.name;
  }

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
