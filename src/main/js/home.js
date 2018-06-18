import React from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

const Home = () => (
    <div>
        <div className="container">
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>
                    I am Xiaxuan (Peter) Tan. I am a junior software engineer. I have a broad range of interests including back-end development, front-end development, DevOps, distributed system and big data.
                </p>
                <p>
                    This site is still under construction. There will be more features coming.
                </p>
                <p>
                    <Button bsStyle="primary" href="/milestones">See milestones</Button>
                </p>
            </Jumbotron>
        </div>
    </div>
);

export default Home