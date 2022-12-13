import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-top: 2px;
    border-color: white;
    height: 100px;
    width: 100%;
`;

export default function Footer() {
    return (
        <StyledFooter>
            &rarr; Desenvolvido por Ferreira &rarr;
        </StyledFooter>
    )
}

