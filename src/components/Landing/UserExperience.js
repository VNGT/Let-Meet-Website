import React from 'react';

const UserExperience = (props) => {
    return (
        <div ref={props.getRef} id='ux' className='uxView'>
            <h1>User Experience</h1>
            <div className='videoView leftRightPadding'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mVqg_x1G7ms" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    )
};

export default UserExperience;
