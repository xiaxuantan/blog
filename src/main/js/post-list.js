import React from 'react'
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
        let path = "/api/post?page=" + page;

        client({path: path}).then(response => {
            this.setState({postListItems: response.entity});
            console.log(this.state.postListItems);
        });
    }

    render() {
        let postListItems = this.state.postListItems.map(postListItem =>
            <PostListItem postListItem={postListItem}/>
        );
        return (
            <div className="container">
                <Table striped responsive hover>
                    <thead>
                    <tr className="row">
                        <th className="col-xs-8 col-md-8">Title</th>
                        <th className="col-xs-2 col-md-2">Published Time</th>
                        <th className="col-xs-2 col-md-2">Last Modified</th>
                    </tr>
                    </thead>
                    <tbody>
                    {postListItems}
                    </tbody>
                </Table>
            </div>
        )
    }
}


class PostListItem extends React.Component {
    render() {
        return (
            <tr className="row">
                <td className="col-xs-8 col-md-8">
                    <a href={"/post/" + this.props.postListItem.postId}>{this.props.postListItem.title}</a>
                </td>
                <td className="col-xs-2 col-md-2">{this.props.postListItem.publishedTime}</td>
                <td className="col-xs-2 col-md-2">{this.props.postListItem.lastModifiedTime}</td>
            </tr>
        )
    }
}

export default PostList