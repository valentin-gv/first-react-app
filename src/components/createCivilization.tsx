import React, { Component } from "react";
import CivilizationForm from "./civilizationForm";
import CivilizationsService, {
  Civilization
} from "../services/civilization.services";

interface Props {
}

interface State {
  name: string;
}

class CreateCivilization extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "default name"
    };

    this.parentCallback = this.parentCallback.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  parentCallback(state: any) {
    this.setState({name: state.name})
  }

  submitForm() {
    CivilizationsService.createCivilization(this.state).then(x => console.log(x));
  }

  render() {
    return (
      <>
        <CivilizationForm
          name={this.state.name}
          sendToParent={this.parentCallback}
        />
        <button onClick={this.submitForm}>Submit</button>
      </>
    );
  }
}

export default CreateCivilization;
