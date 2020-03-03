import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../../elements/Navigation';
import Architecture from './Architecture.js';
import Descriptions from './Descriptions.js';
import UserExperience from './UserExperience.js';
import Contributors from './Contributors.js';
import intro from '../../assets/intro.png';

export default class Landing extends Component {

    Introduction = () => (
        <Row className='introView leftRightPadding'>
            <Col sm={5} style={{marginTop: '5%'}}>
                <p id='introMessage'>Let's Meet give students everything they need to be success.</p>
                <p id='sub_intro'>New friendly mobile app allow students to host or attend to any events.</p>
                <button id='buttonSpec' type='button'>VIEW OUR DEMO</button>
            </Col>
            <Col sm={7}>
                <img className='introImgSpec' src={intro} alt='intro view' />
            </Col>
        </Row>
    );

    render() {
        return (
            <div style={{overflowX: 'hidden'}}>
                <Navigation />
                <this.Introduction />
                <Architecture />
                <Descriptions />
                <UserExperience />
                <Contributors />
            </div>
        )
    }
};
