import styled from "styled-components";

export default function Card(props) {

    return (
        <>
            <StyledCard>
                <img src={props.fotoCarro} ></img>
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
    :first-of-type{
        margin-top: 0;
    }
    margin: 2px 0;
    gap: 5px;
    padding: 5px;
    border-radius: 2px;
    background-color: #000;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: black;
    min-width: fit-content;
    width: 100%;
    height: 80px;
    cursor: pointer;
    transition: ease-in-out .3s;
    span {
        flex: 1;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
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
        background-color: #fff;
    }
    img {
        object-fit: cover;
        height: 100%;
        width: auto;
        max-width: 90px;
        background-color: #d1d1d1;
    }
`;