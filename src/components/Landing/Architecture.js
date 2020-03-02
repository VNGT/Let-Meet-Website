import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

export default class Architecture extends Component {

    OverralArchitecture = () => (
        <Row>
            <img alt='Overral architecture of Let Meet'/>
        </Row>
    );

    AWSArchitecture = () => (
        <Row>
            <img alt='AWS Architecture' />
        </Row>
    );

    render() {
        return (
            <div>
                <this.OverralArchitecture />
                <this.AWSArchitecture />
            </div>
        )
    }
}
