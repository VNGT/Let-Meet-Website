import React from 'react';
import './Navigation.scss';
import { Row, Col } from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <Row className='navBar'>
            <Col className='title' md={2}>Let's Meet</Col>
            <Col md={10}>
                <Row className='element'>
                    <Col className='items'>SOLUTION</Col>
                    <Col className='items'>FEATURE</Col>
                    <Col className='items'>EXPERIENCE</Col>
                    <Col className='items'>ARCHITECTURE</Col>
                    <Col className='items'>CONTRIBUTORS</Col>
                </Row>
            </Col>
        </Row>
    )
};

// <Col md={3}>
//     <button className='buttonSpec' type='button'>VIEW OUR DEMO</button>
// </Col>

export default Navigation;