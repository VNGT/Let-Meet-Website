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
                <p id='introMessage'>Let's Meet helps students to be successful together.</p>
                <p id='sub_intro'>New friendly mobile app allows students to easily host or join studying events. This solution aims to provide students a high performance application with modern and friendly user interface to effectively host and attend study sessions with each other, with the end goal to create a seamless experience and flexibility in both time and location when deciding on when and where to study.</p>
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
