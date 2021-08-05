import React from "react";
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


import { HeaderWrap } from "./styles.js";

export default function Header({handleLogout}, props) {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="logo">
          <img src="https://logospng.org/download/nubank/logo-nubank-roxo-icon-256.png"></img>
        </div>

        <nav>
        <ul>
          <li><Link to="/"><a> <HomeIcon className="icon"/> Home</a></Link></li>
          <li><Link to="/config"><a> <PermDataSettingIcon className="icon"/> Configurações</a></Link></li>
          <li onClick={handleLogout}><a> <ExitToAppIcon className="icon"/> Sair </a></li>
        </ul>
        <div className="avatar">
          {/* <img src={props.user.avatar}/>
          <label>{props.user.name}</label> */} {/* verificar o porquê não está reconhecendo o user */}
        </div>
        </nav>
      </div>
    </HeaderWrap>
  );
}
