export default function(state = [], action) {
    switch(action.type){
        case 'VIDEO_LISTS':
            return action.videos;
    }
    return state;
    
}