import React from 'react'
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {postListItems: []}
    }

    componentDidMount() {
        let rest = require('rest');
        let mime = require('rest/interceptor/mime');

        let client = rest.wrap(mime);
        let page = parseInt(this.props.match.params.page || 1);
        // make sure the value of page is within a proper range
        page = page < 1 ? 1 : page;
        page = page > 10000 ? 10000 : page;
        let path = "/api/post?type=page&page=" + page;

        client({path: path}).then(response => {
            this.setState({postListItems: response.entity});
        });
    }

    render() {
        let postListItems = this.state.postListItems.map(postListItem =>
            <PostListItem postListItem={postListItem}/>
        );
        return (
            <Table striped responsive hover>
                <thead>
                <tr className="row m-0">
                    <th className="col-xs-8 col-md-8">Title</th>
                    <th className="col-xs-2 col-md-2">Published Time</th>
                    <th className="col-xs-2 col-md-2">Last Modified</th>
                </tr>
                </thead>
                <tbody>
                {postListItems}
                </tbody>
            </Table>
        )
    }
}


class PostListItem extends React.Component {
    render() {
        let dest = '/post?id=';
        return (
            <tr className="row m-0">
                <td className="col-xs-8 col-md-8">
                    <Link to={dest + this.props.postListItem.postId}>
                        {this.props.postListItem.title}
                    </Link>
                </td>
                <td className="col-xs-2 col-md-2">{this.props.postListItem.publishedTime}</td>
                <td className="col-xs-2 col-md-2">{this.props.postListItem.lastModifiedTime}</td>
            </tr>
        )
    }
}

export default PostList