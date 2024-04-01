import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosPrivate } from '../../api/Axios';
// Icones
import { FaLock, FaUser } from "react-icons/fa6";
import InputPadrao from '../../components/shared/InputPadrao';

function Login() {
    useEffect(() => {
        document.title = "Dashdine - Login";
    }, []);
    // // Usa o hook do setAuth pra tornar o login permanente ou não
    // const { setAuth, persistente, setPersistente } = useAuth();
    // Variavéis e hooks para redirecionar ápos o login
    const navegar = useNavigate();
    const local = useLocation();
    const de = local.state?.from?.pathname || "/inicio"; // caso o usuário deslogou de certa página ele retornar pra ela, se não for o caso vai para o inicio
    // Mensagem de erro do form
    // const errRef = useRef();
    // const [errMsg, setErrMsg] = useState("");
    const [usuarioValue, setUsuario] = useState("");
    const [senhaValue, setSenha] = useState("");
    // useEffect(() => {
    //     setErrMsg("");
    // }, [usuarioValue, senhaValue]);
    // Lembrar Login
    // const togglePersistente = () => {
    //     setPersistente(prev => !prev);
    // }

    // useEffect (() => {
    //     localStorage.setItem("persistente", persistente)
    // }, [persistente])
    // Botão responsivo
    // const [showLoader, setShowLoader] = useState(false)
    // Início do post de login
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setShowLoader(true)
        // setTimeout(() => setShowLoader(false), 1000)
        try {
            const response = await axiosPrivate.post(
                process.env.REACT_APP_API_LOGIN,
                ({
                    entrada: usuarioValue,
                    senha: senhaValue
                })
            );
            console.log(response)
            setUsuario("");
            setSenha("");
            // Muda o usuário de página
            navegar(de, { replace: true });
        } catch (err) { console.log(err)
        }
    };
    

    return (
        <>
            <form className='container_log-form'  onSubmit={handleSubmit}>
                <div className='container_logo'></div>
                <div className='container_titulo'>
                    <p className='titulo_log'>Boas vindas!</p>
                    <span className='subtitulo'>Algum blablá blá aqui.</span>
                </div>
                <div className="input_container">
                    <InputPadrao icon={<FaUser />} id="usuario" onChange={(e) => setUsuario(e.target.value)} value={usuarioValue} type={'text'} placeholder={'CPF'} autoFocus required />
                </div>
                <div className="input_container">
                    <InputPadrao icon={<FaLock />} id="senha" onChange={(e) => setSenha(e.target.value)} value={senhaValue} type={'password'} placeholder={'Senha'} required />
                </div>
                <button title="Entrar" type="submit" className="sign-in_btn">
                    <span>Entrar</span>
                </button>
                <div className='esqueci_senha'>
                    <span>Esqueci a senha</span>
                </div>
            </form>
        </>

    )
}
export default Login