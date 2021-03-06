import React from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

const About = () => (
    <Jumbotron className="mb-0">
        <h1>Welcome!</h1>
        <p>
            I am Xiaxuan Tan. I am currently a master student at University of Southern California.
            I have a broad range of professional interests including back-end development, front-end
            development, DevOps, distributed system and big data.
        </p>
        <p>
            I am developing a sense of respect for life, trying to bring positive influences to my beloveds.
            Recently, I've been extremely fond of writing and body building.
        </p>
        <p>
            This site is still under construction. More functions are expected to finish in a few days. More posts
            will be available soon.
            I hope it would be a good place for all you guys to know more about me.
        </p>
        <p>
            <Button variant="outline-primary" href="/website">See website design</Button>
        </p>
    </Jumbotron>
);

export default About