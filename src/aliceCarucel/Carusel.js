import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './style.css';
import image1 from './2378087.jfif';
import image2 from './6741986.jfif';
import image3 from './7998492.jfif';
// import PropTypes from 'prop-types';

const handleDragStart = (e) => e.preventDefault();

            const items = [
                <img src={image1} width="100%" onDragStart={handleDragStart} role="presentation" />,
                <img src={image2} onDragStart={handleDragStart} role="presentation" />,
                <img src={image3} onDragStart={handleDragStart} role="presentation" />,
            ];
const Carusel = () => {
    return (
        <div>
            <AliceCarousel infinite autoPlay={true} autoPlayInterval={1000} mouseTracking items={items} />
        </div>
    );
};

// Carusel.propTypes = {};

export default Carusel;