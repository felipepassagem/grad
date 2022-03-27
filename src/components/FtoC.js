import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function FtoC() {
  const [temp, setTemp] = useState(32);
  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>
            Enunciado: Programe um algoritimo que transforme a temperatura em F para C. (C = (F - 32) * 5/9)
          </Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o valor do produto.</Form.Label>
              <Form.Control
                type="number"
                name="temp"
                value={temp}
                min=""
                step=".5"
                onChange={(e) => setTemp(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Card>
            <Card.Body>Temperatura em Celsius: {parseFloat((temp - 32) * 5/9).toFixed(2)} </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default FtoC;
