import React, { useState } from 'react';
import Menu from './Menu';
import VideoPlayer from './VideoPlayer';
import VideoList from './data/VideoList';

function App() {

    const [src, setSrc] = useState(VideoList.fast);
    const onSelectVideoHandler = (newVideo) => {
        setSrc(VideoList[newVideo])
    }

    return (
        <>
            <h1>Video Player App</h1>
            <Menu onSelectVideo={onSelectVideoHandler} />
            <VideoPlayer src={src} />
        </>
    );
};

export default App;