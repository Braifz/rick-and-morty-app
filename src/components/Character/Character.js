import { Card, Button, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Character = ({ id, name, image, status, species, created }) => {
  return (
    <Col md={4} sm={12} className="character__separation" key={id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <p>Species : {name}</p>
            <p>Status: {status}</p>
            <p> Created: {created}</p>
          </Card.Title>
          <Card.Text>Especie: {species}</Card.Text>
          <Button variant="primary">Go {id}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Character;
