import React, { useState } from 'react';
import './main.scss';
import ModalVideo from 'react-modal-video';
// import PropTypes from 'prop-types';

const ModVideo = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

            <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
        </div>
    );
};

// ModVideo.propTypes = {};

export default ModVideo;