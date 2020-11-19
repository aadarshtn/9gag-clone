import React, { Component } from "react";
import { upVotePost,downVotePost } from '../actions/posts';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.upVoted = false;
    this.downVoted = false;
  }
  
  upVote = (post) => {
    if(this.upVoted){

    }else{
      this.props.dispatch(upVotePost(post));
    }
    this.upVoted = true;
    this.downVoted = false;
  }
  downVote = (post) => {
    if(this.downVoted){

    }else{
      this.props.dispatch(downVotePost(post));
    }
    this.upVoted = false;
    this.downVoted = true;
  }

  render() {
    const { data } = this.props;
    var dark = false;
    if(data != null){
      dark = data.nightMode;
    }
    const { post } = this.props;
    var today = new Date();
    var currentHour = today.getHours();
    var timeElapsed = 0;
    if (post != null) {
      if (post.creationTs !== 0) {
        const postHour = post.creationTs - 1605700000;
        timeElapsed = currentHour - parseInt(postHour / 3600);
      }
    }
    return (
      <div className="postcard-container">
        {post == null ? (
          <div></div>
        ) : (
          <div>
            <div className="postcard-header">
              <img src={post.postSection.imageUrl}></img>
              <p className="very-small-p dark">
                {post.postSection.name}{" "}
                {Math.abs(timeElapsed) === 0 ? null : (
                  <p className="very-small-p">
                    | &nbsp; {Math.abs(timeElapsed)}h
                  </p>
                )}
              </p>
            </div>
            <div className="post-body">
              <h2 className={dark ? "post-tile-dark" : "post-tile"}>{post.title}</h2>
              {post.images.image460sv != null ? (
                <div className="post-content">
                  <video
                    src={post.images.image460sv.url}
                    controls
                    loop
                    className={
                      post.images.image460sv.height >= 401
                        ? "height-adjusted-video"
                        : ""
                    }
                  ></video>
                </div>
              ) : (
                <div className="post-content">
                  {post.images.image460 != null ? (
                    <img src={post.images.image460.url}></img>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
              <p className="medium-p">
                {post.upVoteCount} points · {post.commentsCount} comments
              </p>
              <div className="postcard-footer">
                <button className="button" onClick={() => {this.upVote(post)}}>
                  <img src={this.upVoted && !this.downVoted ? "https://www.flaticon.com/svg/static/icons/svg/892/892681.svg" : "https://www.flaticon.com/svg/static/icons/svg/929/929769.svg"}></img>
                </button>
                <button className="button" onClick={() => {this.downVote(post)}}>
                  <img src={this.downVoted && !this.upVoted ? "https://www.flaticon.com/svg/static/icons/svg/626/626013.svg" : "https://www.flaticon.com/svg/static/icons/svg/929/929750.svg"}></img>
                </button>
                <button className="button">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/1380/1380338.svg"></img>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostCard;
