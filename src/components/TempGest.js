import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function TempGest() {
    const [week, setWeek] = useState(1)
  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>
            Enunciado: Programe um algoritimo que transforme o tempo de gestação em semanas para meses e dias.
          </Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o tempo de gestação.</Form.Label>
              <Form.Control
                type="number"
                name="temp"
                value={week}
                min="0"
                step="1"
                onChange={(e) => setWeek(e.target.value)}
              />
              <Form.Text className="text-muted">(Em semanas)</Form.Text>
            </Form.Group>
          </Form>

          <Card>
            <Card.Body>Tempo de gestação em meses: {parseFloat((week / 4).toFixed(2))} </Card.Body>
            <Card.Body>Tempo de gestação em dias: {parseFloat((week * 7).toFixed(2))} </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default TempGest