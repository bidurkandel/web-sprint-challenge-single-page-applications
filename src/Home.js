import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home(){
    const history = useHistory()

    const routeToForm = () =>{
        history.push("/pizza")
    }

    return(
        <Container>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=714&q=80" alt="pizza"/>
            <button onClick={routeToForm} id="orderButton">Order Now</button>
        </Container>
    )
    
}

const Container = styled.div`
    display:flex;
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
    img{
        object-fit:cover;
        width:50%;
    }
    button{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100px;
        background-color:#A27035;
    }
`;