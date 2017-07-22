import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleVideListItem from './single-video-item';

class VideoList extends Component {    
    render(){
        const videoItems = this.props.videos.map((video) => {
            return (
                <SingleVideListItem 
                    key={video.etag} 
                    video={video} 
                />
            );
        });
        //const eachVideoitem = 
        return(
             <ul className="col-md-4 list-group">
                { videoItems }               
            </ul>
        )
    }
}
const mapStateToProps = (state) => {    
    return {
       videos : state.videoLists
    };
}

export default connect(mapStateToProps)(VideoList)