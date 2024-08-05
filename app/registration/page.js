'use client'
import { useState, useEffect } from "react";

const Reg = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
    }, []);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem('password', password);
    }, [password]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            setPasswordError('Пароль должен быть не менее 6 символов');
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (emailError || passwordError) {
            alert('Пожалуйста, исправьте ошибки в форме');
        } else {
            alert(`Регистрация успешна!`);
        }
    };

    return (
        <div className="reg">
            <form onSubmit={submitHandler}>
                <h1>Регистрация</h1>
                {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input
                    onChange={emailHandler}
                    value={email}
                    onBlur={blurHandler}
                    name="email"
                    type="text"
                    placeholder="Введите ваш email...."
                />
                {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input
                    onChange={passwordHandler}
                    value={password}
                    onBlur={blurHandler}
                    name="password"
                    type="password"
                    placeholder="Введите ваш пароль...."
                />
                <button type="submit">Регистрация</button>
            </form>
        </div>
    );
};

export default Reg;
