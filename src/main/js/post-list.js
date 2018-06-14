import React from 'react'

const ReactMarkdown = require('react-markdown');

class PostList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let input = "# Post List";

        return (
            <div className="container">
                <ReactMarkdown source={input}/>
            </div>
        )
    }

}

export default PostList