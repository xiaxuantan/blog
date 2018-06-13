import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserSpace from './user-space'

import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from 'react-bootstrap'

const Navigation = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Xuan24's Blog</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
);


const Home = () => (
    <h1>Hello World!</h1>
);

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
    </Switch>
);


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);