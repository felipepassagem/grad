import React, { useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

function Venda() {
    const [price, setPrice] = useState("")
    
    

  return (
    <div>
        <Row>
        <Card className="m-5">
          <Card.Body>Enunciado: Programar um algoritimo que calcule o valor de um produto a vista(5% de desconto), em 3x e em 10x(5% de acréscimo), e suas respectivas parcelas.</Card.Body>
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
            <Card.Body>Valor a vista:{parseFloat(price * .9).toFixed(2)} </Card.Body>
            <Card className="mt-5">
            <Card.Body>Valor total em 3x:{parseFloat(price).toFixed(2)} </Card.Body>
            <Card.Body>Valor parcela em 3x:{parseFloat(price / 3).toFixed(2)} </Card.Body>
            </Card>
            <Card>
            <Card.Body>Valor total em 10x:{parseFloat(price * 1.05).toFixed(2)} </Card.Body>
            <Card.Body>Valor parcela em 10x:{parseFloat(price / 10).toFixed(2)}</Card.Body>
            </Card>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default Venda