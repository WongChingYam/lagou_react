import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,browserHistory } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Job from './pages/Job';
import WantJob from './pages/WantJob';
import Preview from './pages/Preview';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App} >
          <IndexRoute component={Home} />
      </Route>
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
          <Route path="search" component={Search} />
          <Route path="mine" component={Mine} />
          <Route path="job/:positionId" component={Job} />
          <Route path="WantJob" component={WantJob} />
          <Route path="preview" component={Preview} />

  </Router>
), document.getElementById('root'));
registerServiceWorker();
