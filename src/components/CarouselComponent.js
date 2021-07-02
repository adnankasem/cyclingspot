import React, { Component, useState } from 'react';
import { CAROUSEL } from '../shared/carousel'
import { Carousel } from 'react-bootstrap'
import './CarouselOne.css'


const CarouselOne = () => {
    return(
        <div className="container-one">
            <Carousel className="carousel" fade={true} pause={false}>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100 carousel-image"
                src="./assets/images/david-marcu-VfUN94cUy4o-unsplash.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100 carousel-image"
                src="./assets/images/markus-spiske-WUehAgqO5hE-unsplash.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100 carousel-image"
                src="./assets/images/image1.jpeg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
    )
}

export default CarouselOne




// class CarouselOne extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             carousel: CAROUSEL
//         }
//     }


//     render() {
//         return (
//             <h2>Carousel placeholder</h2>
//         )
//     }
// }