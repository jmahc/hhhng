import { combineReducers } from 'redux';
import postsBySubreddit from './posts';
import selectedSubreddit from './subreddit';

const rootReducer = combineReducers({ postsBySubreddit, selectedSubreddit });

export default rootReducer;
