import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'user1',
            name: 'Evan St Martin',
            image: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;


}

export default Users;