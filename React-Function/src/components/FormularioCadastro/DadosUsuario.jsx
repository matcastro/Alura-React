import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({email, senha})
        }}>
            <TextField
                value={email}
                onChange={(e) => { setEmail(e.target.value)}} 
                id='email' 
                label='email'
                type='email'
                required
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <TextField 
                value={senha}
                onChange={(e) => { setSenha(e.target.value)}}
                id='senha' 
                label='senha' 
                type='password'
                required 
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