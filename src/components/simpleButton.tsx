import React, { Component } from "react";

interface Props {
    clicked: () => void;
}

interface State {}

class SimpleButton extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
      return ( 
          <button onClick={this.props.clicked}>Child Button</button>
      )
  }
}

export default SimpleButton;
