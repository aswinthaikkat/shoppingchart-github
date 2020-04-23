import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Total extends Component {
    render() {
        return (
            <Row>
                <Col className="text-center"><h1>Total</h1></Col>
                <Col className="text-center"><h1>{`${this.props.price}`}</h1></Col>
            </Row>
        )
    }
}