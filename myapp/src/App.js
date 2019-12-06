import React from 'react';
import Ninja from './Ninjas'

function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Ninja name="Ryu" age="25" belt="black" />
      <Ninja name="Yoshi" age="27" belt="green" />
    </div>
  );
}

export default App;
