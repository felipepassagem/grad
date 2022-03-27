import React, { useState, useEffect } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

function DtoR() {
  const [price, setprice] = useState(0);
  const [doll, setDoll] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=71c2114a0f035aeef8da",
    })
      .then((resp) => {
        setDoll(resp.data.USD_BRL)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>
            Enunciado: Programe um algoritimo que transforme o preço de um produto em USD para BRL.
          </Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>

        <Card className="mb-3">
            <Card.Body>
              Valor atual do dolar:{" "}
              {parseFloat(doll).toFixed(2)}{" "}
            </Card.Body>
          </Card>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o valor do produto em reais.</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={price}
                min=""
                step=".5"
                onChange={(e) => setprice(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>

          <Card className="mb-3">
            <Card.Body>
              Valor do produto em dolares:{" "}
              {parseFloat(price * doll).toFixed(2)}{" "}
            </Card.Body>
          </Card>

          
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default DtoR;
