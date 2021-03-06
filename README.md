# React Tutorial

My first React tutorial project.

## The Course

YouTube: <https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG>

## Files

- Lecture 1-8: single HTML files using CDN (Basics)
- Lecture 9-22: In `myapp` directory (Basics)
- Lecture 23-24: In `todoapp` directory (Todo App)
- Lecture 25-43: In `poketimes` directory (The React Router)
- (After the course) A1-: Updated `poketimes` (More tips)

To view the files on Mac via commands in Terminal:

### Lecture 1-8

```bash
open index01-04-state.html

open index05-08-functions.html

open index09.html
```

### Lecture 9-22

```bash
cd myapp

npm start

open "http://localhost:3000"
```

### Lecture 23-24

```bash
cd todoapp

npm start

open "http://localhost:3000"
```

### Lecture 25-

```bash
cd poketimes

npm start

open "http://localhost:3000"
```

## Notes

### Visual Studio Code extensions for this tutorial

- ES7 React/Redux/GraphQL/React-Native snippets
- Sublime Babel: Colouring
- Live Server: Right-click in a file & Click on Open with Live Server

## Chrome extension

- React Developer Tools (restart Chrome and open the developer console)

### 2: How React Works

- DOM: Document Object Model
- Virtual DOM: Old Virtual DOM -> New Virtual DOM (when states/data changed)

### CDN

https://reactjs.org/docs/cdn-links.html

### JSX

XML/HTML-like syntax

### 9-11: Create React App

Install Node.js and run:

```bash
npx create-react-app myapp
```

Start the server

```bash
cd myapp
npm start
```

### 12-13: Nesting Components

- `App.js`: Root Component
- [Function and Class Components](https://reactjs.org/docs/components-and-props.html)

### 15: Stateless Components

Container components:

- Contain state 
- Contain lifecycle hooks
- Not concerned with UI
- Use classes to create

Functional components / UI components / Stateless components:

- Don't contain state
- Receive data from props
- Only concerned with UI
- Use functions to create

### 17: Form

Set the state from the ID of an field and the value of the field.

```javascript
  state = {
    name: null,
    age: null,
    belt: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  ```

```jsx harmony
<input type="text" id="name" onChange={ this.handleChange }/>
```

### 18: Functions and Props

```jsx harmony
// AddNinja.js
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }
```

```javascript
// App.js
  addNinja = (ninja) => {
    console.log(ninja)
  }
```

```jsx harmony
// App.js
    <AddNinja addNinja={ this.addNinja }/>
```

### Props

```javascript
// this.props are passed from the parent like:
//   state = [ { name="xxx", age="xxx", belt="xxx" } ]
//   <Ninjas ninjas={ this.state.ninjas } />
class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
  }
}
```

```javascript
// props are passed from the parent like:
//   state = [ { name="xxx", age="xxx", belt="xxx" } ]
//   <Ninjas ninjas={ this.state.ninjas } />
const Ninjas = (props) => {
  const { ninjas } = props;
  // `ninjas`: Same as `props.ninjas` (Array)
}
```

```javascript
// props are passed from the parent like:
//   <Ninjas name="xxx" age="xxx" belt="xxx" />
function Ninjas(props) {
  const { name, age, belt } = props;
  // Set constants from:
  // - props.name
  // - props.age
  // - props.belt
}
```

### 19: Deleting data

No parameter:

```jsx harmony
<button onClick={ deleteNinja }>Delete ninja</button>
```

This will invoke the method (Don't do):

```jsx harmony
<button onClick={ deleteNinja(ninja.id) }>Delete ninja</button>
```

To fix it, use an arrow/anonymous function + { }. Then it will be only fired on click:

```jsx harmony
<button onClick={ () => { deleteNinja(ninja.id )} }>Delete ninja</button>
```

### 22: Lifecycle Methods

<https://www.youtube.com/watch?v=iYz2OKWO09U&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=22>

### 23: Todo App (part 1) with Materialize

I saw a message `"A template was not provided. This is likely because you're using an outdated version of create-react-app."` and template files were not created this time... `npm uninstall -g create-react-app` and then `npx create-react-app todoapp` to use the latest version.

```bash
npx create-react-app todoapp
```

Start the server

```bash
cd myapp
npm start
```

### 24: Todo App (part 2)

Set the value of an input field by `this.setState({ })`

```jsx harmony
<input type="text" onChange={ this.handleChange }
     value={ this.state.content }/>
```

### 25: The React Router

Hint: Use the shortcut `lorem` to create a paragraph in `<p>`. (RubyMine supports it)

```bash
npm install react-router-dom
```

```jsx harmony
// App.js
import { BrowserRouter, Route } from 'react-router-dom'
```

Use `exact` to use exact match for such as `/`. In this case, if `exact` is not used, both `Home` and `About` will be rendered.

```jsx harmony
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={ Home }/>
        <Route path='/about' component={ About }/>
        <Route path='/contact' component={ Contact }/>
      </div>
    </BrowserRouter>
  );
```

Home has to be imported:

```jsx harmony
import Home from './components/Home'
```

At this moment, clicking a Navbar item will still send a request and reload the page.

### 26: Links & NavLinks

Now, let's prevent from sending a request:

```jsx harmony
<!-- Navbar.js -->
import { Link, NavLink } from 'react-router-dom'
```

```html
<!-- Navbar.js -->
<ul className="right">
  <li><Link to="/">Home</Link></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>
```

- `Link`: No `active` CSS class
- `NavLink`: Add `active` CSS class to the active navigation item (`a` tag)

## 27: Programmatic Redirects

```jsx harmony
const Contact = (props) => {
  console.log(props)
  
  // Redirect to /about after 2 sec
  setTimeout(() => {
    props.history.push('/about');
  }, 2000)
}
```

## 28: Higher Order Component (HOC)

A HOC supercharges the component.

```jsx harmony
import { BrowserRouter, Route } from 'react-router-dom'
```

```jsx harmony
const Navbar = (props) => {
  // ...
}
```

```jsx harmony
export default withRouter(Navbar);
```

---

```jsx harmony
// hoc/Rainbow.js
import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)]
  const className = randomColour + '-text'

  return (props) => {
    return (
      <div className={ className }>
        {/* Pass the props to the wrapped component again */}
        <WrappedComponent { ...props }/>
      </div>
    )
  };
}

export default Rainbow
```

To use `Rainbow.js` as a HOC in `About.js`:

```jsx harmony
// About.js
import Rainbow from '../hoc/Rainbow'
```

```jsx harmony
// About.js
export default Rainbow(About);
```

Read official documentation for more information.

## 29: Axios

```bash
cd poketimes

npm install axios
```

This app is using [### JSONPlaceHolder](https://jsonplaceholder.typicode.com/).

```jsx harmony
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
```

## 30: Route Parameters (part 1)

```jsx harmony
// App.js
    <BrowserRouter>
      <Route path="/:post_id" component={ Post }/>
    </BrowserRouter>
```

```jsx harmony
// Post.js
class Post extends Component {
  // ...
  componentDidMount() {
    let id = this.props.match.params.post_id

    this.setState({
      id: id
    })
  }
  // ...
}
```

## 31: Route Parameters (part 2)

Create a link from ID:

```jsx harmony
<Link to={ '/' + post.id }>
  { post.title }
</Link>
```

Get data for the post and render:

```jsx harmony
class Post extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })
        console.log(res)
      })
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{ this.state.post.title }</h4>
        <p>{ this.state.post.body }</p>
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
```

Issue: `/contact` can match with `/:post_id`, so `Post.js` is rendered in `/contact`.

## 32: Switch Tag

The issue was solved by adding `<Switch>` tag.

```jsx harmony
import { BrowserRouter, Route, Switch } from 'react-router-dom'
```

```jsx harmony
<Switch>
  <Route exact path='/' component={ Home }/>
  <Route path='/about' component={ About }/>
  <Route path='/contact' component={ Contact }/>
  <Route path="/:post_id" component={ Post }/>
</Switch>
```

## 33: Importing Images

Just import the image and pass through `src={ }`.

```jsx harmony
import Pokeball from '../pokeball.png'
```

```jsx harmony
<img src={ Pokeball } alt="A pokeball"/>
```

HTML in browser:

```html
<img src="/static/media/pokeball.f10bf078.png" alt="A pokeball">
```

## 34: Redux

Redux: A central data store.

## 35: Redux Store

```jsx harmony
// On Codepen
const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

// initState as a default value
function myreduceer(state = initState, action){

}

const store = createStore(myreducer);
```

## 36: Redux Action

```jsx harmony
// On Codepen
const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

// initState as a default value
function myreducer(state = initState, action){
  console.log(action, state)
}

const store = createStore(myreducer);

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction)
```

## 37: Redux Reducers

```jsx harmony
// On Codepen
const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

// initState as a default value
function myreducer(state = initState, action){
  if (action.type === 'ADD_TODO') {
    return {
      todos: [...state.todos, action.todo] // Add a new todo
    }
  }
}

const store = createStore(myreducer);

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction)
```

## 38: Store Subscriptions

```jsx harmony
// On Codepen
const { createStore } = Redux;

const initState = {
  todos: [],
  posts: []
}

// initState as a default value
function myreducer(state = initState, action){
  if (action.type === 'ADD_TODO') {
    return {
      ...state, // pass all (todos, posts
      todos: [...state.todos, action.todo] // Override `todos` and Add a new todo
    }
  }

  if (action.type === 'ADD_POST') {
    return {
      ...state, // pass all (todos, posts
      post: [...state.posts, action.post] // Override `todos` and Add a new todo
    }
  }
}

const store = createStore(myreducer);

store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
  // => Object { posts: [], todos: ["buy milk"] }
})

store.dispatch({ type: 'ADD_TODO', todo: 'buy milk' })
store.dispatch({ type: 'ADD_TODO', todo: 'sleep some more' })

store.dispatch({ type: 'ADD_POST', post: 'Egg hunt with Yoshi' })
```

1. Dispatch Action: `store.dispatch`
2. Reducer updates the central state: `myreducer`
3. Component subscribes to change: `store.subscribe` will log the state this time.

## 39: Setting up Redux in React

```bash
cd poketimes

npm install redux react-redux
```

```jsx harmony
// reducers/rootReducer.js
const initState = {
  posts: []
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
```

```jsx harmony
// index.js
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={ store }><App/></Provider>, document.getElementById('root'));
```

## 40: Mapping State to Props

```jsx harmony
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
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
```

## 41: Blog Detail Page

Use `ownProps` to get `post_id` and `find()` to get a `post`.

```jsx harmony
const mapStateToProps = (state, ownProps) => {
  // Remember this piece of code:
  //   this.props.match.params.post_id;

  let id = ownProps.match.params.post_id

  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Post)
```

## 42: Map Dispatch to Props (Delete a post)

```jsx harmony
// Post.js
  handleClick = () => {
    // rootReducer will handle it like:
    //   if (action.type === 'DELETE_POST') { ... }
    this.props.deletePost(this.props.post.id);

    // Go back to Home
    this.props.history.push('/');
  }
```

```jsx harmony
<button className="btn grey" onClick={ this.handleClick }>Delete Post</button>
```

```jsx harmony
// Post.js
const mapDispatchToProps = (dispatch) => {
  return {
    // Dispatch 'DELETE_POST' when `deletePost` function is called.
    deletePost: (id) => {
      dispatch({ type: 'DELETE_POST', id: id })
    }
  }
}

// `this.props.deletePost(id)` function will be added by passing `mapDispatchToProps`
export default connect(mapStateToProps, mapDispatchToProps)(Post)
```

`rootReducer` will return a new state

```jsx harmony
// rootReducer.js
const rootReducer = (state = initState, action) => {
  console.log(action); // => {type: "DELETE_POST", id: "0"}

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
```

## 43: Action Creators

Action Creator: Just a function.

```jsx harmony
// actions/postActions.js
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id // Shorthand for `id: id`
  }
}
```

Now call the function instead of writing `{ type: 'DELETE_POST', id: id }`:

```jsx harmony
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}
```

## 44: Next Course (End of the Tutorial)

[React, Redux & Firebase App Tutorial #1 - Introduction](https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3)

---

## A1 CSS Modules (Scoped/Non-Scoped CSS)

### Naming rule

- Filename: `NAME.module.css` or `NAME.module.scss`
- Class name: [camelCase is recommended](https://github.com/css-modules/css-modules#naming)

```
import './App.css'; // Loading non-scoped CSS. This will automatically apply.
import styles from './App.module.css'; // NAME.module.css/scss can be used for scoped CSS
```

```html
<div className='nonScopedClassTest'>nonScopedClassTest</div>
<div className={styles.scopedClassTest}>scopedClassTest</div>
```

or

```
import { scopedClassTest } from './App.module.css'; // NAME.module.css/scss can be used for scoped CSS
<div className={scopedClassTest}>scopedClassTest</div>
```

Output

```html
<!-- Non-scoped class name -->
<div class="nonScopedClassTest">nonScopedClassTest</div>

<!--Scoped class name -->
<div class="App_scopedClassTest__1M3Pt">scopedClassTest</div>
```

### Multiple classnames with CSS Modules in React

```bash
yarn add namespace
```

```
import cx from 'classnames'
```

```html
// Joining multiple CSS Modules classes
// <div class="foo-f93d72 bar-g9493s"></div>
<div className={cx(styles.foo, styles.bar)} />

// Conditionally displaying multiple CSS Modules classes
// <div class="foo-f93d72"></div>
<div className={cx(styles.foo, {[styles.bar]: false})} />
```

Reference: <https://zeph.co/multiple-classnames-css-modules-react>

### File extension: `js` vs `jsx`

Use `.js`

Reference: <https://github.com/facebook/create-react-app/releases/tag/v0.4.1>

