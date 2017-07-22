import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedVideo } from '../actions';
class SingleVideListItem extends Component {    
    render(){        
        const video = this.props.video;
        return(
             <li onClick={() => this.props.selectedVideo(video) } className="list-group-item"> 
                <div className="video-list media"> 
                    <div className="media-left">
                        <img  className ="media-object" src={video.snippet.thumbnails.default.url}/>
                    </div>
                </div>

                <div className="media-body"> 
                    <div className="media-heading"> { video.snippet.title }
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state)=>{       
    return {};
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({selectedVideo : selectedVideo} , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleVideListItem)
