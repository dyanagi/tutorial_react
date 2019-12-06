import React from 'react';

const Ninjas = ({ ninjas }) => {
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

export default Ninjas;

// Container Components vs UI Components - Stateless Components
// https://www.youtube.com/watch?v=o4GCcSn-hEw&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=15
// No state = able to be a functional component.

// const Ninjas = (props) => {
//   const { ninjas } = props;
//   const ninjaList = ninjas.map(ninja => {
//     // key: unique identifier such as ID
//     return (
//       <div className="ninja" key={ ninja.id }>
//         <div>Name: { ninja.name }</div>
//         <div>Age: { ninja.age }</div>
//         <div>Belt: { ninja.belt }</div>
//       </div>
//     )
//   })
//   return (
//     <div className="ninja-list">
//       { ninjaList }
//     </div>
//   )
// }


// class Ninjas extends Component {
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map(ninja => {
//       // key: unique identifier such as ID
//       return (
//         <div className="ninja" key={ ninja.id }>
//           <div>Name: { ninja.name }</div>
//           <div>Age: { ninja.age }</div>
//           <div>Belt: { ninja.belt }</div>
//         </div>
//       )
//     })
//     return (
//       <div className="ninja-list">
//         { ninjaList }
//       </div>
//     )
//   }
// }


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

