import React, { Component, ChangeEvent } from "react";
import SimpleButton from "./simpleButton";

interface Props {
  sendToParent: (state: State) => void;
  name: string;
}

interface State {
  name: string;
}

class CivilizationForm extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.name || ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendState = this.sendState.bind(this);
  }

  handleChange(event: ChangeEvent<any>) {
    this.setState({ name: event.target.value });
  }

  sendState() {
    this.props.sendToParent(this.state);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div className="form-group">
          <div className="field">
            <input
              id="title"
              type="text"
              value={name}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div>
        <SimpleButton clicked={this.sendState} />
        </div>
      </div>
    );
  }
}
export default CivilizationForm;
