import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if(possoEnviar()){
                aoEnviar({email, senha})
            }
        }}>
            <TextField
                value={email}
                onChange={(e) => { setEmail(e.target.value)}} 
                id='email' 
                name='email'
                label='email'
                type='email'
                required
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <TextField 
                value={senha}
                onBlur={validarCampos}
                onChange={(e) => { setSenha(e.target.value)}}
                id='senha' 
                name='senha'
                label='senha' 
                type='password'
                required 
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <Button 
                variant='contained' 
                color='primary' 
                type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosUsuario