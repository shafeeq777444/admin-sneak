import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResponsiveCarousel.css'
import AddCarousel from './AddCarousel';

const ImageCarousel = () => {
  return (
    <div className='main-div'>
        
        
          <div className="text-div">
            <h4 className='h4'>S N E A K</h4>
            <h1 className='h1'>L U P I N E K</h1>
            <h1 className='h1'>F L Y K N I T</h1>
            <h1 className='h1'>A C G</h1>
            <br />
            <h6 className="description">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </h6>
          </div>

          
        
          <div className="carousel-wrapper">
      <div className="carousel-div">
        <Carousel className='carousel' indicators={false}  interval={1500} controls={false} pause={false}>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src="/assets/carousel/shoe-1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src="/assets/carousel/shoe-2.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src="/assets/carousel/shoe-3.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </div>
  );
};

export default ImageCarousel;
