import React, { useEffect } from 'react'
import axios from 'axios'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
function Login() {
  useEffect(() => {
    axios.get('/api/login').then((res) => console.log(res.data))
  }, [])

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
              ></Form.Control>
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Email'
              ></Form.Control>
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
