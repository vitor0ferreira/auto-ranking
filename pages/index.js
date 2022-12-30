import React from "react"
import Footer from "../public/components/footer/footer"
import styled from "styled-components";
import Card from "../public/components/cardCarros/Cards";
import data from "../public/data/vehicles.json"

export default function Home() {
  return (
    <>
      <StyledMain>
        <RankingArea dados={data}/>
      </StyledMain>
      <Footer/>
    </>
  )
}


const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#202020, #121212);
  height: 90vh;
  width: 100vw;
`;

function RankingArea(props) {

  const veiculos = props.dados;

  return (
      <StyledRankArea>
        <div style={{width: "50%", height: "100%"}}>
          {veiculos.carros.map((nomesData)=> {
            return (
              <Card nomeCarro={nomesData.nome} anoCarro={nomesData.ano}/>
            )
          })
          }
        </div>
      </StyledRankArea>
  )
}

const StyledRankArea = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  background-color: #1aaa4e;
  border-radius: 5%;
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.6);
`;