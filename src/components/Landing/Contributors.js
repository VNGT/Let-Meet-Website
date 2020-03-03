import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Contributors extends Component {
    render() {
        return (
            <div className='membersView'>
                <Row className='row'>
                    <Col className='styleColumn roundCorner' sm={3}>
                        <h1 id='name'>Thinh Nguyen</h1>
                        <img alt='Thinh' id='profilePic' src='https://media-exp1.licdn.com/dms/image/C4E03AQF8uEw_uH_L7w/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=rwv-F6oHUS0CXduCsWGFXzhEEyZvlFBfu1HzCK2dMbE'></img>
                        <h2 id='major'>Computer Science</h2>
                        <h2 id='year'>Senior</h2>
                    </Col>
                    <Col sm={3}>
                        <h1 id='name'>Lan Le Tu</h1>
                        <img alt='Lan' id='profilePic' src='https://avatars2.githubusercontent.com/u/35468473?s=460&v=4'></img>
                        <h2 id='major'>Computer Science</h2>
                        <h2 id='year'>Senior</h2>
                    </Col>
                    <Col className='styleColumn roundCorner' sm={3}>
                        <h1 id='name'>Tuan Nguyen</h1>
                        <img alt='Trai' id='profilePic' src='https://avatars3.githubusercontent.com/u/32973156?s=460&v=4'></img>
                        <h2 id='major'>Computer Science</h2>
                        <h2 id='year'>Senior</h2>
                    </Col>
                    <Col sm={3}>
                        <h1 id='name'>Chau Phan</h1>
                        <img alt='Mai' id='profilePic' src='https://media-exp1.licdn.com/dms/image/C4E03AQE_u2AtqVmdmA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=2dG7hQFeMUpNQX8eqrQltCAHpAbl_UQ1YukdZ3e1sps'></img>
                        <h2 id='major'>Computer Science</h2>
                        <h2 id='year'>Senior</h2>
                    </Col>
                </Row>
            </div>
        )
    }
}
