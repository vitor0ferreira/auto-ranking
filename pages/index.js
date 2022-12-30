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
        <div style={{
          width: "50%",
          height: "100%",
          overflow: "scroll",
          padding: "5px",
          backgroundColor: "#fff",
          overflowX: "hidden"
          }}>

          {veiculos.carros.map((dadosCarros)=> {
            return (
              <Card nomeCarro={dadosCarros.nome} anoCarro={dadosCarros.ano} fotoCarro={dadosCarros.foto} />
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
  padding: 10px;
  background: linear-gradient(90deg, rgba(23,25,111,1) 0%, rgba(24,30,166,1) 51%, rgba(7,10,131,1) 100%);
  filter: saturate(0.6);
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.6);
`;