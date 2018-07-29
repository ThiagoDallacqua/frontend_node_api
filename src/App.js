import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
// import Posts from './pages/Posts';
import style from './styles.css'

const App = () => {
  return (
    <div className={style.mainContainer}>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          {/* <Route path='/posts' component={Posts} /> */}
          <Redirect from='/' to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
