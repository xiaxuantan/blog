import React from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

const Home = () => (
    <div className="container content">
        <Jumbotron>
            <h1>Welcome!</h1>
            <p>
                I am Xiaxuan (Peter) Tan. I am a junior software engineer.
                I have a broad range of professional interests including back-end development, front-end
                development, DevOps, distributed system and big data.
            </p>
            <p>
                I am developing a sense of respect for life, trying to bring positive influences to my beloveds.
                Recently, I've been extremely fond of writing and body building.
            </p>
            <p>
                This site is still under construction.
                I hope it would be a good place for all you guys to know more about me.
            </p>
            <p>
                <Button bsStyle="primary" href="/milestones">See milestones</Button>
            </p>
        </Jumbotron>
    </div>
);

export default Home