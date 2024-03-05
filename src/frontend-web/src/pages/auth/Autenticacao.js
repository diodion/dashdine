import { React } from 'react';
import './Autenticacao.css';
import {ReactComponent as Logo} from './../../assets/svg/Logo.svg';
import { createNightowl } from '@bufferhead/nightowl'
// import Login from './Login';
// import Registro from './Registro';
// import { Link } from 'react-router-dom';

import Bemvindo from './Bemvindo';
// import Login from './Login';
function Autenticacao() {
    createNightowl({
        defaultMode: 'dark',
        toggleButtonMode: 'newState'
    })
    return (
        <div className='container_log'>
            <div className='container_log-esq'>
            <Bemvindo/>
            </div>
            <div className='container_log-dir nightowl-daylight'>
            <Logo/>
            </div>
        </div>
    );
}

export default Autenticacao