import React, { Component } from "react";
import CardNota from "./CardNota";

export default class ListaDeNotas extends Component {

    render(){
        return (
            <ul>
                {
                    Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
                        return (
                            <li>
                                <div>{categoria}</div>
                                <CardNota></CardNota>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}