
import React                     from 'react';
import { Link }                  from 'react-router-dom'
import {Card, Button }           from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';

import Avatar                    from '../../shared/components/UIElements/Avatar'
import                                './UserItem.css'



const UserItem = props =>{
    return (
        <>
        <li className="m-1">
           
        <Card className="card" style={{ width: '18rem'}}>
        <Link to={`/${props.id}/UProfil`}>
        <Avatar className="user-item__image" image={props.image} alt={props.name} />
        </Link>
            <Card.Body>
            <Card.Title className="title">{props.name}</Card.Title>
            <Card.Text>
                {}
            </Card.Text>
            </Card.Body> 
            
            <Button calssName="mb-2" size="lg" variant="secondary"><Link to={`/${props.id}/places`}>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</Link> </Button>
            
            <Card.Footer>
            <small className="text-muted">{props.postTime} {props.postTime === 1 ? 'Min ago' :'Mins ago' }</small> {/* we can add a date and then set a counter maybe?! */}
            </Card.Footer> 
            
        </Card>
        
        </li>
        </>
    );
};

export default UserItem;


