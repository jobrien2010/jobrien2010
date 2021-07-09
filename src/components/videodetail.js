import React from 'react';
import { htmlDecode } from '../functions/utils';

const VideoDetail  = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="VideoPlayer"/>
            </div>

            <div className="ui segment">
                <h4 className="ui header">{htmlDecode(video.snippet.title)}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );

}

export default VideoDetail;
