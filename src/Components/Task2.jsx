import  { Component } from 'react';

class Task2 extends Component {

  // constructor(props){
  //   super()
  //   console.log(props)
  // }

  render() {
    // console.log(this.props)
    return (
      <>
        <h1>data from parent: {this.props.taskName}</h1>
      </>
    );
  }
}

export default Task2;
