import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export const SearchComponent = ({ setLocation, getLocation }) => {
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Form>
      <InputGroup className="mb-3 location-input">
        <Form.Control
          placeholder="Search any location"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          onClick={getLocation}
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};
