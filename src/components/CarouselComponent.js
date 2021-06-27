import React, { Component } from 'react';
import { CAROUSEL } from '../shared/carousel'

class Carousel extends Component {
    constructor() {
        this.props();
        this.state = {
            carousel: CAROUSEL
        }
    }


    render() {
        return (
            <h2>Carousel placeholder</h2>
        )
    }
}

export default Carousel