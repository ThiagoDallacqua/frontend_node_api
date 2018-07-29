import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import PostsPage from './pages/Posts/Index'
import CreatePostPage from './pages/Posts/Create'
import style from './styles.css'

const App = () => {
  return (
    <div className={style.mainContainer}>
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route exact path='/posts' component={PostsPage} />
          <Route path='/posts/create' component={CreatePostPage} />
          <Redirect from='/' to='/login' />
        </Switch>
      </Router>
    </div>
  );
}

export default App
