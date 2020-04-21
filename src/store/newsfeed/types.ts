export interface News {
    id: number,
    article: string
}

export interface NewsfeedState {
    news: News[] // this holds multiple news article to be added to the list.
}

export const ADD_NEWS_TO_NEWSFEED = 'ADD_NEWS_TO_NEWSFEED';
export const REMOVE_NEWS_FROM_NEWSFEED = 'REMOVE_NEWS_FROM_NEWSFEED';

interface AddNewsToNewsfeed {
    type: typeof ADD_NEWS_TO_NEWSFEED,
    payload: News
}

interface RemoveNewsFromNewsfeed {
    type: typeof REMOVE_NEWS_FROM_NEWSFEED,
    payload: number
}

export type NewsfeedActionTypes = AddNewsToNewsfeed | RemoveNewsFromNewsfeed;