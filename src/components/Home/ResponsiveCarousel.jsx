import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResponsiveCarousel.css'
import AddCarousel from './AddCarousel';

const ImageCarousel = () => {
  return (<div className='carousel-main-div'>
  <AddCarousel/>
    <div className='main-div'>
        
        
    
          
        
          
      <div className="carousel-div">
        <Carousel className='carousel' indicators={false} interval={1500} controls={false} pause={false}>
          <Carousel.Item className="carousel-item-add">
            <img className="carousel-image" src="/assets/secondCarousel/add4.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-add">
            <img className="carousel-image" src="/assets/secondCarousel/add2.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-add">
            <img className="carousel-image" src="/assets/secondCarousel/add3.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  
    
   </div>
  );
};

export default ImageCarousel;
