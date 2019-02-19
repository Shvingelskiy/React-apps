import React, {Component} from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'


class PlanForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormDelete: false,
      isCheckBoxClicked : props.stateCheck
    };
  }




  render() {

    return (
        <div className={this.state.isCheckBoxClicked ? 'form-plan-checked mx-auto' : 'form-plan mx-auto'} >
          <h3 className="text-center"> My Plan № {this.props.index + 1} </h3>
          <div className="form-plan-line"> Plan : {this.props.plan} </div>
          <div className="form-plan-line"> Description : {this.props.descrPlan} </div>

          <button  onClick={() => {
            this.props.deletePlan(this.props.index);
            console.log('funkciya zapustilas')
            }}
            className="btn btn-warning button-del">
            Delete
          </button>

          <div className="form-check">
            <input className="form-check-input"
                   type="checkbox" value=""
                   id="defaultCheck1"
                   onClick={() => {
                     console.log('funkciya PEREMEN');
                     this.setState({
                       isCheckBoxClicked : !this.state.isCheckBoxClicked
                     });
                   }} />
                Done!
          </div>

        </div>
    );
  }

  componentDidUpdate() {
    console.log('Component did update');
    this.props.checkChange(this.props.index , this.state.isCheckBoxClicked);
  }


}




export default PlanForm