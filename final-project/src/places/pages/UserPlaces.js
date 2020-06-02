import React                     from 'react';
import { useParams } from 'react-router-dom';

import Image  from '../../images/düsseldorf.jpeg'

import UserPlacesList            from '../components/UserPlacesList'
import './UserPlaces.css'


const Fake_PLACES = [
    {
      id: 'p1',
      title: 'Volksgarten , Düsseldorf',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: Image ,
      address: '40225 Düsseldorf',
      location: {
        lat: 51.2062312,
        lng: 6.7967774
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Volksgarten , Düsseldorf',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: Image ,
      address: '40225 Düsseldorf',
      location: {
        lat: 51.2062312,
        lng: 6.7967774
      },
      creator: 'u2'
    }
  ];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = Fake_PLACES.filter(place => place.creator === userId);
    return (
    <>
    <UserPlacesList items={loadedPlaces} />
    </>
    );
};
export default UserPlaces;