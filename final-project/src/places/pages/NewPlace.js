import React ,{useState}                    from 'react';

import Input from '../../shared/components/FormElement/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../../shared/util/validators';
  import { useForm } from '../../shared/hooks/FormHook';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



import './NewPlace.css'


const NewPlace = () => {

    const [formState, inputHandler] = useForm(
        {
          title: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          },
          address: {
            value: '',
            isValid: false
          }
        },
        false
      );
    
      const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
      };

    return (
        <div>
            <Form className="place-form" onSubmit={placeSubmitHandler}>
                    <Input
                        id="title"
                        element="input"
                        type="text"
                        label="Title"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid title."
                        onInput={inputHandler}
                    />
                    
                    <Input
                        id="description"
                        element="textarea"
                        label="Description"
                        validators={[VALIDATOR_MINLENGTH(5)]}
                        errorText="Please enter a valid description (at least 5 characters)."
                        onInput={inputHandler}
                    />
                    
                    <Input
                        id="address"
                        element="input"
                        label="Address"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid address."
                        onInput={inputHandler}
                    />
                    <br />
                    <Form.File
                        id="exampleFormControlFile1"
                        label="Example file input" 
                    />
                    <br />
                    <Button type="submit" disabled={!formState.isValid}>
                        ADD PLACE
                    </Button>
                
            </Form>
        </div>
    
        )};
export default NewPlace;