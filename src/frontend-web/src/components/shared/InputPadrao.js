import React, { useState } from 'react'
import { FaEye, FaEyeLowVision, FaUnlock } from 'react-icons/fa6';

// Input padrão utilizado na tela de login, por padrão utilizado para texto. Em caso de senha coloquei uma opção para mostrar o icone de mostrar senha.

const InputPadrao = ({ ...props }) => {

    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='input_container'>
                {props.icon &&
                    <div className='icon_input'>
                        {showPassword ? <FaUnlock /> : props.icon}
                    </div>
                }

                <input
                    type={showPassword ? 'text' : props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    maxLength={props.maxLength}
                    id={props.id}
                    onKeyUpCapture={props.onKeyUpCapture}
                    onBlur={props.onBlur}
                    name={props.name}
                    ref={props.ref}
                    className="input_field"
                    autoFocus={props.autoFocus}
                    required={props.required}
                />
                {
                    props.type === 'password' && (
                        <div className="icon_input-secret" onClick={handleTogglePassword}>
                            {showPassword ? <FaEye /> : <FaEyeLowVision />}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default InputPadrao 