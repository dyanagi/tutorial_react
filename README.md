# React Tutorial

My first React tutorial project.

## Files

- 1 - 8: single HTML files using CDN
- 9: In `myapp` directory

To view the files on Mac via commands in Terminal:

```bash
open index01-04-state.html

open index05-08-functions.html

open index09.html
```

```bash
cd myapp

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
