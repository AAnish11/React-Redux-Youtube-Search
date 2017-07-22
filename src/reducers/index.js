import { combineReducers } from 'redux';
import videoLists from './video-list-container';
import searchVideo from './search-video';
import detailedVideo from './video-detail';

const rootReducer = combineReducers({
  videoLists : videoLists,
  searchVideo : searchVideo,
  detailedVideo : detailedVideo
});

export default rootReducer;
