import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Match from './components/Match';
import styled from 'styled-components';
import { Centralizado } from './components/styles'




function App() {
  const [tela, setTela] = useState("Profile")

  const onClickChangePage = () => {
    if (tela === "Profile") {
      setTela("Match")

    } else {
      setTela("Profile");

    }

  };


  if (tela === "Profile") {
    return (
      <Centralizado>
        <Profile trocaTela={onClickChangePage} />

      </Centralizado>
    )
  } else {
    return (
      <Centralizado>
        <Match trocaTela={onClickChangePage} />
      </Centralizado>

    )
  }

}

export default App;
