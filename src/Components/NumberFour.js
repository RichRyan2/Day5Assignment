import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AnswerToA, AnswerToB, AnswerToC, AnswerToD } from './Answers'

const NumberFour = () => 
{
    const commonIdsList = AnswerToA().commonIds.map(item => {
        return(
            <>{item.id}: {'\'' + item.name + '\''}<br /></>
        )
    })
    const differentIdsList = AnswerToA().differentIds.map(item => {
        return(
            <>{item.id}: {'\'' + item.name + '\''}<br /></>
        )
    })
    return (
        <Container>
            <Row />
            <Row>
                <Col>
                    <h5>Symmetric difference of 2 arrays</h5>
                </Col>
                <Col>
                    <h5>Common storageVal Value</h5>
                </Col>
                <Col>
                    <h5>Flatten an array</h5>
                </Col>
                <Col>
                    <h5>Flatten an array</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Given: <br />
                        {'const arrOne = [{id: 20, name: \'alex\'}, {id: 30, name: \'alina\'}]'}<br />
                        {'const arrTwo = [{id: 40, name: \'hello\'}, {id: 30, name: \'world\'}]'}<br /><br />
                        Common: <br />
                        {commonIdsList}<br />
                        Difference: <br />
                        {differentIdsList}
                    </p>
                </Col>
                <Col>
                    <p>
                        Given: <br />
                        {'const str = [\'u\', \'ec\']'}<br />
                        {'const arr = [{storageVal: \'u\', table: [\'E\', \'F\']},{storageVal: \'data\', id: 3 }, {storageVal: \'ec\', table: [\'E\']}]'}<br /><br />
                        Answer: <br />
                        {AnswerToB()}
                    </p>
                </Col>
                <Col>
                    <p>
                        Given: <br />
                        {'const a = [[\'E\'], [\'F\']]'}<br /><br />
                        Answer: <br />
                        {AnswerToC()}
                    </p>
                </Col>
                <Col>
                    <p>
                        Given: <br />
                        {'const t = [[\'E\', \'F\'], [[\'F\'], [\'G\']]]'}<br /><br />
                        Answer: <br />
                        {AnswerToD()}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default NumberFour