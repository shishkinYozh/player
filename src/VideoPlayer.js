function VideoPlayer(props) {
    return (
        <div>
            <video
                controls autostart={true} autoPlay muted 
                src={props.src} 
            />
        </div>
    )
}

export default VideoPlayer;