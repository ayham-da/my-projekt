import React from 'react'
import { useParams } from 'react-router-dom'

import Input from '../../shared/components/FormElement/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../../shared/util/validators';
  import { useForm } from '../../shared/hooks/FormHook';

import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



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
const UpdatePlace = () => {
    const placeId = useParams().placeId

    const identifiedplace = Fake_PLACES.find(p => p.id === placeId)

    if (!identifiedplace) {
        return (
            <div>
                <h2>Could not find place!</h2>
            </div>
        )
    }

    return (
        <Form>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => {}}
                value = {identifiedplace.title}
                valid = {true}
            />
            <Input
                id="description"
                element="textarea"
                type="text"
                label="description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={() => {}}
                value = {identifiedplace.description}
                valid = {true}
            />
            <br />
            <Button type="submit" disabled={true}>
                Update PLACE
            </Button>
        </Form>
    )
};
export default UpdatePlace;