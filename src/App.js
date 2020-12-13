
import {Component} from 'react'
import './App.css';


class App extends Component {
  
    state ={
      age:21
    }

    onAgeUp = () => {
      this.setState({
        ...this.state, // this makes a copy 
        age: ++ this.state.age // this adds to the current age
      })
    };
    
    onAgeDown= () => {
      this.setState({
        ...this.state, // this makes a copy 
        age: -- this.state.age // this adds to the current age
      })
    }
    

  render(){
  return (
    <div className="App">
      <div>Age: <span>{this.state.age}</span></div>
      <button onClick = {this.onAgeUp}>Age Up</button>
      <button onClick = {this.onAgeDown}>Age down</button>
    </div>
  );  
}

}


export default App;
