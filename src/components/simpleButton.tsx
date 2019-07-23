import React, { Component, PureComponent } from "react";
import { GlobalContext } from "../contextApi/globalProvider";

interface Props {
  clicked: () => void;
}

class SimpleButton extends Component<Props, {}> {  

  shouldComponentUpdate(nextprops: any, props: any) {
    return nextprops.clicked != this.props.clicked
  }

  render() {
    console.count("BUTTON");
    return <button onClick={this.props.clicked}>Send to parent</button>;
  }
}

export default SimpleButton;
