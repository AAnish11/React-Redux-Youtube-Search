import {VIDEO_SEARCH } from '../constants';

export default function(state = 'react', action) {
    switch(action.type){
        case VIDEO_SEARCH:
            return action.term;
    }
    return state;
}