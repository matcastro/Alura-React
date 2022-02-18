import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            aoEnviar({cep, endereco, numero, estado, cidade})
        }}>
            <TextField
                value={cep}
                onChange={(e) => { setCep(e.target.value)}} 
                id='cep'
                name='cep'
                label='CEP'
                type='number'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                value={endereco}
                onChange={(e) => { setEndereco(e.target.value)}} 
                id='endereco'
                name='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth></TextField>
            <TextField
                value={numero}
                onChange={(e) => { setNumero(e.target.value)}} 
                id='numero'
                name='numero'
                label='Número'
                type='number'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                value={estado}
                onChange={(e) => { setEstado(e.target.value)}} 
                id='estado'
                name='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'></TextField>
            <TextField
                value={cidade}
                onChange={(e) => { setCidade(e.target.value)}} 
                id='cidade'
                name='cidade'
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