import React from 'react';

const VideoList = (props) => {
    return (
        // In React we give className instead of class
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;