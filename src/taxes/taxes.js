import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
export default class Taxes extends Component {
    render() {
        return (
            <Row>
                <Col className="text-center">Taxes</Col>
                <Col className="text-center">{`${this.props.price}`}</Col>
            </Row>
        )
    }
}