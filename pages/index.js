import React from "react"
import Footer from "../public/components/footer/footer"
import styled from "styled-components";
import Card from "../public/components/cardCarros/Cards";
import data from "../public/data/vehicles.json"

export default function Home() {
  return (
    <>
      <div>
        <RankingArea dados={data}/>
        <Footer/>
      </div>
    </>
  )
}


const StyledMain = styled.div`
  display: flex;
  background: radial-gradient(#202020, #121212);
  height: 90vh;
  width: 100vw;
`;

function RankingArea(props) {

  const veiculos = props.dados;

  return (
    <StyledMain>
      {veiculos.carros.map((nomesData)=> {
        return (
          <Card nomeCarro={nomesData.nome} anoCarro={nomesData.ano}/>
        )
        })
      }
    </StyledMain>
  )
}