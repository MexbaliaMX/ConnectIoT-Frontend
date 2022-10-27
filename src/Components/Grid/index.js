import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row"
import SensorCard from "../SensorCard";




export default function Grid(){
    return(
        <Container>
            <Row>
                <Col xs = {6}>
                    <SensorCard/>
                </Col>
                <Col xs = {6}>
                    <SensorCard/>
                </Col>
            </Row>
            <Row>
                <Col xs = {6}>
                    <SensorCard/>
                </Col>
                <Col xs = {6}>
                    <SensorCard/>
                </Col>
            </Row>
            
            
        </Container>
    );
}