import React                     from 'react';

import { useForm }             from '../../shared/hooks/FormHook';

import Input                   from '../../shared/components/FormElement/Input';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL
  }                            from '../../shared/util/validators';
import Form                    from 'react-bootstrap/Form'
import Button                  from 'react-bootstrap/Button'
import Card                  from 'react-bootstrap/Card'




import './Auth.css'

const Auth = () => {
    const [formState, inputHandler, setFormData] = useForm(
        {
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
        false
      );
    return (

        <Card className="login-form">
            <Card.Header as="h2" className="sign__header">Login</Card.Header>
            <Card.Body>
                <Form >
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a name."
                    onInput={inputHandler}
                />
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="E-mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid Email."
                    onInput={inputHandler}
                    />
                    <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password, at least 5 characters."
                    onInput={inputHandler}
                    />
                <Button variant="primary" type="submit" disabled={!formState.isValid}>LOGIN</Button>
                </Form>
            </Card.Body>
        </Card>
        
        
    )
    
};
export default Auth;