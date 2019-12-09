import React, { Component } from "react";
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   // `.then()` is called when the `get()` is completed
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res)
  //
  //       // (1) Set the state
  //       this.setState({
  //         posts: res.data.slice(0, 10)
  //       })
  //     })
  // }

  render() {
    console.log(this.props)

    // // (2) Get the data from the state
    // const { posts } = this.state

    // Now use `this.props` instead of `this.state`
    const { posts } = this.props

    // First show 'No posts yet',and then once the data is loaded, display the data.
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={ post.id }>
            <img src={ Pokeball } alt="A pokeball"/>
            <div className="card-content">
              <Link to={ '/' + post.id }>
                <span className="card-title red-text">
                  { post.title }
                </span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
        <p>React Version: { React.version }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

// Invoke connect function passing mapStateToProps function. That will return Higher Order Component, which wraps this Home component.
export default connect(mapStateToProps)(Home);
