import React , { useEffect, useState }                   from 'react'
import { useParams }            from 'react-router-dom'

import { useForm }              from '../../shared/hooks/FormHook';
import Input                    from '../../shared/components/FormElement/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  }                             from '../../shared/util/validators';


import Form                     from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
import Button                   from 'react-bootstrap/Button'
import Image                    from '../../images/düsseldorf.jpeg'

import './PlaceForm.css'




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
     const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;
  
    const [formState, inputHandler, setFormData] = useForm(
      {
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        }
      },
      false
    );
  
    const identifiedPlace = Fake_PLACES.find(p => p.id === placeId);
      
    useEffect(() => {
      if (identifiedPlace) {
        setFormData(
          {
            title: {
              value: identifiedPlace.title,

              isValid: true
            },
            description: {
              value: identifiedPlace.description,
              isValid: true
            }
          },
          true
        );
      }
       setIsLoading(false);
    }, [setFormData, identifiedPlace]);
  
    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
  
    if (!identifiedPlace) {
      return (
        <div >
            <h2>Could not find place!</h2>
        </div>
      );
    }
  
     if (isLoading) {
       return (
        <div>
           <h2>Loading...</h2>
         </div>
       );
     }
  
    return (
      <Form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </Form>
    );
  };
  
  export default UpdatePlace;