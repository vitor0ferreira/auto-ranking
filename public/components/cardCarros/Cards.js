import styled from "styled-components";

export default function Card(props) {
    return (
        <StyledCard>
            {props.nomeCarro}
            {props.anoCarro}
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 10px;
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    color: black;
    width: 90px;
    height: 90px;
`;