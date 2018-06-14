import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UserSpace from './user-space'
import Navigation from './navigation'
import PostList from './post-list'
import Home from './home'

import 'bootstrap/dist/css/bootstrap.css'


const App = () => (
    <div>
        <Navigation/>
        <Content/>
    </div>
);

const Content = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/space/:name' component={UserSpace}/>
        <Route path='/posts' component={PostList}/>
    </Switch>
);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);