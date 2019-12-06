import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      // key: unique identifier such as ID
      return (
        <div className="ninja" key={ ninja.id }>
          <div>Name: { ninja.name }</div>
          <div>Age: { ninja.age }</div>
          <div>Belt: { ninja.belt }</div>
        </div>
      )
    })
    return (
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
  }
}

// function Ninjas(props) {
//   const { name, age, belt } = props;
//   return (
//     <div className="ninja">
//       <div>Name: {name}</div>
//       <div>Age: {age}</div>
//       <div>Belt: {belt}</div>
//     </div>
//   );
// }


export default Ninjas;
