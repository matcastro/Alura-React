import React from 'react';
import Button from "@material-ui/core/Button"

function FormularioCadastro() {
    return(
        <form>
            <label>Nome</label>
            <input type="text"></input>
            <label>Sobrenome</label>
            <input type="text"></input>
            <label>CPF</label>
            <input type="text"></input>

            <label>Promoções</label>
            <input type="checkbox"></input>
            <label>Novidades</label>
            <input type="checkbox"></input>
            
            <Button variant='contained' color='primary' type='submit'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro