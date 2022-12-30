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
                <span>
                    Estado: Novo
                </span>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 2px 0;
    padding: 5px;
    border-radius: 2px;
    background-color: #000;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: black;
    min-width: fit-content;
    width: 100%;
    height: 80px;
    cursor: pointer;
    transition: ease-in-out .1s;
    span {
        flex: 1;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        border: 1px solid #000;
        border-radius: 4px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        background-color: #f1f1f1;
    }
    :hover{
        span{
            background-color: #f4ab00;
        }
        transform: scale(0.95);
        background-color: #4b4b4b;
    }
`;