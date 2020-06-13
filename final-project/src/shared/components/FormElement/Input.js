import React, { useReducer, useEffect } from 'react';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
        <Form.Control 
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
        <Form.Control  
        as="textarea"
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <Form.Group >
      <Form.Label htmlFor={props.id} column lg={2} className={`${!inputState.isValid && inputState.isTouched &&
          'form-control--invalid'}`}>
            {props.label}
      </Form.Label>
      <div className={`${!inputState.isValid && inputState.isTouched &&
          'form-contrdsol--invalid'}`}>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
      </div>
    </Form.Group>           
  );
};

export default Input;
