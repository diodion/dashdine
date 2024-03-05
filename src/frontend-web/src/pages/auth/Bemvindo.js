import React from 'react'
import Autenticacao from './Autenticacao'

function Bemvindo() {
    return (
        <>
            <div className='container_titulo'>
                <p className='titulo_log'>Bem vindo</p>
                <span className='subtitulo'>Acesse nosso sistema para utilizar todas as ferramentas e serviços.</span>
            </div>
            <div className='container_aut-central'>
                <button title="Entrar" type="submit" className="sign-in_btn">
                    <span>Entrar</span>
                </button>
                <button title="Primeiro Acesso" type="submit" className="sign-in_btn">
                    <span>Primeiro Acesso</span>
                </button>
            </div>
            </>
        
    )
}

export default Bemvindo