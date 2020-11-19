import { LOAD_POSTS } from './actionTypes';
import { UPVOTE_POST } from './actionTypes';
import { DOWNVOTE_POST } from './actionTypes';

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        posts
    }
}

export function upVotePost(post) {
    return {
        type: UPVOTE_POST,
        post
    }
}

export function downVotePost(post) {
    return {
        type: DOWNVOTE_POST,
        post
    }
}
