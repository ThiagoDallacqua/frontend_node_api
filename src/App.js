import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import PostsPage from './pages/Posts';
import style from './styles.css'

const App = () => {
  return (
    <div className={style.mainContainer}>
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/posts' component={PostsPage} />
          <Redirect from='/' to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
