import React, { Component } from "react";
import { GlobalContext } from "../contextApi/globalProvider";

interface Props {
  clicked: () => void;
}

class SimpleButton extends Component<Props, {}> {  


  render() {
    return <button onClick={this.props.clicked}>Send to parent</button>;
  }
}

export default SimpleButton;
