import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <Container>
            <div>
                Pokeweb
            </div>
            <ContainerLinks>
                <Links href="#">INICIO</Links>
                <Links href="#">SPORTS</Links>
                <Links href="#">REGRAMENTO</Links>
            </ContainerLinks>
        </Container>
    );
};

const Container = styled.div`
    box-sizing: border-box;
    background-color: black;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 15px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10000000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ContainerLinks = styled.a`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 15px;
`;

const Links = styled.a`
    color: #fff;
    text-decoration: none;
`;

export default Header;