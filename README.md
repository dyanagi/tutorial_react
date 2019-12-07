# React Tutorial

My first React tutorial project.

## Files

- Lecture 1-8: single HTML files using CDN (Basics)
- Lecture 9-22: In `myapp` directory (Basics)
- Lecture 23-24: In `todoapp` directory (Todo App)
- Lecture 25-: In `poketimes` directory (The React Router)

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

## References

Complete React Tutorial (& Redux)

- <https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG>
- <https://github.com/iamshaunjp/react-redux-complete-playlist>

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

### 22 Lifecycle Methods

<https://www.youtube.com/watch?v=iYz2OKWO09U&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=22>

### 23 Todo App (part 1) with Materialize

I saw a message `"A template was not provided. This is likely because you're using an outdated version of create-react-app."` and template files were not created this time... `npm uninstall -g create-react-app` and then `npx create-react-app todoapp` to use the latest version.

```bash
npx create-react-app todoapp
```

Start the server

```bash
cd myapp
npm start
```

### 24 Todo App (part 2)

Set the value of an input field by `this.setState({ })`

```jsx harmony
<input type="text" onChange={ this.handleChange }
     value={ this.state.content }/>
```

### 25 The React Router

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

### 26 Links & NavLinks

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

