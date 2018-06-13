import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserSpace from './user-space'


const Home = () => (
    <h1>Hello World!</h1>
);

const App = () => (
    <div>
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