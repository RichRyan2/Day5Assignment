import axios from "axios";
import React, { useEffect, useState } from "react"
import { Container, Form, Table } from "react-bootstrap"
import _ from 'lodash'

const Search = () =>
{
    const [state, setState] = useState([])
    const [copyOfState, setCopyOfState] = useState([])
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        axios.get(url).then((res => {
            setState(res.data)
            setCopyOfState(res.data)
        })).catch(err => console.log(err))
    }, [])
    function handleChange(e) {
        var searchString = e.target.value.trim()
        var matchedNames = new Array()
        copyOfState.forEach(function(employee) {
            (employee.name.toLowerCase().indexOf(searchString) != -1) ? (matchedNames.push(employee)) : ('')
        })
        console.log(matchedNames)
        if (searchString == '') {
            setState(copyOfState)
        }
        else {
            setState(matchedNames)
        }
    }
    const namesList = state.length ? (
        state.map(employee => {
            return(
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                </tr>)
            })) : ('')
    return(
        <>
            <br />
            <Container>
            <Form>
                <Form.Group>
                    <Form.Control placeholder='Search names...' onInput={handleChange}/>
                </Form.Group>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {namesList}
                    </tbody>
                </Table>
            </Form> 
            </Container>
        </>  
    )
}

export default Search