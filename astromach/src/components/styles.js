import React from 'react'
import styled from 'styled-components'

export const Centralizado = styled.div`
display:flex;
height:500px;
width:340px;
border: 5px solid purple;
box-shadow:0 5px 15px 0;
margin-top: 4%;
margin-left:40%;
color: black;
font-weight:bold;
background-color:#FFC0CB;

`
export const Imagens = styled.img`
width:220px;
height:230px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
align-self:center;
margin-top:10%;
margin-left:15%;
background-color:#FFB6C1;
border:10px solid purple;
box-shadow: 4px 0 4px black;
`
export const Perfis = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:10px;
`

export const MatchImagem = styled.img`
display:flex;
border-radius:50px;
width:50px;
height:50px;
`
export const Headeres = styled.header`
display:flex;
align-items:center;
justify-content:space-around;
width:340px;
height:50px;
color:purple;
`
export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin-top:5%;
margin-bottom:5%;
`
export const Botao = styled.img`
cursor: pointer;
`
export const Voltar = styled.header`
display:flex;
align-items:center;
width:340px;
height:50px;
color:purple;
`