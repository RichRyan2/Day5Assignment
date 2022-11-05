import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const NumberTwo = () => 
{
    const [arrayOfNames, setArrayOfNames ] = useState(["Yoimiya", "Yae Miko", "Eula", "Raiden Shogun"])
    const [object, setObject] = useState({
        name: "Yoimiya",
        element: "Pyro,",
        weapon: "Bow",
        location: "Inazuma"
    })
    const [number, setNumber] = useState(0)
    const newArrayOfNames = [...arrayOfNames]
    function updateNameArray()
    {
        return((arrayOfNames[1] === 'Yae Miko') ? ('Fischl') : ('Yae Miko'))
    }
    newArrayOfNames[1] = updateNameArray()
    return (
        <>
            <Container>
                <h3>Number Two</h3>
                <p>
                    Press the button below to change the second name in the array.<br />
                    {arrayOfNames.map(name => {return(name) + ' | '})}
                </p>
                <Button onClick={() => setArrayOfNames(newArrayOfNames)}>Update</Button>
            </Container><br />
            <Container>
                <p>
                    Press the button bellow to change the character below.<br />
                    {object.name} is a {object.element} {object.weapon} user from {object.location}.
                </p>
                <Button onClick={() => setObject({...object, name: "Amber", location: "Monstadt"})}>Update</Button>
            </Container><br />
            <Container>
                <p>
                    Press any buttons below to execute corresponding command.<br />
                    Number: {number} <br /> 
                </p>
                <Button onClick={() => setNumber(number + 1)}>+1</Button>
                <Button onClick={() => setNumber(number + 10)}>+10</Button>
                <Button onClick={() => setNumber(number + 100)}>+100</Button>
                <Button onClick={() => setNumber(number * 10)}>x10</Button>
            </Container>
        </>
    )
}

export default NumberTwo