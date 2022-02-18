import { Button, TextField } from "@material-ui/core";
import React from 'react';

function DadosEntrega() {
    return (
        <form>
            <TextField
                id='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                id='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <TextField
                id='numero'
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                id='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                id='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'></TextField>
            <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega