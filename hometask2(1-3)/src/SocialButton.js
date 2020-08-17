import React from 'react';
import TwitterButton from './TwitterButton';
import FacebookButton from './FacebookButton';

function SocialButton(props) {
    if (props.type === 'facebook') {
        return <FacebookButton />
    } else {
        return <TwitterButton />
    }
}

export default SocialButton