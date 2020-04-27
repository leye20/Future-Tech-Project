import { NewsfeedActionTypes, ADD_POST_TO_NEWSFEED, REMOVE_POST_FROM_NEWSFEED, Post } from './newsfeed_types';

export function addPostToNewsfeed ( post: Post ): NewsfeedActionTypes {
    return {
        type: ADD_POST_TO_NEWSFEED,
        payload: post
    }
}

export function removePostFromNewsfeed ( id: number ): NewsfeedActionTypes {
    return {
        type: REMOVE_POST_FROM_NEWSFEED,
        payload: id
    }
}