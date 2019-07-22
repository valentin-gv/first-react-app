import React, { Component } from "react";
import Item from "../components/item";
import CivilizationsService, {
  Civilization
} from "../services/civilization.services";

class CivilizationsList extends Component {
  state = {
    civilizations: []
  };

  componentDidMount() {
    CivilizationsService.getCivilizations().then(_civilizations =>
      this.setState({ civilizations: _civilizations })
    );
  }

  render() {
    return (
      <div>
          {this.state.civilizations.map((civilization:Civilization) => {
              return (
                <Item key={civilization.id} name={civilization.name}/>
              )
          })}
      </div>
    );
  }
}

export default CivilizationsList;
