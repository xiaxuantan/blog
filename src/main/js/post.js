import React from 'react'
import Markdown from './markdown'
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const qs = require('query-string');

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {post: null, body: "", comments: []};
        this.queryParams = qs.parse(this.props.location.search);
        let rest = require('rest');
        let mime = require('rest/interceptor/mime');
        this.client = rest.wrap(mime);
    }

    componentDidMount() {
        let post_path = '/api/post?type=single&id=' + this.queryParams.id;
        this.client({path: post_path}).then(response => {
            this.setState({post: response.entity});
            if (this.state.post) {
                let bodyPath = "/api/asset/" + this.state.post.bodyKey;
                this.client({path: bodyPath}).then(response => {
                    console.log(response.entity);
                    this.setState({body: response.entity})
                })
            }

        });

        let comment_path = '/api/comment?postId=' + this.queryParams.id;
        this.client({path: comment_path}).then(response => {
            this.map = new Map(response.entity.map(comment => [comment.commentId, comment]));
            this.setState({comments: response.entity});
        });
    }

    voteUp(commentId) {
        this.map.get(commentId).up = this.map.get(commentId).up + 1;
        this.setState({'comments': this.state.comments})
    }

    voteDown(commentId) {
        this.map.get(commentId).down = this.map.get(commentId).down + 1;
        this.setState({'comments': this.state.comments})
    }

    render() {
        let comments = this.state.comments.map((comment, i) =>
            <Comment comment={comment}
                     key={i}
                     voteUp={this.voteUp.bind(this)}
                     voteDown={this.voteDown.bind(this)}/>
        );
        return (
            <div>
                <Card bg="light" className="border-0">
                    <Card.Header>
                        <h1>{this.state.post ? this.state.post.title : "Fetching and rendering..."}</h1>
                        <p className="m-0 text-muted font-italic">
                            Published On: {this.state.post ? this.state.post.lastModifiedTime : ""}
                        </p>
                        <p className="m-0 text-muted font-italic">
                            Last Modified On: {this.state.post ? this.state.post.publishedTime : ""}
                        </p>
                        <p className="m-0 text-muted font-italic">
                            Viewed count: {this.state.post ? this.state.post.pageCount : ""}
                        </p>
                    </Card.Header>
                    <Card.Body>
                        <Markdown source={this.state.body}/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        <h5>{this.state.comments.length} Comments</h5>
                    </Card.Header>
                </Card>
                {comments}
            </div>
        )
    }
}

class Comment extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header>
                    From: {this.props.comment.email}
                </Card.Header>
                <Card.Body>
                    <Markdown source={this.props.comment.content}/>
                    <Button variant="success" onClick={() => this.props.voteUp(this.props.comment.commentId)}>
                        Good {this.props.comment.up}
                    </Button>
                    <Button variant="danger" onClick={() => this.props.voteDown(this.props.comment.commentId)}>
                        Bad {this.props.comment.down}
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Commented On: {this.props.comment.commentedTime}</small>
                </Card.Footer>
            </Card>
        )
    }
}


export default Post