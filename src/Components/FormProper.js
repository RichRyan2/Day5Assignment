import React, { useState } from "react";
import {Button, Container, FloatingLabel, Form} from 'react-bootstrap'

const FormProper = (props) => 
{
    const [state, setState] = useState({
        id: null,
        name: '',
        dateOfBirth: '',
        email: '',
        contactNumber: '',
        aboutSelf: '',
        error: 
        {
            nameError: '',
            dateOfBirthError: '',
            emailError: '',
            contactNumberError: '',
            aboutSelfError: '', 
        },
        formValid: false
    })
    function validateName (name) {
        let nameError = state.error.nameError
        let formValid = state.formValid
        var pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

        if(name.trim() === '') {
            nameError = 'Name is required'
            formValid = false
        }
        else if(!pattern.test(name)) {
            nameError = 'Name should only contain letters.'
            formValid = false
        }
        else {
            formValid = true;
            nameError = ''
        }
        setState({
            ...state,
            name,
            formValid,
            error: {...state.error, nameError}
        })
        return formValid
    }
    function validateDateOfBirth (dateOfBirth) 
    {
        let dateNow = Date.now()
        let dateofBirthMs = new Date(dateOfBirth)
        let dateOfBirthError = state.error.dateOfBirthError
        let formValid = state.formValid

        if(dateOfBirth.trim() === '') {
            dateOfBirthError = 'Date is required.'
            formValid = false
        }
        else if(dateOfBirth.trim().length > 10) {
            dateOfBirthError = 'Invalid Date.'
            formValid = false
        }
        else if(dateofBirthMs > dateNow) {
            dateOfBirthError = 'Date should not exceed current date.'
            formValid = false
        }
        else {
            dateOfBirthError = ''
            formValid = true
        }
        setState({
            ...state,
            dateOfBirth,
            formValid,
            error: {...state.error, dateOfBirthError}
        })
        return formValid
    }
    function validateContactNumber (contactNumber) {
        let contactNumberError = state.error.contactError
        let formValid = state.formValid
        var pattern = /^(9)\d{9}$/u

        if(contactNumber.trim() === '') {
            contactNumberError = 'Contact number is required.'
            formValid = false
        }
        else if(!pattern.test(contactNumber)) {
            contactNumberError = 'Contact number should only be 10 digits, and only contains numbers.';
            formValid = false
        }
        else {
            formValid  = true
            contactNumberError = ''
        }
        setState({
            ...state,
            contactNumber, 
            formValid,
            error: {...state.error, contactNumberError}
        })
        return formValid
    }
    function validateEmail (email) {
        let formValid = state.formValid
        let emailError = state.formValid
        var pattern  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email.trim() === '') {
            emailError = 'Email is required.'
            formValid = false
        }
        else if(!pattern.test(email)) {
            formValid = false;
            emailError = 'Your email address is invalid.'
        }
        else {
            formValid = true
            emailError = ''
        }
        setState({
            ...state,
            email,
            formValid, 
            error: {...state.error, emailError}
        })
        return formValid
    }
    function validateAboutSelf (aboutSelf) {
        let formValid = state.formValid
        let aboutSelfError = state.aboutSelfError

        if (aboutSelf.trim() === '') {
            formValid = false
            aboutSelfError = 'About self cannot be empty.'
        }
        else{
            formValid = true
            aboutSelfError = ''
        }
        setState({
            ...state,
            aboutSelf,
            formValid,
            error: {...state.error, aboutSelfError}
        })
        return formValid
    }
    function handleChange(e)
    {
        if (e.target.id === 'name') {
            validateName(e.target.value)
        }
        if (e.target.id === 'dateOfBirth') {
            validateDateOfBirth(e.target.value)
        }
        if (e.target.id === 'email') {
            validateEmail(e.target.value)
        }
        if (e.target.id === 'contactNumber') {
            validateContactNumber(e.target.value)
        }
        if (e.target.id === 'aboutSelf') {
            validateAboutSelf(e.target.value)
        }
    }
    function handleSubmit(e) 
    {
        e.preventDefault()
        if(validateName(state.name) && validateDateOfBirth(state.dateOfBirth) && validateContactNumber(state.contactNumber) && validateEmail(state.email) && validateAboutSelf(state.aboutSelf)) {
            props.addData(state)
            setState({
                id: null,
                name: '',
                dateOfBirth: '',
                email:'',
                contactNumber: '',
                aboutSelf: '',
                error: {
                    nameError: '',
                    dateOfBirthError: '',
                    emailError: '',
                    contactNumberError: '',
                    aboutSelfError: '', 
                },
            })
        }
    }
    console.log(state)
    return(
        <Container style={{ padding: "5px"}}>
            <Form onSubmit={handleSubmit}>
                <h2>Number Three</h2>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" id="name" onChange={handleChange} placeholder='Please enter your name...'></Form.Control>
                    <Form.Text style={{ color: 'red' }}>{state.error.nameError}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" name="dateOfBirth" id="dateOfBirth" onChange={handleChange} placeholder='Please enter your birthday...'></Form.Control>
                    <Form.Text style={{ color: 'red' }}>{state.error.dateOfBirthError}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" id="email" onChange={handleChange} placeholder='Please enter your email...'></Form.Control>
                    <Form.Text style={{ color: 'red' }}>{state.error.emailError}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" name="contactNumber" id="contactNumber" onChange={handleChange} placeholder='Please enter your contact number...'></Form.Control>
                    <Form.Text style={{ color: 'red' }}>{state.error.contactNumberError}</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>About Yourself</Form.Label>
                    <Form.Control type="text" name="aboutSelf" id="aboutSelf" onChange={handleChange} placeholder='Tell me about yourself...'></Form.Control>
                    <Form.Text style={{ color: 'red' }}>{state.error.aboutSelfError}</Form.Text>
                </Form.Group>
                <Button style={{ marginTop: "5px"}} variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default FormProper