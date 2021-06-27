import React, { Component } from 'react';
import { CAROUSEL } from '../shared/carousel';
import NavbarComponent from './NavbarComponent';
import Carousel from './CarouselComponent';




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
                <h1>Hello</h1>
                <Carousel />
            </>
        )
    
    }
    
}

export default Main;