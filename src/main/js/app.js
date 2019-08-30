import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './navigation'
import Post from './post'
import PostList from './post-list'
import About from './about'
import Footer from "./footer"
import Website from './website'


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
        <Route exact path='/' component={About}/>
        <Route path='/posts' component={PostList}/>
        <Route exact path='/post' component={Post}/>
        <Route path='/website' component={Website}/>
    </Switch>
);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);