import React, { useReducer, useEffect } from 'react';




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