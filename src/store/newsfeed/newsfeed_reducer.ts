import { NewsfeedState, ADD_POST_TO_NEWSFEED, REMOVE_POST_FROM_NEWSFEED, NewsfeedActionTypes } from './newsfeed_types';

const initialState: NewsfeedState = {
    posts: [
        {
            id: 1,
            article: 'The world as we know it is changed due to the COVID 19. The economic woes this would leave might only be know, in weeks, months, maybe years to come.',
            thumbnailUrl: `https://via.placeholder.com/150/8985dc`
        },
        {
            id: 2,
            article: 'What do men watch now when all sports is on hold. A better question is what do they talk about now without the sport season on going!',
            thumbnailUrl: `https://via.placeholder.com/150/5e12c6`
        },
        {
            id: 3,
            article: 'Desperate times calls for desperate measures! That is the times we live in right now, and adjusting to the reality of practically doing things from home is tasking, from working from home to, schooling and caring for the kids, attending to house chores etc. All of this comes with its challenges, important we take time to rest and relax our minds, the better for us and the society at large during and when this is all over!',
            thumbnailUrl: `https://via.placeholder.com/150/45601a`
        },
        {
            id: 4,
            article: 'We are a team of over 35 people living and working remotely in over 3 locations within Alberta. We are working hard to build a career and life for ourselves within the tech ecosystem where collaboration and empathy is promoted within teams serving as a booster to solving problems and build scalable and sustainable products, we can all be proud of.',
            thumbnailUrl: `https://via.placeholder.com/150/e924e6`
        },
        {
            id: 5,
            article: 'Answering the question, How is COVID 19 transmitted? The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.',
            thumbnailUrl: `https://via.placeholder.com/150/8f209a`
        },
        {
            id: 6,
            article: 'The world as we know it is changed due to the COVID 19. The economic woes this would leave might only be know, in weeks, months, maybe years to come.',
            thumbnailUrl: `https://via.placeholder.com/150/5e3a73`
        },
        {
            id: 7,
            article: 'What do men watch now when all sports is on hold. A better question is what do they talk about now without the sport season on going!',
            thumbnailUrl: `https://via.placeholder.com/150/474645`
        },
        {
            id: 8,
            article: 'Desperate times calls for desperate measures! That is the times we live in right now, and adjusting to the reality of practically doing things from home is tasking, from working from home to, schooling and caring for the kids, attending to house chores etc. All of this comes with its challenges, important we take time to rest and relax our minds, the better for us and the society at large during and when this is all over!',
            thumbnailUrl: `https://via.placeholder.com/150/c984bf`
        },
        {
            id: 9,
            article: 'We are a team of over 35 people living and working remotely in over 3 locations within Alberta. We are working hard to build a career and life for ourselves within the tech ecosystem where collaboration and empathy is promoted within teams serving as a booster to solving problems and build scalable and sustainable products, we can all be proud of.',
            thumbnailUrl: `https://via.placeholder.com/150/392537`
        },
        {
            id: 10,
            article: 'Answering the question, How is COVID 19 transmitted? The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.',
            thumbnailUrl: `https://via.placeholder.com/150/602b9e`
        },
        {
            id: 11,
            article: 'The world as we know it is changed due to the COVID 19. The economic woes this would leave might only be know, in weeks, months, maybe years to come.',
            thumbnailUrl: `https://via.placeholder.com/150/372c93`
        },
        {
            id: 12,
            article: 'What do men watch now when all sports is on hold. A better question is what do they talk about now without the sport season on going!',
            thumbnailUrl: `https://via.placeholder.com/150/a7c272`
        },
        {
            id: 13,
            article: 'Desperate times calls for desperate measures! That is the times we live in right now, and adjusting to the reality of practically doing things from home is tasking, from working from home to, schooling and caring for the kids, attending to house chores etc. All of this comes with its challenges, important we take time to rest and relax our minds, the better for us and the society at large during and when this is all over!',
            thumbnailUrl: `https://via.placeholder.com/150/c70a4d`
        },
        {
            id: 14,
            article: 'We are a team of over 35 people living and working remotely in over 3 locations within Alberta. We are working hard to build a career and life for ourselves within the tech ecosystem where collaboration and empathy is promoted within teams serving as a booster to solving problems and build scalable and sustainable products, we can all be proud of.',
            thumbnailUrl: `https://via.placeholder.com/150/501fe1`
        },
        {
            id: 15,
            article: 'Answering the question, How is COVID 19 transmitted? The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.',
            thumbnailUrl: `https://via.placeholder.com/150/35185e`
        },
    ]
}

export function newsfeedReducer ( state = initialState, action: NewsfeedActionTypes ) {
    switch ( action.type ) {
        case ADD_POST_TO_NEWSFEED:
            return {
                ...state,
                posts: [ ...state.posts, action.payload ]
            }
        case REMOVE_POST_FROM_NEWSFEED:
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.payload ) // check here later as you might be mixting things up with news that has been passed into the filter method!
            }
        default:
            return state;
    }
}