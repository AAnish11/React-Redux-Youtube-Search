import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopSearch  from './top-search';
import VideosLists  from './video-lists';
import VideoDetail  from './video-detail';

class RootLayout extends Component {

    render(){
        return(
             <div>
                <div className="row">
                    <div className="col-sm-12">
                        <TopSearch />                        
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <VideoDetail />
                    <VideosLists/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {};
}

export default connect(mapStateToProps)(RootLayout)