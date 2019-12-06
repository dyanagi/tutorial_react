# React Tutorial

My first React tutorial project.

## Files

- 1 - 8: single HTML files using CDN
- 9: In `myapp` directory

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
