
import React from 'react';
import * as styles from './button.module.scss';

interface ButtonProps {
    text?: string,
    action: () => void,
    type?: string,
    img?: string

}

const Button = (props: ButtonProps) => {
    return (
        <button 
            onClick = {props.action} 
            className = {(props.type === 'secondary') ? styles['button-secondary'] : styles['button-cta']}
            style={
                (props.img && !props.text) ? 
                    {
                        background: `url(${props.img}) no-repeat center center `,
                        backgroundSize: '70%',
                        height: '40px',
                        width: '40px',
                        padding: '10px'
                    }
                    :
                    {}
            }
        >
            {props.text}
        </button>  
    );
}

export default Button;
