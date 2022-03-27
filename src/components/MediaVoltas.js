import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

function Media_Voltas() {
  const [media, setMedia] = useState("");
  const [data, setData] = useState({
    volta1: "",
    volta2: "",
    volta3: "",
  });

  useEffect(() => {
    if (
      data.volta1 > 0 &&
      data.volta1 !== "" &&
      data.volta2 > 0 &&
      data.volta2 !== "" &&
      data.volta3 > 0 &&
      data.volta3 !== ""
    ) {
      setMedia(
        (parseInt(data.volta1) +
          parseInt(data.volta2) +
          parseInt(data.volta3)) /
          3
      );
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    console.log(data);
    if (media > 0 && data.volta1 > 0 && data.volta1 > 0 && data.volta1 > 0) {
      alert("O tempo médio das voltas é de " + media.toFixed(2) + " segundos");
    } else {
      alert("Confira os tempos das voltas.");
    }
  };

  return (
    <div>
      <Row>
        <Card className="m-5">
          <Card.Body>Enunciado: Programar um algoritimo que calcule a média de tempo de 3 voltas(??)</Card.Body>
        </Card>
      </Row>
      <Row className="pt-4">
        <Col md={4}></Col>
        <Col md={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o tempo da volta 1.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Volta 1"
                value={data.volta1}
                name="volta1"
                min="0"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">(Em segundos)</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o tempo da volta 2.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Volta 2"
                value={data.volta2}
                name="volta2"
                min="0"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">(Em segundos)</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira o tempo da volta 3.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Volta 3"
                value={data.volta3}
                name="volta3"
                min="0"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">(Em segundos)</Form.Text>
            </Form.Group>

            <Button variant="primary" onClick={handleClick}>
              Calcular média
            </Button>
          </Form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Media_Voltas;
