import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}){
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar()
        }}>
            <TextField 
                id='email' 
                label='email'
                type='email'
                required
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <TextField 
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
                type='submit'>Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario