import React, { useEffect, useState } from 'react'
import InputPadrao from '../../components/shared/InputPadrao';
import { FaLock, FaUser, FaEnvelopeOpenText, FaIdCardClip } from "react-icons/fa6";
import { formatarCPF } from '../../utils/CPF';
import { checaCPF } from '../../utils/CPF';
import Axios from '../../api/Axios';

function Registro() {
  useEffect(() => {
    document.title = 'Registrar';
}, []);

    // Inputs
    const [data, setData] = useState({
      nome: '',
      sobrenome: '',
      cpf: '',
      email: '',
      senha: ''
  });

      // Pega o valor digitado no input de alguns fields 
      const handle = e => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    // Botão responsivo
    // const [showLoader, setShowLoader] = useState(false);

  const registrar = async (e) => {
    e.preventDefault();
    // setShowLoader(true)
    // setTimeout(() => setShowLoader(false), 1000)
    try {
        const registrando = await Axios.post(process.env.REACT_APP_API_REGISTRO,
            ({
              nome: data.nome,
              sobrenome: data.sobrenome,
              cpf: data.cpf,
              email: data.email,
              senha: data.senha
            })
        );
        console.log(registrando);
        setData({
          nome: '',
          sobrenome: '',
          cpf: '',
          email: '',
          senha: ''
        });
        e.target.reset();
    } catch (err) {
      console.log(err)
    }
}


    return (
      <>
      <form className='container_log-form' onSubmit={registrar}>
      <div className='container_logo'></div>
      <div className='container_titulo'>
          <p className='titulo_log'>Registre-se</p>
          <span className='subtitulo'>Seus dados seguem LGPD BABOSEIRA LEGAL blablabla.</span>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaUser/>} id={'nome'} value={data.nome} onChange={(e) => handle(e)} type={'text'} placeholder={'Nome'} autoFocus required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaUser/>} id={'sobrenome'} value={data.sobrenome} onChange={(e) => handle(e)} type={'text'} placeholder={'Sobrenome'} required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaUser/>} id={'sobrenom'} value={data.empresa} onChange={(e) => handle(e)} type={'text'} placeholder={'Empresa'} required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaIdCardClip/>} id={'cpf'} value={data.cpf} onChange={(e) => handle(e)} type={'text'} onKeyUpCapture={formatarCPF} onBlur={checaCPF} placeholder={'CPF'} required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaEnvelopeOpenText  />} id={'email'} value={data.email} onChange={(e) => handle(e)}  type={'email'} placeholder={'E-mail'} required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaLock/>} id={'senha'} value={data.senha} type={'password'} onChange={(e) => handle(e)}  placeholder={'Senha'} required/>
      </div>
      <div className="input_container">
          <InputPadrao icon={<FaLock/>} type={'password'} placeholder={'Confirme sua senha'} required/>
      </div>
          <button title="Registrar" type="submit" className="sign-in_btn">
          <span>Registrar</span>
          </button>
      </form>
      </>
    )
  }

export default Registro