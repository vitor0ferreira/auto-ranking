import styled from "styled-components";

export default function Card(props) {

    return (
        <>
            <StyledCard>
                <span>
                    Modelo: {props.nomeCarro}
                </span>
                <span>
                    Ano: {props.anoCarro}
                </span>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
    justify-content: flex-start;
    gap: 15px;
    border-radius: 5px;
    margin: 10px;
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: black;
    min-width: fit-content;
    width: 150px;
    height: 50px;
    cursor: pointer;
    transition: ease-in-out .1s;
    span {
        height: 100%;
        text-align: center;
        padding: .5rem;
        border: 1px solid #000;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: bold;
    }
    :hover{
        transform: scale(1.15);
        background-color: #f1f1f1;
    }
    
`;