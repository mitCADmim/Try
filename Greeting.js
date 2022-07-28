import React from 'react';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      message: 'Hello',
    }
  }

  changeMessage() {
    this.setState({
      message: 'Bye Bye'
    })
  }

  render() {
    return (<div>
      <h1>{ this.state.message } {this.props.user.name } </h1>
      <button onClick={() =>  this.changeMessage() }>change message</button>
      </div>)
  }
}

export default Greeting;