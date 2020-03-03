import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import architecture from '../../assets/architecture.png';
import aws from '../../assets/aws.png';

export default class Architecture extends Component {

    OverralArchitecture = () => (
        <Row>
            <img className='shiftTop diagramSpec1 center' src={architecture} alt='Overral architecture of Let Meet'/>
        </Row>
    );

    AWSArchitecture = () => (
        <div className='cardView leftRightPadding'>
            <Row>
                <img src={aws} alt='AWS Architecture' className='shiftTop diagramSpec center' />
            </Row>
            <Row>
                <h1 className='title'>Our Tech Stacks</h1>
            </Row>
            <Row className='techStackView'>
                <Col id='title' sm={4}>
                    <h3>Backend</h3>
                    <div id='subtitle'>
                        <p>Node.js</p>
                        <p>AWS Serverless</p>
                        <p>Lambda</p>
                    </div>
                </Col>
                <Col id='title' sm={4}>
                    <h3>Frontend</h3>
                    <div id='subtitle'>
                        <p>React Native</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                    </div>
                </Col>
                <Col id='title' sm={4}>
                    <h3>Database</h3>
                    <div id='subtitle'>
                        <p>DynamoDB</p>
                        <p>Firebase</p>
                    </div>
                </Col>
            </Row>
        </div>
    );

    render() {
        return (
            <div id='architecture' className='architectureView'>
                <this.OverralArchitecture />
                <this.AWSArchitecture />
            </div>
        )
    }
}
