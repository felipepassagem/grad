import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function Venda() {
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [discount, setDiscount] = useState("")
    const [finalValeu, setFinalValue] = useState("")
    const [partial, setPartial] = useState("")

    const handleClick = () => {
        if(price > 0 && price !== ""){
            if(quantity > 0 && quantity !== ""){
                if(discount <= 0 || discount === ""){
                    setFinalValue(parseInt(price) * parseInt(quantity))
                    console.log(finalValeu)
                } else {
                    setFinalValue(parseInt(price) * parseInt(quantity) * ((100 - discount) * .01) )
                }
            }
        }
    }
    

  return (
    <div>
        <Row>
        <Card className="m-5">
          <Card.Body>Enunciado: Programar um algoritimo que calcule o valor total, com desconto e o valor das parcelas, caso exista, de uma compra.</Card.Body>
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira a qunatidade de produtos.</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                name="quantity"
                min="0"
                step="1"
                onChange={(e) => setQuantity(e.target.value)}
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira a porcentagem de desconto.</Form.Label>
              <Form.Control
                type="number"
                name="discount"
                min="0"
                max="100"
                step="1"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira a porcentagem de desconto.</Form.Label>
              <Form.Control
                type="number"
                name="partial"
                min="1"
                max="36"
                step="1"
                onChange={(e) => setPartial(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            
            <Button onClick={handleClick}>Calcular</Button>

          </Form>

          <Card className="mt-5">
            <Card.Body>Valor final: R${finalValeu && parseFloat(finalValeu).toFixed(2)}</Card.Body>
            <Card.Body>Valor por parcela: R${partial && parseFloat((parseFloat(finalValeu).toFixed(2)) / partial).toFixed(2)}</Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  )
}

export default Venda