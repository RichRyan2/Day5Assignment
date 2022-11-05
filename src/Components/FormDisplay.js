import React, {useState} from "react"
import { Button, Modal } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const FormDisplay = ({ personData }) => {
    const [show, setShow] = useState(true)

    const personDataList = personData.map(person => {
        return(
            <React.Fragment key={person.id}>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Submitted Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        Name: {person.name}<br />
                        Birth Date: {person.dateOfBirth}<br />
                        Email: {person.email}<br />
                        Contact Number: {person.contactNumber}<br />
                        Description: {person.aboutSelf}<br />
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    })

    return(
        <>
           {personDataList}
        </>
    )
}

export default FormDisplay