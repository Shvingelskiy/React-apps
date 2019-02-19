import React, {Component} from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

class FormToFill extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plan : null,
      descrOfPlan : null
    };
  }

  render() {
    return (

          <div className="form-group form-to-fill mx-auto">
            <input className="form-control" type="text" placeholder="Plan" id="plan" />
            <input className="form-control" type="text" placeholder="Plan description" id="description-plan"/>
            <button className="btn btn-success mx-auto text-center" onClick={ this.handleClick }>Add</button>
            {this.state.plan !== null ? this.submitForm() : null}
          </div>

    );
  }

  handleClick = () => {

    this.setState({
      plan: document.getElementById("plan").value,
      descrOfPlan: document.getElementById("description-plan").value
    });

  };

  submitForm = () => {
    if (this.state.plan === '' || this.state.descrOfPlan === '') {
      console.log("NIHUYA");
      return;
    }

    this.props.submitForm(this.state.plan, this.state.descrOfPlan, false);

  }

}

export default FormToFill