import React, { Component } from "react";
import CivilizationForm from "./civilizationForm";
import CivilizationsService from "../services/civilization.services";
import { GlobalContext } from "../contextApi/globalProvider";

interface Props {}

interface State {
  name: string;
}

class CreateCivilization extends Component<Props, State> {
  static contextType = GlobalContext;
  context!: React.ContextType<typeof GlobalContext>;

  constructor(props: any) {
    super(props);
    // this.state = {
    //   name: "default name"
    // };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    CivilizationsService.createCivilization(this.context.data).then(x =>
      console.log(x)
    );
  }

  render() {
    return (
      <>
        <CivilizationForm name={this.context.data.name} />
        <button onClick={this.submitForm}>Submit</button>
      </>
    );
  }
}

export default CreateCivilization;
