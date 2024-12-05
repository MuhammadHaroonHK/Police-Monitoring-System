import video from "../assets/Untitled design.mp4";
function Video () {
    return (
        <center>
        <video  src={video} controls className="video"></video>
      </center>
    );
}

export default Video;