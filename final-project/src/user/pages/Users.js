import React                     from 'react';

import UsersList                 from '../components/UsersList'
import Image                     from '../../images/ayham-aboutme.jpeg'


const Users = () => {
    const USERS = 
    [{
        id: 'user1' , 
        name: 'Ayham' , 
        image: Image , 
        places: 3
    }];
    return (
        <>
        <UsersList items={USERS} />
        </>
    );
};
export default Users;
