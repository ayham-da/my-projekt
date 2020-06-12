import React ,{useState}                    from 'react';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import './NewPlace.css'


const NewPlace = () => {

    const [enteredValue , setEnteredValue] = useState('')
    const [isValid , setIsValid] = useState(false)


    const changHandler = event => {}

    return (
        <div>
            <Form className="place-form">
                <Form.Group>
                <Form.Row>
                    <Form.Label column lg={2}>
                        Normal Text
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Normal text" onChange={changHandler} />
                    </Col>
                    </Form.Row>
                    <br />
                    <Form.File
                        id="exampleFormControlFile1"
                        label="Example file input" 
                    />
                </Form.Group>
            </Form>
        </div>
    
        )};
export default NewPlace;