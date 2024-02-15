'use client'
import { useState } from 'react'

export const usePasswordVisibility = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return {
        visible,
        toggleVisibility,
    };
};

