import React, { Component } from 'react';
import ScrollButton from 'react-scroll-button'
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Navigation from '../../elements/Navigation';
import Architecture from './Architecture.js';
import UserExperience from './UserExperience.js';
import Contributors from './Contributors.js';
import intro from '../../assets/intro.png';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.intro = React.createRef();
        this.arch = React.createRef();
        this.userX = React.createRef();
        this.cont = React.createRef();
    };

    Introduction = () => (
        <Row ref={this.intro} className='introView leftRightPadding'>
            <Col sm={5} style={{marginTop: '5%'}}>
                <p id='introMessage'>Let's Meet give students everything they need to be success.</p>
                <p id='sub_intro'>New friendly mobile app allow students to host or attend to any events.</p>
                <button onClick={()=>window.open('https://sketch.cloud/s/k5dpr/a/vAwja3/play')} id='buttonSpec' type='button'>VIEW OUR DEMO</button>
            </Col>
            <Col sm={7}>
                <Fade bottom duration={1500}>
                    <img className='introImgSpec' src={intro} alt='intro view' />
                </Fade>
            </Col>
        </Row>
    );

    render() {
        return (
            <div id='home' style={{overflowX: 'hidden'}}>
                <ScrollButton
                    behavior={'smooth'}
                    buttonBackgroundColor={'#F6598B'}
                    iconType={'arrow-up'}
                    style= {{width: 50, height: 50, fontSize: 30}}
                    targetId='home'
                    scrollSpeed={'1s'}
                />
                <Navigation
                    intro={this.intro}
                    arch={this.arch}
                    userX={this.userX}
                    cont={this.cont}
                />
                <this.Introduction />
                <Architecture getRef={this.arch} />
                <UserExperience getRef={this.userX} />
                <Contributors getRef={this.cont} />
            </div>
        )
    }
};
