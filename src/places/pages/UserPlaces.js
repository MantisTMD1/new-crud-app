import React from 'react';
import PlaceList from '../../user/components/PlaceList';

const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Death Star',
        description: 'Very cool planet',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
        address: 'oceans of the moon Kef Bir in the Endor system',
        location: {
            lat: -401.72,
            lng: -561.84
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Death Star',
        description: 'Very cool planet',
        imageUrl: 'https://cdn.wallpapersafari.com/47/10/M8kbWl.png',
        address: 'oceans of the moon Kef Bir in the Endor system',
        location: {
            lat: -401.72,
            lng: -561.84
        },
        creator: 'u2',
    }

]

const UserPlaces = () => {
    return <PlaceList items={DUMMY_DATA} />;

};

export default UserPlaces;
