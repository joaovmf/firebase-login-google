import React from 'react';

import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {AreaLogin} from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Api from '../../Api'

/* eslint-disable */
export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogin();

        if (result) {
            onReceiveGoogle(result.user)
        } else {
            alert('Error')
        }
    }
    return (
       <AreaLogin>
        <h1>Faça o login em sua conta</h1>

        <button>
        <FacebookIcon/>Fazer login com o Facebook
        </button>
        <button onClick={actionLoginGoogle}>
        <GTranslateIcon/>Fazer login com o Google
        </button>

        <p>OU</p>

        <form>
            <div className="form-input">
                <label>Email</label>
                <input type="email"/>
            </div>
            <div className="form-input">
                <label>Senha</label>
                <input type="email"/>
            </div>
        </form>
       </AreaLogin>
    )
}