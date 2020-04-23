import React, { Component } from 'react';
import './App.css';
//Redux



import Container from 'react-bootstrap/Container';
import { Row, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Subtotal from './subtotal/subtotal';
import Pickup from './pickup/pickup';
import Taxes from './taxes/taxes';
import Promo from './promo/promo';
import Total from './total/total';
import Item from './item/item';

import Col from 'react-bootstrap/Col';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 10000000000000,
      pickup: -3.7,
      tax: 0,
      ttotal: 0
    }
  }

  giveDiscount = (e) => {
    e.preventDefault();
    console.log('discount applied');
  }

  componentDidMount = () => {
    this.setState({ tax: (this.state.total + this.state.pickup) * .1 });
    this.setState({ ttotal: (this.state.total + this.state.pickup + this.state.tax) });

  }


  render() {

    return (
      <div variant='light'>
        <Container >
          <Row >
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '18rem' }} bg="light" >
                <ListGroup variant="flush">
                  <ListGroup.Item><Subtotal price={this.state.total.toFixed(2)} /></ListGroup.Item>
                  <ListGroup.Item><Pickup price={this.state.pickup} /></ListGroup.Item>
                  <ListGroup.Item><Taxes price={this.state.tax} /></ListGroup.Item>

                </ListGroup>
                <Card.Body>
                  <ListGroup.Item><Total price={this.state.ttotal} /></ListGroup.Item>
                  <ListGroup.Item><Item /></ListGroup.Item>
                  <ListGroup.Item><Promo giveDiscount={this.giveDiscount} /></ListGroup.Item>
                </Card.Body>
              </Card>

            </Col>

          </Row >


        </Container >
      </div>
    );
  }
}
export default App;

