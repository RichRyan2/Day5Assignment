import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import withRouter from './withRouter'
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberOne extends Component 
{
    state = {
        firstColor: this.props.params.firstColor,
        secondColor: this.props.params.secondColor
    }
    render () 
    {
        return(
            <>
                <Container>
                    <Row />
                    <Row>
                        <Col>
                            <h3>First Element</h3>
                        </Col>
                        <Col>
                            <h3>Second Element</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card bg={this.state.firstColor} style={{ height: '500px'}}>
                                <Card.Body />
                            </Card>
                        </Col>
                        <Col>
                            <Card bg={this.state.secondColor} style={{ height: '500px'}}>
                                <Card.Body />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

}

export default withRouter(NumberOne)