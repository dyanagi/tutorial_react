const initState = {
  posts: [
    {
      id: '0',
      title: 'Title Zero',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae consequatur dolorem eveniet facilis illum minima nemo nihil nobis nostrum, officia, quisquam sint sit. Commodi corporis culpa facilis quia similique.'
    },
    {
      id: '1',
      title: 'Title One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae consequatur dolorem eveniet facilis illum minima nemo nihil nobis nostrum, officia, quisquam sint sit. Commodi corporis culpa facilis quia similique.'
    }
  ]
}

const rootReducer = (state = initState, action) => {
  // console.log(action); // => {type: "DELETE_POST", id: "0"}

  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    })

    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer;
