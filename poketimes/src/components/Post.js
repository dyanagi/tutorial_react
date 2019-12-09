import React, { Component } from "react"
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from "../actions/postActions";

class Post extends Component {
  // state = {
  //   post: null
  // }
  // componentDidMount() {
  //   console.log(this.props)
  //
  //   // Gets the :post_id
  //   let id = this.props.match.params.post_id;
  //   //   <Route path="/:post_id" component={ Post }/>
  //
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       })
  //       console.log(res)
  //     })
  // }

  handleClick = () => {
    // rootReducer will handle it like:
    //   if (action.type === 'DELETE_POST') { ... }
    this.props.deletePost(this.props.post.id);

    // Go back to Home
    this.props.history.push('/');
  }

  render() {
    console.log(this.props)

    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{ this.props.post.title }</h4>
        <p>{ this.props.post.body }</p>
        <div className="center">
          <button className="btn grey" onClick={ this.handleClick }>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post ...</div>
    )

    return (
      <div className="container">
        { post }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // Remember this piece of code:
  //   this.props.match.params.post_id;

  let id = ownProps.match.params.post_id

  return {
    // post: state.posts.find((post) => {
    //   return post.id === id
    // })

    // Shorthand
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // Dispatch 'DELETE_POST' when `deletePost` function is called.
    deletePost: (id) => {
      dispatch(deletePost(id))
      // dispatch({ type: 'DELETE_POST', id: id })
    }
  }
}

// `this.props.deletePost(id)` function will be added by passing `mapDispatchToProps`
export default connect(mapStateToProps, mapDispatchToProps)(Post)
