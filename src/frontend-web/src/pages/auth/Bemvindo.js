import React from 'react'
import Typewriter from 'typewriter-effect';

function Bemvindo() {
    return (
        <>
            <div className='container_titulo'>
                <p className='titulo_log'>
                <Typewriter
                    options={{
                        strings: ['Bora faturar?'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 5000,
                    }}
                />
                </p>
                {/* <span className='subtitulo'>Acesse nosso sistema para utilizar todas as ferramentas e serviços.</span> */}
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