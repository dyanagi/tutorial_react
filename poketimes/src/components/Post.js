import React, { Component } from "react"

class Post extends Component {
  state = {
    id: null
  }

  componentDidMount() {
    console.log(this.props)

    // Gets the :post_id
    let id = this.props.match.params.post_id;
    //   <Route path="/:post_id" component={ Post }/>

    this.setState({
      id: id
    })
  }

  render() {
    return (
      <div className="container">
        <h4>{ this.state.id }</h4>
      </div>
    )
  }
}

export default Post
