import React , {useState}            from 'react';

import { Link }                      from 'react-router-dom'
import Modal                         from 'react-bootstrap/Modal'
import {Card, Button,Nav }           from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';

import                                    './PlaceItem.css'


const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

    return(
    <React.Fragment>
      <li className="place-item">
        <div className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button variant="primary" onClick={openMapHandler}>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button >DELETE</Button>

        <Modal show={showMap} onHide={closeMapHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeMapHandler}>
              Close
            </Button>
            <Button variant="primary" onClick={closeMapHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    </li>
  </React.Fragment>
  )
};
export default PlaceItem;