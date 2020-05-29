import React                     from 'react';
import UserItem                  from './UserItem'
import {Container, Row, Col, Card, Badge, Button }    from 'react-bootstrap'
import                                'bootstrap/dist/css/bootstrap.min.css';
import './UsersList.css'


const UsersList = props =>{
     if (props.items.length === 0){
         return ( 
         <>
         <div className="center">
         <Card>
         <Card.Body>
            <Card.Text>
                {<h2>No Users found!!</h2>}
            </Card.Text>
            </Card.Body>
             
        </Card>
         </div>
         </>
         );
     }else{
     return(
         <>
         <ul className="users-list">
             {props.items.map(user =>{
                 return(<>
                 <UserItem 
                 key={user.id} 
                 id={user.id} 
                 image={user.image} 
                 name={user.name} 
                 placeCount={user.places} 
                 postTime={user.postTime}/>
                 </>
                 )
                 
             })}
         </ul>
         </>
     )
    }
    
};


export default UsersList