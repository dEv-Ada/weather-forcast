import React from "react";
import { Spinner } from "react-bootstrap";

export const LoaderComponent = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="primary" />
      <p className="loading-text">Fetching Data...</p>
    </div>
  );
};
