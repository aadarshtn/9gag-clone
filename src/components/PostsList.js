import React, { Component } from "react";
import { KeywordTile, PostCard } from "./";
import { loadPosts } from '../actions/posts';

class PostsList extends Component {

  async componentDidMount(){
    const { data } = this.props;
    const posts = data.data.posts;
    console.log(posts);
    this.props.dispatch(loadPosts(posts));
  }

  render() {
    const { data } = this.props;
    const tagsList = data.data.tags;
    const postsList = data.data.posts;
    return (
      <div className="posts-list">
        <div className="keywords-collection">
          {tagsList.map((tag) => (
            <KeywordTile tag={tag} data={data} />
          ))}
          {postsList.map((post) => (
            <PostCard post={post} data={data} dispatch={this.props.dispatch} />
          ))}
        </div>
        <PostCard />
      </div>
    );
  }
}

export default PostsList;
