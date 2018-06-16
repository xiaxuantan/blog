import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Userspace from './userspace'
import Navigation from './navigation'
import PostList from './postlist'
import Post from './post'
import Home from './home'
import Footer from "./footer"

import 'bootstrap/dist/css/bootstrap.css'


const App = () => (
    <div>
        <Navigation/>
        <div style={{marginBottom: "70px"}}>
            <Content/>
        </div>
        <Footer/>
    </div>
);

const Content = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/space/:name' component={Userspace}/>
        <Route path='/posts' component={PostList}/>
        <Route path='/post' component={Post}/>
    </Switch>
);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);