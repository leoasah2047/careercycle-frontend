import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="containerStyle">
      <iframe 
      style={{
        width: '100%', 
        height: '100%',
        margin: 'auto', // Center the container
        borderRadius: '10px', // Set your desired border radius
        overflow: 'hidden', // Ensure rounded corners are visible
      }}
      src="https://www.youtube.com/embed/U5cK0gVOz_Q?si=0HnStosPp5_6ice7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default VideoPlayer;