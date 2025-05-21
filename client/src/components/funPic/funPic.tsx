import React from 'react';
import * as styles from './funPic.module.scss';
import q from './images/q.svg';


interface FunPicProps {
    positionNum?: number,
    picUrl?: any
}

const FunPic = (props: FunPicProps) => {

    return (
        ///props.picUrl.length > 0 ? 
            <div className = {styles['pic-container']}>
                <img src={props.picUrl ? props.picUrl : q} className = {styles['pic']}/>
            </div>
        //:
        /*<div></div>*/
    );
}

export default FunPic;
