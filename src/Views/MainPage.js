import Container from "react-bootstrap/Container";
import FloatingButton from "../Components/FloatingButton";
import Grid from "../Components/Grid";
import NavbarApp from "../Components/NavBar";

export default function MainPage(){
    return (
        <Container fluid>
            <NavbarApp type="home"/>
            <Grid/>
            <FloatingButton/>
        </Container>
    );
}