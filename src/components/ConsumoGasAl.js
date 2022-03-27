import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function ConsumoGasAl() {
    const [dist, setDist] = useState(0)
    const [ precoAl, setPrecoAl] = useState(0)
    const [ precoGas, setPrecoGas] = useState(0)
  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>
            Enunciado: Programe um algoritimo que calcule o custo de uma viagem de acordo com o tipo de combustível usa. (Alcool: 9km/L, Gasolina: 11Km/L )
          </Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira a distância da viagem em Km.</Form.Label>
              <Form.Control
                type="number"
                name="dist"
                value={dist}
                min="0"
                step="1"
                onChange={(e) => setDist(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o valor atual da gasolina:</Form.Label>
              <Form.Control
                type="number"
                name="dist"
                value={precoGas}
                min="0"
                step=".001"
                onChange={(e) => setPrecoGas(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o valor atual do alcool:</Form.Label>
              <Form.Control
                type="number"
                name="dist"
                value={precoAl}
                min="0"
                step=".001"
                onChange={(e) => setPrecoAl(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            
          </Form>

          <Card>
            <Card.Body>Custo da viagem com gasolina: {parseFloat((parseInt(dist) / 11) * precoGas).toFixed(2)} </Card.Body>
          </Card>
          <Card>
            <Card.Body>Custo da viagem com alcool: {parseFloat((parseInt(dist) / 9) * precoAl).toFixed(2)} </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default ConsumoGasAl