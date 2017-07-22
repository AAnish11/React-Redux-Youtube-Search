import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { updateVideoList , selectedVideo, searchTerm }  from '../actions';
import { bindActionCreators } from 'redux';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyBoWEcp6KtSDz4YxVKMv8JPhkMwy_kCdoM";
class TopSearch extends Component {
     
    fetchVideo(term){
        YTSearch({key: API_KEY,term: term}, (videos) => {                
            this.props.updateVideoList(videos);
            this.props.selectedVideo(videos[0]);
        });
    }
    render(){  
        //handle single input key search
        this.fetchVideo(this.props.term);
        return(
            <div className="search-bar">
                <input className="form-control" 
                    value = {this.props.term}
                    onChange={ (event) => this.props.searchTerm(event.target.value) } 
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {     
    return {
       term : state.searchVideo
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
                updateVideoList: updateVideoList, 
                selectedVideo : selectedVideo, 
                searchTerm:searchTerm 
            }
            , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSearch)