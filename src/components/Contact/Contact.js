import React from 'react';
import { Form } from 'react-bootstrap';
import Map from './Map';

const Contact = () => {
    
    return (
       <div>
           <div className="container">
           <div className="row my-5">
                <div className="col-md-6">
                    <h3>Our Address</h3>
                </div>
                <div className="col-md-6">
                <div className="d-flex justify-content-center">
                    
                    <Form  style={{width:'100%'}}>
                    <h4>Send Your Enquiry</h4>
                        <Form.Group controlId="formGroupName">
                            <Form.Label style={{color:'white'}}>Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="name" 
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label style={{color:'white'}}>Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label style={{color:'white'}}>Message</Form.Label>
                            <Form.Control
                            type="textarea"
                            placeholder="Message"
                            name="message"
                            as="textarea" rows={3}
                            required
                            />
                        </Form.Group>
                        <button style={{padding:"5px 30px"}} className="btn-main mt-2">Send</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    <Map/>
</div>
    );
};

export default Contact;