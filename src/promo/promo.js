import React, { Component } from 'react';
import { Row, Col, Button, Collapse, Form } from 'react-bootstrap';

class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            value: ''
        }
    }

    onclick = () => {
        this.setState({ show: !this.state.show });
    }

    onsubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    onchange = (e) => {
        this.setState({ value: e.target.value });
        console.log(this.state.value);

    }



    render() {
        return (

            <Row>
                <Button variant='secondary' onClick={this.onclick}>
                    {this.state.show ? 'No offer' : 'Add offer'}
                </Button>
                <Collapse in={this.state.show}>
                    <Form onSubmit={this.props.giveDiscount}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Promo Code" onChange={this.onchange} />
                            <Form.Text className="text-muted">
                                Do not never share your promocode with anyone else.
    </Form.Text>
                        </Form.Group>
                        <Button variant="secondary" type="submit" >
                            Apply
  </Button>
                    </Form>
                </Collapse>
            </Row>

        )
    }
}

export default Promo