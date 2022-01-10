import React from 'react'
import {Container, Table, Button, Label} from "semantic-ui-react";

const data = [
    {
        id: 1,
        name: 'test',
        cost: 101,
        amount: 3,
    },
    {
        id: 2,
        name: 'another test',
        cost: 500,
        amount: 1,
    }
]

const Cart = () => {
    const lines = data.map((value, idx) => {
        return (
            <Table.Row>
                <Table.Cell>{idx + 1}</Table.Cell>
                <Table.Cell>{value.name}</Table.Cell>
                <Table.Cell>{value.cost}</Table.Cell>
                <Table.Cell className='cell'>
                    <Button.Group className='buttons' icon>
                        <Button icon='plus' />
                        <Label basic>{value.amount}</Label>
                        <Button icon='minus'/>
                    </Button.Group>
                </Table.Cell>
                <Table.Cell>{value.cost * value.amount}</Table.Cell>
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
                        <Table.HeaderCell>Cost</Table.HeaderCell>
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

export default Cart;