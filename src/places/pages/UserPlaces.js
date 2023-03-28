import React from 'react';
import PlaceList from '../../user/components/PlaceList';
import { useParams } from 'react-router-dom';


const DUMMY_DATA = [
    {
        id: 'p1',
        title: 'Endor',
        description: 'Very cool planet',
        imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-rc3hp9_2c8d7df8.jpeg?region=0%2C0%2C1280%2C861',
        address: '1234 A galaxy far far away',
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
    const userId = useParams().userId;
    const loadPlaces = DUMMY_DATA.filter(place => place.creator === userId);
    return <PlaceList items={loadPlaces} />;

};

export default UserPlaces;
