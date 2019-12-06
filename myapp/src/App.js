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
    // console.log(ninja)
    ninja.id = Math.random();

    // ... is a spread operator, which spreads objects inside the ninjas, and add the new ninja at the end
    let ninjas = [...this.state.ninjas, ninja]

    this.setState(({
      ninjas: ninjas // Set the new array
    }))

    // Bad practise:
    // // this.ninjas.push(ninja)
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={ this.state.ninjas }/>
        <AddNinja addNinja={ this.addNinja }/>
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
