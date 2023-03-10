import React from 'react';
import './UsersList.css';
import UserItem from './UsersList';

const UserList = props => {
    if (props.items.length === 0) {
        return <div class="center">
            <h2>No users found.</h2>
        </div>
    }
    return <ul>
        {props.items.map(user => (
            <UserTime
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}

            />
        ))}
    </ul>
};

export default UserList;
