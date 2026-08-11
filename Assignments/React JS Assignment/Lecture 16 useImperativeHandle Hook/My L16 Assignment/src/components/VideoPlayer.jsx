import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const VideoPlayer = forwardRef(function VideoPlayer({ src }, ref) {
  const iframeRef = useRef(null);

  // Helper function to send commands to the YouTube iframe API
  const sendCommand = (command) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    }
  };

  useImperativeHandle(ref, () => ({
    playVideo() {
      sendCommand('playVideo');
    },
    pauseVideo() {
      sendCommand('pauseVideo');
    },
    stopVideo() {
      sendCommand('stopVideo');
    },
  }));

  // Ensure the YouTube URL allows JavaScript API control
  const videoSrc = src.includes('enablejsapi=1') ? src : `${src}&enablejsapi=1`;

  return (
    <div style={styles.container}>
      <iframe
        ref={iframeRef}
        src={videoSrc}
        style={styles.iframe}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      />
    </div>
  );
});

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
    aspectRatio: '16/9', // Better ratio for YouTube videos
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  },
};

export default VideoPlayer;