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
  return state;
}

export default rootReducer;
