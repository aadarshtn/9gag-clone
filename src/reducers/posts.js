import { LOAD_POSTS,UPVOTE_POST,DOWNVOTE_POST } from "../actions/actionTypes";

const initialPostsState = {
  posts: [],
};

export default function post(state = initialPostsState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.posts,
        postsLoaded: true,
      };
    case UPVOTE_POST:
      action.post.upVoteCount += 1;
      return {
        ...state,
      };
    case DOWNVOTE_POST:
      action.post.upVoteCount -= 1;
      action.post.downVoteCount += 1;
      return {
        ...state,
      };
    default:
      return state;
  }
}
