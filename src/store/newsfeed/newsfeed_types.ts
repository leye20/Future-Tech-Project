export interface Post {
    id: number,
    article: string,
    thumbnailUrl: string
}

export interface NewsfeedState {
    posts: Post[] // this holds multiple news article to be added to the list.
}

export const ADD_POST_TO_NEWSFEED = 'ADD_POST_TO_NEWSFEED';
export const REMOVE_POST_FROM_NEWSFEED = 'REMOVE_POST_FROM_NEWSFEED';

interface AddPostToNewsfeed {
    type: typeof ADD_POST_TO_NEWSFEED,
    payload: Post
}

interface RemovePostFromNewsfeed {
    type: typeof REMOVE_POST_FROM_NEWSFEED,
    payload: number
}

export type NewsfeedActionTypes = AddPostToNewsfeed | RemovePostFromNewsfeed;