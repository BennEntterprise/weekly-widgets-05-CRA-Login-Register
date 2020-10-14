import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
function Register() {
  useEffect(() => {
    axios.get('/api/register').then((res) => console.log(res.data))
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <h4>Register</h4>
          <Form>
            <Form.Group controlId='name'>
              <Form.Text>What is your full name?</Form.Text>
              <Form.Control type='text' placeholder='Full Name' />
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Text>Please Type your email</Form.Text>
              <Form.Control type='text' placeholder='Email' />
            </Form.Group>
            <Form.Group controlId='emailVerify'>
              <Form.Text>Verify your email</Form.Text>
              <Form.Control type='text' placeholder='Confirm Email' />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Text>Choose a Strong Password</Form.Text>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='passwordVerify'>
              <Form.Text>Verify your password</Form.Text>
              <Form.Control type='password' placeholder='Confirm Password' />
            </Form.Group>
          </Form>
          <Button>Submit</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
