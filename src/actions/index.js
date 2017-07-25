import {VIDEO_SEARCH, VIDEO_LISTS, VIDEO_DETAIL } from '../constants';

export function searchTerm(term){
    return {
        type : VIDEO_SEARCH,
        term : term
    }
}
export function updateVideoList(videos){
    return {
        type : VIDEO_LISTS,
        videos : videos
    }
}

export function selectedVideo(video){
    return {
        type : VIDEO_DETAIL,
        videoDetail : video
    }
}