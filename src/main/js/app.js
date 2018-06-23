import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UserSpace from './user-space'
import Navigation from './navigation'
import Post from './post'
import PostList from './post-list'
import PostEditor from './post-editor'
import Home from './home'
import Footer from "./footer"
import Milestone from './milestone'


import 'bootstrap/dist/css/bootstrap.css'


const App = () => (
    <div className="full-height">
        <Navigation/>
        <div className="content"><Content/></div>
        <div className="footer"><Footer/></div>
    </div>
);

const Content = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/space/:name' component={UserSpace}/>
        <Route path='/posts' component={PostList}/>
        <Route path='/post/edit' component={PostEditor}/>
        <Route exact path='/post' component={Post}/>
        <Route path='/milestones' component={Milestone}/>
    </Switch>
);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);