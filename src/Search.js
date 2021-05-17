import React from 'react';

import { Form, Col, Button } from 'react-bootstrap';

export default function Search() {
  const onFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            Pokemon
          </Form.Label>
          <Form.Control
            id="inlineFormInputName"
            placeholder="Search a pokemon here ..."
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button
            type="submit"
            onClick={() => {
              console.log();
            }}
          >
            Submit
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
