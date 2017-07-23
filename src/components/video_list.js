import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // always specify a key for array of items inorder to uniquely identify each item
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });
    return (
        // In React we give className instead of class
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;