import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function PesoIdeal() {
  const [height, setHeight] = useState("");

  return (
    <div>
        <Row>
        <Card className="m-5">
          <Card.Body>Enunciado: Programar um algoritimo que calcule o peso ideal de uma pessoa com abse em sua altura usando a fórmula P=((altura * altura)* 25).(??)</Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira a sua altura.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ex: 1,75"
                name="altura"
                value={height}
                min="0"
                step=".01"
                onChange={(e) => setHeight(e.target.value)}
              />
              <Form.Text className="text-muted">(Em metros)</Form.Text>
            </Form.Group>
          </Form>

          <Card className="mt-5">
            <Card.Body>Seu peso ideal é: {((height * height) * 25).toFixed(1)}</Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default PesoIdeal;
