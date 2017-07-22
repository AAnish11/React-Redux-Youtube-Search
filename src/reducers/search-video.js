export default function(state = 'react', action) {
    switch(action.type){
        case 'VIDEO_SEARCH':
            return action.term;
    }
    return state;
}