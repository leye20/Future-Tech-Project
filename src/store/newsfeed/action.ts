import { NewsfeedActionTypes, ADD_NEWS_TO_NEWSFEED, REMOVE_NEWS_FROM_NEWSFEED, News } from './types';

export function addNewsToNewsfeed ( news: News ): NewsfeedActionTypes {
    return {
        type: ADD_NEWS_TO_NEWSFEED,
        payload: news
    }
}

export function removeNewsFromNewsfeed ( id: number ): NewsfeedActionTypes {
    return {
        type: REMOVE_NEWS_FROM_NEWSFEED,
        payload: id
    }
}