export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id // Shorthand for `id: id`
  }
}
