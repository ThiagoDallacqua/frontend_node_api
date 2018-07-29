import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoginPage from './pages/Login'
import style from './styles.css'

const Loading = () => <div>Loading...</div>

const RegisterPage = Loadable({
  loader: () => import('./pages/Register'),
  loading: Loading,
})

const PostsPage = Loadable({
  loader: () => import('./pages/Posts/Index'),
  loading: Loading,
})

const CreatePostPage = Loadable({
  loader: () => import('./pages/Posts/Create'),
  loading: Loading,
})

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