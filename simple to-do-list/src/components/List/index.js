import React, {PureComponent} from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Button from '../Button/index'
import FormToFill from '../FormToFill/index'
import PlanForm from '../PlanForm/index'


class List extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isFormOpen : false,
      arrayOfPlans : [],
      indOfDelPlan : null,
    };
  }

  deletePlan = (i) => {

    var arr = this.state.arrayOfPlans;
    arr[i] = null;


    this.setState ({
      arrayOfPlans: arr,
    });

    console.log(this.state.arrayOfPlans);
  };

  checkChange = (i , boolStateCheck) => {

    var arr = this.state.arrayOfPlans.slice();

    arr[i].stateCheck = boolStateCheck;

    this.setState ({
      arrayOfPlans: arr
    });

  };

  deleteAll = () => {

    var arr = this.state.arrayOfPlans;
    arr.splice(0,arr.length);

    this.setState ({
      arrayOfPlans: arr
    });

    console.log(this.state.arrayOfPlans);
  };


  eachPlans = (item,i) => {
    if (item !== null) {
      return (
          <PlanForm
              plan={item.plan}
              descrPlan={item.descrPlan}
              stateCheck={item.stateCheck}
              index={i}
              key={i}
              deletePlan={this.deletePlan}
              checkChange={this.checkChange}
          />
      )
    }
  };

  // Ждет, пока стейты обновятся и не начинает рендеринг до этого!
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.arrayOfPlans === this.state.arrayOfPlans) {
      return true
    }
    else {
      return false
    }
  }

  render() {

    return (
        <div className="container">
          <h1 className="text-center">To-Do-List Application</h1>

          <div className="button-list ">

            <div className="first-button">
              <Button
                onClick = { () => this.handleClick() }
                isButtonClicked = {this.state.isFormOpen}
              />
            </div>

            <div className="second-button">
              <button className="btn btn-danger " onClick={this.deleteAll}>Delete All</button>
            </div>

          </div>


          { this.state.isFormOpen ?
              <FormToFill submitForm = { (plan, descrPlan, stateCheck) => this.submitForm(plan, descrPlan, stateCheck) } />
              : null
          }

          { this.state.arrayOfPlans.length == 0 || this.state.isFormOpen ? null
              : this.state.arrayOfPlans.map (this.eachPlans)
          }

        </div>
    );

  }


  handleClick = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen
    })
  };


  submitForm = (plan, descrPlan, stateCheck) => {

    this.setState({
      isFormOpen: !this.state.isFormOpen
    });

    let array = this.state.arrayOfPlans;
    array = array.push({plan, descrPlan, stateCheck});

    console.log(this.state.arrayOfPlans);
  };


}

export default List