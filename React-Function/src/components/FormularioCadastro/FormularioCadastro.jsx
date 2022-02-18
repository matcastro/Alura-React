import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({aoEnviar, validarCPF}) {

    return (
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
            <DadosUsuario/>
            <DadosEntrega/>
        </>
    )
}

export default FormularioCadastro