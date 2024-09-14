import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const params = useParams();
  const product = products.find(p => p._id === params.id)

  return (
    <>
      <Link className='btn btn-ligh my-3' to='/'>
        Go Back
      </Link>
      <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Card>
                  
                </Card>
              </ListGroup.Item>
            </ListGroup>
          </Col>
      </Row>
    </>
  )
}

export default ProductScreen