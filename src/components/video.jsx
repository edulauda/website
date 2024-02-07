import React from 'react';

export const Video = () => {
    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/fQ6mNUpjEo0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
