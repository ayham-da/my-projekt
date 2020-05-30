import React                     from 'react';

import UsersList                 from '../components/UsersList'
import Image                     from '../../images/ayham-home.jpeg'


const Users = () => {
     const USERS = [
    {
         id: 'u1' , 
         name: 'Ayham' , 
         image: Image , 
         places: 3,
         postTime: 3
     },
     {
        id: 'u2' , 
        name: 'Ayham' , 
        image: Image , 
        places: 3,
        postTime: 3
    },
    {
        id: 'u3' , 
        name: 'Ayham' , 
        image: Image , 
        places: 3,
        postTime: 3
    },
    {
        id: 'u4' , 
        name: 'Ayham' , 
        image: Image , 
        places: 3,
        postTime: 3
    }
    ];
     return (
        <>
        <UsersList items={USERS} />
        </>
    );
};
export default Users;
