import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export default function SensorCard(props){
    return(
        <Card>
            <Card.Header>Sensor</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={6}>
                        Valor sensado
                    </Col>
                    <Col xs = {6}>
                        Grafica
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}