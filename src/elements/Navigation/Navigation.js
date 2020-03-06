import React from 'react';
import './Navigation.scss';
import { Row, Col } from 'react-bootstrap';

const Navigation = (props) => {

    const changeDiv = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Row className='navBar leftRightPadding onePercent'>
            <Col className='title' md={2}>Let's Meet</Col>
            <Col md={10}>
                <Row className='element'>
                    <Col onClick={()=>changeDiv(props.intro)} className='items'>SOLUTION</Col>
                    <Col onClick={()=>changeDiv(props.arch)} className='items'>ARCHITECTURE</Col>
                    <Col onClick={()=>changeDiv(props.userX)} className='items'>EXPERIENCE</Col>
                    <Col onClick={()=>changeDiv(props.cont)} className='items'>CONTRIBUTORS</Col>
                </Row>
            </Col>
        </Row>
    )
};

export default Navigation;