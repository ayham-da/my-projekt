import React,{ useState, useContext }              from 'react';

import { useForm }             from '../../shared/hooks/FormHook';

import Input                   from '../../shared/components/FormElement/Input';
import {
    // VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL
  }                            from '../../shared/util/validators';
import Form                    from 'react-bootstrap/Form'
import Button                  from 'react-bootstrap/Button'
import Card                  from 'react-bootstrap/Card'
import { AuthContext } from '../../shared/components/Context/auth-Context';




import './Auth.css'

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

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

      const switchModeHandler = () => {
        if (!isLoginMode) {
          setFormData(
            {
              ...formState.inputs,
              name: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid
          );
        } else {
          setFormData(
            {
              ...formState.inputs,
              name: {
                value: '',
                isValid: false
              }
            },
            false
          );
        }
        setIsLoginMode(prevMode => !prevMode);
      };
    

      const signSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
      };
    return (

        <Card className="login-form">
            <Card.Header as="h2" className="sign__header">{isLoginMode ? 'Sign In' : 'Sign Up'}</Card.Header>
            <Card.Body>
                <Form onSubmit={signSubmitHandler}>
                {!isLoginMode && (
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorText="Please enter your name, at least 6 characters."
                    onInput={inputHandler}
                />
                )}
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
                <Button variant="primary" type="submit" disabled={!formState.isValid}>
                    {isLoginMode ? 'Sign In' : 'Sign Up'}</Button>
                </Form>
                
                <p>{isLoginMode ? 'You dont have an Account!' : 'You have an Account!'}</p>
                <p>{isLoginMode ? 'create a New Account' : 'Login Now'}</p>
                <Button variant="success" inverse onClick={switchModeHandler}>
                    {isLoginMode ? 'Sign Up' : 'Sign In'}
                </Button>
            </Card.Body>
        </Card>
        
        
    )
    
};
export default Auth;