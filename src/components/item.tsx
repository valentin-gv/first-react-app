import React, { Component } from "react";

class Item extends Component<Props, {}> {

  render() {
    const { name } = this.props; 
    return <p>{name}</p>;
  }

}

interface Props {
    name: string;
}

export default Item;
