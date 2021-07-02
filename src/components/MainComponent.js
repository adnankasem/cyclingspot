import React, { Component } from 'react';
import { CAROUSEL } from '../shared/carousel';
import NavbarComponent from './NavbarComponent';
import Carousel from './CarouselComponent';
import CarouselOne from './CarouselComponent';




class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            carousel: CAROUSEL
        };
    }

    render() {
        return (
            <>
                <NavbarComponent />
                <CarouselOne />
            </>
        )
    
    }
    
}

export default Main;