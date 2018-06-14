import React from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

const Home = () => (
    <div>
        <div className="container">
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>
                    This site is under construction.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    </div>
);

export default Home