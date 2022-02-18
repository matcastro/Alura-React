import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event) {
        const {name, value} = event.target
        const ehValido = validacoes[name](value)
        const novoEstado = {...erros}
        novoEstado[name] = ehValido
        setErros(novoEstado)
    }

    function possoEnviar(){
        for (const campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true
    }

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault()
                if(possoEnviar()){
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
                }
            }
        }>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value)
                }}
                id="nome"
                name='nome'
                label="Nome"
                variant='outlined'
                margin='normal'
                fullWidth />
            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome"
                name='sobrenome'
                label="Sobrenome"
                variant='outlined'
                margin='normal'
                fullWidth />
            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value)
                }}

                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
                label="CPF"
                variant='outlined'
                margin='normal'
                fullWidth />

            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        onChange={event => {
                            setPromocoes(event.target.checked)
                        }}
                        name='promocoes'
                        checked={promocoes}
                        color='primary' />
                } />
            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        onChange={event => {
                            setNovidades(event.target.checked)
                        }}

                        name='novidades'
                        checked={novidades}
                        color='primary' />
                } />

            <Button
                variant='contained'
                color='primary'
                type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosPessoais