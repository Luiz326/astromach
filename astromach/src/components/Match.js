import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MatchImagem, Perfis, Botao, Voltar } from './styles'
import voltar from '../icones/arrow-left-circle.png'


export default function Matches(props) {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/matches")
            .then((response) => {
                setMatches(response.data.matches)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getMatches()
    }, [props.id])

    const pegaMatch = matches.map((info) => {
        return (
            <Perfis>
                <MatchImagem src={info.photo} alt="imagem" />
                <p>{info.name}</p>
            </Perfis>

        )
    })

    return (
        <d>
            {pegaMatch}
            <Voltar>
                <Botao src={voltar} onClick={props.trocaTela} Voltar />
                <p>VOLTAR</p>
            </Voltar>

        </d>
    )
}