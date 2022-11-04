import React from "react";
import "./login.css";
import "../forms/forms.css"
import {Cabecalho} from '../textos/Textos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login (){
    return(
        <Container >
            <Row>
                <Col>
                    <Cabecalho texto ="Login"/>
                </Col>
            </Row>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <div classname="row">
                <form action="">
                    <div classname="col-2">
                        <label for="fname">Login</label>
                    </div>
                    <div className="col-8">
                        <input type="text" id="fname" name="login" placeholder="e-mail para login"/>
                    </div>
                    <div classname="col-2">
                        <label for="fname">Senha</label>
                    </div>
                    <div className="col-8">
                        <input type="password" id="fname" name="senha" placeholder="Senha"/>                    
                    </div>
                    <div classname="col-2">
                        
                    </div>
                </form>
            </div>
        </Container>
        
        
        
    )
}

