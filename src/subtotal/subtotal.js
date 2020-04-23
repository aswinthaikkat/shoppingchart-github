import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Subtotal extends Component {
    render() {
        return (
            <Row>
                <Col className="text-center">Subtotal</Col>
                <Col className="text-center">{`${this.props.price}`}</Col>
            </Row>
        )
    }
}