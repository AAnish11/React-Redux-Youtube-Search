import { VIDEO_DETAIL } from '../constants';

export default function(state = null, action) {
    switch(action.type){
        case VIDEO_DETAIL:
            return action.videoDetail;
    }
    return state;
    
}