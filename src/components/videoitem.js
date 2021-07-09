import './videoitem.css';
import React from 'react';
import { htmlDecode } from '../functions/utils';

const VideoItem = ({video, onVideoSelect}) => {

    return(
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
             <img className="ui image" alt={video.snippet.title} 
                  src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header"> {htmlDecode(video.snippet.title)}</div>
            </div>
        </div>
    );
}

export default VideoItem;