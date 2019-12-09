// import React from 'react';
import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Mika', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    console.log('addNinja called with: ', ninja)

    ninja.id = Math.random();
    console.log('ninja.id generated: ', ninja.id)

    // `...` is a spread operator, which spreads objects inside the ninjas, and add the new ninja at the end
    let ninjas = [...this.state.ninjas, ninja]

    this.setState(({
      ninjas: ninjas // Set the new array
    }))

    // Bad practise:
    // // this.ninjas.push(ninja)
  }

  deleteNinja = (id) => {
    // id: passed from a child component
    console.log('deleteNinja called with: ', id)

    // `filter`: a non-destructive method
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id // select all except the one with the `id`
    })

    this.setState({
      ninjas: ninjas // Set the new array
    })
  }

  // Lifecycle Methods/Hooks
  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={ this.deleteNinja } ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={ this.addNinja }/>
        <p>React Version: { React.version }</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>My first React app!</h1>
//       <p>Welcome :)</p>
//       <Ninja name="Ryu" age="25" belt="black" />
//       <Ninja name="Yoshi" age="27" belt="green" />
//     </div>
//   );
// }

export default App;
