
import React                     from 'react';
import { Link }                  from 'react-router-dom'
import {Container, Row, Col, Card, Badge, Button }    from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';

import Avatar                    from '../../shared/components/UIElements/Avatar'
import './UserItem.css'



const UserItem = props =>{
    return (
        <>
        <li>
        <Link to={`/${props.id}/places`}>   
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
            <small className="text-muted">{props.postTime} {props.postTime === 1 ? 'Min ago' :'Mins ago' }</small> {/* we can add a date and then set a counter maybe?! */}
            </Card.Footer>   
        </Card>
        </Link>
        </li>
        </>
    );
};

export default UserItem;


