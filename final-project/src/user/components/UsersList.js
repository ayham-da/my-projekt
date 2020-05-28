import React                     from 'react';
import UserItem                  from './UserItem'

const UsersList = props =>{
     if (props.items.length === 0){
         return ( 
         <>
         <div>
             <h2>No Users found!!</h2>
         </div>
         </>
         );
     }else{
     return(
         <>
         <ul>
             {props.items.map(user =>{
                 return(<>
                 <UserItem 
                 key={user.id} 
                 id={user.id} 
                 image={user.image} 
                 name={user.name} 
                 placeCount={user.places} />
                 </>
                 )
                 
             })}
         </ul>
         </>
     )
    }
    
};


export default UsersList