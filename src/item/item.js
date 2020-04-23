import React, { Component } from 'react';
import { Row, Button, Collapse } from 'react-bootstrap';
export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }


    }

    onclicked = () => {
        this.setState({ show: !this.state.show })
    }


    render() {
        return (

            <Row>
                <Button variant="secondary" onClick={this.onclicked}>{this.state.show === true ? 'Hide items' : 'Show items'}</Button>
                <Collapse in={this.state.show}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
        </div>
                </Collapse>
            </Row>
        )
    }
}