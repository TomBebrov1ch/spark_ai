'use client'
import React from 'react'
import Image from "next/image";
import { Input } from '../../shared/ui/Input/index'
import { usePasswordVisibility } from '@shared/lib/hooks/usePasswordVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ButtonForm } from '@shared/ui/ButtonForm';
import { useSignUpForm } from '@shared/lib/hooks/useSignUpForm';

import logo from '../../assets/logo/logo.png'

import styles from './style.module.scss'


export const RegistrationForm: React.FC = () => {
    const {
        onSubmit,
        error,
        handleSubmit,
    } = useSignUpForm();
    const {
        visible: isPasswordVisible,
        toggleVisibility: togglePasswordVisibility,
    } = usePasswordVisibility();
    const {
        visible: isConfirmPasswordVisible,
        toggleVisibility: toggleConfirmPasswordVisibility,
    } = usePasswordVisibility();

    return (
        <form className={styles.registration_form} onSubmit={handleSubmit(onSubmit)}>
            <Image src={logo} alt="logo" className={styles.registration_form__logo} />
            <h2 className={styles.registration_form__greeting}>Welcome Back</h2>
            <Input placeholder='Username' />
            <Input placeholder='example@gmail.com' />
            <div className={styles.registration_form__password}>
                <Input
                    placeholder='Password'
                    type={isPasswordVisible ? 'text' : 'password'}
                />
                <FontAwesomeIcon
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className={styles.registration_form__password__icon}
                />
            </div>
            <div className={styles.registration_form__password__confirm}>
                <Input
                    placeholder='Confirm Password'
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                />
                <FontAwesomeIcon
                    icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
                    onClick={toggleConfirmPasswordVisibility}
                    className={styles.registration_form__password__confirm__icon}
                />
            </div>
            <ButtonForm text='Sign Up' type="submit" />
        </form>
    )
}
