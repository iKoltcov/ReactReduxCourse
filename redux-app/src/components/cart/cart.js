import React, {Component} from 'react'
import {connect} from "react-redux";
import {Container, Table, Button, Label, Dimmer, Loader} from "semantic-ui-react";
import {updateUser, itemAddedToCart, itemRemovedFromCart} from "../../actions";

class Cart extends Component {
    render() {
        if(!this.props.user){
            return (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            )
        }

        const { purchased } = this.props.user
        const lines = purchased.map((value, idx) => {
            return (
                <Table.Row key={idx + 1}>
                    <Table.Cell>{idx + 1}</Table.Cell>
                    <Table.Cell>{value.name}</Table.Cell>
                    <Table.Cell>{value.price}</Table.Cell>
                    <Table.Cell>
                        <Button.Group icon>
                            <Button icon='plus' onClick={() => this.props.itemAddedToCart(value.id)}/>
                            <Label basic>{value.amount}</Label>
                            <Button icon='minus' onClick={() => this.props.itemRemovedFromCart(value.id)}/>
                        </Button.Group>
                    </Table.Cell>
                    <Table.Cell>{value.price * value.amount}</Table.Cell>
                </Table.Row>
            )
        })

        return (
            <Container>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Total</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {lines}
                    </Table.Body>
                </Table>
            </Container>
        )
    }
}

export default connect(state => ({ user: state.user }), { updateUser, itemAddedToCart, itemRemovedFromCart })(Cart);