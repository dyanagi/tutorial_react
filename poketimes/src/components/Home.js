import React, { Component } from "react";
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    // `.then()` is called when the `get()` is completed
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)

        // (1) Set the state
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render() {
    // (2) Get the data from the state
    const { posts } = this.state

    // First show 'No posts yet',and then once the data is loaded, display the data.
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={ post.id }>
            <div className="card-content">
              <span className="card-title">
                { post.title }
              </span>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
}

export default Home;
