import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // title: "WS-State 01",
      // obj : {
      //   name: "yahia", 
      //   age: 25
      // }
      counter : 0,
      myinput:""
    }
  }

  increment=()=>{
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement=()=>{
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handelChange=(e)=>this.setState({myinput:e.target.value})


  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.title}</h1>
    <h3>{this.state.obj.name}</h3> */}
            <button onClick={this.increment}>+</button>
            {/* <h4>{this.state.counter}</h4> */}
            <Counter count={this.state.counter}/>
            <button onClick={this.decrement}>-</button>
            <br/>
            <input type='text' onChange={this.handelChange} />
            <br/>
  <span>{this.state.myinput}</span>
      </div>
    )
  }
}

