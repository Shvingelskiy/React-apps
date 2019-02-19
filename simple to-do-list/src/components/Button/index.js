import React, {Component} from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isButtonClicked : props.isButtonClicked
    };
  }

  render() {
    return (
        <div className="button">
          <button onClick={this.handleClick } className="btn btn-primary mx-auto">
            { this.props.isButtonClicked ? 'Close' : 'Add Item!' }
          </button>
        </div>
    );

  }

  handleClick = () => {
    console.log('---', 'clicked' , this.state.isButtonClicked);
    this.setState({
      isButtonClicked: !this.state.isButtonClicked
    });

    this.props.onClick()
  }

}

export default Button