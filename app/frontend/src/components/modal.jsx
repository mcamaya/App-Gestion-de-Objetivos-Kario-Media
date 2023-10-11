import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const PageForm = () => {
  const [paises, setPaises] = useState([]);
  const apiUrl = `http://localhost:9000/pais`;

  useEffect(() => {
    // Add your API request logic here
  }, []); // The empty array as the second argument means this effect runs only once

  return (
    <div>
      <div className="forms-component" id="forms-component">
        <Container>
          <Row>
            <Col md="12">
              <Form className="row">
                <FormGroup className="col-md-6">
                  <Label htmlFor="name">Usuario</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Username"
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label htmlFor="password">Juego</Label>
                  <Input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup className="col-md-6">
                  <Label htmlFor="confirmpwd">Clasificacion</Label>
                  <Input
                    type="password"
                    className="form-control"
                    id="confirmpwd"
                    placeholder="Confirm Password"
                  />
                </FormGroup>
                <Col md="12">
                  <Button
                    type="submit"
                    className="btn btn-success waves-effect waves-light m-r-10"
                  >
                    Submit
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PageForm;
