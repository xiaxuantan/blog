import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './navigation'
import Post from './post'
import PostList from './post-list'
import Home from './home'
import Footer from "./footer"
import Milestone from './milestone'


import 'bootstrap/dist/css/bootstrap.css'
import {Container} from "react-bootstrap";


const App = () => (
    <Container>
        <Navigation/>
        <Content/>
        <Footer/>
    </Container>
);

const Content = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/posts' component={PostList}/>
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