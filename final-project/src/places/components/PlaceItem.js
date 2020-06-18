import React , {useState}            from 'react';

import Modal                         from 'react-bootstrap/Modal'
import Map                           from '../../shared/components/UIElements/Map';

import { Link }                      from 'react-router-dom';
import {Card,Button}                 from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';

import                                    './PlaceItem.css'


const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };



    return(
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content" text="light">
          <Card.Img className="place-item__image" variant="top" src={props.image} alt={props.title} />
          <Card.Body >
            <Card.Text className="place-item__info">
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
            </Card.Text>
          </Card.Body>
          <div className="place-item__actions">
            <Button variant="success" onClick={openMapHandler}>VIEW ON MAP</Button>
            <Link to={`/places/${props.id}`}>
            <Button variant="info">EDIT</Button>
            </Link>
            <Button variant="danger" onClick={showDeleteWarningHandler}>DELETE</Button>
            
          <Modal show={showMap}  onHide={closeMapHandler}>
            <Modal.Header className="modal-header"  closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="modal-body">
              <p>{props.address}</p>
              <p>Lat : {props.lat} , Lng : {props.lng}</p>
            </Modal.Body>

            <div className="map-container">
              <Map center={props.coordinats} zoom={16}/>
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeMapHandler}>
                Close
              </Button>
              
              <Button variant="success" onClick={closeMapHandler} target="_blank"
                href={`https://www.google.com/maps/place/${props.title}/@${props.lat},${props.lng},16z` }
              >
                Open in Google Map
              </Button>
              
            </Modal.Footer>
          </Modal>

          <Modal show={showConfirmModal}  onHide={cancelDeleteHandler} className="delete-modal">
            <Modal.Header className="modal-header"  closeButton>
              <Modal.Title>
                <h2>Are you sure?</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <p>
                Do you want to proceed and delete this place? Please note that it
                can't be undone thereafter.
              </p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button variant="secondary" onClick={cancelDeleteHandler}>
              CANCEL
              </Button>
              <Button variant="danger" onClick={confirmDeleteHandler}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default PlaceItem;