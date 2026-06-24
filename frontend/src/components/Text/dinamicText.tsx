import React from 'react';
import Shuffle from '../../reactbits/components/Shuffle';

type DinamicTextProps = {
  text: string;
};
export function DynamicText ({text}: DinamicTextProps){
    return (<Shuffle
    text={text}
    shuffleDirection="right"
    duration={0.4}
    animationMode="evenodd"
    shuffleTimes={1}
    ease="expo.out"
    stagger={0.08}
    threshold={0.1}
    triggerOnce={true}
    triggerOnHover={false}
    respectReducedMotion={true}
    loop
    loopDelay={2}
    />)
}