'use client'
import { useState } from 'react'
import { useForm } from "react-hook-form";

import axios from 'axios';

export interface FormData {
    user_name: string;
    email: string;
    password: string;
    password_conf: string;
}
export const useSignUpForm = () => {
    const [error, setError] = useState("");



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid, isSubmitting },
    } = useForm<FormData>({
        mode: "onChange",
        criteriaMode: "all",
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await axios.post(
                "https://sparkai-production-dbad.up.railway.app/register/",
                data
            );
            console.log('Registration Succesfuly:', response.data);
        } catch (error: any) {
            if (error.response) {
                setError(
                    `Registration is failed:
                    ${error.response.status}`
                );
                console.error("Failed response data", error.response.data);
                setError(
                    `Ошибка:
          ${error.response.data.email}`
                );
            } else if (error.request) {
                console.error("No response received:", error.request);
                setError(
                    `Не получен ответ:
          ${error.request}`
                );
            } else {
                setError(`Ошибка во время установки: ${error.message}`);
            }
        }
    }



    return {
        onSubmit,
        error,
        handleSubmit,
    }
}
