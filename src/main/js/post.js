import React from 'react'
import Markdown from './markdown'
import {Card, Row} from "react-bootstrap";

const qs = require('query-string');

class Post extends React.Component {

    constructor(props) {
        super(props);
        let templateBody = "";
        this.state = {post: null, body: templateBody};
        this.queryParams = qs.parse(this.props.location.search)
    }

    componentDidMount() {

        let rest = require('rest');
        let mime = require('rest/interceptor/mime');
        let client = rest.wrap(mime);
        let path = '/api/post?type=single&id=' + this.queryParams.id;

        client({path: path}).then(response => {
            this.setState({post: response.entity});
            if (this.state.post) {
                let bodyPath = "/api/asset/" + this.state.post.bodyKey;
                client({path: bodyPath}).then(response => {
                    console.log(response.entity);
                    this.setState({body: response.entity})
                })
            }

        });
    }

    render() {
        return (
            <Card bg="light" className="border-0">
                <Card.Header>
                    <h1>{this.state.post ? this.state.post.title : "Fetching and rendering..."}</h1>
                    <p className="m-0 text-muted font-italic">
                        Published On: {this.state.post ? this.state.post.lastModifiedTime : ""}
                    </p>
                    <p className="m-0 text-muted font-italic">
                        Last Modified On: {this.state.post ? this.state.post.publishedTime : ""}
                    </p>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Markdown source={this.state.body}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Post