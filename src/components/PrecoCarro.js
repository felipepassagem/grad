import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function PrecoCarro() {
    const [price, setPrice] = useState(0)

  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>
            Enunciado: Programar um algoritimo que calcule o valor de um produto
            a vista(5% de desconto), em 3x e em 10x(5% de acréscimo), e suas
            respectivas parcelas.
          </Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o valor do carro para a fábrica: </Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                min="0"
                step=".01"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Card className="mt-5">
          <Card.Body>Valor final do carro: {parseFloat((price * 1.45) * 1.28).toFixed(2)} </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default PrecoCarro;
