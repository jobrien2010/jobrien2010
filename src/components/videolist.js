import React from 'react';
import VideoItem from './videoitem';

const VideoList = ({videos, onVideoSelect}) => {
    const vidList = videos.map(video => {
        return(
            <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        )
    })

    return (
        <div className="ui relaxed divided list">
            {vidList}
        </div>
    );
}

export default VideoList;