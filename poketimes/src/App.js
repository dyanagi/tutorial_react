import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import './App.css'; // Loading non-scoped CSS. This will automatically apply.
import styles from './App.module.css'; // NAME.module.css/scss can be used for scoped CSS
import { scopedClassTest } from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* Switch tag will only load one component that first matches. So once `/contact` is matched, `/:post_id` won't be loaded. */}
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/contact' component={ Contact }/>
          <Route path="/:post_id" component={ Post }/>
        </Switch>

        <div>
          <h5>Scoped/Non-Scoped CSS Class test</h5>
          <div className='nonScopedClassTest'>
            nonScopedClassTest
          </div>
          <div className={styles.scopedClassTest}>
            scopedClassTest 1
          </div>
          <div className={scopedClassTest}>
            scopedClassTest 2
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
