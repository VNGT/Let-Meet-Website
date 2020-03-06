import React from 'react';

const UserExperience = (props) => {
    return (
        <div ref={props.getRef} id='ux' className='uxView'>
            <h1>User Experience</h1>
            <div className='videoView leftRightPadding'>
                <p>Video will insert in this card view</p>
            </div>
        </div>
    )
};

export default UserExperience;
