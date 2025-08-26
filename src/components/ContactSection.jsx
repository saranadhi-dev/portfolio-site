import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BorderSection from './CustomBorders';

function ContactSection() {
    return (
        <div id='contact'>
            <div className='container'>
                <div className='row'>
                    <h2 className='mb-3'>Contact me</h2>
                    <div className='mb-5'>

                        <Form className='bg-dark text-light p-5 border shadow'>
                            <Form.Group className='mb-3 col-lg-6' controlId='name'>
                                <Form.Label className='w-100 text-start text-capitalize'>Name</Form.Label>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-6' controlId='emailAddress'>
                                <Form.Label className='w-100 text-start text-capitalize'>Email address</Form.Label>
                                <Form.Control type='email' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='textarea'>
                                <Form.Label className='w-100 text-start'>Message</Form.Label>
                                <Form.Control as='textarea' rows={3} />
                            </Form.Group>
                            <Button variant='primary' type='submit'>Submit</Button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;