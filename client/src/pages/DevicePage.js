import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
    "id": 5,
    "name": "12 pro",
    "price": 10000,
    "rating": 0,
    "img": "a86155c0-0089-4366-a769-5a8680e8f6b9.jpg",
    "typeId": 2,
    "brandId": 2
  }
  const description = [
    {
      id: 1, title: 'Оперативная память', description: '5 Гб'
    },
    {
      id: 2, title: 'Камера', description: '12 Мп'
    },
    {
      id: 3, title: 'Процессор', description: 'Pentium 3'
    }
  ]
  return (
      <Container>
        <Row>
          <Col md={4} className="mt-3">
            <Image width={300} height={300} src={device.img}/>
          </Col>
          <Col md={4}>
            <div className="d-flex flex-column align-items-center">
              <h2>{device.name}</h2>
              <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    background: `url(${bigStar}) no-repeat center center`,
                    width: 240,
                    height: 240,
                    backgroundSize: 'cover',
                    fontSize: 64
                  }}
              >
                {device.rating}
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style={{
                  width: 300,
                  height: 300,
                  fontSize: 32,
                  border: '5px solid lightgray'
                }}
            >
              <h3>От: {device.price} руб.</h3>
              <Button variant={"outline-dark"}>Добавить в корзину</Button>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex flex-column m-3">
          <h1>Характеристики</h1>
          {description.map((info, index) =>
              <Row key={info.id} style={{
                background: index % 2 === 0 ? 'lightgray' : 'transparent',
                padding: 10
              }}>
                {info.title}: {info.description}
              </Row>
          )}
        </Row>
      </Container>
  );
};

export default DevicePage;