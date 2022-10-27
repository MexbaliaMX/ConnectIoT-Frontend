import * as React from 'react';
import LoginForm from '../Components/LoginForm';
import NavbarApp from '../Components/NavBar';
import Container from 'react-bootstrap/Container';



export default function Login() {
    return(
        <Container fluid>
            <NavbarApp type="login"/>
            <div>
                <LoginForm/>
            </div>
        </Container>
    )
}