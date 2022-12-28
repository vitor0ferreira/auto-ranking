import styled from "styled-components";

export default function Card(props) {

    return (
        <>
            <StyledCard>
                <span>
                    {props.nomeCarro}<br/>
                    Ano: {props.anoCarro}
                </span>
                <img src="https://garagem360.com.br/wp-content/uploads/2022/04/554574.jpg" alt="carro"/>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;
    gap: 15px;
    border-radius: 5px;
    margin: 10px;
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: black;
    min-width: fit-content;
    width: 250px;
    height: 90px;
    cursor: pointer;
    transition: ease-in-out .1s;
    span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: bold;
    }
    img{
        object-fit: contain;
        height: 100%;
        width: auto;
    }
    :hover{
        transform: scale(1.15);
        background-color: #f1f1f1;
    }
    
`;