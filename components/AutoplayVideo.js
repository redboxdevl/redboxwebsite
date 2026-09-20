// components/AutoplayVideo.js

const AutoplayVideo = () => {
  return (
    <video width="100%" height="auto" autoPlay muted loop>
      <source src="/images/Careermainbanner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;
