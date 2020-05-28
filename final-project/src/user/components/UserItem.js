import React                     from 'react';
import { Link }                  from 'react-router-dom'

import Avatar                    from '../../shared/components/UIElements/Avatar'


import                                'bootstrap/dist/css/bootstrap.min.css'
import './UserItem.css'
import {Container, Row, Col, Card, Badge, Button }    from 'react-bootstrap'

const UserItem = props =>{
    return (
        <>
        <li>
        <Card className="card" style={{ width: '18rem'}}>
        <Avatar className="user-item__image" image={props.image} alt={props.name} />
    <Card.Body>
    <Card.Title className="title">{props.name}</Card.Title>
      <Card.Text>
        {}
      </Card.Text>
    </Card.Body>
    <Button calssName="mb-2" size="lg" variant="secondary">{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</Button>
    <Card.Footer>
      <small className="text-muted">Lastest post</small> {/* we can add a date and then set a counter maybe?! */}
    </Card.Footer>
  </Card>
        </li>
        </>
    );
};

export default UserItem;




/* 

import React                     from 'react';
import                                'bootstrap/dist/css/bootstrap.min.css'
import                                './UserItems.css'

import {Container, Row, Col, Card, Badge, Button }    from 'react-bootstrap'

const UserItem = props =>{
    return (
        <>
        <li>
            <Card className="h-100 shadow-sm bg-white rounded">
                
                <Card.Img variant="top" src={props.image} alt={props.name}/>
                <Card.Body className="d-flex flex-column">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </Card.Body>
            </Card>
        </li>
        </>
    );
};

export default UserItem; */