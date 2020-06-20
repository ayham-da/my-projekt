import React                     from 'react';
import { Link }                  from 'react-router-dom'


import PlaceItem from './PlaceItem'

import {Card,Button}             from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';
import './UserPlacesList.css'


const UserplacesList = props => {
    if (props.items.length === 0){
        return ( 
        <>
        <div className="center">
        <Card text="light">
        <Card.Body>
           <Card.Text >
               {<h2>No Places found!! , Maybe Create One!</h2>}
           </Card.Text>
           <Link  to={`/places/new`}>
                <Button >share Place</Button>
           </Link>
           
           </Card.Body>
            
       </Card>
        </div>
        </>
        );
    }else{
        return(
            <>
            <ul className="places-list">
                {props.items.map(place =>{
                    return(<>
                    <PlaceItem 
                        key={place.id} 
                        id={place.id} 
                        image={place.imageUrl} 
                        title={place.title} 
                        description={place.description} 
                        address={place.address}
                        creatorId={place.creator}
                        coordinats={place.location}
                        lat={place.location.lat}
                        lng={place.location.lng}
                    />
                    </>
                    )
                    
                })}
            </ul>
            </>
        )
       }
};
export default UserplacesList;