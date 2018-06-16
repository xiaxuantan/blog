import React from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

const Home = () => (
    <div>
        <div className="container">
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>
                    I am Xiaxuan (Peter) Tan. I am a junior software engineer. I have a broad range of interests including back-end development, front-end developement, DevOps, distributed system and big data.
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    </div>
);

export default Home