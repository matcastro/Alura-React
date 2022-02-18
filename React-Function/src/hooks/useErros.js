import {useState} from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes)
    const [erros, setErros] = useState(estadoInicial)
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

    return [erros, validarCampos, possoEnviar]
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for (const campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: ''}
    }
    return estadoInicial
}

export default useErros