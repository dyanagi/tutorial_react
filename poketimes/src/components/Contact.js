import React from "react";


// Before:
//   const Contact = () => {

// After:
//   const Contact = (props) => {
//
// (props) is automatically passed from Route
//     <Route path='/contact' component={ Contact }/>
const Contact = (props) => {
  // console.log(props)

  // // Redirect to /about after 2 sec
  // setTimeout(() => {
  //   props.history.push('/about');
  // }, 2000)

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo quod vitae? Aut beatae consequatur dolor
        eius error, facilis hic laborum, maiores necessitatibus quam, recusandae similique velit vero voluptas
        voluptate?</p>
    </div>
  )
}

export default Contact;
