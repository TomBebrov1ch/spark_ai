import React from 'react'

import styles from './style.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    margin?: string;
    text: React.ReactNode;
}



export const ButtonForm: React.FC<ButtonProps> = ({
    text,
    ...rest
}) => {
    return (
        <button className={`${styles.button}`} {...rest}>
            {text}
        </button>
    )
}
