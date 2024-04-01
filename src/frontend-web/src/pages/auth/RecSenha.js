import { React, useEffect } from "react";
// Icones
import { FaUser } from "react-icons/fa6";
import InputPadrao from '../../components/shared/InputPadrao';

function Login() {
    useEffect(() => {
        document.title = "Dashdine - Recuperar senha";
    }, []);

    return (
        <>
            <form className='container_log-form'>
                <div className='container_logo'></div>
                <div className='container_titulo'>
                    <p className='titulo_log'>Bem vindo!</p>
                    <span className='subtitulo'>Algum blablá blá aqui.</span>
                </div>
                <div className="input_container">
                    <InputPadrao icon={<FaUser />} id="cpf" type={'text'} placeholder={'CPF'} autoFocus required />
                </div>
                <button title="RecSenha" type="submit" className="sign-in_btn">
                    <span>Recuperar senha</span>
                </button>
            </form>
        </>

    )
}
export default Login