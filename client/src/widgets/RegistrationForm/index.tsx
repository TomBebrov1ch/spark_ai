import React from 'react'
import Image from "next/image";

import { Input } from '../../shared/ui/Input/index'

import logo from '../../assets/logo/logo.png'

import styles from './style.module.scss'


export const RegistrationForm = () => {
    return (
        <div className={styles.registration_form}>
            <Image src={logo} alt="logo" className={styles.registration_form__logo} />
            <h2 className={styles.registration_form__greeting}>Welcome Back</h2>
            <Input placeholder='Username' />
            <Input placeholder='example@gmail.com' />
            <Input placeholder='Password' />
            <Input placeholder='Confirm Password' />
        </div>
    )
}
