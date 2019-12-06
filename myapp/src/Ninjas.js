import React from 'react';

// props: ninjas, deleteNinja
const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>

        {/* This implementation will invoke this function - but we just want to pass the reference */}
        {/*<button onClick={ deleteNinja(ninja.id) }>Delete ninja</button>*/}

        {/* By this implementation, we can't pass the ninja.id to delete */}
        {/*<button onClick={ deleteNinja }>Delete ninja</button>*/}

        {/* Use an arrow/anonymous function + { } then, it will be only fired on click  */}
        <button onClick={ () => { deleteNinja(ninja.id )} }>Delete ninja</button>

      </div>
    ) : null;
  })

  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  )

  // // Using `if`
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20) {
  //     // key: unique identifier such as ID
  //     return (
  //       <div className="ninja" key={ ninja.id }>
  //         <div>Name: { ninja.name }</div>
  //         <div>Age: { ninja.age }</div>
  //         <div>Belt: { ninja.belt }</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // })


  // // Another way to output
  // return (
  //   <div className="ninja-list">
  //     {
  //       ninjas.map(ninja => {
  //         return ninja.age > 20 ? (
  //           <div className="ninja" key={ ninja.id }>
  //             <div>Name: { ninja.name }</div>
  //             <div>Age: { ninja.age }</div>
  //             <div>Belt: { ninja.belt }</div>
  //           </div>
  //         ) : null;
  //       })
  //     }
  //   </div>
  // )
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

