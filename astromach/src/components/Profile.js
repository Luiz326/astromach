import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Imagens, Headeres, Container, Centralizado, Botao } from './styles'
import restore from '../icones/backup-restore.png'
import heart from '../icones/heart-multiple.png'
import brokeHeart from '../icones/heart-broken-outline.png'
import match from '../icones/account-heart.png'


function Profile(props) {
    const [perfil, setPerfil] = useState({})
    const perfilRecebido = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/person")
            .then((response) => {
                setPerfil(response.data.profile)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        perfilRecebido()
    }, [])
    const choosePerson = (value) => {
        const body = {
            id: perfil.id,
            choice: value
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/choose-person", body)
            .then((response) => {
                if (response.data.isMatch === true) {
                    alert("Deu Match!!!!")
                }
                perfilRecebido()
            }).catch((err) => {
                console.log(err)
            })
    }
    const removeAll = () => {
        const body = {
            id: "PatusZf4mHH6UoZfYC8I",

        }
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Luiz-Mitsuru-Dai/clear", body)
            .then(() => {
                perfilRecebido();
                alert("Resetado com sucesso")

            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Headeres>
                <Botao src={match} onClick={props.trocaTela} Match />
                <h1>Astromach</h1>
            </Headeres>
            <Imagens src={perfil.photo} />

            <p>{perfil.name}, {perfil.age}</p>
            <p>{perfil.bio}</p>
            <Container>
                <Botao src={brokeHeart} onClick={() => choosePerson(false)} X />
                <Botao src={heart} onClick={() => choosePerson(true)} ok />
                <Botao src={restore} onClick={removeAll} Reset />
            </Container>


        </div>
    );
}

export default Profile;