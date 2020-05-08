import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('if it renders without any errors', () => {
    render(<ContactForm />);
})


test('testing for form fill and submitting form', () =>{
    let { getByLabelText } = render(<ContactForm/>);
    
    
})