import { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    text: "dsdsd"
  };
  //state
  //this.setState({})
  //componentDidCatch() {}
  // componentDidMount(){
  //   // fetch('url')
  //   console.log("did mount");

  // componentDidCatch() {
  //   console.log("update");
  // }
  // componentDidUpdate(_, prevSt, snapshot){
  //   console.log(prevState, "prevState");
  //   console.log(snapshot, "snapshot");
  //   console.log("update");
  // };
  // componentWillUnmount() {
  //   console.log(("kill component"));
  // }

  increse = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
    
  };

  decrease = () => {
    this.setState((prevCount) => ({count: prevCount.count - 1 }));
    
  };

  res = () => {
    this.setState((prevCount) => ({ count: 0 }));  
  };

 
  render() {
    console.log("render App");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increse}>+1</button>
        &nbsp;&nbsp;
        <button onClick={this.decrease}>-1</button>&nbsp;&nbsp;
        <button>reset</button>
        <button 
        onClick={() =>{
            this.props.onKill();
          }}>
          swiced 
        </button>
      </div>
    );
  }
}

export default App;
