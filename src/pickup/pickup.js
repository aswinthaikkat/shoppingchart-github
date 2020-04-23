import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';


export default class Pickup extends Component {

    render() {
        const tooltip = (
            < Tooltip id={`tooltip-up`
            }>
                Pick order in store and save money
            </Tooltip >

        );
        return (
            <Row>
                <Col className="text-center">
                    <OverlayTrigger
                        placement='top'
                        overlay={tooltip}
                    >
                        <div >Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col className="text-center">{`${this.props.price}`}</Col>
            </Row>
        )
    }
}